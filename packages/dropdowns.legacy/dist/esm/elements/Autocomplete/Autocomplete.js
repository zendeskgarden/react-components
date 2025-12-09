/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import SvgChevronDownStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';
import { VALIDATION } from '@zendeskgarden/react-forms';
import { mergeRefs } from 'react-merge-refs';
import '../../styled/menu/StyledMenu.js';
import '../../styled/menu/StyledMenuWrapper.js';
import '../../styled/menu/StyledSeparator.js';
import '../../styled/items/StyledAddItem.js';
import '../../styled/items/StyledItem.js';
import '../../styled/items/StyledItemMeta.js';
import '../../styled/items/StyledNextItem.js';
import '../../styled/items/StyledNextIcon.js';
import '../../styled/items/StyledPreviousItem.js';
import '../../styled/items/StyledPreviousIcon.js';
import '../../styled/items/StyledItemIcon.js';
import '../../styled/items/header/StyledHeaderIcon.js';
import '../../styled/items/header/StyledHeaderItem.js';
import '../../styled/items/media/StyledMediaBody.js';
import '../../styled/items/media/StyledMediaFigure.js';
import '../../styled/items/media/StyledMediaItem.js';
import { StyledFauxInput } from '../../styled/select/StyledFauxInput.js';
import { StyledInput } from '../../styled/select/StyledInput.js';
import { StyledSelect } from '../../styled/select/StyledSelect.js';
import '../../styled/multiselect/StyledMultiselectInput.js';
import '../../styled/multiselect/StyledMultiselectItemsContainer.js';
import '../../styled/multiselect/StyledMultiselectItemWrapper.js';
import '../../styled/multiselect/StyledMultiselectMoreAnchor.js';
import useDropdownContext from '../../utils/useDropdownContext.js';
import useFieldContext from '../../utils/useFieldContext.js';

const Autocomplete = forwardRef(({
  children,
  inputRef: controlledInputRef,
  start,
  ...props
}, ref) => {
  const {
    popperReferenceElementRef,
    downshift: {
      getToggleButtonProps,
      getInputProps,
      getRootProps,
      isOpen
    },
    setDropdownType
  } = useDropdownContext();
  const {
    isLabelHovered
  } = useFieldContext();
  const inputRef = useRef();
  const triggerRef = useRef();
  const previousIsOpenRef = useRef(isOpen);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (inputRef.current && isOpen !== previousIsOpenRef.current) {
      inputRef.current.focus();
    }
    previousIsOpenRef.current = isOpen;
  }, [inputRef, isOpen]);
  const {
    type,
    onKeyDown,
    ...selectProps
  } = getToggleButtonProps(getRootProps({
    role: null,
    ...props,
    onKeyDown: e => {
      if (isOpen) {
        e.nativeEvent.preventDownshiftDefault = true;
      }
    },
    onMouseEnter: composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
    onMouseLeave: composeEventHandlers(props.onMouseLeave, () => setIsHovered(false))
  }));
  const onSelectKeyDown = composeEventHandlers(props.onKeyDown, onKeyDown);
  const isContainerHovered = isLabelHovered && !isOpen;
  const isContainerFocused = isOpen || isFocused;
  useEffect(() => {
    setDropdownType('autocomplete');
  }, [setDropdownType]);
  return React__default.createElement(Reference, null, ({
    ref: popperReference
  }) => React__default.createElement(StyledFauxInput, Object.assign({
    isHovered: isContainerHovered,
    isFocused: isContainerFocused,
    tabIndex: null,
    onKeyDown: onSelectKeyDown
  }, selectProps, {
    ref: selectRef => {
      popperReference(selectRef);
      mergeRefs([triggerRef, ref])(selectRef);
      popperReferenceElementRef.current = selectRef;
    }
  }), !!start && React__default.createElement(StyledFauxInput.StartIcon, {
    isHovered: isHovered || isLabelHovered && !isOpen,
    isFocused: isContainerFocused,
    isDisabled: props.disabled
  }, start), !isOpen && React__default.createElement(StyledSelect, null, children), React__default.createElement(StyledInput, getInputProps({
    $isHidden: !isOpen,
    disabled: props.disabled,
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: () => {
      setIsFocused(false);
    },
    onClick: e => {
      if (isOpen) {
        e.nativeEvent.preventDownshiftDefault = true;
      }
    },
    role: 'combobox',
    ref: mergeRefs([inputRef, controlledInputRef || null])
  })), !props.isBare && React__default.createElement(StyledFauxInput.EndIcon, {
    isHovered: isHovered || isLabelHovered && !isOpen,
    isFocused: isContainerFocused,
    isDisabled: props.disabled,
    isRotated: isOpen
  }, React__default.createElement(SvgChevronDownStroke, null))));
});
Autocomplete.displayName = 'Autocomplete';
Autocomplete.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};

export { Autocomplete };
