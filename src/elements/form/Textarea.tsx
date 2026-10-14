/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import {
  useRef,
  useCallback,
  useLayoutEffect,
  useState,
  CSSProperties,
  ChangeEvent,
  SyntheticEvent,
  forwardRef
} from 'react';
import { mergeRefs } from 'react-merge-refs';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import { ITextareaProps, VALIDATION } from '../../types/elements';
import { isInvalid } from '../../utils/form/isInvalid';
import { StyledTextarea } from '../../views/form/StyledTextarea';
import { COMPONENT_IDS } from '../utils';

const parseStyleValue = (value: string) => {
  return parseInt(value, 10) || 0;
};

/**
 * @extends TextareaHTMLAttributes<HTMLTextAreaElement>
 */
export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      isCompact,
      isBare,
      focusInset,
      isResizable,
      minRows,
      maxRows,
      style,
      validation,
      onChange,
      onSelect,
      ...other
    },
    ref
  ) => {
    const fieldContext = useFieldContext();
    const textAreaRef = useRef<HTMLTextAreaElement>(undefined);
    const shadowTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const [state, setState] = useState<{ overflow: boolean; height: number }>({
      overflow: false,
      height: 0
    });

    const isControlled = other.value !== null && other.value !== undefined;
    const isAutoResizable = (minRows !== undefined || maxRows !== undefined) && !isResizable;

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
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (!isControlled) {
          calculateHeight();
        }

        if (onChange) {
          onChange(e);
        }
      },
      [calculateHeight, isControlled, onChange]
    );

    useLayoutEffect(() => {
      calculateHeight();
    });

    const computedStyle: CSSProperties = {};

    if (isAutoResizable) {
      computedStyle.height = state.height;
      computedStyle.overflow = state.overflow ? 'hidden' : undefined;
    }

    const onSelectHandler = other.readOnly
      ? composeEventHandlers(onSelect, (event: SyntheticEvent<HTMLTextAreaElement>) => {
          event.currentTarget.select();
        })
      : onSelect;

    let combinedProps = {
      $focusInset: focusInset,
      $isBare: isBare,
      $isCompact: isCompact,
      $isResizable: isResizable,
      $validation: validation,
      onChange: onChangeHandler,
      onSelect: onSelectHandler,
      ref: mergeRefs([textAreaRef, ref]),
      rows: minRows,
      style: {
        ...computedStyle,
        ...style
      },
      ...other
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <>
        <StyledTextarea
          {...combinedProps}
          as="textarea"
          aria-invalid={isInvalid(validation)}
          data-garden-id={COMPONENT_IDS['forms.textarea']}
          data-garden-version={PACKAGE_VERSION}
        />
        {!!isAutoResizable && (
          <StyledTextarea
            $isBare={isBare}
            $isCompact={isCompact}
            $isHidden
            aria-hidden
            className={other.className}
            readOnly
            ref={shadowTextAreaRef}
            style={style}
            tabIndex={-1}
            as="textarea"
            aria-invalid={false}
            data-garden-id={COMPONENT_IDS['forms.textarea']}
            data-garden-version={PACKAGE_VERSION}
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
