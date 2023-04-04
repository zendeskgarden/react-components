/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import StartIcon from '@zendeskgarden/svg-icons/src/16/star-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { IComboboxProps, VALIDATION } from '../types';
import {
  StyledCombobox,
  StyledContainer,
  StyledIcon,
  StyledInput,
  StyledInputGroup,
  StyledTrigger,
  StyledValue
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
    placeholder,
    validation,
    ...comboboxProps
  } = props;
  const [isInputHidden, setIsInputHidden] = useState(true);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

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
          <StyledIcon isCompact={isCompact}>
            <StartIcon />
          </StyledIcon>
          <StyledInputGroup>
            {isInputHidden && (
              <StyledValue isCompact={isCompact} isPlaceholder={!value}>
                {value || placeholder}
              </StyledValue>
            )}
            <StyledInput
              aria-invalid={validation === 'error' || validation === 'warning'}
              hidden={isInputHidden}
              isCompact={isCompact}
              onFocus={() => setIsInputHidden(false)}
              onBlur={() => setIsInputHidden(true)}
              placeholder={placeholder}
              /* remove following props with useCombobox hook */
              disabled={isDisabled}
              onChange={event => setValue(event.target.value)}
              readOnly={!isEditable}
              tabIndex={isEditable ? undefined : -1}
              value={value}
              ref={inputRef}
            />
          </StyledInputGroup>
          <StyledIcon isCompact={isCompact} isEnd>
            <EndIcon />
          </StyledIcon>
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
  placeholder: PropTypes.string,
  validation: PropTypes.oneOf(VALIDATION)
};

Combobox.defaultProps = {
  isAutocomplete: true,
  isEditable: true
};
