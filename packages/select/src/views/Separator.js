/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { retrieveTheme } from '@zendesk/garden-react-theming';
import { Separator as MenuSeparator } from '@zendesk/garden-react-menus';

import { version } from '../../package.json';
const COMPONENT_ID = 'select.separator';

/**
 * Accepts all `<li>` props
 */
const Separator = MenuSeparator.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Separator;
