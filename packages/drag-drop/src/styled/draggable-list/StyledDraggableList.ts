/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledItem } from './StyledItem';
import { StyledDropIndicator } from './StyledDropIndicator';

const COMPONENT_ID = 'draggable_list';

export interface IStyledDraggableListProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

/**
 * Prevents layout shifting when drop indicator is between list items.
 */
function getMargin(props: IStyledDraggableListProps, value: string) {
  const {
    isHorizontal,
    theme: { rtl }
  } = props;
  let marginProperty;

  if (isHorizontal) {
    marginProperty = rtl ? 'margin-right' : 'margin-left';
  } else {
    marginProperty = 'margin-top';
  }

  return css`
    ${marginProperty}: ${value};
  `;
}

/**
 * Returns styles that push DropIndicator away from DraggableList's bounding box when
 * the indicator is the first or last item.
 */
function getPosition(props: IStyledDraggableListProps, isStart = true) {
  const {
    isHorizontal,
    theme: { rtl, space, borderWidths }
  } = props;
  const offsetValue = math(`-${space.xxs} - ${borderWidths.sm}`);
  let positionProperty;
  let dimensionProperty;

  if (isHorizontal) {
    dimensionProperty = 'height';

    if (isStart) {
      positionProperty = rtl ? 'right' : 'left';
    } else {
      positionProperty = rtl ? 'left' : 'right';
    }
  } else {
    dimensionProperty = 'width';
    positionProperty = isStart ? 'top' : 'bottom';
  }

  return css`
    ${positionProperty}: ${offsetValue};
    ${dimensionProperty}: 100%;
  `;
}

const sizeStyles = (props: IStyledDraggableListProps) => {
  const {
    theme: { space, borderWidths }
  } = props;
  const offsetValue = math(`${space.base / 2}px + ${borderWidths.sm}`);

  return css`
    > ${StyledItem} {
      &:not(:first-child) {
        ${getMargin(props, `${space.base * 2}px`)};
      }

      + ${StyledDropIndicator} {
        ${getMargin(props, offsetValue)};
      }
    }

    > ${StyledDropIndicator} {
      /* stylelint-disable-next-line selector-max-specificity */
      &:not(:first-child) + ${StyledItem} {
        ${getMargin(props, offsetValue)};
      }

      /* stylelint-disable-next-line selector-max-specificity */
      &:first-child + ${StyledItem} {
        ${getMargin(props, '0')};
      }
    }
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
  position: relative;
  flex-direction: ${p => (p.isHorizontal ? 'row' : 'column')};
  margin: 0; /* [1] */
  padding: 0; /* [1] */
  list-style: none; /* [1] */
  box-sizing: border-box;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${sizeStyles};

  > ${StyledItem} {
    flex: 1;
  }

  > ${StyledItem} + ${StyledDropIndicator}:last-child {
    position: absolute;
    ${p => getPosition(p, false)};
  }

  > ${StyledDropIndicator}:first-child {
    position: absolute;
    ${p => getPosition(p)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableList.defaultProps = {
  theme: DEFAULT_THEME
};
