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
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import type { IStyledOptionTypeIconProps } from '../../types/views';
import { StyledOption, getMinHeight as getOptionMinHeight } from './StyledOption';

const colorStyles = ({ theme, $type }: IStyledOptionTypeIconProps) => {
  const opacity = $type && $type !== 'danger' ? 1 : 0;
  let color;

  if ($type === 'add') {
    color = 'inherit';
  } else if ($type === 'header' || $type === 'next' || $type === 'previous') {
    color = getColor({ theme, variable: 'foreground.subtle' });
  } else {
    color = getColor({ theme, variable: 'foreground.primary' });
  }

  return css`
    opacity: ${opacity};
    color: ${color};

    ${StyledOption}[aria-selected='true'] > & {
      opacity: 1;
    }

    ${StyledOption}[aria-disabled='true'] > & {
      color: inherit;
    }
  `;
};

const sizeStyles = (props: IStyledOptionTypeIconProps) => {
  const size = props.theme.iconSizes.md;
  const position = `${props.theme.space.base * 3}px`;
  const top = math(`(${getOptionMinHeight(props)} - ${size}) / 2`);
  let side;

  if (props.$type === 'next') {
    side = props.theme.rtl ? 'left' : 'right';
  } else {
    side = props.theme.rtl ? 'right' : 'left';
  }

  return css`
    top: ${top};
    ${side}: ${position};
    width: ${size};
    height: ${size};
  `;
};

export const StyledOptionTypeIcon = styled(StyledBaseIcon)<IStyledOptionTypeIconProps>`
  position: absolute;
  transform: ${props =>
    props.theme.rtl && (props.$type === 'next' || props.$type === 'previous') && 'rotate(180deg)'};
  transition: opacity 0.1s ease-in-out;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
