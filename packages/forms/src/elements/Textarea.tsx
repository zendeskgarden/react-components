/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useContext,
  useState
} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import mergeRefs from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { useDocument } from '@zendeskgarden/react-theming';

import { ITextareaProps, VALIDATION } from '../types';
import useFieldContext from '../utils/useFieldContext';
import { StyledTextarea } from '../styled';

const parseStyleValue = (value: string) => {
  return parseInt(value, 10) || 0;
};

/**
 * @extends TextareaHTMLAttributes<HTMLTextAreaElement>
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ minRows, maxRows, style, onChange, onSelect, ...props }, ref) => {
    const fieldContext = useFieldContext();
    const textAreaRef = useRef<HTMLTextAreaElement>();
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

    const theme = useContext(ThemeContext);
    const environment = useDocument(theme);

    useEffect(() => {
      if (!isAutoResizable) {
        return undefined;
      }

      if (environment) {
        const win = environment.defaultView! || window;

        const resizeHandler = debounce(calculateHeight);

        win.addEventListener('resize', resizeHandler);

        return () => {
          resizeHandler.cancel();
          win.removeEventListener('resize', resizeHandler);
        };
      }

      return undefined;
    }, [calculateHeight, isAutoResizable, environment]);

    useLayoutEffect(() => {
      calculateHeight();
    });

    const computedStyle: React.CSSProperties = {};

    if (isAutoResizable) {
      computedStyle.height = state.height;
      computedStyle.overflow = state.overflow ? 'hidden' : undefined;
    }

    const onSelectHandler = props.readOnly
      ? composeEventHandlers(onSelect, (event: React.SyntheticEvent<HTMLInputElement>) => {
          event.currentTarget.select();
        })
      : onSelect;

    let combinedProps = {
      ref: mergeRefs([textAreaRef, ref]),
      rows: minRows,
      onChange: onChangeHandler,
      onSelect: onSelectHandler,
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
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  validation: PropTypes.oneOf(VALIDATION)
};

Textarea.displayName = 'Textarea';
