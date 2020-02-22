```jsx
const StyledMenu = styled.div`
  ${menuStyles('bottom', {
    animationModifier: '[data-garden-animate="true"]'
  })};

  padding: 100px;

  ${arrowStyles('top', {
    animationModifier: '[data-garden-animate="true"]'
  })};
`;

initialState = {
  animate: false
};

<PopperManager>
  <PopperReference>
    {({ ref }) => (
      <button type="button" ref={ref} onClick={event => setState({ animate: !state.animate })}>
        Reference element
      </button>
    )}
  </PopperReference>
  <Popper placement="bottom">
    {({ ref, style, placement, arrowProps }) => (
      <div ref={ref} style={style}>
        <StyledMenu data-garden-animate={state.animate}>Menu</StyledMenu>
      </div>
    )}
  </Popper>
</PopperManager>;
```
