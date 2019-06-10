import React, { Component } from 'react';
import styled from 'styled-components';
import {
  zdSpacing,
  zdSpacingSm,
  zdSpacingXl,
  zdFontWeightSemibold,
  zdColorBlue600
} from '@zendeskgarden/css-variables';
import { XXL, MD } from '@zendeskgarden/react-typography';
import { Button, Anchor } from '@zendeskgarden/react-buttons';
import { Dots } from '@zendeskgarden/react-loaders';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';

const Header = styled(XXL)`
  margin-bottom: ${zdSpacing};
`;

const Paragraph = styled.p`
  margin-bottom: ${zdSpacingSm};
`;

const Strong = styled.strong`
  font-weight: ${zdFontWeightSemibold};
`;

const CodeExample = styled.div`
  margin-top: ${zdSpacingXl};
  text-align: center;
`;

export default class Example extends Component {
  render() {
    return (
      <>
        <Header tag="h1">Zendesk Garden Code Sample</Header>
        <MD>
          <Paragraph>
            This CodeSandbox is an example codebase of the{' '}
            <Anchor href="https://garden.zendesk.com/react-components">
              Garden react-components
            </Anchor>{' '}
            using the{' '}
            <Anchor href="https://github.com/facebook/create-react-app">
              create-react-app
            </Anchor>{' '}
            template.
          </Paragraph>
          <Paragraph>
            To edit this example, modify the{' '}
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
          <Dots color={zdColorBlue600} size={40} />
        </CodeExample>
      </>
    );
  }
}
