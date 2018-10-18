/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import AccordionContainer from './AccordionContainer';

describe('AccordionContainer', () => {
  let wrapper;
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
    wrapper = mountWithTheme(<BasicExample onStateChange={onChangeSpy} />);
  });

  const findHeading = enzymeWrapper => enzymeWrapper.find('[data-test-id="heading"]');
  const findHeadingButton = enzymeWrapper => enzymeWrapper.find('[data-test-id="heading-button"]');
  const findPanel = enzymeWrapper => enzymeWrapper.find('[data-test-id="panel"]');

  describe('getHeadingProps()', () => {
    it('throws accessibility error if no headingLevel is provided', () => {
      console.error = jest.fn(); // eslint-disable-line no-console

      expect(() => {
        wrapper = mountWithTheme(
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
    });

    it('applies correct role attribute', () => {
      expect(findHeading(wrapper)).toHaveProp('role', 'heading');
    });
  });

  describe('getHeadingButtonProps()', () => {
    it('applies correct id attribute', () => {
      expect(findHeadingButton(wrapper)).toHaveProp('id', 'test-header');
    });

    it('applies correct aria-controls attribute', () => {
      expect(findHeadingButton(wrapper)).toHaveProp('aria-controls', 'test-panel');
    });

    describe('aria-expanded', () => {
      it('applies correct attribute when collapsed', () => {
        expect(findHeadingButton(wrapper)).toHaveProp('aria-expanded', false);
      });

      it('applies correct attribute when expanded', () => {
        wrapper = mountWithTheme(<BasicExample onStateChange={onChangeSpy} expanded />);

        expect(findHeadingButton(wrapper)).toHaveProp('aria-expanded', true);
      });
    });

    describe('onClick()', () => {
      it('calls onStateChange with correct value when collapsed', () => {
        findHeadingButton(wrapper).simulate('click');
        expect(onChangeSpy).toHaveBeenCalledWith({ expanded: true });
      });

      it('calls onStateChange with correct value when expanded', () => {
        wrapper = mountWithTheme(<BasicExample onStateChange={onChangeSpy} expanded />);

        findHeadingButton(wrapper).simulate('click');
        expect(onChangeSpy).toHaveBeenCalledWith({ expanded: false });
      });
    });
  });

  describe('getPanelProps()', () => {
    it('applies correct role attribute', () => {
      expect(findPanel(wrapper)).toHaveProp('role', 'region');
    });

    it('applies correct aria-labelledby attribute', () => {
      expect(findPanel(wrapper)).toHaveProp('aria-labelledby', 'test-header');
    });

    it('applies correct id attribute', () => {
      expect(findPanel(wrapper)).toHaveProp('id', 'test-panel');
    });

    describe('aria-hidden', () => {
      it('applies correct attribute when collapsed', () => {
        expect(findPanel(wrapper)).toHaveProp('aria-hidden', true);
      });

      it('applies correct attribute when expanded', () => {
        wrapper = mountWithTheme(<BasicExample onStateChange={onChangeSpy} expanded />);

        expect(findPanel(wrapper)).toHaveProp('aria-hidden', false);
      });
    });
  });
});
