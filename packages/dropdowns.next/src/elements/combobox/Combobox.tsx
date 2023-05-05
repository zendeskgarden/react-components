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
  useContext,
  useMemo,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { IOption, IUseComboboxReturnValue, useCombobox } from '@zendeskgarden/container-combobox';
import { DEFAULT_THEME, useText, useWindow } from '@zendeskgarden/react-theming';
import StartIcon from '@zendeskgarden/svg-icons/src/16/star-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { IComboboxProps, IOptionProps, VALIDATION } from '../../types';
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
import { Tag } from './Tag';
import { toOptions, toString } from './utils';
import { StyledTagsButton } from '../../views/combobox/StyledTagsButton';

const MAX_TAGS = 4;

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
      isMultiselectable,
      inputProps: _inputProps,
      listboxAriaLabel,
      listboxMaxHeight,
      listboxZIndex,
      maxTags = MAX_TAGS,
      placeholder,
      renderExpandTags,
      validation,
      ...props
    },
    ref
  ) => {
    const [options, optionTagProps] = useMemo(() => {
      const _optionTagProps: Record<string, IOptionProps['tagProps']> = {};
      const _options = toOptions(children, _optionTagProps);

      return [_options, _optionTagProps];
    }, [children]);
    const hasFocus = useRef(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listboxRef = useRef<HTMLUListElement>(null);
    const tagsButtonRef = useRef<HTMLButtonElement>(null);
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
    const environment = useWindow(theme);
    const {
      activeValue,
      inputValue,
      isExpanded,
      getTriggerProps,
      getInputProps,
      getListboxProps,
      getOptionProps,
      getOptGroupProps,
      getTagProps,
      selection
    } = useCombobox({
      triggerRef,
      inputRef,
      listboxRef,
      options,
      environment,
      isAutocomplete,
      isEditable,
      isMultiselectable,
      disabled: isDisabled
    });
    const contextValue = useMemo(
      () => ({ activeValue, getOptionProps, getOptGroupProps, getTagProps, isCompact }),
      [activeValue, getOptionProps, getOptGroupProps, getTagProps, isCompact]
    );
    const expandTags = useText(
      Combobox,
      { renderExpandTags },
      'renderExpandTags',
      '+ {{value}} more',
      isMultiselectable || false
    );
    const _listboxAriaLabel = useText(
      Combobox,
      { listboxAriaLabel },
      'listboxAriaLabel',
      'Options'
    );
    const triggerProps = {
      isAutocomplete,
      isBare,
      isCompact,
      isEditable,
      focusInset,
      validation,
      ...(getTriggerProps({
        onFocus: () => {
          hasFocus.current = true;
        },
        onBlur: event => {
          if (event.relatedTarget === null || !triggerRef.current?.contains(event.relatedTarget)) {
            hasFocus.current = false;
          }
        }
      }) as HTMLAttributes<HTMLDivElement>)
    };
    const inputProps = {
      'aria-invalid': validation === 'error' || validation === 'warning',
      hidden: !(isEditable && hasFocus.current),
      isCompact,
      placeholder,
      ...(getInputProps({
        ...(_inputProps as IUseComboboxReturnValue['getInputProps'])
      }) as InputHTMLAttributes<HTMLInputElement>)
    };
    const listboxProps = getListboxProps({
      'aria-label': _listboxAriaLabel!
    }) as HTMLAttributes<HTMLUListElement>;

    const Tags = ({ selectedOptions }: { selectedOptions: IOption[] }) => {
      const [isFocused, setIsFocused] = useState(hasFocus.current);
      const value = selectedOptions.length - maxTags;

      return (
        <>
          {selectedOptions.map((option, index) => {
            const key = toString(option);
            const disabled = isDisabled || option.disabled;
            const hidden = !isFocused && index >= maxTags;

            return (
              <Tag
                key={key}
                hidden={hidden}
                onFocus={() => setIsFocused(true)}
                option={{ ...option, disabled }}
                {...optionTagProps[key]}
              />
            );
          })}
          {!isFocused && selectedOptions.length > maxTags && (
            <StyledTagsButton
              disabled={isDisabled}
              isCompact={isCompact}
              onClick={() => isEditable && inputRef.current?.focus()}
              tabIndex={-1}
              type="button"
              ref={tagsButtonRef}
            >
              {renderExpandTags
                ? renderExpandTags(value)
                : expandTags?.replace('{{value}}', value.toString())}
            </StyledTagsButton>
          )}
        </>
      );
    };

    return (
      <ComboboxContext.Provider value={contextValue}>
        <StyledCombobox isCompact={isCompact} {...props} ref={ref}>
          <StyledTrigger {...triggerProps}>
            <StyledContainer>
              <StyledInputIcon isCompact={isCompact}>
                <StartIcon />
              </StyledInputIcon>
              <StyledInputGroup>
                {isMultiselectable && Array.isArray(selection) && (
                  <Tags selectedOptions={selection} />
                )}
                {!(isEditable && hasFocus.current) && (
                  <StyledValue
                    isCompact={isCompact}
                    isPlaceholder={!inputValue}
                    onClick={event => {
                      event.stopPropagation();

                      if (isEditable) {
                        inputRef.current?.focus();
                      }
                    }}
                  >
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
            {...listboxProps}
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
  isMultiselectable: PropTypes.bool,
  listboxAriaLabel: PropTypes.string,
  listboxMaxHeight: PropTypes.string,
  listboxZIndex: PropTypes.number,
  maxTags: PropTypes.number,
  placeholder: PropTypes.string,
  renderExpandTags: PropTypes.func,
  startIcon: PropTypes.any,
  validation: PropTypes.oneOf(VALIDATION)
};

Combobox.defaultProps = {
  isEditable: true,
  listboxMaxHeight: '400px',
  maxTags: MAX_TAGS
};
