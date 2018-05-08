/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.header_item_wrapper';

import { StyledHeaderItem } from './HeaderItem';

const PRODUCT = {
  CHAT: 'chat',
  CONNECT: 'connect',
  EXPLORE: 'explore',
  GUIDE: 'guide',
  MESSAGE: 'message',
  SUPPORT: 'support',
  TALK: 'talk'
};

/** Accepts all `<div>` props */
const HeaderItemWrapper = StyledHeaderItem.withComponent('div').extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme('chrome.header_item_wrapper', props)};
`;

HeaderItemWrapper.propTypes = {
  /** Horizontally maximize a flex item in the header to take as much space as possible (i.e. breadcrumb container) */
  maxX: PropTypes.bool,
  /** Vertically maximize the height for a header item (i.e. contains a search input) */
  maxY: PropTypes.bool,
  /** Round the border radius for a header item (i.e. user icon) */
  round: PropTypes.bool,
  /** Applies product-specific color palette */
  product: PropTypes.oneOf([
    PRODUCT.CHAT,
    PRODUCT.CONNECT,
    PRODUCT.EXPLORE,
    PRODUCT.GUIDE,
    PRODUCT.MESSAGE,
    PRODUCT.SUPPORT,
    PRODUCT.TALK
  ]),
  /** Style the product logo shown as the first item in the header */
  logo: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool
};

/** @component */
export default HeaderItemWrapper;
