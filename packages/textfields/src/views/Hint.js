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

import { version } from '../../package.json';
const COMPONENT_ID = 'textfields.hint';

/**
 * Accepts all `<div>` props
 */
const Hint = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(TextStyles['c-txt__hint'], {
      [TextStyles['c-txt__hint--sm']]: props.small,

      // RTL
      [TextStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Hint.propTypes = {
  small: PropTypes.bool
};

/** @component */
export default Hint;
