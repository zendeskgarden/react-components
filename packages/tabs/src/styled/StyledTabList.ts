/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import {
  retrieveComponentStyles,
  getLineHeight,
  getColor
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tablist';

interface IStyledTabListProps {
  $isVertical?: boolean;
}

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ theme, variable: 'border.default' });
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });

  return css`
    transition: border-color 0.25s ease-in-out;
    color-scheme: only ${p => p.theme.colors.base};
    border-bottom-color: ${borderColor};
    color: ${foregroundColor};
  `;
};

/*
 * 1. List element reset.
 */
const sizeStyles = ({ theme, $isVertical }: IStyledTabListProps & ThemeProps<DefaultTheme>) => {
  const marginBottom = $isVertical ? 0 : `${theme.space.base * 5}px`;
  const borderBottom = $isVertical ? undefined : theme.borderWidths.sm;
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
  display: ${props => (props.$isVertical ? 'table-cell' : 'block')};
  border-bottom: ${props => (props.$isVertical ? 'none' : props.theme.borderStyles.solid)};
  vertical-align: ${props => (props.$isVertical ? 'top' : undefined)};
  white-space: nowrap;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
