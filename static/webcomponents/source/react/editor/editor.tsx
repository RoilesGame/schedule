import React from "react";
import { EditorProperties } from "./../../index";
import { Animation, EditorContentFilteringAttributeFilterMode, EditorContentFilteringTagFilterMode, EditorContentFilteringStyleAttributeFilterMode, EditorContextMenu, EditMode, EditorImageFormat, PasteFormat, ToolbarMode, ToolbarViewMode, EditorContentFiltering, EditorDataExport, EditorIframeSettings, ToolbarItem, ToolbarItemEditor} from './../../index';
export { EditorProperties } from "./../../index";
export { Animation, EditorContentFilteringAttributeFilterMode, EditorContentFilteringTagFilterMode, EditorContentFilteringStyleAttributeFilterMode, EditorContextMenu, EditMode, EditorImageFormat, PasteFormat, ToolbarMode, ToolbarViewMode, EditorContentFiltering, EditorDataExport, EditorIframeSettings, ToolbarItem, ToolbarItemEditor} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface EditorProps extends EditorProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onChanging?: ((event?: Event) => void) | undefined;
	onActionStart?: ((event?: Event) => void) | undefined;
	onActionEnd?: ((event?: Event) => void) | undefined;
	onContextMenuItemClick?: ((event?: Event) => void) | undefined;
	onContextMenuOpen?: ((event?: Event) => void) | undefined;
	onContextMenuOpening?: ((event?: Event) => void) | undefined;
	onContextMenuClose?: ((event?: Event) => void) | undefined;
	onContextMenuClosing?: ((event?: Event) => void) | undefined;
	onResizeStart?: ((event?: Event) => void) | undefined;
	onResizeEnd?: ((event?: Event) => void) | undefined;
	onInlineToolbarOpen?: ((event?: Event) => void) | undefined;
	onInlineToolbarOpening?: ((event?: Event) => void) | undefined;
	onInlineToolbarClose?: ((event?: Event) => void) | undefined;
	onInlineToolbarClosing?: ((event?: Event) => void) | undefined;
	onDropDownToolbarOpen?: ((event?: Event) => void) | undefined;
	onDropDownToolbarOpening?: ((event?: Event) => void) | undefined;
	onDropDownToolbarClose?: ((event?: Event) => void) | undefined;
	onDropDownToolbarClosing?: ((event?: Event) => void) | undefined;
	onDialogOpen?: ((event?: Event) => void) | undefined;
	onDialogOpening?: ((event?: Event) => void) | undefined;
	onDialogClose?: ((event?: Event) => void) | undefined;
	onDialogClosing?: ((event?: Event) => void) | undefined;
	onImageUploadSuccess?: ((event?: Event) => void) | undefined;
	onImageUploadFailed?: ((event?: Event) => void) | undefined;
	onToobarItemClick?: ((event?: Event) => void) | undefined;
	onMessageClose?: ((event?: Event) => void) | undefined;
	onMessageOpen?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 jqxEditor represents an advanced HTML text editor which can simplify web content creation or be a replacement of your HTML/Markdown Text Areas.
*/
export class Editor extends React.Component<React.HTMLAttributes<Element> & EditorProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Editor' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
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

	/** Automatically loads the last saved state of the editor (from local storage) on element initialization. An id must be provided in order to load a previously saved state.
	*	Property type: boolean
	*/
	get autoLoad(): boolean  {
		return this.nativeElement ? this.nativeElement.autoLoad : undefined;
	}
	set autoLoad(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoLoad = value;
		}
	}

	/** Automatically saves the current content of the editor. Saving happens at time intervas determined by the autoSaveInterval property while the element on focus. An id must be provided to the element in order to store the state.
	*	Property type: boolean
	*/
	get autoSave(): boolean  {
		return this.nativeElement ? this.nativeElement.autoSave : undefined;
	}
	set autoSave(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoSave = value;
		}
	}

	/** The property that determines the interval to automatically save the state of the Editor when the autoSave property is set.
	*	Property type: number
	*/
	get autoSaveInterval(): number  {
		return this.nativeElement ? this.nativeElement.autoSaveInterval : undefined;
	}
	set autoSaveInterval(value: number) {
		if (this.nativeElement) {
			this.nativeElement.autoSaveInterval = value;
		}
	}

	/** A formatting function for the char counter. Takes two arguments: chars - the current number of characters inside the Editor.maxCharCount - the maximum number of characters inside the Editor.
	*	Property type: any
	*/
	get charCountFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.charCountFormatFunction : undefined;
	}
	set charCountFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.charCountFormatFunction = value;
		}
	}

	/** Sets or gets whether files will be automatically uploaded after selection.
	*	Property type: boolean
	*/
	get autoUpload(): boolean  {
		return this.nativeElement ? this.nativeElement.autoUpload : undefined;
	}
	set autoUpload(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoUpload = value;
		}
	}

	/** Determines the content filtering settings.
	*	Property type: EditorContentFiltering
	*/
	get contentFiltering(): EditorContentFiltering  {
		return this.nativeElement ? this.nativeElement.contentFiltering : undefined;
	}
	set contentFiltering(value: EditorContentFiltering) {
		if (this.nativeElement) {
			this.nativeElement.contentFiltering = value;
		}
	}

	/** Determines the context menu for the Editor. The context menu is triggered when the user right clicks on the content area of the Editor.
	*	Property type: EditorContextMenu | string
	*/
	get contextMenu(): EditorContextMenu | string  {
		return this.nativeElement ? this.nativeElement.contextMenu : undefined;
	}
	set contextMenu(value: EditorContextMenu | string) {
		if (this.nativeElement) {
			this.nativeElement.contextMenu = value;
		}
	}

	/** Allows to customize default the context menu of the Editor. The property accepts an array of items which can be strings that represent the value of the item, or objects of the following format: { label: string, value: string }, where the label will be displayed and the value will be action value for the item. The property also accepts a function that must return an array of items with the following format function (target: HTMLElement, type: string, defaultItems: string[]) { return defaultItems } and the following arguments: target - the element that is the target of the context menu.type - the type of context menu ( whether it's a table, image, link or other)defaultItems - an array of strings which represent the default items for the context menu.
	*	Property type: string[] | { label: string, value: 'string' }[] | Function | null
	*/
	get contextMenuDataSource(): string[] | { label: string, value: 'string' }[] | Function | null  {
		return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
	}
	set contextMenuDataSource(value: string[] | { label: string, value: 'string' }[] | Function | null) {
		if (this.nativeElement) {
			this.nativeElement.contextMenuDataSource = value;
		}
	}

	/** Sets the Editor's Data Export options.
	*	Property type: EditorDataExport
	*/
	get dataExport(): EditorDataExport  {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value: EditorDataExport) {
		if (this.nativeElement) {
			this.nativeElement.dataExport = value;
		}
	}

	/** Enables or disables the Editor.
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

	/** Disables content editing inside Editor.
	*	Property type: boolean
	*/
	get disableEditing(): boolean  {
		return this.nativeElement ? this.nativeElement.disableEditing : undefined;
	}
	set disableEditing(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableEditing = value;
		}
	}

	/** Disables the Quick Search Bar.
	*	Property type: boolean
	*/
	get disableSearchBar(): boolean  {
		return this.nativeElement ? this.nativeElement.disableSearchBar : undefined;
	}
	set disableSearchBar(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableSearchBar = value;
		}
	}

	/** Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode.
	*	Property type: EditMode | string
	*/
	get editMode(): EditMode | string  {
		return this.nativeElement ? this.nativeElement.editMode : undefined;
	}
	set editMode(value: EditMode | string) {
		if (this.nativeElement) {
			this.nativeElement.editMode = value;
		}
	}

	/** Determines whether the value returned from getHTML method and Source Code view are encoded or not.
	*	Property type: boolean
	*/
	get enableHtmlEncode(): boolean  {
		return this.nativeElement ? this.nativeElement.enableHtmlEncode : undefined;
	}
	set enableHtmlEncode(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.enableHtmlEncode = value;
		}
	}

	/** Determines whether the Tab key can insert tab chars inside the Editor or change focus (default)
	*	Property type: boolean
	*/
	get enableTabKey(): boolean  {
		return this.nativeElement ? this.nativeElement.enableTabKey : undefined;
	}
	set enableTabKey(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.enableTabKey = value;
		}
	}

	/** Determines the time interval between results for the find and replace and search bar features.
	*	Property type: number
	*/
	get findAndReplaceTimeout(): number  {
		return this.nativeElement ? this.nativeElement.findAndReplaceTimeout : undefined;
	}
	set findAndReplaceTimeout(value: number) {
		if (this.nativeElement) {
			this.nativeElement.findAndReplaceTimeout = value;
		}
	}

	/** Determines whether the Toolbar is hidden or not.
	*	Property type: boolean
	*/
	get hideToolbar(): boolean  {
		return this.nativeElement ? this.nativeElement.hideToolbar : undefined;
	}
	set hideToolbar(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideToolbar = value;
		}
	}

	/** Determines whether the Inline Toolbar is hidden or not.
	*	Property type: boolean
	*/
	get hideInlineToolbar(): boolean  {
		return this.nativeElement ? this.nativeElement.hideInlineToolbar : undefined;
	}
	set hideInlineToolbar(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideInlineToolbar = value;
		}
	}

	/** Determines the file format of the image/video that are uploaded from local storage. By default images/videos are stroed as base64.
	*	Property type: EditorImageFormat | string
	*/
	get imageFormat(): EditorImageFormat | string  {
		return this.nativeElement ? this.nativeElement.imageFormat : undefined;
	}
	set imageFormat(value: EditorImageFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.imageFormat = value;
		}
	}

	/** Sets the content of the Editor as HTML. Allows to insert text and HTML.
	*	Property type: string
	*/
	get innerHTML(): string  {
		return this.nativeElement ? this.nativeElement.innerHTML : undefined;
	}
	set innerHTML(value: string) {
		if (this.nativeElement) {
			this.nativeElement.innerHTML = value;
		}
	}

	/** Defines an offset(x,y) for the Inline Toolbar positioning on the page.
	*	Property type: number[]
	*/
	get inlineToolbarOffset(): number[]  {
		return this.nativeElement ? this.nativeElement.inlineToolbarOffset : undefined;
	}
	set inlineToolbarOffset(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.inlineToolbarOffset = value;
		}
	}

	/** Determines the iframe settings of the Editor. When enabled the contents of the Editor are placed inside an iframe, isolated in a separate dom. The element allows to insert external resources into the iframe if needed.
	*	Property type: EditorIframeSettings
	*/
	get iframeSettings(): EditorIframeSettings  {
		return this.nativeElement ? this.nativeElement.iframeSettings : undefined;
	}
	set iframeSettings(value: EditorIframeSettings) {
		if (this.nativeElement) {
			this.nativeElement.iframeSettings = value;
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

	/** Sets a limit on the number of chars inside the Editor. 
	*	Property type: number
	*/
	get maxCharCount(): number  {
		return this.nativeElement ? this.nativeElement.maxCharCount : undefined;
	}
	set maxCharCount(value: number) {
		if (this.nativeElement) {
			this.nativeElement.maxCharCount = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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

	/** Sets a to the element which can be used to submit the value of the Editor via a form.
	*	Property type: string | null
	*/
	get name(): string | null  {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** Determines the format of the content that will be pasted inside the Editor.
	*	Property type: PasteFormat | string
	*/
	get pasteFormat(): PasteFormat | string  {
		return this.nativeElement ? this.nativeElement.pasteFormat : undefined;
	}
	set pasteFormat(value: PasteFormat | string) {
		if (this.nativeElement) {
			this.nativeElement.pasteFormat = value;
		}
	}

	/** Determines the placeholder that will be shown when there's no content inside the Editor.
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

	/** Determines whether the clearFormat toolbar action should also remove inline styles from the currently selected node.
	*	Property type: boolean
	*/
	get removeStylesOnClearFormat(): boolean  {
		return this.nativeElement ? this.nativeElement.removeStylesOnClearFormat : undefined;
	}
	set removeStylesOnClearFormat(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.removeStylesOnClearFormat = value;
		}
	}

	/** Determines whether Editor's content is required ot not. If set and the Editor's content is empty, a notification will appear to notify that the Editor cannot be empty.
	*	Property type: boolean
	*/
	get required(): boolean  {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.required = value;
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

	/** Determines whether the value is sanitized from XSS content or not. When enabled scripts and other XSS vulnerabilities are not allowed to exist inside the Editor's as HTML content.
	*	Property type: boolean
	*/
	get sanitized(): boolean  {
		return this.nativeElement ? this.nativeElement.sanitized : undefined;
	}
	set sanitized(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.sanitized = value;
		}
	}

	/** Determines whether the char counter is visible or not. When enabled it is displayed in the bottom right corner. If maxCharCount is set and the content characters are equal or more than 70% of the maximum char count the counter is colored in order to warn the user. If the char count is equal or more than 90% the counter is again colored with a different warning color to indicate that the counter is near maximum. When maximum is reached, text input is not allowed.
	*	Property type: boolean
	*/
	get showCharCount(): boolean  {
		return this.nativeElement ? this.nativeElement.showCharCount : undefined;
	}
	set showCharCount(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showCharCount = value;
		}
	}

	/** Determines whether the editor may be checked for spelling errors.
	*	Property type: boolean
	*/
	get spellCheck(): boolean  {
		return this.nativeElement ? this.nativeElement.spellCheck : undefined;
	}
	set spellCheck(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.spellCheck = value;
		}
	}

	/** Determines the refresh interval for the Source Code/Preview Panel when Split Mode is enabled. 
	*	Property type: number
	*/
	get splitModeRefreshTimeout(): number  {
		return this.nativeElement ? this.nativeElement.splitModeRefreshTimeout : undefined;
	}
	set splitModeRefreshTimeout(value: number) {
		if (this.nativeElement) {
			this.nativeElement.splitModeRefreshTimeout = value;
		}
	}

	/** Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side.
	*	Property type: string
	*/
	get uploadUrl(): string  {
		return this.nativeElement ? this.nativeElement.uploadUrl : undefined;
	}
	set uploadUrl(value: string) {
		if (this.nativeElement) {
			this.nativeElement.uploadUrl = value;
		}
	}

	/** Sets or gets the remove URL. This property corresponds to the form's action attribute. For example, the removeUrl property can point to a PHP file, which handles the remove operation on the server-side.
	*	Property type: string
	*/
	get removeUrl(): string  {
		return this.nativeElement ? this.nativeElement.removeUrl : undefined;
	}
	set removeUrl(value: string) {
		if (this.nativeElement) {
			this.nativeElement.removeUrl = value;
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

	/** Determines the Toolbar items list. Each item can be string pointing to the name of the item or an object that defines a custom item or adds aditional settings to an item. The name of the items are case insensitive. An object definition should contain a name attribute that refers to the name of the item when modifing an existing toolbar item. The name attribute determines the action of the item. If set to 'custom' it is possible to create a custom toolbar item. If name attribute is not set or not valid it is treated as a separator, no a toolbar item. The following items are supported by default by the Editor: SourceCode - shows the HTML/Preview Panel by hiding the input panel. Item type - 'Toggle button'.SplitMode - shows both input and HTML/Preview Panel by splitting the Editor content in two sections. Item type - 'Toggle button'FullScreen - fits the viewport with the Editor by expanding it over the page content. Item type - 'Toggle button'.Alignment - aligns the selected content. Item type - 'Drop down'.FontName - changes the font family of the selected content. Item type - 'drop-down'.FontSize - changes the font size of the selected content. Item type - 'drop-down'.Formats - changes the format of the current selection. Itme type - 'drop-down'.TableRows - allows to insert/remove a row into a selected table element. Item type - 'drop-down'.TableColumns - allows to insert/remove a column into a selected table element. Itme type - 'drop-down'.TableVAlign - sets the vertical alignment of a selected table cell. Item type - 'drop-down'.TableStyle - sets additional styling to a selected table inside the Editor. Item type - 'drop-down'.BackgroundColor - changes the background color of the current selection. Item type - 'color-input'.FontColor - changes the font color of the current selection. Item type = 'color-input'.Bold - sets the currently selected text as bold or not. Item type - 'button'.Italic - sets the currently selected text as italic. Item type - 'button'. Underline - sets the currently selected text as underlined. Itme type - 'button'.Strikethrough - set the currently selected text as strikethrough. Item type - 'button'.Delete - deletes the current selection. Item type - 'button'.Undo - undoes the last operation. Item type - 'button'.Redo - redoes the previous operation. Item type - 'button'.Indent - indents the current selection once. Item type - 'button'.Outdent - outdents the current selection once. Item type - 'button'.OpenLink - triggers a hyperlink. Item type - 'button'.EditLink - creates/edits the selected hyperlink. Item type - 'button'.CreateLink - creates/edits the selected hyperlink. Item type - 'button'.RemoveLink - removes the currently selected hyperlink. Item type - 'button'.Hyperlink - same as createLink, triggers a Dialog Window for link creation. Item type - 'button'.Cut - Cuts the currently selected text. Item type - 'button'.Copy - copies the currently selected text. Item type - 'button'Paste - pastes the currenly copied/cut text from the Clipboard. Item type = 'button' or 'drop-down' when advanced attribute is set to 'true'.Image - triggers a Dialog Window to insert/edit an image. Item type - 'button'.Video - triggers a Dialog Window to insert/edit a video. Item type - 'button'.LowerCase - changes the current selection to lower case. Item type - 'button'.UpperCase - changes the current selection to upper case. Item type - 'button'.Print - opens the browser print preview window. Item type - 'button'.Caption - insert/remove a caption when a table is selected. Item type - 'button'.ClearFormat - removes the formatting of the currntly selected text. Item type - 'button'.Table - triggers a Dialog Window to insert a table. Item type - 'button'.TableHeader - insert/remove a header row to the currently selected table. Item type - 'button'.OrderedList - insert/remove an order list. Item type = 'button'.UnorderedList - insert/remove an unordered list. Item type - 'button'.Subscript - changes the currently selected text to subscript. Item type - 'button'.Superscript - changes the currently selected text to superscript. Item type - 'button'.FindAndReplace - opens a dialog that allows to find and replace text inside the Editor's content section. Item type - 'button'.  The inlineToolbarItems attribute is applicable only to the following items: 'table', 'image', 'hyperlink'. It accepts the same type of value as toolbarItems property but the toolbar items will be placed insinde the Inline Toolbar instead.
	*	Property type: ToolbarItem[]
	*/
	get toolbarItems(): ToolbarItem[]  {
		return this.nativeElement ? this.nativeElement.toolbarItems : undefined;
	}
	set toolbarItems(value: ToolbarItem[]) {
		if (this.nativeElement) {
			this.nativeElement.toolbarItems = value;
		}
	}

	/** Determines the toolbar mode of the Editor. The main toolbar of the Editor can appear as a Ribbon or as a Menu.
	*	Property type: ToolbarMode | string
	*/
	get toolbarMode(): ToolbarMode | string  {
		return this.nativeElement ? this.nativeElement.toolbarMode : undefined;
	}
	set toolbarMode(value: ToolbarMode | string) {
		if (this.nativeElement) {
			this.nativeElement.toolbarMode = value;
		}
	}

	/** Allows to configure the SingleLineRibbon appearance by changing the order and items of the groups.
	*	Property type: { name: string, groups: { name: string, items: string[] }[] }[]
	*/
	get toolbarRibbonConfig(): { name: string, groups: { name: string, items: string[] }[] }[]  {
		return this.nativeElement ? this.nativeElement.toolbarRibbonConfig : undefined;
	}
	set toolbarRibbonConfig(value: { name: string, groups: { name: string, items: string[] }[] }[]) {
		if (this.nativeElement) {
			this.nativeElement.toolbarRibbonConfig = value;
		}
	}

	/** Determines the format of the content that will be pasted inside the Editor.
	*	Property type: ToolbarViewMode | string
	*/
	get toolbarViewMode(): ToolbarViewMode | string  {
		return this.nativeElement ? this.nativeElement.toolbarViewMode : undefined;
	}
	set toolbarViewMode(value: ToolbarViewMode | string) {
		if (this.nativeElement) {
			this.nativeElement.toolbarViewMode = value;
		}
	}

	/** Sticks the Toolbar to the top of the window and stays there while scrolling.
	*	Property type: boolean
	*/
	get toolbarSticky(): boolean  {
		return this.nativeElement ? this.nativeElement.toolbarSticky : undefined;
	}
	set toolbarSticky(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.toolbarSticky = value;
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

	/** Sets or gets the value of the Editor.
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

	/** A function that can be used to completly customize the Editor dialog that is used to insert/edit tables/images/videos/hyperlinks. The function accepts two arguments: target - the target dialog that is about to be opened.item - the toolbar item object that trigger the dialog.
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
		return ["animation","autoLoad","autoSave","autoSaveInterval","charCountFormatFunction","autoUpload","contentFiltering","contextMenu","contextMenuDataSource","dataExport","disabled","disableEditing","disableSearchBar","editMode","enableHtmlEncode","enableTabKey","findAndReplaceTimeout","hideToolbar","hideInlineToolbar","imageFormat","innerHTML","inlineToolbarOffset","iframeSettings","locale","maxCharCount","messages","name","pasteFormat","placeholder","removeStylesOnClearFormat","required","rightToLeft","sanitized","showCharCount","spellCheck","splitModeRefreshTimeout","uploadUrl","removeUrl","theme","toolbarItems","toolbarMode","toolbarRibbonConfig","toolbarViewMode","toolbarSticky","unfocusable","value","windowCustomizationFunction"];
	}
	/**  This event is triggered on blur if the content is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The old value before the change.
	*   value - The new value after the change.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered after user input to indicate that the content is changed via user interaction.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The old value before the input change.
	*   value - The new value after the input change.
	*/
	onChanging?: ((event?: Event) => void) | undefined
	/**  This event is triggered before a Toolbar action is started. The event can be canceled via event.preventDefault().
	*  @param event. The custom event. 	Custom event was created with: event.detail(	name)
	*   name - The name of the action.
	*/
	onActionStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a Toolbar action has ended.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	name)
	*   name - The name of the action.
	*/
	onActionEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a Context menu item has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	originalEvent, 	value)
	*   originalEvent - The original click event.
	*   value - The value of the item.
	*/
	onContextMenuItemClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Context Menu is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
	*   target - The toolbar that is the target of the operation.
	*   owner - The tooltip target (the owner of the tooltip).
	*/
	onContextMenuOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Context Menu is opening. The opening operation can be canceled via event.preventDefault().
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The toolbar that is the target of the operation.
	*/
	onContextMenuOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Context Menu is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
	*   target - The toolbar that is the target of the operation.
	*   owner - The tooltip target (the owner of the tooltip).
	*/
	onContextMenuClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Context Menu is closing. The closing operation can be canceled via event.preventDefault().
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The toolbar that is the target of the operation.
	*/
	onContextMenuClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an image/table/video resizing has started.
	*  @param event. The custom event. 	*/
	onResizeStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an image/table/video resizing has ended.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The element that is resized (image/table or video).
	*/
	onResizeEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the inline Toolbar is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
	*   target - The toolbar that is the target of the operation.
	*   owner - The tooltip target (the owner of the tooltip).
	*/
	onInlineToolbarOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the inline Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The toolbar that is the target of the operation.
	*/
	onInlineToolbarOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the inline Toolbar is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
	*   target - The toolbar that is the target of the operation.
	*   owner - The tooltip target (the owner of the tooltip).
	*/
	onInlineToolbarClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the inline Toolbar is closing.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The toolbar that is the target of the operation. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*/
	onInlineToolbarClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Drop Down Toolbar is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
	*   target - The toolbar that is the target of the operation.
	*   owner - The tooltip target (the owner of the tooltip).
	*/
	onDropDownToolbarOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Drop Down Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The toolbar that is the target of the operation.
	*/
	onDropDownToolbarOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Drop Down Toolbar is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
	*   target - The toolbar that is the target of the operation.
	*   owner - The tooltip target (the owner of the tooltip).
	*/
	onDropDownToolbarClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Drop Down Toolbar is closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target)
	*   target - The toolbar that is the target of the operation.
	*/
	onDropDownToolbarClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered the Dialog Window is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
	*   target - The window that is the target of the operation.
	*   item - The toolbar item is the target of the operation.
	*/
	onDialogOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered before the Dialog Window is opened. The event can be prevented via event.preventDefault().
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
	*   target - The window that is the target of the operation.
	*   item - The toolbar item that is the target of the operation.
	*/
	onDialogOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Dialog Window is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
	*   target - The window that is the target of the operation.
	*   item - The toolbar item that is the target of the operation.
	*/
	onDialogClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered before the Dialog Window is closing. The event can be prevented via event.preventDefault().
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
	*   target - The window that is the target of the operation.
	*   item - The toolbar item that is the target of the operation.
	*/
	onDialogClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the uploading of an image/video is successful.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	filename, 	type, 	size, 	index, 	status, 	serverResponse)
	*   target - The file upload element that is the target of the operation.
	*   item - The toolbar item that is the target of the operation.
	*   filename - The name of the uploaded file.
	*   type - The type of the uploaded file.
	*   size - The size of the uploaded file.
	*   index - The index of the uploaded file.
	*   status - The status of the uploaded file. Whether there was an error or success.
	*   serverResponse - The response of the remote server.
	*/
	onImageUploadSuccess?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the uploading of an image/video is unsuccessful.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	filename, 	type, 	size, 	index, 	status, 	serverResponse)
	*   target - The file upload element that is the target of the operation.
	*   item - The toolbar item that is the target of the operation.
	*   filename - The name of the canceled file.
	*   type - The type of the canceled file.
	*   size - The size of the canceled file.
	*   index - The index of the canceled file.
	*   status - The status of the uploaded file. Whether there was an error or success.
	*   serverResponse - The response of the remote server.
	*/
	onImageUploadFailed?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a Toolbar item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	originalEvent, 	value)
	*   originalEvent - The original click event.
	*   value - The name of the toolbar item that was clicked.
	*/
	onToobarItemClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a message is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
	*   instance - The toast item that is the target of the operation.
	*/
	onMessageClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a message is opened.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
	*   instance - The toast item that is the target of the operation.
	*/
	onMessageOpen?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onChanging","onActionStart","onActionEnd","onContextMenuItemClick","onContextMenuOpen","onContextMenuOpening","onContextMenuClose","onContextMenuClosing","onResizeStart","onResizeEnd","onInlineToolbarOpen","onInlineToolbarOpening","onInlineToolbarClose","onInlineToolbarClosing","onDropDownToolbarOpen","onDropDownToolbarOpening","onDropDownToolbarClose","onDropDownToolbarClosing","onDialogOpen","onDialogOpening","onDialogClose","onDialogClosing","onImageUploadSuccess","onImageUploadFailed","onToobarItemClick","onMessageClose","onMessageOpen","onCreate","onReady"];
	}
	/** Blurs the content of the Editor. 
	*/
    public blur(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.blur();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.blur();
            });
        }
    }

	/** Clears the content of the Editor. 
	*/
    public clearContent(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearContent();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearContent();
            });
        }
    }

	/** Collapse the Toolbar if the toolbarViewMode is set to 'toggle'. 
	*/
    public collapseToolbar(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseToolbar();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseToolbar();
            });
        }
    }

	/** Disables a Toolbar item. 
	* @param {string} itemName. The name of the toolbar item to disable.
	*/
    public disableToolbarItem(itemName: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.disableToolbarItem(itemName);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.disableToolbarItem(itemName);
            });
        }
    }

	/** Expand the Toolbar if the toolbarViewMode is set to 'toggle'. 
	*/
    public expandToolbar(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandToolbar();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandToolbar();
            });
        }
    }

	/** Enables a previously disabled Toolbar item. 
	* @param {string} itemName. The name of the toolbar item to enable.
	*/
    public enableToolbarItem(itemName: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.enableToolbarItem(itemName);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.enableToolbarItem(itemName);
            });
        }
    }

	/** Executes a command via the native execCommand method. The method returns true or false depending on whether the execution was successful or not. The following list of commands can be eexecuted: bold - makes the currently selected content bold. Example: editor.executeCommand('bold');italic - makes the currently selected content italic. Example: editor.executeCommand('italic');undelined - makes the currently selected content underlined. Example: editor.executeCommand('underline');strikeThrough - applies a single line strike through formatting to the currently selected content. Example: editor.executeCommand('strikeThrough');superscript - sets the selected content as superscript. Example: editor.executeCommand('superscript');subscript - sets the selected content as superscript. Example: editor.executeCommand('subscript');uppercase - changes the case of the current selection to upper. Example: editor.executeCommand('uppercase');lowercase - changes the case of the current selection to lower. Example: editor.executeCommand('lowercase');foreColor - changes the font color of the current content selection. Example: editor.executeCommand('foreColor', '#000000');fontName - changes the font name for the selected content. Example: editor.executeCommand('fontName', 'Arial');fontSize - changes the font size of the currently selected content. Example: editor.executeCommand('fontSize', '15px');hiliteColor - changes the background color of current selection. Example: editor.executeCommand('hiliteColor', '#000000');justifyCenter - aligns the content to the center. Example: editor.executeCommand('justifyCenter');justifyFull - aligns the content to be fully justified. Example: editor.executeCommand('justifyFull');justifyLeft - aligns the content to the left. Example: editor.executeCommand('justifyLeft');justifyRight - aligns the content to the right. Example: editor.executeCommand('justifyRight');undo - allows to undo the previous action. Example: editor.executeCommand('undo');redo - allows to redo the previous actions. Example: editor.executeCommand('redo');createLink - creates a hyperlink in the content section of the Editor. Example: editor.executeCommand('createLink', { text: 'Links', url: 'http://', title : 'Link' });indent - indents the content with one level. Example: editor.executeCommand('indent');outdent - outdents the content with one level. Example: editor.executeCommand('outdent');insertHTML - insert an HTML content as string at the current cursor location. Example: editor.executeCommand('insertHTML', 'Text');insertOrderedList - inserts a new numbered list item. Example: editor.executeCommand('insertOrderedList');insertUnorderedList - inserts a new bulleted list item. Example: editor.executeCommand('insertUnorderedList');removeFormat - removes the formatting styles from currently selected text. Example: editor.executeCommand('removeFormat');insertText - inserts a text at the current cursor location. Example: editor.executeCommand('insertText', 'Some text to insert');insertImage - inserts an image at the current cursor location. Example: editor.executeCommand('insertImage', { url: 'https://www.htmlelements.com/demos/images/carousel-medium-2.jpg'}); 
	* @param {string} commandName. The name of the command to execute.
	* @param {string | number} value?. The value for the command. Some commands require a value to be passed, others do not.
	* @returns {boolean}
  */
	public executeCommand(commandName:string, value?:string | number) : any {
        const result: any = this.nativeElement.executeCommand(commandName, value);
        return result;
    }

	/** Focuses the content of the Editor. 
	*/
    public focus(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focus();
            });
        }
    }

	/** Returns the number of characters inside the Editor's content. 
	* @returns {number}
  */
	public getCharCount() : any {
        const result: any = this.nativeElement.getCharCount();
        return result;
    }

	/** Returns the current selection range. By default the result is an object of type Range, but if the editMode property is set to 'markdown' the returned value is an object indicating the start/end indexes of the current selection.  
	* @returns {any}
  */
	public getSelectionRange() : any {
        const result: any = this.nativeElement.getSelectionRange();
        return result;
    }

	/** Returns the content of the Editor as HTML. When editMode is set to 'markdown' the markdown is parsed and returned as HTML. 
	* @returns {string}
  */
	public getHTML() : any {
        const result: any = this.nativeElement.getHTML();
        return result;
    }

	/** Returns the content of the Editor as text. 
	* @returns {string}
  */
	public getText() : any {
        const result: any = this.nativeElement.getText();
        return result;
    }

	/** Hides a specific message or all messages if no argument is provided. 
	* @param {HTMLElement | string | number} item?. Hides a specific message. The argument can be a DOM reference to a specific item, it's index or it's id. If the argument is not provided then all messages will be closed.
	*/
    public hideMessage(item?: HTMLElement | string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideMessage(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideMessage(item);
            });
        }
    }

	/** Hides the last shown message. 
	*/
    public hideLastMessage(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideLastMessage();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideLastMessage();
            });
        }
    }

	/** Shows a custom message inside the Editor. 
	* @param {string} message. The text message to be displayed.
	* @param {any} settings?. Additional settings that can be applied to the Toast element that handles the messages. This parameter should contain only valid Toast properties and values.
	* @returns {HTMLElement | undefined}
  */
	public showMessage(message:string, settings?:any) : any {
        const result: any = this.nativeElement.showMessage(message, settings);
        return result;
    }

	/** Selects the text inside Editor's content. 
	*/
    public selectAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectAll();
            });
        }
    }

	/** Selects a range of text inside the Editor. The method will find the nodes containing the text from the start to the end indexes and will select them as ranges. However, currently only FireFox supports multiple range selection. The rest of the browsers will only select the first node. If the editor is in 'html' editMode then the expected text will be selected regardless of the browser because there's only one node inside the editor. 
	* @param {number} startIndex. The start index to select from.
	* @param {number} endIndex. The end index to select to.
	*/
    public selectRange(startIndex: number, endIndex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRange(startIndex, endIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRange(startIndex, endIndex);
            });
        }
    }

	/** Clears the local storage from previously stored states of the Editor with the current id. 
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

	/** Saves the current state of the Editor to local storage. Requires an id to be set to the Editor. 
	*/
    public saveState(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState();
            });
        }
    }

	/** Loads the last stored state of the Editor from local storage. Requires an id to be set to the Editor. 
	*/
    public loadState(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState();
            });
        }
    }

	/** Sets Editor into Split Mode. In split mode the HTML/Markdown editor and SourceCode/Preview panels are visible. 
	* @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
	*/
    public splitMode(value?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.splitMode(value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.splitMode(value);
            });
        }
    }

	/** Sets Editor into SourceCode/Preview Mode. In this mode the HTML view panel is displayed. 
	* @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
	*/
    public previewMode(value?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.previewMode(value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.previewMode(value);
            });
        }
    }

	/** Sets Editor into Full Screen Mode. If enabled the Editor is positioned above the page content and fills the screen. 
	* @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
	*/
    public fullScreenMode(value?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.fullScreenMode(value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.fullScreenMode(value);
            });
        }
    }

	/** Exports the content of the Editor in the desired format. The currently supported formats are: HTML, Markdown and PDF. 
	* @param {string} dataFormat. The expected file format.
	* @param {any} callback?. A callback that is executed before the data is exported. Allows to modify the output.
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

	/** Imports the content of a file to the Editor. The currently supported formats are: TXT or HTML. 
	* @param {any} source. The url to the file or an object that defines settings for the Ajax request like url, timeput, etc. Object format: { url: string, type: string, data: object, timeout: number }
	* @param {any} settings?. Additional settings for the ajax request. Such as loadError function, contentType, etc. Format: { contentType: string, beforeSend: Function, loadError: Function, beforeLoadComplete: Function  }
	*/
    public importData(source: any, settings?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.importData(source, settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.importData(source, settings);
            });
        }
    }

	/** Opens the Print Preview Panel of the Browser to print Editor's content. 
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

	/** Allows to update the settings of a single toolbar item. The method returns true if successful. 
	* @param {string | number} name. The name of the toolbar item or it's index inside the <b>toolbarItems</b> array.
	* @param {any} settings. A settings object for the toolbar item. It should have the same definition as when defining a custom toolbar item. You can read more about it in the dedicated topic for the Editor Toolbar on the website.
	* @returns {boolean | undefined}
  */
	public updateToolbarItem(name:string | number, settings:any) : any {
        const result: any = this.nativeElement.updateToolbarItem(name, settings);
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
			React.createElement("smart-editor", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Editor;
