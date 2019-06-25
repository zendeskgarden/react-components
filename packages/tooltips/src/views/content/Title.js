/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import TooltipStyles from '@zendeskgarden/css-tooltips';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tooltip.title';

/**
 * Accepts all `<div>` props
 */
const Title = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: TooltipStyles['c-tooltip__title']
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

/** @component */
export default Title;
