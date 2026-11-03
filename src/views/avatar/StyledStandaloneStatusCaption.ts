/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { WithTheme } from '../../types/views';

function sizeStyles(props: WithTheme) {
  const marginRule = `margin-${props.theme.rtl ? 'right' : 'left'}: ${
    props.theme.space.base * 2
  }px;`;

  return css`
    ${marginRule}
    line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
    font-size: ${props.theme.fontSizes.md};
  `;
}

export const StyledStandaloneStatusCaption = styled.figcaption<WithTheme>`
  ${sizeStyles}

  ${componentStyles};
`;
