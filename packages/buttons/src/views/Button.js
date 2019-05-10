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

const COMPONENT_ID = 'buttons.button';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

export const StyledButton = styled.button.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ButtonStyles['c-btn'], {
    // Danger styling
    [ButtonStyles['c-btn--danger']]: !props.disabled && props.danger,

    // Styles
    [ButtonStyles['c-btn--primary']]: props.primary,
    [ButtonStyles['c-btn--basic']]: props.basic,
    [ButtonStyles['c-btn--muted']]: props.muted,
    [ButtonStyles['c-btn--pill']]: props.pill,
    [ButtonStyles['c-btn--anchor']]: props.link,
    [ButtonStyles['c-btn--focus-inset']]: props.focusInset,

    // Sizes
    [ButtonStyles['c-btn--sm']]: props.size === SIZE.SMALL,
    [ButtonStyles['c-btn--lg']]: props.size === SIZE.LARGE,
    [ButtonStyles['c-btn--full']]: props.stretched,

    // States
    [ButtonStyles['is-active']]: props.active,
    [ButtonStyles['is-disabled']]: props.disabled,
    [ButtonStyles['is-focused']]: props.focused,
    [ButtonStyles['is-hovered']]: props.hovered,
    [ButtonStyles['is-selected']]: props.selected
  }),
  type: 'button'
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all `<button>` props
 */
const Button = React.forwardRef(({ focused, ...other }, ref) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledButton
        {...getFocusProps({
          ref,
          ...other,
          focused: focused || keyboardFocused
        })}
      />
    )}
  </KeyboardFocusContainer>
));

Button.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.LARGE]),
  /** Stretch the button to its container width */
  stretched: PropTypes.bool,
  /** Applies primary button styling */
  primary: PropTypes.bool,
  /** Applies basic button styling */
  basic: PropTypes.bool,
  /** Applies muted button styling */
  muted: PropTypes.bool,
  /** Applies link (anchor) button styling */
  link: PropTypes.bool,
  /** Applies pill styling */
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  selected: PropTypes.bool
};

Button.hasType = () => Button;

/** @component */
export default Button;
