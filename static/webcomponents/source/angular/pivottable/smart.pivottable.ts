import { PivotTable } from './../index';
import { Animation, PivotTableColumnAlign, PivotTableColumnDataType, PivotTableColumnSummary, PivotTableColumnTotalsPosition, PivotTableConditionalFormattingCondition, PivotTableConditionalFormattingFontFamily, PivotTableConditionalFormattingFontSize, PivotTableDesignerPosition, PivotTableDrillDownDataExport, PivotTableGroupLayout, PivotTablePageSize, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, PivotTableColumnAlign, PivotTableColumnDataType, PivotTableColumnSummary, PivotTableColumnTotalsPosition, PivotTableConditionalFormattingCondition, PivotTableConditionalFormattingFontFamily, PivotTableConditionalFormattingFontSize, PivotTableDesignerPosition, PivotTableDrillDownDataExport, PivotTableGroupLayout, PivotTablePageSize, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { PivotTable } from './../index';


@Directive({
	exportAs: 'smart-pivot-table',	selector: 'smart-pivot-table, [smart-pivot-table]'
})

export class PivotTableComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<PivotTable>) {
		super(ref);
		this.nativeElement = ref.nativeElement as PivotTable;
	}

	private eventHandlers: any[] = [];

	public nativeElement: PivotTable;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <PivotTable>document.createElement('smart-pivot-table');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation | string {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation | string) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Sets or gets whether the reordering of columns is enabled. */
	@Input()
	get columnReorder(): boolean {
		return this.nativeElement ? this.nativeElement.columnReorder : undefined;
	}
	set columnReorder(value: boolean) {
		this.nativeElement ? this.nativeElement.columnReorder = value : undefined;
	}

	/** @description Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated. */
	@Input()
	get columns(): PivotTableColumn[] {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: PivotTableColumn[]) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated. */
	@Input()
	get columnTotals(): boolean {
		return this.nativeElement ? this.nativeElement.columnTotals : undefined;
	}
	set columnTotals(value: boolean) {
		this.nativeElement ? this.nativeElement.columnTotals = value : undefined;
	}

	/** @description Sets or gets the position of total columns (shown when columnTotals is enabled). */
	@Input()
	get columnTotalsPosition(): PivotTableColumnTotalsPosition | string {
		return this.nativeElement ? this.nativeElement.columnTotalsPosition : undefined;
	}
	set columnTotalsPosition(value: PivotTableColumnTotalsPosition | string) {
		this.nativeElement ? this.nativeElement.columnTotalsPosition = value : undefined;
	}

	/** @description Sets or gets details about conditional formatting to be applied to the PivotTable's cells. */
	@Input()
	get conditionalFormatting(): PivotTableConditionalFormatting[] {
		return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	}
	set conditionalFormatting(value: PivotTableConditionalFormatting[]) {
		this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
	}

	/** @description Determines the original tabular data source of the PivotTable. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Sets or gets whether the original tabular data sourse of the PivotTable will be pre-sorted based on columns with the rowGroup property (and their order). */
	@Input()
	get defaultSortByRowGroups(): boolean {
		return this.nativeElement ? this.nativeElement.defaultSortByRowGroups : undefined;
	}
	set defaultSortByRowGroups(value: boolean) {
		this.nativeElement ? this.nativeElement.defaultSortByRowGroups = value : undefined;
	}

	/** @description Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering. */
	@Input()
	get designer(): boolean {
		return this.nativeElement ? this.nativeElement.designer : undefined;
	}
	set designer(value: boolean) {
		this.nativeElement ? this.nativeElement.designer = value : undefined;
	}

	/** @description Sets or gets the position of the PivotTable's designer (shown when designer is enabled). */
	@Input()
	get designerPosition(): PivotTableDesignerPosition | string {
		return this.nativeElement ? this.nativeElement.designerPosition : undefined;
	}
	set designerPosition(value: PivotTableDesignerPosition | string) {
		this.nativeElement ? this.nativeElement.designerPosition = value : undefined;
	}

	/** @description Disables the interaction with the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed. */
	@Input()
	get drillDown(): boolean {
		return this.nativeElement ? this.nativeElement.drillDown : undefined;
	}
	set drillDown(value: boolean) {
		this.nativeElement ? this.nativeElement.drillDown = value : undefined;
	}

	/** @description If set, shows an export button in the drill down dialog. */
	@Input()
	get drillDownDataExport(): PivotTableDrillDownDataExport | string {
		return this.nativeElement ? this.nativeElement.drillDownDataExport : undefined;
	}
	set drillDownDataExport(value: PivotTableDrillDownDataExport | string) {
		this.nativeElement ? this.nativeElement.drillDownDataExport = value : undefined;
	}

	/** @description Sets or gets the drill down table export file name. */
	@Input()
	get drillDownDataExportName(): string {
		return this.nativeElement ? this.nativeElement.drillDownDataExportName : undefined;
	}
	set drillDownDataExportName(value: string) {
		this.nativeElement ? this.nativeElement.drillDownDataExportName = value : undefined;
	}

	/** @description Sets or gets whether sorting based on columns in classic row groups layout mode is enabled. */
	@Input()
	get drillDownTableInit(): { (table: HTMLElement ): void } {
		return this.nativeElement ? this.nativeElement.drillDownTableInit : undefined;
	}
	set drillDownTableInit(value: { (table: HTMLElement ): void }) {
		this.nativeElement ? this.nativeElement.drillDownTableInit = value : undefined;
	}

	/** @description Sets or gets whether the PivotTable's column header is sticky/frozen. */
	@Input()
	get drillDownCustomAction(): { (originalRecords: [] ): void } {
		return this.nativeElement ? this.nativeElement.drillDownCustomAction : undefined;
	}
	set drillDownCustomAction(value: { (originalRecords: [] ): void }) {
		this.nativeElement ? this.nativeElement.drillDownCustomAction = value : undefined;
	}

	/** @description Sets or gets whether to show a Grand total row aggregating the data of all rows. */
	@Input()
	get enableSortByRowGroups(): boolean {
		return this.nativeElement ? this.nativeElement.enableSortByRowGroups : undefined;
	}
	set enableSortByRowGroups(value: boolean) {
		this.nativeElement ? this.nativeElement.enableSortByRowGroups = value : undefined;
	}

	/** @description Sets or gets the way row nesting (based on rowGroup columns) is displayed. */
	@Input()
	get freezeHeader(): boolean {
		return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
	}
	set freezeHeader(value: boolean) {
		this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
	}

	/** @description Sets or gets whether to hide the tooltip that displays details when multiple summary cells with non-null values are selected. */
	@Input()
	get getDefaultSummaryFunction(): { (column: PivotTableColumn): string } {
		return this.nativeElement ? this.nativeElement.getDefaultSummaryFunction : undefined;
	}
	set getDefaultSummaryFunction(value: { (column: PivotTableColumn): string }) {
		this.nativeElement ? this.nativeElement.getDefaultSummaryFunction = value : undefined;
	}

	/** @description Sets or gets whether to hide rows that contain only 0 or null values. Applicable only when there are rowGroup columns. */
	@Input()
	get grandTotal(): boolean {
		return this.nativeElement ? this.nativeElement.grandTotal : undefined;
	}
	set grandTotal(value: boolean) {
		this.nativeElement ? this.nativeElement.grandTotal = value : undefined;
	}

	/** @description Sets or gets whether navigation with the keyboard is enabled in the PivotTable. */
	@Input()
	get groupLayout(): PivotTableGroupLayout | string {
		return this.nativeElement ? this.nativeElement.groupLayout : undefined;
	}
	set groupLayout(value: PivotTableGroupLayout | string) {
		this.nativeElement ? this.nativeElement.groupLayout = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get hideCellSelectionTooltip(): boolean {
		return this.nativeElement ? this.nativeElement.hideCellSelectionTooltip : undefined;
	}
	set hideCellSelectionTooltip(value: boolean) {
		this.nativeElement ? this.nativeElement.hideCellSelectionTooltip = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get hideEmptyRows(): boolean {
		return this.nativeElement ? this.nativeElement.hideEmptyRows : undefined;
	}
	set hideEmptyRows(value: boolean) {
		this.nativeElement ? this.nativeElement.hideEmptyRows = value : undefined;
	}

	/** @description Sets or gets what value is shown in cells that do not have aggregated data to display. By default (null), such cells are empty. */
	@Input()
	get keyboardNavigation(): boolean {
		return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
	}
	set keyboardNavigation(value: boolean) {
		this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
	}

	/** @description Sets or gets the page size (when paging is enabled). */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Sets or gets the current (zero-based) page index (when paging is enabled). */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets whether paging is enabled. */
	@Input()
	get nullDefaultValue(): number {
		return this.nativeElement ? this.nativeElement.nullDefaultValue : undefined;
	}
	set nullDefaultValue(value: number) {
		this.nativeElement ? this.nativeElement.nullDefaultValue = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get onCellRender(): { (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void } {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value: { (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void }) {
		this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
	}

	/** @description Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns. */
	@Input()
	get onColumnRender(): { (settings: { text: string, cell: HTMLTableCellElement, column: PivotTableColumn, fullDefinition: any }): void } {
		return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
	}
	set onColumnRender(value: { (settings: { text: string, cell: HTMLTableCellElement, column: PivotTableColumn, fullDefinition: any }): void }) {
		this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
	}

	/** @description Sets or gets whether row summaries are displayed in the row headers. Example: Peterson(40) vs Peterson, when rowSummary is set to false. */
	@Input()
	get onInit(): { (): void } {
		return this.nativeElement ? this.nativeElement.onInit : undefined;
	}
	set onInit(value: { (): void }) {
		this.nativeElement ? this.nativeElement.onInit = value : undefined;
	}

	/** @description Sets or gets whether to show row total columns for each summary column. */
	@Input()
	get pageSize(): PivotTablePageSize | string {
		return this.nativeElement ? this.nativeElement.pageSize : undefined;
	}
	set pageSize(value: PivotTablePageSize | string) {
		this.nativeElement ? this.nativeElement.pageSize = value : undefined;
	}

	/** @description Sets or gets the position of row total columns (shown when rowTotals is enabled). */
	@Input()
	get pageIndex(): number {
		return this.nativeElement ? this.nativeElement.pageIndex : undefined;
	}
	set pageIndex(value: number) {
		this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
	}

	/** @description Sets or gets whether row selection (via checkboxes) is enabled. */
	@Input()
	get paging(): boolean {
		return this.nativeElement ? this.nativeElement.paging : undefined;
	}
	set paging(value: boolean) {
		this.nativeElement ? this.nativeElement.paging = value : undefined;
	}

	/** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines the sorting mode of the PivotTable. */
	@Input()
	get rowSort(): boolean {
		return this.nativeElement ? this.nativeElement.rowSort : undefined;
	}
	set rowSort(value: boolean) {
		this.nativeElement ? this.nativeElement.rowSort = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get rowSummary(): boolean {
		return this.nativeElement ? this.nativeElement.rowSummary : undefined;
	}
	set rowSummary(value: boolean) {
		this.nativeElement ? this.nativeElement.rowSummary = value : undefined;
	}

	/** @description Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings. */
	@Input()
	get rowTotals(): boolean {
		return this.nativeElement ? this.nativeElement.rowTotals : undefined;
	}
	set rowTotals(value: boolean) {
		this.nativeElement ? this.nativeElement.rowTotals = value : undefined;
	}

	/** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
	@Input()
	get rowTotalsPosition(): PivotTableRowTotalsPosition | string {
		return this.nativeElement ? this.nativeElement.rowTotalsPosition : undefined;
	}
	set rowTotalsPosition(value: PivotTableRowTotalsPosition | string) {
		this.nativeElement ? this.nativeElement.rowTotalsPosition = value : undefined;
	}

	/** @description undefined */
	@Input()
	get selection(): boolean {
		return this.nativeElement ? this.nativeElement.selection : undefined;
	}
	set selection(value: boolean) {
		this.nativeElement ? this.nativeElement.selection = value : undefined;
	}

	/** @description undefined */
	@Input()
	get selectionMode(): PivotTableSelectionMode | string {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: PivotTableSelectionMode | string) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description undefined */
	@Input()
	get sortMode(): PivotTableSortMode | string {
		return this.nativeElement ? this.nativeElement.sortMode : undefined;
	}
	set sortMode(value: PivotTableSortMode | string) {
		this.nativeElement ? this.nativeElement.sortMode = value : undefined;
	}

	/** @description undefined */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description undefined */
	@Input()
	get toolbar(): boolean {
		return this.nativeElement ? this.nativeElement.toolbar : undefined;
	}
	set toolbar(value: boolean) {
		this.nativeElement ? this.nativeElement.toolbar = value : undefined;
	}

	/** @description undefined */
	@Input()
	get tooltip(): boolean {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value: boolean) {
		this.nativeElement ? this.nativeElement.tooltip = value : undefined;
	}

	/** @description This event is triggered when a cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
	*   dataField - The data field of the cell's dynamic column.
	*   row - The data of the cell's row.
	*/
	@Output() onCellClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type)
	*   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a summary column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition, 	dataField)
	*   columnDefinition - An object detailing the clicked dynamic column.
	*   dataField - The data field of the cell's original column.
	*/
	@Output() onColumnClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a row has been collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	record)
	*   record - The (aggregated) data of the collapsed row.
	*/
	@Output() onCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a total column has been collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
	*   columnDefinition - The definition of the collapsed total column.
	*/
	@Output() onCollapseTotalColumn: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a row has been expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	record)
	*   record - The (aggregated) data of the expanded row.
	*/
	@Output() onExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a total column has been expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
	*   columnDefinition - The definition of the expanded total column.
	*/
	@Output() onExpandTotalColumn: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a filtering-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
	*   action - The filtering action. Possible actions: 'add', 'remove'.
	*   filters - The added filters. Only when action is 'add'.
	*/
	@Output() onFilter: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
	*   columns - An array with information about the dynamic columns the PivotTable has been sorted by.
	*/
	@Output() onSort: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds a filter to a specific column. 
	* @param {string} dataField. The column's data field.
	* @param {any} filter. FilterGroup object.
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

	/** @description Clears applied filters. 
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

	/** @description Clears selection. 
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

	/** @description Clears the PivotTable sorting. 
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

	/** @description Collapses all rows (when multiple row groups are applied). 
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

	/** @description Collapses a row (when multiple row groups are applied). 
	* @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
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

	/** @description Expands all rows (when multiple row groups are applied). 
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

	/** @description Expands a row (when multiple row groups are applied). 
	* @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
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

	/** @description Exports the PivotTable's data. 
	* @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	* @param {string} fileName. The name of the file to export to
	* @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	* @returns {any}
  */
	public async exportData(dataFormat, fileName, callback?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.exportData(dataFormat, fileName, callback);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns the current dynamic pivot columns. 
	* @returns {any}
  */
	public async getDynamicColumns(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getDynamicColumns();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns an array of selected row ids (when selectionMode is 'many' or 'extended') or an array of selected cell details (when selectionMode is 'cell'). 
	* @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
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

	/** @description Refreshes the PivotTable. 
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

	/** @description Removes filters applied to a specific column. 
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

	/** @description Selects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed). 
	* @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
	* @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
	*/
    public select(rowId: string | number | (string | number)[], dataField?: string): void {
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

	/** @description Sorts by a summary or group column. 
	* @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
	* @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
	*/
    public sortBy(columnDefinition: any, sortOrder?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDefinition, sortOrder);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(columnDefinition, sortOrder);
            });
        }
    }

	/** @description Unselects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed). 
	* @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
	* @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
	*/
    public unselect(rowId: string | number | (string | number)[], dataField?: string): void {
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
		that.eventHandlers['cellClickHandler'] = (event: CustomEvent) => { that.onCellClick.emit(event); }
		that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['columnClickHandler'] = (event: CustomEvent) => { that.onColumnClick.emit(event); }
		that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);

		that.eventHandlers['collapseHandler'] = (event: CustomEvent) => { that.onCollapse.emit(event); }
		that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);

		that.eventHandlers['collapseTotalColumnHandler'] = (event: CustomEvent) => { that.onCollapseTotalColumn.emit(event); }
		that.nativeElement.addEventListener('collapseTotalColumn', that.eventHandlers['collapseTotalColumnHandler']);

		that.eventHandlers['expandHandler'] = (event: CustomEvent) => { that.onExpand.emit(event); }
		that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);

		that.eventHandlers['expandTotalColumnHandler'] = (event: CustomEvent) => { that.onExpandTotalColumn.emit(event); }
		that.nativeElement.addEventListener('expandTotalColumn', that.eventHandlers['expandTotalColumnHandler']);

		that.eventHandlers['filterHandler'] = (event: CustomEvent) => { that.onFilter.emit(event); }
		that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);

		that.eventHandlers['sortHandler'] = (event: CustomEvent) => { that.onSort.emit(event); }
		that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['cellClickHandler']) {
			that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['columnClickHandler']) {
			that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
		}

		if (that.eventHandlers['collapseHandler']) {
			that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
		}

		if (that.eventHandlers['collapseTotalColumnHandler']) {
			that.nativeElement.removeEventListener('collapseTotalColumn', that.eventHandlers['collapseTotalColumnHandler']);
		}

		if (that.eventHandlers['expandHandler']) {
			that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
		}

		if (that.eventHandlers['expandTotalColumnHandler']) {
			that.nativeElement.removeEventListener('expandTotalColumn', that.eventHandlers['expandTotalColumnHandler']);
		}

		if (that.eventHandlers['filterHandler']) {
			that.nativeElement.onfilterHandler = null;
		}

		if (that.eventHandlers['sortHandler']) {
			that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
		}

	}
}
