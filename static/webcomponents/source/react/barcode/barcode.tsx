import React from "react";
import { BarcodeProperties } from "./../../index";
import { BarcodeLabelPosition, BarcodeRenderAs, BarcodeType} from './../../index';
export { BarcodeProperties } from "./../../index";
export { BarcodeLabelPosition, BarcodeRenderAs, BarcodeType} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface BarcodeProps extends BarcodeProperties {
    className?: string;
    style?: React.CSSProperties;

	onInvalid?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Barcodes encodes text value in a specific pattern.
*/
export class Barcode extends React.Component<React.HTMLAttributes<Element> & BarcodeProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Barcode' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets the background color of the barcode element.
	*	Property type: string
	*/
	get backgroundColor(): string  {
		return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
	}
	set backgroundColor(value: string) {
		if (this.nativeElement) {
			this.nativeElement.backgroundColor = value;
		}
	}

	/** Sets whether the barcode label is visible.
	*	Property type: boolean
	*/
	get displayLabel(): boolean  {
		return this.nativeElement ? this.nativeElement.displayLabel : undefined;
	}
	set displayLabel(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.displayLabel = value;
		}
	}

	/** Sets the color of the barcode label.
	*	Property type: string
	*/
	get labelColor(): string  {
		return this.nativeElement ? this.nativeElement.labelColor : undefined;
	}
	set labelColor(value: string) {
		if (this.nativeElement) {
			this.nativeElement.labelColor = value;
		}
	}

	/** Sets the font family of the barcode label.
	*	Property type: string
	*/
	get labelFont(): string  {
		return this.nativeElement ? this.nativeElement.labelFont : undefined;
	}
	set labelFont(value: string) {
		if (this.nativeElement) {
			this.nativeElement.labelFont = value;
		}
	}

	/** Sets the font size of the barcode label.
	*	Property type: number
	*/
	get labelFontSize(): number  {
		return this.nativeElement ? this.nativeElement.labelFontSize : undefined;
	}
	set labelFontSize(value: number) {
		if (this.nativeElement) {
			this.nativeElement.labelFontSize = value;
		}
	}

	/** Sets the bottom margin of the barcode label.
	*	Property type: number
	*/
	get labelMarginBottom(): number  {
		return this.nativeElement ? this.nativeElement.labelMarginBottom : undefined;
	}
	set labelMarginBottom(value: number) {
		if (this.nativeElement) {
			this.nativeElement.labelMarginBottom = value;
		}
	}

	/** Sets the top margin of the barcode label.
	*	Property type: number
	*/
	get labelMarginTop(): number  {
		return this.nativeElement ? this.nativeElement.labelMarginTop : undefined;
	}
	set labelMarginTop(value: number) {
		if (this.nativeElement) {
			this.nativeElement.labelMarginTop = value;
		}
	}

	/** Sets the position of the barcode label.
	*	Property type: BarcodeLabelPosition | string
	*/
	get labelPosition(): BarcodeLabelPosition | string  {
		return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	}
	set labelPosition(value: BarcodeLabelPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.labelPosition = value;
		}
	}

	/** Sets the color of the barcode lines.
	*	Property type: string
	*/
	get lineColor(): string  {
		return this.nativeElement ? this.nativeElement.lineColor : undefined;
	}
	set lineColor(value: string) {
		if (this.nativeElement) {
			this.nativeElement.lineColor = value;
		}
	}

	/** Sets the height of the barcode line.
	*	Property type: number
	*/
	get lineHeight(): number  {
		return this.nativeElement ? this.nativeElement.lineHeight : undefined;
	}
	set lineHeight(value: number) {
		if (this.nativeElement) {
			this.nativeElement.lineHeight = value;
		}
	}

	/** Sets the width of the barcode line.
	*	Property type: number
	*/
	get lineWidth(): number  {
		return this.nativeElement ? this.nativeElement.lineWidth : undefined;
	}
	set lineWidth(value: number) {
		if (this.nativeElement) {
			this.nativeElement.lineWidth = value;
		}
	}

	/** Sets the rendering mode of the barcode.
	*	Property type: BarcodeRenderAs | string
	*/
	get renderAs(): BarcodeRenderAs | string  {
		return this.nativeElement ? this.nativeElement.renderAs : undefined;
	}
	set renderAs(value: BarcodeRenderAs | string) {
		if (this.nativeElement) {
			this.nativeElement.renderAs = value;
		}
	}

	/** Sets the barcode type
	*	Property type: BarcodeType | string
	*/
	get type(): BarcodeType | string  {
		return this.nativeElement ? this.nativeElement.type : undefined;
	}
	set type(value: BarcodeType | string) {
		if (this.nativeElement) {
			this.nativeElement.type = value;
		}
	}

	/** Sets or gets the value of the barcode.
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
		return ["backgroundColor","displayLabel","labelColor","labelFont","labelFontSize","labelMarginBottom","labelMarginTop","labelPosition","lineColor","lineHeight","lineWidth","renderAs","type","value"];
	}
	/**  This event is triggered when the value of the barcode is invalid. 
	*  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
	*   invalidCharacters - An array indicating the invalid characters.
	*   lengthValidity - A boolean indicating the length validity.
	*   patternValidity - A boolean indicating the pattern validity.
	*   value - the invalid value of the barcode.
	*/
	onInvalid?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onInvalid","onCreate","onReady"];
	}
	/** Exports the barcode. 
	* @param {string} format. The format of the exported file - svg, png, jpg
	* @param {string} fileName?. The name of the exported file
	*/
    public export(format: string, fileName?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.export(format, fileName);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.export(format, fileName);
            });
        }
    }

	/** Gets the base64 string of the barcode 
	* @param {string} format. The dataURL format of the string - svg, png, jpg
	* @returns {string}
  */
	public getDataURL(format:string) : any {
        const result: any = this.nativeElement.getDataURL(format);
        return result;
    }

	/** Gets the base64 string of the barcode 
	* @param {string} format. The dataURL format of the string - svg, png, jpg
	* @returns {any}
  */
	public getDataURLAsync(format:string) : any {
        const result: any = this.nativeElement.getDataURLAsync(format);
        return result;
    }

	/** Gets the validity of the barcode 
	* @returns {boolean}
  */
	public isValid() : any {
        const result: any = this.nativeElement.isValid();
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
			React.createElement("smart-barcode", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Barcode;
