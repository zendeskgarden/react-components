/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_header';

export const StyledSheetHeader = styled.header.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  display: flex;
  flex-flow: ${props => (props.theme.rtl ? 'row-reverse' : 'row')} wrap;
  align-content: space-between;
  align-items: center;
  border-bottom: ${props =>
    `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}}`};
  padding: ${props => props.theme.space.base * 5}px;
  min-height: ${props => props.theme.space.base * 10}px;
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};

  & > * {
    width: 100%;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetHeader.defaultProps = {
  theme: DEFAULT_THEME
};
