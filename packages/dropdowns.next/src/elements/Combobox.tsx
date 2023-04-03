/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IComboboxProps, VALIDATION } from '../types';
import {
  StyledCombobox,
  StyledContainer,
  StyledInput,
  StyledInputGroup,
  StyledTrigger
} from '../views';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Combobox = forwardRef<HTMLDivElement, IComboboxProps>((props, ref) => {
  const {
    isAutocomplete,
    isBare,
    isCompact,
    isDisabled,
    isEditable,
    focusInset,
    validation,
    ...comboboxProps
  } = props;
  const [isInputHidden, setIsInputHidden] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  return (
    <StyledCombobox isCompact={props.isCompact} {...comboboxProps} ref={ref}>
      <StyledTrigger
        isAutocomplete={isAutocomplete}
        isBare={isBare}
        isCompact={isCompact}
        isEditable={isEditable}
        focusInset={focusInset}
        validation={validation}
        /* remove following props with useCombobox hook */
        aria-disabled={isDisabled}
        onClick={() => inputRef.current?.focus()}
        tabIndex={isEditable ? -1 : 0}
      >
        <StyledContainer>
          <StyledInputGroup>
            <StyledInput
              aria-invalid={validation === 'error' || validation === 'warning'}
              hidden={isInputHidden}
              isCompact={isCompact}
              onFocus={() => setIsInputHidden(false)}
              onBlur={() => setIsInputHidden(true)}
              /* remove following props with useCombobox hook */
              disabled={isDisabled}
              readOnly={!isEditable}
              tabIndex={isEditable ? undefined : -1}
              ref={inputRef}
            />
          </StyledInputGroup>
        </StyledContainer>
      </StyledTrigger>
    </StyledCombobox>
  );
});

Combobox.displayName = 'Combobox';

Combobox.propTypes = {
  isAutocomplete: PropTypes.bool,
  isBare: PropTypes.bool,
  isCompact: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEditable: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};

Combobox.defaultProps = {
  isAutocomplete: true,
  isEditable: true
};
