The `TooltipView` component is meant for use with **single-line** contextual information.

If you are showing **multi-line** content, use the `LightTooltip` with a `Title` component.

```jsx
<Grid columns={2} stretched>
  <TooltipView data-placement="top">Some contextual information</TooltipView>
  <TooltipView data-placement="right" size="medium">
    This is some slightly longer contextual information.
  </TooltipView>
</Grid>
```

### Sizes

```jsx
<Grid columns={4} stretched>
  <TooltipView>Small (default)</TooltipView>
  <TooltipView size="medium">Medium</TooltipView>
  <TooltipView size="large">Large</TooltipView>
  <TooltipView size="extra-large">Extra-Large</TooltipView>
</Grid>
```
