/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import classNames from 'classnames';
import styled, { css } from 'styled-components';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';
import { HTMLProps } from 'react';

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

export interface IStyledInputProps extends HTMLProps<HTMLInputElement> {
  isHidden?: boolean;
}

export const StyledInput = styled.input.attrs({
  className: classNames(TextStyles['c-txt__input'], TextStyles['c-txt__input--bare'])
})<IStyledInputProps>`
  && {
    vertical-align: baseline;
    ${props => props.isHidden && hiddenStyling}
  }
` as React.FunctionComponent<IStyledInputProps>;
