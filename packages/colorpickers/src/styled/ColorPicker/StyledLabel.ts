/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Label } from '@zendeskgarden/react-forms';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpicker.label';

export const StyledLabel = styled(Label).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  font-weight: ${props => props.theme.fontWeights.regular};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLabel.defaultProps = {
  theme: DEFAULT_THEME
};
