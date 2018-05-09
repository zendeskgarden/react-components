import React from 'react';
import styled from 'styled-components';
import { zdColorAlgae } from '@zendeskgarden/css-variables';
import ZendeskLogo from '@zendeskgarden/svg-icons/src/26/zendesk.svg';

const LogoWrapper = styled.div`
  text-align: center;
  color: ${zdColorAlgae};
`;

const LogoRenderer = () => (
  <a href="/">
    <LogoWrapper>
      <ZendeskLogo />
    </LogoWrapper>
  </a>
);

export default LogoRenderer;
