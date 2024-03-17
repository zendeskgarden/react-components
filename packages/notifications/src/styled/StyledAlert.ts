/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTitle } from './content/StyledTitle';
import { StyledBase } from './StyledBase';

const COMPONENT_ID = 'notifications.alert';

export interface IStyledAlertProps {
  hue?: string;
}

const colorStyles = (props: IStyledAlertProps & ThemeProps<DefaultTheme>) => css`
  ${StyledTitle} {
    color: ${props.hue && getColorV8(props.hue, 800, props.theme)};
  }
`;

/**
 * Supports all `<div>` props
 */
export const StyledAlert = styled(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledAlertProps>`
  ${colorStyles}
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAlert.defaultProps = {
  theme: DEFAULT_THEME
};
