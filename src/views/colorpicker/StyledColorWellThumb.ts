/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { stripUnit } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';

const colorStyles = ({ theme }: WithTheme) => {
  const borderColor = getColor({ theme, hue: 'white' });
  const boxShadow = `${theme.shadows.xs(getColor({ theme, hue: 'black' }))}`;

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
  `;
};

const sizeStyles = ({ theme }: WithTheme) => {
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

export const StyledColorWellThumb = styled.div<WithTheme>`
  position: absolute;
  border: ${props => props.theme.borders.sm};
  border-radius: 50%;

  ${sizeStyles}

  ${colorStyles}

  ${componentStyles};
`;
