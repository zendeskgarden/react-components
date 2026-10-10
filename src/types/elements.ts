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
  OlHTMLAttributes
} from 'react';
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
