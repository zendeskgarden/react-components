/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getLineHeight,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.step_inner_content';

export interface IStyledInnerContent {
  isActive?: boolean;
}

export const StyledInnerContent = styled.div.attrs<IStyledInnerContent>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInnerContent>`
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
  max-height: ${props => !props.isActive && '0 !important'}; /* stylelint-disable-line */
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${props => props.theme.colors.foreground};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInnerContent.defaultProps = {
  theme: DEFAULT_THEME
};
