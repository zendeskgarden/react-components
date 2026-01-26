/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

import { IAvatarProps, SIZE } from '../types';
import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase';
import { getStatusBorderOffset, includes, IStyledStatusIndicatorProps } from './utility';

export interface IStatusIndicatorProps extends Omit<IAvatarProps, 'badge' | 'isSystem' | 'status'> {
  readonly $type?: IStyledStatusIndicatorProps['$type'];
  $borderColor?: string;
  $surfaceColor?: IAvatarProps['surfaceColor'];
  $size?: IAvatarProps['size'];
}

const COMPONENT_ID = 'avatars.status_indicator';

const [xxs, xs, s, m, l] = SIZE;

const sizeStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  const isVisible = props.$size !== xxs;
  const iconSize = props.$size === xs ? `${props.theme.space.base * 2}px` : undefined;
  const borderWidth = getStatusBorderOffset(props);

  let padding = '0';

  if (props.$size === s) {
    padding = math(`${props.theme.space.base + 1}px - (${borderWidth} * 2)`);
  } else if (includes([m, l], props.$size)) {
    padding = math(`${props.theme.space.base + 3}px - (${borderWidth} * 2)`);
  }

  return css`
    max-width: calc(2em + (${borderWidth} * 3));
    box-sizing: content-box;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${props.theme.fontSizes.xs};
    font-weight: ${props.theme.fontWeights.semibold};

    & > span {
      display: ${isVisible ? 'inline-block' : 'none'};
      padding: 0 ${padding};
      max-width: 2em;
      overflow: inherit;
      text-align: inherit;
      text-overflow: inherit;
      white-space: inherit;
    }

    & > svg {
      ${!isVisible && 'display: none;'}
      width: ${iconSize};
      height: ${iconSize};
    }
  `;
};

const colorStyles = ({
  theme,
  $type,
  $size,
  $borderColor,
  $surfaceColor
}: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  const shadowSize = $size === xxs ? 'xs' : 'sm';
  let boxShadow;

  const surfaceColor = $surfaceColor?.includes('.')
    ? getColor({ variable: $surfaceColor, theme })
    : $surfaceColor;

  if ($type) {
    boxShadow = theme.shadows[shadowSize](
      surfaceColor || getColor({ theme, variable: 'background.default' })
    );
  } else {
    boxShadow = theme.shadows[shadowSize](surfaceColor || (theme.palette.white as string));
  }

  return css`
    border-color: ${$borderColor};
    box-shadow: ${boxShadow};
  `;
};

export const StyledStatusIndicator = styled(StyledStatusIndicatorBase).attrs<IStatusIndicatorProps>(
  props => ({
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION,
    $size: props.$size ?? 'medium'
  })
)<IStatusIndicatorProps>`
  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
