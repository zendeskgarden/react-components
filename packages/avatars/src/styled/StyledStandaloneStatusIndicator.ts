/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { math } from 'polished';

import { IStatusIndicatorProps, STATUS } from '../types';
import { getStatusColor, statusIconStyles, TRANSITION_DURATION } from './utility';

const COMPONENT_ID = 'avatars.status-indicator.indicator';

const [available, away, transfers, offline] = STATUS;

const sizeStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  const borderWidth = props.theme.shadowWidths.sm;
  const marginRight = props.theme.space.base * 2;
  const marginVertical = props.theme.space.base / (props.isCompact ? 1 : 2);
  const size = math(
    `${props.theme.space.base * (props.isCompact ? 3 : 4)}px - (${borderWidth} * 2)`
  );

  return css`
    margin: ${marginVertical}px ${marginRight}px;
    margin-left: 0;
    border: ${borderWidth} ${props.theme.borderStyles.solid};
    border-radius: ${size};
    width: ${size};
    height: ${size};

    & > svg {
      ${statusIconStyles({ ...props, offset: borderWidth })}
    }
  `;
};

const colorStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  let backgroundColor = 'transparent';
  let borderColor = backgroundColor;

  switch (props.type) {
    case available:
    case away:
    case transfers:
      backgroundColor = getStatusColor(props.type, props.theme);
      borderColor = backgroundColor;
      break;
    case offline:
      borderColor = getStatusColor(props.type, props.theme);
      backgroundColor = props.theme.palette.white as string;
      break;
  }

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${props.theme.palette.white};
  `;
};

export const StyledStandaloneStatusIndicator = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStatusIndicatorProps & ThemeProps<DefaultTheme>>`
  position: relative;
  transition: all ${TRANSITION_DURATION}s ease-in-out;

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStandaloneStatusIndicator.defaultProps = {
  type: 'offline',
  isCompact: false,
  theme: DEFAULT_THEME
};
