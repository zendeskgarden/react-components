/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import {
  defaultTheme,
  palette,
  isRtl,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import rgba from 'polished/lib/color/rgba';
import math from 'polished/lib/math/math';

const retrieveSpacing = ({ isSmall }: { isSmall?: boolean }) => {
  if (isSmall) {
    return defaultTheme.space.lg;
  }

  return defaultTheme.space.xl;
};

export const StyledDatepicker = styled.div<{
  isSmall: boolean;
}>`
  /* stylelint-disable */
  padding: ${props =>
    props.isSmall ? math(`${defaultTheme.space.md} / 2`) : defaultTheme.space.lg};
  color: ${palette.grey[800]};

  direction: ${props => isRtl(props) && 'rtl'};

  ${props => retrieveComponentStyles('datepickers.datepicker', props)};
`;

export const StyledHeader = styled.div`
  display: flex;

  ${props => retrieveComponentStyles('datepickers.header', props)};
`;

export const StyledHeaderPaddle = styled.div<{ isSmall: boolean }>`
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.grey[600]};
  cursor: pointer;
  border-radius: 50%;

  :hover {
    color: ${palette.grey[800]};
    background-color: ${rgba(palette.blue[600], 0.08)};
  }

  :active {
    background-color: ${rgba(palette.blue[600], 0.2)};
    color: ${palette.grey[800]};
  }

  transform: ${props => isRtl(props) && 'rotate(180deg)'};

  * {
    width: ${math(`${defaultTheme.space.md} / 2`)};
    height: ${math(`${defaultTheme.space.lg} / 2`)};
  }

  ${props => retrieveComponentStyles('datepickers.header_paddle', props)};
`;

const boldedStyling = css<{ isSmall: boolean }>`
  font-size: ${props => (props.isSmall ? defaultTheme.fontSizes.sm : defaultTheme.fontSizes.md)};
  font-weight: ${defaultTheme.fontWeights.semibold};
  line-height: ${defaultTheme.lineHeights.md};
`;

export const StyledHeaderLabel = styled.div<{ isSmall: boolean }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${boldedStyling};

  ${props => retrieveComponentStyles('datepickers.header_label', props)};
`;

export const StyledCalendar = styled.div<{ isSmall?: boolean }>`
  width: ${props => math(`${retrieveSpacing(props)} * 7`)};

  ${props => retrieveComponentStyles('datepickers.calendar', props)};
`;

export const StyledCalendarItem = styled.div<{ isSmall?: boolean }>`
  display: inline-block;
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};

  ${props => retrieveComponentStyles('datepickers.calendar_item', props)};
`;

export const StyledDayLabel = styled.div<{ isSmall: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${boldedStyling};

  ${props => retrieveComponentStyles('datepickers.day_label', props)};
`;

interface IStyledDayProps {
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
  isPreviousMonth
}: IStyledDayProps) => {
  if (isDisabled) {
    return palette.grey[400];
  }

  if (isSelected && !isDisabled) {
    return palette.white;
  }

  if (isToday) {
    return 'inherit';
  }

  if (isPreviousMonth) {
    return palette.grey[600];
  }

  return palette.blue[600];
};

const retrieveBackgroundColor = ({ isSelected, isDisabled }: IStyledDayProps) => {
  if (isSelected && !isDisabled) {
    return palette.blue[600];
  }

  return 'inherit';
};

export const StyledDay = styled.div<IStyledDayProps>`
  cursor: ${props => (props.isDisabled ? 'inherit' : 'pointer')};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: ${props => (props.small ? defaultTheme.fontSizes.sm : defaultTheme.fontSizes.md)};
  font-weight: ${props =>
    props.isToday && !props.isDisabled ? defaultTheme.fontWeights.bold : 'inherit'};
  line-height: ${defaultTheme.lineHeights.md};
  color: ${retrieveStyledDayColor};
  background-color: ${retrieveBackgroundColor};

  ${props =>
    !props.isSelected &&
    !props.isDisabled &&
    `
  :hover {
    background-color: ${rgba(palette.blue[600], 0.08)};
    color: ${palette.blue[800]};
  }

  :active {
    background-color: ${rgba(palette.blue[600], 0.2)};
    color: ${palette.blue[800]};
  }
  `}

  ${props => retrieveComponentStyles('datepickers.day', props)};
`;
