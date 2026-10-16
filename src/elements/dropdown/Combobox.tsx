/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IUseComboboxReturnValue, useCombobox } from '@zendeskgarden/container-combobox';
import PropTypes from 'prop-types';
import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { ThemeContext } from 'styled-components';
import ChevronIcon from 'svg-icons-legacy/src/16/chevron-down-stroke.svg';

import { ComboboxProvider } from '../../context/dropdown/ComboboxContext';
import { useFieldContext } from '../../hooks/dropdown/useFieldContext';
import DEFAULT_THEME from '../../theming/elements/theme';
import { useText } from '../../theming/utils/useText';
import { useWindow } from '../../theming/utils/useWindow';
import { IComboboxProps, IOptionProps, VALIDATION } from '../../types/elements';
import { StyledCombobox } from '../../views/dropdown/StyledCombobox';
import { StyledContainer } from '../../views/dropdown/StyledContainer';
import { StyledInput } from '../../views/dropdown/StyledInput';
import { StyledInputGroup } from '../../views/dropdown/StyledInputGroup';
import { StyledInputIcon } from '../../views/dropdown/StyledInputIcon';
import { StyledTagsButton } from '../../views/dropdown/StyledTagsButton';
import { StyledTrigger } from '../../views/dropdown/StyledTrigger';
import { StyledValue } from '../../views/dropdown/StyledValue';
import { COMPONENT_IDS } from '../utils';
import { toOptions } from './comboboxUtils';
import { Listbox } from './Listbox';
import { TagGroup } from './TagGroup';

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
      isEditable = true,
      isExpanded: _isExpanded,
      isMultiselectable,
      listboxAppendToNode,
      listboxAriaLabel,
      listboxMaxHeight = '400px',
      listboxMinHeight,
      listboxZIndex = 1000,
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
    const blurTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
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
      triggerRef: triggerRef as RefObject<HTMLElement>,
      inputRef: inputRef as RefObject<HTMLInputElement>,
      listboxRef: listboxRef as RefObject<HTMLElement>,
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
    const triggerProps = getTriggerProps({
      onFocus: () => {
        if (!isDisabled) {
          // Focus (re-)entered the trigger; cancel any pending blur response
          clearTimeout(blurTimeoutRef.current);

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
          /**
           * Defer the blur response to the next task. `relatedTarget` is `null`
           * for transient blurs — e.g. when Floating UI repositions the listbox
           * at high browser zoom — so re-check where focus actually landed before
           * hiding the input. Hiding an input that still owns focus fires a
           * follow-up blur that downstream state (`useCombobox`) treats as a
           * listbox close.
           */
          clearTimeout(blurTimeoutRef.current);

          blurTimeoutRef.current = setTimeout(() => {
            const activeElement = triggerRef.current?.ownerDocument.activeElement ?? null;
            const isFocusContained =
              !!triggerRef.current?.contains(activeElement) ||
              !!listboxRef.current?.contains(activeElement);

            if (!isFocusContained) {
              if (isEditable) {
                setIsInputHidden(true);
              }

              if (isMultiselectable) {
                setIsTagGroupExpanded(false);
              }
            }
          }, 0);
        }
      }
    }) as HTMLAttributes<HTMLDivElement>;

    const inputProps = {
      'aria-invalid': validation === 'error' || validation === 'warning',
      hidden: isInputHidden,
      placeholder,
      ...(getInputProps({
        ...(_inputProps as IUseComboboxReturnValue['getInputProps'])
      }) as InputHTMLAttributes<HTMLInputElement>)
    };
    const listboxProps = getListboxProps({
      'aria-label': _listboxAriaLabel!
    }) as HTMLAttributes<HTMLUListElement>;

    useEffect(() => {
      // Cancel a pending deferred blur response on unmount
      return () => clearTimeout(blurTimeoutRef.current);
    }, []);

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

    // Derive a stable primitive from selection so the effect only fires when values actually change,
    // not when the selection object/array reference changes on re-render.
    const selectionFingerprint = Array.isArray(selection)
      ? selection.map(o => o.value).join('\0')
      : (selection?.value ?? null);

    const prevSelectionRef = useRef(selectionFingerprint);

    useEffect(() => {
      const selectionChanged = prevSelectionRef.current !== selectionFingerprint;

      prevSelectionRef.current = selectionFingerprint;

      // Only a growing tag list can push the input out of view. Single-select
      // inputs never move on selection. Non-editable inputs are display: none;
      // TagGroup scrolls the last tag in that case.
      if (selectionChanged && isMultiselectable && isEditable) {
        inputRef.current?.scrollIntoView?.({ block: 'nearest' });
      }
    }, [isEditable, isMultiselectable, selectionFingerprint]);

    return (
      <ComboboxProvider value={contextValue}>
        <StyledCombobox
          $isCompact={isCompact}
          tabIndex={-1} // HACK: otherwise screenreaders can't read the label
          {...props}
          data-garden-id={COMPONENT_IDS['dropdowns.combobox']}
          data-garden-version={PACKAGE_VERSION}
          ref={ref}
        >
          <StyledTrigger
            $isAutocomplete={isAutocomplete}
            $isBare={isBare}
            $isCompact={isCompact}
            $isEditable={isEditable}
            $isLabelHovered={isLabelHovered}
            $isMultiselectable={isMultiselectable}
            $maxHeight={maxHeight}
            $focusInset={focusInset}
            $validation={validation}
            {...triggerProps}
            data-garden-id={COMPONENT_IDS['dropdowns.combobox.trigger']}
            data-garden-version={PACKAGE_VERSION}
          >
            <StyledContainer
              data-garden-id={COMPONENT_IDS['dropdowns.combobox.container']}
              data-garden-version={PACKAGE_VERSION}
            >
              {!!startIcon && (
                <StyledInputIcon
                  $isLabelHovered={isLabelHovered}
                  $isCompact={isCompact}
                  data-garden-id={COMPONENT_IDS['dropdowns.combobox.input_icon']}
                  data-garden-version={PACKAGE_VERSION}
                >
                  {startIcon}
                </StyledInputIcon>
              )}
              <StyledInputGroup
                data-garden-id={COMPONENT_IDS['dropdowns.combobox.input_group']}
                data-garden-version={PACKAGE_VERSION}
              >
                {!!isMultiselectable && Array.isArray(selection) && (
                  <TagGroup
                    isDisabled={isDisabled}
                    isEditable={isEditable}
                    isExpanded={isTagGroupExpanded}
                    maxTags={maxTags}
                    optionTagProps={optionTagProps}
                    selection={selection}
                  >
                    {selection.length > maxTags && (
                      <StyledTagsButton
                        $isCompact={isCompact}
                        disabled={isDisabled}
                        hidden={isTagGroupExpanded}
                        onMouseDown={() => {
                          triggerRef.current?.focus();
                        }}
                        tabIndex={-1}
                        type="button"
                        as="button"
                        data-garden-id={COMPONENT_IDS['dropdowns.combobox.tags_button']}
                        data-garden-version={PACKAGE_VERSION}
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
                  $isAutocomplete={isAutocomplete}
                  $isBare={isBare}
                  $isCompact={isCompact}
                  $isDisabled={isDisabled}
                  $isEditable={isEditable}
                  $isMultiselectable={isMultiselectable}
                  $isPlaceholder={!(inputValue || renderValue)}
                  data-garden-id={COMPONENT_IDS['dropdowns.combobox.value']}
                  data-garden-version={PACKAGE_VERSION}
                >
                  {renderValue ? renderValue({ selection, inputValue }) : inputValue || placeholder}
                </StyledValue>
                <StyledInput
                  $isBare={isBare}
                  $isCompact={isCompact}
                  $isEditable={isEditable}
                  $isMultiselectable={isMultiselectable}
                  {...inputProps}
                  data-garden-id={COMPONENT_IDS['dropdowns.combobox.input']}
                  data-garden-version={PACKAGE_VERSION}
                />
              </StyledInputGroup>
              {!!(hasChevron || endIcon) && (
                <StyledInputIcon
                  $isCompact={isCompact}
                  $isEnd
                  $isLabelHovered={isLabelHovered}
                  $isRotated={!!(hasChevron && isExpanded)}
                  data-garden-id={COMPONENT_IDS['dropdowns.combobox.input_icon']}
                  data-garden-version={PACKAGE_VERSION}
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
            triggerRef={triggerRef as RefObject<HTMLElement>}
            zIndex={listboxZIndex}
            {...listboxProps}
          >
            {children}
          </Listbox>
        </StyledCombobox>
      </ComboboxProvider>
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
