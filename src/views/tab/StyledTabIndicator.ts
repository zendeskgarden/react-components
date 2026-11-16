/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';

interface IStyledTabIndicatorProps {
  $isVertical?: boolean;
}

const colorStyles = ({ theme }: WithTheme) => {
  const backgroundColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 700 },
    dark: { shade: 400 }
  });

  return css`
    background-color: ${backgroundColor};

    @media (forced-colors: active) {
      background-color: CanvasText;
      forced-color-adjust: none;
    }
  `;
};

/*
 * The hook that moves the indicator sets the `transform` and the length
 * (`width` or `height`) of the element.
 */
const sizeStyles = ({ theme, $isVertical }: WithTheme<IStyledTabIndicatorProps>) => {
  const thickness = theme.shadowWidths.md;
  const radius = theme.borderRadii.xs;

  if ($isVertical) {
    return css`
      top: 0;
      inset-inline-start: 0;
      border-start-end-radius: ${radius};
      border-end-end-radius: ${radius};
      width: ${thickness};
    `;
  }

  return css`
    bottom: 0;
    left: 0;
    border-start-start-radius: ${radius};
    border-start-end-radius: ${radius};
    height: ${thickness};
  `;
};

export const StyledTabIndicator = styled.span<WithTheme<IStyledTabIndicatorProps>>`
  position: absolute;
  z-index: 1;
  pointer-events: none;

  ${sizeStyles};

  ${colorStyles};

  &[hidden] {
    display: none;
  }

  ${componentStyles};
`;
