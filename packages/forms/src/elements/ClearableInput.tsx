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
      disabled,
      readOnly,
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
    const [uncontrolledHasValue, setUncontrolledHasValue] = useState(() => !!defaultValue);
    const hasValue = isControlled ? !!value : uncontrolledHasValue;

    const { onClick, ...buttonProps } = _buttonProps;

    const onClearButtonClick = () => {
      const input = inputRef.current;

      if (input) {
        // Use the native setter (bypassing React's patched one) so React doesn't think the
        // value is unchanged, which would cause it to swallow the `input` event dispatched below.
        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set?.call(
          input,
          ''
        );
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.focus();
      }
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setUncontrolledHasValue(!!event.target.value);
      }
    };

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
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          defaultValue={defaultValue}
          onChange={composeEventHandlers(onChange, onInputChange)}
          id={inputId}
          data-garden-id="forms.clearable_input"
        />
        {hasValue && !disabled && !readOnly ? (
          <IconButton
            aria-label={ariaLabel}
            aria-controls={inputId}
            isBasic
            {...buttonProps}
            onClick={composeEventHandlers(onClick, onClearButtonClick, onClear)}
          >
            <ClearIcon aria-hidden="true" />
          </IconButton>
        ) : null}
      </InputGroup>
    );
  }
);

ClearableInput.displayName = 'ClearableInput';
