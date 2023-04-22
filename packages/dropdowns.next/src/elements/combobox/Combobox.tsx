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
import { IUseComboboxReturnValue, useCombobox } from '@zendeskgarden/container-combobox';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import StartIcon from '@zendeskgarden/svg-icons/src/16/star-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { IComboboxProps, VALIDATION } from '../../types';
import { ComboboxContext } from '../../context/useComboboxContext';
import {
  StyledCombobox,
  StyledContainer,
  StyledInputIcon,
  StyledInput,
  StyledInputGroup,
  StyledTrigger,
  StyledValue
} from '../../views';
import { Listbox } from './Listbox';
import { toOptions } from './utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Combobox = forwardRef<HTMLDivElement, IComboboxProps>(
  (
    {
      children,
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
      ...props
    },
    ref
  ) => {
    const [isInputHidden, setIsInputHidden] = useState(true);
    const options = useMemo(() => toOptions(children), [children]);
    const triggerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listboxRef = useRef<HTMLUListElement>(null);
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
      options,
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
        <StyledCombobox isCompact={isCompact} {...props} ref={ref}>
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
            {children}
          </Listbox>
        </StyledCombobox>
      </ComboboxContext.Provider>
    );
  }
);

Combobox.displayName = 'Combobox';

Combobox.propTypes = {
  appendListboxToNode: PropTypes.any,
  endIcon: PropTypes.any,
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
  startIcon: PropTypes.any,
  validation: PropTypes.oneOf(VALIDATION)
};

Combobox.defaultProps = {
  isEditable: true,
  listboxMaxHeight: '400px'
};
