/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { FauxInput } from '@zendeskgarden/react-forms';

const COMPONENT_ID = 'dropdowns.faux_input';

export const StyledFauxInput = styled(FauxInput).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  mediaLayout: true,
  theme: props.theme
}))`
  cursor: ${props => !props.disabled && 'pointer'};
  min-width: ${props => props.theme.space.base * (props.isCompact ? 25 : 36)}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
