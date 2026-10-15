/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { Stepper } from './Stepper';

describe('Stepper', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLOListElement>();
    const { container } = render(<Stepper ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Stepper data-test-id="stepper" data-garden-id="custom" data-garden-version="0.0.0" />
    );

    expect(getByTestId('stepper')).toHaveAttribute('data-garden-id', 'accordions.stepper');
    expect(getByTestId('stepper')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  describe('Styling', () => {
    it('renders default styling', () => {
      const { container } = render(<Stepper />);

      expect(container.firstChild).not.toHaveStyleRule('display');
    });

    it('renders horizontal styling', () => {
      const { container } = render(<Stepper isHorizontal />);

      expect(container.firstChild).toHaveStyleRule('display', 'flex');
    });
  });
});
