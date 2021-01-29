/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { FauxInput } from '@zendeskgarden/react-forms';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colordialog.fauxinput';

export const StyledFauxInput = styled(FauxInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  padding: 0;
  width: ${props => props.theme.space.base * 17}px;
  height: 42px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFauxInput.defaultProps = {
  theme: DEFAULT_THEME
};
