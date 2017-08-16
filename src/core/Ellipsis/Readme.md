The component uses the `title` prop to display a tooltip containing the full text, in cases where overflow applies.
The `title` prop can also be manually set, in which case it will always trigger a tooltip. Examples below demonstrate:

Overflowing (clipped at 200px) - always shows title/tooltip:

```
<View style={{ width: '200px' }}>
  <Ellipsis>
    Bacon ipsum dolor amet short ribs salami pancetta porchetta biltong boudin prosciutto rump andouille tail leberkas turducken.
  </Ellipsis>
</View>
```

Always shows a title/tooltip - both when clipped and when not:

```
<View>
  <Ellipsis title='Some hardcoded title'>
    Bacon ipsum dolor amet short ribs salami pancetta porchetta biltong boudin prosciutto rump andouille tail leberkas turducken.
  </Ellipsis>
</View>
```

Adaptable: Only shows title/tooltip when clipped (resize window to demonstrate)

```
<View>
  <Ellipsis>
    Bacon ipsum dolor amet short ribs salami pancetta porchetta biltong boudin prosciutto rump andouille tail leberkas turducken.
  </Ellipsis>
</View>
```

Rich content: Will show the simplified text version of the content in the title/tooltip

```
<View>
  <Ellipsis>
    <strong>Bacon ipsum dolor</strong> amet short ribs salami pancetta porchetta biltong boudin prosciutto rump andouille tail leberkas turducken.
  </Ellipsis>
</View>
```
