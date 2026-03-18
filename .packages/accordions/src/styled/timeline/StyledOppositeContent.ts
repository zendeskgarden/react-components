/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'timeline.opposite.content';

export const StyledOppositeContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex: 1;
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 4}px`};
  text-align: ${props => (props.theme.rtl ? 'left' : 'right')};
  ${componentStyles};
`;
