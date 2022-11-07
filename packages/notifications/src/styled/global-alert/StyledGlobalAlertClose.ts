/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import { IGlobalAlertProps } from '../../types';

const COMPONENT_ID = 'notifications.global-alert.close';

interface IStyledGlobalAlertCloseProps {
  kind: IGlobalAlertProps['type'];
}

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  // Vertically center 32px icon button while retaining line height
  const marginVertical = `-${props.theme.space.base * 1.5}px`;
  const marginStart = `${props.theme.space.base * 2}px`;
  // Negative margin into container padding
  const marginEnd = `-${props.theme.space.base * 2}px`;

  return css`
    margin: ${marginVertical} ${props.theme.rtl ? marginStart : marginEnd} ${marginVertical}
      ${props.theme.rtl ? marginEnd : marginStart};
  `;
};

export const StyledGlobalAlertClose = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  size: 'small'
})<IStyledGlobalAlertCloseProps>`
  ${sizeStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertClose.defaultProps = {
  theme: DEFAULT_THEME
};
