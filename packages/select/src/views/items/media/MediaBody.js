import { retrieveTheme } from '@zendesk/garden-react-theming';
import { MediaBody as MenuMediaBody } from '@zendesk/garden-react-menus';

import { version } from '../../../../package.json';
const COMPONENT_ID = 'select.media_body';

/**
 * Accepts all `<div>` props
 */
const MediaBody = MenuMediaBody.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default MediaBody;
