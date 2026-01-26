/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import { math, stripUnit } from 'polished';
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import { IKbdProps } from '../types';
import { StyledCode } from './StyledCode';

const COMPONENT_ID = 'typography.kbd';

interface IStyledKbdProps extends ThemeProps<DefaultTheme> {
  $size?: IKbdProps['size'];
}

const sizeStyles = ({ theme, $size }: IStyledKbdProps) => {
  let minWidth;
  let paddingHorizontal;
  let paddingVertical = '0';

  switch ($size) {
    case 'small':
      minWidth = math(`${theme.lineHeights.sm} - 1px`);
      paddingHorizontal = `${theme.space.base}px`;
      break;

    case 'medium':
      minWidth = math(`${theme.lineHeights.md} - 1px`);
      paddingHorizontal = `${theme.space.base * 1.5}px`;
      break;

    case 'large':
      minWidth = math(`${theme.lineHeights.lg} - 1px`);
      paddingHorizontal = `${theme.space.base * 1.75}px`;
      break;

    default:
      minWidth = 'calc(1.2em + 3px)'; // "normal" line-height + vertical padding
      paddingHorizontal = `${stripUnit(math(`${theme.space.base * 1.5} / (${theme.fontSizes.md} - 1px)`))}em`;
      paddingVertical = '1.5px';
      break;
  }

  const padding = `${paddingVertical} ${paddingHorizontal}`;

  return css`
    && {
      box-sizing: border-box;
      padding: ${padding};
      min-width: ${minWidth};
    }
  `;
};

/*
 * 1. Force left-to-right text direction
 * 2. Prevent the monospace stack fallback, which doesn't render individual
 *    keyboard characters well
 */
export const StyledKbd = styled(StyledCode as 'kbd').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'kbd'
})<IStyledKbdProps>`
  display: inline-block; /* [1] */
  direction: ltr; /* [1] */
  text-align: center;
  font-family: sans-serif; /* [2] */

  ${sizeStyles};

  ${componentStyles};
`;
