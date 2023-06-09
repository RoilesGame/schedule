import React from "react";
import { KanbanProperties } from "./../../index";
import { KanbanAddNewButtonDisplayMode, KanbanColumnOrientation, KanbanColumnEditMode, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanTaskSubTasks, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanPriority, KanbanUser} from './../../index';
import { DataAdapter } from './../../index';
export { KanbanProperties } from "./../../index";
export { KanbanAddNewButtonDisplayMode, KanbanColumnOrientation, KanbanColumnEditMode, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanTaskSubTasks, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanPriority, KanbanUser} from './../../index';
export { DataAdapter } from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface KanbanProps extends KanbanProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onColumnAdd?: ((event?: Event) => void) | undefined;
	onColumnRemove?: ((event?: Event) => void) | undefined;
	onColumnReorder?: ((event?: Event) => void) | undefined;
	onColumnUpdate?: ((event?: Event) => void) | undefined;
	onColumnClick?: ((event?: Event) => void) | undefined;
	onColumnDoubleClick?: ((event?: Event) => void) | undefined;
	onColumnShow?: ((event?: Event) => void) | undefined;
	onColumnHide?: ((event?: Event) => void) | undefined;
	onColumnCollapse?: ((event?: Event) => void) | undefined;
	onColumnExpand?: ((event?: Event) => void) | undefined;
	onCommentAdd?: ((event?: Event) => void) | undefined;
	onCommentRemove?: ((event?: Event) => void) | undefined;
	onCommentUpdate?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onDragging?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onFilter?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onSort?: ((event?: Event) => void) | undefined;
	onTaskBeforeAdd?: ((event?: Event) => void) | undefined;
	onTaskAdd?: ((event?: Event) => void) | undefined;
	onTaskRemove?: ((event?: Event) => void) | undefined;
	onTaskUpdate?: ((event?: Event) => void) | undefined;
	onTaskClick?: ((event?: Event) => void) | undefined;
	onTaskDoubleClick?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Kanban represents a kanban board that visually depicts work at various stages of a process using cards to represent tasks and columns to represent each stage of the process.
*/
export class Kanban extends React.Component<React.HTMLAttributes<Element> & KanbanProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Kanban' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Enables or disables column reordering. When this property is set to true and allowDrag is enabled, users will be able to reoder columns through drag & drop. For example: Click and drag the first column's header and drop it over another column.
	*	Property type: boolean
	*/
	get allowColumnReorder(): boolean  {
		return this.nativeElement ? this.nativeElement.allowColumnReorder : undefined;
	}
	set allowColumnReorder(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowColumnReorder = value;
		}
	}

	/** Enables or disables column editing. When this property is set to true, users will be able to dynamically change the column's header label by double clicking on it.
	*	Property type: boolean
	*/
	get allowColumnEdit(): boolean  {
		return this.nativeElement ? this.nativeElement.allowColumnEdit : undefined;
	}
	set allowColumnEdit(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowColumnEdit = value;
		}
	}

	/** Enables or disables column removing. When this property is set to true, users will be able to dynamically remove a column through the column actions menu. the 'columnActions' property should be true.
	*	Property type: boolean
	*/
	get allowColumnRemove(): boolean  {
		return this.nativeElement ? this.nativeElement.allowColumnRemove : undefined;
	}
	set allowColumnRemove(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowColumnRemove = value;
		}
	}

	/** Enables or disables column hiding. When this property is set to true, users will be able to dynamically hide a column through the column actions menu. the 'columnActions' property should be true.
	*	Property type: boolean
	*/
	get allowColumnHide(): boolean  {
		return this.nativeElement ? this.nativeElement.allowColumnHide : undefined;
	}
	set allowColumnHide(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowColumnHide = value;
		}
	}

	/** Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false.
	*	Property type: boolean
	*/
	get addNewButton(): boolean  {
		return this.nativeElement ? this.nativeElement.addNewButton : undefined;
	}
	set addNewButton(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.addNewButton = value;
		}
	}

	/** Determines whether the add button is visible in the column header and/or after the tasks in the column.
	*	Property type: KanbanAddNewButtonDisplayMode | string
	*/
	get addNewButtonDisplayMode(): KanbanAddNewButtonDisplayMode | string  {
		return this.nativeElement ? this.nativeElement.addNewButtonDisplayMode : undefined;
	}
	set addNewButtonDisplayMode(value: KanbanAddNewButtonDisplayMode | string) {
		if (this.nativeElement) {
			this.nativeElement.addNewButtonDisplayMode = value;
		}
	}

	/** Sets or gets whether a column with a button for adding new status columns to the Kanban will be displayed.
	*	Property type: boolean
	*/
	get addNewColumn(): boolean  {
		return this.nativeElement ? this.nativeElement.addNewColumn : undefined;
	}
	set addNewColumn(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.addNewColumn = value;
		}
	}

	/** Sets the width of the add new column. The property is used, if the 'columnWidth' property is set, too. It specifies the width of the dynamic new column.
	*	Property type: number | null
	*/
	get addNewColumnWidth(): number | null  {
		return this.nativeElement ? this.nativeElement.addNewColumnWidth : undefined;
	}
	set addNewColumnWidth(value: number | null) {
		if (this.nativeElement) {
			this.nativeElement.addNewColumnWidth = value;
		}
	}

	/** Allows the dragging of tasks.
	*	Property type: boolean
	*/
	get allowDrag(): boolean  {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowDrag = value;
		}
	}

	/** Allows the dropping of tasks.
	*	Property type: boolean
	*/
	get allowDrop(): boolean  {
		return this.nativeElement ? this.nativeElement.allowDrop : undefined;
	}
	set allowDrop(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowDrop = value;
		}
	}

	/** This property changes the visual appeal of the Kanban columns and tasks. When set to true and the Kanban columns have their 'color' property set, the color is also applied to the tasks and edit dialog.
	*	Property type: boolean
	*/
	get applyColumnColorToTasks(): boolean  {
		return this.nativeElement ? this.nativeElement.applyColumnColorToTasks : undefined;
	}
	set applyColumnColorToTasks(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.applyColumnColorToTasks = value;
		}
	}

	/** Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded.
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

	/** Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved.
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

	/** Automatically updates the columns height depending on the tasks inside the column. The effect of this property is observed when 'columnColorEntireSurface' is true.
	*	Property type: boolean
	*/
	get autoColumnHeight(): boolean  {
		return this.nativeElement ? this.nativeElement.autoColumnHeight : undefined;
	}
	set autoColumnHeight(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoColumnHeight = value;
		}
	}

	/** Allows collapsing the card content.
	*	Property type: boolean
	*/
	get collapsible(): boolean  {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.collapsible = value;
		}
	}

	/** Displays colors in the column header, when the column's color property is set.
	*	Property type: boolean
	*/
	get columnColors(): boolean  {
		return this.nativeElement ? this.nativeElement.columnColors : undefined;
	}
	set columnColors(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnColors = value;
		}
	}

	/** Sets the Kanban columns width. When this property is set, the kanban columns width is set and a horizontal scrollbar may appear.
	*	Property type: number | null
	*/
	get columnWidth(): number | null  {
		return this.nativeElement ? this.nativeElement.columnWidth : undefined;
	}
	set columnWidth(value: number | null) {
		if (this.nativeElement) {
			this.nativeElement.columnWidth = value;
		}
	}

	/** Displays background in the Kanban column.
	*	Property type: boolean
	*/
	get columnColorEntireSurface(): boolean  {
		return this.nativeElement ? this.nativeElement.columnColorEntireSurface : undefined;
	}
	set columnColorEntireSurface(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnColorEntireSurface = value;
		}
	}

	/** Displays a column footer which shows the summary of the column.
	*	Property type: boolean
	*/
	get columnFooter(): boolean  {
		return this.nativeElement ? this.nativeElement.columnFooter : undefined;
	}
	set columnFooter(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnFooter = value;
		}
	}

	/** Describes the columns properties.
	*	Property type: KanbanColumn[]
	*/
	get columns(): KanbanColumn[]  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: KanbanColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Toggles the visibility of the column actions icon.
	*	Property type: boolean
	*/
	get columnActions(): boolean  {
		return this.nativeElement ? this.nativeElement.columnActions : undefined;
	}
	set columnActions(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnActions = value;
		}
	}

	/** Determines whether task count information is displayed in column headers.
	*	Property type: boolean
	*/
	get columnSummary(): boolean  {
		return this.nativeElement ? this.nativeElement.columnSummary : undefined;
	}
	set columnSummary(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnSummary = value;
		}
	}

	/** Determines whether a column header has a template. You can pass 'string', 'function' or HTMLTemplateElement as a value.
	*	Property type: any
	*/
	get columnHeaderTemplate(): any  {
		return this.nativeElement ? this.nativeElement.columnHeaderTemplate : undefined;
	}
	set columnHeaderTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.columnHeaderTemplate = value;
		}
	}

	/** Determines the column edit behavior. With the 'header' option, edit starts on double click on the column's label. In 'menu' mode, edit is allowed from the 'columnActions' menu. In 'headerAndMenu' option, column editing includes both options.
	*	Property type: KanbanColumnEditMode | string
	*/
	get columnEditMode(): KanbanColumnEditMode | string  {
		return this.nativeElement ? this.nativeElement.columnEditMode : undefined;
	}
	set columnEditMode(value: KanbanColumnEditMode | string) {
		if (this.nativeElement) {
			this.nativeElement.columnEditMode = value;
		}
	}

	/** Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
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

	/** Sets or gets whether the default dialog for adding/removing tasks or comments is disabled.
	*	Property type: boolean
	*/
	get disableDialog(): boolean  {
		return this.nativeElement ? this.nativeElement.disableDialog : undefined;
	}
	set disableDialog(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableDialog = value;
		}
	}

	/** Sets or gets a customization function for the dialog. This function can be used to customize the dialog look or to replace it. The Kanban calls this function with 5 arguments - 'dialog', 'taskOrComment', 'editors', 'purpose' and 'type'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'purpose' could be 'add' or 'edit' and 'type' could be 'task' or 'column' depending on the action.
	*	Property type: any
	*/
	get dialogCustomizationFunction(): any  {
		return this.nativeElement ? this.nativeElement.dialogCustomizationFunction : undefined;
	}
	set dialogCustomizationFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dialogCustomizationFunction = value;
		}
	}

	/** Sets or gets a function called when the dialog is rendered. The Kanban calls this function with 6 arguments - 'dialog', 'editors', 'labels', 'tabs', 'layout', 'taskOrComment'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'editors', 'labels', 'tabs' and 'layout' are JSON objects with key which describes the element type and value which is HTML Element.
	*	Property type: any
	*/
	get dialogRendered(): any  {
		return this.nativeElement ? this.nativeElement.dialogRendered : undefined;
	}
	set dialogRendered(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dialogRendered = value;
		}
	}

	/** Determines the data source to be visualized in the kanban board.
	*	Property type: KanbanDataSource[]
	*/
	get dataSource(): KanbanDataSource[]  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: KanbanDataSource[]) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Determines the the relation (mapping) between the Kanban's default fields (keywords) and the data fields from the data source. Not necessary if both match. Only some of the default mapping can be overwritten.
	*	Property type: { checklist: string; color: string; comments: string; dueDate: string; id: string; priority: string; progress: string; startDate: string; status: string; swimlane: string; tags: string; text: string; userId: string; createdUserId: string; upDatedUserId: string; createdDate: Date; upDatedDate: Date;}
	*/
	get dataSourceMap(): { checklist: string; color: string; comments: string; dueDate: string; id: string; priority: string; progress: string; startDate: string; status: string; swimlane: string; tags: string; text: string; userId: string; createdUserId: string; upDatedUserId: string; createdDate: Date; upDatedDate: Date;}  {
		return this.nativeElement ? this.nativeElement.dataSourceMap : undefined;
	}
	set dataSourceMap(value: { checklist: string; color: string; comments: string; dueDate: string; id: string; priority: string; progress: string; startDate: string; status: string; swimlane: string; tags: string; text: string; userId: string; createdUserId: string; upDatedUserId: string; createdDate: Date; upDatedDate: Date;}) {
		if (this.nativeElement) {
			this.nativeElement.dataSourceMap = value;
		}
	}

	/** Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started.
	*	Property type: boolean
	*/
	get dragOffset(): boolean  {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.dragOffset = value;
		}
	}

	/** Sets or gets whether tasks can be edited (including the assigning of users to tasks).
	*	Property type: boolean
	*/
	get editable(): boolean  {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.editable = value;
		}
	}

	/** Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors.
	*	Property type: string
	*/
	get formatStringDate(): string  {
		return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
	}
	set formatStringDate(value: string) {
		if (this.nativeElement) {
			this.nativeElement.formatStringDate = value;
		}
	}

	/** Sets or gets the format string of comments time stamp.
	*	Property type: string
	*/
	get formatStringTime(): string  {
		return this.nativeElement ? this.nativeElement.formatStringTime : undefined;
	}
	set formatStringTime(value: string) {
		if (this.nativeElement) {
			this.nativeElement.formatStringTime = value;
		}
	}

	/** Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
	*	Property type: KanbanHeaderPosition | string
	*/
	get headerPosition(): KanbanHeaderPosition | string  {
		return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	}
	set headerPosition(value: KanbanHeaderPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.headerPosition = value;
		}
	}

	/** Sets or gets the way column hierarchy is represented.
	*	Property type: KanbanHierarchy | string
	*/
	get hierarchy(): KanbanHierarchy | string  {
		return this.nativeElement ? this.nativeElement.hierarchy : undefined;
	}
	set hierarchy(value: KanbanHierarchy | string) {
		if (this.nativeElement) {
			this.nativeElement.hierarchy = value;
		}
	}

	/** Sets or gets the locale. Used in conjunction with the property messages.
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

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
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

	/** Callback function which can be used for customizing the tasks rendering. The Kanban calls it with 2 arguments - task html element and task data.
	*	Property type: any
	*/
	get onTaskRender(): any  {
		return this.nativeElement ? this.nativeElement.onTaskRender : undefined;
	}
	set onTaskRender(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onTaskRender = value;
		}
	}

	/** Callback function which can be used for customizing the filter items. The function is called with 1 argument - Array of items which will be displayed in the filter drop down. You can modify that array to remove or update items to filter by.
	*	Property type: any
	*/
	get onFilterPrepare(): any  {
		return this.nativeElement ? this.nativeElement.onFilterPrepare : undefined;
	}
	set onFilterPrepare(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onFilterPrepare = value;
		}
	}

	/** Callback function which can be used for customizing the sort items. The function is called with 1 argument - Array of items which will be displayed in the sort drop down. You can modify that array to remove or update items to sort by.
	*	Property type: any
	*/
	get onSortPrepare(): any  {
		return this.nativeElement ? this.nativeElement.onSortPrepare : undefined;
	}
	set onSortPrepare(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onSortPrepare = value;
		}
	}

	/** Callback function which can be used for customizing the column header rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field.
	*	Property type: any
	*/
	get onColumnHeaderRender(): any  {
		return this.nativeElement ? this.nativeElement.onColumnHeaderRender : undefined;
	}
	set onColumnHeaderRender(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onColumnHeaderRender = value;
		}
	}

	/** Callback function which can be used for customizing the column footer rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field.
	*	Property type: any
	*/
	get onColumnFooterRender(): any  {
		return this.nativeElement ? this.nativeElement.onColumnFooterRender : undefined;
	}
	set onColumnFooterRender(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onColumnFooterRender = value;
		}
	}

	/** Determines selection mode.
	*	Property type: KanbanSelectionMode | string
	*/
	get selectionMode(): KanbanSelectionMode | string  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: KanbanSelectionMode | string) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Sets or gets whether the tasks history will be stored and displayed in the task dialog.
	*	Property type: boolean
	*/
	get storeHistory(): boolean  {
		return this.nativeElement ? this.nativeElement.storeHistory : undefined;
	}
	set storeHistory(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.storeHistory = value;
		}
	}

	/** Sets or gets the task history items that will be stored when storeHistory is enabled.
	*	Property type: number
	*/
	get storeHistoryItems(): number  {
		return this.nativeElement ? this.nativeElement.storeHistoryItems : undefined;
	}
	set storeHistoryItems(value: number) {
		if (this.nativeElement) {
			this.nativeElement.storeHistoryItems = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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

	/** Sets or gets whether the edit dialog is displayed in readonly mode. In that mode it shows only the task details, but the editing is disabled. However, if comments are enabled, you will be able to add comments in the dialog.
	*	Property type: boolean
	*/
	get readonly(): boolean  {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present.
	*	Property type: KanbanSwimlane[]
	*/
	get swimlanes(): KanbanSwimlane[]  {
		return this.nativeElement ? this.nativeElement.swimlanes : undefined;
	}
	set swimlanes(value: KanbanSwimlane[]) {
		if (this.nativeElement) {
			this.nativeElement.swimlanes = value;
		}
	}

	/** Sets or gets the index of the column at which to start the swimlanes.
	*	Property type: number
	*/
	get swimlanesFrom(): number  {
		return this.nativeElement ? this.nativeElement.swimlanesFrom : undefined;
	}
	set swimlanesFrom(value: number) {
		if (this.nativeElement) {
			this.nativeElement.swimlanesFrom = value;
		}
	}

	/** Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column.
	*	Property type: number
	*/
	get swimlanesTo(): number  {
		return this.nativeElement ? this.nativeElement.swimlanesTo : undefined;
	}
	set swimlanesTo(value: number) {
		if (this.nativeElement) {
			this.nativeElement.swimlanesTo = value;
		}
	}

	/** Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed.
	*	Property type: any[]
	*/
	get tags(): any[]  {
		return this.nativeElement ? this.nativeElement.tags : undefined;
	}
	set tags(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.tags = value;
		}
	}

	/** Toggles the visibility of the task actions icon.
	*	Property type: boolean
	*/
	get taskActions(): boolean  {
		return this.nativeElement ? this.nativeElement.taskActions : undefined;
	}
	set taskActions(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskActions = value;
		}
	}

	/** Represents a callback function which is called when the task actions menu is created. The task actions element is passed as parameter and allows you to customize the menu. Example: (list) => { list.innerHTML = 'Custom Item'; list.onclick = () => { alert('clicked'); }}
	*	Property type: any
	*/
	get taskActionsRendered(): any  {
		return this.nativeElement ? this.nativeElement.taskActionsRendered : undefined;
	}
	set taskActionsRendered(value: any) {
		if (this.nativeElement) {
			this.nativeElement.taskActionsRendered = value;
		}
	}

	/** Toggles the visibility of the task comments icon.
	*	Property type: boolean
	*/
	get taskComments(): boolean  {
		return this.nativeElement ? this.nativeElement.taskComments : undefined;
	}
	set taskComments(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskComments = value;
		}
	}

	/** Toggles the visibility of the task due icon.
	*	Property type: boolean
	*/
	get taskDue(): boolean  {
		return this.nativeElement ? this.nativeElement.taskDue : undefined;
	}
	set taskDue(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskDue = value;
		}
	}

	/** Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns.
	*	Property type: KanbanTaskPosition | string
	*/
	get taskPosition(): KanbanTaskPosition | string  {
		return this.nativeElement ? this.nativeElement.taskPosition : undefined;
	}
	set taskPosition(value: KanbanTaskPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.taskPosition = value;
		}
	}

	/** Toggles the visibility of the task priority icon (shown when priority is low or high).
	*	Property type: boolean
	*/
	get taskPriority(): boolean  {
		return this.nativeElement ? this.nativeElement.taskPriority : undefined;
	}
	set taskPriority(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskPriority = value;
		}
	}

	/** Toggles the visibility of task progress bar and the completed sub-tasks label.
	*	Property type: boolean
	*/
	get taskProgress(): boolean  {
		return this.nativeElement ? this.nativeElement.taskProgress : undefined;
	}
	set taskProgress(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskProgress = value;
		}
	}

	/** Sets the task custom fields displayed in the card. Each array item should have 'dataField', 'label' 'dataType' and optionally 'visible', 'image' and 'cover' properties. The 'dataField' determines the value, the label is displayed as title, 'dataType' is used for formatting and 'visible' determines whether the field will be displayed. If your string represents an image either URL or Base64, set image: true. If you want to display that image as a cover image, set cover:true, too.
	*	Property type: any
	*/
	get taskCustomFields(): any  {
		return this.nativeElement ? this.nativeElement.taskCustomFields : undefined;
	}
	set taskCustomFields(value: any) {
		if (this.nativeElement) {
			this.nativeElement.taskCustomFields = value;
		}
	}

	/** The task's background color depends on the task's color property. By default the color is rendered within the task's left border.
	*	Property type: boolean
	*/
	get taskColorEntireSurface(): boolean  {
		return this.nativeElement ? this.nativeElement.taskColorEntireSurface : undefined;
	}
	set taskColorEntireSurface(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskColorEntireSurface = value;
		}
	}

	/** Displays an input in the task's card for adding dynamically a sub task. The 'taskSubTasks' property should be set to a value different than 'none'.
	*	Property type: boolean
	*/
	get taskSubTasksInput(): boolean  {
		return this.nativeElement ? this.nativeElement.taskSubTasksInput : undefined;
	}
	set taskSubTasksInput(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskSubTasksInput = value;
		}
	}

	/** Sets the rendering mode of sub tasks. 'none' - default value. Sub tasks are displayed only in the edit dialog. 'onePerRow' - all sub tasks are displayed in the task's card. 'onlyUnfinished' - only tasks which are not completed are displayed in the task's card.
	*	Property type: KanbanTaskSubTasks | string
	*/
	get taskSubTasks(): KanbanTaskSubTasks | string  {
		return this.nativeElement ? this.nativeElement.taskSubTasks : undefined;
	}
	set taskSubTasks(value: KanbanTaskSubTasks | string) {
		if (this.nativeElement) {
			this.nativeElement.taskSubTasks = value;
		}
	}

	/** Toggles the visibility of task tags.
	*	Property type: boolean
	*/
	get taskTags(): boolean  {
		return this.nativeElement ? this.nativeElement.taskTags : undefined;
	}
	set taskTags(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskTags = value;
		}
	}

	/** Toggles the visibility of the task user icon.
	*	Property type: boolean
	*/
	get taskUserIcon(): boolean  {
		return this.nativeElement ? this.nativeElement.taskUserIcon : undefined;
	}
	set taskUserIcon(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskUserIcon = value;
		}
	}

	/** Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed.
	*	Property type: any
	*/
	get textTemplate(): any  {
		return this.nativeElement ? this.nativeElement.textTemplate : undefined;
	}
	set textTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.textTemplate = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
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

	/** Determines whether the priority list (as defined by the priority property) will be shown when clicking the priority icon. Only applicable if editable privileges are enabled.
	*	Property type: boolean
	*/
	get priorityList(): boolean  {
		return this.nativeElement ? this.nativeElement.priorityList : undefined;
	}
	set priorityList(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.priorityList = value;
		}
	}

	/** Determines the priority Kanban tasks can be assigned to. Example: [{label: 'low', value: 'low'}, {label: 'high', value: 'high'}]
	*	Property type: KanbanPriority[]
	*/
	get priority(): KanbanPriority[]  {
		return this.nativeElement ? this.nativeElement.priority : undefined;
	}
	set priority(value: KanbanPriority[]) {
		if (this.nativeElement) {
			this.nativeElement.priority = value;
		}
	}

	/** Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled.
	*	Property type: boolean
	*/
	get userList(): boolean  {
		return this.nativeElement ? this.nativeElement.userList : undefined;
	}
	set userList(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.userList = value;
		}
	}

	/** Determines the users Kanban tasks can be assigned to and their characteristics and privileges.
	*	Property type: KanbanUser[]
	*/
	get users(): KanbanUser[]  {
		return this.nativeElement ? this.nativeElement.users : undefined;
	}
	set users(value: KanbanUser[]) {
		if (this.nativeElement) {
			this.nativeElement.users = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["allowColumnReorder","allowColumnEdit","allowColumnRemove","allowColumnHide","addNewButton","addNewButtonDisplayMode","addNewColumn","addNewColumnWidth","allowDrag","allowDrop","applyColumnColorToTasks","autoLoadState","autoSaveState","autoColumnHeight","collapsible","columnColors","columnWidth","columnColorEntireSurface","columnFooter","columns","columnActions","columnSummary","columnHeaderTemplate","columnEditMode","currentUser","disableDialog","dialogCustomizationFunction","dialogRendered","dataSource","dataSourceMap","dragOffset","editable","formatStringDate","formatStringTime","headerPosition","hierarchy","locale","messages","onTaskRender","onFilterPrepare","onSortPrepare","onColumnHeaderRender","onColumnFooterRender","selectionMode","storeHistory","storeHistoryItems","rightToLeft","readonly","swimlanes","swimlanesFrom","swimlanesTo","tags","taskActions","taskActionsRendered","taskComments","taskDue","taskPosition","taskPriority","taskProgress","taskCustomFields","taskColorEntireSurface","taskSubTasksInput","taskSubTasks","taskTags","taskUserIcon","textTemplate","theme","priorityList","priority","userList","users"];
	}
	/**  This event is triggered when a task has been updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
	*   oldValue - The old data of the task
	*   task - The HTML element of the task whose data has been changed
	*   value - The new data of the task
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the edit/prompt dialog is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column is added.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
	*   label - The column label.
	*   dataField - The column data field.
	*   collapsed - The column's collapsed state.
	*/
	onColumnAdd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column is removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
	*   label - The column label.
	*   dataField - The column data field.
	*   collapsed - The column's collapsed state.
	*/
	onColumnRemove?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column is reordered.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldIndex, 	index, 	column)
	*   oldIndex - The column's old index.
	*   index - The column's new index.
	*   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
	*/
	onColumnReorder?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column is updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	column)
	*   oldValue - The column's old label.
	*   value - The column's new label.
	*   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
	*/
	onColumnUpdate?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column header is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
	*   label - The column label.
	*   dataField - The column data field.
	*   collapsed - The column's collapsed state.
	*/
	onColumnClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column header is double clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
	*   label - The column label.
	*   dataField - The column data field.
	*   collapsed - The column's collapsed state.
	*/
	onColumnDoubleClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column is shown by using the column's action menu or the Kanban's 'show' method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
	*   label - The column label.
	*   dataField - The column data field.
	*/
	onColumnShow?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column is hidden by using the column's action menu or the Kanban's 'hide' method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
	*   label - The column label.
	*   dataField - The column data field.
	*/
	onColumnHide?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column is collapsed  by using the column's action menu or the Kanban's 'collapse' method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
	*   label - The column label.
	*   dataField - The column data field.
	*/
	onColumnCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column is expanded by using the column's action menu or the Kanban's 'expand' method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
	*   label - The column label.
	*   dataField - The column data field.
	*/
	onColumnExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a comment is added to the Kanban Task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
	*   id - The task's id.
	*   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
	*/
	onCommentAdd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a comment is removed from the Kanban Task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
	*   id - The task's id.
	*   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
	*/
	onCommentRemove?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a comment is updated in the Kanban Task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
	*   id - The task's id.
	*   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
	*/
	onCommentUpdate?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a task is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
	*   container - the Kanban the dragged task(s) is dropped to
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the Kanban the dragged item(s) is dragged from
	*   target - the element the dragged tasks are dropped to
	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user is dragging a task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*/
	onDragging?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
	*   container - the Kanban the dragged task(s) is dragged from
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the Kanban the dragged item(s) is dragged from
	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a filter has been applied.
	*  @param event. The custom event. 	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the edit/prompt dialog is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. If you want to cancel the default Kanban dialog, call event.preventDefault();
	*  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
	*   comment - The comment that is about to be removed (if applicable).
	*   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
	*   task - The task that is about to be edited or removed (if applicable).
	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when sorting has been applied.
	*  @param event. The custom event. 	*/
	onSort?: ((event?: Event) => void) | undefined
	/**  This event is triggered before a new task is added. You can use the event.detail.value and event.detail.id to customize the new Task before adding it to the Kanban. Example: kanban.onTaskBeforeAdd = (event) => { const data = event.detail.value; const id = event.detail.id; event.detail.id = 'BG12';}
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data that is added to the Kanban.
	*   id - The task data id.
	*/
	onTaskBeforeAdd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a new task is added. Example: kanban.onTaskAdd = (event) => { const data = event.detail.value; const id = event.detail.id; }
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data that is added to the Kanban.
	*   id - The task data id.
	*/
	onTaskAdd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a task is removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data that is removed from the Kanban.
	*   id - The task data id.
	*/
	onTaskRemove?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a task is updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	id)
	*   value - The task data that is updated.
	*   oldValue - The update task's old data.
	*   id - The task data id.
	*/
	onTaskUpdate?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a task is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data.
	*   id - The task data id.
	*/
	onTaskClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a task is double clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data.
	*   id - The task data id.
	*/
	onTaskDoubleClick?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onClose","onClosing","onColumnAdd","onColumnRemove","onColumnReorder","onColumnUpdate","onColumnClick","onColumnDoubleClick","onColumnShow","onColumnHide","onColumnCollapse","onColumnExpand","onCommentAdd","onCommentRemove","onCommentUpdate","onDragEnd","onDragging","onDragStart","onFilter","onOpen","onOpening","onSort","onTaskBeforeAdd","onTaskAdd","onTaskRemove","onTaskUpdate","onTaskClick","onTaskDoubleClick","onCreate","onReady"];
	}
	/** Adds filtering. Example: const filterGroup = new Smart.FilterGroup(); const filterObject = filterGroup.createFilter('string', 'Italy', 'contains'); filterGroup.addFilter('and', filterObject); kanban.addFilter([['Country', filterGroup]]); 
	* @param {any} filters. Filter information. Example: kanban.addFilter([['Country', filterGroup]]);. Each array item is a sub array with two items - 'dataField' and 'filterGroup' object. The 'dataField' is any valid data field from the data source bound to the Kanban like 'dueDate', 'startDate' or custom fields like 'Country'. Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	* @param {string} operator?. Logical operator between the filters of different fields. Possible values are: 'and', 'or'. 
	*/
    public addFilter(filters: any, operator?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(filters, operator);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(filters, operator);
            });
        }
    }

	/** Adds sorting. Example: kanban.addSort(['Country'], 'ascending'); 
	* @param {[] | string} dataFields. The data field(s) to sort by
	* @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by. Possible values are: 'ascending' and 'descending'.
	*/
    public addSort(dataFields: [] | string, orderBy: [] | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataFields, orderBy);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addSort(dataFields, orderBy);
            });
        }
    }

	/** Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column. 
	* @param {any} data?. An object containing the new task's data
	*/
    public addTask(data?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTask(data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addTask(data);
            });
        }
    }

	/** Adds a column to a Kanban. If no data is specified, an empty column is added. 
	* @param {any} data?. An object containing the new column's data
	*/
    public addColumn(data?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addColumn(data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addColumn(data);
            });
        }
    }

	/** Begins an edit operation 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	*/
    public beginEdit(task: number | string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(task);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(task);
            });
        }
    }

	/** Ends the current edit operation and discards changes 
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

	/** Closes any open header panel (drop down) 
	*/
    public closePanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closePanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closePanel();
            });
        }
    }

	/** Collapses a Kanban column. 
	* @param {number | string} column. The index or dataField of the column to collapse
	*/
    public collapse(column: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(column);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(column);
            });
        }
    }

	/** Clears the Kanban's selection. 
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

	/** Hides a Kanban column. 
	* @param {number | string} column. The index or dataField of the column to hide
	*/
    public hide(column: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide(column);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hide(column);
            });
        }
    }

	/** Creates a copy of a task in the same column. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	*/
    public copyTask(task: number | string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.copyTask(task);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.copyTask(task);
            });
        }
    }

	/** Ends the current edit operation and saves changes 
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

	/** Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @returns {HTMLElement}
  */
	public ensureVisible(task:number | string | HTMLElement) : any {
        const result: any = this.nativeElement.ensureVisible(task);
        return result;
    }

	/** Expands a Kanban column. 
	* @param {number | string} column. The index or dataField of the column to expand
	*/
    public expand(column: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(column);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(column);
            });
        }
    }

	/** Expands all Kanban columns. 
	*/
    public expandAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAll();
            });
        }
    }

	/** Exports the Kanban's data. 
	* @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	* @param {string} fileName. The name of the file to export to
	* @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	* @returns {any}
  */
	public exportData(dataFormat:string, fileName:string, callback?:Function) : any {
        const result: any = this.nativeElement.exportData(dataFormat, fileName, callback);
        return result;
    }

	/** Gets the data of a column. The returned value is a JSON object with the following fields: 'label', 'dataField', 'collapsed', 'collapsible', 'allowRemove', 'editable', 'reorder', 'orientation'. 
	* @param {string} dataField. The column's data field
	* @returns {any}
  */
	public getColumn(dataField:string) : any {
        const result: any = this.nativeElement.getColumn(dataField);
        return result;
    }

	/** Gets the data of a task. The returned value is a JSON object with the following fields: 'checklist', 'id', 'color', 'comments', 'history', 'dueDate', 'startDate', 'priority', 'progress', 'status', 'swimlane', 'tags', 'text', 'description', 'userId', 'createdUserId', 'createdDate', 'updatedUserId', 'updatedDate' 
	* @param {number} id. The task's id
	* @returns {any}
  */
	public getTask(id:number) : any {
        const result: any = this.nativeElement.getTask(id);
        return result;
    }

	/** Gets the selected ids. The returned value is an array. Each item in the array is the 'id' of a selected task. 
	* @param {number} id. The task's id
	* @returns {any}
  */
	public getSelectedTasks(id:number) : any {
        const result: any = this.nativeElement.getSelectedTasks(id);
        return result;
    }

	/** Gets the Kanban's state. 
	* @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
  */
	public getState() : any {
        const result: any = this.nativeElement.getState();
        return result;
    }

	/** Loads the Kanban's state. 
	* @param {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }} state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
	*/
    public loadState(state?: { collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }): void {
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

	/** Moves a task to a different column. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @param {string} newStatus. The new status of the task (its new column's dataField)
	*/
    public moveTask(task: number | string | HTMLElement, newStatus: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveTask(task, newStatus);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveTask(task, newStatus);
            });
        }
    }

	/** Opens the "Customize tasks" header panel (drop down) 
	*/
    public openCustomizePanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openCustomizePanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openCustomizePanel();
            });
        }
    }

	/** Opens the "Filter" header panel (drop down) 
	*/
    public openFilterPanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openFilterPanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openFilterPanel();
            });
        }
    }

	/** Opens the "Sort" header panel (drop down) 
	*/
    public openSortPanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openSortPanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openSortPanel();
            });
        }
    }

	/** Removes filtering 
	*/
    public removeFilter(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter();
            });
        }
    }

	/** Removes sorting 
	*/
    public removeSort(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeSort();
            });
        }
    }

	/** Removes a task. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @param {boolean} prompt?. Whether or not to prompt the user before removing the task
	*/
    public removeTask(task: number | string | HTMLElement, prompt?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(task, prompt);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTask(task, prompt);
            });
        }
    }

	/** Removes a column. 
	* @param {string} dataField. The column's data field
	*/
    public removeColumn(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeColumn(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeColumn(dataField);
            });
        }
    }

	/** Saves the Kanban's state to the browser's localStorage. 
	*/
    public saveState(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState();
            });
        }
    }

	/** Shows a Kanban column. 
	* @param {number | string} column. The index or dataField of the column to show
	*/
    public show(column: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show(column);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show(column);
            });
        }
    }

	/** Shows all Kanban columns. 
	*/
    public showAllColumns(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showAllColumns();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showAllColumns();
            });
        }
    }

	/** Selects a task. 
	* @param {number | string} task. The task's id.
	*/
    public selectTask(task: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectTask(task);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectTask(task);
            });
        }
    }

	/** Unselects a task. 
	* @param {number | string} task. The task's id.
	*/
    public unselectTask(task: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectTask(task);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectTask(task);
            });
        }
    }

	/** Updates a task. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @param {{}} newData. The new data to visualize in the task.
	*/
    public updateTask(task: number | string | HTMLElement, newData: {}): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(task, newData);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateTask(task, newData);
            });
        }
    }

	/** Updates a column. 
	* @param {string} dataField. The new column's data field
	* @param {{}} newData. The new data to visualize in the column.
	*/
    public updateColumn(dataField: string, newData: {}): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateColumn(dataField, newData);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateColumn(dataField, newData);
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
			React.createElement("smart-kanban", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Kanban;
