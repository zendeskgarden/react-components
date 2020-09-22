/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Buttons/SplitButton',
  component: SplitButton
} as Meta;

const StyledRow = styled(Row)`
  padding: ${props => props.theme.space.xxl} 0;
`;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);

  return (
    <Grid>
      <StyledRow>
        <Col textAlign="center">
          <SplitButton>
            <Button onClick={action('onClick')}>Send Flowers</Button>
            <Dropdown
              onSelect={action('onSelect')}
              onStateChange={changes => setIsOpen(changes.isOpen)}
            >
              <Trigger>
                <ChevronButton isRotated={isOpen} aria-label="Other Flowers" />
              </Trigger>
              <Menu placement="bottom-end">
                <Item value="daisy">Send Daisy</Item>
                <Item value="tulip">Send Tulip</Item>
              </Menu>
            </Dropdown>
          </SplitButton>
        </Col>
      </StyledRow>
    </Grid>
  );
};

Default.parameters = {
  docs: {
    description: {
      component: `
While split buttons are visually similar to button groups, it is important to note that keyboard navigation
is different for accessibility purposes. The button group applies \`role="group"\` to the containing element
and handles keyboard navigation using the tab-to; cursor-through paradigm (a user tabs to the group and uses
arrow keys to navigate within the group). Because the split button is a visual treatment for two separate buttons,
a user simply tabs to navigate between the primary and secondary actions.

The split button pattern is composed of:

- \`SplitButton\` component as a container
- \`Button\` component for the main action
- \`ChevronButton\` component for the secondary actions
- \`Dropdown/Menu/Trigger\` components from [@zendeskgarden/react-dropdowns](https://zendeskgarden.github.io/react-components/dropdowns/) package for the secondary actions menu
      `
    }
  }
};
