/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import { IGlobalAlertProps } from '../../types/elements';
import type { WithTheme } from '../../types/views';
import { StyledIconButton } from '../button/StyledIconButton';

interface IStyledGlobalAlertCloseProps {
  $alertType: IGlobalAlertProps['type'];
}

const colorStyles = (props: WithTheme<IStyledGlobalAlertCloseProps>) => {
  const { $alertType, theme } = props;

  let foregroundColor;
  let hoverBackgroundColor;
  let activeBackgroundColor;

  switch ($alertType) {
    case 'success':
    case 'error':
      foregroundColor = getColor({ hue: 'white', theme });
      hoverBackgroundColor = getColor({
        hue: 'white',
        theme,
        transparency: theme.opacity[100]
      });
      activeBackgroundColor = getColor({
        hue: 'white',
        theme,
        transparency: theme.opacity[200]
      });
      break;
    default:
      foregroundColor = getColor({ hue: 'neutralHue', shade: 900, theme });
      hoverBackgroundColor = getColor({
        hue: 'neutralHue',
        shade: 900,
        theme,
        transparency: theme.opacity[100]
      });
      activeBackgroundColor = getColor({
        hue: 'neutralHue',
        shade: 900,
        theme,
        transparency: theme.opacity[200]
      });
  }

  return css`
    color: ${foregroundColor};

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${foregroundColor};
    }

    ${focusStyles({
      theme,
      color: { hue: 'neutralHue', shade: 900 },
      styles: { color: foregroundColor }
    })}

    &:active {
      background-color: ${activeBackgroundColor};
      color: ${foregroundColor};
    }
  `;
};

const sizeStyles = (props: WithTheme) => {
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

export const StyledGlobalAlertClose = styled(StyledIconButton)<
  WithTheme<IStyledGlobalAlertCloseProps>
>`
  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
