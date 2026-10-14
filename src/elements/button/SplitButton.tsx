/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { SplitButtonProvider } from '../../context/button/SplitButtonContext';
import { StyledSplitButton } from '../../views/button/StyledSplitButton';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const SplitButton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...other }, ref) => (
    <SplitButtonProvider value>
      <StyledSplitButton
        ref={ref}
        {...other}
        data-garden-id={COMPONENT_IDS['buttons.button_group_view']}
        data-garden-version={PACKAGE_VERSION}
      >
        {children}
      </StyledSplitButton>
    </SplitButtonProvider>
  )
);

SplitButton.displayName = 'SplitButton';
