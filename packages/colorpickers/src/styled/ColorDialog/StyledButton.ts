/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

const COMPONENT_ID = 'colorpickers.colordialog_button';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const shade = 600;
  const baseColor = getColor('neutralHue', shade, props.theme);
  const hoverColor = getColor('neutralHue', shade + 100, props.theme);
  const disabledForegroundColor = getColor('neutralHue', shade - 200, props.theme);

  return `
    color: ${baseColor};

    &:hover {
      color: ${hoverColor};
      background-color: ${props.theme.colors.background};
    }

    &:disabled {
      color: ${disabledForegroundColor};
      background-color: ${getColor('neutralHue', 100, props.theme)};
    }
  `;
};

export const StyledButton = styled((Button as unknown) as 'button').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  padding: 0;
  width: ${props => props.theme.space.base * 17}px;
  height: ${props => props.theme.space.base * 10}px;

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME
};
