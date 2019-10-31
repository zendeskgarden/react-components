/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers, useCombinedRefs } from '@zendeskgarden/container-utilities';
import { StyledTextMediaInput, StyledTextMediaFigure } from '../styled';
import FauxInput from './FauxInput';
import useFieldContext from '../utils/useFieldContext';
import VALIDATION from '../utils/validation';

/**
 * Must be rendered within a `<Field>` element; accepts all `<input>`
 * attributes and events.
 */
const MediaInput = React.forwardRef(
  (
    {
      start,
      end,
      disabled,
      isCompact,
      isBare,
      focusInset,
      validation,
      wrapperProps = {},
      ...props
    },
    ref
  ) => {
    const { getInputProps } = useFieldContext();
    const inputRef = useCombinedRefs(ref);

    const { onClick, ...otherWrapperProps } = wrapperProps;

    const onFauxInputClickHandler = composeEventHandlers(onClick, () => {
      inputRef.current && inputRef.current.focus();
    });

    return (
      <FauxInput
        tabIndex={null}
        onClick={onFauxInputClickHandler}
        disabled={disabled}
        isCompact={isCompact}
        isBare={isBare}
        focusInset={focusInset}
        validation={validation}
        mediaLayout
        {...otherWrapperProps}
      >
        {start && <StyledTextMediaFigure isCompact={isCompact}>{start}</StyledTextMediaFigure>}
        <StyledTextMediaInput
          {...getInputProps(
            {
              disabled,
              ref: inputRef,
              ...props
            },
            { isDescribed: true }
          )}
        />
        {end && <StyledTextMediaFigure isCompact={isCompact}>{end}</StyledTextMediaFigure>}
      </FauxInput>
    );
  }
);

MediaInput.propTypes = {
  /** Apply compact styling */
  isCompact: PropTypes.bool,
  /** Remove borders and padding */
  isBare: PropTypes.bool,
  /** Apply inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  /** Slot for "start" icon */
  start: PropTypes.node,
  /** Slot for "end" icon */
  end: PropTypes.node,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  /** Apply props to the wrapping `FauxInput` element */
  wrapperProps: PropTypes.object,
  /** @ignore */
  disabled: PropTypes.bool,
  /** @ignore */
  onClick: PropTypes.func
};

export default MediaInput;
