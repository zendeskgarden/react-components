import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import { MediaItem as MenuMediaItem } from '@zendesk/garden-react-menus';

import { version } from '../../../../package.json';
const COMPONENT_ID = 'select.media_item';

/**
 * Accepts all `<li>` props
 */
const MediaItem = MenuMediaItem.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

MediaItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};

/** @component */
export default MediaItem;
