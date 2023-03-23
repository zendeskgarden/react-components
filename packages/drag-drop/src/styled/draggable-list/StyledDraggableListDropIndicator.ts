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

export const INDICATOR_LINE_SIZE = 2;
const INDICATOR_END_SIZE = 8;

export interface IStyledDraggableListDropIndicatorProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

function getSiblingMarginStyles(props: IStyledDraggableListDropIndicatorProps) {
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

function getBeforePseudoElementStyles(props: IStyledDraggableListDropIndicatorProps) {
  const {
    isHorizontal,
    theme: { rtl }
  } = props;

  if (isHorizontal) {
    return {
      top: 0,
      transform: rtl ? 'translate(50%, -75%)' : 'translate(-50%, -75%)'
    };
  }

  return {
    left: 0,
    transform: 'translate(-75%, -50%)'
  };
}

function getAfterPseudoElementStyles(props: IStyledDraggableListDropIndicatorProps) {
  const {
    isHorizontal,
    theme: { rtl }
  } = props;

  if (isHorizontal) {
    return {
      bottom: 0,
      transform: rtl ? 'translate(50%, 75%)' : 'translate(-50%, 75%)'
    };
  }

  return {
    right: 0,
    transform: 'translate(75%, -50%)'
  };
}

/**
 * 1. Offset list item spacing to fit indicator without shifting layout.
 *    Spacing minus height.
 */
export const StyledDraggableListDropIndicator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDraggableListDropIndicatorProps>`
  position: relative;
  border: ${p => p.theme.borders.sm} ${p => getColor('primaryHue', 600, p.theme)};

  &::before,
  &::after {
    position: absolute;
    border-radius: 50%;
    background-color: ${p => getColor('primaryHue', 600, p.theme)};
    width: ${INDICATOR_END_SIZE}px;
    height: ${INDICATOR_END_SIZE}px;
    content: '';
  }

  &::before {
    ${getBeforePseudoElementStyles}
  }

  &::after {
    ${getAfterPseudoElementStyles}
  }

  + ${StyledDraggableListItem} {
    ${getSiblingMarginStyles}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableListDropIndicator.defaultProps = {
  theme: DEFAULT_THEME
};
