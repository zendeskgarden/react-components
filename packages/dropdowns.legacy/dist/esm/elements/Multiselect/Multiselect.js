/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useRef, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Reference } from 'react-popper';
import { useSelection } from '@zendeskgarden/container-selection';
import { composeEventHandlers, KEY_CODES } from '@zendeskgarden/container-utilities';
import { useDocument } from '@zendeskgarden/react-theming';
import SvgChevronDownStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';
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
import '../../styled/select/StyledInput.js';
import '../../styled/select/StyledSelect.js';
import { StyledMultiselectInput } from '../../styled/multiselect/StyledMultiselectInput.js';
import { StyledMultiselectItemsContainer } from '../../styled/multiselect/StyledMultiselectItemsContainer.js';
import { StyledMultiselectItemWrapper } from '../../styled/multiselect/StyledMultiselectItemWrapper.js';
import { StyledMultiselectMoreAnchor } from '../../styled/multiselect/StyledMultiselectMoreAnchor.js';
import useDropdownContext from '../../utils/useDropdownContext.js';
import useFieldContext from '../../utils/useFieldContext.js';
import { REMOVE_ITEM_STATE_TYPE } from '../Dropdown/Dropdown.js';

const Multiselect = React__default.forwardRef((_ref, ref) => {
  let {
    renderItem,
    placeholder,
    maxItems = 4,
    renderShowMore,
    inputRef: externalInputRef = null,
    start,
    onKeyDown,
    ...props
  } = _ref;
  const {
    popperReferenceElementRef,
    selectedItems = [],
    containsMultiselectRef,
    previousIndexRef,
    downshift: {
      getToggleButtonProps,
      getRootProps,
      getInputProps,
      isOpen,
      closeMenu,
      inputValue,
      setState: setDownshiftState,
      itemToString
    },
    setDropdownType
  } = useDropdownContext();
  const {
    isLabelHovered
  } = useFieldContext();
  const inputRef = useRef();
  const triggerRef = useRef();
  const blurTimeoutRef = useRef();
  const previousIsOpenRef = useRef(undefined);
  const previousIsFocusedRef = useRef(undefined);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [focusedItem, setFocusedItem] = useState(undefined);
  const themeContext = useContext(ThemeContext);
  const environment = useDocument(themeContext);
  const {
    getContainerProps,
    getItemProps
  } = useSelection({
    rtl: themeContext.rtl,
    focusedItem,
    selectedItem: undefined,
    onFocus: item => {
      setFocusedItem(item);
    }
  });
  useEffect(() => {
    containsMultiselectRef.current = true;
    const tempRef = blurTimeoutRef;
    return () => {
      clearTimeout(tempRef.current);
    };
  }, []);
  useEffect(() => {
    if (inputRef.current) {
      if (isOpen && !previousIsOpenRef.current) {
        inputRef.current.focus();
      } else if (isFocused && !previousIsFocusedRef.current && focusedItem === undefined) {
        inputRef.current.focus();
      }
    }
    previousIsOpenRef.current = isOpen;
    previousIsFocusedRef.current = isFocused;
  }, [isOpen, inputRef, isFocused, focusedItem]);
  useEffect(() => {
    if (focusedItem !== undefined && isOpen) {
      closeMenu();
    }
  }, [focusedItem, isOpen, closeMenu]);
  const {
    type,
    ...selectProps
  } = getToggleButtonProps(getRootProps({
    tabIndex: props.disabled ? undefined : -1,
    onKeyDown: composeEventHandlers(onKeyDown, e => {
      if (isOpen) {
        e.nativeEvent.preventDownshiftDefault = true;
      } else if (!inputValue && e.keyCode === KEY_CODES.HOME) {
        setFocusedItem(selectedItems[0]);
        e.preventDefault();
      }
    }),
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: e => {
      const currentTarget = e.currentTarget;
      blurTimeoutRef.current = setTimeout(() => {
        if (environment && !currentTarget.contains(environment.activeElement)) {
          setIsFocused(false);
        }
      }, 0);
    },
    onMouseEnter: composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
    onMouseLeave: composeEventHandlers(props.onMouseLeave, () => setIsHovered(false)),
    role: null,
    ...props
  }));
  const renderSelectableItem = useCallback((item, index) => {
    const removeValue = () => {
      setDownshiftState({
        type: REMOVE_ITEM_STATE_TYPE,
        selectedItem: item
      });
      inputRef.current && inputRef.current.focus();
    };
    const renderedItem = renderItem({
      value: item,
      removeValue
    });
    const focusRef = React__default.createRef();
    const clonedChild = React__default.cloneElement(renderedItem, {
      ...getItemProps({
        item,
        focusRef,
        onKeyDown: e => {
          if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
            e.preventDefault();
            removeValue();
          }
          if (e.keyCode === KEY_CODES.END && !inputValue) {
            inputRef.current && inputRef.current.focus();
            e.preventDefault();
          }
          if (themeContext.rtl) {
            if (e.keyCode === KEY_CODES.RIGHT && index === 0) {
              e.preventDefault();
            }
            if (e.keyCode === KEY_CODES.LEFT && index === selectedItems.length - 1) {
              e.preventDefault();
              inputRef.current && inputRef.current.focus();
            }
          } else {
            if (e.keyCode === KEY_CODES.LEFT && index === 0) {
              e.preventDefault();
            }
            if (e.keyCode === KEY_CODES.RIGHT && index === selectedItems.length - 1) {
              e.preventDefault();
              inputRef.current && inputRef.current.focus();
            }
          }
        },
        onClick: e => {
          e.nativeEvent.preventDownshiftDefault = true;
        },
        tabIndex: -1
      }),
      size: props.isCompact ? 'medium' : 'large'
    });
    const key = `${itemToString(item)}-${index}`;
    return React__default.createElement(StyledMultiselectItemWrapper, {
      key: key
    }, clonedChild);
  }, [getItemProps, inputValue, renderItem, setDownshiftState, itemToString, selectedItems, props, inputRef, themeContext.rtl]);
  const items = useMemo(() => {
    const itemValues = selectedItems || [];
    const output = [];
    for (let x = 0; x < itemValues.length; x++) {
      const item = itemValues[x];
      if (x < maxItems) {
        if (props.disabled) {
          const renderedItem = React__default.cloneElement(renderItem({
            value: item,
            removeValue: () => {
              return undefined;
            }
          }), {
            size: props.isCompact ? 'medium' : 'large'
          });
          output.push(React__default.createElement(StyledMultiselectItemWrapper, {
            key: x
          }, renderedItem));
        } else {
          output.push(renderSelectableItem(item, x));
        }
      } else if (!isFocused && !inputValue || props.disabled) {
        output.push(React__default.createElement(StyledMultiselectItemWrapper, {
          key: "more-anchor"
        }, React__default.createElement(StyledMultiselectMoreAnchor, {
          $isCompact: props.isCompact,
          $isDisabled: props.disabled
        }, renderShowMore ? renderShowMore(itemValues.length - x) : `+ ${itemValues.length - x} more`)));
        break;
      } else {
        output.push(renderSelectableItem(item, x));
      }
    }
    return output;
  }, [isFocused, props.disabled, renderSelectableItem, selectedItems, renderItem, inputValue, maxItems, renderShowMore, props.isCompact]);
  const isContainerHovered = isLabelHovered && !isOpen;
  const isContainerFocused = isOpen || isFocused;
  useEffect(() => {
    setDropdownType('multiselect');
  }, [setDropdownType]);
  return React__default.createElement(Reference, null, _ref2 => {
    let {
      ref: popperReference
    } = _ref2;
    return React__default.createElement(StyledFauxInput, getContainerProps({
      ...selectProps,
      isHovered: isContainerHovered,
      isFocused: isContainerFocused,
      ref: selectRef => {
        popperReference(selectRef);
        mergeRefs([triggerRef, popperReferenceElementRef, ref])(selectRef);
      }
    }), !!start && React__default.createElement(StyledFauxInput.StartIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled
    }, start), React__default.createElement(StyledMultiselectItemsContainer, {
      $isBare: props.isBare,
      $isCompact: props.isCompact
    }, items, React__default.createElement(StyledMultiselectInput, getInputProps({
      disabled: props.disabled,
      onFocus: () => {
        setFocusedItem(undefined);
      },
      onClick: e => {
        if (inputValue && inputValue.length > 0 && isOpen) {
          e.nativeEvent.preventDownshiftDefault = true;
        }
      },
      onKeyDown: e => {
        if (!inputValue) {
          if (themeContext.rtl && e.keyCode === KEY_CODES.RIGHT && selectedItems.length > 0 && previousIndexRef.current === undefined) {
            setFocusedItem(selectedItems[selectedItems.length - 1]);
          } else if (!themeContext.rtl && e.keyCode === KEY_CODES.LEFT && selectedItems.length > 0 && previousIndexRef.current === undefined) {
            setFocusedItem(selectedItems[selectedItems.length - 1]);
          } else if (e.keyCode === KEY_CODES.BACKSPACE && selectedItems.length > 0) {
            setDownshiftState({
              type: REMOVE_ITEM_STATE_TYPE,
              selectedItem: selectedItems[selectedItems.length - 1]
            });
            e.nativeEvent.preventDownshiftDefault = true;
            e.preventDefault();
            e.stopPropagation();
          }
        }
      },
      $isVisible: isFocused || inputValue || selectedItems.length === 0,
      isCompact: props.isCompact,
      role: 'combobox',
      ref: mergeRefs([inputRef, externalInputRef]),
      placeholder: selectedItems.length === 0 ? placeholder : undefined
    }))), !props.isBare && React__default.createElement(StyledFauxInput.EndIcon, {
      isHovered: isHovered || isLabelHovered && !isOpen,
      isFocused: isContainerFocused,
      isDisabled: props.disabled,
      isRotated: isOpen
    }, React__default.createElement(SvgChevronDownStroke, null)));
  });
});
Multiselect.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  focusInset: PropTypes.bool,
  renderItem: PropTypes.func.isRequired,
  maxItems: PropTypes.number,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};
Multiselect.displayName = 'Multiselect';

export { Multiselect };
