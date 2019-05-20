/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';
import ChromeStyles from '@zendeskgarden/css-chrome';

const COMPONENT_ID = 'chrome.header_item';

const PRODUCT = {
  CHAT: 'chat',
  CONNECT: 'connect',
  EXPLORE: 'explore',
  GUIDE: 'guide',
  MESSAGE: 'message',
  SUPPORT: 'support',
  TALK: 'talk'
};

export const StyledHeaderItem = styled.button.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__body__header__item'], {
    // Styling
    [ChromeStyles['c-chrome__body__header__item--max-x']]: props.maxX,
    [ChromeStyles['c-chrome__body__header__item--max-y']]: props.maxY,
    [ChromeStyles['c-chrome__body__header__item--logo']]: props.logo,
    [ChromeStyles['c-chrome__body__header__item--round']]: props.round,

    // Products
    [ChromeStyles['c-chrome__body__header__item--logo--chat']]: props.product === PRODUCT.CHAT,
    [ChromeStyles['c-chrome__body__header__item--logo--connect']]:
      props.product === PRODUCT.CONNECT,
    [ChromeStyles['c-chrome__body__header__item--logo--explore']]:
      props.product === PRODUCT.EXPLORE,
    [ChromeStyles['c-chrome__body__header__item--logo--guide']]: props.product === PRODUCT.GUIDE,
    [ChromeStyles['c-chrome__body__header__item--logo--message']]:
      props.product === PRODUCT.MESSAGE,
    [ChromeStyles['c-chrome__body__header__item--logo--support']]:
      props.product === PRODUCT.SUPPORT,
    [ChromeStyles['c-chrome__body__header__item--logo--talk']]: props.product === PRODUCT.TALK,

    // State
    [ChromeStyles['is-hovered']]: props.hovered,
    [ChromeStyles['is-focused']]: props.focused,
    [ChromeStyles['is-active']]: props.active
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all `<button>` props
 */
const HeaderItem = React.forwardRef(({ focused, ...other }, ref) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledHeaderItem
        {...getFocusProps({
          ...other,
          ref,
          focused: focused || keyboardFocused
        })}
      />
    )}
  </KeyboardFocusContainer>
));

HeaderItem.propTypes = {
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
export default HeaderItem;
