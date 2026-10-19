/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { IStyledHeaderProps } from '../../types/views';
import { BASE_MULTIPLIERS } from './StyledClose';

const colorStyles = ({ $isDanger, theme }: IStyledHeaderProps) => {
  const bottomBorderColor = getColor({ theme, variable: 'border.subtle' });
  const color = getColor({
    theme,
    variable: $isDanger ? 'foreground.danger' : 'foreground.default'
  });

  return css`
    border-bottom-color: ${bottomBorderColor};
    color: ${color};
  `;
};

/**
 * 1. the padding added to the Header is based on the close button size and spacing,
 *    with additional padding (+ 2) between the Header content and Close button
 */
export const StyledHeader = styled.div<IStyledHeaderProps>`
  display: block;
  position: ${props => props.$isDanger && 'relative'};
  margin: 0;
  border-bottom: ${props => props.theme.borders.sm};
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`};
  ${props =>
    props.$isCloseButtonPresent &&
    `padding-${props.theme.rtl ? 'left' : 'right'}: ${
      props.theme.space.base * (BASE_MULTIPLIERS.size + BASE_MULTIPLIERS.side + 2)
    }px;`} /* [1] */
  line-height: ${props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${colorStyles};

  ${componentStyles};
`;
