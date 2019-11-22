The following sections link to corresponding Bootstrap examples and
demonstrate how advanced grid layouts can be achieved using Garden.

### Auto-layout columns

#### [Equal-width](https://getbootstrap.com/docs/4.3/layout/grid/#equal-width)

```jsx
<Grid isDebug>
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

#### [Setting One Column Width](https://getbootstrap.com/docs/4.3/layout/grid/#setting-one-column-width)

```jsx
<Grid isDebug>
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

#### [Variable Width Content](https://getbootstrap.com/docs/4.3/layout/grid/#variable-width-content)

```jsx
<Grid isDebug>
  <Row justifyContentMd="center">
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

#### [Equal-width multi-row](https://getbootstrap.com/docs/4.3/layout/grid/#equal-width-multi-row)

```jsx
<Grid isDebug>
  <Row>
    <Col>Col</Col>
    <Col>Col</Col>
    <div style={{ width: '100%' }} />
    <Col>Col</Col>
    <Col>Col</Col>
  </Row>
</Grid>
```

### Responsive classes

#### [All breakpoints](https://getbootstrap.com/docs/4.3/layout/grid/#all-breakpoints)

```jsx
<Grid isDebug>
  <Row>
    <Col>Col</Col>
    <Col>Col</Col>
    <Col>Col</Col>
    <Col>Col</Col>
  </Row>
  <Row>
    <Col size={8}>Col[size=8]</Col>
    <Col size={4}>Col[size=4]</Col>
  </Row>
</Grid>
```

#### [Stacked to horizontal](https://getbootstrap.com/docs/4.3/layout/grid/#stacked-to-horizontal)

```jsx
<Grid isDebug>
  <Row>
    <Col sm={8}>Col[sm=8]</Col>
    <Col sm={4}>Col[sm=4]</Col>
  </Row>
  <Row>
    <Col sm>Col[sm]</Col>
    <Col sm>Col[sm]</Col>
    <Col sm>Col[sm]</Col>
  </Row>
</Grid>
```

#### [Mix and match](https://getbootstrap.com/docs/4.3/layout/grid/#mix-and-match)

```jsx
<Grid isDebug>
  <p>Stack the columns on mobile by making one full-width and the other half-width</p>
  <Row>
    <Col size={12} md={8}>
      Col[size=12][md=8]
    </Col>
    <Col size={6} md={4}>
      Col[size=6][md=4]
    </Col>
  </Row>
  <p>Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop</p>
  <Row>
    <Col size={6} md={4}>
      Col[size=6][md=4]
    </Col>
    <Col size={6} md={4}>
      Col[size=6][md=4]
    </Col>
    <Col size={6} md={4}>
      Col[size=6][md=4]
    </Col>
  </Row>
  <p>Columns are always 50% wide, on mobile and desktop</p>
  <Row>
    <Col size={6}>Col[size=6]</Col>
    <Col size={6}>Col[size=6]</Col>
  </Row>
</Grid>
```

### Alignment

#### [Vertical alignment](https://getbootstrap.com/docs/4.3/layout/grid/#vertical-alignment)

```jsx
<Grid isDebug>
  <Row alignItems="start" style={{ minHeight: '3em' }}>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
  <Row alignItems="center" style={{ minHeight: '3em' }}>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
  <Row alignItems="end" style={{ minHeight: '3em' }}>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
</Grid>
```

```jsx
<Grid isDebug>
  <Row style={{ minHeight: '3em' }}>
    <Col alignSelf="start">One of three columns</Col>
    <Col alignSelf="center">One of three columns</Col>
    <Col alignSelf="end">One of three columns</Col>
  </Row>
</Grid>
```

#### [Horizontal alignment](https://getbootstrap.com/docs/4.3/layout/grid/#horizontal-alignment)

```jsx
<Grid isDebug>
  <Row justifyContent="start">
    <Col size={4}>One of two columns</Col>
    <Col size={4}>One of two columns</Col>
  </Row>
  <Row justifyContent="center">
    <Col size={4}>One of two columns</Col>
    <Col size={4}>One of two columns</Col>
  </Row>
  <Row justifyContent="end">
    <Col size={4}>One of two columns</Col>
    <Col size={4}>One of two columns</Col>
  </Row>
  <Row justifyContent="around">
    <Col size={4}>One of two columns</Col>
    <Col size={4}>One of two columns</Col>
  </Row>
  <Row justifyContent="between">
    <Col size={4}>One of two columns</Col>
    <Col size={4}>One of two columns</Col>
  </Row>
</Grid>
```

#### [No gutters](https://getbootstrap.com/docs/4.3/layout/grid/#no-gutters)

```jsx
<Grid gutters={false} isDebug>
  <Row>
    <Col size={12} sm={6} md={8}>
      Col[size=12][sm=6][md=8]
    </Col>
    <Col size={6} md={4}>
      Col[size=6][md=4]
    </Col>
  </Row>
</Grid>
```

#### [Column wrapping](https://getbootstrap.com/docs/4.3/layout/grid/#column-wrapping)

```jsx
<Grid isDebug>
  <Row>
    <Col size={9}>Col[size=9]</Col>
    <Col size={4}>
      Col[size=4]: since 9 + 4 = 13 &gt; 12, this column gets wrapped onto a new line as one
      contiguous unit.
    </Col>
    <Col size={6}>Col[size=6]: subsequent columns continue along the new line.</Col>
  </Row>
</Grid>
```

#### [Column breaks](https://getbootstrap.com/docs/4.3/layout/grid/#column-breaks)

```jsx
<Grid isDebug>
  <Row>
    <Col size={6} sm={3}>
      Col[size=6][sm=3]
    </Col>
    <Col size={6} sm={3}>
      Col[size=6][sm=3]
    </Col>
    <div style={{ width: '100%' }} />
    <Col size={6} sm={3}>
      Col[size=6][sm=3]
    </Col>
    <Col size={6} sm={3}>
      Col[size=6][sm=3]
    </Col>
  </Row>
</Grid>
```

### [Reordering](https://getbootstrap.com/docs/4.3/layout/grid/#order-classes)

```jsx
<Grid isDebug>
  <Row>
    <Col>First, but unordered</Col>
    <Col order="12">Second, but last</Col>
    <Col order="1">Third, but first</Col>
  </Row>
  <Row>
    <Col order="last">First, but last</Col>
    <Col>Second, but unordered</Col>
    <Col order="first">Third, but first</Col>
  </Row>
</Grid>
```

### [Offsetting columns](https://getbootstrap.com/docs/4.3/layout/grid/#offset-classes)

```jsx
<>
  <Grid isDebug>
    <Row>
      <Col md={4}>Col[md=4]</Col>
      <Col md={4} offsetMd={4}>
        Col[md=4][offsetMd=4]
      </Col>
    </Row>
    <Row>
      <Col md={3} offsetMd={3}>
        Col[md=3][offsetMd=3]
      </Col>
      <Col md={3} offsetMd={3}>
        Col[md=3][offsetMd=3]
      </Col>
    </Row>
    <Row>
      <Col md={6} offsetMd={3}>
        Col[md=6][offsetMd=3]
      </Col>
    </Row>
  </Grid>
  <Grid isDebug className="u-mt">
    <Row>
      <Col sm={5} md={6}>
        Col[sm=5][md=6]
      </Col>
      <Col sm={5} offsetSm={2} md={6} offsetMd={0}>
        Col[sm=5][offsetSm=2][md=6][offsetMd=0]
      </Col>
    </Row>
    <Row>
      <Col sm={6} md={5} lg={6}>
        Col[sm=6][md=5][lg=6]
      </Col>
      <Col sm={6} md={5} offsetMd={2} lg={6} offsetLg={0}>
        Col[sm=6][md=5][offsetMd=2][lg=6][offsetLg=0]
      </Col>
    </Row>
  </Grid>
</>
```

### [Nesting](https://getbootstrap.com/docs/4.3/layout/grid/#nesting)

```jsx
<Grid isDebug>
  <Row>
    <Col sm={9}>
      Level 1: Col[sm=9]
      <Row>
        <Col size={8} sm={6}>
          Level 2: Col[size=8][sm=6]
        </Col>
        <Col size={4} sm={6}>
          Level 2: Col[size=4][sm=6]
        </Col>
      </Row>
    </Col>
  </Row>
</Grid>
```
