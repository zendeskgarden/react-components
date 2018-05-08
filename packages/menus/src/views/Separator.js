import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

import { version } from '../../package.json';
const COMPONENT_ID = 'menus.separator';

/**
 * Accepts all `<li>` props
 */
const Separator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  role: 'separator',
  className: MenuStyles['c-menu__separator']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Separator;
