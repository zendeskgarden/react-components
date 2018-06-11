/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import KEY_CODES from '../constants/KEY_CODES';
import SelectionContainer from './SelectionContainer';
import { mountWithTheme } from 'utils';

jest.useFakeTimers();

describe('SelectionContainer', () => {
  const itemValues = ['Item-1', 'Item-2', 'Item-3'];
  let wrapper;

  const basicExample = (direction, defaultFocusedIndex) => (
    <SelectionContainer
      id="test-id"
      direction={direction}
      defaultFocusedIndex={defaultFocusedIndex}
    >
      {({ getContainerProps, getItemProps, focusedKey, selectedKey }) => (
        <div {...getContainerProps({ 'data-test-id': 'container' })}>
          {itemValues.map(item => (
            <div
              {...getItemProps({
                key: item,
                'data-test-id': 'item',
                'data-focused': focusedKey === item,
                'data-selected': selectedKey === item
              })}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </SelectionContainer>
  );

  const findItems = enzymeWrapper => enzymeWrapper.find('[data-test-id="item"]');
  const findContainer = enzymeWrapper => enzymeWrapper.find('[data-test-id="container"]');

  beforeEach(() => {
    wrapper = mountWithTheme(basicExample());
  });

  describe('getContainerProps', () => {
    it('applies accessibility role', () => {
      const container = findContainer(wrapper);

      expect(container).toHaveProp('role', 'listbox');
    });

    it('applies accessibility active descendant when item is focused', () => {
      findContainer(wrapper).simulate('focus');

      expect(findContainer(wrapper)).toHaveProp('aria-activedescendant', 'test-id--item-Item-1');
    });

    describe('onMouseDown', () => {
      it('does not focus item if container is moused down', () => {
        findContainer(wrapper).simulate('mousedown');
        jest.runOnlyPendingTimers();
        wrapper.update();

        expect(findItems(wrapper).first()).toHaveProp('data-focused', false);
      });
    });

    describe('onFocus', () => {
      it('does not focus item if item is moused down', () => {
        findItems(wrapper)
          .first()
          .simulate('click');

        expect(findItems(wrapper).first()).toHaveProp('data-focused', false);
      });

      it('focuses first item if no item is currently selected', () => {
        findContainer(wrapper).simulate('focus');

        expect(findItems(wrapper).first()).toHaveProp('data-focused', true);
      });

      it('focuses last item if no item is currently selected and defaultFocusedIndex is provided', () => {
        wrapper = mountWithTheme(basicExample(undefined, -1));

        findContainer(wrapper).simulate('focus');

        expect(findItems(wrapper).last()).toHaveProp('data-focused', true);
      });

      it('focuses currently selected item if available', () => {
        findItems(wrapper)
          .last()
          .simulate('click');
        const container = findContainer(wrapper);

        container.simulate('blur');
        container.simulate('focus');

        expect(findItems(wrapper).last()).toHaveProp('data-focused', true);
      });
    });

    describe('onBlur', () => {
      it('clears currently focused item', () => {
        findContainer(wrapper).simulate('focus');
        expect(findItems(wrapper).first()).toHaveProp('data-focused', true);

        findContainer(wrapper).simulate('blur');
        expect(findItems(wrapper).first()).toHaveProp('data-focused', false);
      });
    });

    describe('onKeyDown', () => {
      describe('ENTER keyCode', () => {
        it('selects currently focused item', () => {
          const container = findContainer(wrapper);

          container.simulate('focus');
          container.simulate('keydown', { keyCode: KEY_CODES.ENTER });
          expect(findItems(wrapper).first()).toHaveProp('data-selected', true);
        });
      });

      describe('SPACE keyCode', () => {
        it('selects currently focused item', () => {
          const container = findContainer(wrapper);

          container.simulate('focus');
          container.simulate('keydown', { keyCode: KEY_CODES.SPACE });
          expect(findItems(wrapper).first()).toHaveProp('data-selected', true);
        });
      });

      describe('HOME keyCode', () => {
        it('focuses first available item', () => {
          const container = findContainer(wrapper);

          container.simulate('focus');
          container.simulate('keydown', { keyCode: KEY_CODES.HOME });
          expect(findItems(wrapper).first()).toHaveProp('data-focused', true);
        });
      });

      describe('END keyCode', () => {
        it('focuses last available item', () => {
          const container = findContainer(wrapper);

          container.simulate('focus');
          container.simulate('keydown', { keyCode: KEY_CODES.END });
          expect(findItems(wrapper).last()).toHaveProp('data-focused', true);
        });
      });

      describe('while in horizontal mode', () => {
        describe('LEFT keyCode', () => {
          describe('when dir is LTR', () => {
            it('decrements focusedIndex if currently greater than 0', () => {
              const container = findContainer(wrapper);

              findItems(wrapper)
                .at(1)
                .simulate('click');
              container.simulate('keydown', { keyCode: KEY_CODES.LEFT });

              expect(findItems(wrapper).first()).toHaveProp('data-focused', true);
            });

            it('decrements and wraps focusedIndex if currently less than or equal to 0', () => {
              const container = findContainer(wrapper);

              findItems(wrapper)
                .first()
                .simulate('click');
              container.simulate('keydown', { keyCode: KEY_CODES.LEFT });
              expect(findItems(wrapper).last()).toHaveProp('data-focused', true);
            });
          });

          describe('when dir is RTL', () => {
            beforeEach(() => {
              wrapper = mountWithTheme(basicExample(), { rtl: true });
            });

            it('increments focusedIndex if currently less than items length', () => {
              const container = findContainer(wrapper);

              findItems(wrapper)
                .first()
                .simulate('click');
              container.simulate('keydown', { keyCode: KEY_CODES.LEFT });
              expect(findItems(wrapper).at(1)).toHaveProp('data-focused', true);
            });

            it('increments and wraps focusedIndex if currently greater than or equal to items length', () => {
              const container = findContainer(wrapper);

              findItems(wrapper)
                .last()
                .simulate('click');
              container.simulate('keydown', { keyCode: KEY_CODES.LEFT });
              expect(findItems(wrapper).first()).toHaveProp('data-focused', true);
            });
          });
        });

        describe('RIGHT keyCode', () => {
          describe('when dir is LTR', () => {
            it('increments focusedIndex if currently less than items length', () => {
              const container = findContainer(wrapper);

              findItems(wrapper)
                .first()
                .simulate('click');
              container.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
              expect(findItems(wrapper).at(1)).toHaveProp('data-focused', true);
            });

            it('increments and wrap focusedIndex if currently greater than or equal to items length', () => {
              const container = findContainer(wrapper);

              findItems(wrapper)
                .last()
                .simulate('click');
              container.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
              expect(findItems(wrapper).first()).toHaveProp('data-focused', true);
            });
          });

          describe('when dir is RTL', () => {
            beforeEach(() => {
              wrapper = mountWithTheme(basicExample(), { rtl: true });
            });

            it('decrements focusedIndex if currently greater than 0', () => {
              const container = findContainer(wrapper);

              findItems(wrapper)
                .at(1)
                .simulate('click');
              container.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
              expect(findItems(wrapper).first()).toHaveProp('data-focused', true);
            });

            it('decrements and wraps focusedIndex if currently 0', () => {
              const container = findContainer(wrapper);

              findItems(wrapper)
                .first()
                .simulate('click');
              container.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
              expect(findItems(wrapper).last()).toHaveProp('data-focused', true);
            });
          });
        });

        describe('UP keyCode', () => {
          it('does not perform any action', () => {
            const container = findContainer(wrapper);

            findItems(wrapper)
              .first()
              .simulate('click');
            container.simulate('keydown', { keyCode: KEY_CODES.UP });
            const items = findItems(wrapper);

            expect(items.at(0)).toHaveProp('data-focused', false);
            expect(items.at(1)).toHaveProp('data-focused', false);
            expect(items.at(2)).toHaveProp('data-focused', false);
          });
        });

        describe('DOWN keyCode', () => {
          it('does not perform any action', () => {
            const container = findContainer(wrapper);

            findItems(wrapper)
              .first()
              .simulate('click');
            container.simulate('keydown', { keyCode: KEY_CODES.DOWN });
            const items = findItems(wrapper);

            expect(items.at(0)).toHaveProp('data-focused', false);
            expect(items.at(1)).toHaveProp('data-focused', false);
            expect(items.at(2)).toHaveProp('data-focused', false);
          });
        });
      });

      describe('while using vertical direction', () => {
        beforeEach(() => {
          wrapper = mountWithTheme(basicExample('vertical'));
        });

        describe('UP keyCode', () => {
          it('decrements focusedIndex if currently greater than 0', () => {
            const container = findContainer(wrapper);

            findItems(wrapper)
              .at(1)
              .simulate('click');
            container.simulate('keydown', { keyCode: KEY_CODES.UP });
            expect(findItems(wrapper).first()).toHaveProp('data-focused', true);
          });

          it('decrements and wraps focusedIndex if currently less than or equal to 0', () => {
            const container = findContainer(wrapper);

            findItems(wrapper)
              .first()
              .simulate('click');
            container.simulate('keydown', { keyCode: KEY_CODES.UP });
            expect(findItems(wrapper).last()).toHaveProp('data-focused', true);
          });
        });

        describe('DOWN keyCode', () => {
          it('increments focusedIndex if currently less than items length', () => {
            const container = findContainer(wrapper);

            findItems(wrapper)
              .first()
              .simulate('click');
            container.simulate('keydown', { keyCode: KEY_CODES.DOWN });
            expect(findItems(wrapper).at(1)).toHaveProp('data-focused', true);
          });

          it('increments and wraps focusedIndex if currently greater than or equal to items length', () => {
            const container = findContainer(wrapper);

            findItems(wrapper)
              .last()
              .simulate('click');
            container.simulate('keydown', { keyCode: KEY_CODES.DOWN });
            expect(findItems(wrapper).first()).toHaveProp('data-focused', true);
          });
        });

        describe('LEFT keyCode', () => {
          it('does not perform any action', () => {
            const container = findContainer(wrapper);

            findItems(wrapper)
              .first()
              .simulate('click');
            container.simulate('keydown', { keyCode: KEY_CODES.LEFT });
            const items = findItems(wrapper);

            expect(items.at(0)).toHaveProp('data-focused', false);
            expect(items.at(1)).toHaveProp('data-focused', false);
            expect(items.at(2)).toHaveProp('data-focused', false);
          });
        });

        describe('RIGHT keyCode', () => {
          it('does not perform any action', () => {
            const container = findContainer(wrapper);

            findItems(wrapper)
              .first()
              .simulate('click');
            container.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
            const items = findItems(wrapper);

            expect(items.at(0)).toHaveProp('data-focused', false);
            expect(items.at(1)).toHaveProp('data-focused', false);
            expect(items.at(2)).toHaveProp('data-focused', false);
          });
        });
      });
    });
  });

  describe('getItemProps', () => {
    it('throws if no item is applied', () => {
      console.error = jest.fn(); // eslint-disable-line no-console

      expect(() => {
        mountWithTheme(
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
    });

    it('does not throw if item is applied', () => {
      expect(() => {
        mountWithTheme(basicExample());
      }).not.toThrow();
    });

    it('applies accessibility role attribute', () => {
      expect(findItems(wrapper).first()).toHaveProp('role', 'option');
    });

    describe('onClick', () => {
      it('should select item that was clicked', () => {
        findItems(wrapper)
          .last()
          .simulate('click');
        expect(findItems(wrapper).last()).toHaveProp('aria-selected', true);
      });

      it('should remove focus from all items', () => {
        findItems(wrapper)
          .last()
          .simulate('click');

        const items = findItems(wrapper);

        expect(items.at(0)).toHaveProp('data-focused', false);
        expect(items.at(1)).toHaveProp('data-focused', false);
        expect(items.at(2)).toHaveProp('data-focused', false);
      });
    });
  });
});
