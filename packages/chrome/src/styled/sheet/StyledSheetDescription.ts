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

const COMPONENT_ID = 'chrome.sheet_description';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const fontColor = getColor('neutralHue', 600, props.theme);

  return css`
    color: ${fontColor};
  `;
};

const fontStyles = (props: ThemeProps<DefaultTheme>) => {
  return css`
    line-height: ${getLineHeight(props.theme.lineHeights.sm, props.theme.fontSizes.md)};
    font-size: ${props.theme.fontSizes.md};
  `;
};

export const StyledSheetDescription = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  ${props => colorStyles(props)};
  ${props => fontStyles(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetDescription.defaultProps = {
  theme: DEFAULT_THEME
};
