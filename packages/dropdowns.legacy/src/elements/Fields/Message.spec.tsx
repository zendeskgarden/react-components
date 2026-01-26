/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Dropdown, Field, Message } from '../../';

describe('Message', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Field>
          <Message data-test-id="message" ref={ref}>
            Message
          </Message>
        </Field>
      </Dropdown>
    );

    expect(getByTestId('message')).toBe(ref.current);
  });
});
