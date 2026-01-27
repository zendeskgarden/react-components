/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, StyledBaseIcon } from '@zendeskgarden/react-theming';
import styled, { DataAttributes } from 'styled-components';

const COMPONENT_ID = 'forms.input_message_icon';

export const StyledMessageIcon = styled(StyledBaseIcon).attrs<DataAttributes>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};

  ${componentStyles};
`;
