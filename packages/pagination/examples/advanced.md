### Offset Pagination

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { MD, Code, UnorderedList } = require('@zendeskgarden/react-typography/src');

initialState = {
  currentPage: 1
};

const transformPageProps = (pageType, props) => {
  props['data-test-id'] = pageType;

  switch (pageType) {
    case 'previous':
      props['aria-label'] = 'Página anterior';
      break;

    case 'page':
      if (props['aria-current']) {
        props['aria-label'] = `Página actual, página # ${props.key}`;
      } else {
        props['aria-label'] = `Página ${props.key}`;
      }
      break;

    case 'next':
      props['aria-label'] = 'Siguiente página';
      break;
  }

  return props;
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed>
        <MD className="u-mb-xs">
          Use <Code>transformPageProps</Code> to:
        </MD>
        <UnorderedList>
          <UnorderedList.Item>
            Add <Code>data-test-id</Code> attributes to each page
          </UnorderedList.Item>
          <UnorderedList.Item>
            Replace default <Code>aria-label</Code> page attributes with localized text
          </UnorderedList.Item>
        </UnorderedList>
        <MD className="u-mt-xs">Expand the code block for details.</MD>
      </Well>
    </Col>
    <Col alignSelf="center">
      <nav aria-label="Advanced offset pagination">
        <Pagination
          totalPages={11}
          currentPage={state.currentPage}
          onChange={currentPage => setState({ currentPage })}
          transformPageProps={transformPageProps}
          data-test-id="pagination"
        />
      </nav>
    </Col>
  </Row>
</Grid>;
```
