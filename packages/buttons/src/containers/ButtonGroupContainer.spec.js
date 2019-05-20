/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import closest from 'dom-helpers/query/closest';

import ButtonGroupContainer from './ButtonGroupContainer';

jest.mock('dom-helpers/query/closest');
closest.mockImplementation(() => ({ focus: jest.fn() }));

describe('ButtonGroupContainer', () => {
  const buttons = ['button-1', 'button-2', 'button-3'];

  const BasicExample = () => (
    <ButtonGroupContainer>
      {({ getGroupProps, getButtonProps, selectedKey, focusedKey }) => (
        <div {...getGroupProps({ 'data-test-id': 'group' })}>
          {buttons.map(button => (
            <div
              {...getButtonProps({
                key: button,
                'data-test-id': 'button',
                'data-selected': button === selectedKey,
                'data-focused': button === focusedKey
              })}
            >
              {button}
            </div>
          ))}
        </div>
      )}
    </ButtonGroupContainer>
  );

  describe('getGroupProps', () => {
    it('applies correct accessibility role', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('group')).toHaveAttribute('role', 'group');
    });
  });

  describe('getButtonProps', () => {
    it('throws if key is not provided', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
          <ButtonGroupContainer>
            {({ getButtonProps }) => <div {...getButtonProps()}>Test button</div>}
          </ButtonGroupContainer>
        );
      }).toThrow(
        '"key" must be defined within getButtonProps regardless of being used within a .map()'
      );

      console.error = originalError;
    });

    it('applies the correct accessibility role', () => {
      const { getAllByTestId } = render(<BasicExample />);

      getAllByTestId('button').forEach(button => {
        expect(button).toHaveAttribute('role', 'button');
      });
    });

    it('applies the correct accessibility tabIndex', () => {
      const { getAllByTestId } = render(<BasicExample />);

      getAllByTestId('button').forEach(button => {
        expect(button).toHaveAttribute('tabIndex', '-1');
      });
    });

    it('applies the correct accessibility selected value when not selected', () => {
      const { getAllByTestId } = render(<BasicExample />);

      expect(getAllByTestId('button')[0]).toHaveAttribute('aria-pressed', 'false');
    });

    it('applies the correct accessibility selected value when selected', () => {
      const { getAllByTestId } = render(<BasicExample />);
      const firstButton = getAllByTestId('button')[0];

      fireEvent.click(firstButton);

      expect(firstButton).toHaveAttribute('aria-pressed', 'true');
    });

    it('moves focus to the ButtonGroupView if a button receives focus', () => {
      const { getAllByTestId } = render(<BasicExample />);

      fireEvent.focus(getAllByTestId('button')[0]);

      expect(closest).toHaveBeenCalled();
    });
  });
});
