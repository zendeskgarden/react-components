/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import StyledCheckLabel from '../checkboxes/StyledCheckLabel';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

/**
 * Accepts all `<label>` props
 */
const StyledRadioLabel = styled(StyledCheckLabel).attrs(props => ({
  className: classNames(props.className, CheckboxStyles['c-chk__label--radio'])
}))`
  ${props => retrieveComponentStyles('forms.radio_label', props)};
`;

StyledRadioLabel.propTypes = {
  regular: PropTypes.bool,
  checked: PropTypes.bool,
  hidden: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool
};

export default StyledRadioLabel;
