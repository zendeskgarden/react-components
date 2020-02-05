/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { Input } from '@zendeskgarden/react-forms';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const hiddenStyling = css`
  position: absolute;
  left: -100px;
  transform: scale(0);
  opacity: 0;
  outline: 0;
  border-width: 0;
  border-style: initial;
  border-color: initial;
  background: 0 center;
  width: 1px;
  color: transparent;
  font-size: inherit;
`;

export interface IStyledInputProps {
  isHidden?: boolean;
}

export const StyledInput = styled(Input).attrs({
  isBare: true
})<IStyledInputProps>`
  vertical-align: baseline;
  ${props => props.isHidden && hiddenStyling}
`;

StyledInput.defaultProps = {
  theme: DEFAULT_THEME
};
