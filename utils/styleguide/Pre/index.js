/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import PreRenderer from 'react-styleguidist/lib/rsg-components/Markdown/Pre/PreRenderer';

const { zdColorGrey100, zdColorGrey800, zdColorKale200 } = require('@zendeskgarden/css-variables');

const PreWrapper = styled.div`
  border-radius: 3px;
  background-color: ${props => (props.dark ? zdColorKale200 : zdColorGrey100)};
  color: ${zdColorGrey800};
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
