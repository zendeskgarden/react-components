/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Button } from '@zendeskgarden/react-buttons';

/**
 * 1. IE11 group width override.
 * 2. Input group border overrides.
 */
export const StyledButton = styled(Button as any).attrs({
  isNeutral: true,
  'data-garden-version': PACKAGE_VERSION
})`
  padding: 0;
  width: ${props => props.theme.space.base * 17}px;
  max-width: ${props => props.theme.space.base * 17}px; /* [1] */

  &:last-of-type:not(:first-child) {
    /* stylelint-disable */
    border-top-${props => (props.theme.rtl ? 'left' : 'right')}-radius:
      ${props => props.theme.borderRadii.md} !important; /* [2] */
    border-bottom-${props => (props.theme.rtl ? 'left' : 'right')}-radius:
      ${props => props.theme.borderRadii.md} !important; /* [2] */
    /* stylelint-enable */
  }
`;
