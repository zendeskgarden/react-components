import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_description';

export const StyledSheetDescription = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`

`;

StyledSheetDescription.defaultProps = {
  theme: DEFAULT_THEME
};