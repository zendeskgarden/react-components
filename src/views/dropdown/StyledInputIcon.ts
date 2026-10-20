/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, ThemeProps, DefaultTheme, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import { getHeight as getInputHeight } from './StyledInput';
import { StyledTrigger } from './StyledTrigger';

interface IStyledInputIconProps extends ThemeProps<DefaultTheme> {
  $isCompact?: boolean;
  $isDisabled?: boolean;
  $isEnd?: boolean;
  $isLabelHovered?: boolean;
  $isRotated?: boolean;
}

const colorStyles = ({ theme, $isLabelHovered }: IStyledInputIconProps) => {
  const options = { theme, variable: 'foreground.subtle' };
  const color = getColor(options);
  const focusColor = getColor({ ...options, dark: { offset: -100 }, light: { offset: 100 } });
  const disabledColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    color: ${$isLabelHovered ? focusColor : color};

    ${StyledTrigger}:hover &&,
    ${StyledTrigger}:focus-within &&,
    ${StyledTrigger}:focus && {
      color: ${focusColor};
    }

    ${StyledTrigger}[aria-disabled='true'] && {
      color: ${disabledColor};
    }
  `;
};

const sizeStyles = (props: IStyledInputIconProps) => {
  /* the v10 glyphs render at their native 20px size */
  const size = `${props.theme.space.base * 5}px`;
  const position = math(`(${getInputHeight(props)} - ${size}) / 2`);
  const margin = `${props.theme.space.base * 2}px`;
  let side;

  if (props.$isEnd) {
    side = props.theme.rtl ? 'right' : 'left';
  } else {
    side = props.theme.rtl ? 'left' : 'right';
  }

  return css`
    top: ${position};
    margin-${side}: ${margin}; 
    width: ${size};
    height: ${size};
  `;
};

export const StyledInputIcon = styled(StyledBaseIcon)<IStyledInputIconProps>`
  position: sticky;
  flex-shrink: 0;
  transform: ${props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  /* prettier-ignore */
  transition:
    transform 0.25s ease-in-out,
    color 0.25s ease-in-out;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
