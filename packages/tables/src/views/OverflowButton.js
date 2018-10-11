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

const COMPONENT_ID = 'tables.overflow_button';

/**
 * Accepts all `<button>` props
 */
export const StyledOverflowButton = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button',
  className: props =>
    classNames(TableStyles['c-table__row__cell__overflow'], {
      [TableStyles['is-hovered']]: props.hovered,
      [TableStyles['is-active']]: props.active,
      [TableStyles['is-focused']]: props.focused
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

export default class OverflowButton extends Component {
  static propTypes = {
    hovered: PropTypes.bool,
    active: PropTypes.bool,
    focused: PropTypes.bool
  };

  state = {
    focused: false
  };

  render() {
    const { onFocus, onBlur, ...other } = this.props; // eslint-disable-line react/prop-types
    const { focused } = this.state;

    return (
      <StyledOverflowButton
        onFocus={composeEventHandlers(onFocus, () => {
          this.setState({ focused: true });
        })}
        onBlur={composeEventHandlers(onBlur, () => {
          this.setState({ focused: false });
        })}
        focused={focused}
        {...other}
      >
        &nbsp;
      </StyledOverflowButton>
    );
  }
}
