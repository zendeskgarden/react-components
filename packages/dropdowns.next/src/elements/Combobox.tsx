/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import StartIcon from '@zendeskgarden/svg-icons/src/16/star-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import OptionIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { IComboboxProps, VALIDATION } from '../types';
import { ComboboxContext } from '../context/useComboboxContext';
import {
  StyledCombobox,
  StyledContainer,
  StyledInputIcon,
  StyledInput,
  StyledInputGroup,
  StyledTrigger,
  StyledValue
} from '../views';
import { Option } from './Option';
import { OptGroup } from './OptGroup';
import { Listbox } from './Listbox';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Combobox = forwardRef<HTMLDivElement, IComboboxProps>((props, ref) => {
  const {
    appendListboxToNode,
    focusInset,
    isAutocomplete,
    isBare,
    isCompact,
    isDisabled,
    isEditable,
    listboxMaxHeight,
    listboxZIndex,
    placeholder,
    validation,
    ...comboboxProps
  } = props;
  const contextValue = useMemo(() => ({ isCompact }), [isCompact]);
  const [isInputHidden, setIsInputHidden] = useState(true);
  const [value, setValue] = useState('');
  const triggerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);

  return (
    <ComboboxContext.Provider value={contextValue}>
      <StyledCombobox isCompact={props.isCompact} {...comboboxProps} ref={ref}>
        <StyledTrigger
          isAutocomplete={isAutocomplete}
          isBare={isBare}
          isCompact={isCompact}
          isEditable={isEditable}
          focusInset={focusInset}
          validation={validation}
          ref={triggerRef}
          /* remove following props with useCombobox hook */
          aria-disabled={isDisabled}
          onClick={() => inputRef.current?.focus()}
          tabIndex={isEditable ? -1 : 0}
        >
          <StyledContainer>
            <StyledInputIcon isCompact={isCompact}>
              <StartIcon />
            </StyledInputIcon>
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
            <StyledInputIcon isCompact={isCompact} isEnd isRotated={!isInputHidden}>
              <EndIcon />
            </StyledInputIcon>
          </StyledContainer>
        </StyledTrigger>
        <Listbox
          appendToNode={appendListboxToNode}
          isExpanded={!isInputHidden}
          maxHeight={listboxMaxHeight}
          triggerRef={triggerRef}
          zIndex={listboxZIndex}
          ref={listboxRef}
        >
          <OptGroup icon={<OptionIcon />} label="Header">
            <Option isDisabled={isDisabled}>Zero</Option>
          </OptGroup>
          <Option icon={<OptionIcon />} isDisabled={isDisabled}>
            One
            <Option.Meta>Meta</Option.Meta>
          </Option>
          <Option isDisabled={isDisabled}>
            Two
            <Option.Meta>Meta</Option.Meta>
          </Option>
          <Option isDisabled={isDisabled}>Three</Option>
        </Listbox>
      </StyledCombobox>
    </ComboboxContext.Provider>
  );
});

Combobox.displayName = 'Combobox';

Combobox.propTypes = {
  appendListboxToNode: PropTypes.any,
  focusInset: PropTypes.bool,
  isAutocomplete: PropTypes.bool,
  isBare: PropTypes.bool,
  isCompact: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEditable: PropTypes.bool,
  listboxMaxHeight: PropTypes.string,
  listboxZIndex: PropTypes.number,
  placeholder: PropTypes.string,
  validation: PropTypes.oneOf(VALIDATION)
};

Combobox.defaultProps = {
  isAutocomplete: true,
  isEditable: true,
  listboxMaxHeight: '400px'
};
