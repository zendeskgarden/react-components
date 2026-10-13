/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledTabListProps {
  $isVertical?: boolean;
}

const colorStyles = ({ theme }: IStyledBaseProps) => {
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
const sizeStyles = ({ theme, $isVertical }: IStyledTabListProps & IStyledBaseProps) => {
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

export const StyledTabList = styled.div<IStyledTabListProps>`
  display: ${props => (props.$isVertical ? 'table-cell' : 'block')};
  border-bottom: ${props => (props.$isVertical ? 'none' : props.theme.borderStyles.solid)};
  vertical-align: ${props => (props.$isVertical ? 'top' : undefined)};
  white-space: nowrap;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
