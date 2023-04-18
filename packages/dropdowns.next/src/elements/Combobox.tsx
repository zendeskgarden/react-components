/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  HTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
  useMemo,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { IOption, IUseComboboxReturnValue, useCombobox } from '@zendeskgarden/container-combobox';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import StartIcon from '@zendeskgarden/svg-icons/src/16/star-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
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
import { Listbox } from './Listbox';

const OPTIONS: IOption[] = [
  { value: 'fruit-01', label: 'Apple' },
  { value: 'fruit-02', label: 'Banana', disabled: true },
  { value: 'fruit-03', label: 'Cherry' },
  { value: 'fruit-04', label: 'Grape' },
  { value: 'fruit-05', label: 'Kiwi' }
];

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
    inputProps: _inputProps,
    listboxMaxHeight,
    listboxZIndex,
    placeholder,
    validation,
    ...comboboxProps
  } = props;
  const [isInputHidden, setIsInputHidden] = useState(true);
  const triggerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const {
    activeValue,
    inputValue,
    isExpanded,
    getTriggerProps,
    getInputProps,
    getListboxProps,
    getOptionProps
  } = useCombobox({
    triggerRef,
    inputRef,
    listboxRef,
    options: OPTIONS,
    isAutocomplete,
    isEditable,
    disabled: isDisabled
  });
  const triggerProps = {
    isAutocomplete,
    isBare,
    isCompact,
    isEditable,
    focusInset,
    validation,
    ...(getTriggerProps() as HTMLAttributes<HTMLDivElement>)
  };
  const inputProps = {
    'aria-invalid': validation === 'error' || validation === 'warning',
    hidden: isInputHidden,
    isCompact,
    placeholder,
    ...(getInputProps({
      ...(_inputProps as IUseComboboxReturnValue['getInputProps']),
      onBlur: composeEventHandlers(_inputProps?.onBlur, () => setIsInputHidden(true)),
      onFocus: composeEventHandlers(_inputProps?.onFocus, () => setIsInputHidden(false))
    }) as InputHTMLAttributes<HTMLInputElement>)
  };
  const listboxProps = getListboxProps({
    'aria-label': 'Options'
  }) as HTMLAttributes<HTMLUListElement>;
  const contextValue = useMemo(
    () => ({ activeValue, getOptionProps, isCompact, listboxProps }),
    [activeValue, getOptionProps, isCompact, listboxProps]
  );

  return (
    <ComboboxContext.Provider value={contextValue}>
      <StyledCombobox isCompact={props.isCompact} {...comboboxProps} ref={ref}>
        <StyledTrigger {...triggerProps}>
          <StyledContainer>
            <StyledInputIcon isCompact={isCompact}>
              <StartIcon />
            </StyledInputIcon>
            <StyledInputGroup>
              {isInputHidden && (
                <StyledValue isCompact={isCompact} isPlaceholder={!inputValue}>
                  {inputValue || placeholder}
                </StyledValue>
              )}
              <StyledInput {...inputProps} />
            </StyledInputGroup>
            <StyledInputIcon isCompact={isCompact} isEnd isRotated={isExpanded}>
              <EndIcon />
            </StyledInputIcon>
          </StyledContainer>
        </StyledTrigger>
        <Listbox
          appendToNode={appendListboxToNode}
          isExpanded={isExpanded}
          maxHeight={listboxMaxHeight}
          triggerRef={triggerRef}
          zIndex={listboxZIndex}
        >
          {isExpanded &&
            OPTIONS.map((option, index) => (
              <Option
                key={index}
                value={option.value}
                label={option.label}
                isDisabled={option.disabled}
              />
            ))}
        </Listbox>
      </StyledCombobox>
    </ComboboxContext.Provider>
  );
});

Combobox.displayName = 'Combobox';

Combobox.propTypes = {
  appendListboxToNode: PropTypes.any,
  focusInset: PropTypes.bool,
  inputProps: PropTypes.object,
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
