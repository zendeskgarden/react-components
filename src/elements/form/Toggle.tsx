/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';

import { StyledToggleInput } from '../styled';
import { IToggleProps } from '../types';
import useFieldContext from '../utils/useFieldContext';
import useFieldsetContext from '../utils/useFieldsetContext';
import { InputContext } from '../utils/useInputContext';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Toggle = React.forwardRef<HTMLInputElement, IToggleProps>(
  ({ children, isCompact, ...other }, ref) => {
    const fieldsetContext = useFieldsetContext();
    const fieldContext = useFieldContext();

    let combinedProps = {
      $isCompact: fieldsetContext ? fieldsetContext.isCompact : isCompact,
      ref,
      ...other,
      role: 'switch'
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <InputContext.Provider value="toggle">
        <StyledToggleInput {...combinedProps} />
        {children}
      </InputContext.Provider>
    );
  }
);

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
  isCompact: PropTypes.bool
};
