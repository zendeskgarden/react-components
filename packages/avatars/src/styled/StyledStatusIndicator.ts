/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, keyframes, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { math } from 'polished';

import { IStatusIndicatorProps, SIZE } from '../types';
import { TRANSITION_DURATION } from './StyledAvatar';

const COMPONENT_ID = 'avatars.status-indicator';

const [xxs, xs, s, m, l] = SIZE;

const sizeStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  let borderWidth = props.theme.shadowWidths.sm;
  let padding = '0';
  let minWidth = '0';
  let height = '0';
  let fontSize = '0';
  let visible = true;

  switch (props.size) {
    case xxs:
      visible = false;
      height = `${props.theme.space.base + 1}px`;
      minWidth = height;
      borderWidth = math(`${borderWidth} - 1`);
      break;
    case xs:
      visible = false;
      height = `${props.theme.space.base * 2}px`;
      minWidth = height;
      break;
    case s:
      fontSize = props.theme.fontSizes.xs;
      height = `${props.theme.space.base * 4}px`;
      minWidth = fontSize;
      padding = `${props.theme.space.base - 1}px`;
      break;
    case m:
      fontSize = props.theme.fontSizes.xs;
      height = `${props.theme.space.base * 5}px`;
      minWidth = fontSize;
      padding = `${props.theme.space.base + 1}px`;
      break;
    case l:
      fontSize = props.theme.fontSizes.xs;
      height = `${props.theme.space.base * 5}px`;
      minWidth = fontSize;
      padding = `${props.theme.space.base + 1}px`;
      break;
  }

  return css`
    position: relative;
    border: ${borderWidth} ${props.theme.borderStyles.solid};
    border-radius: 100px;
    padding: 0 ${padding};
    min-width: ${minWidth};
    max-width: 2em;
    height: ${height};
    box-sizing: content-box;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    line-height: ${height};
    white-space: nowrap;
    font-size: ${fontSize};
    font-weight: ${props.theme.fontWeights.semibold};

    ${visible
      ? css`
          & > svg {
            position: absolute;
          }
        `
      : css`
          & > * {
            visibility: hidden;
          }
        `}
  `;
};

const colorStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  let backgroundColor = props.backgroundColor || 'transparent';
  let shadowColor = null;
  const foregroundColor = props.foregroundColor || props.theme.palette.white;
  const surfaceColor = props.status ? props.surfaceColor || props.theme.colors.background : 'white';

  switch (props.status) {
    case 'available':
      backgroundColor = getColor('mint', 400, props.theme)!;
      break;
    case 'active':
      backgroundColor = getColor('crimson', 400, props.theme)!;
      break;
    case 'away':
      backgroundColor = getColor('yellow', 400, props.theme)!;
      break;
    default:
      shadowColor = getColor('grey', 400, props.theme)!;
      break;
  }

  const innerRing =
    shadowColor &&
    css`
      &::before {
        box-shadow: ${props.theme.shadows.sm(shadowColor)};
      }
    `;

  return css`
    border-color: ${surfaceColor};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    ${innerRing}
  `;
};

const animation = keyframes`
  0% {
    transform: scale(.1);
  }
`;

export const StyledStatusIndicator = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStatusIndicatorProps>`
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  transition: all ${TRANSITION_DURATION}s ease-in-out, color 0s;
  animation: ${animation} ${TRANSITION_DURATION * 1.5}s ease-in-out;

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStatusIndicator.defaultProps = {
  size: 'medium',
  theme: DEFAULT_THEME
};
