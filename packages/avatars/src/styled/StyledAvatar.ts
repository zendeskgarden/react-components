/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, keyframes, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { math } from 'polished';

import { IAvatarProps, SIZE } from '../types';
import { StyledText } from './StyledText';
import { StyledStatusIndicator } from './StyledStatusIndicator';
import { getStatusColor, TRANSITION_DURATION } from './utility';

const COMPONENT_ID = 'avatars.avatar';

const badgeStyles = (props: IStyledAvatarProps & ThemeProps<DefaultTheme>) => {
  const [xxs, xs, s, m, l] = SIZE;

  let position = `${props.theme.space.base * -1}px`;

  switch (props.size) {
    case s:
    case m:
      position = math(`${position}  + 2`);
      break;
    case xxs:
    case xs:
    case l:
      position = math(`${position}  + 3`);
      break;
  }

  const animation = keyframes`
      0% {
        transform: scale(.1);
      }
    `;

  return css`
    position: absolute;
    ${props.theme.rtl ? 'left' : 'right'}: ${position};
    bottom: ${position};
    transition: all ${TRANSITION_DURATION}s ease-in-out;

    ${props.status === 'active' &&
    css`
      animation: ${animation} ${TRANSITION_DURATION * 1.5}s ease-in-out;
    `}
  `;
};

const colorStyles = (props: IStyledAvatarProps & ThemeProps<DefaultTheme>) => {
  const statusColor = getStatusColor(props.status, props.theme);
  const backgroundColor = props.backgroundColor || 'transparent';
  const foregroundColor = props.foregroundColor || props.theme.palette.white;
  const surfaceColor = props.status
    ? props.surfaceColor || props.theme.colors.background
    : 'transparent';

  return css`
    box-shadow: ${props.theme.shadows.sm(statusColor)};
    background-color: ${backgroundColor};
    color: ${surfaceColor};

    & > svg,
    & ${StyledText} {
      color: ${foregroundColor};
    }
  `;
};

const sizeStyles = (props: IStyledAvatarProps & ThemeProps<DefaultTheme>) => {
  let boxShadow;
  let borderRadius;
  let size;
  let fontSize;
  let svgSize;

  if (props.size === 'extraextrasmall') {
    boxShadow = `0 0 0 ${math(`${props.theme.shadowWidths.sm} - 1`)}`;
    borderRadius = props.isSystem ? math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = `${props.theme.space.base * 4}px`;
    fontSize = 0;
    svgSize = `${props.theme.space.base * 3}px`;
  } else if (props.size === 'extrasmall') {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.isSystem ? math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = `${props.theme.space.base * 6}px`;
    fontSize = props.theme.fontSizes.sm;
    svgSize = `${props.theme.space.base * 3}px`;
  } else if (props.size === 'small') {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.isSystem ? math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = `${props.theme.space.base * 8}px`;
    fontSize = props.theme.fontSizes.md;
    svgSize = `${props.theme.space.base * 3}px`;
  } else if (props.size === 'large') {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.isSystem ? math(`${props.theme.borderRadii.md} + 1`) : '50%';
    size = `${props.theme.space.base * 12}px`;
    fontSize = props.theme.fontSizes.xl;
    svgSize = `${props.theme.space.base * 6}px`;
  } else {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.isSystem ? props.theme.borderRadii.md : '50%';
    size = `${props.theme.space.base * 10}px`;
    fontSize = props.theme.fontSizes.lg;
    svgSize = `${props.theme.space.base * 4}px`;
  }

  /**
   * 1. Ensure width and height are applied when used in combination with
   *    Dropdown MediaFigure styling
   */
  return css`
    border-radius: ${borderRadius};
    /* stylelint-disable declaration-no-important */
    width: ${size} !important; /* [1] */
    height: ${size} !important; /* [1] */
    /* stylelint-enable declaration-no-important */

    ::before {
      box-shadow: ${boxShadow};
    }

    & > svg {
      font-size: ${svgSize};
    }

    & ${StyledText} {
      line-height: ${size};
      font-size: ${fontSize};
    }
  `;
};

export interface IStyledAvatarProps
  extends Pick<
    IAvatarProps,
    'backgroundColor' | 'foregroundColor' | 'surfaceColor' | 'isSystem' | 'size'
  > {
  status?: IAvatarProps['status'] | 'active';
}

/**
 * Accepts all `<figure>` props
 */
export const StyledAvatar = styled.figure.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledAvatarProps>`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: box-shadow ${TRANSITION_DURATION}s ease-in-out, color 0.1s ease-in-out;
  margin: 0; /* <figure> reset */
  vertical-align: middle;
  box-sizing: border-box;

  ${props => sizeStyles(props)};
  ${props => colorStyles(props)};

  /* inner ring */
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    transition: box-shadow ${TRANSITION_DURATION}s ease-in-out;
    content: '';
  }

  &::before,
  && > img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }

  && > img {
    box-sizing: inherit;
    vertical-align: bottom;
    object-fit: cover;
  }

  && > svg {
    width: 1em;
    height: 1em;
  }

  & > ${StyledStatusIndicator} {
    ${badgeStyles};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAvatar.defaultProps = {
  size: 'medium',
  theme: DEFAULT_THEME
};
