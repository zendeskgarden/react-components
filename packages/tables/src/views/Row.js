/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { composeEventHandlers } from '@zendeskgarden/react-selection';

const COMPONENT_ID = 'tables.row';

export const StyledRow = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  tabIndex: -1,
  role: 'row',
  className: props =>
    classNames(TableStyles['c-table__row'], {
      [TableStyles['c-table__row--group']]: props.group,
      [TableStyles['c-table__row--header']]: props.header,
      [TableStyles['c-table__row--stripe']]: props.striped,

      [TableStyles['is-focused']]: props.focused,
      [TableStyles['is-hovered']]: props.hovered,
      [TableStyles['is-selected']]: props.selected
    })
})`
  /* stylelint-disable */
  display: flex !important;
  height: auto !important;
  /* stylelint-enable */

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all `<tr>` props
 */
export default class Row extends Component {
  static propTypes = {
    /** Applies group styling */
    group: PropTypes.bool,
    /** Header group styling */
    header: PropTypes.bool,
    /** Applies striped styling */
    striped: PropTypes.bool,
    /** Applies focused styling */
    focused: PropTypes.bool,
    /** Applies hovered styling */
    hovered: PropTypes.bool,
    /** Applies selected styling */
    selected: PropTypes.bool,
    rowRef: PropTypes.func
  };

  state = {
    focused: false
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { onFocus, onBlur, rowRef, focused: propFocused, ...otherProps } = this.props;
    const { focused } = this.state;

    return (
      <StyledRow
        onFocus={composeEventHandlers(onFocus, () => {
          this.setState({ focused: true });
        })}
        onBlur={composeEventHandlers(onBlur, () => {
          this.setState({ focused: false });
        })}
        focused={typeof propFocused === 'undefined' ? focused : propFocused}
        innerRef={rowRef}
        {...otherProps}
      />
    );
  }
}
