/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { ISegmentedControlProps } from '../../types/elements';
import type { WithTheme } from '../../types/views';
import { getOverlayColor } from './getOverlayColor';

interface IStyledSegmentedControlProps {
  $isFullWidth?: ISegmentedControlProps['isFullWidth'];
}

const colorStyles = ({ theme }: WithTheme<IStyledSegmentedControlProps>) => {
  const backgroundColor = getOverlayColor(theme, theme.opacity[100]);
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

const sizeStyles = ({ theme, $isFullWidth }: WithTheme<IStyledSegmentedControlProps>) => {
  const padding = theme.space.base / 2;

  return css`
    grid-auto-columns: ${$isFullWidth ? 'minmax(max-content, 1fr)' : 'max-content'};
    border-radius: ${theme.borderRadii.full};
    padding: ${padding}px;
    width: ${$isFullWidth ? '100%' : 'max-content'};
    min-width: max-content;
    line-height: ${theme.lineHeights.md};
    font-size: ${theme.fontSizes.md};
  `;
};

/*
 * `isolation` creates a stacking context so the pill and segment z-indexes
 * stay inside the control.
 */
export const StyledSegmentedControl = styled.div<WithTheme<IStyledSegmentedControlProps>>`
  display: inline-grid;
  grid-auto-flow: column;
  position: relative;
  isolation: isolate;
  box-sizing: border-box;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
  font-family: ${props => props.theme.fonts.system};

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
