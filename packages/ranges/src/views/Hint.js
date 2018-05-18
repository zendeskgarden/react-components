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

const COMPONENT_ID = 'ranges.hint';

/**
 * Accepts all `<div>` props
 */
const Hint = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props =>
    classNames(RangeStyles['c-range__hint'], {
      [RangeStyles['c-range__hint--sm']]: props.small,

      // RTL
      [RangeStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Hint.propTypes = {
  small: PropTypes.bool
};

/** @component */
export default Hint;
