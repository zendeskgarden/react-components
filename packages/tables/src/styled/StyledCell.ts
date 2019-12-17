/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { SIZE } from './StyledTable';

const COMPONENT_ID = 'tables.cell';

export interface IStyledCellProps {
  /** Applies minimum size styling */
  isMinimum?: boolean;
  /** Applies truncated text styling */
  isTruncated?: boolean;
  /** Applies overflow styling */
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
  let padding = `${props.theme.fontSizes.xs} ${props.theme.fontSizes.sm}`;
  let verticalPadding;
  let rightPadding;
  let width = props.width;
  let height;

  if (props.hasOverflow) {
    padding = '0';
    width = '2em';
    height = 'inherit';
  } else if (props.size === 'large') {
    verticalPadding = props.theme.fontSizes.xl;
  } else if (props.size === 'small') {
    verticalPadding = '6px';
  }

  if (props.isMinimum) {
    if (props.theme.rtl) {
      rightPadding = `${props.theme.space.base * 3}px`;
    }

    rightPadding = '0';
    width = '1em';
  }

  return css`
    padding: ${padding};
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    padding-top: ${verticalPadding};
    padding-right: ${rightPadding};
    padding-bottom: ${verticalPadding};
    padding-left: ${props.theme.rtl && '0'};
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
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
