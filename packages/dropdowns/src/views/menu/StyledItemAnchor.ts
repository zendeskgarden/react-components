/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledOption } from '../combobox/StyledOption';

const COMPONENT_ID = 'dropdowns.menu.item_anchor';

interface IStyledItemAnchor {
  $hasAnchor: boolean;
}

export const StyledItemAnchor = styled(StyledOption as 'a').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'a'
})<IStyledItemAnchor>`
  flex: 1;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledItemAnchor.defaultProps = {
  theme: DEFAULT_THEME
};
