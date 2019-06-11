/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import VALIDATION from '../../utils/validation';
import StyledCheckMessage from '../checkboxes/StyledCheckMessage';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

/**
 * Accepts all `<div>` props
 */
const StyledRadioMessage = styled(StyledCheckMessage).attrs(props => ({
  className: classNames(props.className, CheckboxStyles['c-chk__message--radio'])
}))`
  ${props => retrieveTheme('forms.radio_message', props)};
`;

StyledRadioMessage.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default StyledRadioMessage;
