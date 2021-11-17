/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { File } from '../../..';

describe('File.Delete', () => {
  it('renders the expected HTML element', () => {
    const { container } = render(<File.Delete />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<File.Delete ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('composes mousedown event', () => {
    let test = 0;
    const { getByTestId } = render(
      <File.Delete data-test-id="delete" onMouseDown={() => test++} />
    );

    userEvent.click(getByTestId('delete'));

    expect(test).toStrictEqual(1);
  });
});
