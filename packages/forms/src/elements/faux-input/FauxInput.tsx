/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import React, { useState, forwardRef } from 'react';

import { StyledTextFauxInput } from '../../styled';
import { IFauxInputProps, VALIDATION } from '../../types';
import { EndIcon } from './components/EndIcon';
import { StartIcon } from './components/StartIcon';

const FauxInputComponent = forwardRef<HTMLDivElement, IFauxInputProps>(
  (
    {
      disabled,
      focusInset,
      isBare,
      isCompact,
      isFocused: controlledIsFocused,
      isHovered,
      onBlur,
      onFocus,
      readOnly,
      validation,
      mediaLayout,
      ...other
    },
    ref
  ) => {
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
        $focusInset={focusInset}
        $isBare={isBare}
        $isCompact={isCompact}
        $isDisabled={disabled}
        $isFocused={controlledIsFocused === undefined ? isFocused : controlledIsFocused}
        $isHovered={isHovered}
        $isReadOnly={readOnly}
        $mediaLayout={mediaLayout}
        $validation={validation}
        data-test-is-focused={controlledIsFocused === undefined ? isFocused : controlledIsFocused}
        tabIndex={disabled ? undefined : 0}
        {...other}
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
