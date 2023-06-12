/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { getHeight as getInputHeight } from './StyledInput';

const COMPONENT_ID = 'dropdowns.combobox.value';

interface IStyledValueProps extends ThemeProps<DefaultTheme> {
  isBare?: boolean;
  isCompact?: boolean;
  isDisabled?: boolean;
  isEditable?: boolean;
  isMultiselectable?: boolean;
  isPlaceholder?: boolean;
}

const colorStyles = (props: IStyledValueProps) => {
  const foregroundColor = props.isPlaceholder && getColor('neutralHue', 400, props.theme);

  return css`
    color: ${foregroundColor};
  `;
};

const sizeStyles = (props: IStyledValueProps) => {
  const height = `${getInputHeight(props)}px`;
  const fontSize = props.theme.fontSizes.md;
  const minWidth = `${props.theme.space.base * 8}px`;

  return css`
    padding: 0;
    min-width: ${minWidth};
    height: ${height};
    line-height: ${height};
    font-size: ${fontSize};
  `;
};

export const StyledValue = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledValueProps>`
  flex-basis: 0;
  flex-grow: 1;
  cursor: ${props => {
    if (props.isDisabled) {
      return 'default';
    }

    return props.isEditable ? 'text' : 'pointer';
  }};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledValue.defaultProps = {
  theme: DEFAULT_THEME
};
