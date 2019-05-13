/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import AccordionContainer from './AccordionContainer';

describe('AccordionContainer', () => {
  let onChangeSpy;

  const BasicExample = props => (
    <AccordionContainer id="test" expanded={false} {...props}>
      {({ getHeadingProps, getHeadingButtonProps, getPanelProps }) => (
        <div>
          <div {...getHeadingProps({ 'data-test-id': 'heading', headingLevel: 1 })}>
            <button {...getHeadingButtonProps({ 'data-test-id': 'heading-button' })}>
              Header Content
            </button>
          </div>
          <div {...getPanelProps({ 'data-test-id': 'panel' })}>Panel Content</div>
        </div>
      )}
    </AccordionContainer>
  );

  beforeEach(() => {
    onChangeSpy = jest.fn();
  });

  describe('getHeadingProps()', () => {
    it('throws accessibility error if no headingLevel is provided', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
          <AccordionContainer id="test" expanded={false}>
            {({ getHeadingProps, getHeadingButtonProps, getPanelProps }) => (
              <div>
                <div {...getHeadingProps()}>
                  <button {...getHeadingButtonProps()}>Header Content</button>
                </div>
                <div {...getPanelProps()}>Panel Content</div>
              </div>
            )}
          </AccordionContainer>
        );
      }).toThrow(
        'Accessibility Error: You must apply the `headingLevel` prop to the element that contains your heading. Equivalent to `aria-level`.'
      );

      console.error = originalError;
    });

    it('applies correct role attribute', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('heading')).toHaveAttribute('role', 'heading');
    });
  });

  describe('getHeadingButtonProps()', () => {
    it('applies correct id attribute', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('heading-button')).toHaveAttribute('id', 'test-header');
    });

    it('applies correct aria-controls attribute', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('heading-button')).toHaveAttribute('aria-controls', 'test-panel');
    });

    describe('aria-expanded', () => {
      it('applies correct attribute when collapsed', () => {
        const { getByTestId } = render(<BasicExample />);

        expect(getByTestId('heading-button')).toHaveAttribute('aria-expanded', 'false');
      });

      it('applies correct attribute when expanded', () => {
        const { getByTestId } = render(<BasicExample expanded />);

        expect(getByTestId('heading-button')).toHaveAttribute('aria-expanded', 'true');
      });
    });

    describe('onClick()', () => {
      it('calls onStateChange with correct value when collapsed', () => {
        const { getByTestId } = render(<BasicExample onStateChange={onChangeSpy} />);

        fireEvent.click(getByTestId('heading-button'));

        expect(onChangeSpy).toHaveBeenCalledWith({ expanded: true });
      });

      it('calls onStateChange with correct value when expanded', () => {
        const { getByTestId } = render(<BasicExample onStateChange={onChangeSpy} expanded />);

        fireEvent.click(getByTestId('heading-button'));

        expect(onChangeSpy).toHaveBeenCalledWith({ expanded: false });
      });
    });
  });

  describe('getPanelProps()', () => {
    it('applies correct role attribute', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('panel')).toHaveAttribute('role', 'region');
    });

    it('applies correct aria-labelledby attribute', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('panel')).toHaveAttribute('aria-labelledby', 'test-header');
    });

    it('applies correct id attribute', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('panel')).toHaveAttribute('id', 'test-panel');
    });

    describe('aria-hidden', () => {
      it('applies correct attribute when collapsed', () => {
        const { getByTestId } = render(<BasicExample />);

        expect(getByTestId('panel')).toHaveAttribute('aria-hidden', 'true');
      });

      it('applies correct attribute when expanded', () => {
        const { getByTestId } = render(<BasicExample expanded />);

        expect(getByTestId('panel')).toHaveAttribute('aria-hidden', 'false');
      });
    });
  });
});
