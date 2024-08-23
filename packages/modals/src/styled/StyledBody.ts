/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getLineHeight,
  retrieveComponentStyles,
  getColor
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.body';

export const StyledBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: block;
  margin: 0;
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`};
  height: 100%;
  overflow: auto;
  line-height: ${props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  color-scheme: only ${p => p.theme.colors.base};
  color: ${({ theme }) => getColor({ theme, variable: 'foreground.default' })};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
