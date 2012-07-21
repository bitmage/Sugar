var Fb,Gb;
H(v,j,m,{escapeRegExp:function(){return T(this)},escapeURL:function(a){return a?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(a){return a?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},unescapeHTML:function(){return this.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},encodeBase64:function(){return Fb(this)},decodeBase64:function(){return Gb(this)},each:function(a,b){var c,
d;if(D(a)){b=a;a=/[\s\S]/g}else if(a)if(F(a))a=t(T(a),"gi");else{if(G(a))a=t(a.source,qa(a,"g"))}else a=/[\s\S]/g;c=this.match(a)||[];if(b)for(d=0;d<c.length;d++)c[d]=b.call(this,c[d],d,c)||c[d];return c},shift:function(a){var b="";a=a||0;this.codes(function(c){b+=v.fromCharCode(c+a)});return b},codes:function(a){for(var b=[],c=0;c<this.length;c++){var d=this.charCodeAt(c);b.push(d);a&&a.call(this,d,c)}return b},chars:function(a){return this.each(a)},words:function(a){return this.trim().each(/\S+/g,
a)},lines:function(a){return this.trim().each(/^.*$/gm,a)},paragraphs:function(a){var b=this.trim().split(/[\r\n]{2,}/);return b=b.map(function(c){if(a)var d=a.call(c);return d?d:c})},startsWith:function(a,b){if(M(b))b=j;var c=G(a)?a.source.replace("^",""):T(a);return t("^"+c,b?"":"i").test(this)},endsWith:function(a,b){if(M(b))b=j;var c=G(a)?a.source.replace("$",""):T(a);return t(c+"$",b?"":"i").test(this)},isBlank:function(){return this.trim().length===0},has:function(a){return this.search(G(a)?
a:T(a))!==-1},add:function(a,b){b=M(b)?this.length:b;return this.slice(0,b)+a+this.slice(b)},remove:function(a){return this.replace(a,"")},reverse:function(){return this.split("").reverse().join("")},compact:function(){return this.trim().replace(/([\r\n\s\u3000])+/g,function(a,b){return b==="\u3000"?b:" "})},at:function(){return ra(this,arguments,j)},from:function(a){return this.slice(a)},to:function(a){if(M(a))a=this.length;return this.slice(0,a)},dasherize:function(){return this.underscore().replace(/_/g,
"-")},underscore:function(){return this.replace(/[-\s]+/g,"_").replace(v.Inflector&&v.Inflector.acronymRegExp,function(a,b){return(b>0?"_":"")+a.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(a){return this.underscore().replace(/(^|_)([^_]+)/g,function(b,c,d,f){b=d;b=(c=v.Inflector)&&c.acronyms[b];b=F(b)?b:void 0;f=a!==m||f>0;if(b)return f?b:b.toLowerCase();return f?d.capitalize():d})},spacify:function(){return this.underscore().replace(/_/g,
" ")},stripTags:function(){var a=this;I(arguments.length>0?arguments:[""],function(b){a=a.replace(t("</?"+T(b)+"[^<>]*>","gi"),"")});return a},removeTags:function(){var a=this;I(arguments.length>0?arguments:["\\S+"],function(b){b=t("<("+b+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");a=a.replace(b,"")});return a},truncate:function(a,b,c,d){var f="",g="",e=this.toString(),i="["+pa()+"]+",h="[^"+pa()+"]*",l=t(i+h+"$");d=M(d)?"...":v(d);if(e.length<=a)return e;switch(c){case "left":a=e.length-a;f=d;e=e.slice(a);
l=t("^"+h+i);break;case "middle":a=Q(a/2);g=d+e.slice(e.length-a).trimLeft();e=e.slice(0,a);break;default:a=a;g=d;e=e.slice(0,a)}if(b===m&&this.slice(a,a+1).match(/\S/))e=e.remove(l);return f+e+g},pad:function(a,b){return S(b,a)+this+S(b,a)},padLeft:function(a,b){return S(b,a)+this},padRight:function(a,b){return this+S(b,a)},first:function(a){if(M(a))a=1;return this.substr(0,a)},last:function(a){if(M(a))a=1;return this.substr(this.length-a<0?0:this.length-a)},repeat:function(a){var b="",c=0;if(E(a)&&
a>0)for(;c<a;){b+=this;c++}return b},toNumber:function(a){var b=this.replace(/,/g,"");return b.match(/\./)?parseFloat(b):parseInt(b,a||10)},capitalize:function(a){var b;return this.toLowerCase().replace(a?/[\s\S]/g:/^\S/,function(c){var d=c.toUpperCase(),f;f=b?c:d;b=d!==c;return f})},assign:function(){var a={};I(arguments,function(b,c){if(ka(b))ma(a,b);else a[c+1]=b});return this.replace(/\{([^{]+?)\}/g,function(b,c){return la(a,c)?a[c]:b})},namespace:function(){var a=aa;J(this.split("."),function(b,
c){return!!(a=a[c])});return a}});H(v,j,m,{insert:v.prototype.add});
(function(a){if(this.btoa){Fb=this.btoa;Gb=this.atob}else{var b=/[^A-Za-z0-9\+\/\=]/g;Fb=function(c){var d="",f,g,e,i,h,l,n=0;do{f=c.charCodeAt(n++);g=c.charCodeAt(n++);e=c.charCodeAt(n++);i=f>>2;f=(f&3)<<4|g>>4;h=(g&15)<<2|e>>6;l=e&63;if(isNaN(g))h=l=64;else if(isNaN(e))l=64;d=d+a.charAt(i)+a.charAt(f)+a.charAt(h)+a.charAt(l)}while(n<c.length);return d};Gb=function(c){var d="",f,g,e,i,h,l=0;if(c.match(b))throw Error("String contains invalid base64 characters");c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");
do{f=a.indexOf(c.charAt(l++));g=a.indexOf(c.charAt(l++));i=a.indexOf(c.charAt(l++));h=a.indexOf(c.charAt(l++));f=f<<2|g>>4;g=(g&15)<<4|i>>2;e=(i&3)<<6|h;d+=v.fromCharCode(f);if(i!=64)d+=v.fromCharCode(g);if(h!=64)d+=v.fromCharCode(e)}while(l<c.length);return d}}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");