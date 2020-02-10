/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTitle } from './content/StyledTitle';
import { StyledBase } from './StyledBase';

const COMPONENT_ID = 'notifications.alert';

export interface IStyledAlertProps {
  hue?: string;
}

const colorStyles = (props: IStyledAlertProps & ThemeProps<DefaultTheme>) => css`
  ${StyledTitle} {
    color: ${props.hue && getColor(props.hue, 800, props.theme)};
  }
`;

/**
 * Supports all `<div>` props
 */
export const StyledAlert = styled(StyledBase).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: props.role === undefined ? 'alert' : props.role
}))<IStyledAlertProps>`
  ${colorStyles}
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAlert.defaultProps = {
  theme: DEFAULT_THEME
};
