Floating callouts:

```
initialState = { callouts: [], nextId: 0 }

const createCallout = (type) => {
  const removeCallout = (callout) => {
    setState(state => ({ callouts: state.callouts.filter(c => c !== callout ) }))
  }

  const callout = (
    <Callout
      key={`callout-${state.nextId}`}
      onClose={() => removeCallout(callout)}
      title='Title!'
      type={type}
    >
      This is a floating callout
    </Callout>
  )

  setTimeout(() => removeCallout(callout), 5000)

  setState(state => ({
    callouts: state.callouts.concat(callout),
    nextId: state.nextId + 1
  }))
};

<Grid>
  <Button onClick={() => createCallout('default')}>Default</Button>
  <Button onClick={() => createCallout('success')}>Success</Button>
  <Button onClick={() => createCallout('warning')}>Warning</Button>
  <Button onClick={() => createCallout('error')}>Error</Button>
  <Callouts floating>
    {state.callouts}
  </Callouts>
</Grid>
```

Floating callouts RTL:


```
initialState = { callouts: [], nextId: 0 }

const createCallout = (type) => {
  const removeCallout = (callout) => {
    setState(state => ({ callouts: state.callouts.filter(c => c !== callout ) }))
  }

  const callout = (
    <Callout
      key={`callout-${state.nextId}`}
      onClose={() => removeCallout(callout)}
      title='Title!'
      type={type}
    >
      This is a floating callout
    </Callout>
  )

  setTimeout(() => removeCallout(callout), 5000)

  setState(state => ({
    callouts: state.callouts.concat(callout),
    nextId: state.nextId + 1
  }))
};

<Grid>
  <Button onClick={() => createCallout('default')}>Default</Button>
  <Button onClick={() => createCallout('success')}>Success</Button>
  <Button onClick={() => createCallout('warning')}>Warning</Button>
  <Button onClick={() => createCallout('error')}>Error</Button>
  <Callouts dir='rtl' floating>
    {state.callouts}
  </Callouts>
</Grid>
```
