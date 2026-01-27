/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor, getLineHeight } from '@zendeskgarden/react-theming';
import styled, { css } from 'styled-components';

import { type IStyledAccordion } from '../../types/views';

const colorStyles = ({ theme, $isBare }: IStyledAccordion) => {
  const borderBottomColor = $isBare
    ? 'transparent'
    : getColor({ theme, variable: 'border.default' });

  return css`
    border-bottom-color: ${borderBottomColor};
  `;
};

const sizeStyles = ({ theme, $isCompact, $isExpanded }: IStyledAccordion) => {
  const { base } = theme.space;
  let paddingTop = base * 2;
  let paddingHorizontal = base * ($isCompact ? 3 : 5);
  let paddingBottom = base * ($isCompact ? 4 : 8);

  if ($isExpanded === false) {
    paddingTop = 0;
    paddingBottom = 0;
  }

  const fontSize = theme.fontSizes.md;
  const gridTemplateRows = $isExpanded ? '1fr' : '0fr';
  const lineHeight = getLineHeight(base * 5, fontSize);
  const padding = `${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px`;

  return css`
    grid-template-rows: ${gridTemplateRows};
    border-bottom: ${theme.borders.sm};
    padding: ${padding};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledPanel = styled.section<IStyledAccordion>`
  display: grid;
  transition: ${({ $isAnimated }) => $isAnimated && 'padding 0.25s ease-in-out, grid-template-rows 0.25s ease-in-out'};
  overflow: hidden;

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
