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
import RangeStyles from '@zendeskgarden/css-forms/dist/range.css';
import VALIDATION from '../../utils/validation';

/**
 * Accepts all `<div>` props
 */
const StyledRangeMessage = styled.div.attrs(props => ({
  className: classNames(RangeStyles['c-range__message'], {
    [RangeStyles['c-range__message--success']]: props.validation === VALIDATION.SUCCESS,
    [RangeStyles['c-range__message--warning']]: props.validation === VALIDATION.WARNING,
    [RangeStyles['c-range__message--error']]: props.validation === VALIDATION.ERROR,

    // RTL
    [RangeStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme('forms.range_message', props)};
`;

StyledRangeMessage.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default StyledRangeMessage;
