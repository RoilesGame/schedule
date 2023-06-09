import { DropDownList } from './../index';
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { DropDownList } from './../index';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



import { ListItemComponent } from './smart.listitem';

import { ListItemsGroupComponent } from './smart.listitemsgroup';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropDownListComponent),
    multi: true
}

@Directive({
	exportAs: 'smart-drop-down-list',	selector: 'smart-drop-down-list, [smart-drop-down-list]',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class DropDownListComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {

	constructor(ref: ElementRef<DropDownList>) {
		super(ref);
		this.nativeElement = ref.nativeElement as DropDownList;
	}

	private eventHandlers: any[] = [];

	public nativeElement: DropDownList;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <DropDownList>document.createElement('smart-drop-down-list');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
       _onChange: (value: any) => void = () => {};
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
       _onTouched: () => any = () => {};


	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation | string {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation | string) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element. */
	@Input()
	get autoCloseDelay(): number {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value: number) {
		this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the DropDownList. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Determines whether an indicator will appear during filtering and remote item loading. */
	@Input()
	get displayLoadingIndicator(): boolean {
		return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
	}
	set displayLoadingIndicator(value: boolean) {
		this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
	}

	/** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
	@Input()
	get displayMember(): string {
		return this.nativeElement ? this.nativeElement.displayMember : undefined;
	}
	set displayMember(value: string) {
		this.nativeElement ? this.nativeElement.displayMember = value : undefined;
	}

	/** @description Determines the drop down parent. The expected value is CSS Selector, ID or 'body'. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place. */
	@Input()
	get dropDownAppendTo(): string {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: string) {
		this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
	}

	/** @description Determines the position of the drop down button. */
	@Input()
	get dropDownButtonPosition(): DropDownButtonPosition | string {
		return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
	}
	set dropDownButtonPosition(value: DropDownButtonPosition | string) {
		this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
	}

	/** @description Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable. */
	@Input()
	get dropDownHeight(): string | number {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value: string | number) {
		this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
	}

	/** @description Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable. */
	@Input()
	get dropDownMaxHeight(): string | number {
		return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
	}
	set dropDownMaxHeight(value: string | number) {
		this.nativeElement ? this.nativeElement.dropDownMaxHeight = value : undefined;
	}

	/** @description Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable. */
	@Input()
	get dropDownMaxWidth(): string | number {
		return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
	}
	set dropDownMaxWidth(value: string | number) {
		this.nativeElement ? this.nativeElement.dropDownMaxWidth = value : undefined;
	}

	/** @description Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable. */
	@Input()
	get dropDownMinHeight(): string | number {
		return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
	}
	set dropDownMinHeight(value: string | number) {
		this.nativeElement ? this.nativeElement.dropDownMinHeight = value : undefined;
	}

	/** @description Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable. */
	@Input()
	get dropDownMinWidth(): string | number {
		return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
	}
	set dropDownMinWidth(value: string | number) {
		this.nativeElement ? this.nativeElement.dropDownMinWidth = value : undefined;
	}

	/** @description Determines how the drop down is going to open. */
	@Input()
	get dropDownOpenMode(): DropDownOpenMode | string {
		return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
	}
	set dropDownOpenMode(value: DropDownOpenMode | string) {
		this.nativeElement ? this.nativeElement.dropDownOpenMode = value : undefined;
	}

	/** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM. */
	@Input()
	get dropDownOverlay(): boolean {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value: boolean) {
		this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
	}

	/** @description Determines the placeholder for the drop down list when it's empty. */
	@Input()
	get dropDownPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
	}
	set dropDownPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.dropDownPlaceholder = value : undefined;
	}

	/** @description Determines the position of the drop down when opened. */
	@Input()
	get dropDownPosition(): DropDownPosition | string {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: DropDownPosition | string) {
		this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
	}

	/** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
	@Input()
	get dropDownWidth(): string | number {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value: string | number) {
		this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
	}

	/** @description Determines whether filtering is enabled. */
	@Input()
	get filterable(): boolean {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: boolean) {
		this.nativeElement ? this.nativeElement.filterable = value : undefined;
	}

	/** @description Determines the placeholder for the filter input inside the drop down that is only visible when filterable is enabled. */
	@Input()
	get filterInputPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
	}
	set filterInputPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
	}

	/** @description Determines the filtering mode of the drop down list. */
	@Input()
	get filterMode(): FilterMode | string {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value: FilterMode | string) {
		this.nativeElement ? this.nativeElement.filterMode = value : undefined;
	}

	/** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
	@Input()
	get grouped(): boolean {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value: boolean) {
		this.nativeElement ? this.nativeElement.grouped = value : undefined;
	}

	/** @description Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items. */
	@Input()
	get groupMember(): string | null {
		return this.nativeElement ? this.nativeElement.groupMember : undefined;
	}
	set groupMember(value: string | null) {
		this.nativeElement ? this.nativeElement.groupMember = value : undefined;
	}

	/** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
	@Input()
	get hint(): string {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		this.nativeElement ? this.nativeElement.hint = value : undefined;
	}

	/** @description Determines the visibility of the horizontal Scroll bar inside the drop down. */
	@Input()
	get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility | string {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility | string) {
		this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
	}

	/** @description Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input. */
	@Input()
	get inputMember(): string {
		return this.nativeElement ? this.nativeElement.inputMember : undefined;
	}
	set inputMember(value: string) {
		this.nativeElement ? this.nativeElement.inputMember = value : undefined;
	}

	/** @description IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed. */
	@Input()
	get incrementalSearchDelay(): number {
		return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
	}
	set incrementalSearchDelay(value: number) {
		this.nativeElement ? this.nativeElement.incrementalSearchDelay = value : undefined;
	}

	/** @description Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search. */
	@Input()
	get incrementalSearchMode(): SearchMode | string {
		return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
	}
	set incrementalSearchMode(value: SearchMode | string) {
		this.nativeElement ? this.nativeElement.incrementalSearchMode = value : undefined;
	}

	/** @description Sets the height for all list items. Used only when virtualization is enabled. */
	@Input()
	get itemHeight(): number | null {
		return this.nativeElement ? this.nativeElement.itemHeight : undefined;
	}
	set itemHeight(value: number | null) {
		this.nativeElement ? this.nativeElement.itemHeight = value : undefined;
	}

	/** @description Determines the item width measuring algorithm. */
	@Input()
	get itemMeasureMode(): ListItemMeasureMode | string {
		return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
	}
	set itemMeasureMode(value: ListItemMeasureMode | string) {
		this.nativeElement ? this.nativeElement.itemMeasureMode = value : undefined;
	}

	/** @description A getter that returns an array of all List items inside the drop down. */
	@Input()
	get items(): any {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: any) {
		this.nativeElement ? this.nativeElement.items = value : undefined;
	}

	/** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. It's used to set a customize the content of the list items. */
	@Input()
	get itemTemplate(): any {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
	}

	/** @description Sets a little text label above the element. */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
	@Input()
	get loadingIndicatorPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
	}
	set loadingIndicatorPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
	}

	/** @description Determines the position of the loading indicator. */
	@Input()
	get loadingIndicatorPosition(): VerticalAlignment | string {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
	}
	set loadingIndicatorPosition(value: VerticalAlignment | string) {
		this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Determines whether the popup is opened or not. */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Determines the element's placeholder, displayed in the element's selection field. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description Disables user interaction with the element. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode. */
	@Input()
	get resizeIndicator(): boolean {
		return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
	}
	set resizeIndicator(value: boolean) {
		this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
	}

	/** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
	@Input()
	get resizeMode(): ResizeMode | string {
		return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	}
	set resizeMode(value: ResizeMode | string) {
		this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
	}

	/** @description Determines what will be displayed in the dropDown selection field. */
	@Input()
	get selectionDisplayMode(): SelectionDisplayMode | string {
		return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
	}
	set selectionDisplayMode(value: SelectionDisplayMode | string) {
		this.nativeElement ? this.nativeElement.selectionDisplayMode = value : undefined;
	}

	/** @description Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected. */
	@Input()
	get selectedIndexes(): number[] {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value: number[]) {
		this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
	}

	/** @description Sets or gets elected indexes. Selected values represents the values of the items that should be selected. */
	@Input()
	get selectedValues(): string[] {
		return this.nativeElement ? this.nativeElement.selectedValues : undefined;
	}
	set selectedValues(value: string[]) {
		this.nativeElement ? this.nativeElement.selectedValues = value : undefined;
	}

	/** @description Determines how many items can be selected. */
	@Input()
	get selectionMode(): ListSelectionMode | string {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: ListSelectionMode | string) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description Determines whether the items are sorted alphabetically or not */
	@Input()
	get sorted(): boolean {
		return this.nativeElement ? this.nativeElement.sorted : undefined;
	}
	set sorted(value: boolean) {
		this.nativeElement ? this.nativeElement.sorted = value : undefined;
	}

	/** @description Determines sorting direction - ascending(asc) or descending(desc) */
	@Input()
	get sortDirection(): string {
		return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	}
	set sortDirection(value: string) {
		this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
	}

	/** @description Determines the theme for the element. Themes define the look of the elements. */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets a custom template for the content of the tokens when selectionDisplayMode is set to 'tokens'. */
	@Input()
	get tokenTemplate(): any {
		return this.nativeElement ? this.nativeElement.tokenTemplate : undefined;
	}
	set tokenTemplate(value: any) {
		this.nativeElement ? this.nativeElement.tokenTemplate = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[]. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
	@Input()
	get valueMember(): string {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value: string) {
		this.nativeElement ? this.nativeElement.valueMember = value : undefined;
	}

	/** @description Determines the visibility of the vertical scroll bar. */
	@Input()
	get verticalScrollBarVisibility(): VerticalScrollBarVisibility | string {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value: VerticalScrollBarVisibility | string) {
		this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
	}

	/** @description Determines weather or not Virtualization is used. Virtualization allows a huge amount of items to be loaded to the drop down while preserving the performance. For example a milion items can be loaded. */
	@Input()
	get virtualized(): boolean {
		return this.nativeElement ? this.nativeElement.virtualized : undefined;
	}
	set virtualized(value: boolean) {
		this.nativeElement ? this.nativeElement.virtualized = value : undefined;
	}

	/** @description This event is triggered when user clicks on the action button. The action button is only visible when dropDownOpenMode is set to 'dropDownbutton'.
	*  @param event. The custom event. 	*/
	@Output() onActionButtonClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
	*   addedItems - An array of List items that have been selected.
	*   disabled - A flag indicating whether or not the item that caused the change event is disabled.
	*   index - The index of the List item that triggered the event.
	*   label - The label of the List item that triggered the event.
	*   removedItems - An array of List items that have been unselected before the event was fired.
	*   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
	*   value - The value of the List item that triggered the event.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the drop down list is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when user clicks on the drop down button.
	*  @param event. The custom event. 	*/
	@Output() onDropDownButtonClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
	*   disabled - Indicates whether the List item that was clicked is disabled or not.
	*   index - Indicates the index of the List item that was clicked.
	*   label - The label of the List item that was clicked.
	*   selected - Indicates whether the List item that was clicked is selected or not.
	*   value - The value of the List item that was clicked.
	*/
	@Output() onItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the drop down list is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when user starts resizing the drop down.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	@Output() onResizeStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the resizing of the drop down is finished.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	@Output() onResizeEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user scrolls to the end of the dropDown list.
	*  @param event. The custom event. 	*/
	@Output() onScrollBottomReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user scrolls to the start of the dropDown list.
	*  @param event. The custom event. 	*/
	@Output() onScrollTopReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Appends a ListItem to the end of the list of items inside element. 
	* @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
	* @returns {Node}
  */
	public async appendChild(node): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.appendChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Removes all items from the drop down list. 
	*/
    public clearItems(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearItems();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearItems();
            });
        }
    }

	/** @description Unselects all items. 
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

	/** @description Closes the dropDown list. 
	*/
    public close(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }

	/** @description Ensures the desired item is visible by scrolling to it. 
	* @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
	*/
    public ensureVisible(item: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(item);
            });
        }
    }

	/** @description Returns an item instance from the dropDown list. 
	* @param {string} value. The value of an item from the drop down list.
	* @returns {HTMLElement}
  */
	public async getItem(value): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItem(value);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Inserts a new item at a specified position. 
	* @param {number} position. The position where the item must be inserted.
	* @param {any} value. The value of the new item.
	*/
    public insert(position: number, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(position, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(position, value);
            });
        }
    }

	/** @description Inserts a new ListItem before another in the list. 
	* @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
	* @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
	* @returns {Node}
  */
	public async insertBefore(node, referenceNode): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.insertBefore(node, referenceNode);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Opens the dropDown list. 
	*/
    public open(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }

	/** @description Removes an item at a specified position. 
	* @param {number} position. The position of the removed item.
	*/
    public removeAt(position: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(position);
            });
        }
    }

	/** @description Removes a ListItem from the list of items inside element. 
	* @param {Node} node. A ListItem element that is part of the list of items inside the element.
	* @returns {Node}
  */
	public async removeChild(node): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.removeChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Selects an item from the dropDown list.  
	* @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
	*/
    public select(item: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(item);
            });
        }
    }

	/** @description Unselects an item from the dropDown list.  
	* @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
	*/
    public unselect(item: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(item);
            });
        }
    }

	/** @description Updates an item from the dropDown list. 
	* @param {number} position. The position where the item must be updated.
	* @param {any} value. The value of the updated item.
	*/
    public update(position: number, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(position, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(position, value);
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

	_initialChange = true; 

	get ngValue(): any {
		if (!this.nativeElement) {
			return null;
		}

		if (this.selectedValues && this.selectedValues.length > 0) {
			const value = this.selectedValues.length === 1 ? this.nativeElement.selectedValues[0] : this.nativeElement.selectedValues;
			return value;
		}
        return null;
		const value = this.nativeElement.value;
		return value;
	}

	set ngValue(value: any) {
		if (this.nativeElement) {
		    this.writeValue(value);
		}
	}

	writeValue(value: any): void {
        const that = this;
        const normalizedValue = value == null ? '' : value;

		that.nativeElement.whenRendered(() => {
            that.nativeElement.$.listBox.isInitialized = that._initialChange ? false : true;
			that.clearSelection();
            if (Array.isArray(normalizedValue)) {
                value.forEach((currentValue: any) => this.select(currentValue));
                }
                else {
                    that.select(normalizedValue);
                }
            that.nativeElement.$.listBox.isInitialized = true;
			that.nativeElement._applySelection();
			if (that._initialChange === false) {
               if (that.selectedValues && that.selectedValues.length > 1) {
                    that._onChange(that.selectedValues);
                }
                else {
                    that._onChange((that.selectedValues && that.selectedValues.length > 0) ? that.selectedValues[0] : null);
                }
            }
		});
	}

	registerOnChange(fn: any): void {
		this._onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this._onTouched = fn;
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
		that.eventHandlers['actionButtonClickHandler'] = (event: CustomEvent) => { that.onActionButtonClick.emit(event); }
		that.nativeElement.addEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['dropDownButtonClickHandler'] = (event: CustomEvent) => { that.onDropDownButtonClick.emit(event); }
		that.nativeElement.addEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);

		that.eventHandlers['itemClickHandler'] = (event: CustomEvent) => { that.onItemClick.emit(event); }
		that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['resizeStartHandler'] = (event: CustomEvent) => { that.onResizeStart.emit(event); }
		that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);

		that.eventHandlers['resizeEndHandler'] = (event: CustomEvent) => { that.onResizeEnd.emit(event); }
		that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);

		that.eventHandlers['scrollBottomReachedHandler'] = (event: CustomEvent) => { that.onScrollBottomReached.emit(event); }
		that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);

		that.eventHandlers['scrollTopReachedHandler'] = (event: CustomEvent) => { that.onScrollTopReached.emit(event); }
		that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);


        that.eventHandlers['changeModelHandler'] = (event: Event) =>
        {
            that._initialChange = false;
            that._onChange(that.nativeElement.selectedValues.length > 0 ? (that.nativeElement.selectedValues.length > 1 ? that.nativeElement.selectedValues : that.nativeElement.selectedValues[0]) : null);
        }
        that.eventHandlers['blurModelHandler'] = (event: Event) => {
            that._onTouched();
        };
        that.nativeElement.whenRendered(() => {
            if (that.nativeElement.querySelector('input')) {
                that.eventHandlers['keyupModelHandler'] = (event) => {
                    setTimeout(() => { that.eventHandlers['changeModelHandler'](event); }, 50);
                };

                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
		that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
		that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['actionButtonClickHandler']) {
			that.nativeElement.removeEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['dropDownButtonClickHandler']) {
			that.nativeElement.removeEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
		}

		if (that.eventHandlers['itemClickHandler']) {
			that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['resizeStartHandler']) {
			that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
		}

		if (that.eventHandlers['resizeEndHandler']) {
			that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
		}

		if (that.eventHandlers['scrollBottomReachedHandler']) {
			that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
		}

		if (that.eventHandlers['scrollTopReachedHandler']) {
			that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
		}

		if (that.eventHandlers['changeModelHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                  that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
		}
		if (that.eventHandlers['blurModelHandler']) {
			that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
		}
	}
}
