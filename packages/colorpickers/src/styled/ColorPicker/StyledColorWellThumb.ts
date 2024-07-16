/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { stripUnit } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_colorwell_thumb';

interface IStyledSaturationPointerProps {
  top: number;
  left: number;
}

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ theme, variable: 'background.default' });

  const boxShadow = `${theme.shadows.lg(
    `${theme.space.base}px`,
    `${theme.space.base * 2}px`,
    getColor({ theme, hue: 'neutralHue', shade: 900, transparency: theme.opacity[300] })
  )}`;

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
  `;
};

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const borderWidth = (stripUnit(theme.borderWidths.sm) as number) * 2;
  const size = theme.space.base * 5;
  const translateValue = size / -2;

  return css`
    transform: translate(${translateValue}px, ${translateValue}px);
    box-sizing: border-box;
    border-width: ${borderWidth}px;
    width: ${size}px;
    height: ${size}px;
  `;
};

export const StyledColorWellThumb = styled.div.attrs<IStyledSaturationPointerProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'colorwell-thumb',
  style: {
    top: `${props.top}%`,
    left: `${props.left}%`
  }
}))<IStyledSaturationPointerProps>`
  position: absolute;
  border: ${props => props.theme.borders.sm};
  border-radius: 50%;

  ${sizeStyles}

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledColorWellThumb.defaultProps = {
  theme: DEFAULT_THEME
};
