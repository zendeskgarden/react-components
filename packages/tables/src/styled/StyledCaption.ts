/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.caption';

export const StyledCaption = styled.caption.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: table-caption;
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCaption.defaultProps = {
  theme: DEFAULT_THEME
};
