/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, css, DefaultTheme } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.highlight';

const retrieveBorderRadius = ({
  theme,
  isEnd,
  isStart
}: IStyledHighlightProps & ThemeProps<DefaultTheme>) => {
  const startValue = 'border-radius: 0 50% 50% 0;';
  const endValue = 'border-radius: 50% 0 0 50%;';

  if (theme.rtl) {
    if (isStart) {
      return startValue;
    } else if (isEnd) {
      return endValue;
    }
  }

  if (isStart) {
    return endValue;
  } else if (isEnd) {
    return startValue;
  }

  return '';
};

const retrieveColor = ({
  isHighlighted,
  theme
}: IStyledHighlightProps & ThemeProps<DefaultTheme>) => {
  if (isHighlighted) {
    return css`
      background-color: ${getColor('primaryHue', 600, theme, 0.08)};
    `;
  }

  return css``;
};

interface IStyledHighlightProps {
  isHighlighted: boolean;
  isStart: boolean;
  isEnd: boolean;
}

export const StyledHighlight = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<IStyledHighlightProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${retrieveBorderRadius}

  ${retrieveColor}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHighlight.defaultProps = {
  theme: DEFAULT_THEME
};
