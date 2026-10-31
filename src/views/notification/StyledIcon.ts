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
import { Type } from '../../types/elements';
import type { WithTheme } from '../../types/views';
import { validationTypes } from '../../utils/notification/icons';

interface IStyledIconProps {
  $type?: Type;
}

const sizeStyles = ({ theme }: WithTheme<IStyledIconProps>) => {
  const { rtl, space } = theme;
  const size = getIconRenderSize(theme);

  return css`
    top: ${space.base * 4}px;
    right: ${rtl && `${space.base * 3}px`};
    left: ${!rtl && `${space.base * 3}px`};
    margin-top: 0;
    width: ${size};
    height: ${size};
  `;
};

const colorStyles = ({ theme, $type }: WithTheme<IStyledIconProps>) => {
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

export const StyledIcon = styled(StyledBaseIcon)<WithTheme<IStyledIconProps>>`
  position: absolute;

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles}
`;
