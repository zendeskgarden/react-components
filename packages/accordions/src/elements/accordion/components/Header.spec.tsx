/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { Accordion } from '../Accordion';

describe('Header', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByRole } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Header ref={ref}>
            <Accordion.Label>Header Button</Accordion.Label>
          </Accordion.Header>
        </Accordion.Section>
      </Accordion>
    );

    expect(getByRole('heading')).toBe(ref.current);
  });

  it('composes event handlers', async () => {
    const onClick = jest.fn();
    const onMouseOver = jest.fn();
    const onMouseOut = jest.fn();

    const { getByRole } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Header onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <Accordion.Label>Header Button</Accordion.Label>
          </Accordion.Header>
        </Accordion.Section>
      </Accordion>
    );

    const header = getByRole('heading');

    await user.click(header);
    await user.unhover(header);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onMouseOver).toHaveBeenCalledTimes(1);
    expect(onMouseOut).toHaveBeenCalledTimes(1);
  });
});
