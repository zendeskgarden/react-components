/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { StyledInput } from '../field/StyledInput';
import { zdColorBlue600 } from '@zendeskgarden/css-variables';

export const StyledItemWrapper = styled.div`
  margin: 2px;
`;

export const StyledMultiselectInput = styled(StyledInput)<{
  isSmall: boolean;
  isVisible: boolean;
}>`
  && {
    flex-basis: 60px;
    flex-grow: 1;
    margin: 2px;
    width: inherit;
    min-width: 60px;
    line-height: ${props => (props.isSmall ? 20 / 14 : 32 / 14)};
  }

  ${props =>
    !props.isVisible &&
    `
  &&& {
    margin: 0;
    opacity: 0;
    height: 0;
    min-height: 0;
    width: 0;
    min-width: 0;
  }
`}
`;

export const StyledMoreAnchor = styled.div`
  display: flex;
  align-items: center;
  margin: 2px;
  border: none;
  border-radius: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  min-width: 0;
  min-height: 1em;
  vertical-align: baseline;
  text-decoration: none;
  user-select: none;
  line-height: 1em;
  white-space: normal;
  color: ${zdColorBlue600};
  font-size: inherit;
  font-weight: inherit;

  :hover {
    text-decoration: underline;
  }
`;
