
/* Smart UI v15.0.11 (2023-02-01) 
Copyright (c) 2011-2023 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("Grid.Export",class{exportData(t,e){const o=this,a=new Smart.Utilities.DataExporter({exportHeader:o.dataExport.header}),r=[];a.expandChar=o.dataExport.expandChar,a.collapseChar=o.dataExport.collapseChar,a.pageOrientation=o.dataExport.pageOrientation,a.style=o.dataExport.style,a.filterBy=o.dataExport.filterBy,a.groupBy=o.dataExport.groupBy;const n=o.columns.toArray().slice(0).filter((t=>!1!==t.allowExport));if(a.header={columns:n,columngroups:o.columnGroups.slice(0)},!o.dataExport.style){const e=window.getComputedStyle(o),n=window.getComputedStyle(o.columns.length>0&&o.columns[0].element?o.columns[0].element:o.$.columnHeader),l=window.getComputedStyle(o.$.columnHeader);if(0!==o.offsetWidth&&0!==o.offsetHeight){const i=t=>{const e=t.fontSize,o=t.borderRightColor,a=t.backgroundColor,r=t.color,n=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");function l(t){return(t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))?"#"+i(t[1])+i(t[2])+i(t[3]).toUpperCase():"#ffffff"}function i(t){return isNaN(t)?"00":n[(t-t%16)/16]+n[t%16]}return{borderColor:l(o),fontSize:e,fontFamily:"Helvetica",color:l(r),backgroundColor:l(a)}},d=i(e),s=i(n),c=i(l),p={height:o.$.columnHeader.offsetHeight+"px",border:"1px solid "+d.borderColor,fontFamily:c.fontFamily,fontSize:c.fontSize,color:c.color,backgroundColor:s.backgroundColor,fontWeight:"400"},f={border:"1px solid "+d.borderColor,fontFamily:d.fontFamily,fontSize:d.fontSize},u={height:o.rowMinHeight+"px"};for(let e=0;e<o.columns.length;e++){const a=o.columns[e];if(!a.allowExport)continue;if(!a.visible)continue;p[a.dataField]={textAlign:a.align,width:a.computedWidth+"px",format:a.cellsFormat||""};let n=a.cellsFormat||"";n||("date"===a.dataType?n="d":"dateTime"===a.dataType?n="D":"time"===a.dataType&&(n="t"));const l={textAlign:a.cellsAlign,format:n};if(f[a.dataField]=l,o.dataExport.view&&-1!==["html","jpeg","pdf","png"].indexOf(t)&&(a.template||a.formatFunction))for(let t=0;t<o.rows.length;t++){const e=o.rows[t];let n=o.rows[t]["column_"+a.dataField];if(o.dataExport.viewStart&&t<o.dataExport.viewStart||o.dataExport.viewEnd&&t>o.dataExport.viewEnd)continue;if(!n||e&&e.element&&e.element.classList.contains("smart-hidden")){const t=o._rowElements[0];if(!t)continue;if(e.element=t,e.grid=o,e.render(),n=e["column_"+a.dataField],!n)continue}const i={};i.border=n.borderColor,i.background=n.background,i.color=n.color;const d=void 0!==o.dataExport.viewStart?t-o.dataExport.viewStart:t;r[t]=Object.assign({},e.data),r[t][a.dataField]=n.element.textContent,l[d]=i}}o.appearance.alternationCount>0&&(u.alternationCount=o.appearance.alternationCount,u.alternationStart=o.appearance.alternationStart,u.alternationEnd=o.appearance.alternationEnd,u.alternationIndex0Color=d.color,u.alternationIndex0BackgroundColor=d.backgroundColor,u.alternationIndex1Color=d.color,u.alternationIndex1BackgroundColor="#F5F5F5"),a.style={border:"1px solid "+d.borderColor,borderCollapse:"collapse",header:p,columns:f,rows:u}}}const l=!o.rowHierarchy||o.grouping.enabled?o.rows.toArray():o.rowHierarchy,i=o.dataExport.rowIds,d=null!==i;let s=[];if(o.dataExport.view)o._recyclingRows.forEach(((t,e)=>{if(o.dataExport.viewStart&&e<o.dataExport.viewStart||o.dataExport.viewEnd&&e>o.dataExport.viewEnd)return!0;r[e]?s.push(r[e]):s.push(t.data)}));else{for(let e=0;e<l.length;e++){const a=l[e];if(a.visible&&(!1!==a.filtered||void 0===a.filtered)){if(d&&-1===i.indexOf(a.id))continue;const e={};for(let r=0;r<o.columns.length;r++){const n=o.columns[r];if(!n.allowExport)continue;const l=n.dataField;let i=a.data[l];if("taskChecklist"===l)if(i){const t=i.map((t=>{let e=t.text;return t.completed?e="✓ "+e:e+="X "+e,e}));i=t.toString()}else i="";if("taskUserId"===l){const t=o.users.find((t=>t.id===parseInt(i)||parseInt(t.id)===parseInt(i)));t&&(i=t.name)}if(void 0===i)if("createdBy"===n.template){const t=o.users.find((t=>t.id===a.createdBy));if(t){const o=t,a="string"==typeof o?o:o.name;e[l]=a}else e[l]=""}else if("createdTime"===n.template){const t=a.getCell(l).getFormattedValue(a.createdTime,"d")+"  "+a.getCell(l).getFormattedValue(a.createdTime,"t");e[l]=t}else if("modifiedBy"===n.template){const t=o.users.find((t=>t.id===a.modifiedBy));if(t){const o=t,a="string"==typeof o?o:o.name;e[l]=a}else e[l]=""}else if("modifiedTime"===n.template){const t=a.getCell(l).getFormattedValue(a.modifiedTime,"d")+"  "+a.getCell(l).getFormattedValue(a.modifiedTime,"t");e[l]=t}else e[l]="";else if(i&&i.indexOf&&(i.indexOf("{")>=0||"[]"===i)){const t=i.indexOf("{")>=0||"[]"===i?JSON.parse(i):i.split(", "),o=[];for(let e=0;e<t.length;e++)"string"==typeof t[e]?o.push(t[e]):o.push(t[e].label);e[l]=o.join(",")}else if("csv"===t||"tsv"===t)if(n.cellsFormat){const t=a.getCell(l).getFormattedValue(i,n.cellsFormat);e[l]=t}else e[l]=i;else e[l]=i}s.push(e)}}l!==o.rowHierarchy||d||(s=o.dataSource.boundHierarchy,a.hierarchical=!0)}!o.dataExport.groupBy&&o.grouping.enabled&&o.dataSource&&o.dataSource.groupBy&&(a.groupBy=o.dataSource.groupBy&&o.dataSource.groupBy.toArray?o.dataSource.groupBy.toArray():null),o.checkLicense(!0);const c=a.exportData(s,t,o.dataExport.fileName,e);return o.dataExport.view&&o._recycle(!1),c}print(){const t=this,e=t.dataExport.fileName;t.dataExport.fileName=null;const o=t.exportData("html"),a=window.open("","","width=800,height=500"),r=a.document.open(),n='<!DOCTYPE html><html><head><meta charset="utf-8" /><title>'+e+"</title></head><body>"+o+"</body></html>";try{r.write(n),r.close(),setTimeout((function(){a.print(),a.close()}),100)}catch(t){}t.dataExport.fileName=e}});