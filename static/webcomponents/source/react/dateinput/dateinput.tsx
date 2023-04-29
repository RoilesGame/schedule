import React from "react";
import { DateInputProperties } from "./../../index";
import { DropDownButtonPosition} from './../../index';
export { DateInputProperties } from "./../../index";
export { DropDownButtonPosition} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface DateInputProps extends DateInputProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 DateInput specifies an input field where the user can enter a date. It also has a popup with a Calendar that allows to pick a date.
*/
export class DateInput extends React.Component<React.HTMLAttributes<Element> & DateInputProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'DateInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it.
	*	Property type: boolean
	*/
	get autoClose(): boolean  {
		return this.nativeElement ? this.nativeElement.autoClose : undefined;
	}
	set autoClose(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoClose = value;
		}
	}

	/** Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true.
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

	/** Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. Intl.DateTimeFormat is used to format date strings in JavaScript. By default the date format is 'numeric'. The default value is: { day: 'numeric', month: 'numeric', year: 'numeric' }
	*	Property type: any
	*/
	get dateTimeFormat(): any  {
		return this.nativeElement ? this.nativeElement.dateTimeFormat : undefined;
	}
	set dateTimeFormat(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dateTimeFormat = value;
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

	/** Sets the height of the drop down. By default it's set to 'auto'.
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

	/** Sets the format string. When this property is set, the dateTimeFormat property will be disabled and the formatting will use the value of the formatString. Built-in Date formats:// short date pattern'd' - 'M/d/yyyy',// long date pattern'D' - 'dddd, MMMM dd, yyyy',// short time pattern't' - 'h:mm tt',// long time pattern'T' - 'h:mm:ss tt',// long date, short time pattern'f' - 'dddd, MMMM dd, yyyy h:mm tt',// long date, long time pattern'F' - 'dddd, MMMM dd, yyyy h:mm:ss tt',// month/day pattern'M' - 'MMMM dd',// month/year pattern'Y' - 'yyyy MMMM',// S is a sortable format that does not vary by culture'S' - 'yyyy'-'MM'-'dd'T'HH':'mm':'ss'Date format strings:'d'-the day of the month;'dd'-the day of the month'ddd'-the abbreviated name of the day of the week'dddd'- the full name of the day of the week'h'-the hour, using a 12-hour clock from 1 to 12'hh'-the hour, using a 12-hour clock from 01 to 12'H'-the hour, using a 24-hour clock from 0 to 23'HH'- the hour, using a 24-hour clock from 00 to 23'm'-the minute, from 0 through 59'mm'-the minutes,from 00 though59'M'- the month, from 1 through 12'MM'- the month, from 01 through 12'MMM'-the abbreviated name of the month'MMMM'-the full name of the month's'-the second, from 0 through 59'ss'-the second, from 00 through 59't'- the first character of the AM/PM designator'tt'-the AM/PM designator'y'- the year, from 0 to 99'yy'- the year, from 00 to 99'yyy'-the year, with a minimum of three digits'yyyy'-the year as a four-digit number;'yyyyy'-the year as a four-digit number.
	*	Property type: string
	*/
	get formatString(): string  {
		return this.nativeElement ? this.nativeElement.formatString : undefined;
	}
	set formatString(value: string) {
		if (this.nativeElement) {
			this.nativeElement.formatString = value;
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

	/** Determines the max date for the Calendar displayed inside the popup.
	*	Property type: any
	*/
	get max(): any  {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: any) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
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

	/** Determines the min date for the Calendar displayed inside the popup.
	*	Property type: any
	*/
	get min(): any  {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: any) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
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

	/** Sets or gets the value of the element. Expected value is: Date string, Date object or null.
	*	Property type: any
	*/
	get value(): any  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["autoClose","autoCloseDelay","dateTimeFormat","disabled","dropDownButtonPosition","dropDownHeight","dropDownWidth","formatString","inputPurpose","locale","localizeFormatFunction","max","messages","min","name","opened","placeholder","readonly","rightToLeft","theme","unfocusable","value"];
	}
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
	*   label - The label of the new selected item.
	*   oldLabel - The label of the item that was previously selected before the event was triggered.
	*   oldValue - The value of the item that was previously selected before the event was triggered.
	*   value - The value of the new selected item.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onCreate","onReady"];
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

	/** Selects the text inside the input or if it is readonly then the element is focused. 
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

	/** Returns the value in the desired format. 
	* @param {string | Date} value. The value to be formatted by the method. 
	* @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.DateTimeFormat valid properties.
	*/
    public getFormattedValue(value: string | Date, format?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.getFormattedValue(value, format);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getFormattedValue(value, format);
            });
        }
    }

	/** Returns the date of the input. 
	*/
    public getValue(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.getValue();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getValue();
            });
        }
    }

	/** Sets the date of the input. 
	* @param {string | Date} value. The value to be set. 
	*/
    public setValue(value: string | Date): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setValue(value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setValue(value);
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
			React.createElement("smart-date-input", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default DateInput;
