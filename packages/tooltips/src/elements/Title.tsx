/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledTitle } from '../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledTitle ref={ref} {...props} />
);

Title.displayName = 'Title';

export default Title;
