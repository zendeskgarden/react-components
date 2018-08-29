/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { zdColorKale700 } from '@zendeskgarden/css-variables';
import ZendeskLogo from '@zendeskgarden/svg-icons/src/26/zendesk.svg';

const LogoWrapper = styled.div`
  text-align: center;
  color: ${zdColorKale700};
`;

const LogoRenderer = () => (
  <div role="navigation">
    <a href="/" aria-label="Garden Homepage">
      <LogoWrapper>
        <ZendeskLogo />
      </LogoWrapper>
    </a>
  </div>
);

export default LogoRenderer;
