/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Timeline } from '../elements/timeline/Timeline';
import { useTimelineItemContext } from './useTimelineItemContext';

describe('useTimelineItemContext', () => {
  const TimelineItemContextConsumer = () => {
    const context = useTimelineItemContext();

    return <div>{context && 'it worked'}</div>;
  };

  it('throws if called outside of Timeline.Item component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <TimelineItemContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within Timeline.Item component', () => {
    const Example = () => (
      <Timeline>
        <Timeline.Item>
          <TimelineItemContextConsumer />
        </Timeline.Item>
      </Timeline>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
