/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

const COMPONENT_ID = 'colorpickers.colordialog.button';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const shade = 600;
  const baseColor = getColor('neutralHue', shade, props.theme);
  const hoverColor = getColor('neutralHue', shade + 100, props.theme);
  const activeColor = getColor('neutralHue', shade + 200, props.theme);
  const disabledForegroundColor = getColor('neutralHue', shade - 200, props.theme);

  return `
    color: ${baseColor};

    &:hover {
      color: ${hoverColor};
    }

    &:active,
    &[aria-pressed='true'],
    &[aria-pressed='mixed'] {
      color: ${activeColor};
    }

    &:disabled {
      color: ${disabledForegroundColor};
    }
  `;
};

export const StyledButton = styled(Button).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  border: none;

  &:hover {
    background-color: ${props => props.theme.colors.background};
  }

  &:disabled {
    background-color: ${props => getColor('neutralHue', 100, props.theme)};
  }

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME
};
