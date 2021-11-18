/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_footer_item';

export const StyledSheetFooterItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  ${props => `margin-${props.theme.rtl ? 'right' : 'left'}: ${props.theme.space.base * 5}px;`}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetFooterItem.defaultProps = {
  theme: DEFAULT_THEME
};
