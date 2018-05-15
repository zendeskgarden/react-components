The `TooltipView` component is meant for use with **single-line** contextual information.

If you are showing **multi-line** content, use the `LightTooltip` with a `Title` component.

```jsx
<Grid>
  <Row>
    <Col md>
      <TooltipView data-placement="top">Some contextual information</TooltipView>
    </Col>
    <Col md>
      <TooltipView data-placement="right" size="medium">
        This is some slightly longer contextual information.
      </TooltipView>
    </Col>
  </Row>
</Grid>
```

### Sizes

```jsx
<Grid>
  <Row>
    <Col md>
      <TooltipView>Small (default)</TooltipView>
    </Col>
    <Col md>
      <TooltipView size="medium">Medium</TooltipView>
    </Col>
    <Col md>
      <TooltipView size="large">Large</TooltipView>
    </Col>
    <Col md>
      <TooltipView size="extra-large">Extra-Large</TooltipView>
    </Col>
  </Row>
</Grid>
```
