function refresh(){ww=$(window).width(),limit>ww?location.reload(!0):ww>limit?location.reload(!0):ww=limit}$(document).ready(function(){/(iPhone)/i.test(navigator.userAgent)&&window.addEventListener("load",function(){setTimeout(function(){window.scrollTo(0,1)},0)})}),$(window).load(function(){$.fn.eqHeights=function(t){var e={child:!1},t=$.extend(e,t),i=$(this);if(i.length>0&&!i.data("eqHeights")&&($(window).bind("resize.eqHeights",function(){i.eqHeights()}),i.data("eqHeights",!0)),t.child&&t.child.length>0)var n=$(t.child,this);else var n=$(this).children();var s=0,o=0,a=[];n.height("auto").each(function(){var t=this.offsetTop;s>0&&s!=t&&($(a).height(o),o=$(this).height(),a=[]),o=Math.max(o,$(this).height()),s=this.offsetTop,a.push(this)}),$(a).height(o)},$(".equal").eqHeights()});var ww=$(window).width(),limit=979,tOut;$(window).resize(function(){var t=$(window).width();clearTimeout(tOut),(ww>limit&&limit>t||limit>ww&&t>limit)&&(tOut=setTimeout(refresh,100))}),/(iPhone|iPod|iPad)/i.test(navigator.userAgent)&&(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)?($("#logo object").css({display:"none"}),$("#logo img").css({display:"block"})):/CPU like Mac OS X/i.test(navigator.userAgent)),$(document).ready(function(){$(document).ready(function(){-1==navigator.userAgent.indexOf("iPad","iPhone","iPod","Android","BlackBerry")&&($(".backToTop").hide(),$(window).scroll(function(){$(this).scrollTop()>100?$(".backToTop").fadeIn():$(".backToTop").fadeOut()}),$(".backToTop").click(function(){return $("html, body").animate({scrollTop:0},800),!1}));var t=navigator.userAgent.toLowerCase(),e=t.match(/(iphone|ipod|ipad|Android|BlackBerry)/);e&&($(".backToTop").css({position:"relative",clear:"both",margin:"0 auto",width:"100%",right:"auto",bottom:"auto"}),$(".backToTop a").css({width:"100%","-border-radius":"0px","-webkit-border-radius":"0px"}))}),$(document).ready(function(){$("#search-trigger").click(function(){$(".search-wrapper input").slideToggle("fast").focus(),window.scrollTo(0,0),$(this).toggleClass("active")})}),$(document).ready(function(t){t(".scrollto, .mobile-page-nav .btn").click(function(e){return e.preventDefault(),t("html,body").animate({scrollTop:t(this.hash).offset().top},800),!1})}),$(document).ready(function(){$(".image-widget li").hover(function(){$(this).siblings().addClass("fade")},function(){$(this).siblings().removeClass("fade")})}),$(document).ready(function(){$(".accordion").on("show",function(t){$(t.target).prev(".accordion-heading").find(".accordion-toggle").addClass("active")}),$(".accordion").on("hide",function(t){$(this).find(".accordion-toggle").not($(t.target)).removeClass("active")})}),$(document).ready(function(){$(".sort li:first-child").addClass("first"),$(".sort li:last-child, .footerPosts li:last-child, .footerCredits ul li:last-child").addClass("last"),$(".main-content .strip:nth-child(odd)").addClass("odd"),$(".footer h4").wrapInner("<span></span>"),$("table.responsive").wrap('<div class="tablewrap" />'),$("table.responsive").before('<span class="instructions"><i class="e-icon-alert"></i> You may have to swipe or scroll table to view all content</strong></span>')}),$(document).ready(function(){$(".rotating-testimonials").easytabs({animationSpeed:400,updateHash:!1,cycle:5e3})}),$(document).ready(function(){$(".titletip, ul.social li a").tooltip({}),$(".detailsPop").popover({trigger:"hover"})})});