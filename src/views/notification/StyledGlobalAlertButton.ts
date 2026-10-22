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
import type { IStyledBaseProps } from '../../types/views';
import { IStyledButtonProps, StyledButton } from '../button/StyledButton';
import { StyledIcon } from '../button/StyledIcon';

interface IStyledGlobalAlertButtonProps extends IStyledButtonProps {
  $alertType?: IGlobalAlertProps['type'];
}

/**
 * 1. The basic button takes the same per-type foreground as the close button:
 *    white on the success and error fills, neutral 900 on the warning and info fills.
 *    The primary button is neutral on every type and keeps the button styles.
 * 2. Icons inherit the button foreground, as they do in the close button.
 */
const colorStyles = ({
  theme,
  $alertType,
  $isBasic
}: IStyledGlobalAlertButtonProps & IStyledBaseProps) => {
  if (!$isBasic) {
    return css`
      ${focusStyles({ theme, color: { hue: 'neutralHue', shade: 900 } })}
    `;
  }

  const options =
    $alertType === 'success' || $alertType === 'error'
      ? { theme, hue: 'white' }
      : { theme, hue: 'neutralHue', shade: 900 };
  const foregroundColor = getColor(options);
  const hoverBackgroundColor = getColor({ ...options, transparency: theme.opacity[100] });
  const activeBackgroundColor = getColor({ ...options, transparency: theme.opacity[200] });

  /* [1] */
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

    /* [2] */
    /* prettier-ignore */
    & ${StyledIcon},
    &:hover ${StyledIcon},
    &:focus-visible ${StyledIcon},
    &:active ${StyledIcon} {
      color: inherit;
    }
  `;
};

function sizeStyles(props: IStyledBaseProps) {
  // Vertically center 32px button while retaining line height
  const marginVertical = `-${props.theme.space.base * 1.5}px`;
  const marginStart = `${props.theme.space.base * 2}px`;

  return css`
    margin: ${marginVertical} ${props.theme.rtl ? marginStart : 0} ${marginVertical}
      ${props.theme.rtl ? 0 : marginStart};
  `;
}

export const StyledGlobalAlertButton = styled(StyledButton)<IStyledGlobalAlertButtonProps>`
  flex-shrink: 0;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
