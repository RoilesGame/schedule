import { Kanban } from './../index';
import { KanbanAddNewButtonDisplayMode, KanbanColumnOrientation, KanbanColumnEditMode, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanTaskSubTasks, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanPriority, KanbanUser, ElementRenderMode} from './../index';
import { DataAdapter } from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { KanbanAddNewButtonDisplayMode, KanbanColumnOrientation, KanbanColumnEditMode, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanTaskSubTasks, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanPriority, KanbanUser, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Kanban } from './../index';
export { DataAdapter } from './../index';


@Directive({
	exportAs: 'smart-kanban',	selector: 'smart-kanban, [smart-kanban]'
})

export class KanbanComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Kanban>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Kanban;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Kanban;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Kanban>document.createElement('smart-kanban');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Enables or disables column reordering. When this property is set to true and allowDrag is enabled, users will be able to reoder columns through drag & drop. For example: Click and drag the first column's header and drop it over another column. */
	@Input()
	get allowColumnReorder(): boolean {
		return this.nativeElement ? this.nativeElement.allowColumnReorder : undefined;
	}
	set allowColumnReorder(value: boolean) {
		this.nativeElement ? this.nativeElement.allowColumnReorder = value : undefined;
	}

	/** @description Enables or disables column editing. When this property is set to true, users will be able to dynamically change the column's header label by double clicking on it. */
	@Input()
	get allowColumnEdit(): boolean {
		return this.nativeElement ? this.nativeElement.allowColumnEdit : undefined;
	}
	set allowColumnEdit(value: boolean) {
		this.nativeElement ? this.nativeElement.allowColumnEdit = value : undefined;
	}

	/** @description Enables or disables column removing. When this property is set to true, users will be able to dynamically remove a column through the column actions menu. the 'columnActions' property should be true. */
	@Input()
	get allowColumnRemove(): boolean {
		return this.nativeElement ? this.nativeElement.allowColumnRemove : undefined;
	}
	set allowColumnRemove(value: boolean) {
		this.nativeElement ? this.nativeElement.allowColumnRemove = value : undefined;
	}

	/** @description Enables or disables column hiding. When this property is set to true, users will be able to dynamically hide a column through the column actions menu. the 'columnActions' property should be true. */
	@Input()
	get allowColumnHide(): boolean {
		return this.nativeElement ? this.nativeElement.allowColumnHide : undefined;
	}
	set allowColumnHide(value: boolean) {
		this.nativeElement ? this.nativeElement.allowColumnHide = value : undefined;
	}

	/** @description Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false. */
	@Input()
	get addNewButton(): boolean {
		return this.nativeElement ? this.nativeElement.addNewButton : undefined;
	}
	set addNewButton(value: boolean) {
		this.nativeElement ? this.nativeElement.addNewButton = value : undefined;
	}

	/** @description Determines whether the add button is visible in the column header and/or after the tasks in the column. */
	@Input()
	get addNewButtonDisplayMode(): KanbanAddNewButtonDisplayMode | string {
		return this.nativeElement ? this.nativeElement.addNewButtonDisplayMode : undefined;
	}
	set addNewButtonDisplayMode(value: KanbanAddNewButtonDisplayMode | string) {
		this.nativeElement ? this.nativeElement.addNewButtonDisplayMode = value : undefined;
	}

	/** @description Sets or gets whether a column with a button for adding new status columns to the Kanban will be displayed. */
	@Input()
	get addNewColumn(): boolean {
		return this.nativeElement ? this.nativeElement.addNewColumn : undefined;
	}
	set addNewColumn(value: boolean) {
		this.nativeElement ? this.nativeElement.addNewColumn = value : undefined;
	}

	/** @description Sets the width of the add new column. The property is used, if the 'columnWidth' property is set, too. It specifies the width of the dynamic new column. */
	@Input()
	get addNewColumnWidth(): number | null {
		return this.nativeElement ? this.nativeElement.addNewColumnWidth : undefined;
	}
	set addNewColumnWidth(value: number | null) {
		this.nativeElement ? this.nativeElement.addNewColumnWidth = value : undefined;
	}

	/** @description Allows the dragging of tasks. */
	@Input()
	get allowDrag(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
	}

	/** @description Allows the dropping of tasks. */
	@Input()
	get allowDrop(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrop : undefined;
	}
	set allowDrop(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
	}

	/** @description This property changes the visual appeal of the Kanban columns and tasks. When set to true and the Kanban columns have their 'color' property set, the color is also applied to the tasks and edit dialog. */
	@Input()
	get applyColumnColorToTasks(): boolean {
		return this.nativeElement ? this.nativeElement.applyColumnColorToTasks : undefined;
	}
	set applyColumnColorToTasks(value: boolean) {
		this.nativeElement ? this.nativeElement.applyColumnColorToTasks = value : undefined;
	}

	/** @description Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded. */
	@Input()
	get autoLoadState(): boolean {
		return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
	}
	set autoLoadState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
	}

	/** @description Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved. */
	@Input()
	get autoSaveState(): boolean {
		return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
	}
	set autoSaveState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
	}

	/** @description Automatically updates the columns height depending on the tasks inside the column. The effect of this property is observed when 'columnColorEntireSurface' is true. */
	@Input()
	get autoColumnHeight(): boolean {
		return this.nativeElement ? this.nativeElement.autoColumnHeight : undefined;
	}
	set autoColumnHeight(value: boolean) {
		this.nativeElement ? this.nativeElement.autoColumnHeight = value : undefined;
	}

	/** @description Allows collapsing the card content. */
	@Input()
	get collapsible(): boolean {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value: boolean) {
		this.nativeElement ? this.nativeElement.collapsible = value : undefined;
	}

	/** @description Displays colors in the column header, when the column's color property is set. */
	@Input()
	get columnColors(): boolean {
		return this.nativeElement ? this.nativeElement.columnColors : undefined;
	}
	set columnColors(value: boolean) {
		this.nativeElement ? this.nativeElement.columnColors = value : undefined;
	}

	/** @description Sets the Kanban columns width. When this property is set, the kanban columns width is set and a horizontal scrollbar may appear. */
	@Input()
	get columnWidth(): number | null {
		return this.nativeElement ? this.nativeElement.columnWidth : undefined;
	}
	set columnWidth(value: number | null) {
		this.nativeElement ? this.nativeElement.columnWidth = value : undefined;
	}

	/** @description Displays background in the Kanban column. */
	@Input()
	get columnColorEntireSurface(): boolean {
		return this.nativeElement ? this.nativeElement.columnColorEntireSurface : undefined;
	}
	set columnColorEntireSurface(value: boolean) {
		this.nativeElement ? this.nativeElement.columnColorEntireSurface = value : undefined;
	}

	/** @description Displays a column footer which shows the summary of the column. */
	@Input()
	get columnFooter(): boolean {
		return this.nativeElement ? this.nativeElement.columnFooter : undefined;
	}
	set columnFooter(value: boolean) {
		this.nativeElement ? this.nativeElement.columnFooter = value : undefined;
	}

	/** @description Describes the columns properties. */
	@Input()
	get columns(): KanbanColumn[] {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: KanbanColumn[]) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description Toggles the visibility of the column actions icon. */
	@Input()
	get columnActions(): boolean {
		return this.nativeElement ? this.nativeElement.columnActions : undefined;
	}
	set columnActions(value: boolean) {
		this.nativeElement ? this.nativeElement.columnActions = value : undefined;
	}

	/** @description Determines whether task count information is displayed in column headers. */
	@Input()
	get columnSummary(): boolean {
		return this.nativeElement ? this.nativeElement.columnSummary : undefined;
	}
	set columnSummary(value: boolean) {
		this.nativeElement ? this.nativeElement.columnSummary = value : undefined;
	}

	/** @description Determines whether a column header has a template. You can pass 'string', 'function' or HTMLTemplateElement as a value. */
	@Input()
	get columnHeaderTemplate(): any {
		return this.nativeElement ? this.nativeElement.columnHeaderTemplate : undefined;
	}
	set columnHeaderTemplate(value: any) {
		this.nativeElement ? this.nativeElement.columnHeaderTemplate = value : undefined;
	}

	/** @description Determines the column edit behavior. With the 'header' option, edit starts on double click on the column's label. In 'menu' mode, edit is allowed from the 'columnActions' menu. In 'headerAndMenu' option, column editing includes both options. */
	@Input()
	get columnEditMode(): KanbanColumnEditMode | string {
		return this.nativeElement ? this.nativeElement.columnEditMode : undefined;
	}
	set columnEditMode(value: KanbanColumnEditMode | string) {
		this.nativeElement ? this.nativeElement.columnEditMode = value : undefined;
	}

	/** @description Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties. */
	@Input()
	get currentUser(): string | number {
		return this.nativeElement ? this.nativeElement.currentUser : undefined;
	}
	set currentUser(value: string | number) {
		this.nativeElement ? this.nativeElement.currentUser = value : undefined;
	}

	/** @description Sets or gets whether the default dialog for adding/removing tasks or comments is disabled. */
	@Input()
	get disableDialog(): boolean {
		return this.nativeElement ? this.nativeElement.disableDialog : undefined;
	}
	set disableDialog(value: boolean) {
		this.nativeElement ? this.nativeElement.disableDialog = value : undefined;
	}

	/** @description Sets or gets a customization function for the dialog. This function can be used to customize the dialog look or to replace it. The Kanban calls this function with 5 arguments - 'dialog', 'taskOrComment', 'editors', 'purpose' and 'type'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'purpose' could be 'add' or 'edit' and 'type' could be 'task' or 'column' depending on the action. */
	@Input()
	get dialogCustomizationFunction(): any {
		return this.nativeElement ? this.nativeElement.dialogCustomizationFunction : undefined;
	}
	set dialogCustomizationFunction(value: any) {
		this.nativeElement ? this.nativeElement.dialogCustomizationFunction = value : undefined;
	}

	/** @description Sets or gets a function called when the dialog is rendered. The Kanban calls this function with 6 arguments - 'dialog', 'editors', 'labels', 'tabs', 'layout', 'taskOrComment'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'editors', 'labels', 'tabs' and 'layout' are JSON objects with key which describes the element type and value which is HTML Element. */
	@Input()
	get dialogRendered(): any {
		return this.nativeElement ? this.nativeElement.dialogRendered : undefined;
	}
	set dialogRendered(value: any) {
		this.nativeElement ? this.nativeElement.dialogRendered = value : undefined;
	}

	/** @description Determines the data source to be visualized in the kanban board. */
	@Input()
	get dataSource(): KanbanDataSource[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: KanbanDataSource[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Determines the the relation (mapping) between the Kanban's default fields (keywords) and the data fields from the data source. Not necessary if both match. Only some of the default mapping can be overwritten. */
	@Input()
	get dataSourceMap(): { checklist: string; color: string; comments: string; dueDate: string; id: string; priority: string; progress: string; startDate: string; status: string; swimlane: string; tags: string; text: string; userId: string; createdUserId: string; upDatedUserId: string; createdDate: Date; upDatedDate: Date;} {
		return this.nativeElement ? this.nativeElement.dataSourceMap : undefined;
	}
	set dataSourceMap(value: { checklist: string; color: string; comments: string; dueDate: string; id: string; priority: string; progress: string; startDate: string; status: string; swimlane: string; tags: string; text: string; userId: string; createdUserId: string; upDatedUserId: string; createdDate: Date; upDatedDate: Date;}) {
		this.nativeElement ? this.nativeElement.dataSourceMap = value : undefined;
	}

	/** @description Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started. */
	@Input()
	get dragOffset(): boolean {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value: boolean) {
		this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
	}

	/** @description Sets or gets whether tasks can be edited (including the assigning of users to tasks). */
	@Input()
	get editable(): boolean {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value: boolean) {
		this.nativeElement ? this.nativeElement.editable = value : undefined;
	}

	/** @description Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors. */
	@Input()
	get formatStringDate(): string {
		return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
	}
	set formatStringDate(value: string) {
		this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
	}

	/** @description Sets or gets the format string of comments time stamp. */
	@Input()
	get formatStringTime(): string {
		return this.nativeElement ? this.nativeElement.formatStringTime : undefined;
	}
	set formatStringTime(value: string) {
		this.nativeElement ? this.nativeElement.formatStringTime = value : undefined;
	}

	/** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
	@Input()
	get headerPosition(): KanbanHeaderPosition | string {
		return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	}
	set headerPosition(value: KanbanHeaderPosition | string) {
		this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
	}

	/** @description Sets or gets the way column hierarchy is represented. */
	@Input()
	get hierarchy(): KanbanHierarchy | string {
		return this.nativeElement ? this.nativeElement.hierarchy : undefined;
	}
	set hierarchy(value: KanbanHierarchy | string) {
		this.nativeElement ? this.nativeElement.hierarchy = value : undefined;
	}

	/** @description Sets or gets the locale. Used in conjunction with the property messages. */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Callback function which can be used for customizing the tasks rendering. The Kanban calls it with 2 arguments - task html element and task data. */
	@Input()
	get onTaskRender(): any {
		return this.nativeElement ? this.nativeElement.onTaskRender : undefined;
	}
	set onTaskRender(value: any) {
		this.nativeElement ? this.nativeElement.onTaskRender = value : undefined;
	}

	/** @description Callback function which can be used for customizing the filter items. The function is called with 1 argument - Array of items which will be displayed in the filter drop down. You can modify that array to remove or update items to filter by. */
	@Input()
	get onFilterPrepare(): any {
		return this.nativeElement ? this.nativeElement.onFilterPrepare : undefined;
	}
	set onFilterPrepare(value: any) {
		this.nativeElement ? this.nativeElement.onFilterPrepare = value : undefined;
	}

	/** @description Callback function which can be used for customizing the sort items. The function is called with 1 argument - Array of items which will be displayed in the sort drop down. You can modify that array to remove or update items to sort by. */
	@Input()
	get onSortPrepare(): any {
		return this.nativeElement ? this.nativeElement.onSortPrepare : undefined;
	}
	set onSortPrepare(value: any) {
		this.nativeElement ? this.nativeElement.onSortPrepare = value : undefined;
	}

	/** @description Callback function which can be used for customizing the column header rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field. */
	@Input()
	get onColumnHeaderRender(): any {
		return this.nativeElement ? this.nativeElement.onColumnHeaderRender : undefined;
	}
	set onColumnHeaderRender(value: any) {
		this.nativeElement ? this.nativeElement.onColumnHeaderRender = value : undefined;
	}

	/** @description Callback function which can be used for customizing the column footer rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field. */
	@Input()
	get onColumnFooterRender(): any {
		return this.nativeElement ? this.nativeElement.onColumnFooterRender : undefined;
	}
	set onColumnFooterRender(value: any) {
		this.nativeElement ? this.nativeElement.onColumnFooterRender = value : undefined;
	}

	/** @description Determines selection mode. */
	@Input()
	get selectionMode(): KanbanSelectionMode | string {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: KanbanSelectionMode | string) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description Sets or gets whether the tasks history will be stored and displayed in the task dialog. */
	@Input()
	get storeHistory(): boolean {
		return this.nativeElement ? this.nativeElement.storeHistory : undefined;
	}
	set storeHistory(value: boolean) {
		this.nativeElement ? this.nativeElement.storeHistory = value : undefined;
	}

	/** @description Sets or gets the task history items that will be stored when storeHistory is enabled. */
	@Input()
	get storeHistoryItems(): number {
		return this.nativeElement ? this.nativeElement.storeHistoryItems : undefined;
	}
	set storeHistoryItems(value: number) {
		this.nativeElement ? this.nativeElement.storeHistoryItems = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Sets or gets whether the edit dialog is displayed in readonly mode. In that mode it shows only the task details, but the editing is disabled. However, if comments are enabled, you will be able to add comments in the dialog. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present. */
	@Input()
	get swimlanes(): KanbanSwimlane[] {
		return this.nativeElement ? this.nativeElement.swimlanes : undefined;
	}
	set swimlanes(value: KanbanSwimlane[]) {
		this.nativeElement ? this.nativeElement.swimlanes = value : undefined;
	}

	/** @description Sets or gets the index of the column at which to start the swimlanes. */
	@Input()
	get swimlanesFrom(): number {
		return this.nativeElement ? this.nativeElement.swimlanesFrom : undefined;
	}
	set swimlanesFrom(value: number) {
		this.nativeElement ? this.nativeElement.swimlanesFrom = value : undefined;
	}

	/** @description Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column. */
	@Input()
	get swimlanesTo(): number {
		return this.nativeElement ? this.nativeElement.swimlanesTo : undefined;
	}
	set swimlanesTo(value: number) {
		this.nativeElement ? this.nativeElement.swimlanesTo = value : undefined;
	}

	/** @description Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed. */
	@Input()
	get tags(): any[] {
		return this.nativeElement ? this.nativeElement.tags : undefined;
	}
	set tags(value: any[]) {
		this.nativeElement ? this.nativeElement.tags = value : undefined;
	}

	/** @description Toggles the visibility of the task actions icon. */
	@Input()
	get taskActions(): boolean {
		return this.nativeElement ? this.nativeElement.taskActions : undefined;
	}
	set taskActions(value: boolean) {
		this.nativeElement ? this.nativeElement.taskActions = value : undefined;
	}

	/** @description Represents a callback function which is called when the task actions menu is created. The task actions element is passed as parameter and allows you to customize the menu. Example: (list) => { list.innerHTML = 'Custom Item'; list.onclick = () => { alert('clicked'); }} */
	@Input()
	get taskActionsRendered(): any {
		return this.nativeElement ? this.nativeElement.taskActionsRendered : undefined;
	}
	set taskActionsRendered(value: any) {
		this.nativeElement ? this.nativeElement.taskActionsRendered = value : undefined;
	}

	/** @description Toggles the visibility of the task comments icon. */
	@Input()
	get taskComments(): boolean {
		return this.nativeElement ? this.nativeElement.taskComments : undefined;
	}
	set taskComments(value: boolean) {
		this.nativeElement ? this.nativeElement.taskComments = value : undefined;
	}

	/** @description Toggles the visibility of the task due icon. */
	@Input()
	get taskDue(): boolean {
		return this.nativeElement ? this.nativeElement.taskDue : undefined;
	}
	set taskDue(value: boolean) {
		this.nativeElement ? this.nativeElement.taskDue = value : undefined;
	}

	/** @description Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns. */
	@Input()
	get taskPosition(): KanbanTaskPosition | string {
		return this.nativeElement ? this.nativeElement.taskPosition : undefined;
	}
	set taskPosition(value: KanbanTaskPosition | string) {
		this.nativeElement ? this.nativeElement.taskPosition = value : undefined;
	}

	/** @description Toggles the visibility of the task priority icon (shown when priority is low or high). */
	@Input()
	get taskPriority(): boolean {
		return this.nativeElement ? this.nativeElement.taskPriority : undefined;
	}
	set taskPriority(value: boolean) {
		this.nativeElement ? this.nativeElement.taskPriority = value : undefined;
	}

	/** @description Toggles the visibility of task progress bar and the completed sub-tasks label. */
	@Input()
	get taskProgress(): boolean {
		return this.nativeElement ? this.nativeElement.taskProgress : undefined;
	}
	set taskProgress(value: boolean) {
		this.nativeElement ? this.nativeElement.taskProgress = value : undefined;
	}

	/** @description Sets the task custom fields displayed in the card. Each array item should have 'dataField', 'label' 'dataType' and optionally 'visible', 'image' and 'cover' properties. The 'dataField' determines the value, the label is displayed as title, 'dataType' is used for formatting and 'visible' determines whether the field will be displayed. If your string represents an image either URL or Base64, set image: true. If you want to display that image as a cover image, set cover:true, too. */
	@Input()
	get taskCustomFields(): any {
		return this.nativeElement ? this.nativeElement.taskCustomFields : undefined;
	}
	set taskCustomFields(value: any) {
		this.nativeElement ? this.nativeElement.taskCustomFields = value : undefined;
	}

	/** @description The task's background color depends on the task's color property. By default the color is rendered within the task's left border. */
	@Input()
	get taskColorEntireSurface(): boolean {
		return this.nativeElement ? this.nativeElement.taskColorEntireSurface : undefined;
	}
	set taskColorEntireSurface(value: boolean) {
		this.nativeElement ? this.nativeElement.taskColorEntireSurface = value : undefined;
	}

	/** @description Displays an input in the task's card for adding dynamically a sub task. The 'taskSubTasks' property should be set to a value different than 'none'. */
	@Input()
	get taskSubTasksInput(): boolean {
		return this.nativeElement ? this.nativeElement.taskSubTasksInput : undefined;
	}
	set taskSubTasksInput(value: boolean) {
		this.nativeElement ? this.nativeElement.taskSubTasksInput = value : undefined;
	}

	/** @description Sets the rendering mode of sub tasks. 'none' - default value. Sub tasks are displayed only in the edit dialog. 'onePerRow' - all sub tasks are displayed in the task's card. 'onlyUnfinished' - only tasks which are not completed are displayed in the task's card. */
	@Input()
	get taskSubTasks(): KanbanTaskSubTasks | string {
		return this.nativeElement ? this.nativeElement.taskSubTasks : undefined;
	}
	set taskSubTasks(value: KanbanTaskSubTasks | string) {
		this.nativeElement ? this.nativeElement.taskSubTasks = value : undefined;
	}

	/** @description Toggles the visibility of task tags. */
	@Input()
	get taskTags(): boolean {
		return this.nativeElement ? this.nativeElement.taskTags : undefined;
	}
	set taskTags(value: boolean) {
		this.nativeElement ? this.nativeElement.taskTags = value : undefined;
	}

	/** @description Toggles the visibility of the task user icon. */
	@Input()
	get taskUserIcon(): boolean {
		return this.nativeElement ? this.nativeElement.taskUserIcon : undefined;
	}
	set taskUserIcon(value: boolean) {
		this.nativeElement ? this.nativeElement.taskUserIcon = value : undefined;
	}

	/** @description Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed. */
	@Input()
	get textTemplate(): any {
		return this.nativeElement ? this.nativeElement.textTemplate : undefined;
	}
	set textTemplate(value: any) {
		this.nativeElement ? this.nativeElement.textTemplate = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Determines whether the priority list (as defined by the priority property) will be shown when clicking the priority icon. Only applicable if editable privileges are enabled. */
	@Input()
	get priorityList(): boolean {
		return this.nativeElement ? this.nativeElement.priorityList : undefined;
	}
	set priorityList(value: boolean) {
		this.nativeElement ? this.nativeElement.priorityList = value : undefined;
	}

	/** @description Determines the priority Kanban tasks can be assigned to. Example: [{label: 'low', value: 'low'}, {label: 'high', value: 'high'}] */
	@Input()
	get priority(): KanbanPriority[] {
		return this.nativeElement ? this.nativeElement.priority : undefined;
	}
	set priority(value: KanbanPriority[]) {
		this.nativeElement ? this.nativeElement.priority = value : undefined;
	}

	/** @description Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled. */
	@Input()
	get userList(): boolean {
		return this.nativeElement ? this.nativeElement.userList : undefined;
	}
	set userList(value: boolean) {
		this.nativeElement ? this.nativeElement.userList = value : undefined;
	}

	/** @description Determines the users Kanban tasks can be assigned to and their characteristics and privileges. */
	@Input()
	get users(): KanbanUser[] {
		return this.nativeElement ? this.nativeElement.users : undefined;
	}
	set users(value: KanbanUser[]) {
		this.nativeElement ? this.nativeElement.users = value : undefined;
	}

	/** @description This event is triggered when a task has been updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
	*   oldValue - The old data of the task
	*   task - The HTML element of the task whose data has been changed
	*   value - The new data of the task
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the edit/prompt dialog is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column is added.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
	*   label - The column label.
	*   dataField - The column data field.
	*   collapsed - The column's collapsed state.
	*/
	@Output() onColumnAdd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column is removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
	*   label - The column label.
	*   dataField - The column data field.
	*   collapsed - The column's collapsed state.
	*/
	@Output() onColumnRemove: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column is reordered.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldIndex, 	index, 	column)
	*   oldIndex - The column's old index.
	*   index - The column's new index.
	*   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
	*/
	@Output() onColumnReorder: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column is updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	column)
	*   oldValue - The column's old label.
	*   value - The column's new label.
	*   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
	*/
	@Output() onColumnUpdate: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column header is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
	*   label - The column label.
	*   dataField - The column data field.
	*   collapsed - The column's collapsed state.
	*/
	@Output() onColumnClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column header is double clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
	*   label - The column label.
	*   dataField - The column data field.
	*   collapsed - The column's collapsed state.
	*/
	@Output() onColumnDoubleClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column is shown by using the column's action menu or the Kanban's 'show' method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
	*   label - The column label.
	*   dataField - The column data field.
	*/
	@Output() onColumnShow: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column is hidden by using the column's action menu or the Kanban's 'hide' method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
	*   label - The column label.
	*   dataField - The column data field.
	*/
	@Output() onColumnHide: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column is collapsed  by using the column's action menu or the Kanban's 'collapse' method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
	*   label - The column label.
	*   dataField - The column data field.
	*/
	@Output() onColumnCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column is expanded by using the column's action menu or the Kanban's 'expand' method.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
	*   label - The column label.
	*   dataField - The column data field.
	*/
	@Output() onColumnExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a comment is added to the Kanban Task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
	*   id - The task's id.
	*   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
	*/
	@Output() onCommentAdd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a comment is removed from the Kanban Task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
	*   id - The task's id.
	*   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
	*/
	@Output() onCommentRemove: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a comment is updated in the Kanban Task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
	*   id - The task's id.
	*   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
	*/
	@Output() onCommentUpdate: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a task is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
	*   container - the Kanban the dragged task(s) is dropped to
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the Kanban the dragged item(s) is dragged from
	*   target - the element the dragged tasks are dropped to
	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user is dragging a task.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*/
	@Output() onDragging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
	*   container - the Kanban the dragged task(s) is dragged from
	*   data - an object with additional drag details
	*   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
	*   items - an array with all dragged tasks
	*   originalEvent - the original, browser, event that initiates the drag operation
	*   previousContainer - the Kanban the dragged item(s) is dragged from
	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a filter has been applied.
	*  @param event. The custom event. 	*/
	@Output() onFilter: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the edit/prompt dialog is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. If you want to cancel the default Kanban dialog, call event.preventDefault();
	*  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
	*   comment - The comment that is about to be removed (if applicable).
	*   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
	*   task - The task that is about to be edited or removed (if applicable).
	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when sorting has been applied.
	*  @param event. The custom event. 	*/
	@Output() onSort: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered before a new task is added. You can use the event.detail.value and event.detail.id to customize the new Task before adding it to the Kanban. Example: kanban.onTaskBeforeAdd = (event) => { const data = event.detail.value; const id = event.detail.id; event.detail.id = 'BG12';}
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data that is added to the Kanban.
	*   id - The task data id.
	*/
	@Output() onTaskBeforeAdd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a new task is added. Example: kanban.onTaskAdd = (event) => { const data = event.detail.value; const id = event.detail.id; }
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data that is added to the Kanban.
	*   id - The task data id.
	*/
	@Output() onTaskAdd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a task is removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data that is removed from the Kanban.
	*   id - The task data id.
	*/
	@Output() onTaskRemove: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a task is updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	id)
	*   value - The task data that is updated.
	*   oldValue - The update task's old data.
	*   id - The task data id.
	*/
	@Output() onTaskUpdate: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a task is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data.
	*   id - The task data id.
	*/
	@Output() onTaskClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a task is double clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
	*   value - The task data.
	*   id - The task data id.
	*/
	@Output() onTaskDoubleClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds filtering. Example: const filterGroup = new Smart.FilterGroup(); const filterObject = filterGroup.createFilter('string', 'Italy', 'contains'); filterGroup.addFilter('and', filterObject); kanban.addFilter([['Country', filterGroup]]); 
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

	/** @description Adds sorting. Example: kanban.addSort(['Country'], 'ascending'); 
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

	/** @description Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column. 
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

	/** @description Adds a column to a Kanban. If no data is specified, an empty column is added. 
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

	/** @description Begins an edit operation 
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

	/** @description Ends the current edit operation and discards changes 
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

	/** @description Closes any open header panel (drop down) 
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

	/** @description Collapses a Kanban column. 
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

	/** @description Clears the Kanban's selection. 
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

	/** @description Hides a Kanban column. 
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

	/** @description Creates a copy of a task in the same column. 
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

	/** @description Ends the current edit operation and saves changes 
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

	/** @description Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task. 
	* @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
	* @returns {HTMLElement}
  */
	public async ensureVisible(task): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.ensureVisible(task);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Expands a Kanban column. 
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

	/** @description Expands all Kanban columns. 
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

	/** @description Exports the Kanban's data. 
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

	/** @description Gets the data of a column. The returned value is a JSON object with the following fields: 'label', 'dataField', 'collapsed', 'collapsible', 'allowRemove', 'editable', 'reorder', 'orientation'. 
	* @param {string} dataField. The column's data field
	* @returns {any}
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

	/** @description Gets the data of a task. The returned value is a JSON object with the following fields: 'checklist', 'id', 'color', 'comments', 'history', 'dueDate', 'startDate', 'priority', 'progress', 'status', 'swimlane', 'tags', 'text', 'description', 'userId', 'createdUserId', 'createdDate', 'updatedUserId', 'updatedDate' 
	* @param {number} id. The task's id
	* @returns {any}
  */
	public async getTask(id): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getTask(id);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the selected ids. The returned value is an array. Each item in the array is the 'id' of a selected task. 
	* @param {number} id. The task's id
	* @returns {any}
  */
	public async getSelectedTasks(id): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSelectedTasks(id);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the Kanban's state. 
	* @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
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

	/** @description Loads the Kanban's state. 
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

	/** @description Moves a task to a different column. 
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

	/** @description Opens the "Customize tasks" header panel (drop down) 
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

	/** @description Opens the "Filter" header panel (drop down) 
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

	/** @description Opens the "Sort" header panel (drop down) 
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

	/** @description Removes filtering 
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

	/** @description Removes sorting 
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

	/** @description Removes a task. 
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

	/** @description Removes a column. 
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

	/** @description Saves the Kanban's state to the browser's localStorage. 
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

	/** @description Shows a Kanban column. 
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

	/** @description Shows all Kanban columns. 
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

	/** @description Selects a task. 
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

	/** @description Unselects a task. 
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

	/** @description Updates a task. 
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

	/** @description Updates a column. 
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
		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['columnAddHandler'] = (event: CustomEvent) => { that.onColumnAdd.emit(event); }
		that.nativeElement.addEventListener('columnAdd', that.eventHandlers['columnAddHandler']);

		that.eventHandlers['columnRemoveHandler'] = (event: CustomEvent) => { that.onColumnRemove.emit(event); }
		that.nativeElement.addEventListener('columnRemove', that.eventHandlers['columnRemoveHandler']);

		that.eventHandlers['columnReorderHandler'] = (event: CustomEvent) => { that.onColumnReorder.emit(event); }
		that.nativeElement.addEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);

		that.eventHandlers['columnUpdateHandler'] = (event: CustomEvent) => { that.onColumnUpdate.emit(event); }
		that.nativeElement.addEventListener('columnUpdate', that.eventHandlers['columnUpdateHandler']);

		that.eventHandlers['columnClickHandler'] = (event: CustomEvent) => { that.onColumnClick.emit(event); }
		that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);

		that.eventHandlers['columnDoubleClickHandler'] = (event: CustomEvent) => { that.onColumnDoubleClick.emit(event); }
		that.nativeElement.addEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);

		that.eventHandlers['columnShowHandler'] = (event: CustomEvent) => { that.onColumnShow.emit(event); }
		that.nativeElement.addEventListener('columnShow', that.eventHandlers['columnShowHandler']);

		that.eventHandlers['columnHideHandler'] = (event: CustomEvent) => { that.onColumnHide.emit(event); }
		that.nativeElement.addEventListener('columnHide', that.eventHandlers['columnHideHandler']);

		that.eventHandlers['columnCollapseHandler'] = (event: CustomEvent) => { that.onColumnCollapse.emit(event); }
		that.nativeElement.addEventListener('columnCollapse', that.eventHandlers['columnCollapseHandler']);

		that.eventHandlers['columnExpandHandler'] = (event: CustomEvent) => { that.onColumnExpand.emit(event); }
		that.nativeElement.addEventListener('columnExpand', that.eventHandlers['columnExpandHandler']);

		that.eventHandlers['commentAddHandler'] = (event: CustomEvent) => { that.onCommentAdd.emit(event); }
		that.nativeElement.addEventListener('commentAdd', that.eventHandlers['commentAddHandler']);

		that.eventHandlers['commentRemoveHandler'] = (event: CustomEvent) => { that.onCommentRemove.emit(event); }
		that.nativeElement.addEventListener('commentRemove', that.eventHandlers['commentRemoveHandler']);

		that.eventHandlers['commentUpdateHandler'] = (event: CustomEvent) => { that.onCommentUpdate.emit(event); }
		that.nativeElement.addEventListener('commentUpdate', that.eventHandlers['commentUpdateHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['draggingHandler'] = (event: CustomEvent) => { that.onDragging.emit(event); }
		that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['filterHandler'] = (event: CustomEvent) => { that.onFilter.emit(event); }
		that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['sortHandler'] = (event: CustomEvent) => { that.onSort.emit(event); }
		that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);

		that.eventHandlers['taskBeforeAddHandler'] = (event: CustomEvent) => { that.onTaskBeforeAdd.emit(event); }
		that.nativeElement.addEventListener('taskBeforeAdd', that.eventHandlers['taskBeforeAddHandler']);

		that.eventHandlers['taskAddHandler'] = (event: CustomEvent) => { that.onTaskAdd.emit(event); }
		that.nativeElement.addEventListener('taskAdd', that.eventHandlers['taskAddHandler']);

		that.eventHandlers['taskRemoveHandler'] = (event: CustomEvent) => { that.onTaskRemove.emit(event); }
		that.nativeElement.addEventListener('taskRemove', that.eventHandlers['taskRemoveHandler']);

		that.eventHandlers['taskUpdateHandler'] = (event: CustomEvent) => { that.onTaskUpdate.emit(event); }
		that.nativeElement.addEventListener('taskUpdate', that.eventHandlers['taskUpdateHandler']);

		that.eventHandlers['taskClickHandler'] = (event: CustomEvent) => { that.onTaskClick.emit(event); }
		that.nativeElement.addEventListener('taskClick', that.eventHandlers['taskClickHandler']);

		that.eventHandlers['taskDoubleClickHandler'] = (event: CustomEvent) => { that.onTaskDoubleClick.emit(event); }
		that.nativeElement.addEventListener('taskDoubleClick', that.eventHandlers['taskDoubleClickHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['columnAddHandler']) {
			that.nativeElement.removeEventListener('columnAdd', that.eventHandlers['columnAddHandler']);
		}

		if (that.eventHandlers['columnRemoveHandler']) {
			that.nativeElement.removeEventListener('columnRemove', that.eventHandlers['columnRemoveHandler']);
		}

		if (that.eventHandlers['columnReorderHandler']) {
			that.nativeElement.removeEventListener('columnReorder', that.eventHandlers['columnReorderHandler']);
		}

		if (that.eventHandlers['columnUpdateHandler']) {
			that.nativeElement.removeEventListener('columnUpdate', that.eventHandlers['columnUpdateHandler']);
		}

		if (that.eventHandlers['columnClickHandler']) {
			that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
		}

		if (that.eventHandlers['columnDoubleClickHandler']) {
			that.nativeElement.removeEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
		}

		if (that.eventHandlers['columnShowHandler']) {
			that.nativeElement.removeEventListener('columnShow', that.eventHandlers['columnShowHandler']);
		}

		if (that.eventHandlers['columnHideHandler']) {
			that.nativeElement.removeEventListener('columnHide', that.eventHandlers['columnHideHandler']);
		}

		if (that.eventHandlers['columnCollapseHandler']) {
			that.nativeElement.removeEventListener('columnCollapse', that.eventHandlers['columnCollapseHandler']);
		}

		if (that.eventHandlers['columnExpandHandler']) {
			that.nativeElement.removeEventListener('columnExpand', that.eventHandlers['columnExpandHandler']);
		}

		if (that.eventHandlers['commentAddHandler']) {
			that.nativeElement.removeEventListener('commentAdd', that.eventHandlers['commentAddHandler']);
		}

		if (that.eventHandlers['commentRemoveHandler']) {
			that.nativeElement.removeEventListener('commentRemove', that.eventHandlers['commentRemoveHandler']);
		}

		if (that.eventHandlers['commentUpdateHandler']) {
			that.nativeElement.removeEventListener('commentUpdate', that.eventHandlers['commentUpdateHandler']);
		}

		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
		}

		if (that.eventHandlers['draggingHandler']) {
			that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
		}

		if (that.eventHandlers['dragStartHandler']) {
			that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
		}

		if (that.eventHandlers['filterHandler']) {
			that.nativeElement.onfilterHandler = null;
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['sortHandler']) {
			that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
		}

		if (that.eventHandlers['taskBeforeAddHandler']) {
			that.nativeElement.removeEventListener('taskBeforeAdd', that.eventHandlers['taskBeforeAddHandler']);
		}

		if (that.eventHandlers['taskAddHandler']) {
			that.nativeElement.removeEventListener('taskAdd', that.eventHandlers['taskAddHandler']);
		}

		if (that.eventHandlers['taskRemoveHandler']) {
			that.nativeElement.removeEventListener('taskRemove', that.eventHandlers['taskRemoveHandler']);
		}

		if (that.eventHandlers['taskUpdateHandler']) {
			that.nativeElement.removeEventListener('taskUpdate', that.eventHandlers['taskUpdateHandler']);
		}

		if (that.eventHandlers['taskClickHandler']) {
			that.nativeElement.removeEventListener('taskClick', that.eventHandlers['taskClickHandler']);
		}

		if (that.eventHandlers['taskDoubleClickHandler']) {
			that.nativeElement.removeEventListener('taskDoubleClick', that.eventHandlers['taskDoubleClickHandler']);
		}

	}
}
