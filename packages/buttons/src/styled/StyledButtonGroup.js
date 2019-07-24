/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'buttons.button_group_view';

/*
export interface IStyledButtonGroupProps {
  theme: DefaultTheme;
}
*/

/**
 * Accepts all `<div>` props
 */
export const StyledButtonGroup = styled.div.attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  position: relative;
  z-index: 0;
  direction: ${props => isRtl(props) && 'rtl'};
  white-space: nowrap;

  :focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledButtonGroup.defaultProps = {
  theme: DEFAULT_THEME
};
