```
<Toggle
  checked={ state.checked }
  onChange={ checked => setState({ checked }) }
/>
```

Use a label for the toggle:

```
<Toggle
  checked={ state.checked }
  onChange={ checked => setState({ checked }) }
>
  Toggle me
</Toggle>
```

Support for RTL:

```
<Toggle
  checked={ state.checked }
  dir='rtl'
  onChange={ checked => setState({ checked }) }
>
  Toggle me
</Toggle>
```
