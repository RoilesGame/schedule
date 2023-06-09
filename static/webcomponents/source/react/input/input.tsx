import React from "react";
import { InputProperties } from "./../../index";
import { DropDownButtonPosition, InputQueryMode} from './../../index';
export { InputProperties } from "./../../index";
export { DropDownButtonPosition, InputQueryMode} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface InputProps extends InputProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onChanging?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onItemClick?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Input specifies an input field where the user can enter data. Auto-complete options are displayed for easier input.
*/
export class Input extends React.Component<React.HTMLAttributes<Element> & InputProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Input' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
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

	/** Determines the data source that will be loaded to the Input. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described. The data source item object may have the following fields: 'label' - string, 'value' - string or number, 'selected' - boolean, 'prefix' - string, 'suffix' - string, 'title' - string. The 'prefix' and 'suffix' add html before and after the label.
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

	/** Enables or disables the element.
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

	/** Sets additional class names to the Input drop down.
	*	Property type: any
	*/
	get dropDownClassList(): any  {
		return this.nativeElement ? this.nativeElement.dropDownClassList : undefined;
	}
	set dropDownClassList(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dropDownClassList = value;
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

	/** Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down.
	*	Property type: number
	*/
	get items(): number  {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: number) {
		if (this.nativeElement) {
			this.nativeElement.items = value;
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

	/** Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items.
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

	/** Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
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

	/** Determines whether the drop down is opened or not.
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

	/** Determines the placeholder of the input.
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

	/** Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied.
	*	Property type: string | number
	*/
	get query(): string | number  {
		return this.nativeElement ? this.nativeElement.query : undefined;
	}
	set query(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.query = value;
		}
	}

	/** Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation.
	*	Property type: InputQueryMode | string
	*/
	get queryMode(): InputQueryMode | string  {
		return this.nativeElement ? this.nativeElement.queryMode : undefined;
	}
	set queryMode(value: InputQueryMode | string) {
		if (this.nativeElement) {
			this.nativeElement.queryMode = value;
		}
	}

	/** Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
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

	/** Determines the sorting algorithm - ascending(asc) or descending(desc) if sort is enabled.
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

	/** Determines the selected index.
	*	Property type: number
	*/
	get selectedIndex(): number  {
		return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	}
	set selectedIndex(value: number) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndex = value;
		}
	}

	/** Determines the selected value.
	*	Property type: string | number
	*/
	get selectedValue(): string | number  {
		return this.nativeElement ? this.nativeElement.selectedValue : undefined;
	}
	set selectedValue(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.selectedValue = value;
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

	/** Determines the input type. Input type determines what input can be entered.
	*	Property type: string
	*/
	get type(): string  {
		return this.nativeElement ? this.nativeElement.type : undefined;
	}
	set type(value: string) {
		if (this.nativeElement) {
			this.nativeElement.type = value;
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

	/** Sets or gets the value of the element.
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["autoCompleteDelay","dataSource","disabled","dropDownClassList","dropDownButtonPosition","dropDownHeight","dropDownWidth","inputPurpose","items","locale","localizeFormatFunction","messages","minLength","name","opened","placeholder","query","queryMode","readonly","rightToLeft","sorted","sortDirection","selectedIndex","selectedValue","theme","type","unfocusable","value"];
	}
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
	*   label - The label of the new selected item.
	*   oldLabel - The label of the item that was previously selected before the event was triggered.
	*   oldValue - The value of the item that was previously selected before the event was triggered.
	*   value - The value of the new selected item.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered on each key up event of the Input, if the value is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previous value before it was changed.
	*   value - The new value.
	*/
	onChanging?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the popup is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the popup is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user clicks on an item from the popup list.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
	*   item - The item that was clicked.
	*   label - The label of the item that was clicked.
	*   value - The value of the item that was clicked.
	*/
	onItemClick?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onChanging","onOpen","onClose","onItemClick","onCreate","onReady"];
	}
	/** Closes the drop down. 
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

	/** Ensures that the active ( selected ) item is always visible. 
	*/
    public ensureVisible(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible();
            });
        }
    }

	/** Opens the drop down. 
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

	/** Focuses and selects the text inside the input or if it is readonly then the element is focused. 
	*/
    public select(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select();
            });
        }
    }

	/** Selects an item by value. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'], you can use 'Item 1' as an argument. If your data source is an object with label and value, pass the value when you call selectItem. 
	* @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
	*/
    public selectItem(value: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectItem(value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectItem(value);
            });
        }
    }

	/** Gets an item by value. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'], you can use 'Item 1' as an argument. If your data source is an object with label and value, pass the value when you call selectItem. 
	* @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
	* @returns {any}
  */
	public getItem(value:string | number) : any {
        const result: any = this.nativeElement.getItem(value);
        return result;
    }

	/** Gets the selected item. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'] and the user selected the second item, the method returns 'Item 2'. If your data source is an object with label and value, the returned value would be the 'value'. 
	* @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
	* @returns {any}
  */
	public getSelectedItem(value:string | number) : any {
        const result: any = this.nativeElement.getSelectedItem(value);
        return result;
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
			React.createElement("smart-input", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Input;
