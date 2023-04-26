/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledItem } from './StyledItem';

const COMPONENT_ID = 'draggable_list';

export interface IStyledDraggableListProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

const sizeStyles = (props: IStyledDraggableListProps) => {
  const {
    isHorizontal,
    theme: { space }
  } = props;
  let marginStart = 'margin-top';
  let marginEnd = 'margin-bottom';

  if (isHorizontal) {
    marginStart = 'margin-right';
    marginEnd = 'margin-left';
  }

  /**
   * 1. Offset padding so adjacent UI elements align to the list container.
   */
  return css`
    ${marginStart}: -${space.xxs}; /* [1] */
    ${marginEnd}: -${space.xxs}; /* [1] */
  `;
};

/**
 * 1. <ul> reset.
 */
export const StyledDraggableList = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDraggableListProps & ThemeProps<DefaultTheme>>`
  display: flex;
  flex-direction: ${p => (p.isHorizontal ? 'row' : 'column')};
  margin: 0; /* [1] */
  padding: 0; /* [1] */
  list-style: none; /* [1] */
  box-sizing: border-box;
  direction: ${props => props.theme.rtl && 'rtl'};

  > ${StyledItem} {
    flex: 1;
  }

  ${sizeStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableList.defaultProps = {
  theme: DEFAULT_THEME
};
