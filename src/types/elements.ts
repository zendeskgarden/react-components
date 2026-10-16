/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IUseAccordionProps } from '@zendeskgarden/container-accordion';
import type {
  IOption,
  IUseComboboxProps,
  IUseComboboxReturnValue
} from '@zendeskgarden/container-combobox';
import type {
  ISelectedItem as IUseMenuSelectedItem,
  IUseMenuProps
} from '@zendeskgarden/container-menu';
import type {
  AnchorHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  FieldsetHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  KeyboardEvent,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  MouseEvent,
  OlHTMLAttributes,
  ReactElement,
  ReactNode,
  Ref,
  RefObject,
  SelectHTMLAttributes,
  SVGAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  TextareaHTMLAttributes,
  ThHTMLAttributes
} from 'react';

import { PLACEMENT as PLACEMENT_BASE, PLACEMENT as BASE_PLACEMENT } from '../theming/types';

//#region accordion
export interface IAccordionProps<Value = any> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
> {
  /** Sets `aria-level` heading rank in the document structure */
  level: NonNullable<HTMLAttributes<HTMLDivElement>['aria-level']>;
  /** Sets the expanded sections in a controlled accordion */
  expandedSections?: Value[];
  /** Sets the default expanded sections in an uncontrolled accordion */
  defaultExpandedSections?: Value[];
  /** Hides section borders */
  isBare?: boolean;
  /** Allows uncontrolled accordion sections to collapse */
  isCollapsible?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Animates section expansion and collapse */
  isAnimated?: boolean;
  /** Enables simultaneous expansion of uncontrolled accordion sections */
  isExpandable?: boolean;
  /**
   * Handles accordion expansion changes
   *
   * @param {*} value A section value
   */
  onChange?: IUseAccordionProps<Value>['onChange'];
}
export interface IStepperProps extends OlHTMLAttributes<HTMLOListElement> {
  /** Defines the currently active step, starting at 0 */
  activeIndex?: number;
  /** Applies horizontal layout styling */
  isHorizontal?: boolean;
}
export interface IStepperLabelProps extends HTMLAttributes<HTMLDivElement> {
  /** Replaces the label number with an icon. The svg is drawn at 16px; width/height on iconProps do not apply. */
  icon?: ReactElement;
  /** Passes props to the default check icon */
  iconProps?: SVGAttributes<SVGElement>;
  /** Hides the label text */
  isHidden?: boolean;
}
export interface ITimelineProps extends OlHTMLAttributes<HTMLOListElement> {
  /** Applies alternate styling */
  isAlternate?: boolean;
}
export interface ITimelineItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Replaces the dot with an icon */
  icon?: ReactElement;
  /**
   * Provides surface color for an icon placed on a non-default background.
   * Accepts a [color variable](/components/theme-object#colors) key (i.e.
   * `background.recessed`) to render based on light/dark mode, or any hex
   * value.
   */
  surfaceColor?: string;
}
//#endregion

//#region avatar
export const AVATAR_SIZE = ['extraextrasmall', 'extrasmall', 'small', 'medium', 'large'] as const;
export const STATUS = ['available', 'away', 'transfers', 'offline'] as const;
export interface IAvatarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sets the avatar background color. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e.
   * `background.emphasis`) to render based on light/dark mode, or any hex
   * value.
   */
  backgroundColor?: string;
  /**
   * Sets the color for child SVG or `Avatar.Text` components. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e.
   * `foreground.onEmphasis`) to render based on light/dark mode, or any hex
   * value.
   */
  foregroundColor?: string;
  /**
   * Provides surface color for an avatar placed on a non-default background.
   * Accepts a [color variable](/components/theme-object#colors) key (i.e.
   * `background.subtle`) to render based on light/dark mode, or any hex value.
   */
  surfaceColor?: string;
  /** Applies system styling for representing objects, brands, or products */
  isSystem?: boolean;
  /** Specifies the avatar size */
  size?: (typeof AVATAR_SIZE)[number];
  /** Applies status styling */
  status?: (typeof STATUS)[number];
  /** Specifies the status label */
  statusLabel?: string;
  /** Sets the badge text and applies active styling */
  badge?: string | number;
}
export interface IStatusIndicatorProps extends Omit<HTMLAttributes<HTMLElement>, 'aria-label'> {
  /** Overrides the label for the status indicator. Use `null` to mark the indicator as decorative. */
  'aria-label'?: string | null;
  /** Applies status type for styling and default aria-label */
  type?: (typeof STATUS)[number];
  /** Applies compact styling */
  isCompact?: boolean;
}
//#endregion

//#region button
export const BUTTON_SIZE = ['small', 'medium', 'large'] as const;
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Applies danger styling */
  isDanger?: boolean;
  /** Specifies the button size */
  size?: (typeof BUTTON_SIZE)[number];
  /** Stretches the button fill to its container width */
  isStretched?: boolean;
  /**
   * Applies neutral button styling, which is the default: unset and `true`
   * render the same. Pass `false` for primary-colored text and icons on a
   * basic or outline `Button`. Primary, danger and link buttons, and
   * `IconButton`, render the same either way.
   *
   * @default true
   */
  isNeutral?: boolean;
  /** Applies primary button styling */
  isPrimary?: boolean;
  /** Applies basic button styling */
  isBasic?: boolean;
  /** Applies link (anchor) button styling */
  isLink?: boolean;
  /** Applies pill button styling */
  isPill?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
}
export interface IToggleButtonProps extends IButtonProps {
  /**
   * Determines if the button is pressed. Use "mixed" to indicate that
   * the toggle controls other elements which do not share the same value.
   */
  isPressed?: boolean | 'mixed';
}
export interface IIconButtonProps extends Omit<IButtonProps, 'isStretched' | 'isLink'> {
  /** Rotates icon 180 degrees */
  isRotated?: boolean;
}
export interface IToggleIconButtonProps
  extends IIconButtonProps, Pick<IToggleButtonProps, 'isPressed'> {}
export interface IButtonIconProps
  extends Pick<IIconButtonProps, 'isRotated'>, SVGAttributes<SVGElement> {}
export interface IAnchorProps
  extends Pick<IButtonProps, 'isDanger'>, AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Attaches `target="_blank"` and `rel="noopener noreferrer"` to an anchor that
   * navigates to an external resource. This ensures that the anchor is a
   * safe [cross-origin destination link](https://web.dev/external-anchors-use-rel-noopener/).
   **/
  isExternal?: boolean;
  /**
   * Allows a customized/translated text label to be passed to the external link icon,
   * making that icon accessible to assistive technology
   **/
  externalIconLabel?: string;
  /** Determines if the anchor has underline styling */
  isUnderlined?: boolean;
}
//#endregion

//#region colorpicker
export interface IColor {
  hex: string;
  hue: number;
  saturation: number;
  lightness: number;
  red: number;
  green: number;
  blue: number;
  alpha: number;
}
export interface IHSVColor {
  h: number;
  s: number;
  v: number;
}
export interface IHSLColor {
  h: number;
  s: number;
  l: number;
  a?: number;
}
export interface IRGBColor {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
}
export interface IColorPickerProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'color' | 'onChange'
> {
  /** Sets the color for an uncontrolled color picker */
  defaultColor?: string | IColor;
  /** Sets the color for a controlled color picker */
  color?: string | IColor;
  /** Hides alpha transparency fields */
  isOpaque?: boolean;
  /**
   * Handles color picker changes
   *
   * @param {Object} color A color picker state
   */
  onChange?: (color: IColor) => void;
  /** Replaces label text within the color picker */
  labels?: {
    hueSlider?: string;
    alphaSlider?: string;
    hex?: string;
    red?: string;
    green?: string;
    blue?: string;
    alpha?: string;
  };
  /** @ignore */
  autofocus?: boolean;
}
export interface IColorPickerDialogProps extends IColorPickerProps {
  /**
   * Handles close actions. Can be triggered from the backdrop.
   *
   * @param {Object} color A color picker state
   */
  onClose?: (color: IColor) => void;
  /** Adjusts the placement of the color dialog */
  placement?: ITooltipDialogProps['placement'];
  /** Disables the color dialog button */
  disabled?: boolean;
  /**
   * Sets the `z-index` of the color dialog
   */
  zIndex?: ITooltipDialogProps['zIndex'];
  /**
   * Adds an arrow to the color dialog
   */
  hasArrow?: ITooltipDialogProps['hasArrow'];
  /**
   * Animates the color dialog
   */
  isAnimated?: ITooltipDialogProps['isAnimated'];
  /**
   * Opens the dialog in a controlled color picker dialog
   */
  isOpen?: boolean;
  /**
   * Applies inset `box-shadow` styling on focus
   */
  focusInset?: boolean;
  /**
   * Passes HTML attributes to the color dialog button element
   */
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
  /**
   * Handles dialog changes
   *
   * @param {Object} changes The changed dialog state
   */
  onDialogChange?: (changes: { isOpen: boolean }) => void;
}
export interface ILabeledColor {
  value: string;
  label: string;
}
export interface IColorSwatchProps extends Omit<HTMLAttributes<HTMLTableElement>, 'onSelect'> {
  /** Sets the name used to reference the value of the control */
  name: string;
  /** Sets the two-dimension array of labeled HEX and RGB/A string colors */
  colors: { value: string; label: string }[][];
  /** Determines if the color swatch is backed by radio (default) or checkbox inputs */
  isCheckboxGroup?: boolean;
  /** Sets the selected row index in a controlled color swatch */
  selectedRowIndex?: number | null;
  /** Sets the selected column index in a controlled color swatch */
  selectedColIndex?: number | null;
  /** Sets the default selected row index in an uncontrolled color swatch */
  defaultSelectedRowIndex?: number;
  /** Sets the default selected column index in an uncontrolled color swatch */
  defaultSelectedColIndex?: number;
  /** Handles color swatch select event */
  onSelect?: (rowIndex: number | null, colIndex: number | null) => void;
}
export interface IColorSwatchDialogProps extends IColorSwatchProps {
  /** Adjusts the placement of the color dialog */
  placement?: ITooltipDialogProps['placement'];
  /** Disables the color dialog button */
  disabled?: boolean;
  /** Sets the `z-index` of the color dialog */
  zIndex?: ITooltipDialogProps['zIndex'];
  /** Adds an arrow to the color dialog */
  hasArrow?: ITooltipDialogProps['hasArrow'];
  /** Animates the color dialog */
  isAnimated?: ITooltipDialogProps['isAnimated'];
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Passes HTML attributes to the color dialog button element */
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
  /** Opens the dialog in a controlled color swatch dialog */
  isOpen?: boolean;
  /**
   * Handles dialog changes
   *
   * @param {Object} changes The changed dialog state
   */
  onDialogChange?: (changes: { isOpen: boolean }) => void;
}
//#endregion

//#region datepicker
export const WEEK_STARTS_ON = [0, 1, 2, 3, 4, 5, 6] as const;
export const DATEPICKER_PLACEMENT = ['auto', ...BASE_PLACEMENT] as const;
export type DatepickerGardenPlacement = (typeof DATEPICKER_PLACEMENT)[number];
export interface IDatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Appends the calendar to the element provided */
  appendToNode?: Element | DocumentFragment;
  /**
   * Sets the selected date
   */
  value?: Date;
  /**
   * Handles date change
   *
   * @param {Date} date The selected date
   */
  onChange?: (date: Date) => void;
  /**
   * Customizes the input element's date formatting
   *
   *  @param {Date} date The selected date
   *  @returns {string} a formatted date string
   */
  formatDate?: (date: Date) => string;
  /**
   * Applies locale-based formatting.
   * Accepts all valid `Intl` [locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
   */
  locale?: string;
  /**
   * Overrides the locale default start day of week
   */
  weekStartsOn?: (typeof WEEK_STARTS_ON)[number];
  /**
   * Disables dates before this value on the calendar
   */
  minValue?: Date;
  /**
   * Disables dates after this value on the calendar
   */
  maxValue?: Date;
  /**
   * Applies compact styling
   */
  isCompact?: boolean;
  /**
   * Overrides default date parsing
   *
   * @param {string} inputValue A localized input value
   * @returns {Date} the parsed date
   */
  customParseDate?: (inputValue: string) => Date;
  /**
   * Defines the ref key used to position the calendar
   */
  refKey?: string;
  /**
   * Adjusts the position of the calendar
   **/
  placement?: DatepickerGardenPlacement;
  /**
   * Animates the calendar
   */
  isAnimated?: boolean;
  /**
   * Sets the `z-index` of the calendar
   */
  zIndex?: number;
  /** @ignore ReactNode override */
  children: ReactElement;
}
export interface IDatePickerRangeProps extends Pick<
  IDatePickerProps,
  'locale' | 'weekStartsOn' | 'minValue' | 'maxValue' | 'formatDate' | 'isCompact'
> {
  /**
   * Sets the start date
   */
  startValue?: Date;
  /**
   * Sets the end date
   */
  endValue?: Date;
  /**
   * Handles start and end date changes
   *
   * @param {Object} values The selected dates
   * @param {Date} [values.startValue] Optional start date
   * @param {Date} [values.endValue] Optional end date
   */
  onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
  /**
   * Overrides the default date parsing
   *
   * @param {string} inputValue A date string
   * @returns {Date} the parsed date
   */
  customParseDate?: (inputValue?: string) => Date;
}
//#endregion

//#region draggable
export interface IDraggableProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Removes borders */
  isBare?: boolean;
  /** Applies compact spacing */
  isCompact?: boolean;
  /** Disables the draggable */
  isDisabled?: boolean;
  /** Applies grab styling */
  isGrabbed?: boolean;
  /** Hides content and applies placeholder background styling */
  isPlaceholder?: boolean;
  /** Updates the element's HTML tag */
  tag?: any;
}
export interface IDraggableListProps extends HTMLAttributes<HTMLUListElement> {
  /** Flows list items inline */
  isHorizontal?: boolean;
}
export interface IDropzoneProps extends HTMLAttributes<HTMLDivElement> {
  /** Indicates a drop is possible during a drag */
  isActive?: boolean;
  /** Aligns dropzone message content vertically */
  isVertical?: boolean;
  /** Applies danger styling */
  isDanger?: boolean;
  /** Disables the dropzone */
  isDisabled?: boolean;
  /** Indicates a draggable is on a droppable area */
  isHighlighted?: boolean;
  /** Updates the element's HTML tag */
  tag?: any;
}
//#endregion

//#region dropdown
export type ISelectedItem = IUseMenuSelectedItem;
export type ISelectedOption = Extract<IUseComboboxReturnValue['selection'], IOption>;
export type OptionValue = Exclude<IUseComboboxReturnValue['activeValue'], undefined>;
export const OPTION_TYPE = ['add', 'danger', 'next', 'previous'] as const;
export type OptionType = (typeof OPTION_TYPE)[number];
export type ComboboxValidation = (typeof VALIDATION)[number];
export const DROPDOWN_PLACEMENT = ['auto', ...PLACEMENT_BASE] as const;
export type DropdownGardenPlacement = (typeof DROPDOWN_PLACEMENT)[number];
export interface IComboboxProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the currently active option index in a controlled combobox */
  activeIndex?: number;
  /** Sets the default active option index in an uncontrolled combobox */
  defaultActiveIndex?: number;
  /** Determines default listbox expansion in an uncontrolled combobox */
  defaultExpanded?: boolean;
  /** Accepts an "end" icon to display */
  endIcon?: ReactElement;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Identifies the combobox */
  id?: string;
  /** Passes HTML attributes to the input element */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  /** Sets the input value in a controlled combobox */
  inputValue?: string;
  /** Indicates that the combobox provides autocompletion  */
  isAutocomplete?: boolean;
  /** Removes borders and padding */
  isBare?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Indicates that the combobox is not interactive */
  isDisabled?: boolean;
  /** Determines whether the combobox is editable or select-only */
  isEditable?: boolean;
  /** Determines listbox expansion in a controlled combobox */
  isExpanded?: boolean;
  /** Determines whether multiple options can be selected */
  isMultiselectable?: boolean;
  /** Appends the lisbox to the element provided */
  listboxAppendToNode?: Element | DocumentFragment;
  /** Specifies the listbox `aria-label` */
  listboxAriaLabel?: string;
  /** Sets the `max-height` of the listbox */
  listboxMaxHeight?: string;
  /** Overrides the `min-height` of the listbox */
  listboxMinHeight?: string | null;
  /** Sets the `z-index` of the listbox */
  listboxZIndex?: number;
  /** Overrides the `max-height` of the combobox */
  maxHeight?: string;
  /** Determines the maximum number of tags displayed when a multiselectable combobox is collapsed */
  maxTags?: number;
  /**
   * Handles combobox state changes
   *
   * @param {string} changes.type The event type that triggered the change
   * @param {boolean} [changes.isExpanded] The updated listbox expansion
   * @param {OptionValue|OptionValue[]} [changes.selectionValue] The updated selection value(s)
   * @param {string} [changes.inputValue] The updated input value
   * @param {number} [changes.activeIndex] The updated active option index
   */
  onChange?: IUseComboboxProps['onChange'];
  /** Defines text that appears in the element when no items are selected */
  placeholder?: string;
  /**
   * Overrides the "+ N more" text displayed when the total number of multiselectable tags exceeds `maxTags`
   *
   * @param {number} value The number of hidden items
   *
   * @returns {string} a replacement for the "+ N more" text
   */
  renderExpandTags?: (value: number) => string;
  /**
   * Overrides the `inputValue` or `placeholder` text displayed when the combobox is not focused
   *
   * @param {object|object[]} options.selection Current selection
   * @param {string} [options.inputValue] Current input value
   *
   * @returns {Object} content for the current combobox value
   */
  renderValue?: (options: {
    selection: IUseComboboxReturnValue['selection'];
    inputValue?: IUseComboboxReturnValue['inputValue'];
  }) => ReactNode;
  /** Sets the selection value (or `isMultiselectable` values) in a controlled combobox */
  selectionValue?: IUseComboboxProps['selectionValue'];
  /** Accepts a "start" icon to display */
  startIcon?: ReactElement;
  /** Applies validation state styling */
  validation?: ComboboxValidation;
}
export interface IComboboxLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Applies regular (non-bold) font weight */
  isRegular?: boolean;
  /** Hides the label visually without hiding it from screen readers */
  hidden?: LabelHTMLAttributes<HTMLLabelElement>['hidden'];
}
export interface IListboxProps extends HTMLAttributes<HTMLUListElement> {
  /** Appends the lisbox to the element provided */
  appendToNode?: Element | DocumentFragment;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Determines listbox expansion */
  isExpanded?: boolean;
  /** Sets the `max-height` of the listbox */
  maxHeight?: IComboboxProps['listboxMaxHeight'];
  /** Sets the `min-height` of the listbox */
  minHeight?: IComboboxProps['listboxMinHeight'];
  /** Provides ref access to the associated trigger element */
  triggerRef: RefObject<HTMLElement>;
  /** Sets the `z-index` of the listbox */
  zIndex?: IComboboxProps['listboxZIndex'];
}
export interface IComboboxMessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies validation state styling */
  validation?: ComboboxValidation;
  /** Defines the `aria-label` for the validation icon */
  validationLabel?: string;
}
export interface IOptionProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'value'> {
  /** Indicates that one or more sub-options are selected (only valid for `type="next"`) */
  hasSelection?: boolean;
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Indicates that the option is not interactive */
  isDisabled?: boolean;
  /** Hides the option while retaining props (i.e. selected `tagProps`) */
  isHidden?: boolean;
  /** Determines the initial selection state for the option */
  isSelected?: boolean;
  /** Sets the text label of the option (defaults to `value`) */
  label?: string;
  /** Overrides props (including `children`) for the associated tag */
  tagProps?: Omit<IComboboxTagProps, 'option'>;
  /** Determines the option type */
  type?: OptionType;
  /** Sets the unique value that is returned upon selection */
  value: string;
}
export interface IOptGroupProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'content'> {
  /** Renders content for the option group (defaults to `label` text) */
  content?: ReactNode;
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Sets the text label of the option group */
  legend?: string;
}
export interface IComboboxTagProps extends Omit<ITagProps, 'isRound' | 'size'> {
  /** @ignore Associates this tag with the given option (internal only) */
  option: IOption;
  /** Sets the `aria-label` and tooltip for the remove icon */
  removeLabel?: string;
  /** @ignore Sets the `z-index` of the tooltip */
  tooltipZIndex?: number;
}
export interface ITagGroupProps {
  /** Indicates that the tag group is not interactive */
  isDisabled?: boolean;
  /** Determines whether the combobox is editable or select-only */
  isEditable?: boolean;
  /** Determines tag group expansion */
  isExpanded: boolean;
  /** Indicates the `z-index` of the listbox */
  listboxZIndex?: number;
  /** Determines the maximum number of tags displayed when the tag group is collapsed */
  maxTags: number;
  /** Provides tag props for the associated option */
  optionTagProps: Record<string, IOptionProps['tagProps']>;
  /** Provides the current selection */
  selection: IOption[];
}
export interface IMenuListProps extends HTMLAttributes<HTMLUListElement> {
  /** Appends the menu to the element provided */
  appendToNode?: Element | DocumentFragment;
  /** Attaches an arrow that points towards the menu trigger */
  hasArrow?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Determines menu expansion */
  isExpanded?: boolean;
  /** Provides a list of acceptable fallback placements */
  fallbackPlacements?: Exclude<DropdownGardenPlacement, 'auto'>[];
  /** Sets the `max-height` of the menu */
  maxHeight?: IListboxProps['maxHeight'];
  /** Sets the `min-height` of the menu */
  minHeight?: IListboxProps['minHeight'];
  /** Adjusts the placement of the menu */
  placement?: DropdownGardenPlacement;
  /** Provides ref access to the associated trigger element */
  triggerRef: RefObject<HTMLElement>;
  /** Sets the `z-index` of the menu */
  zIndex?: IListboxProps['zIndex'];
}
export interface IMenuProps extends HTMLAttributes<HTMLUListElement> {
  /** Appends the menu to the element provided */
  appendToNode?: IMenuListProps['appendToNode'];
  /** Sets the menu button label or renders a provided trigger element */
  button: string | ((props: IButtonProps & { ref: RefObject<HTMLButtonElement> }) => ReactNode);
  /** Provides additional props to the menu [Button](/components/button#button) */
  buttonProps?: IButtonProps;
  /** Determines default expansion in an uncontrolled menu */
  defaultExpanded?: IUseMenuProps['defaultExpanded'];
  /** Determines focused value on menu initialization */
  defaultFocusedValue?: IUseMenuProps['defaultFocusedValue'];
  /** Provides a list of acceptable fallback placements */
  fallbackPlacements?: IMenuListProps['fallbackPlacements'];
  /** Sets the focused value in a controlled menu */
  focusedValue?: IUseMenuProps['focusedValue'];
  /** Attaches an arrow that points towards the menu trigger */
  hasArrow?: IMenuListProps['hasArrow'];
  /** Applies compact styling */
  isCompact?: IMenuListProps['isCompact'];
  /** Sets the expansion in a controlled menu */
  isExpanded?: IUseMenuProps['isExpanded'];
  /** Sets the `max-height` of the menu */
  maxHeight?: IListboxProps['maxHeight'];
  /** Sets the `min-height` of the menu */
  minHeight?: IListboxProps['minHeight'];
  /**
   * Handles menu state changes
   *
   * @param {string} changes.type The event type that triggered the change
   * @param {boolean} [changes.isExpanded] The updated menu expansion
   * @param {ISelectedItem[]} [changes.selectedItems] The updated selection values
   * @param {string | null} [changes.focusedValue] The updated focused value
   */
  onChange?: IUseMenuProps['onChange'];
  /** Returns keyboard focus to the element that triggered the menu */
  restoreFocus?: IUseMenuProps['restoreFocus'];
  /** Sets the selected items in a controlled menu */
  selectedItems?: IUseMenuProps['selectedItems'];
  /** Adjusts the placement of the menu */
  placement?: DropdownGardenPlacement;
  /** Sets the `z-index` of the menu */
  zIndex?: IListboxProps['zIndex'];
}
export interface IItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'value'> {
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Indicates that the item is not interactive */
  isDisabled?: boolean;
  /** Opens the `href` externally */
  isExternal?: boolean;
  /** Determines the initial selection state for the item */
  isSelected?: boolean;
  /** Provides the text label of the item (defaults to `value`) */
  label?: string;
  /** Sets the item as an anchor */
  href?: string;
  /** Associates the item in a radio item group */
  name?: string;
  /** Determines the item type */
  type?: OptionType;
  /** Sets the unique value that is returned upon selection */
  value: string;
}
export interface IItemGroupProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'content'> {
  /** Renders content for the item group (defaults to `legend` text) */
  content?: ReactNode;
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Sets the text label of the item group */
  legend?: string;
  /** Configures the selection type for items within the group */
  type?: ISelectedItem['type'];
}
//#endregion

//#region form
export const VALIDATION = ['success', 'warning', 'error'] as const;
export const FILE_VALIDATION = ['success', 'error'] as const;
export const FILE_TYPE = [
  'pdf',
  'zip',
  'image',
  'document',
  'spreadsheet',
  'presentation',
  'generic'
] as const;
export type Validation = (typeof VALIDATION)[number];
export type FileValidation = (typeof FILE_VALIDATION)[number];
export type FileType = (typeof FILE_TYPE)[number];
export interface IFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** Applies compact styling */
  isCompact?: boolean;
}
export interface IInputGroupProps
  extends Pick<IFieldsetProps, 'isCompact'>, HTMLAttributes<HTMLDivElement> {
  /** Applies unified styling so the group is bordered/focused as a single field */
  isUnified?: boolean;
  /** Insets the container's own `isUnified` focus ring, e.g. when nested inside another group */
  focusInset?: boolean;
}
export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Applies regular (non-bold) font weight */
  isRegular?: boolean;
  /** Hides the label visually without hiding it from screen readers */
  hidden?: LabelHTMLAttributes<HTMLLabelElement>['hidden'];
}
export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies validation state styling */
  validation?: Validation;
  /** Defines the aria-label for the validation icon */
  validationLabel?: string;
}
export interface IMessageIconProps {
  /** Applies validation state styling */
  validation?: Validation;
}
export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Applies compact styling */
  isCompact?: IFieldsetProps['isCompact'];
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IToggleProps extends IRadioProps {}
export interface ICheckboxProps extends IRadioProps {
  /**
   * Sets the checkbox state to
   * [indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)
   */
  indeterminate?: boolean;
}
export interface IInputProps extends IRadioProps {
  /** Removes borders and padding */
  isBare?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Applies validation state styling */
  validation?: Validation;
}
export interface IClearableInputProps extends Omit<IInputProps, 'value' | 'defaultValue'> {
  /** Sets the input's value */
  value?: string;
  /** Sets the input's default value */
  defaultValue?: string;
  /** Defines the clear button's `aria-label` */
  clearButtonLabel?: string;
  /** Applies props to the wrapping InputGroup element */
  wrapperProps?: Omit<IInputGroupProps, 'children' | 'isUnified' | 'isCompact'>;
  /** Applies a ref to the wrapping InputGroup element */
  wrapperRef?: Ref<HTMLDivElement>;
  /** Applies props to the clear IconButton element */
  buttonProps?: IIconButtonProps;
}
export interface IMediaInputProps extends IInputProps {
  /** Accepts a "start" icon to display */
  start?: ReactElement;
  /** Accepts an "end" icon to display */
  end?: ReactElement;
  /** Applies props to the wrapping FauxInput element */
  wrapperProps?: any;
  /** Applies a ref to the wrapping FauxInput element */
  wrapperRef?: any;
}
export interface IFauxInputProps
  extends
    Pick<IInputProps, 'isCompact' | 'isBare' | 'focusInset' | 'validation'>,
    HTMLAttributes<HTMLDivElement> {
  /** Indicates that the element is not interactive */
  disabled?: IInputProps['disabled'];
  /** Applies read-only styling */
  readOnly?: IInputProps['readOnly'];
  /** Applies focus stying */
  isFocused?: boolean;
  /** Applies hover stying */
  isHovered?: boolean;
  /** @ignore Internal use only */
  mediaLayout?: boolean;
}
export interface IFauxInputIconProps
  extends Pick<IFauxInputProps, 'isHovered' | 'isFocused'>, SVGAttributes<SVGElement> {
  /** Applies disabled styling */
  isDisabled?: IFauxInputProps['disabled'];
  /** Rotates icon 180 degrees */
  isRotated?: boolean;
}
export interface ITextareaProps
  extends
    Pick<IInputProps, 'isCompact' | 'isBare' | 'focusInset' | 'validation'>,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Enables manual vertical resize */
  isResizable?: boolean;
  /** Defines the minimum height in rows */
  minRows?: number;
  /** Defines the maximum height in rows */
  maxRows?: number;
}
export interface ISelectProps
  extends
    Pick<IInputProps, 'isCompact' | 'isBare' | 'focusInset' | 'validation'>,
    SelectHTMLAttributes<HTMLSelectElement> {}
export interface IFileUploadProps
  extends Pick<IInputProps, 'disabled' | 'isCompact'>, HTMLAttributes<HTMLDivElement> {
  /** Indicates that the element is not interactive */
  disabled?: IInputProps['disabled'];
  /** Applies drag styling */
  isDragging?: boolean;
}
export interface IFileProps
  extends Pick<IInputProps, 'isCompact' | 'focusInset'>, HTMLAttributes<HTMLDivElement> {
  /** Determines the icon to display */
  type?: FileType;
  /** Applies validation state styling */
  validation?: FileValidation;
}
export interface IRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  /** @ignore */
  hasLowerTrack?: boolean;
}
export interface ITilesProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the selected value in a controlled tiles component */
  value?: IRadioProps['value'];
  /** Handles selection change event */
  onChange?: IRadioProps['onChange'];
  /** Sets the name used to reference the value of the control */
  name: NonNullable<IRadioProps['name']>;
  /** Centers tile content */
  isCentered?: boolean;
}
export interface ITilesTileProps extends HTMLAttributes<HTMLLabelElement> {
  /** Sets the value of the tile */
  value?: IRadioProps['value'];
  /** Indicates that the element is not interactive */
  disabled?: IRadioProps['disabled'];
}
//#endregion

//#region grid
export const ALIGN_ITEMS = ['start', 'end', 'center', 'baseline', 'stretch'] as const;
export const ALIGN_SELF = ['auto', ...ALIGN_ITEMS] as const;
export const DIRECTION = ['row', 'row-reverse', 'column', 'column-reverse'] as const;
export const JUSTIFY_CONTENT = ['start', 'end', 'center', 'between', 'around'] as const;
export const TEXT_ALIGN = ['start', 'end', 'center', 'justify'] as const;
export const SPACE = [false, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export const WRAP = ['nowrap', 'wrap', 'wrap-reverse'] as const;
export const GRID_PLACEMENT = ['end', 'start', 'center'] as const;
export type AlignItems = (typeof ALIGN_ITEMS)[number];
export type AlignSelf = (typeof ALIGN_SELF)[number];
export type Direction = (typeof DIRECTION)[number];
export type JustifyContent = (typeof JUSTIFY_CONTENT)[number];
export type TextAlign = (typeof TEXT_ALIGN)[number];
export type GridNumber = number | string;
export type Breakpoint = number | string | boolean;
export type Space = (typeof SPACE)[number];
export type Wrap = (typeof WRAP)[number];
export interface IColProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the total number of grid `columns` that the column spans on all screen sizes */
  size?: number | string;
  /** Defines the column size on extra-small screens.
   *  See [breakpoints](/components/theme-object#default_theme).
   */
  xs?: number | string | boolean;
  /** Defines the column size on small screens*/
  sm?: number | string | boolean;
  /** Defines the column size on medium screens */
  md?: number | string | boolean;
  /** Defines the column size on large screens */
  lg?: number | string | boolean;
  /** Defines the column size on extra-large screens */
  xl?: number | string | boolean;
  /**
   * Applies the `align-self` flex item property, overriding `Row alignItems`
   * vertical alignment on all screen sizes
   */
  alignSelf?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on extra-small screens */
  alignSelfXs?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on small screens */
  alignSelfSm?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on medium screens */
  alignSelfMd?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on large screens */
  alignSelfLg?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on extra-large screens */
  alignSelfXl?: AlignSelf;
  /**
   * Applies the RTL-aware `text-align` property to the column on all screen sizes
   */
  textAlign?: TextAlign;
  /** Applies the `text-align` property to the column on extra-small screens */
  textAlignXs?: TextAlign;
  /** Applies the `text-align` property to the column on small screens */
  textAlignSm?: TextAlign;
  /** Applies the `text-align` property to the column on medium screens */
  textAlignMd?: TextAlign;
  /** Applies the `text-align` property to the column on large screens */
  textAlignLg?: TextAlign;
  /** Applies the `text-align` property to the column on extra-large screens */
  textAlignXl?: TextAlign;
  /**
   * Offsets the column relative to the total number of `columns` in the
   * grid on all screen sizes
   */
  offset?: number | string;
  /** Applies offset to the column on extra-small screens */
  offsetXs?: number | string;
  /** Applies offset to the column on small screens */
  offsetSm?: number | string;
  /** Applies offset to the column on medium screens */
  offsetMd?: number | string;
  /** Applies offset to the column on large screens */
  offsetLg?: number | string;
  /** Applies offset to the column on extra-large screens */
  offsetXl?: number | string;
  /**
   * Applies the `order` flex item property to the column on all screen sizes. Note that
   * order modification can introduce accessibility problems by
   * confusing tab ordering. Rely on semantic DOM ordering whenever possible.
   */
  order?: number | string;
  /** Sets the `order` flex item property of the column on extra-small screens */
  orderXs?: number | string;
  /** Sets the `order` flex item property of the column on small screens */
  orderSm?: number | string;
  /** Sets the `order` flex item property of the column on medium screens */
  orderMd?: number | string;
  /** Sets the `order` flex item property of the column on large screens */
  orderLg?: number | string;
  /** Sets the `order` flex item property of the column on extra-large screens */
  orderXl?: number | string;
}
export interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Defines the number of individual columns that the grid contains */
  columns?: number | string;
  /** Specifies the grid column gutter width. The value `false` collapses the gutters */
  gutters?: Space;
  /** Highlights the columns for layout debugging */
  debug?: boolean;
}
export interface IGridRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies the `align-items` flex container property to the row.
   * This affects vertical `Col` alignment on all screen sizes.
   */
  alignItems?: AlignItems;
  /** Applies the `align-items` flex container property to the row on extra-small screens */
  alignItemsXs?: AlignItems;
  /** Applies the `align-items` flex container property to the row on small screens */
  alignItemsSm?: AlignItems;
  /** Applies the `align-items` flex container property to the row on medium screens */
  alignItemsMd?: AlignItems;
  /** Applies the `align-items` flex container property to the row on large screens */
  alignItemsLg?: AlignItems;
  /** Applies the `align-items` flex container property to the row on extra-large screens */
  alignItemsXl?: AlignItems;
  /**
   * Applies the `justify-content` flex container property to the row.
   * This affects horizontal `Col` alignment on all screen sizes.
   */
  justifyContent?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on extra-small screens */
  justifyContentXs?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on small screens */
  justifyContentSm?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on medium screens */
  justifyContentMd?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on large screens */
  justifyContentLg?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on extra-large screens */
  justifyContentXl?: JustifyContent;
  /**
   * Applies the `flex-wrap` container property to the row. This affects `Col` wrapping on
   * all screen sizes.
   */
  wrap?: Wrap;
  /** Applies the `flex-wrap` container property to the row on extra-small screens */
  wrapXs?: Wrap;
  /** Applies the `flex-wrap` container property to the row on small screens */
  wrapSm?: Wrap;
  /** Applies the `flex-wrap` container property to the row on medium screens */
  wrapMd?: Wrap;
  /** Applies the `flex-wrap` container property to the row on large screens */
  wrapLg?: Wrap;
  /** Applies the `flex-wrap` container property to the row on extra-large screens */
  wrapXl?: Wrap;
}
export const ORIENTATION = ['top', 'bottom', 'start', 'end'] as const;
export type Orientation = (typeof ORIENTATION)[number];
export interface IPaneProviderProps {
  /** Identifies the pane provider */
  id?: string;
  /** Provides the total width, in `px` units, of all panes in the layout */
  totalPanesWidth: number;
  /** Provides the total height, in `px` units, of all panes in the layout */
  totalPanesHeight: number;
  /** Defines default row values, in `fr` units, for an uncontrolled layout. The values are keyed by splitter. */
  defaultRowValues?: Record<string, number>;
  /** Defines default column values, in `fr` units, for an uncontrolled layout. The values are keyed by splitter. */
  defaultColumnValues?: Record<string, number>;
  /** Defines row values, in `fr` units, for a controlled layout. The values are keyed by splitter. */
  rowValues?: Record<string, number>;
  /** Defines column values, in `fr` units, for a controlled layout. The values are keyed by splitter. */
  columnValues?: Record<string, number>;
  /**
   * Handles splitter position changes
   *
   * @param rowValues The updated row values
   * @param columnValues The updated column values
   */
  onChange?: (rowValues: Record<string, number>, columnValues: Record<string, number>) => void;
  /**
   * Surfaces render props for applying splitter state to the supporting layout
   *
   * @param id Provides the `id` prop, if specified; otherwise, a generated ID.
   * @param getColumnValue Gets column value by key
   * @param getRowValue Gets row value by key
   * @param getGridTemplateRows Gets grid template rows track
   * @param getGridTemplateColumns Gets grid template columns track
   */
  children?: ({
    id,
    getColumnValue,
    getRowValue,
    getGridTemplateRows,
    getGridTemplateColumns
  }: {
    id: string;
    getColumnValue: (splitterKey: string, isPixels?: boolean) => number;
    getRowValue: (splitterKey: string, isPixels?: boolean) => number;
    getGridTemplateRows: (isPixels?: boolean) => string;
    getGridTemplateColumns: (isPixels?: boolean) => string;
  }) => ReactNode;
}
export interface ISplitterProps extends HTMLAttributes<HTMLDivElement> {
  /** Identifies the associated `PaneProvider`. Assumes the closest parent provider, by default. */
  providerId?: string;
  /** Specifies the splitter key */
  layoutKey: string;
  /** Sets a minimum, in `fr` units, for splitter position */
  min: number;
  /** Sets a maximum, in `fr` units, for splitter position */
  max: number;
  /** Determines splitter orientation within a pane */
  orientation?: Orientation;
  /** Determines if the splitter only toggles between `min` and `max` */
  isFixed?: boolean;
}
export interface ISplitterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Adjusts the placement of the splitter button. Assumes start when vertical and center when horizontal, by default. */
  placement?: (typeof GRID_PLACEMENT)[number];
  /** Renders the provided label text inside a tooltip */
  label: string;
}
//#endregion

//#region loader
export const LOADER_SIZE = ['small', 'medium', 'large'] as const;
export type LoaderSize = (typeof LOADER_SIZE)[number];
export interface IDotsProps extends SVGAttributes<SVGSVGElement> {
  /** Sets the height and width in pixels. Inherits the parent's font size by default. */
  size?: string | number;
  /**
   * Sets the fill color. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e. `foreground.primary`)
   * to render based on light/dark mode, or any hex value. Inherits the parent's
   * `color` by default.
   */
  color?: string;
  /** Sets the length of the animation cycle in milliseconds **/
  duration?: number;
  /** Delays displaying the loader to prevent a render flash during normal loading times **/
  delayMS?: number;
}
export interface IInlineProps extends SVGAttributes<SVGSVGElement> {
  /** Sets the width in pixels and scales the loader proportionally */
  size?: number;
  /**
   * Sets the fill color. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e. `foreground.primary`)
   * to render based on light/dark mode, or any hex value. Inherits the parent's
   * `color` by default.
   */
  color?: string;
}
export interface IProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the progress as a value between 0 and 100 */
  value?: number;
  /**
   * Sets the foreground bar's fill color. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e.
   * `border.primaryEmphasis`) to render based on light/dark mode, or any hex
   * value.  Defaults to the `border.successEmphasis`
   * [theme](/components/theme-object#variables) value.
   */
  color?: string;
  /** Adjusts the height */
  size?: LoaderSize;
}
export interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the width as a percentage of the parent element's width */
  width?: string;
  /** Sets the height as a percentage of parent element's height if the height is not already inherited by `line-height` */
  height?: string;
  /** Inverts the color for use on dark backgrounds */
  isLight?: boolean;
}
export interface ISpinnerProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Sets the height and width in pixels. Inherits the parent's font size by default.
   **/
  size?: string;
  /**
   * Sets the length of the animation cycle in milliseconds
   **/
  duration?: number;
  /**
   * Sets the fill color. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e. `foreground.primary`)
   * to render based on light/dark mode, or any hex value. Inherits the parent's
   * `color` by default.
   */
  color?: string;
  /**
   * Delays displaying the loader to prevent a render flash during normal loading times
   **/
  delayMS?: number;
}
//#endregion

//#region modal
export const MODAL_PLACEMENT = ['auto', ...PLACEMENT_BASE] as const;
export type ModalPlacement = (typeof MODAL_PLACEMENT)[number];
export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Passes HTML attributes to the backdrop element
   */
  backdropProps?: HTMLAttributes<HTMLDivElement>;
  /**
   * Handles close actions. Can be triggered from the backdrop and from the close icon.
   *
   * @param {Object} event The DOM event that triggered the close action
   */
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  /**
   * Centers the modal on the backdrop
   */
  isCentered?: boolean;
  /**
   * Animates the modal
   */
  isAnimated?: boolean;
  /**
   * Defines the DOM element that the modal will attatch to
   */
  appendToNode?: Element;
  /**
   * Applies large styling
   */
  isLarge?: boolean;
  /**
   * Directs keyboard focus to the modal on mount
   */
  focusOnMount?: boolean;
  /**
   * Returns keyboard focus to the element that triggered the modal
   */
  restoreFocus?: boolean;
}
export interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies danger styling
   */
  isDanger?: boolean;
  /**
   * Updates the element's HTML tag
   */
  tag?: any;
}
export interface IDrawerProps extends Omit<IModalProps, 'isAnimated' | 'isCentered' | 'isLarge'> {
  /**
   * Opens the modal
   */
  isOpen?: boolean;
}
export interface IDrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Updates the element's HTML tag
   */
  tag?: any;
}
export interface ITooltipDialogProps extends Omit<IModalProps, 'isCentered' | 'isLarge'> {
  /**
   * Provides a list of acceptable fallback placements
   */
  fallbackPlacements?: Exclude<ModalPlacement, 'auto'>[];
  /**
   * Adds an arrow to the tooltop
   */
  hasArrow?: boolean;
  /**
   * Keeps the tooltip content mounted in the DOM when closed, rather than unmounting it
   */
  keepMounted?: boolean;
  /** @ignore Modifies the placement offset from the reference element (internal only) */
  offset?: number;
  /**
   * Adjusts the placement of the tooltip
   **/
  placement?: ModalPlacement;
  /**
   * Positions the modal relative to the provided `HTMLElement`
   */
  referenceElement?: HTMLElement | null;
  /**
   * Sets the `z-index` of the tooltip
   */
  zIndex?: number;
}
export interface ITooltipDialogTitleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Updates the element's HTML tag
   */
  tag?: any;
}
//#endregion

//#region notification
export const NOTIFICATION_PLACEMENT = [
  'top-start',
  'top',
  'top-end',
  'bottom-start',
  'bottom',
  'bottom-end'
] as const;
export const NOTIFICATION_TYPE = ['success', 'warning', 'error', 'info'] as const;
export type NotificationPlacement = (typeof NOTIFICATION_PLACEMENT)[number];
export type Type = (typeof NOTIFICATION_TYPE)[number];
export interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies alert type styles */
  type: Type;
}
export interface INotificationProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies notification type styles */
  type?: Type;
}
export interface IWellProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies a background color */
  isRecessed?: boolean;
  /** Applies a drop shadow */
  isFloating?: boolean;
}
export interface ITitleProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies regular (non-bold) font weight */
  isRegular?: boolean;
}
export interface IToastProviderProps {
  /**
   * Limits the number of visible toasts
   */
  limit?: number;
  /**
   * Passes placement-based customization props to the toast's parent element
   */
  placementProps?: Partial<Record<NotificationPlacement, HTMLAttributes<HTMLDivElement>>>;
  /**
   * Sets the `z-index` of the toast
   */
  zIndex?: number;
}
export interface IGlobalAlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies global alert type styles
   */
  type: Type;
}
export interface IGlobalAlertButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, Pick<IButtonProps, 'isBasic'> {}
export interface IGlobalAlertTitleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies regular (non-bold) font weight
   */
  isRegular?: boolean;
}
export interface IToastOptions {
  /** Sets the toast ID, otherwise the ID is generated */
  id?: string;
  /** Determines whether to automatically dismiss the toast. Can be expressed in milliseconds. */
  autoDismiss: boolean | number;
  /** Adjusts the placement of the toast content */
  placement: NotificationPlacement;
}
export type Content = ({ close }: { close: () => void }) => ReactElement;
export interface IToast {
  id: string;
  content: Content;
  options: IToastOptions;
}
//#endregion

//#region sheet
export const SHEET_PLACEMENT = ['end', 'start'] as const;
export interface ISheetProps extends HTMLAttributes<HTMLElement> {
  /** Identifies the sheet */
  id?: string;
  /** Opens the sheet */
  isOpen?: boolean;
  /** Determines whether animation for opening and closing the sheet is used */
  isAnimated?: boolean;
  /** Directs keyboard focus to the sheet on mount */
  focusOnMount?: boolean;
  /** Returns keyboard focus to the element that triggered the sheet */
  restoreFocus?: boolean;
  /** Adjusts the placement of the sheet */
  placement?: (typeof SHEET_PLACEMENT)[number];
  /** Sets the size of the open sheet */
  size?: string;
}
export interface ISheetFooterProps extends HTMLAttributes<HTMLElement> {
  /** Applies compact styling and centers the elements */
  isCompact?: boolean;
}
//#endregion

//#region skipnav
export interface ISkipNavProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Sets the ID of the element to navigate to */
  targetId: string;
  /** Sets the `z-index` of the element */
  zIndex?: number;
}
//#endregion

//#region table
export const TABLE_SIZE = ['small', 'medium', 'large'] as const;
export const SORT = ['asc', 'desc'];
export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Sets the table size */
  size?: (typeof TABLE_SIZE)[number];
  /** Removes interactive styling from table rows */
  isReadOnly?: boolean;
}
export interface IHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  /** Applies sticky header styling */
  isSticky?: boolean;
}
export interface ITableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Applies striped styling */
  isStriped?: boolean;
  /** Applies selected styling */
  isSelected?: boolean;
  /** @ignore Applies focus styling */
  isFocused?: boolean;
  /** @ignore Applies hover styling */
  isHovered?: boolean;
}
export interface ICellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Applies minimum fixed width styling (e.g. for cells that contain
   * checkboxes or icons)
   */
  isMinimum?: boolean;
  /** Truncates long text with an ellipsis */
  isTruncated?: boolean;
  /** Applies styling for a cell that contains an overflow menu */
  hasOverflow?: boolean;
  /** Adjusts the [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) of the cell */
  width?: TdHTMLAttributes<HTMLTableCellElement>['width'];
}
export interface IHeaderCellProps
  extends
    Pick<ICellProps, 'isMinimum' | 'isTruncated' | 'hasOverflow' | 'width'>,
    ThHTMLAttributes<HTMLTableCellElement> {}
export interface ISortableCellProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Sets the sort order */
  sort?: (typeof SORT)[number];
  /** Sets the width of the cell */
  width?: ICellProps['width'];
  /** Passes props to the cell */
  cellProps?: any;
}
//#endregion

//#region tag
export const TAG_SIZE = ['small', 'medium', 'large'] as const;
export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  /** Adjusts font size and padding */
  size?: (typeof TAG_SIZE)[number];
  /**
   * Sets the color of the tag. Three kinds of values are supported:
   *
   * 1. **Palette hue** – any hue from the theme
   * [PALETTE](/components/palette#palette): `grey`, `blue`, `red`, `yellow`,
   * `green`, `purple`, `fuschia`, `pink`, `crimson`, `orange`, `lemon`, `lime`,
   * `mint`, `teal`, `azure`, `royal` or `kale`.
   * 2. **Tokenized hue** – `primaryHue`, `successHue`, `neutralHue`,
   * `chromeHue`, `dangerHue` or `warningHue`. Resolves to a different color in
   * light and dark mode. Refer to theming
   * [colors](/components/theme-object#colors).
   * 3. **Hex value** – any valid hex color string.
   */
  hue?: string;
  /**
   * Applies the high-contrast emphasis treatment. When `false`, the tag uses
   * the default subtle treatment. The `hue` prop selects the color for either
   * treatment; omit it for the neutral grey default.
   */
  isEmphasis?: boolean;
  /**
   * Renders the tag as a pill by default. Pass `isPill={false}` for a square
   * tag, for example for tokenized values in filters. `isRound` takes
   * precedence when set.
   */
  isPill?: boolean;
  /** Applies styles to round the tag */
  isRound?: boolean;
  /** Applies regular (non-bold) font weight */
  isRegular?: boolean;
}
//#endregion

//#region typography
export const HUE = ['grey', 'red', 'green', 'yellow'] as const;
export const SIZE = ['small', 'medium', 'large'] as const;
export const INHERIT_SIZE = ['inherit', ...SIZE] as const;
export const TYPE_ORDERED_LIST = [
  'decimal',
  'decimal-leading-zero',
  'lower-alpha',
  'lower-roman',
  'upper-alpha',
  'upper-roman'
] as const;
export const TYPE_UNORDERED_LIST = ['circle', 'disc', 'square'] as const;
/* until https://github.com/FormidableLabs/prism-react-renderer/pull/127 is available */
export const LANGUAGES = [
  'bash',
  'css',
  'diff',
  'graphql',
  'javascript',
  'json',
  'jsx',
  'markdown',
  'markup',
  'python',
  'typescript',
  'tsx',
  'yaml'
] as const;
export type Diff = 'hunk' | 'add' | 'delete' | 'change';
export type Size = (typeof SIZE)[number];
export interface ITypescaleProps extends HTMLAttributes<HTMLDivElement> {
  /** Updates the element's HTML tag */
  tag?: any;
  /** Applies bold font style */
  isBold?: boolean;
}
export interface ITypescaleMonospaceProps extends ITypescaleProps {
  /** Renders with monospace font */
  isMonospace?: boolean;
}
export interface IBlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  /** Controls the spacing between sibling blockquotes and paragraphs */
  size?: Size;
}
export interface ICodeProps extends HTMLAttributes<HTMLElement> {
  /** Applies color to the background and the text */
  hue?: (typeof HUE)[number];
  /** Adjusts the font size. By default font size is inherited from the surrounding text. */
  size?: (typeof INHERIT_SIZE)[number];
}
export interface ICodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  /** Selects the language used by the [Prism](https://prismjs.com/) tokenizer */
  language?: (typeof LANGUAGES)[number];
  /** Specifies the font size */
  size?: Size;
  /** Applies light mode styling */
  isLight?: boolean;
  /** Displays line numbers */
  isNumbered?: boolean;
  /** Determines the lines to highlight */
  highlightLines?: number[];
  /** Passes props to the code block container */
  containerProps?: HTMLAttributes<HTMLDivElement>;
}
export interface IEllipsisProps extends HTMLAttributes<HTMLDivElement> {
  /** Overrides the auto-generated `title` attribute */
  title?: string;
  /** Updates the element's HTML tag */
  tag?: any;
}
export interface IKbdProps extends HTMLAttributes<HTMLElement> {
  /** Adjusts the font size. By default font size is inherited from the surrounding text. */
  size?: (typeof INHERIT_SIZE)[number];
}
export interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Controls the spacing between sibling paragraphs */
  size?: Size;
}
export interface IOrderedListProps extends Omit<OlHTMLAttributes<HTMLOListElement>, 'type'> {
  /** Adjusts the vertical spacing between list items */
  size?: Size;
  /** Sets the marker style */
  type?: (typeof TYPE_ORDERED_LIST)[number];
}
export interface IUnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  /** Adjusts the vertical spacing between list items */
  size?: Size;
  /** Sets the marker style */
  type?: (typeof TYPE_UNORDERED_LIST)[number];
}
export interface ISpanProps extends HTMLAttributes<HTMLSpanElement> {
  /** Updates the element's HTML tag */
  tag?: any;
  /** Applies bold font style. Font weight is inherited by default. */
  isBold?: boolean;
  /** Renders with monospace font */
  isMonospace?: boolean;
  /**
   * Applies a font color. Use a [color
   * variable](/components/theme-object#colors) key (i.e. `foreground.subtle`)
   * or [PALETTE](/components/palette#palette) colors when possible. Accepts all
   * hex values.
   */
  hue?: string;
  /** Hides the span visually without hiding it from screen readers */
  hidden?: HTMLAttributes<HTMLSpanElement>['hidden'];
}
//#endregion

//#region pagination
export const PAGE_TYPE = ['next', 'page', 'gap', 'previous'] as const;
export type PageType = (typeof PAGE_TYPE)[number];
export interface IPaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Sets the current page. Pages start at 1
   */
  currentPage: number;
  /**
   * Defines the total number of pages
   */
  totalPages: number;
  /**
   * Sets the number of pages that appear between the current page and a gap indicator
   */
  pagePadding?: number;
  /**
   * Positions the leading and trailing gap indicator, based on
   * the current and total pages
   */
  pageGap?: number;
  /**
   * Handles page change events
   *
   * @param {number} currentPage The current page
   */
  onChange?: (currentPage: number) => void;
  /**
   * Provides localized labels to pagination elements
   */
  labels?: Record<Exclude<PageType, 'page'>, string> & { renderPage: (p: number) => string };
}
//#endregion

//#region tab
export interface ITabProps extends HTMLAttributes<HTMLDivElement> {
  /** Indicates that the element is not interactive */
  disabled?: boolean;
  /** Defines a unique value to identify the tab. Provided to the `onChange` event in the [Tabs](#tabs) component. */
  item?: any;
}
export interface ITabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Defines a value used to match a tab panel with its associated tab
   */
  item?: any;
}
export interface ITabsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Arranges the tabs vertically
   */
  isVertical?: boolean;
  /**
   * Specifies the currently selected tab
   */
  selectedItem?: any;
  /**
   * Handles tab selection
   *
   * @param {String} selectedItem The selected tab's `item` value
   */
  onChange?: (selectedItem: any) => void;
}
//#endregion

//#region tooltip
export const TOOLTIP_PLACEMENT = ['auto', ...PLACEMENT_BASE] as const;
export const TOOLTIP_SIZE = ['small', 'medium', 'large', 'extra-large'] as const;
export const TOOLTIP_TYPE = ['light', 'dark'] as const;
export type TooltipGardenPlacement = (typeof TOOLTIP_PLACEMENT)[number];
export interface ITooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Appends the tooltip to the element provided */
  appendToNode?: Element;
  /** Adds an arrow to the tooltip */
  hasArrow?: boolean;
  /** Adds milliseconds of delay to the opening and closing of the tooltip */
  delayMS?: number;
  /** Defines the content of the tooltip */
  content: ReactNode;
  /** Provides a list of acceptable fallback placements */
  fallbackPlacements?: Exclude<TooltipGardenPlacement, 'auto'>[];
  /** Adjusts the placement of the tooltip */
  placement?: TooltipGardenPlacement;
  /** Adjusts the padding and font size */
  size?: (typeof TOOLTIP_SIZE)[number];
  /** Specifies the tooltip type */
  type?: (typeof TOOLTIP_TYPE)[number];
  /** Sets the `z-index` of the tooltip */
  zIndex?: number | string;
  /**
   * Indicates that the tooltip is used as the trigger's primary label rather
   * than as a supplemental description
   */
  isLabel?: boolean;
  /** Displays the tooltip on initial render */
  isInitialVisible?: boolean;
  /** Displays the tooltip */
  isVisible?: boolean;
  /** @ignore ReactNode override */
  children: ReactElement;
  /** Defines the ref key used to position the tooltip */
  refKey?: string;
}
//#endregion
