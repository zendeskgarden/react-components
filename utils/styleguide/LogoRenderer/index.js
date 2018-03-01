import React from 'react';
import styled from 'styled-components';
import { zdColorAlgae } from '@zendesk/garden-css-variables';
import ZendeskLogo from '@zendesk/garden-svg-icons/src/26-zendesk.svg';

const LogoWrapper = styled.div`
  text-align: center;
  color: ${zdColorAlgae};
`;

const LogoRenderer = () => (
  <a href="/react-components/next">
    <LogoWrapper>
      <ZendeskLogo />
    </LogoWrapper>
  </a>
);

export default LogoRenderer;
