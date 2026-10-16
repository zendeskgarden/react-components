/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import type { IStyledBaseProps } from '../../types/views';
import { getMinHeight as getOptionMinHeight } from './StyledOption';

export interface IStyledOptionSelectionIconProps extends ThemeProps<DefaultTheme> {
  $isCompact?: boolean;
}

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const color = getColor({ theme, variable: 'foreground.primary' });

  return css`
    color: ${color};
  `;
};

const sizeStyles = ({ theme, $isCompact }: IStyledOptionSelectionIconProps) => {
  const size = theme.iconSizes.sm;
  const position = `${theme.space.base * 3.5}px`;
  const top = math(`(${getOptionMinHeight({ theme, $isCompact })} - ${size}) / 2`);
  const side = theme.rtl ? 'right' : 'left';

  return css`
    top: ${top};
    ${side}: ${position};
    width: ${size};
    height: ${size};
  `;
};

export const StyledOptionSelectionIcon = styled(StyledBaseIcon)<IStyledOptionSelectionIconProps>`
  position: absolute;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
