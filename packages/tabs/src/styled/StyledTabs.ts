/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tabs';

interface IStyledTabsProps {
  $isVertical?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledTabs = styled.div.attrs<IStyledTabsProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTabsProps>`
  display: ${props => (props.$isVertical ? 'table' : 'block')};
  overflow: hidden;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTabs.defaultProps = {
  theme: DEFAULT_THEME
};
