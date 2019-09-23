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
 * Accepts all `<label>` props
 */
const StyledRangeLabel = styled.label.attrs(props => ({
  className: classNames(RangeStyles['c-range__label'], {
    [RangeStyles['c-range__label--regular']]: props.regular,
    [RangeStyles['c-range__label--sm']]: props.small,

    // RTL
    [RangeStyles['is-rtl']]: isRtl(props)
  })
}))`
  display: block;

  ${props => retrieveTheme('forms.range_label', props)};
`;

StyledRangeLabel.propTypes = {
  regular: PropTypes.bool,
  small: PropTypes.bool
};

export default StyledRangeLabel;
