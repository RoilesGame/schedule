
/* Smart UI v15.0.11 (2023-02-01) 
Copyright (c) 2011-2023 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-radio-button",class extends Smart.ToggleButton{static get properties(){return{checkMode:{value:"both",allowedValues:["both","input","label"],type:"string"},type:{value:"radio",type:"string",defaultReflectToAttribute:!0,readonly:!0},groupName:{value:"",type:"string"}}}template(){return"<div  id='container' class='smart-container'>\n                 <div class ='smart-overlay'></div>\n                 <span id='radioButtonInput' class ='smart-input'></span>\n                 <span id='radioButtonLabel' inner-h-t-m-l='[[innerHTML]]' class ='smart-label'><content></content></span>\n                 <input id='hiddenInput' class ='smart-hidden-input' type='hidden'>\n               </div>"}static get listeners(){return{down:"_downHandler","document.up":"_documentUpHandler",mouseenter:"_elementMouseEnterHandler","radioButtonInput.mouseenter":"_radioMouseEnterHandler","radioButtonInput.mouseleave":"_radioMouseLeaveHandler",focus:"_focusHandler",blur:"_blurHandler"}}static get styleUrls(){return["smart.toggle.css"]}_radioMouseEnterHandler(){this.$.setAttributeValue("hover",!0)}_radioMouseLeaveHandler(){this.$.setAttributeValue("hover",!1)}_focusHandler(){this.$.setAttributeValue("focus",!0)}_blurHandler(){this.$.setAttributeValue("focus",!1)}_mouseEnterHandler(){this.$.setAttributeValue("hover",!0)}_mouseLeaveHandler(){this.$.setAttributeValue("hover",!1)}ready(){const e=this;super.ready(),e.classList.add("smart-toggle-box"),e._handleMultipleCheckedInstances(),e._updateHidenInputNameAndValue(),e._updateGroupValue()}_downHandler(e){const t=this,a=t.enableShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if(!(t.disabled||t.readonly||"input"===t.checkMode&&a!==t.$.radioButtonInput||"label"===t.checkMode&&a!==t.$.radioButtonLabel)){if(t.$.setAttributeValue("active",!0),t.hasRippleAnimation){const e=t.$.radioButtonInput.getBoundingClientRect(),a=window.scrollX||window.pageXOffset,n=window.scrollY||window.pageYOffset;Smart.Utilities.Animation.Ripple.animate(t.$.radioButtonInput,e.left+e.width/2+a,e.top+e.height/2+n)}t._preventAction?t._preventAction=!1:("release"!==t.clickMode&&"pressAndRelease"!==t.clickMode||(t._pressed=!0),"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||("pressAndRelease"===t.clickMode&&(""===t.groupName?t._checkedBeforeChange=t.parentNode.querySelector("smart-radio-button[checked]"):t._checkedBeforeChange=document.querySelector('smart-radio-button[group-name="'+t.groupName+'"][checked]')),t._handleMouseInteraction()))}}_elementMouseEnterHandler(){const e=this;"hover"!==e.clickMode||e.disabled||e.readonly||e._handleMouseInteraction()}_documentUpHandler(e){const t=this,a=t.enableShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;!t._pressed||t.disabled||t.readonly||"input"===t.checkMode&&a!==t.$.radioButtonInput||"label"===t.checkMode&&a!==t.$.radioButtonLabel||"pointercancel"===e.originalEvent.type||("release"===t.clickMode?t._handleMouseInteraction():(null===t._checkedBeforeChange?(t.$.fireEvent("change",{value:!1,oldValue:!0,changeType:"pointer"}),t.$.fireEvent("uncheckValue",{changeType:"pointer"}),t.checked=!1):t._checkedBeforeChange._changeCheckState("pointer"),t.focus(),t._updateHidenInputNameAndValue()),t.$.setAttributeValue("active",!1),t._pressed=!1)}_handleMouseInteraction(){const e=this;e._handleTextSelection(),e._changeCheckState("pointer"),e.focus(),e._updateHidenInputNameAndValue()}_handleMultipleCheckedInstances(){const e=Array.from(document.querySelectorAll('smart-radio-button[group-name="'+this.groupName+'"][checked]')),t=Array.from(document.querySelectorAll('smart-ui-radio-button[group-name="'+this.groupName+'"][checked]')),a=e.length+t.length;a<2||e.concat(...t).forEach(((e,t)=>t<a-1&&(e.checked=!1)))}_changeCheckState(e){const t=this;let a=document.querySelectorAll('smart-radio-button[group-name="'+t.groupName+'"]'),n=document.querySelectorAll('smart-ui-radio-button[group-name="'+t.groupName+'"]'),o=Array.from(a).concat(...n);if(!0===t.checked&&"api"===e||!1===t.checked)if(o.length>0)t._changeCheckStateInGroup(o,e);else{let r=t.parentNode;t.getRootNode().host?(r=t.getRootNode().host.parentNode,a=r.querySelectorAll("smart-radio-button:not([group-name])"),n=r.querySelectorAll("smart-ui-radio-button:not([group-name])"),o=Array.from(a).concat(...n)):o=r.querySelectorAll("smart-radio-button:not([group-name])"),t._changeCheckStateInGroup(o,e)}}_updateGroupValue(){const e=this;if(e.dataset.target){const t=document.querySelector(e.dataset.target);if(t&&e.checked){const a=e.dataset.property,n=e.dataset.value;if(a&&void 0!==t[a]){let e=n;"true"===e&&(e=!0),"false"===e&&(e=!1),t[a]=e}else e.name?(t.value=e.name,e.id&&t.setAttribute("data-id",e.id)):e.id&&(t.value=e.id),e._targetDispatchTimer&&clearTimeout(e._targetDispatchTimer),e._targetDispatchTimer=setTimeout((()=>{t.dispatchEvent(new Event("change"))}),100)}}}_changeCheckStateInGroup(e,t){const a=this,n=a.getRootNode().host?a.getRootNode().host:a;for(let t=0;t<e.length;t++)e[t]._isUpdating=!0,e[t]===n?n.checked=!0:e[t].checked&&(e[t].checked=!1),e[t]._isUpdating=!1;n.nativeElement?(n.nativeElement.$.fireEvent("change",{value:!0,oldValue:!1,changeType:t}),n.nativeElement.$.fireEvent("checkValue",{changeType:t})):(n.$.fireEvent("change",{value:!0,oldValue:!1,changeType:t}),n.$.fireEvent("checkValue",{changeType:t})),a._updateGroupValue()}propertyChangedHandler(e,t,a){const n=this;switch(e){case"value":n._updateHidenInputNameAndValue();break;case"checked":n._isUpdating||n._changeCheckState("api"),n._updateHidenInputNameAndValue();break;case"name":n._updateHidenInputName();break;default:super.propertyChangedHandler(e,t,a)}}});