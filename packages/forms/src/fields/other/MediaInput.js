/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import useFieldContext from '../../utils/useFieldContext';
import { StyledTextMediaInput, StyledTextMediaFigure } from '../../styled';
import FauxInput from './FauxInput';
import VALIDATION from '../../utils/validation';

/**
 * Accepts all `<input />` props.
 */
const MediaInput = React.forwardRef(
  ({ start, end, disabled, isCompact, ...props }, forwardedRef) => {
    const { getInputProps } = useFieldContext();
    const inputRef = useRef(undefined);

    const { onClick, ...other } = props;

    const onFauxInputClickHandler = composeEventHandlers(onClick, () => {
      inputRef.current && inputRef.current.focus();
    });

    return (
      <FauxInput
        tabIndex={null}
        onClick={onFauxInputClickHandler}
        disabled={disabled}
        isCompact={isCompact}
        mediaLayout
        {...other}
      >
        {start && <StyledTextMediaFigure isCompact={isCompact}>{start}</StyledTextMediaFigure>}
        <StyledTextMediaInput
          {...getInputProps({
            disabled,
            isCompact,
            ref: ref => {
              inputRef.current = ref;

              if (forwardedRef) {
                forwardedRef(ref);
              }
            },
            ...props
          })}
        />
        {end && <StyledTextMediaFigure isCompact={isCompact}>{end}</StyledTextMediaFigure>}
      </FauxInput>
    );
  }
);

MediaInput.propTypes = {
  isCompact: PropTypes.bool,
  /** Removes all borders and styling */
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  /** The slot for "start" icons and content */
  start: PropTypes.node,
  /** The slot for "end" icons and content */
  end: PropTypes.node,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  /** @ignore */
  onClick: PropTypes.func
};

export default MediaInput;
