/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import { Modal } from './Modal';
import { Header } from './Header';

describe('Header', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Modal>
        <Header ref={ref} data-test-id="header">
          Header content
        </Header>
      </Modal>
    );

    expect(getByTestId('header')).toBe(ref.current);
  });
});
