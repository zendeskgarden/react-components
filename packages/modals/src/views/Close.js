/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ModalStyles from '@zendeskgarden/css-modals';
import { composeEventHandlers } from '@zendeskgarden/react-selection';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.close';

const StyledClose = styled.button.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ModalStyles['c-dialog__close'], {
    // State
    [ModalStyles['is-focused']]: props.focused,
    [ModalStyles['is-hovered']]: props.hovered
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Used to close a Modal. Supports all `<button>` props.
 */
export default class Close extends Component {
  static propTypes = {
    focused: PropTypes.bool,
    hovered: PropTypes.bool
  };

  static hasType = () => Close;

  state = {
    isFocused: false
  };

  render() {
    const { onFocus, onBlur, ...other } = this.props; // eslint-disable-line react/prop-types
    const { isFocused } = this.state;

    return (
      <StyledClose
        focused={isFocused}
        onFocus={composeEventHandlers(onFocus, () => this.setState({ isFocused: true }))}
        onBlur={composeEventHandlers(onBlur, () => this.setState({ isFocused: false }))}
        {...other}
      />
    );
  }
}
