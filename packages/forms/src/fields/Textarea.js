/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable react/prop-types */

import React, { useRef, useCallback, useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import useFieldContext from '../utils/useFieldContext';
import { StyledTextarea } from '../styled';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

const parseStyleValue = value => {
  return parseInt(value, 10) || 0;
};

/**
 * Accepts all `<textarea />` props
 */
const Textarea = React.forwardRef(({ minRows, maxRows, style, onChange, ...props }, ref) => {
  const { getInputProps } = useFieldContext();
  const textAreaRef = useCombinedRefs(ref);
  const shadowTextAreaRef = useRef(null);
  const [state, setState] = useState({
    overflow: false,
    height: 0
  });

  const isControlled = props.value !== null && props.value !== undefined;
  const isAutoResizable = (minRows !== undefined || maxRows !== undefined) && !props.resizable;

  const calculateHeight = useCallback(() => {
    if (!isAutoResizable) {
      return;
    }

    const textarea = textAreaRef.current;
    const computedStyle = window.getComputedStyle(textarea);
    const shadowTextArea = shadowTextAreaRef.current;

    shadowTextArea.style.width = computedStyle.width;
    shadowTextArea.value = textarea.value || textarea.placeholder || ' ';

    const boxSizing = computedStyle.boxSizing;
    const padding =
      parseStyleValue(computedStyle.paddingBottom) + parseStyleValue(computedStyle.paddingTop);
    const border =
      parseStyleValue(computedStyle.borderTopWidth) +
      parseStyleValue(computedStyle.borderBottomWidth);

    const innerHeight = shadowTextArea.scrollHeight - padding;

    shadowTextArea.value = 'x';
    const singleRowHeight = shadowTextArea.scrollHeight - padding;

    let outerHeight = innerHeight;

    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }

    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight);

    const updatedHeight = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;

    setState(prevState => {
      if (
        (updatedHeight > 0 && Math.abs((prevState.height || 0) - updatedHeight) > 1) ||
        prevState.overflow !== overflow
      ) {
        return {
          overflow,
          height: updatedHeight
        };
      }

      return prevState;
    });
  }, [maxRows, minRows, textAreaRef, isAutoResizable]);

  const onChangeHandler = useCallback(
    e => {
      if (!isControlled) {
        calculateHeight();
      }

      if (onChange) {
        onChange(e);
      }
    },
    [calculateHeight, isControlled, onChange]
  );

  useEffect(() => {
    if (!isAutoResizable) {
      return undefined;
    }

    const resizeHandler = debounce(() => {
      calculateHeight();
    });

    window.addEventListener('resize', resizeHandler);

    return () => {
      resizeHandler.cancel();
      window.removeEventListener('resize', resizeHandler);
    };
  }, [calculateHeight, isAutoResizable]);

  useLayoutEffect(() => {
    calculateHeight();
  });

  const computedStyle = {};

  if (isAutoResizable) {
    computedStyle.height = state.height;
    computedStyle.overflow = state.overflow ? 'hidden' : undefined;
  }

  return (
    <>
      <StyledTextarea
        {...getInputProps(
          {
            'data-garden-id': 'forms.textarea',
            'data-garden-version': PACKAGE_VERSION,
            ref: textAreaRef,
            rows: minRows,
            onChange: onChangeHandler,
            style: {
              ...computedStyle,
              ...style
            },
            ...props
          },
          { isDescribed: true }
        )}
      />
      <StyledTextarea
        aria-hidden
        readOnly
        isHidden
        className={props.className}
        ref={shadowTextAreaRef}
        tabIndex={-1}
        bare={props.bare}
        small={props.small}
        style={style}
      />
    </>
  );
});

Textarea.propTypes = {
  small: PropTypes.bool,
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  resizable: PropTypes.bool,
  /** Lower-bound for dynamic height changes */
  minRows: PropTypes.number,
  /** Upper-bound for dynamic height changes */
  maxRows: PropTypes.number,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default Textarea;
