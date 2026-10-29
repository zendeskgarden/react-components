/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ISplitButtonProps, SIZE } from '../types';
import { StyledSplitButton } from '../styled';
import { SplitButtonContext } from '../utils/useSplitButtonContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const SplitButton = forwardRef<HTMLDivElement, ISplitButtonProps>(
  ({ children, isBasic, isDanger, isNeutral, isPill, isPrimary, size, ...other }, ref) => {
    const value = useMemo(
      () => ({ focusInset: true, isBasic, isDanger, isNeutral, isPill, isPrimary, size }),
      [isBasic, isDanger, isNeutral, isPill, isPrimary, size]
    );

    return (
      <SplitButtonContext.Provider value={value}>
        <StyledSplitButton ref={ref} {...other}>
          {children}
        </StyledSplitButton>
      </SplitButtonContext.Provider>
    );
  }
);

SplitButton.displayName = 'SplitButton';

SplitButton.propTypes = {
  isBasic: PropTypes.bool,
  isDanger: PropTypes.bool,
  isNeutral: PropTypes.bool,
  isPill: PropTypes.bool,
  isPrimary: PropTypes.bool,
  size: PropTypes.oneOf(SIZE)
};
