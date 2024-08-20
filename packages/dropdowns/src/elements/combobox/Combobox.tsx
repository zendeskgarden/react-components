/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { IUseComboboxReturnValue, useCombobox } from '@zendeskgarden/container-combobox';
import { DEFAULT_THEME, useText, useWindow } from '@zendeskgarden/react-theming';
import { VALIDATION } from '@zendeskgarden/react-forms';
import ChevronIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { IComboboxProps, IOptionProps } from '../../types';
import { ComboboxContext } from '../../context/useComboboxContext';
import useFieldContext from '../../context/useFieldContext';
import {
  StyledCombobox,
  StyledContainer,
  StyledInputIcon,
  StyledInput,
  StyledInputGroup,
  StyledTagsButton,
  StyledTrigger,
  StyledValue
} from '../../views';
import { Listbox } from './Listbox';
import { TagGroup } from './TagGroup';
import { toOptions } from './utils';

const MAX_TAGS = 4;

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Combobox = forwardRef<HTMLDivElement, IComboboxProps>(
  (
    {
      children,
      activeIndex,
      defaultActiveIndex,
      defaultExpanded,
      endIcon,
      focusInset,
      inputProps: _inputProps,
      inputValue: _inputValue,
      isAutocomplete,
      isBare,
      isCompact,
      isDisabled,
      isEditable,
      isExpanded: _isExpanded,
      isMultiselectable,
      listboxAppendToNode,
      listboxAriaLabel,
      listboxMaxHeight,
      listboxMinHeight,
      listboxZIndex,
      maxHeight,
      maxTags = MAX_TAGS,
      onChange,
      placeholder,
      renderExpandTags,
      renderValue,
      selectionValue,
      startIcon,
      validation,
      ...props
    },
    ref
  ) => {
    const {
      hasHint,
      hasMessage,
      labelProps,
      setLabelProps,
      hintProps,
      setHintProps,
      messageProps,
      setMessageProps
    } = useFieldContext();
    const [isInputHidden, setIsInputHidden] = useState(true);
    const [isLabelHovered, setIsLabelHovered] = useState(false);
    const [isTagGroupExpanded, setIsTagGroupExpanded] = useState(false);
    const [optionTagProps, setOptionTagProps] = useState<Record<string, IOptionProps['tagProps']>>(
      {}
    );
    const options = useMemo(() => {
      const tagProps: Record<string, IOptionProps['tagProps']> = {};
      const retVal = toOptions(children, tagProps);

      if (isMultiselectable) {
        setOptionTagProps(value => ({ ...value, ...tagProps }));
      }

      return retVal;
    }, [children, isMultiselectable]);
    const triggerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listboxRef = useRef<HTMLUListElement>(null);
    /* istanbul ignore next */
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
    const environment = useWindow(theme);
    const {
      activeValue,
      inputValue,
      isExpanded,
      getTriggerProps,
      getHintProps,
      getInputProps,
      getLabelProps,
      getListboxProps,
      getMessageProps,
      getOptionProps,
      getOptGroupProps,
      getTagProps,
      removeSelection,
      selection
    } = useCombobox({
      idPrefix: props.id,
      triggerRef,
      inputRef,
      listboxRef,
      options,
      environment,
      hasHint,
      hasMessage,
      isAutocomplete,
      isEditable,
      isMultiselectable,
      disabled: isDisabled,
      inputValue: _inputValue,
      selectionValue,
      isExpanded: _isExpanded,
      defaultExpanded,
      activeIndex,
      defaultActiveIndex,
      onChange
    });
    const contextValue = useMemo(
      () => ({
        activeValue,
        getOptionProps,
        getOptGroupProps,
        getTagProps,
        isCompact,
        removeSelection
      }),
      [activeValue, getOptionProps, getOptGroupProps, getTagProps, isCompact, removeSelection]
    );
    const hasChevron = useMemo(
      () => !isBare && (isAutocomplete || !isEditable),
      [isAutocomplete, isBare, isEditable]
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
      isLabelHovered,
      isMultiselectable,
      maxHeight,
      focusInset,
      validation,
      ...(getTriggerProps({
        onFocus: () => {
          if (!isDisabled) {
            if (isEditable) {
              setIsInputHidden(false);
            }

            if (isMultiselectable) {
              setIsTagGroupExpanded(true);
            }
          }
        },
        onBlur: event => {
          if (event.relatedTarget === null || !triggerRef.current?.contains(event.relatedTarget)) {
            if (isEditable) {
              setIsInputHidden(true);
            }

            if (isMultiselectable) {
              setIsTagGroupExpanded(false);
            }
          }
        }
      }) as HTMLAttributes<HTMLDivElement>)
    };
    const inputProps = {
      'aria-invalid': validation === 'error' || validation === 'warning',
      hidden: isInputHidden,
      isBare,
      isCompact,
      isEditable,
      isMultiselectable,
      placeholder,
      ...(getInputProps({
        ...(_inputProps as IUseComboboxReturnValue['getInputProps'])
      }) as InputHTMLAttributes<HTMLInputElement>)
    };
    const listboxProps = getListboxProps({
      'aria-label': _listboxAriaLabel!
    }) as HTMLAttributes<HTMLUListElement>;

    useEffect(() => {
      // context callback
      if (!labelProps) {
        const _labelProps = getLabelProps({
          onMouseEnter: () => setIsLabelHovered(true),
          onMouseLeave: () => setIsLabelHovered(false)
        }) as LabelHTMLAttributes<HTMLLabelElement>;

        setLabelProps(_labelProps);
      }

      return () => labelProps && setLabelProps(undefined);
    }, [getLabelProps, labelProps, setLabelProps]);

    useEffect(() => {
      // context callback
      if (!hintProps) {
        const _hintProps = getHintProps() as HTMLAttributes<HTMLDivElement>;

        setHintProps(_hintProps);
      }

      return () => hintProps && setHintProps(undefined);
    }, [getHintProps, hintProps, setHintProps]);

    useEffect(() => {
      // context callback
      if (!messageProps) {
        const _messageProps = getMessageProps() as HTMLAttributes<HTMLDivElement>;

        setMessageProps(_messageProps);
      }

      return () => messageProps && setMessageProps(undefined);
    }, [getMessageProps, messageProps, setMessageProps]);

    return (
      <ComboboxContext.Provider value={contextValue}>
        <StyledCombobox
          isCompact={isCompact}
          tabIndex={-1} // HACK: otherwise screenreaders can't read the label
          {...props}
          ref={ref}
        >
          <StyledTrigger {...triggerProps}>
            <StyledContainer>
              {startIcon && (
                <StyledInputIcon $isLabelHovered={isLabelHovered} $isCompact={isCompact}>
                  {startIcon}
                </StyledInputIcon>
              )}
              <StyledInputGroup>
                {isMultiselectable && Array.isArray(selection) && (
                  <TagGroup
                    isDisabled={isDisabled}
                    isExpanded={isTagGroupExpanded}
                    maxTags={maxTags}
                    optionTagProps={optionTagProps}
                    selection={selection}
                  >
                    {selection.length > maxTags && (
                      <StyledTagsButton
                        disabled={isDisabled}
                        hidden={isTagGroupExpanded}
                        isCompact={isCompact}
                        tabIndex={-1}
                        type="button"
                      >
                        {(() => {
                          const value = selection.length - maxTags;

                          return renderExpandTags
                            ? renderExpandTags(value)
                            : expandTags?.replace('{{value}}', value.toString());
                        })()}
                      </StyledTagsButton>
                    )}
                  </TagGroup>
                )}
                <StyledValue
                  hidden={!isInputHidden}
                  isAutocomplete={isAutocomplete}
                  isBare={isBare}
                  isCompact={isCompact}
                  isDisabled={isDisabled}
                  isEditable={isEditable}
                  isMultiselectable={isMultiselectable}
                  isPlaceholder={!(inputValue || renderValue)}
                >
                  {renderValue ? renderValue({ selection, inputValue }) : inputValue || placeholder}
                </StyledValue>
                <StyledInput {...inputProps} />
              </StyledInputGroup>
              {(hasChevron || endIcon) && (
                <StyledInputIcon
                  $isCompact={isCompact}
                  $isEnd
                  $isLabelHovered={isLabelHovered}
                  $isRotated={hasChevron && isExpanded}
                >
                  {hasChevron ? <ChevronIcon /> : endIcon}
                </StyledInputIcon>
              )}
            </StyledContainer>
          </StyledTrigger>
          <Listbox
            appendToNode={listboxAppendToNode}
            isCompact={isCompact}
            isExpanded={isExpanded}
            maxHeight={listboxMaxHeight}
            minHeight={listboxMinHeight}
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
  activeIndex: PropTypes.number,
  defaultActiveIndex: PropTypes.number,
  defaultExpanded: PropTypes.bool,
  endIcon: PropTypes.any,
  focusInset: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputValue: PropTypes.string,
  isAutocomplete: PropTypes.bool,
  isBare: PropTypes.bool,
  isCompact: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEditable: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isMultiselectable: PropTypes.bool,
  listboxAppendToNode: PropTypes.any,
  listboxAriaLabel: PropTypes.string,
  listboxMaxHeight: PropTypes.string,
  listboxMinHeight: PropTypes.string,
  listboxZIndex: PropTypes.number,
  maxHeight: PropTypes.string,
  maxTags: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  renderExpandTags: PropTypes.func,
  renderValue: PropTypes.func,
  selectionValue: PropTypes.any,
  startIcon: PropTypes.any,
  validation: PropTypes.oneOf(VALIDATION)
};

Combobox.defaultProps = {
  isEditable: true,
  listboxMaxHeight: '400px',
  listboxZIndex: 1000,
  maxTags: MAX_TAGS
};
