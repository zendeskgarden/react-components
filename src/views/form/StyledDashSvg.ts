/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import DashIcon from '@zendeskgarden/svg-icons/src/12/dash-fill.svg';
import styled from 'styled-components';

import { StyledCheckInput } from './StyledCheckInput';
import { StyledCheckLabel } from './StyledCheckLabel';

const COMPONENT_ID = 'forms.dash_svg';

export const StyledDashSvg = styled(DashIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transition: opacity 0.25s ease-in-out;
  opacity: 0;
  pointer-events: none;

  ${StyledCheckInput}:indeterminate ~ ${StyledCheckLabel} > & {
    opacity: 1;
  }

  ${componentStyles};
`;
