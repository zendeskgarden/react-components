/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledContent } from './StyledContent';

const COMPONENT_ID = 'chrome.body';

export interface IStyledBodyProps {
  /**
   * Prepare the body content height to allow space for a footer component
   **/
  hasFooter?: boolean;
}

export const StyledBody = styled.div.attrs<IStyledBodyProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBodyProps>`
  flex: 1;
  order: 1;
  background-color: ${props => getColor('neutralHue', 100, props.theme)};
  min-width: 0;

  ${props =>
    props.hasFooter &&
    `
    ${StyledContent} {
      height: calc(100% - ${props.theme.space.base * 33}px);
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledBody.defaultProps = {
  theme: DEFAULT_THEME
};
