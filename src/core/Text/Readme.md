A text component.

```
<Text>Hello world</Text>
```

Adding a tooltip title:

```
<Text title='You did it'>Hover me</Text>
```

Attaching a click handler:

```
<Text onClick={ () => window.alert('You did it') }>Click me!</Text>
```

The text component supports arbitrary child elements.

```
<Text>
  <View>Hello</View>
  <View>world</View>
</Text>
```
