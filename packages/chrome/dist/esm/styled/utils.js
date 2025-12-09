/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { PALETTE } from '@zendeskgarden/react-theming';

const getFooterHeight = theme => `${theme.space.base * 20}px`;
const getHeaderHeight = theme => `${theme.space.base * 13}px`;
const getHeaderItemSize = theme => `${theme.space.base * 7.5}px`;
const getNavItemHeight = theme => getHeaderHeight(theme);
const getNavWidth = theme => `${theme.space.base * 15}px`;
const getNavWidthExpanded = () => `200px`;
const getProductColor = function (product) {
  let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'inherit';
  return product ? PALETTE.product[product] || fallback : fallback;
};

export { getFooterHeight, getHeaderHeight, getHeaderItemSize, getNavItemHeight, getNavWidth, getNavWidthExpanded, getProductColor };
