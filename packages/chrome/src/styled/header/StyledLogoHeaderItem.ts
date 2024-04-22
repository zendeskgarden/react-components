/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  retrieveComponentStyles,
  getColorV8,
  PALETTE,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';
import { Product } from '../../types';
import { StyledHeaderItemIcon } from './StyledHeaderItemIcon';
import { StyledBaseHeaderItem } from './StyledBaseHeaderItem';
import { StyledHeaderItemText, clippedStyling } from './StyledHeaderItemText';
import { getNavWidth } from '../nav/StyledNav';

const COMPONENT_ID = 'chrome.header_item';

export interface IStyledLogoHeaderItemProps {
  product?: Product;
}

const retrieveProductColor = (props: IStyledLogoHeaderItemProps) => {
  switch (props.product) {
    case 'chat':
      return PALETTE.product.chat;
    case 'explore':
      return PALETTE.product.explore;
    case 'guide':
      return PALETTE.product.guide;
    case 'support':
      return PALETTE.product.support;
    case 'talk':
      return PALETTE.product.talk;
    default:
      return 'inherit';
  }
};

/**
 * 1. Anchor reset
 */
export const StyledLogoHeaderItem = styled(StyledBaseHeaderItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'div'
})<IStyledLogoHeaderItemProps>`
  display: none;
  order: 0;
  margin-right: ${props => (props.theme.rtl ? `-${props.theme.space.base}px` : 'auto')};
  margin-left: ${props => (props.theme.rtl ? 'auto' : `-${props.theme.space.base}px`)};
  /* stylelint-disable-next-line property-no-unknown */
  border-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
    `${props.theme.borders.sm} ${getColorV8('neutralHue', 300, props.theme)}`};
  border-radius: 0;
  padding: 0;
  width: ${props => getNavWidth(props)};
  height: 100%;
  overflow: hidden;
  fill: ${props => getColorV8('chromeHue', 700, props.theme)};
  text-decoration: none; /* [1] */
  color: ${props => retrieveProductColor(props)}; /* [1] */

  ${StyledHeaderItemText} {
    ${clippedStyling}
  }

  ${StyledHeaderItemIcon} {
    margin: 0;
    width: ${props => props.theme.iconSizes.lg};
    height: ${props => props.theme.iconSizes.lg};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLogoHeaderItem.defaultProps = {
  theme: DEFAULT_THEME
};
