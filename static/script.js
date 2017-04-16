if(typeof Object.create!=="function"){Object.create=function(b){var a=function(){};a.prototype=b;return new a()}}if(!Array.indexOf){Array.prototype.indexOf=function(b){for(var a=0;a<this.length;a++){if(this[a]===b){return a}}return -1}}jQuery.easing.easeInOutQuad=function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i+b}return -c/2*((--i)*(i-2)-1)+b};jQuery.easing.easeOutQuad=function(j,i,b,c,d){return -c*(i/=d)*(i-2)+b};var current=0;var locked=true;var WIDTH=1576;var DURATION=2000;var DUR=400;var RATE=3;jQuery(function(h){if(/msie [6-8]/.test(navigator.userAgent.toLowerCase())){h.fn.extend({fadeIn:function(){var F=h(this),E=arguments;if(F.attr("id")!="lightbox"){F.show(0,E[E.length-1])}else{F.css({display:"block",opacity:0}).animate({opacity:1},E)}},fadeOut:function(){var F=h(this),E=arguments;F.hide(0,E[E.length-1])}})}h.fn.extend({moveBg:function(G,F,E){h(this).animate({backgroundPosition:G},F,E)}});var o=h("#mount");var a=h("#ground .ground-top, #ground .ground-repeat");var m=h("#building");var s=h("#main-contents");var B=h("#main-footer");var z=h("#global-nav");var f=h("#arrow-button"),x=f.find(".back"),e=f.find(".forward");var n=[["connection","archive"],["our-vision","family"],["tie-string","learn-with","support","projects"]];var v=function(F,E){return Object.create(q(F,E))};var u=function(E){var F;h.each(n,function(G,H){if(H.indexOf(E)!==-1){F=G}});return F};var C=function(F){var E=new Image();E.src=F};var j=function(){h(".hover").each(function(F){var E=h(this);if(E.data("src")){return}E.data({src:E.attr("src"),src_on:E.attr("src").replace(".png","-on.png")});C(E.data("src_on"));if(E.index("#global-nav img")===current){E.attr("src",E.data("src_on")).addClass("on")}})};var l=function(F){var E=z.find(".on");if(locked||F.hasClass("on")){return false}F.attr("src",F.data("src_on")).addClass("on");E.attr("src",E.data("src")).removeClass("on");return true};var p=function(E){if(current===0){x.show()}else{if(E===0){x.hide()}}};var g=function(E){var F=(h(window).width()-WIDTH)/2;return{is_short:(-E*(WIDTH/RATE))+F,is_middle:(-E*WIDTH)+F,is_long:(-E*(WIDTH*RATE))+F}};var d=function(E){if(locked||current===E){return}locked=true;var G=g(E);var F=DURATION*Math.abs(current-E);p(E);y.hide(function(){setTimeout(function(){m.animate({left:G.is_middle},F);r.obj.animate({left:G.is_short},F);o.moveBg(G.is_short,F);a.moveBg(G.is_long,F);B.moveBg(G.is_long,F,function(){setTimeout(function(){current=E;locked=false;if(E===0){w.opening()}else{y.show(E)}},200)})},300)})};var q=function(F,E){return{obj:F,dur:DUR,easing:"swing",d:200,timeout:null,show:function(H,I){var G=this;if(E){G.obj.each(function(J){h(this).delay(J*G.d).fadeIn(G.dur,G.easing,function(){if(J===G.obj.length-1&&typeof I==="function"){I()}})})}else{G.obj.eq(H).fadeIn(G.dur,G.easing,I)}},hide:function(H){var G=this;G.obj.eq(current).stop(true).fadeOut(G.dur,G.easing,H)},delay:function(H){var G=this;return{show:function(I,J){G.timeout=setTimeout(function(){G.show(I,J)},H)}}},clear_queue:function(){clearTimeout(this.timeout)}}};var D=v(h("#cloud img"));D.dur=800;var i=v(s.find(".stars"));i.dur=800;var A=v(h("#top .icons li"),true);A.timeout_arr=[];A.show=function(){var E=Math.round(Math.random()*9);clearTimeout(A.timeout_arr[E]);A.timeout_arr[E]=setTimeout(A.show,300);if(A.obj.eq(E).hasClass("lock")){return}A.obj.eq(E).addClass("lock").fadeIn(800,function(){h(this).delay(2000).fadeOut(800,function(){h(this).removeClass("lock")})})};A.hide=function(E){A.obj.stop(true,true).fadeOut(A.dur,E);h.each(A.timeout_arr,function(F,G){clearTimeout(A.timeout_arr[F])})};var r=v(h("#rainbow"));r.show=function(E){r.obj.fadeIn(DUR,E)};r.hide=function(E){r.obj.stop(true).fadeOut(r.dur,E)};var t=v(h("#humans div"));t.show=function(E,G){var F=t.obj.eq(E).find("img");F.each(function(H){h(this).delay(H*150).fadeIn(DUR,"linear",function(){if(H===F.length-1&&typeof G==="function"){G()}})})};t.hide=function(E){t.obj.eq(current).find("img").stop(true).fadeOut(DUR,E)};var w=v(s.find(" > div"));w.top=h("#top");w.opening=function(){locked=true;y.hide(function(){w.top.show();w.top.find("section").hide();t.delay(300).show(0,function(){w.top.find(".opening").delay(500).fadeIn(800,function(){D.show(0);h(this).delay(2000).fadeOut(800,function(){i.delay(600).show(0);w.top.find(".contents").delay(600).fadeIn(800,function(){A.delay(500).show();k.show();locked=false})})})})})};w.show=function(E,F){w.obj.eq(E).show();w.obj.eq(E).find(".contents").fadeIn(DUR,F)};w.hide=function(E){w.obj.eq(current).find(".contents").stop(true).fadeOut(DUR,function(){w.obj.eq(current).hide();if(typeof E==="function"){E()}})};var b=v(h("#connect"));b.title=b.obj.find("h1"),b.li=b.obj.find("ul li");b.float_timeout=[];b.random_dur=function(){var E;switch(Math.floor(Math.random()*7)){case 0:E=400;break;case 1:E=450;break;case 2:E=500;break;case 3:E=550;break;case 4:E=600;break;case 5:E=650;break;case 6:E=700;break}return E};b.float_anim=function(E){var F=E.index();var G=b.random_dur();clearTimeout(b.float_timeout[F]);E.animate({marginTop:-5},550,"linear").animate({marginTop:-10},G,"easeOutQuad").animate({marginTop:-5},G,"linear").animate({marginTop:0},550,"easeOutQuad",function(){b.float_timeout[F]=setTimeout(function(){b.float_anim(E)},0)})};b.stop_floating=function(){h.each(b.float_timeout,function(E,F){b.li.eq(E).stop(true);clearTimeout(F)})};b.show=function(E){b.obj.css({opacity:1}).show();b.title.fadeIn(DUR,function(){b.li.each(function(G){var F=h(this);F.delay(G*200).fadeIn(DUR,function(){b.float_anim(F);if(G===b.li.length-1&&typeof E==="function"){E()}})})})};b.hide=function(E){b.obj.stop(true).fadeOut(DUR,function(){b.title.stop(true).hide();b.stop_floating();b.li.stop(true,true).hide(0,function(){if(h(this).index()===b.li.length-1&&typeof E==="function"){E()}})})};var c=v(h("#earth-field"));c.timeout=null;c.sun=h("#sun");c.background=h("#background");c.show=function(){if(locked){return}locked=true;e.hide();p(4);y.hide();c.sun.fadeOut(DUR,function(){c.background.animate({bottom:-c.background.height()},800,function(){c.obj.animate({bottom:30},800,function(){t.delay(300).show(4,function(){c.timeout=setTimeout(function(){b.show(function(){i.delay(100).show(4);k.delay(100).show()})},300)});current=4;locked=false})})})};c.hide=function(E){if(locked){return}locked=true;var F=g(E);r.obj.css({left:F.is_short});m.css({left:F.is_middle});o.moveBg(F.is_short,0);a.moveBg(F.is_long,0);B.moveBg(F.is_long,0);b.hide(function(){k.clear_queue();k.hide()});k.clear_queue();t.clear_queue();i.clear_queue();clearTimeout(c.timeout);k.hide();t.hide();e.show();p(E);i.hide(function(){c.obj.animate({bottom:-c.obj.height()},800,function(){c.background.animate({bottom:0},800,function(){c.sun.stop(true).fadeIn(DUR);current=E;locked=false;if(E===0){w.opening()}else{y.show(E)}})})})};var k=v(h("#thread-field"));k.threads=k.obj.find(" > div");k.pen=b.obj.find(".pen");k.dur=400;k.pos=function(){return(h(window).width()-4000)/2};k.top_pos=function(){return((h(window).width()-1000)/2)+846};k.show=function(E){var H=current===0?0:k.pos(),G=current===0?k.top_pos():0,F=current===4?4000:2800;k.threads.eq(current).stop(true).css({left:H,opacity:1}).show(0,function(){k.obj.css({left:G}).animate({width:h(window).width()},F,"linear",function(){if(current===4){k.pen.fadeIn(300,E)}else{if(typeof E==="function"){E()}}})})};k.hide=function(F){var E=this;if(current===4){k.pen.stop(true).fadeOut(DUR)}k.threads.eq(current).stop(true).fadeOut(E.dur,function(){k.obj.stop(true).css({width:0});if(typeof F==="function"){F()}})};k.resize=function(){if(current===0){k.obj.stop(true).css({left:k.top_pos()})}else{k.threads.eq(current).stop(true).css({left:k.pos()})}};var y={show:function(E){t.delay(300).show(E,function(){if(E===0){w.delay(300).show(E,function(){i.delay(100).show(E);D.delay(100).show(E,function(){A.delay(300).show();k.show()})})}else{w.delay(300).show(E,function(){i.delay(100).show(E);D.delay(100).show(E,function(){k.show()})})}})},hide:function(E){i.clear_queue();D.clear_queue();t.clear_queue();w.clear_queue();A.clear_queue();t.hide();k.hide();if(current===0){A.hide()}D.hide();i.hide();w.hide(E)}};h(document).on("mouseenter",".hover",function(){var E=h(this);if(!E.hasClass("on")){E.attr("src",E.data("src_on"))}}).on("mouseleave",".hover",function(){var E=h(this);if(!E.hasClass("on")){E.attr("src",E.data("src"))}});f.on("click","a",function(I){I.preventDefault();if(locked){return}var E=z.find("li").length,G=h(this).index("#arrow-button a"),H=G!==0?(current+1)%E:(current+E-1)%E;var F=z.find("img").eq(H);l(F);if(H!==4&&current!==4){d(H)}else{if(H===4){c.show()}else{c.hide(H)}}});z.on("click","a",function(H){var E=h(this),F=E.find("img"),G=E.index("#global-nav a");if(G===5){return}H.preventDefault();if(!l(F)){return}if(G!==4&&current!==4){d(G)}else{if(G===4){c.show()}else{c.hide(G)}}});B.on("click",".logo a",function(F){F.preventDefault();if(locked){return}var E=z.find("li:first img");l(E);if(current===4){c.hide(0)}else{if(current!==0){d(0)}else{w.opening()}}});x.hide();m.width(m.find("img").length*WIDTH);j();h(window).on("load",function(){setTimeout(w.opening,800)}).on("resize",function(){var E=(-current*WIDTH)+((h(window).width()-WIDTH)/2);m.css({left:E});r.obj.css({left:E});k.resize()}).resize()});(function(){if(!
/*@cc_on!@*/
0){return}var e="abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(",");for(var i=0;i<e.length;i++){document.createElement(e[i])}})();