/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import {
  DEFAULT_THEME,
  getColor,
  retrieveComponentStyles,
  StyledBaseIcon
} from '@zendeskgarden/react-theming';
import { Type } from '../../types';

const COMPONENT_ID = 'notifications.global_alert.icon';

interface IStyledGlobalAlertIconProps {
  $alertType: Type;
}

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const size = props.theme.iconSizes.md;
  // Vertically center icon on line height
  const marginTop = math(`(${props.theme.space.base * 5} - ${size}) / 2`);
  const marginHorizontal = `${props.theme.space.base * 2}px`;

  return css`
    margin-top: ${marginTop};
    /* stylelint-disable-next-line property-no-unknown */
    margin-${props.theme.rtl ? 'left' : 'right'}: ${marginHorizontal};
    width: ${size};
    height: ${size};
  `;
};

const colorStyles = ({
  theme,
  $alertType
}: ThemeProps<DefaultTheme> & IStyledGlobalAlertIconProps) => {
  const hue = {
    success: 'successHue',
    error: 'dangerHue',
    warning: 'warningHue',
    info: 'primaryHue'
  }[$alertType];

  return css`
    color: ${getColor({
      hue,
      shade: ['success', 'error'].includes($alertType) ? 300 : 700,
      theme
    })};
  `;
};

export const StyledGlobalAlertIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex-shrink: 0;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertIcon.defaultProps = {
  theme: DEFAULT_THEME
};
