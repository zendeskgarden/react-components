/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledTileDescriptionProps {
  $isCentered?: boolean;
}

const sizeStyles = ({ theme, $isCentered }: IStyledTileDescriptionProps & IStyledBaseProps) => {
  const marginTop = $isCentered ? undefined : `${theme.space.base}px`;
  const gridColumn = $isCentered ? undefined : 2;
  const fontSize = theme.fontSizes.sm;
  const lineHeight = getLineHeight(theme.space.base * 4, fontSize);

  return css`
    grid-column: ${gridColumn};
    margin-top: ${marginTop};
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
