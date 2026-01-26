/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor, StyledBaseIcon, componentStyles } from '@zendeskgarden/react-theming';
import styled, { DataAttributes, DefaultTheme, ThemeProps, css } from 'styled-components';

import { Type } from '../types';
import { validationTypes } from '../utils/icons';

const COMPONENT_ID = 'notifications.icon';

interface IStyledIconProps extends ThemeProps<DefaultTheme> {
  $type?: Type;
}

const sizeStyles = ({ theme: { rtl, space } }: IStyledIconProps) => {
  return css`
    right: ${rtl && `${space.base * 4}px`};
    left: ${!rtl && `${space.base * 4}px`};
    margin-top: ${space.base / 2}px;
  `;
};

const colorStyles = ({ theme, $type }: IStyledIconProps) => {
  let variable;

  switch ($type) {
    case validationTypes.success:
      variable = 'foreground.success';
      break;
    case validationTypes.error:
      variable = 'foreground.danger';
      break;
    case validationTypes.warning:
      variable = 'foreground.warning';
      break;
    case validationTypes.info:
      variable = 'foreground.subtle';
      break;
    default:
      variable = 'foreground.default';
      break;
  }

  const color = getColor({ variable, theme });

  return css`
    color: ${color};
  `;
};

export const StyledIcon = styled(StyledBaseIcon).attrs<DataAttributes>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledIconProps>`
  position: absolute;

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles}
`;
