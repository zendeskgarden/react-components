/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { INotificationProps, TYPE } from '../types';
import { StyledTitle } from './content/StyledTitle';
import { StyledBase } from './StyledBase';

const COMPONENT_ID = 'notifications.notification';

const colorStyles = (props: INotificationProps & ThemeProps<DefaultTheme>) => {
  const { type, theme } = props;
  const { colors } = theme;
  const { successHue, dangerHue, warningHue, foreground } = colors;

  let color;

  switch (type) {
    case 'success':
      color = getColorV8(successHue, 600, theme);
      break;
    case 'error':
      color = getColorV8(dangerHue, 600, theme);
      break;
    case 'warning':
      color = getColorV8(warningHue, 700, theme);
      break;
    case 'info':
      color = foreground;
      break;
    default:
      color = 'inherit';
      break;
  }

  return css`
    ${StyledTitle} {
      color: ${color};
    }
  `;
};

/**
 * Supports all `<div>` props
 */
export const StyledNotification = styled(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<INotificationProps>`
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNotification.propTypes = {
  type: PropTypes.oneOf(TYPE)
};

StyledNotification.defaultProps = {
  theme: DEFAULT_THEME
};
