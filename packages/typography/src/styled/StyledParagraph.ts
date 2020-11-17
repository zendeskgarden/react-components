/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.paragraph';

interface IStyledParagraphProps {
  size?: 'sm' | 'md' | 'lg';
}

export const StyledParagraph = styled.p.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledParagraphProps>`
  margin: 0;
  padding: 0;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  blockquote + &,
  & + & {
    margin-top: ${props => props.theme.lineHeights[props.size!]};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledParagraph.defaultProps = {
  theme: DEFAULT_THEME,
  size: 'md'
};
