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
import type { IStyledBaseProps, IStyledOptionIconProps } from '../../types/views';

const colorStyles = ({ theme, $isDisabled, $type }: IStyledOptionIconProps) => {
  let variable;

  if ($isDisabled) {
    variable = 'foreground.disabled';
  } else if ($type === 'danger') {
    variable = 'foreground.danger';
  } else if ($type === 'add') {
    variable = 'foreground.primary';
  } else {
    variable = 'foreground.subtle';
  }

  const color = getColor({ theme, variable });

  return css`
    color: ${color};
  `;
};

const sizeStyles = (props: IStyledBaseProps) => {
  const size = props.theme.iconSizes.md;
  const marginTop = math(`(${props.theme.lineHeights.md} - ${size}) / 2`);
  const marginHorizontal = `${props.theme.space.base * 2}px`;

  return css`
    margin-top: ${marginTop};
    margin-${props.theme.rtl ? 'left' : 'right'}: ${marginHorizontal};
    width: ${size};
    height: ${size};
  `;
};

export const StyledOptionIcon = styled(StyledBaseIcon)<IStyledOptionIconProps>`
  flex-shrink: 0;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
