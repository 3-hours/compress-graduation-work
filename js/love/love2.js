/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2014 Rico Sta. Cruz
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],b)}else{if(typeof exports==="object"){module.exports=b(require("jquery"))}else{b(a.jQuery)}}}(this,function(e){e.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var a=document.createElement("div");var q={};function m(v){if(v in a.style){return v}var r=["Moz","Webkit","O","ms"];var s=v.charAt(0).toUpperCase()+v.substr(1);for(var u=0;u<r.length;++u){var t=r[u]+s;if(t in a.style){return t}}}function k(){a.style[q.transform]="";a.style[q.transform]="rotateY(90deg)";return a.style[q.transform]!==""}var n=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=m("transition");q.transitionDelay=m("transitionDelay");q.transform=m("transform");q.transformOrigin=m("transformOrigin");q.filter=m("Filter");q.transform3d=k();var b={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var j=q.transitionEnd=b[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof e.support[p]==="undefined"){e.support[p]=q[p]}}a=null;e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};e.cssHooks["transit:transform"]={get:function(r){return e(r).data("transform")||new d()},set:function(s,r){var t=r;if(!(t instanceof d)){t=new d(t)}if(q.transform==="WebkitTransform"&&!n){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}e(s).data("transform",t)}};e.cssHooks.transform={set:e.cssHooks["transit:transform"].set};e.cssHooks.filter={get:function(r){return r.style[q.filter]},set:function(r,s){r.style[q.filter]=s}};if(e.fn.jquery<"1.8"){e.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};e.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){console.log(r,s);r.style[q.transition]=s}}}i("scale");i("scaleX");i("scaleY");i("translate");i("rotate");i("rotateX");i("rotateY");i("rotate3d");i("perspective");i("skewX");i("skewY");i("x",true);i("y",true);function d(r){if(typeof r==="string"){this.parse(r)}return this}d.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);d.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function c(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{s.each(function(){t.call(this)})}}}function h(s){var r=[];e.each(s,function(t){t=e.camelCase(t);t=e.transit.propertyMap[t]||e.cssProps[t]||t;t=l(t);if(q[t]){t=l(q[t])}if(e.inArray(t,r)===-1){r.push(t)}});return r}function g(s,x,u,r){var t=h(s);if(e.cssEase[u]){u=e.cssEase[u]}var v=""+f(x)+" "+u;if(parseInt(r,10)>0){v+=" "+f(r)}var w=[];e.each(t,function(z,y){w.push(y+" "+v)});return w.join(", ")}e.fn.transition=e.fn.transit=function(r,x,s,E){var F=this;var z=0;var A=true;var t=e.extend(true,{},r);if(typeof x==="function"){E=x;x=undefined}if(typeof x==="object"){s=x.easing;z=x.delay||0;A=typeof x.queue==="undefined"?true:x.queue;E=x.complete;x=x.duration}if(typeof s==="function"){E=s;s=undefined}if(typeof t.easing!=="undefined"){s=t.easing;delete t.easing}if(typeof t.duration!=="undefined"){x=t.duration;delete t.duration}if(typeof t.complete!=="undefined"){E=t.complete;delete t.complete}if(typeof t.queue!=="undefined"){A=t.queue;delete t.queue}if(typeof t.delay!=="undefined"){z=t.delay;delete t.delay}if(typeof x==="undefined"){x=e.fx.speeds._default}if(typeof s==="undefined"){s=e.cssEase._default}x=f(x);var C=g(t,x,s,z);var D=e.transit.enabled&&q.transition;var y=D?(parseInt(x,10)+parseInt(z,10)):0;if(y===0){var B=function(G){F.css(t);if(E){E.apply(F)}if(G){G()}};c(F,A,B);return F}var u={};var w=function(I){var H=false;var G=function(){if(H){F.unbind(j,G)}if(y>0){F.each(function(){this.style[q.transition]=(u[this]||null)})}if(typeof E==="function"){E.apply(F)}if(typeof I==="function"){I()}};if((y>0)&&(j)&&(e.transit.useTransitionEnd)){H=true;F.bind(j,G)}else{window.setTimeout(G,y)}F.each(function(){if(y>0){this.style[q.transition]=C}e(this).css(t)})};var v=function(G){this.offsetWidth=this.offsetWidth;w(G)};c(F,A,v);return this};function i(s,r){if(!r){e.cssNumber[s]=true}e.transit.propertyMap[s]=q.transform;e.cssHooks[s]={get:function(v){var u=e(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=e(v).css("transit:transform");u.setFromString(s,w);e(v).css({"transit:transform":u})}}}function l(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function f(s){var r=s;if(typeof r==="string"&&(!r.match(/^[\-0-9\.]+/))){r=e.fx.speeds[r]||e.fx.speeds._default}return o(r,"ms")}e.transit.getTransitionValue=g;return e}));