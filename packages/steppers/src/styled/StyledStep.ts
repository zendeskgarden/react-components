/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledStepContent } from './StyledStepContent';
import { StyledLine } from './StyledLine';

const COMPONENT_ID = 'steppers.step';

export interface IStyledStep {
  isHorizontal?: boolean;
}

export const StyledStep = styled.div.attrs<IStyledStep>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStep>`
  position: ${props => props.isHorizontal && 'relative'};
  flex: ${props => props.isHorizontal && '1'};

  &:${props => (props.theme.rtl ? 'last-of-type' : 'first-of-type')} ${StyledLine} {
    display: none;
  }

  &:not(:last-of-type) ${StyledStepContent} {
    border-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.borders.sm};
    border-color: ${props => getColor('neutralHue', 300, props.theme)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStep.defaultProps = {
  theme: DEFAULT_THEME
};
