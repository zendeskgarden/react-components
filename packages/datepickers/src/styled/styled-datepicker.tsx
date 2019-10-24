/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import math from 'polished/lib/math/math';

const retrieveSpacing = ({ isSmall, theme }: { isSmall?: boolean } & ThemeProps<DefaultTheme>) => {
  if (isSmall) {
    return theme.space.lg;
  }

  return theme.space.xl;
};

export const StyledDatepicker = styled.div<{
  isSmall: boolean;
}>`
  /* stylelint-disable */
  padding: ${props => (props.isSmall ? math(`${props.theme.space.lg} / 2`) : props.theme.space.md)};
  color: ${props => getColor('foreground', 600, props.theme)};
  background-color: ${props => props.theme.colors.background};

  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => retrieveComponentStyles('datepickers.datepicker', props)};
`;

StyledDatepicker.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledHeader = styled.div<{ isSmall: boolean }>`
  width: ${props => math(`${retrieveSpacing(props)} * 7`)};
  display: flex;

  ${props => retrieveComponentStyles('datepickers.header', props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledHeaderPaddle = styled.div<{
  isSmall: boolean;
  isHidden?: boolean;
}>`
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => getColor('neutralHue', 600, props.theme)};
  cursor: pointer;
  border-radius: 50%;

  ${props => props.isHidden && `visibility: hidden;`};

  :hover {
    color: ${props => getColor('foreground', 800, props.theme)};
    background-color: ${props => getColor('primaryHue', 600, props.theme, 0.08)};
  }

  :active {
    background-color: ${props => getColor('primaryHue', 600, props.theme, 0.2)};
    color: ${props => getColor('foreground', 800, props.theme)};
  }

  transform: ${props => props.theme.rtl && 'rotate(180deg)'};

  * {
    width: ${props => math(`${props.theme.space.lg} / 2`)};
    height: ${props => math(`${props.theme.space.lg} / 2`)};
  }

  ${props => retrieveComponentStyles('datepickers.header_paddle', props)};
`;

StyledHeaderPaddle.defaultProps = {
  theme: DEFAULT_THEME
};

const boldedStyling = css<{ isSmall: boolean }>`
  font-size: ${props => (props.isSmall ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: ${props => props.theme.lineHeights.md};
`;

export const StyledHeaderLabel = styled.div<{ isSmall: boolean }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${boldedStyling};

  ${props => retrieveComponentStyles('datepickers.header_label', props)};
`;

StyledHeaderLabel.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledCalendar = styled.div<{ isSmall?: boolean }>`
  width: ${props => math(`${retrieveSpacing(props)} * 7`)};

  ${props => retrieveComponentStyles('datepickers.calendar', props)};
`;

StyledCalendar.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledRangeCalendar = styled.div`
  display: flex;
  overflow: auto;

  ${StyledDatepicker} {
    padding: 0;
  }

  ${StyledDatepicker}:${props => (props.theme.rtl ? 'last-of-type' : 'first-of-type')} {
    margin-right: ${props => props.theme.space.md};
  }
`;

StyledRangeCalendar.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledCalendarItem = styled.div<{ isSmall?: boolean }>`
  display: inline-block;
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};
  position: relative;
  vertical-align: top;

  ${props => retrieveComponentStyles('datepickers.calendar_item', props)};
`;

StyledCalendarItem.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledDayLabel = styled.div<{ isSmall: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${boldedStyling};

  ${props => retrieveComponentStyles('datepickers.day_label', props)};
`;

StyledDayLabel.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledDayProps extends ThemeProps<DefaultTheme> {
  isPreviousMonth?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  small: boolean;
}

const retrieveStyledDayColor = ({
  isDisabled,
  isSelected,
  isToday,
  isPreviousMonth,
  theme
}: IStyledDayProps) => {
  if (isDisabled) {
    return getColor('foreground', 400, theme);
  }

  if (isSelected && !isDisabled) {
    return getColor('background', 600, theme);
  }

  if (isToday) {
    return 'inherit';
  }

  if (isPreviousMonth) {
    return getColor('forground', 600, theme);
  }

  return getColor('primaryHue', 600, theme);
};

const retrieveBackgroundColor = ({ isSelected, isDisabled, theme }: IStyledDayProps) => {
  if (isSelected && !isDisabled) {
    return getColor('primaryHue', 600, theme);
  }

  return 'inherit';
};

export const StyledDay = styled.div<IStyledDayProps>`
  position: absolute;
  cursor: ${props => (props.isDisabled ? 'inherit' : 'pointer')};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: ${props => (props.small ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};
  font-weight: ${props =>
    props.isToday && !props.isDisabled ? props.theme.fontWeights.semibold : 'inherit'};
  line-height: ${props => props.theme.lineHeights.md};
  color: ${retrieveStyledDayColor};
  background-color: ${retrieveBackgroundColor};

  ${props =>
    !props.isSelected &&
    !props.isDisabled &&
    `
  :hover {
    background-color: ${getColor('primaryHue', 600, props.theme, 0.08)};
    color: ${getColor('primaryHue', 800, props.theme)};
  }

  :active {
    background-color: ${getColor('primaryHue', 600, props.theme, 0.2)};
    color: ${getColor('primaryHue', 800, props.theme)};
  }
  `}

  ${props => retrieveComponentStyles('datepickers.day', props)};
`;

StyledDay.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledHighlight = styled.div<{
  isHighlighted: boolean;
  isStart: boolean;
  isEnd: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${props =>
    props.isStart &&
    `
    border-radius: ${props.theme.rtl ? '0 50% 50% 0' : '50% 0 0 50%'};
  `}

  ${props =>
    props.isEnd &&
    `
    border-radius: ${props.theme.rtl ? '50% 0 0 50%' : '0 50% 50% 0'};
  `}

  ${props =>
    props.isHighlighted && `background-color: ${getColor('primaryHue', 600, props.theme, 0.08)};`}
`;

StyledHighlight.defaultProps = {
  theme: DEFAULT_THEME
};
