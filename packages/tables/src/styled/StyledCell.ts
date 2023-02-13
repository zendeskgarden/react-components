/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ICellProps, ITableProps } from '../types';
import { getLineHeight } from './StyledTable';
import { getRowHeight } from './style-utils';

const COMPONENT_ID = 'tables.cell';

export interface IStyledCellProps
  extends Pick<ICellProps, 'isMinimum' | 'isTruncated' | 'hasOverflow' | 'width'> {
  size?: ITableProps['size'];
}

const truncatedStyling = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const sizeStyling = (props: IStyledCellProps & ThemeProps<DefaultTheme>) => {
  let boxSizing = 'border-box';
  let padding;
  let width = props.width;
  let height;

  if (props.hasOverflow) {
    boxSizing = 'content-box';
    width = '2em';
    height = 'inherit';
    padding = props.theme.rtl
      ? `0 0 0 ${props.theme.space.base}px`
      : `0 ${props.theme.space.base}px 0 0`;
  } else {
    const paddingVertical = math(`(${getRowHeight(props)} - ${getLineHeight(props)}) / 2`);
    const paddingHorizontal = `${props.theme.space.base * 3}px`;

    padding = `${paddingVertical} ${paddingHorizontal}`;
  }

  if (props.isMinimum) {
    boxSizing = 'content-box';
    width = '1em';
  }

  return css`
    box-sizing: ${boxSizing};
    padding: ${padding};
    width: ${width};
    height: ${height};
  `;
};

/**
 * 1. We can't use traditional "visually hidden" styles for table cells
 *    because position, padding, and width change table layout/spacing if the
 *    cell is a heading. Instead, indent text off screen and hide overflow.
 *    100% width + padding is better than a static value (e.g. -9999px) for
 *    performance reasons.
 *    https://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/
 * 2. `text-indent` at 100% only includes inner box width; include padding
 *     to push text fully outside of cell.
 */

export const StyledCell = styled.td.attrs<IStyledCellProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCellProps>`
  display: table-cell;
  transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out;

  ${props => sizeStyling(props)};
  ${props => props.isTruncated && truncatedStyling};

  /* [1] */
  &[hidden] {
    overflow: hidden;
    text-indent: calc(100% + ${props => props.theme.space.base * 3}px); /* [2] */
    white-space: nowrap;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCell.defaultProps = {
  theme: DEFAULT_THEME
};
