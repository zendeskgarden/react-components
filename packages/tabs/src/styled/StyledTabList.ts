/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import {
  retrieveComponentStyles,
  getColorV8,
  DEFAULT_THEME,
  getLineHeight
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tablist';

interface IStyledTabListProps {
  isVertical?: boolean;
}

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const borderColor = getColorV8('neutralHue', 300, theme);
  const foregroundColor = getColorV8('neutralHue', 600, theme);

  return css`
    border-bottom-color: ${borderColor};
    color: ${foregroundColor};
  `;
};

/*
 * 1. List element reset.
 */
const sizeStyles = ({ theme, isVertical }: IStyledTabListProps & ThemeProps<DefaultTheme>) => {
  const marginBottom = isVertical ? 0 : `${theme.space.base * 5}px`;
  const borderBottom = isVertical ? undefined : theme.borderWidths.sm;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);

  return css`
    margin-top: 0; /* [1] */
    margin-bottom: ${marginBottom};
    border-bottom-width: ${borderBottom};
    padding: 0; /* [1] */
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledTabList = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTabListProps>`
  display: ${props => (props.isVertical ? 'table-cell' : 'block')};
  border-bottom: ${props => (props.isVertical ? 'none' : props.theme.borderStyles.solid)};
  vertical-align: ${props => (props.isVertical ? 'top' : undefined)};
  white-space: nowrap;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTabList.defaultProps = {
  theme: DEFAULT_THEME
};
