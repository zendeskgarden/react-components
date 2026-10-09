/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, focusStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

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

  ${componentStyles};
`;
