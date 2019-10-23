/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';

import TextStyles from '@zendeskgarden/css-forms/dist/text.css';
import RangeStyles from '@zendeskgarden/css-forms/dist/range.css';

/**
 * Accepts all `<div>` props
 */
const StyledField = styled.div.attrs(props => ({
  className: classNames(TextStyles['c-txt'], RangeStyles['c-range'], {
    [TextStyles['c-txt--inline']]: props.inline,
    [RangeStyles['c-range--inline']]: props.inline,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props),
    [RangeStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveComponentStyles('forms.field', props)};
`;

StyledField.propTypes = {
  inline: PropTypes.bool
};

export default StyledField;
