/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { IParagraphProps } from '../types';
import { THEME_SIZES } from './StyledFont';

const COMPONENT_ID = 'typography.paragraph';

export const StyledParagraph = styled.p.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IParagraphProps>`
  margin: 0;
  padding: 0;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  & + &,
  blockquote + & {
    margin-top: ${props => props.theme.lineHeights[THEME_SIZES[props.size!]]};
  }

  ${componentStyles};
`;
