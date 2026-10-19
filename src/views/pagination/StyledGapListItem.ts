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
import getLineHeight from '../../theming/utils/getLineHeight';
import type { IStyledBaseProps } from '../../types/views';
import { StyledListItem } from './StyledListItem';

const sizeStyles = (props: IStyledBaseProps) => {
  const shift = 2;
  const fontSize = math(`${props.theme.fontSizes.md} + ${shift}`);
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(height, fontSize);
  const padding = `${props.theme.space.base * 1.5}px`;

  return css`
    padding: 0 ${padding};
    min-width: ${height};
    max-width: ${math(`${height} * 2`)}; /* [1] */
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

const colorStyles = ({ theme }: IStyledBaseProps) => {
  return css`
    color: ${getColor({ variable: 'foreground.subtle', theme })};
  `;
};

export const StyledGapListItem = styled(StyledListItem)`
  display: inline-block;
  text-align: center;

  ${sizeStyles};

  ${colorStyles}

  &:hover {
    color: inherit;
  }

  ${componentStyles};
`;
