/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ICheckboxProps } from '../types';
import useFieldContext from '../utils/useFieldContext';
import { InputContext } from '../utils/useInputContext';
import { StyledCheckInput } from '../styled';
import useFieldsetContext from '../utils/useFieldsetContext';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ indeterminate, children, isCompact, ...other }, ref) => {
    const fieldsetContext = useFieldsetContext();
    const fieldContext = useFieldContext();

    const inputRef = (inputElement: HTMLInputElement) => {
      inputElement && ((inputElement as any).indeterminate = indeterminate);
    };

    const combinedRef = (inputElement: HTMLInputElement) => {
      [inputRef, ref].forEach(targetRef => {
        if (targetRef) {
          if (typeof targetRef === 'function') {
            targetRef(inputElement);
          } else {
            (targetRef as any).current = inputElement;
          }
        }
      });
    };

    let combinedProps = {
      $isCompact: fieldsetContext ? fieldsetContext.isCompact : isCompact,
      ref: combinedRef,
      ...other
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <InputContext.Provider value="checkbox">
        <StyledCheckInput {...combinedProps} />
        {children}
      </InputContext.Provider>
    );
  }
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  isCompact: PropTypes.bool,
  indeterminate: PropTypes.bool
};
