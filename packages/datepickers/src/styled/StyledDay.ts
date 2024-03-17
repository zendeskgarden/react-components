/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';

interface IStyledDayProps extends ThemeProps<DefaultTheme> {
  isPreviousMonth?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  isCompact: boolean;
}

const retrieveStyledDayColors = ({
  isSelected,
  isDisabled,
  isToday,
  isPreviousMonth,
  theme
}: IStyledDayProps) => {
  let backgroundColor = 'inherit';
  let color = getColorV8('primaryHue', 600, theme);

  if (isSelected && !isDisabled) {
    backgroundColor = getColorV8('primaryHue', 600, theme)!;
    color = theme.colors.background;
  } else if (isDisabled) {
    color = getColorV8('neutralHue', 400, theme);
  } else if (isToday) {
    color = 'inherit';
  } else if (isPreviousMonth) {
    color = getColorV8('neutralHue', 600, theme);
  }

  return css`
    background-color: ${backgroundColor};
    color: ${color};

    ${!isSelected &&
    !isDisabled &&
    `
      :hover {
        background-color: ${getColorV8('primaryHue', 600, theme, 0.08)};
        color: ${getColorV8('primaryHue', 800, theme)};
      }

      :active {
        background-color: ${getColorV8('primaryHue', 600, theme, 0.2)};
        color: ${getColorV8('primaryHue', 800, theme)};
      }
  `}
  `;
};

const COMPONENT_ID = 'datepickers.day';

export const StyledDay = styled.div.attrs<IStyledDayProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'aria-disabled': props.isDisabled ? 'true' : 'false'
}))<IStyledDayProps>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: ${props => (props.isDisabled ? 'inherit' : 'pointer')};
  width: 100%;
  height: 100%;
  font-size: ${props => (props.isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};
  font-weight: ${props =>
    props.isToday && !props.isDisabled ? props.theme.fontWeights.semibold : 'inherit'};

  ${retrieveStyledDayColors}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDay.defaultProps = {
  theme: DEFAULT_THEME
};
