All standard [anchor properties](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) are supported.

Standard Anchor attributes:
```
<Grid columns={2} stretched>
    <Anchor href='https://www.zendesk.com/' target='_blank'>That's no moon!</Anchor>
</Grid>
```

Default styling:
```
<div>
Apparently we had reached a great height in the <Anchor>atmosphere</Anchor>, for the sky was a dead black, and the stars had ceased to twinkle. By the same <Anchor>illusion which lifts the horizon</Anchor> of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an <Anchor>immense dark sphere</Anchor>, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a <Anchor>ruddy light streaming</Anchor> through a rift in the clouds.
</div>
```

Custom color:
```
<div><Anchor className='u-fg-mandy'>Han Solo</Anchor>, I've been <Anchor className='u-fg-sea-buckthorn'>waiting</Anchor> for this day <Anchor className='u-fg-chateau-green'>for a long time.</Anchor></div>
```

Custom tabIndex:
```
<div><Anchor tabIndex={-1}>Train</Anchor> yourself to <Anchor href='#'>let go</Anchor> of everything you <Anchor tabIndex={-1}>fear to lose.</Anchor></div>
```