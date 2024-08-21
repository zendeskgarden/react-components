/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledTitle } from './content/StyledTitle';
import { IStyledBaseProps, StyledBase } from './StyledBase';
import { validationTypes } from '../utils/icons';
import { Type } from '../types';

const COMPONENT_ID = 'notifications.alert';

export interface IStyledAlertProps extends IStyledBaseProps {
  $type?: Type;
}

const colorStyles = (props: IStyledAlertProps & ThemeProps<DefaultTheme>) => {
  const { $type, theme } = props;

  let variable;

  switch ($type) {
    case validationTypes.success:
      variable = 'foreground.successEmphasis';
      break;
    case validationTypes.error:
      variable = 'foreground.dangerEmphasis';
      break;
    case validationTypes.warning:
      variable = 'foreground.warningEmphasis';
      break;
    case validationTypes.info:
      variable = 'foreground.default';
      break;
  }

  const color = variable ? getColor({ variable, theme }) : undefined;

  return css`
    ${StyledTitle} {
      color: ${color};
    }
  `;
};

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
