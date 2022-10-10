/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, renderRtl, act } from 'garden-test-utils';
import {
  Dropdown,
  Multiselect,
  Field,
  Menu,
  Item,
  Label,
  PreviousItem,
  IDropdownProps
} from '../..';
import { KEY_CODES, KEYS } from '@zendeskgarden/container-utilities';

jest.useFakeTimers();

const ExampleWrapper: React.FC<IDropdownProps> = ({ children, ...other }) => (
  <Dropdown {...other}>
    <Field>{children}</Field>
    <Menu data-test-id="menu">
      <Item value="celosia" data-test-id="item">
        Celosia
      </Item>
      <Item value="dusty-miller" data-test-id="item">
        Dusty miller
      </Item>
      <Item value="everlasting-winged" data-test-id="item">
        Everlasting winged
      </Item>
    </Menu>
  </Dropdown>
);

describe('Multiselect', () => {
  const user = userEvent.setup({ delay: null });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Multiselect
            data-test-id="multiselect"
            ref={ref}
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          >
            Test
          </Multiselect>
        </Field>
      </Dropdown>
    );

    expect(getByTestId('multiselect')).toBe(ref.current);
  });

  it('focuses internal input when opened', async () => {
    const { getByTestId } = render(
      <ExampleWrapper>
        <Multiselect
          data-test-id="multiselect"
          renderItem={({ value, removeValue }) => (
            <div data-test-id="tag">
              {value}
              <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                Remove
              </button>
            </div>
          )}
        />
      </ExampleWrapper>
    );

    await user.click(getByTestId('multiselect'));

    expect(document.activeElement!.nodeName).toBe('INPUT');
  });

  it('closes on multiselect blur', async () => {
    const { getByTestId } = render(
      <ExampleWrapper>
        <Multiselect
          data-test-id="multiselect"
          renderItem={({ value, removeValue }) => (
            <div data-test-id="tag">
              {value}
              <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                Remove
              </button>
            </div>
          )}
        />
      </ExampleWrapper>
    );

    const multiselect = getByTestId('multiselect');
    const input = multiselect.querySelector('input');

    await user.click(input!);

    expect(multiselect).toHaveAttribute('data-test-is-focused', 'true');

    await user.tab();

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(multiselect).toHaveAttribute('data-test-is-focused', 'false');
  });

  it('applies correct styling if open', async () => {
    const { getByTestId } = render(
      <ExampleWrapper>
        <Multiselect
          data-test-id="multiselect"
          renderItem={({ value, removeValue }) => (
            <div data-test-id="tag">
              {value}
              <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                Remove
              </button>
            </div>
          )}
        />
      </ExampleWrapper>
    );

    const multiselect = getByTestId('multiselect');

    await user.click(multiselect);

    expect(multiselect).toHaveAttribute('data-test-is-focused', 'true');
    expect(multiselect).toHaveAttribute('data-test-is-open', 'true');
  });

  it('applies correct styling if label is hovered', async () => {
    const { getByTestId } = render(
      <ExampleWrapper>
        <Label data-test-id="label">Label</Label>
        <Multiselect
          data-test-id="multiselect"
          renderItem={({ value, removeValue }) => (
            <div data-test-id="tag">
              {value}
              <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                Remove
              </button>
            </div>
          )}
        />
      </ExampleWrapper>
    );

    await user.hover(getByTestId('label'));

    expect(getByTestId('multiselect')).toHaveAttribute('data-test-is-hovered', 'true');
  });

  it('renders start icon if provided', () => {
    const { getByTestId } = render(
      <ExampleWrapper>
        <Label>Label</Label>
        <Multiselect
          start={<svg data-test-id="icon" />}
          renderItem={({ value, removeValue }) => (
            <div>
              {value}
              <button onClick={() => removeValue()} tabIndex={-1}>
                Remove
              </button>
            </div>
          )}
        />
      </ExampleWrapper>
    );

    const icon = getByTestId('icon');

    expect(icon).toHaveStyleRule('width', '16px');
    expect(icon).toHaveStyleRule('height', '16px');
  });

  it('composes onKeyDown handler', async () => {
    const onKeyDown = jest.fn();
    const EVERLASTING_WINGED = 'Everlasting winged';
    const options = ['Celosia', 'Dusty miller', EVERLASTING_WINGED];

    const Example = () => {
      const [inputValue, setInputValue] = useState('');
      const [matchingOptions, setMatchingOptions] = useState(options);
      const [selectedItems, setSelectedItems] = useState([options[0], options[1]]);

      useEffect(() => {
        const matchedOptions = options.filter(
          option => option.trim().toLowerCase().indexOf(inputValue.trim().toLowerCase()) !== -1
        );

        setMatchingOptions(matchedOptions);
      }, [inputValue]);

      return (
        <Dropdown
          inputValue={inputValue}
          selectedItems={selectedItems}
          onSelect={setSelectedItems}
          onInputValueChange={setInputValue}
        >
          <Field>
            <Label>Seeds</Label>
            <Multiselect
              onKeyDown={onKeyDown}
              renderItem={({ value, removeValue }) => (
                <div>
                  {value}
                  <button onClick={removeValue} tabIndex={-1}>
                    Remove
                  </button>
                </div>
              )}
            />
          </Field>
          <Menu>
            {matchingOptions.map((option: string) => (
              <Item key={option} value={option}>
                <span>{option}</span>
              </Item>
            ))}
          </Menu>
        </Dropdown>
      );
    };

    const { getByRole, queryByRole, queryAllByLabelText } = render(<Example />);
    const combobox = getByRole('combobox');
    const multiselect = queryAllByLabelText('Seeds')[0];
    const addedOption = () => queryByRole('option', { name: new RegExp(EVERLASTING_WINGED, 'u') });

    expect(addedOption()).not.toBeInTheDocument();

    await user.type(multiselect, EVERLASTING_WINGED);
    await user.type(combobox, '{enter}');

    expect(addedOption()).toBeInTheDocument();
    expect(onKeyDown).toHaveBeenCalledTimes(EVERLASTING_WINGED.length + 1);
  });

  describe('Interaction', () => {
    it('opens on click', async () => {
      const { getByTestId } = render(
        <ExampleWrapper>
          <Multiselect
            data-test-id="multiselect"
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          />
        </ExampleWrapper>
      );
      const multiselect = getByTestId('multiselect');

      await user.click(multiselect);

      expect(multiselect).toHaveAttribute('data-test-is-open', 'true');
    });

    it('opens on down key and highlights first item', () => {
      const { getByTestId, getAllByTestId } = render(
        <ExampleWrapper>
          <Label data-test-id="label">Label</Label>
          <Multiselect
            data-test-id="multiselect"
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          />
        </ExampleWrapper>
      );
      const multiselect = getByTestId('multiselect');

      fireEvent.keyDown(multiselect, { key: 'ArrowDown', keyCode: 40 });
      expect(multiselect).toHaveAttribute('data-test-is-open', 'true');

      const items = getAllByTestId('item');

      expect(items[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('opens on up key and highlights last item', () => {
      const { getByTestId, getAllByTestId } = render(
        <ExampleWrapper>
          <Label data-test-id="label">Label</Label>
          <Multiselect
            data-test-id="multiselect"
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          />
        </ExampleWrapper>
      );
      const multiselect = getByTestId('multiselect');

      fireEvent.keyDown(multiselect, { key: KEYS.UP, keyCode: KEY_CODES.UP });
      expect(multiselect).toHaveAttribute('data-test-is-open', 'true');

      const items = getAllByTestId('item');

      expect(items[items.length - 1]).toHaveAttribute('aria-selected', 'true');
    });

    it('closes on escape key', async () => {
      const { getByTestId } = render(
        <ExampleWrapper>
          <Label data-test-id="label">Label</Label>
          <Multiselect
            data-test-id="multiselect"
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          />
        </ExampleWrapper>
      );
      const multiselect = getByTestId('multiselect');

      await user.click(multiselect);
      expect(multiselect).toHaveAttribute('data-test-is-open', 'true');

      await user.type(multiselect.querySelector('input')!, '{escape}');
      expect(multiselect).toHaveAttribute('data-test-is-open', 'false');
    });

    it('closes when clicked with current inputValue', async () => {
      const { getByTestId } = render(
        <ExampleWrapper>
          <Label data-test-id="label">Label</Label>
          <Multiselect
            data-test-id="multiselect"
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          />
        </ExampleWrapper>
      );
      const multiselect = getByTestId('multiselect');
      const input = multiselect.querySelector('input');

      await user.click(multiselect);
      await user.type(input!, 'test');
      await user.click(input!);

      expect(multiselect).toHaveAttribute('data-test-is-open', 'true');
    });

    it('closes on tag focus', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ExampleWrapper selectedItems={['item-1', 'item-2', 'item-3']}>
          <Label data-test-id="label">Label</Label>
          <Multiselect
            data-test-id="multiselect"
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          />
        </ExampleWrapper>
      );
      const multiselect = getByTestId('multiselect');

      await user.click(multiselect);
      expect(multiselect).toHaveAttribute('data-test-is-open', 'true');

      act(() => {
        jest.runOnlyPendingTimers();
      });

      await user.click(getAllByTestId('tag')[0]);
      expect(multiselect).toHaveAttribute('data-test-is-open', 'false');
    });
  });

  describe('Tags', () => {
    const DefaultTagExample: React.FC<IDropdownProps> = props => (
      <ExampleWrapper selectedItems={['item-1', 'item-2', 'item-3']} {...props}>
        <Multiselect
          data-test-id="multiselect"
          renderItem={({ value, removeValue }) => (
            <div data-test-id="tag">
              {value}
              <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                Remove
              </button>
            </div>
          )}
        />
      </ExampleWrapper>
    );

    it('limits number of visible tags when not focused', () => {
      const items = [];

      for (let x = 0; x < 50; x++) {
        items.push(`item-${x}`);
      }

      const { getAllByTestId, getByTestId } = render(<DefaultTagExample selectedItems={items} />);
      const tags = getAllByTestId('tag');
      const multiselect = getByTestId('multiselect');

      expect(tags).toHaveLength(4);
      expect(multiselect.textContent).toContain('+ 46 more');
    });

    it('shows all tags when focused', async () => {
      const items = [];

      for (let x = 0; x < 50; x++) {
        items.push(`item-${x}`);
      }

      const { getAllByTestId, container } = render(<DefaultTagExample selectedItems={items} />);
      const input = container.querySelector('input');

      await user.click(input!);
      const tags = getAllByTestId('tag');

      expect(tags).toHaveLength(50);
    });

    it('renders custom show more text when provided', () => {
      const items = [];

      for (let x = 0; x < 50; x++) {
        items.push(`item-${x}`);
      }

      const { getAllByTestId, getByTestId } = render(
        <ExampleWrapper selectedItems={items}>
          <Multiselect
            maxItems={6}
            renderShowMore={num => `custom show more ${num}`}
            data-test-id="multiselect"
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          />
        </ExampleWrapper>
      );
      const tags = getAllByTestId('tag');
      const multiselect = getByTestId('multiselect');

      expect(tags).toHaveLength(6);
      expect(multiselect.textContent).toContain('custom show more 44');
    });

    it('renders closed menu when show more anchor is clicked', () => {
      const items = [];

      for (let x = 0; x < 50; x++) {
        items.push(`item-${x}`);
      }

      const { getByTestId } = render(
        <ExampleWrapper selectedItems={items}>
          <Multiselect
            renderShowMore={num => `custom show more ${num}`}
            data-test-id="multiselect"
            renderItem={({ value }) => <div data-test-id="tag">{value}</div>}
          />
        </ExampleWrapper>
      );

      fireEvent.mouseDown(getByTestId('show-more'));

      expect(getByTestId('multiselect')).toHaveAttribute('data-test-is-open', 'false');
    });

    it('limits number of visible tags when disabled', () => {
      const items = [];

      for (let x = 0; x < 50; x++) {
        items.push(`item-${x}`);
      }

      const { getAllByTestId } = render(
        <ExampleWrapper selectedItems={items}>
          <Multiselect
            disabled
            data-test-id="multiselect"
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          />
        </ExampleWrapper>
      );
      const tags = getAllByTestId('tag');

      expect(tags).toHaveLength(4);
    });

    it('focuses tag on click', async () => {
      const { getAllByTestId, getByTestId } = render(<DefaultTagExample />);
      const tags = getAllByTestId('tag');
      const multiselect = getByTestId('multiselect');

      await user.click(tags[0]);

      expect(tags[0]).toHaveFocus();
      expect(multiselect).not.toHaveClass('is-open');
    });

    it('removes tag on remove click', async () => {
      const onSelectSpy = jest.fn();
      const { container, getAllByTestId } = render(
        <DefaultTagExample onSelect={items => onSelectSpy(items)} />
      );

      const input = container.querySelector('input');
      const removes = getAllByTestId('remove');

      await user.click(input!);
      await user.click(removes[0]);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(onSelectSpy).toHaveBeenCalledWith(['item-2', 'item-3']);
    });

    it('does not remove tag when disabled', async () => {
      const onSelectSpy = jest.fn();
      const { getByTestId } = render(
        <ExampleWrapper selectedItems={['item-1']} onSelect={onSelectSpy}>
          <Multiselect
            disabled
            data-test-id="multiselect"
            renderItem={({ value, removeValue }) => (
              <div data-test-id="tag">
                {value}
                <button data-test-id="remove" onClick={() => removeValue()} tabIndex={-1}>
                  Remove
                </button>
              </div>
            )}
          />
        </ExampleWrapper>
      );

      await user.click(getByTestId('remove'));

      expect(onSelectSpy).not.toHaveBeenCalled();
    });

    it('focuses last tag on left arrow keydown with no input value', () => {
      const { getAllByTestId, container } = render(<DefaultTagExample />);
      const tags = getAllByTestId('tag');
      const input = container.querySelector('input');

      fireEvent.focus(input!);
      fireEvent.keyDown(input!, { key: KEYS.LEFT, keyCode: KEY_CODES.LEFT });

      expect(tags[tags.length - 1]).toHaveFocus();
    });

    it('does not focus last tag on left arrow keydown with input value', async () => {
      const { getAllByTestId, container } = render(<DefaultTagExample inputValue="hello" />);
      const tags = getAllByTestId('tag');
      const input = container.querySelector('input');

      await user.click(input!);
      fireEvent.keyDown(input!, { key: KEYS.LEFT, keyCode: KEY_CODES.LEFT });

      expect(tags[tags.length - 1]).not.toHaveFocus();
    });

    it('focuses first tag on home keydown with no input value', () => {
      const { getAllByTestId, container } = render(<DefaultTagExample />);
      const tags = getAllByTestId('tag');
      const input = container.querySelector('input');

      expect(tags[0]).not.toHaveFocus();

      fireEvent.keyDown(input!, { key: 'Home', keyCode: KEY_CODES.HOME });

      expect(tags[0]).toHaveFocus();
    });

    it('does not focus first tag on home keydown with input value', async () => {
      const { getAllByTestId, container } = render(<DefaultTagExample />);
      const tags = getAllByTestId('tag');
      const input = container.querySelector('input');

      fireEvent.keyDown(input!, { key: 'Home', keyCode: KEY_CODES.HOME });

      expect(tags[0]).toHaveFocus();

      await user.type(input!, 'hello');

      fireEvent.keyDown(input!, { key: 'Home', keyCode: KEY_CODES.HOME });

      expect(tags[0]).not.toHaveFocus();
    });

    it('removes last tag on backspace keydown is pressed with no input value', () => {
      const onSelectSpy = jest.fn();
      const { container } = render(<DefaultTagExample onSelect={items => onSelectSpy(items)} />);
      const input = container.querySelector('input');

      fireEvent.keyDown(input!, { keyCode: KEY_CODES.BACKSPACE });

      expect(onSelectSpy).toHaveBeenCalledWith(['item-1', 'item-2']);
    });

    it('deletes current tag on backspace keydown', () => {
      const onSelectSpy = jest.fn();
      const { getAllByTestId } = render(
        <DefaultTagExample onSelect={items => onSelectSpy(items)} />
      );
      const tags = getAllByTestId('tag');

      fireEvent.keyDown(tags[1], { keyCode: KEY_CODES.BACKSPACE });

      expect(onSelectSpy).toHaveBeenCalledWith(['item-1', 'item-3']);
    });

    it('deletes current tag on delete keydown', () => {
      const onSelectSpy = jest.fn();
      const { getAllByTestId } = render(
        <DefaultTagExample onSelect={items => onSelectSpy(items)} />
      );
      const tags = getAllByTestId('tag');

      fireEvent.keyDown(tags[1], { keyCode: KEY_CODES.DELETE });

      expect(onSelectSpy).toHaveBeenCalledWith(['item-1', 'item-3']);
    });

    it('focuses input on end keydown', () => {
      const { getAllByTestId, container } = render(<DefaultTagExample />);
      const input = container.querySelector('input');
      const tags = getAllByTestId('tag');

      fireEvent.keyDown(tags[1], { keyCode: KEY_CODES.END });

      expect(input).toHaveFocus();
    });

    it('remain on first tag on left keydown', async () => {
      const { getAllByTestId } = render(<DefaultTagExample />);
      const tags = getAllByTestId('tag');

      await user.click(tags[0]);
      fireEvent.keyDown(tags[0], { key: KEYS.LEFT, keyCode: KEY_CODES.LEFT });
      expect(tags[0]).toHaveFocus();
    });

    it('focus input on right keydown when last tag is focused', async () => {
      const { getAllByTestId, container } = render(<DefaultTagExample />);
      const input = container.querySelector('input');

      await user.click(input!);

      const tags = getAllByTestId('tag');
      const lastTag = tags[tags.length - 1];

      await user.click(lastTag);
      fireEvent.keyDown(lastTag, { key: KEYS.RIGHT, keyCode: KEY_CODES.RIGHT });

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(input).toHaveFocus();
    });

    it('focus remains on input when navigating away from nested menu', async () => {
      const { container } = render(
        <Dropdown selectedItems={['item-1', 'item-2']}>
          <Field>
            <Label>Pick Fruits</Label>
            <Multiselect renderItem={({ value }) => <div>{value}</div>} />
          </Field>
          <Menu>
            <Item value="apple">Apple</Item>
            {/* Nested menu uses a PreviousItem */}
            <PreviousItem value="back">Back</PreviousItem>
          </Menu>
        </Dropdown>
      );
      const input = container.querySelector('input');

      await user.click(input!);
      fireEvent.keyDown(input!, { key: KEYS.LEFT, keyCode: KEY_CODES.LEFT });

      expect(input!).toHaveFocus();
    });

    describe('RTL Layout', () => {
      it('focus remains on input when navigating away from nested menu in RTL', async () => {
        const { container } = renderRtl(
          <Dropdown selectedItems={['item-1', 'item-2']}>
            <Field>
              <Label>Pick Fruits</Label>
              <Multiselect renderItem={({ value }) => <div>{value}</div>} />
            </Field>
            <Menu>
              <Item value="apple">Apple</Item>
              {/* Nested menu uses a PreviousItem */}
              <PreviousItem value="back">Back</PreviousItem>
            </Menu>
          </Dropdown>
        );
        const input = container.querySelector('input');

        await user.click(input!);
        fireEvent.keyDown(input!, { key: KEYS.RIGHT, keyCode: KEY_CODES.RIGHT });

        expect(input!).toHaveFocus();
      });

      it('focuses last tag on right arrow keydown with no input value', async () => {
        const { getAllByTestId, container } = renderRtl(<DefaultTagExample />);
        const tags = getAllByTestId('tag');
        const input = container.querySelector('input');

        await user.click(input!);
        fireEvent.keyDown(input!, { key: KEYS.RIGHT, keyCode: KEY_CODES.RIGHT });

        expect(tags[tags.length - 1]).toHaveFocus();
      });

      it('remain on first tag on right keydown', async () => {
        const { getAllByTestId } = renderRtl(<DefaultTagExample />);
        const tags = getAllByTestId('tag');

        await user.click(tags[0]);
        fireEvent.keyDown(tags[0], { key: KEYS.RIGHT, keyCode: KEY_CODES.RIGHT });
        expect(tags[0]).toHaveFocus();
      });

      it('focus input on left keydown when last tag is focused', async () => {
        const { getAllByTestId, container } = renderRtl(<DefaultTagExample />);
        const input = container.querySelector('input');

        await user.click(input!);

        const tags = getAllByTestId('tag');
        const lastTag = tags[tags.length - 1];

        await user.click(lastTag);
        fireEvent.keyDown(lastTag, { key: KEYS.LEFT, keyCode: KEY_CODES.LEFT });

        act(() => {
          jest.runOnlyPendingTimers();
        });

        expect(input).toHaveFocus();
      });
    });
  });
});
