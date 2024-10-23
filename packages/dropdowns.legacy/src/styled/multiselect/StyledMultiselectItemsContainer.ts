/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.multiselect_items_container';

interface IStyledMultiselectItemsContainerProps {
  $isCompact?: boolean;
  $isBare?: boolean;
}

/**
 * 1. Negative margin over standard input padding.
 * 2. Compensate for horizontal item margins.
 */
const sizeStyles = (props: IStyledMultiselectItemsContainerProps & ThemeProps<DefaultTheme>) => {
  let margin;
  let padding;

  if (!props.$isBare) {
    const marginVertical = props.$isCompact
      ? `-${props.theme.space.base * 1.5}px`
      : `-${props.theme.space.base * 2.5}px`;

    margin = `${marginVertical} 0`; /* [1] */

    const paddingVertical = props.$isCompact ? '3px' : '1px';
    const paddingEnd = `${props.theme.space.base}px`;

    padding = `${paddingVertical} ${props.theme.rtl ? 0 : paddingEnd} ${paddingVertical} ${
      props.theme.rtl ? paddingEnd : 0
    }`;
  }

  return css`
    margin: ${margin};
    padding: ${padding};
  `;
};

export const StyledMultiselectItemsContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledMultiselectItemsContainerProps>`
  display: inline-flex;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 0;

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
