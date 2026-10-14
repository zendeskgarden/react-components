/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { Field } from './Field';
import { Select } from './Select';

describe('Select', () => {
  it('is rendered as a select', () => {
    const { getByTestId } = render(
      <Field>
        <Select data-test-id="select" />
      </Field>
    );

    expect(getByTestId('select').nodeName).toBe('SELECT');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLSelectElement>();
    const { getByTestId } = render(
      <Field>
        <Select data-test-id="select" ref={ref} />
      </Field>
    );

    expect(getByTestId('select')).toBe(ref.current);
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Field>
        <Select data-test-id="select" data-garden-id="custom" data-garden-version="0.0.0" />
      </Field>
    );

    expect(getByTestId('select')).toHaveAttribute('data-garden-id', 'forms.select');
    expect(getByTestId('select')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  it('renders the wrapper as a div with its state attributes', () => {
    const { getByTestId } = render(<Select data-test-id="select" disabled validation="error" />);
    const wrapper = getByTestId('select').parentElement!;

    expect(wrapper.nodeName).toBe('DIV');
    expect(wrapper).toHaveAttribute('data-garden-id', 'forms.select_wrapper');
    expect(wrapper).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(wrapper).toHaveAttribute('aria-disabled', 'true');
    expect(wrapper).toHaveAttribute('aria-invalid', 'true');
    expect(getByTestId('select')).toHaveAttribute('aria-invalid', 'true');
  });

  it('is not invalid or disabled by default', () => {
    const { getByTestId } = render(<Select data-test-id="select" />);
    const wrapper = getByTestId('select').parentElement!;

    expect(wrapper).not.toHaveAttribute('aria-disabled');
    expect(wrapper).toHaveAttribute('aria-invalid', 'false');
    expect(getByTestId('select')).toHaveAttribute('aria-invalid', 'false');
  });
});
