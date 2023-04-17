/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IListboxProps } from '../types';

const COMPONENT_ID = 'dropdowns.combobox.listbox';

interface IStyledListboxProps extends ThemeProps<DefaultTheme> {
  maxHeight?: IListboxProps['maxHeight'];
}

export const StyledListbox = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledListboxProps>`
  max-height: ${props => props.maxHeight};
  overflow-y: scroll;
  list-style-type: none;

  &&& {
    display: block;
    padding-top: ${props => props.theme.space.base}px;
    padding-bottom: ${props => props.theme.space.base}px;
  }
`;

StyledListbox.defaultProps = {
  theme: DEFAULT_THEME
};
