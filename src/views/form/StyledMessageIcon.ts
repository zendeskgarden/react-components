/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getIconRenderSize } from '../../theming/utils/getIconRenderSize';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';

export const StyledMessageIcon = styled(StyledBaseIcon)`
  width: ${props => getIconRenderSize(props.theme)};
  height: ${props => getIconRenderSize(props.theme)};

  ${componentStyles};
`;
