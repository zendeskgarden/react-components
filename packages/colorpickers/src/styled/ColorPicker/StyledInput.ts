/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Input } from '@zendeskgarden/react-forms';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_input';

export const StyledInput = styled(Input as any).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  focusInset: false
})`
  text-align: center;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInput.defaultProps = {
  theme: DEFAULT_THEME
};
