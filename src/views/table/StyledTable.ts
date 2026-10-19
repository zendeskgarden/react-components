/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledBaseProps } from '../../types/views';

export const getLineHeight = (props: IStyledBaseProps) => {
  return `${props.theme.space.base * 5}px`;
};

/**
 * 1. <table> reset
 */
export const StyledTable = styled.table`
  display: table;
  border: none; /* [1] */
  width: 100%; /* [1] */
  table-layout: fixed; /* [1] */
  border-collapse: collapse; /* [1] */
  border-spacing: 0; /* [1] */
  line-height: ${props => getLineHeight(props)};
  color: ${props => getColor({ variable: 'foreground.default', theme: props.theme })};
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${componentStyles};
`;
