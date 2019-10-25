/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

interface IStyledDayProps extends ThemeProps<DefaultTheme> {
  isPreviousMonth?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  isSmall: boolean;
}

const retrieveStyledDayColor = ({
  isDisabled,
  isSelected,
  isToday,
  isPreviousMonth,
  theme
}: IStyledDayProps) => {
  if (isDisabled) {
    return getColor('neutralHue', 400, theme);
  }

  if (isSelected && !isDisabled) {
    return theme.colors.background;
  }

  if (isToday) {
    return 'inherit';
  }

  if (isPreviousMonth) {
    return getColor('neutralHue', 600, theme);
  }

  return getColor('primaryHue', 600, theme);
};

const retrieveBackgroundColor = ({ isSelected, isDisabled, theme }: IStyledDayProps) => {
  if (isSelected && !isDisabled) {
    return getColor('primaryHue', 600, theme);
  }

  return 'inherit';
};

const COMPONENT_ID = 'datepickers.day';

const StyledDay = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<IStyledDayProps>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${retrieveBackgroundColor};
  cursor: ${props => (props.isDisabled ? 'inherit' : 'pointer')};
  width: 100%;
  height: 100%;
  line-height: ${props => props.theme.lineHeights.md};
  color: ${retrieveStyledDayColor};

  font-size: ${props => (props.isSmall ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};
  font-weight: ${props =>
    props.isToday && !props.isDisabled ? props.theme.fontWeights.semibold : 'inherit'};

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

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDay.defaultProps = {
  theme: DEFAULT_THEME
};

export default StyledDay;
