/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import {
  ControlledComponent,
  IdManager,
  SingleSelectionModel,
  composeEventHandlers,
  KEY_CODES
} from '@zendeskgarden/react-selection';

import SelectContainer from '../containers/SelectContainer';
import SelectView from '../views/SelectView';
import Dropdown from '../views/Dropdown';
import AddItem from '../views/items/AddItem';
import Item from '../views/items/Item';
import MediaItem from '../views/items/media/MediaItem';
import NextItem from '../views/items/NextItem';
import PreviousItem from '../views/items/PreviousItem';

/**
 * Also accepts all `<div>` props
 */
export default class Select extends ControlledComponent {
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
     * Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options)
     */
    popperModifiers: PropTypes.object,
    /**
     * The ref of the select visualization
     */
    selectRef: PropTypes.func,
    /**
     * All options to display within the Select dropdown
     */
    options: PropTypes.array,
    /**
     * Whether the component is disabled
     */
    disabled: PropTypes.bool,
    /**
     * Props to be spread onto the Dropdown element
     */
    dropdownProps: PropTypes.object,
    /**
     * The z-index of the popper.js placement container
     */
    zIndex: PropTypes.number
  };

  static defaultProps = {
    animate: true,
    eventsEnabled: true
  };

  state = {
    focusedKey: undefined,
    selectedKey: undefined,
    isOpen: false,
    id: IdManager.generateId()
  };

  componentDidMount() {
    this.updateTextValueSelectionModels();
  }

  componentDidUpdate() {
    this.updateTextValueSelectionModels();
  }

  updateTextValueSelectionModels = () => {
    const { options } = this.props;
    const { selectedKey } = this.getControlledState();

    this.textValueSelectionModels = {};

    Children.forEach(options, option => {
      const { textValue, disabled, children: childChildren } = option.props;
      const key = option.key;

      if (disabled) {
        return;
      }

      if (
        option.type === AddItem ||
        option.type === Item ||
        option.type === MediaItem ||
        option.type === NextItem ||
        option.type === PreviousItem
      ) {
        /**
         * Use children as textValue if none is provided
         */
        let optionTextValue = textValue;

        if (optionTextValue === undefined) {
          optionTextValue = typeof childChildren === 'string' ? childChildren : undefined;
        }

        /**
         * Create model to allow keyboard selection without opening dropdown
         */
        if (typeof optionTextValue === 'string' && optionTextValue.length > 0) {
          const firstChar = optionTextValue.toLocaleUpperCase().charAt(0);

          if (!this.textValueSelectionModels[firstChar]) {
            this.textValueSelectionModels[firstChar] = {
              keys: [],
              selectionModel: new SingleSelectionModel()
            };
          }

          const currentSelectionModel = this.textValueSelectionModels[firstChar];

          currentSelectionModel.keys.push(key);
          currentSelectionModel.selectionModel.numItems++;

          if (key === selectedKey) {
            const selectedIndex = currentSelectionModel.keys.length - 1;

            currentSelectionModel.selectionModel.select(selectedIndex);
          }
        }
      }
    });
  };

  triggerOnChange = selectedKey => {
    const { onChange } = this.props;

    onChange && onChange(selectedKey);
  };

  render() {
    const {
      animate,
      appendToNode,
      options,
      eventsEnabled,
      popperModifiers,
      children,
      onChange, // eslint-disable-line no-unused-vars
      small,
      selectRef,
      disabled: selectDisabled,
      dropdownProps = {},
      onKeyDown: selectOnKeyDown,
      zIndex,
      ...otherSelectProps
    } = this.props;
    const { id, isOpen, focusedKey, selectedKey } = this.getControlledState();
    const { style: dropdownStyle, ...otherDropdownProps } = dropdownProps;

    this.textValueSelectionModels = {};

    return (
      <SelectContainer
        id={id}
        appendToNode={appendToNode}
        isOpen={selectDisabled ? false : isOpen}
        selectedKey={selectedKey}
        focusedKey={focusedKey}
        eventsEnabled={eventsEnabled}
        popperModifiers={popperModifiers}
        onChange={this.triggerOnChange}
        onStateChange={this.setControlledState}
        zIndex={zIndex}
        trigger={({ getTriggerProps, triggerRef }) => (
          <SelectView
            {...getTriggerProps({
              open: isOpen,
              focused: isOpen,
              disabled: selectDisabled,
              small,
              ...otherSelectProps,
              inputRef: ref => {
                this.triggerRef = ref;
                triggerRef(ref);
                selectRef && selectRef(ref);
              },
              onKeyDown: composeEventHandlers(selectOnKeyDown, event => {
                if (event.keyCode !== KEY_CODES.ALT) {
                  const charString = event.key;
                  const matchingSelectionModel = this.textValueSelectionModels[
                    charString.toLocaleUpperCase()
                  ];

                  if (matchingSelectionModel) {
                    matchingSelectionModel.selectionModel.selectNext();
                    const matchingKey =
                      matchingSelectionModel.keys[
                        matchingSelectionModel.selectionModel.selectedIndex
                      ];

                    this.triggerOnChange(matchingKey);
                  }
                }
              })
            })}
          >
            {children}
          </SelectView>
        )}
      >
        {({
          getSelectProps,
          getItemProps,
          getNextItemProps,
          getPreviousItemProps,
          placement,
          dropdownRef
        }) => (
          <Dropdown
            {...getSelectProps({
              placement,
              animate,
              dropdownRef,
              small,
              style: {
                width: this.triggerRef && this.triggerRef.getBoundingClientRect().width,
                ...dropdownStyle
              },
              ...otherDropdownProps
            })}
          >
            {Children.map(options, option => {
              const { textValue, disabled, children: childChildren } = option.props;
              const key = option.key;

              /**
               * Children with the `disabled` prop are not selectable
               */
              if (disabled) {
                return option;
              }

              if (
                option.type === AddItem ||
                option.type === Item ||
                option.type === MediaItem ||
                option.type === NextItem ||
                option.type === PreviousItem
              ) {
                /**
                 * Automatically apply `textValue` if children is a string
                 */
                const childrenTextValue =
                  typeof childChildren === 'string' ? childChildren : undefined;

                let itemPropMapper = getItemProps;

                if (option.type === NextItem) {
                  itemPropMapper = getNextItemProps;
                } else if (option.type === PreviousItem) {
                  itemPropMapper = getPreviousItemProps;
                }

                return cloneElement(
                  option,
                  itemPropMapper({
                    key,
                    textValue: textValue || childrenTextValue,
                    focused: focusedKey === key,
                    checked: selectedKey === key,
                    children: childChildren,
                    ...option.props
                  })
                );
              }

              return option;
            })}
          </Dropdown>
        )}
      </SelectContainer>
    );
  }
}
