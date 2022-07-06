/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { StyledBody } from '../styled';
import { useModalContext } from '../utils/useModalContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { getContentProps } = useModalContext();

  return <StyledBody {...(getContentProps(props) as HTMLAttributes<HTMLDivElement>)} ref={ref} />;
});

Body.displayName = 'Body';
