/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getLineHeight, getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

import { StyledListItem } from './StyledListItem';

const COMPONENT_ID = 'pagination.gap';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const shift = 2;
  const fontSize = math(`${props.theme.fontSizes.md} + ${shift}`);
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(height, fontSize);
  const padding = `${props.theme.space.base * 1.5}px`;

  return css`
    padding: 0 ${padding};
    min-width: ${height};
    max-width: ${math(`${height} * 2`)}; /* [1] */
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  return css`
    color: ${getColor({ variable: 'foreground.subtle', theme })};
  `;
};

export const StyledGapListItem = styled(StyledListItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block;
  text-align: center;

  ${sizeStyles};

  ${colorStyles}

  &:hover {
    color: inherit;
  }

  ${componentStyles};
`;
