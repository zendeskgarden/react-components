/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { keyframes, css, ThemeProps, DefaultTheme } from 'styled-components';
import { rgba } from 'polished';
import {
  DEFAULT_THEME,
  retrieveComponentStyles,
  getColor,
  getLineHeight
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'loaders.skeleton';

const fadeInAnimation = keyframes`
  0%, 60% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const skeletonAnimation = keyframes`
  100% {
    left: 100%;
  }
`;

const skeletonRtlAnimation = keyframes`
  100% {
    right: 100%;
  }
`;

const retrieveSkeletonBackgroundColor = ({
  theme,
  isLight
}: IStyledSkeletonProps & ThemeProps<DefaultTheme>) => {
  if (isLight) {
    return css`
      background-color: ${rgba(theme.colors.background, 0.2)};
    `;
  }

  return css`
    background-color: ${getColor('neutralHue', 800, theme, 0.1)};
  `;
};

interface IStyledSkeletonProps {
  width?: string;
  height?: string;
  isLight?: boolean;
  customWidth?: string;
  customHeight?: string;
}

const retrieveSkeletonAnimation = ({ theme }: ThemeProps<DefaultTheme>) => {
  if (theme.rtl) {
    return css`
      right: -1800px;
      animation: ${skeletonRtlAnimation} 1.5s ease-in-out 300ms infinite;
    `;
  }

  return css`
    left: -1800px;
    animation: ${skeletonAnimation} 1.5s ease-in-out 300ms infinite;
  `;
};

const retrieveSkeletonGradient = ({
  theme,
  isLight
}: IStyledSkeletonProps & ThemeProps<DefaultTheme>) => {
  // Disabling stylelint due to conflicts with prettier and linear-gradient formatting
  return css`
    /* stylelint-disable */
    background-image: linear-gradient(
      ${theme.rtl ? '-45deg' : '45deg'},
      transparent,
      ${isLight ? getColor('chromeHue', 700, theme, 0.4) : rgba(theme.colors.background, 0.6)},
      transparent
    );
    /* stylelint-enable */
  `;
};

export const StyledSkeleton = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSkeletonProps>`
  display: inline-block;
  position: relative;
  animation: ${fadeInAnimation} 750ms linear;
  border-radius: ${props => props.theme.borderRadii.md};
  width: ${props => props.customWidth};
  height: ${props => props.customHeight};
  overflow: hidden;
  line-height: ${props => getLineHeight(props.theme.fontSizes.sm, props.theme.space.base * 5)};

  ${retrieveSkeletonBackgroundColor}

  &::before {
    position: absolute;
    top: 0;
    width: 1000px;
    height: 100%;
    content: '';

    ${retrieveSkeletonAnimation}
    ${retrieveSkeletonGradient}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSkeleton.defaultProps = {
  theme: DEFAULT_THEME
};
