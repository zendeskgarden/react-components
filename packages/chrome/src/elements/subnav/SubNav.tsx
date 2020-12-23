/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledSubNav } from '../../styled';
import { useChromeContext } from '../../utils/useChromeContext';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const SubNav = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { hue, isLight, isDark } = useChromeContext();

  return <StyledSubNav ref={ref} hue={hue} isLight={isLight} isDark={isDark} {...props} />;
});

SubNav.displayName = 'SubNav';
