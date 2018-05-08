import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

import { version } from '../../package.json';
const COMPONENT_ID = 'modals.header';

/**
 * Accepts all `<div>` props
 */
const Header = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ModalStyles['c-dialog__header']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Header;
