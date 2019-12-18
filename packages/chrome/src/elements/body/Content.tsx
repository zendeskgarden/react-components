/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledContent } from '../../styled';
import { useBodyContext } from '../../utils/useBodyContext';

/**
 * Accepts all `<div>` attributes and events
 */
export const Content = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { hasFooter } = useBodyContext();

    return <StyledContent ref={ref} hasFooter={hasFooter} {...props} />;
  }
);
