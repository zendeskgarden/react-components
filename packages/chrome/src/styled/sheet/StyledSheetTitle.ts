/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { math } from 'polished';

const COMPONENT_ID = 'chrome.sheet_title';

const fontStyles = (props: ThemeProps<DefaultTheme>) => {
  return css`
    line-height: ${math(`${props.theme.lineHeights.md} - 1px`)};
    font-size: ${math(`${props.theme.fontSizes.md} - 1px`)};
    font-weight: ${props.theme.fontWeights.semibold};
  `;
};

export const StyledSheetTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  margin-bottom: ${props => props.theme.space.base / 4};

  ${props => fontStyles(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetTitle.defaultProps = {
  theme: DEFAULT_THEME
};
