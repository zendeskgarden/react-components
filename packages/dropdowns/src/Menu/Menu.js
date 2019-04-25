/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { Popper } from 'react-popper';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';

import { StyledMenu } from '../styled/index.js';
import useDropdownContext from '../utils/useDropdownContext';
import { getPopperPlacement, getRtlPopperPlacement } from '../utils/garden-placements';

export const MenuContext = createContext();

/**
 * Accepts all `<ul>` props
 */
const Menu = props => {
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
    previousItemRef,
    previousIndexRef,
    nextItemsHashRef,
    popperReferenceElementRef,
    downshift: { isOpen, getMenuProps }
  } = useDropdownContext();

  // Reset Downshift refs on every render
  itemIndexRef.current = 0;
  nextItemsHashRef.current = {};
  previousItemRef.current = undefined;
  previousIndexRef.current = undefined;

  const popperPlacement = isRtl(props)
    ? getRtlPopperPlacement(placement)
    : getPopperPlacement(placement);

  return (
    <MenuContext.Provider value={{ itemIndexRef }}>
      <Popper placement={popperPlacement} modifiers={popperModifiers} eventsEnabled={eventsEnabled}>
        {({ ref, style, scheduleUpdate, placement: currentPlacement }) => {
          let computedStyle = menuStyle;

          // Calculate custom width if ref is provided from Select or Autocomplete
          if (popperReferenceElementRef.current) {
            computedStyle = {
              ...menuStyle,
              width: popperReferenceElementRef.current.getBoundingClientRect().width
            };
          }

          if (isOpen) {
            scheduleUpdate();
          } else {
            computedStyle = {
              width: 0,
              height: 0,
              display: 'none'
            };
          }

          return (
            <div ref={ref} style={{ zIndex, ...style }}>
              <StyledMenu
                {...getMenuProps({
                  maxHeight,
                  placement: currentPlacement,
                  animate,
                  style: computedStyle,
                  ...otherProps
                })}
              />
            </div>
          );
        }}
      </Popper>
    </MenuContext.Provider>
  );
};

Menu.propTypes = {
  popperModifiers: PropTypes.object,
  eventsEnabled: PropTypes.bool,
  zIndex: PropTypes.number,
  style: PropTypes.object,
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   */
  placement: PropTypes.string,
  animate: PropTypes.bool,
  small: PropTypes.bool,
  hidden: PropTypes.bool,
  arrow: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  children: PropTypes.node
};

Menu.defaultProps = {
  placement: 'bottom-start',
  animate: true,
  eventsEnabled: true,
  maxHeight: '400px',
  zIndex: 1000
};

export default withTheme(Menu);
