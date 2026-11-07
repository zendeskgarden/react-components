/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { ITableProps } from '../../types/elements';
import type { WithTheme } from '../../types/views';
import { CELL_SELECTOR, getRoundedEndStyles, getRowHeight } from './style-utils';
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
    > ${CELL_SELECTOR} {
      background-color: ${backgroundColor};
    }

    > ${CELL_SELECTOR}::after {
      border-bottom-color: ${borderColor};
    }

    > :first-child::before {
      background-color: ${indicatorColor};
      content: ${$isFocused ? "''" : 'none'};
    }

    > :first-child:focus::before {
      content: '';
    }

    &:hover {
      > ${CELL_SELECTOR} {
        background-color: ${hoverBackgroundColor};
      }

      > ${CELL_SELECTOR}::after {
        border-bottom-color: ${hoverBorderColor};
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
 */
const sizeStyles = (props: WithTheme<IStyledRowProps>) => {
  const { theme, $isSelected } = props;
  const barInset = `calc(100% - ${theme.shadowWidths.md})`;
  const indicatorClip = theme.rtl
    ? `inset(0 0 ${theme.borderWidths.sm} ${barInset})`
    : `inset(0 ${barInset} ${theme.borderWidths.sm} 0)`;

  return css`
    height: ${getRowHeight(props)};

    ${getRoundedEndStyles(props)}

    > ${CELL_SELECTOR} {
      position: relative; /* [1] */
    }

    > ${CELL_SELECTOR}::after {
      position: absolute;
      bottom: 0;
      border-bottom: ${theme.borders.sm};
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

export const StyledRow = styled(StyledBaseRow)<WithTheme<IStyledRowProps>>`
  ${sizeStyles}

  ${colorStyles}

  ${componentStyles};
`;
