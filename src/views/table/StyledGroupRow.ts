/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { ITableProps } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';
import { StyledBaseRow } from './StyledBaseRow';
import { StyledCell } from './StyledCell';
import { IStyledRowProps } from './StyledRow';
import { getLineHeight } from './StyledTable';

interface IStyledGroupRowProps {
  $size?: ITableProps['size'];
}

const colorStyles = ({ theme }: IStyledBaseProps) => {
  return css`
    background-color: ${getColor({
      variable: 'background.subtle',
      transparency: theme.opacity[100],
      light: { offset: 300 },
      dark: { offset: -600 },
      theme
    })};
  `;
};

const sizeStyles = (props: IStyledRowProps & IStyledBaseProps) => {
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(props);

  return css`
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${props.theme.fontSizes.sm};

    ${StyledCell} {
      padding: ${math(`(${height} - ${lineHeight}) / 2`)} ${props.theme.space.base * 3}px;
    }
  `;
};

export const StyledGroupRow = styled(StyledBaseRow)<IStyledGroupRowProps>`
  ${sizeStyles}

  ${colorStyles}

  ${componentStyles};
`;
