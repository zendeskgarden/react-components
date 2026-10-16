/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { InputProvider } from '../../context/form/InputContext';
import { useFieldContext } from '../../hooks/form/useFieldContext';
import { useFieldsetContext } from '../../hooks/form/useFieldsetContext';
import { ICheckboxProps } from '../../types/elements';
import { StyledCheckInput } from '../../views/form/StyledCheckInput';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
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
      <InputProvider value="checkbox">
        <StyledCheckInput
          {...combinedProps}
          data-garden-id={COMPONENT_IDS['forms.checkbox']}
          data-garden-version={PACKAGE_VERSION}
          type="checkbox"
        />
        {children}
      </InputProvider>
    );
  }
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  isCompact: PropTypes.bool,
  indeterminate: PropTypes.bool
};
