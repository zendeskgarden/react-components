/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'steppers.step_content';

// has an isHidden prop
export const StyledStepContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: ${props =>
    `${props.theme.space.base * 2}px 0 ${props.theme.space.base * 2}px ${props.theme.space.base *
      3}px`};
  padding: ${props => props.theme.space.base * 4}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStepContent.defaultProps = {
  theme: DEFAULT_THEME
};
