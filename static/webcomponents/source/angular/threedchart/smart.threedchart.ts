import { ThreeDChart } from './../index';
import { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartSymbolType, ThreeDChartType, ThreeDChartRangeSelectorSerieType, ThreeDChartXAxisType, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartBand, ThreeDChartFormatSettings, ThreeDChartSeriesGroupSerie, ThreeDChartLabels, ThreeDChartOffset, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartLines, ThreeDChartXAxis, ThreeDChartRangeSelector, ThreeDChartZAxis, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartSymbolType, ThreeDChartType, ThreeDChartRangeSelectorSerieType, ThreeDChartXAxisType, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartBand, ThreeDChartFormatSettings, ThreeDChartSeriesGroupSerie, ThreeDChartLabels, ThreeDChartOffset, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartLines, ThreeDChartXAxis, ThreeDChartRangeSelector, ThreeDChartZAxis, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { ThreeDChart } from './../index';


@Directive({
	exportAs: 'smart-3d-chart',	selector: 'smart-3d-chart, [smart-3d-chart]'
})

export class ThreeDChartComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<ThreeDChart>) {
		super(ref);
		this.nativeElement = ref.nativeElement as ThreeDChart;
	}

	private eventHandlers: any[] = [];

	public nativeElement: ThreeDChart;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <ThreeDChart>document.createElement('smart-3d-chart');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none'. */
	@Input()
	get animation(): Animation | string {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation | string) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Determines the rate of the animation. The default animation rate is 1 */
	@Input()
	get animationSpeed(): number {
		return this.nativeElement ? this.nativeElement.animationSpeed : undefined;
	}
	set animationSpeed(value: number) {
		this.nativeElement ? this.nativeElement.animationSpeed = value : undefined;
	}

	/** @description Sets whether the chart will rotate automatically. */
	@Input()
	get autoRotate(): boolean {
		return this.nativeElement ? this.nativeElement.autoRotate : undefined;
	}
	set autoRotate(value: boolean) {
		this.nativeElement ? this.nativeElement.autoRotate = value : undefined;
	}

	/** @description Sets the speed of the automatic rotation. */
	@Input()
	get autoRotateSpeed(): number {
		return this.nativeElement ? this.nativeElement.autoRotateSpeed : undefined;
	}
	set autoRotateSpeed(value: number) {
		this.nativeElement ? this.nativeElement.autoRotateSpeed = value : undefined;
	}

	/** @description Sets the chart's background color. For example: '#DDFFE8' */
	@Input()
	get backgroundColor(): string | null {
		return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
	}
	set backgroundColor(value: string | null) {
		this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
	}

	/** @description Sets the chart's background to a static linear gradient. The property must be set to an Array of Strings in the format: 'offset, color' */
	@Input()
	get backgroundGradient(): any[] {
		return this.nativeElement ? this.nativeElement.backgroundGradient : undefined;
	}
	set backgroundGradient(value: any[]) {
		this.nativeElement ? this.nativeElement.backgroundGradient = value : undefined;
	}

	/** @description Sets the chart's background to a static image. For example: 'https://www.htmlelements.com/demos/images/stars.jpg' */
	@Input()
	get backgroundImage(): string {
		return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
	}
	set backgroundImage(value: string) {
		this.nativeElement ? this.nativeElement.backgroundImage = value : undefined;
	}

	/** @description Sets the chart's background to a dynamic background image which rotates with the camera. The property must be set an Array of 6 images. All images must have aspect ratio 1:1 */
	@Input()
	get backgroundTexture(): any[] {
		return this.nativeElement ? this.nativeElement.backgroundTexture : undefined;
	}
	set backgroundTexture(value: any[]) {
		this.nativeElement ? this.nativeElement.backgroundTexture = value : undefined;
	}

	/** @description Sets the camera's position. The property must be set to an {x, y, z} object. */
	@Input()
	get cameraPosition(): ThreeDChartCameraPosition {
		return this.nativeElement ? this.nativeElement.cameraPosition : undefined;
	}
	set cameraPosition(value: ThreeDChartCameraPosition) {
		this.nativeElement ? this.nativeElement.cameraPosition = value : undefined;
	}

	/** @description Sets the intial camera zoom. The default value is 1 */
	@Input()
	get cameraZoom(): number {
		return this.nativeElement ? this.nativeElement.cameraZoom : undefined;
	}
	set cameraZoom(value: number) {
		this.nativeElement ? this.nativeElement.cameraZoom = value : undefined;
	}

	/** @description Sets the caption (title) of the chart. */
	@Input()
	get caption(): string {
		return this.nativeElement ? this.nativeElement.caption : undefined;
	}
	set caption(value: string) {
		this.nativeElement ? this.nativeElement.caption = value : undefined;
	}

	/** @description Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
	@Input()
	get colorScheme(): ThreeDChartColorScheme | string {
		return this.nativeElement ? this.nativeElement.colorScheme : undefined;
	}
	set colorScheme(value: ThreeDChartColorScheme | string) {
		this.nativeElement ? this.nativeElement.colorScheme = value : undefined;
	}

	/** @description Sets the chart's controls settings. */
	@Input()
	get controlsSettings(): any {
		return this.nativeElement ? this.nativeElement.controlsSettings : undefined;
	}
	set controlsSettings(value: any) {
		this.nativeElement ? this.nativeElement.controlsSettings = value : undefined;
	}

	/** @description Allows substituting default items with custom 3D Objects. The property must be set to an Array of Objects in the format: { groupIndex, serieIndex, itemIndex, modelUrl } */
	@Input()
	get customModels(): any[] {
		return this.nativeElement ? this.nativeElement.customModels : undefined;
	}
	set customModels(value: any[]) {
		this.nativeElement ? this.nativeElement.customModels = value : undefined;
	}

	/** @description Sets the chart's data source. */
	@Input()
	get dataSource(): any[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Sets the description text of the chart. */
	@Input()
	get description(): string {
		return this.nativeElement ? this.nativeElement.description : undefined;
	}
	set description(value: string) {
		this.nativeElement ? this.nativeElement.description = value : undefined;
	}

	/** @description Enables or disables the chart. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets whether the chart's toolbar is enabled. */
	@Input()
	get enableControlsToolbar(): boolean {
		return this.nativeElement ? this.nativeElement.enableControlsToolbar : undefined;
	}
	set enableControlsToolbar(value: boolean) {
		this.nativeElement ? this.nativeElement.enableControlsToolbar = value : undefined;
	}

	/** @description  */
	@Input()
	get controlsToolbarItems(): any {
		return this.nativeElement ? this.nativeElement.controlsToolbarItems : undefined;
	}
	set controlsToolbarItems(value: any) {
		this.nativeElement ? this.nativeElement.controlsToolbarItems = value : undefined;
	}

	/** @description Sets the chart's grid options. */
	@Input()
	get gridOptions(): any {
		return this.nativeElement ? this.nativeElement.gridOptions : undefined;
	}
	set gridOptions(value: any) {
		this.nativeElement ? this.nativeElement.gridOptions = value : undefined;
	}

	/** @description Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type */
	@Input()
	get legendIndex(): ThreeDChartLegendIndex | string {
		return this.nativeElement ? this.nativeElement.legendIndex : undefined;
	}
	set legendIndex(value: ThreeDChartLegendIndex | string) {
		this.nativeElement ? this.nativeElement.legendIndex = value : undefined;
	}

	/** @description Sets the legend's layout. */
	@Input()
	get legendLayout(): any {
		return this.nativeElement ? this.nativeElement.legendLayout : undefined;
	}
	set legendLayout(value: any) {
		this.nativeElement ? this.nativeElement.legendLayout = value : undefined;
	}

	/** @description Sets the light color of the 3D Scene. */
	@Input()
	get lightColor(): string {
		return this.nativeElement ? this.nativeElement.lightColor : undefined;
	}
	set lightColor(value: string) {
		this.nativeElement ? this.nativeElement.lightColor = value : undefined;
	}

	/** @description Sets or gets the locale. Used in conjunction with the property messages. */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets a value indicating whether the Chart's layout is mirrored. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines the selection mode. */
	@Input()
	get selectionMode(): ThreeDChartSelectionMode | string {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: ThreeDChartSelectionMode | string) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group. */
	@Input()
	get seriesGroups(): ThreeDChartSeriesGroup[] {
		return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
	}
	set seriesGroups(value: ThreeDChartSeriesGroup[]) {
		this.nativeElement ? this.nativeElement.seriesGroups = value : undefined;
	}

	/** @description Determines whether to show grid connecting lines when a chart item is hovered over. */
	@Input()
	get showConnectionLines(): boolean {
		return this.nativeElement ? this.nativeElement.showConnectionLines : undefined;
	}
	set showConnectionLines(value: boolean) {
		this.nativeElement ? this.nativeElement.showConnectionLines = value : undefined;
	}

	/** @description Determines whether to show or hide the chart series legend. */
	@Input()
	get showLegend(): boolean {
		return this.nativeElement ? this.nativeElement.showLegend : undefined;
	}
	set showLegend(value: boolean) {
		this.nativeElement ? this.nativeElement.showLegend = value : undefined;
	}

	/** @description Determines whether to show or hide the chart series legend table. */
	@Input()
	get showLegendTable(): boolean {
		return this.nativeElement ? this.nativeElement.showLegendTable : undefined;
	}
	set showLegendTable(value: boolean) {
		this.nativeElement ? this.nativeElement.showLegendTable = value : undefined;
	}

	/** @description Enables or disables the chart tooltips. */
	@Input()
	get showToolTips(): boolean {
		return this.nativeElement ? this.nativeElement.showToolTips : undefined;
	}
	set showToolTips(value: boolean) {
		this.nativeElement ? this.nativeElement.showToolTips = value : undefined;
	}

	/** @description Sets the padding of the chart's title (caption). */
	@Input()
	get titlePadding(): ThreeDChartPadding {
		return this.nativeElement ? this.nativeElement.titlePadding : undefined;
	}
	set titlePadding(value: ThreeDChartPadding) {
		this.nativeElement ? this.nativeElement.titlePadding = value : undefined;
	}

	/** @description Tooltip line color. By default it is set to the hovered item's color */
	@Input()
	get toolTipFormatFunction(): {(value?: any, index?: number, series?: any): string} {
		return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
	}
	set toolTipFormatFunction(value: {(value?: any, index?: number, series?: any): string}) {
		this.nativeElement ? this.nativeElement.toolTipFormatFunction = value : undefined;
	}

	/** @description An object with settings about the Chart's y-axis (value axis). */
	@Input()
	get toolTipLineColor(): string | null {
		return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
	}
	set toolTipLineColor(value: string | null) {
		this.nativeElement ? this.nativeElement.toolTipLineColor = value : undefined;
	}

	/** @description Sets the Chart's xAxis. */
	@Input()
	get valueAxis(): ThreeDChartValueAxis {
		return this.nativeElement ? this.nativeElement.valueAxis : undefined;
	}
	set valueAxis(value: ThreeDChartValueAxis) {
		this.nativeElement ? this.nativeElement.valueAxis = value : undefined;
	}

	/** @description Sets the Chart's zAxis. */
	@Input()
	get xAxis(): ThreeDChartXAxis {
		return this.nativeElement ? this.nativeElement.xAxis : undefined;
	}
	set xAxis(value: ThreeDChartXAxis) {
		this.nativeElement ? this.nativeElement.xAxis = value : undefined;
	}

	/** @description undefined */
	@Input()
	get zAxis(): ThreeDChartZAxis {
		return this.nativeElement ? this.nativeElement.zAxis : undefined;
	}
	set zAxis(value: ThreeDChartZAxis) {
		this.nativeElement ? this.nativeElement.zAxis = value : undefined;
	}

	/** @description The event is raised when the user clicks on a chart element.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	@Output() onItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when a chart element is shown.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	@Output() onShow: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when a chart element is hidden.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	@Output() onHide: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when a chart element is selected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	@Output() onSelect: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when a chart element is unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	@Output() onUnselect: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue)
	*   minValue - The start value of the range selector.
	*   maxValue - The end value of the range selector.
	*/
	@Output() onRangeSelectionChanged: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the chart's range selector position changes and before the chart starts rendering. The event can be default prevented to cancel the range selection change.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue, 	oldMinValue, 	oldMaxValue)
	*   minValue - The start value of the range selector.
	*   maxValue - The end value of the range selector.
	*   oldMinValue - The previous start value of the range selector.
	*   oldMaxValue - The previous end value of the range selector.
	*/
	@Output() onRangeSelectionChanging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the chart begins rendering.
	*  @param event. The custom event. 	*/
	@Output() onRefreshBegin: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the chart finishes rendering.
	*  @param event. The custom event. 	*/
	@Output() onRefreshEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the chart begins resizing.
	*  @param event. The custom event. 	*/
	@Output() onResizeBegin: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the chart finishes resizing.
	*  @param event. The custom event. 	*/
	@Output() onResizeEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors. 
	* @param {string} schemeName. The name of the custom color scheme.
	* @param {any[]} colorsArray. An array of color values.
	*/
    public addColorScheme(schemeName: string, colorsArray: any[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addColorScheme(schemeName, colorsArray);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addColorScheme(schemeName, colorsArray);
            });
        }
    }

	/** @description Begins an update of the chart. The chart will not be rendered until the endUpdate method is called. 
	*/
    public beginUpdate(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }

	/** @description Ends an update of the chart. The chart will be rendered after the endUpdate method is called. 
	* @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
	*/
    public endUpdate(refresh?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate(refresh);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate(refresh);
            });
        }
    }

	/** @description Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined. 
	* @param {string} schemeName. The name of the color scheme.
	* @returns {any[]}
  */
	public async getColorScheme(schemeName): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getColorScheme(schemeName);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the item with the specified indexes. 
	* @param {number | null} groupIndex?. Series group index.
	* @param {number | null} serieIndex?. Series index.
	* @param {number | null} itemIndex?. Item (data point) index.
	* @returns {any}
  */
	public async getItemByIndexes(groupIndex?, serieIndex?, itemIndex?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItemByIndexes(groupIndex, serieIndex, itemIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets an arrat of the items with the specified indexes. Leaving an index null will return all items that match the other indexes. 
	* @param {number | null} groupIndex?. Series group index.
	* @param {number | null} serieIndex?. Series index.
	* @param {number | null} itemIndex?. Item (data point) index.
	* @returns {any}
  */
	public async getItemsByIndexes(groupIndex?, serieIndex?, itemIndex?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItemsByIndexes(groupIndex, serieIndex, itemIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the indexes of the hidden series. 
	* @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
  */
	public async getHidden(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getHidden();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the selected items. 
	* @returns {any[]}
  */
	public async getSelection(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSelection();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the rendered values of the valueAxis labels. 
	* @returns {any}
  */
	public async getValueAxisLabels(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getValueAxisLabels();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the rendered values of the xAxis labels. 
	* @returns {any}
  */
	public async getXAxisLabels(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getXAxisLabels();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the rendered values of the zAxis labels. 
	* @returns {any}
  */
	public async getZAxisLabels(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getZAxisLabels();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Hides all items of a chart group. 
	* @param {number} groupIndex. Series group index.
	*/
    public hideGroup(groupIndex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideGroup(groupIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideGroup(groupIndex);
            });
        }
    }

	/** @description Hides a chart item. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @param {number} itemIndex?. Item (data point) index.
	*/
    public hideItem(groupIndex: number, serieIndex: number, itemIndex?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }

	/** @description Hides all items of a chart serie. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	*/
    public hideSerie(groupIndex: number, serieIndex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideSerie(groupIndex, serieIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideSerie(groupIndex, serieIndex);
            });
        }
    }

	/** @description Refreshes the content of the chart element after a property or data update. 
	*/
    public refresh(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }

	/** @description Removes an existing color scheme. If the scheme does not exist, the method has no effect. 
	* @param {string} schemeName. The name of the custom color scheme.
	*/
    public removeColorScheme(schemeName: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeColorScheme(schemeName);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeColorScheme(schemeName);
            });
        }
    }

	/** @description Exports the chart's content as JPEG image. 
	* @param {string} fileName?. File name.
	* @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
	* @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
	*/
    public saveAsJPEG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
            });
        }
    }

	/** @description Exports the chart's content as PNG image. 
	* @param {string} fileName?. File name.
	* @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
	* @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
	*/
    public saveAsPNG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
            });
        }
    }

	/** @description Exports the chart's content as PDF file. 
	* @param {string} fileName?. File name.
	* @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
	* @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
	*/
    public saveAsPDF(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
            });
        }
    }

	/** @description Selects a chart item. If selectionMode is 'one', the previous item will be unselected. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @param {number} itemIndex?. Item (data point) index.
	*/
    public selectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }

	/** @description Shows all items of a chart group. 
	* @param {number} groupIndex. Series group index.
	*/
    public showGroup(groupIndex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showGroup(groupIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showGroup(groupIndex);
            });
        }
    }

	/** @description Shows a chart item. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @param {number} itemIndex?. Item (data point) index.
	*/
    public showItem(groupIndex: number, serieIndex: number, itemIndex?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }

	/** @description Shows all items of a chart serie. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	*/
    public showSerie(groupIndex: number, serieIndex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showSerie(groupIndex, serieIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showSerie(groupIndex, serieIndex);
            });
        }
    }

	/** @description Sets the camera position to its position during the initialization. 
	*/
    public setDefaultPosition(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setDefaultPosition();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setDefaultPosition();
            });
        }
    }

	/** @description Sets the camera mode. Different camera modes change the control actions of the mouse. Available modes are 'zoom', 'pan' and 'default'. 
	* @param {string} mode. Camera mode.
	*/
    public setCameraMode(mode: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraMode(mode);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCameraMode(mode);
            });
        }
    }

	/** @description Sets the camera position. 
	* @param {number} x. X coordinate.
	* @param {number} y. Y coordinate.
	* @param {number} z. Z coordinate.
	* @param {boolean} animation?. Animation Enabled
	*/
    public setCameraPosition(x: number, y: number, z: number, animation?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraPosition(x, y, z, animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCameraPosition(x, y, z, animation);
            });
        }
    }

	/** @description Sets the camera zoom. 
	* @param {number} level. Zoom level.
	* @param {boolean} animation?. Animation Enabled
	*/
    public setCameraZoom(level: number, animation?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraZoom(level, animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCameraZoom(level, animation);
            });
        }
    }

	/** @description Unelects a chart item. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @param {number} itemIndex?. Item (data point) index.
	*/
    public unselectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }

	/** @description Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values. 
	*/
    public update(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update();
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
		that.eventHandlers['itemClickHandler'] = (event: CustomEvent) => { that.onItemClick.emit(event); }
		that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);

		that.eventHandlers['showHandler'] = (event: CustomEvent) => { that.onShow.emit(event); }
		that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);

		that.eventHandlers['hideHandler'] = (event: CustomEvent) => { that.onHide.emit(event); }
		that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);

		that.eventHandlers['selectHandler'] = (event: CustomEvent) => { that.onSelect.emit(event); }
		that.nativeElement.addEventListener('select', that.eventHandlers['selectHandler']);

		that.eventHandlers['unselectHandler'] = (event: CustomEvent) => { that.onUnselect.emit(event); }
		that.nativeElement.addEventListener('unselect', that.eventHandlers['unselectHandler']);

		that.eventHandlers['rangeSelectionChangedHandler'] = (event: CustomEvent) => { that.onRangeSelectionChanged.emit(event); }
		that.nativeElement.addEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);

		that.eventHandlers['rangeSelectionChangingHandler'] = (event: CustomEvent) => { that.onRangeSelectionChanging.emit(event); }
		that.nativeElement.addEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);

		that.eventHandlers['refreshBeginHandler'] = (event: CustomEvent) => { that.onRefreshBegin.emit(event); }
		that.nativeElement.addEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);

		that.eventHandlers['refreshEndHandler'] = (event: CustomEvent) => { that.onRefreshEnd.emit(event); }
		that.nativeElement.addEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);

		that.eventHandlers['resizeBeginHandler'] = (event: CustomEvent) => { that.onResizeBegin.emit(event); }
		that.nativeElement.addEventListener('resizeBegin', that.eventHandlers['resizeBeginHandler']);

		that.eventHandlers['resizeEndHandler'] = (event: CustomEvent) => { that.onResizeEnd.emit(event); }
		that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['itemClickHandler']) {
			that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
		}

		if (that.eventHandlers['showHandler']) {
			that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
		}

		if (that.eventHandlers['hideHandler']) {
			that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
		}

		if (that.eventHandlers['selectHandler']) {
			that.nativeElement.removeEventListener('select', that.eventHandlers['selectHandler']);
		}

		if (that.eventHandlers['unselectHandler']) {
			that.nativeElement.removeEventListener('unselect', that.eventHandlers['unselectHandler']);
		}

		if (that.eventHandlers['rangeSelectionChangedHandler']) {
			that.nativeElement.removeEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
		}

		if (that.eventHandlers['rangeSelectionChangingHandler']) {
			that.nativeElement.removeEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
		}

		if (that.eventHandlers['refreshBeginHandler']) {
			that.nativeElement.removeEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
		}

		if (that.eventHandlers['refreshEndHandler']) {
			that.nativeElement.removeEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
		}

		if (that.eventHandlers['resizeBeginHandler']) {
			that.nativeElement.removeEventListener('resizeBegin', that.eventHandlers['resizeBeginHandler']);
		}

		if (that.eventHandlers['resizeEndHandler']) {
			that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
		}

	}
}
