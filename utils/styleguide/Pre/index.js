/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import PreRenderer from 'react-styleguidist/lib/rsg-components/Markdown/Pre/PreRenderer';
import { palette } from '../../../packages/theming/src';

const PreWrapper = styled.div`
  border-radius: 3px;
  background-color: ${props => (props.dark ? palette.kale[200] : palette.grey[100])};
  color: ${palette.grey[800]};
`;

const Pre = props => {
  const dark = location.search.indexOf('dark') !== -1;

  return (
    <PreWrapper dark={dark}>
      <PreRenderer {...props} />
    </PreWrapper>
  );
};

export default Pre;
