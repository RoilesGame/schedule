import React from "react";
import { GanttChartProperties } from "./../../index";
import { GanttChartDataExportItemType, GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartSortMode, GanttChartTaskType, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDateMarker, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskIndicator, GanttChartTaskPlanned, GanttChartTaskSegment, GanttChartTaskColumn, GanttChartTooltip} from './../../index';
export { GanttChartProperties } from "./../../index";
export { GanttChartDataExportItemType, GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartSortMode, GanttChartTaskType, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDateMarker, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskIndicator, GanttChartTaskPlanned, GanttChartTaskSegment, GanttChartTaskColumn, GanttChartTooltip} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface GanttChartProps extends GanttChartProperties {
    className?: string;
    style?: React.CSSProperties;

	onBeginUpdate?: ((event?: Event) => void) | undefined;
	onEndUpdate?: ((event?: Event) => void) | undefined;
	onConnectionStart?: ((event?: Event) => void) | undefined;
	onConnectionEnd?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onColumnResize?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onCollapse?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onExpand?: ((event?: Event) => void) | undefined;
	onFilter?: ((event?: Event) => void) | undefined;
	onItemClick?: ((event?: Event) => void) | undefined;
	onItemInsert?: ((event?: Event) => void) | undefined;
	onItemRemove?: ((event?: Event) => void) | undefined;
	onItemUpdate?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onProgressChangeStart?: ((event?: Event) => void) | undefined;
	onProgressChangeEnd?: ((event?: Event) => void) | undefined;
	onResizeStart?: ((event?: Event) => void) | undefined;
	onResizeEnd?: ((event?: Event) => void) | undefined;
	onSort?: ((event?: Event) => void) | undefined;
	onScrollBottomReached?: ((event?: Event) => void) | undefined;
	onScrollTopReached?: ((event?: Event) => void) | undefined;
	onScrollLeftReached?: ((event?: Event) => void) | undefined;
	onScrollRightReached?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
*/
export class GanttChart extends React.Component<React.HTMLAttributes<Element> & GanttChartProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'GanttChart' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Determines whether nonworkingDays/nonworkingHours are taken into considuration when determining the dateEnd of the tasks. When this property is enabled the dateEnd of the tasks is calculated to include only the actual working time. By default it's disabled and only calendar time is used.
	*	Property type: boolean
	*/
	get adjustToNonworkingTime(): boolean  {
		return this.nativeElement ? this.nativeElement.adjustToNonworkingTime : undefined;
	}
	set adjustToNonworkingTime(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.adjustToNonworkingTime = value;
		}
	}

	/** Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks.
	*	Property type: boolean
	*/
	get autoSchedule(): boolean  {
		return this.nativeElement ? this.nativeElement.autoSchedule : undefined;
	}
	set autoSchedule(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoSchedule = value;
		}
	}

	/** Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined.
	*	Property type: boolean
	*/
	get autoScheduleStrictMode(): boolean  {
		return this.nativeElement ? this.nativeElement.autoScheduleStrictMode : undefined;
	}
	set autoScheduleStrictMode(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoScheduleStrictMode = value;
		}
	}

	/** Determines the scroll speed when dragging when autoScroll property is set. 
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

	/** Enabled/Disables the colummn header menu. When enabled and the user hovers a column header, a drop down button will appear that triggers a column menu for quick actions like sorting, filtering, etc. The actions depend on the enabled Gantt features, for example the filtering action will be available only if filtering is enabled for the element.
	*	Property type: boolean
	*/
	get columnMenu(): boolean  {
		return this.nativeElement ? this.nativeElement.columnMenu : undefined;
	}
	set columnMenu(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnMenu = value;
		}
	}

	/** Determines whether the Table columns are resizable or not. When enabled it is possible to resize the columns from the header cells of the Table in both Task and Resource timelines.
	*	Property type: boolean
	*/
	get columnResize(): boolean  {
		return this.nativeElement ? this.nativeElement.columnResize : undefined;
	}
	set columnResize(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnResize = value;
		}
	}

	/** Determines resize feedback is used during column resizing. This property is applicable only when columnResize is enabled.
	*	Property type: boolean
	*/
	get columnResizeFeedback(): boolean  {
		return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
	}
	set columnResizeFeedback(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnResizeFeedback = value;
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

	/** Sets the GanttChart's Data Export options.
	*	Property type: GanttChartDataExport
	*/
	get dataExport(): GanttChartDataExport  {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value: GanttChartDataExport) {
		if (this.nativeElement) {
			this.nativeElement.dataExport = value;
		}
	}

	/** Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown. The duration always shows the calendar time whether it is in days/hours or other.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).overdue - a boolean that indicates whether the task's dateEnd has surpassed it's deadline date.disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.segments - an array of objects that allows to devide a task into multiple segements. Each segment (except the first) can have a different starting date, duration and label.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..GanttChart also accepts a DataAdapter instance as dataSource. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/.
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

	/** Determines the format of the dates in the timeline header when they represent days.
	*	Property type: GanttDayFormat | string
	*/
	get dayFormat(): GanttDayFormat | string  {
		return this.nativeElement ? this.nativeElement.dayFormat : undefined;
	}
	set dayFormat(value: GanttDayFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.dayFormat = value;
		}
	}

	/** Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks.
	*	Property type: string | Date
	*/
	get dateEnd(): string | Date  {
		return this.nativeElement ? this.nativeElement.dateEnd : undefined;
	}
	set dateEnd(value: string | Date) {
		if (this.nativeElement) {
			this.nativeElement.dateEnd = value;
		}
	}

	/** Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks.
	*	Property type: string | Date
	*/
	get dateStart(): string | Date  {
		return this.nativeElement ? this.nativeElement.dateStart : undefined;
	}
	set dateStart(value: string | Date) {
		if (this.nativeElement) {
			this.nativeElement.dateStart = value;
		}
	}

	/** Determines the date markers that will be displayed inside the timeline. Date markers allow to mark and even label specific dates (including time) inside the GanttChart timeline.
	*	Property type: GanttChartDateMarker[]
	*/
	get dateMarkers(): GanttChartDateMarker[]  {
		return this.nativeElement ? this.nativeElement.dateMarkers : undefined;
	}
	set dateMarkers(value: GanttChartDateMarker[]) {
		if (this.nativeElement) {
			this.nativeElement.dateMarkers = value;
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

	/** Disables auto scrolling while dragging/resizing a task bar inside the Timeline.
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

	/** Disables dragging of tasks in the Timeline.
	*	Property type: boolean
	*/
	get disableTaskDrag(): boolean  {
		return this.nativeElement ? this.nativeElement.disableTaskDrag : undefined;
	}
	set disableTaskDrag(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableTaskDrag = value;
		}
	}

	/** Disables task progress changing in the Timeline.
	*	Property type: boolean
	*/
	get disableTaskProgressChange(): boolean  {
		return this.nativeElement ? this.nativeElement.disableTaskProgressChange : undefined;
	}
	set disableTaskProgressChange(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableTaskProgressChange = value;
		}
	}

	/** Disables resizing of tasks in the Timeline.
	*	Property type: boolean
	*/
	get disableTaskResize(): boolean  {
		return this.nativeElement ? this.nativeElement.disableTaskResize : undefined;
	}
	set disableTaskResize(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableTaskResize = value;
		}
	}

	/** Disables the selection inside the GanttChart.
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

	/** Disables the task segment dragging.
	*	Property type: boolean
	*/
	get disableSegmentDrag(): boolean  {
		return this.nativeElement ? this.nativeElement.disableSegmentDrag : undefined;
	}
	set disableSegmentDrag(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableSegmentDrag = value;
		}
	}

	/** Disables the task segment resizing.
	*	Property type: boolean
	*/
	get disableSegmentResize(): boolean  {
		return this.nativeElement ? this.nativeElement.disableSegmentResize : undefined;
	}
	set disableSegmentResize(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableSegmentResize = value;
		}
	}

	/** Disables the window editor for the GanttChart.
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

	/** Determines in what unit is task duration property measured.
	*	Property type: Duration | string
	*/
	get durationUnit(): Duration | string  {
		return this.nativeElement ? this.nativeElement.durationUnit : undefined;
	}
	set durationUnit(value: Duration | string) {
		if (this.nativeElement) {
			this.nativeElement.durationUnit = value;
		}
	}

	/** Determines whether a dedicated filter row is used for Table filtering instead of the default filter input. This property has no effect if filtering is not enabled.
	*	Property type: boolean
	*/
	get filterRow(): boolean  {
		return this.nativeElement ? this.nativeElement.filterRow : undefined;
	}
	set filterRow(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.filterRow = value;
		}
	}

	/** Groups the tasks inside the Task timeline according to the resources they are assigned to. Unassigned tasks are placed in a default group labeled 'Unassigned'.
	*	Property type: boolean
	*/
	get groupByResources(): boolean  {
		return this.nativeElement ? this.nativeElement.groupByResources : undefined;
	}
	set groupByResources(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.groupByResources = value;
		}
	}

	/** Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
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

	/** Determines whether the dateMarkers are visible or not.
	*	Property type: boolean
	*/
	get hideDateMarkers(): boolean  {
		return this.nativeElement ? this.nativeElement.hideDateMarkers : undefined;
	}
	set hideDateMarkers(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideDateMarkers = value;
		}
	}

	/** By default the Timeline has a two level header - timeline details and timeline header. This property hides the header details container( the top container ).
	*	Property type: boolean
	*/
	get hideTimelineHeaderDetails(): boolean  {
		return this.nativeElement ? this.nativeElement.hideTimelineHeaderDetails : undefined;
	}
	set hideTimelineHeaderDetails(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideTimelineHeaderDetails = value;
		}
	}

	/** Shows the selection column of the Task/Resource Table. When applied a checkbox column is displayed that allows to select tasks/resources.
	*	Property type: boolean
	*/
	get showSelectionColumn(): boolean  {
		return this.nativeElement ? this.nativeElement.showSelectionColumn : undefined;
	}
	set showSelectionColumn(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showSelectionColumn = value;
		}
	}

	/** Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently.
	*	Property type: boolean
	*/
	get hideResourcePanel(): boolean  {
		return this.nativeElement ? this.nativeElement.hideResourcePanel : undefined;
	}
	set hideResourcePanel(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideResourcePanel = value;
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

	/** Determines the format of the dates inside the timeline header when they represent hours.
	*	Property type: HourFormat | string
	*/
	get hourFormat(): HourFormat | string  {
		return this.nativeElement ? this.nativeElement.hourFormat : undefined;
	}
	set hourFormat(value: HourFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.hourFormat = value;
		}
	}

	/** When enabled, scrolling to the end of the horizotal timeline, triggers the creation of additional to extend the time range. The number of cells to be added when the scrollbar reaches the end position is determined by the infiniteTimelineStep.
	*	Property type: boolean
	*/
	get infiniteTimeline(): boolean  {
		return this.nativeElement ? this.nativeElement.infiniteTimeline : undefined;
	}
	set infiniteTimeline(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.infiniteTimeline = value;
		}
	}

	/** Determines the number of cells to be added when the horizontal scroll bar of the Timeline reaches it's end position when infiniteTimeline is enabled.
	*	Property type: number
	*/
	get infiniteTimelineStep(): number  {
		return this.nativeElement ? this.nativeElement.infiniteTimelineStep : undefined;
	}
	set infiniteTimelineStep(value: number) {
		if (this.nativeElement) {
			this.nativeElement.infiniteTimelineStep = value;
		}
	}

	/** When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa.
	*	Property type: boolean
	*/
	get inverted(): boolean  {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.inverted = value;
		}
	}

	/** Determines whether keyboard navigation inside the Table is enabled or not. Keyboard navigation affects both Task and Resource Tables. It allows to navigate between items. the following keyboard shortcut keys are available for focused tasks inside the Task Table: Enter - opens the Window editor to edit the currently focused task.Delete - opens a confirmation window regarding the deletion of the currently focused task.
	*	Property type: boolean
	*/
	get keyboardNavigation(): boolean  {
		return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
	}
	set keyboardNavigation(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.keyboardNavigation = value;
		}
	}

	/**  Determines the language of the GanttChart. 
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

	/** Detetmines the maximum possible date of the Timeline.
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

	/** Detetmines the minimum possible date of the Timeline.
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

	/** Determines the format of the dates the timeline header when they represent months.
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

	/** Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled.
	*	Property type: number[]
	*/
	get nonworkingDays(): number[]  {
		return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
	}
	set nonworkingDays(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.nonworkingDays = value;
		}
	}

	/** Determines the nonworking hours of a day. Hours are represented as numbers inside an array (e.g. [1,2,3] - means 1,2 and 3 AM) or number ranges represented as nested arrays(e.g. [[0,6]] - means from 0 to 6 AM). In the timline the cells that represent nonworking days are colored differently from the rest and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled.
	*	Property type: number[] | number[][]
	*/
	get nonworkingHours(): number[] | number[][]  {
		return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
	}
	set nonworkingHours(value: number[] | number[][]) {
		if (this.nativeElement) {
			this.nativeElement.nonworkingHours = value;
		}
	}

	/** A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). item - the connection/task object that is the target of the window.
	*	Property type: any
	*/
	get popupWindowCustomizationFunction(): any  {
		return this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction : undefined;
	}
	set popupWindowCustomizationFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.popupWindowCustomizationFunction = value;
		}
	}

	/** Determines which Tab items are visible inside the popup window. Three possible values are allowed: general - the general tab with task properties determines by the taskColumns property.dependency - the dependency tab which shows the connections to the task and allows to create/delete connections.segments - the segments tab which shows the segments of the task and allows to created/delete segments..
	*	Property type: string[]
	*/
	get popupWindowTabs(): string[]  {
		return this.nativeElement ? this.nativeElement.popupWindowTabs : undefined;
	}
	set popupWindowTabs(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.popupWindowTabs = value;
		}
	}

	/** A format function for the Timeline task progress label. The expected result from the function is a string. The label is hidden by default can be shown with the showProgressLabel property.
	*	Property type: any
	*/
	get progressLabelFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.progressLabelFormatFunction : undefined;
	}
	set progressLabelFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.progressLabelFormatFunction = value;
		}
	}

	/** A getter that returns a flat structure as an array of all resources inside the element.
	*	Property type: GanttChartResource[]
	*/
	get resources(): GanttChartResource[]  {
		return this.nativeElement ? this.nativeElement.resources : undefined;
	}
	set resources(value: GanttChartResource[]) {
		if (this.nativeElement) {
			this.nativeElement.resources = value;
		}
	}

	/** Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column
	*	Property type: GanttChartResourceColumn[]
	*/
	get resourceColumns(): GanttChartResourceColumn[]  {
		return this.nativeElement ? this.nativeElement.resourceColumns : undefined;
	}
	set resourceColumns(value: GanttChartResourceColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.resourceColumns = value;
		}
	}

	/** Determines whether the Resource Table is filterable or not.
	*	Property type: boolean
	*/
	get resourceFiltering(): boolean  {
		return this.nativeElement ? this.nativeElement.resourceFiltering : undefined;
	}
	set resourceFiltering(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.resourceFiltering = value;
		}
	}

	/** A format function that allows to re-format the group row labels when groupByResources is enabled.
	*	Property type: any
	*/
	get resourceGroupFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.resourceGroupFormatFunction : undefined;
	}
	set resourceGroupFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.resourceGroupFormatFunction = value;
		}
	}

	/** Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
	*	Property type: any
	*/
	get resourcePanelHeaderTemplate(): any  {
		return this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate : undefined;
	}
	set resourcePanelHeaderTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.resourcePanelHeaderTemplate = value;
		}
	}

	/** Determines the min size of the Resource Panel.
	*	Property type: number | string
	*/
	get resourcePanelMin(): number | string  {
		return this.nativeElement ? this.nativeElement.resourcePanelMin : undefined;
	}
	set resourcePanelMin(value: number | string) {
		if (this.nativeElement) {
			this.nativeElement.resourcePanelMin = value;
		}
	}

	/** Determines the size of the Resource Panel.
	*	Property type: number | string
	*/
	get resourcePanelSize(): number | string  {
		return this.nativeElement ? this.nativeElement.resourcePanelSize : undefined;
	}
	set resourcePanelSize(value: number | string) {
		if (this.nativeElement) {
			this.nativeElement.resourcePanelSize = value;
		}
	}

	/** Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change.
	*	Property type: number
	*/
	get resourcePanelRefreshRate(): number  {
		return this.nativeElement ? this.nativeElement.resourcePanelRefreshRate : undefined;
	}
	set resourcePanelRefreshRate(value: number) {
		if (this.nativeElement) {
			this.nativeElement.resourcePanelRefreshRate = value;
		}
	}

	/** A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom.
	*	Property type: any
	*/
	get resourceTimelineFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction : undefined;
	}
	set resourceTimelineFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.resourceTimelineFormatFunction = value;
		}
	}

	/** Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element.
	*	Property type: GanttChartResourceTimelineMode | string
	*/
	get resourceTimelineMode(): GanttChartResourceTimelineMode | string  {
		return this.nativeElement ? this.nativeElement.resourceTimelineMode : undefined;
	}
	set resourceTimelineMode(value: GanttChartResourceTimelineMode | string) {
		if (this.nativeElement) {
			this.nativeElement.resourceTimelineMode = value;
		}
	}

	/** Determines how the resources will be displayed inside the resource Timeline.
	*	Property type: GanttChartResourceTimelineView | string
	*/
	get resourceTimelineView(): GanttChartResourceTimelineView | string  {
		return this.nativeElement ? this.nativeElement.resourceTimelineView : undefined;
	}
	set resourceTimelineView(value: GanttChartResourceTimelineView | string) {
		if (this.nativeElement) {
			this.nativeElement.resourceTimelineView = value;
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

	/** Sets which tasks to select by their id or gets the currently selected task ids. If no id is provided for the task, an internal id is generated for each task according to it's index(tree path).
	*	Property type: number[] | string[]
	*/
	get selectedTaskIds(): number[] | string[]  {
		return this.nativeElement ? this.nativeElement.selectedTaskIds : undefined;
	}
	set selectedTaskIds(value: number[] | string[]) {
		if (this.nativeElement) {
			this.nativeElement.selectedTaskIds = value;
		}
	}

	/** Sets which resources to select by their id or gets the currently selected resource ids. If no id is provided for the resource, an internal id is generated for each resource according to it's index(tree path).
	*	Property type: number[] | string[]
	*/
	get selectedResourceIds(): number[] | string[]  {
		return this.nativeElement ? this.nativeElement.selectedResourceIds : undefined;
	}
	set selectedResourceIds(value: number[] | string[]) {
		if (this.nativeElement) {
			this.nativeElement.selectedResourceIds = value;
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

	/** Determines whether the baselnes of the tasks are visible or not. Baselines are defined via the 'planned' attribute on the task objects of the dataSource property.
	*	Property type: boolean
	*/
	get showBaseline(): boolean  {
		return this.nativeElement ? this.nativeElement.showBaseline : undefined;
	}
	set showBaseline(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showBaseline = value;
		}
	}

	/** Shows the progress label inside the progress bars of the Timeline tasks.
	*	Property type: boolean
	*/
	get showProgressLabel(): boolean  {
		return this.nativeElement ? this.nativeElement.showProgressLabel : undefined;
	}
	set showProgressLabel(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showProgressLabel = value;
		}
	}

	/** If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well.
	*	Property type: boolean
	*/
	get snapToNearest(): boolean  {
		return this.nativeElement ? this.nativeElement.snapToNearest : undefined;
	}
	set snapToNearest(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.snapToNearest = value;
		}
	}

	/** Determines whether the GanttChart can be sorted by one, more then one or no columns.
	*	Property type: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }
	*/
	get sortFunction(): { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }  {
		return this.nativeElement ? this.nativeElement.sortFunction : undefined;
	}
	set sortFunction(value: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }) {
		if (this.nativeElement) {
			this.nativeElement.sortFunction = value;
		}
	}

	/** A getter that returns a flat structure as an array of all tasks inside the element.
	*	Property type: GanttChartSortMode | string
	*/
	get sortMode(): GanttChartSortMode | string  {
		return this.nativeElement ? this.nativeElement.sortMode : undefined;
	}
	set sortMode(value: GanttChartSortMode | string) {
		if (this.nativeElement) {
			this.nativeElement.sortMode = value;
		}
	}

	/** Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor.
	*	Property type: GanttChartTask[]
	*/
	get tasks(): GanttChartTask[]  {
		return this.nativeElement ? this.nativeElement.tasks : undefined;
	}
	set tasks(value: GanttChartTask[]) {
		if (this.nativeElement) {
			this.nativeElement.tasks = value;
		}
	}

	/** Determines whether the Task Table is filterable or not.
	*	Property type: GanttChartTaskColumn[]
	*/
	get taskColumns(): GanttChartTaskColumn[]  {
		return this.nativeElement ? this.nativeElement.taskColumns : undefined;
	}
	set taskColumns(value: GanttChartTaskColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.taskColumns = value;
		}
	}

	/** Determines the min size of the Task Panel. Used when Resource Panel is visible.
	*	Property type: boolean
	*/
	get taskFiltering(): boolean  {
		return this.nativeElement ? this.nativeElement.taskFiltering : undefined;
	}
	set taskFiltering(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.taskFiltering = value;
		}
	}

	/** Determines the size of the Task Panel. Used when Resource Panel is visible.
	*	Property type: string | number
	*/
	get taskPanelMin(): string | number  {
		return this.nativeElement ? this.nativeElement.taskPanelMin : undefined;
	}
	set taskPanelMin(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.taskPanelMin = value;
		}
	}

	/** Determines the min width of the timeline.
	*	Property type: string | number
	*/
	get taskPanelSize(): string | number  {
		return this.nativeElement ? this.nativeElement.taskPanelSize : undefined;
	}
	set taskPanelSize(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.taskPanelSize = value;
		}
	}

	/** Determines the min width of the task table.
	*	Property type: string | number
	*/
	get timelineMin(): string | number  {
		return this.nativeElement ? this.nativeElement.timelineMin : undefined;
	}
	set timelineMin(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.timelineMin = value;
		}
	}

	/** Determines the size(width) of the task table.
	*	Property type: string | number
	*/
	get treeMin(): string | number  {
		return this.nativeElement ? this.nativeElement.treeMin : undefined;
	}
	set treeMin(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.treeMin = value;
		}
	}

	/** A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element.
	*	Property type: string | number
	*/
	get treeSize(): string | number  {
		return this.nativeElement ? this.nativeElement.treeSize : undefined;
	}
	set treeSize(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.treeSize = value;
		}
	}

	/** Determines whether the tooltips are enabled or not. Tooltips are available for timeline tasks, resources, connections, indicators and segments.
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

	/** Determines weather or not vertical scrollbar is shown.
	*	Property type: GanttChartTooltip
	*/
	get tooltip(): GanttChartTooltip  {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value: GanttChartTooltip) {
		if (this.nativeElement) {
			this.nativeElement.tooltip = value;
		}
	}

	/** Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates.
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

	/** Determines the format of the dates inside the timeline header when they represent years.
	*	Property type: GanttChartView | string
	*/
	get view(): GanttChartView | string  {
		return this.nativeElement ? this.nativeElement.view : undefined;
	}
	set view(value: GanttChartView | string) {
		if (this.nativeElement) {
			this.nativeElement.view = value;
		}
	}

	/** Determines the format of the dates inside the timeline header when they represent weeks. 
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

	/** Sets or gets the element's visual theme. 
	*	Property type: WeekFormat | string
	*/
	get weekFormat(): WeekFormat | string  {
		return this.nativeElement ? this.nativeElement.weekFormat : undefined;
	}
	set weekFormat(value: WeekFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.weekFormat = value;
		}
	}

	/** Sets or gets if the element can be focused.
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

	/** undefined
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["adjustToNonworkingTime","autoSchedule","autoScheduleStrictMode","autoScrollStep","columnMenu","columnResize","columnResizeFeedback","currentTimeIndicator","currentTimeIndicatorInterval","dataExport","dataSource","dayFormat","dateEnd","dateStart","dateMarkers","disabled","disableAutoScroll","disableTaskDrag","disableTaskProgressChange","disableTaskResize","disableSelection","disableSegmentDrag","disableSegmentResize","disableWindowEditor","durationUnit","filterRow","groupByResources","headerTemplate","hideDateMarkers","hideTimelineHeaderDetails","showSelectionColumn","hideResourcePanel","horizontalScrollBarVisibility","hourFormat","infiniteTimeline","infiniteTimelineStep","inverted","keyboardNavigation","locale","max","min","messages","monthFormat","nonworkingDays","nonworkingHours","popupWindowCustomizationFunction","popupWindowTabs","progressLabelFormatFunction","resources","resourceColumns","resourceFiltering","resourceGroupFormatFunction","resourcePanelHeaderTemplate","resourcePanelMin","resourcePanelSize","resourcePanelRefreshRate","resourceTimelineFormatFunction","resourceTimelineMode","resourceTimelineView","rightToLeft","selectedTaskIds","selectedResourceIds","shadeUntilCurrentTime","showBaseline","showProgressLabel","snapToNearest","sortFunction","sortMode","tasks","taskColumns","taskFiltering","taskPanelMin","taskPanelSize","timelineMin","treeMin","treeSize","timelineHeaderFormatFunction","tooltip","verticalScrollBarVisibility","view","yearFormat","weekFormat","theme","unfocusable"];
	}
	/**  This event is triggered when a batch update was started after executing the beginUpdate method.
	*  @param event. The custom event. 	*/
	onBeginUpdate?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a batch update was ended from after executing the endUpdate method.
	*  @param event. The custom event. 	*/
	onEndUpdate?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
	*   startIndex - The index of the task that a connection is started from.
	*/
	onConnectionStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user completes a connection between two tasks.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	startTaskId, 	startIndex, 	endIndex, 	endTaskId, 	type)
	*   id - The id of the connection that was created.
	*   startTaskId - The id of the task that a connection is started from.
	*   startIndex - The index of the task that a connection is started from.
	*   endIndex - The index of the task that a connection ended to.
	*   endTaskId - The id of the task that a connection ended to.
	*   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
	*/
	onConnectionEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a Task is selected/unselected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
	*   value - The index of the new selected task.
	*   oldValue - The index of the previously selected task.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a Tree column is resized. Column resizing is controled by the columnResize property.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	widthInPercentages, 	width)
	*   dataField - The name of the column. Corresponds to the <b>value</b> attribute of a <b>taskColumns/resourceColumns</b> object.
	*   headerCellElement - The HTMLElement column cell element that was resized.
	*   widthInPercentages - The new width of the column in percentages.
	*   width - The new width of the column in pixels.
	*/
	onColumnResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered just before the window for task editing or tooltip is closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
	*   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip.
	*   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
	*   target - The instance of the window/tooltip that is going to close.
	*   type - The type of window/tooltip that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window for task editing is closed( hidden )
	*  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
	*   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
	*   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
	*   target - The instance of the window/tooltip that is closed.
	*   type - The type of window/tooltip that is closed. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item is collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	isGroup, 	item, 	index, 	label, 	value)
	*   isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
	*   item - The object details of the collapsed item.
	*   index - The index of the collapsed item.
	*   label - The label of the collapsed item.
	*   value - The value of the collapsed item.
	*/
	onCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
	*   id - The id of the task that is going to be dragged.
	*   item - The object of the task that is going to be dragged.
	*   dateStart - The start date of the task that is going to be dragged.
	*   dateEnd - The end date of the task that is going to be dragged.
	*   segment - The segment object that is going to be dragged. This attribute is undefined if a segment is not going to be dragged.
	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when dragging of a task finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
	*   id - The id of the task that is was dragged.
	*   item - The object of the task that is was dragged.
	*   dateStart - The start date of the task that is was dragged.
	*   dateEnd - The end date of the task that is was dragged.
	*   segment - The segment object that was dragged. This attribute is undefined if a segment has not been dragged.
	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	isGroup, 	item, 	index, 	label, 	value)
	*   isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
	*   item - The index of the expanded item.
	*   index - The index of the expanded item.
	*   label - The label of the expanded item.
	*   value - The value of the expanded item.
	*/
	onExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the GanttChart is filtered.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	action, 	filters)
	*   type - The type of items that have been filtered ( task or resource ).
	*   action - The name of the filtering action (whether filtering is added or removed).
	*   filters - The filters that have been applied. Filters represent JQX.Utilities.FilterGroup objects.
	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a task, resource or connection is clicked inside the Timeline or the Tree columns.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	type, 	originalEvent)
	*   id - The id of the task.
	*   item - The item that was clicked. It can be a task, resource or connection.
	*   type - The type of item. Possible values are: 'task', 'project', 'resource', 'connection'.
	*   originalEvent - The original DOM event.
	*/
	onItemClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a Task/Resource/Connection is inserted.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
	*   type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
	*   item - An object that represents the actual item with it's attributes.
	*/
	onItemInsert?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a Task/Resource/Connection is removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	item)
	*   id - The id of the task.
	*   type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
	*   item - An object that represents the actual item with it's attributes.
	*/
	onItemRemove?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a Task/Resource/Connection is updated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	item)
	*   id - The id of the task.
	*   type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
	*   item - An object that represents the actual item with it's attributes.
	*/
	onItemUpdate?: ((event?: Event) => void) | undefined
	/**  This event is triggered just before the window for task editing or tooltip is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
	*   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
	*   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
	*   target - The instance of the window/tooltip that is going to open.
	*   type - The type of window/tooltip that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window for task editing is opened( visible ) or when the tooltip is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
	*   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
	*   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
	*   target - The instance of the window/tooltip that is opened.
	*   type - The type of window/tooltip that is opened. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	index, 	progress)
	*   id - The id of the task.
	*   index - The index of the task which progress is going to be changed.
	*   progress - The progress of the task before it is changed.
	*/
	onProgressChangeStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the progress of a task is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	index, 	progress)
	*   id - The id of the task.
	*   index - The index of the task which progress is has been changed.
	*   progress - The progress of the task after it was changed.
	*/
	onProgressChangeEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
	*   id - The id of the task that is going to be resized.
	*   item - The object of the task that is going to be resized.
	*   dateStart - The start date of the task that is going to be resized.
	*   dateEnd - The end date of the task that is going to be resized.
	*   segment - The segment object that is going to be resized. This attribute is undefined if a segment is not going to be resized.
	*/
	onResizeStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the resizing of a task finishes.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
	*   id - The id of the task that was resized.
	*   item - The object of the task that was resized.
	*   dateStart - The start date of the task that was resized.
	*   dateEnd - The end date of the task that was resized.
	*   segment - The segment object that was resized. This attribute is undefined if a segment has not been resized.
	*/
	onResizeEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the GanttChart is sorted by some column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	columns, 	sortDataFields, 	sortOrders, 	sortDataTypes)
	*   type - The type of columns that have been sorted ( task or resource column ).
	*   columns - An array of objects that contains the currently sorted column objects.
	*   sortDataFields - The dataFields of the columns that have been sorted. The dataField corresponds to the <b>value</b> property of a <b>taskColumns/resourceColumns</b> object.
	*   sortOrders - The orders of the columns that have been sorted.
	*   sortDataTypes - The data types of the columns that have been sorted.
	*/
	onSort?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Timeline has been scrolled to the bottom.
	*  @param event. The custom event. 	*/
	onScrollBottomReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Timeline has been scrolled to the top.
	*  @param event. The custom event. 	*/
	onScrollTopReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Timeline has been scrolled to the beginning (horizontally).
	*  @param event. The custom event. 	*/
	onScrollLeftReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Timeline has been scrolled to the end (horizontally).
	*  @param event. The custom event. 	*/
	onScrollRightReached?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onBeginUpdate","onEndUpdate","onConnectionStart","onConnectionEnd","onChange","onColumnResize","onClosing","onClose","onCollapse","onDragStart","onDragEnd","onExpand","onFilter","onItemClick","onItemInsert","onItemRemove","onItemUpdate","onOpening","onOpen","onProgressChangeStart","onProgressChangeEnd","onResizeStart","onResizeEnd","onSort","onScrollBottomReached","onScrollTopReached","onScrollLeftReached","onScrollRightReached","onCreate","onReady"];
	}
	/** Adds a custom filter to a specific column (task or resource column). 
	* @param {any} columns. An object or an array of objects with the following syntax: <ul><li><b>type</b> - indicates the type of column to filter. Possible values are 'task' or 'resource'.</li><li><b>value</b> - the value of the column that must match the value attribute of a taskColumns/resourceColumns object(e.g. 'label', 'dateStart', etc).</li></ul>.
	* @param {any} filterGroup. A JQX.Utilities.FilterGroup object. Here's an example for creating a FilterGroup object: <pre>const filterGroup = new window.JQX.Utilities.FilterGroup(), filterObject = filterGroup.createFilter('string', 'Task B', 'STARTS_WITH_CASE_SENSITIVE'); filterGroup.addFilter('or', filterObject); gantt.addFilter({ type: 'task', value: 'label' }, filterGroup);</pre>
	*/
    public addFilter(columns: any, filterGroup: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(columns, filterGroup);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(columns, filterGroup);
            });
        }
    }

	/** Clears the currently applied filters. 
	*/
    public clearFilters(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilters();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearFilters();
            });
        }
    }

	/** Clears the currently applied column sorting. 
	*/
    public clearSort(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSort();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSort();
            });
        }
    }

	/** Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters. 
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

	/** Removes all tasks.  
	*/
    public clearTasks(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearTasks();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearTasks();
            });
        }
    }

	/** Removes all resources.  
	*/
    public clearResources(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearResources();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearResources();
            });
        }
    }

	/** Creates a connection between two tasks.  
	* @param {number | string} startTaskIndex. The id of the start task or the connection string like '2-3-0'. <b>If the complete connections string is provided as the first argument, the rest of the method arguments are not necessary</b>
	* @param {number | string} taskEndIndex?. The id of the end task.
	* @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3. The connection type can be: <ul><li><b>0</b> - Start-to-Start connection.</li><li><b>1</b> - End-to-Start connection.</li><li><b>2</b> - End-to-End connection.</li><li><b>3</b> - Start-to-End connection.</li></ul>
	* @param {number} lag?. The connection lag in miliseconds. Used by the Auto scheduling algorithm in order allow some slack time slack time before or after the next task begins/ends. Lag is measured in miliseconds. It can be a negative (lead) or a positive (lag) number.
	*/
    public createConnection(startTaskIndex: number | string, taskEndIndex?: number | string, connectionType?: number, lag?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType, lag);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType, lag);
            });
        }
    }

	/** Collapses an expanded project. 
	* @param {string | number} id. The id of a project item that should be collapsed.
	*/
    public collapse(id: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(id);
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

	/** Ends the update operation. This method will resume the rendering and will refresh the GanttChart. 
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

	/** Refereshes the GanttChart after resizing by recalculating the Scrollbars.  
	* @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
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

	/** Makes sure a Task is visible by scrolling to it. 
	* @param {string | number} taskId. The id of the target Task.
	*/
    public ensureVisible(taskId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(taskId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(taskId);
            });
        }
    }

	/** Expands a collapsed project with tasks. 
	* @param {string | number} id. The id of a project task that should be expanded.
	*/
    public expand(id: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(id);
            });
        }
    }

	/** Exports the data of Tree of the GanttChart. 
	* @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>tsv</b></li><li><b>csv</b></li><li><b>xml</b></li></ul>
	* @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the JQX Export Documentation.
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

	/** Returns all existing connections. The connections are returned as objects that contain detailed information. Each object in the array has the following keys: 'id' - connection id, 'type' - connection type, 'startTaskId' - connection's start task id, 'endTaskId' - connection's end task id, 'startIndex' - connection's start task index, 'endIndex' - connection's end task index, 'lag' - lag time.  
	* @returns {any}
  */
	public getConnections() : any {
        const result: any = this.nativeElement.getConnections();
        return result;
    }

	/** Returns the connection details for the target connection which includes: startTask, endTask, startTaskId, endTaskId and type of the corresponding connection. Connection types are described in detail under the `connectionEnd` event description in this document and in a dedicated topic available on the website. 
	* @param {string} connectionId. A connection id. Each connection has a unique id that is assigned when a connection is created.
	* @returns {any}
  */
	public getConnectionDetails(connectionId:string) : any {
        const result: any = this.nativeElement.getConnectionDetails(connectionId);
        return result;
    }

	/** Returns a JSON representation of all tasks inside the element along with their connections and settings. 
	* @returns {any[]}
  */
	public getState() : any {
        const result: any = this.nativeElement.getState();
        return result;
    }

	/** Returns the Tree path of a task/resource. The tree path is used as task/resource id if no id is provided by the user. 
	* @param {any} item. A GattChartTask/GanttChartResource item object.
	* @returns {string}
  */
	public getItemPath(item:any) : any {
        const result: any = this.nativeElement.getItemPath(item);
        return result;
    }

	/** Returns the task object that corresponds to the id/path. 
	* @param {string | number} itemId. The id/path of a task.
	* @returns {any}
  */
	public getTask(itemId:string | number) : any {
        const result: any = this.nativeElement.getTask(itemId);
        return result;
    }

	/** Returns an array of all GanttChart tasks. 
	* @returns {any[]}
  */
	public getTasks() : any {
        const result: any = this.nativeElement.getTasks();
        return result;
    }

	/** Returns the index of a task. 
	* @param {any} task. A GattChartTask object.
	* @returns {number}
  */
	public getTaskIndex(task:any) : any {
        const result: any = this.nativeElement.getTaskIndex(task);
        return result;
    }

	/** Returns the connections definitions of a task. 
	* @param {any} taskId. A GanttChartTask object or it's id.
	* @returns {any}
  */
	public getTaskConnections(taskId:any) : any {
        const result: any = this.nativeElement.getTaskConnections(taskId);
        return result;
    }

	/** Returns the Project of a task or undefined if it does not have one. 
	* @param {any} task. A GantChartTask object.
	* @returns {any}
  */
	public getTaskProject(task:any) : any {
        const result: any = this.nativeElement.getTaskProject(task);
        return result;
    }

	/** Returns the resource object that corresponds to the id/path. 
	* @param {string | number} itemId. The id/path of a resource.
	* @returns {any}
  */
	public getResource(itemId:string | number) : any {
        const result: any = this.nativeElement.getResource(itemId);
        return result;
    }

	/** Returns an array of all GanttChart resources. 
	* @returns {any[]}
  */
	public getResources() : any {
        const result: any = this.nativeElement.getResources();
        return result;
    }

	/** Returns the index of a resource. 
	* @param {any} resource. A GanttChartResource object.
	* @returns {number}
  */
	public getResourceIndex(resource:any) : any {
        const result: any = this.nativeElement.getResourceIndex(resource);
        return result;
    }

	/** Returns the tasks that are assigned to the resource. 
	* @param {any} resource. A GanttChartResource object or it's id.
	* @returns {any}
  */
	public getResourceTasks(resource:any) : any {
        const result: any = this.nativeElement.getResourceTasks(resource);
        return result;
    }

	/** Returns the currently selected tasks/resource ids. If selection is disabled or no items are selected returns null. 
	* @returns {any}
  */
	public getSelectedIds() : any {
        const result: any = this.nativeElement.getSelectedIds();
        return result;
    }

	/** Returns the currently selected tasks. 
	* @returns {any}
  */
	public getSelectedTasks() : any {
        const result: any = this.nativeElement.getSelectedTasks();
        return result;
    }

	/** Returns the currently selected resources. 
	* @returns {any}
  */
	public getSelectedResources() : any {
        const result: any = this.nativeElement.getSelectedResources();
        return result;
    }

	/** Returns the working hours of the day as numbers. 
	* @returns {any}
  */
	public getWorkingHours() : any {
        const result: any = this.nativeElement.getWorkingHours();
        return result;
    }

	/** Hides the tooltip if it's visible. 
	* @returns {any}
  */
	public hideTooltip() : any {
        const result: any = this.nativeElement.hideTooltip();
        return result;
    }

	/** Depending on the nonworkingDays property, returns true or false whether the target date is on a working day or not. 
	* @param {Date} date. A javascript Date object or a string/number which represents a valid JS Date.
	*/
    public isWorkingDay(date: Date): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.isWorkingDay(date);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.isWorkingDay(date);
            });
        }
    }

	/** Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method. 
	* @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
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

	/** Removes all connections between tasks.  
	*/
    public removeAllConnections(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAllConnections();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAllConnections();
            });
        }
    }

	/** Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection. 
	* @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
	* @param {number} taskEndIndex?. The index of the end task.
	* @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
	* @returns {any}
  */
	public removeConnection(startTaskIndex:number | string, taskEndIndex?:number, connectionType?:number) : any {
        const result: any = this.nativeElement.removeConnection(startTaskIndex, taskEndIndex, connectionType);
        return result;
    }

	/** Removes all connections of a task or between two tasks if the second argument is provided and valid. 
	* @param {any} taskStart. The start task object or it's id.
	* @param {any} taskEnd?. The end task object or it's id.
	*/
    public removeTaskConnection(taskStart: any, taskEnd?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTaskConnection(taskStart, taskEnd);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTaskConnection(taskStart, taskEnd);
            });
        }
    }

	/** Shows the tooltip for a specific element. 
	* @param {HTMLElement} target. The HTMLElement that will be the target of the tooltip.
	* @param {string} content?. Allows to set a custom content for the Tooltip.
	*/
    public showTooltip(target: HTMLElement, content?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showTooltip(target, content);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showTooltip(target, content);
            });
        }
    }

	/** Saves the current settings of the element to LocalStorage. Requires an id to be set to the element. 
	* @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
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

	/** Inserts a new task in the timeline. The new task can be inserted as a sub task of a project by passing the appropriate argument for the project id or as a root level item. 
	* @param {any} taskObject. An object describing a Gantt Chart task.
	* @param {any} project?. A number or string that represents the id of a project (e.g. '0') or a project object definition present in the GanttChart. This parameter determines the parent project of the task that will be inserted. If <b>null</b> is passed as an arguemnt the new task will be inserted at root level without a parent project.
	* @param {number} index?. The index where the new item should be inserted(e.g. 2). This index will determine the position of the newly inserted task.
	* @returns {string | number | undefined}
  */
	public insertTask(taskObject:any, project?:any, index?:number) : any {
        const result: any = this.nativeElement.insertTask(taskObject, project, index);
        return result;
    }

	/** Updates a task/project/milestone. 
	* @param {any} taskId. A number or string that represents the id of a task/project(e.g. '0') or the object definition of the task/project.
	* @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
	*/
    public updateTask(taskId: any, taskObject: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(taskId, taskObject);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateTask(taskId, taskObject);
            });
        }
    }

	/** Removes a task from the timeline. 
	* @param {any} taskId. A number or string that represents the id of a task or the actual item object.
	*/
    public removeTask(taskId: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(taskId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTask(taskId);
            });
        }
    }

	/** Inserts a new resource. 
	* @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
	* @param {any} resourceObject?. An object describing a Gantt Chart resource.
	*/
    public insertResource(resourceId: string | number, resourceObject?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertResource(resourceId, resourceObject);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertResource(resourceId, resourceObject);
            });
        }
    }

	/** Updates an existing resource. 
	* @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
	* @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
	*/
    public updateResource(resourceId: any, taskObject: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateResource(resourceId, taskObject);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateResource(resourceId, taskObject);
            });
        }
    }

	/** Removes a resource. 
	* @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
	*/
    public removeResource(resourceId: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeResource(resourceId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeResource(resourceId);
            });
        }
    }

	/** Opens the popup Window for specific task to edit or to delete a connection if a connection string is passed. 
	* @param {any} taskId. A string or number that represents the id of a task or the task object that is going to be edited or a connection string(e.g. '2-0-0').
	*/
    public openWindow(taskId: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(taskId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openWindow(taskId);
            });
        }
    }

	/** Closes an opened popup Window. The method will close any opened popup window inside the element. 
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

	/** Prepares the GanttChart for printing by opening the browser's Print Preview. 
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

	/** Allows to sets the working days and hours at once. 
	* @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
	*/
    public setWorkTime(settings: { days: (number | string | number[])[], hours: (number | string | number[])[] }): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setWorkTime(settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setWorkTime(settings);
            });
        }
    }

	/** Allows to select a task based on it's id. 
	* @param {string | number} id. The id of the task to select.
	*/
    public selectTask(id: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectTask(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectTask(id);
            });
        }
    }

	/** Allows to select a resource based on it's id. 
	* @param {string | number} id. The id of the resource to select.
	*/
    public selectResource(id: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectResource(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectResource(id);
            });
        }
    }

	/** Allows to unselect a task based on it's id. 
	* @param {string | number} id. The id of the task to unselect.
	*/
    public unselectTask(id: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectTask(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectTask(id);
            });
        }
    }

	/** Allows to unselect a resource based on it's id. 
	* @param {string | number} id. The id of the resource to unselect.
	*/
    public unselectResource(id: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectResource(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectResource(id);
            });
        }
    }

	/** Allows to unset previously set working time. The opposte method for setWorkingTime. 
	* @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should not be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
	*/
    public unsetWorkTime(settings: { days: (number | string | number[])[], hours: (number | string | number[])[] }): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unsetWorkTime(settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unsetWorkTime(settings);
            });
        }
    }

	/** Sorts the GanttChart tasks/resources if sortable is enabled. 
	* @param {any} columns. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
	*/
    public sort(columns: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sort(columns);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sort(columns);
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
			React.createElement("smart-gantt-chart", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default GanttChart;
