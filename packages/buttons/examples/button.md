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

```jsx
<Grid>
  <Row>
    <Col md>
      <Button focused>Focused Default</Button>
    </Col>
    <Col md>
      <Button focused focusInset>
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
      <Button focused basic>
        Focused Basic
      </Button>
    </Col>
    <Col md>
      <Button focused focusInset basic>
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
      <Button focused danger>
        Focused Danger Default
      </Button>
    </Col>
    <Col md>
      <Button focused focusInset danger>
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
      <Button focused primary>
        Focused Primary
      </Button>
    </Col>
    <Col md>
      <Button focused focusInset primary>
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
      <Button focused primary danger>
        Focused Primary Danger
      </Button>
    </Col>
    <Col md>
      <Button focused focusInset primary danger>
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
      <Button focused link>
        Focused Link
      </Button>
    </Col>
    <Col md>
      <Button focused danger link>
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
