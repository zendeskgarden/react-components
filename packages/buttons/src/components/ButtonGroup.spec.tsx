/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

describe('ButtonGroup', () => {
  const BasicExample = () => (
    <ButtonGroup data-test-id="group">
      <Button value="button-1" data-test-id="button">
        Button 1
      </Button>
      <Button value="button-2" data-test-id="button">
        Button 2
      </Button>
    </ButtonGroup>
  );

  /* eslint-disable no-console */
  it('throws if key is not provided to button', () => {
    const originalError = console.error;

    console.error = jest.fn();

    expect(() => {
      render(
        <ButtonGroup>
          <Button>Invalid Button</Button>
        </ButtonGroup>
      );
    }).toThrow('"value" prop must be provided to Button');

    console.error = originalError;
  });

  it('applies selected styling to currently selected tab', () => {
    const { getAllByTestId } = render(<BasicExample />);
    const lastButton = getAllByTestId('button')[1];

    fireEvent.click(lastButton);

    expect(lastButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('applies focused attributes to currently focused tab', () => {
    const { getAllByTestId } = render(<BasicExample />);
    const [, button] = getAllByTestId('button');

    fireEvent.focus(button);

    expect(button).toHaveAttribute('tabIndex', '0');
  });

  it('applies disabled styling if provided', () => {
    const { getAllByTestId } = render(
      <ButtonGroup>
        <Button value="button-1" data-test-id="button">
          Button 1
        </Button>
        <Button disabled data-test-id="button">
          Button 2
        </Button>
      </ButtonGroup>
    );

    expect(getAllByTestId('button')[1]).toHaveAttribute('disabled');
  });

  it('selected first tab if in uncontrolled state', () => {
    const { getAllByTestId } = render(<BasicExample />);

    expect(getAllByTestId('button')[0]).toHaveAttribute('aria-pressed', 'true');
  });

  it('does not apply props to any component other than Button', () => {
    const { getByTestId } = render(
      <ButtonGroup>
        <span>Non button test</span>
        <Button value="button-1" data-test-id="button">
          Button 1
        </Button>
      </ButtonGroup>
    );

    const button = getByTestId('button');

    fireEvent.focus(button);

    expect(button).toHaveFocus();
  });
});
