import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.sidebar';

/**
 * Accepts all `<aside>` props
 */
const Sidebar = styled.aside.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ChromeStyles['c-chrome__body__content__sidebar']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Sidebar;
