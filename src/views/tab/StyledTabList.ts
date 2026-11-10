/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { WithTheme } from '../../types/views';

interface IStyledTabListProps {
  $isVertical?: boolean;
}

/*
 * 1. The rule sits under the tabs, so the indicator paints on top of it.
 */
const colorStyles = ({ theme, $isVertical }: WithTheme<IStyledTabListProps>) => {
  const borderColor = getColor({ theme, variable: 'border.default' });
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });
  const rule = $isVertical ? undefined : `inset 0 -${theme.borderWidths.sm} 0 ${borderColor}`;

  return css`
    color-scheme: only ${theme.colors.base};
    box-shadow: ${rule}; /* [1] */
    color: ${foregroundColor};
  `;
};

/*
 * 1. List element reset.
 */
const sizeStyles = ({ theme, $isVertical }: WithTheme<IStyledTabListProps>) => {
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  const gap = $isVertical ? theme.space.xs : theme.space.md;

  return css`
    margin: 0; /* [1] */
    padding: 0; /* [1] */
    gap: ${gap};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledTabList = styled.div<WithTheme<IStyledTabListProps>>`
  display: flex;
  position: relative;
  flex-direction: ${props => (props.$isVertical ? 'column' : 'row')};
  white-space: nowrap;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
