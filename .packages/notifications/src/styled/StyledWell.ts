/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled, { ThemeProps, css, DefaultTheme } from 'styled-components';

import { StyledBase } from './StyledBase';

const COMPONENT_ID = 'notifications.well';

export interface IStyledWellProps {
  $isRecessed?: boolean;
  $isFloating?: boolean;
}

const colorStyles = ({
  theme,
  $isFloating,
  $isRecessed
}: IStyledWellProps & ThemeProps<DefaultTheme>) => {
  let backgroundVariable;

  if ($isRecessed) {
    backgroundVariable = 'background.recessed';
  } else if ($isFloating) {
    backgroundVariable = 'background.raised';
  } else {
    backgroundVariable = 'background.default';
  }

  const foreground = getColor({ variable: 'foreground.subtle', theme });
  const background = getColor({ variable: backgroundVariable, theme });

  return css`
    background-color: ${background};
    color: ${foreground};
  `;
};

/**
 * Supports all `<div>` props
 */
export const StyledWell = styled(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledWellProps>`
  ${colorStyles}

  ${componentStyles};
`;
