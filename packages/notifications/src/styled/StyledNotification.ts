/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { VALIDATION_TYPE, ARRAY_VALIDATION_TYPE } from '../utils/types';
import { StyledTitle } from './content/StyledTitle';
import { StyledBase } from './StyledBase';

const COMPONENT_ID = 'notifications.notification';

export interface IStyledNotificationProps {
  /** Applies notification type styles */
  type?: VALIDATION_TYPE;
}

const colorStyles = (props: IStyledNotificationProps & ThemeProps<DefaultTheme>) => {
  const { type, theme } = props;
  const { colors } = theme;
  const { successHue, dangerHue, warningHue, foreground } = colors;

  let color;

  switch (type) {
    case 'success':
      color = getColor(successHue, 600, theme);
      break;
    case 'error':
      color = getColor(dangerHue, 600, theme);
      break;
    case 'warning':
      color = getColor(warningHue, 700, theme);
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
export const StyledNotification = styled(StyledBase).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: props.role === undefined ? 'status' : props.role
}))<IStyledNotificationProps>`
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNotification.propTypes = {
  type: PropTypes.oneOf(ARRAY_VALIDATION_TYPE)
};

StyledNotification.defaultProps = {
  theme: DEFAULT_THEME
};
