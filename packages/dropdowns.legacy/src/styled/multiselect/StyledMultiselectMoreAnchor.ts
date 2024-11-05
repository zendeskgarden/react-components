/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getLineHeight, retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.multiselect_more_anchor';

interface IStyledMultiselectMoreAnchorProps {
  $isCompact?: boolean;
  $isDisabled?: boolean;
}

export const StyledMultiselectMoreAnchor = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledMultiselectMoreAnchorProps>`
  display: inline-block;
  cursor: ${props => (props.$isDisabled ? 'default' : 'pointer')};
  padding: ${props => props.theme.space.base * (props.$isCompact ? 0.75 : 1.5)}px 0;
  overflow: hidden;
  user-select: none;
  text-overflow: ellipsis;
  line-height: ${props =>
    props.$isCompact ? '1em' : getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  white-space: nowrap;
  color: ${props =>
    getColor({
      theme: props.theme,
      variable: props.$isDisabled ? 'foreground.disabled' : 'foreground.primary'
    })};

  &:hover {
    text-decoration: ${props => !props.$isDisabled && 'underline'};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
