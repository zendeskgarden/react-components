The `Button` component is a styled `<button>` tag. It accepts all standard
button props.

### Types

```jsx
<Grid>
  <Row alignItems="center">
    <Col md>
      <Button>Default</Button>
    </Col>
    <Col md>
      <Button primary>Primary</Button>
    </Col>
    <Col md>
      <Button danger>Danger</Button>
    </Col>
    <Col md>
      <Button pill>Pill</Button>
    </Col>
    <Col md>
      <Button basic>Basic</Button>
    </Col>
    <Col md>
      <Button link>Link</Button>
    </Col>
  </Row>
</Grid>
```

### Sizes

```jsx
<Grid>
  <Row>
    <Col md>
      <Button size="small">Small</Button>
    </Col>
    <Col md>
      <Button size="medium">Medium</Button>
    </Col>
    <Col md>
      <Button size="large">Large</Button>
    </Col>
  </Row>
  <br />
  <Row>
    <Col md>
      <Button stretched>Stretched</Button>
    </Col>
    <Col md>
      <Button stretched>Stretched</Button>
    </Col>
  </Row>
</Grid>
```

### States

Garden elements use `data` attributes provided by our `<ThemeProvider>`
to apply focused styling. This allows Garden to mimic the functionality of the
[:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
pseudo-class.

```jsx
<Grid>
  <Row>
    <Col md>
      <Button data-garden-focus-visible>Focused Default</Button>
    </Col>
    <Col md>
      <Button data-garden-focus-visible focusInset>
        Inset Focused Default
      </Button>
    </Col>
    <Col md>
      <Button disabled>Disabled Default</Button>
    </Col>
  </Row>
  <br />
  <Row>
    <Col md>
      <Button data-garden-focus-visible basic>
        Focused Basic
      </Button>
    </Col>
    <Col md>
      <Button data-garden-focus-visible focusInset basic>
        Inset Focused Basic
      </Button>
    </Col>
    <Col md>
      <Button disabled basic>
        Disabled Basic
      </Button>
    </Col>
  </Row>
  <br />
  <Row>
    <Col md>
      <Button data-garden-focus-visible danger>
        Focused Danger Default
      </Button>
    </Col>
    <Col md>
      <Button data-garden-focus-visible focusInset danger>
        Inset Focused Default Danger
      </Button>
    </Col>
    <Col md>
      <Button disabled danger>
        Disabled Danger Default
      </Button>
    </Col>
  </Row>
  <br />
  <Row>
    <Col md>
      <Button data-garden-focus-visible primary>
        Focused Primary
      </Button>
    </Col>
    <Col md>
      <Button data-garden-focus-visible focusInset primary>
        Inset Focused Primary
      </Button>
    </Col>
    <Col md>
      <Button disabled primary>
        Disabled Primary
      </Button>
    </Col>
  </Row>
  <br />
  <Row>
    <Col md>
      <Button data-garden-focus-visible primary danger>
        Focused Primary Danger
      </Button>
    </Col>
    <Col md>
      <Button data-garden-focus-visible focusInset primary danger>
        Inset Focused Primary Danger
      </Button>
    </Col>
    <Col md>
      <Button disabled primary danger>
        Disabled Primary Danger
      </Button>
    </Col>
  </Row>
  <br />
  <Row>
    <Col md>
      <Button data-garden-focus-visible link>
        Focused Link
      </Button>
    </Col>
    <Col md>
      <Button data-garden-focus-visible danger link>
        Focused Danger Link
      </Button>
    </Col>
    <Col md>
      <Button disabled link>
        Disabled Link
      </Button>
    </Col>
  </Row>
</Grid>
```
