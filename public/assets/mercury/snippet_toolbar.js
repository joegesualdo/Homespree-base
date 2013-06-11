!function(){var e={}.hasOwnProperty,t=function(t,i){function n(){this.constructor=t}for(var r in i)e.call(i,r)&&(t[r]=i[r]);return n.prototype=i.prototype,t.prototype=new n,t.__super__=i.prototype,t};this.Mercury.SnippetToolbar=function(i){function n(e,t){this.document=e,this.options=null!=t?t:{},this._boundEvents=[],n.__super__.constructor.call(this,this.options)}return t(n,i),n.prototype.build=function(){var t,i,n,r,s,o;this.element=jQuery("<div>",{"class":"mercury-toolbar mercury-snippet-toolbar",style:"display:none"}),this.element.appendTo(null!=(r=jQuery(this.options.appendTo).get(0))?r:"body"),s=Mercury.config.toolbars.snippets,o=[];for(i in s)e.call(s,i)&&(n=s[i],t=this.buildButton(i,n),t?o.push(t.appendTo(this.element)):o.push(void 0));return o},n.prototype.bindEvents=function(){var e=this;return this.bindReleasableEvent(Mercury,"show:toolbar",function(t,i){return i.snippet?(i.snippet.mouseout(function(){return e.hide()}),e.show(i.snippet)):void 0}),this.bindReleasableEvent(Mercury,"hide:toolbar",function(t,i){return i.type&&"snippet"===i.type?e.hide(i.immediately):void 0}),this.bindReleasableEvent(jQuery(this.document),"scroll",function(){return e.visible?e.position():void 0}),this.element.mousemove(function(){return clearTimeout(e.hideTimeout)}),this.element.mouseout(function(){return e.hide()})},n.prototype.bindReleasableEvent=function(e,t,i){return e.on(t,i),this._boundEvents.push([e,t,i])},n.prototype.show=function(e){return this.snippet=e,Mercury.tooltip.hide(),this.position(),this.appear()},n.prototype.position=function(){var e,t,i;return t=this.snippet.offset(),i=t.top+Mercury.displayRect.top-jQuery(this.document).scrollTop()-this.height()+10,e=t.left-jQuery(this.document).scrollLeft(),this.element.css({top:i,left:e})},n.prototype.appear=function(){return clearTimeout(this.hideTimeout),this.visible?void 0:(this.visible=!0,this.element.css({display:"block",opacity:0}),this.element.stop().animate({opacity:1},200,"easeInOutSine"))},n.prototype.hide=function(e){var t=this;return null==e&&(e=!1),clearTimeout(this.hideTimeout),e?(this.element.hide(),this.visible=!1):this.hideTimeout=setTimeout(function(){return t.element.stop().animate({opacity:0},300,"easeInOutSine",function(){return t.element.hide()}),t.visible=!1},500)},n.prototype.release=function(){var e,t,i,n,r,s,o;for(this.element.off(),this.element.remove(),s=this._boundEvents,n=0,r=s.length;r>n;n++)o=s[n],i=o[0],e=o[1],t=o[2],i.off(e,t);return this._boundEvents=[]},n}(Mercury.Toolbar)}.call(this);