/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { BlockquoteHTMLAttributes, HTMLAttributes, OlHTMLAttributes } from 'react';
export declare const HUE: readonly ["grey", "red", "green", "yellow"];
export declare const SIZE: readonly ["small", "medium", "large"];
export declare const INHERIT_SIZE: readonly ["inherit", "small", "medium", "large"];
export declare const TYPE_ORDERED_LIST: readonly ["decimal", "decimal-leading-zero", "lower-alpha", "lower-roman", "upper-alpha", "upper-roman"];
export declare const TYPE_UNORDERED_LIST: readonly ["circle", "disc", "square"];
export declare const LANGUAGES: readonly ["bash", "css", "diff", "graphql", "javascript", "json", "jsx", "markdown", "markup", "python", "typescript", "tsx", "yaml"];
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
