/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.footer_item';

export const StyledFooterItem = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  /* stylelint-disable property-no-unknown */
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 5}px;
  /* stylelint-enable property-no-unknown */
  min-width: 0;

  &:first-child {
    /* stylelint-disable property-no-unknown */
    margin-${props => (props.theme.rtl ? 'right' : 'left')}: 0;
    /* stylelint-enable property-no-unknown */
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFooterItem.defaultProps = {
  theme: DEFAULT_THEME
};
