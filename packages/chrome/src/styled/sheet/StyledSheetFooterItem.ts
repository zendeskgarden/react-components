/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_footer_item';

export const StyledSheetFooterItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => `margin-${props.theme.rtl ? 'right' : 'left'}: ${props.theme.space.base * 5}px;`}

  ${componentStyles};
`;
