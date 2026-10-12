/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { IParagraphProps } from '../../types/elements';
import { THEME_SIZES } from './StyledFont';

export const StyledParagraph = styled.p<IParagraphProps>`
  margin: 0;
  padding: 0;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  & + &,
  blockquote + & {
    margin-top: ${props => props.theme.lineHeights[THEME_SIZES[props.size!]]};
  }

  ${componentStyles};
`;
