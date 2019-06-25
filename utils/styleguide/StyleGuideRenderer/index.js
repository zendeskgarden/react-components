/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import StyleGuideRenderer from 'react-styleguidist/lib/rsg-components/StyleGuide/StyleGuideRenderer';

const { zdColorGrey800, zdColorKale800, zdColorWhite } = require('@zendeskgarden/css-variables');

const StyleGuideWrapper = styled.div`
  background-color: ${props => (props.dark ? zdColorKale800 : zdColorWhite)};
  color: ${props => (props.dark ? zdColorWhite : zdColorGrey800)};
`;

const StyleGuide = props => {
  const dark = location.search.indexOf('dark') !== -1;

  return (
    <StyleGuideWrapper dark={dark}>
      <StyleGuideRenderer {...props} />
    </StyleGuideWrapper>
  );
};

export default StyleGuide;
