/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import TooltipStyles from '@zendeskgarden/css-tooltips';
import { retrieveTheme } from '@zendeskgarden/react-theming';

import { version } from '../../../package.json';
const COMPONENT_ID = 'tooltip.paragraph';

/**
 * Accepts all `<div>` props
 */
const Paragraph = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: TooltipStyles['c-tooltip__paragraph']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Paragraph;
