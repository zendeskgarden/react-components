/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, ThemeProps, DefaultTheme, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledHint } from './StyledHint';
import { StyledLabel } from './StyledLabel';
import { StyledMessage } from './StyledMessage';

interface IStyledComboboxProps extends ThemeProps<DefaultTheme> {
  $isCompact?: boolean;
}

const sizeStyles = (props: IStyledComboboxProps) => {
  const minWidth = `${props.$isCompact ? 100 : 144}px`;
  const marginTop = `${props.theme.space.base * (props.$isCompact ? 1 : 2)}px`;

  return css`
    min-width: ${minWidth};

    ${StyledLabel}:not([hidden]) + &&,
    ${StyledHint} + &&,
    ${StyledMessage} + &&,
    && + ${StyledHint},
    && + ${StyledMessage} {
      margin-top: ${marginTop};
    }
  `;
};

export const StyledCombobox = styled.div<IStyledComboboxProps>`
  ${sizeStyles};

  ${componentStyles};
`;
