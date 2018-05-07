import composeEventHandlers from './composeEventHandlers';

describe('composeEventHandlers', () => {
  it('should not call secondary event if primary is defaultPrevented', () => {
    const secondaryEvent = jest.fn();
    const composedEvents = composeEventHandlers(event => {
      event.defaultPrevented = true;
    }, secondaryEvent);

    composedEvents({});

    expect(secondaryEvent).not.toHaveBeenCalled();
  });

  it('should call secondary event if primary is not defaultPrevented', () => {
    const primaryEvent = jest.fn();
    const secondaryEvent = jest.fn();
    const composedEvents = composeEventHandlers(primaryEvent, secondaryEvent);

    composedEvents({});

    expect(primaryEvent).toHaveBeenCalled();
    expect(secondaryEvent).toHaveBeenCalled();
  });
});
