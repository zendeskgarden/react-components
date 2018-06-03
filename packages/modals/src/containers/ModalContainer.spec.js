/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import ModalContainer from './ModalContainer';

describe('FocusJailContainer', () => {
  let wrapper;
  let onCloseSpy;
  const MODAL_ID = 'TEST_ID';

  const basicExample = onClose => (
    <ModalContainer onClose={onClose} id={MODAL_ID}>
      {({
        getBackdropProps,
        getModalProps,
        getTitleProps,
        getContentProps,
        getCloseProps,
        modalRef,
        closeModal
      }) => (
        <div {...getBackdropProps({ 'data-test-id': 'backdrop' })}>
          <div {...getModalProps({ 'data-test-id': 'modal' })} ref={modalRef}>
            <div {...getTitleProps({ 'data-test-id': 'title' })}>Title</div>
            <div {...getContentProps({ 'data-test-id': 'content' })}>Modal content</div>
            <button {...getCloseProps({ 'data-test-id': 'close' })} />
            <button onClick={closeModal} data-test-id="additional-close">
              Additional close option
            </button>
          </div>
        </div>
      )}
    </ModalContainer>
  );

  const findBackdrop = enzymeWrapper => enzymeWrapper.find('[data-test-id="backdrop"]');
  const findModal = enzymeWrapper => enzymeWrapper.find('[data-test-id="modal"]');
  const findTitle = enzymeWrapper => enzymeWrapper.find('[data-test-id="title"]');
  const findContent = enzymeWrapper => enzymeWrapper.find('[data-test-id="content"]');
  const findClose = enzymeWrapper => enzymeWrapper.find('[data-test-id="close"]');
  const findAdditionalClose = enzymeWrapper =>
    enzymeWrapper.find('[data-test-id="additional-close"]');

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
    onCloseSpy = jest.fn();
    wrapper = mount(basicExample(onCloseSpy));
  });

  describe('getBackdropProps()', () => {
    it('calls onClose when clicked', () => {
      findBackdrop(wrapper).simulate('click');
      expect(onCloseSpy).toHaveBeenCalled();
    });
  });

  describe('getModalProps()', () => {
    it('applies accessibily pros', () => {
      const modal = findModal(wrapper);

      expect(modal).toHaveProp('role', 'dialog');
      expect(modal).toHaveProp('tabIndex', -1);
      expect(modal).toHaveProp('aria-modal', true);
      expect(modal).toHaveProp('aria-labelledby', `${MODAL_ID}--title`);
      expect(modal).toHaveProp('aria-describedby', `${MODAL_ID}--content`);
    });

    it('does not trigger onClose when clicked', () => {
      findModal(wrapper).simulate('click');
      expect(onCloseSpy).not.toHaveBeenCalled();
    });

    describe('onKeyDown', () => {
      it('closes modal when ESC is pressed', () => {
        findModal(wrapper).simulate('keydown', { keyCode: KEY_CODES.ESCAPE });
        expect(onCloseSpy).toHaveBeenCalled();
      });

      it('does not close modal when other keys are pressed', () => {
        findModal(wrapper).simulate('keydown', { keyCode: KEY_CODES.ENTER });
        expect(onCloseSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('getTitleProps()', () => {
    it('applies accessibility props', () => {
      expect(findTitle(wrapper)).toHaveProp('id', `${MODAL_ID}--title`);
    });
  });

  describe('getContentProps()', () => {
    it('applies accessibility props', () => {
      expect(findContent(wrapper)).toHaveProp('id', `${MODAL_ID}--content`);
    });
  });

  describe('getCloseProps()', () => {
    it('applies accessibility props', () => {
      expect(findClose(wrapper)).toHaveProp('aria-label', 'Close modal');
    });

    it('closes modal onClick', () => {
      findClose(wrapper).simulate('click');
      expect(onCloseSpy).toHaveBeenCalled();
    });
  });

  describe('closeModal callback', () => {
    it('triggers onClose if callback is triggered', () => {
      findAdditionalClose(wrapper).simulate('click');
      expect(onCloseSpy).toHaveBeenCalled();
    });
  });
});
