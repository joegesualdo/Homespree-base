!function(){var t,e,i,n;t={card_first_name:{intro:"Name of the owner? (First and Last)",required:!0},card_mobile_number:{intro:"What is your phone number?",required:!0},card_years_experience:{intro:"How many years have you been in business?",required:!0},services:{intro:"What services does your company offer?",position:"left",required:!0},service_area:{intro:"Where is your business located?",position:"left",required:!0},slogan:{intro:"Your company's slogan?"},description:{intro:"Enter a brief description of your company"}},i=function(t){var e,i,n,s,o;console.log("Loading Intro..."),e=1,o=[];for(i in t)s=t[i],e++,n=$("#"+i),o.push(n.attr({"data-step":e,"data-intro":s.intro,"data-skip":s.skippable,"data-required":s.required}));return o},n=function(t){var e;return null!=t?null!=(e=t.replace(/^\s\s*/,""))?e.replace(/\s\s*$/,""):void 0:void 0},e=function(){return console.log("images loaded"),i(t),$("#intro_js_start").attr({"data-step":1,"data-intro":"Welcome to your Homespree profile! Taking a few seconds to fill out your profile will help customers find your business.","data-position":"right"}),introJs().onchange(function(t){return $(t).attr("data-step")>1?($(".introjs-overlay").click(),setTimeout(function(){return $(t).find("a.edit-link").click()},500)):void 0}).start(),$(".best_in_place").best_in_place(),setTimeout(function(){return $(".introjs-overlay").click()},500)},$(document).ready(function(){return $("#page.profile").length>0?($.preload($("ul.slides img").last().attr("src"),{onFinish:e}),$("#contractor_specialties").sortable({cursorAt:{top:0,left:0},axis:"y",update:function(){return $.post($(this).data("update-url"),$(this).sortable("serialize")),$("#primary_service_text").text($(this).find(".specialty-name").first().text())}}),$("#licensed").tooltip(),$(".item.photo").first().addClass("active")):void 0})}.call(this);