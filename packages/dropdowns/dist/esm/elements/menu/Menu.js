/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useRef, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { useMenu } from '@zendeskgarden/container-menu';
import { DEFAULT_THEME, useWindow } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { PLACEMENT } from '../../types/index.js';
import { MenuContext } from '../../context/useMenuContext.js';
import { toItems } from './utils.js';
import { MenuList } from './MenuList.js';
import SvgChevronDownStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';

const Menu = forwardRef((_ref2, ref) => {
  let {
    button,
    buttonProps: _buttonProps = {},
    children,
    isCompact,
    focusedValue: _focusedValue,
    defaultFocusedValue,
    defaultExpanded,
    isExpanded: _isExpanded,
    restoreFocus,
    selectedItems,
    onChange,
    onMouseLeave,
    maxHeight = '400px',
    placement = 'bottom-start',
    zIndex = 1000,
    ...props
  } = _ref2;
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const items = toItems(children);
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const environment = useWindow(theme);
  const {
    isExpanded,
    focusedValue,
    getTriggerProps,
    getMenuProps,
    getAnchorProps,
    getItemProps,
    getItemGroupProps,
    getSeparatorProps
  } = useMenu({
    rtl: theme.rtl,
    environment,
    defaultFocusedValue,
    focusedValue: _focusedValue,
    defaultExpanded,
    isExpanded: _isExpanded,
    restoreFocus,
    selectedItems,
    items,
    menuRef,
    triggerRef,
    onChange
  });
  const {
    onClick,
    onKeyDown,
    disabled,
    ref: _ref,
    ...buttonProps
  } = _buttonProps;
  const triggerProps = {
    ...(isCompact && {
      size: 'small'
    }),
    ...buttonProps,
    ...getTriggerProps({
      type: 'button',
      onClick,
      onKeyDown,
      disabled
    }),
    ref: mergeRefs([triggerRef, _ref])
  };
  const trigger = typeof button === 'function' ? button(triggerProps) : React__default.createElement(Button, triggerProps, button, React__default.createElement(Button.EndIcon, {
    isRotated: isExpanded
  }, React__default.createElement(SvgChevronDownStroke, null)));
  const contextValue = useMemo(() => ({
    isCompact,
    focusedValue,
    getAnchorProps,
    getItemProps,
    getItemGroupProps,
    getSeparatorProps
  }), [focusedValue, getAnchorProps, getItemGroupProps, getItemProps, getSeparatorProps, isCompact]);
  return React__default.createElement(MenuContext.Provider, {
    value: contextValue
  }, trigger, React__default.createElement(MenuList, Object.assign({}, props, getMenuProps({
    onMouseLeave
  }), {
    ref: mergeRefs([menuRef, ref]),
    isCompact: isCompact,
    isExpanded: isExpanded,
    triggerRef: triggerRef,
    maxHeight: maxHeight,
    placement: placement,
    zIndex: zIndex
  }), children));
});
Menu.displayName = 'Menu';
Menu.propTypes = {
  appendToNode: PropTypes.any,
  button: PropTypes.any.isRequired,
  buttonProps: PropTypes.object,
  defaultExpanded: PropTypes.bool,
  defaultFocusedValue: PropTypes.string,
  fallbackPlacements: PropTypes.arrayOf(PropTypes.any),
  focusedValue: PropTypes.string,
  hasArrow: PropTypes.bool,
  isCompact: PropTypes.bool,
  isExpanded: PropTypes.bool,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  onChange: PropTypes.func,
  placement: PropTypes.oneOf(PLACEMENT),
  restoreFocus: PropTypes.bool,
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  zIndex: PropTypes.number
};

export { Menu };
