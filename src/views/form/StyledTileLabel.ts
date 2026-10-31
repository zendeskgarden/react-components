/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { WithTheme } from '../../types/views';

interface IStyledTileLabelProps {
  $isCentered?: boolean;
}

const sizeStyles = ({ theme, $isCentered }: WithTheme<IStyledTileLabelProps>) => {
  const paddingEnd = `${theme.space.sm}`;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  let padding;
  let gridColumn;

  if ($isCentered) {
    padding = css`
      padding-right: ${paddingEnd};
      padding-left: ${paddingEnd};
    `;
  } else {
    gridColumn = 2;
    padding = css`
      padding-${theme.rtl ? 'left' : 'right'}: ${paddingEnd};
    `;
  }

  return css`
    grid-column: ${gridColumn};
    ${padding};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledTileLabel = styled.span<WithTheme<IStyledTileLabelProps>>`
  display: block;
  text-align: ${props => props.$isCentered && 'center'};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${sizeStyles};

  ${componentStyles};
`;
