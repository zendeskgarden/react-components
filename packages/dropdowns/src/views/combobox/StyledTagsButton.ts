/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledValue } from './StyledValue';

const COMPONENT_ID = 'dropdowns.combobox.tags_button';

interface IStyledTagsButtonProps extends ThemeProps<DefaultTheme> {
  $isCompact?: boolean;
}

const colorStyles = ({ theme }: IStyledTagsButtonProps) => {
  const color = getColor({ theme, variable: 'foreground.primary' });

  return css`
    color: ${color};

    &:disabled {
      color: inherit;
    }
  `;
};

/*
 * 1. StyledValue override.
 * 2. Button reset.
 */
export const StyledTagsButton = styled(StyledValue as 'button').attrs({
  as: 'button',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTagsButtonProps>`
  display: inline-flex;
  flex: 0 1 auto; /* [1] */
  align-items: center;
  border: none; /* [2] */
  background-color: transparent; /* [2] */
  cursor: pointer;
  min-width: auto; /* [1] */
  font-family: inherit; /* [2] */

  &:hover {
    text-decoration: underline;
  }

  ${colorStyles};

  &:disabled {
    cursor: default;
    text-decoration: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
