/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledTileDescriptionProps {
  $isCentered?: boolean;
}

const sizeStyles = ({ theme, $isCentered }: IStyledTileDescriptionProps & IStyledBaseProps) => {
  const marginTop = `${theme.space.base}px`;
  const marginHorizontal = $isCentered
    ? undefined
    : math(`(${theme.iconSizes.md} * 2) + ${theme.space.base * 5}px`);
  const fontSize = theme.fontSizes.sm;
  const lineHeight = getLineHeight(theme.space.base * 4, fontSize);

  return css`
    margin-top: ${marginTop};
    margin-${theme.rtl ? 'right' : 'left'}: ${marginHorizontal};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledTileDescription = styled.span<IStyledTileDescriptionProps>`
  display: block;
  text-align: ${props => props.$isCentered && 'center'};

  ${sizeStyles};

  ${componentStyles};
`;
