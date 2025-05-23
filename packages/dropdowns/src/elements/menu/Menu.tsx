/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { RefObject, forwardRef, useContext, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { useMenu } from '@zendeskgarden/container-menu';
import { DEFAULT_THEME, useWindow } from '@zendeskgarden/react-theming';
import { Button, IButtonProps } from '@zendeskgarden/react-buttons';
import { IMenuProps, PLACEMENT } from '../../types';
import { MenuContext } from '../../context/useMenuContext';
import { toItems } from './utils';
import { MenuList } from './MenuList';
import ChevronIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const Menu = forwardRef<HTMLUListElement, IMenuProps>(
  (
    {
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
      ...props
    },
    ref
  ) => {
    const triggerRef = useRef(null);
    const menuRef = useRef(null);
    const items = toItems(children);
    /* istanbul ignore next */
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
    } = _buttonProps as IButtonProps & { ref: RefObject<HTMLButtonElement> };

    const triggerProps: IButtonProps & { ref: RefObject<HTMLButtonElement> } = {
      ...(isCompact && { size: 'small' }),
      ...buttonProps,
      ...getTriggerProps({
        type: 'button',
        onClick,
        onKeyDown,
        disabled
      }),
      ref: mergeRefs([triggerRef, _ref]) as unknown as RefObject<HTMLButtonElement>
    };

    const trigger =
      typeof button === 'function' ? (
        button(triggerProps)
      ) : (
        <Button {...triggerProps}>
          {button}
          <Button.EndIcon isRotated={isExpanded}>
            <ChevronIcon />
          </Button.EndIcon>
        </Button>
      );

    const contextValue = useMemo(
      () => ({
        isCompact,
        focusedValue,
        getAnchorProps,
        getItemProps,
        getItemGroupProps,
        getSeparatorProps
      }),
      [focusedValue, getAnchorProps, getItemGroupProps, getItemProps, getSeparatorProps, isCompact]
    );

    return (
      <MenuContext.Provider value={contextValue}>
        {trigger}
        <MenuList
          {...props}
          {...getMenuProps({ onMouseLeave })}
          ref={mergeRefs([menuRef, ref])}
          isCompact={isCompact}
          isExpanded={isExpanded}
          triggerRef={triggerRef}
        >
          {children}
        </MenuList>
      </MenuContext.Provider>
    );
  }
);

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

Menu.defaultProps = {
  maxHeight: '400px',
  placement: 'bottom-start',
  zIndex: 1000
};
