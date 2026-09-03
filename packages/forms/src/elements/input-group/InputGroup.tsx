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
import { StyledInputGroup } from '../../styled/input-group/StyledInputGroup';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const InputGroup = React.forwardRef<HTMLDivElement, IInputGroupProps>(
  ({ isCompact, isUnified, focusInset, children, ...other }, ref) => {
    const fieldContext = useFieldContext();
    const contextValue = useMemo(() => ({ isCompact, isUnified }), [isCompact, isUnified]);
    const labelId =
      fieldContext?.hasLabel && !other['aria-label']
        ? fieldContext.getLabelProps({}).id
        : undefined;

    return (
      <InputGroupContext.Provider value={contextValue}>
        {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
        <StyledInputGroup
          role="group"
          aria-labelledby={labelId}
          ref={ref}
          $isCompact={isCompact}
          $isUnified={isUnified}
          $focusInset={focusInset}
          {...other}
        >
          {children}
        </StyledInputGroup>
      </InputGroupContext.Provider>
    );
  }
);

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
  isCompact: PropTypes.bool,
  isUnified: PropTypes.bool,
  focusInset: PropTypes.bool
};
