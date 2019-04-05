/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import { KEY_CODES, useSelection } from '@zendeskgarden/container-selection';
import StyledBareInput from '../styled/StyledBareInput';
import StyledSelect from '../styled/StyledSelect';
import useDropdownContext from '../utils/useDropdownContext';

export const MultiselectContext = React.createContext(null);

const Multiselect = ({ children, ...props }) => {
  const {
    popperReferenceElementRef,
    downshift: { getRootProps, getToggleButtonProps, getInputProps, isOpen, openMenu }
  } = useDropdownContext();
  const [isFocused, setIsFocused] = useState(false);
  const [focusedItem, setFocusedItem] = useState(undefined);
  const hiddenInputRef = useRef(null);
  const firstTagRef = useRef(null);
  const lastTagRef = useRef(null);

  const selectionProps = useSelection({
    rtl: isRtl(props),
    defaultFocusedIndex: -1,
    focusedItem,
    onFocus: item => {
      if (focusedItem === firstTagRef.current && item === lastTagRef.current) {
        setFocusedItem(firstTagRef.current);

        return;
      }

      if (focusedItem === lastTagRef.current && item === firstTagRef.current) {
        setFocusedItem(lastTagRef.current);

        return;
      }

      setFocusedItem(item);
    },
    selectedItem: undefined
  });

  useEffect(() => {
    if (isOpen) {
      hiddenInputRef.current && hiddenInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Reference>
      {({ ref }) => (
        <div {...getRootProps()}>
          <StyledSelect
            {...getToggleButtonProps({
              open: isOpen,
              focused: isOpen || isFocused,
              onFocus: () => {
                setIsFocused(true);
              },
              onBlur: () => {
                setIsFocused(false);
              },
              innerRef: tbRef => {
                ref(tbRef);
                popperReferenceElementRef.current = tbRef;
              },
              onKeyDown: e => {
                if (isOpen) {
                  e.nativeEvent.preventDownshiftDefault = true;
                }

                if (!isOpen && e.keyCode === KEY_CODES.ENTER) {
                  e.preventDefault();
                  e.stopPropagation();
                  openMenu();
                }
              },
              ...props
            })}
          >
            <div
              {...selectionProps.getContainerProps({
                onKeyDown: e => {
                  if (
                    e.keyCode === KEY_CODES.END ||
                    (e.keyCode === KEY_CODES.RIGHT && lastTagRef.current === focusedItem)
                  ) {
                    hiddenInputRef.current && hiddenInputRef.current.focus();
                  }
                }
              })}
            >
              <MultiselectContext.Provider value={{ selectionProps, firstTagRef, lastTagRef }}>
                {children}
              </MultiselectContext.Provider>
            </div>
            <StyledBareInput
              {...getInputProps({
                innerRef: hiddenInputRef,
                onKeyDown: e => {
                  if (e.target.value === '') {
                    if (e.keyCode === KEY_CODES.LEFT) {
                      setFocusedItem(lastTagRef.current);
                    }

                    if (e.keyCode === KEY_CODES.HOME) {
                      setFocusedItem(firstTagRef.current);
                    }
                  }
                },
                tabIndex: 0
              })}
            />
          </StyledSelect>
        </div>
      )}
    </Reference>
  );
};

Multiselect.propTypes = {
  children: PropTypes.node
};

export default withTheme(Multiselect);
