/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledBaseProps } from '../../types/views';

const sizeStyles = (props: IStyledBaseProps) => {
  const margin = props.theme.shadowWidths.sm;

  return css`
    margin: -${margin};
    min-width: 0;

    & > * {
      margin: ${margin};
    }
  `;
};

export const StyledInputGroup = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;

  ${sizeStyles};

  ${componentStyles};
`;
