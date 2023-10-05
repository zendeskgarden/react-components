/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { render } from 'garden-test-utils';
import { IOptGroupProps } from '../../types';
import { Field } from './Field';
import { Combobox } from './Combobox';
import { OptGroup } from './OptGroup';
import { Option } from './Option';

interface ITestOptGroupProps extends IOptGroupProps {
  optGroupTestId?: string;
}

const TestOptGroup = forwardRef<HTMLLIElement, ITestOptGroupProps>(
  ({ optGroupTestId = 'optgroup', children, ...props }, ref) => (
    <Field>
      <Combobox defaultExpanded>
        <OptGroup data-test-id={optGroupTestId} {...props} ref={ref}>
          {children}
        </OptGroup>
      </Combobox>
    </Field>
  )
);

TestOptGroup.displayName = 'TestOptGroup';

describe('OptGroup', () => {
  it('throws if rendered outside of a Combobox component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    expect(() => {
      render(<OptGroup />);
    }).toThrow('Error: this component must be rendered within a <Combobox>.');

    console.error = originalError;
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();
    const { getByTestId } = render(<TestOptGroup ref={ref} />);
    const optgroup = getByTestId('optgroup');

    expect(optgroup).toBe(ref.current);
  });

  it('renders a separator if second or later child', () => {
    const { getByTestId } = render(
      <Field>
        <Combobox defaultExpanded>
          <Option value="foo" />
          <OptGroup data-test-id="optgroup" />
        </Combobox>
      </Field>
    );
    const option = getByTestId('optgroup');
    const optGroup = option.querySelector('[aria-label="Group"]');
    const separator = optGroup?.firstChild;

    expect(separator).toHaveStyleRule('height', '1px');
  });

  it('hides separator when first Combobox child with no label', () => {
    const { getByTestId } = render(<TestOptGroup aria-label="Group" />);
    const option = getByTestId('optgroup');
    const optGroup = option.querySelector('[aria-label="Group"]');
    const separator = optGroup?.firstChild;

    expect(separator).not.toBeVisible();
  });

  it('renders separator when first Combobox child with label', () => {
    const { getByTestId } = render(<TestOptGroup label="Group" />);
    const option = getByTestId('optgroup');
    const optGroup = option.querySelector('[aria-label="Group"]');
    const separator = optGroup?.firstChild;

    expect(separator).toBeVisible();
  });

  it('renders a label if provided', () => {
    const { getByTestId } = render(<TestOptGroup label="test" />);
    const optGroup = getByTestId('optgroup');

    expect(optGroup).toHaveTextContent('test');
  });

  it('overrides the label with content if provided', () => {
    const { getByTestId } = render(<TestOptGroup label="test" content="content" />);
    const optGroup = getByTestId('optgroup');

    expect(optGroup).toHaveTextContent('content');
    expect(optGroup.querySelector('[aria-label="test"]')).not.toBeNull();
  });

  describe('icon', () => {
    it('does not render without content', () => {
      const { queryByTestId } = render(<TestOptGroup icon={<svg data-test-id="icon" />} />);
      const icon = queryByTestId('icon');

      expect(icon).toBeNull();
    });

    it('does render with content', () => {
      const { getByTestId } = render(
        <TestOptGroup icon={<svg data-test-id="icon" />} label="label" />
      );
      const icon = getByTestId('icon');

      expect(icon).not.toBeNull();
    });
  });
});
