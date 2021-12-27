/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import mergeRefs from 'react-merge-refs';
import { StyledTextMediaInput } from '../styled';
import { FauxInput } from './FauxInput';
import useFieldContext from '../utils/useFieldContext';
import { VALIDATION } from '../utils/validation';

export interface IMediaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Applies compact styling */
  isCompact?: boolean;
  /** Removes borders and padding */
  isBare?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Accepts a "start" icon to display */
  start?: any;
  /** Accepts an "end" icon to display */
  end?: any;
  /** Applies validation state styling */
  validation?: VALIDATION;
  /** Applies props to the wrapping [FauxInput](#fauxinput) element */
  wrapperProps?: any;
  /** Applies a ref to the wrapping [FauxInput](#fauxinput) element */
  wrapperRef?: any;
}

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
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
      readOnly,
      validation,
      wrapperProps = {},
      wrapperRef,
      onSelect,
      ...props
    },
    ref
  ) => {
    const fieldContext = useFieldContext();
    const inputRef = useRef<HTMLInputElement>();
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const { onClick, onFocus, onBlur, onMouseOver, onMouseOut, ...otherWrapperProps } =
      wrapperProps;

    const onFauxInputClickHandler = composeEventHandlers(onClick, () => {
      inputRef.current && inputRef.current.focus();
    });

    const onFauxInputFocusHandler = composeEventHandlers(onFocus, () => {
      setIsFocused(true);
    });

    const onFauxInputBlurHandler = composeEventHandlers(onBlur, () => {
      setIsFocused(false);
    });

    const onFauxInputMouseOverHandler = composeEventHandlers(onMouseOver, () => {
      setIsHovered(true);
    });

    const onFauxInputMouseOutHandler = composeEventHandlers(onMouseOut, () => {
      setIsHovered(false);
    });

    const onSelectHandler = readOnly
      ? composeEventHandlers(onSelect, (event: React.SyntheticEvent<HTMLInputElement>) => {
          event.currentTarget.select();
        })
      : onSelect;

    let combinedProps = {
      disabled,
      readOnly,
      ref: mergeRefs([inputRef, ref]),
      onSelect: onSelectHandler,
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
        onFocus={onFauxInputFocusHandler}
        onBlur={onFauxInputBlurHandler}
        onMouseOver={onFauxInputMouseOverHandler}
        onMouseOut={onFauxInputMouseOutHandler}
        disabled={disabled}
        isFocused={isFocused}
        isHovered={isHovered || isLabelHovered}
        isCompact={isCompact}
        isBare={isBare}
        focusInset={focusInset}
        readOnly={readOnly}
        validation={validation}
        mediaLayout
        {...otherWrapperProps}
        ref={wrapperRef}
      >
        {start && (
          <FauxInput.StartIcon
            isDisabled={disabled}
            isFocused={isFocused}
            isHovered={isHovered || isLabelHovered}
          >
            {start}
          </FauxInput.StartIcon>
        )}
        <StyledTextMediaInput {...(combinedProps as any)} />
        {end && (
          <FauxInput.EndIcon
            isDisabled={disabled}
            isFocused={isFocused}
            isHovered={isHovered || isLabelHovered}
          >
            {end}
          </FauxInput.EndIcon>
        )}
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

MediaInput.displayName = 'MediaInput';
