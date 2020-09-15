/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import { Accordion } from '@zendeskgarden/react-accordions';

export default {
  title: 'Components/Accordions/Accordion',
  subcomponents: {
    Accordion,
    'Accordion.Section': Accordion.Section,
    'Accordion.Header': Accordion.Header,
    'Accordion.Label': Accordion.Label,
    'Accordion.Panel': Accordion.Panel
  }
} as Meta;

export { Uncontrolled } from './examples/Uncontrolled';
export { Controlled } from './examples/Controlled';
