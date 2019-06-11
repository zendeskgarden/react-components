/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import scrollTo from 'dom-helpers/util/scrollTo';
import styled from 'styled-components';
import { Manager, Target, Popper } from 'react-popper';
import {
  ControlledComponent,
  composeEventHandlers,
  SingleSelectionModel,
  IdManager,
  KEY_CODES
} from '@zendeskgarden/react-selection';
import { requiredParam } from '@zendeskgarden/react-utilities';
import { getPopperPlacement, getRtlPopperPlacement } from '@zendeskgarden/react-tooltips';
import { withTheme, isRtl, getDocument } from '@zendeskgarden/react-theming';

/**
 * This container must provide a wrapper for the provided menu
 * due to constraints in our arrow css. We must ensure that the container
 * of the menu can retain its relative positioning. Without this
 * container Popper would apply absolute positioning.
 */
const MenuWrapper = styled.div`
  z-index: ${props => props.zIndex};
`;

class AutocompleteContainer extends ControlledComponent {
  static propTypes = {
    /**
     * Appends the menu to the provided element
     */
    appendToNode: PropTypes.node,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getMenuProps - Props to be spread onto the containing menu element
     * @param {Function} renderProps.getItemProps - Props to be spread each selectable menu item. `({ key })` is required. Use `index` attribute for custom ordering.
     * @param {Any} renderProps.placement - The current Popper.JS placement of the Menu. Will update based on boundary conflicts.
     * @param {Any} renderProps.outOfBoundaries - Whether the current menu has escaped its boundary.
     * @param {Any} renderProps.scheduleUpdate - Method to force an update within Popper.js
     * @param {Any} renderProps.focusedKey - The currently focused key that was provided to `getItemProps()`
     */
    children: PropTypes.func,
    /**
     * Callback for when a menu item has been selected by keyboard or mouse. Return true from this callback to keep the menu open.
     * @param {String} selectedKey - The key of the selected item
     */
    onSelect: PropTypes.func,
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
     * The currently focused tag
     */
    tagFocusedKey: PropTypes.string,
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
     * @param {Function} renderProps.getInputProps - Props to be spread onto the input element
     * @param {Function} renderProps.getTriggerProps - Props to be spread onto the containing, trigger element
     * @param {Function} renderProps.getTagProps - Props to be spread onto each tag element. `({ key })` is required
     * @param {Function} renderProps.triggerRef - Callback for the ref of the element triggering the menu
     * @param {Function} renderProps.inputRef - Callback for the ref of the input
     * @param {Boolean} renderProps.isOpen - Whether the Menu is currently visible
     * @param {Boolean} renderProps.tagFocusedKey - The key of the currently focused tag
     */
    trigger: PropTypes.func,
    /**
     * The z-index of the popper.js placement container
     */
    zIndex: PropTypes.number
  };

  static defaultProps = {
    placement: 'bottom-start',
    eventsEnabled: true,
    zIndex: 1000
  };

  constructor(...args) {
    super(...args);

    this.state = {
      isOpen: false,
      id: IdManager.generateId('garden-autocomplete-container'),
      focusedKey: undefined,
      tagFocusedKey: undefined
    };

    this.focusSelectionModel = new SingleSelectionModel();
    this.focusSelectionModel.onSelectionChanged = this.onFocusSelectionModelChange;

    this.tagSelectionModel = new SingleSelectionModel();
    this.tagSelectionModel.onSelectionChanged = this.onTagSelectionModelChange;
  }

  componentDidUpdate(prevProps, prevState) {
    const { focusedKey } = this.getControlledState();
    const previousFocusedKey = this.isControlledProp('focusedKey')
      ? prevProps.focusedKey
      : prevState.focusedKey;

    /**
     * We must programatically scroll the newly focused element into view.
     * Side-effect of the `aria-activedescendant` accessibility strategy.
     */
    if (typeof focusedKey !== 'undefined' && focusedKey !== previousFocusedKey) {
      const doc = getDocument ? getDocument(this.props) : document;
      const itemNode = doc.getElementById(this.getItemId(focusedKey));

      /* istanbul ignore if */
      if (itemNode) {
        setTimeout(() => {
          scrollTo(itemNode);
        }, 0);
      }
    }
  }

  onFocusSelectionModelChange = ({ newSelection }) => {
    const focusedKey = this.indexKeyMap[newSelection];

    this.setControlledState({ focusedKey, tagFocusedKey: undefined, isOpen: true });
  };

  onTagSelectionModelChange = ({ newSelection }) => {
    const tagFocusedKey = this.tagIndexKeyMap[newSelection];

    this.setControlledState({ tagFocusedKey, focusedKey: undefined, isOpen: false });
  };

  selectItem = selectedKey => {
    const { onSelect } = this.props;
    const isOpen = onSelect && onSelect(selectedKey);

    this.focusSelectionModel.clearSelection();
    this.setControlledState({ isOpen });
  };

  openDropdown = () => {
    this.setControlledState({ isOpen: true, tagFocusedKey: undefined });
  };

  closeDropdown = () => {
    this.focusSelectionModel.clearSelection();
    this.setControlledState({ isOpen: false });
  };

  focusInput = () => {
    this.inputRef && this.inputRef.focus();
  };

  performPreviousKeyboardNavigation = e => {
    if (e.target.value === '') {
      if (this.tagSelectionModel.selectedIndex !== 0) {
        this.tagSelectionModel.selectPrevious();
        e.preventDefault();
      }
    }
  };

  performNextKeyboardNavigation = e => {
    const { isOpen } = this.getControlledState();

    if (e.target.value === '') {
      if (this.tagSelectionModel.selectedIndex === this.tagSelectionModel.numItems - 1) {
        this.openDropdown();
        e.preventDefault();
      } else if (!isOpen) {
        this.tagSelectionModel.selectNext();
        e.preventDefault();
      }
    }
  };

  INPUT_KEYDOWN_HANDLERS = {
    [KEY_CODES.LEFT]: e => {
      if (isRtl(this.props)) {
        this.performNextKeyboardNavigation(e);
      } else {
        this.performPreviousKeyboardNavigation(e);
      }
    },
    [KEY_CODES.RIGHT]: e => {
      if (isRtl(this.props)) {
        this.performPreviousKeyboardNavigation(e);
      } else {
        this.performNextKeyboardNavigation(e);
      }
    },
    [KEY_CODES.HOME]: e => {
      const { isOpen } = this.getControlledState();

      if (isOpen) {
        this.focusSelectionModel.selectFirst();
        e.preventDefault();
      } else if (e.target.value === '') {
        this.tagSelectionModel.selectFirst();
        e.preventDefault();
      }
    },
    [KEY_CODES.END]: e => {
      const { isOpen } = this.getControlledState();

      if (isOpen) {
        this.focusSelectionModel.selectLast();
        e.preventDefault();
      } else if (e.target.value === '' && this.tagSelectionModel.hasSelection()) {
        this.openDropdown();
        e.preventDefault();
      }
    },
    [KEY_CODES.ESCAPE]: e => {
      const { isOpen } = this.getControlledState();

      if (isOpen) {
        this.closeDropdown();
        e.preventDefault();
      }
    },
    [KEY_CODES.ENTER]: e => {
      const { isOpen } = this.getControlledState();

      if (isOpen) {
        if (this.focusSelectionModel.hasSelection()) {
          this.selectItem(this.indexKeyMap[this.focusSelectionModel.selectedIndex]);
        } else if (Object.keys(this.indexKeyMap).length > 0) {
          this.selectItem(this.indexKeyMap[0]);
        }

        e.preventDefault();
      } else if (!this.tagSelectionModel.hasSelection()) {
        this.openDropdown();
        e.preventDefault();
      }
    },
    [KEY_CODES.DOWN]: e => {
      const { isOpen } = this.getControlledState();

      if (isOpen) {
        this.focusSelectionModel.selectNext();
        e.preventDefault();
      } else {
        this.focusSelectionModel.selectFirst();
        e.preventDefault();
      }
    },
    [KEY_CODES.UP]: e => {
      const { isOpen } = this.getControlledState();

      if (isOpen) {
        this.focusSelectionModel.selectPrevious();
        e.preventDefault();
      } else {
        this.focusSelectionModel.selectLast();
        e.preventDefault();
      }
    },
    [KEY_CODES.SPACE]: e => {
      const { isOpen } = this.getControlledState();

      if (!isOpen) {
        this.openDropdown();
        e.preventDefault();
      }
    }
  };

  getItemId = key =>
    typeof key === 'undefined' ? null : `${this.getControlledState().id}--item-${key}`;

  getTagId = key =>
    typeof key === 'undefined' ? null : `${this.getControlledState().id}--tag-${key}`;

  getInputProps = ({
    tabIndex = 0,
    role = 'combobox',
    onChange,
    onKeyDown,
    onBlur,
    onClick,
    ...other
  } = {}) => {
    const { focusedKey, tagFocusedKey, isOpen } = this.getControlledState();

    return {
      tabIndex,
      role,
      'aria-autocomplete': 'list',
      'aria-haspopup': 'true',
      'aria-expanded': isOpen,
      'aria-activedescendant': isOpen ? this.getItemId(focusedKey) : this.getTagId(tagFocusedKey),
      autoComplete: 'off',
      onBlur: composeEventHandlers(onBlur, () => {
        if (isOpen && !this.menuMousedDown && !this.triggerMousedDown) {
          this.closeDropdown();
        }
      }),
      onChange: composeEventHandlers(onChange, () => {
        this.focusSelectionModel.clearSelection();
      }),
      onKeyDown: composeEventHandlers(onKeyDown, e => {
        const keydownHandler = this.INPUT_KEYDOWN_HANDLERS[e.keyCode];

        keydownHandler && keydownHandler(e);
      }),
      onClick: composeEventHandlers(onClick, e => {
        e.preventDefault();
      }),
      ...other
    };
  };

  getTriggerProps = ({ onMouseDown, onMouseUp, onClick, ...other }) => {
    return {
      onMouseDown: composeEventHandlers(onMouseDown, () => {
        this.triggerMousedDown = true;
      }),
      onMouseUp: composeEventHandlers(onMouseUp, () => {
        this.triggerMousedDown = false;
      }),
      onClick: composeEventHandlers(onClick, () => {
        const { isOpen } = this.getControlledState();

        if (isOpen) {
          this.closeDropdown();
        } else {
          this.openDropdown();
        }

        this.focusInput();
      }),
      ...other
    };
  };

  getMenuProps = ({ role = 'listbox', onMouseDown, onMouseUp, ...other } = {}) => {
    return {
      role,
      onMouseDown: composeEventHandlers(onMouseDown, () => {
        this.menuMousedDown = true;
      }),
      onMouseUp: composeEventHandlers(onMouseUp, () => {
        this.menuMousedDown = false;
        this.focusInput();
      }),
      ...other
    };
  };

  getItemProps = ({
    key = requiredParam('key'),
    id = this.getItemId(key),
    role = 'option',
    onClick,
    onMouseMove,
    index,
    ...other
  } = {}) => {
    const { focusedKey } = this.getControlledState();
    const isFocusedItem = key === focusedKey;
    const currentIndex = index === undefined ? this.focusSelectionModel.numItems : index;

    this.indexKeyMap[currentIndex] = key;

    if (isFocusedItem) {
      this.focusSelectionModel.selectedIndex = currentIndex;
    }

    this.focusSelectionModel.numItems++;

    return {
      id,
      key,
      role,
      onClick: composeEventHandlers(onClick, () => {
        this.selectItem(key);
      }),
      /**
       * onMouseMove is used as it is only triggered by actual mouse movement
       */
      onMouseMove: composeEventHandlers(onMouseMove, () => {
        if (key !== focusedKey) {
          this.setControlledState({
            focusedKey: key
          });
        }
      }),
      ...other
    };
  };

  getTagProps = ({
    key = requiredParam('key'),
    id = this.getTagId(key),
    onMouseDown,
    onMouseUp,
    onClick,
    ...other
  }) => {
    const { tagFocusedKey } = this.getControlledState();
    const isFocusedItem = key === tagFocusedKey;
    const currentIndex = this.tagSelectionModel.numItems;

    this.tagIndexKeyMap[currentIndex] = key;

    if (isFocusedItem) {
      this.tagSelectionModel.selectedIndex = currentIndex;
    }

    this.tagSelectionModel.numItems++;

    return {
      key,
      id,
      onMouseDown: composeEventHandlers(onMouseDown, () => {
        this.tagMousedDown = true;
      }),
      onMouseUp: composeEventHandlers(onMouseUp, () => {
        this.tagMousedDown = false;
      }),
      onClick: composeEventHandlers(onClick, e => {
        this.tagSelectionModel.select(currentIndex);
        this.focusInput();
        e.preventDefault();
      }),
      ...other
    };
  };

  /**
   * Convert RTL-aware Garden placements to PopperJS placements
   */
  convertGardenToPopperPlacement = () => {
    const { placement } = this.props;

    if (isRtl(this.props)) {
      return getRtlPopperPlacement(placement);
    }

    return getPopperPlacement(placement);
  };

  render() {
    const {
      children,
      render = children,
      trigger,
      eventsEnabled,
      popperModifiers,
      appendToNode,
      zIndex
    } = this.props;
    const { isOpen, focusedKey, tagFocusedKey } = this.getControlledState();

    this.focusSelectionModel.reset();
    this.tagSelectionModel.reset();
    this.indexKeyMap = {};
    this.tagIndexKeyMap = {};

    return (
      <Manager tag={false}>
        <>
          <Target>
            {({ targetProps }) => {
              const { ref: targetRef } = targetProps;

              return (
                trigger &&
                trigger({
                  getInputProps: this.getInputProps,
                  getTriggerProps: this.getTriggerProps,
                  getTagProps: this.getTagProps,
                  triggerRef: targetRef,
                  inputRef: ref => {
                    this.inputRef = ref;
                  },
                  isOpen,
                  tagFocusedKey
                })
              );
            }}
          </Target>
          {createPortal(
            <Popper
              placement={this.convertGardenToPopperPlacement()}
              eventsEnabled={eventsEnabled}
              modifiers={popperModifiers}
            >
              {({ popperProps, scheduleUpdate }) => {
                const popperPlacement = popperProps['data-placement'];
                const outOfBoundaries = popperProps['data-x-out-of-boundaries'];

                const menu = render({
                  getMenuProps: this.getMenuProps,
                  getItemProps: this.getItemProps,
                  placement: popperPlacement,
                  outOfBoundaries,
                  scheduleUpdate,
                  focusedKey
                });

                if (!isOpen) {
                  return false;
                }

                return (
                  <MenuWrapper ref={popperProps.ref} style={popperProps.style} zIndex={zIndex}>
                    {menu}
                  </MenuWrapper>
                );
              }}
            </Popper>,
            appendToNode || document.body
          )}
        </>
      </Manager>
    );
  }
}

export default withTheme(AutocompleteContainer);
