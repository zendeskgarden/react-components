/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { IOrderedListProps, IUnorderedListProps } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';

const listStyles = (props: { $listType?: string } & IStyledBaseProps) => {
  const rtl = props.theme.rtl;

  return css`
    direction: ${rtl ? 'rtl' : 'ltr'};
    margin: 0;
    margin-${rtl ? 'right' : 'left'}: 24px;
    padding: 0;
    list-style-position: outside;
    list-style-type: ${props.$listType};
  `;
};

interface IStyledListProps {
  $listType?: IOrderedListProps['type'];
}

export const StyledOrderedList = styled.ol<IStyledListProps>`
  ${listStyles};

  ${componentStyles};
`;

interface IStyledUnorderedListProps {
  $listType?: IUnorderedListProps['type'];
}

export const StyledUnorderedList = styled.ul<IStyledUnorderedListProps>`
  ${listStyles};

  ${componentStyles};
`;
