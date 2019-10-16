/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import ScheduleContainer from './ScheduleContainer';

describe('ScheduleContainer', () => {
  const Example = props => (
    <ScheduleContainer {...props}>
      {() => <p data-test-id="content">Example content</p>}
    </ScheduleContainer>
  );

  beforeEach(() => {
    jest.useFakeTimers();
    global.cancelAnimationFrame = jest.fn();
    global.requestAnimationFrame = jest.fn();
  });

  it('hides content until default delay time has passed', () => {
    const { queryByTestId } = render(<Example />);

    expect(queryByTestId('content')).toBeNull();
    jest.runOnlyPendingTimers();
    expect(queryByTestId('content')).not.toBeNull();
  });

  it('hides content until custom delay time has passed', () => {
    const { queryByTestId } = render(<Example delayMS={50} />);

    expect(queryByTestId('content')).toBeNull();
    jest.runTimersToTime(50);
    expect(queryByTestId('content')).not.toBeNull();
  });

  it('shows content if delayMs is 0', () => {
    const { queryByTestId } = render(<Example delayMS={0} />);

    expect(queryByTestId('content')).not.toBeNull();
  });

  it('removes events when component is unmounted', () => {
    const { unmount } = render(<Example delayMS={0} />);

    unmount();
    expect(clearTimeout).toHaveBeenCalled();
    expect(cancelAnimationFrame).toHaveBeenCalled();
  });

  it('calls tick with timestamp when requestAnimationFrame is triggered', () => {
    const tickSpy = jest.fn();

    render(<Example tick={tickSpy} />);

    // Run timer to start requestAnimationFrame
    jest.runOnlyPendingTimers();

    // Run first animation frame
    requestAnimationFrame.mock.calls[0][0]();

    expect(tickSpy).toHaveBeenCalled();
  });
});
