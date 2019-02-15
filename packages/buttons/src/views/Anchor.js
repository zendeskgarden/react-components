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
import { retrieveTheme, withTheme, isRtl } from '@zendeskgarden/react-theming';
import NewWindowIcon from '@zendeskgarden/svg-icons/src/12/new-window-stroke.svg';

const COMPONENT_ID = 'buttons.anchor';

const StyledAnchor = styled.a.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
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

const StyledNewWindowIcon = styled(NewWindowIcon)`
  margin-bottom: -0.075em;
  width: 0.75em;
  height: 0.75em;

  ${props => (isRtl(props) ? `padding-right: 0.25em;` : `padding-left: 0.25em;`)}
`;

/**
 * Accepts all `<a>` props
 */
const Anchor = props => {
  // eslint-disable-next-line
  const { focused, external, children, theme, ...other } = props;
  const rtl = isRtl(props);

  return (
    <KeyboardFocusContainer>
      {({ getFocusProps, keyboardFocused }) => (
        <StyledAnchor
          {...getFocusProps({
            ...other,
            focused: focused || keyboardFocused
          })}
        >
          {rtl && external && <StyledNewWindowIcon />}
          {children}
          {!rtl && external && <StyledNewWindowIcon />}
        </StyledAnchor>
      )}
    </KeyboardFocusContainer>
  );
};

Anchor.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  /* Used when the anchor navigates to an external resource */
  external: PropTypes.bool,
  children: PropTypes.node
};

/** @component */
export default withTheme(Anchor);
