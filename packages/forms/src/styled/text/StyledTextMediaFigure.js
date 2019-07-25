/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

/**
 * Accepts all `<div>` props
 */
const StyledMediaFigure = styled.div.attrs({
  className: TextStyles['c-txt__input--media__figure']
})`
  ${props => retrieveComponentStyles('forms.media_figure', props)};
`;

export default StyledMediaFigure;
