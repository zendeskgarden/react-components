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
  PALETTE,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';
import { PRODUCT } from '../../utils/types';
import { StyledHeaderItemIcon } from './StyledHeaderItemIcon';
import { StyledBaseHeaderItem } from './StyledBaseHeaderItem';
import { StyledHeaderItemText } from './StyledHeaderItemText';

const COMPONENT_ID = 'chrome.header_item';

export interface IStyledLogoHeaderItemProps {
  /**
   * Applies product-specific color palette
   **/
  product?: PRODUCT;
}

const retrieveProductColor = (props: IStyledLogoHeaderItemProps) => {
  switch (props.product) {
    case 'chat':
      return PALETTE.product.chat;
    case 'connect':
      return PALETTE.product.connect;
    case 'explore':
      return PALETTE.product.explore;
    case 'guide':
      return PALETTE.product.guide;
    case 'message':
      return PALETTE.product.message;
    case 'support':
      return PALETTE.product.support;
    case 'talk':
      return PALETTE.product.talk;
    default:
      return 'inherit';
  }
};

export const StyledLogoHeaderItem = styled(StyledBaseHeaderItem)<IStyledLogoHeaderItemProps>`
  display: ${props => (props.theme.rtl ? 'inline-flex' : 'none')};
  order: 0;
  margin-right: auto;
  margin-left: ${props => `-${props.theme.space.base}px`};
  /* stylelint-disable-next-line property-no-unknown */
  border-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
  `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  border-radius: 0;
  padding: 0;
  width: ${props => props.theme.space.base * 15}px;
  height: 100%;
  overflow: hidden;
  fill: ${props => getColor('chromeHue', 700, props.theme)};

  ${StyledHeaderItemText} {
    position: absolute;
    margin: 0;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
  }

  &,
  &:hover,
  &:focus {
    text-decoration: none; /* [3] */
    color: ${props => retrieveProductColor(props)}; /* [3] */
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
