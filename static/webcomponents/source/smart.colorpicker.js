
/* Smart UI v15.0.11 (2023-02-01) 
Copyright (c) 2011-2023 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-color-picker",class extends Smart.DropDownButton{static get properties(){return{applyValueMode:{value:"instantly",allowedValues:["instantly","useButtons"],type:"string"},columnCount:{value:8,type:"number"},gridThemeColors:{value:null,type:"array?",reflectToAttribute:!1},gridShadeColors:{value:null,type:"array?",reflectToAttribute:!1},gridStandardColors:{value:null,type:"array?",reflectToAttribute:!1},paletteColors:{value:null,type:"array?",reflectToAttribute:!1},paletteCustomColors:{value:null,type:"array?",reflectToAttribute:!1},disableUndo:{value:!1,type:"boolean"},displayMode:{value:"default",allowedValues:["default","grid","palette","radial","hexagonal","spectrumGrid","materialGrid"],type:"string"},dropDownAppendTo:{value:null,type:"any"},dropDownHeight:{value:"auto",type:"string"},dropDownWidth:{value:"auto",type:"string"},editable:{value:!1,type:"boolean"},editAlphaChannel:{value:!1,type:"boolean"},enableCustomColors:{value:!1,type:"boolean"},hidePreviewContainer:{value:!1,type:"boolean"},hideRGBEditor:{value:!1,type:"boolean"},hideHEXEditor:{value:!1,type:"boolean"},hideAlphaEditor:{value:!1,type:"boolean"},messages:{value:{en:{redPrefix:"R:",greenPrefix:"G:",bluePrefix:"B:",hexPrefix:"#:",alphaPrefix:"Alpha:",ok:"OK",cancel:"CANCEL",customColor:"CUSTOM COLOR",standardColors:"Standard colors",themeColors:"Theme colors"}},type:"object",extend:!0},name:{value:"",type:"string"},palette:{value:"default",allowedValues:["default","gray","red","green","blue","custom"],type:"string"},placeholder:{value:"Please Select Color",type:"string"},tooltipDisplayMode:{value:"hex",allowedValues:["none","rgba","rgb","hex"],type:"string"},value:{value:null,type:"string?"},valueDisplayMode:{value:"default",allowedValues:["default","colorBox","colorCode","none"],type:"string"},valueFormat:{value:"default",allowedValues:["default","rgb","rgba","hex"],type:"string"},inverted:{value:!1,type:"boolean"},hideContentToFit:{value:["RGB","HEX","alpha","previewContainer"],type:"array"}}}static get listeners(){return{"input.change":"_inputChangeHandler","input.focus":"_focusEventHandler","input.blur":"_blurEventHandler","colorPanel.cancelButtonClick":"_cancelButtonHandler","colorPanel.okButtonClick":"_okButtonHandler","colorPanel.customColorSelection":"_customColorSelectionHandler","colorPanel.change":"_colorPanelChangeHandler",keydown:"_keyDownHandler"}}static get requires(){return{"Smart.ColorPanel":"smart.colorpanel.js","Smart.DropDownButton":"smart.dropdownbutton.js"}}static get styleUrls(){return["smart.colorpanel.css","smart.colorpicker.css"]}template(){return'<div id="container" role="presentation">\n                    <span class="smart-label" id="label">[[label]]</span>\n                    <div id="content" class="smart-content" role="presentation">\n                        <div id="buttonsContainer" class="smart-buttons-container" role="presentation">\n                            <div id="actionButton" class="smart-action-button">\n                                <div id="colorSampleContainer" class="smart-color-box color-picker-sample-container" role="presentation">\n                                    <div id="colorSample" class="color-picker-sample"></div>\n                                </div>\n                                <input type="text" id="input" class="smart-input smart-color-input color-picker-action-input" placeholder="[[placeholder]]" spellcheck="false" autocomplete="off" aria-label="[[placeholder]]" />\n                            </div>\n                            <span id="dropDownButton" class="smart-drop-down-button">\n                                <span class="smart-drop-down-button-icon" id="arrow" aria-hidden="true"></span>\n                            </span>\n                        </div>\n                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-color-picker smart-drop-down-container smart-visibility-hidden" role="dialog">\n                            <smart-color-panel id="colorPanel" wait\n                                             animation="[[animation]]"\n                                             apply-value-mode="[[applyValueMode]]"\n                                             column-count="[[columnCount]]"\n                                             disabled="[[disabled]]"\n                                             display-mode="[[displayMode]]"\n                                             edit-alpha-channel="[[editAlphaChannel]]"\n                                             enable-custom-colors="[[enableCustomColors]]"\n                                             grid-theme-colors="[[gridThemeColors]]"\n                                             grid-shade-colors="[[gridShadeColors]]"\n                                             grid-standard-colors="[[gridStandardColors]]"\n                                             hide-content-to-fit="[[hideContentToFit]]"\n                                             hide-preview-container="[[hidePreviewContainer]]"\n                                             hide-r-g-b-editor="[[hideRGBEditor]]"\n                                             hide-h-e-x-editor="[[hideHEXEditor]]"\n                                             hide-alpha-editor="[[hideAlphaEditor]]"\n                                             inverted="[[inverted]]"\n                                             locale="[[locale]]"\n                                             messages="[[messages]]"\n                                             name="[[name]]"\n                                             palette-colors="[[paletteColors]]"\n                                             palette-custom-colors="[[paletteCustomColors]]"\n                                             palette="[[palette]]"\n                                             right-to-left="[[rightToLeft]]"\n                                             theme="[[theme]]"\n                                             tooltip-display-mode="[[tooltipDisplayMode]]"\n                                             value="{{value}}"\n                                             value-format="[[valueFormat]]">\n                            </smart-color-panel>\n                            <div id="resizeBar" class="smart-drop-down-resize-bar" aria-label="Resize">\n                                <div></div>\n                            </div>\n                        </div>\n                    </div>\n                    <span class="smart-hidden smart-hint" id="hint">[[hint]]</span>\n                </div>'}propertyChangedHandler(e,o,t){const a=this;switch(e){case"editable":case"disabled":case"readonly":a.$.input.readOnly=a.disabled||a.readonly||!a.editable;break;case"value":a.$.colorPanel._isValidColor(a.value)&&a._applyValue(a.value);break;case"displayMode":a._applyValue(a.value);break;case"dropDownOpenMode":super.propertyChangedHandler(e,o,t),"dropDownButton"===t?a.$.actionButton.setAttribute("aria-label",a.value||a.placeholder):a.$.actionButton.removeAttribute("aria-label");break;case"resizeMode":a.$.dropDownContainer.setAttribute("resize-mode",a.resizeMode);break;case"valueDisplayMode":"none"===t?a.$.actionButton.setAttribute("role","presentation"):a.$.actionButton.removeAttribute("role");break;default:super.propertyChangedHandler(e,o,t)}"displayMode"===e&&a.$.colorPanel._hideControlsByPriority()}open(){const e=this,o=document.querySelectorAll("smart-drop-down-button, smart-color-picker");e.$.colorPanel._initializeOnOpening&&(delete e.$.colorPanel._initializeOnOpening,e.$.colorPanel._generateGridStructures(),e.$.colorPanel._applyValue(e.value),e.$.colorPanel._hideControlsByPriority());for(let t=0;t<o.length;t++)o[t]!==e&&o[t].opened&&o[t].close();e.$.colorPanel&&e.$.colorPanel.$container.hasClass("custom-color-selection")&&e.$.colorPanel._handleCancelButtonClick(),e._open()}blur(){this.$.input.blur()}focus(){this.$.input.focus()}_createElement(){const e=this;e.$.colorPanel._initializeOnOpening=!e.opened,e.$.colorPanel.wait=!1,e.$.colorPanel.setAttribute("role","presentation"),e.$.input.readOnly=e.disabled||e.readonly||!e.editable,e.editable&&(e.dropDownOpenMode="dropDownButton"),e._setAriaRelations(!0),"none"===e.valueDisplayMode?e.$.actionButton.setAttribute("role","presentation"):e.$.actionButton.removeAttribute("role"),e._applyValue(e.$.colorPanel.value),e._setFocusable()}_colorPanelChangeHandler(e){this._applyValue(e.detail.value),e.stopPropagation(),this.$.fireEvent("change",e.detail)}_cancelButtonHandler(e){const o=this;e.stopPropagation(),o.$.colorPanel.$.container.className.indexOf("custom-color-selection")>-1||o.close(),o.$.fireEvent(e.type,e.detail)}_customColorSelectionHandler(e){const o=this;e.stopPropagation(),o._positionDetection.checkBrowserBounds("vertically"),o._positionDetection.positionDropDown(),o._positionDetection.checkBrowserBounds("horizontally"),o.$.fireEvent(e.type,e.detail)}_okButtonHandler(e){const o=this;e.stopPropagation(),o.$.colorPanel.$.container.className.indexOf("custom-color-selection")>-1||(o._applyValue(o.$.colorPanel.value),o.close()),o.$.fireEvent(e.type,e.detail)}_setFocusable(){const e=this;if(!e.disabled&&!e.unfocusable){let o=e.tabIndex>0?e.tabIndex:0;return e.$.input.tabIndex=o,void("dropDownButton"===e.dropDownOpenMode?e.$.dropDownButton.setAttribute("tabindex",o):e.$.dropDownButton.removeAttribute("tabindex"))}e.$.input.tabIndex=-1,e.$.dropDownButton.removeAttribute("tabindex")}_inputChangeHandler(e){const o=this;e.preventDefault(),e.stopPropagation(),o.value=o.$.colorPanel.value=o.$.input.value}_applyValue(e){const o=this;o.value=o.$.colorPanel.value=o.$.colorSample.style.backgroundColor=o.$.input.value=e,e?(o.$colorSampleContainer.removeClass("no-color"),o.$.colorSample.setAttribute("aria-label",e)):(o.$colorSampleContainer.addClass("no-color"),o.$.colorSample.setAttribute("aria-label","No color")),o.label||o._ariaButton.setAttribute("aria-label",e||o.placeholder),"dropDownButton"===o.dropDownOpenMode&&o.$.actionButton.setAttribute("aria-label",e||o.placeholder)}_keyDownHandler(e){const o=this,t=o.shadowRoot||o.isInShadowDOM?e.composedPath()[0]:e.target,a=(o.shadowRoot||o.getRootNode()).activeElement||document.activeElement;if(!(o.disabled||o.readonly||a!==o&&a!==o.$.dropDownButton&&a!==o.$.input))switch(e.key){case"Enter":case" ":t!==o.$.input?o.opened&&"Enter"===e.key?(e.preventDefault(),o.close()):o.opened||o.readonly||"none"===o.dropDownOpenMode||(e.preventDefault(),o.open()):"Enter"===e.key&&(e.preventDefault(),o.$.colorPanel.value=o.$.input.value);break;case"ArrowUp":case"ArrowDown":if(e.altKey)return void(o.disabled||o.readonly||"none"===o.dropDownOpenMode||("ArrowDown"===e.key?o.open():o.close()));e.preventDefault();break;case"Escape":e.preventDefault(),o.close()}}});