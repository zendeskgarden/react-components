```jsx
const { XXXL, XXL, MD } = require('@zendeskgarden/react-typography/src');
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isLoading: true
};

<Grid>
  <Row alignItems="start">
    <Col md={8}>
      <XXXL>{state.isLoading ? <Skeleton /> : 'There. You see Lord Vader.'}</XXXL>
      {state.isLoading && (
        <MD>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </MD>
      )}
      {!state.isLoading && (
        <MD>
          Continue with the operation. You may fire when ready. What? You're far too trusting.
          Dantooine is too remote to make an effective demonstration. But don't worry. We will deal
          with your Rebel friends soon enough. No! Commence primary ignition.
        </MD>
      )}
    </Col>
    <Col md={4}>
      <Button stretched onClick={() => setState({ isLoading: !state.isLoading })}>
        Toggle Skeleton Loaders
      </Button>
    </Col>
  </Row>
</Grid>;
```
