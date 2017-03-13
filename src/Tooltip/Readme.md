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
  <Button title='Just a basic tooltip'>Default</Button>
  <Button title='Just a basic tooltip' tooltipPositioning='top'>Top</Button>
  <Button title='Just a basic tooltip' tooltipPositioning='bottom'>Bottom</Button>
  <Button title='Just a basic tooltip' tooltipPositioning='right'>Right</Button>
  <Button title='Just a basic tooltip' tooltipPositioning='left'>Left</Button>
  <Button title='Just a basic tooltip' tooltipPositioning={['bottom', 'top', 'right', 'left']}>Adaptive</Button>
</Grid>
```

Long tooltips:

```
<Button title='Bacon ipsum dolor amet pork belly pork chop short loin filet mignon, frankfurter tri-tip beef jerky. Pork loin corned beef pork chop filet mignon. Capicola salami rump, beef fatback tenderloin turkey. Ham hock prosciutto sausage fatback picanha. Sausage beef ribs shank capicola cupim pork belly kielbasa flank. Shank ground round swine meatball pastrami.'>Long tooltips</Button>
```
