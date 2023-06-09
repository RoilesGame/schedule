import React from "react";
import { ThreeDChartProperties } from "./../../index";
import { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartSymbolType, ThreeDChartType, ThreeDChartRangeSelectorSerieType, ThreeDChartXAxisType, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartBand, ThreeDChartFormatSettings, ThreeDChartSeriesGroupSerie, ThreeDChartLabels, ThreeDChartOffset, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartLines, ThreeDChartXAxis, ThreeDChartRangeSelector, ThreeDChartZAxis} from './../../index';
export { ThreeDChartProperties } from "./../../index";
export { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartSymbolType, ThreeDChartType, ThreeDChartRangeSelectorSerieType, ThreeDChartXAxisType, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartBand, ThreeDChartFormatSettings, ThreeDChartSeriesGroupSerie, ThreeDChartLabels, ThreeDChartOffset, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartLines, ThreeDChartXAxis, ThreeDChartRangeSelector, ThreeDChartZAxis} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface ThreeDChartProps extends ThreeDChartProperties {
    className?: string;
    style?: React.CSSProperties;

	onItemClick?: ((event?: Event) => void) | undefined;
	onShow?: ((event?: Event) => void) | undefined;
	onHide?: ((event?: Event) => void) | undefined;
	onSelect?: ((event?: Event) => void) | undefined;
	onUnselect?: ((event?: Event) => void) | undefined;
	onRangeSelectionChanged?: ((event?: Event) => void) | undefined;
	onRangeSelectionChanging?: ((event?: Event) => void) | undefined;
	onRefreshBegin?: ((event?: Event) => void) | undefined;
	onRefreshEnd?: ((event?: Event) => void) | undefined;
	onResizeBegin?: ((event?: Event) => void) | undefined;
	onResizeEnd?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 3D Chart is a feature-complete interactive WebGL 3D graph library that answers the data visualization needs of any modern web app.
*/
export class ThreeDChart extends React.Component<React.HTMLAttributes<Element> & ThreeDChartProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'ThreeDChart' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
	*	Property type: Animation | string
	*/
	get animation(): Animation | string  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation | string) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Determines the rate of the animation. The default animation rate is 1
	*	Property type: number
	*/
	get animationSpeed(): number  {
		return this.nativeElement ? this.nativeElement.animationSpeed : undefined;
	}
	set animationSpeed(value: number) {
		if (this.nativeElement) {
			this.nativeElement.animationSpeed = value;
		}
	}

	/** Sets whether the chart will rotate automatically.
	*	Property type: boolean
	*/
	get autoRotate(): boolean  {
		return this.nativeElement ? this.nativeElement.autoRotate : undefined;
	}
	set autoRotate(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoRotate = value;
		}
	}

	/** Sets the speed of the automatic rotation.
	*	Property type: number
	*/
	get autoRotateSpeed(): number  {
		return this.nativeElement ? this.nativeElement.autoRotateSpeed : undefined;
	}
	set autoRotateSpeed(value: number) {
		if (this.nativeElement) {
			this.nativeElement.autoRotateSpeed = value;
		}
	}

	/** Sets the chart's background color. For example: '#DDFFE8'
	*	Property type: string | null
	*/
	get backgroundColor(): string | null  {
		return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
	}
	set backgroundColor(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.backgroundColor = value;
		}
	}

	/** Sets the chart's background to a static linear gradient. The property must be set to an Array of Strings in the format: 'offset, color'
	*	Property type: any[]
	*/
	get backgroundGradient(): any[]  {
		return this.nativeElement ? this.nativeElement.backgroundGradient : undefined;
	}
	set backgroundGradient(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.backgroundGradient = value;
		}
	}

	/** Sets the chart's background to a static image. For example: 'https://www.htmlelements.com/demos/images/stars.jpg'
	*	Property type: string
	*/
	get backgroundImage(): string  {
		return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
	}
	set backgroundImage(value: string) {
		if (this.nativeElement) {
			this.nativeElement.backgroundImage = value;
		}
	}

	/** Sets the chart's background to a dynamic background image which rotates with the camera. The property must be set an Array of 6 images. All images must have aspect ratio 1:1
	*	Property type: any[]
	*/
	get backgroundTexture(): any[]  {
		return this.nativeElement ? this.nativeElement.backgroundTexture : undefined;
	}
	set backgroundTexture(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.backgroundTexture = value;
		}
	}

	/** Sets the camera's position. The property must be set to an {x, y, z} object.
	*	Property type: ThreeDChartCameraPosition
	*/
	get cameraPosition(): ThreeDChartCameraPosition  {
		return this.nativeElement ? this.nativeElement.cameraPosition : undefined;
	}
	set cameraPosition(value: ThreeDChartCameraPosition) {
		if (this.nativeElement) {
			this.nativeElement.cameraPosition = value;
		}
	}

	/** Sets the intial camera zoom. The default value is 1
	*	Property type: number
	*/
	get cameraZoom(): number  {
		return this.nativeElement ? this.nativeElement.cameraZoom : undefined;
	}
	set cameraZoom(value: number) {
		if (this.nativeElement) {
			this.nativeElement.cameraZoom = value;
		}
	}

	/** Sets the caption (title) of the chart.
	*	Property type: string
	*/
	get caption(): string  {
		return this.nativeElement ? this.nativeElement.caption : undefined;
	}
	set caption(value: string) {
		if (this.nativeElement) {
			this.nativeElement.caption = value;
		}
	}

	/** Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
	*	Property type: ThreeDChartColorScheme | string
	*/
	get colorScheme(): ThreeDChartColorScheme | string  {
		return this.nativeElement ? this.nativeElement.colorScheme : undefined;
	}
	set colorScheme(value: ThreeDChartColorScheme | string) {
		if (this.nativeElement) {
			this.nativeElement.colorScheme = value;
		}
	}

	/** Sets the chart's controls settings.
	*	Property type: any
	*/
	get controlsSettings(): any  {
		return this.nativeElement ? this.nativeElement.controlsSettings : undefined;
	}
	set controlsSettings(value: any) {
		if (this.nativeElement) {
			this.nativeElement.controlsSettings = value;
		}
	}

	/** Allows substituting default items with custom 3D Objects. The property must be set to an Array of Objects in the format: { groupIndex, serieIndex, itemIndex, modelUrl }
	*	Property type: any[]
	*/
	get customModels(): any[]  {
		return this.nativeElement ? this.nativeElement.customModels : undefined;
	}
	set customModels(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.customModels = value;
		}
	}

	/** Sets the chart's data source.
	*	Property type: any[]
	*/
	get dataSource(): any[]  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Sets the description text of the chart.
	*	Property type: string
	*/
	get description(): string  {
		return this.nativeElement ? this.nativeElement.description : undefined;
	}
	set description(value: string) {
		if (this.nativeElement) {
			this.nativeElement.description = value;
		}
	}

	/** Enables or disables the chart.
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

	/** Sets whether the chart's toolbar is enabled.
	*	Property type: boolean
	*/
	get enableControlsToolbar(): boolean  {
		return this.nativeElement ? this.nativeElement.enableControlsToolbar : undefined;
	}
	set enableControlsToolbar(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.enableControlsToolbar = value;
		}
	}

	/** 
	*	Property type: any
	*/
	get controlsToolbarItems(): any  {
		return this.nativeElement ? this.nativeElement.controlsToolbarItems : undefined;
	}
	set controlsToolbarItems(value: any) {
		if (this.nativeElement) {
			this.nativeElement.controlsToolbarItems = value;
		}
	}

	/** Sets the chart's grid options.
	*	Property type: any
	*/
	get gridOptions(): any  {
		return this.nativeElement ? this.nativeElement.gridOptions : undefined;
	}
	set gridOptions(value: any) {
		if (this.nativeElement) {
			this.nativeElement.gridOptions = value;
		}
	}

	/** Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type
	*	Property type: ThreeDChartLegendIndex | string
	*/
	get legendIndex(): ThreeDChartLegendIndex | string  {
		return this.nativeElement ? this.nativeElement.legendIndex : undefined;
	}
	set legendIndex(value: ThreeDChartLegendIndex | string) {
		if (this.nativeElement) {
			this.nativeElement.legendIndex = value;
		}
	}

	/** Sets the legend's layout.
	*	Property type: any
	*/
	get legendLayout(): any  {
		return this.nativeElement ? this.nativeElement.legendLayout : undefined;
	}
	set legendLayout(value: any) {
		if (this.nativeElement) {
			this.nativeElement.legendLayout = value;
		}
	}

	/** Sets the light color of the 3D Scene.
	*	Property type: string
	*/
	get lightColor(): string  {
		return this.nativeElement ? this.nativeElement.lightColor : undefined;
	}
	set lightColor(value: string) {
		if (this.nativeElement) {
			this.nativeElement.lightColor = value;
		}
	}

	/** Sets or gets the locale. Used in conjunction with the property messages.
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

	/** Sets or gets a value indicating whether the Chart's layout is mirrored.
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

	/** Determines the selection mode.
	*	Property type: ThreeDChartSelectionMode | string
	*/
	get selectionMode(): ThreeDChartSelectionMode | string  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: ThreeDChartSelectionMode | string) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
	*	Property type: ThreeDChartSeriesGroup[]
	*/
	get seriesGroups(): ThreeDChartSeriesGroup[]  {
		return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
	}
	set seriesGroups(value: ThreeDChartSeriesGroup[]) {
		if (this.nativeElement) {
			this.nativeElement.seriesGroups = value;
		}
	}

	/** Determines whether to show grid connecting lines when a chart item is hovered over.
	*	Property type: boolean
	*/
	get showConnectionLines(): boolean  {
		return this.nativeElement ? this.nativeElement.showConnectionLines : undefined;
	}
	set showConnectionLines(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showConnectionLines = value;
		}
	}

	/** Determines whether to show or hide the chart series legend.
	*	Property type: boolean
	*/
	get showLegend(): boolean  {
		return this.nativeElement ? this.nativeElement.showLegend : undefined;
	}
	set showLegend(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showLegend = value;
		}
	}

	/** Determines whether to show or hide the chart series legend table.
	*	Property type: boolean
	*/
	get showLegendTable(): boolean  {
		return this.nativeElement ? this.nativeElement.showLegendTable : undefined;
	}
	set showLegendTable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showLegendTable = value;
		}
	}

	/** Enables or disables the chart tooltips.
	*	Property type: boolean
	*/
	get showToolTips(): boolean  {
		return this.nativeElement ? this.nativeElement.showToolTips : undefined;
	}
	set showToolTips(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showToolTips = value;
		}
	}

	/** Sets the padding of the chart's title (caption).
	*	Property type: ThreeDChartPadding
	*/
	get titlePadding(): ThreeDChartPadding  {
		return this.nativeElement ? this.nativeElement.titlePadding : undefined;
	}
	set titlePadding(value: ThreeDChartPadding) {
		if (this.nativeElement) {
			this.nativeElement.titlePadding = value;
		}
	}

	/** Tooltip line color. By default it is set to the hovered item's color
	*	Property type: {(value?: any, index?: number, series?: any): string}
	*/
	get toolTipFormatFunction(): {(value?: any, index?: number, series?: any): string}  {
		return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
	}
	set toolTipFormatFunction(value: {(value?: any, index?: number, series?: any): string}) {
		if (this.nativeElement) {
			this.nativeElement.toolTipFormatFunction = value;
		}
	}

	/** An object with settings about the Chart's y-axis (value axis).
	*	Property type: string | null
	*/
	get toolTipLineColor(): string | null  {
		return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
	}
	set toolTipLineColor(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.toolTipLineColor = value;
		}
	}

	/** Sets the Chart's xAxis.
	*	Property type: ThreeDChartValueAxis
	*/
	get valueAxis(): ThreeDChartValueAxis  {
		return this.nativeElement ? this.nativeElement.valueAxis : undefined;
	}
	set valueAxis(value: ThreeDChartValueAxis) {
		if (this.nativeElement) {
			this.nativeElement.valueAxis = value;
		}
	}

	/** Sets the Chart's zAxis.
	*	Property type: ThreeDChartXAxis
	*/
	get xAxis(): ThreeDChartXAxis  {
		return this.nativeElement ? this.nativeElement.xAxis : undefined;
	}
	set xAxis(value: ThreeDChartXAxis) {
		if (this.nativeElement) {
			this.nativeElement.xAxis = value;
		}
	}

	/** undefined
	*	Property type: ThreeDChartZAxis
	*/
	get zAxis(): ThreeDChartZAxis  {
		return this.nativeElement ? this.nativeElement.zAxis : undefined;
	}
	set zAxis(value: ThreeDChartZAxis) {
		if (this.nativeElement) {
			this.nativeElement.zAxis = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","animationSpeed","autoRotate","autoRotateSpeed","backgroundColor","backgroundGradient","backgroundImage","backgroundTexture","cameraPosition","cameraZoom","caption","colorScheme","controlsSettings","customModels","dataSource","description","disabled","enableControlsToolbar","controlsToolbarItems","gridOptions","legendIndex","legendLayout","lightColor","locale","messages","rightToLeft","selectionMode","seriesGroups","showConnectionLines","showLegend","showLegendTable","showToolTips","titlePadding","toolTipFormatFunction","toolTipLineColor","valueAxis","xAxis","zAxis"];
	}
	/**  The event is raised when the user clicks on a chart element.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	onItemClick?: ((event?: Event) => void) | undefined
	/**  The event is raised when a chart element is shown.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	onShow?: ((event?: Event) => void) | undefined
	/**  The event is raised when a chart element is hidden.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	onHide?: ((event?: Event) => void) | undefined
	/**  The event is raised when a chart element is selected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	onSelect?: ((event?: Event) => void) | undefined
	/**  The event is raised when a chart element is unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
	*   itemIndex - The item index of the item.
	*   serieIndex - The serie index of the item.
	*   groupIndex - The group index of the item.
	*/
	onUnselect?: ((event?: Event) => void) | undefined
	/**  The event is raised after the chart's range selector position changes and after the chart ends rendering.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue)
	*   minValue - The start value of the range selector.
	*   maxValue - The end value of the range selector.
	*/
	onRangeSelectionChanged?: ((event?: Event) => void) | undefined
	/**  The event is raised when the chart's range selector position changes and before the chart starts rendering. The event can be default prevented to cancel the range selection change.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue, 	oldMinValue, 	oldMaxValue)
	*   minValue - The start value of the range selector.
	*   maxValue - The end value of the range selector.
	*   oldMinValue - The previous start value of the range selector.
	*   oldMaxValue - The previous end value of the range selector.
	*/
	onRangeSelectionChanging?: ((event?: Event) => void) | undefined
	/**  The event is raised when the chart begins rendering.
	*  @param event. The custom event. 	*/
	onRefreshBegin?: ((event?: Event) => void) | undefined
	/**  The event is raised when the chart finishes rendering.
	*  @param event. The custom event. 	*/
	onRefreshEnd?: ((event?: Event) => void) | undefined
	/**  The event is raised when the chart begins resizing.
	*  @param event. The custom event. 	*/
	onResizeBegin?: ((event?: Event) => void) | undefined
	/**  The event is raised when the chart finishes resizing.
	*  @param event. The custom event. 	*/
	onResizeEnd?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onItemClick","onShow","onHide","onSelect","onUnselect","onRangeSelectionChanged","onRangeSelectionChanging","onRefreshBegin","onRefreshEnd","onResizeBegin","onResizeEnd","onCreate","onReady"];
	}
	/** Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors. 
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

	/** Begins an update of the chart. The chart will not be rendered until the endUpdate method is called. 
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

	/** Ends an update of the chart. The chart will be rendered after the endUpdate method is called. 
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

	/** Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined. 
	* @param {string} schemeName. The name of the color scheme.
	* @returns {any[]}
  */
	public getColorScheme(schemeName:string) : any {
        const result: any = this.nativeElement.getColorScheme(schemeName);
        return result;
    }

	/** Gets the item with the specified indexes. 
	* @param {number | null} groupIndex?. Series group index.
	* @param {number | null} serieIndex?. Series index.
	* @param {number | null} itemIndex?. Item (data point) index.
	* @returns {any}
  */
	public getItemByIndexes(groupIndex?:number | null, serieIndex?:number | null, itemIndex?:number | null) : any {
        const result: any = this.nativeElement.getItemByIndexes(groupIndex, serieIndex, itemIndex);
        return result;
    }

	/** Gets an arrat of the items with the specified indexes. Leaving an index null will return all items that match the other indexes. 
	* @param {number | null} groupIndex?. Series group index.
	* @param {number | null} serieIndex?. Series index.
	* @param {number | null} itemIndex?. Item (data point) index.
	* @returns {any}
  */
	public getItemsByIndexes(groupIndex?:number | null, serieIndex?:number | null, itemIndex?:number | null) : any {
        const result: any = this.nativeElement.getItemsByIndexes(groupIndex, serieIndex, itemIndex);
        return result;
    }

	/** Gets the indexes of the hidden series. 
	* @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
  */
	public getHidden() : any {
        const result: any = this.nativeElement.getHidden();
        return result;
    }

	/** Gets the selected items. 
	* @returns {any[]}
  */
	public getSelection() : any {
        const result: any = this.nativeElement.getSelection();
        return result;
    }

	/** Gets the rendered values of the valueAxis labels. 
	* @returns {any}
  */
	public getValueAxisLabels() : any {
        const result: any = this.nativeElement.getValueAxisLabels();
        return result;
    }

	/** Gets the rendered values of the xAxis labels. 
	* @returns {any}
  */
	public getXAxisLabels() : any {
        const result: any = this.nativeElement.getXAxisLabels();
        return result;
    }

	/** Gets the rendered values of the zAxis labels. 
	* @returns {any}
  */
	public getZAxisLabels() : any {
        const result: any = this.nativeElement.getZAxisLabels();
        return result;
    }

	/** Hides all items of a chart group. 
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

	/** Hides a chart item. 
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

	/** Hides all items of a chart serie. 
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

	/** Refreshes the content of the chart element after a property or data update. 
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

	/** Removes an existing color scheme. If the scheme does not exist, the method has no effect. 
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

	/** Exports the chart's content as JPEG image. 
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

	/** Exports the chart's content as PNG image. 
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

	/** Exports the chart's content as PDF file. 
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

	/** Selects a chart item. If selectionMode is 'one', the previous item will be unselected. 
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

	/** Shows all items of a chart group. 
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

	/** Shows a chart item. 
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

	/** Shows all items of a chart serie. 
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

	/** Sets the camera position to its position during the initialization. 
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

	/** Sets the camera mode. Different camera modes change the control actions of the mouse. Available modes are 'zoom', 'pan' and 'default'. 
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

	/** Sets the camera position. 
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

	/** Sets the camera zoom. 
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

	/** Unelects a chart item. 
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

	/** Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values. 
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
			React.createElement("smart-3d-chart", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default ThreeDChart;
