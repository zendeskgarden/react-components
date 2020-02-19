/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { PALETTE } from '../../../packages/theming/src';
import GardenLogo from '@zendeskgarden/svg-icons/src/26/garden.svg';

const LogoWrapper = styled.div`
  text-align: center;
  color: ${PALETTE.green[400]};
`;

const LogoRenderer = () => (
  <div role="navigation">
    <a href="/" aria-label="Garden Homepage">
      <LogoWrapper>
        <GardenLogo />
      </LogoWrapper>
    </a>
  </div>
);

export default LogoRenderer;
