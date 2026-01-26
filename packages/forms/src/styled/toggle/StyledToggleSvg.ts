/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import CircleIcon from '@zendeskgarden/svg-icons/src/16/circle-sm-fill.svg';
import styled from 'styled-components';

const COMPONENT_ID = 'forms.toggle_svg';

export const StyledToggleSvg = styled(CircleIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transition: all 0.15s ease-in-out;

  ${componentStyles};
`;
