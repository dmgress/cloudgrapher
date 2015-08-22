/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(global){/**
 * @license
 * Copyright (c) 2014, Chris Pettitt
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
global.graphlib=require("./index")}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./index":2}],2:[function(require,module,exports){var lib=require("./lib");module.exports={Graph:lib.Graph,json:require("./lib/json"),alg:require("./lib/alg"),version:lib.version}},{"./lib":18,"./lib/alg":9,"./lib/json":19}],3:[function(require,module,exports){var _=require("../lodash");module.exports=components;function components(g){var visited={},cmpts=[],cmpt;function dfs(v){if(_.has(visited,v))return;visited[v]=true;cmpt.push(v);_.each(g.successors(v),dfs);_.each(g.predecessors(v),dfs)}_.each(g.nodes(),function(v){cmpt=[];dfs(v);if(cmpt.length){cmpts.push(cmpt)}});return cmpts}},{"../lodash":20}],4:[function(require,module,exports){var _=require("../lodash");module.exports=dfs;function dfs(g,vs,order){if(!_.isArray(vs)){vs=[vs]}var acc=[],visited={};_.each(vs,function(v){if(!g.hasNode(v)){throw new Error("Graph does not have node: "+v)}doDfs(g,v,order==="post",visited,acc)});return acc}function doDfs(g,v,postorder,visited,acc){if(!_.has(visited,v)){visited[v]=true;if(!postorder){acc.push(v)}_.each(g.neighbors(v),function(w){doDfs(g,w,postorder,visited,acc)});if(postorder){acc.push(v)}}}},{"../lodash":20}],5:[function(require,module,exports){var dijkstra=require("./dijkstra"),_=require("../lodash");module.exports=dijkstraAll;function dijkstraAll(g,weightFunc,edgeFunc){return _.transform(g.nodes(),function(acc,v){acc[v]=dijkstra(g,v,weightFunc,edgeFunc)},{})}},{"../lodash":20,"./dijkstra":6}],6:[function(require,module,exports){var _=require("../lodash"),PriorityQueue=require("../data/priority-queue");module.exports=dijkstra;var DEFAULT_WEIGHT_FUNC=_.constant(1);function dijkstra(g,source,weightFn,edgeFn){return runDijkstra(g,String(source),weightFn||DEFAULT_WEIGHT_FUNC,edgeFn||function(v){return g.outEdges(v)})}function runDijkstra(g,source,weightFn,edgeFn){var results={},pq=new PriorityQueue,v,vEntry;var updateNeighbors=function(edge){var w=edge.v!==v?edge.v:edge.w,wEntry=results[w],weight=weightFn(edge),distance=vEntry.distance+weight;if(weight<0){throw new Error("dijkstra does not allow negative edge weights. "+"Bad edge: "+edge+" Weight: "+weight)}if(distance<wEntry.distance){wEntry.distance=distance;wEntry.predecessor=v;pq.decrease(w,distance)}};g.nodes().forEach(function(v){var distance=v===source?0:Number.POSITIVE_INFINITY;results[v]={distance:distance};pq.add(v,distance)});while(pq.size()>0){v=pq.removeMin();vEntry=results[v];if(vEntry.distance===Number.POSITIVE_INFINITY){break}edgeFn(v).forEach(updateNeighbors)}return results}},{"../data/priority-queue":16,"../lodash":20}],7:[function(require,module,exports){var _=require("../lodash"),tarjan=require("./tarjan");module.exports=findCycles;function findCycles(g){return _.filter(tarjan(g),function(cmpt){return cmpt.length>1||cmpt.length===1&&g.hasEdge(cmpt[0],cmpt[0])})}},{"../lodash":20,"./tarjan":14}],8:[function(require,module,exports){var _=require("../lodash");module.exports=floydWarshall;var DEFAULT_WEIGHT_FUNC=_.constant(1);function floydWarshall(g,weightFn,edgeFn){return runFloydWarshall(g,weightFn||DEFAULT_WEIGHT_FUNC,edgeFn||function(v){return g.outEdges(v)})}function runFloydWarshall(g,weightFn,edgeFn){var results={},nodes=g.nodes();nodes.forEach(function(v){results[v]={};results[v][v]={distance:0};nodes.forEach(function(w){if(v!==w){results[v][w]={distance:Number.POSITIVE_INFINITY}}});edgeFn(v).forEach(function(edge){var w=edge.v===v?edge.w:edge.v,d=weightFn(edge);results[v][w]={distance:d,predecessor:v}})});nodes.forEach(function(k){var rowK=results[k];nodes.forEach(function(i){var rowI=results[i];nodes.forEach(function(j){var ik=rowI[k];var kj=rowK[j];var ij=rowI[j];var altDistance=ik.distance+kj.distance;if(altDistance<ij.distance){ij.distance=altDistance;ij.predecessor=kj.predecessor}})})});return results}},{"../lodash":20}],9:[function(require,module,exports){module.exports={components:require("./components"),dijkstra:require("./dijkstra"),dijkstraAll:require("./dijkstra-all"),findCycles:require("./find-cycles"),floydWarshall:require("./floyd-warshall"),isAcyclic:require("./is-acyclic"),postorder:require("./postorder"),preorder:require("./preorder"),prim:require("./prim"),tarjan:require("./tarjan"),topsort:require("./topsort")}},{"./components":3,"./dijkstra":6,"./dijkstra-all":5,"./find-cycles":7,"./floyd-warshall":8,"./is-acyclic":10,"./postorder":11,"./preorder":12,"./prim":13,"./tarjan":14,"./topsort":15}],10:[function(require,module,exports){var topsort=require("./topsort");module.exports=isAcyclic;function isAcyclic(g){try{topsort(g)}catch(e){if(e instanceof topsort.CycleException){return false}throw e}return true}},{"./topsort":15}],11:[function(require,module,exports){var dfs=require("./dfs");module.exports=postorder;function postorder(g,vs){return dfs(g,vs,"post")}},{"./dfs":4}],12:[function(require,module,exports){var dfs=require("./dfs");module.exports=preorder;function preorder(g,vs){return dfs(g,vs,"pre")}},{"./dfs":4}],13:[function(require,module,exports){var _=require("../lodash"),Graph=require("../graph"),PriorityQueue=require("../data/priority-queue");module.exports=prim;function prim(g,weightFunc){var result=new Graph,parents={},pq=new PriorityQueue,v;function updateNeighbors(edge){var w=edge.v===v?edge.w:edge.v,pri=pq.priority(w);if(pri!==undefined){var edgeWeight=weightFunc(edge);if(edgeWeight<pri){parents[w]=v;pq.decrease(w,edgeWeight)}}}if(g.nodeCount()===0){return result}_.each(g.nodes(),function(v){pq.add(v,Number.POSITIVE_INFINITY);result.setNode(v)});pq.decrease(g.nodes()[0],0);var init=false;while(pq.size()>0){v=pq.removeMin();if(_.has(parents,v)){result.setEdge(v,parents[v])}else if(init){throw new Error("Input graph is not connected: "+g)}else{init=true}g.nodeEdges(v).forEach(updateNeighbors)}return result}},{"../data/priority-queue":16,"../graph":17,"../lodash":20}],14:[function(require,module,exports){var _=require("../lodash");module.exports=tarjan;function tarjan(g){var index=0,stack=[],visited={},results=[];function dfs(v){var entry=visited[v]={onStack:true,lowlink:index,index:index++};stack.push(v);g.successors(v).forEach(function(w){if(!_.has(visited,w)){dfs(w);entry.lowlink=Math.min(entry.lowlink,visited[w].lowlink)}else if(visited[w].onStack){entry.lowlink=Math.min(entry.lowlink,visited[w].index)}});if(entry.lowlink===entry.index){var cmpt=[],w;do{w=stack.pop();visited[w].onStack=false;cmpt.push(w)}while(v!==w);results.push(cmpt)}}g.nodes().forEach(function(v){if(!_.has(visited,v)){dfs(v)}});return results}},{"../lodash":20}],15:[function(require,module,exports){var _=require("../lodash");module.exports=topsort;topsort.CycleException=CycleException;function topsort(g){var visited={},stack={},results=[];function visit(node){if(_.has(stack,node)){throw new CycleException}if(!_.has(visited,node)){stack[node]=true;visited[node]=true;_.each(g.predecessors(node),visit);delete stack[node];results.push(node)}}_.each(g.sinks(),visit);if(_.size(visited)!==g.nodeCount()){throw new CycleException}return results}function CycleException(){}},{"../lodash":20}],16:[function(require,module,exports){var _=require("../lodash");module.exports=PriorityQueue;function PriorityQueue(){this._arr=[];this._keyIndices={}}PriorityQueue.prototype.size=function(){return this._arr.length};PriorityQueue.prototype.keys=function(){return this._arr.map(function(x){return x.key})};PriorityQueue.prototype.has=function(key){return _.has(this._keyIndices,key)};PriorityQueue.prototype.priority=function(key){var index=this._keyIndices[key];if(index!==undefined){return this._arr[index].priority}};PriorityQueue.prototype.min=function(){if(this.size()===0){throw new Error("Queue underflow")}return this._arr[0].key};PriorityQueue.prototype.add=function(key,priority){var keyIndices=this._keyIndices;key=String(key);if(!_.has(keyIndices,key)){var arr=this._arr;var index=arr.length;keyIndices[key]=index;arr.push({key:key,priority:priority});this._decrease(index);return true}return false};PriorityQueue.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var min=this._arr.pop();delete this._keyIndices[min.key];this._heapify(0);return min.key};PriorityQueue.prototype.decrease=function(key,priority){var index=this._keyIndices[key];if(priority>this._arr[index].priority){throw new Error("New priority is greater than current priority. "+"Key: "+key+" Old: "+this._arr[index].priority+" New: "+priority)}this._arr[index].priority=priority;this._decrease(index)};PriorityQueue.prototype._heapify=function(i){var arr=this._arr;var l=2*i,r=l+1,largest=i;if(l<arr.length){largest=arr[l].priority<arr[largest].priority?l:largest;if(r<arr.length){largest=arr[r].priority<arr[largest].priority?r:largest}if(largest!==i){this._swap(i,largest);this._heapify(largest)}}};PriorityQueue.prototype._decrease=function(index){var arr=this._arr;var priority=arr[index].priority;var parent;while(index!==0){parent=index>>1;if(arr[parent].priority<priority){break}this._swap(index,parent);index=parent}};PriorityQueue.prototype._swap=function(i,j){var arr=this._arr;var keyIndices=this._keyIndices;var origArrI=arr[i];var origArrJ=arr[j];arr[i]=origArrJ;arr[j]=origArrI;keyIndices[origArrJ.key]=i;keyIndices[origArrI.key]=j}},{"../lodash":20}],17:[function(require,module,exports){"use strict";var _=require("./lodash");module.exports=Graph;var DEFAULT_EDGE_NAME="\x00",GRAPH_NODE="\x00",EDGE_KEY_DELIM="";function Graph(opts){this._isDirected=_.has(opts,"directed")?opts.directed:true;this._isMultigraph=_.has(opts,"multigraph")?opts.multigraph:false;this._isCompound=_.has(opts,"compound")?opts.compound:false;this._label=undefined;this._defaultNodeLabelFn=_.constant(undefined);this._defaultEdgeLabelFn=_.constant(undefined);this._nodes={};if(this._isCompound){this._parent={};this._children={};this._children[GRAPH_NODE]={}}this._in={};this._preds={};this._out={};this._sucs={};this._edgeObjs={};this._edgeLabels={}}Graph.prototype._nodeCount=0;Graph.prototype._edgeCount=0;Graph.prototype.isDirected=function(){return this._isDirected};Graph.prototype.isMultigraph=function(){return this._isMultigraph};Graph.prototype.isCompound=function(){return this._isCompound};Graph.prototype.setGraph=function(label){this._label=label;return this};Graph.prototype.graph=function(){return this._label};Graph.prototype.setDefaultNodeLabel=function(newDefault){if(!_.isFunction(newDefault)){newDefault=_.constant(newDefault)}this._defaultNodeLabelFn=newDefault;return this};Graph.prototype.nodeCount=function(){return this._nodeCount};Graph.prototype.nodes=function(){return _.keys(this._nodes)};Graph.prototype.sources=function(){return _.filter(this.nodes(),function(v){return _.isEmpty(this._in[v])},this)};Graph.prototype.sinks=function(){return _.filter(this.nodes(),function(v){return _.isEmpty(this._out[v])},this)};Graph.prototype.setNodes=function(vs,value){var args=arguments;_.each(vs,function(v){if(args.length>1){this.setNode(v,value)}else{this.setNode(v)}},this);return this};Graph.prototype.setNode=function(v,value){if(_.has(this._nodes,v)){if(arguments.length>1){this._nodes[v]=value}return this}this._nodes[v]=arguments.length>1?value:this._defaultNodeLabelFn(v);if(this._isCompound){this._parent[v]=GRAPH_NODE;this._children[v]={};this._children[GRAPH_NODE][v]=true}this._in[v]={};this._preds[v]={};this._out[v]={};this._sucs[v]={};++this._nodeCount;return this};Graph.prototype.node=function(v){return this._nodes[v]};Graph.prototype.hasNode=function(v){return _.has(this._nodes,v)};Graph.prototype.removeNode=function(v){var self=this;if(_.has(this._nodes,v)){var removeEdge=function(e){self.removeEdge(self._edgeObjs[e])};delete this._nodes[v];if(this._isCompound){this._removeFromParentsChildList(v);delete this._parent[v];_.each(this.children(v),function(child){this.setParent(child)},this);delete this._children[v]}_.each(_.keys(this._in[v]),removeEdge);delete this._in[v];delete this._preds[v];_.each(_.keys(this._out[v]),removeEdge);delete this._out[v];delete this._sucs[v];--this._nodeCount}return this};Graph.prototype.setParent=function(v,parent){if(!this._isCompound){throw new Error("Cannot set parent in a non-compound graph")}if(_.isUndefined(parent)){parent=GRAPH_NODE}else{parent+="";for(var ancestor=parent;!_.isUndefined(ancestor);ancestor=this.parent(ancestor)){if(ancestor===v){throw new Error("Setting "+parent+" as parent of "+v+" would create create a cycle")}}this.setNode(parent)}this.setNode(v);this._removeFromParentsChildList(v);this._parent[v]=parent;this._children[parent][v]=true;return this};Graph.prototype._removeFromParentsChildList=function(v){delete this._children[this._parent[v]][v]};Graph.prototype.parent=function(v){if(this._isCompound){var parent=this._parent[v];if(parent!==GRAPH_NODE){return parent}}};Graph.prototype.children=function(v){if(_.isUndefined(v)){v=GRAPH_NODE}if(this._isCompound){var children=this._children[v];if(children){return _.keys(children)}}else if(v===GRAPH_NODE){return this.nodes()}else if(this.hasNode(v)){return[]}};Graph.prototype.predecessors=function(v){var predsV=this._preds[v];if(predsV){return _.keys(predsV)}};Graph.prototype.successors=function(v){var sucsV=this._sucs[v];if(sucsV){return _.keys(sucsV)}};Graph.prototype.neighbors=function(v){var preds=this.predecessors(v);if(preds){return _.union(preds,this.successors(v))}};Graph.prototype.filterNodes=function(filter){var copy=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});copy.setGraph(this.graph());_.each(this._nodes,function(value,v){if(filter(v)){copy.setNode(v,value)}},this);_.each(this._edgeObjs,function(e){if(copy.hasNode(e.v)&&copy.hasNode(e.w)){copy.setEdge(e,this.edge(e))}},this);var self=this;var parents={};function findParent(v){var parent=self.parent(v);if(parent===undefined||copy.hasNode(parent)){parents[v]=parent;return parent}else if(parent in parents){return parents[parent]}else{return findParent(parent)}}if(this._isCompound){_.each(copy.nodes(),function(v){copy.setParent(v,findParent(v))})}return copy};Graph.prototype.setDefaultEdgeLabel=function(newDefault){if(!_.isFunction(newDefault)){newDefault=_.constant(newDefault)}this._defaultEdgeLabelFn=newDefault;return this};Graph.prototype.edgeCount=function(){return this._edgeCount};Graph.prototype.edges=function(){return _.values(this._edgeObjs)};Graph.prototype.setPath=function(vs,value){var self=this,args=arguments;_.reduce(vs,function(v,w){if(args.length>1){self.setEdge(v,w,value)}else{self.setEdge(v,w)}return w});return this};Graph.prototype.setEdge=function(){var v,w,name,value,valueSpecified=false,arg0=arguments[0];if(typeof arg0==="object"&&arg0!==null&&"v"in arg0){v=arg0.v;w=arg0.w;name=arg0.name;if(arguments.length===2){value=arguments[1];valueSpecified=true}}else{v=arg0;w=arguments[1];name=arguments[3];if(arguments.length>2){value=arguments[2];valueSpecified=true}}v=""+v;w=""+w;if(!_.isUndefined(name)){name=""+name}var e=edgeArgsToId(this._isDirected,v,w,name);if(_.has(this._edgeLabels,e)){if(valueSpecified){this._edgeLabels[e]=value}return this}if(!_.isUndefined(name)&&!this._isMultigraph){throw new Error("Cannot set a named edge when isMultigraph = false")}this.setNode(v);this.setNode(w);this._edgeLabels[e]=valueSpecified?value:this._defaultEdgeLabelFn(v,w,name);var edgeObj=edgeArgsToObj(this._isDirected,v,w,name);v=edgeObj.v;w=edgeObj.w;Object.freeze(edgeObj);this._edgeObjs[e]=edgeObj;incrementOrInitEntry(this._preds[w],v);incrementOrInitEntry(this._sucs[v],w);this._in[w][e]=edgeObj;this._out[v][e]=edgeObj;this._edgeCount++;return this};Graph.prototype.edge=function(v,w,name){var e=arguments.length===1?edgeObjToId(this._isDirected,arguments[0]):edgeArgsToId(this._isDirected,v,w,name);return this._edgeLabels[e]};Graph.prototype.hasEdge=function(v,w,name){var e=arguments.length===1?edgeObjToId(this._isDirected,arguments[0]):edgeArgsToId(this._isDirected,v,w,name);return _.has(this._edgeLabels,e)};Graph.prototype.removeEdge=function(v,w,name){var e=arguments.length===1?edgeObjToId(this._isDirected,arguments[0]):edgeArgsToId(this._isDirected,v,w,name),edge=this._edgeObjs[e];if(edge){v=edge.v;w=edge.w;delete this._edgeLabels[e];delete this._edgeObjs[e];decrementOrRemoveEntry(this._preds[w],v);decrementOrRemoveEntry(this._sucs[v],w);delete this._in[w][e];delete this._out[v][e];this._edgeCount--}return this};Graph.prototype.inEdges=function(v,u){var inV=this._in[v];if(inV){var edges=_.values(inV);if(!u){return edges}return _.filter(edges,function(edge){return edge.v===u})}};Graph.prototype.outEdges=function(v,w){var outV=this._out[v];if(outV){var edges=_.values(outV);if(!w){return edges}return _.filter(edges,function(edge){return edge.w===w})}};Graph.prototype.nodeEdges=function(v,w){var inEdges=this.inEdges(v,w);if(inEdges){return inEdges.concat(this.outEdges(v,w))}};function incrementOrInitEntry(map,k){if(map[k]){map[k]++}else{map[k]=1}}function decrementOrRemoveEntry(map,k){if(!--map[k]){delete map[k]}}function edgeArgsToId(isDirected,v_,w_,name){var v=""+v_;var w=""+w_;if(!isDirected&&v>w){var tmp=v;v=w;w=tmp}return v+EDGE_KEY_DELIM+w+EDGE_KEY_DELIM+(_.isUndefined(name)?DEFAULT_EDGE_NAME:name)}function edgeArgsToObj(isDirected,v_,w_,name){var v=""+v_;var w=""+w_;if(!isDirected&&v>w){var tmp=v;v=w;w=tmp}var edgeObj={v:v,w:w};if(name){edgeObj.name=name}return edgeObj}function edgeObjToId(isDirected,edgeObj){return edgeArgsToId(isDirected,edgeObj.v,edgeObj.w,edgeObj.name)}},{"./lodash":20}],18:[function(require,module,exports){module.exports={Graph:require("./graph"),version:require("./version")}},{"./graph":17,"./version":21}],19:[function(require,module,exports){var _=require("./lodash"),Graph=require("./graph");module.exports={write:write,read:read};function write(g){var json={options:{directed:g.isDirected(),multigraph:g.isMultigraph(),compound:g.isCompound()},nodes:writeNodes(g),edges:writeEdges(g)};if(!_.isUndefined(g.graph())){json.value=_.clone(g.graph())}return json}function writeNodes(g){return _.map(g.nodes(),function(v){var nodeValue=g.node(v),parent=g.parent(v),node={v:v};if(!_.isUndefined(nodeValue)){node.value=nodeValue}if(!_.isUndefined(parent)){node.parent=parent}return node})}function writeEdges(g){return _.map(g.edges(),function(e){var edgeValue=g.edge(e),edge={v:e.v,w:e.w};if(!_.isUndefined(e.name)){edge.name=e.name}if(!_.isUndefined(edgeValue)){edge.value=edgeValue}return edge})}function read(json){var g=new Graph(json.options).setGraph(json.value);_.each(json.nodes,function(entry){g.setNode(entry.v,entry.value);if(entry.parent){g.setParent(entry.v,entry.parent)}});_.each(json.edges,function(entry){g.setEdge({v:entry.v,w:entry.w,name:entry.name},entry.value)});return g}},{"./graph":17,"./lodash":20}],20:[function(require,module,exports){var lodash;if(typeof require==="function"){try{lodash=require("lodash")}catch(e){}}if(!lodash){lodash=window._}module.exports=lodash},{lodash:undefined}],21:[function(require,module,exports){module.exports="1.0.7"},{}]},{},[1]);

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.dagre=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){module.exports={graphlib:require("./lib/graphlib"),layout:require("./lib/layout"),debug:require("./lib/debug"),util:{time:require("./lib/util").time,notime:require("./lib/util").notime},version:require("./lib/version")}},{"./lib/debug":6,"./lib/graphlib":7,"./lib/layout":9,"./lib/util":29,"./lib/version":30}],2:[function(require,module,exports){"use strict";var _=require("./lodash"),greedyFAS=require("./greedy-fas");module.exports={run:run,undo:undo};function run(g){var fas=g.graph().acyclicer==="greedy"?greedyFAS(g,weightFn(g)):dfsFAS(g);_.each(fas,function(e){var label=g.edge(e);g.removeEdge(e);label.forwardName=e.name;label.reversed=true;g.setEdge(e.w,e.v,label,_.uniqueId("rev"))});function weightFn(g){return function(e){return g.edge(e).weight}}}function dfsFAS(g){var fas=[],stack={},visited={};function dfs(v){if(_.has(visited,v)){return}visited[v]=true;stack[v]=true;_.each(g.outEdges(v),function(e){if(_.has(stack,e.w)){fas.push(e)}else{dfs(e.w)}});delete stack[v]}_.each(g.nodes(),dfs);return fas}function undo(g){_.each(g.edges(),function(e){var label=g.edge(e);if(label.reversed){g.removeEdge(e);var forwardName=label.forwardName;delete label.reversed;delete label.forwardName;g.setEdge(e.w,e.v,label,forwardName)}})}},{"./greedy-fas":8,"./lodash":10}],3:[function(require,module,exports){var _=require("./lodash"),util=require("./util");module.exports=addBorderSegments;function addBorderSegments(g){function dfs(v){var children=g.children(v),node=g.node(v);if(children.length){_.each(children,dfs)}if(_.has(node,"minRank")){node.borderLeft=[];node.borderRight=[];for(var rank=node.minRank,maxRank=node.maxRank+1;rank<maxRank;++rank){addBorderNode(g,"borderLeft","_bl",v,node,rank);addBorderNode(g,"borderRight","_br",v,node,rank)}}}_.each(g.children(),dfs)}function addBorderNode(g,prop,prefix,sg,sgNode,rank){var label={width:0,height:0,rank:rank,borderType:prop},prev=sgNode[prop][rank-1],curr=util.addDummyNode(g,"border",label,prefix);sgNode[prop][rank]=curr;g.setParent(curr,sg);if(prev){g.setEdge(prev,curr,{weight:1})}}},{"./lodash":10,"./util":29}],4:[function(require,module,exports){"use strict";var _=require("./lodash");module.exports={adjust:adjust,undo:undo};function adjust(g){var rankDir=g.graph().rankdir.toLowerCase();if(rankDir==="lr"||rankDir==="rl"){swapWidthHeight(g)}}function undo(g){var rankDir=g.graph().rankdir.toLowerCase();if(rankDir==="bt"||rankDir==="rl"){reverseY(g)}if(rankDir==="lr"||rankDir==="rl"){swapXY(g);swapWidthHeight(g)}}function swapWidthHeight(g){_.each(g.nodes(),function(v){swapWidthHeightOne(g.node(v))});_.each(g.edges(),function(e){swapWidthHeightOne(g.edge(e))})}function swapWidthHeightOne(attrs){var w=attrs.width;attrs.width=attrs.height;attrs.height=w}function reverseY(g){_.each(g.nodes(),function(v){reverseYOne(g.node(v))});_.each(g.edges(),function(e){var edge=g.edge(e);_.each(edge.points,reverseYOne);if(_.has(edge,"y")){reverseYOne(edge)}})}function reverseYOne(attrs){attrs.y=-attrs.y}function swapXY(g){_.each(g.nodes(),function(v){swapXYOne(g.node(v))});_.each(g.edges(),function(e){var edge=g.edge(e);_.each(edge.points,swapXYOne);if(_.has(edge,"x")){swapXYOne(edge)}})}function swapXYOne(attrs){var x=attrs.x;attrs.x=attrs.y;attrs.y=x}},{"./lodash":10}],5:[function(require,module,exports){module.exports=List;function List(){var sentinel={};sentinel._next=sentinel._prev=sentinel;this._sentinel=sentinel}List.prototype.dequeue=function(){var sentinel=this._sentinel,entry=sentinel._prev;if(entry!==sentinel){unlink(entry);return entry}};List.prototype.enqueue=function(entry){var sentinel=this._sentinel;if(entry._prev&&entry._next){unlink(entry)}entry._next=sentinel._next;sentinel._next._prev=entry;sentinel._next=entry;entry._prev=sentinel};List.prototype.toString=function(){var strs=[],sentinel=this._sentinel,curr=sentinel._prev;while(curr!==sentinel){strs.push(JSON.stringify(curr,filterOutLinks));curr=curr._prev}return"["+strs.join(", ")+"]"};function unlink(entry){entry._prev._next=entry._next;entry._next._prev=entry._prev;delete entry._next;delete entry._prev}function filterOutLinks(k,v){if(k!=="_next"&&k!=="_prev"){return v}}},{}],6:[function(require,module,exports){var _=require("./lodash"),util=require("./util"),Graph=require("./graphlib").Graph;module.exports={debugOrdering:debugOrdering};function debugOrdering(g){var layerMatrix=util.buildLayerMatrix(g);var h=new Graph({compound:true,multigraph:true}).setGraph({});_.each(g.nodes(),function(v){h.setNode(v,{label:v});h.setParent(v,"layer"+g.node(v).rank)});_.each(g.edges(),function(e){h.setEdge(e.v,e.w,{},e.name)});_.each(layerMatrix,function(layer,i){var layerV="layer"+i;h.setNode(layerV,{rank:"same"});_.reduce(layer,function(u,v){h.setEdge(u,v,{style:"invis"});return v})});return h}},{"./graphlib":7,"./lodash":10,"./util":29}],7:[function(require,module,exports){var graphlib;if(typeof require==="function"){try{graphlib=require("graphlib")}catch(e){}}if(!graphlib){graphlib=window.graphlib}module.exports=graphlib},{graphlib:undefined}],8:[function(require,module,exports){var _=require("./lodash"),Graph=require("./graphlib").Graph,List=require("./data/list");module.exports=greedyFAS;var DEFAULT_WEIGHT_FN=_.constant(1);function greedyFAS(g,weightFn){if(g.nodeCount()<=1){return[]}var state=buildState(g,weightFn||DEFAULT_WEIGHT_FN);var results=doGreedyFAS(state.graph,state.buckets,state.zeroIdx);return _.flatten(_.map(results,function(e){return g.outEdges(e.v,e.w)}),true)}function doGreedyFAS(g,buckets,zeroIdx){var results=[],sources=buckets[buckets.length-1],sinks=buckets[0];var entry;while(g.nodeCount()){while(entry=sinks.dequeue()){removeNode(g,buckets,zeroIdx,entry)}while(entry=sources.dequeue()){removeNode(g,buckets,zeroIdx,entry)}if(g.nodeCount()){for(var i=buckets.length-2;i>0;--i){entry=buckets[i].dequeue();if(entry){results=results.concat(removeNode(g,buckets,zeroIdx,entry,true));break}}}}return results}function removeNode(g,buckets,zeroIdx,entry,collectPredecessors){var results=collectPredecessors?[]:undefined;_.each(g.inEdges(entry.v),function(edge){var weight=g.edge(edge),uEntry=g.node(edge.v);if(collectPredecessors){results.push({v:edge.v,w:edge.w})}uEntry.out-=weight;assignBucket(buckets,zeroIdx,uEntry)});_.each(g.outEdges(entry.v),function(edge){var weight=g.edge(edge),w=edge.w,wEntry=g.node(w);wEntry["in"]-=weight;assignBucket(buckets,zeroIdx,wEntry)});g.removeNode(entry.v);return results}function buildState(g,weightFn){var fasGraph=new Graph,maxIn=0,maxOut=0;_.each(g.nodes(),function(v){fasGraph.setNode(v,{v:v,"in":0,out:0})});_.each(g.edges(),function(e){var prevWeight=fasGraph.edge(e.v,e.w)||0,weight=weightFn(e),edgeWeight=prevWeight+weight;fasGraph.setEdge(e.v,e.w,edgeWeight);maxOut=Math.max(maxOut,fasGraph.node(e.v).out+=weight);maxIn=Math.max(maxIn,fasGraph.node(e.w)["in"]+=weight)});var buckets=_.range(maxOut+maxIn+3).map(function(){return new List});var zeroIdx=maxIn+1;_.each(fasGraph.nodes(),function(v){assignBucket(buckets,zeroIdx,fasGraph.node(v))});return{graph:fasGraph,buckets:buckets,zeroIdx:zeroIdx}}function assignBucket(buckets,zeroIdx,entry){if(!entry.out){buckets[0].enqueue(entry)}else if(!entry["in"]){buckets[buckets.length-1].enqueue(entry)}else{buckets[entry.out-entry["in"]+zeroIdx].enqueue(entry)}}},{"./data/list":5,"./graphlib":7,"./lodash":10}],9:[function(require,module,exports){"use strict";var _=require("./lodash"),acyclic=require("./acyclic"),normalize=require("./normalize"),rank=require("./rank"),normalizeRanks=require("./util").normalizeRanks,parentDummyChains=require("./parent-dummy-chains"),removeEmptyRanks=require("./util").removeEmptyRanks,nestingGraph=require("./nesting-graph"),addBorderSegments=require("./add-border-segments"),coordinateSystem=require("./coordinate-system"),order=require("./order"),position=require("./position"),util=require("./util"),Graph=require("./graphlib").Graph;module.exports=layout;function layout(g,opts){var time=opts&&opts.debugTiming?util.time:util.notime;time("layout",function(){var layoutGraph=time("  buildLayoutGraph",function(){return buildLayoutGraph(g)});time("  runLayout",function(){runLayout(layoutGraph,time)});time("  updateInputGraph",function(){updateInputGraph(g,layoutGraph)})})}function runLayout(g,time){time("    makeSpaceForEdgeLabels",function(){makeSpaceForEdgeLabels(g)});time("    removeSelfEdges",function(){removeSelfEdges(g)});time("    acyclic",function(){acyclic.run(g)});time("    nestingGraph.run",function(){nestingGraph.run(g)});time("    rank",function(){rank(util.asNonCompoundGraph(g))});time("    injectEdgeLabelProxies",function(){injectEdgeLabelProxies(g)});time("    removeEmptyRanks",function(){removeEmptyRanks(g)});time("    nestingGraph.cleanup",function(){nestingGraph.cleanup(g)});time("    normalizeRanks",function(){normalizeRanks(g)});time("    assignRankMinMax",function(){assignRankMinMax(g)});time("    removeEdgeLabelProxies",function(){removeEdgeLabelProxies(g)});time("    normalize.run",function(){normalize.run(g)});time("    parentDummyChains",function(){parentDummyChains(g)});time("    addBorderSegments",function(){addBorderSegments(g)});time("    order",function(){order(g)});time("    insertSelfEdges",function(){insertSelfEdges(g)});time("    adjustCoordinateSystem",function(){coordinateSystem.adjust(g)});time("    position",function(){position(g)});time("    positionSelfEdges",function(){positionSelfEdges(g)});time("    removeBorderNodes",function(){removeBorderNodes(g)});time("    normalize.undo",function(){normalize.undo(g)});time("    fixupEdgeLabelCoords",function(){fixupEdgeLabelCoords(g)});time("    undoCoordinateSystem",function(){coordinateSystem.undo(g)});time("    translateGraph",function(){translateGraph(g)});time("    assignNodeIntersects",function(){assignNodeIntersects(g)});time("    reversePoints",function(){reversePointsForReversedEdges(g)});time("    acyclic.undo",function(){acyclic.undo(g)})}function updateInputGraph(inputGraph,layoutGraph){_.each(inputGraph.nodes(),function(v){var inputLabel=inputGraph.node(v),layoutLabel=layoutGraph.node(v);if(inputLabel){inputLabel.x=layoutLabel.x;inputLabel.y=layoutLabel.y;if(layoutGraph.children(v).length){inputLabel.width=layoutLabel.width;inputLabel.height=layoutLabel.height}}});_.each(inputGraph.edges(),function(e){var inputLabel=inputGraph.edge(e),layoutLabel=layoutGraph.edge(e);inputLabel.points=layoutLabel.points;if(_.has(layoutLabel,"x")){inputLabel.x=layoutLabel.x;inputLabel.y=layoutLabel.y}});inputGraph.graph().width=layoutGraph.graph().width;inputGraph.graph().height=layoutGraph.graph().height}var graphNumAttrs=["nodesep","edgesep","ranksep","marginx","marginy"],graphDefaults={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},graphAttrs=["acyclicer","ranker","rankdir","align"],nodeNumAttrs=["width","height"],nodeDefaults={width:0,height:0},edgeNumAttrs=["minlen","weight","width","height","labeloffset"],edgeDefaults={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},edgeAttrs=["labelpos"];function buildLayoutGraph(inputGraph){var g=new Graph({multigraph:true,compound:true}),graph=canonicalize(inputGraph.graph());g.setGraph(_.merge({},graphDefaults,selectNumberAttrs(graph,graphNumAttrs),_.pick(graph,graphAttrs)));_.each(inputGraph.nodes(),function(v){var node=canonicalize(inputGraph.node(v));g.setNode(v,_.defaults(selectNumberAttrs(node,nodeNumAttrs),nodeDefaults));g.setParent(v,inputGraph.parent(v))});_.each(inputGraph.edges(),function(e){var edge=canonicalize(inputGraph.edge(e));g.setEdge(e,_.merge({},edgeDefaults,selectNumberAttrs(edge,edgeNumAttrs),_.pick(edge,edgeAttrs)))});return g}function makeSpaceForEdgeLabels(g){var graph=g.graph();graph.ranksep/=2;_.each(g.edges(),function(e){var edge=g.edge(e);edge.minlen*=2;if(edge.labelpos.toLowerCase()!=="c"){if(graph.rankdir==="TB"||graph.rankdir==="BT"){edge.width+=edge.labeloffset}else{edge.height+=edge.labeloffset}}})}function injectEdgeLabelProxies(g){_.each(g.edges(),function(e){var edge=g.edge(e);if(edge.width&&edge.height){var v=g.node(e.v),w=g.node(e.w),label={rank:(w.rank-v.rank)/2+v.rank,e:e};util.addDummyNode(g,"edge-proxy",label,"_ep")}})}function assignRankMinMax(g){var maxRank=0;_.each(g.nodes(),function(v){var node=g.node(v);if(node.borderTop){node.minRank=g.node(node.borderTop).rank;node.maxRank=g.node(node.borderBottom).rank;maxRank=_.max(maxRank,node.maxRank)}});g.graph().maxRank=maxRank}function removeEdgeLabelProxies(g){_.each(g.nodes(),function(v){var node=g.node(v);if(node.dummy==="edge-proxy"){g.edge(node.e).labelRank=node.rank;g.removeNode(v)}})}function translateGraph(g){var minX=Number.POSITIVE_INFINITY,maxX=0,minY=Number.POSITIVE_INFINITY,maxY=0,graphLabel=g.graph(),marginX=graphLabel.marginx||0,marginY=graphLabel.marginy||0;function getExtremes(attrs){var x=attrs.x,y=attrs.y,w=attrs.width,h=attrs.height;minX=Math.min(minX,x-w/2);maxX=Math.max(maxX,x+w/2);minY=Math.min(minY,y-h/2);maxY=Math.max(maxY,y+h/2)}_.each(g.nodes(),function(v){getExtremes(g.node(v))});_.each(g.edges(),function(e){var edge=g.edge(e);if(_.has(edge,"x")){getExtremes(edge)}});minX-=marginX;minY-=marginY;_.each(g.nodes(),function(v){var node=g.node(v);node.x-=minX;node.y-=minY});_.each(g.edges(),function(e){var edge=g.edge(e);_.each(edge.points,function(p){p.x-=minX;p.y-=minY});if(_.has(edge,"x")){edge.x-=minX}if(_.has(edge,"y")){edge.y-=minY}});graphLabel.width=maxX-minX+marginX;graphLabel.height=maxY-minY+marginY}function assignNodeIntersects(g){_.each(g.edges(),function(e){var edge=g.edge(e),nodeV=g.node(e.v),nodeW=g.node(e.w),p1,p2;if(!edge.points){edge.points=[];p1=nodeW;p2=nodeV}else{p1=edge.points[0];p2=edge.points[edge.points.length-1]}edge.points.unshift(util.intersectRect(nodeV,p1));edge.points.push(util.intersectRect(nodeW,p2))})}function fixupEdgeLabelCoords(g){_.each(g.edges(),function(e){var edge=g.edge(e);if(_.has(edge,"x")){if(edge.labelpos==="l"||edge.labelpos==="r"){edge.width-=edge.labeloffset}switch(edge.labelpos){case"l":edge.x-=edge.width/2+edge.labeloffset;break;case"r":edge.x+=edge.width/2+edge.labeloffset;break}}})}function reversePointsForReversedEdges(g){_.each(g.edges(),function(e){var edge=g.edge(e);if(edge.reversed){edge.points.reverse()}})}function removeBorderNodes(g){_.each(g.nodes(),function(v){if(g.children(v).length){var node=g.node(v),t=g.node(node.borderTop),b=g.node(node.borderBottom),l=g.node(_.last(node.borderLeft)),r=g.node(_.last(node.borderRight));node.width=Math.abs(r.x-l.x);node.height=Math.abs(b.y-t.y);node.x=l.x+node.width/2;node.y=t.y+node.height/2}});_.each(g.nodes(),function(v){if(g.node(v).dummy==="border"){g.removeNode(v)}})}function removeSelfEdges(g){_.each(g.edges(),function(e){if(e.v===e.w){var node=g.node(e.v);if(!node.selfEdges){node.selfEdges=[]}node.selfEdges.push({e:e,label:g.edge(e)});g.removeEdge(e)}})}function insertSelfEdges(g){var layers=util.buildLayerMatrix(g);_.each(layers,function(layer){var orderShift=0;_.each(layer,function(v,i){var node=g.node(v);node.order=i+orderShift;_.each(node.selfEdges,function(selfEdge){util.addDummyNode(g,"selfedge",{width:selfEdge.label.width,height:selfEdge.label.height,rank:node.rank,order:i+ ++orderShift,e:selfEdge.e,label:selfEdge.label},"_se")});delete node.selfEdges})})}function positionSelfEdges(g){_.each(g.nodes(),function(v){var node=g.node(v);if(node.dummy==="selfedge"){var selfNode=g.node(node.e.v),x=selfNode.x+selfNode.width/2,y=selfNode.y,dx=node.x-x,dy=selfNode.height/2;g.setEdge(node.e,node.label);g.removeNode(v);node.label.points=[{x:x+2*dx/3,y:y-dy},{x:x+5*dx/6,y:y-dy},{x:x+dx,y:y},{x:x+5*dx/6,y:y+dy},{x:x+2*dx/3,y:y+dy}];node.label.x=node.x;node.label.y=node.y}})}function selectNumberAttrs(obj,attrs){return _.mapValues(_.pick(obj,attrs),Number)}function canonicalize(attrs){var newAttrs={};_.each(attrs,function(v,k){newAttrs[k.toLowerCase()]=v});return newAttrs}},{"./acyclic":2,"./add-border-segments":3,"./coordinate-system":4,"./graphlib":7,"./lodash":10,"./nesting-graph":11,"./normalize":12,"./order":17,"./parent-dummy-chains":22,"./position":24,"./rank":26,"./util":29}],10:[function(require,module,exports){var lodash;if(typeof require==="function"){try{lodash=require("lodash")}catch(e){}}if(!lodash){lodash=window._}module.exports=lodash},{lodash:undefined}],11:[function(require,module,exports){var _=require("./lodash"),util=require("./util");module.exports={run:run,cleanup:cleanup};function run(g){var root=util.addDummyNode(g,"root",{},"_root"),depths=treeDepths(g),height=_.max(depths)-1,nodeSep=2*height+1;g.graph().nestingRoot=root;_.each(g.edges(),function(e){g.edge(e).minlen*=nodeSep});var weight=sumWeights(g)+1;_.each(g.children(),function(child){dfs(g,root,nodeSep,weight,height,depths,child)});g.graph().nodeRankFactor=nodeSep}function dfs(g,root,nodeSep,weight,height,depths,v){var children=g.children(v);if(!children.length){if(v!==root){g.setEdge(root,v,{weight:0,minlen:nodeSep})}return}var top=util.addBorderNode(g,"_bt"),bottom=util.addBorderNode(g,"_bb"),label=g.node(v);g.setParent(top,v);label.borderTop=top;g.setParent(bottom,v);label.borderBottom=bottom;_.each(children,function(child){dfs(g,root,nodeSep,weight,height,depths,child);var childNode=g.node(child),childTop=childNode.borderTop?childNode.borderTop:child,childBottom=childNode.borderBottom?childNode.borderBottom:child,thisWeight=childNode.borderTop?weight:2*weight,minlen=childTop!==childBottom?1:height-depths[v]+1;g.setEdge(top,childTop,{weight:thisWeight,minlen:minlen,nestingEdge:true});g.setEdge(childBottom,bottom,{weight:thisWeight,minlen:minlen,nestingEdge:true})});if(!g.parent(v)){g.setEdge(root,top,{weight:0,minlen:height+depths[v]})}}function treeDepths(g){var depths={};function dfs(v,depth){var children=g.children(v);if(children&&children.length){_.each(children,function(child){dfs(child,depth+1)})}depths[v]=depth}_.each(g.children(),function(v){dfs(v,1)});return depths}function sumWeights(g){return _.reduce(g.edges(),function(acc,e){return acc+g.edge(e).weight},0)}function cleanup(g){var graphLabel=g.graph();g.removeNode(graphLabel.nestingRoot);delete graphLabel.nestingRoot;_.each(g.edges(),function(e){var edge=g.edge(e);if(edge.nestingEdge){g.removeEdge(e)}})}},{"./lodash":10,"./util":29}],12:[function(require,module,exports){"use strict";var _=require("./lodash"),util=require("./util");module.exports={run:run,undo:undo};function run(g){g.graph().dummyChains=[];_.each(g.edges(),function(edge){normalizeEdge(g,edge)})}function normalizeEdge(g,e){var v=e.v,vRank=g.node(v).rank,w=e.w,wRank=g.node(w).rank,name=e.name,edgeLabel=g.edge(e),labelRank=edgeLabel.labelRank;if(wRank===vRank+1)return;g.removeEdge(e);var dummy,attrs,i;for(i=0,++vRank;vRank<wRank;++i,++vRank){edgeLabel.points=[];attrs={width:0,height:0,edgeLabel:edgeLabel,edgeObj:e,rank:vRank};dummy=util.addDummyNode(g,"edge",attrs,"_d");if(vRank===labelRank){attrs.width=edgeLabel.width;attrs.height=edgeLabel.height;attrs.dummy="edge-label";attrs.labelpos=edgeLabel.labelpos}g.setEdge(v,dummy,{weight:edgeLabel.weight},name);if(i===0){g.graph().dummyChains.push(dummy)}v=dummy}g.setEdge(v,w,{weight:edgeLabel.weight},name)}function undo(g){_.each(g.graph().dummyChains,function(v){var node=g.node(v),origLabel=node.edgeLabel,w;g.setEdge(node.edgeObj,origLabel);while(node.dummy){w=g.successors(v)[0];g.removeNode(v);origLabel.points.push({x:node.x,y:node.y});if(node.dummy==="edge-label"){origLabel.x=node.x;origLabel.y=node.y;origLabel.width=node.width;origLabel.height=node.height}v=w;node=g.node(v)}})}},{"./lodash":10,"./util":29}],13:[function(require,module,exports){var _=require("../lodash");module.exports=addSubgraphConstraints;function addSubgraphConstraints(g,cg,vs){var prev={},rootPrev;_.each(vs,function(v){var child=g.parent(v),parent,prevChild;while(child){parent=g.parent(child);if(parent){prevChild=prev[parent];prev[parent]=child}else{prevChild=rootPrev;rootPrev=child}if(prevChild&&prevChild!==child){cg.setEdge(prevChild,child);return}child=parent}})}},{"../lodash":10}],14:[function(require,module,exports){var _=require("../lodash");module.exports=barycenter;function barycenter(g,movable){return _.map(movable,function(v){var inV=g.inEdges(v);if(!inV.length){return{v:v}}else{var result=_.reduce(inV,function(acc,e){var edge=g.edge(e),nodeU=g.node(e.v);return{sum:acc.sum+edge.weight*nodeU.order,weight:acc.weight+edge.weight}},{sum:0,weight:0});return{v:v,barycenter:result.sum/result.weight,weight:result.weight}}})}},{"../lodash":10}],15:[function(require,module,exports){var _=require("../lodash"),Graph=require("../graphlib").Graph;module.exports=buildLayerGraph;function buildLayerGraph(g,rank,relationship){var root=createRootNode(g),result=new Graph({compound:true}).setGraph({root:root}).setDefaultNodeLabel(function(v){return g.node(v)});_.each(g.nodes(),function(v){var node=g.node(v),parent=g.parent(v);if(node.rank===rank||node.minRank<=rank&&rank<=node.maxRank){result.setNode(v);result.setParent(v,parent||root);_.each(g[relationship](v),function(e){var u=e.v===v?e.w:e.v,edge=result.edge(u,v),weight=!_.isUndefined(edge)?edge.weight:0;result.setEdge(u,v,{weight:g.edge(e).weight+weight})});if(_.has(node,"minRank")){result.setNode(v,{borderLeft:node.borderLeft[rank],borderRight:node.borderRight[rank]})}}});return result}function createRootNode(g){var v;while(g.hasNode(v=_.uniqueId("_root")));return v}},{"../graphlib":7,"../lodash":10}],16:[function(require,module,exports){"use strict";var _=require("../lodash");module.exports=crossCount;function crossCount(g,layering){var cc=0;for(var i=1;i<layering.length;++i){cc+=twoLayerCrossCount(g,layering[i-1],layering[i])}return cc}function twoLayerCrossCount(g,northLayer,southLayer){var southPos=_.zipObject(southLayer,_.map(southLayer,function(v,i){return i}));var southEntries=_.flatten(_.map(northLayer,function(v){return _.chain(g.outEdges(v)).map(function(e){return{pos:southPos[e.w],weight:g.edge(e).weight}}).sortBy("pos").value()}),true);var firstIndex=1;while(firstIndex<southLayer.length)firstIndex<<=1;var treeSize=2*firstIndex-1;firstIndex-=1;var tree=_.map(new Array(treeSize),function(){return 0});var cc=0;_.each(southEntries.forEach(function(entry){var index=entry.pos+firstIndex;tree[index]+=entry.weight;var weightSum=0;while(index>0){if(index%2){weightSum+=tree[index+1]}index=index-1>>1;tree[index]+=entry.weight}cc+=entry.weight*weightSum}));return cc}},{"../lodash":10}],17:[function(require,module,exports){"use strict";var _=require("../lodash"),initOrder=require("./init-order"),crossCount=require("./cross-count"),sortSubgraph=require("./sort-subgraph"),buildLayerGraph=require("./build-layer-graph"),addSubgraphConstraints=require("./add-subgraph-constraints"),Graph=require("../graphlib").Graph,util=require("../util");module.exports=order;function order(g){var maxRank=util.maxRank(g),downLayerGraphs=buildLayerGraphs(g,_.range(1,maxRank+1),"inEdges"),upLayerGraphs=buildLayerGraphs(g,_.range(maxRank-1,-1,-1),"outEdges");var layering=initOrder(g);assignOrder(g,layering);var bestCC=Number.POSITIVE_INFINITY,best;for(var i=0,lastBest=0;lastBest<4;++i,++lastBest){sweepLayerGraphs(i%2?downLayerGraphs:upLayerGraphs,i%4>=2);layering=util.buildLayerMatrix(g);var cc=crossCount(g,layering);if(cc<bestCC){lastBest=0;best=_.cloneDeep(layering);bestCC=cc}}assignOrder(g,best)}function buildLayerGraphs(g,ranks,relationship){return _.map(ranks,function(rank){return buildLayerGraph(g,rank,relationship)})}function sweepLayerGraphs(layerGraphs,biasRight){var cg=new Graph;_.each(layerGraphs,function(lg){var root=lg.graph().root;var sorted=sortSubgraph(lg,root,cg,biasRight);_.each(sorted.vs,function(v,i){lg.node(v).order=i});addSubgraphConstraints(lg,cg,sorted.vs)})}function assignOrder(g,layering){_.each(layering,function(layer){_.each(layer,function(v,i){g.node(v).order=i})})}},{"../graphlib":7,"../lodash":10,"../util":29,"./add-subgraph-constraints":13,"./build-layer-graph":15,"./cross-count":16,"./init-order":18,"./sort-subgraph":20}],18:[function(require,module,exports){"use strict";var _=require("../lodash");module.exports=initOrder;function initOrder(g){var visited={},simpleNodes=_.filter(g.nodes(),function(v){return!g.children(v).length}),maxRank=_.max(_.map(simpleNodes,function(v){return g.node(v).rank})),layers=_.map(_.range(maxRank+1),function(){return[]});function dfs(v){if(_.has(visited,v))return;visited[v]=true;var node=g.node(v);layers[node.rank].push(v);_.each(g.successors(v),dfs)}var orderedVs=_.sortBy(simpleNodes,function(v){return g.node(v).rank});_.each(orderedVs,dfs);return layers}},{"../lodash":10}],19:[function(require,module,exports){"use strict";var _=require("../lodash");module.exports=resolveConflicts;function resolveConflicts(entries,cg){var mappedEntries={};_.each(entries,function(entry,i){var tmp=mappedEntries[entry.v]={indegree:0,"in":[],out:[],vs:[entry.v],i:i};if(!_.isUndefined(entry.barycenter)){tmp.barycenter=entry.barycenter;tmp.weight=entry.weight}});_.each(cg.edges(),function(e){var entryV=mappedEntries[e.v],entryW=mappedEntries[e.w];if(!_.isUndefined(entryV)&&!_.isUndefined(entryW)){entryW.indegree++;entryV.out.push(mappedEntries[e.w])}});var sourceSet=_.filter(mappedEntries,function(entry){return!entry.indegree});return doResolveConflicts(sourceSet)}function doResolveConflicts(sourceSet){var entries=[];function handleIn(vEntry){return function(uEntry){if(uEntry.merged){return}if(_.isUndefined(uEntry.barycenter)||_.isUndefined(vEntry.barycenter)||uEntry.barycenter>=vEntry.barycenter){mergeEntries(vEntry,uEntry)}}}function handleOut(vEntry){return function(wEntry){wEntry["in"].push(vEntry);if(--wEntry.indegree===0){sourceSet.push(wEntry)}}}while(sourceSet.length){var entry=sourceSet.pop();entries.push(entry);_.each(entry["in"].reverse(),handleIn(entry));_.each(entry.out,handleOut(entry))}return _.chain(entries).filter(function(entry){return!entry.merged}).map(function(entry){return _.pick(entry,["vs","i","barycenter","weight"])}).value()}function mergeEntries(target,source){var sum=0,weight=0;if(target.weight){sum+=target.barycenter*target.weight;weight+=target.weight}if(source.weight){sum+=source.barycenter*source.weight;weight+=source.weight}target.vs=source.vs.concat(target.vs);target.barycenter=sum/weight;target.weight=weight;target.i=Math.min(source.i,target.i);source.merged=true}},{"../lodash":10}],20:[function(require,module,exports){var _=require("../lodash"),barycenter=require("./barycenter"),resolveConflicts=require("./resolve-conflicts"),sort=require("./sort");module.exports=sortSubgraph;function sortSubgraph(g,v,cg,biasRight){var movable=g.children(v),node=g.node(v),bl=node?node.borderLeft:undefined,br=node?node.borderRight:undefined,subgraphs={};if(bl){movable=_.filter(movable,function(w){return w!==bl&&w!==br})}var barycenters=barycenter(g,movable);_.each(barycenters,function(entry){if(g.children(entry.v).length){var subgraphResult=sortSubgraph(g,entry.v,cg,biasRight);subgraphs[entry.v]=subgraphResult;if(_.has(subgraphResult,"barycenter")){mergeBarycenters(entry,subgraphResult)}}});var entries=resolveConflicts(barycenters,cg);expandSubgraphs(entries,subgraphs);var result=sort(entries,biasRight);if(bl){result.vs=_.flatten([bl,result.vs,br],true);if(g.predecessors(bl).length){var blPred=g.node(g.predecessors(bl)[0]),brPred=g.node(g.predecessors(br)[0]);if(!_.has(result,"barycenter")){result.barycenter=0;result.weight=0}result.barycenter=(result.barycenter*result.weight+blPred.order+brPred.order)/(result.weight+2);result.weight+=2}}return result}function expandSubgraphs(entries,subgraphs){_.each(entries,function(entry){entry.vs=_.flatten(entry.vs.map(function(v){if(subgraphs[v]){return subgraphs[v].vs}return v}),true)})}function mergeBarycenters(target,other){if(!_.isUndefined(target.barycenter)){target.barycenter=(target.barycenter*target.weight+other.barycenter*other.weight)/(target.weight+other.weight);target.weight+=other.weight}else{target.barycenter=other.barycenter;target.weight=other.weight}}},{"../lodash":10,"./barycenter":14,"./resolve-conflicts":19,"./sort":21}],21:[function(require,module,exports){var _=require("../lodash"),util=require("../util");module.exports=sort;function sort(entries,biasRight){var parts=util.partition(entries,function(entry){return _.has(entry,"barycenter")});var sortable=parts.lhs,unsortable=_.sortBy(parts.rhs,function(entry){return-entry.i}),vs=[],sum=0,weight=0,vsIndex=0;sortable.sort(compareWithBias(!!biasRight));vsIndex=consumeUnsortable(vs,unsortable,vsIndex);_.each(sortable,function(entry){vsIndex+=entry.vs.length;vs.push(entry.vs);sum+=entry.barycenter*entry.weight;weight+=entry.weight;vsIndex=consumeUnsortable(vs,unsortable,vsIndex)});var result={vs:_.flatten(vs,true)};if(weight){result.barycenter=sum/weight;result.weight=weight}return result}function consumeUnsortable(vs,unsortable,index){var last;while(unsortable.length&&(last=_.last(unsortable)).i<=index){unsortable.pop();vs.push(last.vs);index++}return index}function compareWithBias(bias){return function(entryV,entryW){if(entryV.barycenter<entryW.barycenter){return-1}else if(entryV.barycenter>entryW.barycenter){return 1}return!bias?entryV.i-entryW.i:entryW.i-entryV.i}}},{"../lodash":10,"../util":29}],22:[function(require,module,exports){var _=require("./lodash");module.exports=parentDummyChains;function parentDummyChains(g){var postorderNums=postorder(g);_.each(g.graph().dummyChains,function(v){var node=g.node(v),edgeObj=node.edgeObj,pathData=findPath(g,postorderNums,edgeObj.v,edgeObj.w),path=pathData.path,lca=pathData.lca,pathIdx=0,pathV=path[pathIdx],ascending=true;while(v!==edgeObj.w){node=g.node(v);if(ascending){while((pathV=path[pathIdx])!==lca&&g.node(pathV).maxRank<node.rank){pathIdx++}if(pathV===lca){ascending=false}}if(!ascending){while(pathIdx<path.length-1&&g.node(pathV=path[pathIdx+1]).minRank<=node.rank){pathIdx++}pathV=path[pathIdx]}g.setParent(v,pathV);v=g.successors(v)[0]}})}function findPath(g,postorderNums,v,w){var vPath=[],wPath=[],low=Math.min(postorderNums[v].low,postorderNums[w].low),lim=Math.max(postorderNums[v].lim,postorderNums[w].lim),parent,lca;parent=v;do{parent=g.parent(parent);vPath.push(parent)}while(parent&&(postorderNums[parent].low>low||lim>postorderNums[parent].lim));lca=parent;parent=w;while((parent=g.parent(parent))!==lca){wPath.push(parent)}return{path:vPath.concat(wPath.reverse()),lca:lca}}function postorder(g){var result={},lim=0;function dfs(v){var low=lim;_.each(g.children(v),dfs);result[v]={low:low,lim:lim++}}_.each(g.children(),dfs);return result}},{"./lodash":10}],23:[function(require,module,exports){"use strict";var _=require("../lodash"),Graph=require("../graphlib").Graph,util=require("../util");module.exports={positionX:positionX,findType1Conflicts:findType1Conflicts,findType2Conflicts:findType2Conflicts,addConflict:addConflict,hasConflict:hasConflict,verticalAlignment:verticalAlignment,horizontalCompaction:horizontalCompaction,alignCoordinates:alignCoordinates,findSmallestWidthAlignment:findSmallestWidthAlignment,balance:balance};function findType1Conflicts(g,layering){var conflicts={};function visitLayer(prevLayer,layer){var k0=0,scanPos=0,prevLayerLength=prevLayer.length,lastNode=_.last(layer);_.each(layer,function(v,i){var w=findOtherInnerSegmentNode(g,v),k1=w?g.node(w).order:prevLayerLength;if(w||v===lastNode){_.each(layer.slice(scanPos,i+1),function(scanNode){_.each(g.predecessors(scanNode),function(u){var uLabel=g.node(u),uPos=uLabel.order;
if((uPos<k0||k1<uPos)&&!(uLabel.dummy&&g.node(scanNode).dummy)){addConflict(conflicts,u,scanNode)}})});scanPos=i+1;k0=k1}});return layer}_.reduce(layering,visitLayer);return conflicts}function findType2Conflicts(g,layering){var conflicts={};function scan(south,southPos,southEnd,prevNorthBorder,nextNorthBorder){var v;_.each(_.range(southPos,southEnd),function(i){v=south[i];if(g.node(v).dummy){_.each(g.predecessors(v),function(u){var uNode=g.node(u);if(uNode.dummy&&(uNode.order<prevNorthBorder||uNode.order>nextNorthBorder)){addConflict(conflicts,u,v)}})}})}function visitLayer(north,south){var prevNorthPos=-1,nextNorthPos,southPos=0;_.each(south,function(v,southLookahead){if(g.node(v).dummy==="border"){var predecessors=g.predecessors(v);if(predecessors.length){nextNorthPos=g.node(predecessors[0]).order;scan(south,southPos,southLookahead,prevNorthPos,nextNorthPos);southPos=southLookahead;prevNorthPos=nextNorthPos}}scan(south,southPos,south.length,nextNorthPos,north.length)});return south}_.reduce(layering,visitLayer);return conflicts}function findOtherInnerSegmentNode(g,v){if(g.node(v).dummy){return _.find(g.predecessors(v),function(u){return g.node(u).dummy})}}function addConflict(conflicts,v,w){if(v>w){var tmp=v;v=w;w=tmp}var conflictsV=conflicts[v];if(!conflictsV){conflicts[v]=conflictsV={}}conflictsV[w]=true}function hasConflict(conflicts,v,w){if(v>w){var tmp=v;v=w;w=tmp}return _.has(conflicts[v],w)}function verticalAlignment(g,layering,conflicts,neighborFn){var root={},align={},pos={};_.each(layering,function(layer){_.each(layer,function(v,order){root[v]=v;align[v]=v;pos[v]=order})});_.each(layering,function(layer){var prevIdx=-1;_.each(layer,function(v){var ws=neighborFn(v);if(ws.length){ws=_.sortBy(ws,function(w){return pos[w]});var mp=(ws.length-1)/2;for(var i=Math.floor(mp),il=Math.ceil(mp);i<=il;++i){var w=ws[i];if(align[v]===v&&prevIdx<pos[w]&&!hasConflict(conflicts,v,w)){align[w]=v;align[v]=root[v]=root[w];prevIdx=pos[w]}}}})});return{root:root,align:align}}function horizontalCompaction(g,layering,root,align,reverseSep){var xs={},blockG=buildBlockGraph(g,layering,root,reverseSep);var visited={};function pass1(v){if(!_.has(visited,v)){visited[v]=true;xs[v]=_.reduce(blockG.inEdges(v),function(max,e){pass1(e.v);return Math.max(max,xs[e.v]+blockG.edge(e))},0)}}_.each(blockG.nodes(),pass1);var borderType=reverseSep?"borderLeft":"borderRight";function pass2(v){if(visited[v]!==2){visited[v]++;var node=g.node(v);var min=_.reduce(blockG.outEdges(v),function(min,e){pass2(e.w);return Math.min(min,xs[e.w]-blockG.edge(e))},Number.POSITIVE_INFINITY);if(min!==Number.POSITIVE_INFINITY&&node.borderType!==borderType){xs[v]=Math.max(xs[v],min)}}}_.each(blockG.nodes(),pass2);_.each(align,function(v){xs[v]=xs[root[v]]});return xs}function buildBlockGraph(g,layering,root,reverseSep){var blockGraph=new Graph,graphLabel=g.graph(),sepFn=sep(graphLabel.nodesep,graphLabel.edgesep,reverseSep);_.each(layering,function(layer){var u;_.each(layer,function(v){var vRoot=root[v];blockGraph.setNode(vRoot);if(u){var uRoot=root[u],prevMax=blockGraph.edge(uRoot,vRoot);blockGraph.setEdge(uRoot,vRoot,Math.max(sepFn(g,v,u),prevMax||0))}u=v})});return blockGraph}function findSmallestWidthAlignment(g,xss){return _.min(xss,function(xs){var min=_.min(xs,function(x,v){return x-width(g,v)/2}),max=_.max(xs,function(x,v){return x+width(g,v)/2});return max-min})}function alignCoordinates(xss,alignTo){var alignToMin=_.min(alignTo),alignToMax=_.max(alignTo);_.each(["u","d"],function(vert){_.each(["l","r"],function(horiz){var alignment=vert+horiz,xs=xss[alignment],delta;if(xs===alignTo)return;delta=horiz==="l"?alignToMin-_.min(xs):alignToMax-_.max(xs);if(delta){xss[alignment]=_.mapValues(xs,function(x){return x+delta})}})})}function balance(xss,align){return _.mapValues(xss.ul,function(ignore,v){if(align){return xss[align.toLowerCase()][v]}else{var xs=_.sortBy(_.pluck(xss,v));return(xs[1]+xs[2])/2}})}function positionX(g){var layering=util.buildLayerMatrix(g),conflicts=_.merge(findType1Conflicts(g,layering),findType2Conflicts(g,layering));var xss={},adjustedLayering;_.each(["u","d"],function(vert){adjustedLayering=vert==="u"?layering:_.values(layering).reverse();_.each(["l","r"],function(horiz){if(horiz==="r"){adjustedLayering=_.map(adjustedLayering,function(inner){return _.values(inner).reverse()})}var neighborFn=_.bind(vert==="u"?g.predecessors:g.successors,g);var align=verticalAlignment(g,adjustedLayering,conflicts,neighborFn);var xs=horizontalCompaction(g,adjustedLayering,align.root,align.align,horiz==="r");if(horiz==="r"){xs=_.mapValues(xs,function(x){return-x})}xss[vert+horiz]=xs})});var smallestWidth=findSmallestWidthAlignment(g,xss);alignCoordinates(xss,smallestWidth);return balance(xss,g.graph().align)}function sep(nodeSep,edgeSep,reverseSep){return function(g,v,w){var vLabel=g.node(v),wLabel=g.node(w),sum=0,delta;sum+=vLabel.width/2;if(_.has(vLabel,"labelpos")){switch(vLabel.labelpos.toLowerCase()){case"l":delta=-vLabel.width/2;break;case"r":delta=vLabel.width/2;break}}if(delta){sum+=reverseSep?delta:-delta}delta=0;sum+=(vLabel.dummy?edgeSep:nodeSep)/2;sum+=(wLabel.dummy?edgeSep:nodeSep)/2;sum+=wLabel.width/2;if(_.has(wLabel,"labelpos")){switch(wLabel.labelpos.toLowerCase()){case"l":delta=wLabel.width/2;break;case"r":delta=-wLabel.width/2;break}}if(delta){sum+=reverseSep?delta:-delta}delta=0;return sum}}function width(g,v){return g.node(v).width}},{"../graphlib":7,"../lodash":10,"../util":29}],24:[function(require,module,exports){"use strict";var _=require("../lodash"),util=require("../util"),positionX=require("./bk").positionX;module.exports=position;function position(g){g=util.asNonCompoundGraph(g);positionY(g);_.each(positionX(g),function(x,v){g.node(v).x=x})}function positionY(g){var layering=util.buildLayerMatrix(g),rankSep=g.graph().ranksep,prevY=0;_.each(layering,function(layer){var maxHeight=_.max(_.map(layer,function(v){return g.node(v).height}));_.each(layer,function(v){g.node(v).y=prevY+maxHeight/2});prevY+=maxHeight+rankSep})}},{"../lodash":10,"../util":29,"./bk":23}],25:[function(require,module,exports){"use strict";var _=require("../lodash"),Graph=require("../graphlib").Graph,slack=require("./util").slack;module.exports=feasibleTree;function feasibleTree(g){var t=new Graph({directed:false});var start=g.nodes()[0],size=g.nodeCount();t.setNode(start,{});var edge,delta;while(tightTree(t,g)<size){edge=findMinSlackEdge(t,g);delta=t.hasNode(edge.v)?slack(g,edge):-slack(g,edge);shiftRanks(t,g,delta)}return t}function tightTree(t,g){function dfs(v){_.each(g.nodeEdges(v),function(e){var edgeV=e.v,w=v===edgeV?e.w:edgeV;if(!t.hasNode(w)&&!slack(g,e)){t.setNode(w,{});t.setEdge(v,w,{});dfs(w)}})}_.each(t.nodes(),dfs);return t.nodeCount()}function findMinSlackEdge(t,g){return _.min(g.edges(),function(e){if(t.hasNode(e.v)!==t.hasNode(e.w)){return slack(g,e)}})}function shiftRanks(t,g,delta){_.each(t.nodes(),function(v){g.node(v).rank+=delta})}},{"../graphlib":7,"../lodash":10,"./util":28}],26:[function(require,module,exports){"use strict";var rankUtil=require("./util"),longestPath=rankUtil.longestPath,feasibleTree=require("./feasible-tree"),networkSimplex=require("./network-simplex");module.exports=rank;function rank(g){switch(g.graph().ranker){case"network-simplex":networkSimplexRanker(g);break;case"tight-tree":tightTreeRanker(g);break;case"longest-path":longestPathRanker(g);break;default:networkSimplexRanker(g)}}var longestPathRanker=longestPath;function tightTreeRanker(g){longestPath(g);feasibleTree(g)}function networkSimplexRanker(g){networkSimplex(g)}},{"./feasible-tree":25,"./network-simplex":27,"./util":28}],27:[function(require,module,exports){"use strict";var _=require("../lodash"),feasibleTree=require("./feasible-tree"),slack=require("./util").slack,initRank=require("./util").longestPath,preorder=require("../graphlib").alg.preorder,postorder=require("../graphlib").alg.postorder,simplify=require("../util").simplify;module.exports=networkSimplex;networkSimplex.initLowLimValues=initLowLimValues;networkSimplex.initCutValues=initCutValues;networkSimplex.calcCutValue=calcCutValue;networkSimplex.leaveEdge=leaveEdge;networkSimplex.enterEdge=enterEdge;networkSimplex.exchangeEdges=exchangeEdges;function networkSimplex(g){g=simplify(g);initRank(g);var t=feasibleTree(g);initLowLimValues(t);initCutValues(t,g);var e,f;while(e=leaveEdge(t)){f=enterEdge(t,g,e);exchangeEdges(t,g,e,f)}}function initCutValues(t,g){var vs=postorder(t,t.nodes());vs=vs.slice(0,vs.length-1);_.each(vs,function(v){assignCutValue(t,g,v)})}function assignCutValue(t,g,child){var childLab=t.node(child),parent=childLab.parent;t.edge(child,parent).cutvalue=calcCutValue(t,g,child)}function calcCutValue(t,g,child){var childLab=t.node(child),parent=childLab.parent,childIsTail=true,graphEdge=g.edge(child,parent),cutValue=0;if(!graphEdge){childIsTail=false;graphEdge=g.edge(parent,child)}cutValue=graphEdge.weight;_.each(g.nodeEdges(child),function(e){var isOutEdge=e.v===child,other=isOutEdge?e.w:e.v;if(other!==parent){var pointsToHead=isOutEdge===childIsTail,otherWeight=g.edge(e).weight;cutValue+=pointsToHead?otherWeight:-otherWeight;if(isTreeEdge(t,child,other)){var otherCutValue=t.edge(child,other).cutvalue;cutValue+=pointsToHead?-otherCutValue:otherCutValue}}});return cutValue}function initLowLimValues(tree,root){if(arguments.length<2){root=tree.nodes()[0]}dfsAssignLowLim(tree,{},1,root)}function dfsAssignLowLim(tree,visited,nextLim,v,parent){var low=nextLim,label=tree.node(v);visited[v]=true;_.each(tree.neighbors(v),function(w){if(!_.has(visited,w)){nextLim=dfsAssignLowLim(tree,visited,nextLim,w,v)}});label.low=low;label.lim=nextLim++;if(parent){label.parent=parent}else{delete label.parent}return nextLim}function leaveEdge(tree){return _.find(tree.edges(),function(e){return tree.edge(e).cutvalue<0})}function enterEdge(t,g,edge){var v=edge.v,w=edge.w;if(!g.hasEdge(v,w)){v=edge.w;w=edge.v}var vLabel=t.node(v),wLabel=t.node(w),tailLabel=vLabel,flip=false;if(vLabel.lim>wLabel.lim){tailLabel=wLabel;flip=true}var candidates=_.filter(g.edges(),function(edge){return flip===isDescendant(t,t.node(edge.v),tailLabel)&&flip!==isDescendant(t,t.node(edge.w),tailLabel)});return _.min(candidates,function(edge){return slack(g,edge)})}function exchangeEdges(t,g,e,f){var v=e.v,w=e.w;t.removeEdge(v,w);t.setEdge(f.v,f.w,{});initLowLimValues(t);initCutValues(t,g);updateRanks(t,g)}function updateRanks(t,g){var root=_.find(t.nodes(),function(v){return!g.node(v).parent}),vs=preorder(t,root);vs=vs.slice(1);_.each(vs,function(v){var parent=t.node(v).parent,edge=g.edge(v,parent),flipped=false;if(!edge){edge=g.edge(parent,v);flipped=true}g.node(v).rank=g.node(parent).rank+(flipped?edge.minlen:-edge.minlen)})}function isTreeEdge(tree,u,v){return tree.hasEdge(u,v)}function isDescendant(tree,vLabel,rootLabel){return rootLabel.low<=vLabel.lim&&vLabel.lim<=rootLabel.lim}},{"../graphlib":7,"../lodash":10,"../util":29,"./feasible-tree":25,"./util":28}],28:[function(require,module,exports){"use strict";var _=require("../lodash");module.exports={longestPath:longestPath,slack:slack};function longestPath(g){var visited={};function dfs(v){var label=g.node(v);if(_.has(visited,v)){return label.rank}visited[v]=true;var rank=_.min(_.map(g.outEdges(v),function(e){return dfs(e.w)-g.edge(e).minlen}));if(rank===Number.POSITIVE_INFINITY){rank=0}return label.rank=rank}_.each(g.sources(),dfs)}function slack(g,e){return g.node(e.w).rank-g.node(e.v).rank-g.edge(e).minlen}},{"../lodash":10}],29:[function(require,module,exports){"use strict";var _=require("./lodash"),Graph=require("./graphlib").Graph;module.exports={addDummyNode:addDummyNode,simplify:simplify,asNonCompoundGraph:asNonCompoundGraph,successorWeights:successorWeights,predecessorWeights:predecessorWeights,intersectRect:intersectRect,buildLayerMatrix:buildLayerMatrix,normalizeRanks:normalizeRanks,removeEmptyRanks:removeEmptyRanks,addBorderNode:addBorderNode,maxRank:maxRank,partition:partition,time:time,notime:notime};function addDummyNode(g,type,attrs,name){var v;do{v=_.uniqueId(name)}while(g.hasNode(v));attrs.dummy=type;g.setNode(v,attrs);return v}function simplify(g){var simplified=(new Graph).setGraph(g.graph());_.each(g.nodes(),function(v){simplified.setNode(v,g.node(v))});_.each(g.edges(),function(e){var simpleLabel=simplified.edge(e.v,e.w)||{weight:0,minlen:1},label=g.edge(e);simplified.setEdge(e.v,e.w,{weight:simpleLabel.weight+label.weight,minlen:Math.max(simpleLabel.minlen,label.minlen)})});return simplified}function asNonCompoundGraph(g){var simplified=new Graph({multigraph:g.isMultigraph()}).setGraph(g.graph());_.each(g.nodes(),function(v){if(!g.children(v).length){simplified.setNode(v,g.node(v))}});_.each(g.edges(),function(e){simplified.setEdge(e,g.edge(e))});return simplified}function successorWeights(g){var weightMap=_.map(g.nodes(),function(v){var sucs={};_.each(g.outEdges(v),function(e){sucs[e.w]=(sucs[e.w]||0)+g.edge(e).weight});return sucs});return _.zipObject(g.nodes(),weightMap)}function predecessorWeights(g){var weightMap=_.map(g.nodes(),function(v){var preds={};_.each(g.inEdges(v),function(e){preds[e.v]=(preds[e.v]||0)+g.edge(e).weight});return preds});return _.zipObject(g.nodes(),weightMap)}function intersectRect(rect,point){var x=rect.x;var y=rect.y;var dx=point.x-x;var dy=point.y-y;var w=rect.width/2;var h=rect.height/2;if(!dx&&!dy){throw new Error("Not possible to find intersection inside of the rectangle")}var sx,sy;if(Math.abs(dy)*w>Math.abs(dx)*h){if(dy<0){h=-h}sx=h*dx/dy;sy=h}else{if(dx<0){w=-w}sx=w;sy=w*dy/dx}return{x:x+sx,y:y+sy}}function buildLayerMatrix(g){var layering=_.map(_.range(maxRank(g)+1),function(){return[]});_.each(g.nodes(),function(v){var node=g.node(v),rank=node.rank;if(!_.isUndefined(rank)){layering[rank][node.order]=v}});return layering}function normalizeRanks(g){var min=_.min(_.map(g.nodes(),function(v){return g.node(v).rank}));_.each(g.nodes(),function(v){var node=g.node(v);if(_.has(node,"rank")){node.rank-=min}})}function removeEmptyRanks(g){var offset=_.min(_.map(g.nodes(),function(v){return g.node(v).rank}));var layers=[];_.each(g.nodes(),function(v){var rank=g.node(v).rank-offset;if(!layers[rank]){layers[rank]=[]}layers[rank].push(v)});var delta=0,nodeRankFactor=g.graph().nodeRankFactor;_.each(layers,function(vs,i){if(_.isUndefined(vs)&&i%nodeRankFactor!==0){--delta}else if(delta){_.each(vs,function(v){g.node(v).rank+=delta})}})}function addBorderNode(g,prefix,rank,order){var node={width:0,height:0};if(arguments.length>=4){node.rank=rank;node.order=order}return addDummyNode(g,"border",node,prefix)}function maxRank(g){return _.max(_.map(g.nodes(),function(v){var rank=g.node(v).rank;if(!_.isUndefined(rank)){return rank}}))}function partition(collection,fn){var result={lhs:[],rhs:[]};_.each(collection,function(value){if(fn(value)){result.lhs.push(value)}else{result.rhs.push(value)}});return result}function time(name,fn){var start=_.now();try{return fn()}finally{console.log(name+" time: "+(_.now()-start)+"ms")}}function notime(name,fn){return fn()}},{"./graphlib":7,"./lodash":10}],30:[function(require,module,exports){module.exports="0.7.4"},{}]},{},[1])(1)});
var cola;
(function (cola) {
    var Locks = (function () {
        function Locks() {
            this.locks = {};
        }
        Locks.prototype.add = function (id, x) {
            if (isNaN(x[0]) || isNaN(x[1]))
                debugger;
            this.locks[id] = x;
        };

        Locks.prototype.clear = function () {
            this.locks = {};
        };

        Locks.prototype.isEmpty = function () {
            for (var l in this.locks)
                return false;
            return true;
        };

        Locks.prototype.apply = function (f) {
            for (var l in this.locks) {
                f(l, this.locks[l]);
            }
        };
        return Locks;
    })();
    cola.Locks = Locks;

    var Descent = (function () {
        function Descent(x, D, G) {
            if (typeof G === "undefined") { G = null; }
            this.D = D;
            this.G = G;
            this.threshold = 0.0001;
            this.random = new PseudoRandom();
            this.project = null;
            this.x = x;
            this.k = x.length;
            var n = this.n = x[0].length;
            this.H = new Array(this.k);
            this.g = new Array(this.k);
            this.Hd = new Array(this.k);
            this.a = new Array(this.k);
            this.b = new Array(this.k);
            this.c = new Array(this.k);
            this.d = new Array(this.k);
            this.e = new Array(this.k);
            this.ia = new Array(this.k);
            this.ib = new Array(this.k);
            this.xtmp = new Array(this.k);
            this.locks = new Locks();
            this.minD = Number.MAX_VALUE;
            var i = n, j;
            while (i--) {
                j = n;
                while (--j > i) {
                    var d = D[i][j];
                    if (d > 0 && d < this.minD) {
                        this.minD = d;
                    }
                }
            }
            if (this.minD === Number.MAX_VALUE)
                this.minD = 1;
            i = this.k;
            while (i--) {
                this.g[i] = new Array(n);
                this.H[i] = new Array(n);
                j = n;
                while (j--) {
                    this.H[i][j] = new Array(n);
                }
                this.Hd[i] = new Array(n);
                this.a[i] = new Array(n);
                this.b[i] = new Array(n);
                this.c[i] = new Array(n);
                this.d[i] = new Array(n);
                this.e[i] = new Array(n);
                this.ia[i] = new Array(n);
                this.ib[i] = new Array(n);
                this.xtmp[i] = new Array(n);
            }
        }
        Descent.createSquareMatrix = function (n, f) {
            var M = new Array(n);
            for (var i = 0; i < n; ++i) {
                M[i] = new Array(n);
                for (var j = 0; j < n; ++j) {
                    M[i][j] = f(i, j);
                }
            }
            return M;
        };

        Descent.prototype.offsetDir = function () {
            var _this = this;
            var u = new Array(this.k);
            var l = 0;
            for (var i = 0; i < this.k; ++i) {
                var x = u[i] = this.random.getNextBetween(0.01, 1) - 0.5;
                l += x * x;
            }
            l = Math.sqrt(l);
            return u.map(function (x) {
                return x *= _this.minD / l;
            });
        };

        Descent.prototype.computeDerivatives = function (x) {
            var _this = this;
            var n = this.n;
            if (n < 1)
                return;
            var i;

            var d = new Array(this.k);
            var d2 = new Array(this.k);
            var Huu = new Array(this.k);
            var maxH = 0;
            for (var u = 0; u < n; ++u) {
                for (i = 0; i < this.k; ++i)
                    Huu[i] = this.g[i][u] = 0;
                for (var v = 0; v < n; ++v) {
                    if (u === v)
                        continue;
                    while (true) {
                        var sd2 = 0;
                        for (i = 0; i < this.k; ++i) {
                            var dx = d[i] = x[i][u] - x[i][v];
                            sd2 += d2[i] = dx * dx;
                        }
                        if (sd2 > 1e-9)
                            break;
                        var rd = this.offsetDir();
                        for (i = 0; i < this.k; ++i)
                            x[i][v] += rd[i];
                    }
                    var l = Math.sqrt(sd2);
                    var D = this.D[u][v];
                    var weight = this.G != null ? this.G[u][v] : 1;
                    if (weight > 1 && l > D || !isFinite(D)) {
                        for (i = 0; i < this.k; ++i)
                            this.H[i][u][v] = 0;
                        continue;
                    }
                    if (weight > 1) {
                        weight = 1;
                    }
                    var D2 = D * D;
                    var gs = weight * (l - D) / (D2 * l);
                    var hs = -weight / (D2 * l * l * l);
                    if (!isFinite(gs))
                        console.log(gs);
                    for (i = 0; i < this.k; ++i) {
                        this.g[i][u] += d[i] * gs;
                        Huu[i] -= this.H[i][u][v] = hs * (D * (d2[i] - sd2) + l * sd2);
                    }
                }
                for (i = 0; i < this.k; ++i)
                    maxH = Math.max(maxH, this.H[i][u][u] = Huu[i]);
            }
            if (!this.locks.isEmpty()) {
                this.locks.apply(function (u, p) {
                    for (i = 0; i < _this.k; ++i) {
                        _this.H[i][u][u] += maxH;
                        _this.g[i][u] -= maxH * (p[i] - x[i][u]);
                    }
                });
            }
        };

        Descent.dotProd = function (a, b) {
            var x = 0, i = a.length;
            while (i--)
                x += a[i] * b[i];
            return x;
        };

        Descent.rightMultiply = function (m, v, r) {
            var i = m.length;
            while (i--)
                r[i] = Descent.dotProd(m[i], v);
        };

        Descent.prototype.computeStepSize = function (d) {
            var numerator = 0, denominator = 0;
            for (var i = 0; i < 2; ++i) {
                numerator += Descent.dotProd(this.g[i], d[i]);
                Descent.rightMultiply(this.H[i], d[i], this.Hd[i]);
                denominator += Descent.dotProd(d[i], this.Hd[i]);
            }
            if (denominator === 0 || !isFinite(denominator))
                return 0;
            return numerator / denominator;
        };

        Descent.prototype.reduceStress = function () {
            this.computeDerivatives(this.x);
            var alpha = this.computeStepSize(this.g);
            for (var i = 0; i < this.k; ++i) {
                this.takeDescentStep(this.x[i], this.g[i], alpha);
            }
            return this.computeStress();
        };

        Descent.copy = function (a, b) {
            var m = a.length, n = b[0].length;
            for (var i = 0; i < m; ++i) {
                for (var j = 0; j < n; ++j) {
                    b[i][j] = a[i][j];
                }
            }
        };

        Descent.prototype.stepAndProject = function (x0, r, d, stepSize) {
            Descent.copy(x0, r);
            this.takeDescentStep(r[0], d[0], stepSize);
            if (this.project)
                this.project[0](x0[0], x0[1], r[0]);
            this.takeDescentStep(r[1], d[1], stepSize);
            if (this.project)
                this.project[1](r[0], x0[1], r[1]);
        };

        Descent.mApply = function (m, n, f) {
            var i = m;
            while (i-- > 0) {
                var j = n;
                while (j-- > 0)
                    f(i, j);
            }
        };
        Descent.prototype.matrixApply = function (f) {
            Descent.mApply(this.k, this.n, f);
        };

        Descent.prototype.computeNextPosition = function (x0, r) {
            var _this = this;
            this.computeDerivatives(x0);
            var alpha = this.computeStepSize(this.g);
            this.stepAndProject(x0, r, this.g, alpha);

            for (var u = 0; u < this.n; ++u)
                for (var i = 0; i < this.k; ++i)
                    if (isNaN(r[i][u]))
                        debugger;

            if (this.project) {
                this.matrixApply(function (i, j) {
                    return _this.e[i][j] = x0[i][j] - r[i][j];
                });
                var beta = this.computeStepSize(this.e);
                beta = Math.max(0.2, Math.min(beta, 1));
                this.stepAndProject(x0, r, this.e, beta);
            }
        };

        Descent.prototype.run = function (iterations) {
            var stress = Number.MAX_VALUE, converged = false;
            while (!converged && iterations-- > 0) {
                var s = this.rungeKutta();
                converged = Math.abs(stress / s - 1) < this.threshold;
                stress = s;
            }
            return stress;
        };

        Descent.prototype.rungeKutta = function () {
            var _this = this;
            this.computeNextPosition(this.x, this.a);
            Descent.mid(this.x, this.a, this.ia);
            this.computeNextPosition(this.ia, this.b);
            Descent.mid(this.x, this.b, this.ib);
            this.computeNextPosition(this.ib, this.c);
            this.computeNextPosition(this.c, this.d);
            var disp = 0;
            this.matrixApply(function (i, j) {
                var x = (_this.a[i][j] + 2.0 * _this.b[i][j] + 2.0 * _this.c[i][j] + _this.d[i][j]) / 6.0, d = _this.x[i][j] - x;
                disp += d * d;
                _this.x[i][j] = x;
            });
            return disp;
        };

        Descent.mid = function (a, b, m) {
            Descent.mApply(a.length, a[0].length, function (i, j) {
                return m[i][j] = a[i][j] + (b[i][j] - a[i][j]) / 2.0;
            });
        };

        Descent.prototype.takeDescentStep = function (x, d, stepSize) {
            for (var i = 0; i < this.n; ++i) {
                x[i] = x[i] - stepSize * d[i];
            }
        };

        Descent.prototype.computeStress = function () {
            var stress = 0;
            for (var u = 0, nMinus1 = this.n - 1; u < nMinus1; ++u) {
                for (var v = u + 1, n = this.n; v < n; ++v) {
                    var l = 0;
                    for (var i = 0; i < this.k; ++i) {
                        var dx = this.x[i][u] - this.x[i][v];
                        l += dx * dx;
                    }
                    l = Math.sqrt(l);
                    var d = this.D[u][v];
                    if (!isFinite(d))
                        continue;
                    var rl = d - l;
                    var d2 = d * d;
                    stress += rl * rl / d2;
                }
            }
            return stress;
        };
        Descent.zeroDistance = 1e-10;
        return Descent;
    })();
    cola.Descent = Descent;

    var PseudoRandom = (function () {
        function PseudoRandom(seed) {
            if (typeof seed === "undefined") { seed = 1; }
            this.seed = seed;
            this.a = 214013;
            this.c = 2531011;
            this.m = 2147483648;
            this.range = 32767;
        }
        PseudoRandom.prototype.getNext = function () {
            this.seed = (this.seed * this.a + this.c) % this.m;
            return (this.seed >> 16) / this.range;
        };

        PseudoRandom.prototype.getNextBetween = function (min, max) {
            return min + this.getNext() * (max - min);
        };
        return PseudoRandom;
    })();
    cola.PseudoRandom = PseudoRandom;
})(cola || (cola = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var cola;
(function (cola) {
    (function (geom) {
        var Point = (function () {
            function Point() {
            }
            return Point;
        })();
        geom.Point = Point;

        var LineSegment = (function () {
            function LineSegment(x1, y1, x2, y2) {
                this.x1 = x1;
                this.y1 = y1;
                this.x2 = x2;
                this.y2 = y2;
            }
            return LineSegment;
        })();
        geom.LineSegment = LineSegment;

        var PolyPoint = (function (_super) {
            __extends(PolyPoint, _super);
            function PolyPoint() {
                _super.apply(this, arguments);
            }
            return PolyPoint;
        })(Point);
        geom.PolyPoint = PolyPoint;

        function isLeft(P0, P1, P2) {
            return (P1.x - P0.x) * (P2.y - P0.y) - (P2.x - P0.x) * (P1.y - P0.y);
        }
        geom.isLeft = isLeft;

        function above(p, vi, vj) {
            return isLeft(p, vi, vj) > 0;
        }

        function below(p, vi, vj) {
            return isLeft(p, vi, vj) < 0;
        }

        function ConvexHull(S) {
            var P = S.slice(0).sort(function (a, b) {
                return a.x !== b.x ? b.x - a.x : b.y - a.y;
            });
            var n = S.length, i;
            var minmin = 0;
            var xmin = P[0].x;
            for (i = 1; i < n; ++i) {
                if (P[i].x !== xmin)
                    break;
            }
            var minmax = i - 1;
            var H = [];
            H.push(P[minmin]);
            if (minmax === n - 1) {
                if (P[minmax].y !== P[minmin].y)
                    H.push(P[minmax]);
            } else {
                var maxmin, maxmax = n - 1;
                var xmax = P[n - 1].x;
                for (i = n - 2; i >= 0; i--)
                    if (P[i].x !== xmax)
                        break;
                maxmin = i + 1;

                i = minmax;
                while (++i <= maxmin) {
                    if (isLeft(P[minmin], P[maxmin], P[i]) >= 0 && i < maxmin)
                        continue;

                    while (H.length > 1) {
                        if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0)
                            break;
                        else
                            H.length -= 1;
                    }
                    if (i != minmin)
                        H.push(P[i]);
                }

                if (maxmax != maxmin)
                    H.push(P[maxmax]);
                var bot = H.length;
                i = maxmin;
                while (--i >= minmax) {
                    if (isLeft(P[maxmax], P[minmax], P[i]) >= 0 && i > minmax)
                        continue;

                    while (H.length > bot) {
                        if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0)
                            break;
                        else
                            H.length -= 1;
                    }
                    if (i != minmin)
                        H.push(P[i]);
                }
            }
            return H;
        }
        geom.ConvexHull = ConvexHull;

        function clockwiseRadialSweep(p, P, f) {
            P.slice(0).sort(function (a, b) {
                return Math.atan2(a.y - p.y, a.x - p.x) - Math.atan2(b.y - p.y, b.x - p.x);
            }).forEach(f);
        }
        geom.clockwiseRadialSweep = clockwiseRadialSweep;

        function nextPolyPoint(p, ps) {
            if (p.polyIndex === ps.length - 1)
                return ps[0];
            return ps[p.polyIndex + 1];
        }

        function prevPolyPoint(p, ps) {
            if (p.polyIndex === 0)
                return ps[ps.length - 1];
            return ps[p.polyIndex - 1];
        }

        function tangent_PointPolyC(P, V) {
            return { rtan: Rtangent_PointPolyC(P, V), ltan: Ltangent_PointPolyC(P, V) };
        }

        function Rtangent_PointPolyC(P, V) {
            var n = V.length - 1;

            var a, b, c;
            var upA, dnC;

            if (below(P, V[1], V[0]) && !above(P, V[n - 1], V[0]))
                return 0;

            for (a = 0, b = n; ;) {
                if (b - a === 1)
                    if (above(P, V[a], V[b]))
                        return a;
                    else
                        return b;

                c = Math.floor((a + b) / 2);
                dnC = below(P, V[c + 1], V[c]);
                if (dnC && !above(P, V[c - 1], V[c]))
                    return c;

                upA = above(P, V[a + 1], V[a]);
                if (upA) {
                    if (dnC)
                        b = c;
                    else {
                        if (above(P, V[a], V[c]))
                            b = c;
                        else
                            a = c;
                    }
                } else {
                    if (!dnC)
                        a = c;
                    else {
                        if (below(P, V[a], V[c]))
                            b = c;
                        else
                            a = c;
                    }
                }
            }
        }

        function Ltangent_PointPolyC(P, V) {
            var n = V.length - 1;

            var a, b, c;
            var dnA, dnC;

            if (above(P, V[n - 1], V[0]) && !below(P, V[1], V[0]))
                return 0;

            for (a = 0, b = n; ;) {
                if (b - a === 1)
                    if (below(P, V[a], V[b]))
                        return a;
                    else
                        return b;

                c = Math.floor((a + b) / 2);
                dnC = below(P, V[c + 1], V[c]);
                if (above(P, V[c - 1], V[c]) && !dnC)
                    return c;

                dnA = below(P, V[a + 1], V[a]);
                if (dnA) {
                    if (!dnC)
                        b = c;
                    else {
                        if (below(P, V[a], V[c]))
                            b = c;
                        else
                            a = c;
                    }
                } else {
                    if (dnC)
                        a = c;
                    else {
                        if (above(P, V[a], V[c]))
                            b = c;
                        else
                            a = c;
                    }
                }
            }
        }

        function tangent_PolyPolyC(V, W, t1, t2, cmp1, cmp2) {
            var ix1, ix2;

            ix1 = t1(W[0], V);
            ix2 = t2(V[ix1], W);

            var done = false;
            while (!done) {
                done = true;
                while (true) {
                    if (ix1 === V.length - 1)
                        ix1 = 0;
                    if (cmp1(W[ix2], V[ix1], V[ix1 + 1]))
                        break;
                    ++ix1;
                }
                while (true) {
                    if (ix2 === 0)
                        ix2 = W.length - 1;
                    if (cmp2(V[ix1], W[ix2], W[ix2 - 1]))
                        break;
                    --ix2;
                    done = false;
                }
            }
            return { t1: ix1, t2: ix2 };
        }
        geom.tangent_PolyPolyC = tangent_PolyPolyC;

        function LRtangent_PolyPolyC(V, W) {
            var rl = RLtangent_PolyPolyC(W, V);
            return { t1: rl.t2, t2: rl.t1 };
        }
        geom.LRtangent_PolyPolyC = LRtangent_PolyPolyC;

        function RLtangent_PolyPolyC(V, W) {
            return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Ltangent_PointPolyC, above, below);
        }
        geom.RLtangent_PolyPolyC = RLtangent_PolyPolyC;

        function LLtangent_PolyPolyC(V, W) {
            return tangent_PolyPolyC(V, W, Ltangent_PointPolyC, Ltangent_PointPolyC, below, below);
        }
        geom.LLtangent_PolyPolyC = LLtangent_PolyPolyC;

        function RRtangent_PolyPolyC(V, W) {
            return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Rtangent_PointPolyC, above, above);
        }
        geom.RRtangent_PolyPolyC = RRtangent_PolyPolyC;

        var BiTangent = (function () {
            function BiTangent(t1, t2) {
                this.t1 = t1;
                this.t2 = t2;
            }
            return BiTangent;
        })();
        geom.BiTangent = BiTangent;

        var BiTangents = (function () {
            function BiTangents() {
            }
            return BiTangents;
        })();
        geom.BiTangents = BiTangents;

        var TVGPoint = (function (_super) {
            __extends(TVGPoint, _super);
            function TVGPoint() {
                _super.apply(this, arguments);
            }
            return TVGPoint;
        })(Point);
        geom.TVGPoint = TVGPoint;

        var VisibilityVertex = (function () {
            function VisibilityVertex(id, polyid, polyvertid, p) {
                this.id = id;
                this.polyid = polyid;
                this.polyvertid = polyvertid;
                this.p = p;
                p.vv = this;
            }
            return VisibilityVertex;
        })();
        geom.VisibilityVertex = VisibilityVertex;

        var VisibilityEdge = (function () {
            function VisibilityEdge(source, target) {
                this.source = source;
                this.target = target;
            }
            VisibilityEdge.prototype.length = function () {
                var dx = this.source.p.x - this.target.p.x;
                var dy = this.source.p.y - this.target.p.y;
                return Math.sqrt(dx * dx + dy * dy);
            };
            return VisibilityEdge;
        })();
        geom.VisibilityEdge = VisibilityEdge;

        var TangentVisibilityGraph = (function () {
            function TangentVisibilityGraph(P, g0) {
                this.P = P;
                this.V = [];
                this.E = [];
                if (!g0) {
                    var n = P.length;
                    for (var i = 0; i < n; i++) {
                        var p = P[i];
                        for (var j = 0; j < p.length; ++j) {
                            var pj = p[j], vv = new VisibilityVertex(this.V.length, i, j, pj);
                            this.V.push(vv);
                            if (j > 0)
                                this.E.push(new VisibilityEdge(p[j - 1].vv, vv));
                        }
                    }
                    for (var i = 0; i < n - 1; i++) {
                        var Pi = P[i];
                        for (var j = i + 1; j < n; j++) {
                            var Pj = P[j], t = geom.tangents(Pi, Pj);
                            for (var q in t) {
                                var c = t[q], source = Pi[c.t1], target = Pj[c.t2];
                                this.addEdgeIfVisible(source, target, i, j);
                            }
                        }
                    }
                } else {
                    this.V = g0.V.slice(0);
                    this.E = g0.E.slice(0);
                }
            }
            TangentVisibilityGraph.prototype.addEdgeIfVisible = function (u, v, i1, i2) {
                if (!this.intersectsPolys(new LineSegment(u.x, u.y, v.x, v.y), i1, i2)) {
                    this.E.push(new VisibilityEdge(u.vv, v.vv));
                }
            };
            TangentVisibilityGraph.prototype.addPoint = function (p, i1) {
                var n = this.P.length;
                this.V.push(new VisibilityVertex(this.V.length, n, 0, p));
                for (var i = 0; i < n; ++i) {
                    if (i === i1)
                        continue;
                    var poly = this.P[i], t = tangent_PointPolyC(p, poly);
                    this.addEdgeIfVisible(p, poly[t.ltan], i1, i);
                    this.addEdgeIfVisible(p, poly[t.rtan], i1, i);
                }
                return p.vv;
            };
            TangentVisibilityGraph.prototype.intersectsPolys = function (l, i1, i2) {
                for (var i = 0, n = this.P.length; i < n; ++i) {
                    if (i != i1 && i != i2 && intersects(l, this.P[i]).length > 0) {
                        return true;
                    }
                }
                return false;
            };
            return TangentVisibilityGraph;
        })();
        geom.TangentVisibilityGraph = TangentVisibilityGraph;

        function intersects(l, P) {
            var ints = [];
            for (var i = 1, n = P.length; i < n; ++i) {
                var int = cola.vpsc.Rectangle.lineIntersection(l.x1, l.y1, l.x2, l.y2, P[i - 1].x, P[i - 1].y, P[i].x, P[i].y);
                if (int)
                    ints.push(int);
            }
            return ints;
        }

        function tangents(V, W) {
            var m = V.length - 1, n = W.length - 1;
            var bt = new BiTangents();
            for (var i = 0; i < m; ++i) {
                for (var j = 0; j < n; ++j) {
                    var v1 = V[i == 0 ? m - 1 : i - 1];
                    var v2 = V[i];
                    var v3 = V[i + 1];
                    var w1 = W[j == 0 ? n - 1 : j - 1];
                    var w2 = W[j];
                    var w3 = W[j + 1];
                    var v1v2w2 = isLeft(v1, v2, w2);
                    var v2w1w2 = isLeft(v2, w1, w2);
                    var v2w2w3 = isLeft(v2, w2, w3);
                    var w1w2v2 = isLeft(w1, w2, v2);
                    var w2v1v2 = isLeft(w2, v1, v2);
                    var w2v2v3 = isLeft(w2, v2, v3);
                    if (v1v2w2 >= 0 && v2w1w2 >= 0 && v2w2w3 < 0 && w1w2v2 >= 0 && w2v1v2 >= 0 && w2v2v3 < 0) {
                        bt.ll = new BiTangent(i, j);
                    } else if (v1v2w2 <= 0 && v2w1w2 <= 0 && v2w2w3 > 0 && w1w2v2 <= 0 && w2v1v2 <= 0 && w2v2v3 > 0) {
                        bt.rr = new BiTangent(i, j);
                    } else if (v1v2w2 <= 0 && v2w1w2 > 0 && v2w2w3 <= 0 && w1w2v2 >= 0 && w2v1v2 < 0 && w2v2v3 >= 0) {
                        bt.rl = new BiTangent(i, j);
                    } else if (v1v2w2 >= 0 && v2w1w2 < 0 && v2w2w3 >= 0 && w1w2v2 <= 0 && w2v1v2 > 0 && w2v2v3 <= 0) {
                        bt.lr = new BiTangent(i, j);
                    }
                }
            }
            return bt;
        }
        geom.tangents = tangents;

        function isPointInsidePoly(p, poly) {
            for (var i = 1, n = poly.length; i < n; ++i)
                if (below(poly[i - 1], poly[i], p))
                    return false;
            return true;
        }

        function isAnyPInQ(p, q) {
            return !p.every(function (v) {
                return !isPointInsidePoly(v, q);
            });
        }

        function polysOverlap(p, q) {
            if (isAnyPInQ(p, q))
                return true;
            if (isAnyPInQ(q, p))
                return true;
            for (var i = 1, n = p.length; i < n; ++i) {
                var v = p[i], u = p[i - 1];
                if (intersects(new LineSegment(u.x, u.y, v.x, v.y), q).length > 0)
                    return true;
            }
            return false;
        }
        geom.polysOverlap = polysOverlap;
    })(cola.geom || (cola.geom = {}));
    var geom = cola.geom;
})(cola || (cola = {}));
var cola;
(function (cola) {
    (function (vpsc) {
        var PositionStats = (function () {
            function PositionStats(scale) {
                this.scale = scale;
                this.AB = 0;
                this.AD = 0;
                this.A2 = 0;
            }
            PositionStats.prototype.addVariable = function (v) {
                var ai = this.scale / v.scale;
                var bi = v.offset / v.scale;
                var wi = v.weight;
                this.AB += wi * ai * bi;
                this.AD += wi * ai * v.desiredPosition;
                this.A2 += wi * ai * ai;
            };

            PositionStats.prototype.getPosn = function () {
                return (this.AD - this.AB) / this.A2;
            };
            return PositionStats;
        })();
        vpsc.PositionStats = PositionStats;

        var Constraint = (function () {
            function Constraint(left, right, gap, equality) {
                if (typeof equality === "undefined") { equality = false; }
                this.left = left;
                this.right = right;
                this.gap = gap;
                this.equality = equality;
                this.active = false;
                this.unsatisfiable = false;
                this.left = left;
                this.right = right;
                this.gap = gap;
                this.equality = equality;
            }
            Constraint.prototype.slack = function () {
                return this.unsatisfiable ? Number.MAX_VALUE : this.right.scale * this.right.position() - this.gap - this.left.scale * this.left.position();
            };
            return Constraint;
        })();
        vpsc.Constraint = Constraint;

        var Variable = (function () {
            function Variable(desiredPosition, weight, scale) {
                if (typeof weight === "undefined") { weight = 1; }
                if (typeof scale === "undefined") { scale = 1; }
                this.desiredPosition = desiredPosition;
                this.weight = weight;
                this.scale = scale;
                this.offset = 0;
            }
            Variable.prototype.dfdv = function () {
                return 2.0 * this.weight * (this.position() - this.desiredPosition);
            };

            Variable.prototype.position = function () {
                return (this.block.ps.scale * this.block.posn + this.offset) / this.scale;
            };

            Variable.prototype.visitNeighbours = function (prev, f) {
                var ff = function (c, next) {
                    return c.active && prev !== next && f(c, next);
                };
                this.cOut.forEach(function (c) {
                    return ff(c, c.right);
                });
                this.cIn.forEach(function (c) {
                    return ff(c, c.left);
                });
            };
            return Variable;
        })();
        vpsc.Variable = Variable;

        var Block = (function () {
            function Block(v) {
                this.vars = [];
                v.offset = 0;
                this.ps = new PositionStats(v.scale);
                this.addVariable(v);
            }
            Block.prototype.addVariable = function (v) {
                v.block = this;
                this.vars.push(v);
                this.ps.addVariable(v);
                this.posn = this.ps.getPosn();
            };

            Block.prototype.updateWeightedPosition = function () {
                this.ps.AB = this.ps.AD = this.ps.A2 = 0;
                for (var i = 0, n = this.vars.length; i < n; ++i)
                    this.ps.addVariable(this.vars[i]);
                this.posn = this.ps.getPosn();
            };

            Block.prototype.compute_lm = function (v, u, postAction) {
                var _this = this;
                var dfdv = v.dfdv();
                v.visitNeighbours(u, function (c, next) {
                    var _dfdv = _this.compute_lm(next, v, postAction);
                    if (next === c.right) {
                        dfdv += _dfdv * c.left.scale;
                        c.lm = _dfdv;
                    } else {
                        dfdv += _dfdv * c.right.scale;
                        c.lm = -_dfdv;
                    }
                    postAction(c);
                });
                return dfdv / v.scale;
            };

            Block.prototype.populateSplitBlock = function (v, prev) {
                var _this = this;
                v.visitNeighbours(prev, function (c, next) {
                    next.offset = v.offset + (next === c.right ? c.gap : -c.gap);
                    _this.addVariable(next);
                    _this.populateSplitBlock(next, v);
                });
            };

            Block.prototype.traverse = function (visit, acc, v, prev) {
                var _this = this;
                if (typeof v === "undefined") { v = this.vars[0]; }
                if (typeof prev === "undefined") { prev = null; }
                v.visitNeighbours(prev, function (c, next) {
                    acc.push(visit(c));
                    _this.traverse(visit, acc, next, v);
                });
            };

            Block.prototype.findMinLM = function () {
                var m = null;
                this.compute_lm(this.vars[0], null, function (c) {
                    if (!c.equality && (m === null || c.lm < m.lm))
                        m = c;
                });
                return m;
            };

            Block.prototype.findMinLMBetween = function (lv, rv) {
                this.compute_lm(lv, null, function () {
                });
                var m = null;
                this.findPath(lv, null, rv, function (c, next) {
                    if (!c.equality && c.right === next && (m === null || c.lm < m.lm))
                        m = c;
                });
                return m;
            };

            Block.prototype.findPath = function (v, prev, to, visit) {
                var _this = this;
                var endFound = false;
                v.visitNeighbours(prev, function (c, next) {
                    if (!endFound && (next === to || _this.findPath(next, v, to, visit))) {
                        endFound = true;
                        visit(c, next);
                    }
                });
                return endFound;
            };

            Block.prototype.isActiveDirectedPathBetween = function (u, v) {
                if (u === v)
                    return true;
                var i = u.cOut.length;
                while (i--) {
                    var c = u.cOut[i];
                    if (c.active && this.isActiveDirectedPathBetween(c.right, v))
                        return true;
                }
                return false;
            };

            Block.split = function (c) {
                c.active = false;
                return [Block.createSplitBlock(c.left), Block.createSplitBlock(c.right)];
            };

            Block.createSplitBlock = function (startVar) {
                var b = new Block(startVar);
                b.populateSplitBlock(startVar, null);
                return b;
            };

            Block.prototype.splitBetween = function (vl, vr) {
                var c = this.findMinLMBetween(vl, vr);
                if (c !== null) {
                    var bs = Block.split(c);
                    return { constraint: c, lb: bs[0], rb: bs[1] };
                }

                return null;
            };

            Block.prototype.mergeAcross = function (b, c, dist) {
                c.active = true;
                for (var i = 0, n = b.vars.length; i < n; ++i) {
                    var v = b.vars[i];
                    v.offset += dist;
                    this.addVariable(v);
                }
                this.posn = this.ps.getPosn();
            };

            Block.prototype.cost = function () {
                var sum = 0, i = this.vars.length;
                while (i--) {
                    var v = this.vars[i], d = v.position() - v.desiredPosition;
                    sum += d * d * v.weight;
                }
                return sum;
            };
            return Block;
        })();
        vpsc.Block = Block;

        var Blocks = (function () {
            function Blocks(vs) {
                this.vs = vs;
                var n = vs.length;
                this.list = new Array(n);
                while (n--) {
                    var b = new Block(vs[n]);
                    this.list[n] = b;
                    b.blockInd = n;
                }
            }
            Blocks.prototype.cost = function () {
                var sum = 0, i = this.list.length;
                while (i--)
                    sum += this.list[i].cost();
                return sum;
            };

            Blocks.prototype.insert = function (b) {
                b.blockInd = this.list.length;
                this.list.push(b);
            };

            Blocks.prototype.remove = function (b) {
                var last = this.list.length - 1;
                var swapBlock = this.list[last];
                this.list.length = last;
                if (b !== swapBlock) {
                    this.list[b.blockInd] = swapBlock;
                    swapBlock.blockInd = b.blockInd;
                }
            };

            Blocks.prototype.merge = function (c) {
                var l = c.left.block, r = c.right.block;

                var dist = c.right.offset - c.left.offset - c.gap;
                if (l.vars.length < r.vars.length) {
                    r.mergeAcross(l, c, dist);
                    this.remove(l);
                } else {
                    l.mergeAcross(r, c, -dist);
                    this.remove(r);
                }
            };

            Blocks.prototype.forEach = function (f) {
                this.list.forEach(f);
            };

            Blocks.prototype.updateBlockPositions = function () {
                this.list.forEach(function (b) {
                    return b.updateWeightedPosition();
                });
            };

            Blocks.prototype.split = function (inactive) {
                var _this = this;
                this.updateBlockPositions();
                this.list.forEach(function (b) {
                    var v = b.findMinLM();
                    if (v !== null && v.lm < Solver.LAGRANGIAN_TOLERANCE) {
                        b = v.left.block;
                        Block.split(v).forEach(function (nb) {
                            return _this.insert(nb);
                        });
                        _this.remove(b);
                        inactive.push(v);
                    }
                });
            };
            return Blocks;
        })();
        vpsc.Blocks = Blocks;

        var Solver = (function () {
            function Solver(vs, cs) {
                this.vs = vs;
                this.cs = cs;
                this.vs = vs;
                vs.forEach(function (v) {
                    v.cIn = [], v.cOut = [];
                });
                this.cs = cs;
                cs.forEach(function (c) {
                    c.left.cOut.push(c);
                    c.right.cIn.push(c);
                });
                this.inactive = cs.map(function (c) {
                    c.active = false;
                    return c;
                });
                this.bs = null;
            }
            Solver.prototype.cost = function () {
                return this.bs.cost();
            };

            Solver.prototype.setStartingPositions = function (ps) {
                this.inactive = this.cs.map(function (c) {
                    c.active = false;
                    return c;
                });
                this.bs = new Blocks(this.vs);
                this.bs.forEach(function (b, i) {
                    return b.posn = ps[i];
                });
            };

            Solver.prototype.setDesiredPositions = function (ps) {
                this.vs.forEach(function (v, i) {
                    return v.desiredPosition = ps[i];
                });
            };

            Solver.prototype.mostViolated = function () {
                var minSlack = Number.MAX_VALUE, v = null, l = this.inactive, n = l.length, deletePoint = n;
                for (var i = 0; i < n; ++i) {
                    var c = l[i];
                    if (c.unsatisfiable)
                        continue;
                    var slack = c.slack();
                    if (c.equality || slack < minSlack) {
                        minSlack = slack;
                        v = c;
                        deletePoint = i;
                        if (c.equality)
                            break;
                    }
                }
                if (deletePoint !== n && (minSlack < Solver.ZERO_UPPERBOUND && !v.active || v.equality)) {
                    l[deletePoint] = l[n - 1];
                    l.length = n - 1;
                }
                return v;
            };

            Solver.prototype.satisfy = function () {
                if (this.bs == null) {
                    this.bs = new Blocks(this.vs);
                }

                this.bs.split(this.inactive);
                var v = null;
                while ((v = this.mostViolated()) && (v.equality || v.slack() < Solver.ZERO_UPPERBOUND && !v.active)) {
                    var lb = v.left.block, rb = v.right.block;

                    if (lb !== rb) {
                        this.bs.merge(v);
                    } else {
                        if (lb.isActiveDirectedPathBetween(v.right, v.left)) {
                            v.unsatisfiable = true;
                            continue;
                        }

                        var split = lb.splitBetween(v.left, v.right);
                        if (split !== null) {
                            this.bs.insert(split.lb);
                            this.bs.insert(split.rb);
                            this.bs.remove(lb);
                            this.inactive.push(split.constraint);
                        } else {
                            v.unsatisfiable = true;
                            continue;
                        }
                        if (v.slack() >= 0) {
                            this.inactive.push(v);
                        } else {
                            this.bs.merge(v);
                        }
                    }
                }
            };

            Solver.prototype.solve = function () {
                this.satisfy();
                var lastcost = Number.MAX_VALUE, cost = this.bs.cost();
                while (Math.abs(lastcost - cost) > 0.0001) {
                    this.satisfy();
                    lastcost = cost;
                    cost = this.bs.cost();
                }
                return cost;
            };
            Solver.LAGRANGIAN_TOLERANCE = -1e-4;
            Solver.ZERO_UPPERBOUND = -1e-10;
            return Solver;
        })();
        vpsc.Solver = Solver;
    })(cola.vpsc || (cola.vpsc = {}));
    var vpsc = cola.vpsc;
})(cola || (cola = {}));
var cola;
(function (cola) {
    (function (vpsc) {
        function computeGroupBounds(g) {
            g.bounds = typeof g.leaves !== "undefined" ? g.leaves.reduce(function (r, c) {
                return c.bounds.union(r);
            }, Rectangle.empty()) : Rectangle.empty();
            if (typeof g.groups !== "undefined")
                g.bounds = g.groups.reduce(function (r, c) {
                    return computeGroupBounds(c).union(r);
                }, g.bounds);
            g.bounds = g.bounds.inflate(g.padding);
            return g.bounds;
        }
        vpsc.computeGroupBounds = computeGroupBounds;

        var Rectangle = (function () {
            function Rectangle(x, X, y, Y) {
                this.x = x;
                this.X = X;
                this.y = y;
                this.Y = Y;
            }
            Rectangle.empty = function () {
                return new Rectangle(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
            };

            Rectangle.prototype.cx = function () {
                return (this.x + this.X) / 2;
            };

            Rectangle.prototype.cy = function () {
                return (this.y + this.Y) / 2;
            };

            Rectangle.prototype.overlapX = function (r) {
                var ux = this.cx(), vx = r.cx();
                if (ux <= vx && r.x < this.X)
                    return this.X - r.x;
                if (vx <= ux && this.x < r.X)
                    return r.X - this.x;
                return 0;
            };

            Rectangle.prototype.overlapY = function (r) {
                var uy = this.cy(), vy = r.cy();
                if (uy <= vy && r.y < this.Y)
                    return this.Y - r.y;
                if (vy <= uy && this.y < r.Y)
                    return r.Y - this.y;
                return 0;
            };

            Rectangle.prototype.setXCentre = function (cx) {
                var dx = cx - this.cx();
                this.x += dx;
                this.X += dx;
            };

            Rectangle.prototype.setYCentre = function (cy) {
                var dy = cy - this.cy();
                this.y += dy;
                this.Y += dy;
            };

            Rectangle.prototype.width = function () {
                return this.X - this.x;
            };

            Rectangle.prototype.height = function () {
                return this.Y - this.y;
            };

            Rectangle.prototype.union = function (r) {
                return new Rectangle(Math.min(this.x, r.x), Math.max(this.X, r.X), Math.min(this.y, r.y), Math.max(this.Y, r.Y));
            };

            Rectangle.prototype.lineIntersections = function (x1, y1, x2, y2) {
                var sides = [
                    [this.x, this.y, this.X, this.y],
                    [this.X, this.y, this.X, this.Y],
                    [this.X, this.Y, this.x, this.Y],
                    [this.x, this.Y, this.x, this.y]];
                var intersections = [];
                for (var i = 0; i < 4; ++i) {
                    var r = Rectangle.lineIntersection(x1, y1, x2, y2, sides[i][0], sides[i][1], sides[i][2], sides[i][3]);
                    if (r !== null)
                        intersections.push({ x: r.x, y: r.y });
                }
                return intersections;
            };

            Rectangle.prototype.rayIntersection = function (x2, y2) {
                var ints = this.lineIntersections(this.cx(), this.cy(), x2, y2);
                return ints.length > 0 ? ints[0] : null;
            };

            Rectangle.prototype.vertices = function () {
                return [
                    { x: this.x, y: this.y },
                    { x: this.X, y: this.y },
                    { x: this.X, y: this.Y },
                    { x: this.x, y: this.Y },
                    { x: this.x, y: this.y }];
            };

            Rectangle.lineIntersection = function (x1, y1, x2, y2, x3, y3, x4, y4) {
                var dx12 = x2 - x1, dx34 = x4 - x3, dy12 = y2 - y1, dy34 = y4 - y3, denominator = dy34 * dx12 - dx34 * dy12;
                if (denominator == 0)
                    return null;
                var dx31 = x1 - x3, dy31 = y1 - y3, numa = dx34 * dy31 - dy34 * dx31, a = numa / denominator, numb = dx12 * dy31 - dy12 * dx31, b = numb / denominator;
                if (a >= 0 && a <= 1 && b >= 0 && b <= 1) {
                    return {
                        x: x1 + a * dx12,
                        y: y1 + a * dy12
                    };
                }
                return null;
            };

            Rectangle.prototype.inflate = function (pad) {
                return new Rectangle(this.x - pad, this.X + pad, this.y - pad, this.Y + pad);
            };
            return Rectangle;
        })();
        vpsc.Rectangle = Rectangle;

        function makeEdgeBetween(link, source, target, ah) {
            var si = source.rayIntersection(target.cx(), target.cy());
            if (!si)
                si = { x: source.cx(), y: source.cy() };
            var ti = target.rayIntersection(source.cx(), source.cy());
            if (!ti)
                ti = { x: target.cx(), y: target.cy() };
            var dx = ti.x - si.x, dy = ti.y - si.y, l = Math.sqrt(dx * dx + dy * dy), al = l - ah;
            link.sourceIntersection = si;
            link.targetIntersection = ti;
            link.arrowStart = { x: si.x + al * dx / l, y: si.y + al * dy / l };
        }
        vpsc.makeEdgeBetween = makeEdgeBetween;

        function makeEdgeTo(s, target, ah) {
            var ti = target.rayIntersection(s.x, s.y);
            if (!ti)
                ti = { x: target.cx(), y: target.cy() };
            var dx = ti.x - s.x, dy = ti.y - s.y, l = Math.sqrt(dx * dx + dy * dy);
            return { x: ti.x - ah * dx / l, y: ti.y - ah * dy / l };
        }
        vpsc.makeEdgeTo = makeEdgeTo;

        var Node = (function () {
            function Node(v, r, pos) {
                this.v = v;
                this.r = r;
                this.pos = pos;
                this.prev = makeRBTree();
                this.next = makeRBTree();
            }
            return Node;
        })();

        var Event = (function () {
            function Event(isOpen, v, pos) {
                this.isOpen = isOpen;
                this.v = v;
                this.pos = pos;
            }
            return Event;
        })();

        function compareEvents(a, b) {
            if (a.pos > b.pos) {
                return 1;
            }
            if (a.pos < b.pos) {
                return -1;
            }
            if (a.isOpen) {
                return -1;
            }
            return 0;
        }

        function makeRBTree() {
            return new RBTree(function (a, b) {
                return a.pos - b.pos;
            });
        }

        var xRect = {
            getCentre: function (r) {
                return r.cx();
            },
            getOpen: function (r) {
                return r.y;
            },
            getClose: function (r) {
                return r.Y;
            },
            getSize: function (r) {
                return r.width();
            },
            makeRect: function (open, close, center, size) {
                return new Rectangle(center - size / 2, center + size / 2, open, close);
            },
            findNeighbours: findXNeighbours
        };

        var yRect = {
            getCentre: function (r) {
                return r.cy();
            },
            getOpen: function (r) {
                return r.x;
            },
            getClose: function (r) {
                return r.X;
            },
            getSize: function (r) {
                return r.height();
            },
            makeRect: function (open, close, center, size) {
                return new Rectangle(open, close, center - size / 2, center + size / 2);
            },
            findNeighbours: findYNeighbours
        };

        function generateGroupConstraints(root, f, minSep, isContained) {
            if (typeof isContained === "undefined") { isContained = false; }
            var padding = root.padding, gn = typeof root.groups !== 'undefined' ? root.groups.length : 0, ln = typeof root.leaves !== 'undefined' ? root.leaves.length : 0, childConstraints = !gn ? [] : root.groups.reduce(function (ccs, g) {
                return ccs.concat(generateGroupConstraints(g, f, minSep, true));
            }, []), n = (isContained ? 2 : 0) + ln + gn, vs = new Array(n), rs = new Array(n), i = 0, add = function (r, v) {
                rs[i] = r;
                vs[i++] = v;
            };
            if (isContained) {
                var b = root.bounds, c = f.getCentre(b), s = f.getSize(b) / 2, open = f.getOpen(b), close = f.getClose(b), min = c - s + padding / 2, max = c + s - padding / 2;
                root.minVar.desiredPosition = min;
                add(f.makeRect(open, close, min, padding), root.minVar);
                root.maxVar.desiredPosition = max;
                add(f.makeRect(open, close, max, padding), root.maxVar);
            }
            if (ln)
                root.leaves.forEach(function (l) {
                    return add(l.bounds, l.variable);
                });
            if (gn)
                root.groups.forEach(function (g) {
                    var b = g.bounds;
                    add(f.makeRect(f.getOpen(b), f.getClose(b), f.getCentre(b), f.getSize(b)), g.minVar);
                });
            var cs = generateConstraints(rs, vs, f, minSep);
            if (gn) {
                vs.forEach(function (v) {
                    v.cOut = [], v.cIn = [];
                });
                cs.forEach(function (c) {
                    c.left.cOut.push(c), c.right.cIn.push(c);
                });
                root.groups.forEach(function (g) {
                    var gapAdjustment = (g.padding - f.getSize(g.bounds)) / 2;
                    g.minVar.cIn.forEach(function (c) {
                        return c.gap += gapAdjustment;
                    });
                    g.minVar.cOut.forEach(function (c) {
                        c.left = g.maxVar;
                        c.gap += gapAdjustment;
                    });
                });
            }
            return childConstraints.concat(cs);
        }

        function generateConstraints(rs, vars, rect, minSep) {
            var i, n = rs.length;
            var N = 2 * n;
            console.assert(vars.length >= n);
            var events = new Array(N);
            for (i = 0; i < n; ++i) {
                var r = rs[i];
                var v = new Node(vars[i], r, rect.getCentre(r));
                events[i] = new Event(true, v, rect.getOpen(r));
                events[i + n] = new Event(false, v, rect.getClose(r));
            }
            events.sort(compareEvents);
            var cs = new Array();
            var scanline = makeRBTree();
            for (i = 0; i < N; ++i) {
                var e = events[i];
                var v = e.v;
                if (e.isOpen) {
                    scanline.insert(v);
                    rect.findNeighbours(v, scanline);
                } else {
                    scanline.remove(v);
                    var makeConstraint = function (l, r) {
                        var sep = (rect.getSize(l.r) + rect.getSize(r.r)) / 2 + minSep;
                        cs.push(new cola.vpsc.Constraint(l.v, r.v, sep));
                    };
                    var visitNeighbours = function (forward, reverse, mkcon) {
                        var u, it = v[forward].iterator();
                        while ((u = it[forward]()) !== null) {
                            mkcon(u, v);
                            u[reverse].remove(v);
                        }
                    };
                    visitNeighbours("prev", "next", function (u, v) {
                        return makeConstraint(u, v);
                    });
                    visitNeighbours("next", "prev", function (u, v) {
                        return makeConstraint(v, u);
                    });
                }
            }
            console.assert(scanline.size === 0);
            return cs;
        }

        function findXNeighbours(v, scanline) {
            var f = function (forward, reverse) {
                var it = scanline.findIter(v);
                var u;
                while ((u = it[forward]()) !== null) {
                    var uovervX = u.r.overlapX(v.r);
                    if (uovervX <= 0 || uovervX <= u.r.overlapY(v.r)) {
                        v[forward].insert(u);
                        u[reverse].insert(v);
                    }
                    if (uovervX <= 0) {
                        break;
                    }
                }
            };
            f("next", "prev");
            f("prev", "next");
        }

        function findYNeighbours(v, scanline) {
            var f = function (forward, reverse) {
                var u = scanline.findIter(v)[forward]();
                if (u !== null && u.r.overlapX(v.r) > 0) {
                    v[forward].insert(u);
                    u[reverse].insert(v);
                }
            };
            f("next", "prev");
            f("prev", "next");
        }

        function generateXConstraints(rs, vars) {
            return generateConstraints(rs, vars, xRect, 1e-6);
        }
        vpsc.generateXConstraints = generateXConstraints;

        function generateYConstraints(rs, vars) {
            return generateConstraints(rs, vars, yRect, 1e-6);
        }
        vpsc.generateYConstraints = generateYConstraints;

        function generateXGroupConstraints(root) {
            return generateGroupConstraints(root, xRect, 1e-6);
        }
        vpsc.generateXGroupConstraints = generateXGroupConstraints;

        function generateYGroupConstraints(root) {
            return generateGroupConstraints(root, yRect, 1e-6);
        }
        vpsc.generateYGroupConstraints = generateYGroupConstraints;

        function removeOverlaps(rs) {
            var vs = rs.map(function (r) {
                return new cola.vpsc.Variable(r.cx());
            });
            var cs = cola.vpsc.generateXConstraints(rs, vs);
            var solver = new cola.vpsc.Solver(vs, cs);
            solver.solve();
            vs.forEach(function (v, i) {
                return rs[i].setXCentre(v.position());
            });
            vs = rs.map(function (r) {
                return new cola.vpsc.Variable(r.cy());
            });
            cs = cola.vpsc.generateYConstraints(rs, vs);
            solver = new cola.vpsc.Solver(vs, cs);
            solver.solve();
            vs.forEach(function (v, i) {
                return rs[i].setYCentre(v.position());
            });
        }
        vpsc.removeOverlaps = removeOverlaps;

        var IndexedVariable = (function (_super) {
            __extends(IndexedVariable, _super);
            function IndexedVariable(index, w) {
                _super.call(this, 0, w);
                this.index = index;
            }
            return IndexedVariable;
        })(cola.vpsc.Variable);

        var Projection = (function () {
            function Projection(nodes, groups, rootGroup, constraints, avoidOverlaps) {
                if (typeof rootGroup === "undefined") { rootGroup = null; }
                if (typeof constraints === "undefined") { constraints = null; }
                if (typeof avoidOverlaps === "undefined") { avoidOverlaps = false; }
                var _this = this;
                this.nodes = nodes;
                this.groups = groups;
                this.rootGroup = rootGroup;
                this.avoidOverlaps = avoidOverlaps;
                this.variables = nodes.map(function (v, i) {
                    return v.variable = new IndexedVariable(i, 1);
                });

                if (constraints)
                    this.createConstraints(constraints);

                if (avoidOverlaps && rootGroup && typeof rootGroup.groups !== 'undefined') {
                    nodes.forEach(function (v) {
                        if (!v.width || !v.height) {
                            v.bounds = new cola.vpsc.Rectangle(v.x, v.x, v.y, v.y);
                            return;
                        }
                        var w2 = v.width / 2, h2 = v.height / 2;
                        v.bounds = new cola.vpsc.Rectangle(v.x - w2, v.x + w2, v.y - h2, v.y + h2);
                    });
                    computeGroupBounds(rootGroup);
                    var i = nodes.length;
                    groups.forEach(function (g) {
                        _this.variables[i] = g.minVar = new IndexedVariable(i++, 0.01);
                        _this.variables[i] = g.maxVar = new IndexedVariable(i++, 0.01);
                    });
                }
            }
            Projection.prototype.createSeparation = function (c) {
                return new cola.vpsc.Constraint(this.nodes[c.left].variable, this.nodes[c.right].variable, c.gap, typeof c.equality !== "undefined" ? c.equality : false);
            };

            Projection.prototype.makeFeasible = function (c) {
                var _this = this;
                if (!this.avoidOverlaps)
                    return;
                var axis = 'x', dim = 'width';
                if (c.axis === 'x')
                    axis = 'y', dim = 'height';
                var vs = c.offsets.map(function (o) {
                    return _this.nodes[o.node];
                }).sort(function (a, b) {
                    return a[axis] - b[axis];
                });
                var p = null;
                vs.forEach(function (v) {
                    if (p)
                        v[axis] = p[axis] + p[dim] + 1;
                    p = v;
                });
            };

            Projection.prototype.createAlignment = function (c) {
                var _this = this;
                var u = this.nodes[c.offsets[0].node].variable;
                this.makeFeasible(c);
                var cs = c.axis === 'x' ? this.xConstraints : this.yConstraints;
                c.offsets.slice(1).forEach(function (o) {
                    var v = _this.nodes[o.node].variable;
                    cs.push(new cola.vpsc.Constraint(u, v, o.offset, true));
                });
            };

            Projection.prototype.createConstraints = function (constraints) {
                var _this = this;
                var isSep = function (c) {
                    return typeof c.type === 'undefined' || c.type === 'separation';
                };
                this.xConstraints = constraints.filter(function (c) {
                    return c.axis === "x" && isSep(c);
                }).map(function (c) {
                    return _this.createSeparation(c);
                });
                this.yConstraints = constraints.filter(function (c) {
                    return c.axis === "y" && isSep(c);
                }).map(function (c) {
                    return _this.createSeparation(c);
                });
                constraints.filter(function (c) {
                    return c.type === 'alignment';
                }).forEach(function (c) {
                    return _this.createAlignment(c);
                });
            };

            Projection.prototype.setupVariablesAndBounds = function (x0, y0, desired, getDesired) {
                this.nodes.forEach(function (v, i) {
                    if (v.fixed) {
                        v.variable.weight = 1000;
                        desired[i] = getDesired(v);
                    } else {
                        v.variable.weight = 1;
                    }
                    var w = (v.width || 0) / 2, h = (v.height || 0) / 2;
                    var ix = x0[i], iy = y0[i];
                    v.bounds = new Rectangle(ix - w, ix + w, iy - h, iy + h);
                });
            };

            Projection.prototype.xProject = function (x0, y0, x) {
                if (!this.rootGroup && !(this.avoidOverlaps || this.xConstraints))
                    return;
                this.project(x0, y0, x0, x, function (v) {
                    return v.px;
                }, this.xConstraints, generateXGroupConstraints, function (v) {
                    return v.bounds.setXCentre(x[v.variable.index] = v.variable.position());
                }, function (g) {
                    var xmin = x[g.minVar.index] = g.minVar.position();
                    var xmax = x[g.maxVar.index] = g.maxVar.position();
                    var p2 = g.padding / 2;
                    g.bounds.x = xmin - p2;
                    g.bounds.X = xmax + p2;
                });
            };

            Projection.prototype.yProject = function (x0, y0, y) {
                if (!this.rootGroup && !this.yConstraints)
                    return;
                this.project(x0, y0, y0, y, function (v) {
                    return v.py;
                }, this.yConstraints, generateYGroupConstraints, function (v) {
                    return v.bounds.setYCentre(y[v.variable.index] = v.variable.position());
                }, function (g) {
                    var ymin = y[g.minVar.index] = g.minVar.position();
                    var ymax = y[g.maxVar.index] = g.maxVar.position();
                    var p2 = g.padding / 2;
                    g.bounds.y = ymin - p2;
                    ;
                    g.bounds.Y = ymax + p2;
                });
            };

            Projection.prototype.projectFunctions = function () {
                var _this = this;
                return [
                    function (x0, y0, x) {
                        return _this.xProject(x0, y0, x);
                    },
                    function (x0, y0, y) {
                        return _this.yProject(x0, y0, y);
                    }
                ];
            };

            Projection.prototype.project = function (x0, y0, start, desired, getDesired, cs, generateConstraints, updateNodeBounds, updateGroupBounds) {
                this.setupVariablesAndBounds(x0, y0, desired, getDesired);
                if (this.rootGroup && this.avoidOverlaps) {
                    computeGroupBounds(this.rootGroup);
                    cs = cs.concat(generateConstraints(this.rootGroup));
                }
                this.solve(this.variables, cs, start, desired);
                this.nodes.forEach(updateNodeBounds);
                if (this.rootGroup && this.avoidOverlaps) {
                    this.groups.forEach(updateGroupBounds);
                }
            };

            Projection.prototype.solve = function (vs, cs, starting, desired) {
                var solver = new cola.vpsc.Solver(vs, cs);
                solver.setStartingPositions(starting);
                solver.setDesiredPositions(desired);
                solver.solve();
            };
            return Projection;
        })();
        vpsc.Projection = Projection;
    })(cola.vpsc || (cola.vpsc = {}));
    var vpsc = cola.vpsc;
})(cola || (cola = {}));
var PairingHeap = (function () {
    function PairingHeap(elem) {
        this.elem = elem;
        this.subheaps = [];
    }
    PairingHeap.prototype.toString = function (selector) {
        var str = "", needComma = false;
        for (var i = 0; i < this.subheaps.length; ++i) {
            var subheap = this.subheaps[i];
            if (!subheap.elem) {
                needComma = false;
                continue;
            }
            if (needComma) {
                str = str + ",";
            }
            str = str + subheap.toString(selector);
            needComma = true;
        }
        if (str !== "") {
            str = "(" + str + ")";
        }
        return (this.elem ? selector(this.elem) : "") + str;
    };

    PairingHeap.prototype.forEach = function (f) {
        if (!this.empty()) {
            f(this.elem, this);
            this.subheaps.forEach(function (s) {
                return s.forEach(f);
            });
        }
    };

    PairingHeap.prototype.count = function () {
        return this.empty() ? 0 : 1 + this.subheaps.reduce(function (n, h) {
            return n + h.count();
        }, 0);
    };

    PairingHeap.prototype.min = function () {
        return this.elem;
    };

    PairingHeap.prototype.empty = function () {
        return this.elem == null;
    };

    PairingHeap.prototype.contains = function (h) {
        if (this === h)
            return true;
        for (var i = 0; i < this.subheaps.length; i++) {
            if (this.subheaps[i].contains(h))
                return true;
        }
        return false;
    };

    PairingHeap.prototype.isHeap = function (lessThan) {
        var _this = this;
        return this.subheaps.every(function (h) {
            return lessThan(_this.elem, h.elem) && h.isHeap(lessThan);
        });
    };

    PairingHeap.prototype.insert = function (obj, lessThan) {
        return this.merge(new PairingHeap(obj), lessThan);
    };

    PairingHeap.prototype.merge = function (heap2, lessThan) {
        if (this.empty())
            return heap2;
        else if (heap2.empty())
            return this;
        else if (lessThan(this.elem, heap2.elem)) {
            this.subheaps.push(heap2);
            return this;
        } else {
            heap2.subheaps.push(this);
            return heap2;
        }
    };

    PairingHeap.prototype.removeMin = function (lessThan) {
        if (this.empty())
            return null;
        else
            return this.mergePairs(lessThan);
    };

    PairingHeap.prototype.mergePairs = function (lessThan) {
        if (this.subheaps.length == 0)
            return new PairingHeap(null);
        else if (this.subheaps.length == 1) {
            return this.subheaps[0];
        } else {
            var firstPair = this.subheaps.pop().merge(this.subheaps.pop(), lessThan);
            var remaining = this.mergePairs(lessThan);
            return firstPair.merge(remaining, lessThan);
        }
    };
    PairingHeap.prototype.decreaseKey = function (subheap, newValue, setHeapNode, lessThan) {
        var newHeap = subheap.removeMin(lessThan);

        subheap.elem = newHeap.elem;
        subheap.subheaps = newHeap.subheaps;
        if (setHeapNode !== null && newHeap.elem !== null) {
            setHeapNode(subheap.elem, subheap);
        }
        var pairingNode = new PairingHeap(newValue);
        if (setHeapNode !== null) {
            setHeapNode(newValue, pairingNode);
        }
        return this.merge(pairingNode, lessThan);
    };
    return PairingHeap;
})();

var PriorityQueue = (function () {
    function PriorityQueue(lessThan) {
        this.lessThan = lessThan;
    }
    PriorityQueue.prototype.top = function () {
        if (this.empty()) {
            return null;
        }
        return this.root.elem;
    };

    PriorityQueue.prototype.push = function () {
        var args = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            args[_i] = arguments[_i + 0];
        }
        var pairingNode;
        for (var i = 0, arg; arg = args[i]; ++i) {
            pairingNode = new PairingHeap(arg);
            this.root = this.empty() ? pairingNode : this.root.merge(pairingNode, this.lessThan);
        }
        return pairingNode;
    };

    PriorityQueue.prototype.empty = function () {
        return !this.root || !this.root.elem;
    };

    PriorityQueue.prototype.isHeap = function () {
        return this.root.isHeap(this.lessThan);
    };

    PriorityQueue.prototype.forEach = function (f) {
        this.root.forEach(f);
    };

    PriorityQueue.prototype.pop = function () {
        if (this.empty()) {
            return null;
        }
        var obj = this.root.min();
        this.root = this.root.removeMin(this.lessThan);
        return obj;
    };

    PriorityQueue.prototype.reduceKey = function (heapNode, newKey, setHeapNode) {
        if (typeof setHeapNode === "undefined") { setHeapNode = null; }
        this.root = this.root.decreaseKey(heapNode, newKey, setHeapNode, this.lessThan);
    };
    PriorityQueue.prototype.toString = function (selector) {
        return this.root.toString(selector);
    };

    PriorityQueue.prototype.count = function () {
        return this.root.count();
    };
    return PriorityQueue;
})();
var cola;
(function (cola) {
    (function (shortestpaths) {
        var Neighbour = (function () {
            function Neighbour(id, distance) {
                this.id = id;
                this.distance = distance;
            }
            return Neighbour;
        })();

        var Node = (function () {
            function Node(id) {
                this.id = id;
                this.neighbours = [];
            }
            return Node;
        })();

        var QueueEntry = (function () {
            function QueueEntry(node, prev, d) {
                this.node = node;
                this.prev = prev;
                this.d = d;
            }
            return QueueEntry;
        })();

        var Calculator = (function () {
            function Calculator(n, es, getSourceIndex, getTargetIndex, getLength) {
                this.n = n;
                this.es = es;
                this.neighbours = new Array(this.n);
                var i = this.n;
                while (i--)
                    this.neighbours[i] = new Node(i);

                i = this.es.length;
                while (i--) {
                    var e = this.es[i];
                    var u = getSourceIndex(e), v = getTargetIndex(e);
                    var d = getLength(e);
                    this.neighbours[u].neighbours.push(new Neighbour(v, d));
                    this.neighbours[v].neighbours.push(new Neighbour(u, d));
                }
            }
            Calculator.prototype.DistanceMatrix = function () {
                var D = new Array(this.n);
                for (var i = 0; i < this.n; ++i) {
                    D[i] = this.dijkstraNeighbours(i);
                }
                return D;
            };

            Calculator.prototype.DistancesFromNode = function (start) {
                return this.dijkstraNeighbours(start);
            };

            Calculator.prototype.PathFromNodeToNode = function (start, end) {
                return this.dijkstraNeighbours(start, end);
            };

            Calculator.prototype.PathFromNodeToNodeWithPrevCost = function (start, end, prevCost) {
                var q = new PriorityQueue(function (a, b) {
                    return a.d <= b.d;
                }), u = this.neighbours[start], qu = new QueueEntry(u, null, 0), visitedFrom = {};
                q.push(qu);
                while (!q.empty()) {
                    qu = q.pop();
                    u = qu.node;
                    if (u.id === end) {
                        break;
                    }
                    var i = u.neighbours.length;
                    while (i--) {
                        var neighbour = u.neighbours[i], v = this.neighbours[neighbour.id];

                        if (qu.prev && v.id === qu.prev.node.id)
                            continue;

                        var viduid = v.id + ',' + u.id;
                        if (viduid in visitedFrom && visitedFrom[viduid] <= qu.d)
                            continue;

                        var cc = qu.prev ? prevCost(qu.prev.node.id, u.id, v.id) : 0, t = qu.d + neighbour.distance + cc;

                        visitedFrom[viduid] = t;
                        q.push(new QueueEntry(v, qu, t));
                    }
                }
                var path = [];
                while (qu.prev) {
                    qu = qu.prev;
                    path.push(qu.node.id);
                }
                return path;
            };

            Calculator.prototype.dijkstraNeighbours = function (start, dest) {
                if (typeof dest === "undefined") { dest = -1; }
                var q = new PriorityQueue(function (a, b) {
                    return a.d <= b.d;
                }), i = this.neighbours.length, d = new Array(i);
                while (i--) {
                    var node = this.neighbours[i];
                    node.d = i === start ? 0 : Number.POSITIVE_INFINITY;
                    node.q = q.push(node);
                }
                while (!q.empty()) {
                    var u = q.pop();
                    d[u.id] = u.d;
                    if (u.id === dest) {
                        var path = [];
                        var v = u;
                        while (typeof v.prev !== 'undefined') {
                            path.push(v.prev.id);
                            v = v.prev;
                        }
                        return path;
                    }
                    i = u.neighbours.length;
                    while (i--) {
                        var neighbour = u.neighbours[i];
                        var v = this.neighbours[neighbour.id];
                        var t = u.d + neighbour.distance;
                        if (u.d !== Number.MAX_VALUE && v.d > t) {
                            v.d = t;
                            v.prev = u;
                            q.reduceKey(v.q, v, function (e, q) {
                                return e.q = q;
                            });
                        }
                    }
                }
                return d;
            };
            return Calculator;
        })();
        shortestpaths.Calculator = Calculator;
    })(cola.shortestpaths || (cola.shortestpaths = {}));
    var shortestpaths = cola.shortestpaths;
})(cola || (cola = {}));
var cola;
(function (cola) {
    var NodeWrapper = (function () {
        function NodeWrapper(id, rect, children) {
            this.id = id;
            this.rect = rect;
            this.children = children;
            this.leaf = typeof children === 'undefined' || children.length === 0;
        }
        return NodeWrapper;
    })();
    cola.NodeWrapper = NodeWrapper;
    var Vert = (function () {
        function Vert(id, x, y, node, line) {
            if (typeof node === "undefined") { node = null; }
            if (typeof line === "undefined") { line = null; }
            this.id = id;
            this.x = x;
            this.y = y;
            this.node = node;
            this.line = line;
        }
        return Vert;
    })();
    cola.Vert = Vert;

    var LongestCommonSubsequence = (function () {
        function LongestCommonSubsequence(s, t) {
            this.s = s;
            this.t = t;
            var mf = LongestCommonSubsequence.findMatch(s, t);
            var tr = t.slice(0).reverse();
            var mr = LongestCommonSubsequence.findMatch(s, tr);
            if (mf.length >= mr.length) {
                this.length = mf.length;
                this.si = mf.si;
                this.ti = mf.ti;
                this.reversed = false;
            } else {
                this.length = mr.length;
                this.si = mr.si;
                this.ti = t.length - mr.ti - mr.length;
                this.reversed = true;
            }
        }
        LongestCommonSubsequence.findMatch = function (s, t) {
            var m = s.length;
            var n = t.length;
            var match = { length: 0, si: -1, ti: -1 };
            var l = new Array(m);
            for (var i = 0; i < m; i++) {
                l[i] = new Array(n);
                for (var j = 0; j < n; j++)
                    if (s[i] === t[j]) {
                        var v = l[i][j] = (i === 0 || j === 0) ? 1 : l[i - 1][j - 1] + 1;
                        if (v > match.length) {
                            match.length = v;
                            match.si = i - v + 1;
                            match.ti = j - v + 1;
                        }
                        ;
                    } else
                        l[i][j] = 0;
            }
            return match;
        };
        LongestCommonSubsequence.prototype.getSequence = function () {
            return this.length >= 0 ? this.s.slice(this.si, this.si + this.length) : [];
        };
        return LongestCommonSubsequence;
    })();
    cola.LongestCommonSubsequence = LongestCommonSubsequence;
    var GridRouter = (function () {
        function GridRouter(originalnodes, accessor) {
            var _this = this;
            this.originalnodes = originalnodes;
            this.groupPadding = 12;
            this.leaves = null;
            this.nodes = originalnodes.map(function (v, i) {
                return new NodeWrapper(i, accessor.getBounds(v), accessor.getChildren(v));
            });
            this.leaves = this.nodes.filter(function (v) {
                return v.leaf;
            });
            this.groups = this.nodes.filter(function (g) {
                return !g.leaf;
            });
            this.cols = this.getGridDim('x');
            this.rows = this.getGridDim('y');

            this.groups.forEach(function (v) {
                return v.children.forEach(function (c) {
                    return _this.nodes[c].parent = v;
                });
            });

            this.root = { children: [] };
            this.nodes.forEach(function (v) {
                if (typeof v.parent === 'undefined') {
                    v.parent = _this.root;
                    _this.root.children.push(v.id);
                }

                v.ports = [];
            });

            this.backToFront = this.nodes.slice(0);
            this.backToFront.sort(function (x, y) {
                return _this.getDepth(x) - _this.getDepth(y);
            });

            var frontToBackGroups = this.backToFront.slice(0).reverse().filter(function (g) {
                return !g.leaf;
            });
            frontToBackGroups.forEach(function (v) {
                var r = cola.vpsc.Rectangle.empty();
                v.children.forEach(function (c) {
                    return r = r.union(_this.nodes[c].rect);
                });
                v.rect = r.inflate(_this.groupPadding);
            });

            var colMids = this.midPoints(this.cols.map(function (r) {
                return r.x;
            }));
            var rowMids = this.midPoints(this.rows.map(function (r) {
                return r.y;
            }));

            var rowx = colMids[0], rowX = colMids[colMids.length - 1];
            var coly = rowMids[0], colY = rowMids[rowMids.length - 1];

            var hlines = this.rows.map(function (r) {
                return { x1: rowx, x2: rowX, y1: r.y, y2: r.y };
            }).concat(rowMids.map(function (m) {
                return { x1: rowx, x2: rowX, y1: m, y2: m };
            }));

            var vlines = this.cols.map(function (c) {
                return { x1: c.x, x2: c.x, y1: coly, y2: colY };
            }).concat(colMids.map(function (m) {
                return { x1: m, x2: m, y1: coly, y2: colY };
            }));

            var lines = hlines.concat(vlines);

            lines.forEach(function (l) {
                return l.verts = [];
            });

            this.verts = [];
            this.edges = [];

            hlines.forEach(function (h) {
                return vlines.forEach(function (v) {
                    var p = new Vert(_this.verts.length, v.x1, h.y1);
                    h.verts.push(p);
                    v.verts.push(p);
                    _this.verts.push(p);

                    var i = _this.backToFront.length;
                    while (i-- > 0) {
                        var node = _this.backToFront[i], r = node.rect;
                        var dx = Math.abs(p.x - r.cx()), dy = Math.abs(p.y - r.cy());
                        if (dx < r.width() / 2 && dy < r.height() / 2) {
                            p.node = node;
                            break;
                        }
                    }
                });
            });

            lines.forEach(function (l, li) {
                _this.nodes.forEach(function (v, i) {
                    v.rect.lineIntersections(l.x1, l.y1, l.x2, l.y2).forEach(function (intersect, j) {
                        var p = new Vert(_this.verts.length, intersect.x, intersect.y, v, l);
                        _this.verts.push(p);
                        l.verts.push(p);
                        v.ports.push(p);
                    });
                });

                var isHoriz = Math.abs(l.y1 - l.y2) < 0.1;
                var delta = function (a, b) {
                    return isHoriz ? b.x - a.x : b.y - a.y;
                };
                l.verts.sort(delta);
                for (var i = 1; i < l.verts.length; i++) {
                    var u = l.verts[i - 1], v = l.verts[i];
                    if (u.node && u.node === v.node && u.node.leaf)
                        continue;
                    _this.edges.push({ source: u.id, target: v.id, length: Math.abs(delta(u, v)) });
                }
            });
        }
        GridRouter.prototype.avg = function (a) {
            return a.reduce(function (x, y) {
                return x + y;
            }) / a.length;
        };
        GridRouter.prototype.getGridDim = function (axis) {
            var columns = [];
            var ls = this.leaves.slice(0, this.leaves.length);
            while (ls.length > 0) {
                var r = ls[0].rect;
                var col = ls.filter(function (v) {
                    return v.rect['overlap' + axis.toUpperCase()](r);
                });
                columns.push(col);
                col.forEach(function (v) {
                    return ls.splice(ls.indexOf(v), 1);
                });
                col[axis] = this.avg(col.map(function (v) {
                    return v.rect['c' + axis]();
                }));
            }
            columns.sort(function (x, y) {
                return x[axis] - y[axis];
            });
            return columns;
        };

        GridRouter.prototype.getDepth = function (v) {
            var depth = 0;
            while (v.parent !== this.root) {
                depth++;
                v = v.parent;
            }
            return depth;
        };

        GridRouter.prototype.midPoints = function (a) {
            var gap = a[1] - a[0];
            var mids = [a[0] - gap / 2];
            for (var i = 1; i < a.length; i++) {
                mids.push((a[i] + a[i - 1]) / 2);
            }
            mids.push(a[a.length - 1] + gap / 2);
            return mids;
        };

        GridRouter.prototype.findLineage = function (v) {
            var lineage = [v];
            do {
                v = v.parent;
                lineage.push(v);
            } while(v !== this.root);
            return lineage.reverse();
        };

        GridRouter.prototype.findAncestorPathBetween = function (a, b) {
            var aa = this.findLineage(a), ba = this.findLineage(b), i = 0;
            while (aa[i] === ba[i])
                i++;

            return { commonAncestor: aa[i - 1], lineages: aa.slice(i).concat(ba.slice(i)) };
        };

        GridRouter.prototype.siblingObstacles = function (a, b) {
            var _this = this;
            var path = this.findAncestorPathBetween(a, b);
            var lineageLookup = {};
            path.lineages.forEach(function (v) {
                return lineageLookup[v.id] = {};
            });
            var obstacles = path.commonAncestor.children.filter(function (v) {
                return !(v in lineageLookup);
            });

            path.lineages.filter(function (v) {
                return v.parent !== path.commonAncestor;
            }).forEach(function (v) {
                return obstacles = obstacles.concat(v.parent.children.filter(function (c) {
                    return c !== v.id;
                }));
            });

            return obstacles.map(function (v) {
                return _this.nodes[v];
            });
        };

        GridRouter.getSegmentSets = function (routes, x, y) {
            var vsegments = [];
            for (var ei = 0; ei < routes.length; ei++) {
                var route = routes[ei];
                for (var si = 0; si < route.length; si++) {
                    var s = route[si];
                    s.edgeid = ei;
                    s.i = si;
                    var sdx = s[1][x] - s[0][x];
                    if (Math.abs(sdx) < 0.1) {
                        vsegments.push(s);
                    }
                }
            }
            vsegments.sort(function (a, b) {
                return a[0][x] - b[0][x];
            });

            var vsegmentsets = [];
            var segmentset = null;
            for (var i = 0; i < vsegments.length; i++) {
                var s = vsegments[i];
                if (!segmentset || Math.abs(s[0][x] - segmentset.pos) > 0.1) {
                    segmentset = { pos: s[0][x], segments: [] };
                    vsegmentsets.push(segmentset);
                }
                segmentset.segments.push(s);
            }
            return vsegmentsets;
        };

        GridRouter.nudgeSegs = function (x, y, routes, segments, leftOf, gap) {
            var n = segments.length;
            if (n <= 1)
                return;
            var vs = segments.map(function (s) {
                return new cola.vpsc.Variable(s[0][x]);
            });
            var cs = [];
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n; j++) {
                    if (i === j)
                        continue;
                    var s1 = segments[i], s2 = segments[j], e1 = s1.edgeid, e2 = s2.edgeid, lind = -1, rind = -1;

                    if (x == 'x') {
                        if (leftOf(e1, e2)) {
                            console.log('s1: ' + s1[0][x] + ',' + s1[0][y] + '-' + s1[1][x] + ',' + s1[1][y]);
                            if (s1[0][y] < s1[1][y]) {
                                lind = j, rind = i;
                            } else {
                                lind = i, rind = j;
                            }
                        }
                    } else {
                        if (leftOf(e1, e2)) {
                            if (s1[0][y] < s1[1][y]) {
                                lind = i, rind = j;
                            } else {
                                lind = j, rind = i;
                            }
                        }
                    }
                    if (lind >= 0) {
                        console.log(x + ' constraint: ' + lind + '<' + rind);
                        cs.push(new cola.vpsc.Constraint(vs[lind], vs[rind], gap));
                    }
                }
            }
            var solver = new cola.vpsc.Solver(vs, cs);
            solver.solve();
            vs.forEach(function (v, i) {
                var s = segments[i];
                var pos = v.position();
                s[0][x] = s[1][x] = pos;
                var route = routes[s.edgeid];
                if (s.i > 0)
                    route[s.i - 1][1][x] = pos;
                if (s.i < route.length - 1)
                    route[s.i + 1][0][x] = pos;
            });
        };

        GridRouter.nudgeSegments = function (routes, x, y, leftOf, gap) {
            var vsegmentsets = GridRouter.getSegmentSets(routes, x, y);

            for (var i = 0; i < vsegmentsets.length; i++) {
                var ss = vsegmentsets[i];
                var events = [];
                for (var j = 0; j < ss.segments.length; j++) {
                    var s = ss.segments[j];
                    events.push({ type: 0, s: s, pos: Math.min(s[0][y], s[1][y]) });
                    events.push({ type: 1, s: s, pos: Math.max(s[0][y], s[1][y]) });
                }
                events.sort(function (a, b) {
                    return a.pos - b.pos + a.type - b.type;
                });
                var open = [];
                var openCount = 0;
                events.forEach(function (e) {
                    if (e.type === 0) {
                        open.push(e.s);
                        openCount++;
                    } else {
                        openCount--;
                    }
                    if (openCount == 0) {
                        GridRouter.nudgeSegs(x, y, routes, open, leftOf, gap);
                        open = [];
                    }
                });
            }
        };

        GridRouter.prototype.routeEdges = function (edges, source, target) {
            var _this = this;
            var routes = edges.map(function (e) {
                return _this.route(source(e), target(e));
            });

            return routes;
        };

        GridRouter.angleBetween2Lines = function (line1, line2) {
            var angle1 = Math.atan2(line1[0].y - line1[1].y, line1[0].x - line1[1].x);
            var angle2 = Math.atan2(line2[0].y - line2[1].y, line2[0].x - line2[1].x);
            var diff = angle1 - angle2;
            if (diff > Math.PI || diff < -Math.PI) {
                diff = angle2 - angle1;
            }
            return diff;
        };

        GridRouter.isLeft = function (a, b, c) {
            return ((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) <= 0;
        };

        GridRouter.getOrder = function (pairs) {
            var outgoing = {};
            for (var i = 0; i < pairs.length; i++) {
                var p = pairs[i];
                if (typeof outgoing[p.l] === 'undefined')
                    outgoing[p.l] = {};
                outgoing[p.l][p.r] = true;
            }
            return function (l, r) {
                return typeof outgoing[l] !== 'undefined' && outgoing[l][r];
            };
        };

        GridRouter.orderEdges = function (edges) {
            var edgeOrder = [];
            for (var i = 0; i < edges.length - 1; i++) {
                for (var j = i + 1; j < edges.length; j++) {
                    var e = edges[i], f = edges[j], lcs = new cola.LongestCommonSubsequence(e, f);
                    if (!lcs.reversed) {
                        var u = e[lcs.si + lcs.length - 2], vi = e[lcs.si + lcs.length], vj = f[lcs.ti + lcs.length];
                        if (GridRouter.isLeft(u, vi, vj)) {
                            edgeOrder.push({ l: j, r: i });
                        } else {
                            edgeOrder.push({ l: i, r: j });
                        }
                    } else {
                        lcs.s.forEach(function (p, i) {
                            console.log('s[' + i + ']=' + p.id);
                        });
                        lcs.t.forEach(function (p, i) {
                            console.log('t[' + i + ']=' + p.id);
                        });
                        var u = e[lcs.si], vi = e[lcs.si - 1], vj = f[lcs.ti + lcs.length];

                        if (GridRouter.isLeft(u, vi, vj)) {
                            edgeOrder.push({ l: j, r: i });
                        } else {
                            edgeOrder.push({ l: i, r: j });
                        }
                    }
                }
            }
            edgeOrder.forEach(function (e) {
                console.log('l:' + e.l + ',r:' + e.r);
            });
            return cola.GridRouter.getOrder(edgeOrder);
        };

        GridRouter.makeSegments = function (path) {
            function copyPoint(p) {
                return { x: p.x, y: p.y };
            }
            var isStraight = function (a, b, c) {
                return Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) < 0.001;
            };
            var segments = [];
            var a = copyPoint(path[0]);
            for (var i = 1; i < path.length; i++) {
                var b = copyPoint(path[i]), c = i < path.length - 1 ? path[i + 1] : null;
                if (!c || !isStraight(a, b, c)) {
                    segments.push([a, b]);
                    a = b;
                }
            }
            return segments;
        };

        GridRouter.prototype.route = function (s, t) {
            var _this = this;
            var source = this.nodes[s], target = this.nodes[t];
            this.obstacles = this.siblingObstacles(source, target);

            var obstacleLookup = {};
            this.obstacles.forEach(function (o) {
                return obstacleLookup[o.id] = o;
            });
            this.passableEdges = this.edges.filter(function (e) {
                var u = _this.verts[e.source], v = _this.verts[e.target];
                return !(u.node && u.node.id in obstacleLookup || v.node && v.node.id in obstacleLookup);
            });

            for (var i = 1; i < source.ports.length; i++) {
                var u = source.ports[0].id;
                var v = source.ports[i].id;
                this.passableEdges.push({
                    source: u,
                    target: v,
                    length: 0
                });
            }
            for (var i = 1; i < target.ports.length; i++) {
                var u = target.ports[0].id;
                var v = target.ports[i].id;
                this.passableEdges.push({
                    source: u,
                    target: v,
                    length: 0
                });
            }

            var getSource = function (e) {
                return e.source;
            }, getTarget = function (e) {
                return e.target;
            }, getLength = function (e) {
                return e.length;
            };

            var shortestPathCalculator = new cola.shortestpaths.Calculator(this.verts.length, this.passableEdges, getSource, getTarget, getLength);
            var bendPenalty = function (u, v, w) {
                var a = _this.verts[u], b = _this.verts[v], c = _this.verts[w];
                var dx = Math.abs(c.x - a.x), dy = Math.abs(c.y - a.y);

                if (a.node === source && a.node === b.node || b.node === target && b.node === c.node)
                    return 0;
                return dx > 1 && dy > 1 ? 1000 : 0;
            };

            var shortestPath = shortestPathCalculator.PathFromNodeToNodeWithPrevCost(source.ports[0].id, target.ports[0].id, bendPenalty);

            var pathSegments = [];
            for (var i = 0; i < shortestPath.length; i++) {
                var a = i === 0 ? this.nodes[target.id].ports[0] : this.verts[shortestPath[i - 1]];
                var b = this.verts[shortestPath[i]];
                if (a.node === source && b.node === source)
                    continue;
                if (a.node === target && b.node === target)
                    continue;
                pathSegments.push([a, b]);
            }

            var mergedSegments = [];
            var a = pathSegments[0][0];
            for (var i = 0; i < pathSegments.length; i++) {
                var b = pathSegments[i][1], c = i < pathSegments.length - 1 ? pathSegments[i + 1][1] : null;
                if (!c || c && bendPenalty(a.id, b.id, c.id) > 0) {
                    mergedSegments.push([a, b]);
                    a = b;
                }
            }

            mergedSegments = pathSegments;
            var result = mergedSegments.map(function (s) {
                return [{ x: s[1].x, y: s[1].y }, { x: s[0].x, y: s[0].y }];
            });
            result.reverse();
            return result;
            return pathSegments;
        };
        return GridRouter;
    })();
    cola.GridRouter = GridRouter;
})(cola || (cola = {}));
var cola;
(function (cola) {
    function unionCount(a, b) {
        var u = {};
        for (var i in a)
            u[i] = {};
        for (var i in b)
            u[i] = {};
        return Object.keys(u).length;
    }

    function intersectionCount(a, b) {
        var n = 0;
        for (var i in a)
            if (typeof b[i] !== 'undefined')
                ++n;
        return n;
    }

    function getNeighbours(links, la) {
        var neighbours = {};
        var addNeighbours = function (u, v) {
            if (typeof neighbours[u] === 'undefined')
                neighbours[u] = {};
            neighbours[u][v] = {};
        };
        links.forEach(function (e) {
            var u = la.getSourceIndex(e), v = la.getTargetIndex(e);
            addNeighbours(u, v);
            addNeighbours(v, u);
        });
        return neighbours;
    }

    function computeLinkLengths(links, w, f, la) {
        var neighbours = getNeighbours(links, la);
        links.forEach(function (l) {
            var a = neighbours[la.getSourceIndex(l)];
            var b = neighbours[la.getTargetIndex(l)];
            la.setLength(l, 1 + w * f(a, b));
        });
    }

    function symmetricDiffLinkLengths(links, la, w) {
        if (typeof w === "undefined") { w = 1; }
        computeLinkLengths(links, w, function (a, b) {
            return Math.sqrt(unionCount(a, b) - intersectionCount(a, b));
        }, la);
    }
    cola.symmetricDiffLinkLengths = symmetricDiffLinkLengths;

    function jaccardLinkLengths(links, la, w) {
        if (typeof w === "undefined") { w = 1; }
        computeLinkLengths(links, w, function (a, b) {
            return Math.min(Object.keys(a).length, Object.keys(b).length) < 1.1 ? 0 : intersectionCount(a, b) / unionCount(a, b);
        }, la);
    }
    cola.jaccardLinkLengths = jaccardLinkLengths;

    function generateDirectedEdgeConstraints(n, links, axis, la) {
        var components = stronglyConnectedComponents(n, links, la);
        var nodes = {};
        components.filter(function (c) {
            return c.length > 1;
        }).forEach(function (c) {
            return c.forEach(function (v) {
                return nodes[v] = c;
            });
        });
        var constraints = [];
        links.forEach(function (l) {
            var ui = la.getSourceIndex(l), vi = la.getTargetIndex(l), u = nodes[ui], v = nodes[vi];
            if (!u || !v || u.component !== v.component) {
                constraints.push({
                    axis: axis,
                    left: ui,
                    right: vi,
                    gap: la.getMinSeparation(l)
                });
            }
        });
        return constraints;
    }
    cola.generateDirectedEdgeConstraints = generateDirectedEdgeConstraints;

    function stronglyConnectedComponents(numVertices, edges, la) {
        var adjList = new Array(numVertices);
        var index = new Array(numVertices);
        var lowValue = new Array(numVertices);
        var active = new Array(numVertices);

        for (var i = 0; i < numVertices; ++i) {
            adjList[i] = [];
            index[i] = -1;
            lowValue[i] = 0;
            active[i] = false;
        }

        for (var i = 0; i < edges.length; ++i) {
            adjList[la.getSourceIndex(edges[i])].push(la.getTargetIndex(edges[i]));
        }

        var count = 0;
        var S = [];
        var components = [];

        function strongConnect(v) {
            index[v] = count;
            lowValue[v] = count;
            active[v] = true;
            count += 1;
            S.push(v);
            var e = adjList[v];
            for (var i = 0; i < e.length; ++i) {
                var u = e[i];
                if (index[u] < 0) {
                    strongConnect(u);
                    lowValue[v] = Math.min(lowValue[v], lowValue[u]) | 0;
                } else if (active[u]) {
                    lowValue[v] = Math.min(lowValue[v], lowValue[u]);
                }
            }
            if (lowValue[v] === index[v]) {
                var component = [];
                for (var i = S.length - 1; i >= 0; --i) {
                    var w = S[i];
                    active[w] = false;
                    component.push(w);
                    if (w === v) {
                        S.length = i;
                        break;
                    }
                }
                components.push(component);
            }
        }

        for (var i = 0; i < numVertices; ++i) {
            if (index[i] < 0) {
                strongConnect(i);
            }
        }

        return components;
    }
})(cola || (cola = {}));
var cola;
(function (cola) {
    (function (powergraph) {
        var PowerEdge = (function () {
            function PowerEdge(source, target, type) {
                this.source = source;
                this.target = target;
                this.type = type;
            }
            return PowerEdge;
        })();
        powergraph.PowerEdge = PowerEdge;

        var Configuration = (function () {
            function Configuration(n, edges, linkAccessor) {
                var _this = this;
                this.linkAccessor = linkAccessor;
                this.modules = new Array(n);
                this.roots = new ModuleSet();
                for (var i = 0; i < n; ++i) {
                    this.roots.add(this.modules[i] = new Module(i));
                }
                this.R = edges.length;
                edges.forEach(function (e) {
                    var s = _this.modules[linkAccessor.getSourceIndex(e)], t = _this.modules[linkAccessor.getTargetIndex(e)], type = linkAccessor.getType(e);
                    s.outgoing.add(type, t);
                    t.incoming.add(type, s);
                });
            }
            Configuration.prototype.merge = function (a, b) {
                var inInt = a.incoming.intersection(b.incoming), outInt = a.outgoing.intersection(b.outgoing);
                var children = new ModuleSet();
                children.add(a);
                children.add(b);
                var m = new Module(this.modules.length, outInt, inInt, children);
                this.modules.push(m);
                var update = function (s, i, o) {
                    s.forAll(function (ms, linktype) {
                        ms.forAll(function (n) {
                            var nls = n[i];
                            nls.add(linktype, m);
                            nls.remove(linktype, a);
                            nls.remove(linktype, b);
                            a[o].remove(linktype, n);
                            b[o].remove(linktype, n);
                        });
                    });
                };
                update(outInt, "incoming", "outgoing");
                update(inInt, "outgoing", "incoming");
                this.R -= inInt.count() + outInt.count();
                this.roots.remove(a);
                this.roots.remove(b);
                this.roots.add(m);
                return m;
            };

            Configuration.prototype.rootMerges = function () {
                var rs = this.roots.modules();
                var n = rs.length;
                var merges = new Array(n * (n - 1));
                var ctr = 0;
                for (var i = 0, i_ = n - 1; i < i_; ++i) {
                    for (var j = i + 1; j < n; ++j) {
                        var a = rs[i], b = rs[j];
                        merges[ctr++] = { nEdges: this.nEdges(a, b), a: a, b: b };
                    }
                }
                return merges;
            };

            Configuration.prototype.greedyMerge = function () {
                var ms = this.rootMerges().sort(function (a, b) {
                    return a.nEdges - b.nEdges;
                });
                var m = ms[0];
                if (m.nEdges >= this.R)
                    return false;
                this.merge(m.a, m.b);
                return true;
            };

            Configuration.prototype.nEdges = function (a, b) {
                var inInt = a.incoming.intersection(b.incoming), outInt = a.outgoing.intersection(b.outgoing);
                return this.R - inInt.count() - outInt.count();
            };

            Configuration.prototype.getGroupHierarchy = function (retargetedEdges) {
                var _this = this;
                var groups = [];
                var root = {};
                toGroups(this.roots, root, groups);
                var es = this.allEdges();
                es.forEach(function (e) {
                    var a = _this.modules[e.source];
                    var b = _this.modules[e.target];
                    retargetedEdges.push(new PowerEdge(typeof a.gid === "undefined" ? e.source : groups[a.gid], typeof b.gid === "undefined" ? e.target : groups[b.gid], e.type));
                });
                return groups;
            };

            Configuration.prototype.allEdges = function () {
                var es = [];
                Configuration.getEdges(this.roots, es);
                return es;
            };

            Configuration.getEdges = function (modules, es) {
                modules.forAll(function (m) {
                    m.getEdges(es);
                    Configuration.getEdges(m.children, es);
                });
            };
            return Configuration;
        })();
        powergraph.Configuration = Configuration;

        function toGroups(modules, group, groups) {
            modules.forAll(function (m) {
                if (m.isLeaf()) {
                    if (!group.leaves)
                        group.leaves = [];
                    group.leaves.push(m.id);
                } else {
                    var g = group;
                    m.gid = groups.length;
                    if (!m.isIsland()) {
                        g = { id: m.gid };
                        if (!group.groups)
                            group.groups = [];
                        group.groups.push(m.gid);
                        groups.push(g);
                    }
                    toGroups(m.children, g, groups);
                }
            });
        }

        var Module = (function () {
            function Module(id, outgoing, incoming, children) {
                if (typeof outgoing === "undefined") { outgoing = new LinkSets(); }
                if (typeof incoming === "undefined") { incoming = new LinkSets(); }
                if (typeof children === "undefined") { children = new ModuleSet(); }
                this.id = id;
                this.outgoing = outgoing;
                this.incoming = incoming;
                this.children = children;
            }
            Module.prototype.getEdges = function (es) {
                var _this = this;
                this.outgoing.forAll(function (ms, edgetype) {
                    ms.forAll(function (target) {
                        es.push(new PowerEdge(_this.id, target.id, edgetype));
                    });
                });
            };

            Module.prototype.isLeaf = function () {
                return this.children.count() === 0;
            };

            Module.prototype.isIsland = function () {
                return this.outgoing.count() === 0 && this.incoming.count() === 0;
            };
            return Module;
        })();
        powergraph.Module = Module;

        function intersection(m, n) {
            var i = {};
            for (var v in m)
                if (v in n)
                    i[v] = m[v];
            return i;
        }

        var ModuleSet = (function () {
            function ModuleSet() {
                this.table = {};
            }
            ModuleSet.prototype.count = function () {
                return Object.keys(this.table).length;
            };
            ModuleSet.prototype.intersection = function (other) {
                var result = new ModuleSet();
                result.table = intersection(this.table, other.table);
                return result;
            };
            ModuleSet.prototype.intersectionCount = function (other) {
                return this.intersection(other).count();
            };
            ModuleSet.prototype.contains = function (id) {
                return id in this.table;
            };
            ModuleSet.prototype.add = function (m) {
                this.table[m.id] = m;
            };
            ModuleSet.prototype.remove = function (m) {
                delete this.table[m.id];
            };
            ModuleSet.prototype.forAll = function (f) {
                for (var mid in this.table) {
                    f(this.table[mid]);
                }
            };
            ModuleSet.prototype.modules = function () {
                var vs = [];
                this.forAll(function (m) {
                    return vs.push(m);
                });
                return vs;
            };
            return ModuleSet;
        })();
        powergraph.ModuleSet = ModuleSet;

        var LinkSets = (function () {
            function LinkSets() {
                this.sets = {};
                this.n = 0;
            }
            LinkSets.prototype.count = function () {
                return this.n;
            };
            LinkSets.prototype.contains = function (id) {
                var result = false;
                this.forAllModules(function (m) {
                    if (!result && m.id == id) {
                        result = true;
                    }
                });
                return result;
            };
            LinkSets.prototype.add = function (linktype, m) {
                var s = linktype in this.sets ? this.sets[linktype] : this.sets[linktype] = new ModuleSet();
                s.add(m);
                ++this.n;
            };
            LinkSets.prototype.remove = function (linktype, m) {
                var ms = this.sets[linktype];
                ms.remove(m);
                if (ms.count() === 0) {
                    delete this.sets[linktype];
                }
                --this.n;
            };
            LinkSets.prototype.forAll = function (f) {
                for (var linktype in this.sets) {
                    f(this.sets[linktype], linktype);
                }
            };
            LinkSets.prototype.forAllModules = function (f) {
                this.forAll(function (ms, lt) {
                    return ms.forAll(f);
                });
            };
            LinkSets.prototype.intersection = function (other) {
                var result = new LinkSets();
                this.forAll(function (ms, lt) {
                    if (lt in other.sets) {
                        var i = ms.intersection(other.sets[lt]), n = i.count();
                        if (n > 0) {
                            result.sets[lt] = i;
                            result.n += n;
                        }
                    }
                });
                return result;
            };
            return LinkSets;
        })();
        powergraph.LinkSets = LinkSets;

        function intersectionCount(m, n) {
            return Object.keys(intersection(m, n)).length;
        }

        function getGroups(nodes, links, la) {
            var n = nodes.length, c = new powergraph.Configuration(n, links, la);
            while (c.greedyMerge())
                ;
            var powerEdges = [];
            var g = c.getGroupHierarchy(powerEdges);
            powerEdges.forEach(function (e) {
                var f = function (end) {
                    var g = e[end];
                    if (typeof g == "number")
                        e[end] = nodes[g];
                };
                f("source");
                f("target");
            });
            return { groups: g, powerEdges: powerEdges };
        }
        powergraph.getGroups = getGroups;
    })(cola.powergraph || (cola.powergraph = {}));
    var powergraph = cola.powergraph;
})(cola || (cola = {}));

/**
 * @module cola
 */
var cola;
(function (cola) {

    /**
     * @class d3adaptor
     */
    cola.d3adaptor = function () {
        var event = d3.dispatch("start", "tick", "end");

        var adaptor = cola.adaptor({
            trigger: function (e) {
                event[e.type](e); // via d3 dispatcher, e.g. event.start(e);
            },

            on: function(type, listener){
                return event.on(type, listener);
            },

            kick: function (tick) {
                d3.timer(tick);
            },

            // use `node.call(adaptor.drag)` to make nodes draggable
            drag: function () {
                var drag = d3.behavior.drag()
                    .origin(function(d){ return d; })
                    .on("dragstart.d3adaptor", colaDragstart)
                    .on("drag.d3adaptor", function (d) {
                        d.px = d3.event.x, d.py = d3.event.y;
                        adaptor.resume(); // restart annealing
                    })
                    .on("dragend.d3adaptor", colaDragend);

                if (!arguments.length) return drag;

                this//.on("mouseover.adaptor", colaMouseover)
                    //.on("mouseout.adaptor", colaMouseout)
                    .call(drag);
            }
        });
        
        return adaptor;
    };

    /**
     * @class adaptor
     */
    cola.adaptor = function (options) {   
        var adaptor = {},
            trigger = options.trigger, // a function that is notified of events like "tick"
            kick = options.kick, // a function that kicks off the simulation tick loop
            size = [1, 1],
            linkDistance = 20,
            linkType = null,
            avoidOverlaps = false,
            handleDisconnected = true,
            drag,
            alpha,
            lastStress,
            running = false,
            nodes = [],
            groups = [],
            variables = [],
            rootGroup = null,
            links = [],
            constraints = [],
            distanceMatrix = null,
            descent = null,
            directedLinkConstraints = null,
            threshold = 0.01,
            defaultNodeSize = 10,
            visibilityGraph = null;

        adaptor.on = options.on; // a function for binding to events on the adapter
        adaptor.drag = options.drag; // a function to allow for dragging of nodes

        // give external access to drag-related helper functions
        adaptor.dragstart = colaDragstart;
        adaptor.dragend = colaDragend;
        adaptor.mouseover = colaMouseover;
        adaptor.mouseout = colaMouseout;

        adaptor.tick = function () {
            if (alpha < threshold) {
                trigger({ type: "end", alpha: alpha = 0 });
                delete lastStress;
                running = false;
                return true;
            }

            var n = nodes.length,
                m = links.length,
                o;

            descent.locks.clear();
            for (i = 0; i < n; ++i) {
                o = nodes[i];
                if (o.fixed) {
                    if (typeof o.px === 'undefined' || typeof o.py === 'undefined') {
                        o.px = o.x;
                        o.py = o.y;
                    }
                    var p = [o.px, o.py];
                    descent.locks.add(i, p);
                }
            }

            var s1 = descent.rungeKutta();
            //var s1 = descent.reduceStress();
            if (s1 === 0) {
                alpha = 0;
            } else if (typeof lastStress !== 'undefined') {
                alpha = Math.abs(Math.abs(lastStress / s1) - 1);
            }
            lastStress = s1;

            for (i = 0; i < n; ++i) {
                o = nodes[i];
                if (o.fixed) {
                    o.x = o.px;
                    o.y = o.py;
                } else {
                    o.x = descent.x[0][i];
                    o.y = descent.x[1][i];
                }
            }

            trigger({ type: "tick", alpha: alpha });
        };

        /**
         * the list of nodes.
         * If nodes has not been set, but links has, then we instantiate a nodes list here, of the correct size,
         * before returning it.
         * @property nodes {Array}
         * @default empty list
         */
        adaptor.nodes = function (v) {
            if (!arguments.length) {
                if (nodes.length === 0 && links.length > 0) {
                    var n = 0;
                    links.forEach(function (l) {
                        n = Math.max(n, l.source, l.target);
                    });
                    nodes = new Array(++n);
                    for (var i = 0; i < n; ++i) {
                        nodes[i] = {};
                    }
                }
                return nodes;
            }
            nodes = v;
            return adaptor;
        };

        /**
         * a list of hierarchical groups defined over nodes
         * @property groups {Array}
         * @default empty list
         */
        adaptor.groups = function (x) {
            if (!arguments.length) return groups;
            groups = x;
            rootGroup = {};
            groups.forEach(function (g) {
                if (typeof g.padding === "undefined")
                    g.padding = 1;
                if (typeof g.leaves !== "undefined")
                    g.leaves.forEach(function (v, i) { (g.leaves[i] = nodes[v]).parent = g });
                if (typeof g.groups !== "undefined")
                    g.groups.forEach(function (gi, i) { (g.groups[i] = groups[gi]).parent = g });
            });
            rootGroup.leaves = nodes.filter(function (v) { return typeof v.parent === 'undefined'; });
            rootGroup.groups = groups.filter(function (g) { return typeof g.parent === 'undefined'; });
            return adaptor;
        };

        adaptor.powerGraphGroups = function (f) {
            var g = cola.powergraph.getGroups(nodes, links, linkAccessor);
            this.groups(g.groups);
            f(g);
            return adaptor;
        }

        /**
         * if true, the layout will not permit overlaps of the node bounding boxes (defined by the width and height properties on nodes)
         * @property avoidOverlaps
         * @type bool
         * @default false
         */
        adaptor.avoidOverlaps = function (v) {
            if (!arguments.length) return avoidOverlaps;
            avoidOverlaps = v;
            return adaptor;
        }

        /**
         * if true, the layout will not permit overlaps of the node bounding boxes (defined by the width and height properties on nodes)
         * @property avoidOverlaps
         * @type bool
         * @default false
         */
        adaptor.handleDisconnected = function (v) {
            if (!arguments.length) return handleDisconnected;
            handleDisconnected = v;
            return adaptor;
        }


        /**
         * causes constraints to be generated such that directed graphs are laid out either from left-to-right or top-to-bottom.
         * a separation constraint is generated in the selected axis for each edge that is not involved in a cycle (part of a strongly connected component)
         * @param axis {string} 'x' for left-to-right, 'y' for top-to-bottom
         * @param minSeparation {number|link=>number} either a number specifying a minimum spacing required across all links or a function to return the minimum spacing for each link
         */
        adaptor.flowLayout = function (axis, minSeparation) {
            if (!arguments.length) axis = 'y';
            directedLinkConstraints = {
                axis: axis,
                getMinSeparation: typeof minSeparation === 'number' ?  function () { return minSeparation } : minSeparation
            };
            return adaptor;
        }

        /**
         * links defined as source, target pairs over nodes
         * @property links {array}
         * @default empty list
         */
        adaptor.links = function (x) {
            if (!arguments.length) return links;
            links = x;
            return adaptor;
        };

        /**
         * list of constraints of various types
         * @property constraints
         * @type {array} 
         * @default empty list
         */
        adaptor.constraints = function (c) {
            if (!arguments.length) return constraints;
            constraints = c;
            return adaptor;
        }

        /**
         * Matrix of ideal distances between all pairs of nodes.
         * If unspecified, the ideal distances for pairs of nodes will be based on the shortest path distance between them.
         * @property distanceMatrix
         * @type {Array of Array of Number}
         * @default null
         */
        adaptor.distanceMatrix = function (d) {
            if (!arguments.length) return distanceMatrix;
            distanceMatrix = d;
            return adaptor;
        }

        /**
         * Size of the layout canvas dimensions [x,y]. Currently only used to determine the midpoint which is taken as the starting position
         * for nodes with no preassigned x and y.
         * @property size
         * @type {Array of Number}
         */
        adaptor.size = function (x) {
            if (!arguments.length) return size;
            size = x;
            return adaptor;
        };

        /**
         * Default size (assume nodes are square so both width and height) to use in packing if node width/height are not specified.
         * @property defaultNodeSize
         * @type {Number}
         */
        adaptor.defaultNodeSize = function (x) {
            if (!arguments.length) return defaultNodeSize;
            defaultNodeSize = x;
            return adaptor;
        };

        adaptor.linkDistance = function (x) {
            if (!arguments.length) 
                return typeof linkDistance === "function" ? linkDistance() : linkDistance;
            linkDistance = typeof x === "function" ? x : +x;
            return adaptor;
        };

        adaptor.linkType = function (f) {
            linkType = f;
            return adaptor;
        }

        adaptor.convergenceThreshold = function (x) {
            if (!arguments.length) return threshold;
            threshold = typeof x === "function" ? x : +x;
            return adaptor;
        };

        adaptor.alpha = function (x) {
            if (!arguments.length) return alpha;

            x = +x;
            if (alpha) { // if we're already running
                if (x > 0) alpha = x; // we might keep it hot
                else alpha = 0; // or, next tick will dispatch "end"
            } else if (x > 0) { // otherwise, fire it up!
                if (!running) {
                    running = true;
                    trigger({ type: "start", alpha: alpha = x });
                    kick( adaptor.tick );
                }
            }

            return adaptor;
        };

        function getLinkLength(link) {
            return typeof linkDistance === "function" ? +linkDistance.call(null, link) : linkDistance;
        }

        function setLinkLength(link, length) {
            link.length = length;
        }

        function getLinkType(link) {
            return typeof linkType === "function" ? linkType(link) : 0;
        }

        var linkAccessor = { getSourceIndex: getSourceIndex, getTargetIndex: getTargetIndex, setLength: setLinkLength, getType: getLinkType };

        adaptor.symmetricDiffLinkLengths = function (idealLength, w) {
            cola.symmetricDiffLinkLengths(links, linkAccessor, w);
            this.linkDistance(function (l) { return idealLength * l.length });
            return adaptor;
        }

        adaptor.jaccardLinkLengths = function (idealLength, w) {
            cola.jaccardLinkLengths(links, linkAccessor, w);
            this.linkDistance(function (l) { return idealLength * l.length });
            return adaptor;
        }

        /**
         * start the layout process
         * @method start
         * @param {number} [initialUnconstrainedIterations=0] unconstrained initial layout iterations 
         * @param {number} [initialUserConstraintIterations=0] initial layout iterations with user-specified constraints
         * @param {number} [initialAllConstraintsIterations=0] initial layout iterations with all constraints including non-overlap
         */
        adaptor.start = function () {
            var i,
                j,
                n = this.nodes().length,
                N = n + 2 * groups.length,
                m = links.length,
                w = size[0],
                h = size[1];

            var x = new Array(N), y = new Array(N);
            variables = new Array(N);

            var makeVariable = function (i, w) {
                var v = variables[i] = new cola.vpsc.Variable(0, w);
                v.index = i;
                return v;
            }

            var G = null;

            var ao = this.avoidOverlaps();

            nodes.forEach(function (v, i) {
                v.index = i;
                if (typeof v.x === 'undefined') {
                    v.x = w / 2, v.y = h / 2;
                }
                x[i] = v.x, y[i] = v.y;
            });

            var distances;
            if (distanceMatrix) {
                // use the user specified distanceMatrix
                distances = distanceMatrix;
            } else {
                // construct an n X n distance matrix based on shortest paths through graph (with respect to edge.length).
                distances = (new cola.shortestpaths.Calculator(N, links, getSourceIndex, getTargetIndex, getLinkLength)).DistanceMatrix();

                // G is a square matrix with G[i][j] = 1 iff there exists an edge between node i and node j
                // otherwise 2. (
                G = cola.Descent.createSquareMatrix(N, function () { return 2 });
                links.forEach(function (e) {
                    var u = getSourceIndex(e), v = getTargetIndex(e);
                    G[u][v] = G[v][u] = 1;
                });
            }

            var D = cola.Descent.createSquareMatrix(N, function (i, j) {
                return distances[i][j];
            });

            if (rootGroup && typeof rootGroup.groups !== 'undefined') {
                var i = n;
                groups.forEach(function(g) {
                    G[i][i + 1] = G[i + 1][i] = 1e-6;
                    D[i][i + 1] = D[i + 1][i] = 0.1;
                    x[i] = 0, y[i++] = 0;
                    x[i] = 0, y[i++] = 0;
                });
            } else rootGroup = { leaves: nodes, groups: [] };

            var curConstraints = constraints || [];
            if (directedLinkConstraints) {
                linkAccessor.getMinSeparation = directedLinkConstraints.getMinSeparation;
                curConstraints = curConstraints.concat(cola.generateDirectedEdgeConstraints(n, links, directedLinkConstraints.axis, linkAccessor));
            }
            
            var initialUnconstrainedIterations = arguments.length > 0 ? arguments[0] : 0;
            var initialUserConstraintIterations = arguments.length > 1 ? arguments[1] : 0;
            var initialAllConstraintsIterations = arguments.length > 2 ? arguments[2] : 0;
            this.avoidOverlaps(false);
            descent = new cola.Descent([x, y], D);

            descent.locks.clear();
            for (i = 0; i < n; ++i) {
                o = nodes[i];
                if (o.fixed) {
                    o.px = o.x;
                    o.py = o.y;
                    var p = [o.x, o.y];
                    descent.locks.add(i, p);
                }
            }
            descent.threshold = threshold;

            // apply initialIterations without user constraints or nonoverlap constraints
            descent.run(initialUnconstrainedIterations);

            // apply initialIterations with user constraints but no noverlap constraints
            if (curConstraints.length > 0) descent.project = new cola.vpsc.Projection(nodes, groups, rootGroup, curConstraints).projectFunctions();
            descent.run(initialUserConstraintIterations);

            // subsequent iterations will apply all constraints
            this.avoidOverlaps(ao);
            if (ao) {
                nodes.forEach(function (v, i) { v.x = x[i], v.y = y[i]; });
                descent.project = new cola.vpsc.Projection(nodes, groups, rootGroup, curConstraints, true).projectFunctions();
                nodes.forEach(function (v, i) { x[i] = v.x, y[i] = v.y; });
            }

            // allow not immediately connected nodes to relax apart (p-stress)
            descent.G = G;
            descent.run(initialAllConstraintsIterations);

            links.forEach(function (l) {
                if (typeof l.source == "number") l.source = nodes[l.source];
                if (typeof l.target == "number") l.target = nodes[l.target];
            });
            nodes.forEach(function (v, i) {
                v.x = x[i], v.y = y[i];
            });

            // recalculate nodes position for disconnected graphs
            if (!distanceMatrix && handleDisconnected) {
                cola.applyPacking(cola.separateGraphs(nodes, links), w, h, defaultNodeSize);

                nodes.forEach(function (v, i) {
                    descent.x[0][i] = v.x, descent.x[1][i] = v.y;
                });
            }
            
            return adaptor.resume();
        };

        adaptor.resume = function () {
            return adaptor.alpha(.1);
        };

        adaptor.stop = function () {
            return adaptor.alpha(0);
        };

        adaptor.prepareEdgeRouting = function (nodeMargin) {
            visibilityGraph = new cola.geom.TangentVisibilityGraph(
                    nodes.map(function (v) {
                        return v.bounds.inflate(-nodeMargin).vertices();
                    }));
        }

        adaptor.routeEdge = function(d, draw) {
            var lineData = [];
            //if (d.source.id === 10 && d.target.id === 11) {
            //    debugger;
            //}
            var vg2 = new cola.geom.TangentVisibilityGraph(visibilityGraph.P, { V: visibilityGraph.V, E: visibilityGraph.E }),
                port1 = { x: d.source.x, y: d.source.y },
                port2 = { x: d.target.x, y: d.target.y },
                start = vg2.addPoint(port1, d.source.id),
                end = vg2.addPoint(port2, d.target.id);
            vg2.addEdgeIfVisible(port1, port2, d.source.id, d.target.id);
            if (typeof draw !== 'undefined') {
                draw(vg2);
            }
            var sourceInd = function(e) { return e.source.id }, targetInd = function(e) { return e.target.id }, length = function(e) { return e.length() }, 
                spCalc = new cola.shortestpaths.Calculator(vg2.V.length, vg2.E, sourceInd, targetInd, length),
                shortestPath = spCalc.PathFromNodeToNode(start.id, end.id);
            if (shortestPath.length === 1 || shortestPath.length === vg2.V.length) {
                cola.vpsc.makeEdgeBetween(d, d.source.innerBounds, d.target.innerBounds, 5);
                lineData = [{ x: d.sourceIntersection.x, y: d.sourceIntersection.y }, { x: d.arrowStart.x, y: d.arrowStart.y }];
            } else {
                var n = shortestPath.length - 2,
                    p = vg2.V[shortestPath[n]].p,
                    q = vg2.V[shortestPath[0]].p,
                    lineData = [d.source.innerBounds.rayIntersection(p.x, p.y)];
                for (var i = n; i >= 0; --i) 
                    lineData.push(vg2.V[shortestPath[i]].p);
                lineData.push(cola.vpsc.makeEdgeTo(q, d.target.innerBounds, 5));
            }
            //lineData.forEach(function (v, i) {
            //    if (i > 0) {
            //        var u = lineData[i - 1];
            //        nodes.forEach(function (node) {
            //            if (node.id === getSourceIndex(d) || node.id === getTargetIndex(d)) return;
            //            var ints = node.innerBounds.lineIntersections(u.x, u.y, v.x, v.y);
            //            if (ints.length > 0) {
            //                debugger;
            //            }
            //        })
            //    }
            //})
            return lineData;
        }

        //The link source and target may be just a node index, or they may be references to nodes themselves.
        function getSourceIndex(e) {
            return typeof e.source === 'number' ? e.source : e.source.index;
        }

        //The link source and target may be just a node index, or they may be references to nodes themselves.
        function getTargetIndex(e) {
            return typeof e.target === 'number' ? e.target : e.target.index;
        }
        // Get a string ID for a given link.
        adaptor.linkId = function (e) {
            return getSourceIndex(e) + "-" + getTargetIndex(e);
        }

        return adaptor;
    };

    // The fixed property has three bits:
    // Bit 1 can be set externally (e.g., d.fixed = true) and show persist.
    // Bit 2 stores the dragging state, from mousedown to mouseup.
    // Bit 3 stores the hover state, from mouseover to mouseout.
    // Dragend is a special case: it also clears the hover state.

    function colaDragstart(d) {
        d.fixed |= 2; // set bit 2
        d.px = d.x, d.py = d.y; // set velocity to zero
    }

    function colaDragend(d) {
        d.fixed &= ~6; // unset bits 2 and 3
        //d.fixed = 0;
    }

    function colaMouseover(d) {
        d.fixed |= 4; // set bit 3
        d.px = d.x, d.py = d.y; // set velocity to zero
    }

    function colaMouseout(d) {
        d.fixed &= ~4; // unset bit 3
    }
    return cola;
})(cola || (cola = {}));
//Based on js_bintrees:
//
//https://github.com/vadimg/js_bintrees
//
//Copyright (C) 2011 by Vadim Graboys
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.

RBTree = (function (window) {
var global = window;
var require = function(name) {
    var fn = require.m[name];
    if (fn.mod) {
        return fn.mod.exports;
    }

    var mod = fn.mod = { exports: {} };
    fn(mod, mod.exports);
    return mod.exports;
};

require.m = {};
require.m['./treebase'] = function(module, exports) {

function TreeBase() {}

// removes all nodes from the tree
TreeBase.prototype.clear = function() {
    this._root = null;
    this.size = 0;
};

// returns node data if found, null otherwise
TreeBase.prototype.find = function(data) {
    var res = this._root;

    while(res !== null) {
        var c = this._comparator(data, res.data);
        if(c === 0) {
            return res.data;
        }
        else {
            res = res.get_child(c > 0);
        }
    }

    return null;
};

// returns iterator to node if found, null otherwise
TreeBase.prototype.findIter = function(data) {
    var res = this._root;
    var iter = this.iterator();

    while(res !== null) {
        var c = this._comparator(data, res.data);
        if(c === 0) {
            iter._cursor = res;
            return iter;
        }
        else {
            iter._ancestors.push(res);
            res = res.get_child(c > 0);
        }
    }

    return null;
};

// Returns an interator to the tree node immediately before (or at) the element
TreeBase.prototype.lowerBound = function(data) {
    return this._bound(data, this._comparator);
};

// Returns an interator to the tree node immediately after (or at) the element
TreeBase.prototype.upperBound = function(data) {
    var cmp = this._comparator;

    function reverse_cmp(a, b) {
        return cmp(b, a);
    }

    return this._bound(data, reverse_cmp);
};

// returns null if tree is empty
TreeBase.prototype.min = function() {
    var res = this._root;
    if(res === null) {
        return null;
    }

    while(res.left !== null) {
        res = res.left;
    }

    return res.data;
};

// returns null if tree is empty
TreeBase.prototype.max = function() {
    var res = this._root;
    if(res === null) {
        return null;
    }

    while(res.right !== null) {
        res = res.right;
    }

    return res.data;
};

// returns a null iterator
// call next() or prev() to point to an element
TreeBase.prototype.iterator = function() {
    return new Iterator(this);
};

// calls cb on each node's data, in order
TreeBase.prototype.each = function(cb) {
    var it=this.iterator(), data;
    while((data = it.next()) !== null) {
        cb(data);
    }
};

// calls cb on each node's data, in reverse order
TreeBase.prototype.reach = function(cb) {
    var it=this.iterator(), data;
    while((data = it.prev()) !== null) {
        cb(data);
    }
};

// used for lowerBound and upperBound
TreeBase.prototype._bound = function(data, cmp) {
    var cur = this._root;
    var iter = this.iterator();

    while(cur !== null) {
        var c = this._comparator(data, cur.data);
        if(c === 0) {
            iter._cursor = cur;
            return iter;
        }
        iter._ancestors.push(cur);
        cur = cur.get_child(c > 0);
    }

    for(var i=iter._ancestors.length - 1; i >= 0; --i) {
        cur = iter._ancestors[i];
        if(cmp(data, cur.data) > 0) {
            iter._cursor = cur;
            iter._ancestors.length = i;
            return iter;
        }
    }

    iter._ancestors.length = 0;
    return iter;
};


function Iterator(tree) {
    this._tree = tree;
    this._ancestors = [];
    this._cursor = null;
}

Iterator.prototype.data = function() {
    return this._cursor !== null ? this._cursor.data : null;
};

// if null-iterator, returns first node
// otherwise, returns next node
Iterator.prototype.next = function() {
    if(this._cursor === null) {
        var root = this._tree._root;
        if(root !== null) {
            this._minNode(root);
        }
    }
    else {
        if(this._cursor.right === null) {
            // no greater node in subtree, go up to parent
            // if coming from a right child, continue up the stack
            var save;
            do {
                save = this._cursor;
                if(this._ancestors.length) {
                    this._cursor = this._ancestors.pop();
                }
                else {
                    this._cursor = null;
                    break;
                }
            } while(this._cursor.right === save);
        }
        else {
            // get the next node from the subtree
            this._ancestors.push(this._cursor);
            this._minNode(this._cursor.right);
        }
    }
    return this._cursor !== null ? this._cursor.data : null;
};

// if null-iterator, returns last node
// otherwise, returns previous node
Iterator.prototype.prev = function() {
    if(this._cursor === null) {
        var root = this._tree._root;
        if(root !== null) {
            this._maxNode(root);
        }
    }
    else {
        if(this._cursor.left === null) {
            var save;
            do {
                save = this._cursor;
                if(this._ancestors.length) {
                    this._cursor = this._ancestors.pop();
                }
                else {
                    this._cursor = null;
                    break;
                }
            } while(this._cursor.left === save);
        }
        else {
            this._ancestors.push(this._cursor);
            this._maxNode(this._cursor.left);
        }
    }
    return this._cursor !== null ? this._cursor.data : null;
};

Iterator.prototype._minNode = function(start) {
    while(start.left !== null) {
        this._ancestors.push(start);
        start = start.left;
    }
    this._cursor = start;
};

Iterator.prototype._maxNode = function(start) {
    while(start.right !== null) {
        this._ancestors.push(start);
        start = start.right;
    }
    this._cursor = start;
};

module.exports = TreeBase;

};
require.m['__main__'] = function(module, exports) {

var TreeBase = require('./treebase');

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.red = true;
}

Node.prototype.get_child = function(dir) {
    return dir ? this.right : this.left;
};

Node.prototype.set_child = function(dir, val) {
    if(dir) {
        this.right = val;
    }
    else {
        this.left = val;
    }
};

function RBTree(comparator) {
    this._root = null;
    this._comparator = comparator;
    this.size = 0;
}

RBTree.prototype = new TreeBase();

// returns true if inserted, false if duplicate
RBTree.prototype.insert = function(data) {
    var ret = false;

    if(this._root === null) {
        // empty tree
        this._root = new Node(data);
        ret = true;
        this.size++;
    }
    else {
        var head = new Node(undefined); // fake tree root

        var dir = 0;
        var last = 0;

        // setup
        var gp = null; // grandparent
        var ggp = head; // grand-grand-parent
        var p = null; // parent
        var node = this._root;
        ggp.right = this._root;

        // search down
        while(true) {
            if(node === null) {
                // insert new node at the bottom
                node = new Node(data);
                p.set_child(dir, node);
                ret = true;
                this.size++;
            }
            else if(is_red(node.left) && is_red(node.right)) {
                // color flip
                node.red = true;
                node.left.red = false;
                node.right.red = false;
            }

            // fix red violation
            if(is_red(node) && is_red(p)) {
                var dir2 = ggp.right === gp;

                if(node === p.get_child(last)) {
                    ggp.set_child(dir2, single_rotate(gp, !last));
                }
                else {
                    ggp.set_child(dir2, double_rotate(gp, !last));
                }
            }

            var cmp = this._comparator(node.data, data);

            // stop if found
            if(cmp === 0) {
                break;
            }

            last = dir;
            dir = cmp < 0;

            // update helpers
            if(gp !== null) {
                ggp = gp;
            }
            gp = p;
            p = node;
            node = node.get_child(dir);
        }

        // update root
        this._root = head.right;
    }

    // make root black
    this._root.red = false;

    return ret;
};

// returns true if removed, false if not found
RBTree.prototype.remove = function(data) {
    if(this._root === null) {
        return false;
    }

    var head = new Node(undefined); // fake tree root
    var node = head;
    node.right = this._root;
    var p = null; // parent
    var gp = null; // grand parent
    var found = null; // found item
    var dir = 1;

    while(node.get_child(dir) !== null) {
        var last = dir;

        // update helpers
        gp = p;
        p = node;
        node = node.get_child(dir);

        var cmp = this._comparator(data, node.data);

        dir = cmp > 0;

        // save found node
        if(cmp === 0) {
            found = node;
        }

        // push the red node down
        if(!is_red(node) && !is_red(node.get_child(dir))) {
            if(is_red(node.get_child(!dir))) {
                var sr = single_rotate(node, dir);
                p.set_child(last, sr);
                p = sr;
            }
            else if(!is_red(node.get_child(!dir))) {
                var sibling = p.get_child(!last);
                if(sibling !== null) {
                    if(!is_red(sibling.get_child(!last)) && !is_red(sibling.get_child(last))) {
                        // color flip
                        p.red = false;
                        sibling.red = true;
                        node.red = true;
                    }
                    else {
                        var dir2 = gp.right === p;

                        if(is_red(sibling.get_child(last))) {
                            gp.set_child(dir2, double_rotate(p, last));
                        }
                        else if(is_red(sibling.get_child(!last))) {
                            gp.set_child(dir2, single_rotate(p, last));
                        }

                        // ensure correct coloring
                        var gpc = gp.get_child(dir2);
                        gpc.red = true;
                        node.red = true;
                        gpc.left.red = false;
                        gpc.right.red = false;
                    }
                }
            }
        }
    }

    // replace and remove if found
    if(found !== null) {
        found.data = node.data;
        p.set_child(p.right === node, node.get_child(node.left === null));
        this.size--;
    }

    // update root and make it black
    this._root = head.right;
    if(this._root !== null) {
        this._root.red = false;
    }

    return found !== null;
};

function is_red(node) {
    return node !== null && node.red;
}

function single_rotate(root, dir) {
    var save = root.get_child(!dir);

    root.set_child(!dir, save.get_child(dir));
    save.set_child(dir, root);

    root.red = true;
    save.red = false;

    return save;
}

function double_rotate(root, dir) {
    root.set_child(!dir, single_rotate(root.get_child(!dir), !dir));
    return single_rotate(root, dir);
}

module.exports = RBTree;
};
return require('__main__');
})(window);


var cola;
(function (cola) {
    var applyPacking = {}
    applyPacking.PADDING = 10;
    applyPacking.GOLDEN_SECTION = (1 + Math.sqrt(5)) / 2;
    applyPacking.FLOAT_EPSILON = 0.0001;
    applyPacking.MAX_INERATIONS = 100;

    // assign x, y to nodes while using box packing algorithm for disconnected graphs
    cola.applyPacking = function (graphs, w, h, node_size, desired_ratio){

        var init_x = 0,
            init_y = 0,

            svg_width = w,
            svg_height = h,

            desired_ratio = typeof desired_ratio !== 'undefined' ? desired_ratio : 1,
            node_size = typeof node_size !== 'undefined' ? node_size : 0,

            real_width = 0,
            real_height = 0,
            min_width = 0,

            global_bottom = 0,
            line = [];
    
        if (graphs.length == 0)
            return;

        /// that would take care of single nodes problem
        // graphs.forEach(function (g) {
        //     if (g.array.length == 1) {
        //         g.array[0].x = 0;
        //         g.array[0].y = 0;
        //     }
        // });

        calculate_bb(graphs);
        apply(graphs);
        put_nodes_to_right_positions(graphs);

        // get bounding boxes for all separate graphs
        function calculate_bb(graphs){

            graphs.forEach(function(g) { 
                calculate_single_bb(g)
            });

            function calculate_single_bb(graph){
                var min_x = Number.MAX_VALUE, min_y = Number.MAX_VALUE,
                 max_x = 0, max_y = 0;

                graph.array.forEach(function(v){
                    var w = typeof v.width !== 'undefined' ? v.width : node_size;
                    var h = typeof v.height !== 'undefined' ? v.height : node_size;
                    w /= 2;
                    h /= 2;
                    max_x = Math.max(v.x + w, max_x);
                    min_x = Math.min(v.x - w, min_x);
                    max_y = Math.max(v.y + h, max_y);
                    min_y = Math.min(v.y - h, min_y);
                });

                graph.width = max_x - min_x;
                graph.height = max_y - min_y;
            }
        }

        function plot(data, left, right, opt_x, opt_y) {
                    // plot the cost function
            var plot_svg = d3.select("body").append("svg")
                .attr("width", function(){return 2 * (right - left);})
                .attr("height", 200);


            var x = d3.time.scale().range([0, 2 * (right - left)]);

            var xAxis = d3.svg.axis().scale(x).orient("bottom");
            plot_svg.append("g").attr("class", "x axis")
                .attr("transform", "translate(0, 199)")
                .call(xAxis);

            var lastX = 0;
            var lastY = 0;
            var value = 0;
            for (var r = left; r < right; r += 1){
                value = step(data, r);
                // value = 1;

                plot_svg.append("line").attr("x1", 2 * (lastX - left))
                    .attr("y1", 200 - 30 * lastY)
                    .attr("x2", 2 * r - 2 * left)
                    .attr("y2", 200 - 30 * value)
                    .style("stroke", "rgb(6,120,155)");

                lastX = r;
                lastY = value;
            }

            plot_svg.append("circle").attr("cx", 2 * opt_x - 2 * left).attr("cy", 200 - 30 * opt_y)
                .attr("r", 5).style('fill', "rgba(0,0,0,0.5)");
            
        }

        // actuall assigning of position to nodes
        function put_nodes_to_right_positions(graphs){
            graphs.forEach(function(g){
                // calculate current graph center:
                var center = {x: 0, y: 0};
                
                g.array.forEach(function(node){
                    center.x += node.x;
                    center.y += node.y;
                });
                
                center.x /= g.array.length;
                center.y /= g.array.length;

                // calculate current top left corner:
                var corner = { x: center.x - g.width/2, y: center.y - g.height/2 };
                var offset = { x: g.x - corner.x, y: g.y - corner.y };

                // put nodes:
                g.array.forEach(function(node){
                    node.x = node.x + offset.x + svg_width/2 - real_width/2;
                    node.y = node.y + offset.y + svg_height/2 - real_height/2;
                });
            });
        }

        // starts box packing algorithm
        // desired ratio is 1 by default
        function apply(data, desired_ratio){
            var curr_best_f = Number.POSITIVE_INFINITY;
            var curr_best = 0;
            data.sort(function (a, b) { return b.height - a.height; });

            min_width = data.reduce(function(a, b) {
                return a.width < b.width ? a.width : b.width;
            });

            var left = x1 = min_width;
            var right = x2 = get_entire_width(data);
            var iterationCounter = 0;
            
            var f_x1 = Number.MAX_VALUE;
            var f_x2 = Number.MAX_VALUE;
            var flag = -1; // determines which among f_x1 and f_x2 to recompute


            var dx = Number.MAX_VALUE;
            var df = Number.MAX_VALUE;

            while (( dx > min_width) || df > applyPacking.FLOAT_EPSILON ) {

                if (flag != 1) {
                    var x1 = right - (right - left) / applyPacking.GOLDEN_SECTION;
                    var f_x1 = step(data, x1);
                } 
                if (flag != 0) {
                    var x2 = left + (right - left) / applyPacking.GOLDEN_SECTION; 
                    var f_x2 = step(data, x2);
                }

                dx = Math.abs(x1 - x2);
                df = Math.abs(f_x1 - f_x2);

                if (f_x1 < curr_best_f) {
                    curr_best_f = f_x1;
                    curr_best = x1;
                }

                if (f_x2 < curr_best_f) {
                    curr_best_f = f_x2;
                    curr_best = x2;
                }

                if (f_x1 > f_x2) {
                    left = x1;
                    x1 = x2;
                    f_x1 = f_x2;
                    flag = 1;
                } else {
                    right = x2;
                    x2 = x1;
                    f_x2 = f_x1;
                    flag = 0;
                }

                if (iterationCounter++ > 100) {
                    break;
                }  
            }
            // plot(data, min_width, get_entire_width(data), curr_best, curr_best_f);
            step(data, curr_best);
        }

        // one iteration of the optimization method
        // (gives a proper, but not necessarily optimal packing)
        function step(data, max_width){
            line = [];
            real_width = 0;
            real_height = 0;
            global_bottom = init_y;

            for (var i = 0; i < data.length; i++){
                var o = data[i];
                put_rect(o, max_width);
            }

            return Math.abs(get_real_ratio() - desired_ratio);
        }

        // looking for a position to one box 
        function put_rect(rect, max_width){
            

            var parent = undefined;

            for (var i = 0; i < line.length; i++){
                if ((line[i].space_left >= rect.height) && (line[i].x + line[i].width + rect.width + applyPacking.PADDING - max_width) <= applyPacking.FLOAT_EPSILON){
                    parent = line[i];
                    break;
                }
            }

            line.push(rect);

            if (parent !== undefined){
                rect.x = parent.x + parent.width + applyPacking.PADDING;
                rect.y = parent.bottom;
                rect.space_left = rect.height;
                rect.bottom = rect.y;
                parent.space_left -= rect.height + applyPacking.PADDING;
                parent.bottom += rect.height + applyPacking.PADDING;
            } else {
                rect.y = global_bottom;
                global_bottom += rect.height + applyPacking.PADDING;
                rect.x = init_x;
                rect.bottom = rect.y;
                rect.space_left = rect.height;
            }

            if (rect.y + rect.height - real_height > -applyPacking.FLOAT_EPSILON) real_height = rect.y + rect.height - init_y;
            if (rect.x + rect.width - real_width > -applyPacking.FLOAT_EPSILON) real_width = rect.x + rect.width - init_x;
        };

        function get_entire_width(data){
            var width = 0;
            data.forEach(function (d) {return width += d.width + applyPacking.PADDING;});
            return width;
        }

        function get_real_ratio(){
            return (real_width / real_height);
        }
    }

    // seraration of disconnected graphs
    // returns an array of {}
    cola.separateGraphs = function(nodes, links){
        var marks = {};
        var ways = {};
        graphs = [];
        var clusters = 0;

        for (var i = 0; i < links.length; i++){
            var link = links[i];
            var n1 = link.source;
            var n2 = link.target;
            if (ways[n1.index]) 
                ways[n1.index].push(n2);
            else
                ways[n1.index] = [n2];
            
            if (ways[n2.index]) 
                ways[n2.index].push(n1);
            else
                ways[n2.index] = [n1];
        }

        for (var i = 0; i < nodes.length; i++){
            var node = nodes[i];
            if (marks[node.index]) continue;
            explore_node(node, true);
        }

        function explore_node(n, is_new){
            if (marks[n.index] !== undefined) return;
            if (is_new) {
                clusters++;
                graphs.push({array:[]});
            }
            marks[n.index] = clusters;
            graphs[clusters - 1].array.push(n);
            var adjacent = ways[n.index];
            if (!adjacent) return;
        
            for (var j = 0; j < adjacent.length; j++){
                explore_node(adjacent[j], false);
            }
        }
    
        return graphs;
    }
    return cola;
})(cola || (cola = {}))

var foograph = {
  /**
   * Insert a vertex into this graph.
   * 
   * @param vertex A valid Vertex instance
   */
  insertVertex: function(vertex) {
      this.vertices.push(vertex);
      this.vertexCount++;
    },
  
  /**
   * Insert an edge vertex1 --> vertex2.
   *  
   * @param label Label for this edge
   * @param weight Weight of this edge
   * @param vertex1 Starting Vertex instance
   * @param vertex2 Ending Vertex instance
   * @return Newly created Edge instance
   */
  insertEdge: function(label, weight, vertex1, vertex2, style) {
      var e1 = new foograph.Edge(label, weight, vertex2, style);
      var e2 = new foograph.Edge(null, weight, vertex1, null);
      
      vertex1.edges.push(e1);
      vertex2.reverseEdges.push(e2);
      
      return e1;
    },
  
  /** 
   * Delete edge.
   *
   * @param vertex Starting vertex
   * @param edge Edge to remove
   */
  removeEdge: function(vertex1, vertex2) {
      for (var i = vertex1.edges.length - 1; i >= 0; i--) {
        if (vertex1.edges[i].endVertex == vertex2) {
          vertex1.edges.splice(i,1);
          break;
        }
      }
      
      for (var i = vertex2.reverseEdges.length - 1; i >= 0; i--) {
        if (vertex2.reverseEdges[i].endVertex == vertex1) {
          vertex2.reverseEdges.splice(i,1);
          break;
        }
      }
    },
  
  /** 
   * Delete vertex.
   *
   * @param vertex Vertex to remove from the graph
   */
  removeVertex: function(vertex) {
      for (var i = vertex.edges.length - 1; i >= 0; i-- ) {
        this.removeEdge(vertex, vertex.edges[i].endVertex);
      }
      
      for (var i = vertex.reverseEdges.length - 1; i >= 0; i-- ) {
        this.removeEdge(vertex.reverseEdges[i].endVertex, vertex);
      }
      
      for (var i = this.vertices.length - 1; i >= 0; i-- ) {
        if (this.vertices[i] == vertex) {
          this.vertices.splice(i,1);
          break;
        }
      }
      
      this.vertexCount--;
    },
   
  /**
   * Plots this graph to a canvas.
   *
   * @param canvas A proper canvas instance
   */
  plot: function(canvas) {
      var i = 0;
      /* Draw edges first */
      for (i = 0; i < this.vertices.length; i++) {
        var v = this.vertices[i];
        if (!v.hidden) {
          for (var j = 0; j < v.edges.length; j++) {
            var e = v.edges[j];
            /* Draw edge (if not hidden) */
            if (!e.hidden)
              e.draw(canvas, v);
          }
        }
      }
      
      /* Draw the vertices. */
      for (i = 0; i < this.vertices.length; i++) {
        v = this.vertices[i];
      
        /* Draw vertex (if not hidden) */
        if (!v.hidden)
          v.draw(canvas);
      }
    },
  
  /**
   * Graph object constructor.
   * 
   * @param label Label of this graph
   * @param directed true or false
   */
  Graph: function (label, directed) {
      /* Fields. */
      this.label = label;
      this.vertices = new Array();
      this.directed = directed;
      this.vertexCount = 0;
      
      /* Graph methods. */
      this.insertVertex = foograph.insertVertex;
      this.removeVertex = foograph.removeVertex;
      this.insertEdge = foograph.insertEdge;
      this.removeEdge = foograph.removeEdge;
      this.plot = foograph.plot;
    },
  
  /**
   * Vertex object constructor.
   * 
   * @param label Label of this vertex
   * @param next Reference to the next vertex of this graph
   * @param firstEdge First edge of a linked list of edges
   */
  Vertex: function(label, x, y, style) {
      this.label = label;
      this.edges = new Array();
      this.reverseEdges = new Array();
      this.x = x;
      this.y = y;
      this.dx = 0;
      this.dy = 0;
      this.level = -1;
      this.numberOfParents = 0;
      this.hidden = false;
      this.fixed = false;     // Fixed vertices are static (unmovable)
      
      if(style != null) {
          this.style = style;
      }
      else { // Default
          this.style = new foograph.VertexStyle('ellipse', 80, 40, '#ffffff', '#000000', true);
      }
    },
  
   
   /**
   * VertexStyle object type for defining vertex style options.
   *
   * @param shape Shape of the vertex ('ellipse' or 'rect')
   * @param width Width in px
   * @param height Height in px
   * @param fillColor The color with which the vertex is drawn (RGB HEX string)
   * @param borderColor The color with which the border of the vertex is drawn (RGB HEX string)
   * @param showLabel Show the vertex label or not
   */
  VertexStyle: function(shape, width, height, fillColor, borderColor, showLabel) {
      this.shape = shape;
      this.width = width;
      this.height = height;
      this.fillColor = fillColor;
      this.borderColor = borderColor;
      this.showLabel = showLabel;
    },
   
  /**
   * Edge object constructor.
   *
   * @param label Label of this edge
   * @param next Next edge reference
   * @param weight Edge weight
   * @param endVertex Destination Vertex instance
   */
  Edge: function (label, weight, endVertex, style) {
      this.label = label;
      this.weight = weight;
      this.endVertex = endVertex;
      this.style = null;
      this.hidden = false;
        
      // Curving information
      this.curved = false;
      this.controlX = -1;   // Control coordinates for Bezier curve drawing
      this.controlY = -1;
      this.original = null; // If this is a temporary edge it holds the original edge
      
      if(style != null) {    
        this.style = style;
      }
      else {  // Set to default
        this.style = new foograph.EdgeStyle(2, '#000000', true, false);
      }
    },
  
  
  
  /**
   * EdgeStyle object type for defining vertex style options.
   *
   * @param width Edge line width
   * @param color The color with which the edge is drawn
   * @param showArrow Draw the edge arrow (only if directed)
   * @param showLabel Show the edge label or not
   */
  EdgeStyle: function(width, color, showArrow, showLabel) {
      this.width = width;
      this.color = color;
      this.showArrow = showArrow;
      this.showLabel = showLabel;
    },
  
  /**
   * This file is part of foograph Javascript graph library.
   *
   * Description: Random vertex layout manager
   */
  
  /**
   * Class constructor.
   *
   * @param width Layout width
   * @param height Layout height
   */
  RandomVertexLayout: function (width, height) {
      this.width = width;
      this.height = height;
    },
  
  
  /**
   * This file is part of foograph Javascript graph library.
   *
   * Description: Fruchterman-Reingold force-directed vertex
   *              layout manager
   */
  
  /**
   * Class constructor.
   *
   * @param width Layout width
   * @param height Layout height
   * @param iterations Number of iterations -
   * with more iterations it is more likely the layout has converged into a static equilibrium.
   */
  ForceDirectedVertexLayout: function (width, height, iterations, randomize, eps) {
      this.width = width;
      this.height = height;
      this.iterations = iterations;
      this.randomize = randomize;
      this.eps = eps;
      this.callback = function() {};
    },
  
  A: 1.5, // Fine tune attraction
  
  R: 0.5  // Fine tune repulsion
};

/**
 * toString overload for easier debugging
 */
foograph.Vertex.prototype.toString = function() {
  return "[v:" + this.label + "] ";
};

/**
 * toString overload for easier debugging
 */
foograph.Edge.prototype.toString = function() {
  return "[e:" + this.endVertex.label + "] ";
};

/**
 * Draw vertex method.
 *
 * @param canvas jsGraphics instance
 */
foograph.Vertex.prototype.draw = function(canvas) {
  var x = this.x;
  var y = this.y;
  var width = this.style.width;
  var height = this.style.height;
  var shape = this.style.shape;
  
  canvas.setStroke(2);
  canvas.setColor(this.style.fillColor);
  
  if(shape == 'rect') {
    canvas.fillRect(x, y, width, height);
    canvas.setColor(this.style.borderColor);
    canvas.drawRect(x, y, width, height);
  }
  else { // Default to ellipse
    canvas.fillEllipse(x, y, width, height);
    canvas.setColor(this.style.borderColor);
    canvas.drawEllipse(x, y, width, height);
  }
  
  if(this.style.showLabel) {
    canvas.drawStringRect(this.label, x, y + height/2 - 7, width, 'center');
  }
};

/**
 * Fits the graph into the bounding box
 *
 * @param width
 * @param height
 * @param preserveAspect
 */
foograph.Graph.prototype.normalize = function(width, height, preserveAspect) {
  for (var i8 in this.vertices) {
    var v = this.vertices[i8];
    v.oldX = v.x;
    v.oldY = v.y;
  }
  var mnx = width  * 0.1;
  var mxx = width  * 0.9;
  var mny = height * 0.1;
  var mxy = height * 0.9;
  if (preserveAspect == null)
    preserveAspect = true;
  
  var minx = Number.MAX_VALUE;
  var miny = Number.MAX_VALUE;
  var maxx = Number.MIN_VALUE;
  var maxy = Number.MIN_VALUE;
  
  for (var i7 in this.vertices) {
    var v = this.vertices[i7];
    if (v.x < minx) minx = v.x;
    if (v.y < miny) miny = v.y;
    if (v.x > maxx) maxx = v.x;
    if (v.y > maxy) maxy = v.y;
  }
  var kx = (mxx-mnx) / (maxx - minx);
  var ky = (mxy-mny) / (maxy - miny);

  if (preserveAspect) {
    kx = Math.min(kx, ky);
    ky = Math.min(kx, ky);
  }
  
  var newMaxx = Number.MIN_VALUE;
  var newMaxy = Number.MIN_VALUE;
  for (var i8 in this.vertices) {
    var v = this.vertices[i8];
    v.x = (v.x - minx) * kx;
    v.y = (v.y - miny) * ky;
    if (v.x > newMaxx) newMaxx = v.x;
    if (v.y > newMaxy) newMaxy = v.y;
  }

  var dx = ( width  - newMaxx ) / 2.0;
  var dy = ( height - newMaxy ) / 2.0;
  for (var i8 in this.vertices) {
    var v = this.vertices[i8];
    v.x += dx;
    v.y += dy;
  }
};

/**
 * Draw edge method. Draws edge "v" --> "this".
 *
 * @param canvas jsGraphics instance
 * @param v Start vertex
 */
foograph.Edge.prototype.draw = function(canvas, v) {
  var x1 = Math.round(v.x + v.style.width/2);
  var y1 = Math.round(v.y + v.style.height/2);
  var x2 = Math.round(this.endVertex.x + this.endVertex.style.width/2);
  var y2 = Math.round(this.endVertex.y + this.endVertex.style.height/2);

  // Control point (needed only for curved edges)
  var x3 = this.controlX;
  var y3 = this.controlY;
  
  // Arrow tip and angle
  var X_TIP, Y_TIP, ANGLE;

  /* Quadric Bezier curve definition. */
  function Bx(t) { return (1-t)*(1-t)*x1 + 2*(1-t)*t*x3 + t*t*x2; }
  function By(t) { return (1-t)*(1-t)*y1 + 2*(1-t)*t*y3 + t*t*y2; }

  canvas.setStroke(this.style.width);
  canvas.setColor(this.style.color);
  
  if(this.curved) { // Draw a quadric Bezier curve
    this.curved = false; // Reset
    var t = 0, dt = 1/10;
    var xs = x1, ys = y1, xn, yn;
    
    while (t < 1-dt) {
      t += dt;
      xn = Bx(t);
      yn = By(t);
      canvas.drawLine(xs, ys, xn, yn);
      xs = xn;
      ys = yn;
    }
    
    // Set the arrow tip coordinates
    X_TIP = xs;
    Y_TIP = ys;
    
    // Move the tip to (0,0) and calculate the angle 
    // of the arrow head
    ANGLE = angularCoord(Bx(1-2*dt) - X_TIP, By(1-2*dt) - Y_TIP);
    
  } else {
    canvas.drawLine(x1, y1, x2, y2);
    
    // Set the arrow tip coordinates
    X_TIP = x2;
    Y_TIP = y2;
    
    // Move the tip to (0,0) and calculate the angle 
    // of the arrow head
    ANGLE = angularCoord(x1 - X_TIP, y1 - Y_TIP);
  }
  
  if(this.style.showArrow) { 
    drawArrow(ANGLE, X_TIP, Y_TIP);
  }
  
  // TODO
  if(this.style.showLabel) {
  }
  
  /** 
   * Draws an edge arrow. 
   * @param phi The angle (in radians) of the arrow in polar coordinates. 
   * @param x X coordinate of the arrow tip.
   * @param y Y coordinate of the arrow tip.
   */
  function drawArrow(phi, x, y) 
  {
    // Arrow bounding box (in px)
    var H = 50;
    var W = 10;
    
    // Set cartesian coordinates of the arrow
    var p11 = 0, p12 = 0;
    var p21 = H, p22 = W/2;
    var p31 = H, p32 = -W/2;
    
    // Convert to polar coordinates
    var r2 = radialCoord(p21, p22);
    var r3 = radialCoord(p31, p32);
    var phi2 = angularCoord(p21, p22);
    var phi3 = angularCoord(p31, p32);
    
    // Rotate the arrow
    phi2 += phi;
    phi3 += phi;
    
    // Update cartesian coordinates
    p21 = r2 * Math.cos(phi2);
    p22 = r2 * Math.sin(phi2);    
    p31 = r3 * Math.cos(phi3);
    p32 = r3 * Math.sin(phi3);
    
    // Translate
    p11 += x; 
    p12 += y;
    p21 += x;
    p22 += y;
    p31 += x;
    p32 += y;
    
    // Draw
    canvas.fillPolygon(new Array(p11, p21, p31), new Array(p12, p22, p32));
  }
  
  /** 
   * Get the angular coordinate.
   * @param x X coordinate
   * @param y Y coordinate
   */
   function angularCoord(x, y)
   {
     var phi = 0.0;
     
     if (x > 0 && y >= 0) {
      phi = Math.atan(y/x);
     }
     if (x > 0 && y < 0) {
       phi = Math.atan(y/x) + 2*Math.PI;
     }
     if (x < 0) {
       phi = Math.atan(y/x) + Math.PI;
     }
     if (x = 0 && y > 0) {
       phi = Math.PI/2;
     }
     if (x = 0 && y < 0) {
       phi = 3*Math.PI/2;
     }
     
     return phi;
   }
   
   /** 
    * Get the radian coordiante.
    * @param x1 
    * @param y1 
    * @param x2
    * @param y2 
    */
   function radialCoord(x, y) 
   {
     return Math.sqrt(x*x + y*y);
   }
};

/**
 * Calculates the coordinates based on pure chance.
 *
 * @param graph A valid graph instance
 */
foograph.RandomVertexLayout.prototype.layout = function(graph) {
  for (var i = 0; i<graph.vertices.length; i++) {
    var v = graph.vertices[i];
    v.x = Math.round(Math.random() * this.width);
    v.y = Math.round(Math.random() * this.height);
  }
};

/**
 * Identifies connected components of a graph and creates "central"
 * vertices for each component. If there is more than one component,
 * all central vertices of individual components are connected to
 * each other to prevent component drift.
 *
 * @param graph A valid graph instance
 * @return A list of component center vertices or null when there
 *         is only one component.
 */
foograph.ForceDirectedVertexLayout.prototype.__identifyComponents = function(graph) {
  var componentCenters = new Array();
  var components = new Array();
  
  // Depth first search
  function dfs(vertex)
  {
    var stack = new Array();
    var component = new Array();
    var centerVertex = new foograph.Vertex("component_center", -1, -1);
    centerVertex.hidden = true;
    componentCenters.push(centerVertex);
    components.push(component);
    
    function visitVertex(v)
    {
      component.push(v);
      v.__dfsVisited = true;
      
      for (var i in v.edges) {
        var e = v.edges[i];
        if (!e.hidden)
          stack.push(e.endVertex);
      }
      
      for (var i in v.reverseEdges) {
        if (!v.reverseEdges[i].hidden)
          stack.push(v.reverseEdges[i].endVertex);
      }
    }
    
    visitVertex(vertex);
    while (stack.length > 0) {
      var u = stack.pop();
      
      if (!u.__dfsVisited && !u.hidden) {
        visitVertex(u);
      }
    }
  }
  
  // Clear DFS visited flag
  for (var i in graph.vertices) {
    var v = graph.vertices[i];
    v.__dfsVisited = false;
  }
  
  // Iterate through all vertices starting DFS from each vertex
  // that hasn't been visited yet.
  for (var k in graph.vertices) {
    var v = graph.vertices[k];
    if (!v.__dfsVisited && !v.hidden)
      dfs(v);
  }
  
  // Interconnect all center vertices
  if (componentCenters.length > 1) {
    for (var i in componentCenters) {
      graph.insertVertex(componentCenters[i]);
    }
    for (var i in components) {
      for (var j in components[i]) {
        // Connect visited vertex to "central" component vertex
        edge = graph.insertEdge("", 1, components[i][j], componentCenters[i]);
        edge.hidden = true;
      }
    }
    
    for (var i in componentCenters) {
      for (var j in componentCenters) {
        if (i != j) {
          e = graph.insertEdge("", 3, componentCenters[i], componentCenters[j]);
          e.hidden = true;
        }
      }
    }
    
    return componentCenters;
  }
  
  return null;
};

/**
 * Calculates the coordinates based on force-directed placement
 * algorithm.
 *
 * @param graph A valid graph instance
 */
foograph.ForceDirectedVertexLayout.prototype.layout = function(graph) {
  this.graph = graph;
  var area = this.width * this.height;
  var k = Math.sqrt(area / graph.vertexCount);

  var t = this.width / 10; // Temperature.
  var dt = t / (this.iterations + 1);

  var eps = this.eps; // Minimum distance between the vertices
  
  // Attractive and repulsive forces
  function Fa(z) { return foograph.A*z*z/k; }
  function Fr(z) { return foograph.R*k*k/z; }
  function Fw(z) { return 1/z*z; }  // Force emited by the walls
  
  // Initiate component identification and virtual vertex creation
  // to prevent disconnected graph components from drifting too far apart
  centers = this.__identifyComponents(graph);
  
  // Assign initial random positions
  if(this.randomize) {
    randomLayout = new foograph.RandomVertexLayout(this.width, this.height);
    randomLayout.layout(graph);
  }
  
  // Run through some iterations
  for (var q = 0; q < this.iterations; q++) {
    
    /* Calculate repulsive forces. */
    for (var i1 in graph.vertices) {
      var v = graph.vertices[i1];
      
      v.dx = 0;
      v.dy = 0;
      // Do not move fixed vertices
      if(!v.fixed) {
        for (var i2 in graph.vertices) {
          var u = graph.vertices[i2];
          if (v != u && !u.fixed) {
            /* Difference vector between the two vertices. */
            var difx = v.x - u.x;
            var dify = v.y - u.y;
            
            /* Length of the dif vector. */
            var d = Math.max(eps, Math.sqrt(difx*difx + dify*dify));
            var force = Fr(d);
            v.dx = v.dx + (difx/d) * force;
            v.dy = v.dy + (dify/d) * force;
          }
        }
        /* Treat the walls as static objects emiting force Fw. */
        // Calculate the sum of "wall" forces in (v.x, v.y)
        /*
        var x = Math.max(eps, v.x);
        var y = Math.max(eps, v.y);
        var wx = Math.max(eps, this.width - v.x);
        var wy = Math.max(eps, this.height - v.y);   // Gotta love all those NaN's :)
        var Rx = Fw(x) - Fw(wx);
        var Ry = Fw(y) - Fw(wy);
        
        v.dx = v.dx + Rx;
        v.dy = v.dy + Ry;
        */
      }
    }
    
    /* Calculate attractive forces. */
    for (var i3 in graph.vertices) {
      var v = graph.vertices[i3];
      
      // Do not move fixed vertices
      if(!v.fixed) {
        for (var i4 in v.edges) {
          var e = v.edges[i4];
          var u = e.endVertex;
          var difx = v.x - u.x;
          var dify = v.y - u.y;
          var d = Math.max(eps, Math.sqrt(difx*difx + dify*dify));
          var force = Fa(d);
          
          /* Length of the dif vector. */
          var d = Math.max(eps, Math.sqrt(difx*difx + dify*dify));
          v.dx = v.dx - (difx/d) * force;
          v.dy = v.dy - (dify/d) * force;
          
          u.dx = u.dx + (difx/d) * force;
          u.dy = u.dy + (dify/d) * force;
        }
      }
    }
    
    /* Limit the maximum displacement to the temperature t
        and prevent from being displaced outside frame.     */
    for (var i5 in graph.vertices) {
      var v = graph.vertices[i5];
      if(!v.fixed) {
        /* Length of the displacement vector. */
        var d = Math.max(eps, Math.sqrt(v.dx*v.dx + v.dy*v.dy));
    
        /* Limit to the temperature t. */
        v.x = v.x + (v.dx/d) * Math.min(d, t);
        v.y = v.y + (v.dy/d) * Math.min(d, t);
        
        /* Stay inside the frame. */
        /*
        borderWidth = this.width / 50;
        if (v.x < borderWidth) {
          v.x = borderWidth; 
        } else if (v.x > this.width - borderWidth) {
          v.x = this.width - borderWidth;
        }
        
        if (v.y < borderWidth) {
          v.y = borderWidth; 
        } else if (v.y > this.height - borderWidth) {
          v.y = this.height - borderWidth;
        }
        */
        v.x = Math.round(v.x);
        v.y = Math.round(v.y);
      }
    }
    
    /* Cool. */
    t -= dt;
    
    if (q % 10 == 0) {
      this.callback();
    }
  }
  
  // Remove virtual center vertices
  if (centers) {
    for (var i in centers) {
      graph.removeVertex(centers[i]);
    }
  }
  
  graph.normalize(this.width, this.height, true);
};


/*!
Copyright (C) 2010-2013 Raymond Hill: https://github.com/gorhill/Javascript-Voronoi
MIT License: See https://github.com/gorhill/Javascript-Voronoi/LICENSE.md
*/
/*
Author: Raymond Hill (rhill@raymondhill.net)
Contributor: Jesse Morgan (morgajel@gmail.com)
File: rhill-voronoi-core.js
Version: 0.98
Date: January 21, 2013
Description: This is my personal Javascript implementation of
Steven Fortune's algorithm to compute Voronoi diagrams.

License: See https://github.com/gorhill/Javascript-Voronoi/LICENSE.md
Credits: See https://github.com/gorhill/Javascript-Voronoi/CREDITS.md
History: See https://github.com/gorhill/Javascript-Voronoi/CHANGELOG.md

## Usage:

  var sites = [{x:300,y:300}, {x:100,y:100}, {x:200,y:500}, {x:250,y:450}, {x:600,y:150}];
  // xl, xr means x left, x right
  // yt, yb means y top, y bottom
  var bbox = {xl:0, xr:800, yt:0, yb:600};
  var voronoi = new Voronoi();
  // pass an object which exhibits xl, xr, yt, yb properties. The bounding
  // box will be used to connect unbound edges, and to close open cells
  result = voronoi.compute(sites, bbox);
  // render, further analyze, etc.

Return value:
  An object with the following properties:

  result.vertices = an array of unordered, unique Voronoi.Vertex objects making
    up the Voronoi diagram.
  result.edges = an array of unordered, unique Voronoi.Edge objects making up
    the Voronoi diagram.
  result.cells = an array of Voronoi.Cell object making up the Voronoi diagram.
    A Cell object might have an empty array of halfedges, meaning no Voronoi
    cell could be computed for a particular cell.
  result.execTime = the time it took to compute the Voronoi diagram, in
    milliseconds.

Voronoi.Vertex object:
  x: The x position of the vertex.
  y: The y position of the vertex.

Voronoi.Edge object:
  lSite: the Voronoi site object at the left of this Voronoi.Edge object.
  rSite: the Voronoi site object at the right of this Voronoi.Edge object (can
    be null).
  va: an object with an 'x' and a 'y' property defining the start point
    (relative to the Voronoi site on the left) of this Voronoi.Edge object.
  vb: an object with an 'x' and a 'y' property defining the end point
    (relative to Voronoi site on the left) of this Voronoi.Edge object.

  For edges which are used to close open cells (using the supplied bounding
  box), the rSite property will be null.

Voronoi.Cell object:
  site: the Voronoi site object associated with the Voronoi cell.
  halfedges: an array of Voronoi.Halfedge objects, ordered counterclockwise,
    defining the polygon for this Voronoi cell.

Voronoi.Halfedge object:
  site: the Voronoi site object owning this Voronoi.Halfedge object.
  edge: a reference to the unique Voronoi.Edge object underlying this
    Voronoi.Halfedge object.
  getStartpoint(): a method returning an object with an 'x' and a 'y' property
    for the start point of this halfedge. Keep in mind halfedges are always
    countercockwise.
  getEndpoint(): a method returning an object with an 'x' and a 'y' property
    for the end point of this halfedge. Keep in mind halfedges are always
    countercockwise.

TODO: Identify opportunities for performance improvement.

TODO: Let the user close the Voronoi cells, do not do it automatically. Not only let
      him close the cells, but also allow him to close more than once using a different
      bounding box for the same Voronoi diagram.
*/

/*global Math */

// ---------------------------------------------------------------------------

function Voronoi() {
    this.vertices = null;
    this.edges = null;
    this.cells = null;
    this.toRecycle = null;
    this.beachsectionJunkyard = [];
    this.circleEventJunkyard = [];
    this.vertexJunkyard = [];
    this.edgeJunkyard = [];
    this.cellJunkyard = [];
    }

// ---------------------------------------------------------------------------

Voronoi.prototype.reset = function() {
    if (!this.beachline) {
        this.beachline = new this.RBTree();
        }
    // Move leftover beachsections to the beachsection junkyard.
    if (this.beachline.root) {
        var beachsection = this.beachline.getFirst(this.beachline.root);
        while (beachsection) {
            this.beachsectionJunkyard.push(beachsection); // mark for reuse
            beachsection = beachsection.rbNext;
            }
        }
    this.beachline.root = null;
    if (!this.circleEvents) {
        this.circleEvents = new this.RBTree();
        }
    this.circleEvents.root = this.firstCircleEvent = null;
    this.vertices = [];
    this.edges = [];
    this.cells = [];
    };

Voronoi.prototype.sqrt = function(n){ return Math.sqrt(n); };
Voronoi.prototype.abs = function(n){ return Math.abs(n); };
Voronoi.prototype.ε = Voronoi.ε = 1e-9;
Voronoi.prototype.invε = Voronoi.invε = 1.0 / Voronoi.ε;
Voronoi.prototype.equalWithEpsilon = function(a,b){return this.abs(a-b)<1e-9;};
Voronoi.prototype.greaterThanWithEpsilon = function(a,b){return a-b>1e-9;};
Voronoi.prototype.greaterThanOrEqualWithEpsilon = function(a,b){return b-a<1e-9;};
Voronoi.prototype.lessThanWithEpsilon = function(a,b){return b-a>1e-9;};
Voronoi.prototype.lessThanOrEqualWithEpsilon = function(a,b){return a-b<1e-9;};

// ---------------------------------------------------------------------------
// Red-Black tree code (based on C version of "rbtree" by Franck Bui-Huu
// https://github.com/fbuihuu/libtree/blob/master/rb.c

Voronoi.prototype.RBTree = function() {
    this.root = null;
    };

Voronoi.prototype.RBTree.prototype.rbInsertSuccessor = function(node, successor) {
    var parent;
    if (node) {
        // >>> rhill 2011-05-27: Performance: cache previous/next nodes
        successor.rbPrevious = node;
        successor.rbNext = node.rbNext;
        if (node.rbNext) {
            node.rbNext.rbPrevious = successor;
            }
        node.rbNext = successor;
        // <<<
        if (node.rbRight) {
            // in-place expansion of node.rbRight.getFirst();
            node = node.rbRight;
            while (node.rbLeft) {node = node.rbLeft;}
            node.rbLeft = successor;
            }
        else {
            node.rbRight = successor;
            }
        parent = node;
        }
    // rhill 2011-06-07: if node is null, successor must be inserted
    // to the left-most part of the tree
    else if (this.root) {
        node = this.getFirst(this.root);
        // >>> Performance: cache previous/next nodes
        successor.rbPrevious = null;
        successor.rbNext = node;
        node.rbPrevious = successor;
        // <<<
        node.rbLeft = successor;
        parent = node;
        }
    else {
        // >>> Performance: cache previous/next nodes
        successor.rbPrevious = successor.rbNext = null;
        // <<<
        this.root = successor;
        parent = null;
        }
    successor.rbLeft = successor.rbRight = null;
    successor.rbParent = parent;
    successor.rbRed = true;
    // Fixup the modified tree by recoloring nodes and performing
    // rotations (2 at most) hence the red-black tree properties are
    // preserved.
    var grandpa, uncle;
    node = successor;
    while (parent && parent.rbRed) {
        grandpa = parent.rbParent;
        if (parent === grandpa.rbLeft) {
            uncle = grandpa.rbRight;
            if (uncle && uncle.rbRed) {
                parent.rbRed = uncle.rbRed = false;
                grandpa.rbRed = true;
                node = grandpa;
                }
            else {
                if (node === parent.rbRight) {
                    this.rbRotateLeft(parent);
                    node = parent;
                    parent = node.rbParent;
                    }
                parent.rbRed = false;
                grandpa.rbRed = true;
                this.rbRotateRight(grandpa);
                }
            }
        else {
            uncle = grandpa.rbLeft;
            if (uncle && uncle.rbRed) {
                parent.rbRed = uncle.rbRed = false;
                grandpa.rbRed = true;
                node = grandpa;
                }
            else {
                if (node === parent.rbLeft) {
                    this.rbRotateRight(parent);
                    node = parent;
                    parent = node.rbParent;
                    }
                parent.rbRed = false;
                grandpa.rbRed = true;
                this.rbRotateLeft(grandpa);
                }
            }
        parent = node.rbParent;
        }
    this.root.rbRed = false;
    };

Voronoi.prototype.RBTree.prototype.rbRemoveNode = function(node) {
    // >>> rhill 2011-05-27: Performance: cache previous/next nodes
    if (node.rbNext) {
        node.rbNext.rbPrevious = node.rbPrevious;
        }
    if (node.rbPrevious) {
        node.rbPrevious.rbNext = node.rbNext;
        }
    node.rbNext = node.rbPrevious = null;
    // <<<
    var parent = node.rbParent,
        left = node.rbLeft,
        right = node.rbRight,
        next;
    if (!left) {
        next = right;
        }
    else if (!right) {
        next = left;
        }
    else {
        next = this.getFirst(right);
        }
    if (parent) {
        if (parent.rbLeft === node) {
            parent.rbLeft = next;
            }
        else {
            parent.rbRight = next;
            }
        }
    else {
        this.root = next;
        }
    // enforce red-black rules
    var isRed;
    if (left && right) {
        isRed = next.rbRed;
        next.rbRed = node.rbRed;
        next.rbLeft = left;
        left.rbParent = next;
        if (next !== right) {
            parent = next.rbParent;
            next.rbParent = node.rbParent;
            node = next.rbRight;
            parent.rbLeft = node;
            next.rbRight = right;
            right.rbParent = next;
            }
        else {
            next.rbParent = parent;
            parent = next;
            node = next.rbRight;
            }
        }
    else {
        isRed = node.rbRed;
        node = next;
        }
    // 'node' is now the sole successor's child and 'parent' its
    // new parent (since the successor can have been moved)
    if (node) {
        node.rbParent = parent;
        }
    // the 'easy' cases
    if (isRed) {return;}
    if (node && node.rbRed) {
        node.rbRed = false;
        return;
        }
    // the other cases
    var sibling;
    do {
        if (node === this.root) {
            break;
            }
        if (node === parent.rbLeft) {
            sibling = parent.rbRight;
            if (sibling.rbRed) {
                sibling.rbRed = false;
                parent.rbRed = true;
                this.rbRotateLeft(parent);
                sibling = parent.rbRight;
                }
            if ((sibling.rbLeft && sibling.rbLeft.rbRed) || (sibling.rbRight && sibling.rbRight.rbRed)) {
                if (!sibling.rbRight || !sibling.rbRight.rbRed) {
                    sibling.rbLeft.rbRed = false;
                    sibling.rbRed = true;
                    this.rbRotateRight(sibling);
                    sibling = parent.rbRight;
                    }
                sibling.rbRed = parent.rbRed;
                parent.rbRed = sibling.rbRight.rbRed = false;
                this.rbRotateLeft(parent);
                node = this.root;
                break;
                }
            }
        else {
            sibling = parent.rbLeft;
            if (sibling.rbRed) {
                sibling.rbRed = false;
                parent.rbRed = true;
                this.rbRotateRight(parent);
                sibling = parent.rbLeft;
                }
            if ((sibling.rbLeft && sibling.rbLeft.rbRed) || (sibling.rbRight && sibling.rbRight.rbRed)) {
                if (!sibling.rbLeft || !sibling.rbLeft.rbRed) {
                    sibling.rbRight.rbRed = false;
                    sibling.rbRed = true;
                    this.rbRotateLeft(sibling);
                    sibling = parent.rbLeft;
                    }
                sibling.rbRed = parent.rbRed;
                parent.rbRed = sibling.rbLeft.rbRed = false;
                this.rbRotateRight(parent);
                node = this.root;
                break;
                }
            }
        sibling.rbRed = true;
        node = parent;
        parent = parent.rbParent;
    } while (!node.rbRed);
    if (node) {node.rbRed = false;}
    };

Voronoi.prototype.RBTree.prototype.rbRotateLeft = function(node) {
    var p = node,
        q = node.rbRight, // can't be null
        parent = p.rbParent;
    if (parent) {
        if (parent.rbLeft === p) {
            parent.rbLeft = q;
            }
        else {
            parent.rbRight = q;
            }
        }
    else {
        this.root = q;
        }
    q.rbParent = parent;
    p.rbParent = q;
    p.rbRight = q.rbLeft;
    if (p.rbRight) {
        p.rbRight.rbParent = p;
        }
    q.rbLeft = p;
    };

Voronoi.prototype.RBTree.prototype.rbRotateRight = function(node) {
    var p = node,
        q = node.rbLeft, // can't be null
        parent = p.rbParent;
    if (parent) {
        if (parent.rbLeft === p) {
            parent.rbLeft = q;
            }
        else {
            parent.rbRight = q;
            }
        }
    else {
        this.root = q;
        }
    q.rbParent = parent;
    p.rbParent = q;
    p.rbLeft = q.rbRight;
    if (p.rbLeft) {
        p.rbLeft.rbParent = p;
        }
    q.rbRight = p;
    };

Voronoi.prototype.RBTree.prototype.getFirst = function(node) {
    while (node.rbLeft) {
        node = node.rbLeft;
        }
    return node;
    };

Voronoi.prototype.RBTree.prototype.getLast = function(node) {
    while (node.rbRight) {
        node = node.rbRight;
        }
    return node;
    };

// ---------------------------------------------------------------------------
// Diagram methods

Voronoi.prototype.Diagram = function(site) {
    this.site = site;
    };

// ---------------------------------------------------------------------------
// Cell methods

Voronoi.prototype.Cell = function(site) {
    this.site = site;
    this.halfedges = [];
    this.closeMe = false;
    };

Voronoi.prototype.Cell.prototype.init = function(site) {
    this.site = site;
    this.halfedges = [];
    this.closeMe = false;
    return this;
    };

Voronoi.prototype.createCell = function(site) {
    var cell = this.cellJunkyard.pop();
    if ( cell ) {
        return cell.init(site);
        }
    return new this.Cell(site);
    };

Voronoi.prototype.Cell.prototype.prepareHalfedges = function() {
    var halfedges = this.halfedges,
        iHalfedge = halfedges.length,
        edge;
    // get rid of unused halfedges
    // rhill 2011-05-27: Keep it simple, no point here in trying
    // to be fancy: dangling edges are a typically a minority.
    while (iHalfedge--) {
        edge = halfedges[iHalfedge].edge;
        if (!edge.vb || !edge.va) {
            halfedges.splice(iHalfedge,1);
            }
        }

    // rhill 2011-05-26: I tried to use a binary search at insertion
    // time to keep the array sorted on-the-fly (in Cell.addHalfedge()).
    // There was no real benefits in doing so, performance on
    // Firefox 3.6 was improved marginally, while performance on
    // Opera 11 was penalized marginally.
    halfedges.sort(function(a,b){return b.angle-a.angle;});
    return halfedges.length;
    };

// Return a list of the neighbor Ids
Voronoi.prototype.Cell.prototype.getNeighborIds = function() {
    var neighbors = [],
        iHalfedge = this.halfedges.length,
        edge;
    while (iHalfedge--){
        edge = this.halfedges[iHalfedge].edge;
        if (edge.lSite !== null && edge.lSite.voronoiId != this.site.voronoiId) {
            neighbors.push(edge.lSite.voronoiId);
            }
        else if (edge.rSite !== null && edge.rSite.voronoiId != this.site.voronoiId){
            neighbors.push(edge.rSite.voronoiId);
            }
        }
    return neighbors;
    };

// Compute bounding box
//
Voronoi.prototype.Cell.prototype.getBbox = function() {
    var halfedges = this.halfedges,
        iHalfedge = halfedges.length,
        xmin = Infinity,
        ymin = Infinity,
        xmax = -Infinity,
        ymax = -Infinity,
        v, vx, vy;
    while (iHalfedge--) {
        v = halfedges[iHalfedge].getStartpoint();
        vx = v.x;
        vy = v.y;
        if (vx < xmin) {xmin = vx;}
        if (vy < ymin) {ymin = vy;}
        if (vx > xmax) {xmax = vx;}
        if (vy > ymax) {ymax = vy;}
        // we dont need to take into account end point,
        // since each end point matches a start point
        }
    return {
        x: xmin,
        y: ymin,
        width: xmax-xmin,
        height: ymax-ymin
        };
    };

// Return whether a point is inside, on, or outside the cell:
//   -1: point is outside the perimeter of the cell
//    0: point is on the perimeter of the cell
//    1: point is inside the perimeter of the cell
//
Voronoi.prototype.Cell.prototype.pointIntersection = function(x, y) {
    // Check if point in polygon. Since all polygons of a Voronoi
    // diagram are convex, then:
    // http://paulbourke.net/geometry/polygonmesh/
    // Solution 3 (2D):
    //   "If the polygon is convex then one can consider the polygon
    //   "as a 'path' from the first vertex. A point is on the interior
    //   "of this polygons if it is always on the same side of all the
    //   "line segments making up the path. ...
    //   "(y - y0) (x1 - x0) - (x - x0) (y1 - y0)
    //   "if it is less than 0 then P is to the right of the line segment,
    //   "if greater than 0 it is to the left, if equal to 0 then it lies
    //   "on the line segment"
    var halfedges = this.halfedges,
        iHalfedge = halfedges.length,
        halfedge,
        p0, p1, r;
    while (iHalfedge--) {
        halfedge = halfedges[iHalfedge];
        p0 = halfedge.getStartpoint();
        p1 = halfedge.getEndpoint();
        r = (y-p0.y)*(p1.x-p0.x)-(x-p0.x)*(p1.y-p0.y);
        if (!r) {
            return 0;
            }
        if (r > 0) {
            return -1;
            }
        }
    return 1;
    };

// ---------------------------------------------------------------------------
// Edge methods
//

Voronoi.prototype.Vertex = function(x, y) {
    this.x = x;
    this.y = y;
    };

Voronoi.prototype.Edge = function(lSite, rSite) {
    this.lSite = lSite;
    this.rSite = rSite;
    this.va = this.vb = null;
    };

Voronoi.prototype.Halfedge = function(edge, lSite, rSite) {
    this.site = lSite;
    this.edge = edge;
    // 'angle' is a value to be used for properly sorting the
    // halfsegments counterclockwise. By convention, we will
    // use the angle of the line defined by the 'site to the left'
    // to the 'site to the right'.
    // However, border edges have no 'site to the right': thus we
    // use the angle of line perpendicular to the halfsegment (the
    // edge should have both end points defined in such case.)
    if (rSite) {
        this.angle = Math.atan2(rSite.y-lSite.y, rSite.x-lSite.x);
        }
    else {
        var va = edge.va,
            vb = edge.vb;
        // rhill 2011-05-31: used to call getStartpoint()/getEndpoint(),
        // but for performance purpose, these are expanded in place here.
        this.angle = edge.lSite === lSite ?
            Math.atan2(vb.x-va.x, va.y-vb.y) :
            Math.atan2(va.x-vb.x, vb.y-va.y);
        }
    };

Voronoi.prototype.createHalfedge = function(edge, lSite, rSite) {
    return new this.Halfedge(edge, lSite, rSite);
    };

Voronoi.prototype.Halfedge.prototype.getStartpoint = function() {
    return this.edge.lSite === this.site ? this.edge.va : this.edge.vb;
    };

Voronoi.prototype.Halfedge.prototype.getEndpoint = function() {
    return this.edge.lSite === this.site ? this.edge.vb : this.edge.va;
    };



// this create and add a vertex to the internal collection

Voronoi.prototype.createVertex = function(x, y) {
    var v = this.vertexJunkyard.pop();
    if ( !v ) {
        v = new this.Vertex(x, y);
        }
    else {
        v.x = x;
        v.y = y;
        }
    this.vertices.push(v);
    return v;
    };

// this create and add an edge to internal collection, and also create
// two halfedges which are added to each site's counterclockwise array
// of halfedges.

Voronoi.prototype.createEdge = function(lSite, rSite, va, vb) {
    var edge = this.edgeJunkyard.pop();
    if ( !edge ) {
        edge = new this.Edge(lSite, rSite);
        }
    else {
        edge.lSite = lSite;
        edge.rSite = rSite;
        edge.va = edge.vb = null;
        }

    this.edges.push(edge);
    if (va) {
        this.setEdgeStartpoint(edge, lSite, rSite, va);
        }
    if (vb) {
        this.setEdgeEndpoint(edge, lSite, rSite, vb);
        }
    this.cells[lSite.voronoiId].halfedges.push(this.createHalfedge(edge, lSite, rSite));
    this.cells[rSite.voronoiId].halfedges.push(this.createHalfedge(edge, rSite, lSite));
    return edge;
    };

Voronoi.prototype.createBorderEdge = function(lSite, va, vb) {
    var edge = this.edgeJunkyard.pop();
    if ( !edge ) {
        edge = new this.Edge(lSite, null);
        }
    else {
        edge.lSite = lSite;
        edge.rSite = null;
        }
    edge.va = va;
    edge.vb = vb;
    this.edges.push(edge);
    return edge;
    };

Voronoi.prototype.setEdgeStartpoint = function(edge, lSite, rSite, vertex) {
    if (!edge.va && !edge.vb) {
        edge.va = vertex;
        edge.lSite = lSite;
        edge.rSite = rSite;
        }
    else if (edge.lSite === rSite) {
        edge.vb = vertex;
        }
    else {
        edge.va = vertex;
        }
    };

Voronoi.prototype.setEdgeEndpoint = function(edge, lSite, rSite, vertex) {
    this.setEdgeStartpoint(edge, rSite, lSite, vertex);
    };

// ---------------------------------------------------------------------------
// Beachline methods

// rhill 2011-06-07: For some reasons, performance suffers significantly
// when instanciating a literal object instead of an empty ctor
Voronoi.prototype.Beachsection = function() {
    };

// rhill 2011-06-02: A lot of Beachsection instanciations
// occur during the computation of the Voronoi diagram,
// somewhere between the number of sites and twice the
// number of sites, while the number of Beachsections on the
// beachline at any given time is comparatively low. For this
// reason, we reuse already created Beachsections, in order
// to avoid new memory allocation. This resulted in a measurable
// performance gain.

Voronoi.prototype.createBeachsection = function(site) {
    var beachsection = this.beachsectionJunkyard.pop();
    if (!beachsection) {
        beachsection = new this.Beachsection();
        }
    beachsection.site = site;
    return beachsection;
    };

// calculate the left break point of a particular beach section,
// given a particular sweep line
Voronoi.prototype.leftBreakPoint = function(arc, directrix) {
    // http://en.wikipedia.org/wiki/Parabola
    // http://en.wikipedia.org/wiki/Quadratic_equation
    // h1 = x1,
    // k1 = (y1+directrix)/2,
    // h2 = x2,
    // k2 = (y2+directrix)/2,
    // p1 = k1-directrix,
    // a1 = 1/(4*p1),
    // b1 = -h1/(2*p1),
    // c1 = h1*h1/(4*p1)+k1,
    // p2 = k2-directrix,
    // a2 = 1/(4*p2),
    // b2 = -h2/(2*p2),
    // c2 = h2*h2/(4*p2)+k2,
    // x = (-(b2-b1) + Math.sqrt((b2-b1)*(b2-b1) - 4*(a2-a1)*(c2-c1))) / (2*(a2-a1))
    // When x1 become the x-origin:
    // h1 = 0,
    // k1 = (y1+directrix)/2,
    // h2 = x2-x1,
    // k2 = (y2+directrix)/2,
    // p1 = k1-directrix,
    // a1 = 1/(4*p1),
    // b1 = 0,
    // c1 = k1,
    // p2 = k2-directrix,
    // a2 = 1/(4*p2),
    // b2 = -h2/(2*p2),
    // c2 = h2*h2/(4*p2)+k2,
    // x = (-b2 + Math.sqrt(b2*b2 - 4*(a2-a1)*(c2-k1))) / (2*(a2-a1)) + x1

    // change code below at your own risk: care has been taken to
    // reduce errors due to computers' finite arithmetic precision.
    // Maybe can still be improved, will see if any more of this
    // kind of errors pop up again.
    var site = arc.site,
        rfocx = site.x,
        rfocy = site.y,
        pby2 = rfocy-directrix;
    // parabola in degenerate case where focus is on directrix
    if (!pby2) {
        return rfocx;
        }
    var lArc = arc.rbPrevious;
    if (!lArc) {
        return -Infinity;
        }
    site = lArc.site;
    var lfocx = site.x,
        lfocy = site.y,
        plby2 = lfocy-directrix;
    // parabola in degenerate case where focus is on directrix
    if (!plby2) {
        return lfocx;
        }
    var hl = lfocx-rfocx,
        aby2 = 1/pby2-1/plby2,
        b = hl/plby2;
    if (aby2) {
        return (-b+this.sqrt(b*b-2*aby2*(hl*hl/(-2*plby2)-lfocy+plby2/2+rfocy-pby2/2)))/aby2+rfocx;
        }
    // both parabolas have same distance to directrix, thus break point is midway
    return (rfocx+lfocx)/2;
    };

// calculate the right break point of a particular beach section,
// given a particular directrix
Voronoi.prototype.rightBreakPoint = function(arc, directrix) {
    var rArc = arc.rbNext;
    if (rArc) {
        return this.leftBreakPoint(rArc, directrix);
        }
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
    };

Voronoi.prototype.detachBeachsection = function(beachsection) {
    this.detachCircleEvent(beachsection); // detach potentially attached circle event
    this.beachline.rbRemoveNode(beachsection); // remove from RB-tree
    this.beachsectionJunkyard.push(beachsection); // mark for reuse
    };

Voronoi.prototype.removeBeachsection = function(beachsection) {
    var circle = beachsection.circleEvent,
        x = circle.x,
        y = circle.ycenter,
        vertex = this.createVertex(x, y),
        previous = beachsection.rbPrevious,
        next = beachsection.rbNext,
        disappearingTransitions = [beachsection],
        abs_fn = Math.abs;

    // remove collapsed beachsection from beachline
    this.detachBeachsection(beachsection);

    // there could be more than one empty arc at the deletion point, this
    // happens when more than two edges are linked by the same vertex,
    // so we will collect all those edges by looking up both sides of
    // the deletion point.
    // by the way, there is *always* a predecessor/successor to any collapsed
    // beach section, it's just impossible to have a collapsing first/last
    // beach sections on the beachline, since they obviously are unconstrained
    // on their left/right side.

    // look left
    var lArc = previous;
    while (lArc.circleEvent && abs_fn(x-lArc.circleEvent.x)<1e-9 && abs_fn(y-lArc.circleEvent.ycenter)<1e-9) {
        previous = lArc.rbPrevious;
        disappearingTransitions.unshift(lArc);
        this.detachBeachsection(lArc); // mark for reuse
        lArc = previous;
        }
    // even though it is not disappearing, I will also add the beach section
    // immediately to the left of the left-most collapsed beach section, for
    // convenience, since we need to refer to it later as this beach section
    // is the 'left' site of an edge for which a start point is set.
    disappearingTransitions.unshift(lArc);
    this.detachCircleEvent(lArc);

    // look right
    var rArc = next;
    while (rArc.circleEvent && abs_fn(x-rArc.circleEvent.x)<1e-9 && abs_fn(y-rArc.circleEvent.ycenter)<1e-9) {
        next = rArc.rbNext;
        disappearingTransitions.push(rArc);
        this.detachBeachsection(rArc); // mark for reuse
        rArc = next;
        }
    // we also have to add the beach section immediately to the right of the
    // right-most collapsed beach section, since there is also a disappearing
    // transition representing an edge's start point on its left.
    disappearingTransitions.push(rArc);
    this.detachCircleEvent(rArc);

    // walk through all the disappearing transitions between beach sections and
    // set the start point of their (implied) edge.
    var nArcs = disappearingTransitions.length,
        iArc;
    for (iArc=1; iArc<nArcs; iArc++) {
        rArc = disappearingTransitions[iArc];
        lArc = disappearingTransitions[iArc-1];
        this.setEdgeStartpoint(rArc.edge, lArc.site, rArc.site, vertex);
        }

    // create a new edge as we have now a new transition between
    // two beach sections which were previously not adjacent.
    // since this edge appears as a new vertex is defined, the vertex
    // actually define an end point of the edge (relative to the site
    // on the left)
    lArc = disappearingTransitions[0];
    rArc = disappearingTransitions[nArcs-1];
    rArc.edge = this.createEdge(lArc.site, rArc.site, undefined, vertex);

    // create circle events if any for beach sections left in the beachline
    // adjacent to collapsed sections
    this.attachCircleEvent(lArc);
    this.attachCircleEvent(rArc);
    };

Voronoi.prototype.addBeachsection = function(site) {
    var x = site.x,
        directrix = site.y;

    // find the left and right beach sections which will surround the newly
    // created beach section.
    // rhill 2011-06-01: This loop is one of the most often executed,
    // hence we expand in-place the comparison-against-epsilon calls.
    var lArc, rArc,
        dxl, dxr,
        node = this.beachline.root;

    while (node) {
        dxl = this.leftBreakPoint(node,directrix)-x;
        // x lessThanWithEpsilon xl => falls somewhere before the left edge of the beachsection
        if (dxl > 1e-9) {
            // this case should never happen
            // if (!node.rbLeft) {
            //    rArc = node.rbLeft;
            //    break;
            //    }
            node = node.rbLeft;
            }
        else {
            dxr = x-this.rightBreakPoint(node,directrix);
            // x greaterThanWithEpsilon xr => falls somewhere after the right edge of the beachsection
            if (dxr > 1e-9) {
                if (!node.rbRight) {
                    lArc = node;
                    break;
                    }
                node = node.rbRight;
                }
            else {
                // x equalWithEpsilon xl => falls exactly on the left edge of the beachsection
                if (dxl > -1e-9) {
                    lArc = node.rbPrevious;
                    rArc = node;
                    }
                // x equalWithEpsilon xr => falls exactly on the right edge of the beachsection
                else if (dxr > -1e-9) {
                    lArc = node;
                    rArc = node.rbNext;
                    }
                // falls exactly somewhere in the middle of the beachsection
                else {
                    lArc = rArc = node;
                    }
                break;
                }
            }
        }
    // at this point, keep in mind that lArc and/or rArc could be
    // undefined or null.

    // create a new beach section object for the site and add it to RB-tree
    var newArc = this.createBeachsection(site);
    this.beachline.rbInsertSuccessor(lArc, newArc);

    // cases:
    //

    // [null,null]
    // least likely case: new beach section is the first beach section on the
    // beachline.
    // This case means:
    //   no new transition appears
    //   no collapsing beach section
    //   new beachsection become root of the RB-tree
    if (!lArc && !rArc) {
        return;
        }

    // [lArc,rArc] where lArc == rArc
    // most likely case: new beach section split an existing beach
    // section.
    // This case means:
    //   one new transition appears
    //   the left and right beach section might be collapsing as a result
    //   two new nodes added to the RB-tree
    if (lArc === rArc) {
        // invalidate circle event of split beach section
        this.detachCircleEvent(lArc);

        // split the beach section into two separate beach sections
        rArc = this.createBeachsection(lArc.site);
        this.beachline.rbInsertSuccessor(newArc, rArc);

        // since we have a new transition between two beach sections,
        // a new edge is born
        newArc.edge = rArc.edge = this.createEdge(lArc.site, newArc.site);

        // check whether the left and right beach sections are collapsing
        // and if so create circle events, to be notified when the point of
        // collapse is reached.
        this.attachCircleEvent(lArc);
        this.attachCircleEvent(rArc);
        return;
        }

    // [lArc,null]
    // even less likely case: new beach section is the *last* beach section
    // on the beachline -- this can happen *only* if *all* the previous beach
    // sections currently on the beachline share the same y value as
    // the new beach section.
    // This case means:
    //   one new transition appears
    //   no collapsing beach section as a result
    //   new beach section become right-most node of the RB-tree
    if (lArc && !rArc) {
        newArc.edge = this.createEdge(lArc.site,newArc.site);
        return;
        }

    // [null,rArc]
    // impossible case: because sites are strictly processed from top to bottom,
    // and left to right, which guarantees that there will always be a beach section
    // on the left -- except of course when there are no beach section at all on
    // the beach line, which case was handled above.
    // rhill 2011-06-02: No point testing in non-debug version
    //if (!lArc && rArc) {
    //    throw "Voronoi.addBeachsection(): What is this I don't even";
    //    }

    // [lArc,rArc] where lArc != rArc
    // somewhat less likely case: new beach section falls *exactly* in between two
    // existing beach sections
    // This case means:
    //   one transition disappears
    //   two new transitions appear
    //   the left and right beach section might be collapsing as a result
    //   only one new node added to the RB-tree
    if (lArc !== rArc) {
        // invalidate circle events of left and right sites
        this.detachCircleEvent(lArc);
        this.detachCircleEvent(rArc);

        // an existing transition disappears, meaning a vertex is defined at
        // the disappearance point.
        // since the disappearance is caused by the new beachsection, the
        // vertex is at the center of the circumscribed circle of the left,
        // new and right beachsections.
        // http://mathforum.org/library/drmath/view/55002.html
        // Except that I bring the origin at A to simplify
        // calculation
        var lSite = lArc.site,
            ax = lSite.x,
            ay = lSite.y,
            bx=site.x-ax,
            by=site.y-ay,
            rSite = rArc.site,
            cx=rSite.x-ax,
            cy=rSite.y-ay,
            d=2*(bx*cy-by*cx),
            hb=bx*bx+by*by,
            hc=cx*cx+cy*cy,
            vertex = this.createVertex((cy*hb-by*hc)/d+ax, (bx*hc-cx*hb)/d+ay);

        // one transition disappear
        this.setEdgeStartpoint(rArc.edge, lSite, rSite, vertex);

        // two new transitions appear at the new vertex location
        newArc.edge = this.createEdge(lSite, site, undefined, vertex);
        rArc.edge = this.createEdge(site, rSite, undefined, vertex);

        // check whether the left and right beach sections are collapsing
        // and if so create circle events, to handle the point of collapse.
        this.attachCircleEvent(lArc);
        this.attachCircleEvent(rArc);
        return;
        }
    };

// ---------------------------------------------------------------------------
// Circle event methods

// rhill 2011-06-07: For some reasons, performance suffers significantly
// when instanciating a literal object instead of an empty ctor
Voronoi.prototype.CircleEvent = function() {
    // rhill 2013-10-12: it helps to state exactly what we are at ctor time.
    this.arc = null;
    this.rbLeft = null;
    this.rbNext = null;
    this.rbParent = null;
    this.rbPrevious = null;
    this.rbRed = false;
    this.rbRight = null;
    this.site = null;
    this.x = this.y = this.ycenter = 0;
    };

Voronoi.prototype.attachCircleEvent = function(arc) {
    var lArc = arc.rbPrevious,
        rArc = arc.rbNext;
    if (!lArc || !rArc) {return;} // does that ever happen?
    var lSite = lArc.site,
        cSite = arc.site,
        rSite = rArc.site;

    // If site of left beachsection is same as site of
    // right beachsection, there can't be convergence
    if (lSite===rSite) {return;}

    // Find the circumscribed circle for the three sites associated
    // with the beachsection triplet.
    // rhill 2011-05-26: It is more efficient to calculate in-place
    // rather than getting the resulting circumscribed circle from an
    // object returned by calling Voronoi.circumcircle()
    // http://mathforum.org/library/drmath/view/55002.html
    // Except that I bring the origin at cSite to simplify calculations.
    // The bottom-most part of the circumcircle is our Fortune 'circle
    // event', and its center is a vertex potentially part of the final
    // Voronoi diagram.
    var bx = cSite.x,
        by = cSite.y,
        ax = lSite.x-bx,
        ay = lSite.y-by,
        cx = rSite.x-bx,
        cy = rSite.y-by;

    // If points l->c->r are clockwise, then center beach section does not
    // collapse, hence it can't end up as a vertex (we reuse 'd' here, which
    // sign is reverse of the orientation, hence we reverse the test.
    // http://en.wikipedia.org/wiki/Curve_orientation#Orientation_of_a_simple_polygon
    // rhill 2011-05-21: Nasty finite precision error which caused circumcircle() to
    // return infinites: 1e-12 seems to fix the problem.
    var d = 2*(ax*cy-ay*cx);
    if (d >= -2e-12){return;}

    var ha = ax*ax+ay*ay,
        hc = cx*cx+cy*cy,
        x = (cy*ha-ay*hc)/d,
        y = (ax*hc-cx*ha)/d,
        ycenter = y+by;

    // Important: ybottom should always be under or at sweep, so no need
    // to waste CPU cycles by checking

    // recycle circle event object if possible
    var circleEvent = this.circleEventJunkyard.pop();
    if (!circleEvent) {
        circleEvent = new this.CircleEvent();
        }
    circleEvent.arc = arc;
    circleEvent.site = cSite;
    circleEvent.x = x+bx;
    circleEvent.y = ycenter+this.sqrt(x*x+y*y); // y bottom
    circleEvent.ycenter = ycenter;
    arc.circleEvent = circleEvent;

    // find insertion point in RB-tree: circle events are ordered from
    // smallest to largest
    var predecessor = null,
        node = this.circleEvents.root;
    while (node) {
        if (circleEvent.y < node.y || (circleEvent.y === node.y && circleEvent.x <= node.x)) {
            if (node.rbLeft) {
                node = node.rbLeft;
                }
            else {
                predecessor = node.rbPrevious;
                break;
                }
            }
        else {
            if (node.rbRight) {
                node = node.rbRight;
                }
            else {
                predecessor = node;
                break;
                }
            }
        }
    this.circleEvents.rbInsertSuccessor(predecessor, circleEvent);
    if (!predecessor) {
        this.firstCircleEvent = circleEvent;
        }
    };

Voronoi.prototype.detachCircleEvent = function(arc) {
    var circleEvent = arc.circleEvent;
    if (circleEvent) {
        if (!circleEvent.rbPrevious) {
            this.firstCircleEvent = circleEvent.rbNext;
            }
        this.circleEvents.rbRemoveNode(circleEvent); // remove from RB-tree
        this.circleEventJunkyard.push(circleEvent);
        arc.circleEvent = null;
        }
    };

// ---------------------------------------------------------------------------
// Diagram completion methods

// connect dangling edges (not if a cursory test tells us
// it is not going to be visible.
// return value:
//   false: the dangling endpoint couldn't be connected
//   true: the dangling endpoint could be connected
Voronoi.prototype.connectEdge = function(edge, bbox) {
    // skip if end point already connected
    var vb = edge.vb;
    if (!!vb) {return true;}

    // make local copy for performance purpose
    var va = edge.va,
        xl = bbox.xl,
        xr = bbox.xr,
        yt = bbox.yt,
        yb = bbox.yb,
        lSite = edge.lSite,
        rSite = edge.rSite,
        lx = lSite.x,
        ly = lSite.y,
        rx = rSite.x,
        ry = rSite.y,
        fx = (lx+rx)/2,
        fy = (ly+ry)/2,
        fm, fb;

    // if we reach here, this means cells which use this edge will need
    // to be closed, whether because the edge was removed, or because it
    // was connected to the bounding box.
    this.cells[lSite.voronoiId].closeMe = true;
    this.cells[rSite.voronoiId].closeMe = true;

    // get the line equation of the bisector if line is not vertical
    if (ry !== ly) {
        fm = (lx-rx)/(ry-ly);
        fb = fy-fm*fx;
        }

    // remember, direction of line (relative to left site):
    // upward: left.x < right.x
    // downward: left.x > right.x
    // horizontal: left.x == right.x
    // upward: left.x < right.x
    // rightward: left.y < right.y
    // leftward: left.y > right.y
    // vertical: left.y == right.y

    // depending on the direction, find the best side of the
    // bounding box to use to determine a reasonable start point

    // rhill 2013-12-02:
    // While at it, since we have the values which define the line,
    // clip the end of va if it is outside the bbox.
    // https://github.com/gorhill/Javascript-Voronoi/issues/15
    // TODO: Do all the clipping here rather than rely on Liang-Barsky
    // which does not do well sometimes due to loss of arithmetic
    // precision. The code here doesn't degrade if one of the vertex is
    // at a huge distance.

    // special case: vertical line
    if (fm === undefined) {
        // doesn't intersect with viewport
        if (fx < xl || fx >= xr) {return false;}
        // downward
        if (lx > rx) {
            if (!va || va.y < yt) {
                va = this.createVertex(fx, yt);
                }
            else if (va.y >= yb) {
                return false;
                }
            vb = this.createVertex(fx, yb);
            }
        // upward
        else {
            if (!va || va.y > yb) {
                va = this.createVertex(fx, yb);
                }
            else if (va.y < yt) {
                return false;
                }
            vb = this.createVertex(fx, yt);
            }
        }
    // closer to vertical than horizontal, connect start point to the
    // top or bottom side of the bounding box
    else if (fm < -1 || fm > 1) {
        // downward
        if (lx > rx) {
            if (!va || va.y < yt) {
                va = this.createVertex((yt-fb)/fm, yt);
                }
            else if (va.y >= yb) {
                return false;
                }
            vb = this.createVertex((yb-fb)/fm, yb);
            }
        // upward
        else {
            if (!va || va.y > yb) {
                va = this.createVertex((yb-fb)/fm, yb);
                }
            else if (va.y < yt) {
                return false;
                }
            vb = this.createVertex((yt-fb)/fm, yt);
            }
        }
    // closer to horizontal than vertical, connect start point to the
    // left or right side of the bounding box
    else {
        // rightward
        if (ly < ry) {
            if (!va || va.x < xl) {
                va = this.createVertex(xl, fm*xl+fb);
                }
            else if (va.x >= xr) {
                return false;
                }
            vb = this.createVertex(xr, fm*xr+fb);
            }
        // leftward
        else {
            if (!va || va.x > xr) {
                va = this.createVertex(xr, fm*xr+fb);
                }
            else if (va.x < xl) {
                return false;
                }
            vb = this.createVertex(xl, fm*xl+fb);
            }
        }
    edge.va = va;
    edge.vb = vb;

    return true;
    };

// line-clipping code taken from:
//   Liang-Barsky function by Daniel White
//   http://www.skytopia.com/project/articles/compsci/clipping.html
// Thanks!
// A bit modified to minimize code paths
Voronoi.prototype.clipEdge = function(edge, bbox) {
    var ax = edge.va.x,
        ay = edge.va.y,
        bx = edge.vb.x,
        by = edge.vb.y,
        t0 = 0,
        t1 = 1,
        dx = bx-ax,
        dy = by-ay;
    // left
    var q = ax-bbox.xl;
    if (dx===0 && q<0) {return false;}
    var r = -q/dx;
    if (dx<0) {
        if (r<t0) {return false;}
        if (r<t1) {t1=r;}
        }
    else if (dx>0) {
        if (r>t1) {return false;}
        if (r>t0) {t0=r;}
        }
    // right
    q = bbox.xr-ax;
    if (dx===0 && q<0) {return false;}
    r = q/dx;
    if (dx<0) {
        if (r>t1) {return false;}
        if (r>t0) {t0=r;}
        }
    else if (dx>0) {
        if (r<t0) {return false;}
        if (r<t1) {t1=r;}
        }
    // top
    q = ay-bbox.yt;
    if (dy===0 && q<0) {return false;}
    r = -q/dy;
    if (dy<0) {
        if (r<t0) {return false;}
        if (r<t1) {t1=r;}
        }
    else if (dy>0) {
        if (r>t1) {return false;}
        if (r>t0) {t0=r;}
        }
    // bottom        
    q = bbox.yb-ay;
    if (dy===0 && q<0) {return false;}
    r = q/dy;
    if (dy<0) {
        if (r>t1) {return false;}
        if (r>t0) {t0=r;}
        }
    else if (dy>0) {
        if (r<t0) {return false;}
        if (r<t1) {t1=r;}
        }

    // if we reach this point, Voronoi edge is within bbox

    // if t0 > 0, va needs to change
    // rhill 2011-06-03: we need to create a new vertex rather
    // than modifying the existing one, since the existing
    // one is likely shared with at least another edge
    if (t0 > 0) {
        edge.va = this.createVertex(ax+t0*dx, ay+t0*dy);
        }

    // if t1 < 1, vb needs to change
    // rhill 2011-06-03: we need to create a new vertex rather
    // than modifying the existing one, since the existing
    // one is likely shared with at least another edge
    if (t1 < 1) {
        edge.vb = this.createVertex(ax+t1*dx, ay+t1*dy);
        }

    // va and/or vb were clipped, thus we will need to close
    // cells which use this edge.
    if ( t0 > 0 || t1 < 1 ) {
        this.cells[edge.lSite.voronoiId].closeMe = true;
        this.cells[edge.rSite.voronoiId].closeMe = true;
    }

    return true;
    };

// Connect/cut edges at bounding box
Voronoi.prototype.clipEdges = function(bbox) {
    // connect all dangling edges to bounding box
    // or get rid of them if it can't be done
    var edges = this.edges,
        iEdge = edges.length,
        edge,
        abs_fn = Math.abs;

    // iterate backward so we can splice safely
    while (iEdge--) {
        edge = edges[iEdge];
        // edge is removed if:
        //   it is wholly outside the bounding box
        //   it is looking more like a point than a line
        if (!this.connectEdge(edge, bbox) ||
            !this.clipEdge(edge, bbox) ||
            (abs_fn(edge.va.x-edge.vb.x)<1e-9 && abs_fn(edge.va.y-edge.vb.y)<1e-9)) {
            edge.va = edge.vb = null;
            edges.splice(iEdge,1);
            }
        }
    };

// Close the cells.
// The cells are bound by the supplied bounding box.
// Each cell refers to its associated site, and a list
// of halfedges ordered counterclockwise.
Voronoi.prototype.closeCells = function(bbox) {
    var xl = bbox.xl,
        xr = bbox.xr,
        yt = bbox.yt,
        yb = bbox.yb,
        cells = this.cells,
        iCell = cells.length,
        cell,
        iLeft,
        halfedges, nHalfedges,
        edge,
        va, vb, vz,
        lastBorderSegment,
        abs_fn = Math.abs;

    while (iCell--) {
        cell = cells[iCell];
        // prune, order halfedges counterclockwise, then add missing ones
        // required to close cells
        if (!cell.prepareHalfedges()) {
            continue;
            }
        if (!cell.closeMe) {
            continue;
            }
        // find first 'unclosed' point.
        // an 'unclosed' point will be the end point of a halfedge which
        // does not match the start point of the following halfedge
        halfedges = cell.halfedges;
        nHalfedges = halfedges.length;
        // special case: only one site, in which case, the viewport is the cell
        // ...

        // all other cases
        iLeft = 0;
        while (iLeft < nHalfedges) {
            va = halfedges[iLeft].getEndpoint();
            vz = halfedges[(iLeft+1) % nHalfedges].getStartpoint();
            // if end point is not equal to start point, we need to add the missing
            // halfedge(s) up to vz
            if (abs_fn(va.x-vz.x)>=1e-9 || abs_fn(va.y-vz.y)>=1e-9) {

                // rhill 2013-12-02:
                // "Holes" in the halfedges are not necessarily always adjacent.
                // https://github.com/gorhill/Javascript-Voronoi/issues/16

                // find entry point:
                switch (true) {

                    // walk downward along left side
                    case this.equalWithEpsilon(va.x,xl) && this.lessThanWithEpsilon(va.y,yb):
                        lastBorderSegment = this.equalWithEpsilon(vz.x,xl);
                        vb = this.createVertex(xl, lastBorderSegment ? vz.y : yb);
                        edge = this.createBorderEdge(cell.site, va, vb);
                        iLeft++;
                        halfedges.splice(iLeft, 0, this.createHalfedge(edge, cell.site, null));
                        nHalfedges++;
                        if ( lastBorderSegment ) { break; }
                        va = vb;
                        // fall through

                    // walk rightward along bottom side
                    case this.equalWithEpsilon(va.y,yb) && this.lessThanWithEpsilon(va.x,xr):
                        lastBorderSegment = this.equalWithEpsilon(vz.y,yb);
                        vb = this.createVertex(lastBorderSegment ? vz.x : xr, yb);
                        edge = this.createBorderEdge(cell.site, va, vb);
                        iLeft++;
                        halfedges.splice(iLeft, 0, this.createHalfedge(edge, cell.site, null));
                        nHalfedges++;
                        if ( lastBorderSegment ) { break; }
                        va = vb;
                        // fall through

                    // walk upward along right side
                    case this.equalWithEpsilon(va.x,xr) && this.greaterThanWithEpsilon(va.y,yt):
                        lastBorderSegment = this.equalWithEpsilon(vz.x,xr);
                        vb = this.createVertex(xr, lastBorderSegment ? vz.y : yt);
                        edge = this.createBorderEdge(cell.site, va, vb);
                        iLeft++;
                        halfedges.splice(iLeft, 0, this.createHalfedge(edge, cell.site, null));
                        nHalfedges++;
                        if ( lastBorderSegment ) { break; }
                        va = vb;
                        // fall through

                    // walk leftward along top side
                    case this.equalWithEpsilon(va.y,yt) && this.greaterThanWithEpsilon(va.x,xl):
                        lastBorderSegment = this.equalWithEpsilon(vz.y,yt);
                        vb = this.createVertex(lastBorderSegment ? vz.x : xl, yt);
                        edge = this.createBorderEdge(cell.site, va, vb);
                        iLeft++;
                        halfedges.splice(iLeft, 0, this.createHalfedge(edge, cell.site, null));
                        nHalfedges++;
                        if ( lastBorderSegment ) { break; }
                        va = vb;
                        // fall through

                        // walk downward along left side
                        lastBorderSegment = this.equalWithEpsilon(vz.x,xl);
                        vb = this.createVertex(xl, lastBorderSegment ? vz.y : yb);
                        edge = this.createBorderEdge(cell.site, va, vb);
                        iLeft++;
                        halfedges.splice(iLeft, 0, this.createHalfedge(edge, cell.site, null));
                        nHalfedges++;
                        if ( lastBorderSegment ) { break; }
                        va = vb;
                        // fall through

                        // walk rightward along bottom side
                        lastBorderSegment = this.equalWithEpsilon(vz.y,yb);
                        vb = this.createVertex(lastBorderSegment ? vz.x : xr, yb);
                        edge = this.createBorderEdge(cell.site, va, vb);
                        iLeft++;
                        halfedges.splice(iLeft, 0, this.createHalfedge(edge, cell.site, null));
                        nHalfedges++;
                        if ( lastBorderSegment ) { break; }
                        va = vb;
                        // fall through

                        // walk upward along right side
                        lastBorderSegment = this.equalWithEpsilon(vz.x,xr);
                        vb = this.createVertex(xr, lastBorderSegment ? vz.y : yt);
                        edge = this.createBorderEdge(cell.site, va, vb);
                        iLeft++;
                        halfedges.splice(iLeft, 0, this.createHalfedge(edge, cell.site, null));
                        nHalfedges++;
                        if ( lastBorderSegment ) { break; }
                        // fall through

                    default:
                        throw "Voronoi.closeCells() > this makes no sense!";
                    }
                }
            iLeft++;
            }
        cell.closeMe = false;
        }
    };

// ---------------------------------------------------------------------------
// Debugging helper
/*
Voronoi.prototype.dumpBeachline = function(y) {
    console.log('Voronoi.dumpBeachline(%f) > Beachsections, from left to right:', y);
    if ( !this.beachline ) {
        console.log('  None');
        }
    else {
        var bs = this.beachline.getFirst(this.beachline.root);
        while ( bs ) {
            console.log('  site %d: xl: %f, xr: %f', bs.site.voronoiId, this.leftBreakPoint(bs, y), this.rightBreakPoint(bs, y));
            bs = bs.rbNext;
            }
        }
    };
*/

// ---------------------------------------------------------------------------
// Helper: Quantize sites

// rhill 2013-10-12:
// This is to solve https://github.com/gorhill/Javascript-Voronoi/issues/15
// Since not all users will end up using the kind of coord values which would
// cause the issue to arise, I chose to let the user decide whether or not
// he should sanitize his coord values through this helper. This way, for
// those users who uses coord values which are known to be fine, no overhead is
// added.

Voronoi.prototype.quantizeSites = function(sites) {
    var ε = this.ε,
        n = sites.length,
        site;
    while ( n-- ) {
        site = sites[n];
        site.x = Math.floor(site.x / ε) * ε;
        site.y = Math.floor(site.y / ε) * ε;
        }
    };

// ---------------------------------------------------------------------------
// Helper: Recycle diagram: all vertex, edge and cell objects are
// "surrendered" to the Voronoi object for reuse.
// TODO: rhill-voronoi-core v2: more performance to be gained
// when I change the semantic of what is returned.

Voronoi.prototype.recycle = function(diagram) {
    if ( diagram ) {
        if ( diagram instanceof this.Diagram ) {
            this.toRecycle = diagram;
            }
        else {
            throw 'Voronoi.recycleDiagram() > Need a Diagram object.';
            }
        }
    };

// ---------------------------------------------------------------------------
// Top-level Fortune loop

// rhill 2011-05-19:
//   Voronoi sites are kept client-side now, to allow
//   user to freely modify content. At compute time,
//   *references* to sites are copied locally.

Voronoi.prototype.compute = function(sites, bbox) {
    // to measure execution time
    var startTime = new Date();

    // init internal state
    this.reset();

    // any diagram data available for recycling?
    // I do that here so that this is included in execution time
    if ( this.toRecycle ) {
        this.vertexJunkyard = this.vertexJunkyard.concat(this.toRecycle.vertices);
        this.edgeJunkyard = this.edgeJunkyard.concat(this.toRecycle.edges);
        this.cellJunkyard = this.cellJunkyard.concat(this.toRecycle.cells);
        this.toRecycle = null;
        }

    // Initialize site event queue
    var siteEvents = sites.slice(0);
    siteEvents.sort(function(a,b){
        var r = b.y - a.y;
        if (r) {return r;}
        return b.x - a.x;
        });

    // process queue
    var site = siteEvents.pop(),
        siteid = 0,
        xsitex, // to avoid duplicate sites
        xsitey,
        cells = this.cells,
        circle;

    // main loop
    for (;;) {
        // we need to figure whether we handle a site or circle event
        // for this we find out if there is a site event and it is
        // 'earlier' than the circle event
        circle = this.firstCircleEvent;

        // add beach section
        if (site && (!circle || site.y < circle.y || (site.y === circle.y && site.x < circle.x))) {
            // only if site is not a duplicate
            if (site.x !== xsitex || site.y !== xsitey) {
                // first create cell for new site
                cells[siteid] = this.createCell(site);
                site.voronoiId = siteid++;
                // then create a beachsection for that site
                this.addBeachsection(site);
                // remember last site coords to detect duplicate
                xsitey = site.y;
                xsitex = site.x;
                }
            site = siteEvents.pop();
            }

        // remove beach section
        else if (circle) {
            this.removeBeachsection(circle.arc);
            }

        // all done, quit
        else {
            break;
            }
        }

    // wrapping-up:
    //   connect dangling edges to bounding box
    //   cut edges as per bounding box
    //   discard edges completely outside bounding box
    //   discard edges which are point-like
    this.clipEdges(bbox);

    //   add missing edges in order to close opened cells
    this.closeCells(bbox);

    // to measure execution time
    var stopTime = new Date();

    // prepare return values
    var diagram = new this.Diagram();
    diagram.cells = this.cells;
    diagram.edges = this.edges;
    diagram.vertices = this.vertices;
    diagram.execTime = stopTime.getTime()-startTime.getTime();

    // clean up
    this.reset();

    return diagram;
    };

/*!
 * This file is part of Cytoscape.js 2.4.2.
 * 
 * Cytoscape.js is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 * 
 * Cytoscape.js is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU Lesser General Public License along with
 * Cytoscape.js. If not, see <http://www.gnu.org/licenses/>.
 */
var cytoscape;!function(e){"use strict";var t=cytoscape=function(){return cytoscape.init.apply(cytoscape,arguments)};t.version="2.4.2",t.init=function(e){return void 0===e&&(e={}),t.is.plainObject(e)?new t.Core(e):t.is.string(e)?t.extension.apply(t.extension,arguments):void 0},t.fn={},"undefined"!=typeof module&&module.exports&&(module.exports=cytoscape),"undefined"!=typeof define&&define.amd&&define("cytoscape",function(){return cytoscape}),e&&(e.cytoscape=cytoscape)}("undefined"==typeof window?null:window),this.cytoscape=cytoscape,function(e){"use strict";var t=0,r=1,i=2,n=function(e){return this instanceof n?(this.id="Thenable/1.0.7",this.state=t,this.fulfillValue=void 0,this.rejectReason=void 0,this.onFulfilled=[],this.onRejected=[],this.proxy={then:this.then.bind(this)},void("function"==typeof e&&e.call(this,this.fulfill.bind(this),this.reject.bind(this)))):new n(e)};n.prototype={fulfill:function(e){return a(this,r,"fulfillValue",e)},reject:function(e){return a(this,i,"rejectReason",e)},then:function(e,t){var r=this,i=new n;return r.onFulfilled.push(l(e,i,"fulfill")),r.onRejected.push(l(t,i,"reject")),o(r),i.proxy}};var a=function(e,r,i,n){return e.state===t&&(e.state=r,e[i]=n,o(e)),e},o=function(e){e.state===r?s(e,"onFulfilled",e.fulfillValue):e.state===i&&s(e,"onRejected",e.rejectReason)},s=function(e,t,r){if(0!==e[t].length){var i=e[t];e[t]=[];var n=function(){for(var e=0;e<i.length;e++)i[e](r)};"object"==typeof process&&"function"==typeof process.nextTick?process.nextTick(n):"function"==typeof setImmediate?setImmediate(n):setTimeout(n,0)}},l=function(e,t,r){return function(i){if("function"!=typeof e)t[r].call(t,i);else{var n;try{n=e(i)}catch(a){return void t.reject(a)}u(t,n)}}},u=function(e,t){if(e===t||e.proxy===t)return void e.reject(new TypeError("cannot resolve promise with itself"));var r;if("object"==typeof t&&null!==t||"function"==typeof t)try{r=t.then}catch(i){return void e.reject(i)}if("function"!=typeof r)e.fulfill(t);else{var n=!1;try{r.call(t,function(r){n||(n=!0,r===t?e.reject(new TypeError("circular thenable chain")):u(e,r))},function(t){n||(n=!0,e.reject(t))})}catch(i){n||e.reject(i)}}};e.Promise="undefined"==typeof Promise?n:Promise,e.Promise.all=e.Promise.all||function(t){return new e.Promise(function(e,r){for(var i=new Array(t.length),n=0,a=function(r,a){i[r]=a,n++,n===t.length&&e(i)},o=0;o<t.length;o++)!function(e){var i=t[e],n=null!=i.then;if(n)i.then(function(t){a(e,t)},function(e){r(e)});else{var o=i;a(e,o)}}(o)})}}(cytoscape),function(e,t){"use strict";var r="string",i=typeof{},n="function";e.is={defined:function(e){return null!=e},string:function(e){return null!=e&&typeof e==r},fn:function(e){return null!=e&&typeof e===n},array:function(e){return Array.isArray?Array.isArray(e):null!=e&&e instanceof Array},plainObject:function(t){return null!=t&&typeof t===i&&!e.is.array(t)&&t.constructor===Object},object:function(e){return null!=e&&typeof e===i},number:function(e){return null!=e&&"number"==typeof e&&!isNaN(e)},integer:function(t){return e.is.number(t)&&Math.floor(t)===t},color:function(e){return null!=e&&"string"==typeof e&&""!==$.Color(e).toString()},bool:function(e){return null!=e&&typeof e==typeof!0},elementOrCollection:function(t){return e.is.element(t)||e.is.collection(t)},element:function(t){return t instanceof e.Element&&t._private.single},collection:function(t){return t instanceof e.Collection&&!t._private.single},core:function(t){return t instanceof e.Core},style:function(t){return t instanceof e.Style},stylesheet:function(t){return t instanceof e.Stylesheet},event:function(t){return t instanceof e.Event},thread:function(t){return t instanceof e.Thread},fabric:function(t){return t instanceof e.Fabric},emptyString:function(t){return t?e.is.string(t)&&(""===t||t.match(/^\s+$/))?!0:!1:!0},nonemptyString:function(t){return t&&e.is.string(t)&&""!==t&&!t.match(/^\s+$/)?!0:!1},domElement:function(e){return"undefined"==typeof HTMLElement?!1:e instanceof HTMLElement},boundingBox:function(t){return e.is.plainObject(t)&&e.is.number(t.x1)&&e.is.number(t.x2)&&e.is.number(t.y1)&&e.is.number(t.y2)},promise:function(t){return e.is.object(t)&&e.is.fn(t.then)},touch:function(){return t&&("ontouchstart"in t||t.DocumentTouch&&document instanceof DocumentTouch)},gecko:function(){return"undefined"!=typeof InstallTrigger||"MozAppearance"in document.documentElement.style},webkit:function(){return"undefined"!=typeof webkitURL||"WebkitAppearance"in document.documentElement.style},chromium:function(){return"undefined"!=typeof chrome},khtml:function(){return navigator.vendor.match(/kde/i)},khtmlEtc:function(){return e.is.khtml()||e.is.webkit()||e.is.blink()},trident:function(){/*@cc_on!@*/
return"undefined"!=typeof ActiveXObject||!1},windows:function(){return"undefined"!=typeof navigator&&navigator.appVersion.match(/Win/i)},mac:function(){return"undefined"!=typeof navigator&&navigator.appVersion.match(/Mac/i)},linux:function(){return"undefined"!=typeof navigator&&navigator.appVersion.match(/Linux/i)},unix:function(){return"undefined"!=typeof navigator&&navigator.appVersion.match(/X11/i)}}}(cytoscape,"undefined"==typeof window?null:window),function(e,t){"use strict";e.util={extend:function(){var t,r,i,n,a,o,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||e.is.fn(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(t=arguments[l]))for(r in t)i=s[r],n=t[r],s!==n&&(c&&n&&(e.is.plainObject(n)||(a=e.is.array(n)))?(a?(a=!1,o=i&&e.is.array(i)?i:[]):o=i&&e.is.plainObject(i)?i:{},s[r]=e.util.extend(c,o,n)):void 0!==n&&(s[r]=n));return s},require:function(r,i,n){var a;n=e.util.extend({msgIfNotFound:!0},n);var o=!1,s=function(e){o=!0,i(e)},l=function(e){t&&(a=t[r]),void 0!==a&&s(a),e&&e()},u=function(){o||c(d)},c=function(e){"undefined"!=typeof module&&module.exports&&require&&(a=require(r)),void 0!==a&&s(a),e&&e()},d=function(){o||h(p)},h=function(e){"undefined"!=typeof define&&define.amd&&require&&require([r],function(t){a=t,void 0!==a&&s(a),e&&e()})},p=function(){!o&&n.msgIfNotFound&&e.util.error("Cytoscape.js tried to pull in dependency `"+r+"` but no module (i.e. CommonJS, AMD, or window) was found")};l(u)},requires:function(t,r){for(var i=[],n=[],a=function(){for(var e=0;e<t.length;e++)if(!n[e])return;r.apply(r,i)},o=0;o<t.length;o++)!function(){var r=t[o],s=o;e.util.require(r,function(e){i[s]=e,n[s]=!0,a()})}()},throttle:function(t,r,i){var n=!0,a=!0;return i===!1?n=!1:e.is.plainObject(i)&&(n="leading"in i?i.leading:n,a="trailing"in i?i.trailing:a),i=i||{},i.leading=n,i.maxWait=r,i.trailing=a,e.util.debounce(t,r,i)},now:function(){return+new Date},debounce:function(t,r,i){var n,a,o,s,l,u,c,d=0,h=!1,p=!0;if(e.is.fn(t)){if(r=Math.max(0,r)||0,i===!0){var v=!0;p=!1}else e.is.plainObject(i)&&(v=i.leading,h="maxWait"in i&&(Math.max(r,i.maxWait)||0),p="trailing"in i?i.trailing:p);var f=function(){var i=r-(e.util.now()-s);if(0>=i){a&&clearTimeout(a);var h=c;a=u=c=void 0,h&&(d=e.util.now(),o=t.apply(l,n),u||a||(n=l=null))}else u=setTimeout(f,i)},g=function(){u&&clearTimeout(u),a=u=c=void 0,(p||h!==r)&&(d=e.util.now(),o=t.apply(l,n),u||a||(n=l=null))};return function(){if(n=arguments,s=e.util.now(),l=this,c=p&&(u||!v),h===!1)var i=v&&!u;else{a||v||(d=s);var y=h-(s-d),m=0>=y;m?(a&&(a=clearTimeout(a)),d=s,o=t.apply(l,n)):a||(a=setTimeout(g,y))}return m&&u?u=clearTimeout(u):u||r===h||(u=setTimeout(f,r)),i&&(m=!0,o=t.apply(l,n)),!m||u||a||(n=l=null),o}}},error:function(e){if(!console)throw e;if(console.error)console.error.apply(console,arguments);else{if(!console.log)throw e;console.log.apply(console,arguments)}},clone:function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},copy:function(t){return null==t?t:e.is.array(t)?t.slice():e.is.plainObject(t)?e.util.clone(t):t},makeBoundingBox:function(e){if(null!=e.x1&&null!=e.y1){if(null!=e.x2&&null!=e.y2&&e.x2>=e.x1&&e.y2>=e.y1)return{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,w:e.x2-e.x1,h:e.y2-e.y1};if(null!=e.w&&null!=e.h&&e.w>=0&&e.h>=0)return{x1:e.x1,y1:e.y1,x2:e.x1+e.w,y2:e.y1+e.h,w:e.w,h:e.h}}},mapEmpty:function(e){var t=!0;if(null!=e)for(var r in e){t=!1;break}return t},pushMap:function(t){var r=e.util.getMap(t);null==r?e.util.setMap($.extend({},t,{value:[t.value]})):r.push(t.value)},setMap:function(t){for(var r,i=t.map,n=t.keys,a=n.length,o=0;a>o;o++){var r=n[o];e.is.plainObject(r)&&e.util.error("Tried to set map with object key"),o<n.length-1?(null==i[r]&&(i[r]={}),i=i[r]):i[r]=t.value}},getMap:function(t){for(var r=t.map,i=t.keys,n=i.length,a=0;n>a;a++){var o=i[a];if(e.is.plainObject(o)&&e.util.error("Tried to get map with object key"),r=r[o],null==r)return r}return r},deleteMap:function(t){for(var r=t.map,i=t.keys,n=i.length,a=t.keepChildren,o=0;n>o;o++){var s=i[o];e.is.plainObject(s)&&e.util.error("Tried to delete map with object key");var l=o===t.keys.length-1;if(l)if(a)for(var u in r)a[u]||(r[u]=void 0);else r[s]=void 0;else r=r[s]}},capitalize:function(t){return e.is.emptyString(t)?t:t.charAt(0).toUpperCase()+t.substring(1)},camel2dash:function(e){for(var t=[],r=0;r<e.length;r++){var i=e[r],n=i.toLowerCase(),a=i!==n;a?(t.push("-"),t.push(n)):t.push(i)}var o=t.length===e.length;return o?e:t.join("")},dash2camel:function(e){for(var t=[],r=!1,i=0;i<e.length;i++){var n=e[i],a="-"===n;a?r=!0:(t.push(r?n.toUpperCase():n),r=!1)}return t.join("")},trim:function(e){var t,r;for(t=0;t<e.length&&" "===e[t];t++);for(r=e.length-1;r>t&&" "===e[r];r--);return e.substring(t,r+1)},hex2tuple:function(e){if((4===e.length||7===e.length)&&"#"===e[0]){var t,r,i,n=4===e.length,a=16;return n?(t=parseInt(e[1]+e[1],a),r=parseInt(e[2]+e[2],a),i=parseInt(e[3]+e[3],a)):(t=parseInt(e[1]+e[2],a),r=parseInt(e[3]+e[4],a),i=parseInt(e[5]+e[6],a)),[t,r,i]}},hsl2tuple:function(t){function r(e,t,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?e+6*(t-e)*r:.5>r?t:2/3>r?e+(t-e)*(2/3-r)*6:e}var i,n,a,o,s,l,u,c,d=new RegExp("^"+e.util.regex.hsla+"$").exec(t);if(d){if(n=parseInt(d[1]),0>n?n=(360- -1*n%360)%360:n>360&&(n%=360),n/=360,a=parseFloat(d[2]),0>a||a>100)return;if(a/=100,o=parseFloat(d[3]),0>o||o>100)return;if(o/=100,s=d[4],void 0!==s&&(s=parseFloat(s),0>s||s>1))return;if(0===a)l=u=c=Math.round(255*o);else{var h=.5>o?o*(1+a):o+a-o*a,p=2*o-h;l=Math.round(255*r(p,h,n+1/3)),u=Math.round(255*r(p,h,n)),c=Math.round(255*r(p,h,n-1/3))}i=[l,u,c,s]}return i},rgb2tuple:function(t){var r,i=new RegExp("^"+e.util.regex.rgba+"$").exec(t);if(i){r=[];for(var n=[],a=1;3>=a;a++){var o=i[a];if("%"===o[o.length-1]&&(n[a]=!0),o=parseFloat(o),n[a]&&(o=o/100*255),0>o||o>255)return;r.push(Math.floor(o))}var s=n[1]||n[2]||n[3],l=n[1]&&n[2]&&n[3];if(s&&!l)return;var u=i[4];if(void 0!==u){if(u=parseFloat(u),0>u||u>1)return;r.push(u)}}return r},colorname2tuple:function(t){return e.util.colors[t.toLowerCase()]},color2tuple:function(t){return(e.is.array(t)?t:null)||e.util.colorname2tuple(t)||e.util.hex2tuple(t)||e.util.rgb2tuple(t)||e.util.hsl2tuple(t)},tuple2hex:function(e){function t(e){var t=e.toString(16);return 1===t.length&&(t="0"+t),t}var r=e[0],i=e[1],n=e[2];return"#"+t(r)+t(i)+t(n)},colors:{transparent:[0,0,0,0],aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},e.util.regex={},e.util.regex.number="(?:[-]?\\d*\\.\\d+|[-]?\\d+|[-]?\\d*\\.\\d+[eE]\\d+)",e.util.regex.rgba="rgb[a]?\\(("+e.util.regex.number+"[%]?)\\s*,\\s*("+e.util.regex.number+"[%]?)\\s*,\\s*("+e.util.regex.number+"[%]?)(?:\\s*,\\s*("+e.util.regex.number+"))?\\)",e.util.regex.rgbaNoBackRefs="rgb[a]?\\((?:"+e.util.regex.number+"[%]?)\\s*,\\s*(?:"+e.util.regex.number+"[%]?)\\s*,\\s*(?:"+e.util.regex.number+"[%]?)(?:\\s*,\\s*(?:"+e.util.regex.number+"))?\\)",e.util.regex.hsla="hsl[a]?\\(("+e.util.regex.number+")\\s*,\\s*("+e.util.regex.number+"[%])\\s*,\\s*("+e.util.regex.number+"[%])(?:\\s*,\\s*("+e.util.regex.number+"))?\\)",e.util.regex.hslaNoBackRefs="hsl[a]?\\((?:"+e.util.regex.number+")\\s*,\\s*(?:"+e.util.regex.number+"[%])\\s*,\\s*(?:"+e.util.regex.number+"[%])(?:\\s*,\\s*(?:"+e.util.regex.number+"))?\\)",e.util.regex.hex3="\\#[0-9a-fA-F]{3}",e.util.regex.hex6="\\#[0-9a-fA-F]{6}";var r=t?t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame:null;r=r||function(e){e&&setTimeout(e,1e3/60)},e.util.requestAnimationFrame=function(e){r(e)}}(cytoscape,"undefined"==typeof window?null:window),function(e){"use strict";e.math={},e.math.signum=function(e){return e>0?1:0>e?-1:0},e.math.distance=function(e,t){var r=t.x-e.x,i=t.y-e.y;return Math.sqrt(r*r+i*i)},e.math.qbezierAt=function(e,t,r,i){return(1-i)*(1-i)*e+2*(1-i)*i*t+i*i*r},e.math.qbezierPtAt=function(t,r,i,n){return{x:e.math.qbezierAt(t.x,r.x,i.x,n),y:e.math.qbezierAt(t.y,r.y,i.y,n)}},e.math.boundingBoxesIntersect=function(e,t){return e.x1>t.x2?!1:t.x1>e.x2?!1:e.x2<t.x1?!1:t.x2<e.x1?!1:e.y2<t.y1?!1:t.y2<e.y1?!1:e.y1>t.y2?!1:t.y1>e.y2?!1:!0},e.math.inBoundingBox=function(e,t,r){return e.x1<=t&&t<=e.x2&&e.y1<=r&&r<=e.y2},e.math.pointInBoundingBox=function(e,t){return this.inBoundingBox(e,t.x,t.y)},e.math.roundRectangleIntersectLine=function(e,t,r,i,n,a,o){var s,l=this.getRoundRectangleRadius(n,a),u=n/2,c=a/2,d=r-u+l-o,h=i-c-o,p=r+u-l+o,v=h;if(s=this.finiteLinesIntersect(e,t,r,i,d,h,p,v,!1),s.length>0)return s;var f=r+u+o,g=i-c+l-o,y=f,m=i+c-l+o;if(s=this.finiteLinesIntersect(e,t,r,i,f,g,y,m,!1),s.length>0)return s;var x=r-u+l-o,b=i+c+o,w=r+u-l+o,_=b;if(s=this.finiteLinesIntersect(e,t,r,i,x,b,w,_,!1),s.length>0)return s;var E=r-u-o,S=i-c+l-o,D=E,k=i+c-l+o;if(s=this.finiteLinesIntersect(e,t,r,i,E,S,D,k,!1),s.length>0)return s;var P,C=r-u+l,T=i-c+l;if(P=this.intersectLineCircle(e,t,r,i,C,T,l+o),P.length>0&&P[0]<=C&&P[1]<=T)return[P[0],P[1]];var M=r+u-l,B=i-c+l;if(P=this.intersectLineCircle(e,t,r,i,M,B,l+o),P.length>0&&P[0]>=M&&P[1]<=B)return[P[0],P[1]];var N=r+u-l,I=i+c-l;if(P=this.intersectLineCircle(e,t,r,i,N,I,l+o),P.length>0&&P[0]>=N&&P[1]>=I)return[P[0],P[1]];var O=r-u+l,z=i+c-l;return P=this.intersectLineCircle(e,t,r,i,O,z,l+o),P.length>0&&P[0]<=O&&P[1]>=z?[P[0],P[1]]:[]},e.math.roundRectangleIntersectBox=function(e,t,r,i,n,a,o,s,l){var u=this.getRoundRectangleRadius(n,a),c=o-n/2-l,d=s-a/2+u-l,h=o+n/2+l,p=s+a/2-u+l,v=o-n/2+u-l,f=s-a/2-l,g=o+n/2-u+l,y=s+a/2+l,m=Math.min(e,r),x=Math.max(e,r),b=Math.min(t,i),w=Math.max(t,i);return c>x?!1:m>h?!1:f>w?!1:b>y?!1:c>=m&&x>=c&&d>=b&&w>=d?!0:h>=m&&x>=h&&d>=b&&w>=d?!0:h>=m&&x>=h&&p>=b&&w>=p?!0:c>=m&&x>=c&&p>=b&&w>=p?!0:m>=c&&h>=m&&b>=d&&p>=b?!0:x>=c&&h>=x&&b>=d&&p>=b?!0:x>=c&&h>=x&&w>=d&&p>=w?!0:m>=c&&h>=m&&w>=d&&p>=w?!0:v>=m&&x>=v&&f>=b&&w>=f?!0:g>=m&&x>=g&&f>=b&&w>=f?!0:g>=m&&x>=g&&y>=b&&w>=y?!0:v>=m&&x>=v&&y>=b&&w>=y?!0:m>=v&&g>=m&&b>=f&&y>=b?!0:x>=v&&g>=x&&b>=f&&y>=b?!0:x>=v&&g>=x&&w>=f&&y>=w?!0:m>=v&&g>=m&&w>=f&&y>=w?!0:this.boxIntersectEllipse(m,b,x,w,l,2*u,2*u,v+l,d+l)?!0:this.boxIntersectEllipse(m,b,x,w,l,2*u,2*u,g-l,d+l)?!0:this.boxIntersectEllipse(m,b,x,w,l,2*u,2*u,g-l,p-l)?!0:this.boxIntersectEllipse(m,b,x,w,l,2*u,2*u,v+l,p-l)?!0:!1},e.math.checkInBoundingCircle=function(e,t,r,i,n,a,o,s){return e=(e-o)/(n+i),t=(t-s)/(a+i),r>=e*e+t*t},e.math.boxInBezierVicinity=function(e,t,r,i,n,a,o,s,l,u,c){var d=.25*n+.5*o+.25*l,h=.25*a+.5*s+.25*u,p=Math.min(e,r)-c,v=Math.min(t,i)-c,f=Math.max(e,r)+c,g=Math.max(t,i)+c;if(n>=p&&f>=n&&a>=v&&g>=a)return 1;if(l>=p&&f>=l&&u>=v&&g>=u)return 1;if(d>=p&&f>=d&&h>=v&&g>=h)return 1;if(o>=p&&f>=o&&s>=v&&g>=s)return 1;var y=Math.min(n,d,l),m=Math.min(a,h,u),x=Math.max(n,d,l),b=Math.max(a,h,u);return y>f||p>x||m>g||v>b?0:1},e.math.checkBezierInBox=function(t,r,i,n,a,o,s,l,u,c,d){function h(d){var h=e.math.qbezierAt(a,s,u,d),p=e.math.qbezierAt(o,l,c,d);return h>=t&&i>=h&&p>=r&&n>=p}for(var p=0;1>=p;p+=.25)if(!h(p))return!1;return!0},e.math.checkStraightEdgeInBox=function(e,t,r,i,n,a,o,s,l){return n>=e&&r>=n&&o>=e&&r>=o&&a>=t&&i>=a&&s>=t&&i>=s},e.math.checkStraightEdgeCrossesBox=function(e,t,r,i,n,a,o,s,l){var u,c,d=Math.min(e,r)-l,h=Math.min(t,i)-l,p=Math.max(e,r)+l,v=Math.max(t,i)+l,f=o-n,g=n,y=s-a,m=a;if(Math.abs(f)<1e-4)return n>=d&&p>=n&&Math.min(a,s)<=h&&Math.max(a,s)>=v;var x=(d-g)/f;if(x>0&&1>=x&&(u=y*x+m,u>=h&&v>=u))return!0;var b=(p-g)/f;if(b>0&&1>=b&&(u=y*b+m,u>=h&&v>=u))return!0;var w=(h-m)/y;if(w>0&&1>=w&&(c=f*w+g,c>=d&&p>=c))return!0;var _=(v-m)/y;return _>0&&1>=_&&(c=f*_+g,c>=d&&p>=c)?!0:!1},e.math.checkBezierCrossesBox=function(e,t,r,i,n,a,o,s,l,u,c){var d=Math.min(e,r)-c,h=Math.min(t,i)-c,p=Math.max(e,r)+c,v=Math.max(t,i)+c;if(n>=d&&p>=n&&a>=h&&v>=a)return!0;if(l>=d&&p>=l&&u>=h&&v>=u)return!0;var f=n-2*o+l,g=-2*n+2*o,y=n,m=[];if(Math.abs(f)<1e-4){var x=(d-n)/g,b=(p-n)/g;m.push(x,b)}else{var w,_,E=g*g-4*f*(y-d);if(E>0){var S=Math.sqrt(E);w=(-g+S)/(2*f),_=(-g-S)/(2*f),m.push(w,_)}var D,k,P=g*g-4*f*(y-p);if(P>0){var S=Math.sqrt(P);D=(-g+S)/(2*f),k=(-g-S)/(2*f),m.push(D,k)}}m.sort(function(e,t){return e-t});var C=a-2*s+u,T=-2*a+2*s,M=a,B=[];if(Math.abs(C)<1e-4){var N=(h-a)/T,I=(v-a)/T;B.push(N,I)}else{var O,z,L=T*T-4*C*(M-h);if(L>0){var S=Math.sqrt(L);O=(-T+S)/(2*C),z=(-T-S)/(2*C),B.push(O,z)}var R,V,A=T*T-4*C*(M-v);if(A>0){var S=Math.sqrt(A);R=(-T+S)/(2*C),V=(-T-S)/(2*C),B.push(R,V)}}B.sort(function(e,t){return e-t});for(var X=0;X<m.length;X+=2)for(var F=1;F<B.length;F+=2)if(m[X]<B[F]&&B[F]>=0&&m[X]<=1&&m[X+1]>B[F-1]&&B[F-1]<=1&&m[X+1]>=0)return!0;return!1},e.math.inLineVicinity=function(e,t,r,i,n,a,o){var s=o,l=Math.min(r,n),u=Math.max(r,n),c=Math.min(i,a),d=Math.max(i,a);return e>=l-s&&u+s>=e&&t>=c-s&&d+s>=t},e.math.inBezierVicinity=function(e,t,r,i,n,a,o,s,l){var u={x1:Math.min(r,o,n),x2:Math.max(r,o,n),y1:Math.min(i,s,a),y2:Math.max(i,s,a)};return e<u.x1||e>u.x2||t<u.y1||t>u.y2?!1:!0},e.math.solveCubic=function(e,t,r,i,n){t/=e,r/=e,i/=e;var a,o,s,l,u,c,d,h;return o=(3*r-t*t)/9,s=-(27*i)+t*(9*r-2*t*t),s/=54,a=o*o*o+s*s,n[1]=0,d=t/3,a>0?(u=s+Math.sqrt(a),u=0>u?-Math.pow(-u,1/3):Math.pow(u,1/3),c=s-Math.sqrt(a),c=0>c?-Math.pow(-c,1/3):Math.pow(c,1/3),n[0]=-d+u+c,d+=(u+c)/2,n[4]=n[2]=-d,d=Math.sqrt(3)*(-c+u)/2,n[3]=d,void(n[5]=-d)):(n[5]=n[3]=0,0===a?(h=0>s?-Math.pow(-s,1/3):Math.pow(s,1/3),n[0]=-d+2*h,void(n[4]=n[2]=-(h+d))):(o=-o,l=o*o*o,l=Math.acos(s/Math.sqrt(l)),h=2*Math.sqrt(o),n[0]=-d+h*Math.cos(l/3),n[2]=-d+h*Math.cos((l+2*Math.PI)/3),void(n[4]=-d+h*Math.cos((l+4*Math.PI)/3))))},e.math.sqDistanceToQuadraticBezier=function(e,t,r,i,n,a,o,s){var l=1*r*r-4*r*n+2*r*o+4*n*n-4*n*o+o*o+i*i-4*i*a+2*i*s+4*a*a-4*a*s+s*s,u=9*r*n-3*r*r-3*r*o-6*n*n+3*n*o+9*i*a-3*i*i-3*i*s-6*a*a+3*a*s,c=3*r*r-6*r*n+r*o-r*e+2*n*n+2*n*e-o*e+3*i*i-6*i*a+i*s-i*t+2*a*a+2*a*t-s*t,d=1*r*n-r*r+r*e-n*e+i*a-i*i+i*t-a*t,h=[];this.solveCubic(l,u,c,d,h);for(var p=1e-7,v=[],f=0;6>f;f+=2)Math.abs(h[f+1])<p&&h[f]>=0&&h[f]<=1&&v.push(h[f]);v.push(1),v.push(0);for(var g,y,m,x,b=-1,w=0;w<v.length;w++)y=Math.pow(1-v[w],2)*r+2*(1-v[w])*v[w]*n+v[w]*v[w]*o,m=Math.pow(1-v[w],2)*i+2*(1-v[w])*v[w]*a+v[w]*v[w]*s,x=Math.pow(y-e,2)+Math.pow(m-t,2),b>=0?b>x&&(b=x,g=v[w]):(b=x,g=v[w]);return b},e.math.sqDistanceToFiniteLine=function(e,t,r,i,n,a){var o=[e-r,t-i],s=[n-r,a-i],l=s[0]*s[0]+s[1]*s[1],u=o[0]*o[0]+o[1]*o[1],c=o[0]*s[0]+o[1]*s[1],d=c*c/l;return 0>c?u:d>l?(e-n)*(e-n)+(t-a)*(t-a):u-d},e.math.pointInsidePolygon=function(e,t,r,i,n,a,o,s,l){var u=new Array(r.length),c=Math.asin(s[1]/Math.sqrt(s[0]*s[0]+s[1]*s[1]));s[0]<0?c+=Math.PI/2:c=-c-Math.PI/2;for(var d=Math.cos(-c),h=Math.sin(-c),p=0;p<u.length/2;p++)u[2*p]=a/2*(r[2*p]*d-r[2*p+1]*h),u[2*p+1]=o/2*(r[2*p+1]*d+r[2*p]*h),u[2*p]+=i,u[2*p+1]+=n;var v;if(l>0){var f=this.expandPolygon(u,-l);v=this.joinLines(f)}else v=u;for(var g,y,m,x,b,w=0,_=0,p=0;p<v.length/2;p++)if(g=v[2*p],y=v[2*p+1],p+1<v.length/2?(m=v[2*(p+1)],x=v[2*(p+1)+1]):(m=v[2*(p+1-v.length/2)],x=v[2*(p+1-v.length/2)+1]),g==e&&m==e);else{if(!(g>=e&&e>=m||e>=g&&m>=e))continue;b=(e-g)/(m-g)*(x-y)+y,b>t&&w++,t>b&&_++}return w%2===0?!1:!0},e.math.joinLines=function(e){for(var t,r,i,n,a,o,s,l,u=new Array(e.length/2),c=0;c<e.length/4;c++){t=e[4*c],r=e[4*c+1],i=e[4*c+2],n=e[4*c+3],c<e.length/4-1?(a=e[4*(c+1)],o=e[4*(c+1)+1],s=e[4*(c+1)+2],l=e[4*(c+1)+3]):(a=e[0],o=e[1],s=e[2],l=e[3]);var d=this.finiteLinesIntersect(t,r,i,n,a,o,s,l,!0);u[2*c]=d[0],u[2*c+1]=d[1]}return u},e.math.expandPolygon=function(e,t){for(var r,i,n,a,o=new Array(2*e.length),s=0;s<e.length/2;s++){r=e[2*s],i=e[2*s+1],s<e.length/2-1?(n=e[2*(s+1)],a=e[2*(s+1)+1]):(n=e[0],a=e[1]);var l=a-i,u=-(n-r),c=Math.sqrt(l*l+u*u),d=l/c,h=u/c;o[4*s]=r+d*t,o[4*s+1]=i+h*t,o[4*s+2]=n+d*t,o[4*s+3]=a+h*t}return o},e.math.intersectLineEllipse=function(e,t,r,i,n,a){var o=r-e,s=i-t;o/=n,s/=a;var l=Math.sqrt(o*o+s*s),u=l-1;if(0>u)return[];var c=u/l;return[(r-e)*c+e,(i-t)*c+t]},e.math.dotProduct=function(e,t){if(2!=e.length||2!=t.length)throw"dot product: arguments are not vectors";return e[0]*t[0]+e[1]*t[1]},e.math.intersectLineCircle=function(e,t,r,i,n,a,o){var s=[r-e,i-t],l=[n,a],u=[e-n,t-a],c=s[0]*s[0]+s[1]*s[1],d=2*(u[0]*s[0]+u[1]*s[1]),l=u[0]*u[0]+u[1]*u[1]-o*o,h=d*d-4*c*l;if(0>h)return[];var p=(-d+Math.sqrt(h))/(2*c),v=(-d-Math.sqrt(h))/(2*c),f=Math.min(p,v),g=Math.max(p,v),y=[];if(f>=0&&1>=f&&y.push(f),g>=0&&1>=g&&y.push(g),0===y.length)return[];var m=y[0]*s[0]+e,x=y[0]*s[1]+t;if(y.length>1){if(y[0]==y[1])return[m,x];var b=y[1]*s[0]+e,w=y[1]*s[1]+t;return[m,x,b,w]}return[m,x]},e.math.findCircleNearPoint=function(e,t,r,i,n){var a=i-e,o=n-t,s=Math.sqrt(a*a+o*o),l=a/s,u=o/s;return[e+l*r,t+u*r]},e.math.findMaxSqDistanceToOrigin=function(e){for(var t,r=1e-6,i=0;i<e.length/2;i++)t=e[2*i]*e[2*i]+e[2*i+1]*e[2*i+1],t>r&&(r=t);return r},e.math.finiteLinesIntersect=function(e,t,r,i,n,a,o,s,l){var u=(o-n)*(t-a)-(s-a)*(e-n),c=(r-e)*(t-a)-(i-t)*(e-n),d=(s-a)*(r-e)-(o-n)*(i-t);if(0!==d){var h=u/d,p=c/d;return h>=0&&1>=h&&p>=0&&1>=p?[e+h*(r-e),t+h*(i-t)]:l?[e+h*(r-e),t+h*(i-t)]:[]}return 0===u||0===c?[e,r,o].sort()[1]===o?[o,s]:[e,r,n].sort()[1]===n?[n,a]:[n,o,r].sort()[1]===r?[r,i]:[]:[]},e.math.boxIntersectEllipse=function(e,t,r,i,n,a,o,s,l){if(e>r){var u=e;e=r,r=u}if(t>i){var c=t;t=i,i=c}var d=[s-a/2-n,l],h=[s+a/2+n,l],p=[s,l-o/2-n],v=[s,l+o/2+n];return r<d[0]?!1:e>h[0]?!1:t>v[1]?!1:i<p[1]?!1:e<=h[0]&&h[0]<=r&&t<=h[1]&&h[1]<=i?!0:e<=d[0]&&d[0]<=r&&t<=d[1]&&d[1]<=i?!0:e<=p[0]&&p[0]<=r&&t<=p[1]&&p[1]<=i?!0:e<=v[0]&&v[0]<=r&&t<=v[1]&&v[1]<=i?!0:(e=(e-s)/(a/2+n),r=(r-s)/(a/2+n),t=(t-l)/(o/2+n),i=(i-l)/(o/2+n),1>=e*e+t*t?!0:1>=r*r+t*t?!0:1>=r*r+i*i?!0:1>=e*e+i*i?!0:!1)},e.math.boxIntersectPolygon=function(t,r,i,n,a,o,s,l,u,c,d){if(t>i){var h=t;t=i,i=h}if(r>n){var p=r;r=n,n=p}var v=new Array(a.length),f=Math.asin(c[1]/Math.sqrt(c[0]*c[0]+c[1]*c[1]));c[0]<0?f+=Math.PI/2:f=-f-Math.PI/2;for(var g=Math.cos(-f),y=Math.sin(-f),m=0;m<v.length/2;m++)v[2*m]=o/2*(a[2*m]*g-a[2*m+1]*y),v[2*m+1]=s/2*(a[2*m+1]*g+a[2*m]*y),v[2*m]+=l,v[2*m+1]+=u;for(var x=v[0],b=v[0],w=v[1],_=v[1],m=1;m<v.length/2;m++)v[2*m]>b&&(b=v[2*m]),v[2*m]<x&&(x=v[2*m]),v[2*m+1]>_&&(_=v[2*m+1]),v[2*m+1]<w&&(w=v[2*m+1]);if(x-d>i)return!1;if(t>b+d)return!1;if(w-d>n)return!1;if(r>_+d)return!1;var E;if(d>0){var S=e.math.expandPolygon(v,-d);E=e.math.joinLines(S)}else E=v;for(var m=0;m<v.length/2;m++)if(t<=v[2*m]&&v[2*m]<=i&&r<=v[2*m+1]&&v[2*m+1]<=n)return!0;for(var m=0;m<E.length/2;m++){var D,k,P=E[2*m],C=E[2*m+1];if(m<E.length/2-1?(D=E[2*(m+1)],k=E[2*(m+1)+1]):(D=E[0],k=E[1]),e.math.finiteLinesIntersect(P,C,D,k,t,r,i,r,!1).length>0)return!0;if(e.math.finiteLinesIntersect(P,C,D,k,t,n,i,n,!1).length>0)return!0;if(e.math.finiteLinesIntersect(P,C,D,k,t,r,t,n,!1).length>0)return!0;if(e.math.finiteLinesIntersect(P,C,D,k,i,r,i,n,!1).length>0)return!0}return!1},e.math.polygonIntersectLine=function(t,r,i,n,a,o,s,l){for(var u,c=[],d=new Array(i.length),h=0;h<d.length/2;h++)d[2*h]=i[2*h]*o+n,d[2*h+1]=i[2*h+1]*s+a;var p;if(l>0){var v=e.math.expandPolygon(d,-l);p=e.math.joinLines(v)}else p=d;for(var f,g,y,m,h=0;h<p.length/2;h++)f=p[2*h],g=p[2*h+1],h<p.length/2-1?(y=p[2*(h+1)],m=p[2*(h+1)+1]):(y=p[0],m=p[1]),u=this.finiteLinesIntersect(t,r,n,a,f,g,y,m),0!==u.length&&c.push(u[0],u[1]);return c},e.math.shortenIntersection=function(e,t,r){var i=[e[0]-t[0],e[1]-t[1]],n=Math.sqrt(i[0]*i[0]+i[1]*i[1]),a=(n-r)/n;return 0>a&&(a=1e-5),[t[0]+a*i[0],t[1]+a*i[1]]},e.math.generateUnitNgonPointsFitToSquare=function(t,r){var i=e.math.generateUnitNgonPoints(t,r);return i=e.math.fitPolygonToSquare(i)},e.math.fitPolygonToSquare=function(e){for(var t,r,i=e.length/2,n=1/0,a=1/0,o=-(1/0),s=-(1/0),l=0;i>l;l++)t=e[2*l],r=e[2*l+1],n=Math.min(n,t),o=Math.max(o,t),a=Math.min(a,r),s=Math.max(s,r);for(var u=2/(o-n),c=2/(s-a),l=0;i>l;l++)t=e[2*l]=e[2*l]*u,r=e[2*l+1]=e[2*l+1]*c,n=Math.min(n,t),o=Math.max(o,t),a=Math.min(a,r),s=Math.max(s,r);if(-1>a)for(var l=0;i>l;l++)r=e[2*l+1]=e[2*l+1]+(-1-a);return e},e.math.generateUnitNgonPoints=function(e,t){var r=1/e*2*Math.PI,i=e%2===0?Math.PI/2+r/2:Math.PI/2;i+=t;for(var n,a,o,s=new Array(2*e),l=0;e>l;l++)n=l*r+i,a=s[2*l]=Math.cos(n),o=s[2*l+1]=Math.sin(-n);return s},e.math.getRoundRectangleRadius=function(e,t){return Math.min(e/4,t/4,8)}}(cytoscape),function(e){"use strict";function t(t,r,i){var n={};switch(n[r]=i,t){case"core":case"collection":e.fn[t](n)}if("layout"===t){for(var o=i.prototype,s=["stop"],l=0;l<s.length;l++){var u=s[l];o[u]=o[u]||function(){return this}}o.start&&!o.run?o.run=function(){return this.start(),this}:!o.start&&o.run&&(o.start=function(){return this.run(),this}),o.on=e.define.on({layout:!0}),o.one=e.define.on({layout:!0,unbindSelfOnTrigger:!0}),o.once=e.define.on({layout:!0,unbindAllBindersOnTrigger:!0}),o.off=e.define.off({layout:!0}),o.trigger=e.define.trigger({layout:!0}),e.define.eventAliasesOn(o)}return e.util.setMap({map:a,keys:[t,r],value:i})}function r(t,r){return e.util.getMap({map:a,keys:[t,r]})}function i(t,r,i,n,a){return e.util.setMap({map:o,keys:[t,r,i,n],value:a})}function n(t,r,i,n){return e.util.getMap({map:o,keys:[t,r,i,n]})}var a={};e.extensions=a;var o={};e.modules=o,e.extension=function(){return 2==arguments.length?r.apply(this,arguments):3==arguments.length?t.apply(this,arguments):4==arguments.length?n.apply(this,arguments):5==arguments.length?i.apply(this,arguments):void e.util.error("Invalid extension access syntax")}}(cytoscape),function(e,t){"use strict";if(e){var r=function(e){var t=e[0]._cyreg=e[0]._cyreg||{};return t};e.fn.cytoscape=function(i){var n=e(this);if("get"===i)return r(n).cy;if(t.is.fn(i)){var a=i,o=r(n).cy;if(o&&o.isReady())o.trigger("ready",[],a);else{var s=r(n),l=s.readies=s.readies||[];l.push(a)}}else if(t.is.plainObject(i))return n.each(function(){var t=e.extend({},i,{container:e(this)[0]});cytoscape(t)})},e.cytoscape=cytoscape,null==e.fn.cy&&null==e.cy&&(e.fn.cy=e.fn.cytoscape,e.cy=e.cytoscape)}}("undefined"!=typeof jQuery?jQuery:null,cytoscape),function(e){"use strict";function t(){return!1}function r(){return!0}e.Event=function(i,n){return this instanceof e.Event?(i&&i.type?(this.originalEvent=i,this.type=i.type,this.isDefaultPrevented=i.defaultPrevented?r:t):this.type=i,n&&(this.type=void 0!==n.type?n.type:this.type,this.cy=n.cy,this.cyTarget=n.cyTarget,this.cyPosition=n.cyPosition,this.cyRenderedPosition=n.cyRenderedPosition,this.namespace=n.namespace,this.layout=n.layout,this.data=n.data,this.message=n.message),void(this.timeStamp=i&&i.timeStamp||+new Date)):new e.Event(i,n)},e.Event.prototype={preventDefault:function(){this.isDefaultPrevented=r;var e=this.originalEvent;e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){this.isPropagationStopped=r;var e=this.originalEvent;e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=r,this.stopPropagation()},isDefaultPrevented:t,isPropagationStopped:t,isImmediatePropagationStopped:t}}(cytoscape),function(e){"use strict";e.define={data:function(t){var r={field:"data",bindingEvent:"data",allowBinding:!1,allowSetting:!1,allowGetting:!1,settingEvent:"data",settingTriggersEvent:!1,triggerFnName:"trigger",immutableKeys:{},updateStyle:!1,onSet:function(e){},canSet:function(e){return!0}};return t=e.util.extend({},r,t),function(r,i){var n=t,a=this,o=void 0!==a.length,s=o?a:[a],l=o?a[0]:a;if(e.is.string(r)){if(n.allowGetting&&void 0===i){var u;return l&&(u=l._private[n.field][r]),u}if(n.allowSetting&&void 0!==i){var c=!n.immutableKeys[r];if(c){for(var d=0,h=s.length;h>d;d++)n.canSet(s[d])&&(s[d]._private[n.field][r]=i);n.updateStyle&&a.updateStyle(),n.onSet(a),n.settingTriggersEvent&&a[n.triggerFnName](n.settingEvent)}}}else if(n.allowSetting&&e.is.plainObject(r)){var p,v,f=r;for(p in f){v=f[p];var c=!n.immutableKeys[p];if(c)for(var d=0,h=s.length;h>d;d++)n.canSet(s[d])&&(s[d]._private[n.field][p]=v)}n.updateStyle&&a.updateStyle(),n.onSet(a),n.settingTriggersEvent&&a[n.triggerFnName](n.settingEvent)}else if(n.allowBinding&&e.is.fn(r)){var g=r;a.bind(n.bindingEvent,g)}else if(n.allowGetting&&void 0===r){var u;return l&&(u=l._private[n.field]),u}return a}},removeData:function(t){var r={field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!1,immutableKeys:{}};return t=e.util.extend({},r,t),function(r){var i=t,n=this,a=void 0!==n.length,o=a?n:[n];if(e.is.string(r)){for(var s=r.split(/\s+/),l=s.length,u=0;l>u;u++){var c=s[u];if(!e.is.emptyString(c)){var d=!i.immutableKeys[c];if(d)for(var h=0,p=o.length;p>h;h++)o[h]._private[i.field][c]=void 0}}i.triggerEvent&&n[i.triggerFnName](i.event)}else if(void 0===r){for(var h=0,p=o.length;p>h;h++){var v=o[h]._private[i.field];for(var c in v){var f=!i.immutableKeys[c];f&&(v[c]=void 0)}}i.triggerEvent&&n[i.triggerFnName](i.event)}return n}},event:{regex:/(\w+)(\.\w+)?/,optionalTypeRegex:/(\w+)?(\.\w+)?/,falseCallback:function(){return!1}},on:function(t){var r={unbindSelfOnTrigger:!1,unbindAllBindersOnTrigger:!1};return t=e.util.extend({},r,t),function(r,i,n,a){var o=this,s=void 0!==o.length,l=s?o:[o],u=e.is.string(r),c=t;if(e.is.plainObject(i)?(a=n,n=i,i=void 0):(e.is.fn(i)||i===!1)&&(a=i,n=void 0,i=void 0),(e.is.fn(n)||n===!1)&&(a=n,n=void 0),!e.is.fn(a)&&a!==!1&&u)return o;if(u){var d={};d[r]=a,r=d}for(var h in r)if(a=r[h],a===!1&&(a=e.define.event.falseCallback),e.is.fn(a)){h=h.split(/\s+/);for(var p=0;p<h.length;p++){var v=h[p];if(!e.is.emptyString(v)){var f=v.match(e.define.event.regex);if(f)for(var g=f[1],y=f[2]?f[2]:void 0,m={callback:a,data:n,delegated:i?!0:!1,selector:i,selObj:new e.Selector(i),type:g,namespace:y,unbindSelfOnTrigger:c.unbindSelfOnTrigger,unbindAllBindersOnTrigger:c.unbindAllBindersOnTrigger,binders:l},x=0;x<l.length;x++){var b=l[x]._private;b.listeners=b.listeners||[],b.listeners.push(m)}}}}return o}},eventAliasesOn:function(t){var r=t;r.addListener=r.listen=r.bind=r.on,r.removeListener=r.unlisten=r.unbind=r.off,r.emit=r.trigger,r.pon=r.promiseOn=function(t,r){var i=this,n=Array.prototype.slice.call(arguments,0);return new e.Promise(function(e,t){var r=function(t){i.off.apply(i,o),e(t)},a=n.concat([r]),o=a.concat([]);i.on.apply(i,a)})}},off:function(t){var r={};return t=e.util.extend({},r,t),function(t,r,i){var n=this,a=void 0!==n.length,o=a?n:[n],s=e.is.string(t);if(0===arguments.length){for(var l=0;l<o.length;l++)o[l]._private.listeners=[];return n}if((e.is.fn(r)||r===!1)&&(i=r,r=void 0),s){var u={};u[t]=i,t=u}for(var c in t){i=t[c],i===!1&&(i=e.define.event.falseCallback),c=c.split(/\s+/);for(var d=0;d<c.length;d++){var h=c[d];if(!e.is.emptyString(h)){var p=h.match(e.define.event.optionalTypeRegex);if(p)for(var v=p[1]?p[1]:void 0,f=p[2]?p[2]:void 0,l=0;l<o.length;l++)for(var g=o[l]._private.listeners=o[l]._private.listeners||[],y=0;y<g.length;y++){var m=g[y],x=!f||f===m.namespace,b=!v||m.type===v,w=!i||i===m.callback,_=x&&b&&w;_&&(g.splice(y,1),y--)}}}}return n}},trigger:function(t){var r={};return t=e.util.extend({},r,t),function(r,i,n){var a=this,o=void 0!==a.length,s=o?a:[a],l=e.is.string(r),u=e.is.plainObject(r),c=e.is.event(r),d=this._private.cy||(e.is.core(this)?this:null),h=d?d.hasCompoundNodes():!1;if(l){var p=r.split(/\s+/);r=[];for(var v=0;v<p.length;v++){var f=p[v];if(!e.is.emptyString(f)){var g=f.match(e.define.event.regex),y=g[1],m=g[2]?g[2]:void 0;r.push({type:y,namespace:m})}}}else if(u){var x=r;r=[x]}i?e.is.array(i)||(i=[i]):i=[];for(var v=0;v<r.length;v++)for(var b=r[v],w=0;w<s.length;w++){var f,_=s[w],E=_._private.listeners=_._private.listeners||[],S=e.is.element(_),D=S||t.layout;if(c?(f=b,f.cyTarget=f.cyTarget||_,f.cy=f.cy||d):f=new e.Event(b,{cyTarget:_,cy:d,namespace:b.namespace}),b.layout&&(f.layout=b.layout),t.layout&&(f.layout=_),f.cyPosition){var k=f.cyPosition,P=d.zoom(),C=d.pan();f.cyRenderedPosition={x:k.x*P+C.x,y:k.y*P+C.y}}n&&(E=[{namespace:f.namespace,type:f.type,callback:n}]);for(var T=0;T<E.length;T++){var M=E[T],B=!M.namespace||M.namespace===f.namespace,N=M.type===f.type,I=M.delegated?_!==f.cyTarget&&e.is.element(f.cyTarget)&&M.selObj.matches(f.cyTarget):!0,O=B&&N&&I;if(O){var z=[f];if(z=z.concat(i),f.data=M.data?M.data:void 0,(M.unbindSelfOnTrigger||M.unbindAllBindersOnTrigger)&&(E.splice(T,1),T--),M.unbindAllBindersOnTrigger)for(var L=M.binders,R=0;R<L.length;R++){var V=L[R];if(V&&V!==_)for(var A=V._private.listeners,X=0;X<A.length;X++){var F=A[X];F===M&&(A.splice(X,1),X--)}}var Y=M.delegated?f.cyTarget:_,q=M.callback.apply(Y,z);(q===!1||f.isPropagationStopped())&&(D=!1,q===!1&&(f.stopPropagation(),f.preventDefault()))}}if(D){var j=h?_._private.parent:null,$=null!=j&&0!==j.length;$?(j=j[0],j.trigger(f)):d.trigger(f)}}return a}},animated:function(t){var r={};return t=e.util.extend({},r,t),function(){var e=this,t=void 0!==e.length,r=t?e:[e],i=this._private.cy||this;if(!i.styleEnabled())return!1;var n=r[0];return n?n._private.animation.current.length>0:void 0}},clearQueue:function(t){
var r={};return t=e.util.extend({},r,t),function(){var e=this,t=void 0!==e.length,r=t?e:[e],i=this._private.cy||this;if(!i.styleEnabled())return this;for(var n=0;n<r.length;n++){var a=r[n];a._private.animation.queue=[]}return this}},delay:function(t){var r={};return t=e.util.extend({},r,t),function(e,t){var r=this._private.cy||this;return r.styleEnabled()?(this.animate({delay:e},{duration:e,complete:t}),this):this}},animate:function(t){var r={};return t=e.util.extend({},r,t),function(e,t){var r=this,i=void 0!==r.length,n=i?r:[r],a=this._private.cy||this,o=!i,s=!o;if(!a.styleEnabled())return this;var l,u=+new Date,c=a.style();switch(void 0===t&&(t={}),void 0===t.duration&&(t.duration=400),t.duration){case"slow":t.duration=600;break;case"fast":t.duration=200}var d=!0;if(e)for(var h in e){d=!1;break}if(d)return this;if(e.css&&s&&(e.css=c.getValueStyle(e.css,{array:!0})),e.renderedPosition&&s){var p=e.renderedPosition,v=a.pan(),f=a.zoom();e.position={x:(p.x-v.x)/f,y:(p.y-v.y)/f}}if(e.panBy&&o){var g=e.panBy,y=a.pan();e.pan={x:y.x+g.x,y:y.y+g.y}}var m=e.center||e.centre;if(m&&o){var x=a.getCenterPan(m.eles,e.zoom);x&&(e.pan=x)}if(e.fit&&o){var b=e.fit,w=a.getFitViewport(b.eles||b.boundingBox,b.padding);w&&(e.pan=w.pan,e.zoom=w.zoom)}for(var h=0;h<n.length;h++){var _=n[h];l=_.animated()&&(void 0===t.queue||t.queue)?_._private.animation.queue:_._private.animation.current,l.push({properties:e,duration:t.duration,params:t,callTime:u})}return s&&a.addToAnimationPool(this),this}},stop:function(t){var r={};return t=e.util.extend({},r,t),function(e,t){var r=this,i=void 0!==r.length,n=i?r:[r],a=this._private.cy||this;if(!a.styleEnabled())return this;for(var o=0;o<n.length;o++){for(var s=n[o],l=s._private.animation.current,u=0;u<l.length;u++){var c=l[u];t&&(c.duration=0)}e&&(s._private.animation.queue=[]),t||(s._private.animation.current=[])}return a.notify({collection:this,type:"draw"}),this}}}}(cytoscape),function(e){"use strict";e.fn.selector=function(t,r){for(var i in t){var n=t[i];e.Selector.prototype[i]=n}},e.Selector=function(t,r){if(!(this instanceof e.Selector))return new e.Selector(t,r);void 0===r&&void 0!==t&&(r=t,t=void 0);var i=this;if(i._private={selectorText:null,invalid:!0},!r||e.is.string(r)&&r.match(/^\s*$/))null==t?i.length=0:(i[0]=o(),i[0].group=t,i.length=1);else if(e.is.element(r)){var n=new e.Collection(i.cy(),[r]);i[0]=o(),i[0].collection=n,i.length=1}else if(e.is.collection(r))i[0]=o(),i[0].collection=r,i.length=1;else if(e.is.fn(r))i[0]=o(),i[0].filter=r,i.length=1;else{if(!e.is.string(r))return void e.util.error("A selector must be created from a string; found "+r);var a=null,o=function(){return{classes:[],colonSelectors:[],data:[],group:null,ids:[],meta:[],collection:null,filter:null,parent:null,ancestor:null,subject:null,child:null,descendant:null}},s={metaChar:"[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",comparatorOp:"=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",boolOp:"\\?|\\!|\\^",string:'"(?:\\\\"|[^"])+"|'+"'(?:\\\\'|[^'])+'",number:e.util.regex.number,meta:"degree|indegree|outdegree",separator:"\\s*,\\s*",descendant:"\\s+",child:"\\s+>\\s+",subject:"\\$"};s.variable="(?:[\\w-]|(?:\\\\"+s.metaChar+"))+",s.value=s.string+"|"+s.number,s.className=s.variable,s.id=s.variable;for(var l=function(e){return e.replace(new RegExp("\\\\("+s.metaChar+")","g"),function(e,t,r,i){return t})},u=s.comparatorOp.split("|"),c=0;c<u.length;c++){var d=u[c];s.comparatorOp+="|@"+d}for(var u=s.comparatorOp.split("|"),c=0;c<u.length;c++){var d=u[c];d.indexOf("!")>=0||"="!==d&&(s.comparatorOp+="|\\!"+d)}var h={group:{query:!0,regex:"(node|edge|\\*)",populate:function(e){this.group="*"==e?e:e+"s"}},state:{query:!0,regex:"(:selected|:unselected|:locked|:unlocked|:visible|:hidden|:transparent|:grabbed|:free|:removed|:inside|:grabbable|:ungrabbable|:animated|:unanimated|:selectable|:unselectable|:orphan|:nonorphan|:parent|:child|:loop|:simple|:active|:inactive|:touch|:backgrounding|:nonbackgrounding)",populate:function(e){this.colonSelectors.push(e)}},id:{query:!0,regex:"\\#("+s.id+")",populate:function(e){this.ids.push(l(e))}},className:{query:!0,regex:"\\.("+s.className+")",populate:function(e){this.classes.push(l(e))}},dataExists:{query:!0,regex:"\\[\\s*("+s.variable+")\\s*\\]",populate:function(e){this.data.push({field:l(e)})}},dataCompare:{query:!0,regex:"\\[\\s*("+s.variable+")\\s*("+s.comparatorOp+")\\s*("+s.value+")\\s*\\]",populate:function(e,t,r){var i=null!=new RegExp("^"+s.string+"$").exec(r);r=i?r.substring(1,r.length-1):parseFloat(r),this.data.push({field:l(e),operator:t,value:r})}},dataBool:{query:!0,regex:"\\[\\s*("+s.boolOp+")\\s*("+s.variable+")\\s*\\]",populate:function(e,t){this.data.push({field:l(t),operator:e})}},metaCompare:{query:!0,regex:"\\[\\[\\s*("+s.meta+")\\s*("+s.comparatorOp+")\\s*("+s.number+")\\s*\\]\\]",populate:function(e,t,r){this.meta.push({field:l(e),operator:t,value:parseFloat(r)})}},nextQuery:{separator:!0,regex:s.separator,populate:function(){i[++c]=o(),a=null}},child:{separator:!0,regex:s.child,populate:function(){var e=o();e.parent=this,e.subject=a,i[c]=e}},descendant:{separator:!0,regex:s.descendant,populate:function(){var e=o();e.ancestor=this,e.subject=a,i[c]=e}},subject:{modifier:!0,regex:s.subject,populate:function(){return null!=a&&this.subject!=this?(e.util.error("Redefinition of subject in selector `"+r+"`"),!1):(a=this,void(this.subject=this))}}},p=0;for(var v in h)h[p]=h[v],h[p].name=v,p++;h.length=p,i._private.selectorText=r;var f=r,c=0,g=function(t){for(var r,i,n,a=0;a<h.length;a++){var o=h[a],s=o.name;if(!e.is.fn(t)||t(s,o)){var l=f.match(new RegExp("^"+o.regex));if(null!=l){i=l,r=o,n=s;var u=l[0];f=f.substring(u.length);break}}}return{expr:r,match:i,name:n}},y=function(){var e=f.match(/^\s+/);if(e){var t=e[0];f=f.substring(t.length)}};for(i[0]=o(),y();;){var m=g();if(null==m.expr)return void e.util.error("The selector `"+r+"`is invalid");for(var x=[],p=1;p<m.match.length;p++)x.push(m.match[p]);var b=m.expr.populate.apply(i[c],x);if(b===!1)return;if(f.match(/^\s*$/))break}for(i.length=c+1,p=0;p<i.length;p++){var w=i[p];if(null!=w.subject){for(;w.subject!=w;)if(null!=w.parent){var _=w.parent,E=w;E.parent=null,_.child=E,w=_}else{if(null==w.ancestor){e.util.error("When adjusting references for the selector `"+w+"`, neither parent nor ancestor was found");break}var S=w.ancestor,D=w;D.ancestor=null,S.descendant=D,w=S}i[p]=w.subject}}if(null!=t)for(var p=0;p<i.length;p++){if(null!=i[p].group&&i[p].group!=t)return void e.util.error("Group `"+i[p].group+"` conflicts with implicit group `"+t+"` in selector `"+r+"`");i[p].group=t}}i._private.invalid=!1},e.selfn=e.Selector.prototype,e.selfn.size=function(){return this.length},e.selfn.eq=function(e){return this[e]},e.selfn.find=function(){};var t=function(r,i){if(null!=r.group&&"*"!=r.group&&r.group!=i._private.group)return!1;for(var n=i.cy(),a=!0,o=0;o<r.colonSelectors.length;o++){var s=r.colonSelectors[o];switch(s){case":selected":a=i.selected();break;case":unselected":a=!i.selected();break;case":selectable":a=i.selectable();break;case":unselectable":a=!i.selectable();break;case":locked":a=i.locked();break;case":unlocked":a=!i.locked();break;case":visible":a=i.visible();break;case":hidden":a=!i.visible();break;case":transparent":a=i.transparent();break;case":grabbed":a=i.grabbed();break;case":free":a=!i.grabbed();break;case":removed":a=i.removed();break;case":inside":a=!i.removed();break;case":grabbable":a=i.grabbable();break;case":ungrabbable":a=!i.grabbable();break;case":animated":a=i.animated();break;case":unanimated":a=!i.animated();break;case":parent":a=i.isNode()&&i.children().nonempty();break;case":child":case":nonorphan":a=i.isNode()&&i.parent().nonempty();break;case":orphan":a=i.isNode()&&i.parent().empty();break;case":loop":a=i.isEdge()&&i.data("source")===i.data("target");break;case":simple":a=i.isEdge()&&i.data("source")!==i.data("target");break;case":active":a=i.active();break;case":inactive":a=!i.active();break;case":touch":a=e.is.touch();break;case":backgrounding":a=i.backgrounding();break;case":nonbackgrounding":a=!i.backgrounding()}if(!a)break}if(!a)return!1;for(var l=!0,o=0;o<r.ids.length;o++){var u=r.ids[o],c=i._private.data.id;if(l=l&&u==c,!l)break}if(!l)return!1;for(var d=!0,o=0;o<r.classes.length;o++){var h=r.classes[o];if(d=d&&i.hasClass(h),!d)break}if(!d)return!1;var p=function(t){for(var i=!0,n=0;n<r[t.name].length;n++){var a,o=r[t.name][n],s=o.operator,l=o.value,u=o.field;if(null!=s&&null!=l){var c=t.fieldValue(u),d=e.is.string(c)||e.is.number(c)?""+c:"",h=""+l,p=!1;s.indexOf("@")>=0&&(d=d.toLowerCase(),h=h.toLowerCase(),s=s.replace("@",""),p=!0);var v=!1,f=!1;switch(s.indexOf("!")>=0&&(s=s.replace("!",""),v=!0),p&&(l=h.toLowerCase(),c=d.toLowerCase()),s){case"*=":a=d.search(h)>=0;break;case"$=":a=null!=new RegExp(h+"$").exec(d);break;case"^=":a=null!=new RegExp("^"+h).exec(d);break;case"=":a=c===l;break;case"!=":a=c!==l;break;case">":a=v?l>=c:c>l,f=!0;break;case">=":a=v?l>c:c>=l,f=!0;break;case"<":a=v?c>=l:l>c,f=!0;break;case"<=":a=v?c>l:l>=c,f=!0;break;default:a=!1}}else if(null!=s)switch(s){case"?":a=t.fieldTruthy(u);break;case"!":a=!t.fieldTruthy(u);break;case"^":a=t.fieldUndefined(u)}else a=!t.fieldUndefined(u);if(v&&!f&&(a=!a,f=!0),!a){i=!1;break}}return i},v=p({name:"data",fieldValue:function(e){return i._private.data[e]},fieldRef:function(e){return"element._private.data."+e},fieldUndefined:function(e){return void 0===i._private.data[e]},fieldTruthy:function(e){return i._private.data[e]?!0:!1}});if(!v)return!1;var f=p({name:"meta",fieldValue:function(e){return i[e]()},fieldRef:function(e){return"element."+e+"()"},fieldUndefined:function(e){return null==i[e]()},fieldTruthy:function(e){return i[e]()?!0:!1}});if(!f)return!1;if(null!=r.collection){var g=null!=r.collection._private.ids[i.id()];if(!g)return!1}if(null!=r.filter&&0===i.collection().filter(r.filter).size())return!1;var y=function(e,r){if(null!=e){var i=!1;if(!n.hasCompoundNodes())return!1;r=r();for(var a=0;a<r.length;a++)if(t(e,r[a])){i=!0;break}return i}return!0};return y(r.parent,function(){return i.parent()})&&y(r.ancestor,function(){return i.parents()})&&y(r.child,function(){return i.children()})&&y(r.descendant,function(){return i.descendants()})?!0:!1};e.selfn.filter=function(r){var i=this,n=r.cy();if(i._private.invalid)return new e.Collection(n);var a=function(e,r){for(var n=0;n<i.length;n++){var a=i[n];if(t(a,r))return!0}return!1};null==i._private.selectorText&&(a=function(){return!0});var o=r.filter(a);return o},e.selfn.matches=function(e){var r=this;if(r._private.invalid)return!1;for(var i=0;i<r.length;i++){var n=r[i];if(t(n,e))return!0}return!1},e.selfn.toString=e.selfn.selector=function(){for(var t="",r=function(t,r){return e.is.string(t)?r?'"'+t+'"':t:""},i=function(e){var t="";e.subject===e&&(t+="$");var a=r(e.group);t+=a.substring(0,a.length-1);for(var o=0;o<e.data.length;o++){var s=e.data[o];t+=s.value?"["+s.field+r(s.operator)+r(s.value,!0)+"]":"["+r(s.operator)+s.field+"]"}for(var o=0;o<e.meta.length;o++){var l=e.meta[o];t+="[["+l.field+r(l.operator)+r(l.value,!0)+"]]"}for(var o=0;o<e.colonSelectors.length;o++){var u=e.colonSelectors[n];t+=u}for(var o=0;o<e.ids.length;o++){var u="#"+e.ids[n];t+=u}for(var o=0;o<e.classes.length;o++){var u="."+e.classes[n];t+=u}return null!=e.parent&&(t=i(e.parent)+" > "+t),null!=e.ancestor&&(t=i(e.ancestor)+" "+t),null!=e.child&&(t+=" > "+i(e.child)),null!=e.descendant&&(t+=" "+i(e.descendant)),t},n=0;n<this.length;n++){var a=this[n];t+=i(a),this.length>1&&n<this.length-1&&(t+=", ")}return t}}(cytoscape),function(e){"use strict";e.Style=function(t){return this instanceof e.Style?e.is.core(t)?(this._private={cy:t,coreStyle:{},newStyle:!0},this.length=0,void this.addDefaultStylesheet()):void e.util.error("A style must have a core reference"):new e.Style(t)},e.style=e.Style,e.styfn=e.Style.prototype,e.fn.style=function(t,r){for(var i in t){var n=t[i];e.Style.prototype=n}},function(){var t=e.util.regex.number,r=e.util.regex.rgbaNoBackRefs,i=e.util.regex.hslaNoBackRefs,n=e.util.regex.hex3,a=e.util.regex.hex6,o=function(e){return"^"+e+"\\s*\\(\\s*([\\w\\.]+)\\s*\\)$"},s=function(e){return"^"+e+"\\s*\\(([\\w\\.]+)\\s*\\,\\s*("+t+")\\s*\\,\\s*("+t+")\\s*,\\s*("+t+"|\\w+|"+r+"|"+i+"|"+n+"|"+a+")\\s*\\,\\s*("+t+"|\\w+|"+r+"|"+i+"|"+n+"|"+a+")\\)$"};e.style.types={time:{number:!0,min:0,units:"s|ms",implicitUnits:"ms"},percent:{number:!0,min:0,max:100,units:"%"},zeroOneNumber:{number:!0,min:0,max:1,unitless:!0},nOneOneNumber:{number:!0,min:-1,max:1,unitless:!0},nonNegativeInt:{number:!0,min:0,integer:!0,unitless:!0},position:{enums:["parent","origin"]},autoSize:{number:!0,min:0,enums:["auto"]},number:{number:!0},size:{number:!0,min:0},bgSize:{number:!0,min:0,allowPercent:!0},bgWH:{number:!0,min:0,allowPercent:!0,enums:["auto"]},bgPos:{number:!0,allowPercent:!0},bgRepeat:{enums:["repeat","repeat-x","repeat-y","no-repeat"]},bgFit:{enums:["none","contain","cover"]},bgClip:{enums:["none","node"]},color:{color:!0},lineStyle:{enums:["solid","dotted","dashed"]},borderStyle:{enums:["solid","dotted","dashed","double"]},curveStyle:{enums:["bezier","unbundled-bezier","haystack"]},fontFamily:{regex:'^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'},fontVariant:{enums:["small-caps","normal"]},fontStyle:{enums:["italic","normal","oblique"]},fontWeight:{enums:["normal","bold","bolder","lighter","100","200","300","400","500","600","800","900",100,200,300,400,500,600,700,800,900]},textDecoration:{enums:["none","underline","overline","line-through"]},textTransform:{enums:["none","uppercase","lowercase"]},textWrap:{enums:["none","wrap"]},textBackgroundShape:{enums:["rectangle","roundrectangle"]},nodeShape:{enums:["rectangle","roundrectangle","ellipse","triangle","square","pentagon","hexagon","heptagon","octagon","star","diamond","vee","rhomboid"]},compoundIncludeLabels:{enums:["include","exclude"]},arrowShape:{enums:["tee","triangle","triangle-tee","triangle-backcurve","half-triangle-overshot","square","circle","diamond","none"]},arrowFill:{enums:["filled","hollow"]},display:{enums:["element","none"]},visibility:{enums:["hidden","visible"]},valign:{enums:["top","center","bottom"]},halign:{enums:["left","center","right"]},text:{string:!0},data:{mapping:!0,regex:o("data")},layoutData:{mapping:!0,regex:o("layoutData")},scratch:{mapping:!0,regex:o("scratch")},mapData:{mapping:!0,regex:s("mapData")},mapLayoutData:{mapping:!0,regex:s("mapLayoutData")},mapScratch:{mapping:!0,regex:s("mapScratch")},fn:{mapping:!0,fn:!0},url:{regex:"^url\\s*\\(\\s*([^\\s]+)\\s*\\s*\\)|none|(.+)$"},propList:{propList:!0},angle:{number:!0,units:"deg|rad"},textRotation:{enums:["none","autorotate"]}};var l=e.style.types,u=e.style.properties=[{name:"text-valign",type:l.valign},{name:"text-halign",type:l.halign},{name:"color",type:l.color},{name:"content",type:l.text},{name:"text-outline-color",type:l.color},{name:"text-outline-width",type:l.size},{name:"text-outline-opacity",type:l.zeroOneNumber},{name:"text-opacity",type:l.zeroOneNumber},{name:"text-background-color",type:l.color},{name:"text-background-opacity",type:l.zeroOneNumber},{name:"text-border-color",type:l.color},{name:"text-border-width",type:l.size},{name:"text-border-style",type:l.borderStyle},{name:"text-background-shape",type:l.textBackgroundShape},{name:"text-transform",type:l.textTransform},{name:"text-wrap",type:l.textWrap},{name:"text-max-width",type:l.size},{name:"font-family",type:l.fontFamily},{name:"font-style",type:l.fontStyle},{name:"font-weight",type:l.fontWeight},{name:"font-size",type:l.size},{name:"min-zoomed-font-size",type:l.size},{name:"edge-text-rotation",type:l.textRotation},{name:"display",type:l.display},{name:"visibility",type:l.visibility},{name:"opacity",type:l.zeroOneNumber},{name:"z-index",type:l.nonNegativeInt},{name:"overlay-padding",type:l.size},{name:"overlay-color",type:l.color},{name:"overlay-opacity",type:l.zeroOneNumber},{name:"shadow-blur",type:l.size},{name:"shadow-color",type:l.color},{name:"shadow-opacity",type:l.zeroOneNumber},{name:"shadow-offset-x",type:l.number},{name:"shadow-offset-y",type:l.number},{name:"text-shadow-blur",type:l.size},{name:"text-shadow-color",type:l.color},{name:"text-shadow-opacity",type:l.zeroOneNumber},{name:"text-shadow-offset-x",type:l.number},{name:"text-shadow-offset-y",type:l.number},{name:"transition-property",type:l.propList},{name:"transition-duration",type:l.time},{name:"transition-delay",type:l.time},{name:"height",type:l.autoSize},{name:"width",type:l.autoSize},{name:"shape",type:l.nodeShape},{name:"background-color",type:l.color},{name:"background-opacity",type:l.zeroOneNumber},{name:"background-blacken",type:l.nOneOneNumber},{name:"border-color",type:l.color},{name:"border-opacity",type:l.zeroOneNumber},{name:"border-width",type:l.size},{name:"border-style",type:l.borderStyle},{name:"background-image",type:l.url},{name:"background-image-opacity",type:l.zeroOneNumber},{name:"background-position-x",type:l.bgPos},{name:"background-position-y",type:l.bgPos},{name:"background-repeat",type:l.bgRepeat},{name:"background-fit",type:l.bgFit},{name:"background-clip",type:l.bgClip},{name:"background-width",type:l.bgWH},{name:"background-height",type:l.bgWH},{name:"padding-left",type:l.size},{name:"padding-right",type:l.size},{name:"padding-top",type:l.size},{name:"padding-bottom",type:l.size},{name:"position",type:l.position},{name:"compound-sizing-wrt-labels",type:l.compoundIncludeLabels},{name:"line-style",type:l.lineStyle},{name:"line-color",type:l.color},{name:"control-point-step-size",type:l.size},{name:"control-point-distance",type:l.number},{name:"control-point-weight",type:l.zeroOneNumber},{name:"curve-style",type:l.curveStyle},{name:"haystack-radius",type:l.zeroOneNumber},{name:"source-arrow-shape",type:l.arrowShape},{name:"target-arrow-shape",type:l.arrowShape},{name:"mid-source-arrow-shape",type:l.arrowShape},{name:"mid-target-arrow-shape",type:l.arrowShape},{name:"source-arrow-color",type:l.color},{name:"target-arrow-color",type:l.color},{name:"mid-source-arrow-color",type:l.color},{name:"mid-target-arrow-color",type:l.color},{name:"source-arrow-fill",type:l.arrowFill},{name:"target-arrow-fill",type:l.arrowFill},{name:"mid-source-arrow-fill",type:l.arrowFill},{name:"mid-target-arrow-fill",type:l.arrowFill},{name:"selection-box-color",type:l.color},{name:"selection-box-opacity",type:l.zeroOneNumber},{name:"selection-box-border-color",type:l.color},{name:"selection-box-border-width",type:l.size},{name:"active-bg-color",type:l.color},{name:"active-bg-opacity",type:l.zeroOneNumber},{name:"active-bg-size",type:l.size},{name:"outside-texture-bg-color",type:l.color},{name:"outside-texture-bg-opacity",type:l.zeroOneNumber}];e.style.pieBackgroundN=16,u.push({name:"pie-size",type:l.bgSize});for(var c=1;c<=e.style.pieBackgroundN;c++)u.push({name:"pie-"+c+"-background-color",type:l.color}),u.push({name:"pie-"+c+"-background-size",type:l.percent}),u.push({name:"pie-"+c+"-background-opacity",type:l.zeroOneNumber});for(var c=0;c<u.length;c++){var d=u[c];u[d.name]=d}}(),e.styfn.addDefaultStylesheet=function(){var t="Helvetica",r="normal",i="normal",n="#000",a="none",o=16,s=9999;this.selector("node, edge").css({"text-valign":"top","text-halign":"center",color:n,"text-outline-color":"#000","text-outline-width":0,"text-outline-opacity":1,"text-opacity":1,"text-decoration":"none","text-transform":a,"text-wrap":"none","text-max-width":s,"text-background-color":"#000","text-background-opacity":0,"text-border-width":0,"text-border-style":"solid","text-border-color":"#000","text-background-shape":"rectangle","font-family":t,"font-style":r,"font-weight":i,"font-size":o,"min-zoomed-font-size":0,"edge-text-rotation":"none",visibility:"visible",display:"element",opacity:1,"z-index":0,content:"","overlay-opacity":0,"overlay-color":"#000","overlay-padding":10,"shadow-opacity":0,"shadow-color":"#000","shadow-blur":10,"shadow-offset-x":0,"shadow-offset-y":0,"text-shadow-opacity":0,"text-shadow-color":"#000","text-shadow-blur":5,"text-shadow-offset-x":0,"text-shadow-offset-y":0,"transition-property":"none","transition-duration":0,"transition-delay":0,"background-blacken":0,"background-color":"#888","background-opacity":1,"background-image":"none","background-image-opacity":1,"background-position-x":"50%","background-position-y":"50%","background-repeat":"no-repeat","background-fit":"none","background-clip":"node","background-width":"auto","background-height":"auto","border-color":"#000","border-opacity":1,"border-width":0,"border-style":"solid",height:30,width:30,shape:"ellipse","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0,position:"origin","compound-sizing-wrt-labels":"include","pie-size":"100%","pie-1-background-color":"black","pie-2-background-color":"black","pie-3-background-color":"black","pie-4-background-color":"black","pie-5-background-color":"black","pie-6-background-color":"black","pie-7-background-color":"black","pie-8-background-color":"black","pie-9-background-color":"black","pie-10-background-color":"black","pie-11-background-color":"black","pie-12-background-color":"black","pie-13-background-color":"black","pie-14-background-color":"black","pie-15-background-color":"black","pie-16-background-color":"black","pie-1-background-size":"0%","pie-2-background-size":"0%","pie-3-background-size":"0%","pie-4-background-size":"0%","pie-5-background-size":"0%","pie-6-background-size":"0%","pie-7-background-size":"0%","pie-8-background-size":"0%","pie-9-background-size":"0%","pie-10-background-size":"0%","pie-11-background-size":"0%","pie-12-background-size":"0%","pie-13-background-size":"0%","pie-14-background-size":"0%","pie-15-background-size":"0%","pie-16-background-size":"0%","pie-1-background-opacity":1,"pie-2-background-opacity":1,"pie-3-background-opacity":1,"pie-4-background-opacity":1,"pie-5-background-opacity":1,"pie-6-background-opacity":1,"pie-7-background-opacity":1,"pie-8-background-opacity":1,"pie-9-background-opacity":1,"pie-10-background-opacity":1,"pie-11-background-opacity":1,"pie-12-background-opacity":1,"pie-13-background-opacity":1,"pie-14-background-opacity":1,"pie-15-background-opacity":1,"pie-16-background-opacity":1,"source-arrow-shape":"none","mid-source-arrow-shape":"none","target-arrow-shape":"none","mid-target-arrow-shape":"none","source-arrow-color":"#ddd","mid-source-arrow-color":"#ddd","target-arrow-color":"#ddd","mid-target-arrow-color":"#ddd","source-arrow-fill":"filled","mid-source-arrow-fill":"filled","target-arrow-fill":"filled","mid-target-arrow-fill":"filled","line-style":"solid","line-color":"#ddd","control-point-step-size":40,"control-point-weight":.5,"curve-style":"bezier","haystack-radius":.8}).selector("$node > node").css({width:"auto",height:"auto",shape:"rectangle","background-opacity":.5,"padding-top":10,"padding-right":10,"padding-left":10,"padding-bottom":10}).selector("edge").css({width:1}).selector(":active").css({"overlay-color":"black","overlay-padding":10,"overlay-opacity":.25}).selector("core").css({"selection-box-color":"#ddd","selection-box-opacity":.65,"selection-box-border-color":"#aaa","selection-box-border-width":1,"active-bg-color":"black","active-bg-opacity":.15,"active-bg-size":e.is.touch()?40:15,"outside-texture-bg-color":"#000","outside-texture-bg-opacity":.125}),this.defaultLength=this.length},e.styfn.clear=function(){for(var e=0;e<this.length;e++)this[e]=void 0;return this.length=0,this._private.newStyle=!0,this},e.styfn.resetToDefault=function(){return this.clear(),this.addDefaultStylesheet(),this},e.styfn.core=function(){return this._private.coreStyle},e.styfn.parse=function(t,r,i,n){t=e.util.camel2dash(t);var a=e.style.properties[t],o=r,s=e.style.types;if(!a)return null;if(void 0===r||null===r)return null;var l=e.is.string(r);l&&(r=e.util.trim(r));var u=a.type;if(!u)return null;if(i&&(""===r||null===r))return{name:t,value:r,bypass:!0,deleteBypass:!0};var c=t.match(/pie-(\d+)-background-size/);if(e.is.fn(r))return{name:t,value:r,strValue:"fn",mapped:s.fn,bypass:i,hasPie:c};var d,h,p,v,f,g;if(!l||n);else{if((d=new RegExp(s.data.regex).exec(r))||(p=new RegExp(s.layoutData.regex).exec(r))||(f=new RegExp(s.scratch.regex).exec(r))){if(i)return!1;var y;return y=d?s.data:p?s.layoutData:s.scratch,d=d||p||f,{name:t,value:d,strValue:""+r,mapped:y,field:d[1],bypass:i,hasPie:c}}if((h=new RegExp(s.mapData.regex).exec(r))||(v=new RegExp(s.mapLayoutData.regex).exec(r))||(g=new RegExp(s.mapScratch.regex).exec(r))){if(i)return!1;var y;if(y=h?s.mapData:v?s.mapLayoutData:s.mapScratch,h=h||v||g,!u.color&&!u.number)return!1;var m=this.parse(t,h[4]);if(!m||m.mapped)return!1;var x=this.parse(t,h[5]);if(!x||x.mapped)return!1;if(m.value===x.value)return!1;if(u.color){var b=m.value,w=x.value,_=!(b[0]!==w[0]||b[1]!==w[1]||b[2]!==w[2]||b[3]!==w[3]&&(null!=b[3]&&1!==b[3]||null!=w[3]&&1!==w[3]));if(_)return!1}return{name:t,value:h,strValue:""+r,mapped:y,field:h[1],fieldMin:parseFloat(h[2]),fieldMax:parseFloat(h[3]),valueMin:m.value,valueMax:x.value,bypass:i,hasPie:c}}}if(u.number){var E,S="px";if(u.units&&(E=u.units),u.implicitUnits&&(S=u.implicitUnits),!u.unitless)if(l){var D="px|em"+(u.allowPercent?"|\\%":"");E&&(D=E);var k=r.match("^("+e.util.regex.number+")("+D+")?$");k&&(r=k[1],E=k[2]||S)}else(!E||u.implicitUnits)&&(E=S);if(r=parseFloat(r),isNaN(r)&&void 0===u.enums)return null;if(isNaN(r)&&void 0!==u.enums){r=o;for(var P=0;P<u.enums.length;P++){var C=u.enums[P];if(C===r)return{name:t,value:r,strValue:""+r,bypass:i}}return null}if(u.integer&&!e.is.integer(r))return null;if(void 0!==u.min&&r<u.min||void 0!==u.max&&r>u.max)return null;var T={name:t,value:r,strValue:""+r+(E?E:""),units:E,bypass:i,hasPie:c&&null!=r&&0!==r&&""!==r};return u.unitless||"px"!==E&&"em"!==E||(T.pxValue="px"!==E&&E?this.getEmSizeInPixels()*r:r),("ms"===E||"s"===E)&&(T.msValue="ms"===E?r:1e3*r),T}if(u.propList){var M=[],B=""+r;if("none"===B);else{for(var N=B.split(","),P=0;P<N.length;P++){var I=e.util.trim(N[P]);e.style.properties[I]&&M.push(I)}if(0===M.length)return null}return{name:t,value:M,strValue:0===M.length?"none":M.join(", "),bypass:i}}if(u.color){var O=e.util.color2tuple(r);return O?{name:t,value:O,strValue:""+r,bypass:i}:null}if(u.enums){for(var P=0;P<u.enums.length;P++){var C=u.enums[P];if(C===r)return{name:t,value:r,strValue:""+r,bypass:i}}return null}if(u.regex){var z=new RegExp(u.regex),L=z.exec(r);return L?{name:t,value:L,strValue:""+r,bypass:i}:null}return u.string?{name:t,value:r,strValue:""+r,bypass:i}:null},e.styfn.selector=function(t){var r="core"===t?null:new e.Selector(t),i=this.length++;return this[i]={selector:r,properties:[],mappedProperties:[],index:i},this},e.styfn.css=function(){var t=arguments;switch(t.length){case 1:for(var r=t[0],i=0;i<e.style.properties.length;i++){var n=e.style.properties[i],a=r[n.name];void 0===a&&(a=r[e.util.dash2camel(n.name)]),void 0!==a&&this.cssRule(n.name,a)}break;case 2:this.cssRule(t[0],t[1])}return this},e.styfn.style=e.styfn.css,e.styfn.cssRule=function(e,t){var r=this.parse(e,t);if(r){var i=this.length-1;this[i].properties.push(r),this[i].properties[r.name]=r,r.hasPie&&(this._private.hasPie=!0),r.mapped&&this[i].mappedProperties.push(r);var n=!this[i].selector;n&&(this._private.coreStyle[r.name]=r)}return this}}(cytoscape),function(e){"use strict";e.styfn.apply=function(e){var t=this;t._private.newStyle&&(this._private.contextStyles={},this._private.propDiffs={});for(var r=0;r<e.length;r++){var i=e[r],n=t.getContextMeta(i),a=t.getContextStyle(n),o=t.applyContextStyle(n,a,i);t.updateTransitions(i,o.diffProps),t.updateStyleHints(i)}t._private.newStyle=!1},e.styfn.getPropertiesDiff=function(e,t){var r=this,i=r._private.propDiffs=r._private.propDiffs||{},n=e+"-"+t,a=i[n];if(a)return a;for(var o=[],s={},l=0;l<r.length;l++){var u=r[l],c="t"===e[l],d="t"===t[l],h=c!==d,p=u.mappedProperties.length>0;if(h||p){var v;h&&p?v=u.properties:h?v=u.properties:p&&(v=u.mappedProperties);for(var f=0;f<v.length;f++){for(var g=v[f],y=g.name,m=!1,x=l+1;x<r.length;x++){var b=r[x],w="t"===t[x];if(w&&(m=null!=b.properties[g.name]))break}s[y]||m||(s[y]=!0,o.push(y))}}}return i[n]=o,o},e.styfn.getContextMeta=function(e){var t,r=this,i="",n=e._private.styleCxtKey||"";r._private.newStyle&&(n="");for(var a=0;a<r.length;a++){var o=r[a],s=o.selector&&o.selector.matches(e);i+=s?"t":"f"}return t=r.getPropertiesDiff(n,i),e._private.styleCxtKey=i,{key:i,diffPropNames:t}},e.styfn.getContextStyle=function(e){var t=e.key,r=this,i=this._private.contextStyles=this._private.contextStyles||{};if(i[t])return i[t];for(var n={_private:{key:t}},a=0;a<r.length;a++){var o=r[a],s="t"===t[a];if(s)for(var l=0;l<o.properties.length;l++){var u=o.properties[l],c=n[u.name]=u;c.context=o}}return i[t]=n,n},e.styfn.applyContextStyle=function(e,t,r){for(var i=this,n=e.diffPropNames,a={},o=0;o<n.length;o++){var s=n[o],l=t[s],u=r._private.style[s];if(l&&u!==l){var c=a[s]={prev:u};i.applyParsedProperty(r,l),c.next=r._private.style[s],c.next&&c.next.bypass&&(c.next=c.next.bypassed)}}return{diffProps:a}},e.styfn.updateStyleHints=function(t){var r=t._private,i=this,n=r.style,a=!1;if("nodes"===r.group&&i._private.hasPie)for(var o=1;o<=e.style.pieBackgroundN;o++){var s=r.style["pie-"+o+"-background-size"].value;if(s>0){a=!0;break}}r.hasPie=a;var l=n["text-transform"].strValue,u=n.content.strValue,c=n["font-style"].strValue,s=n["font-size"].pxValue+"px",d=n["font-family"].strValue,h=n["font-weight"].strValue,p=n["text-valign"].strValue,v=n["text-valign"].strValue,f=n["text-outline-width"].pxValue,g=n["text-wrap"].strValue,y=n["text-max-width"].pxValue;r.labelKey=c+"$"+s+"$"+d+"$"+h+"$"+u+"$"+l+"$"+p+"$"+v+"$"+f+"$"+g+"$"+y,r.fontKey=c+"$"+h+"$"+s+"$"+d;var m=n.width.pxValue,x=n.height.pxValue,b=n["border-width"].pxValue;if(r.boundingBoxKey=m+"$"+x+"$"+b,"edges"===t._private.group){var w=n["control-point-step-size"].pxValue,_=n["control-point-distance"]?n["control-point-distance"].pxValue:void 0,E=n["control-point-weight"].value,S=n["curve-style"].strValue;r.boundingBoxKey+="$"+w+"$"+_+"$"+E+"$"+S}r.styleKey=Date.now()},e.styfn.applyParsedProperty=function(t,r){var i,n,a=r,o=t._private.style,s=e.style.types,l=e.style.properties[a.name].type,u=a.bypass,c=o[a.name],d=c&&c.bypass,h=t._private;if(("height"===r.name||"width"===r.name)&&t.isNode()){if("auto"===r.value&&!t.isParent())return!1;"auto"!==r.value&&t.isParent()&&(a=r=this.parse(r.name,"auto",u))}if(u&&a.deleteBypass){var p=o[a.name];return p?p.bypass&&p.bypassed?(o[a.name]=p.bypassed,!0):!1:!0}var v=function(){e.util.error("Do not assign mappings to elements without corresponding data (e.g. ele `"+t.id()+"` for property `"+a.name+"` with data field `"+a.field+"`); try a `["+a.field+"]` selector to limit scope to elements with `"+a.field+"` defined")};switch(a.mapped){case s.mapData:case s.mapLayoutData:case s.mapScratch:var i,f=a.mapped===s.mapLayoutData,g=a.mapped===s.mapScratch,y=a.field.split(".");i=g||f?h.scratch:h.data;for(var m=0;m<y.length&&i;m++){var x=y[m];i=i[x]}var b;if(b=e.is.number(i)?(i-a.fieldMin)/(a.fieldMax-a.fieldMin):0,0>b?b=0:b>1&&(b=1),l.color){var w=a.valueMin[0],_=a.valueMax[0],E=a.valueMin[1],S=a.valueMax[1],D=a.valueMin[2],k=a.valueMax[2],P=null==a.valueMin[3]?1:a.valueMin[3],C=null==a.valueMax[3]?1:a.valueMax[3],T=[Math.round(w+(_-w)*b),Math.round(E+(S-E)*b),Math.round(D+(k-D)*b),Math.round(P+(C-P)*b)];n={bypass:a.bypass,name:a.name,value:T,strValue:"rgb("+T[0]+", "+T[1]+", "+T[2]+")"}}else{if(!l.number)return!1;var M=a.valueMin+(a.valueMax-a.valueMin)*b;n=this.parse(a.name,M,a.bypass,!0)}n||(n=this.parse(a.name,c.strValue,a.bypass,!0)),n||v(),n.mapping=a,a=n;break;case s.data:case s.layoutData:case s.scratch:var i,f=a.mapped===s.layoutData,g=a.mapped===s.scratch,y=a.field.split(".");if(i=g||f?h.scratch:h.data)for(var m=0;m<y.length;m++){var x=y[m];i=i[x]}if(n=this.parse(a.name,i,a.bypass,!0),!n){var B=c?c.strValue:"";n=this.parse(a.name,B,a.bypass,!0)}n||v(),n.mapping=a,a=n;break;case s.fn:var N=a.value,I=N(t);n=this.parse(a.name,I,a.bypass,!0),n.mapping=a,a=n;

break;case void 0:break;default:return!1}return u?(a.bypassed=d?c.bypassed:c,o[a.name]=a):d?c.bypassed=a:o[a.name]=a,!0},e.styfn.update=function(){var e=this._private.cy,t=e.elements();t.updateStyle()},e.styfn.updateMappers=function(t){for(var r=0;r<t.length;r++){for(var i=t[r],n=i._private.style,a=0;a<e.style.properties.length;a++){var o=e.style.properties[a],s=n[o.name];if(s&&s.mapping){var l=s.mapping;this.applyParsedProperty(i,l)}}this.updateStyleHints(i)}},e.styfn.updateTransitions=function(t,r,i){var n=this,a=t._private.style,o=a["transition-property"].value,s=a["transition-duration"].msValue,l=a["transition-delay"].msValue,u={};if(o.length>0&&s>0){for(var c=!1,d=0;d<o.length;d++){var h=o[d],p=a[h],v=r[h];if(v){var f=v.prev,g=f,y=null!=v.next?v.next:p,m=!1;g&&(e.is.number(g.pxValue)&&e.is.number(y.pxValue)?m=g.pxValue!==y.pxValue:e.is.number(g.value)&&e.is.number(y.value)?m=g.value!==y.value:e.is.array(g.value)&&e.is.array(y.value)&&(m=g.value[0]!==y.value[0]||g.value[1]!==y.value[1]||g.value[2]!==y.value[2]),m&&(u[h]=y.strValue,this.applyBypass(t,h,g.strValue),c=!0))}}if(!c)return;t._private.transitioning=!0,t.stop(),l>0&&t.delay(l),t.animate({css:u},{duration:s,queue:!1,complete:function(){i||n.removeBypasses(t,o),t._private.transitioning=!1}})}else t._private.transitioning&&(t.stop(),this.removeBypasses(t,o),t._private.transitioning=!1)}}(cytoscape),function(e){"use strict";e.styfn.applyBypass=function(t,r,i,n){var a=[],o=!0;if("*"===r||"**"===r){if(void 0!==i)for(var s=0;s<e.style.properties.length;s++){var l=e.style.properties[s],r=l.name,u=this.parse(r,i,!0);u&&a.push(u)}}else if(e.is.string(r)){var u=this.parse(r,i,!0);u&&a.push(u)}else{if(!e.is.plainObject(r))return!1;var c=r;n=i;for(var s=0;s<e.style.properties.length;s++){var l=e.style.properties[s],r=l.name,i=c[r];if(void 0===i&&(i=c[e.util.dash2camel(r)]),void 0!==i){var u=this.parse(r,i,!0);u&&a.push(u)}}}if(0===a.length)return!1;for(var d=!1,s=0;s<t.length;s++){for(var h,p=t[s],v=p._private.style,f={},g=0;g<a.length;g++){var l=a[g];if(n){var y=v[l.name];h=f[l.name]={prev:y}}d=this.applyParsedProperty(p,l)||d,n&&(h.next=v[l.name])}n&&this.updateTransitions(p,f,o)}return d},e.styfn.overrideBypass=function(t,r,i){for(var n=0;n<t.length;n++){var a=t[n],o=a._private.style[e.util.camel2dash(r)];o.bypass?(o.value=i,o.pxValue=i):this.applyBypass(a,r,i)}},e.styfn.removeAllBypasses=function(t,r){for(var i=!0,n=0;n<t.length;n++){for(var a=t[n],o={},s=a._private.style,l=0;l<e.style.properties.length;l++){var u=e.style.properties[l],c=u.name,d="",h=this.parse(c,d,!0),p=s[u.name],v=o[u.name]={prev:p};this.applyParsedProperty(a,h),v.next=s[u.name]}r&&this.updateTransitions(a,o,i)}},e.styfn.removeBypasses=function(t,r,i){for(var n=!0,a=0;a<t.length;a++){for(var o=t[a],s={},l=o._private.style,u=0;u<r.length;u++){var c=r[u],d=e.style.properties[c],h="",p=this.parse(c,h,!0),v=l[d.name],f=s[d.name]={prev:v};this.applyParsedProperty(o,p),f.next=l[d.name]}i&&this.updateTransitions(o,s,n)}}}(cytoscape),function(e,t){"use strict";e.styfn.getEmSizeInPixels=function(){var e=this._private.cy,r=e.container();if(t&&r&&t.getComputedStyle){var i=t.getComputedStyle(r).getPropertyValue("font-size"),n=parseFloat(i);return n}return 1},e.styfn.containerCss=function(e){var r=this._private.cy,i=r.container();return t&&i&&t.getComputedStyle?t.getComputedStyle(i).getPropertyValue(e):void 0},e.styfn.containerProperty=function(e){var t=this.containerCss(e),r=this.parse(e,t);return r},e.styfn.containerPropertyAsString=function(e){var t=this.containerProperty(e);return t?t.strValue:void 0}}(cytoscape,"undefined"==typeof window?null:window),function(e){"use strict";e.styfn.getRenderedStyle=function(t){var t=t[0];if(t){for(var r={},i=t._private.style,n=this._private.cy,a=n.zoom(),o=0;o<e.style.properties.length;o++){var s=e.style.properties[o],l=i[s.name];if(l){var u=l.unitless?l.strValue:l.pxValue*a+"px";r[s.name]=u,r[e.util.dash2camel(s.name)]=u}}return r}},e.styfn.getRawStyle=function(t){var t=t[0];if(t){for(var r={},i=t._private.style,n=0;n<e.style.properties.length;n++){var a=e.style.properties[n],o=i[a.name];o&&(r[a.name]=o.strValue,r[e.util.dash2camel(a.name)]=o.strValue)}return r}},e.styfn.getValueStyle=function(t,r){r=r||{};var i,n=r.array?[]:{};if(i=e.is.element(t)?t._private.style:t)for(var a=0;a<e.style.properties.length;a++){var o=e.style.properties[a],s=i[o.name]||i[e.util.dash2camel(o.name)];void 0===s||e.is.plainObject(s)||(s=this.parse(o.name,s)),s&&(r.array?n.push(s):(n[o.name]=s,n[e.util.dash2camel(o.name)]=s))}return n}}(cytoscape),function(e){"use strict";e.style.applyFromJson=function(e,t){for(var r=0;r<t.length;r++){var i=t[r],n=i.selector,a=i.style||i.css;e.selector(n);for(var o in a){var s=a[o];e.css(o,s)}}return e},e.style.fromJson=function(t,r){var i=new e.Style(t);return e.style.applyFromJson(i,r),i},e.styfn.fromJson=function(t){var r=this;return r.resetToDefault(),e.style.applyFromJson(r,t),r},e.styfn.json=function(){for(var e=[],t=this.defaultLength;t<this.length;t++){for(var r=this[t],i=r.selector,n=r.properties,a={},o=0;o<n.length;o++){var s=n[o];a[s.name]=s.strValue}e.push({selector:i?i.toString():"core",style:a})}return e}}(cytoscape),function(e){"use strict";e.style.applyFromString=function(t,r){function i(){l=l.length>a.length?l.substr(a.length):""}function n(){o=o.length>s.length?o.substr(s.length):""}var a,o,s,l=""+r;for(l=l.replace(/[\/][*](\s|.)+?[*][\/]/g,"");;){var u=l.match(/^\s*$/);if(u)break;var c=l.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);if(!c){e.util.error("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: "+l);break}a=c[0];var d=c[1];if("core"!==d){var h=new e.Selector(d);if(h._private.invalid){e.util.error("Skipping parsing of block: Invalid selector found in string stylesheet: "+d),i();continue}}var p=c[2],v=!1;o=p;for(var f=[];;){var u=o.match(/^\s*$/);if(u)break;var g=o.match(/^\s*(.+?)\s*:\s*(.+?)\s*;/);if(!g){e.util.error("Skipping parsing of block: Invalid formatting of style property and value definitions found in:"+p),v=!0;break}s=g[0];var y=g[1],m=g[2],x=e.style.properties[y];if(x){var b=t.parse(y,m);b?(f.push({name:y,val:m}),n()):(e.util.error("Skipping property: Invalid property definition in: "+s),n())}else e.util.error("Skipping property: Invalid property name in: "+s),n()}if(v){i();break}t.selector(d);for(var w=0;w<f.length;w++){var x=f[w];t.css(x.name,x.val)}i()}return t},e.style.fromString=function(t,r){var i=new e.Style(t);return e.style.applyFromString(i,r),i},e.styfn.fromString=function(t){var r=this;return r.resetToDefault(),e.style.applyFromString(r,t),r}}(cytoscape),function(e){"use strict";e.stylesheet=e.Stylesheet=function(){return this instanceof e.Stylesheet?void(this.length=0):new e.Stylesheet},e.sheetfn=e.Stylesheet.prototype,e.sheetfn.selector=function(e){var t=this.length++;return this[t]={selector:e,properties:[]},this},e.sheetfn.css=function(t,r){var i=this.length-1;if(e.is.string(t))this[i].properties.push({name:t,value:r});else if(e.is.plainObject(t))for(var n=t,a=0;a<e.style.properties.length;a++){var o=e.style.properties[a],s=n[o.name];if(void 0===s&&(s=n[e.util.dash2camel(o.name)]),void 0!==s){var t=o.name,r=s;this[i].properties.push({name:t,value:r})}}return this},e.sheetfn.style=e.sheetfn.css,e.sheetfn.generateStyle=function(t){for(var r=new e.Style(t),i=0;i<this.length;i++){var n=this[i],a=n.selector,o=n.properties;r.selector(a);for(var s=0;s<o.length;s++){var l=o[s];r.css(l.name,l.value)}}return r}}(cytoscape),function(e,t){"use strict";e.Thread=function(t){return this instanceof e.Thread?(this._private={requires:[],files:[],queue:null,pass:[]},void(t&&this.run(t))):new e.Thread(t)},e.thread=e.Thread,e.thdfn=e.Thread.prototype,e.fn.thread=function(t,r){for(var i in t){var n=t[i];e.Thread.prototype[i]=n}};var r=function(t){var r=e.is.fn(t)?t.toString():'JSON.parse("'+JSON.stringify(t)+'")';return r},i=function(t){var n,o;e.is.object(t)&&t.fn?(n=a(t.fn,t.name),o=t.name,t=t.fn):e.is.fn(t)?(n=t.toString(),o=t.name):e.is.string(t)?n=t:e.is.object(t)&&(n=t.proto?"":t.name+" = {};",o=t.name,t=t.obj),n+="\n";var s=function(e,t){if(e.prototype){var r=!1;for(var a in e.prototype){r=!0;break}r&&(n+=i({name:t,obj:e,proto:!0},e))}};if(t.prototype&&null!=o)for(var l in t.prototype){var u="",c=t.prototype[l],d=r(c),h=o+".prototype."+l;u+=h+" = "+d+";\n",u&&(n+=u),s(c,h)}if(!e.is.string(t))for(var l in t){var p="";if(t.hasOwnProperty(l)){var c=t[l],d=r(c),h=o+'["'+l+'"]';p+=h+" = "+d+";\n"}p&&(n+=p),s(c,h)}return n},n=function(t){return e.is.string(t)&&t.match(/\.js$/)};e.fn.thread({require:function(t,r){return n(t)?(this._private.files.push(t),this):(r&&(e.is.fn(t)?(r=r||t.name,t={name:r,fn:t}):t={name:r,obj:t}),this._private.requires.push(t),this)},pass:function(e){return this._private.pass.push(e),this},run:function(r,n){var a=this,o=this._private;if(n=n||o.pass.shift(),o.stopped)return void e.util.error("Attempted to run a stopped thread!  Start a new thread or do not stop the existing thread and reuse it.");if(o.running)return o.queue=o.queue.then(function(){return a.run(r,n)});var s=null!=t,l="undefined"!=typeof module;a.trigger("run");var u=new e.Promise(function(u,c){o.running=!0;var d=o.ran,h=e.is.string(r)?r:r.toString(),p="\n"+o.requires.map(function(e){return i(e)}).concat(o.files.map(function(e){if(s){var r=function(e){return e.match(/^\.\//)||e.match(/^\.\./)?t.location.origin+t.location.pathname+e:e.match(/^\//)?t.location.origin+"/"+e:e};return'importScripts("'+r(e)+'");'}return l?'eval( require("fs").readFileSync("'+e+'", { encoding: "utf8" }) );':void 0})).concat(["( function(){","var ret = ("+h+")("+JSON.stringify(n)+");","if( ret !== undefined ){ resolve(ret); }","} )()\n"]).join("\n");if(o.requires=[],o.files=[],s){var v,f;if(!d){var g=p+"";p=["function broadcast(m){ return message(m); };","function message(m){ postMessage(m); };","function listen(fn){",'  self.addEventListener("message", function(m){ ','    if( typeof m === "object" && (m.data.$$eval || m.data === "$$start") ){',"    } else { ","      fn( m.data );","    }","  });","};",'self.addEventListener("message", function(m){  if( m.data.$$eval ){ eval( m.data.$$eval ); }  });',"function resolve(v){ postMessage({ $$resolve: v }); };","function reject(v){ postMessage({ $$reject: v }); };"].join("\n"),p+=g,v=new Blob([p],{type:"application/javascript"}),f=t.URL.createObjectURL(v)}var y=o.webworker=o.webworker||new Worker(f);d&&y.postMessage({$$eval:p});var m;y.addEventListener("message",m=function(t){var r=e.is.object(t)&&e.is.object(t.data);r&&"$$resolve"in t.data?(y.removeEventListener("message",m),u(t.data.$$resolve)):r&&"$$reject"in t.data?(y.removeEventListener("message",m),c(t.data.$$reject)):a.trigger(new e.Event(t,{type:"message",message:t.data}))},!1),d||y.postMessage("$$start")}else if(l){var m,x=require("path"),b=require("child_process"),w=o.child=o.child||b.fork(x.join(__dirname,"thread-node-fork"));w.on("message",m=function(t){e.is.object(t)&&"$$resolve"in t?(w.removeListener("message",m),u(t.$$resolve)):e.is.object(t)&&"$$reject"in t?(w.removeListener("message",m),c(t.$$reject)):a.trigger(new e.Event({},{type:"message",message:t}))}),w.send({$$eval:p})}else e.error("Tried to create thread but no underlying tech found!")}).then(function(e){return o.running=!1,o.ran=!0,a.trigger("ran"),e});return null==o.queue&&(o.queue=u),u},message:function(e){var t=this._private;return t.webworker&&t.webworker.postMessage(e),t.child&&t.child.send(e),this},stop:function(){var e=this._private;return e.webworker&&e.webworker.terminate(),e.child&&e.child.kill(),e.stopped=!0,this.trigger("stop")},stopped:function(){return this._private.stopped}});var a=function(e,t){var r=e.toString();return r=r.replace(/function.*\(/,"function "+t+"(")},o=function(e){return e=e||{},function(t,r){var i=a(t,"_$_$_"+e.name);return this.require(i),this.run(["function( data ){","  var origResolve = resolve;","  var res = [];","  ","  resolve = function( val ){","    res.push( val );","  };","  ","  var ret = data."+e.name+"( _$_$_"+e.name+(arguments.length>1?", "+JSON.stringify(r):"")+" );","  ","  resolve = origResolve;","  resolve( res.length > 0 ? res : ret );","}"].join("\n"))}};e.fn.thread({reduce:o({name:"reduce"}),reduceRight:o({name:"reduceRight"}),map:o({name:"map"})});var s=e.thdfn;s.promise=s.run,s.terminate=s.halt=s.stop,s.include=s.require,e.worker=e.Worker=e.Thread,e.fn.thread({on:e.define.on(),one:e.define.on({unbindSelfOnTrigger:!0}),off:e.define.off(),trigger:e.define.trigger()}),e.define.eventAliasesOn(e.thdfn)}(cytoscape,"undefined"==typeof window?null:window),function(e,t){"use strict";e.Fabric=function(t){if(!(this instanceof e.Fabric))return new e.Fabric(t);this._private={pass:[]};var r=4;e.is.number(t),t="undefined"!=typeof navigator&&null!=navigator.hardwareConcurrency?navigator.hardwareConcurrency:"undefined"!=typeof module?require("os").cpus().length:r;for(var i=0;t>i;i++)this[i]=e.Thread();this.length=t},e.fabric=e.Fabric,e.fabfn=e.Fabric.prototype,e.fn.fabric=function(t,r){for(var i in t){var n=t[i];e.Fabric.prototype[i]=n}},e.fn.fabric({require:function(e,t){for(var r=0;r<this.length;r++){var i=this[r];i.require(e,t)}return this},random:function(){var e=Math.round((this.length-1)*Math.random()),t=this[e];return t},run:function(e){var t=this._private.pass.shift();return this.random().pass(t).run(e)},message:function(e){return this.random().message(e)},broadcast:function(e){for(var t=0;t<this.length;t++){var r=this[t];r.message(e)}return this},stop:function(){for(var e=0;e<this.length;e++){var t=this[e];t.stop()}return this},pass:function(t){var r=this._private.pass;return e.is.array(t)?r.push(t):e.util.error("Only arrays or collections may be used with fabric.pass()"),this},spreadSize:function(){var e=Math.ceil(this._private.pass[0].length/this.length);return e=Math.max(1,e)},spread:function(t){for(var r=this,i=r._private,n=r.spreadSize(),a=i.pass.shift().concat([]),o=[],s=0;s<this.length;s++){var l=this[s],u=a.splice(0,n),c=l.pass(u).run(t);o.push(c);var d=0===a.length;if(d)break}return e.Promise.all(o).then(function(e){for(var t=[],r=0,i=0;i<e.length;i++)for(var n=e[i],a=0;a<n.length;a++){var o=n[a];t[r++]=o}return t})},map:function(e){var t=this;return t.require(e,"_$_$_fabmap"),t.spread(function(e){var t=[],r=resolve;resolve=function(e){t.push(e)};for(var i=0;i<e.length;i++){var n=t.length,a=_$_$_fabmap(e[i]),o=n===t.length;o&&t.push(a)}return resolve=r,t})},filter:function(e){var t=this._private,r=t.pass[0];return this.map(e).then(function(e){for(var t=[],i=0;i<r.length;i++){var n=r[i],a=e[i];a&&t.push(n)}return t})},sort:function(e){var t=this,r=this._private.pass[0].length,i=this.spreadSize();return e=e||function(e,t){return t>e?-1:e>t?1:0},t.require(e,"_$_$_cmp"),t.spread(function(e){var t=e.sort(_$_$_cmp);resolve(t)}).then(function(t){for(var n=function(i,n,a){n=Math.min(n,r),a=Math.min(a,r);for(var o=i,s=n,l=[],u=o;a>u;u++){var c=t[i],d=t[n];s>i&&(n>=a||e(c,d)<=0)?(l.push(c),i++):(l.push(d),n++)}for(var u=0;u<l.length;u++){var h=o+u;t[h]=l[u]}},a=i;r>a;a*=2)for(var o=0;r>o;o+=2*a)n(o,o+a,o+2*a);return t})}});var r=function(e){return e=e||{},function(t,r){var i=this._private.pass.shift();return this.random().pass(i)[e.threadFn](t,r)}};e.fn.fabric({randomMap:r({threadFn:"map"}),reduce:r({threadFn:"reduce"}),reduceRight:r({threadFn:"reduceRight"})});var i=e.fabfn;i.promise=i.run,i.terminate=i.halt=i.stop,i.include=i.require,e.fn.fabric({on:e.define.on(),one:e.define.on({unbindSelfOnTrigger:!0}),off:e.define.off(),trigger:e.define.trigger()}),e.define.eventAliasesOn(e.fabfn)}(cytoscape,"undefined"==typeof window?null:window),function(e,t){"use strict";var r=e.is.touch(),i={},n=e.util.copy(i);e.defaults=function(t){i=e.util.extend({},n,t)},e.fn.core=function(t,r){for(var i in t){var n=t[i];e.Core.prototype[i]=n}},e.Core=function(n){if(!(this instanceof e.Core))return new e.Core(n);var a=this;n=e.util.extend({},i,n);var o=n.container,s=o?o._cyreg:null;if(s=s||{},s&&s.cy){if(o)for(;o.firstChild;)o.removeChild(o.firstChild);s.cy.notify({type:"destroy"}),s={}}var l=s.readies=s.readies||[];o&&(o._cyreg=s),s.cy=a;var u=void 0!==t&&void 0!==o&&!n.headless,c=n;c.layout=e.util.extend({name:u?"grid":"null"},c.layout),c.renderer=e.util.extend({name:u?"canvas":"null"},c.renderer);var d=function(e,t,r){return void 0!==t?t:void 0!==r?r:e},h=this._private={container:c.container,ready:!1,initrender:!1,options:c,elements:[],id2index:{},listeners:[],onRenders:[],aniEles:e.Collection(this),scratch:{},layout:null,renderer:null,notificationsEnabled:!0,minZoom:1e-50,maxZoom:1e50,zoomingEnabled:d(!0,c.zoomingEnabled),userZoomingEnabled:d(!0,c.userZoomingEnabled),panningEnabled:d(!0,c.panningEnabled),userPanningEnabled:d(!0,c.userPanningEnabled),boxSelectionEnabled:d(!1,c.boxSelectionEnabled),autolock:d(!1,c.autolock,c.autolockNodes),autoungrabify:d(!1,c.autoungrabify,c.autoungrabifyNodes),autounselectify:d(!1,c.autounselectify),styleEnabled:void 0===c.styleEnabled?u:c.styleEnabled,zoom:e.is.number(c.zoom)?c.zoom:1,pan:{x:e.is.plainObject(c.pan)&&e.is.number(c.pan.x)?c.pan.x:0,y:e.is.plainObject(c.pan)&&e.is.number(c.pan.y)?c.pan.y:0},animation:{current:[],queue:[]},hasCompoundNodes:!1,deferredExecQueue:[]},p=c.selectionType;h.selectionType=void 0===p||"additive"!==p&&"single"!==p?r?"additive":"single":p,e.is.number(c.minZoom)&&e.is.number(c.maxZoom)&&c.minZoom<c.maxZoom?(h.minZoom=c.minZoom,h.maxZoom=c.maxZoom):e.is.number(c.minZoom)&&void 0===c.maxZoom?h.minZoom=c.minZoom:e.is.number(c.maxZoom)&&void 0===c.minZoom&&(h.maxZoom=c.maxZoom);var v=function(t){for(var r=!1,i=0;i<f.length;i++){var n=f[i];if(e.is.promise(n)){r=!0;break}}return r?e.Promise.all(f).then(t):void t(f)},f=[c.style,c.elements];v(function(t){var r=t[0],i=t[1];h.styleEnabled&&a.setStyle(r),a.initRenderer(e.util.extend({hideEdgesOnViewport:c.hideEdgesOnViewport,hideLabelsOnViewport:c.hideLabelsOnViewport,textureOnViewport:c.textureOnViewport,wheelSensitivity:e.is.number(c.wheelSensitivity)&&c.wheelSensitivity>0?c.wheelSensitivity:1,motionBlur:void 0===c.motionBlur?!0:c.motionBlur,motionBlurOpacity:void 0===c.motionBlurOpacity?.05:c.motionBlurOpacity,pixelRatio:e.is.number(c.pixelRatio)&&c.pixelRatio>0?c.pixelRatio:"auto"===c.pixelRatio?void 0:1,tapThreshold:d(e.is.touch()?8:4,e.is.touch()?c.touchTapThreshold:c.desktopTapThreshold)},c.renderer)),c.initrender&&(a.on("initrender",c.initrender),a.on("initrender",function(){a._private.initrender=!0})),a.load(i,function(){a.startAnimationLoop(),a._private.ready=!0,e.is.fn(c.ready)&&a.on("ready",c.ready);for(var t=0;t<l.length;t++){var r=l[t];a.on("ready",r)}s&&(s.readies=[]),a.trigger("ready")},c.done)})},e.corefn=e.Core.prototype,e.fn.core({isReady:function(){return this._private.ready},ready:function(e){this.isReady()?this.trigger("ready",[],e):this.on("ready",e)},initrender:function(){return this._private.initrender},destroy:function(){this.notify({type:"destroy"});var e=this.container(),t=e.parentNode;return t&&t.removeChild(e),this},getElementById:function(t){var r=this._private.id2index[t];return void 0!==r?this._private.elements[r]:new e.Collection(this)},selectionType:function(){return this._private.selectionType},hasCompoundNodes:function(){return this._private.hasCompoundNodes},styleEnabled:function(){return this._private.styleEnabled},addToPool:function(e){for(var t=this._private.elements,r=this._private.id2index,i=0;i<e.length;i++){var n=e[i],a=n._private.data.id,o=r[a],s=void 0!==o;s||(o=t.length,t.push(n),r[a]=o,n._private.index=o)}return this},removeFromPool:function(e){for(var t=this._private.elements,r=this._private.id2index,i=0;i<e.length;i++){var n=e[i],a=n._private.data.id,o=r[a],s=void 0!==o;if(s){this._private.id2index[a]=void 0,t.splice(o,1);for(var l=o;l<t.length;l++){var u=t[l]._private.data.id;r[u]--,t[l]._private.index--}}}},container:function(){return this._private.container},options:function(){return e.util.copy(this._private.options)},json:function(e){var t={},r=this;return t.elements={},r.elements().each(function(e,r){var i=r.group();t.elements[i]||(t.elements[i]=[]),t.elements[i].push(r.json())}),this._private.styleEnabled&&(t.style=r.style().json()),t.zoomingEnabled=r._private.zoomingEnabled,t.userZoomingEnabled=r._private.userZoomingEnabled,t.zoom=r._private.zoom,t.minZoom=r._private.minZoom,t.maxZoom=r._private.maxZoom,t.panningEnabled=r._private.panningEnabled,t.userPanningEnabled=r._private.userPanningEnabled,t.pan=r._private.pan,t.boxSelectionEnabled=r._private.boxSelectionEnabled,t.layout=r._private.options.layout,t.renderer=r._private.options.renderer,t.hideEdgesOnViewport=r._private.options.hideEdgesOnViewport,t.hideLabelsOnViewport=r._private.options.hideLabelsOnViewport,t.textureOnViewport=r._private.options.textureOnViewport,t.wheelSensitivity=r._private.options.wheelSensitivity,t.motionBlur=r._private.options.motionBlur,t},defer:function(e){var t=this,r=t._private,i=r.deferredExecQueue;i.push(e),r.deferredTimeout||(r.deferredTimeout=setTimeout(function(){for(;i.length>0;)i.shift()();r.deferredTimeout=null},0))}})}(cytoscape,"undefined"==typeof window?null:window),function(e,t){"use strict";function r(e){var t=!document||"interactive"!==document.readyState&&"complete"!==document.readyState?r:e;setTimeout(t,9,e)}e.fn.core({add:function(t){var r,i=this;if(e.is.elementOrCollection(t)){var n=t;if(n._private.cy===i)r=n.restore();else{for(var a=[],o=0;o<n.length;o++){var s=n[o];a.push(s.json())}r=new e.Collection(i,a)}}else if(e.is.array(t)){var a=t;r=new e.Collection(i,a)}else if(e.is.plainObject(t)&&(e.is.array(t.nodes)||e.is.array(t.edges))){for(var l=t,a=[],u=["nodes","edges"],o=0,c=u.length;c>o;o++){var d=u[o],h=l[d];if(e.is.array(h))for(var p=0,v=h.length;v>p;p++){var f=h[p];f.group=d,a.push(f)}}r=new e.Collection(i,a)}else{var f=t;r=new e.Element(i,f).collection()}return r},remove:function(t){if(e.is.elementOrCollection(t))t=t;else if(e.is.string(t)){var r=t;t=this.$(r)}return t.remove()},load:function(i,n,a){function o(){s.one("layoutready",function(e){s.notifications(!0),s.trigger(e),s.notify({type:"load",collection:s.elements()}),s.one("load",n),s.trigger("load")}).one("layoutstop",function(){s.one("done",a),s.trigger("done")});var t=e.util.extend({},s._private.options.layout);t.eles=s.$(),s.layout(t)}var s=this;s.notifications(!1);var l=s.elements();return l.length>0&&l.remove(),null!=i&&(e.is.plainObject(i)||e.is.array(i))&&s.add(i),t?r(o):o(),this}})}(cytoscape,"undefined"==typeof window?null:window),function(e,t){"use strict";e.fn.core({animated:e.define.animated(),clearQueue:e.define.clearQueue(),delay:e.define.delay(),animate:e.define.animate(),stop:e.define.stop(),addToAnimationPool:function(e){var t=this;t.styleEnabled()&&t._private.aniEles.merge(e)},startAnimationLoop:function(){function r(){e.util.requestAnimationFrame(function(e){i(e),r()})}function i(t){function r(r,i){var s=r._private.animation.current,l=r._private.animation.queue,u=!1;if(0===s.length){var c=l.length>0?l.shift():null;c&&(c.callTime=t,s.push(c))}for(var d=[],h=s.length-1;h>=0;h--){var p=s[h];p.started||n(r,p),a(r,p,t,i),p.done&&(d.push(p),s.splice(h,1)),u=!0}for(var h=0;h<d.length;h++){var p=d[h],v=p.params.complete;e.is.fn(v)&&v.apply(r,[t])}return i||0!==s.length||0!==l.length||o.push(r),u}t=+new Date;for(var i=l._private.aniEles,o=[],s=0;s<i.length;s++){var u=i[s];r(u)}var c=r(l,!0);if(i.length>0||c){var d;if(i.length>0){var h=i.updateCompoundBounds();d=h.length>0?i.add(h):i}l.notify({type:"draw",collection:d})}i.unmerge(o)}function n(t,r){var i=e.is.core(t),n=!i,a=t,o=l._private.style;if(n)var s=a._private.position,u={x:s.x,y:s.y},c=o.getValueStyle(a);if(i)var d=l._private.pan,h={x:d.x,y:d.y},p=l._private.zoom;r.started=!0,r.startTime=Date.now(),r.startPosition=u,r.startStyle=c,r.startPan=h,r.startZoom=p}function a(t,r,i,n){var a,u=l._private.style,c=r.properties,d=r.params,h=r.startTime,p=!n;if(a=0===r.duration?1:Math.min(1,(i-h)/r.duration),0>a?a=0:a>1&&(a=1),null==c.delay){var v=r.startPosition,f=c.position,g=t._private.position;f&&p&&(o(v.x,f.x)&&(g.x=s(v.x,f.x,a)),o(v.y,f.y)&&(g.y=s(v.y,f.y,a)));var y=r.startPan,m=c.pan,x=t._private.pan,b=null!=m&&n;b&&(o(y.x,m.x)&&(x.x=s(y.x,m.x,a)),o(y.y,m.y)&&(x.y=s(y.y,m.y,a)),t.trigger("pan"));var w=r.startZoom,_=c.zoom,E=null!=_&&n;E&&(o(w,_)&&(t._private.zoom=s(w,_,a)),t.trigger("zoom")),(b||E)&&t.trigger("viewport");var S=c.style||c.css;if(S&&p)for(var D=0;D<S.length;D++){var k=S[D].name,P=S[D],C=P,T=r.startStyle[k],M=s(T,C,a);u.overrideBypass(t,k,M)}}return e.is.fn(d.step)&&d.step.apply(t,[i]),a>=1&&(r.done=!0),a}function o(t,r){return null==t||null==r?!1:e.is.number(t)&&e.is.number(r)?!0:t&&r?!0:!1}function s(t,r,i){0>i?i=0:i>1&&(i=1);var n,a;if(n=null!=t.pxValue||null!=t.value?null!=t.pxValue?t.pxValue:t.value:t,a=null!=r.pxValue||null!=r.value?null!=r.pxValue?r.pxValue:r.value:r,e.is.number(n)&&e.is.number(a))return n+(a-n)*i;if(e.is.number(n[0])&&e.is.number(a[0])){var o=n,s=a,l=function(e,t){var r=t-e,n=e;return Math.round(i*r+n)},u=l(o[0],s[0]),c=l(o[1],s[1]),d=l(o[2],s[2]);return[u,c,d]}return void 0}var l=this;l.styleEnabled()&&t&&r()}})}(cytoscape,"undefined"==typeof window?null:window),function(e){"use strict";e.fn.core({data:e.define.data({field:"data",bindingEvent:"data",allowBinding:!0,allowSetting:!0,settingEvent:"data",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0}),removeData:e.define.removeData({field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!0}),scratch:e.define.data({field:"scratch",allowBinding:!1,allowSetting:!0,settingTriggersEvent:!1,allowGetting:!0}),removeScratch:e.define.removeData({field:"scratch",triggerEvent:!1})})}(cytoscape),function(e){"use strict";e.fn.core({on:e.define.on(),one:e.define.on({unbindSelfOnTrigger:!0}),once:e.define.on({unbindAllBindersOnTrigger:!0}),off:e.define.off(),trigger:e.define.trigger()}),e.define.eventAliasesOn(e.corefn)}(cytoscape),function(e){"use strict";e.fn.core({png:function(e){var t=this._private.renderer;return e=e||{},t.png(e)},jpg:function(e){var t=this._private.renderer;return e=e||{},e.bg=e.bg||"#fff",t.jpg(e)}}),e.corefn.jpeg=e.corefn.jpg}(cytoscape),function(e){"use strict";e.fn.core({layout:function(t){var r;return null==t&&(t=e.util.extend({},this._private.options.layout),t.eles=this.$()),r=this.initLayout(t),r.run(),this},makeLayout:function(e){return this.initLayout(e)},initLayout:function(t){if(null==t)return void e.util.error("Layout options must be specified to make a layout");if(null==t.name)return void e.util.error("A `name` must be specified to make a layout");var r=t.name,i=e.extension("layout",r);if(null==i)return void e.util.error("Can not apply layout: No such layout `"+r+"` found; did you include its JS file?");t.eles=null!=t.eles?t.eles:this.$(),e.is.string(t.eles)&&(t.eles=this.$(t.eles));var n=new i(e.util.extend({},t,{cy:this}));return e.is.plainObject(n._private)||(n._private={}),n._private.cy=this,n._private.listeners=[],n}}),e.corefn.createLayout=e.corefn.makeLayout}(cytoscape),function(e){"use strict";e.fn.core({notify:function(e){if(this._private.batchingNotify){var t=this._private.batchNotifyEles,r=this._private.batchNotifyTypes;if(e.collection)for(var i=0;i<e.collection.length;i++){var n=e.collection[i];t.ids[n._private.id]||t.push(n)}return void(r.ids[e.type]||r.push(e.type))}if(this._private.notificationsEnabled){var a=this.renderer();a.notify(e)}},notifications:function(e){var t=this._private;return void 0===e?t.notificationsEnabled:void(t.notificationsEnabled=e?!0:!1)},noNotifications:function(e){this.notifications(!1),e(),this.notifications(!0)},startBatch:function(){var e=this._private;return e.batchingStyle=e.batchingNotify=!0,e.batchStyleEles=[],e.batchNotifyEles=[],e.batchNotifyTypes=[],e.batchStyleEles.ids={},e.batchNotifyEles.ids={},e.batchNotifyTypes.ids={},this},endBatch:function(){var t=this._private;return t.batchingStyle=!1,new e.Collection(this,t.batchStyleEles).updateStyle(),t.batchingNotify=!1,this.notify({type:t.batchNotifyTypes,collection:t.batchNotifyEles}),this},batch:function(e){return this.startBatch(),e(),this.endBatch(),this},batchData:function(e){var t=this;return this.batch(function(){for(var r in e){var i=e[r],n=t.getElementById(r);n.data(i)}})}})}(cytoscape),function(e){"use strict";e.fn.core({renderTo:function(e,t,r,i){var n=this._private.renderer;return n.renderTo(e,t,r,i),this},renderer:function(){return this._private.renderer},forceRender:function(){return this.notify({type:"draw"}),this},resize:function(){return this.notify({type:"resize"}),this.trigger("resize"),this},initRenderer:function(t){var r=this,i=e.extension("renderer",t.name);return null==i?void e.util.error("Can not initialise: No such renderer `%s` found; did you include its JS file?",t.name):void(this._private.renderer=new i(e.util.extend({},t,{cy:r,style:r._private.style})))},triggerOnRender:function(){for(var e=this._private.onRenders,t=0;t<e.length;t++){var r=e[t];r()}return this},onRender:function(e){return this._private.onRenders.push(e),this},offRender:function(e){var t=this._private.onRenders;if(null==e)return this._private.onRenders=[],this;for(var r=0;r<t.length;r++){var i=t[r];if(e===i){t.splice(r,1);break}}return this}})}(cytoscape),function(e){"use strict";e.fn.core({collection:function(t){return e.is.string(t)?this.$(t):e.is.elementOrCollection(t)?t.collection():e.is.array(t)?new e.Collection(this,t):new e.Collection(this)},nodes:function(e){var t=this.$(function(){return this.isNode()});return e?t.filter(e):t},edges:function(e){var t=this.$(function(){return this.isEdge()});return e?t.filter(e):t},$:function(t){var r=new e.Collection(this,this._private.elements);return t?r.filter(t):r}}),e.corefn.elements=e.corefn.filter=e.corefn.$}(cytoscape),function(e){"use strict";e.fn.core({style:function(e){if(e){var t=this.setStyle(e);t.update()}return this._private.style},setStyle:function(t){var r=this._private;return r.style=e.is.stylesheet(t)?t.generateStyle(this):e.is.array(t)?e.style.fromJson(this,t):e.is.string(t)?e.style.fromString(this,t):new e.Style(this),r.style}})}(cytoscape),function(e){"use strict";e.fn.core({autolock:function(e){return void 0===e?this._private.autolock:(this._private.autolock=e?!0:!1,this)},autoungrabify:function(e){return void 0===e?this._private.autoungrabify:(this._private.autoungrabify=e?!0:!1,this)},autounselectify:function(e){return void 0===e?this._private.autounselectify:(this._private.autounselectify=e?!0:!1,this)},panningEnabled:function(e){return void 0===e?this._private.panningEnabled:(this._private.panningEnabled=e?!0:!1,this)},userPanningEnabled:function(e){return void 0===e?this._private.userPanningEnabled:(this._private.userPanningEnabled=e?!0:!1,this)},zoomingEnabled:function(e){return void 0===e?this._private.zoomingEnabled:(this._private.zoomingEnabled=e?!0:!1,this)},userZoomingEnabled:function(e){return void 0===e?this._private.userZoomingEnabled:(this._private.userZoomingEnabled=e?!0:!1,this)},boxSelectionEnabled:function(e){return void 0===e?this._private.boxSelectionEnabled:(this._private.boxSelectionEnabled=e?!0:!1,this)},pan:function(){var t,r,i,n,a,o=arguments,s=this._private.pan;switch(o.length){case 0:return s;case 1:if(e.is.string(o[0]))return t=o[0],s[t];if(e.is.plainObject(o[0])){if(!this._private.panningEnabled)return this;i=o[0],n=i.x,a=i.y,e.is.number(n)&&(s.x=n),e.is.number(a)&&(s.y=a),this.trigger("pan viewport")}break;case 2:if(!this._private.panningEnabled)return this;t=o[0],r=o[1],"x"!==t&&"y"!==t||!e.is.number(r)||(s[t]=r),this.trigger("pan viewport")}return this.notify({type:"viewport"}),this},panBy:function(t){var r,i,n,a,o,s=arguments,l=this._private.pan;if(!this._private.panningEnabled)return this;switch(s.length){case 1:e.is.plainObject(s[0])&&(n=s[0],a=n.x,o=n.y,e.is.number(a)&&(l.x+=a),e.is.number(o)&&(l.y+=o),this.trigger("pan viewport"));break;case 2:r=s[0],i=s[1],"x"!==r&&"y"!==r||!e.is.number(i)||(l[r]+=i),this.trigger("pan viewport")}return this.notify({type:"viewport"
}),this},fit:function(e,t){var r=this.getFitViewport(e,t);if(r){var i=this._private;i.zoom=r.zoom,i.pan=r.pan,this.trigger("pan zoom viewport"),this.notify({type:"viewport"})}return this},getFitViewport:function(t,r){if(e.is.number(t)&&void 0===r&&(r=t,t=void 0),this._private.panningEnabled&&this._private.zoomingEnabled){var i;if(e.is.string(t)){var n=t;t=this.$(n)}else if(e.is.boundingBox(t)){var a=t;i={x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},i.w=i.x2-i.x1,i.h=i.y2-i.y1}else e.is.elementOrCollection(t)||(t=this.elements());i=i||t.boundingBox();var o,s=this.width(),l=this.height();if(r=e.is.number(r)?r:0,!isNaN(s)&&!isNaN(l)&&s>0&&l>0&&!isNaN(i.w)&&!isNaN(i.h)&&i.w>0&&i.h>0){o=Math.min((s-2*r)/i.w,(l-2*r)/i.h),o=o>this._private.maxZoom?this._private.maxZoom:o,o=o<this._private.minZoom?this._private.minZoom:o;var u={x:(s-o*(i.x1+i.x2))/2,y:(l-o*(i.y1+i.y2))/2};return{zoom:o,pan:u}}}},minZoom:function(t){return void 0===t?this._private.minZoom:(e.is.number(t)&&(this._private.minZoom=t),this)},maxZoom:function(t){return void 0===t?this._private.maxZoom:(e.is.number(t)&&(this._private.maxZoom=t),this)},zoom:function(t){var r,i;if(void 0===t)return this._private.zoom;if(e.is.number(t))i=t;else if(e.is.plainObject(t)){if(i=t.level,t.position){var n=t.position,a=this._private.pan,o=this._private.zoom;r={x:n.x*o+a.x,y:n.y*o+a.y}}else t.renderedPosition&&(r=t.renderedPosition);if(r&&!this._private.panningEnabled)return this}if(!this._private.zoomingEnabled)return this;if(!e.is.number(i)||r&&(!e.is.number(r.x)||!e.is.number(r.y)))return this;if(i=i>this._private.maxZoom?this._private.maxZoom:i,i=i<this._private.minZoom?this._private.minZoom:i,r){var s=this._private.pan,l=this._private.zoom,u=i,c={x:-u/l*(r.x-s.x)+r.x,y:-u/l*(r.y-s.y)+r.y};this._private.zoom=i,this._private.pan=c;var d=s.x!==c.x||s.y!==c.y;this.trigger(" zoom "+(d?" pan ":"")+" viewport ")}else this._private.zoom=i,this.trigger("zoom viewport");return this.notify({type:"viewport"}),this},viewport:function(t){var r=this._private,i=!0,n=!0,a=[],o=!1,s=!1;if(!t)return this;if(e.is.number(t.zoom)||(i=!1),e.is.plainObject(t.pan)||(n=!1),!i&&!n)return this;if(i){var l=t.zoom;l<r.minZoom||l>r.maxZoom||!r.zoomingEnabled?o=!0:(r.zoom=l,a.push("zoom"))}if(n&&(!o||!t.cancelOnFailedZoom)&&r.panningEnabled){var u=t.pan;e.is.number(u.x)&&(r.pan.x=u.x,s=!1),e.is.number(u.y)&&(r.pan.y=u.y,s=!1),s||a.push("pan")}return a.length>0&&(a.push("viewport"),this.trigger(a.join(" ")),this.notify({type:"viewport"})),this},center:function(e){var t=this.getCenterPan(e);return t&&(this._private.pan=t,this.trigger("pan viewport"),this.notify({type:"viewport"})),this},getCenterPan:function(t,r){if(this._private.panningEnabled){if(e.is.string(t)){var i=t;t=this.elements(i)}else e.is.elementOrCollection(t)||(t=this.elements());var n=t.boundingBox(),a=this.width(),o=this.height();r=void 0===r?this._private.zoom:r;var s={x:(a-r*(n.x1+n.x2))/2,y:(o-r*(n.y1+n.y2))/2};return s}},reset:function(){return this._private.panningEnabled&&this._private.zoomingEnabled?(this.viewport({pan:{x:0,y:0},zoom:1}),this):this},width:function(){var e=this._private.container;return e?e.clientWidth:1},height:function(){var e=this._private.container;return e?e.clientHeight:1},extent:function(){var e=this._private.pan,t=this._private.zoom,r=this.renderedExtent(),i={x1:(r.x1-e.x)/t,x2:(r.x2-e.x)/t,y1:(r.y1-e.y)/t,y2:(r.y2-e.y)/t};return i.w=i.x2-i.x1,i.h=i.y2-i.y1,i},renderedExtent:function(){var e=this.width(),t=this.height();return{x1:0,y1:0,x2:e,y2:t,w:e,h:t}}}),e.corefn.centre=e.corefn.center,e.corefn.autolockNodes=e.corefn.autolock,e.corefn.autoungrabifyNodes=e.corefn.autoungrabify}(cytoscape),function(e){"use strict";e.fn.collection=e.fn.eles=function(t,r){for(var i in t){var n=t[i];e.Collection.prototype[i]=n}};var t={prefix:{nodes:"n",edges:"e"},id:{nodes:0,edges:0},generate:function(t,r,i){var n=e.is.element(r)?r._private:r,a=n.group,o=null!=i?i:this.prefix[a]+this.id[a];if(t.getElementById(o).empty())this.id[a]++;else for(;!t.getElementById(o).empty();)o=this.prefix[a]+ ++this.id[a];return o}};e.Element=function(t,r,i){if(!(this instanceof e.Element))return new e.Element(t,r,i);var n=this;if(i=void 0===i||i?!0:!1,void 0===t||void 0===r||!e.is.core(t))return void e.util.error("An element must have a core reference and parameters set");if("nodes"!==r.group&&"edges"!==r.group)return void e.util.error("An element must be of type `nodes` or `edges`; you specified `"+r.group+"`");if(this.length=1,this[0]=this,this._private={cy:t,single:!0,data:r.data||{},position:r.position||{},autoWidth:void 0,autoHeight:void 0,listeners:[],group:r.group,style:{},rstyle:{},styleCxts:[],removed:!0,selected:r.selected?!0:!1,selectable:void 0===r.selectable?!0:r.selectable?!0:!1,locked:r.locked?!0:!1,grabbed:!1,grabbable:void 0===r.grabbable?!0:r.grabbable?!0:!1,active:!1,classes:{},animation:{current:[],queue:[]},rscratch:{},scratch:r.scratch||{},edges:[],children:[]},r.renderedPosition){var a=r.renderedPosition,o=t.pan(),s=t.zoom();this._private.position={x:(a.x-o.x)/s,y:(a.y-o.y)/s}}if(e.is.string(r.classes))for(var l=r.classes.split(/\s+/),u=0,c=l.length;c>u;u++){var d=l[u];d&&""!==d&&(n._private.classes[d]=!0)}r.css&&t.style().applyBypass(this,r.css),(void 0===i||i)&&this.restore()},e.Collection=function(r,i,n){if(!(this instanceof e.Collection))return new e.Collection(r,i);if(void 0===r||!e.is.core(r))return void e.util.error("A collection must have a reference to the core");var a={},o={},s=!1;if(i){if(i.length>0&&e.is.plainObject(i[0])&&!e.is.element(i[0])){s=!0;for(var l=[],u={},c=0,d=i.length;d>c;c++){var h=i[c];null==h.data&&(h.data={});var p=h.data;if(null==p.id)p.id=t.generate(r,h);else if(0!==r.getElementById(p.id).length||u[p.id])continue;var v=new e.Element(r,h,!1);l.push(v),u[p.id]=!0}i=l}}else i=[];this.length=0;for(var c=0,d=i.length;d>c;c++){var f=i[c];if(f){var g=f._private.data.id;(!n||n.unique&&!a[g])&&(a[g]=f,o[g]=this.length,this[this.length]=f,this.length++)}}this._private={cy:r,ids:a,indexes:o},s&&this.restore()},e.elefn=e.elesfn=e.Element.prototype=e.Collection.prototype,e.elesfn.cy=function(){return this._private.cy},e.elesfn.element=function(){return this[0]},e.elesfn.collection=function(){return e.is.collection(this)?this:new e.Collection(this._private.cy,[this])},e.elesfn.unique=function(){return new e.Collection(this._private.cy,this,{unique:!0})},e.elesfn.getElementById=function(t){var r=this._private.cy,i=this._private.ids[t];return i?i:e.Collection(r)},e.elesfn.json=function(){var t=this.element();if(null==t)return void 0;var r=t._private,i=e.util.copy({data:r.data,position:r.position,group:r.group,bypass:r.bypass,removed:r.removed,selected:r.selected,selectable:r.selectable,locked:r.locked,grabbed:r.grabbed,grabbable:r.grabbable,classes:""}),n=[];for(var a in r.classes)r.classes[a]&&n.push(a);for(var o=0;o<n.length;o++){var a=n[o];i.classes+=a+(o<n.length-1?" ":"")}return i},e.elesfn.jsons=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t],i=r.json();e.push(i)}return e},e.elesfn.clone=function(){for(var t=this.cy(),r=[],i=0;i<this.length;i++){var n=this[i],a=n.json(),o=new e.Element(t,a,!1);r.push(o)}return new e.Collection(t,r)},e.elesfn.copy=e.elesfn.clone,e.elesfn.restore=function(r){var i=this,n=[],a=i.cy();void 0===r&&(r=!0);for(var o=[],s=[],l=[],u=0,c=0,d=0,h=i.length;h>d;d++){var p=i[d];p.isNode()?(s.push(p),u++):(l.push(p),c++)}o=s.concat(l);for(var d=0,h=o.length;h>d;d++){var p=o[d];if(p.removed()){var v=p._private,f=v.data;if(void 0===f.id)f.id=t.generate(a,p);else{if(e.is.emptyString(f.id)||!e.is.string(f.id)){e.util.error("Can not create element with invalid string ID `"+f.id+"`");continue}if(0!==a.getElementById(f.id).length){e.util.error("Can not create second element with ID `"+f.id+"`");continue}}var g=f.id;if(p.isEdge()){for(var y=p,m=["source","target"],x=m.length,b=!1,w=0;x>w;w++){var _=m[w],E=f[_];null==E||""===E?(e.util.error("Can not create edge `"+g+"` with unspecified "+_),b=!0):a.getElementById(E).empty()&&(e.util.error("Can not create edge `"+g+"` with nonexistant "+_+" `"+E+"`"),b=!0)}if(b)continue;var S=a.getElementById(f.source),D=a.getElementById(f.target);S._private.edges.push(y),D._private.edges.push(y),y._private.source=S,y._private.target=D}v.ids={},v.ids[g]=p,v.removed=!1,a.addToPool(p),n.push(p)}}for(var d=0;u>d;d++){var k=o[d],f=k._private.data,P=k._private.data.parent,C=null!=P;if(C){var T=a.getElementById(P);if(T.empty())f.parent=void 0;else{for(var M=!1,B=T;!B.empty();){if(k.same(B)){M=!0,f.parent=void 0;break}B=B.parent()}M||(T[0]._private.children.push(k),k._private.parent=T[0],a._private.hasCompoundNodes=!0)}}}if(n=new e.Collection(a,n),n.length>0){var N=n.add(n.connectedNodes()).add(n.parent());N.updateStyle(r),r?n.rtrigger("add"):n.trigger("add")}return i},e.elesfn.removed=function(){var e=this[0];return e&&e._private.removed},e.elesfn.inside=function(){var e=this[0];return e&&!e._private.removed},e.elesfn.remove=function(t){function r(e){for(var t=e._private.edges,r=0;r<t.length;r++)n(t[r])}function i(e){for(var t=e._private.children,r=0;r<t.length;r++)n(t[r])}function n(e){var t=c[e.id()];t||(c[e.id()]=!0,e.isNode()?(u.push(e),r(e),i(e)):u.unshift(e))}function a(e,t){for(var r=e._private.edges,i=0;i<r.length;i++){var n=r[i];if(t===n){r.splice(i,1);break}}}function o(e,t){t=t[0],e=e[0];for(var r=e._private.children,i=0;i<r.length;i++)if(r[i][0]===t[0]){r.splice(i,1);break}}var s=this,l=[],u=[],c={},d=s._private.cy;void 0===t&&(t=!0);for(var h=0,p=s.length;p>h;h++){var v=s[h];n(v)}for(var h=0;h<u.length;h++){var v=u[h];if(v._private.removed=!0,d.removeFromPool(v),l.push(v),v.isEdge()){var f=v.source()[0],g=v.target()[0];a(f,v),a(g,v)}else{var y=v.parent();0!==y.length&&o(y,v)}}var m=d._private.elements;d._private.hasCompoundNodes=!1;for(var h=0;h<m.length;h++){var v=m[h];if(v.isParent()){d._private.hasCompoundNodes=!0;break}}var x=new e.Collection(this.cy(),l);x.size()>0&&(t&&this.cy().notify({type:"remove",collection:x}),x.trigger("remove"));for(var b={},h=0;h<u.length;h++){var v=u[h],w="nodes"===v._private.group,_=v._private.data.parent;if(w&&void 0!==_&&!b[_]){b[_]=!0;var y=d.getElementById(_);y&&0!==y.length&&!y._private.removed&&0===y.children().length&&y.updateStyle()}}return this},e.elesfn.move=function(e){var t=this._private.cy;if(void 0!==e.source||void 0!==e.target){var r=e.source,i=e.target,n=t.getElementById(r).length>0,a=t.getElementById(i).length>0;if(n||a){var o=this.jsons();this.remove();for(var s=0;s<o.length;s++){var l=o[s];"edges"===l.group&&(n&&(l.data.source=r),a&&(l.data.target=i))}return t.add(o)}}else if(void 0!==e.parent){var u=e.parent,c=null===u||t.getElementById(u).length>0;if(c){var o=this.jsons(),d=this.descendants(),h=d.merge(d.add(this).connectedEdges());this.remove();for(var s=0;s<this.length;s++){var l=o[s];"nodes"===l.group&&(l.data.parent=null===u?void 0:u)}}return t.add(o).merge(h.restore())}return this}}(cytoscape),function(e){"use strict";e.fn.eles({stdBreadthFirstSearch:function(t){return t=e.util.extend({},t,{std:!0}),this.breadthFirstSearch(t)},breadthFirstSearch:function(t,r,i){var n,a,o;e.is.plainObject(t)&&!e.is.elementOrCollection(t)&&(n=t,t=n.roots,r=n.visit,i=n.directed,a=n.std,o=n.thisArg),i=2!==arguments.length||e.is.fn(r)?i:r,r=e.is.fn(r)?r:function(){};for(var s,l=this._private.cy,u=e.is.string(t)?this.filter(t):t,c=[],d=[],h={},p={},v={},f=0,g=this.nodes(),y=this.edges(),m=0;m<u.length;m++)u[m].isNode()&&(c.unshift(u[m]),v[u[m].id()]=!0,d.push(u[m]),p[u[m].id()]=0);for(;0!==c.length;){var x,u=c.shift(),b=p[u.id()],w=h[u.id()],_=null==w?void 0:w.connectedNodes().not(u)[0];if(x=a?r.call(o,u,w,_,f++,b):r.call(u,f++,b,u,w,_),x===!0){s=u;break}if(x===!1)break;for(var E=u.connectedEdges(i?function(){return this.data("source")===u.id()}:void 0).intersect(y),m=0;m<E.length;m++){var S=E[m],D=S.connectedNodes(function(){return this.id()!==u.id()}).intersect(g);0===D.length||v[D.id()]||(D=D[0],c.push(D),v[D.id()]=!0,p[D.id()]=p[u.id()]+1,d.push(D),h[D.id()]=S)}}for(var k=[],m=0;m<d.length;m++){var P=d[m],C=h[P.id()];C&&k.push(C),k.push(P)}return{path:new e.Collection(l,k,{unique:!0}),found:new e.Collection(l,s,{unique:!0})}},stdDepthFirstSearch:function(t){return t=e.util.extend({},t,{std:!0}),this.depthFirstSearch(t)},depthFirstSearch:function(t,r,i){var n,a,o;e.is.plainObject(t)&&!e.is.elementOrCollection(t)&&(n=t,t=n.roots,r=n.visit,i=n.directed,a=n.std,o=n.thisArg),i=2!==arguments.length||e.is.fn(r)?i:r,r=e.is.fn(r)?r:function(){};for(var s,l=this._private.cy,u=e.is.string(t)?this.filter(t):t,c=[],d=[],h={},p={},v={},f=0,g=this.edges(),y=this.nodes(),m=0;m<u.length;m++)u[m].isNode()&&(c.push(u[m]),d.push(u[m]),p[u[m].id()]=0);for(;0!==c.length;){var u=c.pop();if(!v[u.id()]){v[u.id()]=!0;var x,b=p[u.id()],w=h[u.id()],_=null==w?void 0:w.connectedNodes().not(u)[0];if(x=a?r.call(o,u,w,_,f++,b):r.call(u,f++,b,u,w,_),x===!0){s=u;break}if(x===!1)break;for(var E=u.connectedEdges(i?function(){return this.data("source")===u.id()}:void 0).intersect(g),m=0;m<E.length;m++){var S=E[m],D=S.connectedNodes(function(){return this.id()!==u.id()}).intersect(y);0===D.length||v[D.id()]||(D=D[0],c.push(D),p[D.id()]=p[u.id()]+1,d.push(D),h[D.id()]=S)}}}for(var k=[],m=0;m<d.length;m++){var P=d[m],C=h[P.id()];C&&k.push(C),k.push(P)}return{path:new e.Collection(l,k,{unique:!0}),found:new e.Collection(l,s,{unique:!0})}},kruskal:function(t){function r(e){for(var t=0;t<n.length;t++){var r=n[t];if(r.anySame(e))return{eles:r,index:t}}}t=e.is.fn(t)?t:function(){return 1};for(var i=new e.Collection(this._private.cy,[]),n=[],a=this.nodes(),o=0;o<a.length;o++)n.push(a[o].collection());for(var s=this.edges(),l=s.toArray().sort(function(e,r){var i=t.call(e,e),n=t.call(r,r);return i-n}),o=0;o<l.length;o++){var u=l[o],c=u.source()[0],d=u.target()[0],h=r(c),p=r(d);h.index!==p.index&&(i=i.add(u),n[h.index]=h.eles.add(p.eles),n.splice(p.index,1))}return a.add(i)},dijkstra:function(t,r,i){var n;e.is.plainObject(t)&&!e.is.elementOrCollection(t)&&(n=t,t=n.root,r=n.weight,i=n.directed);var a=this._private.cy;i=e.is.fn(r)?i:r,r=e.is.fn(r)?r:function(){return 1};for(var o=e.is.string(t)?this.filter(t).eq(0):t.eq(0),s={},l={},u={},c=this.edges().filter(function(){return!this.isLoop()}),d=this.nodes(),h=[],p=0;p<d.length;p++)s[d[p].id()]=d[p].same(o)?0:1/0,h.push(d[p]);var v=function(e){return s[e.id()]};h=new e.Collection(a,h);for(var f=e.Minheap(a,h,v),g=function(e,t){for(var n,a=(i?e.edgesTo(t):e.edgesWith(t)).intersect(c),o=1/0,s=0;s<a.length;s++){var l=a[s],u=r.apply(l,[l]);(o>u||!n)&&(o=u,n=l)}return{edge:n,dist:o}};f.size()>0;){var y=f.pop(),m=y.value,x=y.id,b=a.getElementById(x);if(u[x]=m,m===Math.Infinite)break;for(var w=b.neighborhood().intersect(d),p=0;p<w.length;p++){var _=w[p],E=_.id(),S=g(b,_),D=m+S.dist;D<f.getValueById(E)&&(f.edit(E,D),l[E]={node:b,edge:S.edge})}}return{distanceTo:function(t){var r=e.is.string(t)?d.filter(t).eq(0):t.eq(0);return u[r.id()]},pathTo:function(t){var r=e.is.string(t)?d.filter(t).eq(0):t.eq(0),i=[],n=r;if(r.length>0)for(i.unshift(r);l[n.id()];){var o=l[n.id()];i.unshift(o.edge),i.unshift(o.node),n=o.node}return new e.Collection(a,i)}}}}),e.elesfn.bfs=e.elesfn.breadthFirstSearch,e.elesfn.dfs=e.elesfn.depthFirstSearch,e.elesfn.stdBfs=e.elesfn.stdBreadthFirstSearch,e.elesfn.stdDfs=e.elesfn.stdDepthFirstSearch}(cytoscape),function(e){"use strict";e.fn.eles({aStar:function(t){t=t||{};var r=function(e,t,i,a){if(e==t)return a.push(n.getElementById(t)),a;if(t in i){var o=i[t],s=p[t];return a.push(n.getElementById(t)),a.push(n.getElementById(s)),r(e,o,i,a)}return void 0},i=function(e,t){if(0===e.length)return void 0;for(var r=0,i=t[e[0]],n=1;n<e.length;n++){var a=t[e[n]];i>a&&(i=a,r=n)}return r},n=this._private.cy;if(null==t||null==t.root)return void 0;var a=e.is.string(t.root)?this.filter(t.root)[0]:t.root[0];if(null==t.goal)return void 0;var o=e.is.string(t.goal)?this.filter(t.goal)[0]:t.goal[0];if(null!=t.heuristic&&e.is.fn(t.heuristic))var s=t.heuristic;else var s=function(){return 0};if(null!=t.weight&&e.is.fn(t.weight))var l=t.weight;else var l=function(e){return 1};if(null!=t.directed)var u=t.directed;else var u=!1;var c=[],d=[a.id()],h={},p={},v={},f={};v[a.id()]=0,f[a.id()]=s(a);for(var g=this.edges().stdFilter(function(e){return!e.isLoop()}),y=this.nodes(),m=0;d.length>0;){var x=i(d,f),b=n.getElementById(d[x]);if(m++,b.id()==o.id()){var w=r(a.id(),o.id(),h,[]);return w.reverse(),{found:!0,distance:v[b.id()],path:new e.Collection(n,w),steps:m}}c.push(b.id()),d.splice(x,1);var _=b.connectedEdges();u&&(_=_.stdFilter(function(e){return e.data("source")===b.id()})),_=_.intersect(g);for(var E=0;E<_.length;E++){var S=_[E],D=S.connectedNodes().stdFilter(function(e){return e.id()!==b.id()}).intersect(y);if(-1==c.indexOf(D.id())){var k=v[b.id()]+l.apply(S,[S]);-1!=d.indexOf(D.id())?k<v[D.id()]&&(v[D.id()]=k,f[D.id()]=k+s(D),h[D.id()]=b.id()):(v[D.id()]=k,f[D.id()]=k+s(D),d.push(D.id()),h[D.id()]=b.id(),p[D.id()]=S.id())}}}return{found:!1,distance:void 0,path:void 0,steps:m}},floydWarshall:function(t){t=t||{};var r=this._private.cy;if(null!=t.weight&&e.is.fn(t.weight))var i=t.weight;else var i=function(e){return 1};if(null!=t.directed)var n=t.directed;else var n=!1;for(var a=this.edges().stdFilter(function(e){return!e.isLoop()}),o=this.nodes(),s=o.length,l={},u=0;s>u;u++)l[o[u].id()]=u;for(var c=[],u=0;s>u;u++){for(var d=new Array(s),h=0;s>h;h++)d[h]=u==h?0:1/0;c.push(d)}var p=[],v=[],f=function(e){for(var t=0;s>t;t++){for(var r=new Array(s),i=0;s>i;i++)r[i]=void 0;e.push(r)}};f(p),f(v);for(var u=0;u<a.length;u++){var g=l[a[u].source().id()],y=l[a[u].target().id()],m=i.apply(a[u],[a[u]]);c[g][y]>m&&(c[g][y]=m,p[g][y]=y,v[g][y]=a[u])}if(!n)for(var u=0;u<a.length;u++){var g=l[a[u].target().id()],y=l[a[u].source().id()],m=i.apply(a[u],[a[u]]);c[g][y]>m&&(c[g][y]=m,p[g][y]=y,v[g][y]=a[u])}for(var x=0;s>x;x++)for(var u=0;s>u;u++)for(var h=0;s>h;h++)c[u][x]+c[x][h]<c[u][h]&&(c[u][h]=c[u][x]+c[x][h],p[u][h]=p[u][x]);for(var b=[],u=0;s>u;u++)b.push(o[u].id());var w={distance:function(t,i){if(e.is.string(t))var n=r.filter(t)[0].id();else var n=t.id();if(e.is.string(i))var a=r.filter(i)[0].id();else var a=i.id();return c[l[n]][l[a]]},path:function(t,i){var n=function(e,t,i,n,a){if(e===t)return r.getElementById(n[e]);if(void 0===i[e][t])return void 0;for(var o=[r.getElementById(n[e])],s=e;e!==t;){s=e,e=i[e][t];var l=a[s][e];o.push(l),o.push(r.getElementById(n[e]))}return o};if(e.is.string(t))var a=r.filter(t)[0].id();else var a=t.id();if(e.is.string(i))var o=r.filter(i)[0].id();else var o=i.id();var s=n(l[a],l[o],p,b,v);return new e.Collection(r,s)}};return w},bellmanFord:function(t){if(t=t||{},null!=t.weight&&e.is.fn(t.weight))var r=t.weight;else var r=function(e){return 1};if(null!=t.directed)var i=t.directed;else var i=!1;if(null==t.root)return void e.util.error("options.root required");if(e.is.string(t.root))var n=this.filter(t.root)[0];else var n=t.root[0];for(var a=this._private.cy,o=this.edges().stdFilter(function(e){return!e.isLoop()}),s=this.nodes(),l=s.length,u={},c=0;l>c;c++)u[s[c].id()]=c;for(var d=[],h=[],p=[],c=0;l>c;c++)d[c]=s[c].id()===n.id()?0:1/0,h[c]=void 0;for(var v=!1,c=1;l>c;c++){v=!1;for(var f=0;f<o.length;f++){var g=u[o[f].source().id()],y=u[o[f].target().id()],m=r.apply(o[f],[o[f]]),x=d[g]+m;if(x<d[y]&&(d[y]=x,h[y]=g,p[y]=o[f],v=!0),!i){var x=d[y]+m;x<d[g]&&(d[g]=x,h[g]=y,p[g]=o[f],v=!0)}}if(!v)break}if(v)for(var f=0;f<o.length;f++){var g=u[o[f].source().id()],y=u[o[f].target().id()],m=r.apply(o[f],[o[f]]);if(d[g]+m<d[y])return e.util.error("Error: graph contains a negative weigth cycle!"),{pathTo:void 0,distanceTo:void 0,hasNegativeWeightCycle:!0}}for(var b=[],c=0;l>c;c++)b.push(s[c].id());var w={distanceTo:function(t){if(e.is.string(t))var r=a.filter(t)[0].id();else var r=t.id();return d[u[r]]},pathTo:function(t){var r=function(e,t,r,i,n,o){for(;;){if(n.push(a.getElementById(i[r])),n.push(o[r]),t===r)return n;var s=e[r];if("undefined"==typeof s)return void 0;r=s}};if(e.is.string(t))var i=a.filter(t)[0].id();else var i=t.id();var o=[],s=r(h,u[n.id()],u[i],b,o,p);return null!=s&&s.reverse(),new e.Collection(a,s)},hasNegativeWeightCycle:!1};return w},kargerStein:function(t){t=t||{};var r=function(e,t,r){for(var i=r[e],n=i[1],a=i[2],o=t[n],s=t[a],l=r.filter(function(e){return t[e[1]]===o&&t[e[2]]===s?!1:t[e[1]]===s&&t[e[2]]===o?!1:!0}),u=0;u<l.length;u++){var c=l[u];c[1]===s?(l[u]=c.slice(0),l[u][1]=o):c[2]===s&&(l[u]=c.slice(0),l[u][2]=o)}for(var u=0;u<t.length;u++)t[u]===s&&(t[u]=o);return l},i=function(e,t,n,a){if(a>=n)return t;var o=Math.floor(Math.random()*t.length),s=r(o,e,t);return i(e,s,n-1,a)},n=this._private.cy,a=this.edges().stdFilter(function(e){return!e.isLoop()}),o=this.nodes(),s=o.length,l=a.length,u=Math.ceil(Math.pow(Math.log(s)/Math.LN2,2)),c=Math.floor(s/Math.sqrt(2));if(2>s)return void e.util.error("At least 2 nodes are required for KargerSteing algorithm!");for(var d={},h=0;s>h;h++)d[o[h].id()]=h;for(var p=[],h=0;l>h;h++){var v=a[h];p.push([h,d[v.source().id()],d[v.target().id()]])}for(var f,g=1/0,y=[],h=0;s>h;h++)y.push(h);for(var m=0;u>=m;m++){var x=y.slice(0),b=i(x,p,s,c),w=x.slice(0),_=i(x,b,c,2),E=i(w,b,c,2);_.length<=E.length&&_.length<g?(g=_.length,f=[_,x]):E.length<=_.length&&E.length<g&&(g=E.length,f=[E,w])}for(var S=f[0].map(function(e){return a[e[0]]}),D=[],k=[],P=f[1][0],h=0;h<f[1].length;h++){var C=f[1][h];C===P?D.push(o[h]):k.push(o[h])}var T={cut:new e.Collection(n,S),partition1:new e.Collection(n,D),partition2:new e.Collection(n,k)};return T},pageRank:function(t){t=t||{};var r=function(e){for(var t=e.length,r=0,i=0;t>i;i++)r+=e[i];for(var i=0;t>i;i++)e[i]=e[i]/r};if(null!=t&&null!=t.dampingfactor)var i=t.dampingFactor;else var i=.8;if(null!=t&&null!=t.precision)var n=t.precision;else var n=1e-6;if(null!=t&&null!=t.iterations)var a=t.iterations;else var a=200;if(null!=t&&null!=t.weight&&e.is.fn(t.weight))var o=t.weight;else var o=function(e){return 1};for(var s=this._private.cy,l=this.edges().stdFilter(function(e){return!e.isLoop()}),u=this.nodes(),c=u.length,d=l.length,h={},p=0;c>p;p++)h[u[p].id()]=p;for(var v=[],f=[],g=(1-i)/c,p=0;c>p;p++){for(var y=[],m=0;c>m;m++)y.push(0);v.push(y),f.push(0)}for(var p=0;d>p;p++){var x=l[p],b=h[x.source().id()],w=h[x.target().id()],_=o.apply(x,[x]);v[w][b]+=_,f[b]+=_}for(var E=1/c+g,m=0;c>m;m++)if(0===f[m])for(var p=0;c>p;p++)v[p][m]=E;else for(var p=0;c>p;p++)v[p][m]=v[p][m]/f[m]+g;for(var S,D=[],k=[],p=0;c>p;p++)D.push(1),k.push(0);for(var P=0;a>P;P++){for(var C=k.slice(0),p=0;c>p;p++)for(var m=0;c>m;m++)C[p]+=v[p][m]*D[m];r(C),S=D,D=C;for(var T=0,p=0;c>p;p++)T+=Math.pow(S[p]-D[p],2);if(n>T)break}var M={rank:function(t){if(e.is.string(t))var r=s.filter(t)[0].id();else var r=t.id();return D[h[r]]}};return M},degreeCentralityNormalized:function(t){if(t=t||{},null!=t.directed)var r=t.directed;else var r=!1;var i=this.nodes(),n=i.length;if(r){for(var a={},o={},s=0,l=0,u=0;n>u;u++){var c=i[u],d=this.degreeCentrality(e.util.extend({},t,{root:c}));s<d.indegree&&(s=d.indegree),l<d.outdegree&&(l=d.outdegree),a[c.id()]=d.indegree,o[c.id()]=d.outdegree}return{indegree:function(t){if(e.is.string(t))var t=cy.filter(t)[0].id();else var t=t.id();return a[t]/s},outdegree:function(t){if(e.is.string(t))var t=cy.filter(t)[0].id();else var t=t.id();return o[t]/l}}}for(var h={},p=0,u=0;n>u;u++){var c=i[u],d=this.degreeCentrality(e.util.extend({},t,{root:c}));p<d.degree&&(p=d.degree),h[c.id()]=d.degree}return{degree:function(t){if(e.is.string(t))var t=cy.filter(t)[0].id();else var t=t.id();return h[t]/p}}},degreeCentrality:function(t){t=t||{};var r=this;if(null==t||null==t.root)return void 0;var i=e.is.string(t.root)?this.filter(t.root)[0]:t.root[0];if(null!=t.weight&&e.is.fn(t.weight))var n=t.weight;else var n=function(e){return 1};if(null!=t.directed)var a=t.directed;else var a=!1;if(null!=t.alpha&&e.is.number(t.alpha))var o=t.alpha;else o=0;if(a){for(var s=i.connectedEdges('edge[target = "'+i.id()+'"]').intersection(r),l=i.connectedEdges('edge[source = "'+i.id()+'"]').intersection(r),u=s.length,c=l.length,d=0,h=0,p=0;p<s.length;p++){var v=s[p];d+=n.apply(v,[v])}for(var p=0;p<l.length;p++){var v=l[p];h+=n.apply(v,[v])}return{indegree:Math.pow(u,1-o)*Math.pow(d,o),outdegree:Math.pow(c,1-o)*Math.pow(h,o)}}for(var f=i.connectedEdges().intersection(r),g=f.length,y=0,p=0;p<f.length;p++){var v=f[p];y+=n.apply(v,[v])}return{degree:Math.pow(g,1-o)*Math.pow(y,o)}},closenessCentralityNormalized:function(t){t=t||{};for(var r={},i=0,n=this.nodes(),a=this.floydWarshall({weight:t.weight,directed:t.directed}),o=0;o<n.length;o++){for(var s=0,l=0;l<n.length;l++)o!=l&&(s+=1/a.distance(n[o],n[l]));s>i&&(i=s),r[n[o].id()]=s}return{closeness:function(t){if(e.is.string(t))var t=cy.filter(t)[0].id();else var t=t.id();return r[t]/i}}},closenessCentrality:function(t){if(t=t||{},null==t.root)return void e.util.error("options.root required");if(e.is.string(t.root))var r=this.filter(t.root)[0];else var r=t.root[0];if(null!=t.weight&&e.is.fn(t.weight))var i=t.weight;else var i=function(){return 1};if(null!=t.directed&&e.is.bool(t.directed))var n=t.directed;else var n=!1;for(var a=this.dijkstra({root:r,weight:i,directed:n}),o=0,s=this.nodes(),l=0;l<s.length;l++)s[l].id()!=r.id()&&(o+=1/a.distanceTo(s[l]));return o},betweennessCentrality:function(t){if(t=t||{},null!=t.weight&&e.is.fn(t.weight))var r=t.weight,i=!0;else var i=!1;if(null!=t.directed&&e.is.bool(t.directed))var n=t.directed;else var n=!1;for(var a=function(e,t){e.unshift(t);for(var r=0;f[e[r]]<f[e[r+1]]&&r<e.length-1;r++){var i=e[r];e[r]=e[r+1],e[r+1]=i}},o=this._private.cy,s=this.nodes(),l={},u={},c=0;c<s.length;c++)l[s[c].id()]=n?s[c].outgoers("node"):s[c].openNeighborhood("node");for(var c=0;c<s.length;c++)u[s[c].id()]=0;for(var d=0;d<s.length;d++){for(var h=[],p={},v={},f={},g=[],c=0;c<s.length;c++)p[s[c].id()]=[],v[s[c].id()]=0,f[s[c].id()]=Number.POSITIVE_INFINITY;for(v[s[d].id()]=1,f[s[d].id()]=0,g.unshift(s[d].id());g.length>0;){var y=g.pop();h.push(y),l[y].forEach(i?function(e){if(o.$("#"+y).edgesTo(e).length>0)var t=o.$("#"+y).edgesTo(e)[0];else var t=e.edgesTo("#"+y)[0];var i=r.apply(t,[t]);f[e.id()]>f[y]+i&&(f[e.id()]=f[y]+i,g.indexOf(e.id())<0?a(g,e.id()):(g.splice(g.indexOf(e.id()),1),a(g,e.id())),v[e.id()]=0,p[e.id()]=[]),f[e.id()]==f[y]+i&&(v[e.id()]=v[e.id()]+v[y],p[e.id()].push(y))}:function(e){f[e.id()]==Number.POSITIVE_INFINITY&&(g.unshift(e.id()),f[e.id()]=f[y]+1),f[e.id()]==f[y]+1&&(v[e.id()]=v[e.id()]+v[y],p[e.id()].push(y))})}for(var m={},c=0;c<s.length;c++)m[s[c].id()]=0;for(;h.length>0;){var x=h.pop();p[x].forEach(function(e){m[e]=m[e]+v[e]/v[x]*(1+m[x]),x!=s[d].id()&&(u[x]=u[x]+m[x])})}}var b=0;for(var w in u)b<u[w]&&(b=u[w]);var _={betweenness:function(t){if(e.is.string(t))var t=o.filter(t)[0].id();else var t=t.id();return u[t]},betweennessNormalized:function(t){if(e.is.string(t))var t=o.filter(t)[0].id();else var t=t.id();return u[t]/b}};return _.betweennessNormalised=_.betweennessNormalized,_}}),e.elesfn.dc=e.elesfn.degreeCentrality,e.elesfn.dcn=e.elesfn.degreeCentralityNormalised=e.elesfn.degreeCentralityNormalized,e.elesfn.cc=e.elesfn.closenessCentrality,e.elesfn.ccn=e.elesfn.closenessCentralityNormalised=e.elesfn.closenessCentralityNormalized,e.elesfn.bc=e.elesfn.betweennessCentrality}(cytoscape),function(e){"use strict";e.fn.eles({animated:e.define.animated(),clearQueue:e.define.clearQueue(),delay:e.define.delay(),animate:e.define.animate(),stop:e.define.stop()})}(cytoscape),function(e){"use strict";e.fn.eles({addClass:function(t){t=t.split(/\s+/);for(var r=this,i=[],n=0;n<t.length;n++){var a=t[n];if(!e.is.emptyString(a))for(var o=0;o<r.length;o++){var s=r[o],l=s._private.classes[a];s._private.classes[a]=!0,l||i.push(s)}}return i.length>0&&new e.Collection(this._private.cy,i).updateStyle().trigger("class"),r},hasClass:function(e){var t=this[0];return null!=t&&t._private.classes[e]?!0:!1},toggleClass:function(t,r){for(var i=t.split(/\s+/),n=this,a=[],o=0,s=n.length;s>o;o++)for(var l=n[o],u=0;u<i.length;u++){var c=i[u];if(!e.is.emptyString(c)){var d=l._private.classes[c],h=r||void 0===r&&!d;h?(l._private.classes[c]=!0,d||a.push(l)):(l._private.classes[c]=!1,d&&a.push(l))}}return a.length>0&&new e.Collection(this._private.cy,a).updateStyle().trigger("class"),n},removeClass:function(t){t=t.split(/\s+/);for(var r=this,i=[],n=0;n<r.length;n++)for(var a=r[n],o=0;o<t.length;o++){var s=t[o];if(s&&""!==s){var l=a._private.classes[s];a._private.classes[s]=void 0,l&&i.push(a)}}return i.length>0&&new e.Collection(r._private.cy,i).updateStyle(),r.trigger("class"),r},flashClass:function(e,t){var r=this;if(null==t)t=250;else if(0===t)return r;return r.addClass(e),setTimeout(function(){r.removeClass(e)},t),r}})}(cytoscape),function(e){"use strict";e.fn.eles({allAre:function(e){return this.filter(e).length===this.length},is:function(e){return this.filter(e).length>0},some:function(e,t){for(var r=0;r<this.length;r++){var i=t?e.apply(t,[this[r],r,this]):e(this[r],r,this);if(i)return!0}return!1},every:function(e,t){for(var r=0;r<this.length;r++){var i=t?e.apply(t,[this[r],r,this]):e(this[r],r,this);if(!i)return!1}return!0},same:function(e){return e=this.cy().collection(e),this.length!==e.length?!1:this.intersect(e).length===this.length},anySame:function(e){return e=this.cy().collection(e),this.intersect(e).length>0},allAreNeighbors:function(e){return e=this.cy().collection(e),this.neighborhood().intersect(e).length===e.length}}),e.elesfn.allAreNeighbours=e.elesfn.allAreNeighbors}(cytoscape),function(e){"use strict";e.fn.eles({parent:function(t){for(var r=[],i=this._private.cy,n=0;n<this.length;n++){var a=this[n],o=i.getElementById(a._private.data.parent);o.size()>0&&r.push(o)}return new e.Collection(i,r,{unique:!0}).filter(t)},parents:function(t){for(var r=[],i=this.parent();i.nonempty();){for(var n=0;n<i.length;n++){var a=i[n];r.push(a)}i=i.parent()}return new e.Collection(this.cy(),r,{unique:!0}).filter(t)},commonAncestors:function(e){for(var t,r=0;r<this.length;r++){var i=this[r],n=i.parents();t=t||n,t=t.intersect(n)}return t.filter(e)},orphans:function(e){return this.stdFilter(function(e){return e.isNode()&&e.parent().empty()}).filter(e)},nonorphans:function(e){return this.stdFilter(function(e){return e.isNode()&&e.parent().nonempty()}).filter(e)},children:function(t){for(var r=[],i=0;i<this.length;i++){var n=this[i];r=r.concat(n._private.children)}return new e.Collection(this.cy(),r,{unique:!0}).filter(t)},siblings:function(e){return this.parent().children().not(this).filter(e)},isParent:function(){var e=this[0];return e?0!==e._private.children.length:void 0},isChild:function(){var e=this[0];return e?void 0!==e._private.data.parent&&0!==e.parent().length:void 0},descendants:function(t){function r(e){for(var t=0;t<e.length;t++){var n=e[t];i.push(n),n.children().nonempty()&&r(n.children())}}var i=[];return r(this.children()),new e.Collection(this.cy(),i,{unique:!0}).filter(t)}}),e.elesfn.ancestors=e.elesfn.parents}(cytoscape),function(e){"use strict";var t=1,r=0;e.fn.eles({data:e.define.data({field:"data",bindingEvent:"data",allowBinding:!0,allowSetting:!0,settingEvent:"data",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0,immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),removeData:e.define.removeData({field:"data",event:"data",triggerFnName:"trigger",triggerEvent:!0,immutableKeys:{id:!0,source:!0,target:!0,parent:!0},updateStyle:!0}),scratch:e.define.data({field:"scratch",bindingEvent:"scratch",allowBinding:!0,allowSetting:!0,settingEvent:"scratch",settingTriggersEvent:!0,triggerFnName:"trigger",allowGetting:!0,updateStyle:!0}),removeScratch:e.define.removeData({field:"scratch",event:"scratch",triggerFnName:"trigger",triggerEvent:!0,updateStyle:!0}),rscratch:e.define.data({field:"rscratch",allowBinding:!1,allowSetting:!0,settingTriggersEvent:!1,allowGetting:!0}),removeRscratch:e.define.removeData({field:"rscratch",triggerEvent:!1}),id:function(){var e=this[0];return e?e._private.data.id:void 0},position:e.define.data({field:"position",bindingEvent:"position",
allowBinding:!0,allowSetting:!0,settingEvent:"position",settingTriggersEvent:!0,triggerFnName:"rtrigger",allowGetting:!0,validKeys:["x","y"],onSet:function(e){var t=e.updateCompoundBounds();t.rtrigger("position")},canSet:function(e){return!e.locked()}}),silentPosition:e.define.data({field:"position",bindingEvent:"position",allowBinding:!1,allowSetting:!0,settingEvent:"position",settingTriggersEvent:!1,triggerFnName:"trigger",allowGetting:!0,validKeys:["x","y"],onSet:function(e){e.updateCompoundBounds()},canSet:function(e){return!e.locked()}}),positions:function(t,r){if(e.is.plainObject(t))this.position(t);else if(e.is.fn(t)){for(var i=t,n=0;n<this.length;n++){var a=this[n],t=i.apply(a,[n,a]);if(t&&!a.locked()){var o=a._private.position;o.x=t.x,o.y=t.y}}var s=this.updateCompoundBounds(),l=s.length>0?this.add(s):this;r?l.trigger("position"):l.rtrigger("position")}return this},silentPositions:function(e){return this.positions(e,!0)},updateCompoundBounds:function(){function t(e){var t=e.children(),r=e._private.style,n="include"===r["compound-sizing-wrt-labels"].value,a=t.boundingBox({includeLabels:n,includeEdges:!0}),o={top:r["padding-top"].pxValue,bottom:r["padding-bottom"].pxValue,left:r["padding-left"].pxValue,right:r["padding-right"].pxValue},s=e._private.position,l=!1;"auto"===r.width.value&&(e._private.autoWidth=a.w+o.left+o.right,s.x=(a.x1+a.x2-o.left+o.right)/2,l=!0),"auto"===r.height.value&&(e._private.autoHeight=a.h+o.top+o.bottom,s.y=(a.y1+a.y2-o.top+o.bottom)/2,l=!0),l&&i.push(e)}var r=this.cy();if(!r.styleEnabled()||!r.hasCompoundNodes())return r.collection();for(var i=[],n=this.parent();n.nonempty();){for(var a=0;a<n.length;a++){var o=n[a];t(o)}n=n.parent()}return new e.Collection(r,i)},renderedPosition:function(t,r){var i=this[0],n=this.cy(),a=n.zoom(),o=n.pan(),s=e.is.plainObject(t)?t:void 0,l=void 0!==s||void 0!==r&&e.is.string(t);if(i&&i.isNode()){if(!l){var u=i._private.position;return s={x:u.x*a+o.x,y:u.y*a+o.y},void 0===t?s:s[t]}for(var c=0;c<this.length;c++){var i=this[c];void 0!==r?i._private.position[t]=(r-o[t])/a:void 0!==s&&(i._private.position={x:(s.x-o.x)/a,y:(s.y-o.y)/a})}this.rtrigger("position")}else if(!l)return void 0;return this},relativePosition:function(t,r){var i=this[0],n=this.cy(),a=e.is.plainObject(t)?t:void 0,o=void 0!==a||void 0!==r&&e.is.string(t),s=n.hasCompoundNodes();if(i&&i.isNode()){if(!o){var l=i._private.position,u=s?i.parent():null,c=u&&u.length>0,d=c;c&&(u=u[0]);var h=d?u._private.position:{x:0,y:0};return a={x:l.x-h.x,y:l.y-h.y},void 0===t?a:a[t]}for(var p=0;p<this.length;p++){var i=this[p],u=s?i.parent():null,c=u&&u.length>0,d=c;c&&(u=u[0]);var h=d?u._private.position:{x:0,y:0};void 0!==r?i._private.position[t]=r+h[t]:void 0!==a&&(i._private.position={x:a.x+h.x,y:a.y+h.y})}this.rtrigger("position")}else if(!o)return void 0;return this},width:function(){var e=this[0],t=e._private.cy,r=t._private.styleEnabled;if(e){if(r){var i=e._private.style.width;return"auto"===i.strValue?e._private.autoWidth:i.pxValue}return 1}},outerWidth:function(){var e=this[0],i=e._private.cy,n=i._private.styleEnabled;if(e){if(n){var a=e._private.style,o="auto"===a.width.strValue?e._private.autoWidth:a.width.pxValue,s=a["border-width"]?a["border-width"].pxValue*t+r:0;return o+s}return 1}},renderedWidth:function(){var e=this[0];if(e){var t=e.width();return t*this.cy().zoom()}},renderedOuterWidth:function(){var e=this[0];if(e){var t=e.outerWidth();return t*this.cy().zoom()}},height:function(){var e=this[0],t=e._private.cy,r=t._private.styleEnabled;if(e&&"nodes"===e._private.group){if(r){var i=e._private.style.height;return"auto"===i.strValue?e._private.autoHeight:i.pxValue}return 1}},outerHeight:function(){var e=this[0],i=e._private.cy,n=i._private.styleEnabled;if(e&&"nodes"===e._private.group){if(!n)return 1;var a=e._private.style,o="auto"===a.height.strValue?e._private.autoHeight:a.height.pxValue,s=a["border-width"]?a["border-width"].pxValue*t+r:0;return o+s}},renderedHeight:function(){var e=this[0];if(e&&"nodes"===e._private.group){var t=e.height();return t*this.cy().zoom()}},renderedOuterHeight:function(){var e=this[0];if(e&&"nodes"===e._private.group){var t=e.outerHeight();return t*this.cy().zoom()}},renderedBoundingBox:function(e){var t=this.boundingBox(e),r=this.cy(),i=r.zoom(),n=r.pan(),a=t.x1*i+n.x,o=t.x2*i+n.x,s=t.y1*i+n.y,l=t.y2*i+n.y;return{x1:a,x2:o,y1:s,y2:l,w:o-a,h:l-s}},boundingBox:function(e){var t=this,r=t._private.cy,i=r._private,n=i.styleEnabled;e=e||{};var a=void 0===e.includeNodes?!0:e.includeNodes,o=void 0===e.includeEdges?!0:e.includeEdges,s=void 0===e.includeLabels?!0:e.includeLabels;n&&i.renderer.recalculateRenderedStyle(this);for(var l=1/0,u=-(1/0),c=1/0,d=-(1/0),h=0;h<t.length;h++){var p,v,f,g,y,m,x=t[h],b=x._private,w=b.style,_=n?b.style.display.value:"element",E="nodes"===b.group,S=!1;if("none"!==_){if(E&&a){S=!0;var D=b.position;y=D.x,m=D.y;var k=x.outerWidth(),P=k/2,C=x.outerHeight(),T=C/2;p=y-P,v=y+P,f=m-T,g=m+T,l=l>p?p:l,u=v>u?v:u,c=c>f?f:c,d=g>d?g:d}else if(x.isEdge()&&o){S=!0;var M=b.source,B=M._private,N=B.position,I=b.target,O=I._private,z=O.position,L=b.rstyle||{};if(p=N.x,v=z.x,f=N.y,g=z.y,p>v){var R=p;p=v,v=R}if(f>g){var R=f;f=g,g=R}if(l=l>p?p:l,u=v>u?v:u,c=c>f?f:c,d=g>d?g:d,n)for(var V=L.bezierPts||[],k=w.width.pxValue,A=k/2,X=0;X<V.length;X++){var F=V[X];p=F.x-A,v=F.x+A,f=F.y-A,g=F.y+A,l=l>p?p:l,u=v>u?v:u,c=c>f?f:c,d=g>d?g:d}if(n&&"haystack"===w["curve-style"].strValue){var Y=b.rscratch.haystackPts;if(p=Y[0],f=Y[1],v=Y[2],g=Y[3],p>v){var R=p;p=v,v=R}if(f>g){var R=f;f=g,g=R}l=l>p?p:l,u=v>u?v:u,c=c>f?f:c,d=g>d?g:d}}if(n){var w=x._private.style,L=x._private.rstyle,q=w.content.strValue,j=w["font-size"],$=w["text-halign"],W=w["text-valign"],H=L.labelWidth,Z=L.labelHeight,U=L.labelX,G=L.labelY;if(S&&s&&q&&j&&null!=Z&&null!=H&&null!=U&&null!=G&&$&&W){var K,J,Q,ee,te=Z,re=H;if(x.isEdge())K=U-re/2,J=U+re/2,Q=G-te/2,ee=G+te/2;else{switch($.value){case"left":K=U-re,J=U;break;case"center":K=U-re/2,J=U+re/2;break;case"right":K=U,J=U+re}switch(W.value){case"top":Q=G-te,ee=G;break;case"center":Q=G-te/2,ee=G+te/2;break;case"bottom":Q=G,ee=G+te}}l=l>K?K:l,u=J>u?J:u,c=c>Q?Q:c,d=ee>d?ee:d}}}}return{x1:l,x2:u,y1:c,y2:d,w:u-l,h:d-c}}});var i=e.elesfn;i.attr=i.data,i.removeAttr=i.removeData,i.modelPosition=i.point=i.position,i.modelPositions=i.points=i.positions,i.renderedPoint=i.renderedPosition,i.relativePoint=i.relativePosition,i.boundingbox=i.boundingBox,i.renderedBoundingbox=i.renderedBoundingBox}(cytoscape),function(e){"use strict";function t(e){return function(t){var r=this;if(void 0===t&&(t=!0),0!==r.length&&r.isNode()&&!r.removed()){for(var i=0,n=r[0],a=n._private.edges,o=0;o<a.length;o++){var s=a[o];(t||!s.isLoop())&&(i+=e(n,s))}return i}}}function r(e,t){return function(r){for(var i,n=this.nodes(),a=0;a<n.length;a++){var o=n[a],s=o[e](r);void 0===s||void 0!==i&&!t(s,i)||(i=s)}return i}}e.fn.eles({degree:t(function(e,t){return t.source().same(t.target())?2:1}),indegree:t(function(e,t){return t.target().same(e)?1:0}),outdegree:t(function(e,t){return t.source().same(e)?1:0})}),e.fn.eles({minDegree:r("degree",function(e,t){return t>e}),maxDegree:r("degree",function(e,t){return e>t}),minIndegree:r("indegree",function(e,t){return t>e}),maxIndegree:r("indegree",function(e,t){return e>t}),minOutdegree:r("outdegree",function(e,t){return t>e}),maxOutdegree:r("outdegree",function(e,t){return e>t})}),e.fn.eles({totalDegree:function(e){for(var t=0,r=this.nodes(),i=0;i<r.length;i++)t+=r[i].degree(e);return t}})}(cytoscape),function(e){"use strict";e.fn.eles({on:e.define.on(),one:e.define.on({unbindSelfOnTrigger:!0}),once:e.define.on({unbindAllBindersOnTrigger:!0}),off:e.define.off(),trigger:e.define.trigger(),rtrigger:function(e,t){return 0!==this.length?(this.cy().notify({type:e,collection:this}),this.trigger(e,t),this):void 0}}),e.define.eventAliasesOn(e.elesfn)}(cytoscape),function(e){"use strict";e.fn.eles({nodes:function(e){return this.filter(function(e,t){return t.isNode()}).filter(e)},edges:function(e){return this.filter(function(e,t){return t.isEdge()}).filter(e)},filter:function(t){var r=this._private.cy;if(e.is.fn(t)){for(var i=[],n=0;n<this.length;n++){var a=this[n];t.apply(a,[n,a])&&i.push(a)}return new e.Collection(r,i)}return e.is.string(t)||e.is.elementOrCollection(t)?new e.Selector(t).filter(this):void 0===t?this:new e.Collection(r)},not:function(t){var r=this._private.cy;if(t){e.is.string(t)&&(t=this.filter(t));for(var i=[],n=0;n<this.length;n++){var a=this[n],o=t._private.ids[a.id()];o||i.push(a)}return new e.Collection(r,i)}return this},absoluteComplement:function(){var e=this._private.cy;return e.elements().not(this)},intersect:function(t){var r=this._private.cy;if(e.is.string(t)){var i=t;return this.filter(i)}for(var n=[],a=this,o=t,s=this.length<t.length,l=s?o._private.ids:a._private.ids,u=s?a:o,c=0;c<u.length;c++){var d=u[c]._private.data.id,h=l[d];h&&n.push(h)}return new e.Collection(r,n)},xor:function(t){var r=this._private.cy;e.is.string(t)&&(t=r.$(t));var i=[],n=this,a=t,o=function(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=n._private.data.id,o=t._private.ids[a];o||i.push(n)}};return o(n,a),o(a,n),new e.Collection(r,i)},diff:function(t){var r=this._private.cy;e.is.string(t)&&(t=r.$(t));var i=[],n=[],a=[],o=this,s=t,l=function(e,t,r){for(var i=0;i<e.length;i++){var n=e[i],o=n._private.data.id,s=t._private.ids[o];s?a.push(n):r.push(n)}};return l(o,s,i),l(s,o,n),{left:new e.Collection(r,i,{unique:!0}),right:new e.Collection(r,n,{unique:!0}),both:new e.Collection(r,a,{unique:!0})}},add:function(t){var r=this._private.cy;if(!t)return this;if(e.is.string(t)){var i=t;t=r.elements(i)}for(var n=[],a=0;a<this.length;a++)n.push(this[a]);for(var a=0;a<t.length;a++){var o=!this._private.ids[t[a].id()];o&&n.push(t[a])}return new e.Collection(r,n)},merge:function(t){var r=this._private,i=r.cy;if(!t)return this;if(e.is.string(t)){var n=t;t=i.elements(n)}for(var a=0;a<t.length;a++){var o=t[a],s=o.id(),l=!r.ids[s];if(l){var u=this.length++;this[u]=o,r.ids[s]=o,r.indexes[s]=u}}return this},unmergeOne:function(e){e=e[0];var t=this._private,r=e.id(),i=t.indexes[r];if(null==i)return this;this[i]=void 0,t.ids[r]=void 0,t.indexes[r]=void 0;var n=i===this.length-1;if(this.length>1&&!n){var a=this.length-1,o=this[a];this[a]=void 0,this[i]=o,t.indexes[o.id()]=i}return this.length--,this},unmerge:function(t){var r=this._private.cy;if(!t)return this;if(e.is.string(t)){var i=t;t=r.elements(i)}for(var n=0;n<t.length;n++)this.unmergeOne(t[n]);return this},map:function(e,t){for(var r=[],i=this,n=0;n<i.length;n++){var a=i[n],o=t?e.apply(t,[a,n,i]):e(a,n,i);r.push(o)}return r},stdFilter:function(t,r){for(var i=[],n=this,a=this._private.cy,o=0;o<n.length;o++){var s=n[o],l=r?t.apply(r,[s,o,n]):t(s,o,n);l&&i.push(s)}return new e.Collection(a,i)},max:function(e,t){for(var r,i=-(1/0),n=this,a=0;a<n.length;a++){var o=n[a],s=t?e.apply(t,[o,a,n]):e(o,a,n);s>i&&(i=s,r=o)}return{value:i,ele:r}},min:function(e,t){for(var r,i=1/0,n=this,a=0;a<n.length;a++){var o=n[a],s=t?e.apply(t,[o,a,n]):e(o,a,n);i>s&&(i=s,r=o)}return{value:i,ele:r}}});var t=e.elesfn;t.u=t["|"]=t["+"]=t.union=t.or=t.add,t["\\"]=t["!"]=t["-"]=t.difference=t.relativeComplement=t.not,t.n=t["&"]=t["."]=t.and=t.intersection=t.intersect,t["^"]=t["(+)"]=t["(-)"]=t.symmetricDifference=t.symdiff=t.xor,t.fnFilter=t.filterFn=t.stdFilter,t.complement=t.abscomp=t.absoluteComplement}(cytoscape),function(e){"use strict";e.fn.eles({isNode:function(){return"nodes"===this.group()},isEdge:function(){return"edges"===this.group()},isLoop:function(){return this.isEdge()&&this.source().id()===this.target().id()},isSimple:function(){return this.isEdge()&&this.source().id()!==this.target().id()},group:function(){var e=this[0];return e?e._private.group:void 0}})}(cytoscape),function(e){"use strict";e.fn.eles({each:function(t){if(e.is.fn(t))for(var r=0;r<this.length;r++){var i=this[r],n=t.apply(i,[r,i]);if(n===!1)break}return this},forEach:function(t,r){if(e.is.fn(t))for(var i=0;i<this.length;i++){var n=this[i],a=r?t.apply(r,[n,i,this]):t(n,i,this);if(a===!1)break}return this},toArray:function(){for(var e=[],t=0;t<this.length;t++)e.push(this[t]);return e},slice:function(t,r){var i=[],n=this.length;null==r&&(r=n),null==t&&(t=0),0>t&&(t=n+t),0>r&&(r=n+r);for(var a=t;a>=0&&r>a&&n>a;a++)i.push(this[a]);return new e.Collection(this.cy(),i)},size:function(){return this.length},eq:function(t){return this[t]||new e.Collection(this.cy())},first:function(){return this[0]||new e.Collection(this.cy())},last:function(){return this[this.length-1]||new e.Collection(this.cy())},empty:function(){return 0===this.length},nonempty:function(){return!this.empty()},sort:function(t){if(!e.is.fn(t))return this;var r=this.cy(),i=this.toArray().sort(t);return new e.Collection(r,i)},sortByZIndex:function(){return this.sort(e.Collection.zIndexSort)},zDepth:function(){var e=this[0];if(!e)return void 0;var t=e._private,r=t.group;if("nodes"===r){var i=t.data.parent?e.parents().size():0;return e.isParent()?i:Number.MAX_VALUE}var n=t.source,a=t.target,o=n.zDepth(),s=a.zDepth();return Math.max(o,s,0)}}),e.Collection.zIndexSort=function(e,t){var r=e.cy(),i=e._private,n=t._private,a=i.style["z-index"].value-n.style["z-index"].value,o=0,s=0,l=r.hasCompoundNodes(),u="nodes"===i.group,c="edges"===i.group,d="nodes"===n.group,h="edges"===n.group;l&&(o=e.zDepth(),s=t.zDepth());var p=o-s,v=0===p;return v?u&&h?1:c&&d?-1:0===a?i.index-n.index:a:p}}(cytoscape),function(e){"use strict";e.fn.eles({layoutPositions:function(t,r,i){var n=this.nodes(),a=this.cy();if(t.trigger({type:"layoutstart",layout:t}),r.animate){for(var o=0;o<n.length;o++){var s=n[o],l=o===n.length-1,u=i.call(s,o,s),c=s.position();e.is.number(c.x)&&e.is.number(c.y)||s.silentPosition({x:0,y:0}),s.animate({position:u},{duration:r.animationDuration,step:l?function(){r.fit&&a.fit(r.eles,r.padding)}:void 0,complete:l?function(){null!=r.zoom&&a.zoom(r.zoom),r.pan&&a.pan(r.pan),r.fit&&a.fit(r.eles,r.padding),t.one("layoutstop",r.stop),t.trigger({type:"layoutstop",layout:t})}:void 0})}t.one("layoutready",r.ready),t.trigger({type:"layoutready",layout:t})}else n.positions(i),r.fit&&a.fit(r.eles,r.padding),null!=r.zoom&&a.zoom(r.zoom),r.pan&&a.pan(r.pan),t.one("layoutready",r.ready),t.trigger({type:"layoutready",layout:t}),t.one("layoutstop",r.stop),t.trigger({type:"layoutstop",layout:t});return this},layout:function(t){var r=this.cy();return r.layout(e.util.extend({},t,{eles:this})),this},makeLayout:function(t){var r=this.cy();return r.makeLayout(e.util.extend({},t,{eles:this}))}}),e.elesfn.createLayout=e.elesfn.makeLayout}(cytoscape),function(e){"use strict";e.fn.eles({updateStyle:function(e){var t=this._private.cy;if(!t.styleEnabled())return this;if(t._private.batchingStyle){for(var r=t._private.batchStyleEles,i=0;i<this.length;i++){var n=this[i];r.ids[n._private.id]||r.push(n)}return this}var a=t.style();e=e||void 0===e?!0:!1,a.apply(this);var o=this.updateCompoundBounds(),s=o.length>0?this.add(o):this;return e?s.rtrigger("style"):s.trigger("style"),this},updateMappers:function(e){var t=this._private.cy,r=t.style();if(e=e||void 0===e?!0:!1,!t.styleEnabled())return this;r.updateMappers(this);var i=this.updateCompoundBounds(),n=i.length>0?this.add(i):this;return e?n.rtrigger("style"):n.trigger("style"),this},renderedCss:function(e){var t=this.cy();if(!t.styleEnabled())return this;var r=this[0];if(r){var i=r.cy().style().getRenderedStyle(r);return void 0===e?i:i[e]}},css:function(t,r){var i=this.cy();if(!i.styleEnabled())return this;var n=!1,a=i.style();if(e.is.plainObject(t)){var o=t;a.applyBypass(this,o,n);var s=this.updateCompoundBounds(),l=s.length>0?this.add(s):this;l.rtrigger("style")}else if(e.is.string(t)){if(void 0===r){var u=this[0];return u?u._private.style[t].strValue:void 0}a.applyBypass(this,t,r,n);var s=this.updateCompoundBounds(),l=s.length>0?this.add(s):this;l.rtrigger("style")}else if(void 0===t){var u=this[0];return u?a.getRawStyle(u):void 0}return this},removeCss:function(e){var t=this.cy();if(!t.styleEnabled())return this;var r=!1,i=t.style(),n=this;if(void 0===e)for(var a=0;a<n.length;a++){var o=n[a];i.removeAllBypasses(o,r)}else{e=e.split(/\s+/);for(var a=0;a<n.length;a++){var o=n[a];i.removeBypasses(o,e,r)}}var s=this.updateCompoundBounds(),l=s.length>0?this.add(s):this;return l.rtrigger("style"),this},show:function(){return this.css("display","element"),this},hide:function(){return this.css("display","none"),this},visible:function(){var e=this.cy();if(!e.styleEnabled())return!0;var t=this[0],r=e.hasCompoundNodes();if(t){var i=t._private.style;if("visible"!==i.visibility.value||"element"!==i.display.value)return!1;if("nodes"===t._private.group){if(!r)return!0;var n=t._private.data.parent?t.parents():null;if(n)for(var a=0;a<n.length;a++){var o=n[a],s=o._private.style,l=s.visibility.value,u=s.display.value;if("visible"!==l||"element"!==u)return!1}return!0}var c=t._private.source,d=t._private.target;return c.visible()&&d.visible()}},hidden:function(){var e=this[0];return e?!e.visible():void 0},effectiveOpacity:function(){var e=this.cy();if(!e.styleEnabled())return 1;var t=e.hasCompoundNodes(),r=this[0];if(r){var i=r._private,n=i.style.opacity.value;if(!t)return n;var a=i.data.parent?r.parents():null;if(a)for(var o=0;o<a.length;o++){var s=a[o],l=s._private.style.opacity.value;n=l*n}return n}},transparent:function(){var e=this.cy();if(!e.styleEnabled())return!1;var t=this[0],r=t.cy().hasCompoundNodes();return t?r?0===t.effectiveOpacity():0===t._private.style.opacity.value:void 0},isFullAutoParent:function(){var e=this.cy();if(!e.styleEnabled())return!1;var t=this[0];if(t){var r="auto"===t._private.style.width.value,i="auto"===t._private.style.height.value;return t.isParent()&&r&&i}},backgrounding:function(){var e=this.cy();if(!e.styleEnabled())return!1;var t=this[0];return t._private.backgrounding?!0:!1}}),e.elesfn.bypass=e.elesfn.style=e.elesfn.css,e.elesfn.renderedStyle=e.elesfn.renderedCss,e.elesfn.removeBypass=e.elesfn.removeStyle=e.elesfn.removeCss}(cytoscape),function(e){"use strict";function t(t){return function(){var r=arguments,i=[];if(2===r.length){var n=r[0],a=r[1];this.bind(t.event,n,a)}else if(1===r.length){var a=r[0];this.bind(t.event,a)}else if(0===r.length){for(var o=0;o<this.length;o++){var s=this[o],l=!t.ableField||s._private[t.ableField],u=s._private[t.field]!=t.value;if(t.overrideAble){var c=t.overrideAble(s);if(void 0!==c&&(l=c,!c))return this}l&&(s._private[t.field]=t.value,u&&i.push(s))}var d=e.Collection(this.cy(),i);d.updateStyle(),d.trigger(t.event)}return this}}function r(r){e.elesfn[r.field]=function(){var e=this[0];if(e){if(r.overrideField){var t=r.overrideField(e);if(void 0!==t)return t}return e._private[r.field]}},e.elesfn[r.on]=t({event:r.on,field:r.field,ableField:r.ableField,overrideAble:r.overrideAble,value:!0}),e.elesfn[r.off]=t({event:r.off,field:r.field,ableField:r.ableField,overrideAble:r.overrideAble,value:!1})}r({field:"locked",overrideField:function(e){return e.cy().autolock()?!0:void 0},on:"lock",off:"unlock"}),r({field:"grabbable",overrideField:function(e){return e.cy().autoungrabify()?!1:void 0},on:"grabify",off:"ungrabify"}),r({field:"selected",ableField:"selectable",overrideAble:function(e){return e.cy().autounselectify()?!1:void 0},on:"select",off:"unselect"}),r({field:"selectable",overrideField:function(e){return e.cy().autounselectify()?!1:void 0},on:"selectify",off:"unselectify"}),e.elesfn.deselect=e.elesfn.unselect,e.elesfn.grabbed=function(){var e=this[0];return e?e._private.grabbed:void 0},r({field:"active",on:"activate",off:"unactivate"}),e.elesfn.inactive=function(){var e=this[0];return e?!e._private.active:void 0}}(cytoscape),function(e){"use strict";function t(t){return function(r){for(var i=[],n=this._private.cy,a=0;a<this.length;a++){var o=this[a],s=o._private[t.attr];s&&i.push(s)}return new e.Collection(n,i,{unique:!0}).filter(r)}}function r(t){return function(r){var i=[],n=this._private.cy,a=t||{};e.is.string(r)&&(r=n.$(r));for(var o=this._private.ids,s=r._private.ids,l=0;l<r.length;l++)for(var u=r[l]._private.edges,c=0;c<u.length;c++){var d=u[c],h=d._private.data,p=o[h.source]&&s[h.target],v=s[h.source]&&o[h.target],f=p||v;if(f){if(a.thisIs){if("source"===a.thisIs&&!p)continue;if("target"===a.thisIs&&!v)continue}i.push(d)}}return new e.Collection(n,i,{unique:!0})}}function i(t){var r={codirected:!1};return t=e.util.extend({},r,t),function(r){for(var i=this._private.cy,n=[],a=this.edges(),o=t,s=0;s<a.length;s++)for(var l=a[s],u=l.source()[0],c=u.id(),d=l.target()[0],h=d.id(),p=u._private.edges,v=0;v<p.length;v++){var f=p[v],g=f._private.data,y=g.target,m=g.source,x=y===h&&m===c,b=c===y&&h===m;(o.codirected&&x||!o.codirected&&(x||b))&&n.push(f)}return new e.Collection(i,n,{unique:!0}).filter(r)}}e.fn.eles({roots:function(t){for(var r=this,i=[],n=0;n<r.length;n++){var a=r[n];if(a.isNode()){var o=a.connectedEdges(function(){return this.data("target")===a.id()&&this.data("source")!==a.id()}).length>0;o||i.push(a)}}return new e.Collection(this._private.cy,i,{unique:!0}).filter(t)},leaves:function(t){for(var r=this,i=[],n=0;n<r.length;n++){var a=r[n];if(a.isNode()){var o=a.connectedEdges(function(){return this.data("source")===a.id()&&this.data("target")!==a.id()}).length>0;o||i.push(a)}}return new e.Collection(this._private.cy,i,{unique:!0}).filter(t)},outgoers:function(t){for(var r=this,i=[],n=0;n<r.length;n++){var a=r[n],o=a.id();if(a.isNode())for(var s=a._private.edges,l=0;l<s.length;l++){var u=s[l],c=u._private.data.source,d=u._private.data.target;c===o&&d!==o&&(i.push(u),i.push(u.target()[0]))}}return new e.Collection(this._private.cy,i,{unique:!0}).filter(t)},successors:function(t){for(var r=this,i=[],n={};;){var a=r.outgoers();if(0===a.length)break;for(var o=!1,s=0;s<a.length;s++){var l=a[s],u=l.id();n[u]||(n[u]=!0,i.push(l),o=!0)}if(!o)break;r=a}return new e.Collection(this._private.cy,i,{unique:!0}).filter(t)},incomers:function(t){for(var r=this,i=[],n=0;n<r.length;n++){var a=r[n],o=a.id();if(a.isNode())for(var s=a._private.edges,l=0;l<s.length;l++){var u=s[l],c=u._private.data.source,d=u._private.data.target;d===o&&c!==o&&(i.push(u),i.push(u.source()[0]))}}return new e.Collection(this._private.cy,i,{unique:!0}).filter(t)},predecessors:function(t){for(var r=this,i=[],n={};;){var a=r.incomers();if(0===a.length)break;for(var o=!1,s=0;s<a.length;s++){var l=a[s],u=l.id();n[u]||(n[u]=!0,i.push(l),o=!0)}if(!o)break;r=a}return new e.Collection(this._private.cy,i,{unique:!0}).filter(t)}}),e.fn.eles({neighborhood:function(t){for(var r=[],i=this._private.cy,n=this.nodes(),a=0;a<n.length;a++)for(var o=n[a],s=o.connectedEdges(),l=0;l<s.length;l++){var u=s[l],c=u.connectedNodes().not(o);c.length>0&&r.push(c[0]),r.push(u[0])}return new e.Collection(i,r,{unique:!0}).filter(t)},closedNeighborhood:function(e){return this.neighborhood().add(this).filter(e)},openNeighborhood:function(e){return this.neighborhood(e)}}),e.elesfn.neighbourhood=e.elesfn.neighborhood,e.elesfn.closedNeighbourhood=e.elesfn.closedNeighborhood,e.elesfn.openNeighbourhood=e.elesfn.openNeighborhood,e.fn.eles({source:function(e){var t,r=this[0];return r&&(t=r._private.source),t&&e?t.filter(e):t},target:function(e){var t,r=this[0];return r&&(t=r._private.target),t&&e?t.filter(e):t},sources:t({attr:"source"}),targets:t({attr:"target"})}),e.fn.eles({edgesWith:r(),edgesTo:r({thisIs:"source"})}),e.fn.eles({connectedEdges:function(t){for(var r=[],i=this._private.cy,n=this,a=0;a<n.length;a++){var o=n[a];if(o.isNode())for(var s=o._private.edges,l=0;l<s.length;l++){var u=s[l];r.push(u)}}return new e.Collection(i,r,{unique:!0}).filter(t)},connectedNodes:function(t){for(var r=[],i=this._private.cy,n=this,a=0;a<n.length;a++){var o=n[a];o.isEdge()&&(r.push(o.source()[0]),r.push(o.target()[0]))}return new e.Collection(i,r,{unique:!0}).filter(t)},parallelEdges:i(),codirectedEdges:i({codirected:!0})})}(cytoscape),function(e){"use strict";e.fn.eles({fit:function(){},center:function(){}})}(cytoscape),function(e){"use strict";e.Minheap=function(t,r,i){return new e.Heap(t,r,e.Heap.minHeapComparator,i)},e.Maxheap=function(t,r,i){return new e.Heap(t,r,e.Heap.maxHeapComparator,i)},e.Heap=function(t,r,i,n){if("undefined"!=typeof i&&"undefined"!=typeof r){"undefined"==typeof n&&(n=e.Heap.idFn);var a,o,s,l=[],u={},c=[],d=0;for(r=this.getArgumentAsCollection(r,t),s=r.length,d=0;s>d;d+=1){if(l.push(n.call(t,r[d],d,r)),a=r[d].id(),u.hasOwnProperty(a))throw"ERROR: Multiple items with the same id found: "+a;u[a]=d,c.push(a)}for(this._private={cy:t,heap:l,pointers:u,elements:c,comparator:i,extractor:n,length:s},d=Math.floor(s/2);d>=0;d-=1)o=this.heapify(d);return o}},e.Heap.idFn=function(e){return e.id()},e.Heap.minHeapComparator=function(e,t){return e>=t},e.Heap.maxHeapComparator=function(e,t){return t>=e},e.fn.heap=function(t,r){for(var i in t){var n=t[i];e.Heap.prototype[i]=n}},e.heapfn=e.Heap.prototype,e.heapfn.size=function(){return this._private.length},e.heapfn.getArgumentAsCollection=function(t,r){var i;if("undefined"==typeof r&&(r=this._private.cy),e.is.elementOrCollection(t))i=t;else{for(var n=[],a=[].concat.apply([],[t]),o=0;o<a.length;o++){var s=a[o],l=r.getElementById(s);l.length>0&&n.push(l)}i=new e.Collection(r,n)}return i},e.heapfn.isHeap=function(){var e,t,r,i,n,a=this._private.heap,o=a.length,s=this._private.comparator;for(e=0;o>e;e+=1)if(t=2*e+1,r=t+1,i=o>t?s(a[t],a[e]):!0,n=o>r?s(a[r],a[e]):!0,!i||!n)return!1;return!0},e.heapfn.heapSwap=function(e,t){var r=this._private.heap,i=this._private.pointers,n=this._private.elements,a=r[e],o=n[e],s=n[e],l=n[t];r[e]=r[t],n[e]=n[t],i[s]=t,i[l]=e,r[t]=a,n[t]=o},e.heapfn.heapify=function(e,t){var r,i,n,a,o,s,l,u=0,c=!1;for("undefined"==typeof t&&(t=!0),r=this._private.heap,u=r.length,s=this._private.comparator,i=e;!c;)t?(n=2*i+1,a=n+1,o=i,u>n&&!s(r[n],r[o])&&(o=n),u>a&&!s(r[a],r[o])&&(o=a),c=o===i,c||(this.heapSwap(o,i),i=o)):(l=Math.floor((i-1)/2),o=i,c=0>l||s(r[o],r[l]),c||(this.heapSwap(o,l),i=l))},e.heapfn.insert=function(e){var t,r,i,n,a,o=this.getArgumentAsCollection(e),s=o.length;for(a=0;s>a;a+=1){if(t=o[a],r=this._private.heap.length,i=this._private.extractor(t),n=t.id(),this._private.pointers.hasOwnProperty(n))throw"ERROR: Multiple items with the same id found: "+n;this._private.heap.push(i),this._private.elements.push(n),this._private.pointers[n]=r,this.heapify(r,!1)}this._private.length=this._private.heap.length},e.heapfn.getValueById=function(e){if(this._private.pointers.hasOwnProperty(e)){var t=this._private.pointers[e];return this._private.heap[t]}},e.heapfn.contains=function(e){for(var t=this.getArgumentAsCollection(e),r=0;r<t.length;r+=1){var i=t[r].id();if(!this._private.pointers.hasOwnProperty(i))return!1}return!0},e.heapfn.top=function(){return this._private.length>0?{value:this._private.heap[0],id:this._private.elements[0]}:void 0},e.heapfn.pop=function(){if(this._private.length>0){var e,t,r,i=this.top(),n=this._private.length-1;return this.heapSwap(0,n),e=this._private.elements[n],t=this._private.heap[n],r=e,this._private.heap.pop(),this._private.elements.pop(),this._private.length=this._private.heap.length,this._private.pointers[r]=void 0,this.heapify(0),i}},e.heapfn.findDirectionHeapify=function(e){var t=Math.floor((e-1)/2),r=this._private.heap,i=0>t||this._private.comparator(r[e],r[t]);this.heapify(e,i)},e.heapfn.edit=function(t,r){for(var i=this.getArgumentAsCollection(t),n=0;n<i.length;n+=1){var a=i[n].id(),o=this._private.pointers[a],s=this._private.heap[o];e.is.number(r)?this._private.heap[o]=r:e.is.fn(r)&&(this._private.heap[o]=r.call(this._private.cy,s,o)),this.findDirectionHeapify(o)}},e.heapfn.remove=function(e){for(var t=this.getArgumentAsCollection(e),r=0;r<t.length;r+=1){var i,n,a,o=t[r].id(),s=this._private.pointers[o],l=this._private.length-1;s!==l&&this.heapSwap(s,l),i=this._private.elements[l],n=this._private.heap[l],a=i,this._private.heap.pop(),this._private.elements.pop(),this._private.length=this._private.heap.length,this._private.pointers[a]=void 0,this.findDirectionHeapify(s)}return n}}(cytoscape),function(e){"use strict";function t(e){this.options=e,this.data={select:[void 0,void 0,void 0,void 0,0],renderer:this,cy:e.cy,container:e.cy.container(),canvases:new Array(t.CANVAS_LAYERS),contexts:new Array(t.CANVAS_LAYERS),canvasNeedsRedraw:new Array(t.CANVAS_LAYERS),bufferCanvases:new Array(t.BUFFER_COUNT),bufferContexts:new Array(t.CANVAS_LAYERS)},this.hoverData={down:null,last:null,downTime:null,triggerMode:null,dragging:!1,initialPan:[null,null],capture:!1},this.timeoutData={panTimeout:null},this.dragData={possibleDragElements:[]},this.touchData={start:null,capture:!1,startPosition:[null,null,null,null,null,null],singleTouchStartTime:null,singleTouchMoved:!0,now:[null,null,null,null,null,null],earlier:[null,null,null,null,null,null]},this.zoomData={freeToZoom:!1,lastPointerX:null},this.redraws=0,this.showFps=e.showFps,this.bindings=[],this.data.canvasContainer=document.createElement("div");var r=this.data.canvasContainer.style;r.position="absolute",r.zIndex="0",r.overflow="hidden",this.data.container.appendChild(this.data.canvasContainer);for(var i=0;i<t.CANVAS_LAYERS;i++)this.data.canvases[i]=document.createElement("canvas"),this.data.contexts[i]=this.data.canvases[i].getContext("2d"),this.data.canvases[i].style.position="absolute",this.data.canvases[i].setAttribute("data-id","layer"+i),this.data.canvases[i].style.zIndex=String(t.CANVAS_LAYERS-i),this.data.canvasContainer.appendChild(this.data.canvases[i]),this.data.canvasNeedsRedraw[i]=!1;this.data.topCanvas=this.data.canvases[0],this.data.canvases[t.NODE].setAttribute("data-id","layer"+t.NODE+"-node"),this.data.canvases[t.SELECT_BOX].setAttribute("data-id","layer"+t.SELECT_BOX+"-selectbox"),this.data.canvases[t.DRAG].setAttribute("data-id","layer"+t.DRAG+"-drag");for(var i=0;i<t.BUFFER_COUNT;i++)this.data.bufferCanvases[i]=document.createElement("canvas"),this.data.bufferContexts[i]=this.data.bufferCanvases[i].getContext("2d"),this.data.bufferCanvases[i].style.position="absolute",this.data.bufferCanvases[i].setAttribute("data-id","buffer"+i),this.data.bufferCanvases[i].style.zIndex=String(-i-1),this.data.bufferCanvases[i].style.visibility="hidden";this.hideEdgesOnViewport=e.hideEdgesOnViewport,this.hideLabelsOnViewport=e.hideLabelsOnViewport,this.textureOnViewport=e.textureOnViewport,this.wheelSensitivity=e.wheelSensitivity,this.motionBlurEnabled=e.motionBlur,this.forcedPixelRatio=e.pixelRatio,this.motionBlur=!0,this.motionBlurOpacity=e.motionBlurOpacity,this.motionBlurTransparency=1-this.motionBlurOpacity,this.motionBlurPxRatio=1,this.mbPxRBlurry=1,this.minMbLowQualFrames=4,this.fullQualityMb=!1,this.clearedForMotionBlur=[],this.tapThreshold=e.tapThreshold,this.tapThreshold2=e.tapThreshold*e.tapThreshold,this.tapholdDuration=500,this.load()}t.CANVAS_LAYERS=3,t.SELECT_BOX=0,t.DRAG=1,t.NODE=2,t.BUFFER_COUNT=3,t.TEXTURE_BUFFER=0,t.MOTIONBLUR_BUFFER_NODE=1,t.MOTIONBLUR_BUFFER_DRAG=2,t.panOrBoxSelectDelay=400,t.isTouch=e.is.touch();var r="undefined"!=typeof Path2D;t.usePaths=function(){return r},t.prototype.notify=function(r){var i;i=e.is.array(r.type)?r.type:[r.type];for(var n=0;n<i.length;n++){var a=i[n];switch(a){case"destroy":return void this.destroy();case"add":case"remove":case"load":this.updateNodesCache(),this.updateEdgesCache();break;case"viewport":this.data.canvasNeedsRedraw[t.SELECT_BOX]=!0;break;case"style":this.updateCachedZSortedEles()}("load"===a||"resize"===a)&&(this.invalidateContainerClientCoordsCache(),this.matchCanvasSize(this.data.container))}this.data.canvasNeedsRedraw[t.NODE]=!0,this.data.canvasNeedsRedraw[t.DRAG]=!0,this.redraw()},t.prototype.destroy=function(){this.destroyed=!0;for(var e=0;e<this.bindings.length;e++){var t=this.bindings[e],r=t;r.target.removeEventListener(r.event,r.handler,r.useCapture)}this.removeObserver&&this.removeObserver.disconnect(),this.labelCalcDiv&&document.body.removeChild(this.labelCalcDiv)};for(var i in e.math)t.prototype[i]=e.math[i];e("renderer","canvas",t)}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t.prototype,i=t.arrowShapes={};

t.arrowShapeHeight=.3;var n=function(e,t,r,i,n,a,o,s){var l=r-n/2,u=r+n/2,c=i-a/2,d=i+a/2;return e>=l&&u>=e&&t>=c&&d>=t},a=function(e,t,r,i,n){i=-i;var a=e*Math.cos(i)-t*Math.sin(i),o=e*Math.sin(i)+t*Math.cos(i),s=a*r,l=o*r,u=s+n.x,c=l+n.y;return{x:u,y:c}};i.arrow={_points:[-.15,-.3,0,0,.15,-.3],collide:function(t,r,n,a,o,s,l,u){var c=i.arrow._points;return e.math.pointInsidePolygon(t,r,c,n,a,o,s,l,u)},roughCollide:n,draw:function(e,t,r,n){for(var o=i.arrow._points,s=0;s<o.length/2;s++){var l=a(o[2*s],o[2*s+1],t,r,n);e.lineTo(l.x,l.y)}},spacing:function(e){return 0},gap:function(e){return 2*e._private.style.width.pxValue}},i.triangle=i.arrow,i["triangle-backcurve"]={_ctrlPt:[0,-.15],collide:function(t,r,n,a,o,s,l,u){var c=i.triangle._points;return e.math.pointInsidePolygon(t,r,c,n,a,o,s,l,u)},roughCollide:n,draw:function(e,t,r,n){for(var o,s=i.triangle._points,l=0;l<s.length/2;l++){var u=a(s[2*l],s[2*l+1],t,r,n);0===l&&(o=u),e.lineTo(u.x,u.y)}var c=this._ctrlPt,d=a(c[0],c[1],t,r,n);e.quadraticCurveTo(d.x,d.y,o.x,o.y)},spacing:function(e){return 0},gap:function(e){return 2*e._private.style.width.pxValue}},i["triangle-tee"]={_points:[-.15,-.3,0,0,.15,-.3,-.15,-.3],_pointsTee:[-.15,-.4,-.15,-.5,.15,-.5,.15,-.4],collide:function(t,r,n,a,o,s,l,u){var c=i["triangle-tee"]._points,d=i["triangle-tee"]._pointsTee,h=e.math.pointInsidePolygon(t,r,d,n,a,o,s,l,u)||e.math.pointInsidePolygon(t,r,c,n,a,o,s,l,u);return h},roughCollide:n,draw:function(e,t,r,n){for(var o=i["triangle-tee"]._points,s=0;s<o.length/2;s++){var l=a(o[2*s],o[2*s+1],t,r,n);e.lineTo(l.x,l.y)}var u=i["triangle-tee"]._pointsTee,c=a(u[0],u[1],t,r,n);e.moveTo(c.x,c.y);for(var s=0;s<u.length/2;s++){var l=a(u[2*s],u[2*s+1],t,r,n);e.lineTo(l.x,l.y)}},spacing:function(e){return 0},gap:function(e){return 2*e._private.style.width.pxValue}},i["half-triangle-overshot"]={_points:[0,-.25,-.5,-.25,.5,.25],leavePathOpen:!0,matchEdgeWidth:!0,collide:function(t,r,i,n,a,o,s,l){var u=this._points;return e.math.pointInsidePolygon(t,r,u,i,n,a,o,s,l)},roughCollide:n,draw:function(e,t,r,i){for(var n=this._points,o=0;o<n.length/2;o++){var s=a(n[2*o],n[2*o+1],t,r,i);e.lineTo(s.x,s.y)}},spacing:function(e){return 0},gap:function(e){return 2*e._private.style.width.pxValue}},i.none={collide:function(e,t,r,i,n,a,o,s){return!1},roughCollide:function(e,t,r,i,n,a,o,s){return!1},draw:function(e){},spacing:function(e){return 0},gap:function(e){return 0}},i.circle={_baseRadius:.15,collide:function(e,t,r,n,a,o,s,l){if(a!=o){var u=(o+l)/(a+l);return t/=u,n/=u,Math.pow(r-e,2)+Math.pow(n-t,2)<=Math.pow((a+l)*i.circle._baseRadius,2)}return Math.pow(r-e,2)+Math.pow(n-t,2)<=Math.pow((a+l)*i.circle._baseRadius,2)},roughCollide:n,draw:function(e,t,r,n){e.arc(n.x,n.y,i.circle._baseRadius*t,0,2*Math.PI,!1)},spacing:function(e){return r.getArrowWidth(e._private.style.width.pxValue)*i.circle._baseRadius},gap:function(e){return 2*e._private.style.width.pxValue}},i.inhibitor={_points:[-.25,0,-.25,-.1,.25,-.1,.25,0],collide:function(t,r,n,a,o,s,l,u){var c=i.inhibitor._points;return e.math.pointInsidePolygon(t,r,c,n,a,o,s,l,u)},roughCollide:n,draw:function(e,t,r,n){for(var o=i.inhibitor._points,s=0;s<o.length/2;s++){var l=a(o[2*s],o[2*s+1],t,r,n);e.lineTo(l.x,l.y)}},spacing:function(e){return 1},gap:function(e){return 1}},i.tee=i.inhibitor,i.square={_points:[-.15,0,.15,0,.15,-.3,-.15,-.3],collide:function(t,r,n,a,o,s,l,u){var c=i.square._points;return e.math.pointInsidePolygon(t,r,c,n,a,o,s,l,u)},roughCollide:n,draw:function(e,t,r,n){for(var o=i.square._points,s=0;s<o.length/2;s++){var l=a(o[2*s],o[2*s+1],t,r,n);e.lineTo(l.x,l.y)}},spacing:function(e){return 0},gap:function(e){return 2*e._private.style.width.pxValue}},i.diamond={_points:[-.15,-.15,0,-.3,.15,-.15,0,0],collide:function(t,r,n,a,o,s,l,u){var c=i.diamond._points;return e.math.pointInsidePolygon(t,r,c,n,a,o,s,l,u)},roughCollide:n,draw:function(e,t,r,n){for(var o=i.diamond._points,s=0;s<o.length/2;s++){var l=a(o[2*s],o[2*s+1],t,r,n);e.lineTo(l.x,l.y)}},spacing:function(e){return 0},gap:function(e){return e._private.style.width.pxValue}}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t.prototype;r.getCachedNodes=function(){var e=this.data,t=this.data.cy;return null==e.cache&&(e.cache={}),null==e.cache.cachedNodes&&(e.cache.cachedNodes=t.nodes()),e.cache.cachedNodes},r.updateNodesCache=function(){var e=this.data,t=this.data.cy;null==e.cache&&(e.cache={}),e.cache.cachedNodes=t.nodes()},r.getCachedEdges=function(){var e=this.data,t=this.data.cy;return null==e.cache&&(e.cache={}),null==e.cache.cachedEdges&&(e.cache.cachedEdges=t.edges()),e.cache.cachedEdges},r.updateEdgesCache=function(){var e=this.data,t=this.data.cy;null==e.cache&&(e.cache={}),e.cache.cachedEdges=t.edges()}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t.prototype;r.projectIntoViewport=function(e,t){var r=this.findContainerClientCoords(),i=r[0],n=r[1],a=e-i,o=t-n;return a-=this.data.cy.pan().x,o-=this.data.cy.pan().y,a/=this.data.cy.zoom(),o/=this.data.cy.zoom(),[a,o]},r.findContainerClientCoords=function(){var e=this.data.container,t=this.containerBB=this.containerBB||e.getBoundingClientRect();return[t.left,t.top,t.right-t.left,t.bottom-t.top]},r.invalidateContainerClientCoordsCache=function(){this.containerBB=null},r.findNearestElement=function(r,i,n){function a(e){var a=e.outerWidth(),o=e.outerHeight(),l=a/2,c=o/2,d=e._private.position;if(d.x-l<=r&&r<=d.x+l&&d.y-c<=i&&i<=d.y+c){var h=!n||e.visible()&&!e.transparent();if(n&&!h)return;var p=t.nodeShapes[s.getNodeShape(e)],f=e._private.style["border-width"].pxValue/2;p.checkPoint(r,i,f,a+v,o+v,d.x,d.y)&&u.push(e)}}function o(o){var l,c=o._private.rscratch,d=o._private.style,v=d.width.pxValue,f=v*v,g=2*v,y=o._private.source,m=o._private.target,x=!1,b=function(){if(void 0!==l)return l;if(!n)return l=!0,!0;var e=o.visible()&&!o.transparent();return e?(l=!0,!0):(l=!1,!1)};if("self"===c.edgeType||"compound"===c.edgeType)((x=e.math.inBezierVicinity(r,i,c.startX,c.startY,c.cp2ax,c.cp2ay,c.selfEdgeMidX,c.selfEdgeMidY,f))&&b()&&f+p>e.math.sqDistanceToQuadraticBezier(r,i,c.startX,c.startY,c.cp2ax,c.cp2ay,c.selfEdgeMidX,c.selfEdgeMidY)||(x=e.math.inBezierVicinity(r,i,c.selfEdgeMidX,c.selfEdgeMidY,c.cp2cx,c.cp2cy,c.endX,c.endY,f))&&b()&&f+p>e.math.sqDistanceToQuadraticBezier(r,i,c.selfEdgeMidX,c.selfEdgeMidY,c.cp2cx,c.cp2cy,c.endX,c.endY))&&u.push(o);else if("haystack"===c.edgeType){var w=d["haystack-radius"].value,_=w/2,E=m._private.position,S=m.width(),D=m.height(),k=y._private.position,P=y.width(),C=y.height(),T=k.x+c.source.x*P*_,M=k.y+c.source.y*C*_,B=E.x+c.target.x*S*_,N=E.y+c.target.y*D*_;(x=e.math.inLineVicinity(r,i,T,M,B,N,g))&&b()&&f+p>e.math.sqDistanceToFiniteLine(r,i,T,M,B,N)&&u.push(o)}else"straight"===c.edgeType?(x=e.math.inLineVicinity(r,i,c.startX,c.startY,c.endX,c.endY,g))&&b()&&f+p>e.math.sqDistanceToFiniteLine(r,i,c.startX,c.startY,c.endX,c.endY)&&u.push(o):"bezier"===c.edgeType&&(x=e.math.inBezierVicinity(r,i,c.startX,c.startY,c.cp2x,c.cp2y,c.endX,c.endY,f))&&b()&&f+p>e.math.sqDistanceToQuadraticBezier(r,i,c.startX,c.startY,c.cp2x,c.cp2y,c.endX,c.endY)&&u.push(o);if(x&&b()&&0===u.length||u[u.length-1]!==o){var I=t.arrowShapes[d["source-arrow-shape"].value],O=t.arrowShapes[d["target-arrow-shape"].value],y=y||o._private.source,m=m||o._private.target,E=m._private.position,k=y._private.position,z=s.getArrowWidth(d.width.pxValue),L=s.getArrowHeight(d.width.pxValue),R=z,V=L;(I.roughCollide(r,i,c.arrowStartX,c.arrowStartY,z,L,[c.arrowStartX-k.x,c.arrowStartY-k.y],0)&&I.collide(r,i,c.arrowStartX,c.arrowStartY,z,L,[c.arrowStartX-k.x,c.arrowStartY-k.y],0)||O.roughCollide(r,i,c.arrowEndX,c.arrowEndY,R,V,[c.arrowEndX-E.x,c.arrowEndY-E.y],0)&&O.collide(r,i,c.arrowEndX,c.arrowEndY,R,V,[c.arrowEndX-E.x,c.arrowEndY-E.y],0))&&u.push(o)}h&&u.length>0&&u[u.length-1]===o&&(a(y),a(m))}for(var s=this,l=this.getCachedZSortedEles(),u=[],c=t.isTouch,d=this.data.cy.zoom(),h=this.data.cy.hasCompoundNodes(),p=(c?256:32)/d,v=(c?16:0)/d,f=l.length-1;f>=0;f--){var g=l[f];if(u.length>0)break;"nodes"===g._private.group?a(l[f]):o(l[f])}return u.length>0?u[u.length-1]:null},r.getAllInBox=function(r,i,n,a){var o=this.getCachedNodes(),s=this.getCachedEdges(),l=[],u=Math.min(r,n),c=Math.max(r,n),d=Math.min(i,a),h=Math.max(i,a);r=u,n=c,i=d,a=h;for(var p,v=0;v<o.length;v++){var f=o[v]._private.position,g=this.getNodeShape(o[v]),y=this.getNodeWidth(o[v]),m=this.getNodeHeight(o[v]),x=o[v]._private.style["border-width"].pxValue/2,b=t.nodeShapes[g];b.intersectBox(r,i,n,a,y,m,f.x,f.y,x)&&l.push(o[v])}for(var v=0;v<s.length;v++){var w=s[v]._private.rscratch;if("self"==s[v]._private.rscratch.edgeType&&((p=e.math.boxInBezierVicinity(r,i,n,a,w.startX,w.startY,w.cp2ax,w.cp2ay,w.endX,w.endY,s[v]._private.style.width.pxValue))&&(2==p||1==p&&e.math.checkBezierInBox(r,i,n,a,w.startX,w.startY,w.cp2ax,w.cp2ay,w.endX,w.endY,s[v]._private.style.width.pxValue))||(p=e.math.boxInBezierVicinity(r,i,n,a,w.startX,w.startY,w.cp2cx,w.cp2cy,w.endX,w.endY,s[v]._private.style.width.pxValue))&&(2==p||1==p&&e.math.checkBezierInBox(r,i,n,a,w.startX,w.startY,w.cp2cx,w.cp2cy,w.endX,w.endY,s[v]._private.style.width.pxValue)))&&l.push(s[v]),"bezier"==w.edgeType&&(p=e.math.boxInBezierVicinity(r,i,n,a,w.startX,w.startY,w.cp2x,w.cp2y,w.endX,w.endY,s[v]._private.style.width.pxValue))&&(2==p||1==p&&e.math.checkBezierInBox(r,i,n,a,w.startX,w.startY,w.cp2x,w.cp2y,w.endX,w.endY,s[v]._private.style.width.pxValue))&&l.push(s[v]),"straight"==w.edgeType&&(p=e.math.boxInBezierVicinity(r,i,n,a,w.startX,w.startY,.5*w.startX+.5*w.endX,.5*w.startY+.5*w.endY,w.endX,w.endY,s[v]._private.style.width.pxValue))&&(2==p||1==p&&e.math.checkStraightEdgeInBox(r,i,n,a,w.startX,w.startY,w.endX,w.endY,s[v]._private.style.width.pxValue))&&l.push(s[v]),"haystack"==w.edgeType){var _=s[v].target()[0],E=_.position(),S=s[v].source()[0],D=S.position(),k=D.x+w.source.x,P=D.y+w.source.y,C=E.x+w.target.x,T=E.y+w.target.y,M=k>=r&&n>=k&&P>=i&&a>=P,B=C>=r&&n>=C&&T>=i&&a>=T;M&&B&&l.push(s[v])}}return l},r.getNodeWidth=function(e){return e.width()},r.getNodeHeight=function(e){return e.height()},r.getNodeShape=function(e){var t=e._private.style.shape.value;return e.isParent()?"rectangle"===t||"roundrectangle"===t?t:"rectangle":t},r.getNodePadding=function(e){var t=e._private.style["padding-left"].pxValue,r=e._private.style["padding-right"].pxValue,i=e._private.style["padding-top"].pxValue,n=e._private.style["padding-bottom"].pxValue;return isNaN(t)&&(t=0),isNaN(r)&&(r=0),isNaN(i)&&(i=0),isNaN(n)&&(n=0),{left:t,right:r,top:i,bottom:n}},r.zOrderSort=e.Collection.zIndexSort,r.updateCachedZSortedEles=function(){this.getCachedZSortedEles(!0)},r.getCachedZSortedEles=function(e){var t=this.lastZOrderCachedNodes,r=this.lastZOrderCachedEdges,i=this.getCachedNodes(),n=this.getCachedEdges(),a=[];if(!e&&t&&r&&t===i&&r===n)a=this.cachedZSortedEles;else{for(var o=0;o<i.length;o++)i[o].visible()&&!i[o].transparent()&&a.push(i[o]);for(var o=0;o<n.length;o++)n[o].visible()&&!n[o].transparent()&&a.push(n[o]);a.sort(this.zOrderSort),this.cachedZSortedEles=a}return this.lastZOrderCachedNodes=i,this.lastZOrderCachedEdges=n,a},r.projectBezier=function(t){function r(e){a.push({x:i(e[0],e[2],e[4],.05),y:i(e[1],e[3],e[5],.05)}),a.push({x:i(e[0],e[2],e[4],.25),y:i(e[1],e[3],e[5],.25)}),a.push({x:i(e[0],e[2],e[4],.4),y:i(e[1],e[3],e[5],.4)});var t={x:i(e[0],e[2],e[4],.5),y:i(e[1],e[3],e[5],.5)};a.push(t),"self"===n.edgeType||"compound"===n.edgeType?(n.midX=n.selfEdgeMidX,n.midY=n.selfEdgeMidY):(n.midX=t.x,n.midY=t.y),a.push({x:i(e[0],e[2],e[4],.6),y:i(e[1],e[3],e[5],.6)}),a.push({x:i(e[0],e[2],e[4],.75),y:i(e[1],e[3],e[5],.75)}),a.push({x:i(e[0],e[2],e[4],.95),y:i(e[1],e[3],e[5],.95)})}var i=e.math.qbezierAt,n=t._private.rscratch,a=t._private.rstyle.bezierPts=[];"self"===n.edgeType?(r([n.startX,n.startY,n.cp2ax,n.cp2ay,n.selfEdgeMidX,n.selfEdgeMidY]),r([n.selfEdgeMidX,n.selfEdgeMidY,n.cp2cx,n.cp2cy,n.endX,n.endY])):"bezier"===n.edgeType&&r([n.startX,n.startY,n.cp2x,n.cp2y,n.endX,n.endY])},r.recalculateNodeLabelProjection=function(e){var t=e._private.style.content.strValue;if(t&&!t.match(/^\s+$/)){var r,i,n=e.outerWidth(),a=e.outerHeight(),o=e._private.position,s=e._private.style["text-halign"].strValue,l=e._private.style["text-valign"].strValue,u=e._private.rscratch,c=e._private.rstyle;switch(s){case"left":r=o.x-n/2;break;case"right":r=o.x+n/2;break;default:r=o.x}switch(l){case"top":i=o.y-a/2;break;case"bottom":i=o.y+a/2;break;default:i=o.y}u.labelX=r,u.labelY=i,c.labelX=r,c.labelY=i,this.applyLabelDimensions(e)}},r.recalculateEdgeLabelProjection=function(t){var r=t._private.style.content.strValue;if(r&&!r.match(/^\s+$/)){var i,n,a,o,s=t._private,l=s.rscratch,u=s.rstyle;if("self"==l.edgeType)a=l.selfEdgeMidX,o=l.selfEdgeMidY;else if("straight"==l.edgeType)a=(l.startX+l.endX)/2,o=(l.startY+l.endY)/2;else if("bezier"==l.edgeType)a=e.math.qbezierAt(l.startX,l.cp2x,l.endX,.5),o=e.math.qbezierAt(l.startY,l.cp2y,l.endY,.5);else if("haystack"==l.edgeType){var c=l.haystackPts;a=(c[0]+c[2])/2,o=(c[1]+c[3])/2}i=a,n=o,l.labelX=i,l.labelY=n,u.labelX=i,u.labelY=n,this.applyLabelDimensions(t)}},r.applyLabelDimensions=function(e){var t=e._private.rscratch,r=e._private.rstyle,i=this.getLabelText(e),n=this.calculateLabelDimensions(e,i);r.labelWidth=n.width,t.labelWidth=n.width,r.labelHeight=n.height,t.labelHeight=n.height},r.getLabelText=function(e){var t=e._private.style,r=e._private.style.content.strValue,i=t["text-transform"].value,n=e._private.rscratch;if("none"==i||("uppercase"==i?r=r.toUpperCase():"lowercase"==i&&(r=r.toLowerCase())),"wrap"===t["text-wrap"].value){if(n.labelWrapKey===n.labelKey)return n.labelWrapCachedText;for(var a=r.split("\n"),o=t["text-max-width"].pxValue,s=[],l=0;l<a.length;l++){var u=a[l],c=this.calculateLabelDimensions(e,u,"line="+u),d=c.width;if(d>o){for(var h=u.split(/\s+/),p="",v=0;v<h.length;v++){var f=h[v],g=0===p.length?f:p+" "+f,y=this.calculateLabelDimensions(e,g,"testLine="+g),m=y.width;o>=m?p+=f+" ":(s.push(p),p=f+" ")}p.match(/^\s+$/)||s.push(p)}else s.push(u)}n.labelWrapCachedLines=s,n.labelWrapCachedText=r=s.join("\n"),n.labelWrapKey=n.labelKey}return r},r.calculateLabelDimensions=function(e,t,r){var i=this,n=e._private.style,a=n["font-style"].strValue,o=n["font-size"].pxValue+"px",s=n["font-family"].strValue,l=n["font-weight"].strValue,u=e._private.labelKey;r&&(u+="$@$"+r);var c=i.labelDimCache||(i.labelDimCache={});if(c[u])return c[u];var d=this.labelCalcDiv;d||(d=this.labelCalcDiv=document.createElement("div"),document.body.appendChild(d));var h=d.style;return h.fontFamily=s,h.fontStyle=a,h.fontSize=o,h.fontWeight=l,h.position="absolute",h.left="-9999px",h.top="-9999px",h.zIndex="-1",h.visibility="hidden",h.pointerEvents="none",h.padding="0",h.lineHeight="1",h.whiteSpace="wrap"===n["text-wrap"].value?"pre":"normal",d.textContent=t,c[u]={width:d.clientWidth,height:d.clientHeight},c[u]},r.recalculateRenderedStyle=function(e){for(var t=[],r=[],i={},n=0;n<e.length;n++){var a=e[n],o=a._private,s=o.style,l=o.rscratch,u=o.rstyle,c=o.data.id,d=null!=l.boundingBoxKey&&o.boundingBoxKey===l.boundingBoxKey,h=null!=l.labelKey&&o.labelKey===l.labelKey,p=d&&h;if("nodes"===a._private.group){var v=o.position,f=null!=u.nodeX&&null!=u.nodeY&&v.x===u.nodeX&&v.y===u.nodeY,g=null!=u.nodeW&&u.nodeW===s.width.pxValue,y=null!=u.nodeH&&u.nodeH===s.height.pxValue;f&&p&&g&&y||r.push(a),u.nodeX=v.x,u.nodeY=v.y,u.nodeW=s.width.pxValue,u.nodeH=s.height.pxValue}else{var m=a._private.source._private.position,x=a._private.target._private.position,b=null!=u.srcX&&null!=u.srcY&&m.x===u.srcX&&m.y===u.srcY,w=null!=u.tgtX&&null!=u.tgtY&&x.x===u.tgtX&&x.y===u.tgtY,_=b&&w;if(!_||!p){var E=o.style["curve-style"].value;if("bezier"===E){if(!i[c]){t.push(a),i[c]=!0;for(var S=a.parallelEdges(),n=0;n<S.length;n++){var D=S[n],k=D._private.data.id;i[k]||(t.push(D),i[k]=!0)}}}else t.push(a)}u.srcX=m.x,u.srcY=m.y,u.tgtX=x.x,u.tgtY=x.y}l.boundingBoxKey=o.boundingBoxKey,l.labelKey=o.labelKey}this.recalculateEdgeProjections(t),this.recalculateLabelProjections(r,t)},r.recalculateLabelProjections=function(e,t){for(var r=0;r<e.length;r++)this.recalculateNodeLabelProjection(e[r]);for(var r=0;r<t.length;r++)this.recalculateEdgeLabelProjection(t[r])},r.recalculateEdgeProjections=function(e){this.findEdgeControlPoints(e)},r.findEdgeControlPoints=function(r){if(r&&0!==r.length){for(var i,n=this.data.cy,a=n.hasCompoundNodes(),o={},s=[],l=[],u=0;u<r.length;u++){var c=r[u],d=c._private.style,h="unbundled-bezier"===d["curve-style"].value;if("none"!==d.display.value)if("haystack"!==d["curve-style"].value){var p=c._private.data.source,v=c._private.data.target;i=p>v?v+"-"+p:p+"-"+v,h&&(i="unbundled"+c._private.data.id),null==o[i]&&(o[i]=[],s.push(i)),o[i].push(c),h&&(o[i].hasUnbundled=!0)}else l.push(c)}for(var f,g,y,m,x,b,w,_,E,S,D,k,P,C,T=0;T<s.length;T++){i=s[T];var M=o[i];if(M.sort(function(e,t){return e._private.index-t._private.index}),f=M[0]._private.source,g=M[0]._private.target,f._private.data.id>g._private.data.id){var B=f;f=g,g=B}if(y=f._private.position,m=g._private.position,x=this.getNodeWidth(f),b=this.getNodeHeight(f),w=this.getNodeWidth(g),_=this.getNodeHeight(g),E=t.nodeShapes[this.getNodeShape(f)],S=t.nodeShapes[this.getNodeShape(g)],D=f._private.style["border-width"].pxValue,k=g._private.style["border-width"].pxValue,C=!1,M.length>1&&f!==g||M.hasUnbundled){var N=E.intersectLine(y.x,y.y,x,b,m.x,m.y,D/2),I=S.intersectLine(m.x,m.y,w,_,y.x,y.y,k/2),O={x1:N[0],x2:I[0],y1:N[1],y2:I[1]},z=I[1]-N[1],L=I[0]-N[0],R=Math.sqrt(L*L+z*z),V={x:L,y:z},A={x:V.x/R,y:V.y/R};P={x:-A.y,y:A.x},(S.checkPoint(N[0],N[1],k/2,w,_,m.x,m.y)||E.checkPoint(I[0],I[1],D/2,x,b,y.x,y.y))&&(P={},C=!0)}for(var c,X,u=0;u<M.length;u++){c=M[u],X=c._private.rscratch;var F=X.lastEdgeIndex,Y=u,q=X.lastNumEdges,j=M.length,$=c._private.style,W=$["control-point-step-size"].pxValue,H=void 0!==$["control-point-distance"]?$["control-point-distance"].pxValue:void 0,Z=$["control-point-weight"].value,h="unbundled-bezier"===$["curve-style"].value,U=X.lastSrcCtlPtX,G=y.x,K=X.lastSrcCtlPtY,J=y.y,Q=X.lastSrcCtlPtW,ee=f.outerWidth(),te=X.lastSrcCtlPtH,re=f.outerHeight(),ie=X.lastTgtCtlPtX,ne=m.x,ae=X.lastTgtCtlPtY,oe=m.y,se=X.lastTgtCtlPtW,le=g.outerWidth(),ue=X.lastTgtCtlPtH,ce=g.outerHeight(),de=X.lastW,he=$["control-point-step-size"].pxValue;if(X.badBezier=C?!0:!1,U!==G||K!==J||Q!==ee||te!==re||ie!==ne||ae!==oe||se!==le||ue!==ce||de!==he||!(F===Y&&q===j||h)){if(X.lastSrcCtlPtX=G,X.lastSrcCtlPtY=J,X.lastSrcCtlPtW=ee,X.lastSrcCtlPtH=re,X.lastTgtCtlPtX=ne,X.lastTgtCtlPtY=oe,X.lastTgtCtlPtW=le,X.lastTgtCtlPtH=ce,X.lastEdgeIndex=Y,X.lastNumEdges=j,X.lastWidth=he,f===g){X.edgeType="self";var pe=u,ve=W;h&&(pe=0,ve=H),X.cp2ax=y.x,X.cp2ay=y.y-(1+Math.pow(b,1.12)/100)*ve*(pe/3+1),X.cp2cx=y.x-(1+Math.pow(x,1.12)/100)*ve*(pe/3+1),X.cp2cy=y.y,X.selfEdgeMidX=(X.cp2ax+X.cp2cx)/2,X.selfEdgeMidY=(X.cp2ay+X.cp2cy)/2}else if(a&&(f.isParent()||f.isChild()||g.isParent()||g.isChild())&&(f.parents().anySame(g)||g.parents().anySame(f))){X.edgeType="compound",X.badBezier=!1;var pe=u,ve=W;h&&(pe=0,ve=H);var fe=50,ge={x:y.x-x/2,y:y.y-b/2},ye={x:m.x-w/2,y:m.y-_/2},me=1;X.cp2ax=ge.x,X.compoundStretchA=Math.max(me,Math.log(.01*x)),X.cp2ay=ge.y-(1+Math.pow(fe,1.12)/100)*ve*(pe/3+1)*X.compoundStretchA,X.compoundStretchB=Math.max(me,Math.log(.01*w)),X.cp2cx=ye.x-(1+Math.pow(fe,1.12)/100)*ve*(pe/3+1)*X.compoundStretchB,X.cp2cy=ye.y,X.selfEdgeMidX=(X.cp2ax+X.cp2cx)/2,X.selfEdgeMidY=(X.cp2ay+X.cp2cy)/2}else if(M.length%2!==1||u!==Math.floor(M.length/2)||h){var xe,be=(.5-M.length/2+u)*W,we=e.math.signum(be);xe=h?H:void 0!==H?we*H:void 0;var _e=void 0!==xe?xe:be,Ee=1-Z,Se=Z,De=c._private.source!==f;De&&(Ee=Z,Se=1-Z);var ke={x:O.x1*Ee+O.x2*Se,y:O.y1*Ee+O.y2*Se};X.edgeType="bezier",X.cp2x=ke.x+P.x*_e,X.cp2y=ke.y+P.y*_e}else X.edgeType="straight";this.findEndpoints(c);var Pe=!e.is.number(X.startX)||!e.is.number(X.startY),Ce=!e.is.number(X.arrowStartX)||!e.is.number(X.arrowStartY),Te=!e.is.number(X.endX)||!e.is.number(X.endY),Me=!e.is.number(X.arrowEndX)||!e.is.number(X.arrowEndY),Be=3,Ne=this.getArrowWidth(c._private.style.width.pxValue)*t.arrowShapeHeight,Ie=Be*Ne,Oe=e.math.distance({x:X.cp2x,y:X.cp2y},{x:X.startX,y:X.startY}),ze=Ie>Oe,Le=e.math.distance({x:X.cp2x,y:X.cp2y},{x:X.endX,y:X.endY}),Re=Ie>Le;if("bezier"===X.edgeType){var Ve=!1;if(Pe||Ce||ze){Ve=!0;var Ae={x:X.cp2x-y.x,y:X.cp2y-y.y},Xe=Math.sqrt(Ae.x*Ae.x+Ae.y*Ae.y),Fe={x:Ae.x/Xe,y:Ae.y/Xe},Ye=Math.max(x,b),qe={x:X.cp2x+2*Fe.x*Ye,y:X.cp2y+2*Fe.y*Ye},je=E.intersectLine(y.x,y.y,x,b,qe.x,qe.y,D/2);ze?(X.cp2x=X.cp2x+Fe.x*(Ie-Oe),X.cp2y=X.cp2y+Fe.y*(Ie-Oe)):(X.cp2x=je[0]+Fe.x*Ie,X.cp2y=je[1]+Fe.y*Ie)}if(Te||Me||Re){Ve=!0;var Ae={x:X.cp2x-m.x,y:X.cp2y-m.y},Xe=Math.sqrt(Ae.x*Ae.x+Ae.y*Ae.y),Fe={x:Ae.x/Xe,y:Ae.y/Xe},Ye=Math.max(x,b),qe={x:X.cp2x+2*Fe.x*Ye,y:X.cp2y+2*Fe.y*Ye},$e=S.intersectLine(m.x,m.y,w,_,qe.x,qe.y,k/2);Re?(X.cp2x=X.cp2x+Fe.x*(Ie-Le),X.cp2y=X.cp2y+Fe.y*(Ie-Le)):(X.cp2x=$e[0]+Fe.x*Ie,X.cp2y=$e[1]+Fe.y*Ie)}Ve&&this.findEndpoints(c)}else"straight"===X.edgeType&&(X.midX=(G+ne)/2,X.midY=(J+oe)/2);this.projectBezier(c),this.recalculateEdgeLabelProjection(c)}}}for(var u=0;u<l.length;u++){var c=l[u],We=c._private,He=We.rscratch,X=He;if(!He.haystack){var Ze=2*Math.random()*Math.PI;He.source={x:Math.cos(Ze),y:Math.sin(Ze)};var Ze=2*Math.random()*Math.PI;He.target={x:Math.cos(Ze),y:Math.sin(Ze)}}var f=We.source,g=We.target,y=f._private.position,m=g._private.position,x=f.width(),w=g.width(),b=f.height(),_=g.height(),Ye=d["haystack-radius"].value,Ue=Ye/2;X.haystackPts=[X.source.x*x*Ue+y.x,X.source.y*b*Ue+y.y,X.target.x*w*Ue+m.x,X.target.y*_*Ue+m.y],He.edgeType="haystack",He.haystack=!0,this.recalculateEdgeLabelProjection(c)}return o}},r.findEndpoints=function(r){var i,n=r.source()[0],a=r.target()[0],o=r._private.style["target-arrow-shape"].value,s=r._private.style["source-arrow-shape"].value,l=a._private.style["border-width"].pxValue,u=n._private.style["border-width"].pxValue,c=r._private.rscratch;if("self"==c.edgeType||"compound"==c.edgeType){var d=[c.cp2cx,c.cp2cy];i=t.nodeShapes[this.getNodeShape(a)].intersectLine(a._private.position.x,a._private.position.y,this.getNodeWidth(a),this.getNodeHeight(a),d[0],d[1],l/2);var h=e.math.shortenIntersection(i,d,t.arrowShapes[o].spacing(r)),p=e.math.shortenIntersection(i,d,t.arrowShapes[o].gap(r));c.endX=p[0],c.endY=p[1],c.arrowEndX=h[0],c.arrowEndY=h[1];var d=[c.cp2ax,c.cp2ay];i=t.nodeShapes[this.getNodeShape(n)].intersectLine(n._private.position.x,n._private.position.y,this.getNodeWidth(n),this.getNodeHeight(n),d[0],d[1],u/2);var v=e.math.shortenIntersection(i,d,t.arrowShapes[s].spacing(r)),f=e.math.shortenIntersection(i,d,t.arrowShapes[s].gap(r));c.startX=f[0],c.startY=f[1],c.arrowStartX=v[0],c.arrowStartY=v[1]}else if("straight"==c.edgeType){i=t.nodeShapes[this.getNodeShape(a)].intersectLine(a._private.position.x,a._private.position.y,this.getNodeWidth(a),this.getNodeHeight(a),n.position().x,n.position().y,l/2),c.noArrowPlacement=0===i.length?!0:!1;var h=e.math.shortenIntersection(i,[n.position().x,n.position().y],t.arrowShapes[o].spacing(r)),p=e.math.shortenIntersection(i,[n.position().x,n.position().y],t.arrowShapes[o].gap(r));c.endX=p[0],c.endY=p[1],c.arrowEndX=h[0],c.arrowEndY=h[1],i=t.nodeShapes[this.getNodeShape(n)].intersectLine(n._private.position.x,n._private.position.y,this.getNodeWidth(n),this.getNodeHeight(n),a.position().x,a.position().y,u/2),c.noArrowPlacement=0===i.length?!0:!1;var v=e.math.shortenIntersection(i,[a.position().x,a.position().y],t.arrowShapes[s].spacing(r)),f=e.math.shortenIntersection(i,[a.position().x,a.position().y],t.arrowShapes[s].gap(r));c.startX=f[0],c.startY=f[1],c.arrowStartX=v[0],c.arrowStartY=v[1],c.badLine=e.is.number(c.startX)&&e.is.number(c.startY)&&e.is.number(c.endX)&&e.is.number(c.endY)?!1:!0}else if("bezier"==c.edgeType){var d=[c.cp2x,c.cp2y];i=t.nodeShapes[this.getNodeShape(a)].intersectLine(a._private.position.x,a._private.position.y,this.getNodeWidth(a),this.getNodeHeight(a),d[0],d[1],l/2);var h=e.math.shortenIntersection(i,d,t.arrowShapes[o].spacing(r)),p=e.math.shortenIntersection(i,d,t.arrowShapes[o].gap(r));c.endX=p[0],c.endY=p[1],c.arrowEndX=h[0],c.arrowEndY=h[1],i=t.nodeShapes[this.getNodeShape(n)].intersectLine(n._private.position.x,n._private.position.y,this.getNodeWidth(n),this.getNodeHeight(n),d[0],d[1],u/2);var v=e.math.shortenIntersection(i,d,t.arrowShapes[s].spacing(r)),f=e.math.shortenIntersection(i,d,t.arrowShapes[s].gap(r));c.startX=f[0],c.startY=f[1],c.arrowStartX=v[0],c.arrowStartY=v[1]}else if(c.isArcEdge)return},r.findEdges=function(e){for(var t=this.getCachedEdges(),r={},i=[],n=0;n<e.length;n++)r[e[n]._private.data.id]=e[n];for(var n=0;n<t.length;n++)(r[t[n]._private.data.source]||r[t[n]._private.data.target])&&i.push(t[n]);return i},r.getArrowWidth=r.getArrowHeight=function(e){var t=this.arrowWidthCache=this.arrowWidthCache||{},r=t[e];return r?r:(r=Math.max(Math.pow(13.37*e,.9),29),t[e]=r,r)}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t.prototype;r.drawEdge=function(e,r,i){var n=r._private.rscratch,a=t.usePaths();if(!n.badBezier&&("bezier"!==n.edgeType&&"straight"!==n.edgeType||!isNaN(n.startX))){var o=r._private.style;if(!(o.width.pxValue<=0)){var s=o["overlay-padding"].pxValue,l=o["overlay-opacity"].value,u=o["overlay-color"].value;if(i){if(0===l)return;this.strokeStyle(e,u[0],u[1],u[2],l),e.lineCap="round","self"!=r._private.rscratch.edgeType||a||(e.lineCap="butt")}else{var c=o["line-color"].value;this.strokeStyle(e,c[0],c[1],c[2],o.opacity.value),e.lineCap="butt"}var d,h,p,v;p=d=r._private.source,v=h=r._private.target;var f=o.width.pxValue+(i?2*s:0),g=i?"solid":o["line-style"].value;e.lineWidth=f;var y=o["shadow-blur"].pxValue,m=o["shadow-opacity"].value,x=o["shadow-color"].value,b=o["shadow-offset-x"].pxValue,w=o["shadow-offset-y"].pxValue;if(this.shadowStyle(e,x,i?0:m,y,b,w),"haystack"===n.edgeType)this.drawStyledEdge(r,e,n.haystackPts,g,f);else if("self"===n.edgeType||"compound"===n.edgeType){var _=r._private.rscratch,E=[_.startX,_.startY,_.cp2ax,_.cp2ay,_.selfEdgeMidX,_.selfEdgeMidY,_.selfEdgeMidX,_.selfEdgeMidY,_.cp2cx,_.cp2cy,_.endX,_.endY];this.drawStyledEdge(r,e,E,g,f)}else if("straight"===n.edgeType){var S=h._private.position.x-d._private.position.x,D=h._private.position.y-d._private.position.y,k=n.endX-n.startX,P=n.endY-n.startY;if(0>S*k+D*P)n.straightEdgeTooShort=!0;else{var _=n;this.drawStyledEdge(r,e,[_.startX,_.startY,_.endX,_.endY],g,f),n.straightEdgeTooShort=!1}}else{var _=n;this.drawStyledEdge(r,e,[_.startX,_.startY,_.cp2x,_.cp2y,_.endX,_.endY],g,f)}"haystack"===n.edgeType?this.drawArrowheads(e,r,i):n.noArrowPlacement!==!0&&void 0!==n.startX&&this.drawArrowheads(e,r,i),this.shadowStyle(e,"transparent",0)}}},r.drawStyledEdge=function(e,r,i,n,a){var o,s=e._private.rscratch,l=r,u=!1,c=t.usePaths();if(c){for(var d=i,h=s.pathCacheKey&&d.length===s.pathCacheKey.length,p=h,v=0;p&&v<d.length;v++)s.pathCacheKey[v]!==d[v]&&(p=!1);p?(o=r=s.pathCache,u=!0):(o=r=new Path2D,s.pathCacheKey=d,s.pathCache=o)}if(l.setLineDash)switch(n){case"dotted":l.setLineDash([1,1]);break;case"dashed":l.setLineDash([6,3]);break;case"solid":l.setLineDash([])}u||(r.beginPath&&r.beginPath(),r.moveTo(i[0],i[1]),6!==i.length||s.badBezier?12!==i.length||s.badBezier?4!==i.length||s.badLine||r.lineTo(i[2],i[3]):(r.quadraticCurveTo(i[2],i[3],i[4],i[5]),r.quadraticCurveTo(i[8],i[9],i[10],i[11])):r.quadraticCurveTo(i[2],i[3],i[4],i[5])),r=l,c?r.stroke(o):r.stroke(),r.setLineDash&&r.setLineDash([])},r.drawArrowheads=function(e,t,r){function i(r,i,n,a,o){var s=f[r+"-arrow-shape"].value;if("none"!==s){var l=e.globalCompositeOperation,u="hollow"===f[r+"-arrow-fill"].value?"both":"filled",c=f[r+"-arrow-fill"].value;"half-triangle-overshot"===s&&(c="hollow",u="hollow"),(1!==f.opacity.value||"hollow"===c)&&(e.globalCompositeOperation="destination-out",d.fillStyle(e,255,255,255,1),d.strokeStyle(e,255,255,255,1),d.drawArrowShape(t,r,e,u,f.width.pxValue,f[r+"-arrow-shape"].value,i,n,a,o),e.globalCompositeOperation=l);var h=f[r+"-arrow-color"].value;d.fillStyle(e,h[0],h[1],h[2],f.opacity.value),d.strokeStyle(e,h[0],h[1],h[2],f.opacity.value),d.drawArrowShape(t,r,e,c,f.width.pxValue,f[r+"-arrow-shape"].value,i,n,a,o)}}if(!r){var n,a,o,s,l,u,c=t._private.rscratch,d=this,h="haystack"===c.edgeType,p=t.source().position(),v=t.target().position();h?(o=c.haystackPts[0],s=c.haystackPts[1],l=c.haystackPts[2],u=c.haystackPts[3]):(o=c.arrowStartX,s=c.arrowStartY,l=c.arrowEndX,u=c.arrowEndY);var f=t._private.style;n=o-p.x,a=s-p.y,h||isNaN(o)||isNaN(s)||isNaN(n)||isNaN(a)||i("source",o,s,n,a);var g=c.midX,y=c.midY;h&&(g=(o+l)/2,y=(s+u)/2),n=o-l,a=s-u,"self"===c.edgeType&&(n=1,a=-1),isNaN(g)||isNaN(y)||i("mid-target",g,y,n,a),n*=-1,a*=-1,isNaN(g)||isNaN(y)||i("mid-source",g,y,n,a),n=l-v.x,a=u-v.y,h||isNaN(l)||isNaN(u)||isNaN(n)||isNaN(a)||i("target",l,u,n,a)}},r.drawArrowShape=function(e,r,i,n,a,o,s,l,u,c){var d,h=t.usePaths(),p=e._private.rscratch,v=!1,f=i,g={x:s,y:l},y=Math.asin(c/Math.sqrt(u*u+c*c));0>u?y+=Math.PI/2:y=-(Math.PI/2+y);var m=this.getArrowWidth(a),x=t.arrowShapes[o];if(h){var b=m+"$"+o+"$"+y+"$"+s+"$"+l;p.arrowPathCacheKey=p.arrowPathCacheKey||{},p.arrowPathCache=p.arrowPathCache||{};var w=p.arrowPathCacheKey[r]===b;w?(d=i=p.arrowPathCache[r],v=!0):(d=i=new Path2D,p.arrowPathCacheKey[r]=b,p.arrowPathCache[r]=d)}i.beginPath&&i.beginPath(),v||x.draw(i,m,y,g),!x.leavePathOpen&&i.closePath&&i.closePath(),i=f,("filled"===n||"both"===n)&&(h?i.fill(d):i.fill()),("hollow"===n||"both"===n)&&(i.lineWidth=x.matchEdgeWidth?a:1,i.lineJoin="miter",h?i.stroke(d):i.stroke())}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t.prototype;r.getCachedImage=function(e,t){var r=this,i=r.imageCache=r.imageCache||{};if(i[e]&&i[e].image)return i[e].image;var n=i[e]=i[e]||{},a=n.image=new Image;return a.addEventListener("load",t),a.src=e,a},r.drawInscribedImage=function(e,r,i){var n=this,a=i._private.position.x,o=i._private.position.y,s=i._private.style,l=s["background-fit"].value,u=s["background-position-x"],c=s["background-position-y"],d=s["background-repeat"].value,h=i.width(),p=i.height(),v=i._private.rscratch,f=s["background-clip"].value,g="node"===f,y=s["background-image-opacity"].value,m=r.width,x=r.height;if(0!==m&&0!==x){var b=s["background-width"];"auto"!==b.value&&(m="%"===b.units?b.value/100*h:b.pxValue);var w=s["background-height"];if("auto"!==w.value&&(x="%"===w.units?w.value/100*p:w.pxValue),0!==m&&0!==x){if("contain"===l){var _=Math.min(h/m,p/x);m*=_,x*=_}else if("cover"===l){var _=Math.max(h/m,p/x);m*=_,x*=_}var E=a-h/2;E+="%"===u.units?(h-m)*u.value/100:u.pxValue;var S=o-p/2;S+="%"===c.units?(p-x)*c.value/100:c.pxValue,v.pathCache&&(E-=a,S-=o,a=0,o=0);var D=e.globalAlpha;if(e.globalAlpha=y,"no-repeat"===d)g&&(e.save(),v.pathCache?e.clip(v.pathCache):(t.nodeShapes[n.getNodeShape(i)].drawPath(e,a,o,h,p),e.clip())),e.drawImage(r,0,0,r.width,r.height,E,S,m,x),g&&e.restore();else{var k=e.createPattern(r,d);e.fillStyle=k,t.nodeShapes[n.getNodeShape(i)].drawPath(e,a,o,h,p),e.translate(E,S),e.fill(),e.translate(-E,-S)}e.globalAlpha=D}}}}(cytoscape),function(e){"use strict";function t(e,t,r,i,n,a){var a=a||5;e.beginPath(),e.moveTo(t+a,r),e.lineTo(t+i-a,r),e.quadraticCurveTo(t+i,r,t+i,r+a),e.lineTo(t+i,r+n-a),e.quadraticCurveTo(t+i,r+n,t+i-a,r+n),e.lineTo(t+a,r+n),e.quadraticCurveTo(t,r+n,t,r+n-a),e.lineTo(t,r+a),e.quadraticCurveTo(t,r,t+a,r),e.closePath(),e.fill()}var r=e("renderer","canvas"),i=r.prototype;i.drawEdgeText=function(t,r){var i=r._private.style.content.strValue;if(!(!i||i.match(/^\s+$/)||this.hideEdgesOnViewport&&(this.dragData.didDrag||this.pinching||this.hoverData.dragging||this.data.wheel||this.swipePanning))){var n=r._private.style["font-size"].pxValue*r.cy().zoom(),a=r._private.style["min-zoomed-font-size"].pxValue;if(!(a>n)){t.textAlign="center",t.textBaseline="middle";var o=r._private.rscratch;if(e.is.number(o.labelX)&&e.is.number(o.labelY)){var s,l,u,c=r._private.style,d="autorotate"===c["edge-text-rotation"].strValue;if(d){
switch(o.edgeType){case"haystack":l=o.haystackPts[2]-o.haystackPts[0],u=o.haystackPts[3]-o.haystackPts[1];break;default:l=o.endX-o.startX,u=o.endY-o.startY}s=Math.atan(u/l),t.translate(o.labelX,o.labelY),t.rotate(s),this.drawText(t,r,0,0),t.rotate(-s),t.translate(-o.labelX,-o.labelY)}else this.drawText(t,r,o.labelX,o.labelY)}}}},i.drawNodeText=function(t,r){var i=r._private.style.content.strValue;if(i&&!i.match(/^\s+$/)){var n=r._private.style["font-size"].pxValue*r.cy().zoom(),a=r._private.style["min-zoomed-font-size"].pxValue;if(!(a>n)){var o=r._private.style["text-halign"].strValue,s=r._private.style["text-valign"].strValue,l=r._private.rscratch;if(e.is.number(l.labelX)&&e.is.number(l.labelY)){switch(o){case"left":t.textAlign="right";break;case"right":t.textAlign="left";break;default:t.textAlign="center"}switch(s){case"top":t.textBaseline="bottom";break;case"bottom":t.textBaseline="top";break;default:t.textBaseline="middle"}this.drawText(t,r,l.labelX,l.labelY)}}}},i.getFontCache=function(e){var t;this.fontCaches=this.fontCaches||[];for(var r=0;r<this.fontCaches.length;r++)if(t=this.fontCaches[r],t.context===e)return t;return t={context:e},this.fontCaches.push(t),t},i.setupTextStyle=function(e,t){var r=t.effectiveOpacity(),i=t._private.style,n=i["font-style"].strValue,a=i["font-size"].pxValue+"px",o=i["font-family"].strValue,s=i["font-weight"].strValue,l=i["text-opacity"].value*i.opacity.value*r,u=i["text-outline-opacity"].value*l,c=i.color.value,d=i["text-outline-color"].value,h=i["text-shadow-blur"].pxValue,p=i["text-shadow-opacity"].value,v=i["text-shadow-color"].value,f=i["text-shadow-offset-x"].pxValue,g=i["text-shadow-offset-y"].pxValue,y=t._private.fontKey,m=this.getFontCache(e);m.key!==y&&(e.font=n+" "+s+" "+a+" "+o,m.key=y);var x=this.getLabelText(t);return e.lineJoin="round",this.fillStyle(e,c[0],c[1],c[2],l),this.strokeStyle(e,d[0],d[1],d[2],u),this.shadowStyle(e,v,p,h,f,g),x},i.drawText=function(e,r,i,n){var a=r._private,o=a.style,s=a.rstyle,l=a.rscratch,u=r.effectiveOpacity();if(0!==u&&0!==o["text-opacity"].value){var c=this.setupTextStyle(e,r),d=o["text-halign"].value,h=o["text-valign"].value;if(r.isEdge()&&(d="center",h="center"),null!=c&&!isNaN(i)&&!isNaN(n)){var p=o["text-background-opacity"].value;if((o["text-background-color"]||o["text-border-width"].pxValue>0)&&p>0){var v=o["text-border-width"].pxValue,f=4+v/2;r.isNode()&&("top"==h?n-=f:"bottom"==h&&(n+=f),"left"==d?i-=f:"right"==d&&(i+=f));var g=s.labelWidth,y=s.labelHeight,m=i;d&&("center"==d?m-=g/2:"left"==d&&(m-=g));var x=n;if(r.isNode()?"top"==h?x-=y:"center"==h&&(x-=y/2):x-=y/2,"autorotate"===o["edge-text-rotation"].strValue?(n=0,g+=4,m=i-g/2,x=n-y/2):(m-=f,x-=f,y+=2*f,g+=2*f),o["text-background-color"]){var b=e.fillStyle,w=o["text-background-color"].value;e.fillStyle="rgba("+w[0]+","+w[1]+","+w[2]+","+p*u+")";var _=o["text-background-shape"].strValue;"roundrectangle"==_?t(e,m,x,g,y,2):e.fillRect(m,x,g,y),e.fillStyle=b}if(v>0){var E=e.strokeStyle,S=e.lineWidth,D=o["text-border-color"].value,k=o["text-border-style"].value;if(e.strokeStyle="rgba("+D[0]+","+D[1]+","+D[2]+","+p*u+")",e.lineWidth=v,e.setLineDash)switch(k){case"dotted":e.setLineDash([1,1]);break;case"dashed":e.setLineDash([4,2]);break;case"double":e.lineWidth=v/4,e.setLineDash([]);break;case"solid":e.setLineDash([])}if(e.strokeRect(m,x,g,y),"double"===k){var P=v/2;e.strokeRect(m+P,x+P,g-2*P,y-2*P)}e.setLineDash&&e.setLineDash([]),e.lineWidth=S,e.strokeStyle=E}}var C=2*o["text-outline-width"].pxValue;if(C>0&&(e.lineWidth=C),"wrap"===o["text-wrap"].value){var T=l.labelWrapCachedLines,M=s.labelHeight/T.length;switch(h){case"top":n-=(T.length-1)*M;break;case"bottom":break;default:case"center":n-=(T.length-1)*M/2}for(var B=0;B<T.length;B++)C>0&&e.strokeText(T[B],i,n),e.fillText(T[B],i,n),n+=M}else C>0&&e.strokeText(c,i,n),e.fillText(c,i,n);this.shadowStyle(e,"transparent",0)}}}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t.prototype;r.drawNode=function(e,r,i){var n,a,o,s=this,l=r._private.style,u=r._private.rscratch,c=r._private,d=t.usePaths(),h=e,p=!1,v=l["overlay-padding"].pxValue,f=l["overlay-opacity"].value,g=l["overlay-color"].value;if(!i||0!==f){var y=r.effectiveOpacity();if(0!==y)if(n=this.getNodeWidth(r),a=this.getNodeHeight(r),e.lineWidth=l["border-width"].pxValue,void 0!==i&&i)f>0&&(this.fillStyle(e,g[0],g[1],g[2],f),t.nodeShapes.roundrectangle.drawPath(e,r._private.position.x,r._private.position.y,n+2*v,a+2*v),e.fill());else{var m,x=l["background-image"].value[2]||l["background-image"].value[1];if(void 0!==x){m=this.getCachedImage(x,function(){s.data.canvasNeedsRedraw[t.NODE]=!0,s.data.canvasNeedsRedraw[t.DRAG]=!0,s.drawingImage=!0,s.redraw()});var b=c.backgrounding;c.backgrounding=!m.complete,b!==c.backgrounding&&r.updateStyle(!1)}var w=l["background-color"].value,_=l["border-color"].value,E=l["border-style"].value;this.fillStyle(e,w[0],w[1],w[2],l["background-opacity"].value*l.opacity.value*y),this.strokeStyle(e,_[0],_[1],_[2],l["border-opacity"].value*l.opacity.value*y);var S=l["shadow-blur"].pxValue,D=l["shadow-opacity"].value,k=l["shadow-color"].value,P=l["shadow-offset-x"].pxValue,C=l["shadow-offset-y"].pxValue;if(this.shadowStyle(e,k,D,S,P,C),e.lineJoin="miter",e.setLineDash)switch(E){case"dotted":e.setLineDash([1,1]);break;case"dashed":e.setLineDash([4,2]);break;case"solid":case"double":e.setLineDash([])}var T=l.shape.strValue,M=r._private.position;if(d){var B=T+"$"+n+"$"+a;e.translate(M.x,M.y),u.pathCacheKey===B?(o=e=u.pathCache,p=!0):(o=e=new Path2D,u.pathCacheKey=B,u.pathCache=o)}if(!p){var N=M;d&&(N={x:0,y:0}),t.nodeShapes[this.getNodeShape(r)].drawPath(e,N.x,N.y,n,a)}e=h,d?e.fill(o):e.fill(),this.shadowStyle(e,"transparent",0),void 0!==x&&m.complete&&this.drawInscribedImage(e,m,r);var I=l["background-blacken"].value,O=l["border-width"].pxValue;if(this.hasPie(r)&&(this.drawPie(e,r),(0!==I||0!==O)&&(d||t.nodeShapes[this.getNodeShape(r)].drawPath(e,M.x,M.y,n,a))),I>0?(this.fillStyle(e,0,0,0,I),d?e.fill(o):e.fill()):0>I&&(this.fillStyle(e,255,255,255,-I),d?e.fill(o):e.fill()),O>0&&(d?e.stroke(o):e.stroke(),"double"===E)){e.lineWidth=l["border-width"].pxValue/3;var z=e.globalCompositeOperation;e.globalCompositeOperation="destination-out",d?e.stroke(o):e.stroke(),e.globalCompositeOperation=z}d&&e.translate(-M.x,-M.y),e.setLineDash&&e.setLineDash([])}}},r.hasPie=function(e){return e=e[0],e._private.hasPie},r.drawPie=function(r,i){i=i[0];var n=i._private.style["pie-size"],a=this.getNodeWidth(i),o=this.getNodeHeight(i),s=i._private.position.x,l=i._private.position.y,u=Math.min(a,o)/2,c=0,d=t.usePaths();d&&(s=0,l=0),"%"===n.units?u=u*n.value/100:void 0!==n.pxValue&&(u=n.pxValue/2);for(var h=1;h<=e.style.pieBackgroundN;h++){var p=i._private.style["pie-"+h+"-background-size"].value,v=i._private.style["pie-"+h+"-background-color"].value,f=i._private.style["pie-"+h+"-background-opacity"].value,g=p/100,y=1.5*Math.PI+2*Math.PI*c,m=2*Math.PI*g,x=y+m;0===p||c>=1||c+g>1||(r.beginPath(),r.moveTo(s,l),r.arc(s,l,u,y,x),r.closePath(),this.fillStyle(r,v[0],v[1],v[2],f),r.fill(),c+=g)}}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t,i=t.prototype;i.getPixelRatio=function(){var e=this.data.contexts[0];if(null!=this.forcedPixelRatio)return this.forcedPixelRatio;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},i.paintCache=function(e){for(var t,r=this.paintCaches=this.paintCaches||[],i=!0,n=0;n<r.length;n++)if(t=r[n],t.context===e){i=!1;break}return i&&(t={context:e},r.push(t)),t},i.fillStyle=function(e,t,r,i,n){e.fillStyle="rgba("+t+","+r+","+i+","+n+")"},i.strokeStyle=function(e,t,r,i,n){e.strokeStyle="rgba("+t+","+r+","+i+","+n+")"},i.shadowStyle=function(e,t,r,i,n,a){var o=this.data.cy.zoom();r>0?(e.shadowBlur=i*o,e.shadowColor="rgba("+t[0]+","+t[1]+","+t[2]+","+r+")",e.shadowOffsetX=n*o,e.shadowOffsetY=a*o):(e.shadowBlur=0,e.shadowColor="transparent")},i.matchCanvasSize=function(e){var i=this.data,n=e.clientWidth,a=e.clientHeight,o=this.getPixelRatio(),s=this.motionBlurPxRatio;(e===this.data.bufferCanvases[r.MOTIONBLUR_BUFFER_NODE]||e===this.data.bufferCanvases[r.MOTIONBLUR_BUFFER_DRAG])&&(o=s);var l,u=n*o,c=a*o;if(u!==this.canvasWidth||c!==this.canvasHeight){this.fontCaches=null;var d=i.canvasContainer;d.style.width=n+"px",d.style.height=a+"px";for(var h=0;h<t.CANVAS_LAYERS;h++)l=i.canvases[h],(l.width!==u||l.height!==c)&&(l.width=u,l.height=c,l.style.width=n+"px",l.style.height=a+"px");for(var h=0;h<t.BUFFER_COUNT;h++)l=i.bufferCanvases[h],(l.width!==u||l.height!==c)&&(l.width=u,l.height=c,l.style.width=n+"px",l.style.height=a+"px");this.textureMult=1,1>=o&&(l=i.bufferCanvases[t.TEXTURE_BUFFER],this.textureMult=2,l.width=u*this.textureMult,l.height=c*this.textureMult),this.canvasWidth=u,this.canvasHeight=c}},i.renderTo=function(e,t,r,i){this.redraw({forcedContext:e,forcedZoom:t,forcedPan:r,drawAllLayers:!0,forcedPxRatio:i})},i.timeToRender=function(){return this.redrawTotalTime/this.redrawCount},t.minRedrawLimit=1e3/60,t.maxRedrawLimit=1e3,t.motionBlurDelay=100,i.redraw=function(i){function n(){function i(e,t,r,i,n){var a=e.globalCompositeOperation;e.globalCompositeOperation="destination-out",c.fillStyle(e,255,255,255,c.motionBlurTransparency),e.fillRect(t,r,i,n),e.globalCompositeOperation=a}function n(e,t){var n,s,d,h;/*!r.fullQualityMb &&*/c.clearingMotionBlur||e!==p.bufferContexts[r.MOTIONBLUR_BUFFER_NODE]&&e!==p.bufferContexts[r.MOTIONBLUR_BUFFER_DRAG]?(n=P,s=D,d=c.canvasWidth,h=c.canvasHeight):(n={x:k.x*y,y:k.y*y},s=S*y,d=c.canvasWidth*y,h=c.canvasHeight*y),e.setTransform(1,0,0,1,0,0),"motionBlur"===t?i(e,0,0,d,h):a||void 0!==t&&!t||e.clearRect(0,0,d,h),o||(e.translate(n.x,n.y),e.scale(s,s)),u&&e.translate(u.x,u.y),l&&e.scale(l,l)}function b(e,t){for(var r=e.eles,i=0;i<r.length;i++){var n=r[i];n.isNode()?(c.drawNode(t,n),F||c.drawNodeText(t,n),c.drawNode(t,n,!0)):X||(c.drawEdge(t,n),F||c.drawEdgeText(t,n),c.drawEdge(t,n,!0))}}c.textureDrawLastFrame&&!f&&(v[r.NODE]=!0,v[r.SELECT_BOX]=!0);var _=c.getCachedEdges(),E=h.style()._private.coreStyle,S=h.zoom(),D=void 0!==l?l:S,k=h.pan(),P={x:k.x,y:k.y},T={zoom:S,pan:{x:k.x,y:k.y}},M=c.prevViewport,B=void 0===M||T.zoom!==M.zoom||T.pan.x!==M.pan.x||T.pan.y!==M.pan.y;B||x&&!m||(c.motionBlurPxRatio=1),u&&(P=u),D*=d,P.x*=d,P.y*=d;var N={drag:{nodes:[],edges:[],eles:[]},nondrag:{nodes:[],edges:[],eles:[]}};if(f||(c.textureDrawLastFrame=!1),f){c.textureDrawLastFrame=!0;var I;if(!c.textureCache){c.textureCache={},I=c.textureCache.bb=h.elements().boundingBox(),c.textureCache.texture=c.data.bufferCanvases[t.TEXTURE_BUFFER];var O=c.data.bufferContexts[t.TEXTURE_BUFFER];O.setTransform(1,0,0,1,0,0),O.clearRect(0,0,c.canvasWidth*c.textureMult,c.canvasHeight*c.textureMult),c.redraw({forcedContext:O,drawOnlyNodeLayer:!0,forcedPxRatio:d*c.textureMult});var T=c.textureCache.viewport={zoom:h.zoom(),pan:h.pan(),width:c.canvasWidth,height:c.canvasHeight};T.mpan={x:(0-T.pan.x)/T.zoom,y:(0-T.pan.y)/T.zoom}}v[r.DRAG]=!1,v[r.NODE]=!1;var z=p.contexts[r.NODE],L=c.textureCache.texture,T=c.textureCache.viewport;I=c.textureCache.bb,z.setTransform(1,0,0,1,0,0),g?i(z,0,0,T.width,T.height):z.clearRect(0,0,T.width,T.height);var R=E["outside-texture-bg-color"].value,V=E["outside-texture-bg-opacity"].value;c.fillStyle(z,R[0],R[1],R[2],V),z.fillRect(0,0,T.width,T.height);var S=h.zoom();n(z,!1),z.clearRect(T.mpan.x,T.mpan.y,T.width/T.zoom/d,T.height/T.zoom/d),z.drawImage(L,T.mpan.x,T.mpan.y,T.width/T.zoom/d,T.height/T.zoom/d)}else c.textureOnViewport&&!a&&(c.textureCache=null);var A=c.pinching||c.hoverData.dragging||c.swipePanning||c.data.wheelZooming||c.hoverData.draggingEles,X=c.hideEdgesOnViewport&&A,F=c.hideLabelsOnViewport&&A;if(v[r.DRAG]||v[r.NODE]||o||s){X||c.findEdgeControlPoints(_);for(var Y=c.getCachedZSortedEles(),q=h.extent(),j=0;j<Y.length;j++){var $,W=Y[j],I=a?null:W.boundingBox(),H=a?!0:e.math.boundingBoxesIntersect(q,I);H&&($=W._private.rscratch.inDragLayer?N.drag:N.nondrag,$.eles.push(W))}}var Z=[];if(Z[r.NODE]=!v[r.NODE]&&g&&!c.clearedForMotionBlur[r.NODE]||c.clearingMotionBlur,Z[r.NODE]&&(c.clearedForMotionBlur[r.NODE]=!0),Z[r.DRAG]=!v[r.DRAG]&&g&&!c.clearedForMotionBlur[r.DRAG]||c.clearingMotionBlur,Z[r.DRAG]&&(c.clearedForMotionBlur[r.DRAG]=!0),v[r.NODE]||o||s||Z[r.NODE]){var U=g&&!Z[r.NODE]&&1!==y,z=a||(U?c.data.bufferContexts[r.MOTIONBLUR_BUFFER_NODE]:p.contexts[r.NODE]),G=g&&!U?"motionBlur":void 0;v[r.DRAG]&&v[r.NODE]&&(G=!0),n(z,G),b(N.nondrag,z),o||g||(v[r.NODE]=!1)}if(!s&&(v[r.DRAG]||o||Z[r.DRAG])){var U=g&&!Z[r.DRAG]&&1!==y,z=a||(U?c.data.bufferContexts[r.MOTIONBLUR_BUFFER_DRAG]:p.contexts[r.DRAG]);n(z,g&&!U?"motionBlur":void 0),b(N.drag,z),o||g||(v[r.DRAG]=!1)}if(c.showFps||!s&&v[r.SELECT_BOX]&&!o){var z=a||p.contexts[r.SELECT_BOX];if(n(z),1==p.select[4]&&(c.hoverData.selecting||c.touchData.selecting)){var S=p.cy.zoom(),K=E["selection-box-border-width"].value/S;z.lineWidth=K,z.fillStyle="rgba("+E["selection-box-color"].value[0]+","+E["selection-box-color"].value[1]+","+E["selection-box-color"].value[2]+","+E["selection-box-opacity"].value+")",z.fillRect(p.select[0],p.select[1],p.select[2]-p.select[0],p.select[3]-p.select[1]),K>0&&(z.strokeStyle="rgba("+E["selection-box-border-color"].value[0]+","+E["selection-box-border-color"].value[1]+","+E["selection-box-border-color"].value[2]+","+E["selection-box-opacity"].value+")",z.strokeRect(p.select[0],p.select[1],p.select[2]-p.select[0],p.select[3]-p.select[1]))}if(p.bgActivePosistion&&!c.hoverData.selecting){var S=p.cy.zoom(),J=p.bgActivePosistion;z.fillStyle="rgba("+E["active-bg-color"].value[0]+","+E["active-bg-color"].value[1]+","+E["active-bg-color"].value[2]+","+E["active-bg-opacity"].value+")",z.beginPath(),z.arc(J.x,J.y,E["active-bg-size"].pxValue/S,0,2*Math.PI),z.fill()}var Q=c.averageRedrawTime;if(c.showFps&&Q){Q=Math.round(Q);var ee=Math.round(1e3/Q);z.setTransform(1,0,0,1,0,0),z.fillStyle="rgba(255, 0, 0, 0.75)",z.strokeStyle="rgba(255, 0, 0, 0.75)",z.lineWidth=1,z.fillText("1 frame = "+Q+" ms = "+ee+" fps",0,20);var te=60;z.strokeRect(0,30,250,20),z.fillRect(0,30,250*Math.min(ee/te,1),20)}o||(v[r.SELECT_BOX]=!1)}if(g&&1!==y){var re=p.contexts[r.NODE],ie=c.data.bufferCanvases[r.MOTIONBLUR_BUFFER_NODE],ne=p.contexts[r.DRAG],ae=c.data.bufferCanvases[r.MOTIONBLUR_BUFFER_DRAG],oe=function(e,t,r){e.setTransform(1,0,0,1,0,0),r||!w?e.clearRect(0,0,c.canvasWidth,c.canvasHeight):i(e,0,0,c.canvasWidth,c.canvasHeight);var n=y;e.drawImage(t,0,0,c.canvasWidth*n,c.canvasHeight*n,0,0,c.canvasWidth,c.canvasHeight)};(v[r.NODE]||Z[r.NODE])&&(oe(re,ie,Z[r.NODE]),v[r.NODE]=!1),(v[r.DRAG]||Z[r.DRAG])&&(oe(ne,ae,Z[r.DRAG]),v[r.DRAG]=!1)}var se=Date.now();void 0===c.averageRedrawTime&&(c.averageRedrawTime=se-C),void 0===c.redrawCount&&(c.redrawCount=0),c.redrawCount++,void 0===c.redrawTotalTime&&(c.redrawTotalTime=0),c.redrawTotalTime+=se-C,c.lastRedrawTime=se-C,c.averageRedrawTime=c.averageRedrawTime/2+(se-C)/2,c.currentlyDrawing=!1,c.prevViewport=T,c.clearingMotionBlur&&(c.clearingMotionBlur=!1,c.motionBlurCleared=!0,c.motionBlur=!0),g&&(c.motionBlurTimeout=setTimeout(function(){c.motionBlurTimeout=null,c.clearedForMotionBlur[r.NODE]=!1,c.clearedForMotionBlur[r.DRAG]=!1,c.motionBlur=!1,c.clearingMotionBlur=!f,c.mbFrames=0,v[r.NODE]=!0,v[r.DRAG]=!0,c.redraw()},t.motionBlurDelay)),c.drawingImage=!1}i=i||{};var a=i.forcedContext,o=i.drawAllLayers,s=i.drawOnlyNodeLayer,l=i.forcedZoom,u=i.forcedPan,c=this,d=void 0===i.forcedPxRatio?this.getPixelRatio():i.forcedPxRatio,h=c.data.cy,p=c.data,v=p.canvasNeedsRedraw,f=c.textureOnViewport&&!a&&(c.pinching||c.hoverData.dragging||c.swipePanning||c.data.wheelZooming),g=void 0!==i.motionBlur?i.motionBlur:c.motionBlur,y=c.motionBlurPxRatio,m=h.hasCompoundNodes(),x=c.hoverData.draggingEles,b=c.hoverData.selecting||c.touchData.selecting?!0:!1;g=g&&!a&&c.motionBlurEnabled&&!b;var w=g;!a&&c.motionBlurTimeout&&clearTimeout(c.motionBlurTimeout),!a&&this.redrawTimeout&&clearTimeout(this.redrawTimeout),this.redrawTimeout=null,void 0===this.averageRedrawTime&&(this.averageRedrawTime=0);var _=t.minRedrawLimit,E=t.maxRedrawLimit,S=this.averageRedrawTime;S=_>S?_:S,S=E>S?S:E,void 0===this.lastDrawTime&&(this.lastDrawTime=0);var D=Date.now(),k=D-this.lastDrawTime,P=k>=S;if(!a&&!c.clearingMotionBlur){if(!P||this.currentlyDrawing)return void(this.redrawTimeout=setTimeout(function(){c.redraw()},S));this.lastDrawTime=D,this.currentlyDrawing=!0}g&&(null==c.mbFrames&&(c.mbFrames=0),c.drawingImage||c.mbFrames++,c.mbFrames<3&&(w=!1),c.mbFrames>c.minMbLowQualFrames&&(c.motionBlurPxRatio=c.mbPxRBlurry)),c.clearingMotionBlur&&(c.motionBlurPxRatio=1);var C=Date.now();a?n():e.util.requestAnimationFrame(n),a||c.initrender||(c.initrender=!0,h.trigger("initrender")),a||h.triggerOnRender()}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t.prototype;r.drawPolygonPath=function(e,t,r,i,n,a){var o=i/2,s=n/2;e.beginPath&&e.beginPath(),e.moveTo(t+o*a[0],r+s*a[1]);for(var l=1;l<a.length/2;l++)e.lineTo(t+o*a[2*l],r+s*a[2*l+1]);e.closePath()},r.drawPolygon=function(e,t,r,i,n,a){this.drawPolygonPath(e,t,r,i,n,a),e.fill()},r.drawRoundRectanglePath=function(t,r,i,n,a,o){var s=n/2,l=a/2,u=e.math.getRoundRectangleRadius(n,a);t.beginPath&&t.beginPath(),t.moveTo(r,i-l),t.arcTo(r+s,i-l,r+s,i,u),t.arcTo(r+s,i+l,r,i+l,u),t.arcTo(r-s,i+l,r-s,i,u),t.arcTo(r-s,i-l,r,i-l,u),t.lineTo(r,i-l),t.closePath()},r.drawRoundRectangle=function(e,t,r,i,n,a){this.drawRoundRectanglePath(e,t,r,i,n,a),e.fill()}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t.prototype;r.createBuffer=function(e,t){var r=document.createElement("canvas");return r.width=e,r.height=t,[r,r.getContext("2d")]},r.bufferCanvasImage=function(t){var r=this.data,i=r.cy,n=i.elements().boundingBox(),a=t.full?Math.ceil(n.w):this.data.container.clientWidth,o=t.full?Math.ceil(n.h):this.data.container.clientHeight,s=1;if(void 0!==t.scale)a*=t.scale,o*=t.scale,s=t.scale;else if(e.is.number(t.maxWidth)||e.is.number(t.maxHeight)){var l=1/0,u=1/0;e.is.number(t.maxWidth)&&(l=s*t.maxWidth/a),e.is.number(t.maxHeight)&&(u=s*t.maxHeight/o),s=Math.min(l,u),a*=s,o*=s}var c=document.createElement("canvas");c.width=a,c.height=o,c.style.width=a+"px",c.style.height=o+"px";var d=c.getContext("2d");if(a>0&&o>0)if(d.clearRect(0,0,a,o),t.bg&&(d.fillStyle=t.bg,d.rect(0,0,a,o),d.fill()),d.globalCompositeOperation="source-over",t.full)this.redraw({forcedContext:d,drawAllLayers:!0,forcedZoom:s,forcedPan:{x:-n.x1*s,y:-n.y1*s},forcedPxRatio:1});else{var h=i.pan(),p={x:h.x*s,y:h.y*s},v=i.zoom()*s;this.redraw({forcedContext:d,drawAllLayers:!0,forcedZoom:v,forcedPan:p,forcedPxRatio:1})}return c},r.png=function(e){return this.bufferCanvasImage(e).toDataURL("image/png")},r.jpg=function(e){return this.bufferCanvasImage(e).toDataURL("image/jpeg")}}(cytoscape),function(e){"use strict";var t=e("renderer","canvas"),r=t,i=r.prototype;i.registerBinding=function(e,t,r,i){this.bindings.push({target:e,event:t,handler:r,useCapture:i}),e.addEventListener(t,r,i)},i.nodeIsDraggable=function(e){return 0!==e._private.style.opacity.value&&"visible"==e._private.style.visibility.value&&"element"==e._private.style.display.value&&!e.locked()&&e.grabbable()?!0:!1},i.load=function(){var t=this,i=function(e){var r;if(e.addToList&&t.data.cy.hasCompoundNodes()){if(!e.addToList.hasId){e.addToList.hasId={};for(var i=0;i<e.addToList.length;i++){var n=e.addToList[i];e.addToList.hasId[n.id()]=!0}}r=e.addToList.hasId}return r||{}},n=function(e,t){if(e._private.cy.hasCompoundNodes()&&(null!=t.inDragLayer||null!=t.addToList))for(var r=i(t),n=e.descendants(),a=0;a<n.size();a++){var o=n[a],s=o._private;t.inDragLayer&&(s.rscratch.inDragLayer=!0),t.addToList&&!r[o.id()]&&(t.addToList.push(o),r[o.id()]=!0,s.grabbed=!0);for(var l=s.edges,u=0;t.inDragLayer&&u<l.length;u++)l[u]._private.rscratch.inDragLayer=!0}},a=function(e,t){var r=e._private,a=i(t);t.inDragLayer&&(r.rscratch.inDragLayer=!0),t.addToList&&!a[e.id()]&&(t.addToList.push(e),a[e.id()]=!0,r.grabbed=!0);for(var o=r.edges,l=0;t.inDragLayer&&l<o.length;l++)o[l]._private.rscratch.inDragLayer=!0;n(e,t),s(e,{inDragLayer:t.inDragLayer})},o=function(e){if(e)for(var t=0;t<e.length;t++){var r=e[t]._private;if("nodes"===r.group){r.rscratch.inDragLayer=!1,r.grabbed=!1;for(var i=r.edges,n=0;n<i.length;n++)i[n]._private.rscratch.inDragLayer=!1;s(e[t],{inDragLayer:!1})}else"edges"===r.group&&(r.rscratch.inDragLayer=!1)}},s=function(e,t){if(null!=t.inDragLayer||null!=t.addToList){var r=e;if(e._private.cy.hasCompoundNodes()){for(;r.parent().nonempty();)r=r.parent()[0];if(r!=e){for(var n=r.descendants().merge(r).unmerge(e).unmerge(e.descendants()),a=n.connectedEdges(),o=i(t),s=0;s<n.size();s++)void 0!==t.inDragLayer&&(n[s]._private.rscratch.inDragLayer=t.inDragLayer),t.addToList&&!o[n[s].id()]&&(t.addToList.push(n[s]),o[n[s].id()]=!0,n[s]._private.grabbed=!0);for(var l=0;void 0!==t.inDragLayer&&l<a.length;l++)a[l]._private.rscratch.inDragLayer=t.inDragLayer}}}};"undefined"!=typeof MutationObserver?(t.removeObserver=new MutationObserver(function(e){for(var r=0;r<e.length;r++){var i=e[r],n=i.removedNodes;if(n)for(var a=0;a<n.length;a++){var o=n[a];if(o===t.data.container){t.destroy();break}}}}),t.removeObserver.observe(t.data.container.parentNode,{childList:!0})):t.registerBinding(t.data.container,"DOMNodeRemoved",function(e){t.destroy()}),t.registerBinding(window,"resize",e.util.debounce(function(e){t.invalidateContainerClientCoordsCache(),t.matchCanvasSize(t.data.container),t.data.canvasNeedsRedraw[r.NODE]=!0,t.redraw()},100));for(var l=function(e){t.registerBinding(e,"scroll",function(e){t.invalidateContainerClientCoordsCache()})},u=t.data.cy.container();l(u),u.parentNode;)u=u.parentNode;t.registerBinding(t.data.container,"contextmenu",function(e){e.preventDefault()});var c=function(){return 0!==t.data.select[4]};t.registerBinding(t.data.container,"mousedown",function(i){i.preventDefault(),t.hoverData.capture=!0,t.hoverData.which=i.which;var n=t.data.cy,o=t.projectIntoViewport(i.clientX,i.clientY),s=t.data.select,l=t.findNearestElement(o[0],o[1],!0),u=t.dragData.possibleDragElements;t.hoverData.mdownPos=o;var c=t.data.canvasNeedsRedraw,d=function(){t.hoverData.tapholdCancelled=!1,clearTimeout(t.hoverData.tapholdTimeout),t.hoverData.tapholdTimeout=setTimeout(function(){if(!t.hoverData.tapholdCancelled){var r=t.hoverData.down;r?r.trigger(new e.Event(i,{type:"taphold",cyPosition:{x:o[0],y:o[1]}})):n.trigger(new e.Event(i,{type:"taphold",cyPosition:{x:o[0],y:o[1]}}))}},t.tapholdDuration)};if(3==i.which){t.hoverData.cxtStarted=!0;var h=new e.Event(i,{type:"cxttapstart",cyPosition:{x:o[0],y:o[1]}});l?(l.activate(),l.trigger(h),t.hoverData.down=l):n.trigger(h),t.hoverData.downTime=(new Date).getTime(),t.hoverData.cxtDragged=!1}else if(1==i.which){if(l&&l.activate(),null!=l){if(t.nodeIsDraggable(l)){var p=new e.Event(i,{type:"grab",cyPosition:{x:o[0],y:o[1]}});if(l.isNode()&&!l.selected())u=t.dragData.possibleDragElements=[],a(l,{addToList:u}),l.trigger(p);else if(l.isNode()&&l.selected()){u=t.dragData.possibleDragElements=[];for(var v=n.$(function(){return this.isNode()&&this.selected()}),f=0;f<v.length;f++)t.nodeIsDraggable(v[f])&&a(v[f],{addToList:u});l.trigger(p)}c[r.NODE]=!0,c[r.DRAG]=!0}l.trigger(new e.Event(i,{type:"mousedown",cyPosition:{x:o[0],y:o[1]}})).trigger(new e.Event(i,{type:"tapstart",cyPosition:{x:o[0],y:o[1]}})).trigger(new e.Event(i,{type:"vmousedown",cyPosition:{x:o[0],y:o[1]}}))}else null==l&&n.trigger(new e.Event(i,{type:"mousedown",cyPosition:{x:o[0],y:o[1]}})).trigger(new e.Event(i,{type:"tapstart",cyPosition:{x:o[0],y:o[1]}})).trigger(new e.Event(i,{type:"vmousedown",cyPosition:{x:o[0],y:o[1]}}));if(t.hoverData.down=l,t.hoverData.downTime=(new Date).getTime(),null==l||l.isEdge()){s[4]=1;var g=Math.max(0,r.panOrBoxSelectDelay-(+new Date-t.hoverData.downTime));clearTimeout(t.bgActiveTimeout),n.boxSelectionEnabled()||l&&l.isEdge()?t.bgActiveTimeout=setTimeout(function(){l&&l.unactivate(),t.data.bgActivePosistion={x:o[0],y:o[1]},t.hoverData.dragging=!0,c[r.SELECT_BOX]=!0,t.redraw()},g):(t.data.bgActivePosistion={x:o[0],y:o[1]},c[r.SELECT_BOX]=!0,t.redraw())}d()}s[0]=s[2]=o[0],s[1]=s[3]=o[1]},!1),t.registerBinding(window,"mousemove",e.util.throttle(function(i){var n=!1,o=t.hoverData.capture;if(!o){var s=t.findContainerClientCoords();if(!(i.clientX>s[0]&&i.clientX<s[0]+t.canvasWidth&&i.clientY>s[1]&&i.clientY<s[1]+t.canvasHeight))return;for(var l=t.data.container,u=i.target,c=u.parentNode,d=!1;c;){if(c===l){d=!0;break}c=c.parentNode}if(!d)return}var h=t.data.cy,p=h.zoom(),v=t.projectIntoViewport(i.clientX,i.clientY),f=t.data.select,g=t.data.canvasNeedsRedraw,y=null;t.hoverData.draggingEles||(y=t.findNearestElement(v[0],v[1],!0));var m=t.hoverData.last,x=t.hoverData.down,b=[v[0]-f[2],v[1]-f[3]],w=t.dragData.possibleDragElements,_=f[2]-f[0],E=_*_,S=f[3]-f[1],D=S*S,k=E+D,P=k*p*p;t.hoverData.tapholdCancelled=!0;var C=function(){var e=t.hoverData.dragDelta=t.hoverData.dragDelta||[];0===e.length?(e.push(b[0]),e.push(b[1])):(e[0]+=b[0],e[1]+=b[1])};if(n=!0,null!=y?y.trigger(new e.Event(i,{type:"mousemove",cyPosition:{x:v[0],y:v[1]}})).trigger(new e.Event(i,{type:"vmousemove",cyPosition:{x:v[0],y:v[1]}})).trigger(new e.Event(i,{type:"tapdrag",cyPosition:{x:v[0],y:v[1]}})):null==y&&h.trigger(new e.Event(i,{type:"mousemove",cyPosition:{x:v[0],y:v[1]}})).trigger(new e.Event(i,{type:"vmousemove",cyPosition:{x:v[0],y:v[1]}})).trigger(new e.Event(i,{type:"tapdrag",cyPosition:{x:v[0],y:v[1]}})),3===t.hoverData.which){var T=new e.Event(i,{type:"cxtdrag",cyPosition:{x:v[0],y:v[1]}});x?x.trigger(T):h.trigger(T),t.hoverData.cxtDragged=!0,t.hoverData.cxtOver&&y===t.hoverData.cxtOver||(t.hoverData.cxtOver&&t.hoverData.cxtOver.trigger(new e.Event(i,{type:"cxtdragout",cyPosition:{x:v[0],y:v[1]}})),t.hoverData.cxtOver=y,y&&y.trigger(new e.Event(i,{type:"cxtdragover",cyPosition:{x:v[0],y:v[1]}})))}else if(t.hoverData.dragging){if(n=!0,h.panningEnabled()&&h.userPanningEnabled()){var M;if(t.hoverData.justStartedPan){var B=t.hoverData.mdownPos;M={x:(v[0]-B[0])*p,y:(v[1]-B[1])*p},t.hoverData.justStartedPan=!1}else M={x:b[0]*p,y:b[1]*p};h.panBy(M),t.hoverData.dragged=!0}v=t.projectIntoViewport(i.clientX,i.clientY)}else if(1==f[4]&&(null==x||x.isEdge())&&(!h.boxSelectionEnabled()||+new Date-t.hoverData.downTime>=r.panOrBoxSelectDelay)&&!t.hoverData.selecting&&P>=t.tapThreshold2&&h.panningEnabled()&&h.userPanningEnabled())t.hoverData.dragging=!0,t.hoverData.selecting=!1,t.hoverData.justStartedPan=!0,f[4]=0;else{if(h.boxSelectionEnabled()&&!t.hoverData.dragging&&Math.pow(f[2]-f[0],2)+Math.pow(f[3]-f[1],2)>7&&f[4]&&(clearTimeout(t.bgActiveTimeout),t.data.bgActivePosistion=void 0,t.hoverData.selecting=!0,g[r.SELECT_BOX]=!0,t.redraw()),x&&x.isEdge()&&x.active()&&x.unactivate(),y!=m&&(m&&(m.trigger(new e.Event(i,{type:"mouseout",cyPosition:{x:v[0],y:v[1]}})),m.trigger(new e.Event(i,{type:"tapdragout",cyPosition:{x:v[0],y:v[1]}}))),y&&(y.trigger(new e.Event(i,{type:"mouseover",cyPosition:{x:v[0],y:v[1]}})),y.trigger(new e.Event(i,{type:"tapdragover",cyPosition:{x:v[0],y:v[1]}}))),t.hoverData.last=y),x&&x.isNode()&&t.nodeIsDraggable(x))if(P>=t.tapThreshold2){var N=!t.dragData.didDrag;N&&(g[r.NODE]=!0),t.dragData.didDrag=!0;for(var I=[],O=0;O<w.length;O++){var z=w[O];if(t.hoverData.draggingEles||a(z,{inDragLayer:!0}),z.isNode()&&t.nodeIsDraggable(z)&&z.grabbed()){var L=z._private.position;if(I.push(z),e.is.number(b[0])&&e.is.number(b[1])&&(L.x+=b[0],L.y+=b[1],N)){var R=t.hoverData.dragDelta;e.is.number(R[0])&&e.is.number(R[1])&&(L.x+=R[0],L.y+=R[1])}}}t.hoverData.draggingEles=!0;var V=new e.Collection(h,I);V.updateCompoundBounds(),V.trigger("position drag"),g[r.DRAG]=!0,t.redraw()}else C();n=!0}return f[2]=v[0],f[3]=v[1],n?(i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault(),!1):void 0},1e3/30,{trailing:!0}),!1),t.registerBinding(window,"mouseup",function(i){var n=t.hoverData.capture;if(n){t.hoverData.capture=!1;var a=t.data.cy,s=t.projectIntoViewport(i.clientX,i.clientY),l=t.data.select,u=t.findNearestElement(s[0],s[1],!0),c=t.dragData.possibleDragElements,d=t.hoverData.down,h=i.shiftKey,p=t.data.canvasNeedsRedraw;if(t.data.bgActivePosistion&&(p[r.SELECT_BOX]=!0,t.redraw()),t.data.bgActivePosistion=void 0,clearTimeout(t.bgActiveTimeout),d&&d.unactivate(),3===t.hoverData.which){var v=new e.Event(i,{type:"cxttapend",cyPosition:{x:s[0],y:s[1]}});if(d?d.trigger(v):a.trigger(v),!t.hoverData.cxtDragged){var f=new e.Event(i,{type:"cxttap",cyPosition:{x:s[0],y:s[1]}});d?d.trigger(f):a.trigger(f)}t.hoverData.cxtDragged=!1,t.hoverData.which=null}else{if(null!=d||t.dragData.didDrag||t.hoverData.dragged||(a.$(function(){return this.selected()}).unselect(),c.length>0&&(p[r.NODE]=!0),t.dragData.possibleDragElements=c=[]),null!=u?u.trigger(new e.Event(i,{type:"mouseup",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(i,{type:"tapend",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(i,{type:"vmouseup",cyPosition:{x:s[0],y:s[1]}})):null==u&&a.trigger(new e.Event(i,{type:"mouseup",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(i,{type:"tapend",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(i,{type:"vmouseup",cyPosition:{x:s[0],y:s[1]}})),t.dragData.didDrag||t.hoverData.dragged||(null!=u?u.trigger(new e.Event(i,{type:"click",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(i,{type:"tap",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(i,{type:"vclick",cyPosition:{x:s[0],y:s[1]}})):null==u&&a.trigger(new e.Event(i,{type:"click",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(i,{type:"tap",cyPosition:{x:s[0],y:s[1]}})).trigger(new e.Event(i,{type:"vclick",cyPosition:{x:s[0],y:s[1]}}))),u!=d||t.dragData.didDrag||null!=u&&u._private.selectable&&(t.hoverData.dragging||("additive"===a.selectionType()||h?u.selected()?u.unselect():u.select():h||(a.$(":selected").unmerge(u).unselect(),u.select())),p[r.NODE]=!0),t.hoverData.selecting&&a.boxSelectionEnabled()&&Math.pow(l[2]-l[0],2)+Math.pow(l[3]-l[1],2)>7&&l[4]){var g=[],y=t.getAllInBox(l[0],l[1],l[2],l[3]);p[r.SELECT_BOX]=!0,y.length>0&&(p[r.NODE]=!0);for(var m=0;m<y.length;m++)y[m]._private.selectable&&g.push(y[m]);var x=new e.Collection(a,g);"additive"===a.selectionType()?x.select():(h||a.$(":selected").unmerge(x).unselect(),x.select()),t.redraw()}t.hoverData.dragging&&(t.hoverData.dragging=!1,p[r.SELECT_BOX]=!0,p[r.NODE]=!0,t.redraw()),l[4]||(p[r.DRAG]=!0,p[r.NODE]=!0,o(c),d&&d.trigger("free"))}l[4]=0,t.hoverData.down=null,t.hoverData.cxtStarted=!1,t.hoverData.draggingEles=!1,t.hoverData.selecting=!1,t.dragData.didDrag=!1,t.hoverData.dragged=!1,t.hoverData.dragDelta=[]}},!1);var d=function(e){if(!t.scrollingPage){var i=t.data.cy,n=t.projectIntoViewport(e.clientX,e.clientY),a=[n[0]*i.zoom()+i.pan().x,n[1]*i.zoom()+i.pan().y];if(t.hoverData.draggingEles||t.hoverData.dragging||t.hoverData.cxtStarted||c())return void e.preventDefault();if(i.panningEnabled()&&i.userPanningEnabled()&&i.zoomingEnabled()&&i.userZoomingEnabled()){e.preventDefault(),t.data.wheelZooming=!0,clearTimeout(t.data.wheelTimeout),t.data.wheelTimeout=setTimeout(function(){t.data.wheelZooming=!1,t.data.canvasNeedsRedraw[r.NODE]=!0,t.redraw()},150);var o=e.deltaY/-250||e.wheelDeltaY/1e3||e.wheelDelta/1e3;o*=t.wheelSensitivity;var s=1===e.deltaMode;s&&(o*=33),i.zoom({level:i.zoom()*Math.pow(10,o),renderedPosition:{x:a[0],y:a[1]}})}}};t.registerBinding(t.data.container,"wheel",d,!0),t.registerBinding(window,"scroll",function(e){t.scrollingPage=!0,clearTimeout(t.scrollingPageTimeout),t.scrollingPageTimeout=setTimeout(function(){t.scrollingPage=!1},250)},!0),t.registerBinding(t.data.container,"mouseout",function(r){var i=t.projectIntoViewport(r.clientX,r.clientY);t.data.cy.trigger(new e.Event(r,{type:"mouseout",cyPosition:{x:i[0],y:i[1]}}))},!1),t.registerBinding(t.data.container,"mouseover",function(r){var i=t.projectIntoViewport(r.clientX,r.clientY);t.data.cy.trigger(new e.Event(r,{type:"mouseover",cyPosition:{x:i[0],
y:i[1]}}))},!1);var h,p,v,f,g,y,m,x,b,w,_,E,S,D=function(e,t,r,i){return Math.sqrt((r-e)*(r-e)+(i-t)*(i-t))},k=function(e,t,r,i){return(r-e)*(r-e)+(i-t)*(i-t)};t.registerBinding(t.data.container,"touchstart",function(i){clearTimeout(this.threeFingerSelectTimeout),i.target!==t.data.link&&i.preventDefault(),t.touchData.capture=!0,t.data.bgActivePosistion=void 0;var n=t.data.cy,o=t.getCachedNodes(),s=t.getCachedEdges(),l=t.touchData.now,u=t.touchData.earlier,c=t.data.canvasNeedsRedraw;if(i.touches[0]){var d=t.projectIntoViewport(i.touches[0].clientX,i.touches[0].clientY);l[0]=d[0],l[1]=d[1]}if(i.touches[1]){var d=t.projectIntoViewport(i.touches[1].clientX,i.touches[1].clientY);l[2]=d[0],l[3]=d[1]}if(i.touches[2]){var d=t.projectIntoViewport(i.touches[2].clientX,i.touches[2].clientY);l[4]=d[0],l[5]=d[1]}if(i.touches[1]){var P=function(e){for(var t=0;t<e.length;t++)e[t]._private.grabbed=!1,e[t]._private.rscratch.inDragLayer=!1,e[t].active()&&e[t].unactivate()};P(o),P(s);var C=t.findContainerClientCoords();b=C[0],w=C[1],_=C[2],E=C[3],h=i.touches[0].clientX-b,p=i.touches[0].clientY-w,v=i.touches[1].clientX-b,f=i.touches[1].clientY-w,S=h>=0&&_>=h&&v>=0&&_>=v&&p>=0&&E>=p&&f>=0&&E>=f;var T=n.pan(),M=n.zoom();g=D(h,p,v,f),y=k(h,p,v,f),m=[(h+v)/2,(p+f)/2],x=[(m[0]-T.x)/M,(m[1]-T.y)/M];var B=200,N=B*B;if(N>y&&!i.touches[2]){var I=t.findNearestElement(l[0],l[1],!0),O=t.findNearestElement(l[2],l[3],!0);return I&&I.isNode()?(I.activate().trigger(new e.Event(i,{type:"cxttapstart",cyPosition:{x:l[0],y:l[1]}})),t.touchData.start=I):O&&O.isNode()?(O.activate().trigger(new e.Event(i,{type:"cxttapstart",cyPosition:{x:l[0],y:l[1]}})),t.touchData.start=O):(n.trigger(new e.Event(i,{type:"cxttapstart",cyPosition:{x:l[0],y:l[1]}})),t.touchData.start=null),t.touchData.start&&(t.touchData.start._private.grabbed=!1),t.touchData.cxt=!0,t.touchData.cxtDragged=!1,t.data.bgActivePosistion=void 0,void t.redraw()}}if(i.touches[2]);else if(i.touches[1]);else if(i.touches[0]){var z=t.findNearestElement(l[0],l[1],!0);if(null!=z){if(z.activate(),t.touchData.start=z,z.isNode()&&t.nodeIsDraggable(z)){var L=t.dragData.touchDragEles=[];if(c[r.NODE]=!0,c[r.DRAG]=!0,z.selected())for(var R=n.$(function(){return this.isNode()&&this.selected()}),V=0;V<R.length;V++){var A=R[V];t.nodeIsDraggable(A)&&a(A,{addToList:L})}else a(z,{addToList:L});z.trigger(new e.Event(i,{type:"grab",cyPosition:{x:l[0],y:l[1]}}))}z.trigger(new e.Event(i,{type:"touchstart",cyPosition:{x:l[0],y:l[1]}})).trigger(new e.Event(i,{type:"tapstart",cyPosition:{x:l[0],y:l[1]}})).trigger(new e.Event(i,{type:"vmousdown",cyPosition:{x:l[0],y:l[1]}}))}null==z&&(n.trigger(new e.Event(i,{type:"touchstart",cyPosition:{x:l[0],y:l[1]}})).trigger(new e.Event(i,{type:"tapstart",cyPosition:{x:l[0],y:l[1]}})).trigger(new e.Event(i,{type:"vmousedown",cyPosition:{x:l[0],y:l[1]}})),t.data.bgActivePosistion={x:d[0],y:d[1]},c[r.SELECT_BOX]=!0,t.redraw());for(var X=0;X<l.length;X++)u[X]=l[X],t.touchData.startPosition[X]=l[X];t.touchData.singleTouchMoved=!1,t.touchData.singleTouchStartTime=+new Date,clearTimeout(t.touchData.tapholdTimeout),t.touchData.tapholdTimeout=setTimeout(function(){t.touchData.singleTouchMoved!==!1||t.pinching||(t.touchData.start?t.touchData.start.trigger(new e.Event(i,{type:"taphold",cyPosition:{x:l[0],y:l[1]}})):(t.data.cy.trigger(new e.Event(i,{type:"taphold",cyPosition:{x:l[0],y:l[1]}})),n.$(":selected").unselect()))},t.tapholdDuration)}},!1),t.registerBinding(window,"touchmove",e.util.throttle(function(i){var n=t.data.select,o=t.touchData.capture;o&&i.preventDefault();var s=t.data.cy,l=t.touchData.now,u=t.touchData.earlier,c=s.zoom(),d=t.data.canvasNeedsRedraw;if(i.touches[0]){var m=t.projectIntoViewport(i.touches[0].clientX,i.touches[0].clientY);l[0]=m[0],l[1]=m[1]}if(i.touches[1]){var m=t.projectIntoViewport(i.touches[1].clientX,i.touches[1].clientY);l[2]=m[0],l[3]=m[1]}if(i.touches[2]){var m=t.projectIntoViewport(i.touches[2].clientX,i.touches[2].clientY);l[4]=m[0],l[5]=m[1]}for(var _=[],E=0;E<l.length;E++)_[E]=l[E]-u[E];var P=t.touchData.startPosition,C=l[0]-P[0],T=C*C,M=l[1]-P[1],B=M*M,N=T+B,I=N*c*c;if(o&&t.touchData.cxt){var O=i.touches[0].clientX-b,z=i.touches[0].clientY-w,L=i.touches[1].clientX-b,R=i.touches[1].clientY-w,V=k(O,z,L,R),A=V/y,X=150,F=X*X,Y=1.5,q=Y*Y;if(A>=q||V>=F){t.touchData.cxt=!1,t.touchData.start&&(t.touchData.start.unactivate(),t.touchData.start=null),t.data.bgActivePosistion=void 0,d[r.SELECT_BOX]=!0;var j=new e.Event(i,{type:"cxttapend",cyPosition:{x:l[0],y:l[1]}});t.touchData.start?t.touchData.start.trigger(j):s.trigger(j)}}if(o&&t.touchData.cxt){var j=new e.Event(i,{type:"cxtdrag",cyPosition:{x:l[0],y:l[1]}});t.data.bgActivePosistion=void 0,d[r.SELECT_BOX]=!0,t.touchData.start?t.touchData.start.trigger(j):s.trigger(j),t.touchData.start&&(t.touchData.start._private.grabbed=!1),t.touchData.cxtDragged=!0;var $=t.findNearestElement(l[0],l[1],!0);t.touchData.cxtOver&&$===t.touchData.cxtOver||(t.touchData.cxtOver&&t.touchData.cxtOver.trigger(new e.Event(i,{type:"cxtdragout",cyPosition:{x:l[0],y:l[1]}})),t.touchData.cxtOver=$,$&&$.trigger(new e.Event(i,{type:"cxtdragover",cyPosition:{x:l[0],y:l[1]}})))}else if(o&&i.touches[2]&&s.boxSelectionEnabled())t.data.bgActivePosistion=void 0,clearTimeout(this.threeFingerSelectTimeout),this.lastThreeTouch=+new Date,t.touchData.selecting=!0,d[r.SELECT_BOX]=!0,n&&0!==n.length&&void 0!==n[0]?(n[2]=(l[0]+l[2]+l[4])/3,n[3]=(l[1]+l[3]+l[5])/3):(n[0]=(l[0]+l[2]+l[4])/3,n[1]=(l[1]+l[3]+l[5])/3,n[2]=(l[0]+l[2]+l[4])/3+1,n[3]=(l[1]+l[3]+l[5])/3+1),n[4]=1,t.touchData.selecting=!0,t.redraw();else if(o&&i.touches[1]&&s.zoomingEnabled()&&s.panningEnabled()&&s.userZoomingEnabled()&&s.userPanningEnabled()){t.data.bgActivePosistion=void 0,d[r.SELECT_BOX]=!0;var W=t.dragData.touchDragEles;if(W){d[r.DRAG]=!0;for(var H=0;H<W.length;H++)W[H]._private.grabbed=!1,W[H]._private.rscratch.inDragLayer=!1}var O=i.touches[0].clientX-b,z=i.touches[0].clientY-w,L=i.touches[1].clientX-b,R=i.touches[1].clientY-w,Z=D(O,z,L,R),U=Z/g;if(1!=U&&S){var G=O-h,K=z-p,J=L-v,Q=R-f,ee=(G+J)/2,te=(K+Q)/2,re=s.zoom(),ie=re*U,ne=s.pan(),ae=x[0]*re+ne.x,oe=x[1]*re+ne.y,se={x:-ie/re*(ae-ne.x-ee)+ae,y:-ie/re*(oe-ne.y-te)+oe};if(t.touchData.start){var W=t.dragData.touchDragEles;if(W)for(var H=0;H<W.length;H++){var le=W[H]._private;le.grabbed=!1,le.rscratch.inDragLayer=!1}var ue=t.touchData.start._private;ue.active=!1,ue.grabbed=!1,ue.rscratch.inDragLayer=!1,d[r.DRAG]=!0,t.touchData.start.trigger("free").trigger("unactivate")}s.viewport({zoom:ie,pan:se,cancelOnFailedZoom:!0}),g=Z,h=O,p=z,v=L,f=R,t.pinching=!0}if(i.touches[0]){var m=t.projectIntoViewport(i.touches[0].clientX,i.touches[0].clientY);l[0]=m[0],l[1]=m[1]}if(i.touches[1]){var m=t.projectIntoViewport(i.touches[1].clientX,i.touches[1].clientY);l[2]=m[0],l[3]=m[1]}if(i.touches[2]){var m=t.projectIntoViewport(i.touches[2].clientX,i.touches[2].clientY);l[4]=m[0],l[5]=m[1]}}else if(i.touches[0]){var ce=t.touchData.start,de=t.touchData.last,$=$||t.findNearestElement(l[0],l[1],!0);if(null!=ce&&"nodes"==ce._private.group&&t.nodeIsDraggable(ce))if(I>=t.tapThreshold2){for(var W=t.dragData.touchDragEles,he=0;he<W.length;he++){var pe=W[he];if(t.nodeIsDraggable(pe)&&pe.isNode()&&pe.grabbed()){t.dragData.didDrag=!0;var ve=pe._private.position,fe=!t.hoverData.draggingEles;if(e.is.number(_[0])&&e.is.number(_[1])&&(ve.x+=_[0],ve.y+=_[1]),fe){a(pe,{inDragLayer:!0}),d[r.NODE]=!0;var ge=t.touchData.dragDelta;e.is.number(ge[0])&&e.is.number(ge[1])&&(ve.x+=ge[0],ve.y+=ge[1])}}}var ye=new e.Collection(s,pe);ye.updateCompoundBounds(),ye.trigger("position drag"),t.hoverData.draggingEles=!0,d[r.DRAG]=!0,t.touchData.startPosition[0]==u[0]&&t.touchData.startPosition[1]==u[1]&&(d[r.NODE]=!0),t.redraw()}else{var ge=t.touchData.dragDelta=t.touchData.dragDelta||[];0===ge.length?(ge.push(_[0]),ge.push(_[1])):(ge[0]+=_[0],ge[1]+=_[1])}null!=ce&&(ce.trigger(new e.Event(i,{type:"touchmove",cyPosition:{x:l[0],y:l[1]}})),ce.trigger(new e.Event(i,{type:"tapdrag",cyPosition:{x:l[0],y:l[1]}})),ce.trigger(new e.Event(i,{type:"vmousemove",cyPosition:{x:l[0],y:l[1]}}))),null==ce&&(null!=$&&($.trigger(new e.Event(i,{type:"touchmove",cyPosition:{x:l[0],y:l[1]}})),$.trigger(new e.Event(i,{type:"tapdrag",cyPosition:{x:l[0],y:l[1]}})),$.trigger(new e.Event(i,{type:"vmousemove",cyPosition:{x:l[0],y:l[1]}}))),null==$&&(s.trigger(new e.Event(i,{type:"touchmove",cyPosition:{x:l[0],y:l[1]}})),s.trigger(new e.Event(i,{type:"tapdrag",cyPosition:{x:l[0],y:l[1]}})),s.trigger(new e.Event(i,{type:"vmousemove",cyPosition:{x:l[0],y:l[1]}})))),$!=de&&(de&&de.trigger(new e.Event(i,{type:"tapdragout",cyPosition:{x:l[0],y:l[1]}})),$&&$.trigger(new e.Event(i,{type:"tapdragover",cyPosition:{x:l[0],y:l[1]}}))),t.touchData.last=$;for(var H=0;H<l.length;H++)l[H]&&t.touchData.startPosition[H]&&Math.abs(l[H]-t.touchData.startPosition[H])>4&&(t.touchData.singleTouchMoved=!0);if(o&&(null==ce||ce.isEdge())&&s.panningEnabled()&&s.userPanningEnabled()){t.swipePanning?s.panBy({x:_[0]*c,y:_[1]*c}):I>=t.tapThreshold2&&(t.swipePanning=!0,s.panBy({x:C*c,y:M*c})),ce&&(ce.unactivate(),t.data.bgActivePosistion||(t.data.bgActivePosistion={x:l[0],y:l[1]}),d[r.SELECT_BOX]=!0,t.touchData.start=null);var m=t.projectIntoViewport(i.touches[0].clientX,i.touches[0].clientY);l[0]=m[0],l[1]=m[1]}}for(var E=0;E<l.length;E++)u[E]=l[E]},1e3/30,{trailing:!0}),!1),t.registerBinding(window,"touchcancel",function(e){var r=t.touchData.start;t.touchData.capture=!1,r&&r.unactivate()}),t.registerBinding(window,"touchend",function(i){var n=t.touchData.start,a=t.touchData.capture;if(a){t.touchData.capture=!1,i.preventDefault();var s=t.data.select;t.swipePanning=!1,t.hoverData.draggingEles=!1;var l=t.data.cy,u=l.zoom(),c=t.touchData.now,d=t.touchData.earlier,h=t.data.canvasNeedsRedraw;if(i.touches[0]){var p=t.projectIntoViewport(i.touches[0].clientX,i.touches[0].clientY);c[0]=p[0],c[1]=p[1]}if(i.touches[1]){var p=t.projectIntoViewport(i.touches[1].clientX,i.touches[1].clientY);c[2]=p[0],c[3]=p[1]}if(i.touches[2]){var p=t.projectIntoViewport(i.touches[2].clientX,i.touches[2].clientY);c[4]=p[0],c[5]=p[1]}n&&n.unactivate();var v;if(t.touchData.cxt){if(v=new e.Event(i,{type:"cxttapend",cyPosition:{x:c[0],y:c[1]}}),n?n.trigger(v):l.trigger(v),!t.touchData.cxtDragged){var f=new e.Event(i,{type:"cxttap",cyPosition:{x:c[0],y:c[1]}});n?n.trigger(f):l.trigger(f)}return t.touchData.start&&(t.touchData.start._private.grabbed=!1),t.touchData.cxt=!1,t.touchData.start=null,void t.redraw()}if(!i.touches[2]&&l.boxSelectionEnabled()&&t.touchData.selecting){t.touchData.selecting=!1,clearTimeout(this.threeFingerSelectTimeout);var g=[],y=t.getAllInBox(s[0],s[1],s[2],s[3]);s[0]=void 0,s[1]=void 0,s[2]=void 0,s[3]=void 0,s[4]=0,h[r.SELECT_BOX]=!0;for(var m=0;m<y.length;m++)y[m]._private.selectable&&g.push(y[m]);var x=new e.Collection(l,g);"single"===l.selectionType()&&l.$(":selected").unmerge(x).unselect(),x.select(),x.length>0?h[r.NODE]=!0:t.redraw()}var b=!1;if(null!=n&&(n._private.active=!1,b=!0,n.unactivate()),i.touches[2])t.data.bgActivePosistion=void 0,h[r.SELECT_BOX]=!0;else if(i.touches[1]);else if(i.touches[0]);else if(!i.touches[0]){t.data.bgActivePosistion=void 0,h[r.SELECT_BOX]=!0;var w=t.dragData.touchDragEles;if(null!=n){var _=n._private.grabbed;o(w),h[r.DRAG]=!0,h[r.NODE]=!0,_&&n.trigger("free"),n.trigger(new e.Event(i,{type:"touchend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(i,{type:"tapend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(i,{type:"vmouseup",cyPosition:{x:c[0],y:c[1]}})),n.unactivate(),t.touchData.start=null}else{var E=t.findNearestElement(c[0],c[1],!0);null!=E&&E.trigger(new e.Event(i,{type:"touchend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(i,{type:"tapend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(i,{type:"vmouseup",cyPosition:{x:c[0],y:c[1]}})),null==E&&l.trigger(new e.Event(i,{type:"touchend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(i,{type:"tapend",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(i,{type:"vmouseup",cyPosition:{x:c[0],y:c[1]}}))}var S=t.touchData.startPosition[0]-c[0],D=S*S,k=t.touchData.startPosition[1]-c[1],P=k*k,C=D+P,T=C*u*u;null!=n&&!t.dragData.didDrag&&n._private.selectable&&T<t.tapThreshold2&&!t.pinching&&("single"===l.selectionType()?(l.$(":selected").unmerge(n).unselect(),n.select()):n.selected()?n.unselect():n.select(),b=!0,h[r.NODE]=!0),t.touchData.singleTouchMoved===!1&&(n?n.trigger(new e.Event(i,{type:"tap",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(i,{type:"vclick",cyPosition:{x:c[0],y:c[1]}})):l.trigger(new e.Event(i,{type:"tap",cyPosition:{x:c[0],y:c[1]}})).trigger(new e.Event(i,{type:"vclick",cyPosition:{x:c[0],y:c[1]}}))),t.touchData.singleTouchMoved=!0}for(var M=0;M<c.length;M++)d[M]=c[M];t.dragData.didDrag=!1,0===i.touches.length&&(t.touchData.dragDelta=[]),b&&n&&n.updateStyle(!1),i.touches.length<2&&(t.pinching=!1,h[r.NODE]=!0,t.redraw())}},!1)}}(cytoscape),function(e){"use strict";function t(t,r){a[t]={points:r,draw:function(e,r,n,o,s){i.drawPolygon(e,r,n,o,s,a[t].points)},drawPath:function(e,r,n,o,s){i.drawPolygonPath(e,r,n,o,s,a[t].points)},intersectLine:function(r,i,n,o,s,l,u){return e.math.polygonIntersectLine(s,l,a[t].points,r,i,n/2,o/2,u)},intersectBox:function(r,i,n,o,s,l,u,c,d){var h=a[t].points;return e.math.boxIntersectPolygon(r,i,n,o,h,s,l,u,c,[0,-1],d)},checkPoint:function(r,i,n,o,s,l,u){return e.math.pointInsidePolygon(r,i,a[t].points,l,u,o,s,[0,-1],n)}}}for(var r=e("renderer","canvas"),i=r.prototype,n=r.usePaths(),a=r.nodeShapes={},o=Math.sin(0),s=Math.cos(0),l={},u={},c=.1,d=0*Math.PI;d<2*Math.PI;d+=c)l[d]=Math.sin(d),u[d]=Math.cos(d);a.ellipse={draw:function(e,t,r,i,n){a.ellipse.drawPath(e,t,r,i,n),e.fill()},drawPath:function(e,t,r,i,a){if(n){e.beginPath&&e.beginPath();for(var d,h,p=i/2,v=a/2,f=0*Math.PI;f<2*Math.PI;f+=c)d=t-p*l[f]*o+p*u[f]*s,h=r+v*u[f]*o+v*l[f]*s,0===f?e.moveTo(d,h):e.lineTo(d,h);e.closePath()}else e.beginPath&&e.beginPath(),e.translate(t,r),e.scale(i/2,a/2),e.arc(0,0,1,0,2*Math.PI*.999,!1),e.closePath(),e.scale(2/i,2/a),e.translate(-t,-r)},intersectLine:function(t,r,i,n,a,o,s){var l=e.math.intersectLineEllipse(a,o,t,r,i/2+s,n/2+s);return l},intersectBox:function(t,r,i,n,a,o,s,l,u){return e.math.boxIntersectEllipse(t,r,i,n,u,a,o,s,l)},checkPoint:function(e,t,r,i,n,a,o){return e-=a,t-=o,e/=i/2+r,t/=n/2+r,Math.pow(e,2)+Math.pow(t,2)<=1}},t("triangle",e.math.generateUnitNgonPointsFitToSquare(3,0)),t("square",e.math.generateUnitNgonPointsFitToSquare(4,0)),a.rectangle=a.square,a.roundrectangle={points:e.math.generateUnitNgonPointsFitToSquare(4,0),draw:function(e,t,r,n,a){i.drawRoundRectangle(e,t,r,n,a,10)},drawPath:function(e,t,r,n,a){i.drawRoundRectanglePath(e,t,r,n,a,10)},intersectLine:function(t,r,i,n,a,o,s){return e.math.roundRectangleIntersectLine(a,o,t,r,i,n,s)},intersectBox:function(t,r,i,n,a,o,s,l,u){return e.math.roundRectangleIntersectBox(t,r,i,n,a,o,s,l,u)},checkPoint:function(t,r,i,n,o,s,l){var u=e.math.getRoundRectangleRadius(n,o);if(e.math.pointInsidePolygon(t,r,a.roundrectangle.points,s,l,n,o-2*u,[0,-1],i))return!0;if(e.math.pointInsidePolygon(t,r,a.roundrectangle.points,s,l,n-2*u,o,[0,-1],i))return!0;var c=function(e,t,r,i,n,a,o){return e-=r,t-=i,e/=n/2+o,t/=a/2+o,Math.pow(e,2)+Math.pow(t,2)<=1};return c(t,r,s-n/2+u,l-o/2+u,2*u,2*u,i)?!0:c(t,r,s+n/2-u,l-o/2+u,2*u,2*u,i)?!0:c(t,r,s+n/2-u,l+o/2-u,2*u,2*u,i)?!0:c(t,r,s-n/2+u,l+o/2-u,2*u,2*u,i)?!0:!1}},t("diamond",[0,1,1,0,0,-1,-1,0]),t("pentagon",e.math.generateUnitNgonPointsFitToSquare(5,0)),t("hexagon",e.math.generateUnitNgonPointsFitToSquare(6,0)),t("heptagon",e.math.generateUnitNgonPointsFitToSquare(7,0)),t("octagon",e.math.generateUnitNgonPointsFitToSquare(8,0));var h=new Array(20),p=e.math.generateUnitNgonPoints(5,0),v=e.math.generateUnitNgonPoints(5,Math.PI/5),f=.5*(3-Math.sqrt(5));f*=1.57;for(var d=0;d<v.length/2;d++)v[2*d]*=f,v[2*d+1]*=f;for(var d=0;5>d;d++)h[4*d]=p[2*d],h[4*d+1]=p[2*d+1],h[4*d+2]=v[2*d],h[4*d+3]=v[2*d+1];h=e.math.fitPolygonToSquare(h),t("star",h),t("vee",[-1,-1,0,-.333,1,-1,0,1]),t("rhomboid",[-1,-1,.333,-1,1,1,-.333,1])}(cytoscape),function(e){"use strict";function t(t){this._private={},this._private.options=e.util.extend({},r,t)}var r={animate:!0,maxSimulationTime:4e3,fit:!0,padding:30,boundingBox:void 0,ungrabifyWhileSimulating:!1,ready:void 0,stop:void 0,repulsion:void 0,stiffness:void 0,friction:void 0,gravity:!0,fps:void 0,precision:void 0,nodeMass:void 0,edgeLength:void 0,stepSize:.1,stableEnergy:function(e){var t=e;return t.max<=.5||t.mean<=.3},infinite:!1};t.prototype.run=function(){var t=this,r=this._private.options;return e.util.require("arbor",function(i){function n(e,t){return null==t?void 0:"function"==typeof t?t.apply(e,[e._private.data,{nodes:u.length,edges:c.length,element:e}]):t}function a(e){if(!e.isFullAutoParent()){var t=e._private.data.id,i=n(e,r.nodeMass),a=e._private.locked,o=e.position(),s=p.fromScreen({x:o.x,y:o.y});e.scratch().arbor=p.addNode(t,{element:e,mass:i,fixed:a,x:a?s.x:void 0,y:a?s.y:void 0})}}function o(e){var t=e.source().id(),i=e.target().id(),a=n(e,r.edgeLength);e.scratch().arbor=p.addEdge(t,i,{length:a})}var s=r.cy,l=r.eles,u=l.nodes().not(":parent"),c=l.edges(),d=e.util.makeBoundingBox(r.boundingBox?r.boundingBox:{x1:0,y1:0,w:s.width(),h:s.height()}),h=!1;if(t.trigger({type:"layoutstart",layout:t}),void 0!==r.liveUpdate&&(r.animate=r.liveUpdate),l.nodes().size()<=1)return r.fit&&s.reset(),l.nodes().position({x:Math.round((d.x1+d.x2)/2),y:Math.round((d.y1+d.y2)/2)}),t.one("layoutready",r.ready),t.trigger({type:"layoutready",layout:t}),t.one("layoutstop",r.stop),void t.trigger({type:"layoutstop",layout:t});var p=t._private.system=i.ParticleSystem();p.parameters({repulsion:r.repulsion,stiffness:r.stiffness,friction:r.friction,gravity:r.gravity,fps:r.fps,dt:r.dt,precision:r.precision}),r.animate&&r.fit&&s.fit(d,r.padding);var v,f=250,g=!1,y=+new Date,m={init:function(e){},redraw:function(){var e=p.energy();if(!r.infinite&&null!=r.stableEnergy&&null!=e&&e.n>0&&r.stableEnergy(e))return void t.stop();r.infinite||f==1/0||(clearTimeout(v),v=setTimeout(D,f));var i=s.collection();p.eachNode(function(e,t){var r=e.data,n=r.element;null!=n&&(n.locked()||n.grabbed()||(n.silentPosition({x:d.x1+t.x,y:d.y1+t.y}),i.merge(n)))}),r.animate&&i.length>0&&(h=!0,i.rtrigger("position"),r.fit&&s.fit(r.padding),y=+new Date,h=!1),g||(g=!0,t.one("layoutready",r.ready),t.trigger({type:"layoutready",layout:t}))}};p.renderer=m,p.screenSize(d.w,d.h),p.screenPadding(r.padding,r.padding,r.padding,r.padding),p.screenStep(r.stepSize);var x;u.on("grab free position",x=function(e){if(!h){var t=this.position(),n=p.fromScreen(t);if(n){var a=i.Point(n.x,n.y),o=r.padding;switch(d.x1+o<=t.x&&t.x<=d.x2-o&&d.y1+o<=t.y&&t.y<=d.y2-o&&(this.scratch().arbor.p=a),e.type){case"grab":this.scratch().arbor.fixed=!0;break;case"free":this.scratch().arbor.fixed=!1}}}});var b;u.on("lock unlock",b=function(e){node.scratch().arbor.fixed=node.locked()});var w;l.on("remove",w=function(e){});var _;s.on("add","*",_=function(){});var E;s.on("resize",E=function(){if(null==r.boundingBox&&null!=t._private.system){var e=s.width(),i=s.height();p.screenSize(e,i)}}),u.each(function(e,t){a(t)}),c.each(function(e,t){o(t)});var S=u.filter(":grabbable");r.ungrabifyWhileSimulating&&S.ungrabify();var D=t._private.doneHandler=function(){t._private.doneHandler=null,r.animate||(r.fit&&s.reset(),u.rtrigger("position")),u.off("grab free position",x),u.off("lock unlock",b),l.off("remove",w),s.off("add","*",_),s.off("resize",E),r.ungrabifyWhileSimulating&&S.grabify(),t.one("layoutstop",r.stop),t.trigger({type:"layoutstop",layout:t})};p.start(),!r.infinite&&null!=r.maxSimulationTime&&r.maxSimulationTime>0&&r.maxSimulationTime!==1/0&&setTimeout(function(){t.stop()},r.maxSimulationTime)}),this},t.prototype.stop=function(){return null!=this._private.system&&this._private.system.stop(),this._private.doneHandler&&this._private.doneHandler(),this},e("layout","arbor",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},r,t)}var r={fit:!0,directed:!1,padding:30,circle:!1,spacingFactor:1.75,boundingBox:void 0,avoidOverlap:!0,roots:void 0,maximalAdjustments:0,animate:!1,animationDuration:500,ready:void 0,stop:void 0};t.prototype.run=function(){var t,r=this.options,i=r,n=r.cy,a=i.eles,o=a.nodes().not(":parent"),s=a,l=e.util.makeBoundingBox(i.boundingBox?i.boundingBox:{x1:0,y1:0,w:n.width(),h:n.height()});if(e.is.elementOrCollection(i.roots))t=i.roots;else if(e.is.array(i.roots)){for(var u=[],c=0;c<i.roots.length;c++){var d=i.roots[c],h=n.getElementById(d);u.push(h)}t=new e.Collection(n,u)}else if(e.is.string(i.roots))t=n.$(i.roots);else if(i.directed)t=o.roots();else{for(var p=[],v=o;v.length>0;){var f=n.collection();a.bfs({roots:v[0],visit:function(e,t,r,i,n){f=f.add(r)},directed:!1}),v=v.not(f),p.push(f)}t=n.collection();for(var c=0;c<p.length;c++){var g=p[c],y=g.maxDegree(!1),m=g.filter(function(){return this.degree(!1)===y});t=t.add(m)}}var x=[],b={},w={},_={},E={},S={};s.bfs({roots:t,directed:i.directed,visit:function(e,t,r,i,n){var a=this[0],o=a.id();if(x[t]||(x[t]=[]),x[t].push(a),b[o]=!0,w[o]=t,_[o]=n,E[o]=i,n){var s=n.id(),l=S[s]=S[s]||[];l.push(r)}}});for(var D=[],c=0;c<o.length;c++){var h=o[c];b[h.id()]||D.push(h)}for(var k=3*D.length,P=0;0!==D.length&&k>P;){for(var C=D.shift(),T=C.neighborhood().nodes(),M=!1,c=0;c<T.length;c++){var B=w[T[c].id()];if(void 0!==B){x[B].push(C),M=!0;break}}M||D.push(C),P++}for(;0!==D.length;){var C=D.shift(),M=!1;M||(0===x.length&&x.push([]),x[0].push(C))}var N=function(){for(var e=0;e<x.length;e++)for(var t=x[e],r=0;r<t.length;r++){var i=t[r];i._private.scratch.breadthfirst={depth:e,index:r}}};N();for(var I=function(e){for(var t,r=e.connectedEdges(function(){return this.data("target")===e.id()}),i=e._private.scratch.breadthfirst,n=0,a=0;a<r.length;a++){var o=r[a],s=o.source()[0],l=s._private.scratch.breadthfirst;i.depth<=l.depth&&n<l.depth&&(n=l.depth,t=s)}return t},O=0;O<i.maximalAdjustments;O++){for(var z=x.length,L=[],c=0;z>c;c++)for(var B=x[c],R=B.length,V=0;R>V;V++){var h=B[V],A=h._private.scratch.breadthfirst,X=I(h);X&&(A.intEle=X,L.push(h))}for(var c=0;c<L.length;c++){var h=L[c],A=h._private.scratch.breadthfirst,X=A.intEle,F=X._private.scratch.breadthfirst;x[A.depth].splice(A.index,1);for(var Y=F.depth+1;Y>x.length-1;)x.push([]);x[Y].push(h),A.depth=Y,A.index=x[Y].length-1}N()}var q=0;if(i.avoidOverlap){for(var c=0;c<o.length;c++){var j=o[c].outerWidth(),$=o[c].outerHeight();q=Math.max(q,j,$)}q*=i.spacingFactor}for(var W={},H=function(e){if(W[e.id()])return W[e.id()];for(var t=e._private.scratch.breadthfirst.depth,r=e.neighborhood().nodes().not(":parent"),i=0,n=0,a=0;a<r.length;a++){var o=r[a],s=o._private.scratch.breadthfirst,l=s.index,u=s.depth,c=x[u].length;(t>u||0===t)&&(i+=l/c,n++)}return n=Math.max(1,n),i/=n,0===n&&(i=void 0),W[e.id()]=i,i},Z=function(e,t){var r=H(e),i=H(t);return r-i},U=0;3>U;U++){for(var c=0;c<x.length;c++)x[c]=x[c].sort(Z);N()}for(var G=0,c=0;c<x.length;c++)G=Math.max(x[c].length,G);for(var K={x:l.x1+l.w/2,y:l.x1+l.h/2},J=function(e,t){var r=e._private.scratch.breadthfirst,n=r.depth,a=r.index,o=x[n].length,s=Math.max(l.w/(o+1),q),u=Math.max(l.h/(x.length+1),q),c=Math.min(l.w/2/x.length,l.h/2/x.length);if(c=Math.max(c,q),i.circle){if(i.circle){var d=c*n+c-(x.length>0&&x[0].length<=3?c/2:0),h=2*Math.PI/x[n].length*a;return 0===n&&1===x[0].length&&(d=1),{x:K.x+d*Math.cos(h),y:K.y+d*Math.sin(h)}}return{x:K.x+(a+1-(o+1)/2)*s,y:(n+1)*u}}var p={x:K.x+(a+1-(o+1)/2)*s,y:(n+1)*u};return t?p:p},Q={},c=x.length-1;c>=0;c--)for(var B=x[c],V=0;V<B.length;V++){var C=B[V];Q[C.id()]=J(C,c===x.length-1)}return o.layoutPositions(this,i,function(){return Q[this.id()]}),this},e("layout","breadthfirst",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},r,t)}var r={fit:!0,padding:30,boundingBox:void 0,avoidOverlap:!0,radius:void 0,startAngle:1.5*Math.PI,counterclockwise:!1,sort:void 0,animate:!1,animationDuration:500,ready:void 0,stop:void 0};t.prototype.run=function(){var t=this.options,r=t,i=t.cy,n=r.eles,a=n.nodes().not(":parent");r.sort&&(a=a.sort(r.sort));for(var o,s=e.util.makeBoundingBox(r.boundingBox?r.boundingBox:{x1:0,y1:0,w:i.width(),h:i.height()}),l={x:s.x1+s.w/2,y:s.y1+s.h/2},u=r.startAngle,c=2*Math.PI/a.length,d=0,h=0;h<a.length;h++){var p=a[h].outerWidth(),v=a[h].outerHeight();d=Math.max(d,p,v)}if(o=e.is.number(r.radius)?r.radius:a.length<=1?0:Math.min(s.h,s.w)/2-d,a.length>1&&r.avoidOverlap){d*=1.75;var c=2*Math.PI/a.length,f=Math.cos(c)-Math.cos(0),g=Math.sin(c)-Math.sin(0),y=Math.sqrt(d*d/(f*f+g*g));o=Math.max(y,o)}var m=function(e,t){var i=o*Math.cos(u),n=o*Math.sin(u),a={x:l.x+i,y:l.y+n};return u=r.counterclockwise?u-c:u+c,a};return a.layoutPositions(this,r,m),this},e("layout","circle",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={animate:!0,refresh:1,maxSimulationTime:4e3,ungrabifyWhileSimulating:!1,fit:!0,padding:30,boundingBox:void 0,ready:function(){},stop:function(){},randomize:!1,avoidOverlap:!0,handleDisconnected:!0,nodeSpacing:function(e){return 10},flow:void 0,alignment:void 0,edgeLength:void 0,edgeSymDiffLength:void 0,edgeJaccardLength:void 0,unconstrIter:void 0,userConstIter:void 0,allConstIter:void 0,infinite:!1};t.prototype.run=function(){var t=this,r=this.options;return t.manuallyStopped=!1,e.util.require("cola",function(i){var n=r.cy,a=r.eles,o=a.nodes(),s=a.edges(),l=!1,u=e.util.makeBoundingBox(r.boundingBox?r.boundingBox:{x1:0,y1:0,w:n.width(),h:n.height()}),c=function(t,r){if(e.is.fn(t)){var i=t;return i.apply(r,[r])}return t},d=function(){for(var t={min:1/0,max:-(1/0)},i={min:1/0,max:-(1/0)},a=0;a<o.length;a++){var s=o[a],c=s._private.scratch.cola;t.min=Math.min(t.min,c.x||0),t.max=Math.max(t.max,c.x||0),i.min=Math.min(i.min,c.y||0),i.max=Math.max(i.max,c.y||0)}o.positions(function(r,n){var a,o=n._private.scratch.cola;return n.grabbed()||n.isParent()||(a={x:u.x1+o.x-t.min,y:u.y1+o.y-i.min},e.is.number(a.x)&&e.is.number(a.y)||(a=void 0)),a}),o.updateCompoundBounds(),l||(p(),l=!0),r.fit&&n.fit(r.padding)},h=function(){r.ungrabifyWhileSimulating&&y.grabify(),o.off("grab free position",m),o.off("lock unlock",x),t.one("layoutstop",r.stop),t.trigger({type:"layoutstop",layout:t})},p=function(){t.one("layoutready",r.ready),t.trigger({type:"layoutready",layout:t})},v=r.refresh,f=1;r.refresh<0?(f=Math.abs(r.refresh),v=1):v=Math.max(1,v);var g=t.adaptor=i.adaptor({trigger:function(e){switch(e.type){case"tick":r.animate&&d();break;case"end":d(),r.infinite||h()}},kick:function(i){var n=function(){if(t.manuallyStopped)return h(),!0;var e=i();return e&&r.infinite&&g.resume(),e},a=function(){for(var e,t=0;v>t&&!e;t++)e=e||n();return e};if(r.animate){var o=function(){a()||e.util.requestAnimationFrame(o)};e.util.requestAnimationFrame(o)}else for(;!n(););},on:function(e,t){},drag:function(){}});t.adaptor=g;var y=o.filter(":grabbable");r.ungrabifyWhileSimulating&&y.ungrabify();var m;o.on("grab free position",m=function(t){var r=this,i=r._private.scratch.cola,n=r._private.position;switch(r.grabbed()?(i.x=n.x-u.x1,i.y=n.y-u.y1,g.dragstart(i)):e.is.number(i.x)&&e.is.number(i.y)&&(n.x=i.x+u.x1,n.y=i.y+u.y1),t.type){case"grab":g.dragstart(i),g.resume();break;case"free":g.dragend(i)}});var x;o.on("lock unlock",x=function(e){var t=this,r=t._private.scratch.cola;t.locked()?g.dragstart(r):g.dragend(r)});var b=o.stdFilter(function(e){return!e.isParent()});if(g.nodes(b.map(function(e,t){var i=c(r.nodeSpacing,e),n=e.position(),a=e._private.scratch.cola={x:r.randomize?Math.round(Math.random()*u.w):n.x,y:r.randomize?Math.round(Math.random()*u.h):n.y,width:e.outerWidth()+2*i,height:e.outerHeight()+2*i,index:t};return a})),r.alignment){var w=[],_=[];b.forEach(function(e){var t=c(r.alignment,e),i=e._private.scratch.cola,n=i.index;t&&(null!=t.x&&w.push({node:n,offset:t.x}),null!=t.y&&_.push({node:n,offset:t.y}))});var E=[];w.length>0&&E.push({type:"alignment",axis:"x",offsets:w}),_.length>0&&E.push({type:"alignment",axis:"y",offsets:_}),g.constraints(E)}g.groups(o.stdFilter(function(e){return e.isParent()}).map(function(e,t){return e._private.scratch.cola={index:t,leaves:e.descendants().stdFilter(function(e){return!e.isParent()}).map(function(e){return e[0]._private.scratch.cola.index})},e}).map(function(e){return e._private.scratch.cola.groups=e.descendants().stdFilter(function(e){return e.isParent()}).map(function(e){return e._private.scratch.cola.index}),e._private.scratch.cola}));var S,D;null!=r.edgeLength?(S=r.edgeLength,D="linkDistance"):null!=r.edgeSymDiffLength?(S=r.edgeSymDiffLength,D="symmetricDiffLinkLengths"):null!=r.edgeJaccardLength?(S=r.edgeJaccardLength,D="jaccardLinkLengths"):(S=100,D="linkDistance");var k=function(e){return e.calcLength};if(g.links(s.stdFilter(function(e){return!e.source().isParent()&&!e.target().isParent()}).map(function(e,t){var r=e._private.scratch.cola={source:e.source()[0]._private.scratch.cola.index,target:e.target()[0]._private.scratch.cola.index};return null!=S&&(r.calcLength=c(S,e)),r})),g.size([u.w,u.h]),null!=S&&g[D](k),r.flow){var P,C="y",T=50;e.is.string(r.flow)?P={axis:r.flow,minSeparation:T}:e.is.number(r.flow)?P={axis:C,minSeparation:r.flow}:e.is.plainObject(r.flow)?(P=r.flow,P.axis=P.axis||C,P.minSeparation=null!=P.minSeparation?P.minSeparation:T):P={axis:C,minSeparation:T},g.flowLayout(P.axis,P.minSeparation)}t.trigger({type:"layoutstart",layout:t}),g.avoidOverlaps(r.avoidOverlap).handleDisconnected(r.handleDisconnected).start(r.unconstrIter,r.userConstIter,r.allConstIter),r.infinite||setTimeout(function(){t.manuallyStopped||g.stop()},r.maxSimulationTime)}),this},t.prototype.stop=function(){return this.adaptor&&(this.manuallyStopped=!0,this.adaptor.stop()),this},e("layout","cola",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},r,t)}var r={fit:!0,padding:30,startAngle:1.5*Math.PI,counterclockwise:!1,minNodeSpacing:10,boundingBox:void 0,avoidOverlap:!0,height:void 0,width:void 0,concentric:function(e){return e.degree()},levelWidth:function(e){return e.maxDegree()/4},animate:!1,animationDuration:500,ready:void 0,stop:void 0};t.prototype.run=function(){for(var t=this.options,r=t,i=t.cy,n=r.eles,a=n.nodes().not(":parent"),o=e.util.makeBoundingBox(r.boundingBox?r.boundingBox:{x1:0,y1:0,w:i.width(),h:i.height()}),s={x:o.x1+o.w/2,y:o.y1+o.h/2},l=[],u=r.startAngle,c=0,d=0;d<a.length;d++){var h,p=a[d];h=r.concentric.apply(p,[p]),l.push({value:h,node:p}),p._private.scratch.concentric=h}a.updateStyle();for(var d=0;d<a.length;d++){var p=a[d];c=Math.max(c,p.outerWidth(),p.outerHeight())}l.sort(function(e,t){return t.value-e.value});for(var v=r.levelWidth(a),f=[[]],g=f[0],d=0;d<l.length;d++){var y=l[d];if(g.length>0){var m=Math.abs(g[0].value-y.value);m>=v&&(g=[],f.push(g))}g.push(y)}var x={},b=0,w=c+r.minNodeSpacing;if(!r.avoidOverlap){var _=f.length>0&&f[0].length>1,E=Math.min(o.w,o.h)/2-w,S=E/(f.length+_?1:0);w=Math.min(w,S)}for(var d=0;d<f.length;d++){var D=f[d],k=2*Math.PI/D.length;if(D.length>1&&r.avoidOverlap){var P=Math.cos(k)-Math.cos(0),C=Math.sin(k)-Math.sin(0),T=Math.sqrt(w*w/(P*P+C*C));b=Math.max(T,b)}for(var M=0;M<D.length;M++){var y=D[M],u=r.startAngle+(r.counterclockwise?-1:1)*k*M,B={x:s.x+b*Math.cos(u),y:s.y+b*Math.sin(u)};x[y.node.id()]=B}b+=w}return a.layoutPositions(this,r,function(){var e=this.id();return x[e]}),this},e("layout","concentric",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},i,t)}var r,i={ready:function(){},stop:function(){},animate:!0,refresh:4,fit:!0,padding:30,boundingBox:void 0,randomize:!0,debug:!1,nodeRepulsion:4e5,nodeOverlap:10,idealEdgeLength:10,edgeElasticity:100,nestingFactor:5,gravity:250,numIter:100,initialTemp:200,coolingFactor:.95,minTemp:1};t.prototype.run=function(){var t=this.options,i=t.cy,a=this;a.stopped=!1,a.trigger({type:"layoutstart",layout:a}),r=!0===t.debug?!0:!1;var o=new Date,d=n(i,a,t);r&&s(d),!0===t.randomize&&l(d,i),m(d,i,t);var h=function(e){return a.stopped?!1:(c(d,i,t,e),d.temperature=d.temperature*t.coolingFactor,
d.temperature<t.minTemp?!1:!0)},p=function(){u(d,i,t),!0===t.fit&&i.fit(t.padding);var e=new Date;console.info("Layout took "+(e-o)+" ms"),a.one("layoutstop",t.stop),a.trigger({type:"layoutstop",layout:a})};if(t.animate){var v=0,f=function(){for(var r,n=0;n<t.refresh&&v<t.numIter;){var r=h(v);if(r===!1)break;n++,v++}u(d,i,t),t.fit&&i.fit(t.padding),r!==!1&&v+1<t.numIter?e.util.requestAnimationFrame(f):p()};e.util.requestAnimationFrame(f)}else{for(var v=0;v<t.numIter&&h(v)!==!1;v++);p()}return this},t.prototype.stop=function(){return this.stopped=!0,this};var n=function(t,r,i){for(var n=i.eles.edges(),o=i.eles.nodes(),s={layout:r,layoutNodes:[],idToIndex:{},nodeSize:o.size(),graphSet:[],indexToGraph:[],layoutEdges:[],edgeSize:n.size(),temperature:i.initialTemp,clientWidth:t.width(),clientHeight:t.width(),boundingBox:e.util.makeBoundingBox(i.boundingBox?i.boundingBox:{x1:0,y1:0,w:t.width(),h:t.height()})},l=0;l<s.nodeSize;l++){var u={};u.id=o[l].data("id"),u.parentId=o[l].data("parent"),u.children=[],u.positionX=o[l].position("x"),u.positionY=o[l].position("y"),u.offsetX=0,u.offsetY=0,u.height=o[l].height(),u.width=o[l].width(),u.maxX=u.positionX+u.width/2,u.minX=u.positionX-u.width/2,u.maxY=u.positionY+u.height/2,u.minY=u.positionY-u.height/2,u.padLeft=o[l]._private.style["padding-left"].pxValue,u.padRight=o[l]._private.style["padding-right"].pxValue,u.padTop=o[l]._private.style["padding-top"].pxValue,u.padBottom=o[l]._private.style["padding-bottom"].pxValue,s.layoutNodes.push(u),s.idToIndex[u.id]=l}for(var c=[],d=0,h=-1,p=[],l=0;l<s.nodeSize;l++){var v=s.layoutNodes[l],f=v.parentId;null!=f?s.layoutNodes[s.idToIndex[f]].children.push(v.id):(c[++h]=v.id,p.push(v.id))}for(s.graphSet.push(p);h>=d;){var g=c[d++],y=s.idToIndex[g],m=s.layoutNodes[y],x=m.children;if(x.length>0){s.graphSet.push(x);for(var l=0;l<x.length;l++)c[++h]=x[l]}}for(var l=0;l<s.graphSet.length;l++)for(var b=s.graphSet[l],w=0;w<b.length;w++){var _=s.idToIndex[b[w]];s.indexToGraph[_]=l}for(var l=0;l<s.edgeSize;l++){var E=n[l],S={};S.id=E.data("id"),S.sourceId=E.data("source"),S.targetId=E.data("target");var D=i.idealEdgeLength,k=s.idToIndex[S.sourceId],P=s.idToIndex[S.targetId],C=s.indexToGraph[k],T=s.indexToGraph[P];if(C!=T){for(var M=a(S.sourceId,S.targetId,s),B=s.graphSet[M],N=0,u=s.layoutNodes[k];-1===$.inArray(u.id,B);)u=s.layoutNodes[s.idToIndex[u.parentId]],N++;for(u=s.layoutNodes[P];-1===$.inArray(u.id,B);)u=s.layoutNodes[s.idToIndex[u.parentId]],N++;D*=N*i.nestingFactor}S.idealLength=D,s.layoutEdges.push(S)}return s},a=function(e,t,r){var i=o(e,t,0,r);return 2>i.count?0:i.graph},o=function(e,t,r,i){var n=i.graphSet[r];if(-1<$.inArray(e,n)&&-1<$.inArray(t,n))return{count:2,graph:r};for(var a=0,s=0;s<n.length;s++){var l=n[s],u=i.idToIndex[l],c=i.layoutNodes[u].children;if(0!==c.length){var d=i.indexToGraph[i.idToIndex[c[0]]],h=o(e,t,d,i);if(0!==h.count){if(1!==h.count)return h;if(a++,2===a)break}}}return{count:a,graph:r}},s=function(e){if(r){console.debug("layoutNodes:");for(var t=0;t<e.nodeSize;t++){var i=e.layoutNodes[t],n="\nindex: "+t+"\nId: "+i.id+"\nChildren: "+i.children.toString()+"\nparentId: "+i.parentId+"\npositionX: "+i.positionX+"\npositionY: "+i.positionY+"\nOffsetX: "+i.offsetX+"\nOffsetY: "+i.offsetY+"\npadLeft: "+i.padLeft+"\npadRight: "+i.padRight+"\npadTop: "+i.padTop+"\npadBottom: "+i.padBottom;console.debug(n)}console.debug("idToIndex");for(var t in e.idToIndex)console.debug("Id: "+t+"\nIndex: "+e.idToIndex[t]);console.debug("Graph Set");for(var a=e.graphSet,t=0;t<a.length;t++)console.debug("Set : "+t+": "+a[t].toString());for(var n="IndexToGraph",t=0;t<e.indexToGraph.length;t++)n+="\nIndex : "+t+" Graph: "+e.indexToGraph[t];console.debug(n),n="Layout Edges";for(var t=0;t<e.layoutEdges.length;t++){var o=e.layoutEdges[t];n+="\nEdge Index: "+t+" ID: "+o.id+" SouceID: "+o.sourceId+" TargetId: "+o.targetId+" Ideal Length: "+o.idealLength}console.debug(n),n="nodeSize: "+e.nodeSize,n+="\nedgeSize: "+e.edgeSize,n+="\ntemperature: "+e.temperature,console.debug(n)}},l=function(e,t){for(var r=e.clientWidth,i=e.clientHeight,n=0;n<e.nodeSize;n++){var a=e.layoutNodes[n];a.positionX=Math.random()*r,a.positionY=Math.random()*i}},u=function(e,t,r){var i=e.layout,n=r.eles.nodes(),a=e.boundingBox,o={x1:1/0,x2:-(1/0),y1:1/0,y2:-(1/0)};r.boundingBox&&(n.forEach(function(t){var r=e.layoutNodes[e.idToIndex[t.data("id")]];o.x1=Math.min(o.x1,r.positionX),o.x2=Math.max(o.x2,r.positionX),o.y1=Math.min(o.y1,r.positionY),o.y2=Math.max(o.y2,r.positionY)}),o.w=o.x2-o.x1,o.h=o.y2-o.y1),n.positions(function(t,i){var n=e.layoutNodes[e.idToIndex[i.data("id")]];if(r.boundingBox){var s=(n.positionX-o.x1)/o.w,l=(n.positionY-o.y1)/o.h;return{x:a.x1+s*a.w,y:a.y1+l*a.h}}return{x:n.positionX,y:n.positionY}}),!0!==e.ready&&(e.ready=!0,i.one("layoutready",r.ready),i.trigger({type:"layoutready",layout:this}))},c=function(e,t,r,i){d(e,t,r),f(e,t,r),g(e,t,r),y(e,t,r),m(e,t,r)},d=function(e,t,r){for(var i=0;i<e.graphSet.length;i++)for(var n=e.graphSet[i],a=n.length,o=0;a>o;o++)for(var s=e.layoutNodes[e.idToIndex[n[o]]],l=o+1;a>l;l++){var u=e.layoutNodes[e.idToIndex[n[l]]];h(s,u,e,t,r)}},h=function(e,t,r,i,n){var a=t.positionX-e.positionX,o=t.positionY-e.positionY;if(0!==a||0!==o){var s=v(e,t,a,o);if(s>0)var l=n.nodeOverlap*s,u=Math.sqrt(a*a+o*o),c=l*a/u,d=l*o/u;else var h=p(e,a,o),f=p(t,-1*a,-1*o),g=f.x-h.x,y=f.y-h.y,m=g*g+y*y,u=Math.sqrt(m),l=n.nodeRepulsion/m,c=l*g/u,d=l*y/u;e.offsetX-=c,e.offsetY-=d,t.offsetX+=c,t.offsetY+=d}},p=function(e,t,r){var i=e.positionX,n=e.positionY,a=e.height,o=e.width,s=r/t,l=a/o,u={};do{if(0===t&&r>0){u.x=i,u.y=n+a/2;break}if(0===t&&0>r){u.x=i,u.y=n+a/2;break}if(t>0&&s>=-1*l&&l>=s){u.x=i+o/2,u.y=n+o*r/2/t;break}if(0>t&&s>=-1*l&&l>=s){u.x=i-o/2,u.y=n-o*r/2/t;break}if(r>0&&(-1*l>=s||s>=l)){u.x=i+a*t/2/r,u.y=n+a/2;break}if(0>r&&(-1*l>=s||s>=l)){u.x=i-a*t/2/r,u.y=n-a/2;break}}while(!1);return u},v=function(e,t,r,i){if(r>0)var n=e.maxX-t.minX;else var n=t.maxX-e.minX;if(i>0)var a=e.maxY-t.minY;else var a=t.maxY-e.minY;return n>=0&&a>=0?Math.sqrt(n*n+a*a):0},f=function(e,t,r){for(var i=0;i<e.edgeSize;i++){var n=e.layoutEdges[i],a=e.idToIndex[n.sourceId],o=e.layoutNodes[a],s=e.idToIndex[n.targetId],l=e.layoutNodes[s],u=l.positionX-o.positionX,c=l.positionY-o.positionY;if(0===u&&0===c)return;var d=p(o,u,c),h=p(l,-1*u,-1*c),v=h.x-d.x,f=h.y-d.y,g=Math.sqrt(v*v+f*f),y=Math.pow(n.idealLength-g,2)/r.edgeElasticity;if(0!==g)var m=y*v/g,x=y*f/g;else var m=0,x=0;o.offsetX+=m,o.offsetY+=x,l.offsetX-=m,l.offsetY-=x}},g=function(e,t,r){for(var i=0;i<e.graphSet.length;i++){var n=e.graphSet[i],a=n.length;if(0===i)var o=e.clientHeight/2,s=e.clientWidth/2;else var l=e.layoutNodes[e.idToIndex[n[0]]],u=e.layoutNodes[e.idToIndex[l.parentId]],o=u.positionX,s=u.positionY;for(var c=0;a>c;c++){var d=e.layoutNodes[e.idToIndex[n[c]]],h=o-d.positionX,p=s-d.positionY,v=Math.sqrt(h*h+p*p);if(v>1){var f=r.gravity*h/v,g=r.gravity*p/v;d.offsetX+=f,d.offsetY+=g}}}},y=function(e,t,r){var i=[],n=0,a=-1;for(i.push.apply(i,e.graphSet[0]),a+=e.graphSet[0].length;a>=n;){var o=i[n++],s=e.idToIndex[o],l=e.layoutNodes[s],u=l.children;if(0<u.length){for(var c=l.offsetX,d=l.offsetY,h=0;h<u.length;h++){var p=e.layoutNodes[e.idToIndex[u[h]]];p.offsetX+=c,p.offsetY+=d,i[++a]=u[h]}l.offsetX=0,l.offsetY=0}}},m=function(e,t,r){for(var i=0;i<e.nodeSize;i++){var n=e.layoutNodes[i];0<n.children.length&&(n.maxX=void 0,n.minX=void 0,n.maxY=void 0,n.minY=void 0)}for(var i=0;i<e.nodeSize;i++){var n=e.layoutNodes[i];if(!(0<n.children.length)){var a=x(n.offsetX,n.offsetY,e.temperature);n.positionX+=a.x,n.positionY+=a.y,n.offsetX=0,n.offsetY=0,n.minX=n.positionX-n.width,n.maxX=n.positionX+n.width,n.minY=n.positionY-n.height,n.maxY=n.positionY+n.height,b(n,e)}}for(var i=0;i<e.nodeSize;i++){var n=e.layoutNodes[i];0<n.children.length&&(n.positionX=(n.maxX+n.minX)/2,n.positionY=(n.maxY+n.minY)/2,n.width=n.maxX-n.minX,n.height=n.maxY-n.minY)}},x=function(e,t,r){var i=Math.sqrt(e*e+t*t);if(i>r)var n={x:r*e/i,y:r*t/i};else var n={x:e,y:t};return n},b=function(e,t){var r=e.parentId;if(null!=r){var i=t.layoutNodes[t.idToIndex[r]],n=!1;return(null==i.maxX||e.maxX+i.padRight>i.maxX)&&(i.maxX=e.maxX+i.padRight,n=!0),(null==i.minX||e.minX-i.padLeft<i.minX)&&(i.minX=e.minX-i.padLeft,n=!0),(null==i.maxY||e.maxY+i.padBottom>i.maxY)&&(i.maxY=e.maxY+i.padBottom,n=!0),(null==i.minY||e.minY-i.padTop<i.minY)&&(i.minY=e.minY-i.padTop,n=!0),n?b(i,t):void 0}};e("layout","cose",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={nodeSep:void 0,edgeSep:void 0,rankSep:void 0,rankDir:void 0,minLen:function(e){return 1},edgeWeight:function(e){return 1},fit:!0,padding:30,animate:!1,animationDuration:500,boundingBox:void 0,ready:function(){},stop:function(){}};t.prototype.run=function(){var t=this.options,r=this;return e.util.require("dagre",function(i){var n=t.cy,a=t.eles,o=function(t,r){return e.is.fn(r)?r.apply(t,[t]):r},s=e.util.makeBoundingBox(t.boundingBox?t.boundingBox:{x1:0,y1:0,w:n.width(),h:n.height()}),l=new i.graphlib.Graph({multigraph:!0,compound:!0}),u={},c=function(e,t){null!=t&&(u[e]=t)};c("nodesep",t.nodeSep),c("edgesep",t.edgeSep),c("ranksep",t.rankSep),c("rankdir",t.rankDir),l.setGraph(u),l.setDefaultEdgeLabel(function(){return{}}),l.setDefaultNodeLabel(function(){return{}});for(var d=a.nodes(),h=0;h<d.length;h++){var p=d[h];l.setNode(p.id(),{width:p.width(),height:p.height(),name:p.id()})}for(var h=0;h<d.length;h++){var p=d[h];p.isChild()&&l.setParent(p.id(),p.parent().id())}for(var v=a.edges().stdFilter(function(e){return!e.source().isParent()&&!e.target().isParent()}),h=0;h<v.length;h++){var f=v[h];l.setEdge(f.source().id(),f.target().id(),{minlen:o(f,t.minLen),weight:o(f,t.edgeWeight),name:f.id()},f.id())}i.layout(l);for(var g=l.nodes(),h=0;h<g.length;h++){var y=g[h],m=l.node(y);n.getElementById(y).scratch().dagre=m}var x;t.boundingBox?(x={x1:1/0,x2:-(1/0),y1:1/0,y2:-(1/0)},d.forEach(function(e){var t=e.scratch().dagre;x.x1=Math.min(x.x1,t.x),x.x2=Math.max(x.x2,t.x),x.y1=Math.min(x.y1,t.y),x.y2=Math.max(x.y2,t.y)}),x.w=x.x2-x.x1,x.h=x.y2-x.y1):x=s;var b=function(e){if(t.boundingBox){var r=(e.x-x.x1)/x.w,i=(e.y-x.y1)/x.h;return{x:s.x1+r*s.w,y:s.y1+i*s.h}}return e};d.layoutPositions(r,t,function(){var e=this.scratch().dagre;return b({x:e.x,y:e.y})})}),this},e("layout","dagre",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend({},r,t)}var r={fit:!0,padding:30,boundingBox:void 0,avoidOverlap:!0,rows:void 0,columns:void 0,position:function(e){},sort:void 0,animate:!1,animationDuration:500,ready:void 0,stop:void 0};t.prototype.run=function(){var t=this.options,r=t,i=t.cy,n=r.eles,a=n.nodes().not(":parent");r.sort&&(a=a.sort(r.sort));var o=e.util.makeBoundingBox(r.boundingBox?r.boundingBox:{x1:0,y1:0,w:i.width(),h:i.height()});if(0===o.h||0===o.w)a.layoutPositions(this,r,function(){return{x:o.x1,y:o.y1}});else{var s=a.size(),l=Math.sqrt(s*o.h/o.w),u=Math.round(l),c=Math.round(o.w/o.h*l),d=function(e){if(null==e)return Math.min(u,c);var t=Math.min(u,c);t==u?u=e:c=e},h=function(e){if(null==e)return Math.max(u,c);var t=Math.max(u,c);t==u?u=e:c=e};if(null!=r.rows&&null!=r.columns)u=r.rows,c=r.columns;else if(null!=r.rows&&null==r.columns)u=r.rows,c=Math.ceil(s/u);else if(null==r.rows&&null!=r.columns)c=r.columns,u=Math.ceil(s/c);else if(c*u>s){var p=d(),v=h();(p-1)*v>=s?d(p-1):(v-1)*p>=s&&h(v-1)}else for(;s>c*u;){var p=d(),v=h();(v+1)*p>=s?h(v+1):d(p+1)}var f=o.w/c,g=o.h/u;if(r.avoidOverlap)for(var y=0;y<a.length;y++){var m=a[y],x=m.outerWidth(),b=m.outerHeight();f=Math.max(f,x),g=Math.max(g,b)}for(var w={},_=function(e,t){return w["c-"+e+"-"+t]?!0:!1},E=function(e,t){w["c-"+e+"-"+t]=!0},S=0,D=0,k=function(){D++,D>=c&&(D=0,S++)},P={},y=0;y<a.length;y++){var m=a[y],C=r.position(m);if(C&&(void 0!==C.row||void 0!==C.col)){var T={row:C.row,col:C.col};if(void 0===T.col)for(T.col=0;_(T.row,T.col);)T.col++;else if(void 0===T.row)for(T.row=0;_(T.row,T.col);)T.row++;P[m.id()]=T,E(T.row,T.col)}}var M=function(e,t){var r,i;if(t.locked()||t.isFullAutoParent())return!1;var n=P[t.id()];if(n)r=n.col*f+f/2+o.x1,i=n.row*g+g/2+o.y1;else{for(;_(S,D);)k();r=D*f+f/2+o.x1,i=S*g+g/2+o.y1,E(S,D),k()}return{x:r,y:i}};a.layoutPositions(this,r,M)}return this},e("layout","grid",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={ready:function(){},stop:function(){}};t.prototype.run=function(){{var e=this.options,t=e.eles,r=this;e.cy}return r.trigger("layoutstart"),t.nodes().positions(function(){return{x:0,y:0}}),r.one("layoutready",e.ready),r.trigger("layoutready"),r.one("layoutstop",e.stop),r.trigger("layoutstop"),this},t.prototype.stop=function(){return this},e("layout","null",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={positions:void 0,zoom:void 0,pan:void 0,fit:!0,padding:30,animate:!1,animationDuration:500,ready:void 0,stop:void 0};t.prototype.run=function(){function t(e){if(null==r.positions)return null;if(a)return r.positions.apply(e,[e]);var t=r.positions[e._private.data.id];return null==t?null:t}var r=this.options,i=r.eles,n=i.nodes(),a=e.is.fn(r.positions);return n.layoutPositions(this,r,function(e,r){var i=t(r);return r.locked()||null==i?!1:i}),this},e("layout","preset",t)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={fit:!0,padding:30,boundingBox:void 0,animate:!1,animationDuration:500,ready:void 0,stop:void 0};t.prototype.run=function(){var t=this.options,r=t.cy,i=t.eles,n=i.nodes().not(":parent"),a=e.util.makeBoundingBox(t.boundingBox?t.boundingBox:{x1:0,y1:0,w:r.width(),h:r.height()}),o=function(e,t){return{x:a.x1+Math.round(Math.random()*a.w),y:a.y1+Math.round(Math.random()*a.h)}};return n.layoutPositions(this,t,o),this},e("layout","random",t)}(cytoscape),function($$){"use strict";function SpreadLayout(e){this.options=$$.util.extend({},defaults,e)}function cellCentroid(e){for(var t,r,i,n=e.halfedges,a=0,o=0,s=0,l=0;l<n.length;++l)t=n[l].getEndpoint(),r=n[l].getStartpoint(),a+=t.x*r.y,a-=t.y*r.x,i=t.x*r.y-r.x*t.y,o+=(t.x+r.x)*i,s+=(t.y+r.y)*i;return a/=2,i=6*a,{x:o/i,y:s/i}}function sitesDistance(e,t){var r=e.x-t.x,i=e.y-t.y;return Math.sqrt(r*r+i*i)}var defaults={animate:!0,ready:void 0,stop:void 0,fit:!0,minDist:20,padding:20,expandingFactor:-1,maxFruchtermanReingoldIterations:50,maxExpandIterations:4,boundingBox:void 0};SpreadLayout.prototype.run=function(){var layout=this,options=this.options;return $$.util.requires(["foograph","Voronoi"],function(foograph,Voronoi){function setPositions(e){for(var t=e.vertices,r=[],i=0;i<t.length;++i){var n=t[i];r[n.id]={x:n.x,y:n.y}}nodes.positions(function(e,t){var i=t._private.data.id,n=r[i];return{x:Math.round(simBB.x1+n.x),y:Math.round(simBB.y1+n.y)}}),options.fit&&cy.fit(options.padding),cy.nodes().rtrigger("position")}var cy=options.cy,nodes=cy.nodes(),edges=cy.edges(),cWidth=cy.width(),cHeight=cy.height(),simulationBounds=options.boundingBox?$$.util.makeBoundingBox(options.boundingBox):null,padding=options.padding,simBBFactor=Math.max(1,.8*Math.log(nodes.length));nodes.length<100&&(simBBFactor/=2),layout.trigger({type:"layoutstart",layout:layout});var simBB={x1:0,y1:0,x2:cWidth*simBBFactor,y2:cHeight*simBBFactor};simulationBounds&&(simBB.x1=simulationBounds.x1,simBB.y1=simulationBounds.y1,simBB.x2=simulationBounds.x2,simBB.y2=simulationBounds.y2),simBB.x1+=padding,simBB.y1+=padding,simBB.x2-=padding,simBB.y2-=padding;var width=simBB.x2-simBB.x1,height=simBB.y2-simBB.y1,startTime=Date.now();if(nodes.size()<=1){nodes.positions({x:Math.round((simBB.x1+simBB.x2)/2),y:Math.round((simBB.y1+simBB.y2)/2)}),options.fit&&cy.fit(options.padding);var endTime=Date.now();return console.info("Layout on "+nodes.size()+" nodes took "+(endTime-startTime)+" ms"),layout.one("layoutready",options.ready),layout.trigger("layoutready"),layout.one("layoutstop",options.stop),void layout.trigger("layoutstop")}var pData={width:width,height:height,minDist:options.minDist,expFact:options.expandingFactor,expIt:0,maxExpIt:options.maxExpandIterations,vertices:[],edges:[],startTime:startTime,maxFruchtermanReingoldIterations:options.maxFruchtermanReingoldIterations};nodes.each(function(e,t){var r=this._private.data.id;pData.vertices.push({id:r,x:0,y:0})}),edges.each(function(){var e=this.source().id(),t=this.target().id();pData.edges.push({src:e,tgt:t})});var t1=$$.Thread();t1.require(foograph,"foograph"),t1.require(Voronoi),t1.require(sitesDistance),t1.require(cellCentroid);var didLayoutReady=!1;t1.on("message",function(e){var t=e.message;options.animate&&(setPositions(t),didLayoutReady||(layout.trigger("layoutready"),didLayoutReady=!0))}),layout.one("layoutready",options.ready),t1.pass(pData).run(function(pData){function checkMinDist(e){for(var t=0,r=0;r<e.length;++r){var i=e[r];null!=i.lSite&&null!=i.rSite&&sitesDistance(i.lSite,i.rSite)<lMinDist&&++t}return t}foograph=eval("foograph"),Voronoi=eval("Voronoi");for(var lWidth=pData.width,lHeight=pData.height,lMinDist=pData.minDist,lExpFact=pData.expFact,lMaxExpIt=pData.maxExpIt,lMaxFruchtermanReingoldIterations=pData.maxFruchtermanReingoldIterations,savePositions=function(){pData.width=lWidth,pData.height=lHeight,pData.expIt=expandIteration,pData.expFact=lExpFact,pData.vertices=[];for(var e=0;e<fv.length;++e)pData.vertices.push({id:fv[e].label,x:fv[e].x,y:fv[e].y})},messagePositions=function(){broadcast(pData)},frg=new foograph.Graph("FRgraph",!1),frgNodes={},dataVertices=pData.vertices,ni=0;ni<dataVertices.length;++ni){var id=dataVertices[ni].id,v=new foograph.Vertex(id,Math.round(Math.random()*lHeight),Math.round(Math.random()*lHeight));frgNodes[id]=v,frg.insertVertex(v)}for(var dataEdges=pData.edges,ei=0;ei<dataEdges.length;++ei){var srcNodeId=dataEdges[ei].src,tgtNodeId=dataEdges[ei].tgt;frg.insertEdge("",1,frgNodes[srcNodeId],frgNodes[tgtNodeId])}var fv=frg.vertices,iterations=lMaxFruchtermanReingoldIterations,frLayoutManager=new foograph.ForceDirectedVertexLayout(lWidth,lHeight,iterations,!1,lMinDist);frLayoutManager.callback=function(){savePositions(),messagePositions()},frLayoutManager.layout(frg),savePositions(),messagePositions();for(var voronoi=new Voronoi,bbox={xl:0,xr:lWidth,yt:0,yb:lHeight},vSites=[],i=0;i<fv.length;++i)vSites[fv[i].label]=fv[i];for(var diagram=voronoi.compute(fv,bbox),cells=diagram.cells,i=0;i<cells.length;++i){var cell=cells[i],site=cell.site,centroid=cellCentroid(cell),currv=vSites[site.label];currv.x=centroid.x,currv.y=centroid.y}0>lExpFact&&(lExpFact=Math.max(.05,Math.min(.1,lMinDist/Math.sqrt(lWidth*lHeight/fv.length)*.5)));for(var prevInfractions=checkMinDist(diagram.edges),bStop=0>=prevInfractions,voronoiIteration=0,expandIteration=0;!bStop;){++voronoiIteration;for(var it=0;4>=it;++it){voronoi.recycle(diagram),diagram=voronoi.compute(fv,bbox),cells=diagram.cells;for(var i=0;i<cells.length;++i){var cell=cells[i],site=cell.site,centroid=cellCentroid(cell),currv=vSites[site.label];currv.x=centroid.x,currv.y=centroid.y}}var currInfractions=checkMinDist(diagram.edges);0>=currInfractions?bStop=!0:(currInfractions>=prevInfractions||voronoiIteration>=4)&&(expandIteration>=lMaxExpIt?bStop=!0:(lWidth+=lWidth*lExpFact,lHeight+=lHeight*lExpFact,bbox={xl:0,xr:lWidth,yt:0,yb:lHeight},++expandIteration,voronoiIteration=0)),prevInfractions=currInfractions,savePositions(),messagePositions()}return savePositions(),pData}).then(function(e){var t=e.vertices;setPositions(e);var r=e.startTime,i=new Date;console.info("Layout on "+t.length+" nodes took "+(i-r)+" ms"),layout.one("layoutstop",options.stop),options.animate||layout.trigger("layoutready"),layout.trigger("layoutstop"),t1.stop()})}),this},SpreadLayout.prototype.stop=function(){},$$("layout","spread",SpreadLayout)}(cytoscape),function(e){"use strict";function t(t){this.options=e.util.extend(!0,{},r,t)}var r={animate:!0,maxSimulationTime:4e3,ungrabifyWhileSimulating:!1,fit:!0,padding:30,boundingBox:void 0,random:!1,infinite:!1,ready:void 0,stop:void 0,stiffness:400,repulsion:400,damping:.5};t.prototype.run=function(){var t=this,r=this,i=this.options;return e.util.require("Springy",function(n){function a(e){var t=e.scratch("springy").model.id,r=w.layout.nodePoints[t].p,i=e.position(),n=null!=i.x&&null!=i.y?y(e.position()):{x:4*Math.random()-2,y:4*Math.random()-2};r.x=n.x,r.y=n.y}function o(){r.stopped=!1,i.ungrabifyWhileSimulating&&E.ungrabify(),w.start()}var s=!1,l=i.cy;t.trigger({type:"layoutstart",layout:t});var u=i.eles,c=u.nodes().not(":parent"),d=u.edges(),h=e.util.makeBoundingBox(i.boundingBox?i.boundingBox:{x1:0,y1:0,w:l.width(),h:l.height()}),p=new n.Graph;c.each(function(e,t){t.scratch("springy",{model:p.newNode({element:t})})}),d.each(function(e,t){var r=t.source().scratch("springy").model,i=t.target().scratch("springy").model;t.scratch("springy",{model:p.newEdge(r,i,{element:t})})});var v=window.sim=new n.Layout.ForceDirected(p,i.stiffness,i.repulsion,i.damping);i.infinite&&(v.minEnergyThreshold=-(1/0));var f=v.getBoundingBox(),g=function(e){f=v.getBoundingBox();var t=f.topright.subtract(f.bottomleft),r=e.subtract(f.bottomleft).divide(t.x).x*h.w+h.x1,i=e.subtract(f.bottomleft).divide(t.y).y*h.h+h.x1;return new n.Vector(r,i)},y=function(e){f=v.getBoundingBox();var t=f.topright.subtract(f.bottomleft),r=(e.x-h.x1)/h.w*t.x+f.bottomleft.x,i=(e.y-h.y1)/h.h*t.y+f.bottomleft.y;return new n.Vector(r,i)},m=l.collection(),x=l.nodes().size(),b=1,w=new n.Renderer(v,function(){r.stopped||m.length>0&&i.animate&&(s=!0,m.rtrigger("position"),i.fit&&l.fit(i.padding),m=l.collection(),s=!1)},function(e,t,r){},function(e,n){if(!r.stopped){var a=g(n),o=e.data.element;o.locked()||o.grabbed()||(o._private.position={x:a.x,y:a.y},m.merge(o)),b==x&&(t.one("layoutready",i.ready),t.trigger({type:"layoutready",layout:t})),b++}});c.each(function(e,t){i.random||a(t)});var _;c.on("position",_=function(){s||a(this)});var E=c.filter(":grabbable");r.stopSystem=function(){r.stopped=!0,p.filterNodes(function(){return!1}),i.ungrabifyWhileSimulating&&E.grabify(),i.fit&&l.fit(i.padding),c.off("drag position",_),t.one("layoutstop",i.stop),t.trigger({type:"layoutstop",layout:t}),r.stopSystem=null},o(),i.infinite||setTimeout(function(){r.stop()},i.maxSimulationTime)}),this},t.prototype.stop=function(){return null!=this.stopSystem&&this.stopSystem(),this},e("layout","springy",t)}(cytoscape),function(e){"use strict";function t(e){this.options=e}t.prototype.recalculateRenderedStyle=function(){},t.prototype.notify=function(){},e("renderer","null",t)}(cytoscape);