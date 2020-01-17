/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.slider_thumb';

interface IStyledSliderThumbProps {
  position?: number;
  isDisabled?: boolean;
}

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const SHADE = 600;
  const backgroundColor = getColor('primaryHue', SHADE, props.theme);
  const borderColor = backgroundColor;
  const boxShadow = props.theme.shadows.lg(
    math(`${props.theme.space.base} * 1px`),
    math(`${props.theme.space.base} * 2px`),
    getColor('neutralHue', SHADE + 200, props.theme, 0.24)!
  );
  const activeBackgroundColor = getColor('primaryHue', SHADE + 100, props.theme);
  const focusBoxShadow = props.theme.shadows.md(getColor('primaryHue', SHADE, props.theme, 0.35)!);
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 300, props.theme);
  const disabledBorderColor = disabledBackgroundColor;

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};

    &[data-garden-focus-visible='true'] {
      box-shadow: ${focusBoxShadow};
    }

    &:active {
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
  z-index: 1;
  border: ${props => props.theme.borders.md};
  border-radius: 100%;
  cursor: inherit;
  box-sizing: border-box;
  font-size: 0;

  ${props => sizeStyles(props)};

  &:focus {
    outline: none;
  }

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSliderThumb.defaultProps = {
  position: 0,
  theme: DEFAULT_THEME
};
