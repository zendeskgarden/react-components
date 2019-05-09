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
 * Accepts all `<label>` props
 */
const StyledTextLabel = styled.label.attrs(props => ({
  className: classNames(TextStyles['c-txt__label'], {
    [TextStyles['c-txt__label--regular']]: props.regular,
    [TextStyles['c-txt__label--sm']]: props.small,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))`
  display: block;

  ${props => retrieveTheme('forms.text_label', props)};
`;

StyledTextLabel.propTypes = {
  regular: PropTypes.bool,
  small: PropTypes.bool
};

export default StyledTextLabel;
