/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledDraggableListItem } from './StyledDraggableListItem';

const COMPONENT_ID = 'draggable_list.drop_indicator';

const INDICATOR_SIZE = 2;

export interface IStyledDraggableListDropIndicatorProps {
  isHorizontal?: boolean;
}

function getDirectionStyles(
  props: IStyledDraggableListDropIndicatorProps & ThemeProps<DefaultTheme>
) {
  const {
    isHorizontal,
    theme: { rtl, space }
  } = props;

  if (isHorizontal) {
    return {
      width: `${INDICATOR_SIZE}px`,
      [rtl ? 'marginRight' : 'marginLeft']: `${space.base - INDICATOR_SIZE}px`
    };
  }

  return {
    height: `${INDICATOR_SIZE}px`,
    marginTop: `${space.base - INDICATOR_SIZE}px`
  };
}

function getBeforePseudoElementStyles(props: IStyledDraggableListDropIndicatorProps) {
  const { isHorizontal } = props;

  if (isHorizontal) {
    return {
      left: `-${INDICATOR_SIZE / 2}px`,
      top: 0,
      transform: 'translateY(-50%)'
    };
  }

  return {
    left: 0,
    top: `-${INDICATOR_SIZE / 2}px`,
    transform: 'translateX(-50%)'
  };
}

function getAfterPseudoElementStyles(props: IStyledDraggableListDropIndicatorProps) {
  const { isHorizontal } = props;

  if (isHorizontal) {
    return {
      right: `-${INDICATOR_SIZE / 2}px`,
      bottom: '-50%'
    };
  }

  return {
    right: '-50%',
    bottom: `-${INDICATOR_SIZE / 2}px`
  };
}

/**
 * 1. Offset list item spacing to fit indicator without shifting layout.
 *    Spacing minus height.
 */
export const StyledDraggableListDropIndicator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDraggableListDropIndicatorProps & ThemeProps<DefaultTheme>>`
  position: relative;
  background-color: ${p => getColor('primaryHue', 600, p.theme)};

  ${getDirectionStyles}

  &::before,
  &::after {
    position: absolute;
    width: ${p => p.theme.space.xxs};
    height: ${p => p.theme.space.xxs};
    content: '';
  }

  &::before {
    ${getBeforePseudoElementStyles}
  }

  &::after {
    ${getAfterPseudoElementStyles}
  }

  + ${StyledDraggableListItem} {
    margin-top: ${p => p.theme.space.xxs};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableListDropIndicator.defaultProps = {
  theme: DEFAULT_THEME
};
