import React from "react";
import { SchedulerProperties } from "./../../index";
import { SchedulerEventRenderMode, SchedulerRepeatFreq, SchedulerNotificationType, SchedulerDayFormat, FilterMode, SchedulerGroupOrientation, SchedulerHourFormat, SchedulerHeaderDatePosition, SchedulerHeaderNavigationStyle, SchedulerHeaderViewPosition, SchedulerLegendLocation, SchedulerLegendPosition, SchedulerLegendLayout, HorizontalScrollBarVisibility, MinuteFormat, MonthFormat, ResizeHandlesVisibility, SchedulerResourceSortOrder, SchedulerScrollButtonsPosition, SchedulerSortOrder, SchedulerTimelineDayScale, SchedulerTimeZone, VerticalScrollBarVisibility, SchedulerViewType, SchedulerViews, SchedulerViewSelectorType, SchedulerViewStartDay, WeekDayFormat, YearFormat, SchedulerDataExport, SchedulerEvent, SchedulerEventRepeat, SchedulerNotification, SchedulerResource, SchedulerStatuse} from './../../index';
import { DataAdapter } from './../../index';
export { SchedulerProperties } from "./../../index";
export { SchedulerEventRenderMode, SchedulerRepeatFreq, SchedulerNotificationType, SchedulerDayFormat, FilterMode, SchedulerGroupOrientation, SchedulerHourFormat, SchedulerHeaderDatePosition, SchedulerHeaderNavigationStyle, SchedulerHeaderViewPosition, SchedulerLegendLocation, SchedulerLegendPosition, SchedulerLegendLayout, HorizontalScrollBarVisibility, MinuteFormat, MonthFormat, ResizeHandlesVisibility, SchedulerResourceSortOrder, SchedulerScrollButtonsPosition, SchedulerSortOrder, SchedulerTimelineDayScale, SchedulerTimeZone, VerticalScrollBarVisibility, SchedulerViewType, SchedulerViews, SchedulerViewSelectorType, SchedulerViewStartDay, WeekDayFormat, YearFormat, SchedulerDataExport, SchedulerEvent, SchedulerEventRepeat, SchedulerNotification, SchedulerResource, SchedulerStatuse} from './../../index';
export { DataAdapter } from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface SchedulerProps extends SchedulerProperties {
    className?: string;
    style?: React.CSSProperties;

	onBeginUpdate?: ((event?: Event) => void) | undefined;
	onEndUpdate?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onItemChange?: ((event?: Event) => void) | undefined;
	onItemChanging?: ((event?: Event) => void) | undefined;
	onItemClick?: ((event?: Event) => void) | undefined;
	onItemInsert?: ((event?: Event) => void) | undefined;
	onItemRemove?: ((event?: Event) => void) | undefined;
	onItemUpdate?: ((event?: Event) => void) | undefined;
	onViewChange?: ((event?: Event) => void) | undefined;
	onViewChanging?: ((event?: Event) => void) | undefined;
	onEventShortcutKey?: ((event?: Event) => void) | undefined;
	onDateChange?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onDropoverCell?: ((event?: Event) => void) | undefined;
	onResizeStart?: ((event?: Event) => void) | undefined;
	onResizeEnd?: ((event?: Event) => void) | undefined;
	onEditDialogOpening?: ((event?: Event) => void) | undefined;
	onEditDialogOpen?: ((event?: Event) => void) | undefined;
	onEditDialogClose?: ((event?: Event) => void) | undefined;
	onEditDialogClosing?: ((event?: Event) => void) | undefined;
	onContextMenuOpening?: ((event?: Event) => void) | undefined;
	onContextMenuOpen?: ((event?: Event) => void) | undefined;
	onContextMenuClose?: ((event?: Event) => void) | undefined;
	onContextMenuClosing?: ((event?: Event) => void) | undefined;
	onEventMenuOpening?: ((event?: Event) => void) | undefined;
	onEventMenuOpen?: ((event?: Event) => void) | undefined;
	onEventMenuClose?: ((event?: Event) => void) | undefined;
	onEventMenuClosing?: ((event?: Event) => void) | undefined;
	onDateMenuOpen?: ((event?: Event) => void) | undefined;
	onDateMenuClose?: ((event?: Event) => void) | undefined;
	onViewMenuOpen?: ((event?: Event) => void) | undefined;
	onViewMenuClose?: ((event?: Event) => void) | undefined;
	onNotificationOpen?: ((event?: Event) => void) | undefined;
	onNotificationClose?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Scheduler displays a set ot Events in Day, Week, Month, Agenda, Timeline Day, Timeline Week, Timeline Month views.
*/
export class Scheduler extends React.Component<React.HTMLAttributes<Element> & SchedulerProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Scheduler' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Determines the scroll speed while dragging an event. 
	*	Property type: number
	*/
	get autoScrollStep(): number  {
		return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
	}
	set autoScrollStep(value: number) {
		if (this.nativeElement) {
			this.nativeElement.autoScrollStep = value;
		}
	}

	/** Determines whether the all day cells in Day and Week views automatically change their height depending on the events count in these cells. 
	*	Property type: boolean
	*/
	get autoHeightAllDayCells(): boolean  {
		return this.nativeElement ? this.nativeElement.autoHeightAllDayCells : undefined;
	}
	set autoHeightAllDayCells(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoHeightAllDayCells = value;
		}
	}

	/** Defines an array of objects with start and end fields, where start and end are Date objects. For example: [{  'start': '2022-10-25T12:00.000Z', 'end': '2022-10-25T13:00.000Z' }]. 
	*	Property type: any
	*/
	get available(): any  {
		return this.nativeElement ? this.nativeElement.available : undefined;
	}
	set available(value: any) {
		if (this.nativeElement) {
			this.nativeElement.available = value;
		}
	}

	/** Determines the color scheme for the event background selector in the event window editor. 
	*	Property type: string[]
	*/
	get colorScheme(): string[]  {
		return this.nativeElement ? this.nativeElement.colorScheme : undefined;
	}
	set colorScheme(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.colorScheme = value;
		}
	}

	/** Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells. 
	*	Property type: boolean
	*/
	get currentTimeIndicator(): boolean  {
		return this.nativeElement ? this.nativeElement.currentTimeIndicator : undefined;
	}
	set currentTimeIndicator(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.currentTimeIndicator = value;
		}
	}

	/** Determines the refresh interval in seconds for the currentTimeIndicator. 
	*	Property type: number
	*/
	get currentTimeIndicatorInterval(): number  {
		return this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval : undefined;
	}
	set currentTimeIndicatorInterval(value: number) {
		if (this.nativeElement) {
			this.nativeElement.currentTimeIndicatorInterval = value;
		}
	}

	/** Determines the context menu items that are visible when the Context Menu is opened.
	*	Property type: any[]
	*/
	get contextMenuDataSource(): any[]  {
		return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
	}
	set contextMenuDataSource(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.contextMenuDataSource = value;
		}
	}

	/** Determines whether the clipboard shortcuts for copy/paste/cut action of events are visible in the Scheduler context menu or not.
	*	Property type: boolean
	*/
	get contextMenuClipboardActions(): boolean  {
		return this.nativeElement ? this.nativeElement.contextMenuClipboardActions : undefined;
	}
	set contextMenuClipboardActions(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.contextMenuClipboardActions = value;
		}
	}

	/** Allows to customize the content of the event elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
	*	Property type: any
	*/
	get eventTemplate(): any  {
		return this.nativeElement ? this.nativeElement.eventTemplate : undefined;
	}
	set eventTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.eventTemplate = value;
		}
	}

	/** Allows to customize the content of the event collector elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
	*	Property type: any
	*/
	get eventCollectorTemplate(): any  {
		return this.nativeElement ? this.nativeElement.eventCollectorTemplate : undefined;
	}
	set eventCollectorTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.eventCollectorTemplate = value;
		}
	}

	/**  Determines how the events inside the Scheduler are rendered.classic - the events are arranged next to each other and try to fit inside the cells.modern - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created.
	*	Property type: SchedulerEventRenderMode | string
	*/
	get eventRenderMode(): SchedulerEventRenderMode | string  {
		return this.nativeElement ? this.nativeElement.eventRenderMode : undefined;
	}
	set eventRenderMode(value: SchedulerEventRenderMode | string) {
		if (this.nativeElement) {
			this.nativeElement.eventRenderMode = value;
		}
	}

	/** Allows to customize the content of the event menu items (tooltip). When clicked on an event element an event menu with details opens. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
	*	Property type: any
	*/
	get eventTooltipTemplate(): any  {
		return this.nativeElement ? this.nativeElement.eventTooltipTemplate : undefined;
	}
	set eventTooltipTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.eventTooltipTemplate = value;
		}
	}

	/** Allows to customize the content of the timeline cells. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each cell with the following parameters: cellContent - the content holder for the cell,cellDate - the cell date.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the value of the cell.
	*	Property type: any
	*/
	get cellTemplate(): any  {
		return this.nativeElement ? this.nativeElement.cellTemplate : undefined;
	}
	set cellTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.cellTemplate = value;
		}
	}

	/** Determines the currently visible date for the Scheduler.
	*	Property type: string | Date
	*/
	get dateCurrent(): string | Date  {
		return this.nativeElement ? this.nativeElement.dateCurrent : undefined;
	}
	set dateCurrent(value: string | Date) {
		if (this.nativeElement) {
			this.nativeElement.dateCurrent = value;
		}
	}

	/** Sets the Schedulers's Data Export options.
	*	Property type: SchedulerDataExport
	*/
	get dataExport(): SchedulerDataExport  {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value: SchedulerDataExport) {
		if (this.nativeElement) {
			this.nativeElement.dataExport = value;
		}
	}

	/** Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties:
	*	Property type: SchedulerEvent[]
	*/
	get dataSource(): SchedulerEvent[]  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: SchedulerEvent[]) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** A callback that can be used to customize the text inside the date selector located in the header. The callback has one parameter - the current date.
	*	Property type: any
	*/
	get dateSelectorFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.dateSelectorFormatFunction : undefined;
	}
	set dateSelectorFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dateSelectorFormatFunction = value;
		}
	}

	/** Determines the day format of the dates in the timeline.
	*	Property type: SchedulerDayFormat | string
	*/
	get dayFormat(): SchedulerDayFormat | string  {
		return this.nativeElement ? this.nativeElement.dayFormat : undefined;
	}
	set dayFormat(value: SchedulerDayFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.dayFormat = value;
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

	/** Disables auto scrolling of the timeline while dragging/resizing an event.
	*	Property type: boolean
	*/
	get disableAutoScroll(): boolean  {
		return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
	}
	set disableAutoScroll(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableAutoScroll = value;
		}
	}

	/** Disables dragging of events.
	*	Property type: boolean
	*/
	get disableDrag(): boolean  {
		return this.nativeElement ? this.nativeElement.disableDrag : undefined;
	}
	set disableDrag(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableDrag = value;
		}
	}

	/** Disables dropping of events.
	*	Property type: boolean
	*/
	get disableDrop(): boolean  {
		return this.nativeElement ? this.nativeElement.disableDrop : undefined;
	}
	set disableDrop(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableDrop = value;
		}
	}

	/** Disables resizing of events.
	*	Property type: boolean
	*/
	get disableResize(): boolean  {
		return this.nativeElement ? this.nativeElement.disableResize : undefined;
	}
	set disableResize(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableResize = value;
		}
	}

	/** Disables the cell selection.
	*	Property type: boolean
	*/
	get disableSelection(): boolean  {
		return this.nativeElement ? this.nativeElement.disableSelection : undefined;
	}
	set disableSelection(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableSelection = value;
		}
	}

	/** Disables the window editor for the events.
	*	Property type: boolean
	*/
	get disableWindowEditor(): boolean  {
		return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
	}
	set disableWindowEditor(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableWindowEditor = value;
		}
	}

	/** Disables the context menu of the events and cells.
	*	Property type: boolean
	*/
	get disableContextMenu(): boolean  {
		return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
	}
	set disableContextMenu(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableContextMenu = value;
		}
	}

	/** Disables the event menu that appears when an event/collector has been clicked.
	*	Property type: boolean
	*/
	get disableEventMenu(): boolean  {
		return this.nativeElement ? this.nativeElement.disableEventMenu : undefined;
	}
	set disableEventMenu(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableEventMenu = value;
		}
	}

	/** Disables the view menu that allows to select the current Scheduler view.
	*	Property type: boolean
	*/
	get disableViewMenu(): boolean  {
		return this.nativeElement ? this.nativeElement.disableViewMenu : undefined;
	}
	set disableViewMenu(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableViewMenu = value;
		}
	}

	/** Disables the date menu that allows to select the current Scheduler date.
	*	Property type: boolean
	*/
	get disableDateMenu(): boolean  {
		return this.nativeElement ? this.nativeElement.disableDateMenu : undefined;
	}
	set disableDateMenu(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableDateMenu = value;
		}
	}

	/** A callback that can be used to customize the drag feedback that appears when an event is dragged.
	*	Property type: any
	*/
	get dragFeedbackFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
	}
	set dragFeedbackFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dragFeedbackFormatFunction = value;
		}
	}

	/** Determines the offset for the drag feedback from the pointer.
	*	Property type: any
	*/
	get dragOffset(): any  {
		return this.nativeElement ? this.nativeElement.dragOffset : undefined;
	}
	set dragOffset(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dragOffset = value;
		}
	}

	/** Determines the filtering condition for the events.The filter property takes an array of objects or a function. Each object represents a single filtering condition with the following attributes: name - the name of the Scheduler event property that will be filtered by.value - the filtering condition value. The value will be used to compare the events based on the filterMode, for example: [{ name: 'price', value: 25 }]. The value can also be a function. The function accepts a single arguemnt - the value that corresponds to the filtered attribute. The function allows to apply custom condition that is different from the default filter modes. It should return true ( if the evnet passes the filtering condition ) or false ( if the event does not meet the filtering condition ). Here's an example: [{ name: 'roomId', value: (id) => ['2', '3'].indexOf(id + '') > -1 }]. In the example the events that do not have a 'roomId' property that is equal to '2' or '3' will be filtered out.. If a function is set to the filter property instead, it allows to completely customize the filtering logic. The function passes a single argument - each Scheduler event that will be displayed. The function should return true ( if the condition is met ) or false ( if not ).
	*	Property type: any
	*/
	get filter(): any  {
		return this.nativeElement ? this.nativeElement.filter : undefined;
	}
	set filter(value: any) {
		if (this.nativeElement) {
			this.nativeElement.filter = value;
		}
	}

	/** Determines whether Scheduler's filtering is enabled or not.
	*	Property type: any
	*/
	get filterable(): any  {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: any) {
		if (this.nativeElement) {
			this.nativeElement.filterable = value;
		}
	}

	/** Determines the filter mode.
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

	/** A getter that returns  an array of all Scheduler events.
	*	Property type: SchedulerEvent[]
	*/
	get events(): SchedulerEvent[]  {
		return this.nativeElement ? this.nativeElement.events : undefined;
	}
	set events(value: SchedulerEvent[]) {
		if (this.nativeElement) {
			this.nativeElement.events = value;
		}
	}

	/** Determines the first day of week for the Scheduler. By default it's Sunday.
	*	Property type: number
	*/
	get firstDayOfWeek(): number  {
		return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
	}
	set firstDayOfWeek(value: number) {
		if (this.nativeElement) {
			this.nativeElement.firstDayOfWeek = value;
		}
	}

	/** Allows to customize the footer of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: footerContainer - the footer container..
	*	Property type: any
	*/
	get footerTemplate(): any  {
		return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	}
	set footerTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.footerTemplate = value;
		}
	}

	/** Determines whether the events will be grouped by date.
	*	Property type: boolean
	*/
	get groupByDate(): boolean  {
		return this.nativeElement ? this.nativeElement.groupByDate : undefined;
	}
	set groupByDate(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.groupByDate = value;
		}
	}

	/** Determines the grouping orientation.
	*	Property type: SchedulerGroupOrientation | string
	*/
	get groupOrientation(): SchedulerGroupOrientation | string  {
		return this.nativeElement ? this.nativeElement.groupOrientation : undefined;
	}
	set groupOrientation(value: SchedulerGroupOrientation | string) {
		if (this.nativeElement) {
			this.nativeElement.groupOrientation = value;
		}
	}

	/** Allows to customize the content of the group cells that are visible inside the header. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each group cell with the following parameters: cellContent - the content holder for the group cell.cellObj - the group cell object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
	*	Property type: any
	*/
	get groupTemplate(): any  {
		return this.nativeElement ? this.nativeElement.groupTemplate : undefined;
	}
	set groupTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.groupTemplate = value;
		}
	}

	/** Determines the resources that the events are grouped by.
	*	Property type: any
	*/
	get groups(): any  {
		return this.nativeElement ? this.nativeElement.groups : undefined;
	}
	set groups(value: any) {
		if (this.nativeElement) {
			this.nativeElement.groups = value;
		}
	}

	/** Determines the end hour that will be displayed in 'day' and 'week' views.
	*	Property type: number
	*/
	get hourEnd(): number  {
		return this.nativeElement ? this.nativeElement.hourEnd : undefined;
	}
	set hourEnd(value: number) {
		if (this.nativeElement) {
			this.nativeElement.hourEnd = value;
		}
	}

	/** Determines the start hour that will be displayed in 'day' and 'week' views.
	*	Property type: number
	*/
	get hourStart(): number  {
		return this.nativeElement ? this.nativeElement.hourStart : undefined;
	}
	set hourStart(value: number) {
		if (this.nativeElement) {
			this.nativeElement.hourStart = value;
		}
	}

	/** Determines the formatting of hours inside the element.
	*	Property type: SchedulerHourFormat | string
	*/
	get hourFormat(): SchedulerHourFormat | string  {
		return this.nativeElement ? this.nativeElement.hourFormat : undefined;
	}
	set hourFormat(value: SchedulerHourFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.hourFormat = value;
		}
	}

	/** Allows to customize the header of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: headerContent - the header container..
	*	Property type: any
	*/
	get headerTemplate(): any  {
		return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	}
	set headerTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.headerTemplate = value;
		}
	}

	/**  Determines the position of the Date selector inside the Header of the element.
	*	Property type: SchedulerHeaderDatePosition | string
	*/
	get headerDatePosition(): SchedulerHeaderDatePosition | string  {
		return this.nativeElement ? this.nativeElement.headerDatePosition : undefined;
	}
	set headerDatePosition(value: SchedulerHeaderDatePosition | string) {
		if (this.nativeElement) {
			this.nativeElement.headerDatePosition = value;
		}
	}

	/**  Determines the styling of the Header navigation controls.
	*	Property type: SchedulerHeaderNavigationStyle | string
	*/
	get headerNavigationStyle(): SchedulerHeaderNavigationStyle | string  {
		return this.nativeElement ? this.nativeElement.headerNavigationStyle : undefined;
	}
	set headerNavigationStyle(value: SchedulerHeaderNavigationStyle | string) {
		if (this.nativeElement) {
			this.nativeElement.headerNavigationStyle = value;
		}
	}

	/**  Determines the position of the view selector control inside the Header of the element.
	*	Property type: SchedulerHeaderViewPosition | string
	*/
	get headerViewPosition(): SchedulerHeaderViewPosition | string  {
		return this.nativeElement ? this.nativeElement.headerViewPosition : undefined;
	}
	set headerViewPosition(value: SchedulerHeaderViewPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.headerViewPosition = value;
		}
	}

	/** Determines whether the 'All Day' container with the all day events is hidden or not.
	*	Property type: boolean
	*/
	get hideAllDay(): boolean  {
		return this.nativeElement ? this.nativeElement.hideAllDay : undefined;
	}
	set hideAllDay(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideAllDay = value;
		}
	}

	/** Determines whether the days set by 'nonworkingDays' property are hidden or not.
	*	Property type: boolean
	*/
	get hideNonworkingWeekdays(): boolean  {
		return this.nativeElement ? this.nativeElement.hideNonworkingWeekdays : undefined;
	}
	set hideNonworkingWeekdays(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideNonworkingWeekdays = value;
		}
	}

	/** Determines whether other month days are visible when view is set to month. When enabled, events that start on other month days are not displayed and the cells that represent such days do not allow the creation of new events on them. Also dragging and droping an event on other month days is not allowed. Reszing is also affected. Events can end on other month days, but cannot start on one.
	*	Property type: boolean
	*/
	get hideOtherMonthDays(): boolean  {
		return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
	}
	set hideOtherMonthDays(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideOtherMonthDays = value;
		}
	}

	/** Determines whether the 'Today' button is hidden or not.
	*	Property type: boolean
	*/
	get hideTodayButton(): boolean  {
		return this.nativeElement ? this.nativeElement.hideTodayButton : undefined;
	}
	set hideTodayButton(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideTodayButton = value;
		}
	}

	/** Determines whether the checkable items in the view selection menu are hidden or not.
	*	Property type: boolean
	*/
	get hideViewMenuCheckableItems(): boolean  {
		return this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems : undefined;
	}
	set hideViewMenuCheckableItems(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideViewMenuCheckableItems = value;
		}
	}

	/** Determines whether the weekend days are hidden or not.
	*	Property type: boolean
	*/
	get hideWeekend(): boolean  {
		return this.nativeElement ? this.nativeElement.hideWeekend : undefined;
	}
	set hideWeekend(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideWeekend = value;
		}
	}

	/** Determines the location of the legend inside the Scheduler. By default the location is inside the footer but it can also reside in the header.
	*	Property type: SchedulerLegendLocation | string
	*/
	get legendLocation(): SchedulerLegendLocation | string  {
		return this.nativeElement ? this.nativeElement.legendLocation : undefined;
	}
	set legendLocation(value: SchedulerLegendLocation | string) {
		if (this.nativeElement) {
			this.nativeElement.legendLocation = value;
		}
	}

	/** Determines the position of the legend. By default it's positioned to the near side but setting it to 'far' will change that.
	*	Property type: SchedulerLegendPosition | string
	*/
	get legendPosition(): SchedulerLegendPosition | string  {
		return this.nativeElement ? this.nativeElement.legendPosition : undefined;
	}
	set legendPosition(value: SchedulerLegendPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.legendPosition = value;
		}
	}

	/** Determines the layout of the legend items.
	*	Property type: SchedulerLegendLayout | string
	*/
	get legendLayout(): SchedulerLegendLayout | string  {
		return this.nativeElement ? this.nativeElement.legendLayout : undefined;
	}
	set legendLayout(value: SchedulerLegendLayout | string) {
		if (this.nativeElement) {
			this.nativeElement.legendLayout = value;
		}
	}

	/** Determines the number of items when the legend switches automatically from horizontal list to menu.
	*	Property type: number
	*/
	get legendLayoutMenuBreakpoint(): number  {
		return this.nativeElement ? this.nativeElement.legendLayoutMenuBreakpoint : undefined;
	}
	set legendLayoutMenuBreakpoint(value: number) {
		if (this.nativeElement) {
			this.nativeElement.legendLayoutMenuBreakpoint = value;
		}
	}

	/** Determines the mouse wheel step. When this property is set to a positive number, the scroll step with mouse wheel or trackpad will depend on the property value.
	*	Property type: number
	*/
	get mouseWheelStep(): number  {
		return this.nativeElement ? this.nativeElement.mouseWheelStep : undefined;
	}
	set mouseWheelStep(value: number) {
		if (this.nativeElement) {
			this.nativeElement.mouseWheelStep = value;
		}
	}

	/** Determines weather or not horizontal scrollbar is shown.
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

	/**  Determines the language of the Scheduler. 
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

	/** Detetmines the maximum view date for the Scheduler.
	*	Property type: string | Date
	*/
	get max(): string | Date  {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: string | Date) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
		}
	}

	/** Detetmines the maximum number of events per Scheduler cell. By default this property is null which means that the number of events per cell is automatically determined by the size of the events.
	*	Property type: number | null
	*/
	get maxEventsPerCell(): number | null  {
		return this.nativeElement ? this.nativeElement.maxEventsPerCell : undefined;
	}
	set maxEventsPerCell(value: number | null) {
		if (this.nativeElement) {
			this.nativeElement.maxEventsPerCell = value;
		}
	}

	/** Detetmines the minimum view date for the Scheduler.
	*	Property type: string | Date
	*/
	get min(): string | Date  {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: string | Date) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
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

	/** Determines the minute formatting inside the Scheduler.
	*	Property type: MinuteFormat | string
	*/
	get minuteFormat(): MinuteFormat | string  {
		return this.nativeElement ? this.nativeElement.minuteFormat : undefined;
	}
	set minuteFormat(value: MinuteFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.minuteFormat = value;
		}
	}

	/** Determines the month name formatting inside the Scheduler.
	*	Property type: MonthFormat | string
	*/
	get monthFormat(): MonthFormat | string  {
		return this.nativeElement ? this.nativeElement.monthFormat : undefined;
	}
	set monthFormat(value: MonthFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.monthFormat = value;
		}
	}

	/** Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be colored differently inside the Timeline. The color is determined by a CSS variable.
	*	Property type: any
	*/
	get nonworkingDays(): any  {
		return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
	}
	set nonworkingDays(value: any) {
		if (this.nativeElement) {
			this.nativeElement.nonworkingDays = value;
		}
	}

	/** Determines the nonworking hours of the day. Hours are represented as numbers inside an array, however ranges of hours can be defined as an array with starting and ending hour separated by a comma. In the timline the cells that represent nonworking days are colored differently from the rest.
	*	Property type: any
	*/
	get nonworkingHours(): any  {
		return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
	}
	set nonworkingHours(value: any) {
		if (this.nativeElement) {
			this.nativeElement.nonworkingHours = value;
		}
	}

	/** Determines the interval (in seconds) at which the element will check for notifications.
	*	Property type: number
	*/
	get notificationInterval(): number  {
		return this.nativeElement ? this.nativeElement.notificationInterval : undefined;
	}
	set notificationInterval(value: number) {
		if (this.nativeElement) {
			this.nativeElement.notificationInterval = value;
		}
	}

	/** Determines the visibility of the resize handles.
	*	Property type: ResizeHandlesVisibility | string
	*/
	get resizeHandlesVisibility(): ResizeHandlesVisibility | string  {
		return this.nativeElement ? this.nativeElement.resizeHandlesVisibility : undefined;
	}
	set resizeHandlesVisibility(value: ResizeHandlesVisibility | string) {
		if (this.nativeElement) {
			this.nativeElement.resizeHandlesVisibility = value;
		}
	}

	/** Determines the rate at which the element will refresh it's content on element resize. By default it's refresh immediately. This property is used for element resize throttling
	*	Property type: number
	*/
	get resizeInterval(): number  {
		return this.nativeElement ? this.nativeElement.resizeInterval : undefined;
	}
	set resizeInterval(value: number) {
		if (this.nativeElement) {
			this.nativeElement.resizeInterval = value;
		}
	}

	/** An array of resources that can be assigned to the events.
	*	Property type: SchedulerResource[]
	*/
	get resources(): SchedulerResource[]  {
		return this.nativeElement ? this.nativeElement.resources : undefined;
	}
	set resources(value: SchedulerResource[]) {
		if (this.nativeElement) {
			this.nativeElement.resources = value;
		}
	}

	/** Defines an array of dates that are not allowed to have events on. Events that overlap restricted Dates or start/end on them will not be displayed.
	*	Property type: any
	*/
	get restrictedDates(): any  {
		return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
	}
	set restrictedDates(value: any) {
		if (this.nativeElement) {
			this.nativeElement.restrictedDates = value;
		}
	}

	/** Defines an array of hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed.
	*	Property type: any
	*/
	get restrictedHours(): any  {
		return this.nativeElement ? this.nativeElement.restrictedHours : undefined;
	}
	set restrictedHours(value: any) {
		if (this.nativeElement) {
			this.nativeElement.restrictedHours = value;
		}
	}

	/** Defines an array of dates and hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed. Each array item is an Object and requires 2 fields - date and hours. For example: { date: new Date(2022, 10, 1), hours: [[0, 6], 12, [20, 23]] }. The hours define a range of restricted hours similartly to the restricted hours property, the date defines a date where the restricted hours will be applied.
	*	Property type: any
	*/
	get restricted(): any  {
		return this.nativeElement ? this.nativeElement.restricted : undefined;
	}
	set restricted(value: any) {
		if (this.nativeElement) {
			this.nativeElement.restricted = value;
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

	/**  Determines the position of the date navigation navigation buttons inside the header of the element.
	*	Property type: SchedulerScrollButtonsPosition | string
	*/
	get scrollButtonsPosition(): SchedulerScrollButtonsPosition | string  {
		return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
	}
	set scrollButtonsPosition(value: SchedulerScrollButtonsPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.scrollButtonsPosition = value;
		}
	}

	/** Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded.
	*	Property type: boolean
	*/
	get shadeUntilCurrentTime(): boolean  {
		return this.nativeElement ? this.nativeElement.shadeUntilCurrentTime : undefined;
	}
	set shadeUntilCurrentTime(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.shadeUntilCurrentTime = value;
		}
	}

	/** Determines whether the resource legend is visible or not. The Legend shows the resources and their items in the footer section of the Scheduler. If filterable is enabled it is possible to filter by resource items by clicking on the corresponding resource item from the legend.
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

	/** Determines the name of the resource data item property that will be used for sorting the resource data defined as the resource.dataSource.
	*	Property type: string
	*/
	get sortBy(): string  {
		return this.nativeElement ? this.nativeElement.sortBy : undefined;
	}
	set sortBy(value: string) {
		if (this.nativeElement) {
			this.nativeElement.sortBy = value;
		}
	}

	/** Allows to define a custom sorting function that will be used to sort the resource data. The sortFunction is used when sortOrder is set to custom.
	*	Property type: any
	*/
	get sortFunction(): any  {
		return this.nativeElement ? this.nativeElement.sortFunction : undefined;
	}
	set sortFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.sortFunction = value;
		}
	}

	/** Determines the sorting order of the resource data items. When set to custom, a custom sorting function has to be defined for the sortFunction property. The asc stands for 'ascending' while desc means 'descending' sorting order.
	*	Property type: SchedulerSortOrder | string
	*/
	get sortOrder(): SchedulerSortOrder | string  {
		return this.nativeElement ? this.nativeElement.sortOrder : undefined;
	}
	set sortOrder(value: SchedulerSortOrder | string) {
		if (this.nativeElement) {
			this.nativeElement.sortOrder = value;
		}
	}

	/** Determines the repeating delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons.
	*	Property type: number
	*/
	get spinButtonsDelay(): number  {
		return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
	}
	set spinButtonsDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsDelay = value;
		}
	}

	/** Determines the initial delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons.
	*	Property type: number
	*/
	get spinButtonsInitialDelay(): number  {
		return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
	}
	set spinButtonsInitialDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsInitialDelay = value;
		}
	}

	/** Defines the statuses that will be available for selection thourgh the window editor for the events.
	*	Property type: SchedulerStatuse[]
	*/
	get statuses(): SchedulerStatuse[]  {
		return this.nativeElement ? this.nativeElement.statuses : undefined;
	}
	set statuses(value: SchedulerStatuse[]) {
		if (this.nativeElement) {
			this.nativeElement.statuses = value;
		}
	}

	/** Sets or gets the element's visual theme. 
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

	/** A format function for the Header of the Timeline. Allows to modify the date labels in the header cells.
	*	Property type: any
	*/
	get timelineHeaderFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
	}
	set timelineHeaderFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.timelineHeaderFormatFunction = value;
		}
	}

	/** Determines the date scale for the timeline cells.
	*	Property type: SchedulerTimelineDayScale | string
	*/
	get timelineDayScale(): SchedulerTimelineDayScale | string  {
		return this.nativeElement ? this.nativeElement.timelineDayScale : undefined;
	}
	set timelineDayScale(value: SchedulerTimelineDayScale | string) {
		if (this.nativeElement) {
			this.nativeElement.timelineDayScale = value;
		}
	}

	/** Enables/Disables the tick marks next to the time cells in the vertical header of the element. Time header appears in 'day' and 'week' views.
	*	Property type: boolean
	*/
	get timeRulerTicks(): boolean  {
		return this.nativeElement ? this.nativeElement.timeRulerTicks : undefined;
	}
	set timeRulerTicks(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.timeRulerTicks = value;
		}
	}

	/** Determines the timeZone for the element. By default if the local time zone is used if the property is not set.
	*	Property type: SchedulerTimeZone | string
	*/
	get timeZone(): SchedulerTimeZone | string  {
		return this.nativeElement ? this.nativeElement.timeZone : undefined;
	}
	set timeZone(value: SchedulerTimeZone | string) {
		if (this.nativeElement) {
			this.nativeElement.timeZone = value;
		}
	}

	/** Allows to display additional timeZones at once along with the default that is set via the timeZone property. Accepts an array values that represent the ids of valid time zones. The possbile time zones can be viewed in the timeZone property description. By default the local time zone is displayed.
	*	Property type: any
	*/
	get timeZones(): any  {
		return this.nativeElement ? this.nativeElement.timeZones : undefined;
	}
	set timeZones(value: any) {
		if (this.nativeElement) {
			this.nativeElement.timeZones = value;
		}
	}

	/** Determines the delay ( in miliseconds) before the tooltip/menu appears.
	*	Property type: number
	*/
	get tooltipDelay(): number  {
		return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
	}
	set tooltipDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.tooltipDelay = value;
		}
	}

	/** Determines the offset ot the tooltip/menu.
	*	Property type: number[]
	*/
	get tooltipOffset(): number[]  {
		return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
	}
	set tooltipOffset(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.tooltipOffset = value;
		}
	}

	/** Determines weather or not vertical scrollbar is shown.
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

	/** Determines the current view. The property accepts view values that are defined in the views property. Custom views should contain a valid value that will be set as the current view.
	*	Property type: string
	*/
	get view(): string  {
		return this.nativeElement ? this.nativeElement.view : undefined;
	}
	set view(value: string) {
		if (this.nativeElement) {
			this.nativeElement.view = value;
		}
	}

	/** Indicates the current Scheduler viewType. Custom views must contain a valid type property that corresponds to one of the view types. This property should not be set.
	*	Property type: SchedulerViewType | string
	*/
	get viewType(): SchedulerViewType | string  {
		return this.nativeElement ? this.nativeElement.viewType : undefined;
	}
	set viewType(value: SchedulerViewType | string) {
		if (this.nativeElement) {
			this.nativeElement.viewType = value;
		}
	}

	/** Determines the viewing date range of the timeline. The property should be set to an array of strings or view objects. When you set it to a string, you should use any of the following: 'day', 'week', 'month', 'agenda', 'timelineDay', 'timelineWeek', 'timelineMonth'. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view.hideHours - an Optional property applicable only to timelineWeek view that allows to hide the hour cells and only show the day cells.
	*	Property type: SchedulerViews | string
	*/
	get views(): SchedulerViews | string  {
		return this.nativeElement ? this.nativeElement.views : undefined;
	}
	set views(value: SchedulerViews | string) {
		if (this.nativeElement) {
			this.nativeElement.views = value;
		}
	}

	/** Determines type of the view selector located in the header of the element.
	*	Property type: SchedulerViewSelectorType | string
	*/
	get viewSelectorType(): SchedulerViewSelectorType | string  {
		return this.nativeElement ? this.nativeElement.viewSelectorType : undefined;
	}
	set viewSelectorType(value: SchedulerViewSelectorType | string) {
		if (this.nativeElement) {
			this.nativeElement.viewSelectorType = value;
		}
	}

	/** Determines the Start Date rule. The Week and TimelineWeek views start by default from the current date taking into account the firstDayOfWeek property. When this property is set to 'dateCurrent', these views will start from the value of the 'dateCurrent'.
	*	Property type: SchedulerViewStartDay | string
	*/
	get viewStartDay(): SchedulerViewStartDay | string  {
		return this.nativeElement ? this.nativeElement.viewStartDay : undefined;
	}
	set viewStartDay(value: SchedulerViewStartDay | string) {
		if (this.nativeElement) {
			this.nativeElement.viewStartDay = value;
		}
	}

	/** Determines the format of the week days inside the element. 
	*	Property type: WeekDayFormat | string
	*/
	get weekdayFormat(): WeekDayFormat | string  {
		return this.nativeElement ? this.nativeElement.weekdayFormat : undefined;
	}
	set weekdayFormat(value: WeekDayFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.weekdayFormat = value;
		}
	}

	/** Determines the format of the dates inside the timeline header when they represent years.
	*	Property type: YearFormat | string
	*/
	get yearFormat(): YearFormat | string  {
		return this.nativeElement ? this.nativeElement.yearFormat : undefined;
	}
	set yearFormat(value: YearFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.yearFormat = value;
		}
	}

	/** Sets or gets if the element can be focused.
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

	/** Determines the maximum number of redo/undo steps that will be remembered by the Scheduler. When the number is reached the oldest records are removed in order to add new.
	*	Property type: number
	*/
	get undoRedoSteps(): number  {
		return this.nativeElement ? this.nativeElement.undoRedoSteps : undefined;
	}
	set undoRedoSteps(value: number) {
		if (this.nativeElement) {
			this.nativeElement.undoRedoSteps = value;
		}
	}

	/** A function that can be used to completly customize the popup Window that is used to edit events. The function has the following arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. The default type is an empty string which means that it's the default event editing window. The other type is 'confirm' ( confirmation window) that appears when clicking on a repeating event. eventObj - the event object that is going to be edited.
	*	Property type: any
	*/
	get windowCustomizationFunction(): any  {
		return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
	}
	set windowCustomizationFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.windowCustomizationFunction = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["autoScrollStep","autoHeightAllDayCells","available","colorScheme","currentTimeIndicator","currentTimeIndicatorInterval","contextMenuDataSource","contextMenuClipboardActions","eventTemplate","eventCollectorTemplate","eventRenderMode","eventTooltipTemplate","cellTemplate","dateCurrent","dataExport","dataSource","dateSelectorFormatFunction","dayFormat","disabled","disableAutoScroll","disableDrag","disableDrop","disableResize","disableSelection","disableWindowEditor","disableContextMenu","disableEventMenu","disableViewMenu","disableDateMenu","dragFeedbackFormatFunction","dragOffset","filter","filterable","filterMode","events","firstDayOfWeek","footerTemplate","groupByDate","groupOrientation","groupTemplate","groups","hourEnd","hourStart","hourFormat","headerTemplate","headerDatePosition","headerNavigationStyle","headerViewPosition","hideAllDay","hideNonworkingWeekdays","hideOtherMonthDays","hideTodayButton","hideViewMenuCheckableItems","hideWeekend","legendLocation","legendPosition","legendLayout","legendLayoutMenuBreakpoint","mouseWheelStep","horizontalScrollBarVisibility","locale","max","maxEventsPerCell","min","messages","minuteFormat","monthFormat","nonworkingDays","nonworkingHours","notificationInterval","resizeHandlesVisibility","resizeInterval","resources","restrictedDates","restrictedHours","restricted","rightToLeft","scrollButtonsPosition","shadeUntilCurrentTime","showLegend","sortBy","sortFunction","sortOrder","spinButtonsDelay","spinButtonsInitialDelay","statuses","theme","timelineHeaderFormatFunction","timelineDayScale","timeRulerTicks","timeZone","timeZones","tooltipDelay","tooltipOffset","verticalScrollBarVisibility","view","viewType","views","viewSelectorType","viewStartDay","weekdayFormat","yearFormat","unfocusable","undoRedoSteps","windowCustomizationFunction"];
	}
	/**  This event is triggered when a batch update was started after executing the beginUpdate method.
	*  @param event. The custom event. 	*/
	onBeginUpdate?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a batch update was ended from after executing the endUpdate method.
	*  @param event. The custom event. 	*/
	onEndUpdate?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a new cell is selected/unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
	*   value - The new selected Date.
	*   oldValue - The previously selected Date.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an Event has been updated/inserted/removed/dragged/resized or an exception of a repeating event has been added/updated/removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
	*   item - An object that represents the actual item with it's attributes.
	*   type - The type of change that is being done to the item.
	*/
	onItemChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an Event is going to be updated/inserted/removed. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
	*   item - An object that represents the actual item with it's attributes.
	*   type - The type of change that is going to be made to the item (e.g. 'inserting', 'removing', 'updating', 'exceptionInserting', 'exceptionUpdating', 'exceptionRemoving').
	*/
	onItemChanging?: ((event?: Event) => void) | undefined
	/**  This event is triggered when en event, event item or a context menu item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	itemObj)
	*   item - The HTMLElement for the event.
	*   type - The type of item that is clicked. The possible values are: <ul><li>event - when an event item is clicked.</li><li>context - when a context menu item is clicked.</li></ul>.
	*   itemObj - The event object.
	*/
	onItemClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an Event is inserted.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - An object that represents the actual item with it's attributes.
	*/
	onItemInsert?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an Event is removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - An object that represents the actual item with it's attributes.
	*/
	onItemRemove?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an Event is updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
	*   type - The type of item that has been modified.
	*   item - An object that represents the actual item with it's attributes.
	*/
	onItemUpdate?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the view is changed via user interaction.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The value of the previously selected view.
	*   value - The value of the new selected view.
	*/
	onViewChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered before the view is changed via user interaction. The view change action can be canceled if event.preventDefault() is called on the event.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The value of the previously selected view.
	*   value - The value of the new selected view.
	*/
	onViewChanging?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a shortcut key for an event is pressed. By default only 'Delete' key is used.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	key, 	target, 	eventObj)
	*   key - The shortcut key that was pressed.
	*   target - The event target (HTMLElement).
	*   eventObj - The scheduler Event object that affected by the keypress.
	*/
	onEventShortcutKey?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the 'dateCurrent' property is changed. This can be caused by navigating to a different date.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previous current date that was in view.
	*   value - The current date in view.
	*/
	onDateChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when dragging of an event begins. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is going to be dragged.
	*   item - The scheduler Event object that is going to be dragged.
	*   itemDateRange - The start/end dates for the Scheduler Event.
	*   originalEvent - The original event object.
	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when dragging of an event finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is dragged.
	*   item - The scheduler Event object that is dragged.
	*   itemDateRange - The new start/end dates for the dragged Scheduler Event.
	*   originalEvent - The original event object.
	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user drops an item over a cell.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	date, 	allDay)
	*   target - The HTMLElement that corresponds to the event that is dragged.
	*   date - The cell's date under the pointer.
	*   allDay - Boolean value, which is true when the cell under the pointer is all day cell.
	*/
	onDropoverCell?: ((event?: Event) => void) | undefined
	/**  This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is going to be resized.
	*   item - The scheduler Event object that is going to be resized.
	*   itemDateRange - The start/end dates for Scheduler Event that is going to be resized.
	*   originalEvent - The original event object.
	*/
	onResizeStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the resizing of an event finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	itemDateRange, 	originalEvent)
	*   target - The HTMLElement that corresponds to the event that is resized.
	*   item - The scheduler Event object that is resized.
	*   itemDateRange - The new start/end dates for the resized Scheduler Event.
	*   originalEvent - The original event object.
	*/
	onResizeEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user starts top open the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type, 	eventObj)
	*   target - The dialog window that is opening.
	*   item - The event object that is going to be edited.
	*   type - The type of window that is going to open. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
	*   eventObj - The event object that is the target of the menu.
	*/
	onEditDialogOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user opens the event dialog window.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item, 	eventObj)
	*   target - The dialog window that is opened.
	*   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
	*   item - The event object that is being edited.
	*   eventObj - The event object that is the target of the menu.
	*/
	onEditDialogOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user closes the event dialog window.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	editors, 	item, 	eventObj)
	*   target - The dialog window that is closed.
	*   editors - An object containing all event editors that are present inside the window. This property is undefined when the window is of type 'confirm', because confirm windows do not contain editors.
	*   item - The event object that is being edited.
	*   eventObj - The event object that is the target of the menu.
	*/
	onEditDialogClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user is about to close the event dialog window. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	type, 	eventObj)
	*   target - The dialog window that is closing.
	*   item - The event object that is edited.
	*   type - The type of window that is going to be closed. Two window types are available, the dafault which is an empty string ( does not have a type) and 'confirm' which is displayed when clicked on a repeating event.
	*   eventObj - The event object that is the target of the menu.
	*/
	onEditDialogClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user begins to open the context menu on a timeline cell or an event element. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	onContextMenuOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the context menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	onContextMenuOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the context menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	onContextMenuClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user is about to close the context menu. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	cellObj, 	eventObj)
	*   target - The context menu instance.
	*   owner - The HTMLElement that the menu belongs to.
	*   cellObj - The cell object that is the target of the menu. If the target is an event instead of a cell this parameter will be undefined.
	*   eventObj - The event object that is the target of the menu. If the target is a cell instead of an event this paramter will be undefined.
	*/
	onContextMenuClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the event menu is about to open. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	onEventMenuOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the event menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	onEventMenuOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the event menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	onEventMenuClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the evet menu is about to close. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner, 	eventObj)
	*   target - The menu instance.
	*   owner - The HTMLElement of the event that the menu belongs to.
	*   eventObj - The event object that is the target of the menu.
	*/
	onEventMenuClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the date selection menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	onDateMenuOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the date selection menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	onDateMenuClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the view selection menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	onViewMenuOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the view selection menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The menu instance.
	*/
	onViewMenuClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a notification is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
	*   instance - The toast item instance that is opened.
	*/
	onNotificationOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a notification is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
	*   instance - The toast item instance that is closed.
	*/
	onNotificationClose?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onBeginUpdate","onEndUpdate","onChange","onItemChange","onItemChanging","onItemClick","onItemInsert","onItemRemove","onItemUpdate","onViewChange","onViewChanging","onEventShortcutKey","onDateChange","onDragStart","onDragEnd","onDropoverCell","onResizeStart","onResizeEnd","onEditDialogOpening","onEditDialogOpen","onEditDialogClose","onEditDialogClosing","onContextMenuOpening","onContextMenuOpen","onContextMenuClose","onContextMenuClosing","onEventMenuOpening","onEventMenuOpen","onEventMenuClose","onEventMenuClosing","onDateMenuOpen","onDateMenuClose","onViewMenuOpen","onViewMenuClose","onNotificationOpen","onNotificationClose","onCreate","onReady"];
	}
	/** Adds an event to the Scheduler. Accepts an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string } 
	* @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
	*/
    public addEvent(eventObj: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEvent(eventObj);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addEvent(eventObj);
            });
        }
    }

	/** Adds a new view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView'); 
	* @param {string} type. The view type.
	* @param {string} label. The view's label displayed in the header.
	* @param {string} value. The view's value used to identify the view.
	* @param {boolean} hideWeekend. Determines whether to hide the weekend.
	* @param {boolean} hideNonworkingWeekdays. Determines whether to hide the non working days.
	* @param {number} additionalDays. Determines whether to add additional days to the view.
	*/
    public addView(type: string, label: string, value: string, hideWeekend: boolean, hideNonworkingWeekdays: boolean, additionalDays: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
            });
        }
    }

	/** Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once. 
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

	/** Creates an event and adds it to the Scheduler. 
	* @param {string} label. Event label.
	* @param {string} value. Event value.
	* @param {string} dateStart. Event date start.
	* @param {string} dateEnd. Event date end.
	* @param {boolean} allDay. Event all day. Set it to true to create all day event.
	*/
    public createEvent(label: string, value: string, dateStart: string, dateEnd: string, allDay: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
            });
        }
    }

	/** Ends the update operation. This method will resume the rendering and will refresh the element. 
	*/
    public endUpdate(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate();
            });
        }
    }

	/** Returns an array of the start and end view dates. 
	* @returns {Date[]}
  */
	public getViewDates() : any {
        const result: any = this.nativeElement.getViewDates();
        return result;
    }

	/** Refereshes the Scheduler by recalculating the Scrollbars.  
	* @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
	*/
    public refresh(fullRefresh?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh(fullRefresh);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh(fullRefresh);
            });
        }
    }

	/** Exports the events from the Scheduler. 
	* @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
	* @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
	*/
    public exportData(dataFormat: string, callback?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(dataFormat, callback);
            });
        }
    }

	/** Returns a JSON representation of the events inside the Scheduler. 
	* @returns {any}
  */
	public getDataSource() : any {
        const result: any = this.nativeElement.getDataSource();
        return result;
    }

	/** Returns a JSON representation of the resources inside the Scheduler. 
	* @returns {any}
  */
	public getResources() : any {
        const result: any = this.nativeElement.getResources();
        return result;
    }

	/** Gets a date from coordinates 
	* @param {number} x. X coordinate.
	* @param {number} y. Y coordinate.
	* @returns {string}
  */
	public getDateFromCoordinates(x:number, y:number) : any {
        const result: any = this.nativeElement.getDateFromCoordinates(x, y);
        return result;
    }

	/** Gets whether a cell is all day cell from coordinates 
	* @param {number} x. X coordinate.
	* @param {number} y. Y coordinate.
	* @returns {boolean}
  */
	public getIsAllDayCellFromCoordinates(x:number, y:number) : any {
        const result: any = this.nativeElement.getIsAllDayCellFromCoordinates(x, y);
        return result;
    }

	/** Returns the current state of the Scheduler. Includes the current dateCurernt, dataSource and timeZone properties. 
	* @returns {any}
  */
	public getState() : any {
        const result: any = this.nativeElement.getState();
        return result;
    }

	/** Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element. 
	*/
    public clearState(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }

	/** Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method. 
	* @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
	*/
    public loadState(state?: any[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }

	/** Saves the current events of the element to LocalStorage. Requires an id to be set to the element. 
	* @param {any[]} state?. An Array containing a valid structure of Scheduler events.
	*/
    public saveState(state?: any[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState(state);
            });
        }
    }

	/** Sets the Scheduler's view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView'); 
	* @param {string} view?. The view's value. For example: 'day'. 
	*/
    public setView(view?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setView(view);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setView(view);
            });
        }
    }

	/** Checks whether the Scheduler contains the event. 
	* @param {any} eventObj. A Scheduler event object.
	* @returns {boolean}
  */
	public containsEvent(eventObj:any) : any {
        const result: any = this.nativeElement.containsEvent(eventObj);
        return result;
    }

	/** Inserts an event as object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string } 
	* @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
	* @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
	*/
    public insertEvent(eventObj: any, index?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertEvent(eventObj, index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertEvent(eventObj, index);
            });
        }
    }

	/** Updates an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string } 
	* @param {any} index. A number that represents the index of an event or a Scheduler event object.
	* @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
	*/
    public updateEvent(index: any, eventObj: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEvent(index, eventObj);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateEvent(index, eventObj);
            });
        }
    }

	/** Removes an existing event. 
	* @param {any} index. A number that represents the index of an event or the actual event object to be removed.
	*/
    public removeEvent(index: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEvent(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeEvent(index);
            });
        }
    }

	/** Returns an array of all exceptions of the target repeating event. 
	* @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
	* @returns {any}
  */
	public getEventExceptions(eventObj:any) : any {
        const result: any = this.nativeElement.getEventExceptions(eventObj);
        return result;
    }

	/** Adds an event exception to a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.addEventException(eventObj, { date: occuranceDate, dateStart: newDateStart, dateEnd: newDateEnd, label: 'Exception' }); 
	* @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
	* @param {any} exceptionObj. An event object that describes an exception. Exception event objects must have a <b>date</b> attribute of type Date which indicates the date of occurence.
	*/
    public addEventException(eventObj: any, exceptionObj: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEventException(eventObj, exceptionObj);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addEventException(eventObj, exceptionObj);
            });
        }
    }

	/** Updates an event exception of a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.updateEventException(eventObj, dateOfOccurance, { dateStart: newDateStart, dateEnd: newDateEnd, label: 'Updated Exception' }); 
	* @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
	* @param {any} exceptionRef. The index, id, an occurence date of the exception or an object reference of an existing Scheduler repeating event exception.
	* @param {any} exceptionObj. An event object that describes an exception. All attributes of an exception can be updated except the occurance date (the <b>date</b> attribute).
	*/
    public updateEventException(eventObj: any, exceptionRef: any, exceptionObj: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
            });
        }
    }

	/** Removes an exception from a repeating event. 
	* @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
	* @param {any} index. The index, id, occurance date or an object reference of an event exception that belongs to the target repeating event.
	*/
    public removeEventException(eventObj: any, index: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEventException(eventObj, index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeEventException(eventObj, index);
            });
        }
    }

	/** Opens the popup Window for specific event Editing. 
	* @param {any} index. A number that represents the index of a event or the actual event object to be edited.
	*/
    public openWindow(index: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openWindow(index);
            });
        }
    }

	/** Closes the popup window. 
	*/
    public closeWindow(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeWindow();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeWindow();
            });
        }
    }

	/** Prepares the Scheduler for printing by opening the browser's Print Preview. 
	*/
    public print(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }

	/** Scrolls the Scheduler to a Date. 
	* @param {Date} date. The date to scroll to.
	* @param {boolean} strictScroll?. Determines whether to scroll strictly to the date or not. This mean sthat the Scheduler wll scroll to the begining of the cell that corresponds to the target date.
	* @param {boolean} autoScroll?. Calculates the scroll positions and element bounds, then adds an offset to scroll within the middle of the view.
	*/
    public scrollToDate(date: Date, strictScroll?: boolean, autoScroll?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
            });
        }
    }

	/** Navigates the Scheduler to a Date. 
	* @param {Date} date. The date to navigate to.
	*/
    public navigateToDate(date: Date): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateToDate(date);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateToDate(date);
            });
        }
    }

	/** Scrolls the Scheduler to an event. 
	* @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
	*/
    public scrollToEvent(index: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToEvent(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToEvent(index);
            });
        }
    }

	/** Opens a custom notification. 
	* @param {string} message. The notification message.
	* @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
	*/
    public openNotification(message: string, toastSettings: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openNotification(message, toastSettings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openNotification(message, toastSettings);
            });
        }
    }

	/** Closes all notifications. 
	*/
    public closeNotifications(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeNotifications();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeNotifications();
            });
        }
    }

	/** Returns all occurances of an event. 
	* @param {any} eventObj. A Scheduler evnet object.
	* @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
	*/
    public occurrences(eventObj: any, count: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrences(eventObj, count);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrences(eventObj, count);
            });
        }
    }

	/** Returns all occurances of an event between two dates. 
	* @param {any} eventObj. A Scheduler event object.
	* @param {Date} dateFrom. The start date.
	* @param {Date} dateTo. The end date.
	*/
    public occurrencesBetween(eventObj: any, dateFrom: Date, dateTo: Date): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
            });
        }
    }

	/** Returns the first occurance of an event after a date. 
	* @param {any} eventObj. A Scheduler event object.
	* @param {number} date. The date after which the first occurance of the event will be returned.
	*/
    public occurrenceAfter(eventObj: any, date: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceAfter(eventObj, date);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceAfter(eventObj, date);
            });
        }
    }

	/** Returns the last occurance of an event before a date. 
	* @param {any} eventObj. A Scheduler event object.
	* @param {number} date. The date before which the first occurance of the event will be returned.
	*/
    public occurrenceBefore(eventObj: any, date: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceBefore(eventObj, date);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceBefore(eventObj, date);
            });
        }
    }

	/** Returns the dateStart/dateEnd of a timeline cell. 
	* @param {HTMLElement} cell. A Scheduler timeline cell element.
	* @returns {any}
  */
	public getCellDateRange(cell:HTMLElement) : any {
        const result: any = this.nativeElement.getCellDateRange(cell);
        return result;
    }

	/** Opens the tooltip(event menu) for an event. 
	* @param {any} eventObj. A Scheduler event object or it's index.
	*/
    public openEventTooltip(eventObj: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openEventTooltip(eventObj);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openEventTooltip(eventObj);
            });
        }
    }

	/** Closes the event tooltip (event menu). 
	*/
    public closeEventTooltip(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeEventTooltip();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeEventTooltip();
            });
        }
    }

	/** Returns true or false whether the date is restricted or not. 
	* @param {Date} date. A Date object.
	* @returns {boolean}
  */
	public isDateRestricted(date:Date) : any {
        const result: any = this.nativeElement.isDateRestricted(date);
        return result;
    }

	/** Returns true or false whether the hour is restricted or not. 
	* @param {number | Date} hour. A number that represents an hour ( 0 to 23 ) or a Date object.
	* @returns {boolean}
  */
	public isHourRestricted(hour:number | Date) : any {
        const result: any = this.nativeElement.isHourRestricted(hour);
        return result;
    }

	/** Returns true or false whether the event is restricted or not. 
	* @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
	* @returns {boolean}
  */
	public isEventRestricted(eventObj:any) : any {
        const result: any = this.nativeElement.isEventRestricted(eventObj);
        return result;
    }

	/** Deletes the current undo/redo history. 
	* @returns {boolean}
  */
	public deleteUndoRedoHistory() : any {
        const result: any = this.nativeElement.deleteUndoRedoHistory();
        return result;
    }

	/** Indicates whether it is possible to redo an action. 
	* @returns {boolean}
  */
	public canRedo() : any {
        const result: any = this.nativeElement.canRedo();
        return result;
    }

	/** Indicates whether it is possbile to undo an action. 
	* @returns {boolean}
  */
	public canUndo() : any {
        const result: any = this.nativeElement.canUndo();
        return result;
    }

	/** Redo the next event modification. 
	* @param {number} step?. A step to redo to.
	* @returns {boolean}
  */
	public redo(step?:number) : any {
        const result: any = this.nativeElement.redo(step);
        return result;
    }

	/** Undo the last event modification. 
	* @param {number} step?. A step to undo to.
	* @returns {boolean}
  */
	public undo(step?:number) : any {
        const result: any = this.nativeElement.undo(step);
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
			React.createElement("smart-scheduler", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Scheduler;
