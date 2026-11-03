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
import { StyledBaseRow } from './StyledBaseRow';
import { StyledOverflowButton } from './StyledOverflowButton';

interface IStyledHeaderRowProps {
  $size?: ITableProps['size'];
}

const getHeaderRowHeight = (props: WithTheme<IStyledHeaderRowProps>) => {
  if (props.$size === 'large') {
    return `${props.theme.space.base * 18}px`;
  } else if (props.$size === 'small') {
    return `${props.theme.space.base * 10}px`;
  }

  return `${props.theme.space.base * 12}px`;
};

const colorStyles = ({ theme }: WithTheme) => {
  return css`
    border-bottom-color: ${getColor({ variable: 'border.default', theme })};
  `;
};

const sizeStyles = (props: WithTheme) => {
  const rowHeight = getHeaderRowHeight(props);

  return css`
    height: ${rowHeight};
    vertical-align: bottom;

    ${StyledOverflowButton} {
      margin-top: 0;
      margin-bottom: calc(${math(`${rowHeight} / 2`)} - 1em);
    }
  `;
};

export const StyledHeaderRow = styled(StyledBaseRow)<WithTheme<IStyledHeaderRowProps>>`
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${sizeStyles}

  ${colorStyles}

  ${StyledOverflowButton} {
    opacity: 1;
  }

  ${componentStyles};
`;
