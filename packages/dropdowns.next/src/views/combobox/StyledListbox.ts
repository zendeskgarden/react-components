/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IListboxProps } from '../../types';
import { getMinHeight as getOptionMinHeight } from './StyledOption';

const COMPONENT_ID = 'dropdowns.combobox.listbox';

export interface IStyledListboxProps extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
  maxHeight?: IListboxProps['maxHeight'];
  minHeight?: IListboxProps['minHeight'];
}

const sizeStyles = (props: IStyledListboxProps) => {
  const padding = props.theme.space.base;
  const minHeight =
    props.minHeight === undefined
      ? `${getOptionMinHeight(props) + padding * 2}px`
      : props.minHeight;

  return css`
    min-height: ${minHeight};
    max-height: ${props.maxHeight};

    &&& {
      padding-top: ${padding}px;
      padding-bottom: ${padding}px;
    }
  `;
};

export const StyledListbox = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  overflow-y: scroll;
  list-style-type: none;

  ${sizeStyles};

  &&& {
    display: block;
  }
`;

StyledListbox.defaultProps = {
  theme: DEFAULT_THEME
};
