/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { TextareaHTMLAttributes, useRef, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import useFieldContext from '../utils/useFieldContext';
import { StyledTextarea } from '../styled';
import { VALIDATION } from '../utils/validation';

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Apply compact styling */
  isCompact?: boolean;
  /** Remove borders and padding */
  isBare?: boolean;
  /** Apply inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Display a mechanism for vertical resize */
  isResizable?: boolean;
  /** Lower-bound for dynamic height changes */
  minRows?: number;
  /** Upper-bound for dynamic height changes */
  maxRows?: number;
  validation?: VALIDATION;
}

const parseStyleValue = (value: string) => {
  return parseInt(value, 10) || 0;
};

/**
 * Must be rendered within a `<Field>` element; accepts all
 * `<textarea />` attributes and events.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ minRows, maxRows, style, onChange, ...props }, ref) => {
    const fieldContext = useFieldContext();
    const textAreaRef = useCombinedRefs(ref);
    const shadowTextAreaRef = useRef<HTMLInputElement | null>(null);
    const [state, setState] = useState<{ overflow: boolean; height: number }>({
      overflow: false,
      height: 0
    });

    const isControlled = props.value !== null && props.value !== undefined;
    const isAutoResizable = (minRows !== undefined || maxRows !== undefined) && !props.isResizable;

    const calculateHeight = useCallback(() => {
      if (!isAutoResizable) {
        return;
      }

      const textarea = textAreaRef.current!;
      const computedStyle = window.getComputedStyle(textarea);
      const shadowTextArea = shadowTextAreaRef.current!;

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
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

      resizeHandler();

      return () => {
        resizeHandler.cancel();
        window.removeEventListener('resize', resizeHandler);
      };
    }, [calculateHeight, isAutoResizable]);

    const computedStyle: React.CSSProperties = {};

    if (isAutoResizable) {
      computedStyle.height = state.height;
      computedStyle.overflow = state.overflow ? 'hidden' : undefined;
    }

    let combinedProps = {
      ref: textAreaRef,
      rows: minRows,
      onChange: onChangeHandler,
      style: {
        ...computedStyle,
        ...style
      },
      ...props
    };

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps, { isDescribed: true });
    }

    return (
      <>
        <StyledTextarea {...(combinedProps as any)} />
        {isAutoResizable && (
          <StyledTextarea
            aria-hidden
            readOnly
            isHidden
            className={props.className}
            ref={shadowTextAreaRef}
            tabIndex={-1}
            isBare={props.isBare}
            isCompact={props.isCompact}
            style={style}
          />
        )}
      </>
    );
  }
);

Textarea.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  isResizable: PropTypes.bool,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};
