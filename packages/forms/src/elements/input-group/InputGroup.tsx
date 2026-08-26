/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { IInputGroupProps } from '../../types';
import useFieldContext from '../../utils/useFieldContext';
import { InputGroupContext } from '../../utils/useInputGroupContext';
import { StyledInputGroup } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const InputGroup = React.forwardRef<HTMLDivElement, IInputGroupProps>(
  ({ isCompact, isSeamless, ...other }, ref) => {
    const fieldContext = useFieldContext();
    const contextValue = useMemo(() => ({ isCompact, isSeamless }), [isCompact, isSeamless]);
    const labelId = fieldContext?.hasLabel ? fieldContext.getLabelProps({}).id : undefined;

    return (
      <InputGroupContext.Provider value={contextValue}>
        {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
        <StyledInputGroup
          aria-labelledby={labelId}
          ref={ref}
          $isCompact={isCompact}
          $isSeamless={isSeamless}
          {...other}
          role="group"
        />
      </InputGroupContext.Provider>
    );
  }
);

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
  isCompact: PropTypes.bool,
  isSeamless: PropTypes.bool
};
