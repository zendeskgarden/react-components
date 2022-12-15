/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { IGlobalAlertProps, IGlobalAlertTitleProps } from '../../types';

const COMPONENT_ID = 'notifications.global-alert.title';

interface IStyledGlobalAlertTitleProps {
  alertType: IGlobalAlertProps['type'];
  isRegular?: IGlobalAlertTitleProps['isRegular'];
}

const colorStyles = (props: ThemeProps<DefaultTheme> & IStyledGlobalAlertTitleProps) => {
  let color;

  switch (props.alertType) {
    case 'success':
    case 'error':
      color = props.theme.palette.white;
      break;

    case 'warning':
      color = getColor('warningHue', 900, props.theme);
      break;

    case 'info':
      color = getColor('primaryHue', 800, props.theme);
      break;
  }

  return css`
    color: ${color};
  `;
};

export const StyledGlobalAlertTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledGlobalAlertTitleProps>`
  display: inline;
  /* stylelint-disable-next-line property-no-unknown */
  margin-${props => (props.theme.rtl ? 'left' : 'right')}: ${props => props.theme.space.base * 2}px;
  font-weight: ${props =>
    props.isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertTitle.defaultProps = {
  theme: DEFAULT_THEME
};
