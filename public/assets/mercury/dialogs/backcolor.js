!function(){this.Mercury.dialogHandlers.backColor=function(){var t=this;return this.element.find(".picker, .last-picked").on("click",function(e){var i;return i=jQuery(e.target).css("background-color"),t.element.find(".last-picked").css({background:i}),t.button.css({backgroundColor:i}),Mercury.trigger("action",{action:"backColor",value:i})})}}.call(this);