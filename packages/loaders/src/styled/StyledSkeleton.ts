/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { keyframes, css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  DEFAULT_THEME,
  retrieveComponentStyles,
  getLineHeight,
  getColor
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
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const skeletonRtlAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%)
  }
`;

interface IStyledSkeletonProps {
  width?: string;
  height?: string;
  isLight?: boolean;
  customWidth?: string;
  customHeight?: string;
}

const getBackgroundColor = ({
  theme,
  isLight
}: IStyledSkeletonProps & ThemeProps<DefaultTheme>) => {
  let backgroundColor;

  if (isLight) {
    backgroundColor = getColor({
      theme,
      hue: 'white',
      transparency: theme.opacity[200]
    });
  } else {
    backgroundColor = getColor({
      theme,
      hue: 'neutralHue',
      transparency: theme.opacity[200],
      light: { shade: 700 },
      dark: { shade: 500 }
    });
  }
  return backgroundColor;
};

const animationStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  if (theme.rtl) {
    return css`
      animation: ${skeletonRtlAnimation} 1.5s ease-in-out 300ms infinite;
    `;
  }

  return css`
    animation: ${skeletonAnimation} 1.5s ease-in-out 300ms infinite;
  `;
};

const gradienStyles = (props: IStyledSkeletonProps & ThemeProps<DefaultTheme>) => {
  return css`
    background-image: linear-gradient(
      ${props.theme.rtl ? '-45deg' : '45deg'},
      transparent,
      ${getBackgroundColor},
      transparent
    );
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
  background-color: ${getBackgroundColor};
  width: ${props => props.customWidth};
  height: ${props => props.customHeight};
  overflow: hidden;
  line-height: ${props => getLineHeight(props.theme.fontSizes.sm, props.theme.space.base * 5)};

  &::before {
    position: absolute;
    top: 0;
    width: 1000px;
    height: 100%;
    content: '';

    ${animationStyles}
    ${gradienStyles}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSkeleton.defaultProps = {
  theme: DEFAULT_THEME
};
