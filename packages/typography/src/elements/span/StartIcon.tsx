/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledIcon } from '../../styled';

const StartIconComponent = (props: HTMLAttributes<HTMLElement>) => (
  <StyledIcon isStart {...props} />
);

StartIconComponent.displayName = 'Span.StartIcon';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const StartIcon = StartIconComponent;
