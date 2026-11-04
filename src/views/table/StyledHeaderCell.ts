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
import type { WithTheme } from '../../types/views';
import { getHeaderRowHeight } from './style-utils';
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

const colorStyles = ({ theme }: WithTheme) => {
  return css`
    background-color: ${getColor({ variable: 'background.subtle', theme })};
  `;
};

/*
 * 1. The same vertical padding at every table size, from the small header row height.
 */
const sizeStyles = (props: WithTheme<IStyledCellProps>) => {
  const { theme } = props;
  let paddingVertical = undefined;

  if (!props.$hasOverflow) {
    paddingVertical = math(
      `(${getHeaderRowHeight({ theme, $size: 'small' })} - ${getLineHeight(props)}) / 2`
    );
  }

  return css`
    padding-top: ${paddingVertical}; /* [1] */
    padding-bottom: ${paddingVertical}; /* [1] */

    &:first-child {
      border-start-start-radius: ${theme.borderRadii.md};
      border-end-start-radius: ${theme.borderRadii.md};
    }

    &:last-child {
      border-start-end-radius: ${theme.borderRadii.md};
      border-end-end-radius: ${theme.borderRadii.md};
    }
  `;
};

export const StyledHeaderCell = styled(StyledCell)<WithTheme>`
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

  ${colorStyles}

  ${componentStyles};
`;
