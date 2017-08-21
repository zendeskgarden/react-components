The pagination component provides styling for a multi-page control used to navigate long content lists such as data tables or search results.

Controlled pagination component:
```
initialState = { currentPage: 0 };

<div>
  <p>Selected page index: { state.currentPage }</p>
  <Pagination 
    total={25} 
    currentPage={state.currentPage} 
    onPageSelected={currentPage => { setState({currentPage})}} />
</div>
```

Customized padding and total items:
```
initialState = {
  currentPage: 14,
  total: 25,
  isRtl: false
};

<div>
  <Grid 
    spacing='large' 
    columns={3} 
    style={{marginBottom: 40}}>
    <TextInput
      onChangeText={(currentPage) => {
        if (currentPage) {
          setState({ currentPage: parseInt(currentPage) });
        }
      }}
      label='Current Page:'
      valueType='number'
      value={ String(state.currentPage) } />
    <TextInput
      onChangeText={(total) => {
        if (total) {
          setState({ total: parseInt(total) });
        }
      }}
      label='Total Pages:'
      valueType='number'
      value={ String(state.total) } />
    <Checkbox
      checked={ state.isRtl }
      onChange={isRtl => setState({ isRtl }) }>
      Is RTL
    </Checkbox>
  </Grid>
  <Pagination 
    total={state.total || 9}
    dir={state.isRtl ? 'rtl' : 'ltr'}
    currentPage={state.currentPage || 0}
    onPageSelected={currentPage => { setState({currentPage})}} />
</div>
```
