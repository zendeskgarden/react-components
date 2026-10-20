/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledClose, BASE_MULTIPLIERS as styledCloseBaseMultipliers } from './StyledClose';

export const BASE_MULTIPLIERS = {
  top: styledCloseBaseMultipliers.top,
  side: 2,
  size: styledCloseBaseMultipliers.size
};

export const StyledDrawerClose = styled(StyledClose)`
  ${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
    `${props.theme.space.base * BASE_MULTIPLIERS.side}px`};

  ${componentStyles};
`;
