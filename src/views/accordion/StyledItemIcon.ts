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
import { getHueColor } from '../../theming/utils/getHueColor';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledItemIcon {
  $surfaceColor?: string;
}

const colorStyles = ({
  $surfaceColor = 'background.default',
  theme
}: IStyledItemIcon & IStyledBaseProps) => {
  const foregroundColor = getColor({ theme, variable: 'border.emphasis' });
  const backgroundColor = getHueColor({ theme, value: $surfaceColor });

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

/**
 * 1. Odd sizing allows the timeline line to center respective of the circle icon.
 */
export const StyledItemIcon = styled(StyledBaseIcon)<IStyledItemIcon>`
  z-index: 1;
  box-sizing: content-box;
  padding: ${props => props.theme.space.base}px 0;
  width: ${props => math(`${props.theme.iconSizes.sm} + 1`)}; /* [1] */
  height: ${props => math(`${props.theme.iconSizes.sm} + 1`)}; /* [1] */

  ${colorStyles}

  ${componentStyles};
`;
