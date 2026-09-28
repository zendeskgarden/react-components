/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles, focusStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledDayCell } from './StyledDayCell';
import { StyledCalendarTable } from './StyledCalendarTable';

interface IStyledDayNumberProps {
  $isPreviousMonth?: boolean;
  $isCompact: boolean;
  /** Within a `DatePickerRange`'s highlighted range, where it keeps the primary foreground even while disabled. */
  $isInRange?: boolean;
}

const sizeStyles = ({ $isCompact, theme }: IStyledDayNumberProps & ThemeProps<DefaultTheme>) => {
  const size = theme.space.base * ($isCompact ? 8 : 10);

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    border-radius: 50%;
    padding: 0;
    width: ${size}px;
    height: ${size}px;
  `;
};

const colorStyles = ({
  $isPreviousMonth,
  theme
}: IStyledDayNumberProps & ThemeProps<DefaultTheme>) => {
  if ($isPreviousMonth) {
    const foreground = getColor({ variable: 'foreground.subtle', theme });

    return css`
      && {
        color: ${foreground};
      }
    `;
  }

  const foreground = getColor({ variable: 'foreground.primary', theme });

  return css`
    ${StyledDayCell}:not([aria-current='date']) & {
      color: ${foreground};
    }
  `;
};

const hoverStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const emphasis = getColor({ variable: 'background.primaryEmphasis', theme });
  const background = getColor({ variable: 'background.default', theme });

  /* A read-only grid can't be selected from, so hovering its days doesn't suggest otherwise - keyboard focus still shows where you are. */
  return css`
    ${StyledCalendarTable}:not([aria-readonly='true'])
      ${StyledDayCell}[aria-selected='false']:not([aria-disabled='true']):hover
      &,
    ${StyledDayCell}[aria-selected='false']:not([aria-disabled='true']):focus-visible & {
      background-color: color-mix(in srgb, ${emphasis} 16%, ${background});
    }
  `;
};

const selectedStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const background = getColor({ variable: 'background.primaryEmphasis', theme });
  const foreground = getColor({ variable: 'foreground.onEmphasis', theme });

  return css`
    ${StyledDayCell}[aria-selected='true'] & {
      background-color: ${background};
      color: ${foreground};
    }
  `;
};

const disabledStyles = ({
  $isInRange,
  theme
}: IStyledDayNumberProps & ThemeProps<DefaultTheme>) => {
  const foreground = getColor({ variable: 'foreground.disabled', theme });

  /* A selected or in-range day keeps its colors, so a disabled or read-only range still shows its value. `hoverStyles` already skips disabled days. */
  return css`
    ${StyledDayCell}[aria-disabled='true'] &,
    ${StyledCalendarTable}[aria-readonly='true'] & {
      cursor: default;
    }

    ${!$isInRange &&
    css`
      ${StyledDayCell}[aria-disabled='true']:not([aria-selected='true']) & {
        color: ${foreground};
      }
    `}
  `;
};

const focusRingStyles = ({ theme }: ThemeProps<DefaultTheme>) =>
  focusStyles({
    theme,
    selector: `${StyledDayCell}:focus-visible &`
  });

export const StyledDayNumber = styled.div<IStyledDayNumberProps>`
  transition: none;
  cursor: pointer;
  font-size: ${props => (props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};

  ${StyledDayCell}[aria-current='date'] & {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  ${sizeStyles}
  ${colorStyles}
  ${hoverStyles}
  ${selectedStyles}
  ${disabledStyles}
  ${focusRingStyles}

  ${componentStyles};
`;
