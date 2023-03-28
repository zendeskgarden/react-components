/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledIcon } from '../../../styled';

const IconComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>((props, ref) => (
  <StyledIcon aria-hidden="true" {...props} ref={ref} />
));

IconComponent.displayName = 'Dropzone.Icon';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Icon = IconComponent;
