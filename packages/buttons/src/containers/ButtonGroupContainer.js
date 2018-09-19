/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectionContainer,
  ControlledComponent,
  IdManager,
  composeEventHandlers
} from '@zendeskgarden/react-selection';
import closest from 'dom-helpers/query/closest';

export default class ButtonGroupContainer extends ControlledComponent {
  static propTypes = {
    /**
     * The root ID to use for descendants. A unique ID is created if none is provided.
     **/
    id: PropTypes.string,
    /**
     * Unique key of currently focused item
     */
    focusedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Unique key of currently selected item
     */
    selectedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Callback for all state objects. Used when in 'controlled' mode.
     **/
    onStateChange: PropTypes.func,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getGroupProps - Props to be spread onto group element
     * @param {Function} renderProps.getButtonProps - Props to be spread onto each selectable button. `({key})` is required. Use `index` attribute for custom ordering.
     * @param {Any} renderProps.focusedKey - Unique key of currently focused item
     * @param {Any} renderProps.selectedKey - Unique key of currently selected item
     */
    children: PropTypes.func,
    /**
     * Identical to children
     */
    render: PropTypes.func
  };

  constructor(...args) {
    super(...args);

    this.state = {
      focusedKey: undefined,
      selectedKey: undefined,
      id: IdManager.generateId('garden-button-group-container')
    };
  }

  getGroupProps = ({ role = 'group', ...other } = {}) => {
    return {
      role,
      ...other
    };
  };

  getButtonProps = ({ role = 'button', key, tabIndex = -1, onFocus, ...other } = {}) => {
    if (typeof key === 'undefined' || key === null) {
      throw new Error(
        '"key" must be defined within getButtonProps regardless of being used within a .map()'
      );
    }

    return {
      role,
      key,
      tabIndex,
      onFocus: composeEventHandlers(onFocus, ({ target }) => {
        // Chrome puts focus on a button and returns it upon window focus
        // this just makes sure the focus is on the ButtonGroupView instead
        // to avoid a double focus bug
        const { role: roleProp } = this.getGroupProps();

        closest(target, `[role="${roleProp}"]`).focus();
      }),
      ...other
    };
  };

  render() {
    const { children, render = children } = this.props;
    const { focusedKey, selectedKey, id } = this.getControlledState();

    return (
      <SelectionContainer
        id={id}
        focusedKey={focusedKey}
        selectedKey={selectedKey}
        onStateChange={this.setControlledState}
      >
        {({ getContainerProps, getItemProps }) =>
          render({
            getGroupProps: props => getContainerProps(this.getGroupProps(props)),
            getButtonProps: props =>
              getItemProps(this.getButtonProps(props), { selectedAriaKey: 'aria-pressed' }),
            focusedKey,
            selectedKey
          })
        }
      </SelectionContainer>
    );
  }
}
