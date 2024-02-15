/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl } from 'garden-test-utils';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import { FauxInput } from './FauxInput';

describe('FauxInput', () => {
  const user = userEvent.setup();

  it('renders the expected element', () => {
    const { container } = render(<FauxInput />);

    expect(container.firstElementChild!.nodeName).toBe('DIV');
    expect(container.firstElementChild!.getAttribute('tabIndex')).toBe('0');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<FauxInput ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders expected disabled tabindex', () => {
    const { container } = render(<FauxInput disabled />);

    expect(container.firstElementChild!.getAttribute('tabIndex')).toBeNull();
  });

  it('applies focused styling on focus event', async () => {
    const { container } = render(<FauxInput />);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'false');

    await user.click(container.firstElementChild!);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'true');
  });

  it('removes focused styling on blur event', async () => {
    const { container } = render(<FauxInput />);

    await user.click(container.firstElementChild!);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'true');

    await user.tab();

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'false');
  });

  describe('Icons', () => {
    it('successfully renders start and default icons', () => {
      const { getByTestId } = render(
        <FauxInput>
          <FauxInput.StartIcon>
            <TestIcon data-test-id="start" />
          </FauxInput.StartIcon>
          <FauxInput.EndIcon>
            <TestIcon data-test-id="default" />
          </FauxInput.EndIcon>
        </FauxInput>
      );

      expect(getByTestId('start')).not.toBeNull();
      expect(getByTestId('default')).not.toBeNull();
    });

    it('renders start icon', () => {
      const { getByTestId } = render(
        <FauxInput>
          <FauxInput.StartIcon>
            <TestIcon data-test-id="icon" />
          </FauxInput.StartIcon>
        </FauxInput>
      );

      expect(getByTestId('icon')).toHaveStyleRule('margin', '1px 8px auto 0');
    });

    it('renders RTL start icon', () => {
      const { getByTestId } = renderRtl(
        <FauxInput>
          <FauxInput.StartIcon>
            <TestIcon data-test-id="icon" />
          </FauxInput.StartIcon>
        </FauxInput>
      );

      expect(getByTestId('icon')).toHaveStyleRule('margin', '1px 0 auto 8px');
    });
  });
});
