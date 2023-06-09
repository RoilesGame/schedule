import { RepeatButton } from './../index';
import { Animation, ClickMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ClickMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { RepeatButton } from './../index';


@Directive({
	exportAs: 'smart-repeat-button',	selector: 'smart-repeat-button, [smart-repeat-button]'
})

export class RepeatButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<RepeatButton>) {
		super(ref);
		this.nativeElement = ref.nativeElement as RepeatButton;
	}

	private eventHandlers: any[] = [];

	public nativeElement: RepeatButton;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <RepeatButton>document.createElement('smart-repeat-button');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation | string {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation | string) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Sets the click mode of the button. */
	@Input()
	get clickMode(): ClickMode | string {
		return this.nativeElement ? this.nativeElement.clickMode : undefined;
	}
	set clickMode(value: ClickMode | string) {
		this.nativeElement ? this.nativeElement.clickMode = value : undefined;
	}

	/** @description Sets the delay between repeats in miliseconds. */
	@Input()
	get delay(): number {
		return this.nativeElement ? this.nativeElement.delay : undefined;
	}
	set delay(value: number) {
		this.nativeElement ? this.nativeElement.delay = value : undefined;
	}

	/** @description Enables or disables the ratio button. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets a delay before the first repeat iteration in miliseconds. */
	@Input()
	get initialDelay(): number {
		return this.nativeElement ? this.nativeElement.initialDelay : undefined;
	}
	set initialDelay(value: number) {
		this.nativeElement ? this.nativeElement.initialDelay = value : undefined;
	}

	/** @description Sets the inner HTML of the element. */
	@Input()
	get innerHTML(): string {
		return this.nativeElement ? this.nativeElement.innerHTML : undefined;
	}
	set innerHTML(value: string) {
		this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Callback, related to localization module.  */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Sets an object with string values, related to the different states of passwords strength. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets the widget's name. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description If the custom element is readonly, it cannot be interacted with. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Sets or gets the widget's value. */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description This event is triggered when the element is clicked.
	*  @param event. The custom event. 	*/
	@Output() onClick: EventEmitter<CustomEvent> = new EventEmitter();


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
		that.eventHandlers['clickHandler'] = (event: CustomEvent) => { that.onClick.emit(event); }
		that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['clickHandler']) {
			that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
		}

	}
}
