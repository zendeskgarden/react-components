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
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

export interface IStyledInputProps {
  isHidden?: boolean;
}

export const StyledInput = styled(Input).attrs({
  isBare: true
})<IStyledInputProps>`
  ${props => props.isHidden && hiddenStyling}
`;

StyledInput.defaultProps = {
  theme: DEFAULT_THEME
};
