/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  Children,
  cloneElement,
  isValidElement,
  createContext,
  createRef,
  HTMLAttributes
} from 'react';
import PropTypes from 'prop-types';
import { hasType } from '@zendeskgarden/react-utilities';
import { useButtonGroup } from '@zendeskgarden/container-buttongroup';

import { StyledButtonGroup } from '../styled';
import Button from './Button';

export const ButtonGroupContext = createContext<boolean | undefined>(undefined);

interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  selectedItem?: any;
  onSelect?: (item: any) => void;
}

/**
 * High-level abstraction for basic ButtonGroup implementations.
 */
const ButtonGroup: React.FunctionComponent<IButtonGroupProps> = ({
  children,
  onSelect,
  selectedItem: controlledSelectedItem,
  ...otherProps
}) => {
  const { selectedItem, getButtonProps, getGroupProps } = useButtonGroup({
    selectedItem: controlledSelectedItem,
    defaultSelectedIndex: 0,
    onSelect
  });

  const renderButtons = () => {
    return Children.map(children, child => {
      if (!isValidElement(child)) {
        return child;
      }

      if (hasType(child, Button)) {
        if (child.props.disabled) {
          return child;
        }

        const value = (child.props as any).value;

        if (!value) {
          throw new Error('"value" prop must be provided to Button');
        }

        return cloneElement(
          child,
          getButtonProps({
            key: value,
            item: value,
            focusRef: createRef(),
            selected: value === selectedItem,
            ...child.props
          })
        );
      }

      return child;
    });
  };

  return (
    <ButtonGroupContext.Provider value={true}>
      <StyledButtonGroup {...(getGroupProps(otherProps) as any)}>
        {renderButtons()}
      </StyledButtonGroup>
    </ButtonGroupContext.Provider>
  );
};

ButtonGroup.propTypes = {
  selectedItem: PropTypes.any,
  onSelect: PropTypes.func
};

export default ButtonGroup;
