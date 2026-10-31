/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { Field } from '../../elements/form/Field';
import type { IGardenTheme } from '../../theming/types';
import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

const sizeStyles = (theme: IGardenTheme) => {
  const margin = `${theme.space.base * 1.5}px`;
  const width = `${theme.space.base * 12.75}px`;

  return `
    margin-${theme.rtl ? 'right' : 'left'}: ${margin};
    width: ${width};
    min-width: ${width};
  `;
};

export const StyledRGBAField = styled(Field as unknown as 'div')<WithTheme>`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${props => sizeStyles(props.theme)};

  ${componentStyles};
`;
