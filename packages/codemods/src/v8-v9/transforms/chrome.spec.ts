/* eslint-disable jest/require-hook */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

//  https://github.com/facebook/jscodeshift/blob/main/README.md#unit-testing
// @ts-expect-error - TS7016: Could not find a declaration file for module
import { defineSnapshotTest } from 'jscodeshift/dist/testUtils';
import transform from './chrome';

describe('chromeMigrationTransform', () => {
  defineSnapshotTest(
    transform,
    undefined,
    `
import { Button } from '@zendeskgarden/react-buttons';
import { XXL, MD } from '@zendeskgarden/react-typography';
import {
  Chrome,
  Body,
  Content,
  Main,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  Footer,
  FooterItem,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
} from '@zendeskgarden/react-chrome';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';

const Component = () => {
  return (
    <Chrome>
      <Nav aria-label="chrome default example">
        <NavItem hasLogo>
          <NavItemIcon>
            <ProductIcon />
          </NavItemIcon>
          <NavItemText>Zendesk Garden</NavItemText>
        </NavItem>
      </Nav>
      <Body>
        <Header>
          <HeaderItem>
            <HeaderItemIcon>
              <MenuTrayIcon />
            </HeaderItemIcon>
            <HeaderItemText isClipped>Products</HeaderItemText>
          </HeaderItem>
        </Header>
        <Content>
          <Main>
            <XXL tag="h1">Main Content</XXL>
            <MD>Beetroot water spinach okra water chestnut ricebean pea catsear.</MD>
          </Main>
        </Content>
        <Footer>
          <FooterItem>
            <Button isPrimary>Save</Button>
          </FooterItem>
        </Footer>
      </Body>
    </Chrome>
  );
};

`,
    'Transforms Chrome following the migration guide'
  );

  defineSnapshotTest(
    transform,
    undefined,
    `
  import { Button } from '@zendeskgarden/react-buttons';
  import { XXL, MD } from '@zendeskgarden/react-typography';
  import {
  Chrome as GardenChrome,
  Body,
  Content,
  Main,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  Footer as GardenFooter,
  FooterItem,
  Nav as GardenNav,
  NavItem,
  NavItemIcon,
  NavItemText,
  } from '@zendeskgarden/react-chrome';
  import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
  import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
  
  const Component = () => {
  return (
    <GardenChrome>
      <GardenNav aria-label="chrome default example">
        <NavItem hasLogo>
          <NavItemIcon>
            <ProductIcon />
          </NavItemIcon>
          <NavItemText>Zendesk Garden</NavItemText>
        </NavItem>
      </GardenNav>
      <Body>
        <Header>
          <HeaderItem>
            <HeaderItemIcon>
              <MenuTrayIcon />
            </HeaderItemIcon>
            <HeaderItemText isClipped>Products</HeaderItemText>
          </HeaderItem>
        </Header>
        <Content>
          <Main>
            <XXL tag="h1">Main Content</XXL>
            <MD>Beetroot water spinach okra water chestnut ricebean pea catsear.</MD>
          </Main>
        </Content>
        <GardenFooter>
          <FooterItem>
            <Button isPrimary>Save</Button>
          </FooterItem>
        </GardenFooter>
      </Body>
    </GardenChrome>
  );
  };
  
  `,
    'Transforms aliased components'
  );
});
