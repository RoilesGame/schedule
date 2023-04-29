
/* Smart UI v15.0.11 (2023-02-01) 
Copyright (c) 2011-2023 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("Grid.Menu",class{_openColumnChooserMenu(e){const t=this;if(e||(e=t._commandColumn),!e||t.menu&&t.menu.column===e&&e.element.hasAttribute("aria-controls"))return void t.closeMenu();t.menu||(t.menu=document.createElement("div"),t.menu.classList.add("smart-grid-column-menu"),t.menu.setAttribute("theme",t.getAttribute("theme")),t.menu.id=t.id+"_"+t.tagName.toLowerCase()+"_menu_"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)),t.appearance.allowColumnMenuAnimation?t.menu.classList.add("smart-animate"):t.menu.classList.remove("smart-animate"),t._createColumnChooserMenuItems(e),t.menu.style.height=t.columnMenu.height?t.columnMenu.height+"px":"auto",t.menu.column&&t.menu.column!==e&&(t.menu.column.setProperty("menu",null),t.menu.column=null),t.isInShadowDOM?t.getRootNode().appendChild(t.menu):document.body.appendChild(t.menu),e.setProperty("menu",t.menu);const n=e.element.getBoundingClientRect();t.menu.column=e,t._filterContainer&&("none"!==e.filterMenuMode&&t.filtering.filterMenu.visible&&Smart.FilterPanel?t._filterContainer.classList.remove("smart-hidden"):t._filterContainer.classList.add("smart-hidden"));let l=n.right-n.width+window.pageXOffset,i=n.bottom+window.pageYOffset;l+t.menu.offsetWidth>window.innerWidth&&(l=n.right+window.pageXOffset-t.menu.offsetWidth,t.menu.classList.add("smart-open-right"),l+t.menu.offsetWidth>window.innerWidth&&(l=window.innerWidth-t.menu.offsetWidth)),t.menu.style.left=l+"px",t.menu.style.top=i+"px",t.menu.classList.remove("smart-hidden"),t.menu.classList.add("open")}_openColumnFilterMenu(e){const t=this;if(!e||t.filterRowMenu&&t.filterRowMenu.column===e&&e.element.hasAttribute("aria-controls"))return void t.closeMenu();t.filterRowMenu||(t.filterRowMenu=document.createElement("div"),t.filterRowMenu.classList.add("smart-grid-column-menu"),t.filterRowMenu.setAttribute("theme",t.getAttribute("theme")),t.filterRowMenu.id=t.id+"_"+t.tagName.toLowerCase()+"_menu_"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)),t.appearance.allowColumnMenuAnimation?t.filterRowMenu.classList.add("smart-animate"):t.filterRowMenu.classList.remove("smart-animate"),t._createColumnFilterMenuItems(e),t.filterRowMenu.style.height=t.columnMenu.height?t.columnMenu.height+"px":"auto",t.filterRowMenu.column&&t.filterRowMenu.column!==e&&(t.filterRowMenu.column.setProperty("menu",null),t.filterRowMenu.column=null),t.isInShadowDOM?t.getRootNode().appendChild(t.filterRowMenu):document.body.appendChild(t.filterRowMenu),e.setProperty("filterRowMenu",t.filterRowMenu);const n=e.element.getBoundingClientRect();t.filterRowMenu.column=e;let l=n.left+window.pageXOffset,i=n.bottom+t.layout.rowMinHeight+window.pageYOffset;return l+t.filterRowMenu.offsetWidth>window.innerWidth&&(l=n.right+window.pageXOffset-t.filterRowMenu.offsetWidth,l+t.filterRowMenu.offsetWidth>window.innerWidth&&(l=window.innerWidth-t.filterRowMenu.offsetWidth)),t.filterRowMenu.style.left=l+"px",t.filterRowMenu.style.top=i+"px",t.filterRowMenu.classList.remove("smart-hidden"),t.filterRowMenu.classList.add("open"),setTimeout((()=>{t.filterRowMenu.querySelector("smart-menu").focus()}),50),t.filterRowMenu}openContextMenu(e,t){const n=this;if(n.contextMenu.selector){const l=document.querySelector(n.contextMenu.selector);l&&setTimeout((()=>{l.open(e,t)}),100)}else n._closeMenu(n._contextMenu),n._contextMenu||(n._contextMenu=document.createElement("div"),n._contextMenu.classList.add("smart-grid-column-menu"),n._contextMenu.setAttribute("theme",n.getAttribute("theme")),n._contextMenu.id=n.id+"_"+n.tagName.toLowerCase()+"_menu_"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),n.menu=n._contextMenu),n.appearance.allowColumnMenuAnimation?n._contextMenu.classList.add("smart-animate"):n._contextMenu.classList.remove("smart-animate"),n.rightToLeft?n._contextMenu.setAttribute("right-to-left",""):n._contextMenu.removeAttribute("right-to-left"),n.contextMenu.dataField?n._contextMenu.column=n.columnByDataField[n.contextMenu.dataField]:n._contextMenu.column=n.columns[0],n._createContextMenuItems(n._contextMenu),n._contextMenu.style.height=n.contextMenu.height?n.contextMenu.height+"px":"auto",n._contextMenu.style.width=n.contextMenu.width?n.contextMenu.width+"px":"auto",n.isInShadowDOM?n.getRootNode().appendChild(n.menu):document.body.appendChild(n._contextMenu),n._contextMenu.style.left=e+"px",n._contextMenu.style.top=t+"px",n._contextMenu.classList.remove("smart-hidden"),n._contextMenu.classList.add("open"),setTimeout((()=>{n._contextMenu&&n._contextMenu.querySelector("smart-menu").focus()}),50)}_openMenu(e){const t=this;if(!e||t.menu&&t.menu.column===e&&e.element.hasAttribute("aria-controls")||!1===t.columnMenu.enabled)return void t.closeMenu();t._closeMenu(t.filterRowMenu),t.$.headerBar&&t.header.visible&&t.$.headerBar.closePanel(),t.menu||(t.menu=document.createElement("div"),t.menu.classList.add("smart-grid-column-menu"),t.menu.setAttribute("theme",t.getAttribute("theme")),t.menu.id=t.id+"_"+t.tagName.toLowerCase()+"_menu_"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)),t.appearance.allowColumnMenuAnimation?t.menu.classList.add("smart-animate"):t.menu.classList.remove("smart-animate"),t.rightToLeft?t.menu.setAttribute("right-to-left",""):t.menu.removeAttribute("right-to-left"),t._createMenuItems(e),t._createFilterPanel(e),t._filterMenuItemsVisibility(e),t.menu.style.height=t.columnMenu.height?t.columnMenu.height+"px":"auto",t.menu.column&&t.menu.column!==e&&(t.menu.column.setProperty("menu",null),t.menu.column=null),t.isInShadowDOM?t.getRootNode().appendChild(t.menu):document.body.appendChild(t.menu),e.setProperty("menu",t.menu);const n=e.element.getBoundingClientRect();t.menu.column=e;let l=n.right-e.element.actionButton.getBoundingClientRect().width+window.pageXOffset,i=n.bottom+window.pageYOffset;t.menu.classList.remove("smart-open-right"),t.rightToLeft&&(l=n.left+window.pageXOffset-t.menu.offsetWidth+e.element.actionButton.getBoundingClientRect().width,l<0&&(l=n.left+window.pageXOffset)),l+t.menu.offsetWidth>window.innerWidth&&(l=n.right+window.pageXOffset-t.menu.offsetWidth,l+t.menu.offsetWidth>window.innerWidth&&(l=window.innerWidth-t.menu.offsetWidth),t.menu.classList.add("smart-open-right")),t.menu.style.left=l+"px",t.menu.style.top=i+"px",t.hasColumnMenu(e)?t.menu.classList.remove("smart-hidden"):t.closeMenu(),t.menu.classList.add("open"),setTimeout((()=>{t.menu&&(t.menu.querySelector(".smart-filter-panel-input")?t.menu.querySelector(".smart-filter-panel-input").focus():t.menu.querySelector("smart-menu").focus())}),50)}_menuItemClick(e){const t=this,n=e.detail.value;if(n&&n.properties){const e=n.properties.command;"function"==typeof e?e.apply(t,[n.column,n.properties]):t[e]&&t[e].apply(t,[n.column,n.properties]),n.column&&n.column.autoCloseMenu&&t.closeMenu()}}contextMenuItemDeleteCommand(){const e=this;void 0!==e.contextMenu.id&&e.deleteRow(e.contextMenu.id)}contextMenuItemEditCommand(){const e=this;void 0!==e.contextMenu.id&&e.editing.enabled&&("cell"===e.editing.mode?e.beginEdit(e.contextMenu.id,e.contextMenu.dataField):e.beginEdit(e.contextMenu.id))}removeGroupByCommand(e){this.removeGroup(e.dataField),this.autoSaveState()}groupByCommand(e){const t=this;t.dataSource&&(t.$.headerBar?t.header.visible&&t.header.buttons.indexOf("group")>=0&&t.$.headerBar.openGroupPanel(e):t.addGroup(e.dataField),t.autoSaveState())}autoSaveState(){const e=this;e.stateSettings.autoSave&&e.stateSettings.current&&!e.stateSettings.loading&&e.saveState()}sortAscCommand(e){this.sortBy(e.dataField,"asc"),this.autoSaveState()}sortDescCommand(e){this.sortBy(e.dataField,"desc"),this.autoSaveState()}removeSortCommand(e){this.sortBy(e.dataField,null),this.autoSaveState()}addSortCommand(e){const t=this;t.$.headerBar&&t.$.headerBar.openSortPanel(e)}addFilterCommand(e){const t=this;t.$.headerBar&&t.$.headerBar.openFilterPanel(e)}removeFilterCommand(e){this.removeFilter(e.dataField)}customizeTypeCommand(e){this._openAddColumnDialog(e,"rename")}hideColumnCommand(e){e.visible=!1,this.autoSaveState()}deleteColumnCommand(e){const t=this;t.columns.splice(t.columns.indexOf(e),1);for(let n=0;n<t.rows.length;n++)delete t.rows[n].data[e.dataField]}duplicateCommand(e,t,n){const l=this,i=new Smart.Grid.Column(e);delete i._state;let o=e.dataField,a=0;if(void 0===n){let t=!1;for(let n=0;n<l.rows.length;n++)if(l.rows[n].data[e.dataField]){t=!0;break}if(t)return void l._openDescriptionDialog(e,"duplicate")}for(let e=0;e<l.columns.length;e++)l.columns[e].dataField.indexOf(o)>=0&&a++;if(i.displayField=i.dataField=e.dataField+"_"+a,"object"==typeof e.editor){const t={};for(let n in e.editor)"instance"!==n&&"cell"!==n&&"column"!==n&&"row"!==n&&"isInitialized"!==n&&(t[n]=e.editor[n]);i.editor=JSON.parse(JSON.stringify(t))}const r=l.columns.indexOf(e);if(n)for(let t=0;t<l.rows.length;t++){const n=l.rows[t],o=n.data[e.dataField];n.data[i.dataField]=o}i.label=e.label+` ${l.localize("copy")} `+a,l.columns.splice(1+r,0,i),l.onColumnClone&&setTimeout((()=>{l.onColumnClone(e.dataField,i.dataField,1+r,n)}),100)}_removeMenu(){const e=this;if(e.menu){const t=e.menu.querySelector("smart-menu");t&&e.menu.removeChild(t)}if(e.filterRowMenu){const t=e.filterRowMenu.querySelector("smart-menu");t&&e.filterRowMenu.removeChild(t)}if(e._contextMenu){const t=e._contextMenu.querySelector("smart-menu");t&&(e._contextMenu.removeChild(t),e._contextMenu.parentNode.removeChild(e._contextMenu))}}_createColumnChooserMenuItems(e){const t=this;t._removeMenu();const n=document.createElement("smart-menu"),l=document.createDocumentFragment();if(n.mode="vertical",n.dropDownAppendTo="body",n.checkboxes=!0,n.checkable=!0,n.classList.add("smart-grid-column-chooser-menu"),n.rightToLeft=t.rightToLeft,e&&"_addNewColumn"===e.dataField){if(t._kanbanViewColumns&&t._kanbanViewColumns.length>0)for(let e=0;e<t._kanbanViewColumns.length;e++){const n=t._kanbanViewColumns[e],i=t.columnByDataField[n.dataField];if(i&&i.visible)continue;const o=document.createElement("smart-menu-item"),a=n.showIcon?n.icon:n.visible?"smart-icon-eye":"smart-icon-eye-off";o.checked=n.visible,n.allowHide&&(n.command=function(e){t.closeMenu();const n=t.columnByDataField[e.dataField];n.visible=!0,delete n._visible;const l=t._kanbanViewColumns.indexOf(e);l>=0&&t._kanbanViewColumns.splice(l,1)},o.label=t.localize(n.label)||n.label||n.dataField,o.value={column:n,properties:n},a&&(o.label='<span class="smart-grid-icon '+a+'"></span>'+o.label),l.appendChild(o))}const e=document.createElement("smart-menu-item");e.label='<span class="smart-grid-icon smart-icon-plus"></span>'+t.localize("dialogNewColumn"),e.value={properties:{command:()=>{t.closeMenu(),t._openAddColumnDialog()}}},l.appendChild(e)}else for(let e=0;e<t.columns.length;e++){const n=t.columns[e],i=document.createElement("smart-menu-item"),o=n.showIcon?n.icon:n.visible?"smart-icon-eye":"smart-icon-eye-off";i.checked=n.visible,n.allowHide&&(n.command=function(e){e.visible=!e.visible},i.label=t.localize(n.label)||n.label||n.dataField,i.value={column:n,properties:n},o&&(i.label='<span class="smart-grid-icon '+o+'"></span>'+i.label),l.appendChild(i))}n.appendChild(l),t.menu.appendChild(n),t.menu.itemCheckChange=t._menuItemClick.bind(t),t.menu.addEventListener("itemCheckChange",t.menu.itemCheckChange),t.menu.addEventListener("keydown",t._keyDownHandler.bind(t))}_createColumnFilterMenuItems(e){const t=this;t._removeMenu();const n=document.createElement("smart-menu"),l=document.createDocumentFragment();n.mode="vertical",n.dropDownAppendTo="body",n.classList.add("smart-grid-column-filter-menu"),n.rightToLeft=t.rightToLeft;const i=e._filterInfo.dataSource;for(let t=0;t<i.length;t++){const n=i[t],o=document.createElement("smart-menu-item"),a=n.icon;o.label=n.label,o.value={column:e,properties:n},a&&(o.label='<span class="smart-grid-icon '+a+'"></span>'+o.label),e._filterInfo.condition===n.value&&o.setAttribute("focus",""),l.appendChild(o)}n.appendChild(l),t.filterRowMenu.appendChild(n),t.filterRowMenu.itemClick=t._menuItemClick.bind(t),t.filterRowMenu.addEventListener("itemClick",t.filterRowMenu.itemClick),t.filterRowMenu.addEventListener("keydown",(e=>{"Escape"===e.key&&t._closeMenu(t.filterRowMenu)}))}_createMenuItems(e){const t=this;t._removeMenu();const n=document.createElement("smart-menu"),l=document.createDocumentFragment(),i=e.menuItems||t.columnMenu.dataSource;n.mode="vertical",n.dropDownAppendTo="body",n.rightToLeft=t.rightToLeft;for(let n in i){const o=i[n],a=document.createElement("smart-menu-item");let r=o.icon;a.label=t.localize(n),a.value={column:e,properties:o};const s=t=>{if(t){if("string"===e.dataType)return"A → Z";if("number"===e.dataType||"date"===e.dataType||"time"===e.dataType)return"1 → 9";if("bool"===e.dataType||"boolean"===e.dataType)return"0 → 1"}else{if("string"===e.dataType)return"Z → A";if("number"===e.dataType||"date"===e.dataType||"time"===e.dataType)return"9 → 1";if("bool"===e.dataType||"boolean"===e.dataType)return"1 → 0"}};"columnMenuItemSortAsc"===n?(a.label=t.localize(n,{mode:s(!0)}),"string"!==e.dataType&&o.iconAlt&&(r=o.iconAlt)):"columnMenuItemSortDesc"===n&&(a.label=t.localize(n,{mode:s(!1)}),"string"!==e.dataType&&o.iconAlt&&(r=o.iconAlt)),r&&(a.label='<span class="smart-grid-icon '+r+'"></span>'+a.label),l.appendChild(a)}n.appendChild(l),t._filterContainer?t.menu.insertBefore(n,t._filterContainer):t.menu.appendChild(n),t.menu.itemClick=t._menuItemClick.bind(t),t.menu.addEventListener("itemClick",t.menu.itemClick),t.menu.addEventListener("keydown",t._keyDownHandler.bind(t))}_createContextMenuItems(){const e=this;e._removeMenu();const t=document.createElement("smart-menu"),n=document.createDocumentFragment(),l=e.contextMenu.dataSource;t.mode="vertical",t.dropDownAppendTo="body",t.rightToLeft=e.rightToLeft;for(let t in l){const i=l[t],o=document.createElement("smart-menu-item");let a=i.icon;!0===i.visible?o.classList.remove("smart-hidden"):!1===i.visible&&o.classList.add("smart-hidden"),"contextMenuItemEdit"===t?(e.editing.enabled||(o.disabled=!0),"{{messages}}"===i.label?"cell"===e.editing.mode?o.label=e.localize("contextMenuItemEditCell"):o.label=e.localize("contextMenuItemEditRow"):o.label=i.label):"{{messages}}"===i.label?o.label=e.localize(t):o.label=i.label,o.value={properties:i},a&&(o.label='<span class="smart-grid-icon '+a+'"></span>'+o.label),n.appendChild(o)}t.appendChild(n),e._contextMenu.appendChild(t),e._contextMenu.itemClick=t=>{t.detail.value.column=t.detail.item.column=e._contextMenu.column,e._menuItemClick(t),e._closeMenu(e._contextMenu),e.$.fireEvent("contextMenuItemClick",{id:e._contextMenu.id,dataField:e._contextMenu.column.dataField,command:t.detail.value.properties.command})},e._contextMenu.style.minHeight="30px",e._contextMenu.addEventListener("itemClick",e._contextMenu.itemClick),e._contextMenu.addEventListener("keydown",e._keyDownHandler.bind(e))}_getFilterType(e){let t="string";switch(e.dataType.endsWith("?")?e.dataType.substring(0,e.dataType.length-1):e.dataType){case"number":case"int":case"float":case"int64":t="numeric";break;case"bool":case"boolean":t="bool";break;case"date":case"time":case"datetime":t="date";break;case"any":t="string"}return t}_createFilterPanel(e){const t=this;if(Smart.FilterPanel)if(t.filtering.enabled&&t.filtering.filterMenu.visible&&e.allowFilter&&!t.filtering.filterRow.visible&&(!t.header.visible||t.header.visible&&-1===t.header.buttons.indexOf("filter"))){const n=t._getFilterType(e);t._filterPanel&&t._filterPanel.parentNode&&t._filterPanel.parentNode.removeChild(t._filterPanel),t._filterPanel=t._filterPanels[n],t._filterPanel.dataField=e.dataField,t._filterPanel.rightToLeft=t.rightToLeft,t.filtering.filterMenu.messages?t._filterPanel.messages=t.filtering.filterMenu.messages:t._filterPanel.messages=t.messages,"excel"===e.filterMenuMode&&(t._filterPanel.dataField=e.dataField,t.dataSource&&t.dataSource.boundSource&&(t._filterPanel.data=t.dataSource.boundSource.toArray?t.dataSource.boundSource.toArray():t.dataSource.boundSource)),t._filterPanel.mode=e.filterMenuMode,t._filterPanel.locale=t.locale;const l=t._filterPanel.querySelectorAll(".smart-filter-panel-input");for(let e=0;e<l.length;e++)l[e].onkeydown=e=>{"Enter"===e.key&&t._filterPanel.filter()};if(!t._filterContainer){const e=document.createElement("div");e.classList.add("smart-filter-container"),t._filterContainer=e,requestAnimationFrame((function(){t.menu.appendChild(e)})),t._applyFilterHandler=function(){t.addFilter(t._filterPanel.dataField,t._filterPanel.getFilter()),t.columnByDataField[t._filterPanel.dataField]._filterState=t._filterPanel.getState(),t.autoSaveState()},t._clearFilterHandler=function(){requestAnimationFrame((()=>{t.removeFilter(t._filterPanel.dataField),t.columnByDataField[t._filterPanel.dataField]._filterState=null,t.autoSaveState()}))}}t._filterContainer.appendChild(t._filterPanel),t._filterPanel.classList.remove("smart-hidden"),t._filterPanel.removeEventListener("filter",t._applyFilterHandler),t._filterPanel.removeEventListener("clear",t._clearFilterHandler),t._filterPanel.addEventListener("filter",t._applyFilterHandler),t._filterPanel.addEventListener("clear",t._clearFilterHandler);const i=t._filterContainer.querySelector(".smart-grid-custom-filter-panel");if(i&&t._filterContainer.removeChild(i),"none"!==e.filterMenuMode&&t.filtering.filterMenu.visible&&Smart.FilterPanel?t._filterContainer.classList.remove("smart-hidden"):t._filterContainer.classList.add("smart-hidden"),e.getFilterPanel)if(e._customFilterPanel)e.updateFilterPanel(e._customFilterPanel,e),t._filterContainer.removeChild(t._filterPanel),t._filterContainer.appendChild(e._customFilterPanel);else{const n=e.getFilterPanel(e);n&&(n.classList.add("smart-grid-custom-filter-panel"),e._customFilterPanel=n,t._filterContainer.removeChild(t._filterPanel),t._filterContainer.appendChild(n))}if(t._filterPanel.reset(),e._filterState)t._filterPanel.loadState(e._filterState);else if(e.filter){const n=e.filter,l=t._getFilterType(e);let i=n.getFilters();for(;i.length>0&&"FilterGroup"===i[0].type;)i=i[0].value;const o=n.getConditions(l),a=i.length>0?o.indexOf(i[0].condition):-1,r=i.length>1?o.indexOf(i[1].condition):-1,s=i.length>0?i[0].value:"",d=i.length>1?i[1].value:"",u=i.length>1?["and","or"].indexOf(i[1].logicalOperator):0;"excel"===e.filterMenuMode?(e._filterState={filters:i},t._filterPanel.loadState(e._filterState)):(e._filterState={firstFilterComparison:a,firstFilterValue:s,logicalOperator:u,secondFilterComparison:r,secondFilterValue:d},t._filterPanel.loadState(e._filterState))}}else t._filterPanel&&(t._filterPanel.parentNode&&t._filterPanel.parentNode.removeChild(t._filterPanel),e._filterState=null)}hasColumnMenu(e){const t=this;if(!1===t.columnMenu.enabled)return!1;const n=e.menuItems||t.columnMenu.dataSource;let l=0,i=0;for(let o in n){const a=n[o];i++,!1===a.visible?l++:"auto"===a.visible&&("columnMenuItemFilter"!==o&&"columnMenuItemRemoveFilter"!==o||(t.filtering.filterMenu.visible||t.filtering.filterRow.visible)&&(!t.header.visible||t.header.visible&&-1===t.header.buttons.indexOf("filter"))&&l++,"columnMenuItemGroupBy"!==o&&"columnMenuItemRemoveGroupBy"!==o||e.allowGroup&&t.grouping.enabled||l++,"columnMenuItemSort"!==o||e.allowSort&&t.sorting.enabled||l++,"columnMenuItemFilter"!==o||e.allowFilter&&t.filtering.enabled||l++,"columnMenuItemRemoveFilter"!==o||e.allowFilter&&t.filtering.enabled||l++,"columnMenuItemGroupBy"!==o||e.allowGroup||l++,"columnMenuItemSortAsc"!==o&&"columnMenuItemSortDesc"!==o&&"columnMenuItemRemoveSort"!==o||e.allowSort&&t.sorting.enabled||l++)}return!!(t.filtering.enabled&&t.filtering.filterMenu.visible&&"none"!==e.filterMenuMode&&Smart.FilterPanel||Smart.Menu&&!(l>=i))}_filterMenuItemsVisibility(e){const t=this,n=(t.menu.parentElement&&(t.enableShadowDOM||t.isInShadowDOM)?t.menu.firstElementChild.shadowRoot:t.menu).querySelectorAll("smart-menu-item"),l=e.menuItems||t.columnMenu.dataSource;let i=0;for(let o in l){const a=n[i++],r=l[o];if(a.disabled=!r.enabled,a.classList.remove("smart-hidden"),"columnMenuItemDelete"!==o||e.allowDelete)if("columnMenuItemHide"!==o||e.allowHide){if("columnMenuItemRemoveSort"===o&&(e.sortOrder?a.disabled=!1:a.disabled=!0),("columnMenuItemSortAsc"===o&&"asc"===e.sortOrder||"columnMenuItemSortDesc"===o&&"desc"===e.sortOrder)&&(a.disabled=!0),!0===r.visible)a.classList.remove("smart-hidden");else if(!1===r.visible)a.classList.add("smart-hidden");else if("auto"===r.visible){if("columnMenuItemFilter"!==o&&"columnMenuItemRemoveFilter"!==o||(!1===t.filtering.enabled?a.classList.add("smart-hidden"):((t.filtering.filterMenu.visible||t.filtering.filterRow.visible)&&a.classList.add("smart-hidden"),t.header.visible&&t.header.buttons.indexOf("filter")>=0&&a.classList.remove("smart-hidden"),e.filtered||"columnMenuItemRemoveFilter"!==o||a.classList.add("smart-hidden"))),"columnMenuItemSort"===o&&(!1===t.sorting.enabled?a.classList.add("smart-hidden"):(a.classList.add("smart-hidden"),t.header.visible&&t.header.buttons.indexOf("sort")>=0&&a.classList.remove("smart-hidden"))),"columnMenuItemGroupBy"===o){t.grouping.enabled&&e.allowGroup?a.classList.remove("smart-hidden"):a.classList.add("smart-hidden");const n=t.dataSource.groupBy.indexOf(e.dataField);a.disabled=n>=0}if("columnMenuItemRemoveGroupBy"===o){t.grouping.enabled&&e.allowGroup?a.classList.remove("smart-hidden"):a.classList.add("smart-hidden"),t.header.visible&&t.header.buttons.indexOf("group")>=0&&a.classList.add("smart-hidden");const n=t.dataSource.groupBy.indexOf(e.dataField);a.disabled=n<0}"columnMenuItemFilter"!==o||e.allowFilter||a.classList.add("smart-hidden"),"columnMenuItemSort"!==o||e.allowSort||a.classList.add("smart-hidden"),"columnMenuItemRemoveFilter"!==o||e.allowFilter||a.classList.add("smart-hidden"),"columnMenuItemSortAsc"!==o&&"columnMenuItemSortDesc"!==o&&"columnMenuItemRemoveSort"!==o||(e.allowSort&&t.sorting.enabled?a.classList.remove("smart-hidden"):a.classList.add("smart-hidden"),t.header.visible&&t.header.buttons.indexOf("sort")>=0&&a.classList.add("smart-hidden"))}}else a.classList.add("smart-hidden");else a.classList.add("smart-hidden")}}openMenu(e){const t=this.columnByDataField[e];t&&this._openMenu(t)}hasMenu(){const e=this;return!!(e.menu&&e.menu.column&&e.menu.parentNode)}_closeMenu(e){const t=this;(e=>{e&&e.column&&(e.column&&(e.column.setProperty("menu",null),e.column=null),e.parentNode&&(e.classList.remove("open"),t.appearance.allowColumnMenuAnimation||e.parentNode.removeChild(e)),e.removeEventListener("keydown",t._keyDownHandler.bind(t)),e.removeEventListener("itemClick",e.itemClick),e.removeEventListener("itemCheckChange",e.itemCheckChange),t.focus())})(e)}closeMenu(){const e=this,t=e.menu;if(e._closeMenu(t),e._closeMenu(e.filterRowMenu),e._closeMenu(e._contextMenu),e._filterPanel){const t=e._filterPanel.querySelectorAll("smart-drop-down-list");for(let e=0;e<t.length;e++){const n=t[e];n.opened&&n.close()}}}});