/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { MediaBody as MenuMediaBody } from '@zendeskgarden/react-menus';

const COMPONENT_ID = 'select.media_body';

/**
 * Accepts all `<div>` props
 */
const MediaBody = styled(MenuMediaBody).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default MediaBody;
