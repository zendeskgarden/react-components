/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { Type } from '../../types';
import { validationTypes } from '../../utils/icons';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID = 'notifications.close';

interface IStyledCloseProps {
  $type?: Type;
}

/**
 * 1. IconButton reset
 */
const colorStyles = ({ theme, $type }: IStyledCloseProps & ThemeProps<DefaultTheme>) => {
  let variable;

  switch ($type) {
    case validationTypes.warning:
      variable = 'foreground.warning';
      break;
    case validationTypes.error:
      variable = 'foreground.danger';
      break;
    case validationTypes.success:
      variable = 'foreground.success';
      break;
    default:
      variable = 'foreground.subtle';
      break;
  }

  const color = getColor({ variable, theme });
  const hoverColor = getColor({ variable, light: { offset: 100 }, dark: { offset: -100 }, theme });
  const activeColor = getColor({ variable, light: { offset: 200 }, dark: { offset: -200 }, theme });

  return css`
    color: ${color};

    &:hover {
      background-color: transparent; /* [1] */
      color: ${hoverColor};
    }

    &:active {
      background-color: transparent; /* [1] */
      color: ${activeColor};
    }
  `;
};

/**
 * Used to close a Notification. Supports all `<button>` props
 *
 * 1. Reset for <button> element.
 * 2. Remove dotted outline from Firefox on focus.
 */
export const StyledClose = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCloseProps>`
  position: absolute;
  top: ${props => props.theme.space.base}px;
  right: ${p => !p.theme.rtl && `${p.theme.space.base}px`};
  left: ${p => p.theme.rtl && `${p.theme.space.base}px`};

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
