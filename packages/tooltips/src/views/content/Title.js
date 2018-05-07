import styled from 'styled-components';
import { zdFontWeightRegular } from '@zendesk/garden-css-variables';
import { retrieveTheme } from '@zendesk/garden-react-theming';

/**
 * Accepts all `<div>` props
 */
const Title = styled.div`
  font-weight: ${zdFontWeightRegular};
  margin-bottom: 12px;

  ${props => retrieveTheme('tooltip.title', props)};
`;

/** @component */
export default Title;
