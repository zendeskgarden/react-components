/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getLineHeight,
  getColor,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.header';

export interface IStyledHeaderProps {
  /**
   * Applies danger styling
   */
  isDanger?: boolean;
}

export const StyledHeader = styled.div.attrs<IStyledHeaderProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderProps>`
  display: block;
  position: ${props => props.isDanger && 'relative'};
  margin: 0;
  border-bottom: ${props => props.theme.borders.sm} ${getColor('neutralHue', 200)};
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`};
  line-height: ${props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  color: ${props =>
    props.isDanger ? getColor('dangerHue', 600, props.theme) : props.theme.colors.foreground};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
