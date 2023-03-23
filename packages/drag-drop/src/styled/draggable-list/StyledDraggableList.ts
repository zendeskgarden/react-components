/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledDraggableListItem } from './StyledDraggableListItem';
import {
  INDICATOR_LINE_SIZE,
  StyledDraggableListDropIndicator
} from './StyledDraggableListDropIndicator';

const COMPONENT_ID = 'draggable_list';

export interface IStyledDraggableListProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

function getMarginStyles(props: IStyledDraggableListProps) {
  if (props.isHorizontal) {
    if (props.theme.rtl) {
      return css`
        margin-right: ${p => p.theme.space.xs};
      `;
    }

    return css`
      margin-left: ${p => p.theme.space.xs};
    `;
  }

  return css`
    margin-top: ${p => p.theme.space.xs};
  `;
}

function getSiblingMarginStyles(props: IStyledDraggableListProps) {
  const value = `${props.theme.space.base - INDICATOR_LINE_SIZE / 2}px`;

  if (props.isHorizontal) {
    if (props.theme.rtl) {
      return {
        marginRight: `${value} !important`
      };
    }

    return {
      marginLeft: `${value} !important`
    };
  }

  return {
    marginTop: `${value} !important`
  };
}

export const StyledDraggableList = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDraggableListProps & ThemeProps<DefaultTheme>>`
  display: flex;
  flex-direction: ${p => (p.isHorizontal ? 'row' : 'column')};
  list-style-type: none;
  margin: 0;
  padding: 0;

  > ${StyledDraggableListItem} {
    flex: 1;

    &:not(:first-child) {
      ${getMarginStyles}
    }
  }

  > ${StyledDraggableListItem} + ${StyledDraggableListDropIndicator} {
    ${getSiblingMarginStyles}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableList.defaultProps = {
  theme: DEFAULT_THEME
};
