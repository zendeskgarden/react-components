/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ExecutionProps } from 'styled-components';
import React, { Children } from 'react';

export const StyledBaseIcon = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, theme, ...props }: React.HTMLProps<any> & ExecutionProps) =>
    React.cloneElement(Children.only(children as React.ReactElement), props)
)`
  /* empty-source */
`;
