/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  DEFAULT_THEME,
  retrieveComponentStyles,
  getLineHeight,
  focusStyles,
  getColor
} from '@zendeskgarden/react-theming';

import { IGlobalAlertProps } from '../../types';

const COMPONENT_ID = 'notifications.global_alert';

interface IStyledGlobalAlertProps {
  $alertType: IGlobalAlertProps['type'];
}

const colorStyles = ({ theme, $alertType }: ThemeProps<DefaultTheme> & IStyledGlobalAlertProps) => {
  let borderColor;
  let backgroundColor;
  let foregroundColor;
  let anchorHoverColor;
  let anchorActiveColor;
  let focusVariable;

  if (['success', 'error'].includes($alertType)) {
    const hue = $alertType === 'success' ? 'successHue' : 'dangerHue';
    focusVariable =
      $alertType === 'success' ? 'foreground.successEmphasis' : 'foreground.dangerEmphasis';

    borderColor = getColor({ hue, shade: 800, theme });
    backgroundColor = getColor({ hue, shade: 700, theme });
    foregroundColor = getColor({ hue, shade: 100, theme });
    anchorHoverColor = theme.palette.white;
    anchorActiveColor = theme.palette.white;
  } else {
    const hue = $alertType === 'warning' ? 'warningHue' : 'primaryHue';
    focusVariable = $alertType === 'warning' ? 'foreground.warning' : 'foreground.primary';

    borderColor = getColor({ hue, shade: 400, theme });
    backgroundColor = getColor({ hue, shade: 300, theme });
    foregroundColor = getColor({ hue, shade: 800, theme });
    anchorHoverColor = getColor({ hue, shade: 900, theme });
    anchorActiveColor = getColor({ hue, shade: 1000, theme });
  }

  // Apply a border without affecting the element's size
  const boxShadow = `0 ${theme.borderWidths.sm} ${theme.borderWidths.sm} ${borderColor}`;

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

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlert.defaultProps = {
  theme: DEFAULT_THEME
};
