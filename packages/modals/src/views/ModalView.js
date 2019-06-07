/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

const COMPONENT_ID = 'modals.modal_view';

/**
 * Accepts all `<div>` props
 */
const ModalView = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ModalStyles['c-dialog'], {
    // Sizing
    [ModalStyles['c-dialog--large']]: props.large,

    // States
    [ModalStyles['is-open']]: props.animate,

    // RTL
    [ModalStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

ModalView.propTypes = {
  large: PropTypes.bool,
  animate: PropTypes.bool
};

/** @component */
export default ModalView;
