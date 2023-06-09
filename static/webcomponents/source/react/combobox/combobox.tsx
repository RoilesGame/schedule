import React from "react";
import { ComboBoxProperties } from "./../../index";
import { AutoComplete, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, ComboBoxEscKeyMode, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility} from './../../index';
import { ListItemProperties } from './../../index';
import { ListItem } from './listitem';
import { ListItemsGroupProperties } from './../../index';
import { ListItemsGroup } from './listitemsgroup';
export { ComboBoxProperties } from "./../../index";
export { AutoComplete, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, ComboBoxEscKeyMode, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility} from './../../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../../index";

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface ComboBoxProps extends ComboBoxProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onItemClick?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onResizeStart?: ((event?: Event) => void) | undefined;
	onResizeEnd?: ((event?: Event) => void) | undefined;
	onScrollBottomReached?: ((event?: Event) => void) | undefined;
	onScrollTopReached?: ((event?: Event) => void) | undefined;
	onTokenClick?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 ComboBox is the alternate for the HTML select tag with editable option. It supports data binding, auto-complete, filtering, grouping, cascading and more.
*/
export class ComboBox extends React.Component<React.HTMLAttributes<Element> & ComboBoxProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'ComboBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element.
	*	Property type: number
	*/
	get autoCloseDelay(): number  {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.autoCloseDelay = value;
		}
	}

	/** Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input.
	*	Property type: AutoComplete | string
	*/
	get autoComplete(): AutoComplete | string  {
		return this.nativeElement ? this.nativeElement.autoComplete : undefined;
	}
	set autoComplete(value: AutoComplete | string) {
		if (this.nativeElement) {
			this.nativeElement.autoComplete = value;
		}
	}

	/** Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
	*	Property type: number
	*/
	get autoCompleteDelay(): number  {
		return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
	}
	set autoCompleteDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.autoCompleteDelay = value;
		}
	}

	/** Allows the user to define a custom key name ( or multiple key names) to open that popup with.
	*	Property type: string[]
	*/
	get autoOpenShortcutKey(): string[]  {
		return this.nativeElement ? this.nativeElement.autoOpenShortcutKey : undefined;
	}
	set autoOpenShortcutKey(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.autoOpenShortcutKey = value;
		}
	}

	/** Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
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

	/** Enables or disables the combo box.
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

	/** Determines whether an indicator will appear during filtering and remote item loading.
	*	Property type: boolean
	*/
	get displayLoadingIndicator(): boolean  {
		return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
	}
	set displayLoadingIndicator(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.displayLoadingIndicator = value;
		}
	}

	/** Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property.
	*	Property type: string
	*/
	get displayMember(): string  {
		return this.nativeElement ? this.nativeElement.displayMember : undefined;
	}
	set displayMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.displayMember = value;
		}
	}

	/** Determines the drop down parent. The expected value is CSS Selector, ID or 'body'. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
	*	Property type: string
	*/
	get dropDownAppendTo(): string  {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: string) {
		if (this.nativeElement) {
			this.nativeElement.dropDownAppendTo = value;
		}
	}

	/** Determines the position of the drop down button.
	*	Property type: DropDownButtonPosition | string
	*/
	get dropDownButtonPosition(): DropDownButtonPosition | string  {
		return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
	}
	set dropDownButtonPosition(value: DropDownButtonPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.dropDownButtonPosition = value;
		}
	}

	/** Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownHeight(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownHeight = value;
		}
	}

	/** Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMaxHeight(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
	}
	set dropDownMaxHeight(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMaxHeight = value;
		}
	}

	/** Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMaxWidth(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
	}
	set dropDownMaxWidth(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMaxWidth = value;
		}
	}

	/** Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMinHeight(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
	}
	set dropDownMinHeight(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMinHeight = value;
		}
	}

	/** Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMinWidth(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
	}
	set dropDownMinWidth(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMinWidth = value;
		}
	}

	/** Determines how the drop down is going to open.
	*	Property type: DropDownOpenMode | string
	*/
	get dropDownOpenMode(): DropDownOpenMode | string  {
		return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
	}
	set dropDownOpenMode(value: DropDownOpenMode | string) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOpenMode = value;
		}
	}

	/** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM.
	*	Property type: boolean
	*/
	get dropDownOverlay(): boolean  {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOverlay = value;
		}
	}

	/** Determines the placeholder for the drop down, displayed when there are no items in it.
	*	Property type: string
	*/
	get dropDownPlaceholder(): string  {
		return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
	}
	set dropDownPlaceholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPlaceholder = value;
		}
	}

	/** Determines the position of the drop down when opened.
	*	Property type: DropDownPosition | string
	*/
	get dropDownPosition(): DropDownPosition | string  {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: DropDownPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPosition = value;
		}
	}

	/** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownWidth(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownWidth = value;
		}
	}

	/** Determines the behavior of the element when Escape key is pressed.
	*	Property type: ComboBoxEscKeyMode | string
	*/
	get escKeyMode(): ComboBoxEscKeyMode | string  {
		return this.nativeElement ? this.nativeElement.escKeyMode : undefined;
	}
	set escKeyMode(value: ComboBoxEscKeyMode | string) {
		if (this.nativeElement) {
			this.nativeElement.escKeyMode = value;
		}
	}

	/** Determines whether filtering is enabled.
	*	Property type: boolean
	*/
	get filterable(): boolean  {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.filterable = value;
		}
	}

	/** Determines the placeholder for the drop down list filter input field.
	*	Property type: string
	*/
	get filterInputPlaceholder(): string  {
		return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
	}
	set filterInputPlaceholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.filterInputPlaceholder = value;
		}
	}

	/** Determines the filtering mode of the Combo box.
	*	Property type: FilterMode | string
	*/
	get filterMode(): FilterMode | string  {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value: FilterMode | string) {
		if (this.nativeElement) {
			this.nativeElement.filterMode = value;
		}
	}

	/** If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
	*	Property type: boolean
	*/
	get grouped(): boolean  {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.grouped = value;
		}
	}

	/** Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
	*	Property type: string
	*/
	get groupMember(): string  {
		return this.nativeElement ? this.nativeElement.groupMember : undefined;
	}
	set groupMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.groupMember = value;
		}
	}

	/** Sets additional helper text below the element. The hint is visible only when the element is focused.
	*	Property type: string
	*/
	get hint(): string  {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Determines the visibility of the horizontal Scroll bar inside the drop down.
	*	Property type: HorizontalScrollBarVisibility | string
	*/
	get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility | string  {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility | string) {
		if (this.nativeElement) {
			this.nativeElement.horizontalScrollBarVisibility = value;
		}
	}

	/** Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
	*	Property type: string
	*/
	get inputMember(): string  {
		return this.nativeElement ? this.nativeElement.inputMember : undefined;
	}
	set inputMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.inputMember = value;
		}
	}

	/** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
	*	Property type: string
	*/
	get inputPurpose(): string  {
		return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
	}
	set inputPurpose(value: string) {
		if (this.nativeElement) {
			this.nativeElement.inputPurpose = value;
		}
	}

	/** IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
	*	Property type: number
	*/
	get incrementalSearchDelay(): number  {
		return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
	}
	set incrementalSearchDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.incrementalSearchDelay = value;
		}
	}

	/** Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search.
	*	Property type: SearchMode | string
	*/
	get incrementalSearchMode(): SearchMode | string  {
		return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
	}
	set incrementalSearchMode(value: SearchMode | string) {
		if (this.nativeElement) {
			this.nativeElement.incrementalSearchMode = value;
		}
	}

	/** Sets the height for all list items. Used only when virtualization is enabled.
	*	Property type: number
	*/
	get itemHeight(): number  {
		return this.nativeElement ? this.nativeElement.itemHeight : undefined;
	}
	set itemHeight(value: number) {
		if (this.nativeElement) {
			this.nativeElement.itemHeight = value;
		}
	}

	/** Determines the item width measuring algorithm.
	*	Property type: ListItemMeasureMode | string
	*/
	get itemMeasureMode(): ListItemMeasureMode | string  {
		return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
	}
	set itemMeasureMode(value: ListItemMeasureMode | string) {
		if (this.nativeElement) {
			this.nativeElement.itemMeasureMode = value;
		}
	}

	/** A getter that returns an array of all List items inside the drop down.
	*	Property type: {label: string, value: string}[]
	*/
	get items(): {label: string, value: string}[]  {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: {label: string, value: string}[]) {
		if (this.nativeElement) {
			this.nativeElement.items = value;
		}
	}

	/** The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items.
	*	Property type: any
	*/
	get itemTemplate(): any  {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.itemTemplate = value;
		}
	}

	/** Sets a little text label above the element.
	*	Property type: string
	*/
	get label(): string  {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
		}
	}

	/** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
	*	Property type: string
	*/
	get loadingIndicatorPlaceholder(): string  {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
	}
	set loadingIndicatorPlaceholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPlaceholder = value;
		}
	}

	/** Determines the position of the loading indicator.
	*	Property type: VerticalAlignment | string
	*/
	get loadingIndicatorPosition(): VerticalAlignment | string  {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
	}
	set loadingIndicatorPosition(value: VerticalAlignment | string) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPosition = value;
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

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
	*	Property type: any
	*/
	get localizeFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
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

	/** Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality
	*	Property type: number
	*/
	get minLength(): number  {
		return this.nativeElement ? this.nativeElement.minLength : undefined;
	}
	set minLength(value: number) {
		if (this.nativeElement) {
			this.nativeElement.minLength = value;
		}
	}

	/** Determines the maximum number of characters inside the input.
	*	Property type: number
	*/
	get maxLength(): number  {
		return this.nativeElement ? this.nativeElement.maxLength : undefined;
	}
	set maxLength(value: number) {
		if (this.nativeElement) {
			this.nativeElement.maxLength = value;
		}
	}

	/** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
	*	Property type: string
	*/
	get name(): string  {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** Determines whether the popup is opened or closed
	*	Property type: boolean
	*/
	get opened(): boolean  {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.opened = value;
		}
	}

	/** Determines the input's placeholder.
	*	Property type: string
	*/
	get placeholder(): string  {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.placeholder = value;
		}
	}

	/** Disables user interaction with the element.
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

	/** Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
	*	Property type: boolean
	*/
	get resizeIndicator(): boolean  {
		return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
	}
	set resizeIndicator(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.resizeIndicator = value;
		}
	}

	/** Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
	*	Property type: ResizeMode | string
	*/
	get resizeMode(): ResizeMode | string  {
		return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	}
	set resizeMode(value: ResizeMode | string) {
		if (this.nativeElement) {
			this.nativeElement.resizeMode = value;
		}
	}

	/** Determines what will be displayed in the input.
	*	Property type: SelectionDisplayMode | string
	*/
	get selectionDisplayMode(): SelectionDisplayMode | string  {
		return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
	}
	set selectionDisplayMode(value: SelectionDisplayMode | string) {
		if (this.nativeElement) {
			this.nativeElement.selectionDisplayMode = value;
		}
	}

	/** Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
	*	Property type: number[]
	*/
	get selectedIndexes(): number[]  {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndexes = value;
		}
	}

	/** Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
	*	Property type: string[]
	*/
	get selectedValues(): string[]  {
		return this.nativeElement ? this.nativeElement.selectedValues : undefined;
	}
	set selectedValues(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.selectedValues = value;
		}
	}

	/** Determines how many items can be selected.
	*	Property type: ListSelectionMode | string
	*/
	get selectionMode(): ListSelectionMode | string  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: ListSelectionMode | string) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Determines whether the items are sorted alphabetically or not
	*	Property type: boolean
	*/
	get sorted(): boolean  {
		return this.nativeElement ? this.nativeElement.sorted : undefined;
	}
	set sorted(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.sorted = value;
		}
	}

	/** Determines sorting direction - ascending(asc) or descending(desc)
	*	Property type: string
	*/
	get sortDirection(): string  {
		return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	}
	set sortDirection(value: string) {
		if (this.nativeElement) {
			this.nativeElement.sortDirection = value;
		}
	}

	/** Determines the theme for the element. Themes define the look of the elements.
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

	/** Sets a custom content for the tokens when selectionDisplayMode is set to 'tokens'. Tokens are used only for multiple selection.
	*	Property type: any
	*/
	get tokenTemplate(): any  {
		return this.nativeElement ? this.nativeElement.tokenTemplate : undefined;
	}
	set tokenTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.tokenTemplate = value;
		}
	}

	/** If is set to true, the element cannot be focused.
	*	Property type: boolean
	*/
	get unfocusable(): boolean  {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Sets or gets the value.
	*	Property type: string
	*/
	get value(): string  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
	*	Property type: string
	*/
	get valueMember(): string  {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.valueMember = value;
		}
	}

	/** Determines the visibility of the vertical scroll bar.
	*	Property type: VerticalScrollBarVisibility | string
	*/
	get verticalScrollBarVisibility(): VerticalScrollBarVisibility | string  {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value: VerticalScrollBarVisibility | string) {
		if (this.nativeElement) {
			this.nativeElement.verticalScrollBarVisibility = value;
		}
	}

	/** Determines weather or not Virtualization is used for the Combo box. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
	*	Property type: boolean
	*/
	get virtualized(): boolean  {
		return this.nativeElement ? this.nativeElement.virtualized : undefined;
	}
	set virtualized(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.virtualized = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["autoCloseDelay","autoComplete","autoCompleteDelay","autoOpenShortcutKey","dataSource","disabled","displayLoadingIndicator","displayMember","dropDownAppendTo","dropDownButtonPosition","dropDownHeight","dropDownMaxHeight","dropDownMaxWidth","dropDownMinHeight","dropDownMinWidth","dropDownOpenMode","dropDownOverlay","dropDownPlaceholder","dropDownPosition","dropDownWidth","escKeyMode","filterable","filterInputPlaceholder","filterMode","grouped","groupMember","hint","horizontalScrollBarVisibility","inputMember","inputPurpose","incrementalSearchDelay","incrementalSearchMode","itemHeight","itemMeasureMode","items","itemTemplate","label","loadingIndicatorPlaceholder","loadingIndicatorPosition","locale","localizeFormatFunction","messages","minLength","maxLength","name","opened","placeholder","readonly","rightToLeft","resizeIndicator","resizeMode","selectionDisplayMode","selectedIndexes","selectedValues","selectionMode","sorted","sortDirection","theme","tokenTemplate","unfocusable","value","valueMember","verticalScrollBarVisibility","virtualized"];
	}
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
	*   addedItems - An array of List items that have been selected.
	*   disabled - A flag indicating whether or not the item that caused the change event is disabled.
	*   index - The index of the List item that triggered the event.
	*   label - The label of the List item that triggered the event.
	*   removedItems - An array of List items that have been unselected before the event was fired.
	*   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
	*   value - The value of the List item that triggered the event.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the drop down list is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
	*   disabled - Indicates whether the List item that was clicked is disabled or not.
	*   index - Indicates the index of the List item that was clicked.
	*   label - The label of the List item that was clicked.
	*   selected - Indicates whether the List item that was clicked is selected or not.
	*   value - The value of the List item that was clicked.
	*/
	onItemClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the drop down list is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user starts resizing the drop down.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	onResizeStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the resizing of the drop down is finished.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	onResizeEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user scrolls to the end of the dropDown list.
	*  @param event. The custom event. 	*/
	onScrollBottomReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user scrolls to the start of the dropDown list.
	*  @param event. The custom event. 	*/
	onScrollTopReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a token item(pill) has been clicked. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onTokenClick?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onClose","onClosing","onItemClick","onOpen","onOpening","onResizeStart","onResizeEnd","onScrollBottomReached","onScrollTopReached","onTokenClick","onCreate","onReady"];
	}
	/** Appends a ListItem to the end of the list of items inside element. 
	* @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
	* @returns {Node}
  */
	public appendChild(node:Node) : any {
        const result: any = this.nativeElement.appendChild(node);
        return result;
    }

	/** Removes all items from the drop down list. 
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

	/** Unselects all items. 
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

	/** Closes the dropDown list. 
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

	/** Ensures the desired item is visible by scrolling to it. 
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

	/** Returns an item instance from the dropDown list. 
	* @param {string} value. The value of an item from the drop down list.
	* @returns {HTMLElement}
  */
	public getItem(value:string) : any {
        const result: any = this.nativeElement.getItem(value);
        return result;
    }

	/** Inserts a new item at a specified position. 
	* @param {number} position. The position where the item must be inserted.
	* @param {any} item. Describes the properties of the item that will be inserted.
	*/
    public insert(position: number, item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(position, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(position, item);
            });
        }
    }

	/** Inserts a new ListItem before another in the list. 
	* @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
	* @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
	* @returns {Node}
  */
	public insertBefore(node:Node, referenceNode:Node | null) : any {
        const result: any = this.nativeElement.insertBefore(node, referenceNode);
        return result;
    }

	/** Opens the dropDown list. 
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

	/** Removes an item at a specified position. 
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

	/** Removes a ListItem from the list of items inside element. 
	* @param {Node} node. A ListItem element that is part of the list of items inside the element.
	* @returns {Node}
  */
	public removeChild(node:Node) : any {
        const result: any = this.nativeElement.removeChild(node);
        return result;
    }

	/** Selects an item from the dropDown list.  
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

	/** Unselects an item from the dropDown list.  
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

	/** Updates an item from the dropDown list. 
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
			React.createElement("smart-combo-box", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default ComboBox;
