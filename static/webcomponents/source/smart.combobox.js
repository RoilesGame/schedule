
/* Smart UI v15.0.11 (2023-02-01) 
Copyright (c) 2011-2023 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-combo-box",class extends Smart.DropDownList{static get properties(){return{autoComplete:{allowedValues:["none","manual","auto","inline","list"],type:"string",value:"none"},autoCompleteDelay:{value:100,type:"number"},autoOpenShortcutKey:{value:[],type:"array"},dropDownOpenMode:{allowedValues:["none","default","dropDownButton","auto"],value:"dropDownButton",defaultReflectToAttribute:!0,type:"string"},escKeyMode:{allowedValues:["clearValue","firstPossibleValue","none","previousValue"],type:"string",value:"none"},inputPurpose:{type:"string",value:"off"},minLength:{type:"number",value:2},maxLength:{type:"number",value:-1},value:{value:"",type:"string"}}}static get listeners(){return{"input.focus":"_inputFocusHandler","input.blur":"_inputFocusHandler","dropDownButton.focus":"_dropDownButtonFocusHandler","dropDownButton.blur":"_dropDownButtonFocusHandler","input.change":"_inputChangeEventHandler","input.mouseenter":"_buttonsMouseEventsHandler","input.mouseleave":"_buttonsMouseEventsHandler","document.down":"_documentDownHandler","document.up":"_documentUpHandler","document.selectstart":"_selectStartHandler","dropDownButton.down":"_buttonsDownHandler","dropDownButton.mouseenter":"_buttonsMouseEventsHandler","dropDownButton.mouseleave":"_buttonsMouseEventsHandler",keydown:"_keyDownHandler",keyup:"_keyUpHandler","listBox.change":"_listBoxChangeHandler","listBox.itemClick":"_listBoxItemClickHandler","listBox.keydown":"_listBoxKeyDownHandler",wheel:"_mouseWheelHandler"}}static get styleUrls(){return["smart.combobox.css"]}template(){return'<div id="container" role="presentation">\n                    <span class="smart-label" id="label">[[label]]</span>\n                    <div id="content" class="smart-content" role="presentation">\n                        <div class="smart-buttons-container" id="buttonsContainer" role="presentation">\n                            <span id="actionButton" class="smart-action-button" role="presentation">\n                                <input name="[[name]]" class="smart-input" id="input" placeholder="[[placeholder]]" autocomplete="[[inputPurpose]]" role="textbox" aria-label="[[placeholder]]" />\n                                <div class="smart-combo-box-auto-complete-string" id="autoCompleteString"></div>\n                            </span>\n                            <span id="dropDownButton" class="smart-drop-down-button" role="button" aria-label="Toggle popup">\n                                <span class="smart-drop-down-button-icon" id="arrow" aria-hidden="true"></span>\n                            </span>\n                        </div>\n                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden" role="presentation">\n                            <smart-list-box id="listBox" unfocusable\n                                    animation="[[animation]]"\n                                    data-source="[[dataSource]]"\n                                    disabled="[[disabled]]"\n                                    display-loading-indicator="[[displayLoadingIndicator]]"\n                                    display-member="[[displayMember]]"\n                                    filterable="[[filterable]]"\n                                    filter-callback="[[filterCallback]]"\n                                    filter-mode="[[filterMode]]"\n                                    filter-input-placeholder="[[filterInputPlaceholder]]"\n                                    grouped="[[grouped]]"\n                                    group-member="[[groupMember]]"\n                                    item-height="[[itemHeight]]"\n                                    item-measure-mode="[[itemMeasureMode]]"\n                                    item-template="[[itemTemplate]]"\n                                    incremental-search-delay="[[incrementalSearchDelay]]"\n                                    incremental-search-mode="[[incrementalSearchMode]]"\n                                    loading-indicator-placeholder="[[loadingIndicatorPlaceholder]]"\n                                    loading-indicator-position="[[loadingIndicatorPosition]]"\n                                    placeholder="[[dropDownPlaceholder]]"\n                                    readonly="[[readonly]]"\n                                    right-to-left="[[rightToLeft]]"\n                                    selected-indexes="{{selectedIndexes}}"\n                                    selection-mode="[[selectionMode]]"\n                                    selected-values="{{selectedValues}}"\n                                    sorted="[[sorted]]"\n                                    theme="[[theme]]"\n                                    value-member="[[valueMember]]"\n                                    horizontal-scroll-bar-visibility="[[horizontalScrollBarVisibility]]"\n                                    vertical-scroll-bar-visibility="[[verticalScrollBarVisibility]]"\n                                    virtualized="[[virtualized]]">\n                                <content></content>\n                            </smart-list-box>\n                            <div id="resizeBar" class="smart-drop-down-resize-bar" aria-label="Resize">\n                                <div></div>\n                            </div>\n                         </div>\n                    </div>\n                    <span class="smart-hint" id="hint">[[hint]]</span>\n                </div>'}render(){super.render();const e=this;e.value!==e.$.input.value&&(e.$.input.value=e.value)}propertyChangedHandler(e,t,o){const n=this;switch(e){case"autoComplete":if("list"===o){n.$.listBox.$.filterInput.value="";let e=n.$.listBox.context;n.$.listBox.context=n.$.listBox,n.$.listBox._filterItems(!0),n.$.listBox.context=e,n._setDropDownSize()}n._autoComplete(!0),n._setAriaAutocomplete();break;case"dataSource":case"displayMember":n._clearSelection(!0),n._setDropDownSize(),n._positionDetection.checkBrowserBounds("vertically"),n._positionDetection.positionDropDown(),n._positionDetection.checkBrowserBounds("horizontally");break;case"maxLength":n.$.input.setAttribute("maxlength",n.maxLength);break;case"disabled":n.$.input.disabled=o,n._setFocusable(),n.close(),n._positionDetection&&n._positionDetection.handleAutoPositioning(),n._ariaPropertyChangedHandler("disabled",o);break;case"readonly":n.$.input.readOnly=o,n.close(),n._ariaPropertyChangedHandler("readonly",o);break;case"selectedValues":case"selectedIndexes":n._clearSelection(!0);break;case"selectionMode":case"selectionDisplayMode":n._clearSelection(),n._applySelectionDisplayMode(),"tokens"===n.selectionDisplayMode&&(n._currentSelection=void 0),n._applySelection(n.selectionMode),"selectionMode"===e&&super.propertyChangedHandler(e,t,o);break;case"tokenTemplate":if(n.$.selectionField)for(;"SPAN"===n.$.selectionField.firstElementChild.nodeName;)n.$.selectionField.removeChild(n.$.selectionField.firstElementChild);n._tokenTemplate=n._validateTemplate(n.tokenTemplate),n._applySelection();break;case"value":n.clearSelection(),n.value=n.$.input.value=n._oldValue=o,n._queryItems(!0),n._currentSelection&&!n._currentSelection.length&&(n.$.fireEvent("change",{oldValue:t,value:n.$.input.value,addedItems:[],removedItems:[],selected:[],disabled:[],index:[],label:[]}),n._updateTargetValue());break;default:super.propertyChangedHandler(e,t,o)}}clearItems(){this.$.listBox.clearItems(),this._clearSelection(!0)}clearSelection(){this.$.listBox.clearSelection(),this._clearSelection(!arguments[0])}blur(){this.$.input.blur()}close(){super.close(),this.$.input.removeAttribute("aria-controls")}focus(){this.$.input.focus()}open(){super.open(),this.$.input.setAttribute("aria-controls",this.$.listBox.id)}_setFocusable(){const e=this;if(!e.disabled&&!e.unfocusable){let t=e.tabIndex>0?e.tabIndex:0;return e.$.input.tabIndex=t,void("dropDownButton"===e.dropDownOpenMode?e.$.dropDownButton.setAttribute("tabindex",t):e.$.dropDownButton.removeAttribute("tabindex"))}e.$.input.tabIndex=-1,e.$.dropDownButton.removeAttribute("tabindex")}_autoComplete(e){const t=this;if("list"===t.autoComplete)return;if(0===t.$.listBox._items.length&&"function"!=typeof t.dataSource)return void t.close();const o=t.$.input.value.length<t.minLength?"":"escaped"===t.displayMode?t._toDefaultDisplayMode(t.$.input.value):t.$.input.value;let n;1===t.$.listBox.selectedValues.length&&(n=t.$.listBox.getItem(t.$.listBox.selectedValues[0])),t.$.autoCompleteString.textContent="",t.$.listBox.$.filterInput.value="none"===t.autoComplete||t.$.input.value.length<t.minLength?"":o;let i=t.$.listBox.context;t.$.listBox.context=t.$.listBox,t.$.listBox._filterItems(!!e,(function(){if(!t.$.listBox.isAttached||!t.$.input)return;const e=t.enableShadowDOM?t.shadowRoot.activeElement:document.activeElement;if(t._setDropDownSize(),t.opened&&(t._positionDetection.positionDropDown(),t._positionDetection.checkBrowserBounds()),t.$.listBox._filteredItems&&t.$.listBox._filteredItems.length>0){if(t.$.listBox._scrollView.scrollTop=t.$.listBox._filteredItems[0].offsetTop,"none"!==t.autoComplete&&t.$.input.value.length>=t.minLength&&!function(e){for(let t=0;t<e.length;t++)if(e[t]._focused&&e[t].hasAttribute&&e[t].hasAttribute("focus"))return!0}(t.$.listBox._filteredItems)&&t._focus(t.$.listBox._filteredItems[0]),e===t.$.input&&"inline"===t.autoComplete&&t.$.input.value.length>=t.minLength&&t._updateAutoCompleteHelper(),n&&n[t.inputMember]===t.$.listBox._filteredItems[0][t.inputMember]&&n.value===t.$.listBox._filteredItems[0].value&&(t.$.listBox.context=t.$.listBox,t.$.listBox._select(t.$.listBox._filteredItems[0],!0),t.$.listBox.context=i),o!==t.$.listBox._filteredItems[0][t.inputMember]||Smart.TextBox&&t instanceof Smart.TextBox&&"auto"===t.dropDownOpenMode){if(t._closedFromKeyCombination)return void(t._closedFromKeyCombination=!1);if(o.length<t.minLength&&!(Smart.TextBox&&t instanceof Smart.TextBox&&"auto"===t.dropDownOpenMode))return void t.close();t.isCompleted&&"none"!==t.dropDownOpenMode&&e===t.$.input&&t.open()}}else t["function"==typeof t.dataSource?"open":"close"]()}),Smart.TextBox&&t instanceof Smart.TextBox&&"auto"===t.dropDownOpenMode),t.$.listBox.context=i}_updateAutoCompleteHelper(){const e=this,t=e.$.autoCompleteString;if(t.style.width=e.$.input.offsetWidth+"px",t.style.height=e.$.input.offsetHeight+"px",t.style.left=e.$.input.offsetLeft+"px",t.style.top=e.$.input.offsetTop+"px",t.style.paddingLeft=e.selectedIndexes.length>0?0:null,!e._focusedItem)return void(t.textContent="");const o=e.$.input.value,n=e._focusedItem[e.inputMember];n.length!==o.length&&0===n.toLowerCase().indexOf(o.toLowerCase())&&(t.textContent=e.$.input.value+n.slice(o.length))}_applySelection(e,t){const o=this;if(o.$.selectionField||(o.$.selectionField=o.$.actionButton),o.$.autoCompleteString.textContent="",0!==o.selectedIndexes.length){if(o.$.listBox._items&&0!==o.$.listBox._items.length)if("one"===o.selectionMode||"zeroAndOne"===o.selectionMode||"zeroOrOne"===o.selectionMode||"radioButton"===o.selectionMode){if(o._currentSelection&&o._currentSelection.length>o.selectedIndexes.length)return o._currentSelection=o.selectedIndexes.map((e=>o.$.listBox._items[e][o.inputMember])),o.$.input.value=o._currentSelection.toString(),void(o._oldValue=o.value=o._currentSelection.toString());o._clearSelection(),o._currentSelection=o.selectedIndexes.map((e=>o.$.listBox._items[e][o.inputMember])),o.$.input.value=o._currentSelection.toString(),o._oldValue=o.value=o._currentSelection.toString(),o.$.container.setAttribute("has-value",""),"none"!==o.autoComplete&&"function"!=typeof o.dataSource&&(o._autoComplete(!0),o._keyboardNavigation||o.close())}else{for(o.$.input.value="",o.$.input.placeholder="",o.$.container.setAttribute("has-value","");"SPAN"===o.$.selectionField.firstElementChild.nodeName;)o.$.selectionField.removeChild(o.$.selectionField.firstElementChild);let e,t,n=document.createDocumentFragment();t=1!==o.selectedIndexes.length||"oneOrManyExtended"!==o.selectionMode&&"oneOrMany"!==o.selectionMode?"tokens"===o.selectionDisplayMode?"&#10006":",":"",o.selectedIndexes.map((i=>{e=o._applyTokenTemplate(o.$.listBox._items[i][o.inputMember],t),e._value=o.$.listBox._items[i].value,n.appendChild(e)})),o.$.selectionField.insertBefore(n,o.$.input),o._currentSelection=o.selectedIndexes.map((e=>o.$.listBox._items[e][o.inputMember])),o._oldValue=o.value=o._currentSelection.toString(),o._positionDetection.positionDropDown()}}else o._clearSelection(t&&t.index>-1&&o.$.input.value===o.$.listBox._items[t.index][o.inputMember])}_applySelectionDisplayMode(){const e=this;"one"===e.selectionMode||"zeroAndOne"===e.selectionMode||"zeroOrOne"===e.selectionMode||"radioButton"===e.selectionMode?e.$.removeClass("auto-height"):e.$.addClass("auto-height")}_bindingCompleteHandler(){this._queryItems(),this._setDropDownSize()}_buttonsMouseEventsHandler(e){const t=this;t.disabled||t.readonly||("mouseenter"===e.type?(e.target.setAttribute("hover",""),t.setAttribute("hover",""),"auto"!==t.dropDownOpenMode||Smart.TextBox&&t instanceof Smart.TextBox?"dropDownButton"===t.dropDownOpenMode&&e.target===t.$.dropDownButton&&t.setAttribute("drop-down-button-hover",""):e.target===t.$.dropDownButton?(t.open(),t.$.input.focus()):t.close()):(e.target.removeAttribute("hover"),t.removeAttribute("hover"),t.removeAttribute("drop-down-button-hover")))}_createElement(){const e=this;e.classList.add("smart-drop-down-box"),e._tokenTemplate=e._validateTemplate(e.tokenTemplate),e._applySelectionDisplayMode(),e._applySelection(e.selectionMode),"none"!==e.autoComplete&&e._autoComplete(!0),e._setDropDownSize(),e.$.input.disabled=e.disabled,e.$.input.readOnly=e.readonly,e._setFocusable(),e.$.input.value.length>0&&0===e.selectedIndexes.length&&(e.$.container.setAttribute("has-value",""),e._oldValue=e.value=e.$.input.value),e.maxLength>0&&e.$.input.setAttribute("maxlength",e.maxLength),e.$.arrow.noRipple=!0,e.checkLicense(),e._setAriaRelations(!0)}_clearSelection(e){const t=this;if(e&&(t.$.input.value="",t.value=""),t.$.input.placeholder=t.placeholder,t.$.autoCompleteString.textContent="",t._currentSelection=[],t.$.selectionField)for(;"SPAN"===t.$.selectionField.firstElementChild.nodeName;)t.$.selectionField.removeChild(t.$.selectionField.firstElementChild);"none"!==t.autoComplete&&"list"!==t.autoComplete&&t.$.input.value.length>0&&(t._autoCompleteTimer&&clearTimeout(t._autoCompleteTimer),"function"!=typeof t.dataSource&&(t._autoCompleteTimer=setTimeout((function(){t._autoComplete(!0)}),t.autoCompleteDelay))),t.$.input.value.length||t.$.container.removeAttribute("has-value")}_documentDownHandler(e){const t=this;super._documentDownHandler(e);let o=e.originalEvent.target;(t.shadowRoot||t.isInShadowDOM)&&(o=e.originalEvent.composedPath()[0]),o!==t.$.dropDownButton||"none"===t.dropDownOpenMode||Smart.Utilities.Core.isMobile||requestAnimationFrame((()=>t.$.input.focus()))}_documentUpHandler(e){const t=this;let o=e.originalEvent.target,n=o.closest?o.closest("smart-combo-box"):void 0;(t.shadowRoot||t.isInShadowDOM)&&(o=e.originalEvent.composedPath()[0],n=o.getRootNode().host);const i=o;if(t._resizeDetails&&t._resizeDetails.started)return t._resizeDetails.started=t._resizeDetails.resizeEventFired=!1,t.removeAttribute("resizing"),t._dropDownResized=!0,void t.$.fireEvent("resizeEnd",{position:{left:e.pageX,top:e.pageY}});if(t.disabled||t._isDropDownClicked||t.readonly)return void delete t._isDropDownClicked;if(t._overlayDown)return t.close(),void delete t._overlayDown;if(o===t.$.input||void 0===o||o===t.$.resizeBar)return;if(o===t.$.selectionField)return void t.$.input.focus();if(o===t.$.dropDownButton&&"none"!==t.dropDownOpenMode)return t._preventDropDownClose=!0,o===t._buttonClicked&&t.$dropDownContainer.hasClass("smart-visibility-hidden")&&"pointercancel"!==e.originalEvent.type?t.open():t.close(),Smart.Utilities.Core.isMobile||requestAnimationFrame((()=>t.$.input.focus())),void(t._buttonClicked=void 0);const l=o.closest(".smart-drop-down-list-selection-label");if(l&&n===t&&"none"!==t.dropDownOpenMode){const e=t.$.listBox._items.filter((e=>e[t.inputMember].toString()===l.innerHTML))[0];if(!e||t.$.fireEvent("tokenClick",{index:t.$.listBox._items.indexOf(e),label:e.label,value:e.value}).defaultPrevented)return;return t.open(),t.$.input.focus(),t.$.listBox.ensureVisible(e),void t._focus(e)}if("tokens"===t.selectionDisplayMode&&o.closest(".smart-drop-down-list-unselect-button")&&n===t){if(1===t.selectedIndexes.length&&["zeroOrMany","zeroOrOne","checkBox"].indexOf(t.selectionMode)<0)return;return t.unselect(t.$.listBox._items.filter((e=>e[t.inputMember].toString()===o.previousElementSibling.innerHTML))[0]),void t.$.input.focus()}o=t._getUpEventTarget(o),void 0!==o?((!t.$dropDownContainer.hasClass("smart-visibility-hidden")&&"dropDownContainer"!==o&&"item"!==o||"item"===o&&t.selectionMode.indexOf("Many")<0&&"checkBox"!==t.selectionMode)&&t.close(),("item"===o||"dropDownContainer"===o&&i!==t.$.listBox.$.filterInput)&&t.$.input.focus()):t.$.input.focus()}_dropDownButtonFocusHandler(e){const t=this;"focus"===e.type?("dropDownButton"!==t.dropDownOpenMode&&t.$.input.focus(),t.setAttribute("focus","")):t.removeAttribute("focus")}_inputFocusHandler(e){const t=this;if(!t.disabled)if("focus"===e.type)t.setAttribute("focus",""),t._buttonClicked||(t._oldValue=t.$.input.value),t.$.fireEvent("focus");else{if(t.removeAttribute("focus"),t.$.fireEvent("blur"),""!==e.target.value||0!==t.selectedIndexes.length&&""===e.target.value?t.$.container.setAttribute("has-value",""):t.$.container.removeAttribute("has-value"),t._preventDropDownClose||(t.opened&&("auto"===t.autoComplete||"inline"===t.autoComplete)&&t.$.input.value.length>0&&t._focusedItem&&!t._focusedItem.selected&&t.select(t._focusedItem),t.close()),!t._handleAutoCompleteModeList())return;"previousValue"===t.escKeyMode&&(t.value=t.$.input.value)}}_handleAutoCompleteModeList(){const e=this;if("list"===e.autoComplete&&!e._buttonClicked){if(e.opened&&e._isDropDownClicked)return!1;if(e.$.autoCompleteString.textContent="",e._lastSelectedItem)e._lastSelectedItem.selected||e.select(e._lastSelectedItem);else if(e.$.input.value.length&&e._oldValue){const t=e.$.listBox._queryItems(e._oldValue,e.incrementalSearchMode);for(let o=0;o<t.length;o++)if(!t[o].hidden){t[o].selected||e.select(t[o]),e._focus(t[o]);break}e.value=e.$.input.value=e._oldValue}else e.value=e.$.input.value=""}}_inputChangeEventHandler(e){const t=this;e.stopPropagation(),t._preventInputChangeEvent?delete t._preventInputChangeEvent:t._isDropDownClicked||t._oldValue===t.$.input.value||(t.$.fireEvent("change",{oldValue:t._oldValue,value:t.$.input.value,addedItems:[],removedItems:[],selected:[],disabled:[],index:[],label:[]}),t._updateTargetValue())}_keyDownHandler(e){const t=this,o=t.enableShadowDOM?e.composedPath()[0]:e.target;if(t.disabled||t.readonly||o===t.$.listBox.$.filterInput)return;const n="function"==typeof t._focusedItem?t._focusedItem():t._focusedItem;switch(e.key){case"Enter":if(delete t._preventInputChangeEvent,o===t.$.input&&n&&t.opened){if(n.selected&&"list"===t.autoComplete)return t.close(),t._unfocus(),void t._handleAutoCompleteModeList();n.disabled||(t.select(n),t._preventInputChangeEvent=!0),!t.$dropDownContainer.hasClass("smart-visibility-hidden")&&t.selectionMode.indexOf("one")>-1&&(t.close(),t._unfocus())}else o===t.$.dropDownButton?(t.$.dropDownButton.setAttribute("active",""),t.$dropDownContainer.hasClass("smart-visibility-hidden")&&"none"!==t.dropDownOpenMode?t.open():t.close(),t.$.input.focus()):t.close();return void t._handleAutoCompleteModeList();case"Escape":switch(t.escKeyMode){case"none":t.$dropDownContainer.hasClass("smart-visibility-hidden")||(t.close(),t._unfocus());break;case"clearValue":t.value=t.$.input.value="",t.close();break;case"previousValue":t.$.input.value=t._oldValue;break;case"firstPossibleValue":{const e=t.$.listBox._items.find((e=>!e.disabled&&!e.hidden&&!e.readonly));if(e){const o=e[t.inputMember];t.$.input.value===o&&t.close(),t.$.input.value=o}t.close();break}}break;case"End":case"Home":case"PageUp":case"PageDown":case"ArrowUp":case"ArrowDown":if(!0===t._autoOpenOnKeyDown(e))return;if(e.altKey){if(t._closedFromKeyCombination=!0,t.$dropDownContainer.hasClass("smart-visibility-hidden")&&"none"!==t.dropDownOpenMode){if("ArrowDown"===e.key&&t.open(),!t.opened)return;if(0===t.items.length)return;0===t.selectedIndexes.length?t._focus(t.items[0]):t.selectedIndexes.length>0&&!t.$.listBox._items[t.selectedIndexes[t.selectedIndexes.length-1]].hidden&&t._focus(t.items[t.selectedIndexes[t.selectedIndexes.length-1]])}else t.close();return}if(o===t.$.input&&t.$dropDownContainer.hasClass("smart-visibility-hidden"))return void(e.ctrlKey&&(e.preventDefault(),t._handleKeyStroke(e.key)));if(("PageUp"===e.key||"PageDown"===e.key)&&!n||o===t.$.listBox.$.filterInput)return;if(e.preventDefault(),!n||n&&!n._focused)return void t._focus(t.items[0]);t._handleKeyStroke(e.key),"inline"!==t.autoComplete&&"list"!==t.autoComplete||t._updateAutoCompleteHelper();break;case"Backspace":if(t.$.input.previousElementSibling){if(0===t.$.input.value.length){if(1===t.selectedIndexes.length&&["zeroOrMany","zeroOrOne","checkBox"].indexOf(t.selectionMode)<0)return;const e=t.$.listBox.getItem(t.$.input.previousElementSibling._value);e?t.unselect(e):t.$.selectionField.firstElementChild&&"SPAN"===t.$.selectionField.firstElementChild.nodeName&&t.$.selectionField.removeChild(t.$.selectionField.firstElementChild)}return}t.selectedIndexes.length>1&&t.clearSelection(!0);break;default:if(o===t.$.input&&"oneOrManyExtended"===t.selectionMode&&(t.$.listBox._keysPressed[e.key]=!0),!0===t._autoOpenOnKeyDown(e))return}}_handleKeyStroke(e){const t=this,o=t.$.listBox;if("none"===t.autoComplete)return void o._handleKeyStrokes(e);const n=t.items;switch(e){case"ArrowLeft":case"ArrowUp":t._handleArrowKeys(!0);break;case"ArrowRight":case"ArrowDown":t._handleArrowKeys(!1);break;case"Home":case"End":{if(0===n.length)return;const i="Home"===e;t._focus(i?n[0]:n[n.length-1]),o.scrollTop=i?0:o.scrollHeight;break}case"PageUp":t._pageUpKeyHandler(n);break;case"PageDown":t._pageDownKeyHandler(n)}o._recycle()}_handleArrowKeys(e){const t=this,o=t.$.listBox;let n;if(t._focusedItem)n=t.$.listBox._indexOf(t._focusedItem),t._focusedItem._focused=!1;else{if(0===t.selectedIndexes.length)return;n=t.selectedIndexes[t.selectedIndexes.length-1]}const i=e?o._getPreviousItem(n):o._getNextItem(n);t._focus(i),"list"===t.autoComplete&&o._items[n]!==i&&(t._keyboardNavigation=!0,o.clearSelection(),o.select(i),delete t._keyboardNavigation),t.ensureVisible(i)}_pageDownKeyHandler(e){const t=this,o=t.$.listBox;let n,i=o._items[t.selectedIndexes[t.selectedIndexes.length-1]];o._focusedItem&&(i=o._focusedItem);const l=o._indexOf(i);let s=i.top+o.$.itemsContainer.offsetHeight-i.height;for(let t=l;t<e.length;t++)if(e[t].top>=s){n=e[t];break}n||(n=e[e.length-1]),t._focus(n),(n.height+n.top>o.$.itemsContainer.scrollTop+o.$.itemsContainer.offsetHeight||n.top<o.$.itemsContainer.scrollTop)&&(o.scrollTop=n.top-o.$.itemsContainer.offsetHeight+n.height)}_pageUpKeyHandler(e){const t=this,o=t.$.listBox;let n=o._items[t.selectedIndexes[t.selectedIndexes.length-1]];o._focusedItem&&(n=o._focusedItem);const i=n.top-o.$.itemsContainer.offsetHeight;let l;for(let t=o._indexOf(n);t>0;t--)if(e[t].top<=i){l=e[t];break}l||(l=e[0]),o._focus(l),o.scrollTop=l.top,0===o._indexOf(l)&&(o.scrollTop=0)}_autoOpenOnKeyDown(e){const t=this;if(t.opened||!t.opened&&t.autoOpenShortcutKey.indexOf(e.key)<0)return;t.selectedIndexes.length&&t._focus(t.items[t.selectedIndexes[t.selectedIndexes.length-1]]);const o="function"==typeof t._focusedItem?t._focusedItem():t._focusedItem;return t.open(),(!o||o&&!o._focused)&&("ArrowDown"===e.key?t._focus(t.items[0]):"ArrowUp"===e.key&&t._focus(t.items[t.items.length-1]),t.ensureVisible(t._focusedItem)),!0}_keyUpHandler(e){const t=this,o=t.enableShadowDOM?e.composedPath()[0]:e.target;if(!(t.disabled||"none"===t.escKeyMode&&"Escape"===e.key||o===t.$.listBox.$.filterInput))if(delete t._preventInputChangeEvent,o===t.$.input&&"oneOrManyExtended"===t.selectionMode&&(t.$.listBox._keysPressed[e.key]=!1),["one","zeroAndOne","radioButton","zeroOrOne"].indexOf(t.selectionMode)>-1&&1===t.selectedIndexes.length&&t.$.input.value!==(t._currentSelection?t._currentSelection[0]:void 0)&&t.unselect(t.$.listBox._items[t.selectedIndexes[0]]),"Enter"!==e.key){if(o===t.$.input&&e.key.indexOf("Arrow")<0&&["Control","Shift"].indexOf(e.key)<0){if(t.value===t.$.input.value)return;if(t._currentSelection?t.value=t._currentSelection.toString()+(t._currentSelection.length>0?",":"")+t.$.input.value:t.value=t.$.input.value,t.$.autoCompleteString.textContent="",t._closedFromKeyCombination)return void(t._closedFromKeyCombination=!1);if("none"!==t.autoComplete&&"list"!==t.autoComplete?(t.$.input.value!==(t._currentSelection?t._currentSelection.toString():void 0)||t.$.listBox._filteredItems&&t.$.listBox._filteredItems.length!==t.$.listBox._items.length)&&(t._autoCompleteTimer&&clearTimeout(t._autoCompleteTimer),t._autoCompleteTimer=setTimeout((function(){t._autoComplete(!0)}),t.autoCompleteDelay)):(t.$.input.value.length>0&&t._queryItems(),!t._focusedItem||"Escape"===e.key&&"firstPossibleValue"===t.escKeyMode||(t.open()," "!==e.key&&(t.$.listBox._scrollView.scrollTop=t._focusedItem.offsetTop))),"none"!==t.autoComplete&&"list"!==t.autoComplete&&t.$.listBox._filteredItems&&t.$.listBox._filteredItems.length===t.$.listBox._items.length)return void t.close()}}else t.$.dropDownButton.removeAttribute("active")}_queryItems(e){const t=this;if(!t.value||!t.$.input)return void t.close();let o=t.$.listBox._queryItems(t.$.input.previousElementSibling?t.$.input.value:t.value,t.incrementalSearchMode);0===o.length&&t._unfocus();for(let n=0;n<o.length;n++)if(!o[n].hidden){e&&!o[n].selected&&t.select(o[n]),t._focus(o[n]);break}"list"===t.autoComplete&&(t.enableShadowDOM?t.shadowRoot.activeElement:document.activeElement)===t.$.input&&t.$.input.value.length>=t.minLength?(t._lastSelectedItem=t._focusedItem,t._updateAutoCompleteHelper()):t._lastSelectedItem=void 0}_selectStartHandler(e){this._resizeDetails&&this._resizeDetails.started&&e.preventDefault()}_unfocus(){const e=this;e._focusedItem&&(e._focusedItem._focused=!1,e.$.listBox._focusedItem=void 0)}_setAriaRelations(){const e=this;e.setAttribute("role","combobox"),e.setAttribute("aria-describedby",e.$.hint.id),e.setAttribute("aria-expanded",e.opened),e.setAttribute("aria-haspopup","listbox"),e.setAttribute("aria-labelledby",e.$.label.id),e._ariaButton=e,e._setAriaAutocomplete()}_setAriaAutocomplete(){const e=this.autoComplete,t=this.$.input;"none"===e?t.setAttribute("aria-autocomplete","none"):"auto"===e||"manual"===e?t.setAttribute("aria-autocomplete","list"):t.setAttribute("aria-autocomplete","both")}});