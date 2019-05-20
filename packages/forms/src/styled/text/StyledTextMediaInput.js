/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

import StyledTextInput from './StyledTextInput';

/**
 * Accepts all `<input>` props
 */
const StyledTextMediaInput = styled(StyledTextInput).attrs(props => ({
  bare: true,
  className: classNames(props.className, TextStyles['c-txt__input--media__body'])
}))`
  ${props => retrieveTheme('forms.text_media_input', props)};
`;

export default StyledTextMediaInput;
