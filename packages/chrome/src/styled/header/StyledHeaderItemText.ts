/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { hideVisually } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.header_item_text';

export interface IStyledHeaderItemTextProps {
  isClipped?: boolean;
}

export const StyledHeaderItemText = styled.span.attrs<IStyledHeaderItemTextProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderItemTextProps>`
  margin: ${props => `0 ${props.theme.space.base * 0.75}px`};

  ${props => props.isClipped && hideVisually()}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderItemText.defaultProps = {
  theme: DEFAULT_THEME
};
