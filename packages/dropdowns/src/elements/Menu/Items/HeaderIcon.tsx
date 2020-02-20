/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledHeaderIcon } from '../../../styled';
import useMenuContext from '../../../utils/useMenuContext';

/**
 * Proxies all props to passed element
 */
export const HeaderIcon = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isCompact } = useMenuContext();

    return <StyledHeaderIcon ref={ref} isCompact={isCompact} {...props} />;
  }
);

HeaderIcon.displayName = 'HeaderIcon';
