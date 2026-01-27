/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';

import { IListboxProps } from '../../types';
import { StyledListboxSeparator } from './StyledListboxSeparator';
import { StyledOptGroup } from './StyledOptGroup';
import { StyledOption, getMinHeight as getOptionMinHeight } from './StyledOption';
import { StyledOptionContent } from './StyledOptionContent';

const COMPONENT_ID = 'dropdowns.combobox.listbox';

export interface IStyledListboxProps extends ThemeProps<DefaultTheme> {
  $isCompact?: boolean;
  $maxHeight?: IListboxProps['maxHeight'];
  $minHeight?: IListboxProps['minHeight'];
}

const sizeStyles = (props: IStyledListboxProps) => {
  const padding = props.theme.space.base;
  const $minHeight =
    props.$minHeight === undefined
      ? `${getOptionMinHeight(props) + padding * 2}px`
      : props.$minHeight;

  return css`
    min-height: ${$minHeight};
    max-height: ${props.$maxHeight};

    &&& {
      padding-top: ${padding}px;
      padding-bottom: ${padding}px;
    }
  `;
};

export const StyledListbox = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledListboxProps>`
  overflow-y: auto;
  list-style-type: none;

  ${sizeStyles};

  &&& {
    display: block;
  }

  ${StyledOption}:first-child ${StyledOptionContent} ${StyledOptGroup}:first-child ${StyledListboxSeparator}[role='none']:first-child {
    display: none;
  }
`;
