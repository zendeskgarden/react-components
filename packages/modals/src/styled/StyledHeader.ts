/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getLineHeight,
  getColorV8,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

import { BASE_MULTIPLIERS } from './StyledClose';

const COMPONENT_ID = 'modals.header';

export interface IStyledHeaderProps {
  isDanger?: boolean;
  isCloseButtonPresent?: boolean;
}

/**
 * 1. the padding added to the Header is based on the close button size and spacing,
 *    with additional padding (+ 2) between the Header content and Close button
 */
export const StyledHeader = styled.div.attrs<IStyledHeaderProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderProps>`
  display: block;
  position: ${props => props.isDanger && 'relative'};
  margin: 0;
  border-bottom: ${props => props.theme.borders.sm} ${getColorV8('neutralHue', 200)};
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`};
  ${props =>
    props.isCloseButtonPresent &&
    `padding-${props.theme.rtl ? 'left' : 'right'}: ${
      props.theme.space.base * (BASE_MULTIPLIERS.size + BASE_MULTIPLIERS.side + 2)
    }px;`} /* [1] */
  line-height: ${props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  color: ${props =>
    props.isDanger
      ? getColorV8('dangerHue', 600, props.theme)
      : getColorV8('foreground', 600 /* default shade */, props.theme)};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
