/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable react/prop-types */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import useFieldContext from '../../utils/useFieldContext';
import { StyledTextMediaInput, StyledTextMediaFigure } from '../../styled';
import FauxInput from './FauxInput';

/**
 * Accepts all `<input />` props.
 */
const MediaInput = React.forwardRef(
  ({ wrapperProps = {}, start, end, disabled, ...props }, forwardedRef) => {
    const { getInputProps } = useFieldContext();
    const inputRef = useRef(undefined);

    const { onClick, ...otherWrapperProps } = wrapperProps;

    const onFauxInputClickHandler = composeEventHandlers(onClick, () => {
      inputRef.current && inputRef.current.focus();
    });

    return (
      <FauxInput
        data-garden-id="forms.media_input"
        data-garden-version={PACKAGE_VERSION}
        onClick={onFauxInputClickHandler}
        disabled={disabled}
        mediaLayout
        {...otherWrapperProps}
      >
        {start && <StyledTextMediaFigure>{start}</StyledTextMediaFigure>}
        <StyledTextMediaInput
          {...getInputProps({
            disabled,
            bare: true,
            ref: ref => {
              inputRef.current = ref;

              if (forwardedRef) {
                forwardedRef(ref);
              }
            },
            ...props
          })}
        />
        {end && <StyledTextMediaFigure>{end}</StyledTextMediaFigure>}
      </FauxInput>
    );
  }
);

MediaInput.propTypes = {
  /** Applied to the wrapping `<div>` element. Accepts all props of `FauxInput`. */
  wrapperProps: PropTypes.object,
  /** The slot for "start" icons and content */
  start: PropTypes.node,
  /** The slot for "end" icons and content */
  end: PropTypes.node
};

export default MediaInput;
