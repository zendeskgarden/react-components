/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';

export const StyledHint = styled.div`
  direction: ${props => props.theme.rtl && 'rtl'};
  display: block;
  vertical-align: middle; /* support hint inline with input layout */
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${props => getColor({ theme: props.theme, variable: 'foreground.subtle' })};
  font-size: ${props => props.theme.fontSizes.md};

  ${componentStyles};
`;
