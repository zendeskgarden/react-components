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
import VALIDATION from '../../utils/validation';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

import StyledTextInput from './StyledTextInput';

/**
 * Accepts all `<textarea>` props
 */
const StyledTextarea = styled(StyledTextInput.withComponent('textarea')).attrs(props => ({
  className: classNames(props.className, TextStyles['c-txt__input--area'], {
    [TextStyles['is-resizable']]: props.resizable,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme('forms.text_area', props)};
`;

StyledTextarea.propTypes = {
  small: PropTypes.bool,
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  resizable: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default StyledTextarea;
