/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IUseAccordionProps } from '@zendeskgarden/container-accordion';
import type {
  BlockquoteHTMLAttributes,
  ComponentPropsWithRef,
  HTMLAttributes,
  OlHTMLAttributes,
  ReactElement,
  ReactNode,
  SVGAttributes
} from 'react';

import { PLACEMENT as PLACEMENT_BASE, PLACEMENT as BASE_PLACEMENT } from '../theming/types';

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

export interface IAccordionProps<SectionValue = any> extends Omit<
  ComponentPropsWithRef<'div'>,
  'onChange'
> {
  /** Sets `aria-level` heading rank in the document structure */
  level: NonNullable<HTMLAttributes<HTMLDivElement>['aria-level']>;
  /** Sets the expanded sections in a controlled accordion */
  expandedSections?: SectionValue[];
  /** Sets the default expanded sections in an uncontrolled accordion */
  defaultExpandedSections?: SectionValue[];
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
  onChange?: IUseAccordionProps<SectionValue>['onChange'];
}
