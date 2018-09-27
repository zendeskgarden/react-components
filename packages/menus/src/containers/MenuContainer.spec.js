/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import MenuContainer from './MenuContainer';

/**
 * Mocks popper.js calls within react-popper due to virtual testing environment
 */
jest.mock('popper.js', () => {
  const PopperJS = jest.requireActual('popper.js');

  return class Popper {
    static placements = PopperJS.placements;

    constructor() {
      return {
        destroy: () => {
          // mock implementation
        },
        scheduleUpdate: () => {
          // mock implementation
        }
      };
    }
  };
});

jest.useFakeTimers();

describe('MenuContainer', () => {
  let wrapper;
  let onChangeSpy;

  const basicExample = ({ onChange, appendToNode } = {}) => (
    <MenuContainer
      appendToNode={appendToNode}
      onChange={onChange}
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
              'data-test-id': 'menu-item',
              'data-focused': focusedKey === 'item-1'
            })}
          >
            Item 1
          </div>
          <div
            {...getPreviousItemProps({
              key: 'item-previous',
              textValue: 'previous item',
              'data-test-id': 'menu-item',
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
              'data-test-id': 'menu-item',
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
              'data-test-id': 'menu-item',
              'data-focused': focusedKey === 'item-p'
            })}
          >
            P item
          </div>
          <div
            {...getItemProps({
              key: 'item-2',
              textValue: 'item 1',
              'data-test-id': 'menu-item',
              'data-focused': focusedKey === 'item-2'
            })}
          >
            Item 2
          </div>
        </div>
      )}
    </MenuContainer>
  );

  const findTrigger = enzymeWrapper => enzymeWrapper.find('[data-test-id="trigger"]');
  const findMenu = enzymeWrapper => enzymeWrapper.find('[data-test-id="menu"]');
  const findMenuItems = enzymeWrapper => enzymeWrapper.find('[data-test-id="menu-item"]');
  const findNextMenuItems = enzymeWrapper => enzymeWrapper.find('[data-next-item=true]');
  const findPreviousMenuItems = enzymeWrapper => enzymeWrapper.find('[data-previous-item=true]');

  beforeEach(() => {
    onChangeSpy = jest.fn();
  });

  it('renders in portal if appendToNode provided', () => {
    wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy, appendToNode: document.body }));
    findTrigger(wrapper).simulate('click');

    expect(wrapper.find('Portal').length).toBeGreaterThan(0);
  });

  it("doesn't render Popper element if menu is not open", () => {
    wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy, appendToNode: document.body }));

    expect(wrapper.find('Popper')).not.toExist();
  });

  describe('componentDidUpdate()', () => {
    describe('Trigger', () => {
      it('throws popper error if no trigger ref is found', () => {
        console.error = jest.fn(); // eslint-disable-line no-console

        expect(() => {
          wrapper = mountWithTheme(
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

          findTrigger(wrapper).simulate('click');
          findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.ESCAPE });
        }).toThrow(
          'Target missing. Popper must be given a target from the Popper Manager, or as a prop.'
        );
      });

      it('focuses trigger if menu has been closed by selection', () => {
        wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }));

        findTrigger(wrapper).simulate('click');
        findMenuItems(wrapper)
          .at(0)
          .simulate('click');

        expect(document.activeElement.getAttribute('data-test-id')).toBe('trigger');
      });

      it('focuses trigger if menu has been closed by ESC key', () => {
        wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }));

        findTrigger(wrapper).simulate('click');
        findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.ESCAPE });

        expect(document.activeElement.getAttribute('data-test-id')).toBe('trigger');
      });
    });

    describe('Menu', () => {
      it('throws accessibility error if no menu ref is found', () => {
        console.error = jest.fn(); // eslint-disable-line no-console

        expect(() => {
          wrapper = mountWithTheme(
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

          findTrigger(wrapper).simulate('click');
        }).toThrow('Accessibility Error: You must apply the ref prop to your containing element.');
      });
    });

    it('closes menu if blurred by click', () => {
      /**
       * Enzyme doesn't attach mount/shallow wrapper to the document by default.
       * This allows us to test the blur events correctly.
       */
      wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }), {
        enzymeOptions: { attachTo: document.body }
      });
      findTrigger(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      document.dispatchEvent(new MouseEvent('mousedown', { which: 1 }));
      wrapper.update();

      expect(findMenu(wrapper)).not.toExist();
    });
  });

  describe('when the menu is open', () => {
    beforeEach(() => {
      jest.spyOn(document, 'removeEventListener');

      wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }), {
        enzymeOptions: { attachTo: document.body }
      });

      findTrigger(wrapper).simulate('click');
    });

    afterEach(() => {
      document.removeEventListener.mockRestore();
    });

    describe('when clicking outside', () => {
      it('closes the menu', () => {
        wrapper.simulate('click');

        expect(findMenu(wrapper)).not.toExist();
      });

      it('removes click outside event listener', () => {
        wrapper.simulate('click');

        expect(document.removeEventListener).toHaveBeenCalled();
      });
    });

    describe('componentWillUnmount()', () => {
      it('removes click outside event listener', () => {
        wrapper.unmount();

        expect(document.removeEventListener).toHaveBeenCalled();
      });
    });
  });

  describe('getTriggerProps()', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }));
    });

    it('applies correct accessibility attributes', () => {
      const trigger = findTrigger(wrapper);

      expect(trigger).toHaveProp('tabIndex', 0);
      expect(trigger).toHaveProp('aria-haspopup', true);
      expect(trigger).toHaveProp('aria-expanded', false);
    });

    describe('onClick()', () => {
      beforeEach(() => {
        findTrigger(wrapper).simulate('click');
      });

      it('opens menu if clicked and menu is currently closed', () => {
        expect(findMenu(wrapper)).toExist();
      });

      it('does not focus first menu item by default', () => {
        expect(findMenuItems(wrapper).first()).not.toHaveProp('data-focused', true);
      });

      it('closes menu if clicked and menu is currently open', () => {
        findMenuItems(wrapper)
          .first()
          .simulate('click');
        expect(findMenu(wrapper)).not.toExist();
      });
    });

    describe('onKeyDown()', () => {
      it('opens with ENTER keypress', () => {
        findTrigger(wrapper).simulate('keydown', { keyCode: KEY_CODES.ENTER });
        jest.runOnlyPendingTimers();
        wrapper.update();

        expect(findMenu(wrapper)).toExist();
      });

      it('opens and selects first item with SPACE keypress', () => {
        findTrigger(wrapper).simulate('keydown', { keyCode: KEY_CODES.SPACE });
        jest.runOnlyPendingTimers();
        wrapper.update();

        expect(findMenu(wrapper)).toExist();
      });

      it('opens and selects first item with DOWN keypress', () => {
        findTrigger(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN });
        jest.runOnlyPendingTimers();
        wrapper.update();
        wrapper.setProps({});

        expect(findMenu(wrapper)).toExist();
      });

      it('opens and selects last item with UP keypress', () => {
        findTrigger(wrapper).simulate('keydown', { keyCode: KEY_CODES.UP });
        jest.runOnlyPendingTimers();
        wrapper.update();

        expect(findMenu(wrapper)).toExist();
      });
    });

    describe('getMenuProps()', () => {
      beforeEach(() => {
        wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }));
        findTrigger(wrapper).simulate('click');
        jest.runOnlyPendingTimers();
        wrapper.update();
      });

      it('applies correct accessibility attributes', () => {
        const menu = findMenu(wrapper);

        expect(menu).toHaveProp('tabIndex', -1);
        expect(menu).toHaveProp('role', 'menu');
      });

      describe('onKeyDown()', () => {
        it('closes menu on ESC keypress', () => {
          findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.ESCAPE });
          expect(findMenu(wrapper)).not.toExist();
        });

        it('focuses first item if Tab is pressed', () => {
          findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.TAB });
          wrapper.update();
          expect(findMenuItems(wrapper).first()).toHaveProp('data-focused', true);
        });

        it('focuses last item if shift-Tab is pressed', () => {
          findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.TAB, shiftKey: true });
          wrapper.update();
          expect(findMenuItems(wrapper).last()).toHaveProp('data-focused', true);
        });

        describe('Text matching', () => {
          it('focuses first matching item with textValue that matches key', () => {
            const P_KEY_CODE = 80;

            findMenu(wrapper).simulate('keydown', { keyCode: P_KEY_CODE, key: 'p' });
            wrapper.update();
            findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.ENTER, key: 'enter' });
            expect(onChangeSpy).toHaveBeenCalledWith('item-previous');
          });

          it('focuses second matching item with textValue that matches key if triggered again', () => {
            const P_KEY_CODE = 80;

            findMenu(wrapper).simulate('keydown', { keyCode: P_KEY_CODE, key: 'p' });
            findMenu(wrapper).simulate('keydown', { keyCode: P_KEY_CODE, key: 'p' });
            wrapper.update();
            findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.ENTER, key: 'enter' });
            expect(onChangeSpy).toHaveBeenCalledWith('item-p');
          });
        });

        describe('with LTR locale', () => {
          describe('RIGHT arrow keypress', () => {
            it('selects currently focused item if created with getNextItemProps()', () => {
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              wrapper.update();
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.RIGHT, key: 'right' });

              expect(onChangeSpy).toHaveBeenCalledWith('item-next');
            });

            it('does not select currently focused item if not created with getNextItemProps()', () => {
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              wrapper.update();
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.RIGHT, key: 'right' });

              expect(onChangeSpy).not.toHaveBeenCalled();
            });
          });

          describe('LEFT arrow keypress', () => {
            it('selects previous item if created with getPreviousItemProps()', () => {
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.LEFT, key: 'left' });

              expect(onChangeSpy).toHaveBeenCalledWith('item-previous');
            });
          });
        });

        describe('with RTL locale', () => {
          beforeEach(() => {
            wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }), { rtl: true });
            findTrigger(wrapper).simulate('click');
            jest.runOnlyPendingTimers();
            wrapper.update();
          });

          describe('RIGHT arrow keypress', () => {
            it('selects previous item if created with getPreviousItemProps()', () => {
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.RIGHT, key: 'right' });

              expect(onChangeSpy).toHaveBeenCalledWith('item-previous');
            });
          });

          describe('LEFT arrow keypress', () => {
            it('selects currently focused item if created with getNextItemProps()', () => {
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              wrapper.update();
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.LEFT, key: 'left' });

              expect(onChangeSpy).toHaveBeenCalledWith('item-next');
            });

            it('does not select currently focused item if not created with getNextItemProps()', () => {
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
              wrapper.update();
              findMenu(wrapper).simulate('keydown', { keyCode: KEY_CODES.LEFT, key: 'left' });

              expect(onChangeSpy).not.toHaveBeenCalled();
            });
          });
        });
      });
    });
  });

  describe('getItemProps', () => {
    it('applies correct accessibility role', () => {
      expect(findMenuItems(wrapper).first()).toHaveProp('role', 'menuitemcheckbox');
    });
  });

  describe('getNextItemProps()', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }));
      findTrigger(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
    });

    it('applies correct accessibilty attributes', () => {
      expect(findNextMenuItems(wrapper)).toHaveProp('aria-expanded', false);
    });
  });

  describe('getPreviousItemProps()', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }));
      findTrigger(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
    });

    it('applies correct accessibilty attributes', () => {
      expect(findPreviousMenuItems(wrapper)).toHaveProp('aria-expanded', true);
    });
  });
});
