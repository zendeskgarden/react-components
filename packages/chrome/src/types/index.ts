/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export const PLACEMENT = ['end', 'start'] as const;

export const PRODUCTS = [
  'chat',
  'connect',
  'explore',
  'guide',
  'message',
  'support',
  'talk'
] as const;

export type Product = (typeof PRODUCTS)[number];

export interface IChromeProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies a custom hue to the chrome navigation */
  hue?: string;
  /** Prevents fixed positioning from being applied to the `<html>` element */
  isFluid?: boolean;
}

export interface ISkipNavProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Sets the ID of the element to navigate to */
  targetId: string;
  /** Sets the `z-index` of the element */
  zIndex?: number;
}

export interface IHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Displays logo for standlone usage  */
  isStandalone?: boolean;
}

export interface IHeaderItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Maximizes the width of a flex item in the header */
  maxX?: boolean;
  /** Maximizes the height of the item (i.e. contains a search input) */
  maxY?: boolean;
  /** Rounds the border radius of the item */
  isRound?: boolean;
  /**
   * Applies a
   * [brand color](/design/color#brand-colors)
   * to the product logo
   */
  product?: Product;
  /** Applies header logo styles to the item */
  hasLogo?: boolean;
}

export interface IHeaderItemTextProps extends HTMLAttributes<HTMLElement> {
  /** Hides item text. Text remains accessible to screen readers. */
  isClipped?: boolean;
}

export interface IHeaderItemWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximizes the width of a flex item in the header */
  maxX?: boolean;
  /** Maximizes the height of the item (i.e. contains a search input) */
  maxY?: boolean;
  /** Rounds the border radius of the item */
  isRound?: boolean;
}

export interface INavProps extends HTMLAttributes<HTMLElement> {
  /** Expands the nav area to display the item text */
  isExpanded?: boolean;
}

export interface INavItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Applies a product-specific color palette */
  product?: Product;
  /** Indicates that the item is current in the nav */
  isCurrent?: boolean;
  /** Indicates that the item contains a product logo */
  hasLogo?: boolean;
  /** Indicates that the item contains the company brandmark */
  hasBrandmark?: boolean;
}

export interface INavItemTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** Wraps overflow item text instead of truncating long strings with an ellipsis */
  isWrapped?: boolean;
}

export interface ISubNavItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Indicates that the item is current in the subnav */
  isCurrent?: boolean;
}

export interface ISubNavItemTextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Wraps overflow item text instead of truncating long strings with an ellipsis.
   * Use when `max-width` styling is applied to the subnav container.
   */
  isWrapped?: boolean;
}

export interface ICollapsibleSubNavItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Sets the item's section header */
  header?: ReactNode;
  /** Reveals the item's section */
  isExpanded?: boolean;
  /**
   * Handles changes in the item's expansion state
   *
   * @param {boolean} isExpanded An item's expansion state
   */
  onChange?: (isExpanded: boolean) => void;
}

export interface ISheetProps extends HTMLAttributes<HTMLElement> {
  /** Opens the sheet */
  isOpen?: boolean;
  /** Determines whether animation for opening and closing the sheet is used */
  isAnimated?: boolean;
  /** Directs keyboard focus to the sheet on mount */
  focusOnMount?: boolean;
  /** Returns keyboard focus to the element that triggered the sheet */
  restoreFocus?: boolean;
  /** Adjusts the placement of the sheet */
  placement?: (typeof PLACEMENT)[number];
  /** Sets the size of the open sheet */
  size?: string;
}

export interface ISheetFooterProps extends HTMLAttributes<HTMLElement> {
  /** Applies compact styling and centers the elements */
  isCompact?: boolean;
}
