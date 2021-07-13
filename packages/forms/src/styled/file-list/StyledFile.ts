/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.file';

interface IStyledFileProps {
  isDragging?: boolean;
  isCompact?: boolean;
}

export const StyledFile = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFileProps>`
  display: inline-flex;
  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  border: ${props => `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  border-radius: ${props => props.theme.borderRadii.md};
  padding: 0 ${props => props.theme.space.base * 3}px;
  height: ${props => (props.isCompact ? 30 : 38)}px;
  color: ${props => getColor('neutralHue', 800, props.theme)};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFile.defaultProps = {
  theme: DEFAULT_THEME
};
