/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { ITableProps } from '../../types/elements';
import type { WithTheme } from '../../types/views';
import { getHeaderRowHeight } from './style-utils';
import { StyledBaseRow } from './StyledBaseRow';
import { StyledOverflowButton } from './StyledOverflowButton';

interface IStyledHeaderRowProps {
  $size?: ITableProps['size'];
}

const sizeStyles = (props: WithTheme<IStyledHeaderRowProps>) => {
  return css`
    height: ${getHeaderRowHeight(props)};
  `;
};

export const StyledHeaderRow = styled(StyledBaseRow)<WithTheme<IStyledHeaderRowProps>>`
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${sizeStyles}

  ${StyledOverflowButton} {
    opacity: 1;
  }

  ${componentStyles};
`;
