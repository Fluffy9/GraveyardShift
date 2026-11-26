(()=>{var I0=0,Yd=1,P0=2;var $d=0,gl=1,L0=2,Xo=3,Hi=0,xn=1,li=2,Dr=0,qo=1,Ws=2,Kd=3,Zd=4,N0=5;var Ur=100,D0=101,U0=102,O0=103,F0=104,k0=200,B0=201,z0=202,H0=203,Jd=204,jd=205,G0=206,V0=207,W0=208,X0=209,q0=210,Y0=211,$0=212,K0=213,Z0=214,Yc=0,$c=1,Kc=2,Ro=3,Zc=4,Jc=5,jc=6,Qc=7,Qd=0,J0=1,j0=2,Gi=0,ef=1,tf=2,nf=3,sf=4,rf=5,of=6,af=7,Dd="attached",Q0="detached",lf=300,Or=301,Yo=302,yu=303,vu=304,ks=1e3,ri=1001,Co=1002,st=1003,Mu=1004;var Fr=1005;var Jt=1006,$o=1007;var ci=1008;var Fn=1009,cf=1010,uf=1011,Ko=1012,bu=1013,Ei=1014,Xn=1015,qn=1016,Su=1017,Eu=1018,kr=1020,hf=35902,df=35899,ff=1021,pf=1022,ui=1023,cs=1026,ys=1027,Tu=1028,wu=1029,Xs=1030,Au=1031;var Ru=1033,xl=33776,_l=33777,yl=33778,vl=33779,Cu=35840,Iu=35841,Pu=35842,Lu=35843,Nu=36196,Du=37492,Uu=37496,Ou=37488,Fu=37489,Ml=37490,ku=37491,Bu=37808,zu=37809,Hu=37810,Gu=37811,Vu=37812,Wu=37813,Xu=37814,qu=37815,Yu=37816,$u=37817,Ku=37818,Zu=37819,Ju=37820,ju=37821,Qu=36492,eh=36494,th=36495,nh=36283,ih=36284,bl=36285,sh=36286;var Er=2300,Tr=2301,Xc=2302,Ud=2303,Od=2400,Fd=2401,kd=2402,eg=2500;var mf=0,Sl=1,Zo=2,tg=3200;var El=0,ng=1,vs="",Mt="srgb",gn="srgb-linear",Ya="linear",gt="srgb";var qc=7680;var ig=519,sg=512,rg=513,og=514,gf=515,ag=516,lg=517,xf=518,_f=519,yf=35044;var vf="300 es",oi=2e3,Io=2001;function av(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cg(){let n=Po("canvas");return n.style.display="block",n}var zm={},Lo=null;function $a(...n){let e="THREE."+n.shift();Lo?Lo("log",e,...n):console.log(e,...n)}function ug(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=ug(n);let e="THREE."+n.shift();if(Lo)Lo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ge(...n){n=ug(n);let e="THREE."+n.shift();if(Lo)Lo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Sr(...n){let e=n.join(" ");e in zm||(zm[e]=!0,Le(...n))}function hg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var dg={[Yc]:Yc,[Kc]:jc,[Zc]:Zc,[Ro]:Jc,[$c]:$c,[jc]:Kc,[Qc]:Qc,[Jc]:Ro},Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hm=1234567,Xa=Math.PI/180,wr=180/Math.PI;function Vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Mf(n,e){return(n%e+e)%e}function cv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function uv(n,e,t){return n!==e?(t-n)/(e-n):0}function qa(n,e,t){return(1-t)*n+t*e}function hv(n,e,t,i){return qa(n,e,1-Math.exp(-t*i))}function dv(n,e=1){return e-Math.abs(Mf(n,e*2)-e)}function fv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gv(n,e){return n+Math.random()*(e-n)}function xv(n){return n*(.5-Math.random())}function _v(n){n!==void 0&&(Hm=n);let e=Hm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yv(n){return n*Xa}function vv(n){return n*wr}function Mv(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function bv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*u,a*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sf(n,e){if(e.constructor===Float32Array)return n;let t=rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Ef(n,e){if(e.constructor===Float32Array)return n;let t=rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var dt={DEG2RAD:Xa,RAD2DEG:wr,generateUUID:Vi,clamp:it,euclideanModulo:Mf,mapLinear:cv,inverseLerp:uv,lerp:qa,damp:hv,pingpong:dv,smoothstep:fv,smootherstep:pv,randInt:mv,randFloat:gv,randFloatSpread:xv,seededRandom:_v,degToRad:yv,radToDeg:vv,isPowerOfTwo:Mv,ceilPowerOfTwo:bv,floorPowerOfTwo:bf,setQuaternionFromProperEuler:Sv,normalize:Ef,denormalize:Sf},se=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(h!==y||l!==d||c!==f||u!==m){let p=l*d+c*f+u*m+h*y;p<0&&(d=-d,f=-f,m=-m,y=-y,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),S=Math.sin(v);g=Math.sin(g*v)/S,a=Math.sin(a*v)/S,l=l*g+d*a,c=c*g+f*a,u=u*g+m*a,h=h*g+y*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+m*a,h=h*g+y*a;let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ld=new I,Gm=new In,We=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],y=s[0],p=s[3],g=s[6],v=s[1],S=s[4],b=s[7],A=s[2],w=s[5],_=s[8];return r[0]=o*y+a*v+l*A,r[3]=o*p+a*S+l*w,r[6]=o*g+a*b+l*_,r[1]=c*y+u*v+h*A,r[4]=c*p+u*S+h*w,r[7]=c*g+u*b+h*_,r[2]=d*y+f*v+m*A,r[5]=d*p+f*S+m*w,r[8]=d*g+f*b+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=t*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=h*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cd.makeScale(e,t)),this}rotate(e){return Sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cd.makeRotation(-e)),this}translate(e,t){return Sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cd=new We,Vm=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wm=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ev(){let n={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=Ao(s.r),s.g=Ao(s.g),s.b=Ao(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vs?Ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gn]:{primaries:e,whitePoint:i,transfer:Ya,toXYZ:Vm,fromXYZ:Wm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Vm,fromXYZ:Wm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),n}var nt=Ev();function ls(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var lo,eu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{lo===void 0&&(lo=Po("canvas")),lo.width=e.width,lo.height=e.height;let s=lo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=lo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Po("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ls(t[i]/255)*255):t[i]=ls(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tv=0,No=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ud(s[o].image)):r.push(ud(s[o]))}else r=ud(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ud(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var wv=0,hd=new I,jt=class n extends Fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ri,s=ri,r=Jt,o=ci,a=ui,l=Fn,c=n.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Vi(),this.name="",this.source=new No(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=lf;jt.DEFAULT_ANISOTROPY=1;var yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,b=(f+1)/2,A=(g+1)/2,w=(u+d)/4,_=(h+y)/4,T=(m+p)/4;return S>b&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=_/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=T/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=T/r),this.set(i,s,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(h-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tu=class extends Fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new jt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new No(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends tu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ka=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=st,this.minFilter=st,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nu=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=st,this.minFilter=st,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ve=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,m,y,p)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,m,y,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/co.setFromMatrixColumn(e,0).length(),r=1/co.setFromMatrixColumn(e,1).length(),o=1/co.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,m=c*u,y=c*h;t[0]=d+y*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,m=c*u,y=c*h;t[0]=d-y*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,y=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*u,t[4]=y-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-y*h}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Av,e,Rv)}lookAt(e,t,i){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Ls.crossVectors(i,Hn),Ls.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Ls.crossVectors(i,Hn)),Ls.normalize(),xc.crossVectors(Hn,Ls),s[0]=Ls.x,s[4]=xc.x,s[8]=Hn.x,s[1]=Ls.y,s[5]=xc.y,s[9]=Hn.y,s[2]=Ls.z,s[6]=xc.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],y=i[6],p=i[10],g=i[14],v=i[3],S=i[7],b=i[11],A=i[15],w=s[0],_=s[4],T=s[8],U=s[12],P=s[1],F=s[5],G=s[9],$=s[13],N=s[2],Y=s[6],ee=s[10],W=s[14],oe=s[3],q=s[7],ne=s[11],ie=s[15];return r[0]=o*w+a*P+l*N+c*oe,r[4]=o*_+a*F+l*Y+c*q,r[8]=o*T+a*G+l*ee+c*ne,r[12]=o*U+a*$+l*W+c*ie,r[1]=u*w+h*P+d*N+f*oe,r[5]=u*_+h*F+d*Y+f*q,r[9]=u*T+h*G+d*ee+f*ne,r[13]=u*U+h*$+d*W+f*ie,r[2]=m*w+y*P+p*N+g*oe,r[6]=m*_+y*F+p*Y+g*q,r[10]=m*T+y*G+p*ee+g*ne,r[14]=m*U+y*$+p*W+g*ie,r[3]=v*w+S*P+b*N+A*oe,r[7]=v*_+S*F+b*Y+A*q,r[11]=v*T+S*G+b*ee+A*ne,r[15]=v*U+S*$+b*W+A*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],y=e[7],p=e[11],g=e[15],v=l*f-c*d,S=a*f-c*h,b=a*d-l*h,A=o*f-c*u,w=o*d-l*u,_=o*h-a*u;return t*(y*v-p*S+g*b)-i*(m*v-p*A+g*w)+s*(m*S-y*A+g*_)-r*(m*b-y*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],y=e[13],p=e[14],g=e[15],v=t*a-i*o,S=t*l-s*o,b=t*c-r*o,A=i*l-s*a,w=i*c-r*a,_=s*c-r*l,T=u*y-h*m,U=u*p-d*m,P=u*g-f*m,F=h*p-d*y,G=h*g-f*y,$=d*g-f*p,N=v*$-S*G+b*F+A*P-w*U+_*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/N;return e[0]=(a*$-l*G+c*F)*Y,e[1]=(s*G-i*$-r*F)*Y,e[2]=(y*_-p*w+g*A)*Y,e[3]=(d*w-h*_-f*A)*Y,e[4]=(l*P-o*$-c*U)*Y,e[5]=(t*$-s*P+r*U)*Y,e[6]=(p*b-m*_-g*S)*Y,e[7]=(u*_-d*b+f*S)*Y,e[8]=(o*G-a*P+c*T)*Y,e[9]=(i*P-t*G-r*T)*Y,e[10]=(m*w-y*b+g*v)*Y,e[11]=(h*b-u*w-f*v)*Y,e[12]=(a*U-o*F-l*T)*Y,e[13]=(t*F-i*U+s*T)*Y,e[14]=(y*S-m*A-p*v)*Y,e[15]=(u*A-h*S+d*v)*Y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,y=o*u,p=o*h,g=a*h,v=l*c,S=l*u,b=l*h,A=i.x,w=i.y,_=i.z;return s[0]=(1-(y+g))*A,s[1]=(f+b)*A,s[2]=(m-S)*A,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(d+g))*w,s[6]=(p+v)*w,s[7]=0,s[8]=(m+S)*_,s[9]=(p-v)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=co.set(s[0],s[1],s[2]).length(),a=co.set(s[4],s[5],s[6]).length(),l=co.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_i.copy(this);let c=1/o,u=1/a,h=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=u,_i.elements[5]*=u,_i.elements[6]*=u,_i.elements[8]*=h,_i.elements[9]*=h,_i.elements[10]*=h,t.setFromRotationMatrix(_i),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=oi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===oi)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Io)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===oi)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===Io)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},co=new I,_i=new Ve,Av=new I(0,0,0),Rv=new I(1,1,1),Ls=new I,xc=new I,Hn=new I,Xm=new Ve,qm=new In,Mi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Do=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cv=0,Ym=new I,uo=new In,ts=new Ve,_c=new I,Na=new I,Iv=new I,Pv=new In,$m=new I(1,0,0),Km=new I(0,1,0),Zm=new I(0,0,1),Jm={type:"added"},Lv={type:"removed"},ho={type:"childadded",child:null},dd={type:"childremoved",child:null},Lt=class n extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Mi,i=new In,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new We}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_c.copy(e):_c.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(Na,_c,this.up):ts.lookAt(_c,Na,this.up),this.quaternion.setFromRotationMatrix(ts),s&&(ts.extractRotation(s.matrixWorld),uo.setFromRotationMatrix(ts),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),ho.child=e,this.dispatchEvent(ho),ho.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lv),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ts.multiply(e.parent.matrixWorld)),e.applyMatrix4(ts),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,Iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,Pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new I(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oe=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nv={type:"move"},Uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},yc={h:0,s:0,l:0};function fd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Mf(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=fd(o,r,e+1/3),this.g=fd(o,r,e),this.b=fd(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let i=fg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return nt.workingToColorSpace(Sn.copy(this),e),Math.round(it(Sn.r*255,0,255))*65536+Math.round(it(Sn.g*255,0,255))*256+Math.round(it(Sn.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Sn.copy(this),t);let i=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Mt){nt.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,i=Sn.g,s=Sn.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ns),this.setHSL(Ns.h+e,Ns.s+t,Ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ns),e.getHSL(yc);let i=qa(Ns.h,yc.h,t),s=qa(Ns.s,yc.s,t),r=qa(Ns.l,yc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new ge;ge.NAMES=fg;var Za=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Oo=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yi=new I,ns=new I,pd=new I,is=new I,fo=new I,po=new I,jm=new I,md=new I,gd=new I,xd=new I,_d=new yt,yd=new yt,vd=new yt,as=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yi.subVectors(e,t),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yi.subVectors(s,t),ns.subVectors(i,t),pd.subVectors(e,t);let o=yi.dot(yi),a=yi.dot(ns),l=yi.dot(pd),c=ns.dot(ns),u=ns.dot(pd),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,is.x),l.addScaledVector(o,is.y),l.addScaledVector(a,is.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return _d.setScalar(0),yd.setScalar(0),vd.setScalar(0),_d.fromBufferAttribute(e,t),yd.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(_d,r.x),o.addScaledVector(yd,r.y),o.addScaledVector(vd,r.z),o}static isFrontFacing(e,t,i,s){return yi.subVectors(i,t),ns.subVectors(e,t),yi.cross(ns).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),yi.cross(ns).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;fo.subVectors(s,i),po.subVectors(r,i),md.subVectors(e,i);let l=fo.dot(md),c=po.dot(md);if(l<=0&&c<=0)return t.copy(i);gd.subVectors(e,s);let u=fo.dot(gd),h=po.dot(gd);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(fo,o);xd.subVectors(e,r);let f=fo.dot(xd),m=po.dot(xd);if(m>=0&&f<=m)return t.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(po,a);let p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return jm.subVectors(r,s),a=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(jm,a);let g=1/(p+y+d);return o=y*g,a=d*g,t.copy(i).addScaledVector(fo,o).addScaledVector(po,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vc.copy(i.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),Mc.subVectors(this.max,Da),mo.subVectors(e.a,Da),go.subVectors(e.b,Da),xo.subVectors(e.c,Da),Ds.subVectors(go,mo),Us.subVectors(xo,go),yr.subVectors(mo,xo);let t=[0,-Ds.z,Ds.y,0,-Us.z,Us.y,0,-yr.z,yr.y,Ds.z,0,-Ds.x,Us.z,0,-Us.x,yr.z,0,-yr.x,-Ds.y,Ds.x,0,-Us.y,Us.x,0,-yr.y,yr.x,0];return!Md(t,mo,go,xo,Mc)||(t=[1,0,0,0,1,0,0,0,1],!Md(t,mo,go,xo,Mc))?!1:(bc.crossVectors(Ds,Us),t=[bc.x,bc.y,bc.z],Md(t,mo,go,xo,Mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ss=[new I,new I,new I,new I,new I,new I,new I,new I],vi=new I,vc=new Wn,mo=new I,go=new I,xo=new I,Ds=new I,Us=new I,yr=new I,Da=new I,Mc=new I,bc=new I,vr=new I;function Md(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vr.fromArray(n,r);let a=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Yt=new I,Sc=new se,Dv=0,Pt=class extends Fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yf,this.updateRanges=[],this.gpuType=Xn,this.version=0,this._normalizationScale=e!==void 0?rh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sc.fromBufferAttribute(this,t),Sc.applyMatrix3(e),this.setXY(t,Sc.x,Sc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ef(e,this.array)}};var Ja=class extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ja=class extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Tt=class extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Uv=new Wn,Ua=new I,bd=new I,Un=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Uv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);let t=Ua.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ua,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(bd)),this.expandByPoint(Ua.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ov=0,si=new Ve,Sd=new Lt,_o=new I,Gn=new Wn,Oa=new Wn,un=new I,Bt=class n extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?ja:Ja)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Oa.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Gn.min,Oa.min),Gn.expandByPoint(un),un.addVectors(Gn.max,Oa.max),Gn.expandByPoint(un)):(Gn.expandByPoint(Oa.min),Gn.expandByPoint(Oa.max))}Gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)un.fromBufferAttribute(a,c),l&&(_o.fromBufferAttribute(e,c),un.add(_o)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Pt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)a[U]=new I,l[U]=new I;let u=new I,h=new I,d=new I,f=new se,m=new se,y=new se,p=new I,g=new I;function v(U,P,F){c[U]=c[P]=c[F]=1,u.fromBufferAttribute(i,U),h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,F),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,P),y.fromBufferAttribute(r,F),h.sub(u),d.sub(u),m.sub(f),y.sub(f);let G=1/(m.x*y.y-y.x*m.y);isFinite(G)&&(p.copy(h).multiplyScalar(y.y).addScaledVector(d,-m.y).multiplyScalar(G),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-y.x).multiplyScalar(G),a[U].add(p),a[P].add(p),a[F].add(p),l[U].add(g),l[P].add(g),l[F].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,P=S.length;U<P;++U){let F=S[U],G=F.start,$=F.count;for(let N=G,Y=G+$;N<Y;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let b=new I,A=new I,w=new I,_=new I;function T(U){w.fromBufferAttribute(s,U),_.copy(w);let P=a[U];b.copy(P),b.sub(w.multiplyScalar(w.dot(P))).normalize(),A.crossVectors(_,P);let G=A.dot(l[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,G)}for(let U=0,P=i.count;U<P;++U)c[U]&&T(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*u;for(let g=0;g<u;g++)d[m++]=c[f++]}return new Pt(d,u,h)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yf,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Qm(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Vi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Cn=new I,Bs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?rh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ef(e,this.data.array)}},Ed=new I,Fv=new I,kv=new We,Vn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ed.subVectors(i,t).cross(Fv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ed),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||kv.getNormalMatrix(e),s=this.coplanarPoint(Ed).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Bv=0,En=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=qo,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=jd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qc,this.stencilZFail=qc,this.stencilZPass=qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Vn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fo=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yo,Fa=new I,vo=new I,Mo=new I,bo=new se,ka=new se,pg=new Ve,Ec=new I,Ba=new I,Tc=new I,e0=new se,Td=new se,t0=new se,Qa=class extends Lt{constructor(e=new Fo){if(super(),this.isSprite=!0,this.type="Sprite",yo===void 0){yo=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ar(t,5);yo.setIndex([0,1,2,0,2,3]),yo.setAttribute("position",new Bs(i,3,0,!1)),yo.setAttribute("uv",new Bs(i,2,3,!1))}this.geometry=yo,this.material=e,this.center=new se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vo.setFromMatrixScale(this.matrixWorld),pg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vo.multiplyScalar(-Mo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;wc(Ec.set(-.5,-.5,0),Mo,o,vo,s,r),wc(Ba.set(.5,-.5,0),Mo,o,vo,s,r),wc(Tc.set(.5,.5,0),Mo,o,vo,s,r),e0.set(0,0),Td.set(1,0),t0.set(1,1);let a=e.ray.intersectTriangle(Ec,Ba,Tc,!1,Fa);if(a===null&&(wc(Ba.set(-.5,.5,0),Mo,o,vo,s,r),Td.set(0,1),a=e.ray.intersectTriangle(Ec,Tc,Ba,!1,Fa),a===null))return;let l=e.ray.origin.distanceTo(Fa);l<e.near||l>e.far||t.push({distance:l,point:Fa.clone(),uv:as.getInterpolation(Fa,Ec,Ba,Tc,e0,Td,t0,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function wc(n,e,t,i,s,r){bo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ka.x=r*bo.x-s*bo.y,ka.y=s*bo.x+r*bo.y):ka.copy(bo),n.copy(e),n.x+=ka.x,n.y+=ka.y,n.applyMatrix4(pg)}var rs=new I,wd=new I,Ac=new I,Rc=new I,zs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wd.copy(e).add(t).multiplyScalar(.5),Ac.copy(t).sub(e).normalize(),Rc.copy(this.origin).sub(wd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ac),a=Rc.dot(this.direction),l=-Rc.dot(Ac),c=Rc.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let y=1/u;h*=y,d*=y,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wd).addScaledVector(Ac,d),f}intersectSphere(e,t){if(e.radius<0)return null;rs.subVectors(e.center,this.origin);let i=rs.dot(this.direction),s=rs.dot(rs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,y=t.y-o.y,p=t.z-o.z,g=i.x-o.x,v=i.y-o.y,S=i.z-o.z,b=Math.abs(l),A=Math.abs(c),w=Math.abs(u),_,T,U,P,F,G,$,N,Y,ee,W,oe;if(b>=A&&b>=w?(U=l,G=h,Y=m,oe=g,l>=0?(_=c,T=u,P=d,F=f,$=y,N=p,ee=v,W=S):(_=u,T=c,P=f,F=d,$=p,N=y,ee=S,W=v)):A>=w?(U=c,G=d,Y=y,oe=v,c>=0?(_=u,T=l,P=f,F=h,$=p,N=m,ee=S,W=g):(_=l,T=u,P=h,F=f,$=m,N=p,ee=g,W=S)):(U=u,G=f,Y=p,oe=S,u>=0?(_=l,T=c,P=h,F=d,$=m,N=y,ee=g,W=v):(_=c,T=l,P=d,F=h,$=y,N=m,ee=v,W=g)),U===0)return null;let q=_/U,ne=T/U,ie=1/U,Ie=P-q*G,qe=F-ne*G,j=$-q*Y,Me=N-ne*Y,Ae=ee-q*oe,ke=W-ne*oe,be=Ae*Me-ke*j,Ke=Ie*ke-qe*Ae,Xt=j*qe-Me*Ie;if(s){if(be<0||Ke<0||Xt<0)return null}else if((be<0||Ke<0||Xt<0)&&(be>0||Ke>0||Xt>0))return null;let He=be+Ke+Xt;if(He===0)return null;let xt=ie*(be*G+Ke*Y+Xt*oe);return(He>0?xt<0:xt>0)?null:this.at(xt/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},n0=new Ve,Mr=new zs,Cc=new Un,i0=new I,Ic=new I,Pc=new I,Lc=new I,Ad=new I,Nc=new I,s0=new I,Dc=new I,ze=class extends Lt{constructor(e=new Bt,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Nc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Ad.fromBufferAttribute(h,e),o?Nc.addScaledVector(Ad,u):Nc.addScaledVector(Ad.sub(t),u))}t.add(Nc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(r),Mr.copy(e.ray).recast(e.near),!(Cc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Cc,i0)===null||Mr.origin.distanceToSquared(i0)>(e.far-e.near)**2))&&(n0.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(n0),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=v,A=S;b<A;b+=3){let w=a.getX(b),_=a.getX(b+1),T=a.getX(b+2);s=Uc(this,g,e,i,c,u,h,w,_,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let v=a.getX(p),S=a.getX(p+1),b=a.getX(p+2);s=Uc(this,o,e,i,c,u,h,v,S,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=v,A=S;b<A;b+=3){let w=b,_=b+1,T=b+2;s=Uc(this,g,e,i,c,u,h,w,_,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let v=p,S=p+1,b=p+2;s=Uc(this,o,e,i,c,u,h,v,S,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function zv(n,e,t,i,s,r,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Hi,a),l===null)return null;Dc.copy(a),Dc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Dc);return c<t.near||c>t.far?null:{distance:c,point:Dc.clone(),object:n}}function Uc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ic),n.getVertexPosition(l,Pc),n.getVertexPosition(c,Lc);let u=zv(n,e,t,i,Ic,Pc,Lc,s0);if(u){let h=new I;as.getBarycoord(s0,Ic,Pc,Lc,h),s&&(u.uv=as.getInterpolatedAttribute(s,a,l,c,h,new se)),r&&(u.uv1=as.getInterpolatedAttribute(r,a,l,c,h,new se)),o&&(u.normal=as.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};as.getNormal(Ic,Pc,Lc,d.normal),u.face=d,u.barycoord=h}return u}var za=new yt,r0=new yt,o0=new yt,Hv=new yt,a0=new Ve,Oc=new I,Rd=new Un,l0=new Ve,Cd=new zs,el=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dd,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oc),this.boundingBox.expandByPoint(Oc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oc),this.boundingSphere.expandByPoint(Oc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rd.copy(this.boundingSphere),Rd.applyMatrix4(s),e.ray.intersectsSphere(Rd)!==!1&&(l0.copy(s).invert(),Cd.copy(e.ray).applyMatrix4(l0),!(this.boundingBox!==null&&Cd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Q0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;r0.fromBufferAttribute(s.attributes.skinIndex,e),o0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(za.copy(t),t.set(0,0,0,0)):(za.set(t.x,t.y,t.z,1),t.set(0,0,0)),za.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=o0.getComponent(r);if(o!==0){let a=r0.getComponent(r);a0.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Hv.copy(za).applyMatrix4(a0),o)}}return t.isVector4&&(t.w=za.w),t.applyMatrix4(this.bindMatrixInverse)}},ko=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hs=class extends jt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=st,u=st,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},c0=new Ve,Gv=new Ve,tl=class n{constructor(e=[],t=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Gv;c0.multiplyMatrices(a,t[r]),c0.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Hs(t,e,e,ui,Xn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(Le("Skeleton: No bone found with UUID:",r),o=new ko),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},us=class extends Pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},So=new Ve,u0=new Ve,Fc=[],h0=new Wn,Vv=new Ve,Ha=new ze,Ga=new Un,Rr=class extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new us(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,So),h0.copy(e.boundingBox).applyMatrix4(So),this.boundingBox.union(h0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,So),Ga.copy(e.boundingSphere).applyMatrix4(So),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ha.geometry=this.geometry,Ha.material=this.material,Ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(i),e.ray.intersectsSphere(Ga)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,So),u0.multiplyMatrices(i,So),Ha.matrixWorld=u0,Ha.raycast(e,Fc);for(let o=0,a=Fc.length;o<a;o++){let l=Fc[o];l.instanceId=r,l.object=this,t.push(l)}Fc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hs(new Float32Array(s*this.count),s,this.count,Tu,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},br=new Un,Wv=new se(.5,.5),kc=new I,Gs=class{constructor(e=new Vn,t=new Vn,i=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],y=r[9],p=r[10],g=r[11],v=r[12],S=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-o,f-u,g-m,A-v).normalize(),s[1].setComponents(c+o,f+u,g+m,A+v).normalize(),s[2].setComponents(c+a,f+h,g+y,A+S).normalize(),s[3].setComponents(c-a,f-h,g-y,A-S).normalize(),i)s[4].setComponents(l,d,p,b).normalize(),s[5].setComponents(c-l,f-d,g-p,A-b).normalize();else if(s[4].setComponents(c-l,f-d,g-p,A-b).normalize(),t===oi)s[5].setComponents(c+l,f+d,g+p,A+b).normalize();else if(t===Io)s[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);let t=Wv.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(kc.x=s.normal.x>0?e.max.x:e.min.x,kc.y=s.normal.y>0?e.max.y:e.min.y,kc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},d0=new Ve,iu=class n{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];d0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Gs),i[s].setFromProjectionMatrix(d0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Gs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Bo=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},su=new I,ru=new I,f0=new Ve,Va=new zs,Bc=new Un,Id=new I,p0=new I,Cr=class extends Lt{constructor(e=new Bt,t=new Bo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)su.fromBufferAttribute(t,s-1),ru.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=su.distanceTo(ru);e.setAttribute("lineDistance",new Tt(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bc.copy(i.boundingSphere),Bc.applyMatrix4(s),Bc.radius+=r,e.ray.intersectsSphere(Bc)===!1)return;f0.copy(s).invert(),Va.copy(e.ray).applyMatrix4(f0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=f,p=m-1;y<p;y+=c){let g=u.getX(y),v=u.getX(y+1),S=zc(this,e,Va,l,g,v,y);S&&t.push(S)}if(this.isLineLoop){let y=u.getX(m-1),p=u.getX(f),g=zc(this,e,Va,l,y,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let y=f,p=m-1;y<p;y+=c){let g=zc(this,e,Va,l,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=zc(this,e,Va,l,m-1,f,m-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(su.fromBufferAttribute(a,s),ru.fromBufferAttribute(a,r),t.distanceSqToSegment(su,ru,Id,p0)>i)return;Id.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Id);if(!(c<e.near||c>e.far))return{distance:c,point:p0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var m0=new I,g0=new I,nl=class extends Cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)m0.fromBufferAttribute(t,s),g0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+m0.distanceTo(g0);e.setAttribute("lineDistance",new Tt(i,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},il=class extends Cr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},zo=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},x0=new Ve,Bd=new zs,Hc=new Un,Gc=new I,hs=class extends Lt{constructor(e=new Bt,t=new zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(s),Hc.radius+=r,e.ray.intersectsSphere(Hc)===!1)return;x0.copy(s).invert(),Bd.copy(e.ray).applyMatrix4(x0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,y=f;m<y;m++){let p=c.getX(m);Gc.fromBufferAttribute(h,p),_0(Gc,p,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,y=f;m<y;m++)Gc.fromBufferAttribute(h,m),_0(Gc,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _0(n,e,t,i,s,r,o){let a=Bd.distanceSqToPoint(n);if(a<t){let l=new I;Bd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var sl=class extends jt{constructor(e=[],t=Or,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tn=class extends jt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ds=class extends jt{constructor(e,t,i=Ei,s,r,o,a=st,l=st,c,u=cs,h=1){if(u!==cs&&u!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new No(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},rl=class extends ds{constructor(e,t=Ei,i=Or,s,r,o=st,a=st,l,c=cs){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ol=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ho=class n extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function m(y,p,g,v,S,b,A,w,_,T,U){let P=b/_,F=A/T,G=b/2,$=A/2,N=w/2,Y=_+1,ee=T+1,W=0,oe=0,q=new I;for(let ne=0;ne<ee;ne++){let ie=ne*F-$;for(let Ie=0;Ie<Y;Ie++){let qe=Ie*P-G;q[y]=qe*v,q[p]=ie*S,q[g]=N,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[g]=w>0?1:-1,u.push(q.x,q.y,q.z),h.push(Ie/_),h.push(1-ne/T),W+=1}}for(let ne=0;ne<T;ne++)for(let ie=0;ie<_;ie++){let Ie=d+ie+Y*ne,qe=d+ie+Y*(ne+1),j=d+(ie+1)+Y*(ne+1),Me=d+(ie+1)+Y*ne;l.push(Ie,qe,Me),l.push(qe,j,Me),oe+=6}a.addGroup(f,oe,U),f+=oe,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var bi=class n extends Bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,u=new se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var ou=class n extends Bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new I,b=new I,A=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],b),f(t[w+2],A),l(S,b,A,v)}function l(v,S,b,A){let w=A+1,_=[];for(let T=0;T<=w;T++){_[T]=[];let U=v.clone().lerp(b,T/w),P=S.clone().lerp(b,T/w),F=w-T;for(let G=0;G<=F;G++)G===0&&T===w?_[T][G]=U:_[T][G]=U.clone().lerp(P,G/F)}for(let T=0;T<w;T++)for(let U=0;U<2*(w-T)-1;U++){let P=Math.floor(U/2);U%2===0?(d(_[T][P+1]),d(_[T+1][P]),d(_[T][P])):(d(_[T][P+1]),d(_[T+1][P+1]),d(_[T+1][P]))}}function c(v){let S=new I;for(let b=0;b<r.length;b+=3)S.x=r[b+0],S.y=r[b+1],S.z=r[b+2],S.normalize().multiplyScalar(v),r[b+0]=S.x,r[b+1]=S.y,r[b+2]=S.z}function u(){let v=new I;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let b=p(v)/2/Math.PI+.5,A=g(v)/Math.PI+.5;o.push(b,1-A)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){let S=o[v+0],b=o[v+2],A=o[v+4],w=Math.max(S,b,A),_=Math.min(S,b,A);w>.9&&_<.1&&(S<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,S){let b=v*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function m(){let v=new I,S=new I,b=new I,A=new I,w=new se,_=new se,T=new se;for(let U=0,P=0;U<r.length;U+=9,P+=6){v.set(r[U+0],r[U+1],r[U+2]),S.set(r[U+3],r[U+4],r[U+5]),b.set(r[U+6],r[U+7],r[U+8]),w.set(o[P+0],o[P+1]),_.set(o[P+2],o[P+3]),T.set(o[P+4],o[P+5]),A.copy(v).add(S).add(b).divideScalar(3);let F=p(A);y(w,P+0,v,F),y(_,P+2,S,F),y(T,P+4,b,F)}}function y(v,S,b,A){A<0&&v.x===1&&(o[S]=v.x-1),b.x===0&&b.z===0&&(o[S]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var au=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new se:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],o=[],a=new I,l=new Ve;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function Xv(n,e){let t=1-n;return t*t*e}function qv(n,e){return 2*(1-n)*n*e}function Yv(n,e){return n*n*e}function Pd(n,e,t,i){return Xv(n,e)+qv(n,t)+Yv(n,i)}var Ir=class extends au{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Pd(e,s.x,r.x,o.x),Pd(e,s.y,r.y,o.y),Pd(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var fs=class n extends ou{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Qt=class n extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],y=[],p=[];for(let g=0;g<u;g++){let v=g*d-o;for(let S=0;S<c;S++){let b=S*h-r;m.push(b,-v,0),y.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let S=v+c*g,b=v+c*(g+1),A=v+1+c*(g+1),w=v+1+c*g;f.push(S,b,w),f.push(b,A,w)}this.setIndex(f),this.setAttribute("position",new Tt(m,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Si=class n extends Bt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new I,m=new se;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let g=r+p/i*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let y=0;y<s;y++){let p=y*(i+1);for(let g=0;g<i;g++){let v=g+p,S=v,b=v+i+1,A=v+i+2,w=v+1;a.push(S,b,w),a.push(b,A,w)}}this.setIndex(a),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var al=class n extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,d=new I,f=[],m=[],y=[],p=[];for(let g=0;g<=i;g++){let v=[],S=g/i,b=o+S*a,A=e*Math.cos(b),w=Math.sqrt(e*e-A*A),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let U=T/t,P=s+U*r;h.x=-w*Math.cos(P),h.y=A,h.z=w*Math.sin(P),m.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),p.push(U+_,1-S),v.push(c++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let S=u[g][v+1],b=u[g][v],A=u[g+1][v],w=u[g+1][v+1];(g!==0||o>0)&&f.push(S,b,w),(g!==i-1||l<Math.PI)&&f.push(b,A,w)}this.setIndex(f),this.setAttribute("position",new Tt(m,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Br(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(y0(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(y0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function wn(n){let e={};for(let t=0;t<n.length;t++){let i=Br(n[t]);for(let s in i)e[s]=i[s]}return e}function y0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $v(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var mg={clone:Br,merge:wn},Kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kv,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=$v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ve().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},lu=class extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pr=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ln=class extends Pr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Sr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Sr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ai=class extends En{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var cu=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uu=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Wa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Jv(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function v0(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function jv(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hu=class extends ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Od,endingEnd:Od}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fd:r=e,a=2*t-i;break;case kd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fd:o=e,l=2*i-t;break;case kd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(s-t),y=m*m,p=y*m,g=-d*p+2*d*y-d*m,v=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*m+1,S=(-1-f)*p+(1.5+f)*y+.5*m,b=f*p-f*y;for(let A=0;A!==a;++A)r[A]=g*o[u+A]+v*o[c+A]+S*o[l+A]+b*o[h+A];return r}},du=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},fu=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pu=class extends ki{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-t)/(s-t),y=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let y=o[c+m],p=o[l+m],g=f*d+m*2,v=h[g],S=h[g+1],b=e*d+m*2,A=u[b],w=u[b+1],_=eM(i,t,v,A,s);r[m]=gg(_,y,S,w,p)}return r}};function gg(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Qv(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function eM(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=gg(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Qv(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var On=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Wa(e.settings)&&(i.settings={inTangents:Fs(e.settings.inTangents,Array),outTangents:Fs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case Xc:t=this.InterpolantFactoryMethodSmooth;break;case Ud:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return Xc;case this.InterpolantFactoryMethodBezier:return Ud}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Wa(this.settings)&&(M0(this.settings.inTangents,e),M0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Wa(this.settings)&&(b0(this.settings.inTangents,e),b0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ge("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&lv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,f=h+i;for(let m=0;m!==i;++m){let y=t[h+m];if(y!==t[d+m]||y!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function M0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function b0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Tr;var ps=class extends On{constructor(e,t,i){super(e,t,i)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Er;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};ll.prototype.ValueTypeName="color";var ms=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};ms.prototype.ValueTypeName="number";var mu=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},gs=class extends On{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}};gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends On{constructor(e,t,i){super(e,t,i)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Er;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};Vs.prototype.ValueTypeName="vector";var cl=class{constructor(e="",t=-1,i=[],s=eg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(nM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(On.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Jv(l);l=v0(l,1,u),c=v0(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function tM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return Vs;case"color":return ll;case"quaternion":return gs;case"bool":case"boolean":return ps;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function nM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=tM(n.type);if(n.times===void 0){let i=[],s=[];jv(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Wa(n.settings)&&(t.settings={inTangents:Fs(n.settings.inTangents,Float32Array),outTangents:Fs(n.settings.outTangents,Float32Array)}),t}var Oi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(S0(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!S0(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function S0(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var gu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xg=new gu,Bi=class{constructor(e){this.manager=e!==void 0?e:xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var os={},zd=class extends Error{constructor(e,t){super(e),this.response=t}},Go=class extends Bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Oi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(os[e]!==void 0){os[e].push({onLoad:t,onProgress:i,onError:s});return}os[e]=[],os[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=os[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,y=0,p=new ReadableStream({start(g){v();function v(){h.read().then(({done:S,value:b})=>{if(S)g.close();else{y+=b.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:f});for(let w=0,_=u.length;w<_;w++){let T=u[w];T.onProgress&&T.onProgress(A)}g.enqueue(b),v()}},S=>{g.error(S)})}}});return new Response(p)}else throw new zd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Oi.add(`file:${e}`,c);let u=os[e];delete os[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=os[e];if(u===void 0)throw this.manager.itemError(e),c;delete os[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Eo=new WeakMap,xu=class extends Bi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Oi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Eo.get(o);h===void 0&&(h=[],Eo.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Po("img");function l(){u(),t&&t(this);let h=Eo.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Eo.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Oi.remove(`image:${e}`);let d=Eo.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}Eo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Oi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ul=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=new jt,o=new xu(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Lr=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},hl=class extends Lr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ld=new Ve,E0=new I,T0=new I,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;E0.setFromMatrixPosition(e.matrixWorld),t.position.copy(E0),T0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(T0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ld.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ld,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Io||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vc=new I,Wc=new In,Ui=new I,dl=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vc,Wc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Wc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Vc,Wc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Wc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Os=new I,w0=new se,A0=new se,mn=class extends dl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Os.x,Os.y).multiplyScalar(-e/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Os.x,Os.y).multiplyScalar(-e/Os.z)}getViewSize(e,t){return this.getViewBounds(e,w0,A0),t.subVectors(A0,w0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hd=class extends Vo{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fl=class extends Lr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Gd=class extends Vo{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}},Rt=class extends Lr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Gd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},zi=class extends dl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vd=class extends Vo{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nr=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Vd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var _s=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nd=new WeakMap,pl=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Oi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Nd.has(o)===!0?(s&&s(Nd.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Nd.set(l,c),Oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Oi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var To=-90,wo=1,Wo=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(To,wo,e,t);s.layers=this.layers,this.add(s);let r=new mn(To,wo,e,t);r.layers=this.layers,this.add(r);let o=new mn(To,wo,e,t);o.layers=this.layers,this.add(o);let a=new mn(To,wo,e,t);a.layers=this.layers,this.add(a);let l=new mn(To,wo,e,t);l.layers=this.layers,this.add(l);let c=new mn(To,wo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},_u=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var wf="\\[\\]\\.:\\/",iM=new RegExp("["+wf+"]","g"),Af="[^"+wf+"]",sM="[^"+wf.replace("\\.","")+"]",rM=/((?:WC+[\/:])*)/.source.replace("WC",Af),oM=/(WCOD+)?/.source.replace("WCOD",sM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Af),lM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Af),cM=new RegExp("^"+rM+oM+aM+lM+"$"),uM=["material","materials","bones","map"],Wd=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iM,"")}static parseTrackName(e){let t=cM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);uM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Wd;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gA=new Float32Array(1);var R0=new Ve,ml=class{constructor(e,t,i=0,s=1/0){this.ray=new zs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Do,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return R0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R0),this}intersectObject(e,t=!0,i=[]){return Xd(e,this,i,t),i.sort(C0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Xd(e[s],this,i,t);return i.sort(C0),i}};function C0(n,e){return n.distance-e.distance}function Xd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Xd(r[o],e,t,!0)}}var qd=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Rf(n,e,t,i){let s=hM(i);switch(t){case ff:return n*e;case Tu:return n*e/s.components*s.byteLength;case wu:return n*e/s.components*s.byteLength;case Xs:return n*e*2/s.components*s.byteLength;case Au:return n*e*2/s.components*s.byteLength;case pf:return n*e*3/s.components*s.byteLength;case ui:return n*e*4/s.components*s.byteLength;case Ru:return n*e*4/s.components*s.byteLength;case xl:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yl:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Iu:case Lu:return Math.max(n,16)*Math.max(e,8)/4;case Cu:case Pu:return Math.max(n,8)*Math.max(e,8)/2;case Nu:case Du:case Ou:case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uu:case Ml:case ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $u:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ju:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qu:case eh:case th:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bl:case sh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hM(n){switch(n){case Fn:case cf:return{byteLength:1,components:1};case Ko:case uf:case qn:return{byteLength:2,components:1};case Su:case Eu:return{byteLength:2,components:4};case Ei:case bu:case Xn:return{byteLength:4,components:1};case hf:case df:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bg(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fM(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],y=h[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let y=h[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var pM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,SM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",WM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,db=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ES=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,US=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:pM,alphahash_pars_fragment:mM,alphamap_fragment:gM,alphamap_pars_fragment:xM,alphatest_fragment:_M,alphatest_pars_fragment:yM,aomap_fragment:vM,aomap_pars_fragment:MM,batching_pars_vertex:bM,batching_vertex:SM,begin_vertex:EM,beginnormal_vertex:TM,bsdfs:wM,iridescence_fragment:AM,bumpmap_pars_fragment:RM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:LM,color_fragment:NM,color_pars_fragment:DM,color_pars_vertex:UM,color_vertex:OM,common:FM,defaultnormal_vertex:kM,displacementmap_pars_vertex:BM,displacementmap_vertex:zM,emissivemap_fragment:HM,emissivemap_pars_fragment:GM,colorspace_fragment:VM,colorspace_pars_fragment:WM,envmap_fragment:XM,envmap_common_pars_fragment:qM,envmap_pars_fragment:YM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:rb,envmap_vertex:KM,fog_vertex:ZM,fog_pars_vertex:JM,fog_fragment:jM,fog_pars_fragment:QM,gradientmap_pars_fragment:eb,lightmap_pars_fragment:tb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:sb,lights_toon_fragment:ob,lights_toon_pars_fragment:ab,lights_phong_fragment:lb,lights_phong_pars_fragment:cb,lights_physical_fragment:ub,lights_physical_pars_fragment:hb,lights_fragment_begin:db,lights_fragment_maps:fb,lights_fragment_end:pb,lightprobes_pars_fragment:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:xb,logdepthbuf_pars_vertex:_b,logdepthbuf_vertex:yb,map_fragment:vb,map_pars_fragment:Mb,map_particle_fragment:bb,map_particle_pars_fragment:Sb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:wb,morphcolor_vertex:Ab,morphnormal_vertex:Rb,morphtarget_pars_vertex:Cb,morphtarget_vertex:Ib,normal_fragment_begin:Pb,normal_fragment_maps:Lb,normal_pars_fragment:Nb,normal_pars_vertex:Db,normal_vertex:Ub,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:Fb,clearcoat_normal_fragment_maps:kb,clearcoat_pars_fragment:Bb,iridescence_pars_fragment:zb,opaque_fragment:Hb,packing:Gb,premultiplied_alpha_fragment:Vb,project_vertex:Wb,dithering_fragment:Xb,dithering_pars_fragment:qb,roughnessmap_fragment:Yb,roughnessmap_pars_fragment:$b,shadowmap_pars_fragment:Kb,shadowmap_pars_vertex:Zb,shadowmap_vertex:Jb,shadowmask_pars_fragment:jb,skinbase_vertex:Qb,skinning_pars_vertex:eS,skinning_vertex:tS,skinnormal_vertex:nS,specularmap_fragment:iS,specularmap_pars_fragment:sS,tonemapping_fragment:rS,tonemapping_pars_fragment:oS,transmission_fragment:aS,transmission_pars_fragment:lS,uv_pars_fragment:cS,uv_pars_vertex:uS,uv_vertex:hS,worldpos_vertex:dS,background_vert:fS,background_frag:pS,backgroundCube_vert:mS,backgroundCube_frag:gS,cube_vert:xS,cube_frag:_S,depth_vert:yS,depth_frag:vS,distance_vert:MS,distance_frag:bS,equirect_vert:SS,equirect_frag:ES,linedashed_vert:TS,linedashed_frag:wS,meshbasic_vert:AS,meshbasic_frag:RS,meshlambert_vert:CS,meshlambert_frag:IS,meshmatcap_vert:PS,meshmatcap_frag:LS,meshnormal_vert:NS,meshnormal_frag:DS,meshphong_vert:US,meshphong_frag:OS,meshphysical_vert:FS,meshphysical_frag:kS,meshtoon_vert:BS,meshtoon_frag:zS,points_vert:HS,points_frag:GS,shadow_vert:VS,shadow_frag:WS,sprite_vert:XS,sprite_frag:qS},ve={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Xi={basic:{uniforms:wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:wn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:wn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ge(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:wn([ve.points,ve.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:wn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:wn([ve.common,ve.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:wn([ve.sprite,ve.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:wn([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:wn([ve.lights,ve.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Xi.physical={uniforms:wn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var oh={r:0,b:0,g:0},YS=new Ve,zg=new We;zg.set(-1,0,0,0,1,0,0,0,1);function $S(n,e,t,i,s,r){let o=new ge(0),a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let b=v.backgroundBlurriness>0;S=e.get(S,b)}return S}function m(v){let S=!1,b=f(v);b===null?p(o,a):b&&b.isColor&&(p(b,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,S){let b=f(S);b&&b.isCubeTexture?(c===void 0&&(c=new ze(new Ho(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Br(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(YS.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zg),c.material.toneMapped=nt.getTransfer(b.colorSpace)!==gt,(u!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ze(new Qt(2,2),new $t({name:"BackgroundMaterial",uniforms:Br(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=nt.getTransfer(b.colorSpace)!==gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(oh,Tf(n)),t.buffers.color.setClear(oh.r,oh.g,oh.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:y,dispose:g}}function KS(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(F,G,$,N,Y){let ee=!1,W=h(F,N,$,G);r!==W&&(r=W,c(r.object)),ee=f(F,N,$,Y),ee&&m(F,N,$,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,b(F,G,$,N),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function h(F,G,$,N){let Y=N.wireframe===!0,ee=i[G.id];ee===void 0&&(ee={},i[G.id]=ee);let W=F.isInstancedMesh===!0?F.id:0,oe=ee[W];oe===void 0&&(oe={},ee[W]=oe);let q=oe[$.id];q===void 0&&(q={},oe[$.id]=q);let ne=q[Y];return ne===void 0&&(ne=d(l()),q[Y]=ne),ne}function d(F){let G=[],$=[],N=[];for(let Y=0;Y<t;Y++)G[Y]=0,$[Y]=0,N[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:N,object:F,attributes:{},index:null}}function f(F,G,$,N){let Y=r.attributes,ee=G.attributes,W=0,oe=$.getAttributes();for(let q in oe)if(oe[q].location>=0){let ie=Y[q],Ie=ee[q];if(Ie===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),ie===void 0||ie.attribute!==Ie||Ie&&ie.data!==Ie.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function m(F,G,$,N){let Y={},ee=G.attributes,W=0,oe=$.getAttributes();for(let q in oe)if(oe[q].location>=0){let ie=ee[q];ie===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor));let Ie={};Ie.attribute=ie,ie&&ie.data&&(Ie.data=ie.data),Y[q]=Ie,W++}r.attributes=Y,r.attributesNum=W,r.index=N}function y(){let F=r.newAttributes;for(let G=0,$=F.length;G<$;G++)F[G]=0}function p(F){g(F,0)}function g(F,G){let $=r.newAttributes,N=r.enabledAttributes,Y=r.attributeDivisors;$[F]=1,N[F]===0&&(n.enableVertexAttribArray(F),N[F]=1),Y[F]!==G&&(n.vertexAttribDivisor(F,G),Y[F]=G)}function v(){let F=r.newAttributes,G=r.enabledAttributes;for(let $=0,N=G.length;$<N;$++)G[$]!==F[$]&&(n.disableVertexAttribArray($),G[$]=0)}function S(F,G,$,N,Y,ee,W){W===!0?n.vertexAttribIPointer(F,G,$,Y,ee):n.vertexAttribPointer(F,G,$,N,Y,ee)}function b(F,G,$,N){y();let Y=N.attributes,ee=$.getAttributes(),W=G.defaultAttributeValues;for(let oe in ee){let q=ee[oe];if(q.location>=0){let ne=Y[oe];if(ne===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){let ie=ne.normalized,Ie=ne.itemSize,qe=e.get(ne);if(qe===void 0)continue;let j=qe.buffer,Me=qe.type,Ae=qe.bytesPerElement,ke=Me===n.INT||Me===n.UNSIGNED_INT||ne.gpuType===bu;if(ne.isInterleavedBufferAttribute){let be=ne.data,Ke=be.isInterleavedBuffer===!0?be.stride:be.itemSize,Xt=ne.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let He=0;He<q.locationSize;He++)g(q.location+He,be.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let He=0;He<q.locationSize;He++)p(q.location+He);n.bindBuffer(n.ARRAY_BUFFER,j);for(let He=0;He<q.locationSize;He++)S(q.location+He,Ie/q.locationSize,Me,ie,Ke*Ae,(Xt+Ie/q.locationSize*He)*Ae,ke)}else{if(ne.isInstancedBufferAttribute){for(let be=0;be<q.locationSize;be++)g(q.location+be,ne.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<q.locationSize;be++)p(q.location+be);n.bindBuffer(n.ARRAY_BUFFER,j);for(let be=0;be<q.locationSize;be++)S(q.location+be,Ie/q.locationSize,Me,ie,Ie*Ae,Ie/q.locationSize*be*Ae,ke)}}else if(W!==void 0){let ie=W[oe];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(q.location,ie);break;case 3:n.vertexAttrib3fv(q.location,ie);break;case 4:n.vertexAttrib4fv(q.location,ie);break;default:n.vertexAttrib1fv(q.location,ie)}}}}v()}function A(){U();for(let F in i){let G=i[F];for(let $ in G){let N=G[$];for(let Y in N){let ee=N[Y];for(let W in ee)u(ee[W].object),delete ee[W];delete N[Y]}}delete i[F]}}function w(F){if(i[F.id]===void 0)return;let G=i[F.id];for(let $ in G){let N=G[$];for(let Y in N){let ee=N[Y];for(let W in ee)u(ee[W].object),delete ee[W];delete N[Y]}}delete i[F.id]}function _(F){for(let G in i){let $=i[G];for(let N in $){let Y=$[N];if(Y[F.id]===void 0)continue;let ee=Y[F.id];for(let W in ee)u(ee[W].object),delete ee[W];delete Y[F.id]}}}function T(F){for(let G in i){let $=i[G],N=F.isInstancedMesh===!0?F.id:0,Y=$[N];if(Y!==void 0){for(let ee in Y){let W=Y[ee];for(let oe in W)u(W[oe].object),delete W[oe];delete Y[ee]}delete $[N],Object.keys($).length===0&&delete i[G]}}}function U(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function ZS(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function JS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==ui&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let T=_===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Fn&&_!==Xn&&!T&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:b,maxSamples:A,samples:w}}function jS(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Vn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,g=n.get(h);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let v=r?0:i,S=v*4,b=g.clippingState||null;l.value=b,b=u(m,d,S,f);for(let A=0;A!==S;++A)b[A]=t[A];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=f+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,b=f;S!==y;++S,b+=4)o.copy(h[S]).applyMatrix4(v,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Al=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ho(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Dr});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=Jt),new Wo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},_g=256,QS=3,e1=20,Hg=256,Gg=16,t1=3,n1=new I,i1=new ge,lh=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wo(1,10,null),this._boxMesh=new ze(new Ho(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=n1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(i1));let p=new Wo(i,s,u);return p.position.copy(a),p.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_g,bf(e))}_fromTexture(e,t){e.mapping===Or||e.mapping===Yo?this._setSize(e.image.length===0?_g:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=yg(e,!1,!1),i=Math.log2(e)-QS;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=yg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Or||e.mapping===Yo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=s1(),this._integrationMaterial=r1());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gg);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-t1)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Hg*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=o1());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function yg(n,e,t){return new Al(n,{minFilter:ci,generateMipmaps:e,type:qn,colorSpace:gn,depthBuffer:t})}function Rl(n,e,t){return new $t({name:n,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:xn,blending:Dr,depthTest:!1,depthWrite:!1})}function s1(){return Rl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function r1(){return Rl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function o1(){return Rl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${e1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function vg(){return Rl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Mg(){return Rl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function a1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===yu||f===vu)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let y=new Al(m.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===yu||f===vu,y=f===Or||f===Yo;if(m||y){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new lh(n)),p=m?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return m&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new lh(n)),p=m?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function a(d,f){return f===yu?d.mapping=Or:f===vu&&(d.mapping=Yo),d}function l(d){let f=0,m=6;for(let y=0;y<m;y++)d[y]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function l1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Sr("WebGLRenderer: "+i+" extension not supported."),s}}}function c1(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let y=r.get(m);y&&(e.remove(y),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function u(m){let y=m.attributes;for(let p in y)e.update(y[p],n.ARRAY_BUFFER)}function h(m){let y=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=y!==null?y.array.length:p.array.length/3-1,S=p.count>=65535?ja:Ja,b=new S(Math.ceil(v/3)*6,1),A=b.array;if(y!==null){let _=y.array;g=y.version;for(let T=0,U=0;T<v;T+=3){let P=_[T+0],F=_[T+1],G=_[T+2];A[U++]=P,A[U++]=F,A[U++]=F,A[U++]=G,A[U++]=G,A[U++]=P}}else{g=p.version;for(let _=0,T=0;_<v;_+=3){let U=_+0,P=_+1,F=_+2;A[T++]=U,A[T++]=P,A[T++]=P,A[T++]=F,A[T++]=F,A[T++]=U}}b.version=g;let w=r.get(m);w&&e.remove(w),r.set(m,b)}function d(m){let y=r.get(m);if(y){let p=m.index;p!==null&&y.version<p.version&&h(m)}else h(m);return r.get(m)}function f(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function u1(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*o,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let y=0;for(let p=0;p<f;p++)y+=d[p];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function h1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function d1(n,e,t){let i=new WeakMap,s=new yt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let U=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),y===!0&&(S=3);let b=a.attributes.position.count*S,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let w=new Float32Array(b*A*4*h),_=new Ka(w,b,A,h);_.type=Xn,_.needsUpdate=!0;let T=S*4;for(let P=0;P<h;P++){let F=p[P],G=g[P],$=v[P],N=b*A*4*P;for(let Y=0;Y<F.count;Y++){let ee=Y*T;f===!0&&(s.fromBufferAttribute(F,Y),w[N+ee+0]=s.x,w[N+ee+1]=s.y,w[N+ee+2]=s.z,w[N+ee+3]=0),m===!0&&(s.fromBufferAttribute(G,Y),w[N+ee+4]=s.x,w[N+ee+5]=s.y,w[N+ee+6]=s.z,w[N+ee+7]=0),y===!0&&(s.fromBufferAttribute($,Y),w[N+ee+8]=s.x,w[N+ee+9]=s.y,w[N+ee+10]=s.z,w[N+ee+11]=$.itemSize===4?s.w:1)}}d={count:h,texture:_,size:new se(b,A)},i.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function f1(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var p1={[ef]:"LINEAR_TONE_MAPPING",[tf]:"REINHARD_TONE_MAPPING",[nf]:"CINEON_TONE_MAPPING",[sf]:"ACES_FILMIC_TONE_MAPPING",[of]:"AGX_TONE_MAPPING",[af]:"NEUTRAL_TONE_MAPPING",[rf]:"CUSTOM_TONE_MAPPING"};function m1(n,e,t,i,s,r){let o=new Pn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Bt;u.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let h=new lu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ze(u,h),f=new zi(-1,1,1,-1,0,1),m=null,y=null,p=!1,g,v=null,S=[],b=!1;this.setSize=function(A,w){o.setSize(A,w),a!==null&&a.setSize(A,w),l!==null&&l.setSize(A,w);for(let _=0;_<S.length;_++){let T=S[_];T.setSize&&T.setSize(A,w)}},this.setEffects=function(A){S=A,b=S.length>0&&S[0].isRenderPass===!0;let w=o.width,_=o.height;S.length>0&&a===null&&(a=new Pn(w,_,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(w,_,{type:qn,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&S.some(U=>U.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&c===null&&(c=new ds(w,_),r===!0&&(c.format=ys,c.type=kr)),o.dispose(),o.depthTexture=T?c:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let U=0;U<S.length;U++){let P=S[U];P.setSize&&P.setSize(w,_),T&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,w){if(p||A.toneMapping===Gi&&S.length===0)return!1;if(v=w,w!==null){let _=w.width,T=w.height;(o.width!==_||o.height!==T)&&this.setSize(_,T)}return b===!1&&A.setRenderTarget(o),g=A.toneMapping,A.toneMapping=Gi,!0},this.hasRenderPass=function(){return b},this.end=function(A,w){A.toneMapping=g,p=!0;let _=o,T=a;for(let U=0;U<S.length;U++){let P=S[U];P.enabled!==!1&&(P.render(A,T,_,w),P.needsSwap!==!1&&(_=T,T=T===a?l:a))}if(m!==A.outputColorSpace||y!==A.toneMapping){m=A.outputColorSpace,y=A.toneMapping,h.defines={},nt.getTransfer(m)===gt&&(h.defines.SRGB_TRANSFER="");let U=p1[y];U&&(h.defines[U]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(v),A.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Vg=new jt,Wg=new ds(1,1),Xg=new rl(1),qg=new Ka,Yg=new nu,$g=new sl,bg=[],Sg=[],Eg=new Float32Array(16),Tg=new Float32Array(9),wg=new Float32Array(4);function jo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=bg[s];if(r===void 0&&(r=new Float32Array(s),bg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uh(n,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function _1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function v1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;wg.set(i),n.uniformMatrix2fv(this.addr,!1,wg),tn(t,i)}}function M1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Tg.set(i),n.uniformMatrix3fv(this.addr,!1,Tg),tn(t,i)}}function b1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Eg.set(i),n.uniformMatrix4fv(this.addr,!1,Eg),tn(t,i)}}function S1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function T1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function w1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function A1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function I1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function hh(n){return n.version===0&&(n.compareFunction=_f,n.needsUpdate=!0),n}function P1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=hh(Wg):r=Vg,t.setTexture2D(e||r,s)}function L1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yg,s)}function N1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=hh(Xg):r=$g,t.setTextureCube(e||r,s)}function D1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qg,s)}function U1(n){switch(n){case 5126:return g1;case 35664:return x1;case 35665:return _1;case 35666:return y1;case 35674:return v1;case 35675:return M1;case 35676:return b1;case 5124:case 35670:return S1;case 35667:case 35671:return E1;case 35668:case 35672:return T1;case 35669:case 35673:return w1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return D1}}function O1(n,e){n.uniform1fv(this.addr,e)}function F1(n,e){let t=jo(e,this.size,2);n.uniform2fv(this.addr,t)}function k1(n,e){let t=jo(e,this.size,3);n.uniform3fv(this.addr,t)}function B1(n,e){let t=jo(e,this.size,4);n.uniform4fv(this.addr,t)}function z1(n,e){let t=jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function H1(n,e){let t=jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function G1(n,e){let t=jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function V1(n,e){n.uniform1iv(this.addr,e)}function W1(n,e){n.uniform2iv(this.addr,e)}function X1(n,e){n.uniform3iv(this.addr,e)}function q1(n,e){n.uniform4iv(this.addr,e)}function Y1(n,e){n.uniform1uiv(this.addr,e)}function $1(n,e){n.uniform2uiv(this.addr,e)}function K1(n,e){n.uniform3uiv(this.addr,e)}function Z1(n,e){n.uniform4uiv(this.addr,e)}function J1(n,e,t){let i=this.cache,s=e.length,r=uh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=hh(Wg):o=Vg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function j1(n,e,t){let i=this.cache,s=e.length,r=uh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yg,r[o])}function Q1(n,e,t){let i=this.cache,s=e.length,r=uh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=hh(Xg):o=$g;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function eE(n,e,t){let i=this.cache,s=e.length,r=uh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qg,r[o])}function tE(n){switch(n){case 5126:return O1;case 35664:return F1;case 35665:return k1;case 35666:return B1;case 35674:return z1;case 35675:return H1;case 35676:return G1;case 5124:case 35670:return V1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return $1;case 36295:return K1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return eE}}var Pf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U1(t.type)}},Lf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tE(t.type)}},Nf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Cf=/(\w+)(\])?(\[|\.)?/g;function Ag(n,e){n.seq.push(e),n.map[e.id]=e}function nE(n,e,t){let i=n.name,s=i.length;for(Cf.lastIndex=0;;){let r=Cf.exec(i),o=Cf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ag(t,c===void 0?new Pf(a,n,e):new Lf(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Nf(a),Ag(t,h)),t=h}}}var Jo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);nE(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Rg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iE=37297,sE=0;function rE(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Cg=new We;function oE(n){nt._getMatrix(Cg,nt.workingColorSpace,n);let e=`mat3( ${Cg.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Ya:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ig(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+rE(n.getShaderSource(e),a)}else return r}function aE(n,e){let t=oE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lE={[ef]:"Linear",[tf]:"Reinhard",[nf]:"Cineon",[sf]:"ACESFilmic",[of]:"AgX",[af]:"Neutral",[rf]:"Custom"};function cE(n,e){let t=lE[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ah=new I;function uE(){nt.getLuminanceCoefficients(ah);let n=ah.x.toFixed(4),e=ah.y.toFixed(4),t=ah.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function dE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wl(n){return n!==""}function Pg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Lg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(n){return n.replace(pE,mE)}function mE(n,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Df(t)}var gE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ng(n){return n.replace(gE,xE)}function xE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _E={[gl]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function yE(n){return _E[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vE={[Yo]:"ENVMAP_MODE_REFRACTION"};function ME(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bE={[Qd]:"ENVMAP_BLENDING_MULTIPLY",[J0]:"ENVMAP_BLENDING_MIX",[j0]:"ENVMAP_BLENDING_ADD"};function SE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":bE[n.combine]||"ENVMAP_BLENDING_NONE"}function EE(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=yE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ME(t),h=SE(t),d=hE(t),f=dE(r),m=s.createProgram(),y,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wl).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wl).join(`
`),p.length>0&&(p+=`
`)):(y=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),p=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?et.tonemapping_pars_fragment:"",t.toneMapping!==Gi?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,aE("linearToOutputTexel",t.outputColorSpace),uE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wl).join(`
`)),o=Df(o),o=Pg(o,t),o=Lg(o,t),a=Df(a),a=Pg(a,t),a=Lg(a,t),o=Ng(o),a=Ng(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+y+o,S=g+p+a,b=Rg(s,s.VERTEX_SHADER,v),A=Rg(s,s.FRAGMENT_SHADER,S);s.attachShader(m,b),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(P){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(m)||"",G=s.getShaderInfoLog(b)||"",$=s.getShaderInfoLog(A)||"",N=F.trim(),Y=G.trim(),ee=$.trim(),W=!0,oe=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,b,A);else{let q=Ig(s,b,"vertex"),ne=Ig(s,A,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+q+`
`+ne)}else N!==""?Le("WebGLProgram: Program Info Log:",N):(Y===""||ee==="")&&(oe=!1);oe&&(P.diagnostics={runnable:W,programLog:N,vertexShader:{log:Y,prefix:y},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(b),s.deleteShader(A),_=new Jo(s,m),T=fE(s,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,iE)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=A,this}var TE=0,Uf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Of(e),t.set(e,i)),i}},Of=class{constructor(e){this.id=TE++,this.code=e,this.usedTimes=0}};function wE(n){return n===Xs||n===Ml||n===bl}function AE(n,e,t,i,s,r){let o=new Do,a=new Uf,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,T,U,P,F,G){let $=P.fog,N=F.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,ee=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||Y,ee),oe=d[_.type],q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let ne=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ie=ne!==void 0?ne.length:0,Ie=0;N.morphAttributes.position!==void 0&&(Ie=1),N.morphAttributes.normal!==void 0&&(Ie=2),N.morphAttributes.color!==void 0&&(Ie=3);let qe,j,Me,Ae;if(oe){let ye=Xi[oe];qe=ye.vertexShader,j=ye.fragmentShader}else{qe=_.vertexShader,j=_.fragmentShader;let ye=a.getVertexShaderStage(_),_t=a.getFragmentShaderStage(_);a.update(_,ye,_t),Me=ye.id,Ae=_t.id}let ke=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ke=F.isInstancedMesh===!0,Xt=F.isBatchedMesh===!0,He=!!_.map,xt=!!_.matcap,bt=!!W,lt=bt&&W.isPMREMTexture===!0,fn=!!_.aoMap,Kt=!!_.lightMap,Dn=!!_.bumpMap&&_.wireframe===!1,Ft=!!_.normalMap,Di=!!_.displacementMap,an=!!_.emissiveMap,ei=!!_.metalnessMap,ti=!!_.roughnessMap,ni=_.anisotropy>0,O=_.clearcoat>0,ii=_.diffuseRoughness>0,Dt=_.dispersion>0,Ut=_.retroreflectivity>0,_e=_.iridescence>0,Zt=_.sheen>0,Be=_.transmission>0,Xe=ni&&!!_.anisotropyMap,R=O&&!!_.clearcoatMap,M=O&&!!_.clearcoatNormalMap,B=O&&!!_.clearcoatRoughnessMap,re=ii&&!!_.diffuseRoughnessMap,te=_e&&!!_.iridescenceMap,ce=_e&&!!_.iridescenceThicknessMap,pe=Zt&&!!_.sheenColorMap,Z=Zt&&!!_.sheenRoughnessMap,J=!!_.specularMap,he=!!_.specularColorMap,C=!!_.specularIntensityMap,Q=Be&&!!_.transmissionMap,X=Be&&!!_.thicknessMap,de=!!_.gradientMap,le=!!_.alphaMap,ue=_.alphaTest>0,De=!!_.alphaHash,Qe=!!_.extensions,ae=Gi;_.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(ae=n.toneMapping);let Fe=lt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,je={shaderID:oe,shaderType:_.type,shaderName:_.name,vertexShader:qe,fragmentShader:j,defines:_.defines,customVertexShaderID:Me,customFragmentShaderID:Ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:Xt,batchingColor:Xt&&F._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&F.instanceColor!==null,instancingMorph:Ke&&F.morphTexture!==null,outputColorSpace:ke===null?n.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:xt,envMap:bt,envMapMode:bt&&W.mapping,envMapPMREM:lt,envMapMaxLod:lt?Fe.length-1:null,envMapSize:lt?Fe[0].width:null,aoMap:fn,lightMap:Kt,bumpMap:Dn,normalMap:Ft,displacementMap:Di,emissiveMap:an,normalMapObjectSpace:Ft&&_.normalMapType===ng,normalMapTangentSpace:Ft&&_.normalMapType===El,packedNormalMap:Ft&&_.normalMapType===El&&wE(_.normalMap.format),metalnessMap:ei,roughnessMap:ti,anisotropy:ni,anisotropyMap:Xe,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:B,diffuseRoughness:ii,diffuseRoughnessMap:re,dispersion:Dt,retroreflection:Ut,iridescence:_e,iridescenceMap:te,iridescenceThicknessMap:ce,sheen:Zt,sheenColorMap:pe,sheenRoughnessMap:Z,specularMap:J,specularColorMap:he,specularIntensityMap:C,transmission:Be,transmissionMap:Q,thicknessMap:X,gradientMap:de,opaque:_.transparent===!1&&_.blending===qo&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:De,combine:_.combine,mapUv:He&&f(_.map.channel),aoMapUv:fn&&f(_.aoMap.channel),lightMapUv:Kt&&f(_.lightMap.channel),bumpMapUv:Dn&&f(_.bumpMap.channel),normalMapUv:Ft&&f(_.normalMap.channel),displacementMapUv:Di&&f(_.displacementMap.channel),emissiveMapUv:an&&f(_.emissiveMap.channel),metalnessMapUv:ei&&f(_.metalnessMap.channel),roughnessMapUv:ti&&f(_.roughnessMap.channel),anisotropyMapUv:Xe&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:he&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:le&&f(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ft||ni),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(He||le),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ie,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===gt,decodeVideoTextureEmissive:an&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===li,flipSided:_.side===xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&_.extensions.multiDraw===!0||Xt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function y(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)T.push(U),T.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(p(T,_),g(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function g(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let T=d[_.type],U;if(T){let P=Xi[T];U=mg.clone(P.uniforms)}else U=_.uniforms;return U}function S(_,T){let U=u.get(T);return U!==void 0?++U.usedTimes:(U=new EE(n,T,_,s),c.push(U),u.set(T,U)),U}function b(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:w}}function RE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function CE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ug(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Og(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,y,p,g){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:p,group:g},n[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=o(d),v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=p,v.group=g),e++,v}function l(d,f,m,y,p,g,v){v.reversedDepth===!0&&(p=-p);let S=a(d,f,m,y,p,g);m.transmission>0?i.push(S):m.transparent===!0?s.push(S):t.push(S)}function c(d,f,m,y,p,g){let v=a(d,f,m,y,p,g);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||CE),i.length>1&&i.sort(f||Ug),s.length>1&&s.sort(f||Ug)}function h(){for(let d=e,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function IE(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Og,n.set(i,[o])):s>=r.length?(o=new Og,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function PE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new ge};break;case"SpotLight":t={position:new I,direction:new I,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function LE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var NE=0;function DE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UE(n){let e=new PE,t=LE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Ve,o=new Ve;function a(c){let u=0,h=0,d=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,m=0,y=0,p=0,g=0,v=0,S=0,b=0,A=0,w=0,_=0,T=0,U=0,P=0;c.sort(DE);for(let G=0,$=c.length;G<$;G++){let N=c[G],Y=N.color,ee=N.intensity,W=N.distance,oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Xs?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=Y.r*ee,h+=Y.g*ee,d+=Y.b*ee;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],ee);P++}else if(N.isSunLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ne=N.shadow,ie=t.get(N);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[m]=ie,i.sunShadowMap[m]=oe;let Ie=ne.getViewportCount();for(let qe=0;qe<Ie;qe++)i.sunShadowMatrix[y+qe]=ne.getMatrix(qe),i.sunShadowCascade[y+qe]=ne._cascadeData[qe];y+=Ie,m++}i.sun[f]=q,f++}else if(N.isDirectionalLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ne=N.shadow,ie=t.get(N);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=N.shadow.matrix,A++}i.directional[p]=q,p++}else if(N.isSpotLight){let q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(Y).multiplyScalar(ee),q.distance=W,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[v]=q;let ne=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,ne.updateMatrices(N),N.castShadow&&U++),i.spotLightMatrix[v]=ne.matrix,N.castShadow){let ie=t.get(N);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=oe,_++}v++}else if(N.isRectAreaLight){let q=e.get(N);q.color.copy(Y).multiplyScalar(ee),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=q,S++}else if(N.isPointLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let ne=N.shadow,ie=t.get(N);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,i.pointShadow[g]=ie,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=N.shadow.matrix,w++}i.point[g]=q,g++}else if(N.isHemisphereLight){let q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(ee),q.groundColor.copy(N.groundColor).multiplyScalar(ee),i.hemi[b]=q,b++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let F=i.hash;(F.sunLength!==f||F.directionalLength!==p||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==S||F.hemiLength!==b||F.numSunShadows!==m||F.numDirectionalShadows!==A||F.numPointShadows!==w||F.numSpotShadows!==_||F.numSpotMaps!==T||F.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=p,i.spot.length=v,i.rectArea.length=S,i.point.length=g,i.hemi.length=b,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-U,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=P,F.sunLength=f,F.directionalLength=p,F.pointLength=g,F.spotLength=v,F.rectAreaLength=S,F.hemiLength=b,F.numSunShadows=m,F.numDirectionalShadows=A,F.numPointShadows=w,F.numSpotShadows=_,F.numSpotMaps=T,F.numLightProbes=P,i.version=NE++)}function l(c,u){let h=0,d=0,f=0,m=0,y=0,p=0,g=u.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let b=c[v];if(b.isSunLight){let A=i.sun[h];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(g),h++}else if(b.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(b.isSpotLight){let A=i.spot[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function Fg(n){let e=new UE(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):t.push(h)}function a(h){i.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function OE(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Fg(n),e.set(s,[a])):r>=o.length?(a=new Fg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var FE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BE=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],zE=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],kg=new Ve,Tl=new I,If=new I;function HE(n,e,t){let i=new Gs,s=new se,r=new se,o=new yt,a=new cu,l=new uu,c={},u=t.maxTextureSize,h={[Hi]:xn,[xn]:Hi,[li]:li},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:FE,fragmentShader:kE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Bt;m.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ze(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let g=this.type;this.render=function(w,_,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===L0&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gl);let U=n.getRenderTarget(),P=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Dr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let $=g!==this.type;$&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(Y=>Y.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,Y=w.length;N<Y;N++){let ee=w[N],W=ee.shadow;if(W===void 0){Le("WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let oe=W.getFrameExtents();s.multiply(oe),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,W.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||$===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Xo){if(ee.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Pn(s.x,s.y,{format:Xs,type:qn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),W.map.texture.name=ee.name+".shadowMap",W.map.depthTexture=new ds(s.x,s.y,Xn),W.map.depthTexture.name=ee.name+".shadowMapDepth",W.map.depthTexture.format=cs,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=st,W.map.depthTexture.magFilter=st}else ee.isPointLight?(W.map=new Al(s.x),W.map.depthTexture=new rl(s.x,Ei)):(W.map=new Pn(s.x,s.y),W.map.depthTexture=new ds(s.x,s.y,Ei)),W.map.depthTexture.name=ee.name+".shadowMap",W.map.depthTexture.format=cs,this.type===gl?(W.map.depthTexture.compareFunction=q?xf:gf,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=st,W.map.depthTexture.magFilter=st);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let ne=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();ee.isPointLight!==!0&&W.updateMatrices(ee,T);let ie=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:T.layers;for(let Ie=0;Ie<ne;Ie++){let qe=W.getCamera(Ie);if(ee.isPointLight){let j=W.camera,Me=W.matrix,Ae=ee.distance||j.far;Ae!==j.far&&(j.far=Ae,j.updateProjectionMatrix()),Tl.setFromMatrixPosition(ee.matrixWorld),j.position.copy(Tl),If.copy(j.position),If.add(BE[Ie]),j.up.copy(zE[Ie]),j.lookAt(If),j.updateMatrixWorld(),Me.makeTranslation(-Tl.x,-Tl.y,-Tl.z),kg.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W._frustum.setFromProjectionMatrix(kg,j.coordinateSystem,j.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,Ie),n.clear();else{Ie===0&&(n.setRenderTarget(W.map),n.clear());let j=W.getViewport(Ie);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),G.viewport(o)}i=W.getFrustum(Ie),b(_,T,qe,ee,ie,this.type)}W.isPointLightShadow!==!0&&this.type===Xo&&v(W,T),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(U,P,F)};function v(w,_){let T=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Pn(s.x,s.y,{format:Xs,type:qn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,T,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,T,f,y,null)}function S(w,_,T,U){let P=null,F=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)P=F;else if(P=T.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let G=P.uuid,$=_.uuid,N=c[G];N===void 0&&(N={},c[G]=N);let Y=N[$];Y===void 0&&(Y=P.clone(),N[$]=Y,_.addEventListener("dispose",A)),P=Y}if(P.visible=_.visible,P.wireframe=_.wireframe,U===Xo?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:h[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let G=n.properties.get(P);G.light=T}return P}function b(w,_,T,U,P,F){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===Xo)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let N=e.update(w),Y=w.material;if(Array.isArray(Y)){let ee=N.groups;for(let W=0,oe=ee.length;W<oe;W++){let q=ee[W],ne=Y[q.materialIndex];if(ne&&ne.visible){let ie=S(w,ne,U,F);w.onBeforeShadow(n,w,_,T,N,ie,q),n.renderBufferDirect(T,null,N,ie,w,q),w.onAfterShadow(n,w,_,T,N,ie,q)}}}else if(Y.visible){let ee=S(w,Y,U,F);w.onBeforeShadow(n,w,_,T,N,ee,null),n.renderBufferDirect(T,null,N,ee,w,null),w.onAfterShadow(n,w,_,T,N,ee,null)}}let $=w.children;for(let N=0,Y=$.length;N<Y;N++)b($[N],_,T,U,P,F)}function A(w){w.target.removeEventListener("dispose",A);for(let T in c){let U=c[T],P=w.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function GE(n,e){function t(){let C=!1,Q=new yt,X=null,de=new yt(0,0,0,0);return{setMask:function(le){X!==le&&!C&&(n.colorMask(le,le,le,le),X=le)},setLocked:function(le){C=le},setClear:function(le,ue,De,Qe,ae){ae===!0&&(le*=Qe,ue*=Qe,De*=Qe),Q.set(le,ue,De,Qe),de.equals(Q)===!1&&(n.clearColor(le,ue,De,Qe),de.copy(Q))},reset:function(){C=!1,X=null,de.set(-1,0,0,0)}}}function i(){let C=!1,Q=!1,X=null,de=null,le=null;return{setReversed:function(ue){if(Q!==ue){let De=e.get("EXT_clip_control");ue?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Q=ue;let Qe=le;le=null,this.setClear(Qe)}},getReversed:function(){return Q},setTest:function(ue){ue?be(n.DEPTH_TEST):Ke(n.DEPTH_TEST)},setMask:function(ue){X!==ue&&!C&&(n.depthMask(ue),X=ue)},setFunc:function(ue){if(Q&&(ue=dg[ue]),de!==ue){switch(ue){case Yc:n.depthFunc(n.NEVER);break;case $c:n.depthFunc(n.ALWAYS);break;case Kc:n.depthFunc(n.LESS);break;case Ro:n.depthFunc(n.LEQUAL);break;case Zc:n.depthFunc(n.EQUAL);break;case Jc:n.depthFunc(n.GEQUAL);break;case jc:n.depthFunc(n.GREATER);break;case Qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ue}},setLocked:function(ue){C=ue},setClear:function(ue){le!==ue&&(le=ue,Q&&(ue=1-ue),n.clearDepth(ue))},reset:function(){C=!1,X=null,de=null,le=null,Q=!1}}}function s(){let C=!1,Q=null,X=null,de=null,le=null,ue=null,De=null,Qe=null,ae=null;return{setTest:function(Fe){C||(Fe?be(n.STENCIL_TEST):Ke(n.STENCIL_TEST))},setMask:function(Fe){Q!==Fe&&!C&&(n.stencilMask(Fe),Q=Fe)},setFunc:function(Fe,je,ye){(X!==Fe||de!==je||le!==ye)&&(n.stencilFunc(Fe,je,ye),X=Fe,de=je,le=ye)},setOp:function(Fe,je,ye){(ue!==Fe||De!==je||Qe!==ye)&&(n.stencilOp(Fe,je,ye),ue=Fe,De=je,Qe=ye)},setLocked:function(Fe){C=Fe},setClear:function(Fe){ae!==Fe&&(n.clearStencil(Fe),ae=Fe)},reset:function(){C=!1,Q=null,X=null,de=null,le=null,ue=null,De=null,Qe=null,ae=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],y=null,p=!1,g=null,v=null,S=null,b=null,A=null,w=null,_=null,T=new ge(0,0,0),U=0,P=!1,F=null,G=null,$=null,N=null,Y=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,oe=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=oe>=1):q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=oe>=2);let ne=null,ie={},Ie=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),j=new yt().fromArray(Ie),Me=new yt().fromArray(qe);function Ae(C,Q,X,de){let le=new Uint8Array(4),ue=n.createTexture();n.bindTexture(C,ue),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<X;De++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(Q+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ue}let ke={};ke[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ke[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ke[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),be(n.DEPTH_TEST),o.setFunc(Ro),Dn(!1),Ft(Yd),be(n.CULL_FACE),fn(Dr);function be(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function Ke(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function Xt(C,Q){return d[C]!==Q?(n.bindFramebuffer(C,Q),d[C]=Q,C===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Q),C===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function He(C,Q){let X=m,de=!1;if(C){X=f.get(Q),X===void 0&&(X=[],f.set(Q,X));let le=C.textures;if(X.length!==le.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,De=le.length;ue<De;ue++)X[ue]=n.COLOR_ATTACHMENT0+ue;X.length=le.length,de=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,de=!0);de&&n.drawBuffers(X)}function xt(C){return y!==C?(n.useProgram(C),y=C,!0):!1}let bt={[Ur]:n.FUNC_ADD,[D0]:n.FUNC_SUBTRACT,[U0]:n.FUNC_REVERSE_SUBTRACT};bt[O0]=n.MIN,bt[F0]=n.MAX;let lt={[k0]:n.ZERO,[B0]:n.ONE,[z0]:n.SRC_COLOR,[Jd]:n.SRC_ALPHA,[q0]:n.SRC_ALPHA_SATURATE,[W0]:n.DST_COLOR,[G0]:n.DST_ALPHA,[H0]:n.ONE_MINUS_SRC_COLOR,[jd]:n.ONE_MINUS_SRC_ALPHA,[X0]:n.ONE_MINUS_DST_COLOR,[V0]:n.ONE_MINUS_DST_ALPHA,[Y0]:n.CONSTANT_COLOR,[$0]:n.ONE_MINUS_CONSTANT_COLOR,[K0]:n.CONSTANT_ALPHA,[Z0]:n.ONE_MINUS_CONSTANT_ALPHA};function fn(C,Q,X,de,le,ue,De,Qe,ae,Fe){if(C===Dr){p===!0&&(Ke(n.BLEND),p=!1);return}if(p===!1&&(be(n.BLEND),p=!0),C!==N0){if(C!==g||Fe!==P){if((v!==Ur||A!==Ur)&&(n.blendEquation(n.FUNC_ADD),v=Ur,A=Ur),Fe)switch(C){case qo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ws:n.blendFunc(n.ONE,n.ONE);break;case Kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",C);break}else switch(C){case qo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kd:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zd:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",C);break}S=null,b=null,w=null,_=null,T.set(0,0,0),U=0,g=C,P=Fe}return}le=le||Q,ue=ue||X,De=De||de,(Q!==v||le!==A)&&(n.blendEquationSeparate(bt[Q],bt[le]),v=Q,A=le),(X!==S||de!==b||ue!==w||De!==_)&&(n.blendFuncSeparate(lt[X],lt[de],lt[ue],lt[De]),S=X,b=de,w=ue,_=De),(Qe.equals(T)===!1||ae!==U)&&(n.blendColor(Qe.r,Qe.g,Qe.b,ae),T.copy(Qe),U=ae),g=C,P=!1}function Kt(C,Q){C.side===li?Ke(n.CULL_FACE):be(n.CULL_FACE);let X=C.side===xn;Q&&(X=!X),Dn(X),C.blending===qo&&C.transparent===!1?fn(Dr):fn(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let de=C.stencilWrite;a.setTest(de),de&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),an(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dn(C){F!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),F=C)}function Ft(C){C!==I0?(be(n.CULL_FACE),C!==G&&(C===Yd?n.cullFace(n.BACK):C===P0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ke(n.CULL_FACE),G=C}function Di(C){C!==$&&(W&&n.lineWidth(C),$=C)}function an(C,Q,X){C?(be(n.POLYGON_OFFSET_FILL),(N!==Q||Y!==X)&&(N=Q,Y=X,o.getReversed()&&(Q=-Q,X=-X),n.polygonOffset(Q,X))):Ke(n.POLYGON_OFFSET_FILL)}function ei(C){C?be(n.SCISSOR_TEST):Ke(n.SCISSOR_TEST)}function ti(C){C===void 0&&(C=n.TEXTURE0+ee-1),ne!==C&&(n.activeTexture(C),ne=C)}function ni(C,Q,X){X===void 0&&(ne===null?X=n.TEXTURE0+ee-1:X=ne);let de=ie[X];de===void 0&&(de={type:void 0,texture:void 0},ie[X]=de),(de.type!==C||de.texture!==Q)&&(ne!==X&&(n.activeTexture(X),ne=X),n.bindTexture(C,Q||ke[C]),de.type=C,de.texture=Q)}function O(){let C=ie[ne];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ii(){try{n.compressedTexImage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function Dt(){try{n.compressedTexImage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function Ut(){try{n.texSubImage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function _e(){try{n.texSubImage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function Zt(){try{n.compressedTexSubImage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function Xe(){try{n.texStorage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function R(){try{n.texStorage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function M(){try{n.texImage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function B(){try{n.texImage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function re(C){return h[C]!==void 0?h[C]:n.getParameter(C)}function te(C,Q){h[C]!==Q&&(n.pixelStorei(C,Q),h[C]=Q)}function ce(C){j.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),j.copy(C))}function pe(C){Me.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Me.copy(C))}function Z(C,Q){let X=c.get(Q);X===void 0&&(X=new WeakMap,c.set(Q,X));let de=X.get(C);de===void 0&&(de=n.getUniformBlockIndex(Q,C.name),n.uniformBlockBinding(Q,de,de),X.set(C,de))}function J(C,Q,X){let le=c.get(Q).get(C);l[le]!==X&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,X),l[le]=X)}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ne=null,ie={},d={},l={},f=new WeakMap,m=[],y=null,p=!1,g=null,v=null,S=null,b=null,A=null,w=null,_=null,T=new ge(0,0,0),U=0,P=!1,F=null,G=null,$=null,N=null,Y=null,j.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:be,disable:Ke,bindFramebuffer:Xt,drawBuffers:He,useProgram:xt,setBlending:fn,setMaterial:Kt,setFlipSided:Dn,setCullFace:Ft,setLineWidth:Di,setPolygonOffset:an,setScissorTest:ei,activeTexture:ti,bindTexture:ni,unbindTexture:O,compressedTexImage2D:ii,compressedTexImage3D:Dt,texImage2D:M,texImage3D:B,pixelStorei:te,getParameter:re,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Xe,texStorage3D:R,texSubImage2D:Ut,texSubImage3D:_e,compressedTexSubImage2D:Zt,compressedTexSubImage3D:Be,scissor:ce,viewport:pe,reset:he}}function VE(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,u=new WeakMap,h=new Set,d,f=new WeakMap,m=new Set,y=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Po("canvas")}function v(R,M,B){let re=1,te=Xe(R);if((te.width>B||te.height>B)&&(re=B/Math.max(te.width,te.height)),re<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ce=Math.floor(re*te.width),pe=Math.floor(re*te.height);d===void 0&&(d=g(ce,pe));let Z=M?g(ce,pe):d;return Z.width=ce,Z.height=pe,Z.getContext("2d").drawImage(R,0,0,ce,pe),Le("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ce+"x"+pe+")."),Z}else return"data"in R&&Le("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function S(R){return R.generateMipmaps}function b(R){n.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,M,B,re,te,ce=!1){if(R!==null){if(n[R]!==void 0)return n[R];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe;re&&(pe=e.get("EXT_texture_norm16"),pe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8),B===n.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),B===n.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),M===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8),B===n.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),B===n.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&(B===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),B===n.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){let J=ce?Ya:nt.getTransfer(te);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=J===gt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),B===n.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(R,M){let B;return R?M===null||M===Ei||M===kr?B=n.DEPTH24_STENCIL8:M===Xn?B=n.DEPTH32F_STENCIL8:M===Ko&&(B=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===kr?B=n.DEPTH_COMPONENT24:M===Xn?B=n.DEPTH_COMPONENT32F:M===Ko&&(B=n.DEPTH_COMPONENT16),B}function T(R,M){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==st&&R.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function U(R){let M=new WeakRef(R);i.get(R).__ref=M,m.add(M),y.register(R,M,M)}function P(R){let M=i.get(R).__ref;M!==void 0&&(m.delete(M),y.unregister(M))}function F(R){$(R.target)}function G(R){N(R.target)}function $(R){R.removeEventListener("dispose",F),P(R),ee(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&h.delete(R)}function N(R){R.removeEventListener("dispose",G),P(R),oe(R)}function Y(){for(let R of m){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?N(M):$(M))}m.clear(),h.clear()}function ee(R){let M=i.get(R);if(M.__webglInit===void 0)return;let B=R.source,re=f.get(B);if(re){let te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&W(R),Object.keys(re).length===0&&f.delete(B)}i.remove(R)}function W(R){let M=i.get(R);n.deleteTexture(M.__webglTexture);let B=R.source,re=f.get(B);delete re[M.__cacheKey],o.memory.textures--}function oe(R){let M=i.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let B=R.depthTexture;if(B&&B.renderTarget===R&&$(B),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ce=0;ce<M.__webglFramebuffer[te].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[te][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)n.deleteFramebuffer(M.__webglFramebuffer[te]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let re=R.textures;for(let te=0,ce=re.length;te<ce;te++){let pe=i.get(re[te]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(re[te])}i.remove(R)}let q=0;function ne(){q=0}function ie(){return q}function Ie(R){q=R}function qe(){let R=q;return R>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,R}function j(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Me(R,M){let B=i.get(R);if(R.isVideoTexture&&Zt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let re=R.image;if(re===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function Ae(R,M){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Kt(B,R,M);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function ke(R,M){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Kt(B,R,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function be(R,M){let B=i.get(R);if(R.version>0&&B.__version!==R.version){Dn(B,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}let Ke={[ks]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[Co]:n.MIRRORED_REPEAT},Xt={[st]:n.NEAREST,[Mu]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},He={[sg]:n.NEVER,[_f]:n.ALWAYS,[rg]:n.LESS,[gf]:n.LEQUAL,[og]:n.EQUAL,[xf]:n.GEQUAL,[ag]:n.GREATER,[lg]:n.NOTEQUAL};function xt(R,M){if(M.type===Xn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===$o||M.magFilter===Fr||M.magFilter===ci||M.minFilter===Jt||M.minFilter===$o||M.minFilter===Fr||M.minFilter===ci)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ke[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ke[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ke[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Xt[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Xt[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,He[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===st||M.minFilter!==Fr&&M.minFilter!==ci||M.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function bt(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",F),U(M));let re=M.source,te=f.get(re);te===void 0&&(te={},f.set(re,te));let ce=j(M);if(ce!==R.__cacheKey){te[ce]===void 0&&(te[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[ce].usedTimes++;let pe=te[R.__cacheKey];pe!==void 0&&(te[R.__cacheKey].usedTimes--,pe.usedTimes===0&&W(M)),R.__cacheKey=ce,R.__webglTexture=te[ce].texture}return B}function lt(R,M,B){return Math.floor(Math.floor(R/B)/M)}function fn(R,M,B,re){let ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,B,re,M.data);else{ce.sort((C,Q)=>C.start-Q.start);let pe=0;for(let C=1;C<ce.length;C++){let Q=ce[pe],X=ce[C],de=Q.start+Q.count,le=lt(X.start,M.width,4),ue=lt(Q.start,M.width,4);X.start<=de+1&&le===ue&&lt(X.start+X.count-1,M.width,4)===le?Q.count=Math.max(Q.count,X.start+X.count-Q.start):(++pe,ce[pe]=X)}ce.length=pe+1;let Z=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let C=0,Q=ce.length;C<Q;C++){let X=ce[C],de=Math.floor(X.start/4),le=Math.ceil(X.count/4),ue=de%M.width,De=Math.floor(de/M.width),Qe=le,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,De),t.texSubImage2D(n.TEXTURE_2D,0,ue,De,Qe,ae,B,re,M.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function Kt(R,M,B){let re=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=n.TEXTURE_3D);let te=bt(R,M),ce=M.source;t.bindTexture(re,R.__webglTexture,n.TEXTURE0+B);let pe=i.get(ce);if(ce.version!==pe.__version||te===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ae=nt.getPrimaries(nt.workingColorSpace),Fe=M.colorSpace===vs?null:nt.getPrimaries(M.colorSpace),je=M.colorSpace===vs||ae===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let J=v(M.image,!1,s.maxTextureSize);J=Be(M,J);let he=r.convert(M.format,M.colorSpace),C=r.convert(M.type),Q=w(M.internalFormat,he,C,M.normalized,M.colorSpace,M.isVideoTexture);xt(re,M);let X,de=M.mipmaps,le=M.isVideoTexture!==!0,ue=pe.__version===void 0||te===!0,De=ce.dataReady,Qe=T(M,J);if(M.isDepthTexture)Q=_(M.format===ys,M.type),ue&&(le?t.texStorage2D(n.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Q,J.width,J.height,0,he,C,null));else if(M.isDataTexture)if(de.length>0){le&&ue&&t.texStorage2D(n.TEXTURE_2D,Qe,Q,de[0].width,de[0].height);for(let ae=0,Fe=de.length;ae<Fe;ae++)X=de[ae],le?De&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,X.width,X.height,he,C,X.data):t.texImage2D(n.TEXTURE_2D,ae,Q,X.width,X.height,0,he,C,X.data);M.generateMipmaps=!1}else le?(ue&&t.texStorage2D(n.TEXTURE_2D,Qe,Q,J.width,J.height),De&&fn(M,J,he,C)):t.texImage2D(n.TEXTURE_2D,0,Q,J.width,J.height,0,he,C,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,Q,de[0].width,de[0].height,J.depth);for(let ae=0,Fe=de.length;ae<Fe;ae++)if(X=de[ae],M.format!==ui)if(he!==null)if(le){if(De)if(M.layerUpdates.size>0){let je=Rf(X.width,X.height,M.format,M.type);for(let ye of M.layerUpdates){let _t=X.data.subarray(ye*je/X.data.BYTES_PER_ELEMENT,(ye+1)*je/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,ye,X.width,X.height,1,he,_t)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,J.depth,he,X.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Q,X.width,X.height,J.depth,0,X.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?De&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,J.depth,he,C,X.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Q,X.width,X.height,J.depth,0,he,C,X.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{le&&ue&&t.texStorage2D(n.TEXTURE_2D,Qe,Q,de[0].width,de[0].height);for(let ae=0,Fe=de.length;ae<Fe;ae++)X=de[ae],M.format!==ui?he!==null?le?De&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,X.width,X.height,he,X.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Q,X.width,X.height,0,X.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?De&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,X.width,X.height,he,C,X.data):t.texImage2D(n.TEXTURE_2D,ae,Q,X.width,X.height,0,he,C,X.data)}else if(M.isDataArrayTexture)if(le){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,Q,J.width,J.height,J.depth),De)if(M.layerUpdates.size>0){let ae=Rf(J.width,J.height,M.format,M.type);for(let Fe of M.layerUpdates){let je=J.data.subarray(Fe*ae/J.data.BYTES_PER_ELEMENT,(Fe+1)*ae/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Fe,J.width,J.height,1,he,C,je)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,C,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,he,C,J.data);else if(M.isData3DTexture)le?(ue&&t.texStorage3D(n.TEXTURE_3D,Qe,Q,J.width,J.height,J.depth),De&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,C,J.data)):t.texImage3D(n.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,he,C,J.data);else if(M.isFramebufferTexture){if(ue)if(le)t.texStorage2D(n.TEXTURE_2D,Qe,Q,J.width,J.height);else{let ae=J.width,Fe=J.height;for(let je=0;je<Qe;je++)t.texImage2D(n.TEXTURE_2D,je,Q,ae,Fe,0,he,C,null),ae>>=1,Fe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),J.parentNode!==ae){ae.appendChild(J),h.add(M),ae.onpaint=Fe=>{let je=Fe.changedElements;for(let ye of h)je.includes(ye.image)&&(ye.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let je=n.RGBA,ye=n.RGBA,_t=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,ye,_t,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(le&&ue){let ae=Xe(de[0]);t.texStorage2D(n.TEXTURE_2D,Qe,Q,ae.width,ae.height)}for(let ae=0,Fe=de.length;ae<Fe;ae++)X=de[ae],le?De&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,he,C,X):t.texImage2D(n.TEXTURE_2D,ae,Q,he,C,X);M.generateMipmaps=!1}else if(le){if(ue){let ae=Xe(J);t.texStorage2D(n.TEXTURE_2D,Qe,Q,ae.width,ae.height)}De&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,C,J)}else t.texImage2D(n.TEXTURE_2D,0,Q,he,C,J);S(M)&&M.mipmapsAutoUpdate===!0&&b(re),pe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Dn(R,M,B){if(M.image.length!==6)return;let re=bt(R,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);let ce=i.get(te);if(te.version!==ce.__version||re===!0){t.activeTexture(n.TEXTURE0+B);let pe=nt.getPrimaries(nt.workingColorSpace),Z=M.colorSpace===vs?null:nt.getPrimaries(M.colorSpace),J=M.colorSpace===vs||pe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let he=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let ye=0;ye<6;ye++)!he&&!C?Q[ye]=v(M.image[ye],!0,s.maxCubemapSize):Q[ye]=C?M.image[ye].image:M.image[ye],Q[ye]=Be(M,Q[ye]);let X=Q[0],de=r.convert(M.format,M.colorSpace),le=r.convert(M.type),ue=w(M.internalFormat,de,le,M.normalized,M.colorSpace),De=M.isVideoTexture!==!0,Qe=ce.__version===void 0||re===!0,ae=te.dataReady,Fe=T(M,X);xt(n.TEXTURE_CUBE_MAP,M);let je;if(M.isDepthTexture){if(ue=_(M.format===ys,M.type),Qe)if(De)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ue,X.width,X.height);else for(let ye=0;ye<6;ye++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ue,X.width,X.height,0,de,le,null)}else if(he){De&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,ue,X.width,X.height);for(let ye=0;ye<6;ye++){je=Q[ye].mipmaps;for(let _t=0;_t<je.length;_t++){let ln=je[_t];M.format!==ui?de!==null?De?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,0,0,ln.width,ln.height,de,ln.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,ue,ln.width,ln.height,0,ln.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,0,0,ln.width,ln.height,de,le,ln.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t,ue,ln.width,ln.height,0,de,le,ln.data)}}}else{if(je=M.mipmaps,De&&Qe){je.length>0&&Fe++;let ye=Xe(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,ue,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(C){De?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Q[ye].width,Q[ye].height,de,le,Q[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ue,Q[ye].width,Q[ye].height,0,de,le,Q[ye].data);for(let _t=0;_t<je.length;_t++){let Is=je[_t].image[ye].image;De?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,0,0,Is.width,Is.height,de,le,Is.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,ue,Is.width,Is.height,0,de,le,Is.data)}}else{De?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,de,le,Q[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ue,de,le,Q[ye]);for(let _t=0;_t<je.length;_t++){let ln=je[_t];De?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,0,0,de,le,ln.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_t+1,ue,de,le,ln.image[ye])}}}S(M)&&M.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),ce.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ft(R,M,B,re,te,ce){let pe=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),J=w(B.internalFormat,pe,Z,B.normalized,B.colorSpace),he=i.get(M),C=i.get(B);if(C.__renderTarget=M,!he.__hasExternalTextures){let Q=Math.max(1,M.width>>ce),X=Math.max(1,M.height>>ce);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ce,J,Q,X,M.depth,0,pe,Z,null):t.texImage2D(te,ce,J,Q,X,0,pe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),_e(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,C.__webglTexture,0,Ut(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,te,C.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Di(R,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){let re=M.depthTexture,te=re&&re.isDepthTexture?re.type:null,ce=_(M.stencilBuffer,te),pe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(M),ce,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(M),ce,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ce,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,R)}else{let re=M.textures;for(let te=0;te<re.length;te++){let ce=re[te],pe=r.convert(ce.format,ce.colorSpace),Z=r.convert(ce.type),J=w(ce.internalFormat,pe,Z,ce.normalized,ce.colorSpace);_e(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(M),J,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(M),J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function an(R,M,B){let re=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(M.depthTexture);te.__renderTarget=M;let ce=re?M.depthTexture.image[0]:M.depthTexture.image;(!te.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),re?be(M.depthTexture,0):Me(M.depthTexture,0);let pe=te.__webglTexture,Z=Ut(M),J=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,he=M.depthTexture.format===ys?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===cs)_e(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,J,pe,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,he,J,pe,0);else if(M.depthTexture.format===ys)_e(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,J,pe,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,he,J,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ei(R){let M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let re=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",te)};re.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=re}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let re=0;re<6;re++)an(M.__webglFramebuffer[re],R,re);else R.texture.mipmaps.length>0?an(M.__webglFramebuffer[0],R,0):an(M.__webglFramebuffer,R,0);else if(B){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=n.createRenderbuffer(),Di(M.__webglDepthbuffer[re],R,!1);else{let te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ce)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Di(M.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ti(R,M,B){let re=i.get(R);M!==void 0&&Ft(re.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ei(R)}function ni(R){let M=R.texture,B=i.get(R),re=i.get(M);R.addEventListener("dispose",G),U(R);let te=R.textures,ce=R.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=M.version,o.memory.textures++),ce){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let J=0;J<M.mipmaps.length;J++)B.__webglFramebuffer[Z][J]=n.createFramebuffer()}else B.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(M.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)B.__webglFramebuffer[Z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Z=0,J=te.length;Z<J;Z++){let he=i.get(te[Z]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&_e(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<te.length;Z++){let J=te[Z];B.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let he=r.convert(J.format,J.colorSpace),C=r.convert(J.type),Q=w(J.internalFormat,he,C,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),X=Ut(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,X,Q,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Di(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),xt(n.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Ft(B.__webglFramebuffer[Z][J],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else Ft(B.__webglFramebuffer[Z],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);S(M)?b(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let Z=0,J=te.length;Z<J;Z++){let he=te[Z],C=i.get(he),Q=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,C.__webglTexture),xt(Q,he),Ft(B.__webglFramebuffer,R,he,n.COLOR_ATTACHMENT0+Z,Q,0),S(he)&&b(Q)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,re.__webglTexture),xt(Z,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Ft(B.__webglFramebuffer[J],R,M,n.COLOR_ATTACHMENT0,Z,J);else Ft(B.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,Z,0);S(M)?b(Z):M.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&ei(R)}function O(R){let M=R.textures;for(let B=0,re=M.length;B<re;B++){let te=M[B];if(S(te)&&te.mipmapsAutoUpdate===!0){let ce=A(R),pe=i.get(te).__webglTexture;t.bindTexture(ce,pe),b(ce),t.unbindTexture()}}}let ii=[];function Dt(R){if(R.samples>0){if(_e(R)===!1){let M=R.textures,B=R.width,re=R.height,te=n.COLOR_BUFFER_BIT,ce=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(R),Z=M.length>1;if(Z)for(let he=0;he<M.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let he=0;he<M.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);let C=i.get(M[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,B,re,0,0,B,re,te,n.NEAREST),l===!0&&(ii.length=0,ii.push(n.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ii.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ii))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let he=0;he<M.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);let C=i.get(M[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,C,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ut(R){return Math.min(s.maxSamples,R.samples)}function _e(R){let M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Zt(R){let M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Be(R,M){let B=R.colorSpace,re=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==gn&&B!==vs&&(nt.getTransfer(B)===gt?(re!==ui||te!==Fn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),M}function Xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=qe,this.resetTextureUnits=ne,this.getTextureUnits=ie,this.setTextureUnits=Ie,this.setTexture2D=Me,this.setTexture2DArray=Ae,this.setTexture3D=ke,this.setTextureCube=be,this.rebindTextures=ti,this.setupRenderTarget=ni,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=ei,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=_e,this.dispose=Y}function WE(n,e){function t(i,s=vs){let r,o=nt.getTransfer(s);if(i===Fn)return n.UNSIGNED_BYTE;if(i===Su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===df)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cf)return n.BYTE;if(i===uf)return n.SHORT;if(i===Ko)return n.UNSIGNED_SHORT;if(i===bu)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===ff)return n.ALPHA;if(i===pf)return n.RGB;if(i===ui)return n.RGBA;if(i===cs)return n.DEPTH_COMPONENT;if(i===ys)return n.DEPTH_STENCIL;if(i===Tu)return n.RED;if(i===wu)return n.RED_INTEGER;if(i===Xs)return n.RG;if(i===Au)return n.RG_INTEGER;if(i===Ru)return n.RGBA_INTEGER;if(i===xl||i===_l||i===yl||i===vl)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_l)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cu||i===Iu||i===Pu||i===Lu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Iu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nu||i===Du||i===Uu||i===Ou||i===Fu||i===Ml||i===ku)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nu||i===Du)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Uu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ou)return r.COMPRESSED_R11_EAC;if(i===Fu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ml)return r.COMPRESSED_RG11_EAC;if(i===ku)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bu||i===zu||i===Hu||i===Gu||i===Vu||i===Wu||i===Xu||i===qu||i===Yu||i===$u||i===Ku||i===Zu||i===Ju||i===ju)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$u)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ku)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ju)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ju)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qu||i===eh||i===th)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qu)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nh||i===ih||i===bl||i===sh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var XE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ff=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new $t({vertexShader:XE,fragmentShader:qE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Qt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kf=class extends Fi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,y=typeof XRWebGLBinding<"u",p=new Ff,g={},v=t.getContextAttributes(),S=null,b=null,A=[],w=[],_=new se,T=null,U=null,P=new mn;P.viewport=new yt;let F=new mn;F.viewport=new yt;let G=[P,F],$=new _u,N=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Me=A[j];return Me===void 0&&(Me=new Uo,A[j]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(j){let Me=A[j];return Me===void 0&&(Me=new Uo,A[j]=Me),Me.getGripSpace()},this.getHand=function(j){let Me=A[j];return Me===void 0&&(Me=new Uo,A[j]=Me),Me.getHandSpace()};function ee(j){let Me=w.indexOf(j.inputSource);if(Me===-1)return;let Ae=A[Me];Ae!==void 0&&(Ae.update(j.inputSource,j.frame,c||o),Ae.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",oe);for(let j=0;j<A.length;j++){let Me=w[j];Me!==null&&(w[j]=null,A[j].disconnect(Me))}N=null,Y=null,p.reset();for(let j in g)delete g[j];if(e.setRenderTarget(S),f=null,d=null,h=null,s=null,b=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),U!==null){let j=U.camera;j.fov=U.fov,j.zoom=U.zoom,j.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",W),s.addEventListener("inputsourceschange",oe),v.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ke=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=v.stencil?ys:cs,ke=v.stencil?kr:Ei);let Ke={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Pn(d.textureWidth,d.textureHeight,{format:ui,type:Fn,depthTexture:new ds(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Pn(f.framebufferWidth,f.framebufferHeight,{format:ui,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(j){for(let Me=0;Me<j.removed.length;Me++){let Ae=j.removed[Me],ke=w.indexOf(Ae);ke>=0&&(w[ke]=null,A[ke].disconnect(Ae))}for(let Me=0;Me<j.added.length;Me++){let Ae=j.added[Me],ke=w.indexOf(Ae);if(ke===-1){for(let Ke=0;Ke<A.length;Ke++)if(Ke>=w.length){w.push(Ae),ke=Ke;break}else if(w[Ke]===null){w[Ke]=Ae,ke=Ke;break}if(ke===-1)break}let be=A[ke];be&&be.connect(Ae)}}function q(j,Me){Me===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Me.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Me=j.near,Ae=j.far;p.texture!==null&&(p.depthNear>0&&(Me=p.depthNear),p.depthFar>0&&(Ae=p.depthFar)),$.near=F.near=P.near=Me,$.far=F.far=P.far=Ae,(N!==$.near||Y!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),N=$.near,Y=$.far),$.layers.mask=j.layers.mask|6,P.layers.mask=$.layers.mask&-5,F.layers.mask=$.layers.mask&-3;let ke=j.parent,be=$.cameras;q($,ke);for(let Ke=0;Ke<be.length;Ke++)q(be[Ke],ke);$.projectionMatrix.copy(P.projectionMatrix),$.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&j.isPerspectiveCamera&&(U={camera:j,fov:j.fov,zoom:j.zoom}),ne(j,$,ke)};function ne(j,Me,Ae){Ae===null?j.matrix.copy(Me.matrixWorld):(j.matrix.copy(Ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(Me.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Me.projectionMatrix),j.projectionMatrixInverse.copy(Me.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=wr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh($)},this.getCameraTexture=function(j){return g[j]};let ie=null;function Ie(j,Me){if(u=Me.getViewerPose(c||o),m=Me,u!==null){let Ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ke=!1;Ae.length!==$.cameras.length&&($.cameras.length=0,ke=!0);for(let He=0;He<Ae.length;He++){let xt=Ae[He],bt=null;if(f!==null)bt=f.getViewport(xt);else{let fn=h.getViewSubImage(d,xt);bt=fn.viewport,He===0&&(e.setRenderTargetTextures(b,fn.colorTexture,fn.depthStencilTexture),e.setRenderTarget(b))}let lt=G[He];lt===void 0&&(lt=new mn,lt.layers.enable(He),lt.viewport=new yt,G[He]=lt),lt.matrix.fromArray(xt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(xt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(bt.x,bt.y,bt.width,bt.height),He===0&&($.matrix.copy(lt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ke===!0&&$.cameras.push(lt)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let He=h.getDepthInformation(Ae[0]);He&&He.isValid&&He.texture&&p.init(He,s.renderState)}if(be&&be.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let He=0;He<Ae.length;He++){let xt=Ae[He].camera;if(xt){let bt=g[xt];bt||(bt=new ol,g[xt]=bt);let lt=h.getCameraImage(xt);bt.sourceTexture=lt}}}}for(let Ae=0;Ae<A.length;Ae++){let ke=w[Ae],be=A[Ae];ke!==null&&be!==void 0&&be.update(ke,Me,c||o)}ie&&ie(j,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),m=null}let qe=new Bg;qe.setAnimationLoop(Ie),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}},YE=new Ve,Kg=new We;Kg.set(-1,0,0,0,1,0,0,0,1);function $E(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Tf(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,S,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===xn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===xn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),S=v.envMap,b=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(YE.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Kg),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function KE(n,e,t,i){let s={},r={};function o(v,S){let b=S.program;i.uniformBlockBinding(v,b,s[v.id])}function a(v,S){let b=s[v.id];b===void 0&&(m(v),b=l(v),s[v.id]=b,v.addEventListener("dispose",p));let A=S.program;i.updateUBOMapping(v,A);let w=e.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let S=n.createBuffer(),b=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(v){let S=s[v.id],b=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,_=b.length;w<_;w++){let T=b[w];if(Array.isArray(T))for(let U=0,P=T.length;U<P;U++)u(T[U],w,U,A);else u(T,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,S,b,A){if(d(v,S,b,A)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let T=0;for(let U=0;U<_.length;U++){let P=_[U],F=y(P,!0);h(P,v.__data,T),T+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,v.__data)}}function h(v,S,b){typeof v=="number"||typeof v=="boolean"?S[b]=v:v.isMatrix3?(S[b]=v.elements[0],S[b+1]=v.elements[1],S[b+2]=v.elements[2],S[b+3]=0,S[b+4]=v.elements[3],S[b+5]=v.elements[4],S[b+6]=v.elements[5],S[b+7]=0,S[b+8]=v.elements[6],S[b+9]=v.elements[7],S[b+10]=v.elements[8],S[b+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-b),b):v.toArray(S,b)}function d(v,S,b,A){let w=v.value,_=S+"_"+b;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);let T=A[_],U=!1;for(let P=0;P<w.length;P++)f(w[P],T,P)===!0&&(U=!0);return U}return f(w,A,_)}function f(v,S,b){if(S[b]===void 0)return typeof v=="number"||typeof v=="boolean"?S[b]=v:ArrayBuffer.isView(v)?S[b]=v.slice():S[b]=v.clone(),!0;{let A=S[b];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return S[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(v){let S=v.uniforms,b=0,A=16;for(let _=0,T=S.length;_<T;_++){let U=Array.isArray(S[_])?S[_]:[S[_]];for(let P=0,F=U.length;P<F;P++){let G=U[P],$=Array.isArray(G.value)?G.value:[G.value],N=Array.isArray(S[_])||Array.isArray(G.value),Y=b;for(let W=0,oe=$.length;W<oe;W++){let q=$[W],ne=y(q,N),ie=b%A,Ie=ie%ne.boundary,qe=ie+Ie;b+=Ie,qe!==0&&A-qe<ne.storage&&(b+=A-qe),W===0&&(Y=b),b+=ne.storage}let ee=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new ee((b-Y)/Float32Array.BYTES_PER_ELEMENT),G.__offset=Y}}let w=b%A;return w>0&&(b+=A-w),v.__size=b,v.__cache={},this}function y(v,S){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(v){let S=v.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var ZE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function JE(){return Wi===null&&(Wi=new Hs(ZE,16,16,Xs,qn),Wi.name="DFG_LUT",Wi.minFilter=Jt,Wi.magFilter=Jt,Wi.wrapS=ri,Wi.wrapT=ri,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var ch=class{constructor(e={}){let{canvas:t=cg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Fn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=f,p=new Set([Ru,Au,wu]),g=new Set([Fn,Ei,Ko,kr,Su,Eu]),v=new Uint32Array(4),S=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,w=null,_=[],T=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,G=null,$=null,N=null,Y=null;this._outputColorSpace=Mt;let ee=0,W=0,oe=null,q=-1,ne=null,ie=new yt,Ie=new yt,qe=null,j=new ge(0),Me=0,Ae=t.width,ke=t.height,be=1,Ke=null,Xt=null,He=new yt(0,0,Ae,ke),xt=new yt(0,0,Ae,ke),bt=!1,lt=new Gs,fn=new iu,Kt=!1,Dn=!1,Ft=new Ve,Di=new I,an=new yt,ei={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ti=!1;function ni(){return oe===null?be:1}let O=i;function ii(E,L){return t.getContext(E,L)}let Dt,Ut,_e,Zt,Be,Xe,R,M,B,re,te,ce,pe,Z,J,he,C,Q,X,de,le,ue,De;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",ye,!1),O===null){let L="webgl2";if(O=ii(L,E),O===null)throw ii(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(E){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ge("WebGLRenderer: "+E.message),E}function Qe(){Dt=new l1(O),Dt.init(),le=new WE(O,Dt),Ut=new JS(O,Dt,e,le),_e=new GE(O,Dt),Ut.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),$=O.createFramebuffer(),N=O.createFramebuffer(),Y=O.createFramebuffer(),Zt=new h1(O),Be=new RE,Xe=new VE(O,Dt,_e,Be,Ut,le,Zt),R=new a1(P),M=new fM(O),ue=new KS(O,M),B=new c1(O,M,Zt,ue),re=new f1(O,B,M,ue,Zt),Q=new d1(O,Ut,Xe),J=new jS(Be),te=new AE(P,R,Dt,Ut,ue,J),ce=new $E(P,Be),pe=new IE,Z=new OE(Dt),C=new $S(P,R,_e,re,m,l),he=new HE(P,re,Ut),De=new KE(O,Zt,Ut,_e),X=new ZS(O,Dt,Zt),de=new u1(O,Dt,Zt),Zt.programs=te.programs,P.capabilities=Ut,P.extensions=Dt,P.properties=Be,P.renderLists=pe,P.shadowMap=he,P.state=_e,P.info=Zt}y!==Fn&&(U=new m1(y,t.width,t.height,a,s,r));let ae=new kf(P,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Dt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Dt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(E){E!==void 0&&(be=E,this.setSize(Ae,ke,!1))},this.getSize=function(E){return E.set(Ae,ke)},this.setSize=function(E,L,V=!0){if(ae.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=E,ke=L,t.width=Math.floor(E*be),t.height=Math.floor(L*be),V===!0&&(t.style.width=E+"px",t.style.height=L+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(Ae*be,ke*be).floor()},this.setDrawingBufferSize=function(E,L,V){Ae=E,ke=L,be=V,t.width=Math.floor(E*V),t.height=Math.floor(L*V),this.setViewport(0,0,E,L)},this.setEffects=function(E){if(y===Fn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let L=0;L<E.length;L++)if(E[L].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ie)},this.getViewport=function(E){return E.copy(He)},this.setViewport=function(E,L,V,k){E.isVector4?He.set(E.x,E.y,E.z,E.w):He.set(E,L,V,k),_e.viewport(ie.copy(He).multiplyScalar(ni()).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,L,V,k){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,L,V,k),_e.scissor(Ie.copy(xt).multiplyScalar(ni()).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(E){_e.setScissorTest(bt=E)},this.setOpaqueSort=function(E){Ke=E},this.setTransparentSort=function(E){Xt=E},this.getClearColor=function(E){return E.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,V=!0){let k=0;if(E){let z=!1;if(oe!==null){let me=oe.texture.format;z=p.has(me)}if(z){let me=oe.texture.type,we=g.has(me),fe=C.getClearColor(),Se=C.getClearAlpha(),Pe=fe.r,Ye=fe.g,ct=fe.b;we?(v[0]=Pe,v[1]=Ye,v[2]=ct,v[3]=Se,O.clearBufferuiv(O.COLOR,0,v)):(S[0]=Pe,S[1]=Ye,S[2]=ct,S[3]=Se,O.clearBufferiv(O.COLOR,0,S))}else k|=O.COLOR_BUFFER_BIT}L&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),G=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),C.dispose(),pe.dispose(),Z.dispose(),Xe.dispose(),Be.dispose(),R.dispose(),re.dispose(),B.dispose(),ue.dispose(),De.dispose(),te.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Im),ae.removeEventListener("sessionend",Pm),gr.stop()};function Fe(E){E.preventDefault(),$a("WebGLRenderer: Context Lost."),F=!0}function je(){$a("WebGLRenderer: Context Restored."),F=!1;let E=Zt.autoReset,L=he.enabled,V=he.autoUpdate,k=he.needsUpdate,z=he.type;Qe(),Zt.autoReset=E,he.enabled=L,he.autoUpdate=V,he.needsUpdate=k,he.type=z}function ye(E){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _t(E){let L=E.target;L.removeEventListener("dispose",_t),ln(L)}function ln(E){Is(E),Be.remove(E)}function Is(E){let L=Be.get(E).programs;L!==void 0&&(L.forEach(function(V){te.releaseProgram(V)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,V,k,z,me){L===null&&(L=ei);let we=z.isMesh&&z.matrixWorld.determinantAffine()<0,fe=sv(E,L,V,k,z);_e.setMaterial(k,we);let Se=V.index,Pe=1;if(k.wireframe===!0){if(Se=B.getWireframeAttribute(V),Se===void 0)return;Pe=2}let Ye=V.drawRange,ct=V.attributes.position,Re=Ye.start*Pe,ut=(Ye.start+Ye.count)*Pe;me!==null&&(Re=Math.max(Re,me.start*Pe),ut=Math.min(ut,(me.start+me.count)*Pe)),Se!==null?(Re=Math.max(Re,0),ut=Math.min(ut,Se.count)):ct!=null&&(Re=Math.max(Re,0),ut=Math.min(ut,ct.count));let qt=ut-Re;if(qt<0||qt===1/0)return;ue.setup(z,k,fe,V,Se);let At,St=X;if(Se!==null&&(At=M.get(Se),St=de,St.setIndex(At)),z.isMesh)k.wireframe===!0?(_e.setLineWidth(k.wireframeLinewidth*ni()),St.setMode(O.LINES)):St.setMode(O.TRIANGLES);else if(z.isLine){let vn=k.linewidth;vn===void 0&&(vn=1),_e.setLineWidth(vn*ni()),z.isLineSegments?St.setMode(O.LINES):z.isLineLoop?St.setMode(O.LINE_LOOP):St.setMode(O.LINE_STRIP)}else z.isPoints?St.setMode(O.POINTS):z.isSprite&&St.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))St.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let vn=z._multiDrawStarts,Ce=z._multiDrawCounts,Rn=z._multiDrawCount,mt=Se?M.get(Se).bytesPerElement:1,xr=Be.get(k).currentProgram.getUniforms();for(let Mn=0;Mn<Rn;Mn++)xr.setValue(O,"_gl_DrawID",Mn),St.render(vn[Mn]/mt,Ce[Mn])}else if(z.isInstancedMesh)St.renderInstances(Re,qt,z.count);else if(V.isInstancedBufferGeometry){let vn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ce=Math.min(V.instanceCount,vn);St.renderInstances(Re,qt,Ce)}else St.render(Re,qt)};function Cm(E,L,V,k){G!==null&&E.isNodeMaterial&&G.setObject(k,E),Kt===!0&&J.setState(E,V,!1),E.transparent===!0&&E.side===li&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,La(E,L,k),E.side=Hi,E.needsUpdate=!0,La(E,L,k),E.side=li):La(E,L,k)}this.compile=function(E,L,V=null){V===null&&(V=E),G!==null&&G.renderStart(E,L,V),w=Z.get(V),w.init(L),T.push(w),V.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),Dn=this.localClippingEnabled,Kt=J.init(this.clippingPlanes,Dn),Kt===!0&&J.setGlobalState(this.clippingPlanes,L),G!==null&&he.render(w.state.shadowsArray,V,L);let k=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let me=z.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){let fe=me[we];Cm(fe,V,L,z),k.add(fe)}else Cm(me,V,L,z),k.add(me)}),w=T.pop(),G!==null&&G.renderEnd(),k},this.compileAsync=function(E,L,V=null){let k=this.compile(E,L,V);return new Promise(z=>{function me(){if(k.forEach(function(we){let Se=Be.get(we).currentProgram;(Se===void 0||Se.isReady())&&k.delete(we)}),k.size===0){z(E);return}setTimeout(me,10)}Dt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let od=null;function nv(E){od&&od(E)}function Im(){gr.stop()}function Pm(){gr.start()}let gr=new Bg;gr.setAnimationLoop(nv),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(E){od=E,ae.setAnimationLoop(E),E===null?gr.stop():gr.start()},ae.addEventListener("sessionstart",Im),ae.addEventListener("sessionend",Pm),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(E,L);let V=ae.enabled===!0&&ae.isPresenting===!0,k=U!==null&&(oe===null||V)&&U.begin(P,oe);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(L),L=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,L,oe),w=Z.get(E,T.length),w.init(L),w.state.textureUnits=Xe.getTextureUnits(),T.push(w),Ft.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?fn.setFromArrayCamera(L):lt.setFromProjectionMatrix(Ft,oi,L.reversedDepth),Dn=this.localClippingEnabled,Kt=J.init(this.clippingPlanes,Dn),A=pe.get(E,_.length),A.init(),_.push(A),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let we=P.xr.getDepthSensingMesh();we!==null&&ad(we,L,-1/0,P.sortObjects)}ad(E,L,0,P.sortObjects),A.finish(),G!==null&&G.updateLights(w.state.lightsArray),P.sortObjects===!0&&A.sort(Ke,Xt),ti=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ti&&C.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),Kt===!0&&J.beginShadows();let z=w.state.shadowsArray;if(he.render(z,E,L),Kt===!0&&J.endShadows(),(k&&U.hasRenderPass())===!1){let we=A.opaque,fe=A.transmissive;if(w.setupLights(),L.isArrayCamera){let Se=L.cameras;if(fe.length>0)for(let Pe=0,Ye=Se.length;Pe<Ye;Pe++){let ct=Se[Pe];Nm(we,fe,E,ct)}ti&&C.render(E);for(let Pe=0,Ye=Se.length;Pe<Ye;Pe++){let ct=Se[Pe];Lm(A,E,ct,ct.viewport)}}else fe.length>0&&Nm(we,fe,E,L),ti&&C.render(E),Lm(A,E,L)}oe!==null&&W===0&&(Xe.updateMultisampleRenderTarget(oe),Xe.updateRenderTargetMipmap(oe)),k&&U.end(P),E.isScene===!0&&E.onAfterRender(P,E,L),ue.resetDefaultState(),q=-1,ne=null,T.pop(),T.length>0?(w=T[T.length-1],Xe.setTextureUnits(w.state.textureUnits),Kt===!0&&J.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,G!==null&&G.renderEnd()};function ad(E,L,V,k){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let we=L.isArrayCamera?fn:lt;if(!E.frustumCulled||E.intersectsFrustum(we)){k&&an.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ft);let fe=re.update(E),Se=E.material;Se.visible&&A.push(E,fe,Se,V,an.z,null,L)}}else if(E.isMesh||E.isLine||E.isPoints){let we=L.isArrayCamera?fn:lt;if(!E.frustumCulled||E.intersectsFrustum(we)){let fe=re.update(E),Se=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),an.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),an.copy(fe.boundingSphere.center)),an.applyMatrix4(E.matrixWorld).applyMatrix4(Ft)),Array.isArray(Se)){let Pe=fe.groups;for(let Ye=0,ct=Pe.length;Ye<ct;Ye++){let Re=Pe[Ye],ut=Se[Re.materialIndex];ut&&ut.visible&&A.push(E,fe,ut,V,an.z,Re,L)}}else Se.visible&&A.push(E,fe,Se,V,an.z,null,L)}}}let me=E.children;for(let we=0,fe=me.length;we<fe;we++)ad(me[we],L,V,k)}function Lm(E,L,V,k){let{opaque:z,transmissive:me,transparent:we}=E;w.setupLightsView(V),Kt===!0&&J.setGlobalState(P.clippingPlanes,V),k&&_e.viewport(ie.copy(k)),z.length>0&&mc(z,L,V),me.length>0&&mc(me,L,V),we.length>0&&mc(we,L,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Nm(E,L,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Re=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Pn(1,1,{generateMipmaps:!0,type:Re?qn:Fn,minFilter:ci,samples:Math.max(4,Ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let me=w.state.transmissionRenderTarget[k.id],we=k.viewport||ie;me.setSize(we.z*P.transmissionResolutionScale,we.w*P.transmissionResolutionScale);let fe=P.getRenderTarget(),Se=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(me),P.getClearColor(j),Me=P.getClearAlpha(),Me<1&&P.setClearColor(16777215,.5),P.clear(),ti&&C.render(V);let Ye=P.toneMapping;P.toneMapping=Gi;let ct=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Kt===!0&&J.setGlobalState(P.clippingPlanes,k),mc(E,V,k),Xe.updateMultisampleRenderTarget(me),Xe.updateRenderTargetMipmap(me),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ut=0,qt=L.length;ut<qt;ut++){let At=L[ut],{object:St,geometry:vn,material:Ce,group:Rn}=At;if(Ce.side===li&&St.layers.test(k.layers)){let mt=Ce.side;Ce.side=xn,Ce.needsUpdate=!0,Dm(St,V,k,vn,Ce,Rn),Ce.side=mt,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(Xe.updateMultisampleRenderTarget(me),Xe.updateRenderTargetMipmap(me))}P.setRenderTarget(fe,Se,Pe),P.setClearColor(j,Me),ct!==void 0&&(k.viewport=ct),P.toneMapping=Ye}function mc(E,L,V){let k=L.isScene===!0?L.overrideMaterial:null;for(let z=0,me=E.length;z<me;z++){let we=E[z],{object:fe,geometry:Se,group:Pe}=we,Ye=we.material;Ye.allowOverride===!0&&k!==null&&(Ye=k),fe.layers.test(V.layers)&&Dm(fe,L,V,Se,Ye,Pe)}}function Dm(E,L,V,k,z,me){G!==null&&z.isNodeMaterial&&G.setObject(E,z),E.onBeforeRender(P,L,V,k,z,me),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(P,L,V,k,E,me),z.transparent===!0&&z.side===li&&z.forceSinglePass===!1?(z.side=xn,z.needsUpdate=!0,P.renderBufferDirect(V,L,k,z,E,me),z.side=Hi,z.needsUpdate=!0,P.renderBufferDirect(V,L,k,z,E,me),z.side=li):P.renderBufferDirect(V,L,k,z,E,me),E.onAfterRender(P,L,V,k,z,me)}function Um(E){let L=0;for(let V of E)V.texture!==null&&L++;return L}function La(E,L,V){L.isScene!==!0&&(L=ei);let k=Be.get(E),z=w.state.lights,me=w.state.shadowsArray,we=z.state.version,fe=te.getParameters(E,z.state,me,L,V,w.state.lightProbeGridArray),Se=te.getProgramCacheKey(fe),Pe=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let Ye=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=R.get(E.envMap||k.environment,Ye),k.envMapRotation=k.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",_t),Pe=new Map,k.programs=Pe,k.programVariants=new Map);let ct=Pe.get(Se);if(ct!==void 0){if(k.currentProgram===ct&&k.lightsStateVersion===we)return Fm(E,fe),ct}else fe.uniforms=te.getUniforms(E),G!==null&&E.isNodeMaterial&&G.build(E,V,fe),E.onBeforeCompile(fe,P),ct=te.acquireProgram(fe,Se),Pe.set(Se,ct),k.uniforms=fe.uniforms;let Re=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=J.uniform),Fm(E,fe),k.needsLights=ov(E),k.lightsStateVersion=we,k.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.sunLights.value=z.state.sun,Re.sunLightShadows.value=z.state.sunShadow,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.sunShadowMatrix.value=z.state.sunShadowMatrix,Re.sunShadowCascade.value=z.state.sunShadowCascade,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),k.numLightProbeGrids=Um(w.state.lightProbeGridArray),k.currentProgram=ct,k.uniformsList=null,ct}function iv(E,L,V,k,z){let me=Be.get(E),we=me.currentProgram.id+","+k+","+z,fe=me.programVariants.get(we);return fe===void 0?(fe=La(E,L,V),me.programVariants.set(we,fe)):(me.currentProgram=fe,me.uniformsList=null,me.outputColorSpace=k,me.toneMapping=z),fe}function Om(E){if(E.uniformsList===null){let L=E.currentProgram.getUniforms();E.uniformsList=Jo.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function Fm(E,L){let V=Be.get(E);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function sv(E,L,V,k,z){L.isScene!==!0&&(L=ei),Xe.resetTextureUnits();let me=L.fog,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,fe=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:nt.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pe=R.get(k.envMap||we,Se),Ye=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ct=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,qt=!!V.morphAttributes.color,At=Gi;k.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(At=P.toneMapping);let St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vn=St!==void 0?St.length:0,Ce=Be.get(k),Rn=w.state.lights;if(Kt===!0&&(Dn===!0||E!==ne)){let kt=E===ne&&k.id===q;J.setState(k,E,kt)}let mt=!1,xr=!1;k.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==Rn.state.version||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==Pe||k.fog===!0&&Ce.fog!==me||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==J.numPlanes||Ce.numIntersection!==J.numIntersection)||Ce.vertexAlphas!==Ye||Ce.vertexTangents!==ct||Ce.morphTargets!==Re||Ce.morphNormals!==ut||Ce.morphColors!==qt||Ce.morphTargetsCount!==vn||Ce.numLightProbeGrids!==Um(w.state.lightProbeGridArray)?mt=!0:(Ce.outputColorSpace!==fe||Ce.toneMapping!==At)&&(xr=!0):(mt=!0,Ce.__version=k.version);let Mn=Ce.currentProgram;(mt===!0||xr===!0)&&(Mn=xr===!0?iv(k,L,z,fe,At):La(k,L,z),G&&k.isNodeMaterial&&G.onUpdateProgram(k,Mn,Ce));let gc=!1,Ps=!1,_r=!1,pt=Mn.getUniforms(),pn=Ce.uniforms;if(_e.useProgram(Mn.program)&&(gc=!0,Ps=!0,_r=!0),k.id!==q&&(q=k.id,Ps=!0),gc||ne!==E){_e.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(O,"projectionMatrix",E.projectionMatrix),pt.setValue(O,"viewMatrix",E.matrixWorldInverse);let cn=pt.map.cameraPosition;cn!==void 0&&cn.setValue(O,Di.setFromMatrixPosition(E.matrixWorld)),Ut.logarithmicDepthBuffer&&pt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),ne!==E&&(ne=E,Ps=!0,_r=!0)}if(Ce.needsLights&&(Rn.state.sunShadowMap.length>0&&pt.setValue(O,"sunShadowMap",Rn.state.sunShadowMap,Xe),Rn.state.directionalShadowMap.length>0&&pt.setValue(O,"directionalShadowMap",Rn.state.directionalShadowMap,Xe),Rn.state.spotShadowMap.length>0&&pt.setValue(O,"spotShadowMap",Rn.state.spotShadowMap,Xe),Rn.state.pointShadowMap.length>0&&pt.setValue(O,"pointShadowMap",Rn.state.pointShadowMap,Xe)),z.isSkinnedMesh){pt.setOptional(O,z,"bindMatrix"),pt.setOptional(O,z,"bindMatrixInverse");let kt=z.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),pt.setValue(O,"boneTexture",kt.boneTexture,Xe))}z.isBatchedMesh&&(pt.setOptional(O,z,"batchingTexture"),pt.setValue(O,"batchingTexture",z._matricesTexture,Xe),pt.setOptional(O,z,"batchingIdTexture"),pt.setValue(O,"batchingIdTexture",z._indirectTexture,Xe),pt.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(O,"batchingColorTexture",z._colorsTexture,Xe));let xi=V.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&Q.update(z,V,Mn),(Ps||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,pt.setValue(O,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(pn.envMapIntensity.value=L.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=JE()),Ps){if(pt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Ce.needsLights&&rv(pn,_r),me&&k.fog===!0&&ce.refreshFogUniforms(pn,me),ce.refreshMaterialUniforms(pn,k,be,ke,w.state.transmissionRenderTarget[E.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let kt=b,cn=0;for(let es of w.state.lightProbeGridArray)es.texture!==null&&(kt.textures[cn]=es.texture,kt.min[cn]=es.boundingBox.min,kt.max[cn]=es.boundingBox.max,kt.resolution[cn]=es.resolution,cn++);for(let es in kt)kt[es].length=cn;pn.probesSH.value=kt.textures,pn.probesMin.value=kt.min,pn.probesMax.value=kt.max,pn.probesResolution.value=kt.resolution}Jo.upload(O,Om(Ce),pn,Xe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Jo.upload(O,Om(Ce),pn,Xe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pt.setValue(O,"center",z.center),pt.setValue(O,"modelViewMatrix",z.modelViewMatrix),pt.setValue(O,"normalMatrix",z.normalMatrix),pt.setValue(O,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let kt=k.uniformsGroups;for(let cn=0,es=kt.length;cn<es;cn++){let Bm=kt[cn];De.update(Bm,Mn),De.bind(Bm,Mn)}}return Mn}function rv(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.sunLights.needsUpdate=L,E.sunLightShadows.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function ov(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(E,L,V){let k=Be.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Be.get(E.texture).__webglTexture=L,Be.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,L){let V=Be.get(E);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,V=0){oe=E,ee=L,W=V;let k=null,z=!1,me=!1;if(E){let fe=Be.get(E);if(fe.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),ie.copy(E.viewport),Ie.copy(E.scissor),qe=E.scissorTest,_e.viewport(ie),_e.scissor(Ie),_e.setScissorTest(qe),q=-1;return}else if(fe.__webglFramebuffer===void 0)Xe.setupRenderTarget(E);else if(fe.__hasExternalTextures)Xe.rebindTextures(E,Be.get(E.texture).__webglTexture,Be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ye=E.depthTexture;if(fe.__boundDepthTexture!==Ye){if(Ye!==null&&Be.has(Ye)&&(E.width!==Ye.image.width||E.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(E)}}let Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);let Pe=Be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[L])?k=Pe[L][V]:k=Pe[L],z=!0):E.samples>0&&Xe.useMultisampledRTT(E)===!1?k=Be.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[V]:k=Pe,ie.copy(E.viewport),Ie.copy(E.scissor),qe=E.scissorTest}else ie.copy(He).multiplyScalar(be).floor(),Ie.copy(xt).multiplyScalar(be).floor(),qe=bt;if(V!==0&&(k=$),_e.bindFramebuffer(O.FRAMEBUFFER,k)&&_e.drawBuffers(E,k),_e.viewport(ie),_e.scissor(Ie),_e.setScissorTest(qe),z){let fe=Be.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,fe.__webglTexture,V)}else if(me){let fe=L;for(let Se=0;Se<E.textures.length;Se++){let Pe=Be.get(E.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Pe.__webglTexture,V,fe)}}else if(E!==null&&V!==0){let fe=Be.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,V)}q=-1};function km(E){let L=Be.get(E);return(L.__readFormat!==E.format||L.__readType!==E.type)&&(L.__readFormat=E.format,L.__readType=E.type,L.__formatReadable=Ut.textureFormatReadable(E.format),L.__typeReadable=Ut.textureTypeReadable(E.type)),L}this.readRenderTargetPixels=function(E,L,V,k,z,me,we,fe=0){if(!(E&&E.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Se=Se[we],Array.isArray(Se)&&(Se=Se[0])),Se){_e.bindFramebuffer(O.FRAMEBUFFER,Se);try{let Pe=E.textures[fe],Ye=Pe.format,ct=Pe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let Re=km(Pe);if(Re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-k&&V>=0&&V<=E.height-z&&O.readPixels(L,V,k,z,le.convert(Ye),le.convert(ct),me)}finally{let Pe=oe!==null?Be.get(oe).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,L,V,k,z,me,we,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Se=Se[we],Array.isArray(Se)&&(Se=Se[0])),Se)if(L>=0&&L<=E.width-k&&V>=0&&V<=E.height-z){_e.bindFramebuffer(O.FRAMEBUFFER,Se);let Pe=E.textures[fe],Ye=Pe.format,ct=Pe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let Re=km(Pe);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(L,V,k,z,le.convert(Ye),le.convert(ct),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let qt=oe!==null?Be.get(oe).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,qt);let At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await hg(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ut),O.deleteSync(At),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,L=null,V=0){let k=Math.pow(2,-V),z=Math.floor(E.image.width*k),me=Math.floor(E.image.height*k),we=L!==null?L.x:0,fe=L!==null?L.y:0;Xe.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,we,fe,z,me),_e.unbindTexture()},this.copyTextureToTexture=function(E,L,V=null,k=null,z=0,me=0){let we,fe,Se,Pe,Ye,ct,Re,ut,qt,At=E.isCompressedTexture?E.mipmaps[me]:E.image;if(V!==null)we=V.max.x-V.min.x,fe=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,Pe=V.min.x,Ye=V.min.y,ct=V.isBox3?V.min.z:0;else{let pt=Math.pow(2,-z);we=Math.floor(At.width*pt),fe=Math.floor(At.height*pt),E.isDataArrayTexture?Se=At.depth:E.isData3DTexture?Se=Math.floor(At.depth*pt):Se=1,Pe=0,Ye=0,ct=0}k!==null?(Re=k.x,ut=k.y,qt=k.z):(Re=0,ut=0,qt=0);let St=le.convert(L.format),vn=le.convert(L.type),Ce;L.isData3DTexture?(Xe.setTexture3D(L,0),Ce=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Xe.setTexture2DArray(L,0),Ce=O.TEXTURE_2D_ARRAY):(Xe.setTexture2D(L,0),Ce=O.TEXTURE_2D),_e.activeTexture(O.TEXTURE0),_e.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),_e.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_e.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);let Rn=_e.getParameter(O.UNPACK_ROW_LENGTH),mt=_e.getParameter(O.UNPACK_IMAGE_HEIGHT),xr=_e.getParameter(O.UNPACK_SKIP_PIXELS),Mn=_e.getParameter(O.UNPACK_SKIP_ROWS),gc=_e.getParameter(O.UNPACK_SKIP_IMAGES);_e.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),_e.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),_e.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),_e.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),_e.pixelStorei(O.UNPACK_SKIP_IMAGES,ct);let Ps=E.isDataArrayTexture||E.isData3DTexture,_r=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){let pt=Be.get(E),pn=Be.get(L),xi=Be.get(pt.__renderTarget),kt=Be.get(pn.__renderTarget);_e.bindFramebuffer(O.READ_FRAMEBUFFER,xi.__webglFramebuffer),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let cn=0;cn<Se;cn++)Ps&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.get(E).__webglTexture,z,ct+cn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.get(L).__webglTexture,me,qt+cn)),O.blitFramebuffer(Pe,Ye,Pe+we,Ye+fe,Re,ut,Re+we,ut+fe,O.DEPTH_BUFFER_BIT,O.NEAREST);_e.bindFramebuffer(O.READ_FRAMEBUFFER,null),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Be.has(E)){let pt=Be.get(E),pn=Be.get(L);_e.bindFramebuffer(O.READ_FRAMEBUFFER,N),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,Y);for(let xi=0;xi<Se;xi++)Ps?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pt.__webglTexture,z,ct+xi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pt.__webglTexture,z),_r?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pn.__webglTexture,me,qt+xi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pn.__webglTexture,me),z!==0?O.blitFramebuffer(Pe,Ye,Pe+we,Ye+fe,Re,ut,Re+we,ut+fe,O.COLOR_BUFFER_BIT,O.NEAREST):_r?O.copyTexSubImage3D(Ce,me,Re,ut,qt+xi,Pe,Ye,we,fe):O.copyTexSubImage2D(Ce,me,Re,ut,Pe,Ye,we,fe);_e.bindFramebuffer(O.READ_FRAMEBUFFER,null),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _r?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Ce,me,Re,ut,qt,we,fe,Se,St,vn,At.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(Ce,me,Re,ut,qt,we,fe,Se,St,At.data):O.texSubImage3D(Ce,me,Re,ut,qt,we,fe,Se,St,vn,At):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,Re,ut,we,fe,St,vn,At.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,Re,ut,At.width,At.height,St,At.data):O.texSubImage2D(O.TEXTURE_2D,me,Re,ut,we,fe,St,vn,At);_e.pixelStorei(O.UNPACK_ROW_LENGTH,Rn),_e.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt),_e.pixelStorei(O.UNPACK_SKIP_PIXELS,xr),_e.pixelStorei(O.UNPACK_SKIP_ROWS,Mn),_e.pixelStorei(O.UNPACK_SKIP_IMAGES,gc),me===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&O.generateMipmap(Ce),_e.unbindTexture()},this.initRenderTarget=function(E){Be.get(E).__webglFramebuffer===void 0&&Xe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Xe.setTextureCube(E,0):E.isData3DTexture?Xe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Xe.setTexture2DArray(E,0):Xe.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){ee=0,W=0,oe=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Bf=Object.freeze({arena:Object.freeze({x:10.2,z:8,playerPad:.6,enemyPad:.4}),run:Object.freeze({totalTime:180,startSpawnClock:2.5,startGhosts:3}),player:Object.freeze({speed:6.5,maxHp:3,startPos:Object.freeze([0,6.5]),hitInvuln:1.1,minStickMag:.35,bubbleInvuln:.8}),dash:Object.freeze({distance:5.2,duration:.18,cooldown:.8,hitRadius:.85,refundPerKill:.18,cooldownFloor:.12,invulnPad:.12,aimRangePad:.6,aimCone:.6}),combo:Object.freeze({window:3,baseScore:100}),enemy:Object.freeze({spawnWindup:.8,spawnMinDist:5.5,contactRadius:.8,contactKnockback:1.2,inactiveDrift:.25,wandererSpeed:1.6,wandererSpeedPerSec:.01,wispSpeed:1.1,wispKeepMin:5,wispKeepMax:7,wispShootInterval:2.5,wispChargeWindow:.5,separation:.9,detour:Object.freeze({minDelay:.3,spread:5,time:1.3,angle:1.35,pinned:.25})}),projectile:Object.freeze({speed:4.5,life:5,hitRadius:.55}),night:Object.freeze({intermission:5,spawnMinDist:3}),spirits:Object.freeze({moth:Object.freeze({speed:2.5,zig:1.4,zigFreq:4.5}),bell:Object.freeze({speed:.9,keepMin:3.2,keepMax:5,interval:3.6,windup:.8,waveSpeed:4.5,waveMax:4.2,band:.4}),bloom:Object.freeze({interval:3.2,windup:.6,shots:3,spread:.32,creep:.15}),choir:Object.freeze({speed:.85,shield:1,shieldPoints:50})}),campaign:Object.freeze({portalAperture:2.5,exitRadius:1.3,relicWatch:.8,relicKey:1.25,soulPickup:.9,soulSpeed:.15,soulSpeedCap:15,soulScatterLock:1.2,shrineRadius:1.3,soulGoal:25,soulScore:150,soulCap:32,wardHp:100,wardBonus:500,wardAttack:.65,bossHp:12,bossRadius:1.35,bossScore:250,unstick:1.5}),difficulty:Object.freeze({tier:3,count:1,wardDps:1,wardSpeed:1,bossCd:1,loot:1}),items:Object.freeze({cap:3,pickupLife:14,pickupFade:3,pickupRadius:.85,drop:Object.freeze({base:.03,pity:.006,weights:Object.freeze({heart:3,shield:2,hourglass:2,magnet:2,parcel:6}),parcel:Object.freeze({lure_paper:5,lure_brass:3,lure_spirit:1,spellbook:2,bellstone:1.5})}),hourglass:Object.freeze({time:3}),magnet:Object.freeze({time:4,speed:9}),lure:Object.freeze({maxActive:2,contact:.7,dps:1,offset:.9,lure_paper:Object.freeze({hp:3,range:6}),lure_brass:Object.freeze({hp:8,range:8}),lure_spirit:Object.freeze({hp:16,range:11})}),spellbook:Object.freeze({life:9,interval:1.7,radius:4.2,push:2.2,stun:.5}),bellstone:Object.freeze({radius:6.5,push:4.5,stun:.9,life:1.6})}),hitStop:Object.freeze({duration:.05,timeScale:.08}),pacing:Object.freeze({cap:n=>n<30?5:n<60?8:n<105?11:n<180?14:Math.min(18,14+Math.floor((n-180)/90)),interval:n=>Math.max(.8,n<30?3.2:n<105?2.6-n/130:n<150?1.4:n<300?.95:.85),groupAfter:25,groupChance:.33,wispAfter:60,wispChance:.27,bigGroupAfter:70})}),Zg=n=>Array.isArray(n)?[...n]:n&&typeof n=="object"?Object.fromEntries(Object.entries(n).map(([e,t])=>[e,typeof t=="function"?t:Zg(t)])):n,Jg=Bf,D=Zg(Bf);function jg(){let n=(e,t)=>{for(let i of Object.keys(t))Array.isArray(t[i])?e[i]=[...t[i]]:t[i]&&typeof t[i]=="object"?n(e[i],t[i]):e[i]=t[i]};n(D,Bf)}var Ti=D.arena.x,wi=D.arena.z,fC=D.player.speed,Qo=D.dash.distance,pC=D.dash.duration,Qg=D.dash.cooldown,Cl=D.run.totalTime,dh=1e3,ea=1.4,zf=1.3,Ne={charcoal:2169389,plum:5127004,stone:9141133,parchment:16243632,amber:16758875,orange:12152136,lavender:12165608,blue:7453429,pink:15761301,moss:6449733,violet:11106559},ex=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;ex&&document.body.classList.add("touch");var qs=()=>ex||document.body.classList.contains("touch"),tx=(()=>{try{return new URLSearchParams(location.search).get("mode")==="night"?"night":"endless"}catch{return"endless"}})();var Ys=480,$s=270,zr=document.getElementById("game"),kn=new ch({canvas:zr,antialias:!1,powerPreference:"high-performance"});kn.setPixelRatio(1);kn.setSize(Ys,$s,!1);kn.shadowMap.enabled=!0;kn.shadowMap.type=$d;var Il=new Pn(Ys,$s,{type:qn,magFilter:st,minFilter:st});Il.texture.colorSpace=gn;var Ms=new $t({uniforms:{tScene:{value:Il.texture},realm:{value:0},flash:{value:0},hurt:{value:0},ripple:{value:new I(.5,.5,-1)},time:{value:0},aspect:{value:16/9}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`
    precision highp float;
    uniform sampler2D tScene; uniform float realm, flash, hurt, time, aspect; uniform vec3 ripple;
    varying vec2 vUv;
    float bayer(vec2 p){
      ivec2 i = ivec2(mod(p, 4.));
      // Same 4x4 Bayer matrix as before; mat4 columns avoid a fragment-shader index loop.
      mat4 m = mat4(
        0.,12.,3.,15.,
        8.,4.,11.,7.,
        2.,14.,1.,13.,
        10.,6.,9.,5.
      );
      return m[i.x][i.y] / 16.;
    }
    void main(){
      vec2 uv = vUv;
      if (ripple.z >= 0.) {
        vec2 d = (uv - ripple.xy) * vec2(aspect, 1.);
        float r = length(d), w = ripple.z * 1.6;
        float ring = smoothstep(0.06, 0., abs(r - w)) * (1. - ripple.z);
        uv -= normalize(d + 1e-5) * ring * 0.012;
      }
      vec3 c = texture2D(tScene, uv).rgb;
      c = pow(max(c, 0.), vec3(1./2.2));
      float l = dot(c, vec3(.3, .55, .15));
      vec3 spirit = mix(vec3(l) * vec3(.72, .74, 1.22) + vec3(.02, .015, .07), c * vec3(.82, .86, 1.2), .45);
      c = mix(c * vec3(1.04, .98, .92), spirit, realm);
      vec2 q = vUv - .5; c *= 1. - dot(q, q) * .9;
      c = mix(c, vec3(.94, .44, .52), hurt * .35 * (1. - smoothstep(.2, .7, length(q))) + hurt * .25);
      c += flash * vec3(.55, .5, .65);
      float L = 14.;
      float b = bayer(floor(gl_FragCoord.xy)) - .5;
      c = floor(c * L + b * .85 + .5) / L;
      gl_FragColor = vec4(c, 1.);
    }`,depthTest:!1,depthWrite:!1}),Hf=new Oo,nx=new zi(-1,1,1,-1,0,1);Hf.add(new ze(new Qt(2,2),Ms));var $e=new Oo;$e.background=new ge(Ne.charcoal);$e.fog=new Za(Ne.charcoal,34,60);var Yn=new zi(-14,14,8,-8,.1,200);function Gf(){let n=window.innerWidth,e=window.innerHeight,t=n/e,i=t<1.15;i?(Ys=288,$s=Math.round(288/t)):($s=270,Ys=Math.round(270*Math.min(t,2.4))),kn.setSize(Ys,$s,!1),Il.setSize(Ys,$s);let o=Math.max(8,(i?12:14.2)/t),a=o*t;Object.assign(Yn,{left:-a,right:a,top:o,bottom:-o}),Yn.updateProjectionMatrix(),Ms.uniforms.aspect.value=t;let l=Math.min(n/Ys,e/$s);zr.style.width=Math.round(Ys*l)+"px",zr.style.height=Math.round($s*l)+"px";let c=Math.max(2,Math.min(4,Math.floor(Math.min(n/400,e/225))));document.documentElement.style.setProperty("--hs",c),document.body.classList.toggle("vert",i)}window.addEventListener("resize",Gf);window.addEventListener("orientationchange",()=>setTimeout(Gf,200));var Vf=new I(0,23,20.8),jE=new I(0,0,-1.9);Yn.position.copy(Vf);Yn.lookAt(jE);Gf();var fh=new hl(13219558,3812933,1.45);$e.add(fh);var Ai=new Nr(13220095,1.1);Ai.position.set(-9,18,-8);Ai.target.position.set(0,0,0);Ai.castShadow=!0;Ai.shadow.mapSize.set(1024,1024);Object.assign(Ai.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:60});Ai.shadow.bias=-.002;$e.add(Ai,Ai.target);var Ks=(()=>{let n=new Uint8Array([70,70,70,255,150,150,150,255,255,255,255,255]),e=new Hs(n,3,1);return e.magFilter=e.minFilter=st,e.needsUpdate=!0,e})();function Wf(n,e){if(e===mf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Zo||e===Sl){let t=n.getIndex();if(t===null){let r=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Zo)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function ix(n){let e=new Map,t=new Map,i=n.clone();return sx(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function sx(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)sx(n.children[i],e.children[i],t)}var ph=class extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new lp(t)}),this.register(function(t){return new cp(t)}),this.register(function(t){return new up(t)}),this.register(function(t){return new tp(t)}),this.register(function(t){return new np(t)}),this.register(function(t){return new ip(t)}),this.register(function(t){return new sp(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new rp(t)}),this.register(function(t){return new ep(t)}),this.register(function(t){return new ap(t)}),this.register(function(t){return new op(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new mh(t,rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new mh(t,rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new hp(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=_s.extractUrlBase(e);o=_s.resolveURL(c,this.path)}else o=_s.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Go(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===cx){try{o[rt.KHR_BINARY_GLTF]=new dp(e)}catch(h){s&&s(h);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new yp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:o[h]=new Kf;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new fp(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[h]=new pp;break;case rt.KHR_MESH_QUANTIZATION:o[h]=new mp;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function QE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function zt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$f=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],gn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Nr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rt(u),c.distance=h;break;case"spot":c=new fl(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Kf=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return ht}extendParams(e,t,i){let s=[];e.color=new ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},Zf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Jf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(r,r)}return Promise.all(s)}},jf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(s)}},Qf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},ep=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},tp=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],gn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Mt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},np=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},ip=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(r[0],r[1],r[2],gn),Promise.all(s)}},sp=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},rp=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(r[0],r[1],r[2],gn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Mt)),Promise.all(s)}},op=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},ap=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},lp=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},cp=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},up=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},mh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},hp=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==hi.TRIANGLES&&c.mode!==hi.TRIANGLE_STRIP&&c.mode!==hi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let m of h){let y=new Ve,p=new I,g=new In,v=new I(1,1,1),S=new Rr(m.geometry,m.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,A),l.SCALE&&v.fromBufferAttribute(l.SCALE,A),S.setMatrixAt(A,y.compose(p,g,v));let b=null;for(let A in l)if(A==="_COLOR_0"){let w=l[A];S.instanceColor=new us(w.array,w.itemSize,w.normalized)}else if(A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"){if(b===null){let _=S.geometry;b=new Bt,b.name=_.name;for(let T in _.attributes)b.setAttribute(T,_.attributes[T]);for(let T in _.morphAttributes)b.morphAttributes[T]=_.morphAttributes[T];_.index!==null&&b.setIndex(_.index),b.morphTargetsRelative=_.morphTargetsRelative;for(let T of _.groups)b.addGroup(T.start,T.count,T.materialIndex);_.boundingBox!==null&&(b.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(b.boundingSphere=_.boundingSphere.clone()),b.drawRange.start=_.drawRange.start,b.drawRange.count=_.drawRange.count,b.userData=Object.assign({},_.userData),S.geometry=b}let w=l[A];b.setAttribute(A,new us(w.array,w.itemSize,w.normalized))}Lt.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},cx="glTF",Pl=12,rx={JSON:1313821514,BIN:5130562},dp=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Pl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Pl,r=new DataView(e,Pl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===rx.JSON){let c=new Uint8Array(e,Pl+o,a);this.content=i.decode(c)}else if(l===rx.BIN){let c=Pl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},fp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=xp[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=xp[u]||u.toLowerCase();if(o[u]!==void 0){let d=i.accessors[e.attributes[u]],f=ta[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let m in f.attributes){let y=f.attributes[m],p=l[m];p!==void 0&&(y.normalized=p)}h(f)},a,c,gn,d)})})}},pp=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},mp=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},gh=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,m=e*c,y=m-c,p=-2*f+3*d,g=f-d,v=1-p,S=g-d+h;for(let b=0;b!==a;b++){let A=o[y+b+a],w=o[y+b+l]*u,_=o[m+b+a],T=o[m+b]*u;r[b]=v*A+S*w+p*_+g*T}return r}},eT=new In,gp=class extends gh{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return eT.fromArray(r).normalize().toArray(r),r}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ta={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ox={9728:st,9729:Jt,9984:Mu,9985:$o,9986:Fr,9987:ci},ax={33071:ri,33648:Co,10497:ks},Xf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tT={CUBICSPLINE:void 0,LINEAR:Tr,STEP:Er},qf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Pr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),n.DefaultMaterial}function Hr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function qi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function sT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rT(n){let e,t=n.extensions&&n.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yf(t.attributes):e=n.indices+":"+Yf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Yf(n.targets[i]);return e}function Yf(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function _p(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var aT=new Ve,yp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new QE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?(this.textureLoader=new ul(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new pl(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Go(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Hr(r,a,s),qi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(_s.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Xf[s.type],a=ta[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Pt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Xf[s.type],c=ta[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,y,p;if(f&&f!==h){let g=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,S=t.cache.get(v);S||(y=new c(a,g*f,s.count*f/u),S=new Ar(y,f/u),t.cache.add(v,S)),p=new Bs(S,l,d%f/u,m)}else a===null?y=new c(s.count*l):y=new c(a,d,s.count*l),p=new Pt(y,l,m);if(s.sparse!==void 0){let g=Xf.SCALAR,v=ta[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,A=new v(o[1],S,s.sparse.count*g),w=new c(o[2],b,s.sparse.count*l);a!==null&&(p=new Pt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,T=A.length;_<T;_++){let U=A[_];if(p.setX(U,w[_*l]),l>=2&&p.setY(U,w[_*l+1]),l>=3&&p.setZ(U,w[_*l+2]),l>=4&&p.setW(U,w[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=ox[d.magFilter]||Jt,u.minFilter=ox[d.minFilter]||ci,u.wrapS=ax[d.wrapS]||ks,u.wrapT=ax[d.wrapT]||ks,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==st&&u.minFilter!==Jt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,m){t.parse(d,f,m)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,m){let y=f;t.isImageBitmapLoader===!0&&(y=function(p){let g=new jt(p);g.needsUpdate=!0,f(g)}),t.load(_s.resolveURL(d,r.path),y,void 0,m)})})}let h=u.then(function(d){return c===!0&&a.revokeObjectURL(l),qi(d,o),d.userData.mimeType=o.mimeType||oT(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new zo,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Bo,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Pr}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let h=s[rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ge(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],gn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=li);let u=r.alphaMode||qf.OPAQUE;if(u===qf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===qf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ht&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ht&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ht){let h=r.emissiveFactor;a.emissive=new ge().setRGB(h[0],h[1],h[2],gn)}return r.emissiveTexture!==void 0&&o!==ht&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),qi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Hr(s,h,r),h})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return lx(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=rT(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=lx(new Bt,c,t),c.mode===hi.TRIANGLE_STRIP?d=d.then(f=>Wf(f,Sl)):c.mode===hi.TRIANGLE_FAN&&(d=d.then(f=>Wf(f,Zo))),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?nT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let y=u[f],p=o[f],g,v=c[f];if(p.mode===hi.TRIANGLES||p.mode===hi.TRIANGLE_STRIP||p.mode===hi.TRIANGLE_FAN||p.mode===void 0){let S=r.isSkinnedMesh===!0,b=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");S&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=S&&b?new el(y,v):new ze(y,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===hi.LINES)g=new nl(y,v);else if(p.mode===hi.LINE_STRIP)g=new Cr(y,v);else if(p.mode===hi.LINE_LOOP)g=new il(y,v);else if(p.mode===hi.POINTS)g=new hs(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&sT(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),qi(g,r),p.extensions&&Hr(s,g,p),t.assignFinalMaterial(g),h.push(g)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Hr(s,h[0],r),h[0];let d=new Oe;r.extensions&&Hr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new mn(dt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new zi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),qi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tl(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],m=s.samplers[f.sampler],y=f.target,p=y.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;y.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(m),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],y=h[3],p=h[4],g=[];for(let S=0,b=d.length;S<b;S++){let A=d[S],w=f[S],_=m[S],T=y[S],U=p[S];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let P=i._createAnimationTracks(A,w,_,T,U);if(P)for(let F=0;F<P.length;F++)g.push(P[F])}let v=new cl(r,void 0,g);return qi(v,s),v})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,aT)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,m=h[0];u.pivot=new I().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ko:c.length>1?u=new Oe:c.length===1?u=c[0]:u=new Lt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),qi(u,r),r.extensions&&Hr(i,u,r),r.matrix!==void 0){let h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Oe;i.name&&(r.name=s.createUniqueName(i.name)),qi(r,i),i.extensions&&Hr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(ix(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof En||d instanceof jt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Zs[r.path]===Zs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Zs[r.path]){case Zs.weights:u=ms;break;case Zs.rotation:u=gs;break;case Zs.translation:case Zs.scale:u=Vs;break;default:i.itemSize===1?u=ms:u=Vs;break}let h=s.interpolation!==void 0?tT[s.interpolation]:Tr,d=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){let y=new u(l[f]+"."+Zs[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=_p(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof gs?gp:gh;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lT(n,e,t){let i=e.attributes,s=new Wn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=_p(ta[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let y=_p(ta[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Un;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function lx(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=xp[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return nt.workingColorSpace!==gn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),qi(n,e),lT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?iT(n,e.targets,t):n})}var vp={file:"assets.bin?v=89a0d01d43",index:{balustrade:[0,15536],barrier_living:[15536,20116],barrier_post_living:[35652,11460],barrier_post_spirit:[47112,11492],barrier_spirit:[58604,20116],bell_clapper:[78720,2792],bell_frame:[81512,16504],bell_gear:[98016,5308],bellstone:[103324,29840],bellstone_bands:[133164,10908],bellstone_feet:[144072,4628],bench:[148700,13864],bone_pile:[162564,9704],broken_clock:[172268,29656],candelabrum:[201924,9932],candles:[211856,7348],caretaker:[219204,16664],chapel:[235868,41936],coffin_broken:[277804,9680],collapsed_tomb:[287484,16892],conservatory:[304376,69708],crypt_column:[374084,5660],crypt_door:[379744,36100],dead_tree_big:[415844,19052],dead_tree_small:[434896,8260],entrance_stairs:[443156,13976],fence:[457132,7564],floating_rock:[464696,9280],flowerbed:[473976,24284],fountain:[498260,40560],gargoyle:[538820,18512],gate:[557332,24188],glowbloom:[581520,28284],grand_sarcophagus:[609804,25072],grave_a:[634876,5116],grave_b:[639992,5216],grave_c:[645208,4440],gravestone_cracked:[649648,7356],great_bell:[657004,19032],half_wall:[676036,8244],hedge:[684280,9216],lamp:[693496,6276],lantern:[699772,5536],lure_brass:[705308,28208],lure_brass_flame:[733516,3980],lure_paper:[737496,28268],lure_spirit:[765764,29304],lure_spirit_core:[795068,5932],lure_spirit_halo:[801e3,7604],marble_post:[808604,6376],marble_rail:[814980,11316],marble_stairs:[826296,12284],marble_wall:[838580,7860],memorial_relief:[846440,7948],obelisk:[854388,6460],open_grave:[860848,13040],ossuary_wall:[873888,44092],parapet:[917980,9536],parapet_broken:[927516,11104],pickup_heart:[938620,11676],pickup_hourglass:[950296,18352],pickup_magnet:[968648,16440],pickup_parcel:[985088,27720],pickup_shield:[1012808,21256],pillar:[1034064,2392],portal_arch:[1036456,48868],ritual_banner:[1085324,7688],rosebush:[1093012,8144],rubble:[1101156,5152],ruined_gate:[1106308,22864],sarcophagus:[1129172,12548],signal_brazier:[1141720,15732],soul_flame:[1157452,4316],soul_orb:[1161768,3768],soul_shrine:[1165536,25924],spawn_alcove:[1191460,23032],spellbook_book:[1214492,27024],spellbook_runes:[1241516,7428],spellbook_sigil:[1248944,11292],spirit_bell:[1260236,15908],spirit_bell_tongue:[1276144,6684],spirit_bloom:[1282828,14076],spirit_bloom_petal:[1296904,4272],spirit_bramble:[1301176,12360],spirit_choir_core:[1313536,10472],spirit_choir_skull:[1324008,10804],spirit_digger:[1334812,19996],spirit_digger_shovel:[1354808,4256],spirit_mask:[1359064,13132],spirit_mask_ribbon:[1372196,3596],spirit_moth:[1375792,22244],spirit_moth_wing:[1398036,8052],spirit_mourner:[1406088,16800],spirit_mourner_veil:[1422888,9412],spirit_raven:[1432300,11660],spirit_raven_wing:[1443960,4560],spirit_shackle_ball:[1448520,10460],spirit_shackle_link:[1458980,4668],spirit_shackled:[1463648,13484],spirit_vessel:[1477132,14564],spirit_wick:[1491696,13772],spirit_wick_flame:[1505468,5912],stained_glass:[1511380,45184],statue_mourner:[1556564,19032],topiary:[1575596,9928],tower_window:[1585524,18400],tree:[1603924,13996],urn:[1617920,7176],wall_ruin:[1625096,15784],wanderer:[1640880,7676],ward_crystal:[1648556,3356],ward_pillar:[1651912,14268],ward_pillar_broken:[1666180,13280],ward_pillar_damaged:[1679460,16720],warden_body:[1696180,16572],warden_halo:[1712752,6888],warden_lantern:[1719640,6624],warden_link:[1726264,2356],weeping_angel:[1728620,30292],willow:[1758912,22252],wisp:[1781164,7320]}};var cT=new ph,hn={};function uT(n,{cast:e=!0,receive:t=!0}={}){return n.traverse(i=>{if(!i.isMesh)return;let s=i.material,r=s.emissive&&s.emissive.r+s.emissive.g+s.emissive.b>.01,o=new ai({color:s.color.clone(),gradientMap:Ks,emissive:r?s.color.clone():new ge(0)});r&&(o.emissiveIntensity=1.15),i.material=o,i.castShadow=e,i.receiveShadow=t,i.geometry.computeVertexNormals()}),n}async function ux(){let n=await(await fetch(vp.file)).arrayBuffer();await Promise.all(Object.entries(vp.index).map(([e,[t,i]])=>new Promise((s,r)=>cT.parse(n.slice(t,t+i),"",o=>{hn[e]=uT(o.scene),s()},r))))}var hx=null,Mp=n=>{hx=n};function K(n,e,t,i=0,s=1,r=hx||$e){let o=hn[n].clone(!0);return o.position.set(e,0,t),o.rotation.y=i,o.scale.setScalar(s),r.add(o),o}function bp(n){return n.traverse(e=>{e.isMesh&&(e.material=e.material.clone())}),n}var hT=n=>new $t({uniforms:{color:{value:new ge(n)},thick:{value:.045},opacity:{value:1}},vertexShader:"uniform float thick; void main(){ vec3 p = position + normal * thick; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.); }",fragmentShader:"uniform vec3 color; uniform float opacity; void main(){ gl_FragColor = vec4(pow(color, vec3(2.2)), opacity); }",side:xn,transparent:!0});function Ll(n,e=1183258){let t=hT(e),i=[];n.traverse(s=>{s.isMesh&&!s.userData.outline&&i.push(s)});for(let s of i){let r=new ze(s.geometry,t);r.userData.outline=!0,r.castShadow=!1,s.add(r)}return t}var dT=(()=>{let n=document.createElement("canvas");n.width=n.height=16;let e=n.getContext("2d");for(let i=0;i<16;i++)for(let s=0;s<16;s++){let r=Math.hypot(s-7.5,i-7.5)/8;r<1&&(e.fillStyle=`rgba(14,8,22,${r<.7?.6:.35})`,e.fillRect(s,i,1,1))}let t=new Tn(n);return t.magFilter=t.minFilter=st,t})();function Nl(n){let e=new ze(new Qt(n,n),new ht({map:dT,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e.renderOrder=1,e}var Yi=new Oe;Yi.name="set:old_churchyard";$e.add(Yi);function fT(){let e=document.createElement("canvas");e.width=e.height=384;let t=e.getContext("2d"),i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle="#463a52",t.fillRect(0,0,384,384);let r=384/32;for(let c=0;c<2600;c++)t.fillStyle=["#463a4c","#41384a","#4a4148","#52493f","#3f4636"][Math.floor(s()*5)],t.fillRect(Math.floor(s()*384),Math.floor(s()*384),2+Math.floor(s()*3),2);let o=384/2,a=384/2+1*r;for(let c=0;c<384;c+=6)for(let u=c/6%2?0:4;u<384;u+=9){let h=(u-o)/(8.2*r),d=(c-a)/(7.2*r);if(h*h+d*d>1+s()*.25)continue;let m=Math.floor(s()*3);t.fillStyle=["#6a5a6e","#62536a","#715f75"][m],t.fillRect(u,c,8,5),t.fillStyle="#7c6a80",t.fillRect(u,c,8,1)}for(let c=a+7*r;c<384;c+=6)for(let u=o-2*r+(c/6%2?0:4);u<o+2*r;u+=9)t.fillStyle="#56485b",t.fillRect(u,c,8,5),t.fillStyle="#665669",t.fillRect(u,c,8,1);for(let c=0;c<260;c++){let u=Math.floor(s()*384),h=Math.floor(s()*384);t.fillStyle=["#b96d48","#c4503a","#e08a3c","#626a45","#6f7a4a"][Math.floor(s()*5)],t.fillRect(u,h,2,2),s()<.5&&t.fillRect(u+1,h-1,1,1)}let l=new Tn(e);return l.magFilter=st,l.minFilter=st,l.colorSpace=Mt,l}var xh=new ze(new Qt(32,32),new ai({map:fT(),gradientMap:Ks}));xh.rotation.x=-Math.PI/2;xh.position.z=-1;xh.receiveShadow=!0;Yi.add(xh);var _h=new ze(new Qt(120,120),new ai({color:2892854,gradientMap:Ks}));_h.rotation.x=-Math.PI/2;_h.position.y=-.02;_h.receiveShadow=!0;$e.add(_h);var Js={lamps:[],chapel:null};function dx(){Mp(Yi);let n=11.6,e=-9.6,t=9.6,i=(p,g,v,S,b)=>{let A=Math.hypot(v-p,S-g),w=Math.round(A/3.2),_=Math.atan2(-(S-g),v-p);for(let T=0;T<=w;T++){let U=T/w,P=p+(v-p)*U,F=g+(S-g)*U;if(K("pillar",P,F),T<w){let G=P+(v-p)/w/2,$=F+(S-g)/w/2;(!b||!b(G,$))&&K("fence",G,$,_,.95)}}};i(-n,e,n,e,p=>Math.abs(p)<2.5),i(-n,t,n,t,p=>Math.abs(p)<1.7),i(-n,e,-n,t),i(n,e,n,t),K("lamp",-2.2,t+.1),K("lamp",2.2,t+.1),K("chapel",0,-12.2,0,.82),Js.chapel=new Rt(Ne.amber,18,9,1.6),Js.chapel.position.set(0,2.4,-9.6),Yi.add(Js.chapel),K("tree",-13.2,-10.8,.4,1.05),K("tree",13.4,-10.4,2,1.15),K("tree",-14.5,4.5,1.2,.9),K("tree",14.6,6.5,3,.85);for(let[p,g]of[[-9.6,-7.4],[9.6,-7.4],[-9.6,7.6],[9.6,7.6]]){K("lamp",p,g);let v=new Rt(Ne.amber,14,7.5,1.6);v.position.set(p,2.1,g),Yi.add(v),Js.lamps.push(v)}for(let[p,g]of[[-2.2,t+.1],[2.2,t+.1]]){let v=new Rt(Ne.amber,8,5,1.6);v.position.set(p,2.1,g),Yi.add(v),Js.lamps.push(v)}let s=11,r=()=>(s=s*16807%2147483647)/2147483647,o=(p,g)=>{let v=p/8.2,S=(g+1)/7.2;return v*v+S*S<1.12||Math.abs(p)<2.4&&g>3.6},a=(p,g)=>{let v=p,S=g;for(let b=0;b<12&&o(v,S);b++){let A=Math.hypot(v,S+1)||1;v+=v/A*.55,S+=(S+1)/A*.55}return[v,S]},l=[[-8.8,-5.6],[-7.4,-7.4],[-9.6,-2.8],[-8.6,.4],[-9.8,3.2],[-8.2,5.4],[-7.2,7.2],[9,-5.8],[7.6,-7.6],[9.8,-2.2],[8.6,1],[9.6,3.8],[8,6],[6.8,7.4],[-5.4,-8.4],[5.2,-8.6]];for(let[p,g]of l){let[v,S]=a(p+(r()-.5)*.35,g+(r()-.5)*.3),b=["grave_a","grave_a","grave_b","grave_c"][Math.floor(r()*4)];K(b,v,S,(r()-.5)*.5,.85+r()*.3)}let c=new Qt(.22,.16),u=new ai({gradientMap:Ks}),h=new Rr(c,u,140),d=new Ve,f=new In,m=new Mi,y=[12152136,12865594,14715452,9321022].map(p=>new ge(p));for(let p=0;p<140;p++){let g=(r()-.5)*24,v=(r()-.5)*20-.5;m.set(-Math.PI/2,0,r()*6.28),f.setFromEuler(m),d.compose(new I(g,.02,v),f,new I(1,1,1)),h.setMatrixAt(p,d),h.setColorAt(p,y[Math.floor(r()*4)])}h.receiveShadow=!0,Yi.add(h),Mp(null)}var Gt={};function fx(){let n=new Oe;$e.add(n);let e=hn.caretaker.clone(!0);e.scale.setScalar(ea),e.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),n.add(e);let t=Ll(e),i=hn.lantern.clone(!0);i.position.set(.42,.18,.12),i.scale.setScalar(1.15),i.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),e.add(i),Ll(i);let s=new Rt(Ne.amber,10,6,1.5);s.position.set(.42,.6,.2),e.add(s);let r=Nl(1.7);$e.add(r);let o=new ht({color:Ne.parchment,transparent:!0,opacity:.7,depthWrite:!1}),a=new Oe;for(let c=0;c<9;c++){let u=new ze(new Qt(.22,.22),o);u.rotation.x=-Math.PI/2,u.position.y=.05,a.add(u)}let l=new ze(new Si(.28,.42,4),o);l.rotation.x=-Math.PI/2,l.position.y=.05,a.add(l),$e.add(a),Object.assign(Gt,{player:n,body:e,outline:t,lantern:i,lanternLight:s,shadow:r,dashGuide:a,dashGuideMat:o})}var na=.7,px=1.1,mx=new ge(16758875),gx=new ge(8250367),xx=new ge(9071320),pT=new ge(6277360),mT=[.22,.44,.66],_x=n=>{let e=Math.sin(n*127.1+311.7)*43758.5453;return e-Math.floor(e)};function gT(n){let t=Math.floor(n/4.6),i=t*4.6+1.2+_x(t)*2.4,s=n-i;return s<0||s>.6?{e:0,dir:1}:{e:s<.04?s/.04:Math.pow(1-(s-.04)/.56,2),dir:_x(t+.5)<.5?-1:1}}function yx(n){let e=gT(n),t=Math.sin(n*.45)*.55,i=Math.sin(n*.9)*.25,s=Math.cos(n*.45)*.45*.55;return{x:t,z:i,y:Math.sin(n*1.6)*.12+Math.sin(n*.53)*.05,lean:-s*.35,pitch:.04+Math.sin(n*.7)*.03,turn:Math.sin(n*.31)*.12+e.dir*e.e*.38,tilt:Math.sin(n*.37)*.07+e.dir*e.e*.12,breath:1+Math.sin(n*1.1)*.035,tw:e.e}}var xT="clamp((1.9 - position.y) / 1.9, 0.0, 1.0)";function yh(n,e,t,{weight:i=xT,amp:s=.13,speed:r=1}={}){let o=`
  #include <begin_vertex>
  {
    float w = ${i}; w = w * w;
    float a = atan(position.z, position.x);
    float tt = uTime * ${r.toFixed(3)};
    transformed.x += sin(tt * 2.1 + position.y * 3.1 + a * 3.0) * ${s.toFixed(3)} * w;
    transformed.z += cos(tt * 1.7 + position.y * 2.6 + a * 2.0) * ${s.toFixed(3)} * w;
    transformed.y += sin(tt * 2.9 + a * 4.0) * ${(s*.4).toFixed(3)} * w;
  }`;return n.onBeforeCompile=a=>{a.uniforms.uTime=e,a.vertexShader=`uniform float uTime;
`+a.vertexShader.replace("#include <begin_vertex>",o)},n.customProgramCacheKey=()=>t+i+s+r,n}function vx(n){let e=new Oe;e.name="warden";let t=new Oe;t.scale.setScalar(px),e.add(t);let i=new Oe;t.add(i);let s=n("warden_body");s.position.y=na,i.add(s);let r={value:0};s.traverse(p=>{p.isMesh&&(p.material=yh(p.material.clone(),r,"warden-flow"))});let o=n("warden_halo");o.position.set(0,na+3.15,-.38),i.add(o);let a=mT.map((p,g)=>{let v=new Oe;v.scale.setScalar(px),e.add(v);let S=new Oe;v.add(S);let b={value:0},A=yh(new ht({color:xx,transparent:!0,opacity:.24-g*.065,depthWrite:!1}),b,"warden-ghost");return s.traverse(w=>{if(w.isMesh){let _=new ze(w.geometry,A);_.position.y=na,_.renderOrder=-1,S.add(_)}}),{g:v,inner:S,u:b,mat:A,lag:p}}),l=[];for(let p of[-1,1]){let g=new Oe;i.add(g);let v=[];for(let w=0;w<4;w++){let _=n("warden_link");_.scale.setScalar(.85),g.add(_),v.push(_)}let S=new Oe;g.add(S);let b=n("warden_lantern");b.scale.setScalar(1.25),S.add(b);let A=n("warden_link");A.scale.setScalar(.55),A.position.set(0,-1.45,0),A.rotateY(Math.PI/2),S.add(A),l.push({s:p,links:v,pivot:S,lantern:b})}let c=[];e.traverse(p=>{!p.isMesh||!p.material.emissive||!p.material.emissive.getHex()||(p.material=p.material.clone(),c.push(p.material))});let u=new ze(new bi(1.4,20),new ht({color:919574,transparent:!0,opacity:.45,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.03,e.add(u);let h=new I(0,1,0),d=new I,f=new Ir(new I,new I,new I),m=(p,g,v)=>{p.position.set(v.x,v.y,v.z),g.rotation.set(v.pitch,v.turn,v.lean+v.tilt),g.scale.set(1/Math.sqrt(v.breath),v.breath,1/Math.sqrt(v.breath))},y={root:e,rig:t,body:s,halo:o,sides:l,glows:c,realm:0,setRealm(p){y.realm=p;for(let g of c)g.color.copy(p?gx:mx),g.emissive.copy(p?gx:mx);for(let g of a)g.mat.color.copy(p?pT:xx)},tick(p){let g=yx(p);r.value=p,m(t,i,g),o.rotation.z=p*.45+g.tw*1.4,o.rotation.x=Math.sin(p*.8)*.14,o.scale.setScalar(1+Math.sin(p*2)*.04+g.tw*.08);for(let S of a)m(S.g,S.inner,yx(p-S.lag)),S.u.value=p-S.lag;for(let{s:S,links:b,pivot:A,lantern:w}of l){let _=Math.sin(p*1.3+S*.9-.4)*.22;f.v0.set(S*.7,na+2.75,-.1),f.v1.set(S*(1.7+_*.4),na+1.7+Math.sin(p*1.9+S)*.12,.05+_),f.v2.set(S*(2.35+Math.sin(p*.8+S)*.08),na+2+Math.sin(p*1.3+S*2)*.1,.15+_*.6),b.forEach((T,U)=>{let P=(U+.5)/b.length;T.position.copy(f.getPoint(P)),T.quaternion.setFromUnitVectors(h,f.getTangent(P,d).normalize()),U%2&&T.rotateY(Math.PI/2)}),A.position.copy(f.v2),A.rotation.set(Math.sin(p*1.5+S)*.18,0,Math.sin(p*1.2+S*.7-.6)*.22*S),w.rotation.y=Math.sin(p*.9+S)*.5}let v=.85+.15*Math.sin(p*13)*Math.sin(p*7.3)+g.tw*.6;for(let S of c)S.emissiveIntensity=v}};return y.setRealm(0),y.tick(0),y}var Mx=Math.PI*2,Ri=n=>Math.sin(n)*.6+Math.sin(n*2.3+1.7)*.3+Math.sin(n*5.1+.4)*.1;function $i(n,e=.5){let t=new ze(new bi(e,16),new ht({color:919574,transparent:!0,opacity:.4,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.02,n.add(t),t}function ia(n,e,t,i){return n.traverse(s=>{s.isMesh&&(s.material=yh(s.material.clone(),e,t,i))}),n}function Dl(n){let e=[];return n.traverse(t=>{t.isMesh&&t.material.emissive?.getHex()&&(t.material=t.material.clone(),e.push(t.material))}),e}var bx=(n,e,t,i)=>(n.position.set(e,t,i),n),nn=(n,e,t,i)=>{let s=new Oe;return s.position.set(e,t,i),n.add(s),s},Ul={mourner:{name:"Veiled Mourner",level:"last_ward",role:"slow, tanky chaser",build(n,e=0){let t=new Oe,i=nn(t,0,0,0),s={value:0},r=ia(n("spirit_mourner"),s,"sp-mourner",{weight:"clamp((1.0 - position.y) / 1.0, 0.0, 1.0)",amp:.08});i.add(r);let o=nn(i,0,1.6,.04);return o.add(ia(n("spirit_mourner_veil"),s,"sp-veil",{weight:"clamp(-position.y / 1.5, 0.0, 1.0)",amp:.12,speed:.8})),$i(t,.45),{root:t,tick(a){a+=e,s.value=a,i.position.y=.12+Math.sin(a*1.1)*.06,i.rotation.z=Math.sin(a*.6)*.05,i.rotation.x=.06+Math.sin(a*.4)*.04,o.rotation.x=-.15-Math.sin(a*1.4)*.1,o.rotation.z=Ri(a*.7)*.06}}}},moth:{name:"Lantern Moth",level:"old_churchyard",role:"fast, erratic flier",build(n,e=0){let t=new Oe,i=nn(t,0,0,0);i.add(n("spirit_moth"));let s=[-1,1].map(o=>{let a=nn(i,o*.1,.76,.08),l=n("spirit_moth_wing");return l.scale.x=o,a.add(l),{p:a,s:o}}),r=Dl(i);return $i(t,.35),{root:t,tick(o){o+=e;let a=Math.sin(o*16+Math.sin(o*3)*.8);for(let{p:l,s:c}of s)l.rotation.z=c*(.15+a*.65),l.rotation.y=c*Math.sin(o*16)*.12;i.position.set(Ri(o*1.3)*.2,.35+Math.abs(Math.sin(o*4))*.12+Ri(o*2.1)*.06,Ri(o*1.1+4)*.15),i.rotation.set(.15+a*.05,Ri(o*.9)*.6,Ri(o*1.7)*.15);for(let l of r)l.emissiveIntensity=.8+.4*(.5+.5*Math.sin(o*5))}}}},bell:{name:"Bell Imp",level:"bell_tower",role:"rings out shockwave pulses",build(n,e=0){let t=new Oe,i=nn(t,0,1.7,0),s=bx(n("spirit_bell"),0,-1.28,0);i.add(s);let r=nn(i,0,-.35,0);return r.add(n("spirit_bell_tongue")),$i(t,.45),{root:t,tick(o){o+=e;let a=Math.sin(o*2.4)*.35*(.6+.4*Math.sin(o*.5));i.rotation.z=a,i.rotation.x=Math.sin(o*1.3)*.08,r.rotation.z=-Math.sin(o*2.4-.9)*.45,i.position.y=1.7+Math.sin(o*1.2)*.08}}}},digger:{name:"Gravedigger Shade",level:"hollow_grounds",role:"leaves lingering pits",build(n,e=0){let t=new Oe,i={value:0},s=nn(t,0,.05,0);s.add(ia(n("spirit_digger"),i,"sp-digger",{weight:"clamp((0.6 - position.y) / 0.6, 0.0, 1.0)",amp:.07}));let r=nn(s,0,.82,.5);return r.add(n("spirit_digger_shovel")),$i(t,.5),{root:t,tick(o){o+=e,i.value=o;let a=o/2.4%1,l=a<.45?a/.45:0,c=a>=.45&&a<.6?(a-.45)/.15:a>=.6?1:0,u=a>=.7?Math.sin((a-.7)/.3*Math.PI):0;r.rotation.x=-.9*l*(1-c)+.55*c-1*u,s.rotation.x=.1+.25*c-.2*u,s.position.y=.05+Math.sin(o*1.5)*.03-.06*c}}}},wick:{name:"Wickling",level:"old_churchyard",role:"leaves a short burning trail",build(n,e=0){let t=new Oe,i=nn(t,0,0,0);i.add(n("spirit_wick"));let s=nn(i,0,.92,0);s.add(n("spirit_wick_flame"));let r=Dl(s);return $i(t,.4),{root:t,tick(o){o+=e,i.rotation.z=Math.sin(o*1.1)*.08,i.scale.set(1+Math.sin(o*1.6)*.03,1-Math.sin(o*1.6)*.03,1),s.rotation.z=-i.rotation.z*1.6+Ri(o*6)*.12,s.rotation.x=Ri(o*5+2)*.1,s.scale.set(1+Ri(o*9)*.08,1+Ri(o*7+1)*.2,1);for(let a of r)a.emissiveIntensity=.85+Ri(o*11)*.2}}}},choir:{name:"Ossuary Choir",level:"catacombs",role:"skulls orbit as a moving shield",build(n,e=0){let t=new Oe,i=nn(t,0,0,0);i.add(n("spirit_choir_core"));let s=[0,1,2].map(a=>{let l=n("spirit_choir_skull");return t.add(l),l}),r=Dl(t);$i(t,.5);let o=!1;return{root:t,shatter(){o=!0;for(let a of s)a.visible=!1},tick(a){a+=e,i.position.y=Math.sin(a*1.4)*.06,i.scale.setScalar((1+Math.sin(a*3)*.06)*(o?1.15:1)),s.forEach((l,c)=>{let u=a*1.3+c*Mx/3;l.position.set(Math.cos(u)*.48,.78+Math.sin(a*2.2+c*2)*.12,Math.sin(u)*.48),l.rotation.set(Math.sin(a*6+c)*.15,-u+Math.PI/2,Math.sin(a*3+c)*.1)});for(let l of r)l.emissiveIntensity=.8+.3*Math.sin(a*3)}}}},raven:{name:"Raven Wraith",level:"bell_tower",role:"swoops in straight lines",build(n,e=0){let t=new Oe,i={value:0},s=nn(t,0,0,0);s.add(ia(n("spirit_raven"),i,"sp-raven",{weight:"clamp((0.55 - position.y) / 0.55, 0.0, 1.0)",amp:.08}));let r=[-1,1].map(o=>{let a=nn(s,o*.15,.78,.02),l=n("spirit_raven_wing");return l.scale.x=o,a.add(l),{p:a,s:o}});return $i(t,.45),{root:t,tick(o){o+=e,i.value=o;let a=Math.sin(o*.9)>-.2?1:.15,l=Math.sin(o*9)*a;for(let{p:h,s:d}of r)h.rotation.z=d*(-.1+l*.7+(1-a)*-.25);s.position.y=.3+l*.06+Math.sin(o*.9)*.08;let c=Math.floor(o/1.7),u=Math.sin(c*12.9898)*.6;s.rotation.y+=(u-s.rotation.y)*.25,s.rotation.x=.1-l*.05}}}},bloom:{name:"Bloom Wraith",level:"forgotten_gardens",role:"roots in place, sprays pollen shots",build(n,e=0){let t=new Oe,i=nn(t,0,0,0);i.add(n("spirit_bloom"));let s=nn(i,0,1.05,.08),r=[0,1,2,3,4].map(a=>{let l=nn(s,0,0,0);l.rotation.y=a*Mx/5;let c=nn(l,0,-.04,.1);return c.add(n("spirit_bloom_petal")),c}),o=Dl(i);return $i(t,.5),{root:t,tick(a){a+=e;let l=.5+.5*Math.sin(a*1.2);for(let c of r)c.rotation.x=.35+l*.95;i.rotation.z=Math.sin(a*.8)*.07,i.rotation.x=Math.sin(a*.6+1)*.05,s.rotation.y=a*.3;for(let c of o)c.emissiveIntensity=.7+l*.5}}}},shackled:{name:"Shackled",level:"hollow_grounds",role:"slow, but its ball sweeps an arc",build(n,e=0){let t=new Oe,i={value:0},s=nn(t,0,0,0);s.add(ia(n("spirit_shackled"),i,"sp-shackled",{weight:"clamp((0.7 - position.y) / 0.7, 0.0, 1.0)",amp:.09}));let r=n("spirit_shackle_ball");t.add(r);let o=Array.from({length:9},()=>{let h=n("spirit_shackle_link");return h.scale.setScalar(1.6),t.add(h),h});$i(t,.5);let a=new Ir(new I,new I,new I),l=new I(0,1,0),c=new I,u=new I;return{root:t,tick(h){h+=e,i.value=h;let d=h/2.6%1,f=Math.sin(Math.min(1,d/.6)*Math.PI),m=d>.55&&d<.75?(d-.55)/.2:d>=.75?1:0;s.rotation.x=.05+f*.3,s.position.z=f*.18,s.position.y=.1+Math.sin(h*1.3)*.04,r.position.set(1.15,0,-1.05+m*.3),r.rotation.x=m*1.2,u.set(.55,.64,.2).applyEuler(s.rotation).add(s.position);let y=new I(1.15,.42,-1.05+m*.3);a.v0.copy(u),a.v2.copy(y),a.v1.copy(u).lerp(y,.5).setY(.15+f*.3),o.forEach((p,g)=>{let v=(g+.5)/o.length;p.position.copy(a.getPoint(v)),p.quaternion.setFromUnitVectors(l,a.getTangent(v,c).normalize()),g%2&&p.rotateY(Math.PI/2)})}}}},mask:{name:"Hollow Mask",level:"last_ward",role:"blinks between realms",build(n,e=0){let t=new Oe,i={value:0},s=nn(t,0,1.1,0);s.add(n("spirit_mask"));for(let[o,a,l,c,u]of[[-.22,.12,-.5,-.5,.95],[.22,.12,.5,.5,.95],[-.12,-.15,-.2,-.22,1.1],[.12,-.15,.2,.22,1.05],[0,.25,0,0,.8]]){let h=ia(n("spirit_mask_ribbon"),i,"sp-ribbon",{weight:"clamp(-position.y, 0.0, 1.0)",amp:.16,speed:.9});h.scale.setScalar(u),h.rotation.set(-.9,l,c),s.add(bx(h,o,a,-.1))}let r=Dl(s);return $i(t,.35),{root:t,tick(o){o+=e,i.value=o,s.position.y=1.1+Math.sin(o*1)*.1;let a=Math.floor(o/2.3),l=Math.sin(a*78.233)*.4,c=o/2.3%1;s.rotation.z=c<.12?l*c/.12:l*Math.max(0,1-(c-.12)/.6),s.rotation.y=Math.sin(o*.5)*.35,s.rotation.x=Math.sin(o*.7)*.08;for(let u of r)u.emissiveIntensity=.7+.5*Math.max(0,Math.sin(o*2))}}}}},OC=Object.keys(Ul);var Sx=1234567,Ze=()=>(Sx=Sx*16807%2147483647)/2147483647,Ci=n=>Math.sin(n)*.6+Math.sin(n*2.3+1.7)*.3+Math.sin(n*5.1+.4)*.1,Ol=n=>{for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0},_T=(()=>{let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),i=t.createImageData(64,64);for(let r=0;r<64;r++)for(let o=0;o<64;o++){let a=Math.hypot(o+.5-32,r+.5-32)/32,l=a>=1?0:Math.round(Math.pow(1-a,1.8)*5)/5;i.data.set([255,255,255,l*255],(r*64+o)*4)}t.putImageData(i,0,0);let s=new Tn(e);return s.magFilter=s.minFilter=st,s})(),Ex={candle:n=>.86+Ci(n*11)*.12+Ci(n*23)*.04,lamp:n=>.93+Ci(n*6)*.05-(Math.sin(n*.37)>.97?.25:0),brazier:n=>.82+Ci(n*5)*.16+Ci(n*13)*.08,magic:n=>.85+Math.sin(n*1.3)*.15,window:n=>.97+(Math.sin(n*.21)>.985?-.3*Math.abs(Math.sin(n*40)):0),steady:()=>1},Tx=new Set(["candle","lamp","brazier","window"]),Sp=[],Ep=[];function Vt(n,e,t,i,{color:s=16758875,size:r=1.2,kind:o="candle",opacity:a=.55}={}){let l=new Fo({map:_T,color:s,transparent:!0,opacity:a,blending:Ws,depthWrite:!1}),c=new Qa(l);return c.position.set(e,t,i),c.scale.setScalar(r),c.renderOrder=6,n.add(c),Sp.push({s:c,kind:o,size:r,opacity:a,phase:Ze()*100}),c}function Tp(n,e="lamp"){return Ep.push({L:n,kind:e,base:n.intensity,phase:Ze()*100}),n}var Mh=1400,Ss=new Bt,vh=new Float32Array(Mh*3),Fl=new Float32Array(Mh*4),Ax=new Float32Array(Mh);Ss.setAttribute("position",new Pt(vh,3));Ss.setAttribute("color",new Pt(Fl,4));Ss.setAttribute("size",new Pt(Ax,1));Ss.setDrawRange(0,0);var yT=new $t({vertexShader:"attribute float size; attribute vec4 color; varying vec4 vC; void main(){ vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_PointSize = size; }",fragmentShader:"varying vec4 vC; void main(){ gl_FragColor = vec4(vC.rgb * vC.a * 1.6, vC.a); }",transparent:!0,depthWrite:!1,blending:Ws}),wp=new hs(Ss,yT);wp.frustumCulled=!1;wp.renderOrder=7;$e.add(wp);var bs=[],An=n=>new ge(n).convertSRGBToLinear(),vT={ember(n,e,t){n.vx+=Ci(t*3+n.k)*e*.8,n.vz+=Ci(t*2.7+n.k*2)*e*.8,n.vy-=e*.15},firefly(n,e,t){n.x=n.ox+Math.sin(t*.6+n.k)*n.r,n.z=n.oz+Math.sin(t*.47+n.k*1.7)*n.r*.8,n.y=n.oy+Math.sin(t*1.1+n.k)*.25,n.blink=.5+.5*Math.sin(t*2.5+n.k*3)},petal(n,e,t){n.vx=Math.sin(t*1.7+n.k)*.35+n.wind,n.vz=Math.cos(t*1.3+n.k)*.2},mote(n,e,t){n.vx=Ci(t*.4+n.k)*.08,n.vz=Ci(t*.35+n.k*1.3)*.08},ash(n,e,t){n.vx=n.wind+Ci(t*1.5+n.k)*.4,n.vz=Ci(t*1.2+n.k)*.3},swirl(n,e,t){n.a+=e*n.w,n.h+=e*n.rise;let i=n.life/n.max,s=n.r*(n.inward?i:1);n.x=n.ox+Math.cos(n.a)*s*n.sx,n.z=n.oz+Math.sin(n.a)*s*n.sz,n.y=n.oy+n.h,n.vx=n.vy=n.vz=0},spark(n,e){n.vy-=e*3}};function js(n,e){bs.length>=Mh||bs.push({type:n,vx:0,vy:0,vz:0,k:Ze()*100,blink:1,sz:1,...e,max:e.life})}var Ap=[];function Gr(n,e,t){let i={parent:n,rate:e,fn:t,acc:Ze()};return Ap.push(i),i}var Vr=(n,e,t,i,{rate:s=3,color:r=16758875,spread:o=.15,up:a=.6,life:l=1.6}={})=>Gr(n,s,()=>js("ember",{x:e+(Ze()-.5)*o,y:t,z:i+(Ze()-.5)*o,vy:a*(.6+Ze()*.6),life:l*(.6+Ze()*.6),c0:An(r),c1:An(9321022),sz:Ze()<.3?2:1})),Rp=(n,e,t,{n:i=10,area:s=[10,8],color:r=16769690,y:o=.9}={})=>{for(let a=0;a<i;a++)js("firefly",{parent:n,ox:e+(Ze()-.5)*s[0],oz:t+(Ze()-.5)*s[1],oy:o+Ze()*1.2,r:.6+Ze()*1.2,life:1e9,c0:An(r),c1:An(r),sz:2})},Cp=(n,{rate:e=3,colors:t=[14256836,12868218,16175525],area:i=[24,18],wind:s=.25}={})=>Gr(n,e,()=>{let r=t[Math.floor(Ze()*t.length)];js("petal",{x:(Ze()-.5)*i[0],y:4+Ze()*2,z:(Ze()-.5)*i[1]-1,vy:-.45-Ze()*.2,wind:s*(.5+Ze()),life:10,c0:An(r),c1:An(r),sz:Ze()<.4?2:1})}),Ip=(n,{rate:e=4,color:t=16243632,area:i=[22,18],y:s=[.3,3],life:r=6}={})=>Gr(n,e,()=>js("mote",{x:(Ze()-.5)*i[0],y:s[0]+Ze()*(s[1]-s[0]),z:(Ze()-.5)*i[1]-1,vy:.03,life:r,c0:An(t),c1:An(t),sz:1,fade:!0})),Rx=(n,{rate:e=8,wind:t=1.4,colors:i=[10261416,16751164]}={})=>Gr(n,e,()=>{let s=i[Ze()<.8?0:1];js("ash",{x:-14+Ze()*4,y:.5+Ze()*4,z:(Ze()-.5)*20-1,vy:-.05,wind:t*(.7+Ze()*.6),life:14,c0:An(s),c1:An(s),sz:Ze()<.3?2:1,fade:!0})}),Qs=(n,e,t,i,{rate:s=6,color:r=12165608,r:o=.8,rise:a=.5,w:l=2.5,life:c=2.2,sx:u=1,sz:h=1,inward:d=!1,color2:f}={})=>Gr(n,s,()=>js("swirl",{ox:e,oy:t,oz:i,a:Ze()*Math.PI*2,h:0,r:o*(.7+Ze()*.5),rise:a*(.6+Ze()*.8),w:l*(Ze()<.5?1:1.15),sx:u,sz:h,inward:d,life:c,c0:An(r),c1:An(f??r),sz:Ze()<.35?2:1,x:e,y:t,z:i})),ra=(n,e,t,i,{n:s=6,color:r=16769690}={})=>{for(let o=0;o<s;o++){let a=Ze()*6.28;js("spark",{x:e,y:t,z:i,vx:Math.cos(a)*1.2,vy:1+Ze(),vz:Math.sin(a)*1.2,life:.5+Ze()*.4,c0:An(r),c1:An(14245934),sz:1})}},Pp=(n,e,t,{color:i=16758875,color2:s=9321022,up:r=.5,life:o=.9}={})=>js("ember",{x:n+(Ze()-.5)*.12,y:e,z:t+(Ze()-.5)*.12,vy:r*(.5+Ze()),life:o*(.6+Ze()*.6),c0:An(i),c1:An(s),sz:1}),Lp=Ze,wx=0,sa=0;function Cx(n,e=0){let t=Math.min(.1,Math.max(0,n-wx));wx=n,sa+=(e-sa)*Math.min(1,t*7);for(let r of Sp){if(!Ol(r.s))continue;let o=Ex[r.kind](n+r.phase),a=Tx.has(r.kind);r.s.material.opacity=r.opacity*o*(a?1-sa*.55:1+sa*.3),r.s.scale.setScalar(r.size*(.94+(o-.9)*.6))}for(let r of Ep)Ol(r.L)&&(r.L.intensity=r.base*Ex[r.kind](n+r.phase)*(Tx.has(r.kind)?1-sa*.55:1+sa*.25));for(let r of Ap)if(Ol(r.parent))for(r.acc+=r.rate*t;r.acc>=1;)r.acc-=1,r.fn();let i=0;for(let r=0;r<bs.length;r++){let o=bs[r];if(o.parent&&!Ol(o.parent)){bs[i++]=o;continue}o.life-=t,!(o.life<=0)&&(vT[o.type](o,t,n),o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.y<.03&&(o.y=.03,o.vy=0),bs[i++]=o)}bs.length=i;let s=0;for(let r of bs){if(r.parent&&!Ol(r.parent))continue;let o=r.life/r.max,a=r.fade?Math.min(1,Math.min(o,1-o)*4):Math.min(1,o*2.5);a*=r.blink,vh[s*3]=r.x,vh[s*3+1]=r.y,vh[s*3+2]=r.z;let l=r.c0,c=r.c1,u=1-o;Fl[s*4]=l.r+(c.r-l.r)*u,Fl[s*4+1]=l.g+(c.g-l.g)*u,Fl[s*4+2]=l.b+(c.b-l.b)*u,Fl[s*4+3]=a,Ax[s]=r.sz+1,s++}Ss.setDrawRange(0,s),Ss.attributes.position.needsUpdate=Ss.attributes.color.needsUpdate=Ss.attributes.size.needsUpdate=!0}var Ix=()=>({particles:bs.length,glows:Sp.length,lights:Ep.length,emitters:Ap.length});var x={mode:tx,state:"title",realm:0,realmVis:0,hp:D.player.maxHp,score:0,combo:0,comboTimer:0,best:0,pos:new se(0,6.5),facing:new se(0,-1),timeLeft:Cl,elapsed:0,dashCd:0,dashRemaining:0,dashStart:new se,dashEnd:new se,dashHit:new Set,invuln:0,spawnClock:0,hitStop:0,shake:0,flash:0,hurt:0,ripple:-1,moving:0,step:0,banished:0,maxCombo:0,seed:0,dashId:0,notes:new Set,crossed:!1,touchCross:!1},Ue={enemies:[],projectiles:[]},$n=new Set,Bn={x:0,y:0,active:!1,mag:1},Px=()=>x.state==="paused"||x.state==="tutorial"||x.state==="relic"||x.state==="bag";var di=(n,e,t)=>({kind:"wanderer",realm:n,pos:[e,t]}),Lx=(n,e,t)=>({kind:"wisp",realm:n,pos:[e,t]}),Wr=Object.freeze({id:"old_churchyard",name:"The Old Churchyard",rounds:[{spawns:[di(1,-.4,3.4),di(1,.4,2.1),di(1,-.4,.8)]},{spawns:[di(0,-6,-4),di(0,-6,-2.5),di(0,-6,-1),di(1,6,-3),di(1,6,-1.5)]},{spawns:[di(0,-5,-5),di(0,5,-5),di(1,-4,2),di(1,4,2),Lx(0,-7,-6),Lx(1,7,-6)]}]});var Te=(n,e,t)=>({kind:"wanderer",realm:n,pos:[e,t]}),fi=(n,e,t)=>({kind:"wisp",realm:n,pos:[e,t]}),Ii=(n,e,t)=>({kind:"moth",realm:n,pos:[e,t]}),Es=(n,e,t)=>({kind:"bloom",realm:n,pos:[e,t]}),Ts=(n,e,t)=>({kind:"choir",realm:n,pos:[e,t]}),MT=[Te(1,8,-1.2),Te(1,8.4,0),Te(1,8,1.2),Te(0,-4.6,5),Te(0,-4.6,-5),Te(0,5.5,3.2),Te(1,5.5,-3.2)],kl=[-6.6,6.6],er=(n,e,t,i)=>Array.from({length:n},(s,r)=>Te(e,t,i+(r-(n-1)/2)*1.3)),pi=[{id:"old_churchyard",name:"The Old Churchyard",kind:"rounds",relic:!0,start:[0,6.5],facing:[0,-1],exit:[0,-6.6],rounds:[...Wr.rounds.slice(0,2),{spawns:[...Wr.rounds[2].spawns,Ii(0,0,-6),Ii(1,0,-4.4)]},{spawns:[Te(0,-6,-4),Te(0,-6,-1.5),Te(0,-6,1),Te(1,6,-4),Te(1,6,-1.5),Te(1,6,1),fi(0,-7,-6),fi(1,7,-6),Ii(0,0,-6.5),Ii(1,-3,-6.5)]},{spawns:[Te(0,-7,-5),Te(0,7,-5),Te(0,-7,3),Te(0,7,3),Te(1,-3.5,-6),Te(1,3.5,-6),Te(1,-3.5,4),Te(1,3.5,4),fi(0,0,-6.5),fi(1,0,-4.5),fi(0,-8,0),fi(1,8,0),Ii(0,-5,-6),Ii(1,5,-6),Ii(0,5,5)]}]},{id:"forgotten_gardens",name:"Forgotten Gardens",kind:"rounds",relic:!0,portals:!0,portalsNS:kl,solids:[{x:0,z:0,r:1.25}],start:[-8.2,0],facing:[-1,0],exit:[0,-6.6],rounds:[{spawns:MT},{spawns:[...er(5,0,-5,0),...er(5,1,5,0),Es(1,0,-4.6)]},{spawns:[...er(5,0,-4,-1),...er(5,1,4,1),fi(0,-2,5),fi(1,2,-5),Es(0,-3.4,-4.8),Es(1,3.4,4.8)]},{spawns:[...er(4,0,-5,-1),...er(4,1,5,1),Es(0,3.4,-4.8),Es(1,-3.4,4.8),Ii(0,-2,5),Ii(1,2,-5),fi(0,-2,-5),fi(1,2,5)]},{spawns:[...er(5,0,-4,0),...er(5,1,4,0),Es(0,0,-4.6),Es(1,0,4.6),Es(0,-3.4,4.8),Es(1,3.4,-4.8),Ii(0,-6,3),Ii(1,6,-3),fi(0,-2,5),fi(1,2,-5)]}]},{id:"catacombs",name:"Catacombs",kind:"rounds",relic:!0,walls:!0,start:[0,6.2],facing:[0,-1],exit:[0,-6.6],rounds:[{spawns:[Te(1,0,-5.5),Te(1,-1.2,-4.2),Te(1,1.2,-4.2),Te(0,-7,2),Te(0,7,2)]},{spawns:[Te(1,-7,-5),Te(1,-7,0),Te(1,7,-5),Te(1,7,0),Te(0,-7,4),Te(0,7,4),Te(0,0,5.5),Te(0,0,-5.5),Ts(1,0,-3)]},{spawns:[Te(0,-7,5),Te(0,-7,1),Te(0,7,5),Te(0,7,1),Te(1,-7,-5),Te(1,-7,-1),Te(1,7,-5),Te(1,7,-1),Te(0,0,0),Te(1,1.5,0),Ts(1,0,-4.2),Ts(0,0,3.4)]},{spawns:[Te(1,-7,-5),Te(1,-7,0),Te(1,7,-5),Te(1,7,0),Te(0,-7,4),Te(0,7,4),Te(0,0,5.5),Te(1,0,-5.5),Ts(1,0,-3),Ts(0,0,3.4)]},{spawns:[Te(0,-7,5),Te(0,-7,1),Te(0,7,5),Te(0,7,1),Te(1,-7,-5),Te(1,-7,-1),Te(1,7,-5),Te(1,7,-1),Te(0,0,0),Te(1,1.5,0),Ts(1,0,-4.2),Ts(0,0,3.4),Ts(0,-7,-1),Ts(1,7,1),Te(0,-5,-6),Te(1,5,6)]}]},{id:"last_ward",name:"The Last Ward",kind:"wards",relic:!0,start:[0,6.2],facing:[0,-1],exit:[0,-6.6]},{id:"hollow_grounds",name:"Hollow Grounds",kind:"souls",relic:!0,start:[0,5.5],facing:[0,-1],exit:[0,0]},{id:"bell_tower",name:"The Bell Tower",kind:"boss",relic:!1,start:[0,5.8],facing:[0,-1],exit:[0,0]}],oa=[{x:-4,z:-3.5,w:.6,h:4.8,realm:0},{x:-4,z:3.5,w:.6,h:4.8,realm:1},{x:4,z:-3.5,w:.6,h:4.8,realm:1},{x:4,z:3.5,w:.6,h:4.8,realm:0},{x:0,z:-2,w:3.6,h:.6,realm:1},{x:0,z:2,w:3.6,h:.6,realm:0}],Xr=[[-4.5,-3.5],[4.5,-3.5],[-4.5,3.5],[4.5,3.5]];var Kn={old_churchyard:Yi},Yr=n=>(Kn[n]||(Kn[n]=new Oe,Kn[n].name="set:"+n,$e.add(Kn[n])),Kn[n]);function bT(){let n=Yr("old_churchyard");K("gate",0,9.6,0,1,n);for(let e of[-1,1])K("statue_mourner",e*3.5,-10.5,e*-.25,1,n),K("candles",e*2.75,-10.05,e*.6,1,n),K("urn",e*3.7,10.7,0,1,n),K("urn",e*10.7,-8.7,e*.4,.9,n);K("wall_ruin",-12.75,-3.6,Math.PI/2,1,n),K("wall_ruin",12.75,1.4,-Math.PI/2+.08,1,n),K("wall_ruin",-8.1,-11.4,.05,1,n),K("wall_ruin",8.4,-11.3,Math.PI-.1,1,n),K("rubble",-12.8,-.6,.4,1,n),K("rubble",12.8,4.3,2.2,1,n),K("rubble",-6,-11.7,1.1,.9,n),K("rubble",6.2,11.1,-.7,.9,n);for(let[e,t,i]of[[-8.7,-4.7,.3],[9.3,2.7,1.2],[-9.1,6.5,2],[7.7,-7.9,.8]])K("candles",e,t,i,1,n)}function zl(n,e=32,t=-1){let i=new ze(new Qt(e,e),new ai({map:n,gradientMap:Ks}));return i.rotation.x=-Math.PI/2,i.position.z=t,i.receiveShadow=!0,i}function bh(n,e,t,i,s,r,{skip:o,skipPost:a,scale:l=1}={}){let c=Math.hypot(s-t,r-i),u=Math.round(c/3.2),h=Math.atan2(-(r-i),s-t);for(let d=0;d<=u;d++){let f=d/u,m=t+(s-t)*f,y=i+(r-i)*f;if((!a||!a(m,y))&&K("pillar",m,y,0,1,n),d<u){let p=m+(s-t)/u/2,g=y+(r-i)/u/2;(!o||!o(p,g))&&K(e,p,g,h,c/u/3.2*l,n)}}}function ST(){let n=Yr("forgotten_gardens");n.add(zl(ET()));let e=11.6,t=9.6,i=8,s=kl,r=c=>s.some(u=>Math.abs(c-u)<3.4),o={skip:(c,u)=>Math.abs(u)<3.3,skipPost:(c,u)=>Math.abs(u)<3.3};bh(n,"balustrade",-e,-t,e,-t,{skip:c=>Math.abs(c)<2.6||r(c),skipPost:c=>r(c)}),bh(n,"balustrade",-e,t,e,t,{skip:c=>Math.abs(c)<1.7||r(c),skipPost:c=>r(c)}),bh(n,"balustrade",-e,-t,-e,t,o),bh(n,"balustrade",e,-t,e,t,o),K("portal_arch",-10.85,0,Math.PI/2,1,n),K("portal_arch",10.85,0,-Math.PI/2,1,n);for(let c of[-1,1]){let u=new Rt(10189823,9,6,1.6);u.position.set(c*10.2,1.6,0),n.add(u),n.add(Np(c*10.25,0,!1))}for(let c of s){K("portal_arch",c,-i-.65,0,1,n),K("portal_arch",c,i+.65,Math.PI,1,n).traverse(d=>{if(!d.isMesh)return;d.material=d.material.clone();let f=d.material.emissive&&d.material.emissive.getHex();d.material.transparent=!0,d.material.opacity=f?.35:.55,d.material.depthWrite=!1}),n.add(Np(c,-i,!0)),n.add(Np(c,i,!0));let h=new Rt(10189823,8,6,1.6);h.position.set(c,1.6,-i+.3),n.add(h)}K("conservatory",0,-13.1,0,.9,n);let a=new Rt(Ne.amber,14,9,1.6);a.position.set(0,2.2,-10.4),n.add(a),K("fountain",0,0,.4,1,n);let l=new Rt(5234888,6,5,1.6);l.position.set(0,2.4,.6),n.add(l),K("gate",0,t,0,1,n);for(let c of[-1,1]){for(let[u,h,d,f]of[[c*2.4,t+.2,5234888,1.1],[c*11,-8.6,9403647,1.3],[c*11,8.7,5234888,1.3],[c*12.7,-1*c,9403647,1.1]]){K("glowbloom",u,h,u*.7,f,n);let m=new Rt(d,11,7,1.5);m.position.set(u,1.5,h),n.add(m)}K("weeping_angel",c*3.3,10.5,c*-.25,1,n),K("bench",c*2.6,-10.9,c*-.5,.9,n),K("urn",c*2.75,-9.95,0,.9,n),K("flowerbed",c*1.6,-8.8,0,.7,n),K("topiary",c*10.05,-4,0,.9,n),K("topiary",c*10.05,4,0,.9,n),K("hedge",c*12.9,-6.3,Math.PI/2,1,n),K("hedge",c*12.9,6.3,Math.PI/2,1,n),K("rosebush",c*12.8,-10.4,c,1,n),K("rosebush",c*10.4,10.6,c*2,.9,n),K("rosebush",c*13,8.8,c*.5,1,n)}K("willow",-13.7,-9.4,.3,1,n),K("willow",13.9,-8.9,2.1,.95,n),K("rubble",-12.6,-7.6,.5,.8,n),n.visible=!1}var Dx=[];function Np(n,e,t){let r=document.createElement("canvas");r.width=56,r.height=100;let o=r.getContext("2d"),a=o.createImageData(56,100);for(let u=0;u<100;u++)for(let h=0;h<56;h++){let d=(h+.5)/56*2-1,f=(u+.5)/100*2-1,m=Math.hypot(d,f);if(m>1)continue;let y=Math.atan2(f,d),p=(Math.sin(y*2+m*9)+1)/2,g=m>.86?3:p>.62?2:p>.3?1:0,v=[[60,40,120],[125,107,255],[185,161,232],[239,224,255]][g],S=(u*56+h)*4;a.data.set([...v,m>.86?230:150+g*30],S)}o.putImageData(a,0,0);let l=new Tn(r);l.magFilter=l.minFilter=st,l.colorSpace=Mt;let c=new ze(new Qt(2.6,5.6),new ht({map:l,transparent:!0,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.set(n,.04,e),c.renderOrder=1,t&&(c.rotation.z=Math.PI/2),Dx.push(c),c}var Sh=[],Nx=-1;function Ux(n,e=0){Cx(n,e);for(let t of Bx)t.tick(n);qr&&qr.parent?.parent?.visible&&(Bl=Math.max(0,Bl-.012),qr.rotation.x=Math.sin(n*(.9+Bl*4))*(.05+Bl*.3)),Pi&&Pi.root.visible&&Pi.root.parent?.visible&&Pi.tick(n);for(let t of Ox)t.parent?.visible&&(t.scale.set(1+Math.sin(n*7)*.06,1+Math.sin(n*5.3)*.12,1+Math.cos(n*6.1)*.06),t.rotation.y=n*.8);for(let t of Fx)t.node.parent?.visible&&(t.node.position.y=t.y+Math.sin(n*.7+t.p)*.2);for(let t of Th)t.crystal.parent?.parent?.visible&&t.crystal.visible&&(t.crystal.rotation.y=n*1.2+t.i,t.crystal.position.y=t.cy+Math.sin(n*2+t.i)*.08);for(let t of Dx)t.parent?.visible&&(t.material.opacity=.8+.2*Math.sin(n*3));if(e!==Nx&&Sh.length){Nx=e;for(let t of Sh)for(let i of t.mats)i.transparent=!0,i.opacity=t.realm===e?1:.22,i.depthWrite=t.realm===e}}function ET(){let i=document.createElement("canvas");i.width=i.height=384;let s=i.getContext("2d"),r=23,o=()=>(r=r*16807%2147483647)/2147483647,a=384/2,l=384/2+12,c=(m,y)=>[a+m*12,l+y*12];s.fillStyle="#3d5639",s.fillRect(0,0,384,384);for(let m=0;m<9e3;m++){s.fillStyle=["#44613f","#385035","#4b6a43","#3a5a3d","#52704a","#33492f"][Math.floor(o()*6)];let y=Math.floor(o()*384),p=Math.floor(o()*384);s.fillRect(y,p,1,2+Math.floor(o()*2))}let u=(m,y)=>Math.abs(y-.35*Math.sin(m*.45))<.75&&Math.abs(m)<15||Math.abs(m-.25*Math.sin(y*.6))<.65&&y>-10.2&&y<16||kl.some(p=>Math.abs(m-p-.3*Math.sin(y*.5))<.55&&Math.abs(y)<8.6);for(let m=0;m<384;m++)for(let y=0;y<384;y++){let p=(y-a)/12,g=(m-l)/12;u(p,g)&&(s.fillStyle=(y+m)%5?"#4a4336":"#433c31",s.fillRect(y,m,1,1))}for(let m=0;m<26e3;m++){let y=(o()-.5)*32,p=(o()-.5)*32-1;if(!u(y,p))continue;let[g,v]=c(y,p),S=2+Math.floor(o()*3),b=2+Math.floor(o()*2);s.fillStyle="#2f3a2e",s.fillRect(Math.round(g),Math.round(v)+1,S,b),s.fillStyle=["#7a7182","#8a8090","#6c6474","#9a90a0"][Math.floor(o()*4)],s.fillRect(Math.round(g),Math.round(v),S,b)}let h=2.3;for(let m=-h*12;m<=h*12;m++)for(let y=-h*12;y<=h*12;y++){let p=Math.hypot(y,m)/12;if(p>h)continue;let g=Math.atan2(m,y),v=Math.floor(p/.6),S=Math.floor((g/(2*Math.PI)+1)*(6+v*5)+v*.5),b=p/.6%1<.12||((g/(2*Math.PI)+1)*(6+v*5)+v*.5)%1<.08;s.fillStyle=b?"#3a3540":["#7a7182","#857b8c","#6f6778"][(S*7+v)%3],s.fillRect(Math.round(a+y),Math.round(l+m),1,1)}let d=["#c45a7a","#d98ac4","#efe0ff","#ffe29a","#b9a1e8","#f07f95"];for(let m=0;m<70;m++){let y=(o()-.5)*30,p=(o()-.5)*28-1,g=d[Math.floor(o()*d.length)],v=Math.max(Math.abs(y)/10,Math.abs(p+0)/8),S=6+Math.floor((.4+v)*16*o());for(let b=0;b<S;b++){let A=y+(o()-.5)*2.2,w=p+(o()-.5)*1.6;if(u(A,w)||Math.hypot(A,w)<h+.2)continue;let[_,T]=c(A,w);s.fillStyle=g,s.fillRect(Math.round(_),Math.round(T),2,2),s.fillStyle="#2c4029",s.fillRect(Math.round(_)+1,Math.round(T)+2,1,1)}}for(let m=0;m<160;m++)s.fillStyle=["#c45a7a","#d98ac4","#e0a8b8"][Math.floor(o()*3)],s.fillRect(Math.floor(o()*384),Math.floor(o()*384),1,1);let f=new Tn(i);return f.magFilter=f.minFilter=st,f.colorSpace=Mt,f}function TT(){let n=Yr("catacombs");n.add(zl(wT()));let e=11.2,t=9;for(let i=-3;i<=3;i++){let s=i*3.2;i===0?K("crypt_door",0,-t-.25,0,1,n):K("ossuary_wall",s,-t-.1,0,1,n),i<3&&i!==-1&&i!==0&&K("crypt_column",s+1.6,-t+.05,0,1,n)}K("crypt_column",-11.2,-t+.05,0,1,n),K("crypt_column",11.2,-t+.05,0,1,n);for(let i of[-1,1]){for(let s=0;s<6;s++){let r=-t+1.5+s*3;K("ossuary_wall",i*(e+.15),r,-i*Math.PI/2,.94,n),s<5&&K("crypt_column",i*e,r+1.5,0,.9,n)}K("crypt_column",i*e,t,0,.9,n)}for(let i of[-9.6,-6.4,-3.2,3.2,6.4,9.6])K("half_wall",i,t+.1,0,1,n);K("entrance_stairs",0,t-.25,0,1,n);for(let i of[-1,1])K("urn",i*2,t+.3,0,.9,n);for(let i of oa){let s=i.h>i.w,r=s?i.h:i.w,o=s?Math.PI/2:0,a=new Oe;n.add(a);let l=i.realm?"spirit":"living";K("barrier_"+l,i.x,i.z,o,1,a).scale.set((r-.2)/2.4,1,1);for(let h of[-1,1])K("barrier_post_"+l,i.x+(s?0:h*r/2),i.z+(s?h*r/2:0),0,1,a);let u=[];a.traverse(h=>{h.isMesh&&(h.material=h.material.clone(),u.push(h.material))}),Sh.push({node:a,realm:i.realm,mats:u})}for(let i of[-1,1])K("statue_mourner",i*3.1,-8.45,0,.95,n),K("candles",i*2.5,-8,i,1,n),K("sarcophagus",i*8.4,-8.35,Math.PI/2,1,n),K("candles",i*6.9,-8.2,i*2,1,n),K("ritual_banner",i*4.8,-8.75,0,1,n),K("memorial_relief",i*7.9,-8.85,0,.9,n),K("coffin_broken",i*9,8.3,i*1.3,1,n),K("bone_pile",i*10.3,-3.4,i*.8,1,n),K("bone_pile",i*10.3,4.6,i*2.1,.9,n),K("candles",i*10.4,1,i*.3,1,n),K("candles",i*10.2,-6.6,i*1.4,1,n),K("candles",i*6.2,8.4,i*.7,1,n),K("rubble",i*4.6,8.5,i,.8,n);for(let[i,s,r,o,a]of[[0,-7.6,Ne.amber,16,8],[-9.6,-7,Ne.amber,12,7],[9.6,-7,Ne.amber,12,7],[-9.6,6.6,Ne.amber,10,7],[9.6,6.6,Ne.amber,10,7],[0,2,10189823,6,8]]){let l=new Rt(r,o,a,1.6);l.position.set(i,2,s),n.add(l)}n.visible=!1}function wT(){let i=document.createElement("canvas");i.width=i.height=384;let s=i.getContext("2d"),r=41,o=()=>(r=r*16807%2147483647)/2147483647,a=384/2,l=384/2+12;s.fillStyle="#2a2230",s.fillRect(0,0,384,384);for(let f=0;f<3e3;f++)s.fillStyle=["#2f2634","#261f2b","#33293a"][Math.floor(o()*3)],s.fillRect(Math.floor(o()*384),Math.floor(o()*384),3,2);let c=["#5e4b44","#665046","#57463f","#6b5549","#52423d","#604d4a"],u=18,h=25;for(let f=0;f*h<384;f++){let m=-Math.floor(o()*u);for(;m<384;){let y=u+Math.floor(o()*3-1)*5,p=f*h,g=(m+y/2-a)/12,v=(p+h/2-l)/12;Math.abs(g)<=11.3&&Math.abs(v)<=9.2&&(s.fillStyle="#2c2329",s.fillRect(m,p,y,h),s.fillStyle=c[Math.floor(o()*c.length)],s.fillRect(m+1,p+1,y-2,h-2),s.fillStyle="rgba(255,230,190,0.07)",s.fillRect(m+1,p+1,y-2,1),o()<.35&&(s.fillStyle="rgba(30,20,30,0.35)",s.fillRect(m+2+Math.floor(o()*(y-8)),p+4+Math.floor(o()*12),2+Math.floor(o()*5),1))),m+=y}}s.strokeStyle="rgba(154,107,60,0.75)",s.lineWidth=2,s.beginPath(),s.arc(a,l,36,0,Math.PI*2),s.stroke(),s.beginPath(),s.arc(a,l,1.4*12,0,Math.PI*2),s.stroke(),s.fillStyle="rgba(154,107,60,0.55)";for(let f=0;f<8;f++){let m=f*Math.PI/4,y=(f%2?2.2:3.6)*12;s.beginPath(),s.moveTo(a+Math.cos(m)*y,l+Math.sin(m)*y),s.lineTo(a+Math.cos(m+.18)*.5*12,l+Math.sin(m+.18)*.5*12),s.lineTo(a+Math.cos(m-.18)*.5*12,l+Math.sin(m-.18)*.5*12),s.fill()}for(let f=0;f<900;f++)s.fillStyle=["rgba(232,220,192,0.18)","rgba(20,14,22,0.25)"][f%2],s.fillRect(Math.floor(o()*384),Math.floor(o()*384),1,1);let d=new Tn(i);return d.magFilter=d.minFilter=st,d.colorSpace=Mt,d}var Th=[];function Hl(n,e){let t=Th[n];if(t){for(let i in t.states)t.states[i].visible=i===e;t.crystal.visible=e!=="broken",t.light.intensity=e==="intact"?10:e==="damaged"?5:0,t.light.color.set(e==="intact"?Ne.amber:14245934)}}function AT(){let n=Yr("last_ward");n.add(zl(RT()));let e=11.3,t=9.4,i={[-3]:"stained_glass",[-2]:"spawn_alcove",[-1]:"stained_glass",1:"stained_glass",2:"spawn_alcove",3:"stained_glass"};for(let o=-3;o<=3;o++)if(o===0){K("marble_wall",0,-t-1.6,0,1,n);for(let a of[-1,1])K("marble_wall",a*1.6,-t-.3,-a*Math.PI/2,.45,n)}else K(i[o],o*3.2,-t-.1,0,1,n);for(let o of[-1,1])for(let a=0;a<6;a++)K("marble_wall",o*(e+.15),-t+1.55+a*3.1,-o*Math.PI/2,.97,n);let s=t+.2;for(let o=0;o<=7;o++){let a=-e+o*(2*e/7);if(K("marble_post",a,s,0,1,n),o<7){let l=a+e/7;Math.abs(l)>1.7&&K("marble_rail",l,s,0,2*e/7/3.2,n)}}K("marble_stairs",0,s-.3,0,1,n),K("grand_sarcophagus",0,-9.25,0,1,n),Xr.forEach(([o,a],l)=>{let c={intact:K("ward_pillar",o,a,0,1,n),damaged:K("ward_pillar_damaged",o,a,l,1,n),broken:K("ward_pillar_broken",o,a,l*2,1,n)},u=K("ward_crystal",o,a,0,1.25,n),h=2;u.position.y=h;let d=new Rt(Ne.amber,10,6,1.6);d.position.set(o,1.6,a),n.add(d),Th.push({i:l,states:c,crystal:u,light:d,cy:h}),Hl(l,"intact")});for(let o of[-1,1]){K("statue_mourner",o*2.75,-9.9,0,.95,n),K("candelabrum",o*2.4,-7.75,0,1,n),K("statue_mourner",o*10.2,-8.5,-o*.5,.95,n);for(let l of[-4.6,1.6,6.4])K("candelabrum",o*10.45,l,o*Math.PI/2,1,n);for(let l of[-1.5,4])K("ritual_banner",o*10.75,l,-o*Math.PI/2,1,n);K("urn",o*2.3,s+.15,0,.9,n),K("candles",o*9.5,8.6,o,1,n),K("candles",o*5.8,-8.4,o*2,1,n);let a=new Rt(10189823,7,7,1.6);a.position.set(o*6.4,2.6,-8.2),n.add(a)}let r=new Rt(Ne.amber,6,7,1.6);r.position.set(0,2.4,-7.4),n.add(r),n.visible=!1}function RT(){let i=document.createElement("canvas");i.width=i.height=384;let s=i.getContext("2d"),r=57,o=()=>(r=r*16807%2147483647)/2147483647,a=384/2,l=384/2+12;s.fillStyle="#2a2230",s.fillRect(0,0,384,384);let c=14;for(let d=0;d<384;d++)for(let f=0;f<384;f++){let m=(f-a)/12,y=(d-l)/12;if(Math.abs(m)>11.4||Math.abs(y)>9.6)continue;let p=Math.floor((f+d*1.4)/c),g=Math.floor((f-d*1.4)/c),v=p+g&1,S=(f+d*1.4)%c<1||(f-d*1.4+4e3)%c<1;s.fillStyle=S?"#54485f":v?"#7f748c":"#6c617a",s.fillRect(f,d,1,1)}for(let d=0;d<1400;d++)s.fillStyle=["rgba(255,255,255,0.08)","rgba(20,10,30,0.12)"][d%2],s.fillRect(Math.floor(o()*384),Math.floor(o()*384),2,1);let u=Math.hypot(4.5,3.5)*12;s.strokeStyle="#c9a046",s.lineWidth=2;for(let d of[u,24])s.beginPath(),s.ellipse(a,l,d,d,0,0,Math.PI*2),s.stroke();s.lineWidth=1;for(let[d,f]of[[4.5,3.5],[-4.5,3.5],[4.5,-3.5],[-4.5,-3.5]])s.beginPath(),s.moveTo(a+d*.35*12,l+f*.35*12),s.lineTo(a+d*12,l+f*12),s.stroke(),s.fillStyle="#c9a046",s.save(),s.translate(a+d*12,l+f*12),s.rotate(Math.PI/4),s.fillRect(-9,-9,18,18),s.restore(),s.fillStyle="#4a3f55",s.save(),s.translate(a+d*12,l+f*12),s.rotate(Math.PI/4),s.fillRect(-7,-7,14,14),s.restore();for(let d=0;d<4;d++){let f=d*Math.PI/2+Math.PI/4;s.beginPath(),s.moveTo(a+Math.cos(f)*.6*12,l+Math.sin(f)*.6*12),s.lineTo(a+Math.cos(f)*1.8*12,l+Math.sin(f)*1.8*12),s.stroke()}for(let d=0;d<220;d++){let f=(o()-.5)*22.4,m=(o()<.5?-1:1)*(7.6+o()*1.8);s.fillStyle=["#c45a7a","#d98ac4","#f7dbb0"][Math.floor(o()*3)],s.fillRect(Math.round(a+f*12),Math.round(l+m*12),2,1)}let h=new Tn(i);return h.magFilter=h.minFilter=st,h.colorSpace=Mt,h}var Ox=[],Fx=[];function CT(){let n=Yr("hollow_grounds");n.add(zl(IT())),K("soul_shrine",0,0,Math.PI/8,1,n);let e=K("spirit_vessel",0,0,0,1,n);e.position.y=.22;let t=K("soul_flame",0,0,0,1.1,n);t.position.y=.95,Ox.push(t);let i=new Rt(6287576,16,8,1.5);i.position.set(0,1.6,0),n.add(i);for(let[s,r,o]of[[-9.4,-9.5,0],[-3.5,-9.9,.05],[3.8,-9.7,-.05],[-11.9,-4,Math.PI/2],[-11.9,4.4,Math.PI/2+.1],[11.9,-1.5,Math.PI/2],[11.9,5.6,Math.PI/2-.1],[-7,9.6,.05],[7.4,9.5,-.04]])K("wall_ruin",s,r,o,1,n);for(let[s,r,o]of[[-5.6,9.7,0],[4.6,9.8,.1],[11.8,2.2,Math.PI/2],[-11.8,.4,Math.PI/2]])K("fence",s,r,o,.95,n);K("ruined_gate",0,9.7,0,1,n),K("dead_tree_big",-8.2,-11.2,.6,1,n),K("collapsed_tomb",9.4,-10.1,-.3,1,n);for(let s of[-1,1])K("obelisk",s*1+s*.6,-10.2,s*.2,1,n);for(let[s,r,o]of[[-13.6,7.6,1.2],[13.8,-7.6,2.7],[13.5,8.6,.4],[-14,-2.2,2]])K("dead_tree_small",s,r,o,1,n);for(let[s,r,o]of[[-9.6,8.5,.2],[9.3,8.4,-.3],[-10.2,-7.9,Math.PI/2]])K("open_grave",s,r,o,.9,n);for(let[s,r,o]of[[-6.2,-8.9,.2],[6.6,-8.8,-.3],[-10.6,2.6,1.4],[10.6,-4.8,-1.3],[10.8,3.6,-1.6],[-4.2,8.9,.1],[3,9,-.2],[-10.7,-1.6,1.7]])K("gravestone_cracked",s,r,o,1,n);for(let[s,r]of[[-7.8,-8.3],[8,7.9],[-10.9,6],[10.7,-7],[5.6,-9.4]])K("spirit_bramble",s,r,s,1,n);for(let[s,r,o]of[[-12.6,-6.8,.4],[12.7,.6,1.9],[-2,10.4,2.6],[2.6,-9,.9]])K("rubble",s,r,o,.9,n);for(let[s,r,o,a]of[[-13.2,-9.4,3.2,.9],[14.2,-4.6,2.6,.7],[13.8,5,3.6,.6],[-14.4,3.2,2.2,.55]]){let l=K("floating_rock",s,r,s*.3,a,n);l.position.y=o,Fx.push({node:l,y:o,p:s})}for(let s of[-1,1])for(let r of[-7.6,7.8]){K("lamp",s*9.8,r,0,1,n);let o=new Rt(Ne.amber,10,6.5,1.6);o.position.set(s*9.8,2.1,r),n.add(o)}for(let[s,r]of[[-9,-8.5],[9,8]]){let o=new Rt(10189823,5,5,1.6);o.position.set(s,1,r),n.add(o)}n.visible=!1}function IT(){let i=document.createElement("canvas");i.width=i.height=384;let s=i.getContext("2d"),r=71,o=()=>(r=r*16807%2147483647)/2147483647,a=384/2,l=384/2+12;s.fillStyle="#4e4044",s.fillRect(0,0,384,384);for(let d=0;d<6e3;d++)s.fillStyle=["#544548","#483b40","#5a4a44","#443840","#57494d"][Math.floor(o()*5)],s.fillRect(Math.floor(o()*384),Math.floor(o()*384),2+Math.floor(o()*3),2);s.fillStyle="#2e252b";for(let d=0;d<160;d++){let f=o()*384,m=o()*384,y=o()*6.28;for(let p=0;p<10;p++)s.fillRect(Math.round(f),Math.round(m),1,1),y+=(o()-.5)*1.2,f+=Math.cos(y)*2,m+=Math.sin(y)*2}let c=(d,f)=>{let m=d*374761393+f*668265263|0;return m=(m^m>>13)*1274126177,((m^m>>16)>>>0)/4294967295},u=["#6e6270","#665a69","#746878","#5f5462"];for(let d=0;d<384;d++)for(let f=0;f<384;f++){let m=(f-a)/12,y=(d-l)/12,p=Math.hypot(m,y);if(p<2.1||p>5.6)continue;let g=Math.floor((p-2.1)/.9),v=(p-2.1)/.9%1,S=Math.round(2*Math.PI*(2.55+g*.9)/1),b=((Math.atan2(y,m)/(2*Math.PI)+1)*S+g*.5)%S,A=Math.floor(b),w=c(g,A);if(w<g*.2-.05)continue;let _=v<.08||b%1<.07*(2.55+g*.9)/2.5;s.fillStyle=_?"#2f262c":u[Math.floor(w*4)],s.fillRect(f,d,1,1)}for(let d=0;d<9;d++){let f=d/9*Math.PI*2+o()*.4,m=5.2+o(),y=a+Math.cos(f)*m*12,p=l+Math.sin(f)*m*12;for(let g=0;g<30;g++)if(s.fillStyle="#5a3f86",s.fillRect(Math.round(y)-1,Math.round(p),3,1),s.fillStyle="#9b7bff",s.fillRect(Math.round(y),Math.round(p),1,1),f+=(o()-.5)*.6,y+=Math.cos(f)*2.2,p+=Math.sin(f)*2.2,o()<.08){let v=y,S=p,b=f+(o()<.5?.9:-.9);for(let A=0;A<6;A++)s.fillStyle="#7d6bff",s.fillRect(Math.round(v),Math.round(S),1,1),v+=Math.cos(b)*2,S+=Math.sin(b)*2}}for(let d=0;d<700;d++){let f=Math.floor(o()*384),m=Math.floor(o()*384);Math.hypot(f-a,m-l)<6.5*12||(s.fillStyle=["#7a6a4a","#6a5c44","#5c6a45"][Math.floor(o()*3)],s.fillRect(f,m,1,2),s.fillRect(f+1,m-1,1,2),s.fillRect(f-1,m,1,1))}for(let d=0;d<70;d++){let f=o()*384,m=o()*384;if(!(Math.hypot(f-a,m-l)<60))for(let y=0;y<22;y++)s.fillStyle=["#a8344a","#c4503a","#8e3a3e"][Math.floor(o()*3)],s.fillRect(Math.round(f+(o()-.5)*22),Math.round(m+(o()-.5)*16),2,1)}let h=new Tn(i);return h.magFilter=h.minFilter=st,h.colorSpace=Mt,h}var qr=null,Pi=null,Bl=0;function kx(){Bl=1}var Gl=()=>Pi;function PT(){let n=Yr("bell_tower");n.add(zl(LT()));let e=[[-9,-9.6],[9,-9.6],[11.6,-7.2],[11.6,7.2],[9,9.6],[-9,9.6],[-11.6,7.2],[-11.6,-7.2]];for(let[l,c]of[[-7.4,"tower_window"],[-4.4,"broken_clock"],[4.4,"tower_window"],[7.4,"tower_window"]])K(c,l,-9.9,0,.94,n);for(let l of[-1,1])K("tower_window",l*2.95,-11.3,-l*Math.PI/2,.85,n);K("tower_window",0,-12.7,0,1,n);let t=K("bell_frame",0,-10.5,0,.92,n),i=new Oe;i.position.set(0,4.45,-10.5),n.add(i),qr=new Oe,i.add(qr);let s=K("great_bell",0,0,0,.92,qr);s.position.y=-3.1;let r=K("bell_clapper",0,0,0,.92,qr);r.position.y=-3;for(let l=1;l<e.length;l++){let[c,u]=e[l],[h,d]=e[(l+1)%e.length],f=Math.hypot(h-c,d-u),m=Math.max(1,Math.round(f/3.2)),y=Math.atan2(-(d-u),h-c);for(let p=0;p<m;p++){let g=(p+.5)/m,v=c+(h-c)*g,S=u+(d-u)*g;Math.abs(S-9.6)<.1&&Math.abs(v)<1.8||K((l+p)%4===2?"parapet_broken":"parapet",v,S,y,f/m/3.2,n)}}for(let[l,c,u]of[[-11.6,7.2,.6],[11.6,7.2,-.6],[-1.9,9.7,0],[1.9,9.7,0],[-11.6,-7.2,2.4],[11.6,-7.2,-2.4]])K("gargoyle",l,c,u,.9,n);for(let l of[-1,1])K("weeping_angel",l*3.7,-9.2,l*-.3,1,n),K("ritual_banner",l*5.9,-9.25,0,1.1,n),K("candles",l*2.4,-8.6,l,1,n),K("candles",l*9.4,-8.3,l*2,1,n),K("bell_gear",l*10.2,3,l,1,n),K("rubble",l*7.2,9,l*.8,.9,n);for(let[l,c]of[[-10.4,-7.8],[10.4,-7.8],[-10.4,7.8],[10.4,7.8]]){K("signal_brazier",l,c,0,1,n);let u=new Rt(16751164,12,7.5,1.6);u.position.set(l,2.2,c),n.add(u)}let o=new Rt(Ne.amber,10,8,1.6);o.position.set(0,2.6,-7.9),n.add(o),Pi=vx(l=>hn[l].clone(!0)),n.add(Pi.root);let a=new Rt(10189823,8,7,1.6);a.position.set(0,3,.5),Pi.root.add(a),n.visible=!1}function LT(){let i=document.createElement("canvas");i.width=i.height=384;let s=i.getContext("2d"),r=89,o=()=>(r=r*16807%2147483647)/2147483647,a=384/2,l=384/2+12;s.fillStyle="#1b1628",s.fillRect(0,0,384,384);for(let m=0;m<260;m++)s.fillStyle=["#2a2238","#231d33"][m%2],s.fillRect(Math.floor(o()*384),Math.floor(o()*384),2,3);let c=(m,y)=>Math.abs(m)<=11.7&&Math.abs(y)<=9.7&&Math.abs(m)+Math.abs(y)<=18.9,u=(m,y)=>{let p=m*374761393+y*668265263|0;return p=(p^p>>13)*1274126177,((p^p>>16)>>>0)/4294967295},h=["#5f5868","#58516a","#666070","#524b5c"],d=["#6a6276","#635b70","#70687c"];for(let m=0;m<384;m++)for(let y=0;y<384;y++){let p=(y-a)/12,g=(m-l)/12;if(!c(p,g))continue;let v=Math.hypot(p,g),S;if(v<7.4){let b=Math.floor(v/.95),A=Math.max(6,Math.round(2*Math.PI*(b+.5)*.95/1)),w=((Math.atan2(g,p)/(2*Math.PI)+1)*A+b*.5)%A;S=v/.95%1<.08||w%1<.06?"#3a3346":d[Math.floor(u(b,Math.floor(w))*3)]}else{let b=Math.floor((y+3)/16),A=Math.floor(m/22);S=(y+3)%16<1||m%22<1?"#3a3346":h[Math.floor(u(b,A)*4)]}s.fillStyle=S,s.fillRect(y,m,1,1)}s.strokeStyle="rgba(201,160,70,0.55)",s.lineWidth=2;for(let m of[7.3,6.4,2.2])s.beginPath(),s.arc(a,l,m*12,0,Math.PI*2),s.stroke();s.fillStyle="rgba(201,160,70,0.35)";for(let m=0;m<8;m++){let y=m*Math.PI/4,p=(m%2?4:6.2)*12;s.beginPath(),s.moveTo(a+Math.cos(y)*p,l+Math.sin(y)*p),s.lineTo(a+Math.cos(y+.22)*1.2*12,l+Math.sin(y+.22)*1.2*12),s.lineTo(a+Math.cos(y-.22)*1.2*12,l+Math.sin(y-.22)*1.2*12),s.fill()}s.fillStyle="rgba(201,160,70,0.6)";for(let m=0;m<24;m++){let y=m/24*Math.PI*2;s.fillRect(Math.round(a+Math.cos(y)*6.85*12)-1,Math.round(l+Math.sin(y)*6.85*12)-1,3,3)}for(let m=0;m<120;m++){let y=Math.floor(o()*384),p=Math.floor(o()*384),g=(y-a)/12,v=(p-l)/12;!c(g,v)||Math.hypot(g,v)<7.6||(s.fillStyle=o()<.5?"#a8344a":"#2c2536",s.fillRect(y,p,2,1))}let f=new Tn(i);return f.magFilter=f.minFilter=st,f.colorSpace=Mt,f}var Bx=[];function zx(n,e,t,i=0){let s=Ul[n].build(r=>hn[r].clone(!0),i);return s.root.position.set(e,0,t),$e.add(s.root),Bx.push(s),s}var Ki=16758875,Dp=16751164,Up=6287576,Eh=10189823,NT=12165608,Fp=(n,e,t=()=>!0)=>n.traverse(i=>{i.isPointLight&&t(i)&&Tp(i,e)});function DT(){let n=Kn.old_churchyard,e=Yr("old_churchyard");for(let[t,i]of[[-9.6,-7.4],[9.6,-7.4],[-9.6,7.6],[9.6,7.6],[-2.2,9.7],[2.2,9.7]])Vt(n,t,2.12,i,{color:Ki,size:2.2,kind:"lamp"}),Vr(n,t,2.3,i,{rate:.6,up:.4});Vt(n,0,2.9,-10.1,{color:Ki,size:4.5,kind:"window",opacity:.45});for(let[t,i]of[[-2.75,-10.05],[2.75,-10.05],[-8.7,-4.7],[9.3,2.7],[-9.1,6.5],[7.7,-7.9]])Vt(e,t,.6,i,{color:Ki,size:1.1,kind:"candle"}),Vr(e,t,.65,i,{rate:.5,up:.3,life:1});Rp(n,0,-1,{n:14,area:[22,17],color:16765562,y:.6}),Cp(n,{rate:1.2,colors:[14715452,12865594,12152136],wind:.35})}function UT(){let n=Kn.forgotten_gardens;n.traverse(e=>{e.isPointLight&&(e.color.getHex()===5234888||e.color.getHex()===9403647)&&(Tp(e,"magic"),Vt(n,e.position.x,1.35,e.position.z,{color:e.color.getHex(),size:2.2,kind:"magic"}))});for(let[e,t,i,s]of[[-10.25,0,.35,1],[10.25,0,.35,1],...kl.flatMap(r=>[[r,-8,1,.35],[r,8,1,.35]])])Qs(n,e,.15,t,{rate:12,color:15720703,color2:8219647,r:1.9,rise:1.3,w:2.2,sx:i,sz:s,life:1.8});Vt(n,0,2.2,-10.6,{color:Ki,size:4.5,kind:"window",opacity:.4}),Qs(n,0,1,0,{rate:4,color:Up,r:.7,rise:.8,w:1.4,life:1.6}),Rp(n,0,-1,{n:18,area:[22,17],color:10479784,y:.5}),Cp(n,{rate:2.5,colors:[14256836,12868218,16175525,15720703],wind:.2})}function OT(){let n=Kn.catacombs;Fp(n,"candle",e=>e.color.getHex()!==10189823);for(let e of Sh)e.node.children.forEach(t=>{if(!t.name&&t.position.y===0&&e.node.children.indexOf(t)>0){let i=Vt(e.node,t.position.x,1.82,t.position.z,{color:e.realm?Eh:Dp,size:1.3,kind:e.realm?"magic":"brazier"});e.mats.push(i.material)}});for(let[e,t]of[[-2.5,-8],[2.5,-8],[-6.9,-8.2],[6.9,-8.2],[-10.4,1],[10.4,1],[-10.2,-6.6],[10.2,-6.6],[-6.2,8.4],[6.2,8.4]])Vt(n,e,.6,t,{color:Ki,size:1.1,kind:"candle"}),Vr(n,e,.65,t,{rate:.4,up:.3,life:.9});Vt(n,0,1.55,-8.6,{color:Dp,size:2.4,kind:"brazier",opacity:.5}),Ip(n,{rate:5,color:16243632,area:[20,16],y:[.4,3.2],life:7})}function FT(){let n=Kn.last_ward;for(let e of Th){let t=Vt(e.crystal,0,.35,0,{color:Eh,size:1.3,kind:"magic"});e.glow=t;let[i,s]=Xr[e.i];Qs(e.crystal,i,1.75,s,{rate:3,color:NT,color2:16769690,r:.45,rise:.5,w:3,life:1.3}),Vt(e.states.intact,0,.95,0,{color:Ki,size:1.6,kind:"candle",opacity:.45})}for(let e of[-1,1]){for(let t of[-4.6,1.6,6.4])Vt(n,e*10.45,1.75,t,{color:Ki,size:1.2,kind:"candle"});Vt(n,e*2.4,1.75,-7.75,{color:Ki,size:1.2,kind:"candle"});for(let t of[3.2,9.6])Vt(n,e*t,2.2,-9,{color:e*t>5?12868218:8219647,size:2.6,kind:"window",opacity:.35})}Ip(n,{rate:4,color:14274528,area:[20,16],y:[.6,3.5],life:8})}function kT(){let n=Kn.hollow_grounds;Fp(n,"lamp",e=>e.color.getHex()===Ne.amber);for(let[e,t]of[[-9.8,-7.6],[9.8,-7.6],[-9.8,7.8],[9.8,7.8]])Vt(n,e,2.12,t,{color:Ki,size:2,kind:"lamp"}),Vr(n,e,2.3,t,{rate:.6});Vt(n,0,1.3,0,{color:Up,size:3.2,kind:"magic",opacity:.5}),Qs(n,0,.3,0,{rate:10,color:Up,color2:15720703,r:1.7,rise:1.1,w:2,life:2,inward:!0});for(let e=0;e<9;e++){let t=e/9*Math.PI*2;Vr(n,Math.cos(t)*6,.05,Math.sin(t)*6,{rate:.5,color:Eh,spread:1.6,up:.35,life:2.4})}for(let[e,t]of[[-7.8,-8.3],[8,7.9],[-10.9,6],[10.7,-7],[5.6,-9.4]])Vt(n,e,.7,t,{color:Eh,size:1.4,kind:"magic",opacity:.4})}function BT(){let n=Kn.bell_tower;Fp(n,"brazier",e=>e.color.getHex()===16751164);for(let[e,t]of[[-10.4,-7.8],[10.4,-7.8],[-10.4,7.8],[10.4,7.8]])Vt(n,e,1.7,t,{color:Dp,size:2.6,kind:"brazier"}),Vr(n,e,1.8,t,{rate:9,color:16765562,spread:.4,up:1.4,life:2.4});if(Rx(n,{rate:14,wind:1.3}),Pi){Qs(Pi.rig,0,.6,0,{rate:8,color:9071320,color2:8250367,r:1.9,rise:1.6,w:1.6,life:2.4});for(let e of Pi.sides)Vt(e.pivot,0,-.7,0,{color:16758875,size:1.6,kind:"candle",opacity:.6})}}function zT(){Vt(Gt.body,.42,.3,.14,{color:Ki,size:1.4,kind:"lamp",opacity:.6});let n=new I;Gr(Gt.player,8,()=>{x.state!=="playing"&&x.state!=="tutorial"||(Gt.lantern.getWorldPosition(n),x.realm?Lp()<.6&&Pp(n.x,n.y+.1,n.z,{color:14272767,color2:8219647,up:.6,life:1.1}):(x.moving>.3||Lp()<.15)&&Pp(n.x,n.y+.15,n.z,{up:.4}))})}function Hx(){bT(),ST(),TT(),AT(),CT(),PT(),DT(),UT(),OT(),FT(),kT(),BT(),zT()}var Op={old_churchyard:{hemi:13219558,hemiI:1.45,moon:13220095,moonI:1.1},forgotten_gardens:{hemi:12113616,hemiI:1.35,moon:12116223,moonI:1},catacombs:{hemi:13150368,hemiI:1.05,moon:16763040,moonI:.55},last_ward:{hemi:12562672,hemiI:1.3,moon:13680895,moonI:.9},hollow_grounds:{hemi:13149886,hemiI:1.25,moon:14196928,moonI:.95},bell_tower:{hemi:11056368,hemiI:1.3,moon:14213375,moonI:1.6}},aa={...Op.old_churchyard};function $r(n){for(let e in Kn)Kn[e].visible=e===n;Object.assign(aa,Op[n]||Op.old_churchyard)}function Gx(n){return()=>{n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function tr(n=1){let e=Gx(n),t=()=>e();return t.seed=i=>(t.current=i>>>0,e=Gx(t.current),t.current),t.current=n>>>0,t.range=(i,s)=>i+(s-i)*e(),t.int=i=>Math.floor(e()*i),t.chance=i=>e()<i,t.sign=()=>e()<.5?-1:1,t}var Ct=tr(1),vt=tr(2);function HT(){try{return crypto.getRandomValues(new Uint32Array(1))[0]}catch{return(Date.now()^Math.random()*4294967296)>>>0}}function wh(n=HT()){return Ct.seed(n),vt.seed(n^2654435769),n>>>0}var Ch=900,ws=new Bt,Ah=new Float32Array(Ch*3),Rh=new Float32Array(Ch*3),Wx=new Float32Array(Ch);ws.setAttribute("position",new Pt(Ah,3));ws.setAttribute("color",new Pt(Rh,3));ws.setAttribute("size",new Pt(Wx,1));ws.setDrawRange(0,0);var GT=new $t({vertexShader:"attribute float size; attribute vec3 color; varying vec3 vC; void main(){ vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_PointSize = size; }",fragmentShader:"varying vec3 vC; void main(){ gl_FragColor = vec4(vC, 1.); }",depthWrite:!1}),kp=new hs(ws,GT);kp.frustumCulled=!1;kp.renderOrder=5;$e.add(kp);var Kr=[],Vx=0;function Ht(n,e,t,{n:i=8,color:s=Ne.amber,speed:r=3,up:o=2,life:a=.6,size:l=2,spread:c=1,grav:u=-4,vx:h=0,vz:d=0}={}){let f=new ge(s).convertSRGBToLinear();for(let m=0;m<i&&Kr.length<Ch;m++){let y=vt()*Math.PI*2,p=r*(.3+vt()*.7);Kr.push({x:n+(vt()-.5)*c*.3,y:e,z:t+(vt()-.5)*c*.3,vx:Math.cos(y)*p+h,vy:o*(.5+vt()),vz:Math.sin(y)*p+d,life:a,max:a,c:f,size:l+(vt()<.3?1:0),grav:u})}}function Xx(n){let e=0;for(let t=0;t<Kr.length;t++){let i=Kr[t];i.life-=n,!(i.life<=0)&&(i.vy+=i.grav*n,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n,i.vx*=1-2.5*n,i.vz*=1-2.5*n,i.y<.02&&(i.y=.02,i.vy*=-.3),Kr[e++]=i)}if(Kr.length=e,!(e===0&&Vx===0)){for(let t=0;t<e;t++){let i=Kr[t];Ah[t*3]=i.x,Ah[t*3+1]=i.y,Ah[t*3+2]=i.z;let s=Math.min(1,i.life/i.max*2);Rh[t*3]=i.c.r*s+.02,Rh[t*3+1]=i.c.g*s+.02,Rh[t*3+2]=i.c.b*s+.03,Wx[t]=i.size}ws.setDrawRange(0,e),Vx=e,e!==0&&(ws.attributes.position.needsUpdate=ws.attributes.color.needsUpdate=ws.attributes.size.needsUpdate=!0)}}var Yx="gs_settings",ft,ca,jr,Jr,As,ua,Zn=!1,ha=!1,Wl=!1,Nh=null,da=.7,Qr=.55;function VT(){try{let n=JSON.parse(localStorage.getItem(Yx)||"{}");typeof n.sfx=="number"&&(da=Dh(n.sfx)),typeof n.music=="number"&&(Qr=Dh(n.music)),typeof n.muted=="boolean"&&(Zn=n.muted)}catch{}}function Bp(){try{localStorage.setItem(Yx,JSON.stringify({sfx:da,music:Qr,muted:Zn}))}catch{}}var Dh=n=>Math.max(0,Math.min(1,n));VT();function sr(){if(ft)return!0;let n=window.AudioContext||window.webkitAudioContext;return n?(ft=new n,ca=ft.createGain(),ca.gain.value=Zn?0:1,ca.connect(ft.destination),jr=ft.createGain(),jr.gain.value=da,jr.connect(ca),Jr=ft.createGain(),Jr.gain.value=Zn?0:Qr,Jr.connect(ca),As=ft.createGain(),As.gain.value=0,As.connect(Jr),ua=ft.createGain(),ua.gain.value=0,ua.connect(Jr),!0):!1}function Zr(){if(!sr())return;ca.gain.value=Zn?0:1,jr.gain.value=da;let n=(e,t,i)=>{e.gain.cancelScheduledValues(ft.currentTime),e.gain.setValueAtTime(e.gain.value,ft.currentTime),e.gain.linearRampToValueAtTime(t,ft.currentTime+i)};n(Jr,Zn?0:Qr,.15),n(As,ha&&!ir?1:0,.2),n(ua,Wl||ir?1:0,.2)}function sn(n,e,{type:t="square",vol:i=.15,slide:s=0,delay:r=0,attack:o=.005,dest:a}={}){if(!sr()||Zn)return;let l=ft.currentTime+r,c=ft.createOscillator(),u=ft.createGain();c.type=t,c.frequency.setValueAtTime(n,l),s&&c.frequency.exponentialRampToValueAtTime(Math.max(20,n*s),l+e),u.gain.setValueAtTime(0,l),u.gain.linearRampToValueAtTime(i,l+o),u.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(u),u.connect(a||jr),c.start(l),c.stop(l+e+.05)}function nr(n,{vol:e=.2,f0:t=800,f1:i=3e3,q:s=1.5,delay:r=0,dest:o}={}){if(!sr()||Zn)return;let a=ft.currentTime+r,l=Math.floor(ft.sampleRate*n),c=ft.createBuffer(1,l,ft.sampleRate),u=c.getChannelData(0);for(let m=0;m<l;m++)u[m]=vt()*2-1;let h=ft.createBufferSource();h.buffer=c;let d=ft.createBiquadFilter();d.type="bandpass",d.Q.value=s,d.frequency.setValueAtTime(t,a),d.frequency.exponentialRampToValueAtTime(i,a+n);let f=ft.createGain();f.gain.setValueAtTime(e,a),f.gain.exponentialRampToValueAtTime(1e-4,a+n),h.connect(d),d.connect(f),f.connect(o||jr),h.start(a)}var $x={clean:"audio/melodic_clean_loop.ogg",spirit:"audio/melodic_spirit_reverb_loop.ogg",swap:"audio/sfx_world_switch.ogg"},Kx="audio/title_minimal_melody_loop.ogg",wt=null,zp=null,ir=!1;function Gp(n){let e=new Audio;return e.loop=!0,e.preload="auto",e.src=n,e.load(),e}try{wt=Gp(Kx)}catch{wt=null}function Zx(){if(!sr())return!1;if(!wt)try{wt=Gp(Kx)}catch{wt=null}if(!wt||wt._wired)return!!wt;try{ft.createMediaElementSource(wt).connect(ua),wt._wired=!0}catch{wt=null}return!!wt}function Ih(){if(!(!ft||!Zx())){if(clearTimeout(zp),zp=null,Wl||ir){let n=()=>{wt.play().catch(()=>{})};n(),wt.readyState<2&&wt.addEventListener("canplay",n,{once:!0})}else zp=setTimeout(()=>{!Wl&&wt&&wt.pause()},450);Zr()}}var WT=.27,XT=.25,qT=.03,Nt=null,eo=!1,Uh=0,Ph=null,Oh=null,Zi=null,fa=()=>!!Nt&&!eo;function Jx(){if(!Zi)try{Zi={};for(let n of["clean","spirit"]){let e=Gp($x[n]);e.addEventListener("error",()=>{eo=!0,ha&&!Nh&&(Nh=setInterval(jx,230))}),Zi[n]=e}}catch{Zi=null,eo=!0}}function YT(n,e=2e4){return!n||n.readyState>=4?Promise.resolve():new Promise(t=>{let i=()=>{clearTimeout(s),t()};n.addEventListener("canplaythrough",i,{once:!0}),n.addEventListener("error",i,{once:!0});let s=setTimeout(i,e)})}function Lh(){if(Nt||eo||!sr())return fa();if(Jx(),!Zi)return!1;try{Nt={};for(let n of["clean","spirit"]){let e=Zi[n],t=ft.createGain();t.gain.value=n==="clean"?1:0,ft.createMediaElementSource(e).connect(t),t.connect(As),Nt[n]={el:e,g:t}}fetch($x.swap).then(n=>n.arrayBuffer()).then(n=>ft.decodeAudioData(n)).then(n=>{Ph=n}).catch(()=>{})}catch{Nt=null,eo=!0}return fa()}function $T(){if(!Lh())return;clearTimeout(Oh),Oh=null;let n=!Nt.clean.el.paused;Uh=0;for(let e of["clean","spirit"]){let{el:t,g:i}=Nt[e];if(i.gain.cancelScheduledValues(ft.currentTime),i.gain.value=e==="clean"?1:0,!n)try{t.currentTime=0}catch{}t.play().catch(()=>{})}}function KT(){Nt&&(clearTimeout(Oh),Oh=setTimeout(()=>{if(!ha)for(let n in Nt)Nt[n].el.pause()},300))}var ZT=Float32Array.from({length:16},(n,e)=>Math.cos(e/15*Math.PI/2)),JT=Float32Array.from({length:16},(n,e)=>Math.sin(e/15*Math.PI/2));function qx(n,e=0){if(!fa()||n===Uh)return;Uh=n;let t=n?Nt.clean:Nt.spirit,i=n?Nt.spirit:Nt.clean;try{Math.abs(i.el.currentTime-t.el.currentTime)>qT&&(i.el.currentTime=t.el.currentTime)}catch{}let s=ft.currentTime+e;for(let[r,o]of[[t,ZT],[i,JT]]){let a=r.g.gain;a.cancelAndHoldAtTime?a.cancelAndHoldAtTime(ft.currentTime):a.cancelScheduledValues(ft.currentTime),a.setValueCurveAtTime(o,s,XT)}}var Hp=[0,3,5,7,10,12,15,17,19,22],Vl=(n,e)=>n*Math.pow(2,Hp[e%Hp.length]/12+Math.floor(e/Hp.length)),la=0;function jx(){if(!ha||Zn||Qr<=.001||fa())return;let n=[110,110,98,103.8][Math.floor(la/8)%4];la%8===0&&sn(n/2,1.6,{type:"triangle",vol:.22,dest:As,attack:.05}),la%2===0&&vt()<.6&&sn(Vl(n*2,[0,2,4,3,5,4,2,1][la%8]),.5,{type:"triangle",vol:.07,dest:As,attack:.01}),la%4===2&&nr(.05,{vol:.03,f0:6e3,f1:7e3,q:3,dest:As}),la++}var Je={preloadMusic(){Jx();let n=[wt,Zi&&Zi.clean,Zi&&Zi.spirit].filter(Boolean);return Promise.all(n.map(e=>YT(e)))},unlock(){sr()&&(ft.state==="suspended"&&ft.resume(),Zx(),wt&&wt.readyState<3&&wt.addEventListener("canplay",Lh,{once:!0}),setTimeout(Lh,2500),wt&&wt.readyState>=3&&Lh(),Wl&&wt&&wt.paused&&Ih())},theme(n){if(Wl=!!n,!n&&ha&&Nt&&!eo){let e=()=>Nt.clean.el.readyState>=3;if(!e()){ir=!0;let t=()=>{!ir||!e()||(ir=!1,Ih())};Nt.clean.el.addEventListener("canplay",t),setTimeout(()=>{ir=!1,Ih()},3e3)}}n&&(ir=!1),ft&&(Ih(),Zr())},start(){this.unlock(),Zr()},getVolumes(){return{sfx:da,music:Qr,muted:Zn}},setSfxVolume(n){da=Dh(n),Zr(),Bp()},setMusicVolume(n){Qr=Dh(n),Zr(),Bp()},toggleMute(){Zn=!Zn,Zr(),Bp()},music(n){sr()&&(ha=n,Zr(),n?($T(),!fa()&&!Nh&&(Nh=setInterval(jx,230))):KT())},cross(n){if(Ph&&sr()&&!Zn){let e=ft.createBufferSource();e.buffer=Ph,e.connect(jr),e.start(),qx(n,WT);return}nr(.22,{vol:.28,f0:n?600:2200,f1:n?3200:500,q:2}),sn(n?330:440,.18,{type:"sine",vol:.12,slide:n?1.5:.66}),qx(n)},audioState(){return{g:ft?[Jr.gain.value,As.gain.value,ua.gain.value]:null,title:wt?!wt.paused:!1,loops:fa(),failed:eo,realm:Uh,swapReady:!!Ph,playing:!!Nt&&!Nt.clean.el.paused,t:Nt?[Nt.clean.el.currentTime,Nt.spirit.el.currentTime]:null,gain:Nt?[Nt.clean.g.gain.value,Nt.spirit.g.gain.value]:null}},banish(n){sn(Vl(523.25,n-1),.25,{type:"square",vol:.09}),sn(Vl(523.25,n+1),.3,{type:"triangle",vol:.1,delay:.05}),nr(.12,{vol:.12,f0:4e3,f1:9e3,q:1})},hit(){sn(140,.3,{type:"sawtooth",vol:.2,slide:.4}),nr(.25,{vol:.25,f0:300,f1:100,q:.8})},blip(n=!0){this.unlock(),sn(n?784:659,.06,{type:"square",vol:.045})},deny(){this.unlock(),sn(180,.12,{type:"square",vol:.06,slide:.8})},pickup(){sn(660,.09,{type:"triangle",vol:.08}),sn(990,.14,{type:"triangle",vol:.07,delay:.06})},drop(){sn(300,.12,{type:"sine",vol:.09,slide:.6}),nr(.08,{vol:.06,f0:1200,f1:400})},pop(){nr(.14,{vol:.16,f0:3200,f1:1400,q:2}),sn(880,.1,{type:"sine",vol:.08,slide:.5})},pulse(){sn(140,.35,{type:"sine",vol:.12,slide:.5}),nr(.2,{vol:.1,f0:600,f1:200,q:.8})},toll(){sn(196,.9,{type:"sine",vol:.11}),sn(392*1.19,.6,{type:"triangle",vol:.05})},crack(){nr(.18,{vol:.2,f0:2600,f1:700,q:1.2}),sn(330,.12,{type:"square",vol:.05,slide:.6})},zap(){sn(900,.18,{type:"square",vol:.04,slide:.35})},win(){[0,2,4,5,7].forEach((n,e)=>sn(Vl(392,n),.5,{type:"triangle",vol:.12,delay:e*.12}))},lose(){[4,3,1,0].forEach((n,e)=>sn(Vl(196,n),.6,{type:"triangle",vol:.12,delay:e*.18}))}};var jT=.016666666666666666,to={tick:0};function Vp(n=jT,e=3){let t=0;return{feed(i,s){t+=i;let r=0;for(;t>=n-1e-6&&r<e;)s(n),t-=n,r++;return t>=n&&(t=0),r},reset(){t=0}}}var Xl=new Map,pa=[],QT=512,ew=0;function rr(n,e){return Xl.has(n)||Xl.set(n,new Set),Xl.get(n).add(e),()=>Xl.get(n).delete(e)}function tt(n,e={}){let t={seq:++ew,type:n,tick:to.tick,t:x.elapsed,...e};pa.push(t),pa.length>QT&&pa.shift();for(let i of[n,"*"])for(let s of Xl.get(i)??[])try{s(t)}catch(r){console.error(r)}return t}function Qx(){pa.length=0}var e_=.35,_n=null,no=n=>{_n=n},t_=()=>_n,ma=()=>D.arena.x,ga=()=>D.arena.z,Wp=()=>D.arena.playerPad;function tw(n){return Math.abs(n)<=D.campaign.portalAperture}function n_(n,e=Wp()){return n.x=dt.clamp(n.x,-ma()+e,ma()-e),n.y=dt.clamp(n.y,-ga()+e,ga()-e),n}function nw(n){return _n?.walls?oa.filter(e=>e.realm===n):[]}var iw=()=>_n?.solids||[];function mi(n,e,t=e_){for(let i of nw(e)){let s=i.w/2+t,r=i.h/2+t;if(Math.abs(n.x-i.x)<s&&Math.abs(n.y-i.z)<r)return i}for(let i of iw())if(Math.hypot(n.x-i.x,n.y-i.z)<i.r+t)return i;return null}function sw(n,e,t=e_){let i=mi(n,e,t);if(!i)return n;if(i.r!==void 0){let u=n.x-i.x,h=n.y-i.z,d=Math.hypot(u,h)||1,f=(i.r+t+1e-4)/d;return n.x=i.x+(d>1e-6?u:1)*f,n.y=i.z+(d>1e-6?h:0)*f,n}let s=i.w/2+t,r=i.h/2+t,o=n.x-i.x,a=n.y-i.z,l=s-Math.abs(o),c=r-Math.abs(a);return l<c?n.x+=Math.sign(o||1)*l:n.y+=Math.sign(a||1)*c,n}function rw(n,e,t){if(!_n?.walls&&!_n?.solids||!mi(e,t))return e;let i=new se(e.x,n.y),s=new se(n.x,e.y);return mi(i,t)?mi(s,t)?n.clone():s:i}function ow(){let n=[];if(_n?.portals)for(let e of[-ma(),ma()])n.push({axis:"x",v:e,open:t=>tw(t)});if(_n?.portalsNS)for(let e of[-ga(),ga()])n.push({axis:"y",v:e,open:t=>_n.portalsNS.some(i=>Math.abs(t-i)<=D.campaign.portalAperture)});return n}function aw(n,e){let t=null;for(let i of ow()){let s=i.axis==="x"?"y":"x",r=n[i.axis],o=e[i.axis],a=o-r;if(Math.abs(a)<1e-8||!(r>i.v&&o<=i.v||r<i.v&&o>=i.v||r===i.v&&Math.sign(a)===Math.sign(i.v)))continue;let l=(i.v-r)/a;if(l<0||l>1||t&&l>=t.t)continue;let c=n[s]+(e[s]-n[s])*l;if(!i.open(c))continue;let u=new se,h=new se,d=new se;u[i.axis]=i.v,u[s]=c,h[i.axis]=-i.v,h[s]=c,d[i.axis]=-i.v+(o-i.v),d[s]=c+(e[s]-c),t={t:l,at:u,out:h,rest:d}}return t}function ql(n,e,t){let i=[],s=n.clone(),r=e.clone();for(let o=0;o<3;o++){let a=aw(s,r);if(!a)break;i.push([s.clone(),a.at.clone()]),s=a.out.clone(),r=a.rest.clone()}if(r=rw(s,r,t),!_n?.portals&&!_n?.portalsNS)n_(r);else{let o=_n.portals?0:Wp(),a=_n.portalsNS?0:Wp();r.x=dt.clamp(r.x,-ma()+o,ma()-o),r.y=dt.clamp(r.y,-ga()+a,ga()-a)}return(_n?.walls||_n?.solids)&&sw(r,t),i.push([s.clone(),r.clone()]),{pos:r,segs:i}}function Fh(n,e,t,i){let s=n.clone().addScaledVector(e,t);return ql(n,s,i)}function i_(n,e){let t=n.map(([r,o])=>r.distanceTo(o)),i=t.reduce((r,o)=>r+o,0)||1,s=dt.clamp(e,0,1)*i;for(let r=0;r<n.length;r++){if(s<=t[r]||r===n.length-1){let[o,a]=n[r],l=t[r]<1e-6?1:s/t[r];return o.clone().lerp(a,dt.clamp(l,0,1))}s-=t[r]}return n[n.length-1][1].clone()}function s_(n,e){if(!_n?.walls&&!_n?.solids||!mi(n,e))return n.clone();let t=D.campaign.unstick;for(let i=.25;i<=t+1e-6;i+=.25)for(let s=0;s<16;s++){let r=s/16*Math.PI*2,o=new se(n.x+Math.cos(r)*i,n.y+Math.sin(r)*i);if(n_(o),!mi(o,e))return o}return null}function r_(n,e){return!!mi(n,e,.15)}var Xp={moth:"moth",bell:"bell",bloom:"bloom",choir:"choir"},o_=1,a_=()=>{o_=1},qp=[new ge(16769720),new ge(13218559)];function lw(n){let e=new Si(.62,.78,16),t=new ht({color:n?Ne.lavender:Ne.amber,transparent:!0,depthWrite:!1}),i=new ze(e,t);return i.rotation.x=-Math.PI/2,i.position.y=.045,i}function rn(n={}){let e=n.wisp??(x.elapsed>D.pacing.wispAfter&&Ct.chance(D.pacing.wispChance)),t=n.realm??(Ct.chance(.5)?0:1),i=n.pos;if(!i)for(let d=0;d<20;d++){let f=Ct.int(4);if(i=new se(Ct.range(-1,1)*(Ti-1),Ct.range(-1,1)*(wi-.5)),f===0?i.x=-Ti+.8:f===1?i.x=Ti-.8:f===2?i.y=-wi+.6:i.y=wi-.6,i.distanceTo(x.pos)>D.enemy.spawnMinDist&&!mi(i,t,.5))break}let s=n.kind&&Xp[n.kind]?n.kind:e?"wisp":"wanderer",r=new Oe,o=null,a;Xp[s]?(o=Ul[Xp[s]].build(d=>hn[d].clone(!0),vt()*20),a=bp(o.root)):a=bp(hn[e?"wisp":"wanderer"].clone(!0)),a.traverse(d=>{d.isMesh&&(d.castShadow=!1,d.material.transparent=!0)}),e||a.scale.setScalar(1),r.add(a);let l=Ll(a),c=lw(t);if(r.add(c),!o){let d=Nl(1.4);r.add(d)}$e.add(r);let u=[];a.traverse(d=>{d.isMesh&&!d.userData.outline&&d.material.emissive&&u.push({m:d.material,base:d.material.color.clone(),em:d.material.emissive.clone()})});let h={id:o_++,node:r,body:a,outline:l,ring:c,mats:u,pos:i,realm:t,wisp:e,shoot:1.2+Ct()*1.1,bob:vt()*6.28,spawn:D.enemy.spawnWindup,dead:!1,targeted:!1,vis:-1,charge:0,kind:s,rig:o,shield:s==="choir"?D.spirits.choir.shield:0,pulse:null,zig:s==="moth"?Ct()*6.28:0};return s==="bell"&&(h.shoot=1.5+Ct()*1.2),s==="bloom"&&(h.shoot=1+Ct()*1.2),r.position.set(i.x,0,i.y),Ue.enemies.push(h),tt("enemy_spawned",{id:h.id,wisp:e,realm:t,kind:s}),Ht(i.x,.2,i.y,{n:14,color:t?Ne.lavender:Ne.parchment,speed:1.2,up:2.5,life:.9,grav:.5}),h}function l_(){let n=Ct.chance(.5)?0:1,e=2+(x.elapsed>D.pacing.bigGroupAfter?Ct.int(2):0),t=Ct.chance(.5),i=new se(Ct.range(-1,1)*5,Ct.range(-1,1)*4);i.distanceTo(x.pos)<5&&i.set(-i.x,-i.y),i.distanceTo(x.pos)<4&&(i.y+=i.y>x.pos.y?3:-3);for(let s=0;s<e;s++){let r=(s-(e-1)/2)*1.5,o=new se(i.x+(t?r:0),i.y+(t?0:r));o.x=dt.clamp(o.x,-Ti+1,Ti-1),o.y=dt.clamp(o.y,-wi+1,wi-1),rn({realm:n,wisp:!1,pos:o})}}function Ji(n){n.dead=!0,$e.remove(n.node),Ue.enemies=Ue.enemies.filter(e=>e!==n)}function Yl(n,e,t,i=Ne.violet){let s=new Oe,r=new ze(new fs(.2,0),new ht({color:i})),o=new ze(new fs(.11,0),new ht({color:15984383}));r.position.y=o.position.y=.7,s.add(r,o);let a=Nl(.5);s.add(a),$e.add(s),Ue.projectiles.push({node:s,pos:n.clone(),dir:e.clone(),realm:t,life:D.projectile.life}),Je.zap()}var Yp=[{id:1,name:"Dusk",hp:5,invuln:1.6,speed:.76,fire:1.5,proj:.85,count:.6,wardHp:1.8,wardDps:.6,souls:16,bossHp:7,bossCd:1.5,loot:1.6},{id:2,name:"Nightfall",hp:4,invuln:1.3,speed:.9,fire:1.18,proj:.95,count:.85,wardHp:1.25,wardDps:.85,souls:21,bossHp:10,bossCd:1.18,loot:1.3},{id:3,name:"Midnight",hp:3,invuln:1,speed:1,fire:1,proj:1,count:1,wardHp:1,wardDps:1,souls:25,bossHp:12,bossCd:1,loot:1},{id:4,name:"Witching Hour",hp:3,invuln:.9,speed:1.08,fire:.88,proj:1.06,count:1.18,wardHp:.82,wardDps:1.12,souls:27,bossHp:13,bossCd:.9,loot:.8},{id:5,name:"Dead of Night",hp:2,invuln:1,speed:1.12,fire:.8,proj:1.1,count:1.25,wardHp:.75,wardDps:1.2,souls:29,bossHp:13,bossCd:.88,loot:.55}],xa=3,c_=xa,$l=()=>c_;function Kl(n){let e=Yp[Math.min(5,Math.max(1,Math.round(+n||xa)))-1];c_=e.id,jg();let t=D,i=Jg;return t.player.maxHp=e.hp,t.player.hitInvuln=i.player.hitInvuln*e.invuln,t.enemy.wandererSpeed=i.enemy.wandererSpeed*e.speed,t.enemy.wandererSpeedPerSec=i.enemy.wandererSpeedPerSec*e.speed,t.enemy.wispShootInterval=i.enemy.wispShootInterval*e.fire,t.projectile.speed=i.projectile.speed*e.proj,t.spirits.moth.speed=i.spirits.moth.speed*e.speed,t.spirits.choir.speed=i.spirits.choir.speed*e.speed,t.spirits.bell.interval=i.spirits.bell.interval*e.fire,t.spirits.bell.waveSpeed=i.spirits.bell.waveSpeed*e.proj,t.spirits.bloom.interval=i.spirits.bloom.interval*e.fire,t.campaign.wardHp=i.campaign.wardHp*e.wardHp,t.campaign.soulGoal=e.souls,t.campaign.bossHp=e.bossHp,Object.assign(t.difficulty,{tier:e.id,count:e.count,wardDps:e.wardDps,wardSpeed:e.speed,bossCd:e.bossCd,loot:e.loot}),e}function u_(n,e){let t=D.difficulty.count;if(e===0||t===1)return n;let i=[];return t<1?(n.forEach((s,r)=>{Math.floor((r+1)*t)>Math.floor(r*t)&&i.push(s)}),i.length?i:n.slice(0,1)):(n.forEach((s,r)=>{i.push(s),(s.kind==="wanderer"||s.kind==="wisp")&&Math.floor((r+1)*(t-1))>Math.floor(r*(t-1))&&i.push({...s,pos:[-s.pos[0],s.pos[1]+.9]})}),i)}var at={level:null,round:0,phase:"idle",waited:0},io=()=>at.level?.rounds.length??0;function kh(){Object.assign(at,{level:null,round:0,phase:"idle",waited:0})}function h_(n){Object.assign(at,{level:n,round:0,phase:"idle",waited:0}),d_(0)}function cw([n,e]){let t=D.arena.enemyPad+.4,i=D.night.spawnMinDist,s=a=>(a.x=dt.clamp(a.x,-D.arena.x+t,D.arena.x-t),a.y=dt.clamp(a.y,-D.arena.z+t,D.arena.z-t),a),r=s(new se(n,e));if(r.distanceTo(x.pos)>=i)return r;let o=r.clone().sub(x.pos);return o.lengthSq()<1e-6&&o.set(-x.pos.x||1,-x.pos.y||0),s(r.copy(x.pos).addScaledVector(o.normalize(),i+.01)),r.distanceTo(x.pos)<i&&s(r.set(-r.x,-r.y)),r}function d_(n){at.round=n,at.phase="active",at.waited=0;let e=u_(at.level.rounds[n].spawns,n).map(t=>rn({wisp:t.kind==="wisp",kind:t.kind,realm:t.realm,pos:cw(t.pos)}).id);tt("round_started",{round:n+1,total:io(),ids:e})}function f_(n){if(at.phase==="active"){if(Ue.enemies.length>0)return null;if(tt("round_cleared",{round:at.round+1,total:io()}),at.round+1>=io())return at.phase="complete",tt("level_cleared",{level:at.level.id}),"complete";at.phase="intermission",at.waited=0,tt("intermission_started",{next:at.round+2,seconds:D.night.intermission})}else at.phase==="intermission"&&(at.waited+=n,at.waited>=D.night.intermission-1e-9&&d_(at.round+1));return null}var p_=()=>at.phase==="intermission";var m_={title:"Graveyard Shift",loading:"LOADING",overtime:{warn:"THE NIGHT SHIFTS... {place}",arrive:"{place}"},phases:[{until:30,label:"OPENING HOURS"},{until:60,label:"VISITING HOURS"},{until:105,label:"RESTLESS HOUR"},{until:150,label:"LATE SHIFT"},{until:181,label:"WITCHING HOUR"}],results:{newBest:"NEW BEST",score:"SCORE",souls:"SOULS",chain:"BEST CHAIN",best:"HIGH SCORE"},modeSelect:{title:"CHOOSE YOUR SHIFT",locked:"COMING SOON",choose:"CHOOSE",clockIn:"CLOCK IN",back:"BACK",tapCard:"TAP A SHIFT",tapAgain:"TAP AGAIN TO CLOCK IN",change:"CHANGE SHIFT",difficulty:{label:"DIFFICULTY",tiers:["DUSK","NIGHTFALL","MIDNIGHT","WITCHING HOUR","DEAD OF NIGHT"],keys:"W/S"},modes:{night:{name:"NIGHT SHIFT",desc:"Six levels. One night.",lines:[["book","STORY"],["layers","6 LEVELS"]]},quick:{name:"QUICK SHIFT",desc:"A short, curated shift. Soon.",lines:[["hourglass","5-10 MIN"],["lightning","HIGHLIGHTS"]]},endless:{name:"OVERTIME",desc:"Endless. The night keeps moving.",lines:[["infinity","ENDLESS"],["trophy","BEST {best}"]]}}},rounds:{label:"ROUND {n}/{total}",next:"NEXT ROUND {s}",start:"ROUND {n}",clear:"ROUND CLEAR"},campaign:{relicTitle:"CHOOSE A RELIC",exit:"CHAPEL OPEN",exitHint:"STEP IN TO LEAVE",watch:"POCKET WATCH",watchDesc:"DASH COOLDOWN x0.8",key:"CARETAKER KEY",keyDesc:"DASH DISTANCE x1.25",flowers:"WARD BUBBLE",flowersDesc:"BLOCKS THE NEXT HIT",owned:"ALREADY KEPT",level:"LEVEL {n}/6",souls:"SOULS {have}/{need}",wards:"WARDS {n}",boss:"WARDEN {hp}"},items:{lure_paper:{name:"PAPER LANTERN",desc:"A decoy. Ghosts bite it until it tears."},lure_brass:{name:"BRASS LANTERN",desc:"A sturdier decoy that draws ghosts from further."},lure_spirit:{name:"SPIRIT LANTERN",desc:"A glowing decoy. Holds a crowd for a long while."},spellbook:{name:"SPELLBOOK",desc:"Hovers where you set it and pushes ghosts away."},bellstone:{name:"BELLSTONE",desc:"One toll: a shockwave that shoves ghosts back."},heart:{name:"HEART"},shield:{name:"WARD BUBBLE"},magnet:{name:"SOUL DRAW"},hourglass:{name:"STILLWATER"},parcel:{name:"PARCEL"}},bag:{title:"BAG",empty:"EMPTY",use:"USE",close:"CLOSE",hint:"1-5 use  \xB7  I close",hintTc:"Tap an item to use it",full:"BAG FULL",tooMany:"TOO MANY LANTERNS",button:"BAG",got:"{item} +1",heart:"+1 HEART",shield:"BUBBLE UP",magnet:"SOULS DRAWN IN",hourglass:"TIME STILLS",popped:"BUBBLE POPPED"},hud:{crossKey:"<kbd>SPACE</kbd> CROSS",tapCross:"<kbd>DOUBLE TAP</kbd>",chain:"CHAIN x{n}",pauseAria:"Pause",pauseLabel:"PAUSE",continueKey:"PRESS ANY KEY",continueTap:"<kbd>TAP</kbd>",continueSuffix:"TO CONTINUE"},stats:{score:"SCORE",souls:"SOULS RETURNED",bestChain:"BEST CHAIN",highScore:"HIGH SCORE"},titleScreen:{moveKb:"<kbd>WASD</kbd> / <kbd>ARROWS</kbd> move",crossKb:"<kbd>SPACE</kbd> cross worlds + dash",moveTc:"<kbd>DRAG</kbd> anywhere to move",crossTc:"<kbd>DOUBLE TAP</kbd> to cross + dash",startKb:"PRESS <kbd>ENTER</kbd>",startTc:"<kbd>TAP</kbd>",startSuffix:"TO CLOCK IN",hints:"<kbd>P</kbd> pause | <kbd>R</kbd> retry court | <kbd>M</kbd> mute",best:"best {n}"},pause:{title:"PAUSED",resumeKb:"<kbd>P</kbd> - clock back in",resumeTc:"<kbd>TAP</kbd> TO CLOCK BACK IN"},menu:{title:"PAUSED",tabs:{pause:"PAUSE",howto:"HOW TO",controls:"CONTROLS",settings:"SETTINGS",credits:"CREDITS"},slides:{prev:"Prev",next:"Next",loading:"Loading"},pause:{lead:"Take a breath. The graves can wait."},settings:{sfx:"Sound effects",music:"Music",muteHint:"<kbd>M</kbd> toggles mute."},credits:{lead:"Credits",items:[{title:"Keyboard & touch icons",body:'Pixel keyboard and touch-gesture UI by <a href="https://szatanik-studio.itch.io/" target="_blank" rel="noopener noreferrer">Szatanik Studio</a>.'}]},resume:"RESUME",restart:"RESTART",hintKb:"<kbd>P</kbd> or <kbd>ESC</kbd> to resume",hintTc:"<kbd>TAP</kbd> Resume to clock back in"},win:{title:"SHIFT COMPLETE",againKb:"<kbd>ENTER</kbd>",againTc:"<kbd>TAP</kbd>",againSuffix:"clock in again"},lose:{title:"SHIFT FAILED",againKb:"<kbd>ENTER</kbd>",againTc:"<kbd>TAP</kbd>",againSuffix:"try again"}};var g_={titleScreen:{ariaLabel:"Graveyard Shift",flavor:"The dead don't stay dead.<br>Unfortunately, you're on the clock.",howto:"Ghosts in the other world are dim. Cross through them to banish.",howtoTouch:"<kbd>DOUBLE TAP</kbd> a dim ghost to dash at it.",howtoEnd:""},tips:{intro:"Your shift begins at nine.<br>Please return the deceased to their graves.",crossKb:"Dim ghosts are in the <b>other</b> world.<br>Face them and press <kbd>SPACE</kbd> to cross through.",crossTc:"Dim ghosts are in the <b>other</b> world.<br>Face them (or aim at one) and <kbd>DOUBLE TAP</kbd> to cross through.",wisp:'"Not all the deceased are the same but, a gentle reminder<br>of their condition is usually sufficient."',moth:"Lantern Moths weave as they come.<br>Lead them with your dash.",bloom:"Bloom Wraiths stay rooted and spray <b>pollen</b> in a fan.<br>Slip between the shots.",choir:"The Ossuary Choir hides behind its skulls.<br>The <b>first</b> dash breaks the ring. The <b>second</b> sends it home.",bell:"Bell Imps toll a <b>shockwave</b>.<br>Watch the ring flicker, then step aside, cross over or dash through it."},menu:{howto:{lead:"Night shift orientation",clips:[{id:"cross",src:"clips/cross.gif",caption:"Face the ghosts and press <kbd>SPACE</kbd> to cross through.",captionTc:"Face the ghosts and <kbd>DOUBLE TAP</kbd> to cross through."},{id:"shift",src:"clips/shift.gif",caption:"Dim ghosts can't hurt you. Ghosts in your world can.",captionTc:"Dim ghosts can't hurt you. Ghosts in your world can."},{id:"chain",src:"clips/chain.gif",caption:"Chain banishes to boost your score.",captionTc:"Chain banishes to boost your score."}]},controls:{keyboard:[{keys:"<kbd>WASD</kbd> / <kbd>ARROWS</kbd>",action:"Move"},{keys:"<kbd>SPACE</kbd>",action:"Cross worlds + dash"},{keys:"<kbd>I</kbd> / <kbd>TAB</kbd>",action:"Open the bag (Night Shift)"},{keys:"<kbd>1</kbd>-<kbd>5</kbd>",action:"Use a bag item"},{keys:"<kbd>P</kbd> / <kbd>ESC</kbd>",action:"Pause / resume"},{keys:"<kbd>R</kbd>",action:"Restart shift"},{keys:"<kbd>M</kbd>",action:"Mute / unmute"}],touch:[{keys:"<kbd>DRAG</kbd>",action:"Move (floating stick)"},{keys:"<kbd>DOUBLE TAP</kbd>",action:"Cross worlds + dash"},{keys:"<kbd>TAP</kbd> Ghost",action:"Aim dash at a dim ghost"},{keys:"Bag",action:"Open the bag, tap an item to use it"},{keys:"Pause",action:"Open this menu"},{keys:"<kbd>TAP</kbd>",action:"Clock back in"}]}},win:{flavor:'"Congratulations on completing your first shift.<br>Please report for duty tomorrow."'},lose:{flavor:"The lantern gutters out at {time}."},toasts:{midnight:"Almost midnight. Hold on."}};var Bh={w:{spr:"key_w",label:"W"},a:{spr:"key_a",label:"A"},s:{spr:"key_s",label:"S"},d:{spr:"key_d",label:"D"},p:{spr:"key_p",label:"P"},r:{spr:"key_r",label:"R"},m:{spr:"key_m",label:"M"},space:{spr:"key_space",label:"Space"},esc:{spr:"key_esc",label:"Escape"},enter:{spr:"key_enter",label:"Enter"},up:{spr:"key_up",label:"Up arrow"},down:{spr:"key_down",label:"Down arrow"},left:{spr:"key_left",label:"Left arrow"},right:{spr:"key_right",label:"Right arrow"}},Kp={tap:{spr:"gesture_tap",label:"Tap"},double_tap:{spr:"gesture_double_tap",label:"Double-tap"},move:{spr:"gesture_move",label:"Drag"},swipe:{spr:"gesture_swipe",label:"Swipe"}},x_={spacebar:"space"," ":"space",escape:"esc",arrows:"arrows",wasd:"wasd","double tap":"double_tap","double-tap":"double_tap",doubletap:"double_tap","tap x2":"double_tap","tap\xD72":"double_tap",drag:"move","drag anywhere":"move"};function dw(n){let e=String(n).trim(),t=e.toLowerCase();return Bh[t]||Kp[t]?t:x_[t]?x_[t]:e.length===1&&Bh[t]?t:null}function y_(n,e){return`<kbd class="keyicon" title="${e}"><span class="spr-${n}" aria-hidden="true"></span><span class="vh">${e}</span></kbd>`}function v_(n){let e=Bh[n];return e?y_(e.spr,e.label):""}function fw(n){let e=Kp[n];return e?y_(e.spr,e.label):""}function __(n,e=""){return n.map(v_).filter(Boolean).join(e)}function pw(n){return String(n).replace(/<kbd>([^<]*)<\/kbd>/gi,(e,t)=>{let i=dw(t);return i==="wasd"?__(["w","a","s","d"]):i==="arrows"?__(["up","left","down","right"]):i&&Bh[i]?v_(i):i&&Kp[i]?fw(i):`<kbd>${t}</kbd>`})}function $p(n){if(typeof n=="string")return pw(n);if(Array.isArray(n))return n.map($p);if(n&&typeof n=="object"){let e={};for(let[t,i]of Object.entries(n))e[t]=$p(i);return e}return n}function M_(n){return $p(n)}function Zp(n,e){if(Array.isArray(e))return e.slice();if(!e||typeof e!="object")return e;let t={...n&&typeof n=="object"&&!Array.isArray(n)?n:{}};for(let[i,s]of Object.entries(e))t[i]=s&&typeof s=="object"&&!Array.isArray(s)&&t[i]&&typeof t[i]=="object"&&!Array.isArray(t[i])?Zp(t[i],s):Zp(void 0,s);return t}var Ee=M_(Zp(m_,g_));function yn(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>e[i]===void 0||e[i]===null?"":String(e[i]))}function zh(n,e,t=""){let i=t?` ${t}`:"";return`<span class="kb">${n}</span><span class="tc">${e}</span>${i}`}function b_(){let n=document.getElementById("loading");n&&(n.textContent=Ee.loading);let e=document.getElementById("phase");e&&(e.textContent=Ee.phases[0].label);let t=document.querySelector("#lanternbox .key");t&&(t.innerHTML=Ee.hud.crossKey);let i=document.getElementById("crossbtn");if(i){let r=i.querySelector(".ring");i.innerHTML="",r&&i.appendChild(r);let o=document.createElement("span");o.innerHTML=Ee.hud.tapCross,i.appendChild(o)}let s=document.getElementById("pausebtn");if(s){s.setAttribute("aria-label",Ee.hud.pauseAria);let r=s.querySelector(".pause-label");r&&(r.textContent=Ee.hud.pauseLabel||Ee.hud.pauseAria)}document.title=`${Ee.title} \u2014 Demo`}var or=n=>Math.sin(n)*.6+Math.sin(n*2.3+1.7)*.3+Math.sin(n*5.1+.4)*.1,S_=(n,e,t,i)=>(n.position.set(e,t,i),n),gi=(n,e,t,i)=>{let s=new Oe;return s.position.set(e,t,i),n.add(s),s};function _a(n){let e=[];return n.traverse(t=>{t.isMesh&&t.material.emissive?.getHex()&&(t.material=t.material.clone(),e.push(t.material))}),e}function ya(n,e){let t=new ze(new bi(e,16),new ht({color:919574,transparent:!0,opacity:.4,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.02,n.add(t)}var so=(n,e)=>{for(let t of n)t.emissiveIntensity=e};function Jp(n,e){let t=-1e9,i=0,s=-1;return{fire(){t=i},at(r){if(i=r,n){let a=Math.floor(r/2.5);a!==s&&(s=a,t=r)}let o=r-t;return{age:o,d:o>=0&&o<e?1-o/e:0}}}}var Hh={lure_paper:{name:"Paper Lantern",tier:1,build(n,e=0){let t=new Oe,i=gi(t,0,.8,0),s=S_(n("lure_paper"),0,-.8,0);i.add(s);let r=_a(s);return ya(t,.2),{root:t,tick(o){o+=e,i.rotation.z=Math.sin(o*1.3)*.06+or(o*.7)*.03,i.rotation.x=Math.sin(o*.9+1)*.04,s.scale.setScalar(1+Math.sin(o*3.1)*.012),so(r,.85+.3*(.5+.5*or(o*4)))},fire(){}}}},lure_brass:{name:"Brass Lantern",tier:2,build(n,e=0){let t=new Oe,i=n("lure_brass");t.add(i);let s=gi(t,0,.28,0);s.add(n("lure_brass_flame"));let r=_a(i);return ya(t,.22),{root:t,tick(o){o+=e,s.scale.set(1+or(o*9)*.1,1+or(o*7+2)*.25,1+or(o*8+4)*.1),s.position.x=or(o*5)*.012,s.rotation.z=or(o*6+1)*.15,so(r,.9+.2*or(o*7+2))},fire(){}}}},lure_spirit:{name:"Spirit Lantern",tier:3,build(n,e=0){let t=new Oe,i=gi(t,0,0,0),s=n("lure_spirit");i.add(s);let r=gi(i,0,.38,0);r.add(n("lure_spirit_core"));let o=gi(i,0,.9,0);o.add(n("lure_spirit_halo"));let a=_a(i);return ya(t,.24),{root:t,tick(l){l+=e,i.position.y=.06+Math.sin(l*1.4)*.04,r.scale.setScalar(1+Math.sin(l*3)*.12),o.rotation.set(Math.sin(l*.8)*.12,l*1.2,Math.cos(l*.6)*.1),o.position.y=.9+Math.sin(l*1.7)*.02,so(a,.9+.3*(.5+.5*Math.sin(l*3)))},fire(){}}}},spellbook:{name:"Spellbook Turret",tier:0,build(n,e=0,{demo:t=!1}={}){let i=new Oe,s=Jp(t,.6),r=gi(i,0,.08,0);r.add(n("spellbook_sigil"));let o=gi(i,0,.6,0);o.add(n("spellbook_book"));let a=gi(i,0,.6,0);a.add(n("spellbook_runes"));let l=_a(i);return ya(i,.36),{root:i,fire:s.fire,tick(c){c+=e;let{d:u}=s.at(c),h=u*u,d=.6+Math.sin(c*1.3)*.04;o.position.set(0,d,-.1*h),o.rotation.set(Math.sin(c*.7)*.03+.25*h,Math.sin(c*.5)*.08,Math.sin(c*.9)*.04),a.position.y=d+Math.sin(c*2)*.02,a.rotation.y=c*.9+5*(1-(1-u)*(1-u))*(u>0?1:0),a.scale.setScalar(1+.35*h),r.rotation.y=-c*.6,r.scale.setScalar(1+.5*h),so(l,.9+.2*Math.sin(c*2.4)+1.6*h)}}}},bellstone:{name:"Bellstone",tier:0,build(n,e=0,{demo:t=!1}={}){let i=new Oe,s=Jp(t,1.4);i.add(n("bellstone_feet"));let r=gi(i,0,.07,0);r.add(S_(n("bellstone"),0,-.07,0));let o=gi(i,0,.34,0);o.add(n("bellstone_bands"));let a=_a(i);return ya(i,.38),{root:i,fire:s.fire,tick(l){l+=e;let{age:c,d:u}=s.at(l);r.rotation.z=Math.sin(l*1.6)*.012+.16*u*u*Math.sin(Math.max(c,0)*22),r.rotation.x=.1*u*u*Math.sin(Math.max(c,0)*17+1),o.position.y=.34+Math.sin(l*1.5)*.015+.03*u,o.rotation.y=l*.8+3*(1-u)*(u>0?1:0);let h=u>0?1+.45*Math.sin((1-u)*Math.PI):1;o.scale.set(h,1,h),so(a,.9+.15*Math.sin(l*2.2)+1.3*u)}}}}},X3=Object.keys(Hh);function Zl(n,e,{y:t=.32,spin:i=1.2,shadowR:s=.16,extra:r}={}){return{name:n,build(o,a=0,{demo:l=!1}={}){let c=new Oe,u=Jp(l,.3),h=gi(c,0,t,0),d=gi(h,0,0,0);d.add(o(e));let f=_a(d);ya(c,s);let m=r?.(d,h,o);return{root:c,fire:u.fire,tick(y){y+=a;let{age:p,d:g}=u.at(y);h.position.y=t+Math.sin(y*2)*.05,d.rotation.y=y*i,m?.tick(y,d,h),so(f,.9+.3*Math.sin(y*3.2));let v=g>0?(1+.8*(1-g))*g:1;c.scale.setScalar(v),g>0&&so(f,2.2)}}}}}var jp={heart:Zl("Heart","pickup_heart",{extra:()=>({tick(n,e){let t=Math.pow(Math.max(0,Math.sin(n*6)),3);e.scale.setScalar(1+.14*t)}})}),shield:Zl("Ward Bubble","pickup_shield",{spin:0,extra:()=>({tick(n,e){e.rotation.set(n*.7,n*1.1,n*.5)}})}),magnet:Zl("Soul Draw","pickup_magnet",{extra:()=>({tick(n,e){e.rotation.z=Math.sin(n*1.6)*.25}})}),hourglass:Zl("Stillwater","pickup_hourglass",{spin:.6,extra:()=>({tick(n,e){let t=n/4%1,i=Math.floor(n/4),s=t>.8?(t-.8)/.2:0;e.rotation.z=Math.PI*(i+s*s*(3-2*s))}})}),parcel:Zl("Parcel","pickup_parcel",{y:.26,extra:()=>({tick(n,e){let t=n/3%1,i=t<.25?Math.sin(t/.25*Math.PI*3)*(1-t/.25):0;e.rotation.z=i*.18,e.scale.set(1+i*.04,1-i*.04,1+i*.04)}})})},q3=Object.keys(jp);var Nn=["lure_paper","lure_brass","lure_spirit","spellbook","bellstone"],mw=n=>n.startsWith("lure_"),tm=()=>Object.fromEntries(Nn.map(n=>[n,0])),xe={inv:tm(),bubble:0,freeze:0,magnet:0,pickups:[],lures:[],turrets:[],pity:0},Jn={walk:(n,e)=>e,popup:()=>{},toast:()=>{}},nm=tr(7),ar=new Oe;ar.name="loot";$e.add(ar);var w_=1,gw=n=>hn[n].clone(!0),Qp={pickup:2.2,lure:1.7,turret:1.8},va=new ze(new fs(.7,2),new ht({color:10475775,transparent:!0,opacity:.24,depthWrite:!1})),Ma=new ze(new fs(.7,1),new ht({color:15720703,wireframe:!0,transparent:!0,opacity:.35,depthWrite:!1}));va.visible=Ma.visible=!1;$e.add(va,Ma);function im(){return xe.bubble?!1:(xe.bubble=1,tt("bubble_gained",{}),!0)}function A_(){return xe.bubble?(xe.bubble=0,x.invuln=Math.max(x.invuln,D.player.bubbleInvuln),x.shake=Math.max(x.shake,.2),x.flash=.25,Ht(x.pos.x,.8,x.pos.y,{n:30,color:10475775,speed:4.5,up:1.5,life:.6,spread:1}),Ht(x.pos.x,.8,x.pos.y,{n:10,color:16777215,speed:2,up:3,life:.5,size:2}),Jn.popup(x.pos,Ee.bag.popped,!1),Je.pop(),tt("bubble_popped",{}),!0):!1}function Rs(n){for(let e of n)ar.remove(e.node);n.length=0}function R_(n=1){Rs(xe.pickups),Rs(xe.lures),Rs(xe.turrets),xe.inv=tm(),xe.bubble=0,xe.freeze=0,xe.magnet=0,xe.pity=0,w_=1,nm.seed((n>>>0^1374490631)>>>0)}function Gh(){Rs(xe.pickups),Rs(xe.lures),Rs(xe.turrets),xe.freeze=0,xe.magnet=0}var C_=()=>({inv:{...xe.inv},bubble:xe.bubble});function I_(n){Rs(xe.pickups),Rs(xe.lures),Rs(xe.turrets),xe.freeze=0,xe.magnet=0,xe.inv=n?{...n.inv}:tm(),xe.bubble=n?n.bubble:0}var P_=()=>Nn.reduce((n,e)=>n+xe.inv[e],0);function em(n,e,t,i,s={}){let r=w_++,o=n.build(gw,r*1.7,s.opts),a=new Oe;a.add(o.root);let l=new ze(new Si(.3,.4,20),new ht({color:i?Ne.lavender:Ne.amber,transparent:!0,opacity:.45,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.y=.04,a.add(l),a.position.set(t.x,0,t.y),a.scale.setScalar(s.scale||1),ar.add(a),{id:r,model:e,pos:t.clone(),realm:i,rig:o,node:a,ring:l,...s}}function sm(n,e,t,i=x.realm,s=null){let r=em(jp[n],n,new se(e,t),i,{kind:n,item:s,life:D.items.pickupLife,scale:Qp.pickup});return xe.pickups.push(r),tt("pickup_spawned",{id:r.id,kind:n,item:s,realm:i}),r}function E_(n){let e=Object.keys(n),t=0;for(let s of e)t+=n[s];let i=nm()*t;for(let s of e)if(i-=n[s],i<=0)return s;return e[e.length-1]}function Vh(n,e={}){if(x.mode!=="night"&&x.mode!=="endless")return null;let t=D.items.drop,i=(t.base+xe.pity)*(D.difficulty.loot??1);if(nm()>=i)return xe.pity+=t.pity,null;xe.pity=0;let s={...t.weights};x.hp>=D.player.maxHp&&(s.heart*=.2),xe.bubble&&(s.shield*=.2),e.souls||(s.magnet=0);let r=E_(s);return sm(r,n.pos.x,n.pos.y,x.realm,r==="parcel"?E_(t.parcel):null)}function xw(n){let e=Ee.bag;switch(n.kind){case"heart":if(x.hp>=D.player.maxHp)return!1;x.hp+=1,Jn.popup(n.pos,e.heart,!1);break;case"shield":if(!im())return!1;Jn.popup(n.pos,e.shield,!1);break;case"magnet":xe.magnet=D.items.magnet.time,Jn.popup(n.pos,e.magnet,!1);break;case"hourglass":xe.freeze=Math.max(xe.freeze,D.items.hourglass.time),x.flash=.3,Jn.popup(n.pos,e.hourglass,!0);break;case"parcel":if(xe.inv[n.item]>=D.items.cap)return!1;xe.inv[n.item]+=1,Jn.popup(n.pos,yn(e.got,{item:Ee.items[n.item].name}),!0);break}return Ht(n.pos.x,.5,n.pos.y,{n:16,color:Ne.amber,speed:2.5,up:2.5,life:.6}),Je.pickup(),tt("pickup_collected",{id:n.id,kind:n.kind,item:n.item}),!0}function ba(n){if(x.state!=="playing"||!(xe.inv[n]>0))return!1;let e=D.items;if(mw(n)){if(xe.lures.length>=e.lure.maxActive)return Jn.toast(Ee.bag.tooMany,1.5),!1;let t=x.pos.clone().addScaledVector(x.facing,e.lure.offset),i=Jn.walk(x.pos.clone(),t,x.realm),s=em(Hh[n],n,i,x.realm,{hp:e.lure[n].hp,max:e.lure[n].hp,range:e.lure[n].range,scale:Qp.lure});xe.lures.push(s),Ht(i.x,.5,i.y,{n:12,color:Ne.amber,speed:1.5,up:2,life:.5})}else{let t=n==="spellbook"?e.spellbook:e.bellstone,i=em(Hh[n],n,x.pos,x.realm,{opts:{demo:!1},scale:Qp.turret,life:t.life,next:n==="spellbook"?.5:.2});xe.turrets.push(i)}return xe.inv[n]-=1,Je.drop(),tt("item_used",{id:n,realm:x.realm}),!0}function L_(n,e=1){xe.inv[n]=Math.min(D.items.cap,(xe.inv[n]||0)+e)}function N_(n){if(!xe.lures.length||n.kind==="choir"&&n.shield>0)return null;let e=null,t=1/0;for(let i of xe.lures){if(i.realm!==n.realm)continue;let s=i.pos.distanceTo(n.pos);s<i.range&&s<t&&(t=s,e=i)}return e}function Wh(n,e){n.hp<=0||(n.hp-=e,n.hit=.15,n.hp<=0&&(Ht(n.pos.x,.5,n.pos.y,{n:22,color:16758875,speed:3,up:3,life:.7}),Ht(n.pos.x,.5,n.pos.y,{n:8,color:16777215,speed:2,up:4,life:.4,size:2}),tt("lure_broken",{id:n.id,model:n.model})))}function T_(n,e,t,i){for(let s of Ue.enemies){if(s.realm!==n.realm||s.ward||s.spawn>0||s.dead)continue;let r=s.pos.x-n.pos.x,o=s.pos.y-n.pos.y,a=Math.hypot(r,o);if(a>e)continue;let l=t*(.45+.55*(1-a/e)),c=a>.01?r/a:1,u=a>.01?o/a:0;s.pos.copy(Jn.walk(s.pos.clone(),new se(s.pos.x+c*l,s.pos.y+u*l),s.realm)),s.stun=Math.max(s.stun||0,i),s.pulse&&(s.pulse=null)}for(let s of Ue.projectiles)s.realm===n.realm&&s.pos.distanceTo(n.pos)<e&&(s.life=0);for(let s=0;s<28;s++){let r=s/28*Math.PI*2;Ht(n.pos.x+Math.cos(r)*.5,.3,n.pos.y+Math.sin(r)*.5,{n:1,color:6287576,speed:5,up:.4,life:.5,grav:0,vx:Math.cos(r)*4,vz:Math.sin(r)*4})}n.rig.fire()}var rI=new se;function D_(n){let e=D.items;xe.freeze=Math.max(0,xe.freeze-n),xe.magnet=Math.max(0,xe.magnet-n);for(let t of[...xe.pickups]){if(t.life-=n,t.life<=0){ar.remove(t.node),xe.pickups.splice(xe.pickups.indexOf(t),1);continue}!t.taken&&t.realm===x.realm&&t.pos.distanceTo(x.pos)<e.pickupRadius&&xw(t)&&(t.rig.fire(),t.life=Math.min(t.life,.3),t.taken=!0)}for(let t of[...xe.lures])t.hit>0&&(t.hit-=n),t.hp<=0&&(ar.remove(t.node),xe.lures.splice(xe.lures.indexOf(t),1));for(let t of[...xe.turrets])t.life-=n,t.model==="spellbook"?(t.next-=n,t.next<=0&&t.life>.3&&(t.next=e.spellbook.interval,T_(t,e.spellbook.radius,e.spellbook.push,e.spellbook.stun),Je.pulse(),tt("turret_pulse",{id:t.id}))):t.next!==null&&(t.next-=n,t.next<=0&&(t.next=null,T_(t,e.bellstone.radius,e.bellstone.push,e.bellstone.stun),Je.toll(),x.shake=Math.max(x.shake,.25),tt("bellstone_tolled",{id:t.id}))),t.life<=0&&(ar.remove(t.node),xe.turrets.splice(xe.turrets.indexOf(t),1))}var _w=new Set(["playing","paused","tutorial","relic","bag","won","lost"]);function U_(n,e){ar.visible=_w.has(x.state);let t=s=>{let r=s.realm===x.realm;return s.rig.root.visible=r,s.ring.visible=!r,r};for(let s of xe.pickups)t(s),s.rig.tick(e),s.taken||(s.node.visible=s.life>yw()||Math.sin(e*18)>-.2);for(let s of xe.lures)t(s),s.rig.tick(e),s.rig.root.scale.setScalar(.55+.45*Math.max(.15,s.hp/s.max)+(s.hit>0?.06:0));for(let s of xe.turrets)t(s),s.rig.tick(e);let i=xe.bubble>0;if(va.visible=Ma.visible=i,i){let s=1+Math.sin(e*3)*.03;va.position.set(x.pos.x,.85,x.pos.y),Ma.position.copy(va.position),va.scale.setScalar(s),Ma.scale.setScalar(s),Ma.rotation.y=e*.6}}var yw=()=>D.items.pickupFade;var It={on:!1,loc:null,left:0,warned:!1,bag:[],rng:null,shifts:0},Xh={first:[45,60],span:[45,75],warn:4,grace:1.5};function O_(){let n=pi.map(e=>e.id);for(let e=n.length-1;e>0;e--){let t=It.rng.int(e+1);[n[e],n[t]]=[n[t],n[e]]}n[0]===It.loc?.id&&n.push(n.shift()),It.bag=n}var F_=([n,e])=>n+It.rng()*(e-n);function k_(n){Object.assign(It,{on:!1,loc:null,left:0,warned:!1,bag:[],shifts:0,rng:tr((n^8279969)>>>0)})}function B_(){It.on=!0,z_(pi[0],!0),It.left=F_(Xh.first)}function z_(n,e=!1){if(It.loc=n,It.warned=!1,no(n),$r(n.id),!e){[...Ue.enemies].forEach(Ji);for(let t of Ue.projectiles)$e.remove(t.node);Ue.projectiles=[],Gh(),x.pos.set(n.start[0],n.start[1]),x.facing.set(n.facing[0],n.facing[1]),x.realm=0,x.dashRemaining=0,x.dashCd=0,x.dashHit.clear(),x.invuln=Math.max(x.invuln,Xh.grace),x.spawnClock=1.2,x.shake=Math.max(x.shake,.5),It.shifts++}}function H_(n){if(!It.on)return null;if(It.left-=n,!It.warned&&It.left<=Xh.warn){It.warned=!0,x.shake=Math.max(x.shake,.2),It.bag.length||O_();let e=pi.find(t=>t.id===It.bag[0]);return yn(Ee.overtime.warn,{place:e.name})}if(It.left<=0){It.bag.length||O_();let e=It.bag.shift(),t=pi.find(i=>i.id===e);return z_(t),It.left=F_(Xh.span),yn(Ee.overtime.arrive,{place:t.name})}return null}var zn=n=>document.getElementById(n),ot={hearts:zn("hearts"),clock:zn("clock"),phase:zn("phase"),bar:zn("barfill"),lantern:zn("lanternbox"),realm:zn("realm"),score:zn("score"),combo:zn("combo"),overlay:zn("overlay"),note:zn("note"),pops:zn("pops"),pause:zn("pausebtn"),cross:zn("crossbtn"),bag:zn("bagbtn")},q_=0,Jl="",Yh=()=>(performance.now()-q_)/1e3;function on(n,{interactive:e=!1,cls:t=""}={}){q_=performance.now(),Jl&&ot.overlay.classList.remove(Jl),Jl=n?t:"",Jl&&ot.overlay.classList.add(Jl),ot.overlay.innerHTML=n||"",ot.overlay.classList.toggle("show",!!n),ot.overlay.classList.toggle("interactive",!!n&&e),document.body.classList.toggle("menu",!!n)}var jl=0,qh=0;function Sa(n,e=4){clearTimeout(qh),ot.note.innerHTML=`<span class="kit-banner note-toast">${n}</span>`,ot.note.classList.remove("tip"),ot.note.classList.add("show"),jl=e}function Y_(n){let e=Ee.hud;clearTimeout(qh),ot.note.innerHTML=`<div class="kit-panel note-tip"><span class="spr-portrait note-face"></span>
    <div class="note-body"><div class="note-text">${n}</div>
    <div class="tip-prompt" hidden>${zh(e.continueKey,e.continueTap,e.continueSuffix)}</div></div></div>`,ot.note.classList.add("show","tip"),jl=0,qh=setTimeout(()=>{let t=ot.note.querySelector(".tip-prompt");t&&(t.hidden=!1)},dh)}function Ql(){clearTimeout(qh),ot.note.classList.remove("show"),jl=0}function $_(n){jl>0&&(jl-=n)<=0&&ot.note.classList.remove("show")}function cm(){let n=(Cl-x.timeLeft)/Cl*180,e=9+Math.floor(n/60),t=Math.floor(n%60),i=e>=12?"AM":"PM";return e>12&&(e-=12),`${e}:${String(t).padStart(2,"0")} ${i}`}var rm=Ee.phases.map(n=>[n.until,n.label]);function vw(){let n=K_();return n||(x.mode==="night"&&at.level?at.phase==="intermission"?yn(Ee.rounds.next,{s:Math.max(1,Math.ceil(D.night.intermission-at.waited))}):yn(Ee.rounds.label,{n:at.round+1,total:io()}):x.mode==="endless"&&It.loc?It.loc.name.toUpperCase():(rm.find(e=>x.elapsed<e[0])||rm[rm.length-1])[1])}var om=new I;function um(n,e,t){om.set(n,e,t).project(Yn);let i=zr.getBoundingClientRect();return[i.left+(om.x*.5+.5)*i.width,i.top+(-om.y*.5+.5)*i.height]}function $h(n,e,t){let i=document.createElement("div");i.className="pop"+(t?" big":""),i.innerHTML=e;let[s,r]=um(n.x,1.8,n.y);i.style.left=s+"px",i.style.top=r+"px",ot.pops.appendChild(i),setTimeout(()=>i.remove(),900)}var am=-1,G_=-1,V_=-1,W_=-1,X_="",lm=n=>`<span class="spr-${n}"></span>`;function Cs(){(am!==x.hp||W_!==xe.bubble)&&(ot.hearts.innerHTML=Array.from({length:D.player.maxHp},(s,r)=>lm(r<x.hp?"heart":"heart_empty")).join("")+(xe.bubble?'<span class="bubpip"></span>':""),W_=xe.bubble,am>x.hp&&(ot.hearts.classList.remove("shake"),ot.hearts.offsetWidth,ot.hearts.classList.add("shake")),am=x.hp);let n=`${Ee.bag.button} ${P_()}`;n!==X_&&(X_=n,ot.bag.textContent=n,ot.bag.classList.toggle("on",!!n)),ot.clock.textContent=cm(),ot.phase.textContent=vw();let e=x.dashCd<=0&&x.dashRemaining<=0,t=1-x.dashCd/Qg,i=Math.round(6*t);i!==G_&&(G_=i,ot.bar.innerHTML=Array.from({length:6},(s,r)=>lm(r<i?"seg_on":"seg_off")).join("")),ot.lantern.classList.toggle("ready",e),ot.cross.classList.toggle("ready",e),ot.cross.style.setProperty("--cd",t*360+"deg"),ot.cross.classList.toggle("spirit",x.realm===1),V_!==x.realm&&(V_=x.realm,ot.realm.innerHTML=lm(x.realm?"tag_spirit":"tag_living")),ot.score.textContent=String(x.score).padStart(6,"0"),ot.combo.textContent=yn(Ee.hud.chain,{n:x.combo}),ot.combo.classList.toggle("show",x.combo>1)}var H={on:!1,index:0,relics:[],phase:"play",entry:null,level:null,t:0,pending:null,armed:!1,holding:!1,wards:[],wave:0,waveN:0,queued:0,wait:0,spawned:0,souls:{carried:0,banked:0,orbs:[],lock:0},boss:null,attacks:[],props:null},Z_=[{id:"watch",name:()=>Ee.campaign.watch,desc:()=>Ee.campaign.watchDesc},{id:"key",name:()=>Ee.campaign.key,desc:()=>Ee.campaign.keyDesc},{id:"flowers",name:()=>Ee.campaign.flowers,desc:()=>Ee.campaign.flowersDesc}],dm=[{n:12,size:4,gap:2.5,intra:.18,speed:1.3,dps:5},{n:20,size:5,gap:1.8,intra:.18,speed:1.5,dps:6},{n:30,size:6,gap:1.8,intra:.18,speed:1.7,dps:7},{n:38,size:6,gap:1.6,intra:.18,speed:1.85,dps:8},{n:46,size:7,gap:1.5,intra:.16,speed:2,dps:9}],J_=()=>H.relics.includes("watch")?D.campaign.relicWatch:1,pm=()=>H.relics.includes("key")?D.campaign.relicKey:1,j_=()=>H.level?.kind==="souls"?D.campaign.soulSpeed*Math.min(H.souls.carried,D.campaign.soulSpeedCap):0,Li=()=>pi[H.index],Q_=()=>{let n=Li()?.exit;return!n||H.phase!=="exit"?!1:Math.hypot(x.pos.x-n[0],x.pos.y-n[1])<=D.campaign.exitRadius};function ey(){[...Ue.enemies].forEach(Ji);for(let n of Ue.projectiles)$e.remove(n.node);Ue.projectiles=[];for(let n of H.souls.orbs)$e.remove(n.node);H.souls={carried:0,banked:0,orbs:[],lock:0},H.boss=null,H.attacks=[],H.wards=[]}function Kh(n=!0){let e=Li();H.level=e,H.phase="play",H.armed=!1,H.t=0,H.pending=null,H.holding=!1,no(e),ey(),Gh(),x.realm=0,x.combo=0,x.comboTimer=0,x.dashCd=0,x.dashRemaining=0,x.invuln=0,x.dashHit.clear(),x.pos.set(e.start[0],e.start[1]),x.facing.set(e.facing[0],e.facing[1]),x.state!=="tutorial"&&(x.state="playing"),kh(),e.kind==="rounds"?h_({id:e.id,name:e.name,rounds:e.rounds}):e.kind==="wards"?Mw():e.kind==="souls"?bw():Sw(),n&&(H.entry={index:H.index,hp:x.hp,score:x.score,relics:[...H.relics],banished:x.banished,loot:C_()}),$r(e.id),tt("level_started",{id:e.id,index:H.index+1})}function ty(){H.on=!0,H.index=0,H.relics=[],x.hp=D.player.maxHp,x.score=0,x.banished=0,Kh(!0)}function tc(){if(!H.on||!H.entry)return!1;let n=H.entry;return H.index=n.index,H.relics=[...n.relics],x.hp=n.hp,x.score=n.score,x.banished=n.banished,Kh(!1),I_(n.loot),H.entry=n,!0}function fm(){H.phase="relic",x.state="relic";let n=Z_.filter(t=>t.id==="flowers"||!H.relics.includes(t.id)),e=Ee.campaign;on(`
    <div class="kit-panel res-panel" role="dialog" aria-label="${e.relicTitle}">
      <div class="kit-head"><span class="kit-divider"></span><h2>${e.relicTitle}</h2><span class="kit-divider"></span></div>
      <div class="res-actions">
        ${n.map(t=>`<button type="button" class="kit-btn" data-relic="${t.id}">${t.name()}<br><span class="tiny">${t.desc()}</span></button>`).join("")}
      </div>
    </div>`,{interactive:!0,cls:"results"}),document.querySelectorAll("[data-relic]").forEach(t=>t.addEventListener("click",()=>ec(t.dataset.relic))),tt("relic_offered",{options:n.map(t=>t.id)}),Cs()}function ec(n){return H.phase!=="relic"||n!=="flowers"&&H.relics.includes(n)||!Z_.some(e=>e.id===n)?!1:(n==="flowers"?im()||(x.hp=Math.min(D.player.maxHp,x.hp+1)):H.relics.push(n),tt("relic_selected",{id:n,hp:x.hp}),H.phase="exit",x.state="playing",on(null),H.armed=!Q_(),tt("exit_unlocked",{level:Li().id}),Cs(),!0)}var ny=()=>H.on?H.level:t_();function Ea(){let n=ny();return!!(n&&(n.portals||n.portalsNS||n.walls||n.solids))}var iy=()=>{let n=ny();return!!(n&&(n.walls||n.solids))};function sy(){H.on=!1,H.level=null,H.phase="play",H.pending=null,H.relics=[],no(null),ey(),$r("old_churchyard")}function ry(n){let e=pi.findIndex(t=>t.id===n);return e<0?!1:(H.on=!0,H.index=e,x.mode="night",Kh(!0),!0)}function hm(){return tt("level_completed",{id:Li().id}),H.index>=pi.length-1?"win":(H.index+=1,Kh(!0),null)}function Mw(){H.wards=Xr.map(([n,e],t)=>({id:t,x:n,z:e,hp:D.campaign.wardHp,alive:!0})),H.wave=0,H.spawned=0,H.queued=0,H.wait=0,H.bonusPaid=!1,oy(0)}function oy(n){let e=dm[n];H.wave=n,H.waveN=Math.max(e.size,Math.round(e.n*D.difficulty.count)),H.spawned=0,H.queued=H.waveN,H.queueAt=.4,H.groupLeft=e.size,H.holding=!1}function bw(){H.souls={carried:0,banked:0,orbs:[],lock:0,next:2};for(let[n,e]of[[-3.6,2.4],[3.6,2.4],[0,-4.2]])rn({wisp:!1,realm:1,pos:new se(n,e)});for(let n=0;n<6;n++){let e=n/6*Math.PI*2+.5;rn({wisp:!1,realm:n%2,pos:new se(Math.cos(e)*8.2,Math.sin(e)*6.2)})}}function Sw(){H.boss={hp:D.campaign.bossHp,realm:1,cd:2,hitThisDash:!1},H.attacks=[];for(let n=0;n<4;n++)rn({wisp:!1,realm:n%2,pos:new se(Math.cos(n)*4,Math.sin(n)*3)})}function ay(n,e){let t=hn.soul_orb?hn.soul_orb.clone(!0):new ze(new al(.18,8,6),new ht({color:12165608}));return t.position.set(n,.1,e),t.userData.soul=!0,$e.add(t),t}function ly(n){if(Li()?.kind!=="souls"||x.hp<=0)return;let e=ay(n.pos.x,n.pos.y);H.souls.orbs.push({x:n.pos.x,z:n.pos.y,node:e,id:n.id})}function cy(){let n=H.souls;if(Li()?.kind!=="souls"||n.carried<=0)return;let e=n.carried;n.carried=0,n.lock=D.campaign.soulScatterLock;for(let t=0;t<e;t++){let i=t/e*Math.PI*2,s=dt.clamp(x.pos.x+Math.cos(i)*1.4,-D.arena.x+1,D.arena.x-1),r=dt.clamp(x.pos.y+Math.sin(i)*1.4,-D.arena.z+1,D.arena.z-1);n.orbs.push({x:s,z:r,node:ay(s,r),id:`s${t}`})}}function Ew(n){let e=H.souls;if(e.lock=Math.max(0,e.lock-n),xe.magnet>0&&e.lock<=0)for(let t of e.orbs){let i=x.pos.x-t.x,s=x.pos.y-t.z,r=Math.hypot(i,s);if(r>.01){let o=Math.min(r,D.items.magnet.speed*n)/r;t.x+=i*o,t.z+=s*o,t.node.position.set(t.x,.1,t.z)}}if(e.lock<=0)for(let t of[...e.orbs])Math.hypot(t.x-x.pos.x,t.z-x.pos.y)<=D.campaign.soulPickup&&(e.carried+=1,$e.remove(t.node),e.orbs=e.orbs.filter(i=>i!==t));if(e.carried>0&&Math.hypot(x.pos.x,x.pos.y)<=D.campaign.shrineRadius&&(x.score+=e.carried*D.campaign.soulScore,e.banked+=e.carried,e.carried=0,tt("souls_banked",{banked:e.banked}),e.banked>=D.campaign.soulGoal)||e.banked>=D.campaign.soulGoal)return"clear";if(e.next-=n,e.next<=0&&Ue.enemies.length<D.campaign.soulCap){let t=Ct.int(4),i=new se(Ct.range(-1,1)*8,Ct.range(-1,1)*6);t===0?i.x=-8:t===1?i.x=8:t===2?i.y=-6:i.y=6;let s=H.t>25?2:1;for(let r=0;r<s&&Ue.enemies.length<D.campaign.soulCap;r++)rn({wisp:!1,kind:H.t>20&&Ct.chance(.3)?"moth":void 0,pos:i.clone()});e.next=Math.max(.7,2.2-H.t*.012)/D.difficulty.count}return null}function Tw(n){if(!H.wards.some(t=>t.alive))return"lose";if(H.wait>0)return H.wait-=n,H.wait<=0&&oy(H.wave+1),null;if(H.queued>0&&(H.queueAt-=n,H.queueAt<=0)){let t=dm[H.wave],i=new se(Ct.range(-6,6),Ct.range(-2,5)),s=rn({wisp:!1,realm:H.spawned%2,pos:i});s.ward=!0,s.wardSpeed=t.speed*D.difficulty.wardSpeed,s.dps=t.dps*D.difficulty.wardDps,s.atk=.45,H.spawned+=1,H.queued-=1,H.groupLeft-=1,H.queueAt=H.groupLeft>0?t.intra:t.gap,H.groupLeft<=0&&(H.groupLeft=t.size)}if(H.spawned>=H.waveN&&H.queued<=0&&Ue.enemies.length===0){if(H.wave>=dm.length-1){if(!H.bonusPaid){let t=H.wards.filter(i=>i.alive).length;x.score+=t*D.campaign.wardBonus,H.bonusPaid=!0,tt("ward_bonus",{alive:t,score:x.score})}return"clear"}H.holding||(H.wait=D.night.intermission,H.holding=!0)}return null}function uy(n,e){let t=H.wards.filter(o=>o.alive);if(!t.length)return;t.sort((o,a)=>(o.x-n.pos.x)**2+(o.z-n.pos.y)**2-((a.x-n.pos.x)**2+(a.z-n.pos.y)**2)||o.id-a.id);let i=t[0],s=new se(i.x-n.pos.x,i.z-n.pos.y),r=s.length()||1;n.pos.addScaledVector(s.multiplyScalar(1/r),n.wardSpeed*e),r>=D.campaign.wardAttack?n.atk=.45:(n.atk=Math.max(0,(n.atk??.45)-e),n.atk<=0&&(i.hp=Math.max(0,i.hp-n.dps*e),i.hp<=0&&i.alive&&(i.alive=!1,tt("ward_destroyed",{id:i.id}))))}function ww(){let n=(H.boss?.hp??0)/D.campaign.bossHp;return n>=.75?0:n>=5/12?1:2}function Aw(n){let e=H.boss;if(!e||e.hp<=0)return null;if(e.cd-=n,e.cd<=0){let t=ww(),i=t===0||Ct.chance(.5)?"ring":"strike";H.attacks.push({kind:i,realm:x.realm,age:0,hit:!1,x:x.pos.x,z:x.pos.y,r:0}),e.cd=[3.4,2.8,2.2][t]*D.difficulty.bossCd;let s=Math.round(4*D.difficulty.count);if(Ue.enemies.length<s){let r=Math.min(s,s+3-Ue.enemies.length),o=t>=1&&!Ue.enemies.some(a=>a.kind==="bell");for(let a=0;a<r;a++)rn({wisp:!1,kind:o&&a===0?"bell":void 0,realm:a%2,pos:new se(Math.cos(a)*4,Math.sin(a)*3)})}}for(let t of H.attacks)if(t.age+=n,t.kind==="ring"){t.age>.85&&(t.r+=6*n);let i=t.r-6*n,s=Math.hypot(x.pos.x,x.pos.y);if(!t.hit&&t.age>.85&&s<=t.r+.4&&s>=i-.4&&x.realm===t.realm&&x.invuln<=0&&x.dashRemaining<=0)return t.hit=!0,"hurt"}else if(!t.hit&&t.age>=.85&&t.age<=1.05&&Math.hypot(x.pos.x-t.x,x.pos.y-t.z)<=1.8&&x.realm===t.realm&&x.invuln<=0&&x.dashRemaining<=0)return t.hit=!0,"hurt";return H.attacks=H.attacks.filter(t=>t.age<(t.kind==="ring"?4:1.2)),null}function hy(){let n=H.boss;return!n||n.hp<=0||x.realm!==n.realm||n.hitThisDash?!1:(n.hitThisDash=!0,n.hp-=1,n.realm=1-n.realm,x.score+=D.campaign.bossScore,tt("boss_hit",{hp:n.hp,realm:n.realm}),n.hp<=0?([...Ue.enemies].forEach(Ji),H.attacks=[],tt("boss_defeated",{}),H.pending="clear","dead"):!0)}function dy(n){if(!H.on||x.mode!=="night"||H.phase==="relic")return null;if(H.t+=n,H.pending==="clear")return H.pending=null,Li()?.relic?(fm(),null):hm();if(H.phase==="exit"){if(!Q_())H.armed=!0;else if(H.armed)return hm();return null}let e=Li();if(!e||e.kind==="rounds")return null;let t=null;return e.kind==="wards"?t=Tw(n):e.kind==="souls"?t=Ew(n):e.kind==="boss"&&(t=Aw(n)),t==="hurt"?"hurt":t==="lose"?"lose":t==="clear"?e.relic?(fm(),null):hm():null}function fy(){let n=Li();return!H.on||!n?.relic?"win":(fm(),null)}function K_(){if(!H.on||x.mode!=="night")return null;let n=Ee.campaign,e=Li();return e?H.phase==="exit"?n.exitHint:e.kind==="souls"?`${e.name}  ${n.souls.replace("{have}",H.souls.banked).replace("{need}",D.campaign.soulGoal)}`:e.kind==="wards"?`${e.name}  ${n.wards.replace("{n}",H.wards.filter(t=>t.alive).length)}`:e.kind==="boss"&&H.boss?`${e.name}  ${n.boss.replace("{hp}",H.boss.hp)}`:at.level?null:e.name:null}function py(n){if(x.state!=="relic")return!1;let e=[...document.querySelectorAll("[data-relic]")],t=n==="Digit1"?0:n==="Digit2"?1:n==="Digit3"?2:-1;if(t>=0&&e[t])return ec(e[t].dataset.relic);if(n==="Enter"||n==="Space"){let i=e[0];if(i)return ec(i.dataset.relic)}return!1}function my(){return{on:H.on,index:H.index,phase:H.phase,relics:[...H.relics],level:Li()?.id||null,hp:x.hp,score:x.score,souls:H.souls?{carried:H.souls.carried,banked:H.souls.banked,orbs:H.souls.orbs.length}:null,boss:H.boss?{hp:H.boss.hp,realm:H.boss.realm}:null,wards:H.wards.map(n=>n.hp)}}var Rw=new ge(16758875),Cw=new ge(8250367),ro={};function Iw(n,e){let t=n+","+e;if(ro[t])return ro[t];let i=new Oe;i.visible=!1,i.position.set(n,0,e),$e.add(i);let s=new ze(new Si(.95,1.25,24),new ht({color:16758875,transparent:!0,opacity:.85,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.05,i.add(s);let r=new ze(new bi(.95,24),new ht({color:16758875,transparent:!0,opacity:.18,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.04,i.add(r),Vt(i,0,.6,0,{color:16758875,size:3.2,kind:"magic",opacity:.5}),Qs(i,n,.1,e,{rate:14,color:16769690,color2:16751164,r:1.1,rise:1.4,w:2.4,life:1.6}),ro[t]={g:i,ring:s}}var yy=new Qt(1,1);function vy(){return new $t({uniforms:{color:{value:new ge},alpha:{value:1},r:{value:1},w:{value:.8},fill:{value:0},size:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 color; uniform float alpha, r, w, fill, size; varying vec2 vUv;
      void main(){ float d = length(vUv - 0.5) * size;                           // world-space distance from the centre
        float band = step(r - w * 0.5, d) * step(d, r + w * 0.5);             // the hit band
        float disc = step(d, r * fill) * 0.35;                                // charging fill
        float edge = step(r - 0.08, d) * step(d, r + 0.08) * 0.6;             // thin outline
        float a = max(band, max(disc, edge)) * alpha; if (a < 0.01) discard;
        gl_FragColor = vec4(color * (1.0 + band * 0.6), a); }`,transparent:!0,depthWrite:!1,blending:Ws})}var Ta=[];function Pw(n){for(;Ta.length<=n;){let e=new ze(yy,vy());e.rotation.x=-Math.PI/2,e.position.y=.06,e.renderOrder=3,$e.add(e),Ta.push(e)}return Ta[n]}var gy=new ge(10474751),nc=[];function xy(n){for(;nc.length<=n;){let e=new ze(yy,vy());e.rotation.x=-Math.PI/2,e.position.y=.07,e.renderOrder=3,$e.add(e),nc.push(e)}return nc[n]}function Lw(n){let e=D.spirits.bell,t=(e.waveMax+1)*2,i=0;for(let s of Ue.enemies){if(s.kind!=="bell"||s.spawn>0)continue;let r=s.realm===x.realm;if(s.pulse){let o=xy(i++),a=o.material.uniforms;o.visible=!0,o.scale.set(t,t,1),o.position.set(s.pulse.x,.07,s.pulse.z),a.size.value=t,a.color.value.copy(gy),a.r.value=s.pulse.r,a.w.value=e.band*2,a.fill.value=0,a.alpha.value=(r?.85:.2)*(1-Math.pow(s.pulse.r/e.waveMax,3))}if(s.charge>0){let o=xy(i++),a=o.material.uniforms;o.visible=!0,o.scale.set(t,t,1),o.position.set(s.pos.x,.07,s.pos.y),a.size.value=t,a.color.value.copy(gy),a.r.value=e.waveMax,a.w.value=.06,a.fill.value=s.charge*.25,a.alpha.value=(r?.7:.15)*(.5+.5*Math.abs(Math.sin(n*14)))}}for(let s=i;s<nc.length;s++)nc[s].visible=!1}var Zh=[];function Nw(n){for(;Zh.length<=n;){let e=hn.soul_orb.clone(!0);e.scale.setScalar(.7),$e.add(e),Zh.push(e)}return Zh[n]}var jn={flash:0,dying:0,realm:-1},mm=0,gm=[];rr("level_started",n=>{jn={flash:0,dying:0,realm:-1},mm=0,gm.length=0;let e=Gl();e&&(e.root.visible=!0,e.root.scale.setScalar(1),e.root.position.y=0);for(let t in ro)ro[t].g.visible=!1});rr("boss_hit",()=>{jn.flash=1,ra(null,0,3,0,{n:24,color:15720703})});rr("boss_defeated",()=>{jn.dying=1e-4,ra(null,0,2.5,0,{n:60,color:8250367})});rr("souls_banked",()=>ra(null,0,1.2,0,{n:30,color:6287576}));rr("ward_destroyed",n=>{let e=H.wards[n.id];e&&ra(null,e.x,1.4,e.z,{n:40,color:16751164})});var _y=0;function My(n){Lw(n);let e=Math.min(.1,Math.max(0,n-_y));_y=n;let t=H.on?H.level:null;for(let a in ro)ro[a].g.visible=!1;if(t&&H.phase==="exit"){let a=Iw(t.exit[0],t.exit[1]);a.g.visible=!0,a.ring.scale.setScalar(1+Math.sin(n*3)*.06),a.ring.material.opacity=.7+Math.sin(n*3)*.15}t?.kind==="wards"&&H.wards.forEach((a,l)=>{let c=a.alive?a.hp>50?"intact":"damaged":"broken",u=gm[l];(!u||u.state!==c)&&Hl(l,c),u&&a.hp<u.hp&&n-(u.spark||0)>.3&&(ra(null,a.x,1,a.z,{n:5,color:16758875}),u.spark=n),gm[l]={state:c,hp:a.hp,spark:u?.spark||0}});let i=H.souls;for(let a of i?.orbs||[])a.node&&(a.node.position.y=.1+Math.sin(n*3+a.x)*.08,a.node.rotation.y=n*2+a.z);let s=t?.kind==="souls"?Math.min(12,i.carried):0;Zh.forEach((a,l)=>{a.visible=l<s});for(let a=0;a<s;a++){let l=Nw(a),c=n*2.2+a/s*Math.PI*2,u=.75+a%2*.15;l.visible=!0,l.position.set(x.pos.x+Math.cos(c)*u,.7+Math.sin(n*3+a)*.12,x.pos.y+Math.sin(c)*u)}let r=Gl(),o=H.boss;if(r&&t?.kind==="boss"){if(o&&o.realm!==jn.realm&&(r.setRealm(o.realm),jn.realm=o.realm),jn.flash>0){jn.flash=Math.max(0,jn.flash-e*3),r.rig.scale.setScalar(1.1*(1+jn.flash*.12));for(let l of r.glows)l.emissiveIntensity=1+jn.flash*3}else r.rig.scale.setScalar(1.1);if(jn.dying>0){jn.dying+=e/1.4;let l=Math.min(1,jn.dying);r.root.scale.setScalar(1-l*.6),r.root.position.y=-l*1.5,r.root.rotation.y=l*4,l>=1&&(r.root.visible=!1)}let a=H.attacks;a.length>mm&&a.some(l=>l.kind==="ring"&&l.age<.1)&&kx(),mm=a.length,a.forEach((l,c)=>{let u=Pw(c),h=u.material.uniforms,d=l.realm===x.realm;if(u.visible=!0,h.color.value.copy(l.realm?Cw:Rw),l.kind==="ring"){let f=Math.max(4,(l.r+1)*2.2);u.scale.set(f,f,1),u.position.set(0,.06,0),h.size.value=f,l.age<.85?(h.r.value=1.2+l.age/.85*.6,h.w.value=.15,h.fill.value=0,h.alpha.value=(.4+.6*Math.abs(Math.sin(l.age*12)))*(d?1:.3)):(h.r.value=Math.max(.3,l.r),h.w.value=.8,h.fill.value=0,h.alpha.value=(d?.9:.25)*Math.max(0,1-(l.age-.85)/3.2))}else u.scale.set(4.2,4.2,1),u.position.set(l.x,.06,l.z),h.size.value=4.2,h.r.value=1.8,h.w.value=l.age>=.85&&l.age<=1.05?3.6:.12,h.fill.value=Math.min(1,l.age/.85),h.alpha.value=(d?.9:.3)*(l.age>1.05?Math.max(0,1-(l.age-1.05)/.15):1)});for(let l=a.length;l<Ta.length;l++)Ta[l].visible=!1}else for(let a of Ta)a.visible=!1}var by=n=>n==="night"?$l()===xa?"gs_best_night":`gs_best_night_t${$l()}`:"gs_best";function lr(n){try{return+localStorage.getItem(by(n))||0}catch{return 0}}function Jh(n,e){try{localStorage.setItem(by(n),String(e))}catch{}}function Sy(){try{return localStorage.getItem("gs_mode")}catch{return null}}function Ey(n){try{localStorage.setItem("gs_mode",n)}catch{}}function Ty(){try{let n=+localStorage.getItem("gs_tier");return n>=1&&n<=5?n:xa}catch{return xa}}function jh(n){try{localStorage.setItem("gs_tier",String(n))}catch{}}var wa=0,oo={again:()=>{},modes:()=>{}},Qh=(n,e,t)=>`
  <div class="kit-tile res-stat">
    <span class="${n}"></span>
    <span class="res-label">${e}</span>
    <b class="res-value">${t}</b>
  </div>`;function Dw(){let n=Ee.modeSelect.modes[x.mode==="night"?"night":"endless"].name,e=x.mode==="night"&&at.level?` - ${yn(Ee.rounds.label,{n:at.round+1,total:io()})}`:"";return`<span class="kit-tab res-mode">${n}${e}</span>`}function wy({won:n,flavor:e,newBest:t,again:i,modes:s}){oo={again:i,modes:s},wa=0;let r=n?Ee.win:Ee.lose,o=Ee.results,a=Ee.modeSelect,l=t?`<span class="kit-tab on res-flag">${Ee.results.newBest}</span>`:"";on(`
    <div class="kit-panel res-panel${n?" hl":""}" role="dialog" aria-label="${r.title}">
      <div class="kit-head"><span class="kit-divider"></span><h2 class="res-title${n?"":" bad"}">${r.title}</h2><span class="kit-divider"></span></div>
      <div class="res-chips">${Dw()}${l}</div>
      <p class="res-flavor">${e}</p>
      <div class="res-stats">
        ${Qh("ui-icon_chart",o.score,x.score)}
        ${Qh("spr-icon_ghost",o.souls,x.banished)}
        ${Qh("ui-icon_lightning",o.chain,`x${x.maxCombo}`)}
        ${Qh("ui-icon_trophy",o.best,x.best)}
      </div>
      <div class="res-actions">
        <button type="button" class="kit-btn" data-res="again"><span class="kb"><span class="spr-key_enter"></span></span>${r.againSuffix}</button>
        <button type="button" class="kit-btn" data-res="modes"><span class="kb"><span class="spr-key_esc"></span></span>${a.change}</button>
      </div>
    </div>`,{interactive:!0,cls:"results"}),document.querySelectorAll("[data-res]").forEach((c,u)=>{c.addEventListener("pointerenter",h=>{h.pointerType==="mouse"&&(wa=u,xm())}),c.addEventListener("click",()=>c.dataset.res==="again"?oo.again():oo.modes())}),xm(),Ay()}function Ay(){let n=document.querySelector(".res-panel");n&&(n.classList.remove("compact"),n.getBoundingClientRect().height>window.innerHeight-8&&n.classList.add("compact"))}window.addEventListener("resize",Ay);function xm(){document.querySelectorAll("[data-res]").forEach((n,e)=>n.classList.toggle("on",e===wa))}function Ry(n){return n==="ArrowLeft"||n==="ArrowRight"||n==="KeyA"||n==="KeyD"||n==="Tab"?(wa=1-wa,xm(),!0):n==="Enter"||n==="Space"?((wa===0?oo.again:oo.modes)(),!0):n==="KeyR"?(oo.again(),!0):n==="Escape"?(oo.modes(),!0):!1}var Ni=[{id:"night",mode:"night",art:"mode_night"},{id:"quick",mode:null,art:"mode_quick",locked:!0},{id:"endless",mode:"endless",art:"mode_overtime"}],dn=0,ic=-1,cr=3,Uw=()=>{let n=Ee.titleScreen,e=lr("endless");return`
    <span class="ui-corner_l ms-corner l"></span><span class="ui-corner_r ms-corner r"></span>
    <span class="spr-logo title-logo" role="img" aria-label="${n.ariaLabel}"></span>
    <div class="kit-head title-rule"><span class="kit-divider"></span><span class="ui-pip"></span><span class="kit-divider"></span></div>
    <p class="flavor">${n.flavor}</p>
    <div class="howto title-chips">
      <span class="kit-tile kb">${n.moveKb}</span><span class="kit-tile kb">${n.crossKb}</span>
      <span class="kit-tile tc">${n.moveTc}</span><span class="kit-tile tc">${n.crossTc}</span>
      <div class="sub">${n.howto}<span class="tc"><br>${n.howtoTouch}</span>${n.howtoEnd?`<br>${n.howtoEnd}`:""}</div>
    </div>
    <button type="button" class="kit-btn on title-start" data-start><span class="title-start-text">${zh(n.startKb,n.startTc,n.startSuffix)}</span></button>
    <p class="tiny"><span class="kb">${n.hints}</span>${e?` | ${yn(n.best,{n:e})}`:""}</p>`};function ed(){x.state="title",Je.theme(!0),on(Uw(),{interactive:!0,cls:"title"}),oc().querySelector("[data-start]")?.addEventListener("click",()=>{Je.unlock(),ur()})}function Ow(n,e){let t=Ee.modeSelect.modes[n.id],i={rounds:Wr.rounds.length,best:lr(n.mode||"endless")||"-"},s=t.lines.map(([o,a])=>`<span class="ms-line"><span class="ui-icon_${o}"></span>${yn(a,i)}</span>`).join(""),r=n.locked?`${n.art}_locked`:n.art;return`<button type="button" class="ms-card${n.locked?" locked":""}" data-i="${e}" role="option" aria-label="${t.name}${n.locked?` (${Ee.modeSelect.locked})`:""}">
      <span class="ms-pip t"></span><span class="ms-pip b"></span><span class="ms-pip l"></span><span class="ms-pip r"></span>
      <span class="ui-spark ms-spark a"></span><span class="ui-spark_s ms-spark b"></span>
      <span class="ms-art"><span class="ui-${r}"></span></span>
      <span class="ms-name">${t.name}</span>
      <span class="ms-rule"><span class="ui-${n.locked?"pip_lock":"pip"}"></span></span>
      ${n.locked?`<span class="ms-line ms-locked"><span class="ui-icon_lock"></span>${Ee.modeSelect.locked}</span>`:s}
    </button>`}function Fw(){let n=Ee.modeSelect;return`
    <span class="ui-corner_l ms-corner l"></span><span class="ui-corner_r ms-corner r"></span>
    <div class="ms-head"><span class="ms-divider"></span><h2 class="ms-title">${n.title}</h2><span class="ms-divider"></span></div>
    <div class="ms-cards" role="listbox" aria-label="${n.title}">${Ni.map(Ow).join("")}</div>
    <div class="ms-bar">
      <button type="button" class="ms-arrow l" data-step="-1" aria-label="Previous"><span class="ui-arrow_l"></span></button>
      <p class="ms-desc"></p>
      <button type="button" class="ms-arrow r" data-step="1" aria-label="Next"><span class="ui-arrow_r"></span></button>
    </div>
    <div class="ms-diff" role="group" aria-label="${n.difficulty.label}">
      <button type="button" class="ms-darrow l" data-tier="-1" aria-label="Easier"><span class="ui-arrow_l"></span></button>
      <span class="ms-diff-label">${n.difficulty.label}</span>
      <span class="ms-diff-name"></span>
      <span class="ms-diff-pips">${[1,2,3,4,5].map(()=>'<span class="ui-dot_off"></span>').join("")}</span>
      <button type="button" class="ms-darrow r" data-tier="1" aria-label="Harder"><span class="ui-arrow_r"></span></button>
      <span class="ms-hint kb ms-diff-keys">${n.difficulty.keys}</span>
    </div>
    <div class="ms-foot">
      <span class="ms-hint kb"><span class="spr-key_esc"></span> ${n.back}</span>
      <span class="ms-dots">${Ni.map(()=>'<span class="ui-dot_off"></span>').join("")}</span>
      <span class="ms-hint kb"><span class="spr-key_enter"></span> ${n.clockIn}</span>
      <span class="ms-hint tc ms-taphint"></span>
    </div>`}var oc=()=>document.getElementById("overlay");function sc(){let n=oc();if(!n)return;n.querySelectorAll(".ms-card").forEach((o,a)=>{o.classList.toggle("sel",a===dn),o.setAttribute("aria-selected",a===dn?"true":"false")}),n.querySelectorAll(".ms-dots > span").forEach((o,a)=>{o.className=a===dn?"ui-dot_on":"ui-dot_off"});let e=Ni[dn],t=Ee.modeSelect,i=ic===dn&&!e.locked;n.querySelector(".ms-desc").textContent=i&&document.body.classList.contains("touch")?t.tapAgain:t.modes[e.id].desc,n.querySelector(".ms-taphint").textContent=i?t.tapAgain:t.tapCard;let s=n.querySelector(".ms-diff"),r=e.mode==="night";s.classList.toggle("off",!r),s.querySelector(".ms-diff-name").textContent=t.difficulty.tiers[cr-1],s.querySelectorAll(".ms-diff-pips > span").forEach((o,a)=>{o.className=a<cr?"ui-dot_on":"ui-dot_off"}),Cy()}function Cy(){let n=oc();if(!n||!n.classList.contains("modesel"))return;let e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hs"))||2,t=window.innerWidth/e,i=window.innerHeight/e;n.classList.toggle("ms-narrow",t<336),n.classList.toggle("ms-short",i<212),n.classList.toggle("ms-tiny",i<206),n.style.setProperty("--bgk",String(Math.max(1,Math.ceil(Math.max(t/480,i/270)))))}window.addEventListener("resize",Cy);function ur(){x.state="select",Je.theme(!0);let n=Sy(),e=Ni.findIndex(i=>i.mode&&i.mode===(n||"night"));dn=e>=0?e:0,ic=-1,cr=Ty(),on(Fw(),{interactive:!0,cls:"modesel"});let t=oc();t.querySelectorAll(".ms-card").forEach(i=>{let s=+i.dataset.i;i.addEventListener("pointerenter",r=>{r.pointerType==="mouse"&&dn!==s&&(dn=s,Je.blip(),sc())}),i.addEventListener("click",r=>kw(s,r.pointerType||"mouse"))}),t.querySelectorAll(".ms-arrow").forEach(i=>i.addEventListener("click",()=>rc(+i.dataset.step))),t.querySelectorAll(".ms-darrow").forEach(i=>i.addEventListener("click",()=>_m(+i.dataset.tier))),sc()}function rc(n){dn=(dn+n+Ni.length)%Ni.length,ic=-1,Je.blip(n>0),sc()}function _m(n){if(Ni[dn].mode!=="night")return;let e=Math.min(5,Math.max(1,cr+n));if(e===cr){Je.deny();return}cr=e,jh(cr),Je.blip(n>0),sc()}function kw(n,e){if(e==="touch"&&(dn!==n||ic!==n)){dn!==n&&Je.blip(),dn=n,ic=n,sc();return}dn=n,td()}function td(){let n=Ni[dn];if(n.locked){Je.deny();let e=oc()?.querySelector(`.ms-card[data-i="${dn}"]`);return e&&(e.classList.remove("nope"),e.offsetWidth,e.classList.add("nope")),!1}return Ey(n.mode),Kl(n.mode==="night"?cr:3),hr({mode:n.mode}),!0}var Iy=()=>Ni[dn];function Py(n){n==="ArrowLeft"||n==="KeyA"?rc(-1):n==="ArrowRight"||n==="KeyD"?rc(1):n==="ArrowUp"||n==="KeyW"?_m(1):n==="ArrowDown"||n==="KeyS"?_m(-1):n==="Enter"||n==="Space"?td():(n==="Escape"||n==="Backspace")&&ed()}var ji="pause",dr=0,Ly=!1,nd=!1,Dy=()=>{},Uy=()=>{},ac=new Map,Ny=!1,Bw=["pause","howto","controls","settings","credits"];function fr(n){return Math.round(Oy(n)*100)}function Oy(n){return Math.max(0,Math.min(1,Number(n)||0))}function ym(){return Ee.menu.howto?.clips||[]}function vm(){if(!Ny){Ny=!0;for(let n of ym()){if(!n?.src||ac.has(n.src))continue;ac.set(n.src,"loading");let e=new Image;e.decoding="async",e.onload=()=>{ac.set(n.src,"ready"),nd&&ji==="howto"&&lc()},e.onerror=()=>{ac.set(n.src,"error"),nd&&ji==="howto"&&lc()},e.src=n.src}}}function zw(n){return ac.get(n)||"loading"}function Hw(){let n=Ee.menu,e=n.pause?.lead||"";return`
    <div class="menu-actions">
      ${e?`<p class="menu-lead">${e}</p>`:""}
      <button type="button" class="menu-btn kit-btn on" data-action="resume">${n.resume}</button>
      <button type="button" class="menu-btn ghost kit-btn" data-action="restart">${n.restart}</button>
      <p class="tiny menu-hint">${qs()?n.hintTc:n.hintKb}</p>
    </div>`}function Gw(){let n=Ee.menu.howto,e=ym();if(!e.length)return`<p class="menu-lead">${n.lead}</p>`;dr=Math.max(0,Math.min(dr,e.length-1));let t=e[dr],i=qs()&&t.captionTc||t.caption,r=zw(t.src)!=="ready",o=Ee.menu.slides||{prev:"Prev",next:"Next",loading:"Loading"};return`
    <div class="menu-slides" aria-label="${n.lead}">
      <figure class="menu-clip kit-tile">
        <div class="menu-clip-media">
          <div class="menu-clip-loading"${r?"":" hidden"}>${o.loading}</div>
          <img src="${t.src}" alt="" width="480" height="270" decoding="async" class="${r?"is-loading":""}" />
        </div>
        <figcaption>${i}</figcaption>
      </figure>
      <div class="menu-slide-nav">
        <button type="button" class="menu-slide-btn kit-tab" data-slide="-1"${dr<=0?" disabled":""}>${o.prev}</button>
        <span class="menu-slide-meta">${dr+1} / ${e.length}</span>
        <button type="button" class="menu-slide-btn kit-tab" data-slide="1"${dr>=e.length-1?" disabled":""}>${o.next}</button>
      </div>
    </div>`}function Vw(){return`<ul class="menu-controls">${(qs()?Ee.menu.controls.touch:Ee.menu.controls.keyboard).map(e=>`
    <li><span class="menu-key">${e.keys}</span><span class="menu-act">${e.action}</span></li>`).join("")}</ul>`}function Ww(){let n=Je.getVolumes(),e=Ee.menu.settings;return`
    <div class="menu-setting">
      <label for="vol-sfx">${e.sfx}</label>
      <div class="menu-slider">
        <input id="vol-sfx" type="range" min="0" max="100" step="5" value="${fr(n.sfx)}" data-vol="sfx" style="--pct:${fr(n.sfx)}%" />
        <span class="menu-vol" data-vol-label="sfx">${fr(n.sfx)}</span>
      </div>
    </div>
    <div class="menu-setting">
      <label for="vol-music">${e.music}</label>
      <div class="menu-slider">
        <input id="vol-music" type="range" min="0" max="100" step="5" value="${fr(n.music)}" data-vol="music" style="--pct:${fr(n.music)}%" />
        <span class="menu-vol" data-vol-label="music">${fr(n.music)}</span>
      </div>
    </div>
    <p class="tiny menu-mute">${e.muteHint}</p>`}function Xw(){let n=Ee.menu.credits||{lead:"Credits",items:[]},e=(n.items||[]).map(t=>`
    <div class="menu-credit">
      <h3>${t.title}</h3>
      <p>${t.body}</p>
    </div>`).join("");return`
    <p class="menu-lead">${n.lead}</p>
    ${e||'<p class="menu-credit">Thanks for playing.</p>'}`}function qw(){return ji==="howto"?Gw():ji==="controls"?Vw():ji==="settings"?Ww():ji==="credits"?Xw():Hw()}function Yw(){let n=Ee.menu;return`
    <div class="menu-panel kit-panel" role="dialog" aria-modal="true" aria-label="${n.title}">
      <div class="menu-head kit-head"><span class="kit-divider"></span><h2>${n.title}</h2><span class="kit-divider"></span></div>
      <div class="menu-tabs" role="tablist">
        ${Bw.map(e=>`<button type="button" class="menu-tab kit-tab${ji===e?" on":""}" data-tab="${e}" role="tab" aria-selected="${ji===e}">${n.tabs[e]}</button>`).join("")}
      </div>
      <div class="menu-pane" role="tabpanel">${qw()}</div>
    </div>`}function lc(){on(Yw(),{interactive:!0})}function Fy({resume:n,restart:e}){Dy=n,Uy=e,ji="pause",nd=!0,vm(),lc(),$w()}function ky(){nd=!1,on(null)}function $w(){if(Ly)return;Ly=!0;let n=document.getElementById("overlay");n.addEventListener("click",e=>{let t=e.target.closest("[data-tab]");if(t){ji=t.getAttribute("data-tab"),lc();return}let i=e.target.closest("[data-slide]");if(i){let o=Number(i.getAttribute("data-slide"))||0,a=Math.max(0,ym().length-1);dr=Math.max(0,Math.min(a,dr+o)),lc();return}let s=e.target.closest("[data-action]");if(!s)return;let r=s.getAttribute("data-action");r==="resume"&&Dy(),r==="restart"&&Uy()}),n.addEventListener("input",e=>{let t=e.target;if(!(t instanceof HTMLInputElement)||!t.dataset.vol)return;let i=Oy(Number(t.value)/100);t.dataset.vol==="sfx"&&Je.setSfxVolume(i),t.dataset.vol==="music"&&Je.setMusicVolume(i),t.style.setProperty("--pct",`${fr(i)}%`);let s=n.querySelector(`[data-vol-label="${t.dataset.vol}"]`);s&&(s.textContent=String(fr(i)))}),n.addEventListener("touchstart",e=>{e.target.closest(".menu-panel")&&e.stopPropagation()},{capture:!0})}var Qn=new se,Ot=new se,Kw=new se,By=new se;Jn.walk=(n,e,t)=>Ea()?ql(n,e,t).pos:(e.x=dt.clamp(e.x,-D.arena.x+D.arena.enemyPad,D.arena.x-D.arena.enemyPad),e.y=dt.clamp(e.y,-D.arena.z+D.arena.enemyPad,D.arena.z-D.arena.enemyPad),e);Jn.popup=$h;Jn.toast=Sa;function zy(n,e){for(let t of[...Ue.enemies])t.realm===x.realm&&!x.dashHit.has(t)&&bm(t.pos,n,e)<D.dash.hitRadius&&(x.dashHit.add(t),t.shield>0?Qw(t):eA(t));H.boss&&H.boss.hp>0&&bm(By,n,e)<D.campaign.bossRadius&&hy()}function Zw(n,e,t){let i=n.map(([l,c])=>l.distanceTo(c)),s=i.reduce((l,c)=>l+c,0)||1,r=0,o=e*s,a=t*s;for(let l=0;l<n.length;l++){let c=i[l],u=Math.max(o,r),h=Math.min(a,r+c);if(h>u+1e-6){let[d,f]=n[l],m=c<1e-6?1:c;zy(d.clone().lerp(f,(u-r)/m),d.clone().lerp(f,(h-r)/m))}r+=c}}var Jw=[{id:"intro",at:0,modes:["night"],html:()=>Ee.tips.intro},{id:"cross",at:2,modes:["night"],when:()=>!x.crossed,html:()=>qs()?Ee.tips.crossTc:Ee.tips.crossKb},{id:"wisp",at:0,modes:["night"],when:()=>Ue.enemies.some(n=>n.wisp&&n.spawn<=0),html:()=>Ee.tips.wisp},...["moth","bloom","choir","bell"].map(n=>({id:n,at:0,modes:["night"],when:()=>Ue.enemies.some(e=>e.kind===n&&e.spawn<=0),html:()=>Ee.tips[n]}))],id=null,Hy=0;function jw(){for(let n of Jw)if(!(x.notes.has(n.id)||n.modes&&!n.modes.includes(x.mode)||x.elapsed<n.at||n.when&&!n.when())){if(x.notes.add(n.id),x.botInput||x.botAim){n.then?.();continue}return id=n,Hy=performance.now(),x.state="tutorial",Y_(n.html()),!0}return!1}function Ca(){if(x.state!=="tutorial"||performance.now()-Hy<dh)return!1;x.state="playing",Ql();let n=id;return id=null,n?.then?.(),!0}var Mm=null,Gy=n=>{Mm=n};function hr(n){if((n?.mode==="night"||n?.mode==="endless")&&(x.mode=n.mode),Ue.enemies.forEach(e=>$e.remove(e.node)),Ue.projectiles.forEach(e=>$e.remove(e.node)),Ue.enemies=[],Ue.projectiles=[],a_(),Qx(),to.tick=0,kh(),x.best=lr(x.mode),x.seed=wh(Mm??void 0),Mm=null,x.dashId=0,R_(x.seed),k_(x.seed),Object.assign(x,{state:"playing",realm:0,hp:D.player.maxHp,score:0,combo:0,comboTimer:0,timeLeft:D.run.totalTime,elapsed:0,dashCd:0,dashRemaining:0,invuln:0,spawnClock:D.run.startSpawnClock,hitStop:0,banished:0,maxCombo:0,crossed:!1}),x.pos.set(...D.player.startPos),x.facing.set(0,-1),x.dashHit.clear(),x.notes=new Set,id=null,tt("run_started",{seed:x.seed,mode:x.mode}),x.mode==="night")ty();else{sy(),B_();for(let e=0;e<D.run.startGhosts;e++)rn({wisp:!1,realm:1})}on(null),Ql(),Cs(),Je.start(),Je.music(!0),Je.theme(!1)}function pr(){return x.mode==="night"&&H.on&&tc()?(Ql(),on(null),!0):(hr(),!1)}function Ra(n){x.state=n?"won":"lost",Ql();let e=lr(x.mode);x.best=Math.max(e,x.score),tt("run_finished",{won:n,score:x.score,banished:x.banished,maxCombo:x.maxCombo}),Jh(x.mode,x.best),Je.music(!1),n?Je.win():Je.lose(),wy({won:n,newBest:x.score>e&&x.score>0,flavor:n?Ee.win.flavor:yn(Ee.lose.flavor,{time:cm()}),again:()=>{n?hr():pr()},modes:()=>ur()})}function cc(){x.state==="playing"&&(x.state="paused",tt("paused"),Fy({resume:sd,restart:pr}))}function sd(){x.state==="paused"&&(x.state="playing",tt("resumed"),ky())}function Vy(){x.state==="paused"?sd():cc()}function uc(){if(x.dashCd>0||x.dashRemaining>0)return;(x.touchCross||x.botAim)&&tA();let n=x.realm,e=1-n;if(iy()){let i=s_(x.pos,e);if(!i)return;x.pos.copy(i)}x.realm=e,x.crossed=!0,x.dashCd=D.dash.cooldown*J_(),x.dashRemaining=D.dash.duration,x.dashStart.copy(x.pos);let t=D.dash.distance*pm();if(Ea()){let i=Fh(x.pos,x.facing,t,x.realm);x.dashEnd.copy(i.pos),x.dashSegs=i.segs}else x.dashEnd.copy(x.pos).addScaledVector(x.facing,t),x.dashEnd.x=dt.clamp(x.dashEnd.x,-D.arena.x+D.arena.playerPad,D.arena.x-D.arena.playerPad),x.dashEnd.y=dt.clamp(x.dashEnd.y,-D.arena.z+D.arena.playerPad,D.arena.z-D.arena.playerPad),x.dashSegs=null;H.boss&&(H.boss.hitThisDash=!1),x.dashHit.clear(),x.dashU=0,x.dashId++,x.invuln=Math.max(x.invuln,D.dash.duration+D.dash.invulnPad),tt("realm_changed",{from:n,to:x.realm}),tt("dash_started",{dashId:x.dashId,from:[x.dashStart.x,x.dashStart.y],to:[x.dashEnd.x,x.dashEnd.y],realm:x.realm}),x.flash=.35,x.ripple=0,Je.cross(x.realm),Ht(x.pos.x,.6,x.pos.y,{n:16,color:x.realm?Ne.lavender:Ne.amber,speed:3,up:1.5,life:.5})}function Qw(n){n.shield-=1,x.score+=D.spirits.choir.shieldPoints,x.hitStop=D.hitStop.duration*.6,x.shake=Math.max(x.shake,.14),Ht(n.pos.x,.9,n.pos.y,{n:22,color:15260864,speed:4.5,up:3,life:.7,size:2,grav:4}),$h(n.pos,`+${D.spirits.choir.shieldPoints}`,!1),n.rig?.shatter?.(),tt("enemy_shield_broken",{id:n.id,realm:n.realm,dashId:x.dashId}),Je.crack()}function eA(n){if(n.dead)return;x.combo+=1,x.comboTimer=D.combo.window,x.maxCombo=Math.max(x.maxCombo,x.combo);let e=D.combo.baseScore*x.combo;x.score+=e,x.banished++,x.dashCd=Math.max(D.dash.cooldownFloor,x.dashCd-D.dash.refundPerKill),x.hitStop=D.hitStop.duration,x.shake=Math.max(x.shake,.18);let t=n.realm?Ne.lavender:Ne.parchment;Ht(n.pos.x,.8,n.pos.y,{n:26,color:t,speed:4,up:3,life:.8,size:3}),Ht(n.pos.x,.8,n.pos.y,{n:10,color:16777215,speed:2,up:4,life:.5,size:2,grav:2}),$h(n.pos,`+${e}${x.combo>1?` <i>x${x.combo}</i>`:""}`,x.combo>1),tt("enemy_banished",{id:n.id,wisp:n.wisp,realm:n.realm,combo:x.combo,points:e,dashId:x.dashId}),ly(n),Vh(n,{souls:H.level?.kind==="souls"}),Je.banish(x.combo);try{navigator.vibrate&&navigator.vibrate(15)}catch{}Ji(n)}function Aa(n){if(!A_()){x.hp-=1,x.combo=0,x.invuln=D.player.hitInvuln,x.hurt=1,x.shake=.45,Ht(x.pos.x,.8,x.pos.y,{n:18,color:Ne.pink,speed:3.5,up:2.5,life:.6}),tt("player_damaged",{hp:x.hp,source:n}),cy(),Je.hit();try{navigator.vibrate&&navigator.vibrate(80)}catch{}x.hp<=0&&Ra(!1)}}var bm=(n,e,t)=>{let i=t.clone().sub(e),s=i.lengthSq();if(s<.001)return n.distanceTo(e);let r=dt.clamp(n.clone().sub(e).dot(i)/s,0,1);return n.distanceTo(e.clone().addScaledVector(i,r))};function tA(){let n=null,e=1/0;for(let t of Ue.enemies){if(t.realm===x.realm||t.spawn>0)continue;let i=t.pos.clone().sub(x.pos),s=i.length();if(s<.5||s>D.dash.distance+D.dash.aimRangePad)continue;let r=Math.acos(dt.clamp(i.dot(x.facing)/s,-1,1));if(r>D.dash.aimCone)continue;let o=r*3+s*.2;o<e&&(e=o,n=i.divideScalar(s))}n&&x.facing.copy(n)}function Wy(n){if(x.elapsed+=n,x.timeLeft=Math.max(0,x.timeLeft-n),x.spawnClock-=n,x.dashCd=Math.max(0,x.dashCd-n),x.invuln=Math.max(0,x.invuln-n),x.mode==="night"&&p_()||(x.comboTimer-=n,x.comboTimer<=0&&(x.combo=0)),x.mode==="night"){let i=at.phase;if(f_(n)==="complete"&&fy()==="win"){Ra(!0);return}i==="active"&&at.phase==="intermission"?Sa(Ee.rounds.clear,2):i==="intermission"&&at.phase==="active"&&Sa(yn(Ee.rounds.start,{n:at.round+1}),2)}else{x.spawnClock<=0&&Ue.enemies.length<D.pacing.cap(x.elapsed)&&(x.elapsed>D.pacing.groupAfter&&Ct.chance(D.pacing.groupChance)?l_():rn(),x.spawnClock=D.pacing.interval(x.elapsed)),x.elapsed>150&&!x.notes.has("final")&&(x.notes.add("final"),Sa(Ee.toasts.midnight,3));let i=H_(n);i&&Sa(i,2.5)}if(jw())return;if(x.dashRemaining>0){x.dashRemaining=Math.max(0,x.dashRemaining-n);let i=1-x.dashRemaining/D.dash.duration,s=1-Math.pow(1-i,2);x.dashSegs?(Zw(x.dashSegs,x.dashU||0,s),x.dashU=s,x.pos.copy(i_(x.dashSegs,s))):(x.pos.copy(x.dashStart).lerp(x.dashEnd,s),zy(x.dashStart,x.pos)),Ht(x.pos.x,.5+vt()*.6,x.pos.y,{n:4,color:x.realm?Ne.lavender:Ne.amber,speed:.6,up:.3,life:.35,grav:0}),x.moving=1}else{let i=0,s=0;($n.has("KeyD")||$n.has("ArrowRight"))&&(i+=1),($n.has("KeyA")||$n.has("ArrowLeft"))&&(i-=1),($n.has("KeyS")||$n.has("ArrowDown"))&&(s+=1),($n.has("KeyW")||$n.has("ArrowUp"))&&(s-=1),Bn.active&&(i=Bn.x*Bn.mag,s=Bn.y*Bn.mag),x.botInput&&(i=x.botInput.x,s=x.botInput.y);let r=Math.hypot(i,s);if(r>.01){x.facing.set(i/r,s/r);let o=(D.player.speed+j_())*Math.min(1,Math.max(r,D.player.minStickMag))*n;Ea()?x.pos.copy(ql(x.pos,Qn.copy(x.pos).addScaledVector(x.facing,o),x.realm).pos):x.pos.addScaledVector(x.facing,o),x.moving=Math.min(1,x.moving+n*8),x.step+=n*12,vt()<n*10&&Ht(x.pos.x,.05,x.pos.y,{n:1,color:6969966,speed:.4,up:.6,life:.4,grav:-3})}else x.moving=Math.max(0,x.moving-n*8)}Ea()||(x.pos.x=dt.clamp(x.pos.x,-D.arena.x+D.arena.playerPad,D.arena.x-D.arena.playerPad),x.pos.y=dt.clamp(x.pos.y,-D.arena.z+D.arena.playerPad,D.arena.z-D.arena.playerPad));let e=x.dashCd<=0&&x.dashRemaining<=0;Qn.copy(x.pos).addScaledVector(x.facing,D.dash.distance*pm()),Qn.x=dt.clamp(Qn.x,-D.arena.x+D.arena.playerPad,D.arena.x-D.arena.playerPad),Qn.y=dt.clamp(Qn.y,-D.arena.z+D.arena.playerPad,D.arena.z-D.arena.playerPad);for(let i of Ue.enemies)i.targeted=e&&i.realm!==x.realm&&i.spawn<=0&&bm(i.pos,x.pos,Qn)<D.dash.hitRadius;for(let i of[...Ue.enemies]){if(i.bob+=n*2.5,i.spawn>0){i.spawn-=n;continue}if(xe.freeze>0)continue;if(i.pulse){let c=i.pulse,u=D.spirits.bell;c.r+=u.waveSpeed*n;let h=Math.hypot(x.pos.x-c.x,x.pos.y-c.z);if(!c.hit&&i.realm===x.realm&&Math.abs(h-c.r)<u.band&&x.invuln<=0&&x.dashRemaining<=0&&(c.hit=!0,Aa({kind:"bell",id:i.id}),x.state!=="playing"))return;c.r>=u.waveMax&&(i.pulse=null)}if(i.ward){if(uy(i,n),i.realm===x.realm&&i.pos.distanceTo(x.pos)<D.enemy.contactRadius&&x.invuln<=0&&x.dashRemaining<=0&&(Aa({kind:"contact",id:i.id}),x.state!=="playing"))return;continue}if(i.stun>0){i.stun-=n;continue}let s=Kw.copy(i.pos),r=N_(i);Qn.copy(r?r.pos:x.pos).sub(i.pos);let o=Qn.length();o>.01?Ot.copy(Qn).multiplyScalar(1/o):Ot.set(0,0);let a=r?i.pos.distanceTo(x.pos):o;if(i.realm!==x.realm){i.pos.addScaledVector(Ot,D.enemy.inactiveDrift*n),r&&o<D.items.lure.contact&&Wh(r,D.items.lure.dps*n);continue}let l=D.spirits;if(i.wisp)o<D.enemy.wispKeepMin?i.pos.addScaledVector(Ot,-D.enemy.wispSpeed*n):o>D.enemy.wispKeepMax&&i.pos.addScaledVector(Ot,D.enemy.wispSpeed*n),i.shoot-=n,i.charge=i.shoot<D.enemy.wispChargeWindow?1-i.shoot/D.enemy.wispChargeWindow:0,i.shoot<=0&&(Yl(i.pos,Ot,i.realm),i.shoot=D.enemy.wispShootInterval);else if(i.kind==="moth")i.zig+=n*l.moth.zigFreq,i.pos.addScaledVector(Ot,l.moth.speed*n),i.pos.x+=-Ot.y*Math.cos(i.zig)*l.moth.zig*n*2,i.pos.y+=Ot.x*Math.cos(i.zig)*l.moth.zig*n*2;else if(i.kind==="bell")o<l.bell.keepMin?i.pos.addScaledVector(Ot,-l.bell.speed*n):o>l.bell.keepMax&&i.pos.addScaledVector(Ot,l.bell.speed*n),i.pulse||(i.shoot-=n,i.charge=i.shoot<l.bell.windup?1-i.shoot/l.bell.windup:0,i.shoot<=0&&(i.pulse={x:i.pos.x,z:i.pos.y,r:.3,hit:!1},i.shoot=l.bell.interval,i.charge=0,tt("bell_toll",{id:i.id,realm:i.realm}),Je.toll()));else if(i.kind==="bloom"){if(i.pos.addScaledVector(Ot,l.bloom.creep*n),i.shoot-=n,i.charge=i.shoot<l.bloom.windup?1-i.shoot/l.bloom.windup:0,i.shoot<=0){let c=Math.atan2(Ot.y,Ot.x);for(let u=0;u<l.bloom.shots;u++){let h=c+(u-(l.bloom.shots-1)/2)*l.bloom.spread;Yl(i.pos,new se(Math.cos(h),Math.sin(h)),i.realm,Ne.pink)}i.shoot=l.bloom.interval}}else i.kind==="choir"?i.pos.addScaledVector(Ot,l.choir.speed*n):i.pos.addScaledVector(Ot,(D.enemy.wandererSpeed+x.elapsed*D.enemy.wandererSpeedPerSec)*n);if(Ea()){let c=D.enemy.detour,u=i.pos.distanceTo(s);if(i.detourT>0){i.detourT-=n;let h=c.angle*i.detourSide;i.pos.set(s.x+(Ot.x*Math.cos(h)-Ot.y*Math.sin(h))*u,s.y+(Ot.x*Math.sin(h)+Ot.y*Math.cos(h))*u)}if(i.pos.copy(ql(s,i.pos,i.realm).pos),u>1e-4&&o>D.enemy.contactRadius+1)if(i.pos.distanceTo(s)<u*c.pinned){i.stuck=(i.stuck||0)+n;let h=(Math.sin(i.id*12.9898)*43758.5453%1+1)%1;!(i.detourT>0)&&i.stuck>c.minDelay+Math.pow(h,1.5)*c.spread&&(i.detourT=c.time*(.7+h*.6),i.detourSide=h<.5?1:-1,i.stuck=0)}else i.stuck=Math.max(0,(i.stuck||0)-n*2)}else i.pos.x=dt.clamp(i.pos.x,-D.arena.x+D.arena.enemyPad,D.arena.x-D.arena.enemyPad),i.pos.y=dt.clamp(i.pos.y,-D.arena.z+D.arena.enemyPad,D.arena.z-D.arena.enemyPad);if(r&&o<D.items.lure.contact&&Wh(r,D.items.lure.dps*n),a<D.enemy.contactRadius&&x.invuln<=0&&x.dashRemaining<=0){if(Aa({kind:"contact",id:i.id}),r){Ot.copy(x.pos).sub(i.pos);let c=Ot.length();c>.01&&Ot.multiplyScalar(1/c)}if(i.pos.addScaledVector(Ot,-D.enemy.contactKnockback),x.state!=="playing")return}}for(let i=0;i<Ue.enemies.length;i++)for(let s=i+1;s<Ue.enemies.length;s++){let r=Ue.enemies[i],o=Ue.enemies[s],a=r.pos.distanceTo(o.pos);a<D.enemy.separation&&a>.001&&(Qn.copy(o.pos).sub(r.pos).multiplyScalar((D.enemy.separation-a)/a*.5),r.pos.sub(Qn),o.pos.add(Qn))}for(let i of[...Ue.projectiles])if(!(xe.freeze>0&&i.realm===x.realm)){if(i.pos.addScaledVector(i.dir,D.projectile.speed*n),i.life-=n,r_(i.pos,i.realm)&&(i.life=0),vt()<n*30&&i.realm===x.realm&&Ht(i.pos.x,.7,i.pos.y,{n:1,color:Ne.violet,speed:.2,up:.2,life:.3,grav:0}),i.life>0){for(let s of xe.lures)if(s.realm===i.realm&&s.hp>0&&i.pos.distanceTo(s.pos)<.55){Wh(s,1),i.life=0;break}}if(i.life>0&&i.realm===x.realm&&i.pos.distanceTo(x.pos)<D.projectile.hitRadius&&x.invuln<=0&&(Aa({kind:"projectile"}),i.life=0,x.state!=="playing"))return;(Math.abs(i.pos.x)>D.arena.x+1||Math.abs(i.pos.y)>D.arena.z+1)&&(i.life=0),i.life<=0&&($e.remove(i.node),Ue.projectiles=Ue.projectiles.filter(s=>s!==i))}if(H.boss&&H.boss.hp>0&&x.realm===H.boss.realm&&x.pos.distanceTo(By)<D.campaign.bossRadius&&x.invuln<=0&&x.dashRemaining<=0&&(Aa({kind:"boss"}),x.state!=="playing"))return;D_(n);let t=dy(n);if(t==="hurt"){if(Aa({kind:"boss"}),x.state!=="playing")return}else if(t==="win"){Ra(!0);return}else if(t==="lose"){Ra(!1);return}}var nA={moth:1.3,bell:1.15,bloom:1.35,choir:1.2},iA={moth:Ne.amber,bell:Ne.blue,bloom:Ne.pink,choir:Ne.parchment},rd=new I,Xy=new ge;function qy(n,e){x.realmVis+=(x.realm-x.realmVis)*Math.min(1,n*7);let t=x.realmVis;Ms.uniforms.realm.value=t,Ms.uniforms.time.value=e,x.flash=Math.max(0,x.flash-n*2.2),Ms.uniforms.flash.value=x.flash,x.hurt=Math.max(0,x.hurt-n*2.5),Ms.uniforms.hurt.value=x.hurt,x.ripple>=0?(x.ripple+=n*1.8,x.ripple>1&&(x.ripple=-1),rd.set(x.pos.x,.8,x.pos.y).project(Yn),Ms.uniforms.ripple.value.set(rd.x*.5+.5,rd.y*.5+.5,x.ripple)):Ms.uniforms.ripple.value.z=-1,fh.color.setHex(aa.hemi).lerp(Xy.setHex(9410047),t),fh.intensity=aa.hemiI+t*.25,Ai.color.setHex(aa.moon),Ai.intensity=aa.moonI+t*.6;let i=.92+Math.sin(e*13)*.04+Math.sin(e*7.3)*.04;for(let h of Js.lamps)h.intensity=(h.distance>6?14:8)*(1-t*.6)*i;Js.chapel.intensity=18*(1-t*.5)*i,Gt.lanternLight.color.setHex(Ne.amber).lerp(Xy.setHex(Ne.lavender),t),Gt.lanternLight.intensity=10*i*(x.dashRemaining>0?2:1),Gt.player.position.set(x.pos.x,0,x.pos.y);let r=Math.atan2(x.facing.x,x.facing.y)-Gt.body.rotation.y;r=Math.atan2(Math.sin(r),Math.cos(r)),Gt.body.rotation.y+=r*Math.min(1,n*18);let o=x.dashRemaining>0,a=Math.abs(Math.sin(x.step))*.12*x.moving;Gt.body.position.y=a+Math.sin(e*2)*.02;let l=o?1.25:1+Math.sin(x.step*2)*.04*x.moving;Gt.body.scale.set(ea/Math.sqrt(l),ea*(o?.85:1),ea*l),Gt.body.rotation.x=o?.35:.12*x.moving,Gt.lantern.rotation.x=-Math.sin(x.step)*.4*x.moving-(o?.6:0),Gt.player.visible=x.invuln<=0||o||Math.floor(e*12)%2===0,Gt.outline.uniforms.color.value.setHex(t>.5?14207231:1183258),Gt.shadow.position.set(x.pos.x,.03,x.pos.y);let c=x.dashCd<=0&&!o&&x.state==="playing";if(Gt.dashGuide.visible=c,c){let h=x.pos.clone().addScaledVector(x.facing,Qo);h.x=dt.clamp(h.x,-Ti+.6,Ti-.6),h.y=dt.clamp(h.y,-wi+.6,wi-.6);let d=Gt.dashGuide.children;for(let m=0;m<d.length-1;m++){let y=(m+1+e*3%1)/d.length;d[m].position.set(x.pos.x+(h.x-x.pos.x)*y,.05,x.pos.y+(h.y-x.pos.y)*y)}let f=d[d.length-1];f.position.set(h.x,.05,h.y),f.rotation.z=e*2,Gt.dashGuideMat.color.setHex(x.realm?Ne.amber:Ne.lavender),Gt.dashGuideMat.opacity=.55+Math.sin(e*8)*.2}U_(n,e);for(let h of Ue.enemies){let d=h.realm===x.realm,f=h.spawn>0?1-h.spawn/.8:1;if(h.node.position.set(h.pos.x,0,h.pos.y),h.rig){h.rig.tick(e),h.body.position.y=.05;let g=zf*f*(nA[h.kind]||1)*(1+h.charge*.18+(h.charge>.6?Math.sin(e*40)*.03:0));h.body.scale.setScalar(g)}else{h.body.position.y=.15+Math.sin(h.bob)*.12;let g=zf*f*(h.wisp?1+Math.sin(e*9+h.bob)*.06+h.charge*.25:1);h.body.scale.set(g,g*(h.wisp?1:1+Math.sin(h.bob*2)*.04),g)}let y=Math.atan2(x.pos.x-h.pos.x,x.pos.y-h.pos.y)-h.body.rotation.y;y=Math.atan2(Math.sin(y),Math.cos(y)),h.body.rotation.y+=y*Math.min(1,n*5),h.body.rotation.z=Math.sin(h.bob*.7)*.08;let p=d?1:h.targeted?.8:.5;for(let{m:g,base:v,em:S}of h.mats)h.wisp||h.rig?(g.color.copy(v),d||g.color.lerp(qp[h.realm],.3).multiplyScalar(.7),g.emissive.copy(S).multiplyScalar(d?1+h.charge:.45)):(g.color.copy(v).multiply(qp[h.realm]),d||g.color.multiplyScalar(.7)),g.opacity=p*f,g.depthWrite=d;h.outline.uniforms.color.value.setHex(h.targeted?Math.floor(e*10)%2?16777215:Ne.amber:d?1183258:2760768),h.outline.uniforms.opacity.value=(d||h.targeted?1:.55)*f,h.outline.uniforms.thick.value=h.targeted?.08:.045,h.ring.material.opacity=(d?.9:.35)*f,h.ring.scale.setScalar(h.targeted?1.15+Math.sin(e*12)*.1:1),h.rig&&d&&vt()<n*6&&Ht(h.pos.x,.9+vt()*.5,h.pos.y,{n:1,color:iA[h.kind],speed:.3,up:1,life:.5,grav:1}),h.wisp&&d&&vt()<n*14&&Ht(h.pos.x,1.2+vt()*.4,h.pos.y,{n:1,color:vt()<.5?Ne.blue:Ne.violet,speed:.3,up:1.2,life:.5,grav:1})}for(let h of Ue.projectiles)h.node.position.set(h.pos.x,0,h.pos.y),h.node.visible=h.realm===x.realm,h.node.children[0].rotation.y+=n*8;if(vt()<n*6){let h=(vt()-.5)*24,d=(vt()-.5)*18;Ht(h,.3,d,{n:1,color:t>.5?Ne.lavender:Ne.amber,speed:.15,up:.25,life:2.5,grav:.05,size:1})}Xx(n),x.shake=Math.max(0,x.shake-n*1.8);let u=x.shake*x.shake*.6;Yn.position.copy(Vf).add(rd.set((vt()-.5)*u,(vt()-.5)*u,0))}var mr=0;function Sm(){let n=Ee.bag,e=Nn.map((t,i)=>{let s=xe.inv[t],r=Ee.items[t];return`<button type="button" class="kit-btn bag-row${i===mr?" on":""}" data-item="${t}"${s?"":" disabled"}>
      <span class="bag-n">${i+1}</span><span class="bag-txt">${r.name}</span><b class="bag-c">${s}/${D.items.cap}</b></button>`}).join("");on(`
    <div class="kit-panel res-panel compact bag-panel" role="dialog" aria-label="${n.title}">
      <div class="kit-head"><span class="kit-divider"></span><h2>${n.title}</h2><span class="kit-divider"></span></div>
      <p class="bag-desc" id="bagdesc">${Ee.items[Nn[mr]].desc}</p>
      <div class="res-actions bag-list">${e}<button type="button" class="kit-btn ghost bag-close" data-bag-close>${n.close}</button></div>
      <p class="tiny menu-hint">${qs()?n.hintTc:n.hint}</p>
    </div>`,{interactive:!0,cls:"results"}),document.querySelectorAll("[data-item]").forEach(t=>{t.addEventListener("click",()=>Em(t.dataset.item)),t.addEventListener("mouseenter",()=>{let i=document.getElementById("bagdesc");i&&(i.textContent=Ee.items[t.dataset.item].desc)})}),document.querySelector("[data-bag-close]")?.addEventListener("click",dc)}function hc(){return x.state!=="playing"?!1:(x.state="bag",mr=Math.max(0,Nn.findIndex(n=>xe.inv[n]>0)),Sm(),tt("bag_opened",{}),!0)}function dc(){return x.state!=="bag"?!1:(x.state="playing",on(null),!0)}function Em(n){xe.inv[n]>0&&(dc(),ba(n))}function Yy(n){if(n==="Escape"||n==="KeyI"||n==="Tab"||n==="KeyP")return dc();if(n==="ArrowUp"||n==="KeyW"){mr=(mr+Nn.length-1)%Nn.length,Sm();return}if(n==="ArrowDown"||n==="KeyS"){mr=(mr+1)%Nn.length,Sm();return}if(n==="Enter"||n==="Space")return Em(Nn[mr]);let e=/^Digit([1-5])$/.exec(n);e&&Em(Nn[+e[1]-1])}window.addEventListener("keydown",n=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),n.code==="Tab"&&(x.state==="playing"||x.state==="bag")&&n.preventDefault(),!n.repeat){if(Je.unlock(),n.code==="KeyM"){Je.toggleMute();return}if(!/^(Shift|Control|Alt|Meta)/.test(n.code)){if(x.state==="tutorial"){Ca();return}if($n.add(n.code),x.state==="relic"){py(n.code);return}if(x.state==="playing"){n.code==="Space"&&uc(),n.code==="KeyR"&&pr(),(n.code==="KeyP"||n.code==="Escape")&&cc(),(n.code==="KeyI"||n.code==="Tab")&&hc();let e=/^Digit([1-5])$/.exec(n.code);e&&ba(Nn[+e[1]-1])}else x.state==="bag"?Yy(n.code):x.state==="paused"?((n.code==="KeyP"||n.code==="Escape"||n.code==="Enter")&&sd(),n.code==="KeyR"&&pr()):x.state==="select"?Py(n.code):x.state==="title"?(n.code==="Enter"||n.code==="Space")&&ur():(x.state==="won"||x.state==="lost")&&Yh()>.6&&Ry(n.code)}}});window.addEventListener("keyup",n=>$n.delete(n.code));window.addEventListener("blur",()=>{$n.clear(),x.botInput||cc()});document.addEventListener("visibilitychange",()=>{document.hidden&&!x.botInput&&cc()});var Qi=document.getElementById("stick"),Ia=document.getElementById("tapfx"),fc=null,ao=null,sA=230,rA=16,oA=320,aA=80,pc=new Map,Pa=null,$y=new ml,Ky=new se,lA=new Vn(new I(0,1,0),-.7),Tm=new I;function cA(n,e){let t=zr.getBoundingClientRect();return Ky.set((n-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),$y.setFromCamera(Ky,Yn),$y.ray.intersectPlane(lA,Tm)?new se(Tm.x,Tm.z):null}function uA(n,e){let t=cA(n,e),i=!1;if(t){let s=null,r=2.2;for(let o of Ue.enemies){if(o.realm===x.realm||o.spawn>0)continue;let a=o.pos.distanceTo(t);a<r&&o.pos.distanceTo(x.pos)<Qo+2.5&&(r=a,s=o)}if(s){let o=s.pos.clone().sub(x.pos);o.lengthSq()>.01&&(x.facing.copy(o.normalize()),i=!0)}}x.touchCross=!i,uc(),x.touchCross=!1,ot.cross.classList.remove("press"),ot.cross.offsetWidth,ot.cross.classList.add("press"),Ia.style.left=n+"px",Ia.style.top=e+"px",Ia.classList.remove("go"),Ia.offsetWidth,Ia.classList.add("go"),Ia.classList.toggle("spirit",x.realm===1)}function hA(n){if(Je.unlock(),document.body.classList.contains("touch")||document.body.classList.add("touch"),n.target.closest&&n.target.closest("#pausebtn")||x.state==="select"||x.state==="relic"||x.state==="bag"||(x.state==="won"||x.state==="lost")&&n.target.closest&&n.target.closest("[data-res]"))return;if(n.preventDefault(),x.state==="tutorial"){Ca();return}if(x.state==="paused")return n.target.closest&&n.target.closest("#overlay.interactive, .menu-panel, #pausebtn"),void 0;if(x.state==="title"){Yh()>.3&&ur();return}if(x.state!=="playing"){Yh()>.6&&(x.state==="lost"?pr:hr)();return}let e=performance.now();for(let t of n.changedTouches){if(Pa&&e-Pa.t<oA&&Math.hypot(t.clientX-Pa.x,t.clientY-Pa.y)<aA){Pa=null,pc.set(t.identifier,{t:e,x:t.clientX,y:t.clientY,moved:!0,consumed:!0}),uA(t.clientX,t.clientY);continue}pc.set(t.identifier,{t:e,x:t.clientX,y:t.clientY,moved:!1}),fc===null&&(fc=t.identifier,ao=[t.clientX,t.clientY],Qi.style.left=t.clientX+"px",Qi.style.top=t.clientY+"px",Qi.style.setProperty("--dx","0px"),Qi.style.setProperty("--dy","0px"))}}function dA(n){n.preventDefault();for(let e of n.changedTouches){let t=pc.get(e.identifier);if(t&&!t.moved&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>rA&&(t.moved=!0),e.identifier!==fc)continue;let i=e.clientX-ao[0],s=e.clientY-ao[1],r=Math.hypot(i,s),o=44;r>8&&Qi.classList.add("on"),r>o*1.6&&(ao[0]=e.clientX-i/r*o*1.6,ao[1]=e.clientY-s/r*o*1.6,Qi.style.left=ao[0]+"px",Qi.style.top=ao[1]+"px"),Bn.active=r>8,Bn.x=i/Math.max(r,1),Bn.y=s/Math.max(r,1),Bn.mag=Math.min(1,r/o),Qi.style.setProperty("--dx",Math.min(r,o)*Bn.x+"px"),Qi.style.setProperty("--dy",Math.min(r,o)*Bn.y+"px")}}function Zy(n){let e=performance.now();for(let t of n.changedTouches){let i=pc.get(t.identifier);pc.delete(t.identifier),i&&!i.moved&&!i.consumed&&e-i.t<sA&&(Pa={t:e,x:t.clientX,y:t.clientY}),t.identifier===fc&&(fc=null,Bn.active=!1,Qi.classList.remove("on"))}}window.addEventListener("touchstart",hA,{passive:!1});window.addEventListener("touchmove",dA,{passive:!1});window.addEventListener("touchend",Zy);window.addEventListener("touchcancel",Zy);function Jy(n){n.preventDefault(),n.stopPropagation(),Je.unlock(),document.body.classList.contains("touch")||document.body.classList.add("touch"),x.state==="tutorial"?Ca():Vy()}ot.pause.addEventListener("click",Jy);ot.pause.addEventListener("touchend",Jy,{passive:!1});var jy=performance.now(),Am=!1,Qy=0,fA=Vp();function Rm(n){return to.tick++,x.state==="playing"&&(x.hitStop>0&&(x.hitStop-=n,n*=D.hitStop.timeScale),Wy(n),x.state==="playing"?(Cs(),$_(n)):x.state==="tutorial"&&Cs()),n}var wm={calls:0,triangles:0};function ev(n,e){qy(Px()?0:n,e),Ux(e,x.realm),My(e),kn.setRenderTarget(Il),kn.render($e,Yn),wm={calls:kn.info.render.calls,triangles:kn.info.render.triangles},kn.setRenderTarget(null),kn.render(Hf,nx)}function tv(n){if(requestAnimationFrame(tv),Am)return;let e=Math.min(.05,(n-jy)/1e3);jy=n;let t=x.state==="playing"&&x.hitStop>0;fA.feed(e,Rm),ev(t?e*D.hitStop.timeScale:e,n/1e3)}function pA(n,e=1){Am=!0;for(let t=0;t<e;t++)Rm(n)}function mA(n,e=4){Am=!0;for(let t=0;t<e;t++)Qy+=n/e,ev(Rm(n/e),Qy)}(async()=>{b_(),await Promise.all([ux(),Je.preloadMusic()]);try{let n=new URLSearchParams(location.search).get("tier");n&&(Kl(n),jh(+n))}catch{}dx(),fx(),Hx(),rn({wisp:!1,realm:0,pos:new se(-3.5,-2)}),rn({wisp:!1,realm:1,pos:new se(3.8,-3.2)}),rn({wisp:!0,realm:1,pos:new se(6,1.5)}),Ue.enemies.forEach(n=>n.spawn=0),ed(),document.body.classList.add("ready"),vm(),Cs(),requestAnimationFrame(tv),ot.bag?.addEventListener("click",hc),window.__GS={overtime:It,LEVELS:pi,setStage:no,blocked:mi,spawnEnemy:rn,S:x,get enemies(){return Ue.enemies},get projectiles(){return Ue.projectiles},setTier:Kl,currentTier:$l,TIERS:Yp,startGame:hr,restartRun:pr,finish:Ra,cross:uc,sfx:Je,stepManual:mA,stepSim:pA,dismissTip:Ca,director:at,LEVEL1:Wr,loot:xe,ITEM_ORDER:Nn,useItem:ba,grant:L_,addPickup:sm,dropFrom:Vh,openBag:hc,closeBag:dc,campaign:H,chooseRelic:ec,loadLevel:ry,retryLevel:tc,campaignSnap:my,showSet:$r,setWardState:Hl,bellTowerWarden:Gl,previewSpirit:zx,vfxStats:Ix,modeSelect:{open:ur,move:rc,confirm:td,selected:()=>Iy().id,MODES:Ni,showTitle:ed},TUNING:D,events:{history:pa,on:rr},setNextSeed:Gy,sim:{createStepper:Vp,createRng:tr,seedRun:wh,tick:()=>to.tick},DASH_DISTANCE:Qo,ARENA_X:Ti,ARENA_Z:wi,toScreen:(n,e)=>um(n,.9,e),addEnemy:(n,e,t,i=!1,s)=>{let r=rn({wisp:i,kind:s,realm:t,pos:new se(n,e)});return r.spawn=0,r},clearEnemies:()=>[...Ue.enemies].forEach(Ji),removeEnemies:n=>[...Ue.enemies].filter(n).forEach(Ji),progress:{loadBest:lr,saveBest:Jh},bot:{LEVELS:pi,CATACOMB_WALLS:oa,WARD_SPOTS:Xr,blocked:mi,planDash:Fh,retry:()=>(on(null),tc())},addProjectile:(n,e,t,i,s)=>Yl(new se(n,e),new se(t,i),s),frameStats:()=>{let n=kn.getContext(),e=n.getExtension("WEBGL_debug_renderer_info"),t=kn.info;return{calls:wm.calls,triangles:wm.triangles,geometries:t.memory.geometries,textures:t.memory.textures,renderer:e?String(n.getParameter(e.UNMASKED_RENDERER_WEBGL)):""}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
