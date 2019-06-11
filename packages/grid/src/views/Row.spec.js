/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Row from './Row';

describe('Row', () => {
  it('renders default styling', () => {
    const { container } = render(<Row />);

    expect(container.firstChild).toHaveClass('row');
  });

  it('renders without gutters if provided', () => {
    const { container } = render(<Row gutters={false} />);

    expect(container.firstChild).toHaveClass('no-gutters');
  });

  describe('Align Items', () => {
    ['start', 'center', 'end'].forEach(alignment => {
      it(`renders ${alignment} alignment if provided`, () => {
        const { container } = render(<Row alignItems={alignment} />);

        expect(container.firstChild).toHaveClass(`align-items-${alignment}`);
      });
    });
  });

  describe('Justify Content', () => {
    ['start', 'center', 'end', 'around', 'between'].forEach(justifyContent => {
      it(`renders ${justifyContent} justify content if provided`, () => {
        const { container } = render(<Row justifyContent={justifyContent} />);

        expect(container.firstChild).toHaveClass(`justify-content-${justifyContent}`);
      });
    });
  });
});
