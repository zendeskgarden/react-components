### Auto-Layout Equal-Width Columns

```jsx
<Grid debug>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Grid>
```

### Setting One Column Width

```jsx
<Grid debug>
  <Row>
    <Col>1 of 3</Col>
    <Col size={6}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col size={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
</Grid>
```

### Variable Width Content

```jsx
<Grid debug>
  <Row justifyContent="center" style={{ marginBottom: 8 }}>
    <Col lg={2}>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col lg={2}>3 of 3</Col>
  </Row>
  <Row justifyContent="center">
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col lg={2}>3 of 3</Col>
  </Row>
</Grid>
```

### Responsive Layouts

```jsx
<Grid debug>
  <Row>
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
  </Row>
  <Row>
    <Col size={8}>col[size=8]</Col>
    <Col size={4}>col[size=4]</Col>
  </Row>
</Grid>
```

### Stacked to Horizontal

```jsx
<Grid debug>
  <Row>
    <Col sm={8}>col[sm=8]</Col>
    <Col sm={4}>col[sm=4]</Col>
  </Row>
  <Row>
    <Col sm>col[sm]</Col>
    <Col sm>col[sm]</Col>
    <Col sm>col[sm]</Col>
  </Row>
</Grid>
```

### Mix and Match

```jsx
<Grid debug>
  <p>Stack the columns on mobile by making one full-width and the other half-width</p>
  <Row>
    <Col size={12} md={8}>
      col[size=12] col[md=8]
    </Col>
    <Col size={6} md={4}>
      col[size=6] col[md=4]
    </Col>
  </Row>
  <p>Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop</p>
  <Row>
    <Col size={6} md={4}>
      col[size=6] col[md=4]
    </Col>
    <Col size={6} md={4}>
      col[size=6] col[md=4]
    </Col>
    <Col size={6} md={4}>
      col[size=6] col[md=4]
    </Col>
  </Row>
  <p>Columns are always 50% wide, on mobile and desktop</p>
  <Row>
    <Col size={6}>col[size=6]</Col>
    <Col size={6}>col[size=6]</Col>
  </Row>
</Grid>
```

### Vertical Alignment

```jsx
<Grid debug>
  <Row
    alignItems="start"
    style={{ minHeight: '4em', backgroundColor: 'rgba(255,0,0,.1)', marginBottom: 8 }}
  >
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
  <Row
    alignItems="center"
    style={{ minHeight: '4em', backgroundColor: 'rgba(255,0,0,.1)', marginBottom: 8 }}
  >
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
  <Row
    alignItems="end"
    style={{ minHeight: '4em', backgroundColor: 'rgba(255,0,0,.1)', marginBottom: 8 }}
  >
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
</Grid>
```

```jsx
<Grid debug>
  <Row style={{ minHeight: '4em', backgroundColor: 'rgba(255,0,0,.1)', marginBottom: 8 }}>
    <Col alignSelf="start">One of three columns</Col>
    <Col alignSelf="center">One of three columns</Col>
    <Col alignSelf="end">One of three columns</Col>
  </Row>
</Grid>
```

### Horizontal Alignment

```jsx
<Grid debug>
  <Row justifyContent="start">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
  <br />
  <Row justifyContent="center">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
  <br />
  <Row justifyContent="end">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
  <br />
  <Row justifyContent="around">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
  <br />
  <Row justifyContent="between">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
</Grid>
```
