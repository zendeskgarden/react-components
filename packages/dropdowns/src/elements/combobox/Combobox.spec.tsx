/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, InputHTMLAttributes, forwardRef } from 'react';
import { render, renderRtl } from 'garden-test-utils';
import userEvent from '@testing-library/user-event';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { IComboboxProps, ISelectedOption } from '../../types';
import { Combobox } from './Combobox';
import { OptGroup } from './OptGroup';
import { Option } from './Option';
import { Field } from './Field';
import { rgba } from 'polished';

interface ITestComboboxProps extends IComboboxProps {
  fieldTestId?: string;
  labelTestId?: string;
  hintTestId?: string;
  comboboxTestId?: string;
  inputTestId?: string;
  messageTestId?: string;
  validationLabel?: string;
}

const TestCombobox = forwardRef<HTMLDivElement, ITestComboboxProps>(
  (
    {
      fieldTestId = 'field',
      labelTestId = 'label',
      hintTestId = 'hint',
      comboboxTestId = 'combobox',
      inputTestId = 'input',
      messageTestId = 'message',
      inputProps,
      validation,
      validationLabel,
      children,
      ...props
    },
    ref
  ) => (
    <Field data-test-id={fieldTestId}>
      <Field.Label data-test-id={labelTestId}>Label</Field.Label>
      <Field.Hint data-test-id={hintTestId}>Hint</Field.Hint>
      <Combobox
        data-test-id={comboboxTestId}
        inputProps={
          { 'data-test-id': inputTestId, ...inputProps } as InputHTMLAttributes<HTMLInputElement>
        }
        validation={validation}
        {...props}
        ref={ref}
      >
        {children}
      </Combobox>
      <Field.Message
        data-test-id={messageTestId}
        validation={validation}
        validationLabel={validationLabel}
      >
        Message
      </Field.Message>
    </Field>
  )
);

TestCombobox.displayName = 'TestCombobox';

describe('Combobox', () => {
  const user = userEvent.setup();

  it('throws if rendered outside of a Field component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    expect(() => {
      render(<Combobox />);
    }).toThrow('Error: this component must be rendered within a <Field>.');

    console.error = originalError;
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(<TestCombobox ref={ref} />);
    const combobox = getByTestId('combobox');

    expect(combobox).toBe(ref.current);
  });

  it('applies correct styling on label hover', async () => {
    const { getByTestId } = render(<TestCombobox />);
    const label = getByTestId('label');
    const combobox = getByTestId('combobox');

    await user.hover(label);

    expect(combobox.firstChild).toHaveStyleRule('border-color', PALETTE.blue[700], {
      modifier: ':hover'
    });
  });

  it('focuses input on label click', async () => {
    const { getByTestId } = render(<TestCombobox />);
    const label = getByTestId('label');
    const input = getByTestId('input');

    await user.click(label);

    expect(input).toHaveFocus();
  });

  it('renders icons if provided', () => {
    const { getByTestId } = render(
      <TestCombobox
        startIcon={<svg data-test-id="start-icon" />}
        endIcon={<svg data-test-id="end-icon" />}
      />
    );

    expect(getByTestId('start-icon')).not.toBeNull();
    expect(getByTestId('end-icon')).not.toBeNull();
  });

  it('handles `defaultExpanded` as expected', () => {
    const { getByTestId } = render(<TestCombobox defaultExpanded />);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('aria-expanded', 'true');
  });

  it('handles `defaultActiveIndex` as expected', () => {
    const { getByTestId } = render(
      <TestCombobox defaultExpanded defaultActiveIndex={1}>
        <Option value="inactive" />
        <Option data-test-id="option" value="active" />
      </TestCombobox>
    );
    const input = getByTestId('input');
    const option = getByTestId('option');

    expect(input).toHaveAttribute('aria-activedescendant', option.id);
    expect(option).toHaveStyleRule('box-shadow', expect.stringContaining('inset 3px'));
  });

  it('handles active index RTL as expected', () => {
    const { getByTestId } = renderRtl(
      <TestCombobox defaultExpanded defaultActiveIndex={0}>
        <Option data-test-id="option" value="active" />
      </TestCombobox>
    );
    const option = getByTestId('option');

    expect(option).toHaveStyleRule('box-shadow', expect.stringContaining('inset -3px'));
  });

  it('applies `id` as expected', () => {
    const { getByTestId } = render(<TestCombobox id="test" />);
    const combobox = getByTestId('combobox');

    expect(combobox).toHaveAttribute('id', 'test');
  });

  it('applies `inputProps` as expected', () => {
    const { getByTestId } = render(<TestCombobox inputProps={{ type: 'search' }} />);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('type', 'search');
  });

  it('renders `isAutocomplete` as expected', async () => {
    const { getByTestId, rerender } = render(<TestCombobox />);
    const trigger = getByTestId('combobox').firstChild as HTMLElement;
    const input = getByTestId('input');

    await user.click(trigger);

    expect(input).not.toHaveAttribute('aria-autocomplete');
    expect(input).toHaveAttribute('aria-expanded', 'false');

    rerender(<TestCombobox isAutocomplete />);

    await user.click(trigger);

    expect(input).toHaveAttribute('aria-autocomplete', 'list');
    expect(input).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders `isBare` styling as expected', () => {
    const { getByTestId } = render(<TestCombobox isBare />);
    const combobox = getByTestId('combobox');

    expect(combobox.firstChild).toHaveStyleRule('border', 'none');
  });

  it('renders `isCompact` styling as expected', () => {
    const tagProps = { 'data-test-id': 'tag' } as HTMLAttributes<HTMLDivElement>;
    const { getByTestId, rerender } = render(
      <TestCombobox defaultExpanded isMultiselectable>
        <Option data-test-id="option" isSelected tagProps={tagProps} value="test" />
      </TestCombobox>
    );
    const combobox = getByTestId('combobox');
    const option = getByTestId('option');

    expect(combobox.firstChild).toHaveStyleRule('min-height', '40px');
    expect(option).toHaveStyleRule('min-height', '36px');
    expect(getByTestId('tag')).toHaveStyleRule('height', '32px');

    rerender(
      <TestCombobox isCompact defaultExpanded isMultiselectable>
        <Option data-test-id="option" isSelected tagProps={tagProps} value="test" />
      </TestCombobox>
    );

    expect(combobox.firstChild).toHaveStyleRule('min-height', '32px');
    expect(option).toHaveStyleRule('min-height', '28px');
    expect(getByTestId('tag')).toHaveStyleRule('height', '20px');
  });

  it('renders disabled as expected', () => {
    const { getByTestId } = render(<TestCombobox isDisabled />);
    const trigger = getByTestId('combobox').firstChild;
    const input = getByTestId('input');

    expect(trigger).toHaveAttribute('aria-disabled', 'true');
    expect(trigger).toHaveStyleRule(
      'background-color',
      rgba(PALETTE.grey[700], DEFAULT_THEME.opacity[100]),
      {
        modifier: '[aria-disabled="true"]'
      }
    );
    expect(input).toHaveAttribute('disabled');
  });

  it('renders non-editable as expected', () => {
    const { getByTestId } = render(<TestCombobox isEditable={false} />);
    const combobox = getByTestId('combobox');
    const input = getByTestId('input');

    expect(combobox).toHaveAttribute('tabIndex', '-1');
    expect(input).toHaveAttribute('readonly');
    expect(input).toHaveAttribute('hidden');
    expect(input).toHaveAttribute('aria-hidden', 'true');
    expect(input).toHaveStyleRule('display', 'none', { modifier: '&[aria-hidden="true"]' });
  });

  it('renders `isMultiselectable` as expected', () => {
    const tagProps = { 'data-test-id': 'tag' } as HTMLAttributes<HTMLDivElement>;
    const { getByTestId } = render(
      <TestCombobox isMultiselectable>
        <Option isSelected tagProps={tagProps} value="test" />
      </TestCombobox>
    );
    const tag = getByTestId('tag');

    expect(tag).toHaveTextContent('test');
  });

  it('portals the listbox as expected', () => {
    const { container, rerender } = render(<TestCombobox />);

    expect(container.querySelector('[role="listbox"]')).not.toBeNull();

    const node = document.createElement('DIV');

    document.body.appendChild(node);

    rerender(<TestCombobox listboxAppendToNode={node} />);

    expect(container.querySelector('[role="listbox"]')).toBeNull();
    expect(node.querySelector('[role="listbox"]')).not.toBeNull();
  });

  it('applies `listboxAriaLabel` as expected', () => {
    const { container } = render(<TestCombobox listboxAriaLabel="test" />);
    const listbox = container.querySelector('[role="listbox"]');

    expect(listbox).toHaveAttribute('aria-label', 'test');
  });

  it('applies `listboxMaxHeight` as expected', () => {
    const { container, rerender } = render(<TestCombobox />);
    const listbox = container.querySelector('[role="listbox"]');

    expect(listbox).toHaveStyleRule('max-height', '400px');

    rerender(<TestCombobox listboxMaxHeight="100px" />);

    expect(listbox).toHaveStyleRule('max-height', '100px');
  });

  it('applies `listboxMinHeight` as expected', () => {
    const { container, rerender } = render(<TestCombobox />);
    const listbox = container.querySelector('[role="listbox"]');

    expect(listbox).toHaveStyleRule('min-height', '44px');

    rerender(<TestCombobox listboxMinHeight="100px" />);

    expect(listbox).toHaveStyleRule('min-height', '100px');

    rerender(<TestCombobox listboxMinHeight={null} />);

    expect(listbox).not.toHaveStyleRule('min-height');
  });

  it('applies `listboxZIndex` as expected', () => {
    const { container, rerender } = render(<TestCombobox />);
    const listbox = container.querySelector('[role="listbox"]');

    expect(listbox?.parentElement).toHaveStyleRule('z-index', '1000');

    rerender(<TestCombobox listboxZIndex={0} />);

    expect(listbox?.parentElement).toHaveStyleRule('z-index', '0');
  });

  it('applies `maxHeight` as expected', () => {
    const { getByTestId, rerender } = render(<TestCombobox />);

    expect(getByTestId('combobox').firstChild).toHaveStyleRule('max-height', '40px');

    rerender(<TestCombobox maxHeight="100px" />);

    expect(getByTestId('combobox').firstChild).toHaveStyleRule('max-height', '100px');
  });

  it('handles max tags as expected', () => {
    const tagProps = { 'data-test-id': 'tag' } as HTMLAttributes<HTMLDivElement>;
    const { getByTestId, rerender } = render(
      <TestCombobox isMultiselectable>
        <Option isSelected value="value" />
        <Option isSelected tagProps={tagProps} value="test" />
      </TestCombobox>
    );

    expect(getByTestId('tag')).not.toHaveAttribute('hidden');

    rerender(
      <TestCombobox isMultiselectable maxTags={1}>
        <Option isSelected value="value" />
        <Option isSelected tagProps={tagProps} value="test" />
      </TestCombobox>
    );

    expect(getByTestId('tag')).toHaveAttribute('hidden');
  });

  it('applies `placeholder` as expected', () => {
    const { getByTestId } = render(<TestCombobox placeholder="test" />);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('placeholder', 'test');
    expect(input.previousSibling).toHaveTextContent('test');
  });

  it('applies `renderExpandTags` as expected', () => {
    const tagProps = { 'data-test-id': 'tag' } as HTMLAttributes<HTMLDivElement>;
    const { getByTestId } = render(
      <TestCombobox isMultiselectable maxTags={1} renderExpandTags={value => `test-${value}`}>
        <Option isSelected value="value" />
        <Option isSelected tagProps={tagProps} value="test" />
      </TestCombobox>
    );
    const button = getByTestId('tag').nextSibling;

    expect(button).toHaveTextContent('test-1');
  });

  it('handles tag group expansion as expected', async () => {
    const tagProps = { 'data-test-id': 'tag' } as HTMLAttributes<HTMLDivElement>;
    const { getByTestId } = render(
      <TestCombobox isMultiselectable maxTags={1}>
        <Option isSelected value="one" />
        <Option isSelected tagProps={tagProps} value="two" />
      </TestCombobox>
    );
    const combobox = getByTestId('combobox');
    const trigger = combobox.firstChild as HTMLElement;
    const input = getByTestId('input');
    const tag = getByTestId('tag');
    const button = tag.nextSibling as HTMLElement;

    expect(tag).toHaveAttribute('hidden');
    expect(button).not.toHaveAttribute('hidden');

    await user.click(button);

    expect(tag).not.toHaveAttribute('hidden');
    expect(button).toHaveAttribute('hidden');
    expect(input).toHaveFocus();

    await user.keyboard('{Tab}');

    expect(tag).toHaveAttribute('hidden');
    expect(button).not.toHaveAttribute('hidden');

    await user.click(trigger);

    expect(tag).not.toHaveAttribute('hidden');
    expect(button).toHaveAttribute('hidden');
    expect(input).toHaveFocus();
  });

  describe('`renderValue`', () => {
    it('handles custom value as expected', async () => {
      const { getByTestId } = render(
        <TestCombobox
          renderValue={({ selection }) => `test-${(selection as ISelectedOption).value}`}
        >
          <Option isSelected value="value" />
        </TestCombobox>
      );
      const combobox = getByTestId('combobox');
      const trigger = combobox.firstChild as HTMLElement;
      const input = getByTestId('input');

      await user.click(trigger);

      expect(input).not.toHaveAttribute('hidden');
      expect(input).toHaveValue('value');
      expect(input.previousSibling).toHaveTextContent('test-value');
    });

    it('handles disabled with custom value as expected', async () => {
      const { getByTestId } = render(
        <TestCombobox
          isDisabled
          renderValue={({ selection }) => `test-${(selection as ISelectedOption).value}`}
        >
          <Option isSelected value="value" />
        </TestCombobox>
      );
      const combobox = getByTestId('combobox');
      const trigger = combobox.firstChild as HTMLElement;
      const input = getByTestId('input');

      await user.click(trigger);

      expect(input).toHaveAttribute('hidden');
      expect(input).toHaveValue('value');
      expect(input.previousSibling).toHaveTextContent('test-value');
    });
  });

  describe('validation', () => {
    it('renders `success` styling as expected', () => {
      const { getByTestId } = render(<TestCombobox validation="success" />);
      const combobox = getByTestId('combobox');
      const message = getByTestId('message');

      expect(combobox.firstChild).toHaveStyleRule('border-color', PALETTE.green[700]);
      expect(message).toHaveStyleRule('color', PALETTE.green[700]);
      expect(message.firstChild).not.toBeNull();
    });

    it('renders `warning` styling as expected', () => {
      const { getByTestId } = render(<TestCombobox validation="warning" />);
      const combobox = getByTestId('combobox');
      const message = getByTestId('message');

      expect(combobox.firstChild).toHaveStyleRule('border-color', PALETTE.yellow[700]);
      expect(message).toHaveStyleRule('color', PALETTE.yellow[700]);
      expect(message.firstChild).not.toBeNull();
    });

    it('renders `error` styling as expected', () => {
      const { getByTestId } = render(<TestCombobox validation="error" />);
      const combobox = getByTestId('combobox');
      const message = getByTestId('message');

      expect(combobox.firstChild).toHaveStyleRule('border-color', PALETTE.red[700]);
      expect(message).toHaveStyleRule('color', PALETTE.red[700]);
      expect(message.firstChild).not.toBeNull();
    });
  });

  describe('interaction', () => {
    it('retains expansion on `Listbox` click', async () => {
      const { getByTestId } = render(
        <TestCombobox isAutocomplete>
          <Option data-test-id="option" value="test" />
        </TestCombobox>
      );
      const combobox = getByTestId('combobox');
      const trigger = combobox.firstChild as HTMLElement;
      const input = getByTestId('input');

      await user.click(trigger);

      expect(input).toHaveAttribute('aria-expanded', 'true');

      const listbox = combobox.querySelector('[role="listbox"]') as HTMLElement;

      await user.click(listbox);

      expect(input).toHaveAttribute('aria-expanded', 'true');

      await user.click(getByTestId('option'));

      expect(input).toHaveAttribute('aria-expanded', 'false');
    });

    it('retains expansion on `OptGroup` click', async () => {
      const { getByTestId } = render(
        <TestCombobox isAutocomplete>
          <OptGroup data-test-id="optgroup">
            <Option data-test-id="option" value="test" />
          </OptGroup>
        </TestCombobox>
      );
      const combobox = getByTestId('combobox');
      const trigger = combobox.firstChild as HTMLElement;
      const input = getByTestId('input');

      await user.click(trigger);

      expect(input).toHaveAttribute('aria-expanded', 'true');

      await user.click(getByTestId('option'));

      expect(input).toHaveAttribute('aria-expanded', 'false');

      await user.click(trigger);

      expect(input).toHaveAttribute('aria-expanded', 'true');

      await user.click(getByTestId('optgroup'));

      expect(input).toHaveAttribute('aria-expanded', 'true');
    });

    it('handles tag removal as expected', async () => {
      const tagProps = { 'data-test-id': 'tag' } as HTMLAttributes<HTMLDivElement>;
      const { getByTestId, queryByTestId } = render(
        <TestCombobox isMultiselectable>
          <Option isSelected tagProps={tagProps} value="value" />
        </TestCombobox>
      );
      const tag = getByTestId('tag');

      expect(tag).not.toBeNull();

      await user.click(tag.querySelector('button') as HTMLElement);

      expect(queryByTestId('tag')).toBeNull();
    });

    it('focuses input on expand tags click', async () => {
      const { getByTestId, getByText } = render(
        <TestCombobox isMultiselectable maxTags={1} renderExpandTags={() => 'test'}>
          <Option isSelected value="value-1" />
          <Option isSelected value="value-2" />
        </TestCombobox>
      );
      const button = getByText('test');
      const input = getByTestId('input');

      await user.click(button);

      expect(input).toHaveFocus();
    });

    it('focuses input on value click', async () => {
      const { getByTestId } = render(<TestCombobox />);
      const input = getByTestId('input');

      await user.click(input.previousElementSibling as HTMLElement);

      expect(input).toHaveFocus();
    });

    it('hides input on blur', async () => {
      const { getByTestId } = render(<TestCombobox />);
      const combobox = getByTestId('combobox');
      const input = getByTestId('input');

      await user.click(combobox.firstChild as HTMLElement);

      expect(input).not.toHaveAttribute('hidden');

      await user.keyboard('{Tab}');

      expect(input).toHaveAttribute('hidden');
    });
  });

  describe('controlled', () => {
    const handleChange = jest.fn();

    beforeEach(() => {
      handleChange.mockReset();
    });

    it('calls onChange as expected', async () => {
      const { getByTestId } = render(
        <TestCombobox onChange={handleChange}>
          <Option value="value" />
        </TestCombobox>
      );
      const trigger = getByTestId('combobox').firstChild as HTMLElement;

      await user.click(trigger);
      await user.keyboard('{ArrowDown}');

      expect(handleChange).toHaveBeenCalledTimes(1);

      const changeTypes = handleChange.mock.calls.map(([change]) => change.type);

      expect(changeTypes).toMatchObject(['input:keyDown:ArrowDown']);
    });

    it('handles `activeIndex` and `isExpanded` as expected', () => {
      const { getByTestId } = render(
        <TestCombobox activeIndex={0} isExpanded>
          <Option data-test-id="option" value="value" />
        </TestCombobox>
      );
      const input = getByTestId('input');
      const option = getByTestId('option');

      expect(input).toHaveAttribute('aria-expanded', 'true');
      expect(input).toHaveAttribute('aria-activedescendant', option.id);
    });

    it('handles single `selectionValue` as expected', () => {
      const { getByTestId } = render(
        <TestCombobox defaultExpanded selectionValue="value">
          <Option data-test-id="option" value="value" />
        </TestCombobox>
      );
      const option = getByTestId('option');

      expect(option).toHaveAttribute('aria-selected', 'true');
    });

    it('handles multiple `selectionValue` as expected', async () => {
      const { getByTestId } = render(
        <TestCombobox
          defaultExpanded
          isMultiselectable
          onChange={handleChange}
          selectionValue={['value-1', 'value-2']}
        >
          <Option data-test-id="option-1" value="value-1" />
          <Option data-test-id="option-2" value="value-2" />
        </TestCombobox>
      );
      const option1 = getByTestId('option-1');
      const option2 = getByTestId('option-2');

      expect(option1).toHaveAttribute('aria-selected', 'true');
      expect(option2).toHaveAttribute('aria-selected', 'true');

      await user.click(option1);

      expect(handleChange).toHaveBeenCalledTimes(2); /* option:mouseMove & option:click */

      const selectionValue = handleChange.mock.calls[1][0].selectionValue;

      expect(selectionValue).toMatchObject(['value-2']);
    });
  });
});
