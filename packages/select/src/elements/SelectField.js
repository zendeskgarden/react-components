import React, { Children, cloneElement, isValidElement } from 'react';
import {
  ControlledComponent,
  FieldContainer,
  composeEventHandlers
} from '@zendesk/garden-react-selection';

import Select from './Select';
import SelectGroup from '../views/SelectGroup';
import Label from '../views/fields/Label';
import Hint from '../views/fields/Hint';
import Message from '../views/fields/Message';

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

              if (child.type === Label) {
                return cloneElement(child, getFieldLabelProps(this.getLabelProps(child.props)));
              }

              if (child.type === Hint) {
                return cloneElement(child, getHintProps(child.props));
              }

              if (child.type === Message) {
                return cloneElement(child, getMessageProps(child.props));
              }

              if (child.type === Select) {
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
