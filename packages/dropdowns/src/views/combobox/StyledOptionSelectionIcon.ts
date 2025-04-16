/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DataAttributes, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import { getColor, componentStyles, StyledBaseIcon } from '@zendeskgarden/react-theming';
import { getMinHeight as getOptionMinHeight } from './StyledOption';

const COMPONENT_ID = 'dropdowns.combobox.option.selection_icon';

export interface IStyledOptionSelectionIconProps extends ThemeProps<DefaultTheme> {
  $isCompact?: boolean;
}

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
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

export const StyledOptionSelectionIcon = styled(StyledBaseIcon).attrs<DataAttributes>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOptionSelectionIconProps>`
  position: absolute;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
