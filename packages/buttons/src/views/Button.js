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

import { version } from '../../package.json';
const COMPONENT_ID = 'buttons.button';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

const StyledButton = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ({
    danger,
    size,
    stretched,
    disabled,
    focused,
    hovered,
    active,
    selected,
    pill,
    primary,
    basic,
    muted,
    link
  }) =>
    classNames(ButtonStyles['c-btn'], {
      // Danger styling
      [ButtonStyles['c-btn--danger']]: danger,

      // Styles
      [ButtonStyles['c-btn--primary']]: primary,
      [ButtonStyles['c-btn--basic']]: basic,
      [ButtonStyles['c-btn--muted']]: muted,
      [ButtonStyles['c-btn--pill']]: pill,
      [ButtonStyles['c-btn--anchor']]: link,

      // Sizes
      [ButtonStyles['c-btn--sm']]: size === SIZE.SMALL,
      [ButtonStyles['c-btn--lg']]: size === SIZE.LARGE,
      [ButtonStyles['c-btn--full']]: stretched,

      // States
      [ButtonStyles['is-active']]: active,
      [ButtonStyles['is-disabled']]: disabled,
      [ButtonStyles['is-focused']]: focused,
      [ButtonStyles['is-hovered']]: hovered,
      [ButtonStyles['is-selected']]: selected
    }),
  type: 'button'
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all `<button>` props
 */
const Button = ({ focused, ...other }) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledButton
        {...getFocusProps({
          ...other,
          focused: focused || keyboardFocused
        })}
      />
    )}
  </KeyboardFocusContainer>
);

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
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  selected: PropTypes.bool
};

/** @component */
export default Button;
