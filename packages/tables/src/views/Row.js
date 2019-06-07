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

const COMPONENT_ID = 'tables.row';

export const StyledRow = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  tabIndex: -1,
  role: 'row',
  className: classNames(TableStyles['c-table__row'], {
    [TableStyles['c-table__row--stripe']]: props.striped,

    [TableStyles['is-focused']]: props.focused,
    [TableStyles['is-hovered']]: props.hovered,
    [TableStyles['is-selected']]: props.selected
  })
}))`
  /* stylelint-disable */
  display: flex !important;
  height: auto !important;
  /* stylelint-enable */

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all `<tr>` props
 */
// eslint-disable-next-line react/prop-types
const Row = React.forwardRef(({ onFocus, onBlur, focused, ...otherProps }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledRow
      onFocus={composeEventHandlers(onFocus, () => {
        setIsFocused(true);
      })}
      onBlur={composeEventHandlers(onBlur, () => {
        setIsFocused(false);
      })}
      focused={typeof focused === 'undefined' ? isFocused : focused}
      ref={ref}
      {...otherProps}
    />
  );
});

Row.propTypes = {
  /** Applies striped styling */
  striped: PropTypes.bool,
  /** Applies focused styling */
  focused: PropTypes.bool,
  /** Applies hovered styling */
  hovered: PropTypes.bool,
  /** Applies selected styling */
  selected: PropTypes.bool
};

export default Row;
