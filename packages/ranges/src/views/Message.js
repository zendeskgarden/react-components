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

import { version } from '../../package.json';
const COMPONENT_ID = 'ranges.message';
const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Accepts all `<div>` props
 */
const Message = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(RangeStyles['c-range__message'], {
      [RangeStyles['c-range__message--success']]: props.validation === VALIDATION.SUCCESS,
      [RangeStyles['c-range__message--warning']]: props.validation === VALIDATION.WARNING,
      [RangeStyles['c-range__message--error']]: props.validation === VALIDATION.ERROR,

      // RTL
      [RangeStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Message.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

/** @component */
export default Message;
