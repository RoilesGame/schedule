
/* Smart UI v15.0.11 (2023-02-01) 
Copyright (c) 2011-2023 jQWidgets. 
License: https://htmlelements.com/license/ */ //

(()=>{class e extends HTMLElement{constructor(){super(),this._properties={min:50,label:"Item",modifiers:["resize","drag","close"],size:null}}_setProperty(e,t){const i=this;if(i._properties[e]===t)return;if(i._properties[e]=t,i._updating=!0,"disabled"===e||"modifiers"===e?t?i.setAttribute(e,t):i.removeAttribute(e):null===t?i.removeAttribute(e):i.setAttribute(e,t),!i.isCompleted)return;const r=i.closest("smart-layout");r&&(r._resizeDetails||r._updating||!r.isRendered||r.refresh()),i._updating=!1}get label(){return this._properties.label}set label(e){this._setProperty("label",e)}get modifiers(){return this._properties.modifiers}set modifiers(e){this._setProperty("modifiers",e)}get min(){return this._properties.min}set min(e){this._setProperty("min",e)}get size(){return this._properties.size}set size(e){null!==e?"string"==typeof e?this._setProperty("size",e):this._setProperty("size",Math.max(this.min,e)):this._setProperty("size",e)}static get observedAttributes(){return["min","size","label","modifiers"]}attributeChangedCallback(e,t,i){const r=this;if(t!==i&&r.isCompleted)if("size"===e){if(!r._updating){if(null===i)return void(this[e]=null);r[e]=Math.max(r.min,parseInt(i))}}else r[e]=i}connectedCallback(){this.isCompleted||this.render()}whenRendered(e){const t=this;t.isRendered?e():(t.whenRenderedCallbacks||(t.whenRenderedCallbacks=[]),t.whenRenderedCallbacks.push(e))}render(){const e=this;e.hasAttribute("data-id")||e.setAttribute("data-id","id"+Math.random().toString(16).slice(2)),e.hasAttribute("label")||e.setAttribute("label",e.label),e.hasAttribute("min")||e.setAttribute("min",e.min),e.hasAttribute("label")||e.setAttribute("label",e.label),e.hasAttribute("modifiers")||e.setAttribute("modifiers",e.modifiers);for(let t=0;t<e.attributes.length;t++){const i=e.attributes[t],r=i.name,s=i.value;isNaN(s)||"min"!==r&&"size"!==r?e._properties[r]=s:e._properties[r]=parseInt(s)}if(e.classList.add("smart-layout-item"),e.isCompleted=!0,e.whenRenderedCallbacks){for(let t=0;t<e.whenRenderedCallbacks.length;t++)e.whenRenderedCallbacks[t]();e.whenRenderedCallbacks=[]}}}class t extends e{constructor(){super(),this._properties.label="Group",this._properties.orientation="vertical"}get orientation(){return this._properties.orientation}set orientation(e){this._setProperty("orientation",e)}static get observedAttributes(){return["min","size","modifiers","orientation","position"]}render(){const e=this;super.render(),e.className="smart-layout-group",e.hasAttribute("orientation")?e._properties.orientation=e.getAttribute("orientation"):e.setAttribute("orientation",e._properties.orientation)}}class i extends t{constructor(){super(),this._properties.position="top",this._properties.label="TabGroup"}get position(){return this._properties.position}set position(e){this._setProperty("position",e)}render(){const e=this;super.render(),!e.hasAttribute("position")&&e.position&&e.setAttribute("position","top")}static get observedAttributes(){return["min","size","modifiers","orientation","position"]}}class r extends t{constructor(){super(),this._properties.label="TabItem"}}customElements.define("smart-layout-group",t),customElements.define("smart-layout-item",e),customElements.define("smart-tab-layout-group",i),customElements.define("smart-tab-layout-item",r),Smart("smart-layout",class extends Smart.ContentElement{static get properties(){return{allowLiveSplit:{value:!1,type:"boolean"},allowContextMenu:{value:!1,type:"boolean"},contextMenuDataSource:{value:["select","delete"],type:"any"},dataSource:{reflectToAttribute:!1,value:null,type:"any"},messages:{value:{en:{select:"Select Parent",delete:"Delete"}},type:"object",extend:!0},orientation:{value:"vertical",type:"string"},selectedIndex:{value:null,type:"any"}}}static get listeners(){return{contextmenu:"_contextMenuHandler","document.down":"_documentDownHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler","document.selectstart":"_documentSelectStartHandler",mouseleave:"_leaveHandler",mouseenter:"_enterHandler",dragStart:"_dragStart","document.keyup":"_keyUpHandler"}}_dragStart(e){e.stopPropagation(),e.preventDefault()}_leaveHandler(){const e=this;e._resizeDetails||(e._handleButtonsVisibility(null),e._hideSplitter(),requestAnimationFrame((()=>{e.classList.remove("outline")})))}_enterHandler(){const e=this;e._resizeDetails||(e._handleButtonsVisibility(e._selectedItem),e._updateSplitter(),requestAnimationFrame((()=>{e.classList.add("outline")})))}template(){return'<div id="container" role="presentation"><smart-layout-group data-id="root" id="itemsContainer"><content></content></smart-layout-group><div root-splitter id="splitter" class="smart-layout-splitter"></div>'}propertyChangedHandler(e,t,i){const r=this;switch(e){case"contextMenuDataSource":r._contextMenu&&(r._closeContextMenu(),r._contextMenu.innerHTML="");break;case"orientation":r.$.itemsContainer&&(r.$.itemsContainer.orientation=r.orientation);break;case"dataSource":r.dataBind();break;case"selectedIndex":r._handleItemClick(r.getItem(i+""),!0);break;default:super.propertyChangedHandler(e,t,i)}}dataBind(){const e=this;e.$.itemsContainer.innerHTML="";let t="";const i=(e,r)=>{for(let s=0;s<e.length;s++){const n=e[s],o=n.size,a=n.min,l=n.modifiers,d=n.type,c=n.position,u=n.orientation?n.orientation:"vertical";let p="";if(void 0!==o&&(p+=`size="${o}" `),void 0!==a&&(p+=`min="${a}" `),void 0!==l&&(p+=`modifiers="${l}" `),void 0!==c&&(p+=`position="${c}" `),n.items)p+=`orientation=${u} `,"tabs"===d?(t+=`<smart-tab-layout-group ${p}>`,i(n.items,!0),t+="</smart-tab-layout-group>"):(t+=`<smart-layout-group ${p}>`,i(n.items),t+="</smart-layout-group>");else{const e=n.content||"";t+=r?`<smart-tab-layout-item ${p}>`+e+"</smart-tab-layout-item>":`<smart-layout-item ${p}>`+e+"</smart-layout-item>"}}};i(e.dataSource),e.$.itemsContainer.innerHTML=t,e.refresh()}render(){const e=this;e.setAttribute("role","group"),e.selectedIndex&&e._handleItemClick(e.getItem(e.selectedIndex+""),!0),e.checkLicense();const t=()=>{e.dataSource?e.dataBind():e.dataSource=e._getDataSource(e._getLayout()),e.$.itemsContainer.orientation=e.orientation,super.render(),e.refresh(),e._updateSplitter()};"complete"===document.readyState?t():window.addEventListener("load",(()=>{t()}))}getItem(e){if(null==e)return;e=(e+"").split(".");let t,i=this._getDataSource(this._getLayout());for(let r=0;r<e.length&&(t=i[e[r]],t);r++)i=t.items;return t}_contextMenuHandler(e){const i=this;let r=e.target;if(i.allowContextMenu&&r.closest){if(r.closest(".smart-layout-context-menu"))return void e.preventDefault();let s=i.querySelector("[selected][data-id]");if(s||(s=r.closest(".smart-layout-item")||r.closest(".smart-layout-group")),!s)return;e.preventDefault(),i._createContextMenu();const n=i._contextMenu.children;for(let e=0;e<n.length;e++){const i=n[e];"delete"===i.getAttribute("value")?s.hasAttribute("index")&&"0"===s.getAttribute("index")?i.setAttribute("disabled",""):i.removeAttribute("disabled"):"select"===i.getAttribute("value")&&(s.hasAttribute("index")&&"0"===s.getAttribute("index")||!(s.parentElement instanceof t)?i.setAttribute("disabled",""):i.removeAttribute("disabled"))}i._openContextMenu(s,e.pageX,e.pageY)}}_createContextMenu(){const e=this;let t=e._contextMenu;if(t||(t=document.createElement("div"),t.classList.add("smart-layout-context-menu","smart-visibility-hidden"),e._contextMenu=t),!t.innerHTML){const i=e.contextMenuDataSource;for(let r=0;r<i.length;r++){const s=i[r];let n,o;"object"==typeof s?(n=s.label,o=s.value):o=n=s+"",t.innerHTML+=`<div class="smart-layout-context-menu-item" value="${o}">${e.localize(n)||n}</div>`}}}_openContextMenu(e,t,i){const r=this,s=r._contextMenu;if(!s||!s.classList.contains("smart-visibility-hidden"))return;r.$.fireEvent("opening").defaultPrevented||e.parentElement&&(s._target=e,r._opening=!0,r.$.container.appendChild(s),r._positionContextMenu(t,i),s.classList.remove("smart-visibility-hidden"),r.$.fireEvent("open"))}_closeContextMenu(){const e=this,t=e._contextMenu;if(!t||t.classList.contains("smart-visibility-hidden"))return;e.$.fireEvent("closing").defaultPrevented||(delete e._opening,e.hasAnimation&&t.addEventListener("transitionend",e._contextMenuTransitionEndHandler.bind(e),{once:!0}),t.classList.add("smart-visibility-hidden"),e.$.fireEvent("close"))}_contextMenuTransitionEndHandler(){const e=this,t=e._contextMenu;t&&!e._opening&&t.parentElement&&e.$.container.removeChild(t)}_positionContextMenu(e,t){const i=this._contextMenu;if(!i)return;const r=this.$.container.getBoundingClientRect();e-=r.left+window.pageXOffset,t-=r.top+window.pageYOffset,e+i.offsetWidth>r.width&&(e-=e+i.offsetWidth-r.width),t+i.offsetHeight>r.height&&(t-=t+i.offsetHeight-r.height),i.style.left=e+"px",i.style.top=t+"px"}_documentDownHandler(e){const t=this,i=e.originalEvent.target;t.contains(i)&&i.closest&&(t._target=i,t._updateSplitter())}_documentMoveHandler(e){const t=this,s=e.originalEvent.target,n=t._contextMenu;if(n&&!Smart.Utilities.Core.isMobile){if(n.querySelector(".smart-layout-context-menu-item[hover]")){const e=n.children;for(let t=0;t<e.length;t++)e[t].removeAttribute("hover")}n.contains(s)&&s.closest&&s.closest(".smart-layout-context-menu-item")&&s.setAttribute("hover","")}if(t._dragDetails){const s=Math.abs(t._dragDetails.pageX-e.pageX);if(Math.abs(t._dragDetails.pageY-e.pageY)<=5&&s<=5)return;t._dragDetails.feedback.parentElement||(document.body.appendChild(t._dragDetails.feedback),document.body.appendChild(t._dragDetails.overlay),setTimeout((()=>{t._dragDetails.feedback.classList.add("dragging")}),100)),t._dragDetails.dragging=!0,t._dragDetails.feedback.style.left=e.pageX-t._dragDetails.feedback.offsetWidth/2-5+"px",t._dragDetails.feedback.style.top=e.pageY-t._dragDetails.feedback.offsetHeight/2-5+"px";const n=document.elementsFromPoint(e.pageX,e.pageY);let o=null,a=!1;for(let e=0;e<n.length;e++){const s=n[e];if(!t._dragDetails.feedback.contains(s)){if(s.classList.contains("smart-layout-tab-strip")){if(t._dragDetails.element.contains(s))continue;o=s.parentElement,a=!0;break}if((s.parentElement!==t._dragDetails.parent&&s!==t._dragDetails.parent||1!==t._dragDetails.layoutGroup.items.length)&&!t._dragDetails.element.contains(s)){if(s instanceof r){o=s.parentElement;break}if(s instanceof i){o=s;break}}}}const l=(i,r)=>{const s=t.offset(i);let n=null,o=50,a=r,l=r;r?o=0:(l=i.offsetWidth/3,a=i.offsetHeight/3);const d=[{left:s.left,top:s.top,right:s.left+o,bottom:s.top+o,position:"top"},{left:s.left+o,top:s.top,right:s.left+i.offsetWidth-o,bottom:s.top+a-o,position:"top"},{left:s.left+i.offsetWidth-o,top:s.top,right:s.left+i.offsetWidth,bottom:s.top+o,position:"top"},{left:s.left,top:s.top+o,right:s.left+l,bottom:s.top+i.offsetHeight-o,position:"left"},{left:s.left+i.offsetWidth-l,top:s.top+o,right:s.left+i.offsetWidth,bottom:s.top+i.offsetHeight-o,position:"right"},{left:s.left,top:s.top+i.offsetHeight-o,right:s.left+o,bottom:s.top+i.offsetHeight,position:"bottom"},{left:s.left+o,top:s.top+i.offsetHeight-a+o,right:s.left+i.offsetWidth-o,bottom:s.top+i.offsetHeight,position:"bottom"},{left:s.left+i.offsetWidth-o,top:s.top+i.offsetHeight-o,right:s.left+i.offsetWidth,bottom:s.top+i.offsetHeight,position:"bottom"}];for(let t=0;t<d.length;t++){const i=d[t];if(i.left<=e.pageX&&e.pageX<=i.right&&i.top<=e.pageY&&e.pageY<=i.bottom){n=i.position;break}}return n},d=t.querySelector("smart-layout-group");let c=l(d,10),u=null;c?u=d:o?a?o!==t._dragDetails.parent&&(c="center",u=o):(c=l(o)||"center",u=o):t._handleDropArea(null),u&&(t._dragDetails.current=u,t._dragDetails.position=c,t._handleDropArea(u,c))}if(t._resizeDetails){const i=Math.abs(t._resizeDetails.clientX-e.clientX),r=Math.abs(t._resizeDetails.clientY-e.clientY),s=t._resizeDetails.splitter,n=t._resizeDetails.item,o=t._resizeDetails.itemRect,a=t._resizeDetails.previousItemRect,l=t._resizeDetails.previousItem,d=t._resizeDetails.nextItemRect,c=t._resizeDetails.nextItem,u=parseInt(n.getAttribute("min")),p=e=>{e.classList.contains("smart-visibility-hidden")||(e.style.right="",e.style.top="",e.style.left="",e.style.bottom="")};if(p(s),p(t.$.splitter),s.classList.remove("error"),s.classList.add("active"),!t._resizeDetails.dragging){if(s.classList.contains("horizontal")&&r<=5)return;if(s.classList.contains("vertical")&&i<=5)return;t._resizeDetails.dragging=!0}let m={clientPos:"clientX",pos:"x",size:"width",near:"left",far:"right",offsetSize:"offsetWidth"};s.classList.contains("horizontal")&&(m={clientPos:"clientY",pos:"y",size:"height",near:"top",far:"bottom",offsetSize:"offsetHeight"});const f=e=>{const i=t.offset(e),r=t.offset(t);t.$.splitter.style.width=e.offsetWidth+"px",t.$.splitter.style.height=e.offsetHeight+"px",t.$.splitter.className=e.className,t.$.splitter.style.left=i.left-r.left+"px",t.$.splitter.style.top=i.top-r.top+"px",e.setAttribute("drag",""),t.$.splitter.setAttribute("drag","")};if(s.classList.contains("last")){let i=e[m.clientPos]-t._resizeDetails.splitterRect[m.pos],r=o[m.size]-u;if(i>r&&(i=r,s.classList.add("error")),a){const e=parseInt(l.getAttribute("min"));let t=a[m.size]-e;i<-t&&(i=-t,s.classList.add("error"))}s.style[m.near]=i+"px";const d=n[m.offsetSize]-i;if(n.setAttribute("size",d),l){const e=n[m.offsetSize]+l[m.offsetSize]-d;l.setAttribute("size",e)}}else{let i=-e[m.clientPos]+t._resizeDetails.splitterRect[m.pos],r=o[m.size]-u;if(i>r&&(i=r,s.classList.add("error")),d){const e=parseInt(c.getAttribute("min"));let t=-d[m.size]+e;i<t&&(i=t,s.classList.add("error"))}s.style[m.far]=i+"px";const a=n[m.offsetSize]-i;if(n.setAttribute("size",a),c){const e=c[m.offsetSize]+n[m.offsetSize]-a;c.setAttribute("size",e)}}f(s)}}_offsetTop(e){return e?e.offsetTop+this._offsetTop(e.offsetParent):0}_offsetLeft(e){return e?e.offsetLeft+this._offsetLeft(e.offsetParent):0}offset(e){return{left:this._offsetLeft(e),top:this._offsetTop(e)}}_keyUpHandler(e){const t=this;if("Escape"===e.key){if(t._dragDetails&&(t._dragDetails.feedback.remove(),t._dragDetails.overlay.remove(),t._dragDetails=null,t._handleDropArea(null)),t._resizeDetails){const e=t._resizeDetails;return e.splitter.classList.contains("last")?e.previousItem.size=e.previousItemSize:e.nextItem.size=e.nextItem.previousItemSize,e.item.size=e.itemSize,t.refresh(),t._handleItemClick(e.item),void(t._resizeDetails=null)}}else"Delete"===e.key&&t._selectedItem&&t._removeLayoutItem(t._selectedItem)}_endDrag(){const e=this;if(e._handleDropArea(null),!e._dragDetails.dragging)return void(e._dragDetails=null);const t=e._dragDetails.current,i=e._dragDetails.element,r=e._dragDetails.position;if(e._handleDropArea(null),t){if(e._addTabLayoutItem(t,r,i),e._removeLayoutItem(i),t.parentElement&&1===Array.from(t.parentElement.parentElement.children).filter((e=>!!e.classList.contains("smart-layout-group"))).length){const i=t.parentElement,r=i.parentElement,s=r.parentElement;if("root"!==r.getAttribute("data-id")&&"root"!==s.getAttribute("data-id")&&s!==e){const e=Array.from(s.children).indexOf(i.parentElement);e>=0?s.insertBefore(i,s.children[e]):s.appendChild(i),r.remove()}}e.refresh(),e._updateSplitter(),requestAnimationFrame((()=>{e.classList.add("outline"),e.querySelectorAll(".smart-element").forEach((e=>{e.$.fireEvent("resize")}))}))}e.$.fireEvent("stateChange",{type:"insert",item:i}),e._dragDetails.feedback.remove(),e._dragDetails.overlay.remove(),e._dragDetails=null}_documentUpHandler(e){const t=this,i=Smart.Utilities.Core.isMobile,s=i?document.elementFromPoint(e.pageX-window.pageXOffset,e.pageY-window.pageYOffset):e.originalEvent.target;if(2!==e.button){if(t._dragDetails&&t._endDrag(e),t._resizeDetails){const e=t._resizeDetails;return e.item&&(e.item.style.overflow=""),e.previousItem&&(e.previousItem.style.overflow=""),e.nextItem&&(e.nextItem.style.overflow=""),t.refresh(),t._handleItemClick(e.item),t._resizeDetails=null,void t.querySelectorAll(".smart-element").forEach((e=>{e.$.fireEvent("resize")}))}if(t.contains(s)&&(t.classList.add("outline"),t._target&&!s.item&&(s instanceof r?t._handleItemClick(s):t._handleItemClick(s.closest(".smart-layout-item"))),t._target)){if(t._target!==s)return void delete t._target;if(!e.button&&s.closest(".smart-layout-buttons-container")){const i=e.originalEvent.target;t._handleButtonClick(i.item,i.position)}else s.closest(".smart-layout-context-menu")&&(!i&&!e.button||i)&&t._handleMenuItemClick(s.closest(".smart-layout-context-menu-item"));delete t._target}}}_documentSelectStartHandler(e){this._target&&e.preventDefault()}_getDataSource(i,r,s){const n=this;let o=[];s||(s=0),r||(r="");for(let a=0;a<i.length;a++){const l=i[a],d={label:l.label,id:l.getAttribute("data-id"),orientation:l.orientation,size:l.size,min:l.min,type:l.type,modifiers:l.modifiers,position:l.position};if(l.removeAttribute("index"),l instanceof t){if(o.push(d),d.index=""!==r?r+"."+s:s.toString(),l.setAttribute("index",d.index),l.items){const e=n._getDataSource(l.items,d.index,0);d.items=e}}else if(l instanceof e)if(l.items){const e=n._getDataSource(l.items,r,s);o=o.concat(e)}else d.index=""!==r?r+"."+s:s.toString(),l.setAttribute("index",d.index),o.push(d);s++}return o}_getLayout(){const e=this,i=arguments.length?arguments[0]:e.$.itemsContainer;e._buttons&&e._buttons.remove(),e._dropArea&&e._dropArea.remove();const r=e.querySelectorAll(".smart-layout-splitter");for(let t=0;t<r.length;t++){const i=r[t];i!==e.$.splitter&&i.remove()}i.items=Array.from(i.children),i.items=i.items.filter((e=>e!==i.tabs&&e.hasAttribute("data-id")));const s=i.items.map((function(i){if(i.classList.contains("smart-layout-tab-strip"))return null;const r=i,s=i instanceof t?i:null;return s&&(r.items=e._getLayout(s)),r}));if(i!==e.$.itemsContainer)return s.filter((e=>null!==e&&e!==i.tabs));const n=[],o=i;return o.items=s.filter((e=>null!==e&&e!==i.tabs)),n.push(o),n}_updateSplitter(){const e=this;e._buttons&&e._dragDetails&&e._buttons.remove(),e._removeSplitter();const t=e.querySelectorAll("[data-id]");for(let i=0;i<t.length;i++){const r=t[i];if("root"!==r.getAttribute("data-id")){if(r.hasAttribute("role")){const e=r.getAttribute("role");if("gridcell"===e||"row"===e||"columnheader"===e||"rowheader"===e)continue}r.setAttribute("hover",""),e._handleSplitter(r)}}}_hideSplitter(){const e=this.querySelectorAll("[data-id]");for(let t=0;t<e.length;t++){e[t].removeAttribute("hover")}}_removeSplitter(){const e=this,t=e.querySelectorAll(".smart-layout-splitter");for(let i=0;i<t.length;i++){const r=t[i];r!==e.$.splitter&&r.remove()}e._hideSplitter()}_handleItemClick(e){const t=this,i=t.selectedIndex;let r=null;return e?(r=e instanceof HTMLElement?e:t.querySelector("[data-id="+e.id+"]"),r&&r.readonly?(t._closeContextMenu(),void(t.selectedIndex=null)):(t.querySelectorAll("[data-id]").forEach((e=>e.removeAttribute("selected"))),t._closeContextMenu(),void(r?(t.selectedIndex=r.getAttribute("index"),r.setAttribute("selected",""),r.setAttribute("hover",""),t._selectedItem=r,r.classList.contains("smart-hidden")&&t.refresh(),t._handleButtonsVisibility(r),i!==t.selectedIndex&&t.$.fireEvent("change",{selectedIndex:t.selectedIndex,oldSelectedIndex:i}),t._updateSplitter()):t.refresh()))):(t._closeContextMenu(),t.selectedIndex=null,t.querySelectorAll("[data-id]").forEach((e=>e.removeAttribute("selected"))),void(t._selectedItem=null))}_handleButtonClick(e,t){const i=this,r=i._addLayoutItem(e,t);i.$.fireEvent("stateChange",{type:"insert",item:r}),i._handleItemClick(r,!0)}_handleMenuItemClick(e){const t=this;if(!e||e.hasAttribute("disabled"))return;const i=e.getAttribute("value"),r=t._contextMenu;t.$.fireEvent("menuItemClick",{target:r?r._target:null,item:e,label:e.textContent,value:i});const s=r._target;s&&("select"===i&&t._handleItemClick(s.parentElement?s.parentElement:s),"delete"===i&&t._removeLayoutItem(s))}_removeLayoutItem(t){const i=this;if("root"!==t.getAttribute("data-id")){if(t instanceof e&&1===t.parentElement.items.length){let e=t.parentElement,r=e;for(;e&&e.items&&1===e.items.length&&"root"!==e.getAttribute("data-id");)r=e,e=e.parentElement;"root"!==r.getAttribute("data-id")?r.remove():i.allowLiveSplit&&r.appendChild(document.createElement("smart-layout-item"))}else t.remove();i.refresh(),i.$.fireEvent("stateChange",{type:"delete",item:t})}}refresh(){const e=this;if(e._isUpdating)return;e.dataSource=e._getDataSource(e._getLayout()),e.$.splitter.className="smart-visibility-hidden smart-layout-splitter";const t=t=>{const s=e.getItem(t.getAttribute("index"));if(!s)return;t.style.gridTemplateColumns="",t.style.gridTemplateRows="";let n="",o=0,a=0;if(t instanceof i){t.tabs&&t.tabs.remove();const i=document.createElement("div");i.classList.add("smart-layout-tab-strip"),e._selectedItem&&t.contains(e._selectedItem)&&e._selectedItem instanceof r&&(t.selectedIndex=Math.max(0,t.items.indexOf(e._selectedItem))),t.selectedIndex>=t.children.length&&(t.selectedIndex=0);for(let r=0;r<t.children.length;r++){const n=t.children[r],o=e.getItem(n.getAttribute("index"));if(!o)continue;const a=document.createElement("div");a.classList.add("smart-layout-tab"),a.innerHTML="<label>"+o.label+'</label><span class="smart-close-button"></span>',i.appendChild(a),n.setAttribute("tab",""),n.classList.add("smart-hidden"),a.content=n,a.item=o,a.group=s,n.modifiers?-1===n.modifiers.indexOf("close")&&a.querySelector(".smart-close-button").classList.add("smart-hidden"):a.querySelector(".smart-close-button").classList.add("smart-hidden"),void 0!==t.selectedIndex&&r!==t.selectedIndex||(a.classList.add("selected"),n.classList.remove("smart-hidden"),t.selectedIndex=r),a.onpointerup=function(i){i.target.classList.contains("smart-close-button")&&a.close&&(t.selectedIndex=0,e._removeLayoutItem(e._selectedItem),e._handleItemClick(parent))},a.onpointerdown=function(t){const i=this.closest(".smart-layout-group");e._handleItemClick(this.content),a.close=!1,t.target.classList.contains("smart-close-button")?a.close=!0:o.modifiers&&o.modifiers.indexOf("drag")>=0&&e._beginDrag(i,this,t)}}t.tabs=i,"top"===s.position||"left"===s.position?t.insertBefore(i,t.firstChild):t.appendChild(i)}else{for(var l=0;l<t.children.length;l++){var d=t.children[l];if(d.hasAttribute("size")){var c=d.getAttribute("size"),u=parseFloat(c),p="vertical"===t.orientation?t.offsetWidth:t.offsetHeight,m=c.indexOf("%")>=0?parseFloat(c):parseFloat(u/p*100);if(o+=m,a++,a===t.children.length){if(o<100){n+="1fr ",o=100;continue}o>100&&(o-=m,m=100-o,o=100)}else if(o>100||0===m){a=t.children.length,o=0;break}n+=m+"% "}else n+="1fr "}if(a===t.children.length&&(o<99||o>100)){n="";for(let e=0;e<t.children.length;e++){t.children[e].removeAttribute("size"),n+="1fr "}}"vertical"===t.orientation?t.style.gridTemplateColumns=n:t.style.gridTemplateRows=n}t.items=Array.from(t.children),t.items=t.items.filter((e=>e!==t.tabs))},s=e.querySelectorAll(".smart-layout-group");for(let e=0;e<s.length;e++)t(s[e])}_beginDrag(e,t,i){const r=this;r._dragDetails&&r._dragDetails.feedback.remove();const s=document.createElement("div"),n=document.createElement("div"),o=e.querySelector(".smart-layout-tab-strip");let a="";if(o)for(let t=0;t<Array.from(o.children).length;t++)t===e.selectedIndex&&(a=o.children[t].innerText);s.innerHTML=`<smart-layout><smart-tab-layout-group><smart-tab-layout-item label="${a}"></smart-tab-layout-item></smart-tab-layout-group></smart-layout>`,r._feedback=s,r._feedback.classList.add("smart-layout-feedback","smart-layout"),n.classList.add("smart-layout-overlay"),r._dragDetails={element:t.content,item:t.item,layoutGroup:t.group,parent:e,overlay:n,feedback:s,pageX:i.pageX,pageY:i.pageY}}moveChildren(e,t){t.innerHTML="";let i=e;for(;i.firstChild;){const e=i.firstChild;t.appendChild(e)}}createLayoutItem(e,t){const i=this;return"layoutItem"!==e&&e?"tabLayoutItem"!==e&&e?"tabLayoutGroup"===e?(e=>{const t=document.createElement("smart-tab-layout-group"),r="top"===e||"bottom"===e?"horizontal":"vertical";return t.setAttribute("orientation",r),t.orientation=r,i.$.fireEvent("createGroup",{item:t,type:"tabLayoutGroup"}),t})(t):(e=>{const t=document.createElement("smart-layout-group"),r="top"===e||"bottom"===e?"horizontal":"vertical";return i.$.fireEvent("createGroup",{item:t,type:"layoutGroup"}),t.setAttribute("orientation",r),t.orientation=r,t})(t):(()=>{const e=document.createElement("smart-tab-layout-item");return e.innerHTML="",i.$.fireEvent("createItem",{item:e,type:"tabLayoutItem"}),e})():(()=>{const e=document.createElement("smart-layout-item");return e.innerHTML="",i.$.fireEvent("createItem",{item:e,type:"layoutItem"}),e})()}_addTabLayoutItem(s,n,o){const a=this,l=a.createLayoutItem("tabLayoutItem"),d=s.closest("smart-tab-layout-group");let c;o&&(l.label=o.label,l.modifiers=o.modifiers,a.moveChildren(o,l));const u=e=>{for(let t=0;t<e.children.length;t++){e.children[t].removeAttribute("size")}e.removeAttribute("size")},p=e=>{if(s.removeAttribute("size"),s.querySelector("smart-layout-group"))a._addLayoutItem(s.querySelector("smart-layout-group"),e);else{c=a.createLayoutItem("layoutGroup",e);const t=a.createLayoutItem();a.moveChildren(s,t),"top"===e||"left"===e?(c.appendChild(a.createLayoutItem()),c.appendChild(t)):(c.appendChild(t),c.appendChild(a.createLayoutItem())),s.appendChild(c)}},m=(e,t)=>{const i=s.parentElement,r=s,n=a.createLayoutItem("layoutGroup",t);i.insertBefore(n,r),"top"===t||"left"===t?(n.append(e),n.appendChild(r)):(n.appendChild(r),n.append(e)),"root"===r.getAttribute("data-id")&&(r.setAttribute("data-id",n.getAttribute("data-id")),n.setAttribute("data-id","root"),a.$.itemsContainer=n),u(r),u(i)};if(o)switch(n){case"center":if(s instanceof i||s instanceof r)d.appendChild(l);else{const i=a.createLayoutItem("tabLayoutGroup","top");i.appendChild(l),s instanceof t&&!(s instanceof r)?(s.appendChild(i),u(s)):s instanceof e&&(c=a.createLayoutItem("layoutGroup"),s.parentElement.insertBefore(c,s),c.appendChild(s),c.appendChild(i),u(c))}break;case"left":case"right":{const e=a.createLayoutItem("tabLayoutGroup","top");e.appendChild(l),"root"===s.getAttribute("data-id")?(e.position=n,m(e,n)):m(e,n)}break;case"top":case"bottom":{const e=a.createLayoutItem("tabLayoutGroup","top");e.appendChild(l),"root"===s.getAttribute("data-id")?(e.position=n,m(e,n)):m(e,n);break}}else{switch(n){case"center":s instanceof i||s instanceof r?d.appendChild(l):p();break;case"left":case"right":if(s instanceof i){const e=s.querySelector("smart-tab-layout-item");e&&"left"===n?s.insertBefore(l,e):s.appendChild(l)}else if(s instanceof r){const e=a.createLayoutItem("tabLayoutGroup","top"),t=s.parentElement;e.appendChild(l),c=a.createLayoutItem("layoutGroup"),t.parentElement.insertBefore(c,t),"right"===n?(c.appendChild(t),c.appendChild(e)):"left"===n&&(c.appendChild(e),c.appendChild(t))}else if(o){const i=a.createLayoutItem("tabLayoutGroup","top");i.appendChild(l),s instanceof t?s.insertBefore(s.firstChild,i):s instanceof e&&(c=a.createLayoutItem("layoutGroup"),c.orientation=d.orientation,c.setAttribute("orientation",d.orientation),s.removeAttribute("size"),s.parentElement.insertBefore(c,s),c.appendChild(s),c.appendChild(i))}else p(n);break;case"top":case"bottom":s instanceof i?(c=a.createLayoutItem("layoutGroup","top"),s.removeAttribute("size"),s.parentElement.insertBefore(c,s),"top"===n?(c.appendChild(a.createLayoutItem()),c.appendChild(s)):(c.appendChild(s),c.appendChild(a.createLayoutItem()))):p(n)}a.refresh()}}_addLayoutItem(s,n,o){const a=this;if(!s)return;const l=e=>{for(let t=0;t<e.children.length;t++){e.children[t].removeAttribute("size")}e.removeAttribute("size")};if(s instanceof r||s instanceof i||o&&o instanceof r)return a._addTabLayoutItem(s,n,o);const d=a.createLayoutItem(),c=s.closest(".smart-layout-group");let u;if(o&&a.moveChildren(o,d),"center"===n){if(s instanceof t)return u=c,u.appendChild(d),l(u),a.refresh(),d;if(s instanceof e)return u=a.createLayoutItem("layoutGroup"),u.orientation=c.orientation,u.setAttribute("orientation",c.orientation),s.removeAttribute("size"),s.parentElement.insertBefore(u,s),u.appendChild(s),u.appendChild(d),a.refresh(),u}if("vertical"===c.orientation&&("left"===n||"right"===n)||"horizontal"===c.orientation&&("top"===n||"bottom"===n))if(u=c,s instanceof t)"left"===n||"top"===n?u.insertBefore(d,u.children[0]):u.appendChild(d),l(s);else{const e=u.items,t=Math.max(0,e.indexOf(s)+("top"===n||"left"===n?0:1));u.insertBefore(d,e[t]),l(u)}else if(s instanceof t){const e=s.parentElement,t=s,i=a.createLayoutItem("layoutGroup",n);e.insertBefore(i,t),"top"===n||"left"===n?(i.append(d),i.appendChild(t)):(i.appendChild(t),i.append(d)),"root"===t.getAttribute("data-id")&&(t.setAttribute("data-id",i.getAttribute("data-id")),i.setAttribute("data-id","root"),a.$.itemsContainer=i),l(e)}else u=a.createLayoutItem("layoutGroup",n),c.insertBefore(u,s),"top"===n||"left"===n?(u.appendChild(d),u.appendChild(s)):(u.appendChild(s),u.appendChild(d)),l(u);return a.refresh(),d}_handleButtonsVisibility(e){const t=this;if(t._buttons||(t._buttons=document.createElement("div"),t._buttons.classList.add("smart-layout-buttons-container"),t._buttons.innerHTML='<div role="button" position="top"></div>\n                                       <div role="button" position="bottom"></div>\n                                       <div role="button" position="center"></div>\n                                       <div role="button" position="left"></div>\n                                       <div role="button" position="right"></div>'),e||!t._buttons.parentElement){if(e){const i=e._buttonPosition||[],r=t._buttons.children;for(let t=0;t<r.length;t++){const s=r[t];s.position=s.getAttribute("position"),s.item=e,i.length&&i.indexOf(s.getAttribute("position"))<0?s.classList.add("smart-hidden"):s.classList.remove("smart-hidden"),s.onmouseenter=()=>{s.setAttribute("hover","")},s.onmouseleave=()=>{s.removeAttribute("hover")}}t.allowLiveSplit&&t._buttons.parentElement!==e&&e.appendChild(t._buttons)}}else t._buttons.parentElement.removeChild(t._buttons)}_handleDropArea(e,t="center"){const i=this,r=e=>{switch(e){case"left":i._dropArea.style.top="0px",i._dropArea.style.left="0px",i._dropArea.style.width="50%",i._dropArea.style.height="100%";break;case"right":i._dropArea.style.top="0px",i._dropArea.style.left="calc(100% - 50%)",i._dropArea.style.width="50%",i._dropArea.style.height="100%";break;case"top":i._dropArea.style.top="0px",i._dropArea.style.left="0px",i._dropArea.style.width="100%",i._dropArea.style.height="50%";break;case"bottom":i._dropArea.style.top="calc(100% - 50%)",i._dropArea.style.left="0px",i._dropArea.style.width="100%",i._dropArea.style.height="50%";break;case"center":i._dropArea.style.top="0px",i._dropArea.style.left="0px",i._dropArea.style.width="100%",i._dropArea.style.height="100%"}};i._dropArea&&i._dropArea.parentElement===e?r(t):(i._dropArea&&i._dropArea.remove(),i._dragDetails&&e&&(i._dropArea=document.createElement("div"),i._dropArea.classList.add("smart-layout-drop-area"),e.appendChild(i._dropArea),i._dropArea.style.opacity=1,r(t)))}_handleSplitter(e){const t=this;if(!e)return;if(e.hasAttribute("tab")&&(e=e.parentElement),e._splitter&&e._splitter.remove(),e._splitter||(e._splitter=document.createElement("div")),t._dragDetails&&t._dragDetails.dragging)return void e._splitter.remove();if(-1===e.modifiers.indexOf("resize"))return;e.appendChild(e._splitter);const i=e.parentElement;if(i){e._splitter.className="smart-layout-splitter",e._splitter.item=e,e._splitter.removeAttribute("drag");const r=i.orientation;e.nextElementSibling&&e.nextElementSibling.hasAttribute("data-id")?e._splitter.classList.add(r):e.previousElementSibling&&e.previousElementSibling.hasAttribute("data-id")&&(e._splitter.classList.add(r),e._splitter.classList.add("last"));(e=>{e.style.top="",e.style.left="",e.style.bottom="",e.style.right="",e.onpointerdown=e=>{const i=e.target.item;i.style.overflow="hidden",t._resizeDetails={splitter:e.target,splitterRect:e.target.getBoundingClientRect(),itemRect:i.getBoundingClientRect(),item:i,itemSize:i.size,group:i.parentElement,clientX:e.clientX,clientY:e.clientY},t._selectedItem!==i&&(t.querySelectorAll("[data-id]").forEach((e=>e.removeAttribute("selected"))),t.selectedIndex=i.getAttribute("index"),i.setAttribute("selected",""),t._selectedItem=i,t._handleButtonsVisibility(i)),i.previousElementSibling&&i.previousElementSibling.hasAttribute("data-id")?(t._resizeDetails.previousItemRect=i.previousElementSibling.getBoundingClientRect(),t._resizeDetails.previousItem=i.previousElementSibling,t._resizeDetails.previousItemSize=i.previousElementSibling.size,t._resizeDetails.previousItem.style.overflow="hidden"):(t._resizeDetails.previousItemRect=null,t._resizeDetails.previousItem=null),i.nextElementSibling&&i.nextElementSibling.hasAttribute("data-id")?(t._resizeDetails.nextItemRect=i.nextElementSibling.getBoundingClientRect(),t._resizeDetails.nextItem=i.nextElementSibling,t._resizeDetails.nextItemSize=i.nextElementSibling.size,t._resizeDetails.nextItem.style.overflow="hidden"):(t._resizeDetails.nextItemRect=null,t._resizeDetails.nextItem=null)}})(e._splitter)}}})})();