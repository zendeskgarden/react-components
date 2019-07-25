/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import StyleGuideRenderer from 'react-styleguidist/lib/rsg-components/StyleGuide/StyleGuideRenderer';
import { DEFAULT_THEME, PALETTE } from '../../../packages/theming/src';

const StyleGuideWrapper = styled.div`
  background-color: ${props => (props.dark ? PALETTE.kale[800] : PALETTE.white)};
  color: ${props => (props.dark ? PALETTE.white : PALETTE.grey[800])};
  font-family: ${DEFAULT_THEME.fonts.system};
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
