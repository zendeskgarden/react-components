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

/**
 * Accepts all `<div>` props
 */
const StyledTextHint = styled.div.attrs(props => ({
  className: classNames(TextStyles['c-txt__hint'], {
    [TextStyles['c-txt__hint--sm']]: props.small,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme('forms.text_hint', props)};
`;

StyledTextHint.propTypes = {
  small: PropTypes.bool
};

export default StyledTextHint;
