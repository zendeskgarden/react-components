/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math, rgba } from 'polished';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { ORIENTATION } from '../../types';

const COMPONENT_ID = 'pane.splitter';

interface IStyledPaneSplitterProps {
  orientation: ORIENTATION;
}

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const color = getColor('neutralHue', 300, props.theme);
  const hoverColor = getColor('primaryHue', 600, props.theme);
  const activeColor = getColor('primaryHue', 800, props.theme);
  const boxShadow = props.theme.shadows.md(rgba(hoverColor!, 0.35));

  return css`
    &::before {
      background-color: ${color};
    }

    &:hover::before,
    &[data-garden-focus-visible]::before {
      background-color: ${hoverColor};
    }

    &[data-garden-focus-visible]::before {
      box-shadow: ${boxShadow};
    }

    &:active::before {
      background-color: ${activeColor};
    }
  `;
};

const sizeStyles = (props: IStyledPaneSplitterProps & ThemeProps<DefaultTheme>) => {
  const size = math(`${props.theme.shadowWidths.md} * 2`);
  const margin = `-${props.theme.shadowWidths.md}`;
  let cursor;
  let marginTop = '0';
  let marginRight = '0';
  let marginLeft = '0';
  let marginBottom = '0';
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
      marginTop = margin;
      top = 0;
      width = '100%';
      height = size;
      separatorWidth = width;
      separatorHeight = props.theme.borderWidths.sm;

      break;

    case 'end':
      cursor = 'col-resize';
      top = 0;
      width = size;
      height = '100%';
      separatorWidth = props.theme.borderWidths.sm;
      separatorHeight = height;

      if (props.theme.rtl) {
        left = 0;
        marginLeft = margin;
      } else {
        right = 0;
        marginRight = margin;
      }

      break;

    case 'bottom':
      cursor = 'row-resize';
      marginBottom = margin;
      bottom = 0;
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
        right = 0;
        marginRight = margin;
      } else {
        left = 0;
        marginLeft = margin;
      }

      break;
  }

  return css`
    display: flex;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft};
    cursor: ${cursor};
    width: ${width};
    height: ${height};

    &::before {
      margin: auto;
      width: ${separatorWidth};
      height: ${separatorHeight};
    }

    &:hover::before,
    &[data-garden-focus-visible]::before,
    &:focus::before {
      ${width === '100%' ? 'height' : 'width'}: ${math(`${props.theme.borderWidths.sm} * 2`)};
    }

    &[data-garden-focus-visible]::before {
      border-radius: ${props.theme.borderRadii.md};
    }
  `;
};

export const StyledPaneSplitter = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledPaneSplitterProps>`
  position: absolute;

  ${sizeStyles};

  &:hover,
  &[data-garden-focus-visible] {
    z-index: 1;
  }

  &:focus {
    outline: none;
  }

  &::before {
    display: block;
    content: '';
  }

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPaneSplitter.defaultProps = {
  theme: DEFAULT_THEME
};
