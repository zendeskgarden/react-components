/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, keyframes, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import {
  componentStyles,
  getLineHeight,
  focusStyles,
  SELECTOR_FOCUS_VISIBLE,
  getColor
} from '@zendeskgarden/react-theming';
import { getHeaderHeight } from './utils';

const COMPONENT_ID = 'chrome.skipnav';

const animationStyles = () => {
  const animationName = keyframes`
    0% {
      transform: translate(-50%, -50%);
    }
  `;

  return css`
    transition:
      opacity 0.2s ease-out,
      clip 0s linear 0.2s;
    opacity: 0;
    clip: rect(0, 0, 0, 0);

    &:focus {
      transition: opacity 0.2s ease-in-out;
      animation: 0.2s cubic-bezier(0.15, 0.85, 0.35, 1.2) ${animationName};
      opacity: 1;
      clip: rect(0, 150vw, 100vh, -50vw);
    }
  `;
};

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor({ theme, variable: 'background.raised' });
  const borderColor = getColor({ theme, variable: 'border.default' });
  const boxShadowColor = getColor({ variable: 'shadow.medium', theme });
  const boxShadow = theme.shadows.lg(
    `${theme.space.base * 4}px`,
    `${theme.space.base * 6}px`,
    boxShadowColor
  );
  const foregroundColor = getColor({ theme, variable: 'foreground.primary' });

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &:hover,
    &:focus {
      color: ${foregroundColor};
    }

    ${focusStyles({
      theme,
      inset: true,
      boxShadow
    })}
  `;
};

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const top = math(`${getHeaderHeight(theme)} / 2`);
  const border = theme.borders.sm;
  const padding = `${theme.space.base * 5}px`;
  const paddingStart = `${theme.space.base * 4}px`;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(padding, fontSize);

  return css`
    top: ${top};
    border: ${border};
    padding: ${padding};
    padding-${theme.rtl ? 'right' : 'left'}: ${paddingStart};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

interface IStyledSkipNavProps {
  $zIndex?: number;
}

/*
 * 1. breaking LVHFA order for `<a>` to underline when focused and hovered
 */
export const StyledSkipNav = styled.a.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSkipNavProps>`
  ${animationStyles()};

  display: inline-flex;
  position: absolute;
  left: 50%;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  direction: ${props => props.theme.rtl && 'rtl'};
  z-index: ${props => props.$zIndex};
  border-radius: ${props => props.theme.borderRadii.md};
  text-decoration: underline;
  white-space: nowrap;

  ${sizeStyles};

  ${SELECTOR_FOCUS_VISIBLE} {
    text-decoration: none;
  }

  /* [1] */
  &:hover {
    text-decoration: underline;
  }

  ${colorStyles};

  ${componentStyles};
`;
