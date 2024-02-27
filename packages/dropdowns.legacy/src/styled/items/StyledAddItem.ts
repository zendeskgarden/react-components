/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledItem } from './StyledItem';

const COMPONENT_ID = 'dropdowns.add_item';

/**
 * Accepts all `<li>` props
 */
export const StyledAddItem = styled(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  color: ${props => !props.disabled && getColor('primaryHue', 600, props.theme)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAddItem.defaultProps = {
  theme: DEFAULT_THEME
};
