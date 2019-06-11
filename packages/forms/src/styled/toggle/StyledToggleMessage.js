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
import StyledCheckMessage from '../checkboxes/StyledCheckMessage';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';
import VALIDATION from '../../utils/validation';

/**
 * Accepts all `<div>` props
 */
const StyledToggleMessage = styled(StyledCheckMessage).attrs(props => ({
  className: classNames(props.className, CheckboxStyles['c-chk__message--toggle'])
}))`
  ${props => retrieveTheme('forms.toggle_message', props)};
`;

StyledToggleMessage.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default StyledToggleMessage;
