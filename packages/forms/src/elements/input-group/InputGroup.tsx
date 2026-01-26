/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { StyledInputGroup } from '../../styled';
import { IInputGroupProps } from '../../types';
import { InputGroupContext } from '../../utils/useInputGroupContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const InputGroup = React.forwardRef<HTMLDivElement, IInputGroupProps>(
  ({ isCompact, ...other }, ref) => {
    const contextValue = useMemo(() => ({ isCompact }), [isCompact]);

    return (
      <InputGroupContext.Provider value={contextValue}>
        <StyledInputGroup ref={ref} $isCompact={isCompact} {...other} />
      </InputGroupContext.Provider>
    );
  }
);

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
  isCompact: PropTypes.bool
};
