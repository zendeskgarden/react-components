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
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

import Input from './Input';

const COMPONENT_ID = 'textfields.media_input';
const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  NONE: 'none'
};

/**
 * Accepts all `<input>` props
 */
const MediaInput = styled(Input).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(props.className, TextStyles['c-txt__input--media__body'])
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

MediaInput.propTypes = {
  small: PropTypes.bool,
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  validation: PropTypes.oneOf([
    VALIDATION.SUCCESS,
    VALIDATION.WARNING,
    VALIDATION.ERROR,
    VALIDATION.NONE
  ])
};

MediaInput.defaultProps = {
  bare: true
};

/** @component */
export default MediaInput;
