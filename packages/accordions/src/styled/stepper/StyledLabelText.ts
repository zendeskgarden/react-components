/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.step_label_text';

interface IStyledLabelTextProps {
  isHidden?: boolean;
  isHorizontal?: boolean;
}

export const StyledLabelText = styled.div.attrs<IStyledLabelTextProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledLabelTextProps>`
  display: ${props => props.isHidden && 'none'};
  padding: ${props => props.isHorizontal && `0 ${props.theme.space.base * 3}px`};
  word-wrap: ${props => props.isHorizontal && 'break-word'};
`;

StyledLabelText.defaultProps = {
  theme: DEFAULT_THEME
};
