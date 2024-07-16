/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

interface IStyledDayProps extends ThemeProps<DefaultTheme> {
  $isPreviousMonth?: boolean;
  $isToday?: boolean;
  $isDisabled?: boolean;
  $isSelected?: boolean;
  $isCompact: boolean;
}

const sizeStyles = () => {
  return css`
    border-radius: 50%;
    width: 100%;
    height: 100%;
  `;
};

const colorStyles = ({
  $isSelected,
  $isDisabled,
  $isToday,
  $isPreviousMonth,
  theme
}: IStyledDayProps) => {
  let backgroundColor = 'inherit';
  let foreground;
  const backgroundHover = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[100]
  });
  const foregroundHover = getColor({
    variable: 'foreground.primary',
    light: { offset: 100 },
    dark: { offset: -100 },
    theme
  });
  const backgroundActive = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[200]
  });
  const foregroundActive = getColor({
    variable: 'foreground.primary',
    light: { offset: 200 },
    dark: { offset: -200 },
    theme
  });

  if ($isSelected && !$isDisabled) {
    backgroundColor = getColor({ variable: 'background.primaryEmphasis', theme });
    foreground = getColor({ variable: 'foreground.onEmphasis', theme });
  } else if ($isDisabled) {
    foreground = getColor({ variable: 'foreground.disabled', theme });
  } else if ($isToday) {
    foreground = 'inherit';
  } else if ($isPreviousMonth) {
    foreground = getColor({ variable: 'foreground.subtle', theme });
  } else {
    foreground = getColor({ variable: 'foreground.primary', theme });
  }

  return css`
    background-color: ${backgroundColor};
    color: ${foreground};

    ${!$isSelected &&
    !$isDisabled &&
    css`
      :hover {
        background-color: ${backgroundHover};
        color: ${foregroundHover};
      }

      :active {
        background-color: ${backgroundActive};
        color: ${foregroundActive};
      }
    `}
  `;
};

const COMPONENT_ID = 'datepickers.day';

export const StyledDay = styled.div.attrs<IStyledDayProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'aria-disabled': props.$isDisabled ? 'true' : 'false'
}))<IStyledDayProps>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  cursor: ${props => (props.$isDisabled ? 'inherit' : 'pointer')};
  font-size: ${props => (props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};
  font-weight: ${props =>
    props.$isToday && !props.$isDisabled ? props.theme.fontWeights.semibold : 'inherit'};

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDay.defaultProps = {
  theme: DEFAULT_THEME
};
