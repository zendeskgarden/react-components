/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { Button } from './Button';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import { COMPONENT_ID } from '../styled/StyledButton';

describe('Button', () => {
  it('is rendered as a button', () => {
    const { container } = render(<Button />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<Button ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders link styling if provided', () => {
    const { container } = render(<Button isLink />);

    expect(container.firstChild).toHaveStyleRule('text-decoration', 'underline');
  });

  describe('`data-garden-id` attribute', () => {
    it('sets a default data-garden-id attribute', () => {
      const { getByRole } = render(<Button />);

      expect(getByRole('button')).toHaveAttribute('data-garden-id', COMPONENT_ID);
    });

    it('supports overriding the data-garden-id attribute', () => {
      const { getByRole } = render(<Button data-garden-id="myCoolButton" />);

      expect(getByRole('button')).toHaveAttribute('data-garden-id', 'myCoolButton');
    });
  });

  describe('Icons', () => {
    it('successfully renders start and end icons', () => {
      const { getByTestId } = render(
        <Button>
          <Button.StartIcon>
            <TestIcon data-test-id="start" />
          </Button.StartIcon>
          <Button.EndIcon>
            <TestIcon data-test-id="end" />
          </Button.EndIcon>
        </Button>
      );

      expect(getByTestId('start')).not.toBeNull();
      expect(getByTestId('end')).not.toBeNull();
    });

    it('renders icon rotation', () => {
      const { getByTestId } = render(
        <Button>
          <Button.StartIcon isRotated>
            <TestIcon data-test-id="icon" />
          </Button.StartIcon>
        </Button>
      );

      expect(getByTestId('icon')).toHaveStyleRule('transform', 'rotate(+180deg)');
    });

    it('renders RTL icon rotation', () => {
      const { getByTestId } = renderRtl(
        <Button>
          <Button.EndIcon isRotated>
            <TestIcon data-test-id="icon" />
          </Button.EndIcon>
        </Button>
      );

      expect(getByTestId('icon')).toHaveStyleRule('transform', 'rotate(-180deg)');
    });
  });
});
