/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import AutocompleteContainer from './AutocompleteContainer';

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

describe('AutocompleteContainer', () => {
  let wrapper;
  let onSelectSpy;

  const tags = ['Tag1', 'Tag2', 'Tag3'];
  const items = ['Item1', 'Item2', 'Item3'];

  const mutliSelectExample = onSelect => (
    <AutocompleteContainer
      id="test"
      onSelect={onSelect}
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
            {tags.map((tag, index) => {
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
            {items.map((item, index) => {
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

  const findTrigger = enzymeWrapper => enzymeWrapper.find('[data-test-id="trigger"]');
  const findInput = enzymeWrapper => enzymeWrapper.find('[data-test-id="input"]');
  const findTags = enzymeWrapper => enzymeWrapper.find('[data-test-id="tag"]');
  const findMenu = enzymeWrapper => enzymeWrapper.find('[data-test-id="menu"]');
  const findMenuItems = enzymeWrapper => enzymeWrapper.find('[data-test-id="item"]');
  const getAutocompleteInstance = enzymeWrapper => enzymeWrapper.childAt(0).instance();

  beforeEach(() => {
    onSelectSpy = jest.fn();
    wrapper = mountWithTheme(mutliSelectExample(onSelectSpy));
  });

  describe('getTriggerProps()', () => {
    describe('onMouseDown', () => {
      it('sets triggerMousedDown to true', () => {
        findTrigger(wrapper).simulate('mousedown');
        expect(getAutocompleteInstance(wrapper).triggerMousedDown).toBe(true);
      });
    });

    describe('onMouseUp', () => {
      it('sets triggerMousedDown to false', () => {
        findTrigger(wrapper).simulate('mouseup');
        expect(getAutocompleteInstance(wrapper).triggerMousedDown).toBe(false);
      });
    });

    describe('onClick', () => {
      let instance;

      beforeEach(() => {
        instance = getAutocompleteInstance(wrapper);
        instance.openDropdown = jest.fn();
        instance.closeDropdown = jest.fn();
        instance.focusInput = jest.fn();
      });

      it('opens the dropdown if currently closes', () => {
        findTrigger(wrapper).simulate('click');
        expect(instance.openDropdown).toHaveBeenCalled();
      });

      it('closes the dropdown if currently open', () => {
        wrapper.setProps({ isOpen: true });
        findTrigger(wrapper).simulate('click');
        expect(instance.closeDropdown).toHaveBeenCalled();
      });

      it('focuses the input', () => {
        findTrigger(wrapper).simulate('click');
        expect(instance.focusInput).toHaveBeenCalled();
      });
    });
  });

  describe('getTagProps()', () => {
    it('applies accessibility attributes', () => {
      expect(findTags(wrapper).first()).toHaveProp('id', 'test--tag-tag-0');
    });

    describe('onMouseDown', () => {
      it('sets tagMousedDown to true', () => {
        findTags(wrapper)
          .first()
          .simulate('mousedown');
        expect(getAutocompleteInstance(wrapper).tagMousedDown).toBe(true);
      });
    });

    describe('onMouseUp', () => {
      it('sets tagMousedDown to false', () => {
        findTags(wrapper)
          .first()
          .simulate('mouseup');
        expect(getAutocompleteInstance(wrapper).tagMousedDown).toBe(false);
      });
    });

    describe('onClick', () => {
      let instance;

      beforeEach(() => {
        instance = getAutocompleteInstance(wrapper);
        instance.focusInput = jest.fn();
        findTags(wrapper)
          .last()
          .simulate('click');
      });

      it('sets clicked Tag as currently focused', () => {
        expect(instance.tagSelectionModel.selectedIndex).toBe(2);
      });

      it('focuses input', () => {
        expect(instance.focusInput).toHaveBeenCalled();
      });
    });
  });

  describe('getInputProps()', () => {
    it('applies accessibility attributes', () => {
      const input = findInput(wrapper);

      expect(input).toHaveProp('tabIndex', 0);
      expect(input).toHaveProp('role', 'combobox');
      expect(input).toHaveProp('aria-autocomplete', 'list');
      expect(input).toHaveProp('aria-haspopup', 'true');
      expect(input).toHaveProp('autoComplete', 'off');
    });

    describe('onClick', () => {
      it('prevents default event', () => {
        const input = findInput(wrapper);
        const preventDefault = jest.fn();

        input.simulate('click', { preventDefault });
        expect(preventDefault).toHaveBeenCalled();
      });
    });

    describe('onBlur', () => {
      let instance;

      beforeEach(() => {
        instance = getAutocompleteInstance(wrapper);
        instance.closeDropdown = jest.fn();
      });

      it('does not close dropdown if menu is moused down', () => {
        instance.menuMousedDown = true;
        findInput(wrapper).simulate('blur');
        expect(instance.closeDropdown).not.toHaveBeenCalled();
      });

      it('does not close dropdown if trigger is moused down', () => {
        instance.triggerMousedDown = true;
        findInput(wrapper).simulate('blur');
        expect(instance.closeDropdown).not.toHaveBeenCalled();
      });

      it('closes dropdown if neither trigger nor menu is moused down', () => {
        instance.menuMousedDown = false;
        instance.triggerMousedDown = false;
        findInput(wrapper).simulate('blur');
        expect(instance.closeDropdown).toHaveBeenCalled();
      });
    });

    describe('onChange', () => {
      it('clears focused menu item', () => {
        const instance = getAutocompleteInstance(wrapper);

        instance.focusSelectionModel.clearSelection = jest.fn();
        findInput(wrapper).simulate('change');
        expect(instance.focusSelectionModel.clearSelection).toHaveBeenCalled();
      });
    });

    describe('onKeyDown', () => {
      let instance;
      let input;

      beforeEach(() => {
        input = findInput(wrapper);
        instance = getAutocompleteInstance(wrapper);
        instance.openDropdown = jest.fn();
        instance.closeDropdown = jest.fn();
        instance.focusSelectionModel.selectPrevious = jest.fn();
        instance.focusSelectionModel.selectNext = jest.fn();
        instance.focusSelectionModel.selectLast = jest.fn();
        instance.focusSelectionModel.selectFirst = jest.fn();
        instance.tagSelectionModel.selectFirst = jest.fn();
        instance.tagSelectionModel.selectPrevious = jest.fn();
        instance.tagSelectionModel.selectNext = jest.fn();
      });

      describe('space', () => {
        it('does not open dropdown if already open', () => {
          wrapper.setProps({ isOpen: true });
          input.simulate('keydown', { keyCode: KEY_CODES.SPACE });
          expect(instance.openDropdown).not.toHaveBeenCalled();
        });

        it('opens dropdown if not currently open', () => {
          wrapper.setProps({ isOpen: false });
          input.simulate('keydown', { keyCode: KEY_CODES.SPACE });
          expect(instance.openDropdown).toHaveBeenCalled();
        });
      });

      describe('up arrow', () => {
        it('focus previous menu item if dropdown is open', () => {
          wrapper.setProps({ isOpen: true });
          input.simulate('keydown', { keyCode: KEY_CODES.UP });
          expect(instance.focusSelectionModel.selectPrevious).toHaveBeenCalled();
        });

        it('focus last menu item if dropdown is closed', () => {
          wrapper.setProps({ isOpen: false });
          input.simulate('keydown', { keyCode: KEY_CODES.UP });
          expect(instance.focusSelectionModel.selectLast).toHaveBeenCalled();
        });
      });

      describe('down arrow', () => {
        it('focus next menu item if dropdown is open', () => {
          wrapper.setProps({ isOpen: true });
          input.simulate('keydown', { keyCode: KEY_CODES.DOWN });
          expect(instance.focusSelectionModel.selectNext).toHaveBeenCalled();
        });

        it('focus first menu item if dropdown is closed', () => {
          wrapper.setProps({ isOpen: false });
          input.simulate('keydown', { keyCode: KEY_CODES.DOWN });
          expect(instance.focusSelectionModel.selectFirst).toHaveBeenCalled();
        });
      });

      describe('enter', () => {
        describe('when dropdown is open', () => {
          beforeEach(() => {
            wrapper.setProps({ isOpen: true });
          });

          it('selects currently focused item if it exists', () => {
            instance.focusSelectionModel.hasSelection = jest.fn().mockReturnValue(true);
            instance.focusSelectionModel.selectedIndex = 1;
            input.simulate('keydown', { keyCode: KEY_CODES.ENTER });
            expect(onSelectSpy).toHaveBeenCalledWith('menu-item-1');
          });

          it('select first item otherwise', () => {
            input.simulate('keydown', { keyCode: KEY_CODES.ENTER });
            expect(onSelectSpy).toHaveBeenCalledWith('menu-item-0');
          });
        });

        describe('when dropdown is closed', () => {
          it('opens dropdown if no tags are selected', () => {
            wrapper.setProps({ isOpen: false });
            instance.tagSelectionModel.hasSelection = jest.fn().mockReturnValue(false);
            input.simulate('keydown', { keyCode: KEY_CODES.ENTER });
            expect(instance.openDropdown).toHaveBeenCalled();
          });
        });
      });

      describe('escape', () => {
        it('closes dropdown if open', () => {
          wrapper.setProps({ isOpen: true });
          input.simulate('keydown', { keyCode: KEY_CODES.ESCAPE });
          expect(instance.closeDropdown).toHaveBeenCalled();
        });
      });

      describe('end', () => {
        describe('when dropdown is open', () => {
          beforeEach(() => {
            wrapper.setProps({ isOpen: true });
          });

          it('selects currently focused item if it exists', () => {
            input.simulate('keydown', { keyCode: KEY_CODES.END });
            expect(instance.focusSelectionModel.selectLast).toHaveBeenCalled();
          });
        });

        describe('when dropdown is closed', () => {
          beforeEach(() => {
            wrapper.setProps({ isOpen: false });
          });

          it('does not open dropdown if target value is non-empty', () => {
            input.simulate('keydown', { keyCode: KEY_CODES.END, target: { value: 'test' } });
            expect(instance.openDropdown).not.toHaveBeenCalled();
          });

          it('does not open dropdown if no tags are selected', () => {
            instance.tagSelectionModel.hasSelection = jest.fn().mockReturnValue(false);
            input.simulate('keydown', { keyCode: KEY_CODES.END, target: { value: '' } });
            expect(instance.openDropdown).not.toHaveBeenCalled();
          });

          it('opens dropdown otherwise', () => {
            instance.tagSelectionModel.hasSelection = jest.fn().mockReturnValue(true);
            input.simulate('keydown', { keyCode: KEY_CODES.END, target: { value: '' } });
            expect(instance.openDropdown).toHaveBeenCalled();
          });
        });
      });

      describe('home', () => {
        it('selects first menu item when dropdown is open', () => {
          wrapper.setProps({ isOpen: true });
          input.simulate('keydown', { keyCode: KEY_CODES.HOME });
          expect(instance.focusSelectionModel.selectFirst).toHaveBeenCalled();
        });

        it('selects first tag when target value is empty', () => {
          wrapper.setProps({ isOpen: false });
          input.simulate('keydown', { keyCode: KEY_CODES.HOME, target: { value: '' } });
          expect(instance.tagSelectionModel.selectFirst).toHaveBeenCalled();
        });
      });

      describe('right', () => {
        describe('when in LTR locale', () => {
          it('opens dropdown if target value is empty and last tag is focused', () => {
            instance.tagSelectionModel.selectedIndex = 0;
            instance.tagSelectionModel.numItems = 1;
            input.simulate('keydown', { keyCode: KEY_CODES.RIGHT, target: { value: '' } });
            expect(instance.openDropdown).toHaveBeenCalled();
          });

          it('otherwise selects next tag if dropdown is closed', () => {
            wrapper.setProps({ isOpen: false });
            input.simulate('keydown', { keyCode: KEY_CODES.RIGHT, target: { value: '' } });
            expect(instance.tagSelectionModel.selectNext).toHaveBeenCalled();
          });
        });

        describe('when in RTL locale', () => {
          beforeEach(() => {
            wrapper = mountWithTheme(mutliSelectExample(onSelectSpy), { rtl: true });
            input = findInput(wrapper);
            instance = getAutocompleteInstance(wrapper);
          });

          it('selects previous tag if target value is empty and non-first tag is currently selected', () => {
            instance.tagSelectionModel.selectedIndex = 1;
            instance.tagSelectionModel.selectPrevious = jest.fn();
            input.simulate('keydown', { keyCode: KEY_CODES.RIGHT, target: { value: '' } });
            expect(instance.tagSelectionModel.selectPrevious).toHaveBeenCalled();
          });
        });
      });

      describe('left', () => {
        describe('when in LTR locale', () => {
          it('selects previous if target value is empty and first tag is not selected', () => {
            wrapper.setProps({ isOpen: false });
            input.simulate('keydown', { keyCode: KEY_CODES.LEFT, target: { value: '' } });
            expect(instance.tagSelectionModel.selectPrevious).toHaveBeenCalled();
          });
        });

        describe('when in RTL locale', () => {
          beforeEach(() => {
            wrapper = mountWithTheme(mutliSelectExample(onSelectSpy), { rtl: true });
            input = findInput(wrapper);
            instance = getAutocompleteInstance(wrapper);
            instance.openDropdown = jest.fn();
          });

          it('opens dropdown if target value is empty and last tag is selected', () => {
            instance.tagSelectionModel.selectedIndex = 1;
            instance.tagSelectionModel.numItems = 2;
            input.simulate('keydown', { keyCode: KEY_CODES.LEFT, target: { value: '' } });
            expect(instance.openDropdown).toHaveBeenCalled();
          });

          it('focuses the next tag if dropdown is closed', () => {
            wrapper.setProps({ isOpen: false });
            instance.tagSelectionModel.selectNext = jest.fn();
            input.simulate('keydown', { keyCode: KEY_CODES.LEFT, target: { value: '' } });
            expect(instance.tagSelectionModel.selectNext).toHaveBeenCalled();
          });
        });
      });
    });
  });

  describe('getMenuProps()', () => {
    let instance;

    beforeEach(() => {
      wrapper.setProps({ isOpen: true });
      instance = getAutocompleteInstance(wrapper);
    });

    it('applies accessibility attributes correctly', () => {
      const menu = findMenu(wrapper);

      expect(menu).toHaveProp('role', 'listbox');
    });

    describe('onMouseDown', () => {
      it('sets menuMousedDown to true', () => {
        findMenu(wrapper).simulate('mousedown');
        expect(instance.menuMousedDown).toBe(true);
      });
    });

    describe('onMouseUp', () => {
      beforeEach(() => {
        instance.focusInput = jest.fn();
        findMenu(wrapper).simulate('mouseup');
      });

      it('sets menuMousedDown to false', () => {
        expect(instance.menuMousedDown).toBe(false);
      });

      it('focuses input', () => {
        expect(instance.focusInput).toHaveBeenCalled();
      });
    });
  });

  describe('getItemProps()', () => {
    beforeEach(() => {
      wrapper.setProps({ isOpen: true });
    });

    it('applies correct accessibility attributes', () => {
      const item = findMenuItems(wrapper).first();

      expect(item).toHaveProp('id', 'test--item-menu-item-0');
      expect(item).toHaveProp('role', 'option');
    });

    it('sets current focus selection model if current item is focused', () => {
      findInput(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN });
      expect(findMenuItems(wrapper).first()).toHaveProp('data-focused', true);
    });

    describe('onClick', () => {
      it('selects the clicked menu item', () => {
        const item = findMenuItems(wrapper).at(1);

        item.simulate('click');
        expect(onSelectSpy).toHaveBeenCalledWith('menu-item-1');
      });
    });

    describe('custom index ordering', () => {
      it('applies custom focus ordering if index is provided', () => {
        const customItems = [
          { text: 'Item 1', index: 0 },
          { text: 'Item 2', index: 2 },
          { text: 'Item 3', index: 1 }
        ];

        wrapper = mountWithTheme(
          <AutocompleteContainer
            id="test"
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
        wrapper.setProps({ isOpen: true });

        findInput(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN });
        expect(findMenuItems(wrapper).first()).toHaveProp('data-focused', true);

        findInput(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN });
        expect(findMenuItems(wrapper).last()).toHaveProp('data-focused', true);

        findInput(wrapper).simulate('keydown', { keyCode: KEY_CODES.DOWN });
        expect(findMenuItems(wrapper).at(1)).toHaveProp('data-focused', true);
      });
    });
  });

  describe('openDropdown()', () => {
    it('opens dropdown and removes focused tag', () => {
      const instance = getAutocompleteInstance(wrapper);

      instance.openDropdown();
      expect(instance.state.isOpen).toBe(true);
      expect(instance.state.tagFocusedKey).toBe(undefined);
    });
  });

  describe('closeDropdown()', () => {
    it('clears focused menu item and closes dropdown', () => {
      const instance = getAutocompleteInstance(wrapper);

      instance.focusSelectionModel.clearSelection = jest.fn();
      instance.closeDropdown();
      expect(instance.state.isOpen).toBe(false);
      expect(instance.focusSelectionModel.clearSelection).toHaveBeenCalled();
    });
  });

  describe('focusInput()', () => {
    it('focuses inputRef is provided', () => {
      const instance = getAutocompleteInstance(wrapper);

      instance.inputRef = { focus: jest.fn() };
      instance.focusInput();
      expect(instance.inputRef.focus).toHaveBeenCalled();
    });
  });
});
