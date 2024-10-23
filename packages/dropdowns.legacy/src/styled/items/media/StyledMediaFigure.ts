/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, HTMLAttributes, PropsWithChildren } from 'react';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.media_figure';

interface IStyledMediaFigureProps extends HTMLAttributes<HTMLDivElement> {
  $isCompact?: boolean;
}

/**
 * 1. Override default Avatar styling
 */
export const StyledMediaFigure = styled(
  /* eslint-disable @typescript-eslint/no-unused-vars */
  ({
    children,
    $isCompact,
    theme,
    ...props
  }: PropsWithChildren<IStyledMediaFigureProps & ThemeProps<DefaultTheme>>) =>
    /* eslint-enable @typescript-eslint/no-unused-vars */
    React.cloneElement(Children.only(children as any), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledMediaFigureProps>`
  float: ${props => (props.theme.rtl ? 'right' : 'left')};
  /* stylelint-disable declaration-no-important */
  margin-top: ${props => props.theme.space.base * 0.5}px !important; /* [1] */
  /* stylelint-enable declaration-no-important */
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
