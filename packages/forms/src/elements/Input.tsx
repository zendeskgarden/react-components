/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { IInputProps, VALIDATION } from '../types';
import useFieldContext from '../utils/useFieldContext';
import { useInputGroupContext } from '../utils/useInputGroupContext';
import { StyledTextInput } from '../styled';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ onSelect, onClick, onBlur, onKeyDown, onChange, ...props }, ref) => {
    console.log('test input', props);
    console.log('ref input', ref);
    const fieldContext = useFieldContext();
    const inputGroupContext = useInputGroupContext();

    const onSelectHandler = props.readOnly
      ? useMemo(() => composeEventHandlers(onSelect, (event: React.SyntheticEvent<HTMLInputElement>) => {
        event.currentTarget.select();
      }), [])
      : onSelect;

    const onClickHandler = props.readOnly ? useMemo(() => composeEventHandlers(onClick, (event: React.SyntheticEvent<HTMLInputElement>) => {
      event.currentTarget.click();
    }), []) : onClick;
    const onChangeHandler = props.readOnly ? useMemo(() => composeEventHandlers(onChange, (event: React.SyntheticEvent<HTMLInputElement>) => {
          event.currentTarget.click();
        }), []) : onChange;
    const onKeyDownHandler = props.readOnly ? useMemo(() => composeEventHandlers(onKeyDown, (event: React.SyntheticEvent<HTMLInputElement>) => {
          event.currentTarget.click();
        }), []) : onKeyDown;


    let combinedProps = {
      ref,
      onSelect: onSelectHandler,
      onClick: onClickHandler,
      onChange: onChangeHandler,
      onKeyDown: onKeyDownHandler,
      ...props
    };

    if (inputGroupContext) {
      combinedProps = {
        ...combinedProps,
        isCompact: inputGroupContext.isCompact || combinedProps.isCompact,
        focusInset: props.focusInset === undefined ? true : props.focusInset
      };
    }

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps, { isDescribed: true });
    }
    console.log('combined props', combinedProps);
    return <StyledTextInput {...(combinedProps as any)} />;
  }
);

Input.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};

Input.displayName = 'Input';
