import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.body';

/**
 * Accepts all `<div>` props
 */
const Body = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ChromeStyles['c-chrome__body']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Body;
