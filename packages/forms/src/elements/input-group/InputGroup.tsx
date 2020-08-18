/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  HTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import PropTypes from 'prop-types';
import { InputGroupContext } from '../../utils/useInputGroupContext';
import { StyledInputGroup, StyledPrepend, StyledAppend } from '../../styled';

interface IStaticInputGroupExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Prepend: typeof StyledPrepend;
  Append: typeof StyledAppend;
}

export interface IInputGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Apply compact styling */
  isCompact?: boolean;
}

/* eslint-disable react/display-name */

/**
 * Accepts all `<div>` props
 */
export const InputGroup = React.forwardRef<HTMLDivElement, IInputGroupProps>(
  ({ isCompact, ...props }, ref) => {
    const contextValue = { isCompact };

    return (
      <InputGroupContext.Provider value={contextValue}>
        <StyledInputGroup ref={ref} isCompact={isCompact} {...props} />
      </InputGroupContext.Provider>
    );
  }
) as IStaticInputGroupExport<HTMLDivElement, IInputGroupProps>;

InputGroup.Prepend = StyledPrepend;
InputGroup.Append = StyledAppend;

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
  isCompact: PropTypes.bool
};
