/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, HTMLAttributes, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Popper } from 'react-popper';
import { Modifiers } from 'popper.js';
import { StyledMenu, StyledMenuWrapper } from '../../styled/index';
import useDropdownContext from '../../utils/useDropdownContext';
import {
  GARDEN_PLACEMENT,
  getPopperPlacement,
  getRtlPopperPlacement
} from '../../utils/garden-placements';
import { MenuContext } from '../../utils/useMenuContext';

export interface IMenuProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Passes configuration options to the [Popper instance](https://popper.js.org/docs/v2/modifiers/)
   */
  popperModifiers?: Modifiers;
  /**
   * Allows the menu to reposition during browser resize events
   */
  eventsEnabled?: boolean;
  /**
   * Sets the `z-index` of the menu
   */
  zIndex?: number;
  /**
   * Adjusts the placement of the menu
   */
  placement?: GARDEN_PLACEMENT;
  /**
   * Animates the menu
   */
  isAnimated?: boolean;
  /**
   * Applies compact styling
   */
  isCompact?: boolean;
  /**
   * Attaches an arrow that points towards the menu trigger
   */
  hasArrow?: boolean;
  /**
   * Sets the `max-height` of the menu
   */
  maxHeight?: string;
}

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const Menu: React.FunctionComponent<IMenuProps> = props => {
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

  const [isVisible, setVisible] = useState(isOpen);

  useEffect(() => {
    let timeout: any;

    if (isOpen) {
      setVisible(true);
    } else if (isAnimated) {
      // Match the duration of the menu fade out transition.
      timeout = setTimeout(() => setVisible(false), 200);
    } else {
      setVisible(false);
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
        eventsEnabled={isOpen && eventsEnabled}
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

          return (
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
                isCompact={isCompact}
                maxHeight={maxHeight}
                style={computedStyle}
                {...menuProps}
              >
                {(isOpen || isVisible) && children}
              </StyledMenu>
            </StyledMenuWrapper>
          );
        }}
      </Popper>
    </MenuContext.Provider>
  );
};

Menu.propTypes = {
  popperModifiers: PropTypes.any,
  eventsEnabled: PropTypes.bool,
  zIndex: PropTypes.number,
  style: PropTypes.object,
  /**
   * These placements differ from the default naming of Popper.JS placements to help
   * assist with RTL layouts.
   **/
  placement: PropTypes.oneOf([
    'auto',
    'top',
    'top-start',
    'top-end',
    'end',
    'end-top',
    'end-bottom',
    'bottom',
    'bottom-start',
    'bottom-end',
    'start',
    'start-top',
    'start-bottom'
  ]),
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
