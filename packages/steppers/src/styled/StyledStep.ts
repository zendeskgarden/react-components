/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledStepContent } from './StyledStepContent';

const COMPONENT_ID = 'steppers.step';

export interface IStyledStep {
  isHorizontal?: boolean;
}

export const StyledStep = styled.div.attrs<IStyledStep>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStep>`
  display: ${props => props.isHorizontal && 'flex'};
  flex-direction: ${props => props.isHorizontal && 'column'};
  align-items: ${props => props.isHorizontal && 'center'};
  text-align: ${props => props.isHorizontal && 'center'};

  &:not(:last-of-type) ${StyledStepContent} {
    border-left: ${props => props.theme.borders.sm};
    border-color: ${props => getColor('neutralHue', 300, props.theme)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStep.defaultProps = {
  theme: DEFAULT_THEME
};
