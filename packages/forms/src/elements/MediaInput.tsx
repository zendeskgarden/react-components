/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers, useCombinedRefs } from '@zendeskgarden/container-utilities';
import { StyledTextMediaInput } from '../styled';
import FauxInput from './FauxInput';
import useFieldContext from '../utils/useFieldContext';
import { VALIDATION } from '../utils/validation';

export interface IMediaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Apply compact styling */
  isCompact?: boolean;
  /** Remove borders and padding */
  isBare?: boolean;
  /** Apply inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Slot for "start" icon */
  start?: any;
  /** Slot for "end" icon */
  end?: any;
  validation?: VALIDATION;
  /** Apply props to the wrapping `FauxInput` element */
  wrapperProps?: any;
  /** Apply ref to the wrapping `FauxInput` element */
  wrapperRef?: any;
  /** @ignore */
  isFocused?: boolean;
  /** @ignore */
  isHovered?: boolean;
}

/**
 * Must be rendered within a `<Field>` element; accepts all `<input>`
 * attributes and events.
 */
export const MediaInput = React.forwardRef<HTMLInputElement, IMediaInputProps>(
  (
    {
      start,
      end,
      disabled,
      isCompact,
      isBare,
      focusInset,
      validation,
      isFocused,
      isHovered,
      wrapperProps = {},
      wrapperRef,
      ...props
    },
    ref
  ) => {
    const fieldContext = useFieldContext();
    const inputRef = useCombinedRefs(ref);

    const { onClick, ...otherWrapperProps } = wrapperProps;

    const onFauxInputClickHandler = composeEventHandlers(onClick, () => {
      inputRef.current && inputRef.current.focus();
    });

    let combinedProps = {
      disabled,
      ref: inputRef,
      ...props
    };

    let isLabelHovered;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps, { isDescribed: true });
      isLabelHovered = fieldContext.isLabelHovered;
    }

    return (
      <FauxInput
        tabIndex={null}
        onClick={onFauxInputClickHandler}
        disabled={disabled}
        isFocused={isFocused}
        isHovered={isHovered || isLabelHovered}
        isCompact={isCompact}
        isBare={isBare}
        focusInset={focusInset}
        validation={validation}
        mediaLayout
        ref={wrapperRef}
        {...otherWrapperProps}
      >
        {start && <FauxInput.StartIcon isDisabled={disabled}>{start}</FauxInput.StartIcon>}
        <StyledTextMediaInput {...(combinedProps as any)} />
        {end && <FauxInput.EndIcon isDisabled={disabled}>{end}</FauxInput.EndIcon>}
      </FauxInput>
    );
  }
);

MediaInput.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  start: PropTypes.node,
  end: PropTypes.node,
  validation: PropTypes.oneOf(['success', 'warning', 'error']),
  wrapperProps: PropTypes.object
};
