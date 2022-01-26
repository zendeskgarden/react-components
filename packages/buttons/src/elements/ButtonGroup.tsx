/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useButtonGroup } from '@zendeskgarden/container-buttongroup';
import { StyledButtonGroup } from '../styled';
import { ButtonGroupContext } from '../utils/useButtonGroupContext';

export interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Defines the currently selected button in the group */
  selectedItem?: any;
  /**
   * Handles button selection
   *
   * @param {any} item The selected item
   */
  onSelect?: (item: any) => void;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroupProps>(
  ({ children, onSelect, selectedItem: controlledSelectedItem, ...otherProps }, ref) => {
    const { selectedItem, getButtonProps, getGroupProps } = useButtonGroup({
      selectedItem: controlledSelectedItem,
      defaultSelectedIndex: 0,
      onSelect
    });

    const contextValue = useMemo(
      () => ({ selectedItem, getButtonProps }),
      [selectedItem, getButtonProps]
    );

    return (
      <ButtonGroupContext.Provider value={contextValue}>
        <StyledButtonGroup ref={ref} {...(getGroupProps(otherProps) as any)}>
          {children}
        </StyledButtonGroup>
      </ButtonGroupContext.Provider>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  selectedItem: PropTypes.any,
  onSelect: PropTypes.func
};
