/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { getHeaderItemSize } from '../utils';

const COMPONENT_ID = 'chrome.base_header_item';

export interface IStyledBaseHeaderItemProps {
  $maxX?: boolean;
  $maxY?: boolean;
  $isRound?: boolean;
}

/*
 * 1. Button element reset
 */
const sizeStyles = ({
  theme,
  $maxY,
  $isRound
}: IStyledBaseHeaderItemProps & ThemeProps<DefaultTheme>) => {
  const margin = `0 ${theme.space.base * 3}px`;
  const size = getHeaderItemSize(theme);
  const height = $maxY ? '100%' : size;
  const lineHeight = getLineHeight(size, theme.fontSizes.md);
  const padding = `0 ${theme.space.base * 0.75}px`;
  let borderRadius;

  if ($isRound) {
    borderRadius = '100%';
  } else if ($maxY) {
    borderRadius = '0';
  } else {
    borderRadius = theme.borderRadii.md;
  }

  return css`
    margin: ${margin};
    border-radius: ${borderRadius};
    padding: ${padding};
    min-width: ${size};
    height: ${height};
    line-height: ${lineHeight};
    font-size: inherit; /* [1] */
  `;
};

/*
 * 1. Reset the stacking context for embedded menus
 * 2. Button element reset
 */
export const StyledBaseHeaderItem = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBaseHeaderItemProps>`
  display: inline-flex;
  position: relative;
  flex: ${props => props.$maxX && '1'};
  align-items: center;
  justify-content: ${props => (props.$maxX ? 'start' : 'center')};
  order: 1;
  transition:
    box-shadow 0.1s ease-in-out,
    color 0.1s ease-in-out;
  z-index: 0; /* [1] */
  border: none; /* [2] */
  background: transparent; /* [2] */
  text-decoration: none;
  white-space: nowrap;
  color: inherit;

  ${sizeStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
