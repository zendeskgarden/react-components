The following sections link to corresponding Bootstrap examples and
demonstrate how advanced grid layouts can be achieved using Garden.

### Auto-layout columns

#### [Equal-width](https://getbootstrap.com/docs/4.3/layout/grid/#equal-width)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row>
    <Col>
      <MD>1 of 2</MD>
    </Col>
    <Col>
      <MD>2 of 2</MD>
    </Col>
  </Row>
  <Row>
    <Col>
      <MD>1 of 3</MD>
    </Col>
    <Col>
      <MD>2 of 3</MD>
    </Col>
    <Col>
      <MD>3 of 3</MD>
    </Col>
  </Row>
</Grid>;
```

#### [Setting One Column Width](https://getbootstrap.com/docs/4.3/layout/grid/#setting-one-column-width)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row>
    <Col>
      <MD>1 of 3</MD>
    </Col>
    <Col size={6}>
      <MD>2 of 3 (wider)</MD>
    </Col>
    <Col>
      <MD>3 of 3</MD>
    </Col>
  </Row>
  <Row>
    <Col>
      <MD>1 of 3</MD>
    </Col>
    <Col size={5}>
      <MD>2 of 3 (wider)</MD>
    </Col>
    <Col>
      <MD>3 of 3</MD>
    </Col>
  </Row>
</Grid>;
```

#### [Variable Width Content](https://getbootstrap.com/docs/4.3/layout/grid/#variable-width-content)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row justifyContentMd="center">
    <Col lg={2}>
      <MD>1 of 3</MD>
    </Col>
    <Col md="auto">
      <MD>Variable width content</MD>
    </Col>
    <Col lg={2}>
      <MD>3 of 3</MD>
    </Col>
  </Row>
  <Row justifyContent="center">
    <Col>
      <MD>1 of 3</MD>
    </Col>
    <Col md="auto">
      <MD>Variable width content</MD>
    </Col>
    <Col lg={2}>
      <MD>3 of 3</MD>
    </Col>
  </Row>
</Grid>;
```

#### [Equal-width multi-row](https://getbootstrap.com/docs/4.3/layout/grid/#equal-width-multi-row)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row>
    <Col>
      <MD>Col</MD>
    </Col>
    <Col>
      <MD>Col</MD>
    </Col>
    <div style={{ width: '100%' }} />
    <Col>
      <MD>Col</MD>
    </Col>
    <Col>
      <MD>Col</MD>
    </Col>
  </Row>
</Grid>;
```

### Responsive classes

#### [All breakpoints](https://getbootstrap.com/docs/4.3/layout/grid/#all-breakpoints)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row>
    <Col>
      <MD>Col</MD>
    </Col>
    <Col>
      <MD>Col</MD>
    </Col>
    <Col>
      <MD>Col</MD>
    </Col>
    <Col>
      <MD>Col</MD>
    </Col>
  </Row>
  <Row>
    <Col size={8}>
      <MD>Col[size=8]</MD>
    </Col>
    <Col size={4}>
      <MD>Col[size=4]</MD>
    </Col>
  </Row>
</Grid>;
```

#### [Stacked to horizontal](https://getbootstrap.com/docs/4.3/layout/grid/#stacked-to-horizontal)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row>
    <Col sm={8}>
      <MD>Col[sm=8]</MD>
    </Col>
    <Col sm={4}>
      <MD>Col[sm=4]</MD>
    </Col>
  </Row>
  <Row>
    <Col sm>
      <MD>Col[sm]</MD>
    </Col>
    <Col sm>
      <MD>Col[sm]</MD>
    </Col>
    <Col sm>
      <MD>Col[sm]</MD>
    </Col>
  </Row>
</Grid>;
```

#### [Mix and match](https://getbootstrap.com/docs/4.3/layout/grid/#mix-and-match)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <p>Stack the columns on mobile by making one full-width and the other half-width</p>
  <Row>
    <Col size={12} md={8}>
      <MD>Col[size=12][md=8]</MD>
    </Col>
    <Col size={6} md={4}>
      <MD>Col[size=6][md=4]</MD>
    </Col>
  </Row>
  <p>Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop</p>
  <Row>
    <Col size={6} md={4}>
      <MD>Col[size=6][md=4]</MD>
    </Col>
    <Col size={6} md={4}>
      <MD>Col[size=6][md=4]</MD>
    </Col>
    <Col size={6} md={4}>
      <MD>Col[size=6][md=4]</MD>
    </Col>
  </Row>
  <p>Columns are always 50% wide, on mobile and desktop</p>
  <Row>
    <Col size={6}>
      <MD>Col[size=6]</MD>
    </Col>
    <Col size={6}>
      <MD>Col[size=6]</MD>
    </Col>
  </Row>
</Grid>;
```

### Alignment

#### [Vertical alignment](https://getbootstrap.com/docs/4.3/layout/grid/#vertical-alignment)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row alignItems="start" style={{ minHeight: '5em' }}>
    <Col>
      <MD>One of three columns</MD>
    </Col>
    <Col>
      <MD>One of three columns</MD>
    </Col>
    <Col>
      <MD>One of three columns</MD>
    </Col>
  </Row>
  <Row alignItems="center" style={{ minHeight: '5em' }}>
    <Col>
      <MD>One of three columns</MD>
    </Col>
    <Col>
      <MD>One of three columns</MD>
    </Col>
    <Col>
      <MD>One of three columns</MD>
    </Col>
  </Row>
  <Row alignItems="end" style={{ minHeight: '5em' }}>
    <Col>
      <MD>One of three columns</MD>
    </Col>
    <Col>
      <MD>One of three columns</MD>
    </Col>
    <Col>
      <MD>One of three columns</MD>
    </Col>
  </Row>
</Grid>;
```

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row style={{ minHeight: '6em' }}>
    <Col alignSelf="start">
      <MD>One of three columns</MD>
    </Col>
    <Col alignSelf="center">
      <MD>One of three columns</MD>
    </Col>
    <Col alignSelf="end">
      <MD>One of three columns</MD>
    </Col>
  </Row>
</Grid>;
```

#### [Horizontal alignment](https://getbootstrap.com/docs/4.3/layout/grid/#horizontal-alignment)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row justifyContent="start">
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
  </Row>
  <Row justifyContent="center">
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
  </Row>
  <Row justifyContent="end">
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
  </Row>
  <Row justifyContent="around">
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
  </Row>
  <Row justifyContent="between">
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
    <Col size={4}>
      <MD>One of two columns</MD>
    </Col>
  </Row>
</Grid>;
```

#### [No gutters](https://getbootstrap.com/docs/4.3/layout/grid/#no-gutters)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid gutters={false} debug>
  <Row>
    <Col size={12} sm={6} md={8}>
      <MD>Col[size=12][sm=6][md=8]</MD>
    </Col>
    <Col size={6} md={4}>
      <MD>Col[size=6][md=4]</MD>
    </Col>
  </Row>
</Grid>;
```

#### [Column wrapping](https://getbootstrap.com/docs/4.3/layout/grid/#column-wrapping)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row>
    <Col size={9}>
      <MD>Col[size=9]</MD>
    </Col>
    <Col size={4}>
      <MD>
        Col[size=4]: since 9 + 4 = 13 &gt; 12, this column gets wrapped onto a new line as one
        contiguous unit.
      </MD>
    </Col>
    <Col size={6}>
      <MD>Col[size=6]: subsequent columns continue along the new line.</MD>
    </Col>
  </Row>
</Grid>;
```

#### [Column breaks](https://getbootstrap.com/docs/4.3/layout/grid/#column-breaks)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row>
    <Col size={6} sm={3}>
      <MD>Col[size=6][sm=3]</MD>
    </Col>
    <Col size={6} sm={3}>
      <MD>Col[size=6][sm=3]</MD>
    </Col>
    <div style={{ width: '100%' }} />
    <Col size={6} sm={3}>
      <MD>Col[size=6][sm=3]</MD>
    </Col>
    <Col size={6} sm={3}>
      <MD>Col[size=6][sm=3]</MD>
    </Col>
  </Row>
</Grid>;
```

### [Reordering](https://getbootstrap.com/docs/4.3/layout/grid/#order-classes)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row>
    <Col>
      <MD>First, but unordered</MD>
    </Col>
    <Col order="12">
      <MD>Second, but last</MD>
    </Col>
    <Col order="1">
      <MD>Third, but first</MD>
    </Col>
  </Row>
  <Row>
    <Col order="last">
      <MD>First, but last</MD>
    </Col>
    <Col>
      <MD>Second, but unordered</MD>
    </Col>
    <Col order="first">
      <MD>Third, but first</MD>
    </Col>
  </Row>
</Grid>;
```

### [Offsetting columns](https://getbootstrap.com/docs/4.3/layout/grid/#offset-classes)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<>
  <Grid debug>
    <Row>
      <Col md={4}>
        <MD>Col[md=4]</MD>
      </Col>
      <Col md={4} offsetMd={4}>
        <MD>Col[md=4][offsetMd=4]</MD>
      </Col>
    </Row>
    <Row>
      <Col md={3} offsetMd={3}>
        <MD>Col[md=3][offsetMd=3]</MD>
      </Col>
      <Col md={3} offsetMd={3}>
        <MD>Col[md=3][offsetMd=3]</MD>
      </Col>
    </Row>
    <Row>
      <Col md={6} offsetMd={3}>
        <MD>Col[md=6][offsetMd=3]</MD>
      </Col>
    </Row>
  </Grid>
  <Grid debug className="u-mt">
    <Row>
      <Col sm={5} md={6}>
        <MD>Col[sm=5][md=6]</MD>
      </Col>
      <Col sm={5} offsetSm={2} md={6} offsetMd={0}>
        <MD>Col[sm=5][offsetSm=2][md=6][offsetMd=0]</MD>
      </Col>
    </Row>
    <Row>
      <Col sm={6} md={5} lg={6}>
        <MD>Col[sm=6][md=5][lg=6]</MD>
      </Col>
      <Col sm={6} md={5} offsetMd={2} lg={6} offsetLg={0}>
        <MD>Col[sm=6][md=5][offsetMd=2][lg=6][offsetLg=0]</MD>
      </Col>
    </Row>
  </Grid>
</>;
```

### [Nesting](https://getbootstrap.com/docs/4.3/layout/grid/#nesting)

```jsx
const { MD } = require('@zendeskgarden/react-typography/src');

<Grid debug>
  <Row>
    <Col sm={9}>
      <MD>
        Level 1: Col[sm=9]
        <Row>
          <Col size={8} sm={6}>
            <MD>Level 2: Col[size=8][sm=6]</MD>
          </Col>
          <Col size={4} sm={6}>
            <MD>Level 2: Col[size=4][sm=6]</MD>
          </Col>
        </Row>
      </MD>
    </Col>
  </Row>
</Grid>;
```
