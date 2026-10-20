/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledTileLabelProps {
  $isCentered?: boolean;
}

const sizeStyles = ({ theme, $isCentered }: IStyledTileLabelProps & IStyledBaseProps) => {
  const marginTop = $isCentered ? `${theme.space.base * 2}px` : 0;
  const marginHorizontal = $isCentered
    ? undefined
    : math(`(${theme.iconSizes.md} * 2) + ${theme.space.base * 5}px`);
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);

  return css`
    margin-top: ${marginTop};
    margin-${theme.rtl ? 'right' : 'left'}: ${marginHorizontal};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledTileLabel = styled.span<IStyledTileLabelProps>`
  display: block;
  text-align: ${props => props.$isCentered && 'center'};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${sizeStyles};

  ${componentStyles};
`;
