import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ModalStyles from '@zendesk/garden-css-modals';

import { version } from '../../package.json';
const COMPONENT_ID = 'modals.body';

/**
 * Accepts all `<div>` props
 */
const Body = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ModalStyles['c-dialog__body']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Body;
