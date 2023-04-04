/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Dropzone } from './Dropzone';

describe('Dropzone', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Dropzone ref={ref} />);

    expect(container.firstChild!).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<Dropzone />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders with custom tag', () => {
    const { container } = render(<Dropzone tag="section" />);

    expect(container.firstChild!.nodeName).toBe('SECTION');
  });

  it('sets aria-disabled if disabled', () => {
    const { container } = render(<Dropzone isDisabled />);

    expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
  });

  describe('Dropzone.Message', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = React.createRef<HTMLParagraphElement>();
      const { queryByText } = render(
        <Dropzone>
          <Dropzone.Message ref={ref}>message</Dropzone.Message>
        </Dropzone>
      );

      expect(queryByText('message')).toBe(ref.current);
    });

    it('renders the expected element', () => {
      const { queryByText } = render(
        <Dropzone>
          <Dropzone.Message>message</Dropzone.Message>
        </Dropzone>
      );

      expect(queryByText('message')!.nodeName).toBe('P');
    });
  });
});
