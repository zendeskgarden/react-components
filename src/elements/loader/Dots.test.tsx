/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import { Dots } from './Dots';

describe('Dots', () => {
  it('renders loader, starting as hidden by default', () => {
    const { queryByTestId } = render(<Dots data-test-id="dots" />);

    expect(queryByTestId('dots')).toBeInTheDocument();
    expect(queryByTestId('dots')).not.toBeVisible();
  });

  it('renders loader but does not hide if no delay', () => {
    const { queryByTestId } = render(<Dots data-test-id="dots" delayMS={0} />);

    expect(queryByTestId('dots')).toBeInTheDocument();
    expect(queryByTestId('dots')).toBeVisible();
  });

  it('applies correct accessibility values', () => {
    const { getByTestId } = render(<Dots data-test-id="dots" />);

    const dots = getByTestId('dots');

    expect(dots).toHaveAttribute('role', 'img');
  });

  it('renders color variable key as expected', () => {
    const { container } = render(<Dots color="foreground.primary" />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.blue[700]);
  });

  it('renders a numeric size in pixels', () => {
    const { container } = render(<Dots size={16} />);

    expect(container.firstChild).toHaveStyleRule('font-size', '16px');
  });

  it('renders the circles at the expected coordinates', () => {
    const { getByTestId } = render(<Dots data-test-id="dots" />);

    const circles = Array.from(getByTestId('dots').querySelectorAll('circle'));

    expect(
      circles.map(circle => [
        circle.getAttribute('cx'),
        circle.getAttribute('cy'),
        circle.getAttribute('r')
      ])
    ).toEqual([
      ['9', '36', '9'],
      ['40', '36', '9'],
      ['71', '36', '9']
    ]);
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Dots data-test-id="dots" data-garden-id="custom" data-garden-version="0.0.0" />
    );

    expect(getByTestId('dots')).toHaveAttribute('data-garden-id', 'loaders.dots');
    expect(getByTestId('dots')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });
});
