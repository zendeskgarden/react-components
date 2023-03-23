/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledItem } from './StyledItem';
import { INDICATOR_LINE_SIZE, StyledDropIndicator } from './StyledDropIndicator';

const COMPONENT_ID = 'draggable_list';

export interface IStyledDraggableListProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

function getOffsetMarginStyles(props: IStyledDraggableListProps, value: number) {
  if (props.isHorizontal) {
    return {
      [props.theme.rtl ? 'marginRight' : 'marginLeft']: `${value}px`
    };
  }

  return {
    marginTop: `${value}px`
  };
}

/**
 * Positions the drop indicator absolutely when at the start or end of the list to prevent layout shifting.
 */
function getPositionStyles(props: IStyledDraggableListProps, isStart = true) {
  const { isHorizontal, theme } = props;
  const offsetValue = `-${theme.space.base + 1}px`;

  if (isHorizontal) {
    const style: Record<string, string> = { height: '100%' };

    if (isStart) {
      style[theme.rtl ? 'right' : 'left'] = offsetValue;
    } else {
      style[theme.rtl ? 'left' : 'right'] = offsetValue;
    }

    return style;
  }

  return {
    width: '100%',
    [isStart ? 'top' : 'bottom']: offsetValue
  };
}

/**
 * 1. <ul> reset.
 * 2. Pushes the drop indicator away from the list bounding box when at the start or end of the list.
 * 3. Prevents layout shifting when drop indicator is at the start of the list.
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

  ${StyledItem} {
    flex: 1;

    &:not(:first-child) {
      ${p => getOffsetMarginStyles(p, p.theme.space.base * 2)}
    }

    + ${StyledDropIndicator} {
      ${p => getOffsetMarginStyles(p, p.theme.space.base - INDICATOR_LINE_SIZE / 2)}
    }

    + ${StyledDropIndicator}:last-child {
      position: absolute;

      ${p => getPositionStyles(p, false)}/* [2] */
    }
  }

  ${StyledDropIndicator} {
    /* stylelint-disable-next-line selector-max-specificity */
    &:not(:first-child) + ${StyledItem} {
      ${p => getOffsetMarginStyles(p, p.theme.space.base - INDICATOR_LINE_SIZE / 2)}
    }

    &:first-child {
      position: absolute;

      ${p => getPositionStyles(p)}/* [2] */
    }

    /* stylelint-disable-next-line selector-max-specificity */
    &:first-child + ${StyledItem} {
      ${p => getOffsetMarginStyles(p, 0)}/* [3] */
    }
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableList.defaultProps = {
  theme: DEFAULT_THEME
};
