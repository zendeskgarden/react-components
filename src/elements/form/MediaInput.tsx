/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { useState, useRef, SyntheticEvent, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import { IMediaInputProps, VALIDATION } from '../../types/elements';
import { StyledTextMediaInput } from '../../views/form/StyledTextMediaInput';
import { COMPONENT_IDS } from '../utils';
import { FauxInput } from './FauxInput';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const MediaInput = forwardRef<HTMLInputElement, IMediaInputProps>(
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
    const inputRef = useRef<HTMLInputElement>(undefined);
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
      ? composeEventHandlers(onSelect, (event: SyntheticEvent<HTMLInputElement>) => {
          event.currentTarget.select();
        })
      : onSelect;

    let combinedProps = {
      disabled,
      readOnly,
      ref: mergeRefs([inputRef, ref]),
      onSelect: onSelectHandler,
      ...props
    } as any;

    let isLabelHovered;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
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
        {!!start && (
          <FauxInput.StartIcon
            isDisabled={disabled}
            isFocused={isFocused}
            isHovered={isHovered || isLabelHovered}
          >
            {start}
          </FauxInput.StartIcon>
        )}
        <StyledTextMediaInput
          {...combinedProps}
          $isBare
          aria-invalid={false}
          data-garden-id={COMPONENT_IDS['forms.media_input']}
          data-garden-version={PACKAGE_VERSION}
        />
        {!!end && (
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
  validation: PropTypes.oneOf(VALIDATION),
  start: PropTypes.any,
  end: PropTypes.any,
  wrapperProps: PropTypes.object,
  wrapperRef: PropTypes.any
};

MediaInput.displayName = 'MediaInput';
