import React from "react";
import { TableProperties } from "./../../index";
import { TableColumnDataType, TableColumnFreeze, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableDataSourceSettingsSanitizeHTML, TableDataSourceSettingsSanitizeHTMLRender, TableDataSourceSettingsDataFieldDataType, TableDataSourceSettingsDataSourceType, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, TableDataSourceSettings, TableDataSourceSettingsDataField} from './../../index';
export { TableProperties } from "./../../index";
export { TableColumnDataType, TableColumnFreeze, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableDataSourceSettingsSanitizeHTML, TableDataSourceSettingsSanitizeHTMLRender, TableDataSourceSettingsDataFieldDataType, TableDataSourceSettingsDataSourceType, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, TableDataSourceSettings, TableDataSourceSettingsDataField} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface TableProps extends TableProperties {
    className?: string;
    style?: React.CSSProperties;

	onCellBeginEdit?: ((event?: Event) => void) | undefined;
	onCellClick?: ((event?: Event) => void) | undefined;
	onCellEndEdit?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onCollapse?: ((event?: Event) => void) | undefined;
	onExpand?: ((event?: Event) => void) | undefined;
	onColumnClick?: ((event?: Event) => void) | undefined;
	onCloseColumnMenu?: ((event?: Event) => void) | undefined;
	onColumnResize?: ((event?: Event) => void) | undefined;
	onFilter?: ((event?: Event) => void) | undefined;
	onGroup?: ((event?: Event) => void) | undefined;
	onOpenColumnMenu?: ((event?: Event) => void) | undefined;
	onPage?: ((event?: Event) => void) | undefined;
	onRowBeginEdit?: ((event?: Event) => void) | undefined;
	onRowEndEdit?: ((event?: Event) => void) | undefined;
	onSort?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Table is an alternative of the HTMLTableElement.
*/
export class Table extends React.Component<React.HTMLAttributes<Element> & TableProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Table' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
	*	Property type: boolean
	*/
	get autoLoadState(): boolean  {
		return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
	}
	set autoLoadState(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoLoadState = value;
		}
	}

	/** Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property.
	*	Property type: boolean
	*/
	get autoSaveState(): boolean  {
		return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
	}
	set autoSaveState(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoSaveState = value;
		}
	}

	/** Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported.
	*	Property type: TableColumnGroup[]
	*/
	get columnGroups(): TableColumnGroup[]  {
		return this.nativeElement ? this.nativeElement.columnGroups : undefined;
	}
	set columnGroups(value: TableColumnGroup[]) {
		if (this.nativeElement) {
			this.nativeElement.columnGroups = value;
		}
	}

	/** Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width.
	*	Property type: string | number
	*/
	get columnMinWidth(): string | number  {
		return this.nativeElement ? this.nativeElement.columnMinWidth : undefined;
	}
	set columnMinWidth(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.columnMinWidth = value;
		}
	}

	/** Sets or gets whether the reordering of columns is enabled.
	*	Property type: boolean
	*/
	get columnReorder(): boolean  {
		return this.nativeElement ? this.nativeElement.columnReorder : undefined;
	}
	set columnReorder(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnReorder = value;
		}
	}

	/** Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based.
	*	Property type: boolean
	*/
	get columnResize(): boolean  {
		return this.nativeElement ? this.nativeElement.columnResize : undefined;
	}
	set columnResize(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnResize = value;
		}
	}

	/** This property affects the table sizing, when the columnSizeMode is 'default'. When 'columnResizeNormalize' is false, the Table will add an additional TH element, if all table columns have the 'width' property set. This is done in order to maintain your width settings. Otherwise, when the property is set to true, the Table will auto-fill the remaining space similar to the layout of standard HTML Tables.
	*	Property type: boolean
	*/
	get columnResizeNormalize(): boolean  {
		return this.nativeElement ? this.nativeElement.columnResizeNormalize : undefined;
	}
	set columnResizeNormalize(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnResizeNormalize = value;
		}
	}

	/** Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed.
	*	Property type: boolean
	*/
	get columnResizeFeedback(): boolean  {
		return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
	}
	set columnResizeFeedback(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnResizeFeedback = value;
		}
	}

	/** Describes the columns properties.
	*	Property type: TableColumn[]
	*/
	get columns(): TableColumn[]  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: TableColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Sets or gets details about conditional formatting to be applied to the Table's cells.
	*	Property type: TableConditionalFormatting[]
	*/
	get conditionalFormatting(): TableConditionalFormatting[]  {
		return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	}
	set conditionalFormatting(value: TableConditionalFormatting[]) {
		if (this.nativeElement) {
			this.nativeElement.conditionalFormatting = value;
		}
	}

	/** Sets or gets the column menu. When you set this property to true, each column will have a column menu. From the column menu, you will be able to sort, filter, show or hide columns.
	*	Property type: boolean
	*/
	get columnMenu(): boolean  {
		return this.nativeElement ? this.nativeElement.columnMenu : undefined;
	}
	set columnMenu(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnMenu = value;
		}
	}

	/** Sets or gets the column sizing behavior. In 'auto' mode Columns are automatically sized based on their content and the value of the columnMinWidth property, unless there is not enough space in the Table, in which case ellipses are shown. User-set static column width is still respected. In 'default' mode Columns are sized according to the rules of the standard HTML table element's table-layout: fixed. Custom width can also be applied to columns in this case by setting the column width property.
	*	Property type: TableColumnSizeMode | string
	*/
	get columnSizeMode(): TableColumnSizeMode | string  {
		return this.nativeElement ? this.nativeElement.columnSizeMode : undefined;
	}
	set columnSizeMode(value: TableColumnSizeMode | string) {
		if (this.nativeElement) {
			this.nativeElement.columnSizeMode = value;
		}
	}

	/** Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options.
	*	Property type: boolean
	*/
	get conditionalFormattingButton(): boolean  {
		return this.nativeElement ? this.nativeElement.conditionalFormattingButton : undefined;
	}
	set conditionalFormattingButton(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.conditionalFormattingButton = value;
		}
	}

	/** This property determines the time in milliseconds after which the Table data is updated, when you vertically scroll.
	*	Property type: number
	*/
	get deferredScrollDelay(): number  {
		return this.nativeElement ? this.nativeElement.deferredScrollDelay : undefined;
	}
	set deferredScrollDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.deferredScrollDelay = value;
		}
	}

	/** When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to.
	*	Property type: string
	*/
	get dataRowId(): string  {
		return this.nativeElement ? this.nativeElement.dataRowId : undefined;
	}
	set dataRowId(value: string) {
		if (this.nativeElement) {
			this.nativeElement.dataRowId = value;
		}
	}

	/** Determines the data source of the table component. The data source of the Table can be a regular Array or a DataAdapter instance. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/.
	*	Property type: any
	*/
	get dataSource(): any  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Sets the grid's data source settings when the dataSource property is set to an Array or URL.
	*	Property type: TableDataSourceSettings
	*/
	get dataSourceSettings(): TableDataSourceSettings  {
		return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
	}
	set dataSourceSettings(value: TableDataSourceSettings) {
		if (this.nativeElement) {
			this.nativeElement.dataSourceSettings = value;
		}
	}

	/** Disables the interaction with the element.
	*	Property type: { (record: any): void }
	*/
	get dataTransform(): { (record: any): void }  {
		return this.nativeElement ? this.nativeElement.dataTransform : undefined;
	}
	set dataTransform(value: { (record: any): void }) {
		if (this.nativeElement) {
			this.nativeElement.dataTransform = value;
		}
	}

	/** Sets or gets whether the Table can be edited.
	*	Property type: boolean
	*/
	get disabled(): boolean  {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Sets or gets the edit mode.
	*	Property type: boolean
	*/
	get editing(): boolean  {
		return this.nativeElement ? this.nativeElement.editing : undefined;
	}
	set editing(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.editing = value;
		}
	}

	/** Sets or gets whether Row hierarchies are expanded by default, when created. Use this property when you want your groups to be expanded by default, when the Table is grouped or when you use the Table in tree mode.
	*	Property type: TableEditMode | string
	*/
	get editMode(): TableEditMode | string  {
		return this.nativeElement ? this.nativeElement.editMode : undefined;
	}
	set editMode(value: TableEditMode | string) {
		if (this.nativeElement) {
			this.nativeElement.editMode = value;
		}
	}

	/** Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header.
	*	Property type: boolean
	*/
	get expandHierarchy(): boolean  {
		return this.nativeElement ? this.nativeElement.expandHierarchy : undefined;
	}
	set expandHierarchy(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.expandHierarchy = value;
		}
	}

	/** Sets or gets whether the Table can be filtered via a filter row.
	*	Property type: boolean
	*/
	get filtering(): boolean  {
		return this.nativeElement ? this.nativeElement.filtering : undefined;
	}
	set filtering(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.filtering = value;
		}
	}

	/** Sets or gets the Table's filter operator. It determines whether 'and' or 'or' is used when applying column filters - cellvalue1 && cellvalue2 vs cellvalue1 || cellvalue2
	*	Property type: boolean
	*/
	get filterRow(): boolean  {
		return this.nativeElement ? this.nativeElement.filterRow : undefined;
	}
	set filterRow(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.filterRow = value;
		}
	}

	/** Sets or gets the id of an HTML template element to be applied as a custom filter template.
	*	Property type: boolean
	*/
	get filterOperator(): boolean  {
		return this.nativeElement ? this.nativeElement.filterOperator : undefined;
	}
	set filterOperator(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.filterOperator = value;
		}
	}

	/** Sets or gets the id of an HTML template element to be applied as footer row(s).
	*	Property type: string
	*/
	get filterTemplate(): string  {
		return this.nativeElement ? this.nativeElement.filterTemplate : undefined;
	}
	set filterTemplate(value: string) {
		if (this.nativeElement) {
			this.nativeElement.filterTemplate = value;
		}
	}

	/** Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced).
	*	Property type: string
	*/
	get footerRow(): string  {
		return this.nativeElement ? this.nativeElement.footerRow : undefined;
	}
	set footerRow(value: string) {
		if (this.nativeElement) {
			this.nativeElement.footerRow = value;
		}
	}

	/** Sets or gets whether the Table's footer is sticky/frozen.
	*	Property type: boolean
	*/
	get formulas(): boolean  {
		return this.nativeElement ? this.nativeElement.formulas : undefined;
	}
	set formulas(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.formulas = value;
		}
	}

	/** Sets or gets whether the Table's column header is sticky/frozen.
	*	Property type: boolean
	*/
	get freezeFooter(): boolean  {
		return this.nativeElement ? this.nativeElement.freezeFooter : undefined;
	}
	set freezeFooter(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.freezeFooter = value;
		}
	}

	/** Sets or gets whether grouping the Table is enabled.
	*	Property type: boolean
	*/
	get freezeHeader(): boolean  {
		return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
	}
	set freezeHeader(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.freezeHeader = value;
		}
	}

	/** Allows to customize the header of the element. The property accepts the id of an HTMLElement, HTMLTemplateElement, function or a string that will be parsed as HTML. When set to a function it contains one argument - the header element of the Table.
	*	Property type: boolean
	*/
	get grouping(): boolean  {
		return this.nativeElement ? this.nativeElement.grouping : undefined;
	}
	set grouping(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.grouping = value;
		}
	}

	/** Sets or gets whether navigation with the keyboard is enabled in the Table.
	*	Property type: { (settings: { value: any, row: string | number, column: string, template?: any }): void }
	*/
	get groupFormatFunction(): { (settings: { value: any, row: string | number, column: string, template?: any }): void }  {
		return this.nativeElement ? this.nativeElement.groupFormatFunction : undefined;
	}
	set groupFormatFunction(value: { (settings: { value: any, row: string | number, column: string, template?: any }): void }) {
		if (this.nativeElement) {
			this.nativeElement.groupFormatFunction = value;
		}
	}

	/** Sets or gets whether the checkboxes are displayed in the selection column.
	*	Property type: string | HTMLElement | Function
	*/
	get headerRow(): string | HTMLElement | Function  {
		return this.nativeElement ? this.nativeElement.headerRow : undefined;
	}
	set headerRow(value: string | HTMLElement | Function) {
		if (this.nativeElement) {
			this.nativeElement.headerRow = value;
		}
	}

	/** Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'.
	*	Property type: boolean
	*/
	get keyboardNavigation(): boolean  {
		return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
	}
	set keyboardNavigation(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.keyboardNavigation = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
	*	Property type: boolean
	*/
	get hideSelectionColumn(): boolean  {
		return this.nativeElement ? this.nativeElement.hideSelectionColumn : undefined;
	}
	set hideSelectionColumn(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideSelectionColumn = value;
		}
	}

	/** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
	*	Property type: TableLoadColumnStateBehavior | string
	*/
	get loadColumnStateBehavior(): TableLoadColumnStateBehavior | string  {
		return this.nativeElement ? this.nativeElement.loadColumnStateBehavior : undefined;
	}
	set loadColumnStateBehavior(value: TableLoadColumnStateBehavior | string) {
		if (this.nativeElement) {
			this.nativeElement.loadColumnStateBehavior = value;
		}
	}

	/** Sets or gets the page size (when paging is enabled).
	*	Property type: string
	*/
	get locale(): string  {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Sets or gets the current (zero-based) page index (when paging is enabled).
	*	Property type: any
	*/
	get messages(): any  {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** Sets or gets whether paging is enabled.
	*	Property type: { (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void }
	*/
	get onCellRender(): { (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void }  {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value: { (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void }) {
		if (this.nativeElement) {
			this.nativeElement.onCellRender = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: { (dataField: string, headerCell: HTMLTableCellElement): void }
	*/
	get onColumnRender(): { (dataField: string, headerCell: HTMLTableCellElement): void }  {
		return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
	}
	set onColumnRender(value: { (dataField: string, headerCell: HTMLTableCellElement): void }) {
		if (this.nativeElement) {
			this.nativeElement.onColumnRender = value;
		}
	}

	/** Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it.
	*	Property type: { (): void }
	*/
	get onInit(): { (): void }  {
		return this.nativeElement ? this.nativeElement.onInit : undefined;
	}
	set onInit(value: { (): void }) {
		if (this.nativeElement) {
			this.nativeElement.onInit = value;
		}
	}

	/** Sets or gets an array of the Table's selected row's ids.
	*	Property type: { (): void }
	*/
	get onLoad(): { (): void }  {
		return this.nativeElement ? this.nativeElement.onLoad : undefined;
	}
	set onLoad(value: { (): void }) {
		if (this.nativeElement) {
			this.nativeElement.onLoad = value;
		}
	}

	/** Sets or gets whether row selection (via checkboxes) is enabled.
	*	Property type: { (): void }
	*/
	get onUpdateComplete(): { (): void }  {
		return this.nativeElement ? this.nativeElement.onUpdateComplete : undefined;
	}
	set onUpdateComplete(value: { (): void }) {
		if (this.nativeElement) {
			this.nativeElement.onUpdateComplete = value;
		}
	}

	/** Sets or gets the selection mode. Only applicable when selection is enabled.
	*	Property type: TablePageSize | string
	*/
	get pageSize(): TablePageSize | string  {
		return this.nativeElement ? this.nativeElement.pageSize : undefined;
	}
	set pageSize(value: TablePageSize | string) {
		if (this.nativeElement) {
			this.nativeElement.pageSize = value;
		}
	}

	/** Sets or gets whether row selection (via checkboxes) is hierarchical. When a parent row is selected, all sub rows are selected, too.
	*	Property type: number
	*/
	get pageIndex(): number  {
		return this.nativeElement ? this.nativeElement.pageIndex : undefined;
	}
	set pageIndex(value: number) {
		if (this.nativeElement) {
			this.nativeElement.pageIndex = value;
		}
	}

	/** Determines the sorting mode of the Table.
	*	Property type: boolean
	*/
	get paging(): boolean  {
		return this.nativeElement ? this.nativeElement.paging : undefined;
	}
	set paging(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.paging = value;
		}
	}

	/** Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState).
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
	*	Property type: string
	*/
	get rowDetailTemplate(): string  {
		return this.nativeElement ? this.nativeElement.rowDetailTemplate : undefined;
	}
	set rowDetailTemplate(value: string) {
		if (this.nativeElement) {
			this.nativeElement.rowDetailTemplate = value;
		}
	}

	/** Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
	*	Property type: any[]
	*/
	get selected(): any[]  {
		return this.nativeElement ? this.nativeElement.selected : undefined;
	}
	set selected(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.selected = value;
		}
	}

	/** Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance.
	*	Property type: boolean
	*/
	get selection(): boolean  {
		return this.nativeElement ? this.nativeElement.selection : undefined;
	}
	set selection(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.selection = value;
		}
	}

	/** undefined
	*	Property type: TableSelectionMode | string
	*/
	get selectionMode(): TableSelectionMode | string  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: TableSelectionMode | string) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** undefined
	*	Property type: boolean
	*/
	get selectionByHierarchy(): boolean  {
		return this.nativeElement ? this.nativeElement.selectionByHierarchy : undefined;
	}
	set selectionByHierarchy(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.selectionByHierarchy = value;
		}
	}

	/** undefined
	*	Property type: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }
	*/
	get sort(): { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }  {
		return this.nativeElement ? this.nativeElement.sort : undefined;
	}
	set sort(value: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }) {
		if (this.nativeElement) {
			this.nativeElement.sort = value;
		}
	}

	/** undefined
	*	Property type: TableSortMode | string
	*/
	get sortMode(): TableSortMode | string  {
		return this.nativeElement ? this.nativeElement.sortMode : undefined;
	}
	set sortMode(value: TableSortMode | string) {
		if (this.nativeElement) {
			this.nativeElement.sortMode = value;
		}
	}

	/** undefined
	*	Property type: string[]
	*/
	get stateSettings(): string[]  {
		return this.nativeElement ? this.nativeElement.stateSettings : undefined;
	}
	set stateSettings(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.stateSettings = value;
		}
	}

	/** undefined
	*	Property type: string
	*/
	get theme(): string  {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** undefined
	*	Property type: boolean
	*/
	get tooltip(): boolean  {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.tooltip = value;
		}
	}

	/** undefined
	*	Property type: boolean
	*/
	get virtualization(): boolean  {
		return this.nativeElement ? this.nativeElement.virtualization : undefined;
	}
	set virtualization(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.virtualization = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["autoLoadState","autoSaveState","columnGroups","columnMinWidth","columnReorder","columnResize","columnResizeNormalize","columnResizeFeedback","columns","conditionalFormatting","columnMenu","columnSizeMode","conditionalFormattingButton","deferredScrollDelay","dataRowId","dataSource","dataSourceSettings","dataTransform","disabled","editing","editMode","expandHierarchy","filtering","filterRow","filterOperator","filterTemplate","footerRow","formulas","freezeFooter","freezeHeader","grouping","groupFormatFunction","headerRow","keyboardNavigation","hideSelectionColumn","loadColumnStateBehavior","locale","messages","onCellRender","onColumnRender","onInit","onLoad","onUpdateComplete","pageSize","pageIndex","paging","rightToLeft","rowDetailTemplate","selected","selection","selectionMode","selectionByHierarchy","sort","sortMode","stateSettings","theme","tooltip","virtualization"];
	}
	/**  This event is triggered when a cell edit operation has been initiated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
	*   id - The id of the row.
	*   dataField - The data field of the cell's column.
	*   row - The data of the cell's row.
	*   value - The data value of the cell.
	*/
	onCellBeginEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value, 	originalEvent)
	*   id - The cell's row id.
	*   dataField - The data field of the cell's column.
	*   row - The data of the cell's row.
	*   value - The data value of the cell.
	*   originalEvent - The 'click' event object.
	*/
	onCellClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a cell has been edited.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
	*   id - The id of the row.
	*   dataField - The data field of the cell's column.
	*   row - The new data of the cell's row.
	*   value - The data value of the cell.
	*/
	onCellEndEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the selection is changed. Within the event handler you can get the selection by using the 'getSelection' method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type)
	*   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row has been collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
	*   id - The id of the collapsed row.
	*   record - The data of the collapsed row.
	*/
	onCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row has been expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
	*   id - The id of the expanded row.
	*   record - The (aggregated) data of the expanded row.
	*/
	onExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
	*   dataField - The data field of the cell's column.
	*/
	onColumnClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
	*   dataField - The data field of the column.
	*/
	onCloseColumnMenu?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column has been resized via dragging or double-click.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	width)
	*   dataField - The data field of the column.
	*   headerCellElement - The column's header cell HTML element.
	*   width - The new width of the column.
	*/
	onColumnResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a filtering-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
	*   action - The filtering action. Possible actions: 'add', 'remove'.
	*   filters - The added filters. Only when action is 'add'.
	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a grouping-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label, 	path)
	*   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
	*   dataField - The data field of the column whose grouping is modified.
	*   label - The label of the group (only when collapsing/expanding).
	*   path - The group's path (only when collapsing/expanding). The path includes the path to the expanded/collapsed group starting from the root group. The indexes are joined with '.'. This parameter is available when the 'action' is 'expand' or 'collapse'.
	*/
	onGroup?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
	*   dataField - The data field of the column.
	*/
	onOpenColumnMenu?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a paging-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action)
	*   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
	*/
	onPage?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row edit operation has been initiated (only when editMode is 'row').
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
	*   id - The id of the row.
	*   row - The data of the row.
	*/
	onRowBeginEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row has been edited (only when editMode is 'row').
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
	*   id - The id of the row.
	*   row - The new data of the row.
	*/
	onRowEndEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column header cell has been clicked or sorting is applied programmatically using the Table API.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	sortDataFields, 	sortOrders, 	sortDataTypes, 	type)
	*   columns - An array with information about the columns the Table has been sorted by.
	*   sortDataFields - An array with information about the data fields the Table has been sorted by.
	*   sortOrders - An array with information about the columns sort orders the Table has been sorted by.
	*   sortDataTypes - An array with information about the columns data types the Table has been sorted by.
	*   type - The type of action that initiated the data sort. Possible types: 'programmatic', 'interaction'
	*/
	onSort?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onCellBeginEdit","onCellClick","onCellEndEdit","onChange","onCollapse","onExpand","onColumnClick","onCloseColumnMenu","onColumnResize","onFilter","onGroup","onOpenColumnMenu","onPage","onRowBeginEdit","onRowEndEdit","onSort","onCreate","onReady"];
	}
	/** Adds a new row. When you invoke the method, pass a JSON object with the row's data. 
	* @param {any} data. JSON object with the new row's data. Sample JSON: {firstName: 'Peter', lastName: 'Fuller'}.
	*/
    public addRow(data: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addRow(data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addRow(data);
            });
        }
    }

	/** Adds a filter to a specific column. 
	* @param {string} dataField. The column's data field.
	* @param {any} filter. FilterGroup object or a Filter expression. Filter expression like: 'startsWith B'. Example 2: ['contains Andrew or contains Nancy'], Example 3:  ['quantity', '&lt;= 3 and &gt;= 8'].  Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	*/
    public addFilter(dataField: string, filter: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(dataField, filter);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(dataField, filter);
            });
        }
    }

	/** Groups by a column. 
	* @param {string} dataField. The column's data field.
	*/
    public addGroup(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addGroup(dataField);
            });
        }
    }

	/** Begins an edit operation. 
	* @param {string | number} row. The id of the row to edit.
	* @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
	*/
    public beginEdit(row: string | number, dataField?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(row, dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(row, dataField);
            });
        }
    }

	/** Begins an update operation. Suspends all table refreshes and renders. 
	*/
    public beginUpdate(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }

	/** Ends the current edit operation and discards changes. 
	*/
    public cancelEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelEdit();
            });
        }
    }

	/** Clears applied filters. 
	*/
    public clearFilters(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilters();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearFilters();
            });
        }
    }

	/** Clears grouping. 
	*/
    public clearGrouping(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearGrouping();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearGrouping();
            });
        }
    }

	/** Clears selection. 
	*/
    public clearSelection(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }

	/** Clears the Table sorting. 
	*/
    public clearSort(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSort();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSort();
            });
        }
    }

	/** Collapses all rows (in tree mode). 
	*/
    public collapseAllRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAllRows();
            });
        }
    }

	/** Collapses all groups (in tree mode). 
	*/
    public collapseAllGroups(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllGroups();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAllGroups();
            });
        }
    }

	/** Collapses all row details. Rows that have details defined via the rowDetailTemplate will be collapsed. 
	*/
    public collapseAllRowDetails(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRowDetails();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAllRowDetails();
            });
        }
    }

	/** Collapses a group. 
	* @param {string} index. The group's hierarchical index.
	*/
    public collapseGroup(index: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseGroup(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseGroup(index);
            });
        }
    }

	/** Collapses a row (in tree mode). 
	* @param {string | number} rowId. The id of the row to collapse.
	*/
    public collapseRow(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseRow(rowId);
            });
        }
    }

	/** Disables a selection of a row. When the 'selection' property is set to 'true', selection is enabled for all rows by default. 
	* @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
	*/
    public disableSelect(rowId: string | number | (string | number)[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.disableSelect(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.disableSelect(rowId);
            });
        }
    }

	/** Enables a selection of a row, if it was previously disabled through a 'disableSelect' method call. When the 'selection' property is set to 'true', selection is enabled for all rows by default. 
	* @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
	*/
    public enableSelect(rowId: string | number | (string | number)[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.enableSelect(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.enableSelect(rowId);
            });
        }
    }

	/** Ends the current edit operation and saves changes. 
	*/
    public endEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endEdit();
            });
        }
    }

	/** Ends an update operation. Resumes all table refreshes and renders. Re-renders the Table. 
	* @param {boolean} refresh?. Optionally you can pass 'false' in case you need to manually call the 'refresh' method. By default, the table is re-rendered.
	*/
    public endUpdate(refresh?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate(refresh);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate(refresh);
            });
        }
    }

	/** Expands all rows (in tree mode). 
	*/
    public expandAllRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAllRows();
            });
        }
    }

	/** Expands all groups (in tree mode). 
	*/
    public expandAllGroups(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllGroups();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAllGroups();
            });
        }
    }

	/** Expands all row details. Rows that have details defined via rowDetailTemplate will be expanded. 
	*/
    public expandAllRowDetails(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRowDetails();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAllRowDetails();
            });
        }
    }

	/** Expands a group. 
	* @param {string} index. The group's hierarchical index.
	*/
    public expandGroup(index: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandGroup(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandGroup(index);
            });
        }
    }

	/** Expands a row (in tree mode). 
	* @param {string | number} rowId. The id of the row to expand.
	*/
    public expandRow(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandRow(rowId);
            });
        }
    }

	/** Exports the Table's data. 
	* @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	* @param {string} fileName?. The name of the file to export to
	* @param {boolean} exportFiltered?. If set to true, exports only filtered records
	* @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	* @returns {any}
  */
	public exportData(dataFormat:string, fileName?:string, exportFiltered?:boolean, callback?:Function) : any {
        const result: any = this.nativeElement.exportData(dataFormat, fileName, exportFiltered, callback);
        return result;
    }

	/** Returns an array of selected row ids. 
	* @returns {(string | number)[]}
  */
	public getSelection() : any {
        const result: any = this.nativeElement.getSelection();
        return result;
    }

	/** Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState. 
	* @returns {any}
  */
	public getState() : any {
        const result: any = this.nativeElement.getState();
        return result;
    }

	/** Returns the value of a cell. 
	* @param {string | number} row. The id of the cell's row.
	* @param {string} dataField. The dataField of the cell's column.
	* @returns {any}
  */
	public getValue(row:string | number, dataField:string) : any {
        const result: any = this.nativeElement.getValue(row, dataField);
        return result;
    }

	/** Gets a column property. 
	* @param {string} columnDataField. Column field name.
	* @param {string} propertyName. Column property name.
	* @returns {any}
  */
	public getColumnProperty(columnDataField:string, propertyName:string) : any {
        const result: any = this.nativeElement.getColumnProperty(columnDataField, propertyName);
        return result;
    }

	/** Checks whether a group is expanded and returns true or false. false is returned when the group index is undefined, too. 
	* @param {string} index. The group's hierarchical index.
	* @returns {boolean}
  */
	public isGroupExpanded(index:string) : any {
        const result: any = this.nativeElement.isGroupExpanded(index);
        return result;
    }

	/** Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property. 
	* @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
	*/
    public loadState(state?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }

	/** Navigates to a page. 
	* @param {number} pageIndex. The zero-based page index to navigate to.
	*/
    public navigateTo(pageIndex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateTo(pageIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateTo(pageIndex);
            });
        }
    }

	/** Refreshes the table. 
	*/
    public refresh(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }

	/** Removes filters applied to a specific column. 
	* @param {string} dataField. The column's data field.
	*/
    public removeFilter(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter(dataField);
            });
        }
    }

	/** Removes grouping by a column. 
	* @param {string} dataField. The column's data field.
	*/
    public removeGroup(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeGroup(dataField);
            });
        }
    }

	/** Removes a row by its id. 
	* @param {string | number} row. The id of the cell's row.
	*/
    public removeRow(row: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeRow(row);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeRow(row);
            });
        }
    }

	/** Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property. 
	* @returns {any}
  */
	public saveState() : any {
        const result: any = this.nativeElement.saveState();
        return result;
    }

	/** Selects one or more rows. 
	* @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
	*/
    public select(rowId: string | number | (string | number)[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rowId);
            });
        }
    }

	/** Sets the value of a cell. 
	* @param {string | number} row. The id of the cell's row.
	* @param {string} dataField. The dataField of the cell's column.
	* @param {any} value. The new value of the cell.
	*/
    public setValue(row: string | number, dataField: string, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setValue(row, dataField, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setValue(row, dataField, value);
            });
        }
    }

	/** Sorts the Table by a column. 
	* @param {string} columnDataField. Column field name.
	* @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
	*/
    public sortBy(columnDataField: string, sortOrder?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDataField, sortOrder);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(columnDataField, sortOrder);
            });
        }
    }

	/** Sets a column property. 
	* @param {string} columnDataField. Column field name.
	* @param {string} propertyName. Column property name.
	* @param {any} propertyValue. Property value.
	*/
    public setColumnProperty(columnDataField: string, propertyName: string, propertyValue: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
            });
        }
    }

	/** Updates a table row. The method expects two parameters - row id and JSON object with the new row data. 
	* @param {string | number} rowId. The id of the row.
	* @param {any} data. JSON object with the new row's data. Example: {firstName: 'Peter', lastName: 'Fuller'}.
	*/
    public updateRow(rowId: string | number, data: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateRow(rowId, data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateRow(rowId, data);
            });
        }
    }

	/** Unselects one or more rows. 
	* @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to unselect.
	*/
    public unselect(rowId: string | number | (string | number)[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(rowId);
            });
        }
    }



	constructor(props: any) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize: boolean) {
		const that = this;
		const props: any = {};
		const events: any = {};
		let styles: any = null;

		for(let prop in that.props) {
			if (prop === 'children') {
				continue;
			}

			if (prop === 'style') {
				styles = that.props[prop];
				continue;
			}

			if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
				events[prop] = that.props[prop];
				continue;
			}

			props[prop] = that.props[prop];
		}

		if (initialize) {
			that.nativeElement = this.componentRef.current;
		}

		for(let prop in props) {
			if (prop === 'class' || prop === 'className') {
				const classNames = props[prop].trim().split(' ');

				for(let className in classNames) {
					if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
						that.nativeElement.classList.add(classNames[className]);
					}
				}

				continue;
			}

			if (props[prop] !== that.nativeElement[prop]) {
				const normalizeProp = (str: string) => {
					return str.replace(/-([a-z])/g, function (g) {
						return g[1].toUpperCase();
					});
				}

				if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
					that.nativeElement.setAttribute(prop, '');
				}

				const normalizedProp = normalizeProp(prop);

				that.nativeElement[normalizedProp] = props[prop];
			}
		}

		
		for(let eventName in events) {
			that[eventName] = events[eventName];
			that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }

		if (initialize) {
			Smart.Render();
	
			if (that.onCreate) {
				that.onCreate();
			}

			that.nativeElement.whenRendered(() => {
				if (that.onReady) {
					that.onReady();
				}
			});
		}

		// setup styles.

		if (styles) {
			for(let styleName in styles) {
				that.nativeElement.style[styleName] = styles[styleName];
			}
		}
	}

	componentDidMount() {
		this.componentDidRender(true);
    }

	componentDidUpdate() {
		this.componentDidRender(false);
    }

	componentWillUnmount() {
		const that = this;

		if (!that.nativeElement) {
			return;
		}
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-table", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Table;
