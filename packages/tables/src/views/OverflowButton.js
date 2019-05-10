/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { composeEventHandlers } from '@zendeskgarden/react-selection';

const COMPONENT_ID = 'tables.overflow_button';

export const StyledOverflowButton = styled.button.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button',
  className: classNames(TableStyles['c-table__row__cell__overflow'], {
    [TableStyles['is-hovered']]: props.hovered,
    [TableStyles['is-active']]: props.active,
    [TableStyles['is-focused']]: props.focused
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all `<button>` props
 */
// eslint-disable-next-line react/prop-types
const OverflowButton = React.forwardRef(({ onFocus, onBlur, ...other }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledOverflowButton
      onFocus={composeEventHandlers(onFocus, () => {
        setIsFocused(true);
      })}
      onBlur={composeEventHandlers(onBlur, () => {
        setIsFocused(false);
      })}
      focused={isFocused}
      ref={ref}
      {...other}
    >
      &nbsp;
    </StyledOverflowButton>
  );
});

OverflowButton.propTypes = {
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  focused: PropTypes.bool
};

export default OverflowButton;
