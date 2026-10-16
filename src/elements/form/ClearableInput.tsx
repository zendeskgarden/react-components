/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers, useId } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { useRef, useState, ChangeEvent, MouseEvent, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import ClearIcon from 'svg-icons-legacy/src/16/x-stroke.svg';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import { useText } from '../../theming/utils/useText';
import { IClearableInputProps, VALIDATION } from '../../types/elements';
import { StyledClearableInput } from '../../views/form/StyledClearableInput';
import { IconButton } from '../button/IconButton';
import { COMPONENT_IDS } from '../utils';
import { InputComponent } from './Input';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const ClearableInput = forwardRef<HTMLInputElement, IClearableInputProps>(
  (
    {
      clearButtonLabel,
      wrapperProps,
      wrapperRef,
      buttonProps: _buttonProps = {},
      isCompact,
      focusInset,
      isBare,
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

    const { onClick, onMouseDown, ...buttonProps } = _buttonProps;

    const onClearButtonMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
      // Stops the button from taking focus on mousedown, so a mouse click doesn't blur the
      // input (with its pre-clear value) before the value actually clears.
      event.preventDefault();
    };

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

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setUncontrolledHasValue(!!event.target.value);
      }
    };

    return (
      <StyledClearableInput
        focusInset={focusInset}
        {...wrapperProps}
        isUnified
        isCompact={isCompact}
        $isBare={isBare}
        onClick={composeEventHandlers(wrapperProps?.onClick, () => {
          inputRef.current?.focus();
        })}
        ref={wrapperRef}
      >
        <InputComponent
          ref={mergeRefs([inputRef, ref])}
          {...props}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          defaultValue={defaultValue}
          onChange={composeEventHandlers(onChange, onInputChange)}
          id={inputId}
          $componentId={COMPONENT_IDS['forms.clearable_input']}
        />
        {hasValue && !disabled && !readOnly ? (
          <IconButton
            aria-label={ariaLabel}
            aria-controls={inputId}
            isBasic
            {...buttonProps}
            focusInset={!isCompact}
            onMouseDown={composeEventHandlers(onMouseDown, onClearButtonMouseDown)}
            onClick={composeEventHandlers(onClick, onClearButtonClick)}
          >
            <ClearIcon aria-hidden="true" />
          </IconButton>
        ) : null}
      </StyledClearableInput>
    );
  }
);

ClearableInput.displayName = 'ClearableInput';

ClearableInput.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION),
  clearButtonLabel: PropTypes.string,
  wrapperProps: PropTypes.object,
  wrapperRef: PropTypes.any,
  buttonProps: PropTypes.object
};
