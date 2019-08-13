/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import {
  DEFAULT_THEME,
  PALETTE,
  isRtl,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import rgba from 'polished/lib/color/rgba';
import math from 'polished/lib/math/math';

const retrieveSpacing = ({ isSmall }: { isSmall?: boolean }) => {
  if (isSmall) {
    return DEFAULT_THEME.space.lg;
  }

  return DEFAULT_THEME.space.xl;
};

export const StyledDatepicker = styled.div<{
  isSmall: boolean;
}>`
  /* stylelint-disable */
  padding: ${props =>
    props.isSmall ? math(`${DEFAULT_THEME.space.lg} / 2`) : DEFAULT_THEME.space.md};
  color: ${PALETTE.grey[800]};

  direction: ${props => isRtl(props) && 'rtl'};

  ${props => retrieveComponentStyles('datepickers.datepicker', props)};
`;

export const StyledHeader = styled.div<{ isSmall: boolean }>`
  width: ${props => math(`${retrieveSpacing(props)} * 7`)};
  display: flex;

  ${props => retrieveComponentStyles('datepickers.header', props)};
`;

export const StyledHeaderPaddle = styled.div<{ isSmall: boolean; isHidden?: boolean }>`
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${PALETTE.grey[600]};
  cursor: pointer;
  border-radius: 50%;

  ${props => props.isHidden && `visibility: hidden;`};

  :hover {
    color: ${PALETTE.grey[800]};
    background-color: ${rgba(PALETTE.blue[600], 0.08)};
  }

  :active {
    background-color: ${rgba(PALETTE.blue[600], 0.2)};
    color: ${PALETTE.grey[800]};
  }

  transform: ${props => isRtl(props) && 'rotate(180deg)'};

  * {
    width: ${math(`${DEFAULT_THEME.space.lg} / 2`)};
    height: ${math(`${DEFAULT_THEME.space.lg} / 2`)};
  }

  ${props => retrieveComponentStyles('datepickers.header_paddle', props)};
`;

const boldedStyling = css<{ isSmall: boolean }>`
  font-size: ${props => (props.isSmall ? DEFAULT_THEME.fontSizes.sm : DEFAULT_THEME.fontSizes.md)};
  font-weight: ${DEFAULT_THEME.fontWeights.semibold};
  line-height: ${DEFAULT_THEME.lineHeights.md};
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

export const StyledRangeCalendar = styled.div`
  display: flex;
  overflow: auto;

  ${StyledDatepicker} {
    padding: 0;
  }

  ${StyledDatepicker}:${props => (isRtl(props) ? 'last-of-type' : 'first-of-type')} {
    margin-right: ${DEFAULT_THEME.space.md};
  }
`;

export const StyledCalendarItem = styled.div<{ isSmall?: boolean }>`
  display: inline-block;
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};
  position: relative;
  vertical-align: top;

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
    return PALETTE.grey[400];
  }

  if (isSelected && !isDisabled) {
    return PALETTE.white;
  }

  if (isToday) {
    return 'inherit';
  }

  if (isPreviousMonth) {
    return PALETTE.grey[600];
  }

  return PALETTE.blue[600];
};

const retrieveBackgroundColor = ({ isSelected, isDisabled }: IStyledDayProps) => {
  if (isSelected && !isDisabled) {
    return PALETTE.blue[600];
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
  font-size: ${props => (props.small ? DEFAULT_THEME.fontSizes.sm : DEFAULT_THEME.fontSizes.md)};
  font-weight: ${props =>
    props.isToday && !props.isDisabled ? DEFAULT_THEME.fontWeights.bold : 'inherit'};
  line-height: ${DEFAULT_THEME.lineHeights.md};
  color: ${retrieveStyledDayColor};
  background-color: ${retrieveBackgroundColor};

  ${props =>
    !props.isSelected &&
    !props.isDisabled &&
    `
  :hover {
    background-color: ${rgba(PALETTE.blue[600], 0.08)};
    color: ${PALETTE.blue[800]};
  }

  :active {
    background-color: ${rgba(PALETTE.blue[600], 0.2)};
    color: ${PALETTE.blue[800]};
  }
  `}

  ${props => retrieveComponentStyles('datepickers.day', props)};
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

  ${props => props.isHighlighted && `background-color: ${rgba(PALETTE.blue[600], 0.08)};`}
`;
