/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  retrieveComponentStyles,
  getColor,
  DEFAULT_THEME,
  focusStyles
} from '@zendeskgarden/react-theming';
import { Hue } from '../../utils/useNotificationsContext';

const COMPONENT_ID = 'notifications.close';

interface IStyledCloseProps {
  hue?: Hue;
}

/**
 * Used to close a Notification. Supports all `<button>` props
 *
 * 1. Reset for <button> element.
 * 2. Remove dotted outline from Firefox on focus.
 */
export const StyledClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCloseProps>`
  display: block;
  position: absolute;
  top: ${props => props.theme.space.base}px;
  ${props => (props.theme.rtl ? 'left' : 'right')}: ${props => `${props.theme.space.base}px`};
  /* prettier-ignore */
  transition:
    background-color 0.1s ease-in-out,
    color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out;
  border: none; /* [1] */
  border-radius: 50%;
  background-color: transparent; /* [1] */
  cursor: pointer;
  padding: 0;
  width: ${props => props.theme.space.base * 7}px;
  height: ${props => props.theme.space.base * 7}px;
  overflow: hidden;
  color: ${props =>
    props.hue
      ? getColor(props.hue, props.hue === 'warningHue' ? 700 : 600, props.theme)
      : getColor('neutralHue', 600, props.theme)};
  font-size: 0; /* [1] */
  user-select: none;

  &::-moz-focus-inner {
    border: 0; /* [2] */
  }

  &:hover {
    color: ${props =>
      props.hue ? getColor(props.hue, 800, props.theme) : getColor('neutralHue', 800, props.theme)};
  }

  ${props =>
    focusStyles({
      theme: props.theme,
      inset: true
    })}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledClose.defaultProps = {
  theme: DEFAULT_THEME
};
