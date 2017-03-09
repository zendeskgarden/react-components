Basic tooltip:
```
<Grid>
  <View style={{ margin: 10}}>
    <Tooltip
      left={10}
      top={10}
      content='This is a tooltip with some text.'
      inline
    />
  </View>
</Grid>
```
Positioning:
```
<Grid>
  <Button title='Just a basic tooltip' tooltipPositioning={['top']}>Top</Button>
  <Button title='Just a basic tooltip' tooltipPositioning={['bottom']}>Bottom</Button>
  <Button title='Just a basic tooltip' tooltipPositioning={['right']}>Right</Button>
  <Button title='Just a basic tooltip' tooltipPositioning={['left']}>Left</Button>
  <Button title='Just a basic tooltip'>Adaptive</Button>
</Grid>
```
