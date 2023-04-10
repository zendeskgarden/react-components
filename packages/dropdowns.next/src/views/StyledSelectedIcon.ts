/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledItem, getMinHeight as getItemMinHeight } from './StyledItem';
import { Children, cloneElement } from 'react';

const COMPONENT_ID = 'dropdowns.item.selected_icon';

interface IStyledSelectedIconProps extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
}

const colorStyles = (props: IStyledSelectedIconProps) => {
  const color = getColor('primaryHue', 600, props.theme);

  return css`
    color: ${color};

    /* stylelint-disable-next-line */
    ${StyledItem}[aria-disabled='true'] > & {
      color: inherit;
    }
  `;
};

const sizeStyles = (props: IStyledSelectedIconProps) => {
  const size = props.theme.iconSizes.md;
  const position = `${props.theme.space.base * 3}px`;
  const top = math(`(${getItemMinHeight(props)} - ${size}) / 2`);

  return css`
    top: ${top};
    ${props.theme.rtl ? 'right' : 'left'}: ${position};
    width: ${size};
    height: ${size};
  `;
};

export const StyledSelectedIcon = styled(
  ({
    children,
    /* eslint-disable @typescript-eslint/no-unused-vars */
    theme,
    ...props
  }) => cloneElement<SVGElement>(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSelectedIconProps>`
  position: absolute;
  transition: opacity 0.1s ease-in-out;
  opacity: 0;

  ${sizeStyles};

  ${colorStyles};

  /* stylelint-disable-next-line */
  ${StyledItem}[aria-selected='true'] > & {
    opacity: 1;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSelectedIcon.defaultProps = {
  theme: DEFAULT_THEME
};
