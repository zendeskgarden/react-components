/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useButtonGroup } from '@zendeskgarden/container-buttongroup';

import { StyledButtonGroup } from '../styled';
import { ButtonGroupContext } from '../utils/useButtonGroupContext';

export interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the selected item within the group */
  selectedItem?: any;
  /**
   * Handles selection changes within the button group
   *
   * @param {any} item The button being selected
   */
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

  const contextValue = { selectedItem, getButtonProps };

  return (
    <ButtonGroupContext.Provider value={contextValue}>
      <StyledButtonGroup {...(getGroupProps(otherProps) as any)}>{children}</StyledButtonGroup>
    </ButtonGroupContext.Provider>
  );
};

ButtonGroup.propTypes = {
  selectedItem: PropTypes.any,
  onSelect: PropTypes.func
};

export default ButtonGroup;
