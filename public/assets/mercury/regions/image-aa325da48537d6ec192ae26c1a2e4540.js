(function(){var t={}.hasOwnProperty,e=function(e,i){function n(){this.constructor=e}for(var s in i)t.call(i,s)&&(e[s]=i[s]);return n.prototype=i.prototype,e.prototype=new n,e.__super__=i.prototype,e};this.Mercury.Regions.Image=function(t){function i(t,e,n){this.element=t,this.window=e,this.options=null!=n?n:{},i.__super__.constructor.apply(this,arguments)}var n;return e(i,t),i.supported=document.getElementById,i.supportedText="Chrome 10+, Firefox 4+, IE 7+, Safari 5+, Opera 8+",n="image",i.prototype.type=function(){return n},i.prototype.bindEvents=function(){var t=this;return Mercury.on("mode",function(e,i){return"preview"===i.mode?t.togglePreview():void 0}),Mercury.on("focus:frame",function(){return t.previewing||Mercury.region!==t?void 0:t.focus()}),Mercury.on("action",function(e,i){return t.previewing||Mercury.region!==t?void 0:i.action?t.execCommand(i.action,i):void 0}),this.element.on("dragenter",function(e){return t.previewing?void 0:(e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="copy")}),this.element.on("dragover",function(e){return t.previewing?void 0:(e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="copy")}),this.element.on("drop",function(e){return t.previewing?void 0:e.originalEvent.dataTransfer.files.length?(e.preventDefault(),t.focus(),Mercury.uploader(e.originalEvent.dataTransfer.files[0])):void 0}),this.element.on("focus",function(){return t.focus()})},i.prototype.togglePreview=function(){return this.previewing?(this.previewing=!1,this.element.attr(Mercury.config.regions.attribute,n),this.build()):(this.previewing=!0,this.element.removeAttr(Mercury.config.regions.attribute),Mercury.trigger("region:blurred",{region:this}))},i.prototype.focus=function(){return this.previewing?void 0:(Mercury.region=this,Mercury.trigger("region:focused",{region:this}),Mercury.trigger("region:update",{region:this}))},i.prototype.execCommand=function(t,e){var n;return null==e&&(e={}),i.__super__.execCommand.apply(this,arguments),(n=Mercury.Regions.Image.actions[t])?n.call(this,e):void 0},i.prototype.pushHistory=function(){return this.history.push({src:this.element.attr("src")})},i.prototype.updateSrc=function(t){return this.element.attr("src",t)},i.prototype.serialize=function(){return{type:n,data:this.dataAttributes(),attributes:{src:this.element.attr("src")}}},i.actions={undo:function(){var t;return(t=this.history.undo())?this.updateSrc(t.src):void 0},redo:function(){var t;return(t=this.history.redo())?this.updateSrc(t.src):void 0},insertImage:function(t){return this.updateSrc(t.value.src)}},i}(Mercury.Region)}).call(this);