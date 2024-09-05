/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getLineHeight, retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.step_label';

interface IStyledLabelProps {
  $isActive?: boolean;
  $isHorizontal?: boolean;
}

export const StyledLabel = styled.div.attrs<IStyledLabelProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledLabelProps>`
  display: ${props => !props.$isHorizontal && 'flex'};
  align-items: ${props => !props.$isHorizontal && 'center'};
  transition:
    color 0.25s ease-in-out,
    font-weight 0.25s ease-in-out;
  text-align: ${props => props.$isHorizontal && 'center'};
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${({ $isActive, theme }) =>
    getColor({
      theme,
      variable: $isActive ? 'foreground.default' : 'foreground.subtle'
    })};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.$isActive && 600};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
