/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, HTMLAttributes, PropsWithChildren } from 'react';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.media_figure';

interface IStyledMediaFigureProps extends HTMLAttributes<HTMLDivElement> {
  isCompact?: boolean;
}

export const getMediaFigureSize = (props: IStyledMediaFigureProps & ThemeProps<DefaultTheme>) => {
  if (props.isCompact) {
    return `${props.theme.space.base * 6}px`;
  }

  return `${props.theme.space.base * 8}px`;
};

export const StyledMediaFigure = styled(
  /* eslint-disable @typescript-eslint/no-unused-vars */
  ({
    children,
    isCompact,
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
  margin-top: ${props => !props.isCompact && '1px'};
  /* stylelint-disable-next-line property-no-unknown */
  margin-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
  props.isCompact ? props.theme.space.base : props.theme.space.base * 2}px;
  width: ${props => getMediaFigureSize(props)};
  height: ${props => getMediaFigureSize(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMediaFigure.defaultProps = {
  theme: DEFAULT_THEME
};
