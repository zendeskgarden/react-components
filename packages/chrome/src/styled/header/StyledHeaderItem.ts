/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  getColor,
  focusStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';
import { StyledHeaderItemIcon } from './StyledHeaderItemIcon';
import {
  StyledBaseHeaderItem,
  IStyledBaseHeaderItemProps,
  getHeaderItemSize
} from './StyledBaseHeaderItem';
import { StyledHeaderItemText } from './StyledHeaderItemText';

const COMPONENT_ID = 'chrome.header_item';

const imgStyles = (props: ThemeProps<DefaultTheme>) => {
  const size = math(`${getHeaderItemSize(props)} - ${props.theme.space.base * 2}`);

  return css`
    img {
      margin: 0;
      border-radius: ${math(`${props.theme.borderRadii.md} - 1`)};
      width: ${size};
      height: ${size};
    }
  `;
};

/**
 * 1. Anchor reset.
 */
export const StyledHeaderItem = styled(StyledBaseHeaderItem as 'button').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBaseHeaderItemProps>`
  &:hover,
  &:focus {
    text-decoration: none; /* [1] */
    color: inherit; /* [1] */
  }

  ${props =>
    focusStyles({
      theme: props.theme,
      inset: props.maxY
    })}

  &:focus-visible:active,
  &[data-garden-focus-visible]:active {
    box-shadow: none;
  }

  /* prettier-ignore */
  &:hover ${/* sc-selector */ StyledHeaderItemIcon},
  &:hover ${/* sc-selector */ StyledHeaderItemText},
  &:active ${/* sc-selector */ StyledHeaderItemIcon},
  &:active ${/* sc-selector */ StyledHeaderItemText} {
    color: ${props => getColor('chromeHue', 700, props.theme)};
  }

  ${imgStyles}

  ${props =>
    props.isRound &&
    `
    ${StyledHeaderItemIcon} {
      border-radius: 100px;
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderItem.defaultProps = {
  theme: DEFAULT_THEME
};
