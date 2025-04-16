/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.header_icon';

export const StyledHeaderIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 3}px;
  color: ${props => getColor({ theme: props.theme, variable: 'foreground.subtle' })};

  & > * {
    width: ${props => props.theme.iconSizes.md};
    height: ${props => props.theme.iconSizes.md};
  }

  ${componentStyles};
`;
