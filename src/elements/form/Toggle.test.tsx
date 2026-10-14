/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { Field } from './Field';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('is rendered as an input of type checkbox', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle data-test-id="toggle" />
      </Field>
    );
    const toggle = getByTestId('toggle');

    expect(toggle.nodeName).toBe('INPUT');
    expect(toggle).toHaveAttribute('type', 'checkbox');
  });

  it('is rendered with the switch role', () => {
    const { queryByRole } = render(
      <Field>
        <Toggle data-test-id="toggle" />
      </Field>
    );

    expect(queryByRole('switch')).toBeInTheDocument();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Toggle data-test-id="toggle" ref={ref} />
      </Field>
    );

    expect(getByTestId('toggle')).toBe(ref.current);
  });

  it('does not let props override the garden attributes or the type', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle
          data-test-id="toggle"
          data-garden-id="custom"
          data-garden-version="0.0.0"
          type="text"
        />
      </Field>
    );

    expect(getByTestId('toggle')).toHaveAttribute('data-garden-id', 'forms.toggle');
    expect(getByTestId('toggle')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('toggle')).toHaveAttribute('type', 'checkbox');
  });
});
