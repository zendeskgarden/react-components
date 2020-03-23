/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.stepper';

export interface IStyledStepper {
  isHorizontal?: boolean;
}

/**
 * 1. <ol> reset.
 */
export const StyledStepper = styled.ol.attrs<IStyledStepper>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStepper>`
  display: ${props => props.isHorizontal && 'flex'};
  margin: 0; /* [1] */
  padding: 0; /* [1] */
  list-style: none; /* [1] */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStepper.defaultProps = {
  theme: DEFAULT_THEME
};
