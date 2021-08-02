/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cloneElement, Children } from 'react';
import styled from 'styled-components';
import { math } from 'polished';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'timeline.icon';

interface IStyledItemIcon {
  surfaceColor?: string;
}

/**
 * 1. Odd sizing allows the timeline line to center respective of the circle icon.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StyledItemIcon = styled(({ surfaceColor, children, ...props }) =>
  cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemIcon>`
  z-index: 1;
  box-sizing: content-box;
  background-color: ${props => props.surfaceColor || props.theme.colors.background};
  padding: ${props => props.theme.space.base}px 0;
  width: ${props => math(`${props.theme.iconSizes.sm} + 1`)}; /* [1] */
  height: ${props => math(`${props.theme.iconSizes.sm} + 1`)}; /* [1] */
  color: ${props => getColor('neutralHue', 600, props.theme)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledItemIcon.defaultProps = {
  theme: DEFAULT_THEME
};
