window.Modernizr=function(t,e,i){function n(t){b.cssText=t}function s(t,e){return n(C.join(t+";")+(e||""))}function o(t,e){return typeof t===e}function a(t,e){return!!~(""+t).indexOf(e)}function r(t,e){for(var n in t){var s=t[n];if(!a(s,"-")&&b[s]!==i)return"pfx"==e?s:!0}return!1}function l(t,e,n){for(var s in t){var a=e[t[s]];if(a!==i)return n===!1?t[s]:o(a,"function")?a.bind(n||e):a}return!1}function c(t,e,i){var n=t.charAt(0).toUpperCase()+t.slice(1),s=(t+" "+T.join(n+" ")+n).split(" ");return o(e,"string")||o(e,"undefined")?r(s,e):(s=(t+" "+D.join(n+" ")+n).split(" "),l(s,e,i))}function h(){f.input=function(i){for(var n=0,s=i.length;s>n;n++)P[i[n]]=i[n]in _;return P.list&&(P.list=!!e.createElement("datalist")&&!!t.HTMLDataListElement),P}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(t){for(var n,s,o,a=0,r=t.length;r>a;a++)_.setAttribute("type",s=t[a]),n="text"!==_.type,n&&(_.value=w,_.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&_.style.WebkitAppearance!==i?(g.appendChild(_),o=e.defaultView,n=o.getComputedStyle&&"textfield"!==o.getComputedStyle(_,null).WebkitAppearance&&0!==_.offsetHeight,g.removeChild(_)):/^(search|tel)$/.test(s)||(n=/^(url|email)$/.test(s)?_.checkValidity&&_.checkValidity()===!1:_.value!=w)),E[t[a]]=!!n;return E}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var u,d,p="2.6.2",f={},m=!0,g=e.documentElement,v="modernizr",y=e.createElement(v),b=y.style,_=e.createElement("input"),w=":)",x={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",T=k.split(" "),D=k.toLowerCase().split(" "),A={svg:"http://www.w3.org/2000/svg"},S={},E={},P={},I=[],M=I.slice,N=function(t,i,n,s){var o,a,r,l,c=e.createElement("div"),h=e.body,u=h||e.createElement("body");if(parseInt(n,10))for(;n--;)r=e.createElement("div"),r.id=s?s[n]:v+(n+1),c.appendChild(r);return o=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),c.id=v,(h?c:u).innerHTML+=o,u.appendChild(c),h||(u.style.background="",u.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(u)),a=i(c,t),h?c.parentNode.removeChild(c):(u.parentNode.removeChild(u),g.style.overflow=l),!!a},z=function(e){var i=t.matchMedia||t.msMatchMedia;if(i)return i(e).matches;var n;return N("@media "+e+" { #"+v+" { position: absolute; } }",function(e){n="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),n},O=function(){function t(t,s){s=s||e.createElement(n[t]||"div"),t="on"+t;var a=t in s;return a||(s.setAttribute||(s=e.createElement("div")),s.setAttribute&&s.removeAttribute&&(s.setAttribute(t,""),a=o(s[t],"function"),o(s[t],"undefined")||(s[t]=i),s.removeAttribute(t))),s=null,a}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),H={}.hasOwnProperty;d=o(H,"undefined")||o(H.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return H.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var i=M.call(arguments,1),n=function(){if(this instanceof n){var s=function(){};s.prototype=e.prototype;var o=new s,a=e.apply(o,i.concat(M.call(arguments)));return Object(a)===a?a:o}return e.apply(t,i.concat(M.call(arguments)))};return n}),S.flexbox=function(){return c("flexWrap")},S.canvas=function(){var t=e.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")},S.canvastext=function(){return!!f.canvas&&!!o(e.createElement("canvas").getContext("2d").fillText,"function")},S.webgl=function(){return!!t.WebGLRenderingContext},S.touch=function(){var i;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?i=!0:N(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){i=9===t.offsetTop}),i},S.geolocation=function(){return"geolocation"in navigator},S.postmessage=function(){return!!t.postMessage},S.websqldatabase=function(){return!!t.openDatabase},S.indexedDB=function(){return!!c("indexedDB",t)},S.hashchange=function(){return O("hashchange",t)&&(e.documentMode===i||e.documentMode>7)},S.history=function(){return!!t.history&&!!history.pushState},S.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},S.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},S.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},S.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},S.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},S.backgroundsize=function(){return c("backgroundSize")},S.borderimage=function(){return c("borderImage")},S.borderradius=function(){return c("borderRadius")},S.boxshadow=function(){return c("boxShadow")},S.textshadow=function(){return""===e.createElement("div").style.textShadow},S.opacity=function(){return s("opacity:.55"),/^0.55$/.test(b.opacity)},S.cssanimations=function(){return c("animationName")},S.csscolumns=function(){return c("columnCount")},S.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return n((t+"-webkit- ".split(" ").join(e+t)+C.join(i+t)).slice(0,-t.length)),a(b.backgroundImage,"gradient")},S.cssreflections=function(){return c("boxReflect")},S.csstransforms=function(){return!!c("transform")},S.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in g.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},S.csstransitions=function(){return c("transition")},S.fontface=function(){var t;return N('@font-face {font-family:"font";src:url("https://")}',function(i,n){var s=e.getElementById("smodernizr"),o=s.sheet||s.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";t=/src/i.test(a)&&0===a.indexOf(n.split(" ")[0])}),t},S.generatedcontent=function(){var t;return N(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},S.video=function(){var t=e.createElement("video"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),i.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),i.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return i},S.audio=function(){var t=e.createElement("audio"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),i.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),i.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),i.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return i},S.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},S.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},S.webworkers=function(){return!!t.Worker},S.applicationcache=function(){return!!t.applicationCache},S.svg=function(){return!!e.createElementNS&&!!e.createElementNS(A.svg,"svg").createSVGRect},S.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==A.svg},S.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(x.call(e.createElementNS(A.svg,"animate")))},S.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(x.call(e.createElementNS(A.svg,"clipPath")))};for(var j in S)d(S,j)&&(u=j.toLowerCase(),f[u]=S[j](),I.push((f[u]?"":"no-")+u));return f.input||h(),f.addTest=function(t,e){if("object"==typeof t)for(var n in t)d(t,n)&&f.addTest(n,t[n]);else{if(t=t.toLowerCase(),f[t]!==i)return f;e="function"==typeof e?e():e,"undefined"!=typeof m&&m&&(g.className+=" "+(e?"":"no-")+t),f[t]=e}return f},n(""),y=_=null,function(t,e){function i(t,e){var i=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return i.innerHTML="x<style>"+e+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function s(t){var e=g[t[f]];return e||(e={},m++,t[f]=m,g[m]=e),e}function o(t,i,n){if(i||(i=e),h)return i.createElement(t);n||(n=s(i));var o;return o=n.cache[t]?n.cache[t].cloneNode():p.test(t)?(n.cache[t]=n.createElem(t)).cloneNode():n.createElem(t),o.canHaveChildren&&!d.test(t)?n.frag.appendChild(o):o}function a(t,i){if(t||(t=e),h)return t.createDocumentFragment();i=i||s(t);for(var o=i.frag.cloneNode(),a=0,r=n(),l=r.length;l>a;a++)o.createElement(r[a]);return o}function r(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(i){return v.shivMethods?o(i,t,e):e.createElem(i)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function l(t){t||(t=e);var n=s(t);return v.shivCSS&&!c&&!n.hasCSS&&(n.hasCSS=!!i(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),h||r(t,n),t}var c,h,u=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",m=0,g={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,h=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(i){c=!0,h=!0}}();var v={elements:u.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:u.shivCSS!==!1,supportsUnknownElements:h,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:a};t.html5=v,l(e)}(this,e),f._version=p,f._prefixes=C,f._domPrefixes=D,f._cssomPrefixes=T,f.mq=z,f.hasEvent=O,f.testProp=function(t){return r([t])},f.testAllProps=c,f.testStyles=N,f.prefixed=function(t,e,i){return e?c(t,e,i):c(t,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+I.join(" "):""),f}(this,this.document),function(t,e,i){function n(t){return"[object Function]"==g.call(t)}function s(t){return"string"==typeof t}function o(){}function a(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function r(){var t=v.shift();y=1,t?t.t?f(function(){("c"==t.t?d.injectCss:d.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),r()):y=0}function l(t,i,n,s,o,l,c){function h(e){if(!p&&a(u.readyState)&&(b.r=p=1,!y&&r(),u.onload=u.onreadystatechange=null,e)){"img"!=t&&f(function(){w.removeChild(u)},50);for(var n in D[i])D[i].hasOwnProperty(n)&&D[i][n].onload()}}var c=c||d.errorTimeout,u=e.createElement(t),p=0,g=0,b={t:n,s:i,e:o,a:l,x:c};1===D[i]&&(g=1,D[i]=[]),"object"==t?u.data=i:(u.src=i,u.type=t),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){h.call(this,g)},v.splice(s,0,b),"img"!=t&&(g||2===D[i]?(w.insertBefore(u,_?null:m),f(h,c)):D[i].push(u))}function c(t,e,i,n,o){return y=0,e=e||"j",s(t)?l("c"==e?C:x,t,e,this.i++,i,n,o):(v.splice(this.i++,0,t),1==v.length&&r()),this}function h(){var t=d;return t.loader={load:c,i:0},t}var u,d,p=e.documentElement,f=t.setTimeout,m=e.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,_=b&&!!e.createRange().compareNode,w=_?p:m.parentNode,p=t.opera&&"[object Opera]"==g.call(t.opera),p=!!e.attachEvent&&!p,x=b?"object":p?"script":"img",C=p?"script":x,k=Array.isArray||function(t){return"[object Array]"==g.call(t)},T=[],D={},A={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};d=function(t){function e(t){var e,i,n,t=t.split("!"),s=T.length,o=t.pop(),a=t.length,o={url:o,origUrl:o,prefixes:t};for(i=0;a>i;i++)n=t[i].split("="),(e=A[n.shift()])&&(o=e(o,n));for(i=0;s>i;i++)o=T[i](o);return o}function a(t,s,o,a,r){var l=e(t),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(s&&(s=n(s)?s:s[t]||s[a]||s[t.split("/").pop().split("?")[0]]),l.instead?l.instead(t,s,o,a,r):(D[l.url]?l.noexec=!0:D[l.url]=1,o.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":i,l.noexec,l.attrs,l.timeout),(n(s)||n(c))&&o.load(function(){h(),s&&s(l.origUrl,r,a),c&&c(l.origUrl,r,a),D[l.url]=2})))}function r(t,e){function i(t,i){if(t){if(s(t))i||(u=function(){var t=[].slice.call(arguments);d.apply(this,t),p()}),a(t,u,e,0,c);else if(Object(t)===t)for(l in r=function(){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}(),t)t.hasOwnProperty(l)&&(!i&&!--r&&(n(u)?u=function(){var t=[].slice.call(arguments);d.apply(this,t),p()}:u[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),p()}}(d[l])),a(t[l],u,e,l,c))}else!i&&p()}var r,l,c=!!t.test,h=t.load||t.both,u=t.callback||o,d=u,p=t.complete||o;i(c?t.yep:t.nope,!!h),h&&i(h)}var l,c,u=this.yepnope.loader;if(s(t))a(t,0,u,0);else if(k(t))for(l=0;l<t.length;l++)c=t[l],s(c)?a(c,0,u,0):k(c)?d(c):Object(c)===c&&r(c,u);else Object(t)===t&&r(t,u)},d.addPrefix=function(t,e){A[t]=e},d.addFilter=function(t){T.push(t)},d.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",u=function(){e.removeEventListener("DOMContentLoaded",u,0),e.readyState="complete"},0)),t.yepnope=h(),t.yepnope.executeStack=r,t.yepnope.injectJs=function(t,i,n,s,l,c){var h,u,p=e.createElement("script"),s=s||d.errorTimeout;p.src=t;for(u in n)p.setAttribute(u,n[u]);i=c?r:i||o,p.onreadystatechange=p.onload=function(){!h&&a(p.readyState)&&(h=1,i(),p.onload=p.onreadystatechange=null)},f(function(){h||(h=1,i(1))},s),l?p.onload():m.parentNode.insertBefore(p,m)},t.yepnope.injectCss=function(t,i,n,s,a,l){var c,s=e.createElement("link"),i=l?r:i||o;s.href=t,s.rel="stylesheet",s.type="text/css";for(c in n)s.setAttribute(c,n[c]);a||(m.parentNode.insertBefore(s,m),f(i,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};