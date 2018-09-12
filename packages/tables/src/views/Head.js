/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.head';

/**
 * Accepts all `<div>` props
 */
const Head = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: block;

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Head;
