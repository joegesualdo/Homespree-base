!function(){var e,t={}.hasOwnProperty,i=function(e,i){function n(){this.constructor=e}for(var r in i)t.call(i,r)&&(e[r]=i[r]);return n.prototype=i.prototype,e.prototype=new n,e.__super__=i.prototype,e};Mercury.PageEditor=function(t){function n(){return e=n.__super__.constructor.apply(this,arguments)}return i(n,t),n.prototype.save=function(){var e,t,i,n;t=null!=(i=null!=(n=this.saveUrl)?n:Mercury.saveUrl)?i:this.iframeSrc(),e=this.serializeAsXml(),console.log("saving",e)},n.prototype.serializeAsXml=function(){var e,t,i,n,r,s,o,a;e=this.serialize(),i=[];for(t in e){n=e[t],s=[],a=n.snippets;for(r in a)o=a[r],s.push("<"+r+' name="'+o.name+'"><![CDATA['+jQuery.toJSON(o.options)+"]]></"+r+">");i.push('<region name="'+t+'" type="'+n.type+'"><value>\n<![CDATA['+n.value+"]]>\n</value><snippets>"+s.join("")+"</snippets></region>")}return"<regions>"+i.join("")+"</regions>"},n}(Mercury.PageEditor)}.call(this);