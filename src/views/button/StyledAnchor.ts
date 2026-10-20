/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledButton } from './StyledButton';
import { StyledExternalIcon } from './StyledExternalIcon';

/*
 * 1. the external icon keeps its text-relative size over the button SVG size
 */

/**
 * Accepts all `<a>` props
 */
export const StyledAnchor = styled(StyledButton)`
  direction: ${props => props.theme.rtl && 'rtl'};

  & ${StyledExternalIcon} {
    /* [1] */
    width: 0.85em;
    height: 0.85em;
  }

  ${componentStyles};
`;
