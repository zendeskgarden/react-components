/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

const COMPONENT_ID = 'textfields.media_figure';

/**
 * Accepts all `<div>` props
 */
const MediaFigure = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: TextStyles['c-txt__input--media__figure']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default MediaFigure;
