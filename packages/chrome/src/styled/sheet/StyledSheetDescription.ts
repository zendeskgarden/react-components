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
  getColor,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_description';

export const StyledSheetDescription = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  line-height: ${props => getLineHeight(props.theme.space.base * 4, props.theme.fontSizes.md)};
  color: ${props => getColor('neutralHue', 600, props.theme)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetDescription.defaultProps = {
  theme: DEFAULT_THEME
};
