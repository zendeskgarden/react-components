/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, keyframes, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { math } from 'polished';

import { IBadgeProps, SIZE } from '../types';
import { TRANSITION_DURATION } from './StyledAvatar';

const [xxs, xs, s, m, l] = SIZE;

const COMPONENT_ID = 'avatars.badge';

const sizeStyles = (props: IBadgeProps & ThemeProps<DefaultTheme>) => {
  let position = `${props.theme.space.base * -1}px`;

  switch (props.size) {
    case xxs:
    case xs:
      position = math(`${position} + 1`);
      break;
    case s:
      position = math(`${position} - 2`);
      break;
    case m:
      position = math(`${position} - 3`);
      break;
    case l:
      position = math(`${position} - 2`);
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
    transition: all ${TRANSITION_DURATION}s ease-in-out, color 0s;

    ${props.status === 'active' &&
    css`
      animation: ${animation} ${TRANSITION_DURATION * 1.5}s ease-in-out;
    `}
  `;
};

export const StyledBadge = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IBadgeProps>`
  display: inline-flex;

  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledBadge.defaultProps = {
  size: 'medium',
  theme: DEFAULT_THEME
};
