/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { math } from 'polished';
import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming';
import { Well } from '@zendeskgarden/react-notifications';

const StyledTheme = styled.pre`
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => math(`${props.theme.fontSizes.sm} - 1px`)};
`;

const replacer = (key: any, value: any) => {
  let retVal = value;

  if (typeof value === 'function') {
    const fn = value.toString();
    const start = fn.indexOf('(');
    const end = fn.indexOf(')') + 1;

    retVal = `${fn.substring(start, end)} => expression`;
  }

  return retVal;
};

export const DefaultThemeExample = () => (
  <ThemeProvider>
    <Well isRecessed>
      <StyledTheme>{JSON.stringify(DEFAULT_THEME, replacer, '  ')}</StyledTheme>
    </Well>
  </ThemeProvider>
);
