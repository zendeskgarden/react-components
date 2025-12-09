/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { MediaInput, VALIDATION } from '@zendeskgarden/react-forms';
import { mergeRefs } from 'react-merge-refs';
import useDropdownContext from '../../utils/useDropdownContext.js';

const Combobox = forwardRef((_ref, ref) => {
  let {
    isCompact,
    isBare,
    disabled,
    focusInset,
    placeholder,
    validation,
    inputRef: inputRefProp = null,
    start,
    end,
    ...props
  } = _ref;
  const {
    popperReferenceElementRef,
    downshift: {
      getToggleButtonProps,
      getInputProps,
      getRootProps,
      isOpen
    },
    setDropdownType
  } = useDropdownContext();
  const wrapperRef = useRef();
  const inputRef = useRef();
  const isOpenRef = useRef(isOpen);
  const wrapperProps = getToggleButtonProps(getRootProps({
    role: null,
    type: null,
    onClick: event => {
      event.nativeEvent.preventDownshiftDefault = true;
    },
    ...props,
    onKeyDown: event => {
      event.nativeEvent.preventDownshiftDefault = true;
    }
  }));
  const inputProps = getInputProps({
    isCompact,
    isBare,
    disabled,
    focusInset,
    placeholder,
    validation,
    start,
    end,
    role: 'combobox',
    onKeyDown: event => {
      if (event.keyCode === KEY_CODES.SPACE || !isOpen && [KEY_CODES.DOWN, KEY_CODES.UP].includes(event.keyCode)) {
        event.nativeEvent.preventDownshiftDefault = true;
      }
    },
    onClick: event => {
      event.nativeEvent.preventDownshiftDefault = true;
    }
  });
  useEffect(() => {
    if (inputRef.current && isOpen !== isOpenRef.current) {
      inputRef.current.focus();
    }
    isOpenRef.current = isOpen;
  }, [inputRef, isOpen]);
  useEffect(() => {
    setDropdownType('combobox');
  }, [setDropdownType]);
  return React__default.createElement(Reference, null, _ref2 => {
    let {
      ref: popperReference
    } = _ref2;
    const wrapperRefProp = element => {
      popperReference(element);
      mergeRefs([wrapperRef, ref])(element);
      popperReferenceElementRef.current = element;
    };
    return React__default.createElement(MediaInput, Object.assign({}, inputProps, {
      wrapperProps: wrapperProps,
      wrapperRef: wrapperRefProp,
      ref: mergeRefs([inputRef, inputRefProp])
    }));
  });
});
Combobox.displayName = 'Combobox';
Combobox.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  focusInset: PropTypes.bool,
  placeholder: PropTypes.string,
  validation: PropTypes.oneOf(VALIDATION)
};

export { Combobox };
