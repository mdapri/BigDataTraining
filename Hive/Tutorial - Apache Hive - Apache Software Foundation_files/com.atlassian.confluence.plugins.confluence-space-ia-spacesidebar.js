(function(A){Confluence.Sidebar={};
AJS.toInit(function(G){var S=G(window);
var g=G(document);
var X=Math.min(285,S.width()/3);
var h=285;
var f=150;
var T=55;
var Q=AJS.contextPath();
var M=Q.length?Q:"/";
var P=AJS.Meta.get("space-key");
var B=AJS.Meta.get("use-keyboard-shortcuts")?" "+"(\u2002\'[\'\u2002)":"";
var F="Collapse sidebar"+B;
var U="Expand sidebar"+B;
var E=G(".ia-splitter").children();
var i=G(".ia-splitter-left");
if(i.length<1){return 
}var N=G(".acs-side-bar");
var Z=i.find(".ia-fixed-sidebar");
var C=G("<div>",{"class":"ia-splitter-handle tipsy-enabled","data-tooltip":F}).appendTo(Z);
G("<div>",{"class":"ia-splitter-handle-highlight"}).appendTo(C);
var H=G(".ia-secondary-container");
var b=G("#footer, #studio-footer");
Confluence.Sidebar.throbberDiv=I;
H.length&&e(H.attr("data-tree-type"));
S.scroll(Y);
S.resize(Y);
S.on("touchend",Y);
g.ready(Y);
AJS.bind("confluence.header-resized",Y);
Confluence.Sidebar.applyTooltip=V;
L();
AJS.bind("sidebar.exit-configure-mode",L);
var J=G.cookie("confluence-sidebar.width")||X,D=J>f?J:T;
K(D);
W();
N.css("visibility","visible");
Y();
O();
Confluence.Sidebar.createFlyouts(N);
AJS.bind("sidebar.enter-configure-mode",j);
AJS.bind("sidebar.exit-configure-mode",a);
function V(k,m){var l={live:true,gravity:"w",title:"data-tooltip",delayIn:500,delayOut:0,offset:5};
G(k).tooltip(m?G.extend(l,m):l)
}function L(){G(".acs-side-bar .quick-links-section").attr("data-collapsed-tooltip","Space Shortcuts");
G(".acs-side-bar .advanced-links-section").attr("data-collapsed-tooltip","Space tools");
if(H.attr("data-tree-type")=="pages"){G(".acs-side-bar .ia-secondary-container").attr("data-collapsed-tooltip","Child pages");
V(".acs-side-bar.collapsed .ia-secondary-container.tipsy-enabled",{title:"data-collapsed-tooltip"})
}V(".ia-splitter-handle.tipsy-enabled");
V(".acs-side-bar.collapsed .quick-links-section.tipsy-enabled, .acs-side-bar.collapsed .acs-nav-item > a.tipsy-enabled, .acs-side-bar.collapsed .advanced-links-section.tipsy-enabled",{title:"data-collapsed-tooltip"});
V(".configure-mode .acs-side-bar-space-info.tipsy-enabled",{title:"data-configure-tooltip"});
N.on("mousedown click",function(){G(".tipsy").remove()
});
AJS.bind("sidebar.disable-tooltip",l);
AJS.bind("sidebar.enable-all-tooltips",k);
function l(p,o){var m=G(o).closest(".tipsy-enabled");
if(m.size()!=1){return 
}m.removeClass("tipsy-enabled").addClass("tipsy-disabled").attr("title","");
var n=m.data("tipsy");
if(n){n.hoverState="out"
}G(".tipsy").remove()
}function k(){G(".tipsy-disabled").removeClass("tipsy-disabled").addClass("tipsy-enabled")
}}function W(){g.on("mousewheel",".ia-scrollable-section",function(n,o){var m=G(this).scrollTop();
var l=G(this).get(0).scrollHeight-G(this).innerHeight()-1;
if((o>0&&m<=0)||(o<0&&m>=l)){n.preventDefault()
}else{if(G.browser.msie){n.preventDefault();
var k=30;
G(this).scrollTop(m+(-1*o*k))
}}n.stopPropagation()
})
}function I(){var l=G(Confluence.Templates.Sidebar.throbber()),m=l.find(".spinner"),k=Raphael.spinner(m[0],10,"#666");
l.find(".throbber").bind("remove",function(){k()
});
return l
}function e(k){if(k==="blogs"){d(N,R)
}else{if(k==="pages"){Confluence.Sidebar.Pages.installHandlers(N)
}}}function R(n,o){var m=n.attr("data-group-type");
var k=n.attr("data-group-value");
var l=Q+"/rest/ia/1.0/pagetree/blog/subtree";
G.get(l,{spaceKey:P,groupType:m,groupValue:k}).done(o)
}function d(k,l){k.delegate(".acs-tree-item > .icon, .acs-tree-item > .node-title","click",function(){var q=G(this);
var p=q.parent();
var m=p.find("> .icon");
if(p.hasClass("opened")){p.children("ul").hide();
p.removeClass("opened").addClass("closed");
m.removeClass("icon-section-opened").addClass("icon-section-closed")
}else{if(p.hasClass("closed")){var n=p.children("ul");
if(n.length){n.show()
}else{var o=G(Confluence.Templates.Sidebar.treeThrobber());
p.append(o);
l(p,function(s){var r=G(Confluence.Templates.Sidebar.pagetreeList({pagetree:s,isSubtree:true}));
o.remove();
r.appendTo(p)
})
}p.removeClass("closed").addClass("opened");
m.removeClass("icon-section-closed").addClass("icon-section-opened")
}}})
}function Y(){var k=i.offset().top,l=S.scrollTop(),m=S.scrollLeft();
if(l<0){return 
}if(l>(g.height()-S.height())){return 
}if(m<0){return 
}if(m>(g.width()-S.width())){return 
}Z.css({top:Math.max(k-l,0)+"px",left:Math.min(m*-1,0)+"px"})
}function c(){b.css("margin-left",Z.outerWidth()+"px")
}function O(){var n=G("body");
var l=false;
var m=false;
var o=function(p){m=true;
p.preventDefault();
E.one("selectstart",function(r){r.preventDefault()
});
var q=function(){if(Z.width()<=f){K(T)
}m=false;
n.off("mousemove.ia-splitter")
};
l=false;
n.on("mousemove.ia-splitter",function(r){if(Confluence.Sidebar.Configure.mode&&r.pageX<h){return 
}K(r.pageX);
l=true
});
n.one("mouseup mouseleave",q)
};
C.on("mousedown.ia-splitter",function(p){o(p)
}).click(function(){if(!l){k()
}else{l=false
}});
function k(){if(Confluence.Sidebar.Configure.mode){return 
}if(Z.width()>T){X=Z.width();
K(T)
}else{K(X)
}}}function K(k){k=Math.max(k,T);
G.cookie("confluence-sidebar.width",k,{path:M});
if(k<=f){N.addClass("collapsed");
C.attr("data-tooltip",U)
}else{if(N.hasClass("collapsed")){N.removeClass("collapsed");
C.attr("data-tooltip",F)
}}Z.width(k);
E.eq(1).css("margin-left",k+"px");
c()
}function j(){if(Z.width()<h){Confluence.Sidebar.widthBeforeConfiguring=Z.width();
K(h)
}}function a(){if(Confluence.Sidebar.widthBeforeConfiguring){K(Confluence.Sidebar.widthBeforeConfiguring);
Confluence.Sidebar.widthBeforeConfiguring=undefined
}}})
})(AJS.$);
(function(A){AJS.Confluence.ConfigurableNav=AJS.RestfulTable.extend({initialize:function(C){var B=this;
B.options=A.extend(true,C,{model:AJS.RestfulTable.EntryModel,Collection:Backbone.Collection.extend({url:C.resources.self,model:AJS.RestfulTable.EntryModel}),columns:[{id:"title"}]});
B._events=AJS.RestfulTable.Events;
B.classNames=AJS.RestfulTable.ClassNames;
B.dataKeys=AJS.RestfulTable.DataKeys;
B.$table=C.$el.addClass(this.classNames.RESTFUL_TABLE).addClass(this.classNames.ALLOW_HOVER).addClass("aui").addClass(B.classNames.LOADING);
B.$table.prepend('<colgroup><col span="1" class="aui-restfultable-order"><col span="1"><col span="1" class="aui-restfultable-operations"></colgroup>');
B.$tbody=A("<tbody/>");
B._models=this._createCollection();
B._rowClass=AJS.Confluence.ConfigurableNav.Row;
B.editRows=[];
B.enableReordering();
B._models.bind("remove",function(D){A.each(B.getRows(),function(E,F){if(F.model===D){if(F.hasFocus()&&B._createRow){B._createRow.trigger(B._events.FOCUS)
}B.removeRow(F)
}})
});
A.get(B.options.resources.all,function(D){B.populate(D)
});
Confluence.Sidebar.applyTooltip(".hide-link, .show-link, .delete-link",{gravity:"ne"})
},enableReordering:function(){var B=this;
this.$tbody.sortable({handle:"."+this.classNames.DRAG_HANDLE,helper:function(E,C){var D=C.clone(true).addClass(B.classNames.MOVEABLE);
D.children().each(function(F){A(this).width(C.children().eq(F).width())
});
return D
},start:function(C,D){var E=D.placeholder.find("td");
D.item.addClass(B.classNames.MOVEABLE).children().each(function(F){A(this).width(E.eq(F).width())
});
D.placeholder.html('<td colspan="'+B.getColumnCount()+'">&nbsp;</td>').css("visibility","visible");
B.getRowFromElement(D.item[0]).trigger(B._events.MODAL)
},stop:function(C,D){if(jQuery(D.item[0]).is(":visible")){D.item.removeClass(B.classNames.MOVEABLE).children().attr("style","");
D.placeholder.removeClass(B.classNames.ROW);
B.getRowFromElement(D.item[0]).trigger(B._events.MODELESS)
}},update:function(E,G){var C,D,F={},H=B.getRowFromElement(G.item[0]);
if(H){if(B.options.reverseOrder){D=G.item.next();
if(!D.length){F.position="First"
}else{C=B.getRowFromElement(D).model;
F.after=C.url()
}}else{D=G.item.prev();
if(!D.length){F.position="First"
}else{C=B.getRowFromElement(D).model;
F.after=C.url()
}}F.spaceKey=AJS.Meta.get("space-key");
A.ajax({url:H.model.url()+"/move",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(F),complete:function(){H.hideLoading()
},success:function(I){AJS.triggerEvtForInst(B._events.REORDER_SUCCESS,B,[I])
},error:function(J){var I=A.parseJSON(J.responseText||J.data);
AJS.triggerEvtForInst(B._events.SERVER_ERROR,B,[I,J])
}});
H.showLoading()
}},axis:"y",delay:0,containment:"document",cursor:"move",scroll:true,zIndex:8000});
this.$tbody.bind("selectstart mousedown",function(C){return !A(C.target).is("."+B.classNames.DRAG_HANDLE)
})
}});
AJS.Confluence.ConfigurableNav.ReadView=AJS.RestfulTable.CustomReadView.extend({render:function(B){return _.template('<span class="acs-nav-item-link" title="<%=title%>"><span class="icon"></span><span class="acs-nav-item-label"><%=title%></span></span>',{title:AJS.escapeHtml(B.title)})
}});
AJS.Confluence.ConfigurableNav.Row=AJS.RestfulTable.Row.extend({render:function(){var B=this,D=this.model.toJSON(),E=A("<td class='aui-restfultable-operations' />").append(this.renderOperations(D.canHide,D.hidden)),C=A('<td class="'+this.classNames.ORDER+'"/>').append(this.renderDragHandle());
B.$el.attr("data-id",this.model.id);
B.$el.append(C);
A.each(B.columns,function(F,G){var H,J=A("<td />"),I=D[G.id];
if(I){B.$el.attr("data-"+G.id,I)
}H=new AJS.Confluence.ConfigurableNav.ReadView().render(D);
J.append(H);
B.$el.append(J)
});
B.$el.append(E);
D.canHide&&D.hidden&&B.$el.addClass("hidden-link");
B.$el.addClass(this.classNames.ROW+" "+B.classNames.READ_ONLY+" acs-nav-item "+D.styleClass);
B.trigger(this._events.RENDER,this.$el,D);
B.$el.trigger(this._events.CONTENT_REFRESHED,[B.$el]);
return B
},renderOperations:function(F,E){var C=this,B=A('<a href="#" class="aui-icon aui-icon-small"/>');
if(F){function D(G){if(G.hasClass("hide-link")){G.attr("data-tooltip","Hide Link")
}else{G.attr("data-tooltip","Show Link")
}}B.addClass(E?"show-link":"hide-link").click(function(G){G.preventDefault();
A.ajax({url:C.model.url()+(E?"/show":"/hide"),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:AJS.Meta.get("space-key")})}).done(function(){B.closest(".acs-nav-item").toggleClass("hidden-link");
B.toggleClass("hide-link").toggleClass("show-link");
D(B)
})
});
D(B)
}else{B.addClass("delete-link").click(function(G){G.preventDefault();
C.destroy()
}).attr("data-tooltip","Remove Link")
}return B
},destroy:function(){this.model.destroy({data:{spaceKey:AJS.Meta.get("space-key")}})
}})
})(AJS.$);
(function(A){Confluence.Sidebar.Pages={installHandlers:function(B){B.find(".more-children-link").click(function(C){C.preventDefault();
B.find("ul.more-children").show();
A(this).hide()
})
},collapsedContent:function(){var B=A(".ia-secondary-header h5");
var C=A(".acs-side-bar .ia-secondary-content");
return A("<div>").append(B.clone()).append(C.find("ul.children").clone()).append(C.find("ul.more-children").clone()).append(C.find(".create-child-page-link").clone()).html()
}}
})(AJS.$);
AJS.$(function(E){Confluence.Sidebar.Configure={mode:false};
var C=AJS.Meta.get("context-path"),J=AJS.Meta.get("space-key"),M=E(".acs-side-bar"),K=M.find(".ia-secondary-container"),D=M.find(".project-shortcut-dialog-trigger"),B,O,N;
E.ajaxSetup({cache:false});
E("#acs-configure-link, a.configure-sidebar").click(function(Q){Q.preventDefault();
I()
});
function I(){Confluence.Sidebar.Configure.mode=true;
N=E(".acs-nav-sections .acs-nav-item.current-item").data("collector-key");
M.addClass("configure-mode");
B=Confluence.Sidebar.throbberDiv();
B.height(E(".acs-nav-sections").height());
E(".acs-nav-sections").replaceWith(B);
K.hide();
O=E('<div class="acs-nav-sections"></div>').hide();
B.after(O);
Confluence.Sidebar.Configure.$mainLinks=E('<table id="acs-nav-list-main" class="acs-nav-list"></table>');
Confluence.Sidebar.Configure.$quickLinks=E('<table id="acs-nav-list-quick" class="acs-nav-list"></table>');
O.append(Confluence.Sidebar.Configure.$mainLinks).append(Confluence.Sidebar.Configure.$quickLinks);
var T=E('<button class="aui-style aui-button aui-button-primary acs-done-link">'+"Done"+"</button>");
T.click(function(V){V.preventDefault();
P()
});
var U=E('<button class="aui-style aui-button acs-add-link">'+"Add link"+"</button>");
var S=E('<div class="buttons-wrapper"></div>');
S.append(T).append(U);
O.append(S);
G(false);
A();
L();
H();
var R={};
var Q=function(){B.replaceWith(O);
O.show()
};
Confluence.Sidebar.Configure.$mainLinks.one(AJS.RestfulTable.Events.INITIALIZED,function(){R.main=true;
R.quick&&Q()
});
Confluence.Sidebar.Configure.$quickLinks.one(AJS.RestfulTable.Events.INITIALIZED,function(){R.quick=true;
R.main&&Q()
});
Confluence.Sidebar.Configure.Logo.bind();
AJS.trigger("sidebar.enter-configure-mode")
}function P(){M.removeClass("configure-mode");
B=Confluence.Sidebar.throbberDiv();
B.height(O.height());
O.replaceWith(B);
G(true);
F();
K.show().css("display","");
var Q=function(){var S=E(Confluence.Templates.Sidebar.renderLinks({mainLinks:R.main,quickLinks:R.quick.reverse(),advancedLinks:R.advanced,hasConfigurePermission:true,collectorToHighlight:N}));
B.replaceWith(S);
E("#acs-configure-link, a.configure-sidebar").click(function(T){T.preventDefault();
I()
});
Confluence.Sidebar.Configure.mode=false;
AJS.trigger("sidebar.exit-configure-mode")
};
var R={};
E.get(C+"/rest/ia/1.0/link/main",{spaceKey:J,includeHidden:false}).done(function(S){R.main=S;
R.quick&&R.advanced&&Q()
});
E.get(C+"/rest/ia/1.0/link/quick",{spaceKey:J}).done(function(S){R.quick=S;
R.main&&R.advanced&&Q()
});
E.get(C+"/rest/ia/1.0/link/advanced",{spaceKey:J}).done(function(S){R.advanced=S;
R.main&&R.quick&&Q()
});
Confluence.Sidebar.Configure.Logo.unbind()
}function A(){var Q=new E.Deferred();
E(".acs-add-link").click(function(R){Q.done(function(){R.preventDefault();
Confluence.Sidebar.LinkAdapter.hijackLinkBrowser();
Confluence.Editor.LinkBrowser.open();
E("#recentlyviewed-panel-id").click()
})
});
if(AJS.Meta.get("page-id")){AJS.Confluence.EditorLoader.load(function(){Q.resolve()
},function(){AJS.log("Attempted to load editor for space ia side bar. Loading the editor failed.");
Q.reject()
})
}else{Q.resolve()
}}function L(){var S=E("<h5>"+"Space Shortcuts"+"</h5>");
var Q=Confluence.Sidebar.Configure.$quickLinks;
var T=E('<p class="tip">'+"Click \"Add link\" to add links to the sidebar."+"</p>").hide();
Q.before(S).after(T);
var R=function(){if(Confluence.Sidebar.Configure.QuickLinks.isEmpty()){Q.hide();
T.show()
}else{T.hide();
Q.show()
}};
AJS.bindEvt(AJS.RestfulTable.Events.INITIALIZED,R);
AJS.bindEvt(AJS.RestfulTable.Events.ROW_ADDED,R);
AJS.bindEvt(AJS.RestfulTable.Events.ROW_REMOVED,R)
}function H(){Confluence.Sidebar.Configure.MainLinks=new AJS.Confluence.ConfigurableNav({$el:E("#acs-nav-list-main"),resources:{all:C+"/rest/ia/1.0/link/main?spaceKey="+J+"&includeHidden=true",self:C+"/rest/ia/1.0/link"}});
Confluence.Sidebar.Configure.QuickLinks=new AJS.Confluence.ConfigurableNav({$el:E("#acs-nav-list-quick"),resources:{all:C+"/rest/ia/1.0/link/quick?spaceKey="+J,self:C+"/rest/ia/1.0/link"},reverseOrder:true})
}function F(){Confluence.Sidebar.Configure.MainLinks.remove();
Confluence.Sidebar.Configure.MainLinks.unbind();
Confluence.Sidebar.Configure.QuickLinks.remove();
Confluence.Sidebar.Configure.QuickLinks.unbind();
E(AJS).unbind(AJS.RestfulTable.Events.INITIALIZED);
E(AJS).unbind(AJS.RestfulTable.Events.ROW_ADDED);
E(AJS).unbind(AJS.RestfulTable.Events.ROW_REMOVED)
}function G(Q){D.length&&D.toggleClass("project-shortcut-dialog-trigger",Q)
}});
(function(D){var B,C;
Confluence.Sidebar.createFlyouts=function(H){B=G(D(".collapsed .quick-links-section"),function(){return D(".acs-side-bar .quick-links-section").html()
},"sidebar-quick-links-flyout",{flyout:"quick-links"});
A();
AJS.bind("sidebar.exit-configure-mode",A);
var I=H.find(".ia-secondary-container");
if(I.length&&I.attr("data-tree-type")=="pages"){C=G(D(".collapsed .ia-secondary-header-title.wiki"),Confluence.Sidebar.Pages.collapsedContent,"sidebar-children-flyout",{flyout:"children"})
}};
function G(H,K,J,M){var L=function(O,N,P){D(O).addClass("acs-side-bar-flyout ia-scrollable-section");
D(O).empty().append(K());
AJS.trigger("sidebar.flyout-triggered",M);
P();
D(N).one("click",function(Q){if(D("#inline-dialog-"+J).is(":visible")){setTimeout(function(){I.hide()
},0)
}});
AJS.trigger("sidebar.disable-tooltip",N)
};
var I=AJS.InlineDialog(H,J,L,{getArrowPath:E,calculatePositions:F,useLiveEvents:true,hideDelay:null,hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")
}});
D(window).scroll(function(){I.hide()
});
return I
}function F(I,L,Q,H){var R=L.target.offset();
var P=L.target.width();
var M=L.target.height();
var O={top:R.top+M/2-15,left:R.left+P+5,right:"auto"};
var J=D(window);
var N=20;
O.maxHeight=J.height()+J.scrollTop()-O.top-N;
if(D.browser.msie&&parseInt(D.browser.version,10)<=8){O.maxHeight-=40
}var K={top:9,left:-7};
return{displayAbove:false,popupCss:O,arrowCss:K}
}function E(){return"M8,16 L0,8,8,0"
}function A(){$settingsLink=D(".advanced-links-section li.settings a");
D(".acs-side-bar").on("click",".collapsed .advanced-links-section",function(){window.location.href=$settingsLink.attr("href")
})
}})(AJS.$);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)

(function(A){Confluence.Sidebar.LinkAdapter={setLink:function(D){var C=AJS.Meta.get("context-path");
var E=Confluence.unescapeEntities(D.getHtml());
var B={spaceKey:AJS.Meta.get("space-key"),pageId:D.attrs["data-linked-resource-id"],customTitle:E==D.getDefaultAlias()?"":E,url:D.attrs.href};
A.ajax({type:"POST",url:C+"/rest/ia/1.0/link",data:A.toJSON(B),dataType:"json",contentType:"application/json",success:function(F){AJS.Confluence.Sidebar.Configure.QuickLinks.addRow({id:F.id,title:F.title,styleClass:F.styleClass,canHide:F.canHide,hidden:F.hidden})
}})
},getLink:function(){return Confluence.Link.fromData({attrs:{},body:{isEditable:true,isImage:false,html:"",imgName:"",text:""}})
},hijackedLinkBrowser:false,hijackLinkBrowser:function(){var B=Confluence.Sidebar.LinkAdapter;
if(!B.hijackedLinkBrowser){B.storeBookmark=AJS.Rte.BookmarkManager.storeBookmark;
B.restoreBookmark=AJS.Rte.BookmarkManager.restoreBookmark;
AJS.Rte.BookmarkManager.storeBookmark=A.noop;
AJS.Rte.BookmarkManager.restoreBookmark=A.noop;
B.oldLinkAdapter=Confluence.Editor.LinkAdapter;
Confluence.Editor.LinkAdapter=B;
B.$oldTabItems=A("#link-browser-tab-items div");
B.$oldTabItems.each(function(){console.log("while iterating over tab items: "+A(this));
var C=A(this).text();
if(C!="search"&&C!="recentlyviewed"&&C!="weblink"){A(this).remove()
}});
B.hijackedLinkBrowser=true
}},releaseLinkBrowser:function(){var B=Confluence.Sidebar.LinkAdapter;
if(B.hijackedLinkBrowser){AJS.Rte.BookmarkManager.storeBookmark=B.storeBookmark;
AJS.Rte.BookmarkManager.restoreBookmark=B.restoreBookmark;
A("#link-browser-tab-items").empty().append(B.$oldTabItems);
Confluence.Editor.LinkAdapter=B.oldLinkAdapter;
B.hijackedLinkBrowser=false
}}};
AJS.bind("closed.link-browser",function(){if(Confluence.Sidebar.LinkAdapter.hijackedLinkBrowser){Confluence.Sidebar.LinkAdapter.releaseLinkBrowser()
}});
AJS.bind("updated.link-browser-recently-viewed",function(){var C=AJS.Meta.get("page-title"),B=AJS.Meta.get("space-name");
if(C&&B){A("#insert-link-dialog .recently-viewed-panel .data-table tr").each(function(){var D=A(this);
if(D.find(".title-field").text()==C&&D.find(".space-field").text()==B){D.click()
}})
}})
})(AJS.$);
AJS.$(function(G){Confluence.Sidebar.Configure.Logo={};
var E=AJS.Meta.get("context-path"),F=AJS.Meta.get("space-key");
Confluence.Sidebar.Configure.Logo.bind=function(){G(".acs-side-bar-space-info").on("click.configurelogo",function(I){H();
I.preventDefault();
return false
})
};
Confluence.Sidebar.Configure.Logo.unbind=function(){G("#inline-dialog-space-logo-config .cancel").click();
G(".acs-side-bar-space-info").off("click.configurelogo")
};
var C,A,D=G(".acs-side-bar-space-info div.name a").text(),B=false;
function H(){var K=function(T,S,V){var R=G("#logoType").val();
var U=G("img.avatar-img").attr("src");
G(T).addClass("acs-side-bar-flyout");
G(T).empty();
T.html(AJS.template.load("logo-config-content").fill({spaceName:D}));
O(R,U,R,U);
Q(R);
B=false;
T.unbind("mouseover mouseout");
AJS.trigger("sidebar.disable-tooltip",S);
V()
};
A=false;
if(!C){C=AJS.InlineDialog(G(".acs-side-bar-space-info"),"space-logo-config",K,{getArrowPath:P,calculatePositions:L,useLiveEvents:true,preHideCallback:function(){return A
},hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")
},hideDelay:null,noBind:true,width:635})
}function L(S,U,Y,R){var Z=U.target.offset();
var X=U.target.width();
var V=U.target.height();
var W={top:Z.top+V/2-15,left:Z.left+X+5,right:"auto"};
var T={top:9,left:-7};
return{displayAbove:false,popupCss:W,arrowCss:T}
}function P(){return"M8,16 L0,8,8,0"
}C.show();
function Q(R){if(R){G("#reset-logo").parent().toggleClass("hidden",R!=="custom")
}}function O(W,T,V,R){var S=G("#logoType");
var U=G("img.avatar-img");
if(W){S.val(W)
}if(T){U.attr("src",encodeURI(T));
U.hide(0,function(){U.show()
});
Q(W)
}if(V){S.attr("data-last-value",V)
}if(R){U.attr("data-last-value",R)
}}G("#reset-logo").click(function(){G.ajax({dataType:"json",contentType:"application/json",url:E+"/rest/ia/1.0/space/defaultLogo.json",error:function(R){J("An error has occurred while uploading the logo")
},success:function(S,T,U,R){O("default",E+S.logoDownloadPath);
B=true;
G("#image-holder").empty();
if(G.browser.msie){G("#upload-logo-input").replaceWith(G("#upload-logo-input").clone(true))
}else{G("#upload-logo-input").val("")
}}})
});
G("#inline-dialog-space-logo-config .cancel").click(function(){var R=G("#logoType").attr("data-last-value");
var S=G("img.avatar-img").attr("data-last-value");
O(R,S,R,S);
B=false;
A=true;
C.hide()
});
G("#inline-dialog-space-logo-config .save").click(function(){var R=G("#crop-photo-form"),S=G(this);
S.text("Saving...");
G.ajax({type:"POST",dataType:"json",contentType:"application/json",data:AJS.$.toJSON({spaceKey:G("#spaceKey",R).val(),spaceName:G("#spaceName",R).val(),offsetX:G("#avatar-offsetX",R).val(),offsetY:G("#avatar-offsetY",R).val(),width:G("#avatar-width",R).val(),logoType:G("#logoType",R).val()+(B?"":"-current")}),url:E+"/rest/ia/1.0/space/setLogo.json",resetForm:false,error:function(T){J("An error has occurred while uploading the logo")
},success:function(U,V,W,T){O(U.logoType,E+U.logoDownloadPath,U.logoType,E+U.logoDownloadPath);
B=false;
D=U.name;
$spaceTitle=G(".acs-side-bar-space-info div.name a");
$spaceTitle.attr("title",D);
$spaceTitle.text(D);
A=true;
C.hide()
},complete:function(){S.text("Save")
}})
});
G("#upload-logo-form").ajaxForm();
G("#crop-photo-form").ajaxForm();
G("#upload-logo-input").change(function(R){G(this).val()&&G("#upload-logo-form").ajaxSubmit({dataType:"text",data:{contentId:"upload-logo-input"},url:E+"/rest/ia/1.0/space/uploadLogo",resetForm:false,beforeSubmit:function(){var S=G("#image-holder");
S.html('<div class="loading-area"><span class="throbber"></span> <span class="upload-text"></span> </div>');
var U=S.find(".throbber");
var T=Raphael.spinner(U[0],7,"#666");
U.bind("remove",T);
G(".upload-text",S).text("Uploading...")
},error:function(S){G("#image-holder").empty();
J("An error has occurred while uploading the logo")
},success:function(T,U,V,S){T=G.parseJSON(T);
if(T&&T.downloadPath){M(E+T.downloadPath);
O("custom");
B=true
}else{G("#image-holder").empty();
if(T&&T.errorMessage){J(T.errorMessage)
}else{J("An error has occurred while uploading the logo")
}}}})
});
function M(S){var U=G("#image-holder");
var T=G("<img>",{id:"uploaded-space-logo",src:S}).hide();
var X=48;
var W=G("#avatar-offsetX"),V=G("#avatar-offsetY"),R=G("#avatar-width");
W.val("-1");
V.val("-1");
R.val("-1");
T.load(function(){if(T.height()<X||T.width()<X){N(T)
}else{I(T,X,W,V,R);
T.trigger("load.jcloader")
}});
U.empty().append(T)
}function N(R){R.show().wrap('<div class="small-logo-container"><div class="small-logo-wrapper"></div></div>')
}function I(S,W,V,U,R){function T(X){V.val(Math.floor(X.x));
U.val(Math.floor(X.y));
R.val(Math.floor(X.w))
}S.Jcrop({setSelect:[10,10,100,100],minSize:[W,W],boxWidth:450,boxHeight:400,aspectRatio:1,bgOpacity:0.5,onSelect:T,onChange:T,drawBorders:false,createHandles:["n","e","s","w"],allowSelect:false})
}function J(R){AJS.messages.error("#sidebar-logo-messages",{title:R});
G("#sidebar-logo-messages .icon-close").on("click",function(S){S.stopPropagation()
})
}}});
(function(A){A.Jcrop=function(E,c){var j=A.extend({},A.Jcrop.defaults),AH,AU,AJ=false;
function N(AV){return AV+"px"
}function e(AV){return j.baseClass+"-"+AV
}function f(){return A.fx.step.hasOwnProperty("backgroundColor")
}function g(AV){var AW=A(AV).offset();
return[AW.left,AW.top]
}function h(AV){return[(AV.pageX-AH[0]),(AV.pageY-AH[1])]
}function b(AV){if(typeof (AV)!=="object"){AV={}
}j=A.extend(j,AV);
A.each(["onChange","onSelect","onRelease","onDblClick"],function(AW,AX){if(typeof (j[AX])!=="function"){j[AX]=function(){}
}})
}function G(AX,AZ){AH=g(AS);
q.setCursor(AX==="move"?AX:AX+"-resize");
if(AX==="move"){return q.activateHandlers(s(AZ),R)
}var AV=AD.getFixed();
var AW=T(AX);
var AY=AD.getCorner(T(AW));
AD.setPressed(AD.getCorner(AW));
AD.setCurrent(AY);
q.activateHandlers(i(AX,AV),R)
}function i(AW,AV){return function(AX){if(!j.aspectRatio){switch(AW){case"e":AX[1]=AV.y2;
break;
case"w":AX[1]=AV.y2;
break;
case"n":AX[0]=AV.x2;
break;
case"s":AX[0]=AV.x2;
break
}}else{switch(AW){case"e":AX[1]=AV.y+1;
break;
case"w":AX[1]=AV.y+1;
break;
case"n":AX[0]=AV.x+1;
break;
case"s":AX[0]=AV.x+1;
break
}}AD.setCurrent(AX);
z.update()
}
}function s(AW){var AV=AW;
AR.watchKeys();
return function(AX){AD.moveOffset([AX[0]-AV[0],AX[1]-AV[1]]);
AV=AX;
z.update()
}
}function T(AV){switch(AV){case"n":return"sw";
case"s":return"nw";
case"e":return"nw";
case"w":return"ne";
case"ne":return"sw";
case"nw":return"se";
case"se":return"nw";
case"sw":return"ne"
}}function C(AV){return function(AW){if(j.disabled){return false
}if((AV==="move")&&!j.allowMove){return false
}AH=g(AS);
S=true;
G(AV,h(AW));
AW.stopPropagation();
AW.preventDefault();
return false
}
}function v(AZ,AW,AY){var AV=AZ.width(),AX=AZ.height();
if((AV>AW)&&AW>0){AV=AW;
AX=(AW/AZ.width())*AZ.height()
}if((AX>AY)&&AY>0){AX=AY;
AV=(AY/AZ.height())*AZ.width()
}n=AZ.width()/AV;
F=AZ.height()/AX;
AZ.width(AV).height(AX)
}function AB(AV){return{x:AV.x*n,y:AV.y*F,x2:AV.x2*n,y2:AV.y2*F,w:AV.w*n,h:AV.h*F}
}function R(AW){var AV=AD.getFixed();
if((AV.w>j.minSelect[0])&&(AV.h>j.minSelect[1])){z.enableHandles();
z.done()
}else{z.release()
}q.setCursor(j.allowSelect?"crosshair":"default")
}function AG(AV){if(j.disabled){return false
}if(!j.allowSelect){return false
}S=true;
AH=g(AS);
z.disableHandles();
q.setCursor("crosshair");
var AW=h(AV);
AD.setPressed(AW);
z.update();
q.activateHandlers(AQ,R);
AR.watchKeys();
AV.stopPropagation();
AV.preventDefault();
return false
}function AQ(AV){AD.setCurrent(AV);
z.update()
}function AI(){var AW=A("<div></div>").addClass(e("tracker"));
if(A.browser.msie){var AV=A("<div></div>");
AV.css({opacity:0,backgroundColor:"white",height:"100%",width:"100%"});
AW.append(AV)
}return AW
}if(A.browser.msie&&(A.browser.version.split(".")[0]==="6")){AJ=true
}if(typeof (E)!=="object"){E=A(E)[0]
}if(typeof (c)!=="object"){c={}
}b(c);
var J={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0};
var AA=A(E),AL=true;
if(E.tagName=="IMG"){if(AA[0].width!=0&&AA[0].height!=0){AA.width(AA[0].width);
AA.height(AA[0].height)
}else{var W=new Image();
W.src=AA[0].src;
AA.width(W.width);
AA.height(W.height)
}var AS=AA.clone().removeAttr("id").css(J).show();
AS.width(AA.width());
AS.height(AA.height());
AA.after(AS).hide()
}else{AS=AA.css(J).show();
AL=false;
if(j.shade===null){j.shade=true
}}v(AS,j.boxWidth,j.boxHeight);
var r=AS.width(),p=AS.height(),AC=A("<div />").width(r).height(p).addClass(e("holder")).css({position:"relative",backgroundColor:j.bgColor}).insertAfter(AA).append(AS);
if(j.addClass){AC.addClass(j.addClass)
}var k=A("<div />"),M=A("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),m=A("<div />").width("100%").height("100%").css("zIndex",320),a=A("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var AV=AD.getFixed();
j.onDblClick.call(I,AV)
}).insertBefore(AS).append(M,m);
if(AL){k=A("<img />").attr("src",AS.attr("src")).css(J).width(r).height(p),M.append(k)
}if(AJ){a.css({overflowY:"hidden"})
}var V=j.boundary;
var B=AI().width(r+(V*2)).height(p+(V*2)).css({position:"absolute",top:N(-V),left:N(-V),zIndex:290}).mousedown(AG);
var AP=j.bgColor,AE=j.bgOpacity,Z,AN,Q,u,n,F,P=true,S,d,AF;
AH=g(AS);
var t=(function(){function AV(){var Ac={},Aa=["touchstart","touchmove","touchend"],Ab=document.createElement("div"),AZ;
try{for(AZ=0;
AZ<Aa.length;
AZ++){var AX=Aa[AZ];
AX="on"+AX;
var AY=(AX in Ab);
if(!AY){Ab.setAttribute(AX,"return;");
AY=typeof Ab[AX]=="function"
}Ac[Aa[AZ]]=AY
}return Ac.touchstart&&Ac.touchend&&Ac.touchmove
}catch(Ad){return false
}}function AW(){if((j.touchSupport===true)||(j.touchSupport===false)){return j.touchSupport
}else{return AV()
}}return{createDragger:function(AX){return function(AY){AY.pageX=AY.originalEvent.changedTouches[0].pageX;
AY.pageY=AY.originalEvent.changedTouches[0].pageY;
if(j.disabled){return false
}if((AX==="move")&&!j.allowMove){return false
}S=true;
G(AX,h(AY));
AY.stopPropagation();
AY.preventDefault();
return false
}
},newSelection:function(AX){AX.pageX=AX.originalEvent.changedTouches[0].pageX;
AX.pageY=AX.originalEvent.changedTouches[0].pageY;
return AG(AX)
},isSupported:AV,support:AW()}
}());
var AD=(function(){var AX=0,Ai=0,AW=0,Ah=0,Aa,AY;
function Ac(Al){Al=AZ(Al);
AW=AX=Al[0];
Ah=Ai=Al[1]
}function Ab(Al){Al=AZ(Al);
Aa=Al[0]-AW;
AY=Al[1]-Ah;
AW=Al[0];
Ah=Al[1]
}function Ak(){return[Aa,AY]
}function AV(An){var Am=An[0],Al=An[1];
if(0>AX+Am){Am-=Am+AX
}if(0>Ai+Al){Al-=Al+Ai
}if(p<Ah+Al){Al+=p-(Ah+Al)
}if(r<AW+Am){Am+=r-(AW+Am)
}AX+=Am;
AW+=Am;
Ai+=Al;
Ah+=Al
}function Ad(Al){var Am=Aj();
switch(Al){case"ne":return[Am.x2,Am.y];
case"nw":return[Am.x,Am.y];
case"se":return[Am.x2,Am.y2];
case"sw":return[Am.x,Am.y2]
}}function Aj(){if(!j.aspectRatio){return Ag()
}var An=j.aspectRatio,Au=j.minSize[0]/n,Am=j.maxSize[0]/n,Ax=j.maxSize[1]/F,Ao=AW-AX,Aw=Ah-Ai,Ap=Math.abs(Ao),Aq=Math.abs(Aw),As=Ap/Aq,Al,At,Av,Ar;
if(Am===0){Am=r*10
}if(Ax===0){Ax=p*10
}if(As<An){At=Ah;
Av=Aq*An;
Al=Ao<0?AX-Av:Av+AX;
if(Al<0){Al=0;
Ar=Math.abs((Al-AX)/An);
At=Aw<0?Ai-Ar:Ar+Ai
}else{if(Al>r){Al=r;
Ar=Math.abs((Al-AX)/An);
At=Aw<0?Ai-Ar:Ar+Ai
}}}else{Al=AW;
Ar=Ap/An;
At=Aw<0?Ai-Ar:Ai+Ar;
if(At<0){At=0;
Av=Math.abs((At-Ai)*An);
Al=Ao<0?AX-Av:Av+AX
}else{if(At>p){At=p;
Av=Math.abs(At-Ai)*An;
Al=Ao<0?AX-Av:Av+AX
}}}if(Al>AX){if(Al-AX<Au){Al=AX+Au
}else{if(Al-AX>Am){Al=AX+Am
}}if(At>Ai){At=Ai+(Al-AX)/An
}else{At=Ai-(Al-AX)/An
}}else{if(Al<AX){if(AX-Al<Au){Al=AX-Au
}else{if(AX-Al>Am){Al=AX-Am
}}if(At>Ai){At=Ai+(AX-Al)/An
}else{At=Ai-(AX-Al)/An
}}}if(Al<0){AX-=Al;
Al=0
}else{if(Al>r){AX-=Al-r;
Al=r
}}if(At<0){Ai-=At;
At=0
}else{if(At>p){Ai-=At-p;
At=p
}}return Af(Ae(AX,Ai,Al,At))
}function AZ(Al){if(Al[0]<0){Al[0]=0
}if(Al[1]<0){Al[1]=0
}if(Al[0]>r){Al[0]=r
}if(Al[1]>p){Al[1]=p
}return[Al[0],Al[1]]
}function Ae(Ao,Aq,An,Ap){var As=Ao,Ar=An,Am=Aq,Al=Ap;
if(An<Ao){As=An;
Ar=Ao
}if(Ap<Aq){Am=Ap;
Al=Aq
}return[As,Am,Ar,Al]
}function Ag(){var Am=AW-AX,Al=Ah-Ai,An;
if(Z&&(Math.abs(Am)>Z)){AW=(Am>0)?(AX+Z):(AX-Z)
}if(AN&&(Math.abs(Al)>AN)){Ah=(Al>0)?(Ai+AN):(Ai-AN)
}if(u/F&&(Math.abs(Al)<u/F)){Ah=(Al>0)?(Ai+u/F):(Ai-u/F)
}if(Q/n&&(Math.abs(Am)<Q/n)){AW=(Am>0)?(AX+Q/n):(AX-Q/n)
}if(AX<0){AW-=AX;
AX-=AX
}if(Ai<0){Ah-=Ai;
Ai-=Ai
}if(AW<0){AX-=AW;
AW-=AW
}if(Ah<0){Ai-=Ah;
Ah-=Ah
}if(AW>r){An=AW-r;
AX-=An;
AW-=An
}if(Ah>p){An=Ah-p;
Ai-=An;
Ah-=An
}if(AX>r){An=AX-p;
Ah-=An;
Ai-=An
}if(Ai>p){An=Ai-p;
Ah-=An;
Ai-=An
}return Af(Ae(AX,Ai,AW,Ah))
}function Af(Al){return{x:Al[0],y:Al[1],x2:Al[2],y2:Al[3],w:Al[2]-Al[0],h:Al[3]-Al[1]}
}return{flipCoords:Ae,setPressed:Ac,setCurrent:Ab,getOffset:Ak,moveOffset:AV,getCorner:Ad,getFixed:Aj}
}());
var D=(function(){var Aa=false,Af=A("<div />").css({position:"absolute",zIndex:240,opacity:0}),AZ={top:Ab(),left:Ab().height(p),right:Ab().height(p),bottom:Ab()};
function Ah(Ai,Aj){AZ.left.css({height:N(Aj)});
AZ.right.css({height:N(Aj)})
}function AX(){return Ac(AD.getFixed())
}function Ac(Ai){AZ.top.css({left:N(Ai.x),width:N(Ai.w),height:N(Ai.y)});
AZ.bottom.css({top:N(Ai.y2),left:N(Ai.x),width:N(Ai.w),height:N(p-Ai.y2)});
AZ.right.css({left:N(Ai.x2),width:N(r-Ai.x2)});
AZ.left.css({width:N(Ai.x)})
}function Ab(){return A("<div />").css({position:"absolute",backgroundColor:j.shadeColor||j.bgColor}).appendTo(Af)
}function AY(){if(!Aa){Aa=true;
Af.insertBefore(AS);
AX();
z.setBgOpacity(1,0,1);
k.hide();
Ae(j.shadeColor||j.bgColor,1);
if(z.isAwake()){AW(j.bgOpacity,1)
}else{AW(1,1)
}}}function Ae(Ai,Aj){H(AV(),Ai,Aj)
}function Ag(){if(Aa){Af.remove();
k.show();
Aa=false;
if(z.isAwake()){z.setBgOpacity(j.bgOpacity,1,1)
}else{z.setBgOpacity(1,1,1);
z.disableHandles()
}H(AC,0,1)
}}function AW(Aj,Ai){if(Aa){if(j.bgFade&&!Ai){Af.animate({opacity:1-Aj},{queue:false,duration:j.fadeTime})
}else{Af.css({opacity:1-Aj})
}}}function Ad(){j.shade?AY():Ag();
if(z.isAwake()){AW(j.bgOpacity)
}}function AV(){return Af.children()
}return{update:AX,updateRaw:Ac,getShades:AV,setBgColor:Ae,enable:AY,disable:Ag,resize:Ah,refresh:Ad,opacity:AW}
}());
var z=(function(){var Ag,Ap=370,Ac={},As={},AX={},AZ=false;
function Ad(Aw){var Ax=A("<div />").css({position:"absolute",opacity:j.borderOpacity}).addClass(e(Aw));
M.append(Ax);
return Ax
}function AY(Aw,Ax){var Ay=A("<div />").mousedown(C(Aw)).css({cursor:Aw+"-resize",position:"absolute",zIndex:Ax}).addClass("ord-"+Aw);
if(t.support){Ay.bind("touchstart.jcrop",t.createDragger(Aw))
}m.append(Ay);
return Ay
}function Ah(Aw){var Ax=j.handleSize;
return AY(Aw,Ap++).css({opacity:j.handleOpacity}).width(Ax).height(Ax).addClass(e("handle"))
}function An(Aw){return AY(Aw,Ap++).addClass("jcrop-dragbar")
}function Ak(Aw){var Ax;
for(Ax=0;
Ax<Aw.length;
Ax++){AX[Aw[Ax]]=An(Aw[Ax])
}}function Ao(Aw){var Ax,Ay;
for(Ay=0;
Ay<Aw.length;
Ay++){switch(Aw[Ay]){case"n":Ax="hline";
break;
case"s":Ax="hline bottom";
break;
case"e":Ax="vline right";
break;
case"w":Ax="vline";
break
}Ac[Aw[Ay]]=Ad(Ax)
}}function Aj(Aw){var Ax;
for(Ax=0;
Ax<Aw.length;
Ax++){As[Aw[Ax]]=Ah(Aw[Ax])
}}function Af(Aw,Ax){if(!j.shade){k.css({top:N(-Ax),left:N(-Aw)})
}a.css({top:N(Ax),left:N(Aw)})
}function Av(Aw,Ax){a.width(Aw).height(Ax)
}function Aa(){var Aw=AD.getFixed();
AD.setPressed([Aw.x,Aw.y]);
AD.setCurrent([Aw.x2,Aw.y2]);
At()
}function At(Aw){if(Ag){return Ae(Aw)
}}function Ae(Aw){var Ax=AD.getFixed();
Av(Ax.w,Ax.h);
Af(Ax.x,Ax.y);
if(j.shade){D.updateRaw(Ax)
}Ag||Au();
if(Aw){j.onSelect.call(I,AB(Ax))
}else{j.onChange.call(I,AB(Ax))
}}function AW(Ax,Ay,Aw){if(!Ag&&!Ay){return 
}if(j.bgFade&&!Aw){AS.animate({opacity:Ax},{queue:false,duration:j.fadeTime})
}else{AS.css("opacity",Ax)
}}function Au(){a.show();
if(j.shade){D.opacity(AE)
}else{AW(AE,true)
}Ag=true
}function Aq(){Ar();
a.hide();
if(j.shade){D.opacity(1)
}else{AW(1)
}Ag=false;
j.onRelease.call(I)
}function AV(){if(AZ){m.show()
}}function Al(){AZ=true;
if(j.allowResize){m.show();
return true
}}function Ar(){AZ=false;
m.hide()
}function Am(Aw){if(d===Aw){Ar()
}else{Al()
}}function Ai(){Am(false);
Aa()
}if(j.dragEdges&&A.isArray(j.createDragbars)){Ak(j.createDragbars)
}if(A.isArray(j.createHandles)){Aj(j.createHandles)
}if(j.drawBorders&&A.isArray(j.createBorders)){Ao(j.createBorders)
}A(document).bind("touchstart.jcrop-ios",function(Aw){if(A(Aw.currentTarget).hasClass("jcrop-tracker")){Aw.stopPropagation()
}});
var Ab=AI().mousedown(C("move")).css({cursor:"move",position:"absolute",zIndex:360});
if(t.support){Ab.bind("touchstart.jcrop",t.createDragger("move"))
}M.append(Ab);
Ar();
return{updateVisible:At,update:Ae,release:Aq,refresh:Aa,isAwake:function(){return Ag
},setCursor:function(Aw){Ab.css("cursor",Aw)
},enableHandles:Al,enableOnly:function(){AZ=true
},showHandles:AV,disableHandles:Ar,animMode:Am,setBgOpacity:AW,done:Ai}
}());
var q=(function(){var AW=function(){},AY=function(){},AX=j.trackDocument;
function Af(){B.css({zIndex:450});
if(t.support){A(document).bind("touchmove.jcrop",Ae).bind("touchend.jcrop",Ab)
}if(AX){A(document).bind("mousemove.jcrop",AV).bind("mouseup.jcrop",AZ)
}}function Ad(){B.css({zIndex:290});
A(document).unbind(".jcrop")
}function AV(Ag){AW(h(Ag));
return false
}function AZ(Ag){Ag.preventDefault();
Ag.stopPropagation();
if(S){S=false;
AY(h(Ag));
if(z.isAwake()){j.onSelect.call(I,AB(AD.getFixed()))
}Ad();
AW=function(){};
AY=function(){}
}return false
}function Aa(Ah,Ag){S=true;
AW=Ah;
AY=Ag;
Af();
return false
}function Ae(Ag){Ag.pageX=Ag.originalEvent.changedTouches[0].pageX;
Ag.pageY=Ag.originalEvent.changedTouches[0].pageY;
return AV(Ag)
}function Ab(Ag){Ag.pageX=Ag.originalEvent.changedTouches[0].pageX;
Ag.pageY=Ag.originalEvent.changedTouches[0].pageY;
return AZ(Ag)
}function Ac(Ag){B.css("cursor",Ag)
}if(!AX){B.mousemove(AV).mouseup(AZ).mouseout(AZ)
}AS.before(B);
return{activateHandlers:Aa,setCursor:Ac}
}());
var AR=(function(){var AY=A('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}),Aa=A("<div />").css({position:"absolute",overflow:"hidden"}).append(AY);
function AW(){if(j.keySupport){AY.show();
AY.focus()
}}function AZ(Ab){AY.hide()
}function AX(Ac,Ab,Ad){if(j.allowMove){AD.moveOffset([Ab,Ad]);
z.updateVisible(true)
}Ac.preventDefault();
Ac.stopPropagation()
}function AV(Ac){if(Ac.ctrlKey||Ac.metaKey){return true
}AF=Ac.shiftKey?true:false;
var Ab=AF?10:1;
switch(Ac.keyCode){case 37:AX(Ac,-Ab,0);
break;
case 39:AX(Ac,Ab,0);
break;
case 38:AX(Ac,0,-Ab);
break;
case 40:AX(Ac,0,Ab);
break;
case 27:if(j.allowSelect){z.release()
}break;
case 9:return true
}return false
}if(j.keySupport){AY.keydown(AV).blur(AZ);
if(AJ||!j.fixedSupport){AY.css({position:"absolute",left:"-20px"});
Aa.append(AY).insertBefore(AS)
}else{AY.insertBefore(AS)
}}return{watchKeys:AW}
}());
function L(AV){AC.removeClass().addClass(e("holder")).addClass(AV)
}function U(Ao,Ac){var Ai=Ao[0]/n,AX=Ao[1]/F,Ah=Ao[2]/n,AW=Ao[3]/F;
if(d){return 
}var Ag=AD.flipCoords(Ai,AX,Ah,AW),Am=AD.getFixed(),Aj=[Am.x,Am.y,Am.x2,Am.y2],AZ=Aj,AY=j.animationDelay,Al=Ag[0]-Aj[0],Ab=Ag[1]-Aj[1],Ak=Ag[2]-Aj[2],Aa=Ag[3]-Aj[3],Af=0,Ad=j.swingSpeed;
x=AZ[0];
y=AZ[1];
Ah=AZ[2];
AW=AZ[3];
z.animMode(true);
var AV;
function Ae(){window.setTimeout(An,AY)
}var An=(function(){return function(){Af+=(100-Af)/Ad;
AZ[0]=x+((Af/100)*Al);
AZ[1]=y+((Af/100)*Ab);
AZ[2]=Ah+((Af/100)*Ak);
AZ[3]=AW+((Af/100)*Aa);
if(Af>=99.8){Af=100
}if(Af<100){AO(AZ);
Ae()
}else{z.done();
if(typeof (Ac)==="function"){Ac.call(I)
}}}
}());
Ae()
}function l(AV){AO([AV[0]/n,AV[1]/F,AV[2]/n,AV[3]/F]);
j.onSelect.call(I,AB(AD.getFixed()));
z.enableHandles()
}function AO(AV){AD.setPressed([AV[0],AV[1]]);
AD.setCurrent([AV[2],AV[3]]);
z.update()
}function K(){return AB(AD.getFixed())
}function AM(){return AD.getFixed()
}function X(AV){b(AV);
o()
}function Y(){j.disabled=true;
z.disableHandles();
z.setCursor("default");
q.setCursor("default")
}function w(){j.disabled=false;
o()
}function O(){z.done();
q.activateHandlers(null,null)
}function AK(){AC.remove();
AA.show();
A(E).removeData("Jcrop")
}function AT(AW,AX){z.release();
Y();
var AV=new Image();
AV.onload=function(){var AY=AV.width;
var Aa=AV.height;
var Ab=j.boxWidth;
var AZ=j.boxHeight;
AS.width(AY).height(Aa);
AS.attr("src",AW);
k.attr("src",AW);
v(AS,Ab,AZ);
r=AS.width();
p=AS.height();
k.width(r).height(p);
B.width(r+(V*2)).height(p+(V*2));
AC.width(r).height(p);
D.resize(r,p);
w();
if(typeof (AX)==="function"){AX.call(I)
}};
AV.src=AW
}function H(AY,AV,AW){var AX=AV||j.bgColor;
if(j.bgFade&&f()&&j.fadeTime&&!AW){AY.animate({backgroundColor:AX},{queue:false,duration:j.fadeTime})
}else{AY.css("backgroundColor",AX)
}}function o(AV){if(j.allowResize){if(AV){z.enableOnly()
}else{z.enableHandles()
}}else{z.disableHandles()
}q.setCursor(j.allowSelect?"crosshair":"default");
z.setCursor(j.allowMove?"move":"default");
if(j.hasOwnProperty("trueSize")){n=j.trueSize[0]/r;
F=j.trueSize[1]/p
}if(j.hasOwnProperty("setSelect")){l(j.setSelect);
z.done();
delete (j.setSelect)
}D.refresh();
if(j.bgColor!=AP){H(j.shade?D.getShades():AC,j.shade?(j.shadeColor||j.bgColor):j.bgColor);
AP=j.bgColor
}if(AE!=j.bgOpacity){AE=j.bgOpacity;
if(j.shade){D.refresh()
}else{z.setBgOpacity(AE)
}}Z=j.maxSize[0]||0;
AN=j.maxSize[1]||0;
Q=j.minSize[0]||0;
u=j.minSize[1]||0;
if(j.hasOwnProperty("outerImage")){AS.attr("src",j.outerImage);
delete (j.outerImage)
}z.refresh()
}if(t.support){B.bind("touchstart.jcrop",t.newSelection)
}m.hide();
o(true);
var I={setImage:AT,animateTo:U,setSelect:l,setOptions:X,tellSelect:K,tellScaled:AM,setClass:L,disable:Y,enable:w,cancel:O,release:z.release,destroy:AK,focus:AR.watchKeys,getBounds:function(){return[r*n,p*F]
},getWidgetSize:function(){return[r,p]
},getScaleFactor:function(){return[n,F]
},getOptions:function(){return j
},ui:{holder:AC,selection:a}};
if(A.browser.msie){AC.bind("selectstart",function(){return false
})
}AA.data("Jcrop",I);
return I
};
A.fn.Jcrop=function(B,D){var C;
this.each(function(){if(A(this).data("Jcrop")){if(B==="api"){return A(this).data("Jcrop")
}else{A(this).data("Jcrop").setOptions(B)
}}else{if(this.tagName=="IMG"){A.Jcrop.Loader(this,function(){A(this).css({display:"block",visibility:"hidden"});
C=A.Jcrop(this,B);
if(A.isFunction(D)){D.call(C)
}})
}else{A(this).css({display:"block",visibility:"hidden"});
C=A.Jcrop(this,B);
if(A.isFunction(D)){D.call(C)
}}}});
return this
};
A.Jcrop.Loader=function(F,G,C){var D=A(F),B=D[0];
function E(){if(B.complete){D.unbind(".jcloader");
if(A.isFunction(G)){G.call(B)
}}else{window.setTimeout(E,50)
}}D.bind("load.jcloader",E).bind("error.jcloader",function(H){D.unbind(".jcloader");
if(A.isFunction(C)){C.call(B)
}});
if(B.complete&&A.isFunction(G)){D.unbind(".jcloader");
G.call(B)
}};
A.Jcrop.defaults={allowSelect:true,allowMove:true,allowResize:true,trackDocument:true,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:0.6,bgFade:false,borderOpacity:0.4,handleOpacity:0.5,handleSize:7,aspectRatio:0,keySupport:true,createHandles:["n","s","e","w","nw","ne","se","sw"],createDragbars:["n","s","e","w"],createBorders:["n","s","e","w"],drawBorders:true,dragEdges:true,fixedSupport:true,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}}
}(jQuery));
