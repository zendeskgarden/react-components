import React, { Component } from 'react';
import styled from 'styled-components';
import { PALETTE } from '@zendeskgarden/react-theming';
import { XXL, MD } from '@zendeskgarden/react-typography';
import { Button, Anchor } from '@zendeskgarden/react-buttons';
import { Dots } from '@zendeskgarden/react-loaders';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';

const Header = styled(XXL)`
  margin-bottom: ${props => props.theme.space.md};
`;

const Paragraph = styled.p`
  margin-bottom: ${props => props.theme.space.sm};
`;

const Strong = styled.strong`
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const CodeExample = styled.div`
  margin-top: ${props => props.theme.space.xl};
  text-align: center;
`;

export default class Example extends Component {
  render() {
    return (
      <>
        <Header tag="h1">Zendesk Garden sandbox</Header>
        <MD>
          <Paragraph>
            This sandbox is built with{' '}
            <Anchor
              href="https://zendeskgarden.github.io/react-components"
              isExternal
            >
              Garden react-components
            </Anchor>
            . To edit this example, modify the{' '}
            <Strong>examples/Example.js</Strong> file.
          </Paragraph>
        </MD>
        <CodeExample>
          <Dropdown>
            <Trigger>
              <Button>Open a menu</Button>
            </Trigger>
            <Menu>
              <Item value="option-1">Option 1</Item>
              <Item value="option-2">Option 2</Item>
            </Menu>
          </Dropdown>
        </CodeExample>
        <CodeExample>
          <Dots color={PALETTE.blue[600]} size={40} />
        </CodeExample>
      </>
    );
  }
}
