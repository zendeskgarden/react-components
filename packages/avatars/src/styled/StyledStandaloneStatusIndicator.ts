/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme, keyframes } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { math } from 'polished';

import { IStatusIndicatorProps, STATUS } from '../types';
import { getStatusColor, TRANSITION_DURATION } from './utility';

const COMPONENT_ID = 'avatars.status-indicator.indicator';

const [available, away, transfers, offline] = STATUS;

const iconFadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const sizeStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  const borderWidth = props.theme.shadowWidths.sm;

  let height = '0';

  if (props.isCompact) {
    height = math(`${props.theme.space.base * 3}px - (${borderWidth} * 2)`);
  } else {
    height = math(`${props.theme.space.base * 4}px - (${borderWidth} * 2)`);
  }

  /**
   * 1. because we are using the stroke icon instead of fill due to artifacts in visual appearance,
   *    we need to remove the circle
   * 2. when @zendeskgarden/css-bedrock is present, max-height needs to be unset due to icon being
   *    resized incorrectly
   */
  return css`
    margin: 0 ${props.theme.space.base}px;
    border: ${borderWidth} ${props.theme.borderStyles.solid};
    border-radius: ${height};
    width: ${height};
    min-width: ${height};
    max-width: calc(2em + (${borderWidth} * 3));
    height: ${height};
    min-height: ${height};
    box-sizing: inherit;
    overflow: hidden;

    & > svg {
      position: absolute;
      top: -${borderWidth};
      left: -${borderWidth};
      transform-origin: 50% 50%;
      max-height: unset; /* [2] */

      /* stylelint-disable-next-line selector-no-qualifying-type */
      &[data-icon-status='transfers'] {
        transform: scale(${props.theme.rtl ? -1 : 1}, 1);
      }

      /* stylelint-disable-next-line selector-no-qualifying-type */
      &[data-icon-status='away'] circle {
        display: none; /* [1] */
      }
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

export const StyledStandaloneStatusIndicator = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStatusIndicatorProps & ThemeProps<DefaultTheme>>`
  display: inline-block;
  position: relative;
  transition: all ${TRANSITION_DURATION}s ease-in-out;

  ${sizeStyles}
  ${colorStyles}

  & > svg {
    animation: ${iconFadeIn} ${TRANSITION_DURATION};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStandaloneStatusIndicator.defaultProps = {
  type: 'available',
  isCompact: false,
  theme: DEFAULT_THEME
};
