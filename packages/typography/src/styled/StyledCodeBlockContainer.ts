/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.codeblock_container';

export const StyledCodeBlockContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  overflow: auto;

  &:focus {
    outline: none;
  }

  &[data-garden-focus-visible] {
    box-shadow: ${props => props.theme.shadows.md(getColor('primaryHue', 600, props.theme, 0.35)!)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlockContainer.defaultProps = {
  theme: DEFAULT_THEME
};
