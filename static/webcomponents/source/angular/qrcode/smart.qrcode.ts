import { QRcode } from './../index';
import { QRcodeLabelPosition, QRcodeRenderAs, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { QRcodeLabelPosition, QRcodeRenderAs, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { QRcode } from './../index';


@Directive({
	exportAs: 'smart-qrcode',	selector: 'smart-qrcode, [smart-qrcode]'
})

export class QRcodeComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<QRcode>) {
		super(ref);
		this.nativeElement = ref.nativeElement as QRcode;
	}

	private eventHandlers: any[] = [];

	public nativeElement: QRcode;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <QRcode>document.createElement('smart-qrcode');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets the background color of the QR Code element. */
	@Input()
	get backgroundColor(): string {
		return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
	}
	set backgroundColor(value: string) {
		this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
	}

	/** @description Sets whether the QR Code label is visible. */
	@Input()
	get displayLabel(): boolean {
		return this.nativeElement ? this.nativeElement.displayLabel : undefined;
	}
	set displayLabel(value: boolean) {
		this.nativeElement ? this.nativeElement.displayLabel = value : undefined;
	}

	/** @description Sets an embedded image. */
	@Input()
	get embedImage(): string {
		return this.nativeElement ? this.nativeElement.embedImage : undefined;
	}
	set embedImage(value: string) {
		this.nativeElement ? this.nativeElement.embedImage = value : undefined;
	}

	/** @description Sets the error correction level. */
	@Input()
	get errorLevel(): string {
		return this.nativeElement ? this.nativeElement.errorLevel : undefined;
	}
	set errorLevel(value: string) {
		this.nativeElement ? this.nativeElement.errorLevel = value : undefined;
	}

	/** @description Sets the height of the embedded image. */
	@Input()
	get imageHeight(): number {
		return this.nativeElement ? this.nativeElement.imageHeight : undefined;
	}
	set imageHeight(value: number) {
		this.nativeElement ? this.nativeElement.imageHeight = value : undefined;
	}

	/** @description Sets the width of the embedded image. */
	@Input()
	get imageWidth(): number {
		return this.nativeElement ? this.nativeElement.imageWidth : undefined;
	}
	set imageWidth(value: number) {
		this.nativeElement ? this.nativeElement.imageWidth = value : undefined;
	}

	/** @description Sets the color of the QR Code label. */
	@Input()
	get labelColor(): string {
		return this.nativeElement ? this.nativeElement.labelColor : undefined;
	}
	set labelColor(value: string) {
		this.nativeElement ? this.nativeElement.labelColor = value : undefined;
	}

	/** @description Sets the font family of the QR Code label. */
	@Input()
	get labelFont(): string {
		return this.nativeElement ? this.nativeElement.labelFont : undefined;
	}
	set labelFont(value: string) {
		this.nativeElement ? this.nativeElement.labelFont = value : undefined;
	}

	/** @description Sets the font size of the QR Code label. */
	@Input()
	get labelFontSize(): number {
		return this.nativeElement ? this.nativeElement.labelFontSize : undefined;
	}
	set labelFontSize(value: number) {
		this.nativeElement ? this.nativeElement.labelFontSize = value : undefined;
	}

	/** @description Sets the bottom margin of the QR Code label. */
	@Input()
	get labelMarginBottom(): number {
		return this.nativeElement ? this.nativeElement.labelMarginBottom : undefined;
	}
	set labelMarginBottom(value: number) {
		this.nativeElement ? this.nativeElement.labelMarginBottom = value : undefined;
	}

	/** @description Sets the top margin of the QR Code label. */
	@Input()
	get labelMarginTop(): number {
		return this.nativeElement ? this.nativeElement.labelMarginTop : undefined;
	}
	set labelMarginTop(value: number) {
		this.nativeElement ? this.nativeElement.labelMarginTop = value : undefined;
	}

	/** @description Sets the position of the QR Code label. */
	@Input()
	get labelPosition(): QRcodeLabelPosition | string {
		return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	}
	set labelPosition(value: QRcodeLabelPosition | string) {
		this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
	}

	/** @description Sets the color of the QR Code lines. */
	@Input()
	get lineColor(): string {
		return this.nativeElement ? this.nativeElement.lineColor : undefined;
	}
	set lineColor(value: string) {
		this.nativeElement ? this.nativeElement.lineColor = value : undefined;
	}

	/** @description Sets the width of the QR Code square. */
	@Input()
	get squareWidth(): number {
		return this.nativeElement ? this.nativeElement.squareWidth : undefined;
	}
	set squareWidth(value: number) {
		this.nativeElement ? this.nativeElement.squareWidth = value : undefined;
	}

	/** @description Sets the rendering mode of the QR Code. */
	@Input()
	get renderAs(): QRcodeRenderAs | string {
		return this.nativeElement ? this.nativeElement.renderAs : undefined;
	}
	set renderAs(value: QRcodeRenderAs | string) {
		this.nativeElement ? this.nativeElement.renderAs = value : undefined;
	}

	/** @description Sets or gets the value of the QR Code. */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description This event is triggered when the value of the QR Code is invalid. 
	*  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
	*   invalidCharacters - An array indicating the invalid characters.
	*   lengthValidity - A boolean indicating the length validity.
	*   patternValidity - A boolean indicating the pattern validity.
	*   value - the invalid value of the QR Code.
	*/
	@Output() onInvalid: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Exports the QR Code. 
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

	/** @description Gets the base64 string of the QR Code 
	* @param {string} format. The dataURL format of the string - svg, png, jpg
	* @returns {string}
  */
	public async getDataURL(format): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getDataURL(format);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the base64 string of the QR Code 
	* @param {string} format. The dataURL format of the string - svg, png, jpg
	* @returns {any}
  */
	public async getDataURLAsync(format): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getDataURLAsync(format);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the validity of the QR Code 
	* @returns {boolean}
  */
	public async isValid(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.isValid();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
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
		that.eventHandlers['invalidHandler'] = (event: CustomEvent) => { that.onInvalid.emit(event); }
		that.nativeElement.addEventListener('invalid', that.eventHandlers['invalidHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['invalidHandler']) {
			that.nativeElement.removeEventListener('invalid', that.eventHandlers['invalidHandler']);
		}

	}
}
