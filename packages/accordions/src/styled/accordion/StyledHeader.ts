/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, focusStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.header';

interface IStyledHeader {
  isFocused?: boolean;
  isExpanded?: boolean;
  isCollapsible?: boolean;
}

export const StyledHeader = styled.div.attrs<IStyledHeader>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeader>`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.md};

  ${props =>
    focusStyles({
      theme: props.theme,
      inset: true,
      selector: '&:focus-within'
    })}

  &:hover {
    cursor: ${props => (props.isCollapsible || !props.isExpanded) && 'pointer'};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
