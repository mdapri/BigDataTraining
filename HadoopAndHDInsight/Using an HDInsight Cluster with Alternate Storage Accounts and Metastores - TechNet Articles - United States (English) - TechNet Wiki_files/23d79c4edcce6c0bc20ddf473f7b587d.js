Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;window.pmc=window.pmc||{};window.pmc.formatString=function(inValue){var newStr;if(typeof inValue=="undefined")return"";else if(typeof inValue=="string")newStr=inValue.toLowerCase().trim();else newStr=inValue.toString().toLowerCase().trim();newStr=newStr.replace(/"/g,"'");return newStr};window.pmc.passScriptCheck=function(inText){if(typeof inText!="undefined")if(inText.match(/<script/i)){window.pmc.debugLog("passScriptCheck failed");
return false}return true};window.pmc.setAttribute=function(inJQObj,inAttrName,inAttrValue){if(typeof inJQObj=="undefined"||inJQObj.length===0||!inAttrName||inAttrValue==="")return;inJQObj.attr(inAttrName,inAttrValue)};window.pmc.getMetaTagContent=function(inMTName){try{var myMTContent=jQuery("meta[name\x3d'"+inMTName+"']");if(myMTContent.length>0)myMTContent=myMTContent[myMTContent.length-1].content;else myMTContent=null;return myMTContent}catch(e){return null}};window.pmc.setMetaTagContent=function(inMTName,
inMTContent){if(!inMTContent)return;else if(window.pmc.getMetaTagContent(inMTName)===null){var myMetaTag=document.createElement("meta");myMetaTag.name=inMTName;myMetaTag.content=inMTContent;if(window.pmc.passScriptCheck(myMetaTag.content))document.getElementsByTagName("head")[0].appendChild(myMetaTag)}else jQuery("meta[name\x3d'"+inMTName+"']").attr("content",inMTContent)};window.pmc.checkMetaTags=function(name,val){var metaTag=document.querySelector('meta[name\x3d"'+name+'"]');if(!metaTag)window.pmc.setMetaTagContent(name,
val)};window.pmc.webtrendsCheck=function(name,val,alt){var reg=new RegExp(name,"i");jQuery("meta").each(function(){var jqName=jQuery(this).attr("name");if(jqName)if(jQuery(this).attr("name").match(reg)){var wtContent=jQuery(this).attr("content");wtContent=wtContent.replace(/_/g,"");window.pmc.setMetaTagContent(val,wtContent)}else if(alt)window.pmc.setMetaTagContent(val,alt)})};window.pmc.webtrendsLangLocCheck=function(msLang,msLoc,lang,loc){var wtVar=document.querySelector('meta[name\x3d"DCSext.WClocale"]');
if(wtVar){var wtContent=wtVar.content;wtContent=wtContent.replace(/_/g,"");wtLang=wtContent.split("-")[0];wtLoc=wtContent.split("-")[1];window.pmc.setMetaTagContent(msLang,wtLang);window.pmc.setMetaTagContent(msLoc,wtLoc)}else{window.pmc.setMetaTagContent(msLang,lang);window.pmc.setMetaTagContent(msLoc,loc)}};window.pmc.pageLoad=function(){window.pmc.libraryTaggingEnabled=false;if(window.location.href.match(/technet\.microsoft\.com/)||window.location.href.match(/technet\.com/i)){window.pmc.checkMetaTags("ms.env",
"production");var lang,loc;var langLoc=window.location.href.match(/\/..-..\//);if(langLoc){var grabbed_langLoc=langLoc[0];var grabbed_lang=grabbed_langLoc.split("-")[0];var grabbed_loc=grabbed_langLoc.split("-")[1];lang=grabbed_lang.replace("/","");loc=grabbed_loc.replace("/","");window.pmc.checkMetaTags("ms.lang",lang);window.pmc.checkMetaTags("ms.loc",loc)}else{var userLang=navigator.language||navigator.userLanguage;lang=userLang.split("-")[0];loc=userLang.split("-")[1];window.pmc.checkMetaTags("ms.lang",
lang);window.pmc.checkMetaTags("ms.loc",loc)}}window.pmc.pageTitle=window.pmc.formatString(jQuery(document).find("title").text());if(window.location.href.match(/technet\.microsoft\.com(\/..-..)?\/library/i)){window.pmc.checkMetaTags("ms.sitesec","library");window.pmc.msTitle="library;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle);window.pmc.libraryTaggingEnabled=true}else if(window.location.href.match(/social\.technet\.microsoft\.com\/wiki/i)){window.pmc.checkMetaTags("ms.sitesec",
"wiki");window.pmc.msTitle="wiki;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com(\/..-..)?\/bb291022/i)||window.location.href.match(/technet\.microsoft\.com(\/..-..)?\/dd644554/i)||window.location.href.match(/technet\.microsoft\.com(\/..-..)?\/cc138021/i)||window.location.href.match(/technet\.microsoft\.com(\/..-..)?\/ff871920/i)){window.pmc.checkMetaTags("ms.sitesec","learn");window.pmc.msTitle="learn;"+window.pmc.pageTitle;
window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/gallery\.technet\.microsoft/i)){window.pmc.checkMetaTags("ms.sitesec","gallery");window.pmc.msTitle="gallery;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.pathname.match(/technet\.microsoft\.com(\/..-..)?\/bb403698/i)){window.pmc.checkMetaTags("ms.sitesec","downloads");window.pmc.msTitle="downloads;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",
window.pmc.msTitle)}else if(window.location.pathname.match(/technet\.microsoft\.com(\/..-..)?\/ms772425/i)){window.pmc.checkMetaTags("ms.sitesec","support");window.pmc.msTitle="support;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/social\.technet\.microsoft.com\/forums/i)){window.pmc.checkMetaTags("ms.sitesec","forums");window.pmc.msTitle="forums;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/blogs\.technet\.com/i)){window.pmc.checkMetaTags("ms.sitesec",
"blogs");window.pmc.msTitle="blogs;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/social\.technet\.microsoft\.com\/search\//i)){window.pmc.checkMetaTags("ms.sitesec","search");window.pmc.msTitle="search;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle);var url=window.location.href;if(url.match(/query=/i)){var titleToSearch=window.pmc.msTitle.split(" - microsoft technet search")[0];var removedSec=titleToSearch.split(";")[1];
window.pmc.checkMetaTags("ms.searchquery",removedSec)}}else if(window.location.href.match(/technet\.microsoft\.com\/((..-..)?\/?(((default)(\.aspx)?)?|(ms\d+(\.aspx)?)?))$/i)||window.location.href.match(/^technet\.microsoft\.com\/..-..\/.*$/i)){window.pmc.checkMetaTags("ms.sitesec","home");window.pmc.msTitle="home;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/windows/i)){window.pmc.msTitle="windows;"+
window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle);window.pmc.webtrendsCheck("DCSext.WCarea","ms.sitesec","windows");window.pmc.webtrendsLangLocCheck("ms.lang","ms.loc",lang,loc);window.pmc.webtrendsCheck("DCSext.Wclifecycle","ms.mkgtlfcycl");window.pmc.webtrendsCheck("DCSext.WCversion","ms.prod");window.pmc.webtrendsCheck("DCSext.WCzone","ms.pgtyp")}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/ie/i)){window.pmc.checkMetaTags("ms.sitesec","internet explorer");
window.pmc.msTitle="internet explorer;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/sqlserver/i)){window.pmc.checkMetaTags("ms.sitesec","sql server");window.pmc.msTitle="sql server;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/scriptcenter\//i)){window.pmc.checkMetaTags("ms.sitesec","script center");
window.pmc.msTitle="script center;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="office;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788774/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle=
"office 365;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788775/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="exchange server;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788776/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="sharepoint products;"+
window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788773/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="lync;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788954/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="lync;"+window.pmc.pageTitle;
window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788774/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="office 365 for it pros;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/fp160948/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="office for it pros;"+window.pmc.pageTitle;
window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788776/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="sharepoint for it pros;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788775/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="exchange for it pros;"+window.pmc.pageTitle;
window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788773/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="lync server for it pros;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn788778/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="project server for it pros;"+
window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}else if(window.location.href.match(/technet\.microsoft\.com\/..-..\/office\/dn770220/i)){window.pmc.checkMetaTags("ms.sitesec","office");window.pmc.msTitle="support for office products;"+window.pmc.pageTitle;window.pmc.checkMetaTags("ms.title",window.pmc.msTitle)}};window.pmc.setAttribute=function(inJQObj,inAttrName,inAttrValue){if(typeof inJQObj=="undefined"||inJQObj.length===0||!inAttrName||inAttrValue==="")return;inJQObj.attr(inAttrName,
inAttrValue)};window.pmc.wedcsUCTracking=[];window.pmc.currUC="";window.pmc.setWEDCSAttributes=function(inJQObj,inCmpgrp,inCmpnm,inIndex){var newUCTLen=window.pmc.wedcsUCTracking.push(window.pmc.currUC);window.pmc.setAttribute(inJQObj,"data-pmcucidx",newUCTLen-1);window.pmc.setAttribute(inJQObj,"ms.cmpgrp",inCmpgrp);window.pmc.setAttribute(inJQObj,"ms.cmpnm",inCmpnm);window.pmc.setAttribute(inJQObj,"ms.index",inIndex)};window.pmc.processWEDCSCustomEventFromArray=function(inArray){if(typeof window.MscomCustomEvent!=
"function")return;if(typeof inArray=="undefined"||inArray===null||inArray.length===0){window.MscomCustomEvent();return}window.MscomCustomEvent.apply(this,inArray)};window.pmc.processWEDCSCustomEventFromJQObj=function(inJQObj){if(typeof inJQObj=="undefined"||inJQObj===null||inJQObj.length===0){window.pmc.processWEDCSCustomEventFromArray();return}var myWEDCDAttrArray=[];jQuery(inJQObj[0].attributes).each(function(){if(this.nodeName&&this.nodeName.indexOf("ms.")===0)myWEDCDAttrArray.push(this.nodeName,
this.nodeValue)});window.pmc.processWEDCSCustomEventFromArray(myWEDCDAttrArray)};window.pmc.cleanSearchQuery=function(searchVal){var cleanedQuery;cleanedQuery=searchVal.replace(/(<([^>]+)>)/ig,"");cleanedQuery=searchVal.replace(/"/g,"'");cleanedQuery=searchVal.replace(/&/g,"+");return cleanedQuery};window.pmc.tagForSearch=function(){var cleanedQuery;window.pmc.currUC="Bing Searchbox; top of page";try{jQuery("button#HeaderSearchButton").mousedown(function(){var searchVal=window.pmc.formatString(jQuery("#HeaderSearchTextBox").val());
cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))})}catch(e){}try{jQuery("input#HeaderSearchButton").mousedown(function(){var searchVal=window.pmc.formatString(jQuery("#HeaderSearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery)})}catch(e){}window.pmc.currUC="Bing Searchbox; top of page on wiki sections";
try{jQuery("#Header_SearchButton").mousedown(function(){var searchVal=window.pmc.formatString(jQuery("#Header_SearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery)})}catch(e){}jQuery("input#Header_SearchTextBox").keydown(function(event){if(event.which==13){var searchVal=window.pmc.formatString(jQuery("#Header_SearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),
"ms.searchquery",cleanedQuery);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}});window.pmc.currUC="Bing small Searchbox; top center of page";try{jQuery("#SearchButton").mousedown(function(){var searchVal=window.pmc.formatString(jQuery("#SearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery)})}catch(e){}try{jQuery("#HeaderSearchTextBox").keydown(function(event){if(event.which==13){var searchVal=window.pmc.formatString(jQuery("#HeaderSearchTextBox").val());
cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}})}catch(e){}jQuery("#HeaderSearchTextBox").off("mousedown").on("mousedown",function(){jQuery("#SuggestionContainer ul").off("mousedown").on("mousedown",function(){var term=window.pmc.formatString(jQuery("input[title*\x3d'Search']").val());window.pmc.setAttribute(jQuery(this),"ms.searchquery",term);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))})});
jQuery("#SuggestionContainer ul").off("mousedown").on("mousedown",function(){var term=window.pmc.formatString(jQuery("input[title*\x3d'Search']").val());window.pmc.setAttribute(jQuery(this),"ms.searchquery",term);if(window.location.pathname.match(/\/search\//i)){window.pmc.setMetaTagContent("ms.searchquery",term);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}else window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))});try{jQuery("#SearchTextBox").on("input",function(){var searchText=
jQuery(this).val();jQuery(this).attr("ms.searchquery",searchText);jQuery("a#SearchSubmitImage").attr("ms.searchquery",searchText)})}catch(e){}try{jQuery("#SearchSubmitImage").on("mousedown",function(){var searchVal=window.pmc.formatString(jQuery("#SearchTextBox").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);if(window.location.pathname.match(/\/search\//i))window.pmc.setMetaTagContent("ms.searchquery",cleanedQuery)})}catch(e){}try{jQuery("input.search-button[title*\x3d'Search TechNet with Bing']").mousedown(function(){var searchVal=
window.pmc.formatString(jQuery("input[name*\x3d'SearchTextBox']").val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);if(window.location.pathname.match(/\/search\//i))window.pmc.setMetaTagContent("ms.searchquery",cleanedQuery)})}catch(e){}try{jQuery("input[name*\x3d'SearchTextBox']").on("keydown",function(event){if(event.which==13){var searchVal=window.pmc.formatString(jQuery(this).val());cleanedQuery=window.pmc.cleanSearchQuery(searchVal);
window.pmc.setAttribute(jQuery(this),"ms.searchquery",cleanedQuery);if(window.location.pathname.match(/\/search\//i)){window.pmc.setMetaTagContent("ms.searchquery",cleanedQuery);window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}else window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))}})}catch(e){}};window.pmc.tagLeftNav=function(){var tCmpGrp="";var tCmpNm="";window.pmc.navIndex="0";var currentLevel,prevLevel,prevCmpNmLevel,splitCmpNmLevel;window.pmc.currUC="Left nav dropdown items";
jQuery('#leftNav div[data-toclevel] a:not([class*\x3d"toc_"]):not([data-pmcucidx])').each(function(){var parentDropText=window.pmc.formatString(jQuery(this).closest("div[data-toclevel]").prevAll(".toclevel1:first").find("a").eq(1).text());var levelNum=parseInt(jQuery(this).closest("div[data-toclevel]").attr("data-toclevel"),10);if(levelNum===0||levelNum===1)parentDropText=window.pmc.formatString(jQuery(this).text());else if(levelNum===-1){levelNum=0;parentDropText=window.pmc.formatString(jQuery(this).text())}tCmpNm=
parentDropText+";"+levelNum;currentLevel=jQuery(this).closest("div").attr("data-toclevel");prevLevel=jQuery(this).closest("div").prev().attr("data-toclevel");window.pmc.setWEDCSAttributes(jQuery(this),"table of contents",tCmpNm);try{if(currentLevel!==prevLevel){window.pmc.navIndex="0";window.pmc.setAttribute(jQuery(this),"ms.index",window.pmc.navIndex)}else{window.pmc.navIndex++;window.pmc.setAttribute(jQuery(this),"ms.index",window.pmc.navIndex)}}catch(e){}})};window.pmc.tagElements=function(){var tCmpGrp=
"";var tCmpNm="";var sideNavCounter=0;var cmpnmCheck="";window.pmc.tagLeftNav();window.pmc.currUC="body directory links";jQuery("#content .navpage ul li a").each(function(index){tCmpNm=window.pmc.formatString(jQuery(this).closest("ul").prev().text());tCmpGrp=window.pmc.formatString(jQuery(this).closest(".navpage").find(":header:first").text());window.pmc.setWEDCSAttributes(jQuery(this),tCmpGrp,tCmpNm,index)});window.pmc.currUC="alternative see also directory links";jQuery(".navpage div[style*\x3d'float'] a").each(function(index){tCmpNm=
window.pmc.formatString(jQuery(this).closest("ul").prev().text());if(tCmpNm===""){tCmpNm=window.pmc.formatString(jQuery("div[style*\x3d'clear:both']").next().text());tCmpNm=tCmpNm.replace(":","")}tCmpGrp=window.pmc.formatString(jQuery(this).closest(".navpage").find(":header:first").text());window.pmc.setWEDCSAttributes(jQuery(this),tCmpGrp,tCmpNm,index)});window.pmc.verbatim="";try{jQuery(".feedbackContainer textarea").on("keyup",function(){window.pmc.verbatim=jQuery(this).val();window.pmc.verbatim=
window.pmc.verbatim.substring(0,700);window.pmc.verbatim=window.pmc.verbatim.replace(/(<([^>]+)>)/ig,"");window.pmc.verbatim=window.pmc.verbatim.replace(/"/g,"'");window.pmc.verbatim=window.pmc.verbatim.replace(/&/g,"+")})}catch(e){}try{jQuery("#feedbackSection4 button").on("mousedown",function(){tCmpNm=window.pmc.formatString(jQuery("#feedbackSection1 input").closest(".clear").children(".left:first").text());tCmpNm=tCmpNm.replace("?","");window.pmc.setWEDCSAttributes(jQuery(this),"user feedback",
tCmpNm,"0");window.pmc.checkText="";jQuery('#feedbackSection3 input[name*\x3d"chkbxNo"]').each(function(){if(jQuery(this).is(":checked"))window.pmc.checkText+=";1";else window.pmc.checkText+=";0"});jQuery("#feedbackSection1 input:checked").each(function(){if(jQuery(this).attr("id")=="feedbackYes")window.pmc.radioChoice="y";else window.pmc.radioChoice="n"});var scnct="";if(window.pmc.checkText==="")window.pmc.setAttribute(jQuery(this),"ms.scnct",window.pmc.radioChoice);else{if(window.pmc.radioChoice==
"y")scnct=window.pmc.radioChoice;else scnct=window.pmc.radioChoice+window.pmc.checkText;window.pmc.setAttribute(jQuery(this),"ms.scnct",scnct)}if(window.pmc.verbatim!=="")window.pmc.setAttribute(jQuery(this),"ms.scn",window.pmc.verbatim);else window.pmc.setAttribute(jQuery(this),"ms.scn","no comment");window.pmc.processWEDCSCustomEventFromJQObj(jQuery(this))})}catch(e){}};jQuery(document).ajaxComplete(function(){window.pmc.tagLeftNav()});window.pmc.callMSJS=function(){window.pmc.pageLoad();window.varClickTracking=
1;window.varCustomerTracking=0;window.varAutoFirePV=1;window.route="";window.ctrl="";var script=document.createElement("script");script.type="text/javascript";script.src=window.location.protocol+"//c.microsoft.com/ms.js";document.getElementsByTagName("head")[0].appendChild(script);window.pmc.tagForSearch();if(window.pmc.libraryTaggingEnabled)window.pmc.tagElements()};jQuery(document).ready(function(){window.pmc.callMSJS()})},730125,292689);