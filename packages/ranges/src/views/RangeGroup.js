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

const COMPONENT_ID = 'ranges.range_group';

/**
 * Accepts all `<div>` props
 */
const RangeGroup = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(RangeStyles['c-range'], {
    [RangeStyles['c-range--inline']]: props.inline,

    // RTL
    [RangeStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

RangeGroup.propTypes = {
  inline: PropTypes.bool
};

/** @component */
export default RangeGroup;
