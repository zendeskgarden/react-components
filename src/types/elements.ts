/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IUseAccordionProps } from '@zendeskgarden/container-accordion';
import type {
  AnchorHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  LiHTMLAttributes,
  OlHTMLAttributes,
  ReactElement,
  ReactNode,
  SVGAttributes
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
