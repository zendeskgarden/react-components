import React from 'react';
import styled from 'styled-components';
import {
  Chrome,
  Body,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  Content,
  Main
} from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';

import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';

const PaddedMain = styled(Main)`
  padding: ${props => props.theme.space.lg};
`;

const ExampleWrapper = ({ children }) => (
  <Chrome>
    <Body>
      <Header isStandalone>
        <HeaderItem hasLogo style={{ color: PALETTE.green[400] }}>
          <HeaderItemIcon>
            <ProductIcon />
          </HeaderItemIcon>
          <HeaderItemText>Zendesk Garden</HeaderItemText>
        </HeaderItem>
      </Header>
      <Content>
        <PaddedMain>{children}</PaddedMain>
      </Content>
    </Body>
  </Chrome>
);

export default ExampleWrapper;
