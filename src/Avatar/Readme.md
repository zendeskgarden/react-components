Types:

```
<Grid>
  <Avatar type='human' src='./images/amir.png'/>
  <Avatar type='system' src='./images/zendesk.jpeg'/>
</Grid>
```

Sizes:

```
<Grid>
  <Avatar size='small' src='./images/jason.png'/>
  <Avatar size='medium' src='./images/jason.png'/>
  <Avatar size='large' src='./images/jason.png'/>
  <Avatar size='65px' src='./images/jason.png'/>
</Grid>
```

Status:

```
<Grid>
  <Avatar status='default' src='./images/jason.png'/>
  <Avatar status='present' src='./images/jason.png'/>
  <Avatar status='away' src='./images/jason.png'/>
  <Avatar status='active' src='./images/jason.png'/>
</Grid>
```

Showing a fallback image:

```
initialState = { url: 'https://example.tld/image.png' };

<Avatar
  src={ state.url }
  onError={ () => setState({ url: './images/jason.png' })}
/>
```

Do something when the image is loaded successfully

```
initialState = { loaded: false };

<Grid>
  <Avatar
    src={ './images/jason.png' }
    onLoad={ () => setState({ loaded: true }) }
  />
  { state.loaded ? 'Loaded' : 'Loading...' }
</Grid>
```
