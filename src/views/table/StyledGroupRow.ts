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
import { CELL_SELECTOR, getHeaderRowHeight, getRoundedEndStyles } from './style-utils';
import { StyledBaseRow } from './StyledBaseRow';
import { StyledCell } from './StyledCell';
import { getLineHeight } from './StyledTable';

interface IStyledGroupRowProps {
  $size?: ITableProps['size'];
  /** The sticky head height, which the row sticks below */
  $stickyTop?: number;
}

/*
 * 1. Fall back to a single header row and the gap until the head is measured.
 * 2. Hide the rows that scroll under the rounded corners (see `StyledHead`).
 */
const stickyStyles = (props: WithTheme<IStyledGroupRowProps>) => {
  const { theme, $stickyTop } = props;
  const color = getColor({ variable: 'background.default', theme });
  const radius = theme.borderRadii.md;
  const top = $stickyTop
    ? `${$stickyTop}px`
    : math(`${getHeaderRowHeight(props)} + ${theme.space.xxs}`); /* [1] */

  return css`
    position: sticky;
    top: ${top};
    z-index: 1;

    > :first-child {
      box-shadow: ${theme.rtl ? radius : `-${radius}`} 0 0 ${color}; /* [2] */
    }

    > :last-child {
      box-shadow: ${theme.rtl ? `-${radius}` : radius} 0 0 ${color};
    }

    > :first-child:last-child {
      box-shadow:
        -${radius} 0 0 ${color},
        ${radius} 0 0 ${color};
    }
  `;
};

const colorStyles = ({ theme }: WithTheme) => {
  return css`
    > ${CELL_SELECTOR} {
      background-color: ${getColor({ variable: 'background.subtle', theme })};
    }
  `;
};

const sizeStyles = (props: WithTheme<IStyledGroupRowProps>) => {
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(props);

  return css`
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${props.theme.fontSizes.sm};

    ${StyledCell} {
      padding: ${math(`(${height} - ${lineHeight}) / 2`)} ${props.theme.space.base * 3}px;
    }

    ${getRoundedEndStyles(props)}
  `;
};

export const StyledGroupRow = styled(StyledBaseRow)<WithTheme<IStyledGroupRowProps>>`
  ${props => props.$stickyTop !== undefined && stickyStyles(props)}

  ${sizeStyles}

  ${colorStyles}

  ${componentStyles};
`;
