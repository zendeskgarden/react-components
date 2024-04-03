/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export type COLLAPSIBLE_SUB_NAV_ITEM = string;

export interface IFooterItem {
  text: string;
  type?: 'basic' | 'primary';
}

export interface IHeaderItem {
  text: string;
  hasIcon: boolean;
  isRound?: boolean;
  isClipped?: boolean;
  maxX?: boolean;
  maxY?: boolean;
  isWrapper?: boolean;
}

export interface INavItem {
  text: string;
  hasSubNav?: boolean;
}

export interface ISubNavItem {
  text: string;
  items?: COLLAPSIBLE_SUB_NAV_ITEM[];
}
