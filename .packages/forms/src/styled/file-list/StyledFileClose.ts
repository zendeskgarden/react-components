/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'forms.file.close';

export const StyledFileClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s ease-in-out;
  opacity: 0.8;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${props => getColor({ theme: props.theme, variable: 'foreground.subtle' })};
  appearance: none;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }

  ${componentStyles};
`;
