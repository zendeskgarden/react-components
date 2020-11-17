/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.blockquote';

interface IStyledBlockquoteProps {
  size?: 'sm' | 'md' | 'lg';
}

export const StyledBlockquote = styled.blockquote.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBlockquoteProps>`
  margin: 0;
  /* stylelint-disable property-no-unknown */
  border-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
  props.theme.shadowWidths.sm} solid;
  border-color: ${props => getColor('neutralHue', 400, props.theme)};
  padding: 0;
  padding-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
  props.theme.space.base * 4}px;
  /* stylelint-enable property-no-unknown */
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  p + &,
  & + & {
    margin-top: ${props => props.theme.lineHeights[props.size!]};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledBlockquote.defaultProps = {
  theme: DEFAULT_THEME,
  size: 'md'
};
