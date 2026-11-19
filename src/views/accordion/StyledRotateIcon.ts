/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { getIconRenderSize } from '../../theming/utils/getIconRenderSize';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import type { WithTheme } from '../../types/views';
import { StyledActions } from './StyledActions';
import { StyledHeaderRow } from './StyledHeaderRow';

interface IStyledRotateIcon {
  $isCompact?: boolean;
  $isRotated?: boolean;
  $isHovered?: boolean;
  $isCollapsible?: boolean;
  $isWell?: boolean;
}

const colorStyles = ({ $isCollapsible, $isHovered, $isRotated, theme }: WithTheme<any>) => {
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

/* Well mode: a 40px circle with the neutral basic `IconButton` hover and
 * active colors. The hover state follows the header, not the icon. */
const wellStyles = (props: WithTheme<IStyledRotateIcon>) => {
  const { $isCollapsible, $isHovered, $isRotated, theme } = props;
  const showColor = $isCollapsible || !$isRotated;
  const backgroundOptions = {
    theme,
    hue: 'neutralHue',
    light: { shade: 700 },
    dark: { hue: 'white' }
  };
  const colorOptions = { theme, variable: 'foreground.subtle' };
  const hoverBackgroundColor = getColor({ ...backgroundOptions, transparency: theme.opacity[100] });
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const color = getColor(colorOptions);
  const hoverColor = getColor({ ...colorOptions, light: { offset: 100 }, dark: { offset: -100 } });
  const activeColor = getColor({ ...colorOptions, light: { offset: 200 }, dark: { offset: -200 } });

  return css`
    transition:
      transform 0.25s ease-in-out,
      color 0.1s ease-in-out,
      background-color 0.1s ease-in-out;
    margin-inline: ${theme.space.xs} ${theme.space.md};
    border-radius: ${theme.borderRadii.full};
    background-color: ${$isHovered && showColor ? hoverBackgroundColor : 'transparent'};
    padding: calc((${theme.space.xl} - ${getIconRenderSize(theme)}) / 2);
    color: ${$isHovered && showColor ? hoverColor : color};

    ${StyledHeaderRow}:active:not(:has(${StyledActions}:active)) & {
      background-color: ${showColor && activeBackgroundColor};
      color: ${showColor && activeColor};
    }
  `;
};

export const StyledRotateIcon = styled(StyledBaseIcon)<WithTheme<IStyledRotateIcon>>`
  transform: ${props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  transition:
    transform 0.25s ease-in-out,
    color 0.1s ease-in-out;
  box-sizing: content-box;
  padding: ${props =>
    props.$isCompact
      ? `${props.theme.space.xs} ${props.theme.space.base * 2.5}px`
      : `${props.theme.space.md} ${props.theme.space.base * 4.5}px`};
  width: ${props => getIconRenderSize(props.theme)};
  min-width: ${props => getIconRenderSize(props.theme)};
  height: ${props => getIconRenderSize(props.theme)};
  vertical-align: middle;

  ${props => (props.$isWell ? wellStyles(props) : colorStyles(props))}

  ${componentStyles};
`;
