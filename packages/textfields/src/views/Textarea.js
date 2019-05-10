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

import Input from './Input';

const COMPONENT_ID = 'textfields.textarea';
const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  NONE: 'none'
};

/**
 * Accepts all `<textarea>` props
 */
const Textarea = styled(Input.withComponent('textarea')).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(props.className, TextStyles['c-txt__input--area'], {
    [TextStyles['is-resizable']]: props.resizable,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Textarea.propTypes = {
  small: PropTypes.bool,
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  resizable: PropTypes.bool,
  validation: PropTypes.oneOf([
    VALIDATION.SUCCESS,
    VALIDATION.WARNING,
    VALIDATION.ERROR,
    VALIDATION.NONE
  ])
};

Textarea.hasType = () => Textarea;

/** @component */
export default Textarea;
