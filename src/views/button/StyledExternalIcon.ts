/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import NewWindowIcon from '@zendeskgarden/svg-icons/src/12/new-window-stroke.svg';
import styled from 'styled-components';

const COMPONENT_ID = 'buttons.external_icon';

/**
 * Accepts all `<svg>` props
 */
export const StyledExternalIcon = styled(NewWindowIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transform: ${props => props.theme.rtl && 'scaleX(-1)'};
  margin-bottom: -0.085em;
  padding-left: 0.25em;
  box-sizing: content-box;
  width: 0.85em;
  height: 0.85em;

  ${componentStyles};
`;
