/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBaseHeaderItem } from './StyledBaseHeaderItem';

const COMPONENT_ID = 'chrome.header_item_wrapper';

export const StyledHeaderItemWrapper = styled(StyledBaseHeaderItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderItemWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
