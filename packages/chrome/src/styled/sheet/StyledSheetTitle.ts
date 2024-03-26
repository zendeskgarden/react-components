/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import {
  retrieveComponentStyles,
  getLineHeight,
  DEFAULT_THEME,
  getColorV8
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_title';

export const StyledSheetTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${props => getColorV8('foreground', 600 /* default shade */, props.theme)};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetTitle.defaultProps = {
  theme: DEFAULT_THEME
};
