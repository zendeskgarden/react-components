import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import { ControlledComponent, IdManager } from '@zendesk/garden-react-selection';

import MenuContainer from '../containers/MenuContainer';
import MenuView from '../views/MenuView';
import AddItem from '../views/items/AddItem';
import Item from '../views/items/Item';
import MediaItem from '../views/items/media/MediaItem';
import NextItem from '../views/items/NextItem';
import PreviousItem from '../views/items/PreviousItem';

export default class Menu extends ControlledComponent {
  static propTypes = {
    /**
     * Animate opening of Menu
     */
    animate: PropTypes.bool,
    /**
     * Appends the menu to the provided element
     */
    appendToNode: PropTypes.instanceOf(Element),
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
    zIndex: PropTypes.number
  };

  static defaultProps = {
    animate: true,
    eventsEnabled: true,
    appendToNode: document.body
  };

  state = {
    focusedKey: undefined,
    isOpen: false,
    id: IdManager.generateId()
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
          const referencedTrigger = trigger({ ref: triggerRef });

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
          <MenuView {...getMenuProps({ placement, arrow, menuRef, ...menuProps })}>
            {Children.map(children, child => {
              const { textValue, disabled, children: childChildren } = child.props;
              const key = child.key;

              /**
               * Children with the `disabled` prop are not selectable
               */
              if (disabled) {
                return child;
              }

              if (
                child.type === AddItem ||
                child.type === Item ||
                child.type === MediaItem ||
                child.type === NextItem ||
                child.type === PreviousItem
              ) {
                /**
                 * Automatically apply `textValue` if children is a string
                 */
                const childrenTextValue =
                  typeof childChildren === 'string' ? childChildren : undefined;

                let itemPropMapper = getItemProps;

                if (child.type === NextItem) {
                  itemPropMapper = getNextItemProps;
                } else if (child.type === PreviousItem) {
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
          </MenuView>
        )}
      </MenuContainer>
    );
  }
}
