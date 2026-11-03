/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useMenu } from '@zendeskgarden/container-menu';
import ChevronIcon from '@zendeskgarden/svg-icons/src/chevron-down.svg';
import PropTypes from 'prop-types';
import { RefObject, forwardRef, useMemo, useRef } from 'react';

import { MenuProvider } from '../../context/dropdown/MenuContext';
import { Button } from '../../elements/button/Button';
import { useDocument } from '../../theming/utils/useDocument';
import { useGardenTheme } from '../../theming/utils/useGardenTheme';
import { useWindow } from '../../theming/utils/useWindow';
import { DROPDOWN_PLACEMENT, IButtonProps, IMenuProps } from '../../types/elements';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { MenuList } from './MenuList';
import { toItems } from './menuUtils';

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
      maxHeight = '400px',
      placement = 'bottom-start',
      zIndex = 1000,
      ...props
    },
    ref
  ) => {
    const triggerRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLElement>(null);
    const items = toItems(children);
    /* istanbul ignore next */
    const theme = useGardenTheme();
    const _window = useWindow(theme);
    const _document = useDocument(theme);

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
      document: _document,
      window: _window,
      defaultFocusedValue,
      focusedValue: _focusedValue,
      defaultExpanded,
      isExpanded: _isExpanded,
      restoreFocus,
      selectedItems,
      items,
      menuRef: menuRef as RefObject<HTMLElement>,
      triggerRef: triggerRef as RefObject<HTMLElement>,
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
      <MenuProvider value={contextValue}>
        {trigger}
        <MenuList
          {...props}
          {...getMenuProps({ onMouseLeave })}
          ref={mergeRefs([menuRef, ref])}
          isCompact={isCompact}
          isExpanded={isExpanded}
          triggerRef={triggerRef as RefObject<HTMLElement>}
          maxHeight={maxHeight}
          placement={placement}
          zIndex={zIndex}
        >
          {children}
        </MenuList>
      </MenuProvider>
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
  placement: PropTypes.oneOf(DROPDOWN_PLACEMENT),
  restoreFocus: PropTypes.bool,
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  zIndex: PropTypes.number
};
