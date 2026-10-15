/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledBaseProps } from '../../types/views';
import { getRowHeight } from './style-utils';
import { StyledCell, IStyledCellProps } from './StyledCell';
import { StyledSortableButton } from './StyledSortableButton';
import { getLineHeight } from './StyledTable';

const truncatedStyling = css`
  ${StyledSortableButton} {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const sizeStyles = (props: IStyledCellProps & IStyledBaseProps) => {
  let paddingVertical = undefined;

  if (!props.$hasOverflow) {
    paddingVertical = math(`(${getRowHeight(props)} - ${getLineHeight(props)}) / 2`);
  }

  return css`
    padding-top: ${paddingVertical};
    padding-bottom: ${paddingVertical};
  `;
};

export const StyledHeaderCell = styled(StyledCell)`
  text-align: ${props => {
    if (!props.$hasOverflow) {
      if (props.theme.rtl) {
        return 'right';
      }

      return 'left';
    }

    return undefined;
  }};
  font-weight: inherit;

  ${props => sizeStyles(props)}

  ${props => props.$isTruncated && truncatedStyling}

  ${componentStyles};
`;
