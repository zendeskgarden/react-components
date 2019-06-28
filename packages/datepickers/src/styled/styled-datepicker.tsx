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
  zdFontWeightBold,
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

export const StyledDatepicker = styled.div<{
  isSmall: boolean;
}>`
  /* stylelint-disable */
  padding: ${props => (props.isSmall ? `calc(${zdSpacingLg} / 2)` : zdSpacing)};
  color: ${zdColorGrey800};

  ${props =>
    isRtl(props) &&
    `
    direction: rtl;
  `}

  ${props => retrieveTheme('datepickers.datepicker', props)};
`;

export const StyledHeader = styled.div`
  display: flex;

  ${props => retrieveTheme('datepickers.header', props)};
`;

export const StyledHeaderPaddle = styled.div<{ isSmall: boolean }>`
  width: ${props => (props.isSmall ? zdSpacingLg : zdSpacingXl)};
  height: ${props => (props.isSmall ? zdSpacingLg : zdSpacingXl)};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${zdColorGrey600};
  cursor: pointer;
  border-radius: 50%;

  :hover {
    color: ${zdColorGrey800};
    background-color: ${rgba(zdColorBlue600, 0.08)};
  }

  :active {
    background-color: ${rgba(zdColorBlue600, 0.2)};
    color: ${zdColorGrey800};
  }

  ${props =>
    isRtl(props) &&
    `
    transform: rotate(180deg);
  `}

  * {
    width: calc(${zdSpacingLg} / 2);
    height: calc(${zdSpacingLg} / 2);
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
  width: calc(${props => (props.isSmall ? zdSpacingLg : zdSpacingXl)} * 7);

  ${props => retrieveTheme('datepickers.calendar', props)};
`;

export const StyledCalendarItem = styled.div<{ isSmall?: boolean }>`
  display: inline-block;
  width: ${props => (props.isSmall ? zdSpacingLg : zdSpacingXl)};
  height: ${props => (props.isSmall ? zdSpacingLg : zdSpacingXl)};

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

export const StyledDay = styled.div<{
  isPreviousMonth?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  small: boolean;
}>`
  cursor: ${props => (props.isDisabled ? 'inherit' : 'pointer')};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: ${props => (props.small ? zdFontSizeSm : zdFontSizeMd)};
  font-weight: ${props => (props.isToday && !props.isDisabled ? zdFontWeightBold : 'inherit')};
  line-height: ${zdLineHeightMd};
  color: ${props => {
    if (props.isDisabled) {
      return zdColorGrey400;
    }

    if (props.isToday) {
      return 'inherit';
    }

    if (props.isPreviousMonth) {
      return zdColorGrey600;
    }

    return zdColorBlue600;
  }};

  ${props =>
    props.isSelected &&
    !props.isDisabled &&
    `
    background-color: ${zdColorBlue600};
    color: ${zdColorWhite};
  `}

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
