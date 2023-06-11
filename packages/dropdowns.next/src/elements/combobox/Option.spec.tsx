/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { IOptionProps } from '../../types';
import { Field } from './Field';
import { Combobox } from './Combobox';
import { Option } from './Option';
import { StyledOption } from '../../views';

interface ITestOptionProps extends Partial<IOptionProps> {
  optionTestId?: string;
}

const TestOption = forwardRef<HTMLLIElement, ITestOptionProps>(
  ({ optionTestId = 'option', value = 'test', children, ...props }, ref) => (
    <Field>
      <Combobox defaultExpanded>
        <Option data-test-id={optionTestId} value={value} {...props} ref={ref}>
          {children}
        </Option>
      </Combobox>
    </Field>
  )
);

TestOption.displayName = 'TestOption';

describe('Option', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();
    const { getByTestId } = render(<TestOption ref={ref} />);
    const option = getByTestId('option');

    expect(option).toBe(ref.current);
  });

  it('renders icon if provided', () => {
    const { getByTestId } = render(<TestOption icon={<svg data-test-id="icon" />} />);
    const icon = getByTestId('icon');

    expect(icon).not.toBeNull();
  });

  it('renders disabled as expected', () => {
    const { getByTestId } = render(<TestOption isDisabled />);
    const option = getByTestId('option');

    expect(option).toHaveAttribute('aria-disabled', 'true');
    expect(option).toHaveStyleRule('color', PALETTE.grey[400], {
      modifier: '[aria-disabled="true"]'
    });
  });

  it('renders selected as expected', () => {
    const { getByTestId } = render(<TestOption isSelected />);
    const option = getByTestId('option');

    expect(option).toHaveAttribute('aria-selected', 'true');
    expect(option.firstChild).toHaveStyleRule('opacity', '1', {
      modifier: `${StyledOption}[aria-selected='true'] > &`
    });
  });

  it('sets label as expected', () => {
    const { getByTestId } = render(<TestOption label="Test" />);
    const option = getByTestId('option');

    expect(option).toHaveTextContent('Test');
  });

  it('overrides the label with `children`', () => {
    const { getByTestId } = render(<TestOption label="Test">Override</TestOption>);
    const option = getByTestId('option');

    expect(option).toHaveTextContent('Override');
  });

  describe('types', () => {
    it('renders "previous" as expected', () => {
      const { getByTestId } = render(<TestOption type="previous" />);
      const option = getByTestId('option');

      expect(option.firstChild).toHaveStyleRule('opacity', '1');
      expect(option.firstChild).toHaveStyleRule('color', PALETTE.grey[600]);
      expect(option.firstChild).toHaveStyleRule('left', '12px');
    });

    it('renders "next" as expected', () => {
      const { getByTestId } = render(<TestOption type="next" />);
      const option = getByTestId('option');

      expect(option.firstChild).toHaveStyleRule('opacity', '1');
      expect(option.firstChild).toHaveStyleRule('color', PALETTE.grey[600]);
      expect(option.firstChild).toHaveStyleRule('right', '12px');
    });

    it('renders "add" as expected', () => {
      const { getByTestId } = render(<TestOption type="add" />);
      const option = getByTestId('option');

      expect(option).toHaveStyleRule('color', PALETTE.blue[600]);
    });

    it('renders "danger" as expected', () => {
      const { getByTestId } = render(<TestOption type="danger" />);
      const option = getByTestId('option');

      expect(option).toHaveStyleRule('color', PALETTE.red[600]);
    });
  });

  it('renders `Option.Meta` as expected', () => {
    const { getByTestId } = render(
      <TestOption>
        <Option.Meta data-test-id="meta">Meta</Option.Meta>
      </TestOption>
    );
    const meta = getByTestId('meta');

    expect(meta).toHaveStyleRule('color', PALETTE.grey[600]);
  });
});
