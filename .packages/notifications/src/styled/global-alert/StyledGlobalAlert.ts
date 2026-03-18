/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  componentStyles,
  getLineHeight,
  focusStyles,
  getColor
} from '@zendeskgarden/react-theming';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

import { IGlobalAlertProps } from '../../types';

const COMPONENT_ID = 'notifications.global_alert';

interface IStyledGlobalAlertProps {
  $alertType: IGlobalAlertProps['type'];
}

/**
 * 1. Shifting :focus-visible from LVHFA order to preserve `color` on hover
 */
const colorStyles = ({ theme, $alertType }: ThemeProps<DefaultTheme> & IStyledGlobalAlertProps) => {
  let borderColor;
  let backgroundColor;
  let foregroundColor;
  let anchorHoverColor;
  let anchorActiveColor;
  let focusVariable;

  switch ($alertType) {
    case 'success': {
      borderColor = getColor({ variable: 'border.successEmphasis', offset: 100, theme });
      backgroundColor = getColor({ variable: 'background.successEmphasis', theme });
      foregroundColor = getColor({ variable: 'foreground.success', offset: -600, theme });
      anchorHoverColor = theme.palette.white;
      anchorActiveColor = theme.palette.white;
      focusVariable = 'foreground.successEmphasis';
      break;
    }
    case 'error': {
      borderColor = getColor({ variable: 'border.dangerEmphasis', offset: 100, theme });
      backgroundColor = getColor({ variable: 'background.dangerEmphasis', theme });
      foregroundColor = getColor({ variable: 'foreground.danger', offset: -600, theme });
      anchorActiveColor = theme.palette.white;
      anchorHoverColor = theme.palette.white;
      focusVariable = 'foreground.dangerEmphasis';
      break;
    }
    case 'warning': {
      borderColor = getColor({ variable: 'border.warningEmphasis', offset: -300, theme });
      backgroundColor = getColor({ variable: 'background.warningEmphasis', offset: -400, theme });
      const fgVariable = 'foreground.warning';
      foregroundColor = getColor({ variable: fgVariable, offset: 100, theme });
      anchorHoverColor = getColor({ variable: fgVariable, offset: 200, theme });
      anchorActiveColor = getColor({ variable: fgVariable, offset: 300, theme });
      focusVariable = fgVariable;
      break;
    }
    case 'info': {
      borderColor = getColor({ variable: 'border.primaryEmphasis', offset: -300, theme });
      backgroundColor = getColor({ variable: 'background.primaryEmphasis', offset: -400, theme });
      const fgVariable = 'foreground.primary';
      foregroundColor = getColor({ variable: fgVariable, offset: 100, theme });
      anchorHoverColor = getColor({ variable: fgVariable, offset: 200, theme });
      anchorActiveColor = getColor({ variable: fgVariable, offset: 300, theme });
      focusVariable = fgVariable;
      break;
    }
  }

  // Apply a border without affecting the element's size
  const boxShadow = `inset 0 -${theme.borderWidths.sm} 0 ${borderColor}`;

  /* stylelint-disable selector-no-qualifying-type */
  return css`
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    & a {
      color: inherit;

      /* [1] */
      ${focusStyles({
        theme,
        color: { variable: focusVariable },
        styles: { color: 'inherit' }
      })}

      /* [1] */
      &:hover {
        color: ${anchorHoverColor};
      }

      &:active {
        color: ${anchorActiveColor};
      }
    }
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const { fontSizes, space } = props.theme;
  const minHeight = space.base * 13;
  const padding = space.base * 4;
  const lineHeight = getLineHeight(space.base * 5, fontSizes.md);

  return css`
    padding: ${padding}px;
    min-height: ${minHeight}px;
    line-height: ${lineHeight};
    font-size: ${fontSizes.md};
  `;
};

export const StyledGlobalAlert = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledGlobalAlertProps>`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  ${sizeStyles}
  ${colorStyles}

  && a {
    border-radius: ${props => props.theme.borderRadii.sm};
    text-decoration: underline;
  }

  ${componentStyles};
`;
