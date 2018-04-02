import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.content';

/**
 * Accepts all `<div>` props
 */
const Content = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ChromeStyles['c-chrome__body__content']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Content;
