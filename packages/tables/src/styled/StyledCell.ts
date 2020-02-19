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
  /** Applies truncated text styling */
  isTruncated?: boolean;
  /**
   * Styling for a cell that contains an `OverflowButton`
   */
  hasOverflow?: boolean;
  /** The width of the cell */
  width?: string | number;
  size: SIZE;
}

const truncatedStyling = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const sizeStyling = (props: IStyledCellProps & ThemeProps<DefaultTheme>) => {
  let verticalPadding = math(`(${getRowHeight(props)} - ${getLineHeight(props)}) / 2`);
  let horizontalPadding = `${props.theme.space.base * 3}px`;
  let width = props.width;
  let height;

  if (props.hasOverflow) {
    width = '2em';
    height = 'inherit';
    verticalPadding = '0';
    horizontalPadding = '0';
  }

  if (props.isMinimum) {
    width = '1em';
  }

  return css`
    /* stylelint-disable declaration-block-no-redundant-longhand-properties, property-no-unknown, max-line-length */
    padding-top: ${verticalPadding};
    padding-bottom: ${verticalPadding};
    padding-${props.theme.rtl ? 'right' : 'left'}: ${horizontalPadding};
    padding-${props.theme.rtl ? 'left' : 'right'}: 0;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties, property-no-unknown, max-line-length */
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
  box-sizing: ${props => (props.isMinimum ? 'content-box' : 'border-box')};

  ${props => sizeStyling(props)};
  ${props => props.isTruncated && truncatedStyling};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCell.defaultProps = {
  theme: DEFAULT_THEME
};
