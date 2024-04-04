/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import {
  DEFAULT_THEME,
  focusStyles,
  getColorV8,
  retrieveComponentStyles,
  SELECTOR_FOCUS_VISIBLE
} from '@zendeskgarden/react-theming';
import { Orientation } from '../../types';

const COMPONENT_ID = 'pane.splitter';

interface IStyledPaneSplitterProps {
  orientation?: Orientation;
  isFixed?: boolean;
}

const colorStyles = (props: IStyledPaneSplitterProps & ThemeProps<DefaultTheme>) => {
  const color = getColorV8('neutralHue', 300, props.theme);
  const hoverColor = getColorV8('primaryHue', 600, props.theme);
  const activeColor = getColorV8('primaryHue', 800, props.theme);

  return css`
    &::before {
      background-color: ${color};
    }

    &:hover::before {
      background-color: ${hoverColor};
    }

    ${focusStyles({
      theme: props.theme,
      hue: hoverColor,
      styles: {
        backgroundColor: hoverColor
      },
      selector: '&:focus-visible::before, &[data-garden-focus-visible="true"]::before'
    })}

    &:active::before {
      background-color: ${activeColor};
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
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
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
      ${dimensionProperty}: ${separatorSize};
    }

    &:focus::before,
    &:focus-visible::before,
    &[data-garden-focus-visible]::before {
      ${dimensionProperty}: ${separatorSize};
    }

    &:focus-visible::before,
    &[data-garden-focus-visible]::before {
      border-radius: ${props.theme.borderRadii.md};
    }
  `;
};

/**
 * 1. Elevated initial context to pickup full-width hover
 * 2. Stack below splitter button.
 * 3. Stack above other splitters when focused
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

  ${SELECTOR_FOCUS_VISIBLE} {
    z-index: 2; /* [3] */
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
