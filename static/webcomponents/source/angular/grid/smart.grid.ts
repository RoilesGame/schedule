import { Grid } from './../index';
import { GridAppearanceAutoGenerateRowLabelMode, GridAppearanceAutoGenerateColumnLabelMode, GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnFilterMenuMode, GridColumnSortOrder, GridConditionalFormattingCondition, GridDataExportPageOrientation, GridDataSourceSettingsSanitizeHTML, GridDataSourceSettingsDataFieldDataType, GridDataSourceSettingsDataSourceType, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridEditingAddNewRowDisplayMode, GridFilteringFilterRowApplyMode, GridFilteringFilterMenuMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridSortingCommandKey, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridContextMenu, GridContextMenuDataSource, GridCommand, GridColumnMenu, GridColumnMenuDataSource, GridColumnGroup, GridConditionalFormatting, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridDataSourceSettingsDataField, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridEditingAddNewColumn, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridUploadSettings, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridStateSettings, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting, ElementRenderMode} from './../index';
import { DataAdapter, Chart } from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { GridAppearanceAutoGenerateRowLabelMode, GridAppearanceAutoGenerateColumnLabelMode, GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnFilterMenuMode, GridColumnSortOrder, GridConditionalFormattingCondition, GridDataExportPageOrientation, GridDataSourceSettingsSanitizeHTML, GridDataSourceSettingsDataFieldDataType, GridDataSourceSettingsDataSourceType, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridEditingAddNewRowDisplayMode, GridFilteringFilterRowApplyMode, GridFilteringFilterMenuMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridSortingCommandKey, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridContextMenu, GridContextMenuDataSource, GridCommand, GridColumnMenu, GridColumnMenuDataSource, GridColumnGroup, GridConditionalFormatting, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridDataSourceSettingsDataField, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridEditingAddNewColumn, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridUploadSettings, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridStateSettings, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Grid } from './../index';
export { DataAdapter, Chart } from './../index';


@Directive({
	exportAs: 'smart-grid',	selector: 'smart-grid, [smart-grid]'
})

export class GridComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Grid>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Grid;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Grid;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Grid>document.createElement('smart-grid');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description An object containing settings related to the grid's appearance. */
	@Input()
	get appearance(): GridAppearance {
		return this.nativeElement ? this.nativeElement.appearance : undefined;
	}
	set appearance(value: GridAppearance) {
		this.nativeElement ? this.nativeElement.appearance = value : undefined;
	}

	/** @description An object containing settings related to the grid's behavior. */
	@Input()
	get behavior(): GridBehavior {
		return this.nativeElement ? this.nativeElement.behavior : undefined;
	}
	set behavior(value: GridBehavior) {
		this.nativeElement ? this.nativeElement.behavior = value : undefined;
	}

	/** @description An object containing settings related to the grid's layout. */
	@Input()
	get layout(): GridLayout {
		return this.nativeElement ? this.nativeElement.layout : undefined;
	}
	set layout(value: GridLayout) {
		this.nativeElement ? this.nativeElement.layout = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
	@Input()
	get clipboard(): GridClipboard {
		return this.nativeElement ? this.nativeElement.clipboard : undefined;
	}
	set clipboard(value: GridClipboard) {
		this.nativeElement ? this.nativeElement.clipboard = value : undefined;
	}

	/** @description The columns property is used to describe all columns displayed in the grid.  */
	@Input()
	get columns(): {label: string, dataField: string}[] | string[] | number | GridColumn[] {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: {label: string, dataField: string}[] | string[] | number | GridColumn[]) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description Context Menu is the drop-down menu displayed after right-clicking a Grid row. It allows you to delete row, edit cell or row depending on the edit mode. The 'contextMenuItemCustom' dataSource option allows you to add custom menu item to the context menu. You can replace the context menu by using the 'selector' property and setting it to ID of a Smart.Menu component. */
	@Input()
	get contextMenu(): GridContextMenu {
		return this.nativeElement ? this.nativeElement.contextMenu : undefined;
	}
	set contextMenu(value: GridContextMenu) {
		this.nativeElement ? this.nativeElement.contextMenu = value : undefined;
	}

	/** @description Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
	@Input()
	get columnMenu(): GridColumnMenu {
		return this.nativeElement ? this.nativeElement.columnMenu : undefined;
	}
	set columnMenu(value: GridColumnMenu) {
		this.nativeElement ? this.nativeElement.columnMenu = value : undefined;
	}

	/** @description Describes the settings of the column groups. */
	@Input()
	get columnGroups(): GridColumnGroup[] {
		return this.nativeElement ? this.nativeElement.columnGroups : undefined;
	}
	set columnGroups(value: GridColumnGroup[]) {
		this.nativeElement ? this.nativeElement.columnGroups = value : undefined;
	}

	/** @description Sets or gets details about conditional formatting to be applied to the Grid's cells. */
	@Input()
	get conditionalFormatting(): GridConditionalFormatting[] {
		return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	}
	set conditionalFormatting(value: GridConditionalFormatting[]) {
		this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
	}

	/** @description Sets the Grid Charting Data Visualization. */
	@Input()
	get charting(): GridCharting {
		return this.nativeElement ? this.nativeElement.charting : undefined;
	}
	set charting(value: GridCharting) {
		this.nativeElement ? this.nativeElement.charting = value : undefined;
	}

	/** @description Sets the TreeGrid checkboxes. */
	@Input()
	get checkBoxes(): GridCheckBoxes {
		return this.nativeElement ? this.nativeElement.checkBoxes : undefined;
	}
	set checkBoxes(value: GridCheckBoxes) {
		this.nativeElement ? this.nativeElement.checkBoxes = value : undefined;
	}

	/** @description Sets the Grid Data Export options. */
	@Input()
	get dataExport(): GridDataExport {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value: GridDataExport) {
		this.nativeElement ? this.nativeElement.dataExport = value : undefined;
	}

	/** @description Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter or an Array. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Sets the grid's data source settings when the dataSource property is set to an Array or URL. */
	@Input()
	get dataSourceSettings(): GridDataSourceSettings {
		return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
	}
	set dataSourceSettings(value: GridDataSourceSettings) {
		this.nativeElement ? this.nativeElement.dataSourceSettings = value : undefined;
	}

	/** @description Describes the grid's editing settings. */
	@Input()
	get editing(): GridEditing {
		return this.nativeElement ? this.nativeElement.editing : undefined;
	}
	set editing(value: GridEditing) {
		this.nativeElement ? this.nativeElement.editing = value : undefined;
	}

	/** @description Describes the grid's filtering settings. */
	@Input()
	get filtering(): GridFiltering {
		return this.nativeElement ? this.nativeElement.filtering : undefined;
	}
	set filtering(value: GridFiltering) {
		this.nativeElement ? this.nativeElement.filtering = value : undefined;
	}

	/** @description Describes the grid's grouping settings. */
	@Input()
	get grouping(): GridGrouping {
		return this.nativeElement ? this.nativeElement.grouping : undefined;
	}
	set grouping(value: GridGrouping) {
		this.nativeElement ? this.nativeElement.grouping = value : undefined;
	}

	/** @description Sets the messages values. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings. */
	@Input()
	get onCellValue(): {(cell: GridCell): void} {
		return this.nativeElement ? this.nativeElement.onCellValue : undefined;
	}
	set onCellValue(value: {(cell: GridCell): void}) {
		this.nativeElement ? this.nativeElement.onCellValue = value : undefined;
	}

	/** @description Callback function() called when the grid has been rendered. */
	@Input()
	get onCellUpdate(): {(cells: GridCell[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void} {
		return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
	}
	set onCellUpdate(value: {(cells: GridCell[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}) {
		this.nativeElement ? this.nativeElement.onCellUpdate = value : undefined;
	}

	/** @description Callback function() called when the grid has been rendered for first time and bindings are completed. The component is ready. */
	@Input()
	get onCellRender(): {(cell: GridCell): void} {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value: {(cell: GridCell): void}) {
		this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
	}

	/** @description Sets or gets the rows  CSS class rules. Different CSS class names are conditionally applied. Example: rowCSSRules: { 'cell-class-1': settings =&gt; settings.data.quantity === 5, 'cell-class-2': settings =&gt; settings.data.quantity &lt; 5, 'cell-class-3': settings =&gt; settings.data.quantity &gt; 5 }.  The settings object contains the following properties: index, data, row, api. */
	@Input()
	get onBeforeInit(): {(): void} {
		return this.nativeElement ? this.nativeElement.onBeforeInit : undefined;
	}
	set onBeforeInit(value: {(): void}) {
		this.nativeElement ? this.nativeElement.onBeforeInit = value : undefined;
	}

	/** @description Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties. */
	@Input()
	get onInit(): {(): void} {
		return this.nativeElement ? this.nativeElement.onInit : undefined;
	}
	set onInit(value: {(): void}) {
		this.nativeElement ? this.nativeElement.onInit = value : undefined;
	}

	/** @description Sets the grid users. Expects an array with 'id', 'name' and optionally 'color' and 'image' properties. */
	@Input()
	get onAfterInit(): {(): void} {
		return this.nativeElement ? this.nativeElement.onAfterInit : undefined;
	}
	set onAfterInit(value: {(): void}) {
		this.nativeElement ? this.nativeElement.onAfterInit = value : undefined;
	}

	/** @description Sets the grid's image and filter upload settings for the image and attachment columns. */
	@Input()
	get onChartInit(): any {
		return this.nativeElement ? this.nativeElement.onChartInit : undefined;
	}
	set onChartInit(value: any) {
		this.nativeElement ? this.nativeElement.onChartInit = value : undefined;
	}

	/** @description Describes the paging settings. */
	@Input()
	get onRender(): any {
		return this.nativeElement ? this.nativeElement.onRender : undefined;
	}
	set onRender(value: any) {
		this.nativeElement ? this.nativeElement.onRender = value : undefined;
	}

	/** @description Describes the pager settings. */
	@Input()
	get onLoad(): any {
		return this.nativeElement ? this.nativeElement.onLoad : undefined;
	}
	set onLoad(value: any) {
		this.nativeElement ? this.nativeElement.onLoad = value : undefined;
	}

	/** @description Sets the row details. */
	@Input()
	get onKey(): {(event: KeyboardEvent): void} {
		return this.nativeElement ? this.nativeElement.onKey : undefined;
	}
	set onKey(value: {(event: KeyboardEvent): void}) {
		this.nativeElement ? this.nativeElement.onKey = value : undefined;
	}

	/** @description Sets the scroll mode settings. */
	@Input()
	get onRowInit(): {(index: number, row: GridRow): void} {
		return this.nativeElement ? this.nativeElement.onRowInit : undefined;
	}
	set onRowInit(value: {(index: number, row: GridRow): void}) {
		this.nativeElement ? this.nativeElement.onRowInit = value : undefined;
	}

	/** @description Describes the column header settings. */
	@Input()
	get onRowDetailInit(): {(index: number, row: GridRow, details: HTMLElement): void} {
		return this.nativeElement ? this.nativeElement.onRowDetailInit : undefined;
	}
	set onRowDetailInit(value: {(index: number, row: GridRow, details: HTMLElement): void}) {
		this.nativeElement ? this.nativeElement.onRowDetailInit = value : undefined;
	}

	/** @description Describes the summary row settings. */
	@Input()
	get onRowDetailUpdated(): {(index: number, row: GridRow, details: HTMLElement): void} {
		return this.nativeElement ? this.nativeElement.onRowDetailUpdated : undefined;
	}
	set onRowDetailUpdated(value: {(index: number, row: GridRow, details: HTMLElement): void}) {
		this.nativeElement ? this.nativeElement.onRowDetailUpdated = value : undefined;
	}

	/** @description Sets the grid's state settings. */
	@Input()
	get onRowHistory(): {(index: number, row: GridRow, history: any[]): void} {
		return this.nativeElement ? this.nativeElement.onRowHistory : undefined;
	}
	set onRowHistory(value: {(index: number, row: GridRow, history: any[]): void}) {
		this.nativeElement ? this.nativeElement.onRowHistory = value : undefined;
	}

	/** @description Describes the settings for the group header. */
	@Input()
	get onRowStyle(): {(index: number, row: GridRow, history: any[]): void} {
		return this.nativeElement ? this.nativeElement.onRowStyle : undefined;
	}
	set onRowStyle(value: {(index: number, row: GridRow, history: any[]): void}) {
		this.nativeElement ? this.nativeElement.onRowStyle = value : undefined;
	}

	/** @description Describes the header settings of the grid. */
	@Input()
	get onRowInserted(): {(index: number[], row: GridRow[]): void} {
		return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
	}
	set onRowInserted(value: {(index: number[], row: GridRow[]): void}) {
		this.nativeElement ? this.nativeElement.onRowInserted = value : undefined;
	}

	/** @description Describes the footer settings of the grid. */
	@Input()
	get onRowRemoved(): {(indexes: number[], rows: GridRow[]): void} {
		return this.nativeElement ? this.nativeElement.onRowRemoved : undefined;
	}
	set onRowRemoved(value: {(indexes: number[], rows: GridRow[]): void}) {
		this.nativeElement ? this.nativeElement.onRowRemoved = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get onRowUpdate(): {(index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void} {
		return this.nativeElement ? this.nativeElement.onRowUpdate : undefined;
	}
	set onRowUpdate(value: {(index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}) {
		this.nativeElement ? this.nativeElement.onRowUpdate = value : undefined;
	}

	/** @description The rows property is used to describe all rows displayed in the grid. */
	@Input()
	get onRowUpdated(): {(index: number[], row: GridRow[]): void} {
		return this.nativeElement ? this.nativeElement.onRowUpdated : undefined;
	}
	set onRowUpdated(value: {(index: number[], row: GridRow[]): void}) {
		this.nativeElement ? this.nativeElement.onRowUpdated = value : undefined;
	}

	/** @description Describes the selection settings. */
	@Input()
	get onRowClass(): {(index: number, data: any, row: GridRow[]): void} {
		return this.nativeElement ? this.nativeElement.onRowClass : undefined;
	}
	set onRowClass(value: {(index: number, data: any, row: GridRow[]): void}) {
		this.nativeElement ? this.nativeElement.onRowClass = value : undefined;
	}

	/** @description Describes sorting settings. */
	@Input()
	get onCellClass(): {(index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void} {
		return this.nativeElement ? this.nativeElement.onCellClass : undefined;
	}
	set onCellClass(value: {(index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void}) {
		this.nativeElement ? this.nativeElement.onCellClass = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onColumnInit(): {(index: number, column: GridColumn): void} {
		return this.nativeElement ? this.nativeElement.onColumnInit : undefined;
	}
	set onColumnInit(value: {(index: number, column: GridColumn): void}) {
		this.nativeElement ? this.nativeElement.onColumnInit = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onColumnInserted(): {(index: number, column: GridColumn): void} {
		return this.nativeElement ? this.nativeElement.onColumnInserted : undefined;
	}
	set onColumnInserted(value: {(index: number, column: GridColumn): void}) {
		this.nativeElement ? this.nativeElement.onColumnInserted = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onColumnRemoved(): {(index: number, column: GridColumn): void} {
		return this.nativeElement ? this.nativeElement.onColumnRemoved : undefined;
	}
	set onColumnRemoved(value: {(index: number, column: GridColumn): void}) {
		this.nativeElement ? this.nativeElement.onColumnRemoved = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onColumnUpdated(): {(index: number, column: GridColumn): void} {
		return this.nativeElement ? this.nativeElement.onColumnUpdated : undefined;
	}
	set onColumnUpdated(value: {(index: number, column: GridColumn): void}) {
		this.nativeElement ? this.nativeElement.onColumnUpdated = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onColumnClone(): {(dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void} {
		return this.nativeElement ? this.nativeElement.onColumnClone : undefined;
	}
	set onColumnClone(value: {(dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void}) {
		this.nativeElement ? this.nativeElement.onColumnClone = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onCommand(): {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void} {
		return this.nativeElement ? this.nativeElement.onCommand : undefined;
	}
	set onCommand(value: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}) {
		this.nativeElement ? this.nativeElement.onCommand = value : undefined;
	}

	/** @description undefined */
	@Input()
	get rowCSSRules(): any {
		return this.nativeElement ? this.nativeElement.rowCSSRules : undefined;
	}
	set rowCSSRules(value: any) {
		this.nativeElement ? this.nativeElement.rowCSSRules = value : undefined;
	}

	/** @description undefined */
	@Input()
	get currentUser(): string | number {
		return this.nativeElement ? this.nativeElement.currentUser : undefined;
	}
	set currentUser(value: string | number) {
		this.nativeElement ? this.nativeElement.currentUser = value : undefined;
	}

	/** @description undefined */
	@Input()
	get users(): any[] {
		return this.nativeElement ? this.nativeElement.users : undefined;
	}
	set users(value: any[]) {
		this.nativeElement ? this.nativeElement.users = value : undefined;
	}

	/** @description undefined */
	@Input()
	get uploadSettings(): GridUploadSettings {
		return this.nativeElement ? this.nativeElement.uploadSettings : undefined;
	}
	set uploadSettings(value: GridUploadSettings) {
		this.nativeElement ? this.nativeElement.uploadSettings = value : undefined;
	}

	/** @description undefined */
	@Input()
	get paging(): GridPaging {
		return this.nativeElement ? this.nativeElement.paging : undefined;
	}
	set paging(value: GridPaging) {
		this.nativeElement ? this.nativeElement.paging = value : undefined;
	}

	/** @description undefined */
	@Input()
	get pager(): GridPager {
		return this.nativeElement ? this.nativeElement.pager : undefined;
	}
	set pager(value: GridPager) {
		this.nativeElement ? this.nativeElement.pager = value : undefined;
	}

	/** @description undefined */
	@Input()
	get rowDetail(): GridRowDetail {
		return this.nativeElement ? this.nativeElement.rowDetail : undefined;
	}
	set rowDetail(value: GridRowDetail) {
		this.nativeElement ? this.nativeElement.rowDetail = value : undefined;
	}

	/** @description undefined */
	@Input()
	get scrolling(): Scrolling | string {
		return this.nativeElement ? this.nativeElement.scrolling : undefined;
	}
	set scrolling(value: Scrolling | string) {
		this.nativeElement ? this.nativeElement.scrolling = value : undefined;
	}

	/** @description undefined */
	@Input()
	get columnHeader(): GridColumnHeader {
		return this.nativeElement ? this.nativeElement.columnHeader : undefined;
	}
	set columnHeader(value: GridColumnHeader) {
		this.nativeElement ? this.nativeElement.columnHeader = value : undefined;
	}

	/** @description undefined */
	@Input()
	get summaryRow(): GridSummaryRow {
		return this.nativeElement ? this.nativeElement.summaryRow : undefined;
	}
	set summaryRow(value: GridSummaryRow) {
		this.nativeElement ? this.nativeElement.summaryRow = value : undefined;
	}

	/** @description undefined */
	@Input()
	get stateSettings(): GridStateSettings {
		return this.nativeElement ? this.nativeElement.stateSettings : undefined;
	}
	set stateSettings(value: GridStateSettings) {
		this.nativeElement ? this.nativeElement.stateSettings = value : undefined;
	}

	/** @description undefined */
	@Input()
	get groupHeader(): GridGroupHeader {
		return this.nativeElement ? this.nativeElement.groupHeader : undefined;
	}
	set groupHeader(value: GridGroupHeader) {
		this.nativeElement ? this.nativeElement.groupHeader = value : undefined;
	}

	/** @description undefined */
	@Input()
	get header(): GridHeader {
		return this.nativeElement ? this.nativeElement.header : undefined;
	}
	set header(value: GridHeader) {
		this.nativeElement ? this.nativeElement.header = value : undefined;
	}

	/** @description undefined */
	@Input()
	get footer(): GridFooter {
		return this.nativeElement ? this.nativeElement.footer : undefined;
	}
	set footer(value: GridFooter) {
		this.nativeElement ? this.nativeElement.footer = value : undefined;
	}

	/** @description undefined */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description undefined */
	@Input()
	get rows(): GridRow[] {
		return this.nativeElement ? this.nativeElement.rows : undefined;
	}
	set rows(value: GridRow[]) {
		this.nativeElement ? this.nativeElement.rows = value : undefined;
	}

	/** @description undefined */
	@Input()
	get selection(): GridSelection {
		return this.nativeElement ? this.nativeElement.selection : undefined;
	}
	set selection(value: GridSelection) {
		this.nativeElement ? this.nativeElement.selection = value : undefined;
	}

	/** @description undefined */
	@Input()
	get sorting(): GridSorting {
		return this.nativeElement ? this.nativeElement.sorting : undefined;
	}
	set sorting(value: GridSorting) {
		this.nativeElement ? this.nativeElement.sorting = value : undefined;
	}

	/** @description This event is triggered, when the edit begins. After the event occurs, editing starts. If you need to prevent the editing for specific cells, rows or columns, you can call event.preventDefault();.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
	*   id - The edited row id.
	*   dataField - The edited column data field.
	*   row - The edited row.
	*   column - The edited column.
	*   cell - The edited cell.
	*   data - The edited row's data.
	*   value - The edited cell's value.
	*/
	@Output() onBeginEdit: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the Grid's header toolbar is displayed and the 'OK' button of a header dropdown is clicked. For example, when you open the columns customize panel, reorder columns and click the 'OK' button.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type)
	*   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
	*/
	@Output() onBatchChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the Grid's header toolbar is displayed and the 'Cancel' button of a header dropdown is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type)
	*   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
	*/
	@Output() onBatchCancel: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends. 
	*  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
	*   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
	*   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user clicks on the header of a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
	*   column - The clicked column.
	*   dataField - The column's data field.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onColumnClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user double clicks on the header of a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
	*   column - The double-clicked column.
	*   dataField - The column's data field.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onColumnDoubleClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user resized a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	oldWidth, 	width)
	*   column - The resized column.
	*   dataField - The column's data field.
	*   oldWidth - The old width of the column.
	*   width - The new width of the column.
	*/
	@Output() onColumnResize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user starts a column drag.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	originalEvent)
	*   column - The column.
	*   dataField - The column's data field.
	*   index - The column's index
	*   originalEvent - The origianl Event object.
	*/
	@Output() onColumnDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user drags a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	data, 	originalEvent)
	*   column - The column.
	*   dataField - The column's data field.
	*   index - The column's index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	@Output() onColumnDragging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user drops a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
	*   column - The column.
	*   dataField - The column's data field.
	*   index - The column's index
	*   newIndex - The column's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	@Output() onColumnDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user reorders a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
	*   column - The column.
	*   dataField - The column's data field.
	*   index - The column's index
	*   newIndex - The column's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	@Output() onColumnReorder: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user enters a comment in the row edit dialog.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
	*   id - The row's id.
	*   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
	*/
	@Output() onCommentAdd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user removes a comment in the row edit dialog.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
	*   id - The row's id.
	*   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
	*/
	@Output() onCommentRemove: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user clicks on a context menu item.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	command)
	*   id - The row's id.
	*   dataField - The column's data field.
	*   command - Command function.
	*/
	@Output() onContextMenuItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user starts a row drag.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	originalEvent)
	*   row - The row.
	*   id - The row's id
	*   index - The row's index
	*   originalEvent - The origianl Event object.
	*/
	@Output() onRowDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user drags a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	data, 	originalEvent)
	*   row - The row.
	*   id - The row's id
	*   index - The row's index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	@Output() onRowDragging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user drags a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
	*   row - The row.
	*   id - The row's id
	*   index - The row's index
	*   newIndex - The row's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	@Output() onRowDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user reorders a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
	*   row - The row.
	*   id - The row's id
	*   index - The row's index
	*   newIndex - The row's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	@Output() onRowReorder: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
	*   row - The expanded row.
	*   id - The row's id
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onRowExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
	*   row - The collapsed row. 
	*   id - The row's id
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onRowCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user clicks on a row of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
	*   row - The clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   isRightClick - Gets whether the pointing device's right button is clicked.
	*   pageX - Gets the click's X position.
	*   pageY - Gets the click's Y position.
	*/
	@Output() onRowClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user double clicks on a row of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
	*   row - The double-clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   isRightClick - Gets whether the pointing device's right button is clicked.
	*   pageX - Gets the click's X position.
	*   pageY - Gets the click's Y position.
	*/
	@Output() onRowDoubleClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user resized a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	oldHeight, 	height)
	*   row - The resized row.
	*   id - Gets the row id.
	*   oldHeight - The old height of the row.
	*   height - The new height of the row.
	*/
	@Output() onRowResize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user clicks on the row header's star.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	value)
	*   row - The clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   value - Gets whether the row is starred or not.
	*/
	@Output() onRowStarred: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user clicks on a cell of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
	*   cell - The clicked cell.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   dataField - Gets the column dataField.
	*   isRightClick - Gets whether the pointing device's right button is clicked.
	*   pageX - Gets the click's X position.
	*   pageY - Gets the click's Y position.
	*/
	@Output() onCellClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user double clicks on a cell of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
	*   cell - The double-clicked cell. 
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   dataField - Gets the column dataField.
	*   isRightClick - Gets whether the pointing device's right button is clicked.
	*   pageX - Gets the click's X position.
	*   pageY - Gets the click's Y position.
	*/
	@Output() onCellDoubleClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the edit ends.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
	*   id - The edited row id.
	*   dataField - The edited column data field.
	*   row - The edited row.
	*   column - The edited column.
	*   cell - The edited cell.
	*   data - The edited row's data.
	*   value - The edited cell's value.
	*/
	@Output() onEndEdit: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when a filter is added or removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	expressions)
	*   columns - Array of columns.
	*   data - Array of {dataField: string, filter: object}. <em>dataField</em> is the column's data field. <em>filter</em> is a FilterGroup object.
	*   expressions - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'. In each array item, you will have an object with column's name and filter string. Example: [['firstName', 'contains Andrew or contains Nancy'], ['quantity', '&lt;= 3 and &gt;= 8']], [['firstName', 'EQUAL' 'Andrew' or 'EQUAL' 'Antoni' or 'EQUAL' 'Beate']], [['lastName','CONTAINS' 'burke' or 'CONTAINS' 'peterson']]. Filter conditions used in the filter expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	*/
	@Output() onFilter: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the rows grouping is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	groups)
	*   groups - Array of column data fields.
	*/
	@Output() onGroup: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the add new column dialog is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
	*   dataField - The column data field.
	*/
	@Output() onOpenColumnDialog: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the add new column dialog is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
	*   dataField - The column data field.
	*/
	@Output() onCloseColumnDialog: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the grid is resized.
	*  @param event. The custom event. 	*/
	@Output() onResize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user touches and holds on the row for at least 300ms.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The tapped row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onRowTap: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user touches and holds on the cell for at least 300ms.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
	*   cell - The tapped row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onCellTap: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user changes the pages.
	*  @param event. The custom event. 	*/
	@Output() onPage: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when a sorting column is added or removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	sortDataFields, 	sortDataTypes, 	sortOrders, 	sortIndexes)
	*   columns - Array of columns.
	*   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
	*   sortDataFields - Array of column data fields.
	*   sortDataTypes - Array of column data types. The values in the array would be 'string', 'date', 'boolean' or 'number'.
	*   sortOrders - Array of column orders. The values in the array would be 'asc' or 'desc'.
	*   sortIndexes - Array of column sort indexes. When multiple sorting is applied the sort index is an important parameter as it specifies the priority of sorting.
	*/
	@Output() onSort: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user reaches the bottom of the grid.
	*  @param event. The custom event. 	*/
	@Output() onScrollBottomReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user reaches the top of the grid.
	*  @param event. The custom event. 	*/
	@Output() onScrollTopReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
	* @param {any} data. row data matching the data source
	* @param {boolean} insertAtBottom?. Determines whether to add the new row to the bottom or top of the collection. The default value is 'true'
	* @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
	*/
    public addRow(data: any, insertAtBottom?: boolean, callback?: {(row: GridRow): void}): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addRow(data, insertAtBottom, callback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addRow(data, insertAtBottom, callback);
            });
        }
    }

	/** @description Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved. 
	* @param {string} position?. 'near' or 'far'
	* @returns {boolean}
  */
	public async addNewRow(position?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.addNewRow(position);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Adds a new column. 
	* @param {any} column. A Grid column object. See 'columns' property.
	* @returns {boolean}
  */
	public async addNewColumn(column): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.addNewColumn(column);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited. 
	* @param {number} count. The count of unbound rows.
	* @param {string} position?. 'near' or 'far'
	* @returns {boolean}
  */
	public async addUnboundRow(count, position?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.addUnboundRow(count, position);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Adds a filter to a column. This method will apply a filter to the Grid data. Example for adding multiple filters to a column: grid.addFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"']). Example for adding single filter to a column: grid.addFilter('lastName', 'CONTAINS "burke"'). Example for adding numeric filter:  grid.addFilter('quantity', '&lt;= 5') 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @param {string} filter. Filter expression like: 'startsWith B'. Example 2: ['contains Andrew or contains Nancy'], Example 3:  ['quantity', '&lt;= 3 and &gt;= 8'].  Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	* @param {boolean} refreshFilters?. Set this to false, if you will use multiple 'addFilter' calls. By doing this, you will avoid unnecessary renders.
	*/
    public addFilter(dataField: string, filter: string, refreshFilters?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(dataField, filter, refreshFilters);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(dataField, filter, refreshFilters);
            });
        }
    }

	/** @description Groups the Grid by a data field. This method will add a group to the Grid when grouping is enabled. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
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

	/** @description Sorts the Grid by a data field. This method will add a sorting to the Grid when sorting is enabled. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @param {string} sortOrder. column's sort order. Use 'asc' or 'desc'.
	*/
    public addSort(dataField: string, sortOrder: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataField, sortOrder);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addSort(dataField, sortOrder);
            });
        }
    }

	/** @description Auto-sizes grid rows. This method will update the height of all Grid rows. 
	*/
    public autoSizeRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoSizeRows();
            });
        }
    }

	/** @description Auto-sizes grid columns. This method will update the width of all Grid columns. 
	*/
    public autoSizeColumns(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeColumns();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoSizeColumns();
            });
        }
    }

	/** @description Auto-sizes grid column. This method will update the width of a Grid column by measuring the cells and column header label width. 
	* @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	*/
    public autoSizeColumn(dataField?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeColumn(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoSizeColumn(dataField);
            });
        }
    }

	/** @description This method returns true, if all rows in the Grid are selected. 
	* @returns {boolean}
  */
	public async areAllRowsSelected(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.areAllRowsSelected();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once. 
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

	/** @description Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	*/
    public beginEdit(rowId: string | number, dataField?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(rowId, dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(rowId, dataField);
            });
        }
    }

	/** @description Clears all filters. Refreshes the view and updates all filter input components. 
	*/
    public clearFilter(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilter();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearFilter();
            });
        }
    }

	/** @description Clears all data groups. Refreshes the view and updates the DataGrid component. 
	*/
    public clearGroups(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearGroups();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearGroups();
            });
        }
    }

	/** @description Clears all sorting. Refreshes the view and updates the DataGrid component. 
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

	/** @description Clears the selection that user have made. All row, cell and column selection highlights will be removed. 
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

	/** @description Cancels the editing. This method closes the cell editor and cancels the changes. 
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

	/** @description Checks a TreeGrid row. This method updates the row's check-box. 
	* @param {string | number} rowId. row bound id
	*/
    public checkRow(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.checkRow(rowId);
            });
        }
    }

	/** @description Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows. 
	*/
    public checkAllRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkAllRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.checkAllRows();
            });
        }
    }

	/** @description Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view. 
	*/
    public clearRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearRows();
            });
        }
    }

	/** @description Closes the column drop-down menu. 
	*/
    public closeMenu(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeMenu();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeMenu();
            });
        }
    }

	/** @description Collapses a TreeGrid or Grouping row. 
	* @param {string | number} rowId. row bound id
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

	/** @description Collapses all TreeGrid or Grouping rows. 
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

	/** @description Creates a Chart, when charting is enabled. 
	* @param {string} type. Chart's type
	* @param {any} dataSource?. Chart's data source
	*/
    public createChart(type: string, dataSource?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createChart(type, dataSource);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createChart(type, dataSource);
            });
        }
    }

	/** @description Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
	* @param {string | number} rowId. row bound id
	* @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is deleted. The callback's argument is the deleted row.
	*/
    public deleteRow(rowId: string | number, callback?: {(row: GridRow): void}): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteRow(rowId, callback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.deleteRow(rowId, callback);
            });
        }
    }

	/** @description Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @returns {boolean}
  */
	public async ensureVisible(rowId, dataField?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.ensureVisible(rowId, dataField);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Ends the editing. This method confirms all changes and closes the opened cell editor(s). 
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

	/** @description Ends the update operation. This method will resume the rendering and will refresh the Grid. 
	* @param {boolean} refresh?. The flag that control the calls of the refresh method.
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

	/** @description Expands a TreeGrid or Grouping row. For example, if you want to expand the first group, then its second sub grup, then the first sub sub group, you can use: grid.expandRow('0.1.0'); 
	* @param {string | number} rowId. row bound id
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

	/** @description Expands rows to a given group level. For example 'grid.expandRowsToGroupLevel(1);' means that all groups at the root level will be expanded. 
	* @param {number} level. row group level
	*/
    public expandRowsToGroupLevel(level: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRowsToGroupLevel(level);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandRowsToGroupLevel(level);
            });
        }
    }

	/** @description Expands all TreeGrid or Grouping rows. 
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

	/** @description Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property. 
	* @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
	*/
    public exportData(Dataformat: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(Dataformat);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(Dataformat);
            });
        }
    }

	/** @description Finds entries by using a query and returns an array of row ids. Example: const rows = grid.find('nancy'); returns all rows that have 'nancy' value. Example 2: const rows = grid.find('nancy, davolio'); returns all rows that have 'nancy' and 'davolio' values in the same row. Example 3: const rows = grid.find(5, 'quantity', '>'); returns all rows where the value of the 'quantity' field is > 5.  
	* @param {string} query. Search query
	* @param {string} dataField?. Column data field.
	* @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	* @returns {any[]}
  */
	public async find(query, dataField?, condition?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.find(query, dataField, condition);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Finds entries by using a query and returns an array of cells. Each cell in the array is also an array in this format: [id, dataField, value]. Example: const cells = grid.findCells('nancy'); returns all cells that have 'nancy' value. Example 2: const cells = grid.findCells('nancy, davolio'); returns all cells that have 'nancy' and 'davolio' values. 
	* @param {string} query. Search query. You can enter multiple search strings, by using ','. Example: 'nancy, davolio'
	* @returns {any[]}
  */
	public async findCells(query): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.findCells(query);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Navigates to a page, when paging is enabled. 
	* @param {number} index. page index
	*/
    public goToPage(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.goToPage(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.goToPage(index);
            });
        }
    }

	/** @description Navigates to the next page, when grid paging is enabled. 
	*/
    public nextPage(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.nextPage();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.nextPage();
            });
        }
    }

	/** @description Navigates to the prev page, when grid paging is enabled. 
	*/
    public prevPage(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.prevPage();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.prevPage();
            });
        }
    }

	/** @description Navigates to the first page, when grid paging is enabled. 
	*/
    public firstPage(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.firstPage();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.firstPage();
            });
        }
    }

	/** @description Navigates to the last page, when grid paging is enabled. 
	*/
    public lastPage(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lastPage();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lastPage();
            });
        }
    }

	/** @description Focuses and selects a cell or row. The keyboard navigation starts from the focused cell or row. Any previously applied selection will be cleared after calling this method. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field
	*/
    public focusAndSelect(rowId: string | number, dataField?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focusAndSelect(rowId, dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focusAndSelect(rowId, dataField);
            });
        }
    }

	/** @description Iterates through each row in the grid and calls the callback for each row. This is similar to the forEach method on a JavaScript array. This is called for each row, ignoring grouping, filtering or sorting applied in the Grid. 
	* @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
	*/
    public forEachRow(rowCallback: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.forEachRow(rowCallback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.forEachRow(rowCallback);
            });
        }
    }

	/** @description Similar to forEachRow. Iterates through each row in the grid and calls the callback for each row. This method takes into account filtering and sorting applied to the Grid. 
	* @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
	*/
    public forEachRowAfterFilterAndSort(rowCallback: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.forEachRowAfterFilterAndSort(rowCallback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.forEachRowAfterFilterAndSort(rowCallback);
            });
        }
    }

	/** @description Gets the maximum position of the vertical scrollbar. You can use this method in combination with the setVerticalScrollValue to apply a new scroll position. 
	* @returns {number}
  */
	public async getVerticalScrollMax(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getVerticalScrollMax();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the position of the vertical scrollbar. 
	* @returns {number}
  */
	public async getVerticalScrollValue(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getVerticalScrollValue();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the maximum position of the horizontal scrollbar. You can use this method in combination with the setHorizontalScrollValue to apply a new scroll position. 
	* @returns {number}
  */
	public async getHorizontalScrollMax(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getHorizontalScrollMax();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the position of the horizontal scrollbar. 
	* @returns {number}
  */
	public async getHorizontalScrollValue(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getHorizontalScrollValue();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the columns array. Each item in the array contains the column properties which are dynamically set by the user interaction and the columns initialization data properties such as: 'label', 'dataField', 'dataType', 'visible'. 
	* @returns {any}
  */
	public async getColumns(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getColumns();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the editing cell(s), when the grid is editing. 
	* @returns {any[]}
  */
	public async getEditCells(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getEditCells();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the groups array. 
	* @returns {any[]}
  */
	public async getGroups(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getGroups();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets an array of columns with applied sorting. Each member in the array is with column's data field used as a key and 'sortOrder' and 'sortIndex' as a value. 
	* @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
	public async getSortedColumns(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSortedColumns();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the selection. 
	* @returns {any}
  */
	public async getSelection(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSelection();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets an Array where each item is an Array of row id and row data. If the Grid is used in virtual mode, the row data parameter is empty object, because the data is loaded on demand. 
	* @returns {any[]}
  */
	public async getSelectedRows(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSelectedRows();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the selected row ids. 
	* @returns {any[]}
  */
	public async getSelectedRowIds(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSelectedRowIds();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the selected row indexes. 
	* @returns {any[]}
  */
	public async getSelectedRowIndexes(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSelectedRowIndexes();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the selected cells. The method returns an array of cell. Each cell is an array with row id, column data field and cell value. 
	* @returns {any[]}
  */
	public async getSelectedCells(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSelectedCells();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets an array of columns with applied filters. 
	* @returns {any}
  */
	public async getFilteredColumns(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getFilteredColumns();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets an array of rows, which are visible and match the applied filter. 
	* @returns {any}
  */
	public async getVisibleRows(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getVisibleRows();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode. 
	* @returns {any}
  */
	public async getViewRows(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getViewRows();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size. 
	* @returns {any}
  */
	public async getState(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getState();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Saves the Grid state and returns a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size. 
	* @param {string} name?. state name
	* @returns {any}
  */
	public async saveState(name?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.saveState(name);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Loads a previously saved Grid state. You can pass a state name when there is a state which was previously saved with the saveState(stateName) method call or a state object returned by the saveState or getState method calls. The state object is required to be a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size. 
	* @param {any} state. state name or state object
	* @returns {any}
  */
	public async loadState(state): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.loadState(state);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Resets the Grid state. 
	*/
    public resetState(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.resetState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.resetState();
            });
        }
    }

	/** @description Gets the changes from the batch edit. 
	* @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
	public async getBatchEditChanges(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getBatchEditChanges();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets a value of a cell. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @returns {any}
  */
	public async getCellValue(rowId, dataField): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getCellValue(rowId, dataField);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets a column. Returns a Grid column object. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @returns {GridColumn}
  */
	public async getColumn(dataField): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getColumn(dataField);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets a value of a column. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @param {string} propertyName. The property name.
	* @returns {any}
  */
	public async getColumnProperty(dataField, propertyName): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getColumnProperty(dataField, propertyName);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets a value of a row. 
	* @param {string | number} rowId. row bound id
	* @param {string} propertyName. The property name.
	* @returns {any}
  */
	public async getRowProperty(rowId, propertyName): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getRowProperty(rowId, propertyName);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets a row. Returns a Grid row object. 
	* @param {string | number} rowId. row bound id
	* @returns {GridRow}
  */
	public async getRow(rowId): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getRow(rowId);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets a row by its index. Returns a Grid row object. 
	* @param {number} rowIndex. row bound index
	* @returns {GridRow}
  */
	public async getRowByIndex(rowIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getRowByIndex(rowIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the Data source data associated to the row. 
	* @param {string | number} rowId. row bound id
	* @returns {any}
  */
	public async getRowData(rowId): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getRowData(rowId);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the Row's id by a row index. 
	* @param {number} rowIndex. row index
	* @returns {string | number}
  */
	public async getRowId(rowIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getRowId(rowIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets whether a column's drop-down menu is opened. 
	* @returns {boolean}
  */
	public async hasMenu(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.hasMenu();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description This method returns true, if any rows in the Grid are selected. 
	* @returns {boolean}
  */
	public async hasSelectedRows(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.hasSelectedRows();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Hides the Details of a Row, when row details are enabled. 
	* @param {string | number} rowId. row bound id
	*/
    public hideDetail(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideDetail(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideDetail(rowId);
            });
        }
    }

	/** @description Highlights a column. Highlights a Grid column. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	*/
    public highlightColumn(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightColumn(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.highlightColumn(dataField);
            });
        }
    }

	/** @description Highlights a cell. Calling the method a second time toggle the highlight state. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @param {string} className?. CSS Class Name
	*/
    public highlightCell(rowId: string | number, dataField: string, className?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightCell(rowId, dataField, className);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.highlightCell(rowId, dataField, className);
            });
        }
    }

	/** @description Highlights a row. Calling the method a second time toggle the highlight state. 
	* @param {string | number} rowId. row bound id
	* @param {string} className?. CSS Class Name
	*/
    public highlightRow(rowId: string | number, className?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightRow(rowId, className);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.highlightRow(rowId, className);
            });
        }
    }

	/** @description Inserts a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
	* @param {any} data. row data matching the data source
	* @param {number} index?. Determines the insert index. The default value is the last index.
	* @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
	*/
    public insertRow(data: any, index?: number, callback?: {(row: GridRow): void}): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertRow(data, index, callback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertRow(data, index, callback);
            });
        }
    }

	/** @description Opens a column drop-down menu. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	*/
    public openMenu(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openMenu(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openMenu(dataField);
            });
        }
    }

	/** @description Opens a context menu. Note that context menu should be enabled. 
	* @param {number} left. Left Position.
	* @param {number} top. Top Position.
	*/
    public openContextMenu(left: number, top: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openContextMenu(left, top);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openContextMenu(left, top);
            });
        }
    }

	/** @description Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property. 
	*/
    public print(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }

	/** @description Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout. 
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

	/** @description Refreshes the grid with the current property values. This method will refresh the Grid layout. 
	*/
    public refreshView(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshView();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshView();
            });
        }
    }

	/** @description Refreshes the grid cells in view. The method is useful for live-updates of cell values. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @param {boolean} refreshFilters?. Set this to false, if you need to make multiple removeFilter calls.
	*/
    public removeFilter(dataField: string, refreshFilters?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter(dataField, refreshFilters);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter(dataField, refreshFilters);
            });
        }
    }

	/** @description Removes a column filter.  
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
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

	/** @description Removes a group by data field. This method will remove a group to the Grid when grouping is enabled. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	*/
    public removeSort(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeSort(dataField);
            });
        }
    }

	/** @description Removes a sorting by data field. This method will remove a sorting from a Grid column. 
	*/
    public refreshSort(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshSort();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshSort();
            });
        }
    }

	/** @description Re-sorts the Grid by using the already applied column sortings and re-renders the Grid. 
	*/
    public revertBatchEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.revertBatchEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.revertBatchEdit();
            });
        }
    }

	/** @description Reverts the batch edit changes. This method cancels all changes made by the end-user. 
	* @param {string | number} dataField. The data field or column index of the first grid column.
	* @param {string | number} referenceDataField. The data field or column index of the second grid column.
	* @param {boolean} insertAfter?. Determines whether to insert the first column after the reference column.
	*/
    public reorderColumns(dataField: string | number, referenceDataField: string | number, insertAfter?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
            });
        }
    }

	/** @description Reorders two DataGrid columns. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @param {string | null} sortOrder. column's sort order. Use 'asc', 'desc' or null.
	*/
    public sortBy(dataField: string, sortOrder: string | null): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(dataField, sortOrder);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(dataField, sortOrder);
            });
        }
    }

	/** @description Sorts the Grid by a data field. This method will add or remove sorting, when sorting is enabled. To remove the sorting, use 'null' for the sortOrder parameter. 
	* @param {string | number} dataField. The data field or column index of the first grid column.
	* @param {string | number} referenceDataField. The data field or column index of the second grid column.
	*/
    public swapColumns(dataField: string | number, referenceDataField: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.swapColumns(dataField, referenceDataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.swapColumns(dataField, referenceDataField);
            });
        }
    }

	/** @description Swaps two DataGrid columns. 
	*/
    public saveBatchEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveBatchEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveBatchEdit();
            });
        }
    }

	/** @description Saves the batch edit changes. This method confirms the editing changes made by the end-user. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field
	*/
    public select(rowId: string | number, dataField?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId, dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rowId, dataField);
            });
        }
    }

	/** @description Selects a row, cell or column. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField. column bound data field
	* @param {string | number} endRowId. row bound id
	* @param {string} endDataField. column bound data field
	*/
    public selectRange(rowId: string | number, dataField: string, endRowId: string | number, endDataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
            });
        }
    }

	/** @description Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid. 
	* @param {string | number} rowId. row bound id
	* @param {string | number} endRowId. row bound id
	*/
    public selectRowsRange(rowId: string | number, endRowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsRange(rowId, endRowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRowsRange(rowId, endRowId);
            });
        }
    }

	/** @description Selects a range of rows. 
	* @param {(string | number)[]} rowId. Array of row ids
	*/
    public selectRows(rowId: (string | number)[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRows(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRows(rowId);
            });
        }
    }

	/** @description Selects multiple rows by their ids. 
	*/
    public selectAllRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAllRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectAllRows();
            });
        }
    }

	/** @description Selects all rows. 
	* @param {number[]} rowIndex. Array of row indexes
	*/
    public selectRowsByIndex(rowIndex: number[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsByIndex(rowIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRowsByIndex(rowIndex);
            });
        }
    }

	/** @description Selects multiple rows by their index. 
	* @param {string} query. Search query
	* @param {string} dataField?. Column data field.
	* @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	*/
    public selectRowsByQuery(query: string, dataField?: string, condition?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsByQuery(query, dataField, condition);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRowsByQuery(query, dataField, condition);
            });
        }
    }

	/** @description Selects rows by using a query. Example: grid.selectRowsByQuery('nancy'); selects all rows that have 'nancy' value. Example 2: grid.selectRowsByQuery('nancy, davolio'); selects all rows that have 'nancy' and 'davolio' values in the same row. Example 3: grid.selectRowsByQuery(5, 'quantity', '>'); selects all rows where the value of the 'quantity' field is > 5.  
	* @param {(string | number)[]} rowIds. Array of row ids
	* @param {string[]} dataFields. Array of data fields.
	*/
    public selectCells(rowIds: (string | number)[], dataFields: string[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectCells(rowIds, dataFields);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectCells(rowIds, dataFields);
            });
        }
    }

	/** @description Selects multiple cells by their ids and dataFields. Example: grid.selectCells([0, 1, 2], ['firstName', 'quantity', 'date']); - selects the 'firstName', 'quantity' and 'date' cells from the first, second and third rows. 
	* @param {string} query. Search query
	*/
    public selectCellsByQuery(query: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectCellsByQuery(query);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectCellsByQuery(query);
            });
        }
    }

	/** @description Selects cells by using a query. Example: grid.selectCellsByQuery('nancy'); selects all cells that have 'nancy' value. Example 2: grid.selectCellsByQuery('nancy, davolio'); selects all cells that have 'nancy' and 'davolio' values in the same row.  
	* @param {string | number} rowId. row bound id
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @param {string | number | Date | boolean} value. New Cell value.
	*/
    public setCellValue(rowId: string | number, dataField: string, value: string | number | Date | boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCellValue(rowId, dataField, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCellValue(rowId, dataField, value);
            });
        }
    }

	/** @description Sets a new value to a cell. 
	* @param {GridColumn[]} columns. Columns array.
	*/
    public setColumns(columns: GridColumn[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumns(columns);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumns(columns);
            });
        }
    }

	/** @description Sets new columns to the Grid. The grid will redraw all the column headers, and then redraw all of the rows. By using 'setColumns', the grid will compare the new columns passed as argument to the method with existing columns. The Grid will automatically create new columns, keep old columns if they already exist and remove columns which are not in the 'setColumns' method argument. The benefit of that is that the state of the column like(sort, filter, width or other) will be kept, if the column exsits after the new columns are applied. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @param {string} propertyName. The column property's name.
	* @param {any} value. The new property value.
	*/
    public setColumnProperty(dataField: string, propertyName: string, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnProperty(dataField, propertyName, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumnProperty(dataField, propertyName, value);
            });
        }
    }

	/** @description Sets a property to a column. 
	* @param {string | number} rowId. row bound id
	* @param {string} propertyName. The row property's name.
	* @param {any} value. The new property value.
	*/
    public setRowProperty(rowId: string | number, propertyName: string, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowProperty(rowId, propertyName, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setRowProperty(rowId, propertyName, value);
            });
        }
    }

	/** @description Sets a property to a row. 
	* @param {string | number} rowId. row bound id
	* @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The row style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
	*/
    public setRowStyle(rowId: string | number, rowStyle: {background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowStyle(rowId, rowStyle);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setRowStyle(rowId, rowStyle);
            });
        }
    }

	/** @description Sets a style to a row. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField. Column bound field name.
	* @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The cell style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
	*/
    public setCellStyle(rowId: string | number, dataField: string, rowStyle: {background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCellStyle(rowId, dataField, rowStyle);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCellStyle(rowId, dataField, rowStyle);
            });
        }
    }

	/** @description Sets a style to a row. 
	* @param {number} value. The new scroll position
	*/
    public setVerticalScrollValue(value: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setVerticalScrollValue(value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setVerticalScrollValue(value);
            });
        }
    }

	/** @description Sets the position of the vertical scrollbar. You can use this method in combination with the getVerticalScrollValue and getVerticalScrollMax. 
	* @param {number} value. The new scroll position
	*/
    public setHorizontalScrollValue(value: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setHorizontalScrollValue(value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setHorizontalScrollValue(value);
            });
        }
    }

	/** @description Sets the position of the horizontal scrollbar. You can use this method in combination with the getHorizontalScrollValue and getHorizontalScrollMax. 
	* @param {string | number} rowId. row bound id
	*/
    public showDetail(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showDetail(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showDetail(rowId);
            });
        }
    }

	/** @description Shows the Details of a Row, when row details are enabled. 
	* @param {string | number} rowId. row bound id
	* @param {any} data. row data matching the data source
	* @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
	*/
    public updateRow(rowId: string | number, data: any, callback?: {(row: GridRow): void}): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateRow(rowId, data, callback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateRow(rowId, data, callback);
            });
        }
    }

	/** @description Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	*/
    public unselect(rowId: string | number, dataField?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId, dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(rowId, dataField);
            });
        }
    }

	/** @description Unselects a row, cell or column. 
	* @param {string | number} rowId. row bound id
	*/
    public uncheckRow(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uncheckRow(rowId);
            });
        }
    }

	/** @description Unchecks a TreeGrid row. Sets its check-box to false. 
	*/
    public uncheckAllRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckAllRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uncheckAllRows();
            });
        }
    }

	/** @description Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false. 
	* @param {string | number} rowId. row bound id
	*/
    public toggleRow(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggleRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggleRow(rowId);
            });
        }
    }


	get isRendered(): boolean {
		return this.nativeElement ? this.nativeElement.isRendered : false;
	}

	ngOnInit() {
	}

    ngAfterViewInit() {
      const that = this;

      that.onCreate.emit(that.nativeElement);

		Smart.Render();

		this.nativeElement.classList.add('smart-angular');

		this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
		this.listen();
	}

	ngOnDestroy() {
		this.unlisten();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.nativeElement && this.nativeElement.isRendered) {
			for (const propName in changes) {
				if (changes.hasOwnProperty(propName)) {
					this.nativeElement[propName] = changes[propName].currentValue;
				}
			}
		}
	}

	/** @description Add event listeners. */
	private listen(): void {
        const that = this;
		that.eventHandlers['beginEditHandler'] = (event: CustomEvent) => { that.onBeginEdit.emit(event); }
		that.nativeElement.addEventListener('beginEdit', that.eventHandlers['beginEditHandler']);

		that.eventHandlers['batchChangeHandler'] = (event: CustomEvent) => { that.onBatchChange.emit(event); }
		that.nativeElement.addEventListener('batchChange', that.eventHandlers['batchChangeHandler']);

		that.eventHandlers['batchCancelHandler'] = (event: CustomEvent) => { that.onBatchCancel.emit(event); }
		that.nativeElement.addEventListener('batchCancel', that.eventHandlers['batchCancelHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['columnClickHandler'] = (event: CustomEvent) => { that.onColumnClick.emit(event); }
		that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);

		that.eventHandlers['columnDoubleClickHandler'] = (event: CustomEvent) => { that.onColumnDoubleClick.emit(event); }
		that.nativeElement.addEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);

		that.eventHandlers['columnResizeHandler'] = (event: CustomEvent) => { that.onColumnResize.emit(event); }
		that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);

		that.eventHandlers['columnDragStartHandler'] = (event: CustomEvent) => { that.onColumnDragStart.emit(event); }
		that.nativeElement.addEventListener('columnDragStart', that.eventHandlers['columnDragStartHandler']);

		that.eventHandlers['columnDraggingHandler'] = (event: CustomEvent) => { that.onColumnDragging.emit(event); }
		that.nativeElement.addEventListener('columnDragging', that.eventHandlers['columnDraggingHandler']);

		that.eventHandlers['columnDragEndHandler'] = (event: CustomEvent) => { that.onColumnDragEnd.emit(event); }
		that.nativeElement.addEventListener('columnDragEnd', that.eventHandlers['columnDragEndHandler']);

		that.eventHandlers['columnReorderHandler'] = (event: CustomEvent) => { that.onColumnReorder.emit(event); }
		that.nativeElement.addEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);

		that.eventHandlers['commentAddHandler'] = (event: CustomEvent) => { that.onCommentAdd.emit(event); }
		that.nativeElement.addEventListener('commentAdd', that.eventHandlers['commentAddHandler']);

		that.eventHandlers['commentRemoveHandler'] = (event: CustomEvent) => { that.onCommentRemove.emit(event); }
		that.nativeElement.addEventListener('commentRemove', that.eventHandlers['commentRemoveHandler']);

		that.eventHandlers['contextMenuItemClickHandler'] = (event: CustomEvent) => { that.onContextMenuItemClick.emit(event); }
		that.nativeElement.addEventListener('contextMenuItemClick', that.eventHandlers['contextMenuItemClickHandler']);

		that.eventHandlers['rowDragStartHandler'] = (event: CustomEvent) => { that.onRowDragStart.emit(event); }
		that.nativeElement.addEventListener('rowDragStart', that.eventHandlers['rowDragStartHandler']);

		that.eventHandlers['rowDraggingHandler'] = (event: CustomEvent) => { that.onRowDragging.emit(event); }
		that.nativeElement.addEventListener('rowDragging', that.eventHandlers['rowDraggingHandler']);

		that.eventHandlers['rowDragEndHandler'] = (event: CustomEvent) => { that.onRowDragEnd.emit(event); }
		that.nativeElement.addEventListener('rowDragEnd', that.eventHandlers['rowDragEndHandler']);

		that.eventHandlers['rowReorderHandler'] = (event: CustomEvent) => { that.onRowReorder.emit(event); }
		that.nativeElement.addEventListener('rowReorder', that.eventHandlers['rowReorderHandler']);

		that.eventHandlers['rowExpandHandler'] = (event: CustomEvent) => { that.onRowExpand.emit(event); }
		that.nativeElement.addEventListener('rowExpand', that.eventHandlers['rowExpandHandler']);

		that.eventHandlers['rowCollapseHandler'] = (event: CustomEvent) => { that.onRowCollapse.emit(event); }
		that.nativeElement.addEventListener('rowCollapse', that.eventHandlers['rowCollapseHandler']);

		that.eventHandlers['rowClickHandler'] = (event: CustomEvent) => { that.onRowClick.emit(event); }
		that.nativeElement.addEventListener('rowClick', that.eventHandlers['rowClickHandler']);

		that.eventHandlers['rowDoubleClickHandler'] = (event: CustomEvent) => { that.onRowDoubleClick.emit(event); }
		that.nativeElement.addEventListener('rowDoubleClick', that.eventHandlers['rowDoubleClickHandler']);

		that.eventHandlers['rowResizeHandler'] = (event: CustomEvent) => { that.onRowResize.emit(event); }
		that.nativeElement.addEventListener('rowResize', that.eventHandlers['rowResizeHandler']);

		that.eventHandlers['rowStarredHandler'] = (event: CustomEvent) => { that.onRowStarred.emit(event); }
		that.nativeElement.addEventListener('rowStarred', that.eventHandlers['rowStarredHandler']);

		that.eventHandlers['cellClickHandler'] = (event: CustomEvent) => { that.onCellClick.emit(event); }
		that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);

		that.eventHandlers['cellDoubleClickHandler'] = (event: CustomEvent) => { that.onCellDoubleClick.emit(event); }
		that.nativeElement.addEventListener('cellDoubleClick', that.eventHandlers['cellDoubleClickHandler']);

		that.eventHandlers['endEditHandler'] = (event: CustomEvent) => { that.onEndEdit.emit(event); }
		that.nativeElement.addEventListener('endEdit', that.eventHandlers['endEditHandler']);

		that.eventHandlers['filterHandler'] = (event: CustomEvent) => { that.onFilter.emit(event); }
		that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);

		that.eventHandlers['groupHandler'] = (event: CustomEvent) => { that.onGroup.emit(event); }
		that.nativeElement.addEventListener('group', that.eventHandlers['groupHandler']);

		that.eventHandlers['openColumnDialogHandler'] = (event: CustomEvent) => { that.onOpenColumnDialog.emit(event); }
		that.nativeElement.addEventListener('openColumnDialog', that.eventHandlers['openColumnDialogHandler']);

		that.eventHandlers['closeColumnDialogHandler'] = (event: CustomEvent) => { that.onCloseColumnDialog.emit(event); }
		that.nativeElement.addEventListener('closeColumnDialog', that.eventHandlers['closeColumnDialogHandler']);

		that.eventHandlers['resizeHandler'] = (event: CustomEvent) => { that.onResize.emit(event); }
		that.nativeElement.addEventListener('resize', that.eventHandlers['resizeHandler']);

		that.eventHandlers['rowTapHandler'] = (event: CustomEvent) => { that.onRowTap.emit(event); }
		that.nativeElement.addEventListener('rowTap', that.eventHandlers['rowTapHandler']);

		that.eventHandlers['cellTapHandler'] = (event: CustomEvent) => { that.onCellTap.emit(event); }
		that.nativeElement.addEventListener('cellTap', that.eventHandlers['cellTapHandler']);

		that.eventHandlers['pageHandler'] = (event: CustomEvent) => { that.onPage.emit(event); }
		that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);

		that.eventHandlers['sortHandler'] = (event: CustomEvent) => { that.onSort.emit(event); }
		that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);

		that.eventHandlers['scrollBottomReachedHandler'] = (event: CustomEvent) => { that.onScrollBottomReached.emit(event); }
		that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);

		that.eventHandlers['scrollTopReachedHandler'] = (event: CustomEvent) => { that.onScrollTopReached.emit(event); }
		that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['beginEditHandler']) {
			that.nativeElement.removeEventListener('beginEdit', that.eventHandlers['beginEditHandler']);
		}

		if (that.eventHandlers['batchChangeHandler']) {
			that.nativeElement.removeEventListener('batchChange', that.eventHandlers['batchChangeHandler']);
		}

		if (that.eventHandlers['batchCancelHandler']) {
			that.nativeElement.removeEventListener('batchCancel', that.eventHandlers['batchCancelHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['columnClickHandler']) {
			that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
		}

		if (that.eventHandlers['columnDoubleClickHandler']) {
			that.nativeElement.removeEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
		}

		if (that.eventHandlers['columnResizeHandler']) {
			that.nativeElement.removeEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
		}

		if (that.eventHandlers['columnDragStartHandler']) {
			that.nativeElement.removeEventListener('columnDragStart', that.eventHandlers['columnDragStartHandler']);
		}

		if (that.eventHandlers['columnDraggingHandler']) {
			that.nativeElement.removeEventListener('columnDragging', that.eventHandlers['columnDraggingHandler']);
		}

		if (that.eventHandlers['columnDragEndHandler']) {
			that.nativeElement.removeEventListener('columnDragEnd', that.eventHandlers['columnDragEndHandler']);
		}

		if (that.eventHandlers['columnReorderHandler']) {
			that.nativeElement.removeEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
		}

		if (that.eventHandlers['commentAddHandler']) {
			that.nativeElement.removeEventListener('commentAdd', that.eventHandlers['commentAddHandler']);
		}

		if (that.eventHandlers['commentRemoveHandler']) {
			that.nativeElement.removeEventListener('commentRemove', that.eventHandlers['commentRemoveHandler']);
		}

		if (that.eventHandlers['contextMenuItemClickHandler']) {
			that.nativeElement.removeEventListener('contextMenuItemClick', that.eventHandlers['contextMenuItemClickHandler']);
		}

		if (that.eventHandlers['rowDragStartHandler']) {
			that.nativeElement.removeEventListener('rowDragStart', that.eventHandlers['rowDragStartHandler']);
		}

		if (that.eventHandlers['rowDraggingHandler']) {
			that.nativeElement.removeEventListener('rowDragging', that.eventHandlers['rowDraggingHandler']);
		}

		if (that.eventHandlers['rowDragEndHandler']) {
			that.nativeElement.removeEventListener('rowDragEnd', that.eventHandlers['rowDragEndHandler']);
		}

		if (that.eventHandlers['rowReorderHandler']) {
			that.nativeElement.removeEventListener('rowReorder', that.eventHandlers['rowReorderHandler']);
		}

		if (that.eventHandlers['rowExpandHandler']) {
			that.nativeElement.removeEventListener('rowExpand', that.eventHandlers['rowExpandHandler']);
		}

		if (that.eventHandlers['rowCollapseHandler']) {
			that.nativeElement.removeEventListener('rowCollapse', that.eventHandlers['rowCollapseHandler']);
		}

		if (that.eventHandlers['rowClickHandler']) {
			that.nativeElement.removeEventListener('rowClick', that.eventHandlers['rowClickHandler']);
		}

		if (that.eventHandlers['rowDoubleClickHandler']) {
			that.nativeElement.removeEventListener('rowDoubleClick', that.eventHandlers['rowDoubleClickHandler']);
		}

		if (that.eventHandlers['rowResizeHandler']) {
			that.nativeElement.removeEventListener('rowResize', that.eventHandlers['rowResizeHandler']);
		}

		if (that.eventHandlers['rowStarredHandler']) {
			that.nativeElement.removeEventListener('rowStarred', that.eventHandlers['rowStarredHandler']);
		}

		if (that.eventHandlers['cellClickHandler']) {
			that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
		}

		if (that.eventHandlers['cellDoubleClickHandler']) {
			that.nativeElement.removeEventListener('cellDoubleClick', that.eventHandlers['cellDoubleClickHandler']);
		}

		if (that.eventHandlers['endEditHandler']) {
			that.nativeElement.removeEventListener('endEdit', that.eventHandlers['endEditHandler']);
		}

		if (that.eventHandlers['filterHandler']) {
			that.nativeElement.onfilterHandler = null;
		}

		if (that.eventHandlers['groupHandler']) {
			that.nativeElement.removeEventListener('group', that.eventHandlers['groupHandler']);
		}

		if (that.eventHandlers['openColumnDialogHandler']) {
			that.nativeElement.removeEventListener('openColumnDialog', that.eventHandlers['openColumnDialogHandler']);
		}

		if (that.eventHandlers['closeColumnDialogHandler']) {
			that.nativeElement.removeEventListener('closeColumnDialog', that.eventHandlers['closeColumnDialogHandler']);
		}

		if (that.eventHandlers['resizeHandler']) {
			that.nativeElement.removeEventListener('resize', that.eventHandlers['resizeHandler']);
		}

		if (that.eventHandlers['rowTapHandler']) {
			that.nativeElement.removeEventListener('rowTap', that.eventHandlers['rowTapHandler']);
		}

		if (that.eventHandlers['cellTapHandler']) {
			that.nativeElement.removeEventListener('cellTap', that.eventHandlers['cellTapHandler']);
		}

		if (that.eventHandlers['pageHandler']) {
			that.nativeElement.removeEventListener('page', that.eventHandlers['pageHandler']);
		}

		if (that.eventHandlers['sortHandler']) {
			that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
		}

		if (that.eventHandlers['scrollBottomReachedHandler']) {
			that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
		}

		if (that.eventHandlers['scrollTopReachedHandler']) {
			that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
		}

	}
}
