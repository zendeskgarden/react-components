/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'steppers.stepper';

export interface IStyledStepper {
  isHorizontal?: boolean;
}

export const StyledStepper = styled.div.attrs<IStyledStepper>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStepper>`
  display: ${props => props.isHorizontal && 'flex'};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStepper.defaultProps = {
  theme: DEFAULT_THEME
};
