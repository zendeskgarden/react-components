### Basic Scrollable Example

Our custom scrollbar implementation is uses the
[react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars)
library internally.

Take a look at their [API documentation](https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/API.md)
to view all of the available customization props and methods.

```jsx
const StyledSection = styled.div`
  margin-bottom: 16px;
`;

const ExampleText = () => (
  <StyledSection>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
    odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
    quo voluptas nulla pariatur?
  </StyledSection>
);

<Scrollbar style={{ height: 200 }}>
  <ExampleText />
  <ExampleText />
  <ExampleText />
  <ExampleText />
  <ExampleText />
  <ExampleText />
</Scrollbar>;
```

### Dark Mode

```jsx
<Scrollbar style={{ width: '100%', height: 500 }} dark>
  <img src="images/beach-dark.jpg" alt="Dark Beach Example" style={{ width: 2000 }} />
</Scrollbar>
```

## Scroll Jumping

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const StyledSection = styled.div`
  margin-bottom: 16px;
`;

const ExampleText = () => (
  <StyledSection>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
    odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
    quo voluptas nulla pariatur?
  </StyledSection>
);

<Grid>
  <Row>
    <Col sm>
      <Button stretched onClick={() => this.scrollbarRef.scrollToTop()}>
        Scroll to top
      </Button>
    </Col>
    <Col sm>
      <Button stretched onClick={() => this.scrollbarRef.scrollToBottom()}>
        Scroll to bottom
      </Button>
    </Col>
  </Row>
  <Row>
    <Col>
      <Scrollbar
        style={{ height: 250, marginTop: 40 }}
        scrollbarRef={ref => (this.scrollbarRef = ref)}
      >
        <ExampleText />
        <ExampleText />
        <ExampleText />
        <ExampleText />
        <ExampleText />
        <ExampleText />
      </Scrollbar>
    </Col>
  </Row>
</Grid>;
```
