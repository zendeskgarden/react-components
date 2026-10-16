/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import { IGlobalAlertProps } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';
import { StyledIconButton } from '../button/StyledIconButton';

interface IStyledGlobalAlertCloseProps {
  $alertType: IGlobalAlertProps['type'];
}

export const colorStyles = (props: IStyledGlobalAlertCloseProps & IStyledBaseProps) => {
  const { $alertType, theme } = props;

  let hoverBackgroundColor;
  let hoverForegroundColor;
  let activeBackgroundColor;
  let activeForegroundColor;
  let focusVariable;

  switch ($alertType) {
    case 'success':
      hoverBackgroundColor = getColor({
        variable: 'background.success',
        theme,
        transparency: theme.opacity[100]
      });
      hoverForegroundColor = theme.palette.white;
      activeBackgroundColor = getColor({
        variable: 'background.success',
        theme,
        transparency: theme.opacity[200]
      });
      activeForegroundColor = theme.palette.white;
      focusVariable = 'foreground.successEmphasis';
      break;
    case 'error':
      hoverBackgroundColor = getColor({
        variable: 'background.danger',
        theme,
        transparency: theme.opacity[100]
      });
      hoverForegroundColor = theme.palette.white;
      activeBackgroundColor = getColor({
        variable: 'background.danger',
        theme,
        transparency: theme.opacity[200]
      });
      activeForegroundColor = theme.palette.white;
      focusVariable = 'foreground.dangerEmphasis';
      break;
    case 'warning':
      hoverBackgroundColor = getColor({
        variable: 'background.warningEmphasis',
        transparency: theme.opacity[100],
        theme
      });
      hoverForegroundColor = getColor({
        variable: 'foreground.warningEmphasis',
        offset: 200,
        theme
      });
      activeBackgroundColor = getColor({
        variable: 'background.warningEmphasis',
        transparency: theme.opacity[200],
        theme
      });
      activeForegroundColor = getColor({
        variable: 'foreground.warningEmphasis',
        offset: 300,
        theme
      });
      focusVariable = 'foreground.warning';
      break;
    default:
      focusVariable = 'foreground.primary';
  }

  return css`
    color: inherit;

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    ${focusStyles({
      theme,
      color: { variable: focusVariable }
    })}

    &:active {
      background-color: ${activeBackgroundColor};
      color: ${activeForegroundColor};
    }
  `;
};

const sizeStyles = (props: IStyledBaseProps) => {
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

export const StyledGlobalAlertClose = styled(StyledIconButton)<IStyledGlobalAlertCloseProps>`
  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
