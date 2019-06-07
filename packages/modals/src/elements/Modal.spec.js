/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { KEY_CODES } from '@zendeskgarden/react-selection';

import Modal from './Modal';
import Body from '../views/Body';
import Footer from '../views/Footer';
import Header from '../views/Header';
import Close from '../views/Close';

describe('Modal', () => {
  const MODAL_ID = 'TEST_ID';
  let onCloseSpy;

  const BasicExample = props => (
    <Modal
      {...props}
      id={MODAL_ID}
      data-test-id="modal"
      backdropProps={{ 'data-test-id': 'backdrop' }}
    >
      <Header data-test-id="header">Example Header</Header>
      <Body data-test-id="body">Body content</Body>
      <Footer data-test-id="footer">
        <button onClick={props.onClose}>Confirm</button>
      </Footer>
      <Close data-test-id="close" />
    </Modal>
  );

  beforeEach(() => {
    onCloseSpy = jest.fn();
  });

  describe('componentDidMount()', () => {
    it('should disable overflow scrolling for body element', () => {
      const { baseElement } = render(<BasicExample />);

      expect(baseElement.style.overflow).toBe('hidden');
    });
  });

  describe('componentWillUnmount()', () => {
    it('should apply previous body overflow style', () => {
      document.body.style.overflow = 'auto';
      const { baseElement, unmount } = render(<BasicExample />);

      expect(baseElement.style.overflow).toBe('hidden');

      unmount();

      expect(baseElement.style.overflow).toBe('auto');
    });
  });

  it('applies backdropProps to Backdrop element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('backdrop')).not.toBe(null);
  });

  it('applies modal props to ModalView element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('modal')).toHaveAttribute('aria-modal', 'true');
  });

  it('applies title props to Header element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('header')).toHaveAttribute('id', `${MODAL_ID}--title`);
  });

  it('applies content props to Body element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('body')).toHaveAttribute('id', `${MODAL_ID}--content`);
  });

  it('applies close props to Close element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('close')).toHaveAttribute('aria-label', 'Close modal');
  });

  describe('onClose()', () => {
    it('is triggered by backdrop click', () => {
      const { getByTestId } = render(<BasicExample onClose={onCloseSpy} />);

      fireEvent.click(getByTestId('backdrop'));
      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by Close element click', () => {
      const { getByTestId } = render(<BasicExample onClose={onCloseSpy} />);

      fireEvent.click(getByTestId('close'));
      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by ESC keydown', () => {
      const { getByTestId } = render(<BasicExample onClose={onCloseSpy} />);

      fireEvent.keyDown(getByTestId('modal'), { keyCode: KEY_CODES.ESCAPE });
      expect(onCloseSpy).toHaveBeenCalled();
    });
  });
});
