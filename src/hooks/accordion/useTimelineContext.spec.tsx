/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Timeline } from '../elements/timeline/Timeline';
import { useTimelineContext } from './useTimelineContext';

describe('useTimelineContext', () => {
  const TimelineContextConsumer = () => {
    const context = useTimelineContext();

    return <Timeline.Item>{!!context && 'it worked'}</Timeline.Item>;
  };

  it('throws if called outside of Timeline component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <TimelineContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within Timeline component', () => {
    const Example = () => (
      <Timeline>
        <TimelineContextConsumer />
      </Timeline>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
