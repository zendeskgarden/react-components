/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { useMemo, forwardRef } from 'react';

import { InputGroupProvider } from '../../context/form/InputGroupContext';
import { useFieldContext } from '../../hooks/form/useFieldContext';
import { useInputGroupValidationState } from '../../hooks/form/useInputGroupContext';
import { IInputGroupProps } from '../../types/elements';
import { StyledInputGroup } from '../../views/form/StyledInputGroup';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const InputGroup = forwardRef<HTMLDivElement, IInputGroupProps>(
  ({ isCompact, isUnified, focusInset, children, ...other }, ref) => {
    const fieldContext = useFieldContext();
    const { validation, registerValidation } = useInputGroupValidationState();
    const contextValue = useMemo(
      () => ({ isCompact, isUnified, registerValidation }),
      [isCompact, isUnified, registerValidation]
    );
    const labelId =
      fieldContext?.hasLabel && !other['aria-label']
        ? fieldContext.getLabelProps({}).id
        : undefined;

    return (
      <InputGroupProvider value={contextValue}>
        {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
        <StyledInputGroup
          role="group"
          aria-labelledby={labelId}
          ref={ref}
          $isCompact={isCompact}
          $isUnified={isUnified}
          $focusInset={focusInset}
          {...other}
          data-garden-id={COMPONENT_IDS['forms.input_group']}
          data-garden-version={PACKAGE_VERSION}
          $validation={validation}
        >
          {children}
        </StyledInputGroup>
      </InputGroupProvider>
    );
  }
);

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
  isCompact: PropTypes.bool,
  isUnified: PropTypes.bool,
  focusInset: PropTypes.bool
};
