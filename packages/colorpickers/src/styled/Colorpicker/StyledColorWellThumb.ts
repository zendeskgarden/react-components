/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme } from 'styled-components';
import { stripUnit } from 'polished';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_colorwell_thumb';

interface IStyledSaturationPointerProps {
  top: number;
  left: number;
}

const sizeStyles = (theme: DefaultTheme) => {
  const borderWidth = (stripUnit(theme.borderWidths.sm) as number) * 2;
  const size = theme.space.base * 5;
  const translateValue = size / -2;

  return `
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
  border: solid ${props => props.theme.palette.white};
  border-radius: 50%;
  box-shadow: ${props =>
    props.theme.shadows.lg(
      `${props.theme.space.base}px`,
      `${props.theme.space.base * 2}px`,
      getColor('neutralHue', 800, props.theme, 0.24)!
    )};

  ${props => sizeStyles(props.theme)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledColorWellThumb.defaultProps = {
  theme: DEFAULT_THEME
};
