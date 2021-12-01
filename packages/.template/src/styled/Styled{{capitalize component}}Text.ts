/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

const COMPONENT_ID = '{{pluralize (lowercase component)}}.{{lowercase component}}.text';

export const Styled{{capitalize component}}Text = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
