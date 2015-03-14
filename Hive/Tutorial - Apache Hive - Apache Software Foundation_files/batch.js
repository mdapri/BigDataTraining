/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
jQuery.noConflict();
/* Atlassian UI and the Atlassian Design Guidelines are created by Atlassian. See https://developer.atlassian.com/display/AUI/ and https://developer.atlassian.com/design/ for license details. */
if(typeof jQuery!="undefined"){var AJS=(function(){var E=[];function F(G){switch(G){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";case"'":return"&#39;";case"`":return"&#96;";default:return"&quot;"}}var B=/[&"'<>`]/g;var D={version:"5.0",params:{},$:jQuery,log:function(){if(typeof console!="undefined"&&console.log){Function.prototype.apply.apply(console.log,[console,arguments])}},I18n:{getText:function(G){return G}},stopEvent:function(G){G.stopPropagation();return false},include:function(G){if(!this.contains(E,G)){E.push(G);var H=document.createElement("script");H.src=G;this.$("body").append(H)}},toggleClassName:function(G,H){if(!(G=this.$(G))){return }G.toggleClass(H)},setVisible:function(H,G){if(!(H=this.$(H))){return }var I=this.$;I(H).each(function(){var J=I(this).hasClass("hidden");if(J&&G){I(this).removeClass("hidden")}else{if(!J&&!G){I(this).addClass("hidden")}}})},setCurrent:function(G,H){if(!(G=this.$(G))){return }if(H){G.addClass("current")}else{G.removeClass("current")}},isVisible:function(G){return !this.$(G).hasClass("hidden")},isClipped:function(G){G=AJS.$(G);return(G.prop("scrollWidth")>G.prop("clientWidth"))},populateParameters:function(){var G=this;this.$(".parameters input").each(function(){var H=this.value,I=this.title||this.id;if(G.$(this).hasClass("list")){if(G.params[I]){G.params[I].push(H)}else{G.params[I]=[H]}}else{G.params[I]=(H.match(/^(tru|fals)e$/i)?H.toLowerCase()=="true":H)}})},toInit:function(H){var G=this;this.$(function(){try{H.apply(this,arguments)}catch(I){G.log("Failed to run init function: "+I+"\n"+H.toString())}});return this},indexOf:function(K,J,H){var I=K.length;if(H==null){H=0}else{if(H<0){H=Math.max(0,I+H)}}for(var G=H;G<I;G++){if(K[G]===J){return G}}return -1},contains:function(H,G){return this.indexOf(H,G)>-1},format:function(I){var G=/^((?:(?:[^']*'){2})*?[^']*?)\{(\d+)\}/,H=/'(?!')/g;AJS.format=function(M){var K=arguments,L="",J=M.match(G);while(J){M=M.substring(J[0].length);L+=J[1].replace(H,"")+(K.length>++J[2]?K[J[2]]:"");J=M.match(G)}return L+=M.replace(H,"")};return AJS.format.apply(AJS,arguments)},firebug:function(){var G=this.$(document.createElement("script"));G.attr("src","http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js");this.$("head").append(G);(function(){if(window.firebug){firebug.init()}else{setTimeout(arguments.callee,0)}})()},clone:function(G){return AJS.$(G).clone().removeAttr("id")},alphanum:function(N,M){N=(N+"").toLowerCase();M=(M+"").toLowerCase();var I=/(\d+|\D+)/g,J=N.match(I),G=M.match(I),L=Math.max(J.length,G.length);for(var H=0;H<L;H++){if(H==J.length){return -1}if(H==G.length){return 1}var O=parseInt(J[H],10),K=parseInt(G[H],10);if(O==J[H]&&K==G[H]&&O!=K){return(O-K)/Math.abs(O-K)}if((O!=J[H]||K!=G[H])&&J[H]!=G[H]){return J[H]<G[H]?-1:1}}return 0},dim:function(I){if(!AJS.dim.$dim){AJS.dim.$dim=AJS("div").addClass("aui-blanket");if(AJS.$.browser.msie){AJS.dim.$dim.css({width:"200%",height:Math.max(AJS.$(document).height(),AJS.$(window).height())+"px"})}AJS.$("body").append(AJS.dim.$dim);AJS.hasFlash=false;var H=/^[^:]*:\/*[^/]*|/;var G=H.exec(location.href)[0];if(AJS.$.browser.msie&&typeof AJS.hasFlash==="undefined"&&I===false){AJS.$("object, embed, iframe").each(function(){if(this.nodeName.toLowerCase()==="iframe"){if(H.exec(this.src)[0]===G&&AJS.$(this).contents().find("object, embed").length===0){return true}}AJS.hasFlash=true;return false})}if(AJS.$.browser.msie&&(I!==false||AJS.hasFlash)){AJS.dim.shim=AJS.$('<iframe frameBorder="0" class="aui-blanket-shim" src="javascript:false;"/>');AJS.dim.shim.css({height:Math.max(AJS.$(document).height(),AJS.$(window).height())+"px"});AJS.$("body").append(AJS.dim.shim)}if(AJS.$.browser.msie&&parseInt(AJS.$.browser.version,10)<8){AJS.dim.cachedOverflow=AJS.$("html").css("overflow");AJS.$("html").css("overflow","hidden")}else{AJS.dim.cachedOverflow=AJS.$("body").css("overflow");AJS.$("body").css("overflow","hidden")}}},undim:function(){if(AJS.dim.$dim){AJS.dim.$dim.remove();AJS.dim.$dim=null;if(AJS.dim.shim){AJS.dim.shim.remove()}if(AJS.$.browser.msie&&parseInt(AJS.$.browser.version,10)<8){AJS.$("html").css("overflow",AJS.dim.cachedOverflow)}else{AJS.$("body").css("overflow",AJS.dim.cachedOverflow)}if(AJS.$.browser.safari){var G=AJS.$(window).scrollTop();AJS.$(window).scrollTop(10+5*(G==10)).scrollTop(G)}}},onTextResize:function(H){if(typeof H=="function"){if(AJS.onTextResize["on-text-resize"]){AJS.onTextResize["on-text-resize"].push(function(I){H(I)})}else{var G=AJS("div");G.css({width:"1em",height:"1em",position:"absolute",top:"-9999em",left:"-9999em"});this.$("body").append(G);G.size=G.width();setInterval(function(){if(G.size!=G.width()){G.size=G.width();for(var I=0,J=AJS.onTextResize["on-text-resize"].length;I<J;I++){AJS.onTextResize["on-text-resize"][I](G.size)}}},0);AJS.onTextResize.em=G;AJS.onTextResize["on-text-resize"]=[function(I){H(I)}]}}},unbindTextResize:function(I){for(var G=0,H=AJS.onTextResize["on-text-resize"].length;G<H;G++){if(AJS.onTextResize["on-text-resize"][G]==I){return AJS.onTextResize["on-text-resize"].splice(G,1)}}},escape:function(G){return escape(G).replace(/%u\w{4}/gi,function(H){return unescape(H)})},escapeHtml:function(G){return G.replace(B,F)},filterBySearch:function(K,P,Q){if(P==""){return[]}var I=this.$;var N=(Q&&Q.keywordsField)||"keywords";var M=(Q&&Q.ignoreForCamelCase)?"i":"";var J=(Q&&Q.matchBoundary)?"\\b":"";var H=(Q&&Q.splitRegex)||(/\s+/);var L=P.split(H);var G=[];I.each(L,function(){var S=[new RegExp(J+this,"i")];if(/^([A-Z][a-z]*){2,}$/.test(this)){var R=this.replace(/([A-Z][a-z]*)/g,"\\b$1[^,]*");S.push(new RegExp(R,M))}G.push(S)});var O=[];I.each(K,function(){for(var T=0;T<G.length;T++){var R=false;for(var S=0;S<G[T].length;S++){if(G[T][S].test(this[N])){R=true;break}}if(!R){return }}O.push(this)});return O},drawLogo:function(J){options={};options=AJS.$.extend(J,options);var N=options.scaleFactor||1,M=options.fill||"#fff",L=options.stroke||"#000",I=400*N,G=40*N;strokeWidth=options.strokeWidth||1;if(AJS.$(".aui-logo").size()==0){AJS.$("body").append("<div id='aui-logo' class='aui-logo'><div>")}strokeWidth=options.strokeWidth||1,containerID=options.containerID||".aui-logo";var H=Raphael(containerID,I+50*N,G+100*N);var K=H.path("M 0,0 c 3.5433333,-4.7243333 7.0866667,-9.4486667 10.63,-14.173 -14.173,0 -28.346,0 -42.519,0 C -35.432667,-9.4486667 -38.976333,-4.7243333 -42.52,0 -28.346667,0 -14.173333,0 0,0 z m 277.031,28.346 c -14.17367,0 -28.34733,0 -42.521,0 C 245.14,14.173 255.77,0 266.4,-14.173 c -14.17267,0 -28.34533,0 -42.518,0 C 213.25167,0 202.62133,14.173 191.991,28.346 c -14.17333,0 -28.34667,0 -42.52,0 14.17333,-18.8976667 28.34667,-37.7953333 42.52,-56.693 -7.08667,-9.448667 -14.17333,-18.897333 -21.26,-28.346 -14.173,0 -28.346,0 -42.519,0 7.08667,9.448667 14.17333,18.897333 21.26,28.346 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 -14.173333,0 -28.346667,0 -42.52,0 10.63,-14.173 21.26,-28.346 31.89,-42.519 -14.390333,0 -28.780667,0 -43.171,0 C 42.520733,1.330715e-4 31.889933,14.174867 21.26,28.347 c -42.520624,6.24e-4 -85.039187,-8.13e-4 -127.559,-0.001 11.220667,-14.961 22.441333,-29.922 33.662,-44.883 -6.496,-8.661 -12.992,-17.322 -19.488,-25.983 5.905333,0 11.810667,0 17.716,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.173333,0 28.346667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.173333,0 28.3466667,0 42.52,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.1733333,0 28.3466667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.390333,0 28.780667,0 43.171,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 42.51967,0 85.03933,0 127.559,0 10.63033,14.173333 21.26067,28.346667 31.891,42.52 14.17267,0 28.34533,0 42.518,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.17367,0 28.34733,0 42.521,0 14.17333,18.897667 28.34667,37.795333 42.52,56.693 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 z");console.log(G);K.scale(N,-N,0,0);K.translate(120*N,G);K.attr("fill",M);K.attr("stroke",L);K.attr("stroke-width",strokeWidth)}};if(typeof AJS!="undefined"){for(var C in AJS){D[C]=AJS[C]}}var A=function(){var G=null;if(arguments.length&&typeof arguments[0]=="string"){G=arguments.callee.$(document.createElement(arguments[0]));if(arguments.length==2){G.html(arguments[1])}}return G};for(var C in D){A[C]=D[C]}return A})();AJS.$(function(){AJS.populateParameters()})}if(typeof console=="undefined"){console={messages:[],log:function(A){this.messages.push(A)},show:function(){alert(this.messages.join("\n"));this.messages=[]}}}else{console.show=function(){}}AJS.$.ajaxSettings.traditional=true;
(function(){var _after=1;var _afterThrow=2;var _afterFinally=3;var _before=4;var _around=5;var _intro=6;var _regexEnabled=true;var _arguments="arguments";var _undef="undefined";var getType=(function(){var toString=Object.prototype.toString,toStrings={},nodeTypes={1:"element",3:"textnode",9:"document",11:"fragment"},types="Arguments Array Boolean Date Document Element Error Fragment Function NodeList Null Number Object RegExp String TextNode Undefined Window".split(" ");for(var i=types.length;i--;){var type=types[i],constructor=window[type];if(constructor){try{toStrings[toString.call(new constructor)]=type.toLowerCase()}catch(e){}}}return function(item){return item==null&&(item===undefined?_undef:"null")||item.nodeType&&nodeTypes[item.nodeType]||typeof item.length=="number"&&(item.callee&&_arguments||item.alert&&"window"||item.item&&"nodelist")||toStrings[toString.call(item)]}})();var isFunc=function(obj){return getType(obj)=="function"};var weaveOne=function(source,method,advice){var old=source[method];if(advice.type!=_intro&&!isFunc(old)){var oldObject=old;old=function(){var code=arguments.length>0?_arguments+"[0]":"";for(var i=1;i<arguments.length;i++){code+=","+_arguments+"["+i+"]"}return eval("oldObject("+code+");")}}var aspect;if(advice.type==_after||advice.type==_afterThrow||advice.type==_afterFinally){aspect=function(){var returnValue,exceptionThrown=null;try{returnValue=old.apply(this,arguments)}catch(e){exceptionThrown=e}if(advice.type==_after){if(exceptionThrown==null){returnValue=advice.value.apply(this,[returnValue,method])}else{throw exceptionThrown}}else{if(advice.type==_afterThrow&&exceptionThrown!=null){returnValue=advice.value.apply(this,[exceptionThrown,method])}else{if(advice.type==_afterFinally){returnValue=advice.value.apply(this,[returnValue,exceptionThrown,method])}}}return returnValue}}else{if(advice.type==_before){aspect=function(){advice.value.apply(this,[arguments,method]);return old.apply(this,arguments)}}else{if(advice.type==_intro){aspect=function(){return advice.value.apply(this,arguments)}}else{if(advice.type==_around){aspect=function(){var invocation={object:this,args:Array.prototype.slice.call(arguments)};return advice.value.apply(invocation.object,[{arguments:invocation.args,method:method,proceed:function(){return old.apply(invocation.object,invocation.args)}}])}}}}}aspect.unweave=function(){source[method]=old;pointcut=source=aspect=old=null};source[method]=aspect;return aspect};var search=function(source,pointcut,advice){var methods=[];for(var method in source){var item=null;try{item=source[method]}catch(e){}if(item!=null&&method.match(pointcut.method)&&isFunc(item)){methods[methods.length]={source:source,method:method,advice:advice}}}return methods};var weave=function(pointcut,advice){var source=typeof (pointcut.target.prototype)!=_undef?pointcut.target.prototype:pointcut.target;var advices=[];if(advice.type!=_intro&&typeof (source[pointcut.method])==_undef){var methods=search(pointcut.target,pointcut,advice);if(methods.length==0){methods=search(source,pointcut,advice)}for(var i in methods){advices[advices.length]=weaveOne(methods[i].source,methods[i].method,methods[i].advice)}}else{advices[0]=weaveOne(source,pointcut.method,advice)}return _regexEnabled?advices:advices[0]};jQuery.aop={after:function(pointcut,advice){return weave(pointcut,{type:_after,value:advice})},afterThrow:function(pointcut,advice){return weave(pointcut,{type:_afterThrow,value:advice})},afterFinally:function(pointcut,advice){return weave(pointcut,{type:_afterFinally,value:advice})},before:function(pointcut,advice){return weave(pointcut,{type:_before,value:advice})},around:function(pointcut,advice){return weave(pointcut,{type:_around,value:advice})},introduction:function(pointcut,advice){return weave(pointcut,{type:_intro,value:advice})},setup:function(settings){_regexEnabled=settings.regexMatch}}})();
AJS.dropDown=function(L,E){var U=null,I=[],Q=false,H=AJS.$(document),C={item:"li:has(a)",activeClass:"active",alignment:"right",displayHandler:function(W){return W.name},escapeHandler:function(){this.hide("escape");return false},hideHandler:function(){},moveHandler:function(X,W){},useDisabled:false};AJS.$.extend(C,E);C.alignment={left:"left",right:"right"}[C.alignment.toLowerCase()]||"left";if(L&&L.jquery){U=L}else{if(typeof L=="string"){U=AJS.$(L)}else{if(L&&L.constructor==Array){U=AJS("div").addClass("aui-dropdown").toggleClass("hidden",!!C.isHiddenByDefault);for(var P=0,K=L.length;P<K;P++){var J=AJS("ol");for(var O=0,S=L[P].length;O<S;O++){var M=AJS("li");var G=L[P][O];if(G.href){M.append(AJS("a").html("<span>"+C.displayHandler(G)+"</span>").attr({href:G.href}).addClass(G.className));AJS.$.data(AJS.$("a > span",M)[0],"properties",G)}else{M.html(G.html).addClass(G.className)}if(G.icon){M.prepend(AJS("img").attr("src",G.icon))}if(G.insideSpanIcon){M.children("a").prepend(AJS("span").attr("class","icon"))}AJS.$.data(M[0],"properties",G);J.append(M)}if(P==K-1){J.addClass("last")}U.append(J)}AJS.$("body").append(U)}else{throw new Error("AJS.dropDown function was called with illegal parameter. Should be AJS.$ object, AJS.$ selector or array.")}}}var F=function(){N(+1)};var T=function(){N(-1)};var N=function(Z){var Y=!Q,W=AJS.dropDown.current.$[0],X=AJS.dropDown.current.links,a=W.focused;Q=true;if(X.length===0){return }W.focused=(typeof a==="number")?a:-1;if(!AJS.dropDown.current){AJS.log("move - not current, aborting");return true}W.focused+=Z;if(W.focused<0){W.focused=X.length-1}else{if(W.focused>=X.length){W.focused=0}}C.moveHandler(AJS.$(X[W.focused]),Z<0?"up":"down");if(Y&&X.length){AJS.$(X[W.focused]).addClass(C.activeClass);Q=false}else{if(!X.length){Q=false}}};var V=function(Y){if(!AJS.dropDown.current){return true}var Z=Y.which,W=AJS.dropDown.current.$[0],X=AJS.dropDown.current.links;AJS.dropDown.current.cleanActive();switch(Z){case 40:F();break;case 38:T();break;case 27:return C.escapeHandler.call(AJS.dropDown.current,Y);case 13:if(W.focused>=0){if(!C.selectionHandler){if(AJS.$(X[W.focused]).attr("nodeName")!="a"){return AJS.$("a",X[W.focused]).trigger("focus")}else{return AJS.$(X[W.focused]).trigger("focus")}}else{return C.selectionHandler.call(AJS.dropDown.current,Y,AJS.$(X[W.focused]))}}return true;default:if(X.length){AJS.$(X[W.focused]).addClass(C.activeClass)}return true}Y.stopPropagation();Y.preventDefault();return false};var A=function(W){if(!((W&&W.which&&(W.which==3))||(W&&W.button&&(W.button==2))||false)){if(AJS.dropDown.current){AJS.dropDown.current.hide("click")}}};var D=function(W){return function(){if(!AJS.dropDown.current){return }AJS.dropDown.current.cleanFocus();this.originalClass=this.className;AJS.$(this).addClass(C.activeClass);AJS.dropDown.current.$[0].focused=W}};var R=function(W){if(W.button||W.metaKey||W.ctrlKey||W.shiftKey){return true}if(AJS.dropDown.current&&C.selectionHandler){C.selectionHandler.call(AJS.dropDown.current,W,AJS.$(this))}};var B=function(X){var W=false;if(X.data("events")){AJS.$.each(X.data("events"),function(Y,Z){AJS.$.each(Z,function(b,a){if(R===a){W=true;return false}})})}return W};U.each(function(){var W=this,Y=AJS.$(this),Z={};var X={reset:function(){Z=AJS.$.extend(Z,{$:Y,links:AJS.$(C.item||"li:has(a)",W),cleanActive:function(){if(W.focused+1&&Z.links.length){AJS.$(Z.links[W.focused]).removeClass(C.activeClass)}},cleanFocus:function(){Z.cleanActive();W.focused=-1},moveDown:F,moveUp:T,moveFocus:V,getFocusIndex:function(){return(typeof W.focused=="number")?W.focused:-1}});Z.links.each(function(a){var b=AJS.$(this);if(!B(b)){b.hover(D(a),Z.cleanFocus);b.click(R)}})},appear:function(a){if(a){Y.removeClass("hidden");Y.addClass("aui-dropdown-"+C.alignment)}else{Y.addClass("hidden")}},fade:function(a){if(a){Y.fadeIn("fast")}else{Y.fadeOut("fast")}},scroll:function(a){if(a){Y.slideDown("fast")}else{Y.slideUp("fast")}}};Z.reset=X.reset;Z.reset();Z.addControlProcess=function(b,a){AJS.$.aop.around({target:this,method:b},a)};Z.addCallback=function(b,a){return AJS.$.aop.after({target:this,method:b},a)};Z.show=function(a){if(C.useDisabled&&this.$.closest(".aui-dd-parent").hasClass("disabled")){return }this.alignment=C.alignment;A();AJS.dropDown.current=this;this.method=a||this.method||"appear";this.timer=setTimeout(function(){H.click(A)},0);H.keydown(V);if(C.firstSelected&&this.links[0]){D(0).call(this.links[0])}AJS.$(W.offsetParent).css({zIndex:2000});X[this.method](true);AJS.$(document).trigger("showLayer",["dropdown",AJS.dropDown.current])};Z.hide=function(a){this.method=this.method||"appear";AJS.$(Y.get(0).offsetParent).css({zIndex:""});this.cleanFocus();X[this.method](false);H.unbind("click",A).unbind("keydown",V);AJS.$(document).trigger("hideLayer",["dropdown",AJS.dropDown.current]);AJS.dropDown.current=null;return a};Z.addCallback("reset",function(){if(C.firstSelected&&this.links[0]){D(0).call(this.links[0])}});if(!AJS.dropDown.iframes){AJS.dropDown.iframes=[]}AJS.dropDown.createShims=function(){AJS.$("iframe").each(function(a){var b=this;if(!b.shim){b.shim=AJS.$("<div />").addClass("shim hidden").appendTo("body");AJS.dropDown.iframes.push(b)}});return arguments.callee}();Z.addCallback("show",function(){AJS.$(AJS.dropDown.iframes).each(function(){var a=AJS.$(this);if(a.is(":visible")){var b=a.offset();b.height=a.height();b.width=a.width();this.shim.css({left:b.left+"px",top:b.top+"px",height:b.height+"px",width:b.width+"px"}).removeClass("hidden")}})});Z.addCallback("hide",function(){AJS.$(AJS.dropDown.iframes).each(function(){this.shim.addClass("hidden")});C.hideHandler()});(function(){var a=function(){var b=this.$.offset();if(this.shadow){this.shadow.remove()}if(this.$.is(":visible")){this.shadow=Raphael.shadow(0,0,this.$.outerWidth(true),this.$.outerHeight(true),{target:this.$[0]})}};Z.addCallback("reset",a);Z.addCallback("show",a);Z.addCallback("hide",function(){if(this.shadow){this.shadow.remove()}})})();if(AJS.$.browser.msie&&~~(AJS.$.browser.version)<9){(function(){var a=function(){if(this.$.is(":visible")){if(!this.iframeShim){this.iframeShim=AJS.$('<iframe class="dropdown-shim" src="javascript:false;" frameBorder="0" />').insertBefore(this.$)}this.iframeShim.css({display:"block",top:this.$.css("top"),width:this.$.outerWidth()+"px",height:this.$.outerHeight()+"px"});if(C.alignment=="left"){this.iframeShim.css({left:"0px"})}else{this.iframeShim.css({right:"0px"})}}};Z.addCallback("reset",a);Z.addCallback("show",a);Z.addCallback("hide",function(){if(this.iframeShim){this.iframeShim.css({display:"none"})}})})()}I.push(Z)});return I};AJS.dropDown.getAdditionalPropertyValue=function(D,A){var C=D[0];if(!C||(typeof C.tagName!="string")||C.tagName.toLowerCase()!="li"){AJS.log("AJS.dropDown.getAdditionalPropertyValue : item passed in should be an LI element wrapped by jQuery")}var B=AJS.$.data(C,"properties");return B?B[A]:null};AJS.dropDown.removeAllAdditionalProperties=function(A){};AJS.dropDown.Standard=function(H){var C=[],G,B={selector:".aui-dd-parent",dropDown:".aui-dropdown",trigger:".aui-dd-trigger"};AJS.$.extend(B,H);var F=function(I,L,K,J){AJS.$.extend(J,{trigger:I});L.addClass("dd-allocated");K.addClass("hidden");if(B.isHiddenByDefault==false){J.show()}J.addCallback("show",function(){L.addClass("active")});J.addCallback("hide",function(){L.removeClass("active")})};var A=function(K,I,L,J){if(J!=AJS.dropDown.current){L.css({top:I.outerHeight()});J.show();K.stopImmediatePropagation()}K.preventDefault()};if(B.useLiveEvents){var D=[];var E=[];AJS.$(B.trigger).live("click",function(L){var I=AJS.$(this);var N,M,J;var K;if((K=AJS.$.inArray(this,D))>=0){var O=E[K];N=O.parent;M=O.dropdown;J=O.ddcontrol}else{N=I.closest(B.selector);M=N.find(B.dropDown);if(M.length===0){return }J=AJS.dropDown(M,B)[0];if(!J){return }D.push(this);O={parent:N,dropdown:M,ddcontrol:J};F(I,N,M,J);E.push(O)}A(L,I,M,J)})}else{if(this instanceof AJS.$){G=this}else{G=AJS.$(B.selector)}G=G.not(".dd-allocated").filter(":has("+B.dropDown+")").filter(":has("+B.trigger+")");G.each(function(){var L=AJS.$(this),K=AJS.$(B.dropDown,this),I=AJS.$(B.trigger,this),J=AJS.dropDown(K,B)[0];AJS.$.extend(J,{trigger:I});F(I,L,K,J);I.click(function(M){A(M,I,K,J)});C.push(J)})}return C};AJS.dropDown.Ajax=function(C){var B,A={cache:true};AJS.$.extend(A,C||{});B=AJS.dropDown.Standard.call(this,A);AJS.$(B).each(function(){var D=this;AJS.$.extend(D,{getAjaxOptions:function(E){var F=function(G){if(A.formatResults){G=A.formatResults(G)}if(A.cache){D.cache.set(D.getAjaxOptions(),G)}D.refreshSuccess(G)};if(A.ajaxOptions){if(AJS.$.isFunction(A.ajaxOptions)){return AJS.$.extend(A.ajaxOptions.call(D),{success:F})}else{return AJS.$.extend(A.ajaxOptions,{success:F})}}return AJS.$.extend(E,{success:F})},refreshSuccess:function(E){this.$.html(E)},cache:function(){var E={};return{get:function(F){var G=F.data||"";return E[(F.url+G).replace(/[\?\&]/gi,"")]},set:function(F,G){var H=F.data||"";E[(F.url+H).replace(/[\?\&]/gi,"")]=G},reset:function(){E={}}}}(),show:function(E){return function(F){if(A.cache&&!!D.cache.get(D.getAjaxOptions())){D.refreshSuccess(D.cache.get(D.getAjaxOptions()));E.call(D)}else{AJS.$(AJS.$.ajax(D.getAjaxOptions())).throbber({target:D.$,end:function(){D.reset()}});E.call(D);D.shadow.hide();if(D.iframeShim){D.iframeShim.hide()}}}}(D.show),resetCache:function(){D.cache.reset()}});D.addCallback("refreshSuccess",function(){D.reset()})});return B};AJS.$.fn.dropDown=function(B,A){B=(B||"Standard").replace(/^([a-z])/,function(C){return C.toUpperCase()});return AJS.dropDown[B].call(this,A)};
AJS=AJS||{};(function(){var A="\/confluence";A=(A.indexOf("%_CONTEXT_PATH")==0?false:A);AJS.contextPath=function(){var B=null;var D=[A,window.contextPath,window.Confluence&&Confluence.getContextPath(),window.BAMBOO&&BAMBOO.contextPath,window.FECRU&&FECRU.pageContext];for(var C=0;C<D.length;C++){if(typeof D[C]==="string"){B=D[C];break}}return B}})();
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\

(function(a){var b="0.3.4",c="hasOwnProperty",d=/[\.\/]/,e="*",f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=i,e=Array.prototype.slice.call(arguments,2),f=k.listeners(a),l=0,m=!1,n,o=[],p={},q=[],r=h,s=[];h=a,i=0;for(var t=0,u=f.length;t<u;t++)"zIndex"in f[t]&&(o.push(f[t].zIndex),f[t].zIndex<0&&(p[f[t].zIndex]=f[t]));o.sort(g);while(o[l]<0){n=p[o[l++]],q.push(n.apply(b,e));if(i){i=d;return q}}for(t=0;t<u;t++){n=f[t];if("zIndex"in n)if(n.zIndex==o[l]){q.push(n.apply(b,e));if(i)break;do{l++,n=p[o[l]],n&&q.push(n.apply(b,e));if(i)break}while(n)}else p[n.zIndex]=n;else{q.push(n.apply(b,e));if(i)break}}i=d,h=r;return q.length?q:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i<k;i++){n=[];for(l=0,m=o.length;l<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&&(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g<h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)")).test(h);return h},k.off=k.unbind=function(a,b){var f=a.split(d),g,h,i,k,l,m,n,o=[j];for(k=0,l=f.length;k<l;k++)for(m=0;m<o.length;m+=i.length-2){i=[m,1],g=o[m].n;if(f[k]!=e)g[f[k]]&&i.push(g[f[k]]);else for(h in g)g[c](h)&&i.push(g[h]);o.splice.apply(o,i)}for(k=0,l=o.length;k<l;k++){g=o[k];while(g.n){if(b){if(g.f){for(m=0,n=g.f.length;m<n;m++)if(g.f[m]==b){g.f.splice(m,1);break}!g.f.length&&delete g.f}for(h in g.n)if(g.n[c](h)&&g.n[h].f){var p=g.n[h].f;for(m=0,n=p.length;m<n;m++)if(p[m]==b){p.splice(m,1);break}!p.length&&delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&&g.n[h].f&&delete g.n[h].f}g=g.n}}},k.once=function(a,b){var c=function(){var d=b.apply(this,arguments);k.unbind(a,c);return d};return k.on(a,c)},k.version=b,k.toString=function(){return"You are running Eve "+b},typeof module!="undefined"&&module.exports?module.exports=k:typeof define!="undefined"?define("eve",[],function(){return k}):a.eve=k})(this),function(){function cF(a){for(var b=0;b<cy.length;b++)cy[b].el.paper==a&&cy.splice(b--,1)}function cE(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};if(f)for(y=0,z=cy.length;y<z;y++){var x=cy[y];if(x.el.id==d.id&&x.anim==b){x.percent!=e?(cy.splice(y,1),l=1):k=x,d.attr(x.totalOrigin);break}}else f=+v;for(var y=0,z=b.percents.length;y<z;y++){if(b.percents[y]==e||b.percents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*(e-p),o=b.percents[y+1],j=b.anim[e];break}f&&d.attr(b.anim[b.percents[y]])}if(!!j){if(!k){for(var A in j)if(j[g](A))if(U[g](A)||d.paper.customAttributes[g](A)){u[A]=d.attr(A),u[A]==null&&(u[A]=T[A]),v[A]=j[A];switch(U[A]){case C:w[A]=(v[A]-u[A])/t;break;case"colour":u[A]=a.getRGB(u[A]);var B=a.getRGB(v[A]);w[A]={r:(B.r-u[A].r)/t,g:(B.g-u[A].g)/t,b:(B.b-u[A].b)/t};break;case"path":var D=bR(u[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];for(y=0,z=u[A].length;y<z;y++){w[A][y]=[0];for(var F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=ca(H[A],v[A]);if(I){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;for(y=0,z=u[A].length;y<z;y++){w[A][y]=[u[A][y][0]];for(F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new cb,K={_:{transform:H.transform},getBBox:function(){return d.getBBox(1)}};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],b$(K,v[A]),v[A]=K._.transform,w[A]=[(K.matrix.a-J.a)/t,(K.matrix.b-J.b)/t,(K.matrix.c-J.c)/t,(K.matrix.d-J.d)/t,(K.matrix.e-J.e)/t,(K.matrix.f-J.f)/t]}break;case"csv":var L=r(j[A])[s](c),M=r(u[A])[s](c);if(A=="clip-rect"){u[A]=M,w[A]=[],y=M.length;while(y--)w[A][y]=(L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n](j[A]),M=[][n](u[A]),w[A]=[],y=d.paper.customAttributes[A].length;while(y--)w[A][y]=((L[y]||0)-(M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if(!P){P=r(O).match(N);if(P&&P.length==5){var R=P;P=function(a){return cC(a,+R[1],+R[2],+R[3],+R[4],t)}}else P=bf}q=j.start||b.start||+(new Date),x={anim:b,percent:e,timestamp:q,start:q+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.callback,prev:p,next:o,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cy.push(x);if(f&&!k&&!l){x.stop=!0,x.start=new Date-t*f;if(cy.length==1)return cA()}l&&(x.start=new Date-x.ms*f),cy.length==1&&cz(cA)}else k.initstatus=f,k.start=new Date-k.ms*f;eve("raphael.anim.start."+d.id,d,b)}}function cD(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&&(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bd)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cC(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(z(f)<b)return e;j=(3*i*e+2*h)*e+g;if(z(j)<1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(z(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function cq(){return this.x+q+this.y+q+this.width+" × "+this.height}function cp(){return this.x+q+this.y}function cb(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bH(b,c,d){b=a._path2curve(b),c=a._path2curve(c);var e,f,g,h,i,j,k,l,m,n,o=d?0:[];for(var p=0,q=b.length;p<q;p++){var r=b[p];if(r[0]=="M")e=i=r[1],f=j=r[2];else{r[0]=="C"?(m=[e,f].concat(r.slice(1)),e=m[6],f=m[7]):(m=[e,f,e,f,i,j,i,j],e=i,f=j);for(var s=0,t=c.length;s<t;s++){var u=c[s];if(u[0]=="M")g=k=u[1],h=l=u[2];else{u[0]=="C"?(n=[g,h].concat(u.slice(1)),g=n[6],h=n[7]):(n=[g,h,g,h,k,l,k,l],g=k,h=l);var v=bG(m,n,d);if(d)o+=v;else{for(var w=0,x=v.length;w<x;w++)v[w].segment1=p,v[w].segment2=s,v[w].bez1=m,v[w].bez2=n;o=o.concat(v)}}}}}return o}function bG(b,c,d){var e=a.bezierBBox(b),f=a.bezierBBox(c);if(!a.isBBoxIntersect(e,f))return d?0:[];var g=bB.apply(0,b),h=bB.apply(0,c),i=~~(g/5),j=~~(h/5),k=[],l=[],m={},n=d?0:[];for(var o=0;o<i+1;o++){var p=a.findDotsAtSegment.apply(a,b.concat(o/i));k.push({x:p.x,y:p.y,t:o/i})}for(o=0;o<j+1;o++)p=a.findDotsAtSegment.apply(a,c.concat(o/j)),l.push({x:p.x,y:p.y,t:o/j});for(o=0;o<i;o++)for(var q=0;q<j;q++){var r=k[o],s=k[o+1],t=l[q],u=l[q+1],v=z(s.x-r.x)<.001?"y":"x",w=z(u.x-t.x)<.001?"y":"x",x=bD(r.x,r.y,s.x,s.y,t.x,t.y,u.x,u.y);if(x){if(m[x.x.toFixed(4)]==x.y.toFixed(4))continue;m[x.x.toFixed(4)]=x.y.toFixed(4);var y=r.t+z((x[v]-r[v])/(s[v]-r[v]))*(s.t-r.t),A=t.t+z((x[w]-t[w])/(u[w]-t[w]))*(u.t-t.t);y>=0&&y<=1&&A>=0&&A<=1&&(d?n++:n.push({x:x.x,y:x.y,t1:y,t2:A}))}}return n}function bF(a,b){return bG(a,b,1)}function bE(a,b){return bG(a,b)}function bD(a,b,c,d,e,f,g,h){if(!(x(a,c)<y(e,g)||y(a,c)>x(e,g)||x(b,d)<y(f,h)||y(b,d)>x(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(!k)return;var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(n<+y(a,c).toFixed(2)||n>+x(a,c).toFixed(2)||n<+y(e,g).toFixed(2)||n>+x(e,g).toFixed(2)||o<+y(b,d).toFixed(2)||o>+x(b,d).toFixed(2)||o<+y(f,h).toFixed(2)||o>+x(f,h).toFixed(2))return;return{x:l,y:m}}}function bC(a,b,c,d,e,f,g,h,i){if(!(i<0||bB(a,b,c,d,e,f,g,h)<i)){var j=1,k=j/2,l=j-k,m,n=.01;m=bB(a,b,c,d,e,f,g,h,l);while(z(m-i)>n)k/=2,l+=(m<i?1:-1)*k,m=bB(a,b,c,d,e,f,g,h,l);return l}}function bB(a,b,c,d,e,f,g,h,i){i==null&&(i=1),i=i>1?1:i<0?0:i;var j=i/2,k=12,l=[-0.1252,.1252,-0.3678,.3678,-0.5873,.5873,-0.7699,.7699,-0.9041,.9041,-0.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],n=0;for(var o=0;o<k;o++){var p=j*l[o]+j,q=bA(p,a,c,e,g),r=bA(p,b,d,f,h),s=q*q+r*r;n+=m[o]*w.sqrt(s)}return j*n}function bA(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function by(a,b){var c=[];for(var d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function bx(){return this.hex}function bv(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bu(i,f);return c?c(h[f]):h[f]}i.length>=1e3&&delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bu(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function bm(a){if(Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[g](c)&&(b[c]=bm(a[c]));return b}function a(c){if(a.is(c,"function"))return b?c():eve.on("raphael.DOMload",c);if(a.is(c,E))return a._engine.create[m](a,c.splice(0,3+a.is(c[0],C))).add(c);var d=Array.prototype.slice.call(arguments,0);if(a.is(d[d.length-1],"function")){var e=d.pop();return b?e.call(a._engine.create[m](a,d)):eve.on("raphael.DOMload",function(){e.call(a._engine.create[m](a,d))})}return a._engine.create[m](a,arguments)}a.version="2.1.0",a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,"Raphael"),is:h.win.Raphael},j=function(){this.ca=this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in h.doc,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C="number",D="string",E="array",F="toString",G="fill",H=Object.prototype.toString,I={},J="push",K=a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P="setAttribute",Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x:C,y:C},V=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,W=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,X={hs:1,rg:1},Y=/,?([achlmqrstvxz]),?/gi,Z=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,$=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,_=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,ba=a._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,bb={},bc=function(a,b){return a.key-b.key},bd=function(a,b){return Q(a)-Q(b)},be=function(){},bf=function(a){return a},bg=a._rectPath=function(a,b,c,d,e){if(e)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e],["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},bh=function(a,b,c,d){d==null&&(d=c);return[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},bi=a._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bg(b.x,b.y,b.width,b.height)}},bj=a.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;a=bR(a);for(e=0,g=a.length;e<g;e++){i=a[e];for(f=1,h=i.length;f<h;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bk=h.doc.createElement("div"),bl;bk.innerHTML='<v:shape adj="1"/>',bl=bk.firstChild,bl.style.behavior="url(#default#VML)";if(!bl||typeof bl.adj!="object")return a.type=p;bk=null}a.svg=!(a.vml=a.type=="VML"),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b=="finite")return!M[g](+a);if(b=="array")return a instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};var bn=a.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a=="x"?b:b&3|8;return c.toString(16)});a.setWindow=function(b){eve("raphael.setWindow",a,h.win,b),h.win=b,h.doc=h.win.document,a._engine.initWin&&a._engine.initWin(h.win)};var bo=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bo=bv(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=h.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",h.doc.body.appendChild(i),bo=bv(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue("color")})}return bo(b)},bp=function(){return"hsb("+[this.h,this.s,this.b]+")"},bq=function(){return"hsl("+[this.h,this.s,this.l]+")"},br=function(){return this.hex},bs=function(b,c,d){c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b&&(d=b.b,c=b.g,b=b.r);if(c==null&&a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b>1||c>1||d>1)b/=255,c/=255,d/=255;return[b,c,d]},bt=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:br};a.is(e,"finite")&&(f.opacity=e);return f};a.color=function(b){var c;a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,"string")&&(b=a.getRGB(b)),a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=br;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h);if(a>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c<.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bp}},a.rgb2hsl=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f<.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bq}},a._path2string=function(){return this.join(",").replace(Y,"$1")};var bw=a._preload=function(a,b){var c=h.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bv(function(b){if(!b||!!((b=r(b)).indexOf("-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bx};!X[g](b.toLowerCase().substring(0,2))&&b.charAt()!="#"&&(b=bo(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&&(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&&(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&&(j=k[4][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),k[1].toLowerCase().slice(0,4)=="rgba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100));if(k[5]){j=k[5][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsla"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bx},k.hex="#"+(16777216|f|e<<8|d<<16).toString(16).slice(1),a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx}},a),a.hsb=bv(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bv(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bv(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=function(b){if(!b)return null;var c=bz(b);if(c.arr)return bJ(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];a.is(b,E)&&a.is(b[0],E)&&(e=bJ(b)),e.length||r(b).replace(Z,function(a,b,c){var f=[],g=b.toLowerCase();c.replace(_,function(a,b){b&&f.push(+b)}),g=="m"&&f.length>2&&(e.push([b][n](f.splice(0,2))),g="l",b=b=="m"?"l":"L");if(g=="r")e.push([b][n](f));else while(f.length>=d[g]){e.push([b][n](f.splice(0,d[g])));if(!d[g])break}}),e.toString=a._path2string,c.arr=bJ(e);return e},a.parseTransformString=bv(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=bJ(b)),d.length||r(b).replace($,function(a,b,c){var e=[],f=v.call(b);c.replace(_,function(a,b){b&&e.push(+b)}),d.push([b][n](e))}),d.toString=a._path2string;return d});var bz=function(a){var b=bz.ps=bz.ps||{};b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[g](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])});return b[a]};a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q>s||r<t)&&(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a.bezierBBox=function(b,c,d,e,f,g,h,i){a.is(b,"array")||(b=[b,c,d,e,f,g,h,i]);var j=bQ.apply(null,b);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},a.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},a.isBBoxIntersect=function(b,c){var d=a.isPointInsideBBox;return d(c,b.x,b.y)||d(c,b.x2,b.y)||d(c,b.x,b.y2)||d(c,b.x2,b.y2)||d(b,c.x,c.y)||d(b,c.x2,c.y)||d(b,c.x,c.y2)||d(b,c.x2,c.y2)||(b.x<c.x2&&b.x>c.x||c.x<b.x2&&c.x>b.x)&&(b.y<c.y2&&b.y>c.y||c.y<b.y2&&c.y>b.y)},a.pathIntersection=function(a,b){return bH(a,b)},a.pathIntersectionNumber=function(a,b){return bH(a,b,1)},a.isPointInsidePath=function(b,c,d){var e=a.pathBBox(b);return a.isPointInsideBBox(e,c,d)&&bH(b,[["M",c,d],["H",e.x2+10]],1)%2==1},a._removedFactory=function(a){return function(){eve("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var bI=a.pathBBox=function(a){var b=bz(a);if(b.bbox)return b.bbox;if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=bR(a);var c=0,d=0,e=[],f=[],g;for(var h=0,i=a.length;h<i;h++){g=a[h];if(g[0]=="M")c=g[1],d=g[2],e.push(c),f.push(d);else{var j=bQ(c,d,g[1],g[2],g[3],g[4],g[5],g[6]);e=e[n](j.min.x,j.max.x),f=f[n](j.min.y,j.max.y),c=g[5],d=g[6]}}var k=y[m](0,e),l=y[m](0,f),o=x[m](0,e),p=x[m](0,f),q={x:k,y:l,x2:o,y2:p,width:o-k,height:p-l};b.bbox=bm(q);return q},bJ=function(b){var c=bm(b);c.toString=a._path2string;return c},bK=a._pathToRelative=function(b){var c=bz(b);if(c.rel)return bJ(c.rel);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=b[0][1],f=b[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=b.length;j<k;j++){var l=d[j]=[],m=b[j];if(m[0]!=v.call(m[0])){l[0]=v.call(m[0]);switch(l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;n<o;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}}else{l=d[j]=[],m[0]=="m"&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;p<q;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}d.toString=a._path2string,c.rel=bJ(d);return d},bL=a._pathToAbsolute=function(b){var c=bz(b);if(c.abs)return bJ(c.abs);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=+b[0][1],f=+b[0][2],g=e,h=f,i++,d[0]=["M",e,f]);var j=b.length==3&&b[0][0]=="M"&&b[1][0].toUpperCase()=="R"&&b[2][0].toUpperCase()=="Z";for(var k,l,m=i,o=b.length;m<o;m++){d.push(k=[]),l=b[m];if(l[0]!=S.call(l[0])){k[0]=S.call(l[0]);switch(k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":var p=[e,f][n](l.slice(1));for(var q=2,r=p.length;q<r;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[n](by(p,j));break;case"M":g=+l[1]+e,h=+l[2]+f;default:for(q=1,r=l.length;q<r;q++)k[q]=+l[q]+(q%2?e:f)}}else if(l[0]=="R")p=[e,f][n](l.slice(1)),d.pop(),d=d[n](by(p,j)),k=["R"][n](l.slice(-2));else for(var s=0,t=l.length;s<t;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=h;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],h=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}d.toString=a._path2string,c.abs=bJ(d);return d},bM=function(a,b,c,d){return[a,b,c,d,c,d]},bN=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bO=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bv(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),t=(a-h)/2,u=(b-i)/2,v=t*t/(c*c)+u*u/(d*d);v>1&&(v=w.sqrt(v),c=v*c,d=v*d);var x=c*c,y=d*d,A=(f==g?-1:1)*w.sqrt(z((x*y-x*u*u-y*t*t)/(x*u*u+y*t*t))),C=A*c*u/d+(a+h)/2,D=A*-d*t/c+(b+i)/2,E=w.asin(((b-D)/d).toFixed(9)),F=w.asin(((i-D)/d).toFixed(9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&(E=B*2+E),F<0&&(F=B*2+F),g&&E>F&&(E=E-B*2),!g&&F>E&&(F=F-B*2)}else E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;if(z(G)>k){var H=F,I=h,J=i;F=E+k*(g&&F>E?1:-1),h=C+c*w.cos(F),i=D+d*w.sin(F),m=bO(h,i,c,d,e,0,g,I,J,[F,H,C,D])}G=F-E;var K=w.cos(E),L=w.sin(E),M=w.cos(F),N=w.sin(F),O=w.tan(G/4),P=4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0]=2*R[0]-S[0],S[1]=2*R[1]-S[1];if(j)return[S,T,U][n](m);m=[S,T,U][n](m).join()[s](",");var V=[];for(var W=0,X=m.length;W<X;W++)V[W]=W%2?p(m[W-1],m[W],l).y:p(m[W],m[W+1],l).x;return V},bP=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bQ=bv(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bR=a._path2curve=bv(function(a,b){var c=!b&&bz(a);if(!b&&c.curve)return bJ(c.curve);var d=bL(a),e=b&&bL(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n](bO[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"][n](bN(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n](bN(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](bM(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](bM(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](bM(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](bM(b.x,b.y,b.X,b.Y))}return a},i=function(a,b){if(a[b].length>7){a[b].shift();var c=a[b];while(c.length)a.splice(b++,0,["C"][n](c.splice(0,6)));a.splice(b,1),l=x(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=x(d.length,e&&e.length||0))};for(var k=0,l=x(d.length,e&&e.length||0);k<l;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var o=d[k],p=e&&e[k],q=o.length,r=e&&p.length;f.x=o[q-2],f.y=o[q-1],f.bx=Q(o[q-4])||f.x,f.by=Q(o[q-3])||f.y,g.bx=e&&(Q(p[r-4])||g.x),g.by=e&&(Q(p[r-3])||g.y),g.x=e&&p[r-2],g.y=e&&p[r-1]}e||(c.curve=bJ(d));return e?[d,e]:d},null,bJ),bS=a._parseDots=bv(function(b){var c=[];for(var d=0,e=b.length;d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;d<e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bT=a._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)},bU=a._tofront=function(a,b){b.top!==a&&(bT(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bV=a._toback=function(a,b){b.bottom!==a&&(bT(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bW=a._insertafter=function(a,b,c){bT(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bX=a._insertbefore=function(a,b,c){bT(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bY=a.toMatrix=function(a,b){var c=bI(a),d={_:{transform:p},getBBox:function(){return c}};b$(d,b);return d.matrix},bZ=a.transformPath=function(a,b){return bj(a,bY(a,b))},b$=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new cb;j.transform=d||[];if(d)for(var l=0,m=d.length;l<m;l++){var n=d[l],o=n.length,q=r(n[0]).toLowerCase(),s=n[0]!=q,t=s?k.invert():0,u,v,w,x,y;q=="t"&&o==3?s?(u=t.x(0,0),v=t.y(0,0),w=t.x(n[1],n[2]),x=t.y(n[1],n[2]),k.translate(w-u,x-v)):k.translate(n[1],n[2]):q=="r"?o==2?(y=y||b.getBBox(1),k.rotate(n[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&(s?(w=t.x(n[2],n[3]),x=t.y(n[2],n[3]),k.rotate(n[1],w,x)):k.rotate(n[1],n[2],n[3]),e+=n[1]):q=="s"?o==2||o==3?(y=y||b.getBBox(1),k.scale(n[1],n[o-1],y.x+y.width/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&(s?(w=t.x(n[3],n[4]),x=t.y(n[3],n[4]),k.scale(n[1],n[2],w,x)):k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):q=="m"&&o==7&&k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&&i==1&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},b_=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a[3],a[4]]:a.length==3?[b,1,1]:[b,1]}},ca=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g<d;g++){j=b[g]||b_(c[g]),k=c[g]||b_(j);if(j[0]!=k[0]||j[0].toLowerCase()=="r"&&(j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase()=="s"&&(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h<i;h++)h in j&&(e[g][h]=j[h]),h in k&&(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&&!a.is(b,"object")?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bK,a._engine={},a.path2curve=bR,a.matrix=function(a,b,c,d,e,f){return new cb(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&&a instanceof cb&&(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j<3;j++)for(k=0;k<3;k++){m=0;for(l=0;l<3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new cb(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new cb(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g<0?(b.rotate=a.deg(w.acos(g)),f<0&&(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&&(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;return b},b.toTransformString=function(a){var b=a||this[s]();if(b.isSimple){b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4);return(b.dx||b.dy?"t"+[b.dx,b.dy]:p)+(b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(cb.prototype);var cc=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(cc&&cc[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&cc&&cc[1]<8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:k.safari=be;var cd=function(){this.returnValue=!1},ce=function(){return this.originalEvent.preventDefault()},cf=function(){this.cancelBubble=!0},cg=function(){return this.originalEvent.stopPropagation()},ch=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&&u[g](b))for(var l=0,m=e.targetTouches&&e.targetTouches.length;l<m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=ce,e.stopPropagation=cg;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||cd,a.stopPropagation=a.stopPropagation||cf;return c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return!0};return f}}(),ci=[],cj=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=ci.length;while(g--){f=ci[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild(k),k.style.display="none",l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&&(m?n.insertBefore(k,m):n.appendChild(k)),l&&eve("raphael.drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve("raphael.drag.move."+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},ck=function(b){a.unmousemove(cj).unmouseup(ck);var c=ci.length,d;while(c--)d=ci[c],d.el._drag={},eve("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);ci=[]},cl=a.el={};for(var cm=t.length;cm--;)(function(b){a[b]=cl[b]=function(c,d){a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:ch(this.shape||this.node||h.doc,b,c,d||this)}));return this},a["un"+b]=cl["un"+b]=function(a){var c=this.events||[],d=c.length;while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&&delete this.events;return this}return this}})(t[cm]);cl.data=function(b,c){var d=bb[this.id]=bb[this.id]||{};if(arguments.length==1){if(a.is(b,"object")){for(var e in b)b[g](e)&&this.data(e,b[e]);return this}eve("raphael.data.get."+this.id,this,d[b],b);return d[b]}d[b]=c,eve("raphael.data.set."+this.id,this,c,b);return this},cl.removeData=function(a){a==null?bb[this.id]={}:bb[this.id]&&delete bb[this.id][a];return this},cl.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},cl.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var cn=[];cl.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!ci.length&&a.mousemove(cj).mouseup(ck),ci.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on("raphael.drag.start."+this.id,c),b&&eve.on("raphael.drag.move."+this.id,b),d&&eve.on("raphael.drag.end."+this.id,d),eve("raphael.drag.start."+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},cn.push({el:this,start:i}),this.mousedown(i);return this},cl.onDragOver=function(a){a?eve.on("raphael.drag.over."+this.id,a):eve.unbind("raphael.drag.over."+this.id)},cl.undrag=function(){var b=cn.length;while(b--)cn[b].el==this&&(this.unmousedown(cn[b].start),cn.splice(b,1),eve.unbind("raphael.drag.*."+this.id));!cn.length&&a.unmousemove(cj).unmouseup(ck)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&&this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&&this.__set__.push(f);return f},k.path=function(b){b&&!a.is(b,D)&&!a.is(b[0],E)&&(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&&this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||"about:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&&this.__set__.push(e);return e},k.set=function(b){!a.is(b,"array")&&(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cG(b);this.__set__&&this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var co=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&&e.tagName=="svg"){var f=co(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&&(e=i[i.length-1])}if(!e)return null;while(e.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},k.getElementsByPoint=function(a,b){var c=this.set();this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)});return c},cl.isPointInside=function(b,c){var d=this.realPath=this.realPath||bi[this.type](this);return a.isPointInsidePath(d,b,c)},cl.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bi[this.type](this),b.bboxwt=bI(this.realPath),b.bboxwt.toString=cq,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bi[this.type](this);b.bbox=bI(bj(this.realPath,this.matrix)),b.bbox.toString=cq,b.dirty=b.dirtyT=0}return b.bbox},cl.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(a);return a},cl.glow=function(a){if(this.type=="text")return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bi[this.type](this);f=this.matrix?bj(f,this.matrix):f;for(var g=1;g<c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cr={},cs=function(b,c,d,e,f,g,h,i,j){return j==null?bB(b,c,d,e,f,g,h,i):a.findDotsAtSegment(b,c,d,e,f,g,h,i,bC(b,c,d,e,f,g,h,i,j))},ct=function(b,c){return function(d,e,f){d=bR(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M")g=+i[1],h=+i[2];else{j=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&&!c){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},cu=ct(1),cv=ct(),cw=ct(0,1);a.getTotalLength=cu,a.getPointAtLength=cv,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return cw(a,b).end;var d=cw(a,c,1);return b?cw(d,b).end:d},cl.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return cu(this.attrs.path)}},cl.getPointAtLength=function(a){if(this.type=="path")return cv(this.attrs.path,a)},cl.getSubpath=function(b,c){if(this.type=="path")return a.getSubpath(this.attrs.path,b,c)};var cx=a.easing_formulas={linear:function(a){return a},"<":function(a){return A(a,1.7)},">":function(a){return A(a,.48)},"<>":function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d<0?-1:1),f=-c-b,g=A(z(f),1/3)*(f<0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a<1/c?d=b*a*a:a<2/c?(a-=1.5/c,d=b*a*a+.75):a<2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};cx.easeIn=cx["ease-in"]=cx["<"],cx.easeOut=cx["ease-out"]=cx[">"],cx.easeInOut=cx["ease-in-out"]=cx["<>"],cx["back-in"]=cx.backIn,cx["back-out"]=cx.backOut;var cy=[],cz=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},cA=function(){var b=+(new Date),c=0;for(;c<cy.length;c++){var d=cy[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&&cy.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e<0)continue;if(e<f){var t=h(e/f);for(var u in i)if(i[g](u)){switch(U[u]){case C:p=+i[u]+t*f*j[u];break;case"colour":p="rgb("+[cB(O(i[u].r+t*f*j[u].r)),cB(O(i[u].g+t*f*j[u].g)),cB(O(i[u].b+t*f*j[u].b))].join(",")+")";break;case"path":p=[];for(var v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(var x=1,y=i[u][v].length;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].join(q)}p=p.join(q);break;case"transform":if(j[u].real){p=[];for(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(x=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u][v][x]+t*f*j[u][v][x]}}else{var z=function(a){return+i[u][a]+t*f*j[u][a]};p=[["m",z(0),z(1),z(2),z(3),z(4),z(5)]]}break;case"csv":if(u=="clip-rect"){p=[],v=4;while(v--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var A=[][n](i[u]);p=[],v=m.paper.customAttributes[u].length;while(v--)p[v]=+A[v]+t*f*j[u][v]}o[u]=p}m.attr(o),function(a,b,c){setTimeout(function(){eve("raphael.anim.frame."+a,b,c)})}(m.id,m,d.anim)}else{(function(b,c,d){setTimeout(function(){eve("raphael.anim.frame."+c.id,c,d),eve("raphael.anim.finish."+c.id,c,d),a.is(b,"function")&&b.call(c)})})(d.callback,m,d.anim),m.attr(k),cy.splice(c--,1);if(d.repeat>1&&!d.next){for(s in k)k[g](s)&&(r[s]=d.totalOrigin[s]);d.el.attr(r),cE(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cE(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari(),cy.length&&cz(cA)},cB=function(a){return a>255?255:a<0?0:a};cl.animateWith=function(b,c,d,e,f,g){var h=this;if(h.removed){g&&g.call(h);return h}var i=d instanceof cD?d:a.animation(d,e,f,g),j,k;cE(i,h,i.percents[0],null,h.attr());for(var l=0,m=cy.length;l<m;l++)if(cy[l].anim==c&&cy[l].el==b){cy[m-1].start=cy[l].start;break}return h},cl.onAnimation=function(a){a?eve.on("raphael.anim.frame."+this.id,a):eve.unbind("raphael.anim.frame."+this.id);return this},cD.prototype.delay=function(a){var b=new cD(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cD.prototype.repeat=function(a){var b=new cD(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cD)return b;if(a.is(d,"function")||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&&Q(i)!=i&&Q(i)+"%"!=i&&(h=!0,f[i]=b[i]);if(!h)return new cD(b,c);d&&(f.easing=d),e&&(f.callback=e);return new cD({100:f},c)},cl.animate=function(b,c,d,e){var f=this;if(f.removed){e&&e.call(f);return f}var g=b instanceof cD?b:a.animation(b,c,d,e);cE(g,f,g.percents[0],null,f.attr());return f},cl.setTime=function(a,b){a&&b!=null&&this.status(a,y(b,a.ms)/a.ms);return this},cl.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cE(a,this,-1,y(b,1));return this}e=cy.length;for(;d<e;d++){f=cy[d];if(f.el.id==this.id&&(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},cl.pause=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.pause."+this.id,this,cy[b].anim)!==!1&&(cy[b].paused=!0);return this},cl.resume=function(a){for(var b=0;b<cy.length;b++)if(cy[b].el.id==this.id&&(!a||cy[b].anim==a)){var c=cy[b];eve("raphael.anim.resume."+this.id,this,c.anim)!==!1&&(delete c.paused,this.status(c.anim,c.status))}return this},cl.stop=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.stop."+this.id,this,cy[b].anim)!==!1&&cy.splice(b--,1);return this},eve.on("raphael.remove",cF),eve.on("raphael.clear",cF),cl.toString=function(){return"Raphaël’s object"};var cG=function(a){this.items=[],this.length=0,this.type="set";if(a)for(var b=0,c=a.length;b<c;b++)a[b]&&(a[b].constructor==cl.constructor||a[b].constructor==cG)&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},cH=cG.prototype;cH.push=function(){var a,b;for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&(a.constructor==cl.constructor||a.constructor==cG)&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},cH.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},cH.forEach=function(a,b){for(var c=0,d=this.items.length;c<d;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var cI in cl)cl[g](cI)&&(cH[cI]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cI));cH.attr=function(b,c){if(b&&a.is(b,E)&&a.is(b[0],"object"))for(var d=0,e=b.length;d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f<g;f++)this.items[f].attr(b,c);return this},cH.clear=function(){while(this.length)this.pop()},cH.splice=function(a,b,c){a=a<0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g<arguments.length;g++)f.push(arguments[g]);for(g=0;g<b;g++)e.push(this[a+g]);for(;g<this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new cG(e)},cH.exclude=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a){this.splice(b,1);return!0}},cH.animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&&(j=function(){!--f&&e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,k,k);return this},cH.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},cH.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b),c=x[m](0,c),d=x[m](0,d);return{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},cH.clone=function(a){a=new cG;for(var b=0,c=this.items.length;b<c;b++)a.push(this.items[b].clone());return a},cH.toString=function(){return"Raphaël‘s set"},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[g](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=R(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"};if(f.k)for(var h in f.k)f[g](h)&&(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp("(^|\\s)"+b.replace(/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[g](i)&&h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k<l;k++){j=f[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||"middle",i=x(y(i||0,1),-1);var j=r(e)[s](p),k=0,l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox[s](c),q=+o[0],t=o[3]-o[1],u=0,v=+o[1]+(h=="baseline"?t+ +f.face.descent:t/2);for(var w=0,z=j.length;w<z;w++){if(j[w]=="\n")k=0,B=0,l=0,u+=t;else{var A=l&&f.glyphs[j[w-1]]||{},B=f.glyphs[j[w]];k+=l?(A.w||f.w)+(A.k&&A.k[j[w]]||0)+f.w*i:0,l=1}B&&B.d&&(m+=a.transformPath(B.d,["t",k*n,u*n,"s",n,n,q,v,"t",(b-q)/n,(d-v)/n]))}}return this.path(m).attr({fill:"#000",stroke:"none"})},k.add=function(b){if(a.is(b,"array")){var c=this.set(),e=0,f=b.length,h;for(;e<f;e++)h=b[e]||{},d[g](h.type)&&c.push(this[h.type]().attr(h))}return c},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&&a.is(b,D)&&d.length-1&&(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),typeof e=="function"&&f&&(e=e()))}),e=(e==null||e==d?a:e)+"";return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=cH,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve("raphael.DOMload")}b.readyState==null&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on("raphael.DOMload",function(){b=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){typeof d=="string"&&(d=q(d));for(var f in e)e[b](f)&&(f.substring(0,6)=="xlink:"?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j="radial";if(b&&c){m=d(b),n=d(c);var e=(n>.5)*2-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j=="linear"){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient);if(!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x<y;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if(d.type=="path"){var g=c(e).toLowerCase().split("-"),h=d.paper,i=f?"end":"start",j=d.node,k=d.attrs,m=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={};if(r!="none"){var A="raphael-marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName("use")[0]):(C=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var F=u*(r!="diamond"&&r!="oval");f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-F*m):(s=F*m,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),w={},w["marker-"+i]="url(#"+B+")";if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx"]=F,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),d._.arrows[i+"Path"]&&q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+"Path"],delete d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete d._.arrows[i+"Type"],delete d._.arrows[i+"String"];for(w in p)if(p[b](w)&&!p[w]){var G=a._g.doc.getElementById(w);G&&G.parentNode.removeChild(G)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){b=u[c(b).toLowerCase()];if(b){var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if(u.tagName.toLowerCase()!="a"){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}o=="target"?u.setAttributeNS(n,"show",p=="blank"?"new":p):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(x.length==4){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":d.type=="path"&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":i.setAttribute(o,p),d._.dirty=1;if(k.fx)o="x",p=k.x;else break;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if(o=="rx"&&d.type=="rect")break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":i.setAttribute(o,p),d._.dirty=1;if(k.fy)o="y",p=k.y;else break;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if(o=="ry"&&d.type=="rect")break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":d.type=="rect"?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":d.type=="image"&&i.setAttributeNS(n,"href",p);break;case"stroke-width":if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var F=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(F),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(F,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var G=a.getRGB(p);if(!G.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});else if((d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}G[b]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(p),i.setAttribute(o,G.hex),o=="stroke"&&G[b]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),o=="stroke"&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":(d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break};default:o=="font-size"&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(d.type=="text"&&!!(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split("\n"),k=[],m;for(var n=0,o=j.length;n<o;n++)m=q("tspan"),n&&q(m,{dy:i*x,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName("tspan");for(n=0,o=k.length;n<o;n++)n?q(k[n],{dy:i*x,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(k[0],{dy:r})}},z=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);d.type="path",w(d,{fill:"none",stroke:"#000",path:a});return d},A.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([["r",a,b,e]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]]));return this},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]]));return this},A.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},A.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},A.remove=function(){if(!this.removed&&!!this.node.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var c in this)this[c]=typeof this[c]=="function"?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if(this.node.style.display=="none"){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&&this.hide();return b},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;if(c=="transform")return this._.transform;var g=c.split(j),h={};for(var i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(d==null&&a.is(c,"array")){h={};for(i=0,l=c.length;i<l;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var m={};m[c]=d}else c!=null&&a.is(c,"object")&&(m=c);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}w(this,m);return this},A.toFront=function(){if(this.removed)return this;this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&&a._tofront(this,b);return this},A.toBack=function(){if(this.removed)return this;var b=this.node.parentNode;b.tagName.toLowerCase()=="a"?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var c=this.paper;return this},A.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this;if(+b!==0){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter")},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new z(f,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h=q("svg"),i="overflow:hidden;",j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),c==1?(h.style.cssText=i+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+"position:relative",c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&&(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?(this._vbSize&&(f=1),delete this._vbSize,j="0 0 "+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c;try{c=a.getScreenCTM()||a.createSVGMatrix()}catch(d){c=a.createSVGMatrix()}var e=-c.e%1,f=-c.f%1;if(e||f)e&&(this._left=(this._left+e)%1,b.left=this._left+"px"),f&&(this._top=(this._top+f)%1,b.top=this._top+"px")},a.prototype.clear=function(){a.eve("raphael.clear",this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null};var B=a.st;for(var C in A)A[b](C)&&!B[b](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}(window.Raphael),window.Raphael.vml&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()=="m",g=p[b];c.replace(s,function(a){e&&d.length==2&&(g+=d+p[b=="m"?"l":"L"],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowerCase(),j=="z"&&(j="x");for(var m=1,r=i.length;m<r;m++)j+=f(i[m]*u)+(m!=r-1?",":o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hidden";if(!!b&&!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c<0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b<0&&(p+="x"),c<0&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&&v[0],l.removeChild(v),k&&(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,b,d){var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while(g--)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&&(m[y]=i[y]);r&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur);if(i.path&&e.type=="path"||r)l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e.type=="image"&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));"transform"in i&&e.transform(i.transform);if(s){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,G=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((B-E)*u),f((D-G)*u),f((B+E)*u),f((D+G)*u),f(B*u))}if("clip-rect"in i){var H=c(i["clip-rect"]).split(k);if(H.length==4){H[2]=+H[2]+ +H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement("div"),J=I.style;J.clip=a.format("rect({1}px {2}px {3}px {0}px)",H),l.clipRect||(J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px",J.height=e.paper.height+"px",l.parentNode.insertBefore(I,l),I.appendChild(l),l.clipRect=I)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var K=e.textpath.style;i.font&&(K.font=i.font),i["font-family"]&&(K.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(K.fontSize=i["font-size"]),i["font-weight"]&&(K.fontWeight=i["font-weight"]),i["font-style"]&&(K.fontStyle=i["font-style"])}"arrow-start"in i&&A(t,i["arrow-start"]),"arrow-end"in i&&A(t,i["arrow-end"],1);if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&&L[0],!L&&(M=L=F(j)),e.type=="image"&&i.src&&(L.src=i.src),i.fill&&(L.on=!0);if(L.on==null||i.fill=="none"||i.fill===null)L.on=!1;if(L.on&&i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&&l.removeChild(L),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type="solid",a.getRGB(i.fill).error&&(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!="r")&&C(t,i.fill,L)&&(m.fill="none",m.gradient=i.fill,L.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var P=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&&(L.color="none")}l.appendChild(L);var Q=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],T=!1;!Q&&(T=Q=F("stroke"));if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])Q.on=!0;(i.stroke=="none"||i.stroke===null||Q.on==null||i.stroke==0||i["stroke-width"]==0)&&(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&&i.stroke&&(Q.color=U.hex),P=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i["stroke-width"])||1)*.75;P=h(g(P,0),1),i["stroke-width"]==null&&(V=m["stroke-width"]),i["stroke-width"]&&(Q.weight=V),V&&V<1&&(P*=V)&&(Q.weight=1),Q.opacity=P,i["stroke-linejoin"]&&(Q.joinstyle=i["stroke-linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(Q.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round");if(i["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=W[b](i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChild(Q)}if(t.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),Z=d(m["font-size"]||Z&&Z[0])||10,p.fontSize=Z*Y+"px",t.textpath.string&&(X.innerHTML=c(t.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,("x"in i||"y"in i)&&(t.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var ba=0,bb=_.length;ba<bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m["text-anchor"]){case"start":t.textpath.style["v-text-align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-align"]="center",t.bbx=0}t.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){l="radial",b&&c&&(b=d(b),c=d(c),i(b-.5,2)+i(c-.5,2)>.25&&(c=e.sqrt(.25-i(b-.5,2))*((c>.5)*2-1)+.5),m=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(l=="linear"){var p=f.shift();p=-d(p);if(isNaN(p))return null}var q=a._parseDots(f);if(!q)return null;b=b.shape||b.node;if(q.length){b.removeChild(g),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.length-1].color;var r=[];for(var s=0,t=q.length;s<t;s++)q[s].offset&&r.push(q[s].offset+n+q[s].color);g.colors=r.length?r.join():"0% "+g.color,l=="radial"?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=m,g.angle=0):(g.type="gradient",g.angle=(270-p)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.scale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");g.translate(-0.5,-0.5);if(l||k||this.type=="image"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split();if(k&&j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&&(this._.transform=f);return this},E.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]]));return this}},E.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]]));return this},E.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1;return this},E.hide=function(){!this.removed&&(this.node.style.display="none");return this},E.show=function(){!this.removed&&(this.node.style.display=o);return this},E._getBBox=function(){if(this.removed)return{};return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&!!this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("raphael.*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c==j&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&d==null&&a.is(c,"array")){h={};for(i=0,m=c.length;i<m;i++)h[c[i]]=this.attr(c[i]);return h}var n;d!=null&&(n={},n[c]=d),d==null&&a.is(c,"object")&&(n=c);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&this.type=="text"&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper);return this},E.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},E.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},E.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect";return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",B(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(b,c){var d=this.canvas.style;this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&&(k=i/e,l=h/d,d*k<h&&(b-=(h-d*k)/2/k),e*l<i&&(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform("...")});return this};var F;a._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error("VML container not found.");var i=new a._Paper,j=i.canvas=a._g.doc.createElement("div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&&(f+="px"),d==+d&&(d+="px"),i.coordsize=u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement("span"),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",j.appendChild(i.span),k.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+"px",k.top=h+"px",k.position="absolute"):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}(window.Raphael)

if(window.Raphael){Raphael.shadow=function(K,J,L,F,Q){Q=Q||{};var B=jQuery(Q.target),N=jQuery("<div/>",{"class":"aui-shadow"}),A=Q.shadow||Q.color||"#000",P=Q.size*10||0,O=Q.offsetSize||3,M=Q.zindex||0,H=Q.radius||0,G="0.4",D=Q.blur||3,C,I,E;L+=P+2*D;F+=P+2*D;if(Raphael.shadow.BOX_SHADOW_SUPPORT){B.addClass("aui-box-shadow");return N.addClass("hidden")}if(K===0&&J===0&&B.length>0){E=B.offset();K=O-D+E.left;J=O-D+E.top}if(jQuery.browser.msie&&jQuery.browser.version<"9"){A="#f0f0f0";G="0.2"}N.css({position:"absolute",left:K,top:J,width:L,height:F,zIndex:M});if(B.length>0){N.appendTo(document.body);C=Raphael(N[0],L,F,H)}else{C=Raphael(K,J,L,F,H)}C.canvas.style.position="absolute";I=C.rect(D,D,L-2*D,F-2*D).attr({fill:A,stroke:A,blur:""+D,opacity:G});return N};Raphael.shadow.BOX_SHADOW_SUPPORT=(function(){var C=document.documentElement.style;var A=["boxShadow","MozBoxShadow","WebkitBoxShadow","msBoxShadow"];for(var B=0;B<A.length;B++){if(A[B] in C){return true}}return false})()};
jQuery.os={};var jQueryOSplatform=navigator.platform.toLowerCase();jQuery.os.windows=(jQueryOSplatform.indexOf("win")!=-1);jQuery.os.mac=(jQueryOSplatform.indexOf("mac")!=-1);jQuery.os.linux=(jQueryOSplatform.indexOf("linux")!=-1);
/**
 * Atlassian custom download containing:
 * CORE - Core, Widget, Mouse
 * INTERACTIONS - Draggable, Sortable
 * Load jquery-ui-other for droppable and other resources.
 * This load profile will be updated to something more logical in a future version.
 */
/*!
 * jQuery UI 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=a.which==1,f=typeof this.options.cancel=="string"?b(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(d){return c._mouseMove(d)};this._mouseUpDelegate=function(d){return c._mouseUp(d)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=
true}},_mouseMove:function(a){if(b.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Draggable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;return true},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&
this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||
0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var b=d(a.containment)[0];if(b){a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),
10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),
10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&
d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=
this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?
e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.11"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var g=d.data(this,"sortable");if(g&&!g.options.disabled){c.sortables.push({instance:g,shouldRevert:g.options.revert});g.refreshPositions();g._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},
b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=
d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};
a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&
this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",
{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","iframeFix",{start:function(){var a=d(this).data("draggable").options;d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+
"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")})},stop:function(){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",
a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+
c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<
c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+
c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),
f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&o<l+e){if(f.snapMode!="inner"){var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left}var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(j-m)<=e;q=Math.abs(l-o)<=e;r=Math.abs(i-g)<=e;s=Math.abs(k-n)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[h].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),
{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=p||q||r||s||t}else{c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=
parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Sortable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a==="disabled"){this.options[a]=
b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&!b){var f=false;
d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-
this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b],e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=
e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);
c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===
1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=
this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):
b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==
""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||
document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,
b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=
document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-
this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<
this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&
this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=
this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();
this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],
this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",
g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||
this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,
originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.11"})})(jQuery);
;
jQuery.ui.draggable.prototype._mouseCapture=(function(A){return function(C){var B=A.call(this,C);if(B&&jQuery.browser.msie){C.stopPropagation()}return B}})(jQuery.ui.draggable.prototype._mouseCapture);
/*
 * jQuery Form Plugin
 * version: 2.67 (12-MAR-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(B){B.fn.ajaxSubmit=function(Q){if(!this.length){A("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof Q=="function"){Q={success:Q}}var H=this.attr("action");var D=(typeof H==="string")?B.trim(H):"";if(D){D=(D.match(/^([^#]+)/)||[])[1]}D=D||window.location.href||"";Q=B.extend(true,{url:D,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},Q);var R={};this.trigger("form-pre-serialize",[this,Q,R]);if(R.veto){A("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(Q.beforeSerialize&&Q.beforeSerialize(this,Q)===false){A("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var F,N,L=this.formToArray(Q.semantic);if(Q.data){Q.extraData=Q.data;for(F in Q.data){if(Q.data[F] instanceof Array){for(var I in Q.data[F]){L.push({name:F,value:Q.data[F][I]})}}else{N=Q.data[F];N=B.isFunction(N)?N():N;L.push({name:F,value:N})}}}if(Q.beforeSubmit&&Q.beforeSubmit(L,this,Q)===false){A("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[L,this,Q,R]);if(R.veto){A("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var C=B.param(L);if(Q.type.toUpperCase()=="GET"){Q.url+=(Q.url.indexOf("?")>=0?"&":"?")+C;Q.data=null}else{Q.data=C}var P=this,K=[];if(Q.resetForm){K.push(function(){P.resetForm()})}if(Q.clearForm){K.push(function(){P.clearForm()})}if(!Q.dataType&&Q.target){var O=Q.success||function(){};K.push(function(T){var S=Q.replaceTarget?"replaceWith":"html";B(Q.target)[S](T).each(O,arguments)})}else{if(Q.success){K.push(Q.success)}}Q.success=function(W,T,X){var V=Q.context||Q;for(var U=0,S=K.length;U<S;U++){K[U].apply(V,[W,T,X||P,P])}};var G=B("input:file",this).length>0;var E="multipart/form-data";var J=(P.attr("enctype")==E||P.attr("encoding")==E);if(Q.iframe!==false&&(G||Q.iframe||J)){if(Q.closeKeepAlive){B.get(Q.closeKeepAlive,M)}else{M()}}else{B.ajax(Q)}this.trigger("form-submit-notify",[this,Q]);return this;function M(){var U=P[0];if(B(":input[name=submit],:input[id=submit]",U).length){alert('Error: Form elements must not have name or id of "submit".');return }var a=B.extend(true,{},B.ajaxSettings,Q);a.context=a.context||a;var d="jqFormIO"+(new Date().getTime()),Y="_"+d;var V=B('<iframe id="'+d+'" name="'+d+'" src="'+a.iframeSrc+'" />');var Z=V[0];V.css({position:"absolute",top:"-1000px",left:"-1000px"});var W={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){A("aborting upload...");var g="aborted";this.aborted=1;V.attr("src",a.iframeSrc);W.error=g;a.error&&a.error.call(a.context,W,"error",g);i&&B.event.trigger("ajaxError",[W,a,g]);a.complete&&a.complete.call(a.context,W,"error")}};var i=a.global;if(i&&!B.active++){B.event.trigger("ajaxStart")}if(i){B.event.trigger("ajaxSend",[W,a])}if(a.beforeSend&&a.beforeSend.call(a.context,W,a)===false){if(a.global){B.active--}return }if(W.aborted){return }var h=0;var X=U.clk;if(X){var e=X.name;if(e&&!X.disabled){a.extraData=a.extraData||{};a.extraData[e]=X.value;if(X.type=="image"){a.extraData[e+".x"]=U.clk_x;a.extraData[e+".y"]=U.clk_y}}}function f(){var o=P.attr("target"),g=P.attr("action");U.setAttribute("target",d);if(U.getAttribute("method")!="POST"){U.setAttribute("method","POST")}if(U.getAttribute("action")!=a.url){U.setAttribute("action",a.url)}if(!a.skipEncodingOverride){P.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(a.timeout){setTimeout(function(){h=true;c()},a.timeout)}var m=[];try{if(a.extraData){for(var p in a.extraData){m.push(B('<input type="hidden" name="'+p+'" value="'+a.extraData[p]+'" />').appendTo(U)[0])}}V.appendTo("body");Z.attachEvent?Z.attachEvent("onload",c):Z.addEventListener("load",c,false);U.submit()}finally{U.setAttribute("action",g);if(o){U.setAttribute("target",o)}else{P.removeAttr("target")}B(m).remove()}}if(a.forceSync){f()}else{setTimeout(f,10)}var k,l,j=50;function c(){if(W.aborted){return }var r=Z.contentWindow?Z.contentWindow.document:Z.contentDocument?Z.contentDocument:Z.document;if(!r||r.location.href==a.iframeSrc){return }Z.detachEvent?Z.detachEvent("onload",c):Z.removeEventListener("load",c,false);var n=true;try{if(h){throw"timeout"}var s=a.dataType=="xml"||r.XMLDocument||B.isXMLDoc(r);A("isXml="+s);if(!s&&window.opera&&(r.body==null||r.body.innerHTML=="")){if(--j){A("requeing onLoad callback, DOM not available");setTimeout(c,250);return }}W.responseText=r.body?r.body.innerHTML:r.documentElement?r.documentElement.innerHTML:null;W.responseXML=r.XMLDocument?r.XMLDocument:r;W.getResponseHeader=function(u){var t={"content-type":a.dataType};return t[u]};var q=/(json|script)/.test(a.dataType);if(q||a.textarea){var m=r.getElementsByTagName("textarea")[0];if(m){W.responseText=m.value}else{if(q){var p=r.getElementsByTagName("pre")[0];var g=r.getElementsByTagName("body")[0];if(p){W.responseText=p.textContent}else{if(g){W.responseText=g.innerHTML}}}}}else{if(a.dataType=="xml"&&!W.responseXML&&W.responseText!=null){W.responseXML=b(W.responseText)}}k=S(W,a.dataType,a)}catch(o){A("error caught:",o);n=false;W.error=o;a.error&&a.error.call(a.context,W,"error",o);i&&B.event.trigger("ajaxError",[W,a,o])}if(W.aborted){A("upload aborted");n=false}if(n){a.success&&a.success.call(a.context,k,"success",W);i&&B.event.trigger("ajaxSuccess",[W,a])}i&&B.event.trigger("ajaxComplete",[W,a]);if(i&&!--B.active){B.event.trigger("ajaxStop")}a.complete&&a.complete.call(a.context,W,n?"success":"error");setTimeout(function(){V.removeData("form-plugin-onload");V.remove();W.responseXML=null},100)}var b=B.parseXML||function(g,m){if(window.ActiveXObject){m=new ActiveXObject("Microsoft.XMLDOM");m.async="false";m.loadXML(g)}else{m=(new DOMParser()).parseFromString(g,"text/xml")}return(m&&m.documentElement&&m.documentElement.nodeName!="parsererror")?m:null};var T=B.parseJSON||function(g){return window["eval"]("("+g+")")};var S=function(q,o,n){var m=q.getResponseHeader("content-type")||"",g=o==="xml"||!o&&m.indexOf("xml")>=0,p=g?q.responseXML:q.responseText;if(g&&p.documentElement.nodeName==="parsererror"){B.error&&B.error("parsererror")}if(n&&n.dataFilter){p=n.dataFilter(p,o)}if(typeof p==="string"){if(o==="json"||!o&&m.indexOf("json")>=0){p=T(p)}else{if(o==="script"||!o&&m.indexOf("javascript")>=0){B.globalEval(p)}}}return p}}};B.fn.ajaxForm=function(C){if(this.length===0){var D={s:this.selector,c:this.context};if(!B.isReady&&D.s){A("DOM not ready, queuing ajaxForm");B(function(){B(D.s,D.c).ajaxForm(C)});return this}A("terminating; zero elements found by selector"+(B.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(E){if(!E.isDefaultPrevented()){E.preventDefault();B(this).ajaxSubmit(C)}}).bind("click.form-plugin",function(I){var H=I.target;var F=B(H);if(!(F.is(":submit,input:image"))){var E=F.closest(":submit");if(E.length==0){return }H=E[0]}var G=this;G.clk=H;if(H.type=="image"){if(I.offsetX!=undefined){G.clk_x=I.offsetX;G.clk_y=I.offsetY}else{if(typeof B.fn.offset=="function"){var J=F.offset();G.clk_x=I.pageX-J.left;G.clk_y=I.pageY-J.top}else{G.clk_x=I.pageX-H.offsetLeft;G.clk_y=I.pageY-H.offsetTop}}}setTimeout(function(){G.clk=G.clk_x=G.clk_y=null},100)})};B.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};B.fn.formToArray=function(N){var M=[];if(this.length===0){return M}var D=this[0];var G=N?D.getElementsByTagName("*"):D.elements;if(!G){return M}var I,H,F,O,E,K,C;for(I=0,K=G.length;I<K;I++){E=G[I];F=E.name;if(!F){continue}if(N&&D.clk&&E.type=="image"){if(!E.disabled&&D.clk==E){M.push({name:F,value:B(E).val()});M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}continue}O=B.fieldValue(E,true);if(O&&O.constructor==Array){for(H=0,C=O.length;H<C;H++){M.push({name:F,value:O[H]})}}else{if(O!==null&&typeof O!="undefined"){M.push({name:F,value:O})}}}if(!N&&D.clk){var J=B(D.clk),L=J[0];F=L.name;if(F&&!L.disabled&&L.type=="image"){M.push({name:F,value:J.val()});M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}}return M};B.fn.formSerialize=function(C){return B.param(this.formToArray(C))};B.fn.fieldSerialize=function(D){var C=[];this.each(function(){var H=this.name;if(!H){return }var F=B.fieldValue(this,D);if(F&&F.constructor==Array){for(var G=0,E=F.length;G<E;G++){C.push({name:H,value:F[G]})}}else{if(F!==null&&typeof F!="undefined"){C.push({name:this.name,value:F})}}});return B.param(C)};B.fn.fieldValue=function(H){for(var G=[],E=0,C=this.length;E<C;E++){var F=this[E];var D=B.fieldValue(F,H);if(D===null||typeof D=="undefined"||(D.constructor==Array&&!D.length)){continue}D.constructor==Array?B.merge(G,D):G.push(D)}return G};B.fieldValue=function(C,I){var E=C.name,N=C.type,O=C.tagName.toLowerCase();if(I===undefined){I=true}if(I&&(!E||C.disabled||N=="reset"||N=="button"||(N=="checkbox"||N=="radio")&&!C.checked||(N=="submit"||N=="image")&&C.form&&C.form.clk!=C||O=="select"&&C.selectedIndex==-1)){return null}if(O=="select"){var J=C.selectedIndex;if(J<0){return null}var L=[],D=C.options;var G=(N=="select-one");var K=(G?J+1:D.length);for(var F=(G?J:0);F<K;F++){var H=D[F];if(H.selected){var M=H.value;if(!M){M=(H.attributes&&H.attributes.value&&!(H.attributes.value.specified))?H.text:H.value}if(G){return M}L.push(M)}}return L}return B(C).val()};B.fn.clearForm=function(){return this.each(function(){B("input,select,textarea",this).clearFields()})};B.fn.clearFields=B.fn.clearInputs=function(){return this.each(function(){var D=this.type,C=this.tagName.toLowerCase();if(D=="text"||D=="password"||C=="textarea"){this.value=""}else{if(D=="checkbox"||D=="radio"){this.checked=false}else{if(C=="select"){this.selectedIndex=-1}}}})};B.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};B.fn.enable=function(C){if(C===undefined){C=true}return this.each(function(){this.disabled=!C})};B.fn.selected=function(C){if(C===undefined){C=true}return this.each(function(){var D=this.type;if(D=="checkbox"||D=="radio"){this.checked=C}else{if(this.tagName.toLowerCase()=="option"){var E=B(this).parent("select");if(C&&E[0]&&E[0].type=="select-one"){E.find("option").selected(false)}this.selected=C}}})};function A(){if(B.fn.ajaxSubmit.debug){var C="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log){window.console.log(C)}else{if(window.opera&&window.opera.postError){window.opera.postError(C)}}}}})(jQuery);
(function(D){D.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",91:"meta",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",188:",",190:".",191:"/",224:"meta",219:"[",221:"]"},keypressKeys:["<",">","?"],shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"}};D.each(D.hotkeys.keypressKeys,function(E,F){D.hotkeys.shiftNums[F]=F});function A(E){this.num=0;this.timer=E>0?E:false}A.prototype.val=function(){return this.num};A.prototype.inc=function(){if(this.timer){clearTimeout(this.timeout);this.timeout=setTimeout(D.proxy(A.prototype.reset,this),this.timer)}this.num++};A.prototype.reset=function(){if(this.timer){clearTimeout(this.timeout)}this.num=0};function C(G){if(!(D.isPlainObject(G.data)||D.isArray(G.data)||typeof G.data==="string")){return }var F=G.handler,E={timer:700};(function(H){if(typeof H==="string"){E.combo=[H]}else{if(D.isArray(H)){E.combo=H}else{D.extend(E,H)}}E.combo=D.map(E.combo,function(I){return I.toLowerCase()})})(G.data);G.index=new A(E.timer);G.handler=function(M){if(this!==M.target&&(/textarea|select|input/i.test(M.target.nodeName))){return }var J=M.type!=="keypress"?D.hotkeys.specialKeys[M.which]:null,N=String.fromCharCode(M.which).toLowerCase(),K,L="",I={};if(M.altKey&&J!=="alt"){L+="alt+"}if(M.ctrlKey&&J!=="ctrl"){L+="ctrl+"}if(M.metaKey&&!M.ctrlKey&&J!=="meta"){L+="meta+"}if(M.shiftKey&&J!=="shift"){L+="shift+"}if(J){I[L+J]=true}if(N){I[L+N]=true}if(/shift+/.test(L)){I[L.replace("shift+","")+D.hotkeys.shiftNums[(J||N)]]=true}var H=G.index,O=E.combo;if(B(O[H.val()],I)){if(H.val()===O.length-1){H.reset();return F.apply(this,arguments)}else{H.inc()}}else{H.reset();if(B(O[0],I)){H.inc()}}}}function B(H,F){var I=H.split(" ");for(var G=0,E=I.length;G<E;G++){if(F[I[G]]){return true}}return false}D.each(["keydown","keyup","keypress"],function(){D.event.special[this]={add:C}})})(jQuery);
jQuery.fn.moveTo=function(D){var H={transition:false,scrollOffset:35};var G=jQuery.extend(H,D),A=this,E=A.offset().top,F=jQuery("#stalker"),B=F.outerHeight()+G.scrollOffset,C;if(F.length===0||(!F.hasClass("detached")&&(E<=F.offset().top))){B=0}if((jQuery(window).scrollTop()+jQuery(window).height()-this.outerHeight()<E||jQuery(window).scrollTop()+B>E)&&jQuery(window).height()>B){if(jQuery(window).scrollTop()+B>E){C=E-(jQuery(window).height()-this.outerHeight())+G.scrollOffset}else{C=E-B}if(!jQuery.fn.moveTo.animating&&G.transition){jQuery(document).trigger("moveToStarted",this);jQuery.fn.moveTo.animating=true;jQuery("html,body").animate({scrollTop:C},1000,function(){F.trigger("positionChanged");jQuery(document).trigger("moveToFinished",A);delete jQuery.fn.moveTo.animating});return this}else{if(jQuery("html, body").is(":animated")){jQuery("html, body").stop();delete jQuery.fn.moveTo.animating}jQuery(document).trigger("moveToStarted");jQuery(window).scrollTop(C);F.trigger("positionChanged");setTimeout(function(){jQuery(document).trigger("moveToFinished",A)},100);return this}}jQuery(document).trigger("moveToFinished",this);return this};
AJS.bind=function(A,C,B){try{if(typeof B==="function"){return jQuery(window).bind(A,C,B)}else{return jQuery(window).bind(A,C)}}catch(D){AJS.log("error while binding: "+D.message)}};AJS.unbind=function(A,B){try{return jQuery(window).unbind(A,B)}catch(C){AJS.log("error while unbinding: "+C.message)}};AJS.trigger=function(A,C){try{return jQuery(window).trigger(A,C)}catch(B){AJS.log("error while triggering: "+B.message)}};
(function(){var B="AJS.conglomerate.cookie",F=/(\\|^"|"$)/g,G=/\|\|+/g,I=/"/g,C=/[.*+?|^$()[\]{\\]/g;function E(L,O){O=O||"";var N=new RegExp(D(L)+"=([^|]+)"),M=O.match(N);return M&&M[1]}function J(L,N,P){var M=new RegExp("(\\s|\\|)*\\b"+D(L)+"=[^|]*[|]*");P=P||"";P=P.replace(M,"|");if(N!==""){var O=L+"="+N;if(P.length+O.length<4020){P+="|"+O}}return P.replace(G,"|")}function H(L){return L.replace(F,"")}function K(L){var N=new RegExp("\\b"+D(L)+"=((?:[^\\\\;]+|\\\\.)*)(?:;|$)"),M=document.cookie.match(N);return M&&H(M[1])}function A(M,O,Q){var N="",P,L='"'+O.replace(I,'\\"')+'"';if(Q){P=new Date();P.setTime(+P+Q*24*60*60*1000);N="; expires="+P.toGMTString()}document.cookie=M+"="+L+N+";path=/"}function D(L){return L.replace(C,"\\$&")}AJS.Cookie={save:function(M,N,L){var O=K(B);O=J(M,N,O);A(B,O,L||365)},read:function(M,L){var O=K(B);var N=E(M,O);if(N!=null){return N}return L},erase:function(L){this.save(L,"")}}})();
AJS.popup=function(I){var D={width:800,height:600,closeOnOutsideClick:false,keypressListener:function(J){if(J.keyCode===27&&B.is(":visible")){F.hide()}}};if(typeof I!="object"){I={width:arguments[0],height:arguments[1],id:arguments[2]};I=AJS.$.extend({},I,arguments[3])}I=AJS.$.extend({},D,I);var B=AJS("div").addClass("aui-popup");if(I.id){B.attr("id",I.id)}var E=3000;AJS.$(".aui-dialog").each(function(){var J=AJS.$(this);E=(J.css("z-index")>E)?J.css("z-index"):E});var G=(function(K,J){I.width=(K=(K||I.width));I.height=(J=(J||I.height));B.css({marginTop:-Math.round(J/2)+"px",marginLeft:-Math.round(K/2)+"px",width:K,height:J,"z-index":parseInt(E,10)+2});return arguments.callee})(I.width,I.height);AJS.$("body").append(B);B.hide();B.enable();var C=AJS.$(".aui-blanket"),A=function(J,K){var L=AJS.$(J,K);if(L.length){L.focus();return true}return false},H=function(J){if(AJS.$(".dialog-page-body",J).find(":focus").length!==0){return }if(I.focusSelector){return A(I.focusSelector,J)}var K=":input:visible:enabled:first";if(A(K,AJS.$(".dialog-page-body",J))){return }if(A(K,AJS.$(".dialog-button-panel",J))){return }A(K,AJS.$(".dialog-page-menu",J))};var F={changeSize:function(J,K){if((J&&J!=I.width)||(K&&K!=I.height)){G(J,K);if(this.shadow){this.shadow.remove();this.shadow=null}}this.show()},show:function(){var J=function(){var K=5;if(AJS.$.browser.msie&&~~(AJS.$.browser.version)<9){K=3}AJS.$(document).keydown(I.keypressListener);AJS.dim();C=AJS.$(".aui-blanket");if(C.size()!=0&&I.closeOnOutsideClick){C.click(function(){if(B.is(":visible")){F.hide()}})}B.show();if(!this.shadow){var L=B.offset();this.shadow=Raphael.shadow(L.top,L.left,I.width,I.height,{target:B[0],zindex:(B.css("z-index")-1)});this.shadow.css({position:"fixed",top:"50%",left:"50%",marginLeft:-(I.width/2-K)+"px",marginTop:-(I.height/2-K)+"px"})}AJS.popup.current=this;H(B);AJS.$(document).trigger("showLayer",["popup",this])};J.call(this);this.show=J},hide:function(){AJS.$(document).unbind("keydown",I.keypressListener);C.unbind();this.element.hide();if(this.shadow){this.shadow.remove();this.shadow=null}if(AJS.$(".aui-dialog:visible").size()==0){AJS.undim()}var J=document.activeElement;if(this.element.has(J).length){J.blur()}AJS.$(document).trigger("hideLayer",["popup",this]);AJS.popup.current=null;this.enable()},element:B,remove:function(){if(this.shadow){this.shadow.remove();this.shadow=null}B.remove();this.element=null},disable:function(){if(!this.disabled){this.popupBlanket=AJS.$("<div class='dialog-blanket'> </div>").css({height:B.height(),width:B.width()});B.append(this.popupBlanket);this.disabled=true}},enable:function(){if(this.disabled){this.disabled=false;this.popupBlanket.remove();this.popupBlanket=null}}};return F};(function(){function F(N,L,K,M){if(!N.buttonpanel){N.addButtonPanel()}this.page=N;this.onclick=K;this._onclick=function(){return K.call(this,N.dialog,N)===true};this.item=AJS("button",L).addClass("button-panel-button");if(M){this.item.addClass(M)}if(typeof K=="function"){this.item.click(this._onclick)}N.buttonpanel.append(this.item);this.id=N.button.length;N.button[this.id]=this}function A(O,M,L,N,K){if(!O.buttonpanel){O.addButtonPanel()}if(!K){K="#"}this.page=O;this.onclick=L;this._onclick=function(){return L.call(this,O.dialog,O)===true};this.item=AJS("a",M).attr("href",K).addClass("button-panel-link");if(N){this.item.addClass(N)}if(typeof L=="function"){this.item.click(this._onclick)}O.buttonpanel.append(this.item);this.id=O.button.length;O.button[this.id]=this}function B(M,L){var K=M=="left"?-1:1;return function(Q){var O=this.page[L];if(this.id!=((K==1)?O.length-1:0)){K*=(Q||1);O[this.id+K].item[(K<0?"before":"after")](this.item);O.splice(this.id,1);O.splice(this.id+K,0,this);for(var N=0,P=O.length;N<P;N++){if(L=="panel"&&this.page.curtab==O[N].id){this.page.curtab=N}O[N].id=N}}return this}}function G(K){return function(){this.page[K].splice(this.id,1);for(var L=0,M=this.page[K].length;L<M;L++){this.page[K][L].id=L}this.item.remove()}}F.prototype.moveUp=F.prototype.moveLeft=B("left","button");F.prototype.moveDown=F.prototype.moveRight=B("right","button");F.prototype.remove=G("button");F.prototype.html=function(K){return this.item.html(K)};F.prototype.onclick=function(K){if(typeof K=="undefined"){return this.onclick}else{this.item.unbind("click",this._onclick);this._onclick=function(){return K.call(this,page.dialog,page)===true};if(typeof K=="function"){this.item.click(this._onclick)}}};var D=20;var H=function(Q,R,K,P,N){if(!(K instanceof AJS.$)){K=AJS.$(K)}this.dialog=Q.dialog;this.page=Q;this.id=Q.panel.length;this.button=AJS("button").html(R).addClass("item-button");if(N){this.button[0].id=N}this.item=AJS("li").append(this.button).addClass("page-menu-item");this.body=AJS("div").append(K).addClass("dialog-panel-body").css("height",Q.dialog.height+"px");this.padding=D;if(P){this.body.addClass(P)}var M=Q.panel.length,O=this;Q.menu.append(this.item);Q.body.append(this.body);Q.panel[M]=this;var L=function(){var S;if(Q.curtab+1){S=Q.panel[Q.curtab];S.body.hide();S.item.removeClass("selected");(typeof S.onblur=="function")&&S.onblur()}Q.curtab=O.id;O.body.show();O.item.addClass("selected");(typeof O.onselect=="function")&&O.onselect();(typeof Q.ontabchange=="function")&&Q.ontabchange(O,S)};if(!this.button.click){AJS.log("atlassian-dialog:Panel:constructor - this.button.click false");this.button.onclick=L}else{this.button.click(L)}L();if(M==0){Q.menu.css("display","none")}else{Q.menu.show()}};H.prototype.select=function(){this.button.click()};H.prototype.moveUp=H.prototype.moveLeft=B("left","panel");H.prototype.moveDown=H.prototype.moveRight=B("right","panel");H.prototype.remove=G("panel");H.prototype.html=function(K){if(K){this.body.html(K);return this}else{return this.body.html()}};H.prototype.setPadding=function(K){if(!isNaN(+K)){this.body.css("padding",+K);this.padding=+K;this.page.recalcSize()}return this};var E=56;var C=51;var I=50;var J=function(K,L){this.dialog=K;this.id=K.page.length;this.element=AJS("div").addClass("dialog-components");this.body=AJS("div").addClass("dialog-page-body");this.menu=AJS("ul").addClass("dialog-page-menu").css("height",K.height+"px");this.body.append(this.menu);this.curtab;this.panel=[];this.button=[];if(L){this.body.addClass(L)}K.popup.element.append(this.element.append(this.menu).append(this.body));K.page[K.page.length]=this};J.prototype.recalcSize=function(){var K=this.header?E:0;var N=this.buttonpanel?C:0;for(var M=this.panel.length;M--;){var L=this.dialog.height-K-N;this.panel[M].body.css("height",L);this.menu.css("height",L)}};J.prototype.addButtonPanel=function(){this.buttonpanel=AJS("div").addClass("dialog-button-panel");this.element.append(this.buttonpanel)};J.prototype.addPanel=function(N,K,M,L){new H(this,N,K,M,L);this.recalcSize();return this};J.prototype.addHeader=function(L,K){if(this.header){this.header.remove()}this.header=AJS("h2").text(L||"").addClass("dialog-title");K&&this.header.addClass(K);this.element.prepend(this.header);this.recalcSize();return this};J.prototype.addButton=function(L,K,M){new F(this,L,K,M);this.recalcSize();return this};J.prototype.addLink=function(M,L,N,K){new A(this,M,L,N,K);this.recalcSize();return this};J.prototype.gotoPanel=function(K){this.panel[K.id||K].select()};J.prototype.getCurrentPanel=function(){return this.panel[this.curtab]};J.prototype.hide=function(){this.element.hide()};J.prototype.show=function(){this.element.show()};J.prototype.remove=function(){this.element.remove()};AJS.Dialog=function(M,K,N){var L={};if(!+M){L=Object(M);M=L.width;K=L.height;N=L.id}this.height=K||480;this.width=M||640;this.id=N;L=AJS.$.extend({},L,{width:this.width,height:this.height,id:this.id});this.popup=AJS.popup(L);this.popup.element.addClass("aui-dialog");this.page=[];this.curpage=0;new J(this)};AJS.Dialog.prototype.addHeader=function(L,K){this.page[this.curpage].addHeader(L,K);return this};AJS.Dialog.prototype.addButton=function(L,K,M){this.page[this.curpage].addButton(L,K,M);return this};AJS.Dialog.prototype.addLink=function(M,L,N,K){this.page[this.curpage].addLink(M,L,N,K);return this};AJS.Dialog.prototype.addSubmit=function(L,K){this.page[this.curpage].addButton(L,K,"button-panel-submit-button");return this};AJS.Dialog.prototype.addCancel=function(L,K){this.page[this.curpage].addLink(L,K,"button-panel-cancel-link");return this};AJS.Dialog.prototype.addButtonPanel=function(){this.page[this.curpage].addButtonPanel();return this};AJS.Dialog.prototype.addPanel=function(N,K,M,L){this.page[this.curpage].addPanel(N,K,M,L);return this};AJS.Dialog.prototype.addPage=function(K){new J(this,K);this.page[this.curpage].hide();this.curpage=this.page.length-1;return this};AJS.Dialog.prototype.nextPage=function(){this.page[this.curpage++].hide();if(this.curpage>=this.page.length){this.curpage=0}this.page[this.curpage].show();return this};AJS.Dialog.prototype.prevPage=function(){this.page[this.curpage--].hide();if(this.curpage<0){this.curpage=this.page.length-1}this.page[this.curpage].show();return this};AJS.Dialog.prototype.gotoPage=function(K){this.page[this.curpage].hide();this.curpage=K;if(this.curpage<0){this.curpage=this.page.length-1}else{if(this.curpage>=this.page.length){this.curpage=0}}this.page[this.curpage].show();return this};AJS.Dialog.prototype.getPanel=function(L,M){var K=(M==null)?this.curpage:L;if(M==null){M=L}return this.page[K].panel[M]};AJS.Dialog.prototype.getPage=function(K){return this.page[K]};AJS.Dialog.prototype.getCurrentPanel=function(){return this.page[this.curpage].getCurrentPanel()};AJS.Dialog.prototype.gotoPanel=function(M,L){if(L!=null){var K=M.id||M;this.gotoPage(K)}this.page[this.curpage].gotoPanel(typeof L=="undefined"?M:L)};AJS.Dialog.prototype.show=function(){this.popup.show();AJS.trigger("show.dialog",{dialog:this});return this};AJS.Dialog.prototype.hide=function(){this.popup.hide();AJS.trigger("hide.dialog",{dialog:this});return this};AJS.Dialog.prototype.remove=function(){this.popup.hide();this.popup.remove();AJS.trigger("remove.dialog",{dialog:this})};AJS.Dialog.prototype.disable=function(){this.popup.disable();return this};AJS.Dialog.prototype.enable=function(){this.popup.enable();return this};AJS.Dialog.prototype.get=function(S){var L=[],R=this;var T='#([^"][^ ]*|"[^"]*")';var U=":(\\d+)";var M="page|panel|button|header";var N="(?:("+M+")(?:"+T+"|"+U+")?|"+T+")";var P=new RegExp("(?:^|,)\\s*"+N+"(?:\\s+"+N+")?\\s*(?=,|$)","ig");(S+"").replace(P,function(f,V,e,W,c,b,Y,g,d){V=V&&V.toLowerCase();var X=[];if(V=="page"&&R.page[W]){X.push(R.page[W]);V=b;V=V&&V.toLowerCase();e=Y;W=g;c=d}else{X=R.page}e=e&&(e+"").replace(/"/g,"");Y=Y&&(Y+"").replace(/"/g,"");c=c&&(c+"").replace(/"/g,"");d=d&&(d+"").replace(/"/g,"");if(V||c){for(var a=X.length;a--;){if(c||(V=="panel"&&(e||(!e&&W==null)))){for(var Z=X[a].panel.length;Z--;){if(X[a].panel[Z].button.html()==c||X[a].panel[Z].button.html()==e||(V=="panel"&&!e&&W==null)){L.push(X[a].panel[Z])}}}if(c||(V=="button"&&(e||(!e&&W==null)))){for(var Z=X[a].button.length;Z--;){if(X[a].button[Z].item.html()==c||X[a].button[Z].item.html()==e||(V=="button"&&!e&&W==null)){L.push(X[a].button[Z])}}}if(X[a][V]&&X[a][V][W]){L.push(X[a][V][W])}if(V=="header"&&X[a].header){L.push(X[a].header)}}}else{L=L.concat(X)}});var Q={length:L.length};for(var O=L.length;O--;){Q[O]=L[O];for(var K in L[O]){if(!(K in Q)){(function(V){Q[V]=function(){for(var W=this.length;W--;){if(typeof this[W][V]=="function"){this[W][V].apply(this[W],arguments)}}}})(K)}}}return Q};AJS.Dialog.prototype.updateHeight=function(){var K=0;var M=AJS.$(window).height()-E-C-(I*2);for(var L=0;this.getPanel(L);L++){if(this.getPanel(L).body.css({height:"auto",display:"block"}).outerHeight()>K){K=Math.min(M,this.getPanel(L).body.outerHeight())}if(L!==this.page[this.curpage].curtab){this.getPanel(L).body.css({display:"none"})}}for(L=0;this.getPanel(L);L++){this.getPanel(L).body.css({height:K||this.height})}this.page[0].menu.height(K);this.height=K+E+C+1;this.popup.changeSize(undefined,this.height)};AJS.Dialog.prototype.isMaximised=function(){return this.popup.element.outerHeight()>=AJS.$(window).height()-(I*2)};AJS.Dialog.prototype.getCurPanel=function(){return this.getPanel(this.page[this.curpage].curtab)};AJS.Dialog.prototype.getCurPanelButton=function(){return this.getCurPanel().button}})();
(function(){AJS.icons=AJS.icons||{};AJS.icons.addIcon=function(B,C){AJS.icons[B]=function(E,D){return A(C,E,D)}};AJS.icons.addIcon.init=function(){var D=this.className.split(" "),B=D.length,C=this.className.match(/(^|\s)size-(\d+)(\s|$)/);C=C&&+C[2];while(B--){if(D[B]!="addIcon"&&D[B] in AJS.icons){AJS.icons[D[B]](this,C)}}};function A(E,C,B){B=B||24;var D=Raphael([C,B+1,B+1].concat(E));D.scale(B/24,B/24,0,0)}})();AJS.$(function(){AJS.$(".svg-icon").each(AJS.icons.addIcon.init)});AJS.icons.addIcon("generic",[{stroke:"none",fill:"#999",type:"path",path:"M22.465,8.464c1.944,1.944,1.944,5.126,0,7.07l-6.93,6.93c-1.944,1.945-5.126,1.945-7.07,0l-6.929-6.93c-1.945-1.943-1.945-5.125,0-7.07l6.929-6.93c1.944-1.944,5.126-1.944,7.07,0L22.465,8.464z"},{type:"path",stroke:"none",fill:"90-#999996-#a1a19f:20-#b8b8b7:70-#ccc",path:"M9.172,2.242L9.172,2.242l-6.929,6.93C1.491,9.923,1.077,10.927,1.077,12c0,1.072,0.414,2.076,1.166,2.828l6.929,6.93c0.751,0.752,1.756,1.166,2.828,1.166s2.076-0.414,2.828-1.166l6.93-6.93c0.751-0.752,1.165-1.756,1.165-2.828c0-1.072-0.414-2.076-1.165-2.828l-6.93-6.93C13.269,0.682,10.731,0.682,9.172,2.242z"},{type:"path",stroke:"none",fill:"270-#999996-#a1a19f:20-#b8b8b7:70-#ccc",path:"M7.181,5.869 7.181,17.95 16.974,17.95 16.974,9.205 13.638,5.869"},{type:"path",stroke:"none",fill:"#fff",path:"M12.724,9.619v-2.75H8.181V16.95h7.793v-6.832h-2.75C12.946,10.119,12.724,9.894,12.724,9.619zM13.724,7.369c0,0.521,0,1.32,0,1.75c0.428,0,1.229,0,1.75,0L13.724,7.369z"}]);AJS.icons.addIcon("error",[{type:"path",stroke:"none",fill:"#c00",path:"M7.857,22L2,16.143 2,7.857 7.857,1.999 16.143,1.999 22,7.857 22,16.143 16.143,22z"},{type:"path",stroke:"none",fill:"90-#c00-#d50909-#ed2121-#f33",path:"M8.271,2.999C7.771,3.5,3.501,7.77,3,8.271c0,0.708,0,6.748,0,7.457c0.501,0.5,4.771,4.77,5.271,5.271c0.708,0,6.749,0,7.457,0c0.501-0.502,4.771-4.771,5.271-5.271c0-0.709,0-6.749,0-7.457c-0.501-0.501-4.771-4.771-5.271-5.272C15.021,2.999,8.979,2.999,8.271,2.999z"},{type:"rect",x:5.318,y:9.321,fill:"270-#c00-#d50909-#ed2121-#f33",stroke:"none",width:13.363,height:5.356},{type:"rect",x:6.318,y:10.321,fill:"#fff",stroke:"none",width:11.363,height:3.356}]);AJS.icons.addIcon("success",[{type:"path",stroke:"none",path:"M22,18.801C22,20.559,20.561,22,18.799,22H5.201C3.439,22,2,20.559,2,18.801V5.199C2,3.44,3.439,2,5.201,2h13.598C20.561,2,22,3.44,22,5.199V18.801z",fill:"#393"},{type:"path",path:"M5.201,3C3.987,3,3,3.986,3,5.199v13.602C3,20.014,3.987,21,5.201,21h13.598C20.013,21,21,20.014,21,18.801V5.199C21,3.986,20.013,3,18.799,3H5.201z",stroke:"none",fill:"90-#393-#33a23c-#3c6"},{type:"path",path:"M10.675,12.158c-0.503-0.57-1.644-1.862-1.644-1.862l-3.494,2.833l3.663,5.313l4.503,1.205L17.73,4.624l-4.361-0.056C13.369,4.568,11.424,10.047,10.675,12.158z",stroke:"none",fill:"270-#393-#33a23c-#3c6"},{type:"path",path:"M14.072,5.577 11.05,14.092 8.917,11.677 6.886,13.324 9.815,17.57 12.997,18.422 16.432,5.607",stroke:"none",fill:"#fff"}]);AJS.icons.addIcon("hint",[{type:"path",path:"M22.465,8.464c1.944,1.944,1.944,5.126,0,7.07l-6.93,6.93c-1.944,1.945-5.126,1.945-7.07,0l-6.929-6.93c-1.945-1.943-1.945-5.125,0-7.07l6.929-6.93c1.944-1.944,5.126-1.944,7.07,0L22.465,8.464z",stroke:"none",fill:"#009898"},{type:"path",path:"M9.172,2.242L9.172,2.242l-6.929,6.93C1.491,9.923,1.077,10.927,1.077,12c0,1.072,0.414,2.076,1.166,2.828l6.929,6.93c0.751,0.752,1.756,1.166,2.828,1.166s2.076-0.414,2.828-1.166l6.93-6.93c0.751-0.752,1.165-1.756,1.165-2.828c0-1.072-0.414-2.076-1.165-2.828l-6.93-6.93C13.269,0.682,10.731,0.682,9.172,2.242z",stroke:"none",fill:"270-#099-#00a2a2-#00baba-#0cc"},{type:"path",path:"M12,5.077c-2.679,0-4.857,2.179-4.857,4.857c0,1.897,0.741,2.864,1.337,3.639c0.385,0.502,0.662,0.863,0.761,1.443l0.045,0.264v2.25c0,0.854,0.693,1.547,1.546,1.547h2.338c0.852,0,1.545-0.693,1.545-1.547v-2.254l0.044-0.258c0.1-0.582,0.377-0.943,0.762-1.443c0.596-0.777,1.338-1.743,1.338-3.641C16.857,7.255,14.679,5.077,12,5.077z",stroke:"none",fill:"270-#099-#00a2a2-#00baba-#0cc"},{type:"path",path:"M10.227,14.849c-0.331-1.936-2.084-2.197-2.084-4.915c0-2.131,1.727-3.857,3.857-3.857c2.13,0,3.857,1.727,3.857,3.857c0,2.717-1.754,2.979-2.085,4.915H10.227z M10.285,15.849v1.682c0,0.301,0.246,0.547,0.546,0.547h2.338c0.3,0,0.545-0.246,0.545-0.547v-1.682H10.285z",stroke:"none",fill:"#fff"}]);AJS.icons.addIcon("info",[{type:"circle",cx:12,cy:12,r:10,stroke:"none",fill:"#06c"},{type:"path",path:"M3,12c0,4.962,4.037,9,9,9s9-4.038,9-9s-4.037-9-9-9S3,7.037,3,12z",stroke:"none",fill:"90-#06c-#006FD5-#0087ED-#0099FF"},{type:"path",path:"M9.409,7.472c0,0.694,0.282,1.319,0.729,1.785c-0.288,0-0.729,0-0.729,0v9.425h5.182V9.257c0,0-0.44,0-0.729,0c0.446-0.466,0.729-1.09,0.729-1.785c0-1.429-1.162-2.591-2.591-2.591S9.409,6.043,9.409,7.472z",stroke:"none",fill:"270-#06c-#006FD5-#0087ED-#0099FF"},{type:"path",path:"M13.591,10.257v7.425h-3.182v-7.425H13.591z M12,9.063c0.879,0,1.591-0.712,1.591-1.591S12.879,5.881,12,5.881s-1.591,0.712-1.591,1.591S11.121,9.063,12,9.063z",stroke:"none",fill:"#fff"}]);AJS.icons.addIcon("warning",[{type:"path",path:"M8.595,4.368c1.873-3.245,4.938-3.245,6.811,0c1.873,3.245,4.938,8.554,6.812,11.798c1.874,3.244,0.342,5.898-3.405,5.898c-3.746,0-9.876,0-13.624,0c-3.746,0-5.278-2.654-3.405-5.898C3.656,12.922,6.721,7.613,8.595,4.368z",stroke:"none",fill:"#f90"},{type:"path",path:"M9.461,4.868L2.649,16.666c-0.72,1.246-0.863,2.371-0.404,3.166s1.504,1.232,2.943,1.232h13.624c1.439,0,2.485-0.438,2.944-1.232s0.315-1.92-0.405-3.166L14.539,4.868C13.82,3.622,12.918,2.935,12,2.935S10.181,3.621,9.461,4.868z",stroke:"none",fill:"90-#f90-#ffa209-#ffba21-#fc3"},{type:"path",path:"M9.274,6.187c0,0,0.968,9.68,0.986,9.862c-0.532,0.476-0.881,1.148-0.881,1.916c0,1.433,1.165,2.598,2.597,2.598c1.433,0,2.598-1.165,2.598-2.598c0-0.77-0.351-1.441-0.883-1.918c0.018-0.184,0.988-9.86,0.988-9.86H9.274z",stroke:"none",fill:"270-#f90-#ffa209-#ffba21-#fc3"},{type:"path",path:"M11.177,15.171l-0.798-7.984h3.194l-0.8,7.984H11.177z M11.976,16.368c-0.882,0-1.597,0.716-1.597,1.597c0,0.883,0.715,1.598,1.597,1.598c0.881,0,1.598-0.715,1.598-1.598C13.573,17.084,12.856,16.368,11.976,16.368z",stroke:"none",fill:"#fff"}]);AJS.icons.addIcon("close",[{type:"path",path:"M15.535,12l4.95-4.95c0.977-0.977,0.977-2.559,0-3.536s-2.56-0.977-3.536,0L12,8.464l-4.95-4.95c-0.977-0.977-2.559-0.977-3.536,0s-0.977,2.559,0,3.536L8.464,12l-4.95,4.95c-0.977,0.977-0.977,2.559,0,3.535s2.559,0.977,3.536,0L12,15.535l4.949,4.949c0.977,0.977,2.56,0.977,3.536,0s0.977-2.559,0-3.535L15.535,12z",stroke:"none",fill:"#999"},{type:"path",path:"M18.718,20.217c-0.401,0-0.777-0.156-1.062-0.439L12,14.121l-5.657,5.656c-0.284,0.283-0.66,0.439-1.061,0.439c-0.4,0-0.777-0.156-1.061-0.439c-0.283-0.283-0.439-0.66-0.439-1.061s0.156-0.777,0.439-1.061L9.878,12L4.222,6.343c-0.283-0.284-0.439-0.66-0.439-1.061c0-0.4,0.156-0.777,0.439-1.061c0.284-0.283,0.66-0.439,1.061-0.439c0.401,0,0.777,0.156,1.061,0.439L12,9.878l5.656-5.657c0.284-0.283,0.66-0.439,1.062-0.439c0.4,0,0.776,0.156,1.061,0.439c0.283,0.284,0.439,0.66,0.439,1.061c0,0.401-0.156,0.777-0.439,1.061L14.121,12l5.657,5.657c0.283,0.283,0.439,0.66,0.439,1.061s-0.156,0.777-0.439,1.061C19.494,20.061,19.118,20.217,18.718,20.217L18.718,20.217z",stroke:"none",fill:"90-#999996-#a1a19f-#b8b8b7-#ccc"}]);
(function(A){AJS.InlineDialog=function(T,H,K,I){if(typeof H==="undefined"){H=String(Math.random()).replace(".","");if(A("#inline-dialog-"+H+", #arrow-"+H+", #inline-dialog-shim-"+H).length){throw"GENERATED_IDENTIFIER_NOT_UNIQUE"}}var R=A.extend(false,AJS.InlineDialog.opts,I);var E;var J;var b;var N=false;var S=false;var Z=false;var a;var P;var B=A('<div id="inline-dialog-'+H+'" class="aui-inline-dialog"><div class="contents"></div><div id="arrow-'+H+'" class="arrow"></div></div>');var G=A("#arrow-"+H,B);var Y=B.find(".contents");Y.css("width",R.width+"px");Y.mouseover(function(c){clearTimeout(J);B.unbind("mouseover")}).mouseout(function(){W()});var V=function(){if(!E){E={popup:B,hide:function(){W(0)},id:H,show:function(){Q()},reset:function(){function d(f,e){f.css(e.popupCss);if(window.Raphael){if(!f.arrowCanvas){f.arrowCanvas=Raphael("arrow-"+H,16,16)}var g=R.getArrowPath,h=A.isFunction(g)?g(e):g;f.arrowCanvas.path(h).attr(R.getArrowAttributes())}G.css(e.arrowCss)}var c=R.calculatePositions(B,P,a,R);d(B,c);B.fadeIn(R.fadeTime,function(){});if(R.displayShadow){if(B.shadow){B.shadow.remove()}B.shadow=Raphael.shadow(0,0,Y.width(),Y.height(),{target:Y}).hide().fadeIn(R.fadeTime)}if(AJS.$.browser.msie&&~~(AJS.$.browser.version)<10){if(A("#inline-dialog-shim-"+H).length==0){A(B).prepend(A('<iframe class = "inline-dialog-shim" id="inline-dialog-shim-'+H+'" frameBorder="0" src="javascript:false;"></iframe>'))}A("#inline-dialog-shim-"+H).css({width:Y.outerWidth(),height:Y.outerHeight()})}}}}return E};var Q=function(){if(B.is(":visible")){return }b=setTimeout(function(){if(!Z||!S){return }R.addActiveClass&&A(T).addClass("active");N=true;F();AJS.InlineDialog.current=V();AJS.$(document).trigger("showLayer",["inlineDialog",V()]);V().reset()},R.showDelay)};var W=function(c){S=false;if(N&&R.preHideCallback.call(B[0].popup)){c=(c==null)?R.hideDelay:c;clearTimeout(J);clearTimeout(b);if(c!=null){J=setTimeout(function(){U();R.addActiveClass&&A(T).removeClass("active");B.fadeOut(R.fadeTime,function(){R.hideCallback.call(B[0].popup)});if(R.displayShadow){B.shadow.remove();B.shadow=null}B.arrowCanvas.remove();B.arrowCanvas=null;N=false;S=false;AJS.$(document).trigger("hideLayer",["inlineDialog",V()]);AJS.InlineDialog.current=null;if(!R.cacheContent){Z=false;O=false}},c)}}};var X=function(g,d){var c=A(d);R.upfrontCallback.call({popup:B,hide:function(){W(0)},id:H,show:function(){Q()}});B.each(function(){if(typeof this.popup!="undefined"){this.popup.hide()}});if(R.closeOthers){AJS.$(".aui-inline-dialog").each(function(){this.popup.hide()})}P={target:c};if(!g){a={x:c.offset().left,y:c.offset().top}}else{a={x:g.pageX,y:g.pageY}}if(!N){clearTimeout(b)}S=true;var f=function(){O=false;Z=true;R.initCallback.call({popup:B,hide:function(){W(0)},id:H,show:function(){Q()}});Q()};if(!O){O=true;if(A.isFunction(K)){K(Y,d,f)}else{AJS.$.get(K,function(h,e,i){Y.html(R.responseHandler(h,e,i));Z=true;R.initCallback.call({popup:B,hide:function(){W(0)},id:H,show:function(){Q()}});Q()})}}clearTimeout(J);if(!N){Q()}return false};B[0].popup=V();var O=false;var M=false;var L=function(){if(!M){A(R.container).append(B);M=true}};if(R.onHover){if(R.useLiveEvents){A(T).live("mousemove",function(c){L();X(c,this)}).live("mouseout",function(){W()})}else{A(T).mousemove(function(c){L();X(c,this)}).mouseout(function(){W()})}}else{if(!R.noBind){if(R.useLiveEvents){A(T).live("click",function(c){L();X(c,this);return false}).live("mouseout",function(){W()})}else{A(T).click(function(c){L();X(c,this);return false}).mouseout(function(){W()})}}}var D=false;var C=H+".inline-dialog-check";var F=function(){if(!D){A("body").bind("click."+C,function(d){var c=A(d.target);if(c.closest("#inline-dialog-"+H+" .contents").length===0){W(0)}});D=true}};var U=function(){if(D){A("body").unbind("click."+C)}D=false};B.show=function(c){if(c){c.stopPropagation()}L();X(null,T)};B.hide=function(){W(0)};B.refresh=function(){if(N){V().reset()}};B.getOptions=function(){return R};return B};AJS.InlineDialog.opts={onTop:false,responseHandler:function(C,B,D){return C},closeOthers:true,isRelativeToMouse:false,addActiveClass:true,onHover:false,useLiveEvents:false,noBind:false,fadeTime:100,hideDelay:10000,showDelay:0,width:300,offsetX:0,offsetY:10,arrowOffsetX:0,container:"body",cacheContent:true,displayShadow:true,preHideCallback:function(){return true},hideCallback:function(){},initCallback:function(){},upfrontCallback:function(){},calculatePositions:function(C,J,R,N){var K;var T;var P;var G=-7;var H;var L;var S=J.target.offset();var B=J.target.outerWidth();var E=S.left+B/2;var O=(window.pageYOffset||document.documentElement.scrollTop)+A(window).height();var F=10;P=S.top+J.target.outerHeight()+N.offsetY;K=S.left+N.offsetX;var I=S.top>C.height();var D=(P+C.height())<O;L=(!D&&I)||(N.onTop&&I);var M=A(window).width()-(K+N.width+F);if(L){P=S.top-C.height()-8;var Q=N.displayShadow?(AJS.$.browser.msie?10:9):0;G=C.height()-Q}H=E-K+N.arrowOffsetX;if(N.isRelativeToMouse){if(M<0){T=F;K="auto";H=R.x-(A(window).width()-N.width)}else{K=R.x-20;T="auto";H=R.x-K}}else{if(M<0){T=F;K="auto";H=E-(A(window).width()-N.width)}else{if(N.width<=B/2){H=N.width/2;K=E-N.width/2}}}return{displayAbove:L,popupCss:{left:K,right:T,top:P},arrowCss:{position:"absolute",left:H,right:"auto",top:G}}},getArrowPath:function(B){return B.displayAbove?"M0,8L8,16,16,8":"M0,8L8,0,16,8"},getArrowAttributes:function(){return{fill:"#fff",stroke:"#ccc"}}}})(jQuery);
AJS.warnAboutFirebug=function(B){if(!AJS.Cookie.read("COOKIE_FB_WARNING")&&window.console&&window.console.firebug){if(!B){B="Firebug is known to cause performance problems with Atlassian products. Try disabling it, if you notice any issues."}var A=AJS.$("<div id='firebug-warning'><p>"+B+"</p><a class='close'>Close</a></div>");AJS.$(".close",A).click(function(){A.slideUp("fast");AJS.Cookie.save("COOKIE_FB_WARNING","true")});A.prependTo(AJS.$("body"))}};
AJS.inlineHelp=function(){AJS.$(".icon-inline-help").click(function(){var A=AJS.$(this).siblings(".field-help");if(A.hasClass("hidden")){A.removeClass("hidden")}else{A.addClass("hidden")}})};
(function(){AJS.messages={setup:function(){AJS.messages.createMessage("generic");AJS.messages.createMessage("error");AJS.messages.createMessage("warning");AJS.messages.createMessage("info");AJS.messages.createMessage("success");AJS.messages.createMessage("hint");AJS.messages.makeCloseable()},makeCloseable:function(A){AJS.$(A||"div.aui-message.closeable").each(function(){var C=AJS.$(this),B=AJS.$('<span class="aui-icon icon-close" role="button" tabindex="0"></span>').click(function(){C.closeMessage()}).keypress(function(D){if((D.which===AJS.$.ui.keyCode.ENTER)||(D.which===AJS.$.ui.keyCode.SPACE)){C.closeMessage();D.preventDefault()}});C.append(B);B.each(AJS.icons.addIcon.init)})},template:'<div class="aui-message {type} {closeable} {shadowed}"><p class="title"><span class="aui-icon icon-{type}"></span><strong>{title}</strong></p>{body}</div><!-- .aui-message -->',createMessage:function(A){AJS.messages[A]=function(D,F){var E=this.template,C,B;if(!F){F=D;D="#aui-message-bar"}F.closeable=(F.closeable==false)?false:true;F.shadowed=(F.shadowed==false)?false:true;C=AJS.$(AJS.template(E).fill({type:A,closeable:F.closeable?"closeable":"",shadowed:F.shadowed?"shadowed":"",title:F.title||"","body:html":F.body||""}).toString());if(F.id){if(/[#\'\"\.\s]/g.test(F.id)){AJS.log("AJS.Messages error: ID rejected, must not include spaces, hashes, dots or quotes.")}else{C.attr("id",F.id)}}B=F.insert||"append";if(B==="prepend"){C.prependTo(D)}else{C.appendTo(D)}F.closeable&&AJS.messages.makeCloseable(C)}}};AJS.$.fn.closeMessage=function(){var A=AJS.$(this);if(A.hasClass("aui-message","closeable")){A.trigger("messageClose",[this]).remove()}};AJS.$(function(){AJS.messages.setup()})})();
(function(){var B,G,E,C,D=/#.*/,F="active-tab",A="active-pane";AJS.tabs={setup:function(){var J;B=AJS.$(".aui-tabs:not(.aui-tabs-disabled)");for(var H=0,I=B.length;H<I;H++){J=AJS.$(B[H]);if(!J.data("aui-tab-events-bound")){G=AJS.$("ul.tabs-menu",B[H]);G.delegate("a","click",function(K){AJS.tabs.change(AJS.$(this),K);K&&K.preventDefault()});J.data("aui-tab-events-bound",true)}}AJS.$(".aui-tabs.vertical-tabs").find("a").each(function(K){E=AJS.$(this);if(!E.attr("title")){C=E.children("strong:first");if(AJS.isClipped(C)){E.attr("title",E.text())}}})},change:function(I,J){var H=AJS.$(I.attr("href").match(D)[0]);H.addClass(A).siblings().removeClass(A);I.parent("li.menu-item").addClass(F).siblings().removeClass(F);I.trigger("tabSelect",{tab:I,pane:H})}};AJS.$(AJS.tabs.setup)})();
AJS.template=(function(G){var J=/\{([^\}]+)\}/g,D=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,H=/([^\\])'/g,F=function(O,N,P,L){var M=P;N.replace(D,function(S,R,Q,U,T){R=R||U;if(M){if(R+":html" in M){M=M[R+":html"];L=true}else{if(R in M){M=M[R]}}if(T&&typeof M=="function"){M=M()}}});if(M==null||M==P){M=O}M=String(M);if(!L){M=E.escape(M)}return M},B=function(L){this.template=this.template.replace(J,function(N,M){return F(N,M,L,true)});return this},K=function(L){this.template=this.template.replace(J,function(N,M){return F(N,M,L)});return this},C=function(){return this.template};var E=function(M){function L(){return L.template}L.template=String(M);L.toString=L.valueOf=C;L.fill=K;L.fillHtml=B;return L},A={},I=[];E.load=function(L){L=String(L);if(!A.hasOwnProperty(L)){I.length>=1000&&delete A[I.shift()];I.push(L);A[L]=G("script[title='"+L.replace(H,"$1\\'")+"']")[0].text}return this(A[L])};E.escape=AJS.escapeHtml;return E})(window.jQuery);
(function(A,E){var D=navigator.platform.indexOf("Mac")!==-1;var B=/^(backspace|tab|r(ight|eturn)|s(hift|pace|croll)|c(trl|apslock)|alt|pa(use|ge(up|down))|e(sc|nd)|home|left|up|d(el|own)|insert|f\d\d?|numlock|meta)/i;A.whenIType=function(Q){var P=[],J=E.Callbacks();function G(R){if(!AJS.popup.current&&J){J.fire(R)}}function H(R){R.preventDefault()}function O(R){var S=R&&R.split?E.trim(R).split(" "):[R];E.each(S,function(){I(this)})}function L(S){var R=S.length;while(R--){if(S[R].length>1&&S[R]!=="space"){return true}}return false}function I(T){var S=T instanceof Array?T:N(T.toString());var R=L(S)?"keydown":"keypress";P.push(S);E(document).bind(R,S,G);E(document).bind(R+" keyup",S,H)}function N(T){var V=[],U="",S,R;while(T.length){if(S=T.match(/^(ctrl|meta|shift|alt)\+/i)){U+=S[0];T=T.substring(S[0].length)}else{if(R=T.match(B)){V.push(U+R[0]);T=T.substring(R[0].length);U=""}else{V.push(U+T[0]);T=T.substring(1);U=""}}}return V}function K(T){var V=E(T),X=V.attr("title")||"",W=P.slice();var S=V.data("kbShortcutAppended")||"";var R=!S;var U=R?X:X.substring(0,X.length-S.length);while(W.length){S=F(W.shift().slice(),S,R);R=false}if(D){S=S.replace(/Meta/ig,"\u2318").replace(/Shift/ig,"\u21E7")}V.attr("title",U+S);V.data("kbShortcutAppended",S)}function M(S){var T=E(S);var R=T.data("kbShortcutAppended");if(!R){return }var U=T.attr("title");T.attr("title",U.replace(R,""));T.removeData("kbShortcutAppended")}function F(T,S,R){if(R){S+=" ("+AJS.format("{0}",T.shift())}else{S=S.replace(/\)$/,"");S+=AJS.format("or {0}",T.shift())}E.each(T,function(){S+=" "+AJS.format(", {0}",this)});S+=")";return S}O(Q);return A.whenIType.makeShortcut({executor:J,bindKeys:O,addShortcutsToTitle:K,removeShortcutsFromTitle:M,keypressHandler:G,defaultPreventionHandler:H})};A.whenIType.makeShortcut=function(N){var I=N.executor;var L=N.bindKeys;var J=N.addShortcutsToTitle;var K=N.removeShortcutsFromTitle;var G=N.keypressHandler;var H=N.defaultPreventionHandler;var M=[];function F(O){return function(P,R){R=R||{};var Q=R.focusedClass||"focused";var S=R.hasOwnProperty("wrapAround")?R.wrapAround:true;var T=R.hasOwnProperty("escToCancel")?R.escToCancel:true;I.add(function(){var W=E(P),V=W.filter("."+Q),U=V.length===0?undefined:{transition:true};if(T){E(document).one("keydown",function(X){if(X.keyCode===E.ui.keyCode.ESCAPE&&V){V.removeClass(Q)}})}if(V.length){V.removeClass(Q)}V=O(V,W,S);if(V&&V.length>0){V.addClass(Q);V.moveTo(U);if(V.is("a")){V.focus()}else{V.find("a:first").focus()}}});return this}}return{moveToNextItem:F(function(Q,R,P){var O;if(P&&Q.length===0){return R.eq(0)}else{O=E.inArray(Q.get(0),R);if(O<R.length-1){O=O+1;return R.eq(O)}else{if(P){return R.eq(0)}}}return Q}),moveToPrevItem:F(function(Q,R,P){var O;if(P&&Q.length===0){return R.filter(":last")}else{O=E.inArray(Q.get(0),R);if(O>0){O=O-1;return R.eq(O)}else{if(P){return R.filter(":last")}}}return Q}),click:function(O){M.push(O);J(O);I.add(function(){var P=E(O);if(P.length>0){P.click()}});return this},goTo:function(O){I.add(function(){window.location.href=O});return this},followLink:function(O){M.push(O);J(O);I.add(function(){var P=E(O)[0];if(P&&{a:true,link:true}[P.nodeName.toLowerCase()]){window.location.href=P.href}});return this},execute:function(P){var O=this;I.add(function(){P.apply(O,arguments)});return this},evaluate:function(O){O.call(this)},moveToAndClick:function(O){M.push(O);J(O);I.add(function(){var P=E(O);if(P.length>0){P.click();P.moveTo()}});return this},moveToAndFocus:function(O){M.push(O);J(O);I.add(function(Q){var P=jQuery(O);if(P.length>0){P.focus();P.moveTo&&P.moveTo();if(P.is(":input")){Q.preventDefault()}}});return this},or:function(O){L(O);return this},unbind:function(){E(document).unbind("keydown keypress",G).unbind("keydown keypress keyup",H);for(var P=0,O=M.length;P<O;P++){K(M[P])}M=[]}}};A.whenIType.fromJSON=function(H,G){var F=[];if(H){E.each(H,function(J,K){var I=K.op,N=K.param,M;if(I==="execute"||I==="evaluate"){M=[new Function(N)]}else{if(/^\[[^\]\[]*,[^\]\[]*\]$/.test(N)){try{M=JSON.parse(N)}catch(L){C("When using a parameter array, array must be in strict JSON format: "+N)}if(!E.isArray(M)){C("Badly formatted shortcut parameter. String or JSON Array of parameters required: "+N)}}else{M=[N]}}E.each(K.keys,function(){var P=this;if(G&&D){P=E.map(this,function(Q){return Q.replace(/ctrl/i,"meta")})}var O=AJS.whenIType(P);O[I].apply(O,M);F.push(O)})})}return F};function C(F){if(console&&console.error){console.error(F)}else{AJS.log(F)}}E(document).bind("iframeAppended",function(G,F){E(F).load(function(){var H=E(F).contents();H.bind("keyup keydown keypress",function(I){if(E.browser.safari&&I.type==="keypress"){return }if(!E(I.target).is(":input")){E.event.trigger(I,arguments,document,true)}})})})})(AJS,AJS.$);
jQuery.fn.isDirty=function(){var B,A=[];window.onbeforeunload=function(){var C=window.onbeforeunload;if(B!==false){jQuery.each(A,function(){if(this.initVal!==AJS.$(this).val()){B=true;return false}})}if(B){window.onbeforeunload=null;window.setTimeout(function(){jQuery(document).bind("mousemove",function(){window.onbeforeunload=C;jQuery(document).unbind("mousemove",arguments.callee)})},1000);B=void (0);return AJS.params.dirtyMessage||""}};return function(D){if(this.length===0){return }function C(F){var E=jQuery(this);jQuery.fn.isDirty.fieldInFocus=E;if(jQuery.inArray(this,A)===-1){this.initVal=E.val();A.push(this);E.die(F.type,C)}}jQuery(":not(:input)").live("click",function(){delete jQuery.fn.isDirty.fieldInFocus});jQuery(":input[type != hidden]",this.selector).bind("keydown",C).bind("keypress",C).bind("click",C);jQuery(D.ignoreUnloadFromElems).live("mousedown",function(){B=false});this.each(function(){this.onsubmit=function(E){return function(){B=false;if(E){return E.apply(this,arguments)}}}(this.onsubmit);AJS.$(this).submit(function(){B=false})});return this}}();
(function(A){A.fn.progressBar=function(I,L){var C=this;var F={height:"1em",showPercentage:true};var B=A.extend(F,L);var J=C.attr("id")+"-incomplete-bar";var D=C.attr("id")+"-complete-bar";var K=C.attr("id")+"-percent-complete-text";if(A("#"+J).length==0){var E=A(document.createElement("div"));E.attr("id",J);E.css({width:"90%",border:"solid 1px #ccc","float":"left","margin-right":"0.5em"});E.addClass("progress-background-color");var G=A(document.createElement("div"));G.attr("id",D);G.addClass("progress-fill-color");G.css({height:B.height,width:I+"%"});var H=A(document.createElement("span"));H.attr("id",K);H.addClass("percent-complete-text");H.html(I+"%");E.append(G);C.append(E);if(B.showPercentage){C.append(H)}}else{A("#"+D).css("width",I+"%");A("#"+K).html(I+"%")}}})(jQuery);
(function(A){if(document.selection){var B=function(C){return C.replace(/\u000D/g,"")};A.fn.selection=function(F){var E=this[0];this.focus();if(!E){return false}if(F==null){return document.selection.createRange().text}else{var D=E.scrollTop;var C=document.selection.createRange();C.text=F;C.select();E.focus();E.scrollTop=D}};A.fn.selectionRange=function(C,F){var G=this[0];this.focus();var I=document.selection.createRange();if(C==null){var K=this.val(),J=K.length,E=I.duplicate();E.moveToElementText(G);E.setEndPoint("StartToEnd",I);var D=J-B(E.text).length;E.setEndPoint("StartToStart",I);var H=J-B(E.text).length;if(D!=H&&K.charAt(D+1)=="\n"){D+=1}return{end:D,start:H,text:K.substring(H,D),textBefore:K.substring(0,H),textAfter:K.substring(D)}}else{I.moveToElementText(G);I.collapse(true);I.moveStart("character",C);I.moveEnd("character",F-C);I.select()}}}else{A.fn.selection=function(E){var D=this[0];if(!D){return false}if(E==null){if(D.setSelectionRange){return D.value.substring(D.selectionStart,D.selectionEnd)}else{return false}}else{var C=D.scrollTop;if(!!D.setSelectionRange){var F=D.selectionStart;D.value=D.value.substring(0,F)+E+D.value.substring(D.selectionEnd);D.selectionStart=F;D.selectionEnd=F+E.length}D.focus();D.scrollTop=C}};A.fn.selectionRange=function(F,C){if(F==null){var D={start:this[0].selectionStart,end:this[0].selectionEnd};var E=this.val();D.text=E.substring(D.start,D.end);D.textBefore=E.substring(0,D.start);D.textAfter=E.substring(D.end);return D}else{this[0].selectionStart=F;this[0].selectionEnd=C}}}A.fn.wrapSelection=function(C,D){this.selection(C+this.selection()+(D||""))}})(jQuery);
jQuery.fn.throbber=function(A){return function(){var C=[],B={isLatentThreshold:100,minThrobberDisplay:200,loadingClass:"loading"};A(document).ajaxComplete(function(E,D){A(C).each(function(F){if(D===this.get(0)){this.hideThrobber();C.splice(F,1)}})});return function(F){var E,G,D=function(I,H){D.t=setTimeout(function(){clearTimeout(D.t);D.t=undefined;I()},H)};F=A.extend(B,F||{});if(!F.target){return this}G=jQuery(F.target);C.push(A.extend(this,{showThrobber:function(){D(function(){if(!E){G.addClass(F.loadingClass);D(function(){if(E){E()}},F.minThrobberDisplay)}},F.isLatentThreshold)},hideThrobber:function(){E=function(){G.removeClass(F.loadingClass);if(F.end){F.end()}};if(!D.t){E()}}}));this.showThrobber();return this}}()}(jQuery);
/**
 * AJS.Meta is used to access dynamic metadata passed from the
 * server to JavaScript via the page HTML.
 *
 * @since 3.6
 */
(function($) {

    /**
     * Returns a boolean if the passed string is "true" or "false", ignoring case, else returns the original string.
     * @param value
     */
    AJS.asBooleanOrString = function (value) {
        var lc = value ? value.toLowerCase() : "";

        if (lc == "true")  return true;
        if (lc == "false") return false;

        return value;
    };

    // A backing map to use if the user sets data.
    var overrides = {};

    AJS.Meta = $.extend({}, AJS.Meta, {
        /**
         * Sets metadata with a key and value, for use when the state of the page changes after
         * loading from the server
         * @param key
         * @param value
         */
        set: function (key, value) {
            overrides[key] = value;
        },

        /**
         * Returns a value given a key. If no entry exists with the key, undefined is returned.
         * If the string value is "true" or "false" the respective boolean value is returned.
         *
         * @method get
         * @param key
         * @return {String} or {boolean}
         */
        get: function (key) {
            if (typeof overrides[key] != "undefined") return overrides[key];

            var metaEl = $("meta[name='ajs-" + key + "']");
            if (!metaEl.length)
                return undefined;

            var value = metaEl.attr("content");
            return AJS.asBooleanOrString(value);
        },

        /**
         * Returns true if the value for the provided key is equal to "true", else returns false.
         *
         * @method getBoolean
         * @param key
         * @return {boolean}
         */
        getBoolean: function (key) {
            return this.get(key) === true;
        },

        /**
         * Returns a number if the value for the provided key can be converted to one.
         * Good for retrieving content ids to check truthiness (e.g. '0' is truthy but 0 is falsy).
         *
         * @method getNumber
         * @param key
         * @return {number}
         */
        getNumber: function (key) {
            return +this.get(key);
        },

        /**
         * Mainly for use when debugging, returns all Data pairs in a map for eyeballing.
         */
        getAllAsMap: function () {
            var map = {};
            $("meta[name^=ajs-]").each(function () {
                map[this.name.substring(4)] = this.content;
            });
            return $.extend(map, overrides);
        }
    });

    /**
     * Returns Link metadata for a page, commonly found from <link> tags in the <head>.
     */
    AJS.Meta.Links = {

        /**
         * Returns a canonical URI for a Page or BlogPost, if present.
         */
        canonical: function () {
            // e.g. <link href="http://localhost:8080/confluence/display/TST/Home" rel="canonical">
            return $('head link[rel="canonical"]').attr('href');
        },

        /**
         * Returns a shortlink URI for a Page or BlogPost, if present.
         */
        shortlink: function () {
            // e.g. <link href="http://localhost:8080/confluence/x/BAAE" rel="shortlink">
            return $('head link[rel="shortlink"]').attr('href');
        }

    };

})(AJS.$);
/**
 * Dark features are features that can enabled and disabled per user via a feature key. Their main use is to allow
 * in-development features to be rolled out to production in a low-risk fashion.
 */
(function ($) {
    var featuresStr = AJS.Meta.get('enabled-dark-features'),
        featuresArr = featuresStr ? featuresStr.split(',') : [],
        features = {};

    $.each(featuresArr, function () {
        features[this] = true;
    });
    

    AJS.DarkFeatures = {
        isEnabled: function (key) {
            return !!features[key];
        },

        enable: function (key) {
            if (key && !features[key])
                features[key] = true;
        },

        disable: function (key) {
            if (key && features[key])
                delete features[key];
        },

        getAllEnabled: function() {
            return featuresArr;
        }
    };
})(AJS.$);


/**
 * Manager to store data in localStorage, only if supported by the browser.
 * It ensures that the keys are namespaced with a given prefix to avoid clashing with anything else.
 *
 * @param prefix the prefix to be added to the namespace. i.e. 'atlassian'
 * @param id of the storageManager to be returned. This is used to create a unique namespace for keys.
 */
AJS.storageManager = function(prefix, id) {
    var user = AJS.Meta.get("remote-user"),
        namespace = prefix + "." + (user ? user + "." : "") + id,
        delimiter = "#",
        localStorageSupported = false,
        prefixMatch = /\d+#/,
        getPrefix = function(seconds) {
            var milliseconds = (seconds || 0) * 1000;
            if(!milliseconds) {
                return '';
            }
            return +new Date() + milliseconds + delimiter;
        },
        getItem = function(key) {
            if (!localStorageSupported) return null;
            var match;
            var item = localStorage.getItem(namespace + "." + key);
            if(match = prefixMatch.exec(item)) {
                item = item.replace(match[0],'');
                if(+new Date() > match[0].replace("#",'')) {
                    localStorage.removeItem(namespace + "." + key);
                    return null;
                }
            }
            return item;
        };



    try {
        localStorageSupported = 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e) {
        AJS.log("Browser does not support localStorage, Confluence.storageManager will not work.");
    }

    return {
        /**
         * Gets the item stored in local storage for the given key. null is returned if it doesn't exist.
         * Note that this method will always return a string representation of what is stored.
         *
         * @param key
         */
        getItem: getItem,
        /**
         * Returns a boolean to let you know if we contain a key that matches, and has not expired.
         * @param key
         */
        doesContain: function(key) {
            return !!getItem(key);
        },
                /**
         * Gets the item stored in local storage for the given key and returns the boolean value of it.
         * It correctly convert the "true" and "false" strings to return true/false booleans.
         *
         * @param key
         */
        getItemAsBoolean: function (key) {
            var value = getItem(key);
            if (value == "false")
                return false;
            if (value == "true")
                return true;

            return !!value;
        },
        setItem: function(key, value, expire) {
            if (!localStorageSupported) return;
            value = getPrefix(expire) + value;

            localStorage.setItem(namespace + "." + key, value);
        },
        removeItem: function(key) {
            if (!localStorageSupported) return;

            localStorage.removeItem(namespace + "." + key);
        }
    };
};

AJS.$.ajaxSetup({traditional:true});AJS.isIE6=!window.XMLHttpRequest;AJS.applyPngFilter=function(a,c,b){if(!AJS.isIE6){return false}c=c||a.src;b=b||"scale";a.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+c+"', sizingMethod='"+b+"')";return true};
(function(e){var d=false;AJS.debug=function(g){if(!d){return}AJS.log("DEBUG: "+new Date().toLocaleTimeString()+" : "+g)};AJS.debugEnabled=function(g){if(typeof g!="boolean"){return d}d=g;AJS.log("DEBUG ENABLED: "+d)};AJS.logError=function(i,g){var h=[];if(e.browser.webkit){h.push(g)}else{for(prop in g){h.push(prop+": "+g[prop])}}AJS.log(i+h.join(", "))};AJS.toInit=function(g){e(function(){try{g.apply(this,arguments)}catch(h){AJS.logError("Failed to run init function: ",h);AJS.log("Failed toInit function is: "+g)}});return this};if(AJS.Meta.getBoolean("log-rendered")){var f=AJS.log,c=e('<div id="ajs-log" class="log"><h3>AJS Log</h3>\n</div>'),b=e("head"),a;c.toggleClass("hidden",!AJS.Meta.getBoolean("log-visible"));AJS.log=function(h){var i=(typeof(h)==="undefined")?"undefined":h;if(a){if(c.next().length!=0){a.append(c)}}else{var g=document.createElement("script");g.type="text/x-log";g.text=i;b.append(g)}c.append(e("<p></p>").text("\n"+i));f(h)};AJS.toInit(function(){a=e("body");a.append(c)})}AJS.Data=AJS.Data||AJS.Meta;AJS.getJSONWrap=function(i){var h=Confluence.getContextPath();var g=i.url;if(g.indexOf(h)!=0&&g.indexOf("http")!=0){g=h+g}i.loadingElement&&AJS.setVisible(i.loadingElement,true);var j=i.messageHandler;j.clearMessages();e.ajax({type:"GET",url:g,dataType:"json",data:i.data,error:function(){i.loadingElement&&AJS.setVisible(i.loadingElement,false);j.displayMessages(i.errorMessage||"There was an error communicating with the server, please try again later.");i.errorCallback&&i.errorCallback()},success:function(k){i.loadingElement&&AJS.setVisible(i.loadingElement,false);if(j.handleResponseErrors(k)){i.errorCallback&&i.errorCallback();return}i.successCallback&&i.successCallback(k)}})};AJS.Validate=e.extend((function(){var h,g;return{email:function(i){if(!h){h=/^((([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i}return h.test(i)},url:function(i){if(!g){g=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i}return g.test(i)}}}()),AJS.Validate)})(AJS.$);
(function(d){var a=function(e){var f,g;f=function(){return e.baseElement};g=function(i){var h=d("ul",i);if(!h.length){h=AJS("ul").appendTo(i)}return h};return{getMessageContainer:f,clearMessages:function(){f().addClass("hidden").empty()},displayMessages:function(l){if(!l||!l.length){return}if(!d.isArray(l)){l=[l]}var m=f(),k=g(m);for(var h=0,j=l.length;h<j;h++){AJS("li").text(l[h]).appendTo(k)}m.removeClass("hidden")},handleResponseErrors:function(h,i){var j=[].concat(h.validationErrors||[]).concat(h.actionErrors||[]).concat(h.errorMessage||[]);if(j.length){this.displayMessages(i||j);return true}return false}}};AJS.MessageHandler=function(f,g){var e=d.extend(a(f),g&&g(f));e.getMessageContainer().addClass("message-handler");e.clearMessages();return e};var c=false;var b;AJS.MessageHandler.closeOnNew=function(e){if(typeof e!=="undefined"){c=e}else{return c}};AJS.MessageHandler.message=function(f,e,g){g=g||"success";if(c){f.empty()}AJS.messages[g](f,{body:e,closeable:true,shadowed:true})};AJS.MessageHandler.error=function(f,e){AJS.MessageHandler.message(f,e,"error")};AJS.MessageHandler.actionMessage=function(e,f){b=b||d("#action-messages");AJS.MessageHandler.message(b,e,f)};AJS.MessageHandler.loading=function(e){AJS.MessageHandler.actionMessage(e,"info")}})(AJS.$);
AJS.ConfluenceDialog=function(a){var b;a=a||{};a=jQuery.extend({},{keypressListener:function(c){if(c.keyCode===27){AJS.debug("dialog.js: escape keydown caught");if(!jQuery(".aui-dropdown",b.popup.element).is(":visible")){if(typeof a.onCancel=="function"){a.onCancel()}else{b.hide()}}}else{if(c.keyCode===13){AJS.debug("dialog.js: enter keydown caught");if(!jQuery(".aui-dropdown",b.popup.element).is(":visible")){var d=c.target.nodeName&&c.target.nodeName.toLowerCase();if(d!="textarea"&&typeof a.onSubmit=="function"){setTimeout(a.onSubmit)}}}}},width:865,height:530},a);b=new AJS.Dialog(a);jQuery(document).bind("hideLayer",function(f,d,c){if(d=="popup"&&c==b){if(typeof a.onCancel=="function"){a.onCancel()}}});jQuery.aop.around({target:b,method:"addButton"},function(c){if(c.arguments[0]){c.arguments[0]=AJS.I18n.getText(c.arguments[0])}return c.proceed()});return b};AJS.toInit(function(b){AJS.bind("show.dialog",function(h,f){var c=AJS.Meta.get("page-id"),j=AJS.Meta.get("space-key"),d=AJS.Meta.get("editor-mode"),g=AJS.Meta.get("new-page"),i=function(){var e={};if(c){e.pageid=c}if(j){e.spacekey=j}if(d){e.editormode=d}if(g){e.newpage=g}return e};AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:f.dialog.id,properties:i()})});var a=function(e){var g=b(e),f;if(g.attr("data-lasttab-override")){return}if(g.attr("data-tab-default")){f=g.attr("data-tab-default")}var h=Confluence.storageManager(g.attr("id")),d=h.getItem("last-tab"),c=d!=null?d:f;if(c){b(".page-menu-item:visible:eq("+c+") button",g).click()}if(!g.attr("data-lasttab-bound")){b(".page-menu-item",g).each(function(k,j){b(j).click(function(){h.setItem("last-tab",k)})});g.attr("data-lasttab-bound","true")}};b(document).bind("showLayer",function(f,c,d){Confluence.runBinderComponents();if(c=="popup"&&d){a(d.element)}});AJS.Dialog.prototype.overrideLastTab=function(){b(this.popup.element).attr("data-lasttab-override","true")};AJS.Dialog.prototype.addHelpText=function(d,c){if(!d){return}var g=d;if(c){g=AJS.template(d).fill(c).toString()}var f=this.page[this.curpage];if(!f.buttonpanel){f.addButtonPanel()}var e=b("<div class='dialog-tip'></div>").html(g);f.buttonpanel.append(e);b("a",e).click(function(){window.open(this.href,"_blank").focus();return false})};AJS.Dialog.prototype.getTitle=function(){return b("#"+this.id+" .dialog-components:visible h2").text()};AJS.Dialog.prototype.isVisible=function(){return b("#"+this.id).is(":visible")}});
(function(){if(typeof AJS!="undefined"){var a=AJS.populateParameters;AJS.populateParameters=function(){a.apply(AJS,arguments);AJS.$("meta[name^=ajs-]").each(function(){var b=this.name,c=this.content;b=b.substring(4).replace(/(-\w)/g,function(d){return d.charAt(1).toUpperCase()});if(typeof AJS.params[b]=="undefined"){AJS.params[b]=AJS.asBooleanOrString(c)}})}}AJS.$.fn.disable=function(b){return this.each(function(){var c=AJS.$(this);var d=c.prop("disabled",true).addClass("disabled").attr("id");if(d){AJS.$("label[for="+d+"]",c.parent()).addClass("disabled")}})};AJS.$.fn.enable=function(b){return this.each(function(){var c=AJS.$(this);var d=c.attr("disabled",false).removeClass("disabled").attr("id");if(d){AJS.$("label[for="+d+"]",c.parent()).removeClass("disabled")}})};AJS.$.debounce=function(d,b){var c;return function(){var f=this,e=arguments;if(c){clearTimeout(c);c=undefined}c=setTimeout(function(){d.apply(f,e);c=undefined},b)}}})();
/*
 * jQuery UI Datepicker 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function( $, undefined ) {

$.extend($.ui, { datepicker: { version: "1.8.11" } });

var PROP_NAME = 'datepicker';
var dpuuid = new Date().getTime();

/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this.debug = false; // Change this to true to start debugging
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
	this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
	this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
	this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
	this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
	this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
	this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
	this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
	this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		closeText: 'Done', // Display text for close link
		prevText: 'Prev', // Display text for previous month link
		nextText: 'Next', // Display text for next month link
		currentText: 'Today', // Display text for current month link
		monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'], // Names of months for drop-down and formatting
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
		weekHeader: 'Wk', // Column header for week of the year
		dateFormat: 'mm/dd/yy', // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: '' // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: 'focus', // 'focus' for popup on focus,
			// 'button' for trigger button, or 'both' for either
		showAnim: 'fadeIn', // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: '', // Display text following the input box, e.g. showing the format
		buttonText: '...', // Text for trigger button
		buttonImage: '', // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: 'c-10:c+10', // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: '+10', // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with '+' for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: 'fast', // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: '', // Selector for an alternate field to store selected dates into
		altFormat: '', // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false // True to size the input for the date format, false to leave as is
	};
	$.extend(this._defaults, this.regional['']);
	this.dpDiv = $('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>');
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: 'hasDatepicker',

	/* Debug logging (if enabled). */
	log: function () {
		if (this.debug)
			console.log.apply('', arguments);
	},

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span
	   @param  settings  object - the new settings to use for this date picker instance (anonymous) */
	_attachDatepicker: function(target, settings) {
		// check for settings on the control itself - in namespace 'date:'
		var inlineSettings = null;
		for (var attrName in this._defaults) {
			var attrValue = target.getAttribute('date:' + attrName);
			if (attrValue) {
				inlineSettings = inlineSettings || {};
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		var nodeName = target.nodeName.toLowerCase();
		var inline = (nodeName == 'div' || nodeName == 'span');
		if (!target.id) {
			this.uuid += 1;
			target.id = 'dp' + this.uuid;
		}
		var inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
		if (nodeName == 'input') {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			$('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName))
			return;
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp).
			bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key);
			});
		this._autoSize(inst);
		$.data(target, PROP_NAME, inst);
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var appendText = this._get(inst, 'appendText');
		var isRTL = this._get(inst, 'isRTL');
		if (inst.append)
			inst.append.remove();
		if (appendText) {
			inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
			input[isRTL ? 'before' : 'after'](inst.append);
		}
		input.unbind('focus', this._showDatepicker);
		if (inst.trigger)
			inst.trigger.remove();
		var showOn = this._get(inst, 'showOn');
		if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
			var buttonText = this._get(inst, 'buttonText');
			var buttonImage = this._get(inst, 'buttonImage');
			inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
				$('<img/>').addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$('<button type="button"></button>').addClass(this._triggerClass).
					html(buttonImage == '' ? buttonText : $('<img/>').attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? 'before' : 'after'](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
					$.datepicker._hideDatepicker();
				else
					$.datepicker._showDatepicker(input[0]);
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, 'autoSize') && !inst.inline) {
			var date = new Date(2009, 12 - 1, 20); // Ensure double digits
			var dateFormat = this._get(inst, 'dateFormat');
			if (dateFormat.match(/[DM]/)) {
				var findMax = function(names) {
					var max = 0;
					var maxI = 0;
					for (var i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					'monthNames' : 'monthNamesShort'))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
			}
			inst.input.attr('size', this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName))
			return;
		divSpan.addClass(this.markerClassName).append(inst.dpDiv).
			bind("setData.datepicker", function(event, key, value){
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key){
				return this._get(inst, key);
			});
		$.data(target, PROP_NAME, inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		inst.dpDiv.show();
	},

	/* Pop-up the date picker in a "dialog" box.
	   @param  input     element - ignored
	   @param  date      string or Date - the initial date to display
	   @param  onSelect  function - the function to call when a date is selected
	   @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	   @param  pos       int[2] - coordinates for the dialog's position within the screen or
	                     event - with x/y coordinates or
	                     leave empty for default (screen centre)
	   @return the manager object */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var inst = this._dialogInst; // internal instance
		if (!inst) {
			this.uuid += 1;
			var id = 'dp' + this.uuid;
			this._dialogInput = $('<input type="text" id="' + id +
				'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
			this._dialogInput.keydown(this._doKeyDown);
			$('body').append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], PROP_NAME, inst);
		}
		extendRemove(inst.settings, settings || {});
		date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			var browserWidth = document.documentElement.clientWidth;
			var browserHeight = document.documentElement.clientHeight;
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI)
			$.blockUI(this.dpDiv);
		$.data(this._dialogInput[0], PROP_NAME, inst);
		return this;
	},

	/* Detach a datepicker from its control.
	   @param  target    element - the target input field or division or span */
	_destroyDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		$.removeData(target, PROP_NAME);
		if (nodeName == 'input') {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind('focus', this._showDatepicker).
				unbind('keydown', this._doKeyDown).
				unbind('keypress', this._doKeyPress).
				unbind('keyup', this._doKeyUp);
		} else if (nodeName == 'div' || nodeName == 'span')
			$target.removeClass(this.markerClassName).empty();
	},

	/* Enable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_enableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = false;
			inst.trigger.filter('button').
				each(function() { this.disabled = false; }).end().
				filter('img').css({opacity: '1.0', cursor: ''});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().removeClass('ui-state-disabled');
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_disableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = true;
			inst.trigger.filter('button').
				each(function() { this.disabled = true; }).end().
				filter('img').css({opacity: '0.5', cursor: 'default'});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().addClass('ui-state-disabled');
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	   @param  target    element - the target input field or division or span
	   @return boolean - true if disabled, false if enabled */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] == target)
				return true;
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	   @param  target  element - the target input field or division or span
	   @return  object - the associated instance data
	   @throws  error if a jQuery problem getting data */
	_getInst: function(target) {
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw 'Missing instance data for this datepicker';
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span
	   @param  name    object - the new settings to update or
	                   string - the name of the setting to change or retrieve,
	                   when retrieving also 'all' for all instance settings or
	                   'defaults' for all global defaults
	   @param  value   any - the new value for the setting
	                   (omit if above is an object or to retrieve a value) */
	_optionDatepicker: function(target, name, value) {
		var inst = this._getInst(target);
		if (arguments.length == 2 && typeof name == 'string') {
			return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}
		var settings = name || {};
		if (typeof name == 'string') {
			settings = {};
			settings[name] = value;
		}
		if (inst) {
			if (this._curInst == inst) {
				this._hideDatepicker();
			}
			var date = this._getDateDatepicker(target, true);
			var minDate = this._getMinMaxDate(inst, 'min');
			var maxDate = this._getMinMaxDate(inst, 'max');
			extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
				inst.settings.minDate = this._formatDate(inst, minDate);
			if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDateDatepicker(target, date);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	   @param  target   element - the target input field or division or span
	   @param  date     Date - the new date */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	   @param  target     element - the target input field or division or span
	   @param  noDefault  boolean - true if no default date is to be used
	   @return Date - the current date */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline)
			this._setDateFromField(inst, noDefault);
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var inst = $.datepicker._getInst(event.target);
		var handled = true;
		var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing)
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' +
									$.datepicker._currentClass + ')', inst.dpDiv);
						if (sel[0])
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						else
							$.datepicker._hideDatepicker();
						return false; // don't submit the form
						break; // select the value on enter
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, 'stepBigMonths') :
							-$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, 'stepBigMonths') :
							+$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									-$.datepicker._get(inst, 'stepBigMonths') :
									-$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									+$.datepicker._get(inst, 'stepBigMonths') :
									+$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		else {
			handled = false;
		}
		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if ($.datepicker._get(inst, 'constrainInput')) {
			var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
			var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if (inst.input.val() != inst.lastVal) {
			try {
				var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));
				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (event) {
				$.datepicker.log(event);
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	   @param  input  element - the input field attached to the date picker or
	                  event - if triggered by focus */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
			input = $('input', input.parentNode)[0];
		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
			return;
		var inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst != inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
		}
		var beforeShow = $.datepicker._get(inst, 'beforeShow');
		extendRemove(inst.settings, (beforeShow ? beforeShow.apply(input, [input, inst]) : {}));
		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);
		if ($.datepicker._inDialog) // hide cursor
			input.value = '';
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}
		var isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css('position') == 'fixed';
			return !isFixed;
		});
		if (isFixed && $.browser.opera) { // correction for Opera when fixed and scrolled
			$.datepicker._pos[0] -= document.documentElement.scrollLeft;
			$.datepicker._pos[1] -= document.documentElement.scrollTop;
		}
		var offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
			left: offset.left + 'px', top: offset.top + 'px'});
		if (!inst.inline) {
			var showAnim = $.datepicker._get(inst, 'showAnim');
			var duration = $.datepicker._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._datepickerShowing = true;
				var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
				if( !! cover.length ){
					var borders = $.datepicker._getBorders(inst.dpDiv);
					cover.css({left: -borders[0], top: -borders[1],
						width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
				}
			};
			inst.dpDiv.zIndex($(input).zIndex()+1);
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
			if (!showAnim || !duration)
				postProcess();
			if (inst.input.is(':visible') && !inst.input.is(':disabled'))
				inst.input.focus();
			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		var self = this;
		var borders = $.datepicker._getBorders(inst.dpDiv);
		inst.dpDiv.empty().append(this._generateHTML(inst));
		var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
		if( !!cover.length ){ //avoid call to outerXXXX() when not in IE6
			cover.css({left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()})
		}
		inst.dpDiv.find('button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a')
				.bind('mouseout', function(){
					$(this).removeClass('ui-state-hover');
					if(this.className.indexOf('ui-datepicker-prev') != -1) $(this).removeClass('ui-datepicker-prev-hover');
					if(this.className.indexOf('ui-datepicker-next') != -1) $(this).removeClass('ui-datepicker-next-hover');
				})
				.bind('mouseover', function(){
					if (!self._isDisabledDatepicker( inst.inline ? inst.dpDiv.parent()[0] : inst.input[0])) {
						$(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
						$(this).addClass('ui-state-hover');
						if(this.className.indexOf('ui-datepicker-prev') != -1) $(this).addClass('ui-datepicker-prev-hover');
						if(this.className.indexOf('ui-datepicker-next') != -1) $(this).addClass('ui-datepicker-next-hover');
					}
				})
			.end()
			.find('.' + this._dayOverClass + ' a')
				.trigger('mouseover')
			.end();
		var numMonths = this._getNumberOfMonths(inst);
		var cols = numMonths[1];
		var width = 17;
		if (cols > 1)
			inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
		else
			inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
		inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
			'Class']('ui-datepicker-multi');
		inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
			'Class']('ui-datepicker-rtl');
		if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
				// #6694 - don't focus the input if it's already focused
				// this breaks the change event in IE
				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
			inst.input.focus();
		// deffered render of the years select (to avoid flashes on Firefox)
		if( inst.yearshtml ){
			var origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml ){
					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	/* Retrieve the size of left and top borders for an element.
	   @param  elem  (jQuery object) the element of interest
	   @return  (number[2]) the left and top borders */
	_getBorders: function(elem) {
		var convert = function(value) {
			return {thin: 1, medium: 2, thick: 3}[value] || value;
		};
		return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth();
		var dpHeight = inst.dpDiv.outerHeight();
		var inputWidth = inst.input ? inst.input.outerWidth() : 0;
		var inputHeight = inst.input ? inst.input.outerHeight() : 0;
		var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
		var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();

		offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var inst = this._getInst(obj);
		var isRTL = this._get(inst, 'isRTL');
        while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
            obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
        }
        var position = $(obj).offset();
	    return [position.left, position.top];
	},

	/* Hide the date picker from view.
	   @param  input  element - the input field attached to the date picker */
	_hideDatepicker: function(input) {
		var inst = this._curInst;
		if (!inst || (input && inst != $.data(input, PROP_NAME)))
			return;
		if (this._datepickerShowing) {
			var showAnim = this._get(inst, 'showAnim');
			var duration = this._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._tidyDialog(inst);
				this._curInst = null;
			};
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
			if (!showAnim)
				postProcess();
			var onClose = this._get(inst, 'onClose');
			if (onClose)
				onClose.apply((inst.input ? inst.input[0] : null),
					[(inst.input ? inst.input.val() : ''), inst]);  // trigger custom callback
			this._datepickerShowing = false;
			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
				if ($.blockUI) {
					$.unblockUI();
					$('body').append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst)
			return;
		var $target = $(event.target);
		if ($target[0].id != $.datepicker._mainDivId &&
				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.hasClass($.datepicker._triggerClass) &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))
			$.datepicker._hideDatepicker();
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		}
		else {
			var date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		inst._selectingMonthYear = false;
		inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
			parseInt(select.options[select.selectedIndex].value,10);
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Restore input focus after not changing month/year. */
	_clickMonthYear: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (inst.input && inst._selectingMonthYear) {
			setTimeout(function() {
				inst.input.focus();
			}, 0);
		}
		inst._selectingMonthYear = !inst._selectingMonthYear;
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var target = $(id);
		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}
		var inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $('a', td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		this._selectDate(target, '');
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input)
			inst.input.val(dateStr);
		this._updateAlternate(inst);
		var onSelect = this._get(inst, 'onSelect');
		if (onSelect)
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		else if (inst.input)
			inst.input.trigger('change'); // fire the change event
		if (inst.inline)
			this._updateDatepicker(inst);
		else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) != 'object')
				inst.input.focus(); // restore focus
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altField = this._get(inst, 'altField');
		if (altField) { // update alternate field too
			var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
			var date = this._getDate(inst);
			var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	   @param  date  Date - the date to customise
	   @return [boolean, string] - is this date selectable?, what is its CSS class? */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ''];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	   @param  date  Date - the date to get the week for
	   @return  number - the number of the week within the year that contains this date */
	iso8601Week: function(date) {
		var checkDate = new Date(date.getTime());
		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
		var time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	   See formatDate below for the possible formats.

	   @param  format    string - the expected format of the date
	   @param  value     string - the date in the above format
	   @param  settings  Object - attributes include:
	                     shortYearCutoff  number - the cutoff year for determining the century (optional)
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  Date - the extracted date value or null if value is blank */
	parseDate: function (format, value, settings) {
		if (format == null || value == null)
			throw 'Invalid arguments';
		value = (typeof value == 'object' ? value.toString() : value + '');
		if (value == '')
			return null;
		var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		var year = -1;
		var month = -1;
		var day = -1;
		var doy = -1;
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Extract a number from the string value
		var getNumber = function(match) {
			var isDoubled = lookAhead(match);
			var size = (match == '@' ? 14 : (match == '!' ? 20 :
				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
			var digits = new RegExp('^\\d{1,' + size + '}');
			var num = value.substring(iValue).match(digits);
			if (!num)
				throw 'Missing number at position ' + iValue;
			iValue += num[0].length;
			return parseInt(num[0], 10);
		};
		// Extract a name from the string value and convert to an index
		var getName = function(match, shortNames, longNames) {
			var names = (lookAhead(match) ? longNames : shortNames);
			for (var i = 0; i < names.length; i++) {
				if (value.substr(iValue, names[i].length).toLowerCase() == names[i].toLowerCase()) {
					iValue += names[i].length;
					return i + 1;
				}
			}
			throw 'Unknown name at position ' + iValue;
		};
		// Confirm that a literal character matches the string value
		var checkLiteral = function() {
			if (value.charAt(iValue) != format.charAt(iFormat))
				throw 'Unexpected literal at position ' + iValue;
			iValue++;
		};
		var iValue = 0;
		for (var iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					checkLiteral();
			else
				switch (format.charAt(iFormat)) {
					case 'd':
						day = getNumber('d');
						break;
					case 'D':
						getName('D', dayNamesShort, dayNames);
						break;
					case 'o':
						doy = getNumber('o');
						break;
					case 'm':
						month = getNumber('m');
						break;
					case 'M':
						month = getName('M', monthNamesShort, monthNames);
						break;
					case 'y':
						year = getNumber('y');
						break;
					case '@':
						var date = new Date(getNumber('@'));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '!':
						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'"))
							checkLiteral();
						else
							literal = true;
						break;
					default:
						checkLiteral();
				}
		}
		if (year == -1)
			year = new Date().getFullYear();
		else if (year < 100)
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				var dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim)
					break;
				month++;
				day -= dim;
			} while (true);
		}
		var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
			throw 'Invalid date'; // E.g. 31/02/*
		return date;
	},

	/* Standard date formats. */
	ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
	COOKIE: 'D, dd M yy',
	ISO_8601: 'yy-mm-dd',
	RFC_822: 'D, d M y',
	RFC_850: 'DD, dd-M-y',
	RFC_1036: 'D, d M y',
	RFC_1123: 'D, d M yy',
	RFC_2822: 'D, d M yy',
	RSS: 'D, d M y', // RFC 822
	TICKS: '!',
	TIMESTAMP: '@',
	W3C: 'yy-mm-dd', // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	   The format can be combinations of the following:
	   d  - day of month (no leading zero)
	   dd - day of month (two digit)
	   o  - day of year (no leading zeros)
	   oo - day of year (three digit)
	   D  - day name short
	   DD - day name long
	   m  - month of year (no leading zero)
	   mm - month of year (two digit)
	   M  - month name short
	   MM - month name long
	   y  - year (two digit)
	   yy - year (four digit)
	   @ - Unix timestamp (ms since 01/01/1970)
	   ! - Windows ticks (100ns since 01/01/0001)
	   '...' - literal text
	   '' - single quote

	   @param  format    string - the desired format of the date
	   @param  date      Date - the date value to format
	   @param  settings  Object - attributes include:
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  string - the date in the above format */
	formatDate: function (format, date, settings) {
		if (!date)
			return '';
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Format a number, with leading zero if necessary
		var formatNumber = function(match, value, len) {
			var num = '' + value;
			if (lookAhead(match))
				while (num.length < len)
					num = '0' + num;
			return num;
		};
		// Format a name, short or long as requested
		var formatName = function(match, value, shortNames, longNames) {
			return (lookAhead(match) ? longNames[value] : shortNames[value]);
		};
		var output = '';
		var literal = false;
		if (date)
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal)
					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
						literal = false;
					else
						output += format.charAt(iFormat);
				else
					switch (format.charAt(iFormat)) {
						case 'd':
							output += formatNumber('d', date.getDate(), 2);
							break;
						case 'D':
							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
							break;
						case 'o':
							output += formatNumber('o',
								(date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000, 3);
							break;
						case 'm':
							output += formatNumber('m', date.getMonth() + 1, 2);
							break;
						case 'M':
							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
							break;
						case 'y':
							output += (lookAhead('y') ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
							break;
						case '@':
							output += date.getTime();
							break;
						case '!':
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'"))
								output += "'";
							else
								literal = true;
							break;
						default:
							output += format.charAt(iFormat);
					}
			}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var chars = '';
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		for (var iFormat = 0; iFormat < format.length; iFormat++)
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					chars += format.charAt(iFormat);
			else
				switch (format.charAt(iFormat)) {
					case 'd': case 'm': case 'y': case '@':
						chars += '0123456789';
						break;
					case 'D': case 'M':
						return null; // Accept anything
					case "'":
						if (lookAhead("'"))
							chars += "'";
						else
							literal = true;
						break;
					default:
						chars += format.charAt(iFormat);
				}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() == inst.lastVal) {
			return;
		}
		var dateFormat = this._get(inst, 'dateFormat');
		var dates = inst.lastVal = inst.input ? inst.input.val() : null;
		var date, defaultDate;
		date = defaultDate = this._getDefaultDate(inst);
		var settings = this._getFormatConfig(inst);
		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			this.log(event);
			dates = (noDefault ? '' : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
			var date = new Date();
			date.setDate(date.getDate() + offset);
			return date;
		};
		var offsetString = function(offset) {
			try {
				return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					offset, $.datepicker._getFormatConfig(inst));
			}
			catch (e) {
				// Ignore
			}
			var date = (offset.toLowerCase().match(/^c/) ?
				$.datepicker._getDate(inst) : null) || new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			var day = date.getDate();
			var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
			var matches = pattern.exec(offset);
			while (matches) {
				switch (matches[2] || 'd') {
					case 'd' : case 'D' :
						day += parseInt(matches[1],10); break;
					case 'w' : case 'W' :
						day += parseInt(matches[1],10) * 7; break;
					case 'm' : case 'M' :
						month += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
					case 'y': case 'Y' :
						year += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
				}
				matches = pattern.exec(offset);
			}
			return new Date(year, month, day);
		};
		var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
			(typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
		newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	   Hours may be non-zero on daylight saving cut-over:
	   > 12 when midnight changeover, but then cannot generate
	   midnight datetime, so jump to 1AM, otherwise reset.
	   @param  date  (Date) the date to check
	   @return  (Date) the corrected date */
	_daylightSavingAdjust: function(date) {
		if (!date) return null;
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date;
		var origMonth = inst.selectedMonth;
		var origYear = inst.selectedYear;
		var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
			this._notifyChange(inst);
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? '' : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var today = new Date();
		today = this._daylightSavingAdjust(
			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
		var isRTL = this._get(inst, 'isRTL');
		var showButtonPanel = this._get(inst, 'showButtonPanel');
		var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
		var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
		var numMonths = this._getNumberOfMonths(inst);
		var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
		var stepMonths = this._get(inst, 'stepMonths');
		var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
		var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
			new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var drawMonth = inst.drawMonth - showCurrentAtPos;
		var drawYear = inst.drawYear;
		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;
		var prevText = this._get(inst, 'prevText');
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));
		var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', -' + stepMonths + ', \'M\');"' +
			' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+ prevText +'"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
		var nextText = this._get(inst, 'nextText');
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));
		var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', +' + stepMonths + ', \'M\');"' +
			' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+ nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
		var currentText = this._get(inst, 'currentText');
		var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
		var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._hideDatepicker();">' + this._get(inst, 'closeText') + '</button>' : '');
		var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
			(this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._gotoToday(\'#' + inst.id + '\');"' +
			'>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
		var firstDay = parseInt(this._get(inst, 'firstDay'),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);
		var showWeek = this._get(inst, 'showWeek');
		var dayNames = this._get(inst, 'dayNames');
		var dayNamesShort = this._get(inst, 'dayNamesShort');
		var dayNamesMin = this._get(inst, 'dayNamesMin');
		var monthNames = this._get(inst, 'monthNames');
		var monthNamesShort = this._get(inst, 'monthNamesShort');
		var beforeShowDay = this._get(inst, 'beforeShowDay');
		var showOtherMonths = this._get(inst, 'showOtherMonths');
		var selectOtherMonths = this._get(inst, 'selectOtherMonths');
		var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
		var defaultDate = this._getDefaultDate(inst);
		var html = '';
		for (var row = 0; row < numMonths[0]; row++) {
			var group = '';
			for (var col = 0; col < numMonths[1]; col++) {
				var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				var cornerClass = ' ui-corner-all';
				var calender = '';
				if (isMultiMonth) {
					calender += '<div class="ui-datepicker-group';
					if (numMonths[1] > 1)
						switch (col) {
							case 0: calender += ' ui-datepicker-group-first';
								cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
							case numMonths[1]-1: calender += ' ui-datepicker-group-last';
								cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
							default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
						}
					calender += '">';
				}
				calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
					(/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
					(/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					'</div><table class="ui-datepicker-calendar"><thead>' +
					'<tr>';
				var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
				for (var dow = 0; dow < 7; dow++) { // days of the week
					var day = (dow + firstDay) % 7;
					thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
				}
				calender += thead + '</tr></thead><tbody>';
				var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				var numRows = (isMultiMonth ? 6 : Math.ceil((leadDays + daysInMonth) / 7)); // calculate the number of rows to generate
				var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += '<tr>';
					var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
						this._get(inst, 'calculateWeek')(printDate) + '</td>');
					for (var dow = 0; dow < 7; dow++) { // create date picker days
						var daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
						var otherMonth = (printDate.getMonth() != drawMonth);
						var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += '<td class="' +
							((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
							(otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
							((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							' ' + this._dayOverClass : '') + // highlight selected day
							(unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled': '') +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
							(printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
							(printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
							(unselectable ? '' : ' onclick="DP_jQuery_' + dpuuid + '.datepicker._selectDay(\'#' +
							inst.id + '\',' + printDate.getMonth() + ',' + printDate.getFullYear() + ', this);return false;"') + '>' + // actions
							(otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
							(unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
							(printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
							(printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
							(otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
							'" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + '</tr>';
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += '</tbody></table>' + (isMultiMonth ? '</div>' +
							((numMonths[0] > 0 && col == numMonths[1]-1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
				group += calender;
			}
			html += group;
		}
		html += buttonPanel + ($.browser.msie && parseInt($.browser.version,10) < 7 && !inst.inline ?
			'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {
		var changeMonth = this._get(inst, 'changeMonth');
		var changeYear = this._get(inst, 'changeYear');
		var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
		var html = '<div class="ui-datepicker-title">';
		var monthHtml = '';
		// month selection
		if (secondary || !changeMonth)
			monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
		else {
			var inMinYear = (minDate && minDate.getFullYear() == drawYear);
			var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
			monthHtml += '<select class="ui-datepicker-month" ' +
				'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'M\');" ' +
				'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' +
			 	'>';
			for (var month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) &&
						(!inMaxYear || month <= maxDate.getMonth()))
					monthHtml += '<option value="' + month + '"' +
						(month == drawMonth ? ' selected="selected"' : '') +
						'>' + monthNamesShort[month] + '</option>';
			}
			monthHtml += '</select>';
		}
		if (!showMonthAfterYear)
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
		// year selection
		inst.yearshtml = '';
		if (secondary || !changeYear)
			html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
		else {
			// determine range of years to display
			var years = this._get(inst, 'yearRange').split(':');
			var thisYear = new Date().getFullYear();
			var determineYear = function(value) {
				var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
					(value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
					parseInt(value, 10)));
				return (isNaN(year) ? thisYear : year);
			};
			var year = determineYear(years[0]);
			var endYear = Math.max(year, determineYear(years[1] || ''));
			year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
			endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
			inst.yearshtml += '<select class="ui-datepicker-year" ' +
				'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'Y\');" ' +
				'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' +
				'>';
			for (; year <= endYear; year++) {
				inst.yearshtml += '<option value="' + year + '"' +
					(year == drawYear ? ' selected="selected"' : '') +
					'>' + year + '</option>';
			}
			inst.yearshtml += '</select>';
			//when showing there is no need for later update
			if( ! $.browser.mozilla ){
				html += inst.yearshtml;
				inst.yearshtml = null;
			} else {
				// will be replaced later with inst.yearshtml
				html += '<select class="ui-datepicker-year"><option value="' + drawYear + '" selected="selected">' + drawYear + '</option></select>';
			}
		}
		html += this._get(inst, 'yearSuffix');
		if (showMonthAfterYear)
			html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
		html += '</div>'; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period == 'Y' ? offset : 0);
		var month = inst.drawMonth + (period == 'M' ? offset : 0);
		var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
			(period == 'D' ? offset : 0);
		var date = this._restrictMinMax(inst,
			this._daylightSavingAdjust(new Date(year, month, day)));
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period == 'M' || period == 'Y')
			this._notifyChange(inst);
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var newDate = (minDate && date < minDate ? minDate : date);
		newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
		return newDate;
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, 'onChangeMonthYear');
		if (onChange)
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, 'numberOfMonths');
		return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst);
		var date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
		if (offset < 0)
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, 'shortYearCutoff');
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
			monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day == 'object' ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
	}
});

/* jQuery extend now ignores nulls! */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props)
		if (props[name] == null || props[name] == undefined)
			target[name] = props[name];
	return target;
};

/* Determine whether an object is an array. */
function isArray(a) {
	return (a && (($.browser.safari && typeof a == 'object' && a.length) ||
		(a.constructor && a.constructor.toString().match(/\Array\(\)/))));
};

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
                    Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){

	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}

	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick).
			find('body').append($.datepicker.dpDiv);
		$.datepicker.initialized = true;
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	return this.each(function() {
		typeof options == 'string' ?
			$.datepicker['_' + options + 'Datepicker'].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.8.11";

// Workaround for #4055
// Add another global to avoid noConflict issues with inline event handlers
window['DP_jQuery_' + dpuuid] = $;

})(jQuery);

jQuery(function($){
     var shortestDays = [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
    ], shortDays = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
    ], dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
    ], monthNames   = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"

    ], monthNamesShort = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
    ];//no defaults as will let our internationalisation system handle it


    //we set the default so that we dont have to have lots of .js files handling the language
	$.datepicker.regional[''] = {
		closeText:   "Done",
		prevText:   "Prev",
		nextText:   "Next",
		currentText:   "Today",
		monthNames: monthNames,
		monthNamesShort: monthNamesShort,
		dayNames: dayNames,
		dayNamesShort: shortDays,
		dayNamesMin: shortestDays,
		weekHeader:  "wk",
		dateFormat: $.datepicker.ISO_8601,
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['']);
});
Raphael.spinner=function(k,f,h){var o=h||"#fff",n=f*13/60,s=f*35/60,p=f,d=p+n,c=p+n,m=Raphael(k,p*2+n*2,p*2+n*2),l=[],e=[],u=2*Math.PI/12,j={stroke:o,"stroke-width":n,"stroke-linecap":"round"};for(var q=0;q<12;q++){var g=u*q-Math.PI/2,b=Math.cos(g),a=Math.sin(g);e[q]=q/12;l[q]=m.path([["M",d+s*b,c+s*a],["L",d+p*b,c+p*a]]).attr(j)}var t;(function v(){e.unshift(e.pop());for(var r=0;r<12;r++){l[r].attr("opacity",e[r])}m.safari();t=setTimeout(v,80)})();return function(){clearTimeout(t);m.remove()}};
AJS.REST = (function($) {
    var baseUrl = "/rest/prototype/1/";

    AJS.safeHTML = function (html) {
        return html.replace(/[<>&"']/g, function (symbol) {
            return "&#" + symbol.charCodeAt() + ";";
        });
    };

    /**
     * Converts a single object in REST format into an object in the format expected by AJS.dropDown.
     */
    var getDropdownObjectForRestResult = function (result) {
        if (!result) {
            AJS.log("REST result is null");
            return null;
        }
        if (!result.link || !$.isArray(result.link)) {
            AJS.log("No link for result with title: " + result.title);
            return null;
        }
        if (!result.title) {
            AJS.log("No title for result with id: " + result.id);
            return null;
        }
        var obj = {
            href : encodeURI(AJS.REST.findLink(result.link)),
            name : AJS.safeHTML(result.title),
            spaceName: AJS.safeHTML(AJS.REST.findSpaceName(result)),
            restObj : result
        };
        if (result.thumbnailLink) {
            var versionQuery = result.version ? "?version="+result.version + "&modificationDate=" : "";
            obj.icon = result.thumbnailLink.href + versionQuery;
        } else {
            obj.className = result.iconClass || "content-type-" + result.type + (result.type == "space" ? "desc" : "");
        }
        return obj;
    };

    return {

        getBaseUrl: function() {
            return baseUrl;
        },

        /**
         * Takes a relative path,
         *
         *   e.g. 'session/history.json?max-results=20'
         *
         * and prefixes it with the context and REST paths to form a complete '/'-based URL,
         *
         * e.g.  '/confluence/rest/prototype/1/session/history.json?max-results=20'
         *
         * @param path end of URL to be prefixed
         */
        makeUrl: function (path) {
            return Confluence.getContextPath() + baseUrl + path;
        },

        /**
         * Iterates through the links array to find the first matching link of the given type and rel.
         * @param links typically the link field on a REST JSON object
         * @param type type of link. Defaults to "text/html" if not defined.
         * @param rel relationship of the link. Defaults to "alternate".
         */
        findLink: function(links, type, rel) {
            if (!type) type = "text/html";
            if (!rel) rel = "alternate";
            if (AJS.$.isArray(links)) {
                for (var i=0,ii=links.length; i<ii; i++) {
                    var link = links[i];
                    if (link.type == type && link.rel == rel) {
                        return link.href;
                    }
                }
            }
            return "#";
        },

        findSpaceName: function(restObj){
            if (restObj.space){
                return restObj.space.name;
            }
            return "";
        },

        /**
         * Converts a matrix in REST format into a matrix in the format expected by AJS.dropDown.
         *
         * @param restMatrix matrix of objects in Confluence REST format
         * @return matrix of objects in Confluence drop-down format
         */
        convertFromRest: function (restMatrix) {
            var matrix = [], catArray, obj;
            for (var i = 0, len = restMatrix.length; i < len; i++) {
                catArray = [];
                for (var j = 0, len2 = restMatrix[i].length; j < len2; j++) {
                    obj = getDropdownObjectForRestResult(restMatrix[i][j]);
                    obj && catArray.push(obj);
                }
                catArray.length && matrix.push(catArray);
            }
            return matrix;
        },

        /**
         * Given an ContentEntityObject's REST data construct the alias, destination, href and wiki-markup.
         *
         * @param data - the content data in REST format
         */
        wikiLink : function (data) {
            var alias = data.title,
                destination = data.wikiLink && data.wikiLink.slice(1, -1); // remove the [ and ]

            // CONF-18940 strip off the space key and page title if linking to an attachment on the current page
            if (destination && data.type == "attachment" && data.space && data.space.key == AJS.Meta.get('space-key') &&
                data.ownerId == AJS.params.attachmentSourceContentId) {
                    destination = destination.substring(destination.indexOf("^"));
            }

            var wikiMarkup = destination && (alias != destination ? (alias + "|") : "") + destination;
            AJS.log("AJS.Editor.Autocompleter.Manager.makeLinkDetails =>" + wikiMarkup);

            return {
                alias : alias,
                destination : destination,
                href : this.findLink(data.link),
                wikiMarkup : wikiMarkup
            };
        },

        /**
         * Converts an object in REST format into a matrix containing the REST data.
         *
         * @async - called from an AJAX callback method
         * @param restObj object in Confluence REST format
         */
        makeRestMatrixFromData: function (restObj, suggestionField) {
            var restMatrix = [];
            var resultArr = eval("restObj." + suggestionField);
            if (resultArr && resultArr.length)
                    restMatrix.push(resultArr);
            return restMatrix;
        },

        /**
         * Converts an object in REST format into a matrix containing the search REST data.
         *
         * @async - called from an AJAX callback method
         * @param restObj object in Confluence REST format
         * @param suggestionField - the name of the field in the resObj that stores the suggestion. If null, "group" is used.
         * The "group" is the field used for in the /search/name REST service. 
         */
        makeRestMatrixFromSearchData: function(restObj, suggestionField) {
            var restMatrix = [];
            suggestionField = suggestionField || "group";
            var resultArr = eval("restObj." + suggestionField);
            if (resultArr) {

                var set = {
                    content: [],
                    attachment: [],
                    userinfo: [],
                    spacedesc: [],
                    page: [],
                    blogpost: [],
                    comment: [],
                    personalspacedesc: [],
                    mail: []
                };
                for (var i = 0, ii = resultArr.length; i < ii; i++) {
                    var group = resultArr[i];
                    set[group.name] && set[group.name].push(group.result);
                }

                // This line determines the order that the search sections appear. Don't change this unless you have to.
                restMatrix = restMatrix.concat(set.content, set.attachment, set.userinfo, set.spacedesc, set.page, set.blogpost, set.comment, set.personalspacedesc, set.mail);
            }
            else {
                log("makeRestMatrixFromData", "WARNING: Unknown rest object", restObj);
            }

            return restMatrix;
        }
    };
})(AJS.$);

/*
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var goog;
if(typeof goog=="undefined"){goog={}
}goog.inherits=function(B,A){function C(){}C.prototype=A.prototype;
B.superClass_=A.prototype;
B.prototype=new C();
B.prototype.constructor=B
};
if(!goog.userAgent){goog.userAgent=(function(){var B="";
if("undefined"!==typeof navigator&&navigator&&"string"==typeof navigator.userAgent){B=navigator.userAgent
}var A=B.indexOf("Opera")==0;
return{HAS_JSCRIPT:typeof "ScriptEngine" in this,IS_OPERA:A,IS_IE:!A&&B.indexOf("MSIE")!=-1,IS_WEBKIT:!A&&B.indexOf("WebKit")!=-1}
})()
}if(!goog.asserts){goog.asserts={fail:function(){}}
}if(!goog.dom){goog.dom={DomHelper:function(A){A=A||document;
return{createElement:function(B){return A.createElement(B)
},createDocumentFragment:function(){return A.createDocumentFragment()
}}
}}
}if(!goog.format){goog.format={insertWordBreaks:function(I,A){I=String(I);
var F=[];
var H=0;
var B=false;
var J=false;
var G=0;
var D=0;
for(var E=0,C=I.length;
E<C;
++E){var K=I.charCodeAt(E);
if(G>=A&&K!=32){F[H++]=I.substring(D,E);
D=E;
F[H++]=goog.format.WORD_BREAK;
G=0
}if(B){if(K==62){B=false
}}else{if(J){switch(K){case 59:J=false;
++G;
break;
case 60:J=false;
B=true;
break;
case 32:J=false;
G=0;
break
}}else{switch(K){case 60:B=true;
break;
case 38:J=true;
break;
case 32:G=0;
break;
default:++G;
break
}}}}F[H++]=I.substring(D);
return F.join("")
},WORD_BREAK:goog.userAgent.IS_WEBKIT?"<wbr></wbr>":goog.userAgent.IS_OPERA?"&shy;":"<wbr>"}
}if(!goog.i18n){goog.i18n={BidiFormatter:function(A){this.dir_=A
},bidi:{detectRtlDirectionality:function(B,A){B=soyshim.$$bidiStripHtmlIfNecessary_(B,A);
return soyshim.$$bidiRtlWordRatio_(B)>soyshim.$$bidiRtlDetectionThreshold_
}}}
}goog.i18n.BidiFormatter.prototype.dirAttr=function(C,A){var B=soy.$$bidiTextDir(C,A);
return B&&B!=this.dir_?B<0?"dir=rtl":"dir=ltr":""
};
goog.i18n.BidiFormatter.prototype.endEdge=function(){return this.dir_<0?"left":"right"
};
goog.i18n.BidiFormatter.prototype.mark=function(){return((this.dir_>0)?"\u200E":(this.dir_<0)?"\u200F":"")
};
goog.i18n.BidiFormatter.prototype.markAfter=function(C,A){var B=soy.$$bidiTextDir(C,A);
return soyshim.$$bidiMarkAfterKnownDir_(this.dir_,B,C,A)
};
goog.i18n.BidiFormatter.prototype.spanWrap=function(C){C=String(C);
var B=soy.$$bidiTextDir(C,true);
var A=soyshim.$$bidiMarkAfterKnownDir_(this.dir_,B,C,true);
if(B>0&&this.dir_<=0){C="<span dir=ltr>"+C+"</span>"
}else{if(B<0&&this.dir_>=0){C="<span dir=rtl>"+C+"</span>"
}}return C+A
};
goog.i18n.BidiFormatter.prototype.startEdge=function(){return this.dir_<0?"right":"left"
};
goog.i18n.BidiFormatter.prototype.unicodeWrap=function(C){C=String(C);
var B=soy.$$bidiTextDir(C,true);
var A=soyshim.$$bidiMarkAfterKnownDir_(this.dir_,B,C,true);
if(B>0&&this.dir_<=0){C="\u202A"+C+"\u202C"
}else{if(B<0&&this.dir_>=0){C="\u202B"+C+"\u202C"
}}return C+A
};
goog.string={StringBuffer:function(A,B){this.buffer_=goog.userAgent.HAS_JSCRIPT?[]:"";
if(A!=null){this.append.apply(this,arguments)
}},newlineToBr:function(A){A=String(A);
if(!goog.string.NEWLINE_TO_BR_RE_.test(A)){return A
}return A.replace(/(\r\n|\r|\n)/g,"<br>")
},urlEncode:encodeURIComponent,NEWLINE_TO_BR_RE:/[\r\n]/};
goog.string.StringBuffer.prototype.bufferLength_=0;
goog.string.StringBuffer.prototype.append=function(C,B,E){if(goog.userAgent.HAS_JSCRIPT){if(B==null){this.buffer_[this.bufferLength_++]=C
}else{var A=this.buffer_;
A.push.apply(A,arguments);
this.bufferLength_=this.buffer_.length
}}else{this.buffer_+=C;
if(B!=null){for(var D=1;
D<arguments.length;
D++){this.buffer_+=arguments[D]
}}}return this
};
goog.string.StringBuffer.prototype.clear=function(){if(goog.userAgent.HAS_JSCRIPT){this.buffer_.length=0;
this.bufferLength_=0
}else{this.buffer_=""
}};
goog.string.StringBuffer.prototype.toString=function(){if(goog.userAgent.HAS_JSCRIPT){var A=this.buffer_.join("");
this.clear();
if(A){this.append(A)
}return A
}else{return(this.buffer_)
}};
if(!goog.soy){goog.soy={renderAsElement:function(D,B,C,A){return(soyshim.$$renderWithWrapper_(D,B,A,true,C))
},renderAsFragment:function(D,B,C,A){return soyshim.$$renderWithWrapper_(D,B,A,false,C)
},renderElement:function(C,D,A,B){C.innerHTML=D(A,null,B)
}}
}var soy={esc:{}};
var soydata={};
var soyshim={};
soyshim.$$renderWithWrapper_=function(H,E,C,B,I){var G=C||document;
var A=G.createElement("div");
A.innerHTML=H(E||soyshim.$$DEFAULT_TEMPLATE_DATA_,undefined,I);
if(A.childNodes.length==1){var F=A.firstChild;
if(!B||F.nodeType==1){return(F)
}}if(B){return A
}var D=G.createDocumentFragment();
while(A.firstChild){D.appendChild(A.firstChild)
}return D
};
soyshim.$$bidiMarkAfterKnownDir_=function(C,B,D,A){return(C>0&&(B<0||soyshim.$$bidiIsRtlExitText_(D,A))?"\u200E":C<0&&(B>0||soyshim.$$bidiIsLtrExitText_(D,A))?"\u200F":"")
};
soyshim.$$bidiStripHtmlIfNecessary_=function(B,A){return A?B.replace(soyshim.$$BIDI_HTML_SKIP_RE_," "):B
};
soyshim.$$BIDI_HTML_SKIP_RE_=/<[^>]*>|&[^;]+;/g;
soyshim.$$bidiLtrChars_="A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";
soyshim.$$bidiNeutralChars_="\u0000-\u0020!-@[-`{-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u2BFF";
soyshim.$$bidiRtlChars_="\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
soyshim.$$bidiRtlDirCheckRe_=new RegExp("^[^"+soyshim.$$bidiLtrChars_+"]*["+soyshim.$$bidiRtlChars_+"]");
soyshim.$$bidiNeutralDirCheckRe_=new RegExp("^["+soyshim.$$bidiNeutralChars_+"]*$|^http://");
soyshim.$$bidiIsRtlText_=function(A){return soyshim.$$bidiRtlDirCheckRe_.test(A)
};
soyshim.$$bidiIsNeutralText_=function(A){return soyshim.$$bidiNeutralDirCheckRe_.test(A)
};
soyshim.$$bidiRtlDetectionThreshold_=0.4;
soyshim.$$bidiRtlWordRatio_=function(E){var B=0;
var A=0;
var D=E.split(" ");
for(var C=0;
C<D.length;
C++){if(soyshim.$$bidiIsRtlText_(D[C])){B++;
A++
}else{if(!soyshim.$$bidiIsNeutralText_(D[C])){A++
}}}return A==0?0:B/A
};
soyshim.$$bidiLtrExitDirCheckRe_=new RegExp("["+soyshim.$$bidiLtrChars_+"][^"+soyshim.$$bidiRtlChars_+"]*$");
soyshim.$$bidiRtlExitDirCheckRe_=new RegExp("["+soyshim.$$bidiRtlChars_+"][^"+soyshim.$$bidiLtrChars_+"]*$");
soyshim.$$bidiIsLtrExitText_=function(B,A){B=soyshim.$$bidiStripHtmlIfNecessary_(B,A);
return soyshim.$$bidiLtrExitDirCheckRe_.test(B)
};
soyshim.$$bidiIsRtlExitText_=function(B,A){B=soyshim.$$bidiStripHtmlIfNecessary_(B,A);
return soyshim.$$bidiRtlExitDirCheckRe_.test(B)
};
soy.StringBuilder=goog.string.StringBuffer;
soydata.SanitizedContentKind={HTML:0,JS_STR_CHARS:1,URI:2,HTML_ATTRIBUTE:3};
soydata.SanitizedContent=function(A){this.content=A
};
soydata.SanitizedContent.prototype.contentKind;
soydata.SanitizedContent.prototype.toString=function(){return this.content
};
soydata.SanitizedHtml=function(A){soydata.SanitizedContent.call(this,A)
};
goog.inherits(soydata.SanitizedHtml,soydata.SanitizedContent);
soydata.SanitizedHtml.prototype.contentKind=soydata.SanitizedContentKind.HTML;
soydata.SanitizedJsStrChars=function(A){soydata.SanitizedContent.call(this,A)
};
goog.inherits(soydata.SanitizedJsStrChars,soydata.SanitizedContent);
soydata.SanitizedJsStrChars.prototype.contentKind=soydata.SanitizedContentKind.JS_STR_CHARS;
soydata.SanitizedUri=function(A){soydata.SanitizedContent.call(this,A)
};
goog.inherits(soydata.SanitizedUri,soydata.SanitizedContent);
soydata.SanitizedUri.prototype.contentKind=soydata.SanitizedContentKind.URI;
soydata.SanitizedHtmlAttribute=function(A){soydata.SanitizedContent.call(this,A)
};
goog.inherits(soydata.SanitizedHtmlAttribute,soydata.SanitizedContent);
soydata.SanitizedHtmlAttribute.prototype.contentKind=soydata.SanitizedContentKind.HTML_ATTRIBUTE;
soy.renderElement=goog.soy.renderElement;
soy.renderAsFragment=function(D,B,A,C){return goog.soy.renderAsFragment(D,B,C,new goog.dom.DomHelper(A))
};
soy.renderAsElement=function(D,B,A,C){return goog.soy.renderAsElement(D,B,C,new goog.dom.DomHelper(A))
};
soy.$$augmentData=function(D,A){function E(){}E.prototype=D;
var C=new E();
for(var B in A){C[B]=A[B]
}return C
};
soy.$$getMapKeys=function(C){var B=[];
for(var A in C){B.push(A)
}return B
};
soy.$$getDelegateId=function(A){return A
};
soy.$$DELEGATE_REGISTRY_PRIORITIES_={};
soy.$$DELEGATE_REGISTRY_FUNCTIONS_={};
soy.$$registerDelegateFn=function(E,C,B){var D="key_"+E;
var A=soy.$$DELEGATE_REGISTRY_PRIORITIES_[D];
if(A===undefined||C>A){soy.$$DELEGATE_REGISTRY_PRIORITIES_[D]=C;
soy.$$DELEGATE_REGISTRY_FUNCTIONS_[D]=B
}else{if(C==A){throw Error('Encountered two active delegates with same priority (id/name "'+E+'").')
}else{}}};
soy.$$getDelegateFn=function(B){var A=soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_"+B];
return A?A:soy.$$EMPTY_TEMPLATE_FN_
};
soy.$$EMPTY_TEMPLATE_FN_=function(A,C,B){return""
};
soy.$$escapeHtml=function(A){if(typeof A==="object"&&A&&A.contentKind===soydata.SanitizedContentKind.HTML){return A.content
}return soy.esc.$$escapeHtmlHelper(A)
};
soy.$$escapeHtmlRcdata=function(A){if(typeof A==="object"&&A&&A.contentKind===soydata.SanitizedContentKind.HTML){return soy.esc.$$normalizeHtmlHelper(A.content)
}return soy.esc.$$escapeHtmlHelper(A)
};
soy.$$stripHtmlTags=function(A){return String(A).replace(soy.esc.$$HTML_TAG_REGEX_,"")
};
soy.$$escapeHtmlAttribute=function(A){if(typeof A==="object"&&A&&A.contentKind===soydata.SanitizedContentKind.HTML){return soy.esc.$$normalizeHtmlHelper(soy.$$stripHtmlTags(A.content))
}return soy.esc.$$escapeHtmlHelper(A)
};
soy.$$escapeHtmlAttributeNospace=function(A){if(typeof A==="object"&&A&&A.contentKind===soydata.SanitizedContentKind.HTML){return soy.esc.$$normalizeHtmlNospaceHelper(soy.$$stripHtmlTags(A.content))
}return soy.esc.$$escapeHtmlNospaceHelper(A)
};
soy.$$filterHtmlAttribute=function(A){if(typeof A==="object"&&A&&A.contentKind===soydata.SanitizedContentKind.HTML_ATTRIBUTE){return A.content.replace(/=([^"']*)$/,'="$1"')
}return soy.esc.$$filterHtmlAttributeHelper(A)
};
soy.$$filterHtmlElementName=function(A){return soy.esc.$$filterHtmlElementNameHelper(A)
};
soy.$$escapeJs=function(A){return soy.$$escapeJsString(A)
};
soy.$$escapeJsString=function(A){if(typeof A==="object"&&A.contentKind===soydata.SanitizedContentKind.JS_STR_CHARS){return A.content
}return soy.esc.$$escapeJsStringHelper(A)
};
soy.$$escapeJsValue=function(A){if(A==null){return" null "
}switch(typeof A){case"boolean":case"number":return" "+A+" ";
default:return"'"+soy.esc.$$escapeJsStringHelper(String(A))+"'"
}};
soy.$$escapeJsRegex=function(A){return soy.esc.$$escapeJsRegexHelper(A)
};
soy.$$problematicUriMarks_=/['()]/g;
soy.$$pctEncode_=function(A){return"%"+A.charCodeAt(0).toString(16)
};
soy.$$escapeUri=function(A){if(typeof A==="object"&&A.contentKind===soydata.SanitizedContentKind.URI){return soy.$$normalizeUri(A)
}var B=soy.esc.$$escapeUriHelper(A);
soy.$$problematicUriMarks_.lastIndex=0;
if(soy.$$problematicUriMarks_.test(B)){return B.replace(soy.$$problematicUriMarks_,soy.$$pctEncode_)
}return B
};
soy.$$normalizeUri=function(A){return soy.esc.$$normalizeUriHelper(A)
};
soy.$$filterNormalizeUri=function(A){return soy.esc.$$filterNormalizeUriHelper(A)
};
soy.$$escapeCssString=function(A){return soy.esc.$$escapeCssStringHelper(A)
};
soy.$$filterCssValue=function(A){if(A==null){return""
}return soy.esc.$$filterCssValueHelper(A)
};
soy.$$changeNewlineToBr=function(A){return goog.string.newLineToBr(String(A),false)
};
soy.$$insertWordBreaks=function(B,A){return goog.format.insertWordBreaks(String(B),A)
};
soy.$$truncate=function(C,A,B){C=String(C);
if(C.length<=A){return C
}if(B){if(A>3){A-=3
}else{B=false
}}if(soy.$$isHighSurrogate_(C.charAt(A-1))&&soy.$$isLowSurrogate_(C.charAt(A))){A-=1
}C=C.substring(0,A);
if(B){C+="..."
}return C
};
soy.$$isHighSurrogate_=function(A){return 55296<=A&&A<=56319
};
soy.$$isLowSurrogate_=function(A){return 56320<=A&&A<=57343
};
soy.$$bidiFormatterCache_={};
soy.$$getBidiFormatterInstance_=function(A){return soy.$$bidiFormatterCache_[A]||(soy.$$bidiFormatterCache_[A]=new goog.i18n.BidiFormatter(A))
};
soy.$$bidiTextDir=function(B,A){if(!B){return 0
}return goog.i18n.bidi.detectRtlDirectionality(B,A)?-1:1
};
soy.$$bidiDirAttr=function(B,C,A){return new soydata.SanitizedHtmlAttribute(soy.$$getBidiFormatterInstance_(B).dirAttr(C,A))
};
soy.$$bidiMarkAfter=function(B,D,A){var C=soy.$$getBidiFormatterInstance_(B);
return C.markAfter(D,A)
};
soy.$$bidiSpanWrap=function(A,C){var B=soy.$$getBidiFormatterInstance_(A);
return B.spanWrap(C+"",true)
};
soy.$$bidiUnicodeWrap=function(A,C){var B=soy.$$getBidiFormatterInstance_(A);
return B.unicodeWrap(C+"",true)
};
soy.esc.$$escapeUriHelper=function(A){return encodeURIComponent(String(A))
};
soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_={"\x00":"\x26#0;","\x22":"\x26quot;","\x26":"\x26amp;","\x27":"\x26#39;","\x3c":"\x26lt;","\x3e":"\x26gt;","\x09":"\x26#9;","\x0a":"\x26#10;","\x0b":"\x26#11;","\x0c":"\x26#12;","\x0d":"\x26#13;"," ":"\x26#32;","-":"\x26#45;","/":"\x26#47;","\x3d":"\x26#61;","`":"\x26#96;","\x85":"\x26#133;","\xa0":"\x26#160;","\u2028":"\x26#8232;","\u2029":"\x26#8233;"};
soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_=function(A){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_[A]
};
soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_={"\x00":"\\x00","\x08":"\\x08","\x09":"\\t","\x0a":"\\n","\x0b":"\\x0b","\x0c":"\\f","\x0d":"\\r","\x22":"\\x22","\x26":"\\x26","\x27":"\\x27","/":"\\/","\x3c":"\\x3c","\x3d":"\\x3d","\x3e":"\\x3e","\\":"\\\\","\x85":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029","$":"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"};
soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_=function(A){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_[A]
};
soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_={"\x00":"\\0 ","\x08":"\\8 ","\x09":"\\9 ","\x0a":"\\a ","\x0b":"\\b ","\x0c":"\\c ","\x0d":"\\d ","\x22":"\\22 ","\x26":"\\26 ","\x27":"\\27 ","(":"\\28 ",")":"\\29 ","*":"\\2a ","/":"\\2f ",":":"\\3a ",";":"\\3b ","\x3c":"\\3c ","\x3d":"\\3d ","\x3e":"\\3e ","@":"\\40 ","\\":"\\5c ","{":"\\7b ","}":"\\7d ","\x85":"\\85 ","\xa0":"\\a0 ","\u2028":"\\2028 ","\u2029":"\\2029 "};
soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_=function(A){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_[A]
};
soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_={"\x00":"%00","\x01":"%01","\x02":"%02","\x03":"%03","\x04":"%04","\x05":"%05","\x06":"%06","\x07":"%07","\x08":"%08","\x09":"%09","\x0a":"%0A","\x0b":"%0B","\x0c":"%0C","\x0d":"%0D","\x0e":"%0E","\x0f":"%0F","\x10":"%10","\x11":"%11","\x12":"%12","\x13":"%13","\x14":"%14","\x15":"%15","\x16":"%16","\x17":"%17","\x18":"%18","\x19":"%19","\x1a":"%1A","\x1b":"%1B","\x1c":"%1C","\x1d":"%1D","\x1e":"%1E","\x1f":"%1F"," ":"%20","\x22":"%22","\x27":"%27","(":"%28",")":"%29","\x3c":"%3C","\x3e":"%3E","\\":"%5C","{":"%7B","}":"%7D","\x7f":"%7F","\x85":"%C2%85","\xa0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"};
soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_=function(A){return soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_[A]
};
soy.esc.$$MATCHER_FOR_ESCAPE_HTML_=/[\x00\x22\x26\x27\x3c\x3e]/g;
soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_=/[\x00\x22\x27\x3c\x3e]/g;
soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_=/[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_=/[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_=/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTE_=/^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i;
soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_=/^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i;
soy.esc.$$escapeHtmlHelper=function(A){var B=String(A);
return B.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
soy.esc.$$normalizeHtmlHelper=function(A){var B=String(A);
return B.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
soy.esc.$$escapeHtmlNospaceHelper=function(A){var B=String(A);
return B.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
soy.esc.$$normalizeHtmlNospaceHelper=function(A){var B=String(A);
return B.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
soy.esc.$$escapeJsStringHelper=function(A){var B=String(A);
return B.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_,soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
};
soy.esc.$$escapeJsRegexHelper=function(A){var B=String(A);
return B.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_,soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
};
soy.esc.$$escapeCssStringHelper=function(A){var B=String(A);
return B.replace(soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_,soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_)
};
soy.esc.$$filterCssValueHelper=function(A){var B=String(A);
if(!soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_.test(B)){return"zSoyz"
}return B
};
soy.esc.$$normalizeUriHelper=function(A){var B=String(A);
return B.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_,soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)
};
soy.esc.$$filterNormalizeUriHelper=function(A){var B=String(A);
if(!soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_.test(B)){return"zSoyz"
}return B.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_,soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)
};
soy.esc.$$filterHtmlAttributeHelper=function(A){var B=String(A);
if(!soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTE_.test(B)){return"zSoyz"
}return B
};
soy.esc.$$filterHtmlElementNameHelper=function(A){var B=String(A);
if(!soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_.test(B)){return"zSoyz"
}return B
};
soy.esc.$$HTML_TAG_REGEX_=/<(?:!|\/?[a-zA-Z])(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
window.atl_soy=window.atl_soy||{};
atl_soy.concat=function(B,A){if(B.concat){return B.concat(A)
}var C={};
for(var D in B){if(B.hasOwnProperty(D)){C[D]=B[D]
}}for(var D in A){if(A.hasOwnProperty(D)){C[D]=A[D]
}}return C
};
(function(a){Confluence={getContextPath:function(){return AJS.Meta.get("context-path")},getBaseUrl:function(){return AJS.$("#confluence-base-url").attr("content")||""},getBuildNumber:function(){return AJS.Meta.get("build-number")},getContentId:function(){var b=AJS.Meta.get("content-id");if(!+b){b=AJS.Meta.get("page-id")}if(!+b){b="0"}return b},getXsrfToken:function(){return AJS.Meta.get("atl-token")},runBinderComponents:function(){AJS.log("AJS.Confluence: run binder components");for(var b in Confluence.Binder){if(Confluence.Binder.hasOwnProperty(b)){try{Confluence.Binder[b]()}catch(c){AJS.log("Exception in initialising of component '"+b+"': "+c.message)}}}},placeFocus:function(){Confluence.Binder.placeFocus()},unescapeEntities:function(c){var b={amp:"&",lt:"<",gt:">","#39":"'",quot:'"'};if(c==null){return c}return(""+c).replace(/&[#\d\w]+;/g,function(e){var d=e.substring(1,e.length-1);return b[d]||e})},sessionCheck:function(f,d){var e=AJS.Meta.get("remote-user");if(!e){return}var b=this.getContextPath()+AJS.REST.getBaseUrl()+"session/check/"+e;var c=this;return a.getJSON(b).done(function(){AJS.log("SESSION CHECK - OK - "+e)}).fail(function(){AJS.log("SESSION CHECK - FAIL - "+e);c.sessionFail(f,d)})},sessionFail:function(f,e){if(!f){var d=a(".aui-dialog:visible");if(d.length){f=d.find(".dialog-panel-body").empty();d.find(".aui-button").attr("disabled","disabled")}else{throw new Error("sessionFail method really expected a visible dialog about now :/")}}if(!e){var c='<a class="reload" href="">';var b="</a>";e=AJS.format("Your session has expired. Please {0}reload{1} the page to try again.",c,b);f.on("click","a.reload",function(){window.location.reload()})}AJS.messages.warning(f,{body:e,closeable:false,shadowed:true})}};Confluence.Binder={placeFocus:function(){var c,b=-1;AJS.$("input[data-focus]").each(function(){var e=AJS.$(this),d=e.attr("data-focus");if(d>b){b=d;c=e}});c&&c.focus()}}})(AJS.$);AJS.toInit(function(){Confluence.runBinderComponents()});AJS.Confluence=Confluence;Confluence.hintManager=function(b){if(!AJS.$.isArray(b)){throw new Error("Hints passed in must be an array of strings")}var a=Math.floor(Math.random()*b.length);return{getNextHint:function(){var c=b[a];a=(a+1)%b.length;return c}}};
(function(a){Confluence.Defaults={maxResults:50}})(AJS.$);
(function(){Confluence.Highlighter=function(e,a){var g,b;if(e&&e.length&&e[0]){var h=[];for(var d=0,f=e.length;d<f;d++){var c=e[d];c&&h.push(c.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"))}g=new RegExp("("+h.join("|")+")","gi");b=AJS.template(a||"<strong>{highlight}</strong>").fill({highlight:"$1"}).toString()}return{highlight:function(i,j){if(!i){return i}if(!j){i=AJS.template.escape(i)}if(!g){return i}return i.replace(g,b)}}}})();
AJS.Position=(function(a){return{spaceAboveBelow:function(k,e){var b=e.position().top,d,f,j,h=e.outerHeight(true),c,g,i;if(k.nodeName=="IFRAME"){d=k.contentWindow||k.contentDocument;c=a(k).height();f=a(d.document||d);g=b-f.scrollTop()}else{f=a(k);c=f.height();g=b-f.position().top}i=c-g-h;return{above:g,below:i}}}})(AJS.$);
AJS.Confluence.cacheManager=function(c){var a={},b=[],c=c||30;return{get:function(d){return a[d]},put:function(d,e){a[d]=e;b.push(d);if(b.length>c){delete a[b.shift()]}},clear:function(){a={};b=[]}}};
Confluence.storageManager=function(a){return AJS.storageManager("confluence",a)};
(function(d){var c=function(f){AJS.log("InputDrivenDropDown: truncating text");var h=f.$.closest(".aui-dd-parent").width(),g=20;if(!h){f.$.width("25em");h=f.$.width()}d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=AJS("var","&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth+l>h-g){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f){AJS.log("InputDrivenDropDown: add space names");d("a span:not(.icon)",f.$).each(function(){var i=d(this);var g;try{g=AJS.dropDown.getAdditionalPropertyValue(i,"spaceName")}catch(h){AJS.log("Problem getting space name: "+h.message)}var j=i.text();if(g){j+=" ("+AJS("i").html(g).text()+")"}i.attr("title",j)})};var e=function(k,g){var j=k.options,h=k.dd;if(h){h.hide();h.$.remove()}j.ajsDropDownOptions=j.ajsDropDownOptions||{};if(j.ajsDropDownOptions&&!j.ajsDropDownOptions.alignment){j.ajsDropDownOptions.alignment="left"}j.ajsDropDownOptions.selectionHandler=j.ajsDropDownOptions.selectionHandler||function(m,l){if(m.type!="click"){m.preventDefault();d("a",l).click();document.location=d("a",l).attr("href")}};var f=k.dd=AJS.dropDown(g.matrix,j.ajsDropDownOptions)[0];if(j.ajsDropDownOptions&&j.ajsDropDownOptions.className){f.$.addClass(j.ajsDropDownOptions.className)}if(j.dropdownPlacement){j.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}var i=new Confluence.Highlighter(g.queryTokens||[g.query]);d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var l=d(this);l.html(i.highlight(l.html(),true))});c(f);b(f);if(j.dropdownPostprocess){j.dropdownPostprocess(f.$)}f.show(k._effect);if(typeof j.onShow=="function"){j.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AJS.Confluence.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(i,h){var g=this;if(i!=g._value){g._value=i;g.busy=false;clearTimeout(g._timer);if(h||(/\S{2,}/).test(i)){var j=g.cacheManager.get(i);if(j){e(g,j)}else{g.busy=true;var f=function(){g.options.getDataAndRunCallback.call(g,i,g.show)};if(g.options.dropDownDelay===0){f()}else{g._timer=setTimeout(function(){f()},g.options.dropDownDelay||200)}}}else{g.dd&&g.dd.hide()}}};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AJS.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery);
(function(a){a.fn.quicksearch=function(f,i,e){if(i){e.onShow=i}e.makeParams=e.makeParams||function(j){return{query:j}};var c=function(l){var m=l.statusMessage;var k;if(m){k=[[{html:l.statusMessage,className:"error"}]]}else{if(e.makeRestMatrixFromData){var j=e.makeRestMatrixFromData(l);k=AJS.REST.convertFromRest(j);if(e.addDropdownData){k=e.addDropdownData(k)}}else{k=l.contentNameMatches}}return k};var d,h;if(typeof f=="function"){h=f();d=function(k){var j=f();if(j!=h){h=j;k.clearCache()}return j}}else{d=function(){return f}}e.getDataAndRunCallback=e.getDataAndRunCallback||function(o,p){var n=this,l=d(n,o),j=AJS.Meta.get("context-path")||"";var k=a.data(n,"lastRequest");if(k){k.abort()}var m=a.ajax({type:"GET",dataType:"json",url:j+l,data:e.makeParams(o),success:function(r,s){a(window).trigger("quicksearch.ajax-success",{url:l,json:r,resultStatus:s});if(document.activeElement!=b[0]){return}var q=c(r);p.call(n,q,o,r.queryTokens)},global:false,timeout:5000,error:function(t,r,s){a(window).trigger("quicksearch.ajax-error",{url:l,xmlHttpRequest:t,resultStatus:r,errorThrown:s});if(document.activeElement!=b[0]){return}if(r=="timeout"){var q=c({statusMessage:"Timeout",query:o});p.call(n,q,null)}},complete:function(){a.removeData(n,"lastRequest")}});a.data(n,"lastRequest",m)};var g=AJS.inputDrivenDropdown(e),b=a(this);b.keyup(function(j){if(j.which==13||j.which==9){AJS.debug("quicksearchdropdown: enter or tab keyup");return}!b.hasClass("placeholded")&&g.change(this.value)});b.quickSearchControl=g;b.bind("clearCache.autocomplete",function(){g.clearCache()});b.bind("hide.autocomplete",function(){g.hide()});return b}})(jQuery);
AJS.Confluence.Binder.placeholder=function(){var b=AJS.$;var a=document.createElement("input");if("placeholder" in a){return}b('textarea[placeholder][data-placeholder-bound!="true"],input[placeholder][data-placeholder-bound!="true"],input.default-text[data-placeholder-bound!="true"]').each(function(){var e=b(this).attr("data-placeholder-bound","true");e.bind("reset.placeholder",function(h,g){var f=g.element.closest("form");f.bind("submit",function(){if(g.element.hasClass("placeholded")){g.element.val("")}})});var c=e.attr("placeholder")||e.attr("data-default-text"),d=function(){if(!b.trim(e.val()).length){e.val(c).addClass("placeholded").trigger("reset.placeholder",{element:e,defaultText:c});e.trigger("reset.default-text")}};d();e.blur(d).focus(function(){if(e.hasClass("placeholded")){e.val("");e.removeClass("placeholded")}})})};Confluence.Binder.inputDefaultText=Confluence.Binder.placeholder;
AJS.Confluence.Binder.insertOnEvent=function(){var a=AJS.$;a('.insert-on-event[data-inserter-bound!="true"]').each(function(){var f=a(this).attr("data-inserter-bound","true"),e=a(f.attr("data-target"))[0],c=f.attr("data-event"),d=f.attr("data-insert-position"),b=f.attr("data-insert-unique-key");if(e&&c&&d){a(self).bind(c,function(j,i){if(e==i.target){if(b){var g=i.content[b],h={};a(".key-holder",d).each(function(){h[a(this).attr("data-key")]=true});if(g in h){return}}a(d).append(AJS.template(f.text()).fill(i.content))}})}})};
Confluence.Binder.autocompleteUser=function(b){b=b||document.body;var c=AJS.$;var a=function(e){if(!e||!e.result){throw new Error("Invalid JSON format")}var d=[];d.push(e.result);return d};c('input.autocomplete-user[data-autocomplete-user-bound!="true"]',b).each(function(){var f=c(this).attr("data-autocomplete-user-bound","true").attr("autocomplete","off");var e=f.attr("data-max")||10,h=f.attr("data-alignment")||"left",g=f.attr("data-dropdown-target"),d=null;if(g){d=c(g)}else{d=c("<div></div>");f.after(d)}if(f.attr("data-resize-to-input")){d.width(f.outerWidth());d.addClass("resize-to-input")}d.addClass("aui-dd-parent autocomplete");f.quicksearch(AJS.REST.getBaseUrl()+"search/user.json",function(){f.trigger("open.autocomplete-user")},{makeParams:function(i){return{"max-results":e,query:i}},dropdownPlacement:function(i){d.append(i)},makeRestMatrixFromData:a,addDropdownData:function(i){if(!i.length){var j=f.attr("data-none-message");if(j){i.push([{name:j,className:"no-results",href:"#"}])}}return i},ajsDropDownOptions:{alignment:h,displayHandler:function(i){if(i.restObj&&i.restObj.username){return i.name+" ("+i.restObj.username+")"}return i.name},selectionHandler:function(n,k){if(k.find(".search-for").length){f.trigger("selected.autocomplete-user",{searchFor:f.val()});return}if(k.find(".no-results").length){this.hide();n.preventDefault();return}var i=c("span:eq(0)",k).data("properties"),o=i.restObj.username,l=f.attr("data-target"),m=l&&c(l),j=f.attr("data-template")||"{username}";f.val(AJS.template(j).fillHtml(i.restObj));m&&m.val(o);f.trigger("selected.autocomplete-user",{content:i.restObj});this.hide();n.preventDefault()}}})})};
(function(b){var a=function(f){if(!f||!f.group){throw new Error("Invalid JSON format")}var e=[];for(var g=0,h=f.group.length;g<h;g++){e.push(f.group[g].result)}return e};var d=function(p,i,f,g){var o=b(p),t="data-autocomplete-content-bound";if(o.attr(t)){return}if(typeof i=="string"){i=[i]}o.attr(t,"true").attr("autocomplete","off");var q=i.join(","),h=o.attr("data-max")||10,m=o.attr("data-alignment")||"left",l=o.attr("data-spacekey"),k=o.attr("data-none-message"),n=o.attr("data-search-link-message"),s=o.attr("data-template")||f,e=o.attr("data-target"),j=o.attr("data-dropdown-target"),r=null;if(j){r=b(j)}else{r=b("<div></div>");o.after(r)}r.addClass("aui-dd-parent autocomplete");o.focus(function(){l=o.attr("data-spacekey")});o.quicksearch(AJS.REST.getBaseUrl()+"search/name.json",null,{onShow:function(){o.trigger("open.autocomplete-content",{contentTypes:i})},makeParams:function(v){var u={"max-results":h,pageSize:h,type:q,query:v};if(l){u.spaceKey=l}return u},dropdownPlacement:function(u){r.append(u)},makeRestMatrixFromData:a,addDropdownData:function(v){if(!v.length){if(k){v.push([{name:k,className:"no-results",href:"#"}])}}if(n){var w=AJS.escapeHtml(o.val());var u=AJS.format(n,w);v.push([{className:"search-for",name:u,href:"#"}])}return v},ajsDropDownOptions:{alignment:m,displayHandler:g,selectionHandler:function(x,v){AJS.debug("autocomplete-content: ajsDropDownOptions.selectionHandler");if(v.find(".search-for").length){o.trigger("selected.autocomplete-content",{contentTypes:i,searchFor:o.val()});return}if(v.find(".no-results").length){AJS.log("no results selected");this.hide();x.preventDefault();return}var u=v.data("properties");o.val(AJS.template(s).fillHtml(u.restObj));if(e){var w=AJS.template(f).fillHtml(u.restObj);b(e).val(w)}o.trigger("selected.autocomplete-content",{contentTypes:i,content:u.restObj,selection:v});this.hide();x.preventDefault()}}})};Confluence.Binder.autocompleteSpace=function(e){e=e||document.body;b("input.autocomplete-space",e).each(function(){d(this,["spacedesc","personalspacedesc"],"{name}",function(f){return f.name})})};Confluence.Binder.autocompleteAttachment=function(e){e=e||document.body;b("input.autocomplete-attachment",e).each(function(){d(this,"attachment","{fileName}",function(f){var g=(f.restObj&&f.restObj.fileName)||f.name;if(f.restObj&&f.restObj.space&&f.restObj.space.title){g+=" ("+f.restObj.space.title+")"}return g})})};var c=function(e){return(e.restObj&&e.restObj.title&&AJS.escapeHtml(e.restObj.title))||e.name};Confluence.Binder.autocompletePage=function(e){e=e||document.body;b("input.autocomplete-page",e).each(function(){d(this,"page","{title}",c)})};Confluence.Binder.autocompleteBlogpost=function(e){e=e||document.body;b("input.autocomplete-blogpost",e).each(function(){d(this,"blogpost","{title}",c)})};Confluence.Binder.autocompleteConfluenceContent=function(e){e=e||document.body;b("input.autocomplete-confluence-content",e).each(function(){d(this,["page","blogpost"],"{title}",c)})};Confluence.Binder.autocompleteSearch=function(e){e=e||document.body;b("input.autocomplete-search",e).each(function(){d(this,[],"{title}",c)})}})(AJS.$);
(function(b){var a=function(c,e){var d;return b.extend({getForm:function(){return b("form",c.baseElement)},getUploadingMessageElement:function(){return b(".upload-in-progress",c.baseElement)},pack:function(){},displayErrors:function(f){d.displayMessages(f);this.pack()},clearErrors:function(){d.clearMessages();this.pack()},setUploadInProgress:function(g,h){var f=this.getUploadingMessageElement();if(g){f.html(h||this.getDefaultUploadingMessage())}AJS.setVisible(f,g);AJS.setVisible(this.getForm(),!g)},onUploadSuccess:function(){},getMessageHandler:function(){if(!d){d=AJS.MessageHandler({baseElement:b(".warning",c.baseElement)})}return d},getDefaultErrorMessage:function(){return "Could not upload the file to Confluence. The server may be unavailable."},getDefaultUploadingMessage:function(){return "File uploading\u2026"},getContentId:function(){return AJS.Meta.get("attachment-source-content-id")}},e&&e(c))};Confluence.AttachmentUploader=function(d,g){var c,e,f;c=a(d,g);e=c.getMessageHandler();f=c.getForm();if(AJS.Meta.getBoolean("can-attach-files")){f.ajaxForm({dataType:"json",data:{contentId:c.getContentId(),responseFormat:"html"},resetForm:true,beforeSubmit:function(){c.setUploadInProgress(true);e.clearMessages()},success:function(h){c.setUploadInProgress(false);if(e.handleResponseErrors(h,c.getDefaultErrorMessage())){return}c.onUploadSuccess(h.attachmentsAdded||[])},error:function(h){c.setUploadInProgress(false);e.displayMessages(c.getDefaultErrorMessage());AJS.log("Response from server was: "+h.responseText)}});f.find("input:file").change(function(){f.submit()})}else{f.remove()}return c}})(AJS.$);
Confluence.Binder.userHover=(function(){var f=[],b=Confluence.getContextPath(),d=AJS.$;var a=function(i){var h=f[i],g={username:h,target:this};d(self).trigger("hover-user.open",g);d(".ajs-menu-bar",this).ajsMenu();d(".follow, .unfollow",this).each(function(){var j=d(this).click(function(l){if(j.hasClass("waiting")){return}var k=j.hasClass("unfollow")?"/unfollowuser.action":"/followuser.action";j.addClass("waiting");console.log("This is the new file");AJS.safe.post(b+k+"?username="+encodeURIComponent(h)+"&mode=blank",{},function(){j.removeClass("waiting");j.parent().toggleClass("follow-item").toggleClass("unfollow-item");d(self).trigger("hover-user.follow",g)});return AJS.stopEvent(l)})})};var c=["span.user-hover-trigger","a.confluence-userlink","img.confluence-userlink","a.userLogoLink"].join(", ");var e=AJS.DarkFeatures.isEnabled("show.business.group.in.user.hover");return function(){d(c).filter("[data-user-hover-bound!='true']").each(function(){var h=d(this),i=h.attr("data-username");h.attr("title","").attr("data-user-hover-bound","true");d("img",h).attr("title","");var g=d.inArray(i,f);if(g==-1){f.push(i);g=d.inArray(i,f)}d(this).addClass("userlink-"+g)});d.each(f,function(h){var g=b+"/users/userinfopopup.action?username="+encodeURIComponent(f[h]);if(e){g+="&profileGroups=business"}AJS.contentHover(d(".userlink-"+h),h,g,a)})}})();
(function(c){var e=[];var b=function(f){return f.hasClass("icon-remove-fav")};var a=function(g,i,h){var k=b(h),j=h.parent().find(".icon-wait"),f,l;if(i=="page"){f=Confluence.getContextPath()+"/json/"+(k?"removefavourite.action":"addfavourite.action");l={entityId:g}}if(i=="space"){f=Confluence.getContextPath()+"/json/"+(k?"removespacefromfavourites.action":"addspacetofavourites.action");l={key:g}}h.addClass("hidden");j.removeClass("hidden");AJS.safe.ajax({url:f,type:"POST",data:l,success:function(m){AJS.log(m);j.addClass("hidden");h.parent().find(k?".icon-add-fav":".icon-remove-fav").removeClass("hidden");delete e[g]},error:function(o,n,m){j.addClass("hidden");h.parent().find(k?".icon-remove-fav":".icon-add-fav").removeClass("hidden");AJS.log("Error Toggling Favourite: "+n);delete e[g]}})};var d=function(g,f){if(g.attr("data-favourites-bound")){return}g.delegate(".icon-add-fav, .icon-remove-fav","click",function(k){var i=c(k.target);var h,j=g.attr("data-entity-type");if(f&&f.getEntityId&&typeof f.getEntityId=="function"){h=f.getEntityId(i)}else{h=g.attr("data-entity-id")}if(e[h]){AJS.log("Already busy toggling favourite for "+j+" '"+h+"'. Ignoring request.");return}e[h]=true;a(h,j,i);return false});g.attr("data-favourites-bound",true)};AJS.Confluence.Binder.favourites=function(){c(".entity-favourites").each(function(){if(!c(this).attr("data-favourites-bound")){d(c(this),{})}})};c.fn.favourites=function(f){c(this).each(function(){var g=c(this);d(g,f)})}})(AJS.$);
(function(f){var g=[];var e=function(h){return a(h)||d(h)};var a=function(h){return h.hasClass("icon-stop-watching")};var d=function(h){return h.hasClass("link-stop-watching")};var c=function(j,l,k){var i=e(k),o=a(k),m=k.parent().find(".icon-wait"),h,n;if(l=="page"){h=Confluence.getContextPath()+"/users/"+(i?"removepagenotificationajax.action":"addpagenotificationajax.action");n={pageId:j}}if(l=="space"){h=Confluence.getContextPath()+"/users/"+(i?"removespacenotificationajax.action":"addspacenotificationajax.action");n={spaceKey:j}}k.addClass("hidden");m.removeClass("hidden");AJS.safe.ajax({url:h,type:"POST",data:n,success:function(p){AJS.log(p);m.addClass("hidden");if(o){k.parent().find(i?".icon-start-watching":".icon-stop-watching").removeClass("hidden")}else{k.parent().find(i?".link-start-watching":".link-stop-watching").removeClass("hidden")}delete g[j]},error:function(r,q,p){m.addClass("hidden");if(o){k.parent().find(i?".icon-start-watching":".icon-stop-watching").removeClass("hidden")}else{k.parent().find(i?".link-start-watching":".link-stop-watching").removeClass("hidden")}AJS.log("Error Toggling Watching: "+q);delete g[j]}})};var b=function(i,h){if(i.attr("data-watching-bound")){return}i.delegate(".icon-start-watching, .icon-stop-watching, .link-start-watching, .link-stop-watching","click",function(m){var k=f(m.target);var j,l=i.attr("data-entity-type");if(h&&h.getEntityId&&typeof h.getEntityId=="function"){j=h.getEntityId(k)}else{j=i.attr("data-entity-id")}if(g[j]){AJS.log("Already busy toggling favourite for "+l+" '"+j+"'. Ignoring request.");return}g[j]=true;c(j,l,k);return false});i.attr("data-watching-bound",true)};AJS.Confluence.Binder.watching=function(){f(".entity-watching").each(function(){if(!f(this).attr("data-watching-bound")){b(f(this),{})}})};f.fn.watching=function(h){f(this).each(function(){var i=f(this);b(i,h)})}})(AJS.$);
// This file was automatically generated from dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dialog == 'undefined') { Confluence.Templates.Dialog = {}; }


Confluence.Templates.Dialog.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.customHelpLink({href: opt_data.href, text: soy.$$escapeHtml("Help")}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dialog.customHelpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="dialog-help-link"><a href="', soy.$$escapeHtml(opt_data.href), '" target="_blank">', soy.$$escapeHtml(opt_data.text), '</a></div>');
  return opt_sb ? '' : output.toString();
};

(function(d){var b=function(h,j){var l=-11,g=d('<div class="aui-tip-parent"></div>');if(d.browser.msie&&d.browser.version<9){l=(parseInt(d.browser.version,10)<8)?-5:-13}var f=j?14:7;h.prepend(g).css({zIndex:3001});var i=Raphael(g[0],15,f),k=i.path("M0,6.0001l6.00001-6.00001,6.0001,6.0001").attr({fill:"#f0f0f0",stroke:"#e2e2e2"});i.canvas.style.zIndex=3000;tip=i;if(j){k.rotate(180);if(d.support.opacity){k.clone().translate(2,3).attr({fill:"#A0A0A0",stroke:"#A0A0A0",opacity:".5",blur:"1"}).toBack()}l=l+h.outerHeight()+10}g.css({top:l,left:10});return i},c=function(f,g){return Raphael.shadow(0,0,f.outerWidth(true),f.outerHeight(true),{radius:5,target:f[0],offset:2})},e=function(g,h,f,k){var i=f.outerHeight(),j=i+~~k,l=AJS.Position.spaceAboveBelow(g[0],h);if(l.below>=j){return false}return(l.above>=j)},a=function(g,f){f=f||{};setTimeout(function(){var k=AJS.Rte.Content.offset(g.anchor),p=g.panel.width()+k.left-d(window).width()+10,s=7,h=0,i=d(g.anchor).outerHeight(),o,j=k.left-(p>0?p:0)-h;if(g.shouldFlip){o=k.top-s-g.panel.outerHeight()-4}else{o=k.top+s+i}if(g.options.anchorIframe){var r=d(g.options.anchorIframe),n=r.offset().top+r.height()-g.panel.outerHeight()-10;o=Math.min(o,n)}g.panel.find(".aui-tip-parent").css({left:Math.abs(k.left-j)+10});j=Math.max(0,j);var m={top:o,left:j},q=g.panel.add(g.shadow),l=function(){if(g.shadow){g.shadow.css("left",g.panel.position().left-1)}};f.animate?q.animate(m,f.animateDuration,l):(function(){q.css(m);l()})()},f.delay||0)};AJS.Confluence.PropertyPanel={shouldCreate:true,current:null,createFromButtonModel:function(o,g,n,q){var f=AJS("div").attr({"class":"panel-buttons"});for(var k=0,p=n.length;k<p;k++){if(!n[k]){continue}var m=n[k],l=m.html||'<span class="icon"></span><span class="panel-button-text">'+(m.text||"")+"</span>",h=[];m.className&&h.push(m.className);m.disabled&&h.push("disabled");m.selected&&h.push("selected");!n[k+1]&&h.push("last");!n[k-1]&&h.push("first");var j;if(!m.html){j=AJS("a").attr({href:n[k].href||"#"}).addClass("aui-button").html(l);if(m.disabled){j.attr("title",m.disabledText);j.disable();j.click(function(i){return AJS.stopEvent(i)})}else{n[k].click&&(function(r,i,s){i.click(function(t){r.click(i,s);return AJS.stopEvent(t)})})(n[k],j,g)}}else{j=d(m.html)}m.tooltip&&j.attr("title",m.tooltip);j.addClass(h.join(" "));f.append(j)}return this.create(o,g,f,q)},create:function(j,g,i,p){p=p||{};AJS.Rte.BookmarkManager.storeBookmark();var l=d("#property-panel"),f,n=p.enableFlip==undefined||p.enableFlip,o;l.length&&this.destroy();l=AJS("div").addClass("aui-property-panel-parent").addClass(j+"-panel").attr("id","property-panel").appendTo("body");f=AJS("div").addClass("aui-property-panel").append(i);l.append(f).css({top:0,left:-10000});o=n&&e(d(p.anchorIframe||d(g).parent()),d(g),l,10);var h=this;i.find(".last:last").css({"margin-right":0});var m=c(l,o),k=b(l,o);this.current={anchor:g,panel:l,hasAnchorChanged:function(q){return q&&h.hasAnchorChanged(q)},snapToElement:function(q){a(this,q)},shouldFlip:o,shadow:m,tip:k,options:p,updating:true,type:j};a(this.current);f=this.current;AJS.$(document).bind("keydown.property-panel.escape",function(q){if(q.keyCode===27){AJS.Confluence.PropertyPanel.destroy()}});AJS.$(document).bind("click.property-panel",function(q){if(!AJS.$(q.target).closest("#property-panel").length){AJS.Confluence.PropertyPanel.destroy()}});AJS.trigger("created.property-panel",this.current);this.current.updating=false;return this.current},destroy:function(){if(!this.current){AJS.log("PropertyPanel.destroy: called with no current PropertyPanel, returning");return}if(this.current.updating){AJS.log("PropertyPanel.destroy: called while updating, returning");return}AJS.trigger("destroyed.property-panel",this.current);AJS.$(document).unbind(".property-panel").unbind(".contextToolbar");this.current.panel.remove();this.current.shadow&&this.current.shadow.remove();this.current=null},hasAnchorChanged:function(f){var g=this.current;if(g&&d(g.anchor)[0]==d(f)[0]){return(g.options.originalHeight&&(g.options.originalHeight!=d(f).height()))}return true}}})(AJS.$);
(function(A){AJS.log("DEPRECATED: jquery.autocomplete.js - See https://ecosystem.atlassian.net/browse/AUI-393");A.fn.autocomplete=function(B,C,K){K=typeof C=="function"?C:(typeof K=="function"?K:function(){});C=!isNaN(Number(C))?C:3;var J=this;J[0].lastSelectedValue=J.val();var H=A(document.createElement("ol"));var D=J.offset();var G=parseInt(A("body").css("border-left-width"));H.css({position:"absolute",width:J.outerWidth()-2+"px"});H.addClass("autocompleter");this.after(H);H.css({margin:(Math.abs(this.offset().left-H.offset().left)>=Math.abs(this.offset().top-H.offset().top))?J.outerHeight()+"px 0 0 -"+J.outerWidth()+"px":"-1px 0 0 0"});H.hide();function F(){H.hide();A(document).unbind("click",F)}function E(){var L=J.val();if(L.length>=C&&L!=J[0].lastQuery&&L!=J[0].lastSelectedValue){A.getJSON(B+encodeURI(L),function(P){var R="";L=L.toLowerCase();var U=L.split(" ");for(var Q=0,W=P.length;Q<W;Q++){var S=false;if(P[Q].fullName&&P[Q].username){var V=P[Q].fullName+" ("+P[Q].username+")";var M=P[Q].fullName.split(" ");for(var O=0,T=M.length;O<T;O++){for(var N=0;N<U.length;N++){if(M[O].toLowerCase().indexOf(U[N])==0){M[O]="<strong>"+M[O].substring(0,U[N].length)+"</strong>"+M[O].substring(U[N].length);S=true}}}if(!S){for(var N=0;N<U.length;N++){if(P[Q].username&&P[Q].username.toLowerCase().indexOf(U[N])==0){P[Q].username="<strong>"+P[Q].username.substring(0,U[N].length)+"</strong>"+P[Q].username.substring(U[N].length)}}}P[Q].fullName=M.join(" ");R+="<li><span>"+P[Q].fullName+"</span> <span class='username-in-autocomplete-list'>("+P[Q].username+")</span><i class='fullDetails'>"+V+"</i><i class='username'>"+P[Q].username+"</i><i class='fullName'>"+P[Q].fullName+"</i></li>"}if(P[Q].status){R+="<li>"+P[Q].status+"</li>"}}H.html(R);A("li",H).click(function(Y){Y.stopPropagation();var X=A("i.fullDetails",this).html();I(X)}).hover(function(){A(".focused").removeClass("focused");A(this).addClass("focused")},function(){});A(document).click(F);H.show()});J[0].lastQuery=L}else{if(L.length<C){F()}}}J.keydown(function(M){var L=this;if(this.timer){clearTimeout(this.timer)}var N={"40":function(){var O=A(".focused").removeClass("focused").next();if(O.length){O.addClass("focused")}else{A(".autocompleter li:first").addClass("focused")}},"38":function(){var O=A(".focused").removeClass("focused").prev();if(O.length){O.addClass("focused")}else{A("li:last",H).addClass("focused")}},"27":function(){F()},"13":function(){var O=A(".focused i.fullDetails").html();I(O)},"9":function(){this[13]();setTimeout(function(){L.focus()},0)}};if(H.css("display")!="none"&&M.keyCode in N){M.preventDefault();N[M.keyCode]()}this.timer=setTimeout(E,300)});function I(N){var M=J.val();if(N){J[0].lastSelectedValue=N;J.val(N);var L={input:J,originalValue:M,value:N,fullName:A(".focused i.fullName").text(),username:A(".focused i.username").text()};K(L);F()}}}})(jQuery);
AJS.toInit(function(a){AJS.applySearchPlaceholders=function(b){AJS.log("AJS.applySearchPlaceholders is deprecated. Use AJS.Confluence.Binder.placeholder instead");AJS.Confluence.Binder.placeholder()};a("#messageContainer .confluence-messages").each(function(){var b=this;if(!getCookie(b.id)){a(b).show();a(".message-close-button",b).click(function(){a(b).slideUp();setCookie(b.id,true)})}})});AJS.General={getContextPath:Confluence.getContextPath,getBaseUrl:Confluence.getBaseUrl};(function(){var a={};AJS.I18n={keys:{},get:function(g,b,c){var e=true,d=Confluence.getContextPath()+"/rest/prototype/1/i18n",h={locale:AJS.params.userLocale};if(AJS.$.isArray(g)){for(var f in g){if(!a[f]){e=false}}h.pluginKeys=g}else{e=a[g];d+="/"+g}if(e){if(typeof b=="function"){b(AJS.I18n.keys)}return}AJS.$.ajax({url:d,data:h,dataType:"json",success:function(i){AJS.I18n.load(i);a[g]=true;if(typeof b=="function"){b(i)}},error:function(i,j){AJS.log("Error loading I18n for "+g+":"+j);if(typeof c=="function"){c(j)}}})},load:function(b){AJS.$.extend(AJS.I18n.keys,b)},getText:function(b,c){var d=AJS.params["i18n."+b]||AJS.I18n.keys[b]||b;if(!c){return d}if(arguments.length==2&&c instanceof Array){c.unshift(d)}else{c=Array.prototype.slice.call(arguments,0);c[0]=d}return AJS.format.apply(AJS,c)}}})();(function(){var b=/\S/,c=/^[\s\uFEFF]+/,a=/[\s\uFEFF]+$/;if(b.test("\xA0")){c=/^[\s\uFEFF\xA0]+/;a=/[\s\uFEFF\xA0]+$/}AJS.trim=AJS.trim||function(d){if(!d){return""}return d.replace(c,"").replace(a,"")}})();jQuery.fn.selectableEffects=function(a,b,c){var e=jQuery,d=e(this);if(c){d.data("properties",c)}d.click(function(g){var f=e(this);if(b){b(this,f.data("properties"))}a.find(".selected").removeClass("selected");f.addClass("selected");return AJS.stopEvent(g)});d.hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")})};jQuery.fn.shortenUntil=function(d){var b=jQuery;var c=0;while(!d()&&c<this.length){var a=b(this[c]).text();if(a=="\u2026"){c++;continue}b(this[c]).text(a.replace(/[^\u2026]\u2026?$/,"\u2026"))}return this};
AJS.html=function(a){var b=new String(a);b.isHtml=true;return b};AJS.toInit(function(b){var a={};AJS.loadTemplateScripts=function(f){f=f||document;b("script",f).each(function(){if(this.type=="text/x-template"){a[this.title]=AJS.html(this.text)}})};AJS.loadTemplateScripts();AJS.getTemplate=function(f){var g=a[f];if(!g){g=e(f,document)}return g};function e(f,g){var h=b('script[title="'+f+'"]',g);if(h.length==0){return null}a[f]=AJS.html(h[0].text);return a[f]}var d={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};AJS.escapeEntities=function(f){if(f==null){return f}if(f.isHtml){return""+f}return(""+f).replace(/[&<>'"]/g,function(g){return d[g]||g})};function c(g){var f=arguments;return g.replace(/\{(\d+)\}/g,function(k,h){var j=f[parseInt(h,10)+1];return j!=null?j:k})}AJS.renderTemplate=function(f,g){if(!AJS.getTemplate(f)){return""}if(!b.isArray(g)){g=Array.prototype.slice.call(arguments,1)}var k=AJS.getTemplate(f).toString();var j=[k];for(var h=0;h<g.length;h++){j.push(AJS.escapeEntities(g[h]))}return c.apply(this,j)};AJS.loadTemplatesFromUrl=function(f,h){var g=AJS.Meta.get("static-resource-url-prefix");if(f.indexOf("http")!=0&&f.indexOf(g)!=0){f=g+f}b.ajax({url:f,data:{locale:AJS.params.userLocale},dataType:"html",success:function(i){var j=AJS("div").append(i);AJS.loadTemplateScripts(j);h&&h()}})};AJS.loadWebResourceTemplates=function(f,h,i){var g="/download/resources/"+f+"/"+h;return this.loadTemplatesFromUrl(g,i)}});
AJS.menuShowCount=0;(function(){var f=jQuery;var h=null;var g=function(i){if(typeof AJS.dropDownTimer!="undefined"&&AJS.dropDownHider){clearTimeout(AJS.dropDownTimer);delete AJS.dropDownTimer;AJS.dropDownHider();AJS.dropDownHider=null}};var e=function(){return f(".ajs-menu-bar.menu-bar-open").length>0};var a=function(i){f(i).closest(".ajs-menu-bar").find(".ajs-drop-down").each(function(j){this.hide()})};var d=function(i){return f(i).closest(".ajs-menu-bar").hasClass("menu-bar-open")};var b=function(i){f(i).closest(".ajs-menu-bar").addClass("menu-bar-open")};var c=function(i){f(i).closest(".ajs-menu-bar").removeClass("menu-bar-open")};f.fn.ajsMenu=function(i){i=i||{};f(".ajs-button",this).each(function(){f(this).mouseover(function(){var k=this;var m=d(k);a(k);if(m){var l=f(document);var j=function(){c(k);return false};l.unbind("click.menu");setTimeout(function(){l.one("click.menu",j)},1);b(k)}})});f(".ajs-menu-item",this).each(function(){f(this).ajsMenuItem(i)})};f.fn.ajsMenuItem=function(r){r=r||{};var k=this,i=f(this),o=f(".ajs-drop-down",k);if(!o.length){return}o=o[0];o.hidden=true;o.focused=-1;o.hide=function(){if(!this.hidden){i.toggleClass("opened");var t=f(k.parentNode);if(t.find(".opened").length==0){c(k)}var s=f("a",this);f(this).toggleClass("assistive");this.hidden=true;f(document).unbind("click",this.fhide).unbind("keydown",this.fmovefocus).unbind("keypress",this.blocker);if(this.focused+1){f(s[this.focused]).removeClass("active")}this.focused=-1}};o.show=function(){if(typeof this.hidden=="undefined"||this.hidden){var s=this,w=f(this);w.toggleClass("assistive");i.toggleClass("opened");b(k);this.hidden=false;this.timer=setTimeout(function(){f(document).click(s.fhide)},1);f(document).keydown(s.fmovefocus).keypress(s.blocker);var t=f("a",s);t.each(function(y){var x=this.parentNode.parentNode;f(this).hover(function(z){if(x.focused+1){f(t[x.focused].parentNode).removeClass("active")}f(this.parentNode).addClass("active");x.focused=y},function(z){if(x.focused+1){f(t[x.focused].parentNode).removeClass("active")}x.focused=-1})});var v=(window.pageYOffset||document.documentElement.scrollTop);var u=v+f(window).height();w.removeClass("above");if(!r.isFixedPosition){if(w.offset().top+w.height()>u){w.addClass("above");if(w.offset().top<v){w.removeClass("above")}}}}};o.isMenuBarOpened=function(){return d(o)};o.closeOthers=function(){a(o)};o.fmovefocus=function(s){o.movefocus(s)};o.fhide=function(s){o.hide(s);return AJS.$(s.target).closest(".ajs-drop-down").length>0};o.blocker=function(s){var t=s.which;if(t==40||t==38){return false}};o.movefocus=function(u){var x=u.which,t=this.getElementsByTagName("a"),w=this.focused,s=(x==9),v;do{switch(x){case 40:case 9:if(u.shiftKey){this.focused--}else{this.focused++}break;case 38:this.focused--;break;case 27:this.hide();return false;default:return true}v=(this.focused<0||this.focused>t.length-1)}while(!v&&f(t[this.focused].parentNode).hasClass("assistive"));if(s&&v){if(w!=-1){f(t[w].parentNode).removeClass("active")}this.focused=-1;this.hide();return false}else{if(!s){if(this.focused<0){this.focused=t.length-1}else{if(this.focused>t.length-1){this.focused=0}}}}if(w>=0){f(t[w].parentNode).removeClass("active")}t[this.focused].focus();f(t[this.focused].parentNode).addClass("active");u.stopPropagation();u.preventDefault();return false};o.show();clearTimeout(o.timer);var l=f(o),j=l.offset();o.hide();var n=f(".trigger",k);if(n.length){var q=function(){clearTimeout(AJS.dropDownTimer);delete AJS.dropDownTimer;AJS.dropDownHider();AJS.dropDownHider=null;o.show()};var p=function(t){var s=typeof AJS.dropDownTimer!="undefined";h=o;if(s){q()}else{AJS.dropDownShower=function(){o.show();delete AJS.dropDownShowerTimer};AJS.dropDownShowerTimer=setTimeout(AJS.dropDownShower,t)}};var m=function(s){var t=typeof AJS.dropDownShowerTimer!="undefined";if(t){clearTimeout(AJS.dropDownShowerTimer);delete AJS.dropDownShowerTimer}if(typeof AJS.dropDownTimer!="undefined"){clearTimeout(AJS.dropDownTimer);delete AJS.dropDownHider}AJS.dropDownHider=function(){o.hide();delete AJS.dropDownTimer};AJS.dropDownTimer=setTimeout(AJS.dropDownHider,s)};i.mouseover(function(){if(o.isMenuBarOpened()){if(o.hidden){a(o);o.show()}}else{i.addClass("hover")}});i.mouseout(function(){if(!o.isMenuBarOpened()){i.removeClass("hover")}});n.click(function(){if(o.hidden){n.parent("li").removeClass("hover");var s=e();o.show();return s}else{o.hide();n.parent("li").addClass("hover");return false}})}}})();AJS.toInit(function(c){c("#view-user-history-link").click(function(j){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=600, height=400, scrollbars, resizable");j.preventDefault();return false});var d=function(k,l){var m=c("#ajax-error");if(m.length==0){c("#com-atlassian-confluence").prepend("<div id='ajax-error'></div>");m=c("#ajax-error")}var j=c("<div>"+k+"</div>").text();if(c("div span:contains('"+j+"')").length==0){m.append("<span class='error'>"+k+"<a class='close'>Close</a></span>")}m.find("a.close").click(function(){var n=c(this).parent();c(n).slideUp(1000,function(){c(n).remove();if(c("#ajax-error").children(".error").length==0){c("#ajax-error").remove()}});return false});l.removeClass("waiting")};c("#page-favourite").click(function(m){var k=c(this),l=k.find("span");if(k.hasClass("waiting")){return AJS.stopEvent(m)}k.addClass("waiting");var j=Confluence.getContextPath()+"/json/addfavourite.action";if(k.hasClass("selected")){j=Confluence.getContextPath()+"/json/removefavourite.action"}AJS.safeAjax({url:j,type:"POST",dataType:"json",data:{entityId:AJS.params.pageId},success:function(o){if(o.actionErrors){for(var n=0;n<o.actionErrors.length;n++){d(o.actionErrors,k)}return}if(o.errorMessage){d(o.errorMessage,k);return}k.removeClass("waiting");k.toggleClass("selected");k.toggleClass("ie-page-favourite-selected");if(k.hasClass("selected")){l.text("Remove Favourite")}else{l.text("Favourite")}},error:function(n){d("Server error while updating favourite",k)}});return AJS.stopEvent(m)});var h=c("#page-watch"),i=c("#page-unwatch"),e=c(h.parent("li")),g=c(i.parent("li"));if(h.hasClass("inactive")){e.addClass("assistive")}if(i.hasClass("inactive")){g.addClass("assistive")}var f=function(j,k,l){k.addClass("waiting");AJS.safe.ajax({url:j,type:"POST",dataType:"json",data:{entityId:AJS.params.pageId},success:function(n){if(n.actionErrors){for(var m=0;m<n.actionErrors.length;m++){d(n.actionErrors,k)}return}if(n.errorMessage){d(n.errorMessage,k);return}k.removeClass("waiting");k.toggleClass("inactive");l.toggleClass("inactive");k.parent("li").toggleClass("assistive");l.parent("li").toggleClass("assistive")},error:function(m){k.removeClass("waiting");d("Server error while updating favourite",menuItem)}})};h.click(function(j){f(Confluence.getContextPath()+"/pages/startwatching.action",h,i);h.addClass("waiting");AJS.trigger("watchpage.pageoperation");return AJS.stopEvent(j)});i.click(function(j){f(Confluence.getContextPath()+"/pages/stopwatching.action",i,h);i.addClass("waiting");AJS.trigger("unwatchpage.pageoperation");return AJS.stopEvent(j)});var a=c("#action-menu-link"),b=c("#add-menu-link");if(a.length){a.next().addClass("most-right-menu-item")}else{if(b.length){b.next().addClass("most-right-menu-item")}}c("#action-menu").on({"aui-dropdown2-show":function(){c(this).css({right:function(){return c(window).width()-a.offset().left-a.outerWidth(true)-1},left:"auto"})}});c(".ajs-menu-bar").ajsMenu({isFixedPosition:true})});AJS.$(function(a){a("#header-menu-bar .ajs-menu-item").each(function(){var c=a(this),d=a(".ajs-drop-down",this),b=c.width();if(b>d.width()){d.width(b.valueOf()+50);AJS.log("Dropdown width override occurred")}})});
jQuery.fn.simpleScrollTo=function(c){var e=jQuery;var a=e(this[0]);var b=e(c).position().top;var d=b+e(c).outerHeight()-a.outerHeight();if(b<0){a.scrollTop(a.scrollTop()+b)}else{if(d>0){a.scrollTop(a.scrollTop()+d)}}return this};
AJS.toInit(function(a){a("a#websudo-drop.drop-non-websudo").click(function(){a.getJSON(a(this).attr("href"),function(){a("li#confluence-message-websudo-message").slideUp(function(){AJS.trigger("confluence.header-resized")})});return false})});
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+m.path:"";var g=m.domain?"; domain="+m.domain:"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
AJS.PagePermissions=AJS.PagePermissions||{};AJS.toInit(function(d){var g="user",s="group";var j=Confluence.getContextPath();var n=function(){return d("#rte-button-restrictions").is(":visible")};var a=null;var k=null;var q=null;var m={addNames:function(v,x){var w=this;var u=v.replace(/\s*,\s*/g,",").split(",");var y=d("#waitImage");y.show();var z={name:u,type:x||"",pageId:AJS.Meta.get("parent-page-id"),spaceKey:AJS.Meta.get("space-key")};d.getJSON(j+"/pages/getentities.action",z,function(E){y.hide();for(var D=0,A=E.length;D<A;D++){var B=E[D].entity;w.addEntity(E[D]);var C=d.inArray(B.name,u);u.splice(C,1)}k.validator.handleNonExistentEntityNames(u)})},addEntity:function(w){if(!w){return}var v=w.entity;var u=w.report;var y=k.getPermissionType();if(k.validator.isDuplicateEntityForType(v,y)){q.highlightEntityRow(v,y);return}var x={entity:v,view:true,edit:true,report:u};q.addRow(x,y);Confluence.Binder.userHover();q.changedByUser();q.highlightEntityRow(v,y);k.nameField.removeFromNameInput(v.name)},makePermissionStrings:function(){var u=q.makePermissionMap(false);return{viewPermissionsUsers:u.user.view.join(","),editPermissionsUsers:u.user.edit.join(","),viewPermissionsGroups:u.group.view.join(","),editPermissionsGroups:u.group.edit.join(",")}}};d.extend(AJS.PagePermissions,{addUserPermissions:function(u){m.addNames(u,g)},addGroupPermissions:function(u){m.addNames(u,s)},makePermissionStrings:m.makePermissionStrings,updateEditPage:h});function e(w){q.allowEditing(w.userCanEditRestrictions);q.resetInherited();if(!m.permissionsEdited){q.resetDirect()}if(!w){return}for(var x=0,z=w.permissions.length;x<z;x++){var F=w.permissions[x];var B=F[0].toLowerCase();var u=F[1];var D=F[2];var v=(u==g)?w.users[D]:w.groups[D];var E=F[3];var C=F[4];var y=+E&&E!=AJS.params.pageId;if(m.permissionsEdited&&!y){continue}var A={owningId:E,entity:v.entity,report:v.report};A[B]=true;A.owningTitle=C;A.inherited=y;q.addRow(A,B)}if(w.permissions.length>0){Confluence.Binder.userHover()}q.saveBackup();q.refresh()}function h(){var A=q.makePermissionMap(false),v=d("#rte-button-restrictions .icon"),z=d("#rte-button-restrictions .trigger-text"),x=[].concat(A.group.view).concat(A.user.view).concat(A.group.edit).concat(A.user.edit);if(x.length){v.removeClass("icon-unlocked").addClass("icon-locked");z.text("Restricted")}else{v.removeClass("icon-locked").addClass("icon-unlocked");z.text("Unrestricted")}m.permissionsEdited=false;var y=m.makePermissionStrings();for(var u in y){var w=y[u];d("#"+u).val(w);if(m.originalPermissions[u]!=w){m.permissionsEdited=true}}}function p(){k.validator.resetValidationErrors();q.clearHighlight();a.hide();window.scrollTo(m.bookmark.scrollX,m.bookmark.scrollY)}function f(){var v=d(".permissions-update-button").disable();if(n()){h();v.enable();p()}else{var u=m.makePermissionStrings();u.pageId=AJS.params.pageId;d("#waitImage").show();AJS.safe.post(j+"/pages/setpagepermissions.action",u,function(w){d("#waitImage").hide();AJS.setVisible("#content-metadata-page-restrictions",w.hasPermissions);v.enable();p()},"json")}}function c(){p();if(n()){q.restoreBackup()}return false}function o(){a=AJS.ConfluenceDialog({width:840,height:530,id:"update-page-restrictions-dialog",onCancel:c});a.addHeader("Page Restrictions");a.addPanel("Page Permissions Editor",AJS.renderTemplate("page-permissions-div"));a.addButton("Save",f,"permissions-update-button");a.addCancel("Close",c);a.popup.element.find(".dialog-title").prepend(Confluence.Templates.PagePermissions.helpLink());k=AJS.PagePermissions.Controls(m);var u=d("#page-permissions-table").bind("changed",r);q=AJS.PagePermissions.Table(u);m.table=q}function i(u){m.bookmark={scrollX:document.documentElement.scrollLeft,scrollY:document.documentElement.scrollTop};b();k.setVisible(u.userCanEditRestrictions);AJS.setVisible(".permissions-update-button",u.userCanEditRestrictions);a.show()}function t(z,w){if(!m.originalPermissions&&n()){m.originalPermissions=Confluence.Editor.getPagePermissions()}var x=(w&&d("#newSpaceKey").val())||AJS.Meta.get("space-key");var u=(w&&d("#parentPageString").val())||"";var y={pageId:AJS.Meta.get("page-id"),parentPageId:AJS.Meta.get("parent-page-id"),parentPageTitle:u,spaceKey:x};var v;if(AJS.params.newPage){y.draftId=AJS.Meta.get("content-id")}d("#waitImage").show();if(n()){v=j+"/pages/geteditpagepermissions.action";d.extend(y,Confluence.Editor.getPagePermissions())}else{v=j+"/pages/getpagepermissions.action"}d.getJSON(v,y,function(A){d("#waitImage").hide();e(A);z(A)})}function l(u){a||o();t(i,u)}function r(){d(".permissions-update-button").enable();d(".button-panel-cancel-link").text("Cancel")}function b(){d(".permissions-update-button").disable();d(".button-panel-cancel-link").text("Close")}d("#content-metadata-page-restrictions, #action-page-permissions-link").click(function(u){u.preventDefault();l(false)});d("#rte-button-restrictions").live("click",function(u){u.preventDefault();l(true)});if(n()){m.originalPermissions=Confluence.Editor.getPagePermissions()}});
AJS.PagePermissions.Table=function(b){var d=AJS.$,c=this;var a=false;this.refresh=function(){var h=b.find(".view-permission-row");var g=b.find(".edit-permission-row");var i=h.length>0;var f=g.length>0;AJS.setVisible("#page-permissions-no-views",!i);AJS.setVisible("#page-permissions-no-edits",!f);b.each(function(){d(".view-permission-row .page-permissions-marker-cell span",this).removeClass("first-of-type").filter(":first").addClass("first-of-type");d(".edit-permission-row .page-permissions-marker-cell span",this).removeClass("first-of-type").filter(":first").addClass("first-of-type")});c.clearHighlight()};this.saveBackup=function(){this.copy=b.children().clone(true)};this.restoreBackup=function(){b.children().remove();b.append(this.copy)};this.addCount=0;this.makePermissionMap=function(g){var f={user:{view:[],edit:[]},group:{view:[],edit:[]}};b.find("tr.view-permission-row, tr.edit-permission-row").each(function(){var l=d(this);var i=l.is(".user-permission")?"user":"group";var k=l.is(".view-permission-row")?"view":"edit";var j=(g&&(i=="user"))?"display-name":"name";var h=l.find(".permission-entity-"+j).text();f[i][k].push(h)});return f};this.makePermissionMapForCheckboxes=function(g){var f={user:{view:[],edit:[]},group:{view:[],edit:[]}};b.find("tr.view-permission-row").each(function(){var m=d(this);var i=m.find(".view-permission-cell input").prop("checked");var l=m.find(".edit-permission-cell input").prop("checked");if(i||l){var j=m.hasClass("user-permission")?"user":"group";var k=(g&&(j=="user"))?"display-name":"name";var h=m.find(".permission-entity-"+k).text();if(i&&(g||!m.hasClass("readonly-permission"))){f[j].view.push(h)}if(l){f[j].edit.push(h)}}});return f};var e=function(i,f){var h=i.find("td.permission-entity");var g=Confluence.getContextPath()+(f.profilePictureDownloadPath||"/images/icons/avatar_"+f.type+"_32.png");h.find("img").attr("src",g);h.find(".permission-entity-name").text(f.name);if(f.type=="group"){h.find(".permission-entity-name-wrap").hide()}h.find(".permission-entity-display-name").text(f.fullName||f.name);var j=h.find("span.entity-container");if(f.type=="user"){j.addClass("content-hover user-hover-trigger").attr("data-username",f.name)}};this.addRow=function(q,l){var i=q.entity;var h=d(Confluence.Templates.PagePermissions.permissionRow());h.addClass(i.type+"-permission");h.addClass(l+"-permission-row");if(l=="edit"){h.find(".page-permissions-marker-cell span").text("Editing restricted to:")}e(h,i);var j=!a||q.inherited||q.readOnly;if(j){h.addClass("readonly-permission")}var m=h.find(".remove-permission-link");if(j||!a){m.remove()}else{m.attr("id","remove-permission-"+this.addCount++);m.click(function(s){d(this).closest("tr").remove();c.changedByUser();return AJS.stopEvent(s)})}if(q.inherited){var n=d(".page-permissions-table[owningTitle='"+AJS.escape(q.owningTitle)+"']");if(!n.length){var g=d(Confluence.Templates.PagePermissions.inheritedPermissionsTable());n=g.find("table");n.attr("owningTitle",AJS.escape(q.owningTitle));var k=g.find(".page-inherited-permissions-table-desc");var o=k.find("a"),f=Confluence.getContextPath()+"/pages/viewpage.action?pageId="+q.owningId;o.attr("href",f).attr("target","_blank").text(q.owningTitle).addClass("page-perms-owningTitle");var r=d("#content-title");var p=r.length?r.val():AJS.Meta.get("page-title");k.find("span").addClass(".page-perms-inherited-this-page").text(p);d("#page-inherited-permissions-tables").append(g)}n.append(h);d("#page-inherited-permissions-table-div").removeClass("hidden")}else{if(l=="view"){d("#page-permissions-no-edits").before(h)}else{b.append(h)}}};this.changedByUser=function(){b.trigger("changed");c.clearHighlight();c.refresh()};this.resetDirect=function(){b.find("tr:not(.marker-row)").remove();c.addCount=0};this.resetInherited=function(){d("#page-inherited-permissions-tables div").remove()};b.click(function(f){c.clearHighlight()});d("#page-inherited-permissions-table-desc").click(function(){d(".page-inheritance-togglable").toggleClass("hidden");d(".icon",this).toggleClass("twisty-open").toggleClass("twisty-closed")});this.highlightEntityRow=function(f,h){var g=b.find("."+h+"-permission-row").filter(function(){return d(".permission-entity-name",this).text()==f.name});d("#page-permissions-tables").simpleScrollTo(g);g.addClass("highlighted-permission")};this.clearHighlight=function(){d("tr.highlighted-permission").removeClass("highlighted-permission")};this.allowEditing=function(f){a=f};return this};
AJS.PagePermissions.Controls=function(b){var d=AJS.$;d("div#page-permissions-error-div span.icon-close").click(function(){d("div#page-permissions-error-div").addClass("hidden")});var c={handleNonExistentEntityNames:function(g){if(!g||!g.length){return}var f=g.join(", ");var h="Unknown user or group:"+" "+f;d("div#page-permissions-error-div").find("p").text(h).end().removeClass("hidden")},isDuplicateEntityForType:function(f,h){var g=d("#page-permissions-table ."+h+"-permission-row .permission-entity-name").filter(function(){return d(this).text()==f.name});return g.length>0},resetValidationErrors:function(){d("div#page-permissions-error-div").addClass("hidden")}};var a=(function(){var f=d("#page-permissions-names-input");var h=d("#page-permissions-names-hidden");var g=f.val();f.keypress(function(i){if(i.keyCode==Event.KEY_RETURN){e();f.focus();return false}return true});f.bind("selected.autocomplete-user",function(j,i){var k=i.content.username;h.val(unescape(k.replace(/\+/g," ")));f.val("");e();j.preventDefault()});f.focus(function(){var k=f.next(".aui-dd-parent");if(!k.length){return}k.show();var i=f.offset().left;if(k.offset().left!=i){k.css("margin-left",0);var m=i-k.offset().left;k.css("margin-left",m+"px")}var l=f.offset().top+f.outerHeight();if(k.offset().top!=l){k.css("margin-top",0);var j=l-k.offset().top;k.css("margin-top",j+"px")}k.css({width:f.outerWidth()});k.hide()});return{getValue:function(){var i=h.val();if(i){h.val("")}else{i=f.val();if(i==g){i=""}}return i},removeFromNameInput:function(m){if(!m){return}var l=f.val();if(!l){return}var j=l.split(",");for(var k=0;k<j.length;k++){j[k]=d.trim(j[k])}j=d.grep(j,function(i){return i!=""&&i!=m});if(j.length){f.val(j.join(", "))}else{if(document.activeElement==f[0]){f.val("")}}}}})();var e=function(){c.resetValidationErrors();b.table.clearHighlight();var f=a.getValue();if(!f){return}b.addNames(f)};d("#page-permissions-choose-me").click(function(f){c.resetValidationErrors();b.addNames(d(this).find(".remote-user-name").text());return AJS.stopEvent(f)});d("#permissions-error-div-close").click(function(f){c.resetValidationErrors();return AJS.stopEvent(f)});d("#add-typed-names").click(e);return{validator:c,nameField:a,setVisible:function(f){AJS.setVisible("#page-permissions-editor-form",f);AJS.setVisible(".remove-permission-link",f)},isShowing:function(){return !d("#page-permissions-editor-form").hasClass("hidden")},getPermissionType:function(){return !!d("#restrictViewRadio:checked").length?"view":"edit"}}};
// This file was automatically generated from page-permissions.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PagePermissions == 'undefined') { Confluence.Templates.PagePermissions = {}; }


Confluence.Templates.PagePermissions.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "http://docs.atlassian.com/confluence/docs-50/Page+Restrictions"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PagePermissions.inheritedPermissionsTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="page-inherited-permissions-owner-div"><div class="page-inherited-permissions-table-desc">', "Viewing restrictions apply to \u201c\x3ca\x3e\x3c/a\x3e\u201d. In order to see \u201c\x3cspan\x3e\x3c/span\x3e\u201d, a user must be in the following list of users and groups:", '</div><table class="page-permissions-table"></table></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PagePermissions.permissionRow = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr class="permission-row"><td class="page-permissions-marker-cell"><span>', soy.$$escapeHtml("Viewing restricted to:"), '</span></td><td class="permission-entity" nowrap="true"><span class="entity-container"><img class="permission-entity-picture"/><span class="permission-entity-display-name"></span><span class="permission-entity-name-wrap">&nbsp;(<span class="permission-entity-name"></span>)</span></span></td><td class="permission-detail-column"><div class="permission-remove-div"><a href="#" class="remove-permission-link">', soy.$$escapeHtml("Remove restriction"), '</a></div></td></tr>');
  return opt_sb ? '' : output.toString();
};

AJS.toInit(function(c){if(!c("link[rel=canonical]").length){return}var b=null;var a=function(){b=new AJS.Dialog(600,210,"link-page-popup").addHeader("Link to this Page").addPanel("Link to this Page","<form id='link-page-popup-form' class='aui'><fieldset></fieldset></form>").addCancel("Close",function(f){b.hide();return false});if(Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.enabled){b.addHelpText(AJS.format("Shortcut tip: Pressing \u003cb>{0}\u003c\/b> also opens this dialog box","k"))}var d=[{label:"Link",id:"link",value:c("link[rel=canonical]").attr("href")},{label:"Tiny Link",id:"tiny-link",value:c("link[rel=shortlink]").attr("href")}];c.each(d,function(){c("#link-page-popup-form fieldset").append(AJS.format("<div class='field-group'><label for=''link-popup-field-{0}''>{1}:</label><input id=''link-popup-field-{0}'' readonly=''readonly'' value='''' class=''text'' type=''text''></div>",this.id,this.label)).find("input:last").val(this.value)});var e=c("#link-page-popup-form fieldset input.text");e.focus(function(){c(this).select()});e.mouseup(function(f){f.preventDefault()})};c("#link-to-page-link").click(function(d){if(!b){a()}var f=c(this).parents(".ajs-drop-down")[0];f&&f.hide();b.show();c("#link-page-popup-form #link-popup-field-tiny-link").select();return AJS.stopEvent(d)})});
(function(A){AJS.moreLinkClickHandler=function(C){var B=A(this),D=B.attr("href"),E=B.closest(".more-link-container");
if(!E.length){throw new Error("Could not find more link container when one was expected.")
}E.addClass("loading");
A.get(D,function(H){var G=A(H).wrap("<div/>").parent();
var F=G.children("ul").children("li");
E.closest(".results-container").children("ul").append(F);
var I=G.find(".more-link-container");
if(I.length===0){E.remove()
}else{E.replaceWith(I)
}if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()
}});
return AJS.stopEvent(C)
}
})(AJS.$);
AJS.toInit(function(A){A(".results-container").on("click",".more-link",AJS.moreLinkClickHandler)
});
AJS.toInit(function(A){A("select.content-filter").change(function(){A(".filter-control .waiting-image").removeClass("hidden");
var B=A(this);
A.get(AJS.params.changesUrl,{contentType:A(this).val()},function(E){var D=A(E);
var C=B.parent();
C.parent().siblings(".results-container").children("ul").html(D);
A(".waiting-image",C).addClass("hidden");
A(".more-link",D).click(AJS.moreLinkClickHandler)
})
})
});
AJS.toInit(function(e){var b=Confluence.storageManager("personal-sidebar"),d=e("#personal-info-sidebar"),a=d.height(),c=e("#content");function f(){d.toggleClass("collapsed");c.toggleClass("sidebar-collapsed");d.trigger("toggled")}if(b.getItemAsBoolean("show")){f()}e(".sidebar-collapse").click(function(g){f();b.setItem("show",d.hasClass("collapsed"));return AJS.stopEvent(g)}).height(a)});
(function(B){var L,T,Q,M,d,m,J,A,O,z,C=0,H={},j=[],e=0,G={},y=[],f=null,o=new Image(),i=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,k=/[^\.]\.(swf)\s*$/i,p,N=1,h=0,t="",b,c,P=false,s=B.extend(B("<div/>")[0],{prop:0}),S=B.browser.msie&&B.browser.version<7&&!window.XMLHttpRequest,r=function(){T.hide();o.onerror=o.onload=null;if(f){f.abort()}L.empty()},x=function(){if(false===H.onError(j,C,H)){T.hide();P=false;return}H.titleShow=false;H.width="auto";H.height="auto";L.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');n()},w=function(){var Z=j[C],W,Y,ab,aa,V,X;r();H=B.extend({},B.fn.fancybox.defaults,(typeof B(Z).data("fancybox")=="undefined"?H:B(Z).data("fancybox")));X=H.onStart(j,C,H);if(X===false){P=false;return}else{if(typeof X=="object"){H=B.extend(H,X)}}ab=H.title||(Z.nodeName?B(Z).attr("title"):Z.title)||"";H.orig=B(Z).is("img")&&B(Z);if(Z.nodeName&&!H.orig){H.orig=B(Z).children("img:first").length?B(Z).children("img:first"):B(Z)}if(ab===""&&H.orig&&H.titleFromAlt){ab=H.orig.attr("alt")}W=H.href||(Z.nodeName?B(Z).attr("href"):Z.href)||null;if((/^(?:javascript)/i).test(W)||W=="#"){W=null}if(H.type){Y=H.type;if(!W){W=H.content}}else{if(H.content){Y="html"}else{if(H.dataAttr){Y="dataAttribute";W=H.orig.attr("data-"+H.dataAttr)}else{if(W){if(W.match(i)){Y="image"}else{if(W.match(k)){Y="swf"}else{if(B(Z).hasClass("iframe")){Y="iframe"}else{if(W.indexOf("#")===0){Y="inline"}else{Y="ajax"}}}}}}}}if(!Y){x();return}if(Y=="inline"){Z=W.substr(W.indexOf("#"));Y=B(Z).length>0?"inline":"ajax"}H.type=Y;H.href=W;H.title=ab;if(H.autoDimensions){if(H.type=="html"||H.type=="inline"||H.type=="ajax"){H.width="auto";H.height="auto"}else{H.autoDimensions=false}}if(H.modal){H.overlayShow=true;H.hideOnOverlayClick=false;H.hideOnContentClick=false;H.enableEscapeButton=false;H.showCloseButton=false}H.padding=parseInt(H.padding,10);H.margin=parseInt(H.margin,10);L.css("padding",(H.padding+H.margin));B(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){B(this).replaceWith(m.children())});switch(Y){case"html":L.html(H.content);n();break;case"inline":if(B(Z).parent().is("#fancybox-content")===true){P=false;return}B('<div class="fancybox-inline-tmp" />').hide().insertBefore(B(Z)).bind("fancybox-cleanup",function(){B(this).replaceWith(m.children())}).bind("fancybox-cancel",function(){B(this).replaceWith(L.children())});B(Z).appendTo(L);n();break;case"image":case"dataAttribute":P=false;B.fancybox.showActivity();o=new Image();o.onerror=function(){x()};o.onload=function(){P=true;o.onerror=o.onload=null;F()};o.src=W;break;case"swf":H.scrolling="no";aa='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+H.width+'" height="'+H.height+'"><param name="movie" value="'+W+'"></param>';V="";B.each(H.swf,function(ac,ad){aa+='<param name="'+ac+'" value="'+ad+'"></param>';V+=" "+ac+'="'+ad+'"'});aa+='<embed src="'+W+'" type="application/x-shockwave-flash" width="'+H.width+'" height="'+H.height+'"'+V+"></embed></object>";L.html(aa);n();break;case"ajax":P=false;B.fancybox.showActivity();H.ajax.win=H.ajax.success;f=B.ajax(B.extend({},H.ajax,{url:W,data:H.ajax.data||{},error:function(ac,ae,ad){if(ac.status>0){x()}},success:function(ad,af,ac){var ae=typeof ac=="object"?ac:f;if(ae.status==200){if(typeof H.ajax.win=="function"){X=H.ajax.win(W,ad,af,ac);if(X===false){T.hide();return}else{if(typeof X=="string"||typeof X=="object"){ad=X}}}L.html(ad);n()}}}));break;case"iframe":E();break}},n=function(){var V=H.width,W=H.height;if(V.toString().indexOf("%")>-1){V=parseInt((B(window).width()-(H.margin*2))*parseFloat(V)/100,10)+"px"}else{V=V=="auto"?"auto":V+"px"}if(W.toString().indexOf("%")>-1){W=parseInt((B(window).height()-(H.margin*2))*parseFloat(W)/100,10)+"px"}else{W=W=="auto"?"auto":W+"px"}L.wrapInner('<div style="width:'+V+";height:"+W+";overflow: "+(H.scrolling=="auto"?"auto":(H.scrolling=="yes"?"scroll":"hidden"))+';position:relative;"></div>');H.width=L.width();H.height=L.height();E()},F=function(){H.width=o.width;H.height=o.height;B("<img />").attr({id:"fancybox-img",src:o.src,alt:H.title}).appendTo(L);E()},E=function(){var W,V;T.hide();if(M.is(":visible")&&false===G.onCleanup(y,e,G)){B.event.trigger("fancybox-cancel");P=false;return}P=true;B(m.add(Q)).unbind();B(window).unbind("resize.fb scroll.fb");B(document).unbind("keydown.fb");if(M.is(":visible")&&G.titlePosition!=="outside"){M.css("height",M.height())}y=j;e=C;G=H;if(G.overlayShow){Q.css({"background-color":G.overlayColor,opacity:G.overlayOpacity,cursor:G.hideOnOverlayClick?"pointer":"auto",height:B(document).height()});if(!Q.is(":visible")){if(S){B("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"})}Q.show()}}else{Q.hide()}c=R();l();if(M.is(":visible")){B(J.add(O).add(z)).hide();W=M.position();b={top:W.top,left:W.left,width:M.width(),height:M.height()};V=(b.width==c.width&&b.height==c.height);m.fadeTo(G.changeFade,0.3,function(){var X=function(){m.html(L.contents()).fadeTo(G.changeFade,1,v)};B.event.trigger("fancybox-change");m.empty().removeAttr("filter").css({"border-width":G.padding,width:c.width-G.padding*2,height:H.autoDimensions?"auto":c.height-h-G.padding*2});if(V){X()}else{s.prop=0;B(s).animate({prop:1},{duration:G.changeSpeed,easing:G.easingChange,step:U,complete:X})}});return}M.removeAttr("style");m.css("border-width",G.padding);if(G.transitionIn=="elastic"){b=I();m.html(L.contents());M.show();if(G.opacity){c.opacity=0}s.prop=0;B(s).animate({prop:1},{duration:G.speedIn,easing:G.easingIn,step:U,complete:v});return}if(G.titlePosition=="inside"&&h>0){A.show()}m.css({width:c.width-G.padding*2,height:H.autoDimensions?"auto":c.height-h-G.padding*2}).html(L.contents());M.css(c).fadeIn(G.transitionIn=="none"?0:G.speedIn,v)},D=function(V){if(V&&V.length){if(G.titlePosition=="float"){return'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+V+'</td><td id="fancybox-title-float-right"></td></tr></table>'}return'<div id="fancybox-title-'+G.titlePosition+'">'+V+"</div>"}return false},l=function(){t=G.title||"";h=0;A.empty().removeAttr("style").removeClass();if(G.titleShow===false){A.hide();return}t=B.isFunction(G.titleFormat)?G.titleFormat(t,y,e,G):D(t);if(!t||t===""){A.hide();return}A.addClass("fancybox-title-"+G.titlePosition).html(t).appendTo("body").show();switch(G.titlePosition){case"inside":A.css({width:c.width-(G.padding*2),marginLeft:G.padding,marginRight:G.padding});h=A.outerHeight(true);A.appendTo(d);c.height+=h;break;case"over":A.css({marginLeft:G.padding,width:c.width-(G.padding*2),bottom:G.padding}).appendTo(d);break;case"float":A.css("left",parseInt((A.width()-c.width-40)/2,10)*-1).appendTo(M);break;default:A.css({width:c.width-(G.padding*2),paddingLeft:G.padding,paddingRight:G.padding}).appendTo(M);break}A.hide()},g=function(){if(G.enableEscapeButton||G.enableKeyboardNav){B(document).bind("keydown.fb",function(V){if(V.keyCode==27&&G.enableEscapeButton){V.preventDefault();B.fancybox.close()}else{if((V.keyCode==37||V.keyCode==39)&&G.enableKeyboardNav&&V.target.tagName!=="INPUT"&&V.target.tagName!=="TEXTAREA"&&V.target.tagName!=="SELECT"){V.preventDefault();B.fancybox[V.keyCode==37?"prev":"next"]()}}})}if(!G.showNavArrows){O.hide();z.hide();return}if((G.cyclic&&y.length>1)||e!==0){O.show()}if((G.cyclic&&y.length>1)||e!=(y.length-1)){z.show()}},v=function(){if(!B.support.opacity){m.get(0).style.removeAttribute("filter");M.get(0).style.removeAttribute("filter")}if(H.autoDimensions){m.css("height","auto")}M.css("height","auto");if(t&&t.length){A.show()}if(G.showCloseButton){J.show()}g();if(G.hideOnContentClick){m.bind("click",B.fancybox.close)}if(G.hideOnOverlayClick){Q.bind("click",B.fancybox.close)}B(window).bind("resize.fb",B.fancybox.resize);if(G.centerOnScroll){B(window).bind("scroll.fb",B.fancybox.center)}if(G.type=="iframe"){B('<iframe id="fancybox-frame" name="fancybox-frame'+new Date().getTime()+'" frameborder="0" hspace="0" '+(B.browser.msie?'allowtransparency="true""':"")+' scrolling="'+H.scrolling+'" src="'+G.href+'"></iframe>').appendTo(m)}M.show();P=false;B.fancybox.center();G.onComplete(y,e,G);K()},K=function(){var V,W;if((y.length-1)>e){V=y[e+1].href;if(typeof V!=="undefined"&&V.match(i)){W=new Image();W.src=V}}if(e>0){V=y[e-1].href;if(typeof V!=="undefined"&&V.match(i)){W=new Image();W.src=V}}},U=function(W){var V={width:parseInt(b.width+(c.width-b.width)*W,10),height:parseInt(b.height+(c.height-b.height)*W,10),top:parseInt(b.top+(c.top-b.top)*W,10),left:parseInt(b.left+(c.left-b.left)*W,10)};if(typeof c.opacity!=="undefined"){V.opacity=W<0.5?0.5:W}M.css(V);m.css({width:V.width-G.padding*2,height:V.height-(h*W)-G.padding*2})},u=function(){return[B(window).width()-(G.margin*2),B(window).height()-(G.margin*2),B(document).scrollLeft()+G.margin,B(document).scrollTop()+G.margin]},R=function(){var V=u(),Z={},W=G.autoScale,X=G.padding*2,Y;if(G.width.toString().indexOf("%")>-1){Z.width=parseInt((V[0]*parseFloat(G.width))/100,10)}else{Z.width=G.width+X}if(G.height.toString().indexOf("%")>-1){Z.height=parseInt((V[1]*parseFloat(G.height))/100,10)}else{Z.height=G.height+X}if(W&&(Z.width>V[0]||Z.height>V[1])){if(H.type=="image"||H.type=="dataAttribute"||H.type=="swf"){Y=(G.width)/(G.height);if((Z.width)>V[0]){Z.width=V[0];Z.height=parseInt(((Z.width-X)/Y)+X,10)}if((Z.height)>V[1]){Z.height=V[1];Z.width=parseInt(((Z.height-X)*Y)+X,10)}}else{Z.width=Math.min(Z.width,V[0]);Z.height=Math.min(Z.height,V[1])}}Z.top=parseInt(Math.max(V[3]-20,V[3]+((V[1]-Z.height-40)*0.5)),10);Z.left=parseInt(Math.max(V[2]-20,V[2]+((V[0]-Z.width-40)*0.5)),10);return Z},q=function(V){var W=V.offset();W.top+=parseInt(V.css("paddingTop"),10)||0;W.left+=parseInt(V.css("paddingLeft"),10)||0;W.top+=parseInt(V.css("border-top-width"),10)||0;W.left+=parseInt(V.css("border-left-width"),10)||0;W.width=V.width();W.height=V.height();return W},I=function(){var Y=H.orig?B(H.orig):false,X={},W,V;if(Y&&Y.length){W=q(Y);X={width:W.width+(G.padding*2),height:W.height+(G.padding*2),top:W.top-G.padding-20,left:W.left-G.padding-20}}else{V=u();X={width:G.padding*2,height:G.padding*2,top:parseInt(V[3]+V[1]*0.5,10),left:parseInt(V[2]+V[0]*0.5,10)}}return X},a=function(){if(!T.is(":visible")){clearInterval(p);return}B("div",T).css("top",(N*-40)+"px");N=(N+1)%12};B.fn.fancybox=function(V){if(!B(this).length){return this}B(this).data("fancybox",B.extend({},V,(B.metadata?B(this).metadata():{}))).unbind("click.fb").bind("click.fb",function(X){X.preventDefault();if(P){return}P=true;B(this).blur();j=[];C=0;var W=B(this).attr("rel")||"";if(!W||W==""||W==="nofollow"){j.push(this)}else{j=B("a[rel="+W+"], area[rel="+W+"]");C=j.index(this)}w();return});return this};B.fancybox=function(Y){var X;if(P){return}P=true;X=typeof arguments[1]!=="undefined"?arguments[1]:{};j=[];C=parseInt(X.index,10)||0;if(B.isArray(Y)){for(var W=0,V=Y.length;W<V;W++){if(typeof Y[W]=="object"){B(Y[W]).data("fancybox",B.extend({},X,Y[W]))}else{Y[W]=B({}).data("fancybox",B.extend({content:Y[W]},X))}}j=jQuery.merge(j,Y)}else{if(typeof Y=="object"){B(Y).data("fancybox",B.extend({},X,Y))}else{Y=B({}).data("fancybox",B.extend({content:Y},X))}j.push(Y)}if(C>j.length||C<0){C=0}w()};B.fancybox.showActivity=function(){clearInterval(p);T.show();p=setInterval(a,66)};B.fancybox.hideActivity=function(){T.hide()};B.fancybox.next=function(){return B.fancybox.pos(e+1)};B.fancybox.prev=function(){return B.fancybox.pos(e-1)};B.fancybox.pos=function(V){if(P){return}V=parseInt(V,10);j=y;if(V>-1&&V<y.length){C=V;w()}else{if(G.cyclic&&y.length>1){C=V>=y.length?0:y.length-1;w()}}return};B.fancybox.cancel=function(){if(P){return}P=true;B.event.trigger("fancybox-cancel");r();H.onCancel(j,C,H);P=false};B.fancybox.close=function(){if(P||M.is(":hidden")){return}P=true;if(G&&false===G.onCleanup(y,e,G)){P=false;return}r();B(J.add(O).add(z)).hide();B(m.add(Q)).unbind();B(window).unbind("resize.fb scroll.fb");B(document).unbind("keydown.fb");m.find("iframe").attr("src",S&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");if(G.titlePosition!=="inside"){A.empty()}M.stop();function V(){Q.fadeOut("fast");A.empty().hide();M.hide();B.event.trigger("fancybox-cleanup");m.empty();G.onClosed(y,e,G);y=H=[];e=C=0;G=H={};P=false}if(G.transitionOut=="elastic"){b=I();var W=M.position();c={top:W.top,left:W.left,width:M.width(),height:M.height()};if(G.opacity){c.opacity=1}A.empty().hide();s.prop=1;B(s).animate({prop:0},{duration:G.speedOut,easing:G.easingOut,step:U,complete:V})}else{M.fadeOut(G.transitionOut=="none"?0:G.speedOut,V)}};B.fancybox.resize=function(){if(Q.is(":visible")){Q.css("height",B(document).height())}B.fancybox.center(true)};B.fancybox.center=function(){var V,W;if(P){return}W=arguments[0]===true?1:0;V=u();if(!W&&(M.width()>V[0]||M.height()>V[1])){return}M.stop().animate({top:""+parseInt(Math.max(V[3]-20,V[3]+((V[1]-m.height()-40)*0.5)-G.padding),10),left:""+parseInt(Math.max(V[2]-20,V[2]+((V[0]-m.width()-40)*0.5)-G.padding),10)},typeof arguments[0]=="number"?arguments[0]:200)};B.fancybox.init=function(){if(B("#fancybox-wrap").length){return}B("body").append(L=B('<div id="fancybox-tmp"></div>'),T=B('<div id="fancybox-loading"><div></div></div>'),Q=B('<div id="fancybox-overlay"></div>'),M=B('<div id="fancybox-wrap"></div>'));d=B('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(M);d.append(m=B('<div id="fancybox-content"></div>'),J=B('<a id="fancybox-close"></a>'),A=B('<div id="fancybox-title"></div>'),O=B('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),z=B('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));J.click(B.fancybox.close);T.click(B.fancybox.cancel);O.click(function(V){V.preventDefault();B.fancybox.prev()});z.click(function(V){V.preventDefault();B.fancybox.next()});if(B.fn.mousewheel){M.bind("mousewheel.fb",function(V,W){if(P){V.preventDefault()}else{if(B(V.target).get(0).clientHeight==0||B(V.target).get(0).scrollHeight===B(V.target).get(0).clientHeight){V.preventDefault();B.fancybox[W>0?"prev":"next"]()}}})}if(!B.support.opacity){M.addClass("fancybox-ie")}if(S){T.addClass("fancybox-ie6");M.addClass("fancybox-ie6");B('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(d)}};B.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};B(document).ready(function(){B.fancybox.init()})})(jQuery);
AJS.toInit(function(c){if(!Confluence.Templates.Labels){return}var b=null;var d=function(){c("#"+b.id).find(".label-list").removeClass("editable");b.hide();return false};var a=function(){b=AJS.ConfluenceDialog({width:600,height:233,id:"edit-labels-dialog",onCancel:d});b.addHeader("Labels");b.addPanel("Label Editor",Confluence.Templates.Labels.dialog({staticResourceUrlPrefix:AJS.Meta.get("static-resource-url-prefix")}));b.addCancel("Close",d);b.addHelpText("Shortcut tip: In page view, pressing \u003cb>{shortcut}\u003c\/b> also opens this dialog box",{shortcut:"l"});b.popup.element.find(".dialog-title").prepend(Confluence.Templates.Labels.helpLink());c("#add-labels-form").submit(function(h){var f=c("#labelsString");h.preventDefault();var g=c("#dialog-label-list");AJS.Labels.addLabel(f.val(),g.attr("entityid"),g.attr("entitytype"));f.focus();setTimeout(function(){c("#labelsAutocompleteList").find(".aui-dropdown").addClass("hidden")})});AJS.Labels.bindAutocomplete()};c("#rte-button-labels").live("click",function(f){AJS.Labels.openDialog()});c(".show-labels-editor").click(function(g){g.preventDefault();var f=c(g.target).closest(".labels-section-content");AJS.Labels.openDialog(f)});AJS.Labels.bindOpenDialog=function(e){e.click(function(g){g.preventDefault();var f=c(g.target).closest(".labels-section-content");if(f.length){AJS.Labels.openDialog(f)}else{AJS.Labels.openDialog()}})};AJS.Labels.openDialog=function(f){var k,i,l,e,h;if(!b){a()}if(f){i=f.attr("entityid");k=f.attr("entitytype")}else{k=AJS.Meta.get("content-type");i=AJS.Meta.get("page-id")}if(k=="attachment"){l="attachment"}else{if(k=="template"){l="template"}else{l="content"}}e=AJS.Meta.get("context-path")+"/rest/ui/1.0/"+l+"/"+i+"/labels?prefix=global&prefix=my";h=c("#dialog-label-list");h.attr("entityid",i);h.attr("entitytype",k);var g=function(){b.show();c("#labelsString").val("").focus()};var j=function(m){h.html(Confluence.Templates.Labels.dialogLabelList({labels:m,spaceKey:AJS.Meta.get("space-key")}));g()};if(AJS.Labels.isNewPage()){if(!h.find("ul").children().size()){j([])}else{g()}}else{AJS.$.ajax({url:e,success:j,cache:false,error:function(m,n){AJS.Labels.setLabelError("Unable to fetch current labels from the server.");g()}})}c("#dialog-label-list").attr("data-ready","true")}});
// This file was automatically generated from labels-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Labels == 'undefined') { Confluence.Templates.Labels = {}; }


Confluence.Templates.Labels.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "http://docs.atlassian.com/confluence/docs-50/Adding+Labels"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.dialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="labels-dialog"><div class="labels-editor"><form method="GET" action="" id="add-labels-form" class="aui"><div id="labelOperationErrorContainer"><div class="errorMessage" id="labelOperationErrorMessage"></div></div><div id="label-input-fields"><input autocomplete="off" id="labelsString" name="labelsString" value="labelsString" class="text"><input id="add-labels-editor-button" type="submit" class="add-labels aui-button" value="', soy.$$escapeHtml("Add"), '"></div><div id="labelsAutocompleteList" class="aui-dd-parent resize-to-input"></div><div id="dialog-label-list" class="labels-section-content"><!-- DIV placeholder for labels list, is copied into in labels-dialog.js --></div><div id="waitImageAndStatus"><img class="waiting" alt="Please wait" src="', soy.$$escapeHtml(opt_data.staticResourceUrlPrefix), '/images/icons/wait.gif">&nbsp;<span id="labelOperationStatus" class="smalltext"></span></div><div class="labels-tip"></div></form></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.labelsControl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="labels-editor"><span id="labels-section-title" class="label-title">', soy.$$escapeHtml("Labels"), ':</span>');
  Confluence.Templates.Labels.labelsSectionContent(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.labelsSectionContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="labels-section-content content-column" entityid="', soy.$$escapeHtml(opt_data.labelable.id), '" entitytype="', soy.$$escapeHtml(opt_data.labelable.type.type), '"><div class="labels-content"><ul class="label-list label-list-right"><li class="no-labels-message-container ', (opt_data.labels && opt_data.labels.length) ? 'hidden' : '', '"><span id="labels-section-title-none" class="no-labels-message">', soy.$$escapeHtml("No labels"), '</span></li>');
  Confluence.Templates.Labels.labels(soy.$$augmentData(opt_data, {spaceKey: opt_data.labelable.space[0].key}), output);
  output.append((opt_data.currentUser.id || opt_data.labelable.permissions.EDIT) ? '<li class="labels-edit-container"><a href="#" class="show-labels-editor editor-icon" title="' + soy.$$escapeHtml("Edit Labels") + '"><span class="icon icon-edit">' + soy.$$escapeHtml("Edit Labels") + '</span></a></li>' : '', '</ul></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.dialogLabelList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="label-list editable">');
  Confluence.Templates.Labels.labels(opt_data, output);
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.labels = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var labelList44 = opt_data.labels;
  var labelListLen44 = labelList44.length;
  for (var labelIndex44 = 0; labelIndex44 < labelListLen44; labelIndex44++) {
    var labelData44 = labelList44[labelIndex44];
    output.append('<li class="label-container"><span class="label confluence-label" data-label-id="', soy.$$escapeHtml(labelData44.id), '"><a href="', soy.$$escapeHtml("/confluence"), '/label/', soy.$$escapeHtml(opt_data.spaceKey), '/', soy.$$escapeHtml(labelData44.name), '" rel="tag">', (labelData44.prefix == 'global') ? soy.$$escapeHtml(labelData44.name) : soy.$$escapeHtml(labelData44.prefix) + ':' + soy.$$escapeHtml(labelData44.name), '</a> <a href="#" class="remove-label" title="', soy.$$escapeHtml("Delete"), '">&times;</a></span></li>');
  }
  return opt_sb ? '' : output.toString();
};

AJS.Labels=(function(g){var r={parse:function(t){var u=[],s=g(t);if(s.is(m.labelItem)){u.push(s[0])}else{s.find(m.labelItem).each(function(){u.push(this)})}return u},contains:function(u){var s=g(u),t=s.text(),x=s.attr("id"),v=o().first(),w;w=q()?":contains('"+t+"')":"["+m.idAttribute+"='"+x+"']";return !!v.find(m.labelItem).filter(w).size()},size:function(){return o().first().find(m.labelItem).size()}};var m={labelView:".label-list",labelItem:".label",noLabelsMessage:".no-labels-message",idAttribute:"data-label-id",labelsFormFieldId:AJS.Meta.get("labels-form-field-id")||"createPageLabelsString"};var p=Confluence.getContextPath(),a={index:p+"/labels/autocompletelabel.action?maxResults=3",create:p+"/json/addlabelactivity.action",validate:p+"/json/validatelabel.action",destroy:p+"/json/removelabelactivity.action"};var q=function(){return !!document.getElementById("createpageform")||!!document.getElementById("createpagetemplate")};var j=function(){return g(".space-administration").length};var h=0;function o(s,v){if(!(s&&v)){var t=g("#dialog-label-list");s=t.attr("entityid");v=t.attr("entitytype")}if(!(s&&v)){return g(m.labelView)}var u=g(".labels-section-content").filter(function(){return this.getAttribute("entityid")==s&&this.getAttribute("entitytype")==v});return u.find(m.labelView)}var f=function(s){var t=b();i();if(s&&s.promise){s.done(function(v,u){AJS.Meta.set("num-labels",r.size());l(u);g("#rte-button-labels").trigger("updateLabel")});s.done(d);s.fail(d);s.done(t);s.fail(t);s.done(function(v,u){u.each(function(){var w=g(this);w.find(".no-labels-message-container").toggleClass("hidden",w.find(".confluence-label").length>0)})})}return s};var b=function(){var s=g("#labelsString, #add-labels-editor-button");s.addClass("disabled");return function(){s.removeClass("disabled")}};var d=function(){g("#labelsString").val("")};var i=function(t){t=t||null;var s="#labelOperationErrorMessage";g(s).empty().toggle(!!t);AJS.messages.warning(s,{body:t})};var l=function(s){s.each(function(){var v=g(this),u=v.find("li").size(),t=v.siblings(m.noLabelsMessage);t.toggle(!u)})};var n=function(t,s,x){if(!t){return false}var u=g("#add-labels-editor-button");u.prop("disabled",true);var w={type:"POST",dataType:"json",data:{}},y,v=g.Deferred();w.url=q()?a.validate:a.create;w.data.labelString=t;w.data.entityIdString=!s?AJS.params.pageId:s;if(x){w.data.entityType=x}if(AJS.Meta.get("space-key")){w.data.spaceKey=AJS.Meta.get("space-key")}y=AJS.safe.ajax(w);y.always(function(){u.prop("disabled",false)});y.done(function(C){var B=g("#dialog-label-list").find(".label-list"),A=o(s,x),z=g(r.parse(C.response));z.each(function(){if(r.contains(this)){return}var F,E=g("<li class='label-container'/>");if(q()){F=h+(new Date().getTime());this.setAttribute(m.idAttribute,F);h++}var D=E.append(this);B.append(D);A.each(function(){g(this).find(".labels-edit-container").before(D.clone())})});if(!C.success){i(C.response)}v.resolve(z,A.add(B))});y.fail(function(A,z){AJS.log(z);i(z=="timeout"?"Connecting to the server timed out, you\'ll need to try again":z);v.reject(z)});q()&&y.done(function(){var z=g("#"+m.labelsFormFieldId);var A=z.val();z.val(A+" "+t)});return v.promise()};var k=function(u,t,x){if(!u){return false}u=u.jquery?u:g(u);var z=u.attr(m.idAttribute),s=jQuery.trim(u.text()),y,w={type:"POST",dataType:"json",data:{}},v=g.Deferred();if(q()){y=g.Deferred();y.resolve()}else{if(j()){w.type="GET";w.url=p+"/spaces/removelabelfromspace.action";w.data.key=AJS.Meta.get("space-key");w.data.labelId=z;w.dataType="text"}else{w.url=a.destroy;w.data.labelIdString=z;w.data.entityIdString=!t?AJS.params.pageId:t;if(x){w.data.entityType=x}}y=AJS.safe.ajax(w)}y.done(function(){var A=o(t,x).find(m.labelItem);A=A.add(g("#dialog-label-list").find(".label-list "+m.labelItem));var B=A.filter("["+m.idAttribute+"='"+z+"']");B.fadeOut("normal",function(){var C=o(t,x);B.parent().remove();v.resolve(u,C)})});y.fail(function(B,A){AJS.log(A);i(A=="timeout"?"Connecting to the server timed out, you\'ll need to try again":A);v.reject(A)});q()&&v.done(function(){var A=g("#"+m.labelsFormFieldId);var B=A.val();var C=B.split(/\s+/);C=g.grep(C,function(D){return(!D||D==s)},true);A.val(C.join(" "))});return v.promise()};var e=function(){var x=g("#labelsString"),w=x.parents("#add-labels-form").length;if(!x.length){return}var u=function(y){g("#labelsAutocompleteList").append(y)};var v=function(G){if(G.find("a.label-suggestion").length){var H=g("span",G),D=g.data(H[0],"properties"),F=x.val(),z=[];if(w){z=F.split(/\s+/);z[z.length-1]=D.name;x.val(z.join(" "))}else{var E=AJS.Labels.queryTokens,K=-1,A,B="";for(var C=0,J=E.length;C<J;C++){B=E[C];A=F.lastIndexOf(B);if(A>K){K=A}}if(K!=-1){var I=F.substr(0,K);var y=F.substr(K+B.length).match(/^\s+/);if(y){I+=y[0]}x.val(I+D.name)}else{x.val(D.name)}}}};var s=function(){if(!g("#labelsAutocompleteList .label-suggestion").length||x.val()===""){this.hide()}else{if(!w){var A=g("#labelsAutocompleteList a.label-suggestion");for(var y=0,z=A.length;y<z;y++){A.get(y).href="#"}}}};var t="/labels/autocompletelabel.action?maxResults=3";g(window).bind("quicksearch.ajax-success",function(z,y){if(y.url==t){AJS.Labels.queryTokens=(y.json&&y.json.queryTokens)||[];return false}});g(window).bind("quicksearch.ajax-error",function(z,y){if(y.url==t){AJS.Labels.queryTokens=[];return false}});x.quicksearch(t,s,{makeParams:function(y){return{query:y,contentId:AJS.params.pageId||""}},dropdownPlacement:u,ajsDropDownOptions:{selectionHandler:function(z,y){v(y);this.hide();z.preventDefault()}}})};var c=function(s){g("#labels_div").toggleClass("hidden");g("#labels_info").toggleClass("hidden");if(g("#labels_div").hasClass("hidden")){g("#labels_info").html(g("#labelsString").val().toLowerCase());g("#labels_edit_link").html("Edit")}else{g("#labels_edit_link").html("Done")}if(s){s.preventDefault()}};g("#labels_edit_link").live("click",c);g(".label-list.editable a.label").live("click",function(s){s.preventDefault()});g(".label-list.editable .remove-label").live("click",function(t){t.preventDefault();var s=g("#dialog-label-list");AJS.Labels.removeLabel(this.parentNode,s.attr("entityid"),s.attr("entitytype"))});AJS.toInit(function(){if(j()){AJS.Labels.bindAutocomplete();g(".label-list").addClass("editable")}});return{addLabel:function(t,s,u){return f(n(t,s,u))},removeLabel:function(t,s,u){return f(k(t,s,u))},bindAutocomplete:e,isNewPage:q,setLabelError:i}})(AJS.$);
AJS.toInit(function(b){var a={padding:0,speedIn:500,speedOut:500,overlayShow:true,overlayOpacity:0.5,dataAttr:"image-src"};b("img.confluence-embedded-image").each(function(){var c=b(this);if(!c.parent("a").length){c.fancybox(a)}})});
AJS.toInit(function(b){var d=b("#version-comment");if(d.length){var a=b("#show-version-comment");var c=b("#hide-version-comment");a.click(function(f){a.hide();c.show();d.show();return AJS.stopEvent(f)});c.click(function(f){c.hide();a.show();d.hide();return AJS.stopEvent(f)});if(a.length&&c.length){d.hide()}}});
jQuery(function(a){a("#manage-watchers-menu-item").click(function(h){h.preventDefault();var c="manage-watchers-dialog";var i=new AJS.ConfluenceDialog({width:865,height:530,id:c,onCancel:function(){i.hide().remove()}});i.addHeader("Manage Watchers");i.addPanel("default",Confluence.Templates.ManageWatchers.dialogContent({pageId:AJS.Meta.get("page-id"),xsrfToken:AJS.Meta.get("atl-token")}));i.addCancel("Close",function(){i.hide().remove();return false});i.show();var d=a("#"+c);d.find(".dialog-title").prepend(Confluence.Templates.ManageWatchers.helpLink());if(Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.enabled){i.addHelpText(AJS.format("Shortcut tip: Pressing \u003cb>{0}\u003c\/b> also opens this dialog box","w"))}d.find("input:visible, button:visible").each(function(e){a(this).attr("tabindex",e+1)});AJS.Confluence.Binder.placeholder();d.bind("remove-list-item.manage-watchers",function(p,o){var m=o.item,n=o.list,q=o.username;m.addClass("removing");AJS.safe.ajax({dataType:"json",type:"POST",url:AJS.params.contextPath+"/json/removewatch.action",data:{pageId:AJS.params.pageId,username:q},error:function(){alert("Failed to remove watcher. Refresh page to see latest status.");m.removeClass("removing")},success:function(){m.slideUp().remove();d.trigger("list-updated.manage-watchers",{list:n})}})});d.bind("list-updated.manage-watchers",function(p,o){var n=o.list;var m=a("li.watch-user",n).length>0;if(!m){n.find(".no-users").removeClass("hidden");return}n.find(".no-users").addClass("hidden");Confluence.Binder.userHover();n.find(".confluence-userlink").each(function(){a(this).click(function(q){q.preventDefault()})})});d.bind("list-data-retrieved.manage-watchers",function(p,o){var n=o.list,m=o.watchers;n.find(".watch-user").remove();if(m&&m.length){a.each(m,function(){var r=this.name;var q={username:r,fullName:this.fullName,url:AJS.params.contextPath+"/display/~"+this.name,iconUrl:AJS.params.contextPath+this.profilePictureDownloadPath};var e=a(Confluence.Templates.ManageWatchers.userItem(q));n.append(e);e.find(".remove-watch").click(function(){d.trigger("remove-list-item.manage-watchers",{username:r,item:e,list:n})})})}n.find(".loading").hide();d.trigger("list-updated.manage-watchers",{list:n})});var f=d.find(".page-watchers .user-list");var k=d.find(".space-watchers .user-list");AJS.safe.ajax({url:AJS.params.contextPath+"/json/listwatchers.action",dataType:"json",data:{pageId:AJS.params.pageId},error:function(){alert("Failed to retrieve watchers.")},success:function(e){d.trigger("list-data-retrieved.manage-watchers",{list:f,watchers:e.pageWatchers});d.trigger("list-data-retrieved.manage-watchers",{list:k,watchers:e.spaceWatchers})}});var l=d.find("form");var j=l.find("#add-watcher-user");var b=l.find("#add-watcher-username");var g=(function(){var e=l.find("> .status");return{clear:function(){e.addClass("hidden").removeClass("loading error").text("")},loading:function(m){e.addClass("loading").removeClass("hidden error").html(m)},error:function(m){e.addClass("error").removeClass("hidden loading").text(m)}}})();l.ajaxForm({beforeSerialize:function(){if(b.val()==""){b.val(j.val())}},beforeSubmit:function(){j.blur().prop("disabled",true);f.addClass("updating");g.loading("Adding watcher\u2026")},dataType:"json",error:function(m,e){alert("Failed to add watcher: "+e)},success:function(e){b.val("");j.prop("disabled",false).val("").focus();f.removeClass("updating");if(e.actionErrors&&e.actionErrors.length){g.error(e.actionErrors[0]);return}d.trigger("list-data-retrieved.manage-watchers",{list:f,watchers:e.pageWatchers});g.clear()}});Confluence.Binder.autocompleteUser();j.bind("selected.autocomplete-user",function(n,m){l.submit()});j.focus()})});
// This file was automatically generated from manage-watchers.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ManageWatchers == 'undefined') { Confluence.Templates.ManageWatchers = {}; }


Confluence.Templates.ManageWatchers.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="dialog-content"><div class="column page-watchers"><h3>', soy.$$escapeHtml("Watching this page"), '</h3><p class="description">', soy.$$escapeHtml("These people are notified when the page is changed. You can add or remove people from this list."), '</p><form action="', soy.$$escapeHtml("/confluence"), '/json/addwatch.action" method="POST"><input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.xsrfToken), '"><input type="hidden" name="pageId" value="', soy.$$escapeHtml(opt_data.pageId), '"/><input type="hidden" id="add-watcher-username" name="username" value=""/><label for="add-watcher-user">', soy.$$escapeHtml("User"), '</label><input id="add-watcher-user" name="userFullName" type="search" class="autocomplete-user" value="" placeholder="', soy.$$escapeHtml("Full name or username"), '" autocomplete="off" data-max="10" data-target="#add-watcher-username" data-dropdown-target="#add-watcher-dropdown" data-template="{title}" data-none-message="', soy.$$escapeHtml("No matching users found."), '"><input id="add-watcher-submit" type="submit" name="add" value="', soy.$$escapeHtml("Add"), '"><div id="add-watcher-dropdown" class="aui-dd-parent autocomplete"></div><div class="status hidden"></div></form><ul class="user-list"><li class="loading">', "Loading\u2026", '</li><li class="no-users hidden">', soy.$$escapeHtml("No page watchers"), '</li></ul></div><div class="column space-watchers"><h3>', soy.$$escapeHtml("Watching this space"), '</h3><p class="description">', soy.$$escapeHtml("These people are notified when any content in the space is changed. You cannot modify this list."), '</p><ul class="user-list"><li class="loading">', "Loading\u2026", '</li><li class="no-users hidden">', soy.$$escapeHtml("No space watchers"), '</li></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.ManageWatchers.userItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="watch-user"><img class="profile-picture confluence-userlink" src="', soy.$$escapeHtml(opt_data.iconUrl), '" data-username="', soy.$$escapeHtml(opt_data.username), '"><a class="confluence-userlink" href="', soy.$$escapeHtml(opt_data.url), '" data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml(opt_data.fullName), ' <span class="username">(', soy.$$escapeHtml(opt_data.username), ')</span></a><span class="remove-watch" title="', soy.$$escapeHtml("Remove"), '" data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml("Remove"), '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.ManageWatchers.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "http://docs.atlassian.com/confluence/docs-50/Managing+Watchers"}, output);
  return opt_sb ? '' : output.toString();
};

AJS.toInit(function(c){var f,j;var a=function(l){if(l.homePage){var m="Home page";return'<span class="child-display"><span class="icon icon-home-page" title="'+m+'">'+m+':</span> <a href="'+AJS.params.contextPath+l.href+'">'+l.text+"</a></span>"}else{var k=l.recentlyUpdated?"icon icon-recently-updated-page":"icon icon-page";return'<span class="child-display"><span class="'+k+'" title="Page">Page:</span> <a href="'+AJS.params.contextPath+l.href+'">'+AJS.escapeHtml(l.text)+"</a></span>"}};var e=function(m){var k=c("#page-children:not(.children-loaded)");g();if(m&&k.length){if(m.errorMessage){k.html("<span class='error'>"+m.errorMessage+"</span>");return}var l=[];c.each(m,function(n,o){l.push(a(o))});k.html(l.join(""));k.addClass("children-loaded")}};var g=function(){if(j){j();j=null}f.addClass("hidden")};var b=function(k){AJS.safe.ajax({url:AJS.params.contextPath+"/json/pagechildrenstoresettings.action",type:"POST",data:{pageId:AJS.params.pageId,showChildren:k},success:function(){},error:function(m,l){AJS.log("Failed to store the user 'showChildren' user setting: "+l)}})};var i=function(){var k=c("#page-children:not(.children-loaded)");if(k.length){f=c("<div class='throbber'></div>");k.append(f);j=Raphael.spinner(f[0],10,"#666");AJS.safe.ajax({url:AJS.params.contextPath+"/json/pagechildren.action",type:"POST",data:{pageId:AJS.params.pageId,showChildren:true},success:e,error:function(o,n,m){var l="Could not load child pages.";g();k.html("<span class='error'>"+l+"</span>");AJS.log("Error retrieving child pages: "+n)}})}else{b(true)}};var d=function(){c("#page-children").hide();b(false)};var h=function(){c("#page-children").show();if(c("#children-section:not(.children-showing)").length){i()}else{b(true)}};c("#children-section a.children-show-hide").each(function(){c(this).click(function(l){var k=c("#children-section");if(k.hasClass("children-showing")){d();k.removeClass("children-showing").addClass("children-hidden")}else{h();k.removeClass("children-hidden").addClass("children-showing")}return AJS.stopEvent(l)})})});
(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};$.toJSON=typeof JSON==="object"&&JSON.stringify?JSON.stringify:function(o){if(o===null){return"null"}var type=typeof o;if(type==="undefined"){return undefined}if(type==="number"||type==="boolean"){return""+o}if(type==="string"){return $.quoteString(o)}if(type==="object"){if(typeof o.toJSON==="function"){return $.toJSON(o.toJSON())}if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month="0"+month}if(day<10){day="0"+day}if(hours<10){hours="0"+hours}if(minutes<10){minutes="0"+minutes}if(seconds<10){seconds="0"+seconds}if(milli<100){milli="0"+milli}if(milli<10){milli="0"+milli}return'"'+year+"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds+"."+milli+'Z"'}if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||"null")}return"["+ret.join(",")+"]"}var name,val,pairs=[];for(var k in o){type=typeof k;if(type==="number"){name='"'+k+'"'}else{if(type==="string"){name=$.quoteString(k)}else{continue}}type=typeof o[k];if(type==="function"||type==="undefined"){continue}val=$.toJSON(o[k]);pairs.push(name+":"+val)}return"{"+pairs.join(",")+"}"}};$.evalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(src){return eval("("+src+")")};$.secureEvalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered)){return eval("("+src+")")}else{throw new SyntaxError("Error parsing JSON, source is not valid.")}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==="string"){return c}c=a.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"'}return'"'+string+'"'}})(jQuery);
(function(){var a=jQuery.ajax;AJS.safe={ajax:function(b){if(b.data&&typeof b.data=="object"){b.data.atl_token=jQuery("#atlassian-token").attr("content");return a(b)}},get:function(){jQuery.ajax=AJS.safe.ajax;try{return jQuery.get.apply(jQuery,arguments)}finally{jQuery.ajax=a}},getScript:function(b,c){return AJS.safe.get(b,null,c,"script")},getJSON:function(b,c,d){return AJS.safe.get(b,c,d,"json")},post:function(b,d,e,c){jQuery.ajax=AJS.safe.ajax;try{return jQuery.post.apply(jQuery,arguments)}finally{jQuery.ajax=a}}}})();AJS.safeAjax=function(a){return AJS.safe.ajax(a)};
(function(){var a=function(b){return{id:b.id,title:b.title,url:AJS.REST.findLink(b.link),type:b.type,spaceName:b.space?b.space.title:"",spaceKey:b.space?b.space.key:"",friendlyDate:b.lastModifiedDate?b.lastModifiedDate.friendly:"",date:b.lastModifiedDate?b.lastModifiedDate.date:""}};jQuery.fn.searchResultsGrid=function(b,f,n,d){var g=jQuery,h=this;var j=f.results;if(!j||!j.length){var p=AJS.format(d.noSearchResults,AJS.escapeEntities(b));h.html("<div class='no-results'>"+p+"</div>");return}h.html(AJS.getTemplate("searchResultsGrid").toString());if(!f.skipResultCount){var m=f.startIndex+1,k=f.startIndex+j.length,l=AJS.format(d.resultsCount,m,k,f.total,AJS.escapeEntities(b));h.prepend(AJS.renderTemplate("searchResultsGridCount",AJS.html(l)))}for(var e=0;e<j.length;e++){var o=j[e];o=f.convertFromRest?a(o):o;var c=g(AJS.renderTemplate("searchResultsGridRow",[o.title,o.url,o.type,o.spaceName,o.spaceKey,o.friendlyDate,o.date]));if(o.type=="attachment"&&o.id){c.attr("data-attachment-id",o.id)}c.selectableEffects(h,n.select,j[e]);h.find("table").append(c)}g(".search-result:first",h).click()}})();
(function(a){a.ui=a.ui||{};a.fn.extend({spinner:function(b){if(!this.is(".ui-spinner")){return new a.ui.spinner(this,b||{})}}});a.ui.spinner=function(e,k){this.anchor=e;var g=AJS.params.staticResourceUrlPrefix||contextPath;this.images=k.images||[g+"/images/ddtree/black spinner/1.png",g+"/images/ddtree/black spinner/2.png",g+"/images/ddtree/black spinner/3.png",g+"/images/ddtree/black spinner/4.png",g+"/images/ddtree/black spinner/5.png",g+"/images/ddtree/black spinner/6.png",g+"/images/ddtree/black spinner/7.png",g+"/images/ddtree/black spinner/8.png",g+"/images/ddtree/black spinner/9.png",g+"/images/ddtree/black spinner/10.png",g+"/images/ddtree/black spinner/11.png",g+"/images/ddtree/black spinner/12.png"];this.width=k.width||"16px";this.height=k.height||k.width||"16px";this.hide=function(){this.anchor.hide();this.stop()};this.show=function(){this.start();this.anchor.show()};this.fadeIn=function(){this.anchor.fadeIn.apply(this.anchor,arguments)};this.fadeOut=function(){this.anchor.fadeOut.apply(this.anchor,arguments)};this.moveTo=function(i,l){this.anchor.css("top",l);this.anchor.css("left",i)};this.putInBox=function(n){var l=n.x||n.x1,o=n.y||n.y1,m=(typeof n.width=="undefined")?n.x2-n.x1:n.width,i=(typeof n.height=="undefined")?n.y2-n.y1:n.height;this.moveTo(l+Math.round((m-this.offsetWidth)/2),o+Math.round((i-this.offsetHeight)/2))};this.start=function(){if(!this.timer){this.timer=setInterval(b,100)}return this.timer};this.stop=function(){clearInterval(this.timer);this.timer=null};this.divs=[];for(var d=0,j=this.images.length;d<j;d++){var c=document.createElement("div");if(!AJS.applyPngFilter(c,this.images[d])){var f=document.createElement("img");f.src=this.images[d];f.style.width=this.width;f.style.height=this.height;c.appendChild(f)}c.style.width=this.width;c.style.height=this.height;this.anchor.append(c);if(!this.offsetWidth){this.offsetWidth=c.offsetWidth;this.offsetHeight=c.offsetHeight}this.divs.push(a(c).hide())}this.frame=0;this.direction=1;var h=this;var b=function(){h.divs[h.frame].hide();h.frame+=h.direction;if(h.frame>=h.divs.length){h.frame=0}if(h.frame<0){h.frame=h.divs.length-1}h.divs[h.frame].show()};this.anchor.css("position","absolute")}})(jQuery);
(function(b){b.ui=b.ui||{};b.fn.extend({tree:function(c){if(!this.is(".ui-tree")){return new b.ui.tree(this,c)}}});var a=function(c){c.preventDefault()};b.ui.tree=function(f,h){var e=f,t=this,F=false,g=arguments;if(!(/^[ou]l$/i.test(e[0].tagName))){F=true;if(!h.url){return false}e.html("<ul></ul>");e=b("ul",e)}var v=e[0];e.addClass("ui-tree");var n={list:e,visibleNodes:[],dim:e.offset(),points:[],win:b(window),timer:null,prev:0,events:{grab:function(){},click:function(){},drag:function(){},drop:function(){},append:function(){},insertabove:function(){},insertbelow:function(){},load:function(){},nodeover:function(){},nodeout:function(){},onready:function(){},order:function(){},orderUndo:function(){},remove:function(){},preview:function(){}}};this.options=h;this.expandPath=function(i,L){L=L||function(){};if(i.length){var K=1,J,H,I=function(){if(K<i.length){for(var M in i[K]){J=t.findNodeBy(M,i[K][M]);if(J){break}}K++;J.open(I)}else{L()}};for(H in i[0]){J=this.findNodeBy(H,i[0][H]);break}if(!J){return}J.open(I)}else{L()}};this.reload=function(H){if(F){e.remove()}for(var I in H){this.options[I]=H[I]}return new g.callee(f,this.options)};this.append=function(i){var H=x(i);e.append(H);c.call(H);o()};this.unhighlight=function(){e.find("li.highlighted").each(function(i,H){b(this).removeClass("highlighted")})};function k(O,N){O=(O+"").toLowerCase();N=(N+"").toLowerCase();var J=/(\d+|\D+)/g,K=O.match(J),H=N.match(J),M=Math.max(K.length,H.length);for(var I=0;I<M;I++){if(I==K.length){return -1}if(I==H.length){return 1}var P=parseInt(K[I],10),L=parseInt(H[I],10);if(P==K[I]&&L==H[I]&&P!=L){return(P-L)/Math.abs(P-L)}if((P!=K[I]||L!=H[I])&&K[I]!=H[I]){return K[I]<H[I]?-1:1}}return 0}function u(I){this[0]=I[0];this.$=I;this.text=I.find("span").text();this.href=I.find("a").attr("href");this.linkClass=I.find("a").attr("class");this.nodeClass=I.attr("class");this.open=function(J){if(!n.visibleNodes.length){AJS.log("tried to open empty node");return}return n.visibleNodes[this[0].num].open&&n.visibleNodes[this[0].num].open(J)};this.insertChild=function(J){J.$&&(J=J[0]);n.visibleNodes[this[0].num].append(J)};this.reorder=function(){n.visibleNodes[this[0].num].order(k)};this.close=function(){n.visibleNodes[this[0].num].close()};this.getAttribute=function(J){return this[0][J]};this.setAttribute=function(J,K){this[0][J]=K};this.highlight=function(){this.$.addClass("highlighted")};this.unhighlight=function(){this.$.removeClass("highlighted")};this.makeDraggable=function(){this.setAttribute("undraggable",false);this.$.removeClass("undraggable")};this.makeUndraggable=function(){this.setAttribute("undraggable",true);this.$.addClass("undraggable")};this.makeClickable=function(K){this.setAttribute("unclickable",false);this.$.removeClass("unclickable");var L=this[0].getElementsByTagName("a");var J;if(K){J=b(L[0])}else{J=b(L)}J.unbind("click",a);J.click(n.events.click)};this.makeUnclickable=function(K){this.setAttribute("unclickable",true);this.$.addClass("unclickable");var L=this[0].getElementsByTagName("a");var J;if(K){J=b(L[0])}else{J=b(L)}J.click(a);J.unbind("click",n.events.click)};this.setText=function(J){this.text=J;this[0].text=J;this.$.find("span").text(J)};this.getParent=function(){if(this.$.parent(":not(.ui-tree)").length){var J=this.$.parent().parent();if(J.length){return new u(b(J[0]))}}return null};this.append=function(L){var K=this.$.find("ul");if(!K.length){if(this[0].toBeLoaded){var M=this;this.open(function(){M.append(L)});return false}this.$.append("<ul></ul>");K=this.$.find("ul")}var J=x(L);K.append(J);c.call(J);if(typeof this[0].closed=="undefined"){this.$.addClass("closed");this[0].closed=true;K.hide()}o()};this.below=function(J){var K=x(J);this.$.after(K);c.call(K);o()};this.above=function(J){var K=x(J);this.$.before(K);c.call(K);o()};this.remove=function(){this.$.remove();o()};this.reload=function(){if(this[0].getElementsByTagName("ul").length){this[0].removeChild(this[0].getElementsByTagName("ul")[0]);this.$.removeClass("opened").addClass("closed");this[0].closed=true;n.visibleNodes[this[0].num].open()}};this.order=function(O){var L=b("ul",this.$),J=this[0];J.ordered=true;if(L.length){var K=[];J.oldorder=[];b("li",this.$).each(function(){K.push(this);J.oldorder.push(this)});function P(R,Q){return O(b(R).find("span").html(),b(Q).find("span").html())}K.sort(P);J.order=K;for(var M=0,N=K.length;M<N;M++){L.append(K[M])}}o()};this.orderUndo=function(){this[0].ordered=false;var J=b("ul",this.$);if(this[0].oldorder&&J.length){for(var K=0,L=this[0].oldorder.length;K<L;K++){J.append(this[0].oldorder[K])}}this[0].oldorder=null;o()};this.setOrdered=function(J){this[0].ordered=J;b("a.abc:first",this).css("display",J?"none":"block");b("a.rollback:first",this).css("display","none")};if(t.options.parameters&&t.options.parameters.length){for(var i=0,H=t.options.parameters.length;i<H;i++){if(I[0][t.options.parameters[i]]){this[t.options.parameters[i]]=I[0][t.options.parameters[i]]}}}}this.findNodeBy=function(I,M){var K=[],H=v.getElementsByTagName("li");for(var J=0,L=H.length;J<L;J++){if(H[J][I]==M){K.push(new u(b(H[J])))}}if(K.length==0){return null}else{if(K.length==1){return K[0]}else{return K}}};if(h.url){var r=document.createElement("div");r.className="tree-spinner";if(h.spinnerId){r.id=h.spinnerId}b("body").append(r);n.spinner=b(r).spinner();n.spinner.hide()}for(var y in n.events){if(typeof h[y]=="function"){n.events[y]=h[y]}}function z(i){return !(i.tagName.toLowerCase()=="li"&&b("li:not(.tree-helper)",i).length<1)}function d(i){this.$li=b(i);this.height=this.$li.height()}d.prototype.append=function(i){if(this.$li[0]==i){return false}if(this.$li[0].toBeLoaded){var J=this;this.load(function(){J.append(i)});return false}if(this.$li[0].tagName.toLowerCase()=="li"){var I=b("ul:first",this.$li);var H=i.parentNode.parentNode;b(".rollback:first",H).css("display","none");if(I.length){I.append(i);if(this.$li[0].ordered){this.order(k)}}else{I=document.createElement("ul");I.appendChild(i);this.$li[0].appendChild(I);this.$li.addClass("opened");b(".click-zone:first",this.$li).css("display","inline");b(".rollback:first",this.$li).css("display","none")}if(!z(H)){n.visibleNodes[H.num].notaFolderAnymore()}setTimeout(o,0);n.events.append.call({source:i,target:this.$li[0]})}};d.prototype.below=function(i){var H=i.parentNode.parentNode;this.$li.after(i);b(".rollback:first",H).css("display","none");if(z(H)){if(!b(i.parentNode).hasClass("ui-tree")&&!i.parentNode.parentNode.undraggable){i.parentNode.parentNode.ordered=false;b(".abc:first",i.parentNode.parentNode).css("display","block");b(".rollback:first",i.parentNode.parentNode).css("display","none")}}else{n.visibleNodes[H.num].notaFolderAnymore()}setTimeout(o,0);n.events.insertbelow.call({source:i,target:this.$li[0]})};d.prototype.above=function(i){var H=i.parentNode.parentNode;this.$li.before(i);b(".rollback:first",H).css("display","none");if(z(H)){if(!b(i.parentNode).hasClass("ui-tree")&&!i.parentNode.parentNode.undraggable){i.parentNode.parentNode.ordered=false;b(".abc:first",i.parentNode.parentNode).css("display","block");b(".rollback:first",i.parentNode.parentNode).css("display","none")}}else{n.visibleNodes[H.num].notaFolderAnymore()}setTimeout(o,0);n.events.insertabove.call({source:i,target:this.$li[0]})};d.prototype.order=function(M){var H=this.$li[0];H.ordered=true;var J=b("ul:first",this.$li);if(J.length){var I=[];H.oldorder=[];b("li",this.$li).each(function(){if(this.parentNode.parentNode==H){I.push(this);H.oldorder.push(this)}});function N(O,i){var Q=b("span",O).text().replace(/^\s+|\s+$/g,""),P=b("span",i).text().replace(/^\s+|\s+$/g,"");return M(Q,P)}I.sort(N);H.order=I;for(var K=0,L=I.length;K<L;K++){J.append(I[K])}}o()};d.prototype.orderUndo=function(){var H=this.$li[0];H.ordered=false;var I=b("ul:first",this.$li);if(H.oldorder&&I.length&&I[0].parentNode==H){for(var J=0,K=H.oldorder.length;J<K;J++){I.append(H.oldorder[J])}}H.oldorder=null;H.oldor=null;o()};d.prototype.open=function(H){H=H||function(){};if(this.$li.hasClass("closed")){var i=b("ul:has(li)",this.$li);if(i.length){i.show();this.closed=false;this.$li.removeClass("closed").addClass("opened");o();H(true);return true}else{return this.load(H)}}H(false);return false};d.prototype.close=function(H){H=H||function(){};var i=this.$li.contents().filter("ul:has(li)");if(i.length){i.hide();this.closed=true;this.$li.removeClass("opened").addClass("closed");n.visibleNodes.splice(this.$li[0].num+1,i[0].getElementsByTagName("li").length);o();H()}};d.prototype.load=function(P){var H=t.options.url;if(!H){return false}P=P||function(){};this.$li[0].toBeLoaded=false;this.$li[0].closed=true;var J={};if(h.parameters&&h.parameters.length){for(var K=0,Q=h.parameters.length;K<Q;K++){J[h.parameters[K]]=(this.$li[0][h.parameters[K]]||"")}}var I=this,N=this.$li[0].getElementsByTagName("span")[0],O=N.offsetWidth,M=Math.round(b(N).offset().left);I.loading=true;n.spinner.putInBox({x:M+O,y:this.top,width:25,height:n.H});n.spinner.show();var L=function(V){var T=b("ul",I.$li);if(!T.length){T=document.createElement("ul");I.$li[0].appendChild(T);T=b(T)}I.ordered=(typeof V[0].position!="number");for(var S=0,U=V.length;S<U;S++){var R=x(V[S]);T[0].appendChild(R);c.call(R)}T.hide();I.open(P);n.events.load();n.spinner.hide();I.$li[0].ordered=I.ordered;b(".abc:first",I.$li[0]).css("display",I.ordered||R.undraggable?"none":"block");b(".rollback:first",I.$li[0]).css("display","none")};b.ajax({url:H,type:"GET",dataType:"json",data:J,success:L});return true};d.prototype.notaFolderAnymore=function(){this.$li.removeClass("closed").removeClass("opened");b(".click-zone:first",this.$li).hide();b(".abc:first",this.$li).css("display","none");b(".rollback:first",this.$li).css("display","none");var i=this.$li[0].getElementsByTagName("ul");this.closed=false;if(i.length){this.$li[0].removeChild(i[0])}};function m(i){var H=n.points[i];if(typeof H!="undefined"){return{visibleNode:n.visibleNodes[H.num],where:H.where,top:H.top}}else{return{visibleNode:new d(v),where:"append",top:n.dim.top}}}function j(){var L={y:0,num:0};n.points=[];for(var I=0,K=n.visibleNodes.length;I<K;I++){var N=n.visibleNodes[I].$li.offset(),O=Math.round(N.top);n.visibleNodes[I].top=O;n.visibleNodes[I].left=Math.round(N.left);if(L.y){var M=(O-L.y)/4;for(var J=L.y;J<O;J++){var H=(J-L.y<M)?"above":(J-L.y<M*3)?"append":"below";n.points[J]={num:L.num,where:H,top:L.y}}}if(I==K-1){var M=(n.visibleNodes[I].height)/4;for(var J=O;J<O+n.visibleNodes[I].height;J++){var H=(J-O<M)?"above":(J-O<M*3)?"append":"below";n.points[J]={num:I,where:H,top:O}}}L.y=O;L.num=I}}function o(){n.visibleNodes=[];var H=b("li:visible",v);for(var I=0,J=H.length;I<J;I++){if(!b(H[I]).hasClass("tree-helper")){H[I].num=n.visibleNodes.length;n.visibleNodes.push(new d(H[I]))}}j()}this.updateVisibleNodes=o;var B=function(){var i={distance:3,helper:"clone",opacity:0.7,cursorAt:{top:n.H/2,left:30},stop:function(L,K){clearInterval(n.timer);clearTimeout(n.opentimer);n.opentimer=null;var I=m(n.prev);I.visibleNode.$li.removeClass("over").removeClass("above").removeClass("append").removeClass("below");I.visibleNode.$li.next().removeClass("over").removeClass("above").removeClass("append").removeClass("below");n.win.unbind("keypress",n.escape);delete n.escape;if(i.revert){i.revert=false;return false}I=m(L.pageY||L.originalEvent.pageY);var J=I.visibleNode.$li[0],H=true;while(J!=v){if(J==this){H=false;break}J=J.parentNode}H=H&&!(I.where=="above"&&I.visibleNode.$li.prev()[0]==this)&&!(I.where=="append"&&I.visibleNode.$li[0]==this.parentNode.parentNode);if(H){I.visibleNode[I.where](this);n.events.drop.call({position:I.where,source:this,target:I.visibleNode.$li[0]})}},start:function(J,H){var I=this;H.helper.append("<strong></strong>").addClass("tree-helper").find(".button-panel").remove();n.events.grab.call(I);if(this.undraggable){H.helper.addClass("no");i.revert=true}n.escape=function(M){if(M.keyCode==27){var K=m(n.prev);K.visibleNode.$li.removeClass("over").removeClass("above").removeClass("append").removeClass("below");K.visibleNode.$li.next().removeClass("over").removeClass("above").removeClass("append").removeClass("below");var L=H.helper.clone();H.helper.before(L);L.animate({left:Math.round(b(I).offset().left)+"px",top:Math.round(b(I).offset().top)+"px",opacity:0},"slow","swing",function(){L.remove()});H.helper.css("display","none");i.revert=true}};n.win.keypress(n.escape)},drag:function(N,M){N.pageY=N.pageY||N.originalEvent.pageY;N.pageX=N.pageX||N.originalEvent.pageX;var H=m(n.prev);H.visibleNode.$li.removeClass("above").removeClass("append").removeClass("below");H.visibleNode.$li.next().removeClass("above").removeClass("append").removeClass("below");if(!i.revert||n.out){n.prev=N.pageY;var K=m(n.prev);if(K.visibleNode.$li[0]==v){i.revert=true;n.out=true;return}else{if(n.out){n.out=false;i.revert=false}}if(K.visibleNode!=H.visibleNode){n.events.nodeout.call(H.visibleNode.$li);if(n.opentimer){clearTimeout(n.opentimer);n.opentimer=false}}n.events.nodeover.call({element:K.visibleNode.$li,position:K.where});var J=K.where,I=K.visibleNode.$li.next();if(J=="below"&&I.length&&!I.hasClass("tree-helper")){I.addClass("above")}else{m(n.prev).visibleNode.$li.addClass(J)}if(K.where=="append"&&(K.visibleNode.closed||K.visibleNode.$li[0].toBeLoaded)&&!n.opentimer){n.opentimer=(function(O){return setTimeout(function(){O.visibleNode.$li.removeClass("append");O.visibleNode.open(function(){n.opentimer=false})},500)})(K)}var L=arguments.callee;if(n.win.height()-N.pageY+n.win.scrollTop()<30){clearInterval(n.timer);n.timer=setInterval(function(){window.scrollBy(0,4);M.helper.css("top",parseInt(M.helper.css("top"))+4+"px");L({pageY:N.pageY+4},M)},n.win.height()-N.pageY+n.win.scrollTop())}else{if(n.win.scrollTop()>0&&(N.pageY-n.win.scrollTop())<30){clearInterval(n.timer);n.timer=setInterval(function(){window.scrollBy(0,-4);L({pageY:N.pageY-4},M);M.helper.css("top",parseInt(M.helper.css("top"))-4+"px")},N.pageY-n.win.scrollTop())}else{if(n.timer){clearInterval(n.timer)}}}n.events.drag.call({element:this,left:N.pageX,top:N.pageY})}}};return i};function c(){var i=b(this);if(t.options.undraggable){i.mousedown(a)}else{i.draggable(B());i[0].undraggable=i.hasClass("undraggable")}var H=b(this.getElementsByTagName("a")[0]);if(t.options.unclickable){i.addClass("unclickable");H.click(a)}else{H.click(n.events.click)}if(t.options.oninsert){t.options.oninsert.call(new u(i),H)}}b.ui.tree.callNumber=0;var q=function(i){if(n.visibleNodes[this.parentNode.num].loading){return}if(b(this.parentNode).hasClass("closed")){n.visibleNodes[this.parentNode.num].open()}else{n.visibleNodes[this.parentNode.num].close()}return false},s=function(i){if(!b(i.target).hasClass("tree-helper")){b(".button-panel:first",this).addClass("hover")}return false},E=function(i){if(!b(i.target).hasClass("tree-helper")){b(".button-panel:first",this).removeClass("hover")}return false},D=function(){var i=n.visibleNodes[this.parentNode.parentNode.num];i.order(k);n.events.order.call({source:i.$li[0]});b(this).hide();b("a.rollback",this.parentNode).show();return false},w=function(H){var i=n.visibleNodes[this.parentNode.parentNode.num];i.orderUndo();n.events.orderUndo.call({source:i.$li[0],orderedChildren:b("ul:first",i.$li[0]).children()});b(this).hide();b("a.abc",this.parentNode).show();return false},G=function(H){H.preventDefault();var i=n.visibleNodes[this.parentNode.parentNode.num];n.events.preview.call({source:preview,node:i.$li[0]})},A=function(H){H.preventDefault();var i=n.visibleNodes[this.parentNode.parentNode.num];n.events.remove.call({source:i.$li[0]})};function x(I){var S=document.createElement("li");S.className=I.nodeClass;if(t.options.parameters&&t.options.parameters.length){for(var K=0,L=t.options.parameters.length;K<L;K++){if(I[t.options.parameters[K]]){S[t.options.parameters[K]]=I[t.options.parameters[K]]}}}if(t.options.nodeId){S.id="node-"+I[t.options.nodeId]}var Q=document.createElement("a"),R=document.createElement("span"),J=document.createElement("i");J.className="decorator";Q.href=I.href;R.appendChild(document.createTextNode(I.text));Q.appendChild(R);Q.appendChild(J);Q.className=I.linkClass;var M=document.createElement("div");b(M).addClass("click-zone");b(M).click(q);b(S).mouseover(s).mouseout(E);S.appendChild(M);S.appendChild(Q);var i=document.createElement("div");i.className="button-panel";S.appendChild(i);var P=document.createElement("a");P.className="abc";P.title="Sort Alphabetically";i.appendChild(P);var H=document.createElement("a");H.className="rollback";H.title="Undo Sorting";i.appendChild(H);b(P).click(D);b(H).click(w);if(t.options.isAdministrator){var N=document.createElement("a");N.className="preview-node";N.title="Preview";i.appendChild(N);b(N).click(G);var T=document.createElement("a");T.className="remove-node";T.title="Delete";i.appendChild(T);b(T).click(A)}b(P).css("display","none");b(H).css("display","none");var O=b(S);if(O.hasClass("opened")){O.removeClass("opened").addClass("closed");S.closed=true}else{if(O.hasClass("closed")){S.toBeLoaded=true}else{b(M).css("display","none")}}return S}var p=e.contents().filter("li");if(p.length>0){n.H=p.height();p.each(c);o();n.events.onready.call(this)}else{var l=t.options.initUrl||t.options.url;if(!l){return false}n.spinner.putInBox({x:n.dim.left+16,y:n.dim.top,width:16,height:16});n.spinner.show();var C=++b.ui.tree.callNumber;b.getJSON(l,function(L){var K=+new Date;for(var I=0,J=L.length;I<J;I++){var H=x(L[I]);v.appendChild(H);if(I==0){n.H=b(H).height()}c.call(H)}o();n.spinner.hide();if(C==b.ui.tree.callNumber){n.events.onready.call(this);b.ui.tree.callNumber=0}})}n.offset=v.offsetTop;setInterval(function(){if(v.offsetTop!=n.offset){j();n.offset=v.offsetTop}},10);return this}})(jQuery);
// This file was automatically generated from atlassian.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.renderExtraAttributes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data != null && opt_data.extraAttributes) {
    if (Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]') {
      var attrList7 = soy.$$getMapKeys(opt_data.extraAttributes);
      var attrListLen7 = attrList7.length;
      for (var attrIndex7 = 0; attrIndex7 < attrListLen7; attrIndex7++) {
        var attrData7 = attrList7[attrIndex7];
        output.append(' ', soy.$$escapeHtml(attrData7), '="', soy.$$escapeHtml(opt_data.extraAttributes[attrData7]), '"');
      }
    } else {
      output.append(' ', opt_data.extraAttributes);
    }
  }
  return opt_sb ? '' : output.toString();
};


aui.renderExtraClasses = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data != null && opt_data.extraClasses) {
    if (opt_data.isFullAttr) {
      output.append(' class="');
      if ((opt_data.extraClasses) instanceof Array) {
        var classList26 = opt_data.extraClasses;
        var classListLen26 = classList26.length;
        for (var classIndex26 = 0; classIndex26 < classListLen26; classIndex26++) {
          var classData26 = classList26[classIndex26];
          output.append((! (classIndex26 == 0)) ? ' ' : '', soy.$$escapeHtml(classData26));
        }
      } else {
        output.append(soy.$$escapeHtml(opt_data.extraClasses));
      }
      output.append('"');
    } else {
      if ((opt_data.extraClasses) instanceof Array) {
        var classList38 = opt_data.extraClasses;
        var classListLen38 = classList38.length;
        for (var classIndex38 = 0; classIndex38 < classListLen38; classIndex38++) {
          var classData38 = classList38[classIndex38];
          output.append(' ', soy.$$escapeHtml(classData38));
        }
      } else {
        output.append(' ', soy.$$escapeHtml(opt_data.extraClasses));
      }
    }
  }
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from badges.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.badges == 'undefined') { aui.badges = {}; }


aui.badges.badge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-badge');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from buttons.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.buttons == 'undefined') { aui.buttons = {}; }


aui.buttons.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.tagName == 'input') {
    output.append('<input type="', soy.$$escapeHtml(opt_data.inputType ? opt_data.inputType : 'button'), '" ');
    aui.buttons.buttonAttributes(opt_data, output);
    output.append(' value="', soy.$$escapeHtml(opt_data.text), '" />');
  } else {
    output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'button'), ' ');
    aui.buttons.buttonAttributes(opt_data, output);
    output.append('>');
    aui.buttons.buttonIcon(opt_data, output);
    output.append(soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'button'), '>');
  }
  return opt_sb ? '' : output.toString();
};


aui.buttons.buttons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-buttons');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.buttons.buttonAttributes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-button', (opt_data.splitButtonType == 'main') ? ' aui-button-split-main' : '', (opt_data.dropdown2Target) ? ' aui-dropdown2-trigger' + ((opt_data.splitButtonType == 'more') ? ' aui-button-split-more' : '') : '');
  switch (opt_data.type) {
    case 'primary':
      output.append(' aui-button-primary');
      break;
    case 'link':
      output.append(' aui-button-link');
      break;
    case 'subtle':
      output.append(' aui-button-subtle');
      break;
  }
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append((opt_data.isPressed) ? ' aria-pressed="' + soy.$$escapeHtml(opt_data.isPressed) + '"' : '', (opt_data.isDisabled) ? ' aria-disabled="' + soy.$$escapeHtml(opt_data.isDisabled) + '"' + ((opt_data.isDisabled == true) ? (opt_data.tagName == 'button' || opt_data.tagName == 'input') ? ' disabled="disabled" ' : '' : '') : '', (opt_data.dropdown2Target) ? ' aria-owns="' + soy.$$escapeHtml(opt_data.dropdown2Target) + '" aria-haspopup="true"' : '');
  return opt_sb ? '' : output.toString();
};


aui.buttons.buttonIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.iconType) ? '<span class="' + ((opt_data.iconType == 'aui') ? 'aui-icon' : '') + ((opt_data.iconClass) ? ' ' + soy.$$escapeHtml(opt_data.iconClass) : '') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) + ' ' : '') + '</span>' : '');
  return opt_sb ? '' : output.toString();
};


aui.buttons.splitButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.buttons.button(soy.$$augmentData(opt_data.splitButtonMain, {splitButtonType: 'main'}), output);
  aui.buttons.button(soy.$$augmentData(opt_data.splitButtonMore, {splitButtonType: 'more'}), output);
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from dropdown.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dropdown == 'undefined') { aui.dropdown = {}; }


aui.dropdown.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dd-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><span class="dropdown-text">', (opt_data.accessibilityText) ? soy.$$escapeHtml(opt_data.accessibilityText) : '', '</span>', (! (opt_data.showIcon == false)) ? '<span class="icon icon-dropdown"></span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown.menu = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown hidden');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown.parent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dd-parent');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="dropdown-item');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><a href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '">', soy.$$escapeHtml(opt_data.text), '</a></', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from dropdown2.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dropdown2 == 'undefined') { aui.dropdown2 = {}; }


aui.dropdown2.dropdown2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dropdown2.trigger(soy.$$augmentData(opt_data.trigger, {menu: opt_data.menu}), output);
  aui.dropdown2.contents(opt_data.menu, output);
  return opt_sb ? '' : output.toString();
};


aui.dropdown2.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown2-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('" aria-owns="', soy.$$escapeHtml(opt_data.menu.id), '" aria-haspopup="true"', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', (opt_data.container) ? ' data-container="' + soy.$$escapeHtml(opt_data.container) + '"' : '', ((! opt_data.tagName || opt_data.tagName == 'a') && (! opt_data.extraAttributes || Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]' && ! opt_data.extraAttributes.href && ! opt_data.extraAttributes.tabindex)) ? ' tabindex="0"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', (opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', (! (opt_data.showIcon == false)) ? '<span class="icon aui-icon-dropdown"></span>' : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown2.contents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="', soy.$$escapeHtml(opt_data.id), '" class="aui-dropdown2');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', '</div>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown2.section = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown2-section');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.label) ? '<strong>' + soy.$$escapeHtml(opt_data.label) + '</strong>' : '', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from form.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.form == 'undefined') { aui.form = {}; }


aui.form.form = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui', (opt_data.isUnsectioned) ? ' unsectioned' : '', (opt_data.isLongLabels) ? ' long-label' : '', (opt_data.isTopLabels) ? ' top-label' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('" action="', soy.$$escapeHtml(opt_data.action), '" method="', soy.$$escapeHtml(opt_data.method ? opt_data.method : 'post'), '"', (opt_data.enctype) ? 'enctype="' + soy.$$escapeHtml(opt_data.enctype) + '"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</form>');
  return opt_sb ? '' : output.toString();
};


aui.form.formDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldset = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var hasClass__soy51 = opt_data.isInline || opt_data.isDateSelect || opt_data.isGroup || opt_data.extraClasses;
  output.append('<fieldset', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  if (hasClass__soy51) {
    output.append(' class="', soy.$$escapeHtml(opt_data.isInline ? 'inline' : opt_data.isDateSelect ? 'date-select' : opt_data.isGroup ? 'group' : ''));
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
  }
  aui.renderExtraAttributes(opt_data, output);
  output.append('><legend><span>', opt_data.legendContent, '</span></legend>', opt_data.content, '</fieldset>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.buttons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="buttons-container', (opt_data.alignment) ? ' ' + soy.$$escapeHtml(opt_data.alignment) : '', '"><div class="buttons">', opt_data.content, '</div></div>');
  return opt_sb ? '' : output.toString();
};


aui.form.label = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<label', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' for="', soy.$$escapeHtml(opt_data.forField), '"');
  aui.renderExtraClasses(soy.$$augmentData(opt_data, {isFullAttr: true}), output);
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label>');
  return opt_sb ? '' : output.toString();
};


aui.form.input = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<input', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="', soy.$$escapeHtml(opt_data.type == 'password' ? 'text' : opt_data.type == 'submit' ? 'button' : opt_data.type));
  aui.renderExtraClasses(opt_data, output);
  output.append('" type="', soy.$$escapeHtml(opt_data.type), '" name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '"', (opt_data.value) ? ' value="' + soy.$$escapeHtml(opt_data.value) + '"' : '', ((opt_data.type == 'checkbox' || opt_data.type == 'radio') && opt_data.isChecked) ? ' checked="checked"' : '', (opt_data.type == 'text' && opt_data.maxLength) ? ' maxlength="' + soy.$$escapeHtml(opt_data.maxLength) + '"' : '', (opt_data.type == 'text' && opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('/>');
  return opt_sb ? '' : output.toString();
};


aui.form.submit = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.input({id: opt_data.id, name: opt_data.name, type: 'submit', value: opt_data.text, isDisabled: opt_data.isDisabled, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.input({id: opt_data.id, name: opt_data.name, type: 'button', value: opt_data.text, isDisabled: opt_data.isDisabled, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.linkButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' name="', soy.$$escapeHtml(opt_data.name ? opt_data.name : opt_data.id), '" href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '" class="cancel');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', soy.$$escapeHtml(opt_data.text), '</a>');
  return opt_sb ? '' : output.toString();
};


aui.form.textarea = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<textarea', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '" class="textarea');
  aui.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.rows) ? ' rows="' + soy.$$escapeHtml(opt_data.rows) + '"' : '', (opt_data.cols) ? ' cols="' + soy.$$escapeHtml(opt_data.cols) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '</textarea>');
  return opt_sb ? '' : output.toString();
};


aui.form.select = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<select', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '" class="', soy.$$escapeHtml(opt_data.isMultiple ? 'multi-select' : 'select'));
  aui.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '', (opt_data.isMultiple) ? ' multiple' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  var optionList260 = opt_data.options;
  var optionListLen260 = optionList260.length;
  for (var optionIndex260 = 0; optionIndex260 < optionListLen260; optionIndex260++) {
    var optionData260 = optionList260[optionIndex260];
    aui.form.optionOrOptgroup(optionData260, output);
  }
  output.append('</select>');
  return opt_sb ? '' : output.toString();
};


aui.form.optionOrOptgroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.options) {
    output.append('<optgroup label="', soy.$$escapeHtml(opt_data.text), '">');
    var optionList270 = opt_data.options;
    var optionListLen270 = optionList270.length;
    for (var optionIndex270 = 0; optionIndex270 < optionListLen270; optionIndex270++) {
      var optionData270 = optionList270[optionIndex270];
      aui.form.optionOrOptgroup(optionData270, output);
    }
    output.append('</optgroup>');
  } else {
    output.append('<option value="', soy.$$escapeHtml(opt_data.value), '" ', (opt_data.selected) ? 'selected' : '', '>', soy.$$escapeHtml(opt_data.text), '</option>');
  }
  return opt_sb ? '' : output.toString();
};


aui.form.value = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-value');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</span>');
  return opt_sb ? '' : output.toString();
};


aui.form.field = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var isCheckboxOrRadio__soy300 = opt_data.type == 'checkbox' || opt_data.type == 'radio';
  output.append('<div class="', (isCheckboxOrRadio__soy300) ? soy.$$escapeHtml(opt_data.type) : 'field-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  if (opt_data.labelContent && ! isCheckboxOrRadio__soy300) {
    aui.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}, output);
  }
  switch (opt_data.type) {
    case 'textarea':
      aui.form.textarea({id: opt_data.id, name: opt_data.name, value: opt_data.value, rows: opt_data.rows, cols: opt_data.cols, isDisabled: opt_data.isDisabled ? true : false}, output);
      break;
    case 'select':
      aui.form.select({id: opt_data.id, name: opt_data.name, options: opt_data.options, isMultiple: opt_data.isMultiple, size: opt_data.size, isDisabled: opt_data.isDisabled ? true : false}, output);
      break;
    case 'value':
      aui.form.value({id: opt_data.id, content: soy.$$escapeHtml(opt_data.value)}, output);
      break;
    case 'text':
    case 'password':
    case 'file':
    case 'radio':
    case 'checkbox':
    case 'button':
    case 'submit':
    case 'reset':
      aui.form.input({id: opt_data.id, name: opt_data.name, type: opt_data.type, value: opt_data.value, maxLength: opt_data.maxLength, size: opt_data.size, isChecked: opt_data.isChecked, isDisabled: opt_data.isDisabled ? true : false}, output);
      break;
  }
  if (opt_data.labelContent && isCheckboxOrRadio__soy300) {
    aui.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}, output);
  }
  if (opt_data.descriptionText) {
    aui.form.fieldDescription({message: opt_data.descriptionText}, output);
  }
  if (opt_data.errorTexts) {
    var errorList362 = opt_data.errorTexts;
    var errorListLen362 = errorList362.length;
    for (var errorIndex362 = 0; errorIndex362 < errorListLen362; errorIndex362++) {
      var errorData362 = errorList362[errorIndex362];
      aui.form.fieldError({message: errorData362}, output);
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="error');
  aui.renderExtraClasses(opt_data, output);
  output.append('">', soy.$$escapeHtml(opt_data.message), '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="description');
  aui.renderExtraClasses(opt_data, output);
  output.append('">', soy.$$escapeHtml(opt_data.message), '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.textField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'text', labelContent: opt_data.labelContent, value: opt_data.value, maxLength: opt_data.maxLength, size: opt_data.size, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.textareaField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'textarea', labelContent: opt_data.labelContent, value: opt_data.value, rows: opt_data.rows, cols: opt_data.cols, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.passwordField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'password', labelContent: opt_data.labelContent, value: opt_data.value, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.fileField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'file', labelContent: opt_data.labelContent, value: opt_data.value, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.selectField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'select', labelContent: opt_data.labelContent, options: opt_data.options, isMultiple: opt_data.isMultiple, size: opt_data.size, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.checkboxField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param456 = new soy.StringBuilder((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList460 = opt_data.fields;
  var fieldListLen460 = fieldList460.length;
  for (var fieldIndex460 = 0; fieldIndex460 < fieldListLen460; fieldIndex460++) {
    var fieldData460 = fieldList460[fieldIndex460];
    aui.form.field(soy.$$augmentData(fieldData460, {type: 'checkbox', id: fieldData460.id, name: fieldData460.name, labelContent: soy.$$escapeHtml(fieldData460.labelText), isChecked: fieldData460.isChecked, isDisabled: fieldData460.isDisabled, descriptionText: fieldData460.descriptionText, errorTexts: fieldData460.errorTexts, extraClasses: fieldData460.extraClasses, extraAttributes: fieldData460.extraAttributes}), param456);
  }
  param456.append((opt_data.isMatrix) ? '</div>' : '');
  if (opt_data.descriptionText || opt_data.errorTexts && opt_data.errorTexts.length) {
    aui.form.field({descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, isDisabled: false}, param456);
  }
  aui.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param456.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.radioField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param490 = new soy.StringBuilder((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList494 = opt_data.fields;
  var fieldListLen494 = fieldList494.length;
  for (var fieldIndex494 = 0; fieldIndex494 < fieldListLen494; fieldIndex494++) {
    var fieldData494 = fieldList494[fieldIndex494];
    aui.form.field(soy.$$augmentData(fieldData494, {type: 'radio', name: opt_data.name ? opt_data.name : opt_data.id, value: fieldData494.value, id: fieldData494.id, labelContent: soy.$$escapeHtml(fieldData494.labelText), isChecked: fieldData494.isChecked, isDisabled: fieldData494.isDisabled, descriptionText: fieldData494.descriptionText, errorTexts: fieldData494.errorTexts, extraClasses: fieldData494.extraClasses, extraAttributes: fieldData494.extraAttributes}), param490);
  }
  param490.append((opt_data.isMatrix) ? '</div>' : '');
  if (opt_data.descriptionText || opt_data.errorTexts && opt_data.errorTexts.length) {
    aui.form.field({descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, isDisabled: false}, param490);
  }
  aui.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param490.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.valueField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, type: 'value', value: opt_data.value, labelContent: opt_data.labelContent, isRequired: opt_data.isRequired, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from group.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.group == 'undefined') { aui.group = {}; }


aui.group.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-group', (opt_data.isSplit) ? ' aui-group-split' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.group.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-item');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from labels.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.labels == 'undefined') { aui.labels = {}; }


aui.labels.label = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.url && opt_data.isCloseable == true) {
    output.append('<span', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-label aui-label-closeable aui-label-split');
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
    aui.renderExtraAttributes(opt_data, output);
    output.append('><a class="aui-label-split-main" href="', soy.$$escapeHtml(opt_data.url), '">', soy.$$escapeHtml(opt_data.text), '</a><span class="aui-label-split-close" >');
    aui.labels.closeIcon(opt_data, output);
    output.append('</span></span>');
  } else {
    output.append('<', soy.$$escapeHtml(opt_data.url ? 'a' : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-label', (opt_data.isCloseable) ? ' aui-label-closeable' : '');
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
    aui.renderExtraAttributes(opt_data, output);
    output.append((opt_data.url) ? ' href="' + soy.$$escapeHtml(opt_data.url) + '"' : '', '>', soy.$$escapeHtml(opt_data.text));
    if (opt_data.isCloseable) {
      aui.labels.closeIcon(opt_data, output);
    }
    output.append('</', soy.$$escapeHtml(opt_data.url ? 'a' : 'span'), '>');
  }
  return opt_sb ? '' : output.toString();
};


aui.labels.closeIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span tabindex="0" class="aui-icon aui-icon-close"');
  if (opt_data.hasTitle != false) {
    output.append(' title="');
    aui.labels.closeIconText(opt_data, output);
    output.append('"');
  }
  output.append('>');
  aui.labels.closeIconText(opt_data, output);
  output.append('</span>');
  return opt_sb ? '' : output.toString();
};


aui.labels.closeIconText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.closeIconText) ? soy.$$escapeHtml(opt_data.closeIconText) : '(' + soy.$$escapeHtml("Remove") + ' ' + soy.$$escapeHtml(opt_data.text) + ')');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from message.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.message == 'undefined') { aui.message = {}; }


aui.message.info = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'info'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.warning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'warning'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'error'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.success = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'success'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.hint = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'hint'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.generic = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'generic'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.message = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-message ', soy.$$escapeHtml(opt_data.type ? opt_data.type : 'generic'), (opt_data.isCloseable) ? ' closeable' : '', (opt_data.isShadowed) ? ' shadowed' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.titleContent) ? '<p class="title"><strong>' + opt_data.titleContent + '</strong></p>' : '', opt_data.content, '<span class="aui-icon icon-', soy.$$escapeHtml(opt_data.type ? opt_data.type : 'generic'), '"></span>', (opt_data.isCloseable) ? '<span class="aui-icon icon-close" role="button" tabindex="0"></span>' : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from page.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.page == 'undefined') { aui.page = {}; }


aui.page.document = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<!DOCTYPE html><html lang="', soy.$$escapeHtml(opt_ijData.language ? opt_ijData.language : 'en'), '"><head><meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=EDGE"><title>', soy.$$escapeHtml(opt_data.windowTitle), '</title>', (opt_data.headContent) ? opt_data.headContent : '', '</head><body');
  if (opt_data.pageType) {
    if (opt_data.pageType == 'generic') {
      output.append(' ');
      aui.renderExtraClasses(soy.$$augmentData(opt_data, {isFullAttr: true}), output, opt_ijData);
    } else if (opt_data.pageType == 'focused') {
      output.append(' class="aui-layout aui-theme-default aui-page-focused aui-page-focused-', soy.$$escapeHtml(opt_data.focusedPageSize ? opt_data.focusedPageSize : 'xlarge'));
      aui.renderExtraClasses(opt_data, output, opt_ijData);
      output.append('"');
    } else {
      output.append(' class="aui-layout aui-theme-default aui-page-', soy.$$escapeHtml(opt_data.pageType));
      aui.renderExtraClasses(opt_data, output, opt_ijData);
      output.append('"');
    }
  } else {
    output.append(' class="aui-layout aui-theme-default');
    aui.renderExtraClasses(opt_data, output, opt_ijData);
    output.append('"');
  }
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</body></html>');
  return opt_sb ? '' : output.toString();
};


aui.page.page = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="page"><header id="header" role="banner">', opt_data.headerContent, '</header><!-- #header --><section id="content" role="main">', opt_data.contentContent, '</section><!-- #content --><footer id="footer" role="contentinfo">', opt_data.footerContent, '</footer><!-- #footer --></div><!-- #page -->');
  return opt_sb ? '' : output.toString();
};


aui.page.header = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<nav', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-header aui-dropdown2-trigger-group');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append(' role="navigation"><div class="aui-header-inner">', (opt_data.headerBeforeContent) ? '<div class="aui-header-before">' + opt_data.headerBeforeContent + '</div>' : '', '<div class="aui-header-primary"><h1 id="logo" class="aui-header-logo', (opt_data.headerLogoImageUrl) ? ' aui-header-logo-custom' : (opt_data.logo) ? ' aui-header-logo-' + soy.$$escapeHtml(opt_data.logo) : '', '"><a href="', soy.$$escapeHtml(opt_data.headerLink ? opt_data.headerLink : '/'), '">', (opt_data.headerLogoImageUrl) ? '<img src="' + soy.$$escapeHtml(opt_data.headerLogoImageUrl) + '" alt="' + soy.$$escapeHtml(opt_data.headerLogoText) + '" />' : '<span class="aui-header-logo-device">' + soy.$$escapeHtml(opt_data.headerLogoText ? opt_data.headerLogoText : '') + '</span>', (opt_data.headerText) ? '<span class="aui-header-logo-text">' + soy.$$escapeHtml(opt_data.headerText) + '</span>' : '', '</a></h1>', (opt_data.primaryNavContent) ? opt_data.primaryNavContent : '', '</div>', (opt_data.secondaryNavContent) ? '<div class="aui-header-secondary">' + opt_data.secondaryNavContent + '</div>' : '', (opt_data.headerAfterContent) ? '<div class="aui-header-after">' + opt_data.headerAfterContent + '</div>' : '', '</div><!-- .aui-header-inner--></nav><!-- .aui-header -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanel = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), ' class="aui-page-panel');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('><div class="aui-page-panel-inner">', opt_data.content, '</div><!-- .aui-page-panel-inner --></', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '><!-- .aui-page-panel -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelNav = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), ' class="aui-page-panel-nav');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '><!-- .aui-page-panel-nav -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelContent = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), ' class="aui-page-panel-content');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '><!-- .aui-page-panel-content -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelSidebar = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside'), ' class="aui-page-panel-sidebar');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside'), '><!-- .aui-page-panel-sidebar -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelItem = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), ' class="aui-page-panel-item');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '><!-- .aui-page-panel-item -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeader = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header class="aui-page-header');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('><div class="aui-page-header-inner">', opt_data.content, '</div><!-- .aui-page-header-inner --></header><!-- .aui-page-header -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeaderImage = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-image');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-image -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeaderMain = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-main');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-main -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeaderActions = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-actions');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-actions -->');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from panel.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.panel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-panel');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from table.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.table = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.columnsContent) ? opt_data.columnsContent : '', (opt_data.captionContent) ? '<caption>' + opt_data.captionContent + '</caption>' : '', (opt_data.theadContent) ? '<thead>' + opt_data.theadContent + '</thead>' : '', (opt_data.tfootContent) ? '<tfoot>' + opt_data.tfootContent + '</tfoot>' : '', (! opt_data.contentIncludesTbody) ? '<tbody>' : '', opt_data.content, (! opt_data.contentIncludesTbody) ? '</tbody>' : '', '</table>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from tabs.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.tabs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-tabs ', soy.$$escapeHtml(opt_data.isVertical ? 'vertical-tabs' : 'horizontal-tabs'), (opt_data.isDisabled) ? ' aui-tabs-disabled' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><ul class="tabs-menu">');
  var itemList19 = opt_data.menuItems;
  var itemListLen19 = itemList19.length;
  for (var itemIndex19 = 0; itemIndex19 < itemListLen19; itemIndex19++) {
    var itemData19 = itemList19[itemIndex19];
    aui.tabMenuItem(itemData19, output);
  }
  output.append('</ul>', opt_data.paneContent, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.tabMenuItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="menu-item', (opt_data.isActive) ? ' active-tab' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><a href="', soy.$$escapeHtml(opt_data.url), '"><strong>', soy.$$escapeHtml(opt_data.text), '</strong></a></li>');
  return opt_sb ? '' : output.toString();
};


aui.tabPane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="tabs-pane', (opt_data.isActive) ? ' active-pane' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from toolbar.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.toolbar == 'undefined') { aui.toolbar = {}; }


aui.toolbar.toolbar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.split = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-split toolbar-split-', soy.$$escapeHtml(opt_data.split));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</ul>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li ', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-item', (opt_data.isPrimary) ? ' primary' : '', (opt_data.isActive) ? ' active' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</li>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('" href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '"', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</a>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! (opt_data != null)) {
    output.append('Either $text or both $title and $iconClass must be provided.');
  } else {
    var param107 = new soy.StringBuilder();
    aui.toolbar.trigger({url: opt_data.url, title: opt_data.title, content: ((opt_data.iconClass) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClass) + '"></span>' : '') + ((opt_data.text) ? '<span class="trigger-text">' + soy.$$escapeHtml(opt_data.text) + '</span>' : '')}, param107);
    aui.toolbar.item({isActive: opt_data.isActive, isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param107.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


aui.toolbar.link = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param125 = new soy.StringBuilder('toolbar-item-link');
  aui.renderExtraClasses(opt_data, param125);
  var param129 = new soy.StringBuilder();
  aui.toolbar.trigger({url: opt_data.url, content: soy.$$escapeHtml(opt_data.text)}, param129);
  aui.toolbar.item({id: opt_data.id, extraClasses: param125.toString(), extraAttributes: opt_data.extraAttributes, content: param129.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.toolbar.dropdownInternal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param138 = new soy.StringBuilder(opt_data.itemClass);
  aui.renderExtraClasses(opt_data, param138);
  var param143 = new soy.StringBuilder((opt_data.splitButtonContent) ? opt_data.splitButtonContent : '');
  var param148 = new soy.StringBuilder();
  aui.dropdown.trigger({extraClasses: 'toolbar-trigger', accessibilityText: opt_data.text}, param148);
  aui.dropdown.menu({content: opt_data.dropdownItemsContent}, param148);
  aui.dropdown.parent({content: param148.toString()}, param143);
  aui.toolbar.item({isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: param138.toString(), extraAttributes: opt_data.extraAttributes, content: param143.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.toolbar.dropdown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-dropdown', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, text: opt_data.text, dropdownItemsContent: opt_data.dropdownItemsContent}, output);
  return opt_sb ? '' : output.toString();
};


aui.toolbar.splitButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param172 = new soy.StringBuilder();
  aui.toolbar.trigger({url: opt_data.url, content: soy.$$escapeHtml(opt_data.text)}, param172);
  aui.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-splitbutton', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, dropdownItemsContent: opt_data.dropdownItemsContent, splitButtonContent: param172.toString()}, output);
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from toolbar2.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.toolbar2 == 'undefined') { aui.toolbar2 = {}; }


aui.toolbar2.toolbar2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append(' role="toolbar"><div class="aui-toolbar-2-inner">', opt_data.content, '</div></div>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar2.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2-', soy.$$escapeHtml(opt_data.item));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar2.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from progress-tracker.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.progressTracker == 'undefined') { aui.progressTracker = {}; }


aui.progressTracker.progressTracker = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-progress-tracker', (opt_data.isInverted) ? ' aui-progress-tracker-inverted' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  var param18 = new soy.StringBuilder();
  var currentStepList19 = opt_data.steps;
  var currentStepListLen19 = currentStepList19.length;
  for (var currentStepIndex19 = 0; currentStepIndex19 < currentStepListLen19; currentStepIndex19++) {
    var currentStepData19 = currentStepList19[currentStepIndex19];
    if (currentStepData19['isCurrent']) {
      var stepList22 = opt_data.steps;
      var stepListLen22 = stepList22.length;
      for (var stepIndex22 = 0; stepIndex22 < stepListLen22; stepIndex22++) {
        var stepData22 = stepList22[stepIndex22];
        aui.progressTracker.step(soy.$$augmentData(stepData22, {width: Math.round(100 / opt_data.steps.length * 10000) / 10000, href: stepIndex22 < currentStepIndex19 ? stepData22['href'] : null}), param18);
      }
    }
  }
  aui.progressTracker.content({steps: opt_data.steps, content: param18.toString()}, output);
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


aui.progressTracker.content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.content != '') {
    output.append(opt_data.content);
  } else {
    var stepList36 = opt_data.steps;
    var stepListLen36 = stepList36.length;
    for (var stepIndex36 = 0; stepIndex36 < stepListLen36; stepIndex36++) {
      var stepData36 = stepList36[stepIndex36];
      aui.progressTracker.step(soy.$$augmentData(stepData36, {isCurrent: stepIndex36 == 0, width: Math.round(100 / opt_data.steps.length * 10000) / 10000, href: null}), output);
    }
  }
  return opt_sb ? '' : output.toString();
};


aui.progressTracker.step = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-progress-tracker-step', (opt_data.isCurrent) ? ' aui-progress-tracker-step-current' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('" style="width: ', soy.$$escapeHtml(opt_data.width), '%;"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><', soy.$$escapeHtml(opt_data.href ? 'a' : 'span'), (opt_data.href) ? ' href="' + soy.$$escapeHtml(opt_data.href) + '"' : '', '>', soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.href ? 'a' : 'span'), '></li>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from avatar.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.avatar == 'undefined') { aui.avatar = {}; }


aui.avatar.avatar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-avatar aui-avatar-', soy.$$escapeHtml(opt_data.size), soy.$$escapeHtml(opt_data.isProject ? ' aui-avatar-project' : ''), soy.$$escapeHtml(opt_data.badgeContent ? ' aui-avatar-badged' : ''));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><div class="aui-avatar-inner"><img src="', soy.$$escapeHtml(opt_data.avatarImageUrl), '"', (opt_data.accessibilityText) ? ' alt="' + soy.$$escapeHtml(opt_data.accessibilityText) + '"' : '', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', (opt_data.imageClasses) ? ' class="' + soy.$$escapeHtml(opt_data.imageClasses) + '"' : '', ' /></div>', (opt_data.badgeContent) ? opt_data.badgeContent : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from atlassian.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }


atlassian.renderExtraAttributes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data != null && opt_data.extraAttributes) {
    if (Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]') {
      var attrList7 = soy.$$getMapKeys(opt_data.extraAttributes);
      var attrListLen7 = attrList7.length;
      for (var attrIndex7 = 0; attrIndex7 < attrListLen7; attrIndex7++) {
        var attrData7 = attrList7[attrIndex7];
        output.append(' ', soy.$$escapeHtml(attrData7), '="', soy.$$escapeHtml(opt_data.extraAttributes[attrData7]), '"');
      }
    } else {
      output.append(' ', opt_data.extraAttributes);
    }
  }
  return opt_sb ? '' : output.toString();
};


atlassian.renderExtraClasses = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data != null && opt_data.extraClasses) {
    if (opt_data.fullAttr) {
      output.append(' class="');
      if ((opt_data.extraClasses) instanceof Array) {
        var classList26 = opt_data.extraClasses;
        var classListLen26 = classList26.length;
        for (var classIndex26 = 0; classIndex26 < classListLen26; classIndex26++) {
          var classData26 = classList26[classIndex26];
          output.append((! (classIndex26 == 0)) ? ' ' : '', soy.$$escapeHtml(classData26));
        }
      } else {
        output.append(soy.$$escapeHtml(opt_data.extraClasses));
      }
      output.append('"');
    } else {
      if ((opt_data.extraClasses) instanceof Array) {
        var classList38 = opt_data.extraClasses;
        var classListLen38 = classList38.length;
        for (var classIndex38 = 0; classIndex38 < classListLen38; classIndex38++) {
          var classData38 = classList38[classIndex38];
          output.append(' ', soy.$$escapeHtml(classData38));
        }
      } else {
        output.append(' ', soy.$$escapeHtml(opt_data.extraClasses));
      }
    }
  }
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from badges.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.badges == 'undefined') { atlassian.badges = {}; }


atlassian.badges.badge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-badge');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from buttons.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.buttons == 'undefined') { atlassian.buttons = {}; }


atlassian.buttons.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.tagName == 'input') {
    output.append('<input type="', soy.$$escapeHtml(opt_data.inputType ? opt_data.inputType : 'button'), '" ');
    atlassian.buttons.buttonAttributes(opt_data, output);
    output.append(' value="', soy.$$escapeHtml(opt_data.text), '" />');
  } else {
    output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'button'), ' ');
    atlassian.buttons.buttonAttributes(opt_data, output);
    output.append('>');
    atlassian.buttons.buttonIcon(opt_data, output);
    output.append(soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'button'), '>');
  }
  return opt_sb ? '' : output.toString();
};


atlassian.buttons.buttons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-buttons');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


atlassian.buttons.buttonAttributes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-button', (opt_data.splitButtonType == 'main') ? ' aui-button-split-main' : '', (opt_data.dropdown2Target) ? ' aui-dropdown2-trigger' + ((opt_data.splitButtonType == 'more') ? ' aui-button-split-more' : '') : '', (opt_data.type == 'primary') ? ' aui-button-primary' : (opt_data.type == 'link') ? ' aui-button-link' : '');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append((opt_data.pressed) ? ' aria-pressed="' + soy.$$escapeHtml(opt_data.pressed) + '"' : '', (opt_data.disabled) ? ' aria-disabled="' + soy.$$escapeHtml(opt_data.disabled) + '"' + ((opt_data.disabled == true) ? (opt_data.tagName == 'button' || opt_data.tagName == 'input') ? ' disabled="disabled" ' : '' : '') : '', (opt_data.dropdown2Target) ? ' aria-owns="' + soy.$$escapeHtml(opt_data.dropdown2Target) + '" aria-haspopup="true"' : '');
  return opt_sb ? '' : output.toString();
};


atlassian.buttons.buttonIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.iconType) ? '<span class="' + ((opt_data.iconType == 'aui') ? 'aui-icon' : '') + ((opt_data.iconClass) ? ' ' + soy.$$escapeHtml(opt_data.iconClass) : '') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) + ' ' : '') + '</span>' : '');
  return opt_sb ? '' : output.toString();
};


atlassian.buttons.splitButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.buttons.button(soy.$$augmentData(opt_data.splitButtonMain, {splitButtonType: 'main'}), output);
  atlassian.buttons.button(soy.$$augmentData(opt_data.splitButtonMore, {splitButtonType: 'more'}), output);
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from dropdown.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.dropdown == 'undefined') { atlassian.dropdown = {}; }


atlassian.dropdown.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dd-trigger');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('><span class="dropdown-text">', (opt_data.accessibilityText) ? soy.$$escapeHtml(opt_data.accessibilityText) : '', '</span>', (! (opt_data.showIcon == false)) ? '<span class="icon icon-dropdown"></span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};


atlassian.dropdown.menu = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown hidden');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul'), '>');
  return opt_sb ? '' : output.toString();
};


atlassian.dropdown.parent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dd-parent');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


atlassian.dropdown.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="dropdown-item');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('><a href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '">', soy.$$escapeHtml(opt_data.text), '</a></', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from dropdown2.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.dropdown2 == 'undefined') { atlassian.dropdown2 = {}; }


atlassian.dropdown2.dropdown2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.dropdown2.trigger(soy.$$augmentData(opt_data.trigger, {menu: opt_data.menu}), output);
  atlassian.dropdown2.contents(opt_data.menu, output);
  return opt_sb ? '' : output.toString();
};


atlassian.dropdown2.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown2-trigger');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('" aria-owns="', soy.$$escapeHtml(opt_data.menu.id), '" aria-haspopup="true"', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', (opt_data.container) ? ' data-container="' + soy.$$escapeHtml(opt_data.container) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', (opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', (! (opt_data.showIcon == false)) ? '<span class="icon aui-icon-dropdown"></span>' : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), '>');
  return opt_sb ? '' : output.toString();
};


atlassian.dropdown2.contents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="', soy.$$escapeHtml(opt_data.id), '" class="aui-dropdown2');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', '</div>');
  return opt_sb ? '' : output.toString();
};


atlassian.dropdown2.section = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown2-section');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.label) ? '<strong>' + soy.$$escapeHtml(opt_data.label) + '</strong>' : '', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from form.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.form == 'undefined') { atlassian.form = {}; }


atlassian.form.form = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui', (opt_data.isUnsectioned) ? ' unsectioned' : '', (opt_data.isLongLabels) ? ' long-label' : '', (opt_data.isTopLabels) ? ' top-label' : '');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('" action="', soy.$$escapeHtml(opt_data.action), '" method="', soy.$$escapeHtml(opt_data.method ? opt_data.method : 'post'), '"', (opt_data.enctype) ? 'enctype="' + soy.$$escapeHtml(opt_data.enctype) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</form>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.formDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-group');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.fieldset = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var hasClass__soy51 = opt_data.isInline || opt_data.isDateSelect || opt_data.isGroup || opt_data.extraClasses;
  output.append('<fieldset', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  if (hasClass__soy51) {
    output.append(' class="', soy.$$escapeHtml(opt_data.isInline ? 'inline' : opt_data.isDateSelect ? 'date-select' : opt_data.isGroup ? 'group' : ''));
    atlassian.renderExtraClasses(opt_data, output);
    output.append('"');
  }
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('><legend><span>', opt_data.legendContent, '</span></legend>', opt_data.content, '</fieldset>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.fieldGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-group');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.buttons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="buttons-container', (opt_data.alignment) ? ' ' + soy.$$escapeHtml(opt_data.alignment) : '', '"><div class="buttons">', opt_data.content, '</div></div>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.label = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<label', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' for="', soy.$$escapeHtml(opt_data.forField), '"');
  atlassian.renderExtraClasses(soy.$$augmentData(opt_data, {fullAttr: true}), output);
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.input = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<input', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="', soy.$$escapeHtml(opt_data.type == 'password' ? 'text' : opt_data.type == 'submit' ? 'button' : opt_data.type));
  atlassian.renderExtraClasses(opt_data, output);
  output.append('" type="', soy.$$escapeHtml(opt_data.type), '" name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '"', (opt_data.value) ? ' value="' + soy.$$escapeHtml(opt_data.value) + '"' : '', ((opt_data.type == 'checkbox' || opt_data.type == 'radio') && opt_data.isChecked) ? ' checked="checked"' : '', (opt_data.type == 'text' && opt_data.maxLength) ? ' maxlength="' + soy.$$escapeHtml(opt_data.maxLength) + '"' : '', (opt_data.type == 'text' && opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('/>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.submit = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.form.input({id: opt_data.id, name: opt_data.name, type: 'submit', value: opt_data.text, isDisabled: opt_data.isDisabled, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.form.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.form.input({id: opt_data.id, name: opt_data.name, type: 'button', value: opt_data.text, isDisabled: opt_data.isDisabled, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.form.linkButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' name="', soy.$$escapeHtml(opt_data.name ? opt_data.name : opt_data.id), '" href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '" class="cancel');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', soy.$$escapeHtml(opt_data.text), '</a>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.textarea = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<textarea', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '" class="textarea');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.rows) ? ' rows="' + soy.$$escapeHtml(opt_data.rows) + '"' : '', (opt_data.cols) ? ' cols="' + soy.$$escapeHtml(opt_data.cols) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '</textarea>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.select = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<select', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '" class="', soy.$$escapeHtml(opt_data.isMultiple ? 'multi-select' : 'select'));
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '', (opt_data.isMultiple) ? ' multiple' : '');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>');
  var optionList260 = opt_data.options;
  var optionListLen260 = optionList260.length;
  for (var optionIndex260 = 0; optionIndex260 < optionListLen260; optionIndex260++) {
    var optionData260 = optionList260[optionIndex260];
    atlassian.form.optionOrOptgroup(optionData260, output);
  }
  output.append('</select>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.optionOrOptgroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.options) {
    output.append('<optgroup label="', soy.$$escapeHtml(opt_data.text), '">');
    var optionList270 = opt_data.options;
    var optionListLen270 = optionList270.length;
    for (var optionIndex270 = 0; optionIndex270 < optionListLen270; optionIndex270++) {
      var optionData270 = optionList270[optionIndex270];
      atlassian.form.optionOrOptgroup(optionData270, output);
    }
    output.append('</optgroup>');
  } else {
    output.append('<option value="', soy.$$escapeHtml(opt_data.value), '" ', (opt_data.selected) ? 'selected' : '', '>', soy.$$escapeHtml(opt_data.text), '</option>');
  }
  return opt_sb ? '' : output.toString();
};


atlassian.form.value = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-value');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</span>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.field = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var isCheckboxOrRadio__soy300 = opt_data.type == 'checkbox' || opt_data.type == 'radio';
  output.append('<div class="', (isCheckboxOrRadio__soy300) ? soy.$$escapeHtml(opt_data.type) : 'field-group');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>');
  if (opt_data.labelContent && ! isCheckboxOrRadio__soy300) {
    atlassian.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}, output);
  }
  switch (opt_data.type) {
    case 'textarea':
      atlassian.form.textarea({id: opt_data.id, name: opt_data.name, value: opt_data.value, rows: opt_data.rows, cols: opt_data.cols, isDisabled: opt_data.isDisabled ? true : false}, output);
      break;
    case 'select':
      atlassian.form.select({id: opt_data.id, name: opt_data.name, options: opt_data.options, isMultiple: opt_data.isMultiple, size: opt_data.size, isDisabled: opt_data.isDisabled ? true : false}, output);
      break;
    case 'value':
      atlassian.form.value({id: opt_data.id, content: soy.$$escapeHtml(opt_data.value)}, output);
      break;
    case 'text':
    case 'password':
    case 'file':
    case 'radio':
    case 'checkbox':
    case 'button':
    case 'submit':
    case 'reset':
      atlassian.form.input({id: opt_data.id, name: opt_data.name, type: opt_data.type, value: opt_data.value, maxLength: opt_data.maxLength, size: opt_data.size, isChecked: opt_data.isChecked, isDisabled: opt_data.isDisabled ? true : false}, output);
      break;
  }
  if (opt_data.labelContent && isCheckboxOrRadio__soy300) {
    atlassian.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}, output);
  }
  if (opt_data.descriptionText) {
    atlassian.form.fieldDescription({message: opt_data.descriptionText}, output);
  }
  if (opt_data.errorTexts) {
    var errorList362 = opt_data.errorTexts;
    var errorListLen362 = errorList362.length;
    for (var errorIndex362 = 0; errorIndex362 < errorListLen362; errorIndex362++) {
      var errorData362 = errorList362[errorIndex362];
      atlassian.form.fieldError({message: errorData362}, output);
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.fieldError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="error');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('">', soy.$$escapeHtml(opt_data.message), '</div>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.fieldDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="description');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('">', soy.$$escapeHtml(opt_data.message), '</div>');
  return opt_sb ? '' : output.toString();
};


atlassian.form.textField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.form.field({id: opt_data.id, name: opt_data.name, type: 'text', labelContent: opt_data.labelContent, value: opt_data.value, maxLength: opt_data.maxLength, size: opt_data.size, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.form.textareaField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.form.field({id: opt_data.id, name: opt_data.name, type: 'textarea', labelContent: opt_data.labelContent, value: opt_data.value, rows: opt_data.rows, cols: opt_data.cols, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.form.passwordField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.form.field({id: opt_data.id, name: opt_data.name, type: 'password', labelContent: opt_data.labelContent, value: opt_data.value, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.form.fileField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.form.field({id: opt_data.id, name: opt_data.name, type: 'file', labelContent: opt_data.labelContent, value: opt_data.value, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.form.selectField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.form.field({id: opt_data.id, name: opt_data.name, type: 'select', labelContent: opt_data.labelContent, options: opt_data.options, isMultiple: opt_data.isMultiple, size: opt_data.size, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.form.checkboxField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param456 = new soy.StringBuilder((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList460 = opt_data.fields;
  var fieldListLen460 = fieldList460.length;
  for (var fieldIndex460 = 0; fieldIndex460 < fieldListLen460; fieldIndex460++) {
    var fieldData460 = fieldList460[fieldIndex460];
    atlassian.form.field(soy.$$augmentData(fieldData460, {type: 'checkbox', id: fieldData460.id, name: fieldData460.name, labelContent: soy.$$escapeHtml(fieldData460.labelText), isChecked: fieldData460.isChecked, isDisabled: fieldData460.isDisabled, descriptionText: fieldData460.descriptionText, errorTexts: fieldData460.errorTexts, extraClasses: fieldData460.extraClasses, extraAttributes: fieldData460.extraAttributes}), param456);
  }
  param456.append((opt_data.isMatrix) ? '</div>' : '');
  if (opt_data.descriptionText || opt_data.errorTexts && opt_data.errorTexts.length) {
    atlassian.form.field({descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, isDisabled: false}, param456);
  }
  atlassian.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param456.toString()}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.form.radioField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param490 = new soy.StringBuilder((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList494 = opt_data.fields;
  var fieldListLen494 = fieldList494.length;
  for (var fieldIndex494 = 0; fieldIndex494 < fieldListLen494; fieldIndex494++) {
    var fieldData494 = fieldList494[fieldIndex494];
    atlassian.form.field(soy.$$augmentData(fieldData494, {type: 'radio', name: opt_data.name ? opt_data.name : opt_data.id, value: fieldData494.value, id: fieldData494.id, labelContent: soy.$$escapeHtml(fieldData494.labelText), isChecked: fieldData494.isChecked, isDisabled: fieldData494.isDisabled, descriptionText: fieldData494.descriptionText, errorTexts: fieldData494.errorTexts, extraClasses: fieldData494.extraClasses, extraAttributes: fieldData494.extraAttributes}), param490);
  }
  param490.append((opt_data.isMatrix) ? '</div>' : '');
  if (opt_data.descriptionText || opt_data.errorTexts && opt_data.errorTexts.length) {
    atlassian.form.field({descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, isDisabled: false}, param490);
  }
  atlassian.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param490.toString()}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.form.valueField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.form.field({id: opt_data.id, type: 'value', value: opt_data.value, labelContent: opt_data.labelContent, isRequired: opt_data.isRequired, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from group.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.group == 'undefined') { atlassian.group = {}; }


atlassian.group.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-group', (opt_data.isSplit) ? ' aui-group-split' : '');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


atlassian.group.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-item');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from labels.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.labels == 'undefined') { atlassian.labels = {}; }


atlassian.labels.label = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.url && opt_data.isCloseable == true) {
    output.append('<span', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-label aui-label-closeable aui-label-split');
    atlassian.renderExtraClasses(opt_data, output);
    output.append('"');
    atlassian.renderExtraAttributes(opt_data, output);
    output.append('><a class="aui-label-split-main" href="', soy.$$escapeHtml(opt_data.url), '">', soy.$$escapeHtml(opt_data.text), '</a><span class="aui-label-split-close" >');
    atlassian.labels.closeIcon(opt_data, output);
    output.append('</span></span>');
  } else {
    output.append('<', soy.$$escapeHtml(opt_data.url ? 'a' : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-label', (opt_data.isCloseable) ? ' aui-label-closeable' : '');
    atlassian.renderExtraClasses(opt_data, output);
    output.append('"');
    atlassian.renderExtraAttributes(opt_data, output);
    output.append((opt_data.url) ? ' href="' + soy.$$escapeHtml(opt_data.url) + '"' : '', '>', soy.$$escapeHtml(opt_data.text));
    if (opt_data.isCloseable) {
      atlassian.labels.closeIcon(opt_data, output);
    }
    output.append('</', soy.$$escapeHtml(opt_data.url ? 'a' : 'span'), '>');
  }
  return opt_sb ? '' : output.toString();
};


atlassian.labels.closeIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span tabindex="0" class="aui-icon aui-icon-close"');
  if (opt_data.hasTitle != false) {
    output.append(' title="');
    atlassian.labels.closeIconText(opt_data, output);
    output.append('"');
  }
  output.append('>');
  atlassian.labels.closeIconText(opt_data, output);
  output.append('</span>');
  return opt_sb ? '' : output.toString();
};


atlassian.labels.closeIconText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.closeIconText) ? soy.$$escapeHtml(opt_data.closeIconText) : '(' + soy.$$escapeHtml("Remove") + ' ' + soy.$$escapeHtml(opt_data.text) + ')');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from message.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.message == 'undefined') { atlassian.message = {}; }


atlassian.message.info = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.message.message(soy.$$augmentData(opt_data, {type: 'info'}), output);
  return opt_sb ? '' : output.toString();
};


atlassian.message.warning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.message.message(soy.$$augmentData(opt_data, {type: 'warning'}), output);
  return opt_sb ? '' : output.toString();
};


atlassian.message.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.message.message(soy.$$augmentData(opt_data, {type: 'error'}), output);
  return opt_sb ? '' : output.toString();
};


atlassian.message.success = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.message.message(soy.$$augmentData(opt_data, {type: 'success'}), output);
  return opt_sb ? '' : output.toString();
};


atlassian.message.hint = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.message.message(soy.$$augmentData(opt_data, {type: 'hint'}), output);
  return opt_sb ? '' : output.toString();
};


atlassian.message.generic = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.message.message(soy.$$augmentData(opt_data, {type: 'generic'}), output);
  return opt_sb ? '' : output.toString();
};


atlassian.message.message = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-message ', soy.$$escapeHtml(opt_data.type ? opt_data.type : 'generic'), (opt_data.isCloseable) ? ' closeable' : '', (opt_data.isShadowed) ? ' shadowed' : '');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.title) ? '<p class="title"><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></p>' : '', opt_data.content, '<span class="aui-icon icon-', soy.$$escapeHtml(opt_data.type ? opt_data.type : 'generic'), '"></span>', (opt_data.isCloseable) ? '<span class="aui-icon icon-close" role="button" tabindex="0"></span>' : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from page.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.page == 'undefined') { atlassian.page = {}; }


atlassian.page.document = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<!DOCTYPE html><html lang="', soy.$$escapeHtml(opt_ijData.language ? opt_ijData.language : 'en'), '"><head><meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=EDGE"><title>', soy.$$escapeHtml(opt_data.windowTitle), '</title>', (opt_data.headContent) ? opt_data.headContent : '', '</head><body');
  atlassian.renderExtraClasses(soy.$$augmentData(opt_data, {fullAttr: true}), output, opt_ijData);
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</body></html>');
  return opt_sb ? '' : output.toString();
};


atlassian.page.page = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="page"><header id="header" role="banner">', opt_data.headerContent, '</header><!-- #header --><section id="content" role="main">', opt_data.contentContent, '</section><!-- #content --><footer id="footer" role="contentinfo">', opt_data.footerContent, '</footer><!-- #footer --></div><!-- #page -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.header = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<nav', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-header aui-dropdown2-trigger-group');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append(' role="navigation"><div class="aui-header-inner">', (opt_data.headerBeforeContent) ? '<div class="aui-header-before">' + opt_data.headerBeforeContent + '</div>' : '', '<div class="aui-header-primary"><h1 id="logo" class="aui-header-logo', (opt_data.headerLogoImageUrl) ? ' aui-header-logo-custom' : (opt_data.logo) ? ' aui-header-logo-' + soy.$$escapeHtml(opt_data.logo) : '', '"><a href="', soy.$$escapeHtml(opt_data.headerLink ? opt_data.headerLink : '/'), '">', (opt_data.headerLogoImageUrl) ? '<img src="' + soy.$$escapeHtml(opt_data.headerLogoImageUrl) + '" alt="' + soy.$$escapeHtml(opt_data.headerLogoText) + '" />' : '<span class="aui-header-logo-device">' + soy.$$escapeHtml(opt_data.headerLogoText ? opt_data.headerLogoText : '') + '</span>', (opt_data.headerText) ? '<span class="aui-header-logo-text">' + soy.$$escapeHtml(opt_data.headerText) + '</span>' : '', '</a></h1>', (opt_data.primaryNavContents) ? opt_data.primaryNavContents : '', '</div>', (opt_data.secondaryNavContents) ? '<div class="aui-header-secondary">' + opt_data.secondaryNavContents + '</div>' : '', (opt_data.headerAfterContent) ? '<div class="aui-header-after">' + opt_data.headerAfterContent + '</div>' : '', '</div><!-- .aui-header-inner--></nav><!-- .aui-header -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.pagePanel = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), ' class="aui-page-panel');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('><div class="aui-page-panel-inner">', opt_data.content, '</div><!-- .aui-page-panel-inner --></', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '><!-- .aui-page-panel -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.pagePanelNav = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), ' class="aui-page-panel-nav');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '><!-- .aui-page-panel-nav -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.pagePanelContent = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), ' class="aui-page-panel-content');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '><!-- .aui-page-panel-content -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.pagePanelSidebar = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside'), ' class="aui-page-panel-sidebar');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside'), '><!-- .aui-page-panel-sidebar -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.pagePanelItem = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), ' class="aui-page-panel-item');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '><!-- .aui-page-panel-item -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.pageHeader = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header class="aui-page-header');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('><div class="aui-page-header-inner">', opt_data.content, '</div><!-- .aui-page-header-inner --></header><!-- .aui-page-header -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.pageHeaderImage = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-image');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-image -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.pageHeaderMain = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-main');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-main -->');
  return opt_sb ? '' : output.toString();
};


atlassian.page.pageHeaderActions = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-actions');
  atlassian.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-actions -->');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from panel.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }


atlassian.panel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-panel');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from table.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }


atlassian.table = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.columnsContent) ? opt_data.columnsContent : '', (opt_data.captionContent) ? '<caption>' + opt_data.captionContent + '</caption>' : '', (opt_data.theadContent) ? '<thead>' + opt_data.theadContent + '</thead>' : '', (opt_data.tfootContent) ? '<tfoot>' + opt_data.tfootContent + '</tfoot>' : '', (! opt_data.contentIncludesTbody) ? '<tbody>' : '', opt_data.content, (! opt_data.contentIncludesTbody) ? '</tbody>' : '', '</table>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from tabs.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }


atlassian.tabs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-tabs ', soy.$$escapeHtml(opt_data.isVertical ? 'vertical-tabs' : 'horizontal-tabs'), (opt_data.isDisabled) ? ' aui-tabs-disabled' : '');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('><ul class="tabs-menu">');
  var itemList19 = opt_data.menuItems;
  var itemListLen19 = itemList19.length;
  for (var itemIndex19 = 0; itemIndex19 < itemListLen19; itemIndex19++) {
    var itemData19 = itemList19[itemIndex19];
    atlassian.tabMenuItem(itemData19, output);
  }
  output.append('</ul>', opt_data.paneContent, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


atlassian.tabMenuItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="menu-item', (opt_data.isActive) ? ' active-tab' : '');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('><a href="', soy.$$escapeHtml(opt_data.url), '"><strong>', soy.$$escapeHtml(opt_data.text), '</strong></a></li>');
  return opt_sb ? '' : output.toString();
};


atlassian.tabPane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="tabs-pane', (opt_data.isActive) ? ' active-pane' : '');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from toolbar.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.toolbar == 'undefined') { atlassian.toolbar = {}; }


atlassian.toolbar.toolbar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar.split = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-split toolbar-split-', soy.$$escapeHtml(opt_data.split));
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-group');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</ul>');
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li ', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-item', (opt_data.isPrimary) ? ' primary' : '', (opt_data.isActive) ? ' active' : '');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</li>');
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-trigger');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('" href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '"', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</a>');
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! (opt_data != null)) {
    output.append('Either $text or both $title and $iconClass must be provided.');
  } else {
    var param107 = new soy.StringBuilder();
    atlassian.toolbar.trigger({url: opt_data.url, title: opt_data.title, content: ((opt_data.iconClass) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClass) + '"></span>' : '') + ((opt_data.text) ? '<span class="trigger-text">' + soy.$$escapeHtml(opt_data.text) + '</span>' : '')}, param107);
    atlassian.toolbar.item({isActive: opt_data.isActive, isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param107.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar.link = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param125 = new soy.StringBuilder('toolbar-item-link');
  atlassian.renderExtraClasses(opt_data, param125);
  var param129 = new soy.StringBuilder();
  atlassian.toolbar.trigger({url: opt_data.url, content: soy.$$escapeHtml(opt_data.text)}, param129);
  atlassian.toolbar.item({id: opt_data.id, extraClasses: param125.toString(), extraAttributes: opt_data.extraAttributes, content: param129.toString()}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar.dropdownInternal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param138 = new soy.StringBuilder(opt_data.itemClass);
  atlassian.renderExtraClasses(opt_data, param138);
  var param143 = new soy.StringBuilder((opt_data.splitButtonContent) ? opt_data.splitButtonContent : '');
  var param148 = new soy.StringBuilder();
  atlassian.dropdown.trigger({extraClasses: 'toolbar-trigger', accessibilityText: opt_data.text}, param148);
  atlassian.dropdown.menu({content: opt_data.dropdownItemsContent}, param148);
  atlassian.dropdown.parent({content: param148.toString()}, param143);
  atlassian.toolbar.item({isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: param138.toString(), extraAttributes: opt_data.extraAttributes, content: param143.toString()}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar.dropdown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  atlassian.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-dropdown', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, text: opt_data.text, dropdownItemsContent: opt_data.dropdownItemsContent}, output);
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar.splitButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param172 = new soy.StringBuilder();
  atlassian.toolbar.trigger({url: opt_data.url, content: soy.$$escapeHtml(opt_data.text)}, param172);
  atlassian.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-splitbutton', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, dropdownItemsContent: opt_data.dropdownItemsContent, splitButtonContent: param172.toString()}, output);
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from toolbar2.soy.
// Please don't edit this file by hand.

if (typeof atlassian == 'undefined') { var atlassian = {}; }
if (typeof atlassian.toolbar2 == 'undefined') { atlassian.toolbar2 = {}; }


atlassian.toolbar2.toolbar2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append(' role="toolbar"><div class="aui-toolbar-2-inner">', opt_data.content, '</div></div>');
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar2.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2-', soy.$$escapeHtml(opt_data.item));
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


atlassian.toolbar2.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2-group');
  atlassian.renderExtraClasses(opt_data, output);
  output.append('"');
  atlassian.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from page-move-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.MovePage == 'undefined') { Confluence.Templates.MovePage = {}; }


Confluence.Templates.MovePage.errorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="move-errors" class="hidden warning"></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.breadcrumbItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a class="', soy.$$escapeHtml(opt_data.className), '" title="', soy.$$escapeHtml(opt_data.title), '" tabindex="-1"><span>', soy.$$escapeHtml(opt_data.text), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.breadcrumbLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="loading"><span>', "Loading breadcrumbs\u2026", '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.breadcrumbError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="warning last"><span>', soy.$$escapeHtml("Error retrieving breadcrumbs."), '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.noMatchingPages = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol><li><span class="warning">', soy.$$escapeHtml("No matching pages found."), '</span></li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.noMatchingSpaces = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol><li><span class="warning">', soy.$$escapeHtml("No matching spaces found."), '</span></li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.searchResultsLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="searching">', soy.$$escapeHtml("Searching\u2026"), '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.pageHistoryLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="searching">', soy.$$escapeHtml("Loading\u2026"), '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.panelLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span>', soy.$$escapeHtml("Loading\u2026"), '</span>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.browsePanelSpace = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul><li id=\'tree-root-node-item\' class=\'root-node-list-item\'><a class=\'root-node\' href=\'#\'>', soy.$$escapeHtml(opt_data.linkText), '</a></li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.orderingPagePanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="orderingPlaceHolder"></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.reorderCheckbox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span id="reorderRequirement"><input id="reorderCheck" type="checkbox" name="reorderFlag" title="', soy.$$escapeHtml("Choose the position of this page within the list of child pages."), '"/><label for="reorderCheck" title="', soy.$$escapeHtml("Choose the position of this page within the list of child pages."), '">', soy.$$escapeHtml("Reorder"), '</label></span>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "http://docs.atlassian.com/confluence/docs-50/Moving+a+Page"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.historyPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="row information"><div class="inner"><div class="element">', soy.$$escapeHtml(AJS.format("Select the new parent page for this page and its children from your history.",opt_data.pageTitle)), '</div></div></div><div id="move-page-search-container" class="row"><div class="search-results"></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.browsePanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="row information"><div class="inner"><div class="element">', soy.$$escapeHtml(AJS.format("Click to select the new parent page for this page and its children.",opt_data.pageTitle)), '</div></div></div><div class="tree"></div>');
  return opt_sb ? '' : output.toString();
};

jQuery.fn.movePageOrdering=function(i,j,g,e){var f=jQuery;var c=f("#confluence-context-path").attr("content");var b=f("#orderingPlaceHolder",this);b.addClass("loading").html(Confluence.Templates.MovePage.panelLoading());b.load(c+"/panels/reorderpage.action",{panelName:"reorder",spaceKey:i,title:j,movedPageId:AJS.params.pageId,pageTitle:g},function(){b.removeClass("loading");h(b,e);a(f(".siblings",b))});var d=function(m,o){var l;var n=m.prevAll("li.sibling")[0];if(n){l="below"}else{l="above";n=m.nextAll("li.sibling")[0]}if(n){AJS.log("Reorder: positionIndicator = "+l+" and target = "+n.innerHTML);var k=f("i",n).text();o(k,l)}};var h=function(k,p){var m=f(".dropper",k),o=f(".target",m);var l=0;f("li",m).each(function(q){!q&&f(this).before(f('<li class="leading">&nbsp;</li>'));f(this).after(f('<li class="leading">&nbsp;</li>'))});var n=o.next();f(".leading",m).hover(function(q){f(this).addClass("here")},function(){f(this).removeClass("here")}).click(function(){d(f(this),p);var q=this;o.hide(150,function(){q!=n[0]&&f(q).after(n).after(o);o.show(150)})})};var a=function(k){var m=f(".target",k);if(m.length){var l=m.position().top;var n=k.height();if(l<0||l>n){k.scrollTop(k.scrollTop()+l-n/3)}}}};
jQuery.fn.renderBreadcrumbs=function(k){var g=jQuery,e=this,j=[],h=0,m=k.length-1,a=k[h],c=a.url.indexOf("~")>=0?"personalspacedesc":"spacedesc",l,b=e.closest(".breadcrumbs-container").width(),f=function(){return e.width()<b},d;j.push(Confluence.Templates.MovePage.breadcrumbItem({text:a.title,title:a.title,className:(h==m?"last":"")}));while(h++<m){l=k[h];j.push(Confluence.Templates.MovePage.breadcrumbItem({text:l.title,title:l.title,className:(h==m?"last":"")}))}this.html(j.join(""));d=g("li a span",this);d.each(function(i){if(i!=0&&i!=m){g(this).shortenUntil(f)}});g(d.get(0)).shortenUntil(f);g(d.get(m)).shortenUntil(f);return this};AJS.toInit(function(d){var b=d("#confluence-context-path").attr("content");function a(e){for(var f=1;f<e.length;f++){if(e[f].title==AJS.Meta.get("page-title")){return false}}return true}if(!AJS.MoveDialog){AJS.MoveDialog={}}var c={};AJS.MoveDialog.getBreadcrumbs=function(f,h,e){var g=f.userName?f.userName:(f.pageId?(f.pageId+":"+f.fileName):(f.spaceKey+":"+f.title+":"+f.postingDay+":"+f.fileName));if(g in c){h(c[g],"success");return}d.ajax({type:"GET",dataType:"json",data:f,url:b+"/pages/breadcrumb.action",error:e||function(){},success:function(j,k){if(!j||!j.breadcrumbs){e(j,k);return}var i=d.makeArray(j.breadcrumbs);while(i[0]&&j.type!="userinfo"&&/peopledirectory\.action$/.test(i[0].url)){i.shift()}if(j.type=="page"&&i[1]&&/pages\.action/.test(i[1].url)){i.splice(1,1)}i.type=j.type;c[g]=i;h(i,k)}})};AJS.MoveDialog.Breadcrumbs=function(h,f){var e=0;function g(l,k,j){h.renderBreadcrumbs(k);var i=l!=AJS.Meta.get("space-key")||a(k);if(i){j.clearErrors();d(j.moveButton).prop("disabled",false)}else{j.error("You cannot move a page to be underneath itself or its children.");d("li:last-child",h).addClass("warning")}}return{update:function(j,i){h.html(Confluence.Templates.MovePage.breadcrumbLoading());var k=e+=1;var l=function(){if(k!=e){AJS.log("Breadcrumb response for ");AJS.log(j);AJS.log(" is stale, ignoring.");return true}return false};(f||AJS.MoveDialog.getBreadcrumbs)(j,function(m,n){if(l()){return}if(n!="success"||!m){h.html(Confluence.Templates.MovePage.breadcrumbError());return}g(j.spaceKey,m,i)},function(m){if(l()){return}h.html(Confluence.Templates.MovePage.breadcrumbError());if(m.status==404){i.error("The specified page was not found.")}})}}};AJS.Breadcrumbs={};AJS.Breadcrumbs.getBreadcrumbs=function(f,h,e){if(!f.id){throw new Error("id is a required parameter in 'options'")}if(!f.type){throw new Error("type is a required parameter in 'options'")}var g=f.id+":"+f.type;if(g in c){h(c[g],"success");return}d.ajax({type:"GET",dataType:"json",data:f,url:Confluence.getContextPath()+AJS.REST.getBaseUrl()+"breadcrumb",error:e||function(){},success:function(j,k){if(!j||!j.breadcrumbs){e(j,k);return}var i=d.makeArray(j.breadcrumbs);while(i[0]&&j.type!="userinfo"&&/peopledirectory.action$/.test(i[0].url)){i.shift()}i.type=j.type;c[g]=i;h(i,k)}})}});
jQuery.fn.movePageAutocomplete=function(d,c,b,a){var f=jQuery;var e=a;AJS.log(d);return f(this).quicksearch(d,null,{dropdownPostprocess:function(g){f("> ol.last",g).remove();if(!f("> ol",g).length){f(g).append(b)}f("> ol:last-child",g).addClass("last");f("a",g).attr("tabindex","-1")},dropdownPlacement:function(g){f(c).append(g)},ajsDropDownOptions:{selectionHandler:function(h,g){if(g){this.hide("selected");e(h,g);h.preventDefault()}}}})};jQuery.fn.movePageLocation=function(c){var f=jQuery;var b=f(this);var e=f("#new-space",b);var d=f("#new-space-key",b);var a=f("#new-parent-page",b);var g=function(){if(e.is(":visible")){if(e.val()==""){e.val(AJS.Meta.get("space-name"));d.val(AJS.Meta.get("space-key"))}c.clearErrors();c.select(d.val(),e.val(),a.val())}};a.blur(g).focus(function(){c.clearErrors();AJS.dropDown.current&&AJS.dropDown.current.hide()});e.blur(g).focus(function(){AJS.dropDown.current&&AJS.dropDown.current.hide()});e.movePageAutocomplete("/json/contentnamesearch.action?type=spacedesc&type=personalspacedesc",f(".new-space-dropdown",b),Confluence.Templates.MovePage.noMatchingSpaces(),function(j,i){var h=i.find("span").data("properties");d.val(h.spaceKey);e.val(AJS("span").html(h.name).text());a.val("");g();a.focus()});a.movePageAutocomplete(function(){return"/json/contentnamesearch.action?type=page&spaceKey="+d.val()},f(".new-parent-page-dropdown",b),Confluence.Templates.MovePage.noMatchingPages(),function(i,h){var j=AJS("span").html(h.find("span").data("properties").name).text();a.val(j);g();window.setTimeout(function(){c.moveButton.focus()},50)})};
jQuery.fn.movePageSearch=function(b){var h=jQuery;var c=h("#confluence-context-path").attr("content");var a=this;var e=h("input[type=button]",a);var g=h("input.search-query",a);var f=h(".search-space",a);var d=h(".search-results",a);h([f[0],g[0]]).keydown(function(i){if(i.which==13){e.click()}});h([g[0],d[0]]).keydown(function(j){function i(n){var l=h(".search-result",a);var m=h(".search-result.selected",a);var k=l.index(m)+n;if(k<0){k=l.length-1}if(k>=l.length){k=0}l.eq(k).click()}if(j.which==38){i(-1)}else{if(j.which==40){i(1)}}});e.click(function(){b.clearErrors();var i=g.val();if(i==""){d.empty();return}d.html(Confluence.Templates.MovePage.searchResultsLoading());h.ajax({type:"GET",dataType:"json",data:{queryString:i,where:f.val(),types:["spacedesc","personalspacedesc","page"]},url:c+"/json/search.action",error:function(){b.error("Failed to retrieve search results from the server.")},success:function(k,j){if(j!="success"){b.error("Failed to retrieve search results from the server.");return}var l={select:function(m,n){if(n.type=="page"){b.select(n.spaceKey,n.spaceName,n.title,n.id)}else{b.select(n.spaceKey,n.spaceName)}}};d.searchResultsGrid(i,k,h(b).extend(l),{noSearchResults:"There were no pages found containing \u003cb>{0}\u003c\/b>.",resultsCount:"Showing \u003cb>{0}\u003c\/b>-\u003cb>{1}\u003c\/b> of \u003cb>{2}\u003c\/b> pages containing \u003cb>{3}\u003c\/b>."})}})})};
jQuery.fn.movePageHistory=function(b){var e=jQuery;var c=e("#confluence-context-path").attr("content");var a=this;var d=e(".search-results",a);e(d).keydown(function(g){function f(k){var i=e(".search-result",a);var j=e(".search-result.selected",a);var h=i.index(j)+k;if(h<0){h=i.length-1}if(h>=i.length){h=0}i.eq(h).click()}if(g.which==38){f(-1)}else{if(g.which==40){f(1)}}});d.html(Confluence.Templates.MovePage.pageHistoryLoading());e.ajax({type:"GET",dataType:"json",data:{types:["spacedesc","personalspacedesc","page"]},url:c+"/json/history.action",error:function(){b.error(AJS.params.movePageDialogHistoryError)},success:function(g,f){if(f!="success"){b.error(AJS.params.movePageDialogHistoryError);return}if(!g.history||g.history.length==0){d.html("<div class='no-results'>"+"There were no recently viewed pages found."+"</div>");return}d.html(AJS.getTemplate("searchResultsGrid").toString());e.each(g.history,function(){var i=this;if(i.id==AJS.params.pageId){return}var h=AJS.$(AJS.renderTemplate("searchResultsGridRow",[i.title,c+i.url,i.type,i.spaceName,i.spaceKey,i.friendlyDate,i.date]));e(h).click(function(j){if(i.type=="page"){b.select(i.spaceKey,i.spaceName,i.title,i.id)}else{b.select(i.spaceKey,i.spaceName)}d.find(".selected").removeClass("selected");e(this).addClass("selected");return AJS.stopEvent(j)});e(h).hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")});d.find("table").append(h)});if(e(".search-result",d).length==0){d.html("<div class='no-results'>"+"There were no recently viewed pages found."+"</div>")}}})};
jQuery.fn.movePageBrowse=function(m,j,b,l,d,f){var e=jQuery;var c=e("#confluence-context-path").attr("content");var a=this;var g=e(".tree",a);g.addClass("loading").html(Confluence.Templates.MovePage.panelLoading());var o,k=function(){g.removeClass("rendering").addClass("expanding");e("#parent-selection-tree .dialog-button-panel").remove();h(AJS.Meta.get("space-key"),d,function(s){if(s&&d!=""){var p=o.findNodeBy("text",d);if(p){p.$.find("> a").addClass("current-parent")}}var r=AJS.Meta.get("page-title");if(s&&r){var q=o.findNodeBy("text",r);if(q){q.makeUnclickable();if(r!=f){q.setText(f)}}}h(j,l,function(w){if(w){var v=o.findNodeBy("text",l);if(v){v.$.find("> a").addClass("highlighted");var t=v.$.position().top;var u=g.height();if(t<0||t>u){g.scrollTop(g.scrollTop()+t-u/3)}}}g.removeClass("expanding")})})};var i=function(p){p.preventDefault();e("a.highlighted",g).removeClass("highlighted");e(this).addClass("highlighted");j=e("#chosenSpaceKey").val();b=e("#chosenSpaceKey option:selected").text();l=e(this).hasClass("root-node")?"":e(this).find("span").text();m.select(j,b,l)};var n=function(){e("select#chosenSpaceKey").val(j).change(function(){var q=e(this).val();var p=e(this).find("option:selected").text();e("#tree-root-node-item a").text(p).toggleClass("highlighted",j==q&&l=="").toggleClass("current-parent",AJS.Meta.get("space-key")==q&&d=="");g.addClass("rendering");o=o.reload({initUrl:c+"/pages/children.action?spaceKey="+encodeURIComponent(q)+"&node=root"})});e("#tree-root-div").html(Confluence.Templates.MovePage.browsePanelSpace({linkText:b})).find("a").click(i).toggleClass("highlighted",l=="").toggleClass("current-parent",AJS.Meta.get("space-key")==j&&d=="")};var h=function(q,p,r){if(q!=e("#chosenSpaceKey").val()){r(false);return}console.log("before breadcrumbs");AJS.MoveDialog.getBreadcrumbs({spaceKey:q,title:p},function(s){var t=s.slice(1);t[0]&&t[0].url.indexOf("collector/pages.action")!==-1&&t.shift();var u=e.map(t,function(v){return{text:v.title}});console.log("before expandPath");o.expandPath(u,function(){console.log("expandPath callback");r(true)})},function(){m.error("Could not retrieve tree expansion information.");r(false)})};g.load(c+"/panels/browsepagelocation.action",{panelName:"browse",dialogMode:"view",spaceKey:j,parentPageString:l,pageId:AJS.params.pageId},function(){g.removeClass("loading").addClass("rendering");n();o=e("#parent-selection-tree").tree({url:c+"/pages/children.action",initUrl:c+"/pages/children.action?spaceKey="+encodeURIComponent(j)+"&node=root",parameters:["pageId","text"],undraggable:true,spinnerId:"move-page-dialog-spinner",nodeId:"pageId",click:i,onready:k,oninsert:function(){var p=this.$;if(p.parents("li:first").attr("unclickable")){this.makeUnclickable()}}});AJS.MoveDialog.tree=o})};
AJS.toInit(function(g){var h=840;var e=590;var f=71;Confluence.MovePageDialog=function(k){var p=AJS.Meta.get("page-title");k=g.extend({spaceKey:AJS.Meta.get("space-key"),spaceName:AJS.Meta.get("space-name"),pageTitle:p,parentPageTitle:AJS.Meta.get("parent-page-title"),title:AJS.format("Move Page \u2013 \u2018{0}\u2019",p),buttonName:"Move",openedPanel:"Advanced",moveHandler:function(I){AJS.log("No move handler defined. Closing dialog.");I.remove()},cancelHandler:function(I){I.remove();return false}},k);var z={spaceKey:k.spaceKey,spaceName:k.spaceName,parentPageTitle:k.parentPageTitle};var j=k.spaceKey;var B=k.spaceName;var F=k.parentPageTitle;var n="";var q="";var o=function(I,J){n=I;q=J};var G=AJS.ConfluenceDialog({width:h,height:e,id:"move-page-dialog"});G.addHeader(k.title);G.addPanel("Advanced",AJS.renderTemplate("movePageDialog"),"location-panel","location-panel-id");G.addPanel("Search",AJS.renderTemplate("movePageSearchPanel"),"search-panel","search-panel-id");G.addPanel("Recently Viewed",Confluence.Templates.MovePage.historyPanel({pageTitle:AJS.Meta.get("page-title")}),"history-panel","history-panel-id");G.addPanel("Browse",Confluence.Templates.MovePage.browsePanel({pageTitle:AJS.Meta.get("page-title")}),"browse-panel","browse-panel-id");G.get('#"'+"Advanced"+'"')[0].onselect=function(){g("#new-space-key").val(j);g("#new-space").val(B);g("#new-parent-page").val(F).select()};G.get('#"'+"Search"+'"')[0].onselect=function(){g("#move-page-dialog .search-panel .search-results .selected").removeClass("selected");g("#move-page-dialog input.search-query").focus()};G.get('#"'+"Recently Viewed"+'"')[0].onselect=function(){g(".history-panel",C).movePageHistory(u)};G.get('#"'+"Browse"+'"')[0].onselect=function(){AJS.log("browse: "+[j,B,F].join());g(".browse-panel",C).movePageBrowse(u,j,B,F,t,k.pageTitle)};var A=function(J){J.nextPage();var I=g("#move-page-dialog");g(".ordering-panel",I).movePageOrdering(j,F,k.pageTitle,o)};var x=function(J){var L=g("#new-space:visible").val();var K=g("#new-space-key").val();var I=g("#new-parent-page:visible").val();if(L&&(L!=B||K!=j||I!=F)){AJS.MoveDialog.getBreadcrumbs({spaceKey:K,pageTitle:I},function(){Confluence.PageLocation.set({spaceKey:K,spaceName:L,parentPageTitle:I});k.moveHandler(J,K,L,I,n,q,i)},function(M){g("#new-parent-breadcrumbs").html(Confluence.Templates.MovePage.breadcrumbError());if(M.status==404){u.error("The specified page was not found.")}})}else{Confluence.PageLocation.set({spaceKey:j,spaceName:B,parentPageTitle:F});k.moveHandler(J,j,B,F,n,q,i)}};var H=function(I){if(g("#reorderCheck")[0].checked){A(I)}else{x(I)}};G.addButton(k.buttonName,H,"move-button");G.addCancel("Cancel",k.cancelHandler);G.popup.element.find(".dialog-title").prepend(Confluence.Templates.MovePage.helpLink());G.addPage().addHeader(k.title).addPanel("Page Ordering",Confluence.Templates.MovePage.orderingPagePanel(),"ordering-panel","ordering-panel-id").addLink("Back",function(I){I.prevPage()},"dialog-back-link").addButton("Reorder",x,"reorder-button").addCancel("Cancel",k.cancelHandler);var D=G.get("button#"+k.buttonName)[0].item;g("button.move-button").before(Confluence.Templates.MovePage.reorderCheckbox());G.gotoPage(0);var C=g("#move-page-dialog");var y=C.find(".dialog-page-menu");var s=C.find(".dialog-page-body");var m=g(y[0]);var w=g(s[0]);w.height(m.height());w.width("75%");w.find(".dialog-panel-body").height(m.height()-f);var r=g(y[1]);var E=g(s[1]);r.width("0");E.width("100%");G.show();g(".location-panel .location-info",C).appendTo(g(".dialog-page-body:first",C));var l=new AJS.MoveDialog.Breadcrumbs(g("#new-parent-breadcrumbs"));function i(M){var L=g("#move-errors");if(L.length>0){L.remove()}L=g(Confluence.Templates.MovePage.errorMessage());var J=C.find(".browse-controls:visible");if(!J.length){J=C.find(".dialog-panel-body:visible")}J.append(L);if(!M||M.length==0){g(D).prop("disabled",false);return}var I="The following error(s) occurred:";I+="<ul>\n<li>";if(g.isArray(M)){I+=M.join("</li>\n<li>")}else{I+=M}I+="</li>\n</ul>";var K=atlassian.message.warning({content:I});L.html(K);L.removeClass("hidden");G.gotoPage(0)}var u={moveButton:D,clearErrors:function(){i([])},error:i,select:function(K,J,I){AJS.log("select: "+[K,J,I].join());j=K;B=J;F=I||"";g(D).prop("disabled",true);l.update({spaceKey:j,title:F},u)}};G.overrideLastTab();G.get('#"'+k.openedPanel+'"').select();var t=AJS.Meta.get("parent-page-title")||AJS.Meta.get("from-page-title");var v=new AJS.MoveDialog.Breadcrumbs(g("#current-parent-breadcrumbs"));v.update({spaceKey:AJS.Meta.get("space-key"),title:t},u);g(".location-panel",C).movePageLocation(u);g(".search-panel",C).movePageSearch(u);g(".history-panel",C).movePageHistory(u);g("#new-parent-page").select();if(k.hint){G.addHelpText(k.hint.template||k.hint.text,k.hint.arguments)}return C};var d=function(k,j,l,i){var m={pageId:AJS.params.pageId,spaceKey:k};if(l){m.position=i;m.targetId=l}else{if(j!=""){m.targetTitle=j;m.position="append"}else{m.position="topLevel"}}return m};function a(m,o,i,p,r,j,l){m=m.popup.element;m.addClass("waiting");g("button",m).prop("disabled",true);var k=g("<div class='throbber'></div>");m.append(k);var q=Raphael.spinner(k[0],100,"#666");function n(s){l(s);m.removeClass("waiting");q();g("button",m).prop("disabled",false)}g.ajax({url:contextPath+"/pages/movepage.action",type:"GET",dataType:"json",data:new d(o,p,r,j),error:function(){n("Move failed. There was a problem contacting the server.")},success:function(s){var t=[].concat(s.validationErrors||[]).concat(s.actionErrors||[]).concat(s.errorMessage||[]);if(t.length>0){n(t);return}window.location.href=contextPath+s.page.url+(s.page.url.indexOf("?")>=0?"&":"?")+"moved=true"}})}g("#action-move-page-dialog-link").click(function(i){i.preventDefault();if(g("#move-page-dialog").length>0){g("#move-page-dialog, body > .shadow, body > .aui-blanket").remove()}new Confluence.MovePageDialog({moveHandler:a});return false});var c;g("#rte-button-location").click(function(i){i.preventDefault();if(g("#move-page-dialog").length>0){g("#move-page-dialog, body > .shadow, body > .aui-blanket").remove()}new Confluence.MovePageDialog({spaceName:c,spaceKey:g("#newSpaceKey").val(),pageTitle:g("#content-title").val(),parentPageTitle:g("#parentPageString").val(),buttonName:"Move",title:"Set Page Location",moveHandler:function(n,k,o,p,m,l,j){c=o;g("#newSpaceKey").val(k);g("#parentPageString").val(p);if(p!=""){g("#position").val("append")}else{g("#position").val("topLevel")}if(m){g("#targetId").val(m);g("#position").val(l)}n.remove()}});return false});var b=null;Confluence.PageLocation={get:function(){if(b){return b}return{spaceName:AJS.Meta.get("space-name"),spaceKey:AJS.Meta.get("space-key"),parentPageTitle:AJS.Meta.get("parent-page-title")}},set:function(i){b=i}}});
var AJS=AJS||{};AJS.animation={running:[],queue:[],timer:null,duration:300,period:20,add:function(a){this.queue.push(a)},start:function(){if(this.timer!=null){return}this.running=this.queue;this.queue=[];jQuery.each(this.running,function(){if(this.onStart){this.onStart()}});var c=this;var b=new Date().getTime();var a=b+this.duration;this.timer=setInterval(function(){var d=new Date().getTime();var e=(d-b)/(a-b);if(e<=1){c.animate(e)}if(e>=1&&c.timer!=null){c.finish()}},this.period);return this.timer},finish:function(){clearInterval(this.timer);jQuery.each(this.running,function(){if(this.onFinish){this.onFinish()}});this.running=[];this.timer=null;if(this.queue.length>0){this.start()}},animate:function(a){jQuery.each(this.running,function(){if(this.animate){this.animate(AJS.animation.interpolate(a,this.start,this.end,this.reverse))}})},interpolate:function(d,c,a,b){if(typeof c!="undefined"&&typeof a!="undefined"){if(b){return a+d*(c-a)}else{return c+d*(a-c)}}return d},combine:function(a){return{animations:a,append:function(b){this.animations.push(b);return this},onStart:function(){jQuery.each(this.animations,function(){if(this.onStart){this.onStart()}})},onFinish:function(){jQuery.each(this.animations,function(){if(this.onFinish){this.onFinish()}})},animate:function(b){jQuery.each(this.animations,function(){if(this.animate){this.animate(AJS.animation.interpolate(b,this.start,this.end,this.reverse))}})}}}};
AJS.toInit(function(a){a("#ellipsis").live("click",function(){try{a("#breadcrumbs .hidden-crumb").removeClass("hidden-crumb");a(this).addClass("hidden-crumb")}catch(b){AJS.log(b)}})});
Confluence.QuickNav=(function(d){var c,a;var b=function(e){d("a",e).each(function(){var h=d(this);var f=h.find("span");var g=AJS.dropDown.getAdditionalPropertyValue(f,"spaceName");if(g&&!h.is(".content-type-spacedesc")){h.after(h.clone().attr("class","space-name").html(g));h.parent().addClass("with-space-name")}})};return{setDropDownPostProcess:function(e){c=e},setMakeParams:function(e){a=e},init:function(f,e){f.quicksearch("/json/contentnamesearch.action",null,{dropdownPlacement:e,dropdownPostprocess:function(g){c&&c(g);b(g)},makeParams:function(g){if(a){return a(g)}else{return{query:g}}}})}}})(AJS.$);AJS.toInit(function(c){var a=function(d){return function(e){d.closest("form").find(".quick-nav-drop-down").append(e)}};var b=c("#quick-search-query");spaceBlogSearchQuery=c("#space-blog-quick-search-query"),confluenceSpaceKey=c("#confluence-space-key");Confluence.QuickNav.init(b,a(b));if(spaceBlogSearchQuery.length&&confluenceSpaceKey.length){spaceBlogSearchQuery.quicksearch("/json/contentnamesearch.action?type=blogpost&spaceKey="+AJS("i").html(confluenceSpaceKey.attr("content")).text(),null,{dropdownPlacement:a(spaceBlogSearchQuery)})}});
(function(a){AJS.contentHover=function(j,i,d,f,m){var b=a.extend(false,AJS.contentHover.opts,m);var h,l,c=a("#content-hover-"+i);if(!c.length){a(b.container).append(a('<div id="content-hover-'+i+'" class="ajs-content-hover"><div class="contents"></div></div>'));c=a("#content-hover-"+i);h=c.find(".contents");h.css("width",b.width+"px").mouseover(function(){clearTimeout(e.hideDelayTimer);c.unbind("mouseover")}).mouseout(function(){g()})}else{h=c.find(".contents")}var e=c[0];var k=function(){if(c.is(":visible")){return}e.showTimer=setTimeout(function(){if(!e.contentLoaded||!e.shouldShow){return}e.beingShown=true;var p=a(window),n=l.x-3,r=l.y+15;if(n+b.width+30>p.width()){c.css({right:"20px",left:"auto"})}else{c.css({left:n+"px",right:"auto"})}var o=(window.pageYOffset||document.documentElement.scrollTop)+p.height();if((r+c.height())>o){r=o-c.height()-5;c.mouseover(function(){clearTimeout(e.hideDelayTimer)}).mouseout(function(){g()})}c.css({top:r+"px"});var q=a("#content-hover-shadow").appendTo(c).show();c.fadeIn(b.fadeTime,function(){e.beingShown=false});q.css({width:h.outerWidth()+32+"px",height:h.outerHeight()+25+"px"});a(".b",q).css("width",h.outerWidth()-26+"px");a(".l, .r",q).css("height",h.outerHeight()-21+"px")},b.showDelay)};var g=function(){e.beingShown=false;e.shouldShow=false;clearTimeout(e.hideDelayTimer);clearTimeout(e.showTimer);clearTimeout(e.loadTimer);e.contentLoading=false;e.shouldLoadContent=false;e.hideDelayTimer=setTimeout(function(){c.fadeOut(b.fadeTime)},b.hideDelay)};a(j).mousemove(function(n){l={x:n.pageX,y:n.pageY};if(!e.beingShown){clearTimeout(e.showTimer)}e.shouldShow=true;if(!e.contentLoaded){if(e.contentLoading){if(e.shouldLoadContent){var o=(l.x-e.initialMousePosition.x)*(l.x-e.initialMousePosition.x)+(l.y-e.initialMousePosition.y)*(l.y-e.initialMousePosition.y);if(o>(b.mouseMoveThreshold*b.mouseMoveThreshold)){e.contentLoading=false;e.shouldLoadContent=false;clearTimeout(e.loadTimer);return}}}else{e.initialMousePosition=l;e.shouldLoadContent=true;e.contentLoading=true;e.loadTimer=setTimeout(function(){if(!e.shouldLoadContent){return}h.load(d,function(){e.contentLoaded=true;e.contentLoading=false;f.call(c,i);k()})},b.loadDelay)}}clearTimeout(e.hideDelayTimer);if(!e.beingShown){k()}}).mouseout(function(){g()});h.click(function(n){n.stopPropagation()});a("body").click(function(){e.beingShown=false;clearTimeout(e.hideDelayTimer);clearTimeout(e.showTimer);c.hide()});return c};AJS.contentHover.opts={fadeTime:100,hideDelay:500,showDelay:700,loadDelay:50,width:300,mouseMoveThreshold:10,container:"body"};AJS.toInit(function(){a("body").append(a('<div id="content-hover-shadow"><div class="tl"></div><div class="tr"></div><div class="l"></div><div class="r"></div><div class="bl"></div><div class="br"></div><div class="b"></div></div>'));a("#content-hover-shadow").hide()})})(jQuery);if(typeof AJS.followCallbacks=="undefined"){AJS.followCallbacks=[]}if(typeof AJS.favouriteCallbacks=="undefined"){AJS.favouriteCallbacks=[]}AJS.toInit(function(a){a(self).bind("hover-user.follow",function(f,d){for(var b=0,c=AJS.followCallbacks.length;b<c;b++){AJS.followCallbacks[b](d.username)}})});
AJS.toInit(function(e){var c,f=140;function b(){var n="idontthinksohal";var k=new AJS.Dialog(650,n,"update-user-status-dialog");var m=k.popup.element;var l=e(Confluence.Templates.UserStatus.dialogContent({maxChars:f}));k.addHeader("What are you working on?");k.addPanel("Set Status",l);k.addButton("Update",i,"status-update-button");k.addCancel("Cancel",function(o){o.hide();return false});k.setError=function(o){e(".error-message",m).html(o)};return k}function h(l){var k;if(!l){k="You must enter a status."}else{if(!e.trim(l)){k="Whitespace is cool and all, but you might want to add a message in there, too."}else{if(l.length>f){k=AJS.format("The status message is too long. Status messages must be no longer than {0} characters.",f)}}}if(k){c.setError(k)}return !k}function d(k){e(".current-user-latest-status .status-text").html(k.text);e(".current-user-latest-status a[id^=view]").each(function(){var m=e(this),l=m.attr("href");m.attr("href",l.replace(/\d+$/,k.id)).text(k.friendlyDate).attr("title",new Date(k.date).toLocaleString())})}function j(){e.getJSON(Confluence.getContextPath()+"/status/current.action",function(k){if(k.errorMessage){c.setError(k.errorMessage)}else{d(k)}})}var i=function(){var n=c.popup.element,q=e("#status-text",n),l=e(".status-update-button",n),p=q.val(),k,o;function m(){q.blur();q.prop("disabled",true).prop("readonly",true);l.prop("disabled",true);return function(){q.focus();q.prop("disabled",false).prop("readonly",false);l.prop("disabled",false)}}k=m();if(!h(p)){k();return false}o=AJS.safe.ajax({url:Confluence.getContextPath()+"/status/update.action",type:"POST",dataType:"json",data:{text:p}});o.done(k).fail(k);o.done(function(r){if(r.errorMessage){c.setError(r.errorMessage)}else{d(r);q.val("");n.fadeOut(200,function(){c.hide()})}});o.fail(function(t,s,r){AJS.log("Error updating status: "+s);AJS.log(r);c.setError("There was an error - "+r)});return o.promise()};var a=function(k){var m=k.popup.element,o=e("#status-text",m),n=e(".chars-left",m),l=e(".status-update-button",m);o.keydown(function(p){if(p.keyCode==13){i()}}).bind("blur focus change "+(!e.browser.msie?"paste input":"keyup"),function(){var q=e(this).val(),p=f-q.length;l.prop("disabled",!q.length);n.text(Math.abs(p)).toggleClass("close-to-limit",p<20).toggleClass("over-limit",p<0)});e("form",m).submit(function(p){p.preventDefault();i()})};var g="#create-user-status-link";e(g).click(function(l){var k=e(this).parents(".ajs-drop-down")[0];k&&k.hide();if(typeof c=="undefined"){c=b();a(c)}j();c.setError("");c.show();e("#update-user-status-dialog #status-text").prop("readonly",false).prop("disabled",false).focus();return AJS.stopEvent(l)})});
// This file was automatically generated from userstatus-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.UserStatus == 'undefined') { Confluence.Templates.UserStatus = {}; }


Confluence.Templates.UserStatus.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div><span class=\'error-message\'></span></div><form class="aui update-status"><fieldset><label for="status-text" class="assistive">', soy.$$escapeHtml(AJS.format("Enter your status ({0} character limit)",opt_data.maxChars)), '</label><textarea name="status-text" id="status-text"></textarea><span class="chars-left">', soy.$$escapeHtml(opt_data.maxChars), '</span></fieldset><p id="dialog-current-status" class="current-user-latest-status"><strong>', soy.$$escapeHtml("Last update:"), '</strong> <span class="status-text"></span></p></form>');
  return opt_sb ? '' : output.toString();
};

(function(a){AJS.Tooltip=function(d){var g=a('<div class="ajs-tooltip-arrow"></div>'),f=a('<div class="ajs-tooltip">'+d.text+"</div>"),c=a('<div class="ajs-tooltip-wrapper"></div>').appendTo(a("body")),e=3,b=function(){var h=d.anchor.offset();c.css({left:h.left+d.anchor.width(),top:h.top+(d.anchor.height()/2)-(c.height()/2)-2});g.css({top:(c.height()/2)-e})};g.addClass("ajs-tooltip-arrow-left");c.append(g).append(f);f.css({width:d.width});d.anchor.bind("mouseover",function(){b();c.fadeIn("fast")});d.anchor.bind("mouseout",function(){c.fadeOut("fast")});d.anchor.click(function(h){h.preventDefault();if(!c.is(":visible")){b();c.fadeIn("fast")}else{c.fadeOut("fast")}})}})(AJS.$);
(function(c,b){c.KeyGenerator=function(){var i=["THE","A","AN","AS","AND","OF","OR"],f={},h=function(k){return k.join("").length},j=function(k){return b.grep(k,function(m,l){return b.inArray(m,i)===-1})},g=function(l){var k="";b.each(l,function(m,n){k+=n.charAt(0)});return k},e=function(m){var l=false;var k;for(k=0;k<m.length;k++){if(d(m[k])){l=true}else{if(l){return m.substring(0,k+1)}}}return m},d=function(k){return k&&k.length===1&&k.search("[AEIOUY]")!==-1};f[199]="C";f[231]="c";f[252]="u";f[251]="u";f[250]="u";f[249]="u";f[233]="e";f[234]="e";f[235]="e";f[232]="e";f[226]="a";f[228]="a";f[224]="a";f[229]="a";f[225]="a";f[239]="i";f[238]="i";f[236]="i";f[237]="i";f[196]="A";f[197]="A";f[201]="E";f[230]="ae";f[198]="Ae";f[244]="o";f[246]="o";f[242]="o";f[243]="o";f[220]="U";f[255]="Y";f[214]="O";f[241]="n";f[209]="N";return{generateKey:function(n,y){y=b.extend({},y);var m=(typeof y.desiredKeyLength=="number")?y.desiredKeyLength:4,u=(typeof y.maxKeyLength=="number")?y.maxKeyLength:Infinity,s=(typeof y.charBlacklistRegex!="undefined"?y.charBlacklistRegex:/[^a-zA-Z0-9]/g);n=b.trim(n);if(!n){return""}var r=[];for(var q=0,x=n.length;q<x;q++){var k=f[n.charCodeAt(q)];r.push(k?k:n[q])}n=r.join("");var t=[];b.each(n.split(/\s+/),function(z,A){if(A){A=A.replace(s,"");A=A.toUpperCase();A.length&&t.push(A)}});if(m&&h(t)>m){t=j(t)}var v;if(t.length==0){v=""}else{if(t.length==1){var l=t[0],o=e(l);if(u<l.length||Math.abs(l.length-m)>=Math.abs(o.length-m)){v=o}else{v=l}}else{var w=h(t),p=g(t);if(u<w||Math.abs(w-m)>=Math.abs(p.length-m)){v=p}else{v=t.join("")}}}if(u&&v.length>u){v=v.substr(0,u)}return v}}};var a=c.KeyGenerator();b.fn.generateFrom=function(g,e){var d={desiredKeyLength:4,maxKeyLength:10,maxNameLength:30,timeoutMS:100,charBlacklistRegex:/[^a-zA-Z0-9]/g,uppercase:true,validationCallback:function(){},errorCallback:function(){}},f=b(this).first(),g=g.first(),e=b.extend({},d,e);(function(){var j=function(){return f.data("autosuggest")!==false},o=function(p){if(p){if(f.data("lastGeneratedValue")!==p){f.data("autosuggest",false)}}else{f.data("autosuggest",true)}},n=function(p){var q=f.val();f.data("lastGeneratedValue",p);f.val(p);return q!=p},h=function(){o(f.val());k()},i=function(p){m(p,h)},m=function(s,q){var p=b(s.target),r;r=function(){l(s);q();if(p.is(":visible")){p.data("checkHook",setTimeout(r,e.timeoutMS))}};if(!p.data("checkHook")){p.data("checkHook",setTimeout(r,0))}},l=function(q){h();var p=b(q.target);clearTimeout(p.data("checkHook"));p.removeData("checkHook")},k=function(){if(j()){var p=a.generateKey(g.val(),{desiredKeyLength:e.desiredKeyLength,maxKeyLength:e.maxKeyLength,charBlacklistRegex:e.charBlacklistRegex});if(n(p)){e.validationCallback()}}};g.attr("maxlength",e.maxNameLength);f.attr("maxlength",e.maxKeyLength);if(e.uppercase){f.css("text-transform","uppercase")}if(document.activeElement&&document.activeElement===g[0]){i({target:g[0]})}g.focus(i);g.blur(l)})();return this}})(window,jQuery);
// This file was automatically generated from create-space.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.CreateSpace == 'undefined') { Confluence.Templates.CreateSpace = {}; }


Confluence.Templates.CreateSpace.createSpaceForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml("Create a space for your team or project:"), '</p><form action="', soy.$$escapeHtml("/confluence"), '/spaces/createspace.action" method="post" class="aui" id="create-space-form"><fieldset><div class="field-group"><label for="name">', soy.$$escapeHtml("Space name"), '</label><input class="text" name="name" autocomplete="off" ', (opt_data.name) ? 'value="' + soy.$$escapeHtml(opt_data.name) + '"' : '', '/>');
  if (opt_data.fieldErrors && opt_data.fieldErrors['name']) {
    var errorList18 = opt_data.fieldErrors['name'];
    var errorListLen18 = errorList18.length;
    for (var errorIndex18 = 0; errorIndex18 < errorListLen18; errorIndex18++) {
      var errorData18 = errorList18[errorIndex18];
      output.append('<div class="error">', soy.$$escapeHtml(errorData18), '</div>');
    }
  } else {
    output.append('<div class="error" class="hidden"></div>');
  }
  output.append('</div><div class="field-group"><label for="key">', soy.$$escapeHtml("Space key"), '</label><input class="text" name="key" ', (opt_data.key) ? 'value="' + soy.$$escapeHtml(opt_data.key) + '"' : '', '/><div class="description">', AJS.format("Used in the space\x27\x27s URL: {0}",'<br /><span id="space-url-example"></span>'), '</div>');
  if (opt_data.fieldErrors && opt_data.fieldErrors['key']) {
    var errorList39 = opt_data.fieldErrors['key'];
    var errorListLen39 = errorList39.length;
    for (var errorIndex39 = 0; errorIndex39 < errorListLen39; errorIndex39++) {
      var errorData39 = errorList39[errorIndex39];
      output.append('<div class="error">', soy.$$escapeHtml(errorData39), '</div>');
    }
  } else {
    output.append('<div class="error" class="hidden"></div>');
  }
  output.append('</div></fieldset>');
  Confluence.Templates.CreateSpace.spaceFormPermissions(opt_data, output);
  output.append('<input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" />');
  if (opt_data.buttons) {
    Confluence.Templates.CreateSpace.spaceFormButtons(null, output);
  }
  output.append('</form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.CreateSpace.createPersonalSpaceForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="', soy.$$escapeHtml("/confluence"), '/spaces/docreatepersonalspace.action" method="post" class="aui" id="create-personal-space-form"><p>', "Your personal space is your own private workspace within Confluence. You can optionally let other people view or contribute to it.", '</p>');
  Confluence.Templates.CreateSpace.spaceFormPermissions(opt_data, output);
  output.append('<input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" />');
  if (opt_data.buttons) {
    Confluence.Templates.CreateSpace.spaceFormButtons(null, output);
  }
  output.append('</form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.CreateSpace.spaceFormPermissions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<fieldset class="group', (opt_data.spacePermission == 'private') ? ' locked' : '', '" id="permissions-group"><div class="checkbox"><input class="checkbox" type="checkbox" id="permission-private" name="spacePermission" value="private"', (opt_data.spacePermission == 'private') ? ' checked="checked"' : '', ' /><label for="permission-private">', soy.$$escapeHtml("Make this space private"), '</label></div></fieldset>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.CreateSpace.spaceFormButtons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="buttons-container"><div class="buttons"><input name="create" class="aui-button aui-button-primary" type="submit" value="', soy.$$escapeHtml("Create"), '" /><a href="', soy.$$escapeHtml("/confluence"), '/dashboard.action" class="aui-button aui-button-link">', soy.$$escapeHtml("Cancel"), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.CreateSpace.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "http://docs.atlassian.com/confluence/docs-50/Creating+a+Space"}, output);
  return opt_sb ? '' : output.toString();
};

AJS.toInit(function(e){var l=null,q,d,o,r,n,j=false,p,c=100;var i={key:function(){var t=e.Deferred();var u=e.trim(q.val());if(!u){t.reject("You must enter a space key.");return t}if(p){AJS.log("Aborting previous space key validation request.");p.abort()}p=e.getJSON(AJS.Confluence.getContextPath()+"/ajax/spaceavailable.action",{key:u}).done(function(v){if(!v.available&&v.message){t.reject(v.message)}else{t.resolve()}p=false});return t.promise()},name:function(){var t=e.Deferred();if(!e.trim(d.val())){t.reject("You must enter a space name.")}else{t.resolve()}return t.promise()}};function m(w){var v=w[0];if(v.setSelectionRange){var u=w.val().length;v.setSelectionRange(0,u)}else{if(v.createTextRange){var t=v.createTextRange();t.execCommand("SelectAll");t.select()}}}function h(t){if(t){o.removeAttr("disabled")}else{o.attr("disabled","disabled")}j=t}var s={};function b(v){h(false);var t=v.attr("name");var u=v.siblings(".error");s[t]=true;var w=i[t]();w.done(function(){delete s[t];u.text("").addClass("hidden")});w.fail(function(x){u.text(x).removeClass("hidden")});w.always(function(){h(e.isEmptyObject(s));v.attr("data-validated-value",v.val())});return w}function a(t){var x=t.find("#space-url-example"),u=AJS.Meta.get("base-url")+"/display/",v="<"+"SPACE KEY"+">",z=function(B){B=B||v;var A=u+B;x.text(A)},w=false;h(false);z();q=t.find("input[name='key']").first();d=t.find("input[name='name']").first();r=q.parent().find(".error");n=d.parent().find(".error");q.generateFrom(d,{uppercase:false,maxNameLength:255,maxKeyLength:255,timeoutMS:c,validationCallback:function(){q.keyup()}});function y(){var B=e(this);var A=B.val();if(typeof B.data("originalVal")==="undefined"){B.data("originalVal","")}if(B.data("originalVal")===A){return}B.data("originalVal",A);b(B)}q.keyup(e.debounce(y,500));d.keyup(y);q.keyup(function(){z(q.val())});q.focus(function(){m(q)});t.find("#permission-private").change(function(){e("#permissions-group").toggleClass("locked")});t.submit(function(A){if(!w){A.preventDefault()}else{return}setTimeout(function(){var C=b(q);var B=b(d);e.when({},C,B).then(function(){if(j){w=true;t.submit()}})},c+1)})}function f(){var u=e(Confluence.Templates.CreateSpace.createSpaceForm({atlToken:e("#atlassian-token").prop("content")})),t=function(){u.submit()},v=function(){w.hide();d.val("");q.val("");r.text("").addClass("hidden");n.text("").addClass("hidden");h(false)},w=new AJS.ConfluenceDialog({width:600,height:400,id:"create-space-dialog",closeOnOutsideClick:true,onCancel:v,onSubmit:t});w.addHeader("Create Space");w.addPanel("Panel 1",u);w.addSubmit("Create",t);w.addCancel("Cancel",v);w.popup.element.find(".dialog-title").prepend(Confluence.Templates.CreateSpace.helpLink());o=w.popup.element.find(".button-panel-submit-button");a(u);w.gotoPage(0);w.gotoPanel(0);return w}function g(t){t&&t.preventDefault();if(!l){l=f()}l.show()}AJS.bind("ready-for-create-space-form-init",function(u,t){o=t.find("input[type=submit]");a(t)});e('a[href="'+AJS.contextPath()+'/spaces/createspace-start.action"]').click(g);var k=e("#create-space-form:not(.noautobind)");if(k.length){AJS.trigger("ready-for-create-space-form-init",[k])}});
AJS.toInit(function(d){var c=null,b=function(){var f=d(Confluence.Templates.CreateSpace.createPersonalSpaceForm({atlToken:d("#atlassian-token").prop("content")})),e=function(){f.submit()},g=new AJS.ConfluenceDialog({width:540,height:300,id:"create-personal-space-dialog",closeOnOutsideClick:true,onSubmit:e});g.addHeader("Add your personal space");g.addPanel("Panel 1",f);g.addSubmit("Create",e);g.addCancel("Cancel",function(){g.hide()});g.gotoPage(0);g.gotoPanel(0);return g},a=function(){if(c==null){c=b()}c.show();d("#create-personal-space-dialog button.button-panel-submit-button").focus()};d("#create-personal-space-link").click(function(){a();return false})});
var GADGET_DIRECTORY = null;

GadgetDirectory = function() {};
GadgetDirectory.prototype = {
    dlg: null,
    gadget_list: null,

    showDialog: function() {
        //Create the dialog
        this.dlg.addHeader(GADGET_DIRECTORY.translations.header);
        this.dlg.addCancel(GADGET_DIRECTORY.translations.closeButton, function(dlg) {dlg.hide(); return false;});

        AJS.$(".throbber").hide();
        this.dlg.getCurrentPanel().html(this.buildPanel());
    },

    buildPanel: function() {
        return AJS.$("<div/>").addClass("directory-panel").append(this.buildDirectoryHelp()).append(this.buildDirectoryList());
    },

    buildDirectoryHelp: function() {
        var helpPanel = AJS.$("<div/>").addClass("directory-help");
        AJS.$("<h3/>").addClass("directory-help-title").html(GADGET_DIRECTORY.translations.helpTitle1).appendTo(helpPanel);
        AJS.$("<p/>").addClass("directory-help-text").html(GADGET_DIRECTORY.translations.helpBody1).appendTo(helpPanel);
        AJS.$("<h3/>").addClass("directory-help-title").html(GADGET_DIRECTORY.translations.helpTitle2).appendTo(helpPanel);
        AJS.$("<p/>").addClass("directory-help-text").html(GADGET_DIRECTORY.translations.helpBody2).appendTo(helpPanel);
        AJS.$("<p/>").html(GADGET_DIRECTORY.translations.moreInfo).appendTo(helpPanel);
        return helpPanel;
    },

    buildDirectoryList: function() {
        if (!GADGET_DIRECTORY.gadget_list)
            return AJS.$("<div/>").addClass("no-gadgets").html("No gadgets found.");

        var directory_list = AJS.$("<ol/>").addClass("macro-list");
        AJS.$.each(GADGET_DIRECTORY.gadget_list, function(i, gadget_item) {
            var directory_item = AJS.$("<li/>").attr("id", "macro-" + gadget_item.title.split(' ').join('')).addClass("macro-list-item");

            var title = AJS.$("<h3/>").addClass("macro-title").html(gadget_item.title);

            var gadgetUrl = AJS.$("<p/>").append(AJS.$("<span/>").append(AJS.$("<a/>").addClass("macro-uri").attr("href", gadget_item.url).attr("target", "_blank").attr("title", gadget_item.url).html(GADGET_DIRECTORY.translations.gadgetUrl)));
            var author = AJS.$("<p/>").addClass("macro-author");
            if (gadget_item.author) {
                author.html("By " + gadget_item.author);
            } else {
                author.html(GADGET_DIRECTORY.translations.noAuthor);
            }
            var description = AJS.$("<p/>").addClass("macro-desc");
            if (gadget_item.description) {
                description.html(gadget_item.description);
            } else {
                description.html(GADGET_DIRECTORY.translations.noDescription);
            }

            if (gadget_item.thumbnail) {
                var thumbnail = AJS.$("<img/>").addClass("macro-icon").attr({
                       height: 60,
                       width: 120,
                       alt: "",
                       src: gadget_item.thumbnail
                   });
                directory_item.append(thumbnail);
            }
            directory_item.append(title);
            directory_item.append(gadgetUrl);
            directory_item.append(author);
            directory_item.append(description);
            
            directory_list.append(directory_item);
        });

        return directory_list;
    },

    buildThrobber: function() {
        var throbber = AJS.$("<div/>").addClass("throbber");
        Raphael.spinner(throbber[0], 60, "#666");
        return throbber;
    },

    loadDirectory: function() {
        AJS.$(document).keyup(function (e) {
            if (e.keyCode == 27)  {
                GADGET_DIRECTORY.dlg.hide();
                AJS.$(document).unbind("keyup", arguments.callee);
                return AJS.stopEvent(e);
            }
        });
        if (this.dlg) {
            this.dlg.show();
        } else {
            this.dlg = new AJS.Dialog(865, 530, "gadget-directory-dialog");
            this.dlg.addPanel("", "panel1");
            this.dlg.getCurrentPanel().html(this.buildThrobber());
            this.dlg.getCurrentPanel().setPadding(0);
            this.dlg.getCurrentPanel().body.css("overflow", "hidden");
            this.dlg.show();

            AJS.$.ajax({
                    url: contextPath + "/rest/gadget/1.0/published/gadgetsdirectory",
                    type: "GET",
                    dataType: "json",
                    success: function(data) {
                        if (data.directoryList)
                            GADGET_DIRECTORY.gadget_list = data.directoryList;
                        GADGET_DIRECTORY.translations = data.translations;
                        GADGET_DIRECTORY.showDialog();
                    },
                    error: function() {
                        GADGET_DIRECTORY.dlg.getCurrentPanel().html(AJS.$("<div/>").addClass("loading-error").html("An error has occurred while trying to load the gadget directory."));
                    },
                    timeout: 12000
            });
        }
    }
};


AJS.toInit(function ($)
{
    GADGET_DIRECTORY = new GadgetDirectory();
    AJS.$("#gadget-directory-link").click(function (e) {
        GADGET_DIRECTORY.loadDirectory();
        e.preventDefault();
    });
});
function placeFocus(){if(document.location.hash||document.getElementById("editpageform")||document.getElementById("createpageform")||document.getElementById("upload-attachments")||document.getElementById("addcomment")){return}var l="";var a=window.location.search.substring(1);var f=a.split("&");for(var d=0;d<f.length;d++){var m=f[d].split("=")[0];var h=f[d].split("=")[1];if(m=="autofocus"&&(h!=null&&h.length>0)){l="'"+h+"'"}}var c=false;for(var d=0;d<document.forms.length;d++){var k=document.forms[d].elements;if(document.forms[d].id!="quick-search"&&document.forms[d].id!="space-blog-quick-search"&&document.forms[d].name!="inlinecommentform"){for(var b=0;b<k.length;b++){if((k[b].type=="text"||k[b].type=="password"||k[b].type=="textarea")&&!k[b].disabled&&!(k[b].style.display=="none")){try{if(l!=null&&l.length>0){if(k[b].id==l){k[b].focus();c=true;break}}else{k[b].focus();c=true;break}}catch(g){}}}}if(c){break}}}function setCookie(b,g,i,f,h,j,e,a){var d=b+"="+escape(g);if(i){var c=new Date(i,f,h);d+="; expires="+c.toGMTString()}if(j){d+="; path="+escape(j)}else{d+="; path=/"}if(e){d+="; domain="+escape(e)}if(a){d+="; secure"}document.cookie=d}function getCookie(b){var a=document.cookie.match(b+"=(.*?)(;|$)");if(a){return(unescape(a[1]))}else{return null}}function highlight(a){new Effect.Highlight(a,{endcolor:"#f0f0f0"})};
(function(E){function D(H,G){return(typeof H=="function")?(H.call(G)):H}function F(G){while(G=G.parentNode){if(G==document){return true}}return false}var A=0;function B(){var G=A++;return"tipsyuid"+G}function C(H,G){this.$element=E(H);this.options=G;this.enabled=true;this.fixTitle()}C.prototype={show:function(){var P=this.getTitle();if(P&&this.enabled){var I=this.tip();I.find(".tipsy-inner")[this.options.html?"html":"text"](P);I[0].className="tipsy";I.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var L=this;function H(){L.hoverTooltip=true}function M(){if(L.hoverState=="in"){return }L.hoverTooltip=false;if(L.options.trigger!="manual"){var R=L.options.trigger=="hover"?"mouseleave.tipsy":"blur.tipsy";L.$element.trigger(R)}}if(this.options.hoverable){I.hover(H,M)}var N=E.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var G=I[0].offsetWidth,K=I[0].offsetHeight,Q=D(this.options.gravity,this.$element[0]);var O;switch(Q.charAt(0)){case"n":O={top:N.top+N.height+this.options.offset,left:N.left+N.width/2-G/2};break;case"s":O={top:N.top-K-this.options.offset,left:N.left+N.width/2-G/2};break;case"e":O={top:N.top+N.height/2-K/2,left:N.left-G-this.options.offset};break;case"w":O={top:N.top+N.height/2-K/2,left:N.left+N.width+this.options.offset};break}if(Q.length==2){if(Q.charAt(1)=="w"){O.left=N.left+N.width/2-15}else{O.left=N.left+N.width/2-G+15}}I.css(O).addClass("tipsy-"+Q);I.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+Q.charAt(0);if(this.options.className){I.addClass(D(this.options.className,this.$element[0]))}if(this.options.fade){I.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{I.css({visibility:"visible",opacity:this.options.opacity})}if(this.options.aria){var J=B();I.attr("id",J);this.$element.attr("aria-describedby",J)}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){E(this).remove()})}else{this.tip().remove()}if(this.options.aria){this.$element.removeAttr("aria-describedby")}},fixTitle:function(){var G=this.$element;if(G.attr("title")||typeof (G.attr("original-title"))!="string"){G.attr("original-title",G.attr("title")||"").removeAttr("title")}},getTitle:function(){var I,G=this.$element,H=this.options;this.fixTitle();var I,H=this.options;if(typeof H.title=="string"){I=G.attr(H.title=="title"?"original-title":H.title)}else{if(typeof H.title=="function"){I=H.title.call(G[0])}}I=(""+I).replace(/(^\s*|\s*$)/,"");return I||H.fallback},tip:function(){if(!this.$tip){this.$tip=E('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>').attr("role","tooltip");this.$tip.data("tipsy-pointee",this.$element[0])}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};E.fn.tipsy=function(J){if(J===true){return this.data("tipsy")}else{if(typeof J=="string"){var L=this.data("tipsy");if(L){L[J]()}return this}}J=E.extend({},E.fn.tipsy.defaults,J);if(J.hoverable){J.delayOut=J.delayOut||20}function I(N){var O=E.data(N,"tipsy");if(!O){O=new C(N,E.fn.tipsy.elementOptions(N,J));E.data(N,"tipsy",O)}return O}function M(){var N=I(this);N.hoverState="in";if(J.delayIn==0){N.show()}else{N.fixTitle();setTimeout(function(){if(N.hoverState=="in"){N.show()}},J.delayIn)}}function H(){var N=I(this);N.hoverState="out";if(J.delayOut==0){N.hide()}else{setTimeout(function(){if(N.hoverState=="out"&&!N.hoverTooltip){N.hide()}},J.delayOut)}}if(!J.live){this.each(function(){I(this)})}if(J.trigger!="manual"){var K=J.trigger=="hover"?"mouseenter.tipsy":"focus.tipsy",G=J.trigger=="hover"?"mouseleave.tipsy":"blur.tipsy";if(J.live){E(this.context).on(K,this.selector,M).on(G,this.selector,H)}else{this.bind(K,M).bind(G,H)}}return this};E.fn.tipsy.defaults={aria:false,className:null,delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,hoverable:false,offset:0,opacity:0.8,title:"title",trigger:"hover"};E.fn.tipsy.revalidate=function(){E(".tipsy").each(function(){var G=E.data(this,"tipsy-pointee");if(!G||!F(G)){E(this).remove()}})};E.fn.tipsy.elementOptions=function(H,G){return E.metadata?E.extend({},G,E(H).metadata()):G};E.fn.tipsy.autoNS=function(){return E(this).offset().top>(E(document).scrollTop()+E(window).height()/2)?"s":"n"};E.fn.tipsy.autoWE=function(){return E(this).offset().left>(E(document).scrollLeft()+E(window).width()/2)?"e":"w"};E.fn.tipsy.autoBounds=function(H,G){return function(){var I={ns:G[0],ew:(G.length>1?G[1]:false)},L=E(document).scrollTop()+H,J=E(document).scrollLeft()+H,K=E(this);if(K.offset().top<L){I.ns="n"}if(K.offset().left<J){I.ew="w"}if(E(window).width()+E(document).scrollLeft()-K.offset().left<H){I.ew="e"}if(E(window).height()+E(document).scrollTop()-K.offset().top<H){I.ns="s"}return I.ns+(I.ew?I.ew:"")}}})(jQuery);
(function(A){A.fn.tooltip=function(B){if(typeof B!="object"){return this.tipsy(B)}var E=A.extend({},A.fn.tooltip.defaults,B),C=this.tipsy(E);if(E.hideOnClick&&(E.trigger=="hover"||!E.trigger&&this.tipsy.defaults.trigger=="hover")){var D=function(){A(this).tipsy("hide")};if(E.live){A(this.context).on("click.tipsy",this.selector,D)}else{this.bind("click.tipsy",D)}}return C};A.fn.tooltip.defaults={opacity:1,offset:1,delayIn:500,hoverable:true,hideOnClick:true}}(jQuery));
(function(d){var e={};var b;var f;function c(j,h){var i=a(j,h);d(document.body).append(i);i.submit()}function a(k,h){var l=h?d.toJSON(h):"";var i=d("<form></form>");i.attr("method","post");var j=(b.createResult=="view")?"create-view.action":"createpage.action";i.attr("action",Confluence.getContextPath()+"/plugins/createcontent/"+j);i.append(g("spaceKey",f));i.append(g("blueprintModuleCompleteKey",b.blueprintModuleCompleteKey));i.append(g("title",k||""));i.append(g("contextJson",l));i.append(g("atl_token",Confluence.getXsrfToken()));return i}function g(h,i){var j=d("<input>");j.attr("name",h);j.attr("value",i);j.attr("type","hidden");return j}Confluence.Blueprint={register:function(h,i){e[h]=i},canCreatePage:function(j,i){var h=false;d.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/can-create-page",dataType:"json",data:{spaceKey:j,pageTitle:i},async:false,success:function(k){h=k}});return h},_fireWizard:function(l,h,k){f=k;b=l;var n=l.itemModuleCompleteKey;if(n){var j=n.replace(/\.|:/g,"_");AJS.trigger("analytics",{name:h.id+".submit."+j,data:{spaceKey:f}});if(e[n]){e[n](h,f,c)}else{if(l.blueprintModuleCompleteKey){c(null,null)}else{throw new Error("No way to process item: "+n)}}}else{if(l.templateId){var m=Confluence.getContextPath()+"/pages/createpage-entervariables.action?templateId="+encodeURIComponent(l.templateId)+"&spaceKey="+encodeURIComponent(f)+"&newSpaceKey="+encodeURIComponent(f);var i=h.getParentPageId();if(i){m+="&fromPageId="+encodeURIComponent(i)}window.location=m}else{throw new Error("Unknown item: "+l)}}}}})(AJS.$);
AJS.bind("confluence.enable.create-button",function(){AJS.debug("Create Dialog:init: confluence.enable.create-button callback started");AJS.unbind("confluence.enable.create-button");var c=AJS.$;var r=c("#create-page-button");if(!r.length){AJS.debug("Create Dialog:init: no create-page-button found, returning");return}Confluence.Blueprint.Dialog={};r.click(function(){u();return false});c(document).on("click",".create-child-page-link",function(){u({location:"child-page"});return false});c("#addPageLink, #addBlogLink, .acs-pagetree-create-link").hide();var t,n;var j="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post";var h;var a=null;var e=c.getJSON(Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces",{promotedSpaceKey:AJS.params.spaceKey,promotedSpacesLimit:10,otherSpacesLimit:1000}).done(function(y){Confluence.Blueprint.Dialog.loadedSpaces=y;var x=y.promotedSpaces.spaces[0]||y.otherSpaces.spaces[0];t=i(x.id).done(function(){AJS.trigger("create-dialog.data-ready")});n=d(x.id)});function i(x){return c.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/web-items",dataType:"json",data:{spaceKey:x}})}function d(x){return c.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces/adminCheck",dataType:"json",data:{spaceKey:x}})}function q(z,y){var x=z;y.find(".add-remove-customise-templates-trigger").toggle(x)}function k(x,y){var z=y.find(".template-select-container");z.addClass("loading");i(x).done(function(A){m(A,y);z.removeClass("loading")}).fail(function(){Confluence.sessionFail&&Confluence.sessionFail()})}function f(A,x){var y=AJS.Meta.get("space-key");if(!y||(y!=h.val())){return false}if(!AJS.Meta.get("page-title")){return false}if(!x){return true}var z=x.data();var B=z.itemModuleCompleteKey;return !z.blueprintModuleCompleteKey&&(B!=j)}function w(){return a}function b(z,y){var x=z.find("#create-dialog-parent-container");if(f(z,y)){x.find("span").text(AJS.Meta.get("page-title"));x.show();a=AJS.Meta.get("page-id")}else{x.hide();a=null}}function g(x,C){var z=x.find(".template");var B=z.filter(".selected");var y=z.index(B)+C;y=y%z.length;var A=z.eq(y);A.click().focus();x.simpleScrollTo(A)}function s(y){var x=2;switch(y){case 37:return -1;case 39:return +1;case 38:return -x;case 40:return +x}return 0}function o(x){x.bind("keydown",function(y){var z=s(y.which);if(z){g(x,z);return AJS.stopEvent(y)}})}function m(z,y){if(y.options.location=="child-page"){z=_.reject(z,function(A){return A.itemModuleCompleteKey==j})}var x=Confluence.Templates.Blueprints.templates({webItems:z});if(y.find(".templates").length){y.find(".templates").replaceWith(x)}else{c(".template-select-container-body").append(x)}c(".template").click(function(){var A=c(this);A.addClass("selected").siblings().removeClass("selected");b(y,A)}).dblclick(function(){c(".create-dialog-create-button").click()}).focus(function(){c(this).click()});o(y.find(".templates"));c(".template:first-child").click()}function v(z){var y=[];var A=z.promotedSpaces.spaces;if(A&&A.length){y.push({text:"Suggested Spaces",children:A})}var x=z.otherSpaces&&!z.otherSpaces.resultsTruncated&&z.otherSpaces.spaces;if(x&&x.length){y.push({text:"All Spaces",children:x})}return y}function p(E,D){if(E.otherSpaces&&E.otherSpaces.resultsTruncated){var z=D.find(".space-select-control-container .description");z.removeClass("hidden");var A={gravity:"w",delayIn:500,delayOut:0,offset:5};z.find("a").tooltip(A).click(function(){return false})}h.select2({data:v(E),escapeMarkup:function(F){return F},width:"270px",containerCssClass:"select2-space-select",formatResult:function(F,G,H){G.attr("title",c("<div/>").html(F.text).text());return c.fn.select2.defaults.formatResult.apply(this,arguments)},openOnEnter:false});var y=h.data("select2");y.data(E.promotedSpaces.spaces[0]||E.otherSpaces.spaces[0]);var B=50;var x=y.opts.populateResults;y.opts.populateResults=function(F,G,H){var J=false;var I=G;if(G[1]&&G[1].children&&G[1].children.length>B){I=[];c(G).each2(function(){I.push(c.extend(true,{},this))});I[1].children=I[1].children.slice(0,B);I[1].children.push({text:"Type to find more spaces"});J=true}x.call(y,F,I,H);J&&G[1].children.pop()};D.find(".atlassian-select2-choice").addClass("aui-button");D.find(".atlassian-select2-drop").addClass("aui-dropdown2 aui-style-default");D.find(".select2-search").addClass("atlassian-select2-search");D.find(".select2-results").addClass("atlassian-select2-results");var C=D.find(".select2-space-select .select2-input");if(C.length&&"placeholder" in C[0]){C.attr("placeholder","Filter spaces"+" ...")}c(Confluence.Templates.Blueprints.customiseTemplatesLink()).prependTo(D.find(".dialog-button-panel")).click(function(){window.open(Confluence.getContextPath()+"/pages/templates2/listpagetemplates.action?key="+h.val());return false})}function l(x){c(this).attr("disabled","disabled").before('<img class="wait-icon" src="'+Confluence.getContextPath()+'/images/icons/wait.gif">');var z=h.val();var y=c(".template.selected").data();if(!y){throw new Error("Expected at least one template to be selected")}Confluence.Blueprint._fireWizard(y,x,z)}function u(A){AJS.debug("Create Dialog:openDialog: started");function z(){AJS.trigger("analytics",{name:x+".cancel"});y.remove();c(".tipsy").remove();return false}var x="create-dialog",y,B=function(D){if(y){if(D.keyCode===27){z()}else{if(D.keyCode===13){c(".create-dialog-create-button:visible").click()}}}};y=new AJS.Dialog({width:840,id:x,closeOnOutsideClick:false,keypressListener:B});var C=y.popup.element;y.addHeader("Create");C.find(".dialog-title").prepend(Confluence.Templates.Blueprints.helpLink());y.addPanel("SinglePanel",Confluence.Templates.Blueprints.createDialogBody({contextPath:Confluence.getContextPath()}),"loading");y.addButton("Next",l,"create-dialog-create-button");C.find(".create-dialog-create-button").removeClass("button-panel-button").addClass("aui-button aui-button-primary");y.prevPage=function(){C.find(".wait-icon").remove();C.find(".create-dialog-create-button").removeAttr("disabled");return AJS.Dialog.prototype.prevPage.apply(y,arguments)};y.addCancel("Close",z);y.getParentPageId=w;C.find(".dialog-button-panel").find("button, .button-panel-link").attr("tabindex",100);h=C.find(".create-dialog-location-bar .space-select");C.options=A||{};b(C);y.getPanel(0).setPadding(0);y.gotoPanel(0);y.show();e.done(function(){p(Confluence.Blueprint.Dialog.loadedSpaces,C);t.done(function(F){m(F,C);c("#create-dialog .dialog-panel-body.loading").removeClass("loading");y.updateHeight();try{var D=c._data(document).events.keydown;var I=D.length;if(I<2){return}var E=D[I-1].handler;var H=D[I-2].handler;if((E===H)&&(H===B)){D.pop();AJS.log("Create Dialog - Removed duplicated keydown listener")}else{AJS.log("Create Dialog - AUI-1322 is fixed, remove this code!")}}catch(G){AJS.log("Error attempting to removed doubled keypressListener from jQuery")}});n.done(function(D){q(D,C)})});C.find(".create-dialog-location-bar input").change(function(){var D=c(this).val();k(D,C);d(D).done(function(E){q(E,C)})});Confluence.sessionCheck&&Confluence.sessionCheck();AJS.debug("Create Dialog:openDialog: finished");return false}AJS.debug("Create Dialog:init: confluence.enable.create-button callback complete")});AJS.toInit(function(){AJS.trigger("confluence.enable.create-button")});AJS.bind("shortcuts-loaded.keyboardshortcuts",function(b,a){AJS.$.each(a.shortcuts,function(d,c){if(c.param=="#createPageLink"){a.shortcuts.splice(d,1);return false}})});
Confluence.Blueprint.register("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page",function(a,c){var d=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(c);var b=a.getParentPageId();if(b){d+="&fromPageId="+encodeURIComponent(b)}window.location=d});
Confluence.Blueprint.register("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post",function(a,b){window.location=Confluence.getContextPath()+"/pages/createblogpost.action?spaceKey="+encodeURIComponent(b)});
// This file was automatically generated from create-content.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.createDialogBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="wait-container"><img class="wait-icon" src="', soy.$$escapeHtml(opt_data.contextPath), '/images/icons/wait.gif"><span class="wait-text">', soy.$$escapeHtml("Loading"), '&hellip;</span></div><div class="create-dialog-body"><div class="create-dialog-location-bar"><div><label>', soy.$$escapeHtml("Select space"), '</label><div class="space-select-control-container"><input type="text" class="space-select" tabindex="100"/><div class="description hidden">', soy.$$escapeHtml("Only suggested spaces are being shown."), '&nbsp;<a href="" title="', soy.$$escapeHtml("If the space you want is not in the list, please go to the space and try again. (The site has too many spaces to show all here.)"), '" tabindex="-1">', soy.$$escapeHtml("Why?"), '</a></div></div></div><div id="create-dialog-parent-container">', soy.$$escapeHtml("Parent"), ':&nbsp;<span></span></div></div><div class="template-select-container"><div class="wait-container"><img class="wait-icon" src="', soy.$$escapeHtml(opt_data.contextPath), '/images/icons/wait.gif"><span class="wait-text">', soy.$$escapeHtml("Loading"), '&hellip;</span></div><div class="template-select-container-body"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "http://docs.atlassian.com/confluence/docs-50/Creating+Content"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.spaceOption = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<option value="', soy.$$escapeHtml(opt_data.space.key), '">', soy.$$escapeHtml(opt_data.space.title), '</option>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.templates = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="templates" tabindex="100">');
  var webItemList33 = opt_data.webItems;
  var webItemListLen33 = webItemList33.length;
  for (var webItemIndex33 = 0; webItemIndex33 < webItemListLen33; webItemIndex33++) {
    var webItemData33 = webItemList33[webItemIndex33];
    output.append('<li class="template"', (webItemData33.itemModuleCompleteKey) ? 'data-item-module-complete-key="' + soy.$$escapeHtml(webItemData33.itemModuleCompleteKey) + '"' : '', (webItemData33.blueprintModuleCompleteKey) ? 'data-blueprint-module-complete-key="' + soy.$$escapeHtml(webItemData33.blueprintModuleCompleteKey) + '"' : '', (webItemData33.templateId) ? 'data-template-id="' + soy.$$escapeHtml(webItemData33.templateId) + '"' : '', (webItemData33.createResult) ? 'data-create-result="' + soy.$$escapeHtml(webItemData33.createResult) + '"' : '', '>', (webItemData33.styleClass) ? '<span class="template-preview ' + soy.$$escapeHtml(webItemData33.styleClass) + '"></span>' : '<img class="template-preview" src="' + soy.$$escapeHtml(webItemData33.iconURL) + '">', '<div class="template-meta"><div class="template-name" title="', soy.$$escapeHtml(webItemData33.name), '">', soy.$$escapeHtml(webItemData33.name), '</div><div class="template-description" title="', soy.$$escapeHtml(webItemData33.description), '">', soy.$$escapeHtml(webItemData33.description), '</div></div></li>');
  }
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.customiseTemplatesLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="add-remove-customise-templates-trigger button-panel-link" href="" tabindex="-1">', soy.$$escapeHtml("Add or customise templates for the selected space"), '</a>');
  return opt_sb ? '' : output.toString();
};

(function(a){if(typeof a.fn.each2=="undefined"){a.fn.extend({each2:function(f){var d=a([0]),e=-1,b=this.length;while(++e<b&&(d.context=d[0]=this[e])&&f.call(d[0],e,d)!==false){}return this}})}})(jQuery);(function(j,l){if(window.Select2!==l){return}var c,e,v,B,t,a;c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(C){C=C.which?C.which:C;switch(C){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:return true}return false},isControl:function(D){var C=D.which;switch(C){case c.SHIFT:case c.CTRL:case c.ALT:return true}if(D.metaKey){return true}return false},isFunctionKey:function(C){C=C.which?C.which:C;return C>=112&&C<=123}};t=(function(){var C=1;return function(){return C++}}());function b(F,G){var E=0,C=G.length,D;if(typeof F==="undefined"){return -1}if(F.constructor===String){for(;E<C;E=E+1){if(F.localeCompare(G[E])===0){return E}}}else{for(;E<C;E=E+1){D=G[E];if(D.constructor===String){if(D.localeCompare(F)===0){return E}}else{if(D===F){return E}}}}return -1}function q(D,C){if(D===C){return true}if(D===l||C===l){return false}if(D===null||C===null){return false}if(D.constructor===String){return D.localeCompare(C)===0}if(C.constructor===String){return C.localeCompare(D)===0}return false}function m(D,F){var G,E,C;if(D===null||D.length<1){return[]}G=D.split(F);for(E=0,C=G.length;E<C;E=E+1){G[E]=j.trim(G[E])}return G}function n(C){return C.outerWidth()-C.width()}function z(D){var C="keyup-change-value";D.bind("keydown",function(){if(j.data(D,C)===l){j.data(D,C,D.val())}});D.bind("keyup",function(){var E=j.data(D,C);if(E!==l&&D.val()!==E){j.removeData(D,C);D.trigger("keyup-change")}})}j(document).delegate("body","mousemove",function(C){j.data(document,"select2-lastpos",{x:C.pageX,y:C.pageY})});function u(C){C.bind("mousemove",function(E){var D=j.data(document,"select2-lastpos");if(D===l||D.x!==E.pageX||D.y!==E.pageY){j(E.target).trigger("mousemove-filtered",E)}})}function f(F,D,C){C=C||l;var E;return function(){var G=arguments;window.clearTimeout(E);E=window.setTimeout(function(){D.apply(C,G)},F)}}function A(E){var C=false,D;return function(){if(C===false){D=E();C=true}return D}}function g(C,E){var D=f(C,function(F){E.trigger("scroll-debounced",F)});E.bind("scroll",function(F){if(b(F.target,E.get())>=0){D(F)}})}function d(C){C.preventDefault();C.stopPropagation()}function x(D){if(!a){var C=D[0].currentStyle||window.getComputedStyle(D[0],null);a=j("<div></div>").css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:C.fontSize,fontFamily:C.fontFamily,fontStyle:C.fontStyle,fontWeight:C.fontWeight,letterSpacing:C.letterSpacing,textTransform:C.textTransform,whiteSpace:"nowrap"});j("body").append(a)}a.text(D.val());return a.width()}function i(G,F,D){var E=G.toUpperCase().indexOf(F.toUpperCase()),C=F.length;if(E<0){D.push(G);return}D.push(G.substring(0,E));D.push("<span class='select2-match'>");D.push(G.substring(E,E+C));D.push("</span>");D.push(G.substring(E+C,G.length))}function p(D){var F,C=0,E=null,G=D.quietMillis||100;return function(H){window.clearTimeout(F);F=window.setTimeout(function(){C+=1;var I=C,L=D.data,M=D.transport||j.ajax,K=D.traditional||false,J=D.type||"GET";L=L.call(this,H.term,H.page,H.context);if(null!==E){E.abort()}E=M.call(null,{url:D.url,dataType:D.dataType,data:L,type:J,traditional:K,success:function(O){if(I<C){return}var N=D.results(O,H.page);H.callback(N)}})},G)}}function r(C){var E=C,D,F=function(G){return""+G.text};if(!j.isArray(E)){F=E.text;if(!j.isFunction(F)){D=E.text;F=function(G){return G[D]}}E=E.results}return function(I){var H=I.term,G={results:[]},J;if(H===""){I.callback({results:E});return}J=function(L,N){var M,K;L=L[0];if(L.children){M={};for(K in L){if(L.hasOwnProperty(K)){M[K]=L[K]}}M.children=[];j(L.children).each2(function(O,P){J(P,M.children)});if(M.children.length){N.push(M)}}else{if(I.matcher(H,F(L))){N.push(L)}}};j(E).each2(function(L,K){J(K,G.results)});I.callback(G)}}function o(C){if(j.isFunction(C)){return C}return function(F){var E=F.term,D={results:[]};j(C).each(function(){var G=this.text!==l,H=G?this.text:this;if(E===""||F.matcher(E,H)){D.results.push(G?this:{id:this,text:this})}});F.callback(D)}}function k(C,D){if(j.isFunction(C)){return true}if(!C){return false}throw new Error("formatterName must be a function or a falsy value")}function s(C){return j.isFunction(C)?C():C}function h(C){var D=0;j.each(C,function(E,F){if(F.children){D+=h(F.children)}else{D++}});return D}function y(K,L,I,C){var D=K,M=false,F,J,G,E,H;if(!C.createSearchChoice||!C.tokenSeparators||C.tokenSeparators.length<1){return l}while(true){J=-1;for(G=0,E=C.tokenSeparators.length;G<E;G++){H=C.tokenSeparators[G];J=K.indexOf(H);if(J>=0){break}}if(J<0){break}F=K.substring(0,J);K=K.substring(J+H.length);if(F.length>0){F=C.createSearchChoice(F,L);if(F!==l&&F!==null&&C.id(F)!==l&&C.id(F)!==null){M=false;for(G=0,E=L.length;G<E;G++){if(q(C.id(F),C.id(L[G]))){M=true;break}}if(!M){I(F)}}}}if(D.localeCompare(K)!=0){return K}}j(document).ready(function(){j(document).delegate("body","mousedown touchend",function(E){var D=j(E.target).closest("div.atlassian-select2-container").get(0),C;if(D){j(document).find("div.select2-container-active").each(function(){if(this!==D){j(this).data("select2").blur()}})}else{D=j(E.target).closest("div.atlassian-select2-drop").get(0);j(document).find("div.select2-drop-active").each(function(){if(this!==D){j(this).data("select2").blur()}})}D=j(E.target);C=D.attr("for");if("LABEL"===E.target.tagName&&C&&C.length>0){D=j("#"+C);D=D.data("select2");if(D!==l){D.focus();E.preventDefault()}}})});function w(C,D){var E=function(){};E.prototype=new C;E.prototype.constructor=E;E.prototype.parent=C.prototype;E.prototype=j.extend(E.prototype,D);return E}e=w(Object,{bind:function(D){var C=this;return function(){D.apply(C,arguments)}},init:function(E){var D,C,F=".select2-results";this.opts=E=this.prepareOpts(E);this.id=E.id;if(E.element.data("select2")!==l&&E.element.data("select2")!==null){this.destroy()}this.enabled=true;this.container=this.createContainer();this.containerId="s2id_"+(E.element.attr("id")||"autogen"+t());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");this.container.attr("id",this.containerId);this.body=A(function(){return E.element.closest("body")});if(E.element.attr("class")!==l){this.container.addClass(E.element.attr("class").replace(/validate\[[\S ]+] ?/,""))}this.container.css(s(E.containerCss));this.container.addClass(s(E.containerCssClass));this.opts.element.data("select2",this).hide().before(this.container);this.container.data("select2",this);this.dropdown=this.container.find(".atlassian-select2-drop");this.dropdown.addClass(s(E.dropdownCssClass));this.dropdown.data("select2",this);this.results=D=this.container.find(F);this.search=C=this.container.find("input.select2-input");C.attr("tabIndex",this.opts.element.attr("tabIndex"));this.resultsPage=0;this.context=null;this.initContainer();this.initContainerWidth();u(this.results);this.dropdown.delegate(F,"mousemove-filtered",this.bind(this.highlightUnderEvent));g(80,this.results);this.dropdown.delegate(F,"scroll-debounced",this.bind(this.loadMoreIfNeeded));if(j.fn.mousewheel){D.mousewheel(function(K,L,I,H){var J=D.scrollTop(),G;if(H>0&&J-H<=0){D.scrollTop(0);d(K)}else{if(H<0&&D.get(0).scrollHeight-D.scrollTop()+H<=D.height()){D.scrollTop(D.get(0).scrollHeight-D.height());d(K)}}})}z(C);C.bind("keyup-change",this.bind(this.updateResults));C.bind("focus",function(){C.addClass("select2-focused");if(C.val()===" "){C.val("")}});C.bind("blur",function(){C.removeClass("select2-focused")});this.dropdown.delegate(F,"mouseup",this.bind(function(G){if(j(G.target).closest(".select2-result-selectable:not(.select2-disabled)").length>0){this.highlightUnderEvent(G);this.selectHighlighted(G)}else{this.focusSearch()}d(G)}));this.dropdown.bind("click mouseup mousedown",function(G){G.stopPropagation()});if(j.isFunction(this.opts.initSelection)){this.initSelection();this.monitorSource()}if(E.element.is(":disabled")||E.element.is("[readonly='readonly']")){this.disable()}},destroy:function(){var C=this.opts.element.data("select2");if(C!==l){C.container.remove();C.dropdown.remove();C.opts.element.removeData("select2").unbind(".select2").show()}},prepareOpts:function(G){var E,D,C,F;E=G.element;if(E.get(0).tagName.toLowerCase()==="select"){this.select=D=G.element}if(D){j.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in G){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}})}G=j.extend({},{populateResults:function(H,L,N){var M,K,P,J,I=this.opts.id,O=this;M=function(V,Q,U){var W,S,ab,Y,aa,R,Z,X,T;for(W=0,S=V.length;W<S;W=W+1){ab=V[W];Y=I(ab)!==l;aa=ab.children&&ab.children.length>0;R=j("<li></li>");R.addClass("select2-results-dept-"+U);R.addClass("select2-result");R.addClass(Y?"select2-result-selectable":"select2-result-unselectable");if(aa){R.addClass("select2-result-with-children")}R.addClass(O.opts.formatResultCssClass(ab));Z=j("<div></div>");Z.addClass("select2-result-label");T=G.formatResult(ab,Z,N);if(T!==l){Z.html(O.opts.escapeMarkup(T))}R.append(Z);if(aa){X=j("<ul></ul>");X.addClass("select2-result-sub");M(ab.children,X,U+1);R.append(X)}R.data("select2-data",ab);Q.append(R)}};M(L,H,0)}},j.fn.select2.defaults,G);if(typeof(G.id)!=="function"){C=G.id;G.id=function(H){return H[C]}}if(D){G.query=this.bind(function(K){var J={results:[],more:false},I=K.term,H,M,L;L=function(N,P){var O;if(N.is("option")){if(K.matcher(I,N.text(),N)){P.push({id:N.attr("value"),text:N.text(),element:N.get(),css:N.attr("class")})}}else{if(N.is("optgroup")){O={text:N.attr("label"),children:[],element:N.get(),css:N.attr("class")};N.children().each2(function(Q,R){L(R,O.children)});if(O.children.length>0){P.push(O)}}}};H=E.children();if(this.getPlaceholder()!==l&&H.length>0){M=H[0];if(j(M).text()===""){H=H.not(M)}}H.each2(function(N,O){L(O,J.results)});K.callback(J)});G.id=function(H){return H.id};G.formatResultCssClass=function(H){return H.css}}else{if(!("query" in G)){if("ajax" in G){F=G.element.data("ajax-url");if(F&&F.length>0){G.ajax.url=F}G.query=p(G.ajax)}else{if("data" in G){G.query=r(G.data)}else{if("tags" in G){G.query=o(G.tags);G.createSearchChoice=function(H){return{id:H,text:H}};G.initSelection=function(H,J){var I=[];j(m(H.val(),G.separator)).each(function(){var M=this,L=this,K=G.tags;if(j.isFunction(K)){K=K()}j(K).each(function(){if(q(this.id,M)){L=this.text;return false}});I.push({id:M,text:L})});J(I)}}}}}}if(typeof(G.query)!=="function"){throw"query function not defined for Select2 "+G.element.attr("id")}return G},monitorSource:function(){this.opts.element.bind("change.select2",this.bind(function(C){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection()}}))},triggerChange:function(C){C=C||{};C=j.extend({},C,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",true);this.opts.element.trigger(C);this.opts.element.data("select2-change-triggered",false);this.opts.element.click();if(this.opts.blurOnChange){this.opts.element.blur()}},enable:function(){if(this.enabled){return}this.enabled=true;this.container.removeClass("select2-container-disabled")},disable:function(){if(!this.enabled){return}this.close();this.enabled=false;this.container.addClass("select2-container-disabled")},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var G=this.container.offset(),O=this.container.outerHeight(),D=this.container.outerWidth(),F=this.dropdown.outerHeight(),K=j(window).scrollTop()+document.documentElement.clientHeight,C=G.top+O,N=G.left,L=C+F<=K,J=(G.top-F)>=this.body().scrollTop(),E=this.dropdown.hasClass("select2-drop-above"),H,M,I;if(this.body().css("position")!=="static"){H=this.body().offset();C-=H.top;N-=H.left}if(E){M=true;if(!J&&L){M=false}}else{M=false;if(!L&&J){M=true}}if(M){C=G.top-F;this.container.addClass("select2-drop-above");this.dropdown.addClass("select2-drop-above")}else{this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")}I=j.extend({top:C,left:N,width:D},s(this.opts.dropdownCss));this.dropdown.css(I)},shouldOpen:function(){var C;if(this.opened()){return false}C=j.Event("open");this.opts.element.trigger(C);return !C.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen()){return false}window.setTimeout(this.bind(this.opening),1);return true},opening:function(){var F=this.containerId,D=this.containerSelector,C="scroll."+F,E="resize."+F;this.container.parents().each(function(){j(this).bind(C,function(){var G=j(D);if(G.length==0){j(this).unbind(C)}G.select2("close")})});j(window).bind(E,function(){var G=j(D);if(G.length==0){j(window).unbind(E)}G.select2("close")});this.clearDropdownAlignmentPreference();if(this.search.val()===" "){this.search.val("")}this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.updateResults(true);if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body())}this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");this.ensureHighlightVisible();this.focusSearch()},close:function(){if(!this.opened()){return}var C=this;this.container.parents().each(function(){j(this).unbind("scroll."+C.containerId)});j(window).unbind("resize."+this.containerId);this.clearDropdownAlignmentPreference();this.dropdown.hide();this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");this.results.empty();this.clearSearch();this.opts.element.trigger(j.Event("close"))},clearSearch:function(){},ensureHighlightVisible:function(){var F=this.results,E,C,J,I,G,H,D;C=this.highlight();if(C<0){return}if(C==0){F.scrollTop(0);return}E=F.find(".select2-result-selectable");J=j(E[C]);I=J.offset().top+J.outerHeight();if(C===E.length-1){D=F.find("li.select2-more-results");if(D.length>0){I=D.offset().top+D.outerHeight()}}G=F.offset().top+F.outerHeight();if(I>G){F.scrollTop(F.scrollTop()+(I-G))}H=J.offset().top-F.offset().top;if(H<0){F.scrollTop(F.scrollTop()+H)}},moveHighlight:function(F){var E=this.results.find(".select2-result-selectable"),D=this.highlight();while(D>-1&&D<E.length){D+=F;var C=j(E[D]);if(C.hasClass("select2-result-selectable")&&!C.hasClass("select2-disabled")){this.highlight(D);break}}},highlight:function(C){var D=this.results.find(".select2-result-selectable").not(".select2-disabled");if(arguments.length===0){return b(D.filter(".select2-highlighted")[0],D.get())}if(C>=D.length){C=D.length-1}if(C<0){C=0}D.removeClass("select2-highlighted");j(D[C]).addClass("select2-highlighted");this.ensureHighlightVisible()},countSelectableResults:function(){return this.results.find(".select2-result-selectable").not(".select2-disabled").length},highlightUnderEvent:function(D){var C=j(D.target).closest(".select2-result-selectable");if(C.length>0&&!C.is(".select2-highlighted")){var E=this.results.find(".select2-result-selectable");this.highlight(E.index(C))}else{if(C.length==0){this.results.find(".select2-highlighted").removeClass("select2-highlighted")}}},loadMoreIfNeeded:function(){var G=this.results,F=G.find("li.select2-more-results"),J,I=-1,H=this.resultsPage+1,C=this,E=this.search.val(),D=this.context;if(F.length===0){return}J=F.offset().top-G.offset().top-G.height();if(J<=0){F.addClass("select2-active");this.opts.query({term:E,page:H,context:D,matcher:this.opts.matcher,callback:this.bind(function(K){if(!C.opened()){return}C.opts.populateResults.call(this,G,K.results,{term:E,page:H,context:D});if(K.more===true){F.detach().appendTo(G).text(C.opts.formatLoadMore(H+1));window.setTimeout(function(){C.loadMoreIfNeeded()},10)}else{F.remove()}C.positionDropdown();C.resultsPage=H})})}},tokenize:function(){},updateResults:function(H){var K=this.search,F=this.results,C=this.opts,E,J=this,I;if(H!==true&&(this.showSearchInput===false||!this.opened())){return}K.addClass("select2-active");function G(){F.scrollTop(0);K.removeClass("select2-active");J.positionDropdown()}function D(L){F.html(J.opts.escapeMarkup(L));G()}if(C.maximumSelectionSize>=1){E=this.data();if(j.isArray(E)&&E.length>=C.maximumSelectionSize&&k(C.formatSelectionTooBig,"formatSelectionTooBig")){D("<li class='select2-selection-limit'>"+C.formatSelectionTooBig(C.maximumSelectionSize)+"</li>");return}}if(K.val().length<C.minimumInputLength&&k(C.formatInputTooShort,"formatInputTooShort")){D("<li class='select2-no-results'>"+C.formatInputTooShort(K.val(),C.minimumInputLength)+"</li>");return}else{D("<li class='select2-searching'>"+C.formatSearching()+"</li>")}I=this.tokenize();if(I!=l&&I!=null){K.val(I)}this.resultsPage=1;C.query({term:K.val(),page:this.resultsPage,context:null,matcher:C.matcher,callback:this.bind(function(M){var L;if(!this.opened()){return}this.context=(M.context===l)?null:M.context;if(this.opts.createSearchChoice&&K.val()!==""){L=this.opts.createSearchChoice.call(null,K.val(),M.results);if(L!==l&&L!==null&&J.id(L)!==l&&J.id(L)!==null){if(j(M.results).filter(function(){return q(J.id(this),J.id(L))}).length===0){M.results.unshift(L)}}}if(M.results.length===0&&k(C.formatNoMatches,"formatNoMatches")){D("<li class='select2-no-results'>"+C.formatNoMatches(K.val())+"</li>");return}F.empty();J.opts.populateResults.call(this,F,M.results,{term:K.val(),page:this.resultsPage,context:null});if(M.more===true&&k(C.formatLoadMore,"formatLoadMore")){F.append("<li class='select2-more-results'>"+J.opts.escapeMarkup(C.formatLoadMore(this.resultsPage))+"</li>");window.setTimeout(function(){J.loadMoreIfNeeded()},10)}this.postprocessResults(M,H);G()})})},cancel:function(){this.close()},blur:function(){this.close();this.container.removeClass("select2-container-active");this.dropdown.removeClass("select2-drop-active");if(this.search[0]===document.activeElement){this.search.blur()}this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){this.search.show();this.search.focus();window.setTimeout(this.bind(function(){this.search.show();this.search.focus();this.search.val(this.search.val())}),10)},selectHighlighted:function(){var C=this.highlight(),D=this.results.find(".select2-highlighted").not(".select2-disabled"),E=D.closest(".select2-result-selectable").data("select2-data");if(E){D.addClass("select2-disabled");this.highlight(C);this.onSelect(E)}},getPlaceholder:function(){return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder},initContainerWidth:function(){function D(){var H,F,I,G,E;if(this.opts.width==="off"){return null}else{if(this.opts.width==="element"){return this.opts.element.outerWidth()===0?"auto":this.opts.element.outerWidth()+"px"}else{if(this.opts.width==="copy"||this.opts.width==="resolve"){H=this.opts.element.attr("style");if(H!==l){F=H.split(";");for(G=0,E=F.length;G<E;G=G+1){I=F[G].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/);if(I!==null&&I.length>=1){return I[1]}}}if(this.opts.width==="resolve"){H=this.opts.element.css("width");if(H.indexOf("%")>0){return H}return(this.opts.element.outerWidth()===0?"auto":this.opts.element.outerWidth()+"px")}return null}else{if(j.isFunction(this.opts.width)){return this.opts.width()}else{return this.opts.width}}}}}var C=D.call(this);if(C!==null){this.container.attr("style","width: "+C)}}});v=w(e,{createContainer:function(){var C=j("<div></div>",{"class":"atlassian-select2-container"}).html(["    <a href='#' onclick='return false;' class='atlassian-select2-choice'>","   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>","   <div><b></b></div>","</a>","    <div class='atlassian-select2-drop select2-offscreen'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return C},opening:function(){this.search.show();this.parent.opening.apply(this,arguments);this.dropdown.removeClass("select2-offscreen")},close:function(){if(!this.opened()){return}this.parent.close.apply(this,arguments);this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show()},focus:function(){this.close();this.selection.focus()},isFocused:function(){return this.selection[0]===document.activeElement},cancel:function(){this.parent.cancel.apply(this,arguments);this.selection.focus()},initContainer:function(){var E,D=this.container,F=this.dropdown,C=false;this.selection=E=D.find(".atlassian-select2-choice");this.search.bind("keydown",this.bind(function(G){if(!this.enabled){return}if(G.which===c.PAGE_UP||G.which===c.PAGE_DOWN){d(G);return}if(this.opened()){switch(G.which){case c.UP:case c.DOWN:this.moveHighlight((G.which===c.UP)?-1:1);d(G);return;case c.TAB:case c.ENTER:this.selectHighlighted();d(G);return;case c.ESC:this.cancel(G);d(G);return}}else{if(G.which===c.TAB||c.isControl(G)||c.isFunctionKey(G)||G.which===c.ESC){return}if(this.opts.openOnEnter===false&&G.which===c.ENTER){return}this.open();if(G.which===c.ENTER){return}}}));this.search.bind("focus",this.bind(function(){this.selection.attr("tabIndex","-1")}));this.search.bind("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active")}window.setTimeout(this.bind(function(){this.selection.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)}));E.bind("mousedown",this.bind(function(G){C=true;if(this.opened()){this.close();this.selection.focus()}else{if(this.enabled){this.open()}}C=false}));F.bind("mousedown",this.bind(function(){this.search.focus()}));E.bind("focus",this.bind(function(){this.container.addClass("select2-container-active");this.search.attr("tabIndex","-1")}));E.bind("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active")}window.setTimeout(this.bind(function(){this.search.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)}));E.bind("keydown",this.bind(function(H){if(!this.enabled){return}if(H.which===c.PAGE_UP||H.which===c.PAGE_DOWN){d(H);return}if(H.which===c.TAB||c.isControl(H)||c.isFunctionKey(H)||H.which===c.ESC){return}if(this.opts.openOnEnter===false&&H.which===c.ENTER){return}if(H.which==c.DELETE){if(this.opts.allowClear){this.clear()}return}this.open();if(H.which===c.ENTER){d(H);return}if(H.which<48){d(H);return}var G=String.fromCharCode(H.which).toLowerCase();if(H.shiftKey){G=G.toUpperCase()}this.search.focus();this.search.val(G);d(H)}));E.delegate("abbr","mousedown",this.bind(function(G){if(!this.enabled){return}this.clear();d(G);this.close();this.triggerChange();this.selection.focus()}));this.setPlaceholder();this.search.bind("focus",this.bind(function(){this.container.addClass("select2-container-active")}))},clear:function(){this.opts.element.val("");this.selection.find("span").empty();this.selection.removeData("select2-data");this.setPlaceholder()},initSelection:function(){var D;if(this.opts.element.val()===""){this.close();this.setPlaceholder()}else{var C=this;this.opts.initSelection.call(null,this.opts.element,function(E){if(E!==l&&E!==null){C.updateSelection(E);C.close();C.setPlaceholder()}})}},prepareOpts:function(){var C=this.parent.prepareOpts.apply(this,arguments);if(C.element.get(0).tagName.toLowerCase()==="select"){C.initSelection=function(D,F){var E=D.find(":selected");if(j.isFunction(F)){F({id:E.attr("value"),text:E.text()})}}}return C},setPlaceholder:function(){var C=this.getPlaceholder();if(this.opts.element.val()===""&&C!==l){if(this.select&&this.select.find("option:first").text()!==""){return}this.selection.find("span").html(this.opts.escapeMarkup(C));this.selection.addClass("select2-default");this.selection.find("abbr").hide()}},postprocessResults:function(F,D){var E=0,C=this,G=true;this.results.find(".select2-result-selectable").each2(function(H,I){if(q(C.id(I.data("select2-data")),C.opts.element.val())){E=H;return false}});this.highlight(E);if(D===true){G=this.showSearchInput=h(F.results)>=this.opts.minimumResultsForSearch;this.dropdown.find(".select2-search")[G?"removeClass":"addClass"]("select2-search-hidden");j(this.dropdown,this.container)[G?"addClass":"removeClass"]("select2-with-searchbox")}},onSelect:function(D){var C=this.opts.element.val();this.opts.element.val(this.id(D));this.updateSelection(D);this.close();this.selection.focus();if(!q(C,this.id(D))){this.triggerChange()}},updateSelection:function(E){var C=this.selection.find("span"),D;this.selection.data("select2-data",E);C.empty();D=this.opts.formatSelection(E,C);if(D!==l){C.append(this.opts.escapeMarkup(D))}this.selection.removeClass("select2-default");if(this.opts.allowClear&&this.getPlaceholder()!==l){this.selection.find("abbr").show()}},val:function(){var E,D=null,C=this;if(arguments.length===0){return this.opts.element.val()}E=arguments[0];if(this.select){this.select.val(E).find(":selected").each2(function(F,G){D={id:G.attr("value"),text:G.text()};return false});this.updateSelection(D);this.setPlaceholder()}else{if(this.opts.initSelection===l){throw new Error("cannot call val() if initSelection() is not defined")}if(!E){this.clear();return}this.opts.element.val(E);this.opts.initSelection(this.opts.element,function(F){C.opts.element.val(!F?"":C.id(F));C.updateSelection(F);C.setPlaceholder()})}},clearSearch:function(){this.search.val("")},data:function(D){var C;if(arguments.length===0){C=this.selection.data("select2-data");if(C==l){C=null}return C}else{if(!D||D===""){this.clear()}else{this.opts.element.val(!D?"":this.id(D));this.updateSelection(D)}}}});B=w(e,{createContainer:function(){var C=j("<div></div>",{"class":"atlassian-select2-container select2-container-multi"}).html(["    <ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' class='select2-input'>","  </li>","</ul>","<div class='atlassian-select2-drop select2-drop-multi' style='display:none;'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return C},prepareOpts:function(){var C=this.parent.prepareOpts.apply(this,arguments);if(C.element.get(0).tagName.toLowerCase()==="select"){C.initSelection=function(D,F){var E=[];D.find(":selected").each2(function(G,H){E.push({id:H.attr("value"),text:H.text()})});if(j.isFunction(F)){F(E)}}}return C},initContainer:function(){var C=".select2-choices",D;this.searchContainer=this.container.find(".select2-search-field");this.selection=D=this.container.find(C);this.search.bind("keydown",this.bind(function(F){if(!this.enabled){return}if(F.which===c.BACKSPACE&&this.search.val()===""){this.close();var G,E=D.find(".select2-search-choice-focus");if(E.length>0){this.unselect(E.first());this.search.width(10);d(F);return}G=D.find(".select2-search-choice");if(G.length>0){G.last().addClass("select2-search-choice-focus")}}else{D.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")}if(this.opened()){switch(F.which){case c.UP:case c.DOWN:this.moveHighlight((F.which===c.UP)?-1:1);d(F);return;case c.ENTER:case c.TAB:this.selectHighlighted();d(F);return;case c.ESC:this.cancel(F);d(F);return}}if(F.which===c.TAB||c.isControl(F)||c.isFunctionKey(F)||F.which===c.BACKSPACE||F.which===c.ESC){return}if(this.opts.openOnEnter===false&&F.which===c.ENTER){return}this.open();if(F.which===c.PAGE_UP||F.which===c.PAGE_DOWN){d(F)}}));this.search.bind("keyup",this.bind(this.resizeSearch));this.search.bind("blur",this.bind(function(E){this.container.removeClass("select2-container-active");this.search.removeClass("select2-focused");this.clearSearch();E.stopImmediatePropagation()}));this.container.delegate(C,"mousedown",this.bind(function(E){if(!this.enabled){return}if(j(E.target).closest(".select2-search-choice").length>0){return}this.clearPlaceholder();this.open();this.focusSearch();E.preventDefault()}));this.container.delegate(C,"focus",this.bind(function(){if(!this.enabled){return}this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");this.clearPlaceholder()}));this.clearSearch()},enable:function(){if(this.enabled){return}this.parent.enable.apply(this,arguments);this.search.removeAttr("disabled")},disable:function(){if(!this.enabled){return}this.parent.disable.apply(this,arguments);this.search.attr("disabled",true)},initSelection:function(){var D;if(this.opts.element.val()===""){this.updateSelection([]);this.close();this.clearSearch()}if(this.select||this.opts.element.val()!==""){var C=this;this.opts.initSelection.call(null,this.opts.element,function(E){if(E!==l&&E!==null){C.updateSelection(E);C.close();C.clearSearch()}})}},clearSearch:function(){var C=this.getPlaceholder();if(C!==l&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(C).addClass("select2-default");this.resizeSearch()}else{this.search.val(" ").width(10)}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default")}else{if(this.search.val()===" "){this.search.val("")}}},opening:function(){this.parent.opening.apply(this,arguments);this.clearPlaceholder();this.resizeSearch();this.focusSearch()},close:function(){if(!this.opened()){return}this.parent.close.apply(this,arguments)},focus:function(){this.close();this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(F){var E=[],D=[],C=this;j(F).each(function(){if(b(C.id(this),E)<0){E.push(C.id(this));D.push(this)}});F=D;this.selection.find(".select2-search-choice").remove();j(F).each(function(){C.addSelectedChoice(this)});C.postprocessResults()},tokenize:function(){var C=this.search.val();C=this.opts.tokenizer(C,this.data(),this.bind(this.onSelect),this.opts);if(C!=null&&C!=l){this.search.val(C);if(C.length>0){this.open()}}},onSelect:function(C){this.addSelectedChoice(C);if(this.select){this.postprocessResults()}if(this.opts.closeOnSelect){this.close();this.search.width(10)}else{if(this.countSelectableResults()>0){this.search.width(10);this.resizeSearch();this.positionDropdown()}else{this.close()}}this.triggerChange({added:C});this.focusSearch()},cancel:function(){this.close();this.focusSearch()},addSelectedChoice:function(E){var C=j("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),G=this.id(E),F=this.getVal(),D;D=this.opts.formatSelection(E,C);C.find("div").replaceWith("<div>"+this.opts.escapeMarkup(D)+"</div>");C.find(".select2-search-choice-close").bind("mousedown",d).bind("click dblclick",this.bind(function(H){if(!this.enabled){return}j(H.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(j(H.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch()})).dequeue();d(H)})).bind("focus",this.bind(function(){if(!this.enabled){return}this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active")}));C.data("select2-data",E);C.insertBefore(this.searchContainer);F.push(G);this.setVal(F)},unselect:function(D){var F=this.getVal(),E,C;D=D.closest(".select2-search-choice");if(D.length===0){throw"Invalid argument: "+D+". Must be .select2-search-choice"}E=D.data("select2-data");C=b(this.id(E),F);if(C>=0){F.splice(C,1);this.setVal(F);if(this.select){this.postprocessResults()}}D.remove();this.triggerChange({removed:E})},postprocessResults:function(){var E=this.getVal(),F=this.results.find(".select2-result-selectable"),D=this.results.find(".select2-result-with-children"),C=this;F.each2(function(H,G){var I=C.id(G.data("select2-data"));if(b(I,E)>=0){G.addClass("select2-disabled").removeClass("select2-result-selectable")}else{G.removeClass("select2-disabled").addClass("select2-result-selectable")}});D.each2(function(G,H){if(H.find(".select2-result-selectable").length==0){H.addClass("select2-disabled")}else{H.removeClass("select2-disabled")}});F.each2(function(H,G){if(!G.hasClass("select2-disabled")&&G.hasClass("select2-result-selectable")){C.highlight(0);return false}})},resizeSearch:function(){var H,F,E,C,D,G=n(this.search);H=x(this.search)+10;F=this.search.offset().left;E=this.selection.width();C=this.selection.offset().left;D=E-(F-C)-G;if(D<H){D=E-G}if(D<40){D=E-G}this.search.width(D)},getVal:function(){var C;if(this.select){C=this.select.val();return C===null?[]:C}else{C=this.opts.element.val();return m(C,this.opts.separator)}},setVal:function(D){var C;if(this.select){this.select.val(D)}else{C=[];j(D).each(function(){if(b(this,C)<0){C.push(this)}});this.opts.element.val(C.length===0?"":C.join(this.opts.separator))}},val:function(){var E,D=[],C=this;if(arguments.length===0){return this.getVal()}E=arguments[0];if(!E){this.opts.element.val("");this.updateSelection([]);this.clearSearch();return}this.setVal(E);if(this.select){this.select.find(":selected").each(function(){D.push({id:j(this).attr("value"),text:j(this).text()})});this.updateSelection(D)}else{if(this.opts.initSelection===l){throw new Error("val() cannot be called if initSelection() is not defined")}this.opts.initSelection(this.opts.element,function(G){var F=j(G).map(C.id);C.setVal(F);C.updateSelection(G);C.clearSearch()})}this.clearSearch()},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")}this.search.width(0);this.searchContainer.hide()},onSortEnd:function(){var D=[],C=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){D.push(C.opts.id(j(this).data("select2-data")))});this.setVal(D);this.triggerChange()},data:function(D){var C=this,E;if(arguments.length===0){return this.selection.find(".select2-search-choice").map(function(){return j(this).data("select2-data")}).get()}else{if(!D){D=[]}E=j.map(D,function(F){return C.opts.id(F)});this.setVal(E);this.updateSelection(D);this.clearSearch()}}});j.fn.select2=function(){var F=Array.prototype.slice.call(arguments,0),G,E,H,D,C=["val","destroy","opened","open","close","focus","isFocused","container","onSortStart","onSortEnd","enable","disable","positionDropdown","data"];this.each(function(){if(F.length===0||typeof(F[0])==="object"){G=F.length===0?{}:j.extend({},F[0]);G.element=j(this);if(G.element.get(0).tagName.toLowerCase()==="select"){D=G.element.attr("multiple")}else{D=G.multiple||false;if("tags" in G){G.multiple=D=true}}E=D?new B():new v();E.init(G)}else{if(typeof(F[0])==="string"){if(b(F[0],C)<0){throw"Unknown method: "+F[0]}H=l;E=j(this).data("select2");if(E===l){return}if(F[0]==="container"){H=E.container}else{H=E[F[0]].apply(E,F.slice(1))}if(H!==l){return false}}else{throw"Invalid arguments to select2 plugin: "+F}}});return(H===l)?this:H};j.fn.select2.defaults={width:"copy",closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(C,D,F){var E=[];i(C.text,F.term,E);return E.join("")},formatSelection:function(D,C){return D?D.text:l},formatResultCssClass:function(C){return l},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(C,D){return"Please enter "+(D-C.length)+" more characters"},formatSelectionTooBig:function(C){return"You can only select "+C+" item"+(C==1?"":"s")},formatLoadMore:function(C){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumSelectionSize:0,id:function(C){return C.id},matcher:function(C,D){return D.toUpperCase().indexOf(C.toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:y,escapeMarkup:function(C){if(C&&typeof(C)==="string"){return C.replace(/&/g,"&amp;")}return C},blurOnChange:false};window.Select2={query:{ajax:p,local:r,tags:o},util:{debounce:f,markMatch:i},"class":{"abstract":e,single:v,multi:B}}}(jQuery));
AJS.toInit(function(d){var j=d("#whats-new-menu-link"),f,c,a,m,i,h,l=function(q){var o=!d(this).prop("checked");var n=AJS.Meta.get("context-path")+"/plugins/whatsnew/set.action";var p={isShownForUser:o};AJS.log("whatsnew > toggleDontShow > setting isShownForUser to: "+p.isShownForUser);AJS.safe.post(n,p,function(s,r){AJS.log("whatsnew > toggleDontShow > isShownForUser set to: "+s.isShownForUser)})},e=function(){if(!c){return}h&&clearTimeout(h);g();AJS.setVisible(c,true)},k=function(o){var n=new AJS.ConfluenceDialog({width:880,height:585,id:"whats-new-dialog",onCancel:function(){n.hide().remove();h&&clearTimeout(h)}});var q="What\u2019s New in Confluence {0}";var p=AJS.Meta.get("version-number").match(/^\d+\.\d+/);var s=AJS.format(q,p);n.addHeader(s);n.addPanel("default",AJS.renderTemplate("whats-new-dialog-panel"));n.addCancel("Close",function(){n.hide().remove();h&&clearTimeout(h);return false});a=n.popup.element;if(AJS.Meta.get("remote-user")){n.page[n.curpage].buttonpanel.append(AJS.renderTemplate("whats-new-dialog-tip-panel"));a.find("#dont-show-whats-new").change(l).prop("checked",!o)}c=a.find("iframe");var r=AJS.Meta.get("whats-new-iframe-src-override");if(typeof(r)=="undefined"){r=j[0].href}c[0].src=r;c.load(e);m=a.find(".whats-new-timeout");return n},g=function(){if(i){i();i=null}f.addClass("hidden")},b=function(){var n=AJS.Meta.get("context-path")+"/plugins/whatsnew/get.action";d.getJSON(n,function(o){var p=AJS.Meta.get("static-resource-url-prefix")+"/download/resources/com.atlassian.confluence.whatsnew:whats-new-resources/whats-new.html";AJS.loadTemplatesFromUrl(p,function(){k(o.isShownForUser).show();f=a.find(".whats-new-throbber.hidden");f.removeClass("hidden");i=Raphael.spinner(f[0],80,"#666");h=setTimeout(function(){c=null;g();AJS.setVisible(m,true)},10000)})})};j.click(function(n){n.preventDefault();b()});AJS.Meta.getBoolean("show-whats-new")&&b()});
AJS.bind("initialize.keyboardshortcuts",function(){var D=AJS.$,B=function(F){return(AJS.Data&&AJS.Data.get(F))||AJS.params[F]},A=B("build-number"),E=B("keyboardshortcut-hash");if(!A||!E){throw new Error("build-number and keyboardshortcut-hash must both exist in AJS.Data or AJS.params.")}var C=AJS.contextPath()+"/rest/shortcuts/latest/shortcuts/"+encodeURIComponent(A)+"/"+encodeURIComponent(E);D.getJSON(C,function(H){var F=H.shortcuts;if(!F){throw new Error("Server returned no shortcuts.")}AJS.trigger("shortcuts-loaded.keyboardshortcuts",{shortcuts:F});var I=[];var K={enableContext:function(M){var L=D.grep(F,function(N){return N.context===M});I=I.concat(AJS.whenIType.fromJSON(L,true))}};var G=function(){AJS.trigger("register-contexts.keyboardshortcuts",{shortcutRegistry:K})};G();AJS.bind("add-bindings.keyboardshortcuts",G);var J=function(){D.each(I,function(){this.unbind()});I=[]};AJS.bind("remove-bindings.keyboardshortcuts",J)})});
AJS.toInit(function($) {
    AJS.log("confluence-keyboard-shortcuts initialising");

    // CGP-151/CONFDEV-811 - Skip this if you are in the Page Gadget
    if (AJS.PageGadget || (window.parent.AJS && window.parent.AJS.PageGadget)) {
        AJS.log("Inside the Page Gadget. Skipping keyboard shortcuts");
        return;
    }

    Confluence.KeyboardShortcuts.enabled = AJS.Meta.getBoolean('use-keyboard-shortcuts');

    AJS.bind("shortcuts-loaded.keyboardshortcuts", function (e, data) {
        Confluence.KeyboardShortcuts.shortcuts = data.shortcuts;
        $("#keyboard-shortcuts-link").click(Confluence.KeyboardShortcuts.openDialog);
    });

    AJS.bind("register-contexts.keyboardshortcuts", function(e, data){

        // Only bind the shortcuts for contexts if the user has the preference set
        if (!Confluence.KeyboardShortcuts.enabled) {
            return;
        }
        // Here we bind to register-contexts.keyboardshortcuts so that we can select which
        // keyboard shortcut contexts should be enabled. We use jQuery selectors to determine
        // which keyboard shortcut contexts are applicable to a page.

        var shortcutRegistry = data.shortcutRegistry;
        shortcutRegistry.enableContext("global");
        
        //See CONFDEV-12510 for why we need to check that Confluence.Editor.isVisible exists.
        var editorVisible = Confluence && Confluence.Editor && Confluence.Editor.isVisible && Confluence.Editor.isVisible();
        $("#action-menu-link").length && !editorVisible && shortcutRegistry.enableContext("viewcontent");
        $("#viewPageLink").length && shortcutRegistry.enableContext("viewinfo");

        if (editorVisible) {
            shortcutRegistry.enableContext("editor");

            // tinymce shortcuts are added through the tinymce apis
            var ed = tinyMCE.activeEditor,
                editorForm = $("#rte").closest("form");

            $.each(Confluence.KeyboardShortcuts.shortcuts, function (i, shortcut) {
                if (shortcut.context.indexOf("tinymce") != 0) return;

                var operation = shortcut.op,
                    param = shortcut.param;
                $.each(shortcut.keys, function () {
                    var shortcutKey = this,
                        shortcutFunc;
                    if (operation == "click") {
                        shortcutFunc = function() { $(param).click(); };
                    }
                    else if (operation == "execute") {
                        shortcutFunc = param;
                    }
                    if (shortcutFunc) {
                        if ($.isArray(shortcutKey)) {
                            shortcutKey = shortcutKey.join(",");
                        }
                        AJS.debug("Adding shortcut for " + shortcutKey);
                        ed.addShortcut(shortcutKey.toLowerCase(), "", shortcutFunc);

                        // CONFDEV-3711: Binds a keydown event to the form input elements to capture the editor
                        // save and preview shortcuts
                        if (shortcut.context == "tinymce.actions" && shortcutKey.indexOf("+") != -1) {
                            AJS.debug("Binding shortcut on inputs too for " + shortcutKey);
                            editorForm.delegate(":input", "keydown", function(event) {
                                var code = (event.keyCode ? event.keyCode : event.which);
                                var shortcutarray = shortcutKey.split("+");
                                // Parses the shortcut and checks if correct keys are present.
                                shortcutarray = $.map(shortcutarray, function(key) {
                                    return (((key == "Ctrl") && (event.metaKey)) || ((key == "Shift") && (event.shiftKey)) || (code == key.charCodeAt(0)) ? null : key);
                                });
                                if (!(shortcutarray.length)) {
                                    shortcutFunc();
                                    event.preventDefault();
                                }
                            });
                        }

                    } else {
                        AJS.log("ERROR: unkown editor shortcut key operation " + operation + " for shortcut " + shortcutKey);
                    }
                });
            });
        }

        Confluence.KeyboardShortcuts.ready = true;
    });

    function initShortcuts() {
        // AKS requires that we load the I18n resources before we ask to initialize the keyboard shortcuts
        AJS.I18n.get(["com.atlassian.confluence.keyboardshortcuts","com.atlassian.plugins.editor"], function() {
            AJS.trigger("initialize.keyboardshortcuts");
        }, function() {
            AJS.log("There was an error loading the keyboard shortcuts, please try again");
        });
    }

    // Why is this if statment needed? It seems that when we are ready to do an import, the pluginsystem is up, and we
    // pull down the super batch. This superbatch contains this code and it fires off a request to Confluence to get the
    // i18n resources. This request gets redirected to 'selectsetupstep.action' which due to the fact that the import is
    // running thinks we are done, and redirects to 'finishsetup.action' and things blow up.
    if (typeof Confluence.getContextPath() != "undefined") {
        if ($("#rte").length) { //If there is an editor on the page wait for it to load before initializing shortcuts
            AJS.bind("init.rte", function() {
                initShortcuts();
            });
        } else {
            initShortcuts();
        }
    }

    //CONFDEV-4913 - Disable shortcuts after we click add comment
    $("#add-comment-menu-link, #add-comment-rte").click(function() {
        AJS.trigger("remove-bindings.keyboardshortcuts");
    });

});

// Add functions that are referenced from the execute shortcut operations in atlassian-plugin.xml here
Confluence.KeyboardShortcuts = {
    Editor: [], // hack for jira issue plugin, remove once the plugin has been updated
    enabled: false,
    ready: false,
    dialog: null,
    closeDialog: function() {
        Confluence.KeyboardShortcuts.getDialog().then(function(dialog) {
            dialog.hide();
        });
        return false;
    },
    openDialog: function() {
        Confluence.KeyboardShortcuts.getDialog().then(function(dialog) {
            dialog.show();
        });
        return false;
    }
};


(function($) {

var popup;

Confluence.KeyboardShortcuts.getDialog = function () {
    var dfr = $.Deferred();

    if (popup) {
        return dfr.resolve(popup);
    }

    var shortcuts = Confluence.KeyboardShortcuts.shortcuts,

    cancel = function() {
        AJS.log("Hiding Shortcuts help");
        popup.hide();
        return false;
    },

    //Same technique as tinyMCE.
    isMac = navigator.platform.indexOf('Mac') != -1,

    //Construct the key sequence diagram shown on the keyboard shortcuts help dialog
    //e.g. shortcut.keys = [["g", "d"]]
    makeKeySequence = function (shortcut) {
        var sequenceSpan = AJS("span").addClass("item-action");
        // TODO - may need "or" in future if keys has length > 1
        var keySequence = shortcut.keys[0];

        for(var i = 0; i < keySequence.length; i++) {
            if(i > 0)
                sequenceSpan.append(makeKbdSeparator("then"));

            makeKeyCombo(keySequence[i], sequenceSpan);
        }

        return sequenceSpan;
    },

    makeKeyCombo = function(combo, sequence) {
        var keys = combo.split("+");

        for (var i = 0; i < keys.length; i++) {
            if (i > 0)
                sequence.append(makeKbdSeparator("+"));

            makeKeyAlternatives(keys[i], sequence);
        }
    },

    makeKeyAlternatives = function(key, sequence) {
        var keys = key.split("..");

        for (var i = 0; i < keys.length; i++) {
            if (i > 0)
                sequence.append(makeKbdSeparator("to"));

            sequence.append(makeKbd(keys[i]));
        }
    },

    makeKbd = function(key) {
        var kbd = AJS("kbd");

        switch (key){
            case "Shift":
            case "Sh":
                kbd.text("Shift");
                kbd.addClass("modifier-key");
                break;
            case "Ctrl":
                var text = isMac ? '\u2318' : "Ctrl";  //Apple command key
                kbd.text(text);
                kbd.addClass("modifier-key");
                break;
            case "Tab":
                kbd.text("Tab");
                kbd.addClass("modifier-key");
                break;
            case "Alt":
                kbd.text("Alt");
                kbd.addClass("modifier-key");
                break;
            default:
                kbd.text(key);
                kbd.addClass("regular-key");
        }

        return kbd;
    },

    makeKbdSeparator = function(text) {
        var separator = AJS("span");
        separator.text(text);
        separator.addClass("key-separator");
        return separator;
    },

    makeShortcutModule = function(title, contexts, shortcuts) {
        var module = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutModule({title: title}));
        var list = module.find("ul");

        for (var i = 0; i < shortcuts.length; i++) {
            var shortcut = shortcuts[i];
            if (shortcut.hidden) {
                continue;
            }
            if($.inArray(shortcut.context, contexts) != -1) {
                var shortcutItem = AJS("li").addClass("item-details");
                var desc = AJS("strong").addClass("item-description").append(AJS.I18n.getText(shortcut.descKey));
                shortcutItem.append(desc);
                shortcutItem.append(makeKeySequence(shortcut));
                list.append(shortcutItem);
            }
        }

        return module;
    },

    makeGeneralShortcutsMenu = function() {
        var generalShortcutsMenuPane = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel({panelId: "general-shortcuts-panel"}));
        var generalShortcutsMenu = $(generalShortcutsMenuPane).children(".shortcutsmenu");

        if (AJS.Meta.get("remote-user")) {
            generalShortcutsMenuPane.find(".keyboard-shortcut-dialog-panel-header").append(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox());
        }

        generalShortcutsMenu.append(makeShortcutModule("Global Shortcuts", ["global"], shortcuts));
        generalShortcutsMenu.append(makeShortcutModule("Page \/ Blog Post Actions", ["viewcontent", "viewinfo"], shortcuts));

        return generalShortcutsMenuPane;
    },

    makeEditorShortcutsMenu = function() {
        var editorShortcutsMenuPane = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel({panelId: "editor-shortcuts-panel"}));
        var editorShortcutsMenu = $(editorShortcutsMenuPane).children(".shortcutsmenu");

        editorShortcutsMenu.append(makeShortcutModule("Block Formatting", ["tinymce.block"], shortcuts));
        editorShortcutsMenu.append(makeShortcutModule("Rich Formatting", ["tinymce.rich"], shortcuts));
        editorShortcutsMenu.append(makeShortcutModule("Editing Actions", ["tinymce.actions"], shortcuts));

        return editorShortcutsMenuPane;
    },

    toggleEnabled = function (event) {
        var enable = $(this).prop('checked');
        // TODO - after 3.4-m4 and blitz - error handling architecture
        AJS.$.post(Confluence.getContextPath() + "/rest/confluenceshortcuts/latest/enabled", {enabled: enable}, function(){
            Confluence.KeyboardShortcuts.enabled = enable;
            Confluence.KeyboardShortcuts.ready = false;
            if (enable) {
                AJS.trigger("add-bindings.keyboardshortcuts");
            } else {
                AJS.trigger("remove-bindings.keyboardshortcuts");
            }
        });
    },

    initialiseEnableShortcutsCheckbox = function () {
        $('#keyboard-shortcut-enabled-checkbox')
            .prop('checked', Confluence.KeyboardShortcuts.enabled)
            .click(toggleEnabled);
    };

    popup = AJS.ConfluenceDialog({
        width: 950,
        height: 660,
        id: "keyboard-shortcuts-dialog"
    });

    popup.addHeader("Keyboard Shortcuts");
    popup.addPanel("General", makeGeneralShortcutsMenu());
    popup.addPanel("Editor", makeEditorShortcutsMenu());
    popup.addCancel("Close", cancel);
    // CONFDEV-12853: Add help link via prepend() instead of append() to prevent FF display issue
    popup.popup.element.find(".dialog-title").prepend(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutHelpLink());
    AJS.trigger("keyboard-shortcut-dialog-ready", popup);

    // If you have an editor visible automatically open the Editor tab.
    if (Confluence && Confluence.Editor && Confluence.Editor.isVisible()) {
        popup.overrideLastTab();
        popup.gotoPanel(1);
    } else {
        popup.gotoPanel(0);
    }

    dfr.resolve(popup);
    initialiseEnableShortcutsCheckbox();
    return dfr;
};

}(AJS.$));

/*
Adds the "Editor Autoformatting" tab to the Keyboard Shortcuts help dialog
 */
AJS.toInit(function($) {
    var templates = Confluence.Templates.KeyboardShortcutsDialog.Autoformat,

    buildShortcutModule = function(title, context, itemBuilder) {
        var module = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutModule({title: title})),
        list = module.find("ul"),
        items = getMenuItemsForContext(context);

        for (var i = 0, ii = items.length; i < ii; i++) {
            list.append (
                itemBuilder(items[i])
            );
        }

        return module;       
    },

    buildStandardShortcutModule = function(title, context, itemTemplate) {
        return buildShortcutModule(
                title,
                context,
                function (item) {
                    return itemTemplate({output: item.description, type: item.action});
                }
        );
    },

    buildEmoticonModule = function(title, context) {
        var emoticonResourceUrl = AJS.params.staticResourceUrlPrefix + "/images/icons/emoticons/";
        return buildShortcutModule(
                title,
                context,
                function (item) {
                    return templates.emoticonHelpItem(
                            {src: emoticonResourceUrl + item.img, type: item.action}
                    );
                }
        );
    },

    getMenuItemsForContext = function(context) {
        return $.grep(Confluence.KeyboardShortcuts.Autoformat, function(e) {
            return e.context == context;
        });
    },

    buildHelpPanel = function() {
        var autoformatHelpPanel = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel({panelId: 'autoformat-shortcuts-panel'})),
        autoformatHelpPanelMenu = autoformatHelpPanel.children(".shortcutsmenu");

        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule(
                        "Font Formatting",
                        "autoformat.font_formatting",
                        templates.simpleHelpItem
                )
        );
        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule("Autocomplete",
                        "autoformat.autocomplete",
                        templates.keyboardShortcutItem
                )
        );
        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule(
                        "Tables",
                        "autoformat.tables",
                        templates.tableHelpItem
                )
        );
        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule(
                        "Styles",
                        "autoformat.styles",
                        templates.styleHelpItem
                ).addClass("styles-module")
        );
        autoformatHelpPanelMenu.append(
                buildEmoticonModule(
                        "Emoticons",
                        "autoformat.emoticons"
                )
        );
        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule(
                        "Lists",
                        "autoformat.lists",
                        templates.simpleHelpItem
                )
        );

        if (AJS.Meta.get("remote-user"))
        {
            autoformatHelpPanel.find(".keyboard-shortcut-dialog-panel-header").append(
                templates.configureAutocomplete(
                        {href: Confluence.getContextPath() + "/users/viewmyeditorsettings.action"}
                )
            );
        }

        return autoformatHelpPanel;
    };

    AJS.bind("keyboard-shortcut-dialog-ready", function(e, popup) {
        popup.addPanel("Editor Autoformatting", buildHelpPanel());
    });

    Confluence.KeyboardShortcuts.Autoformat = [
        {
            context: "autoformat.font_formatting",
            description: templates.boldDescription(),
            action: "*Bold*"
        },
        {
            context: "autoformat.font_formatting",
            description: templates.underlineDescription(),
            action: "+Underline+"
        },
        {
            context: "autoformat.font_formatting",
            description: templates.italicDescription(),
            action: "_Italic_"
        },
        {
            context: "autoformat.font_formatting",
            description: templates.monospaceDescription(),
            action: "{{Monospace}}"
        },
        {
            context: "autoformat.tables",
            description: templates.tableDescription(),
            action: "||||| + enter"
        },
        {
            context: "autoformat.tables",
            description: templates.tableWithHeadingsDiscriptions(),
            action: "||heading||heading||"
        },
        {
            context: "autoformat.styles",
            description: templates.h1Description(),
            action: "h1. Heading"
        },
        {
            context: "autoformat.styles",
            description: templates.h3Description(),
            action: "h3. Heading"
        },
        {
            context: "autoformat.styles",
            description: templates.bqDescription(),
            action: "bq. Quote"
        },
        {
            context: "autoformat.emoticons",
            img: "check.png",
            action: "(\/)"
        },
        {
            context: "autoformat.emoticons",
            img: "smile.png",
            action: ":)"
        },
        {
            context: "autoformat.lists",
            description: templates.numberedListDescription(),
            action: "# list"
        },
        {
            context: "autoformat.lists",
            description: templates.bulletedListDescription(),
            action: "* bullets"
        },
        {
            context: "autoformat.lists",
            description: templates.inlineTaskListDescription(),
            action: "[] task"
        },
        {
            context: "autoformat.autocomplete",
            description: "Image\/Media",
            action: "!"
        },
        {
            context: "autoformat.autocomplete",
            description: "Link",
            action: "["
        },
        {
            context: "autoformat.autocomplete",
            description: "Macro",
            action: "{"
        }
    ];
});
// This file was automatically generated from shortcut-dialog-tab-autoformat.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.KeyboardShortcutsDialog == 'undefined') { Confluence.Templates.KeyboardShortcutsDialog = {}; }
if (typeof Confluence.Templates.KeyboardShortcutsDialog.Autoformat == 'undefined') { Confluence.Templates.KeyboardShortcutsDialog.Autoformat = {}; }


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.configureAutocomplete = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="keyboard-shortcut-autocomplete-message">', soy.$$escapeHtml("To configure Autocomplete,"), ' <a target="_blank" href=', soy.$$escapeHtml(opt_data.href), '>', soy.$$escapeHtml("go to your editor settings"), '</a></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="item-details"><span class="item-description wiki-content">', opt_data.output, '</span><span class="', opt_data.actionClass, ' item-action">', opt_data.type, '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.simpleHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: ''}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.tableHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'table-action'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.styleHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'style-action'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.keyboardShortcutItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: soy.$$escapeHtml(opt_data.output), type: '<kbd class="regular-key">' + soy.$$escapeHtml(opt_data.type) + '</kbd>', actionClass: ''}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.emoticonHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.simpleHelpItem({output: '<img src=' + soy.$$escapeHtml(opt_data.src) + '></img>', type: opt_data.type}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.boldDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<b>', soy.$$escapeHtml("Bold"), '</b> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.underlineDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span style="text-decoration: underline;">', soy.$$escapeHtml("Underline"), '</span> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.italicDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<em>', soy.$$escapeHtml("Italic"), '</em> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.monospaceDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<code>', soy.$$escapeHtml("Monospace"), '</code> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.tableDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="confluenceTable"><tbody><tr><td class="confluenceTd">', soy.$$escapeHtml("first cell"), '</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr></tbody></table>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.tableWithHeadingsDiscriptions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="confluenceTable"><tbody><tr><th class="confluenceTh">', soy.$$escapeHtml("heading"), '</th><th class="confluenceTh">', soy.$$escapeHtml("heading"), '</th></tr><tr><td class="confluenceTd">&#8203;</td><td class="confluenceTd">&#8203;</td></tr></tbody></table>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.h1Description = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("Heading"), '</h1>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.h3Description = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h3>', soy.$$escapeHtml("Heading"), '</h3>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.bqDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<blockquote>', soy.$$escapeHtml("Quote"), '</blockquote>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.numberedListDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol><li>', soy.$$escapeHtml("list"), '</li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.bulletedListDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul><li>', soy.$$escapeHtml("bullets"), '</li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.inlineTaskListDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="inline-task-list"><li>task</li></ul>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from help-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.KeyboardShortcutsDialog == 'undefined') { Confluence.Templates.KeyboardShortcutsDialog = {}; }


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutModule = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="module"><div class="mod-header"><h3>', soy.$$escapeHtml(opt_data.title), '</h3></div><div class="mod-content"><ul class="mod-item"></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutHelpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.customHelpLink({href: soy.$$escapeHtml("http://docs.atlassian.com/confluence/docs-50/Keyboard+Shortcuts"), text: soy.$$escapeHtml("View All Shortcuts")}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form name="shortcut-settings" id="shortcut-settings-form"><input type="checkbox" name="enabled" id="keyboard-shortcut-enabled-checkbox"><label for="keyboard-shortcut-enabled-checkbox">', soy.$$escapeHtml("Enable General Shortcuts"), '</label></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id=', soy.$$escapeHtml(opt_data.panelId), '><div class="keyboard-shortcut-dialog-panel-header"></div><div class="shortcutsmenu"></div><div class="keyboard-shortcut-dialog-panel-footer"></div></div>');
  return opt_sb ? '' : output.toString();
};

(function(G){var E=G(document),J=(jQuery.browser.msie&&parseInt(jQuery.browser.version,10)==8);var C=null;var B=(function(){var N=false;function L(Q){if(!N&&Q.which===1){N=true;E.bind("mouseup mouseleave",M);G(this).trigger("aui-button-invoke")}}function M(){E.unbind("mouseup mouseleave",M);setTimeout(function(){N=false},0)}function P(){if(!N){G(this).trigger("aui-button-invoke")}}function O(Q){Q.preventDefault()}if(typeof document.addEventListener==="undefined"){return{click:P,"click selectstart":O,mousedown:function(S){L.call(this,S);var T=this;var R=document.activeElement;if(R!==null){R.attachEvent("onbeforedeactivate",Q);setTimeout(function(){R.detachEvent("onbeforedeactivate",Q)},0)}function Q(U){switch(U.toElement){case null:case T:case document.body:case document.documentElement:U.returnValue=false}}}}}return{click:P,"click mousedown":O,mousedown:L}})();var A={"aui-button-invoke":function(h,R){R=G.extend({selectFirst:true},R);var O=I(this);var N=G(this).addClass("active");var r=N.hasClass("aui-dropdown2-sub-trigger");var m=O.parent()[0];var p=O.next()[0];var d=G(this).attr("data-dropdown2-hide-location");if(d){var Z=document.getElementById(d);if(Z){m=G(Z);p=undefined}else{throw new Error("The specified data-dropdown2-hide-location id doesn't exist")}}var T=R.$menu||N.closest(".aui-dropdown2-trigger-group");if(r){var e=N.closest(".aui-dropdown2");O.addClass(e.attr("class")).addClass("aui-dropdown2-sub-menu")}var S={click:function(t){var s=G(this);if(!P(s)){return }if(!s.hasClass("interactive")){l()}if(V(s)){f(s,{selectFirst:false});t.preventDefault()}},mousemove:function(){var t=G(this);var s=U(t);if(s){f(t,{selectFirst:false})}}};var n={"click focusin mousedown":function(s){var t=s.target;if(!D(t,O[0])&&!D(t,N[0])){l()}},keydown:function(u){if(u.shiftKey&&u.keyCode==9){j(-1)}else{switch(u.keyCode){case 13:var t=Y();if(V(t)){f(t)}else{K(t[0])}break;case 27:a();break;case 37:var t=Y();if(V(t)){var s=I(t);if(s.is(":visible")){O.trigger("aui-dropdown2-step-out");return }}if(r){a()}else{q(-1)}break;case 38:j(-1);break;case 39:var t=Y();if(V(t)){f(t)}else{q(1)}break;case 40:j(1);break;case 9:j(1);break;default:return }}u.preventDefault()}};function c(s,t){s.each(function(){var u=G(this);u.attr("role",t);if(u.hasClass("checked")){u.attr("aria-checked","true");if(t=="radio"){u.closest("ul").attr("role","radiogroup")}}else{u.attr("aria-checked","false")}})}N.attr("aria-controls",N.attr("aria-owns"));if(J){O.removeClass("aui-dropdown2-tailed")}O.find(".disabled").attr("aria-disabled","true");O.find("li.hidden > a").addClass("disabled").attr("aria-disabled","true");c(O.find(".aui-dropdown2-checkbox"),"checkbox");c(O.find(".aui-dropdown2-radio"),"radio");function Q(){var AB=N.offset();var AF=N.outerWidth();var AE=O.outerWidth();var AA=G("body").outerWidth(true);var t=Math.max(parseInt(O.css("min-width"),10),AF);var u=N.data("container")||false;var AD="left";if(J){var v=parseInt(O.css("border-left-width"),10)+parseInt(O.css("border-right-width"),10);AE=AE-v;t=t-v}if(!r){O.css("min-width",t+"px")}var w=AB.left,AC=AB.top+N.outerHeight();if(r){var y=3;w=AB.left+e.outerWidth()-y;AC=AB.top}if(AA<w+AE&&AE<=w+AF){w=AB.left+AF-AE;if(r){w=AB.left-AE}AD="right"}if(u){var s=N.closest(u),z=N.offset().left+N.outerWidth(),x=z+AE;if(t>=AE){AE=t}if(x>z){w=z-AE;AD="right"}if(J){w-=v}}O.attr({"data-dropdown2-alignment":AD,"aria-hidden":"false"}).css({display:"block",left:w+"px",top:AC+"px"});O.appendTo(document.body)}Q();if(N.hasClass("toolbar-trigger")){O.addClass("aui-dropdown2-in-toolbar")}if(N.parent().hasClass("aui-buttons")){O.addClass("aui-dropdown2-in-buttons")}if(N.parents().hasClass("aui-header")){O.addClass("aui-dropdown2-in-header")}O.trigger("aui-dropdown2-show",R);if(R.selectFirst){M()}i("on");function a(){L();i("off");setTimeout(function(){O.css("display","none").css("min-width","").insertAfter(N).attr("aria-hidden","true");if(!r){N.removeClass("active")}Y().removeClass("active");O.removeClass("aui-dropdown2-in-toolbar");O.removeClass("aui-dropdown2-in-buttons");if(p){O.insertBefore(p)}else{O.appendTo(m)}O.trigger("aui-dropdown2-hide")},0)}function l(){a();if(r){e.trigger("aui-dropdown2-hide-all")}}function g(s){if(r&&s.target===e[0]){a()}}function P(s){return !s.is(".disabled, [aria-disabled=true]")}function V(s){return s.hasClass("aui-dropdown2-sub-trigger")}function f(s,t){if(!V(s)){return }t=G.extend({},t,{$menu:T});var u=I(s);if(u.is(":visible")){u.trigger("aui-dropdown2-select-first")}else{s.trigger("aui-button-invoke",t)}}function Y(){return O.find("a.active")}var W=null;function U(s){if(W&&W[0]===s[0]){return false}W=s;Y().removeClass("active");if(P(s)){s.addClass("active")}O.trigger("aui-dropdown2-item-selected");X();return true}function M(){U(O.find("a:not(.disabled)").first())}function j(t){var s=O.find("> ul > li > a, > .aui-dropdown2-section > ul > li > a").not(".disabled");U(k(s,t,true))}function b(s){if(s.length>0){l();s.trigger("aui-button-invoke")}}function q(s){b(k(T.find(".aui-dropdown2-trigger").not(".disabled, [aria-disabled=true], .aui-dropdown2-sub-trigger"),s,false))}function k(u,v,t){var s=u.index(u.filter(".active"));s+=(s<0&&v<0)?1:0;s+=v;if(t){s%=u.length}else{if(s<0){s=u.length}}return u.eq(s)}function o(){b(G(this))}function L(){if(C===n){E.unbind(n);C=null}}function X(){if(C===n){return }E.unbind(C);E.bind(n);C=n}function i(t){var u="bind";var s="delegate";if(t!=="on"){u="unbind";s="undelegate"}if(!r){T[s](".aui-dropdown2-trigger:not(.active)","mousemove",o);N[u]("aui-button-invoke",a)}else{e[u]("aui-dropdown2-hide aui-dropdown2-item-selected aui-dropdown2-step-out",g)}O[u]("aui-dropdown2-hide-all",l);O[s]("a",S);O[u]("aui-dropdown2-hide",X);O[u]("aui-dropdown2-select-first",M)}},mousedown:function(L){if(L.which===1){G(this).bind(F)}}};var F={mouseleave:function(){E.bind(H)},"mouseup mouseleave":function(){G(this).unbind(F)}};var H={mouseup:function(L){var M=G(L.target).closest(".aui-dropdown2 a, .aui-dropdown2-trigger")[0];if(M){setTimeout(function(){K(M)},0)}},"mouseup mouseleave":function(){G(this).unbind(H)}};function K(L){if(L.click){L.click()}else{var M=document.createEvent("MouseEvents");M.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);L.dispatchEvent(M)}}function D(M,L){return(M===L)||G.contains(L,M)}function I(N){if(!(N instanceof jQuery)){N=G(N)}var O=N.attr("aria-owns"),L=N.attr("aria-haspopup"),M=document.getElementById(O);if(M){return G(M)}else{if(!O){throw new Error("Dropdown 2 trigger required attribute not set: aria-owns")}if(!L){throw new Error("Dropdown 2 trigger required attribute not set: aria-haspopup")}if(!M){throw new Error("Dropdown 2 trigger aria-owns attr set to nonexistent id: "+O)}throw new Error("Dropdown 2 trigger unknown error. I don't know what you did, but there's smoke everywhere. Consult the documentation.")}}E.delegate(".aui-dropdown2-trigger",B);E.delegate(".aui-dropdown2-trigger:not(.active):not([aria-disabled=true]),.aui-dropdown2-sub-trigger:not([aria-disabled=true])",A);E.delegate(".aui-dropdown2-checkbox:not(.disabled)","click",function(){var L=G(this);if(L.hasClass("checked")){L.removeClass("checked").attr("aria-checked","false");L.trigger("aui-dropdown2-item-uncheck")}else{L.addClass("checked").attr("aria-checked","true");L.trigger("aui-dropdown2-item-check")}});E.delegate(".aui-dropdown2-radio:not(.checked):not(.disabled)","click",function(){var L=G(this);var M=L.closest("ul").find(".checked");M.removeClass("checked").attr("aria-checked","false").trigger("aui-dropdown2-item-uncheck");L.addClass("checked").attr("aria-checked","true").trigger("aui-dropdown2-item-check")});E.delegate(".aui-dropdown2 a.disabled","click",function(L){L.preventDefault()})})(jQuery);
/*! Underscore.js 1.4.3 http://underscorejs.org MIT license */
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.3";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?-1!=n.indexOf(t):E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2);return w.map(n,function(n){return(w.isFunction(t)?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t){return w.isEmpty(t)?[]:w.filter(n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=F(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return k(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i};var I=function(){};w.bind=function(n,t){var r,e;if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));if(!w.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));I.prototype=n.prototype;var u=new I;I.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},w.bindAll=function(n){var t=o.call(arguments,1);return 0==t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=S(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&S(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return S(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),w.isFunction=function(n){return"function"==typeof n},w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return void 0===n},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+(0|Math.random()*(t-n+1))};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};T.unescape=w.invert(T.escape);var M={escape:RegExp("["+w.keys(T.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(T.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(M[n],function(t){return T[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=""+ ++N;return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n"," ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){r=w.defaults({},r,w.templateSettings);var e=RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(D,function(n){return"\\"+B[n]}),r&&(i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(i+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),a&&(i+="';\n"+a+"\n__p+='"),u=o+t.length,t}),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=Function(r.variable||"obj","_",i)}catch(o){throw o.source=i,o}if(t)return a(t,w);var c=function(n){return a.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+i+"}",c},w.chain=function(n){return w(n).chain()};var z=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);
(function(A){AJS.triggerEvt=function(C,B){A(AJS).trigger(C,B)};AJS.bindEvt=function(B,C){A(AJS).bind(B,C)};AJS.triggerEvtForInst=function(B,D,C){A(D).trigger(B,C);AJS.triggerEvt(B,C);if(D.id){AJS.triggerEvt(D.id+"_"+B,C)}}})(AJS.$);
jQuery.fn.serializeObject=function(){var A={};this.find(":input:not(:button):not(:submit):not(:radio):not('select[multiple]')").each(function(){if(this.name===""){return }if(this.value===null){this.value=""}A[this.name]=this.value.match(/^(tru|fals)e$/i)?this.value.toLowerCase()=="true":this.value});this.find("input:radio:checked").each(function(){A[this.name]=this.value});this.find("select[multiple]").each(function(){var B=jQuery(this),C=B.val();if(B.data("aui-ss")){if(C){A[this.name]=C[0]}else{A[this.name]=""}}else{if(C!==null){A[this.name]=C}else{A[this.name]=[]}}});return A};
(function(D){D.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(F,E){D.fx.step[E]=function(G){if(G.state==0){G.start=C(G.elem,E);G.end=B(G.end)}G.elem.style[E]="rgb("+[Math.max(Math.min(parseInt((G.pos*(G.end[0]-G.start[0]))+G.start[0]),255),0),Math.max(Math.min(parseInt((G.pos*(G.end[1]-G.start[1]))+G.start[1]),255),0),Math.max(Math.min(parseInt((G.pos*(G.end[2]-G.start[2]))+G.start[2]),255),0)].join(",")+")"}});function B(F){var E;if(F&&F.constructor==Array&&F.length==3){return F}if(E=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return[parseInt(E[1]),parseInt(E[2]),parseInt(E[3])]}if(E=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return[parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55]}if(E=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return[parseInt(E[1],16),parseInt(E[2],16),parseInt(E[3],16)]}if(E=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return[parseInt(E[1]+E[1],16),parseInt(E[2]+E[2],16),parseInt(E[3]+E[3],16)]}return A[D.trim(F).toLowerCase()]}function C(G,E){var F;do{F=D.curCSS(G,E);if(F!=""&&F!="transparent"||D.nodeName(G,"body")){break}E="backgroundColor"}while(G=G.parentNode);return B(F)}var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);
(function(A){AJS.RestfulTable=Backbone.View.extend({initialize:function(C){var B=this;B.options=A.extend(true,B._getDefaultOptions(C),C);B.id=this.options.id;B._events=AJS.RestfulTable.Events;B.classNames=AJS.RestfulTable.ClassNames;B.dataKeys=AJS.RestfulTable.DataKeys;this.$table=A(C.el).addClass(this.classNames.RESTFUL_TABLE).addClass(this.classNames.ALLOW_HOVER).addClass("aui").addClass(B.classNames.LOADING);this.$table.wrapAll("<form class='aui' action='#' />");this.$thead=A("<thead/>");this.$theadRow=A("<tr />").appendTo(this.$thead);this.$tbody=A("<tbody/>");if(!this.$table.length){throw new Error("AJS.RestfulTable: Init failed! The table you have specified ["+this.$table.selector+"] cannot be found.")}if(!this.options.columns){throw new Error("AJS.RestfulTable: Init failed! You haven't provided any columns to render.")}this.showGlobalLoading();A.each(this.options.columns,function(D,E){var F=A.isFunction(E.header)?E.header():E.header;if(typeof F==="undefined"){console.warn("You have not specified [header] for column ["+E.id+"]. Using id for now...");F=E.id}B.$theadRow.append("<th>"+F+"</th>")});B.$theadRow.append("<th></th><th></th>");this._models=this._createCollection();this._rowClass=this.options.views.row;this.editRows=[];this.$table.closest("form").submit(function(D){if(B.focusedRow){B.focusedRow.trigger(B._events.SAVE)}D.preventDefault()});if(this.options.allowReorder){this.$theadRow.prepend("<th />");this.$tbody.sortable({handle:"."+this.classNames.DRAG_HANDLE,helper:function(F,D){var E=D.clone(true).addClass(B.classNames.MOVEABLE);E.children().each(function(G){A(this).width(D.children().eq(G).width())});return E},start:function(D,E){var F=E.placeholder.find("td");E.item.addClass(B.classNames.MOVEABLE).children().each(function(G){A(this).width(F.eq(G).width())});E.placeholder.html('<td colspan="'+B.getColumnCount()+'">&nbsp;</td>').css("visibility","visible");B.getRowFromElement(E.item[0]).trigger(B._events.MODAL)},stop:function(D,E){if(jQuery(E.item[0]).is(":visible")){E.item.removeClass(B.classNames.MOVEABLE).children().attr("style","");E.placeholder.removeClass(B.classNames.ROW);B.getRowFromElement(E.item[0]).trigger(B._events.MODELESS)}},update:function(F,H){var D,E,G={},I=B.getRowFromElement(H.item[0]);if(I){if(B.options.reverseOrder){E=H.item.next();if(!E.length){G.position="First"}else{D=B.getRowFromElement(E).model;G.after=D.url()}}else{E=H.item.prev();if(!E.length){G.position="First"}else{D=B.getRowFromElement(E).model;G.after=D.url()}}A.ajax({url:I.model.url()+"/move",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(G),complete:function(){I.hideLoading()},success:function(J){AJS.triggerEvtForInst(B._events.REORDER_SUCCESS,B,[J])},error:function(K){var J=A.parseJSON(K.responseText||K.data);AJS.triggerEvtForInst(B._events.SERVER_ERROR,B,[J,K,this])}});I.showLoading()}},axis:"y",delay:0,containment:"document",cursor:"move",scroll:true,zIndex:8000});this.$tbody.bind("selectstart mousedown",function(D){return !A(D.target).is("."+B.classNames.DRAG_HANDLE)})}if(this.options.allowCreate!==false){this._createRow=new this.options.views.editRow({columns:this.options.columns,isCreateRow:true,model:this.options.model.extend({url:function(){return B.options.resources.self}}),cancelAccessKey:this.options.cancelAccessKey,submitAccessKey:this.options.submitAccessKey,allowReorder:this.options.allowReorder}).bind(this._events.CREATED,function(D){if(B.options.createPosition==="bottom"){B.addRow(D)}else{B.addRow(D,0)}}).bind(this._events.VALIDATION_ERROR,function(){this.trigger(B._events.FOCUS)}).render({errors:{},values:{}});this.$create=A('<tbody class="'+this.classNames.CREATE+'" />').append(this._createRow.el);this._applyFocusCoordinator(this._createRow);this._createRow.trigger(this._events.FOCUS)}this._models.bind("remove",function(D){A.each(B.getRows(),function(E,F){if(F.model===D){if(F.hasFocus()&&B._createRow){B._createRow.trigger(B._events.FOCUS)}B.removeRow(F)}})});if(A.isFunction(this.options.resources.all)){this.options.resources.all(function(D){B.populate(D)})}else{A.get(this.options.resources.all,function(D){B.populate(D)})}},_createCollection:function(){var B=this;var C=this.options.Collection.extend({sort:function(D){D||(D={});if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}this.tableRows=B.getRows();this.models=this.sortBy(this.comparator);this.tableRows=undefined;if(!D.silent){this.trigger("refresh",this,D)}return this},remove:function(E,D){this.tableRows=B.getRows();Backbone.Collection.prototype.remove.apply(this,arguments);this.tableRows=undefined;return this}});return new C([],{comparator:function(E){var D;A.each(this.tableRows!==undefined?this.tableRows:B.getRows(),function(F){if(this.model.id===E.id){D=F;return false}});return D}})},populate:function(B){if(this.options.reverseOrder){B.reverse()}this.hideGlobalLoading();if(B&&B.length){this._models.reset([],{silent:true});this.renderRows(B);if(this.isEmpty()){this.showNoEntriesMsg()}}else{this.showNoEntriesMsg()}this.$table.append(this.$thead);if(this.options.createPosition==="bottom"){this.$table.append(this.$tbody).append(this.$create)}else{this.$table.append(this.$create).append(this.$tbody)}this.$table.removeClass(this.classNames.LOADING).trigger(this._events.INITIALIZED,[this]);AJS.triggerEvtForInst(this._events.INITIALIZED,this,[this]);if(this.options.autoFocus){this.$table.find(":input:text:first").focus()}},showGlobalLoading:function(){if(!this.$loading){this.$loading=A('<div class="aui-restfultable-init"><span class="aui-restfultable-throbber"></span><span class="aui-restfultable-loading">'+this.options.loadingMsg+"</span></div>")}if(!this.$loading.is(":visible")){this.$loading.insertAfter(this.$table)}return this},hideGlobalLoading:function(){if(this.$loading){this.$loading.remove()}return this},addRow:function(C,E){var B,D;if(!C.id){throw new Error("AJS.RestfulTable.addRow: to add a row values object must contain an id. Maybe you are not returning it from your restend point?Recieved:"+JSON.stringify(C))}D=new this.options.model(C);B=this._renderRow(D,E);this._models.add(D);this.removeNoEntriesMsg();AJS.triggerEvtForInst(this._events.ROW_ADDED,this,[B,this]);return this},removeRow:function(B){this._models.remove(B.model);B.remove();if(this.isEmpty()){this.showNoEntriesMsg()}AJS.triggerEvtForInst(this._events.ROW_REMOVED,this,[B,this])},isEmpty:function(){return this._models.length===0},getModels:function(){return this._models},getTable:function(){return this.$table},getTableBody:function(){return this.$tbody},getCreateRow:function(){return this._createRow},getColumnCount:function(){return this.options.columns.length+2},getRowFromElement:function(B){return A(B).data(this.dataKeys.ROW_VIEW)},showNoEntriesMsg:function(){if(this.$noEntries){this.$noEntries.remove()}this.$noEntries=A("<tr>").addClass(this.classNames.NO_ENTRIES).append(A("<td>").attr("colspan",this.getColumnCount()).text(this.options.noEntriesMsg)).appendTo(this.$tbody);return this},removeNoEntriesMsg:function(){if(this.$noEntries&&this._models.length>0){this.$noEntries.remove()}return this},getRows:function(){var B=this,C=[];this.$tbody.find("."+this.classNames.READ_ONLY).each(function(){var D=A(this),E=D.data(B.dataKeys.ROW_VIEW);if(E){C.push(E)}});return C},_renderRow:function(G,F){var C=this,E=this.$tbody.find("."+this.classNames.READ_ONLY),B,D;D=new this._rowClass({model:G,columns:this.options.columns,allowEdit:this.options.allowEdit,allowDelete:this.options.allowDelete,allowReorder:this.options.allowReorder,deleteConfirmation:this.options.deleteConfirmation});this.removeNoEntriesMsg();D.bind(this._events.EDIT_ROW,function(H){C.edit(this,H)});B=D.render().$el;if(F!==-1){if(typeof F==="number"&&E.length!==0){B.insertBefore(E[F])}else{this.$tbody.append(B)}}B.data(this.dataKeys.ROW_VIEW,D);D.bind(this._events.MODAL,function(){C.$table.removeClass(C.classNames.ALLOW_HOVER);C.$tbody.sortable("disable");A.each(C.getRows(),function(){if(!C.isRowBeingEdited(this)){this.delegateEvents({})}})});D.bind(this._events.ANIMATION_STARTED,function(){C.$table.removeClass(C.classNames.ALLOW_HOVER)});D.bind(this._events.ANIMATION_FINISHED,function(){C.$table.addClass(C.classNames.ALLOW_HOVER)});D.bind(this._events.MODELESS,function(){C.$table.addClass(C.classNames.ALLOW_HOVER);C.$tbody.sortable("enable");A.each(C.getRows(),function(){if(!C.isRowBeingEdited(this)){this.delegateEvents()}})});this._applyFocusCoordinator(D);this.trigger(this._events.ROW_INITIALIZED,D);return D},isRowBeingEdited:function(C){var B=false;A.each(this.editRows,function(){if(this.el===C.el){B=true;return false}});return B},_applyFocusCoordinator:function(C){var B=this;if(!C.hasFocusBound){C.hasFocusBound=true;C.bind(this._events.FOCUS,function(){if(B.focusedRow&&B.focusedRow!==C){B.focusedRow.trigger(B._events.BLUR)}B.focusedRow=C;if(C instanceof AJS.RestfulTable.Row&&B._createRow){B._createRow.enable()}})}return this},_removeEditRow:function(C){var B=A.inArray(C,this.editRows);this.editRows.splice(B,1);return this},_shiftFocusAfterEdit:function(){if(this.editRows.length>0){this.editRows[this.editRows.length-1].trigger(this._events.FOCUS)}else{if(this._createRow){this._createRow.trigger(this._events.FOCUS)}}return this},_saveEditRowOnBlur:function(){return this.editRows.length<=1},dismissEditRows:function(){var B=this;A.each(this.editRows,function(){if(!this.hasUpdates()){this.trigger(B._events.FINISHED_EDITING)}})},edit:function(F,E){var B=this,D=new this.options.views.editRow({el:F.el,columns:this.options.columns,isUpdateMode:true,allowReorder:this.options.allowReorder,model:F.model,cancelAccessKey:this.options.cancelAccessKey,submitAccessKey:this.options.submitAccessKey}),C=F.model.toJSON();C.update=true;D.render({errors:{},update:true,values:C}).bind(B._events.UPDATED,function(G,H){B._removeEditRow(this);this.unbind();F.render().delegateEvents();F.trigger(B._events.UPDATED);if(H!==false){B._shiftFocusAfterEdit()}}).bind(B._events.VALIDATION_ERROR,function(){this.trigger(B._events.FOCUS)}).bind(B._events.FINISHED_EDITING,function(){B._removeEditRow(this);F.render().delegateEvents();this.unbind()}).bind(B._events.CANCEL,function(){B._removeEditRow(this);this.unbind();F.render().delegateEvents();B._shiftFocusAfterEdit()}).bind(B._events.BLUR,function(){B.dismissEditRows();if(B._saveEditRowOnBlur()){this.trigger(B._events.SAVE,false)}});this._applyFocusCoordinator(D);D.trigger(B._events.FOCUS,E);if(B._createRow){B._createRow.disable()}this.editRows.push(D);return D},renderRows:function(D){var B=this._models.comparator,C=[];this._models.comparator=undefined;var E=_.map(D,function(G){var F=new this.options.model(G);C.push(this._renderRow(F,-1).el);return F},this);this._models.add(E,{silent:true});this._models.comparator=B;this.removeNoEntriesMsg();this.$tbody.append(C);return this},_getDefaultOptions:function(B){return{model:B.model||AJS.RestfulTable.EntryModel,allowEdit:true,views:{editRow:AJS.RestfulTable.EditRow,row:AJS.RestfulTable.Row},Collection:Backbone.Collection.extend({url:B.resources.self,model:B.model||AJS.RestfulTable.EntryModel}),allowReorder:false,loadingMsg:B.loadingMsg||"Loading"}}});AJS.RestfulTable.DataKeys={ENABLED_SUBMIT:"enabledSubmit",ROW_VIEW:"RestfulTable_Row_View"};AJS.RestfulTable.ClassNames={NO_VALUE:"aui-restfultable-editable-no-value",NO_ENTRIES:"aui-restfultable-no-entires",RESTFUL_TABLE:"aui-restfultable",ROW:"aui-restfultable-row",READ_ONLY:"aui-restfultable-readonly",ACTIVE:"aui-restfultable-active",ALLOW_HOVER:"aui-restfultable-allowhover",FOCUSED:"aui-restfultable-focused",MOVEABLE:"aui-restfultable-movable",ANIMATING:"aui-restfultable-animate",DISABLED:"aui-restfultable-disabled",SUBMIT:"aui-restfultable-submit",CANCEL:"aui-restfultable-cancel",EDIT_ROW:"aui-restfultable-editrow",CREATE:"aui-restfultable-create",DRAG_HANDLE:"aui-restfultable-draghandle",ORDER:"aui-restfultable-order",EDITABLE:"aui-restfultable-editable",ERROR:"error",DELETE:"aui-restfultable-delete",LOADING:"loading"};AJS.RestfulTable.Events={REORDER_SUCCESS:"RestfulTable.reorderSuccess",ROW_ADDED:"RestfulTable.rowAdded",ROW_REMOVED:"RestfulTable.rowRemoved",EDIT_ROW:"RestfulTable.switchedToEditMode",SERVER_ERROR:"RestfulTable.serverError",CREATED:"created",UPDATED:"updated",FOCUS:"focus",BLUR:"blur",SUBMIT:"submit",SAVE:"save",MODAL:"modal",MODELESS:"modeless",CANCEL:"cancel",CONTENT_REFRESHED:"contentRefreshed",RENDER:"render",FINISHED_EDITING:"finishedEditing",VALIDATION_ERROR:"validationError",SUBMIT_STARTED:"submitStarted",SUBMIT_FINISHED:"submitFinished",ANIMATION_STARTED:"animationStarted",ANIMATION_FINISHED:"animationFinisehd",INITIALIZED:"initialized",ROW_INITIALIZED:"rowInitialized"}})(AJS.$);
(function(A){AJS.RestfulTable.EntryModel=Backbone.Model.extend({sync:function(F,D,C){var B=this;var E=C.error;C.error=function(G){B._serverErrorHandler(G,this);if(E){E.apply(this,arguments)}};return Backbone.sync.apply(Backbone,arguments)},save:function(D,F){F=F||{};var C=this,H,B,E=F.error,G=F.success;F.error=function(I,K){var J=A.parseJSON(K.responseText||K.data);if(E){E.call(C,C,J,K)}};if(this.isNew()){Backbone.Model.prototype.save.call(this,D,F)}else{if(D){H=AJS.RestfulTable.EntryModel.extend({url:this.url()});B=new H({id:this.id});B.save=Backbone.Model.prototype.save;F.success=function(I,J){C.clear().set(I.toJSON());if(G){G.call(C,C,J)}};B.save(D,F)}}},destroy:function(D){D=D||{};var B=this,C=this.url(),E;if(D.data){E=A.param(D.data)}if(E!==""){C=C+"?"+E}A.ajax({url:C,type:"DELETE",dataType:"json",contentType:"application/json",success:function(F){if(B.collection){B.collection.remove(B)}if(D.success){D.success.call(B,F)}},error:function(F){B._serverErrorHandler(F,this);if(D.error){D.error.call(B,F)}}});return this},changedAttributes:function(B){var D={},C=this.toJSON();A.each(B,function(E,F){if(!C[E]){if(typeof F==="string"){if(A.trim(F)!==""){D[E]=F}}else{if(A.isArray(F)){if(F.length!==0){D[E]=F}}else{D[E]=F}}}else{if(C[E]&&C[E]!==F){if(typeof F==="object"){if(!_.isEqual(F,C[E])){D[E]=F}}else{D[E]=F}}}});if(!_.isEmpty(D)){this.addExpand(D);return D}},addExpand:function(B){},_serverErrorHandler:function(D,B){var C;if(D.status!==400){C=A.parseJSON(D.responseText||D.data);AJS.triggerEvtForInst(AJS.RestfulTable.Events.SERVER_ERROR,this,[C,D,B])}},fetch:function(B){B=B||{};this.clear();Backbone.Model.prototype.fetch.call(this,B)}})})(AJS.$);
(function(A){AJS.RestfulTable.EditRow=Backbone.View.extend({tagName:"tr",events:{focusin:"_focus",click:"_focus",keyup:"_handleKeyUpEvent"},initialize:function(B){this.$el=A(this.el);this._events=AJS.RestfulTable.Events;this.classNames=AJS.RestfulTable.ClassNames;this.dataKeys=AJS.RestfulTable.DataKeys;this.columns=B.columns;this.isCreateRow=B.isCreateRow;this.allowReorder=B.allowReorder;this.events["click ."+this.classNames.CANCEL]="_cancel";this.delegateEvents();if(B.isUpdateMode){this.isUpdateMode=true}else{this._modelClass=B.model;this.model=new this._modelClass()}this.bind(this._events.CANCEL,function(){this.disabled=true}).bind(this._events.SAVE,function(C){if(!this.disabled){this.submit(C)}}).bind(this._events.FOCUS,function(C){this.focus(C)}).bind(this._events.BLUR,function(){this.$el.removeClass(this.classNames.FOCUSED);this.disable()}).bind(this._events.SUBMIT_STARTED,function(){this._submitStarted()}).bind(this._events.SUBMIT_FINISHED,function(){this._submitFinished()})},defaultColumnRenderer:function(B){if(B.allowEdit!==false){return A("<input type='text' />").addClass("text").attr({name:B.name,value:B.value})}else{if(B.value){return document.createTextNode(B.value)}}},renderDragHandle:function(){return'<span class="'+this.classNames.DRAG_HANDLE+'"></span></td>'},_handleKeyUpEvent:function(B){if(B.keyCode===27){this.trigger(this._events.CANCEL)}},_cancel:function(B){this.trigger(this._events.CANCEL);B.preventDefault();return this},_submitStarted:function(){this.submitting=true;this.showLoading().disable().delegateEvents({});return this},_submitFinished:function(){this.submitting=false;this.hideLoading().enable().delegateEvents(this.events);return this},_focus:function(B){if(!this.hasFocus()){this.trigger(this._events.FOCUS,B.target.name)}return this},hasFocus:function(){return this.$el.hasClass(this.classNames.FOCUSED)},focus:function(C){var D,B;this.enable();if(C){D=this.$el.find(":input[name="+C+"], #"+C)}else{B=this.$el.find(this.classNames.ERROR+":first");if(B.length===0){D=this.$el.find(":input:text:first")}else{D=B.parent().find(":input")}}this.$el.addClass(this.classNames.FOCUSED);D.focus().trigger("select");return this},disable:function(){var C,B;if(A.browser.mozilla){B=this.$el.find(":submit");if(B.length){C=A("<input type='submit' class='"+this.classNames.SUBMIT+"' />").addClass(B.attr("class")).val(B.val()).data(this.dataKeys.ENABLED_SUBMIT,B);B.replaceWith(C)}}this.$el.addClass(this.classNames.DISABLED).find(":submit").attr("disabled","disabled");return this},enable:function(){var B,C;if(A.browser.mozilla){B=this.$el.find(this.classNames.SUBMIT),C=B.data(this.dataKeys.ENABLED_SUBMIT);if(C&&B.length){B.replaceWith(C)}}this.$el.removeClass(this.classNames.DISABLED).find(":submit").removeAttr("disabled");return this},showLoading:function(){this.$el.addClass(this.classNames.LOADING);return this},hideLoading:function(){this.$el.removeClass(this.classNames.LOADING);return this},hasUpdates:function(){return !!this.mapSubmitParams(this.$el.serializeObject())},mapSubmitParams:function(B){return this.model.changedAttributes(B)},submit:function(D){var B=this,C;if(document.activeElement!==window){A(document.activeElement).blur()}if(this.isUpdateMode){C=this.mapSubmitParams(this.$el.serializeObject());if(!C){return B.trigger(B._events.CANCEL)}}else{this.model.clear();C=this.mapSubmitParams(this.$el.serializeObject())}this.trigger(this._events.SUBMIT_STARTED);this.model.save(C,{success:function(){if(B.isUpdateMode){B.trigger(B._events.UPDATED,B.model,D)}else{B.trigger(B._events.CREATED,B.model.toJSON());B.model=new B._modelClass();B.render({errors:{},values:{}});B.trigger(B._events.FOCUS)}B.trigger(B._events.SUBMIT_FINISHED)},error:function(E,F,G){if(G.status===400){B.renderErrors(F.errors).trigger(B._events.VALIDATION_ERROR,F.errors)}B.trigger(B._events.SUBMIT_FINISHED)},silent:true});return this},renderError:function(B,C){return A("<div />").attr("data-field",B).addClass(this.classNames.ERROR).text(C)},renderErrors:function(C){var B=this;this.$("."+this.classNames.ERROR).remove();if(C){A.each(C,function(D,E){B.$el.find("[name='"+D+"']").closest("td").append(B.renderError(D,E))})}return this},render:function(C){var B=this;this.$el.empty();if(this.allowReorder){A('<td  class="'+this.classNames.ORDER+'" />').append(this.renderDragHandle()).appendTo(B.$el)}A.each(this.columns,function(E,F){var G,I,H=C.values[F.id],D=[{name:F.id,value:H,allowEdit:F.allowEdit},C.values,B.model];if(H){B.$el.attr("data-"+F.id,H)}if(B.isCreateRow&&F.createView){G=new F.createView({model:B.model}).render(D[0])}else{if(F.editView){G=new F.editView({model:B.model}).render(D[0])}else{G=B.defaultColumnRenderer.apply(B,D)}}I=A("<td />");if(typeof G==="object"&&G.done){G.done(function(J){I.append(J)})}else{I.append(G)}if(F.styleClass){I.addClass(F.styleClass)}I.appendTo(B.$el)});this.$el.append(this.renderOperations(C.update,C.values)).addClass(this.classNames.ROW+" "+this.classNames.EDIT_ROW);this.trigger(this._events.RENDER,this.$el,C.values);this.$el.trigger(this._events.CONTENT_REFRESHED,[this.$el]);return this},renderOperations:function(C){var B=A('<td class="aui-restfultable-operations" />');if(C){B.append(A('<input class="aui-button" type="submit" />').attr({accesskey:this.submitAccessKey,value:"Update"})).append(A('<a class="aui-button aui-button-link" href="#" />').addClass(this.classNames.CANCEL).text("Cancel").attr({accesskey:this.cancelAccessKey}))}else{B.append(A('<input class="aui-button" type="submit" />').attr({accesskey:this.submitAccessKey,value:"Add"}))}return B.add(A('<td class="aui-restfultable-throbber" />'))}})})(AJS.$);
AJS.RestfulTable.CustomEditView=AJS.RestfulTable.CustomCreateView=AJS.RestfulTable.CustomReadView=Backbone.View;
(function(A){AJS.RestfulTable.Row=Backbone.View.extend({tagName:"tr",events:{"click .aui-restfultable-editable":"edit"},initialize:function(C){var B=this;C=C||{};this._events=AJS.RestfulTable.Events;this.classNames=AJS.RestfulTable.ClassNames;this.dataKeys=AJS.RestfulTable.DataKeys;this.columns=C.columns;this.allowEdit=C.allowEdit;this.allowDelete=C.allowDelete;if(!this.events["click .aui-restfultable-editable"]){throw new Error("It appears you have overridden the events property. To add events you will need to usea work around. https://github.com/documentcloud/backbone/issues/244")}this.index=C.index||0;this.deleteConfirmation=C.deleteConfirmation;this.allowReorder=C.allowReorder;this.$el=A(this.el);this.bind(this._events.CANCEL,function(){this.disabled=true}).bind(this._events.FOCUS,function(D){this.focus(D)}).bind(this._events.BLUR,function(){this.unfocus()}).bind(this._events.UPDATED,function(){this._showUpdated()}).bind(this._events.MODAL,function(){this.$el.addClass(this.classNames.ACTIVE)}).bind(this._events.MODELESS,function(){this.$el.removeClass(this.classNames.ACTIVE)})},renderDragHandle:function(){return'<span class="'+this.classNames.DRAG_HANDLE+'"></span></td>'},defaultColumnRenderer:function(B){if(B.value){return document.createTextNode(B.value.toString())}},_showUpdated:function(){var B=this,C=this.$el.addClass(this.classNames.ANIMATING).find("td").css("backgroundColor","#ebf1fd");this.trigger(this._events.ANIMATION_STARTED);B.delegateEvents({});setTimeout(function(){C.animate({backgroundColor:"white"},function(){C.css("backgroundColor","");B.trigger(B._events.ANIMATION_FINISHED);A(document).one("mousemove",function(){B.delegateEvents();B.$el.removeClass(B.classNames.ANIMATING)})})},500)},sync:function(C){this.model.addExpand(C);var B=this;this.showLoading();this.model.save(C,{success:function(){B.hideLoading().render();B.trigger(B._events.UPDATED)},error:function(){B.hideLoading()}});return this},refresh:function(D,C){var B=this;this.showLoading();this.model.fetch({success:function(){B.hideLoading().render();if(D){D.apply(this,arguments)}},error:function(){B.hideLoading();if(C){C.apply(this,arguments)}}});return this},hasFocus:function(){return this.$el.hasClass(this.classNames.FOCUSED)},focus:function(){A(this.el).addClass(this.classNames.FOCUSED);return this},unfocus:function(){A(this.el).removeClass(this.classNames.FOCUSED);return this},showLoading:function(){this.$el.addClass(this.classNames.LOADING);return this},hideLoading:function(){this.$el.removeClass(this.classNames.LOADING);return this},edit:function(C){var B;if(A(C.target).is("."+this.classNames.EDITABLE)){B=A(C.target).attr("data-field-name")}else{B=A(C.target).closest("."+this.classNames.EDITABLE).attr("data-field-name")}this.trigger(AJS.RestfulTable.Events.EDIT_ROW,B);return this},renderOperations:function(){var B=this;if(this.allowDelete!==false){return A("<a href='#' class='aui-button' />").addClass(this.classNames.DELETE).text("Delete").click(function(C){C.preventDefault();B.destroy()})}},destroy:function(){if(this.deleteConfirmation){var B=AJS.popup(400,200,"delete-entity-"+this.model.get("id"));B.element.html(this.deleteConfirmation(this.model.toJSON()));B.show();B.element.find(".cancel").click(function(){B.hide()});B.element.find("form").submit(_.bind(function(C){B.hide();this.model.destroy();C.preventDefault()},this))}else{this.model.destroy()}},render:function(){var B=this,D=this.model.toJSON(),E=A("<td class='aui-restfultable-operations' />").append(this.renderOperations({},D)),C=A("<td class='aui-restfultable-throbber' />");this.$el.removeClass(this.classNames.DISABLED+" "+this.classNames.FOCUSED+" "+this.classNames.LOADING+" "+this.classNames.EDIT_ROW).addClass(this.classNames.READ_ONLY).empty();if(this.allowReorder){A('<td  class="'+this.classNames.ORDER+'" />').append(this.renderDragHandle()).appendTo(B.$el)}this.$el.attr("data-id",this.model.id);A.each(this.columns,function(G,I){var J,L=A("<td />"),K=D[I.id],M=I.fieldName||I.id,F=[{name:M,value:K,allowEdit:I.allowEdit},D,B.model];if(K){B.$el.attr("data-"+I.id,K)}if(I.readView){J=new I.readView({model:B.model}).render(F[0])}else{J=B.defaultColumnRenderer.apply(B,F)}if(B.allowEdit!==false&&I.allowEdit!==false){var H=A("<span />").addClass(B.classNames.EDITABLE).append('<span class="aui-icon icon-edit-sml" />').append(J).attr("data-field-name",M);L=A("<td />").append(H).appendTo(B.$el);if(!J||A.trim(J)==""){L.addClass(B.classNames.NO_VALUE);H.html(A("<em />").text(this.emptyText||"Enter value"))}}else{L.append(J)}if(I.styleClass){L.addClass(I.styleClass)}L.appendTo(B.$el)});this.$el.append(E).append(C).addClass(this.classNames.ROW+" "+this.classNames.READ_ONLY);this.trigger(this._events.RENDER,this.$el,D);this.$el.trigger(this._events.CONTENT_REFRESHED,[this.$el]);return this}})})(AJS.$);
