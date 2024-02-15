/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  Children,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState,
  isValidElement
} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useSelection } from '@zendeskgarden/container-selection';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IButtonGroupProps } from '../types';
import { StyledButtonGroup } from '../styled';
import { ButtonGroupContext } from '../utils/useButtonGroupContext';

/**
 * @deprecated this legacy component will be removed in a future release
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroupProps>(
  ({ children, onSelect, selectedItem: controlledSelectedValue, ...otherProps }, ref) => {
    const { rtl } = useContext(ThemeContext) || DEFAULT_THEME;
    const [internalSelectedValue, setInternalSelectedValue] = useState();
    const selectedValue = getControlledValue(controlledSelectedValue, internalSelectedValue);
    const values = useMemo(
      () =>
        Children.toArray(children).reduce((buttons, child) => {
          if (isValidElement(child) && child.type !== 'string' && !child.props.disabled) {
            (buttons as any[]).push(child.props.value);
          }

          return buttons;
        }, []) as any[],
      [children]
    );

    const {
      selectedValue: selectedItem,
      getElementProps,
      getGroupProps
    } = useSelection({
      rtl,
      values,
      defaultSelectedValue: values[0],
      selectedValue,
      onSelect: useCallback<(value: any) => undefined>(
        value => {
          onSelect && onSelect(value);

          setInternalSelectedValue(value);
        },
        [onSelect]
      )
    });

    const contextValue = useMemo(
      () => ({
        selectedItem,
        getButtonProps: (props: any) =>
          getElementProps({
            role: 'button',
            selectedAriaKey: 'aria-pressed',
            ...props
          })
      }),
      [selectedItem, getElementProps]
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
