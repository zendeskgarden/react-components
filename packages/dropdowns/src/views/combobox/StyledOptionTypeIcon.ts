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
import { StyledOption, getMinHeight as getOptionMinHeight } from './StyledOption';
import { OptionType } from '../../types';

const COMPONENT_ID = 'dropdowns.combobox.option.type_icon';

export interface IStyledOptionTypeIconProps extends ThemeProps<DefaultTheme> {
  $isCompact?: boolean;
  $type?: OptionType | 'header';
}

const colorStyles = ({ theme, $type }: IStyledOptionTypeIconProps) => {
  const opacity = $type && $type !== 'danger' ? 1 : 0;
  let color;

  if ($type === 'add' || $type === 'danger') {
    color = 'inherit';
  } else if ($type === 'header' || $type === 'next' || $type === 'previous') {
    color = getColor({ theme, variable: 'foreground.subtle' });
  } else {
    color = getColor({ theme, variable: 'foreground.primary' });
  }

  return css`
    opacity: ${opacity};
    color: ${color};

    /* stylelint-disable-next-line */
    ${StyledOption}[aria-selected='true'] > & {
      opacity: 1;
    }

    /* stylelint-disable-next-line */
    ${StyledOption}[aria-disabled='true'] > & {
      color: inherit;
    }
  `;
};

const sizeStyles = (props: IStyledOptionTypeIconProps) => {
  const size = props.theme.iconSizes.md;
  const position = `${props.theme.space.base * 3}px`;
  const top = math(`(${getOptionMinHeight(props)} - ${size}) / 2`);
  let side;

  if (props.$type === 'next') {
    side = props.theme.rtl ? 'left' : 'right';
  } else {
    side = props.theme.rtl ? 'right' : 'left';
  }

  return css`
    top: ${top};
    ${side}: ${position};
    width: ${size};
    height: ${size};
  `;
};

export const StyledOptionTypeIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOptionTypeIconProps>`
  position: absolute;
  transform: ${props =>
    props.theme.rtl && (props.$type === 'next' || props.$type === 'previous') && 'rotate(180deg)'};
  transition: opacity 0.1s ease-in-out;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledOptionTypeIcon.defaultProps = {
  theme: DEFAULT_THEME
};
