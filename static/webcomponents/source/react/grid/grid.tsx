import React from "react";
import { GridProperties } from "./../../index";
import { GridAppearanceAutoGenerateRowLabelMode, GridAppearanceAutoGenerateColumnLabelMode, GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnFilterMenuMode, GridColumnSortOrder, GridConditionalFormattingCondition, GridDataExportPageOrientation, GridDataSourceSettingsSanitizeHTML, GridDataSourceSettingsDataFieldDataType, GridDataSourceSettingsDataSourceType, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridEditingAddNewRowDisplayMode, GridFilteringFilterRowApplyMode, GridFilteringFilterMenuMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridSortingCommandKey, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridContextMenu, GridContextMenuDataSource, GridCommand, GridColumnMenu, GridColumnMenuDataSource, GridColumnGroup, GridConditionalFormatting, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridDataSourceSettingsDataField, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridEditingAddNewColumn, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridUploadSettings, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridStateSettings, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting} from './../../index';
import { DataAdapter, Chart } from './../../index';
export { GridProperties } from "./../../index";
export { GridAppearanceAutoGenerateRowLabelMode, GridAppearanceAutoGenerateColumnLabelMode, GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnFilterMenuMode, GridColumnSortOrder, GridConditionalFormattingCondition, GridDataExportPageOrientation, GridDataSourceSettingsSanitizeHTML, GridDataSourceSettingsDataFieldDataType, GridDataSourceSettingsDataSourceType, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridEditingAddNewRowDisplayMode, GridFilteringFilterRowApplyMode, GridFilteringFilterMenuMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridSortingCommandKey, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridContextMenu, GridContextMenuDataSource, GridCommand, GridColumnMenu, GridColumnMenuDataSource, GridColumnGroup, GridConditionalFormatting, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridDataSourceSettingsDataField, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridEditingAddNewColumn, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridUploadSettings, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridStateSettings, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting} from './../../index';
export { DataAdapter, Chart } from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface GridProps extends GridProperties {
    className?: string;
    style?: React.CSSProperties;

	onBeginEdit?: ((event?: Event) => void) | undefined;
	onBatchChange?: ((event?: Event) => void) | undefined;
	onBatchCancel?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onColumnClick?: ((event?: Event) => void) | undefined;
	onColumnDoubleClick?: ((event?: Event) => void) | undefined;
	onColumnResize?: ((event?: Event) => void) | undefined;
	onColumnDragStart?: ((event?: Event) => void) | undefined;
	onColumnDragging?: ((event?: Event) => void) | undefined;
	onColumnDragEnd?: ((event?: Event) => void) | undefined;
	onColumnReorder?: ((event?: Event) => void) | undefined;
	onCommentAdd?: ((event?: Event) => void) | undefined;
	onCommentRemove?: ((event?: Event) => void) | undefined;
	onContextMenuItemClick?: ((event?: Event) => void) | undefined;
	onRowDragStart?: ((event?: Event) => void) | undefined;
	onRowDragging?: ((event?: Event) => void) | undefined;
	onRowDragEnd?: ((event?: Event) => void) | undefined;
	onRowReorder?: ((event?: Event) => void) | undefined;
	onRowExpand?: ((event?: Event) => void) | undefined;
	onRowCollapse?: ((event?: Event) => void) | undefined;
	onRowClick?: ((event?: Event) => void) | undefined;
	onRowDoubleClick?: ((event?: Event) => void) | undefined;
	onRowResize?: ((event?: Event) => void) | undefined;
	onRowStarred?: ((event?: Event) => void) | undefined;
	onCellClick?: ((event?: Event) => void) | undefined;
	onCellDoubleClick?: ((event?: Event) => void) | undefined;
	onEndEdit?: ((event?: Event) => void) | undefined;
	onFilter?: ((event?: Event) => void) | undefined;
	onGroup?: ((event?: Event) => void) | undefined;
	onOpenColumnDialog?: ((event?: Event) => void) | undefined;
	onCloseColumnDialog?: ((event?: Event) => void) | undefined;
	onResize?: ((event?: Event) => void) | undefined;
	onRowTap?: ((event?: Event) => void) | undefined;
	onCellTap?: ((event?: Event) => void) | undefined;
	onPage?: ((event?: Event) => void) | undefined;
	onSort?: ((event?: Event) => void) | undefined;
	onScrollBottomReached?: ((event?: Event) => void) | undefined;
	onScrollTopReached?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
export class Grid extends React.Component<React.HTMLAttributes<Element> & GridProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Grid' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** An object containing settings related to the grid's appearance.
	*	Property type: GridAppearance
	*/
	get appearance(): GridAppearance  {
		return this.nativeElement ? this.nativeElement.appearance : undefined;
	}
	set appearance(value: GridAppearance) {
		if (this.nativeElement) {
			this.nativeElement.appearance = value;
		}
	}

	/** An object containing settings related to the grid's behavior.
	*	Property type: GridBehavior
	*/
	get behavior(): GridBehavior  {
		return this.nativeElement ? this.nativeElement.behavior : undefined;
	}
	set behavior(value: GridBehavior) {
		if (this.nativeElement) {
			this.nativeElement.behavior = value;
		}
	}

	/** An object containing settings related to the grid's layout.
	*	Property type: GridLayout
	*/
	get layout(): GridLayout  {
		return this.nativeElement ? this.nativeElement.layout : undefined;
	}
	set layout(value: GridLayout) {
		if (this.nativeElement) {
			this.nativeElement.layout = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
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

	/** The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations..
	*	Property type: GridClipboard
	*/
	get clipboard(): GridClipboard  {
		return this.nativeElement ? this.nativeElement.clipboard : undefined;
	}
	set clipboard(value: GridClipboard) {
		if (this.nativeElement) {
			this.nativeElement.clipboard = value;
		}
	}

	/** The columns property is used to describe all columns displayed in the grid. 
	*	Property type: {label: string, dataField: string}[] | string[] | number | GridColumn[]
	*/
	get columns(): {label: string, dataField: string}[] | string[] | number | GridColumn[]  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: {label: string, dataField: string}[] | string[] | number | GridColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Context Menu is the drop-down menu displayed after right-clicking a Grid row. It allows you to delete row, edit cell or row depending on the edit mode. The 'contextMenuItemCustom' dataSource option allows you to add custom menu item to the context menu. You can replace the context menu by using the 'selector' property and setting it to ID of a Smart.Menu component.
	*	Property type: GridContextMenu
	*/
	get contextMenu(): GridContextMenu  {
		return this.nativeElement ? this.nativeElement.contextMenu : undefined;
	}
	set contextMenu(value: GridContextMenu) {
		if (this.nativeElement) {
			this.nativeElement.contextMenu = value;
		}
	}

	/** Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column.
	*	Property type: GridColumnMenu
	*/
	get columnMenu(): GridColumnMenu  {
		return this.nativeElement ? this.nativeElement.columnMenu : undefined;
	}
	set columnMenu(value: GridColumnMenu) {
		if (this.nativeElement) {
			this.nativeElement.columnMenu = value;
		}
	}

	/** Describes the settings of the column groups.
	*	Property type: GridColumnGroup[]
	*/
	get columnGroups(): GridColumnGroup[]  {
		return this.nativeElement ? this.nativeElement.columnGroups : undefined;
	}
	set columnGroups(value: GridColumnGroup[]) {
		if (this.nativeElement) {
			this.nativeElement.columnGroups = value;
		}
	}

	/** Sets or gets details about conditional formatting to be applied to the Grid's cells.
	*	Property type: GridConditionalFormatting[]
	*/
	get conditionalFormatting(): GridConditionalFormatting[]  {
		return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	}
	set conditionalFormatting(value: GridConditionalFormatting[]) {
		if (this.nativeElement) {
			this.nativeElement.conditionalFormatting = value;
		}
	}

	/** Sets the Grid Charting Data Visualization.
	*	Property type: GridCharting
	*/
	get charting(): GridCharting  {
		return this.nativeElement ? this.nativeElement.charting : undefined;
	}
	set charting(value: GridCharting) {
		if (this.nativeElement) {
			this.nativeElement.charting = value;
		}
	}

	/** Sets the TreeGrid checkboxes.
	*	Property type: GridCheckBoxes
	*/
	get checkBoxes(): GridCheckBoxes  {
		return this.nativeElement ? this.nativeElement.checkBoxes : undefined;
	}
	set checkBoxes(value: GridCheckBoxes) {
		if (this.nativeElement) {
			this.nativeElement.checkBoxes = value;
		}
	}

	/** Sets the Grid Data Export options.
	*	Property type: GridDataExport
	*/
	get dataExport(): GridDataExport  {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value: GridDataExport) {
		if (this.nativeElement) {
			this.nativeElement.dataExport = value;
		}
	}

	/** Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter or an Array.
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
	*	Property type: GridDataSourceSettings
	*/
	get dataSourceSettings(): GridDataSourceSettings  {
		return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
	}
	set dataSourceSettings(value: GridDataSourceSettings) {
		if (this.nativeElement) {
			this.nativeElement.dataSourceSettings = value;
		}
	}

	/** Describes the grid's editing settings.
	*	Property type: GridEditing
	*/
	get editing(): GridEditing  {
		return this.nativeElement ? this.nativeElement.editing : undefined;
	}
	set editing(value: GridEditing) {
		if (this.nativeElement) {
			this.nativeElement.editing = value;
		}
	}

	/** Describes the grid's filtering settings.
	*	Property type: GridFiltering
	*/
	get filtering(): GridFiltering  {
		return this.nativeElement ? this.nativeElement.filtering : undefined;
	}
	set filtering(value: GridFiltering) {
		if (this.nativeElement) {
			this.nativeElement.filtering = value;
		}
	}

	/** Describes the grid's grouping settings.
	*	Property type: GridGrouping
	*/
	get grouping(): GridGrouping  {
		return this.nativeElement ? this.nativeElement.grouping : undefined;
	}
	set grouping(value: GridGrouping) {
		if (this.nativeElement) {
			this.nativeElement.grouping = value;
		}
	}

	/** Sets the messages values.
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

	/** Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings.
	*	Property type: {(cell: GridCell): void}
	*/
	get onCellValue(): {(cell: GridCell): void}  {
		return this.nativeElement ? this.nativeElement.onCellValue : undefined;
	}
	set onCellValue(value: {(cell: GridCell): void}) {
		if (this.nativeElement) {
			this.nativeElement.onCellValue = value;
		}
	}

	/** Callback function() called when the grid has been rendered.
	*	Property type: {(cells: GridCell[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
	*/
	get onCellUpdate(): {(cells: GridCell[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}  {
		return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
	}
	set onCellUpdate(value: {(cells: GridCell[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}) {
		if (this.nativeElement) {
			this.nativeElement.onCellUpdate = value;
		}
	}

	/** Callback function() called when the grid has been rendered for first time and bindings are completed. The component is ready.
	*	Property type: {(cell: GridCell): void}
	*/
	get onCellRender(): {(cell: GridCell): void}  {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value: {(cell: GridCell): void}) {
		if (this.nativeElement) {
			this.nativeElement.onCellRender = value;
		}
	}

	/** Sets or gets the rows  CSS class rules. Different CSS class names are conditionally applied. Example: rowCSSRules: { 'cell-class-1': settings =&gt; settings.data.quantity === 5, 'cell-class-2': settings =&gt; settings.data.quantity &lt; 5, 'cell-class-3': settings =&gt; settings.data.quantity &gt; 5 }.  The settings object contains the following properties: index, data, row, api.
	*	Property type: {(): void}
	*/
	get onBeforeInit(): {(): void}  {
		return this.nativeElement ? this.nativeElement.onBeforeInit : undefined;
	}
	set onBeforeInit(value: {(): void}) {
		if (this.nativeElement) {
			this.nativeElement.onBeforeInit = value;
		}
	}

	/** Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
	*	Property type: {(): void}
	*/
	get onInit(): {(): void}  {
		return this.nativeElement ? this.nativeElement.onInit : undefined;
	}
	set onInit(value: {(): void}) {
		if (this.nativeElement) {
			this.nativeElement.onInit = value;
		}
	}

	/** Sets the grid users. Expects an array with 'id', 'name' and optionally 'color' and 'image' properties.
	*	Property type: {(): void}
	*/
	get onAfterInit(): {(): void}  {
		return this.nativeElement ? this.nativeElement.onAfterInit : undefined;
	}
	set onAfterInit(value: {(): void}) {
		if (this.nativeElement) {
			this.nativeElement.onAfterInit = value;
		}
	}

	/** Sets the grid's image and filter upload settings for the image and attachment columns.
	*	Property type: any
	*/
	get onChartInit(): any  {
		return this.nativeElement ? this.nativeElement.onChartInit : undefined;
	}
	set onChartInit(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onChartInit = value;
		}
	}

	/** Describes the paging settings.
	*	Property type: any
	*/
	get onRender(): any  {
		return this.nativeElement ? this.nativeElement.onRender : undefined;
	}
	set onRender(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onRender = value;
		}
	}

	/** Describes the pager settings.
	*	Property type: any
	*/
	get onLoad(): any  {
		return this.nativeElement ? this.nativeElement.onLoad : undefined;
	}
	set onLoad(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onLoad = value;
		}
	}

	/** Sets the row details.
	*	Property type: {(event: KeyboardEvent): void}
	*/
	get onKey(): {(event: KeyboardEvent): void}  {
		return this.nativeElement ? this.nativeElement.onKey : undefined;
	}
	set onKey(value: {(event: KeyboardEvent): void}) {
		if (this.nativeElement) {
			this.nativeElement.onKey = value;
		}
	}

	/** Sets the scroll mode settings.
	*	Property type: {(index: number, row: GridRow): void}
	*/
	get onRowInit(): {(index: number, row: GridRow): void}  {
		return this.nativeElement ? this.nativeElement.onRowInit : undefined;
	}
	set onRowInit(value: {(index: number, row: GridRow): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowInit = value;
		}
	}

	/** Describes the column header settings.
	*	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
	*/
	get onRowDetailInit(): {(index: number, row: GridRow, details: HTMLElement): void}  {
		return this.nativeElement ? this.nativeElement.onRowDetailInit : undefined;
	}
	set onRowDetailInit(value: {(index: number, row: GridRow, details: HTMLElement): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowDetailInit = value;
		}
	}

	/** Describes the summary row settings.
	*	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
	*/
	get onRowDetailUpdated(): {(index: number, row: GridRow, details: HTMLElement): void}  {
		return this.nativeElement ? this.nativeElement.onRowDetailUpdated : undefined;
	}
	set onRowDetailUpdated(value: {(index: number, row: GridRow, details: HTMLElement): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowDetailUpdated = value;
		}
	}

	/** Sets the grid's state settings.
	*	Property type: {(index: number, row: GridRow, history: any[]): void}
	*/
	get onRowHistory(): {(index: number, row: GridRow, history: any[]): void}  {
		return this.nativeElement ? this.nativeElement.onRowHistory : undefined;
	}
	set onRowHistory(value: {(index: number, row: GridRow, history: any[]): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowHistory = value;
		}
	}

	/** Describes the settings for the group header.
	*	Property type: {(index: number, row: GridRow, history: any[]): void}
	*/
	get onRowStyle(): {(index: number, row: GridRow, history: any[]): void}  {
		return this.nativeElement ? this.nativeElement.onRowStyle : undefined;
	}
	set onRowStyle(value: {(index: number, row: GridRow, history: any[]): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowStyle = value;
		}
	}

	/** Describes the header settings of the grid.
	*	Property type: {(index: number[], row: GridRow[]): void}
	*/
	get onRowInserted(): {(index: number[], row: GridRow[]): void}  {
		return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
	}
	set onRowInserted(value: {(index: number[], row: GridRow[]): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowInserted = value;
		}
	}

	/** Describes the footer settings of the grid.
	*	Property type: {(indexes: number[], rows: GridRow[]): void}
	*/
	get onRowRemoved(): {(indexes: number[], rows: GridRow[]): void}  {
		return this.nativeElement ? this.nativeElement.onRowRemoved : undefined;
	}
	set onRowRemoved(value: {(indexes: number[], rows: GridRow[]): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowRemoved = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: {(index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
	*/
	get onRowUpdate(): {(index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}  {
		return this.nativeElement ? this.nativeElement.onRowUpdate : undefined;
	}
	set onRowUpdate(value: {(index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowUpdate = value;
		}
	}

	/** The rows property is used to describe all rows displayed in the grid.
	*	Property type: {(index: number[], row: GridRow[]): void}
	*/
	get onRowUpdated(): {(index: number[], row: GridRow[]): void}  {
		return this.nativeElement ? this.nativeElement.onRowUpdated : undefined;
	}
	set onRowUpdated(value: {(index: number[], row: GridRow[]): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowUpdated = value;
		}
	}

	/** Describes the selection settings.
	*	Property type: {(index: number, data: any, row: GridRow[]): void}
	*/
	get onRowClass(): {(index: number, data: any, row: GridRow[]): void}  {
		return this.nativeElement ? this.nativeElement.onRowClass : undefined;
	}
	set onRowClass(value: {(index: number, data: any, row: GridRow[]): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowClass = value;
		}
	}

	/** Describes sorting settings.
	*	Property type: {(index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void}
	*/
	get onCellClass(): {(index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void}  {
		return this.nativeElement ? this.nativeElement.onCellClass : undefined;
	}
	set onCellClass(value: {(index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void}) {
		if (this.nativeElement) {
			this.nativeElement.onCellClass = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, column: GridColumn): void}
	*/
	get onColumnInit(): {(index: number, column: GridColumn): void}  {
		return this.nativeElement ? this.nativeElement.onColumnInit : undefined;
	}
	set onColumnInit(value: {(index: number, column: GridColumn): void}) {
		if (this.nativeElement) {
			this.nativeElement.onColumnInit = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, column: GridColumn): void}
	*/
	get onColumnInserted(): {(index: number, column: GridColumn): void}  {
		return this.nativeElement ? this.nativeElement.onColumnInserted : undefined;
	}
	set onColumnInserted(value: {(index: number, column: GridColumn): void}) {
		if (this.nativeElement) {
			this.nativeElement.onColumnInserted = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, column: GridColumn): void}
	*/
	get onColumnRemoved(): {(index: number, column: GridColumn): void}  {
		return this.nativeElement ? this.nativeElement.onColumnRemoved : undefined;
	}
	set onColumnRemoved(value: {(index: number, column: GridColumn): void}) {
		if (this.nativeElement) {
			this.nativeElement.onColumnRemoved = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, column: GridColumn): void}
	*/
	get onColumnUpdated(): {(index: number, column: GridColumn): void}  {
		return this.nativeElement ? this.nativeElement.onColumnUpdated : undefined;
	}
	set onColumnUpdated(value: {(index: number, column: GridColumn): void}) {
		if (this.nativeElement) {
			this.nativeElement.onColumnUpdated = value;
		}
	}

	/** undefined
	*	Property type: {(dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void}
	*/
	get onColumnClone(): {(dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void}  {
		return this.nativeElement ? this.nativeElement.onColumnClone : undefined;
	}
	set onColumnClone(value: {(dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void}) {
		if (this.nativeElement) {
			this.nativeElement.onColumnClone = value;
		}
	}

	/** undefined
	*	Property type: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}
	*/
	get onCommand(): {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}  {
		return this.nativeElement ? this.nativeElement.onCommand : undefined;
	}
	set onCommand(value: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}) {
		if (this.nativeElement) {
			this.nativeElement.onCommand = value;
		}
	}

	/** undefined
	*	Property type: any
	*/
	get rowCSSRules(): any  {
		return this.nativeElement ? this.nativeElement.rowCSSRules : undefined;
	}
	set rowCSSRules(value: any) {
		if (this.nativeElement) {
			this.nativeElement.rowCSSRules = value;
		}
	}

	/** undefined
	*	Property type: string | number
	*/
	get currentUser(): string | number  {
		return this.nativeElement ? this.nativeElement.currentUser : undefined;
	}
	set currentUser(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.currentUser = value;
		}
	}

	/** undefined
	*	Property type: any[]
	*/
	get users(): any[]  {
		return this.nativeElement ? this.nativeElement.users : undefined;
	}
	set users(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.users = value;
		}
	}

	/** undefined
	*	Property type: GridUploadSettings
	*/
	get uploadSettings(): GridUploadSettings  {
		return this.nativeElement ? this.nativeElement.uploadSettings : undefined;
	}
	set uploadSettings(value: GridUploadSettings) {
		if (this.nativeElement) {
			this.nativeElement.uploadSettings = value;
		}
	}

	/** undefined
	*	Property type: GridPaging
	*/
	get paging(): GridPaging  {
		return this.nativeElement ? this.nativeElement.paging : undefined;
	}
	set paging(value: GridPaging) {
		if (this.nativeElement) {
			this.nativeElement.paging = value;
		}
	}

	/** undefined
	*	Property type: GridPager
	*/
	get pager(): GridPager  {
		return this.nativeElement ? this.nativeElement.pager : undefined;
	}
	set pager(value: GridPager) {
		if (this.nativeElement) {
			this.nativeElement.pager = value;
		}
	}

	/** undefined
	*	Property type: GridRowDetail
	*/
	get rowDetail(): GridRowDetail  {
		return this.nativeElement ? this.nativeElement.rowDetail : undefined;
	}
	set rowDetail(value: GridRowDetail) {
		if (this.nativeElement) {
			this.nativeElement.rowDetail = value;
		}
	}

	/** undefined
	*	Property type: Scrolling | string
	*/
	get scrolling(): Scrolling | string  {
		return this.nativeElement ? this.nativeElement.scrolling : undefined;
	}
	set scrolling(value: Scrolling | string) {
		if (this.nativeElement) {
			this.nativeElement.scrolling = value;
		}
	}

	/** undefined
	*	Property type: GridColumnHeader
	*/
	get columnHeader(): GridColumnHeader  {
		return this.nativeElement ? this.nativeElement.columnHeader : undefined;
	}
	set columnHeader(value: GridColumnHeader) {
		if (this.nativeElement) {
			this.nativeElement.columnHeader = value;
		}
	}

	/** undefined
	*	Property type: GridSummaryRow
	*/
	get summaryRow(): GridSummaryRow  {
		return this.nativeElement ? this.nativeElement.summaryRow : undefined;
	}
	set summaryRow(value: GridSummaryRow) {
		if (this.nativeElement) {
			this.nativeElement.summaryRow = value;
		}
	}

	/** undefined
	*	Property type: GridStateSettings
	*/
	get stateSettings(): GridStateSettings  {
		return this.nativeElement ? this.nativeElement.stateSettings : undefined;
	}
	set stateSettings(value: GridStateSettings) {
		if (this.nativeElement) {
			this.nativeElement.stateSettings = value;
		}
	}

	/** undefined
	*	Property type: GridGroupHeader
	*/
	get groupHeader(): GridGroupHeader  {
		return this.nativeElement ? this.nativeElement.groupHeader : undefined;
	}
	set groupHeader(value: GridGroupHeader) {
		if (this.nativeElement) {
			this.nativeElement.groupHeader = value;
		}
	}

	/** undefined
	*	Property type: GridHeader
	*/
	get header(): GridHeader  {
		return this.nativeElement ? this.nativeElement.header : undefined;
	}
	set header(value: GridHeader) {
		if (this.nativeElement) {
			this.nativeElement.header = value;
		}
	}

	/** undefined
	*	Property type: GridFooter
	*/
	get footer(): GridFooter  {
		return this.nativeElement ? this.nativeElement.footer : undefined;
	}
	set footer(value: GridFooter) {
		if (this.nativeElement) {
			this.nativeElement.footer = value;
		}
	}

	/** undefined
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

	/** undefined
	*	Property type: GridRow[]
	*/
	get rows(): GridRow[]  {
		return this.nativeElement ? this.nativeElement.rows : undefined;
	}
	set rows(value: GridRow[]) {
		if (this.nativeElement) {
			this.nativeElement.rows = value;
		}
	}

	/** undefined
	*	Property type: GridSelection
	*/
	get selection(): GridSelection  {
		return this.nativeElement ? this.nativeElement.selection : undefined;
	}
	set selection(value: GridSelection) {
		if (this.nativeElement) {
			this.nativeElement.selection = value;
		}
	}

	/** undefined
	*	Property type: GridSorting
	*/
	get sorting(): GridSorting  {
		return this.nativeElement ? this.nativeElement.sorting : undefined;
	}
	set sorting(value: GridSorting) {
		if (this.nativeElement) {
			this.nativeElement.sorting = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["appearance","behavior","layout","locale","clipboard","columns","contextMenu","columnMenu","columnGroups","conditionalFormatting","charting","checkBoxes","dataExport","dataSource","dataSourceSettings","editing","filtering","grouping","messages","onCellValue","onCellUpdate","onCellRender","onBeforeInit","onInit","onAfterInit","onChartInit","onRender","onLoad","onKey","onRowInit","onRowDetailInit","onRowDetailUpdated","onRowHistory","onRowStyle","onRowInserted","onRowRemoved","onRowUpdate","onRowUpdated","onRowClass","onCellClass","onColumnInit","onColumnInserted","onColumnRemoved","onColumnUpdated","onColumnClone","onCommand","rowCSSRules","currentUser","users","uploadSettings","paging","pager","rowDetail","scrolling","columnHeader","summaryRow","stateSettings","groupHeader","header","footer","rightToLeft","rows","selection","sorting"];
	}
	/**  This event is triggered, when the edit begins. After the event occurs, editing starts. If you need to prevent the editing for specific cells, rows or columns, you can call event.preventDefault();.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
	*   id - The edited row id.
	*   dataField - The edited column data field.
	*   row - The edited row.
	*   column - The edited column.
	*   cell - The edited cell.
	*   data - The edited row's data.
	*   value - The edited cell's value.
	*/
	onBeginEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the Grid's header toolbar is displayed and the 'OK' button of a header dropdown is clicked. For example, when you open the columns customize panel, reorder columns and click the 'OK' button.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type)
	*   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
	*/
	onBatchChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the Grid's header toolbar is displayed and the 'Cancel' button of a header dropdown is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type)
	*   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
	*/
	onBatchCancel?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends. 
	*  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
	*   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
	*   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user clicks on the header of a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
	*   column - The clicked column.
	*   dataField - The column's data field.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onColumnClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user double clicks on the header of a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
	*   column - The double-clicked column.
	*   dataField - The column's data field.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onColumnDoubleClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user resized a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	oldWidth, 	width)
	*   column - The resized column.
	*   dataField - The column's data field.
	*   oldWidth - The old width of the column.
	*   width - The new width of the column.
	*/
	onColumnResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user starts a column drag.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	originalEvent)
	*   column - The column.
	*   dataField - The column's data field.
	*   index - The column's index
	*   originalEvent - The origianl Event object.
	*/
	onColumnDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user drags a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	data, 	originalEvent)
	*   column - The column.
	*   dataField - The column's data field.
	*   index - The column's index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onColumnDragging?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user drops a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
	*   column - The column.
	*   dataField - The column's data field.
	*   index - The column's index
	*   newIndex - The column's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onColumnDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user reorders a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
	*   column - The column.
	*   dataField - The column's data field.
	*   index - The column's index
	*   newIndex - The column's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onColumnReorder?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user enters a comment in the row edit dialog.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
	*   id - The row's id.
	*   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
	*/
	onCommentAdd?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user removes a comment in the row edit dialog.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
	*   id - The row's id.
	*   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
	*/
	onCommentRemove?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user clicks on a context menu item.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	command)
	*   id - The row's id.
	*   dataField - The column's data field.
	*   command - Command function.
	*/
	onContextMenuItemClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user starts a row drag.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	originalEvent)
	*   row - The row.
	*   id - The row's id
	*   index - The row's index
	*   originalEvent - The origianl Event object.
	*/
	onRowDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user drags a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	data, 	originalEvent)
	*   row - The row.
	*   id - The row's id
	*   index - The row's index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onRowDragging?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user drags a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
	*   row - The row.
	*   id - The row's id
	*   index - The row's index
	*   newIndex - The row's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onRowDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user reorders a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
	*   row - The row.
	*   id - The row's id
	*   index - The row's index
	*   newIndex - The row's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onRowReorder?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
	*   row - The expanded row.
	*   id - The row's id
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onRowExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
	*   row - The collapsed row. 
	*   id - The row's id
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onRowCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user clicks on a row of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
	*   row - The clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   isRightClick - Gets whether the pointing device's right button is clicked.
	*   pageX - Gets the click's X position.
	*   pageY - Gets the click's Y position.
	*/
	onRowClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user double clicks on a row of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
	*   row - The double-clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   isRightClick - Gets whether the pointing device's right button is clicked.
	*   pageX - Gets the click's X position.
	*   pageY - Gets the click's Y position.
	*/
	onRowDoubleClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user resized a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	oldHeight, 	height)
	*   row - The resized row.
	*   id - Gets the row id.
	*   oldHeight - The old height of the row.
	*   height - The new height of the row.
	*/
	onRowResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user clicks on the row header's star.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	value)
	*   row - The clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   value - Gets whether the row is starred or not.
	*/
	onRowStarred?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user clicks on a cell of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
	*   cell - The clicked cell.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   dataField - Gets the column dataField.
	*   isRightClick - Gets whether the pointing device's right button is clicked.
	*   pageX - Gets the click's X position.
	*   pageY - Gets the click's Y position.
	*/
	onCellClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user double clicks on a cell of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
	*   cell - The double-clicked cell. 
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*   id - Gets the row id.
	*   dataField - Gets the column dataField.
	*   isRightClick - Gets whether the pointing device's right button is clicked.
	*   pageX - Gets the click's X position.
	*   pageY - Gets the click's Y position.
	*/
	onCellDoubleClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the edit ends.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
	*   id - The edited row id.
	*   dataField - The edited column data field.
	*   row - The edited row.
	*   column - The edited column.
	*   cell - The edited cell.
	*   data - The edited row's data.
	*   value - The edited cell's value.
	*/
	onEndEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when a filter is added or removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	expressions)
	*   columns - Array of columns.
	*   data - Array of {dataField: string, filter: object}. <em>dataField</em> is the column's data field. <em>filter</em> is a FilterGroup object.
	*   expressions - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'. In each array item, you will have an object with column's name and filter string. Example: [['firstName', 'contains Andrew or contains Nancy'], ['quantity', '&lt;= 3 and &gt;= 8']], [['firstName', 'EQUAL' 'Andrew' or 'EQUAL' 'Antoni' or 'EQUAL' 'Beate']], [['lastName','CONTAINS' 'burke' or 'CONTAINS' 'peterson']]. Filter conditions used in the filter expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the rows grouping is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	groups)
	*   groups - Array of column data fields.
	*/
	onGroup?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the add new column dialog is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
	*   dataField - The column data field.
	*/
	onOpenColumnDialog?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the add new column dialog is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
	*   dataField - The column data field.
	*/
	onCloseColumnDialog?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the grid is resized.
	*  @param event. The custom event. 	*/
	onResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user touches and holds on the row for at least 300ms.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The tapped row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onRowTap?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user touches and holds on the cell for at least 300ms.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
	*   cell - The tapped row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onCellTap?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user changes the pages.
	*  @param event. The custom event. 	*/
	onPage?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when a sorting column is added or removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	sortDataFields, 	sortDataTypes, 	sortOrders, 	sortIndexes)
	*   columns - Array of columns.
	*   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
	*   sortDataFields - Array of column data fields.
	*   sortDataTypes - Array of column data types. The values in the array would be 'string', 'date', 'boolean' or 'number'.
	*   sortOrders - Array of column orders. The values in the array would be 'asc' or 'desc'.
	*   sortIndexes - Array of column sort indexes. When multiple sorting is applied the sort index is an important parameter as it specifies the priority of sorting.
	*/
	onSort?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user reaches the bottom of the grid.
	*  @param event. The custom event. 	*/
	onScrollBottomReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user reaches the top of the grid.
	*  @param event. The custom event. 	*/
	onScrollTopReached?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onBeginEdit","onBatchChange","onBatchCancel","onChange","onColumnClick","onColumnDoubleClick","onColumnResize","onColumnDragStart","onColumnDragging","onColumnDragEnd","onColumnReorder","onCommentAdd","onCommentRemove","onContextMenuItemClick","onRowDragStart","onRowDragging","onRowDragEnd","onRowReorder","onRowExpand","onRowCollapse","onRowClick","onRowDoubleClick","onRowResize","onRowStarred","onCellClick","onCellDoubleClick","onEndEdit","onFilter","onGroup","onOpenColumnDialog","onCloseColumnDialog","onResize","onRowTap","onCellTap","onPage","onSort","onScrollBottomReached","onScrollTopReached","onCreate","onReady"];
	}
	/** Adds a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
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

	/** Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved. 
	* @param {string} position?. 'near' or 'far'
	* @returns {boolean}
  */
	public addNewRow(position?:string) : any {
        const result: any = this.nativeElement.addNewRow(position);
        return result;
    }

	/** Adds a new column. 
	* @param {any} column. A Grid column object. See 'columns' property.
	* @returns {boolean}
  */
	public addNewColumn(column:any) : any {
        const result: any = this.nativeElement.addNewColumn(column);
        return result;
    }

	/** Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited. 
	* @param {number} count. The count of unbound rows.
	* @param {string} position?. 'near' or 'far'
	* @returns {boolean}
  */
	public addUnboundRow(count:number, position?:string) : any {
        const result: any = this.nativeElement.addUnboundRow(count, position);
        return result;
    }

	/** Adds a filter to a column. This method will apply a filter to the Grid data. Example for adding multiple filters to a column: grid.addFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"']). Example for adding single filter to a column: grid.addFilter('lastName', 'CONTAINS "burke"'). Example for adding numeric filter:  grid.addFilter('quantity', '&lt;= 5') 
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

	/** Groups the Grid by a data field. This method will add a group to the Grid when grouping is enabled. 
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

	/** Sorts the Grid by a data field. This method will add a sorting to the Grid when sorting is enabled. 
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

	/** Auto-sizes grid rows. This method will update the height of all Grid rows. 
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

	/** Auto-sizes grid columns. This method will update the width of all Grid columns. 
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

	/** Auto-sizes grid column. This method will update the width of a Grid column by measuring the cells and column header label width. 
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

	/** This method returns true, if all rows in the Grid are selected. 
	* @returns {boolean}
  */
	public areAllRowsSelected() : any {
        const result: any = this.nativeElement.areAllRowsSelected();
        return result;
    }

	/** Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once. 
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

	/** Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid. 
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

	/** Clears all filters. Refreshes the view and updates all filter input components. 
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

	/** Clears all data groups. Refreshes the view and updates the DataGrid component. 
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

	/** Clears all sorting. Refreshes the view and updates the DataGrid component. 
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

	/** Clears the selection that user have made. All row, cell and column selection highlights will be removed. 
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

	/** Cancels the editing. This method closes the cell editor and cancels the changes. 
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

	/** Checks a TreeGrid row. This method updates the row's check-box. 
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

	/** Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows. 
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

	/** Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view. 
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

	/** Closes the column drop-down menu. 
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

	/** Collapses a TreeGrid or Grouping row. 
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

	/** Collapses all TreeGrid or Grouping rows. 
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

	/** Creates a Chart, when charting is enabled. 
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

	/** Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
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

	/** Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @returns {boolean}
  */
	public ensureVisible(rowId:string | number, dataField?:string) : any {
        const result: any = this.nativeElement.ensureVisible(rowId, dataField);
        return result;
    }

	/** Ends the editing. This method confirms all changes and closes the opened cell editor(s). 
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

	/** Ends the update operation. This method will resume the rendering and will refresh the Grid. 
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

	/** Expands a TreeGrid or Grouping row. For example, if you want to expand the first group, then its second sub grup, then the first sub sub group, you can use: grid.expandRow('0.1.0'); 
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

	/** Expands rows to a given group level. For example 'grid.expandRowsToGroupLevel(1);' means that all groups at the root level will be expanded. 
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

	/** Expands all TreeGrid or Grouping rows. 
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

	/** Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property. 
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

	/** Finds entries by using a query and returns an array of row ids. Example: const rows = grid.find('nancy'); returns all rows that have 'nancy' value. Example 2: const rows = grid.find('nancy, davolio'); returns all rows that have 'nancy' and 'davolio' values in the same row. Example 3: const rows = grid.find(5, 'quantity', '>'); returns all rows where the value of the 'quantity' field is > 5.  
	* @param {string} query. Search query
	* @param {string} dataField?. Column data field.
	* @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	* @returns {any[]}
  */
	public find(query:string, dataField?:string, condition?:string) : any {
        const result: any = this.nativeElement.find(query, dataField, condition);
        return result;
    }

	/** Finds entries by using a query and returns an array of cells. Each cell in the array is also an array in this format: [id, dataField, value]. Example: const cells = grid.findCells('nancy'); returns all cells that have 'nancy' value. Example 2: const cells = grid.findCells('nancy, davolio'); returns all cells that have 'nancy' and 'davolio' values. 
	* @param {string} query. Search query. You can enter multiple search strings, by using ','. Example: 'nancy, davolio'
	* @returns {any[]}
  */
	public findCells(query:string) : any {
        const result: any = this.nativeElement.findCells(query);
        return result;
    }

	/** Navigates to a page, when paging is enabled. 
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

	/** Navigates to the next page, when grid paging is enabled. 
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

	/** Navigates to the prev page, when grid paging is enabled. 
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

	/** Navigates to the first page, when grid paging is enabled. 
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

	/** Navigates to the last page, when grid paging is enabled. 
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

	/** Focuses and selects a cell or row. The keyboard navigation starts from the focused cell or row. Any previously applied selection will be cleared after calling this method. 
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

	/** Iterates through each row in the grid and calls the callback for each row. This is similar to the forEach method on a JavaScript array. This is called for each row, ignoring grouping, filtering or sorting applied in the Grid. 
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

	/** Similar to forEachRow. Iterates through each row in the grid and calls the callback for each row. This method takes into account filtering and sorting applied to the Grid. 
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

	/** Gets the maximum position of the vertical scrollbar. You can use this method in combination with the setVerticalScrollValue to apply a new scroll position. 
	* @returns {number}
  */
	public getVerticalScrollMax() : any {
        const result: any = this.nativeElement.getVerticalScrollMax();
        return result;
    }

	/** Gets the position of the vertical scrollbar. 
	* @returns {number}
  */
	public getVerticalScrollValue() : any {
        const result: any = this.nativeElement.getVerticalScrollValue();
        return result;
    }

	/** Gets the maximum position of the horizontal scrollbar. You can use this method in combination with the setHorizontalScrollValue to apply a new scroll position. 
	* @returns {number}
  */
	public getHorizontalScrollMax() : any {
        const result: any = this.nativeElement.getHorizontalScrollMax();
        return result;
    }

	/** Gets the position of the horizontal scrollbar. 
	* @returns {number}
  */
	public getHorizontalScrollValue() : any {
        const result: any = this.nativeElement.getHorizontalScrollValue();
        return result;
    }

	/** Gets the columns array. Each item in the array contains the column properties which are dynamically set by the user interaction and the columns initialization data properties such as: 'label', 'dataField', 'dataType', 'visible'. 
	* @returns {any}
  */
	public getColumns() : any {
        const result: any = this.nativeElement.getColumns();
        return result;
    }

	/** Gets the editing cell(s), when the grid is editing. 
	* @returns {any[]}
  */
	public getEditCells() : any {
        const result: any = this.nativeElement.getEditCells();
        return result;
    }

	/** Gets the groups array. 
	* @returns {any[]}
  */
	public getGroups() : any {
        const result: any = this.nativeElement.getGroups();
        return result;
    }

	/** Gets an array of columns with applied sorting. Each member in the array is with column's data field used as a key and 'sortOrder' and 'sortIndex' as a value. 
	* @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
	public getSortedColumns() : any {
        const result: any = this.nativeElement.getSortedColumns();
        return result;
    }

	/** Gets the selection. 
	* @returns {any}
  */
	public getSelection() : any {
        const result: any = this.nativeElement.getSelection();
        return result;
    }

	/** Gets an Array where each item is an Array of row id and row data. If the Grid is used in virtual mode, the row data parameter is empty object, because the data is loaded on demand. 
	* @returns {any[]}
  */
	public getSelectedRows() : any {
        const result: any = this.nativeElement.getSelectedRows();
        return result;
    }

	/** Gets the selected row ids. 
	* @returns {any[]}
  */
	public getSelectedRowIds() : any {
        const result: any = this.nativeElement.getSelectedRowIds();
        return result;
    }

	/** Gets the selected row indexes. 
	* @returns {any[]}
  */
	public getSelectedRowIndexes() : any {
        const result: any = this.nativeElement.getSelectedRowIndexes();
        return result;
    }

	/** Gets the selected cells. The method returns an array of cell. Each cell is an array with row id, column data field and cell value. 
	* @returns {any[]}
  */
	public getSelectedCells() : any {
        const result: any = this.nativeElement.getSelectedCells();
        return result;
    }

	/** Gets an array of columns with applied filters. 
	* @returns {any}
  */
	public getFilteredColumns() : any {
        const result: any = this.nativeElement.getFilteredColumns();
        return result;
    }

	/** Gets an array of rows, which are visible and match the applied filter. 
	* @returns {any}
  */
	public getVisibleRows() : any {
        const result: any = this.nativeElement.getVisibleRows();
        return result;
    }

	/** Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode. 
	* @returns {any}
  */
	public getViewRows() : any {
        const result: any = this.nativeElement.getViewRows();
        return result;
    }

	/** Gets a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size. 
	* @returns {any}
  */
	public getState() : any {
        const result: any = this.nativeElement.getState();
        return result;
    }

	/** Saves the Grid state and returns a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size. 
	* @param {string} name?. state name
	* @returns {any}
  */
	public saveState(name?:string) : any {
        const result: any = this.nativeElement.saveState(name);
        return result;
    }

	/** Loads a previously saved Grid state. You can pass a state name when there is a state which was previously saved with the saveState(stateName) method call or a state object returned by the saveState or getState method calls. The state object is required to be a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size. 
	* @param {any} state. state name or state object
	* @returns {any}
  */
	public loadState(state:any) : any {
        const result: any = this.nativeElement.loadState(state);
        return result;
    }

	/** Resets the Grid state. 
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

	/** Gets the changes from the batch edit. 
	* @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
	public getBatchEditChanges() : any {
        const result: any = this.nativeElement.getBatchEditChanges();
        return result;
    }

	/** Gets a value of a cell. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @returns {any}
  */
	public getCellValue(rowId:string | number, dataField:string) : any {
        const result: any = this.nativeElement.getCellValue(rowId, dataField);
        return result;
    }

	/** Gets a column. Returns a Grid column object. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @returns {GridColumn}
  */
	public getColumn(dataField:string) : any {
        const result: any = this.nativeElement.getColumn(dataField);
        return result;
    }

	/** Gets a value of a column. 
	* @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	* @param {string} propertyName. The property name.
	* @returns {any}
  */
	public getColumnProperty(dataField:string, propertyName:string) : any {
        const result: any = this.nativeElement.getColumnProperty(dataField, propertyName);
        return result;
    }

	/** Gets a value of a row. 
	* @param {string | number} rowId. row bound id
	* @param {string} propertyName. The property name.
	* @returns {any}
  */
	public getRowProperty(rowId:string | number, propertyName:string) : any {
        const result: any = this.nativeElement.getRowProperty(rowId, propertyName);
        return result;
    }

	/** Gets a row. Returns a Grid row object. 
	* @param {string | number} rowId. row bound id
	* @returns {GridRow}
  */
	public getRow(rowId:string | number) : any {
        const result: any = this.nativeElement.getRow(rowId);
        return result;
    }

	/** Gets a row by its index. Returns a Grid row object. 
	* @param {number} rowIndex. row bound index
	* @returns {GridRow}
  */
	public getRowByIndex(rowIndex:number) : any {
        const result: any = this.nativeElement.getRowByIndex(rowIndex);
        return result;
    }

	/** Gets the Data source data associated to the row. 
	* @param {string | number} rowId. row bound id
	* @returns {any}
  */
	public getRowData(rowId:string | number) : any {
        const result: any = this.nativeElement.getRowData(rowId);
        return result;
    }

	/** Gets the Row's id by a row index. 
	* @param {number} rowIndex. row index
	* @returns {string | number}
  */
	public getRowId(rowIndex:number) : any {
        const result: any = this.nativeElement.getRowId(rowIndex);
        return result;
    }

	/** Gets whether a column's drop-down menu is opened. 
	* @returns {boolean}
  */
	public hasMenu() : any {
        const result: any = this.nativeElement.hasMenu();
        return result;
    }

	/** This method returns true, if any rows in the Grid are selected. 
	* @returns {boolean}
  */
	public hasSelectedRows() : any {
        const result: any = this.nativeElement.hasSelectedRows();
        return result;
    }

	/** Hides the Details of a Row, when row details are enabled. 
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

	/** Highlights a column. Highlights a Grid column. 
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

	/** Highlights a cell. Calling the method a second time toggle the highlight state. 
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

	/** Highlights a row. Calling the method a second time toggle the highlight state. 
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

	/** Inserts a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
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

	/** Opens a column drop-down menu. 
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

	/** Opens a context menu. Note that context menu should be enabled. 
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

	/** Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property. 
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

	/** Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout. 
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

	/** Refreshes the grid with the current property values. This method will refresh the Grid layout. 
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

	/** Refreshes the grid cells in view. The method is useful for live-updates of cell values. 
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

	/** Removes a column filter.  
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

	/** Removes a group by data field. This method will remove a group to the Grid when grouping is enabled. 
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

	/** Removes a sorting by data field. This method will remove a sorting from a Grid column. 
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

	/** Re-sorts the Grid by using the already applied column sortings and re-renders the Grid. 
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

	/** Reverts the batch edit changes. This method cancels all changes made by the end-user. 
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

	/** Reorders two DataGrid columns. 
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

	/** Sorts the Grid by a data field. This method will add or remove sorting, when sorting is enabled. To remove the sorting, use 'null' for the sortOrder parameter. 
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

	/** Swaps two DataGrid columns. 
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

	/** Saves the batch edit changes. This method confirms the editing changes made by the end-user. 
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

	/** Selects a row, cell or column. 
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

	/** Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid. 
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

	/** Selects a range of rows. 
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

	/** Selects multiple rows by their ids. 
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

	/** Selects all rows. 
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

	/** Selects multiple rows by their index. 
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

	/** Selects rows by using a query. Example: grid.selectRowsByQuery('nancy'); selects all rows that have 'nancy' value. Example 2: grid.selectRowsByQuery('nancy, davolio'); selects all rows that have 'nancy' and 'davolio' values in the same row. Example 3: grid.selectRowsByQuery(5, 'quantity', '>'); selects all rows where the value of the 'quantity' field is > 5.  
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

	/** Selects multiple cells by their ids and dataFields. Example: grid.selectCells([0, 1, 2], ['firstName', 'quantity', 'date']); - selects the 'firstName', 'quantity' and 'date' cells from the first, second and third rows. 
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

	/** Selects cells by using a query. Example: grid.selectCellsByQuery('nancy'); selects all cells that have 'nancy' value. Example 2: grid.selectCellsByQuery('nancy, davolio'); selects all cells that have 'nancy' and 'davolio' values in the same row.  
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

	/** Sets a new value to a cell. 
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

	/** Sets new columns to the Grid. The grid will redraw all the column headers, and then redraw all of the rows. By using 'setColumns', the grid will compare the new columns passed as argument to the method with existing columns. The Grid will automatically create new columns, keep old columns if they already exist and remove columns which are not in the 'setColumns' method argument. The benefit of that is that the state of the column like(sort, filter, width or other) will be kept, if the column exsits after the new columns are applied. 
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

	/** Sets a property to a column. 
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

	/** Sets a property to a row. 
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

	/** Sets a style to a row. 
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

	/** Sets a style to a row. 
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

	/** Sets the position of the vertical scrollbar. You can use this method in combination with the getVerticalScrollValue and getVerticalScrollMax. 
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

	/** Sets the position of the horizontal scrollbar. You can use this method in combination with the getHorizontalScrollValue and getHorizontalScrollMax. 
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

	/** Shows the Details of a Row, when row details are enabled. 
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

	/** Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
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

	/** Unselects a row, cell or column. 
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

	/** Unchecks a TreeGrid row. Sets its check-box to false. 
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

	/** Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false. 
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
			React.createElement("smart-grid", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Grid;
