/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  StyledBaseIcon,
  getColor
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'timeline.icon';

interface IStyledItemIcon {
  $surfaceColor?: string;
}

/**
 * 1. Odd sizing allows the timeline line to center respective of the circle icon.
 */
export const StyledItemIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemIcon>`
  z-index: 1;
  box-sizing: content-box;
  background-color: ${({ $surfaceColor, theme }) =>
    $surfaceColor || getColor({ theme, variable: 'background.default' })};
  padding: ${props => props.theme.space.base}px 0;
  width: ${props => math(`${props.theme.iconSizes.sm} + 1`)}; /* [1] */
  height: ${props => math(`${props.theme.iconSizes.sm} + 1`)}; /* [1] */
  color: ${({ theme }) => `${getColor({ theme, variable: 'border.emphasis' })}`};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledItemIcon.defaultProps = {
  theme: DEFAULT_THEME
};
