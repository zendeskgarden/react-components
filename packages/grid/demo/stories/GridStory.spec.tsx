/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { GridStory } from './GridStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<GridStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('GridStory Component', () => {
  it('renders default GridStory', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ]
    });
  });

  it('renders GridStory with alignItems', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ],
      alignItems: 'center' // Must be one of ['start', 'end', 'center', 'baseline', 'stretch']
    });
  });

  it('renders GridStory with alignItems for different screen sizes', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ],
      alignItemsXs: 'start', // Must be one of ['start', 'end', 'center', 'baseline', 'stretch']
      alignItemsSm: 'center',
      alignItemsMd: 'end',
      alignItemsLg: 'baseline',
      alignItemsXl: 'stretch'
    });
  });

  it('renders GridStory with justifyContent', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ],
      justifyContent: 'between' // Must be one of ['start', 'end', 'center', 'between', 'around']
    });
  });

  it('renders GridStory with justifyContent for different screen sizes', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ],
      justifyContentXs: 'start', // Must be one of ['start', 'end', 'center', 'between', 'around']
      justifyContentSm: 'center',
      justifyContentMd: 'end',
      justifyContentLg: 'around',
      justifyContentXl: 'between'
    });
  });

  it('renders GridStory with wrap', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ],
      wrap: 'wrap' // Must be one of ['nowrap', 'wrap', 'wrap-reverse']
    });
  });

  it('renders GridStory with wrap for different screen sizes', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ],
      wrapXs: 'nowrap', // Must be one of ['nowrap', 'wrap', 'wrap-reverse']
      wrapSm: 'wrap',
      wrapMd: 'wrap-reverse',
      wrapLg: 'wrap',
      wrapXl: 'nowrap'
    });
  });

  it('renders GridStory with multiple rows and columns', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 4 }, { size: 4 }, { size: 4 }]
        },
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ]
    });
  });

  it('renders GridStory with alignItems, justifyContent, and wrap combined', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ],
      alignItems: 'center', // Must be one of ['start', 'end', 'center', 'baseline', 'stretch']
      justifyContent: 'between', // Must be one of ['start', 'end', 'center', 'between', 'around']
      wrap: 'wrap' // Must be one of ['nowrap', 'wrap', 'wrap-reverse']
    });
  });

  it('renders GridStory with alignItems, justifyContent, and wrap for different screen sizes', () => {
    renderAndMatchSnapshot({
      rows: [
        {
          cols: [{ size: 6 }, { size: 6 }]
        }
      ],
      alignItemsXs: 'start', // Must be one of ['start', 'end', 'center', 'baseline', 'stretch']
      alignItemsSm: 'center',
      alignItemsMd: 'end',
      alignItemsLg: 'baseline',
      alignItemsXl: 'stretch',
      justifyContentXs: 'start', // Must be one of ['start', 'end', 'center', 'between', 'around']
      justifyContentSm: 'center',
      justifyContentMd: 'end',
      justifyContentLg: 'around',
      justifyContentXl: 'between',
      wrapXs: 'nowrap', // Must be one of ['nowrap', 'wrap', 'wrap-reverse']
      wrapSm: 'wrap',
      wrapMd: 'wrap-reverse',
      wrapLg: 'wrap',
      wrapXl: 'nowrap'
    });
  });
});
