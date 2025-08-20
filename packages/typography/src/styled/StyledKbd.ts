/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math, stripUnit } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledCode } from './StyledCode';
import { IKbdProps } from '../types';

const COMPONENT_ID = 'typography.code';

interface IStyledKbdProps extends ThemeProps<DefaultTheme> {
  $size?: IKbdProps['size'];
}

const sizeStyles = ({ theme, $size }: IStyledKbdProps) => {
  let paddingHorizontal;
  let paddingVertical = '0';

  switch ($size) {
    case 'small':
      paddingHorizontal = `${theme.space.base}px`;
      break;

    case 'medium':
      paddingHorizontal = `${theme.space.base * 1.5}px`;
      break;

    case 'large':
      paddingHorizontal = `${theme.space.base * 1.75}px`;
      break;

    default:
      paddingHorizontal = `${stripUnit(math(`${theme.space.base * 1.5} / (${theme.fontSizes.md} - 1px)`))}em`;
      paddingVertical = '1.5px';
      break;
  }

  const padding = `${paddingVertical} ${paddingHorizontal}`;

  return css`
    && {
      padding: ${padding};
    }
  `;
};

/*
 * 1. Force left-to-right text direction
 */
export const StyledKbd = styled(StyledCode as 'kbd').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'kbd'
})<IStyledKbdProps>`
  display: inline-block; /* [1] */
  direction: ltr; /* [1] */

  ${sizeStyles};

  ${componentStyles};
`;
