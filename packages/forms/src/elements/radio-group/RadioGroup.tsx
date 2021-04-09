/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const RadioGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div {...props} role="group" ref={ref}>
      {children}
    </div>
  )
);

RadioGroup.displayName = 'RadioGroup';
