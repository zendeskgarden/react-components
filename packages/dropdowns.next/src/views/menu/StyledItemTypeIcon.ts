/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledOptionTypeIcon } from '../combobox/StyledOptionTypeIcon';
import { StyledItem } from './StyledItem';

const COMPONENT_ID = 'dropdowns.menu.item.type_icon';

export const StyledItemTypeIcon = styled(StyledOptionTypeIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable-next-line */
  ${StyledItem}[aria-checked='true'] > & {
    opacity: 1;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledItemTypeIcon.defaultProps = {
  theme: DEFAULT_THEME
};
