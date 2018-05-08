import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

import { version } from '../../package.json';
const COMPONENT_ID = 'modals.backdrop';

/**
 * Accepts all `<div>` props
 */
const Backdrop = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(ModalStyles['l-backdrop'], {
      [ModalStyles['l-backdrop--center']]: props.center,
      [ModalStyles['is-visible']]: props.animate,

      // RTL
      [ModalStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Backdrop.propTypes = {
  center: PropTypes.bool,
  animate: PropTypes.bool
};

/** @component */
export default Backdrop;
