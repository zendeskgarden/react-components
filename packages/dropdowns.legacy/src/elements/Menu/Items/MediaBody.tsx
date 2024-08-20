/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledMediaBody } from '../../../styled';
import useMenuContext from '../../../utils/useMenuContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const MediaBody = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isCompact } = useMenuContext();

    return <StyledMediaBody ref={ref} isCompact={isCompact} {...props} />;
  }
);

MediaBody.displayName = 'MediaBody';
