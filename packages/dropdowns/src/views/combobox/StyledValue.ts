/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { sizeStyles } from './StyledInput';

const COMPONENT_ID = 'dropdowns.combobox.value';

interface IStyledValueProps extends ThemeProps<DefaultTheme> {
  $isAutocomplete?: boolean;
  $isBare?: boolean;
  $isCompact?: boolean;
  $isDisabled?: boolean;
  $isEditable?: boolean;
  $isMultiselectable?: boolean;
  $isPlaceholder?: boolean;
}

const colorStyles = ({ theme, $isPlaceholder }: IStyledValueProps) => {
  const foregroundColor = $isPlaceholder && getColor({ theme, variable: 'foreground.disabled' });

  return css`
    color: ${foregroundColor};
  `;
};

export const StyledValue = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledValueProps>`
  flex-basis: 0;
  flex-grow: 1;
  cursor: ${props => {
    if (props.$isDisabled) {
      return 'default';
    }

    return props.$isEditable && !props.$isAutocomplete ? 'text' : 'pointer';
  }};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  user-select: none;

  ${sizeStyles};

  ${colorStyles};

  &[hidden] {
    display: none;
  }

  ${componentStyles};
`;
