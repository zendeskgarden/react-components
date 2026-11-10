/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { stripUnit } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';

interface IStyledTabProps {
  $isSelected?: boolean;
  $isVertical?: boolean;
}

const colorStyles = ({ theme }: WithTheme<IStyledTabProps>) => {
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });
  const hoverColor = getColor({
    theme,
    variable: 'foreground.default',
    light: { offset: -100 },
    dark: { offset: 100 }
  });
  const disabledColor = getColor({ theme, variable: 'foreground.disabled' });
  const focusColor = getColor({ theme, variable: 'border.primaryEmphasis' });

  return css`
    color: ${foregroundColor};

    &:hover {
      color: ${hoverColor};
    }

    &:focus-visible::before {
      border-color: ${focusColor};
    }

    &[aria-disabled='true'] {
      color: ${disabledColor};
    }

    @media (forced-colors: active) {
      &:focus-visible::before {
        border-color: Highlight;
      }
    }
  `;
};

/*
 * The tab is as high as its design height. The label is centered with block
 * padding, so the focus ring can wrap the label alone.
 */
const sizeStyles = ({ theme, $isVertical }: WithTheme<IStyledTabProps>) => {
  const height = theme.space.base * ($isVertical ? 8 : 10);
  const labelHeight = stripUnit(theme.lineHeights.md) as number;
  const paddingBlock = (height - labelHeight) / 2;
  const paddingInline = $isVertical ? theme.space.sm : '0';
  const ringWidth = theme.shadowWidths.sm;
  const ringInlineInset = $isVertical ? `calc(${theme.space.sm} - ${ringWidth})` : `-${ringWidth}`;

  return css`
    padding: ${paddingBlock}px ${paddingInline};
    height: ${height}px;

    &:focus-visible::before {
      inset: calc(${paddingBlock}px - ${ringWidth}) ${ringInlineInset};
      border-width: ${ringWidth};
      border-radius: calc(${theme.borderRadii.md} - ${theme.borderWidths.sm});
    }
  `;
};

/*
 * 1. Text truncation (requires `max-width`).
 * 2. Override default anchor styling
 * 3. The focus ring is drawn around the label, outside the tab padding.
 */
export const StyledTab = styled.div<WithTheme<IStyledTabProps>>`
  display: block;
  position: relative;
  transition: color 0.25s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  text-align: ${props => {
    if (props.$isVertical) {
      return props.theme.rtl ? 'right' : 'left';
    }

    return 'center';
  }};
  text-decoration: none; /* [2] */
  text-overflow: ellipsis; /* [1] */

  ${sizeStyles};

  ${colorStyles};

  &:focus {
    outline: none;
    text-decoration: none;
  }

  &:focus-visible::before {
    position: absolute; /* [3] */
    border-style: solid;
    pointer-events: none;
    content: '';
  }

  &[aria-disabled='true'] {
    cursor: default;
  }

  ${componentStyles};
`;
