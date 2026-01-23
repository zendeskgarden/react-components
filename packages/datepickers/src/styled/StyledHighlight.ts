/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, css, DefaultTheme } from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.highlight';

const sizeStyles = ({
  theme,
  $isEnd,
  $isStart
}: IStyledHighlightProps & ThemeProps<DefaultTheme>) => {
  let borderRadius;

  const startValue = '0 50% 50% 0;';
  const endValue = '50% 0 0 50%;';

  if (theme.rtl) {
    if ($isStart) {
      borderRadius = startValue;
    } else if ($isEnd) {
      borderRadius = endValue;
    }
  }

  if ($isStart) {
    borderRadius = endValue;
  } else if ($isEnd) {
    borderRadius = startValue;
  }

  return css`
    border-radius: ${borderRadius};
    width: 100%;
    height: 100%;
  `;
};

const colorStyles = ({
  $isHighlighted,
  theme
}: IStyledHighlightProps & ThemeProps<DefaultTheme>) => {
  return css`
    background-color: ${
      $isHighlighted &&
      getColor({
        variable: 'background.primaryEmphasis',
        transparency: theme.opacity[100],
        theme
      })
    };
  `;
};

interface IStyledHighlightProps {
  $isHighlighted: boolean;
  $isStart: boolean;
  $isEnd: boolean;
}

export const StyledHighlight = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHighlightProps>`
  position: absolute;
  top: 0;
  left: 0;

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
