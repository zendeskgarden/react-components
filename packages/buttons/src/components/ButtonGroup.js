/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement, createContext } from 'react';
import PropTypes from 'prop-types';
import { ControlledComponent, IdManager } from '@zendeskgarden/react-selection';
import { hasType } from '@zendeskgarden/react-utilities';

import ButtonGroupContainer from '../containers/ButtonGroupContainer';
import { StyledButtonGroup } from '../styled';
import Button from './Button';

export const ButtonGroupContext = createContext();

/**
 * High-level abstraction for basic ButtonGroup implementations.
 */
export default class ButtonGroup extends ControlledComponent {
  static propTypes = {
    id: PropTypes.any,
    /** @ignore */
    children: PropTypes.any,
    /** Currently selected button */
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
      id: IdManager.generateId('garden-button-group'),
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
      if (!isValidElement(child)) {
        return child;
      }

      if (hasType(child, Button)) {
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
    const { children, onStateChange, ...otherProps } = this.props; // eslint-disable-line @typescript-eslint/no-unused-vars
    const { focusedKey, selectedKey, id } = this.getControlledState();

    return (
      <ButtonGroupContainer
        id={id}
        focusedKey={focusedKey}
        selectedKey={selectedKey}
        onStateChange={this.setControlledState}
      >
        {({ getGroupProps, getButtonProps }) => (
          <ButtonGroupContext.Provider value={true}>
            <StyledButtonGroup {...getGroupProps(otherProps)}>
              {this.renderButtons(getButtonProps)}
            </StyledButtonGroup>
          </ButtonGroupContext.Provider>
        )}
      </ButtonGroupContainer>
    );
  }
}
