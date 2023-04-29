import React from "react";
import { PivotTableProperties } from "./../../index";
import { Animation, PivotTableColumnAlign, PivotTableColumnDataType, PivotTableColumnSummary, PivotTableColumnTotalsPosition, PivotTableConditionalFormattingCondition, PivotTableConditionalFormattingFontFamily, PivotTableConditionalFormattingFontSize, PivotTableDesignerPosition, PivotTableDrillDownDataExport, PivotTableGroupLayout, PivotTablePageSize, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting} from './../../index';
export { PivotTableProperties } from "./../../index";
export { Animation, PivotTableColumnAlign, PivotTableColumnDataType, PivotTableColumnSummary, PivotTableColumnTotalsPosition, PivotTableConditionalFormattingCondition, PivotTableConditionalFormattingFontFamily, PivotTableConditionalFormattingFontSize, PivotTableDesignerPosition, PivotTableDrillDownDataExport, PivotTableGroupLayout, PivotTablePageSize, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface PivotTableProps extends PivotTableProperties {
    className?: string;
    style?: React.CSSProperties;

	onCellClick?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onColumnClick?: ((event?: Event) => void) | undefined;
	onCollapse?: ((event?: Event) => void) | undefined;
	onCollapseTotalColumn?: ((event?: Event) => void) | undefined;
	onExpand?: ((event?: Event) => void) | undefined;
	onExpandTotalColumn?: ((event?: Event) => void) | undefined;
	onFilter?: ((event?: Event) => void) | undefined;
	onSort?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 PivotTable is a table of statistics that summarizes the data of a more extensive table.
*/
export class PivotTable extends React.Component<React.HTMLAttributes<Element> & PivotTableProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'PivotTable' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
	*	Property type: Animation | string
	*/
	get animation(): Animation | string  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation | string) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
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

	/** Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated.
	*	Property type: PivotTableColumn[]
	*/
	get columns(): PivotTableColumn[]  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: PivotTableColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated.
	*	Property type: boolean
	*/
	get columnTotals(): boolean  {
		return this.nativeElement ? this.nativeElement.columnTotals : undefined;
	}
	set columnTotals(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnTotals = value;
		}
	}

	/** Sets or gets the position of total columns (shown when columnTotals is enabled).
	*	Property type: PivotTableColumnTotalsPosition | string
	*/
	get columnTotalsPosition(): PivotTableColumnTotalsPosition | string  {
		return this.nativeElement ? this.nativeElement.columnTotalsPosition : undefined;
	}
	set columnTotalsPosition(value: PivotTableColumnTotalsPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.columnTotalsPosition = value;
		}
	}

	/** Sets or gets details about conditional formatting to be applied to the PivotTable's cells.
	*	Property type: PivotTableConditionalFormatting[]
	*/
	get conditionalFormatting(): PivotTableConditionalFormatting[]  {
		return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	}
	set conditionalFormatting(value: PivotTableConditionalFormatting[]) {
		if (this.nativeElement) {
			this.nativeElement.conditionalFormatting = value;
		}
	}

	/** Determines the original tabular data source of the PivotTable.
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

	/** Sets or gets whether the original tabular data sourse of the PivotTable will be pre-sorted based on columns with the rowGroup property (and their order).
	*	Property type: boolean
	*/
	get defaultSortByRowGroups(): boolean  {
		return this.nativeElement ? this.nativeElement.defaultSortByRowGroups : undefined;
	}
	set defaultSortByRowGroups(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.defaultSortByRowGroups = value;
		}
	}

	/** Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering.
	*	Property type: boolean
	*/
	get designer(): boolean  {
		return this.nativeElement ? this.nativeElement.designer : undefined;
	}
	set designer(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.designer = value;
		}
	}

	/** Sets or gets the position of the PivotTable's designer (shown when designer is enabled).
	*	Property type: PivotTableDesignerPosition | string
	*/
	get designerPosition(): PivotTableDesignerPosition | string  {
		return this.nativeElement ? this.nativeElement.designerPosition : undefined;
	}
	set designerPosition(value: PivotTableDesignerPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.designerPosition = value;
		}
	}

	/** Disables the interaction with the element.
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

	/** If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed.
	*	Property type: boolean
	*/
	get drillDown(): boolean  {
		return this.nativeElement ? this.nativeElement.drillDown : undefined;
	}
	set drillDown(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.drillDown = value;
		}
	}

	/** If set, shows an export button in the drill down dialog.
	*	Property type: PivotTableDrillDownDataExport | string
	*/
	get drillDownDataExport(): PivotTableDrillDownDataExport | string  {
		return this.nativeElement ? this.nativeElement.drillDownDataExport : undefined;
	}
	set drillDownDataExport(value: PivotTableDrillDownDataExport | string) {
		if (this.nativeElement) {
			this.nativeElement.drillDownDataExport = value;
		}
	}

	/** Sets or gets the drill down table export file name.
	*	Property type: string
	*/
	get drillDownDataExportName(): string  {
		return this.nativeElement ? this.nativeElement.drillDownDataExportName : undefined;
	}
	set drillDownDataExportName(value: string) {
		if (this.nativeElement) {
			this.nativeElement.drillDownDataExportName = value;
		}
	}

	/** Sets or gets whether sorting based on columns in classic row groups layout mode is enabled.
	*	Property type: { (table: HTMLElement ): void }
	*/
	get drillDownTableInit(): { (table: HTMLElement ): void }  {
		return this.nativeElement ? this.nativeElement.drillDownTableInit : undefined;
	}
	set drillDownTableInit(value: { (table: HTMLElement ): void }) {
		if (this.nativeElement) {
			this.nativeElement.drillDownTableInit = value;
		}
	}

	/** Sets or gets whether the PivotTable's column header is sticky/frozen.
	*	Property type: { (originalRecords: [] ): void }
	*/
	get drillDownCustomAction(): { (originalRecords: [] ): void }  {
		return this.nativeElement ? this.nativeElement.drillDownCustomAction : undefined;
	}
	set drillDownCustomAction(value: { (originalRecords: [] ): void }) {
		if (this.nativeElement) {
			this.nativeElement.drillDownCustomAction = value;
		}
	}

	/** Sets or gets whether to show a Grand total row aggregating the data of all rows.
	*	Property type: boolean
	*/
	get enableSortByRowGroups(): boolean  {
		return this.nativeElement ? this.nativeElement.enableSortByRowGroups : undefined;
	}
	set enableSortByRowGroups(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.enableSortByRowGroups = value;
		}
	}

	/** Sets or gets the way row nesting (based on rowGroup columns) is displayed.
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

	/** Sets or gets whether to hide the tooltip that displays details when multiple summary cells with non-null values are selected.
	*	Property type: { (column: PivotTableColumn): string }
	*/
	get getDefaultSummaryFunction(): { (column: PivotTableColumn): string }  {
		return this.nativeElement ? this.nativeElement.getDefaultSummaryFunction : undefined;
	}
	set getDefaultSummaryFunction(value: { (column: PivotTableColumn): string }) {
		if (this.nativeElement) {
			this.nativeElement.getDefaultSummaryFunction = value;
		}
	}

	/** Sets or gets whether to hide rows that contain only 0 or null values. Applicable only when there are rowGroup columns.
	*	Property type: boolean
	*/
	get grandTotal(): boolean  {
		return this.nativeElement ? this.nativeElement.grandTotal : undefined;
	}
	set grandTotal(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.grandTotal = value;
		}
	}

	/** Sets or gets whether navigation with the keyboard is enabled in the PivotTable.
	*	Property type: PivotTableGroupLayout | string
	*/
	get groupLayout(): PivotTableGroupLayout | string  {
		return this.nativeElement ? this.nativeElement.groupLayout : undefined;
	}
	set groupLayout(value: PivotTableGroupLayout | string) {
		if (this.nativeElement) {
			this.nativeElement.groupLayout = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
	*	Property type: boolean
	*/
	get hideCellSelectionTooltip(): boolean  {
		return this.nativeElement ? this.nativeElement.hideCellSelectionTooltip : undefined;
	}
	set hideCellSelectionTooltip(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideCellSelectionTooltip = value;
		}
	}

	/** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
	*	Property type: boolean
	*/
	get hideEmptyRows(): boolean  {
		return this.nativeElement ? this.nativeElement.hideEmptyRows : undefined;
	}
	set hideEmptyRows(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideEmptyRows = value;
		}
	}

	/** Sets or gets what value is shown in cells that do not have aggregated data to display. By default (null), such cells are empty.
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
	*	Property type: number
	*/
	get nullDefaultValue(): number  {
		return this.nativeElement ? this.nativeElement.nullDefaultValue : undefined;
	}
	set nullDefaultValue(value: number) {
		if (this.nativeElement) {
			this.nativeElement.nullDefaultValue = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: { (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void }
	*/
	get onCellRender(): { (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void }  {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value: { (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void }) {
		if (this.nativeElement) {
			this.nativeElement.onCellRender = value;
		}
	}

	/** Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns.
	*	Property type: { (settings: { text: string, cell: HTMLTableCellElement, column: PivotTableColumn, fullDefinition: any }): void }
	*/
	get onColumnRender(): { (settings: { text: string, cell: HTMLTableCellElement, column: PivotTableColumn, fullDefinition: any }): void }  {
		return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
	}
	set onColumnRender(value: { (settings: { text: string, cell: HTMLTableCellElement, column: PivotTableColumn, fullDefinition: any }): void }) {
		if (this.nativeElement) {
			this.nativeElement.onColumnRender = value;
		}
	}

	/** Sets or gets whether row summaries are displayed in the row headers. Example: Peterson(40) vs Peterson, when rowSummary is set to false.
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

	/** Sets or gets whether to show row total columns for each summary column.
	*	Property type: PivotTablePageSize | string
	*/
	get pageSize(): PivotTablePageSize | string  {
		return this.nativeElement ? this.nativeElement.pageSize : undefined;
	}
	set pageSize(value: PivotTablePageSize | string) {
		if (this.nativeElement) {
			this.nativeElement.pageSize = value;
		}
	}

	/** Sets or gets the position of row total columns (shown when rowTotals is enabled).
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

	/** Sets or gets whether row selection (via checkboxes) is enabled.
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

	/** Sets or gets the selection mode. Only applicable when selection is enabled.
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

	/** Determines the sorting mode of the PivotTable.
	*	Property type: boolean
	*/
	get rowSort(): boolean  {
		return this.nativeElement ? this.nativeElement.rowSort : undefined;
	}
	set rowSort(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rowSort = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
	*	Property type: boolean
	*/
	get rowSummary(): boolean  {
		return this.nativeElement ? this.nativeElement.rowSummary : undefined;
	}
	set rowSummary(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rowSummary = value;
		}
	}

	/** Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings.
	*	Property type: boolean
	*/
	get rowTotals(): boolean  {
		return this.nativeElement ? this.nativeElement.rowTotals : undefined;
	}
	set rowTotals(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rowTotals = value;
		}
	}

	/** Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
	*	Property type: PivotTableRowTotalsPosition | string
	*/
	get rowTotalsPosition(): PivotTableRowTotalsPosition | string  {
		return this.nativeElement ? this.nativeElement.rowTotalsPosition : undefined;
	}
	set rowTotalsPosition(value: PivotTableRowTotalsPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.rowTotalsPosition = value;
		}
	}

	/** undefined
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
	*	Property type: PivotTableSelectionMode | string
	*/
	get selectionMode(): PivotTableSelectionMode | string  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: PivotTableSelectionMode | string) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** undefined
	*	Property type: PivotTableSortMode | string
	*/
	get sortMode(): PivotTableSortMode | string  {
		return this.nativeElement ? this.nativeElement.sortMode : undefined;
	}
	set sortMode(value: PivotTableSortMode | string) {
		if (this.nativeElement) {
			this.nativeElement.sortMode = value;
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
	get toolbar(): boolean  {
		return this.nativeElement ? this.nativeElement.toolbar : undefined;
	}
	set toolbar(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.toolbar = value;
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","columnReorder","columns","columnTotals","columnTotalsPosition","conditionalFormatting","dataSource","defaultSortByRowGroups","designer","designerPosition","disabled","drillDown","drillDownDataExport","drillDownDataExportName","drillDownTableInit","drillDownCustomAction","enableSortByRowGroups","freezeHeader","getDefaultSummaryFunction","grandTotal","groupLayout","hideCellSelectionTooltip","hideEmptyRows","keyboardNavigation","locale","messages","nullDefaultValue","onCellRender","onColumnRender","onInit","pageSize","pageIndex","paging","rightToLeft","rowSort","rowSummary","rowTotals","rowTotalsPosition","selection","selectionMode","sortMode","theme","toolbar","tooltip"];
	}
	/**  This event is triggered when a cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
	*   dataField - The data field of the cell's dynamic column.
	*   row - The data of the cell's row.
	*/
	onCellClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type)
	*   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a summary column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition, 	dataField)
	*   columnDefinition - An object detailing the clicked dynamic column.
	*   dataField - The data field of the cell's original column.
	*/
	onColumnClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row has been collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	record)
	*   record - The (aggregated) data of the collapsed row.
	*/
	onCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a total column has been collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
	*   columnDefinition - The definition of the collapsed total column.
	*/
	onCollapseTotalColumn?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row has been expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	record)
	*   record - The (aggregated) data of the expanded row.
	*/
	onExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a total column has been expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
	*   columnDefinition - The definition of the expanded total column.
	*/
	onExpandTotalColumn?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a filtering-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
	*   action - The filtering action. Possible actions: 'add', 'remove'.
	*   filters - The added filters. Only when action is 'add'.
	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
	*   columns - An array with information about the dynamic columns the PivotTable has been sorted by.
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
		return ["onCellClick","onChange","onColumnClick","onCollapse","onCollapseTotalColumn","onExpand","onExpandTotalColumn","onFilter","onSort","onCreate","onReady"];
	}
	/** Adds a filter to a specific column. 
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

	/** Clears the PivotTable sorting. 
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

	/** Collapses all rows (when multiple row groups are applied). 
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

	/** Collapses a row (when multiple row groups are applied). 
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

	/** Expands all rows (when multiple row groups are applied). 
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

	/** Expands a row (when multiple row groups are applied). 
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

	/** Exports the PivotTable's data. 
	* @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	* @param {string} fileName. The name of the file to export to
	* @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	* @returns {any}
  */
	public exportData(dataFormat:string, fileName:string, callback?:Function) : any {
        const result: any = this.nativeElement.exportData(dataFormat, fileName, callback);
        return result;
    }

	/** Returns the current dynamic pivot columns. 
	* @returns {any}
  */
	public getDynamicColumns() : any {
        const result: any = this.nativeElement.getDynamicColumns();
        return result;
    }

	/** Returns an array of selected row ids (when selectionMode is 'many' or 'extended') or an array of selected cell details (when selectionMode is 'cell'). 
	* @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
  */
	public getSelection() : any {
        const result: any = this.nativeElement.getSelection();
        return result;
    }

	/** Refreshes the PivotTable. 
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

	/** Selects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed). 
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

	/** Sorts by a summary or group column. 
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

	/** Unselects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed). 
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
			React.createElement("smart-pivot-table", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default PivotTable;
