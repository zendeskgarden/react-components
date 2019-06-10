import React from 'react';
import styled from 'styled-components';
import { zdSpacingLg } from '@zendeskgarden/css-variables';
import {
  Chrome,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  Body,
  Content,
  Main
} from '@zendeskgarden/react-chrome';

import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';

const PaddedMain = styled(Main)`
  padding: ${zdSpacingLg};
`;

const ExampleWrapper = ({ children }) => (
  <Chrome>
    <Nav expanded>
      <NavItem logo title="Zendesk Garden Code Sample">
        <NavItemIcon>
          <ZendeskIcon />
        </NavItemIcon>
        <NavItemText>Zendesk Connect</NavItemText>
      </NavItem>
      <NavItem title="Home" current>
        <NavItemIcon>
          <HomeIcon />
        </NavItemIcon>
        <NavItemText>Home</NavItemText>
      </NavItem>
      <NavItem brandmark title="&copy;Zendesk">
        <NavItemIcon>
          <ZendeskIcon />
        </NavItemIcon>
        <NavItemText>&copy;Zendesk</NavItemText>
      </NavItem>
    </Nav>
    <Body>
      <Content>
        <PaddedMain>{children}</PaddedMain>
      </Content>
    </Body>
  </Chrome>
);

export default ExampleWrapper;
