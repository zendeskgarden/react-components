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
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

const COMPONENT_ID = 'toggles.label';

/**
 * Accepts all `<label>` props
 */
const Label = styled.label.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props =>
    classNames(CheckboxStyles['c-chk__label'], CheckboxStyles['c-chk__label--toggle'], {
      // Styles
      [CheckboxStyles['c-chk__label--regular']]: props.regular,

      // States
      [CheckboxStyles['is-hidden']]: props.hidden,
      [CheckboxStyles['is-checked']]: props.checked,
      [CheckboxStyles['is-indeterminate']]: props.indeterminate,
      [CheckboxStyles['is-hovered']]: props.hovered,
      [CheckboxStyles['is-focused']]: props.focused,
      [CheckboxStyles['is-disabled']]: props.disabled,

      // RTL
      [CheckboxStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Label.propTypes = {
  regular: PropTypes.bool,
  checked: PropTypes.bool,
  hidden: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool
};

/** @component */
export default Label;
