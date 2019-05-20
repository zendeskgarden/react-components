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
import VALIDATION from '../../utils/validation';

/**
 * Accepts all `<div>` props
 */
const StyledCheckMessage = styled.div.attrs(props => ({
  className: classNames(CheckboxStyles['c-chk__message'], {
    [CheckboxStyles['c-chk__message--success']]: props.validation === VALIDATION.SUCCESS,
    [CheckboxStyles['c-chk__message--warning']]: props.validation === VALIDATION.WARNING,
    [CheckboxStyles['c-chk__message--error']]: props.validation === VALIDATION.ERROR,

    // RTL
    [CheckboxStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme('forms.check_message', props)};
`;

StyledCheckMessage.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default StyledCheckMessage;
