/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { forwardRef, useRef, cloneElement } from 'react';
import { composeEventHandlers, KEYS } from '@zendeskgarden/container-utilities';

const Input = forwardRef(({
  element,
  dispatch,
  state,
  refKey
}, ref) => {
  const isInputMouseDownRef = useRef(false);
  const handleBlur = () => {
    dispatch({
      type: 'CLOSE'
    });
  };
  const handleChange = e => {
    dispatch({
      type: 'MANUALLY_UPDATE_INPUT',
      value: e.target.value
    });
  };
  const handleClick = () => {
    if (isInputMouseDownRef.current && !state.isOpen) {
      dispatch({
        type: 'OPEN'
      });
    }
  };
  const handleKeyDown = e => {
    switch (e.key) {
      case KEYS.ESCAPE:
      case KEYS.ENTER:
        dispatch({
          type: 'CLOSE'
        });
        break;
      case KEYS.UP:
      case KEYS.DOWN:
      case KEYS.SPACE:
        dispatch({
          type: 'OPEN'
        });
        break;
    }
  };
  const handleMouseDown = () => {
    isInputMouseDownRef.current = true;
  };
  const handleMouseUp = () => {
    setTimeout(() => {
      isInputMouseDownRef.current = false;
    }, 0);
  };
  return cloneElement(element, {
    [refKey]: ref,
    onMouseDown: composeEventHandlers(element.props.onMouseDown, handleMouseDown),
    onMouseUp: composeEventHandlers(element.props.onMouseUp, handleMouseUp),
    onClick: composeEventHandlers(element.props.onClick, handleClick),
    onBlur: composeEventHandlers(element.props.onBlur, handleBlur),
    onChange: composeEventHandlers(element.props.onChange, handleChange),
    onKeyDown: composeEventHandlers(element.props.onKeyDown, handleKeyDown),
    autoComplete: 'off',
    value: state.inputValue
  });
});
Input.displayName = 'Input';

export { Input };
