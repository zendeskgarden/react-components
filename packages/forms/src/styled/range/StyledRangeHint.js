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

/**
 * Accepts all `<div>` props
 */
const StyledRangeHint = styled.div.attrs(props => ({
  className: classNames(RangeStyles['c-range__hint'], {
    [RangeStyles['c-range__hint--sm']]: props.small,

    // RTL
    [RangeStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme('forms.range_hint', props)};
`;

StyledRangeHint.propTypes = {
  small: PropTypes.bool
};

export default StyledRangeHint;
