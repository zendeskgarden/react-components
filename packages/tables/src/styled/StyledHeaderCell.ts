/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledCell, IStyledCellProps } from './StyledCell';
import { StyledSortableButton } from './StyledSortableButton';
import { getLineHeight } from './StyledTable';
import { getRowHeight } from './style-utils';

const COMPONENT_ID = 'tables.header_cell';

const truncatedStyling = css`
  ${StyledSortableButton} {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const sizeStyles = (props: IStyledCellProps & ThemeProps<DefaultTheme>) => {
  let paddingVertical = undefined;

  if (!props.hasOverflow) {
    paddingVertical = math(`(${getRowHeight(props)} - ${getLineHeight(props)}) / 2`);
  }

  return css`
    padding-top: ${paddingVertical};
    padding-bottom: ${paddingVertical};
  `;
};

export const StyledHeaderCell = styled(StyledCell).attrs({
  as: 'th',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  text-align: ${props => {
    if (!props.hasOverflow) {
      if (props.theme.rtl) {
        return 'right';
      }

      return 'left';
    }

    return undefined;
  }};
  font-weight: inherit;

  ${props => sizeStyles(props)}
  ${props => props.isTruncated && truncatedStyling}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderCell.defaultProps = {
  theme: DEFAULT_THEME
};
