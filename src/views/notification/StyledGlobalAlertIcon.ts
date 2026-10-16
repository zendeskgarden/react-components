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
import { Type } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledGlobalAlertIconProps {
  $alertType: Type;
}

const sizeStyles = (props: IStyledBaseProps) => {
  const size = props.theme.iconSizes.md;
  // Vertically center icon on line height
  const marginTop = math(`(${props.theme.space.base * 5} - ${size}) / 2`);
  const marginHorizontal = `${props.theme.space.base * 2}px`;

  return css`
    margin-top: ${marginTop};
    margin-${props.theme.rtl ? 'left' : 'right'}: ${marginHorizontal};
    width: ${size};
    height: ${size};
  `;
};

const colorStyles = ({ theme, $alertType }: IStyledGlobalAlertIconProps & IStyledBaseProps) => {
  let color;

  switch ($alertType) {
    case 'success':
      color = getColor({ variable: 'foreground.success', offset: -400, theme });
      break;
    case 'error':
      color = getColor({ variable: 'foreground.danger', offset: -400, theme });
      break;

    case 'warning':
      color = getColor({ variable: 'foreground.warning', theme });
      break;

    case 'info':
      color = getColor({ variable: 'foreground.primary', theme });
      break;
  }

  return css`
    color: ${color};
  `;
};

export const StyledGlobalAlertIcon = styled(StyledBaseIcon)<IStyledGlobalAlertIconProps>`
  flex-shrink: 0;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
