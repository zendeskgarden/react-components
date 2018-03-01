import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { KeyboardFocusContainer } from '@zendesk/garden-react-selection';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import { version } from '../../package.json';
const COMPONENT_ID = 'buttons.anchor';

const StyledAnchor = styled.a.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ({ danger, disabled, focused, hovered, active, selected }) =>
    classNames(ButtonStyles['c-btn'], ButtonStyles['c-btn--anchor'], {
      // Danger styling
      [ButtonStyles['c-btn--danger']]: danger,

      // States
      [ButtonStyles['is-active']]: active,
      [ButtonStyles['is-disabled']]: disabled,
      [ButtonStyles['is-focused']]: focused,
      [ButtonStyles['is-hovered']]: hovered,
      [ButtonStyles['is-selected']]: selected
    })
})`
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
