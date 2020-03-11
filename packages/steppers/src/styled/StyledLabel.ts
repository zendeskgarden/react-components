/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getColor,
  getLineHeight,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'steppers.step_label';

interface IStyledLabelProps {
  isActive?: boolean;
  isHorizontal?: boolean;
}

export const StyledLabel = styled.div.attrs<IStyledLabelProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledLabelProps>`
  display: flex;
  flex-direction: ${props => (props.isHorizontal ? 'column' : 'row')};
  align-items: center;
  text-align: center;
  line-height: ${props => getLineHeight(props.theme.lineHeights.lg, props.theme.fontSizes.md)};
  color: ${props =>
    props.isActive
      ? getColor('neutralHue', 800, props.theme)
      : getColor('neutralHue', 600, props.theme)};
  font-weight: ${props => props.isActive && 600};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLabel.defaultProps = {
  theme: DEFAULT_THEME
};
