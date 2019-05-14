/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Manager, Popper, Target } from 'react-popper';
import {
  SelectionContainer,
  ControlledComponent,
  composeEventHandlers,
  SingleSelectionModel,
  IdManager,
  KEY_CODES
} from '@zendeskgarden/react-selection';
import { getPopperPlacement, getRtlPopperPlacement } from '@zendeskgarden/react-tooltips';
import { withTheme, isRtl, getDocument } from '@zendeskgarden/react-theming';
import { FocusJailContainer } from '@zendeskgarden/react-modals';

/**
 * This container must provide a wrapper for the provided menu
 * due to constraints in our arrow css. We must ensure that the container
 * of the menu can retain its relative positioning. Without this
 * container Popper would apply absolute positioning.
 */
const MenuWrapper = styled.div`
  z-index: ${props => props.zIndex};
`;

class MenuContainer extends ControlledComponent {
  static propTypes = {
    /**
     * Appends the menu to the provided element
     */
    appendToNode: PropTypes.any,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getMenuProps - Props to be spread onto the containing menu element
     * @param {Function} renderProps.getItemProps - Props to be spread each selectable menu item. `({ key })` is required. Use `index` attribute for custom ordering.
     * @param {Function} renderProps.getNextItemProps - Props to be spread each next menu item. `({ key })` is required. Use `index` attribute for custom ordering.
     * @param {Function} renderProps.getPreviousItemProps - Props to be spread each previous menu item. `({ key })` is required. Use `index` attribute for custom ordering.
     * @param {Any} renderProps.menuRef - Callback for the ref of the element containing the menu items
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
     * Whether the component is disabled
     */
    disabled: PropTypes.bool,
    /**
     * The currently focused item
     */
    focusedKey: PropTypes.string,
    /**
     * The currently selected item.
     *
     * **IMPORTANT:** If you think you should be using this prop,
     * ensure that the @zendeskgarden/react-select package doesn't
     * cover your use case since there may be other accessibility
     * implications.
     */
    selectedKey: PropTypes.string,
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

  static defaultProps = {
    placement: 'bottom-start',
    eventsEnabled: true,
    zIndex: 1000
  };

  constructor(...args) {
    super(...args);

    this.state = {
      isOpen: false,
      id: IdManager.generateId('garden-menu-container'),
      focusedKey: undefined,
      selectedKey: undefined,
      focusOnOpen: undefined,
      closedByBlur: undefined,
      defaultFocusedIndex: 0
    };
  }

  attachClickOutsideHandler() {
    this.getDocuments().forEach(doc => {
      doc.addEventListener('mousedown', this.handleOutsideMouseDown, true /* use capture */);
    });
  }

  detachClickOutsideHandler() {
    this.getDocuments().forEach(doc => {
      doc.removeEventListener('mousedown', this.handleOutsideMouseDown, true /* use capture */);
    });
  }

  componentWillUnmount() {
    this.detachClickOutsideHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen, closedByBlur } = this.getControlledState();
    const previousisOpen = this.isControlledProp('isOpen') ? prevProps.isOpen : prevState.isOpen;

    /**
     * Focus trigger element when menu is closed from selection or ESC key
     */
    if (!isOpen && previousisOpen) {
      if (!closedByBlur) {
        this.triggerReference && this.triggerReference.focus();
      }

      this.detachClickOutsideHandler();
    }

    /**
     * Focus menu element when opened
     */
    if (isOpen && !previousisOpen) {
      if (!this.menuReference) {
        throw new Error(
          'Accessibility Error: You must apply the `menuRef` prop to the element that contains your menu.'
        );
      }

      /**
       * Delaying the menu focus allows Popper.JS to reflow positioning based on boundary collisions.
       * Without this delay the focus event will cause any overflowed area to scroll.
       */
      setTimeout(() => {
        this.menuReference && this.menuReference.focus();
      }, 0);

      this.attachClickOutsideHandler();
    }
  }

  getDocuments = () => {
    const doc = getDocument ? getDocument(this.props) : document;
    const iframes = doc.querySelectorAll('iframe');

    return [...iframes].reduce(
      (documents, iframe) => {
        try {
          if (iframe.contentDocument) {
            return [...documents, iframe.contentDocument];
          }
        } catch (e) {} // eslint-disable-line no-empty

        return documents;
      },
      [doc]
    );
  };

  /**
   * Used to know when a Menu is blured by mouse
   */
  handleOutsideMouseDown = event => {
    const { isOpen } = this.getControlledState();
    const { target, which } = event;
    const isLeftClick = which === 1;

    if (!isOpen || !isLeftClick) {
      return;
    }

    if (this.menuReference && !this.menuReference.contains(target)) {
      if (this.triggerReference && !this.triggerReference.contains(target)) {
        this.toggleMenuVisibility({ closedByBlur: true });
      }
    }
  };

  toggleMenuVisibility = ({ defaultFocusedIndex, focusOnOpen, closedByBlur } = {}) => {
    const { isOpen } = this.getControlledState();
    const { disabled } = this.props;

    this.setControlledState({
      isOpen: disabled ? false : !isOpen,
      focusedKey: undefined,
      defaultFocusedIndex,
      focusOnOpen,
      closedByBlur
    });
  };

  /**
   * Props to be applied to the trigger element
   */
  getTriggerProps = ({ tabIndex = 0, onClick, onKeyDown, ...other } = {}) => {
    const { isOpen } = this.getControlledState();

    return {
      tabIndex,
      'aria-haspopup': true,
      'aria-expanded': isOpen,
      onClick: composeEventHandlers(onClick, () => this.toggleMenuVisibility()),
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        const VALID_OPEN_KEYS = {
          [KEY_CODES.ENTER]: true,
          [KEY_CODES.SPACE]: true,
          [KEY_CODES.UP]: true,
          [KEY_CODES.DOWN]: true
        };

        if (event.keyCode in VALID_OPEN_KEYS) {
          this.toggleMenuVisibility({
            defaultFocusedIndex: event.keyCode === KEY_CODES.UP ? -1 : 0,
            focusOnOpen: true
          });

          event.preventDefault();
          event.stopPropagation();
        }
      }),
      ...other
    };
  };

  triggerRef = reference => {
    if (reference) {
      this.triggerReference = reference;
    }
  };

  menuRef = reference => {
    if (reference) {
      this.menuReference = reference;
    }
  };

  /**
   * Triggers callback to signal that an item has been selected
   */
  onItemSelected = itemKey => {
    const { onChange } = this.props;

    onChange && onChange(itemKey);
  };

  /**
   * Props to be applied to the menu container
   */
  getMenuProps = (
    { tabIndex = -1, role = 'menu', onKeyDown, onFocus, ...other } = {},
    focusSelectionModel
  ) => {
    const { focusOnOpen } = this.getControlledState();

    return {
      role,
      tabIndex,
      onFocus: composeEventHandlers(onFocus, event => {
        /**
         * If the Menu has been opened by a mouse we want to stop
         * the focus event from triggering the default focusing logic.
         */
        if (!focusOnOpen) {
          event.preventDefault();
        }
      }),
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        const { focusedKey } = this.getControlledState();

        if (event.keyCode === KEY_CODES.TAB) {
          if (event.shiftKey) {
            focusSelectionModel.selectPrevious();
          } else {
            focusSelectionModel.selectNext();
          }

          event.preventDefault();
          event.stopPropagation();

          return;
        }

        /**
         * Close menu on ESCAPE
         */
        if (event.keyCode === KEY_CODES.ESCAPE) {
          this.toggleMenuVisibility();
          event.preventDefault();
          event.stopPropagation();

          return;
        }

        if (event.keyCode === KEY_CODES.RIGHT) {
          const directionalKey = isRtl(this.props)
            ? this.previousKey
            : this.nextKeys[focusedKey] && focusedKey;

          if (directionalKey) {
            this.onItemSelected(directionalKey);
            event.preventDefault();
            event.stopPropagation();

            return;
          }
        }

        if (event.keyCode === KEY_CODES.LEFT) {
          const directionalKey = isRtl(this.props)
            ? this.nextKeys[focusedKey] && focusedKey
            : this.previousKey;

          if (directionalKey) {
            this.onItemSelected(directionalKey);
            event.preventDefault();
            event.stopPropagation();

            return;
          }
        }

        if (event.keyCode !== KEY_CODES.ALT) {
          const charString = event.key;
          const matchingSelectionModel = this.textValueSelectionModels[
            charString.toLocaleUpperCase()
          ];

          if (matchingSelectionModel) {
            matchingSelectionModel.selectionModel.selectNext();
            const matchingKey =
              matchingSelectionModel.keys[matchingSelectionModel.selectionModel.selectedIndex];

            this.setControlledState({
              focusedKey: matchingKey
            });
          }
        }
      }),
      ...other
    };
  };

  /**
   * Props to be applied to each selectable menu item
   **/
  getItemProps = ({ key, role = 'menuitemcheckbox', textValue, onMouseMove, ...other }) => {
    const { focusedKey } = this.getControlledState();

    if (typeof textValue === 'string' && textValue.length > 0) {
      const firstChar = textValue.toLocaleUpperCase().charAt(0);

      if (!this.textValueSelectionModels[firstChar]) {
        this.textValueSelectionModels[firstChar] = {
          keys: [],
          selectionModel: new SingleSelectionModel()
        };
      }

      const currentSelectionModel = this.textValueSelectionModels[firstChar];

      currentSelectionModel.keys.push(key);
      currentSelectionModel.selectionModel.numItems++;

      if (key === focusedKey) {
        const focusedIndex = currentSelectionModel.keys.length - 1;

        currentSelectionModel.selectionModel.select(focusedIndex);
      }
    }

    return {
      key,
      role,
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

  /**
   * Props to be applied to each menu item that contains children
   **/
  getNextItemProps = ({ key, ...other } = {}) => {
    this.nextKeys[key] = true;

    return {
      key,
      'aria-expanded': false,
      ...other
    };
  };

  /**
   * Props to be applied to each menu item that links to a parent
   **/
  getPreviousItemProps = ({ key, ...other } = {}) => {
    this.previousKey = key;

    return {
      key,
      'aria-expanded': true,
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
    const {
      isOpen,
      focusedKey: controlledFocusedKey,
      selectedKey: controlledSelectedKey,
      id,
      defaultFocusedIndex
    } = this.getControlledState();

    this.textValueSelectionModels = {};
    this.nextKeys = {};
    this.previousKey = undefined;

    /**
     * We must decide whether the provided `selectedKey` is controlled
     */
    const selectedKey = this.isControlledProp('selectedKey') ? controlledSelectedKey : undefined;

    return (
      <Manager tag={false}>
        <>
          <Target>
            {({ targetProps }) => {
              const { ref: targetRef } = targetProps;

              return (
                trigger &&
                trigger({
                  getTriggerProps: props => this.getTriggerProps({ ...props }),
                  triggerRef: ref => {
                    targetRef(ref);
                    this.triggerRef(ref);
                  },
                  isOpen: typeof isOpen === 'undefined' ? false : isOpen
                })
              );
            }}
          </Target>
          {isOpen && (
            <Popper
              placement={this.convertGardenToPopperPlacement()}
              eventsEnabled={eventsEnabled}
              modifiers={popperModifiers}
            >
              {({ popperProps, scheduleUpdate }) => {
                const popperPlacement = popperProps['data-placement'];
                const outOfBoundaries = popperProps['data-x-out-of-boundaries'];

                const menu = (
                  <MenuWrapper ref={popperProps.ref} style={popperProps.style} zIndex={zIndex}>
                    <FocusJailContainer focusOnMount={false}>
                      {({ getContainerProps: getFocusJailContainerProps, containerRef }) => (
                        <SelectionContainer
                          id={id}
                          direction="vertical"
                          focusedKey={controlledFocusedKey}
                          selectedKey={selectedKey}
                          defaultFocusedIndex={defaultFocusedIndex}
                          onStateChange={newState => {
                            /**
                             * We only care if `selectedKey` is involved with the state change
                             */
                            if (Object.prototype.hasOwnProperty.call(newState, 'selectedKey')) {
                              let newSelectedKey = newState.selectedKey;

                              if (newSelectedKey === undefined) {
                                newSelectedKey = selectedKey;
                              }

                              this.onItemSelected(newSelectedKey);

                              if (newState.selectedKey === undefined) {
                                newState.isOpen = false;
                              } else {
                                newState.isOpen =
                                  this.nextKeys[newState.selectedKey] ||
                                  this.previousKey === newState.selectedKey;
                              }
                            }

                            this.setControlledState(newState);
                          }}
                        >
                          {({
                            getContainerProps,
                            getItemProps: getSelectionItemProps,
                            focusedKey,
                            focusSelectionModel
                          }) =>
                            render({
                              getMenuProps: props =>
                                getFocusJailContainerProps(
                                  getContainerProps(this.getMenuProps(props, focusSelectionModel))
                                ),
                              getItemProps: props =>
                                getSelectionItemProps(this.getItemProps(props), {
                                  selectedAriaKey: 'aria-checked'
                                }),
                              getNextItemProps: props =>
                                getSelectionItemProps(
                                  this.getItemProps(this.getNextItemProps(props))
                                ),
                              getPreviousItemProps: props =>
                                getSelectionItemProps(
                                  this.getItemProps(this.getPreviousItemProps(props))
                                ),
                              menuRef: ref => {
                                containerRef(ref);
                                this.menuRef(ref);
                              },
                              placement: popperPlacement,
                              outOfBoundaries,
                              scheduleUpdate,
                              focusedKey
                            })
                          }
                        </SelectionContainer>
                      )}
                    </FocusJailContainer>
                  </MenuWrapper>
                );

                if (appendToNode) {
                  return createPortal(menu, appendToNode);
                }

                return menu;
              }}
            </Popper>
          )}
        </>
      </Manager>
    );
  }
}

export default withTheme(MenuContainer);
