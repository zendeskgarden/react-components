/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, getLineHeight, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { VALIDATION_TYPE } from '../utils/types';

export interface IStyledBaseProps {
  isFloating?: boolean;
  hue?: string;
  type?: VALIDATION_TYPE;
}

const boxShadow = (props: ThemeProps<DefaultTheme>) => {
  const { theme } = props;
  const { space, shadows } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor('chromeHue', 600, theme, 0.15);

  return shadows.lg(offsetY, blurRadius, color as string);
};

const colorStyles = (props: ThemeProps<DefaultTheme> & IStyledBaseProps) => {
  let backgroundColor;
  let borderColor;
  let foregroundColor;

  if (props.hue) {
    backgroundColor = getColor(props.hue, 100, props.theme);
    borderColor = getColor(props.hue, 300, props.theme);
    foregroundColor = getColor(props.hue, props.type === 'info' ? 600 : 700, props.theme);
  } else {
    backgroundColor = props.theme.colors.background;
    borderColor = getColor('neutralHue', 300, props.theme);
    foregroundColor = getColor('neutralHue', 800, props.theme);
  }

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

export const StyledBase = styled.div`
  position: relative;
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => props.theme.borderRadii.md};
  box-shadow: ${props => props.isFloating && boxShadow};
  padding: ${padding};
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${colorStyles};
`;

StyledBase.defaultProps = {
  theme: DEFAULT_THEME
};
