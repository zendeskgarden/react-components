/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles, focusStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.codeblock_container';

export const StyledCodeBlockContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transition: box-shadow 0.1s ease-in-out;
  overflow: auto;

  ${props =>
    focusStyles({
      theme: props.theme
    })}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlockContainer.defaultProps = {
  theme: DEFAULT_THEME
};
