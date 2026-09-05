/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles, focusStyles, getColor } from '@zendeskgarden/react-theming';

interface IStyledDayProps extends ThemeProps<DefaultTheme> {
  $isPreviousMonth?: boolean;
  $isToday?: boolean;
  $isCompact: boolean;
  'aria-selected'?: boolean;
  disabled?: boolean;
}

const sizeStyles = () => {
  return css`
    border-radius: 50%;
    width: 100%;
    height: 100%;
  `;
};

const colorStyles = ({ $isToday, $isPreviousMonth, theme, ...props }: IStyledDayProps) => {
  const isSelected = props['aria-selected'];
  const isDisabled = props.disabled;

  let backgroundColor = 'inherit';
  let foreground;
  const backgroundHover = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[100]
  });
  const foregroundHover =
    !$isToday &&
    getColor({
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
  const foregroundActive =
    !$isToday &&
    getColor({
      variable: 'foreground.primary',
      light: { offset: 200 },
      dark: { offset: -200 },
      theme
    });

  if (isSelected && !isDisabled) {
    backgroundColor = getColor({ variable: 'background.primaryEmphasis', theme });
    foreground = getColor({ variable: 'foreground.onEmphasis', theme });
  } else if (isDisabled) {
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

    &:not(:disabled):not([aria-selected]):hover {
      background-color: ${backgroundHover};
      color: ${foregroundHover};
    }

    &:not(:disabled):not([aria-selected]):active {
      background-color: ${backgroundActive};
      color: ${foregroundActive};
    }
  `;
};

const COMPONENT_ID = 'datepickers.day';

export const StyledDay = styled.button.attrs<IStyledDayProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button'
})<IStyledDayProps>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  margin: 0;
  border: none;
  background: transparent;
  cursor: ${props => (props.disabled ? 'inherit' : 'pointer')};
  padding: 0;
  font-family: inherit;
  font-size: ${props => (props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};
  font-weight: ${props =>
    props.$isToday && !props.disabled ? props.theme.fontWeights.semibold : 'inherit'};

  ${sizeStyles}
  ${colorStyles}
  ${props => focusStyles({ theme: props.theme })}

  ${componentStyles};
`;
