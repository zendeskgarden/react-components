/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { HeaderItemIcon } from '../../elements/header/HeaderItemIcon';
import { StyledBaseHeaderItem, IStyledBaseHeaderItemProps } from './StyledBaseHeaderItem';
import { StyledHeaderItemText } from './StyledHeaderItemText';

const COMPONENT_ID = 'chrome.header_item';

/**
 * 1. Reset the stacking context for embedded menus.
 * 2. Button element reset.
 * 3. Anchor reset.
 */
export const StyledHeaderItem = styled(StyledBaseHeaderItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'button'
})<IStyledBaseHeaderItemProps>`
  &:hover,
  &:focus {
    text-decoration: none; /* [3] */
    color: inherit; /* [3] */
  }

  &:focus {
    outline: none; /* [3] */
  }

  &[data-garden-focus-visible] {
    box-shadow: ${props => props.theme.shadows.md(getColor('chromeHue', 400, props.theme, 0.35)!)};
  }

  &[data-garden-focus-visible]:active {
    box-shadow: none;
  }

  /* prettier-ignore */
  &:hover ${/* sc-selector */ HeaderItemIcon},
  &:hover ${/* sc-selector */ StyledHeaderItemText},
  &:active ${/* sc-selector */ HeaderItemIcon},
  &:active ${/* sc-selector */ StyledHeaderItemText} {
    color: ${props => getColor('chromeHue', 700, props.theme)};
  }

  ${props =>
    props.maxY &&
    `
      &[data-garden-focus-visible] {
        box-shadow: inset ${props.theme.shadows.lg(
          '3px',
          '0',
          getColor('chromeHue', 400, props.theme, 0.35)!
        )},
        3px 0 0 0 ${getColor('chromeHue', 400, props.theme, 0.35)},
        inset ${props.theme.shadows.lg(
          '-3px',
          '0',
          getColor('chromeHue', 400, props.theme, 0.35)!
        )},
        -3px 0 0 0 ${getColor('chromeHue', 400, props.theme, 0.35)};
      }
  `}

  img {
    margin: 0;
    border-radius: 3px;
    width: ${props => props.theme.fontSizes.xl};
    height: ${props => props.theme.fontSizes.xl};
  }

  ${props =>
    props.isRound &&
    `
    ${HeaderItemIcon} {
      border-radius: 100px;
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderItem.defaultProps = {
  theme: DEFAULT_THEME
};
