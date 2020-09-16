/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs';
import { Anchor } from '@zendeskgarden/react-buttons';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumb
} as Meta;

export const Default: Story = () => {
  return (
    <Breadcrumb>
      <Anchor href="/">Home</Anchor>
      <Anchor href="..">React Components</Anchor>
      <span>Breadcrumbs</span>
    </Breadcrumb>
  );
};

Default.parameters = {
  docs: {
    description: {
      component: `
  The Breadcrumb component follows the [W3C breadcrumb accessibility design pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb)
  and applies the correct accessibility attributes to the \`Breadcrumb\`
  listed below. It acts as a high-abstraction API over the [useBreadcrumb()](https://www.npmjs.com/package/@zendeskgarden/container-breadcrumb)
  hook. Implementations are expected to override aria-label with a
  translated value describing usage.
`
    }
  }
};
