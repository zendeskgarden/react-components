/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Children, cloneElement, ReactElement } from 'react';
import { IStyledBaseIconProps } from '../types';

export const StyledBaseIcon = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, theme, ...props }: IStyledBaseIconProps) =>
    cloneElement(Children.only(children as ReactElement), props)
)`
  /* empty-source */
`;
