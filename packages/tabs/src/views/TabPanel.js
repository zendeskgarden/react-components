import styled from 'styled-components';
import TabStyles from '@zendesk/garden-css-tabs';
import { retrieveTheme } from '@zendesk/garden-react-theming';

/**
 * Accepts all `<div>` props
 */
const TabPanel = styled.div.attrs({
  className: TabStyles['c-tab__panel']
})`
  ${props => retrieveTheme('tabs.tab_panel', props)};
`;

/** @component */
export default TabPanel;
