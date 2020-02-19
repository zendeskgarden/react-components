/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTextInput } from './StyledTextInput';

const COMPONENT_ID = 'forms.media_input';

export const StyledTextMediaInput = styled(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  isBare: true
})`
  flex-grow: 1;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextMediaInput.defaultProps = {
  theme: DEFAULT_THEME
};
