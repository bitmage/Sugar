var Cb="isObject,isNaN".split(","),Db="keys,values,each,merge,clone,equal,watch,tap,has".split(",");
function Eb(a,b,c,d){var f=/^(.+?)(\[.*\])$/,g,e,i;if(d!==m&&(e=b.match(f))){i=e[1];b=e[2].replace(/^\[|\]$/g,"").split("][");b.forEach(function(h){g=!h||h.match(/^\d+$/);if(!i&&ca(a))i=a.length;a[i]||(a[i]=g?[]:{});a=a[i];i=h});if(!i&&g)i=a.length.toString();Eb(a,i,c)}else a[b]=c.match(/^[\d.]+$/)?parseFloat(c):c==="true"?j:c==="false"?m:c}H(r,m,j,{watch:function(a,b,c){if(ba){var d=a[b];r.defineProperty(a,b,{enumerable:j,configurable:j,get:function(){return d},set:function(f){d=c.call(a,b,d,f)}})}}});
H(r,m,function(a,b){return D(b)},{keys:function(a,b){var c=r.keys(a);c.forEach(function(d){b.call(a,d,a[d])});return c}});
H(r,m,m,{isObject:function(a){return ka(a)},isNaN:function(a){return E(a)&&a.valueOf()!==a.valueOf()},equal:function(a,b){return U(a)===U(b)},extended:function(a){return new N(a)},merge:function(a,b,c,d){var f,g;if(a&&typeof b!="string")for(f in b)if(la(b,f)&&a){g=b[f];if(L(a[f])){if(d===m)continue;if(D(d))g=d.call(b,f,a[f],b[f])}if(c===j&&g&&ja(g))if(ea(g))g=new u(g.getTime());else if(G(g))g=new t(g.source,qa(g));else{a[f]||(a[f]=s.isArray(g)?[]:{});r.merge(a[f],b[f],c,d);continue}a[f]=g}return a},
values:function(a,b){var c=[];J(a,function(d,f){c.push(f);b&&b.call(a,f)});return c},each:function(a,b){b&&J(a,function(c,d){b.call(a,c,d,a)});return a},clone:function(a,b){if(!ja(a))return a;if(s.isArray(a))return a.concat();var c=a instanceof N?new N:{};return r.merge(c,a,b)},fromQueryString:function(a,b){var c=r.extended();a=a&&a.toString?a.toString():"";decodeURIComponent(a.replace(/^.*?\?/,"")).split("&").forEach(function(d){d=d.split("=");d.length===2&&Eb(c,d[0],d[1],b)});return c},tap:function(a,
b){var c=b;D(b)||(c=function(){b&&a[b]()});c.call(a,a);return a},has:function(a,b){return la(a,b)}});K(r,m,m,y,function(a,b){var c="is"+b;Cb.push(c);a[c]=function(d){return fa(d,b)}});(function(){H(r,m,function(){return arguments.length===0},{extend:function(){sa(Cb.concat(Db),r)}})})();sa(Db,N);