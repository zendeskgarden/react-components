/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ControlledComponent, IdManager } from '@zendeskgarden/react-selection';
import { MenuContainer } from '@zendeskgarden/react-menus';

export default class SelectContainer extends ControlledComponent {
  static propTypes = {
    /**
     * Appends the menu to the provided element
     */
    appendToNode: PropTypes.instanceOf(Element),
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getMenuProps - Props to be spread onto the containing menu element
     * @param {Function} renderProps.getItemProps - Props to be spread each selectable menu item. `({ key })` is required
     * @param {Function} renderProps.getNextItemProps - Props to be spread each next menu item. `({ key })` is required
     * @param {Function} renderProps.getPreviousItemProps - Props to be spread each previous menu item. `({ key })` is required
     * @param {Any} renderProps.dropdownRef - Callback for the ref of the element containing the select options
     * @param {Any} renderProps.placement - The current Popper.JS placement of the Menu. Will update based on boundary conflicts.
     * @param {Any} renderProps.outOfBoundaries - Whether the current menu has escaped its boundary.
     * @param {Any} renderProps.scheduleUpdate - Method to force an update within Popper.js
     * @param {Any} renderProps.focusedKey - The currently focused key that was provided to `getItemProps()`
     */
    children: PropTypes.func,
    /**
     * Callback for when a menu item has been selected by keyboard or mouse
     * @param {String} selectedKey - The key of the selected item
     */
    onChange: PropTypes.func,
    /**
     * Whether Popper.js should update based on DOM resize events
     */
    eventsEnabled: PropTypes.bool,
    /**
     * The root ID to use for descendants. A unique ID is created if none is provided.
     */
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
     * These placements differ from the default naming of Popper.JS placements to help
     * assist with RTL layouts.
     */
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
     * Identical to children
     */
    render: PropTypes.func,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getTriggerProps - Props to be spread onto the trigger element
     * @param {Function} renderProps.triggerRef - Callback for the ref of the element triggering the menu
     * @param {Boolean} renderProps.isOpen - Whether the Menu is currently visible
     */
    trigger: PropTypes.func,
    /**
     * The default index to focus when the menu is opened
     */
    defaultFocusedIndex: PropTypes.number,
    /**
     * The z-index of the popper.js placement container
     */
    zIndex: PropTypes.number
  };

  /**
   * We append the menu to the body element by default to stop unintentional
   * DOM shifts from occuring to relative elements
   */
  static defaultProps = {
    placement: 'bottom-start',
    eventsEnabled: true,
    appendToNode: document.body
  };

  constructor(...args) {
    super(...args);

    this.state = {
      id: IdManager.generateId(),
      isOpen: false,
      focusedKey: undefined,
      selectedKey: undefined,
      defaultFocusedIndex: 0
    };
  }

  getTriggerProps = ({ role = 'combobox', ...other } = {}) => {
    return {
      role,
      ...other
    };
  };

  getSelectProps = ({ role = 'listbox', ...other } = {}) => {
    return {
      role,
      ...other
    };
  };

  render() {
    const {
      children,
      render = children,
      trigger,
      onChange,
      appendToNode,
      eventsEnabled,
      popperModifiers,
      zIndex
    } = this.props;
    const { isOpen, focusedKey, selectedKey, id } = this.getControlledState();

    return (
      <MenuContainer
        appendToNode={appendToNode}
        eventsEnabled={eventsEnabled}
        id={id}
        isOpen={isOpen}
        focusedKey={focusedKey}
        selectedKey={selectedKey}
        onStateChange={newState => {
          this.setControlledState(newState);
        }}
        onChange={selectedItem => {
          onChange && onChange(selectedItem);
        }}
        trigger={({ getTriggerProps: getMenuTriggerProps, triggerRef }) =>
          trigger &&
          trigger({
            getTriggerProps: props => getMenuTriggerProps(this.getTriggerProps(props)),
            triggerRef,
            selectedKey,
            isOpen
          })
        }
        popperModifiers={popperModifiers}
        zIndex={zIndex}
      >
        {({
          getMenuProps,
          getItemProps,
          getNextItemProps,
          getPreviousItemProps,
          menuRef,
          placement,
          outOfBoundaries,
          scheduleUpdate
        }) =>
          render({
            getSelectProps: props => getMenuProps(this.getSelectProps(props)),
            getItemProps,
            getNextItemProps,
            getPreviousItemProps,
            dropdownRef: menuRef,
            placement,
            outOfBoundaries,
            scheduleUpdate,
            focusedKey,
            selectedKey
          })
        }
      </MenuContainer>
    );
  }
}
