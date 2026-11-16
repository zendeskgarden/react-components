/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import type { WithTheme } from '../../types/views';

interface IStyledTabPanelProps {
  $isVertical?: boolean;
}

export const StyledTabPanel = styled.div<WithTheme<IStyledTabPanelProps>>`
  display: block;
  vertical-align: ${props => props.$isVertical && 'top'};
  color-scheme: only ${p => p.theme.colors.base};

  &[aria-hidden='true'] {
    display: none;
  }

  ${({ theme }) => focusStyles({ theme })};

  ${componentStyles};
`;
