/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.option.content';

export const StyledOptionContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledOptionContent.defaultProps = {
  theme: DEFAULT_THEME
};
