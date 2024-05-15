/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  StyledBaseIcon,
  getColor
} from '@zendeskgarden/react-theming';
import { getHeight as getInputHeight } from './StyledInput';
import { StyledTrigger } from './StyledTrigger';

const COMPONENT_ID = 'dropdowns.combobox.input_icon';

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
  const focusColor = getColor({ ...options, dark: { offset: -100 }, light: { offset: +100 } });
  const disabledColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    color: ${$isLabelHovered ? focusColor : color};

    /* stylelint-disable selector-no-qualifying-type */
    ${StyledTrigger}:hover &,
    ${StyledTrigger}:focus-within &,
    ${StyledTrigger}:focus & {
      color: ${focusColor};
    }
    /* stylelint-enable selector-no-qualifying-type */

    /* stylelint-disable-next-line */
    ${StyledTrigger}[aria-disabled='true'] & {
      color: ${disabledColor};
    }
  `;
};

const sizeStyles = (props: IStyledInputIconProps) => {
  const size = props.theme.iconSizes.md;
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
    /* stylelint-disable-next-line */
    margin-${side}: ${margin}; 
    width: ${size};
    height: ${size};
  `;
};

export const StyledInputIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInputIconProps>`
  position: sticky;
  flex-shrink: 0;
  transform: ${props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  /* prettier-ignore */
  transition:
    transform 0.25s ease-in-out,
    color 0.25s ease-in-out;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInputIcon.defaultProps = {
  theme: DEFAULT_THEME
};
