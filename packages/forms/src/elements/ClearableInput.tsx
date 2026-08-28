/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { composeEventHandlers, useId } from '@zendeskgarden/container-utilities';
import { useText } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import ClearIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { IClearableInputProps } from '../types';
import useFieldContext from '../utils/useFieldContext';
import { Input } from './Input';
import { InputGroup } from './input-group/InputGroup';

/** Sets a controlled `<input>`'s value and dispatches a real `input` event, so the
 * consumer's `onChange` fires exactly as it would for user-driven input. */
const clearNativeInputValue = (input: HTMLInputElement) => {
  const valueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  )?.set;

  valueSetter?.call(input, '');
  input.dispatchEvent(new Event('input', { bubbles: true }));
};

export const ClearableInput = React.forwardRef<HTMLInputElement, IClearableInputProps>(
  (
    {
      onClear,
      clearButtonLabel,
      wrapperProps,
      wrapperRef,
      buttonProps: _buttonProps = {},
      isCompact,
      ...props
    },
    ref
  ) => {
    const fieldContext = useFieldContext();
    const inputRef = useRef<HTMLInputElement>(null);
    const generatedId = useId(props.id);
    const inputId = props.id ?? fieldContext?.getInputProps<HTMLInputElement>().id ?? generatedId;
    const ariaLabel = useText(ClearableInput, { clearButtonLabel }, 'clearButtonLabel', 'Clear');

    const { onClick, ...buttonProps } = _buttonProps;

    const onClearClick = composeEventHandlers(onClick, () => {
      const input = inputRef.current;

      if (input) {
        clearNativeInputValue(input);
        input.focus();
      }

      onClear?.();
    });

    return (
      <InputGroup
        isSeamless
        focusInset={false}
        isCompact={isCompact}
        {...wrapperProps}
        ref={wrapperRef}
      >
        <Input
          ref={mergeRefs([inputRef, ref])}
          {...props}
          id={inputId}
          data-garden-id="forms.clearable_input"
        />
        {String(props.value ?? '').length > 0 && (
          <IconButton
            aria-label={ariaLabel}
            aria-controls={inputId}
            isBasic
            {...buttonProps}
            onClick={onClearClick}
          >
            <ClearIcon />
          </IconButton>
        )}
      </InputGroup>
    );
  }
);

ClearableInput.displayName = 'ClearableInput';
