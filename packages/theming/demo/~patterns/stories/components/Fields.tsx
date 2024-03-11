/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Checkbox, Field, Input } from '@zendeskgarden/react-forms';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

export const Fields = () => (
  <>
    <Field>
      <Field.Label>Email</Field.Label>
      <Input style={{ marginBottom: DEFAULT_THEME.space.sm }} type="email" />
    </Field>
    <Field>
      <Field.Label>Password</Field.Label>
      <Input style={{ marginBottom: DEFAULT_THEME.space.md }} type="password" />
    </Field>
    <Field>
      <Checkbox>
        <Field.Label>Remember me</Field.Label>
      </Checkbox>
    </Field>
  </>
);
