/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { IStyledBaseHeaderItemProps, StyledBaseHeaderItem } from './StyledBaseHeaderItem';

const COMPONENT_ID = 'chrome.header_item_wrapper';

export const StyledHeaderItemWrapper = styled(StyledBaseHeaderItem as 'div').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'div'
})<IStyledBaseHeaderItemProps>`
  ${componentStyles};
`;
