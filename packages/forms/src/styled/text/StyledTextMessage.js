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
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Accepts all `<div>` props
 */
const StyledTextMessage = styled.div.attrs({
  role: 'alert',
  className: props =>
    classNames(TextStyles['c-txt__message'], {
      [TextStyles['c-txt__message--success']]: props.validation === VALIDATION.SUCCESS,
      [TextStyles['c-txt__message--warning']]: props.validation === VALIDATION.WARNING,
      [TextStyles['c-txt__message--error']]: props.validation === VALIDATION.ERROR,

      // RTL
      [TextStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme('forms.text_message', props)};
`;

StyledTextMessage.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default StyledTextMessage;
