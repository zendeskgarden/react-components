/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import {
  IdManager,
  ControlledComponent,
  KeyboardFocusContainer,
  composeEventHandlers,
  FieldContainer
} from '@zendeskgarden/react-selection';
import { hasType } from '@zendeskgarden/react-utilities';

import CheckboxView from '../views/CheckboxView';
import Input from '../views/Input';
import Label from '../views/Label';
import Hint from '../views/Hint';
import Message from '../views/Message';

/**
 * Accepts all `<input type="checkbox" />` props
 */
export default class Checkbox extends ControlledComponent {
  static propTypes = {
    /**
     * The root ID to use for descendants. A unique ID is created if none is provided.
     **/
    id: PropTypes.any,
    /**
     * Applies props to the containing `<div>` element
     */
    wrapperProps: PropTypes.object,
    children: PropTypes.node
  };

  constructor(...args) {
    super(...args);

    this.state = {
      id: IdManager.generateId()
    };
  }

  renderCheckbox = ({
    getLabelProps,
    getInputProps,
    getMessageProps,
    getFocusProps,
    getHintProps,
    keyboardFocused
  } = {}) => {
    const { children, wrapperProps, id, ...checkboxInputProps } = this.props; // eslint-disable-line no-unused-vars

    /**
     * Due to us applying keyboard-only focus events to 2 separate elements (the input and label)
     * we must apply the original `onMouseDown` event to the `onMouseUp` event of the label.
     *
     * By passing the original props within `getFocusProps` we are able to allow
     * `event.preventDefault()` to still prevent chained events as expected.
     */
    const { onMouseDown: onFocusMouseDown, ...checkboxProps } = getFocusProps(checkboxInputProps);

    let isDescribed = false;

    Children.forEach(children, child => {
      if (hasType(child, Hint)) {
        isDescribed = true;
      }
    });

    return (
      <CheckboxView {...wrapperProps}>
        <Input {...getInputProps(checkboxProps, { isDescribed })} />
        {Children.map(children, child => {
          if (!isValidElement(child)) {
            return child;
          }

          if (hasType(child, Label)) {
            const { onMouseUp, ...otherChildProps } = child.props;

            return cloneElement(
              child,
              getLabelProps({
                focused: keyboardFocused,
                // Apply keyboard-only focus event
                onMouseUp: composeEventHandlers(onMouseUp, onFocusMouseDown),
                ...otherChildProps
              })
            );
          }

          if (hasType(child, Hint)) {
            return cloneElement(child, getHintProps(child.props));
          }

          if (hasType(child, Message)) {
            return cloneElement(child, getMessageProps(child.props));
          }

          return child;
        })}
      </CheckboxView>
    );
  };

  render() {
    const { id } = this.getControlledState();

    return (
      <FieldContainer id={id}>
        {({ getLabelProps, getInputProps, getMessageProps, getHintProps }) => (
          <KeyboardFocusContainer>
            {({ getFocusProps, keyboardFocused }) =>
              this.renderCheckbox({
                getLabelProps,
                getInputProps,
                getMessageProps,
                getFocusProps,
                getHintProps,
                keyboardFocused
              })
            }
          </KeyboardFocusContainer>
        )}
      </FieldContainer>
    );
  }
}
