/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { getItemPaddingHorizontal } from '../StyledItem';

const COMPONENT_ID = 'dropdowns.header_icon';

interface IStyledHeaderIcon {
  isCompact?: boolean;
}

const getIconSize = (props: IStyledHeaderIcon & ThemeProps<DefaultTheme>) => {
  if (props.isCompact) {
    return props.theme.iconSizes.sm;
  }

  return props.theme.iconSizes.md;
};

export const StyledHeaderIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderIcon>`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
    `calc(${math(`${getItemPaddingHorizontal(props)} - ${getIconSize(props)}`)} / 2)`};
  color: ${props => getColor('neutralHue', 600, props.theme)};

  & > * {
    width: ${props => getIconSize(props)};
    height: ${props => getIconSize(props)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderIcon.defaultProps = {
  theme: DEFAULT_THEME
};
