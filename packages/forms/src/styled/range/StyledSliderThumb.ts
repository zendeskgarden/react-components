/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import {
  getColorV8,
  retrieveComponentStyles,
  DEFAULT_THEME,
  focusStyles
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.slider_thumb';

interface IStyledSliderThumbProps {
  position?: number;
  isDisabled?: boolean;
}

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const SHADE = 600;
  const backgroundColor = getColorV8('primaryHue', SHADE, props.theme);
  const borderColor = backgroundColor;
  const boxShadow = props.theme.shadows.lg(
    math(`${props.theme.space.base} * 1px`),
    math(`${props.theme.space.base} * 2px`),
    getColorV8('neutralHue', SHADE + 200, props.theme, 0.24)!
  );
  const activeBackgroundColor = getColorV8('primaryHue', SHADE + 100, props.theme);
  const activeBorderColor = borderColor;
  const hoverBackgroundColor = activeBackgroundColor;
  const hoverBorderColor = hoverBackgroundColor;
  const disabledBackgroundColor = getColorV8('neutralHue', SHADE - 300, props.theme);
  const disabledBorderColor = disabledBackgroundColor;

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};

    &:hover,
    &[data-garden-hover='true'] {
      border-color: ${hoverBorderColor};
      background-color: ${hoverBackgroundColor};
    }

    ${focusStyles({
      theme: props.theme
    })}

    &:active,
    &[data-garden-active='true'] {
      border-color: ${activeBorderColor};
      background-color: ${activeBackgroundColor};
    }

    &[aria-disabled='true'] {
      border-color: ${disabledBorderColor};
      box-shadow: none;
      background-color: ${disabledBackgroundColor};
    }
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const size = math(`${props.theme.space.base} * 5px`);
  const marginTop = math(`${size} / -2`);

  return css`
    margin-top: ${marginTop};
    width: ${size};
    height: ${size};
  `;
};

export const StyledSliderThumb = styled.div.attrs<IStyledSliderThumbProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-disabled': props.isDisabled
}))<IStyledSliderThumbProps>`
  appearance: none;
  position: absolute;
  top: 50%;
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props => math(`${props.position} * 1px`)};
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out;
  z-index: 1;
  border: ${props => props.theme.borders.md};
  border-radius: 100%;
  cursor: inherit;
  box-sizing: border-box;
  font-size: 0;

  ${props => sizeStyles(props)};

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSliderThumb.defaultProps = {
  position: 0,
  theme: DEFAULT_THEME
};
