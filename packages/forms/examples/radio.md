### Controlled Usage

```jsx
initialState = {
  selectedValue: 'option-1'
};

const CenteredText = styled.div`
  text-align: center;
`;

<Grid>
  <Row>
    <Col md>
      <form>
        <div role="group" aria-label="Controlled Usage Example">
          <Field>
            <Radio
              name="controlled-options"
              value="option-1"
              checked={state.selectedValue === 'option-1'}
              onChange={event => setState({ selectedValue: event.target.value })}
            >
              <Label>Option 1</Label>
              <Hint>Controlled radio</Hint>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="controlled-options"
              value="option-2"
              checked={state.selectedValue === 'option-2'}
              onChange={event => setState({ selectedValue: event.target.value })}
            >
              <Label>Option 2</Label>
              <Hint>Controlled radio</Hint>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="controlled-options"
              value="option-3"
              checked={state.selectedValue === 'option-3'}
              onChange={event => setState({ selectedValue: event.target.value })}
            >
              <Label>Option 3</Label>
              <Hint>Controlled radio</Hint>
            </Radio>
          </Field>
        </div>
      </form>
    </Col>
    <Col md>
      <CenteredText>Selected value: {state.selectedValue}</CenteredText>
    </Col>
  </Row>
</Grid>;
```
