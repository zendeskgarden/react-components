/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import { StyledContent } from './StyledContent';
import { StyledLine } from './StyledLine';

const COMPONENT_ID = 'accordions.step';

interface IStyledStep {
  $isHorizontal?: boolean;
}

export const StyledStep = styled.li.attrs<IStyledStep>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStep>`
  position: ${props => props.$isHorizontal && 'relative'};
  flex: ${props => props.$isHorizontal && '1'};
  min-width: ${props => props.$isHorizontal && `${props.theme.space.base * 15}px`};

  &:last-of-type ${StyledLine} {
    display: ${props => props.theme.rtl && 'none'};
  }

  &:first-of-type ${StyledLine} {
    display: ${props => !props.theme.rtl && 'none'};
  }

  &:not(:last-of-type) ${StyledContent} {
    border-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.borders.sm};
    border-color: ${({ theme }) => getColor({ theme, variable: 'border.default' })};
  }

  ${componentStyles};
`;
