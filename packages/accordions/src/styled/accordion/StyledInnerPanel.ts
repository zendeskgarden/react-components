/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledPanel } from './StyledPanel';

const COMPONENT_ID = 'accordions.step_inner_panel';

interface IStyledInnerPanel {
  $isAnimated?: boolean;
}

export const StyledInnerPanel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInnerPanel>`
  overflow: hidden;
  line-height: inherit;
  font-size: inherit;

  ${StyledPanel}[aria-hidden='true'] > & {
    transition: ${props => props.$isAnimated && 'visibility 0s 0.25s'};
    visibility: hidden;
  }

  ${StyledPanel}[aria-hidden='false'] > & {
    visibility: visible;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInnerPanel.defaultProps = {
  theme: DEFAULT_THEME
};
