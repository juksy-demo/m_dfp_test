if(function(){var e,t,n,a,i,o,r,c,l,d;t=window.device,e={},window.device=e,a=window.document.documentElement,d=window.navigator.userAgent.toLowerCase(),e.ios=function(){return e.iphone()||e.ipod()||e.ipad()},e.iphone=function(){return!e.windows()&&i("iphone")},e.ipod=function(){return i("ipod")},e.ipad=function(){return i("ipad")},e.android=function(){return!e.windows()&&i("android")},e.androidPhone=function(){return e.android()&&i("mobile")},e.androidTablet=function(){return e.android()&&!i("mobile")},e.blackberry=function(){return i("blackberry")||i("bb10")||i("rim")},e.blackberryPhone=function(){return e.blackberry()&&!i("tablet")},e.blackberryTablet=function(){return e.blackberry()&&i("tablet")},e.windows=function(){return i("windows")},e.windowsPhone=function(){return e.windows()&&i("phone")},e.windowsTablet=function(){return e.windows()&&i("touch")&&!e.windowsPhone()},e.fxos=function(){return(i("(mobile;")||i("(tablet;"))&&i("; rv:")},e.fxosPhone=function(){return e.fxos()&&i("mobile")},e.fxosTablet=function(){return e.fxos()&&i("tablet")},e.meego=function(){return i("meego")},e.cordova=function(){return window.cordova&&"file:"===location.protocol},e.nodeWebkit=function(){return"object"==typeof window.process},e.mobile=function(){return e.androidPhone()||e.iphone()||e.ipod()||e.windowsPhone()||e.blackberryPhone()||e.fxosPhone()||e.meego()},e.tablet=function(){return e.ipad()||e.androidTablet()||e.blackberryTablet()||e.windowsTablet()||e.fxosTablet()},e.desktop=function(){return!e.tablet()&&!e.mobile()},e.television=function(){var e;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],e=0;e<television.length;){if(i(television[e]))return!0;e++}return!1},e.portrait=function(){return window.innerHeight/window.innerWidth>1},e.landscape=function(){return window.innerHeight/window.innerWidth<1},e.noConflict=function(){return window.device=t,this},i=function(e){return-1!==d.indexOf(e)},r=function(e){var t;return t=new RegExp(e,"i"),a.className.match(t)},n=function(e){var t=null;r(e)||(t=a.className.replace(/^\s+|\s+$/g,""),a.className=t+" "+e)},l=function(e){r(e)&&(a.className=a.className.replace(" "+e,""))},e.ios()?e.ipad()?n("ios ipad tablet"):e.iphone()?n("ios iphone mobile"):e.ipod()&&n("ios ipod mobile"):e.android()?n(e.androidTablet()?"android tablet":"android mobile"):e.blackberry()?n(e.blackberryTablet()?"blackberry tablet":"blackberry mobile"):e.windows()?n(e.windowsTablet()?"windows tablet":e.windowsPhone()?"windows mobile":"desktop"):e.fxos()?n(e.fxosTablet()?"fxos tablet":"fxos mobile"):e.meego()?n("meego mobile"):e.nodeWebkit()?n("node-webkit"):e.television()?n("television"):e.desktop()&&n("desktop"),e.cordova()&&n("cordova"),o=function(){e.landscape()?(l("portrait"),n("landscape")):(l("landscape"),n("portrait"))},c=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(c,o,!1):window.attachEvent?window.attachEvent(c,o):window[c]=o,o(),window.device=e}(),"undefined"==typeof SD||!SD)var SD={};if(function(){SD.util=SD.util||{},SDUTIL=SD.util,Array.prototype.indexOf||!function(){Array.prototype.indexOf=function(e){var t=this.length>>>0,n=Number(arguments[1])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=t);t>n;n++)if(n in this&&this[n]===e)return n;return-1}}(),String.prototype.trim||!function(){var e=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(e,"")}}(),Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)||"[object HTMLCollection]"===Object.prototype.toString.call(e)},SDUTIL.getUrlArgument=function(e,t){if(t||(t=location.href),t=decodeURIComponent(t),e.indexOf("[]")>=0){var n=[],a=t.split("?");if(!a[1])return n;a=a[1].split("&");for(var i=0,o=a.length;o>i;i++)a[i].indexOf(e+"=")>=0&&(a[i]=a[i].replace(e+"=",""),""!==a[i]&&n.push(a[i]));return n}e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var r=new RegExp("[\\?&]"+e+"=([^&#]*)");return r.exec(t)?r.exec(t)[1]:""},SDUTIL.indexInParent=function(e){for(var t=e.parentNode.childNodes,n=0,a=0;a<t.length;a++){if(t[a]==e)return n;1==t[a].nodeType&&n++}return-1},"undefined"!=typeof device&&device&&(SDUTIL.device={desktop:device.desktop(),mobile:device.mobile(),tablet:device.tablet(),ios:device.ios(),android:device.android(),androidTablet:device.androidTablet(),ipad:device.ipad()}),SDUTIL.Dom={_reClassNameCache:{},_getClassRegEx:function(e){var t=SDUTIL.Dom._reClassNameCache[e];return t||(t=new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)"),SDUTIL.Dom._reClassNameCache[e]=t),t},hasClass:function(e,t){if("undefined"==typeof e||null===e||!RegExp)return!1;var n=new RegExp("(^|\\s)"+t+"(\\s|$)");return"string"==typeof e?n.test(e):"object"==typeof e&&e.className?n.test(e.className):!1},getElementsByClassName:function(e,t,n,a){t=t||"*",n=n||document;var i,o=[],r=n.getElementsByTagName(t),c=SDUTIL.Dom._getClassRegEx(e),l=r.length;for(i=0;l>i;i++)c.test(r[i].className)&&(o[o.length]=r[i],a&&a.call(r[i],r[i]));return o},insertAfter:function(e,t){t.parentNode.insertBefore(e,t.nextSibling)},getChildNodes:function(e){for(var t=[],n=e.childNodes,a=0;a<n.length;a++){var i=n[a];i.nodeType===Node.ELEMENT_NODE&&t.push(i)}return t},handleOnLoad:function(e,t){"undefined"!=typeof e.onload?e.onload=t:e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||t()}},addEventListener:function(e,t,n){if(e.addEventListener)return e.addEventListener(t,n,!1);if("load"!==t||"SCRIPT"!==e.nodeName)return e.attachEvent("on"+t,n);var a=e.id;a||(a=(new Date).getTime()+Math.floor(10*Math.random()+1),e.id=a);var i=setInterval(function(){document.getElementById(a)&&(n(),clearInterval(i))},300)}},SDUTIL.createEl={get:function(e){var t=e.tag||"";if(!t)return console.error("required set tag");var n,a=e.attr||"",i=e.html||"",o=e.handleOnLoad||"",r=e.handleError||"",c=e.dom||"",l=e.id||"",d=e.className||"",s=document.createElement(t);for(n in a)s.setAttribute(n,a[n]);return i&&(s.innerHTML=i),o&&SDUTIL.Dom.handleOnLoad(s,o),r&&(s.onerror=r),l&&s.setAttribute("id",l),d&&s.setAttribute("class",d),c?this.append(s,c):this.append(s),s},append:function(e,t){if(t)t.appendChild(e);else{var n=document.getElementsByTagName("head")[0]||document.body;n.appendChild(e)}},remove:function(e){setTimeout(function(){e.parentNode.removeChild(e),e=null},0)},js:function(e){var t=e.url||"",n=e.attr||{};return n?n.type="text/javascript":n={type:"text/javascript"},t&&(n.src=t),this.get({tag:"script",attr:n,handleOnLoad:e.handleOnLoad,handleError:e.handleError,dom:e.dom,id:e.id,className:e.className})},css:function(e){return e.media||(e.media="all"),this.get({tag:"link",attr:{href:e.url,rel:"stylesheet",type:"text/css",media:e.media}})}},SDUTIL.timestamp=function(e){return e||(e=100),(new Date).getTime()%e+1},SDUTIL.cookie={setCookie:function(e,t,n,a){var i;if(a)i="expires="+a.toUTCString();else{var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),i="expires="+o.toUTCString()}document.cookie=e+"="+t+"; "+i},getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var i=n[a];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}},SDUTIL.https=function(){return"http:"!==location.protocol},SDUTIL.geo=SDUTIL.geo||{},SDUTIL.geo.callbackCache=SDUTIL.geo.callbackCache||{arr:[],country:"",exe:!1},SDUTIL.geo.callback=function(e){SDUTIL.geo.callbackCache.exe=!0,SDUTIL.geo.callbackCache.country=e.toLocaleLowerCase();for(var t=0,n=SDUTIL.geo.callbackCache.arr.length;n>t;t++)SDUTIL.geo.callbackCache.arr[t]()},SDUTIL.geo.run=function(e){if(SDUTIL.geo.callbackCache.exe===!0)e();else{SDUTIL.geo.callbackCache.arr.push(e);var t=document.getElementById("sitemaji_geo");t||SDUTIL.createEl.js({url:"//ssl.sitemaji.com/geo/?callback=SDUTIL.geo.callback",id:"sitemaji_geo"})}},SDUTIL.ckip=SDUTIL.ckip||{},SDUTIL.ckip.callbackCache=SDUTIL.ckip.callbackCache||{arr:[],kws:"",exe:!1},SDUTIL.ckip.callback=function(e){SDUTIL.ckip.callbackCache.exe=!0,SDUTIL.ckip.callbackCache.kws=e;for(var t=0,n=SDUTIL.ckip.callbackCache.arr.length;n>t;t++)SDUTIL.ckip.callbackCache.arr[t](e)},SDUTIL.ckip.run=function(e,t,n){var a="";if(n&&""!==n)if(-1!=n.indexOf("replace")){a=document.title.toString().trim(),n=n.split("||");for(var i=0,o=n.length;o>i;i++)a=a.replace(n[i],"")}else a=document.title.toString().split(n)[0].trim();else a=document.title.toString().split("-")[0].trim();if(""!==t&&(a+="--content--"+t),a=encodeURIComponent(a.substr(0,170)),SDUTIL.ckip.callbackCache.exe===!0)e(SDUTIL.ckip.callbackCache.kws);else{SDUTIL.ckip.callbackCache.arr.push(e);var r=document.getElementById("sitemaji_ckip");r||SDUTIL.createEl.js({url:"http://ysm.sitemaji.com/ckip.php?c="+a+"&callback=SDUTIL.ckip.callback",id:"sitemaji_ckip"})}},SDUTIL.match=SDUTIL.match||{},SDUTIL.match.callback=SDUTIL.match.callback||{randomId:0},SDUTIL.match.run=function(e,t){var n=SDUTIL.timestamp(),a=SDUTIL.match.callback.randomId,i=document.getElementById("sitemaji_match")||"";if(a=n===a?n+1:n,SDUTIL.match.callback.randomId=a,a="rand_"+a,!i)for(var o=document.getElementsByTagName("meta"),r=0,c=o.length;c>r;r++)"article:section"===o[r].getAttribute("property")&&(i=o[r]);i=i.getAttribute("content"),"true"===t?SDUTIL.geo.run(function(){"tw"===SDUTIL.geo.callbackCache.country?SDUTIL.createEl.js({url:"//rd.sitemaji.com/ymatch.php?q="+i+"&callback=SDUTIL.match.callback."+a}):SDUTIL.createEl.js({url:"//rd.sitemaji.com/ymatch.php?q="+i+"&callback=SDUTIL.match.callback."+a+"&e=1"})}):SDUTIL.createEl.js({url:"//rd.sitemaji.com/ymatch.php?q="+i+"&callback=SDUTIL.match.callback."+a}),SDUTIL.match.callback[a]=function(t){e(t)}},SDUTIL.createAdApi=SDUTIL.createAdApi||{},SDUTIL.createAdApi.ypaCallbackCache=SDUTIL.createAdApi.ypaCallbackCache||{arr:[],exe:!1},SDUTIL.createAdApi.ypa=function(e){if(SDUTIL.createAdApi.ypaCallbackCache.exe===!0)e();else{SDUTIL.createAdApi.ypaCallbackCache.arr.push(e);var t=document.getElementById("sitemaji_ypa_api");t||SDUTIL.createEl.js({url:"https://s.yimg.com/uv/dm/scripts/syndication.js",handleOnLoad:function(){SDUTIL.createAdApi.ypaCallbackCache.exe=!0;for(var e=0,t=SDUTIL.createAdApi.ypaCallbackCache.arr.length;t>e;e++)SDUTIL.createAdApi.ypaCallbackCache.arr[e]()},id:"sitemaji_ypa_api"})}},SDUTIL.createAdApi.ucfunnelCallbackCache=SDUTIL.createAdApi.ucfunnelCallbackCache||{arr:[],exe:!1},SDUTIL.createAdApi.ucfunnel=function(e){if(SDUTIL.createAdApi.ucfunnelCallbackCache.exe===!0)e();else{SDUTIL.createAdApi.ucfunnelCallbackCache.arr.push(e);var t=document.getElementById("sitemaji_ucfunnel_api");t||SDUTIL.createEl.js({url:"//agent.aralego.com/sdk",handleOnLoad:function(){SDUTIL.createAdApi.ucfunnelCallbackCache.exe=!0;for(var e=0,t=SDUTIL.createAdApi.ucfunnelCallbackCache.arr.length;t>e;e++)SDUTIL.createAdApi.ucfunnelCallbackCache.arr[e]()},id:"sitemaji_ucfunnel_api"})}},SDUTIL.createAdApi["native"]=function(){"undefined"!=typeof sectionCode&&sectionCode?sectionCode=sectionCode:sectionCode=[],SDUTIL.createEl.js({url:"https://s.yimg.com/av/gemini/ga/gemini.js",className:"sitemaji_native_api"})},SDUTIL.longKeyWord={get:function(e,t){function n(e){t&&t(e)}var a="http://ysm.sitemaji.com/cw.php?n="+e+"&callback=SDUTIL.longKeyWord.response";SDUTIL.createEl.js({url:a}),this.response=n}},SDUTIL.createIframe=function(e){var t=document.createElement("iframe");return t.framespacing="0",t.frameborder="no",t.frameBorder="no",t.scrolling="no",e.width&&(t.width=e.width),e.height&&(t.height=e.height),e.css&&(t.style.cssText=e.css),e.src&&(t.src=e.src),e.className&&(t.className=e.className),e.id&&(t.id=e.id),e.dom&&e.dom.appendChild(t),t},SDUTIL.createIframeContent=function(e,t){e=e.contentWindow||e.contentDocument,e=e.document,e.open(),e.write(t),e.close()},function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],a=n.length,i=window.console=window.console||{};a--;)e=n[a],i[e]||(i[e]=t)}()}(),"undefined"==typeof SD||!SD)var SD={};!function(){SD.adModNative=SD.adModNative||{},SD.adModNative.fixImg=function(e){function t(){for(var e=0,t=l.length;t>e;e++){var i=l[e].getElementsByTagName(n)[a];i.style.backgroundSize="100% 100%",o&&o({img:i,nAd:l[e],nAds:l,count:e})}r&&r()}var n=e.imgDomString||"",a=e.imgDomPosition||0,i=e.adParent||"",o=e.adInFn||"",r=e.adOutFn||"",c=e.adCount||"",l="";if(n){var d=setInterval(function(){l=i?SDUTIL.Dom.getElementsByClassName("gemini-loaded","",i):SDUTIL.Dom.getElementsByClassName("gemini-loaded"),l.length===c&&(t(),clearInterval(d))},600);setTimeout(function(){clearInterval(d)},1e4)}},SD.adModNative.nativeBannerGen=function(e){function t(){var e=document.getElementsByTagName("html")[0],t=document.getElementsByTagName("body")[0],n='<div style="margin-top: 700px;" class="template"><a href="javascript: void(0);"><img width="120" height="45" alt="img" style="float: left; margin-right: 10px;"><h4 style="font-family: inherit; font-weight: bold; line-height: 20px; color: inherit; text-rendering: optimizelegibility; font-size: 17.5px;">title</h4></a></div>';e.style.height="100%",t.style.height="100%",t.style.backgroundColor="#fff",t.style.border="1px solid #ccc",t.style.boxSizing="border-box",t.innerHTML+=n}SDUTIL.createAdApi["native"](),t();var n=e.config,a=e.scriptSrc,i=SDUTIL.Dom.getElementsByClassName("template")[0],o=document.getElementsByTagName("script"),r="";if(a)for(var c=0,l=o.length;l>c;c++)o[c].src.indexOf("native/"+a+".js")>=0&&(r=SDUTIL.getUrlArgument("s",o[c].src));else r=SDUTIL.getUrlArgument("s");r?sectionCode.push(n[r]):sectionCode.push(n["default"]),"bottom_bottom_bottom_2"===r?SD.adModNative.fixImg({imgDomString:"img",adCount:2,adOutFn:function(){i.style.display="none"}}):"bottom_bottom_bottom_3"===r?SD.adModNative.fixImg({imgDomString:"img",adCount:3,adInFn:function(e){e.img.style.backgroundSize="80% 100%",e.img.style.backgroundColor="#fff"},adOutFn:function(){i.style.display="none"}}):"ck101_passback"===a&&"middle"===r?SD.adModNative.fixImg({imgDomString:"img",adCount:1,adInFn:function(e){e.img.style.backgroundSize="contain",e.img.style.backgroundColor="#fff"},adOutFn:function(){i.style.display="none"}}):SD.adModNative.fixImg({imgDomString:"img",adCount:1,adOutFn:function(){i.style.display="none"}})}}(),function(){function e(){"true"!=a&&(n="true"),i++;var e=document.getElementsByClassName("recommend")[0].getElementsByTagName("ul")[0].getElementsByTagName("li").length;if(1>=i&&e>4){var o=document.getElementsByClassName("recommend")[0].getElementsByTagName("ul")[0],r=o.childNodes.length;o.removeChild(o.childNodes[r-2]);var c=document.querySelectorAll(".gemini-loaded")[0],l=document.getElementsByClassName("recommend")[0].getElementsByTagName("ul")[0],d=document.querySelectorAll(".recommend")[0].getElementsByTagName("img")[0],s=document.querySelectorAll(".recommend")[0].getElementsByTagName("h4")[0],m=(l.childNodes.length,d.width,d.height,s.style.cssText),u=Math.floor(8*Math.random()+1);m=m.replace(/\D+/,""),m=m.replace(/\s/,""),m=m.replace(/\D+/,""),c.getElementsByTagName("img")[0].style.width=t(d).width,c.getElementsByTagName("img")[0].style.height=t(d).height,c.getElementsByTagName("h4")[0].style.padding="5px",c.getElementsByTagName("h4")[0].style.minHeight=m+"px",c.childNodes[4].style.bottom="0px",c.childNodes[4].style.right="0px",c.style.display="block",l.insertBefore(c,l.childNodes[u])}}function t(e){return e.currentStyle||window.getComputedStyle(e)}SDUTIL.createAdApi["native"]();var n="false",a="false",i=0;SDUTIL.device.mobile===!0&&sectionCode.push("a8878b8d-23d4-45af-bf1f-95f88e0d2617");var o=setInterval(function(){var t=document.querySelectorAll(".gemini-loaded").length,i=document.querySelectorAll(".gemini-loaded")[0];document.querySelectorAll(".recommend")[0].getElementsByTagName("img")[0];t&&("true"!=n&&(i.style.display="none"),a="true",e(),clearInterval(o))},1e3);setTimeout(function(){clearInterval(o)},1e4),window.addEventListener("load",e)}();