/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import StyledBareInput from '../styled/StyledBareInput';
import StyledSelect from '../styled/StyledSelect';
import useDropdownContext from '../utils/useDropdownContext';

const Autocomplete = ({ children, ...props }) => {
  const {
    popperReferenceElementRef,
    downshift: { getRootProps, getToggleButtonProps, getInputProps, isOpen, openMenu }
  } = useDropdownContext();
  const [isFocused, setIsFocused] = useState(false);
  const hiddenInputRef = useRef(null);

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
            {!isOpen && children}
            <StyledBareInput
              {...getInputProps({
                innerRef: hiddenInputRef,
                tabIndex: 0,
                isHidden: !isOpen
              })}
            />
          </StyledSelect>
        </div>
      )}
    </Reference>
  );
};

Autocomplete.propTypes = {
  children: PropTypes.node
};

export default Autocomplete;
