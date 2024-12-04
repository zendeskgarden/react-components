/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { FileListStory } from './FileListStory';
import { FILELIST_ITEMS } from './data';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<FileListStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('FileListStory Component', () => {
  it('renders default FileListStory with no items', () => {
    renderAndMatchSnapshot({ items: [] });
  });

  it('renders FileListStory with a single item', () => {
    renderAndMatchSnapshot({
      items: [FILELIST_ITEMS[0]]
    });
  });

  it('renders FileListStory with multiple items', () => {
    renderAndMatchSnapshot({
      items: FILELIST_ITEMS
    });
  });

  it('renders FileListStory with compact styling', () => {
    renderAndMatchSnapshot({
      items: FILELIST_ITEMS,
      isCompact: true
    });
  });

  it('renders FileListStory with an item that has a close button', () => {
    renderAndMatchSnapshot({
      items: [FILELIST_ITEMS[1]]
    });
  });

  it('renders FileListStory with an item that has a delete button', () => {
    renderAndMatchSnapshot({
      items: [FILELIST_ITEMS[7]]
    });
  });

  it('renders FileListStory with a file that has progress', () => {
    renderAndMatchSnapshot({
      items: [FILELIST_ITEMS[2]]
    });
  });

  it('renders FileListStory with multiple items, one with close and one with delete', () => {
    renderAndMatchSnapshot({
      items: [FILELIST_ITEMS[1], FILELIST_ITEMS[7]]
    });
  });

  it('renders FileListStory with multiple items, one with progress and one without', () => {
    renderAndMatchSnapshot({
      items: [FILELIST_ITEMS[0], FILELIST_ITEMS[2]]
    });
  });

  it('renders FileListStory with all file types', () => {
    renderAndMatchSnapshot({
      items: FILELIST_ITEMS
    });
  });

  it('renders FileListStory with compact styling and a close button', () => {
    renderAndMatchSnapshot({
      items: [FILELIST_ITEMS[1]],
      isCompact: true
    });
  });

  it('renders FileListStory with compact styling and a delete button', () => {
    renderAndMatchSnapshot({
      items: [FILELIST_ITEMS[7]],
      isCompact: true
    });
  });

  it('renders FileListStory with compact styling and progress', () => {
    renderAndMatchSnapshot({
      items: [FILELIST_ITEMS[2]],
      isCompact: true
    });
  });

  it('renders FileListStory with compact styling and multiple items', () => {
    renderAndMatchSnapshot({
      items: FILELIST_ITEMS,
      isCompact: true
    });
  });

  it('renders FileListStory with aria labels for close and delete buttons', () => {
    renderAndMatchSnapshot({
      items: FILELIST_ITEMS,
      closeAriaLabel: 'Close file',
      deleteAriaLabel: 'Delete file'
    });
  });

  it('renders FileListStory with compact styling, aria labels, and multiple items', () => {
    renderAndMatchSnapshot({
      items: FILELIST_ITEMS,
      isCompact: true,
      closeAriaLabel: 'Close file',
      deleteAriaLabel: 'Delete file'
    });
  });
});
