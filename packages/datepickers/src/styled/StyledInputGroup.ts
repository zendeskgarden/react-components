/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

const COMPONENT_ID = 'datepickers.input_group';

export const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.space.base * 2}px;
`;
