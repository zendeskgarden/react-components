/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, RefObject } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { StyledTextFauxInput, StyledTextMediaFigure } from '../styled';
import { VALIDATION } from '../utils/validation';

export interface IFauxInputProps extends HTMLAttributes<HTMLDivElement> {
  /** Apply compact styling */
  isCompact?: boolean;
  /** Remove borders and padding */
  isBare?: boolean;
  /** Apply inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Apply disabled styling */
  disabled?: boolean;
  validation?: VALIDATION;
  /** Apply focused styling */
  isFocused?: boolean;
  /** Apply hovered styling */
  isHovered?: boolean;
}

/**
 * Provides styling without native input backing; accepts all `<div>`
 * attributes and events.
 */
const FauxInput: React.FunctionComponent<
  IFauxInputProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, IFauxInputProps>(
  ({ onFocus, onBlur, disabled, isFocused: controlledIsFocused, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const onFocusHandler = composeEventHandlers(onFocus, () => {
      setIsFocused(true);
    });

    const onBlurHandler = composeEventHandlers(onBlur, () => {
      setIsFocused(false);
    });

    return (
      <StyledTextFauxInput
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        isFocused={controlledIsFocused === undefined ? isFocused : controlledIsFocused}
        data-test-is-focused={controlledIsFocused === undefined ? isFocused : controlledIsFocused}
        isDisabled={disabled}
        tabIndex={disabled ? undefined : 0}
        ref={ref as RefObject<HTMLInputElement>}
        {...props}
      />
    );
  }
);

FauxInput.displayName = 'FauxInput';

FauxInput.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  disabled: PropTypes.bool,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};

interface IIconProps extends HTMLAttributes<HTMLElement> {
  isHovered?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
  isRotated?: boolean;
  children: any;
}

const StartIcon = (props: IIconProps) => <StyledTextMediaFigure position="start" {...props} />;
const EndIcon = (props: IIconProps) => <StyledTextMediaFigure position="end" {...props} />;

(FauxInput as any).StartIcon = StartIcon;
(FauxInput as any).EndIcon = EndIcon;

export default FauxInput as React.FunctionComponent<
  IFauxInputProps & React.RefAttributes<HTMLDivElement>
> & {
  StartIcon: typeof StartIcon;
  EndIcon: typeof EndIcon;
};
