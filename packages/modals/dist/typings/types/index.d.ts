/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { HTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
export declare const PLACEMENT: readonly ["auto", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "end", "end-top", "end-bottom", "start", "start-top", "start-bottom"];
export type Placement = (typeof PLACEMENT)[number];
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
    fallbackPlacements?: Exclude<Placement, 'auto'>[];
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
    placement?: Placement;
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
