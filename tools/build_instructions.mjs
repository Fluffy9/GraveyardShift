#!/usr/bin/env node
/**
 * Compile INSTRUCTIONS.md → src/instructions.gen.json
 * (merged into runtime copy by src/copy.js).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'INSTRUCTIONS.md');
const OUT = path.join(ROOT, 'src', 'instructions.gen.json');

function mdInline(s) {
  return String(s)
    .replace(/`([^`]+)`/g, '<kbd>$1</kbd>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
}

function extractTouch(block) {
  const m = String(block).match(/<!--\s*touch:\s*([\s\S]*?)-->/);
  if (!m) return { body: String(block).trim(), touch: null };
  return {
    body: String(block).replace(m[0], '').trim(),
    touch: m[1].trim(),
  };
}

function toHtml(text) {
  return text
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => mdInline(p.replace(/\n/g, '<br>')))
    .join('<br>');
}

function parasHtml(block) {
  const { body, touch } = extractTouch(block);
  return {
    html: toHtml(body),
    touchHtml: touch ? toHtml(touch) : null,
  };
}

function parseSections(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const root = { title: null, kids: new Map() };
  const stack = [{ level: 0, node: root }];
  let buf = [];

  const flush = () => {
    const cur = stack[stack.length - 1].node;
    const text = buf.join('\n').trim();
    buf = [];
    if (text) cur.blocks = (cur.blocks || []).concat([text]);
  };

  for (const line of lines) {
    const hm = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
    if (hm) {
      flush();
      const level = hm[1].length;
      const name = hm[2].trim();
      while (stack.length && stack[stack.length - 1].level >= level) stack.pop();
      const parent = stack[stack.length - 1].node;
      const node = { name, kids: new Map(), blocks: [] };
      parent.kids.set(name.toLowerCase(), node);
      if (level === 1) root.title = name;
      stack.push({ level, node });
      continue;
    }
    buf.push(line);
  }
  flush();
  return root;
}

const kid = (node, name) => (node && node.kids.get(String(name).toLowerCase())) || null;
const block = node => (node && node.blocks && node.blocks[0]) || '';

function parseTable(text) {
  const rows = [];
  for (const line of String(text).split('\n')) {
    if (!/^\|/.test(line) || /^\|\s*-+/.test(line)) continue;
    const cells = line.split('|').slice(1, -1).map(c => c.trim());
    if (cells.length >= 2) rows.push({ keys: cells[0], action: cells[1] });
  }
  if (rows.length && /keys|gesture/i.test(rows[0].keys)) rows.shift();
  return rows;
}

function parseHowto(raw) {
  const { body, touch } = extractTouch(raw);
  const paras = body.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  return {
    howto: mdInline((paras[0] || '').replace(/\n/g, ' ')),
    howtoTouch: touch ? mdInline(touch.replace(/\n/g, ' ')) : '',
    howtoEnd: mdInline((paras.slice(1).join(' ') || '').replace(/\n/g, ' ')),
  };
}

function parseClip(node) {
  const raw = block(node);
  const img = raw.match(/!\[[^\]]*\]\(([^)]+)\)/);
  const src = img ? img[1].trim() : `clips/${node.name.toLowerCase()}.gif`;
  const rest = raw.replace(/!\[[^\]]*\]\([^)]+\)\s*/, '').trim();
  const { html, touchHtml } = parasHtml(rest);
  return { id: node.name.toLowerCase(), src, caption: html, captionTc: touchHtml || html };
}

const tree = parseSections(fs.readFileSync(SRC, 'utf8'));
// H2 sections hang under the H1 doc title node.
const doc = [...tree.kids.values()][0] || tree;
const titleSec = kid(doc, 'title');
const howtoSec = kid(doc, 'how to play');
const tips = kid(doc, 'tutorial tips');
const clips = kid(doc, 'menu clips');
const controls = kid(doc, 'controls');
const outcomes = kid(doc, 'outcomes');
const toasts = kid(doc, 'toasts');

const flavor = parasHtml(block(titleSec)).html;
const howto = parseHowto(block(howtoSec));
const cross = parasHtml(block(kid(tips, 'cross')));
const winHtml = parasHtml(block(kid(outcomes, 'win'))).html;

const data = {
  titleScreen: {
    ariaLabel: tree.title || doc.name || 'Graveyard Shift',
    flavor,
    howto: howto.howto,
    howtoTouch: howto.howtoTouch || howto.howto,
    howtoEnd: howto.howtoEnd,
  },
  tips: {
    intro: parasHtml(block(kid(tips, 'intro'))).html,
    crossKb: cross.html,
    crossTc: cross.touchHtml || cross.html,
    wisp: parasHtml(block(kid(tips, 'wisp'))).html,
  },
  menu: {
    howto: {
      lead: 'Night shift orientation',
      clips: clips ? [...clips.kids.values()].map(parseClip) : [],
    },
    controls: {
      keyboard: parseTable(block(kid(controls, 'keyboard'))),
      touch: parseTable(block(kid(controls, 'touch'))),
    },
  },
  win: {
    flavor: winHtml.startsWith('"') ? winHtml : `"${winHtml}"`,
  },
  lose: {
    flavor: parasHtml(block(kid(outcomes, 'lose'))).html,
  },
  toasts: {
    midnight: parasHtml(block(kid(toasts, 'midnight'))).html.replace(/<br>/g, ' '),
  },
};

fs.writeFileSync(OUT, `${JSON.stringify(data, null, 2)}\n`);
console.log('wrote', path.relative(ROOT, OUT));
