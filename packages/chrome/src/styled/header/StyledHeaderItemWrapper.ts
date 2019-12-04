/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.header_item_wrapper';

import { StyledHeaderItem } from './StyledHeaderItem';

export const StyledHeaderItemWrapper = styled(StyledHeaderItem.withComponent('div')).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles('chrome.header_item_wrapper', props)};
`;
