/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, arrowStyles } from '@zendeskgarden/react-theming';
import { StyledListbox } from '../combobox/StyledListbox';

const COMPONENT_ID = 'dropdowns.menu';

/*
 * 1. Override arrow parent positioning to ensure arrow is visible beyond block overflow boundaries.
 */
export const StyledMenu = styled(StyledListbox).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable-next-line declaration-no-important */
  position: static !important; /* [1] */

  ${arrowStyles('top-left', { animationModifier: '[data-garden-animate="true"]' })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMenu.defaultProps = {
  theme: DEFAULT_THEME
};
