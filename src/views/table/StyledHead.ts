/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';
import { StyledHeaderCell } from './StyledHeaderCell';
import { StyledHeaderRow } from './StyledHeaderRow';

interface IStyledHeadProps {
  $isSticky?: boolean;
}

const colorStyles = ({ theme }: WithTheme) => {
  return css`
    background-color: ${getColor({ variable: 'background.default', theme })};
  `;
};

/*
 * 1. Gap between the header and the body
 */
const sizeStyles = ({ theme }: WithTheme) => {
  return css`
    &::after {
      display: table-row; /* [1] */
      height: ${theme.space.xxs};
      content: '';
    }
  `;
};

/*
 * 1. Prevent <Checkbox> or <OverflowButton> from leaking over the sticky header,
 *    and stay above the group rows that stick below it
 * 2. Hide the rows that scroll under the gap and the rounded header corners. A
 *    backing layer inside the head would cover the header cells in Safari and
 *    Firefox, so the cells cast background-colored shadows instead.
 */
const stickyStyles = ({ theme }: WithTheme) => {
  const color = getColor({ variable: 'background.default', theme });
  const radius = theme.borderRadii.md;
  const gap = theme.space.xxs;
  const startOffset = theme.rtl ? radius : `-${radius}`;
  const endOffset = theme.rtl ? `-${radius}` : radius;
  const gapShadow = `0 ${gap} 0 ${color}`;
  const startShadows = `${startOffset} 0 0 ${color}, ${startOffset} ${gap} 0 ${color}`;
  const endShadows = `${endOffset} 0 0 ${color}, ${endOffset} ${gap} 0 ${color}`;

  return css`
    position: sticky;
    top: 0;
    z-index: 2; /* [1] */

    & > ${StyledHeaderRow} > ${StyledHeaderCell} {
      box-shadow: ${gapShadow}; /* [2] */

      &:first-child {
        box-shadow: ${gapShadow}, ${startShadows};
      }

      &:last-child {
        box-shadow: ${gapShadow}, ${endShadows};
      }

      &:first-child:last-child {
        box-shadow: ${gapShadow}, ${startShadows}, ${endShadows};
      }
    }
  `;
};

export const StyledHead = styled.thead<WithTheme<IStyledHeadProps>>`
  ${sizeStyles}

  ${props => props.$isSticky && stickyStyles(props)}

  ${colorStyles}

  ${componentStyles};
`;
