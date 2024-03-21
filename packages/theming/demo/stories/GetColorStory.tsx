/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import { DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

interface IArgs {
  hue: string;
  shade: number;
  transparency?: number;
}

const StyledDiv = styled.div<IArgs>`
  background-color: ${props =>
    getColorV8(
      props.hue,
      props.shade,
      DEFAULT_THEME,
      props.transparency ? props.transparency / 100 : undefined
    )};
  height: 208px;
`;

export const getColorV8Story: Story<IArgs> = args => <StyledDiv {...args} />;
