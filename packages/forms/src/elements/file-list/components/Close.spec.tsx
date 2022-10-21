/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { File } from './File';

describe('File.Close', () => {
  const user = userEvent.setup();

  it('renders the expected HTML element', () => {
    const { container } = render(<File.Close />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<File.Close ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('composes mousedown event handler', async () => {
    const mouseDown = jest.fn();
    const { getByTestId } = render(<File.Close data-test-id="close" onMouseDown={mouseDown} />);

    await user.click(getByTestId('close'));

    expect(mouseDown).toHaveBeenCalledTimes(1);
  });
});
