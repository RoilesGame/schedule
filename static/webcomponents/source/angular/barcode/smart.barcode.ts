import { Barcode } from './../index';
import { BarcodeLabelPosition, BarcodeRenderAs, BarcodeType, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { BarcodeLabelPosition, BarcodeRenderAs, BarcodeType, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Barcode } from './../index';


@Directive({
	exportAs: 'smart-barcode',	selector: 'smart-barcode, [smart-barcode]'
})

export class BarcodeComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Barcode>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Barcode;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Barcode;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Barcode>document.createElement('smart-barcode');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets the background color of the barcode element. */
	@Input()
	get backgroundColor(): string {
		return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
	}
	set backgroundColor(value: string) {
		this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
	}

	/** @description Sets whether the barcode label is visible. */
	@Input()
	get displayLabel(): boolean {
		return this.nativeElement ? this.nativeElement.displayLabel : undefined;
	}
	set displayLabel(value: boolean) {
		this.nativeElement ? this.nativeElement.displayLabel = value : undefined;
	}

	/** @description Sets the color of the barcode label. */
	@Input()
	get labelColor(): string {
		return this.nativeElement ? this.nativeElement.labelColor : undefined;
	}
	set labelColor(value: string) {
		this.nativeElement ? this.nativeElement.labelColor = value : undefined;
	}

	/** @description Sets the font family of the barcode label. */
	@Input()
	get labelFont(): string {
		return this.nativeElement ? this.nativeElement.labelFont : undefined;
	}
	set labelFont(value: string) {
		this.nativeElement ? this.nativeElement.labelFont = value : undefined;
	}

	/** @description Sets the font size of the barcode label. */
	@Input()
	get labelFontSize(): number {
		return this.nativeElement ? this.nativeElement.labelFontSize : undefined;
	}
	set labelFontSize(value: number) {
		this.nativeElement ? this.nativeElement.labelFontSize = value : undefined;
	}

	/** @description Sets the bottom margin of the barcode label. */
	@Input()
	get labelMarginBottom(): number {
		return this.nativeElement ? this.nativeElement.labelMarginBottom : undefined;
	}
	set labelMarginBottom(value: number) {
		this.nativeElement ? this.nativeElement.labelMarginBottom = value : undefined;
	}

	/** @description Sets the top margin of the barcode label. */
	@Input()
	get labelMarginTop(): number {
		return this.nativeElement ? this.nativeElement.labelMarginTop : undefined;
	}
	set labelMarginTop(value: number) {
		this.nativeElement ? this.nativeElement.labelMarginTop = value : undefined;
	}

	/** @description Sets the position of the barcode label. */
	@Input()
	get labelPosition(): BarcodeLabelPosition | string {
		return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	}
	set labelPosition(value: BarcodeLabelPosition | string) {
		this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
	}

	/** @description Sets the color of the barcode lines. */
	@Input()
	get lineColor(): string {
		return this.nativeElement ? this.nativeElement.lineColor : undefined;
	}
	set lineColor(value: string) {
		this.nativeElement ? this.nativeElement.lineColor = value : undefined;
	}

	/** @description Sets the height of the barcode line. */
	@Input()
	get lineHeight(): number {
		return this.nativeElement ? this.nativeElement.lineHeight : undefined;
	}
	set lineHeight(value: number) {
		this.nativeElement ? this.nativeElement.lineHeight = value : undefined;
	}

	/** @description Sets the width of the barcode line. */
	@Input()
	get lineWidth(): number {
		return this.nativeElement ? this.nativeElement.lineWidth : undefined;
	}
	set lineWidth(value: number) {
		this.nativeElement ? this.nativeElement.lineWidth = value : undefined;
	}

	/** @description Sets the rendering mode of the barcode. */
	@Input()
	get renderAs(): BarcodeRenderAs | string {
		return this.nativeElement ? this.nativeElement.renderAs : undefined;
	}
	set renderAs(value: BarcodeRenderAs | string) {
		this.nativeElement ? this.nativeElement.renderAs = value : undefined;
	}

	/** @description Sets the barcode type */
	@Input()
	get type(): BarcodeType | string {
		return this.nativeElement ? this.nativeElement.type : undefined;
	}
	set type(value: BarcodeType | string) {
		this.nativeElement ? this.nativeElement.type = value : undefined;
	}

	/** @description Sets or gets the value of the barcode. */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description This event is triggered when the value of the barcode is invalid. 
	*  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
	*   invalidCharacters - An array indicating the invalid characters.
	*   lengthValidity - A boolean indicating the length validity.
	*   patternValidity - A boolean indicating the pattern validity.
	*   value - the invalid value of the barcode.
	*/
	@Output() onInvalid: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Exports the barcode. 
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

	/** @description Gets the base64 string of the barcode 
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

	/** @description Gets the base64 string of the barcode 
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

	/** @description Gets the validity of the barcode 
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
