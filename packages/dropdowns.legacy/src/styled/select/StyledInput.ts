/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Input } from '@zendeskgarden/react-forms';
import { componentStyles } from '@zendeskgarden/react-theming';
import styled, { css } from 'styled-components';

const COMPONENT_ID = 'dropdowns.input';

const hiddenStyling = css`
  position: fixed;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

export interface IStyledInputProps {
  $isHidden?: boolean;
}

export const StyledInput = styled(Input).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  isBare: true
})<IStyledInputProps>`
  ${props => props.$isHidden && hiddenStyling};

  ${componentStyles};
`;
