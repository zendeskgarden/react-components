/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { hideVisually } from 'polished';
import {
  retrieveComponentStyles,
  PALETTE,
  DEFAULT_THEME,
  getColor
} from '@zendeskgarden/react-theming';
import { Product } from '../../types';
import { StyledHeaderItemIcon } from './StyledHeaderItemIcon';
import { StyledBaseHeaderItem } from './StyledBaseHeaderItem';
import { StyledHeaderItemText } from './StyledHeaderItemText';
import { getNavWidth, getProductColor } from '../utils';

const COMPONENT_ID = 'chrome.header_item';

export interface IStyledLogoHeaderItemProps {
  product?: Product;
}

const colorStyles = ({ theme, product }: IStyledLogoHeaderItemProps & ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ theme, variable: 'border.default' });
  const color = getProductColor(product);
  const fill = getColor({ theme, hue: 'chromeHue', shade: 900 });

  return css`
    border-${theme.rtl ? 'left' : 'right'}-color: ${borderColor};
    color: ${color};
    fill: ${fill};
  `;
};

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const border = theme.borders.sm;
  const iconSize = theme.iconSizes.lg;
  const marginRight = theme.rtl ? `-${theme.space.base}px` : 'auto';
  const marginLeft = theme.rtl ? 'auto' : `-${theme.space.base}px`;
  const width = getNavWidth(theme);

  return css`
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
    border-${theme.rtl ? 'left' : 'right'}: ${border};
    width: ${width};
    height: 100%;

    ${StyledHeaderItemIcon} {
      margin: 0;
      width: ${iconSize};
      height: ${iconSize};
    }
  `;
};

/*
 * 1. Anchor reset
 */
export const StyledLogoHeaderItem = styled(StyledBaseHeaderItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'div'
})<IStyledLogoHeaderItemProps>`
  display: none;
  order: 0;
  border-radius: 0;
  padding: 0;
  overflow: hidden;
  text-decoration: none; /* [1] */

  ${sizeStyles};

  ${colorStyles};

  ${StyledHeaderItemText} {
    ${hideVisually()}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLogoHeaderItem.defaultProps = {
  theme: DEFAULT_THEME
};
