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
import { IAvatarProps, AVATAR_SIZE } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';
import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase';
import { getStatusBorderOffset, includes, IStyledStatusIndicatorProps } from './utility';

export interface IStatusIndicatorProps extends Omit<IAvatarProps, 'badge' | 'isSystem' | 'status'> {
  readonly $type?: IStyledStatusIndicatorProps['$type'];
  $borderColor?: string;
  $surfaceColor?: IAvatarProps['surfaceColor'];
  $size?: IAvatarProps['size'];
}

const [xxs, xs, s, m, l] = AVATAR_SIZE;

const sizeStyles = (props: IStatusIndicatorProps & IStyledBaseProps) => {
  /* attrs cannot provide this fallback: styled-components >= 6.3.12 preserves
   * explicitly passed undefined props, so `$size` may still be undefined here */
  const size = props.$size ?? 'medium';
  const isVisible = size !== xxs;
  const iconSize = size === xs ? `${props.theme.space.base * 2}px` : undefined;
  const borderWidth = getStatusBorderOffset(props);

  let padding = '0';

  if (size === s) {
    padding = math(`${props.theme.space.base + 1}px - (${borderWidth} * 2)`);
  } else if (includes([m, l], size)) {
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
  $size,
  $borderColor,
  $surfaceColor
}: IStatusIndicatorProps & IStyledBaseProps) => {
  const shadowSize = $size === xxs ? 'xs' : 'sm';

  const surfaceColor = $surfaceColor?.includes('.')
    ? getColor({ variable: $surfaceColor, theme })
    : $surfaceColor;

  const boxShadow = theme.shadows[shadowSize](
    surfaceColor || getColor({ theme, variable: 'background.default' })
  );

  return css`
    border-color: ${$borderColor};
    box-shadow: ${boxShadow};
  `;
};

export const StyledStatusIndicator = styled(StyledStatusIndicatorBase)<IStatusIndicatorProps>`
  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
