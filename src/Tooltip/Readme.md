Tooltips require a parent [TooltipProvider](#tooltipprovider) to become visible.

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

Sizing:

```
<Grid style={{height: 55}}>
  <Tooltip inline top={10} left={10}>Default size</Tooltip>
  <Tooltip inline top={10} left={115} size='medium'>Medium size</Tooltip>
  <Tooltip inline top={10} left={225} size='large'>Large size</Tooltip>
</Grid>
```

Content:

```
<Grid style={{height: 45}}>
  <Tooltip inline top={10} left={10} size='medium'>String content</Tooltip>
  <Tooltip inline top={10} left={130} size='medium'>This tooltip has <strong>rich content</strong></Tooltip>
</Grid>
```
