/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(t){t.flexslider=function(e,i){var n=t(e),s=t.extend({},t.flexslider.defaults,i),o=s.namespace,a="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,r=a?"touchend":"click",l="vertical"===s.direction,c=s.reverse,h=0<s.itemWidth,u="fade"===s.animation,d=""!==s.asNavFor,p={};t.data(e,"flexslider",n),p={init:function(){n.animating=!1,n.currentSlide=s.startAt,n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=s.selector.substr(0,s.selector.search(" ")),n.slides=t(s.selector,n),n.container=t(n.containerSelector,n),n.count=n.slides.length,n.syncExists=0<t(s.sync).length,"slide"===s.animation&&(s.animation="swing"),n.prop=l?"top":"marginLeft",n.args={},n.manualPause=!1;var e,i=n;if((e=!s.video)&&(e=!u)&&(e=s.useCSS))t:{e=document.createElement("div");var o,r=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(o in r)if(void 0!==e.style[r[o]]){n.pfx=r[o].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",e=!0;break t}e=!1}i.transitions=e,""!==s.controlsContainer&&(n.controlsContainer=0<t(s.controlsContainer).length&&t(s.controlsContainer)),""!==s.manualControls&&(n.manualControls=0<t(s.manualControls).length&&t(s.manualControls)),s.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),d&&p.asNav.setup(),n.setup("init"),s.controlNav&&p.controlNav.setup(),s.directionNav&&p.directionNav.setup(),s.keyboard&&(1===t(n.containerSelector).length||s.multipleKeyboard)&&t(document).bind("keyup",function(t){t=t.keyCode,n.animating||39!==t&&37!==t||(t=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1,n.flexAnimate(t,s.pauseOnAction))}),s.mousewheel&&n.bind("mousewheel",function(t,e){t.preventDefault();var i=0>e?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(i,s.pauseOnAction)}),s.pausePlay&&p.pausePlay.setup(),s.slideshow&&(s.pauseOnHover&&n.hover(function(){!n.manualPlay&&!n.manualPause&&n.pause()},function(){!n.manualPause&&!n.manualPlay&&n.play()}),0<s.initDelay?setTimeout(n.play,s.initDelay):n.play()),a&&s.touch&&p.touch(),(!u||u&&s.smoothHeight)&&t(window).bind("resize focus",p.resize),setTimeout(function(){s.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(o+"active-slide").eq(n.currentItem).addClass(o+"active-slide"),n.slides.click(function(e){e.preventDefault();var e=t(this),i=e.index();!t(s.asNavFor).data("flexslider").animating&&!e.hasClass("active")&&(n.direction=n.currentItem<i?"next":"prev",n.flexAnimate(i,s.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var e,i=1;if(n.controlNavScaffold=t('<ol class="'+o+"control-nav "+o+("thumbnails"===s.controlNav?"control-thumbs":"control-paging")+'"></ol>'),1<n.pagingCount)for(var l=0;l<n.pagingCount;l++)e="thumbnails"===s.controlNav?'<img src="'+n.slides.eq(l).attr("data-thumb")+'"/>':"<a>"+i+"</a>",n.controlNavScaffold.append("<li>"+e+"</li>"),i++;n.controlsContainer?t(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),n.controlNavScaffold.delegate("a, img",r,function(e){e.preventDefault();var e=t(this),i=n.controlNav.index(e);e.hasClass(o+"active")||(n.direction=i>n.currentSlide?"next":"prev",n.flexAnimate(i,s.pauseOnAction))}),a&&n.controlNavScaffold.delegate("a","click touchstart",function(t){t.preventDefault()})},setupManual:function(){n.controlNav=n.manualControls,p.controlNav.active(),n.controlNav.live(r,function(e){e.preventDefault();var e=t(this),i=n.controlNav.index(e);e.hasClass(o+"active")||(n.direction=i>n.currentSlide?"next":"prev",n.flexAnimate(i,s.pauseOnAction))}),a&&n.controlNav.live("click touchstart",function(t){t.preventDefault()})},set:function(){n.controlNav=t("."+o+"control-nav li "+("thumbnails"===s.controlNav?"img":"a"),n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(o+"active").eq(n.animatingTo).addClass(o+"active")},update:function(e,i){1<n.pagingCount&&"add"===e?n.controlNavScaffold.append(t("<li><a>"+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(i).closest("li").remove(),p.controlNav.set(),1<n.pagingCount&&n.pagingCount!==n.controlNav.length?n.update(i,e):p.controlNav.active()}},directionNav:{setup:function(){var e=t('<ul class="'+o+'direction-nav"><li><a class="'+o+'prev" href="#">'+s.prevText+'</a></li><li><a class="'+o+'next" href="#">'+s.nextText+"</a></li></ul>");n.controlsContainer?(t(n.controlsContainer).append(e),n.directionNav=t("."+o+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=t("."+o+"direction-nav li a",n)),p.directionNav.update(),n.directionNav.bind(r,function(e){e.preventDefault(),e=t(this).hasClass(o+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(e,s.pauseOnAction)}),a&&n.directionNav.bind("click touchstart",function(t){t.preventDefault()})},update:function(){var t=o+"disabled";1===n.pagingCount?n.directionNav.addClass(t):s.animationLoop?n.directionNav.removeClass(t):0===n.animatingTo?n.directionNav.removeClass(t).filter("."+o+"prev").addClass(t):n.animatingTo===n.last?n.directionNav.removeClass(t).filter("."+o+"next").addClass(t):n.directionNav.removeClass(t)}},pausePlay:{setup:function(){var e=t('<div class="'+o+'pauseplay"><a></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=t("."+o+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=t("."+o+"pauseplay a",n)),p.pausePlay.update(s.slideshow?o+"pause":o+"play"),n.pausePlay.bind(r,function(e){e.preventDefault(),t(this).hasClass(o+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())}),a&&n.pausePlay.bind("click touchstart",function(t){t.preventDefault()})},update:function(t){"play"===t?n.pausePlay.removeClass(o+"pause").addClass(o+"play").text(s.playText):n.pausePlay.removeClass(o+"play").addClass(o+"pause").text(s.pauseText)}},touch:function(){function t(t){p=l?o-t.touches[0].pageY:o-t.touches[0].pageX,m=l?Math.abs(p)<Math.abs(t.touches[0].pageX-a):Math.abs(p)<Math.abs(t.touches[0].pageY-a),(!m||500<Number(new Date)-f)&&(t.preventDefault(),!u&&n.transitions&&(s.animationLoop||(p/=0===n.currentSlide&&0>p||n.currentSlide===n.last&&p>0?Math.abs(p)/d+2:1),n.setProps(r+p,"setTouch")))}function i(){if(e.removeEventListener("touchmove",t,!1),n.animatingTo===n.currentSlide&&!m&&null!==p){var l=c?-p:p,h=l>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(h)&&(550>Number(new Date)-f&&50<Math.abs(l)||Math.abs(l)>d/2)?n.flexAnimate(h,s.pauseOnAction):u||n.flexAnimate(n.currentSlide,s.pauseOnAction,!0)}e.removeEventListener("touchend",i,!1),r=p=a=o=null}var o,a,r,d,p,f,m=!1;e.addEventListener("touchstart",function(u){n.animating?u.preventDefault():1===u.touches.length&&(n.pause(),d=l?n.h:n.w,f=Number(new Date),r=h&&c&&n.animatingTo===n.last?0:h&&c?n.limit-(n.itemW+s.itemMargin)*n.move*n.animatingTo:h&&n.currentSlide===n.last?n.limit:h?(n.itemW+s.itemMargin)*n.move*n.currentSlide:c?(n.last-n.currentSlide+n.cloneOffset)*d:(n.currentSlide+n.cloneOffset)*d,o=l?u.touches[0].pageY:u.touches[0].pageX,a=l?u.touches[0].pageX:u.touches[0].pageY,e.addEventListener("touchmove",t,!1),e.addEventListener("touchend",i,!1))},!1)},resize:function(){!n.animating&&n.is(":visible")&&(h||n.doMath(),u?p.smoothHeight():h?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):l?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(s.smoothHeight&&p.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(t){if(!l||u){var e=u?n:n.viewport;t?e.animate({height:n.slides.eq(n.animatingTo).height()},t):e.height(n.slides.eq(n.animatingTo).height())}},sync:function(e){var i=t(s.sync).data("flexslider"),o=n.animatingTo;switch(e){case"animate":i.flexAnimate(o,s.pauseOnAction,!1,!0);break;case"play":!i.playing&&!i.asNav&&i.play();break;case"pause":i.pause()}}},n.flexAnimate=function(e,i,r,f,m){if(d&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,m)||r)&&n.is(":visible")){if(d&&f){if(r=t(s.asNavFor).data("flexslider"),n.atEnd=0===e||e===n.count-1,r.flexAnimate(e,!0,!1,!0,m),n.direction=n.currentItem<e?"next":"prev",r.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(o+"active-slide").eq(e).addClass(o+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(o+"active-slide").eq(e).addClass(o+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,s.before(n),i&&n.pause(),n.syncExists&&!m&&p.sync("animate"),s.controlNav&&p.controlNav.active(),h||n.slides.removeClass(o+"active-slide").eq(e).addClass(o+"active-slide"),n.atEnd=0===e||e===n.last,s.directionNav&&p.directionNav.update(),e===n.last&&(s.end(n),s.animationLoop||n.pause()),u)a?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.slides.unbind("webkitTransitionEnd transitionend"),n.slides.eq(n.currentSlide).bind("webkitTransitionEnd transitionend",function(){s.after(n)}),n.animating=!1,n.currentSlide=n.animatingTo):(n.slides.eq(n.currentSlide).fadeOut(s.animationSpeed,s.easing),n.slides.eq(e).fadeIn(s.animationSpeed,s.easing,n.wrapup));else{var g=l?n.slides.filter(":first").height():n.computedW;h?(e=s.itemWidth>n.w?2*s.itemMargin:s.itemMargin,e=(n.itemW+e)*n.move*n.animatingTo,e=e>n.limit&&1!==n.visible?n.limit:e):e=0===n.currentSlide&&e===n.count-1&&s.animationLoop&&"next"!==n.direction?c?(n.count+n.cloneOffset)*g:0:n.currentSlide===n.last&&0===e&&s.animationLoop&&"prev"!==n.direction?c?0:(n.count+1)*g:c?(n.count-1-e+n.cloneOffset)*g:(e+n.cloneOffset)*g,n.setProps(e,"",s.animationSpeed),n.transitions?(s.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){n.wrapup(g)})):n.container.animate(n.args,s.animationSpeed,s.easing,function(){n.wrapup(g)})}s.smoothHeight&&p.smoothHeight(s.animationSpeed)}},n.wrapup=function(t){!u&&!h&&(0===n.currentSlide&&n.animatingTo===n.last&&s.animationLoop?n.setProps(t,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&s.animationLoop&&n.setProps(t,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,s.after(n)},n.animateSlides=function(){n.animating||n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.playing=!1,s.pausePlay&&p.pausePlay.update("play"),n.syncExists&&p.sync("pause")},n.play=function(){n.animatedSlides=setInterval(n.animateSlides,s.slideshowSpeed),n.playing=!0,s.pausePlay&&p.pausePlay.update("pause"),n.syncExists&&p.sync("play")},n.canAdvance=function(t,e){var i=d?n.pagingCount-1:n.last;return e?!0:d&&n.currentItem===n.count-1&&0===t&&"prev"===n.direction?!0:d&&0===n.currentItem&&t===n.pagingCount-1&&"next"!==n.direction?!1:t!==n.currentSlide||d?s.animationLoop?!0:n.atEnd&&0===n.currentSlide&&t===i&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===i&&0===t&&"next"===n.direction?!1:!0:!1},n.getTarget=function(t){return n.direction=t,"next"===t?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(t,e,i){var o,a=t?t:(n.itemW+s.itemMargin)*n.move*n.animatingTo;o=-1*function(){if(h)return"setTouch"===e?t:c&&n.animatingTo===n.last?0:c?n.limit-(n.itemW+s.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(e){case"setTotal":return c?(n.count-1-n.currentSlide+n.cloneOffset)*t:(n.currentSlide+n.cloneOffset)*t;case"setTouch":return t;case"jumpEnd":return c?t:n.count*t;case"jumpStart":return c?n.count*t:t;default:return t}}()+"px",n.transitions&&(o=l?"translate3d(0,"+o+",0)":"translate3d("+o+",0,0)",i=void 0!==i?i/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",i)),n.args[n.prop]=o,(n.transitions||void 0===i)&&n.container.css(n.args)},n.setup=function(e){if(u)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(a?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+s.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):n.slides.eq(n.currentSlide).fadeIn(s.animationSpeed,s.easing)),s.smoothHeight&&p.smoothHeight();else{var i,r;"init"===e&&(n.viewport=t('<div class="'+o+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,c&&(r=t.makeArray(n.slides).reverse(),n.slides=t(r),n.container.empty().append(n.slides))),s.animationLoop&&!h&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(n.slides.first().clone().addClass("clone")).prepend(n.slides.last().clone().addClass("clone"))),n.newSlides=t(s.selector,n),i=c?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,l&&!h?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(i*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(i*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,"float":"left",display:"block"}),s.smoothHeight&&p.smoothHeight()},"init"===e?100:0))}h||n.slides.removeClass(o+"active-slide").eq(n.currentSlide).addClass(o+"active-slide")},n.doMath=function(){var t=n.slides.first(),e=s.itemMargin,i=s.minItems,o=s.maxItems;n.w=n.width(),n.h=t.height(),n.boxPadding=t.outerWidth()-t.width(),h?(n.itemT=s.itemWidth+e,n.minW=i?i*n.itemT:n.w,n.maxW=o?o*n.itemT:n.w,n.itemW=n.minW>n.w?(n.w-e*i)/i:n.maxW<n.w?(n.w-e*o)/o:s.itemWidth>n.w?n.w:s.itemWidth,n.visible=Math.floor(n.w/(n.itemW+e)),n.move=0<s.move&&s.move<n.visible?s.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:s.itemWidth>n.w?(n.itemW+2*e)*n.count-n.w-e:(n.itemW+e)*n.count-n.w-e):(n.itemW=n.w,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding},n.update=function(t,e){n.doMath(),h||(t<n.currentSlide?n.currentSlide+=1:t<=n.currentSlide&&0!==t&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),s.controlNav&&!n.manualControls&&("add"===e&&!h||n.pagingCount>n.controlNav.length?p.controlNav.update("add"):("remove"===e&&!h||n.pagingCount<n.controlNav.length)&&(h&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),p.controlNav.update("remove",n.last))),s.directionNav&&p.directionNav.update()},n.addSlide=function(e,i){var o=t(e);n.count+=1,n.last=n.count-1,l&&c?void 0!==i?n.slides.eq(n.count-i).after(o):n.container.prepend(o):void 0!==i?n.slides.eq(i).before(o):n.container.append(o),n.update(i,"add"),n.slides=t(s.selector+":not(.clone)",n),n.setup(),s.added(n)},n.removeSlide=function(e){var i=isNaN(e)?n.slides.index(t(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?t(e,n.slides).remove():l&&c?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(i,"remove"),n.slides=t(s.selector+":not(.clone)",n),n.setup(),s.removed(n)},p.init()},t.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},t.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var i=t(this),n=i.find(e.selector?e.selector:".slides > li");1===n.length?(n.fadeIn(400),e.start&&e.start(i)):void 0==i.data("flexslider")&&new t.flexslider(this,e)});var i=t(this).data("flexslider");switch(e){case"play":i.play();break;case"pause":i.pause();break;case"next":i.flexAnimate(i.getTarget("next"),!0);break;case"prev":case"previous":i.flexAnimate(i.getTarget("prev"),!0);break;default:"number"==typeof e&&i.flexAnimate(e,!0)}}}(jQuery),$(window).load(function(){$(".full-width-slider.flexslider").flexslider({animation:"slide",touch:!0,prevText:"<i class='e-icon-left-open-big'></i>",nextText:"<i class=' e-icon-right-open-big'></i>",start:function(){$(".bg").remove()},smoothHeight:!0})}),$(window).load(function(){$(".feature-strip-image-slider.flexslider").flexslider({animation:"slide",touch:!0,animationLoop:!0,smoothHeight:!0,controlNav:!0,useCSS:!1})}),$(window).load(function(){$(".image-slider").flexslider({animation:"slide",touch:!0,animationLoop:!1,smoothHeight:!0,controlNav:!1,prevText:"<i class='e-icon-left-open-big'></i>",nextText:"<i class=' e-icon-right-open-big'></i>",useCSS:!1})}),$(window).load(function(){$("#portfolio-carousel").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,itemWidth:100,itemMargin:5,useCSS:!1,asNavFor:"#portfolio-slider"}),$("#portfolio-slider").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,prevText:"<i class='e-icon-left-open-big'></i>",nextText:"<i class=' e-icon-right-open-big'></i>",slideshow:!1,touch:!0,sync:"#portfolio-carousel",smoothHeight:!0,useCSS:!1})});