/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, HTMLAttributes, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { Popper } from 'react-popper';
import { Modifiers } from 'popper.js';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';

import { StyledMenu, StyledMenuWrapper } from '../../styled/index';
import useDropdownContext from '../../utils/useDropdownContext';
import {
  GARDEN_PLACEMENT,
  getPopperPlacement,
  getRtlPopperPlacement
} from '../../utils/garden-placements';
import { MenuContext } from '../../utils/useMenuContext';

interface IMenuProps extends HTMLAttributes<HTMLUListElement> {
  /** See Popper [documentation](https://popper.js.org/docs/v2/modifiers/) for details */
  popperModifiers?: Modifiers;
  eventsEnabled?: boolean;
  zIndex?: number;
  /**
   * These placements differ from the default naming of Popper placements to
   * accommodate RTL layouts
   **/
  placement?: GARDEN_PLACEMENT;
  isAnimated?: boolean;
  isCompact?: boolean;
  hasArrow?: boolean;
  maxHeight?: string;
}

/**
 * Accepts all `<ul>` props
 */
const Menu: React.FunctionComponent<IMenuProps & ThemeProps<DefaultTheme>> = props => {
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
    if (isOpen) {
      scheduleUpdateRef.current && scheduleUpdateRef.current();
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

  // Reset Downshift refs on every render
  itemIndexRef.current = 0;
  nextItemsHashRef.current = {};
  previousIndexRef.current = undefined;
  itemSearchRegistry.current = [];

  const popperPlacement = isRtl(props)
    ? getRtlPopperPlacement(placement!)
    : getPopperPlacement(placement!);

  return (
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

export default withTheme(Menu) as React.FunctionComponent<IMenuProps>;
