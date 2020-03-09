/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

interface IStyledLabelTextProps {
  isHidden?: boolean;
  isHorizontal?: boolean;
}

export const StyledLabelText = styled.div<IStyledLabelTextProps>`
  display: ${props => props.isHidden && 'none'};
  padding: ${props => props.isHorizontal && `0 ${props.theme.space.base * 3}px`};
`;

StyledLabelText.defaultProps = {
  theme: DEFAULT_THEME
};
