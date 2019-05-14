/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import { render, renderRtl, fireEvent } from 'garden-test-utils';
import MenuContainer from './MenuContainer';

jest.useFakeTimers();

describe('MenuContainer', () => {
  let onChangeSpy;

  const BasicExample = props => (
    <MenuContainer
      {...props}
      trigger={({ getTriggerProps, triggerRef }) => (
        <button {...getTriggerProps({ ref: triggerRef, 'data-test-id': 'trigger' })}>
          trigger
        </button>
      )}
    >
      {({
        getMenuProps,
        menuRef,
        placement,
        getItemProps,
        getNextItemProps,
        getPreviousItemProps,
        focusedKey
      }) => (
        <div
          {...getMenuProps({ 'data-test-id': 'menu', 'data-placement': placement, ref: menuRef })}
        >
          <div
            {...getItemProps({
              key: 'item-1',
              textValue: 'item 1',
              'data-test-id': 'item',
              'data-focused': focusedKey === 'item-1'
            })}
          >
            Item 1
          </div>
          <div
            {...getPreviousItemProps({
              key: 'item-previous',
              textValue: 'previous item',
              'data-test-id': 'item',
              'data-previous-item': true,
              'data-focused': focusedKey === 'item-previous'
            })}
          >
            Previous Item
          </div>
          <div
            {...getNextItemProps({
              key: 'item-next',
              textValue: 'next item',
              'data-test-id': 'item',
              'data-next-item': true,
              'data-focused': focusedKey === 'item-next'
            })}
          >
            Next Item
          </div>
          <div
            {...getItemProps({
              key: 'item-p',
              textValue: 'p item',
              'data-test-id': 'item',
              'data-focused': focusedKey === 'item-p'
            })}
          >
            P item
          </div>
          <div
            {...getItemProps({
              key: 'item-2',
              textValue: 'item 1',
              'data-test-id': 'item',
              'data-focused': focusedKey === 'item-2'
            })}
          >
            Item 2
          </div>
        </div>
      )}
    </MenuContainer>
  );

  beforeEach(() => {
    onChangeSpy = jest.fn();
  });

  it('renders in portal if appendToNode provided', () => {
    const { getByTestId } = render(
      <BasicExample onChange={onChangeSpy} appendToNode={document.body} />
    );

    fireEvent.click(getByTestId('trigger'));

    expect(getByTestId('menu').parentElement.parentElement).toEqual(document.body);
  });

  it("doesn't render Popper element if menu is not open", () => {
    const { queryByTestId } = render(
      <BasicExample onChange={onChangeSpy} appendToNode={document.body} />
    );

    expect(queryByTestId('menu')).toBe(null);
  });

  describe('componentDidUpdate()', () => {
    describe('Trigger', () => {
      it('throws popper error if no trigger ref is found', () => {
        const originalError = console.error;

        console.error = jest.fn();

        expect(() => {
          const { getByTestId } = render(
            <MenuContainer
              trigger={({ getTriggerProps }) => (
                <button {...getTriggerProps({ 'data-test-id': 'trigger' })}>trigger</button>
              )}
            >
              {({ getMenuProps, menuRef, getItemProps }) => (
                <div
                  {...getMenuProps({
                    ref: menuRef,
                    'data-test-id': 'menu'
                  })}
                >
                  <div
                    {...getItemProps({
                      key: 'item-1',
                      textValue: 'item 1'
                    })}
                  >
                    Item 1
                  </div>
                </div>
              )}
            </MenuContainer>
          );

          fireEvent.click(getByTestId('trigger'));
          fireEvent.keyDown(getByTestId('menu'), { keyCode: KEY_CODES.ESCAPE });
        }).toThrow(
          'Target missing. Popper must be given a target from the Popper Manager, or as a prop.'
        );

        console.error = originalError;
      });

      it('focuses trigger if menu has been closed by selection', () => {
        const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);
        const trigger = getByTestId('trigger');

        fireEvent.click(trigger);

        const items = getAllByTestId('item');

        fireEvent.click(items[0]);

        expect(trigger).toHaveFocus();
      });

      it('focuses trigger if menu has been closed by ESC key', () => {
        const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);
        const trigger = getByTestId('trigger');

        fireEvent.click(trigger);
        fireEvent.keyDown(getByTestId('menu'), { keyCode: KEY_CODES.ESCAPE });

        expect(trigger).toHaveFocus();
      });
    });

    describe('Menu', () => {
      it('throws accessibility error if no menu ref is found', () => {
        const originalError = console.error;

        console.error = jest.fn();

        expect(() => {
          const { getByTestId } = render(
            <MenuContainer
              trigger={({ getTriggerProps, triggerRef }) => (
                <button {...getTriggerProps({ 'data-test-id': 'trigger', ref: triggerRef })}>
                  trigger
                </button>
              )}
            >
              {({ getMenuProps, getItemProps }) => (
                <div
                  {...getMenuProps({
                    'data-test-id': 'menu'
                  })}
                >
                  <div
                    {...getItemProps({
                      key: 'item-1',
                      textValue: 'item 1'
                    })}
                  >
                    Item 1
                  </div>
                </div>
              )}
            </MenuContainer>
          );

          fireEvent.click(getByTestId('trigger'));
        }).toThrow('Accessibility Error: You must apply the ref prop to your containing element.');

        console.error = originalError;
      });
    });

    it('closes menu if blurred by click', () => {
      const { getByTestId, queryByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();
      fireEvent.mouseDown(document, { which: 1 });

      expect(queryByTestId('menu')).toBe(null);
    });
  });

  describe('getTriggerProps()', () => {
    it('applies correct accessibility attributes', () => {
      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);
      const trigger = getByTestId('trigger');

      expect(trigger).toHaveAttribute('tabIndex', '0');
      expect(trigger).toHaveAttribute('aria-haspopup', 'true');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    describe('onClick()', () => {
      it('opens menu if clicked and menu is currently closed', () => {
        const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

        fireEvent.click(getByTestId('trigger'));

        expect(getByTestId('menu')).not.toBe(null);
      });

      it("does not open menu if clicked and it's disabled", () => {
        const { getByTestId, rerender, queryByTestId } = render(
          <BasicExample onChange={onChangeSpy} disabled />
        );

        fireEvent.click(getByTestId('trigger'));

        rerender(<BasicExample onChange={onChangeSpy} />);

        expect(queryByTestId('menu')).toBe(null);
      });

      it('does not focus first menu item by default', () => {
        const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

        fireEvent.click(getByTestId('trigger'));

        expect(getAllByTestId('item')[0]).not.toHaveAttribute('data-focused', 'true');
      });

      it('closes menu if clicked and menu is currently open', () => {
        const { getByTestId, queryByTestId, getAllByTestId } = render(
          <BasicExample onChange={onChangeSpy} />
        );

        fireEvent.click(getByTestId('trigger'));

        fireEvent.click(getAllByTestId('item')[0]);

        expect(queryByTestId('menu')).toBe(null);
      });
    });

    describe('onKeyDown()', () => {
      it('opens with ENTER keypress', () => {
        const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

        fireEvent.keyDown(getByTestId('trigger'), { keyCode: KEY_CODES.ENTER });
        jest.runOnlyPendingTimers();

        expect(getByTestId('menu')).not.toBe(null);
      });

      it('opens and selects first item with SPACE keypress', () => {
        const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

        fireEvent.keyDown(getByTestId('trigger'), { keyCode: KEY_CODES.SPACE });
        jest.runOnlyPendingTimers();

        expect(getByTestId('menu')).not.toBe(null);
      });

      it('opens and selects first item with DOWN keypress', () => {
        const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

        fireEvent.keyDown(getByTestId('trigger'), { keyCode: KEY_CODES.DOWN });
        jest.runOnlyPendingTimers();

        expect(getByTestId('menu')).not.toBe(null);
      });

      it('opens and selects last item with UP keypress', () => {
        const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

        fireEvent.keyDown(getByTestId('trigger'), { keyCode: KEY_CODES.UP });
        jest.runOnlyPendingTimers();

        expect(getByTestId('menu')).not.toBe(null);
      });
    });

    describe('getMenuProps()', () => {
      it('applies correct accessibility attributes', () => {
        const exampleUtils = render(<BasicExample onChange={onChangeSpy} />);

        fireEvent.click(exampleUtils.getByTestId('trigger'));
        jest.runOnlyPendingTimers();

        const menu = exampleUtils.getByTestId('menu');

        expect(menu).toHaveAttribute('tabIndex', '-1');
        expect(menu).toHaveAttribute('role', 'menu');
      });

      describe('onKeyDown()', () => {
        it('closes menu on ESC keypress', () => {
          const exampleUtils = render(<BasicExample onChange={onChangeSpy} />);

          fireEvent.click(exampleUtils.getByTestId('trigger'));
          jest.runOnlyPendingTimers();

          fireEvent.keyDown(exampleUtils.getByTestId('menu'), { keyCode: KEY_CODES.ESCAPE });
          expect(exampleUtils.queryByTestId('menu')).toBe(null);
        });

        it('focuses first item if Tab is pressed', () => {
          const exampleUtils = render(<BasicExample onChange={onChangeSpy} />);

          fireEvent.click(exampleUtils.getByTestId('trigger'));
          jest.runOnlyPendingTimers();

          fireEvent.keyDown(exampleUtils.getByTestId('menu'), { keyCode: KEY_CODES.TAB });
          expect(exampleUtils.getAllByTestId('item')[0]).toHaveAttribute('data-focused', 'true');
        });

        it('focuses last item if shift-Tab is pressed', () => {
          const exampleUtils = render(<BasicExample onChange={onChangeSpy} />);

          fireEvent.click(exampleUtils.getByTestId('trigger'));
          jest.runOnlyPendingTimers();

          fireEvent.keyDown(exampleUtils.getByTestId('menu'), {
            keyCode: KEY_CODES.TAB,
            shiftKey: true
          });

          const items = exampleUtils.getAllByTestId('item');

          expect(items[items.length - 1]).toHaveAttribute('data-focused', 'true');
        });

        describe('Text matching', () => {
          it('focuses first matching item with textValue that matches key', () => {
            const exampleUtils = render(<BasicExample onChange={onChangeSpy} />);

            fireEvent.click(exampleUtils.getByTestId('trigger'));
            jest.runOnlyPendingTimers();

            const P_KEY_CODE = 80;

            fireEvent.keyDown(exampleUtils.getByTestId('menu'), { keyCode: P_KEY_CODE, key: 'p' });
            fireEvent.keyDown(exampleUtils.getByTestId('menu'), {
              keyCode: KEY_CODES.ENTER,
              key: 'enter'
            });

            expect(onChangeSpy).toHaveBeenCalledWith('item-previous');
          });

          it('focuses second matching item with textValue that matches key if triggered again', () => {
            const P_KEY_CODE = 80;
            const exampleUtils = render(<BasicExample onChange={onChangeSpy} />);

            fireEvent.click(exampleUtils.getByTestId('trigger'));
            jest.runOnlyPendingTimers();

            const menu = exampleUtils.getByTestId('menu');

            fireEvent.keyDown(menu, { keyCode: P_KEY_CODE, key: 'p' });
            fireEvent.keyDown(menu, { keyCode: P_KEY_CODE, key: 'p' });
            fireEvent.keyDown(menu, { keyCode: KEY_CODES.ENTER, key: 'enter' });

            expect(onChangeSpy).toHaveBeenCalledWith('item-p');
          });
        });

        describe('with LTR locale', () => {
          describe('RIGHT arrow keypress', () => {
            it('selects currently focused item if created with getNextItemProps()', () => {
              const exampleUtils = render(<BasicExample onChange={onChangeSpy} />);

              fireEvent.click(exampleUtils.getByTestId('trigger'));
              jest.runOnlyPendingTimers();
              const menu = exampleUtils.getByTestId('menu');

              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.RIGHT, key: 'right' });

              expect(onChangeSpy).toHaveBeenCalledWith('item-next');
            });

            it('does not select currently focused item if not created with getNextItemProps()', () => {
              const exampleUtils = render(<BasicExample onChange={onChangeSpy} />);

              fireEvent.click(exampleUtils.getByTestId('trigger'));
              jest.runOnlyPendingTimers();

              const menu = exampleUtils.getByTestId('menu');

              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.RIGHT, key: 'right' });

              expect(onChangeSpy).not.toHaveBeenCalled();
            });
          });

          describe('LEFT arrow keypress', () => {
            it('selects previous item if created with getPreviousItemProps()', () => {
              const exampleUtils = render(<BasicExample onChange={onChangeSpy} />);

              fireEvent.click(exampleUtils.getByTestId('trigger'));
              jest.runOnlyPendingTimers();

              const menu = exampleUtils.getByTestId('menu');

              fireEvent.keyDown(menu, { keyCode: KEY_CODES.LEFT, key: 'left' });

              expect(onChangeSpy).toHaveBeenCalledWith('item-previous');
            });
          });
        });

        describe('with RTL locale', () => {
          describe('RIGHT arrow keypress', () => {
            it('selects previous item if created with getPreviousItemProps()', () => {
              const exampleUtils = renderRtl(<BasicExample onChange={onChangeSpy} />);

              fireEvent.click(exampleUtils.getByTestId('trigger'));
              jest.runOnlyPendingTimers();
              fireEvent.keyDown(exampleUtils.getByTestId('menu'), {
                keyCode: KEY_CODES.RIGHT,
                key: 'right'
              });

              expect(onChangeSpy).toHaveBeenCalledWith('item-previous');
            });
          });

          describe('LEFT arrow keypress', () => {
            it('selects currently focused item if created with getNextItemProps()', () => {
              const exampleUtils = renderRtl(<BasicExample onChange={onChangeSpy} />);

              fireEvent.click(exampleUtils.getByTestId('trigger'));
              jest.runOnlyPendingTimers();

              const menu = exampleUtils.getByTestId('menu');

              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.LEFT, key: 'left' });

              expect(onChangeSpy).toHaveBeenCalledWith('item-next');
            });

            it('does not select currently focused item if not created with getNextItemProps()', () => {
              const exampleUtils = renderRtl(<BasicExample onChange={onChangeSpy} />);

              fireEvent.click(exampleUtils.getByTestId('trigger'));
              jest.runOnlyPendingTimers();

              const menu = exampleUtils.getByTestId('menu');

              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
              fireEvent.keyDown(menu, { keyCode: KEY_CODES.LEFT, key: 'left' });

              expect(onChangeSpy).not.toHaveBeenCalled();
            });
          });
        });
      });
    });
  });

  describe('getItemProps', () => {
    it('applies correct accessibility role', () => {
      const { getAllByTestId, getByTestId } = renderRtl(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      expect(getAllByTestId('item')[0]).toHaveAttribute('role', 'menuitemcheckbox');
    });

    it('focuses correct item if mouseMoved', () => {
      const { getAllByTestId, getByTestId } = renderRtl(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      const items = getAllByTestId('item');

      fireEvent.mouseMove(items[0]);

      expect(items[0]).toHaveAttribute('data-focused', 'true');
    });
  });

  describe('getNextItemProps()', () => {
    it('applies correct accessibilty attributes', () => {
      const { getByTestId, container } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      expect(container.querySelector('[data-next-item]')).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('getPreviousItemProps()', () => {
    it('applies correct accessibilty attributes', () => {
      const { getByTestId, container } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();
      expect(container.querySelector('[data-previous-item]')).toHaveAttribute(
        'aria-expanded',
        'true'
      );
    });
  });
});
