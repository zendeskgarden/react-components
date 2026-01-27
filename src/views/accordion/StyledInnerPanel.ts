/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import type { IStyledAccordion } from '../../types/views';

import { StyledPanel } from './StyledPanel';

export const StyledInnerPanel = styled.div<IStyledAccordion>`
  overflow: hidden;
  line-height: inherit;
  font-size: inherit;

  ${StyledPanel}[aria-hidden='true'] > & {
    transition: ${({ $isAnimated }) => $isAnimated && 'visibility 0s 0.25s'};
    visibility: hidden;
  }

  ${StyledPanel}[aria-hidden='false'] > & {
    visibility: visible;
  }

  ${componentStyles};
`;
