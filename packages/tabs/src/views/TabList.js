import styled from 'styled-components';
import TabStyles from '@zendesk/garden-css-tabs';
import { retrieveTheme } from '@zendesk/garden-react-theming';

/**
 * Accepts all `<div>` props
 */
const TabList = styled.div.attrs({
  className: TabStyles['c-tab__list']
})`
  :focus {
    outline: none;
  }

  ${props => retrieveTheme('tabs.tab_list', props)};
`;

/** @component */
export default TabList;
