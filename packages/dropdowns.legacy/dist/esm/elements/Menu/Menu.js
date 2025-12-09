/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useRef, useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Popper } from 'react-popper';
import { PLACEMENT } from '../../types/index.js';
import { StyledMenu } from '../../styled/menu/StyledMenu.js';
import { StyledMenuWrapper } from '../../styled/menu/StyledMenuWrapper.js';
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
import '../../styled/select/StyledFauxInput.js';
import '../../styled/select/StyledInput.js';
import '../../styled/select/StyledSelect.js';
import '../../styled/multiselect/StyledMultiselectInput.js';
import '../../styled/multiselect/StyledMultiselectItemsContainer.js';
import '../../styled/multiselect/StyledMultiselectItemWrapper.js';
import '../../styled/multiselect/StyledMultiselectMoreAnchor.js';
import useDropdownContext from '../../utils/useDropdownContext.js';
import { getRtlPopperPlacement, getPopperPlacement } from '../../utils/garden-placements.js';
import { MenuContext } from '../../utils/useMenuContext.js';

const Menu = forwardRef((props, menuRef) => {
  const {
    appendToNode,
    children,
    eventsEnabled = true,
    hasArrow,
    isAnimated = true,
    isCompact,
    maxHeight = '400px',
    placement = 'bottom-start',
    popperModifiers,
    style: menuStyle,
    zIndex = 1000,
    ...other
  } = props;
  const {
    hasMenuRef,
    itemIndexRef,
    previousIndexRef,
    nextItemsHashRef,
    popperReferenceElementRef,
    itemSearchRegistry,
    downshift: {
      isOpen,
      getMenuProps
    }
  } = useDropdownContext();
  const scheduleUpdateRef = useRef(undefined);
  useEffect(() => {
    if (scheduleUpdateRef.current && isOpen) {
      scheduleUpdateRef.current();
    }
  });
  const [isVisible, setIsVisible] = useState(isOpen);
  useEffect(() => {
    let timeout;
    if (isOpen) {
      setIsVisible(true);
    } else if (isAnimated) {
      timeout = setTimeout(() => setIsVisible(false), 200);
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timeout);
  }, [isOpen, isAnimated]);
  const themeContext = useContext(ThemeContext);
  itemIndexRef.current = 0;
  nextItemsHashRef.current = {};
  previousIndexRef.current = undefined;
  itemSearchRegistry.current = [];
  const popperPlacement = themeContext.rtl ? getRtlPopperPlacement(placement) : getPopperPlacement(placement);
  return  React__default.createElement(MenuContext.Provider, {
    value: {
      itemIndexRef,
      isCompact
    }
  }, React__default.createElement(Popper, {
    placement: popperPlacement,
    modifiers: popperModifiers
    ,
    eventsEnabled: !!(isOpen && eventsEnabled)
  }, _ref => {
    let {
      ref,
      style,
      scheduleUpdate,
      placement: currentPlacement
    } = _ref;
    let computedStyle = menuStyle;
    scheduleUpdateRef.current = scheduleUpdate;
    if ((isOpen || isVisible) && popperReferenceElementRef.current && popperReferenceElementRef.current.getBoundingClientRect) {
      computedStyle = {
        width: popperReferenceElementRef.current.getBoundingClientRect().width,
        ...menuStyle
      };
    }
    const menuProps = getMenuProps({
      role: hasMenuRef.current ? 'menu' : 'listbox',
      ...other
    });
    const sharedProps = {
      $hasArrow: hasArrow,
      $isAnimated: isAnimated ? isOpen || isVisible : false,
      $isCompact: isCompact,
      $maxHeight: maxHeight,
      $placement: currentPlacement
    };
    const menu = React__default.createElement(StyledMenuWrapper, Object.assign({
      ref: isOpen ? ref : undefined,
      $isHidden: !isOpen,
      $zIndex: zIndex,
      style: style
    }, sharedProps), React__default.createElement(StyledMenu, Object.assign({
      ref: menuRef,
      style: computedStyle
    }, sharedProps, menuProps), !!(isOpen || isVisible) && children));
    return appendToNode ? createPortal(menu, appendToNode) : menu;
  }));
});
Menu.displayName = 'Menu';
Menu.propTypes = {
  popperModifiers: PropTypes.any,
  eventsEnabled: PropTypes.bool,
  zIndex: PropTypes.number,
  style: PropTypes.object,
  placement: PropTypes.oneOf(PLACEMENT),
  isAnimated: PropTypes.bool,
  isCompact: PropTypes.bool,
  hasArrow: PropTypes.bool,
  maxHeight: PropTypes.string
};

export { Menu };
