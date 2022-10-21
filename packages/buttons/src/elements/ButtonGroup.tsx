/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useButtonGroup } from '@zendeskgarden/container-buttongroup';
import { IButtonGroupProps } from '../types';
import { StyledButtonGroup } from '../styled';
import { ButtonGroupContext } from '../utils/useButtonGroupContext';

/**
 * @deprecated this legacy component will be removed in a future release
 *
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
        <StyledButtonGroup ref={ref} {...(getGroupProps(otherProps as any) as any)}>
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
