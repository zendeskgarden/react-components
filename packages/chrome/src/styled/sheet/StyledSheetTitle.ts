/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  retrieveComponentStyles,
  getLineHeight,
  getColor,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_title';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const fontColor = getColor('neutralHue', 800, props.theme);

  return css`
    color: ${fontColor};
  `;
};

const fontStyles = (props: ThemeProps<DefaultTheme>) => {
  return css`
    line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
    font-size: ${props.theme.fontSizes.md};
    font-weight: ${props.theme.fontWeights.semibold};
  `;
};

export const StyledSheetTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  margin-bottom: ${props => props.theme.space.base / 4}px;

  ${props => colorStyles(props)};
  ${props => fontStyles(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetTitle.defaultProps = {
  theme: DEFAULT_THEME
};
