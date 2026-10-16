/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, StyledBaseIcon, getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import styled, { ThemeProps, DefaultTheme, css, DataAttributes } from 'styled-components';

import { OptionType } from '../../types';

const COMPONENT_ID = 'dropdowns.combobox.option.icon';

export interface IStyledOptionIconProps extends ThemeProps<DefaultTheme> {
  $isDisabled?: boolean;
  $type?: OptionType;
}

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

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
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

export const StyledOptionIcon = styled(StyledBaseIcon).attrs<DataAttributes>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOptionIconProps>`
  flex-shrink: 0;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
