```jsx
const StyledMenu = styled.div`
  ${menuStyles('top', {
    animationModifier: '[data-garden-animate="true"]'
  })};

  padding: 100px;

  ${arrowStyles('bottom', {
    animationModifier: '[data-garden-animate="true"]'
  })};
`;

initialState = {
  animate: false
};

<PopperManager>
  <PopperReference>
    {({ ref }) => (
      <button type="button" ref={ref} onClick={event => setState({ animate: true })}>
        Reference element
      </button>
    )}
  </PopperReference>
  <Popper placement="top">
    {({ ref, style, placement, arrowProps }) => (
      <div ref={ref} style={style}>
        <StyledMenu data-garden-animate={state.animate}>Menu</StyledMenu>
      </div>
    )}
  </Popper>
</PopperManager>;
```
