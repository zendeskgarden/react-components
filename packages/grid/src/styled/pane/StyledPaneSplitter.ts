/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math, rgba } from 'polished';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { Orientation } from '../../types';

const COMPONENT_ID = 'pane.splitter';

interface IStyledPaneSplitterProps {
  isHovered: boolean;
  orientation?: Orientation;
  isFixed?: boolean;
}

const colorStyles = (props: IStyledPaneSplitterProps & ThemeProps<DefaultTheme>) => {
  const color = getColor('neutralHue', 300, props.theme);
  const hoverColor = getColor('primaryHue', 600, props.theme);
  const activeColor = getColor('primaryHue', 800, props.theme);
  const boxShadow = props.theme.shadows.md(rgba(hoverColor!, 0.35));

  return css`
    &::before {
      background-color: ${color};
    }

    &:hover::before {
      background-color: ${props.isHovered && hoverColor};
    }

    &[data-garden-focus-visible]::before {
      box-shadow: ${boxShadow};
      background-color: ${hoverColor};
    }

    &:active::before {
      background-color: ${props.isHovered && activeColor};
    }
  `;
};

const sizeStyles = (props: IStyledPaneSplitterProps & ThemeProps<DefaultTheme>) => {
  const size = math(`${props.theme.shadowWidths.md} * 2`);
  const separatorSize = math(`${props.theme.borderWidths.sm} * 2`);
  const offset = math(`-${size} / 2`);
  let cursor;
  let top;
  let right;
  let left;
  let bottom;
  let width;
  let height;
  let separatorWidth;
  let separatorHeight;

  switch (props.orientation) {
    case 'top':
      cursor = 'row-resize';
      top = offset;
      width = '100%';
      height = size;
      separatorWidth = width;
      separatorHeight = props.theme.borderWidths.sm;

      break;

    case 'bottom':
      cursor = 'row-resize';
      bottom = offset;
      width = '100%';
      height = size;
      separatorWidth = width;
      separatorHeight = props.theme.borderWidths.sm;

      break;

    case 'start':
      cursor = 'col-resize';
      top = 0;
      width = size;
      height = '100%';
      separatorWidth = props.theme.borderWidths.sm;
      separatorHeight = height;

      if (props.theme.rtl) {
        right = offset;
      } else {
        left = offset;
      }

      break;

    case 'end':
    default:
      cursor = 'col-resize';
      top = 0;
      width = size;
      height = '100%';
      separatorWidth = props.theme.borderWidths.sm;
      separatorHeight = height;

      if (props.theme.rtl) {
        left = offset;
      } else {
        right = offset;
      }

      break;
  }

  const dimensionProperty = width === '100%' ? 'height' : 'width';

  return css`
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    cursor: ${props.isFixed ? 'pointer' : cursor};
    width: ${width};
    height: ${height};

    &::before {
      width: ${separatorWidth};
      height: ${separatorHeight};
    }

    &:hover::before {
      ${dimensionProperty}: ${props.isHovered && separatorSize};
    }

    &[data-garden-focus-visible]::before,
    &:focus::before {
      ${dimensionProperty}: ${separatorSize};
    }

    &[data-garden-focus-visible]::before {
      border-radius: ${props.theme.borderRadii.md};
    }
  `;
};

/**
 * 1. Elevated initial context to pickup full-width hover
 * 2. Stack below splitter button.
 */
export const StyledPaneSplitter = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledPaneSplitterProps>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1; /* [1] */
  user-select: none;

  ${sizeStyles};

  &:focus {
    outline: none;
  }

  &::before {
    position: absolute;
    /* prettier-ignore */
    transition:
      box-shadow 0.1s ease-in-out,
      background-color 0.25s ease-in-out;
    z-index: -1; /* [2] */
    content: '';
  }

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPaneSplitter.defaultProps = {
  theme: DEFAULT_THEME
};
