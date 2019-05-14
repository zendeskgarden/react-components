/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ControlledComponent, IdManager } from '@zendeskgarden/react-selection';
import { hasType } from '@zendeskgarden/react-utilities';

import MenuContainer from '../containers/MenuContainer';
import MenuView from '../views/MenuView';
import AddItem from '../views/items/AddItem';
import Item from '../views/items/Item';
import MediaItem from '../views/items/media/MediaItem';
import NextItem from '../views/items/NextItem';
import PreviousItem from '../views/items/PreviousItem';

const ScrollableMenuView = styled(MenuView)`
  /* stylelint-disable */
  ${({ maxHeight }) =>
    maxHeight
      ? `
    max-height: ${maxHeight};
    overflow: auto;
  `
      : ''};
  /* stylelint-enable */
`;

export default class Menu extends ControlledComponent {
  static propTypes = {
    /**
     * Animate opening of Menu
     */
    animate: PropTypes.bool,
    /**
     * Appends the menu to the provided element
     */
    appendToNode: PropTypes.any,
    /**
     * Whether to include an arrow on the visible arrow
     */
    arrow: PropTypes.bool,
    /**
     * Menu Items you want to display. All children require a `key` prop
     */
    children: PropTypes.node,
    /**
     * Whether Popper.js should update based on DOM resize events
     */
    eventsEnabled: PropTypes.bool,
    id: PropTypes.string,
    /**
     * Controls visibility of menu
     */
    isOpen: PropTypes.bool,
    /**
     * The currently focused item
     */
    focusedKey: PropTypes.string,
    /**
     * Returns all controlled state. Used for controlling usage.
     */
    onStateChange: PropTypes.func,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.ref - Callback to retrieve the trigger elements ref
     * @param {Boolean} renderProps.isOpen - Whether the Menu is currently visible
     */
    trigger: PropTypes.func,
    /**
     * Callback for when a menu item has been selected by keyboard or mouse
     * @param {String} selectedKey - The key of the selected item
     */
    onChange: PropTypes.func,
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
    /**
     * Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options)
     */
    popperModifiers: PropTypes.object,
    /**
     * The z-index of the popper.js placement container
     */
    zIndex: PropTypes.number,
    /**
     * The max-height of the MenuView. Used to create scrollable menus.
     */
    maxHeight: PropTypes.string
  };

  static defaultProps = {
    animate: true,
    eventsEnabled: true
  };

  state = {
    focusedKey: undefined,
    isOpen: false,
    id: IdManager.generateId('garden-menu')
  };

  render() {
    const {
      appendToNode,
      trigger,
      placement: defaultPlacement,
      eventsEnabled,
      popperModifiers,
      arrow,
      children,
      onChange,
      zIndex,
      maxHeight,
      ...menuProps
    } = this.props;

    const { id, isOpen, focusedKey } = this.getControlledState();

    return (
      <MenuContainer
        id={id}
        isOpen={isOpen}
        focusedKey={focusedKey}
        onStateChange={this.setControlledState}
        appendToNode={appendToNode}
        placement={defaultPlacement}
        eventsEnabled={eventsEnabled}
        popperModifiers={popperModifiers}
        zIndex={zIndex}
        onChange={onChange}
        trigger={({ getTriggerProps, triggerRef }) => {
          const referencedTrigger = trigger({
            ref: triggerRef,
            isOpen: typeof isOpen === 'undefined' ? false : isOpen
          });

          return cloneElement(referencedTrigger, getTriggerProps(referencedTrigger.props));
        }}
      >
        {({
          getMenuProps,
          getItemProps,
          getPreviousItemProps,
          getNextItemProps,
          menuRef,
          placement
        }) => (
          <ScrollableMenuView
            {...getMenuProps({ placement, arrow, ref: menuRef, maxHeight, ...menuProps })}
          >
            {Children.map(children, child => {
              if (!isValidElement(child)) {
                return child;
              }

              const { textValue, disabled, children: childChildren } = child.props;
              const key = child.key;

              /**
               * Children with the `disabled` prop are not selectable
               */
              if (disabled) {
                return child;
              }

              if (
                hasType(child, AddItem) ||
                hasType(child, Item) ||
                hasType(child, MediaItem) ||
                hasType(child, NextItem) ||
                hasType(child, PreviousItem)
              ) {
                /**
                 * Automatically apply `textValue` if children is a string
                 */
                const childrenTextValue =
                  typeof childChildren === 'string' ? childChildren : undefined;

                let itemPropMapper = getItemProps;

                if (hasType(child, NextItem)) {
                  itemPropMapper = getNextItemProps;
                } else if (hasType(child, PreviousItem)) {
                  itemPropMapper = getPreviousItemProps;
                }

                return cloneElement(
                  child,
                  itemPropMapper({
                    key,
                    textValue: textValue || childrenTextValue,
                    focused: focusedKey === key,
                    children: childChildren,
                    ...child.props
                  })
                );
              }

              return child;
            })}
          </ScrollableMenuView>
        )}
      </MenuContainer>
    );
  }
}
