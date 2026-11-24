SPOOKY ARCADE - game audio set (living world / spirit world)

SHIPPED (Vorbis ~96 kbps for faster first load; masters/ keeps the full-rate sources)
  title_minimal_melody_loop.ogg   ~145 s  title / mode select
  melodic_clean_loop.ogg          170.93 s  living world. Seamless loop, 80 bars, 112.33 BPM, F minor
  melodic_spirit_reverb_loop.ogg  170.93 s  spirit world. Same music with heavy reverb, seamless loop
  sfx_world_switch.ogg            0.83 s    quick spin-up, used for both directions

NOT SHIPPED YET
  boss_theme_loop.ogg             ~147 s  boss bed (single)
  boss_clean_loop.ogg             170.93 s  living world, boss (synced dual)
  boss_spirit_reverb_loop.ogg     170.93 s  spirit world, boss (synced dual)
  sfx_world_switch_long.ogg       1.7 s     slower spin-up for bigger moments

Recompress shipped loops from masters/:
  ./tools/compress_audio.sh

SYNC
  Melodic (and dual boss) share the same bar grid. Seek the newly audible loop to the
  SAME position as the current one when crossing realms.

WIRING (living <-> spirit)
  1. Start sfx_world_switch.ogg about 0.27 s before the crossfade (its loudest point is at 0.27 s).
  2. Crossfade (equal power) to the other loop over about 0.25 s, at the same position.
