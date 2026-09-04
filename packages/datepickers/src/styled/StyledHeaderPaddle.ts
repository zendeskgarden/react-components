/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';

export const StyledHeaderPaddle = styled(IconButton)`
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};

  ${componentStyles};
`;
