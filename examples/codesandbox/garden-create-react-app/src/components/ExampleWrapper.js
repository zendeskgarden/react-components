import React from 'react';
import styled from 'styled-components';
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
  padding: ${props => props.theme.space.lg};
`;

const ExampleWrapper = ({ children }) => (
  <Chrome>
    <Nav isExpanded>
      <NavItem hasLogo title="Zendesk Garden Code Sample">
        <NavItemIcon>
          <ZendeskIcon />
        </NavItemIcon>
        <NavItemText>Zendesk Connect</NavItemText>
      </NavItem>
      <NavItem title="Home" isCurrent>
        <NavItemIcon>
          <HomeIcon />
        </NavItemIcon>
        <NavItemText>Home</NavItemText>
      </NavItem>
      <NavItem hasBrandmark title="&copy;Zendesk">
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
