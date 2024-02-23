/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledSplitButton } from '../styled';
import { SplitButtonContext } from '../utils/useSplitButtonContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const SplitButton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...other }, ref) => (
    <SplitButtonContext.Provider value>
      <StyledSplitButton ref={ref} {...other}>
        {children}
      </StyledSplitButton>
    </SplitButtonContext.Provider>
  )
);

SplitButton.displayName = 'SplitButton';
