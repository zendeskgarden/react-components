import styled from 'styled-components';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import ModalStyles from '@zendesk/garden-css-modals';

import { version } from '../../package.json';
const COMPONENT_ID = 'modals.footer';

/**
 * Accepts all `<div>` props
 */
const Footer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ModalStyles['c-dialog__footer']
})`
  && > * {
    ${props => (isRtl(props) ? 'margin-right: 8px' : 'margin-left: 8px')};
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Footer;
