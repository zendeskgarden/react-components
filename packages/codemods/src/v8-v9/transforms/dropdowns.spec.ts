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
import transform from './dropdowns';

describe('dropdownNextMigrationTransform', () => {
  defineSnapshotTest(
    transform,
    undefined,
    `
import { Item, Menu, Label, Field, Dropdown, Autocomplete } from '@zendeskgarden/react-dropdowns';

const MyComponent = () => (
   <Dropdown>
    <Field>
      <Label>Choose a vegetable</Label>
      <Autocomplete>Asparagus</Autocomplete>
    </Field>
    <Menu>
      <Item value="Asparagus" />
      <Item value="Broccoli" />
    </Menu>
  </Dropdown>
);
`,
    'Transforms dropdowns following the migration guide'
  );

  defineSnapshotTest(
    transform,
    undefined,
    `
import { Combobox, Field, Hint, Label, Message, Option, OptGroup } from '@zendeskgarden/react-dropdowns.next';

const MyComponent = () => (
  <Field>
    <Label>Label</Label>
    <Hint>Hint</Hint>
    <Combobox>
    <OptGroup label="Vegetables">
      <Option value="Asparagus" />
      <Option value="Broccoli" />
      </OptGroup>
    </Combobox>
    <Message>Message</Message>
  </Field>
);
`,
    'Transforms dropdown.next following the migration guide'
  );
});
