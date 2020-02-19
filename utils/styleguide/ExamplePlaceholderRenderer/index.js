/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import ExamplePlaceholderRenderer from 'react-styleguidist/lib/rsg-components/ExamplePlaceholder/ExamplePlaceholderRenderer';

const ExamplePlaceholderWrapper = styled.div`
  display: none;
`;

const ExamplePlaceholder = () => (
  <ExamplePlaceholderWrapper>
    <ExamplePlaceholderRenderer />
  </ExamplePlaceholderWrapper>
);

export default ExamplePlaceholder;
