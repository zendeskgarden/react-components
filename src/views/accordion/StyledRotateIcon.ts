/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledRotateIcon {
  $isCompact?: boolean;
  $isRotated?: boolean;
  $isHovered?: boolean;
  $isCollapsible?: boolean;
}

const colorStyles = ({ $isCollapsible, $isHovered, $isRotated, theme }: any & IStyledBaseProps) => {
  const showColor = $isCollapsible || !$isRotated;
  const color = getColor({
    theme,
    variable: showColor && $isHovered ? 'foreground.primary' : 'foreground.subtle'
  });

  return css`
    color: ${color};

    &:hover {
      color: ${showColor && color};
    }
  `;
};

export const StyledRotateIcon = styled(StyledBaseIcon)<IStyledRotateIcon>`
  transform: ${props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  transition:
    transform 0.25s ease-in-out,
    color 0.1s ease-in-out;
  box-sizing: content-box;
  padding: ${props =>
    props.$isCompact
      ? `${props.theme.space.base * 1.5}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`};
  width: ${props => props.theme.iconSizes.md};
  min-width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};
  vertical-align: middle;

  ${colorStyles}

  ${componentStyles};
`;
