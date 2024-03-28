/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { render } from 'garden-test-utils';
import { PALETTE_V8 } from '@zendeskgarden/react-theming';
import { IOptionProps } from '../../types';
import { Field } from './Field';
import { Combobox } from './Combobox';
import { Option } from './Option';
import { StyledOption } from '../../views';

interface ITestOptionProps extends Partial<IOptionProps> {
  optionTestId?: string;
}

const TestOption = forwardRef<HTMLLIElement, ITestOptionProps>(
  ({ optionTestId = 'option', value = 'test', tagProps, children, ...props }, ref) => (
    <Field>
      <Combobox defaultExpanded isMultiselectable>
        <Option
          data-test-id={optionTestId}
          tagProps={{ 'data-test-id': 'tag', ...tagProps } as HTMLAttributes<HTMLDivElement>}
          value={value}
          {...props}
          ref={ref}
        >
          {children}
        </Option>
      </Combobox>
    </Field>
  )
);

TestOption.displayName = 'TestOption';

describe('Option', () => {
  it('throws if rendered outside of a Combobox component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    expect(() => {
      render(<Option value="value" />);
    }).toThrow('Error: this component must be rendered within a <Combobox>.');

    console.error = originalError;
  });

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

  it('renders selected as expected', () => {
    const { getByTestId } = render(<TestOption isSelected />);
    const option = getByTestId('option');
    const tag = getByTestId('tag');

    expect(option).toHaveAttribute('aria-selected', 'true');
    expect(option.firstChild).toHaveStyleRule('opacity', '1', {
      modifier: `${StyledOption}[aria-selected='true'] > &`
    });
    expect(tag).toHaveAttribute('tabindex', '0');
  });

  it('renders disabled as expected', () => {
    const { getByTestId } = render(<TestOption isDisabled isSelected />);
    const option = getByTestId('option');
    const tag = getByTestId('tag');

    expect(option).toHaveAttribute('aria-disabled', 'true');
    expect(option).toHaveStyleRule('color', PALETTE_V8.grey[400], {
      modifier: '[aria-disabled="true"]'
    });
    expect(tag).not.toHaveAttribute('tabindex');
  });

  it('renders hidden as expected', () => {
    const { getByTestId } = render(<TestOption isHidden isSelected tagProps={{ isPill: true }} />);
    const option = getByTestId('option');
    const tag = getByTestId('tag');

    expect(option).toHaveAttribute('aria-hidden', 'true');
    expect(option).toHaveStyleRule('clip', 'rect(0 0 0 0)', { modifier: '[aria-hidden="true"]' });
    expect(tag).toHaveStyleRule('border-radius', '100px');
  });

  it('renders value text as expected', () => {
    const { getByTestId } = render(<TestOption />);
    const option = getByTestId('option');

    expect(option).toHaveTextContent('test');
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
      expect(option.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[600]);
      expect(option.firstChild).toHaveStyleRule('left', '12px');
    });

    it('renders "next" as expected', () => {
      const { getByTestId } = render(<TestOption type="next" />);
      const option = getByTestId('option');

      expect(option.firstChild).toHaveStyleRule('opacity', '1');
      expect(option.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[600]);
      expect(option.firstChild).toHaveStyleRule('right', '12px');
    });

    it('renders "add" as expected', () => {
      const { getByTestId } = render(<TestOption type="add" />);
      const option = getByTestId('option');

      expect(option).toHaveStyleRule('color', PALETTE_V8.blue[600]);
    });

    it('renders "danger" as expected', () => {
      const { getByTestId } = render(<TestOption type="danger" />);
      const option = getByTestId('option');

      expect(option).toHaveStyleRule('color', PALETTE_V8.red[600]);
    });
  });

  describe('Option.Meta', () => {
    it('throws if rendered outside of an Option component', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(<Option.Meta />);
      }).toThrow('Error: this component must be rendered within an <Option>.');

      console.error = originalError;
    });

    it('renders as expected', () => {
      const { getByTestId } = render(
        <TestOption>
          <Option.Meta data-test-id="meta">Meta</Option.Meta>
        </TestOption>
      );
      const meta = getByTestId('meta');

      expect(meta).toHaveStyleRule('color', PALETTE_V8.grey[600]);
    });
  });
});
