/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement } from 'react';
import {
  ControlledComponent,
  FieldContainer,
  composeEventHandlers
} from '@zendeskgarden/react-selection';

import Select from './Select';
import SelectGroup from '../views/SelectGroup';
import Label from '../views/fields/Label';
import Hint from '../views/fields/Hint';
import Message from '../views/fields/Message';
import typeCheck from '../utils/typeCheck';

export default class SelectField extends ControlledComponent {
  state = {
    hovered: false
  };

  getLabelProps = ({ onMouseEnter, onMouseLeave, onClick, ...other }) => {
    return {
      onMouseEnter: composeEventHandlers(onMouseEnter, () => {
        this.setControlledState({ hovered: true });
      }),
      onMouseLeave: composeEventHandlers(onMouseLeave, () => {
        this.setControlledState({ hovered: false });
      }),
      onClick: composeEventHandlers(onClick, () => {
        this.selectRef && this.selectRef.focus();
      }),
      ...other
    };
  };

  getInputProps = ({ selectRef, ...other }) => {
    const { hovered } = this.getControlledState();

    return {
      hovered,
      selectRef: ref => {
        selectRef && selectRef(ref);
        this.selectRef = ref;
      },
      ...other
    };
  };

  render() {
    const { children, ...otherProps } = this.props;

    this.selectRef = undefined;

    return (
      <SelectGroup {...otherProps}>
        <FieldContainer>
          {({
            getLabelProps: getFieldLabelProps,
            getInputProps: getFieldInputProps,
            getHintProps,
            getMessageProps
          }) =>
            Children.map(children, child => {
              if (!isValidElement(child)) {
                return child;
              }

              if (typeCheck(child, Label)) {
                return cloneElement(child, getFieldLabelProps(this.getLabelProps(child.props)));
              }

              if (typeCheck(child, Hint)) {
                return cloneElement(child, getHintProps(child.props));
              }

              if (typeCheck(child, Message)) {
                return cloneElement(child, getMessageProps(child.props));
              }

              if (typeCheck(child, Select)) {
                return cloneElement(child, getFieldInputProps(this.getInputProps(child.props)));
              }

              return child;
            })
          }
        </FieldContainer>
      </SelectGroup>
    );
  }
}
