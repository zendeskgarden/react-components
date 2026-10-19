/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ExternalLinkIcon from '@zendeskgarden/svg-icons/src/external-link.svg';
import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

/**
 * Accepts all `<svg>` props
 */
export const StyledExternalIcon = styled(ExternalLinkIcon)`
  transform: ${props => props.theme.rtl && 'scaleX(-1)'};
  margin-bottom: -0.085em;
  padding-left: 0.25em;
  box-sizing: content-box;
  width: 0.85em;
  height: 0.85em;

  ${componentStyles};
`;
