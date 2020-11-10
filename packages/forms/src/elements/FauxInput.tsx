/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useState,
  HTMLAttributes,
  RefObject,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef
} from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { StyledTextFauxInput, StyledTextMediaFigure } from '../styled';
import { VALIDATION } from '../utils/validation';

export interface IIconProps extends HTMLAttributes<HTMLElement> {
  /** Sets the state to hover */
  isHovered?: boolean;
  /** Sets the state to focused */
  isFocused?: boolean;
  /** Sets the state to disabled */
  isDisabled?: boolean;
  /** Sets the state to rotated */
  isRotated?: boolean;
  /** @ignore */
  children: any;
}

const StartIcon = (props: IIconProps) => <StyledTextMediaFigure position="start" {...props} />;
const EndIcon = (props: IIconProps) => <StyledTextMediaFigure position="end" {...props} />;

export interface IStaticFauxInputExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  /** Sets the start icon */
  StartIcon: typeof StartIcon;
  /** Sets the end icon */
  EndIcon: typeof EndIcon;
}

export interface IFauxInputProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies compact styling */
  isCompact?: boolean;
  /** Removes the borders and padding */
  isBare?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Applies disabled styling */
  disabled?: boolean;
  /** Applies read-only styling */
  readOnly?: boolean;
  /** Sets the element's validation state */
  validation?: VALIDATION;
  /** Applies focused styling */
  isFocused?: boolean;
  /** Applies hovered styling */
  isHovered?: boolean;
}

/**
 * Provides styling without native input backing; accepts all `<div>`
 * attributes and events.
 */
// eslint-disable-next-line react/display-name
export const FauxInput = forwardRef<HTMLDivElement, IFauxInputProps>(
  ({ onFocus, onBlur, disabled, readOnly, isFocused: controlledIsFocused, ...props }, ref) => {
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
        isReadOnly={readOnly}
        isDisabled={disabled}
        tabIndex={disabled ? undefined : 0}
        ref={ref as RefObject<HTMLInputElement>}
        {...props}
      />
    );
  }
) as IStaticFauxInputExport<HTMLDivElement, IFauxInputProps>;

FauxInput.StartIcon = StartIcon;
FauxInput.EndIcon = EndIcon;

FauxInput.displayName = 'FauxInput';

FauxInput.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};
