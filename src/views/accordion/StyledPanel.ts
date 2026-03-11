/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor, getLineHeight } from '@zendeskgarden/react-theming';
import styled, { css } from 'styled-components';

import type { IStyledAccordion } from '../../types/views';
import { StyledHeader } from './StyledHeader';
import { StyledLabel } from './StyledLabel';

const colorStyles = ({ theme, $isBare }: IStyledAccordion) => {
  const borderBottomColor = $isBare
    ? 'transparent'
    : getColor({ theme, variable: 'border.default' });

  return css`
    border-bottom-color: ${borderBottomColor};
  `;
};

const sizeStyles = ({ theme, $isCompact }: IStyledAccordion) => {
  const { base } = theme.space;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(base * 5, fontSize);
  const paddingHorizontal = base * ($isCompact ? 3 : 5);
  const paddingBottom = base * ($isCompact ? 4 : 8);
  const paddingTop = base * 2;
  const padding = `${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px`;

  return css`
    grid-template-rows: 1fr;
    border-bottom: ${theme.borders.sm};
    padding: ${padding};
    line-height: ${lineHeight};
    font-size: ${fontSize};

    ${StyledHeader}:has(${StyledLabel}[aria-expanded='false']) ~ & {
      grid-template-rows: 0fr;
      padding-top: 0;
      padding-bottom: 0;
    }
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
