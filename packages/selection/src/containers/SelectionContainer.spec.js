/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import KEY_CODES from '../constants/KEY_CODES';
import SelectionContainer from './SelectionContainer';
import { render, renderRtl, fireEvent } from 'garden-test-utils';

jest.useFakeTimers();

describe('SelectionContainer', () => {
  const itemValues = ['Item-1', 'Item-2', 'Item-3'];

  const BasicExample = ({ direction, defaultFocusedIndex, selectedAriaKey } = {}) => (
    <SelectionContainer
      id="test-id"
      direction={direction}
      defaultFocusedIndex={defaultFocusedIndex}
    >
      {({ getContainerProps, getItemProps, focusedKey, selectedKey }) => (
        <div {...getContainerProps({ 'data-test-id': 'container' })}>
          {itemValues.map(item => (
            <div
              {...getItemProps(
                {
                  key: item,
                  'data-test-id': 'item',
                  'data-focused': focusedKey === item,
                  'data-selected': selectedKey === item
                },
                {
                  selectedAriaKey
                }
              )}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </SelectionContainer>
  );

  describe('getContainerProps', () => {
    it('applies accessibility role', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('container')).toHaveAttribute('role', 'listbox');
    });

    it('applies accessibility active descendant when item is focused', () => {
      const { getByTestId } = render(<BasicExample />);
      const container = getByTestId('container');

      expect(container).toHaveAttribute('role', 'listbox');
      fireEvent.focus(container);
      expect(container).toHaveAttribute('aria-activedescendant', 'test-id--item-Item-1');
    });

    describe('onMouseDown', () => {
      it('does not focus item if container is moused down', () => {
        const { getByTestId, getAllByTestId } = render(<BasicExample />);

        fireEvent.mouseDown(getByTestId('container'));
        jest.runOnlyPendingTimers();

        expect(getAllByTestId('item')[0]).toHaveAttribute('data-focused', 'false');
      });
    });

    describe('onFocus', () => {
      it('does not focus item if item is moused down', () => {
        const { getAllByTestId } = render(<BasicExample />);
        const items = getAllByTestId('item');

        fireEvent.click(items[0]);

        expect(items[0]).toHaveAttribute('data-focused', 'false');
      });

      it('focuses first item if no item is currently selected', () => {
        const { getByTestId, getAllByTestId } = render(<BasicExample />);

        fireEvent.focus(getByTestId('container'));

        expect(getAllByTestId('item')[0]).toHaveAttribute('data-focused', 'true');
      });

      it('focuses last item if no item is currently selected and defaultFocusedIndex is provided', () => {
        const { getByTestId, getAllByTestId } = render(<BasicExample defaultFocusedIndex={-1} />);
        const items = getAllByTestId('item');

        fireEvent.focus(getByTestId('container'));

        expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
      });

      it('focuses currently selected item if available', () => {
        const { getByTestId, getAllByTestId } = render(<BasicExample />);
        const container = getByTestId('container');
        const items = getAllByTestId('item');

        fireEvent.click(items[items.length - 1]);
        fireEvent.blur(container);
        fireEvent.focus(container);

        expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
      });
    });

    describe('onBlur', () => {
      it('clears currently focused item', () => {
        const { getByTestId, getAllByTestId } = render(<BasicExample />);
        const container = getByTestId('container');
        const items = getAllByTestId('item');

        fireEvent.focus(container);
        expect(items[0]).toHaveAttribute('data-focused', 'true');

        fireEvent.blur(container);
        expect(items[0]).toHaveAttribute('data-focused', 'false');
      });
    });

    describe('onKeyDown', () => {
      describe('ENTER keyCode', () => {
        it('selects currently focused item', () => {
          const { getByTestId, getAllByTestId } = render(<BasicExample />);
          const container = getByTestId('container');
          const items = getAllByTestId('item');

          fireEvent.focus(container);
          fireEvent.keyDown(container, { keyCode: KEY_CODES.ENTER });
          expect(items[0]).toHaveAttribute('data-selected', 'true');
        });
      });

      describe('SPACE keyCode', () => {
        it('selects currently focused item', () => {
          const { getByTestId, getAllByTestId } = render(<BasicExample />);
          const container = getByTestId('container');
          const items = getAllByTestId('item');

          fireEvent.focus(container);
          fireEvent.keyDown(container, { keyCode: KEY_CODES.SPACE });
          expect(items[0]).toHaveAttribute('data-selected', 'true');
        });
      });

      describe('HOME keyCode', () => {
        it('focuses first available item', () => {
          const { getByTestId, getAllByTestId } = render(<BasicExample />);
          const container = getByTestId('container');
          const items = getAllByTestId('item');

          fireEvent.focus(container);
          fireEvent.keyDown(container, { keyCode: KEY_CODES.HOME });
          expect(items[0]).toHaveAttribute('data-focused', 'true');
        });
      });

      describe('END keyCode', () => {
        it('focuses last available item', () => {
          const { getByTestId, getAllByTestId } = render(<BasicExample />);
          const container = getByTestId('container');
          const items = getAllByTestId('item');

          fireEvent.focus(container);
          fireEvent.keyDown(container, { keyCode: KEY_CODES.END });
          expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
        });
      });

      describe('while in horizontal mode', () => {
        describe('LEFT keyCode', () => {
          describe('when dir is LTR', () => {
            it('decrements focusedIndex if currently greater than 0', () => {
              const { getByTestId, getAllByTestId } = render(<BasicExample />);
              const container = getByTestId('container');
              const items = getAllByTestId('item');

              fireEvent.click(items[1]);
              fireEvent.keyDown(container, { keyCode: KEY_CODES.LEFT });

              expect(items[0]).toHaveAttribute('data-focused', 'true');
            });

            it('decrements and wraps focusedIndex if currently less than or equal to 0', () => {
              const { getByTestId, getAllByTestId } = render(<BasicExample />);
              const container = getByTestId('container');
              const items = getAllByTestId('item');

              fireEvent.click(items[0]);
              fireEvent.keyDown(container, { keyCode: KEY_CODES.LEFT });
              expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
            });
          });

          describe('when dir is RTL', () => {
            it('increments focusedIndex if currently less than items length', () => {
              const { getByTestId, getAllByTestId } = renderRtl(<BasicExample />);
              const container = getByTestId('container');
              const items = getAllByTestId('item');

              fireEvent.click(items[0]);
              fireEvent.keyDown(container, { keyCode: KEY_CODES.LEFT });
              expect(items[1]).toHaveAttribute('data-focused', 'true');
            });

            it('increments and wraps focusedIndex if currently greater than or equal to items length', () => {
              const { getByTestId, getAllByTestId } = renderRtl(<BasicExample />);
              const container = getByTestId('container');
              const items = getAllByTestId('item');

              fireEvent.click(items[items.length - 1]);
              fireEvent.keyDown(container, { keyCode: KEY_CODES.LEFT });
              expect(items[0]).toHaveAttribute('data-focused', 'true');
            });
          });
        });

        describe('RIGHT keyCode', () => {
          describe('when dir is LTR', () => {
            it('increments focusedIndex if currently less than items length', () => {
              const { getByTestId, getAllByTestId } = render(<BasicExample />);
              const container = getByTestId('container');
              const items = getAllByTestId('item');

              fireEvent.click(items[0]);
              fireEvent.keyDown(container, { keyCode: KEY_CODES.RIGHT });

              expect(items[1]).toHaveAttribute('data-focused', 'true');
            });

            it('increments and wrap focusedIndex if currently greater than or equal to items length', () => {
              const { getByTestId, getAllByTestId } = render(<BasicExample />);
              const container = getByTestId('container');
              const items = getAllByTestId('item');

              fireEvent.click(items[items.length - 1]);
              fireEvent.keyDown(container, { keyCode: KEY_CODES.RIGHT });

              expect(items[0]).toHaveAttribute('data-focused', 'true');
            });
          });

          describe('when dir is RTL', () => {
            it('decrements focusedIndex if currently greater than 0', () => {
              const { getByTestId, getAllByTestId } = renderRtl(<BasicExample />);
              const container = getByTestId('container');
              const items = getAllByTestId('item');

              fireEvent.click(items[1]);
              fireEvent.keyDown(container, { keyCode: KEY_CODES.RIGHT });
              expect(items[0]).toHaveAttribute('data-focused', 'true');
            });

            it('decrements and wraps focusedIndex if currently 0', () => {
              const { getByTestId, getAllByTestId } = renderRtl(<BasicExample />);
              const container = getByTestId('container');
              const items = getAllByTestId('item');

              fireEvent.click(items[0]);
              fireEvent.keyDown(container, { keyCode: KEY_CODES.RIGHT });
              expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
            });
          });
        });

        describe('UP keyCode', () => {
          it('does not perform any action', () => {
            const { getByTestId, getAllByTestId } = render(<BasicExample />);
            const container = getByTestId('container');
            const items = getAllByTestId('item');

            fireEvent.click(items[0]);
            fireEvent.keyDown(container, { keyCode: KEY_CODES.UP });

            items.forEach(item => {
              expect(item).toHaveAttribute('data-focused', 'false');
            });
          });
        });

        describe('DOWN keyCode', () => {
          it('does not perform any action', () => {
            const { getByTestId, getAllByTestId } = render(<BasicExample />);
            const container = getByTestId('container');
            const items = getAllByTestId('item');

            fireEvent.click(items[0]);
            fireEvent.keyDown(container, { keyCode: KEY_CODES.DOWN });

            items.forEach(item => {
              expect(item).toHaveAttribute('data-focused', 'false');
            });
          });
        });
      });

      describe('while using vertical direction', () => {
        describe('UP keyCode', () => {
          it('decrements focusedIndex if currently greater than 0', () => {
            const { getByTestId, getAllByTestId } = render(<BasicExample direction="vertical" />);
            const container = getByTestId('container');
            const items = getAllByTestId('item');

            fireEvent.click(items[1]);
            fireEvent.keyDown(container, { keyCode: KEY_CODES.UP });
            expect(items[0]).toHaveAttribute('data-focused', 'true');
          });

          it('decrements and wraps focusedIndex if currently less than or equal to 0', () => {
            const { getByTestId, getAllByTestId } = render(<BasicExample direction="vertical" />);
            const container = getByTestId('container');
            const items = getAllByTestId('item');

            fireEvent.click(items[0]);
            fireEvent.keyDown(container, { keyCode: KEY_CODES.UP });
            expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
          });
        });

        describe('DOWN keyCode', () => {
          it('increments focusedIndex if currently less than items length', () => {
            const { getByTestId, getAllByTestId } = render(<BasicExample direction="vertical" />);
            const container = getByTestId('container');
            const items = getAllByTestId('item');

            fireEvent.click(items[0]);
            fireEvent.keyDown(container, { keyCode: KEY_CODES.DOWN });
            expect(items[1]).toHaveAttribute('data-focused', 'true');
          });

          it('increments and wraps focusedIndex if currently greater than or equal to items length', () => {
            const { getByTestId, getAllByTestId } = render(<BasicExample direction="vertical" />);
            const container = getByTestId('container');
            const items = getAllByTestId('item');

            fireEvent.click(items[items.length - 1]);
            fireEvent.keyDown(container, { keyCode: KEY_CODES.DOWN });
            expect(items[0]).toHaveAttribute('data-focused', 'true');
          });
        });

        describe('LEFT keyCode', () => {
          it('does not perform any action', () => {
            const { getByTestId, getAllByTestId } = render(<BasicExample direction="vertical" />);
            const container = getByTestId('container');
            const items = getAllByTestId('item');

            fireEvent.click(items[0]);
            fireEvent.keyDown(container, { keyCode: KEY_CODES.LEFT });

            items.forEach(item => {
              expect(item).toHaveAttribute('data-focused', 'false');
            });
          });
        });

        describe('RIGHT keyCode', () => {
          it('does not perform any action', () => {
            const { getByTestId, getAllByTestId } = render(<BasicExample direction="vertical" />);
            const container = getByTestId('container');
            const items = getAllByTestId('item');

            fireEvent.click(items[0]);
            fireEvent.keyDown(container, { keyCode: KEY_CODES.RIGHT });

            items.forEach(item => {
              expect(item).toHaveAttribute('data-focused', 'false');
            });
          });
        });
      });
    });
  });

  describe('getItemProps', () => {
    it('throws if no item is applied', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
          <SelectionContainer>
            {({ getContainerProps, getItemProps }) => (
              <div {...getContainerProps()}>
                <div {...getItemProps()}>Example</div>
              </div>
            )}
          </SelectionContainer>
        );
      }).toThrow(
        '"key" must be defined within getItemProps regardless of being used within a .map()'
      );

      console.error = originalError;
    });

    it('does not throw if item is applied', () => {
      expect(() => {
        render(<BasicExample />);
      }).not.toThrow();
    });

    it('applies accessibility role attribute', () => {
      const { getAllByTestId } = render(<BasicExample />);

      expect(getAllByTestId('item')[0]).toHaveAttribute('role', 'option');
    });

    it('applies default selected aria value if none provided', () => {
      const { getAllByTestId } = render(<BasicExample />);

      expect(getAllByTestId('item')[0]).toHaveAttribute('aria-selected');
    });

    it('applies custom selected aria value if provided', () => {
      const { getAllByTestId } = render(<BasicExample selectedAriaKey="aria-pressed" />);

      expect(getAllByTestId('item')[0]).toHaveAttribute('aria-pressed');
    });

    describe('onClick', () => {
      it('should select item that was clicked', () => {
        const { getAllByTestId } = render(<BasicExample />);
        const items = getAllByTestId('item');

        fireEvent.click(items[items.length - 1]);
        expect(items[items.length - 1]).toHaveAttribute('aria-selected', 'true');
      });

      it('should remove focus from all items', () => {
        const { getAllByTestId } = render(<BasicExample />);
        const items = getAllByTestId('item');

        fireEvent.click(items[items.length - 1]);

        items.forEach(item => {
          expect(item).toHaveAttribute('data-focused', 'false');
        });
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
          <SelectionContainer id="test-id">
            {({ getContainerProps, getItemProps, focusedKey, selectedKey }) => (
              <div {...getContainerProps({ 'data-test-id': 'container' })}>
                {customItems.map(item => (
                  <div
                    {...getItemProps({
                      key: item.text,
                      index: item.index,
                      'data-test-id': 'item',
                      'data-focused': focusedKey === item.text,
                      'data-selected': selectedKey === item.text
                    })}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            )}
          </SelectionContainer>
        );

        const container = getByTestId('container');
        const items = getAllByTestId('item');

        fireEvent.keyDown(container, { keyCode: KEY_CODES.RIGHT });
        expect(items[0]).toHaveAttribute('data-focused', 'true');

        fireEvent.keyDown(container, { keyCode: KEY_CODES.RIGHT });
        expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');

        fireEvent.keyDown(container, { keyCode: KEY_CODES.RIGHT });
        expect(items[1]).toHaveAttribute('data-focused', 'true');
      });
    });
  });
});
