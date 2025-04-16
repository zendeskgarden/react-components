/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { componentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

const COMPONENT_ID = '{{pluralize (lowercase component)}}.{{lowercase component}}';

export interface IStyled{{capitalize component}}Props extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
}

const colorStyles = (props: IStyled{{capitalize component}}Props) => {
  const backgroundColor = getColorV8('primaryHue', 600, props.theme, 0.08);
  const borderColor = getColorV8('primaryHue', 600, props.theme);
  const foregroundColor = getColorV8('foreground', 600 /* default shade */, props.theme);
  const hoverBackgroundColor = getColorV8('primaryHue', 600, props.theme, 0.2);
  const focusBoxShadow = props.theme.shadows.md(
    getColorV8('primaryHue', 600, props.theme, 0.35) as string
  );

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &:hover {
      background-color: ${hoverBackgroundColor};
    }

    &[data-garden-focus-visible='true'] {
      box-shadow: ${focusBoxShadow};
    }
  `;
};

const sizeStyles = (props: IStyled{{capitalize component}}Props) => {
  const size = `${props.theme.space.base * (props.isCompact ? 30 : 50)}px`;
  const padding = `${props.theme.space.base * (props.isCompact ? 4 : 5)}px`;

  return css`
    padding: ${padding};
    width: ${size};
    height: ${size};
  `;
};

export const Styled{{capitalize component}} = styled.div.attrs<IStyled{{capitalize component}}Props>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyled{{capitalize component}}Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s ease-in-out;
  direction: ${props => props.theme.rtl && 'rtl'};
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => props.theme.borderRadii.md};
  white-space: nowrap;
  box-sizing: border-box;

  ${sizeStyles};

  &:focus {
    outline: none;
  }

  ${colorStyles};

  & > * {
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${componentStyles};
`;

Styled{{capitalize component}}.defaultProps = {
  theme: DEFAULT_THEME
};
