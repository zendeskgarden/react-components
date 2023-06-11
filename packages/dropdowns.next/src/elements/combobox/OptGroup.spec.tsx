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

describe('OptionGroup', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();
    const { getByTestId } = render(<TestOptGroup ref={ref} />);
    const optgroup = getByTestId('optgroup');

    expect(optgroup).toBe(ref.current);
  });

  it('renders a separator by default', () => {
    const { getByTestId } = render(<TestOptGroup />);
    const option = getByTestId('optgroup');
    const optGroup = option.querySelector('[aria-label="Group"]');
    const separator = optGroup?.firstChild;

    expect(separator).toHaveStyleRule('height', '1px');
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
