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

const COMPONENT_ID = 'chrome.nav_item';

const PRODUCT = {
  CHAT: 'chat',
  CONNECT: 'connect',
  EXPLORE: 'explore',
  GUIDE: 'guide',
  MESSAGE: 'message',
  SUPPORT: 'support',
  TALK: 'talk'
};

/**
 * Accepts all `<button>` props
 */
export const StyledNavItem = styled.button.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__nav__item'], {
    // Styling
    [ChromeStyles['c-chrome__nav__item--logo']]: props.logo,
    [ChromeStyles['c-chrome__nav__item--brandmark']]: props.brandmark,

    // Products
    [ChromeStyles['c-chrome__nav__item--logo--chat']]: props.product === PRODUCT.CHAT,
    [ChromeStyles['c-chrome__nav__item--logo--connect']]: props.product === PRODUCT.CONNECT,
    [ChromeStyles['c-chrome__nav__item--logo--explore']]: props.product === PRODUCT.EXPLORE,
    [ChromeStyles['c-chrome__nav__item--logo--guide']]: props.product === PRODUCT.GUIDE,
    [ChromeStyles['c-chrome__nav__item--logo--message']]: props.product === PRODUCT.MESSAGE,
    [ChromeStyles['c-chrome__nav__item--logo--support']]: props.product === PRODUCT.SUPPORT,
    [ChromeStyles['c-chrome__nav__item--logo--talk']]: props.product === PRODUCT.TALK,

    // State
    [ChromeStyles['is-current']]: props.current,
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
const NavItem = React.forwardRef(({ logo, brandmark, ...other }, ref) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledNavItem
        {...getFocusProps({
          tabIndex: logo || brandmark ? -1 : 0,
          focused: keyboardFocused,
          logo: logo || brandmark,
          brandmark,
          ref,
          ...other
        })}
      />
    )}
  </KeyboardFocusContainer>
));

NavItem.propTypes = {
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
  /** Style the product logo shown as the top item in the nav */
  logo: PropTypes.bool,
  /** Style a brandmark shown as a bottom item in the nav */
  brandmark: PropTypes.bool,
  /** Indicate which item is current in the nav */
  current: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool
};

/** @component */
export default NavItem;
