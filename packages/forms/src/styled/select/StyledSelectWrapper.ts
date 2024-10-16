/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { SELECTOR_FOCUS_VISIBLE } from '@zendeskgarden/react-theming';
import { IStyledTextFauxInputProps, StyledTextFauxInput } from '../text/StyledTextFauxInput';
import { StyledSelect } from './StyledSelect';

const COMPONENT_ID = 'forms.select_wrapper';

/*
 * 1. Prevent a 2px height bump between `Select` and `Input` due to the faux wrapper border
 */
const sizeStyles = ({
  theme,
  $isCompact
}: IStyledTextFauxInputProps & ThemeProps<DefaultTheme>) => {
  const height = `${theme.space.base * ($isCompact ? 8 : 10)}px`;

  return css`
    max-height: ${height}; /* [1] */
  `;
};

export const StyledSelectWrapper = styled(StyledTextFauxInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: relative;
  padding: 0;
  overflow: visible;

  ${sizeStyles};

  & > ${StyledSelect} {
    border-color: transparent;
    background-color: transparent;

    ${SELECTOR_FOCUS_VISIBLE} {
      box-shadow: unset; /* [1] */
    }
  }
`;
