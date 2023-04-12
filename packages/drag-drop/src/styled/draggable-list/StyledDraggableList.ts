/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, CSSObject } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledItem } from './StyledItem';
import { StyledDropIndicator } from './StyledDropIndicator';

const COMPONENT_ID = 'draggable_list';

export interface IStyledDraggableListProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

function offsetMarginStyles(props: IStyledDraggableListProps, value: string) {
  const style: CSSObject = {};

  if (props.isHorizontal) {
    style[props.theme.rtl ? 'marginRight' : 'marginLeft'] = value;
  } else {
    style.marginTop = value;
  }

  return style;
}

/**
 * Positions the drop indicator absolutely when at the start or end of the list
 * to prevent layout shifting.
 */
function positionStyles(props: IStyledDraggableListProps, isStart = true) {
  const { isHorizontal, theme } = props;
  const offsetValue = `calc(-${theme.space.xxs} - ${theme.borderWidths.sm})`;

  const style: Record<string, string> = {};

  if (isHorizontal) {
    style.height = `calc(100% - ${theme.space.base / 2}px)`;

    if (isStart) {
      style[theme.rtl ? 'right' : 'left'] = offsetValue;
    } else {
      style[theme.rtl ? 'left' : 'right'] = offsetValue;
    }
  } else {
    style.width = `calc(100% - ${theme.space.base / 2}px)`;
    style[isStart ? 'top' : 'bottom'] = offsetValue;
  }

  return style;
}

/**
 * 1. <ul> reset.
 * 2. Pushes the drop indicator away from the list bounding box when at the start or end of the list.
 * 3. Prevents layout shifting when drop indicator is between list items.
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

  > ${StyledItem} {
    flex: 1;

    &:not(:first-child) {
      ${p => offsetMarginStyles(p, `${p.theme.space.base * 2}px`)};
    }

    + ${StyledDropIndicator} {
      ${p =>
        offsetMarginStyles(
          p,
          `calc(${p.theme.space.base / 2}px + ${p.theme.borderWidths.sm})`
        )}; /* [3] */
    }

    + ${StyledDropIndicator}:last-child {
      position: absolute;

      ${p => positionStyles(p, false)}; /* [2] */
    }
  }

  > ${StyledDropIndicator} {
    /* stylelint-disable-next-line selector-max-specificity */
    &:not(:first-child) + ${StyledItem} {
      ${p =>
        offsetMarginStyles(
          p,
          `calc(${p.theme.space.base / 2}px + ${p.theme.borderWidths.sm})`
        )}; /* [3] */
    }

    &:first-child {
      position: absolute;

      ${p => positionStyles(p)}; /* [2] */
    }

    /* stylelint-disable-next-line selector-max-specificity */
    &:first-child + ${StyledItem} {
      ${p => offsetMarginStyles(p, '0')}; /* [3] */
    }
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableList.defaultProps = {
  theme: DEFAULT_THEME
};
