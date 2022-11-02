/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

import { Type } from '../../types';

type StyledGlobalAlertCloseProps = ThemeProps<DefaultTheme> & { kind: Type };

const COMPONENT_ID = 'notifications.global-alert.close';

export const colorStyles = (props: StyledGlobalAlertCloseProps) => {
  const { color, shade } = {
    success: {
      color: props.theme.colors.successHue,
      shade: 200
    },
    warning: {
      color: props.theme.colors.warningHue,
      shade: 800
    },
    error: {
      color: props.theme.colors.dangerHue,
      shade: 200
    },
    info: {
      color: props.theme.colors.primaryHue,
      shade: 600
    }
  }[props.kind];

  return css`
    /* prettier-ignore */
    transition:
      box-shadow 0.1s ease-in-out,
      background-color 0.25s ease-in-out,
      color 0.25s ease-in-out;
    background-color: transparent;
    color: inherit;

    &:hover {
      background-color: ${getColor(color, shade, props.theme, 0.08)};
      color: inherit;
    }

    &[data-garden-focus-visible],
    &:focus-visible {
      outline: none;
      box-shadow: ${props.theme.shadows.md(getColor(color, shade, props.theme, 0.35) as string)};
      color: inherit;
    }

    &:active {
      /* prettier-ignore */
      transition:
        background-color 0.1s ease-in-out,
        color 0.1s ease-in-out;
      background-color: ${getColor(color, shade, props.theme, 0.2)};
      color: inherit;
    }
  `;
};

function sizeStyles(props: StyledGlobalAlertCloseProps) {
  return css`
    border: none;
    border-radius: 50%;
    padding: 0;
    width: ${props.theme.space.base * 8}px;
    height: ${props.theme.space.base * 8}px;
    font-size: 0;
  `;
}

export const StyledGlobalAlertClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<StyledGlobalAlertCloseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  user-select: none;

  ${colorStyles}
  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertClose.defaultProps = {
  theme: DEFAULT_THEME
};
