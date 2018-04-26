import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import MenuStyles from '@zendesk/garden-css-menus';

import { version } from '../../../../package.json';
const COMPONENT_ID = 'menus.media_body';

/**
 * Accepts all `<div>` props
 */
const MediaBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: MenuStyles['c-menu__item--media__body']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default MediaBody;
