/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  createContext,
  useRef,
  useEffect,
  CSSProperties,
  HTMLProps,
  MutableRefObject
} from 'react';
import PropTypes from 'prop-types';
import { Popper } from 'react-popper';
import { Modifiers } from 'popper.js';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';

import { StyledMenu } from '../styled/index';
import useDropdownContext from '../utils/useDropdownContext';
import {
  GARDEN_PLACEMENT,
  getPopperPlacement,
  getRtlPopperPlacement
} from '../utils/garden-placements';

export interface IMenuContext {
  itemIndexRef: MutableRefObject<number>;
}

export const MenuContext = createContext<IMenuContext | undefined>(undefined);

interface IMenuProps extends HTMLProps<HTMLUListElement> {
  popperModifiers?: Modifiers;
  eventsEnabled?: boolean;
  zIndex?: number;
  style?: CSSProperties;
  /**
   * These placements differ from the default naming of Popper.JS placements to help
   * assist with RTL layouts.
   **/
  placement?: GARDEN_PLACEMENT;
  animate?: boolean;
  small?: boolean;
  hidden?: boolean;
  arrow?: boolean;
  maxHeight?: string;
}

/**
 * Accepts all `<ul>` props
 */
const Menu: React.FunctionComponent<IMenuProps> = props => {
  const {
    placement,
    popperModifiers,
    eventsEnabled,
    animate,
    maxHeight,
    style: menuStyle,
    zIndex,
    ...otherProps
  } = props;
  const {
    itemIndexRef,
    previousIndexRef,
    nextItemsHashRef,
    popperReferenceElementRef,
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

  // Reset Downshift refs on every render
  itemIndexRef.current = 0;
  nextItemsHashRef.current = {};
  previousIndexRef.current = undefined;

  const popperPlacement = isRtl(props)
    ? getRtlPopperPlacement(placement!)
    : getPopperPlacement(placement!);

  return (
    <MenuContext.Provider value={{ itemIndexRef }}>
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
              ...menuStyle,
              width: popperReferenceElementRef.current.getBoundingClientRect().width
            };
          }

          let popperStyle = { ...style, zIndex };

          if (!isOpen) {
            popperStyle = { ...style, zIndex: -1, visibility: 'hidden' };
          }

          return (
            /** Conditionally apply the positioning ref to limit the number of Popper calculations */
            <div ref={isOpen ? ref : undefined} style={popperStyle}>
              <StyledMenu
                {...getMenuProps({
                  maxHeight,
                  placement: currentPlacement,
                  animate: isOpen && animate, // Triggers animation start when open
                  style: computedStyle,
                  ...otherProps
                } as any)}
              />
            </div>
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
  animate: PropTypes.bool,
  small: PropTypes.bool,
  hidden: PropTypes.bool,
  arrow: PropTypes.bool,
  maxHeight: PropTypes.string
};

Menu.defaultProps = {
  placement: 'bottom-start',
  animate: true,
  eventsEnabled: true,
  maxHeight: '400px',
  zIndex: 1000
};

/** @component */
export default withTheme(Menu) as React.FunctionComponent<IMenuProps>;
