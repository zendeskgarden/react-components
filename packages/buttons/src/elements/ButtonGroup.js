/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { ControlledComponent, IdManager } from '@zendeskgarden/react-selection';

import ButtonGroupContainer from '../containers/ButtonGroupContainer';
import ButtonGroupView from '../views/button-group/ButtonGroupView';
import Button from '../views/Button';
import typeCheck from '../utils/typeCheck';

/**
 * High-level abstraction for basic ButtonGroup implementations.
 */
export default class ButtonGroup extends ControlledComponent {
  static propTypes = {
    id: PropTypes.any,
    children: PropTypes.any,
    /**
     * Currently selected tab to display
     */
    selectedKey: PropTypes.any,
    /**
     * @param {Object} newState
     * @param {Any} newState.selectedKey - The newly selected key
     */
    onStateChange: PropTypes.func
  };

  constructor(...args) {
    super(...args);

    this.state = {
      id: IdManager.generateId(),
      selectedKey: undefined,
      focusedKey: undefined
    };

    this.firstKey = undefined;
  }

  componentDidMount() {
    /**
     * In an uncontrolled state we want to always display the first button
     */
    if (!this.isControlledProp('selectedKey') && typeof this.firstKey !== 'undefined') {
      this.setControlledState({ selectedKey: this.firstKey });
    }
  }

  renderButtons = getButtonProps => {
    const { children } = this.props;
    const { selectedKey, focusedKey } = this.getControlledState();

    return Children.map(children, child => {
      if (typeCheck(child, Button)) {
        if (child.props.disabled) {
          return child;
        }

        const key = child.key;

        if (!key) {
          throw new Error('"key" prop must be provided to Button');
        }

        if (typeof this.firstKey === 'undefined') {
          this.firstKey = key;
        }

        return cloneElement(
          child,
          getButtonProps({
            key,
            selected: key === selectedKey,
            focused: key === focusedKey,
            ...child.props
          })
        );
      }

      return child;
    });
  };

  render() {
    const { children, ...otherProps } = this.props; // eslint-disable-line no-unused-vars
    const { focusedKey, selectedKey, id } = this.getControlledState();

    return (
      <ButtonGroupContainer
        id={id}
        focusedKey={focusedKey}
        selectedKey={selectedKey}
        onStateChange={this.setControlledState}
      >
        {({ getGroupProps, getButtonProps }) => (
          <ButtonGroupView {...getGroupProps(otherProps)}>
            {this.renderButtons(getButtonProps)}
          </ButtonGroupView>
        )}
      </ButtonGroupContainer>
    );
  }
}
