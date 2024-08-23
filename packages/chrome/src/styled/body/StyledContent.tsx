/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, getLineHeight, getColor } from '@zendeskgarden/react-theming';
import { getFooterHeight, getHeaderHeight } from '../utils';

const COMPONENT_ID = 'chrome.content';

interface IStyledContentProps {
  hasFooter?: boolean;
}

const sizeStyles = ({ theme, hasFooter }: IStyledContentProps & ThemeProps<DefaultTheme>) => {
  const fontSize = theme.fontSizes.md;
  const height = hasFooter
    ? `calc(100% - ${math(`${getHeaderHeight(theme)} + ${getFooterHeight(theme)}`)})`
    : `calc(100% - ${getHeaderHeight(theme)})`;
  const lineHeight = getLineHeight(theme.lineHeights.md, theme.fontSizes.md);

  return css`
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledContentProps>`
  display: flex;
  color-scheme: only ${p => p.theme.colors.base};
  color: ${props => getColor({ theme: props.theme, variable: 'foreground.default' })};

  ${sizeStyles};

  &:focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
