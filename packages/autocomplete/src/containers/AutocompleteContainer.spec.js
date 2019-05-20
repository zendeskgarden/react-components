/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import { render, renderRtl, fireEvent } from 'garden-test-utils';
import AutocompleteContainer from './AutocompleteContainer';

jest.useFakeTimers();

describe('AutocompleteContainer', () => {
  let onSelectSpy;

  const tagLabels = ['Tag1', 'Tag2', 'Tag3'];
  const itemLabels = ['Item1', 'Item2', 'Item3'];

  const Example = props => (
    <AutocompleteContainer
      {...props}
      id="test"
      trigger={({
        getTriggerProps,
        getInputProps,
        getTagProps,
        triggerRef,
        inputRef,
        tagFocusedKey
      }) => {
        return (
          <div {...getTriggerProps({ ref: triggerRef, 'data-test-id': 'trigger' })}>
            {tagLabels.map((tag, index) => {
              const key = `tag-${index}`;

              return (
                <div
                  {...getTagProps({
                    key,
                    'data-test-id': 'tag',
                    'data-focused': tagFocusedKey === key
                  })}
                >
                  {tag}
                </div>
              );
            })}
            <input
              {...getInputProps({
                ref: inputRef,
                'data-test-id': 'input'
              })}
            />
          </div>
        );
      }}
    >
      {({ getMenuProps, getItemProps, focusedKey }) => {
        return (
          <div
            {...getMenuProps({
              'data-test-id': 'menu'
            })}
          >
            {itemLabels.map((item, index) => {
              const key = `menu-item-${index}`;

              return (
                <div
                  {...getItemProps({
                    key,
                    'data-test-id': 'item',
                    'data-focused': focusedKey === key
                  })}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      }}
    </AutocompleteContainer>
  );

  beforeEach(() => {
    onSelectSpy = jest.fn();
  });

  describe('getTriggerProps()', () => {
    describe('onMouseDown', () => {
      it('sets triggerMousedDown to true', () => {
        const { getByTestId, queryByTestId } = render(<Example />);

        fireEvent.mouseDown(getByTestId('trigger'));

        expect(queryByTestId('menu')).toBe(null);
      });
    });

    describe('onMouseUp', () => {
      it('sets triggerMousedDown to false', () => {
        const { getByTestId, queryByTestId } = render(<Example />);

        fireEvent.mouseUp(getByTestId('trigger'));

        expect(queryByTestId('menu')).toBe(null);
      });
    });

    describe('onClick', () => {
      it('opens the dropdown if currently closed', () => {
        const { getByTestId, queryByTestId } = render(<Example />);

        fireEvent.click(getByTestId('trigger'));

        expect(queryByTestId('menu')).not.toBe(null);
      });

      it('closes the dropdown if currently open', () => {
        const { getByTestId, queryByTestId } = render(<Example />);

        fireEvent.click(getByTestId('trigger'));

        expect(queryByTestId('menu')).not.toBe(null);

        fireEvent.click(getByTestId('trigger'));

        expect(queryByTestId('menu')).toBe(null);
      });

      it('focuses the input', () => {
        const { getByTestId } = render(<Example />);

        fireEvent.click(getByTestId('trigger'));

        expect(getByTestId('input')).toHaveFocus();
      });
    });
  });

  describe('getTagProps()', () => {
    it('applies accessibility attributes', () => {
      const { getAllByTestId } = render(<Example />);

      expect(getAllByTestId('tag')[0]).toHaveAttribute('id', 'test--tag-tag-0');
    });

    describe('onClick', () => {
      it('sets clicked Tag as currently focused', () => {
        const { getAllByTestId } = render(<Example />);
        const tags = getAllByTestId('tag');

        fireEvent.click(tags[tags.length - 1]);

        expect(tags[tags.length - 1]).toHaveAttribute('data-focused', 'true');
      });

      it('focuses input', () => {
        const { getAllByTestId, getByTestId } = render(<Example />);

        fireEvent.click(getAllByTestId('tag')[0]);
        expect(getByTestId('input')).toHaveFocus();
      });
    });
  });

  describe('getInputProps()', () => {
    it('applies accessibility attributes', () => {
      const { getByTestId } = render(<Example />);
      const input = getByTestId('input');

      expect(input).toHaveAttribute('tabIndex', '0');
      expect(input).toHaveAttribute('role', 'combobox');
      expect(input).toHaveAttribute('aria-autocomplete', 'list');
      expect(input).toHaveAttribute('aria-haspopup', 'true');
      expect(input).toHaveAttribute('autoComplete', 'off');
    });

    describe('onChange', () => {
      it('clears focused menu item', () => {
        const { getByTestId, getAllByTestId } = render(<Example />);

        fireEvent.change(getByTestId('input'));

        getAllByTestId('tag').forEach(tag => {
          expect(tag).toHaveAttribute('data-focused', 'false');
        });
      });
    });

    describe('onKeyDown', () => {
      describe('space', () => {
        it('opens dropdown if not currently open', () => {
          const { getByTestId, queryByTestId } = render(<Example />);

          fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.SPACE });

          expect(queryByTestId('menu')).not.toBe(null);
        });
      });

      describe('up arrow', () => {
        it('focus previous menu item if dropdown is open', () => {
          const { getByTestId, getAllByTestId } = render(<Example isOpen />);

          fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.UP });

          const items = getAllByTestId('item');

          expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
        });

        it('focus last menu item if dropdown is closed', () => {
          const { getByTestId, getAllByTestId } = render(<Example />);

          fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.UP });

          const items = getAllByTestId('item');

          expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
        });
      });

      describe('down arrow', () => {
        it('focus next menu item if dropdown is open', () => {
          const { getByTestId, getAllByTestId } = render(<Example isOpen />);

          fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.DOWN });

          const items = getAllByTestId('item');

          expect(items[0]).toHaveAttribute('data-focused', 'true');
        });

        it('focus first menu item if dropdown is closed', () => {
          const { getByTestId, getAllByTestId } = render(<Example />);

          fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.DOWN });

          const items = getAllByTestId('item');

          expect(items[0]).toHaveAttribute('data-focused', 'true');
        });
      });

      describe('enter', () => {
        describe('when dropdown is open', () => {
          it('selects currently focused item if it exists', () => {
            const { getByTestId } = render(<Example isOpen onSelect={onSelectSpy} />);

            fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.DOWN });
            fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.ENTER });

            expect(onSelectSpy).toHaveBeenCalledWith('menu-item-0');
          });

          it('select first item otherwise', () => {
            const { getByTestId } = render(<Example isOpen onSelect={onSelectSpy} />);

            fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.ENTER });

            expect(onSelectSpy).toHaveBeenCalledWith('menu-item-0');
          });
        });

        describe('when dropdown is closed', () => {
          it('opens dropdown if no tags are selected', () => {
            const { getByTestId } = render(<Example onSelect={onSelectSpy} />);

            fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.ENTER });

            expect(getByTestId('menu')).not.toBe(null);
          });
        });
      });

      describe('escape', () => {
        it('closes dropdown if open', () => {
          const { getByTestId, queryByTestId } = render(<Example onSelect={onSelectSpy} />);

          fireEvent.click(getByTestId('trigger'));

          expect(queryByTestId('menu')).not.toBe(null);

          fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.ESCAPE });

          expect(queryByTestId('menu')).toBe(null);
        });
      });

      describe('end', () => {
        describe('when dropdown is open', () => {
          it('selects currently focused item if it exists', () => {
            const { getByTestId, getAllByTestId } = render(<Example isOpen />);

            fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.END });

            const items = getAllByTestId('item');

            expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
          });
        });

        describe('when dropdown is closed', () => {
          it('does not open dropdown if target value is non-empty', () => {
            const { getByTestId, queryByTestId } = render(<Example />);

            fireEvent.keyDown(getByTestId('input'), {
              keyCode: KEY_CODES.END,
              target: { value: 'test' }
            });

            expect(queryByTestId('menu')).toBe(null);
          });

          it('does not open dropdown if no tags are selected', () => {
            const { getByTestId, queryByTestId } = render(<Example />);

            fireEvent.keyDown(getByTestId('input'), {
              keyCode: KEY_CODES.END,
              target: { value: '' }
            });

            expect(queryByTestId('menu')).toBe(null);
          });

          it('opens dropdown otherwise', () => {
            const { getByTestId, getAllByTestId, queryByTestId } = render(<Example />);

            fireEvent.click(getAllByTestId('tag')[0]);

            fireEvent.keyDown(getByTestId('input'), {
              keyCode: KEY_CODES.END,
              target: { value: '' }
            });

            expect(queryByTestId('menu')).not.toBe(null);
          });
        });
      });

      describe('home', () => {
        it('selects first menu item when dropdown is open', () => {
          const { getByTestId, getAllByTestId } = render(<Example isOpen />);

          fireEvent.keyDown(getByTestId('input'), {
            keyCode: KEY_CODES.HOME
          });

          expect(getAllByTestId('item')[0]).toHaveAttribute('data-focused');
        });

        it('selects first tag when target value is empty', () => {
          const { getByTestId, getAllByTestId } = render(<Example />);

          fireEvent.keyDown(getByTestId('input'), {
            keyCode: KEY_CODES.HOME,
            target: { value: '' }
          });

          expect(getAllByTestId('tag')[0]).toHaveAttribute('data-focused');
        });
      });

      describe('right', () => {
        describe('when in LTR locale', () => {
          it('opens dropdown if target value is empty and last tag is focused', () => {
            const { getByTestId, getAllByTestId, queryByTestId } = render(<Example />);
            const tags = getAllByTestId('tag');

            fireEvent.click(tags[tags.length - 1]);
            fireEvent.keyDown(getByTestId('input'), {
              keyCode: KEY_CODES.RIGHT,
              target: { value: '' }
            });

            expect(queryByTestId('menu')).not.toBe(null);
          });

          it('otherwise selects next tag if dropdown is closed', () => {
            const { getByTestId, getAllByTestId } = render(<Example />);

            fireEvent.keyDown(getByTestId('input'), {
              keyCode: KEY_CODES.RIGHT,
              target: { value: '' }
            });

            expect(getAllByTestId('tag')[0]).toHaveAttribute('data-focused');
          });
        });

        describe('when in RTL locale', () => {
          it('selects previous tag if target value is empty and non-first tag is currently selected', () => {
            const { getByTestId, getAllByTestId } = renderRtl(<Example />);
            const tags = getAllByTestId('tag');

            fireEvent.click(tags[1]);
            fireEvent.keyDown(getByTestId('input'), {
              keyCode: KEY_CODES.RIGHT,
              target: { value: '' }
            });

            expect(tags[0]).toHaveAttribute('data-focused');
          });
        });
      });

      describe('left', () => {
        describe('when in LTR locale', () => {
          it('selects previous if target value is empty and first tag is not selected', () => {
            const { getByTestId, getAllByTestId } = render(<Example />);
            const tags = getAllByTestId('tag');

            fireEvent.keyDown(getByTestId('input'), {
              keyCode: KEY_CODES.LEFT,
              target: { value: '' }
            });

            expect(tags[tags.length - 1]).toHaveAttribute('data-focused');
          });
        });

        describe('when in RTL locale', () => {
          it('opens dropdown if target value is empty and last tag is selected', () => {
            const { getByTestId, getAllByTestId } = renderRtl(<Example />);
            const tags = getAllByTestId('tag');

            fireEvent.click(tags[2]);
            fireEvent.keyDown(getByTestId('input'), {
              keyCode: KEY_CODES.LEFT,
              target: { value: '' }
            });

            expect(getByTestId('menu')).not.toBe(null);
          });

          it('focuses the next tag if dropdown is closed', () => {
            const { getByTestId, getAllByTestId } = renderRtl(<Example />);
            const tags = getAllByTestId('tag');

            fireEvent.click(tags[1]);
            fireEvent.keyDown(getByTestId('input'), {
              keyCode: KEY_CODES.LEFT,
              target: { value: '' }
            });

            expect(tags[0]).toHaveAttribute('data-focused');
          });
        });
      });
    });
  });

  describe('getMenuProps()', () => {
    it('applies accessibility attributes correctly', () => {
      const { getByTestId } = render(<Example isOpen />);

      expect(getByTestId('menu')).toHaveAttribute('role', 'listbox');
    });

    describe('onMouseUp', () => {
      it('focuses input', () => {
        const { getByTestId } = render(<Example isOpen />);

        fireEvent.mouseDown(getByTestId('menu'));
        fireEvent.mouseUp(getByTestId('menu'));

        expect(getByTestId('input')).toHaveFocus();
      });
    });
  });

  describe('getItemProps()', () => {
    it('applies correct accessibility attributes', () => {
      const { getAllByTestId } = render(<Example isOpen />);
      const item = getAllByTestId('item')[0];

      expect(item).toHaveAttribute('id', 'test--item-menu-item-0');
      expect(item).toHaveAttribute('role', 'option');
    });

    it('sets current focus selection model if current item is focused', () => {
      const { getAllByTestId, getByTestId } = render(<Example isOpen />);

      fireEvent.keyDown(getByTestId('input'), { keyCode: KEY_CODES.DOWN });

      expect(getAllByTestId('item')[0]).toHaveAttribute('data-focused', 'true');
    });

    describe('onClick', () => {
      it('selects the clicked menu item', () => {
        const { getAllByTestId } = render(<Example isOpen onSelect={onSelectSpy} />);

        fireEvent.click(getAllByTestId('item')[0]);

        expect(onSelectSpy).toHaveBeenCalledWith('menu-item-0');
      });
    });

    describe('custom index ordering', () => {
      it('applies custom focus ordering if index is provided', () => {
        const customItems = [
          { text: 'Item 1', index: 0 },
          { text: 'Item 2', index: 2 },
          { text: 'Item 3', index: 1 }
        ];

        const { getByTestId, getAllByTestId } = render(
          <AutocompleteContainer
            id="test"
            isOpen
            trigger={({ getTriggerProps, getInputProps, triggerRef, inputRef }) => {
              return (
                <div {...getTriggerProps({ ref: triggerRef })}>
                  <input
                    {...getInputProps({
                      ref: inputRef,
                      'data-test-id': 'input'
                    })}
                  />
                </div>
              );
            }}
          >
            {({ getMenuProps, getItemProps, focusedKey }) => {
              return (
                <div {...getMenuProps()}>
                  {customItems.map(item => {
                    const key = `menu-item-${item.index}`;

                    return (
                      <div
                        {...getItemProps({
                          key,
                          index: item.index,
                          'data-test-id': 'item',
                          'data-focused': focusedKey === key
                        })}
                      >
                        {item.text}
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </AutocompleteContainer>
        );

        const input = getByTestId('input');
        const items = getAllByTestId('item');

        fireEvent.keyDown(input, { keyCode: KEY_CODES.DOWN });
        expect(items[0]).toHaveAttribute('data-focused', 'true');

        fireEvent.keyDown(input, { keyCode: KEY_CODES.DOWN });
        expect(items[2]).toHaveAttribute('data-focused', 'true');

        fireEvent.keyDown(input, { keyCode: KEY_CODES.DOWN });
        expect(items[1]).toHaveAttribute('data-focused', 'true');
      });
    });
  });

  describe('openDropdown()', () => {
    it('opens dropdown and removes focused tag', () => {
      const { getAllByTestId, getByTestId } = render(<Example />);

      fireEvent.click(getByTestId('trigger'));

      expect(getByTestId('menu')).not.toBe(null);

      getAllByTestId('tag').forEach(tag => {
        expect(tag).not.toHaveAttribute('data-focused', 'true');
      });
    });
  });
});
