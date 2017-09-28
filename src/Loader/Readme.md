Our animations currently use inline GIFs. Using this component may increase your bundle size slightly.

```
initialState = {
    width: 50
};

<div>
    <Range
        label={`Width [${state.width}px]`}
        value={ state.width }
        title={ `${state.width}` }
        onChange={ width => setState({ width }) }
        min={10}
        max={200} />
    <Grid columns={2} stretched>
        <Loader size={state.width}>Help</Loader>
        <Loader type='spinner' size={state.width}>Help</Loader>
        <Loader color='aluminum' size={state.width}>Help</Loader>
        <Loader type='spinner' color='aluminum' size={state.width}>Help</Loader>
    </Grid>
</div>
```
