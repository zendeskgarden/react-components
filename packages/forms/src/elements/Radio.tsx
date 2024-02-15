/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IRadioProps } from '../types';
import useFieldContext from '../utils/useFieldContext';
import { InputContext } from '../utils/useInputContext';
import { StyledRadioInput } from '../styled';
import useFieldsetContext from '../utils/useFieldsetContext';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Radio = React.forwardRef<HTMLInputElement, IRadioProps>(
  ({ children, ...props }, ref) => {
    const fieldsetContext = useFieldsetContext();
    const fieldContext = useFieldContext();

    let combinedProps = {
      ref,
      ...props,
      ...fieldsetContext
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <InputContext.Provider value="radio">
        <StyledRadioInput {...combinedProps} />
        {children}
      </InputContext.Provider>
    );
  }
);

Radio.displayName = 'Radio';

Radio.propTypes = {
  isCompact: PropTypes.bool
};
