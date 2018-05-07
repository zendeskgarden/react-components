import retrieveTheme from './retrieveTheme';

describe('retrieveTheme', () => {
  const COMPONENT_ID = 'component-id';
  const EXAMPLE_STYLE = 'test-style';

  it('returns undefined if no matching styles is found', () => {
    const styles = retrieveTheme(COMPONENT_ID, { theme: {} });

    expect(styles).toBe(undefined);
  });

  it('calls style as method if provided as a function', () => {
    const componentStyles = jest.fn().mockReturnValue(EXAMPLE_STYLE);

    const componentStyle = retrieveTheme(COMPONENT_ID, {
      theme: { styles: { [COMPONENT_ID]: componentStyles } },
      mockData: true
    });

    expect(componentStyles).toHaveBeenCalled();
    expect(componentStyle).toBe(EXAMPLE_STYLE);
  });

  it('returns style directly if found', () => {
    const componentStyle = retrieveTheme(COMPONENT_ID, {
      theme: { styles: { [COMPONENT_ID]: EXAMPLE_STYLE } },
      mockData: true
    });

    expect(componentStyle).toBe(EXAMPLE_STYLE);
  });
});
