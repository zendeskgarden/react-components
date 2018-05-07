import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.subnav';

/**
 * Accepts all `<div>` props
 */
const SubNav = styled.nav.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ChromeStyles['c-chrome__subnav']
})`
  ${props => retrieveTheme('chrome.subnav', props)};
`;

/** @component */
export default SubNav;
