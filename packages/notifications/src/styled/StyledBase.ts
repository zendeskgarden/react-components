/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  getLineHeight,
  DEFAULT_THEME,
  getColor,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { Type } from '../types';
import { validationTypes } from '../utils/icons';

const COMPONENT_ID = 'notifications.base_container';

export interface IStyledBaseProps {
  $isFloating?: boolean;
  $type?: Type;
}

const boxShadow = (props: ThemeProps<DefaultTheme>) => {
  const { theme } = props;
  const { space, shadows, opacity } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor({
    hue: 'neutralHue',
    shade: 1200,
    light: { transparency: opacity[200] },
    dark: { transparency: opacity[1000] },
    theme
  });

  return shadows.lg(offsetY, blurRadius, color as string);
};

const colorStyles = ({
  theme,
  $type,
  $isFloating
}: ThemeProps<DefaultTheme> & IStyledBaseProps) => {
  let bgVariable;
  let borderVariable;
  let fgVariable;

  if (!$isFloating && $type && Object.keys(validationTypes).includes($type)) {
    switch ($type) {
      case validationTypes.success:
        bgVariable = 'background.success';
        borderVariable = 'border.success';
        fgVariable = 'foreground.success';
        break;
      case validationTypes.error:
        bgVariable = 'background.danger';
        borderVariable = 'border.danger';
        fgVariable = 'foreground.danger';
        break;
      case validationTypes.warning:
        bgVariable = 'background.warning';
        borderVariable = 'border.warning';
        fgVariable = 'foreground.warning';
        break;
      case validationTypes.info:
        bgVariable = 'background.raised';
        borderVariable = 'border.default';
        fgVariable = 'foreground.subtle';
        break;
    }
  } else {
    bgVariable = 'background.raised';
    borderVariable = 'border.default';
    fgVariable = 'foreground.default';
  }

  const backgroundColor = getColor({ variable: bgVariable, theme });
  const borderColor = getColor({ variable: borderVariable, theme });
  const foregroundColor = getColor({ variable: fgVariable, theme });

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

const padding = (props: ThemeProps<DefaultTheme>) => {
  const { space } = props.theme;
  const paddingVertical = `${space.base * 5}px`;
  const paddingHorizontal = `${space.base * 10}px`;

  return `${paddingVertical} ${paddingHorizontal}`;
};

export const StyledBase = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: relative;
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => props.theme.borderRadii.md};
  box-shadow: ${props => props.$isFloating && boxShadow};
  padding: ${padding};
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;

StyledBase.defaultProps = {
  theme: DEFAULT_THEME
};
