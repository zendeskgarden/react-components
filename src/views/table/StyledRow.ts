/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { ITableProps } from '../../types/elements';
import type { WithTheme } from '../../types/views';
import {
  CELL_SELECTOR,
  getGroupRowHeight,
  getRoundedEndStyles,
  getRowHeight,
  getStickyHeadHeight
} from './style-utils';
import { StyledBaseRow } from './StyledBaseRow';
import { StyledGroupRow } from './StyledGroupRow';
import { StyledOverflowButton } from './StyledOverflowButton';

/** Marks a selected row, so that adjacent selected rows can join. */
export const SELECTED_ROW_ATTRIBUTE = 'data-garden-selected';

export interface IStyledRowProps {
  $isStriped?: boolean;
  $isFocused?: boolean;
  $isHovered?: boolean;
  $isSelected?: boolean;
  $isReadOnly?: ITableProps['isReadOnly'];
  $size?: ITableProps['size'];
  /** The sticky head height, which the row scrolls clear of */
  $stickyHeadHeight?: number;
}

const colorStyles = ({
  theme,
  $isFocused,
  $isSelected,
  $isHovered,
  $isReadOnly,
  $isStriped
}: WithTheme<IStyledRowProps>) => {
  const hoveredBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    dark: { offset: -100 },
    theme
  });
  const hoveredBorderColor = getColor({
    variable: 'border.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: { offset: -100 },
    theme
  });
  const selectedBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: { offset: -100 },
    theme
  });
  const selectedBorderColor = getColor({
    variable: 'border.primaryEmphasis',
    transparency: theme.opacity[300],
    dark: { offset: -100 },
    theme
  });
  const hoveredSelectedBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[300],
    dark: { offset: -100 },
    theme
  });
  const stripedBackgroundColor = getColor({
    variable: 'background.subtle',
    transparency: theme.opacity[100],
    light: { offset: 300 },
    dark: { offset: -600 },
    theme
  });
  const indicatorColor = getColor({ variable: 'border.primaryEmphasis', theme });
  let backgroundColor = $isStriped ? stripedBackgroundColor : undefined;
  let borderColor = getColor({ variable: 'border.subtle', theme });
  let hoverBackgroundColor = undefined;
  let hoverBorderColor = undefined;

  if ($isSelected) {
    if ($isHovered) {
      backgroundColor = hoveredSelectedBackgroundColor;
    } else {
      backgroundColor = selectedBackgroundColor;
    }

    borderColor = selectedBorderColor;
    hoverBackgroundColor = hoveredSelectedBackgroundColor;
  } else if ($isHovered) {
    backgroundColor = hoveredBackgroundColor;
    borderColor = hoveredBorderColor;
  } else if (!$isReadOnly) {
    hoverBackgroundColor = hoveredBackgroundColor;
    hoverBorderColor = hoveredBorderColor;
  }

  return css`
    border-bottom-color: ${borderColor};

    > ${CELL_SELECTOR} {
      background-color: ${backgroundColor};
    }

    > :first-child::before {
      background-color: ${indicatorColor};
      content: ${$isFocused ? "''" : 'none'};
    }

    > :first-child:focus::before {
      content: '';
    }

    &:hover {
      border-bottom-color: ${hoverBorderColor};

      > ${CELL_SELECTOR} {
        background-color: ${hoverBackgroundColor};
      }

      ${StyledOverflowButton} {
        opacity: 1;
      }
    }

    &:focus {
      outline: none;
    }
  `;
};

/*
 * 1. The cells, not the row, are positioned: Safari before 27 doesn't make a
 *    positioned row a containing block. The table keeps inline menus and
 *    tooltips at their own width (see StyledTable).
 * 2. One bottom border per cell, inset from the row's rounded ends.
 * 3. The focus indicator takes the first cell's rounded corners, which adjacent
 *    selected rows square, and is clipped to a bar above the bottom border.
 * 4. The row's bottom border style and color, including consumer overrides,
 *    pass through the cells, which don't paint it, to each cell's border. The
 *    separate border model doesn't paint the row's own border.
 */
const sizeStyles = (props: WithTheme<IStyledRowProps>) => {
  const { theme, $isSelected } = props;
  const barInset = `calc(100% - ${theme.shadowWidths.md})`;
  const indicatorClip = theme.rtl
    ? `inset(0 0 ${theme.borderWidths.sm} ${barInset})`
    : `inset(0 ${barInset} ${theme.borderWidths.sm} 0)`;

  return css`
    border-bottom: ${theme.borders.sm}; /* [4] */
    height: ${getRowHeight(props)};

    ${getRoundedEndStyles(props)}

    > ${CELL_SELECTOR} {
      position: relative; /* [1] */
      border-bottom-width: 0; /* [4] */
      border-bottom-style: inherit;
      border-bottom-color: inherit;
    }

    > ${CELL_SELECTOR}::after {
      position: absolute;
      bottom: 0;
      border-bottom-width: ${theme.borderWidths.sm};
      border-bottom-style: inherit; /* [4] */
      border-bottom-color: inherit;
      content: '';
      pointer-events: none;
      inset-inline: 0;
    }

    > :first-child::after {
      inset-inline-start: ${theme.space.xs}; /* [2] */
    }

    > :last-child::after {
      inset-inline-end: ${theme.space.xs}; /* [2] */
    }

    &:has(+ ${StyledGroupRow}) > ${CELL_SELECTOR}::after {
      content: none;
    }

    > :first-child::before {
      position: absolute;
      inset-block: 0;
      inset-inline-start: 0;
      border-start-start-radius: inherit; /* [3] */
      border-end-start-radius: inherit; /* [3] */
      width: 100%;
      clip-path: ${indicatorClip}; /* [3] */
      pointer-events: none;
    }

    ${
      $isSelected &&
      css`
      &:has(+ [${SELECTED_ROW_ATTRIBUTE}]) > ${CELL_SELECTOR} {
        border-end-start-radius: 0;
        border-end-end-radius: 0;
      }

      [${SELECTED_ROW_ATTRIBUTE}] + & > ${CELL_SELECTOR} {
        border-start-start-radius: 0;
        border-start-end-radius: 0;
      }
    `
    }
  `;
};

const POPUP_SELECTOR = `:is([role='dialog'], [role='listbox'], [role='menu'])`;

/*
 * 1. Keep a row, its cells and the controls focused in them clear of a sticky
 *    head when they scroll into view, and of the group row stuck below it once a
 *    group row comes before the row. A stuck group row stays stuck over later
 *    bodies.
 * 2. Keyboard focus only: a click on a partly hidden checkbox focuses its input,
 *    which Firefox would then scroll to the middle of the viewport. Popups in a
 *    cell, such as an inline menu, keep their own scrolling.
 */
const scrollStyles = (props: WithTheme<IStyledRowProps>) => {
  const headHeight = getStickyHeadHeight(props, props.$stickyHeadHeight);
  const stackHeight = math(`${headHeight} + ${getGroupRowHeight(props)}`);
  const getScrollMarginStyles = (margin: string) => css`
    scroll-margin-top: ${margin}; /* [1] */

    > ${CELL_SELECTOR} {
      scroll-margin-top: ${margin};
    }

    > ${CELL_SELECTOR} :focus-visible:not(${CELL_SELECTOR} ${POPUP_SELECTOR}, ${CELL_SELECTOR} ${POPUP_SELECTOR} *) {
      scroll-margin-top: ${margin}; /* [2] */
    }
  `;

  return css`
    ${getScrollMarginStyles(headHeight)}

    ${StyledGroupRow} ~ &,
    tbody:has(> ${StyledGroupRow}) ~ tbody > & {
      ${getScrollMarginStyles(stackHeight)}
    }
  `;
};

export const StyledRow = styled(StyledBaseRow)<WithTheme<IStyledRowProps>>`
  ${sizeStyles}

  ${props => props.$stickyHeadHeight !== undefined && scrollStyles(props)}

  ${colorStyles}

  ${componentStyles};
`;
