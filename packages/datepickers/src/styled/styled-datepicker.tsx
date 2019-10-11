/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import {
  zdSpacing,
  zdSpacingLg,
  zdSpacingXl,
  zdFontSizeSm,
  zdFontSizeMd,
  zdFontWeightSemibold,
  zdLineHeightMd,
  zdColorWhite,
  zdColorBlue600,
  zdColorBlue800,
  zdColorGrey400,
  zdColorGrey600,
  zdColorGrey800
} from '@zendeskgarden/css-variables';
import { isRtl, retrieveTheme } from '@zendeskgarden/react-theming';
import rgba from 'polished/lib/color/rgba';
import math from 'polished/lib/math/math';

const retrieveSpacing = ({ isSmall }: { isSmall?: boolean }) => {
  if (isSmall) {
    return zdSpacingLg;
  }

  return zdSpacingXl;
};

export const StyledDatepicker = styled.div<{
  isSmall: boolean;
}>`
  /* stylelint-disable */
  padding: ${props => (props.isSmall ? math(`${zdSpacingLg} / 2`) : zdSpacing)};
  color: ${zdColorGrey800};

  direction: ${props => isRtl(props) && 'rtl'};

  ${props => retrieveTheme('datepickers.datepicker', props)};
`;

export const StyledHeader = styled.div<{ isSmall: boolean }>`
  width: ${props => math(`${retrieveSpacing(props)} * 7`)};
  display: flex;

  ${props => retrieveTheme('datepickers.header', props)};
`;

export const StyledHeaderPaddle = styled.div<{ isSmall: boolean; isHidden?: boolean }>`
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${zdColorGrey600};
  cursor: pointer;
  border-radius: 50%;

  ${props => props.isHidden && `visibility: hidden;`};

  :hover {
    color: ${zdColorGrey800};
    background-color: ${rgba(zdColorBlue600, 0.08)};
  }

  :active {
    background-color: ${rgba(zdColorBlue600, 0.2)};
    color: ${zdColorGrey800};
  }

  transform: ${props => isRtl(props) && 'rotate(180deg)'};

  * {
    width: ${math(`${zdSpacingLg} / 2`)};
    height: ${math(`${zdSpacingLg} / 2`)};
  }

  ${props => retrieveTheme('datepickers.header_paddle', props)};
`;

const boldedStyling = css<{ isSmall: boolean }>`
  font-size: ${props => (props.isSmall ? zdFontSizeSm : zdFontSizeMd)};
  font-weight: ${zdFontWeightSemibold};
  line-height: ${zdLineHeightMd};
`;

export const StyledHeaderLabel = styled.div<{ isSmall: boolean }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${boldedStyling};

  ${props => retrieveTheme('datepickers.header_label', props)};
`;

export const StyledCalendar = styled.div<{ isSmall?: boolean }>`
  width: ${props => math(`${retrieveSpacing(props)} * 7`)};

  ${props => retrieveTheme('datepickers.calendar', props)};
`;

export const StyledRangeCalendar = styled.div`
  display: flex;
  overflow: auto;

  ${StyledDatepicker} {
    padding: 0;
  }

  ${StyledDatepicker}:${props => (isRtl(props) ? 'last-of-type' : 'first-of-type')} {
    margin-right: ${zdSpacing};
  }
`;

export const StyledCalendarItem = styled.div<{ isSmall?: boolean }>`
  display: inline-block;
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};
  position: relative;
  vertical-align: top;

  ${props => retrieveTheme('datepickers.calendar_item', props)};
`;

export const StyledDayLabel = styled.div<{ isSmall: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${boldedStyling};

  ${props => retrieveTheme('datepickers.day_label', props)};
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
    return zdColorGrey400;
  }

  if (isSelected && !isDisabled) {
    return zdColorWhite;
  }

  if (isToday) {
    return 'inherit';
  }

  if (isPreviousMonth) {
    return zdColorGrey600;
  }

  return zdColorBlue600;
};

const retrieveBackgroundColor = ({ isSelected, isDisabled }: IStyledDayProps) => {
  if (isSelected && !isDisabled) {
    return zdColorBlue600;
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
  font-size: ${props => (props.small ? zdFontSizeSm : zdFontSizeMd)};
  font-weight: ${props => (props.isToday && !props.isDisabled ? zdFontWeightSemibold : 'inherit')};
  line-height: ${zdLineHeightMd};
  color: ${retrieveStyledDayColor};
  background-color: ${retrieveBackgroundColor};

  ${props =>
    !props.isSelected &&
    !props.isDisabled &&
    `
  :hover {
    background-color: ${rgba(zdColorBlue600, 0.08)};
    color: ${zdColorBlue800};
  }

  :active {
    background-color: ${rgba(zdColorBlue600, 0.2)};
    color: ${zdColorBlue800};
  }
  `}

  ${props => retrieveTheme('datepickers.day', props)};
`;

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
    border-radius: ${isRtl(props) ? '0 50% 50% 0' : '50% 0 0 50%'};
  `}

  ${props =>
    props.isEnd &&
    `
    border-radius: ${isRtl(props) ? '50% 0 0 50%' : '0 50% 50% 0'};
  `}

  ${props => props.isHighlighted && `background-color: ${rgba(zdColorBlue600, 0.08)};`}
`;
