/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useState, useMemo, useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useCombobox } from '@zendeskgarden/container-combobox';
import { DEFAULT_THEME, useWindow, useText } from '@zendeskgarden/react-theming';
import { VALIDATION } from '@zendeskgarden/react-forms';
import SvgChevronDownStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';
import { ComboboxContext } from '../../context/useComboboxContext.js';
import useFieldContext from '../../context/useFieldContext.js';
import { StyledCombobox } from '../../views/combobox/StyledCombobox.js';
import { StyledContainer } from '../../views/combobox/StyledContainer.js';
import '../../views/combobox/StyledField.js';
import '../../views/combobox/StyledFloatingListbox.js';
import '../../views/combobox/StyledHint.js';
import { StyledInput } from '../../views/combobox/StyledInput.js';
import { StyledInputGroup } from '../../views/combobox/StyledInputGroup.js';
import { StyledInputIcon } from '../../views/combobox/StyledInputIcon.js';
import '../../views/combobox/StyledLabel.js';
import '../../views/combobox/StyledListbox.js';
import '../../views/combobox/StyledListboxSeparator.js';
import '../../views/combobox/StyledMessage.js';
import '../../views/combobox/StyledOptGroup.js';
import '../../views/combobox/StyledOption.js';
import '../../views/combobox/StyledOptionContent.js';
import '../../views/combobox/StyledOptionIcon.js';
import '../../views/combobox/StyledOptionMeta.js';
import '../../views/combobox/StyledOptionSelectionIcon.js';
import '../../views/combobox/StyledOptionTypeIcon.js';
import '../../views/combobox/StyledTag.js';
import { StyledTagsButton } from '../../views/combobox/StyledTagsButton.js';
import { StyledTrigger } from '../../views/combobox/StyledTrigger.js';
import { StyledValue } from '../../views/combobox/StyledValue.js';
import '../../views/menu/StyledMenu.js';
import '../../views/menu/StyledFloatingMenu.js';
import '../../views/menu/StyledItem.js';
import '../../views/menu/StyledItemAnchor.js';
import '../../views/menu/StyledItemContent.js';
import '../../views/menu/StyledItemGroup.js';
import '../../views/menu/StyledItemIcon.js';
import '../../views/menu/StyledItemMeta.js';
import '../../views/menu/StyledItemTypeIcon.js';
import '../../views/menu/StyledSeparator.js';
import { Listbox } from './Listbox.js';
import { TagGroup } from './TagGroup.js';
import { toOptions } from './utils.js';

const MAX_TAGS = 4;
const Combobox = forwardRef(({
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
}, ref) => {
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
  const [optionTagProps, setOptionTagProps] = useState({});
  const options = useMemo(() => {
    const tagProps = {};
    const retVal = toOptions(children, tagProps);
    if (isMultiselectable) {
      setOptionTagProps(value => ({
        ...value,
        ...tagProps
      }));
    }
    return retVal;
  }, [children, isMultiselectable]);
  const triggerRef = useRef(null);
  const inputRef = useRef(null);
  const listboxRef = useRef(null);
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
  const contextValue = useMemo(() => ({
    activeValue,
    getOptionProps,
    getOptGroupProps,
    getTagProps,
    isCompact,
    removeSelection
  }), [activeValue, getOptionProps, getOptGroupProps, getTagProps, isCompact, removeSelection]);
  const hasChevron = useMemo(() => !isBare && (isAutocomplete || !isEditable), [isAutocomplete, isBare, isEditable]);
  const expandTags = useText(Combobox, {
    renderExpandTags
  }, 'renderExpandTags', '+ {{value}} more', isMultiselectable || false);
  const _listboxAriaLabel = useText(Combobox, {
    listboxAriaLabel
  }, 'listboxAriaLabel', 'Options');
  const triggerProps = getTriggerProps({
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
  });
  const inputProps = {
    'aria-invalid': validation === 'error' || validation === 'warning',
    hidden: isInputHidden,
    placeholder,
    ...getInputProps({
      ..._inputProps
    })
  };
  const listboxProps = getListboxProps({
    'aria-label': _listboxAriaLabel
  });
  useEffect(() => {
    if (!labelProps) {
      const _labelProps = getLabelProps({
        onMouseEnter: () => setIsLabelHovered(true),
        onMouseLeave: () => setIsLabelHovered(false)
      });
      setLabelProps(_labelProps);
    }
    return () => labelProps && setLabelProps(undefined);
  }, [getLabelProps, labelProps, setLabelProps]);
  useEffect(() => {
    if (!hintProps) {
      const _hintProps = getHintProps();
      setHintProps(_hintProps);
    }
    return () => hintProps && setHintProps(undefined);
  }, [getHintProps, hintProps, setHintProps]);
  useEffect(() => {
    if (!messageProps) {
      const _messageProps = getMessageProps();
      setMessageProps(_messageProps);
    }
    return () => messageProps && setMessageProps(undefined);
  }, [getMessageProps, messageProps, setMessageProps]);
  return React__default.createElement(ComboboxContext.Provider, {
    value: contextValue
  }, React__default.createElement(StyledCombobox, Object.assign({
    $isCompact: isCompact,
    tabIndex: -1
  }, props, {
    ref: ref
  }), React__default.createElement(StyledTrigger, Object.assign({
    $isAutocomplete: isAutocomplete,
    $isBare: isBare,
    $isCompact: isCompact,
    $isEditable: isEditable,
    $isLabelHovered: isLabelHovered,
    $isMultiselectable: isMultiselectable,
    $maxHeight: maxHeight,
    $focusInset: focusInset,
    $validation: validation
  }, triggerProps), React__default.createElement(StyledContainer, null, !!startIcon && React__default.createElement(StyledInputIcon, {
    $isLabelHovered: isLabelHovered,
    $isCompact: isCompact
  }, startIcon), React__default.createElement(StyledInputGroup, null, !!isMultiselectable && Array.isArray(selection) && React__default.createElement(TagGroup, {
    isDisabled: isDisabled,
    isExpanded: isTagGroupExpanded,
    maxTags: maxTags,
    optionTagProps: optionTagProps,
    selection: selection
  }, selection.length > maxTags && React__default.createElement(StyledTagsButton, {
    disabled: isDisabled,
    hidden: isTagGroupExpanded,
    $isCompact: isCompact,
    tabIndex: -1,
    type: "button"
  }, (() => {
    const value = selection.length - maxTags;
    return renderExpandTags ? renderExpandTags(value) : expandTags?.replace('{{value}}', value.toString());
  })())), React__default.createElement(StyledValue, {
    hidden: !isInputHidden,
    $isAutocomplete: isAutocomplete,
    $isBare: isBare,
    $isCompact: isCompact,
    $isDisabled: isDisabled,
    $isEditable: isEditable,
    $isMultiselectable: isMultiselectable,
    $isPlaceholder: !(inputValue || renderValue)
  }, renderValue ? renderValue({
    selection,
    inputValue
  }) : inputValue || placeholder), React__default.createElement(StyledInput, Object.assign({
    $isBare: isBare,
    $isCompact: isCompact,
    $isEditable: isEditable,
    $isMultiselectable: isMultiselectable
  }, inputProps))), !!(hasChevron || endIcon) && React__default.createElement(StyledInputIcon, {
    $isCompact: isCompact,
    $isEnd: true,
    $isLabelHovered: isLabelHovered,
    $isRotated: !!(hasChevron && isExpanded)
  }, hasChevron ? React__default.createElement(SvgChevronDownStroke, null) : endIcon))), React__default.createElement(Listbox, Object.assign({
    appendToNode: listboxAppendToNode,
    isCompact: isCompact,
    isExpanded: isExpanded,
    maxHeight: listboxMaxHeight,
    minHeight: listboxMinHeight,
    triggerRef: triggerRef,
    zIndex: listboxZIndex
  }, listboxProps), children)));
});
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

export { Combobox };
