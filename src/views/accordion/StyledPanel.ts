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
import type { IStyledBaseProps } from '../../types/views';

interface IStyledPanel {
  $isBare?: boolean;
  $isCompact?: boolean;
  $isExpanded?: boolean;
  $isAnimated?: boolean;
}

const colorStyles = ({ theme, $isBare }: IStyledPanel & IStyledBaseProps) => {
  return css`
    border-bottom-color: ${$isBare
      ? 'transparent'
      : getColor({ theme, variable: 'border.default' })};
  `;
};

const sizeStyles = (props: IStyledPanel & IStyledBaseProps) => {
  const { theme, $isCompact, $isExpanded } = props;
  const { base } = theme.space;
  let paddingTop = base * 2;
  let paddingHorizontal = base * 5;
  let paddingBottom = base * 8;

  if ($isCompact) {
    paddingTop = base * 2;
    paddingHorizontal = base * 3;
    paddingBottom = base * 4;
  }

  if ($isExpanded === false) {
    paddingTop = 0;
    paddingBottom = 0;
  }

  return css`
    grid-template-rows: ${$isExpanded ? 1 : 0}fr;
    border-bottom: ${theme.borders.sm};
    padding: ${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px;
    line-height: ${getLineHeight(base * 5, theme.fontSizes.md)};
    font-size: ${theme.fontSizes.md};
  `;
};

export const StyledPanel = styled.section<IStyledPanel>`
  display: grid;
  transition: ${props =>
    /* attrs cannot provide this fallback: styled-components >= 6.3.12 preserves
     * explicitly passed undefined props, so `$isAnimated` may still be undefined here */
    (props.$isAnimated ?? true) &&
    'padding 0.25s ease-in-out, grid-template-rows 0.25s ease-in-out'};
  overflow: hidden;

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
