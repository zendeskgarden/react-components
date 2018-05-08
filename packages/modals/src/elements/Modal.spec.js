/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import { KEY_CODES } from '@zendesk/garden-react-selection';

import Modal from './Modal';
import ModalView from '../views/ModalView';
import Backdrop from '../views/Backdrop';
import Body from '../views/Body';
import Footer from '../views/Footer';
import Header from '../views/Header';
import Close from '../views/Close';

describe('Modal', () => {
  const MODAL_ID = 'TEST_ID';
  let wrapper;
  let onCloseSpy;

  const basicExample = onCloseCallback => (
    <Modal onClose={onCloseCallback} id={MODAL_ID} backdropProps={{ 'data-test-backdrop': true }}>
      <Header>Example Header</Header>
      <Body>Body content</Body>
      <Footer>
        <button onClick={onCloseCallback}>Confirm</button>
      </Footer>
      <Close />
    </Modal>
  );

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
    onCloseSpy = jest.fn();
    wrapper = mount(basicExample(onCloseSpy));
  });

  describe('componentDidMount()', () => {
    it('should disable overflow scrolling for body element', () => {
      expect(document.body.style.overflow).toBe('hidden');
    });
  });

  describe('componentWillUnmount()', () => {
    it('should apply previous body overflow style', () => {
      document.body.style.overflow = 'auto';
      wrapper = mount(basicExample(onCloseSpy));
      expect(document.body.style.overflow).toBe('hidden');

      wrapper.unmount();
      expect(document.body.style.overflow).toBe('auto');
    });
  });

  it('applies backdropProps to Backdrop element', () => {
    expect(wrapper.find(Backdrop)).toHaveProp('data-test-backdrop', true);
  });

  it('applies modal props to ModalView element', () => {
    expect(wrapper.find(ModalView)).toHaveProp('aria-modal', true);
  });

  it('applies title props to Header element', () => {
    expect(wrapper.find(Header)).toHaveProp('id', `${MODAL_ID}--title`);
  });

  it('applies content props to Body element', () => {
    expect(wrapper.find(Body)).toHaveProp('id', `${MODAL_ID}--content`);
  });

  it('applies close props to Close element', () => {
    expect(wrapper.find(Close)).toHaveProp('aria-label', 'Close modal');
  });

  describe('onClose()', () => {
    it('is triggered by backdrop click', () => {
      wrapper.find(Backdrop).simulate('click');
      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by Close element click', () => {
      wrapper.find(Close).simulate('click');
      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by ESC keydown', () => {
      wrapper.find(ModalView).simulate('keydown', { keyCode: KEY_CODES.ESCAPE });
      expect(onCloseSpy).toHaveBeenCalled();
    });
  });
});
