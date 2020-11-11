/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getLineHeight
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.step_inner_panel';

export interface IStyledInnerPanel {
  isExpanded?: boolean;
  isAnimated?: boolean;
}

/**
 * 1. Override the inline max-height style used for animation.
 */
export const StyledInnerPanel = styled.div.attrs<IStyledInnerPanel>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInnerPanel>`
  transition: ${props => props.isAnimated && 'max-height 0.25s ease-in-out'};
  /* stylelint-disable-next-line declaration-no-important */
  max-height: ${props => !props.isExpanded && '0 !important'}; /* [1] */
  overflow: hidden;
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInnerPanel.defaultProps = {
  isAnimated: true,
  theme: DEFAULT_THEME
};
