/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { IFauxInputProps, VALIDATION } from '../../types';
import { StyledTextFauxInput } from '../../styled';
import { StartIcon } from './components/StartIcon';
import { EndIcon } from './components/EndIcon';

const FauxInputComponent = forwardRef<HTMLDivElement, IFauxInputProps>(
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
        {...props}
        ref={ref}
      />
    );
  }
);

FauxInputComponent.displayName = 'FauxInput';

FauxInputComponent.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION),
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool
};

/**
 *  @extends HTMLAttributes<HTMLDivElement>
 */
export const FauxInput = FauxInputComponent as typeof FauxInputComponent & {
  EndIcon: typeof EndIcon;
  StartIcon: typeof StartIcon;
};

FauxInput.EndIcon = EndIcon;
FauxInput.StartIcon = StartIcon;
