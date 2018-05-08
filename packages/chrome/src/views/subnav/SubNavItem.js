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
import { retrieveTheme } from '@zendesk/garden-react-theming';
import { KeyboardFocusContainer } from '@zendesk/garden-react-selection';
import ChromeStyles from '@zendeskgarden/css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.subnav_item';

const StyledSubNavItem = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(ChromeStyles['c-chrome__subnav__item'], {
      // State
      [ChromeStyles['is-current']]: props.current,
      [ChromeStyles['is-hovered']]: props.hovered,
      [ChromeStyles['is-focused']]: props.focused
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all `<button>` props
 */
const SubNavItem = props => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledSubNavItem
        {...getFocusProps({
          focused: keyboardFocused,
          ...props
        })}
      />
    )}
  </KeyboardFocusContainer>
);

SubNavItem.propTypes = {
  /** Indicate which item is current in the nav */
  current: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool
};

/** @component */
export default SubNavItem;
