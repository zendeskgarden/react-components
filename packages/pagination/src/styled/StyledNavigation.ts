/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledPage } from './StyledPage';

const COMPONENT_ID = 'pagination.navigation';

export const StyledNavigation = styled(StyledPage).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &[data-garden-focus-visible] {
    box-shadow: none;
    background-color: ${props => getColor('primaryHue', 600, props.theme, 0.08)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNavigation.defaultProps = {
  theme: DEFAULT_THEME
};
