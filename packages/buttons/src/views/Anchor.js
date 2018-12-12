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
import ButtonStyles from '@zendeskgarden/css-buttons';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'buttons.anchor';

const StyledAnchor = styled.a.attrs(({ danger, disabled, focused, hovered, active, selected }) => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ButtonStyles['c-btn'], ButtonStyles['c-btn--anchor'], {
    // Danger styling
    [ButtonStyles['c-btn--danger']]: danger,

    // States
    [ButtonStyles['is-active']]: active,
    [ButtonStyles['is-disabled']]: disabled,
    [ButtonStyles['is-focused']]: focused,
    [ButtonStyles['is-hovered']]: hovered,
    [ButtonStyles['is-selected']]: selected
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all `<a>` props
 */
const Anchor = ({ focused, ...other }) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledAnchor
        {...getFocusProps({
          ...other,
          focused: focused || keyboardFocused
        })}
      />
    )}
  </KeyboardFocusContainer>
);

Anchor.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool
};

/** @component */
export default Anchor;
