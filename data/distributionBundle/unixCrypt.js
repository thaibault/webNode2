(()=>{"use strict";var r={d:(o,a)=>{for(var f in a)r.o(a,f)&&!r.o(o,f)&&Object.defineProperty(o,f,{enumerable:!0,get:a[f]})},o:(r,o)=>Object.prototype.hasOwnProperty.call(r,o),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},o={};r.r(o),r.d(o,{default:()=>T,unixCrypt:()=>M});for(var a=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],f=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],v=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36],e=[63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],t=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],n=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2],i=[41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[],d=[],l=[],c=0;16>c;c++)l[c]=[];var p=function(r){for(var o=0;28>o;o++)u[o]=r[v[o]-1],d[o]=r[e[o]-1];for(var a=0;16>a;a++){for(var f,c=0;c<t[a];c++){f=u[0];for(var p=0;p<27;p++)u[p]=u[p+1];u[27]=f,f=d[0];for(var y=0;y<27;y++)d[y]=d[y+1];d[27]=f}for(var g=0;24>g;g++)l[a][g]=u[n[g]-1],l[a][g+24]=d[i[g]-28-1]}},y=[],g=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],b=[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7,0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8,4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0,15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13],[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10,3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5,0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15,13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9],[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8,13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1,13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7,1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12],[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15,13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9,10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4,3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14],[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9,14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6,4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14,11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3],[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11,10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8,9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6,4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13],[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1,13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6,1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2,6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12],[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7,1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2,7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8,2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]],s=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],S=[],m=[],O=[],h=[],j=[],C=function(r,o){void 0===o&&(o=!1);for(var v=[],e=0;64>e;e++)v[e]=r[a[e]-1];for(var t=0;32>t;t++)S[t]=v[t],m[t]=v[t+32];for(var n,i=0;16>i;i++){n=o?15-i:i;for(var u=0;32>u;u++)O[u]=m[u];for(var d=0;48>d;d++)j[d]=m[y[d]-1]^l[n][d];for(var c=0;8>c;c++){var p=6*c,g=b[c][(j[p+0]<<5)+(j[p+1]<<3)+(j[p+2]<<2)+(j[p+3]<<1)+(j[p+4]<<0)+(j[p+5]<<4)];h[(p=4*c)+0]=1&g>>3,h[p+1]=1&g>>2,h[p+2]=1&g>>1,h[p+3]=1&g>>0}for(var C=0;32>C;C++)m[C]=S[C]^h[s[C]-1];for(var P=0;32>P;P++)S[P]=O[P]}for(var x,M=0;32>M;M++)x=S[M],S[M]=m[M],m[M]=x;for(var T=0;32>T;T++)v[T]=S[T],v[T+32]=m[T];for(var _=0;64>_;_++)r[_]=v[f[_]-1]},P=function(r){for(var o=[],a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return o},x=function(r){return String.fromCharCode.apply(String,r)};function M(r,o,a){void 0===o&&(o="aa"),void 0===a&&(a=!1);var f="string"==typeof r?P(r):r,v=o;"string"==typeof o&&(""===o&&(o="aa"),v=P(o));for(var e=[],t=[],n=0;66>n;n++)e[n]=0;for(var i,u=0,d=0;(i=f[d])&&64>u;d++){for(var l=0;7>l;l++,u++)e[u]=1&i>>6-l;u++}p(e);for(var c=0;66>c;c++)e[c]=0;for(var b=0;48>b;b++)y[b]=g[b];for(var s,S=0,m=0;2>S;S++,m++){s=v[m],t[S]=s,90<s&&(s-=6),57<s&&(s-=7),s-=46;for(var O=0;6>O;O++)if(1&s>>O){var h=y[6*S+O];y[6*S+O]=y[6*S+O+24],y[6*S+O+24]=h}}for(var j=0;25>j;j++)C(e);for(var M=0;11>M;M++){i=0;for(var T=0;6>T;T++)i<<=1,i|=e[6*M+T];57<(i+=46)&&(i+=7),90<i&&(i+=6),t[M+2]=i}return 0===t[1]&&(t[1]=t[0]),a?t:x(t)}const T=M;module.exports=o})();