/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.footer_item';

/**
 * Accepts all `<div>` props
 */
export const StyledFooterItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: ${props => `0 ${props.theme.space.base}px`};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFooterItem.defaultProps = {
  theme: DEFAULT_THEME
};
