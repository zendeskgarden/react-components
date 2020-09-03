/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent, renderRtl, act } from 'garden-test-utils';
import { Dropdown, Multiselect, Field, Menu, Item, Label } from '..';
import { IDropdownProps } from '../Dropdown/Dropdown';
import { KEY_CODES } from '@zendeskgarden/container-utilities';

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
  it('focuses internal input when opened', () => {
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

    fireEvent.click(getByTestId('multiselect'));

    expect(document.activeElement!.nodeName).toBe('INPUT');
  });

  it('closes on multiselect blur', () => {
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

    act(() => {
      fireEvent.focus(input!);
    });

    expect(multiselect).toHaveClass('is-focused');

    act(() => {
      fireEvent.blur(multiselect!);
      jest.runOnlyPendingTimers();
    });

    expect(multiselect).not.toHaveClass('is-focused');
  });

  it('applies correct styling if open', () => {
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

    fireEvent.click(multiselect);

    expect(multiselect).toHaveClass('is-focused');
    expect(multiselect).toHaveClass('is-open');
  });

  it('applies correct styling if label is hovered', () => {
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

    fireEvent.mouseEnter(getByTestId('label'));

    expect(getByTestId('multiselect')).toHaveClass('is-hovered');
  });

  describe('Interaction', () => {
    it('opens on click', () => {
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

      fireEvent.click(multiselect);

      expect(multiselect).toHaveClass('is-open');
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
      expect(multiselect).toHaveClass('is-open');

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

      fireEvent.keyDown(multiselect, { key: 'ArrowUp', keyCode: 38 });
      expect(multiselect).toHaveClass('is-open');

      const items = getAllByTestId('item');

      expect(items[items.length - 1]).toHaveAttribute('aria-selected', 'true');
    });

    it('closes on escape key', () => {
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

      fireEvent.click(multiselect);
      expect(multiselect).toHaveClass('is-open');

      fireEvent.keyDown(multiselect.querySelector('input')!, { key: 'Escape', keyCode: 27 });
      expect(multiselect).not.toHaveClass('is-open');
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

    it('shows all tags when focused', () => {
      const items = [];

      for (let x = 0; x < 50; x++) {
        items.push(`item-${x}`);
      }

      const { getAllByTestId, container } = render(<DefaultTagExample selectedItems={items} />);
      const input = container.querySelector('input');

      fireEvent.focus(input!);
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

    it('focuses tag on click', () => {
      const { getAllByTestId, getByTestId } = render(<DefaultTagExample />);
      const tags = getAllByTestId('tag');
      const multiselect = getByTestId('multiselect');

      fireEvent.focus(tags[0]);

      expect(tags[0]).toHaveFocus();
      expect(multiselect).not.toHaveClass('is-open');
    });

    it('removes tag on remove click ', () => {
      const onSelectSpy = jest.fn();
      const { container, getAllByTestId } = render(
        <DefaultTagExample onSelect={items => onSelectSpy(items)} />
      );

      const input = container.querySelector('input');
      const removes = getAllByTestId('remove');

      fireEvent.focus(input!);
      fireEvent.click(removes[0]);

      expect(onSelectSpy).toHaveBeenCalledWith(['item-2', 'item-3']);
    });

    it('focuses last tag on left arrow keydown with no input value', () => {
      const { getAllByTestId, container } = render(<DefaultTagExample />);
      const tags = getAllByTestId('tag');
      const input = container.querySelector('input');

      fireEvent.focus(input!);
      fireEvent.keyDown(input!, { key: 'ArrowLeft', keyCode: KEY_CODES.LEFT });

      expect(tags[tags.length - 1]).toHaveFocus();
    });

    it('does not focus last tag on left arrow keydown with input value', () => {
      const { getAllByTestId, container } = render(<DefaultTagExample inputValue="hello" />);
      const tags = getAllByTestId('tag');
      const input = container.querySelector('input');

      fireEvent.focus(input!);
      fireEvent.keyDown(input!, { key: 'ArrowLeft', keyCode: KEY_CODES.LEFT });

      expect(tags[tags.length - 1]).not.toHaveFocus();
    });

    it('focuses first tag on home keydown with no input value', () => {
      const { getAllByTestId, container } = render(<DefaultTagExample />);
      const tags = getAllByTestId('tag');
      const input = container.querySelector('input');

      fireEvent.focus(input!);
      fireEvent.keyDown(input!, { key: 'Home', keyCode: KEY_CODES.HOME });

      expect(tags[0]).toHaveFocus();
    });

    it('does not focus first tag on home keydown with input value', () => {
      const { getAllByTestId, container } = render(<DefaultTagExample inputValue="hello" />);
      const tags = getAllByTestId('tag');
      const input = container.querySelector('input');

      fireEvent.focus(input!);
      fireEvent.keyDown(input!, { key: 'Home', keyCode: KEY_CODES.LEFT });

      expect(tags[0]).not.toHaveFocus();
    });

    it('removes last tag on backspace keydown is pressed with no input value', () => {
      const onSelectSpy = jest.fn();
      const { container } = render(<DefaultTagExample onSelect={items => onSelectSpy(items)} />);
      const input = container.querySelector('input');

      fireEvent.focus(input!);
      fireEvent.keyDown(input!, { key: 'Backspace', keyCode: KEY_CODES.BACKSPACE });

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

    it('remain on first tag on left keydown', () => {
      const { getAllByTestId } = render(<DefaultTagExample />);
      const tags = getAllByTestId('tag');

      fireEvent.focus(tags[0]);
      fireEvent.keyDown(tags[0], { keyCode: KEY_CODES.LEFT });
      expect(tags[0]).toHaveFocus();
    });

    it('focus input on right keydown when last tag is focused', () => {
      const { getAllByTestId, container } = render(<DefaultTagExample />);
      const input = container.querySelector('input');

      fireEvent.focus(input!);

      const tags = getAllByTestId('tag');
      const lastTag = tags[tags.length - 1];

      fireEvent.focus(lastTag);
      fireEvent.keyDown(lastTag, { keyCode: KEY_CODES.RIGHT });

      expect(input).toHaveFocus();
    });

    describe('RTL Layout', () => {
      it('focuses last tag on right arrow keydown with no input value', () => {
        const { getAllByTestId, container } = renderRtl(<DefaultTagExample />);
        const tags = getAllByTestId('tag');
        const input = container.querySelector('input');

        fireEvent.focus(input!);
        fireEvent.keyDown(input!, { key: 'ArrowRight', keyCode: KEY_CODES.RIGHT });

        expect(tags[tags.length - 1]).toHaveFocus();
      });

      it('remain on first tag on right keydown', () => {
        const { getAllByTestId } = renderRtl(<DefaultTagExample />);
        const tags = getAllByTestId('tag');

        fireEvent.focus(tags[0]);
        fireEvent.keyDown(tags[0], { keyCode: KEY_CODES.RIGHT });
        expect(tags[0]).toHaveFocus();
      });

      it('focus input on left keydown when last tag is focused', () => {
        const { getAllByTestId, container } = renderRtl(<DefaultTagExample />);
        const input = container.querySelector('input');

        fireEvent.focus(input!);

        const tags = getAllByTestId('tag');
        const lastTag = tags[tags.length - 1];

        fireEvent.focus(lastTag);
        fireEvent.keyDown(lastTag, { keyCode: KEY_CODES.LEFT });

        expect(input).toHaveFocus();
      });
    });
  });
});
