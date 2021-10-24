/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { SIZE, getLineHeight } from './StyledTable';
import { getRowHeight } from './style-utils';

const COMPONENT_ID = 'tables.cell';

export interface IStyledCellProps {
  /**
   * Applies minimum fixed width styling (e.g. for cells that contain
   * checkboxes or icons)
   */
  isMinimum?: boolean;
  /** Truncates long text with an ellipsis */
  isTruncated?: boolean;
  /** Applies styling for a cell that contains an overflow menu */
  hasOverflow?: boolean;
  /** Adjusts the [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) of the cell */
  width?: string | number;
  /** Adjusts the vertical padding of the cell */
  size: SIZE;
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

export const StyledCell = styled.td.attrs<IStyledCellProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCellProps>`
  display: table-cell;
  transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out;

  ${props => sizeStyling(props)};
  ${props => props.isTruncated && truncatedStyling};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCell.defaultProps = {
  theme: DEFAULT_THEME
};
