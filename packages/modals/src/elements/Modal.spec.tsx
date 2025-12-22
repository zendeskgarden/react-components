/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { Modal } from './Modal';
import { IModalProps } from '../types';

describe('Modal', () => {
  const user = userEvent.setup();

  type FixtureProps = {
    noHeader?: boolean;
  } & IModalProps;

  const MODAL_ID = 'TEST_ID';
  let onCloseSpy: jest.Mock;

  const BasicExample = ({ onClose, noHeader, ...other }: FixtureProps) => (
    <Modal
      {...other}
      id={MODAL_ID}
      onClose={onClose}
      data-test-id="modal"
      backdropProps={{ 'data-test-id': 'backdrop' } as any}
    >
      {!noHeader && <Modal.Header data-test-id="header">Example Header</Modal.Header>}
      <Modal.Body data-test-id="body">Body content</Modal.Body>
      <Modal.Footer data-test-id="footer">
        <button onClick={() => onClose}>Confirm</button>
      </Modal.Footer>
      <Modal.Close data-test-id="close" />
    </Modal>
  );

  beforeEach(() => {
    onCloseSpy = jest.fn();
  });

  describe('componentDidMount()', () => {
    it('should disable overflow scrolling for the html element', () => {
      render(<BasicExample />);

      expect(document.querySelector('html')?.style.overflow).toBe('hidden');
    });
  });

  describe('componentWillUnmount()', () => {
    it('should apply previous html overflow style', () => {
      const htmlElement = document.querySelector('html');

      if (htmlElement) {
        htmlElement.style.overflow = 'scroll';

        const { unmount } = render(<BasicExample />);

        expect(htmlElement.style.overflow).toBe('hidden');
        unmount();

        expect(htmlElement.style.overflow).toBe('scroll');
      }
    });
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(<Modal ref={ref} data-test-id="modal" />);

    expect(getByTestId('modal')).toBe(ref.current);
  });

  it('applies backdropProps to Backdrop element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('backdrop')).not.toBeNull();
  });

  it('applies aria-labelledby to dialog when Title is present', () => {
    const { getByText, getByRole } = render(<BasicExample />);

    const labelId = getByRole('dialog').getAttribute('aria-labelledby');
    const titleId = getByText('Example Header').getAttribute('id');

    expect(labelId).toStrictEqual(titleId);
  });

  it("doesn't show aria-labelledby to dialog when Title isn't present", () => {
    const { getByRole } = render(<BasicExample noHeader />);

    expect(getByRole('dialog').hasAttribute('aria-labelledby')).toBe(false);
  });

  it("applies default aria-label to dialog when Title isn't present", () => {
    const { getByRole } = render(<BasicExample noHeader />);

    const ariaLabel = getByRole('dialog').getAttribute('aria-label');

    expect(ariaLabel).toBe('Modal dialog');
  });

  it("applies aria-label to dialog prop when Title isn't present", () => {
    const { getByRole } = render(<BasicExample noHeader aria-label="Fun dialog" />);

    expect(getByRole('dialog').getAttribute('aria-label')).toBe('Fun dialog');
  });

  it('applies modal props to StyledModal element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('modal')).toHaveAttribute('aria-modal', 'true');
  });

  it('applies title props to Modal.Header element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('header')).toHaveAttribute('id', `${MODAL_ID}__title`);
  });

  it('applies content props to Modal.Body element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('body')).toHaveAttribute('id', `${MODAL_ID}__content`);
  });

  it('applies close props to Modal.Close element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('close')).toHaveAttribute('aria-label', 'Close modal');
  });

  describe('onClose()', () => {
    it('is triggered by backdrop click', async () => {
      const { getByTestId } = render(<BasicExample onClose={onCloseSpy} />);

      await user.click(getByTestId('backdrop'));
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });

    it('is triggered by Modal.Close element click', async () => {
      const { getByTestId } = render(<BasicExample onClose={onCloseSpy} />);

      await user.click(getByTestId('close'));
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });

    it('is triggered by ESC keydown', async () => {
      const { getByTestId } = render(<BasicExample onClose={onCloseSpy} />);

      await user.type(getByTestId('modal'), '{escape}');
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('appendToNode', () => {
    it('should append the backdrop to the supplied element', () => {
      const { getByTestId, rerender } = render(
        <>
          <div data-test-id="portal" />
          <BasicExample />
        </>
      );

      const portalInstance = getByTestId('portal');

      rerender(
        <>
          <div data-test-id="portal" />
          <BasicExample appendToNode={portalInstance} />
        </>
      );

      expect(portalInstance.firstChild).toHaveAttribute('data-test-id', 'backdrop');
    });
  });
});
