/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { Manager } from 'react-popper';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import { KEY_CODES, composeEventHandlers } from '@zendeskgarden/react-selection';

export const DropdownContext = React.createContext();

const Dropdown = props => {
  const {
    children,
    isOpen,
    onOpen,
    selectedItem,
    onSelect,
    highlightedIndex,
    onHighlight,
    dropdownProps,
    itemToString
  } = props;
  const itemIndexRef = useRef(0);
  const previousItemRef = useRef(undefined);
  const previousIndexRef = useRef(undefined);
  const nextItemsHashRef = useRef({});
  const popperReferenceElementRef = useRef(null);

  const customGetInputProps = ({ onKeyDown, ...other }, downshift, rtl) => {
    return {
      onKeyDown: composeEventHandlers(onKeyDown, e => {
        const PREVIOUS_KEY = rtl ? KEY_CODES.RIGHT : KEY_CODES.LEFT;
        const NEXT_KEY = rtl ? KEY_CODES.LEFT : KEY_CODES.RIGHT;

        if (downshift.isOpen) {
          if (e.keyCode === KEY_CODES.TAB) {
            e.preventDefault();
            e.stopPropagation();

            downshift.selectHighlightedItem();
          }

          if (e.keyCode === PREVIOUS_KEY && previousIndexRef.current !== null) {
            e.preventDefault();
            e.stopPropagation();

            downshift.selectItemAtIndex(previousIndexRef.current);
          }

          if (e.keyCode === NEXT_KEY) {
            const nextItemIndexes = Object.values(nextItemsHashRef.current);

            if (nextItemIndexes.includes(downshift.highlightedIndex)) {
              e.preventDefault();
              e.stopPropagation();

              downshift.selectItemAtIndex(downshift.highlightedIndex);
            }
          }
        } else if (e.keyCode === KEY_CODES.ENTER || e.keyCode === KEY_CODES.SPACE) {
          e.preventDefault();
          e.stopPropagation();

          downshift.openMenu();
        }
      }),
      ...other
    };
  };

  const transformDownshift = ({ getInputProps, getToggleButtonProps, ...downshift }) => {
    return {
      getInputProps: p => getInputProps(customGetInputProps(p, downshift, isRtl(props))),
      getToggleButtonProps: p => getToggleButtonProps({ 'aria-label': undefined, ...p }),
      ...downshift
    };
  };

  /**
   * Uses the undocumented `supressRefError` to allow component composition
   * https://github.com/downshift-js/downshift/issues/529
   */
  return (
    <Manager>
      <Downshift
        suppressRefError
        isOpen={isOpen}
        selectedItem={selectedItem || null}
        highlightedIndex={highlightedIndex}
        onStateChange={(changes, stateAndHelpers) => {
          if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
            onOpen && onOpen(changes.isOpen, stateAndHelpers);
          }

          if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem')) {
            onSelect && onSelect(changes.selectedItem, stateAndHelpers);
          }

          if (Object.prototype.hasOwnProperty.call(changes, 'highlightedIndex')) {
            onHighlight && onHighlight(changes.highlightedIndex, stateAndHelpers);
          }
        }}
        {...dropdownProps}
      >
        {downshift => (
          <DropdownContext.Provider
            value={{
              itemIndexRef,
              itemToString,
              previousItemRef,
              previousIndexRef,
              nextItemsHashRef,
              popperReferenceElementRef,
              downshift: transformDownshift(downshift)
            }}
          >
            {children}
          </DropdownContext.Provider>
        )}
      </Downshift>
    </Manager>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  selectedItem: PropTypes.any,
  onSelect: PropTypes.func,
  highlightedIndex: PropTypes.number,
  onHighlight: PropTypes.func,
  itemToString: PropTypes.func,
  dropdownProps: PropTypes.object
};

export default withTheme(Dropdown);
