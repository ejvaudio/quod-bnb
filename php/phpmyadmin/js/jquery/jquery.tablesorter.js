(function(i){i.extend({tablesorter:new function(){function c(a,b){n(a+","+((new Date).getTime()-b.getTime())+"ms")}function n(a){typeof console!="undefined"&&typeof console.debug!="undefined"?console.log(a):alert(a)}function o(a,b){if(a.config.debug)var d="";if(a.tBodies.length!=0){var e=a.tBodies[0].rows;if(e[0])for(var f=[],l=e[0].cells.length,g=0;g<l;g++){var h=false;if(i.metadata&&i(b[g]).metadata()&&i(b[g]).metadata().sorter)h=u(i(b[g]).metadata().sorter);else if(a.config.headers[g]&&a.config.headers[g].sorter)h=
u(a.config.headers[g].sorter);if(!h)a:{h=a;for(var j=e,k=-1,q=g,m=s.length,p=false,v=false,B=true;v==""&&B;){k++;if(j[k]){p=j[k].cells[q];v=i.trim(y(h.config,p));h.config.debug&&n("Checking if value was empty on row:"+k)}else B=false}for(j=1;j<m;j++)if(s[j].is(v,h,p)){h=s[j];break a}h=s[0]}if(a.config.debug)d+="column:"+g+" parser:"+h.id+"\n";f.push(h)}a.config.debug&&n(d);return f}}function u(a){for(var b=s.length,d=0;d<b;d++)if(s[d].id.toLowerCase()==a.toLowerCase())return s[d];return false}function t(a){if(a.config.debug)var b=
new Date;for(var d=a.tBodies[0]&&a.tBodies[0].rows.length||0,e=a.tBodies[0].rows[0]&&a.tBodies[0].rows[0].cells.length||0,f=a.config.parsers,l={row:[],normalized:[]},g=0;g<d;++g){var h=i(a.tBodies[0].rows[g]),j=[];if(h.hasClass(a.config.cssChildRow))l.row[l.row.length-1]=l.row[l.row.length-1].add(h);else{l.row.push(h);for(var k=0;k<e;++k)j.push(f[k].format(y(a.config,h[0].cells[k]),a,h[0].cells[k]));j.push(l.normalized.length);l.normalized.push(j)}}a.config.debug&&c("Building cache for "+d+" rows:",
b);return l}function y(a,b){var d="";if(!b)return"";if(!a.supportsTextContent)a.supportsTextContent=b.textContent||false;return d=a.textExtraction=="simple"?a.supportsTextContent?b.textContent:b.childNodes[0]&&b.childNodes[0].hasChildNodes()?b.childNodes[0].innerHTML:b.innerHTML:typeof a.textExtraction=="function"?a.textExtraction(b):i(b).text()}function z(a,b){if(a.config.debug)var d=new Date;for(var e=b.row,f=b.normalized,l=f.length,g=f[0].length-1,h=i(a.tBodies[0]),j=[],k=0;k<l;k++){var q=f[k][g];
j.push(e[q]);if(!a.config.appender)for(var m=e[q].length,p=0;p<m;p++)h[0].appendChild(e[q][p])}a.config.appender&&a.config.appender(a,j);j=null;a.config.debug&&c("Rebuilt table:",d);A(a);setTimeout(function(){i(a).trigger("sortEnd")},0)}function G(a){if(a.config.debug)var b=new Date;var d=H(a);$tableHeaders=i(a.config.selectorHeaders,a).each(function(e){this.column=d[this.parentNode.rowIndex+"-"+this.cellIndex];this.count=this.order=typeof a.config.sortInitialOrder!="Number"?a.config.sortInitialOrder.toLowerCase()==
"desc"?1:0:a.config.sortInitialOrder==1?1:0;var f;f=i.metadata&&i(this).metadata().sorter===false?true:false;if(!(f=f))f=a.config.headers[e]&&a.config.headers[e].sorter===false?true:false;if(f)this.sortDisabled=true;if(C(a,e))this.order=this.lockedOrder=C(a,e);if(!this.sortDisabled){f=i(this).addClass(a.config.cssHeader);a.config.onRenderHeader&&a.config.onRenderHeader.apply(f)}a.config.headerList[e]=this});if(a.config.debug){c("Built headers:",b);n($tableHeaders)}return $tableHeaders}function H(a){var b=
[],d={};a=a.getElementsByTagName("THEAD")[0].getElementsByTagName("TR");for(var e=0;e<a.length;e++)for(var f=a[e].cells,l=0;l<f.length;l++){var g=f[l],h=g.parentNode.rowIndex,j=h+"-"+g.cellIndex,k=g.rowSpan||1;g=g.colSpan||1;var q;if(typeof b[h]=="undefined")b[h]=[];for(var m=0;m<b[h].length+1;m++)if(typeof b[h][m]=="undefined"){q=m;break}d[j]=q;for(m=h;m<h+k;m++){if(typeof b[m]=="undefined")b[m]=[];j=b[m];for(var p=q;p<q+g;p++)j[p]="x"}}return d}function C(a,b){if(a.config.headers[b]&&a.config.headers[b].lockedOrder)return a.config.headers[b].lockedOrder;
return false}function A(a){for(var b=a.config.widgets,d=b.length,e=0;e<d;e++)D(b[e]).format(a)}function D(a){for(var b=w.length,d=0;d<b;d++)if(w[d].id.toLowerCase()==a.toLowerCase())return w[d]}function I(a,b){for(var d=b.length,e=0;e<d;e++)if(b[e][0]==a)return true;return false}function E(a,b,d,e){b.removeClass(e[0]).removeClass(e[1]);var f=[];b.each(function(){this.sortDisabled||(f[this.column]=i(this))});a=d.length;for(b=0;b<a;b++)f[d[b][0]].addClass(e[d[b][1]])}function J(a){if(a.config.widthFixed){var b=
i("<colgroup>");i("tr:first td",a.tBodies[0]).each(function(){b.append(i("<col>").css("width",i(this).width()))});i(a).prepend(b)}}function F(a,b,d){if(a.config.debug)var e=new Date;for(var f="var sortWrapper = function(a,b) {",l=b.length,g=0;g<l;g++){var h=b[g][0],j=b[g][1];h=a.config.parsers[h].type=="text"?j==0?x("text","asc",h):x("text","desc",h):j==0?x("numeric","asc",h):x("numeric","desc",h);var k="e"+g;f+="var "+k+" = "+h;f+="if("+k+") { return "+k+"; } ";f+="else { "}g=d.normalized[0].length-
1;f+="return a["+g+"]-b["+g+"];";for(g=0;g<l;g++)f+="}; ";f+="return 0; ";f+="}; ";a.config.debug&&c("Evaling expression:"+f,new Date);eval(f);d.normalized.sort(sortWrapper);a.config.debug&&c("Sorting on "+b.toString()+" and dir "+j+" time:",e);return d}function x(a,b,d){var e="a["+d+"]";d="b["+d+"]";if(a=="text"&&b=="asc")return"("+e+" == "+d+" ? 0 : ("+e+" === null ? Number.POSITIVE_INFINITY : ("+d+" === null ? Number.NEGATIVE_INFINITY : ("+e+" < "+d+") ? -1 : 1 )));";else if(a=="text"&&b=="desc")return"("+
e+" == "+d+" ? 0 : ("+e+" === null ? Number.POSITIVE_INFINITY : ("+d+" === null ? Number.NEGATIVE_INFINITY : ("+d+" < "+e+") ? -1 : 1 )));";else if(a=="numeric"&&b=="asc")return"("+e+" === null && "+d+" === null) ? 0 :("+e+" === null ? Number.POSITIVE_INFINITY : ("+d+" === null ? Number.NEGATIVE_INFINITY : "+e+" - "+d+"));";else if(a=="numeric"&&b=="desc")return"("+e+" === null && "+d+" === null) ? 0 :("+e+" === null ? Number.POSITIVE_INFINITY : ("+d+" === null ? Number.NEGATIVE_INFINITY : "+d+" - "+
e+"));"}var s=[],w=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:"/.|,/g",onRenderHeader:null,selectorHeaders:"thead th",debug:false};this.benchmark=c;this.construct=
function(a){return this.each(function(){if(this.tHead&&this.tBodies){var b,d,e,f;this.config={};f=i.extend(this.config,i.tablesorter.defaults,a);b=i(this);i.data(this,"tablesorter",f);d=G(this);this.config.parsers=o(this,d);e=t(this);var l=[f.cssDesc,f.cssAsc];J(this);d.click(function(g){var h=b[0].tBodies[0]&&b[0].tBodies[0].rows.length||0;if(!this.sortDisabled&&h>0){b.trigger("sortStart");i(this);h=this.column;this.order=this.count++%2;if(this.lockedOrder)this.order=this.lockedOrder;if(g[f.sortMultiSortKey])if(I(h,
f.sortList))for(g=0;g<f.sortList.length;g++){var j=f.sortList[g],k=f.headerList[j[0]];if(j[0]==h){k.count=j[1];k.count++;j[1]=k.count%2}}else f.sortList.push([h,this.order]);else{f.sortList=[];if(f.sortForce!=null){j=f.sortForce;for(g=0;g<j.length;g++)j[g][0]!=h&&f.sortList.push(j[g])}f.sortList.push([h,this.order])}setTimeout(function(){E(b[0],d,f.sortList,l);z(b[0],F(b[0],f.sortList,e))},1);return false}}).mousedown(function(){if(f.cancelSelection){this.onselectstart=function(){return false};return false}});
b.bind("update",function(){var g=this;setTimeout(function(){g.config.parsers=o(g,d);e=t(g)},1)}).bind("updateCell",function(g,h){var j=this.config,k=[h.parentNode.rowIndex-1,h.cellIndex];e.normalized[k[0]][k[1]]=j.parsers[k[1]].format(y(j,h),h)}).bind("sorton",function(g,h){i(this).trigger("sortStart");f.sortList=h;for(var j=f.sortList,k=this.config,q=j.length,m=0;m<q;m++){var p=j[m],v=k.headerList[p[0]];v.count=p[1];v.count++}E(this,d,j,l);z(this,F(this,j,e))}).bind("appendCache",function(){z(this,
e)}).bind("applyWidgetId",function(g,h){D(h).format(this)}).bind("applyWidgets",function(){A(this)});if(i.metadata&&i(this).metadata()&&i(this).metadata().sortlist)f.sortList=i(this).metadata().sortlist;f.sortList.length>0?b.trigger("sorton",[f.sortList]):A(this)}})};this.addParser=function(a){for(var b=s.length,d=true,e=0;e<b;e++)if(s[e].id.toLowerCase()==a.id.toLowerCase())d=false;d&&s.push(a)};this.addWidget=function(a){w.push(a)};this.formatFloat=function(a){a=parseFloat(a);return isNaN(a)?0:
a};this.formatInt=function(a){a=parseInt(a);return isNaN(a)?0:a};this.isDigit=function(a){return/^[-+]?\d*$/.test(i.trim(a.replace(/[,.']/g,"")))};this.clearTableBody=function(a){if(i.browser.msie)(function(){for(;this.firstChild;)this.removeChild(this.firstChild)}).apply(a.tBodies[0]);else a.tBodies[0].innerHTML=""}}});i.fn.extend({tablesorter:i.tablesorter.construct});var r=i.tablesorter;r.addParser({id:"text",is:function(){return true},format:function(c){return i.trim(c.toLocaleLowerCase())},type:"text"});
r.addParser({id:"digit",is:function(c,n){return i.tablesorter.isDigit(c,n.config)},format:function(c){return i.tablesorter.formatFloat(c)},type:"numeric"});r.addParser({id:"currency",is:function(c){return/^[\u00a3$\u20ac?.]/.test(c)},format:function(c){return i.tablesorter.formatFloat(c.replace(RegExp(/[\u00a3$\u20ac]/g),""))},type:"numeric"});r.addParser({id:"ipAddress",is:function(c){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(c)},format:function(c){c=c.split(".");for(var n="",o=c.length,
u=0;u<o;u++){var t=c[u];n+=t.length==2?"0"+t:t}return i.tablesorter.formatFloat(n)},type:"numeric"});r.addParser({id:"url",is:function(c){return/^(https?|ftp|file):\/\/$/.test(c)},format:function(c){return jQuery.trim(c.replace(RegExp(/(https?|ftp|file):\/\//),""))},type:"text"});r.addParser({id:"isoDate",is:function(c){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(c)},format:function(c){return i.tablesorter.formatFloat(c!=""?(new Date(c.replace(RegExp(/-/g),"/"))).getTime():"0")},type:"numeric"});
r.addParser({id:"percent",is:function(c){return/\%$/.test(i.trim(c))},format:function(c){return i.tablesorter.formatFloat(c.replace(RegExp(/%/g),""))},type:"numeric"});r.addParser({id:"usLongDate",is:function(c){return c.match(RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))},format:function(c){return i.tablesorter.formatFloat((new Date(c)).getTime())},type:"numeric"});r.addParser({id:"shortDate",is:function(c){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(c)},
format:function(c,n){var o=n.config;c=c.replace(/\-/g,"/");if(o.dateFormat=="us")c=c.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");else if(o.dateFormat=="uk")c=c.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");else if(o.dateFormat=="dd/mm/yy"||o.dateFormat=="dd-mm-yy")c=c.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");return i.tablesorter.formatFloat((new Date(c)).getTime())},type:"numeric"});r.addParser({id:"time",is:function(c){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(c)},
format:function(c){return i.tablesorter.formatFloat((new Date("2000/01/01 "+c)).getTime())},type:"numeric"});r.addParser({id:"metadata",is:function(){return false},format:function(c,n,o){c=n.config;c=!c.parserMetadataName?"sortValue":c.parserMetadataName;return i(o).metadata()[c]},type:"numeric"});r.addWidget({id:"zebra",format:function(c){if(c.config.debug)var n=new Date;var o,u=-1,t;i("tr:visible",c.tBodies[0]).each(function(){o=i(this);o.hasClass(c.config.cssChildRow)||u++;t=u%2==0;o.removeClass(c.config.widgetZebra.css[t?
0:1]).addClass(c.config.widgetZebra.css[t?1:0])});c.config.debug&&i.tablesorter.benchmark("Applying Zebra widget",n)}})})(jQuery);