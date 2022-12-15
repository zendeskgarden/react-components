/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { StyledHead } from '../styled';
import { IHeadProps } from '../types';

/**
 * @extends HTMLAttributes<HTMLTableSectionElement>
 */
export const Head = forwardRef<HTMLTableSectionElement, IHeadProps>((props, ref) => (
  <StyledHead ref={ref} {...props} />
));

Head.displayName = 'Head';
