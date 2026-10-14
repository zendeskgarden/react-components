/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from '../../test/render';
import { Tag } from './Tag';

describe('Tag.Avatar', () => {
  it('renders the child icon', () => {
    const { getByTestId } = render(
      <Tag.Avatar>
        <img alt="" data-test-id="icon" />
      </Tag.Avatar>
    );

    expect(getByTestId('icon')).not.toBeNull();
  });
});
