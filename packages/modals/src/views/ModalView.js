import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import ModalStyles from '@zendesk/garden-css-modals';

import { version } from '../../package.json';
const COMPONENT_ID = 'modals.modal_view';

/**
 * Accepts all `<div>` props
 */
const ModalView = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(ModalStyles['c-dialog'], {
      // Sizing
      [ModalStyles['c-dialog--large']]: props.large,

      // States
      [ModalStyles['is-open']]: props.animate,

      // RTL
      [ModalStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

ModalView.propTypes = {
  large: PropTypes.bool,
  animate: PropTypes.bool
};

/** @component */
export default ModalView;
