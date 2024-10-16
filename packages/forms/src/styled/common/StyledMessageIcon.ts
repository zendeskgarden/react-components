/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, StyledBaseIcon } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.input_message_icon';

export const StyledMessageIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
