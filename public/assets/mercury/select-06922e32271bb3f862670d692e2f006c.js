!function(){var e={}.hasOwnProperty,t=function(t,i){function n(){this.constructor=t}for(var r in i)e.call(i,r)&&(t[r]=i[r]);return n.prototype=i.prototype,t.prototype=new n,t.__super__=i.prototype,t};this.Mercury.Select=function(e){function i(e,t,n){this.url=e,this.name=t,this.options=null!=n?n:{},i.__super__.constructor.apply(this,arguments)}return t(i,e),i.prototype.build=function(){var e;return this.element=jQuery("<div>",{"class":"mercury-select mercury-"+this.name+"-select loading",style:"display:none"}),this.element.appendTo(null!=(e=jQuery(this.options.appendTo).get(0))?e:"body")},i.prototype.bindEvents=function(){var e=this;return Mercury.on("hide:dialogs",function(t,i){return i!==e?e.hide():void 0}),this.element.on("mousedown",function(e){return e.preventDefault()}),i.__super__.bindEvents.apply(this,arguments)},i.prototype.position=function(e){var t,i,n,r,s,o,a;return this.element.css({top:0,left:0,display:"block",visibility:"hidden"}),o=this.button.position(),n=this.element.width(),i=this.element.height(),t=jQuery(document).height(),a=o.top+this.button.height()/2-i/2,a<o.top-100&&(a=o.top-100),20>a&&(a=20),r=this.loaded?"auto":i,a+i>=t-20&&(r=t-a-20),s=o.left,s+n>jQuery(window).width()&&(s=s-n+this.button.width()),this.element.css({top:a,left:s,height:r,display:e?"block":"none",visibility:"visible"})},i}(Mercury.Dialog)}.call(this);