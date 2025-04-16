/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledLabel } from './StyledLabel';
import { StyledHint } from './StyledHint';
import { StyledMessage } from './StyledMessage';

const COMPONENT_ID = 'dropdowns.combobox';

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

export const StyledCombobox = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledComboboxProps>`
  ${sizeStyles};

  ${componentStyles};
`;
