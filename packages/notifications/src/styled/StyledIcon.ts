/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import {
  getColor,
  DEFAULT_THEME,
  StyledBaseIcon,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
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
  let color;

  switch ($type) {
    case validationTypes.success:
      color = getColor({ variable: 'foreground.success', theme });
      break;
    case validationTypes.error:
      color = getColor({ variable: 'foreground.danger', theme });
      break;
    case validationTypes.warning:
      color = getColor({ variable: 'foreground.warning', theme });
      break;
    case validationTypes.info:
      color = getColor({ variable: 'foreground.subtle', theme });
      break;
  }

  return css`
    color: ${color};
  `;
};

export const StyledIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledIconProps>`
  position: absolute;

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
