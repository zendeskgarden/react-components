/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { composeEventHandlers, useId } from '@zendeskgarden/container-utilities';
import { useText } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import ClearIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { IClearableInputProps } from '../types';
import useFieldContext from '../utils/useFieldContext';
import { Input } from './Input';
import { InputGroup } from './input-group/InputGroup';

const hasStringValue = (value: unknown) => String(value ?? '').length > 0;

export const ClearableInput = React.forwardRef<HTMLInputElement, IClearableInputProps>(
  (
    {
      onClear,
      clearButtonLabel,
      wrapperProps,
      wrapperRef,
      buttonProps: _buttonProps = {},
      isCompact,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const fieldContext = useFieldContext();
    const inputRef = useRef<HTMLInputElement>(null);
    const generatedId = useId(props.id);
    const inputId = props.id ?? fieldContext?.getInputProps<HTMLInputElement>().id ?? generatedId;
    const ariaLabel = useText(ClearableInput, { clearButtonLabel }, 'clearButtonLabel', 'Clear');

    const isControlled = value !== undefined;
    const [uncontrolledHasValue, setUncontrolledHasValue] = useState(() =>
      hasStringValue(defaultValue)
    );
    const hasValue = isControlled ? hasStringValue(value) : uncontrolledHasValue;

    const onInputChange = composeEventHandlers(
      onChange,
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
          setUncontrolledHasValue(hasStringValue(event.target.value));
        }
      }
    );

    const { onClick, ...buttonProps } = _buttonProps;

    const onClearClick = composeEventHandlers(onClick, () => {
      const input = inputRef.current;

      if (input) {
        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set?.call(
          input,
          ''
        );
        input.dispatchEvent(new Event('input', { bubbles: true }));
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
          value={value}
          defaultValue={defaultValue}
          onChange={onInputChange}
          id={inputId}
          data-garden-id="forms.clearable_input"
        />
        {hasValue ? (
          <IconButton
            aria-label={ariaLabel}
            aria-controls={inputId}
            isBasic
            {...buttonProps}
            onClick={onClearClick}
          >
            <ClearIcon />
          </IconButton>
        ) : null}
      </InputGroup>
    );
  }
);

ClearableInput.displayName = 'ClearableInput';
