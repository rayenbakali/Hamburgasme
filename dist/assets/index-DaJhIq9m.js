(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="170",F_=0,af=1,O_=2,ap=1,lp=2,Vi=3,wr=0,Tn=1,Vn=2,vr=0,Ys=1,lf=2,cf=3,uf=4,B_=5,qr=100,z_=101,k_=102,H_=103,V_=104,G_=200,W_=201,X_=202,Y_=203,$c=204,Zc=205,q_=206,$_=207,Z_=208,K_=209,j_=210,J_=211,Q_=212,t0=213,e0=214,Kc=0,jc=1,Jc=2,no=3,Qc=4,tu=5,eu=6,nu=7,cp=0,n0=1,i0=2,xr=0,r0=1,s0=2,o0=3,a0=4,l0=5,c0=6,up=7,hp=300,io=301,ro=302,iu=303,ru=304,kl=306,yl=1e3,Zr=1001,su=1002,qn=1003,u0=1004,Sa=1005,xi=1006,Jl=1007,Kr=1008,Qi=1009,fp=1010,dp=1011,oa=1012,ph=1013,as=1014,Ci=1015,_o=1016,mh=1017,_h=1018,so=1020,pp=35902,mp=1021,_p=1022,Mi=1023,gp=1024,vp=1025,qs=1026,oo=1027,Hl=1028,gh=1029,xp=1030,vh=1031,xh=1033,rl=33776,sl=33777,ol=33778,al=33779,ou=35840,au=35841,lu=35842,cu=35843,uu=36196,hu=37492,fu=37496,du=37808,pu=37809,mu=37810,_u=37811,gu=37812,vu=37813,xu=37814,Mu=37815,yu=37816,Su=37817,Eu=37818,Tu=37819,bu=37820,wu=37821,ll=36492,Au=36494,Ru=36495,Mp=36283,Cu=36284,Pu=36285,Du=36286,h0=3200,f0=3201,yp=0,d0=1,Xi="",kn="srgb",go="srgb-linear",Vl="linear",pe="srgb",vs=7680,hf=519,p0=512,m0=513,_0=514,Sp=515,g0=516,v0=517,x0=518,M0=519,ff=35044,df="300 es",$i=2e3,Sl=2001;class vo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pf=1234567;const Xo=Math.PI/180,aa=180/Math.PI;function xo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function He(r,t,e){return Math.max(t,Math.min(e,r))}function Mh(r,t){return(r%t+t)%t}function y0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function S0(r,t,e){return r!==t?(e-r)/(t-r):0}function Yo(r,t,e){return(1-e)*r+e*t}function E0(r,t,e,n){return Yo(r,t,1-Math.exp(-e*n))}function T0(r,t=1){return t-Math.abs(Mh(r,t*2)-t)}function b0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function w0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function A0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function R0(r,t){return r+Math.random()*(t-r)}function C0(r){return r*(.5-Math.random())}function P0(r){r!==void 0&&(pf=r);let t=pf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function D0(r){return r*Xo}function L0(r){return r*aa}function I0(r){return(r&r-1)===0&&r!==0}function U0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function N0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function F0(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),f=s((t-n)/2),d=o((t-n)/2),h=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*f,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*h,a*c);break;case"YXY":r.set(l*h,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ep={DEG2RAD:Xo,RAD2DEG:aa,generateUUID:xo,clamp:He,euclideanModulo:Mh,mapLinear:y0,inverseLerp:S0,lerp:Yo,damp:E0,pingpong:T0,smoothstep:b0,smootherstep:w0,randInt:A0,randFloat:R0,randFloatSpread:C0,seededRandom:P0,degToRad:D0,radToDeg:L0,isPowerOfTwo:I0,ceilPowerOfTwo:U0,floorPowerOfTwo:N0,setQuaternionFromProperEuler:F0,normalize:mn,denormalize:zs};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,s,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],E=i[4],v=i[7],A=i[2],w=i[5],S=i[8];return s[0]=o*_+a*y+l*A,s[3]=o*m+a*E+l*w,s[6]=o*p+a*v+l*S,s[1]=c*_+u*y+f*A,s[4]=c*m+u*E+f*w,s[7]=c*p+u*v+f*S,s[2]=d*_+h*y+g*A,s[5]=d*m+h*E+g*w,s[8]=d*p+h*v+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=e*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=h*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ql.makeScale(t,e)),this}rotate(t){return this.premultiply(Ql.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ql=new Zt;function Tp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function El(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function O0(){const r=El("canvas");return r.style.display="block",r}const mf={};function Fo(r){r in mf||(mf[r]=!0,console.warn(r))}function B0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function z0(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function k0(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:go,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xi?Vl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const _f=[.64,.33,.3,.6,.15,.06],gf=[.2126,.7152,.0722],vf=[.3127,.329],xf=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mf=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[go]:{primaries:_f,whitePoint:vf,transfer:Vl,toXYZ:xf,fromXYZ:Mf,luminanceCoefficients:gf,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:_f,whitePoint:vf,transfer:pe,toXYZ:xf,fromXYZ:Mf,luminanceCoefficients:gf,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}});let xs;class H0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=El("canvas")),xs.width=t.width,xs.height=t.height;const n=xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=El("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ji(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let V0=0;class bp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=xo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(tc(i[o].image)):s.push(tc(i[o]))}else s=tc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function tc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?H0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G0=0;class un extends vo{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=Zr,i=Zr,s=xi,o=Kr,a=Mi,l=Qi,c=un.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=xo(),this.name="",this.source=new bp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yl:t.x=t.x-Math.floor(t.x);break;case Zr:t.x=t.x<0?0:1;break;case su:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yl:t.y=t.y-Math.floor(t.y);break;case Zr:t.y=t.y<0?0:1;break;case su:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=hp;un.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,i=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(h+1)/2,A=(p+1)/2,w=(u+d)/4,S=(f+_)/4,R=(g+m)/4;return E>v&&E>A?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=S/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=S/s,i=R/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W0 extends vo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new un(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends W0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wp extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=h,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const A=Math.sqrt(E),w=Math.atan2(A,p*y);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const v=a*y;if(l=l*m+d*v,c=c*m+h*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*h-c*d,t[e+1]=l*g+u*d+c*f-a*h,t[e+2]=c*g+u*h+a*d-l*f,t[e+3]=u*g-a*f-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-i)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*i+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ec.copy(this).projectOnVector(t),this.sub(ec)}reflect(t){return this.sub(ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ec=new B,yf=new Mr;class ps{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(t.matrixWorld),this.union(Ea)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),Ta.subVectors(this.max,bo),Ms.subVectors(t.a,bo),ys.subVectors(t.b,bo),Ss.subVectors(t.c,bo),rr.subVectors(ys,Ms),sr.subVectors(Ss,ys),Ur.subVectors(Ms,Ss);let e=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Ur.z,Ur.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Ur.z,0,-Ur.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Ur.y,Ur.x,0];return!nc(e,Ms,ys,Ss,Ta)||(e=[1,0,0,0,1,0,0,0,1],!nc(e,Ms,ys,Ss,Ta))?!1:(ba.crossVectors(rr,sr),e=[ba.x,ba.y,ba.z],nc(e,Ms,ys,Ss,Ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Oi=[new B,new B,new B,new B,new B,new B,new B,new B],di=new B,Ea=new ps,Ms=new B,ys=new B,Ss=new B,rr=new B,sr=new B,Ur=new B,bo=new B,Ta=new B,ba=new B,Nr=new B;function nc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Nr.fromArray(r,s);const a=i.x*Math.abs(Nr.x)+i.y*Math.abs(Nr.y)+i.z*Math.abs(Nr.z),l=t.dot(Nr),c=e.dot(Nr),u=n.dot(Nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const X0=new ps,wo=new B,ic=new B;class va{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):X0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const e=wo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(ic)),this.expandByPoint(wo.copy(t.center).sub(ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new B,rc=new B,wa=new B,or=new B,sc=new B,Aa=new B,oc=new B;class Rp{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){rc.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),or.copy(this.origin).sub(rc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(wa),a=or.dot(this.direction),l=-or.dot(wa),c=or.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(rc).addScaledVector(wa,d),h}intersectSphere(t,e){Bi.subVectors(t.center,this.origin);const n=Bi.dot(this.direction),i=Bi.dot(Bi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,n,i,s){sc.subVectors(e,t),Aa.subVectors(n,t),oc.crossVectors(sc,Aa);let o=this.direction.dot(oc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,t);const l=a*this.direction.dot(Aa.crossVectors(or,Aa));if(l<0)return null;const c=a*this.direction.dot(sc.cross(or));if(c<0||l+c>o)return null;const u=-a*or.dot(oc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,s,o,a,l,c,u,f,d,h,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,f,d,h,g,_,m)}set(t,e,n,i,s,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Es.setFromMatrixColumn(t,0).length(),s=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=h+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+h*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;e[0]=d+_*a,e[4]=g*a-h,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-h,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*f,e[8]=g*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+_,e[5]=o*u,e[9]=h*f-g,e[2]=g*f-h,e[6]=a*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Y0,t,q0)}lookAt(t,e,n){const i=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ar.crossVectors(n,Un),ar.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ar.crossVectors(n,Un)),ar.normalize(),Ra.crossVectors(Un,ar),i[0]=ar.x,i[4]=Ra.x,i[8]=Un.x,i[1]=ar.y,i[5]=Ra.y,i[9]=Un.y,i[2]=ar.z,i[6]=Ra.z,i[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],E=n[7],v=n[11],A=n[15],w=i[0],S=i[4],R=i[8],M=i[12],x=i[1],P=i[5],I=i[9],F=i[13],k=i[2],q=i[6],H=i[10],G=i[14],z=i[3],tt=i[7],D=i[11],at=i[15];return s[0]=o*w+a*x+l*k+c*z,s[4]=o*S+a*P+l*q+c*tt,s[8]=o*R+a*I+l*H+c*D,s[12]=o*M+a*F+l*G+c*at,s[1]=u*w+f*x+d*k+h*z,s[5]=u*S+f*P+d*q+h*tt,s[9]=u*R+f*I+d*H+h*D,s[13]=u*M+f*F+d*G+h*at,s[2]=g*w+_*x+m*k+p*z,s[6]=g*S+_*P+m*q+p*tt,s[10]=g*R+_*I+m*H+p*D,s[14]=g*M+_*F+m*G+p*at,s[3]=y*w+E*x+v*k+A*z,s[7]=y*S+E*P+v*q+A*tt,s[11]=y*R+E*I+v*H+A*D,s[15]=y*M+E*F+v*G+A*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],h=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*h-n*l*h)+_*(+e*l*h-e*c*d+s*o*d-i*o*h+i*c*u-s*l*u)+m*(+e*c*f-e*a*h-s*o*f+n*o*h+s*a*u-n*c*u)+p*(-i*a*u-e*l*f+e*a*d+i*o*f-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],h=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,E=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,v=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,A=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,w=e*y+n*E+i*v+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=y*S,t[1]=(_*d*s-f*m*s-_*i*h+n*m*h+f*i*p-n*d*p)*S,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*S,t[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*h-n*l*h)*S,t[4]=E*S,t[5]=(u*m*s-g*d*s+g*i*h-e*m*h-u*i*p+e*d*p)*S,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*S,t[7]=(o*d*s-u*l*s+u*i*c-e*d*c-o*i*h+e*l*h)*S,t[8]=v*S,t[9]=(g*f*s-u*_*s-g*n*h+e*_*h+u*n*p-e*f*p)*S,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*S,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*h-e*a*h)*S,t[12]=A*S,t[13]=(u*_*i-g*f*i+g*n*d-e*_*d-u*n*m+e*f*m)*S,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*S,t[15]=(o*f*i-u*a*i+u*n*l-e*f*l-o*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,y=l*c,E=l*u,v=l*f,A=n.x,w=n.y,S=n.z;return i[0]=(1-(_+p))*A,i[1]=(h+v)*A,i[2]=(g-E)*A,i[3]=0,i[4]=(h-v)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+E)*S,i[9]=(m-y)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Es.set(i[0],i[1],i[2]).length();const o=Es.set(i[4],i[5],i[6]).length(),a=Es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],pi.copy(this);const c=1/s,u=1/o,f=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=f,pi.elements[9]*=f,pi.elements[10]*=f,e.setFromRotationMatrix(pi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=$i){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let h,g;if(a===$i)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Sl)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=$i){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(o-s),d=(e+t)*c,h=(n+i)*u;let g,_;if(a===$i)g=(o+s)*f,_=-2*f;else if(a===Sl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Es=new B,pi=new me,Y0=new B(0,0,0),q0=new B(1,1,1),ar=new B,Ra=new B,Un=new B,Sf=new me,Ef=new Mr;class Si{constructor(t=0,e=0,n=0,i=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $0=0;const Tf=new B,Ts=new Mr,zi=new me,Ca=new B,Ao=new B,Z0=new B,K0=new Mr,bf=new B(1,0,0),wf=new B(0,1,0),Af=new B(0,0,1),Rf={type:"added"},j0={type:"removed"},bs={type:"childadded",child:null},ac={type:"childremoved",child:null};class tn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new B,e=new Si,n=new Mr,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Zt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(bf,t)}rotateY(t){return this.rotateOnAxis(wf,t)}rotateZ(t){return this.rotateOnAxis(Af,t)}translateOnAxis(t,e){return Tf.copy(t).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bf,t)}translateY(t){return this.translateOnAxis(wf,t)}translateZ(t){return this.translateOnAxis(Af,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ca.copy(t):Ca.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Ao,Ca,this.up):zi.lookAt(Ca,Ao,this.up),this.quaternion.setFromRotationMatrix(zi),i&&(zi.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(zi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rf),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j0),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rf),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,Z0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,K0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}tn.DEFAULT_UP=new B(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new B,ki=new B,lc=new B,Hi=new B,ws=new B,As=new B,Cf=new B,cc=new B,uc=new B,hc=new B,fc=new Le,dc=new Le,pc=new Le;class vi{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mi.subVectors(t,e),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){mi.subVectors(i,e),ki.subVectors(n,e),lc.subVectors(t,e);const o=mi.dot(mi),a=mi.dot(ki),l=mi.dot(lc),c=ki.dot(ki),u=ki.dot(lc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return fc.setScalar(0),dc.setScalar(0),pc.setScalar(0),fc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,n),pc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(fc,s.x),o.addScaledVector(dc,s.y),o.addScaledVector(pc,s.z),o}static isFrontFacing(t,e,n,i){return mi.subVectors(n,e),ki.subVectors(t,e),mi.cross(ki).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),mi.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return vi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ws.subVectors(i,n),As.subVectors(s,n),cc.subVectors(t,n);const l=ws.dot(cc),c=As.dot(cc);if(l<=0&&c<=0)return e.copy(n);uc.subVectors(t,i);const u=ws.dot(uc),f=As.dot(uc);if(u>=0&&f<=u)return e.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ws,o);hc.subVectors(t,s);const h=ws.dot(hc),g=As.dot(hc);if(g>=0&&h<=g)return e.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(As,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Cf.subVectors(s,i),a=(f-u)/(f-u+(h-g)),e.copy(i).addScaledVector(Cf,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ws,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function mc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=Mh(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=mc(o,s,t+1/3),this.g=mc(o,s,t),this.b=mc(o,s,t-1/3)}return ae.toWorkingColorSpace(this,i),this}setStyle(t,e=kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kn){const n=Cp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return ae.fromWorkingColorSpace(on.copy(this),t),Math.round(He(on.r*255,0,255))*65536+Math.round(He(on.g*255,0,255))*256+Math.round(He(on.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(on.copy(this),e);const n=on.r,i=on.g,s=on.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=kn){ae.fromWorkingColorSpace(on.copy(this),t);const e=on.r,n=on.g,i=on.b;return t!==kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+e,lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(lr),t.getHSL(Pa);const n=Yo(lr.h,Pa.h,e),i=Yo(lr.s,Pa.s,e),s=Yo(lr.l,Pa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new zt;zt.NAMES=Cp;let J0=0;class xa extends vo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=xo(),this.name="",this.blending=Ys,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Zc,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$c&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==qr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class la extends xa{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yi=Q0();function Q0(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function tg(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=He(r,-65504,65504),Yi.floatView[0]=r;const t=Yi.uint32View[0],e=t>>23&511;return Yi.baseTable[e]+((t&8388607)>>Yi.shiftTable[e])}function eg(r){const t=r>>10;return Yi.uint32View[0]=Yi.mantissaTable[Yi.offsetTable[t]+(r&1023)]+Yi.exponentTable[t],Yi.floatView[0]}const ng={toHalfFloat:tg,fromHalfFloat:eg},Be=new B,Da=new Yt;class ai{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ff,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ff&&(t.usage=this.usage),t}}class Pp extends ai{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dp extends ai{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends ai{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ig=0;const Qn=new me,_c=new tn,Rs=new B,Nn=new ps,Ro=new ps,Ke=new B;class hi extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tp(t)?Dp:Pp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(Nn.min,Ro.min),Nn.expandByPoint(Ke),Ke.addVectors(Nn.max,Ro.max),Nn.expandByPoint(Ke)):(Nn.expandByPoint(Ro.min),Nn.expandByPoint(Ro.max))}Nn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ke.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ke.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(t,c),Ke.add(Rs)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new B,l[R]=new B;const c=new B,u=new B,f=new B,d=new Yt,h=new Yt,g=new Yt,_=new B,m=new B;function p(R,M,x){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(P),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(P),a[R].add(_),a[M].add(_),a[x].add(_),l[R].add(m),l[M].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,M=y.length;R<M;++R){const x=y[R],P=x.start,I=x.count;for(let F=P,k=P+I;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new B,v=new B,A=new B,w=new B;function S(R){A.fromBufferAttribute(i,R),w.copy(A);const M=a[R];E.copy(M),E.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(w,M);const P=v.dot(l[R])<0?-1:1;o.setXYZW(R,E.x,E.y,E.z,P)}for(let R=0,M=y.length;R<M;++R){const x=y[R],P=x.start,I=x.count;for(let F=P,k=P+I;F<k;F+=3)S(t.getX(F+0)),S(t.getX(F+1)),S(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ai(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(t)for(let d=0,h=t.count;d<h;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new ai(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=t(d,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pf=new me,Fr=new Rp,La=new va,Df=new B,Ia=new B,Ua=new B,Na=new B,gc=new B,Fa=new B,Lf=new B,Oa=new B;class Ce extends tn{constructor(t=new hi,e=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(gc.fromBufferAttribute(f,t),o?Fa.addScaledVector(gc,u):Fa.addScaledVector(gc.sub(e),u))}e.add(Fa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),Fr.copy(t.ray).recast(t.near),!(La.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(La,Df)===null||Fr.origin.distanceToSquared(Df)>(t.far-t.near)**2))&&(Pf.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(Pf),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=y,A=E;v<A;v+=3){const w=a.getX(v),S=a.getX(v+1),R=a.getX(v+2);i=Ba(this,p,t,n,c,u,f,w,S,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);i=Ba(this,o,t,n,c,u,f,y,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=y,A=E;v<A;v+=3){const w=v,S=v+1,R=v+2;i=Ba(this,p,t,n,c,u,f,w,S,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,v=m+2;i=Ba(this,o,t,n,c,u,f,y,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function rg(r,t,e,n,i,s,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===wr,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Oa);return c<e.near||c>e.far?null:{distance:c,point:Oa.clone(),object:r}}function Ba(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ia),r.getVertexPosition(l,Ua),r.getVertexPosition(c,Na);const u=rg(r,t,e,n,Ia,Ua,Na,Lf);if(u){const f=new B;vi.getBarycoord(Lf,Ia,Ua,Na,f),i&&(u.uv=vi.getInterpolatedAttribute(i,a,l,c,f,new Yt)),s&&(u.uv1=vi.getInterpolatedAttribute(s,a,l,c,f,new Yt)),o&&(u.normal=vi.getInterpolatedAttribute(o,a,l,c,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};vi.getNormal(Ia,Ua,Na,d.normal),u.face=d,u.barycoord=f}return u}class Mo extends hi{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(f,2));function g(_,m,p,y,E,v,A,w,S,R,M){const x=v/S,P=A/R,I=v/2,F=A/2,k=w/2,q=S+1,H=R+1;let G=0,z=0;const tt=new B;for(let D=0;D<H;D++){const at=D*P-F;for(let Ct=0;Ct<q;Ct++){const Jt=Ct*x-I;tt[_]=Jt*y,tt[m]=at*E,tt[p]=k,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=w>0?1:-1,u.push(tt.x,tt.y,tt.z),f.push(Ct/S),f.push(1-D/R),G+=1}}for(let D=0;D<R;D++)for(let at=0;at<S;at++){const Ct=d+at+q*D,Jt=d+at+q*(D+1),Z=d+(at+1)+q*(D+1),et=d+(at+1)+q*D;l.push(Ct,Jt,et),l.push(Jt,Z,et),z+=6}a.addGroup(h,z,M),h+=z,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function gn(r){const t={};for(let e=0;e<r.length;e++){const n=ao(r[e]);for(const i in n)t[i]=n[i]}return t}function sg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Lp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const og={clone:ao,merge:gn};var ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends xa{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ag,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=sg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ip extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=$i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new B,If=new Yt,Uf=new Yt;class ei extends Ip{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cr.x,cr.y).multiplyScalar(-t/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-t/cr.z)}getViewSize(t,e){return this.getViewBounds(t,If,Uf),e.subVectors(Uf,If)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Ps=1;class cg extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ei(Cs,Ps,t,e);i.layers=this.layers,this.add(i);const s=new ei(Cs,Ps,t,e);s.layers=this.layers,this.add(s);const o=new ei(Cs,Ps,t,e);o.layers=this.layers,this.add(o);const a=new ei(Cs,Ps,t,e);a.layers=this.layers,this.add(a);const l=new ei(Cs,Ps,t,e);l.layers=this.layers,this.add(l);const c=new ei(Cs,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Up extends un{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:io,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ug extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Up(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mo(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:vr});s.uniforms.tEquirect.value=e;const o=new Ce(i,s),a=e.minFilter;return e.minFilter===Kr&&(e.minFilter=xi),new cg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const vc=new B,hg=new B,fg=new Zt;class Vr{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=vc.subVectors(n,e).cross(hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fg.getNormalMatrix(t),i=this.coplanarPoint(vc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new va,za=new B;class Sh{constructor(t=new Vr,e=new Vr,n=new Vr,i=new Vr,s=new Vr,o=new Vr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$i){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],h=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],E=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-h,v-p).normalize(),n[1].setComponents(l+s,d+c,m+h,v+p).normalize(),n[2].setComponents(l+o,d+u,m+g,v+y).normalize(),n[3].setComponents(l-o,d-u,m-g,v-y).normalize(),n[4].setComponents(l-a,d-f,m-_,v-E).normalize(),e===$i)n[5].setComponents(l+a,d+f,m+_,v+E).normalize();else if(e===Sl)n[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(t){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(t.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(za.x=i.normal.x>0?t.max.x:t.min.x,za.y=i.normal.y>0?t.max.y:t.min.y,za.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Np(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function dg(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ms extends hi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=t/a,d=e/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let E=0;E<c;E++){const v=E*f-s;g.push(v,-y,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const E=y+c*p,v=y+c*(p+1),A=y+1+c*(p+1),w=y+1+c*p;h.push(E,v,w),h.push(v,A,w)}this.setIndex(h),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.widthSegments,t.heightSegments)}}var pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
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
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mg=`#ifdef USE_AOMAP
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
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
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
#endif`,Rg=`#ifdef USE_BUMPMAP
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Og=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ev=`#ifdef USE_GRADIENTMAP
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
}`,nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,ov=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,fv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dv=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ev=`#if defined( USE_POINTS_UV )
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
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`#ifdef USE_MORPHTARGETS
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
#endif`,Pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fv=`#ifdef USE_NORMALMAP
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
#endif`,Ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Jv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#define LAMBERT
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
}`,Px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Dx=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nx=`#define PHONG
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
}`,Fx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ox=`#define STANDARD
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
}`,Bx=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,zx=`#define TOON
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
}`,kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Hx=`uniform float size;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,Wx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Xx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:_g,alphamap_pars_fragment:gg,alphatest_fragment:vg,alphatest_pars_fragment:xg,aomap_fragment:Mg,aomap_pars_fragment:yg,batching_pars_vertex:Sg,batching_vertex:Eg,begin_vertex:Tg,beginnormal_vertex:bg,bsdfs:wg,iridescence_fragment:Ag,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Dg,clipping_planes_vertex:Lg,color_fragment:Ig,color_pars_fragment:Ug,color_pars_vertex:Ng,color_vertex:Fg,common:Og,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:zg,displacementmap_pars_vertex:kg,displacementmap_vertex:Hg,emissivemap_fragment:Vg,emissivemap_pars_fragment:Gg,colorspace_fragment:Wg,colorspace_pars_fragment:Xg,envmap_fragment:Yg,envmap_common_pars_fragment:qg,envmap_pars_fragment:$g,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:ov,envmap_vertex:Kg,fog_vertex:jg,fog_pars_vertex:Jg,fog_fragment:Qg,fog_pars_fragment:tv,gradientmap_pars_fragment:ev,lightmap_pars_fragment:nv,lights_lambert_fragment:iv,lights_lambert_pars_fragment:rv,lights_pars_begin:sv,lights_toon_fragment:av,lights_toon_pars_fragment:lv,lights_phong_fragment:cv,lights_phong_pars_fragment:uv,lights_physical_fragment:hv,lights_physical_pars_fragment:fv,lights_fragment_begin:dv,lights_fragment_maps:pv,lights_fragment_end:mv,logdepthbuf_fragment:_v,logdepthbuf_pars_fragment:gv,logdepthbuf_pars_vertex:vv,logdepthbuf_vertex:xv,map_fragment:Mv,map_pars_fragment:yv,map_particle_fragment:Sv,map_particle_pars_fragment:Ev,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:bv,morphinstance_vertex:wv,morphcolor_vertex:Av,morphnormal_vertex:Rv,morphtarget_pars_vertex:Cv,morphtarget_vertex:Pv,normal_fragment_begin:Dv,normal_fragment_maps:Lv,normal_pars_fragment:Iv,normal_pars_vertex:Uv,normal_vertex:Nv,normalmap_pars_fragment:Fv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:zv,iridescence_pars_fragment:kv,opaque_fragment:Hv,packing:Vv,premultiplied_alpha_fragment:Gv,project_vertex:Wv,dithering_fragment:Xv,dithering_pars_fragment:Yv,roughnessmap_fragment:qv,roughnessmap_pars_fragment:$v,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:Kv,shadowmap_vertex:jv,shadowmask_pars_fragment:Jv,skinbase_vertex:Qv,skinning_pars_vertex:tx,skinning_vertex:ex,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:rx,tonemapping_fragment:sx,tonemapping_pars_fragment:ox,transmission_fragment:ax,transmission_pars_fragment:lx,uv_pars_fragment:cx,uv_pars_vertex:ux,uv_vertex:hx,worldpos_vertex:fx,background_vert:dx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:_x,cube_vert:gx,cube_frag:vx,depth_vert:xx,depth_frag:Mx,distanceRGBA_vert:yx,distanceRGBA_frag:Sx,equirect_vert:Ex,equirect_frag:Tx,linedashed_vert:bx,linedashed_frag:wx,meshbasic_vert:Ax,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Px,meshmatcap_vert:Dx,meshmatcap_frag:Lx,meshnormal_vert:Ix,meshnormal_frag:Ux,meshphong_vert:Nx,meshphong_frag:Fx,meshphysical_vert:Ox,meshphysical_frag:Bx,meshtoon_vert:zx,meshtoon_frag:kx,points_vert:Hx,points_frag:Vx,shadow_vert:Gx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:Yx},_t={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Ai={basic:{uniforms:gn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:gn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new zt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:gn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:gn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:gn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new zt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:gn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:gn([_t.points,_t.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:gn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:gn([_t.common,_t.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:gn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:gn([_t.sprite,_t.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:gn([_t.common,_t.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:gn([_t.lights,_t.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Ai.physical={uniforms:gn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const ka={r:0,b:0,g:0},Br=new Si,qx=new me;function $x(r,t,e,n,i,s,o){const a=new zt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function _(y){let E=!1;const v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),E=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===kl)?(u===void 0&&(u=new Ce(new Mo(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:ao(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Br.copy(E.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qx.makeRotationFromEuler(Br)),u.material.toneMapped=ae.getTransfer(v.colorSpace)!==pe,(f!==v||d!==v.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,h=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ce(new ms(2,2),new Ar({name:"BackgroundMaterial",uniforms:ao(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ae.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,h=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(ka,Lp(r)),n.buffers.color.setClear(ka.r,ka.g,ka.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function Zx(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(x,P,I,F,k){let q=!1;const H=f(F,I,P);s!==H&&(s=H,c(s.object)),q=h(x,F,I,k),q&&g(x,F,I,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(x,P,I,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,P,I){const F=I.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let q=k[P.id];q===void 0&&(q={},k[P.id]=q);let H=q[F];return H===void 0&&(H=d(l()),q[F]=H),H}function d(x){const P=[],I=[],F=[];for(let k=0;k<e;k++)P[k]=0,I[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:F,object:x,attributes:{},index:null}}function h(x,P,I,F){const k=s.attributes,q=P.attributes;let H=0;const G=I.getAttributes();for(const z in G)if(G[z].location>=0){const D=k[z];let at=q[z];if(at===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),D===void 0||D.attribute!==at||at&&D.data!==at.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(x,P,I,F){const k={},q=P.attributes;let H=0;const G=I.getAttributes();for(const z in G)if(G[z].location>=0){let D=q[z];D===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const at={};at.attribute=D,D&&D.data&&(at.data=D.data),k[z]=at,H++}s.attributes=k,s.attributesNum=H,s.index=F}function _(){const x=s.newAttributes;for(let P=0,I=x.length;P<I;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const I=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;I[x]=1,F[x]===0&&(r.enableVertexAttribArray(x),F[x]=1),k[x]!==P&&(r.vertexAttribDivisor(x,P),k[x]=P)}function y(){const x=s.newAttributes,P=s.enabledAttributes;for(let I=0,F=P.length;I<F;I++)P[I]!==x[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function E(x,P,I,F,k,q,H){H===!0?r.vertexAttribIPointer(x,P,I,k,q):r.vertexAttribPointer(x,P,I,F,k,q)}function v(x,P,I,F){_();const k=F.attributes,q=I.getAttributes(),H=P.defaultAttributeValues;for(const G in q){const z=q[G];if(z.location>=0){let tt=k[G];if(tt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),tt!==void 0){const D=tt.normalized,at=tt.itemSize,Ct=t.get(tt);if(Ct===void 0)continue;const Jt=Ct.buffer,Z=Ct.type,et=Ct.bytesPerElement,gt=Z===r.INT||Z===r.UNSIGNED_INT||tt.gpuType===ph;if(tt.isInterleavedBufferAttribute){const nt=tt.data,Et=nt.stride,wt=tt.offset;if(nt.isInstancedInterleavedBuffer){for(let kt=0;kt<z.locationSize;kt++)p(z.location+kt,nt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let kt=0;kt<z.locationSize;kt++)m(z.location+kt);r.bindBuffer(r.ARRAY_BUFFER,Jt);for(let kt=0;kt<z.locationSize;kt++)E(z.location+kt,at/z.locationSize,Z,D,Et*et,(wt+at/z.locationSize*kt)*et,gt)}else{if(tt.isInstancedBufferAttribute){for(let nt=0;nt<z.locationSize;nt++)p(z.location+nt,tt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let nt=0;nt<z.locationSize;nt++)m(z.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Jt);for(let nt=0;nt<z.locationSize;nt++)E(z.location+nt,at/z.locationSize,Z,D,at*et,at/z.locationSize*nt*et,gt)}}else if(H!==void 0){const D=H[G];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(z.location,D);break;case 3:r.vertexAttrib3fv(z.location,D);break;case 4:r.vertexAttrib4fv(z.location,D);break;default:r.vertexAttrib1fv(z.location,D)}}}}y()}function A(){R();for(const x in n){const P=n[x];for(const I in P){const F=P[I];for(const k in F)u(F[k].object),delete F[k];delete P[I]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const I in P){const F=P[I];for(const k in F)u(F[k].object),delete F[k];delete P[I]}delete n[x.id]}function S(x){for(const P in n){const I=n[P];if(I[x.id]===void 0)continue;const F=I[x.id];for(const k in F)u(F[k].object),delete F[k];delete I[x.id]}}function R(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Kx(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];e.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==Mi&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const R=S===_o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Qi&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Ci&&!R)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function Jx(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Vr,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,E=y*4;let v=p.clippingState||null;l.value=v,v=u(g,d,E,h);for(let A=0;A!==E;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=h;E!==_;++E,v+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Qx(r){let t=new WeakMap;function e(o,a){return a===iu?o.mapping=io:a===ru&&(o.mapping=ro),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===iu||a===ru)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ug(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Fp extends Ip{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vs=4,Nf=[.125,.215,.35,.446,.526,.582],$r=20,xc=new Fp,Ff=new zt;let Mc=null,yc=0,Sc=0,Ec=!1;const Gr=(1+Math.sqrt(5))/2,Ds=1/Gr,Of=[new B(-Gr,Ds,0),new B(Gr,Ds,0),new B(-Ds,0,Gr),new B(Ds,0,Gr),new B(0,Gr,-Ds),new B(0,Gr,Ds),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Lu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Mc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mc,yc,Sc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,Ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===io||t.mapping===ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:_o,format:Mi,colorSpace:go,depthBuffer:!1},i=Bf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tM(s)),this._blurMaterial=eM(s,t,e)}return i}_compileMaterial(t){const e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,xc)}_sceneToCubeUV(t,e,n,i){const a=new ei(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ff),u.toneMapping=xr,u.autoClear=!1;const h=new la({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Ce(new Mo,h);let _=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,_=!0):(h.color.copy(Ff),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Ha(i,y*E,p>2?E:0,E,E),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===io||t.mapping===ro;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ha(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Of[(i-s-1)%Of.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ce(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*$r-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):$r;m>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$r}`);const p=[];let y=0;for(let S=0;S<$r;++S){const R=S/_,M=Math.exp(-R*R/2);p.push(M),S===0?y+=M:S<m&&(y+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[i],A=3*v*(i>E-Vs?i-E+Vs:0),w=4*(this._cubeSize-v);Ha(e,A,w,3*v,2*v),l.setRenderTarget(e),l.render(f,xc)}}function tM(r){const t=[],e=[],n=[];let i=r;const s=r-Vs+1+Nf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Vs?l=Nf[o-r+Vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),E=new Float32Array(m*g*h),v=new Float32Array(p*g*h);for(let w=0;w<h;w++){const S=w%3*2/3-1,R=w>2?0:-1,M=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];y.set(M,_*g*w),E.set(d,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const A=new hi;A.setAttribute("position",new ai(y,_)),A.setAttribute("uv",new ai(E,m)),A.setAttribute("faceIndex",new ai(v,p)),t.push(A),i>Vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bf(r,t,e){const n=new ls(r,t,e);return n.texture.mapping=kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function eM(r,t,e){const n=new Float32Array($r),i=new B(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function zf(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function kf(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===iu||l===ru,u=l===io||l===ro;if(c||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Lu(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(e===null&&(e=new Lu(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function iM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Fo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rM(r,t,e,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const h=s.get(d);h&&(t.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let E=0,v=y.length;E<v;E+=3){const A=y[E+0],w=y[E+1],S=y[E+2];d.push(A,w,w,S,S,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,v=y.length/3-1;E<v;E+=3){const A=E+0,w=E+1,S=E+2;d.push(A,w,w,S,S,A)}}else return;const m=new(Tp(d)?Dp:Pp)(d,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function sM(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*o),e.update(h,n,1)}function c(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*o,g),e.update(h,n,g))}function u(d,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,n,1)}function f(d,h,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function oM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function aM(r,t,e){const n=new WeakMap,i=new Le;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let x=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var h=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*w*4*f),R=new wp(S,A,w,f);R.type=Ci,R.needsUpdate=!0;const M=v*4;for(let P=0;P<f;P++){const I=p[P],F=y[P],k=E[P],q=A*w*4*P;for(let H=0;H<I.count;H++){const G=H*M;g===!0&&(i.fromBufferAttribute(I,H),S[q+G+0]=i.x,S[q+G+1]=i.y,S[q+G+2]=i.z,S[q+G+3]=0),_===!0&&(i.fromBufferAttribute(F,H),S[q+G+4]=i.x,S[q+G+5]=i.y,S[q+G+6]=i.z,S[q+G+7]=0),m===!0&&(i.fromBufferAttribute(k,H),S[q+G+8]=i.x,S[q+G+9]=i.y,S[q+G+10]=i.z,S[q+G+11]=k.itemSize===4?i.w:1)}}d={count:f,texture:R,size:new Yt(A,w)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function lM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Op extends un{constructor(t,e,n,i,s,o,a,l,c,u=qs){if(u!==qs&&u!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qs&&(n=as),n===void 0&&u===oo&&(n=so),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bp=new un,Hf=new Op(1,1),zp=new wp,kp=new Ap,Hp=new Up,Vf=[],Gf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),Yf=new Float32Array(4);function yo(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Vf[i];if(s===void 0&&(s=new Float32Array(i),Vf[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function $e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ze(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Gl(r,t){let e=Gf[t];e===void 0&&(e=new Int32Array(t),Gf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function cM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function uM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2fv(this.addr,t),Ze(e,t)}}function hM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;r.uniform3fv(this.addr,t),Ze(e,t)}}function fM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4fv(this.addr,t),Ze(e,t)}}function dM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,n))return;Yf.set(n),r.uniformMatrix2fv(this.addr,!1,Yf),Ze(e,n)}}function pM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,n))return;Xf.set(n),r.uniformMatrix3fv(this.addr,!1,Xf),Ze(e,n)}}function mM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,n))return;Wf.set(n),r.uniformMatrix4fv(this.addr,!1,Wf),Ze(e,n)}}function _M(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function gM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2iv(this.addr,t),Ze(e,t)}}function vM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3iv(this.addr,t),Ze(e,t)}}function xM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4iv(this.addr,t),Ze(e,t)}}function MM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function yM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2uiv(this.addr,t),Ze(e,t)}}function SM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3uiv(this.addr,t),Ze(e,t)}}function EM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4uiv(this.addr,t),Ze(e,t)}}function TM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Hf.compareFunction=Sp,s=Hf):s=Bp,e.setTexture2D(t||s,i)}function bM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||kp,i)}function wM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hp,i)}function AM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zp,i)}function RM(r){switch(r){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return _M;case 35667:case 35671:return gM;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return MM;case 36294:return yM;case 36295:return SM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return AM}}function CM(r,t){r.uniform1fv(this.addr,t)}function PM(r,t){const e=yo(t,this.size,2);r.uniform2fv(this.addr,e)}function DM(r,t){const e=yo(t,this.size,3);r.uniform3fv(this.addr,e)}function LM(r,t){const e=yo(t,this.size,4);r.uniform4fv(this.addr,e)}function IM(r,t){const e=yo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function UM(r,t){const e=yo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function NM(r,t){const e=yo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function FM(r,t){r.uniform1iv(this.addr,t)}function OM(r,t){r.uniform2iv(this.addr,t)}function BM(r,t){r.uniform3iv(this.addr,t)}function zM(r,t){r.uniform4iv(this.addr,t)}function kM(r,t){r.uniform1uiv(this.addr,t)}function HM(r,t){r.uniform2uiv(this.addr,t)}function VM(r,t){r.uniform3uiv(this.addr,t)}function GM(r,t){r.uniform4uiv(this.addr,t)}function WM(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Bp,s[o])}function XM(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||kp,s[o])}function YM(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Hp,s[o])}function qM(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||zp,s[o])}function $M(r){switch(r){case 5126:return CM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return UM;case 35676:return NM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return kM;case 36294:return HM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return qM}}class ZM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=RM(e.type)}}class KM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$M(e.type)}}class jM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function qf(r,t){r.seq.push(t),r.map[t.id]=t}function JM(r,t,e){const n=r.name,i=n.length;for(Tc.lastIndex=0;;){const s=Tc.exec(n),o=Tc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){qf(e,c===void 0?new ZM(a,r,t):new KM(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new jM(a),qf(e,f)),e=f}}}class cl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);JM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function $f(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const QM=37297;let ty=0;function ey(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Zf=new Zt;function ny(r){ae._getMatrix(Zf,ae.workingColorSpace,r);const t=`mat3( ${Zf.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case Vl:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Kf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ey(r.getShaderSource(t),o)}else return i}function iy(r,t){const e=ny(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ry(r,t){let e;switch(t){case r0:e="Linear";break;case s0:e="Reinhard";break;case o0:e="Cineon";break;case a0:e="ACESFilmic";break;case c0:e="AgX";break;case up:e="Neutral";break;case l0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Va=new B;function sy(){ae.getLuminanceCoefficients(Va);const r=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function ay(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ly(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Oo(r){return r!==""}function jf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(r){return r.replace(cy,hy)}const uy=new Map;function hy(r,t){let e=jt[t];if(e===void 0){const n=uy.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Iu(e)}const fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(r){return r.replace(fy,dy)}function dy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function td(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function py(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ap?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===lp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(t="SHADOWMAP_TYPE_VSM"),t}function my(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case io:case ro:t="ENVMAP_TYPE_CUBE";break;case kl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _y(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ro:t="ENVMAP_MODE_REFRACTION";break}return t}function gy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cp:t="ENVMAP_BLENDING_MULTIPLY";break;case n0:t="ENVMAP_BLENDING_MIX";break;case i0:t="ENVMAP_BLENDING_ADD";break}return t}function vy(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xy(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=py(e),c=my(e),u=_y(e),f=gy(e),d=vy(e),h=oy(e),g=ay(s),_=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oo).join(`
`),p.length>0&&(p+=`
`)):(m=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),p=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xr?"#define TONE_MAPPING":"",e.toneMapping!==xr?jt.tonemapping_pars_fragment:"",e.toneMapping!==xr?ry("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,iy("linearToOutputTexel",e.outputColorSpace),sy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oo).join(`
`)),o=Iu(o),o=jf(o,e),o=Jf(o,e),a=Iu(a),a=jf(a,e),a=Jf(a,e),o=Qf(o),a=Qf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+o,v=y+p+a,A=$f(i,i.VERTEX_SHADER,E),w=$f(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(P){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(w).trim();let q=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const G=Kf(i,A,"vertex"),z=Kf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+G+`
`+z)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||k==="")&&(H=!1);H&&(P.diagnostics={runnable:q,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(A),i.deleteShader(w),R=new cl(i,_),M=ly(i,_)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,QM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ty++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let My=0;class yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sy(t),e.set(t,n)),n}}class Sy{constructor(t){this.id=My++,this.code=t,this.usedTimes=0}}function Ey(r,t,e,n,i,s,o){const a=new yh,l=new yy,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,I,F){const k=I.fog,q=F.geometry,H=M.isMeshStandardMaterial?I.environment:null,G=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),z=G&&G.mapping===kl?G.image.height:null,tt=g[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,at=D!==void 0?D.length:0;let Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let Jt,Z,et,gt;if(tt){const vt=Ai[tt];Jt=vt.vertexShader,Z=vt.fragmentShader}else Jt=M.vertexShader,Z=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),gt=l.getFragmentShaderID(M);const nt=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),wt=F.isInstancedMesh===!0,kt=F.isBatchedMesh===!0,Qt=!!M.map,Ht=!!M.matcap,Dt=!!G,U=!!M.aoMap,_e=!!M.lightMap,Nt=!!M.bumpMap,V=!!M.normalMap,Tt=!!M.displacementMap,ie=!!M.emissiveMap,At=!!M.metalnessMap,C=!!M.roughnessMap,T=M.anisotropy>0,Y=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,K=M.sheen>0,ht=M.transmission>0,lt=T&&!!M.anisotropyMap,pt=Y&&!!M.clearcoatMap,Wt=Y&&!!M.clearcoatNormalMap,it=Y&&!!M.clearcoatRoughnessMap,ot=J&&!!M.iridescenceMap,It=J&&!!M.iridescenceThicknessMap,Lt=K&&!!M.sheenColorMap,xt=K&&!!M.sheenRoughnessMap,qt=!!M.specularMap,Ut=!!M.specularColorMap,oe=!!M.specularIntensityMap,L=ht&&!!M.transmissionMap,ut=ht&&!!M.thicknessMap,$=!!M.gradientMap,j=!!M.alphaMap,ct=M.alphaTest>0,ft=!!M.alphaHash,Ft=!!M.extensions;let le=xr;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(le=r.toneMapping);const Pe={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Jt,fragmentShader:Z,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:kt,batchingColor:kt&&F._colorsTexture!==null,instancing:wt,instancingColor:wt&&F.instanceColor!==null,instancingMorph:wt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:go,alphaToCoverage:!!M.alphaToCoverage,map:Qt,matcap:Ht,envMap:Dt,envMapMode:Dt&&G.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:_e,bumpMap:Nt,normalMap:V,displacementMap:d&&Tt,emissiveMap:ie,normalMapObjectSpace:V&&M.normalMapType===d0,normalMapTangentSpace:V&&M.normalMapType===yp,metalnessMap:At,roughnessMap:C,anisotropy:T,anisotropyMap:lt,clearcoat:Y,clearcoatMap:pt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:J,iridescenceMap:ot,iridescenceThicknessMap:It,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:qt,specularColorMap:Ut,specularIntensityMap:oe,transmission:ht,transmissionMap:L,thicknessMap:ut,gradientMap:$,opaque:M.transparent===!1&&M.blending===Ys&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:ft,combine:M.combine,mapUv:Qt&&_(M.map.channel),aoMapUv:U&&_(M.aoMap.channel),lightMapUv:_e&&_(M.lightMap.channel),bumpMapUv:Nt&&_(M.bumpMap.channel),normalMapUv:V&&_(M.normalMap.channel),displacementMapUv:Tt&&_(M.displacementMap.channel),emissiveMapUv:ie&&_(M.emissiveMap.channel),metalnessMapUv:At&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:lt&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(M.sheenRoughnessMap.channel),specularMapUv:qt&&_(M.specularMap.channel),specularColorMapUv:Ut&&_(M.specularColorMap.channel),specularIntensityMapUv:oe&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ut&&_(M.thicknessMap.channel),alphaMapUv:j&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(V||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(Qt||j),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Et,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Ct,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:Qt&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===pe,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vn,flipSided:M.side===Tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(x,M),E(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function y(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let P;if(x){const I=Ai[x];P=og.clone(I.uniforms)}else P=M.uniforms;return P}function A(M,x){let P;for(let I=0,F=u.length;I<F;I++){const k=u[I];if(k.cacheKey===x){P=k,++P.usedTimes;break}}return P===void 0&&(P=new xy(r,x,M,s),u.push(P)),P}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function S(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:S,programs:u,dispose:R}}function Ty(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function by(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ed(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function nd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,h,g,_,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):e.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||by),n.length>1&&n.sort(d||ed),i.length>1&&i.sort(d||ed)}function u(){for(let f=t,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function wy(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new nd,r.set(n,[o])):i>=s.length?(o=new nd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ay(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new zt};break;case"SpotLight":e={position:new B,direction:new B,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function Ry(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Cy=0;function Py(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Dy(r){const t=new Ay,e=Ry(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new me,o=new me;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,E=0,v=0,A=0,w=0,S=0;c.sort(Py);for(let M=0,x=c.length;M<x;M++){const P=c[M],I=P.color,F=P.intensity,k=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=I.r*F,f+=I.g*F,d+=I.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],F);S++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,z=e.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[h]=z,n.directionalShadowMap[h]=q,n.directionalShadowMatrix[h]=P.shadow.matrix,y++}n.directional[h]=H,h++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(I).multiplyScalar(F),H.distance=k,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;const G=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,G.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=G.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=q,v++}_++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(I).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const G=P.shadow,z=e.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==E||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==S)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,R.directionalLength=h,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=E,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=S,n.version=Cy++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function id(r){const t=new Dy(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ly(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new id(r),t.set(i,[a])):s>=o.length?(a=new id(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Iy extends xa{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uy extends xa{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Oy(r,t,e){let n=new Sh;const i=new Yt,s=new Yt,o=new Le,a=new Iy({depthPacking:f0}),l=new Uy,c={},u=e.maxTextureSize,f={[wr]:Tn,[Tn]:wr,[Vn]:Vn},d=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Ny,fragmentShader:Fy}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new hi;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ap;let p=this.type;this.render=function(w,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(vr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==Vi&&this.type===Vi,k=p===Vi&&this.type!==Vi;for(let q=0,H=w.length;q<H;q++){const G=w[q],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const tt=z.getFrameExtents();if(i.multiply(tt),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/tt.x),i.x=s.x*tt.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/tt.y),i.y=s.y*tt.y,z.mapSize.y=s.y)),z.map===null||F===!0||k===!0){const at=this.type!==Vi?{minFilter:qn,magFilter:qn}:{};z.map!==null&&z.map.dispose(),z.map=new ls(i.x,i.y,at),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const D=z.getViewportCount();for(let at=0;at<D;at++){const Ct=z.getViewport(at);o.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),I.viewport(o),z.updateMatrices(G,at),n=z.getFrustum(),v(S,R,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Vi&&y(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,P)};function y(w,S){const R=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ls(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,R,d,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,R,h,_,null)}function E(w,S,R,M){let x=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=R.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const I=x.uuid,F=S.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let q=k[F];q===void 0&&(q=x.clone(),k[F]=q,S.addEventListener("dispose",A)),x=q}if(x.visible=S.visible,x.wireframe=S.wireframe,M===Vi?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:f[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=r.properties.get(x);I.light=R}return x}function v(w,S,R,M,x){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Vi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const F=t.update(w),k=w.material;if(Array.isArray(k)){const q=F.groups;for(let H=0,G=q.length;H<G;H++){const z=q[H],tt=k[z.materialIndex];if(tt&&tt.visible){const D=E(w,tt,M,x);w.onBeforeShadow(r,w,S,R,F,D,z),r.renderBufferDirect(R,null,F,D,w,z),w.onAfterShadow(r,w,S,R,F,D,z)}}}else if(k.visible){const q=E(w,k,M,x);w.onBeforeShadow(r,w,S,R,F,q,null),r.renderBufferDirect(R,null,F,q,w,null),w.onAfterShadow(r,w,S,R,F,q,null)}}const I=w.children;for(let F=0,k=I.length;F<k;F++)v(I[F],S,R,M,x)}function A(w){w.target.removeEventListener("dispose",A);for(const R in c){const M=c[R],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const By={[Kc]:jc,[Jc]:eu,[Qc]:nu,[no]:tu,[jc]:Kc,[eu]:Jc,[nu]:Qc,[tu]:no};function zy(r,t){function e(){let L=!1;const ut=new Le;let $=null;const j=new Le(0,0,0,0);return{setMask:function(ct){$!==ct&&!L&&(r.colorMask(ct,ct,ct,ct),$=ct)},setLocked:function(ct){L=ct},setClear:function(ct,ft,Ft,le,Pe){Pe===!0&&(ct*=le,ft*=le,Ft*=le),ut.set(ct,ft,Ft,le),j.equals(ut)===!1&&(r.clearColor(ct,ft,Ft,le),j.copy(ut))},reset:function(){L=!1,$=null,j.set(-1,0,0,0)}}}function n(){let L=!1,ut=!1,$=null,j=null,ct=null;return{setReversed:function(ft){if(ut!==ft){const Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const le=ct;ct=null,this.setClear(le)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?nt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(ft){$!==ft&&!L&&(r.depthMask(ft),$=ft)},setFunc:function(ft){if(ut&&(ft=By[ft]),j!==ft){switch(ft){case Kc:r.depthFunc(r.NEVER);break;case jc:r.depthFunc(r.ALWAYS);break;case Jc:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case Qc:r.depthFunc(r.EQUAL);break;case tu:r.depthFunc(r.GEQUAL);break;case eu:r.depthFunc(r.GREATER);break;case nu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ft}},setLocked:function(ft){L=ft},setClear:function(ft){ct!==ft&&(ut&&(ft=1-ft),r.clearDepth(ft),ct=ft)},reset:function(){L=!1,$=null,j=null,ct=null,ut=!1}}}function i(){let L=!1,ut=null,$=null,j=null,ct=null,ft=null,Ft=null,le=null,Pe=null;return{setTest:function(vt){L||(vt?nt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(vt){ut!==vt&&!L&&(r.stencilMask(vt),ut=vt)},setFunc:function(vt,bt,$t){($!==vt||j!==bt||ct!==$t)&&(r.stencilFunc(vt,bt,$t),$=vt,j=bt,ct=$t)},setOp:function(vt,bt,$t){(ft!==vt||Ft!==bt||le!==$t)&&(r.stencilOp(vt,bt,$t),ft=vt,Ft=bt,le=$t)},setLocked:function(vt){L=vt},setClear:function(vt){Pe!==vt&&(r.clearStencil(vt),Pe=vt)},reset:function(){L=!1,ut=null,$=null,j=null,ct=null,ft=null,Ft=null,le=null,Pe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,E=null,v=null,A=null,w=null,S=new zt(0,0,0),R=0,M=!1,x=null,P=null,I=null,F=null,k=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,G=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=G>=2);let tt=null,D={};const at=r.getParameter(r.SCISSOR_BOX),Ct=r.getParameter(r.VIEWPORT),Jt=new Le().fromArray(at),Z=new Le().fromArray(Ct);function et(L,ut,$,j){const ct=new Uint8Array(4),ft=r.createTexture();r.bindTexture(L,ft),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<$;Ft++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(ut+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return ft}const gt={};gt[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(r.DEPTH_TEST),o.setFunc(no),Nt(!1),V(af),nt(r.CULL_FACE),U(vr);function nt(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Et(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function wt(L,ut){return f[L]!==ut?(r.bindFramebuffer(L,ut),f[L]=ut,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ut),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function kt(L,ut){let $=h,j=!1;if(L){$=d.get(ut),$===void 0&&($=[],d.set(ut,$));const ct=L.textures;if($.length!==ct.length||$[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Ft=ct.length;ft<Ft;ft++)$[ft]=r.COLOR_ATTACHMENT0+ft;$.length=ct.length,j=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,j=!0);j&&r.drawBuffers($)}function Qt(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Ht={[qr]:r.FUNC_ADD,[z_]:r.FUNC_SUBTRACT,[k_]:r.FUNC_REVERSE_SUBTRACT};Ht[H_]=r.MIN,Ht[V_]=r.MAX;const Dt={[G_]:r.ZERO,[W_]:r.ONE,[X_]:r.SRC_COLOR,[$c]:r.SRC_ALPHA,[j_]:r.SRC_ALPHA_SATURATE,[Z_]:r.DST_COLOR,[q_]:r.DST_ALPHA,[Y_]:r.ONE_MINUS_SRC_COLOR,[Zc]:r.ONE_MINUS_SRC_ALPHA,[K_]:r.ONE_MINUS_DST_COLOR,[$_]:r.ONE_MINUS_DST_ALPHA,[J_]:r.CONSTANT_COLOR,[Q_]:r.ONE_MINUS_CONSTANT_COLOR,[t0]:r.CONSTANT_ALPHA,[e0]:r.ONE_MINUS_CONSTANT_ALPHA};function U(L,ut,$,j,ct,ft,Ft,le,Pe,vt){if(L===vr){_===!0&&(Et(r.BLEND),_=!1);return}if(_===!1&&(nt(r.BLEND),_=!0),L!==B_){if(L!==m||vt!==M){if((p!==qr||v!==qr)&&(r.blendEquation(r.FUNC_ADD),p=qr,v=qr),vt)switch(L){case Ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lf:r.blendFunc(r.ONE,r.ONE);break;case cf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case uf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case cf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case uf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,E=null,A=null,w=null,S.set(0,0,0),R=0,m=L,M=vt}return}ct=ct||ut,ft=ft||$,Ft=Ft||j,(ut!==p||ct!==v)&&(r.blendEquationSeparate(Ht[ut],Ht[ct]),p=ut,v=ct),($!==y||j!==E||ft!==A||Ft!==w)&&(r.blendFuncSeparate(Dt[$],Dt[j],Dt[ft],Dt[Ft]),y=$,E=j,A=ft,w=Ft),(le.equals(S)===!1||Pe!==R)&&(r.blendColor(le.r,le.g,le.b,Pe),S.copy(le),R=Pe),m=L,M=!1}function _e(L,ut){L.side===Vn?Et(r.CULL_FACE):nt(r.CULL_FACE);let $=L.side===Tn;ut&&($=!$),Nt($),L.blending===Ys&&L.transparent===!1?U(vr):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(L){x!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),x=L)}function V(L){L!==F_?(nt(r.CULL_FACE),L!==P&&(L===af?r.cullFace(r.BACK):L===O_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),P=L}function Tt(L){L!==I&&(H&&r.lineWidth(L),I=L)}function ie(L,ut,$){L?(nt(r.POLYGON_OFFSET_FILL),(F!==ut||k!==$)&&(r.polygonOffset(ut,$),F=ut,k=$)):Et(r.POLYGON_OFFSET_FILL)}function At(L){L?nt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function C(L){L===void 0&&(L=r.TEXTURE0+q-1),tt!==L&&(r.activeTexture(L),tt=L)}function T(L,ut,$){$===void 0&&(tt===null?$=r.TEXTURE0+q-1:$=tt);let j=D[$];j===void 0&&(j={type:void 0,texture:void 0},D[$]=j),(j.type!==L||j.texture!==ut)&&(tt!==$&&(r.activeTexture($),tt=$),r.bindTexture(L,ut||gt[L]),j.type=L,j.texture=ut)}function Y(){const L=D[tt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){Jt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Jt.copy(L))}function xt(L){Z.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function qt(L,ut){let $=c.get(ut);$===void 0&&($=new WeakMap,c.set(ut,$));let j=$.get(L);j===void 0&&(j=r.getUniformBlockIndex(ut,L.name),$.set(L,j))}function Ut(L,ut){const j=c.get(ut).get(L);l.get(ut)!==j&&(r.uniformBlockBinding(ut,j,L.__bindingPointIndex),l.set(ut,j))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},tt=null,D={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,E=null,v=null,A=null,w=null,S=new zt(0,0,0),R=0,M=!1,x=null,P=null,I=null,F=null,k=null,Jt.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:Et,bindFramebuffer:wt,drawBuffers:kt,useProgram:Qt,setBlending:U,setMaterial:_e,setFlipSided:Nt,setCullFace:V,setLineWidth:Tt,setPolygonOffset:ie,setScissorTest:At,activeTexture:C,bindTexture:T,unbindTexture:Y,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ot,texImage3D:It,updateUBOMapping:qt,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:it,texSubImage2D:K,texSubImage3D:ht,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Lt,viewport:xt,reset:oe}}function rd(r,t,e,n){const i=ky(n);switch(e){case mp:return r*t;case gp:return r*t;case vp:return r*t*2;case Hl:return r*t/i.components*i.byteLength;case gh:return r*t/i.components*i.byteLength;case xp:return r*t*2/i.components*i.byteLength;case vh:return r*t*2/i.components*i.byteLength;case _p:return r*t*3/i.components*i.byteLength;case Mi:return r*t*4/i.components*i.byteLength;case xh:return r*t*4/i.components*i.byteLength;case rl:case sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ol:case al:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case au:case cu:return Math.max(r,16)*Math.max(t,8)/4;case ou:case lu:return Math.max(r,8)*Math.max(t,8)/2;case uu:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case _u:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case gu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case vu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case xu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case yu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Su:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case bu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case wu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ll:case Au:case Ru:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Mp:case Cu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Pu:case Du:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ky(r){switch(r){case Qi:case fp:return{byteLength:1,components:1};case oa:case dp:case _o:return{byteLength:2,components:1};case mh:case _h:return{byteLength:2,components:4};case as:case ph:case Ci:return{byteLength:4,components:1};case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Hy(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return h?new OffscreenCanvas(C,T):El("canvas")}function _(C,T,Y){let Q=1;const J=At(C);if((J.width>Y||J.height>Y)&&(Q=Y/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(Q*J.width),ht=Math.floor(Q*J.height);f===void 0&&(f=g(K,ht));const lt=T?g(K,ht):f;return lt.width=K,lt.height=ht,lt.getContext("2d").drawImage(C,0,0,K,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+ht+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(C,T,Y,Q,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=T;if(T===r.RED&&(Y===r.FLOAT&&(K=r.R32F),Y===r.HALF_FLOAT&&(K=r.R16F),Y===r.UNSIGNED_BYTE&&(K=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(K=r.R8UI),Y===r.UNSIGNED_SHORT&&(K=r.R16UI),Y===r.UNSIGNED_INT&&(K=r.R32UI),Y===r.BYTE&&(K=r.R8I),Y===r.SHORT&&(K=r.R16I),Y===r.INT&&(K=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(K=r.RG32F),Y===r.HALF_FLOAT&&(K=r.RG16F),Y===r.UNSIGNED_BYTE&&(K=r.RG8)),T===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(K=r.RG8UI),Y===r.UNSIGNED_SHORT&&(K=r.RG16UI),Y===r.UNSIGNED_INT&&(K=r.RG32UI),Y===r.BYTE&&(K=r.RG8I),Y===r.SHORT&&(K=r.RG16I),Y===r.INT&&(K=r.RG32I)),T===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(K=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(K=r.RGB16UI),Y===r.UNSIGNED_INT&&(K=r.RGB32UI),Y===r.BYTE&&(K=r.RGB8I),Y===r.SHORT&&(K=r.RGB16I),Y===r.INT&&(K=r.RGB32I)),T===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),Y===r.UNSIGNED_INT&&(K=r.RGBA32UI),Y===r.BYTE&&(K=r.RGBA8I),Y===r.SHORT&&(K=r.RGBA16I),Y===r.INT&&(K=r.RGBA32I)),T===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),T===r.RGBA){const ht=J?Vl:ae.getTransfer(Q);Y===r.FLOAT&&(K=r.RGBA32F),Y===r.HALF_FLOAT&&(K=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(K=ht===pe?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(C,T){let Y;return C?T===null||T===as||T===so?Y=r.DEPTH24_STENCIL8:T===Ci?Y=r.DEPTH32F_STENCIL8:T===oa&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===as||T===so?Y=r.DEPTH_COMPONENT24:T===Ci?Y=r.DEPTH_COMPONENT32F:T===oa&&(Y=r.DEPTH_COMPONENT16),Y}function A(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qn&&C.minFilter!==xi?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function w(C){const T=C.target;T.removeEventListener("dispose",w),R(T),T.isVideoTexture&&u.delete(T)}function S(C){const T=C.target;T.removeEventListener("dispose",S),x(T)}function R(C){const T=n.get(C);if(T.__webglInit===void 0)return;const Y=C.source,Q=d.get(Y);if(Q){const J=Q[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys(Q).length===0&&d.delete(Y)}n.remove(C)}function M(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const Y=C.source,Q=d.get(Y);delete Q[T.__cacheKey],o.memory.textures--}function x(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let J=0;J<T.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(T.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[Q]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=C.textures;for(let Q=0,J=Y.length;Q<J;Q++){const K=n.get(Y[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(Y[Q])}n.remove(C)}let P=0;function I(){P=0}function F(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function k(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function q(C,T){const Y=n.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,C,T);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function H(C,T){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Z(Y,C,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function G(C,T){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Z(Y,C,T);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function z(C,T){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){et(Y,C,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const tt={[yl]:r.REPEAT,[Zr]:r.CLAMP_TO_EDGE,[su]:r.MIRRORED_REPEAT},D={[qn]:r.NEAREST,[u0]:r.NEAREST_MIPMAP_NEAREST,[Sa]:r.NEAREST_MIPMAP_LINEAR,[xi]:r.LINEAR,[Jl]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},at={[p0]:r.NEVER,[M0]:r.ALWAYS,[m0]:r.LESS,[Sp]:r.LEQUAL,[_0]:r.EQUAL,[x0]:r.GEQUAL,[g0]:r.GREATER,[v0]:r.NOTEQUAL};function Ct(C,T){if(T.type===Ci&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===xi||T.magFilter===Jl||T.magFilter===Sa||T.magFilter===Kr||T.minFilter===xi||T.minFilter===Jl||T.minFilter===Sa||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,tt[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,tt[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,tt[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,D[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,D[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,at[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qn||T.minFilter!==Sa&&T.minFilter!==Kr||T.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Jt(C,T){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",w));const Q=T.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const K=k(T);if(K!==C.__cacheKey){J[K]===void 0&&(J[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),J[K].usedTimes++;const ht=J[C.__cacheKey];ht!==void 0&&(J[C.__cacheKey].usedTimes--,ht.usedTimes===0&&M(T)),C.__cacheKey=K,C.__webglTexture=J[K].texture}return Y}function Z(C,T,Y){let Q=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Jt(C,T),K=T.source;e.bindTexture(Q,C.__webglTexture,r.TEXTURE0+Y);const ht=n.get(K);if(K.version!==ht.__version||J===!0){e.activeTexture(r.TEXTURE0+Y);const lt=ae.getPrimaries(ae.workingColorSpace),pt=T.colorSpace===Xi?null:ae.getPrimaries(T.colorSpace),Wt=T.colorSpace===Xi||lt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let it=_(T.image,!1,i.maxTextureSize);it=ie(T,it);const ot=s.convert(T.format,T.colorSpace),It=s.convert(T.type);let Lt=E(T.internalFormat,ot,It,T.colorSpace,T.isVideoTexture);Ct(Q,T);let xt;const qt=T.mipmaps,Ut=T.isVideoTexture!==!0,oe=ht.__version===void 0||J===!0,L=K.dataReady,ut=A(T,it);if(T.isDepthTexture)Lt=v(T.format===oo,T.type),oe&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,ot,It,null));else if(T.isDataTexture)if(qt.length>0){Ut&&oe&&e.texStorage2D(r.TEXTURE_2D,ut,Lt,qt[0].width,qt[0].height);for(let $=0,j=qt.length;$<j;$++)xt=qt[$],Ut?L&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,xt.width,xt.height,ot,It,xt.data):e.texImage2D(r.TEXTURE_2D,$,Lt,xt.width,xt.height,0,ot,It,xt.data);T.generateMipmaps=!1}else Ut?(oe&&e.texStorage2D(r.TEXTURE_2D,ut,Lt,it.width,it.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,ot,It,it.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,ot,It,it.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ut&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Lt,qt[0].width,qt[0].height,it.depth);for(let $=0,j=qt.length;$<j;$++)if(xt=qt[$],T.format!==Mi)if(ot!==null)if(Ut){if(L)if(T.layerUpdates.size>0){const ct=rd(xt.width,xt.height,T.format,T.type);for(const ft of T.layerUpdates){const Ft=xt.data.subarray(ft*ct/xt.data.BYTES_PER_ELEMENT,(ft+1)*ct/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,ft,xt.width,xt.height,1,ot,Ft)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,it.depth,ot,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Lt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,it.depth,ot,It,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Lt,xt.width,xt.height,it.depth,0,ot,It,xt.data)}else{Ut&&oe&&e.texStorage2D(r.TEXTURE_2D,ut,Lt,qt[0].width,qt[0].height);for(let $=0,j=qt.length;$<j;$++)xt=qt[$],T.format!==Mi?ot!==null?Ut?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,xt.width,xt.height,ot,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?L&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,xt.width,xt.height,ot,It,xt.data):e.texImage2D(r.TEXTURE_2D,$,Lt,xt.width,xt.height,0,ot,It,xt.data)}else if(T.isDataArrayTexture)if(Ut){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Lt,it.width,it.height,it.depth),L)if(T.layerUpdates.size>0){const $=rd(it.width,it.height,T.format,T.type);for(const j of T.layerUpdates){const ct=it.data.subarray(j*$/it.data.BYTES_PER_ELEMENT,(j+1)*$/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,ot,It,ct)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,It,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,ot,It,it.data);else if(T.isData3DTexture)Ut?(oe&&e.texStorage3D(r.TEXTURE_3D,ut,Lt,it.width,it.height,it.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,It,it.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,ot,It,it.data);else if(T.isFramebufferTexture){if(oe)if(Ut)e.texStorage2D(r.TEXTURE_2D,ut,Lt,it.width,it.height);else{let $=it.width,j=it.height;for(let ct=0;ct<ut;ct++)e.texImage2D(r.TEXTURE_2D,ct,Lt,$,j,0,ot,It,null),$>>=1,j>>=1}}else if(qt.length>0){if(Ut&&oe){const $=At(qt[0]);e.texStorage2D(r.TEXTURE_2D,ut,Lt,$.width,$.height)}for(let $=0,j=qt.length;$<j;$++)xt=qt[$],Ut?L&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,ot,It,xt):e.texImage2D(r.TEXTURE_2D,$,Lt,ot,It,xt);T.generateMipmaps=!1}else if(Ut){if(oe){const $=At(it);e.texStorage2D(r.TEXTURE_2D,ut,Lt,$.width,$.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,It,it)}else e.texImage2D(r.TEXTURE_2D,0,Lt,ot,It,it);m(T)&&p(Q),ht.__version=K.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function et(C,T,Y){if(T.image.length!==6)return;const Q=Jt(C,T),J=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);const K=n.get(J);if(J.version!==K.__version||Q===!0){e.activeTexture(r.TEXTURE0+Y);const ht=ae.getPrimaries(ae.workingColorSpace),lt=T.colorSpace===Xi?null:ae.getPrimaries(T.colorSpace),pt=T.colorSpace===Xi||ht===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Wt=T.isCompressedTexture||T.image[0].isCompressedTexture,it=T.image[0]&&T.image[0].isDataTexture,ot=[];for(let j=0;j<6;j++)!Wt&&!it?ot[j]=_(T.image[j],!0,i.maxCubemapSize):ot[j]=it?T.image[j].image:T.image[j],ot[j]=ie(T,ot[j]);const It=ot[0],Lt=s.convert(T.format,T.colorSpace),xt=s.convert(T.type),qt=E(T.internalFormat,Lt,xt,T.colorSpace),Ut=T.isVideoTexture!==!0,oe=K.__version===void 0||Q===!0,L=J.dataReady;let ut=A(T,It);Ct(r.TEXTURE_CUBE_MAP,T);let $;if(Wt){Ut&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,qt,It.width,It.height);for(let j=0;j<6;j++){$=ot[j].mipmaps;for(let ct=0;ct<$.length;ct++){const ft=$[ct];T.format!==Mi?Lt!==null?Ut?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,qt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ft.width,ft.height,Lt,xt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,qt,ft.width,ft.height,0,Lt,xt,ft.data)}}}else{if($=T.mipmaps,Ut&&oe){$.length>0&&ut++;const j=At(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,qt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ot[j].width,ot[j].height,Lt,xt,ot[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,ot[j].width,ot[j].height,0,Lt,xt,ot[j].data);for(let ct=0;ct<$.length;ct++){const Ft=$[ct].image[j].image;Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Ft.width,Ft.height,Lt,xt,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,qt,Ft.width,Ft.height,0,Lt,xt,Ft.data)}}else{Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Lt,xt,ot[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Lt,xt,ot[j]);for(let ct=0;ct<$.length;ct++){const ft=$[ct];Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Lt,xt,ft.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,qt,Lt,xt,ft.image[j])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),K.__version=J.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function gt(C,T,Y,Q,J,K){const ht=s.convert(Y.format,Y.colorSpace),lt=s.convert(Y.type),pt=E(Y.internalFormat,ht,lt,Y.colorSpace),Wt=n.get(T),it=n.get(Y);if(it.__renderTarget=T,!Wt.__hasExternalTextures){const ot=Math.max(1,T.width>>K),It=Math.max(1,T.height>>K);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,K,pt,ot,It,T.depth,0,ht,lt,null):e.texImage2D(J,K,pt,ot,It,0,ht,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),V(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,it.__webglTexture,0,Nt(T)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,it.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(C,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){const Q=T.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,K=v(T.stencilBuffer,J),ht=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=Nt(T);V(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,K,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,K,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,C)}else{const Q=T.textures;for(let J=0;J<Q.length;J++){const K=Q[J],ht=s.convert(K.format,K.colorSpace),lt=s.convert(K.type),pt=E(K.internalFormat,ht,lt,K.colorSpace),Wt=Nt(T);Y&&V(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,pt,T.width,T.height):V(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q(T.depthTexture,0);const J=Q.__webglTexture,K=Nt(T);if(T.depthTexture.format===qs)V(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(T.depthTexture.format===oo)V(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function wt(C){const T=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=Q}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Et(T.__webglFramebuffer,C)}else if(Y){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=r.createRenderbuffer(),nt(T.__webglDepthbuffer[Q],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),nt(T.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(C,T,Y){const Q=n.get(C);T!==void 0&&gt(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&wt(C)}function Qt(C){const T=C.texture,Y=n.get(C),Q=n.get(T);C.addEventListener("dispose",S);const J=C.textures,K=C.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=T.version,o.memory.textures++),K){Y.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[lt]=[];for(let pt=0;pt<T.mipmaps.length;pt++)Y.__webglFramebuffer[lt][pt]=r.createFramebuffer()}else Y.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let lt=0;lt<T.mipmaps.length;lt++)Y.__webglFramebuffer[lt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(ht)for(let lt=0,pt=J.length;lt<pt;lt++){const Wt=n.get(J[lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&V(C)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const pt=J[lt];Y.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[lt]);const Wt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),ot=E(pt.internalFormat,Wt,it,pt.colorSpace,C.isXRRenderTarget===!0),It=Nt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,ot,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,T);for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)gt(Y.__webglFramebuffer[lt][pt],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else gt(Y.__webglFramebuffer[lt],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(T)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let lt=0,pt=J.length;lt<pt;lt++){const Wt=J[lt],it=n.get(Wt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Ct(r.TEXTURE_2D,Wt),gt(Y.__webglFramebuffer,C,Wt,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),m(Wt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,Q.__webglTexture),Ct(lt,T),T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)gt(Y.__webglFramebuffer[pt],C,T,r.COLOR_ATTACHMENT0,lt,pt);else gt(Y.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,lt,0);m(T)&&p(lt),e.unbindTexture()}C.depthBuffer&&wt(C)}function Ht(C){const T=C.textures;for(let Y=0,Q=T.length;Y<Q;Y++){const J=T[Y];if(m(J)){const K=y(C),ht=n.get(J).__webglTexture;e.bindTexture(K,ht),p(K),e.unbindTexture()}}}const Dt=[],U=[];function _e(C){if(C.samples>0){if(V(C)===!1){const T=C.textures,Y=C.width,Q=C.height;let J=r.COLOR_BUFFER_BIT;const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(C),lt=T.length>1;if(lt)for(let pt=0;pt<T.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<T.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Wt=n.get(T[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,J,r.NEAREST),l===!0&&(Dt.length=0,U.length=0,Dt.push(r.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Dt.push(K),U.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<T.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Wt=n.get(T[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Nt(C){return Math.min(i.maxSamples,C.samples)}function V(C){const T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Tt(C){const T=o.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function ie(C,T){const Y=C.colorSpace,Q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==go&&Y!==Xi&&(ae.getTransfer(Y)===pe?(Q!==Mi||J!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function At(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=kt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=V}function Vy(r,t){function e(n,i=Xi){let s;const o=ae.getTransfer(i);if(n===Qi)return r.UNSIGNED_BYTE;if(n===mh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===_h)return r.UNSIGNED_SHORT_5_5_5_1;if(n===pp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===fp)return r.BYTE;if(n===dp)return r.SHORT;if(n===oa)return r.UNSIGNED_SHORT;if(n===ph)return r.INT;if(n===as)return r.UNSIGNED_INT;if(n===Ci)return r.FLOAT;if(n===_o)return r.HALF_FLOAT;if(n===mp)return r.ALPHA;if(n===_p)return r.RGB;if(n===Mi)return r.RGBA;if(n===gp)return r.LUMINANCE;if(n===vp)return r.LUMINANCE_ALPHA;if(n===qs)return r.DEPTH_COMPONENT;if(n===oo)return r.DEPTH_STENCIL;if(n===Hl)return r.RED;if(n===gh)return r.RED_INTEGER;if(n===xp)return r.RG;if(n===vh)return r.RG_INTEGER;if(n===xh)return r.RGBA_INTEGER;if(n===rl||n===sl||n===ol||n===al)if(o===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ou||n===au||n===lu||n===cu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uu||n===hu||n===fu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uu||n===hu)return o===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Mu||n===yu||n===Su||n===Eu||n===Tu||n===bu||n===wu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===du)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_u)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Su)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ll||n===Au||n===Ru)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ll)return o===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mp||n===Cu||n===Pu||n===Du)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===so?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Gy extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ri extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yy=`
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

}`;class qy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new un,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ar({vertexShader:Xy,fragmentShader:Yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $y extends vo{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new qy,m=e.getContextAttributes();let p=null,y=null;const E=[],v=[],A=new Yt;let w=null;const S=new ei;S.viewport=new Le;const R=new ei;R.viewport=new Le;const M=[S,R],x=new Gy;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=E[Z];return et===void 0&&(et=new bc,E[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=E[Z];return et===void 0&&(et=new bc,E[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=E[Z];return et===void 0&&(et=new bc,E[Z]=et),et.getHandSpace()};function F(Z){const et=v.indexOf(Z.inputSource);if(et===-1)return;const gt=E[et];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,c||o),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",q);for(let Z=0;Z<E.length;Z++){const et=v[Z];et!==null&&(v[Z]=null,E[Z].disconnect(et))}P=null,I=null,_.reset(),t.setRenderTarget(p),h=null,d=null,f=null,i=null,y=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new ls(h.framebufferWidth,h.framebufferHeight,{format:Mi,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?oo:qs,gt=m.stencil?so:as);const Et={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(Et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ls(d.textureWidth,d.textureHeight,{format:Mi,type:Qi,depthTexture:new Op(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Z){for(let et=0;et<Z.removed.length;et++){const gt=Z.removed[et],nt=v.indexOf(gt);nt>=0&&(v[nt]=null,E[nt].disconnect(gt))}for(let et=0;et<Z.added.length;et++){const gt=Z.added[et];let nt=v.indexOf(gt);if(nt===-1){for(let wt=0;wt<E.length;wt++)if(wt>=v.length){v.push(gt),nt=wt;break}else if(v[wt]===null){v[wt]=gt,nt=wt;break}if(nt===-1)break}const Et=E[nt];Et&&Et.connect(gt)}}const H=new B,G=new B;function z(Z,et,gt){H.setFromMatrixPosition(et.matrixWorld),G.setFromMatrixPosition(gt.matrixWorld);const nt=H.distanceTo(G),Et=et.projectionMatrix.elements,wt=gt.projectionMatrix.elements,kt=Et[14]/(Et[10]-1),Qt=Et[14]/(Et[10]+1),Ht=(Et[9]+1)/Et[5],Dt=(Et[9]-1)/Et[5],U=(Et[8]-1)/Et[0],_e=(wt[8]+1)/wt[0],Nt=kt*U,V=kt*_e,Tt=nt/(-U+_e),ie=Tt*-U;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ie),Z.translateZ(Tt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Et[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const At=kt+Tt,C=Qt+Tt,T=Nt-ie,Y=V+(nt-ie),Q=Ht*Qt/C*At,J=Dt*Qt/C*At;Z.projectionMatrix.makePerspective(T,Y,Q,J,At,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function tt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let et=Z.near,gt=Z.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),x.near=R.near=S.near=et,x.far=R.far=S.far=gt,(P!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,I=x.far),S.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,x.layers.mask=S.layers.mask|R.layers.mask;const nt=Z.parent,Et=x.cameras;tt(x,nt);for(let wt=0;wt<Et.length;wt++)tt(Et[wt],nt);Et.length===2?z(x,S,R):x.projectionMatrix.copy(S.projectionMatrix),D(Z,x,nt)};function D(Z,et,gt){gt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=aa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let at=null;function Ct(Z,et){if(u=et.getViewerPose(c||o),g=et,u!==null){const gt=u.views;h!==null&&(t.setRenderTargetFramebuffer(y,h.framebuffer),t.setRenderTarget(y));let nt=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let wt=0;wt<gt.length;wt++){const kt=gt[wt];let Qt=null;if(h!==null)Qt=h.getViewport(kt);else{const Dt=f.getViewSubImage(d,kt);Qt=Dt.viewport,wt===0&&(t.setRenderTargetTextures(y,Dt.colorTexture,d.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(y))}let Ht=M[wt];Ht===void 0&&(Ht=new ei,Ht.layers.enable(wt),Ht.viewport=new Le,M[wt]=Ht),Ht.matrix.fromArray(kt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(kt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),wt===0&&(x.matrix.copy(Ht.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(Ht)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const wt=f.getDepthInformation(gt[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,i.renderState)}}for(let gt=0;gt<E.length;gt++){const nt=v[gt],Et=E[gt];nt!==null&&Et!==void 0&&Et.update(nt,et,c||o)}at&&at(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Jt=new Np;Jt.setAnimationLoop(Ct),this.setAnimationLoop=function(Z){at=Z},this.dispose=function(){}}}const zr=new Si,Zy=new me;function Ky(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),E=y.envMap,v=y.envMapRotation;E&&(m.envMap.value=E,zr.copy(v),zr.x*=-1,zr.y*=-1,zr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(zr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jy(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const v=E.program;n.uniformBlockBinding(y,v)}function c(y,E){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(y,A);const w=t.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function u(y){const E=f();y.__bindingPointIndex=E;const v=r.createBuffer(),A=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=i[y.id],v=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,S=v.length;w<S;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=R.length;M<x;M++){const P=R[M];if(h(P,w,M,A)===!0){const I=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let q=0;q<F.length;q++){const H=F[q],G=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,I+k,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,k),k+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(y,E,v,A){const w=y.value,S=E+"_"+v;if(A[S]===void 0)return typeof w=="number"||typeof w=="boolean"?A[S]=w:A[S]=w.clone(),!0;{const R=A[S];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[S]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(y){const E=y.uniforms;let v=0;const A=16;for(let S=0,R=E.length;S<R;S++){const M=Array.isArray(E[S])?E[S]:[E[S]];for(let x=0,P=M.length;x<P;x++){const I=M[x],F=Array.isArray(I.value)?I.value:[I.value];for(let k=0,q=F.length;k<q;k++){const H=F[k],G=_(H),z=v%A,tt=z%G.boundary,D=z+tt;v+=tt,D!==0&&A-D<G.storage&&(v+=A-D),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=G.storage}}}const w=v%A;return w>0&&(v+=A-w),y.__size=v,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Jy{constructor(t={}){const{canvas:e=O0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=xr,this.toneMappingExposure=1;const v=this;let A=!1,w=0,S=0,R=null,M=-1,x=null;const P=new Le,I=new Le;let F=null;const k=new zt(0);let q=0,H=e.width,G=e.height,z=1,tt=null,D=null;const at=new Le(0,0,H,G),Ct=new Le(0,0,H,G);let Jt=!1;const Z=new Sh;let et=!1,gt=!1;const nt=new me,Et=new me,wt=new B,kt=new Le,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Dt(){return R===null?z:1}let U=n;function _e(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dh}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ft,!1),U===null){const N="webgl2";if(U=_e(N,b),U===null)throw _e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Nt,V,Tt,ie,At,C,T,Y,Q,J,K,ht,lt,pt,Wt,it,ot,It,Lt,xt,qt,Ut,oe,L;function ut(){Nt=new iM(U),Nt.init(),Ut=new Vy(U,Nt),V=new jx(U,Nt,t,Ut),Tt=new zy(U,Nt),V.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ie=new oM(U),At=new Ty,C=new Hy(U,Nt,Tt,At,V,Ut,ie),T=new Qx(v),Y=new nM(v),Q=new dg(U),oe=new Zx(U,Q),J=new rM(U,Q,ie,oe),K=new lM(U,J,Q,ie),Lt=new aM(U,V,C),it=new Jx(At),ht=new Ey(v,T,Y,Nt,V,oe,it),lt=new Ky(v,At),pt=new wy,Wt=new Ly(Nt),It=new $x(v,T,Y,Tt,K,h,l),ot=new Oy(v,K,V),L=new jy(U,ie,V,Tt),xt=new Kx(U,Nt,ie),qt=new sM(U,Nt,ie),ie.programs=ht.programs,v.capabilities=V,v.extensions=Nt,v.properties=At,v.renderLists=pt,v.shadowMap=ot,v.state=Tt,v.info=ie}ut();const $=new $y(v,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(H,G,!1))},this.getSize=function(b){return b.set(H,G)},this.setSize=function(b,N,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,G=N,e.width=Math.floor(b*z),e.height=Math.floor(N*z),W===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(H*z,G*z).floor()},this.setDrawingBufferSize=function(b,N,W){H=b,G=N,z=W,e.width=Math.floor(b*W),e.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(at)},this.setViewport=function(b,N,W,X){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,N,W,X),Tt.viewport(P.copy(at).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,N,W,X){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,N,W,X),Tt.scissor(I.copy(Ct).multiplyScalar(z).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(b){Tt.setScissorTest(Jt=b)},this.setOpaqueSort=function(b){tt=b},this.setTransparentSort=function(b){D=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,N=!0,W=!0){let X=0;if(b){let O=!1;if(R!==null){const rt=R.texture.format;O=rt===xh||rt===vh||rt===gh}if(O){const rt=R.texture.type,st=rt===Qi||rt===as||rt===oa||rt===so||rt===mh||rt===_h,dt=It.getClearColor(),Mt=It.getClearAlpha(),Ot=dt.r,Gt=dt.g,St=dt.b;st?(g[0]=Ot,g[1]=Gt,g[2]=St,g[3]=Mt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ot,_[1]=Gt,_[2]=St,_[3]=Mt,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}N&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),Wt.dispose(),At.dispose(),T.dispose(),Y.dispose(),K.dispose(),oe.dispose(),L.dispose(),ht.dispose(),$.dispose(),$.removeEventListener("sessionstart",mt),$.removeEventListener("sessionend",Vt),Rt.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=ie.autoReset,N=ot.enabled,W=ot.autoUpdate,X=ot.needsUpdate,O=ot.type;ut(),ie.autoReset=b,ot.enabled=N,ot.autoUpdate=W,ot.needsUpdate=X,ot.type=O}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ft(b){const N=b.target;N.removeEventListener("dispose",Ft),le(N)}function le(b){Pe(b),At.remove(b)}function Pe(b){const N=At.get(b).programs;N!==void 0&&(N.forEach(function(W){ht.releaseProgram(W)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,X,O,rt){N===null&&(N=Qt);const st=O.isMesh&&O.matrixWorld.determinant()<0,dt=Ln(b,N,W,X,O);Tt.setMaterial(X,st);let Mt=W.index,Ot=1;if(X.wireframe===!0){if(Mt=J.getWireframeAttribute(W),Mt===void 0)return;Ot=2}const Gt=W.drawRange,St=W.attributes.position;let Xt=Gt.start*Ot,ce=(Gt.start+Gt.count)*Ot;rt!==null&&(Xt=Math.max(Xt,rt.start*Ot),ce=Math.min(ce,(rt.start+rt.count)*Ot)),Mt!==null?(Xt=Math.max(Xt,0),ce=Math.min(ce,Mt.count)):St!=null&&(Xt=Math.max(Xt,0),ce=Math.min(ce,St.count));const he=ce-Xt;if(he<0||he===1/0)return;oe.setup(O,X,dt,W,Mt);let Oe,fe=xt;if(Mt!==null&&(Oe=Q.get(Mt),fe=qt,fe.setIndex(Oe)),O.isMesh)X.wireframe===!0?(Tt.setLineWidth(X.wireframeLinewidth*Dt()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(O.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),Tt.setLineWidth(Pt*Dt()),O.isLineSegments?fe.setMode(U.LINES):O.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else O.isPoints?fe.setMode(U.POINTS):O.isSprite&&fe.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pt=O._multiDrawStarts,Fi=O._multiDrawCounts,de=O._multiDrawCount,fi=Mt?Q.get(Mt).bytesPerElement:1,gs=At.get(X).currentProgram.getUniforms();for(let In=0;In<de;In++)gs.setValue(U,"_gl_DrawID",In),fe.render(Pt[In]/fi,Fi[In])}else if(O.isInstancedMesh)fe.renderInstances(Xt,he,O.count);else if(W.isInstancedBufferGeometry){const Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Fi=Math.min(W.instanceCount,Pt);fe.renderInstances(Xt,he,Fi)}else fe.render(Xt,he)};function vt(b,N,W){b.transparent===!0&&b.side===Vn&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,ge(b,N,W),b.side=wr,b.needsUpdate=!0,ge(b,N,W),b.side=Vn):ge(b,N,W)}this.compile=function(b,N,W=null){W===null&&(W=b),p=Wt.get(W),p.init(N),E.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==W&&b.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const rt=O.material;if(rt)if(Array.isArray(rt))for(let st=0;st<rt.length;st++){const dt=rt[st];vt(dt,W,O),X.add(dt)}else vt(rt,W,O),X.add(rt)}),E.pop(),p=null,X},this.compileAsync=function(b,N,W=null){const X=this.compile(b,N,W);return new Promise(O=>{function rt(){if(X.forEach(function(st){At.get(st).currentProgram.isReady()&&X.delete(st)}),X.size===0){O(b);return}setTimeout(rt,10)}Nt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let bt=null;function $t(b){bt&&bt(b)}function mt(){Rt.stop()}function Vt(){Rt.start()}const Rt=new Np;Rt.setAnimationLoop($t),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(b){bt=b,$.setAnimationLoop(b),b===null?Rt.stop():Rt.start()},$.addEventListener("sessionstart",mt),$.addEventListener("sessionend",Vt),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,R),p=Wt.get(b,E.length),p.init(N),E.push(p),Et.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,et=it.init(this.clippingPlanes,gt),m=pt.get(b,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Bt(rt,N,-1/0,v.sortObjects)}Bt(b,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,D),Ht=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ht&&It.addToRenderList(m,b),this.info.render.frame++,et===!0&&it.beginShadows();const W=p.state.shadowsArray;ot.render(W,b,N),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){const rt=N.cameras;if(O.length>0)for(let st=0,dt=rt.length;st<dt;st++){const Mt=rt[st];te(X,O,b,Mt)}Ht&&It.render(b);for(let st=0,dt=rt.length;st<dt;st++){const Mt=rt[st];Ue(m,b,Mt,Mt.viewport)}}else O.length>0&&te(X,O,b,N),Ht&&It.render(b),Ue(m,b,N);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,N),oe.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Bt(b,N,W,X){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){X&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Et);const st=K.update(b),dt=b.material;dt.visible&&m.push(b,st,dt,W,kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const st=K.update(b),dt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),kt.copy(st.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4(Et)),Array.isArray(dt)){const Mt=st.groups;for(let Ot=0,Gt=Mt.length;Ot<Gt;Ot++){const St=Mt[Ot],Xt=dt[St.materialIndex];Xt&&Xt.visible&&m.push(b,st,Xt,W,kt.z,St)}}else dt.visible&&m.push(b,st,dt,W,kt.z,null)}}const rt=b.children;for(let st=0,dt=rt.length;st<dt;st++)Bt(rt[st],N,W,X)}function Ue(b,N,W,X){const O=b.opaque,rt=b.transmissive,st=b.transparent;p.setupLightsView(W),et===!0&&it.setGlobalState(v.clippingPlanes,W),X&&Tt.viewport(P.copy(X)),O.length>0&&Me(O,N,W),rt.length>0&&Me(rt,N,W),st.length>0&&Me(st,N,W),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function te(b,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new ls(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?_o:Qi,minFilter:Kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const rt=p.state.transmissionRenderTarget[X.id],st=X.viewport||P;rt.setSize(st.z,st.w);const dt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(k),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Ht&&It.render(W);const Mt=v.toneMapping;v.toneMapping=xr;const Ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),et===!0&&it.setGlobalState(v.clippingPlanes,X),Me(b,W,X),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let St=0,Xt=N.length;St<Xt;St++){const ce=N[St],he=ce.object,Oe=ce.geometry,fe=ce.material,Pt=ce.group;if(fe.side===Vn&&he.layers.test(X.layers)){const Fi=fe.side;fe.side=Tn,fe.needsUpdate=!0,Ge(he,W,X,Oe,fe,Pt),fe.side=Fi,fe.needsUpdate=!0,Gt=!0}}Gt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}v.setRenderTarget(dt),v.setClearColor(k,q),Ot!==void 0&&(X.viewport=Ot),v.toneMapping=Mt}function Me(b,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,rt=b.length;O<rt;O++){const st=b[O],dt=st.object,Mt=st.geometry,Ot=X===null?st.material:X,Gt=st.group;dt.layers.test(W.layers)&&Ge(dt,N,W,Mt,Ot,Gt)}}function Ge(b,N,W,X,O,rt){b.onBeforeRender(v,N,W,X,O,rt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,N,W,X,b,rt),O.transparent===!0&&O.side===Vn&&O.forceSinglePass===!1?(O.side=Tn,O.needsUpdate=!0,v.renderBufferDirect(W,N,X,O,b,rt),O.side=wr,O.needsUpdate=!0,v.renderBufferDirect(W,N,X,O,b,rt),O.side=Vn):v.renderBufferDirect(W,N,X,O,b,rt),b.onAfterRender(v,N,W,X,O,rt)}function ge(b,N,W){N.isScene!==!0&&(N=Qt);const X=At.get(b),O=p.state.lights,rt=p.state.shadowsArray,st=O.state.version,dt=ht.getParameters(b,O.state,rt,N,W),Mt=ht.getProgramCacheKey(dt);let Ot=X.programs;X.environment=b.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(b.isMeshStandardMaterial?Y:T).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",Ft),Ot=new Map,X.programs=Ot);let Gt=Ot.get(Mt);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===st)return ue(b,dt),Gt}else dt.uniforms=ht.getUniforms(b),b.onBeforeCompile(dt,v),Gt=ht.acquireProgram(dt,Mt),Ot.set(Mt,Gt),X.uniforms=dt.uniforms;const St=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=it.uniform),ue(b,dt),X.needsLights=dn(b),X.lightsStateVersion=st,X.needsLights&&(St.ambientLightColor.value=O.state.ambient,St.lightProbe.value=O.state.probe,St.directionalLights.value=O.state.directional,St.directionalLightShadows.value=O.state.directionalShadow,St.spotLights.value=O.state.spot,St.spotLightShadows.value=O.state.spotShadow,St.rectAreaLights.value=O.state.rectArea,St.ltc_1.value=O.state.rectAreaLTC1,St.ltc_2.value=O.state.rectAreaLTC2,St.pointLights.value=O.state.point,St.pointLightShadows.value=O.state.pointShadow,St.hemisphereLights.value=O.state.hemi,St.directionalShadowMap.value=O.state.directionalShadowMap,St.directionalShadowMatrix.value=O.state.directionalShadowMatrix,St.spotShadowMap.value=O.state.spotShadowMap,St.spotLightMatrix.value=O.state.spotLightMatrix,St.spotLightMap.value=O.state.spotLightMap,St.pointShadowMap.value=O.state.pointShadowMap,St.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function ve(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=cl.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function ue(b,N){const W=At.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Ln(b,N,W,X,O){N.isScene!==!0&&(N=Qt),C.resetTextureUnits();const rt=N.fog,st=X.isMeshStandardMaterial?N.environment:null,dt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:go,Mt=(X.isMeshStandardMaterial?Y:T).get(X.envMap||st),Ot=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),St=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,ce=!!W.morphAttributes.color;let he=xr;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(he=v.toneMapping);const Oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=Oe!==void 0?Oe.length:0,Pt=At.get(X),Fi=p.state.lights;if(et===!0&&(gt===!0||b!==x)){const Jn=b===x&&X.id===M;it.setState(X,b,Jn)}let de=!1;X.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Fi.state.version||Pt.outputColorSpace!==dt||O.isBatchedMesh&&Pt.batching===!1||!O.isBatchedMesh&&Pt.batching===!0||O.isBatchedMesh&&Pt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pt.instancing===!1||!O.isInstancedMesh&&Pt.instancing===!0||O.isSkinnedMesh&&Pt.skinning===!1||!O.isSkinnedMesh&&Pt.skinning===!0||O.isInstancedMesh&&Pt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pt.instancingMorph===!1&&O.morphTexture!==null||Pt.envMap!==Mt||X.fog===!0&&Pt.fog!==rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==Ot||Pt.vertexTangents!==Gt||Pt.morphTargets!==St||Pt.morphNormals!==Xt||Pt.morphColors!==ce||Pt.toneMapping!==he||Pt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Pt.__version=X.version);let fi=Pt.currentProgram;de===!0&&(fi=ge(X,N,O));let gs=!1,In=!1,Eo=!1;const Ee=fi.getUniforms(),Ti=Pt.uniforms;if(Tt.useProgram(fi.program)&&(gs=!0,In=!0,Eo=!0),X.id!==M&&(M=X.id,In=!0),gs||x!==b){Tt.buffers.depth.getReversed()?(nt.copy(b.projectionMatrix),z0(nt),k0(nt),Ee.setValue(U,"projectionMatrix",nt)):Ee.setValue(U,"projectionMatrix",b.projectionMatrix),Ee.setValue(U,"viewMatrix",b.matrixWorldInverse);const nr=Ee.map.cameraPosition;nr!==void 0&&nr.setValue(U,wt.setFromMatrixPosition(b.matrixWorld)),V.logarithmicDepthBuffer&&Ee.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,In=!0,Eo=!0)}if(O.isSkinnedMesh){Ee.setOptional(U,O,"bindMatrix"),Ee.setOptional(U,O,"bindMatrixInverse");const Jn=O.skeleton;Jn&&(Jn.boneTexture===null&&Jn.computeBoneTexture(),Ee.setValue(U,"boneTexture",Jn.boneTexture,C))}O.isBatchedMesh&&(Ee.setOptional(U,O,"batchingTexture"),Ee.setValue(U,"batchingTexture",O._matricesTexture,C),Ee.setOptional(U,O,"batchingIdTexture"),Ee.setValue(U,"batchingIdTexture",O._indirectTexture,C),Ee.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Ee.setValue(U,"batchingColorTexture",O._colorsTexture,C));const To=W.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0)&&Lt.update(O,W,fi),(In||Pt.receiveShadow!==O.receiveShadow)&&(Pt.receiveShadow=O.receiveShadow,Ee.setValue(U,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ti.envMap.value=Mt,Ti.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Ti.envMapIntensity.value=N.environmentIntensity),In&&(Ee.setValue(U,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&Se(Ti,Eo),rt&&X.fog===!0&&lt.refreshFogUniforms(Ti,rt),lt.refreshMaterialUniforms(Ti,X,z,G,p.state.transmissionRenderTarget[b.id]),cl.upload(U,ve(Pt),Ti,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(cl.upload(U,ve(Pt),Ti,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(U,"center",O.center),Ee.setValue(U,"modelViewMatrix",O.modelViewMatrix),Ee.setValue(U,"normalMatrix",O.normalMatrix),Ee.setValue(U,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Jn=X.uniformsGroups;for(let nr=0,ir=Jn.length;nr<ir;nr++){const of=Jn[nr];L.update(of,fi),L.bind(of,fi)}}return fi}function Se(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function dn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,W){At.get(b.texture).__webglTexture=N,At.get(b.depthTexture).__webglTexture=W;const X=At.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const W=At.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){R=b,w=N,S=W;let X=!0,O=null,rt=!1,st=!1;if(b){const Mt=At.get(b);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(Mt.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Mt.__hasExternalTextures)C.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const St=b.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&At.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(st=!0);const Gt=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[N])?O=Gt[N][W]:O=Gt[N],rt=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?O=At.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?O=Gt[W]:O=Gt,P.copy(b.viewport),I.copy(b.scissor),F=b.scissorTest}else P.copy(at).multiplyScalar(z).floor(),I.copy(Ct).multiplyScalar(z).floor(),F=Jt;if(Tt.bindFramebuffer(U.FRAMEBUFFER,O)&&X&&Tt.drawBuffers(b,O),Tt.viewport(P),Tt.scissor(I),Tt.setScissorTest(F),rt){const Mt=At.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,W)}else if(st){const Mt=At.get(b.texture),Ot=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,W||0,Ot)}M=-1},this.readRenderTargetPixels=function(b,N,W,X,O,rt,st){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){Tt.bindFramebuffer(U.FRAMEBUFFER,dt);try{const Mt=b.texture,Ot=Mt.format,Gt=Mt.type;if(!V.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-X&&W>=0&&W<=b.height-O&&U.readPixels(N,W,X,O,Ut.convert(Ot),Ut.convert(Gt),rt)}finally{const Mt=R!==null?At.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(b,N,W,X,O,rt,st){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){const Mt=b.texture,Ot=Mt.format,Gt=Mt.type;if(!V.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-X&&W>=0&&W<=b.height-O){Tt.bindFramebuffer(U.FRAMEBUFFER,dt);const St=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.bufferData(U.PIXEL_PACK_BUFFER,rt.byteLength,U.STREAM_READ),U.readPixels(N,W,X,O,Ut.convert(Ot),Ut.convert(Gt),0);const Xt=R!==null?At.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Xt);const ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await B0(U,ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,rt),U.deleteBuffer(St),U.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,W=0){b.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(b.image.width*X),rt=Math.floor(b.image.height*X),st=N!==null?N.x:0,dt=N!==null?N.y:0;C.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,st,dt,O,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(b,N,W=null,X=null,O=0){b.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],N=arguments[2],O=arguments[3]||0,W=null);let rt,st,dt,Mt,Ot,Gt,St,Xt,ce;const he=b.isCompressedTexture?b.mipmaps[O]:b.image;W!==null?(rt=W.max.x-W.min.x,st=W.max.y-W.min.y,dt=W.isBox3?W.max.z-W.min.z:1,Mt=W.min.x,Ot=W.min.y,Gt=W.isBox3?W.min.z:0):(rt=he.width,st=he.height,dt=he.depth||1,Mt=0,Ot=0,Gt=0),X!==null?(St=X.x,Xt=X.y,ce=X.z):(St=0,Xt=0,ce=0);const Oe=Ut.convert(N.format),fe=Ut.convert(N.type);let Pt;N.isData3DTexture?(C.setTexture3D(N,0),Pt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Pt=U.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Pt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const Fi=U.getParameter(U.UNPACK_ROW_LENGTH),de=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fi=U.getParameter(U.UNPACK_SKIP_PIXELS),gs=U.getParameter(U.UNPACK_SKIP_ROWS),In=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Gt);const Eo=b.isDataArrayTexture||b.isData3DTexture,Ee=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Ti=At.get(b),To=At.get(N),Jn=At.get(Ti.__renderTarget),nr=At.get(To.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,Jn.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let ir=0;ir<dt;ir++)Eo&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(b).__webglTexture,O,Gt+ir),b.isDepthTexture?(Ee&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(N).__webglTexture,O,ce+ir),U.blitFramebuffer(Mt,Ot,rt,st,St,Xt,rt,st,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ee?U.copyTexSubImage3D(Pt,O,St,Xt,ce+ir,Mt,Ot,rt,st):U.copyTexSubImage2D(Pt,O,St,Xt,ce+ir,Mt,Ot,rt,st);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ee?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Pt,O,St,Xt,ce,rt,st,dt,Oe,fe,he.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Pt,O,St,Xt,ce,rt,st,dt,Oe,he.data):U.texSubImage3D(Pt,O,St,Xt,ce,rt,st,dt,Oe,fe,he):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,St,Xt,rt,st,Oe,fe,he.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,St,Xt,he.width,he.height,Oe,he.data):U.texSubImage2D(U.TEXTURE_2D,O,St,Xt,rt,st,Oe,fe,he);U.pixelStorei(U.UNPACK_ROW_LENGTH,Fi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fi),U.pixelStorei(U.UNPACK_SKIP_ROWS,gs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,In),O===0&&N.generateMipmaps&&U.generateMipmap(Pt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,W=null,X=null,O=0){return b.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],N=arguments[3],O=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,W,X,O)},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Tt.unbindTexture()},this.resetState=function(){w=0,S=0,R=null,Tt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class Vp extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qy extends un{constructor(t=null,e=1,n=1,i,s,o,a,l,c=qn,u=qn,f,d){super(null,o,a,l,c,u,i,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sd extends ai{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ls=new me,od=new me,Ga=[],ad=new ps,tS=new me,Co=new Ce,Po=new va;class Gp extends Ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tS)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),ad.copy(t.boundingBox).applyMatrix4(Ls),this.boundingBox.union(ad)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),Po.copy(t.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Co.geometry=this.geometry,Co.material=this.material,Co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(n),t.ray.intersectsSphere(Po)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ls),od.multiplyMatrices(n,Ls),Co.matrixWorld=od,Co.raycast(t,Ga);for(let o=0,a=Ga.length;o<a;o++){const l=Ga[o];l.instanceId=s,l.object=this,e.push(l)}Ga.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qy(new Float32Array(i*this.count),i,this.count,Hl,Ci));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class eS extends un{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nS{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,h=(o-u)/d;return(i+h)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Yt:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,i=[],s=[],o=[],a=new B,l=new me;for(let h=0;h<=t;h++){const g=h/t;i[h]=this.getTangentAt(g,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(He(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(He(s[0].dot(s[t]),-1,1));h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(h=-h);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],h*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ld(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}class iS extends nS{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Yt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(ld(a,l.x,c.x,u.x,f.x),ld(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Yt().fromArray(i))}return this}}class Th extends hi{constructor(t=[new Yt(0,-.5),new Yt(.5,0),new Yt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=He(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/e,f=new B,d=new Yt,h=new B,g=new B,_=new B;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,h.x=p*1,h.y=-m,h.z=p*0,_.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=_.x,h.y+=_.y,h.z+=_.z,h.normalize(),l.push(h.x,h.y,h.z),_.copy(g)}for(let y=0;y<=e;y++){const E=n+y*u*i,v=Math.sin(E),A=Math.cos(E);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*v,f.y=t[w].y,f.z=t[w].x*A,o.push(f.x,f.y,f.z),d.x=y/e,d.y=w/(t.length-1),a.push(d.x,d.y);const S=l[3*w+0]*v,R=l[3*w+1],M=l[3*w+0]*A;c.push(S,R,M)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){const v=E+y*t.length,A=v,w=v+t.length,S=v+t.length+1,R=v+1;s.push(A,w,R),s.push(S,R,w)}this.setIndex(s),this.setAttribute("position",new Ve(o,3)),this.setAttribute("uv",new Ve(a,2)),this.setAttribute("normal",new Ve(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Th(t.points,t.segments,t.phiStart,t.phiLength)}}class Wl extends hi{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(h,2));function y(){const v=new B,A=new B;let w=0;const S=(e-t)/n;for(let R=0;R<=s;R++){const M=[],x=R/s,P=x*(e-t)+t;for(let I=0;I<=i;I++){const F=I/i,k=F*l+a,q=Math.sin(k),H=Math.cos(k);A.x=P*q,A.y=-x*n+m,A.z=P*H,f.push(A.x,A.y,A.z),v.set(q,S,H).normalize(),d.push(v.x,v.y,v.z),h.push(F,1-x),M.push(g++)}_.push(M)}for(let R=0;R<i;R++)for(let M=0;M<s;M++){const x=_[M][R],P=_[M+1][R],I=_[M+1][R+1],F=_[M][R+1];(t>0||M!==0)&&(u.push(x,P,F),w+=3),(e>0||M!==s-1)&&(u.push(P,I,F),w+=3)}c.addGroup(p,w,0),p+=w}function E(v){const A=g,w=new Yt,S=new B;let R=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let I=1;I<=i;I++)f.push(0,m*x,0),d.push(0,x,0),h.push(.5,.5),g++;const P=g;for(let I=0;I<=i;I++){const k=I/i*l+a,q=Math.cos(k),H=Math.sin(k);S.x=M*H,S.y=m*x,S.z=M*q,f.push(S.x,S.y,S.z),d.push(0,x,0),w.x=q*.5+.5,w.y=H*.5*x+.5,h.push(w.x,w.y),g++}for(let I=0;I<i;I++){const F=A+I,k=P+I;v===!0?u.push(k,k+1,F):u.push(k+1,k,F),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xl extends hi{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new B,d=new B,h=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],E=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const w=A/e;f.x=-t*Math.cos(i+w*s)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(i+w*s)*Math.sin(o+E*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-E),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const E=u[p][y+1],v=u[p][y],A=u[p+1][y],w=u[p+1][y+1];(p!==0||o>0)&&h.push(E,v,w),(p!==n-1||l<Math.PI)&&h.push(v,A,w)}this.setIndex(h),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bh extends hi{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new B,f=new B,d=new B;for(let h=0;h<=n;h++)for(let g=0;g<=i;g++){const _=g/i*s,m=h/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=i;g++){const _=(i+1)*h+g-1,m=(i+1)*(h-1)+g-1,p=(i+1)*(h-1)+g,y=(i+1)*h+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wp extends xa{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ci extends Wp{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xp extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rS extends Xp{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wc=new me,cd=new B,ud=new B;class sS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(cd),ud.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ud),e.updateMatrixWorld(),wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class oS extends sS{constructor(){super(new Fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wh extends Xp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new oS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const hd=new me;class aS{constructor(t,e,n=0,i=1/0){this.ray=new Rp(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(t,e=!0,n=[]){return Uu(t,this,n,e),n.sort(fd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Uu(t[i],this,n,e);return n.sort(fd),n}}function fd(r,t){return r.distance-t.distance}function Uu(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Uu(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);function Gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Yp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lo={duration:.5,overwrite:!1,delay:0},Ah,hn,be,si=1e8,ye=1/si,Nu=Math.PI*2,lS=Nu/4,cS=0,qp=Math.sqrt,uS=Math.cos,hS=Math.sin,en=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},tr=function(t){return typeof t=="number"},Rh=function(t){return typeof t>"u"},Ui=function(t){return typeof t=="object"},An=function(t){return t!==!1},Ch=function(){return typeof window<"u"},Wa=function(t){return Ie(t)||en(t)},$p=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,Fu=/(?:-?\.?\d|\.)+/gi,Zp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ac=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kp=/[+-]=-?[.\d]+/,jp=/[^,'"\[\]\s]+/gi,fS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ae,bi,Ou,Ph,Kn={},Tl={},Jp,Qp=function(t){return(Tl=cs(t,Kn))&&Dn},Dh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ca=function(t,e){return!e&&console.warn(t)},tm=function(t,e){return t&&(Kn[t]=e)&&Tl&&(Tl[t]=e)||Kn},ua=function(){return 0},dS={suppressEvents:!0,isStart:!0,kill:!1},ul={suppressEvents:!0,kill:!1},pS={suppressEvents:!0},Lh={},yr=[],Bu={},em,Hn={},Rc={},dd=30,hl=[],Ih="",Uh=function(t){var e=t[0],n,i;if(Ui(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=hl.length;i--&&!hl[i].targetTest(e););n=hl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new bm(t[i],n)))||t.splice(i,1);return t},ts=function(t){return t._gsap||Uh(oi(t))[0]._gsap},nm=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():Rh(n)&&t.getAttribute&&t.getAttribute(e)||n},Rn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ne=function(t){return Math.round(t*1e5)/1e5||0},Qe=function(t){return Math.round(t*1e7)/1e7||0},Zs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},mS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},bl=function(){var t=yr.length,e=yr.slice(0),n,i;for(Bu={},yr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},im=function(t,e,n,i){yr.length&&!hn&&bl(),t.render(e,n,hn&&e<0&&(t._initted||t._startAt)),yr.length&&!hn&&bl()},rm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(jp).length<2?e:en(t)?t.trim():t},sm=function(t){return t},ui=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},_S=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},cs=function(t,e){for(var n in e)t[n]=e[n];return t},pd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ui(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},wl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},qo=function(t){var e=t.parent||Ae,n=t.keyframes?_S(fn(t.keyframes)):ui;if(An(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},gS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},om=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Yl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Rr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},es=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},vS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},zu=function(t,e,n,i){return t._startAt&&(hn?t._startAt.revert(ul):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},xS=function r(t){return!t||t._ts&&r(t.parent)},md=function(t){return t._repeat?co(t._tTime,t=t.duration()+t._rDelay)*t:0},co=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Al=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ql=function(t){return t._end=Qe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},$l=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Qe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ql(t),n._dirty||es(n,t)),t},am=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Al(t.rawTime(),e),(!e._dur||Ma(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),es(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},Ri=function(t,e,n,i){return e.parent&&Rr(e),e._start=Qe((tr(n)?n:n||t!==Ae?ti(t,n,e):t._time)+e._delay),e._end=Qe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),om(t,e,"_first","_last",t._sort?"_start":0),ku(e)||(t._recent=e),i||am(t,e),t._ts<0&&$l(t,t._tTime),t},lm=function(t,e){return(Kn.ScrollTrigger||Dh("scrollTrigger",e))&&Kn.ScrollTrigger.create(e,t)},cm=function(t,e,n,i,s){if(Fh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!hn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&em!==Gn.frame)return yr.push(t),t._lazy=[s,i],1},MS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ku=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},yS=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&MS(t)&&!(!t._initted&&ku(t))||(t._ts<0||t._dp._ts<0)&&!ku(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=Ma(0,t._tDur,e),u=co(l,a),t._yoyo&&u&1&&(o=1-o),u!==co(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||hn||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&cm(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&zu(t,e,n,!0),t._onUpdate&&!n&&Xn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Xn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Rr(t,1),!n&&!hn&&(Xn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},SS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},uo=function(t,e,n,i){var s=t._repeat,o=Qe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Qe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&$l(t,t._tTime=t._tDur*a),t.parent&&ql(t),n||es(t.parent,t),t},_d=function(t){return t instanceof yn?es(t):uo(t,t._dur)},ES={_start:0,endTime:ua,totalDuration:ua},ti=function r(t,e,n){var i=t.labels,s=t._recent||ES,o=t.duration()>=si?s.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(fn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},$o=function(t,e,n){var i=tr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ke(e[0],o,e[s+1])},Ir=function(t,e){return t||t===0?e(t):e},Ma=function(t,e,n){return n<t?t:n>e?e:n},cn=function(t,e){return!en(t)||!(e=fS.exec(t))?"":e[1]},TS=function(t,e,n){return Ir(n,function(i){return Ma(t,e,i)})},Hu=[].slice,um=function(t,e){return t&&Ui(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ui(t[0]))&&!t.nodeType&&t!==bi},bS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||um(i,1)?(s=n).push.apply(s,oi(i)):n.push(i)})||n},oi=function(t,e,n){return be&&!e&&be.selector?be.selector(t):en(t)&&!n&&(Ou||!ho())?Hu.call((e||Ph).querySelectorAll(t),0):fn(t)?bS(t,n):um(t)?Hu.call(t,0):t?[t]:[]},Vu=function(t){return t=oi(t)[0]||ca("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return oi(e,n.querySelectorAll?n:n===t?ca("Invalid scope")||Ph.createElement("div"):t)}},hm=function(t){return t.sort(function(){return .5-Math.random()})},fm=function(t){if(Ie(t))return t;var e=Ui(t)?t:{each:t},n=ns(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,f=i;return en(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(d,h,g){var _=(g||e).length,m=o[_],p,y,E,v,A,w,S,R,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,si])[1],!M){for(S=-si;S<(S=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,y=M===si?0:l?_*f/M-.5:i/M|0,S=0,R=si,w=0;w<_;w++)E=w%M-p,v=y-(w/M|0),m[w]=A=c?Math.abs(c==="y"?v:E):qp(E*E+v*v),A>S&&(S=A),A<R&&(R=A);i==="random"&&hm(m),m.max=S-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=cn(e.amount||e.each)||0,n=n&&_<0?Sm(n):n}return _=(m[d]-m.min)/m.max||0,Qe(m.b+(n?n(_):_)*m.v)+m.u}},Gu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Qe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(tr(n)?0:cn(n))}},dm=function(t,e){var n=fn(t),i,s;return!n&&Ui(t)&&(i=n=t.radius||si,t.values?(t=oi(t.values),(s=!tr(t[0]))&&(i*=i)):t=Gu(t.increment)),Ir(e,n?Ie(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=si,u=0,f=t.length,d,h;f--;)s?(d=t[f].x-a,h=t[f].y-l,d=d*d+h*h):d=Math.abs(t[f]-a),d<c&&(c=d,u=f);return u=!i||c<=i?t[u]:o,s||u===o||tr(o)?u:u+cn(o)}:Gu(t))},pm=function(t,e,n,i){return Ir(fn(t)?!e:n===!0?!!(n=0):!i,function(){return fn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},wS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},AS=function(t,e){return function(n){return t(parseFloat(n))+(e||cn(n))}},RS=function(t,e,n){return _m(t,e,0,1,n)},mm=function(t,e,n){return Ir(n,function(i){return t[~~e(i)]})},CS=function r(t,e,n){var i=e-t;return fn(t)?mm(t,r(0,t.length),e):Ir(n,function(s){return(i+(s-t)%i)%i+t})},PS=function r(t,e,n){var i=e-t,s=i*2;return fn(t)?mm(t,r(0,t.length-1),e):Ir(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ha=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?jp:Fu),n+=t.substr(e,i-e)+pm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},_m=function(t,e,n,i,s){var o=e-t,a=i-n;return Ir(s,function(l){return n+((l-t)/o*a||0)})},DS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(h){return(1-h)*t+h*e};if(!s){var o=en(t),a={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(fn(t)&&!fn(e)){for(u=[],f=t.length,d=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else i||(t=cs(fn(t)?[]:{},t));if(!u){for(l in e)Nh.call(a,t,l,"get",e[l]);s=function(g){return zh(g,a)||(o?t.p:t)}}}return Ir(n,s)},gd=function(t,e,n){var i=t.labels,s=si,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Xn=function(t,e,n){var i=t.vars,s=i[e],o=be,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&yr.length&&bl(),a&&(be=a),u=l?s.apply(c,l):s.call(c),be=o,u},Bo=function(t){return Rr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!hn),t.progress()<1&&Xn(t,"onInterrupt"),t},Ws,gm=[],vm=function(t){if(t)if(t=!t.name&&t.default||t,Ch()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ua,render:zh,add:Nh,kill:qS,modifier:YS,rawVars:0},o={targetTest:0,get:0,getSetter:Bh,aliases:{},register:0};if(ho(),t!==i){if(Hn[e])return;ui(i,ui(wl(t,s),o)),cs(i.prototype,cs(s,wl(t,o))),Hn[i.prop=e]=i,t.targetTest&&(hl.push(i),Lh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}tm(e,i),t.register&&t.register(Dn,i,Cn)}else gm.push(t)},xe=255,zo={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},Cc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},xm=function(t,e,n){var i=t?tr(t)?[t>>16,t>>8&xe,t&xe]:0:zo.black,s,o,a,l,c,u,f,d,h,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),zo[t])i=zo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Fu),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Cc(l+1/3,s,o),i[1]=Cc(l,s,o),i[2]=Cc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Zp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Fu)||zo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/xe,o=i[1]/xe,a=i[2]/xe,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Mm=function(t){var e=[],n=[],i=-1;return t.split(Sr).forEach(function(s){var o=s.match(Gs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},vd=function(t,e,n){var i="",s=(t+i).match(Sr),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(d){return(d=xm(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Mm(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Sr,"1").split(Gs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Sr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in zo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),LS=/hsl[a]?\(/,ym=function(t){var e=t.join(" "),n;if(Sr.lastIndex=0,Sr.test(e))return n=LS.test(e),t[1]=vd(t[1],n),t[0]=vd(t[0],n,Mm(t[1])),!0},fa,Gn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,d,h,g=function _(m){var p=r()-i,y=m===!0,E,v,A,w;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,E=A-o,(E>0||y)&&(w=++f.frame,d=A-f.time*1e3,f.time=A=A/1e3,o+=E+(E>=s?4:s-E),v=1),y||(l=c(_)),v)for(h=0;h<a.length;h++)a[h](A,d,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Jp&&(!Ou&&Ch()&&(bi=Ou=window,Ph=bi.document||{},Kn.gsap=Dn,(bi.gsapVersions||(bi.gsapVersions=[])).push(Dn.version),Qp(Tl||bi.GreenSockGlobals||!bi.gsap&&bi||{}),gm.forEach(vm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},fa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),fa=0,c=ua},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,y){var E=p?function(v,A,w,S){m(v,A,w,S),f.remove(E)}:m;return f.remove(m),a[y?"unshift":"push"](E),ho(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f}(),ho=function(){return!fa&&Gn.wake()},se={},IS=/^[\d.\-M][\d.\-,\s]/,US=/["']/g,NS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(US,"").trim():+c,i=l.substr(a+1).trim();return e},FS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},OS=function(t){var e=(t+"").split("("),n=se[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[NS(e[1])]:FS(t).split(",").map(rm)):se._CE&&IS.test(t)?se._CE("",t):n},Sm=function(t){return function(e){return 1-t(1-e)}},Em=function r(t,e){for(var n=t._first,i;n;)n instanceof yn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ns=function(t,e){return t&&(Ie(t)?t:se[t]||OS(t))||e},_s=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Rn(t,function(a){se[a]=Kn[a]=s,se[o=a.toLowerCase()]=n;for(var l in s)se[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[a+"."+l]=s[l]}),s},Tm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Pc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Nu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*hS((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Tm(a);return s=Nu/s,l.config=function(c,u){return r(t,c,u)},l},Dc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Tm(n);return i.config=function(s){return r(t,s)},i};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;_s(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;_s("Elastic",Pc("in"),Pc("out"),Pc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};_s("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);_s("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});_s("Circ",function(r){return-(qp(1-r*r)-1)});_s("Sine",function(r){return r===1?1:-uS(r*lS)+1});_s("Back",Dc("in"),Dc("out"),Dc());se.SteppedEase=se.steps=Kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ye;return function(a){return((i*Ma(0,o,a)|0)+s)*n}}};lo.ease=se["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ih+=r+","+r+"Params,"});var bm=function(t,e){this.id=cS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:nm,this.set=e?e.getSetter:Bh},da=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,uo(this,+e.duration,1,1),this.data=e.data,be&&(this._ctx=be,be.data.push(this)),fa||Gn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,uo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ho(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($l(this,n),!s._dp||s.parent||am(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),im(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+md(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+md(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?co(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this._tDur,s),i!==!1),ql(this),vS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ho(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Al(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=pS);var i=hn;return hn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_d(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_d(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ti(this,n),An(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ye)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ie(n)?n:sm,a=function(){var c=i.then;i.then=null,Ie(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Bo(this)},r}();ui(da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var yn=function(r){Yp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Ae&&Ri(n.parent||Ae,Gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&lm(Gi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return $o(0,arguments,this),this},e.from=function(i,s,o){return $o(1,arguments,this),this},e.fromTo=function(i,s,o,a){return $o(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,qo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,ti(this,o),1),this},e.call=function(i,s,o){return Ri(this,ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ke(i,o,ti(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,qo(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,qo(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Qe(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,g,_,m,p,y,E,v,A,w,S;if(this!==Ae&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,E=this._ts,p=!E,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Qe(u%m),u===l?(_=this._repeat,d=c):(_=~~(u/m),_&&_===u/m&&(d=c,_--),d>c&&(d=c)),A=co(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(d=c-d,S=1),_!==A&&!this._lock){var R=w&&A&1,M=R===(w&&_&1);if(_<A&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(S?0:Qe(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Em(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=SS(this,Qe(a),Qe(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(Xn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-ye);break}}h=g}else{h=this._last;for(var x=i<0?i:d;h;){if(g=h._prev,(h._act||x<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(x-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(x-h._start)*h._ts,s,o||hn&&(h._initted||h._startAt)),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=x?-ye:ye);break}}h=g}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-ye)._zTime=d>=a?1:-1,this._ts))return this._start=v,ql(this),this.render(i,s,o);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Rr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(tr(s)||(s=ti(this,s,i)),!(i instanceof da)){if(fn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(Ie(i))i=ke.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ke?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return en(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(Yl(this,i),i===this._recent&&(this._recent=this._last),es(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Qe(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ti(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ke.delayedCall(0,s||ua,o);return a.data="isPause",this._hasPause=1,Ri(this,a,ti(this,i))},e.removePause=function(i){var s=this._first;for(i=ti(this,i);s;)s._start===i&&s.data==="isPause"&&Rr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)dr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=oi(i),l=this._first,c=tr(s),u;l;)l instanceof ke?mS(l._targets,a)&&(c?(!dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ti(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=ke.to(o,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ye,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&uo(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ui({startAt:{time:ti(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),gd(this,ti(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),gd(this,ti(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return es(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=si,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ri(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;uo(o,o===Ae&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ae._ts&&(im(Ae,Al(i,Ae)),em=Gn.frame),Gn.frame>=dd){dd+=$n.autoSleep||120;var s=Ae._first;if((!s||!s._ts)&&$n.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},t}(da);ui(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var BS=function(t,e,n,i,s,o,a){var l=new Cn(this._pt,t,e,0,1,Dm,null,s),c=0,u=0,f,d,h,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ha(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),d=n.match(Ac)||[];f=Ac.exec(i);)g=f[0],_=i.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Zs(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=Ac.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Kp.test(i)||p)&&(l.e=0),this._pt=l,l},Nh=function(t,e,n,i,s,o,a,l,c,u){Ie(i)&&(i=i(s||0,t,o));var f=t[e],d=n!=="get"?n:Ie(f)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,h=Ie(f)?c?GS:Cm:Oh,g;if(en(i)&&(~i.indexOf("random(")&&(i=ha(i)),i.charAt(1)==="="&&(g=Zs(d,i)+(cn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Wu)return!isNaN(d*i)&&i!==""?(g=new Cn(this._pt,t,e,+d||0,i-(d||0),typeof f=="boolean"?XS:Pm,0,h),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Dh(e,i),BS.call(this,t,e,d,i,h,l||$n.stringFilter,c))},zS=function(t,e,n,i,s){if(Ie(t)&&(t=Zo(t,s,e,n,i)),!Ui(t)||t.style&&t.nodeType||fn(t)||$p(t))return en(t)?Zo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Zo(t[a],s,e,n,i);return o},wm=function(t,e,n,i,s,o){var a,l,c,u;if(Hn[t]&&(a=new Hn[t]).init(s,a.rawVars?e[t]:zS(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ws))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},dr,Wu,Fh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!Ah,v=t.timeline,A,w,S,R,M,x,P,I,F,k,q,H,G;if(v&&(!d||!s)&&(s="none"),t._ease=ns(s,lo.ease),t._yEase=f?Sm(ns(f===!0?s:f,lo.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(I=m[0]?ts(m[0]).harness:0,H=I&&i[I.prop],A=wl(i,Lh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?ul:dS),_._lazy=0),o){if(Rr(t._startAt=ke.set(m,ui({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(hn||!a&&!h)&&t._startAt.revert(ul),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),S=ui({overwrite:!1,data:"isFromStart",lazy:a&&!_&&An(l),immediateRender:a,stagger:0,parent:p},A),H&&(S[I.prop]=H),Rr(t._startAt=ke.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(hn?t._startAt.revert(ul):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&An(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],P=M._gsap||Uh(m)[w]._gsap,t._ptLookup[w]=k={},Bu[P.id]&&yr.length&&bl(),q=y===m?w:y.indexOf(M),I&&(F=new I).init(M,H||A,t,q,y)!==!1&&(t._pt=R=new Cn(t._pt,M,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(z){k[z]=R}),F.priority&&(x=1)),!I||H)for(S in A)Hn[S]&&(F=wm(S,A,t,q,M,y))?F.priority&&(x=1):k[S]=R=Nh.call(t,M,S,"get",A[S],q,y,0,i.stringFilter);t._op&&t._op[w]&&t.kill(M,t._op[w]),E&&t._pt&&(dr=t,Ae.killTweensOf(M,k,t.globalTime(e)),G=!t.parent,dr=0),t._pt&&l&&(Bu[P.id]=1)}x&&Lm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!G,d&&e<=0&&v.render(si,!0,!0)},kS=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,d,h;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,h=t._targets.length;h--;){if(u=d[h][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Wu=1,t.vars[e]="+=0",Fh(t,a),Wu=0,l?ca(e+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ne(n)+cn(f.e)),f.b&&(f.b=u.s+cn(f.b))},HS=function(t,e){var n=t[0]?ts(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=cs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},VS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(fn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Zo=function(t,e,n,i,s){return Ie(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?ha(t):t},Am=Ih+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rm={};Rn(Am+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Rm[r]=1});var ke=function(r){Yp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:qo(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Ae,E=(fn(n)||$p(n)?tr(n[0]):"length"in i)?[n]:oi(n),v,A,w,S,R,M,x,P;if(a._targets=E.length?Uh(E):ca("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||d||Wa(c)||Wa(u)){if(i=a.vars,v=a.timeline=new yn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:E}),v.kill(),v.parent=v._dp=Gi(a),v._start=0,d||Wa(c)||Wa(u)){if(S=E.length,x=d&&fm(d),Ui(d))for(R in d)~Am.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(A=0;A<S;A++)w=wl(i,Rm),w.stagger=0,p&&(w.yoyoEase=p),P&&cs(w,P),M=E[A],w.duration=+Zo(c,Gi(a),A,M,E),w.delay=(+Zo(u,Gi(a),A,M,E)||0)-a._delay,!d&&S===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(M,w,x?x(A,M,E):0),v._ease=se.none;v.duration()?c=u=0:a.timeline=0}else if(g){qo(ui(v.vars.defaults,{ease:"none"})),v._ease=ns(g.ease||i.ease||"none");var I=0,F,k,q;if(fn(g))g.forEach(function(H){return v.to(E,H,">")}),v.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||VS(R,g[R],w,g.easeEach);for(R in w)for(F=w[R].sort(function(H,G){return H.t-G.t}),I=0,A=0;A<F.length;A++)k=F[A],q={ease:k.e,duration:(k.t-(A?F[A-1].t:0))/100*c},q[R]=k.v,v.to(E,q,I),I+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return h===!0&&!Ah&&(dr=Gi(a),Ae.killTweensOf(E),dr=0),Ri(y,Gi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Qe(y._time)&&An(f)&&xS(Gi(a))&&y.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-u)||0)),m&&lm(Gi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ye&&!u?l:i<ye?0:i,d,h,g,_,m,p,y,E,v;if(!c)yS(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=Qe(f%_),f===l?(g=this._repeat,d=c):(g=~~(f/_),g&&g===Qe(f/_)&&(d=c,g--),d>c&&(d=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,d=c-d),m=co(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(E&&this._yEase&&Em(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Qe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(cm(this,u?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!s&&!g&&(Xn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&zu(this,i,s,o),Xn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&zu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Rr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Xn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){fa||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Fh(this,c),u=this._ease(c/this._dur),kS(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):($l(this,0),this.parent||om(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Bo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,dr&&dr.vars.overwrite!==!0)._first||Bo(this),this.parent&&o!==this.timeline.totalDuration()&&uo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?oi(i):a,c=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&gS(a,l))return s==="all"&&(this._pt=0),Bo(this);for(f=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Rn(s,function(y){return _[y]=1}),s=_),s=HS(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Yl(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&Bo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return $o(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return $o(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ae.killTweensOf(i,s,o)},t}(da);ui(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new yn,e=Hu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Oh=function(t,e,n){return t[e]=n},Cm=function(t,e,n){return t[e](n)},GS=function(t,e,n,i){return t[e](i.fp,n)},WS=function(t,e,n){return t.setAttribute(e,n)},Bh=function(t,e){return Ie(t[e])?Cm:Rh(t[e])&&t.setAttribute?WS:Oh},Pm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},XS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Dm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},zh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},YS=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},qS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Yl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},$S=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Lm=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Cn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Pm,this.d=l||this,this.set=c||Oh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=$S,this.m=n,this.mt=s,this.tween=i},r}();Rn(Ih+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Lh[r]=1});Kn.TweenMax=Kn.TweenLite=ke;Kn.TimelineLite=Kn.TimelineMax=yn;Ae=new yn({sortChildren:!1,defaults:lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=ym;var is=[],fl={},ZS=[],xd=0,KS=0,Lc=function(t){return(fl[t]||ZS).map(function(e){return e()})},Xu=function(){var t=Date.now(),e=[];t-xd>2&&(Lc("matchMediaInit"),is.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=bi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Lc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xd=t,Lc("matchMedia"))},Im=function(){function r(e,n){this.selector=n&&Vu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=KS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ie(n)&&(s=i,i=n,n=Ie);var o=this,a=function(){var c=be,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Vu(s)),be=o,f=i.apply(o,arguments),Ie(f)&&o._r.push(f),be=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Ie?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=be;be=null,n(this),be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=is.length;o--;)is[o].id===this.id&&is.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),jS=function(){function r(e){this.contexts=[],this.scope=e,be&&be.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ui(n)||(n={matches:n});var o=new Im(0,s||this.scope),a=o.conditions={},l,c,u;be&&!o.selector&&(o.selector=be.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=bi.matchMedia(n[c]),l&&(is.indexOf(o)<0&&is.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Xu):l.addEventListener("change",Xu)));return u&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Rl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return vm(i)})},timeline:function(t){return new yn(t)},getTweensOf:function(t,e){return Ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=oi(t)[0]);var s=ts(t||{}).get,o=n?sm:rm;return n==="native"&&(n=""),t&&(e?o((Hn[e]&&Hn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Hn[a]&&Hn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=oi(t),t.length>1){var i=t.map(function(u){return Dn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var o=Hn[e],a=ts(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;Ws._pt=0,f.init(t,n?u+n:u,Ws,0,[t]),f.render(1,f),Ws._pt&&zh(1,Ws)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Dn.to(t,cs((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ns(t.ease,lo.ease)),pd(lo,t||{})},config:function(t){return pd($n,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Hn[a]&&!Kn[a]&&ca(e+" effect requires "+a+" plugin.")}),Rc[e]=function(a,l,c){return n(oi(a),ui(l||{},s),c)},o&&(yn.prototype[e]=function(a,l,c){return this.add(Rc[e](a,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){se[t]=ns(e)},parseEase:function(t,e){return arguments.length?ns(t,e):se},getById:function(t){return Ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new yn(t),i,s;for(n.smoothChildTiming=An(t.smoothChildTiming),Ae.remove(n),n._dp=0,n._time=n._tTime=Ae._time,i=Ae._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(Ae,n,0),n},context:function(t,e){return t?new Im(t,e):be},matchMedia:function(t){return new jS(t)},matchMediaRefresh:function(){return is.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Xu()},addEventListener:function(t,e){var n=fl[t]||(fl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=fl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:CS,wrapYoyo:PS,distribute:fm,random:pm,snap:dm,normalize:RS,getUnit:cn,clamp:TS,splitColor:xm,toArray:oi,selector:Vu,mapRange:_m,pipe:wS,unitize:AS,interpolate:DS,shuffle:hm},install:Qp,effects:Rc,ticker:Gn,updateRoot:yn.updateRoot,plugins:Hn,globalTimeline:Ae,core:{PropTween:Cn,globals:tm,Tween:ke,Timeline:yn,Animation:da,getCache:ts,_removeLinkedListItem:Yl,reverting:function(){return hn},context:function(t){return t&&be&&(be.data.push(t),t._ctx=be),be},suppressOverwrites:function(t){return Ah=t}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Rl[r]=ke[r]});Gn.add(yn.updateRoot);Ws=Rl.to({},{duration:0});var JS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},QS=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=JS(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ic=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Rn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}QS(a,s)}}}},Dn=Rl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ic("roundProps",Gu),Ic("modifiers"),Ic("snap",dm))||Rl;ke.version=yn.version=Dn.version="3.12.5";Jp=1;Ch()&&ho();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Md,pr,Ks,kh,jr,yd,Hh,tE=function(){return typeof window<"u"},er={},Wr=180/Math.PI,js=Math.PI/180,Is=Math.atan2,Sd=1e8,Vh=/([A-Z])/g,eE=/(left|right|width|margin|padding|x)/i,nE=/[\s,\(]\S/,Pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},iE=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},rE=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},sE=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Um=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Nm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},oE=function(t,e,n){return t.style[e]=n},aE=function(t,e,n){return t.style.setProperty(e,n)},lE=function(t,e,n){return t._gsap[e]=n},cE=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},uE=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},hE=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Re="transform",Pn=Re+"Origin",fE=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in er&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Pi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Wi(i,a)}):this.tfm[t]=o.x?o[t]:Wi(i,t),t===Pn&&(this.tfm.zOrigin=o.zOrigin);else return Pi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Re)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,e,"")),t=Re}(s||e)&&this.props.push(t,e,s[t])},Fm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},dE=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Vh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Hh(),(!s||!s.isStart)&&!n[Re]&&(Fm(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Om=function(t,e){var n={target:t,props:[],revert:dE,save:fE};return t._gsap||Dn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Bm,qu=function(t,e){var n=pr.createElementNS?pr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):pr.createElement(t);return n&&n.style?n:pr.createElement(t)},Li=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Vh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,fo(e)||e,1)||""},Ed="O,Moz,ms,Ms,Webkit".split(","),fo=function(t,e,n){var i=e||jr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ed[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ed[o]:"")+t},$u=function(){tE()&&window.document&&(Md=window,pr=Md.document,Ks=pr.documentElement,jr=qu("div")||{style:{}},qu("div"),Re=fo(Re),Pn=Re+"Origin",jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bm=!!fo("perspective"),Hh=Dn.core.reverting,kh=1)},Uc=function r(t){var e=qu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Ks.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ks.removeChild(e),this.style.cssText=s,o},Td=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},zm=function(t){var e;try{e=t.getBBox()}catch{e=Uc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Uc||(e=Uc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Td(t,["x","cx","x1"])||0,y:+Td(t,["y","cy","y1"])||0,width:0,height:0}:e},km=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zm(t))},us=function(t,e){if(e){var n=t.style,i;e in er&&e!==Pn&&(e=Re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Vh,"-$1").toLowerCase())):n.removeAttribute(e)}},mr=function(t,e,n,i,s,o){var a=new Cn(t._pt,e,n,0,1,o?Nm:Um);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},bd={deg:1,rad:1,turn:1},pE={grid:1,flex:1},Cr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=jr.style,l=eE.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",g,_,m,p;if(i===o||!s||bd[i]||bd[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&km(t),(h||o==="%")&&(er[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],Ne(h?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===pr||!_.appendChild)&&(_=pr.body),m=_._gsap,m&&h&&m.width&&l&&m.time===Gn.time&&!m.uncache)return Ne(s/m.width*f);if(h&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,g=t[u],y?t.style[e]=y:us(t,e)}else(h||o==="%")&&!pE[Li(_,"display")]&&(a.position=Li(t,"position")),_===t&&(a.position="static"),_.appendChild(jr),g=jr[u],_.removeChild(jr),a.position="absolute";return l&&h&&(m=ts(_),m.time=Gn.time,m.width=_[u]),Ne(d?g*s/f:g&&s?f/g*s:0)},Wi=function(t,e,n,i){var s;return kh||$u(),e in Pi&&e!=="transform"&&(e=Pi[e],~e.indexOf(",")&&(e=e.split(",")[0])),er[e]&&e!=="transform"?(s=ma(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Pl(Li(t,Pn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Cl[e]&&Cl[e](t,e,n)||Li(t,e)||nm(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cr(t,e,s,n)+n:s},mE=function(t,e,n,i){if(!n||n==="none"){var s=fo(e,t,1),o=s&&Li(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Li(t,"borderTopColor"))}var a=new Cn(this._pt,t.style,e,0,1,Dm),l=0,c=0,u,f,d,h,g,_,m,p,y,E,v,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Li(t,e)||i,_?t.style[e]=_:us(t,e)),u=[n,i],ym(u),n=u[0],i=u[1],d=n.match(Gs)||[],A=i.match(Gs)||[],A.length){for(;f=Gs.exec(i);)m=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(h=parseFloat(_)||0,v=_.substr((h+"").length),m.charAt(1)==="="&&(m=Zs(h,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=Gs.lastIndex-E.length,E||(E=E||$n.units[e]||v,l===i.length&&(i+=E,a.e+=E)),v!==E&&(h=Cr(t,e,_,E)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:h,c:p-h,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Nm:Um;return Kp.test(i)&&(a.e=0),this._pt=a,a},wd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_E=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=wd[n]||n,e[1]=wd[i]||i,e.join(" ")},gE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],er[a]&&(l=1,a=a==="transformOrigin"?Pn:Re),us(n,a);l&&(us(n,Re),o&&(o.svg&&n.removeAttribute("transform"),ma(n,1),o.uncache=1,Fm(i)))}},Cl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Cn(t._pt,e,n,0,0,gE);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},pa=[1,0,0,1,0,0],Hm={},Vm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ad=function(t){var e=Li(t,Re);return Vm(e)?pa:e.substr(7).match(Zp).map(Ne)},Gh=function(t,e){var n=t._gsap||ts(t),i=t.style,s=Ad(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?pa:s):(s===pa&&!t.offsetParent&&t!==Ks&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Ks.appendChild(t)),s=Ad(t),l?i.display=l:us(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ks.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zu=function(t,e,n,i,s,o){var a=t._gsap,l=s||Gh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],E=e.split(" "),v=parseFloat(E[0])||0,A=parseFloat(E[1])||0,w,S,R,M;n?l!==pa&&(S=h*m-g*_)&&(R=v*(m/S)+A*(-_/S)+(_*y-m*p)/S,M=v*(-g/S)+A*(h/S)-(h*y-g*p)/S,v=R,A=M):(w=zm(t),v=w.x+(~E[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(E[1]||E[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(p=v-c,y=A-u,a.xOffset=f+(p*h+y*_)-p,a.yOffset=d+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Pn]="0px 0px",o&&(mr(o,a,"xOrigin",c,v),mr(o,a,"yOrigin",u,A),mr(o,a,"xOffset",f,a.xOffset),mr(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},ma=function(t,e){var n=t._gsap||new bm(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Li(t,Pn)||"0",u,f,d,h,g,_,m,p,y,E,v,A,w,S,R,M,x,P,I,F,k,q,H,G,z,tt,D,at,Ct,Jt,Z,et;return u=f=d=_=m=p=y=E=v=0,h=g=1,n.svg=!!(t.getCTM&&km(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),i.scale=i.rotate=i.translate="none"),S=Gh(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),Zu(t,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,S)),A=n.xOrigin||0,w=n.yOrigin||0,S!==pa&&(P=S[0],I=S[1],F=S[2],k=S[3],u=q=S[4],f=H=S[5],S.length===6?(h=Math.sqrt(P*P+I*I),g=Math.sqrt(k*k+F*F),_=P||I?Is(I,P)*Wr:0,y=F||k?Is(F,k)*Wr+_:0,y&&(g*=Math.abs(Math.cos(y*js))),n.svg&&(u-=A-(A*P+w*F),f-=w-(A*I+w*k))):(et=S[6],Jt=S[7],D=S[8],at=S[9],Ct=S[10],Z=S[11],u=S[12],f=S[13],d=S[14],R=Is(et,Ct),m=R*Wr,R&&(M=Math.cos(-R),x=Math.sin(-R),G=q*M+D*x,z=H*M+at*x,tt=et*M+Ct*x,D=q*-x+D*M,at=H*-x+at*M,Ct=et*-x+Ct*M,Z=Jt*-x+Z*M,q=G,H=z,et=tt),R=Is(-F,Ct),p=R*Wr,R&&(M=Math.cos(-R),x=Math.sin(-R),G=P*M-D*x,z=I*M-at*x,tt=F*M-Ct*x,Z=k*x+Z*M,P=G,I=z,F=tt),R=Is(I,P),_=R*Wr,R&&(M=Math.cos(R),x=Math.sin(R),G=P*M+I*x,z=q*M+H*x,I=I*M-P*x,H=H*M-q*x,P=G,q=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Ne(Math.sqrt(P*P+I*I+F*F)),g=Ne(Math.sqrt(H*H+et*et)),R=Is(q,H),y=Math.abs(R)>2e-4?R*Wr:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Vm(Li(t,Re)),G&&t.setAttribute("transform",G))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ne(h),n.scaleY=Ne(g),n.rotation=Ne(_)+a,n.rotationX=Ne(m)+a,n.rotationY=Ne(p)+a,n.skewX=y+a,n.skewY=E+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Pn]=Pl(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?xE:Bm?Gm:vE,n.uncache=0,n},Pl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Nc=function(t,e,n){var i=cn(e);return Ne(parseFloat(e)+parseFloat(Cr(t,"x",n+"px",i)))+i},vE=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Gm(t,e)},kr="0deg",Do="0px",Hr=") ",Gm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,E=n.zOrigin,v="",A=p==="auto"&&t&&t!==1||p===!0;if(E&&(f!==kr||u!==kr)){var w=parseFloat(u)*js,S=Math.sin(w),R=Math.cos(w),M;w=parseFloat(f)*js,M=Math.cos(w),o=Nc(y,o,S*M*-E),a=Nc(y,a,-Math.sin(w)*-E),l=Nc(y,l,R*M*-E+E)}m!==Do&&(v+="perspective("+m+Hr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==Do||a!==Do||l!==Do)&&(v+=l!==Do||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Hr),c!==kr&&(v+="rotate("+c+Hr),u!==kr&&(v+="rotateY("+u+Hr),f!==kr&&(v+="rotateX("+f+Hr),(d!==kr||h!==kr)&&(v+="skew("+d+", "+h+Hr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Hr),y.style[Re]=v||"translate(0, 0)"},xE=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,E=parseFloat(o),v=parseFloat(a),A,w,S,R,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=js,c*=js,A=Math.cos(l)*f,w=Math.sin(l)*f,S=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=js,M=Math.tan(c-u),M=Math.sqrt(1+M*M),S*=M,R*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=Ne(A),w=Ne(w),S=Ne(S),R=Ne(R)):(A=f,R=d,w=S=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=Cr(h,"x",o,"px"),v=Cr(h,"y",a,"px")),(g||_||m||p)&&(E=Ne(E+g-(g*A+_*S)+m),v=Ne(v+_-(g*w+_*R)+p)),(i||s)&&(M=h.getBBox(),E=Ne(E+i/100*M.width),v=Ne(v+s/100*M.height)),M="matrix("+A+","+w+","+S+","+R+","+E+","+v+")",h.setAttribute("transform",M),y&&(h.style[Re]=M)},ME=function(t,e,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Wr:1),c=l-i,u=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Sd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Sd)%o-~~(c/o)*o)),t._pt=d=new Cn(t._pt,e,n,i,c,iE),d.e=u,d.u="deg",t._props.push(n),d},Rd=function(t,e){for(var n in e)t[n]=e[n];return t},yE=function(t,e,n){var i=Rd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Re]=e,a=ma(n,1),us(n,Re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Re],o[Re]=e,a=ma(n,1),o[Re]=c);for(l in er)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=cn(c),g=cn(u),f=h!==g?Cr(n,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new Cn(t._pt,a,l,f,d-f,Yu),t._pt.u=g||0,t._props.push(l));Rd(a,i)};Rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Cl[t>1?"border"+r:r]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(g){return Wi(a,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,h,f)}});var Wm={name:"css",register:$u,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,d,h,g,_,m,p,y,E,v,A,w,S,R;kh||$u(),this.styles=this.styles||Om(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Hn[_]&&wm(_,e,n,i,t,s)))){if(h=typeof u,g=Cl[_],h==="function"&&(u=u.call(n,i,t,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ha(u)),g)g(this,t,_,u,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Sr.lastIndex=0,Sr.test(c)||(m=cn(c),p=cn(u)),p?m!==p&&(c=Cr(t,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=ha(c)),cn(c+"")||c==="auto"||(c+=$n.units[_]||cn(Wi(t,_))||""),(c+"").charAt(1)==="="&&(c=Wi(t,_))):c=Wi(t,_),d=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in Pi&&(_==="autoAlpha"&&(d===1&&Wi(t,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),mr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Pi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in er,E){if(this.styles.save(_),v||(A=t._gsap,A.renderTransform&&!e.parseTransform||ma(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new Cn(this._pt,a,Re,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Cn(this._pt,A,"scaleY",A.scaleY,(y?Zs(A.scaleY,y+f):f)-A.scaleY||0,Yu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Pn,0,a[Pn]),u=_E(u),A.svg?Zu(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&mr(this,A,"zOrigin",A.zOrigin,p),mr(this,a,_,Pl(c),Pl(u)));continue}else if(_==="svgOrigin"){Zu(t,u,1,w,0,this);continue}else if(_ in Hm){ME(this,A,_,d,y?Zs(d,y+u):u);continue}else if(_==="smoothOrigin"){mr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){yE(this,u,t);continue}}else _ in a||(_=fo(_)||_);if(E||(f||f===0)&&(d||d===0)&&!nE.test(u)&&_ in a)m=(c+"").substr((d+"").length),f||(f=0),p=cn(u)||(_ in $n.units?$n.units[_]:m),m!==p&&(d=Cr(t,_,c,p)),this._pt=new Cn(this._pt,E?A:a,_,d,(y?Zs(d,y+f):f)-d,!E&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?sE:Yu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=rE);else if(_ in a)mE.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Dh(_,u);continue}E||(_ in a?R.push(_,0,a[_]):R.push(_,1,c||t[_])),o.push(_)}}S&&Lm(this)},render:function(t,e){if(e.tween._time||!Hh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Wi,aliases:Pi,getSetter:function(t,e,n){var i=Pi[e];return i&&i.indexOf(",")<0&&(e=i),e in er&&e!==Pn&&(t._gsap.x||Wi(t,"x"))?n&&yd===n?e==="scale"?cE:lE:(yd=n||{})&&(e==="scale"?uE:hE):t.style&&!Rh(t.style[e])?oE:~e.indexOf("-")?aE:Bh(t,e)},core:{_removeProperty:us,_getMatrix:Gh}};Dn.utils.checkPrefix=fo;Dn.core.getStyleSaver=Om;(function(r,t,e,n){var i=Rn(r+","+t+","+e,function(s){er[s]=1});Rn(t,function(s){$n.units[s]="deg",Hm[s]=1}),Pi[i[13]]=r+","+t,Rn(n,function(s){var o=s.split(":");Pi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$n.units[r]="px"});Dn.registerPlugin(Wm);var Ni=Dn.registerPlugin(Wm)||Dn;Ni.core.Tween;function SE(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function EE(r,t,e){return t&&SE(r.prototype,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn,dl,Wn,_r,gr,Js,Xm,Xr,Ko,Ym,Zi,_i,qm,$m=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},Zm=1,Xs=[],ne=[],Ii=[],jo=Date.now,Ku=function(t,e){return e},TE=function(){var t=Ko.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,Ii),ne=n,Ii=i,Ku=function(o,a){return e[o](a)}},Er=function(t,e){return~Ii.indexOf(t)&&Ii[Ii.indexOf(t)+1][e]},Jo=function(t){return!!~Ym.indexOf(t)},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},pn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Xa="scrollLeft",Ya="scrollTop",ju=function(){return Zi&&Zi.isPressed||ne.cache++},Dl=function(t,e){var n=function i(s){if(s||s===0){Zm&&(Wn.history.scrollRestoration="manual");var o=Zi&&Zi.isPressed;s=i.v=Math.round(s)||(Zi&&Zi.iOS?1:0),t(s),i.cacheID=ne.cache,o&&Ku("ss",s)}else(e||ne.cache!==i.cacheID||Ku("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Sn={s:Xa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Dl(function(r){return arguments.length?Wn.scrollTo(r,qe.sc()):Wn.pageXOffset||_r[Xa]||gr[Xa]||Js[Xa]||0})},qe={s:Ya,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:Dl(function(r){return arguments.length?Wn.scrollTo(Sn.sc(),r):Wn.pageYOffset||_r[Ya]||gr[Ya]||Js[Ya]||0})},wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||rn.utils.toArray)(t)[0]||(typeof t=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Pr=function(t,e){var n=e.s,i=e.sc;Jo(t)&&(t=_r.scrollingElement||gr);var s=ne.indexOf(t),o=i===qe.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+o]||_n(t,"scroll",ju);var a=ne[s+o],l=a||(ne[s+o]=Dl(Er(t,n),!0)||(Jo(t)?i:Dl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=rn.getProperty(t,"scrollBehavior")==="smooth"),l},Ju=function(t,e,n){var i=t,s=t,o=jo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=jo();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=jo();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Lo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Cd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Km=function(){Ko=rn.core.globals().ScrollTrigger,Ko&&Ko.core&&TE()},jm=function(t){return rn=t||$m(),!dl&&rn&&typeof document<"u"&&document.body&&(Wn=window,_r=document,gr=_r.documentElement,Js=_r.body,Ym=[Wn,_r,gr,Js],rn.utils.clamp,qm=rn.core.context||function(){},Xr="onpointerenter"in Js?"pointer":"mouse",Xm=Fe.isTouch=Wn.matchMedia&&Wn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Wn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_i=Fe.eventTypes=("ontouchstart"in gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zm=0},500),Km(),dl=1),dl};Sn.op=qe;ne.cache=0;var Fe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){dl||jm(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Ko||Km();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,E=n.onPress,v=n.onRelease,A=n.onRight,w=n.onLeft,S=n.onUp,R=n.onDown,M=n.onChangeX,x=n.onChangeY,P=n.onChange,I=n.onToggleX,F=n.onToggleY,k=n.onHover,q=n.onHoverEnd,H=n.onMove,G=n.ignoreCheck,z=n.isNormalizer,tt=n.onGestureStart,D=n.onGestureEnd,at=n.onWheel,Ct=n.onEnable,Jt=n.onDisable,Z=n.onClick,et=n.scrollSpeed,gt=n.capture,nt=n.allowClicks,Et=n.lockAxis,wt=n.onLockAxis;this.target=a=wn(a)||gr,this.vars=n,h&&(h=rn.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Wn.getComputedStyle(Js).lineHeight)||22);var kt,Qt,Ht,Dt,U,_e,Nt,V=this,Tt=0,ie=0,At=n.passive||!u,C=Pr(a,Sn),T=Pr(a,qe),Y=C(),Q=T(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&_i[0]==="pointerdown",K=Jo(a),ht=a.ownerDocument||_r,lt=[0,0,0],pt=[0,0,0],Wt=0,it=function(){return Wt=jo()},ot=function(bt,$t){return(V.event=bt)&&h&&~h.indexOf(bt.target)||$t&&J&&bt.pointerType!=="touch"||G&&G(bt,$t)},It=function(){V._vx.reset(),V._vy.reset(),Qt.pause(),f&&f(V)},Lt=function(){var bt=V.deltaX=Cd(lt),$t=V.deltaY=Cd(pt),mt=Math.abs(bt)>=i,Vt=Math.abs($t)>=i;P&&(mt||Vt)&&P(V,bt,$t,lt,pt),mt&&(A&&V.deltaX>0&&A(V),w&&V.deltaX<0&&w(V),M&&M(V),I&&V.deltaX<0!=Tt<0&&I(V),Tt=V.deltaX,lt[0]=lt[1]=lt[2]=0),Vt&&(R&&V.deltaY>0&&R(V),S&&V.deltaY<0&&S(V),x&&x(V),F&&V.deltaY<0!=ie<0&&F(V),ie=V.deltaY,pt[0]=pt[1]=pt[2]=0),(Dt||Ht)&&(H&&H(V),Ht&&(y(V),Ht=!1),Dt=!1),_e&&!(_e=!1)&&wt&&wt(V),U&&(at(V),U=!1),kt=0},xt=function(bt,$t,mt){lt[mt]+=bt,pt[mt]+=$t,V._vx.update(bt),V._vy.update($t),c?kt||(kt=requestAnimationFrame(Lt)):Lt()},qt=function(bt,$t){Et&&!Nt&&(V.axis=Nt=Math.abs(bt)>Math.abs($t)?"x":"y",_e=!0),Nt!=="y"&&(lt[2]+=bt,V._vx.update(bt,!0)),Nt!=="x"&&(pt[2]+=$t,V._vy.update($t,!0)),c?kt||(kt=requestAnimationFrame(Lt)):Lt()},Ut=function(bt){if(!ot(bt,1)){bt=Lo(bt,u);var $t=bt.clientX,mt=bt.clientY,Vt=$t-V.x,Rt=mt-V.y,Bt=V.isDragging;V.x=$t,V.y=mt,(Bt||Math.abs(V.startX-$t)>=s||Math.abs(V.startY-mt)>=s)&&(y&&(Ht=!0),Bt||(V.isDragging=!0),qt(Vt,Rt),Bt||m&&m(V))}},oe=V.onPress=function(vt){ot(vt,1)||vt&&vt.button||(V.axis=Nt=null,Qt.pause(),V.isPressed=!0,vt=Lo(vt),Tt=ie=0,V.startX=V.x=vt.clientX,V.startY=V.y=vt.clientY,V._vx.reset(),V._vy.reset(),_n(z?a:ht,_i[1],Ut,At,!0),V.deltaX=V.deltaY=0,E&&E(V))},L=V.onRelease=function(vt){if(!ot(vt,1)){pn(z?a:ht,_i[1],Ut,!0);var bt=!isNaN(V.y-V.startY),$t=V.isDragging,mt=$t&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Vt=Lo(vt);!mt&&bt&&(V._vx.reset(),V._vy.reset(),u&&nt&&rn.delayedCall(.08,function(){if(jo()-Wt>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(ht.createEvent){var Rt=ht.createEvent("MouseEvents");Rt.initMouseEvent("click",!0,!0,Wn,1,Vt.screenX,Vt.screenY,Vt.clientX,Vt.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(Rt)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&$t&&!z&&Qt.restart(!0),p&&$t&&p(V),v&&v(V,mt)}},ut=function(bt){return bt.touches&&bt.touches.length>1&&(V.isGesturing=!0)&&tt(bt,V.isDragging)},$=function(){return(V.isGesturing=!1)||D(V)},j=function(bt){if(!ot(bt)){var $t=C(),mt=T();xt(($t-Y)*et,(mt-Q)*et,1),Y=$t,Q=mt,f&&Qt.restart(!0)}},ct=function(bt){if(!ot(bt)){bt=Lo(bt,u),at&&(U=!0);var $t=(bt.deltaMode===1?l:bt.deltaMode===2?Wn.innerHeight:1)*g;xt(bt.deltaX*$t,bt.deltaY*$t,0),f&&!z&&Qt.restart(!0)}},ft=function(bt){if(!ot(bt)){var $t=bt.clientX,mt=bt.clientY,Vt=$t-V.x,Rt=mt-V.y;V.x=$t,V.y=mt,Dt=!0,f&&Qt.restart(!0),(Vt||Rt)&&qt(Vt,Rt)}},Ft=function(bt){V.event=bt,k(V)},le=function(bt){V.event=bt,q(V)},Pe=function(bt){return ot(bt)||Lo(bt,u)&&Z(V)};Qt=V._dc=rn.delayedCall(d||.25,It).pause(),V.deltaX=V.deltaY=0,V._vx=Ju(0,50,!0),V._vy=Ju(0,50,!0),V.scrollX=C,V.scrollY=T,V.isDragging=V.isGesturing=V.isPressed=!1,qm(this),V.enable=function(vt){return V.isEnabled||(_n(K?ht:a,"scroll",ju),o.indexOf("scroll")>=0&&_n(K?ht:a,"scroll",j,At,gt),o.indexOf("wheel")>=0&&_n(a,"wheel",ct,At,gt),(o.indexOf("touch")>=0&&Xm||o.indexOf("pointer")>=0)&&(_n(a,_i[0],oe,At,gt),_n(ht,_i[2],L),_n(ht,_i[3],L),nt&&_n(a,"click",it,!0,!0),Z&&_n(a,"click",Pe),tt&&_n(ht,"gesturestart",ut),D&&_n(ht,"gestureend",$),k&&_n(a,Xr+"enter",Ft),q&&_n(a,Xr+"leave",le),H&&_n(a,Xr+"move",ft)),V.isEnabled=!0,vt&&vt.type&&oe(vt),Ct&&Ct(V)),V},V.disable=function(){V.isEnabled&&(Xs.filter(function(vt){return vt!==V&&Jo(vt.target)}).length||pn(K?ht:a,"scroll",ju),V.isPressed&&(V._vx.reset(),V._vy.reset(),pn(z?a:ht,_i[1],Ut,!0)),pn(K?ht:a,"scroll",j,gt),pn(a,"wheel",ct,gt),pn(a,_i[0],oe,gt),pn(ht,_i[2],L),pn(ht,_i[3],L),pn(a,"click",it,!0),pn(a,"click",Pe),pn(ht,"gesturestart",ut),pn(ht,"gestureend",$),pn(a,Xr+"enter",Ft),pn(a,Xr+"leave",le),pn(a,Xr+"move",ft),V.isEnabled=V.isPressed=V.isDragging=!1,Jt&&Jt(V))},V.kill=V.revert=function(){V.disable();var vt=Xs.indexOf(V);vt>=0&&Xs.splice(vt,1),Zi===V&&(Zi=0)},Xs.push(V),z&&Jo(a)&&(Zi=V),V.enable(_)},EE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Fe.version="3.12.5";Fe.create=function(r){return new Fe(r)};Fe.register=jm;Fe.getAll=function(){return Xs.slice()};Fe.getById=function(r){return Xs.filter(function(t){return t.vars.id===r})[0]};$m()&&rn.registerPlugin(Fe);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yt,ks,re,we,gi,Te,Jm,Ll,_a,Qo,ko,qa,an,Zl,Qu,xn,Pd,Dd,Hs,Qm,Fc,t_,vn,th,e_,n_,hr,eh,Wh,Qs,Xh,Il,nh,Oc,$a=1,ln=Date.now,Bc=ln(),li=0,Ho=0,Ld=function(t,e,n){var i=Bn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Id=function(t,e){return e&&(!Bn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},bE=function r(){return Ho&&requestAnimationFrame(r)},Ud=function(){return Zl=1},Nd=function(){return Zl=0},wi=function(t){return t},Vo=function(t){return Math.round(t*1e5)/1e5||0},i_=function(){return typeof window<"u"},r_=function(){return yt||i_()&&(yt=window.gsap)&&yt.registerPlugin&&yt},hs=function(t){return!!~Jm.indexOf(t)},s_=function(t){return(t==="Height"?Xh:re["inner"+t])||gi["client"+t]||Te["client"+t]},o_=function(t){return Er(t,"getBoundingClientRect")||(hs(t)?function(){return vl.width=re.innerWidth,vl.height=Xh,vl}:function(){return qi(t)})},wE=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Er(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?s_(s):t["client"+s])||0}},AE=function(t,e){return!e||~Ii.indexOf(t)?o_(t):function(){return vl}},Di=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Er(t,n))?o()-o_(t)()[s]:hs(t)?(gi[n]||Te[n])-s_(i):t[n]-t["offset"+i])},Za=function(t,e){for(var n=0;n<Hs.length;n+=3)(!e||~e.indexOf(Hs[n+1]))&&t(Hs[n],Hs[n+1],Hs[n+2])},Bn=function(t){return typeof t=="string"},En=function(t){return typeof t=="function"},Go=function(t){return typeof t=="number"},Yr=function(t){return typeof t=="object"},Io=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},zc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Us=Math.abs,a_="left",l_="top",Yh="right",qh="bottom",rs="width",ss="height",ta="Right",ea="Left",na="Top",ia="Bottom",ze="padding",ni="margin",po="Width",$h="Height",Xe="px",ii=function(t){return re.getComputedStyle(t)},RE=function(t){var e=ii(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Fd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},qi=function(t,e){var n=e&&ii(t)[Qu]!=="matrix(1, 0, 0, 1, 0, 0)"&&yt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ul=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},c_=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},CE=function(t){return function(e){return yt.utils.snap(c_(t),e)}},Zh=function(t){var e=yt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},PE=function(t){return function(e,n){return Zh(c_(t))(e,n.direction)}},Ka=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Je=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ja=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Od={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ja={toggleActions:"play",anticipatePin:0},Nl={top:0,left:0,center:.5,bottom:1,right:1},pl=function(t,e){if(Bn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Nl?Nl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Qa=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=we.createElement("div"),_=hs(n)||Er(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?Te:n,y=t.indexOf("start")!==-1,E=y?c:u,v="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===qe?Yh:qh)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],ml(g,0,i,y),g},ml=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+po]=1,s["border"+a+po]=0,s[n.p]=e+"px",yt.set(t,s)},ee=[],ih={},ga,Bd=function(){return ln()-li>34&&(ga||(ga=requestAnimationFrame(Ji)))},Ns=function(){(!vn||!vn.isPressed||vn.startX>Te.clientWidth)&&(ne.cache++,vn?ga||(ga=requestAnimationFrame(Ji)):Ji(),li||ds("scrollStart"),li=ln())},kc=function(){n_=re.innerWidth,e_=re.innerHeight},Wo=function(){ne.cache++,!an&&!t_&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!th||n_!==re.innerWidth||Math.abs(re.innerHeight-e_)>re.innerHeight*.25)&&Ll.restart(!0)},fs={},DE=[],u_=function r(){return je(Kt,"scrollEnd",r)||Jr(!0)},ds=function(t){return fs[t]&&fs[t].map(function(e){return e()})||DE},On=[],h_=function(t){for(var e=0;e<On.length;e+=5)(!t||On[e+4]&&On[e+4].query===t)&&(On[e].style.cssText=On[e+1],On[e].getBBox&&On[e].setAttribute("transform",On[e+2]||""),On[e+3].uncache=1)},Kh=function(t,e){var n;for(xn=0;xn<ee.length;xn++)n=ee[xn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Il=!0,e&&h_(e),e||ds("revert")},f_=function(t,e){ne.cache++,(e||!Mn)&&ne.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),Bn(t)&&(re.history.scrollRestoration=Wh=t)},Mn,os=0,zd,LE=function(){if(zd!==os){var t=zd=os;requestAnimationFrame(function(){return t===os&&Jr(!0)})}},d_=function(){Te.appendChild(Qs),Xh=!vn&&Qs.offsetHeight||re.innerHeight,Te.removeChild(Qs)},kd=function(t){return _a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Jr=function(t,e){if(li&&!t&&!Il){Je(Kt,"scrollEnd",u_);return}d_(),Mn=Kt.isRefreshing=!0,ne.forEach(function(i){return En(i)&&++i.cacheID&&(i.rec=i())});var n=ds("refreshInit");Qm&&Kt.sort(),e||Kh(),ne.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),Il=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),nh=1,kd(!0),ee.forEach(function(i){var s=Di(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),kd(!1),nh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),f_(Wh,1),Ll.pause(),os++,Mn=2,Ji(2),ee.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Mn=Kt.isRefreshing=!1,ds("refresh")},rh=0,_l=1,ra,Ji=function(t){if(t===2||!Mn&&!Il){Kt.isUpdating=!0,ra&&ra.update(0);var e=ee.length,n=ln(),i=n-Bc>=50,s=e&&ee[0].scroll();if(_l=rh>s?-1:1,Mn||(rh=s),i&&(li&&!Zl&&n-li>200&&(li=0,ds("scrollEnd")),ko=Bc,Bc=n),_l<0){for(xn=e;xn-- >0;)ee[xn]&&ee[xn].update(0,i);_l=1}else for(xn=0;xn<e;xn++)ee[xn]&&ee[xn].update(0,i);Kt.isUpdating=!1}ga=0},sh=[a_,l_,qh,Yh,ni+ia,ni+ta,ni+na,ni+ea,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gl=sh.concat([rs,ss,"boxSizing","max"+po,"max"+$h,"position",ni,ze,ze+na,ze+ta,ze+ia,ze+ea]),IE=function(t,e,n){to(n);var i=t._gsap;if(i.spacerIsNative)to(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Hc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=sh.length,o=e.style,a=t.style,l;s--;)l=sh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[qh]=a[Yh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[rs]=Ul(t,Sn)+Xe,o[ss]=Ul(t,qe)+Xe,o[ze]=a[ni]=a[l_]=a[a_]="0",to(i),a[rs]=a["max"+po]=n[rs],a[ss]=a["max"+$h]=n[ss],a[ze]=n[ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},UE=/([A-Z])/g,to=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||yt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(UE,"-$1").toLowerCase())}},tl=function(t){for(var e=gl.length,n=t.style,i=[],s=0;s<e;s++)i.push(gl[s],n[gl[s]]);return i.t=t,i},NE=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},vl={left:0,top:0},Hd=function(t,e,n,i,s,o,a,l,c,u,f,d,h,g){En(t)&&(t=t(l)),Bn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?pl("0"+t.substr(3),n):0));var _=h?h.time():0,m,p,y;if(h&&h.seek(0),isNaN(t)||(t=+t),Go(t))h&&(t=yt.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,t)),a&&ml(a,n,i,!0);else{En(e)&&(e=e(l));var E=(t||"0").split(" "),v,A,w,S;y=wn(e,l)||Te,v=qi(y)||{},(!v||!v.left&&!v.top)&&ii(y).display==="none"&&(S=y.style.display,y.style.display="block",v=qi(y),S?y.style.display=S:y.style.removeProperty("display")),A=pl(E[0],v[i.d]),w=pl(E[1]||"0",n),t=v[i.p]-c[i.p]-u+A+s-w,a&&ml(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var R=t+n,M=o._isStart;m="scroll"+i.d2,ml(o,R,i,M&&R>20||!M&&(f?Math.max(Te[m],gi[m]):o.parentNode[m])<=R+1),f&&(c=qi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xe))}return h&&y&&(m=qi(y),h.seek(d),p=qi(y),h._caScrollDist=m[i.p]-p[i.p],t=t/h._caScrollDist*d),h&&h.seek(_),h?t:Math.round(t)},FE=/(webkit|moz|length|cssText|inset)/i,Vd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Te){t._stOrig=s.cssText,a=ii(t);for(o in a)!+o&&!FE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;yt.core.getCache(t).uncache=1,e.appendChild(t)}},p_=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},el=function(t,e,n){var i={};i[e.p]="+="+n,yt.set(t,i)},Gd=function(t,e){var n=Pr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,g={};c=c||n();var _=p_(n,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){ne.cache++,o.tween&&Ji()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=yt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Je(t,"wheel",n.wheelHandler),Kt.isTouch&&Je(t,"touchmove",n.wheelHandler),s},Kt=function(){function r(e,n){ks||r.register(yt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),eh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ho){this.update=this.refresh=this.kill=wi;return}n=Fd(Bn(n)||Go(n)||n.nodeType?{trigger:n}:n,Ja);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,E=s.once,v=s.snap,A=s.pinReparent,w=s.pinSpacer,S=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:qe,P=!f&&f!==0,I=wn(n.scroller||re),F=yt.core.getCache(I),k=hs(I),q=("pinType"in n?n.pinType:Er(I,"pinType")||k&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=P&&n.toggleActions.split(" "),z="markers"in n?n.markers:Ja.markers,tt=k?0:parseFloat(ii(I)["border"+x.p2+po])||0,D=this,at=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ct=wE(I,k,x),Jt=AE(I,k),Z=0,et=0,gt=0,nt=Pr(I,x),Et,wt,kt,Qt,Ht,Dt,U,_e,Nt,V,Tt,ie,At,C,T,Y,Q,J,K,ht,lt,pt,Wt,it,ot,It,Lt,xt,qt,Ut,oe,L,ut,$,j,ct,ft,Ft,le;if(D._startClamp=D._endClamp=!1,D._dir=x,m*=45,D.scroller=I,D.scroll=S?S.time.bind(S):nt,Qt=nt(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Qm=1,n.refreshPriority===-9999&&(ra=D)),F.tweenScroll=F.tweenScroll||{top:Gd(I,qe),left:Gd(I,Sn)},D.tweenTo=Et=F.tweenScroll[x.p],D.scrubDuration=function(mt){ut=Go(mt)&&mt,ut?L?L.duration(mt):L=yt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ut,paused:!0,onComplete:function(){return p&&p(D)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(f),Ut=0,l||(l=i.vars.id)),v&&((!Yr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Te.style&&yt.set(k?[Te,gi]:I,{scrollBehavior:"auto"}),ne.forEach(function(mt){return En(mt)&&mt.target===(k?we.scrollingElement||gi:I)&&(mt.smooth=!1)}),kt=En(v.snapTo)?v.snapTo:v.snapTo==="labels"?CE(i):v.snapTo==="labelsDirectional"?PE(i):v.directional!==!1?function(mt,Vt){return Zh(v.snapTo)(mt,ln()-et<500?0:Vt.direction)}:yt.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=Yr($)?Qo($.min,$.max):Qo($,$),j=yt.delayedCall(v.delay||ut/2||.1,function(){var mt=nt(),Vt=ln()-et<500,Rt=Et.tween;if((Vt||Math.abs(D.getVelocity())<10)&&!Rt&&!Zl&&Z!==mt){var Bt=(mt-Dt)/C,Ue=i&&!P?i.totalProgress():Bt,te=Vt?0:(Ue-oe)/(ln()-ko)*1e3||0,Me=yt.utils.clamp(-Bt,1-Bt,Us(te/2)*te/.185),Ge=Bt+(v.inertia===!1?0:Me),ge,ve,ue=v,Ln=ue.onStart,Se=ue.onInterrupt,dn=ue.onComplete;if(ge=kt(Ge,D),Go(ge)||(ge=Ge),ve=Math.round(Dt+ge*C),mt<=U&&mt>=Dt&&ve!==mt){if(Rt&&!Rt._initted&&Rt.data<=Us(ve-mt))return;v.inertia===!1&&(Me=ge-Bt),Et(ve,{duration:$(Us(Math.max(Us(Ge-Ue),Us(ge-Ue))*.185/te/.05||0)),ease:v.ease||"power3",data:Us(ve-mt),onInterrupt:function(){return j.restart(!0)&&Se&&Se(D)},onComplete:function(){D.update(),Z=nt(),i&&(L?L.resetTo("totalProgress",ge,i._tTime/i._tDur):i.progress(ge)),Ut=oe=i&&!P?i.totalProgress():D.progress,y&&y(D),dn&&dn(D)}},mt,Me*C,ve-mt-Me*C),Ln&&Ln(D,Et.tween)}}else D.isActive&&Z!==mt&&j.restart(!0)}).pause()),l&&(ih[l]=D),d=D.trigger=wn(d||h!==!0&&h),le=d&&d._gsap&&d._gsap.stRevert,le&&(le=le(D)),h=h===!0?d:wn(h),Bn(a)&&(a={targets:d,className:a}),h&&(g===!1||g===ni||(g=!g&&h.parentNode&&h.parentNode.style&&ii(h.parentNode).display==="flex"?!1:ze),D.pin=h,wt=yt.core.getCache(h),wt.spacer?T=wt.pinState:(w&&(w=wn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),wt.spacerIsNative=!!w,w&&(wt.spacerState=tl(w))),wt.spacer=J=w||we.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),wt.pinState=T=tl(h)),n.force3D!==!1&&yt.set(h,{force3D:!0}),D.spacer=J=wt.spacer,qt=ii(h),it=qt[g+x.os2],ht=yt.getProperty(h),lt=yt.quickSetter(h,x.a,Xe),Hc(h,J,qt),Q=tl(h)),z){ie=Yr(z)?Fd(z,Od):Od,V=Qa("scroller-start",l,I,x,ie,0),Tt=Qa("scroller-end",l,I,x,ie,0,V),K=V["offset"+x.op.d2];var Pe=wn(Er(I,"content")||I);_e=this.markerStart=Qa("start",l,Pe,x,ie,K,0,S),Nt=this.markerEnd=Qa("end",l,Pe,x,ie,K,0,S),S&&(Ft=yt.quickSetter([_e,Nt],x.a,Xe)),!q&&!(Ii.length&&Er(I,"fixedMarkers")===!0)&&(RE(k?Te:I),yt.set([V,Tt],{force3D:!0}),It=yt.quickSetter(V,x.a,Xe),xt=yt.quickSetter(Tt,x.a,Xe))}if(S){var vt=S.vars.onUpdate,bt=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){D.update(0,0,1),vt&&vt.apply(S,bt||[])})}if(D.previous=function(){return ee[ee.indexOf(D)-1]},D.next=function(){return ee[ee.indexOf(D)+1]},D.revert=function(mt,Vt){if(!Vt)return D.kill(!0);var Rt=mt!==!1||!D.enabled,Bt=an;Rt!==D.isReverted&&(Rt&&(ct=Math.max(nt(),D.scroll.rec||0),gt=D.progress,ft=i&&i.progress()),_e&&[_e,Nt,V,Tt].forEach(function(Ue){return Ue.style.display=Rt?"none":"block"}),Rt&&(an=D,D.update(Rt)),h&&(!A||!D.isActive)&&(Rt?IE(h,J,T):Hc(h,J,ii(h),ot)),Rt||D.update(Rt),an=Bt,D.isReverted=Rt)},D.refresh=function(mt,Vt,Rt,Bt){if(!((an||!D.enabled)&&!Vt)){if(h&&mt&&li){Je(r,"scrollEnd",u_);return}!Mn&&at&&at(D),an=D,Et.tween&&!Rt&&(Et.tween.kill(),Et.tween=0),L&&L.pause(),_&&i&&i.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Ue=Ct(),te=Jt(),Me=S?S.duration():Di(I,x),Ge=C<=.01,ge=0,ve=Bt||0,ue=Yr(Rt)?Rt.end:n.end,Ln=n.endTrigger||d,Se=Yr(Rt)?Rt.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),dn=D.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,D),b=d&&Math.max(0,ee.indexOf(D))||0,N=b,W,X,O,rt,st,dt,Mt,Ot,Gt,St,Xt,ce,he;for(z&&Yr(Rt)&&(ce=yt.getProperty(V,x.p),he=yt.getProperty(Tt,x.p));N--;)dt=ee[N],dt.end||dt.refresh(0,1)||(an=D),Mt=dt.pin,Mt&&(Mt===d||Mt===h||Mt===dn)&&!dt.isReverted&&(St||(St=[]),St.unshift(dt),dt.revert(!0,!0)),dt!==ee[N]&&(b--,N--);for(En(Se)&&(Se=Se(D)),Se=Ld(Se,"start",D),Dt=Hd(Se,d,Ue,x,nt(),_e,V,D,te,tt,q,Me,S,D._startClamp&&"_startClamp")||(h?-.001:0),En(ue)&&(ue=ue(D)),Bn(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(Bn(Se)?Se.split(" ")[0]:"")+ue:(ge=pl(ue.substr(2),Ue),ue=Bn(Se)?Se:(S?yt.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,Dt):Dt)+ge,Ln=d)),ue=Ld(ue,"end",D),U=Math.max(Dt,Hd(ue||(Ln?"100% 0":Me),Ln,Ue,x,nt()+ge,Nt,Tt,D,te,tt,q,Me,S,D._endClamp&&"_endClamp"))||-.001,ge=0,N=b;N--;)dt=ee[N],Mt=dt.pin,Mt&&dt.start-dt._pinPush<=Dt&&!S&&dt.end>0&&(W=dt.end-(D._startClamp?Math.max(0,dt.start):dt.start),(Mt===d&&dt.start-dt._pinPush<Dt||Mt===dn)&&isNaN(Se)&&(ge+=W*(1-dt.progress)),Mt===h&&(ve+=W));if(Dt+=ge,U+=ge,D._startClamp&&(D._startClamp+=ge),D._endClamp&&!Mn&&(D._endClamp=U||-.001,U=Math.min(U,Di(I,x))),C=U-Dt||(Dt-=.01)&&.001,Ge&&(gt=yt.utils.clamp(0,1,yt.utils.normalize(Dt,U,ct))),D._pinPush=ve,_e&&ge&&(W={},W[x.a]="+="+ge,dn&&(W[x.p]="-="+nt()),yt.set([_e,Nt],W)),h&&!(nh&&D.end>=Di(I,x)))W=ii(h),rt=x===qe,O=nt(),pt=parseFloat(ht(x.a))+ve,!Me&&U>1&&(Xt=(k?we.scrollingElement||gi:I).style,Xt={style:Xt,value:Xt["overflow"+x.a.toUpperCase()]},k&&ii(Te)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Xt.style["overflow"+x.a.toUpperCase()]="scroll")),Hc(h,J,W),Q=tl(h),X=qi(h,!0),Ot=q&&Pr(I,rt?Sn:qe)(),g?(ot=[g+x.os2,C+ve+Xe],ot.t=J,N=g===ze?Ul(h,x)+C+ve:0,N&&(ot.push(x.d,N+Xe),J.style.flexBasis!=="auto"&&(J.style.flexBasis=N+Xe)),to(ot),dn&&ee.forEach(function(Oe){Oe.pin===dn&&Oe.vars.pinSpacing!==!1&&(Oe._subPinOffset=!0)}),q&&nt(ct)):(N=Ul(h,x),N&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=N+Xe)),q&&(st={top:X.top+(rt?O-Dt:Ot)+Xe,left:X.left+(rt?Ot:O-Dt)+Xe,boxSizing:"border-box",position:"fixed"},st[rs]=st["max"+po]=Math.ceil(X.width)+Xe,st[ss]=st["max"+$h]=Math.ceil(X.height)+Xe,st[ni]=st[ni+na]=st[ni+ta]=st[ni+ia]=st[ni+ea]="0",st[ze]=W[ze],st[ze+na]=W[ze+na],st[ze+ta]=W[ze+ta],st[ze+ia]=W[ze+ia],st[ze+ea]=W[ze+ea],Y=NE(T,st,A),Mn&&nt(0)),i?(Gt=i._initted,Fc(1),i.render(i.duration(),!0,!0),Wt=ht(x.a)-pt+C+ve,Lt=Math.abs(C-Wt)>1,q&&Lt&&Y.splice(Y.length-2,2),i.render(0,!0,!0),Gt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Fc(0)):Wt=C,Xt&&(Xt.value?Xt.style["overflow"+x.a.toUpperCase()]=Xt.value:Xt.style.removeProperty("overflow-"+x.a));else if(d&&nt()&&!S)for(X=d.parentNode;X&&X!==Te;)X._pinOffset&&(Dt-=X._pinOffset,U-=X._pinOffset),X=X.parentNode;St&&St.forEach(function(Oe){return Oe.revert(!1,!0)}),D.start=Dt,D.end=U,Qt=Ht=Mn?ct:nt(),!S&&!Mn&&(Qt<ct&&nt(ct),D.scroll.rec=0),D.revert(!1,!0),et=ln(),j&&(Z=-1,j.restart(!0)),an=0,i&&P&&(i._initted||ft)&&i.progress()!==ft&&i.progress(ft||0,!0).render(i.time(),!0,!0),(Ge||gt!==D.progress||S||_)&&(i&&!P&&i.totalProgress(S&&Dt<-.001&&!gt?yt.utils.normalize(Dt,U,0):gt,!0),D.progress=Ge||(Qt-Dt)/C===gt?0:gt),h&&g&&(J._pinOffset=Math.round(D.progress*Wt)),L&&L.invalidate(),isNaN(ce)||(ce-=yt.getProperty(V,x.p),he-=yt.getProperty(Tt,x.p),el(V,x,ce),el(_e,x,ce-(Bt||0)),el(Tt,x,he),el(Nt,x,he-(Bt||0))),Ge&&!Mn&&D.update(),u&&!Mn&&!At&&(At=!0,u(D),At=!1)}},D.getVelocity=function(){return(nt()-Ht)/(ln()-ko)*1e3||0},D.endAnimation=function(){Io(D.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||Io(i,D.direction<0,1):Io(i,i.reversed()))},D.labelToScroll=function(mt){return i&&i.labels&&(Dt||D.refresh()||Dt)+i.labels[mt]/i.duration()*C||0},D.getTrailing=function(mt){var Vt=ee.indexOf(D),Rt=D.direction>0?ee.slice(0,Vt).reverse():ee.slice(Vt+1);return(Bn(mt)?Rt.filter(function(Bt){return Bt.vars.preventOverlaps===mt}):Rt).filter(function(Bt){return D.direction>0?Bt.end<=Dt:Bt.start>=U})},D.update=function(mt,Vt,Rt){if(!(S&&!Rt&&!mt)){var Bt=Mn===!0?ct:D.scroll(),Ue=mt?0:(Bt-Dt)/C,te=Ue<0?0:Ue>1?1:Ue||0,Me=D.progress,Ge,ge,ve,ue,Ln,Se,dn,b;if(Vt&&(Ht=Qt,Qt=S?nt():Bt,v&&(oe=Ut,Ut=i&&!P?i.totalProgress():te)),m&&h&&!an&&!$a&&li&&(!te&&Dt<Bt+(Bt-Ht)/(ln()-ko)*m?te=1e-4:te===1&&U>Bt+(Bt-Ht)/(ln()-ko)*m&&(te=.9999)),te!==Me&&D.enabled){if(Ge=D.isActive=!!te&&te<1,ge=!!Me&&Me<1,Se=Ge!==ge,Ln=Se||!!te!=!!Me,D.direction=te>Me?1:-1,D.progress=te,Ln&&!an&&(ve=te&&!Me?0:te===1?1:Me===1?2:3,P&&(ue=!Se&&G[ve+1]!=="none"&&G[ve+1]||G[ve],b=i&&(ue==="complete"||ue==="reset"||ue in i))),M&&(Se||b)&&(b||f||!i)&&(En(M)?M(D):D.getTrailing(M).forEach(function(O){return O.endAnimation()})),P||(L&&!an&&!$a?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",te,i._tTime/i._tDur):(L.vars.totalProgress=te,L.invalidate().restart())):i&&i.totalProgress(te,!!(an&&(et||mt)))),h){if(mt&&g&&(J.style[g+x.os2]=it),!q)lt(Vo(pt+Wt*te));else if(Ln){if(dn=!mt&&te>Me&&U+1>Bt&&Bt+1>=Di(I,x),A)if(!mt&&(Ge||dn)){var N=qi(h,!0),W=Bt-Dt;Vd(h,Te,N.top+(x===qe?W:0)+Xe,N.left+(x===qe?0:W)+Xe)}else Vd(h,J);to(Ge||dn?Y:Q),Lt&&te<1&&Ge||lt(pt+(te===1&&!dn?Wt:0))}}v&&!Et.tween&&!an&&!$a&&j.restart(!0),a&&(Se||E&&te&&(te<1||!Oc))&&_a(a.targets).forEach(function(O){return O.classList[Ge||E?"add":"remove"](a.className)}),o&&!P&&!mt&&o(D),Ln&&!an?(P&&(b&&(ue==="complete"?i.pause().totalProgress(1):ue==="reset"?i.restart(!0).pause():ue==="restart"?i.restart(!0):i[ue]()),o&&o(D)),(Se||!Oc)&&(c&&Se&&zc(D,c),H[ve]&&zc(D,H[ve]),E&&(te===1?D.kill(!1,1):H[ve]=0),Se||(ve=te===1?1:3,H[ve]&&zc(D,H[ve]))),R&&!Ge&&Math.abs(D.getVelocity())>(Go(R)?R:2500)&&(Io(D.callbackAnimation),L?L.progress(1):Io(i,ue==="reverse"?1:!te,1))):P&&o&&!an&&o(D)}if(xt){var X=S?Bt/S.duration()*(S._caScrollDist||0):Bt;It(X+(V._isFlipped?1:0)),xt(X)}Ft&&Ft(-Bt/S.duration()*(S._caScrollDist||0))}},D.enable=function(mt,Vt){D.enabled||(D.enabled=!0,Je(I,"resize",Wo),k||Je(I,"scroll",Ns),at&&Je(r,"refreshInit",at),mt!==!1&&(D.progress=gt=0,Qt=Ht=Z=nt()),Vt!==!1&&D.refresh())},D.getTween=function(mt){return mt&&Et?Et.tween:L},D.setPositions=function(mt,Vt,Rt,Bt){if(S){var Ue=S.scrollTrigger,te=S.duration(),Me=Ue.end-Ue.start;mt=Ue.start+Me*mt/te,Vt=Ue.start+Me*Vt/te}D.refresh(!1,!1,{start:Id(mt,Rt&&!!D._startClamp),end:Id(Vt,Rt&&!!D._endClamp)},Bt),D.update()},D.adjustPinSpacing=function(mt){if(ot&&mt){var Vt=ot.indexOf(x.d)+1;ot[Vt]=parseFloat(ot[Vt])+mt+Xe,ot[1]=parseFloat(ot[1])+mt+Xe,to(ot)}},D.disable=function(mt,Vt){if(D.enabled&&(mt!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Vt||L&&L.pause(),ct=0,wt&&(wt.uncache=1),at&&je(r,"refreshInit",at),j&&(j.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!k)){for(var Rt=ee.length;Rt--;)if(ee[Rt].scroller===I&&ee[Rt]!==D)return;je(I,"resize",Wo),k||je(I,"scroll",Ns)}},D.kill=function(mt,Vt){D.disable(mt,Vt),L&&!Vt&&L.kill(),l&&delete ih[l];var Rt=ee.indexOf(D);Rt>=0&&ee.splice(Rt,1),Rt===xn&&_l>0&&xn--,Rt=0,ee.forEach(function(Bt){return Bt.scroller===D.scroller&&(Rt=1)}),Rt||Mn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Vt||i.kill()),_e&&[_e,Nt,V,Tt].forEach(function(Bt){return Bt.parentNode&&Bt.parentNode.removeChild(Bt)}),ra===D&&(ra=0),h&&(wt&&(wt.uncache=1),Rt=0,ee.forEach(function(Bt){return Bt.pin===h&&Rt++}),Rt||(wt.spacer=0)),n.onKill&&n.onKill(D)},ee.push(D),D.enable(!1,!1),le&&le(D),i&&i.add&&!C){var $t=D.update;D.update=function(){D.update=$t,Dt||U||D.refresh()},yt.delayedCall(.01,D.update),C=.01,Dt=U=0}else D.refresh();h&&LE()},r.register=function(n){return ks||(yt=n||r_(),i_()&&window.document&&r.enable(),ks=Ho),ks},r.defaults=function(n){if(n)for(var i in n)Ja[i]=n[i];return Ja},r.disable=function(n,i){Ho=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),je(re,"wheel",Ns),je(we,"scroll",Ns),clearInterval(qa),je(we,"touchcancel",wi),je(Te,"touchstart",wi),Ka(je,we,"pointerdown,touchstart,mousedown",Ud),Ka(je,we,"pointerup,touchend,mouseup",Nd),Ll.kill(),Za(je);for(var s=0;s<ne.length;s+=3)ja(je,ne[s],ne[s+1]),ja(je,ne[s],ne[s+2])},r.enable=function(){if(re=window,we=document,gi=we.documentElement,Te=we.body,yt&&(_a=yt.utils.toArray,Qo=yt.utils.clamp,eh=yt.core.context||wi,Fc=yt.core.suppressOverwrites||wi,Wh=re.history.scrollRestoration||"auto",rh=re.pageYOffset,yt.core.globals("ScrollTrigger",r),Te)){Ho=1,Qs=document.createElement("div"),Qs.style.height="100vh",Qs.style.position="absolute",d_(),bE(),Fe.register(yt),r.isTouch=Fe.isTouch,hr=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),th=Fe.isTouch===1,Je(re,"wheel",Ns),Jm=[re,we,gi,Te],yt.matchMedia?(r.matchMedia=function(l){var c=yt.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},yt.addEventListener("matchMediaInit",function(){return Kh()}),yt.addEventListener("matchMediaRevert",function(){return h_()}),yt.addEventListener("matchMedia",function(){Jr(0,1),ds("matchMedia")}),yt.matchMedia("(orientation: portrait)",function(){return kc(),kc})):console.warn("Requires GSAP 3.11.0 or later"),kc(),Je(we,"scroll",Ns);var n=Te.style,i=n.borderTopStyle,s=yt.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=qi(Te),qe.m=Math.round(o.top+qe.sc())||0,Sn.m=Math.round(o.left+Sn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),qa=setInterval(Bd,250),yt.delayedCall(.5,function(){return $a=0}),Je(we,"touchcancel",wi),Je(Te,"touchstart",wi),Ka(Je,we,"pointerdown,touchstart,mousedown",Ud),Ka(Je,we,"pointerup,touchend,mouseup",Nd),Qu=yt.utils.checkPrefix("transform"),gl.push(Qu),ks=ln(),Ll=yt.delayedCall(.2,Jr).pause(),Hs=[we,"visibilitychange",function(){var l=re.innerWidth,c=re.innerHeight;we.hidden?(Pd=l,Dd=c):(Pd!==l||Dd!==c)&&Wo()},we,"DOMContentLoaded",Jr,re,"load",Jr,re,"resize",Wo],Za(Je),ee.forEach(function(l){return l.enable(0,1)}),a=0;a<ne.length;a+=3)ja(je,ne[a],ne[a+1]),ja(je,ne[a],ne[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Oc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(qa)||(qa=i)&&setInterval(Bd,i),"ignoreMobileResize"in n&&(th=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Za(je)||Za(Je,n.autoRefreshEvents||"none"),t_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),o=ne.indexOf(s),a=hs(s);~o&&ne.splice(o,a?6:2),i&&(a?Ii.unshift(re,i,Te,i,gi,i):Ii.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Bn(n)?wn(n):n).getBoundingClientRect(),a=o[s?rs:ss]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=wn(n));var o=n.getBoundingClientRect(),a=o[s?rs:ss],l=i==null?a/2:i in Nl?Nl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=fs.killAll||[];fs={},i.forEach(function(s){return s()})}},r}();Kt.version="3.12.5";Kt.saveStyles=function(r){return r?_a(r).forEach(function(t){if(t&&t.style){var e=On.indexOf(t);e>=0&&On.splice(e,5),On.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),yt.core.getCache(t),eh())}}):On};Kt.revert=function(r,t){return Kh(!r,t)};Kt.create=function(r,t){return new Kt(r,t)};Kt.refresh=function(r){return r?Wo():(ks||Kt.register())&&Jr(!0)};Kt.update=function(r){return++ne.cache&&Ji(r===!0?2:0)};Kt.clearScrollMemory=f_;Kt.maxScroll=function(r,t){return Di(r,t?Sn:qe)};Kt.getScrollFunc=function(r,t){return Pr(wn(r),t?Sn:qe)};Kt.getById=function(r){return ih[r]};Kt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Kt.isScrolling=function(){return!!li};Kt.snapDirectional=Zh;Kt.addEventListener=function(r,t){var e=fs[r]||(fs[r]=[]);~e.indexOf(t)||e.push(t)};Kt.removeEventListener=function(r,t){var e=fs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Kt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var f=[],d=[],h=yt.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&En(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return En(s)&&(s=s(),Je(Kt,"refresh",function(){return s=t.batchMax()})),_a(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Kt.create(c))}),e};var Wd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Vc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Fe.isTouch?" pinch-zoom":""):"none",t===gi&&r(Te,e)},nl={auto:1,scroll:1},OE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||yt.core.getCache(s),a=ln(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(nl[(l=ii(s)).overflowY]||nl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!hs(s)&&(nl[(l=ii(s)).overflowY]||nl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},m_=function(t,e,n,i){return Fe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&OE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Je(we,Fe.eventTypes[0],Yd,!1,!0)},onDisable:function(){return je(we,Fe.eventTypes[0],Yd,!0)}})},BE=/(input|label|select|textarea)/i,Xd,Yd=function(t){var e=BE.test(t.target.tagName);(e||Xd)&&(t._gsapAllow=!0,Xd=e)},zE=function(t){Yr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=wn(t.target)||gi,u=yt.core.globals().ScrollSmoother,f=u&&u.get(),d=hr&&(t.content&&wn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),h=Pr(c,qe),g=Pr(c,Sn),_=1,m=(Fe.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,p=0,y=En(i)?function(){return i(a)}:function(){return i||2.8},E,v,A=m_(c,t.type,!0,s),w=function(){return v=!1},S=wi,R=wi,M=function(){l=Di(c,qe),R=Qo(hr?1:0,l),n&&(S=Qo(0,Di(c,Sn))),E=os},x=function(){d._gsap.y=Vo(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},P=function(){if(v){requestAnimationFrame(w);var z=Vo(a.deltaY/2),tt=R(h.v-z);if(d&&tt!==h.v+h.offset){h.offset=tt-h.v;var D=Vo((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",h.cacheID=ne.cache,Ji()}return!0}h.offset&&x(),v=!0},I,F,k,q,H=function(){M(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return d&&yt.set(d,{y:"+=0"}),t.ignoreCheck=function(G){return hr&&G.type==="touchmove"&&P()||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},t.onPress=function(){v=!1;var G=_;_=Vo((re.visualViewport&&re.visualViewport.scale||1)/m),I.pause(),G!==_&&Vc(c,_>1.01?!0:n?!1:"x"),F=g(),k=h(),M(),E=os},t.onRelease=t.onGestureStart=function(G,z){if(h.offset&&x(),!z)q.restart(!0);else{ne.cache++;var tt=y(),D,at;n&&(D=g(),at=D+tt*.05*-G.velocityX/.227,tt*=Wd(g,D,at,Di(c,Sn)),I.vars.scrollX=S(at)),D=h(),at=D+tt*.05*-G.velocityY/.227,tt*=Wd(h,D,at,Di(c,qe)),I.vars.scrollY=R(at),I.invalidate().duration(tt).play(.01),(hr&&I.vars.scrollY>=l||D>=l-1)&&yt.to({},{onUpdate:H,duration:tt})}o&&o(G)},t.onWheel=function(){I._ts&&I.pause(),ln()-p>1e3&&(E=0,p=ln())},t.onChange=function(G,z,tt,D,at){if(os!==E&&M(),z&&n&&g(S(D[2]===z?F+(G.startX-G.x):g()+z-D[1])),tt){h.offset&&x();var Ct=at[2]===tt,Jt=Ct?k+G.startY-G.y:h()+tt-at[1],Z=R(Jt);Ct&&Jt!==Z&&(k+=Z-Jt),h(Z)}(tt||z)&&Ji()},t.onEnable=function(){Vc(c,n?!1:"x"),Kt.addEventListener("refresh",H),Je(re,"resize",H),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),A.enable()},t.onDisable=function(){Vc(c,!0),je(re,"resize",H),Kt.removeEventListener("refresh",H),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Fe(t),a.iOS=hr,hr&&!h()&&h(1),hr&&yt.ticker.add(wi),q=a._dc,I=yt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:p_(h,h(),function(){return I.pause()})},onUpdate:Ji,onComplete:q.vars.onComplete}),a};Kt.sort=function(r){return ee.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Kt.observe=function(r){return new Fe(r)};Kt.normalizeScroll=function(r){if(typeof r>"u")return vn;if(r===!0&&vn)return vn.enable();if(r===!1){vn&&vn.kill(),vn=r;return}var t=r instanceof Fe?r:zE(r);return vn&&vn.target===t.target&&vn.kill(),hs(t.target)&&(vn=t),t};Kt.core={_getVelocityProp:Ju,_inputObserver:m_,_scrollers:ne,_proxies:Ii,bridge:{ss:function(){li||ds("scrollStart"),li=ln()},ref:function(){return an}}};r_()&&yt.registerPlugin(Kt);function __(r,t,e){return Math.max(r,Math.min(t,e))}class kE{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(t){var e;if(!this.isRunning)return;let n=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=__(0,this.currentTime/this.duration,1);n=i>=1;const s=n?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function(s,o,a,l){return function(u,f,d){return(1-d)*u+d*f}(s,o,1-Math.exp(-a*l))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,n=!0)):(this.value=this.to,n=!0);n&&this.stop(),(e=this.onUpdate)===null||e===void 0||e.call(this,this.value,n)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:s,onStart:o,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class HE{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){this.wrapper=t,this.content=e,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},n&&(this.debouncedResize=function(o,a){let l;return function(...c){let u=this;clearTimeout(l),l=setTimeout(()=>{l=void 0,o.apply(u,c)},a)}}(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)===null||t===void 0||t.disconnect(),(e=this.contentResizeObserver)===null||e===void 0||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class g_{constructor(){this.events={}}emit(t,...e){var n;let i=this.events[t]||[];for(let s=0,o=i.length;s<o;s++)(n=i[s])===null||n===void 0||n.call(i,...e)}on(t,e){var n;return!((n=this.events[t])===null||n===void 0)&&n.push(e)||(this.events[t]=[e]),()=>{var i;this.events[t]=(i=this.events[t])===null||i===void 0?void 0:i.filter(s=>e!==s)}}off(t,e){var n;this.events[t]=(n=this.events[t])===null||n===void 0?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}}const qd=100/6,ur={passive:!1};class VE{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new g_,this.onTouchStart=n=>{const{clientX:i,clientY:s}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})},this.onTouchMove=n=>{const{clientX:i,clientY:s}=n.targetTouches?n.targetTouches[0]:n,o=-(i-this.touchStart.x)*this.options.touchMultiplier,a=-(s-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:o,y:a},this.emitter.emit("scroll",{deltaX:o,deltaY:a,event:n})},this.onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})},this.onWheel=n=>{let{deltaX:i,deltaY:s,deltaMode:o}=n;i*=o===1?qd:o===2?this.window.width:1,s*=o===1?qd:o===2?this.window.height:1,i*=this.options.wheelMultiplier,s*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:n})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ur),this.element.addEventListener("touchstart",this.onTouchStart,ur),this.element.addEventListener("touchmove",this.onTouchMove,ur),this.element.addEventListener("touchend",this.onTouchEnd,ur)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ur),this.element.removeEventListener("touchstart",this.onTouchStart,ur),this.element.removeEventListener("touchmove",this.onTouchMove,ur),this.element.removeEventListener("touchend",this.onTouchEnd,ur)}}class GE{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:a=35,duration:l,easing:c=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:u=.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:h="vertical",touchMultiplier:g=1,wheelMultiplier:_=1,autoResize:m=!0,prevent:p,virtualScroll:y,__experimental__naiveDimensions:E=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new kE,this.emitter=new g_,this.onPointerDown=v=>{v.button===1&&this.reset()},this.onVirtualScroll=v=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(v)===!1)return;const{deltaX:A,deltaY:w,event:S}=v;if(this.emitter.emit("virtual-scroll",{deltaX:A,deltaY:w,event:S}),S.ctrlKey)return;const R=S.type.includes("touch"),M=S.type.includes("wheel");if(this.isTouching=S.type==="touchstart"||S.type==="touchmove",this.options.syncTouch&&R&&S.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const x=A===0&&w===0,P=this.options.gestureOrientation==="vertical"&&w===0||this.options.gestureOrientation==="horizontal"&&A===0;if(x||P)return;let I=S.composedPath();I=I.slice(0,I.indexOf(this.rootElement));const F=this.options.prevent;if(I.find(G=>{var z,tt,D,at,Ct;return G instanceof HTMLElement&&(typeof F=="function"&&(F==null?void 0:F(G))||((z=G.hasAttribute)===null||z===void 0?void 0:z.call(G,"data-lenis-prevent"))||R&&((tt=G.hasAttribute)===null||tt===void 0?void 0:tt.call(G,"data-lenis-prevent-touch"))||M&&((D=G.hasAttribute)===null||D===void 0?void 0:D.call(G,"data-lenis-prevent-wheel"))||((at=G.classList)===null||at===void 0?void 0:at.contains("lenis"))&&!(!((Ct=G.classList)===null||Ct===void 0)&&Ct.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void S.preventDefault();if(!(this.options.syncTouch&&R||this.options.smoothWheel&&M))return this.isScrolling="native",void this.animate.stop();S.preventDefault();let k=w;this.options.gestureOrientation==="both"?k=Math.abs(w)>Math.abs(A)?w:A:this.options.gestureOrientation==="horizontal"&&(k=A);const q=R&&this.options.syncTouch,H=R&&S.type==="touchend"&&Math.abs(k)>5;H&&(k=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+k,Object.assign({programmatic:!1},q?{lerp:H?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling==="native"){const v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-v,this.direction=Math.sign(this.animatedScroll-v),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.13",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:s,syncTouchLerp:o,touchInertiaMultiplier:a,duration:l,easing:c,lerp:u,infinite:f,gestureOrientation:h,orientation:d,touchMultiplier:g,wheelMultiplier:_,autoResize:m,prevent:p,virtualScroll:y,__experimental__naiveDimensions:E},this.dimensions=new HE(t,e,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new VE(n,{touchMultiplier:g,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=this.options.lerp,onStart:l,onComplete:c,force:u=!1,programmatic:f=!0,userData:d}={}){if(!this.isStopped&&!this.isLocked||u){if(typeof t=="string"&&["top","left","start"].includes(t))t=0;else if(typeof t=="string"&&["bottom","right","end"].includes(t))t=this.limit;else{let h;if(typeof t=="string"?h=document.querySelector(t):t instanceof HTMLElement&&(t!=null&&t.nodeType)&&(h=t),h){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const g=h.getBoundingClientRect();t=(this.isHorizontal?g.left:g.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?f&&(this.targetScroll=this.animatedScroll=this.scroll):t=__(0,t,this.limit),t===this.targetScroll)return l==null||l(this),void(c==null||c(this));if(this.userData=d??{},n)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),void(this.userData={});f||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(h,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),f&&(this.targetScroll=h),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(e,n){return(e%n+n)%n}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}function WE(r,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count;let o=0;const a=Object.keys(r.attributes),l={},c={},u=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,E=a.length;y<E;y++){const v=a[y],A=r.attributes[v];l[v]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const w=r.morphAttributes[v];w&&(c[v]||(c[v]=[]),w.forEach((S,R)=>{const M=new S.array.constructor(S.count*S.itemSize);c[v][R]=new S.constructor(M,S.itemSize,S.normalized)}))}const h=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=h*_;for(let y=0;y<s;y++){const E=n?n.getX(y):y;let v="";for(let A=0,w=a.length;A<w;A++){const S=a[A],R=r.getAttribute(S),M=R.itemSize;for(let x=0;x<M;x++)v+=`${~~(R[f[x]](E)*_+m)},`}if(v in e)u.push(e[v]);else{for(let A=0,w=a.length;A<w;A++){const S=a[A],R=r.getAttribute(S),M=r.morphAttributes[S],x=R.itemSize,P=l[S],I=c[S];for(let F=0;F<x;F++){const k=f[F],q=d[F];if(P[q](o,R[k](E)),M)for(let H=0,G=M.length;H<G;H++)I[H][q](o,M[H][k](E))}}e[v]=o,u.push(o),o++}}const p=r.clone();for(const y in r.attributes){const E=l[y];if(p.setAttribute(y,new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)),y in c)for(let v=0;v<c[y].length;v++){const A=c[y][v];p.morphAttributes[y][v]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(u),p}const XE=`
varying vec3 vOPos;
uniform sampler3D uNoise;
// Noise is pre-baked once into a tiling 3D texture (see bakeNoise) — one texture read
// instead of ~100 ALU ops of simplex maths. Lattice period = 16 units.
// Octaves finer than a pixel are faded out (they'd only shimmer) and skipped entirely.
float _aa(vec3 p){ return 1.0 - smoothstep(0.35, 0.7, length(fwidth(p))); }
float snoise(vec3 p){ return (texture(uNoise, p * 0.0625).r) * _aa(p); }
float fbm(vec3 p){
  float a = 0.5, s = 0.0, w = length(fwidth(p));
  for (int i = 0; i < OCT; i++){
    float f = 1.0 - smoothstep(0.35, 0.7, w);
    if (f <= 0.0) break;
    s += a * f * texture(uNoise, p * 0.0625).r;
    p = p * 2.03 + 17.1; w *= 2.03; a *= 0.5;
  }
  return s;
}
float ridged(vec3 p){
  float a = 0.5, s = 0.0, w = length(fwidth(p));
  for (int i = 0; i < OCT; i++){
    float f = 1.0 - smoothstep(0.35, 0.7, w);
    s += a * mix(0.6, 1.0 - abs(texture(uNoise, p * 0.0625).r), f);
    p = p * 2.07 + 3.7; w *= 2.07; a *= 0.5;
  }
  return s;
}
vec3 srgb(vec3 c){ return pow(c, vec3(2.2)); }
vec3 srgb(float r, float g, float b){ return pow(vec3(r, g, b), vec3(2.2)); }
// bump from a height field, identical maths to three's bumpmap chunk
vec3 _bump(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection){
  vec3 vSigmaX = normalize(dFdx(surf_pos.xyz));
  vec3 vSigmaY = normalize(dFdy(surf_pos.xyz));
  vec3 vN = surf_norm;
  vec3 R1 = cross(vSigmaY, vN);
  vec3 R2 = cross(vN, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDirection;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}
`;let Gc=null;function YE(){if(Gc)return Gc;const r=v_?64:96,t=16;let e=7;const n=()=>(e=e*16807%2147483647)/2147483647,i=new Float32Array(t*t*t),s=new Float32Array(t*t*t),o=new Float32Array(t*t*t);for(let _=0;_<i.length;_++){const m=n()*Math.PI*2,p=n()*2-1,y=Math.sqrt(1-p*p);i[_]=y*Math.cos(m),s[_]=y*Math.sin(m),o[_]=p}const a=_=>_*_*_*(_*(_*6-15)+10),l=(_,m,p)=>(_&15)+((m&15)<<4)+((p&15)<<8),c=new Float32Array(r*r*r);let u=0,f=0;for(let _=0;_<r;_++){const m=_/r*t,p=Math.floor(m),y=m-p,E=a(y);for(let v=0;v<r;v++){const A=v/r*t,w=Math.floor(A),S=A-w,R=a(S);for(let M=0;M<r;M++){const x=M/r*t,P=Math.floor(x),I=x-P,F=a(I);let k=0;for(let q=0;q<8;q++){const H=q&1,G=q>>1&1,z=q>>2,tt=l(P+H,w+G,p+z),D=i[tt]*(I-H)+s[tt]*(S-G)+o[tt]*(y-z);k+=D*(H?F:1-F)*(G?R:1-R)*(z?E:1-E)}c[u++]=k,f+=k*k}}}const d=.35/Math.sqrt(f/c.length),h=new Uint16Array(c.length);for(let _=0;_<c.length;_++)h[_]=ng.toHalfFloat(Math.max(-1,Math.min(1,c[_]*d)));const g=new Ap(h,r,r,r);return g.format=Hl,g.type=_o,g.minFilter=g.magFilter=xi,g.wrapS=g.wrapT=g.wrapR=yl,g.unpackAlignment=1,g.needsUpdate=!0,Gc=g,g}const v_=typeof matchMedia<"u"&&matchMedia("(max-width: 820px)").matches;function Ei(r,t,e={}){const n=(e.bump??1).toFixed(4),i=v_?Math.max(2,(e.oct??5)-2):e.oct??5,s={...e.uniforms||{},uNoise:{value:null}},o=Object.entries(s).filter(([a])=>a!=="uNoise").map(([a,l])=>`uniform ${typeof l.value=="number"?"float":(l.value.isColor,"vec3")} ${a};`).join(`
`);return r.onBeforeCompile=a=>{s.uNoise.value=YE(),Object.assign(a.uniforms,s),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOPos = transformed;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
#define OCT ${i}
${o}
${XE}`).replace("#include <color_fragment>",`#include <color_fragment>
vec3 P = vOPos; float pH = 0.0; float pR = 1.0; vec3 pE = vec3(0.0);
{
${t}
}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor * pR, 0.04, 1.0);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = _bump(-vViewPosition, normal, vec2(dFdx(pH), dFdy(pH)) * ${n}, faceDirection);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += pE;`)},r.customProgramCacheKey=()=>t+n+i,r}function qE(r){const t=new Vp,e=new Ce(new Mo(1,1,1),new la({color:"#0d0a08",side:Tn}));e.scale.setScalar(30),t.add(e);const n=(o,a,l,c,u,f)=>{const d=new Ce(new ms(o,a),new la({color:new zt(l).multiplyScalar(c),side:Vn}));d.position.set(...u),d.lookAt(...f),t.add(d)};n(9,6,"#fff6ea",5,[0,9,3],[0,0,0]),n(2,10,"#ffe2bf",6,[-9,2,2],[0,0,0]),n(2,10,"#eef2ff",4,[8,3,-4],[0,0,0]),n(10,4,"#ff9a4a",.9,[0,-6,6],[0,0,0]),n(6,4,"#ffffff",2,[3,2,10],[0,0,0]);const i=new Lu(r),s=i.fromScene(t,.02).texture;return i.dispose(),s}const nn=Math.PI*2,x_=(r,t,e)=>Math.min(e,Math.max(t,r));function M_(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const De=M_(1337);function $E(r,t,e){let n=Math.imul(r,374761393)^Math.imul(t,668265263)^Math.imul(e,2147483647);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function y_(r,t,e){const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),f=l*l*(3-2*l),d=(g,_,m)=>g+(_-g)*m,h=(g,_,m)=>$E(n+g,i+_,s+m);return d(d(d(h(0,0,0),h(1,0,0),c),d(h(0,1,0),h(1,1,0),c),u),d(d(h(0,0,1),h(1,0,1),c),d(h(0,1,1),h(1,1,1),c),u),f)*2-1}function Zn(r,t,e,n=4){let i=0,s=.5;for(let o=0;o<n;o++)i+=s*y_(r,t,e),r=r*2.03+11.7,t=t*2.03+3.1,e=e*2.03+7.9,s*=.5;return i}const Kl=[{key:"bunBottom",h:.4,fixed:!0,label:"Pain du bas",desc:"Celui qui tient tout.",chip:"Pain",color:"#d48a3c"},{key:"patty",h:.3,label:"Steak smashé",desc:"Écrasé sur la plaque, caramélisé sur les bords.",chip:"Steak",color:"#6b3218"},{key:"cheese",h:.03,label:"Cheddar",desc:"Fondu jusqu’à l’abandon.",chip:"Cheddar",color:"#ffab1f"},{key:"patty2",h:.3,label:"Second steak",desc:"Parce qu’un seul ne suffit jamais.",chip:"2ᵉ steak",color:"#6b3218"},{key:"cheese2",h:.03,label:"Second cheddar",desc:"Encore. Toujours.",chip:"2ᵉ cheddar",color:"#ffab1f"},{key:"pickles",h:.05,label:"Cornichons",desc:"Une pointe d’acidité.",chip:"Cornichons",color:"#8aa83a"},{key:"lettuce",h:.1,label:"Salade",desc:"Fraîche et croquante.",chip:"Salade",color:"#6fbf3a"},{key:"tomato",h:.1,label:"Tomate",desc:"Juteuse, en tranches épaisses.",chip:"Tomate",color:"#e0301e"},{key:"onion",h:.07,label:"Oignons rouges",desc:"Pour le croquant.",chip:"Oignons",color:"#c98bd0"},{key:"sauce",h:.03,label:"Sauce maison",desc:"La recette reste entre nous.",chip:"Sauce",color:"#e8682a"},{key:"bunTop",h:1,fixed:!0,label:"Brioche dorée",desc:"Toastée, sésame, sans culpabilité.",chip:"Brioche",color:"#c8742a"}];function jh(r,t=128,e=110){const i=new iS(r.map(([s,o])=>new Yt(s,o))).getSpacedPoints(e).map(s=>new Yt(Math.max(0,s.x),s.y));return i[0].x=0,i[i.length-1].x=0,new Th(i,t)}function Jh(r,t){r.deleteAttribute("uv"),r.deleteAttribute("normal"),r=WE(r,1e-4);const e=r.attributes.position,n=new B;if(t)for(let i=0;i<e.count;i++)n.fromBufferAttribute(e,i),t(n),e.setXYZ(i,n.x,n.y,n.z);return r.computeVertexNormals(),r}function S_(r,t,e){const n=[],i=[];for(let o=0;o<=r;o++){const a=o/r;for(let l=0;l<=t;l++){const c=l/t*nn,{r:u,y:f}=e(a,c);n.push(u*Math.cos(c),f,u*Math.sin(c))}}for(let o=0;o<r;o++)for(let a=0;a<t;a++){const l=o*(t+1)+a,c=l+t+1;i.push(l,c,l+1,c,c+1,l+1)}const s=new hi;return s.setAttribute("position",new Ve(n,3)),s.setIndex(i),s.computeVertexNormals(),s}function Qh(r,t=512){const e=document.createElement("canvas");e.width=e.height=t,r(e.getContext("2d"),t);const n=new eS(e);return n.colorSpace=kn,n.anisotropy=8,n}const E_=`
  float holes = smoothstep(0.3, 0.8, snoise(P * vec3(24.0, 4.0, 24.0)));
  float small = smoothstep(0.45, 0.85, snoise(P * vec3(60.0, 6.0, 60.0) + 9.0));
  float r = length(P.xz);
`;function ZE(){const n=[[0,0],[.7975,0],[1.305,.012],[1.42825,.045],[1.45,.1]];for(let S=1;S<=18;S++){const R=S/18*(Math.PI/2);n.push([1.45*Math.cos(R),.1+.95*Math.pow(Math.sin(R),.78)])}const i=(S,R,M)=>Zn(S*1.6,R*1.6,M*1.6,3)*.05,s=Jh(jh(n,144,120),S=>{if(S.y<.03)return;const R=i(S.x,S.y,S.z)*Math.min(1,(S.y-.03)*6),M=S.x/(1.45*1.45),x=(S.y-.1)/(.95*.95),P=S.z/(1.45*1.45),I=Math.hypot(M,x,P)||1;S.x+=M/I*R,S.y+=x/I*R,S.z+=P/I*R}),o=Ei(new ci({roughness:.48,clearcoat:.55,clearcoatRoughness:.3,sheen:.35,sheenRoughness:.5,sheenColor:new zt("#ffcf94")}),`
      float t = smoothstep(0.06, 1.02, P.y);
      float m = fbm(P * 1.9);
      float mf = fbm(P * 9.0);
      vec3 pale = srgb(0.96, 0.76, 0.46);
      vec3 mid  = srgb(0.80, 0.44, 0.15);
      vec3 dark = srgb(0.46, 0.18, 0.05);
      vec3 c = mix(pale, mid, smoothstep(0.0, 0.32, t + m * 0.12));
      c = mix(c, dark, smoothstep(0.32, 1.0, t + m * 0.28));
      c *= 0.9 + mf * 0.14;
      float pits = smoothstep(0.5, 0.85, snoise(P * 55.0));
      c *= 1.0 - pits * 0.14;
      pH = mf * 0.006 + snoise(P * 32.0) * 0.0018 - pits * 0.0025;
      pR = 0.85 + m * 0.35 + pits * 0.6;
      if (P.y < 0.02) {
        ${E_}
        float toast = smoothstep(1.05, 1.43, r);
        c = mix(srgb(0.97, 0.88, 0.69), srgb(0.80, 0.52, 0.24), toast) * (1.0 - holes * 0.28 - small * 0.15);
        pH = -holes * 0.012 - small * 0.004 + fbm(P * 30.0) * 0.003;
        pR = 2.0;
      }
      diffuseColor.rgb = c;
    `,{bump:1.2}),a=new Ce(s,o),l=new Xl(.032,12,8);l.scale(.62,.3,1.3);const c=l.attributes.position;for(let S=0;S<c.count;S++){const R=c.getZ(S);c.setX(S,c.getX(S)*(1-R*4))}l.computeVertexNormals();const u=190,f=new Gp(l,new ci({roughness:.42,sheen:.6,sheenColor:new zt("#fff3d6"),clearcoat:.3}),u),d=new me,h=new Mr,g=new Mr,_=new Mr,m=new B(0,1,0),p=new B(1,0,0),y=new B,E=new B,v=new B,A=new zt;for(let S=0;S<u;S++){const R=Math.asin(Ep.lerp(Math.sin(.25),Math.sin(1.5),De())),M=De()*nn;E.set(1.45*Math.cos(R)*Math.cos(M),.1+.95*Math.pow(Math.sin(R),.78),1.45*Math.cos(R)*Math.sin(M)),y.set(E.x/(1.45*1.45),(E.y-.1)/(.95*.95),E.z/(1.45*1.45)).normalize(),E.addScaledVector(y,i(E.x,E.y,E.z)+.006),h.setFromUnitVectors(m,y).multiply(g.setFromAxisAngle(m,De()*nn)).multiply(_.setFromAxisAngle(p,(De()-.5)*.5)),v.setScalar(.75+De()*.45),f.setMatrixAt(S,d.compose(E,h,v)),A.setHSL(.11+De()*.02,.45+De()*.25,.8+De()*.12),De()<.12&&A.offsetHSL(0,.1,-.15),f.setColorAt(S,A)}const w=new ri;return w.add(a,f),{obj:w,meshes:[a,f]}}function KE(){const e=Jh(jh([[0,0],[.9799999999999999,0],[1.3299999999999998,.03],[1.4,.14],[1.386,.3],[1.3299999999999998,.395],[1.148,.42],[0,.42]],144,100),s=>{if(Math.hypot(s.x,s.z)>.01){const a=1+Zn(s.x*2,s.y*2,s.z*2,3)*.025;s.x*=a,s.z*=a}s.y>.415&&(s.y+=Zn(s.x*3,0,s.z*3,3)*.012)}),n=Ei(new ci({roughness:.55,clearcoat:.25,clearcoatRoughness:.45,sheen:.4,sheenColor:new zt("#ffcf94")}),`
      float m = fbm(P * 2.4);
      float mf = fbm(P * 10.0);
      vec3 c;
      if (P.y > 0.395) {
        ${E_}
        // griddle-toasted face: golden, darker in patches and at the rim
        float toast = clamp(mf * 0.6 + 0.35 + smoothstep(0.9, 1.3, r) * 0.5, 0.0, 1.0);
        c = mix(srgb(0.95, 0.80, 0.55), srgb(0.66, 0.36, 0.12), toast) * (1.0 - holes * 0.3 - small * 0.15);
        pH = -holes * 0.012 - small * 0.004 + mf * 0.004;
        pR = 1.8;
      } else {
        float t = P.y / 0.42;
        c = mix(srgb(0.62, 0.30, 0.09), srgb(0.92, 0.66, 0.36), smoothstep(0.0, 0.85, t) + m * 0.12);
        c *= 0.9 + mf * 0.14;
        pH = mf * 0.005 + snoise(P * 40.0) * 0.0014;
        pR = 1.0 + m * 0.3;
      }
      diffuseColor.rgb = c;
    `,{bump:1.2}),i=new Ce(e,n);return{obj:i,meshes:[i]}}function $d(r,t){const i=Jh(jh([[0,0],[1.35,0],[1.4625,.025],[1.5,.08],[1.5074999999999998,.17],[1.4775,.25],[1.3800000000000001,.3],[0,.3]],160,100),o=>{const a=Math.hypot(o.x,o.z);if(a>.001){const l=a/1.5,c=1+(Zn(o.x*1.4+t,o.y*.6,o.z*1.4,4)*.07+Zn(o.x*6,o.y*4,o.z*6+t,3)*.035)*l*l;o.x*=c,o.z*=c}o.y+=Zn(o.x*2.5,o.y*2,o.z*2.5+t,4)*.035*(o.y>.15?1:.4)}),s=new Ce(i,r);return s.rotation.y=t,{obj:s,meshes:[s]}}function jE(r){return Ei(new ci({roughness:.72,clearcoat:.08,clearcoatRoughness:.6}),`
      float cr = clamp((ridged(P * 5.5 + fbm(P * 2.0) * 0.8) * 0.75 + (fbm(P * 13.0) * 0.5 + 0.5) * 0.25 - 0.45) * 1.8 + 0.45, 0.0, 1.0);
      float fine = fbm(P * 24.0);
      float big = fbm(P * 1.6);
      float r = length(P.xz);
      // beef: near-black Maillard crust, ridges catch a lighter brown
      vec3 cb = mix(srgb(0.13, 0.055, 0.025), srgb(0.33, 0.15, 0.06), smoothstep(0.35, 0.78, cr));
      cb = mix(cb, srgb(0.58, 0.32, 0.15), smoothstep(0.72, 0.98, cr) * 0.75);
      cb *= mix(1.0, 0.55, smoothstep(1.25, 1.6, r)); // crispy charred lace
      // chicken: crunchy golden breading
      vec3 ck = mix(srgb(0.58, 0.30, 0.09), srgb(0.95, 0.66, 0.28), smoothstep(0.3, 0.85, cr));
      vec3 c = mix(cb, ck, uChicken);
      c *= 0.82 + fine * 0.22 + big * 0.18;
      diffuseColor.rgb = c;
      pH = cr * mix(0.022, 0.035, uChicken) + fine * 0.007;
      float fat = smoothstep(0.55, 0.9, snoise(P * 6.5 + 3.0));
      pR = mix(1.2, 0.6, fat * (1.0 - uChicken * 0.8));
    `,{bump:2,uniforms:{uChicken:r}})}class Zd{constructor(t,e){const n=new ms(2.62,2.62,72,72);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let o=0;o<i.count;o++){const a=i.getX(o),l=i.getZ(o),c=Math.pow(Math.abs(a*l)/1.716,3)*.12;i.setX(o,a*(1-c)),i.setZ(o,l*(1-c))}n.rotateY(Math.PI/4+t*.45),this.geo=n,this.base=Float32Array.from(n.attributes.position.array);const s=M_(t*99+7);this.seed=t,this.drips=Array.from({length:8},()=>({a:s()*nn,w:.05+s()*.09,len:.2+s()*.55})),this.mat=Ei(new ci({roughness:.4,clearcoat:.5,clearcoatRoughness:.25,sheen:.3,sheenColor:new zt("#ffe7a6"),side:Vn}),`
        float m = fbm(P * 2.6);
        vec3 c = mix(srgb(0.98, 0.56, 0.04), srgb(1.0, 0.70, 0.16), m * 0.5 + 0.5);
        diffuseColor.rgb = c;
        pH = m * 0.005 + snoise(P * 22.0) * 0.0008;
        pR = 1.0 - uMelt * 0.4;
        pE = c * (0.05 + uMelt * 0.05); // light scattering through the slice
      `,{bump:1,oct:3,uniforms:{uMelt:e}}),this.mesh=new Ce(n,this.mat),this.mesh.position.y=.012,this.last=-1,this.update(0)}update(t){if(Math.abs(t-this.last)<.002)return;this.last=t;const e=this.geo.attributes.position.array,n=this.base;for(let i=0;i<e.length;i+=3){const s=n[i],o=n[i+2],a=Math.hypot(s,o),l=1.4,c=Math.max(0,a-l);let u=c*(.75+t*.35);if(c>0){const g=Math.atan2(o,s);let _=0;for(const m of this.drips){const p=Math.abs(((g-m.a+Math.PI)%nn+nn)%nn-Math.PI);_+=Math.exp(-(p*p)/(m.w*m.w))*m.len}u+=t*_*Math.min(1,c*5)}const f=y_(s*2+this.seed,0,o*2)*.012*(a<l?1:0),d=Math.min(1,c/.16),h=a>1e-4?(Math.min(a,l)+.2*(1-(1-d)*(1-d))+c*.06)/a:1;e[i]=s*h,e[i+1]=-u*(.35+.65*d)+f,e[i+2]=o*h}this.geo.attributes.position.needsUpdate=!0,this.geo.computeVertexNormals()}}const JE=()=>Ei(new ci({side:Vn,roughness:.42,clearcoat:.45,clearcoatRoughness:.2,sheen:.4,sheenColor:new zt("#efffc0")}),`
      float r = length(P.xz);
      float a = atan(P.z, P.x);
      float warp = fbm(P * 1.8) * 0.7;
      float vein = 1.0 - smoothstep(0.0, 0.08, abs(sin(a * 7.0 + warp * 3.0 + r * 1.3)));
      float sub  = 1.0 - smoothstep(0.0, 0.06, abs(sin(a * 23.0 + warp * 6.0 + r * 4.0)));
      float t = smoothstep(0.15, 1.65, r + warp * 0.2);
      vec3 c = mix(srgb(0.88, 0.93, 0.64), srgb(0.30, 0.52, 0.13), t);
      c = mix(c, srgb(0.95, 0.98, 0.80), vein * 0.5 * (1.0 - t * 0.4) + sub * 0.12);
      c *= 0.88 + fbm(P * 11.0) * 0.18;
      diffuseColor.rgb = c;
      pH = vein * 0.007 + sub * 0.0025 + fbm(P * 15.0) * 0.005;
      pR = 1.0 - vein * 0.3;
      pE = c * 0.09; // leaves glow when lit from behind
    `,{bump:1,oct:4});function QE(){const r=JE(),t=new ri,e=[];return[[1.6,0,0,0,7],[1.4,.25,-.15,.03,19]].forEach(([n,i,s,o,a])=>{const l=S_(22,220,(u,f)=>{const d=Math.cos(f),h=Math.sin(f),g=n*(1+Zn(d*1.2+a,h*1.2,0,3)*.28),_=Math.pow(u,2.4)*(Zn(d*4+a,h*4,u*2,4)*.34+Math.sin(f*26+Zn(d*3,h*3,a,2)*6)*.05);let m=o+.045+_-Math.pow(u,3)*.13;return g*u<1.72&&(m=Math.max(m,.065+o+Math.abs(_)*.3)),{r:g*u,y:m}}),c=new Ce(l,r);c.position.set(i,0,s),c.rotation.y=a,t.add(c),e.push(c)}),{obj:t,meshes:e}}const t1=()=>Qh((r,t)=>{const e=t/2,n=t*.47;r.fillStyle="#9e1208",r.fillRect(0,0,t,t);let i=r.createRadialGradient(e,e,n*.2,e,e,n);i.addColorStop(0,"#f2563a"),i.addColorStop(.85,"#e0321c"),i.addColorStop(1,"#b81a0c"),r.fillStyle=i,r.beginPath(),r.arc(e,e,n,0,nn),r.fill();const s=6;for(let o=0;o<s;o++){r.save(),r.translate(e,e),r.rotate(o/s*nn+De()*.2),r.filter="blur(3px)",i=r.createRadialGradient(0,-n*.55,4,0,-n*.55,n*.32),i.addColorStop(0,"rgba(255,190,110,0.95)"),i.addColorStop(1,"rgba(250,120,70,0.6)"),r.fillStyle=i,r.beginPath(),r.ellipse(0,-n*.55,n*.17,n*.28,0,0,nn),r.fill(),r.filter="none";for(let a=0;a<9;a++){const l=-n*.33-De()*n*.42,c=(De()-.5)*n*.2;r.fillStyle=`rgba(255,${225+De()*25},${150+De()*50},0.95)`,r.beginPath(),r.ellipse(c,l,t*.009,t*.015,De()*3,0,nn),r.fill()}r.restore()}r.filter="blur(6px)",r.fillStyle="rgba(255,130,95,0.8)",r.beginPath(),r.arc(e,e,n*.17,0,nn),r.fill(),r.filter="none"},1024);function e1(){const r=t1(),t=`
    pH = fbm(P * 12.0) * 0.004;
    pR = 0.7 + fbm(P * 4.0) * 0.5;
    pE = diffuseColor.rgb * 0.07; // juicy, translucent flesh
  `,e=Ei(new ci({color:"#a8180c",roughness:.25,clearcoat:1,clearcoatRoughness:.08}),t,{oct:3}),n=Ei(new ci({map:r,roughness:.22,clearcoat:.9,clearcoatRoughness:.12}),t,{oct:3}),i=new ri,s=[];return[[-.42,.05,0,.3,.95],[.45,-.08,.025,1.7,.9]].forEach(([o,a,l,c,u],f)=>{const d=new Wl(u,u,.1,96,1),h=d.attributes.position;for(let _=0;_<h.count;_++){const m=h.getX(_),p=h.getZ(_);if(Math.hypot(m,p)<.001)continue;const E=Math.atan2(p,m),v=1+Zn(Math.cos(E)*1.5+f*5,Math.sin(E)*1.5,0,3)*.08;h.setX(_,m*v),h.setZ(_,p*v)}d.computeVertexNormals(),d.translate(0,.05,0);const g=new Ce(d,[e,n,n]);g.position.set(o,l,a),g.rotation.set(0,c,l?.04:-.02),i.add(g),s.push(g)}),{obj:i,meshes:s}}const n1=()=>Qh((r,t)=>{const e=t/2;r.fillStyle="#3f5a14",r.fillRect(0,0,t,t);let n=r.createRadialGradient(e,e,10,e,e,t*.46);n.addColorStop(0,"#d6e08e"),n.addColorStop(.6,"#b2c463"),n.addColorStop(.92,"#7f9a32"),n.addColorStop(1,"#4c6a18"),r.fillStyle=n,r.beginPath(),r.arc(e,e,t*.46,0,nn),r.fill(),r.filter="blur(2px)",r.fillStyle="rgba(240,244,200,0.9)";for(let i=0;i<10;i++){const s=i/10*nn+De()*.3,o=t*(.14+De()*.06);r.beginPath(),r.ellipse(e+Math.cos(s)*o,e+Math.sin(s)*o,t*.018,t*.034,s,0,nn),r.fill()}r.filter="none"},256);function i1(){const r=new Wl(.3,.3,.045,120,1),t=r.attributes.position;for(let a=0;a<t.count;a++){const l=t.getX(a),c=t.getZ(a);if(Math.hypot(l,c)<.001)continue;const f=1+Math.sin(Math.atan2(c,l)*18)*.035;t.setX(a,l*f),t.setZ(a,c*f)}r.computeVertexNormals(),r.translate(0,.025,0);const e="pH = fbm(P * 26.0) * 0.003; pR = 0.75 + fbm(P * 8.0) * 0.4; pE = diffuseColor.rgb * 0.1;",n=Ei(new ci({map:n1(),roughness:.25,clearcoat:1,clearcoatRoughness:.1}),e,{oct:3}),i=Ei(new ci({color:"#3d5612",roughness:.35,clearcoat:.8}),e,{oct:3}),s=new ri,o=[];for(let a=0;a<6;a++){const l=a/6*nn+De()*.3,c=new Ce(r,[i,n,n]),u=a===5?0:.78;c.position.set(Math.cos(l)*u,De()*.012,Math.sin(l)*u),c.rotation.set((De()-.5)*.1,De()*nn,(De()-.5)*.1),s.add(c),o.push(c)}return{obj:s,meshes:o}}function r1(){const r=Ei(new ci({vertexColors:!0,roughness:.2,clearcoat:1,clearcoatRoughness:.1,sheen:.5,sheenColor:new zt("#ffffff")}),"pH = fbm(P * 18.0) * 0.002; pE = diffuseColor.rgb * 0.12;",{oct:3}),t=new ri,e=[];return[[.95,.22,-.1],[.72,-.38,.3],[.5,.15,.48],[.62,-.2,-.45]].forEach(([n,i,s],o)=>{const a=new bh(n,.05,14,120);a.rotateX(Math.PI/2),a.scale(1,.75,1);const l=a.attributes.position,c=new Float32Array(l.count*3),u=new zt;for(let d=0;d<l.count;d++){const h=Math.hypot(l.getX(d),l.getZ(d))-n;u.set("#f4e6f2").lerp(new zt("#8a2a78"),x_((h+.01)/.05,0,1)),c.set([u.r,u.g,u.b],d*3)}a.setAttribute("color",new ai(c,3));const f=new Ce(a,r);f.position.set(i,.04+o*.006,s),f.rotation.z=(o%2?1:-1)*.03,t.add(f),e.push(f)}),{obj:t,meshes:e}}function s1(r){const t=S_(14,180,(n,i)=>{const s=Math.cos(i),o=Math.sin(i),a=1.2+Zn(s*1.5,o*1.5,3,3)*.35,l=Math.max(0,Zn(s*2.5,o*2.5,9,2)+.2);return{r:a*n,y:.014+Zn(s*3*n,o*3*n,1,2)*.01-Math.pow(n,4)*.07*l}}),e=new Ce(t,r);return{obj:e,meshes:[e]}}function o1(){const r=Qh((e,n)=>{const i=e.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);i.addColorStop(0,"rgba(0,0,0,0.9)"),i.addColorStop(.35,"rgba(0,0,0,0.5)"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,n,n)},256);r.colorSpace=Xi;const t=new Ce(new ms(4.2,4.2).rotateX(-Math.PI/2),new la({map:r,transparent:!0,depthWrite:!1,opacity:.55}));return t.renderOrder=-1,t}class a1{constructor(){this.group=new ri,this.stack=new ri,this.group.add(this.stack),this.uChicken={value:0},this.uMelt={value:0},this.pattyMat=jE(this.uChicken),this.sauceBase=new zt("#d8361f"),this.sauceHot=new zt("#a8100a"),this.sauceMat=Ei(new ci({color:this.sauceBase.clone(),roughness:.12,clearcoat:1,clearcoatRoughness:.05,side:Vn}),"pH = fbm(P * 5.0) * 0.006; diffuseColor.rgb *= 0.92 + fbm(P * 3.0) * 0.12; pE = diffuseColor.rgb * 0.08;",{oct:3}),this.cheeses=[];const t={bunBottom:KE,patty:()=>$d(this.pattyMat,.3),patty2:()=>$d(this.pattyMat,2.1),cheese:()=>{const e=new Zd(1,this.uMelt);return this.cheeses.push(e),{obj:e.mesh,meshes:[e.mesh]}},cheese2:()=>{const e=new Zd(2,this.uMelt);return this.cheeses.push(e),{obj:e.mesh,meshes:[e.mesh]}},pickles:i1,lettuce:QE,tomato:e1,onion:r1,sauce:()=>s1(this.sauceMat),bunTop:ZE};this.layers=Kl.map((e,n)=>{const{obj:i,meshes:s}=t[e.key](),o=new ri;return o.add(i),o.scale.setScalar(1e-4),this.stack.add(o),s.forEach(a=>{a.castShadow=!0,a.receiveShadow=!0,a.userData.layer=e.key}),{...e,i:n,holder:o,meshes:s,on:!1,pend:null,delay:0,s:0,v:0}}),this.meshes=this.layers.flatMap(e=>e.meshes),this.shadow=o1(),this.group.add(this.shadow),this.height=0,this.chicken=0,this.chickenT=0,this.spicy=0,this.spicyT=0}setVariant(t,e=.065){const n=l=>!!(l.fixed||t[l.key]),i=this.layers.filter(l=>n(l)!==(l.pend??l.on)),s=i.filter(l=>!n(l)).reverse(),o=i.filter(l=>n(l));let a=0;for(const l of[...s,...o])l.pend=n(l),l.delay=a++*e;this.chickenT=t.chicken?1:0,this.spicyT=t.spicy?1:0}update(t,{explode:e=0,melt:n=0}={}){t=Math.min(t,1/30);let i=0,s=0;const o=.42;for(const l of this.layers){l.pend!==null&&(l.delay-=t,l.delay<=0&&(l.on=l.pend,l.pend=null)),l.v+=((l.on?1:0)-l.s)*170*t,l.v*=Math.exp(-13*t),l.s+=l.v*t;const c=Math.max(1e-4,l.s),u=x_(l.s,0,1);l.holder.visible=l.s>.003,l.holder.scale.setScalar(c),l.holder.position.y=i+(1-u)*1.4,l.holder.rotation.y=e*(s%2?1:-1)*.35*u,l.cy=i+l.h*.5*u,i+=(l.h+e*o)*u,u>.5&&s++}this.height=i,this.stack.position.y=-i/2,this.shadow.position.y=-i/2-.03,this.shadow.material.opacity=.55*(1-e*.7);for(const l of this.cheeses)l.update(n);this.uMelt.value=n;const a=1-Math.exp(-6*t);this.chicken+=(this.chickenT-this.chicken)*a,this.spicy+=(this.spicyT-this.spicy)*a,this.uChicken.value=this.chicken,this.sauceMat.color.copy(this.sauceBase).lerp(this.sauceHot,this.spicy)}}Ni.registerPlugin(Kt);const T_=Math.PI*2,eo=(r,t,e)=>Math.min(e,Math.max(t,r)),Uo=Ep.damp,Qr=matchMedia("(prefers-reduced-motion: reduce)").matches,tf=matchMedia("(pointer: fine)").matches,So=()=>innerWidth<820,b_=[{name:"Le <em>Classique</em>",tag:"L’original",desc:"Steak smashé, cheddar fondu, salade, tomate, oignons rouges, sauce maison.",variant:{patty:1,cheese:1,lettuce:1,tomato:1,onion:1,sauce:1}},{name:"L’<em>Extase</em>",tag:"Double",desc:"Deux steaks, deux cheddars, oignons, cornichons, sauce maison. Sans retenue.",variant:{patty:1,cheese:1,patty2:1,cheese2:1,onion:1,pickles:1,sauce:1}},{name:"Le <em>Frisson</em>",tag:"Piquant",desc:"Steak smashé, cheddar, cornichons, oignons rouges, sauce pimentée qui ne pardonne pas.",variant:{patty:1,cheese:1,pickles:1,onion:1,sauce:1,spicy:1}},{name:"Le <em>Tendre</em>",tag:"Poulet",desc:"Poulet croustillant, cheddar, salade, tomate, sauce maison. La douceur qui croque.",variant:{patty:1,cheese:1,lettuce:1,tomato:1,sauce:1,chicken:1}}],l1={signature:{patty:1,cheese:1,patty2:1,cheese2:1,lettuce:1,tomato:1,onion:1,sauce:1},anatomy:{patty:1,cheese:1,pickles:1,lettuce:1,tomato:1,onion:1,sauce:1},melt:{patty:1,cheese:1,patty2:1,cheese2:1,sauce:1}},c1={hero:"signature",manifesto:"signature",anatomy:"anatomy",melt:"melt",finale:"signature"},w_={patty:1,cheese:1,lettuce:1,tomato:1,sauce:1},Kd=["Mmmh.","Encore.","Oh oui…","Divin.","Hamburgasme.","Pas d’autre choix.","Croque."];function A_(r){let t=0;const e=n=>{[...n.childNodes].forEach(i=>{if(i.nodeType===3){const s=document.createDocumentFragment();i.textContent.split(/(\s+)/).forEach(o=>{if(!o)return;if(/^\s+$/.test(o))return s.append(document.createTextNode(o));const a=document.createElement("span");a.className="w";const l=document.createElement("span");l.textContent=o,l.style.setProperty("--i",t++),a.append(l),s.append(a)}),i.replaceWith(s)}else i.nodeType===1&&i.tagName!=="BR"&&e(i)})};return e(r),[...r.querySelectorAll(".w > span")]}function u1(r){const t=r.textContent;r.textContent="",[...t].forEach(e=>{const n=document.createElement("span");n.className="ch",n.textContent=e,r.append(n)})}const Fl=document.querySelector(".menu-track");b_.forEach((r,t)=>{const e=Kl.filter(n=>!n.fixed&&r.variant[n.key]).map(n=>`<li>${n.chip}</li>`).join("");Fl.insertAdjacentHTML("beforeend",`
    <article class="card" data-i="${t}">
      <div class="card-top"><span class="card-num">0${t+1}</span><span class="card-tag">${r.tag}</span></div>
      <h3 class="card-name">${r.name}</h3>
      <p class="card-desc">${r.desc}</p>
      <ul class="card-ings">${e}</ul>
    </article>`)});const il=[...Fl.querySelectorAll(".card")];let mo={...w_},sa=0;const h1=document.querySelector(".chips"),f1=Kl.filter(r=>!r.fixed).map(r=>{const t=document.createElement("button");return t.type="button",t.className="chip",t.dataset.key=r.key,t.style.setProperty("--c",r.color),t.innerHTML=`<span class="chip-dot"></span>${r.chip}`,t.addEventListener("click",()=>{mo[r.key]=mo[r.key]?0:1,ef()}),h1.append(t),t}),d1=document.querySelector(".meter-val"),p1=document.querySelector(".meter-bar i"),oh=document.querySelector('[data-act="explode"]');function ef(){f1.forEach(t=>t.setAttribute("aria-pressed",String(!!mo[t.dataset.key])));const r=Object.values(mo).filter(Boolean).length;d1.textContent=r<=1?"Timide":r<=3?"Sage":r<=5?"Gourmand":r<=7?"Intense":"Hamburgasme.",p1.style.transform=`scaleX(${Math.max(.04,r/9)})`}ef();oh.addEventListener("click",()=>{sa=sa?0:1,oh.textContent=sa?"Rassembler":"Tout lâcher"});document.querySelector('[data-act="reset"]').addEventListener("click",()=>{mo={...w_},sa=0,oh.textContent="Tout lâcher",ef()});const ah=document.querySelector(".labels"),jd=Kl.map((r,t)=>{const e=document.createElement("div");return e.className="label",e.innerHTML=`<div class="label-txt"><span class="label-name"><small></small>${r.label}</span><span class="label-desc">${r.desc}</span></div>`,ah.append(e),e});document.querySelectorAll(".hero-title .ht").forEach(u1);const m1=A_(document.querySelector(".manifesto-text")),R_=[...document.querySelectorAll(".reveal")];R_.forEach(A_);const _1=document.getElementById("gl"),jn=new Jy({canvas:_1,antialias:!0,alpha:!0,powerPreference:"high-performance"}),lh=Math.min(devicePixelRatio,So()?1.5:1.75),Jd=Math.min(lh,So()?.85:1),We={dpr:lh,ceil:lh,avg:1/60,t:0,good:0};jn.setPixelRatio(We.dpr);function g1(r){if(We.avg+=(r-We.avg)*.05,!((We.t+=r)<1)){if(We.t=0,We.avg>1/48&&We.dpr>Jd)We.ceil=We.dpr-.01,We.dpr=Math.max(Jd,We.dpr-.25),We.good=0;else if(We.avg<1/57&&We.dpr+.125<=We.ceil)if(++We.good>=3)We.dpr+=.125,We.good=0;else return;else return;jn.setPixelRatio(We.dpr),jn.setSize(innerWidth,innerHeight)}}jn.setSize(innerWidth,innerHeight);jn.toneMapping=up;jn.toneMappingExposure=1;jn.shadowMap.enabled=!0;jn.shadowMap.type=lp;const Dr=new Vp;Dr.environment=qE(jn);Dr.environmentIntensity=.75;const yi=new ei(32,innerWidth/innerHeight,.1,100);yi.position.set(0,.3,7.5);const bn=new wh("#fff2e0",2.6);bn.castShadow=!0;bn.shadow.mapSize.setScalar(So()?1024:2048);bn.shadow.radius=4;bn.shadow.camera.left=bn.shadow.camera.bottom=-3.5;bn.shadow.camera.right=bn.shadow.camera.top=3.5;bn.shadow.camera.near=.5;bn.shadow.camera.far=20;bn.shadow.bias=-5e-4;bn.shadow.normalBias=.02;const C_=new wh("#ffb070",2.4),P_=new wh("#fff0dc",1.4);Dr.add(bn,bn.target,C_,new rS("#fff1dc","#3a1a0c",.35),P_);const Lr=new a1;Dr.add(Lr.group);const jl=90,v1=new Xl(.045,8,6).scale(.62,.32,1.35),Ol=new Gp(v1,new Wp({color:"#fbefd0",roughness:.5}),jl);Ol.frustumCulled=!1;Dr.add(Ol);const D_=Array.from({length:jl},()=>({p:new B,v:new B,r:new Si,w:new B,life:0})),No=new tn;let x1=0;function M1(r){for(let t=0;t<22;t++){const e=D_[x1++%jl];e.p.copy(r);const n=Math.random()*T_,i=2+Math.random()*3.5;e.v.set(Math.cos(n)*i,3+Math.random()*4,Math.sin(n)*i+1.5),e.w.set(Math.random()*12,Math.random()*12,Math.random()*12),e.life=1.4+Math.random()*.6}}function y1(r){for(let t=0;t<jl;t++){const e=D_[t];e.life>0&&(e.life-=r,e.v.y-=14*r,e.p.addScaledVector(e.v,r),e.r.x+=e.w.x*r,e.r.y+=e.w.y*r,e.r.z+=e.w.z*r),No.position.copy(e.p),No.rotation.copy(e.r),No.scale.setScalar(e.life>0?Math.min(1,e.life*2):0),No.updateMatrix(),Ol.setMatrixAt(t,No.matrix)}Ol.instanceMatrix.needsUpdate=!0}let Yn=null;Qr||(Yn=new GE({lerp:.085,wheelMultiplier:.9}),Yn.on("scroll",Kt.update),Ni.ticker.add(r=>Yn.raf(r*1e3)),Ni.ticker.lagSmoothing(0),Yn.stop());"scrollRestoration"in history&&(history.scrollRestoration="manual");scrollTo(0,0);document.querySelectorAll("[data-to]").forEach(r=>r.addEventListener("click",t=>{const e=document.querySelector(r.getAttribute("href"));if(!e)return;t.preventDefault();const i=(e.parentElement.classList.contains("pin-spacer")?e.parentElement:e).getBoundingClientRect().top+scrollY;Yn?Yn.scrollTo(i,{duration:2,easing:s=>1-Math.pow(1-s,4)}):scrollTo({top:i,behavior:"smooth"})}));Ni.to(m1,{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:"#manifesto",start:"top 70%",end:"bottom bottom",scrub:!0}});const S1=Ni.matchMedia();S1.add("(min-width: 820px)",()=>{const r=()=>Fl.scrollWidth-innerWidth;Ni.to(Fl,{x:()=>-r(),ease:"none",scrollTrigger:{trigger:"#menu",start:"top top",end:()=>"+="+r(),pin:!0,scrub:1,invalidateOnRefresh:!0}})});const E1=[["hero",0,{x:0,y:.12,s:.88,ex:0,melt:.15,cz:7.5,tilt:.32,spin:0,my:.55,ms:.78}],["manifesto",0,{x:1.75,y:0,s:.82,tilt:.2,my:1.25,ms:.6}],["manifesto",1,{x:1.75,y:0,s:.82,tilt:.2,spin:.1}],["anatomy",0,{x:0,y:-.15,s:.78,cz:11,tilt:.12,melt:.1,my:-.2,ms:.62}],["anatomy",.3,{ex:1}],["anatomy",.78,{ex:1}],["anatomy",1,{ex:0,cz:9}],["melt",0,{x:0,y:.1,s:.78,cz:7,tilt:.12,melt:.15,my:.4,ms:.75}],["melt",.55,{cz:5.6,tilt:.06,melt:1,y:.15}],["melt",1,{cz:6,melt:1}],["menu",0,{x:-2.05,y:-.1,s:.8,cz:7.5,tilt:.3,melt:.45,my:1.4,ms:.6}],["menu",1,{x:-2.05,spin:.3}],["builder",0,{x:1.85,y:-.05,s:.98,tilt:.28,melt:.3,my:1.25,ms:.62}],["builder",1,{x:1.85}],["finale",0,{x:0,y:.15,s:1.08,tilt:.35,spin:1,my:.3,ms:.75}],["finale",1,{spin:1.3,s:.9,y:.6}]],nf=["x","y","s","ex","melt","cz","tilt","spin"];let zn=[];function T1(r){const t=document.getElementById(r),e=t.parentElement.classList.contains("pin-spacer")?t.parentElement:t;return{top:e.getBoundingClientRect().top+scrollY,len:Math.max(1,e.offsetHeight-innerHeight)}}function L_(){const r=So();let t={};zn=E1.map(([e,n,i])=>{const s=T1(e),o={...t,...i};t=o;const a={};for(const l of nf)a[l]=o[l];return r&&(a.x=0,a.y=o.my??o.y,a.s=o.ms??o.s*.75),{pos:s.top+n*s.len,v:a}});for(let e=1;e<zn.length;e++)zn[e].pos=Math.max(zn[e].pos,zn[e-1].pos+1)}const fr={};function b1(r){if(zn.length){if(r<=zn[0].pos)return Object.assign(fr,zn[0].v);for(let t=0;t<zn.length-1;t++){const e=zn[t],n=zn[t+1];if(r<n.pos){let i=(r-e.pos)/(n.pos-e.pos);i=i*i*(3-2*i);for(const s of nf)fr[s]=e.v[s]+(n.v[s]-e.v[s])*i;return}}Object.assign(fr,zn[zn.length-1].v)}}Kt.addEventListener("refresh",L_);const Qd=[...document.querySelectorAll("main section")],w1=document.querySelector(".ind-num"),A1=document.querySelector(".ind-label"),R1=document.querySelector('meta[name="theme-color"]');let Tr="",ch=0,rf=!1,uh="";function C1(){const r=innerHeight*.5;for(let t=0;t<Qd.length;t++){const e=Qd[t],n=e.getBoundingClientRect();if(n.top<=r&&n.bottom>r){e.id!==Tr&&(Tr=e.id,document.body.dataset.theme=e.dataset.theme,fh=!0,w1.textContent=String(t+1).padStart(2,"0"),A1.textContent=e.dataset.label,requestAnimationFrame(()=>R1.setAttribute("content",getComputedStyle(document.body).getPropertyValue("--bg").trim())));break}}}function P1(){if(Tr!=="menu")return;const r=So();let t=0,e=1/0;const n=il.map(i=>i.getBoundingClientRect());il.forEach((i,s)=>{const o=n[s],a=Math.abs(r?o.top+o.height/2-innerHeight*.6:o.left+o.width/2-innerWidth*.66);if(a<e&&(e=a,t=s),!r){const l=eo((o.left-innerWidth*.3)/(innerWidth*.16),0,1);i.style.opacity=.05+l*.95,i.style.transform=`translateY(${(1-l)*40}px) scale(${.92+l*.08})`}}),(t!==ch||!il[t].classList.contains("is-active"))&&(ch=t,il.forEach((i,s)=>i.classList.toggle("is-active",s===t)))}function D1(){if(!rf)return;const r=Tr==="menu"?b_[ch].variant:Tr==="builder"?mo:l1[c1[Tr]||"signature"],t=JSON.stringify(r);t!==uh&&(uh=t,Lr.setVariant(r))}const Ye={x:0,y:0,nx:0,ny:0,sx:0,sy:0},tp=new Yt,ep=new aS,ya=document.querySelector(".cursor"),L1=ya.querySelector(".cursor-dot"),I1=ya.querySelector(".cursor-ring"),U1=ya.querySelector(".cursor-text"),Fs={x:innerWidth/2,y:innerHeight/2};let I_=!1,br=!1,Ki=null,hh=0,Bl=0;tf&&!Qr&&document.body.classList.add("has-cursor");function U_(r,t){return tp.set(r/innerWidth*2-1,-(t/innerHeight)*2+1),ep.setFromCamera(tp,yi),ep.intersectObjects(Lr.meshes,!1)[0]||null}addEventListener("pointermove",r=>{if(r.pointerType==="mouse"&&document.body.classList.add("cursor-on"),Ye.x=r.clientX,Ye.y=r.clientY,Ye.nx=r.clientX/innerWidth*2-1,Ye.ny=r.clientY/innerHeight*2-1,Ki){const t=r.clientX-Ki.x;!br&&Math.abs(t)>6&&r.pointerType==="mouse"&&(br=!0,document.body.classList.add("dragging")),br&&(Bl=(r.clientX-Ki.lx)*.012,hh+=Bl,Ki.lx=r.clientX)}if(tf){const t=r.target.closest("a, button");I_=!t&&!!U_(r.clientX,r.clientY),ya.classList.toggle("is-link",!!t)}});addEventListener("pointerdown",r=>{r.target.closest("a, button")||(Ki={x:r.clientX,y:r.clientY,lx:r.clientX})});addEventListener("pointerup",r=>{if(Ki&&!br&&Math.hypot(r.clientX-Ki.x,r.clientY-Ki.y)<8){const t=U_(r.clientX,r.clientY);t&&N1(t.point,r.clientX,r.clientY)}Ki=null,br=!1,document.body.classList.remove("dragging")});let Wc=0,xl=0,Os=0,Ml=0;function N1(r,t,e){xl+=5.5,Ml+=7,M1(r);const n=document.createElement("span");n.className="float-word",n.textContent=Kd[Math.random()*Kd.length|0],n.style.left=t+"px",n.style.top=e+"px",document.body.append(n),setTimeout(()=>n.remove(),1300)}const F1=document.querySelector(".progress span"),O1=document.querySelector(".temp-val"),N_=document.querySelector(".marquee-inner");let Bs=0;const zl={maxScroll:1,marqueeHalf:1};function sf(){zl.maxScroll=Math.max(1,document.documentElement.scrollHeight-innerHeight),zl.marqueeHalf=N_.scrollWidth/2}Kt.addEventListener("refresh",sf);sf();let np="",ip="",rp=null;const Xc=new B,Yc=new B;function qc(r){return Yc.copy(r).project(yi),{x:(Yc.x*.5+.5)*innerWidth,y:(-Yc.y*.5+.5)*innerHeight}}let fh=!0;function B1(r){const t=eo((r-.55)/.35,0,1);if(fh&&t>0&&(fh=!1,ah.style.color=getComputedStyle(document.body).color),t<=0){jd.forEach(c=>c.style.opacity=0);return}const e=Lr.group,n=qc(e.getWorldPosition(Xc)),i=qc(Xc.set(1.55*e.scale.x,0,0).add(e.position)),s=Math.abs(i.x-n.x);ah.classList.toggle("compact",Tr==="builder");const a=So()||n.x<innerWidth*.38?"right":n.x>innerWidth*.62?"left":"alt";let l=0;Lr.layers.forEach((c,u)=>{const f=jd[u],d=eo(c.s,0,1);if(d<.5){f.style.opacity=0;return}const h=qc(c.holder.parent.localToWorld(Xc.set(0,c.cy,0))),g=a==="left"||a==="alt"&&l%2===1;f.classList.toggle("left",g);const _=String(l+1).padStart(2,"0");f._num!==_&&(f._num=_,f.querySelector("small").textContent=_);const m=g?n.x-s-16:n.x+s+16;f.style.transform=`translate(${m}px, ${h.y}px) translate(${g?"-100%":"0"}, -50%)`,f.style.opacity=t*d,l++})}const Fn={x:0,y:.12,s:.88,ex:0,melt:.15,cz:7.5,tilt:.32,spin:0};let sp=0,op=performance.now();function z1(){const r=performance.now(),t=Math.min(.05,(r-op)/1e3);op=r,sp+=t;const e=Yn?Yn.scroll:scrollY,n=Yn?Yn.velocity:0;C1(),P1(),D1(),b1(e);const i=Tr==="builder"?sa:0;fr.ex=eo(fr.ex+i,0,1),fr.cz+=i*4.5,fr.y-=i*.4;const s=Qr?20:4.5;for(const f of nf)Fn[f]=Uo(Fn[f],fr[f],s,t);Ye.sx=Uo(Ye.sx,Ye.nx,3,t),Ye.sy=Uo(Ye.sy,Ye.ny,3,t),br||(hh+=Bl,Bl*=Math.pow(.04,t)),xl+=-Wc*140*t,xl*=Math.exp(-7*t),Wc+=xl*t;const o=Qr?0:eo(n*.0045,-.16,.16);Ml+=(o-Os)*220*t,Ml*=Math.exp(-11*t),Os+=Ml*t;const a=Lr.group,l=Fn.s;a.position.set(Fn.x,Fn.y+Wc*.35,0),a.scale.set(l*(1+Os*.5),l*(1-Os),l*(1+Os*.5)),a.rotation.x=Fn.tilt+Ye.sy*.12+eo(n*.002,-.2,.2),a.rotation.y=(Qr?0:sp*.22)+e*9e-4+hh+Fn.spin*T_+Ye.sx*.35,a.rotation.z=-Ye.sx*.04+Os*.15;const c=Math.max(1,.62/yi.aspect);yi.position.set(Ye.sx*.15,.3-Ye.sy*.1,Fn.cz*c),yi.lookAt(Fn.x*.12,0,0),bn.position.set(a.position.x+3,a.position.y+5.5,4),bn.target.position.copy(a.position),C_.position.set(a.position.x-4.5,a.position.y+2,-3.5),P_.position.set(a.position.x+4,a.position.y-1,-2),Lr.update(t,{explode:Fn.ex,melt:Fn.melt}),y1(t),B1(Fn.ex),F1.style.transform=`scaleX(${e/zl.maxScroll})`;const u=Math.round(20+Fn.melt*160)+"°";if(u!==np&&(O1.textContent=np=u),!Qr){const f=zl.marqueeHalf;Bs-=t*(70+Math.abs(n)*9)*(n<-.5?-1:1),Bs<-f&&(Bs+=f),Bs>0&&(Bs-=f),N_.style.transform=`translate3d(${Bs}px,0,0)`}if(tf){Fs.x=Uo(Fs.x,Ye.x,12,t),Fs.y=Uo(Fs.y,Ye.y,12,t),L1.style.transform=`translate(${Ye.x}px, ${Ye.y}px)`,I1.style.transform=`translate(${Fs.x}px, ${Fs.y}px)`;const f=I_||br;f!==rp&&ya.classList.toggle("is-big",rp=f);const d=br?"Tourner":"Croquer";d!==ip&&(U1.textContent=ip=d)}jn.render(Dr,yi),rf&&!document.hidden&&g1(t)}Ni.ticker.add(z1);addEventListener("resize",()=>{yi.aspect=innerWidth/innerHeight,yi.updateProjectionMatrix(),jn.setSize(innerWidth,innerHeight),sf()});async function k1(){const r=document.querySelector(".pre-num"),t={v:0},e=Lr.layers.filter(s=>!s.holder.visible);e.forEach(s=>s.holder.visible=!0);const n=jn.compileAsync(Dr,yi).catch(()=>{});await Promise.all([n,document.fonts?document.fonts.ready:Promise.resolve(),new Promise(s=>Ni.to(t,{v:100,duration:Qr?.2:1.9,ease:"power2.inOut",onUpdate:()=>r.textContent=Math.round(t.v),onComplete:s}))]),e.forEach(s=>s.holder.visible=s.s>.003),jn.render(Dr,yi),Kt.refresh(),L_(),Ni.timeline().to(".pre-inner, .pre-note",{yPercent:-40,opacity:0,duration:.6,ease:"power3.in"}).to(".preloader",{clipPath:"inset(0 0 100% 0)",duration:1.1,ease:"expo.inOut"},"-=.15").add(()=>{rf=!0,uh="",Yn==null||Yn.start(),R_.forEach(s=>Kt.create({trigger:s,start:"top 98%",onEnter:()=>s.classList.add("in"),onLeaveBack:()=>s.classList.remove("in")}))},"-=.7").from(".hero-title .ch",{yPercent:115,rotate:6,duration:1.3,stagger:.04,ease:"expo.out"},"-=.55").add(()=>document.querySelector(".preloader").remove())}k1();
