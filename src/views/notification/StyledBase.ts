/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import { Type } from '../../types/elements';
import type { WithTheme } from '../../types/views';
import { validationTypes } from '../../utils/notification/icons';

export interface IStyledNotificationBaseProps {
  $isFloating?: boolean;
  $type?: Type;
}

const colorStyles = ({ theme, $type, $isFloating }: WithTheme<IStyledNotificationBaseProps>) => {
  const { space, shadows } = theme;
  let backgroundColor;
  let borderColor;
  let foregroundColor;

  if (!$isFloating && $type && !!(validationTypes as any)[$type]) {
    let hue;
    let fgVariable;

    switch ($type) {
      case validationTypes.success:
        hue = 'successHue';
        fgVariable = 'foreground.successEmphasis';
        break;
      case validationTypes.error:
        hue = 'dangerHue';
        fgVariable = 'foreground.dangerEmphasis';
        break;
      case validationTypes.warning:
        hue = 'warningHue';
        fgVariable = 'foreground.warningEmphasis';
        break;
      case validationTypes.info:
        hue = 'neutralHue';
        fgVariable = 'foreground.default';
        break;
    }

    backgroundColor = getColor({ theme, hue, light: { shade: 200 }, dark: { shade: 900 } });
    borderColor = 'transparent';
    foregroundColor = getColor({ variable: fgVariable, theme });
  } else {
    backgroundColor = getColor({ variable: 'background.raised', theme });
    borderColor = getColor({ variable: 'border.default', theme });
    foregroundColor = getColor({ variable: 'foreground.default', theme });
  }

  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const boxShadow = $isFloating
    ? shadows.lg(offsetY, blurRadius, getColor({ variable: 'shadow.large', theme }))
    : undefined;

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

const padding = (props: WithTheme) => {
  const { space } = props.theme;
  const paddingVertical = `${space.base * 5}px`;
  const paddingHorizontal = `${space.base * 10}px`;

  return `${paddingVertical} ${paddingHorizontal}`;
};

export const StyledBase = styled.div<WithTheme<IStyledNotificationBaseProps>>`
  position: relative;
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => props.theme.borderRadii.xl};
  padding: ${padding};
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${colorStyles};

  ${componentStyles}
`;
