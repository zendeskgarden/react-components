/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

interface IStyledTabsProps {
  $isVertical?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledTabs = styled.div<IStyledTabsProps>`
  display: ${props => (props.$isVertical ? 'table' : 'block')};
  overflow: hidden;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${componentStyles};
`;
