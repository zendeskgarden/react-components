/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Chevron from 'svg-icons-legacy/src/16/chevron-down-stroke.svg';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import { ISelectProps, VALIDATION } from '../../types/elements';
import { isInvalid } from '../../utils/form/isInvalid';
import { StyledSelect } from '../../views/form/StyledSelect';
import { StyledSelectWrapper } from '../../views/form/StyledSelectWrapper';
import { COMPONENT_IDS } from '../utils';
import { FauxInput } from './FauxInput';

/**
 * @extends SelectHTMLAttributes<HTMLSelectElement>
 */
export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ disabled, isCompact, validation, focusInset, isBare, ...props }, ref) => {
    const fieldContext = useFieldContext();

    let combinedProps = {
      $focusInset: focusInset,
      $isBare: isBare,
      $isCompact: isCompact,
      $validation: validation,
      disabled,
      ref,
      ...props
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <StyledSelectWrapper
        $isCompact={isCompact}
        $isBare={isBare}
        $isDisabled={disabled}
        $validation={validation}
        $focusInset={focusInset}
        as="div"
        aria-disabled={disabled}
        aria-invalid={isInvalid(validation)}
        data-garden-id={COMPONENT_IDS['forms.select_wrapper']}
        data-garden-version={PACKAGE_VERSION}
      >
        <StyledSelect
          {...combinedProps}
          as="select"
          aria-invalid={isInvalid(validation)}
          data-garden-id={COMPONENT_IDS['forms.select']}
          data-garden-version={PACKAGE_VERSION}
        />
        {!isBare && (
          <FauxInput.EndIcon isDisabled={disabled}>
            <Chevron />
          </FauxInput.EndIcon>
        )}
      </StyledSelectWrapper>
    );
  }
);

Select.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};

Select.displayName = 'Select';
