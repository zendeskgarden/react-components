/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme } from 'styled-components';

import { Field } from '../../elements/form/Field';
import { componentStyles } from '../../theming/utils/componentStyles';

const sizeStyles = (theme: DefaultTheme) => {
  const margin = `${theme.space.base * 1.5}px`;
  const width = `${theme.space.base * 12.75}px`;

  return `
    margin-${theme.rtl ? 'right' : 'left'}: ${margin};
    width: ${width};
    min-width: ${width};
  `;
};

export const StyledRGBAField = styled(Field as unknown as 'div')`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${props => sizeStyles(props.theme)};

  ${componentStyles};
`;
