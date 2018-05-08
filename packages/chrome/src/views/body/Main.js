import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.main';

/**
 * Accepts all `<main>` props
 */
const Main = styled.main.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ChromeStyles['c-chrome__body__content__main']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Main;
