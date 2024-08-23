/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, focusStyles } from '@zendeskgarden/react-theming';
import { StyledButton } from './StyledButton';

const COMPONENT_ID = 'accordions.header';

interface IStyledHeader {
  $isExpanded?: boolean;
  $isCollapsible?: boolean;
}

export const StyledHeader = styled.div.attrs<IStyledHeader>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeader>`
  display: flex;
  align-items: center;
  transition: box-shadow 0.1s ease-in-out;
  font-size: ${props => props.theme.fontSizes.md};

  &:hover {
    cursor: ${props => (props.$isCollapsible || !props.$isExpanded) && 'pointer'};
  }

  ${props =>
    focusStyles({
      theme: props.theme,
      inset: true,
      selector: `&:has(${StyledButton}:focus-visible)`
    })}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
