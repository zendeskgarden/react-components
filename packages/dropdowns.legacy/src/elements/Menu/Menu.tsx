/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useState, useContext, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Popper } from 'react-popper';
import { IMenuProps, PLACEMENT } from '../../types';
import { StyledMenu, StyledMenuWrapper } from '../../styled/index';
import useDropdownContext from '../../utils/useDropdownContext';
import { getPopperPlacement, getRtlPopperPlacement } from '../../utils/garden-placements';
import { MenuContext } from '../../utils/useMenuContext';

/**
 * @deprecated use `@zendeskgarden/react-dropdowns` Menu instead
 *
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const Menu = forwardRef<HTMLUListElement, IMenuProps>((props, menuRef) => {
  const {
    placement,
    popperModifiers,
    eventsEnabled,
    isAnimated,
    maxHeight,
    style: menuStyle,
    zIndex,
    isCompact,
    children,
    appendToNode,
    ...otherProps
  } = props;
  const {
    hasMenuRef,
    itemIndexRef,
    previousIndexRef,
    nextItemsHashRef,
    popperReferenceElementRef,
    itemSearchRegistry,
    downshift: { isOpen, getMenuProps }
  } = useDropdownContext();
  const scheduleUpdateRef = useRef<(() => void) | undefined>(undefined);

  useEffect(() => {
    /**
     * Recalculate popper placement while open to allow animations to complete.
     * This must be ran every render to allow for the number of items to change
     * and still be placed correctly.
     **/
    if (scheduleUpdateRef.current && isOpen) {
      scheduleUpdateRef.current();
    }
  });

  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    let timeout: any;

    if (isOpen) {
      setIsVisible(true);
    } else if (isAnimated) {
      // Match the duration of the menu fade out transition.
      timeout = setTimeout(() => setIsVisible(false), 200);
    } else {
      setIsVisible(false);
    }

    return () => clearTimeout(timeout);
  }, [isOpen, isAnimated]);

  const themeContext = useContext(ThemeContext);

  // Reset Downshift refs on every render
  itemIndexRef.current = 0;
  nextItemsHashRef.current = {};
  previousIndexRef.current = undefined;
  itemSearchRegistry.current = [];

  const popperPlacement = themeContext.rtl
    ? getRtlPopperPlacement(placement!)
    : getPopperPlacement(placement!);

  return (
    /* eslint-disable react/jsx-no-constructed-context-values */
    <MenuContext.Provider value={{ itemIndexRef, isCompact }}>
      <Popper
        placement={popperPlacement as any}
        modifiers={popperModifiers}
        // Disable position updating on scroll events while menu is closed
        eventsEnabled={!!(isOpen && eventsEnabled)}
      >
        {({ ref, style, scheduleUpdate, placement: currentPlacement }) => {
          let computedStyle = menuStyle;

          scheduleUpdateRef.current = scheduleUpdate;

          // Calculate custom width if ref is provided from Select or Autocomplete
          if (
            (isOpen || isVisible) &&
            popperReferenceElementRef.current &&
            popperReferenceElementRef.current.getBoundingClientRect
          ) {
            computedStyle = {
              width: popperReferenceElementRef.current.getBoundingClientRect().width,
              ...menuStyle
            };
          }

          const menuProps = getMenuProps({
            role: hasMenuRef.current ? 'menu' : 'listbox',
            placement: currentPlacement,
            isAnimated: isAnimated && (isOpen || isVisible),
            ...otherProps
          } as any);

          const menu = (
            <StyledMenuWrapper
              ref={isOpen ? ref : undefined}
              hasArrow={menuProps.hasArrow}
              placement={menuProps.placement}
              style={style}
              isHidden={!isOpen}
              isAnimated={menuProps.isAnimated}
              zIndex={zIndex}
            >
              <StyledMenu
                ref={menuRef}
                isCompact={isCompact}
                maxHeight={maxHeight}
                style={computedStyle}
                {...menuProps}
              >
                {!!(isOpen || isVisible) && children}
              </StyledMenu>
            </StyledMenuWrapper>
          );

          return appendToNode ? createPortal(menu, appendToNode) : menu;
        }}
      </Popper>
    </MenuContext.Provider>
  );
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

Menu.defaultProps = {
  placement: 'bottom-start',
  isAnimated: true,
  eventsEnabled: true,
  maxHeight: '400px',
  zIndex: 1000
};
