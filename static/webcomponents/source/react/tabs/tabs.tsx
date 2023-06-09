import React from "react";
import { TabsProperties } from "./../../index";
import { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation} from './../../index';
import { TabItemProperties } from './../../index';
import { TabItem } from './tabitem';
import { TabItemsGroupProperties } from './../../index';
import { TabItemsGroup } from './tabitemsgroup';
export { TabsProperties } from "./../../index";
export { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation} from './../../index';
export { TabItem } from './tabitem';
export { TabItemProperties } from "./../../index";
export { TabItemsGroup } from './tabitemsgroup';
export { TabItemsGroupProperties } from "./../../index";

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface TabsProps extends TabsProperties {
    className?: string;
    style?: React.CSSProperties;

	onAddNewTabClick?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onReorder?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Tabs organize content across different screens, data sets, and other interactions. Tabs can be paired with components like top app bars. Tabs can be displayed horizontally or vertically.
*/
export class Tabs extends React.Component<React.HTMLAttributes<Element> & TabsProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Tabs' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets whether the "Add new tab" button (+) is displayed.
	*	Property type: boolean
	*/
	get addNewTab(): boolean  {
		return this.nativeElement ? this.nativeElement.addNewTab : undefined;
	}
	set addNewTab(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.addNewTab = value;
		}
	}

	/** Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab).
	*	Property type: boolean
	*/
	get allowToggle(): boolean  {
		return this.nativeElement ? this.nativeElement.allowToggle : undefined;
	}
	set allowToggle(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowToggle = value;
		}
	}

	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
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

	/** Sets or gets the close button mode.
	*	Property type: TabsCloseButtonMode | string
	*/
	get closeButtonMode(): TabsCloseButtonMode | string  {
		return this.nativeElement ? this.nativeElement.closeButtonMode : undefined;
	}
	set closeButtonMode(value: TabsCloseButtonMode | string) {
		if (this.nativeElement) {
			this.nativeElement.closeButtonMode = value;
		}
	}

	/** Sets or gets whether close buttons are displayed.
	*	Property type: boolean
	*/
	get closeButtons(): boolean  {
		return this.nativeElement ? this.nativeElement.closeButtons : undefined;
	}
	set closeButtons(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.closeButtons = value;
		}
	}

	/** Sets or gets whether the Tabs content section is collapsed.
	*	Property type: boolean
	*/
	get collapsed(): boolean  {
		return this.nativeElement ? this.nativeElement.collapsed : undefined;
	}
	set collapsed(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.collapsed = value;
		}
	}

	/** Enables or disables the collapsible feature.
	*	Property type: boolean
	*/
	get collapsible(): boolean  {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.collapsible = value;
		}
	}

	/** Determines the data source that will be loaded to the Tabs.
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

	/** Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip. 
	*	Property type: boolean
	*/
	get enableMouseWheelAction(): boolean  {
		return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	}
	set enableMouseWheelAction(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.enableMouseWheelAction = value;
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

	/** Callback, related to localization module. 
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

	/** Sets or gets the widget's name.
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

	/** Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'.
	*	Property type: Overflow | string
	*/
	get overflow(): Overflow | string  {
		return this.nativeElement ? this.nativeElement.overflow : undefined;
	}
	set overflow(value: Overflow | string) {
		if (this.nativeElement) {
			this.nativeElement.overflow = value;
		}
	}

	/** Disables user interaction with the element.
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

	/** Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered.
	*	Property type: boolean
	*/
	get reorder(): boolean  {
		return this.nativeElement ? this.nativeElement.reorder : undefined;
	}
	set reorder(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.reorder = value;
		}
	}

	/** Sets or gets whether tab labels can be resized by dragging with the mouse.
	*	Property type: boolean
	*/
	get resize(): boolean  {
		return this.nativeElement ? this.nativeElement.resize : undefined;
	}
	set resize(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.resize = value;
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

	/** Sets or gets the position of the scroll buttons.
	*	Property type: LayoutPosition | string
	*/
	get scrollButtonsPosition(): LayoutPosition | string  {
		return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
	}
	set scrollButtonsPosition(value: LayoutPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.scrollButtonsPosition = value;
		}
	}

	/** Sets or gets the behavior when scrolling the tab strip via the scroll buttons.
	*	Property type: TabsScrollMode | string
	*/
	get scrollMode(): TabsScrollMode | string  {
		return this.nativeElement ? this.nativeElement.scrollMode : undefined;
	}
	set scrollMode(value: TabsScrollMode | string) {
		if (this.nativeElement) {
			this.nativeElement.scrollMode = value;
		}
	}

	/** Sets or gets which tab is selected.
	*	Property type: number | null
	*/
	get selectedIndex(): number | null  {
		return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	}
	set selectedIndex(value: number | null) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndex = value;
		}
	}

	/** Determines the way the user can switch between tabs.
	*	Property type: TabSelectionMode | string
	*/
	get selectionMode(): TabSelectionMode | string  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: TabSelectionMode | string) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Applies one of four behaviors when the element is not wide enough to display all tab labels.
	*	Property type: TabsTabLayout | string
	*/
	get tabLayout(): TabsTabLayout | string  {
		return this.nativeElement ? this.nativeElement.tabLayout : undefined;
	}
	set tabLayout(value: TabsTabLayout | string) {
		if (this.nativeElement) {
			this.nativeElement.tabLayout = value;
		}
	}

	/** Sets or gets where the tab strip is positioned.
	*	Property type: TabPosition | string
	*/
	get tabPosition(): TabPosition | string  {
		return this.nativeElement ? this.nativeElement.tabPosition : undefined;
	}
	set tabPosition(value: TabPosition | string) {
		if (this.nativeElement) {
			this.nativeElement.tabPosition = value;
		}
	}

	/** Sets or gets the orientation of the text in the tabs.
	*	Property type: Orientation | string
	*/
	get tabTextOrientation(): Orientation | string  {
		return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
	}
	set tabTextOrientation(value: Orientation | string) {
		if (this.nativeElement) {
			this.nativeElement.tabTextOrientation = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["addNewTab","allowToggle","animation","closeButtonMode","closeButtons","collapsed","collapsible","dataSource","disabled","enableMouseWheelAction","locale","localizeFormatFunction","messages","name","overflow","readonly","reorder","resize","rightToLeft","scrollButtonsPosition","scrollMode","selectedIndex","selectionMode","tabLayout","tabPosition","tabTextOrientation","theme","unfocusable"];
	}
	/**  This event is triggered when the addNewTab is enabled and is clicked.
	*  @param event. The custom event. 	*/
	onAddNewTabClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the tab selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
	*   index - The tab's index.
	*   oldIndex - The tab's old index.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a tab is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index)
	*   index - The tab's index.
	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a tab is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index)
	*   index - The tab's index.
	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a drag operation has ended.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
	*   left - The tab's left position.
	*   top - The tab's top position.
	*   index - The tab's index.
	*   label - The tab's label.
	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a drag operation has started.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
	*   left - The tab's left position.
	*   top - The tab's top position.
	*   index - The tab's index.
	*   label - The tab's label.
	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when tabs have been reordered.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
	*   index - The tab's index.
	*   oldIndex - The tab's old index.
	*/
	onReorder?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onAddNewTabClick","onChange","onClose","onClosing","onDragEnd","onDragStart","onReorder","onCreate","onReady"];
	}
	/** Collapses the content section. 
	*/
    public collapse(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse();
            });
        }
    }

	/** Returns the label of a Tab at given index. 
	* @param {number} index. The index of the tab.
	* @returns {string}
  */
	public getTabLabel(index:number) : any {
        const result: any = this.nativeElement.getTabLabel(index);
        return result;
    }

	/** Returns the content of a Tab at given index. 
	* @param {number} index. The index of the tab.
	* @returns {HTMLElement}
  */
	public getTabContent(index:number) : any {
        const result: any = this.nativeElement.getTabContent(index);
        return result;
    }

	/** Makes sure a tab is visible by scrolling to it. 
	* @param {number} index. The index of the tab to scroll to.
	*/
    public ensureVisible(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(index);
            });
        }
    }

	/** Expands the content section. 
	*/
    public expand(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand();
            });
        }
    }

	/** Returns an array of the TabItems inside the element. 
	* @returns {TabItem[]}
  */
	public getTabs() : any {
        const result: any = this.nativeElement.getTabs();
        return result;
    }

	/** Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned. 
	* @param {number} index. The index of the tab item.
	* @returns {number}
  */
	public getOffsetFromEdgeOfElement(index:number) : any {
        const result: any = this.nativeElement.getOffsetFromEdgeOfElement(index);
        return result;
    }

	/** Inserts a new tab and an associated content section. 
	* @param {number} index. The index to insert a new tab at.
	* @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
	*/
    public insert(index: number, details: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, details);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, details);
            });
        }
    }

	/** Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself. 
	*/
    public refreshTabHeader(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshTabHeader();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshTabHeader();
            });
        }
    }

	/** Removes a tab and its associated content section. 
	* @param {number} index. The index of the tab to remove.
	*/
    public removeAt(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(index);
            });
        }
    }

	/** Selects a tab. 
	* @param {number} index. The index of the tab to select.
	*/
    public select(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(index);
            });
        }
    }

	/** Updates a tab and its associated content section. 
	* @param {number} index. The index of the tab to update.
	* @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
	* @param {string | HTMLElement} content. The new content of the tab.
	*/
    public update(index: number, label: string, content: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, label, content);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, label, content);
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
			React.createElement("smart-tabs", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Tabs;
